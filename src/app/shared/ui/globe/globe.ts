import { ChangeDetectionStrategy, Component, DestroyRef, ElementRef, afterNextRender, effect, inject, viewChild } from '@angular/core';
import { ThemeService } from '../../../core/theme/theme.service';

interface Palette {
  dot: string;
  teal: string;
  lime: string;
  text: string;
  light: boolean;
}

const D = Math.PI / 180;
const CITIES: [string, number, number][] = [
  ['Dallas', 32.8, -96.8],
  ['Dubai', 25.2, 55.3],
  ['Nagpur', 21.1, 79.1],
  ['Hyderabad', 17.4, 78.5],
];
const LINKS: [number, number][] = [[0, 1], [1, 2], [2, 3], [0, 2]];
const LABEL_OFFSET: [number, number][] = [[10, -8], [-48, -8], [10, -10], [10, 16]];

/**
 * Rotating dotted globe linking the four offices (Canvas 2D, no WebGL library).
 * Pauses off-screen / in background tabs, draws one static frame for reduced motion,
 * and re-reads colours from CSS tokens when the theme changes.
 */
@Component({
  selector: 'app-globe',
  template: `<canvas #canvas aria-hidden="true"></canvas>`,
  styles: `:host { display: block; width: 100%; height: 100%; } canvas { width: 100%; height: 100%; display: block; }`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Globe {
  private readonly canvas = viewChild.required<ElementRef<HTMLCanvasElement>>('canvas');
  private readonly theme = inject(ThemeService);
  private readonly destroyRef = inject(DestroyRef);

  private ctx!: CanvasRenderingContext2D;
  private pts: [number, number][] = [];
  private W = 0;
  private H = 0;
  private R = 0;
  private rot = -0.6;
  private raf: number | null = null;
  private visible = true;
  private palette!: Palette;

  constructor() {
    const N = 1100;
    const GA = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < N; i++) {
      const y = 1 - (i / (N - 1)) * 2;
      this.pts.push([Math.asin(y), (i * GA) % (Math.PI * 2)]);
    }

    afterNextRender(() => {
      const el = this.canvas().nativeElement;
      this.ctx = el.getContext('2d')!;
      this.readPalette();
      this.resize();
      const onResize = () => {
        this.resize();
        this.draw();
      };
      addEventListener('resize', onResize);
      const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduce) {
        this.draw();
      } else {
        const io = new IntersectionObserver(([e]) => {
          this.visible = e.isIntersecting;
          if (this.visible && this.raf === null) this.loop();
        });
        io.observe(el);
        const onVis = () => {
          if (!document.hidden && this.visible && this.raf === null) this.loop();
        };
        document.addEventListener('visibilitychange', onVis);
        this.destroyRef.onDestroy(() => {
          io.disconnect();
          document.removeEventListener('visibilitychange', onVis);
        });
      }
      this.destroyRef.onDestroy(() => {
        removeEventListener('resize', onResize);
        if (this.raf !== null) cancelAnimationFrame(this.raf);
      });
    });

    // Re-read colours after the theme tokens switch.
    effect(() => {
      this.theme.mode();
      if (!this.ctx) return;
      requestAnimationFrame(() => {
        this.readPalette();
        if (this.raf === null) this.draw();
      });
    });
  }

  private readPalette(): void {
    const s = getComputedStyle(document.documentElement);
    const v = (n: string) => s.getPropertyValue(n).trim();
    this.palette = { dot: v('--globe-dot'), teal: v('--teal'), lime: v('--lime'), text: v('--text'), light: this.theme.isLight() };
  }

  private resize(): void {
    const el = this.canvas().nativeElement;
    const dpr = Math.min(devicePixelRatio || 1, 2);
    const b = el.getBoundingClientRect();
    this.W = b.width;
    this.H = b.height;
    el.width = this.W * dpr;
    el.height = this.H * dpr;
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    this.R = Math.min(this.W, this.H) * 0.42;
  }

  private proj(lat: number, lon: number): [number, number, number] {
    const tilt = -0.35;
    const x = Math.cos(lat) * Math.sin(lon + this.rot);
    const y = -Math.sin(lat);
    const z = Math.cos(lat) * Math.cos(lon + this.rot);
    return [this.W / 2 + x * this.R, this.H / 2 + (y * Math.cos(tilt) - z * Math.sin(tilt)) * this.R, y * Math.sin(tilt) + z * Math.cos(tilt)];
  }

  private loop = (): void => {
    this.rot += 0.0025;
    this.draw();
    this.raf = this.visible && !document.hidden ? requestAnimationFrame(this.loop) : null;
  };

  private draw(): void {
    const { ctx, W, H, R } = this;
    const P = this.palette;
    ctx.clearRect(0, 0, W, H);
    const g = ctx.createRadialGradient(W / 2 - R * 0.3, H / 2 - R * 0.35, R * 0.1, W / 2, H / 2, R * 1.05);
    g.addColorStop(0, P.light ? 'rgba(13,148,136,.10)' : 'rgba(45,212,191,.10)');
    g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(W / 2, H / 2, R, 0, 7);
    ctx.fill();
    ctx.strokeStyle = P.light ? 'rgba(15,118,110,.25)' : 'rgba(45,212,191,.22)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(W / 2, H / 2, R + 0.5, 0, 7);
    ctx.stroke();

    for (const [la, lo] of this.pts) {
      const [x, y, z] = this.proj(la, lo);
      if (z < -0.05) continue;
      ctx.fillStyle = `rgb(${P.dot} / ${(P.light ? 0.12 : 0.14) + z * (P.light ? 0.55 : 0.7)})`;
      ctx.beginPath();
      ctx.arc(x, y, 0.7 + z * 0.9, 0, 7);
      ctx.fill();
    }

    const pos = CITIES.map(([, la, lo]) => this.proj(la * D, lo * D));
    for (const [a, b] of LINKS) {
      const A = pos[a];
      const B = pos[b];
      if (A[2] < 0 || B[2] < 0) continue;
      const mx = (A[0] + B[0]) / 2;
      const my = (A[1] + B[1]) / 2;
      const k = 1 + (Math.hypot(A[0] - B[0], A[1] - B[1]) / R) * 0.45;
      const gr = ctx.createLinearGradient(A[0], A[1], B[0], B[1]);
      gr.addColorStop(0, P.teal);
      gr.addColorStop(1, P.lime);
      ctx.strokeStyle = gr;
      ctx.lineWidth = 1.6;
      ctx.beginPath();
      ctx.moveTo(A[0], A[1]);
      ctx.quadraticCurveTo(W / 2 + (mx - W / 2) * k, H / 2 + (my - H / 2) * k, B[0], B[1]);
      ctx.stroke();
    }

    ctx.font = '600 12px Inter, sans-serif';
    pos.forEach((p, i) => {
      if (p[2] < 0) return;
      ctx.fillStyle = P.light ? 'rgba(15,118,110,.18)' : 'rgba(45,212,191,.25)';
      ctx.beginPath();
      ctx.arc(p[0], p[1], 9, 0, 7);
      ctx.fill();
      ctx.fillStyle = P.teal;
      ctx.beginPath();
      ctx.arc(p[0], p[1], 3.5, 0, 7);
      ctx.fill();
      ctx.fillStyle = P.text;
      ctx.fillText(CITIES[i][0], p[0] + LABEL_OFFSET[i][0], p[1] + LABEL_OFFSET[i][1]);
    });
  }
}
