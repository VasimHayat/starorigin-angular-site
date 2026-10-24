import{b as Y}from"./chunk-TSVUKQGG.js";import{d as L}from"./chunk-OL5BAMWQ.js";import{d as U,ja as H,la as X,ma as G,na as D}from"./chunk-2BTKQDYQ.js";import{a as O,b as R}from"./chunk-ACRIT4Y4.js";import{A as a,Ba as B,Da as y,Ea as q,Fa as z,H as S,L as u,M as I,O as p,Pa as $,Ra as A,Sa as b,Ta as M,W as l,aa as _,ba as P,bb as j,ca as c,da as V,ea as f,g as F,ia as x,ja as h,ka as v,kb as d,mb as o,sb as s,t as C,ta as m,ua as g,x as E,y as k,z as w}from"./chunk-645TR44L.js";var T=(()=>{class e extends G{modelValue=u(void 0);$filled=d(()=>U(this.modelValue()));writeModelValue(t){this.modelValue.set(t)}static \u0275fac=(()=>{let t;return function(r){return(t||(t=p(e)))(r||e)}})();static \u0275dir=c({type:e,features:[f]})}return e})();var J=`
    .p-inputtext {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('inputtext.color');
        background: dt('inputtext.background');
        padding-block: dt('inputtext.padding.y');
        padding-inline: dt('inputtext.padding.x');
        border: 1px solid dt('inputtext.border.color');
        transition:
            background dt('inputtext.transition.duration'),
            color dt('inputtext.transition.duration'),
            border-color dt('inputtext.transition.duration'),
            outline-color dt('inputtext.transition.duration'),
            box-shadow dt('inputtext.transition.duration');
        appearance: none;
        border-radius: dt('inputtext.border.radius');
        outline-color: transparent;
        box-shadow: dt('inputtext.shadow');
    }

    .p-inputtext:enabled:hover {
        border-color: dt('inputtext.hover.border.color');
    }

    .p-inputtext:enabled:focus {
        border-color: dt('inputtext.focus.border.color');
        box-shadow: dt('inputtext.focus.ring.shadow');
        outline: dt('inputtext.focus.ring.width') dt('inputtext.focus.ring.style') dt('inputtext.focus.ring.color');
        outline-offset: dt('inputtext.focus.ring.offset');
    }

    .p-inputtext.p-invalid {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.p-variant-filled {
        background: dt('inputtext.filled.background');
    }

    .p-inputtext.p-variant-filled:enabled:hover {
        background: dt('inputtext.filled.hover.background');
    }

    .p-inputtext.p-variant-filled:enabled:focus {
        background: dt('inputtext.filled.focus.background');
    }

    .p-inputtext:disabled {
        opacity: 1;
        background: dt('inputtext.disabled.background');
        color: dt('inputtext.disabled.color');
    }

    .p-inputtext::placeholder {
        color: dt('inputtext.placeholder.color');
    }

    .p-inputtext.p-invalid::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }

    .p-inputtext-sm {
        font-size: dt('inputtext.sm.font.size');
        padding-block: dt('inputtext.sm.padding.y');
        padding-inline: dt('inputtext.sm.padding.x');
    }

    .p-inputtext-lg {
        font-size: dt('inputtext.lg.font.size');
        padding-block: dt('inputtext.lg.padding.y');
        padding-inline: dt('inputtext.lg.padding.x');
    }

    .p-inputtext-fluid {
        width: 100%;
    }
`;var Z=`
    ${J}

    /* For PrimeNG */
   .p-inputtext.ng-invalid.ng-dirty {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.ng-invalid.ng-dirty::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }
`,ee={root:({instance:e})=>["p-inputtext p-component",{"p-filled":e.$filled(),"p-inputtext-sm":e.pSize==="small","p-inputtext-lg":e.pSize==="large","p-invalid":e.invalid(),"p-variant-filled":e.$variant()==="filled","p-inputtext-fluid":e.hasFluid}]},K=(()=>{class e extends H{name="inputtext";style=Z;classes=ee;static \u0275fac=(()=>{let t;return function(r){return(t||(t=p(e)))(r||e)}})();static \u0275prov=E({token:e,factory:e.\u0275fac})}return e})();var Q=new w("INPUTTEXT_INSTANCE"),Ce=(()=>{class e extends T{componentName="InputText";hostName="";ptInputText=o();pInputTextPT=o();pInputTextUnstyled=o();bindDirectiveInstance=a(D,{self:!0});$pcInputText=a(Q,{optional:!0,skipSelf:!0})??void 0;ngControl=a(L,{optional:!0,self:!0});pcFluid=a(Y,{optional:!0,host:!0,skipSelf:!0});pSize;variant=o();fluid=o(void 0,{transform:s});invalid=o(void 0,{transform:s});$variant=d(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());_componentStyle=a(K);constructor(){super(),I(()=>{let t=this.ptInputText()||this.pInputTextPT();t&&this.directivePT.set(t)}),I(()=>{this.pInputTextUnstyled()&&this.directiveUnstyled.set(this.pInputTextUnstyled())})}onAfterViewInit(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value),this.cd.detectChanges()}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("root"))}onDoCheck(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}onInput(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}get hasFluid(){return this.fluid()??!!this.pcFluid}get dataP(){return this.cn({invalid:this.invalid(),fluid:this.hasFluid,filled:this.$variant()==="filled",[this.pSize]:this.pSize})}static \u0275fac=function(i){return new(i||e)};static \u0275dir=c({type:e,selectors:[["","pInputText",""]],hostVars:3,hostBindings:function(i,r){i&1&&B("input",function(){return r.onInput()}),i&2&&(x("data-p",r.dataP),A(r.cx("root")))},inputs:{hostName:"hostName",ptInputText:[1,"ptInputText"],pInputTextPT:[1,"pInputTextPT"],pInputTextUnstyled:[1,"pInputTextUnstyled"],pSize:"pSize",variant:[1,"variant"],fluid:[1,"fluid"],invalid:[1,"invalid"]},features:[j([K,{provide:Q,useExisting:e},{provide:X,useExisting:e}]),V([D]),f]})}return e})(),Ee=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=P({type:e});static \u0275inj=k({})}return e})();var te=["*"];function ne(e,n){e&1&&(m(0,"span",3),b(1," *"),g())}function ie(e,n){if(e&1&&(m(0,"label"),b(1),h(2,ne,2,0,"span",3),g()),e&2){let t=y();x("for",t.for()||null),l(),M(t.label()),l(),v(t.required()?2:-1)}}function oe(e,n){if(e&1&&(m(0,"span",1),b(1),g()),e&2){let t=y();l(),M(t.hint())}}function re(e,n){if(e&1&&(m(0,"span",2),b(1),g()),e&2){let t=y();l(),M(t.message())}}var W=class e{label=o();for=o();hint=o();required=o(!1,{transform:n=>n===""||n});control=o(null);messages=o({});tick=u(0);constructor(){R(this.control).pipe(C(n=>n?n.events:F),O(a(S))).subscribe(()=>this.tick.update(n=>n+1))}showError=d(()=>{this.tick();let n=this.control();return!!n&&n.invalid&&(n.touched||n.dirty)});message=d(()=>{this.tick();let n=this.control()?.errors??{},t=Object.keys(n)[0],i=this.messages();if(t&&i[t])return i[t];switch(t){case"required":return"This field is required.";case"requiredTrue":return"Please confirm to continue.";case"email":return"Enter a valid email address.";case"pattern":return"Please check the format.";case"minlength":return`Please enter at least ${n.minlength.requiredLength} characters.`;case"maxFileSize":return"File is over 5 MB \u2014 please upload a smaller file.";default:return"Please check this field."}});static \u0275fac=function(t){return new(t||e)};static \u0275cmp=_({type:e,selectors:[["app-form-field"]],inputs:{label:[1,"label"],for:[1,"for"],hint:[1,"hint"],required:[1,"required"],control:[1,"control"],messages:[1,"messages"]},ngContentSelectors:te,decls:5,vars:5,consts:[[1,"field"],[1,"hint"],["role","alert",1,"err"],[1,"req"]],template:function(t,i){t&1&&(q(),m(0,"div",0),h(1,ie,3,3,"label"),z(2),h(3,oe,2,1,"span",1),h(4,re,2,1,"span",2),g()),t&2&&($("invalid",i.showError()),l(),v(i.label()?1:-1),l(2),v(i.hint()&&!i.showError()?3:-1),l(),v(i.showError()?4:-1))},styles:["[_nghost-%COMP%]{display:block}.field.invalid[_ngcontent-%COMP%]   .err[_ngcontent-%COMP%]{display:block}"],changeDetection:0})};var je=(()=>{class e extends T{required=o(void 0,{transform:s});invalid=o(void 0,{transform:s});disabled=o(void 0,{transform:s});name=o();_disabled=u(!1);$disabled=d(()=>this.disabled()||this._disabled());onModelChange=()=>{};onModelTouched=()=>{};writeDisabledState(t){this._disabled.set(t)}writeControlValue(t,i){}writeValue(t){this.writeControlValue(t,this.writeModelValue.bind(this))}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.writeDisabledState(t),this.cd.markForCheck()}static \u0275fac=(()=>{let t;return function(r){return(t||(t=p(e)))(r||e)}})();static \u0275dir=c({type:e,inputs:{required:[1,"required"],invalid:[1,"invalid"],disabled:[1,"disabled"],name:[1,"name"]},features:[f]})}return e})();export{T as a,je as b,Ce as c,Ee as d,W as e};
