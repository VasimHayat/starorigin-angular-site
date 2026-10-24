import{a as ir}from"./chunk-MFWDLC4M.js";import{a as er}from"./chunk-NVPEKUCG.js";import{a as ur,b as pr,c as fr,d as yo}from"./chunk-43QONM4Y.js";import{a as ar,b as Wo,d as sr,e as lr,g as cr}from"./chunk-S5C5QLRD.js";import{a as nr,b as dr}from"./chunk-TSVUKQGG.js";import{a as gr}from"./chunk-7ML2CTP6.js";import{b as Ge,c as ne,e as Ye,f as Ze,h as Qe,j as Xe,k as qe,q as Ke}from"./chunk-OL5BAMWQ.js";import{b as jo,c as Uo,e as X}from"./chunk-5Z6OOJ67.js";import{a as tr,c as $o}from"./chunk-ADZG42A6.js";import{$ as z,A as re,E as te,H as $e,J as We,T as ho,U as io,W as Ho,_ as vo,b as Lo,d as Ve,ha as je,ja as no,ka as Ue,la as ao,m as No,ma as O,na as x,o as oe,oa as rr,z as ee}from"./chunk-2BTKQDYQ.js";import{c as _o,d as Je,f as Vo,m as or}from"./chunk-ACRIT4Y4.js";import{a as ko}from"./chunk-E7VQ5XCN.js";import{A as m,Aa as To,Ab as mo,Ba as k,C as I,Cb as Q,D as T,Da as u,Db as Oo,E as M,Ea as Mo,Fa as Eo,Fb as Me,G as lo,Ga as fo,Ha as Se,Hb as Jo,I as F,Ia as C,Ib as Ee,J as ye,Ja as w,K as xe,Kb as ze,L,Lb as De,M as So,Mb as Re,O as S,Oa as zo,Pa as Do,Q as Ce,Qa as Ro,Qb as Pe,Ra as v,S as A,Sa as f,Sb as Fe,Ta as B,Tb as Ae,U as wo,Ua as to,Ub as bo,V as we,Vb as Oe,W as a,Wb as Le,Xb as Ne,Yb as He,_ as Be,a as q,aa as y,b as fe,ba as W,bb as Y,ca as Io,da as oo,db as Po,ea as E,eb as Bo,fa as h,ha as _e,i as ge,ia as g,ib as Fo,j as qo,ja as R,k as so,ka as P,kb as H,lb as Ko,m as me,mb as _,n as be,na as j,o as he,oa as U,p as ve,pa as i,qa as s,ra as l,sa as p,sb as b,t as ke,ta as co,tb as Z,ua as uo,va as po,wa as eo,wb as Ao,x as K,xa as ro,xb as Ie,y as $,ya as N,yb as go,z as J,za as G,zb as Te}from"./chunk-645TR44L.js";var mr=[{path:"",title:"StarOrigin \u2014 Recruitment & Staffing across India, UAE & USA",loadComponent:()=>import("./chunk-LQVVS34E.js")},{path:"services",title:"Services",loadComponent:()=>import("./chunk-SJI3UA4J.js")},{path:"services/:slug",loadComponent:()=>import("./chunk-3E4SAOLC.js")},{path:"industries",title:"Industries",loadComponent:()=>import("./chunk-IM62LWRM.js")},{path:"case-studies",title:"Case studies",loadComponent:()=>import("./chunk-Y5YQCBVI.js")},{path:"hire",title:"Hire talent",loadComponent:()=>import("./chunk-LLOVBCVA.js")},{path:"jobs",title:"Jobs",loadComponent:()=>import("./chunk-TWPQ2OX2.js")},{path:"jobs/:id",loadComponent:()=>import("./chunk-5HWWNI7T.js")},{path:"submit-cv",title:"Submit your CV",loadComponent:()=>import("./chunk-SFAEIKMC.js")},{path:"career-resources",title:"Career resources",loadComponent:()=>import("./chunk-O7EOQA6I.js")},{path:"about",title:"About",loadComponent:()=>import("./chunk-7PDZI3JE.js")},{path:"team",title:"Team",loadComponent:()=>import("./chunk-JFK54XLT.js")},{path:"offices",title:"Offices",loadComponent:()=>import("./chunk-AUYDNVJI.js")},{path:"careers",title:"Careers",loadComponent:()=>import("./chunk-WIXAT5Q2.js")},{path:"contact",title:"Contact",loadComponent:()=>import("./chunk-DRK65DUQ.js")},{path:"insights",title:"Insights",loadComponent:()=>import("./chunk-QN3S465C.js")},{path:"insights/:slug",loadComponent:()=>import("./chunk-VLEO7WDL.js")},{path:"legal/:slug",loadComponent:()=>import("./chunk-UDQRMYKP.js")},{path:"**",title:"Page not found | StarOrigin",loadComponent:()=>import("./chunk-NSFUHFYL.js")}];var Pn=new Set(["pages","insights","legal"]),br=(e,n)=>{let o=m(Je),t=`${o.apiBaseUrl}/`;if(!o.useMockApi||!e.url.startsWith(t))return n(e);let r=e.url.slice(t.length).split("?")[0].split("/").filter(Boolean),d=o.mockLatencyMs,c=()=>new Ee({status:404,statusText:"Not Found",url:e.url});if(e.method==="POST"||e.method==="PUT"){let D={id:crypto.randomUUID(),status:"received",receivedAt:new Date().toISOString()};return o.production||console.info(`[mock-api] ${e.method} /${r.join("/")}`,e.body),ge(new Jo({status:201,body:D})).pipe(ve(d))}if(e.method!=="GET"||r.length===0||r.length>2)return qo(c);let[xo,Co]=r,ce=Co!==void 0&&Pn.has(xo),Rn=e.clone({url:ce?`${o.mockApiRoot}/${xo}/${Co}.json`:`${o.mockApiRoot}/${xo}.json`});return me(d).pipe(ke(()=>n(Rn)),he(D=>qo(()=>D.status===200||D.status===404?c():D)),so(D=>{if(!(D instanceof Jo))return D;if(typeof D.body!="object"||D.body===null)throw c();if(ce||Co===void 0)return D;let ue=(Array.isArray(D.body)?D.body:[]).find(pe=>pe.id===Co||pe.slug===Co);if(!ue)throw c();return D.clone({body:ue})}))};var hr={arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',"arrow-ur":'<path d="M7 17 17 7M8 7h9v9"/>',"arrow-l":'<path d="M19 12H5M11 18l-6-6 6-6"/>',chev:'<path d="m6 9 6 6 6-6"/>',search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',sparkle:'<path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9zM19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/>',crown:'<path d="m2 7 5 5 5-8 5 8 5-5-2 12H4z"/>',users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',layers:'<path d="m12 2 10 5-10 5L2 7z"/><path d="m2 17 10 5 10-5M2 12l10 5 10-5"/>',flex:'<path d="M17 1l4 4-4 4"/><path d="M3 11V9a4 4 0 0 1 4-4h14M7 23l-4-4 4-4"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>',flag:'<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><path d="M4 22v-7"/>',cog:'<circle cx="12" cy="12" r="3"/><path d="M12 1v3M12 20v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M1 12h3M20 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/>',brief:'<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',check:'<circle cx="12" cy="12" r="10" opacity=".25"/><path d="m8 12 3 3 5-6"/>',tick:'<path d="M20 6 9 17l-5-5"/>',minus:'<circle cx="12" cy="12" r="10" opacity=".35"/><path d="M8 12h8"/>',lock:'<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',pin:'<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>',clock:'<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',phone:'<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/>',mail:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',upload:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/>',file:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h5"/>',globe:'<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10z"/>',zap:'<path d="M13 2 3 14h9l-1 8 10-12h-9z"/>',heart:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z"/>',target:'<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',chart:'<path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 6-6"/>',book:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V2H6.5A2.5 2.5 0 0 0 4 4.5z"/><path d="M4 19.5V22h16v-5"/>',code:'<path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/>',bank:'<path d="M3 21h18M5 21V10M19 21V10M9 21V10M15 21V10M2 10l10-7 10 7z"/>',factory:'<path d="M2 20V8l6 4V8l6 4V4h8v16z"/><path d="M6 16h2M12 16h2"/>',health:'<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',cart:'<circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/>',truck:'<path d="M1 3h15v13H1zM16 8h4l3 3v5h-7z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>',radio:'<circle cx="12" cy="12" r="2"/><path d="M16.2 7.8a6 6 0 0 1 0 8.5M7.8 16.2a6 6 0 0 1 0-8.5M19.1 4.9a10 10 0 0 1 0 14.2M4.9 19.1a10 10 0 0 1 0-14.2"/>',tool:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9z"/>',bolt:'<path d="M13 2 3 14h9l-1 8 10-12h-9z"/>',calendar:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4"/>',copy:'<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',rupee:'<path d="M6 3h12M6 8h12M6 13l8.5 8M6 13h3a5 5 0 0 0 0-10"/>',star:'<path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/>',menu:'<path d="M4 8h16M4 16h10"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',moon:'<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',x:'<path d="M18 6 6 18M6 6l12 12"/>',info:'<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>'},vr={in:'<path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4V21H3zM9.5 9.5h3.8v1.6h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5.2c0-1.2 0-2.9-1.8-2.9s-2 1.4-2 2.8V21h-4z"/>',fb:'<path d="M14 8V6c0-.9.6-1 1-1h2.5V1H14c-3.4 0-4 2.5-4 4.1V8H7.5v4H10v11h4V12h3l.5-4z"/>',wa:'<path d="M17.5 14.4c-.3-.1-1.8-.9-2-1s-.5-.1-.7.1-.8 1-1 1.2-.4.2-.7.1a8 8 0 0 1-2.4-1.5 9 9 0 0 1-1.6-2c-.2-.3 0-.5.1-.6l.5-.5.3-.5v-.5l-1-2.2c-.2-.6-.5-.5-.7-.5h-.6a1.1 1.1 0 0 0-.8.4 3.3 3.3 0 0 0-1 2.5 5.8 5.8 0 0 0 1.2 3.1 13.2 13.2 0 0 0 5.1 4.5c1.9.8 2.6.9 3.6.7a3 3 0 0 0 2-1.4 2.5 2.5 0 0 0 .2-1.4c-.1-.1-.3-.2-.6-.3zM12 21.8a9.9 9.9 0 0 1-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1 1 12 21.8zM20.5 3.5A11.8 11.8 0 0 0 1.9 17.7L.2 24l6.4-1.7A11.8 11.8 0 0 0 24 12a11.7 11.7 0 0 0-3.5-8.5z"/>'},kr={ig:'<rect x="2" y="2" width="20" height="20" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>'};function yr(){return _e(()=>{let e=m(lo);if(e.getElementById("so-icon-sprite"))return;let n=(d,c,xo)=>`<symbol id="i-${d}" viewBox="0 0 24 24" ${c}>${xo}</symbol>`,o='fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"',t=[...Object.entries(hr).map(([d,c])=>n(d,o,c)),...Object.entries(vr).map(([d,c])=>n(d,'fill="currentColor"',c)),...Object.entries(kr).map(([d,c])=>n(d,"",c))].join(""),r=e.createElement("div");r.id="so-icon-sprite",r.setAttribute("aria-hidden","true"),r.style.cssText="position:absolute;width:0;height:0;overflow:hidden",r.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg"><defs>${t}</defs></svg>`,e.body.prepend(r)})}var xr=(...e)=>je(...e);var Fn={transitionDuration:"{transition.duration}"},An={borderWidth:"0 0 1px 0",borderColor:"{content.border.color}"},On={color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{text.color}",activeHoverColor:"{text.color}",padding:"1.125rem",fontWeight:"600",borderRadius:"0",borderWidth:"0",borderColor:"{content.border.color}",background:"{content.background}",hoverBackground:"{content.background}",activeBackground:"{content.background}",activeHoverBackground:"{content.background}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"},toggleIcon:{color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{text.color}",activeHoverColor:"{text.color}"},first:{topBorderRadius:"{content.border.radius}",borderWidth:"0"},last:{bottomBorderRadius:"{content.border.radius}",activeBottomBorderRadius:"0"}},Ln={borderWidth:"0",borderColor:"{content.border.color}",background:"{content.background}",color:"{text.color}",padding:"0 1.125rem 1.125rem 1.125rem"},Cr={root:Fn,panel:An,header:On,content:Ln};var Nn={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}"},Hn={background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},Vn={padding:"{list.padding}",gap:"{list.gap}"},$n={focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},Wn={background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},jn={width:"2.5rem",sm:{width:"2rem"},lg:{width:"3rem"},borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},Un={borderRadius:"{border.radius.sm}"},Gn={padding:"{list.option.padding}"},Yn={light:{chip:{focusBackground:"{surface.200}",focusColor:"{surface.800}"},dropdown:{background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}"}},dark:{chip:{focusBackground:"{surface.700}",focusColor:"{surface.0}"},dropdown:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}"}}},wr={root:Nn,overlay:Hn,list:Vn,option:$n,optionGroup:Wn,dropdown:jn,chip:Un,emptyMessage:Gn,colorScheme:Yn};var Zn={width:"2rem",height:"2rem",fontSize:"1rem",background:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}"},Qn={size:"1rem"},Xn={borderColor:"{content.background}",offset:"-0.75rem"},qn={width:"3rem",height:"3rem",fontSize:"1.5rem",icon:{size:"1.5rem"},group:{offset:"-1rem"}},Kn={width:"4rem",height:"4rem",fontSize:"2rem",icon:{size:"2rem"},group:{offset:"-1.5rem"}},Br={root:Zn,icon:Qn,group:Xn,lg:qn,xl:Kn};var Jn={borderRadius:"{border.radius.md}",padding:"0 0.5rem",fontSize:"0.75rem",fontWeight:"700",minWidth:"1.5rem",height:"1.5rem"},oa={size:"0.5rem"},ea={fontSize:"0.625rem",minWidth:"1.25rem",height:"1.25rem"},ra={fontSize:"0.875rem",minWidth:"1.75rem",height:"1.75rem"},ta={fontSize:"1rem",minWidth:"2rem",height:"2rem"},na={light:{primary:{background:"{primary.color}",color:"{primary.contrast.color}"},secondary:{background:"{surface.100}",color:"{surface.600}"},success:{background:"{green.500}",color:"{surface.0}"},info:{background:"{sky.500}",color:"{surface.0}"},warn:{background:"{orange.500}",color:"{surface.0}"},danger:{background:"{red.500}",color:"{surface.0}"},contrast:{background:"{surface.950}",color:"{surface.0}"}},dark:{primary:{background:"{primary.color}",color:"{primary.contrast.color}"},secondary:{background:"{surface.800}",color:"{surface.300}"},success:{background:"{green.400}",color:"{green.950}"},info:{background:"{sky.400}",color:"{sky.950}"},warn:{background:"{orange.400}",color:"{orange.950}"},danger:{background:"{red.400}",color:"{red.950}"},contrast:{background:"{surface.0}",color:"{surface.950}"}}},_r={root:Jn,dot:oa,sm:ea,lg:ra,xl:ta,colorScheme:na};var aa={borderRadius:{none:"0",xs:"2px",sm:"4px",md:"6px",lg:"8px",xl:"12px"},emerald:{50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b",950:"#022c22"},green:{50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a",700:"#15803d",800:"#166534",900:"#14532d",950:"#052e16"},lime:{50:"#f7fee7",100:"#ecfccb",200:"#d9f99d",300:"#bef264",400:"#a3e635",500:"#84cc16",600:"#65a30d",700:"#4d7c0f",800:"#3f6212",900:"#365314",950:"#1a2e05"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d",950:"#450a0a"},orange:{50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c",700:"#c2410c",800:"#9a3412",900:"#7c2d12",950:"#431407"},amber:{50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f",950:"#451a03"},yellow:{50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04",700:"#a16207",800:"#854d0e",900:"#713f12",950:"#422006"},teal:{50:"#f0fdfa",100:"#ccfbf1",200:"#99f6e4",300:"#5eead4",400:"#2dd4bf",500:"#14b8a6",600:"#0d9488",700:"#0f766e",800:"#115e59",900:"#134e4a",950:"#042f2e"},cyan:{50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63",950:"#083344"},sky:{50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e",950:"#082f49"},blue:{50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a",950:"#172554"},indigo:{50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81",950:"#1e1b4b"},violet:{50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95",950:"#2e1065"},purple:{50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87",950:"#3b0764"},fuchsia:{50:"#fdf4ff",100:"#fae8ff",200:"#f5d0fe",300:"#f0abfc",400:"#e879f9",500:"#d946ef",600:"#c026d3",700:"#a21caf",800:"#86198f",900:"#701a75",950:"#4a044e"},pink:{50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843",950:"#500724"},rose:{50:"#fff1f2",100:"#ffe4e6",200:"#fecdd3",300:"#fda4af",400:"#fb7185",500:"#f43f5e",600:"#e11d48",700:"#be123c",800:"#9f1239",900:"#881337",950:"#4c0519"},slate:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a",950:"#020617"},gray:{50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827",950:"#030712"},zinc:{50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b",950:"#09090b"},neutral:{50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717",950:"#0a0a0a"},stone:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917",950:"#0c0a09"}},ia={transitionDuration:"0.2s",focusRing:{width:"1px",style:"solid",color:"{primary.color}",offset:"2px",shadow:"none"},disabledOpacity:"0.6",iconSize:"1rem",anchorGutter:"2px",primary:{50:"{emerald.50}",100:"{emerald.100}",200:"{emerald.200}",300:"{emerald.300}",400:"{emerald.400}",500:"{emerald.500}",600:"{emerald.600}",700:"{emerald.700}",800:"{emerald.800}",900:"{emerald.900}",950:"{emerald.950}"},formField:{paddingX:"0.75rem",paddingY:"0.5rem",sm:{fontSize:"0.875rem",paddingX:"0.625rem",paddingY:"0.375rem"},lg:{fontSize:"1.125rem",paddingX:"0.875rem",paddingY:"0.625rem"},borderRadius:"{border.radius.md}",focusRing:{width:"0",style:"none",color:"transparent",offset:"0",shadow:"none"},transitionDuration:"{transition.duration}"},list:{padding:"0.25rem 0.25rem",gap:"2px",header:{padding:"0.5rem 1rem 0.25rem 1rem"},option:{padding:"0.5rem 0.75rem",borderRadius:"{border.radius.sm}"},optionGroup:{padding:"0.5rem 0.75rem",fontWeight:"600"}},content:{borderRadius:"{border.radius.md}"},mask:{transitionDuration:"0.3s"},navigation:{list:{padding:"0.25rem 0.25rem",gap:"2px"},item:{padding:"0.5rem 0.75rem",borderRadius:"{border.radius.sm}",gap:"0.5rem"},submenuLabel:{padding:"0.5rem 0.75rem",fontWeight:"600"},submenuIcon:{size:"0.875rem"}},overlay:{select:{borderRadius:"{border.radius.md}",shadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"},popover:{borderRadius:"{border.radius.md}",padding:"0.75rem",shadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"},modal:{borderRadius:"{border.radius.xl}",padding:"1.25rem",shadow:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"},navigation:{shadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"}},colorScheme:{light:{surface:{0:"#ffffff",50:"{slate.50}",100:"{slate.100}",200:"{slate.200}",300:"{slate.300}",400:"{slate.400}",500:"{slate.500}",600:"{slate.600}",700:"{slate.700}",800:"{slate.800}",900:"{slate.900}",950:"{slate.950}"},primary:{color:"{primary.500}",contrastColor:"#ffffff",hoverColor:"{primary.600}",activeColor:"{primary.700}"},highlight:{background:"{primary.50}",focusBackground:"{primary.100}",color:"{primary.700}",focusColor:"{primary.800}"},mask:{background:"rgba(0,0,0,0.4)",color:"{surface.200}"},formField:{background:"{surface.0}",disabledBackground:"{surface.200}",filledBackground:"{surface.50}",filledHoverBackground:"{surface.50}",filledFocusBackground:"{surface.50}",borderColor:"{surface.300}",hoverBorderColor:"{surface.400}",focusBorderColor:"{primary.color}",invalidBorderColor:"{red.400}",color:"{surface.700}",disabledColor:"{surface.500}",placeholderColor:"{surface.500}",invalidPlaceholderColor:"{red.600}",floatLabelColor:"{surface.500}",floatLabelFocusColor:"{primary.600}",floatLabelActiveColor:"{surface.500}",floatLabelInvalidColor:"{form.field.invalid.placeholder.color}",iconColor:"{surface.400}",shadow:"0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)"},text:{color:"{surface.700}",hoverColor:"{surface.800}",mutedColor:"{surface.500}",hoverMutedColor:"{surface.600}"},content:{background:"{surface.0}",hoverBackground:"{surface.100}",borderColor:"{surface.200}",color:"{text.color}",hoverColor:"{text.hover.color}"},overlay:{select:{background:"{surface.0}",borderColor:"{surface.200}",color:"{text.color}"},popover:{background:"{surface.0}",borderColor:"{surface.200}",color:"{text.color}"},modal:{background:"{surface.0}",borderColor:"{surface.200}",color:"{text.color}"}},list:{option:{focusBackground:"{surface.100}",selectedBackground:"{highlight.background}",selectedFocusBackground:"{highlight.focus.background}",color:"{text.color}",focusColor:"{text.hover.color}",selectedColor:"{highlight.color}",selectedFocusColor:"{highlight.focus.color}",icon:{color:"{surface.400}",focusColor:"{surface.500}"}},optionGroup:{background:"transparent",color:"{text.muted.color}"}},navigation:{item:{focusBackground:"{surface.100}",activeBackground:"{surface.100}",color:"{text.color}",focusColor:"{text.hover.color}",activeColor:"{text.hover.color}",icon:{color:"{surface.400}",focusColor:"{surface.500}",activeColor:"{surface.500}"}},submenuLabel:{background:"transparent",color:"{text.muted.color}"},submenuIcon:{color:"{surface.400}",focusColor:"{surface.500}",activeColor:"{surface.500}"}}},dark:{surface:{0:"#ffffff",50:"{zinc.50}",100:"{zinc.100}",200:"{zinc.200}",300:"{zinc.300}",400:"{zinc.400}",500:"{zinc.500}",600:"{zinc.600}",700:"{zinc.700}",800:"{zinc.800}",900:"{zinc.900}",950:"{zinc.950}"},primary:{color:"{primary.400}",contrastColor:"{surface.900}",hoverColor:"{primary.300}",activeColor:"{primary.200}"},highlight:{background:"color-mix(in srgb, {primary.400}, transparent 84%)",focusBackground:"color-mix(in srgb, {primary.400}, transparent 76%)",color:"rgba(255,255,255,.87)",focusColor:"rgba(255,255,255,.87)"},mask:{background:"rgba(0,0,0,0.6)",color:"{surface.200}"},formField:{background:"{surface.950}",disabledBackground:"{surface.700}",filledBackground:"{surface.800}",filledHoverBackground:"{surface.800}",filledFocusBackground:"{surface.800}",borderColor:"{surface.600}",hoverBorderColor:"{surface.500}",focusBorderColor:"{primary.color}",invalidBorderColor:"{red.300}",color:"{surface.0}",disabledColor:"{surface.400}",placeholderColor:"{surface.400}",invalidPlaceholderColor:"{red.400}",floatLabelColor:"{surface.400}",floatLabelFocusColor:"{primary.color}",floatLabelActiveColor:"{surface.400}",floatLabelInvalidColor:"{form.field.invalid.placeholder.color}",iconColor:"{surface.400}",shadow:"0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)"},text:{color:"{surface.0}",hoverColor:"{surface.0}",mutedColor:"{surface.400}",hoverMutedColor:"{surface.300}"},content:{background:"{surface.900}",hoverBackground:"{surface.800}",borderColor:"{surface.700}",color:"{text.color}",hoverColor:"{text.hover.color}"},overlay:{select:{background:"{surface.900}",borderColor:"{surface.700}",color:"{text.color}"},popover:{background:"{surface.900}",borderColor:"{surface.700}",color:"{text.color}"},modal:{background:"{surface.900}",borderColor:"{surface.700}",color:"{text.color}"}},list:{option:{focusBackground:"{surface.800}",selectedBackground:"{highlight.background}",selectedFocusBackground:"{highlight.focus.background}",color:"{text.color}",focusColor:"{text.hover.color}",selectedColor:"{highlight.color}",selectedFocusColor:"{highlight.focus.color}",icon:{color:"{surface.500}",focusColor:"{surface.400}"}},optionGroup:{background:"transparent",color:"{text.muted.color}"}},navigation:{item:{focusBackground:"{surface.800}",activeBackground:"{surface.800}",color:"{text.color}",focusColor:"{text.hover.color}",activeColor:"{text.hover.color}",icon:{color:"{surface.500}",focusColor:"{surface.400}",activeColor:"{surface.400}"}},submenuLabel:{background:"transparent",color:"{text.muted.color}"},submenuIcon:{color:"{surface.500}",focusColor:"{surface.400}",activeColor:"{surface.400}"}}}}},Sr={primitive:aa,semantic:ia};var da={borderRadius:"{content.border.radius}"},Ir={root:da};var sa={padding:"1rem",background:"{content.background}",gap:"0.5rem",transitionDuration:"{transition.duration}"},la={color:"{text.muted.color}",hoverColor:"{text.color}",borderRadius:"{content.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",hoverColor:"{navigation.item.icon.focus.color}"},focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},ca={color:"{navigation.item.icon.color}"},Tr={root:sa,item:la,separator:ca};var ua={borderRadius:"{form.field.border.radius}",roundedBorderRadius:"2rem",gap:"0.5rem",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",iconOnlyWidth:"2.5rem",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}",iconOnlyWidth:"2rem"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}",iconOnlyWidth:"3rem"},label:{fontWeight:"500"},raisedShadow:"0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"},badgeSize:"1rem",transitionDuration:"{form.field.transition.duration}"},pa={light:{root:{primary:{background:"{primary.color}",hoverBackground:"{primary.hover.color}",activeBackground:"{primary.active.color}",borderColor:"{primary.color}",hoverBorderColor:"{primary.hover.color}",activeBorderColor:"{primary.active.color}",color:"{primary.contrast.color}",hoverColor:"{primary.contrast.color}",activeColor:"{primary.contrast.color}",focusRing:{color:"{primary.color}",shadow:"none"}},secondary:{background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",borderColor:"{surface.100}",hoverBorderColor:"{surface.200}",activeBorderColor:"{surface.300}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}",focusRing:{color:"{surface.600}",shadow:"none"}},info:{background:"{sky.500}",hoverBackground:"{sky.600}",activeBackground:"{sky.700}",borderColor:"{sky.500}",hoverBorderColor:"{sky.600}",activeBorderColor:"{sky.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{sky.500}",shadow:"none"}},success:{background:"{green.500}",hoverBackground:"{green.600}",activeBackground:"{green.700}",borderColor:"{green.500}",hoverBorderColor:"{green.600}",activeBorderColor:"{green.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{green.500}",shadow:"none"}},warn:{background:"{orange.500}",hoverBackground:"{orange.600}",activeBackground:"{orange.700}",borderColor:"{orange.500}",hoverBorderColor:"{orange.600}",activeBorderColor:"{orange.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{orange.500}",shadow:"none"}},help:{background:"{purple.500}",hoverBackground:"{purple.600}",activeBackground:"{purple.700}",borderColor:"{purple.500}",hoverBorderColor:"{purple.600}",activeBorderColor:"{purple.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{purple.500}",shadow:"none"}},danger:{background:"{red.500}",hoverBackground:"{red.600}",activeBackground:"{red.700}",borderColor:"{red.500}",hoverBorderColor:"{red.600}",activeBorderColor:"{red.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{red.500}",shadow:"none"}},contrast:{background:"{surface.950}",hoverBackground:"{surface.900}",activeBackground:"{surface.800}",borderColor:"{surface.950}",hoverBorderColor:"{surface.900}",activeBorderColor:"{surface.800}",color:"{surface.0}",hoverColor:"{surface.0}",activeColor:"{surface.0}",focusRing:{color:"{surface.950}",shadow:"none"}}},outlined:{primary:{hoverBackground:"{primary.50}",activeBackground:"{primary.100}",borderColor:"{primary.200}",color:"{primary.color}"},secondary:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.200}",color:"{surface.500}"},success:{hoverBackground:"{green.50}",activeBackground:"{green.100}",borderColor:"{green.200}",color:"{green.500}"},info:{hoverBackground:"{sky.50}",activeBackground:"{sky.100}",borderColor:"{sky.200}",color:"{sky.500}"},warn:{hoverBackground:"{orange.50}",activeBackground:"{orange.100}",borderColor:"{orange.200}",color:"{orange.500}"},help:{hoverBackground:"{purple.50}",activeBackground:"{purple.100}",borderColor:"{purple.200}",color:"{purple.500}"},danger:{hoverBackground:"{red.50}",activeBackground:"{red.100}",borderColor:"{red.200}",color:"{red.500}"},contrast:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.700}",color:"{surface.950}"},plain:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.200}",color:"{surface.700}"}},text:{primary:{hoverBackground:"{primary.50}",activeBackground:"{primary.100}",color:"{primary.color}"},secondary:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",color:"{surface.500}"},success:{hoverBackground:"{green.50}",activeBackground:"{green.100}",color:"{green.500}"},info:{hoverBackground:"{sky.50}",activeBackground:"{sky.100}",color:"{sky.500}"},warn:{hoverBackground:"{orange.50}",activeBackground:"{orange.100}",color:"{orange.500}"},help:{hoverBackground:"{purple.50}",activeBackground:"{purple.100}",color:"{purple.500}"},danger:{hoverBackground:"{red.50}",activeBackground:"{red.100}",color:"{red.500}"},contrast:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",color:"{surface.950}"},plain:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",color:"{surface.700}"}},link:{color:"{primary.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"}},dark:{root:{primary:{background:"{primary.color}",hoverBackground:"{primary.hover.color}",activeBackground:"{primary.active.color}",borderColor:"{primary.color}",hoverBorderColor:"{primary.hover.color}",activeBorderColor:"{primary.active.color}",color:"{primary.contrast.color}",hoverColor:"{primary.contrast.color}",activeColor:"{primary.contrast.color}",focusRing:{color:"{primary.color}",shadow:"none"}},secondary:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",borderColor:"{surface.800}",hoverBorderColor:"{surface.700}",activeBorderColor:"{surface.600}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}",focusRing:{color:"{surface.300}",shadow:"none"}},info:{background:"{sky.400}",hoverBackground:"{sky.300}",activeBackground:"{sky.200}",borderColor:"{sky.400}",hoverBorderColor:"{sky.300}",activeBorderColor:"{sky.200}",color:"{sky.950}",hoverColor:"{sky.950}",activeColor:"{sky.950}",focusRing:{color:"{sky.400}",shadow:"none"}},success:{background:"{green.400}",hoverBackground:"{green.300}",activeBackground:"{green.200}",borderColor:"{green.400}",hoverBorderColor:"{green.300}",activeBorderColor:"{green.200}",color:"{green.950}",hoverColor:"{green.950}",activeColor:"{green.950}",focusRing:{color:"{green.400}",shadow:"none"}},warn:{background:"{orange.400}",hoverBackground:"{orange.300}",activeBackground:"{orange.200}",borderColor:"{orange.400}",hoverBorderColor:"{orange.300}",activeBorderColor:"{orange.200}",color:"{orange.950}",hoverColor:"{orange.950}",activeColor:"{orange.950}",focusRing:{color:"{orange.400}",shadow:"none"}},help:{background:"{purple.400}",hoverBackground:"{purple.300}",activeBackground:"{purple.200}",borderColor:"{purple.400}",hoverBorderColor:"{purple.300}",activeBorderColor:"{purple.200}",color:"{purple.950}",hoverColor:"{purple.950}",activeColor:"{purple.950}",focusRing:{color:"{purple.400}",shadow:"none"}},danger:{background:"{red.400}",hoverBackground:"{red.300}",activeBackground:"{red.200}",borderColor:"{red.400}",hoverBorderColor:"{red.300}",activeBorderColor:"{red.200}",color:"{red.950}",hoverColor:"{red.950}",activeColor:"{red.950}",focusRing:{color:"{red.400}",shadow:"none"}},contrast:{background:"{surface.0}",hoverBackground:"{surface.100}",activeBackground:"{surface.200}",borderColor:"{surface.0}",hoverBorderColor:"{surface.100}",activeBorderColor:"{surface.200}",color:"{surface.950}",hoverColor:"{surface.950}",activeColor:"{surface.950}",focusRing:{color:"{surface.0}",shadow:"none"}}},outlined:{primary:{hoverBackground:"color-mix(in srgb, {primary.color}, transparent 96%)",activeBackground:"color-mix(in srgb, {primary.color}, transparent 84%)",borderColor:"{primary.700}",color:"{primary.color}"},secondary:{hoverBackground:"rgba(255,255,255,0.04)",activeBackground:"rgba(255,255,255,0.16)",borderColor:"{surface.700}",color:"{surface.400}"},success:{hoverBackground:"color-mix(in srgb, {green.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {green.400}, transparent 84%)",borderColor:"{green.700}",color:"{green.400}"},info:{hoverBackground:"color-mix(in srgb, {sky.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {sky.400}, transparent 84%)",borderColor:"{sky.700}",color:"{sky.400}"},warn:{hoverBackground:"color-mix(in srgb, {orange.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {orange.400}, transparent 84%)",borderColor:"{orange.700}",color:"{orange.400}"},help:{hoverBackground:"color-mix(in srgb, {purple.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {purple.400}, transparent 84%)",borderColor:"{purple.700}",color:"{purple.400}"},danger:{hoverBackground:"color-mix(in srgb, {red.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {red.400}, transparent 84%)",borderColor:"{red.700}",color:"{red.400}"},contrast:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{surface.500}",color:"{surface.0}"},plain:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{surface.600}",color:"{surface.0}"}},text:{primary:{hoverBackground:"color-mix(in srgb, {primary.color}, transparent 96%)",activeBackground:"color-mix(in srgb, {primary.color}, transparent 84%)",color:"{primary.color}"},secondary:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{surface.400}"},success:{hoverBackground:"color-mix(in srgb, {green.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {green.400}, transparent 84%)",color:"{green.400}"},info:{hoverBackground:"color-mix(in srgb, {sky.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {sky.400}, transparent 84%)",color:"{sky.400}"},warn:{hoverBackground:"color-mix(in srgb, {orange.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {orange.400}, transparent 84%)",color:"{orange.400}"},help:{hoverBackground:"color-mix(in srgb, {purple.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {purple.400}, transparent 84%)",color:"{purple.400}"},danger:{hoverBackground:"color-mix(in srgb, {red.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {red.400}, transparent 84%)",color:"{red.400}"},contrast:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{surface.0}"},plain:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{surface.0}"}},link:{color:"{primary.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"}}},Mr={root:ua,colorScheme:pa};var fa={background:"{content.background}",borderRadius:"{border.radius.xl}",color:"{content.color}",shadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)"},ga={padding:"1.25rem",gap:"0.5rem"},ma={gap:"0.5rem"},ba={fontSize:"1.25rem",fontWeight:"500"},ha={color:"{text.muted.color}"},Er={root:fa,body:ga,caption:ma,title:ba,subtitle:ha};var va={transitionDuration:"{transition.duration}"},ka={gap:"0.25rem"},ya={padding:"1rem",gap:"0.5rem"},xa={width:"2rem",height:"0.5rem",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},Ca={light:{indicator:{background:"{surface.200}",hoverBackground:"{surface.300}",activeBackground:"{primary.color}"}},dark:{indicator:{background:"{surface.700}",hoverBackground:"{surface.600}",activeBackground:"{primary.color}"}}},zr={root:va,content:ka,indicatorList:ya,indicator:xa,colorScheme:Ca};var wa={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},Ba={width:"2.5rem",color:"{form.field.icon.color}"},_a={background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},Sa={padding:"{list.padding}",gap:"{list.gap}",mobileIndent:"1rem"},Ia={focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}",icon:{color:"{list.option.icon.color}",focusColor:"{list.option.icon.focus.color}",size:"0.875rem"}},Ta={color:"{form.field.icon.color}"},Dr={root:wa,dropdown:Ba,overlay:_a,list:Sa,option:Ia,clearIcon:Ta};var Ma={borderRadius:"{border.radius.sm}",width:"1.25rem",height:"1.25rem",background:"{form.field.background}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.hover.color}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.border.color}",checkedBorderColor:"{primary.color}",checkedHoverBorderColor:"{primary.hover.color}",checkedFocusBorderColor:"{primary.color}",checkedDisabledBorderColor:"{form.field.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",shadow:"{form.field.shadow}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{width:"1rem",height:"1rem"},lg:{width:"1.5rem",height:"1.5rem"}},Ea={size:"0.875rem",color:"{form.field.color}",checkedColor:"{primary.contrast.color}",checkedHoverColor:"{primary.contrast.color}",disabledColor:"{form.field.disabled.color}",sm:{size:"0.75rem"},lg:{size:"1rem"}},Rr={root:Ma,icon:Ea};var za={borderRadius:"16px",paddingX:"0.75rem",paddingY:"0.5rem",gap:"0.5rem",transitionDuration:"{transition.duration}"},Da={width:"2rem",height:"2rem"},Ra={size:"1rem"},Pa={size:"1rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"}},Fa={light:{root:{background:"{surface.100}",color:"{surface.800}"},icon:{color:"{surface.800}"},removeIcon:{color:"{surface.800}"}},dark:{root:{background:"{surface.800}",color:"{surface.0}"},icon:{color:"{surface.0}"},removeIcon:{color:"{surface.0}"}}},Pr={root:za,image:Da,icon:Ra,removeIcon:Pa,colorScheme:Fa};var Aa={transitionDuration:"{transition.duration}"},Oa={width:"1.5rem",height:"1.5rem",borderRadius:"{form.field.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},La={shadow:"{overlay.popover.shadow}",borderRadius:"{overlay.popover.borderRadius}"},Na={light:{panel:{background:"{surface.800}",borderColor:"{surface.900}"},handle:{color:"{surface.0}"}},dark:{panel:{background:"{surface.900}",borderColor:"{surface.700}"},handle:{color:"{surface.0}"}}},Fr={root:Aa,preview:Oa,panel:La,colorScheme:Na};var Ha={size:"2rem",color:"{overlay.modal.color}"},Va={gap:"1rem"},Ar={icon:Ha,content:Va};var $a={background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",color:"{overlay.popover.color}",borderRadius:"{overlay.popover.border.radius}",shadow:"{overlay.popover.shadow}",gutter:"10px",arrowOffset:"1.25rem"},Wa={padding:"{overlay.popover.padding}",gap:"1rem"},ja={size:"1.5rem",color:"{overlay.popover.color}"},Ua={gap:"0.5rem",padding:"0 {overlay.popover.padding} {overlay.popover.padding} {overlay.popover.padding}"},Or={root:$a,content:Wa,icon:ja,footer:Ua};var Ga={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{transition.duration}"},Ya={padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},Za={focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},Qa={mobileIndent:"1rem"},Xa={size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},qa={borderColor:"{content.border.color}"},Lr={root:Ga,list:Ya,item:Za,submenu:Qa,submenuIcon:Xa,separator:qa};var Nr=`
    li.p-autocomplete-option,
    div.p-cascadeselect-option-content,
    li.p-listbox-option,
    li.p-multiselect-option,
    li.p-select-option,
    li.p-listbox-option,
    div.p-tree-node-content,
    li.p-datatable-filter-constraint,
    .p-datatable .p-datatable-tbody > tr,
    .p-treetable .p-treetable-tbody > tr,
    div.p-menu-item-content,
    div.p-tieredmenu-item-content,
    div.p-contextmenu-item-content,
    div.p-menubar-item-content,
    div.p-megamenu-item-content,
    div.p-panelmenu-header-content,
    div.p-panelmenu-item-content,
    th.p-datatable-header-cell,
    th.p-treetable-header-cell,
    thead.p-datatable-thead > tr > th,
    .p-treetable thead.p-treetable-thead>tr>th {
        transition: none;
    }
`;var Ka={transitionDuration:"{transition.duration}"},Ja={background:"{content.background}",borderColor:"{datatable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem",sm:{padding:"0.375rem 0.5rem"},lg:{padding:"1rem 1.25rem"}},oi={background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",borderColor:"{datatable.border.color}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",gap:"0.5rem",padding:"0.75rem 1rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"},sm:{padding:"0.375rem 0.5rem"},lg:{padding:"1rem 1.25rem"}},ei={fontWeight:"600"},ri={background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},ti={borderColor:"{datatable.border.color}",padding:"0.75rem 1rem",sm:{padding:"0.375rem 0.5rem"},lg:{padding:"1rem 1.25rem"}},ni={background:"{content.background}",borderColor:"{datatable.border.color}",color:"{content.color}",padding:"0.75rem 1rem",sm:{padding:"0.375rem 0.5rem"},lg:{padding:"1rem 1.25rem"}},ai={fontWeight:"600"},ii={background:"{content.background}",borderColor:"{datatable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem",sm:{padding:"0.375rem 0.5rem"},lg:{padding:"1rem 1.25rem"}},di={color:"{primary.color}"},si={width:"0.5rem"},li={width:"1px",color:"{primary.color}"},ci={color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",size:"0.875rem"},ui={size:"2rem"},pi={hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",selectedHoverColor:"{primary.color}",size:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},fi={inlineGap:"0.5rem",overlaySelect:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},overlayPopover:{background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",borderRadius:"{overlay.popover.border.radius}",color:"{overlay.popover.color}",shadow:"{overlay.popover.shadow}",padding:"{overlay.popover.padding}",gap:"0.5rem"},rule:{borderColor:"{content.border.color}"},constraintList:{padding:"{list.padding}",gap:"{list.gap}"},constraint:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",separator:{borderColor:"{content.border.color}"},padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"}},gi={borderColor:"{datatable.border.color}",borderWidth:"0 0 1px 0"},mi={borderColor:"{datatable.border.color}",borderWidth:"0 0 1px 0"},bi={light:{root:{borderColor:"{content.border.color}"},row:{stripedBackground:"{surface.50}"},bodyCell:{selectedBorderColor:"{primary.100}"}},dark:{root:{borderColor:"{surface.800}"},row:{stripedBackground:"{surface.950}"},bodyCell:{selectedBorderColor:"{primary.900}"}}},hi=`
    .p-datatable-mask.p-overlay-mask {
        --px-mask-background: light-dark(rgba(255,255,255,0.5),rgba(0,0,0,0.3));
    }
`,Hr={root:Ka,header:Ja,headerCell:oi,columnTitle:ei,row:ri,bodyCell:ti,footerCell:ni,columnFooter:ai,footer:ii,dropPoint:di,columnResizer:si,resizeIndicator:li,sortIcon:ci,loadingIcon:ui,rowToggleButton:pi,filter:fi,paginatorTop:gi,paginatorBottom:mi,colorScheme:bi,css:hi};var vi={borderColor:"transparent",borderWidth:"0",borderRadius:"0",padding:"0"},ki={background:"{content.background}",color:"{content.color}",borderColor:"{content.border.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem",borderRadius:"0"},yi={background:"{content.background}",color:"{content.color}",borderColor:"transparent",borderWidth:"0",padding:"0",borderRadius:"0"},xi={background:"{content.background}",color:"{content.color}",borderColor:"{content.border.color}",borderWidth:"1px 0 0 0",padding:"0.75rem 1rem",borderRadius:"0"},Ci={borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},wi={borderColor:"{content.border.color}",borderWidth:"1px 0 0 0"},Vr={root:vi,header:ki,content:yi,footer:xi,paginatorTop:Ci,paginatorBottom:wi};var Bi={transitionDuration:"{transition.duration}"},_i={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.popover.shadow}",padding:"{overlay.popover.padding}"},Si={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",padding:"0 0 0.5rem 0"},Ii={gap:"0.5rem",fontWeight:"500"},Ti={width:"2.5rem",sm:{width:"2rem"},lg:{width:"3rem"},borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},Mi={color:"{form.field.icon.color}"},Ei={hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",padding:"0.25rem 0.5rem",borderRadius:"{content.border.radius}"},zi={hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",padding:"0.25rem 0.5rem",borderRadius:"{content.border.radius}"},Di={borderColor:"{content.border.color}",gap:"{overlay.popover.padding}"},Ri={margin:"0.5rem 0 0 0"},Pi={padding:"0.25rem",fontWeight:"500",color:"{content.color}"},Fi={hoverBackground:"{content.hover.background}",selectedBackground:"{primary.color}",rangeSelectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{primary.contrast.color}",rangeSelectedColor:"{highlight.color}",width:"2rem",height:"2rem",borderRadius:"50%",padding:"0.25rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},Ai={margin:"0.5rem 0 0 0"},Oi={padding:"0.375rem",borderRadius:"{content.border.radius}"},Li={margin:"0.5rem 0 0 0"},Ni={padding:"0.375rem",borderRadius:"{content.border.radius}"},Hi={padding:"0.5rem 0 0 0",borderColor:"{content.border.color}"},Vi={padding:"0.5rem 0 0 0",borderColor:"{content.border.color}",gap:"0.5rem",buttonGap:"0.25rem"},$i={light:{dropdown:{background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}"},today:{background:"{surface.200}",color:"{surface.900}"}},dark:{dropdown:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}"},today:{background:"{surface.700}",color:"{surface.0}"}}},$r={root:Bi,panel:_i,header:Si,title:Ii,dropdown:Ti,inputIcon:Mi,selectMonth:Ei,selectYear:zi,group:Di,dayView:Ri,weekDay:Pi,date:Fi,monthView:Ai,month:Oi,yearView:Li,year:Ni,buttonbar:Hi,timePicker:Vi,colorScheme:$i};var Wi={background:"{overlay.modal.background}",borderColor:"{overlay.modal.border.color}",color:"{overlay.modal.color}",borderRadius:"{overlay.modal.border.radius}",shadow:"{overlay.modal.shadow}"},ji={padding:"{overlay.modal.padding}",gap:"0.5rem"},Ui={fontSize:"1.25rem",fontWeight:"600"},Gi={padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"},Yi={padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}",gap:"0.5rem"},Wr={root:Wi,header:ji,title:Ui,content:Gi,footer:Yi};var Zi={borderColor:"{content.border.color}"},Qi={background:"{content.background}",color:"{text.color}"},Xi={margin:"1rem 0",padding:"0 1rem",content:{padding:"0 0.5rem"}},qi={margin:"0 1rem",padding:"0.5rem 0",content:{padding:"0.5rem 0"}},jr={root:Zi,content:Qi,horizontal:Xi,vertical:qi};var Ki={background:"rgba(255, 255, 255, 0.1)",borderColor:"rgba(255, 255, 255, 0.2)",padding:"0.5rem",borderRadius:"{border.radius.xl}"},Ji={borderRadius:"{content.border.radius}",padding:"0.5rem",size:"3rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},Ur={root:Ki,item:Ji};var od={background:"{overlay.modal.background}",borderColor:"{overlay.modal.border.color}",color:"{overlay.modal.color}",shadow:"{overlay.modal.shadow}"},ed={padding:"{overlay.modal.padding}"},rd={fontSize:"1.5rem",fontWeight:"600"},td={padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"},nd={padding:"{overlay.modal.padding}"},Gr={root:od,header:ed,title:rd,content:td,footer:nd};var ad={background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}"},id={color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},dd={background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}",padding:"{list.padding}"},sd={focusBackground:"{list.option.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},ld={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}"},Yr={toolbar:ad,toolbarItem:id,overlay:dd,overlayOption:sd,content:ld};var cd={background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",padding:"0 1.125rem 1.125rem 1.125rem",transitionDuration:"{transition.duration}"},ud={background:"{content.background}",hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",borderRadius:"{content.border.radius}",borderWidth:"1px",borderColor:"transparent",padding:"0.5rem 0.75rem",gap:"0.5rem",fontWeight:"600",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},pd={color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}"},fd={padding:"0"},Zr={root:cd,legend:ud,toggleIcon:pd,content:fd};var gd={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",transitionDuration:"{transition.duration}"},md={background:"transparent",color:"{text.color}",padding:"1.125rem",borderColor:"unset",borderWidth:"0",borderRadius:"0",gap:"0.5rem"},bd={highlightBorderColor:"{primary.color}",padding:"0 1.125rem 1.125rem 1.125rem",gap:"1rem"},hd={padding:"1rem",gap:"1rem",borderColor:"{content.border.color}",info:{gap:"0.5rem"}},vd={gap:"0.5rem"},kd={height:"0.25rem"},yd={gap:"0.5rem"},Qr={root:gd,header:md,content:bd,file:hd,fileList:vd,progressbar:kd,basic:yd};var xd={color:"{form.field.float.label.color}",focusColor:"{form.field.float.label.focus.color}",activeColor:"{form.field.float.label.active.color}",invalidColor:"{form.field.float.label.invalid.color}",transitionDuration:"0.2s",positionX:"{form.field.padding.x}",positionY:"{form.field.padding.y}",fontWeight:"500",active:{fontSize:"0.75rem",fontWeight:"400"}},Cd={active:{top:"-1.25rem"}},wd={input:{paddingTop:"1.5rem",paddingBottom:"{form.field.padding.y}"},active:{top:"{form.field.padding.y}"}},Bd={borderRadius:"{border.radius.xs}",active:{background:"{form.field.background}",padding:"0 0.125rem"}},Xr={root:xd,over:Cd,in:wd,on:Bd};var _d={borderWidth:"1px",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",transitionDuration:"{transition.duration}"},Sd={background:"rgba(255, 255, 255, 0.1)",hoverBackground:"rgba(255, 255, 255, 0.2)",color:"{surface.100}",hoverColor:"{surface.0}",size:"3rem",gutter:"0.5rem",prev:{borderRadius:"50%"},next:{borderRadius:"50%"},focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},Id={size:"1.5rem"},Td={background:"{content.background}",padding:"1rem 0.25rem"},Md={size:"2rem",borderRadius:"{content.border.radius}",gutter:"0.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},Ed={size:"1rem"},zd={background:"rgba(0, 0, 0, 0.5)",color:"{surface.100}",padding:"1rem"},Dd={gap:"0.5rem",padding:"1rem"},Rd={width:"1rem",height:"1rem",activeBackground:"{primary.color}",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},Pd={background:"rgba(0, 0, 0, 0.5)"},Fd={background:"rgba(255, 255, 255, 0.4)",hoverBackground:"rgba(255, 255, 255, 0.6)",activeBackground:"rgba(255, 255, 255, 0.9)"},Ad={size:"3rem",gutter:"0.5rem",background:"rgba(255, 255, 255, 0.1)",hoverBackground:"rgba(255, 255, 255, 0.2)",color:"{surface.50}",hoverColor:"{surface.0}",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},Od={size:"1.5rem"},Ld={light:{thumbnailNavButton:{hoverBackground:"{surface.100}",color:"{surface.600}",hoverColor:"{surface.700}"},indicatorButton:{background:"{surface.200}",hoverBackground:"{surface.300}"}},dark:{thumbnailNavButton:{hoverBackground:"{surface.700}",color:"{surface.400}",hoverColor:"{surface.0}"},indicatorButton:{background:"{surface.700}",hoverBackground:"{surface.600}"}}},qr={root:_d,navButton:Sd,navIcon:Id,thumbnailsContent:Td,thumbnailNavButton:Md,thumbnailNavButtonIcon:Ed,caption:zd,indicatorList:Dd,indicatorButton:Rd,insetIndicatorList:Pd,insetIndicatorButton:Fd,closeButton:Ad,closeButtonIcon:Od,colorScheme:Ld};var Nd={color:"{form.field.icon.color}"},Kr={icon:Nd};var Hd={color:"{form.field.float.label.color}",focusColor:"{form.field.float.label.focus.color}",invalidColor:"{form.field.float.label.invalid.color}",transitionDuration:"0.2s",positionX:"{form.field.padding.x}",top:"{form.field.padding.y}",fontSize:"0.75rem",fontWeight:"400"},Vd={paddingTop:"1.5rem",paddingBottom:"{form.field.padding.y}"},Jr={root:Hd,input:Vd};var $d={transitionDuration:"{transition.duration}"},Wd={icon:{size:"1.5rem"},mask:{background:"{mask.background}",color:"{mask.color}"}},jd={position:{left:"auto",right:"1rem",top:"1rem",bottom:"auto"},blur:"8px",background:"rgba(255,255,255,0.1)",borderColor:"rgba(255,255,255,0.2)",borderWidth:"1px",borderRadius:"30px",padding:".5rem",gap:"0.5rem"},Ud={hoverBackground:"rgba(255,255,255,0.1)",color:"{surface.50}",hoverColor:"{surface.0}",size:"3rem",iconSize:"1.5rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},ot={root:$d,preview:Wd,toolbar:jd,action:Ud};var Gd={size:"15px",hoverSize:"30px",background:"rgba(255,255,255,0.3)",hoverBackground:"rgba(255,255,255,0.3)",borderColor:"unset",hoverBorderColor:"unset",borderWidth:"0",borderRadius:"50%",transitionDuration:"{transition.duration}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"rgba(255,255,255,0.3)",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},et={handle:Gd};var Yd={padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{content.border.radius}",gap:"0.5rem"},Zd={fontWeight:"500"},Qd={size:"1rem"},Xd={light:{info:{background:"color-mix(in srgb, {blue.50}, transparent 5%)",borderColor:"{blue.200}",color:"{blue.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"},success:{background:"color-mix(in srgb, {green.50}, transparent 5%)",borderColor:"{green.200}",color:"{green.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)"},warn:{background:"color-mix(in srgb,{yellow.50}, transparent 5%)",borderColor:"{yellow.200}",color:"{yellow.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"},error:{background:"color-mix(in srgb, {red.50}, transparent 5%)",borderColor:"{red.200}",color:"{red.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"},secondary:{background:"{surface.100}",borderColor:"{surface.200}",color:"{surface.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"},contrast:{background:"{surface.900}",borderColor:"{surface.950}",color:"{surface.50}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"}},dark:{info:{background:"color-mix(in srgb, {blue.500}, transparent 84%)",borderColor:"color-mix(in srgb, {blue.700}, transparent 64%)",color:"{blue.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",borderColor:"color-mix(in srgb, {green.700}, transparent 64%)",color:"{green.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)"},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 84%)",borderColor:"color-mix(in srgb, {yellow.700}, transparent 64%)",color:"{yellow.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"},error:{background:"color-mix(in srgb, {red.500}, transparent 84%)",borderColor:"color-mix(in srgb, {red.700}, transparent 64%)",color:"{red.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"},secondary:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.300}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"},contrast:{background:"{surface.0}",borderColor:"{surface.100}",color:"{surface.950}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"}}},rt={root:Yd,text:Zd,icon:Qd,colorScheme:Xd};var qd={padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{transition.duration}"},Kd={hoverBackground:"{content.hover.background}",hoverColor:"{content.hover.color}"},tt={root:qd,display:Kd};var Jd={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}"},os={borderRadius:"{border.radius.sm}"},es={light:{chip:{focusBackground:"{surface.200}",color:"{surface.800}"}},dark:{chip:{focusBackground:"{surface.700}",color:"{surface.0}"}}},nt={root:Jd,chip:os,colorScheme:es};var rs={background:"{form.field.background}",borderColor:"{form.field.border.color}",color:"{form.field.icon.color}",borderRadius:"{form.field.border.radius}",padding:"0.5rem",minWidth:"2.5rem"},at={addon:rs};var ts={transitionDuration:"{transition.duration}"},ns={width:"2.5rem",borderRadius:"{form.field.border.radius}",verticalPadding:"{form.field.padding.y}"},as={light:{button:{background:"transparent",hoverBackground:"{surface.100}",activeBackground:"{surface.200}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",color:"{surface.400}",hoverColor:"{surface.500}",activeColor:"{surface.600}"}},dark:{button:{background:"transparent",hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",color:"{surface.400}",hoverColor:"{surface.300}",activeColor:"{surface.200}"}}},it={root:ts,button:ns,colorScheme:as};var is={gap:"0.5rem"},ds={width:"2.5rem",sm:{width:"2rem"},lg:{width:"3rem"}},dt={root:is,input:ds};var ss={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},st={root:ss};var ls={transitionDuration:"{transition.duration}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},cs={background:"{primary.color}"},us={background:"{content.border.color}"},ps={color:"{text.muted.color}"},lt={root:ls,value:cs,range:us,text:ps};var fs={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",borderColor:"{form.field.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",shadow:"{form.field.shadow}",borderRadius:"{form.field.border.radius}",transitionDuration:"{form.field.transition.duration}"},gs={padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},ms={focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},bs={background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},hs={color:"{list.option.color}",gutterStart:"-0.375rem",gutterEnd:"0.375rem"},vs={padding:"{list.option.padding}"},ks={light:{option:{stripedBackground:"{surface.50}"}},dark:{option:{stripedBackground:"{surface.900}"}}},ct={root:fs,list:gs,option:ms,optionGroup:bs,checkmark:hs,emptyMessage:vs,colorScheme:ks};var ys={background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",gap:"0.5rem",verticalOrientation:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},horizontalOrientation:{padding:"0.5rem 0.75rem",gap:"0.5rem"},transitionDuration:"{transition.duration}"},xs={borderRadius:"{content.border.radius}",padding:"{navigation.item.padding}"},Cs={focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},ws={padding:"0",background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",shadow:"{overlay.navigation.shadow}",gap:"0.5rem"},Bs={padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},_s={padding:"{navigation.submenu.label.padding}",fontWeight:"{navigation.submenu.label.font.weight}",background:"{navigation.submenu.label.background}",color:"{navigation.submenu.label.color}"},Ss={size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},Is={borderColor:"{content.border.color}"},Ts={borderRadius:"50%",size:"1.75rem",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",hoverBackground:"{content.hover.background}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},ut={root:ys,baseItem:xs,item:Cs,overlay:ws,submenu:Bs,submenuLabel:_s,submenuIcon:Ss,separator:Is,mobileButton:Ts};var Ms={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{transition.duration}"},Es={padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},zs={focusBackground:"{navigation.item.focus.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}"}},Ds={padding:"{navigation.submenu.label.padding}",fontWeight:"{navigation.submenu.label.font.weight}",background:"{navigation.submenu.label.background}",color:"{navigation.submenu.label.color}"},Rs={borderColor:"{content.border.color}"},pt={root:Ms,list:Es,item:zs,submenuLabel:Ds,separator:Rs};var Ps={background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",gap:"0.5rem",padding:"0.5rem 0.75rem",transitionDuration:"{transition.duration}"},Fs={borderRadius:"{content.border.radius}",padding:"{navigation.item.padding}"},As={focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},Os={padding:"{navigation.list.padding}",gap:"{navigation.list.gap}",background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",mobileIndent:"1rem",icon:{size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"}},Ls={borderColor:"{content.border.color}"},Ns={borderRadius:"50%",size:"1.75rem",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",hoverBackground:"{content.hover.background}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},ft={root:Ps,baseItem:Fs,item:As,submenu:Os,separator:Ls,mobileButton:Ns};var Hs={borderRadius:"{content.border.radius}",borderWidth:"1px",transitionDuration:"{transition.duration}"},Vs={padding:"0.5rem 0.75rem",gap:"0.5rem",sm:{padding:"0.375rem 0.625rem"},lg:{padding:"0.625rem 0.875rem"}},$s={fontSize:"1rem",fontWeight:"500",sm:{fontSize:"0.875rem"},lg:{fontSize:"1.125rem"}},Ws={size:"1.125rem",sm:{size:"1rem"},lg:{size:"1.25rem"}},js={width:"1.75rem",height:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"}},Us={size:"1rem",sm:{size:"0.875rem"},lg:{size:"1.125rem"}},Gs={root:{borderWidth:"1px"}},Ys={content:{padding:"0"}},Zs={light:{info:{background:"color-mix(in srgb, {blue.50}, transparent 5%)",borderColor:"{blue.200}",color:"{blue.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",closeButton:{hoverBackground:"{blue.100}",focusRing:{color:"{blue.600}",shadow:"none"}},outlined:{color:"{blue.600}",borderColor:"{blue.600}"},simple:{color:"{blue.600}"}},success:{background:"color-mix(in srgb, {green.50}, transparent 5%)",borderColor:"{green.200}",color:"{green.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",closeButton:{hoverBackground:"{green.100}",focusRing:{color:"{green.600}",shadow:"none"}},outlined:{color:"{green.600}",borderColor:"{green.600}"},simple:{color:"{green.600}"}},warn:{background:"color-mix(in srgb,{yellow.50}, transparent 5%)",borderColor:"{yellow.200}",color:"{yellow.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",closeButton:{hoverBackground:"{yellow.100}",focusRing:{color:"{yellow.600}",shadow:"none"}},outlined:{color:"{yellow.600}",borderColor:"{yellow.600}"},simple:{color:"{yellow.600}"}},error:{background:"color-mix(in srgb, {red.50}, transparent 5%)",borderColor:"{red.200}",color:"{red.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",closeButton:{hoverBackground:"{red.100}",focusRing:{color:"{red.600}",shadow:"none"}},outlined:{color:"{red.600}",borderColor:"{red.600}"},simple:{color:"{red.600}"}},secondary:{background:"{surface.100}",borderColor:"{surface.200}",color:"{surface.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",closeButton:{hoverBackground:"{surface.200}",focusRing:{color:"{surface.600}",shadow:"none"}},outlined:{color:"{surface.500}",borderColor:"{surface.500}"},simple:{color:"{surface.500}"}},contrast:{background:"{surface.900}",borderColor:"{surface.950}",color:"{surface.50}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",closeButton:{hoverBackground:"{surface.800}",focusRing:{color:"{surface.50}",shadow:"none"}},outlined:{color:"{surface.950}",borderColor:"{surface.950}"},simple:{color:"{surface.950}"}}},dark:{info:{background:"color-mix(in srgb, {blue.500}, transparent 84%)",borderColor:"color-mix(in srgb, {blue.700}, transparent 64%)",color:"{blue.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{blue.500}",shadow:"none"}},outlined:{color:"{blue.500}",borderColor:"{blue.500}"},simple:{color:"{blue.500}"}},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",borderColor:"color-mix(in srgb, {green.700}, transparent 64%)",color:"{green.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{green.500}",shadow:"none"}},outlined:{color:"{green.500}",borderColor:"{green.500}"},simple:{color:"{green.500}"}},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 84%)",borderColor:"color-mix(in srgb, {yellow.700}, transparent 64%)",color:"{yellow.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{yellow.500}",shadow:"none"}},outlined:{color:"{yellow.500}",borderColor:"{yellow.500}"},simple:{color:"{yellow.500}"}},error:{background:"color-mix(in srgb, {red.500}, transparent 84%)",borderColor:"color-mix(in srgb, {red.700}, transparent 64%)",color:"{red.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{red.500}",shadow:"none"}},outlined:{color:"{red.500}",borderColor:"{red.500}"},simple:{color:"{red.500}"}},secondary:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.300}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",closeButton:{hoverBackground:"{surface.700}",focusRing:{color:"{surface.300}",shadow:"none"}},outlined:{color:"{surface.400}",borderColor:"{surface.400}"},simple:{color:"{surface.400}"}},contrast:{background:"{surface.0}",borderColor:"{surface.100}",color:"{surface.950}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",closeButton:{hoverBackground:"{surface.100}",focusRing:{color:"{surface.950}",shadow:"none"}},outlined:{color:"{surface.0}",borderColor:"{surface.0}"},simple:{color:"{surface.0}"}}}},gt={root:Hs,content:Vs,text:$s,icon:Ws,closeButton:js,closeIcon:Us,outlined:Gs,simple:Ys,colorScheme:Zs};var Qs={borderRadius:"{content.border.radius}",gap:"1rem"},Xs={background:"{content.border.color}",size:"0.5rem"},qs={gap:"0.5rem"},Ks={size:"0.5rem"},Js={size:"1rem"},ol={verticalGap:"0.5rem",horizontalGap:"1rem"},mt={root:Qs,meters:Xs,label:qs,labelMarker:Ks,labelIcon:Js,labelList:ol};var el={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},rl={width:"2.5rem",color:"{form.field.icon.color}"},tl={background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},nl={padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},al={focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}",gap:"0.5rem"},il={background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},dl={color:"{form.field.icon.color}"},sl={borderRadius:"{border.radius.sm}"},ll={padding:"{list.option.padding}"},bt={root:el,dropdown:rl,overlay:tl,list:nl,option:al,optionGroup:il,chip:sl,clearIcon:dl,emptyMessage:ll};var cl={gap:"1.125rem"},ul={gap:"0.5rem"},ht={root:cl,controls:ul};var pl={gutter:"0.75rem",transitionDuration:"{transition.duration}"},fl={background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",borderColor:"{content.border.color}",color:"{content.color}",selectedColor:"{highlight.color}",hoverColor:"{content.hover.color}",padding:"0.75rem 1rem",toggleablePadding:"0.75rem 1rem 1.25rem 1rem",borderRadius:"{content.border.radius}"},gl={background:"{content.background}",hoverBackground:"{content.hover.background}",borderColor:"{content.border.color}",color:"{text.muted.color}",hoverColor:"{text.color}",size:"1.5rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},ml={color:"{content.border.color}",borderRadius:"{content.border.radius}",height:"24px"},vt={root:pl,node:fl,nodeToggleButton:gl,connector:ml};var bl={outline:{width:"2px",color:"{content.background}"}},kt={root:bl};var hl={padding:"0.5rem 1rem",gap:"0.25rem",borderRadius:"{content.border.radius}",background:"{content.background}",color:"{content.color}",transitionDuration:"{transition.duration}"},vl={background:"transparent",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedColor:"{highlight.color}",width:"2.5rem",height:"2.5rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},kl={color:"{text.muted.color}"},yl={maxWidth:"2.5rem"},yt={root:hl,navButton:vl,currentPageReport:kl,jumpToPageInput:yl};var xl={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}"},Cl={background:"transparent",color:"{text.color}",padding:"1.125rem",borderColor:"{content.border.color}",borderWidth:"0",borderRadius:"0"},wl={padding:"0.375rem 1.125rem"},Bl={fontWeight:"600"},_l={padding:"0 1.125rem 1.125rem 1.125rem"},Sl={padding:"0 1.125rem 1.125rem 1.125rem"},xt={root:xl,header:Cl,toggleableHeader:wl,title:Bl,content:_l,footer:Sl};var Il={gap:"0.5rem",transitionDuration:"{transition.duration}"},Tl={background:"{content.background}",borderColor:"{content.border.color}",borderWidth:"1px",color:"{content.color}",padding:"0.25rem 0.25rem",borderRadius:"{content.border.radius}",first:{borderWidth:"1px",topBorderRadius:"{content.border.radius}"},last:{borderWidth:"1px",bottomBorderRadius:"{content.border.radius}"}},Ml={focusBackground:"{navigation.item.focus.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",gap:"0.5rem",padding:"{navigation.item.padding}",borderRadius:"{content.border.radius}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}"}},El={indent:"1rem"},zl={color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}"},Ct={root:Il,panel:Tl,item:Ml,submenu:El,submenuIcon:zl};var Dl={background:"{content.border.color}",borderRadius:"{content.border.radius}",height:".75rem"},Rl={color:"{form.field.icon.color}"},Pl={background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",borderRadius:"{overlay.popover.border.radius}",color:"{overlay.popover.color}",padding:"{overlay.popover.padding}",shadow:"{overlay.popover.shadow}"},Fl={gap:"0.5rem"},Al={light:{strength:{weakBackground:"{red.500}",mediumBackground:"{amber.500}",strongBackground:"{green.500}"}},dark:{strength:{weakBackground:"{red.400}",mediumBackground:"{amber.400}",strongBackground:"{green.400}"}}},wt={meter:Dl,icon:Rl,overlay:Pl,content:Fl,colorScheme:Al};var Ol={gap:"1.125rem"},Ll={gap:"0.5rem"},Bt={root:Ol,controls:Ll};var Nl={background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",color:"{overlay.popover.color}",borderRadius:"{overlay.popover.border.radius}",shadow:"{overlay.popover.shadow}",gutter:"10px",arrowOffset:"1.25rem"},Hl={padding:"{overlay.popover.padding}"},_t={root:Nl,content:Hl};var Vl={background:"{content.border.color}",borderRadius:"{content.border.radius}",height:"1.25rem"},$l={background:"{primary.color}"},Wl={color:"{primary.contrast.color}",fontSize:"0.75rem",fontWeight:"600"},St={root:Vl,value:$l,label:Wl};var jl={light:{root:{colorOne:"{red.500}",colorTwo:"{blue.500}",colorThree:"{green.500}",colorFour:"{yellow.500}"}},dark:{root:{colorOne:"{red.400}",colorTwo:"{blue.400}",colorThree:"{green.400}",colorFour:"{yellow.400}"}}},It={colorScheme:jl};var Ul={width:"1.25rem",height:"1.25rem",background:"{form.field.background}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.hover.color}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.border.color}",checkedBorderColor:"{primary.color}",checkedHoverBorderColor:"{primary.hover.color}",checkedFocusBorderColor:"{primary.color}",checkedDisabledBorderColor:"{form.field.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",shadow:"{form.field.shadow}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{width:"1rem",height:"1rem"},lg:{width:"1.5rem",height:"1.5rem"}},Gl={size:"0.75rem",checkedColor:"{primary.contrast.color}",checkedHoverColor:"{primary.contrast.color}",disabledColor:"{form.field.disabled.color}",sm:{size:"0.5rem"},lg:{size:"1rem"}},Tt={root:Ul,icon:Gl};var Yl={gap:"0.25rem",transitionDuration:"{transition.duration}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},Zl={size:"1rem",color:"{text.muted.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"},Mt={root:Yl,icon:Zl};var Ql={light:{root:{background:"rgba(0,0,0,0.1)"}},dark:{root:{background:"rgba(255,255,255,0.3)"}}},Et={colorScheme:Ql};var Xl={transitionDuration:"{transition.duration}"},ql={size:"9px",borderRadius:"{border.radius.sm}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},Kl={light:{bar:{background:"{surface.100}"}},dark:{bar:{background:"{surface.800}"}}},zt={root:Xl,bar:ql,colorScheme:Kl};var Jl={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},oc={width:"2.5rem",color:"{form.field.icon.color}"},ec={background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},rc={padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},tc={focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},nc={background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},ac={color:"{form.field.icon.color}"},ic={color:"{list.option.color}",gutterStart:"-0.375rem",gutterEnd:"0.375rem"},dc={padding:"{list.option.padding}"},Dt={root:Jl,dropdown:oc,overlay:ec,list:rc,option:tc,optionGroup:nc,clearIcon:ac,checkmark:ic,emptyMessage:dc};var sc={borderRadius:"{form.field.border.radius}"},lc={light:{root:{invalidBorderColor:"{form.field.invalid.border.color}"}},dark:{root:{invalidBorderColor:"{form.field.invalid.border.color}"}}},Rt={root:sc,colorScheme:lc};var cc={borderRadius:"{content.border.radius}"},uc={light:{root:{background:"{surface.200}",animationBackground:"rgba(255,255,255,0.4)"}},dark:{root:{background:"rgba(255, 255, 255, 0.06)",animationBackground:"rgba(255, 255, 255, 0.04)"}}},Pt={root:cc,colorScheme:uc};var pc={transitionDuration:"{transition.duration}"},fc={background:"{content.border.color}",borderRadius:"{content.border.radius}",size:"3px"},gc={background:"{primary.color}"},mc={width:"20px",height:"20px",borderRadius:"50%",background:"{content.border.color}",hoverBackground:"{content.border.color}",content:{borderRadius:"50%",hoverBackground:"{content.background}",width:"16px",height:"16px",shadow:"0px 0.5px 0px 0px rgba(0, 0, 0, 0.08), 0px 1px 1px 0px rgba(0, 0, 0, 0.14)"},focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},bc={light:{handle:{content:{background:"{surface.0}"}}},dark:{handle:{content:{background:"{surface.950}"}}}},Ft={root:pc,track:fc,range:gc,handle:mc,colorScheme:bc};var hc={gap:"0.5rem",transitionDuration:"{transition.duration}"},At={root:hc};var vc={borderRadius:"{form.field.border.radius}",roundedBorderRadius:"2rem",raisedShadow:"0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)"},Ot={root:vc};var kc={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",transitionDuration:"{transition.duration}"},yc={background:"{content.border.color}"},xc={size:"24px",background:"transparent",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},Lt={root:kc,gutter:yc,handle:xc};var Cc={transitionDuration:"{transition.duration}"},wc={background:"{content.border.color}",activeBackground:"{primary.color}",margin:"0 0 0 1.625rem",size:"2px"},Bc={padding:"0.5rem",gap:"1rem"},_c={padding:"0",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},gap:"0.5rem"},Sc={color:"{text.muted.color}",activeColor:"{primary.color}",fontWeight:"500"},Ic={background:"{content.background}",activeBackground:"{content.background}",borderColor:"{content.border.color}",activeBorderColor:"{content.border.color}",color:"{text.muted.color}",activeColor:"{primary.color}",size:"2rem",fontSize:"1.143rem",fontWeight:"500",borderRadius:"50%",shadow:"0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"},Tc={padding:"0.875rem 0.5rem 1.125rem 0.5rem"},Mc={background:"{content.background}",color:"{content.color}",padding:"0",indent:"1rem"},Nt={root:Cc,separator:wc,step:Bc,stepHeader:_c,stepTitle:Sc,stepNumber:Ic,steppanels:Tc,steppanel:Mc};var Ec={transitionDuration:"{transition.duration}"},zc={background:"{content.border.color}"},Dc={borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},gap:"0.5rem"},Rc={color:"{text.muted.color}",activeColor:"{primary.color}",fontWeight:"500"},Pc={background:"{content.background}",activeBackground:"{content.background}",borderColor:"{content.border.color}",activeBorderColor:"{content.border.color}",color:"{text.muted.color}",activeColor:"{primary.color}",size:"2rem",fontSize:"1.143rem",fontWeight:"500",borderRadius:"50%",shadow:"0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"},Ht={root:Ec,separator:zc,itemLink:Dc,itemLabel:Rc,itemNumber:Pc};var Fc={transitionDuration:"{transition.duration}"},Ac={borderWidth:"0 0 1px 0",background:"{content.background}",borderColor:"{content.border.color}"},Oc={background:"transparent",hoverBackground:"transparent",activeBackground:"transparent",borderWidth:"0 0 1px 0",borderColor:"{content.border.color}",hoverBorderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}",padding:"1rem 1.125rem",fontWeight:"600",margin:"0 0 -1px 0",gap:"0.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},Lc={color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},Nc={height:"1px",bottom:"-1px",background:"{primary.color}"},Vt={root:Fc,tablist:Ac,item:Oc,itemIcon:Lc,activeBar:Nc};var Hc={transitionDuration:"{transition.duration}"},Vc={borderWidth:"0 0 1px 0",background:"{content.background}",borderColor:"{content.border.color}"},$c={background:"transparent",hoverBackground:"transparent",activeBackground:"transparent",borderWidth:"0 0 1px 0",borderColor:"{content.border.color}",hoverBorderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}",padding:"1rem 1.125rem",fontWeight:"600",margin:"0 0 -1px 0",gap:"0.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},Wc={background:"{content.background}",color:"{content.color}",padding:"0.875rem 1.125rem 1.125rem 1.125rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"inset {focus.ring.shadow}"}},jc={background:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",width:"2.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},Uc={height:"1px",bottom:"-1px",background:"{primary.color}"},Gc={light:{navButton:{shadow:"0px 0px 10px 50px rgba(255, 255, 255, 0.6)"}},dark:{navButton:{shadow:"0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)"}}},$t={root:Hc,tablist:Vc,tab:$c,tabpanel:Wc,navButton:jc,activeBar:Uc,colorScheme:Gc};var Yc={transitionDuration:"{transition.duration}"},Zc={background:"{content.background}",borderColor:"{content.border.color}"},Qc={borderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},Xc={background:"{content.background}",color:"{content.color}"},qc={background:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}"},Kc={light:{navButton:{shadow:"0px 0px 10px 50px rgba(255, 255, 255, 0.6)"}},dark:{navButton:{shadow:"0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)"}}},Wt={root:Yc,tabList:Zc,tab:Qc,tabPanel:Xc,navButton:qc,colorScheme:Kc};var Jc={fontSize:"0.875rem",fontWeight:"700",padding:"0.25rem 0.5rem",gap:"0.25rem",borderRadius:"{content.border.radius}",roundedBorderRadius:"{border.radius.xl}"},ou={size:"0.75rem"},eu={light:{primary:{background:"{primary.100}",color:"{primary.700}"},secondary:{background:"{surface.100}",color:"{surface.600}"},success:{background:"{green.100}",color:"{green.700}"},info:{background:"{sky.100}",color:"{sky.700}"},warn:{background:"{orange.100}",color:"{orange.700}"},danger:{background:"{red.100}",color:"{red.700}"},contrast:{background:"{surface.950}",color:"{surface.0}"}},dark:{primary:{background:"color-mix(in srgb, {primary.500}, transparent 84%)",color:"{primary.300}"},secondary:{background:"{surface.800}",color:"{surface.300}"},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",color:"{green.300}"},info:{background:"color-mix(in srgb, {sky.500}, transparent 84%)",color:"{sky.300}"},warn:{background:"color-mix(in srgb, {orange.500}, transparent 84%)",color:"{orange.300}"},danger:{background:"color-mix(in srgb, {red.500}, transparent 84%)",color:"{red.300}"},contrast:{background:"{surface.0}",color:"{surface.950}"}}},jt={root:Jc,icon:ou,colorScheme:eu};var ru={background:"{form.field.background}",borderColor:"{form.field.border.color}",color:"{form.field.color}",height:"18rem",padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{form.field.border.radius}"},tu={gap:"0.25rem"},nu={margin:"2px 0"},Ut={root:ru,prompt:tu,commandResponse:nu};var au={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},Gt={root:au};var iu={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{transition.duration}"},du={padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},su={focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},lu={mobileIndent:"1rem"},cu={size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},uu={borderColor:"{content.border.color}"},Yt={root:iu,list:du,item:su,submenu:lu,submenuIcon:cu,separator:uu};var pu={minHeight:"5rem"},fu={eventContent:{padding:"1rem 0"}},gu={eventContent:{padding:"0 1rem"}},mu={size:"1.125rem",borderRadius:"50%",borderWidth:"2px",background:"{content.background}",borderColor:"{content.border.color}",content:{borderRadius:"50%",size:"0.375rem",background:"{primary.color}",insetShadow:"0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"}},bu={color:"{content.border.color}",size:"2px"},Zt={event:pu,horizontal:fu,vertical:gu,eventMarker:mu,eventConnector:bu};var hu={width:"25rem",borderRadius:"{content.border.radius}",borderWidth:"1px",transitionDuration:"{transition.duration}"},vu={size:"1.125rem"},ku={padding:"{overlay.popover.padding}",gap:"0.5rem"},yu={gap:"0.5rem"},xu={fontWeight:"500",fontSize:"1rem"},Cu={fontWeight:"500",fontSize:"0.875rem"},wu={width:"1.75rem",height:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"}},Bu={size:"1rem"},_u={light:{root:{blur:"1.5px"},info:{background:"color-mix(in srgb, {blue.50}, transparent 5%)",borderColor:"{blue.200}",color:"{blue.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",closeButton:{hoverBackground:"{blue.100}",focusRing:{color:"{blue.600}",shadow:"none"}}},success:{background:"color-mix(in srgb, {green.50}, transparent 5%)",borderColor:"{green.200}",color:"{green.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",closeButton:{hoverBackground:"{green.100}",focusRing:{color:"{green.600}",shadow:"none"}}},warn:{background:"color-mix(in srgb,{yellow.50}, transparent 5%)",borderColor:"{yellow.200}",color:"{yellow.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",closeButton:{hoverBackground:"{yellow.100}",focusRing:{color:"{yellow.600}",shadow:"none"}}},error:{background:"color-mix(in srgb, {red.50}, transparent 5%)",borderColor:"{red.200}",color:"{red.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",closeButton:{hoverBackground:"{red.100}",focusRing:{color:"{red.600}",shadow:"none"}}},secondary:{background:"{surface.100}",borderColor:"{surface.200}",color:"{surface.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",closeButton:{hoverBackground:"{surface.200}",focusRing:{color:"{surface.600}",shadow:"none"}}},contrast:{background:"{surface.900}",borderColor:"{surface.950}",color:"{surface.50}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",closeButton:{hoverBackground:"{surface.800}",focusRing:{color:"{surface.50}",shadow:"none"}}}},dark:{root:{blur:"10px"},info:{background:"color-mix(in srgb, {blue.500}, transparent 84%)",borderColor:"color-mix(in srgb, {blue.700}, transparent 64%)",color:"{blue.500}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{blue.500}",shadow:"none"}}},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",borderColor:"color-mix(in srgb, {green.700}, transparent 64%)",color:"{green.500}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{green.500}",shadow:"none"}}},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 84%)",borderColor:"color-mix(in srgb, {yellow.700}, transparent 64%)",color:"{yellow.500}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{yellow.500}",shadow:"none"}}},error:{background:"color-mix(in srgb, {red.500}, transparent 84%)",borderColor:"color-mix(in srgb, {red.700}, transparent 64%)",color:"{red.500}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{red.500}",shadow:"none"}}},secondary:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.300}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",closeButton:{hoverBackground:"{surface.700}",focusRing:{color:"{surface.300}",shadow:"none"}}},contrast:{background:"{surface.0}",borderColor:"{surface.100}",color:"{surface.950}",detailColor:"{surface.950}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",closeButton:{hoverBackground:"{surface.100}",focusRing:{color:"{surface.950}",shadow:"none"}}}}},Qt={root:hu,icon:vu,content:ku,text:yu,summary:xu,detail:Cu,closeButton:wu,closeIcon:Bu,colorScheme:_u};var Su={padding:"0.25rem",borderRadius:"{content.border.radius}",gap:"0.5rem",fontWeight:"500",disabledBackground:"{form.field.disabled.background}",disabledBorderColor:"{form.field.disabled.background}",disabledColor:"{form.field.disabled.color}",invalidBorderColor:"{form.field.invalid.border.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",padding:"0.25rem"},lg:{fontSize:"{form.field.lg.font.size}",padding:"0.25rem"}},Iu={disabledColor:"{form.field.disabled.color}"},Tu={padding:"0.25rem 0.75rem",borderRadius:"{content.border.radius}",checkedShadow:"0px 1px 2px 0px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.04)",sm:{padding:"0.25rem 0.75rem"},lg:{padding:"0.25rem 0.75rem"}},Mu={light:{root:{background:"{surface.100}",checkedBackground:"{surface.100}",hoverBackground:"{surface.100}",borderColor:"{surface.100}",color:"{surface.500}",hoverColor:"{surface.700}",checkedColor:"{surface.900}",checkedBorderColor:"{surface.100}"},content:{checkedBackground:"{surface.0}"},icon:{color:"{surface.500}",hoverColor:"{surface.700}",checkedColor:"{surface.900}"}},dark:{root:{background:"{surface.950}",checkedBackground:"{surface.950}",hoverBackground:"{surface.950}",borderColor:"{surface.950}",color:"{surface.400}",hoverColor:"{surface.300}",checkedColor:"{surface.0}",checkedBorderColor:"{surface.950}"},content:{checkedBackground:"{surface.800}"},icon:{color:"{surface.400}",hoverColor:"{surface.300}",checkedColor:"{surface.0}"}}},Xt={root:Su,icon:Iu,content:Tu,colorScheme:Mu};var Eu={width:"2.5rem",height:"1.5rem",borderRadius:"30px",gap:"0.25rem",shadow:"{form.field.shadow}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},borderWidth:"1px",borderColor:"transparent",hoverBorderColor:"transparent",checkedBorderColor:"transparent",checkedHoverBorderColor:"transparent",invalidBorderColor:"{form.field.invalid.border.color}",transitionDuration:"{form.field.transition.duration}",slideDuration:"0.2s"},zu={borderRadius:"50%",size:"1rem"},Du={light:{root:{background:"{surface.300}",disabledBackground:"{form.field.disabled.background}",hoverBackground:"{surface.400}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.hover.color}"},handle:{background:"{surface.0}",disabledBackground:"{form.field.disabled.color}",hoverBackground:"{surface.0}",checkedBackground:"{surface.0}",checkedHoverBackground:"{surface.0}",color:"{text.muted.color}",hoverColor:"{text.color}",checkedColor:"{primary.color}",checkedHoverColor:"{primary.hover.color}"}},dark:{root:{background:"{surface.700}",disabledBackground:"{surface.600}",hoverBackground:"{surface.600}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.hover.color}"},handle:{background:"{surface.400}",disabledBackground:"{surface.900}",hoverBackground:"{surface.300}",checkedBackground:"{surface.900}",checkedHoverBackground:"{surface.900}",color:"{surface.900}",hoverColor:"{surface.800}",checkedColor:"{primary.color}",checkedHoverColor:"{primary.hover.color}"}}},qt={root:Eu,handle:zu,colorScheme:Du};var Ru={background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",gap:"0.5rem",padding:"0.75rem"},Kt={root:Ru};var Pu={maxWidth:"12.5rem",gutter:"0.25rem",shadow:"{overlay.popover.shadow}",padding:"0.5rem 0.75rem",borderRadius:"{overlay.popover.border.radius}"},Fu={light:{root:{background:"{surface.700}",color:"{surface.0}"}},dark:{root:{background:"{surface.700}",color:"{surface.0}"}}},Jt={root:Pu,colorScheme:Fu};var Au={background:"{content.background}",color:"{content.color}",padding:"1rem",gap:"2px",indent:"1rem",transitionDuration:"{transition.duration}"},Ou={padding:"0.25rem 0.5rem",borderRadius:"{content.border.radius}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{text.color}",hoverColor:"{text.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"},gap:"0.25rem"},Lu={color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedColor:"{highlight.color}"},Nu={borderRadius:"50%",size:"1.75rem",hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedHoverColor:"{primary.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},Hu={size:"2rem"},Vu={margin:"0 0 0.5rem 0"},$u=`
    .p-tree-mask.p-overlay-mask {
        --px-mask-background: light-dark(rgba(255,255,255,0.5),rgba(0,0,0,0.3));
    }
`,on={root:Au,node:Ou,nodeIcon:Lu,nodeToggleButton:Nu,loadingIcon:Hu,filter:Vu,css:$u};var Wu={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},ju={width:"2.5rem",color:"{form.field.icon.color}"},Uu={background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},Gu={padding:"{list.padding}"},Yu={padding:"{list.option.padding}"},Zu={borderRadius:"{border.radius.sm}"},Qu={color:"{form.field.icon.color}"},en={root:Wu,dropdown:ju,overlay:Uu,tree:Gu,emptyMessage:Yu,chip:Zu,clearIcon:Qu};var Xu={transitionDuration:"{transition.duration}"},qu={background:"{content.background}",borderColor:"{treetable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem"},Ku={background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",borderColor:"{treetable.border.color}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",gap:"0.5rem",padding:"0.75rem 1rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},Ju={fontWeight:"600"},o0={background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},e0={borderColor:"{treetable.border.color}",padding:"0.75rem 1rem",gap:"0.5rem"},r0={background:"{content.background}",borderColor:"{treetable.border.color}",color:"{content.color}",padding:"0.75rem 1rem"},t0={fontWeight:"600"},n0={background:"{content.background}",borderColor:"{treetable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem"},a0={width:"0.5rem"},i0={width:"1px",color:"{primary.color}"},d0={color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",size:"0.875rem"},s0={size:"2rem"},l0={hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",selectedHoverColor:"{primary.color}",size:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},c0={borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},u0={borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},p0={light:{root:{borderColor:"{content.border.color}"},bodyCell:{selectedBorderColor:"{primary.100}"}},dark:{root:{borderColor:"{surface.800}"},bodyCell:{selectedBorderColor:"{primary.900}"}}},f0=`
    .p-treetable-mask.p-overlay-mask {
        --px-mask-background: light-dark(rgba(255,255,255,0.5),rgba(0,0,0,0.3));
    }
`,rn={root:Xu,header:qu,headerCell:Ku,columnTitle:Ju,row:o0,bodyCell:e0,footerCell:r0,columnFooter:t0,footer:n0,columnResizer:a0,resizeIndicator:i0,sortIcon:d0,loadingIcon:s0,nodeToggleButton:l0,paginatorTop:c0,paginatorBottom:u0,colorScheme:p0,css:f0};var g0={mask:{background:"{content.background}",color:"{text.muted.color}"},icon:{size:"2rem"}},tn={loader:g0};var m0=Object.defineProperty,b0=Object.defineProperties,h0=Object.getOwnPropertyDescriptors,nn=Object.getOwnPropertySymbols,v0=Object.prototype.hasOwnProperty,k0=Object.prototype.propertyIsEnumerable,an=(e,n,o)=>n in e?m0(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,dn,sn=(dn=((e,n)=>{for(var o in n||(n={}))v0.call(n,o)&&an(e,o,n[o]);if(nn)for(var o of nn(n))k0.call(n,o)&&an(e,o,n[o]);return e})({},Sr),b0(dn,h0({components:{accordion:Cr,autocomplete:wr,avatar:Br,badge:_r,blockui:Ir,breadcrumb:Tr,button:Mr,card:Er,carousel:zr,cascadeselect:Dr,checkbox:Rr,chip:Pr,colorpicker:Fr,confirmdialog:Ar,confirmpopup:Or,contextmenu:Lr,datatable:Hr,dataview:Vr,datepicker:$r,dialog:Wr,divider:jr,dock:Ur,drawer:Gr,editor:Yr,fieldset:Zr,fileupload:Qr,floatlabel:Xr,galleria:qr,iconfield:Kr,iftalabel:Jr,image:ot,imagecompare:et,inlinemessage:rt,inplace:tt,inputchips:nt,inputgroup:at,inputnumber:it,inputotp:dt,inputtext:st,knob:lt,listbox:ct,megamenu:ut,menu:pt,menubar:ft,message:gt,metergroup:mt,multiselect:bt,orderlist:ht,organizationchart:vt,overlaybadge:kt,paginator:yt,panel:xt,panelmenu:Ct,password:wt,picklist:Bt,popover:_t,progressbar:St,progressspinner:It,radiobutton:Tt,rating:Mt,ripple:Et,scrollpanel:zt,select:Dt,selectbutton:Rt,skeleton:Pt,slider:Ft,speeddial:At,splitbutton:Ot,splitter:Lt,stepper:Nt,steps:Ht,tabmenu:Vt,tabs:$t,tabview:Wt,tag:jt,terminal:Ut,textarea:Gt,tieredmenu:Yt,timeline:Zt,toast:Qt,togglebutton:Xt,toggleswitch:qt,toolbar:Kt,tooltip:Jt,tree:on,treeselect:en,treetable:rn,virtualscroller:tn},css:Nr})));var ln=xr(sn,{semantic:{primary:{50:"{teal.50}",100:"{teal.100}",200:"{teal.200}",300:"{teal.300}",400:"{teal.400}",500:"{teal.500}",600:"{teal.600}",700:"{teal.700}",800:"{teal.800}",900:"{teal.900}",950:"{teal.950}"},colorScheme:{light:{primary:{color:"#0F6B68",contrastColor:"#ffffff",hoverColor:"#0B5754",activeColor:"#094846"},surface:{0:"#ffffff",50:"#FAF8F4",100:"#F3EFE7",200:"#E7E1D5",300:"#D5CCBB",400:"#ABA190",500:"#827968",600:"#635B4D",700:"#4F5867",800:"#2E3A48",900:"#0A1F33",950:"#06121F"}},dark:{primary:{color:"#2DD4BF",contrastColor:"#04131A",hoverColor:"#5EEAD4",activeColor:"#99F6E4"},surface:{0:"#ffffff",50:"#E8EEF7",100:"#C9D3E1",200:"#9AA8BC",300:"#6B7A90",400:"#4A5870",500:"#2A3650",600:"#1A2338",700:"#121A2C",800:"#0A1020",900:"#060912",950:"#03050B"}}}}});var cn={providers:[xe(),Oe(mr,He(),Le({scrollPositionRestoration:"top",anchorScrolling:"enabled"}),Ne({paramsInheritanceStrategy:"always"})),ze(Re(),De([br])),Ue({ripple:!1,theme:{preset:ln,options:{darkModeSelector:".app-dark",cssLayer:{name:"primeng",order:"theme, base, primeng, components, utilities"}}}}),Ho,yr()]};var y0=["data-p-icon","exclamation-triangle"],un=(()=>{class e extends $o{pathId;onInit(){this.pathId="url(#"+io()+")"}static \u0275fac=(()=>{let o;return function(r){return(o||(o=S(e)))(r||e)}})();static \u0275cmp=y({type:e,selectors:[["","data-p-icon","exclamation-triangle"]],features:[E],attrs:y0,decls:7,vars:2,consts:[["d","M13.4018 13.1893H0.598161C0.49329 13.189 0.390283 13.1615 0.299143 13.1097C0.208003 13.0578 0.131826 12.9832 0.0780112 12.8932C0.0268539 12.8015 0 12.6982 0 12.5931C0 12.4881 0.0268539 12.3848 0.0780112 12.293L6.47985 1.08982C6.53679 1.00399 6.61408 0.933574 6.70484 0.884867C6.7956 0.836159 6.897 0.810669 7 0.810669C7.103 0.810669 7.2044 0.836159 7.29516 0.884867C7.38592 0.933574 7.46321 1.00399 7.52015 1.08982L13.922 12.293C13.9731 12.3848 14 12.4881 14 12.5931C14 12.6982 13.9731 12.8015 13.922 12.8932C13.8682 12.9832 13.792 13.0578 13.7009 13.1097C13.6097 13.1615 13.5067 13.189 13.4018 13.1893ZM1.63046 11.989H12.3695L7 2.59425L1.63046 11.989Z","fill","currentColor"],["d","M6.99996 8.78801C6.84143 8.78594 6.68997 8.72204 6.57787 8.60993C6.46576 8.49782 6.40186 8.34637 6.39979 8.18784V5.38703C6.39979 5.22786 6.46302 5.0752 6.57557 4.96265C6.68813 4.85009 6.84078 4.78686 6.99996 4.78686C7.15914 4.78686 7.31179 4.85009 7.42435 4.96265C7.5369 5.0752 7.60013 5.22786 7.60013 5.38703V8.18784C7.59806 8.34637 7.53416 8.49782 7.42205 8.60993C7.30995 8.72204 7.15849 8.78594 6.99996 8.78801Z","fill","currentColor"],["d","M6.99996 11.1887C6.84143 11.1866 6.68997 11.1227 6.57787 11.0106C6.46576 10.8985 6.40186 10.7471 6.39979 10.5885V10.1884C6.39979 10.0292 6.46302 9.87658 6.57557 9.76403C6.68813 9.65147 6.84078 9.58824 6.99996 9.58824C7.15914 9.58824 7.31179 9.65147 7.42435 9.76403C7.5369 9.87658 7.60013 10.0292 7.60013 10.1884V10.5885C7.59806 10.7471 7.53416 10.8985 7.42205 11.0106C7.30995 11.1227 7.15849 11.1866 6.99996 11.1887Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(t,r){t&1&&(M(),co(0,"g"),po(1,"path",0)(2,"path",1)(3,"path",2),uo(),co(4,"defs")(5,"clipPath",3),po(6,"rect",4),uo()()),t&2&&(g("clip-path",r.pathId),a(5),To("id",r.pathId))},encapsulation:2})}return e})();var x0=["data-p-icon","info-circle"],pn=(()=>{class e extends $o{pathId;onInit(){this.pathId="url(#"+io()+")"}static \u0275fac=(()=>{let o;return function(r){return(o||(o=S(e)))(r||e)}})();static \u0275cmp=y({type:e,selectors:[["","data-p-icon","info-circle"]],features:[E],attrs:x0,decls:5,vars:2,consts:[["fill-rule","evenodd","clip-rule","evenodd","d","M3.11101 12.8203C4.26215 13.5895 5.61553 14 7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.61553 13.5895 4.26215 12.8203 3.11101C12.0511 1.95987 10.9579 1.06266 9.67879 0.532846C8.3997 0.00303296 6.99224 -0.13559 5.63437 0.134506C4.2765 0.404603 3.02922 1.07129 2.05026 2.05026C1.07129 3.02922 0.404603 4.2765 0.134506 5.63437C-0.13559 6.99224 0.00303296 8.3997 0.532846 9.67879C1.06266 10.9579 1.95987 12.0511 3.11101 12.8203ZM3.75918 2.14976C4.71846 1.50879 5.84628 1.16667 7 1.16667C8.5471 1.16667 10.0308 1.78125 11.1248 2.87521C12.2188 3.96918 12.8333 5.45291 12.8333 7C12.8333 8.15373 12.4912 9.28154 11.8502 10.2408C11.2093 11.2001 10.2982 11.9478 9.23232 12.3893C8.16642 12.8308 6.99353 12.9463 5.86198 12.7212C4.73042 12.4962 3.69102 11.9406 2.87521 11.1248C2.05941 10.309 1.50384 9.26958 1.27876 8.13803C1.05367 7.00647 1.16919 5.83358 1.61071 4.76768C2.05222 3.70178 2.79989 2.79074 3.75918 2.14976ZM7.00002 4.8611C6.84594 4.85908 6.69873 4.79698 6.58977 4.68801C6.48081 4.57905 6.4187 4.43185 6.41669 4.27776V3.88888C6.41669 3.73417 6.47815 3.58579 6.58754 3.4764C6.69694 3.367 6.84531 3.30554 7.00002 3.30554C7.15473 3.30554 7.3031 3.367 7.4125 3.4764C7.52189 3.58579 7.58335 3.73417 7.58335 3.88888V4.27776C7.58134 4.43185 7.51923 4.57905 7.41027 4.68801C7.30131 4.79698 7.1541 4.85908 7.00002 4.8611ZM7.00002 10.6945C6.84594 10.6925 6.69873 10.6304 6.58977 10.5214C6.48081 10.4124 6.4187 10.2652 6.41669 10.1111V6.22225C6.41669 6.06754 6.47815 5.91917 6.58754 5.80977C6.69694 5.70037 6.84531 5.63892 7.00002 5.63892C7.15473 5.63892 7.3031 5.70037 7.4125 5.80977C7.52189 5.91917 7.58335 6.06754 7.58335 6.22225V10.1111C7.58134 10.2652 7.51923 10.4124 7.41027 10.5214C7.30131 10.6304 7.1541 10.6925 7.00002 10.6945Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(t,r){t&1&&(M(),co(0,"g"),po(1,"path",0),uo(),co(2,"defs")(3,"clipPath",1),po(4,"rect",2),uo()()),t&2&&(g("clip-path",r.pathId),a(3),To("id",r.pathId))},encapsulation:2})}return e})();var fn=`
    .p-toast {
        width: dt('toast.width');
        white-space: pre-line;
        word-break: break-word;
    }

    .p-toast-message {
        margin: 0 0 1rem 0;
        display: grid;
        grid-template-rows: 1fr;
    }

    .p-toast-message-icon {
        flex-shrink: 0;
        font-size: dt('toast.icon.size');
        width: dt('toast.icon.size');
        height: dt('toast.icon.size');
    }

    .p-toast-message-content {
        display: flex;
        align-items: flex-start;
        padding: dt('toast.content.padding');
        gap: dt('toast.content.gap');
        min-height: 0;
        overflow: hidden;
        transition: padding 250ms ease-in;
    }

    .p-toast-message-text {
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;
        gap: dt('toast.text.gap');
    }

    .p-toast-summary {
        font-weight: dt('toast.summary.font.weight');
        font-size: dt('toast.summary.font.size');
    }

    .p-toast-detail {
        font-weight: dt('toast.detail.font.weight');
        font-size: dt('toast.detail.font.size');
    }

    .p-toast-close-button {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        cursor: pointer;
        background: transparent;
        transition:
            background dt('toast.transition.duration'),
            color dt('toast.transition.duration'),
            outline-color dt('toast.transition.duration'),
            box-shadow dt('toast.transition.duration');
        outline-color: transparent;
        color: inherit;
        width: dt('toast.close.button.width');
        height: dt('toast.close.button.height');
        border-radius: dt('toast.close.button.border.radius');
        margin: -25% 0 0 0;
        right: -25%;
        padding: 0;
        border: none;
        user-select: none;
    }

    .p-toast-close-button:dir(rtl) {
        margin: -25% 0 0 auto;
        left: -25%;
        right: auto;
    }

    .p-toast-message-info,
    .p-toast-message-success,
    .p-toast-message-warn,
    .p-toast-message-error,
    .p-toast-message-secondary,
    .p-toast-message-contrast {
        border-width: dt('toast.border.width');
        border-style: solid;
        backdrop-filter: blur(dt('toast.blur'));
        border-radius: dt('toast.border.radius');
    }

    .p-toast-close-icon {
        font-size: dt('toast.close.icon.size');
        width: dt('toast.close.icon.size');
        height: dt('toast.close.icon.size');
    }

    .p-toast-close-button:focus-visible {
        outline-width: dt('focus.ring.width');
        outline-style: dt('focus.ring.style');
        outline-offset: dt('focus.ring.offset');
    }

    .p-toast-message-info {
        background: dt('toast.info.background');
        border-color: dt('toast.info.border.color');
        color: dt('toast.info.color');
        box-shadow: dt('toast.info.shadow');
    }

    .p-toast-message-info .p-toast-detail {
        color: dt('toast.info.detail.color');
    }

    .p-toast-message-info .p-toast-close-button:focus-visible {
        outline-color: dt('toast.info.close.button.focus.ring.color');
        box-shadow: dt('toast.info.close.button.focus.ring.shadow');
    }

    .p-toast-message-info .p-toast-close-button:hover {
        background: dt('toast.info.close.button.hover.background');
    }

    .p-toast-message-success {
        background: dt('toast.success.background');
        border-color: dt('toast.success.border.color');
        color: dt('toast.success.color');
        box-shadow: dt('toast.success.shadow');
    }

    .p-toast-message-success .p-toast-detail {
        color: dt('toast.success.detail.color');
    }

    .p-toast-message-success .p-toast-close-button:focus-visible {
        outline-color: dt('toast.success.close.button.focus.ring.color');
        box-shadow: dt('toast.success.close.button.focus.ring.shadow');
    }

    .p-toast-message-success .p-toast-close-button:hover {
        background: dt('toast.success.close.button.hover.background');
    }

    .p-toast-message-warn {
        background: dt('toast.warn.background');
        border-color: dt('toast.warn.border.color');
        color: dt('toast.warn.color');
        box-shadow: dt('toast.warn.shadow');
    }

    .p-toast-message-warn .p-toast-detail {
        color: dt('toast.warn.detail.color');
    }

    .p-toast-message-warn .p-toast-close-button:focus-visible {
        outline-color: dt('toast.warn.close.button.focus.ring.color');
        box-shadow: dt('toast.warn.close.button.focus.ring.shadow');
    }

    .p-toast-message-warn .p-toast-close-button:hover {
        background: dt('toast.warn.close.button.hover.background');
    }

    .p-toast-message-error {
        background: dt('toast.error.background');
        border-color: dt('toast.error.border.color');
        color: dt('toast.error.color');
        box-shadow: dt('toast.error.shadow');
    }

    .p-toast-message-error .p-toast-detail {
        color: dt('toast.error.detail.color');
    }

    .p-toast-message-error .p-toast-close-button:focus-visible {
        outline-color: dt('toast.error.close.button.focus.ring.color');
        box-shadow: dt('toast.error.close.button.focus.ring.shadow');
    }

    .p-toast-message-error .p-toast-close-button:hover {
        background: dt('toast.error.close.button.hover.background');
    }

    .p-toast-message-secondary {
        background: dt('toast.secondary.background');
        border-color: dt('toast.secondary.border.color');
        color: dt('toast.secondary.color');
        box-shadow: dt('toast.secondary.shadow');
    }

    .p-toast-message-secondary .p-toast-detail {
        color: dt('toast.secondary.detail.color');
    }

    .p-toast-message-secondary .p-toast-close-button:focus-visible {
        outline-color: dt('toast.secondary.close.button.focus.ring.color');
        box-shadow: dt('toast.secondary.close.button.focus.ring.shadow');
    }

    .p-toast-message-secondary .p-toast-close-button:hover {
        background: dt('toast.secondary.close.button.hover.background');
    }

    .p-toast-message-contrast {
        background: dt('toast.contrast.background');
        border-color: dt('toast.contrast.border.color');
        color: dt('toast.contrast.color');
        box-shadow: dt('toast.contrast.shadow');
    }
    
    .p-toast-message-contrast .p-toast-detail {
        color: dt('toast.contrast.detail.color');
    }

    .p-toast-message-contrast .p-toast-close-button:focus-visible {
        outline-color: dt('toast.contrast.close.button.focus.ring.color');
        box-shadow: dt('toast.contrast.close.button.focus.ring.shadow');
    }

    .p-toast-message-contrast .p-toast-close-button:hover {
        background: dt('toast.contrast.close.button.hover.background');
    }

    .p-toast-top-center {
        transform: translateX(-50%);
    }

    .p-toast-bottom-center {
        transform: translateX(-50%);
    }

    .p-toast-center {
        min-width: 20vw;
        transform: translate(-50%, -50%);
    }

    .p-toast-message-enter-active {
        animation: p-animate-toast-enter 300ms ease-out;
    }

    .p-toast-message-leave-active {
        animation: p-animate-toast-leave 250ms ease-in;
    }

    .p-toast-message-leave-to .p-toast-message-content {
        padding-top: 0;
        padding-bottom: 0;
    }

    @keyframes p-animate-toast-enter {
        from {
            opacity: 0;
            transform: scale(0.6);
        }
        to {
            opacity: 1;
            grid-template-rows: 1fr;
        }
    }

     @keyframes p-animate-toast-leave {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
            margin-bottom: 0;
            grid-template-rows: 0fr;
            transform: translateY(-100%) scale(0.6);
        }
    }
