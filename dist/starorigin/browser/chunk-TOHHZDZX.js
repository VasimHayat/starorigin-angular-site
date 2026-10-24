import{$ as m,ja as A,la as L,ma as X,na as u}from"./chunk-2BTKQDYQ.js";import{A as p,Cb as R,O as g,Qa as M,Ra as N,Sa as r,Ta as y,Ua as P,Ub as z,W as s,a as h,aa as l,b as f,ba as x,bb as T,cb as B,da as C,ea as w,ia as D,ma as E,mb as j,na as F,oa as I,qa as o,ra as a,sa as c,x as b,y as v,z as S}from"./chunk-645TR44L.js";var _=`
    .p-skeleton {
        display: block;
        overflow: hidden;
        background: dt('skeleton.background');
        border-radius: dt('skeleton.border.radius');
    }

    .p-skeleton::after {
        content: '';
        animation: p-skeleton-animation 1.2s infinite;
        height: 100%;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        transform: translateX(-100%);
        z-index: 1;
        background: linear-gradient(90deg, rgba(255, 255, 255, 0), dt('skeleton.animation.background'), rgba(255, 255, 255, 0));
    }

    [dir='rtl'] .p-skeleton::after {
        animation-name: p-skeleton-animation-rtl;
    }

    .p-skeleton-circle {
        border-radius: 50%;
    }

    .p-skeleton-animation-none::after {
        animation: none;
    }

    @keyframes p-skeleton-animation {
        from {
            transform: translateX(-100%);
        }
        to {
            transform: translateX(100%);
        }
    }

    @keyframes p-skeleton-animation-rtl {
        from {
            transform: translateX(100%);
        }
        to {
            transform: translateX(-100%);
        }
    }
`;var q={root:{position:"relative"}},G={root:({instance:e})=>["p-skeleton p-component",{"p-skeleton-circle":e.shape==="circle","p-skeleton-animation-none":e.animation==="none"}]},O=(()=>{class e extends A{name="skeleton";style=_;classes=G;inlineStyles=q;static \u0275fac=(()=>{let t;return function(i){return(t||(t=g(e)))(i||e)}})();static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})();var V=new S("SKELETON_INSTANCE"),k=(()=>{class e extends X{componentName="Skeleton";$pcSkeleton=p(V,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=p(u,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass;shape="rectangle";animation="wave";borderRadius;size;width="100%";height="1rem";_componentStyle=p(O);get containerStyle(){let t=this._componentStyle?.inlineStyles.root,n;return this.$unstyled()||(this.size?n=f(h({},t),{width:this.size,height:this.size,borderRadius:this.borderRadius}):n=f(h({},t),{width:this.width,height:this.height,borderRadius:this.borderRadius})),n}get dataP(){return this.cn({[this.shape]:this.shape})}static \u0275fac=(()=>{let t;return function(i){return(t||(t=g(e)))(i||e)}})();static \u0275cmp=l({type:e,selectors:[["p-skeleton"]],hostVars:6,hostBindings:function(n,i){n&2&&(D("aria-hidden",!0)("data-p",i.dataP),M(i.containerStyle),N(i.cn(i.cx("root"),i.styleClass)))},inputs:{styleClass:"styleClass",shape:"shape",animation:"animation",borderRadius:"borderRadius",size:"size",width:"width",height:"height"},features:[T([O,{provide:V,useExisting:e},{provide:L,useExisting:e}]),C([u]),w],decls:0,vars:0,template:function(n,i){},dependencies:[R,m],encapsulation:2,changeDetection:0})}return e})(),H=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=x({type:e});static \u0275inj=v({imports:[k,m,m]})}return e})();var Q=()=>[1,2,3];function U(e,d){e&1&&c(0,"p-skeleton",9)}var K=class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=l({type:e,selectors:[["app-page-skeleton"]],decls:12,vars:1,consts:[["aria-busy","true","aria-live","polite",1,"page-hero"],[1,"wrap"],[1,"sr-only"],["width","180px","height","14px","styleClass","mb-6"],["width","70%","height","64px","styleClass","mb-4"],["width","45%","height","64px","styleClass","mb-8"],["width","55%","height","18px","styleClass","mb-3"],["width","40%","height","18px"],[1,"grid","g3",2,"margin-top","64px"],["height","200px"]],template:function(t,n){t&1&&(o(0,"section",0)(1,"div",1)(2,"span",2),r(3,"Loading\u2026"),a(),c(4,"p-skeleton",3)(5,"p-skeleton",4)(6,"p-skeleton",5)(7,"p-skeleton",6)(8,"p-skeleton",7),o(9,"div",8),F(10,U,1,0,"p-skeleton",9,E),a()()()),t&2&&(s(10),I(B(0,Q)))},dependencies:[H,k],encapsulation:2,changeDetection:0})},$=class e{notFound=j(!1);static \u0275fac=function(t){return new(t||e)};static \u0275cmp=l({type:e,selectors:[["app-page-error"]],inputs:{notFound:[1,"notFound"]},decls:17,vars:3,consts:[[1,"nf"],["aria-hidden","true",1,"aurora"],[1,"code","grad-text"],[2,"font-size","clamp(28px, 4vw, 44px)","margin","24px 0 12px"],[1,"muted"],[1,"btn-row",2,"justify-content","center","margin-top","28px"],["routerLink","/jobs",1,"btn","btn-glow"],["routerLink","/",1,"btn","btn-ghost"]],template:function(t,n){t&1&&(o(0,"section",0)(1,"div",1),c(2,"i")(3,"i")(4,"i"),a(),o(5,"div")(6,"div",2),r(7),a(),o(8,"h1",3),r(9),a(),o(10,"p",4),r(11),a(),o(12,"div",5)(13,"a",6),r(14,"Search jobs"),a(),o(15,"a",7),r(16,"Back to home"),a()()()()),t&2&&(s(7),y(n.notFound()?"404":"Oops"),s(2),P(" ",n.notFound()?"This page has moved \u2014 or never existed.":"We couldn\u2019t load this page."," "),s(2),y(n.notFound()?"Try one of these instead.":"Please check your connection and try again."))},dependencies:[z],encapsulation:2,changeDetection:0})};export{K as a,$ as b};
