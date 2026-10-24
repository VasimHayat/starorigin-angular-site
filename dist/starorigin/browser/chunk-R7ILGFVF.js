import{a as _e}from"./chunk-4CUSKDSM.js";import{a as Ae}from"./chunk-ISNAWA4F.js";import{a as Ce,c as De,f as $}from"./chunk-5Z6OOJ67.js";import{a as be,c as ye}from"./chunk-ADZG42A6.js";import{$ as V,D as I,E as W,F as B,U as ge,ja as ve,la as S,ma as K,na as l,oa as C}from"./chunk-2BTKQDYQ.js";import{A as r,Ab as me,Ba as G,Cb as k,Da as f,E as M,Ea as P,Fa as T,Ga as ce,I as j,Ia as de,Ja as se,L as Y,O as m,Oa as le,R as ee,Ra as p,Sa as pe,Ta as ue,W as d,a as F,aa as u,ba as ne,bb as O,da as y,db as fe,ea as A,fa as x,ia as g,ja as oe,ka as te,kb as s,mb as v,na as ie,oa as ae,pa as a,qa as E,qb as Q,ra as N,sa as _,va as re,w as D,wa as q,x as J,xa as U,y as X,yb as he,z as H}from"./chunk-645TR44L.js";var Te=["data-p-icon","chevron-up"],Ee=(()=>{class n extends ye{static \u0275fac=(()=>{let e;return function(t){return(e||(e=m(n)))(t||n)}})();static \u0275cmp=u({type:n,selectors:[["","data-p-icon","chevron-up"]],features:[A],attrs:Te,decls:1,vars:0,consts:[["d","M12.2097 10.4113C12.1057 10.4118 12.0027 10.3915 11.9067 10.3516C11.8107 10.3118 11.7237 10.2532 11.6506 10.1792L6.93602 5.46461L2.22139 10.1476C2.07272 10.244 1.89599 10.2877 1.71953 10.2717C1.54307 10.2556 1.3771 10.1808 1.24822 10.0593C1.11933 9.93766 1.035 9.77633 1.00874 9.6011C0.982477 9.42587 1.0158 9.2469 1.10338 9.09287L6.37701 3.81923C6.52533 3.6711 6.72639 3.58789 6.93602 3.58789C7.14565 3.58789 7.3467 3.6711 7.49502 3.81923L12.7687 9.09287C12.9168 9.24119 13 9.44225 13 9.65187C13 9.8615 12.9168 10.0626 12.7687 10.2109C12.616 10.3487 12.4151 10.4207 12.2097 10.4113Z","fill","currentColor"]],template:function(o,t){o&1&&(M(),re(0,"path",0))},encapsulation:2})}return n})();var Ne=`
    .p-accordionpanel {
        display: flex;
        flex-direction: column;
        border-style: solid;
        border-width: dt('accordion.panel.border.width');
        border-color: dt('accordion.panel.border.color');
    }

    .p-accordionheader {
        all: unset;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: dt('accordion.header.padding');
        color: dt('accordion.header.color');
        background: dt('accordion.header.background');
        border-style: solid;
        border-width: dt('accordion.header.border.width');
        border-color: dt('accordion.header.border.color');
        font-weight: dt('accordion.header.font.weight');
        border-radius: dt('accordion.header.border.radius');
        transition:
            background dt('accordion.transition.duration'),
            color dt('accordion.transition.duration'),
            outline-color dt('accordion.transition.duration'),
            box-shadow dt('accordion.transition.duration');
        outline-color: transparent;
    }

    .p-accordionpanel:first-child > .p-accordionheader {
        border-width: dt('accordion.header.first.border.width');
        border-start-start-radius: dt('accordion.header.first.top.border.radius');
        border-start-end-radius: dt('accordion.header.first.top.border.radius');
    }

    .p-accordionpanel:last-child > .p-accordionheader {
        border-end-start-radius: dt('accordion.header.last.bottom.border.radius');
        border-end-end-radius: dt('accordion.header.last.bottom.border.radius');
    }

    .p-accordionpanel:last-child.p-accordionpanel-active > .p-accordionheader {
        border-end-start-radius: dt('accordion.header.last.active.bottom.border.radius');
        border-end-end-radius: dt('accordion.header.last.active.bottom.border.radius');
    }

    .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.color');
    }

    .p-accordionpanel:not(.p-disabled) .p-accordionheader:focus-visible {
        box-shadow: dt('accordion.header.focus.ring.shadow');
        outline: dt('accordion.header.focus.ring.width') dt('accordion.header.focus.ring.style') dt('accordion.header.focus.ring.color');
        outline-offset: dt('accordion.header.focus.ring.offset');
    }

    .p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) > .p-accordionheader:hover {
        background: dt('accordion.header.hover.background');
        color: dt('accordion.header.hover.color');
    }

    .p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) .p-accordionheader:hover .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.hover.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader {
        background: dt('accordion.header.active.background');
        color: dt('accordion.header.active.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.active.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover {
        background: dt('accordion.header.active.hover.background');
        color: dt('accordion.header.active.hover.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.active.hover.color');
    }

    .p-accordioncontent {
        display: grid;
        grid-template-rows: 1fr;
    }

    .p-accordioncontent-wrapper {
        min-height: 0;
    }

    .p-accordioncontent-content {
        border-style: solid;
        border-width: dt('accordion.content.border.width');
        border-color: dt('accordion.content.border.color');
        background-color: dt('accordion.content.background');
        color: dt('accordion.content.color');
        padding: dt('accordion.content.padding');
    }
`;var R=["*"],Oe=["toggleicon"],ke=n=>({active:n});function Be(n,c){}function Se(n,c){n&1&&x(0,Be,0,0,"ng-template")}function Ke(n,c){if(n&1&&x(0,Se,1,0,null,0),n&2){let e=f();a("ngTemplateOutlet",e.toggleicon)("ngTemplateOutletContext",fe(2,ke,e.active()))}}function Le(n,c){if(n&1&&_(0,"span",4),n&2){let e=f(3);p(e.cn(e.cx("toggleicon"),e.pcAccordion.collapseIcon)),a("pBind",e.ptm("toggleicon")),g("aria-hidden",!0)}}function Ve(n,c){if(n&1&&(M(),_(0,"svg",5)),n&2){let e=f(3);p(e.cx("toggleicon")),a("pBind",e.ptm("toggleicon")),g("aria-hidden",!0)}}function $e(n,c){if(n&1&&(q(0),x(1,Le,1,4,"span",2)(2,Ve,1,4,"svg",3),U()),n&2){let e=f(2);d(),a("ngIf",e.pcAccordion.collapseIcon),d(),a("ngIf",!e.pcAccordion.collapseIcon)}}function Re(n,c){if(n&1&&_(0,"span",4),n&2){let e=f(3);p(e.cn(e.cx("toggleicon"),e.pcAccordion.expandIcon)),a("pBind",e.ptm("toggleicon")),g("aria-hidden",!0)}}function je(n,c){if(n&1&&(M(),_(0,"svg",7)),n&2){let e=f(3);a("pBind",e.ptm("toggleicon")),g("aria-hidden",!0)}}function qe(n,c){if(n&1&&(q(0),x(1,Re,1,4,"span",2)(2,je,1,2,"svg",6),U()),n&2){let e=f(2);d(),a("ngIf",e.pcAccordion.expandIcon),d(),a("ngIf",!e.pcAccordion.expandIcon)}}function Ue(n,c){if(n&1&&x(0,$e,3,2,"ng-container",1)(1,qe,3,2,"ng-container",1),n&2){let e=f();a("ngIf",e.active()),d(),a("ngIf",!e.active())}}var Ge=`
${Ne}

/* For PrimeNG */
.p-accordionheader-toggle-icon.icon-start {
    order: -1;
}

.p-accordionheader:has(.p-accordionheader-toggle-icon.icon-start) {
    justify-content: flex-start;
    gap: dt('accordion.header.padding');
}

.p-accordionheader.p-ripple {
    overflow: hidden;
    position: relative;
}

.p-accordioncontent .p-motion {
    display: grid;
    grid-template-rows: 1fr;
}
`,Qe={root:"p-accordion p-component",panel:({instance:n})=>["p-accordionpanel",{"p-accordionpanel-active":n.active(),"p-disabled":n.disabled()}],header:"p-accordionheader",toggleicon:"p-accordionheader-toggle-icon",contentContainer:"p-accordioncontent",contentWrapper:"p-accordioncontent-wrapper",content:"p-accordioncontent-content"},b=(()=>{class n extends ve{name="accordion";style=Ge;classes=Qe;static \u0275fac=(()=>{let e;return function(t){return(e||(e=m(n)))(t||n)}})();static \u0275prov=J({token:n,factory:n.\u0275fac})}return n})();var Ie=new H("ACCORDION_PANEL_INSTANCE"),we=new H("ACCORDION_HEADER_INSTANCE"),Fe=new H("ACCORDION_CONTENT_INSTANCE"),He=new H("ACCORDION_INSTANCE"),L=(()=>{class n extends K{$pcAccordionPanel=r(Ie,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=r(l,{self:!0});componentName="AccordionPanel";onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("root"))}pcAccordion=r(D(()=>w));value=Q(void 0);disabled=v(!1,{transform:e=>$(e)});active=s(()=>this.pcAccordion.multiple()?this.valueEquals(this.pcAccordion.value(),this.value()):this.pcAccordion.value()===this.value());valueEquals(e,o){return Array.isArray(e)?e.includes(o):e===o}_componentStyle=r(b);static \u0275fac=(()=>{let e;return function(t){return(e||(e=m(n)))(t||n)}})();static \u0275cmp=u({type:n,selectors:[["p-accordion-panel"],["p-accordionpanel"]],hostVars:4,hostBindings:function(o,t){o&2&&(g("data-p-disabled",t.disabled())("data-p-active",t.active()),p(t.cx("panel")))},inputs:{value:[1,"value"],disabled:[1,"disabled"]},outputs:{value:"valueChange"},features:[O([b,{provide:Ie,useExisting:n},{provide:S,useExisting:n}]),y([l]),A],ngContentSelectors:R,decls:1,vars:0,template:function(o,t){o&1&&(P(),T(0))},dependencies:[k,C],encapsulation:2,changeDetection:0})}return n})(),z=(()=>{class n extends K{$pcAccordionHeader=r(we,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=r(l,{self:!0});componentName="AccordionHeader";onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("root"))}pcAccordion=r(D(()=>w));pcAccordionPanel=r(D(()=>L));id=s(()=>`${this.pcAccordion.id()}_accordionheader_${this.pcAccordionPanel.value()}`);active=s(()=>this.pcAccordionPanel.active());disabled=s(()=>this.pcAccordionPanel.disabled());ariaControls=s(()=>`${this.pcAccordion.id()}_accordioncontent_${this.pcAccordionPanel.value()}`);toggleicon;onClick(e){if(this.disabled())return;let o=this.active();this.changeActiveValue();let t=this.active(),i=this.pcAccordionPanel.value();!o&&t?this.pcAccordion.onOpen.emit({originalEvent:e,index:i}):o&&!t&&this.pcAccordion.onClose.emit({originalEvent:e,index:i})}onFocus(){!this.disabled()&&this.pcAccordion.selectOnFocus()&&this.changeActiveValue()}onKeydown(e){switch(e.code){case"ArrowDown":this.arrowDownKey(e);break;case"ArrowUp":this.arrowUpKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Enter":case"Space":case"NumpadEnter":this.onEnterKey(e);break;default:break}}_componentStyle=r(b);changeActiveValue(){this.pcAccordion.updateValue(this.pcAccordionPanel.value())}findPanel(e){return e?.closest('[data-pc-name="accordionpanel"]')}findHeader(e){return I(e,'[data-pc-name="accordionheader"]')}findNextPanel(e,o=!1){let t=o?e:e.nextElementSibling;return t?B(t,"data-p-disabled")?this.findNextPanel(t):this.findHeader(t):null}findPrevPanel(e,o=!1){let t=o?e:e.previousElementSibling;return t?B(t,"data-p-disabled")?this.findPrevPanel(t):this.findHeader(t):null}findFirstPanel(){return this.findNextPanel(this.pcAccordion.el.nativeElement.firstElementChild,!0)}findLastPanel(){return this.findPrevPanel(this.pcAccordion.el.nativeElement.lastElementChild,!0)}changeFocusedPanel(e,o){W(o)}arrowDownKey(e){let o=this.findNextPanel(this.findPanel(e.currentTarget));o?this.changeFocusedPanel(e,o):this.onHomeKey(e),e.preventDefault()}arrowUpKey(e){let o=this.findPrevPanel(this.findPanel(e.currentTarget));o?this.changeFocusedPanel(e,o):this.onEndKey(e),e.preventDefault()}onHomeKey(e){let o=this.findFirstPanel();this.changeFocusedPanel(e,o),e.preventDefault()}onEndKey(e){let o=this.findLastPanel();this.changeFocusedPanel(e,o),e.preventDefault()}onEnterKey(e){this.disabled()||this.changeActiveValue(),e.preventDefault()}get dataP(){return this.cn({active:this.active()})}static \u0275fac=(()=>{let e;return function(t){return(e||(e=m(n)))(t||n)}})();static \u0275cmp=u({type:n,selectors:[["p-accordion-header"],["p-accordionheader"]],contentQueries:function(o,t,i){if(o&1&&ce(i,Oe,5),o&2){let h;de(h=se())&&(t.toggleicon=h.first)}},hostVars:13,hostBindings:function(o,t){o&1&&G("click",function(h){return t.onClick(h)})("focus",function(){return t.onFocus()})("keydown",function(h){return t.onKeydown(h)}),o&2&&(g("id",t.id())("aria-expanded",t.active())("aria-controls",t.ariaControls())("aria-disabled",t.disabled())("role","button")("tabindex",t.disabled()?"-1":"0")("data-p-active",t.active())("data-p-disabled",t.disabled())("data-p",t.dataP),p(t.cx("header")),le("user-select","none"))},features:[O([b,{provide:we,useExisting:n},{provide:S,useExisting:n}]),y([be,l]),A],ngContentSelectors:R,decls:3,vars:1,consts:[[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngIf"],[3,"class","pBind",4,"ngIf"],["data-p-icon","chevron-up",3,"class","pBind",4,"ngIf"],[3,"pBind"],["data-p-icon","chevron-up",3,"pBind"],["data-p-icon","chevron-down",3,"pBind",4,"ngIf"],["data-p-icon","chevron-down",3,"pBind"]],template:function(o,t){o&1&&(P(),T(0),oe(1,Ke,1,4)(2,Ue,2,2)),o&2&&(d(),te(t.toggleicon?1:2))},dependencies:[k,he,me,Ae,Ee,C,l],encapsulation:2,changeDetection:0})}return n})(),Z=(()=>{class n extends K{$pcAccordionContent=r(Fe,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=r(l,{self:!0});componentName="AccordionContent";onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("root"))}pcAccordion=r(D(()=>w));pcAccordionPanel=r(D(()=>L));active=s(()=>this.pcAccordionPanel.active());ariaLabelledby=s(()=>`${this.pcAccordion.id()}_accordionheader_${this.pcAccordionPanel.value()}`);id=s(()=>`${this.pcAccordion.id()}_accordioncontent_${this.pcAccordionPanel.value()}`);_componentStyle=r(b);ptParams=s(()=>({context:this.active()}));computedMotionOptions=s(()=>F(F({},this.ptm("motion",this.ptParams())),this.pcAccordion.computedMotionOptions()));static \u0275fac=(()=>{let e;return function(t){return(e||(e=m(n)))(t||n)}})();static \u0275cmp=u({type:n,selectors:[["p-accordion-content"],["p-accordioncontent"]],hostVars:6,hostBindings:function(o,t){o&2&&(g("id",t.id())("role","region")("data-p-active",t.active())("aria-labelledby",t.ariaLabelledby()),p(t.cx("contentContainer")))},features:[O([b,{provide:Fe,useExisting:n},{provide:S,useExisting:n}]),y([l]),A],ngContentSelectors:R,decls:4,vars:10,consts:[["name","p-collapsible","hideStrategy","visibility",3,"visible","mountOnEnter","unmountOnLeave","options"],[3,"pBind"]],template:function(o,t){o&1&&(P(),E(0,"p-motion",0)(1,"div",1)(2,"div",1),T(3),N()()()),o&2&&(a("visible",t.active())("mountOnEnter",!1)("unmountOnLeave",!1)("options",t.computedMotionOptions()),d(),p(t.cx("contentWrapper")),a("pBind",t.ptm("contentWrapper",t.ptParams())),d(),p(t.cx("content")),a("pBind",t.ptm("content",t.ptParams())))},dependencies:[k,C,l,De,Ce],encapsulation:2,changeDetection:0})}return n})(),w=(()=>{class n extends K{componentName="Accordion";$pcAccordion=r(He,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=r(l,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("root"))}value=Q(void 0);multiple=v(!1,{transform:e=>$(e)});styleClass;expandIcon;collapseIcon;selectOnFocus=v(!1,{transform:e=>$(e)});transitionOptions="400ms cubic-bezier(0.86, 0, 0.07, 1)";motionOptions=v(void 0);computedMotionOptions=s(()=>F(F({},this.ptm("motion")),this.motionOptions()));onClose=new j;onOpen=new j;id=Y(ge("pn_id_"));_componentStyle=r(b);onKeydown(e){switch(e.code){case"ArrowDown":this.onTabArrowDownKey(e);break;case"ArrowUp":this.onTabArrowUpKey(e);break;case"Home":e.shiftKey||this.onTabHomeKey(e);break;case"End":e.shiftKey||this.onTabEndKey(e);break}}onTabArrowDownKey(e){let o=this.findNextHeaderAction(e.target.parentElement);o?this.changeFocusedTab(o):this.onTabHomeKey(e),e.preventDefault()}onTabArrowUpKey(e){let o=this.findPrevHeaderAction(e.target.parentElement);o?this.changeFocusedTab(o):this.onTabEndKey(e),e.preventDefault()}onTabHomeKey(e){let o=this.findFirstHeaderAction();this.changeFocusedTab(o),e.preventDefault()}changeFocusedTab(e){e&&W(e)}findNextHeaderAction(e,o=!1){let t=o?e:e.nextElementSibling,i=I(t,'[data-pc-section="accordionheader"]');return i?B(i,"data-p-disabled")?this.findNextHeaderAction(i.parentElement):I(i.parentElement,'[data-pc-section="accordionheader"]'):null}findPrevHeaderAction(e,o=!1){let t=o?e:e.previousElementSibling,i=I(t,'[data-pc-section="accordionheader"]');return i?B(i,"data-p-disabled")?this.findPrevHeaderAction(i.parentElement):I(i.parentElement,'[data-pc-section="accordionheader"]'):null}findFirstHeaderAction(){let e=this.el.nativeElement.firstElementChild;return this.findNextHeaderAction(e,!0)}findLastHeaderAction(){let e=this.el.nativeElement.lastElementChild;return this.findPrevHeaderAction(e,!0)}onTabEndKey(e){let o=this.findLastHeaderAction();this.changeFocusedTab(o),e.preventDefault()}getBlockableElement(){return this.el.nativeElement.children[0]}updateValue(e){let o=this.value();if(this.multiple()){let t=Array.isArray(o)?[...o]:[],i=t.indexOf(e);i!==-1?t.splice(i,1):t.push(e),this.value.set(t)}else o===e?this.value.set(void 0):this.value.set(e)}static \u0275fac=(()=>{let e;return function(t){return(e||(e=m(n)))(t||n)}})();static \u0275cmp=u({type:n,selectors:[["p-accordion"]],hostVars:2,hostBindings:function(o,t){o&1&&G("keydown",function(h){return t.onKeydown(h)}),o&2&&p(t.cn(t.cx("root"),t.styleClass))},inputs:{value:[1,"value"],multiple:[1,"multiple"],styleClass:"styleClass",expandIcon:"expandIcon",collapseIcon:"collapseIcon",selectOnFocus:[1,"selectOnFocus"],transitionOptions:"transitionOptions",motionOptions:[1,"motionOptions"]},outputs:{value:"valueChange",onClose:"onClose",onOpen:"onOpen"},features:[O([b,{provide:He,useExisting:n},{provide:S,useExisting:n}]),y([l]),A],ngContentSelectors:R,decls:1,vars:0,template:function(o,t){o&1&&(P(),T(0))},dependencies:[k,V,C],encapsulation:2,changeDetection:0})}return n})(),Me=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275mod=ne({type:n});static \u0275inj=X({imports:[w,V,L,z,Z,C,V,C]})}return n})();var ze=(n,c)=>c.question;function Ze(n,c){if(n&1&&(E(0,"p-accordion-panel",0)(1,"p-accordion-header"),pe(2),N(),E(3,"p-accordion-content"),_(4,"p",1),N()()),n&2){let e=c.$implicit,o=c.$index;a("value",o),d(2),ue(e.question),d(2),a("innerHTML",e.answer,ee)}}var Pe=class n{items=v.required();openFirst=v(!0);static \u0275fac=function(e){return new(e||n)};static \u0275cmp=u({type:n,selectors:[["app-faq-accordion"]],inputs:{items:[1,"items"],openFirst:[1,"openFirst"]},features:[y([_e])],decls:3,vars:1,consts:[[3,"value"],[3,"innerHTML"]],template:function(e,o){e&1&&(E(0,"p-accordion",0),ie(1,Ze,5,3,"p-accordion-panel",0,ze),N()),e&2&&(a("value",o.openFirst()?0:null),d(),ae(o.items()))},dependencies:[Me,w,L,z,Z],styles:["[_nghost-%COMP%]{display:block}p[_ngcontent-%COMP%]     a{color:var(--teal);text-decoration:underline}"],changeDetection:0})};export{Pe as a};