`;var w0=(e,n)=>({$implicit:e,closeFn:n}),B0=e=>({$implicit:e});function _0(e,n){e&1&&N(0)}function S0(e,n){if(e&1&&h(0,_0,1,0,"ng-container",3),e&2){let o=u();i("ngTemplateOutlet",o.headlessTemplate)("ngTemplateOutletContext",Bo(2,w0,o.message,o.onCloseIconClick))}}function I0(e,n){if(e&1&&p(0,"span",4),e&2){let o=u(3);v(o.cn(o.cx("messageIcon"),o.message==null?null:o.message.icon)),i("pBind",o.ptm("messageIcon"))}}function T0(e,n){if(e&1&&(M(),p(0,"svg",11)),e&2){let o=u(4);v(o.cx("messageIcon")),i("pBind",o.ptm("messageIcon")),g("aria-hidden",!0)}}function M0(e,n){if(e&1&&(M(),p(0,"svg",12)),e&2){let o=u(4);v(o.cx("messageIcon")),i("pBind",o.ptm("messageIcon")),g("aria-hidden",!0)}}function E0(e,n){if(e&1&&(M(),p(0,"svg",13)),e&2){let o=u(4);v(o.cx("messageIcon")),i("pBind",o.ptm("messageIcon")),g("aria-hidden",!0)}}function z0(e,n){if(e&1&&(M(),p(0,"svg",14)),e&2){let o=u(4);v(o.cx("messageIcon")),i("pBind",o.ptm("messageIcon")),g("aria-hidden",!0)}}function D0(e,n){if(e&1&&(M(),p(0,"svg",12)),e&2){let o=u(4);v(o.cx("messageIcon")),i("pBind",o.ptm("messageIcon")),g("aria-hidden",!0)}}function R0(e,n){if(e&1&&R(0,T0,1,4,":svg:svg",7)(1,M0,1,4,":svg:svg",8)(2,E0,1,4,":svg:svg",9)(3,z0,1,4,":svg:svg",10)(4,D0,1,4,":svg:svg",8),e&2){let o,t=u(3);P((o=t.message.severity)==="success"?0:o==="info"?1:o==="error"?2:o==="warn"?3:4)}}function P0(e,n){if(e&1&&(eo(0),R(1,I0,1,3,"span",2)(2,R0,5,1),s(3,"div",6)(4,"div",6),f(5),l(),s(6,"div",6),f(7),l()(),ro()),e&2){let o=u(2);a(),P(o.message.icon?1:2),a(2),i("pBind",o.ptm("messageText"))("ngClass",o.cx("messageText")),g("data-p",o.dataP),a(),i("pBind",o.ptm("summary"))("ngClass",o.cx("summary")),g("data-p",o.dataP),a(),to(" ",o.message.summary," "),a(),i("pBind",o.ptm("detail"))("ngClass",o.cx("detail")),g("data-p",o.dataP),a(),B(o.message.detail)}}function F0(e,n){e&1&&N(0)}function A0(e,n){if(e&1&&p(0,"span",4),e&2){let o=u(4);v(o.cn(o.cx("closeIcon"),o.message==null?null:o.message.closeIcon)),i("pBind",o.ptm("closeIcon"))}}function O0(e,n){if(e&1&&h(0,A0,1,3,"span",17),e&2){let o=u(3);i("ngIf",o.message.closeIcon)}}function L0(e,n){if(e&1&&(M(),p(0,"svg",18)),e&2){let o=u(3);v(o.cx("closeIcon")),i("pBind",o.ptm("closeIcon")),g("aria-hidden",!0)}}function N0(e,n){if(e&1){let o=G();s(0,"div")(1,"button",15),k("click",function(r){I(o);let d=u(2);return T(d.onCloseIconClick(r))})("keydown.enter",function(r){I(o);let d=u(2);return T(d.onCloseIconClick(r))}),R(2,O0,1,1,"span",2)(3,L0,1,4,":svg:svg",16),l()()}if(e&2){let o=u(2);a(),i("pBind",o.ptm("closeButton")),g("class",o.cx("closeButton"))("aria-label",o.closeAriaLabel)("data-p",o.dataP),a(),P(o.message.closeIcon?2:3)}}function H0(e,n){if(e&1&&(s(0,"div",4),h(1,P0,8,12,"ng-container",5)(2,F0,1,0,"ng-container",3),R(3,N0,4,5,"div"),l()),e&2){let o=u();v(o.cn(o.cx("messageContent"),o.message==null?null:o.message.contentStyleClass)),i("pBind",o.ptm("messageContent")),a(),i("ngIf",!o.template),a(),i("ngTemplateOutlet",o.template)("ngTemplateOutletContext",Po(7,B0,o.message)),a(),P((o.message==null?null:o.message.closable)!==!1?3:-1)}}var V0=["message"],$0=["headless"];function W0(e,n){if(e&1){let o=G();s(0,"p-toastItem",1),k("onClose",function(r){I(o);let d=u();return T(d.onMessageClose(r))})("onAnimationEnd",function(){I(o);let r=u();return T(r.onAnimationEnd())})("onAnimationStart",function(){I(o);let r=u();return T(r.onAnimationStart())}),l()}if(e&2){let o=n.$implicit,t=n.index,r=u();i("message",o)("index",t)("life",r.life)("clearAll",r.clearAllTrigger())("template",r.template||r._template)("headlessTemplate",r.headlessTemplate||r._headlessTemplate)("pt",r.pt)("unstyled",r.unstyled())("motionOptions",r.computedMotionOptions())}}var j0={root:({instance:e})=>{let{_position:n}=e;return{position:"fixed",top:n==="top-right"||n==="top-left"||n==="top-center"?"20px":n==="center"?"50%":null,right:(n==="top-right"||n==="bottom-right")&&"20px",bottom:(n==="bottom-left"||n==="bottom-right"||n==="bottom-center")&&"20px",left:n==="top-left"||n==="bottom-left"?"20px":n==="center"||n==="top-center"||n==="bottom-center"?"50%":null}}},U0={root:({instance:e})=>["p-toast p-component",`p-toast-${e._position}`],message:({instance:e})=>({"p-toast-message":!0,"p-toast-message-info":e.message.severity==="info"||e.message.severity===void 0,"p-toast-message-warn":e.message.severity==="warn","p-toast-message-error":e.message.severity==="error","p-toast-message-success":e.message.severity==="success","p-toast-message-secondary":e.message.severity==="secondary","p-toast-message-contrast":e.message.severity==="contrast"}),messageContent:"p-toast-message-content",messageIcon:({instance:e})=>({"p-toast-message-icon":!0,[`pi ${e.message.icon}`]:!!e.message.icon}),messageText:"p-toast-message-text",summary:"p-toast-summary",detail:"p-toast-detail",closeButton:"p-toast-close-button",closeIcon:({instance:e})=>({"p-toast-close-icon":!0,[`pi ${e.message.closeIcon}`]:!!e.message.closeIcon})},Go=(()=>{class e extends no{name="toast";style=fn;classes=U0;inlineStyles=j0;static \u0275fac=(()=>{let o;return function(r){return(o||(o=S(e)))(r||e)}})();static \u0275prov=K({token:e,factory:e.\u0275fac})}return e})();var gn=new J("TOAST_INSTANCE"),G0=(()=>{class e extends O{zone;message;index;life;template;headlessTemplate;showTransformOptions;hideTransformOptions;showTransitionOptions;hideTransitionOptions;motionOptions=_();clearAll=_(null);onAnimationStart=Ko();onAnimationEnd=Ko();onBeforeEnter(o){this.onAnimationStart.emit(o.element)}onAfterLeave(o){!this.visible()&&!this.isDestroyed&&(this.onClose.emit({index:this.index,message:this.message}),this.isDestroyed||this.onAnimationEnd.emit(o.element))}onClose=new F;_componentStyle=m(Go);timeout;visible=L(void 0);isDestroyed=!1;isClosing=!1;constructor(o){super(),this.zone=o,So(()=>{this.clearAll()&&this.visible.set(!1)})}onAfterViewInit(){this.message?.sticky&&this.visible.set(!0),this.initTimeout()}initTimeout(){this.message?.sticky||(this.clearTimeout(),this.zone.runOutsideAngular(()=>{this.visible.set(!0),this.timeout=setTimeout(()=>{this.visible.set(!1)},this.message?.life||this.life||3e3)}))}clearTimeout(){this.timeout&&(clearTimeout(this.timeout),this.timeout=null)}onMouseEnter(){this.clearTimeout()}onMouseLeave(){this.isClosing||this.initTimeout()}onCloseIconClick=o=>{this.isClosing=!0,this.clearTimeout(),this.visible.set(!1),o.preventDefault()};get closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}onDestroy(){this.isDestroyed=!0,this.clearTimeout(),this.visible.set(!1)}get dataP(){return this.cn({[this.message?.severity]:this.message?.severity})}static \u0275fac=function(t){return new(t||e)(Be(ye))};static \u0275cmp=y({type:e,selectors:[["p-toastItem"]],inputs:{message:"message",index:[2,"index","index",Z],life:[2,"life","life",Z],template:"template",headlessTemplate:"headlessTemplate",showTransformOptions:"showTransformOptions",hideTransformOptions:"hideTransformOptions",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",motionOptions:[1,"motionOptions"],clearAll:[1,"clearAll"]},outputs:{onAnimationStart:"onAnimationStart",onAnimationEnd:"onAnimationEnd",onClose:"onClose"},features:[Y([Go]),E],decls:4,vars:10,consts:[["container",""],["role","alert","aria-live","assertive","aria-atomic","true",3,"pMotionOnBeforeEnter","pMotionOnAfterLeave","mouseenter","mouseleave","pMotion","pMotionAppear","pMotionName","pMotionOptions","pBind"],[3,"pBind","class"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"pBind"],[4,"ngIf"],[3,"pBind","ngClass"],["data-p-icon","check",3,"pBind","class"],["data-p-icon","info-circle",3,"pBind","class"],["data-p-icon","times-circle",3,"pBind","class"],["data-p-icon","exclamation-triangle",3,"pBind","class"],["data-p-icon","check",3,"pBind"],["data-p-icon","info-circle",3,"pBind"],["data-p-icon","times-circle",3,"pBind"],["data-p-icon","exclamation-triangle",3,"pBind"],["type","button","autofocus","",3,"click","keydown.enter","pBind"],["data-p-icon","times",3,"pBind","class"],[3,"pBind","class",4,"ngIf"],["data-p-icon","times",3,"pBind"]],template:function(t,r){t&1&&(s(0,"div",1,0),k("pMotionOnBeforeEnter",function(c){return r.onBeforeEnter(c)})("pMotionOnAfterLeave",function(c){return r.onAfterLeave(c)})("mouseenter",function(){return r.onMouseEnter()})("mouseleave",function(){return r.onMouseLeave()}),R(2,S0,1,5,"ng-container")(3,H0,4,9,"div",2),l()),t&2&&(v(r.cn(r.cx("message"),r.message==null?null:r.message.styleClass)),i("pMotion",r.visible())("pMotionAppear",!0)("pMotionName","p-toast-message")("pMotionOptions",r.motionOptions())("pBind",r.ptm("message")),g("id",r.message==null?null:r.message.id)("data-p",r.dataP),a(2),P(r.headlessTemplate?2:3))},dependencies:[Q,Ao,go,mo,nr,un,pn,Wo,ir,z,x,Uo,jo],encapsulation:2,changeDetection:0})}return e})(),ie=(()=>{class e extends O{componentName="Toast";$pcToast=m(gn,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=m(x,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}key;autoZIndex=!0;baseZIndex=0;life=3e3;styleClass;get position(){return this._position}set position(o){this._position=o,this.cd.markForCheck()}preventOpenDuplicates=!1;preventDuplicates=!1;showTransformOptions="translateY(100%)";hideTransformOptions="translateY(-100%)";showTransitionOptions="300ms ease-out";hideTransitionOptions="250ms ease-in";motionOptions=_(void 0);computedMotionOptions=H(()=>q(q({},this.ptm("motion")),this.motionOptions()));breakpoints;onClose=new F;template;headlessTemplate;messageSubscription;clearSubscription;messages;messagesArchieve;_position="top-right";messageService=m(Ho);_componentStyle=m(Go);styleElement;id=io("pn_id_");templates;clearAllTrigger=L(null);constructor(){super()}onInit(){this.messageSubscription=this.messageService.messageObserver.subscribe(o=>{if(o)if(Array.isArray(o)){let t=o.filter(r=>this.canAdd(r));this.add(t)}else this.canAdd(o)&&this.add([o])}),this.clearSubscription=this.messageService.clearObserver.subscribe(o=>{o?this.key===o&&this.clearAll():this.clearAll(),this.cd.markForCheck()})}clearAll(){this.clearAllTrigger.set({})}_template;_headlessTemplate;onAfterContentInit(){this.templates?.forEach(o=>{switch(o.getType()){case"message":this._template=o.template;break;case"headless":this._headlessTemplate=o.template;break;default:this._template=o.template;break}})}onAfterViewInit(){this.breakpoints&&this.createStyle()}add(o){this.messages=this.messages?[...this.messages,...o]:[...o],this.preventDuplicates&&(this.messagesArchieve=this.messagesArchieve?[...this.messagesArchieve,...o]:[...o]),this.cd.markForCheck()}canAdd(o){let t=this.key===o.key;return t&&this.preventOpenDuplicates&&(t=!this.containsMessage(this.messages,o)),t&&this.preventDuplicates&&(t=!this.containsMessage(this.messagesArchieve,o)),t}containsMessage(o,t){return o?o.find(r=>r.summary===t.summary&&r.detail==t.detail&&r.severity===t.severity)!=null:!1}onMessageClose(o){this.messages?.splice(o.index,1),this.onClose.emit({message:o.message}),this.onAnimationEnd(),this.cd.detectChanges()}onAnimationStart(){this.renderer.setAttribute(this.el?.nativeElement,this.id,""),this.autoZIndex&&this.el?.nativeElement.style.zIndex===""&&X.set("modal",this.el?.nativeElement,this.baseZIndex||this.config.zIndex.modal)}onAnimationEnd(){this.autoZIndex&&Lo(this.messages)&&X.clear(this.el?.nativeElement)}createStyle(){if(!this.styleElement){this.styleElement=this.renderer.createElement("style"),this.styleElement.type="text/css",ho(this.styleElement,"nonce",this.config?.csp()?.nonce),this.renderer.appendChild(this.document.head,this.styleElement);let o="";for(let t in this.breakpoints){let r="";for(let d in this.breakpoints[t])r+=d+":"+this.breakpoints[t][d]+" !important;";o+=`
                    @media screen and (max-width: ${t}) {
                        .p-toast[${this.id}] {
                           ${r}
                        }
                    }
                `}this.renderer.setProperty(this.styleElement,"innerHTML",o),ho(this.styleElement,"nonce",this.config?.csp()?.nonce)}}destroyStyle(){this.styleElement&&(this.renderer.removeChild(this.document.head,this.styleElement),this.styleElement=null)}onDestroy(){this.messageSubscription&&this.messageSubscription.unsubscribe(),this.el&&this.autoZIndex&&X.clear(this.el.nativeElement),this.clearSubscription&&this.clearSubscription.unsubscribe(),this.destroyStyle()}get dataP(){return this.cn({[this.position]:this.position})}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=y({type:e,selectors:[["p-toast"]],contentQueries:function(t,r,d){if(t&1&&fo(d,V0,5)(d,$0,5)(d,vo,4),t&2){let c;C(c=w())&&(r.template=c.first),C(c=w())&&(r.headlessTemplate=c.first),C(c=w())&&(r.templates=c)}},hostVars:5,hostBindings:function(t,r){t&2&&(g("data-p",r.dataP),Ro(r.sx("root")),v(r.cn(r.cx("root"),r.styleClass)))},inputs:{key:"key",autoZIndex:[2,"autoZIndex","autoZIndex",b],baseZIndex:[2,"baseZIndex","baseZIndex",Z],life:[2,"life","life",Z],styleClass:"styleClass",position:"position",preventOpenDuplicates:[2,"preventOpenDuplicates","preventOpenDuplicates",b],preventDuplicates:[2,"preventDuplicates","preventDuplicates",b],showTransformOptions:"showTransformOptions",hideTransformOptions:"hideTransformOptions",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",motionOptions:[1,"motionOptions"],breakpoints:"breakpoints"},outputs:{onClose:"onClose"},features:[Y([Go,{provide:gn,useExisting:e},{provide:ao,useExisting:e}]),oo([x]),E],decls:1,vars:1,consts:[[3,"message","index","life","clearAll","template","headlessTemplate","pt","unstyled","motionOptions","onClose","onAnimationEnd","onAnimationStart",4,"ngFor","ngForOf"],[3,"onClose","onAnimationEnd","onAnimationStart","message","index","life","clearAll","template","headlessTemplate","pt","unstyled","motionOptions"]],template:function(t,r){t&1&&h(0,W0,1,9,"p-toastItem",0),t&2&&i("ngForOf",r.messages)},dependencies:[Q,Ie,G0,z],encapsulation:2,changeDetection:0})}return e})(),bn=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=W({type:e});static \u0275inj=$({imports:[ie,z,z]})}return e})();var Yo=class e{whatsapp=yo.whatsapp;progress=L(0);onScroll(){let n=document.documentElement.scrollHeight-innerHeight;this.progress.set(n>0?scrollY/n*100:0)}static \u0275fac=function(o){return new(o||e)};static \u0275cmp=y({type:e,selectors:[["app-floating-actions"]],hostBindings:function(o,t){o&1&&k("scroll",function(){return t.onScroll()},wo)("resize",function(){return t.onScroll()},wo)},decls:8,vars:3,consts:[["aria-hidden","true",1,"progress"],["aria-label","Quick actions",1,"mbar"],["routerLink","/jobs",1,"btn","btn-ghost"],["routerLink","/hire",1,"btn","btn-glow"],["target","_blank","rel","noopener","aria-label","Chat on WhatsApp",1,"wa",3,"href"],["name","wa"]],template:function(o,t){o&1&&(p(0,"div",0),s(1,"div",1)(2,"a",2),f(3,"Find jobs"),l(),s(4,"a",3),f(5,"Hire talent"),l()(),s(6,"a",4),p(7,"app-icon",5),l()),o&2&&(zo("width",t.progress(),"%"),a(6),i("href",t.whatsapp,A))},dependencies:[bo,ko],styles:["[_nghost-%COMP%]{display:contents}"],changeDetection:0})};var Z0=e=>["/services",e],Q0=(e,n)=>n.slug,X0=(e,n)=>n.title,q0=(e,n)=>n.url,K0=(e,n)=>n.label;function J0(e,n){if(e&1&&(s(0,"li")(1,"a",23),f(2),l()()),e&2){let o=n.$implicit;a(),i("routerLink",Po(2,Z0,o.slug)),a(),B(o.slug==="rpo"?"RPO":o.name)}}function op(e,n){if(e&1&&(s(0,"li")(1,"a",23),f(2),l()()),e&2){let o=n.$implicit;a(),i("routerLink",o.url),a(),B(o.label)}}function ep(e,n){if(e&1&&(s(0,"div")(1,"h4"),f(2),l(),s(3,"ul"),j(4,op,3,2,"li",null,K0),l()()),e&2){let o=n.$implicit;a(2),B(o.title),a(2),U(o.links)}}function rp(e,n){if(e&1&&(s(0,"a",23),f(1),l()),e&2){let o=n.$implicit;i("routerLink",o.url),a(),B(o.label)}}var Zo=class e{leads=m(or);notify=m(gr);contact=yo;columns=pr;legal=fr;year=new Date().getFullYear();services=_o(m(Vo).list().pipe(so(n=>n.slice(0,6))),{initialValue:[]});email=new Qe("",{nonNullable:!0,validators:[ne.required,ne.email]});sending=L(!1);subscribe(){if(this.email.invalid){this.email.markAsTouched(),this.notify.error("Please enter a valid work email.","Check your email");return}this.sending.set(!0),this.leads.subscribe({email:this.email.value,topic:"hiring-insights"}).subscribe({next:()=>{this.notify.success("You're subscribed to monthly hiring insights.","Subscribed"),this.email.reset(),this.sending.set(!1)},error:()=>{this.notify.error(),this.sending.set(!1)}})}static \u0275fac=function(o){return new(o||e)};static \u0275cmp=y({type:e,selectors:[["app-site-footer"]],decls:44,vars:10,consts:[[1,"site"],[1,"wrap"],[1,"f-grid"],[1,"f-brand"],["routerLink","/",1,"brand"],[1,"mark"],["alt","","width","30","height","32",3,"src"],[1,"news",3,"ngSubmit"],["for","newsEmail",1,"sr-only"],["id","newsEmail","type","email","placeholder","Work email","autocomplete","email",3,"formControl"],["type","submit",3,"disabled"],[1,"social"],["target","_blank","rel","noopener","aria-label","LinkedIn",3,"href"],["name","in"],["target","_blank","rel","noopener","aria-label","Facebook",3,"href"],["name","fb"],["target","_blank","rel","noopener","aria-label","Instagram",3,"href"],["name","ig"],["routerLink","/hire"],["aria-hidden","true",1,"wordmark"],[1,"f-bottom"],[3,"href"],["aria-label","Legal"],[3,"routerLink"]],template:function(o,t){o&1&&(s(0,"footer",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"a",4)(5,"span",5),p(6,"img",6),l(),f(7,"StarOrigin"),l(),s(8,"p"),f(9,"Global recruitment and staffing \u2014 connecting ambitious companies with proven people across India, the UAE and the US."),l(),s(10,"form",7),k("ngSubmit",function(){return t.subscribe()}),s(11,"label",8),f(12,"Work email"),l(),p(13,"input",9),s(14,"button",10),f(15),l()(),s(16,"div",11)(17,"a",12),p(18,"app-icon",13),l(),s(19,"a",14),p(20,"app-icon",15),l(),s(21,"a",16),p(22,"app-icon",17),l()()(),s(23,"div")(24,"h4"),f(25,"Employers"),l(),s(26,"ul"),j(27,J0,3,4,"li",null,Q0),s(29,"li")(30,"a",18),f(31,"Hire talent"),l()()()(),j(32,ep,6,1,"div",null,X0),l(),s(34,"div",19),f(35,"StarOrigin"),l(),s(36,"div",20)(37,"span"),f(38),s(39,"a",21),f(40),l()(),s(41,"nav",22),j(42,rp,2,2,"a",23,q0),l()()()()),o&2&&(a(6),i("src",t.contact.logo,A),a(7),i("formControl",t.email),a(),i("disabled",t.sending()),a(),B(t.sending()?"Sending\u2026":"Get insights"),a(2),i("href",t.contact.linkedin,A),a(2),i("href",t.contact.facebook,A),a(2),i("href",t.contact.instagram,A),a(6),U(t.services()),a(5),U(t.columns),a(6),to("\xA9 ",t.year," StarOrigin Pvt. Ltd. \xB7 "),a(),i("href","mailto:"+t.contact.email,A),a(),B(t.contact.email),a(2),U(t.legal))},dependencies:[bo,Ke,Xe,Ge,Ye,Ze,qe,ko],encapsulation:2,changeDetection:0})};var hn=`
    .p-badge {
        display: inline-flex;
        border-radius: dt('badge.border.radius');
        align-items: center;
        justify-content: center;
        padding: dt('badge.padding');
        background: dt('badge.primary.background');
        color: dt('badge.primary.color');
        font-size: dt('badge.font.size');
        font-weight: dt('badge.font.weight');
        min-width: dt('badge.min.width');
        height: dt('badge.height');
    }

    .p-badge-dot {
        width: dt('badge.dot.size');
        min-width: dt('badge.dot.size');
        height: dt('badge.dot.size');
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-circle {
        padding: 0;
        border-radius: 50%;
    }

    .p-badge-secondary {
        background: dt('badge.secondary.background');
        color: dt('badge.secondary.color');
    }

    .p-badge-success {
        background: dt('badge.success.background');
        color: dt('badge.success.color');
    }

    .p-badge-info {
        background: dt('badge.info.background');
        color: dt('badge.info.color');
    }

    .p-badge-warn {
        background: dt('badge.warn.background');
        color: dt('badge.warn.color');
    }

    .p-badge-danger {
        background: dt('badge.danger.background');
        color: dt('badge.danger.color');
    }

    .p-badge-contrast {
        background: dt('badge.contrast.background');
        color: dt('badge.contrast.color');
    }

    .p-badge-sm {
        font-size: dt('badge.sm.font.size');
        min-width: dt('badge.sm.min.width');
        height: dt('badge.sm.height');
    }

    .p-badge-lg {
        font-size: dt('badge.lg.font.size');
        min-width: dt('badge.lg.min.width');
        height: dt('badge.lg.height');
    }

    .p-badge-xl {
        font-size: dt('badge.xl.font.size');
        min-width: dt('badge.xl.min.width');
        height: dt('badge.xl.height');
    }
`;var tp=`
    ${hn}

    /* For PrimeNG (directive)*/
    .p-overlay-badge {
        position: relative;
    }

    .p-overlay-badge > .p-badge {
        position: absolute;
        top: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
    }
`,np={root:({instance:e})=>{let n=typeof e.value=="function"?e.value():e.value,o=typeof e.size=="function"?e.size():e.size,t=typeof e.badgeSize=="function"?e.badgeSize():e.badgeSize,r=typeof e.severity=="function"?e.severity():e.severity;return["p-badge p-component",{"p-badge-circle":Ve(n)&&String(n).length===1,"p-badge-dot":Lo(n),"p-badge-sm":o==="small"||t==="small","p-badge-lg":o==="large"||t==="large","p-badge-xl":o==="xlarge"||t==="xlarge","p-badge-info":r==="info","p-badge-success":r==="success","p-badge-warn":r==="warn","p-badge-danger":r==="danger","p-badge-secondary":r==="secondary","p-badge-contrast":r==="contrast"}]}},vn=(()=>{class e extends no{name="badge";style=tp;classes=np;static \u0275fac=(()=>{let o;return function(r){return(o||(o=S(e)))(r||e)}})();static \u0275prov=K({token:e,factory:e.\u0275fac})}return e})();var kn=new J("BADGE_INSTANCE");var se=(()=>{class e extends O{componentName="Badge";$pcBadge=m(kn,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=m(x,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass=_();badgeSize=_();size=_();severity=_();value=_();badgeDisabled=_(!1,{transform:b});_componentStyle=m(vn);get dataP(){return this.cn({circle:this.value()!=null&&String(this.value()).length===1,empty:this.value()==null,disabled:this.badgeDisabled(),[this.severity()]:this.severity(),[this.size()]:this.size()})}static \u0275fac=(()=>{let o;return function(r){return(o||(o=S(e)))(r||e)}})();static \u0275cmp=y({type:e,selectors:[["p-badge"]],hostVars:5,hostBindings:function(t,r){t&2&&(g("data-p",r.dataP),v(r.cn(r.cx("root"),r.styleClass())),zo("display",r.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[Y([vn,{provide:kn,useExisting:e},{provide:ao,useExisting:e}]),oo([x]),E],decls:1,vars:1,template:function(t,r){t&1&&f(0),t&2&&B(r.value())},dependencies:[Q,z,rr],encapsulation:2,changeDetection:0})}return e})(),yn=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=W({type:e});static \u0275inj=$({imports:[se,z,z]})}return e})();var xn=`
    .p-button {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        color: dt('button.primary.color');
        background: dt('button.primary.background');
        border: 1px solid dt('button.primary.border.color');
        padding: dt('button.padding.y') dt('button.padding.x');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('button.transition.duration'),
            color dt('button.transition.duration'),
            border-color dt('button.transition.duration'),
            outline-color dt('button.transition.duration'),
            box-shadow dt('button.transition.duration');
        border-radius: dt('button.border.radius');
        outline-color: transparent;
        gap: dt('button.gap');
    }

    .p-button:disabled {
        cursor: default;
    }

    .p-button-icon-right {
        order: 1;
    }

    .p-button-icon-right:dir(rtl) {
        order: -1;
    }

    .p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
        order: 1;
    }

    .p-button-icon-bottom {
        order: 2;
    }

    .p-button-icon-only {
        width: dt('button.icon.only.width');
        padding-inline-start: 0;
        padding-inline-end: 0;
        gap: 0;
    }

    .p-button-icon-only.p-button-rounded {
        border-radius: 50%;
        height: dt('button.icon.only.width');
    }

    .p-button-icon-only .p-button-label {
        visibility: hidden;
        width: 0;
    }

    .p-button-icon-only::after {
        content: "\xA0";
        visibility: hidden;
        width: 0;
    }

    .p-button-sm {
        font-size: dt('button.sm.font.size');
        padding: dt('button.sm.padding.y') dt('button.sm.padding.x');
    }

    .p-button-sm .p-button-icon {
        font-size: dt('button.sm.font.size');
    }

    .p-button-sm.p-button-icon-only {
        width: dt('button.sm.icon.only.width');
    }

    .p-button-sm.p-button-icon-only.p-button-rounded {
        height: dt('button.sm.icon.only.width');
    }

    .p-button-lg {
        font-size: dt('button.lg.font.size');
        padding: dt('button.lg.padding.y') dt('button.lg.padding.x');
    }

    .p-button-lg .p-button-icon {
        font-size: dt('button.lg.font.size');
    }

    .p-button-lg.p-button-icon-only {
        width: dt('button.lg.icon.only.width');
    }

    .p-button-lg.p-button-icon-only.p-button-rounded {
        height: dt('button.lg.icon.only.width');
    }

    .p-button-vertical {
        flex-direction: column;
    }

    .p-button-label {
        font-weight: dt('button.label.font.weight');
    }

    .p-button-fluid {
        width: 100%;
    }

    .p-button-fluid.p-button-icon-only {
        width: dt('button.icon.only.width');
    }

    .p-button:not(:disabled):hover {
        background: dt('button.primary.hover.background');
        border: 1px solid dt('button.primary.hover.border.color');
        color: dt('button.primary.hover.color');
    }

    .p-button:not(:disabled):active {
        background: dt('button.primary.active.background');
        border: 1px solid dt('button.primary.active.border.color');
        color: dt('button.primary.active.color');
    }

    .p-button:focus-visible {
        box-shadow: dt('button.primary.focus.ring.shadow');
        outline: dt('button.focus.ring.width') dt('button.focus.ring.style') dt('button.primary.focus.ring.color');
        outline-offset: dt('button.focus.ring.offset');
    }

    .p-button .p-badge {
        min-width: dt('button.badge.size');
        height: dt('button.badge.size');
        line-height: dt('button.badge.size');
    }

    .p-button-raised {
        box-shadow: dt('button.raised.shadow');
    }

    .p-button-rounded {
        border-radius: dt('button.rounded.border.radius');
    }

    .p-button-secondary {
        background: dt('button.secondary.background');
        border: 1px solid dt('button.secondary.border.color');
        color: dt('button.secondary.color');
    }

    .p-button-secondary:not(:disabled):hover {
        background: dt('button.secondary.hover.background');
        border: 1px solid dt('button.secondary.hover.border.color');
        color: dt('button.secondary.hover.color');
    }

    .p-button-secondary:not(:disabled):active {
        background: dt('button.secondary.active.background');
        border: 1px solid dt('button.secondary.active.border.color');
        color: dt('button.secondary.active.color');
    }

    .p-button-secondary:focus-visible {
        outline-color: dt('button.secondary.focus.ring.color');
        box-shadow: dt('button.secondary.focus.ring.shadow');
    }

    .p-button-success {
        background: dt('button.success.background');
        border: 1px solid dt('button.success.border.color');
        color: dt('button.success.color');
    }

    .p-button-success:not(:disabled):hover {
        background: dt('button.success.hover.background');
        border: 1px solid dt('button.success.hover.border.color');
        color: dt('button.success.hover.color');
    }

    .p-button-success:not(:disabled):active {
        background: dt('button.success.active.background');
        border: 1px solid dt('button.success.active.border.color');
        color: dt('button.success.active.color');
    }

    .p-button-success:focus-visible {
        outline-color: dt('button.success.focus.ring.color');
        box-shadow: dt('button.success.focus.ring.shadow');
    }

    .p-button-info {
        background: dt('button.info.background');
        border: 1px solid dt('button.info.border.color');
        color: dt('button.info.color');
    }

    .p-button-info:not(:disabled):hover {
        background: dt('button.info.hover.background');
        border: 1px solid dt('button.info.hover.border.color');
        color: dt('button.info.hover.color');
    }

    .p-button-info:not(:disabled):active {
        background: dt('button.info.active.background');
        border: 1px solid dt('button.info.active.border.color');
        color: dt('button.info.active.color');
    }

    .p-button-info:focus-visible {
        outline-color: dt('button.info.focus.ring.color');
        box-shadow: dt('button.info.focus.ring.shadow');
    }

    .p-button-warn {
        background: dt('button.warn.background');
        border: 1px solid dt('button.warn.border.color');
        color: dt('button.warn.color');
    }

    .p-button-warn:not(:disabled):hover {
        background: dt('button.warn.hover.background');
        border: 1px solid dt('button.warn.hover.border.color');
        color: dt('button.warn.hover.color');
    }

    .p-button-warn:not(:disabled):active {
        background: dt('button.warn.active.background');
        border: 1px solid dt('button.warn.active.border.color');
        color: dt('button.warn.active.color');
    }

    .p-button-warn:focus-visible {
        outline-color: dt('button.warn.focus.ring.color');
        box-shadow: dt('button.warn.focus.ring.shadow');
    }

    .p-button-help {
        background: dt('button.help.background');
        border: 1px solid dt('button.help.border.color');
        color: dt('button.help.color');
    }

    .p-button-help:not(:disabled):hover {
        background: dt('button.help.hover.background');
        border: 1px solid dt('button.help.hover.border.color');
        color: dt('button.help.hover.color');
    }

    .p-button-help:not(:disabled):active {
        background: dt('button.help.active.background');
        border: 1px solid dt('button.help.active.border.color');
        color: dt('button.help.active.color');
    }

    .p-button-help:focus-visible {
        outline-color: dt('button.help.focus.ring.color');
        box-shadow: dt('button.help.focus.ring.shadow');
    }

    .p-button-danger {
        background: dt('button.danger.background');
        border: 1px solid dt('button.danger.border.color');
        color: dt('button.danger.color');
    }

    .p-button-danger:not(:disabled):hover {
        background: dt('button.danger.hover.background');
        border: 1px solid dt('button.danger.hover.border.color');
        color: dt('button.danger.hover.color');
    }

    .p-button-danger:not(:disabled):active {
        background: dt('button.danger.active.background');
        border: 1px solid dt('button.danger.active.border.color');
        color: dt('button.danger.active.color');
    }

    .p-button-danger:focus-visible {
        outline-color: dt('button.danger.focus.ring.color');
        box-shadow: dt('button.danger.focus.ring.shadow');
    }

    .p-button-contrast {
        background: dt('button.contrast.background');
        border: 1px solid dt('button.contrast.border.color');
        color: dt('button.contrast.color');
    }

    .p-button-contrast:not(:disabled):hover {
        background: dt('button.contrast.hover.background');
        border: 1px solid dt('button.contrast.hover.border.color');
        color: dt('button.contrast.hover.color');
    }

    .p-button-contrast:not(:disabled):active {
        background: dt('button.contrast.active.background');
        border: 1px solid dt('button.contrast.active.border.color');
        color: dt('button.contrast.active.color');
    }

    .p-button-contrast:focus-visible {
        outline-color: dt('button.contrast.focus.ring.color');
        box-shadow: dt('button.contrast.focus.ring.shadow');
    }

    .p-button-outlined {
        background: transparent;
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):hover {
        background: dt('button.outlined.primary.hover.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):active {
        background: dt('button.outlined.primary.active.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined.p-button-secondary {
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):hover {
        background: dt('button.outlined.secondary.hover.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):active {
        background: dt('button.outlined.secondary.active.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-success {
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):hover {
        background: dt('button.outlined.success.hover.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):active {
        background: dt('button.outlined.success.active.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-info {
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):hover {
        background: dt('button.outlined.info.hover.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):active {
        background: dt('button.outlined.info.active.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-warn {
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):hover {
        background: dt('button.outlined.warn.hover.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):active {
        background: dt('button.outlined.warn.active.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-help {
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):hover {
        background: dt('button.outlined.help.hover.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):active {
        background: dt('button.outlined.help.active.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-danger {
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):hover {
        background: dt('button.outlined.danger.hover.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):active {
        background: dt('button.outlined.danger.active.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-contrast {
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):hover {
        background: dt('button.outlined.contrast.hover.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):active {
        background: dt('button.outlined.contrast.active.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-plain {
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):hover {
        background: dt('button.outlined.plain.hover.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):active {
        background: dt('button.outlined.plain.active.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-text {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):hover {
        background: dt('button.text.primary.hover.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):active {
        background: dt('button.text.primary.active.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text.p-button-secondary {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):hover {
        background: dt('button.text.secondary.hover.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):active {
        background: dt('button.text.secondary.active.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-success {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):hover {
        background: dt('button.text.success.hover.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):active {
        background: dt('button.text.success.active.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-info {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):hover {
        background: dt('button.text.info.hover.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):active {
        background: dt('button.text.info.active.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-warn {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):hover {
        background: dt('button.text.warn.hover.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):active {
        background: dt('button.text.warn.active.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-help {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):hover {
        background: dt('button.text.help.hover.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):active {
        background: dt('button.text.help.active.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-danger {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):hover {
        background: dt('button.text.danger.hover.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):active {
        background: dt('button.text.danger.active.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-contrast {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):hover {
        background: dt('button.text.contrast.hover.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):active {
        background: dt('button.text.contrast.active.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-plain {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):hover {
        background: dt('button.text.plain.hover.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):active {
        background: dt('button.text.plain.active.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-link {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.color');
    }

    .p-button-link:not(:disabled):hover {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.hover.color');
    }

    .p-button-link:not(:disabled):hover .p-button-label {
        text-decoration: underline;
    }

    .p-button-link:not(:disabled):active {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.active.color');
    }
`;var ip=["content"],dp=["loadingicon"],sp=["icon"],lp=["*"],Bn=(e,n)=>({class:e,pt:n});function cp(e,n){e&1&&N(0)}function up(e,n){if(e&1&&p(0,"span",7),e&2){let o=u(3);v(o.cn(o.cx("loadingIcon"),"pi-spin",o.loadingIcon||(o.buttonProps==null?null:o.buttonProps.loadingIcon))),i("pBind",o.ptm("loadingIcon")),g("aria-hidden",!0)}}function pp(e,n){if(e&1&&(M(),p(0,"svg",8)),e&2){let o=u(3);v(o.cn(o.cx("loadingIcon"),o.cx("spinnerIcon"))),i("pBind",o.ptm("loadingIcon"))("spin",!0),g("aria-hidden",!0)}}function fp(e,n){if(e&1&&(eo(0),h(1,up,1,4,"span",3)(2,pp,1,5,"svg",6),ro()),e&2){let o=u(2);a(),i("ngIf",o.loadingIcon||(o.buttonProps==null?null:o.buttonProps.loadingIcon)),a(),i("ngIf",!(o.loadingIcon||o.buttonProps!=null&&o.buttonProps.loadingIcon))}}function gp(e,n){}function mp(e,n){if(e&1&&h(0,gp,0,0,"ng-template",9),e&2){let o=u(2);i("ngIf",o.loadingIconTemplate||o._loadingIconTemplate)}}function bp(e,n){if(e&1&&(eo(0),h(1,fp,3,2,"ng-container",2)(2,mp,1,1,null,5),ro()),e&2){let o=u();a(),i("ngIf",!o.loadingIconTemplate&&!o._loadingIconTemplate),a(),i("ngTemplateOutlet",o.loadingIconTemplate||o._loadingIconTemplate)("ngTemplateOutletContext",Bo(3,Bn,o.cx("loadingIcon"),o.ptm("loadingIcon")))}}function hp(e,n){if(e&1&&p(0,"span",7),e&2){let o=u(2);v(o.cn(o.cx("icon"),o.icon||(o.buttonProps==null?null:o.buttonProps.icon))),i("pBind",o.ptm("icon")),g("data-p",o.dataIconP)}}function vp(e,n){}function kp(e,n){if(e&1&&h(0,vp,0,0,"ng-template",9),e&2){let o=u(2);i("ngIf",!o.icon&&(o.iconTemplate||o._iconTemplate))}}function yp(e,n){if(e&1&&(eo(0),h(1,hp,1,4,"span",3)(2,kp,1,1,null,5),ro()),e&2){let o=u();a(),i("ngIf",(o.icon||(o.buttonProps==null?null:o.buttonProps.icon))&&!o.iconTemplate&&!o._iconTemplate),a(),i("ngTemplateOutlet",o.iconTemplate||o._iconTemplate)("ngTemplateOutletContext",Bo(3,Bn,o.cx("icon"),o.ptm("icon")))}}function xp(e,n){if(e&1&&(s(0,"span",7),f(1),l()),e&2){let o=u();v(o.cx("label")),i("pBind",o.ptm("label")),g("aria-hidden",(o.icon||(o.buttonProps==null?null:o.buttonProps.icon))&&!(o.label||o.buttonProps!=null&&o.buttonProps.label))("data-p",o.dataLabelP),a(),B(o.label||(o.buttonProps==null?null:o.buttonProps.label))}}function Cp(e,n){if(e&1&&p(0,"p-badge",10),e&2){let o=u();i("value",o.badge||(o.buttonProps==null?null:o.buttonProps.badge))("severity",o.badgeSeverity||(o.buttonProps==null?null:o.buttonProps.badgeSeverity))("pt",o.ptm("pcBadge"))("unstyled",o.unstyled())}}var wp={root:({instance:e})=>["p-button p-component",{"p-button-icon-only":e.hasIcon&&!e.label&&!e.buttonProps?.label&&!e.badge,"p-button-vertical":(e.iconPos==="top"||e.iconPos==="bottom")&&e.label,"p-button-loading":e.loading||e.buttonProps?.loading,"p-button-link":e.link||e.buttonProps?.link,[`p-button-${e.severity||e.buttonProps?.severity}`]:e.severity||e.buttonProps?.severity,"p-button-raised":e.raised||e.buttonProps?.raised,"p-button-rounded":e.rounded||e.buttonProps?.rounded,"p-button-text":e.text||e.variant==="text"||e.buttonProps?.text||e.buttonProps?.variant==="text","p-button-outlined":e.outlined||e.variant==="outlined"||e.buttonProps?.outlined||e.buttonProps?.variant==="outlined","p-button-sm":e.size==="small"||e.buttonProps?.size==="small","p-button-lg":e.size==="large"||e.buttonProps?.size==="large","p-button-plain":e.plain||e.buttonProps?.plain,"p-button-fluid":e.hasFluid}],loadingIcon:"p-button-loading-icon",icon:({instance:e})=>["p-button-icon",{[`p-button-icon-${e.iconPos||e.buttonProps?.iconPos}`]:e.label||e.buttonProps?.label,"p-button-icon-left":(e.iconPos==="left"||e.buttonProps?.iconPos==="left")&&e.label||e.buttonProps?.label,"p-button-icon-right":(e.iconPos==="right"||e.buttonProps?.iconPos==="right")&&e.label||e.buttonProps?.label,"p-button-icon-top":(e.iconPos==="top"||e.buttonProps?.iconPos==="top")&&e.label||e.buttonProps?.label,"p-button-icon-bottom":(e.iconPos==="bottom"||e.buttonProps?.iconPos==="bottom")&&e.label||e.buttonProps?.label},e.icon,e.buttonProps?.icon],spinnerIcon:({instance:e})=>Object.entries(e.cx("icon")).filter(([,n])=>!!n).reduce((n,[o])=>n+` ${o}`,"p-button-loading-icon"),label:"p-button-label"},Cn=(()=>{class e extends no{name="button";style=xn;classes=wp;static \u0275fac=(()=>{let o;return function(r){return(o||(o=S(e)))(r||e)}})();static \u0275prov=K({token:e,factory:e.\u0275fac})}return e})();var wn=new J("BUTTON_INSTANCE");var _n=(()=>{class e extends O{componentName="Button";hostName="";$pcButton=m(wn,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=m(x,{self:!0});_componentStyle=m(Cn);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}type="button";badge;disabled;raised=!1;rounded=!1;text=!1;plain=!1;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;iconPos="left";icon;label;loading=!1;loadingIcon;severity;buttonProps;fluid=_(void 0,{transform:b});onClick=new F;onFocus=new F;onBlur=new F;contentTemplate;loadingIconTemplate;iconTemplate;templates;pcFluid=m(dr,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}get hasIcon(){return this.icon||this.buttonProps?.icon||this.iconTemplate||this._iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate}_contentTemplate;_iconTemplate;_loadingIconTemplate;onAfterContentInit(){this.templates?.forEach(o=>{switch(o.getType()){case"content":this._contentTemplate=o.template;break;case"icon":this._iconTemplate=o.template;break;case"loadingicon":this._loadingIconTemplate=o.template;break;default:this._contentTemplate=o.template;break}})}get dataP(){return this.cn({[this.size]:this.size,"icon-only":this.hasIcon&&!this.label&&!this.badge,loading:this.loading,fluid:this.hasFluid,rounded:this.rounded,raised:this.raised,outlined:this.outlined||this.variant==="outlined",text:this.text||this.variant==="text",link:this.link,vertical:(this.iconPos==="top"||this.iconPos==="bottom")&&this.label})}get dataIconP(){return this.cn({[this.iconPos]:this.iconPos,[this.size]:this.size})}get dataLabelP(){return this.cn({[this.size]:this.size,"icon-only":this.hasIcon&&!this.label&&!this.badge})}static \u0275fac=(()=>{let o;return function(r){return(o||(o=S(e)))(r||e)}})();static \u0275cmp=y({type:e,selectors:[["p-button"]],contentQueries:function(t,r,d){if(t&1&&fo(d,ip,5)(d,dp,5)(d,sp,5)(d,vo,4),t&2){let c;C(c=w())&&(r.contentTemplate=c.first),C(c=w())&&(r.loadingIconTemplate=c.first),C(c=w())&&(r.iconTemplate=c.first),C(c=w())&&(r.templates=c)}},inputs:{hostName:"hostName",type:"type",badge:"badge",disabled:[2,"disabled","disabled",b],raised:[2,"raised","raised",b],rounded:[2,"rounded","rounded",b],text:[2,"text","text",b],plain:[2,"plain","plain",b],outlined:[2,"outlined","outlined",b],link:[2,"link","link",b],tabindex:[2,"tabindex","tabindex",Z],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",b],iconPos:"iconPos",icon:"icon",label:"label",loading:[2,"loading","loading",b],loadingIcon:"loadingIcon",severity:"severity",buttonProps:"buttonProps",fluid:[1,"fluid"]},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[Y([Cn,{provide:wn,useExisting:e},{provide:ao,useExisting:e}]),oo([x]),E],ngContentSelectors:lp,decls:7,vars:17,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","pAutoFocus","pBind"],[4,"ngTemplateOutlet"],[4,"ngIf"],[3,"class","pBind",4,"ngIf"],[3,"value","severity","pt","unstyled",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","spinner",3,"class","pBind","spin",4,"ngIf"],[3,"pBind"],["data-p-icon","spinner",3,"pBind","spin"],[3,"ngIf"],[3,"value","severity","pt","unstyled"]],template:function(t,r){t&1&&(Mo(),s(0,"button",0),k("click",function(c){return r.onClick.emit(c)})("focus",function(c){return r.onFocus.emit(c)})("blur",function(c){return r.onBlur.emit(c)}),Eo(1),h(2,cp,1,0,"ng-container",1)(3,bp,3,6,"ng-container",2)(4,yp,3,6,"ng-container",2)(5,xp,2,6,"span",3)(6,Cp,1,4,"p-badge",4),l()),t&2&&(v(r.cn(r.cx("root"),r.styleClass,r.buttonProps==null?null:r.buttonProps.styleClass)),i("ngStyle",r.style||(r.buttonProps==null?null:r.buttonProps.style))("disabled",r.disabled||r.loading||(r.buttonProps==null?null:r.buttonProps.disabled))("pAutoFocus",r.autofocus||(r.buttonProps==null?null:r.buttonProps.autofocus))("pBind",r.ptm("root")),g("type",r.type||(r.buttonProps==null?null:r.buttonProps.type))("aria-label",r.ariaLabel||(r.buttonProps==null?null:r.buttonProps.ariaLabel))("tabindex",r.tabindex||(r.buttonProps==null?null:r.buttonProps.tabindex))("data-p",r.dataP)("data-p-disabled",r.disabled||r.loading||(r.buttonProps==null?null:r.buttonProps.disabled))("data-p-severity",r.severity||(r.buttonProps==null?null:r.buttonProps.severity)),a(2),i("ngTemplateOutlet",r.contentTemplate||r._contentTemplate),a(),i("ngIf",r.loading||(r.buttonProps==null?null:r.buttonProps.loading)),a(),i("ngIf",!(r.loading||r.buttonProps!=null&&r.buttonProps.loading)),a(),i("ngIf",!r.contentTemplate&&!r._contentTemplate&&(r.label||(r.buttonProps==null?null:r.buttonProps.label))),a(),i("ngIf",!r.contentTemplate&&!r._contentTemplate&&(r.badge||(r.buttonProps==null?null:r.buttonProps.badge))))},dependencies:[Q,go,mo,Te,tr,cr,ar,yn,se,z,x],encapsulation:2,changeDetection:0})}return e})();var Sn=(()=>{class e extends O{pFocusTrapDisabled=!1;platformId=m(Ce);document=m(lo);firstHiddenFocusableElement;lastHiddenFocusableElement;onInit(){Oo(this.platformId)&&!this.pFocusTrapDisabled&&!this.firstHiddenFocusableElement&&!this.lastHiddenFocusableElement&&this.createHiddenFocusableElements()}onChanges(o){o.pFocusTrapDisabled&&Oo(this.platformId)&&(o.pFocusTrapDisabled.currentValue?this.removeHiddenFocusableElements():this.createHiddenFocusableElements())}removeHiddenFocusableElements(){this.firstHiddenFocusableElement&&this.firstHiddenFocusableElement.parentNode&&this.firstHiddenFocusableElement.parentNode.removeChild(this.firstHiddenFocusableElement),this.lastHiddenFocusableElement&&this.lastHiddenFocusableElement.parentNode&&this.lastHiddenFocusableElement.parentNode.removeChild(this.lastHiddenFocusableElement)}getComputedSelector(o){return`:not(.p-hidden-focusable):not([data-p-hidden-focusable="true"])${o??""}`}createHiddenFocusableElements(){let t=r=>re("span",{class:"p-hidden-accessible p-hidden-focusable",tabindex:"0",role:"presentation","aria-hidden":!0,"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0,onFocus:r?.bind(this)});this.firstHiddenFocusableElement=t(this.onFirstHiddenElementFocus),this.lastHiddenFocusableElement=t(this.onLastHiddenElementFocus),this.firstHiddenFocusableElement.setAttribute("data-pc-section","firstfocusableelement"),this.lastHiddenFocusableElement.setAttribute("data-pc-section","lastfocusableelement"),this.el.nativeElement.prepend(this.firstHiddenFocusableElement),this.el.nativeElement.append(this.lastHiddenFocusableElement)}onFirstHiddenElementFocus(o){let{currentTarget:t,relatedTarget:r}=o,d=r===this.lastHiddenFocusableElement||!this.el.nativeElement?.contains(r)?$e(t.parentElement,":not(.p-hidden-focusable)"):this.lastHiddenFocusableElement;te(d)}onLastHiddenElementFocus(o){let{currentTarget:t,relatedTarget:r}=o,d=r===this.firstHiddenFocusableElement||!this.el.nativeElement?.contains(r)?We(t.parentElement,":not(.p-hidden-focusable)"):this.firstHiddenFocusableElement;te(d)}static \u0275fac=(()=>{let o;return function(r){return(o||(o=S(e)))(r||e)}})();static \u0275dir=Io({type:e,selectors:[["","pFocusTrap",""]],inputs:{pFocusTrapDisabled:[2,"pFocusTrapDisabled","pFocusTrapDisabled",b]},features:[E]})}return e})(),In=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=W({type:e});static \u0275inj=$({})}return e})();var Tn=`
    .p-drawer {
        display: flex;
        flex-direction: column;
        transform: translate3d(0px, 0px, 0px);
        position: relative;
        transition: transform 0.3s;
        background: dt('drawer.background');
        color: dt('drawer.color');
        border-style: solid;
        border-color: dt('drawer.border.color');
        box-shadow: dt('drawer.shadow');
    }

    .p-drawer-content {
        overflow-y: auto;
        flex-grow: 1;
        padding: dt('drawer.content.padding');
    }

    .p-drawer-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-shrink: 0;
        padding: dt('drawer.header.padding');
    }

    .p-drawer-footer {
        padding: dt('drawer.footer.padding');
    }

    .p-drawer-title {
        font-weight: dt('drawer.title.font.weight');
        font-size: dt('drawer.title.font.size');
    }

    .p-drawer-full .p-drawer {
        transition: none;
        transform: none;
        width: 100vw !important;
        height: 100vh !important;
        max-height: 100%;
        top: 0px !important;
        left: 0px !important;
        border-width: 1px;
    }

    .p-drawer-left .p-drawer-enter-active {
        animation: p-animate-drawer-enter-left 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }
    .p-drawer-left .p-drawer-leave-active {
        animation: p-animate-drawer-leave-left 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }

    .p-drawer-right .p-drawer-enter-active {
        animation: p-animate-drawer-enter-right 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }
    .p-drawer-right .p-drawer-leave-active {
        animation: p-animate-drawer-leave-right 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }

    .p-drawer-top .p-drawer-enter-active {
        animation: p-animate-drawer-enter-top 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }
    .p-drawer-top .p-drawer-leave-active {
        animation: p-animate-drawer-leave-top 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }

    .p-drawer-bottom .p-drawer-enter-active {
        animation: p-animate-drawer-enter-bottom 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }
    .p-drawer-bottom .p-drawer-leave-active {
        animation: p-animate-drawer-leave-bottom 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }

    .p-drawer-full .p-drawer-enter-active {
        animation: p-animate-drawer-enter-full 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }
    .p-drawer-full .p-drawer-leave-active {
        animation: p-animate-drawer-leave-full 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }
    
    .p-drawer-left .p-drawer {
        width: 20rem;
        height: 100%;
        border-inline-end-width: 1px;
    }

    .p-drawer-right .p-drawer {
        width: 20rem;
        height: 100%;
        border-inline-start-width: 1px;
    }

    .p-drawer-top .p-drawer {
        height: 10rem;
        width: 100%;
        border-block-end-width: 1px;
    }

    .p-drawer-bottom .p-drawer {
        height: 10rem;
        width: 100%;
        border-block-start-width: 1px;
    }

    .p-drawer-left .p-drawer-content,
    .p-drawer-right .p-drawer-content,
    .p-drawer-top .p-drawer-content,
    .p-drawer-bottom .p-drawer-content {
        width: 100%;
        height: 100%;
    }

    .p-drawer-open {
        display: flex;
    }

    .p-drawer-mask:dir(rtl) {
        flex-direction: row-reverse;
    }

    @keyframes p-animate-drawer-enter-left {
        from {
            transform: translate3d(-100%, 0px, 0px);
        }
    }

    @keyframes p-animate-drawer-leave-left {
        to {
            transform: translate3d(-100%, 0px, 0px);
        }
    }

    @keyframes p-animate-drawer-enter-right {
        from {
            transform: translate3d(100%, 0px, 0px);
        }
    }

    @keyframes p-animate-drawer-leave-right {
        to {
            transform: translate3d(100%, 0px, 0px);
        }
    }

    @keyframes p-animate-drawer-enter-top {
        from {
            transform: translate3d(0px, -100%, 0px);
        }
    }

    @keyframes p-animate-drawer-leave-top {
        to {
            transform: translate3d(0px, -100%, 0px);
        }
    }

    @keyframes p-animate-drawer-enter-bottom {
        from {
            transform: translate3d(0px, 100%, 0px);
        }
    }

    @keyframes p-animate-drawer-leave-bottom {
        to {
            transform: translate3d(0px, 100%, 0px);
        }
    }

    @keyframes p-animate-drawer-enter-full {
        from {
            opacity: 0;
            transform: scale(0.93);
        }
    }

    @keyframes p-animate-drawer-leave-full {
        to {
            opacity: 0;
            transform: scale(0.93);
        }
    }
`;var _p=["header"],Sp=["footer"],Ip=["content"],Tp=["closeicon"],Mp=["headless"],Ep=["container"],zp=["closeButton"],Dp=["*"];function Rp(e,n){e&1&&N(0)}function Pp(e,n){if(e&1&&h(0,Rp,1,0,"ng-container",4),e&2){let o=u(2);i("ngTemplateOutlet",o.headlessTemplate||o._headlessTemplate)}}function Fp(e,n){e&1&&N(0)}function Ap(e,n){if(e&1&&(s(0,"div",9),f(1),l()),e&2){let o=u(3);v(o.cx("title")),i("pBind",o.ptm("title")),a(),B(o.header)}}function Op(e,n){e&1&&(M(),p(0,"svg",12)),e&2&&g("data-pc-section","closeicon")}function Lp(e,n){}function Np(e,n){e&1&&h(0,Lp,0,0,"ng-template")}function Hp(e,n){if(e&1&&h(0,Op,1,1,"svg",11)(1,Np,1,0,null,4),e&2){let o=u(4);i("ngIf",!o.closeIconTemplate&&!o._closeIconTemplate),a(),i("ngTemplateOutlet",o.closeIconTemplate||o._closeIconTemplate)}}function Vp(e,n){if(e&1){let o=G();s(0,"p-button",10),k("onClick",function(r){I(o);let d=u(3);return T(d.close(r))})("keydown.enter",function(r){I(o);let d=u(3);return T(d.close(r))}),h(1,Hp,2,2,"ng-template",null,1,Fo),l()}if(e&2){let o=u(3);i("pt",o.ptm("pcCloseButton"))("ngClass",o.cx("pcCloseButton"))("buttonProps",o.closeButtonProps)("ariaLabel",o.ariaCloseLabel)("unstyled",o.unstyled()),g("data-pc-group-section","iconcontainer")}}function $p(e,n){e&1&&N(0)}function Wp(e,n){e&1&&N(0)}function jp(e,n){if(e&1&&(eo(0),s(1,"div",5),h(2,Wp,1,0,"ng-container",4),l(),ro()),e&2){let o=u(3);a(),i("pBind",o.ptm("footer"))("ngClass",o.cx("footer")),g("data-pc-section","footer"),a(),i("ngTemplateOutlet",o.footerTemplate||o._footerTemplate)}}function Up(e,n){if(e&1&&(s(0,"div",5),h(1,Fp,1,0,"ng-container",4)(2,Ap,2,4,"div",6)(3,Vp,3,6,"p-button",7),l(),s(4,"div",5),Eo(5),h(6,$p,1,0,"ng-container",4),l(),h(7,jp,3,4,"ng-container",8)),e&2){let o=u(2);i("pBind",o.ptm("header"))("ngClass",o.cx("header")),g("data-pc-section","header"),a(),i("ngTemplateOutlet",o.headerTemplate||o._headerTemplate),a(),i("ngIf",o.header),a(),i("ngIf",o.showCloseIcon&&o.closable),a(),i("pBind",o.ptm("content"))("ngClass",o.cx("content")),g("data-pc-section","content"),a(2),i("ngTemplateOutlet",o.contentTemplate||o._contentTemplate),a(),i("ngIf",o.footerTemplate||o._footerTemplate)}}function Gp(e,n){if(e&1){let o=G();s(0,"div",3,0),k("pMotionOnBeforeEnter",function(r){I(o);let d=u();return T(d.onBeforeEnter(r))})("pMotionOnAfterLeave",function(r){I(o);let d=u();return T(d.onAfterLeave(r))})("keydown",function(r){I(o);let d=u();return T(d.onKeyDown(r))}),R(2,Pp,1,1,"ng-container")(3,Up,8,11),l()}if(e&2){let o=u();Ro(o.style),v(o.cn(o.cx("root"),o.styleClass)),i("pBind",o.ptm("root"))("pMotion",o.visible)("pMotionAppear",!0)("pMotionEnterActiveClass",o.$enterAnimation())("pMotionLeaveActiveClass",o.$leaveAnimation())("pMotionOptions",o.computedMotionOptions()),g("data-p",o.dataP)("data-p-open",o.visible),a(2),P(o.headlessTemplate||o._headlessTemplate?2:3)}}var Yp=`
${Tn}

/** For PrimeNG **/
.p-drawer {
    position: fixed;
}

.p-drawer-left {
    top: 0;
    left: 0;
    width: 20rem;
    height: 100%;
    border-inline-end-width: 1px;
}

.p-drawer-right {
    top: 0;
    right: 0;
    width: 20rem;
    height: 100%;
    border-inline-start-width: 1px;
}

.p-drawer-top {
    top: 0;
    left: 0;
    width: 100%;
    height: 10rem;
    border-block-end-width: 1px;
}

.p-drawer-bottom {
    bottom: 0;
    left: 0;
    width: 100%;
    height: 10rem;
    border-block-start-width: 1px;
}

.p-drawer-full {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    -webkit-transition: none;
    transition: none;
}

/* Animations */
.p-drawer-enter-left {
    animation: p-animate-drawer-enter-left 0.5s cubic-bezier(0.32, 0.72, 0, 1);
}

.p-drawer-leave-left {
    animation: p-animate-drawer-leave-left 0.5s cubic-bezier(0.32, 0.72, 0, 1);
}

.p-drawer-enter-right {
    animation: p-animate-drawer-enter-right 0.5s cubic-bezier(0.32, 0.72, 0, 1);
}

.p-drawer-leave-right {
    animation: p-animate-drawer-leave-right 0.5s cubic-bezier(0.32, 0.72, 0, 1);
}

.p-drawer-enter-top {
    animation: p-animate-drawer-enter-top 0.5s cubic-bezier(0.32, 0.72, 0, 1);
}

.p-drawer-leave-top {
    animation: p-animate-drawer-leave-top 0.5s cubic-bezier(0.32, 0.72, 0, 1);
}

.p-drawer-enter-bottom {
    animation: p-animate-drawer-enter-bottom 0.5s cubic-bezier(0.32, 0.72, 0, 1);
}

.p-drawer-leave-bottom {
    animation: p-animate-drawer-leave-bottom 0.5s cubic-bezier(0.32, 0.72, 0, 1);
}

.p-drawer-enter-full {
    animation: p-animate-drawer-enter-full 0.5s cubic-bezier(0.32, 0.72, 0, 1);
}

.p-drawer-leave-full {
    animation: p-animate-drawer-leave-full 0.5s cubic-bezier(0.32, 0.72, 0, 1);
}
`,Zp={mask:({instance:e})=>["p-drawer-mask",{"p-overlay-mask p-overlay-mask-enter-active":e.modal},{"p-drawer-full":e.fullScreen()}],root:({instance:e})=>["p-drawer p-component",{"p-drawer-full":e.fullScreen(),"p-drawer-open":e.visible},`p-drawer-${e.position()}`],header:"p-drawer-header",title:"p-drawer-title",pcCloseButton:"p-drawer-close-button",content:"p-drawer-content",footer:"p-drawer-footer"},Mn=(()=>{class e extends no{name="drawer";style=Yp;classes=Zp;static \u0275fac=(()=>{let o;return function(r){return(o||(o=S(e)))(r||e)}})();static \u0275prov=K({token:e,factory:e.\u0275fac})}return e})();var En=new J("DRAWER_INSTANCE"),le=(()=>{class e extends O{componentName="Drawer";$pcDrawer=m(En,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=m(x,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}appendTo=_(void 0);motionOptions=_(void 0);computedMotionOptions=H(()=>q(q({},this.ptm("motion")),this.motionOptions()));blockScroll=!1;style;styleClass;ariaCloseLabel;autoZIndex=!0;baseZIndex=0;modal=!0;closeButtonProps={severity:"secondary",text:!0,rounded:!0};dismissible=!0;showCloseIcon=!0;closeOnEscape=!0;transitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)";get visible(){return this._visible??!1}set visible(o){this._visible=o,this._visible&&!this.modalVisible&&(this.modalVisible=!0)}position=_("left");fullScreen=_(!1);$enterAnimation=H(()=>this.fullScreen()?"p-drawer-enter-full":`p-drawer-enter-${this.position()}`);$leaveAnimation=H(()=>this.fullScreen()?"p-drawer-leave-full":`p-drawer-leave-${this.position()}`);header;maskStyle;closable=!0;onShow=new F;onHide=new F;visibleChange=new F;containerViewChild;closeButtonViewChild;initialized;_visible;_position="left";_fullScreen=!1;modalVisible=!1;container;mask;maskClickListener;documentEscapeListener;animationEndListener;_componentStyle=m(Mn);onAfterViewInit(){this.initialized=!0}headerTemplate;footerTemplate;contentTemplate;closeIconTemplate;headlessTemplate;$appendTo=H(()=>this.appendTo()||this.config.overlayAppendTo());_headerTemplate;_footerTemplate;_contentTemplate;_closeIconTemplate;_headlessTemplate;templates;onAfterContentInit(){this.templates?.forEach(o=>{switch(o.getType()){case"content":this._contentTemplate=o.template;break;case"header":this._headerTemplate=o.template;break;case"footer":this._footerTemplate=o.template;break;case"closeicon":this._closeIconTemplate=o.template;break;case"headless":this._headlessTemplate=o.template;break;default:this._contentTemplate=o.template;break}})}onKeyDown(o){o.code==="Escape"&&this.hide(!1)}show(){this.container?.setAttribute(this.$attrSelector,""),this.autoZIndex&&X.set("modal",this.container,this.baseZIndex||this.config.zIndex.modal),this.modal&&this.enableModality(),this.onShow.emit({}),this.visibleChange.emit(!0)}hide(o=!0){o&&this.onHide.emit({}),this.modal&&this.disableModality()}close(o){this.hide(),this.visibleChange.emit(!1),this.cd.markForCheck(),o.preventDefault()}enableModality(){let o=this.document.querySelectorAll('[data-p-open="true"]'),t=o.length,r=t==1?String(parseInt(this.container.style.zIndex)-1):String(parseInt(o[t-1].style.zIndex)-1);if(!this.mask){if(this.mask=this.renderer.createElement("div"),this.mask){let d=`z-index: ${r};${this.getMaskStyle()}`;ho(this.mask,"style",d),ho(this.mask,"data-p",this.dataP),No(this.mask,this.cx("mask"))}this.dismissible&&(this.maskClickListener=this.renderer.listen(this.mask,"click",d=>{this.dismissible&&this.close(d)})),this.renderer.appendChild(this.document.body,this.mask),this.blockScroll&&sr()}}getMaskStyle(){return this.maskStyle?Object.entries(this.maskStyle).map(([o,t])=>`${o}: ${t}`).join("; "):""}disableModality(){this.mask&&(!this.$unstyled()&&oe(this.mask,"p-overlay-mask-enter-active"),!this.$unstyled()&&No(this.mask,"p-overlay-mask-leave-active"),this.animationEndListener=this.renderer.listen(this.mask,"animationend",this.destroyModal.bind(this)))}destroyModal(){this.unbindMaskClickListener(),this.mask&&this.renderer.removeChild(this.document.body,this.mask),this.blockScroll&&lr(),this.unbindAnimationEndListener(),this.mask=null}onBeforeEnter(o){this.container=o.element,this.appendContainer(),this.show(),this.closeOnEscape&&this.bindDocumentEscapeListener()}onAfterLeave(){this.hide(!1),X.clear(this.container),this.unbindGlobalListeners(),this.modalVisible=!1,this.container=null}appendContainer(){this.$appendTo()&&this.$appendTo()!=="self"&&(this.$appendTo()==="body"?ee(this.document.body,this.container):ee(this.$appendTo(),this.container))}bindDocumentEscapeListener(){let o=this.el?this.el.nativeElement.ownerDocument:this.document;this.documentEscapeListener=this.renderer.listen(o,"keydown",t=>{t.which==27&&parseInt(this.container?.style.zIndex)===X.get(this.container)&&this.close(t)})}unbindDocumentEscapeListener(){this.documentEscapeListener&&(this.documentEscapeListener(),this.documentEscapeListener=null)}unbindMaskClickListener(){this.maskClickListener&&(this.maskClickListener(),this.maskClickListener=null)}unbindGlobalListeners(){this.unbindMaskClickListener(),this.unbindDocumentEscapeListener()}unbindAnimationEndListener(){this.animationEndListener&&this.mask&&(this.animationEndListener(),this.animationEndListener=null)}onDestroy(){this.initialized=!1,this.visible&&this.modal&&this.destroyModal(),this.$appendTo()&&this.container&&this.renderer.appendChild(this.el.nativeElement,this.container),this.container&&this.autoZIndex&&X.clear(this.container),this.container=null,this.unbindGlobalListeners(),this.unbindAnimationEndListener()}get dataP(){return this.cn({"full-screen":this.position()==="full",[this.position()]:this.position(),open:this.visible,modal:this.modal})}static \u0275fac=(()=>{let o;return function(r){return(o||(o=S(e)))(r||e)}})();static \u0275cmp=y({type:e,selectors:[["p-drawer"]],contentQueries:function(t,r,d){if(t&1&&fo(d,_p,4)(d,Sp,4)(d,Ip,4)(d,Tp,4)(d,Mp,4)(d,vo,4),t&2){let c;C(c=w())&&(r.headerTemplate=c.first),C(c=w())&&(r.footerTemplate=c.first),C(c=w())&&(r.contentTemplate=c.first),C(c=w())&&(r.closeIconTemplate=c.first),C(c=w())&&(r.headlessTemplate=c.first),C(c=w())&&(r.templates=c)}},viewQuery:function(t,r){if(t&1&&Se(Ep,5)(zp,5),t&2){let d;C(d=w())&&(r.containerViewChild=d.first),C(d=w())&&(r.closeButtonViewChild=d.first)}},inputs:{appendTo:[1,"appendTo"],motionOptions:[1,"motionOptions"],blockScroll:[2,"blockScroll","blockScroll",b],style:"style",styleClass:"styleClass",ariaCloseLabel:"ariaCloseLabel",autoZIndex:[2,"autoZIndex","autoZIndex",b],baseZIndex:[2,"baseZIndex","baseZIndex",Z],modal:[2,"modal","modal",b],closeButtonProps:"closeButtonProps",dismissible:[2,"dismissible","dismissible",b],showCloseIcon:[2,"showCloseIcon","showCloseIcon",b],closeOnEscape:[2,"closeOnEscape","closeOnEscape",b],transitionOptions:"transitionOptions",visible:"visible",position:[1,"position"],fullScreen:[1,"fullScreen"],header:"header",maskStyle:"maskStyle",closable:[2,"closable","closable",b]},outputs:{onShow:"onShow",onHide:"onHide",visibleChange:"visibleChange"},features:[Y([Mn,{provide:En,useExisting:e},{provide:ao,useExisting:e}]),oo([x]),E],ngContentSelectors:Dp,decls:1,vars:1,consts:[["container",""],["icon",""],["role","complementary","pFocusTrap","",3,"pBind","pMotion","pMotionAppear","pMotionEnterActiveClass","pMotionLeaveActiveClass","pMotionOptions","class","style"],["role","complementary","pFocusTrap","",3,"pMotionOnBeforeEnter","pMotionOnAfterLeave","keydown","pBind","pMotion","pMotionAppear","pMotionEnterActiveClass","pMotionLeaveActiveClass","pMotionOptions"],[4,"ngTemplateOutlet"],[3,"pBind","ngClass"],[3,"pBind","class",4,"ngIf"],[3,"pt","ngClass","buttonProps","ariaLabel","unstyled","onClick","keydown.enter",4,"ngIf"],[4,"ngIf"],[3,"pBind"],[3,"onClick","keydown.enter","pt","ngClass","buttonProps","ariaLabel","unstyled"],["data-p-icon","times",4,"ngIf"],["data-p-icon","times"]],template:function(t,r){t&1&&(Mo(),R(0,Gp,4,13,"div",2)),t&2&&P(r.modalVisible?0:-1)},dependencies:[Q,Ao,go,mo,_n,Wo,z,x,In,Sn,Uo,jo],encapsulation:2,changeDetection:0})}return e})(),zn=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=W({type:e});static \u0275inj=$({imports:[le,z,z]})}return e})();var Dn=(e,n)=>n.label,Xp=(e,n)=>n.url;function qp(e,n){e&1&&p(0,"app-icon",24)}function Kp(e,n){if(e&1&&(s(0,"a",23)(1,"span",27),p(2,"app-icon",15),l(),s(3,"span")(4,"b"),f(5),l(),s(6,"small"),f(7),l()()()),e&2){let o=n.$implicit;i("routerLink",o.url),a(2),i("name",o.icon??"arrow"),a(3),B(o.label),a(2),B(o.note)}}function Jp(e,n){if(e&1&&(s(0,"div",26),j(1,Kp,8,4,"a",23,Xp),l()),e&2){let o=u().$implicit;Do("one-col",!o.twoColumns),a(),U(o.items)}}function of(e,n){if(e&1&&(s(0,"li")(1,"a",23),f(2),R(3,qp,1,0,"app-icon",24),l(),R(4,Jp,3,2,"div",25),l()),e&2){let o=n.$implicit,t=u();a(),i("routerLink",o.url),g("aria-current",t.isActive(o)?"page":null),a(),to(" ",o.label," "),a(),P(o.items.length?3:-1),a(),P(o.items.length?4:-1)}}function ef(e,n){if(e&1){let o=G();s(0,"a",28),k("click",function(){I(o);let r=u();return T(r.drawerOpen.set(!1))}),s(1,"span",6),p(2,"img",7),l(),f(3,"StarOrigin "),l()}if(e&2){let o=u();a(2),i("src",o.contact.logo,A)}}function rf(e,n){if(e&1){let o=G();s(0,"a",29),k("click",function(){I(o);let r=u();return T(r.drawerOpen.set(!1))}),f(1),s(2,"span"),f(3),l()()}if(e&2){let o=n.$implicit,t=n.$index;i("routerLink",o.url),a(),to("",o.label," "),a(2),to("0",t+1)}}var Qo=class e{router=m(Ae);doc=m(lo);theme=m(er);contact=yo;scrolled=L(!1);drawerOpen=L(!1);services=_o(m(Vo).list(),{initialValue:[]});url=_o(this.router.events.pipe(be(n=>n instanceof Pe),so(n=>n.urlAfterRedirects)),{initialValue:this.router.url});menus=H(()=>ur.map(n=>fe(q({},n),{items:[...n.includeServices?this.services().map(o=>({label:o.name,url:`/services/${o.slug}`,icon:o.icon,note:o.menuNote})):[],...n.items??[]]})));isActive(n){let o=this.url().split(/[?#]/)[0];return n.activeMatch.some(t=>o===t||o.startsWith(t+"/"))}onScroll(){this.scrolled.set(scrollY>20)}onKey(n){let o=(this.doc.activeElement?.tagName??"").toUpperCase();if(n.key!=="/"||["INPUT","TEXTAREA","SELECT"].includes(o)||this.doc.activeElement?.isContentEditable)return;n.preventDefault();let t=this.doc.getElementById("jobQ");t?(t.scrollIntoView({block:"center",behavior:"smooth"}),setTimeout(()=>t.focus({preventScroll:!0}),250)):this.router.navigate(["/jobs"],{queryParams:{focus:1}})}static \u0275fac=function(o){return new(o||e)};static \u0275cmp=y({type:e,selectors:[["app-site-header"]],hostBindings:function(o,t){o&1&&k("scroll",function(){return t.onScroll()},wo)("keydown",function(d){return t.onKey(d)},we)},decls:36,vars:9,consts:[["header",""],["href","#main",1,"skip"],["aria-hidden","true",1,"bg-grid"],[1,"nav-shell"],["aria-label","Primary",1,"nav"],["routerLink","/","aria-label","StarOrigin home",1,"brand"],[1,"mark"],["alt","","width","30","height","32",3,"src"],[1,"menu"],[1,"nav-r"],["routerLink","/jobs","aria-label","Search jobs (press /)",1,"kbd"],["name","search"],["routerLink","/hire",1,"btn","btn-glow"],["name","arrow"],["type","button",1,"theme-btn",3,"click"],[3,"name"],["type","button","aria-label","Open menu",1,"burger",3,"click"],["name","menu"],["position","full","ariaCloseLabel","Close menu",3,"visibleChange","visible","modal"],[1,"drawer-links"],[1,"d-link",3,"routerLink"],["routerLink","/hire",1,"btn","btn-glow",3,"click"],["routerLink","/submit-cv",1,"btn","btn-ghost",3,"click"],[3,"routerLink"],["name","chev"],[1,"dd",3,"one-col"],[1,"dd"],[1,"di"],["routerLink","/",1,"brand",3,"click"],[1,"d-link",3,"click","routerLink"]],template:function(o,t){o&1&&(s(0,"a",1),f(1,"Skip to content"),l(),p(2,"div",2),s(3,"div",3)(4,"nav",4)(5,"a",5)(6,"span",6),p(7,"img",7),l(),f(8,"StarOrigin "),l(),s(9,"ul",8),j(10,of,5,5,"li",null,Dn),l(),s(12,"div",9)(13,"a",10),p(14,"app-icon",11),f(15,"Search jobs "),s(16,"span"),f(17,"/"),l()(),s(18,"a",12),f(19,"Hire talent "),p(20,"app-icon",13),l(),s(21,"button",14),k("click",function(){return t.theme.toggle()}),p(22,"app-icon",15),l(),s(23,"button",16),k("click",function(){return t.drawerOpen.set(!0)}),p(24,"app-icon",17),l()()()(),s(25,"p-drawer",18),k("visibleChange",function(d){return t.drawerOpen.set(d)}),h(26,ef,4,1,"ng-template",null,0,Fo),s(28,"div",19),j(29,rf,4,3,"a",20,Dn),s(31,"a",21),k("click",function(){return t.drawerOpen.set(!1)}),f(32,"Hire talent "),p(33,"app-icon",13),l(),s(34,"a",22),k("click",function(){return t.drawerOpen.set(!1)}),f(35,"Submit your CV"),l()()()),o&2&&(a(4),Do("scrolled",t.scrolled()),a(3),i("src",t.contact.logo,A),a(3),U(t.menus()),a(11),g("aria-pressed",t.theme.isLight())("aria-label",t.theme.isLight()?"Switch to dark theme":"Switch to light theme"),a(),i("name",t.theme.isLight()?"moon":"sun"),a(),g("aria-expanded",t.drawerOpen()),a(2),i("visible",t.drawerOpen())("modal",!0),a(4),U(t.menus()))},dependencies:[bo,ko,zn,le],styles:[".drawer-links[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px}.drawer-links[_ngcontent-%COMP%]   .d-link[_ngcontent-%COMP%]{font:600 28px/1 var(--head);padding:16px 0;border-bottom:1px solid var(--stroke);display:flex;justify-content:space-between;align-items:center}.drawer-links[_ngcontent-%COMP%]   .d-link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font:500 12px/1 var(--mono);color:var(--dim)}.drawer-links[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{margin-top:16px}"],changeDetection:0})};var Xo=class e{static \u0275fac=function(o){return new(o||e)};static \u0275cmp=y({type:e,selectors:[["app-root"]],decls:6,vars:0,consts:[["id","main","tabindex","-1"],["position","bottom-center"]],template:function(o,t){o&1&&(p(0,"app-site-header"),s(1,"main",0),p(2,"router-outlet"),l(),p(3,"app-site-footer")(4,"app-floating-actions")(5,"p-toast",1))},dependencies:[Fe,Qo,Zo,Yo,bn,ie],encapsulation:2,changeDetection:0})};Me(Xo,cn).catch(e=>console.error(e));
