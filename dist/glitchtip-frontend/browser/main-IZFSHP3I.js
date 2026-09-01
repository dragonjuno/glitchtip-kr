import{$ as KD,$t as Ye,An as dg,Bn as fg,Bt as Vl,Cn as cT,D as Fg,Di as zi$1,E as Fc,Ei as zg,Er as ng,Fr as pC,Gr as sV,H as Hy,Ht as Vy,Ir as pV,It as Ue,Jn as hT,Jt as Xe,L as Hg,Ln as fT,Lr as pe,M as Ge,Mn as eb,Mr as oe,N as Gg,Nn as ec,Nt as TC,O as Ft,Ot as Qr,Pt as Tt,Qr as tm,Rt as Ul,Tr as nb,Tt as Q,U as II,Un as gT,V as Hw,X as Js,Xt as Xy,Yr as tb,Zn as hd,Zr as ti$1,_t as Og,ar as iw,at as Lg,b as Dn,bn as b,c as A,ci as vC,cr as jd,d as Ae,ei as to$1,f as Bg,fn as _r,fr as ke,gt as Oe,h as Br,hi as wn,hn as aV,in as ZE,k as Fv,kn as db,li as vT,n as $T,o as $p,oi as ug,qn as hC,qt as XD,ri as uT,rn as Z,rt as Ky,s as $w,ti as tv,tt as Ks,un as _,ut as ME,vi as yC,vt as Oi$1,wi as z,wt as Py,x as ET,xt as Pg,yi as yT,yt as Ot,zt as Vd}from"./chunk-CydAPAPE.js";import{E as ai$1,L as ln,P as it$1,W as qo,f as Jo,m as Ko,n as Ao$1,q as yc}from"./chunk-DzW0_8HQ.js";import{B as wt,H as yt,I as ss,N as pi$1,O as h,R as ts,c as Ee,d as Kr,p as Ot$1,v as Tt$1}from"./chunk-C5jr27J8.js";import{n as u,t as f}from"./chunk-DdTvXu9U.js";import{f as st,l as ne,m as vi$1,r as Mi,t as Ft$1}from"./chunk-DJPhQOTg.js";import{A as oi$1,D as ln$1,g as Wt,j as pn,r as J,y as ai$2}from"./chunk-D7YX0sdr.js";import"./chunk-DsCjHOfh.js";import{L as us,_ as Un$1,v as We,w as ds}from"./chunk-C-sOqvSq.js";import{a as at$1,c as ti$2,n as Jt,o as mt,r as X,s as st$1,t as $t}from"./chunk-LTzjFHGe.js";import{i as Lt,n as G,r as I,t as Bt}from"./chunk-BNwJMhUx.js";import{o as ee}from"./chunk-t2g13iLz.js";import{t as R}from"./chunk-CEbMHX7a.js";import"./chunk-3SgcQIWk.js";import{n as Q$1,t as B}from"./chunk-DhZqcpmO.js";import"./chunk-BRL1ZM02.js";import{n as mt$1,t as Yt}from"./chunk-ACSDjvRk.js";import{n as wt$1,r as yt$1,t as K}from"./chunk-BpoZbjmB.js";import"./chunk-D2URFsIa.js";import{t as $}from"./chunk-Bha5Bx5i.js";import{t as p}from"./chunk-B6NRyyqb.js";import{a as O,c as ia,d as oa,f as re,h as xn,i as H,l as kt,m as wr,n as Ci$1,o as Si$1,p as ta,r as G$1,t as Ar,u as na}from"./chunk-DoYiX3zD.js";import{t as w}from"./chunk-DZWLEUZ4.js";import{a as p$1,i as lt,n as bt,o as pt,r as kt$1,s as yt$2,t as Qt}from"./chunk-lacMDu-q.js";import{t as I$1}from"./chunk-CVdVtrcY.js";import{a as b$1,r as T}from"./chunk-Dcc5kKE4.js";var $n;function zn(t){$n??=new TextEncoder;let o=$n.encode(t),e=new DataView(o.buffer,o.byteOffset,o.byteLength),n=Bn(e,o.length,0),i=Bn(e,o.length,102072);return n==0&&(i==0||i==1)&&(n=n^319790063,i=i^-1801410264),BigInt.asUintN(32,BigInt(n))<<BigInt(32)|BigInt.asUintN(32,BigInt(i))}function Si(t,o=``){let e=zn(t);return o&&(e=BigInt.asUintN(64,e<<BigInt(1))|e>>BigInt(63)&BigInt(1),e+=zn(o)),BigInt.asUintN(63,e).toString()}function Bn(t,o,e){let n=2654435769,i=2654435769,r=0,m=o-12;for(;r<=m;r+=12){n+=t.getUint32(r,!0),i+=t.getUint32(r+4,!0),e+=t.getUint32(r+8,!0);let v=Vn(n,i,e);n=v[0],i=v[1],e=v[2]}let d=o-r;return e+=o,d>=4?(n+=t.getUint32(r,!0),r+=4,d>=8?(i+=t.getUint32(r,!0),r+=4,d>=9&&(e+=t.getUint8(r++)<<8),d>=10&&(e+=t.getUint8(r++)<<16),d===11&&(e+=t.getUint8(r++)<<24)):(d>=5&&(i+=t.getUint8(r++)),d>=6&&(i+=t.getUint8(r++)<<8),d===7&&(i+=t.getUint8(r++)<<16))):(d>=1&&(n+=t.getUint8(r++)),d>=2&&(n+=t.getUint8(r++)<<8),d===3&&(n+=t.getUint8(r++)<<16)),Vn(n,i,e)[2]}function Vn(t,o,e){return t-=o,t-=e,t^=e>>>13,o-=e,o-=t,o^=t<<8,e-=t,e-=o,e^=o>>>13,t-=o,t-=e,t^=e>>>12,o-=e,o-=t,o^=t<<16,e-=t,e-=o,e^=o>>>5,t-=o,t-=e,t^=e>>>3,o-=e,o-=t,o^=t<<10,e-=t,e-=o,e^=o>>>15,[t,o,e]}function Gn(t,o,e,n,i=[]){let r={},m={},d={},v=bi(t[0],t.raw[0]),I=[v.text],se=[],Q=v.text;for(let P=1;P<t.length;P++){let{messagePart:st,placeholderName:le=wi(P),associatedMessageId:lt}=Ni(t[P],t.raw[P]);Q+=`{$${le}}${st}`,o!==void 0&&(r[le]=o[P-1],m[le]=i[P-1]),se.push(le),lt!==void 0&&(d[le]=lt),I.push(st)}let N=v.customId||Si(Q,v.meaning||``);return{id:N,legacyIds:v.legacyIds?v.legacyIds.filter(P=>P!==N):[],substitutions:r,substitutionLocations:m,text:Q,customId:v.customId,meaning:v.meaning||``,description:v.description||``,messageParts:I,messagePartLocations:n,placeholderNames:se,associatedMessageIds:d,location:e}}function bi(t,o){let{text:e,block:n}=Un(t,o);if(n===void 0)return{text:e};{let[i,...r]=n.split(`␟`),[m,d]=i.split(`@@`,2),[v,I]=m.split(`|`,2);return I===void 0&&(I=v,v=void 0),I===``&&(I=void 0),{text:e,meaning:v,description:I,customId:d,legacyIds:r}}}function Ni(t,o){let{text:e,block:n}=Un(t,o);if(n===void 0)return{messagePart:e};{let[i,r]=n.split(`@@`);return{messagePart:e,placeholderName:i,associatedMessageId:r}}}function Un(t,o){if(o.charAt(0)!==`:`)return{text:t};{let e=Ai(t,o);return{block:t.substring(1,e),text:t.substring(e+1)}}}function wi(t){return t===1?`PH`:`PH_${t-1}`}function Ai(t,o){for(let e=1,n=1;e<t.length;e++,n++)if(o[n]===`\\`)n++;else if(t[e]===`:`)return e;throw new Error(`Unterminated $localize metadata block in "${o}".`)}var Je=class extends Error{parsedMessage;type=`MissingTranslationError`;constructor(o){super(`No translation found for ${jn(o)}.`),this.parsedMessage=o}};function yi(t,o,e){let n=Gn(o,e),i=t[n.id];if(n.legacyIds!==void 0)for(let r=0;r<n.legacyIds.length&&i===void 0;r++)i=t[n.legacyIds[r]];if(i===void 0)throw new Je(n);return[i.messageParts,i.placeholderNames.map(r=>{if(Object.hasOwn(n.substitutions,r))return n.substitutions[r];throw new Error(`There is a placeholder name mismatch with the translation provided for the message ${jn(n)}.
The translation contains a placeholder with name ${r}, which does not exist in the message.`)})]}function Ii(t){let o=t.split(/{\$([^}]*)}/),e=[o[0]],n=[];for(let r=1;r<o.length-1;r+=2)n.push(o[r]),e.push(`${o[r+1]}`);return{text:t,messageParts:Oi(e,e.map(r=>r.charAt(0)===`:`?`\\`+r:r)),placeholderNames:n}}function Oi(t,o){return Object.defineProperty(t,"raw",{value:o}),t}function jn(t){let o=t.meaning&&` - "${t.meaning}"`,e=t.legacyIds&&t.legacyIds.length>0?` [${t.legacyIds.map(n=>`"${n}"`).join(`, `)}]`:``;return`"${t.id}"${e} ("${t.text}"${o})`}function Xn(t){$localize.translate||($localize.translate=Ei),$localize.TRANSLATIONS||($localize.TRANSLATIONS=Object.create(null)),Object.keys(t).forEach(o=>{$localize.TRANSLATIONS[o]=Ii(t[o])})}function Ei(t,o){try{return yi($localize.TRANSLATIONS,t,o)}catch(e){return console.warn(e.message),[t,o]}}var Wn=(()=>{class t{constructor(){this.settings=_(Mi),this.route=_(G$1),this.router=_(H),this.authService=_($),this.userService=_(I$1),this.matIconRegistry=_(K),ec(()=>yc(this.userService.user()?.options.preferredTheme||localStorage.getItem(`theme`)))}ngOnInit(){this.matIconRegistry.setDefaultFontSetClass(`material-symbols-filled`),this.router.events.subscribe(n=>{if(n instanceof O){let i=this.route.snapshot.firstChild?.params,r=i?i[`org-slug`]:void 0;this.settings.triggerPlausibleReport(r)}}),matchMedia(`(prefers-color-scheme: dark)`).addEventListener(`change`,()=>yc(this.userService.user()?.options.preferredTheme)),this.authService.checkServerAuthStatus()}static{this.ɵfac=function(n){return new(n||t)}}static{this.ɵcmp=Hw({type:t,selectors:[[`gt-root`]],decls:1,vars:0,template:function(n,i){n&1&&fg(0,`router-outlet`)},dependencies:[wr],encapsulation:2,changeDetection:1})}}return t})();var xi={navOpen:!0,mobileNav:null};var Kn=(()=>{class t{constructor(){this.router=_(H),this.state=Ue(xi),this.navOpen=Tt(()=>this.state().navOpen),this.mobileNav=Tt(()=>this.state().mobileNav);let e=768;window.innerWidth<e?this.mobileNavSettings():this.desktopNavSettings(),this.router.events.subscribe(n=>{window.innerWidth<e&&this.setCloseNav()}),Ks(window,`resize`).pipe(Vy(100),tv(n=>{window.innerWidth<e?this.mobileNavSettings():this.desktopNavSettings()})).subscribe()}mobileNavSettings(){this.setMobileNav(!0),this.setCloseNav()}desktopNavSettings(){this.setMobileNav(!1),this.setOpenNav()}getToggleNav(){this.setToggleNav()}getClosedNav(){this.setCloseNav()}setMobileNav(e){this.state.update(n=>Q(z({},n),{mobileNav:e}))}setCloseNav(){this.state.update(e=>Q(z({},e),{navOpen:!1}))}setOpenNav(){this.state.update(e=>Q(z({},e),{navOpen:!0}))}setToggleNav(){this.state.update(e=>Q(z({},e),{navOpen:!e.navOpen}))}static{this.ɵfac=function(n){return new(n||t)}}static{this.ɵprov=oe({token:t,factory:t.ɵfac,providedIn:`root`})}}return t})();function Ri(t,o){if(t&1&&(zi$1(0,`div`,2)(1,`span`),$T(2),Vl()()),t&2){let e=fT();ZE(2),tm(e.activeOrg.name)}}var Qn=(()=>{class t{constructor(){this.buttonClicked=sV()}static{this.ɵfac=function(n){return new(n||t)}}static{this.ɵcmp=Hw({type:t,selectors:[[`gt-mobile-nav-toolbar`]],inputs:{activeOrg:`activeOrg`},outputs:{buttonClicked:`buttonClicked`},decls:5,vars:1,consts:[[`color`,`primary`,3,`click`],[`matIconButton`,``,1,`sidenav-toggle`],[1,`active-org`]],template:function(n,i){n&1&&(zi$1(0,`mat-toolbar`,0),Fg(`click`,function(){return i.buttonClicked.emit()}),zi$1(1,`button`,1)(2,`mat-icon`),$T(3,`menu`),Vl()(),pC(4,Ri,3,1,`div`,2),Vl()),n&2&&(ZE(4),hC(i.activeOrg?4:-1))},dependencies:[Q$1,B,ai$2,ln$1,yt$1,wt$1],styles:[`mat-toolbar[_ngcontent-%COMP%]{border-bottom:1px solid var(--%NS%mat-sys-outline-variant);height:44px;display:none;cursor:pointer}@media(max-width:767px){mat-toolbar[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center}}.active-org[_ngcontent-%COMP%]{max-width:100%;overflow:hidden;text-overflow:ellipsis;margin-left:5px}
/*# sourceMappingURL=mobile-nav-toolbar.component-7ZQSYSII.css.map */`],changeDetection:1})}}return t})();var Fi=[`supportMenu`];function Li(t,o){t&1&&(zi$1(0,`a`,9)(1,`mat-icon`),$T(2,`favorite`),Vl(),zi$1(3,`span`),cT(4,3),Vl()())}function $i(t,o){if(t&1&&(fg(0,`mat-divider`),zi$1(1,`a`,10)(2,`mat-icon`),$T(3,`chat`),Vl(),zi$1(4,`span`),cT(5,4),Vl()()),t&2){let e=fT();ZE(),dg(`href`,e.supportUrl()||e.fallbackSupportUrl,$p)}}function zi(t,o){t&1&&(fg(0,`mat-divider`),zi$1(1,`a`,11)(2,`mat-icon`),$T(3,`support`),Vl(),zi$1(4,`span`),cT(5,5),Vl()())}var qn=(()=>{class t{constructor(){this.settings=_(Mi),this.paidForGlitchTip=this.settings.paidForGlitchTip,this.billingEnabled=this.settings.billingEnabled,this.supportUrl=Ue(null),this.fallbackSupportUrl=`https://glitchtip.com/support`}async loadSupportLink(){if(this.supportUrl())return;let{data:e}=await ai$1.GET(`/api/0/instance-license/support-link/`);e?.url&&this.supportUrl.set(e.url)}static{this.ɵfac=function(n){return new(n||t)}}static{this.ɵcmp=Hw({type:t,selectors:[[`gt-support-menu`]],viewQuery:function(n,i){if(n&1&&Bg(Fi,5),n&2){let r;yT(r=vT())&&(i.menu=r.first)}},decls:15,vars:2,consts:()=>{let e;e=$localize`Documentation`;let n;n=$localize`Report a bug`;let i;i=$localize`Sponsor on Liberapay`;let r;r=$localize`Open Support Chat`;let m;return m=$localize`Get Priority Support`,[[`supportMenu`,`matMenu`],e,n,i,r,m,[`xPosition`,`after`,1,`nav-menu`,`support-menu-panel`],[`mat-menu-item`,``,`href`,`https://glitchtip.com/documentation`,`target`,`_blank`,`rel`,`noopener`],[`mat-menu-item`,``,`href`,`https://gitlab.com/glitchtip/glitchtip/-/issues`,`target`,`_blank`,`rel`,`noopener`],[`mat-menu-item`,``,`href`,`https://liberapay.com/GlitchTip/donate`,`target`,`_blank`,`rel`,`noopener`],[`mat-menu-item`,``,`target`,`_blank`,`rel`,`noopener`,3,`href`],[`mat-menu-item`,``,`href`,`https://glitchtip.com/pricing?plan=self-hosted`,`target`,`_blank`,`rel`,`noopener`]]},template:function(n,i){n&1&&(zi$1(0,`mat-menu`,6,0)(2,`a`,7)(3,`mat-icon`),$T(4,`developer_guide`),Vl(),zi$1(5,`span`),cT(6,1),Vl()(),zi$1(7,`a`,8)(8,`mat-icon`),$T(9,`code`),Vl(),zi$1(10,`span`),cT(11,2),Vl()(),pC(12,Li,5,0,`a`,9),pC(13,$i,6,1)(14,zi,6,0),Vl()),n&2&&(ZE(12),hC(i.paidForGlitchTip()===!1&&i.billingEnabled()===!1?12:-1),ZE(),hC(i.paidForGlitchTip()===!0&&i.billingEnabled()===!1?13:i.paidForGlitchTip()===!1&&i.billingEnabled()===!1?14:-1))},dependencies:[f,u,yt$1,wt$1,Lt,I,G],encapsulation:2})}}return t})();var Be=[`*`];var Vi=[`content`];var Yn=[[[`mat-drawer`],[`mat-sidenav`]],[[`mat-drawer-content`],[`mat-sidenav-content`]],`*`];var Jn=[`mat-drawer, mat-sidenav`,`mat-drawer-content, mat-sidenav-content`,`*`];function Gi(t,o){if(t&1){let e=TC();zi$1(0,`div`,1),Fg(`click`,function(){jd(e);return Vd(fT()._onBackdropClicked())}),Vl()}if(t&2)zg(`mat-drawer-shown`,fT()._isShowingBackdrop())}function Ui(t,o){t&1&&(zi$1(0,`mat-drawer-content`),gT(1,2),Vl())}function ji(t,o){if(t&1){let e=TC();zi$1(0,`div`,1),Fg(`click`,function(){jd(e);return Vd(fT()._onBackdropClicked())}),Vl()}if(t&2)zg(`mat-drawer-shown`,fT()._isShowingBackdrop())}function Xi(t,o){t&1&&(zi$1(0,`mat-sidenav-content`),gT(1,2),Vl())}var Wi=`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--%NS%mat-sidenav-content-text-color, var(--%NS%mat-sys-on-background));
  background-color: var(--%NS%mat-sidenav-content-background-color, var(--%NS%mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--%NS%mat-sidenav-scrim-color, color-mix(in srgb, var(--%NS%mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--%NS%mat-sidenav-container-text-color, var(--%NS%mat-sys-on-surface-variant));
  box-shadow: var(--%NS%mat-sidenav-container-elevation-shadow, none);
  background-color: var(--%NS%mat-sidenav-container-background-color, var(--%NS%mat-sys-surface));
  border-top-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  width: var(--%NS%mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`;var Ki=new A(`MAT_DRAWER_DEFAULT_AUTOSIZE`,{providedIn:`root`,factory:()=>!1});var nt=new A(`MAT_DRAWER_CONTAINER`);var fe=(()=>{class t extends pn{_platform=_(h);_changeDetectorRef=_(pV);_element=_(Qr);_ngZone=_(ke);_isInert=!1;_container=_(tt);ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>this._changeDetectorRef.markForCheck())}_drawerToggled(e){e.opened?this._ngZone.runOutsideAngular(()=>{e._animationEnd.pipe(Hy(50),wn(1)).subscribe(()=>this._updateInert())}):this._updateInert()}_drawerModeChanged(){this._updateInert()}_updateInert(){let e=this._container._isShowingBackdrop();if(e!==this._isInert){let n=this._element.nativeElement;this._isInert=e,e?n.setAttribute(`inert`,`true`):n.removeAttribute(`inert`)}}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:e,end:n}=this._container;return e!=null&&e.mode!==`over`&&e.opened||n!=null&&n.mode!==`over`&&n.opened}static ɵfac=(()=>{let e;return function(i){return(e||(e=II(t)))(i||t)}})();static ɵcmp=Hw({type:t,selectors:[[`mat-drawer-content`]],hostAttrs:[1,`mat-drawer-content`],hostVars:6,hostBindings:function(n,i){n&2&&(Gg(`margin-left`,i._container._contentMargins.left,`px`)(`margin-right`,i._container._contentMargins.right,`px`),zg(`mat-drawer-content-hidden`,i._shouldBeHidden()))},features:[eb([{provide:pn,useExisting:t}]),ng],ngContentSelectors:Be,decls:1,vars:0,template:function(n,i){n&1&&(hT(),gT(0))},encapsulation:2})}return t})();var et=(()=>{class t{_elementRef=_(Qr);_focusTrapFactory=_(wt);_focusMonitor=_(yt);_platform=_(h);_ngZone=_(ke);_renderer=_(Fc);_interactivityChecker=_(Tt$1);_doc=_(_r);_container=_(nt,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(e){e=e===`end`?`end`:`start`,e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit())}_position=`start`;get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next(),this._getContent()?._drawerModeChanged()}_mode=`over`;get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=ss(e)}_disableClose=!1;get autoFocus(){return this._autoFocus??(this.mode===`side`?`dialog`:`first-tabbable`)}set autoFocus(e){(e===`true`||e===`false`||e==null)&&(e=ss(e)),this._autoFocus=e}_autoFocus;get opened(){return this._opened()}set opened(e){this.toggle(ss(e))}_opened=Ue(!1);_openedVia=null;_animationStarted=new Z;_animationEnd=new Z;openedChange=new Ye(!0);_openedStream=this.openedChange.pipe(Dn(e=>e),Ae(()=>{}));openedStart=this._animationStarted.pipe(Dn(()=>this.opened),Js(void 0));_closedStream=this.openedChange.pipe(Dn(e=>!e),Ae(()=>{}));closedStart=this._animationStarted.pipe(Dn(()=>!this.opened),Js(void 0));_destroyed=new Z;onPositionChanged=new Ye;_content;_modeChanged=new Z;_injector=_(pe);_changeDetectorRef=_(pV);constructor(){this.openedChange.pipe(Xy(this._destroyed)).subscribe(e=>{e?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||`program`)}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let e=this._renderer,n=this._elementRef.nativeElement;return[e.listen(n,`keydown`,i=>{i.keyCode===27&&!this.disableClose&&!Ot$1(i)&&this._ngZone.run(()=>{this.close(),i.stopPropagation(),i.preventDefault()})}),e.listen(n,`transitionend`,this._handleTransitionEvent),e.listen(n,`transitioncancel`,this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_focusByCssSelector(e,n){let i=this._elementRef.nativeElement.querySelector(e);i&&(this._interactivityChecker.isFocusable(i)||(i.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let r=()=>{m(),d(),i.removeAttribute(`tabindex`)},m=this._renderer.listen(i,`blur`,r),d=this._renderer.listen(i,`mousedown`,r)})),i.focus(n))}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case`dialog`:return;case!0:case`first-tabbable`:ME(()=>{!this._focusTrap.focusInitialElement()&&typeof e.focus==`function`&&e.focus()},{injector:this._injector});break;case`first-heading`:this._focusByCssSelector(`h1, h2, h3, h4, h5, h6, [role="heading"]`);break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(e){this.autoFocus!==`dialog`&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let e=this._doc.activeElement;return!!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=!0,this._position===`end`&&this._updatePositionInParent(`end`),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(e){return this.toggle(!0,e)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,`mouse`)}toggle(e=!this.opened,n){e&&n&&(this._openedVia=n);let i=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||`program`);return e||(this._openedVia=null),i}_setOpen(e,n,i){return e===this.opened?Promise.resolve(e?`open`:`close`):(this._opened.set(e),this._getContent()?._drawerToggled(this),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle(`mat-drawer-opened`,e),!e&&n&&this._restoreFocus(i),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(r=>{this.openedChange.pipe(wn(1)).subscribe(m=>r(m?`open`:`close`))}))}_getContent(){return this._container?._content||this._container?._userContent}_setIsAnimating(e){this._elementRef.nativeElement.classList.toggle(`mat-drawer-animating`,e)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let n=this._elementRef.nativeElement,i=n.parentNode;e===`end`?(this._anchor||(this._anchor=this._doc.createComment(`mat-drawer-anchor`),i.insertBefore(this._anchor,n)),i.appendChild(n)):this._anchor&&this._anchor.parentNode.insertBefore(n,this._anchor)}_handleTransitionEvent=e=>{let n=this._elementRef.nativeElement;e.target===n&&this._ngZone.run(()=>{e.type===`transitionend`&&this._setIsAnimating(!1),this._animationEnd.next(e)})};static ɵfac=function(n){return new(n||t)};static ɵcmp=Hw({type:t,selectors:[[`mat-drawer`]],viewQuery:function(n,i){if(n&1&&Bg(Vi,5),n&2){let r;yT(r=vT())&&(i._content=r.first)}},hostAttrs:[1,`mat-drawer`],hostVars:12,hostBindings:function(n,i){n&2&&(ug(`align`,null)(`tabIndex`,i.mode!==`side`?`-1`:null),Gg(`visibility`,!i._container&&!i.opened?`hidden`:null),zg(`mat-drawer-end`,i.position===`end`)(`mat-drawer-over`,i.mode===`over`)(`mat-drawer-push`,i.mode===`push`)(`mat-drawer-side`,i.mode===`side`))},inputs:{position:`position`,mode:`mode`,disableClose:`disableClose`,autoFocus:`autoFocus`,opened:`opened`},outputs:{openedChange:`openedChange`,_openedStream:`opened`,openedStart:`openedStart`,_closedStream:`closed`,closedStart:`closedStart`,onPositionChanged:`positionChanged`},exportAs:[`matDrawer`],ngContentSelectors:Be,decls:3,vars:0,consts:[[`content`,``],[`cdkScrollable`,``,1,`mat-drawer-inner-container`]],template:function(n,i){n&1&&(hT(),zi$1(0,`div`,1,0),gT(2),Vl())},dependencies:[pn],encapsulation:2})}return t})();var tt=(()=>{class t{_dir=_(pi$1,{optional:!0});_element=_(Qr);_ngZone=_(ke);_changeDetectorRef=_(pV);_animationDisabled=ts();_transitionsEnabled=!1;_allDrawers;_drawers=new Oi$1;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=ss(e)}_autosize=_(Ki);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:ss(e)}_backdropOverride=null;backdropClick=new Ye;_start=null;_end=null;_left=null;_right=null;_destroyed=new Z;_doCheckSubject=new Z;_contentMargins={left:null,right:null};_contentMarginChanges=new Z;get scrollable(){return this._userContent||this._content}_injector=_(pe);constructor(){let e=_(h),n=_(J);this._dir?.change.pipe(Xy(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),n.change().pipe(Xy(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&e.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add(`mat-drawer-transition`),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(Ky(this._allDrawers),Xy(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(n=>!n._container||n._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(Ky(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(Vy(10),Xy(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(e=>e.open())}close(){this._drawers.forEach(e=>e.close())}updateContentMargins(){let e=0,n=0;if(this._left&&this._left.opened){if(this._left.mode==`side`)e+=this._left._getWidth();else if(this._left.mode==`push`){let i=this._left._getWidth();e+=i,n-=i}}if(this._right&&this._right.opened){if(this._right.mode==`side`)n+=this._right._getWidth();else if(this._right.mode==`push`){let i=this._right._getWidth();n+=i,e-=i}}e=e||null,n=n||null,(e!==this._contentMargins.left||n!==this._contentMargins.right)&&(this._contentMargins={left:e,right:n},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(e){e._animationStarted.pipe(Xy(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),e.mode!==`side`&&e.openedChange.pipe(Xy(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened))}_watchDrawerPosition(e){e.onPositionChanged.pipe(Xy(this._drawers.changes)).subscribe(()=>{ME({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(e){e._modeChanged.pipe(Xy(Py(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(e){let n=this._element.nativeElement.classList,i=`mat-drawer-container-has-open`;e?n.add(i):n.remove(i)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position==`end`?(this._end,this._end=e):(this._start,this._start=e)}),this._right=this._left=null,this._dir&&this._dir.value===`rtl`?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!=`over`||this._isDrawerOpen(this._end)&&this._end.mode!=`over`}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!==`side`:this._backdropOverride}static ɵfac=function(n){return new(n||t)};static ɵcmp=Hw({type:t,selectors:[[`mat-drawer-container`]],contentQueries:function(n,i,r){if(n&1&&Hg(r,fe,5)(r,et,5),n&2){let m;yT(m=vT())&&(i._content=m.first),yT(m=vT())&&(i._allDrawers=m)}},viewQuery:function(n,i){if(n&1&&Bg(fe,5),n&2){let r;yT(r=vT())&&(i._userContent=r.first)}},hostAttrs:[1,`mat-drawer-container`],hostVars:2,hostBindings:function(n,i){n&2&&zg(`mat-drawer-container-explicit-backdrop`,i._backdropOverride)},inputs:{autosize:`autosize`,hasBackdrop:`hasBackdrop`},outputs:{backdropClick:`backdropClick`},exportAs:[`matDrawerContainer`],features:[eb([{provide:nt,useExisting:t}])],ngContentSelectors:Jn,decls:4,vars:2,consts:[[1,`mat-drawer-backdrop`,3,`mat-drawer-shown`],[1,`mat-drawer-backdrop`,3,`click`]],template:function(n,i){n&1&&(hT(Yn),pC(0,Gi,1,2,`div`,0),gT(1),gT(2,1),pC(3,Ui,2,0,`mat-drawer-content`)),n&2&&(hC(i.hasBackdrop?0:-1),ZE(3),hC(i._content?-1:3))},dependencies:[fe],styles:[`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--%NS%mat-sidenav-content-text-color, var(--%NS%mat-sys-on-background));
  background-color: var(--%NS%mat-sidenav-content-background-color, var(--%NS%mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--%NS%mat-sidenav-scrim-color, color-mix(in srgb, var(--%NS%mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--%NS%mat-sidenav-container-text-color, var(--%NS%mat-sys-on-surface-variant));
  box-shadow: var(--%NS%mat-sidenav-container-elevation-shadow, none);
  background-color: var(--%NS%mat-sidenav-container-background-color, var(--%NS%mat-sys-surface));
  border-top-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  width: var(--%NS%mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`],encapsulation:2})}return t})();var ze=(()=>{class t extends fe{static ɵfac=(()=>{let e;return function(i){return(e||(e=II(t)))(i||t)}})();static ɵcmp=Hw({type:t,selectors:[[`mat-sidenav-content`]],hostAttrs:[1,`mat-drawer-content`,`mat-sidenav-content`],features:[eb([{provide:pn,useExisting:t},{provide:fe,useExisting:t}]),ng],ngContentSelectors:Be,decls:1,vars:0,template:function(n,i){n&1&&(hT(),gT(0))},encapsulation:2})}return t})();var it=(()=>{class t extends et{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(e){this._fixedInViewport=ss(e)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(e){this._fixedTopGap=Ee(e)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(e){this._fixedBottomGap=Ee(e)}_fixedBottomGap=0;static ɵfac=(()=>{let e;return function(i){return(e||(e=II(t)))(i||t)}})();static ɵcmp=Hw({type:t,selectors:[[`mat-sidenav`]],hostAttrs:[1,`mat-drawer`,`mat-sidenav`],hostVars:16,hostBindings:function(n,i){n&2&&(ug(`tabIndex`,i.mode!==`side`?`-1`:null)(`align`,null),Gg(`top`,i.fixedInViewport?i.fixedTopGap:null,`px`)(`bottom`,i.fixedInViewport?i.fixedBottomGap:null,`px`),zg(`mat-drawer-end`,i.position===`end`)(`mat-drawer-over`,i.mode===`over`)(`mat-drawer-push`,i.mode===`push`)(`mat-drawer-side`,i.mode===`side`)(`mat-sidenav-fixed`,i.fixedInViewport))},inputs:{fixedInViewport:`fixedInViewport`,fixedTopGap:`fixedTopGap`,fixedBottomGap:`fixedBottomGap`},exportAs:[`matSidenav`],features:[eb([{provide:et,useExisting:t}]),ng],ngContentSelectors:Be,decls:3,vars:0,consts:[[`content`,``],[`cdkScrollable`,``,1,`mat-drawer-inner-container`]],template:function(n,i){n&1&&(hT(),zi$1(0,`div`,1,0),gT(2),Vl())},dependencies:[pn],encapsulation:2})}return t})();var ei=(()=>{class t extends tt{_allDrawers=void 0;_content=void 0;static ɵfac=(()=>{let e;return function(i){return(e||(e=II(t)))(i||t)}})();static ɵcmp=Hw({type:t,selectors:[[`mat-sidenav-container`]],contentQueries:function(n,i,r){if(n&1&&Hg(r,ze,5)(r,it,5),n&2){let m;yT(m=vT())&&(i._content=m.first),yT(m=vT())&&(i._allDrawers=m)}},hostAttrs:[1,`mat-drawer-container`,`mat-sidenav-container`],hostVars:2,hostBindings:function(n,i){n&2&&zg(`mat-drawer-container-explicit-backdrop`,i._backdropOverride)},exportAs:[`matSidenavContainer`],features:[eb([{provide:nt,useExisting:t},{provide:tt,useExisting:t}]),ng],ngContentSelectors:Jn,decls:4,vars:2,consts:[[1,`mat-drawer-backdrop`,3,`mat-drawer-shown`],[1,`mat-drawer-backdrop`,3,`click`]],template:function(n,i){n&1&&(hT(Yn),pC(0,ji,1,2,`div`,0),gT(1),gT(2,1),pC(3,Xi,2,0,`mat-sidenav-content`)),n&2&&(hC(i.hasBackdrop?0:-1),ZE(3),hC(i._content?-1:3))},dependencies:[ze],styles:[Wi],encapsulation:2})}return t})();var ti=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=$w({type:t});static ɵinj=hd({imports:[Wt,Kr,Wt]})}return t})();var Hi=[`*`];var ni=()=>({paths:`subset`,queryParams:`ignored`,fragment:`ignored`,matrixParams:`ignored`});var Qi=()=>[`/system-info`];var ii=t=>({exact:t});var ve=(t,o)=>o.route;var qi=(t,o)=>o.id;function Yi(t,o){if(t&1){let e=TC();zi$1(0,`img`,38),Fg(`click`,function(){jd(e);return Vd(fT(2).reload())}),Vl()}}function Ji(t,o){if(t&1){let e=TC();zi$1(0,`img`,39),Fg(`click`,function(){jd(e);return Vd(fT(2).reload())}),Vl()}}function eo(t,o){t&1&&(zi$1(0,`mat-icon`),$T(1,`left_panel_open`),Vl())}function to(t,o){t&1&&(zi$1(0,`mat-icon`),$T(1,`left_panel_close`),Vl())}function no(t,o){t&1&&(zi$1(0,`div`,21)(1,`a`,40),Og(2,12),fg(3,`mat-icon`,41),Lg(),Vl()())}function io(t,o){t&1&&fg(0,`mat-divider`,46)}function oo(t,o){if(t&1&&(zi$1(0,`mat-option`,45),$T(1),Vl(),pC(2,io,1,0,`mat-divider`,46)),t&2){let e=o.$implicit,n=o.$index,i=o.$count;dg(`value`,e.slug),ZE(),Ul(` `,e.name,` `),ZE(),hC(n===i-1?2:-1)}}function ro(t,o){t&1&&(zi$1(0,`mat-option`,43),cT(1,13),Vl())}function ao(t,o){t&1&&(zi$1(0,`mat-option`,44),$T(1,` Create organization `),Vl())}function so(t,o){if(t&1){let e=TC();zi$1(0,`mat-form-field`,22)(1,`mat-select`,42,6),Fg(`selectionChange`,function(i){jd(e);let r=ET(2);return Vd(fT(2).onOrgSelectChange(i,r))}),yC(3,oo,3,3,null,null,qi),pC(5,ro,2,0,`mat-option`,43)(6,ao,2,0,`mat-option`,44),Vl(),KD(),Vl()}if(t&2){let e=fT(2);ZE(),dg(`value`,e.activeOrganizationSlug()),XD(),ZE(2),vC(e.organizations()),ZE(2),hC(e.canCreateOrg()?5:6)}}function lo(t,o){if(t&1&&(zi$1(0,`a`,47)(1,`mat-icon`,26),$T(2),Vl(),zi$1(3,`span`,49),$T(4),Vl()()),t&2){let e=fT().$implicit,n=fT(2);dg(`routerLink`,n.getRouteWithOrgSlug(e.route))(`matTooltip`,e.name)(`matTooltipDisabled`,!n.isCollapsed()),ZE(2),tm(e.icon),ZE(2),tm(e.name)}}function co(t,o){if(t&1&&(zi$1(0,`mat-list-item`,48)(1,`mat-icon`,26),$T(2),Vl(),zi$1(3,`span`,49),$T(4),Vl()()),t&2){let e=fT().$implicit,n=fT(2);dg(`matTooltip`,e.name)(`matTooltipDisabled`,!n.isCollapsed()),ZE(2),tm(e.icon),ZE(2),tm(e.name)}}function mo(t,o){if(t&1&&pC(0,lo,5,5,`a`,47)(1,co,5,4,`mat-list-item`,48),t&2)hC(fT(2).activeOrganization()?0:1)}function po(t,o){if(t&1&&fg(0,`a`,30),t&2){let e=o.$implicit;dg(`routerLink`,fT(2).getRouteWithOrgSlug(e.route))}}function uo(t,o){if(t&1&&fg(0,`a`,30),t&2){let e=o.$implicit;dg(`routerLink`,e.route)}}function _o(t,o){if(t&1&&(zi$1(0,`button`,34)(1,`mat-icon`),$T(2),Vl(),zi$1(3,`span`),$T(4),Vl()()),t&2){let e=o.$implicit;dg(`routerLink`,fT(3).getRouteWithOrgSlug(e.route))(`routerLinkActiveOptions`,nb(4,ii,e.exactRoute??!1)),ZE(2),tm(e.icon),ZE(2),tm(e.name)}}function go(t,o){if(t&1&&yC(0,_o,5,6,`button`,34,ve),t&2)vC(fT(2).visibleOrgMenuItems)}function ho(t,o){if(t&1&&(zi$1(0,`button`,34)(1,`mat-icon`),$T(2),Vl(),zi$1(3,`span`),$T(4),Vl()()),t&2){let e=o.$implicit;dg(`routerLink`,e.route)(`routerLinkActiveOptions`,nb(4,ii,e.exactRoute??!1)),ZE(2),tm(e.icon),ZE(2),tm(e.name)}}function fo(t,o){if(t&1){let e=TC();zi$1(0,`mat-sidenav`,16,0),Fg(`closed`,function(){jd(e);return Vd(fT().closeSideNav())}),zi$1(2,`mat-toolbar`,17),pC(3,Yi,1,0,`img`,18)(4,Ji,1,0,`img`,19),zi$1(5,`button`,20),Fg(`click`,function(){jd(e);return Vd(fT().toggleCollapse())}),pC(6,eo,2,0,`mat-icon`)(7,to,2,0,`mat-icon`),Vl()(),pC(8,no,4,0,`div`,21)(9,so,7,2,`mat-form-field`,22),zi$1(10,`mat-nav-list`),fg(11,`mat-divider`,23),yC(12,mo,2,1,null,null,ve),fg(14,`mat-divider`,23),zi$1(15,`div`,24,1)(17,`button`,25)(18,`mat-icon`,26),$T(19,`account_tree`),Vl(),zi$1(20,`span`,27),cT(21,7),Vl(),zi$1(22,`div`,28)(23,`mat-icon`,29),$T(24,`arrow_drop_down`),Vl()()(),yC(25,po,1,1,`a`,30,ve),Vl(),zi$1(27,`div`,24,2)(29,`button`,31)(30,`mat-icon`,26),$T(31,`account_circle`),Vl(),zi$1(32,`span`,27),cT(33,8),Vl(),zi$1(34,`div`,28)(35,`mat-icon`,29),$T(36,`arrow_drop_down`),Vl()()(),yC(37,uo,1,1,`a`,30,ve),Vl(),fg(39,`gt-support-menu`,null,3),zi$1(41,`button`,32),Fg(`menuOpened`,function(){jd(e);return Vd(ET(40).loadSupportLink())}),zi$1(42,`mat-icon`,26),$T(43,`help`),Vl(),zi$1(44,`span`,27),cT(45,9),Vl(),zi$1(46,`div`,28)(47,`mat-icon`,29),$T(48,`arrow_drop_down`),Vl()()()(),zi$1(49,`mat-menu`,33,4),pC(51,go,2,0),Vl(),zi$1(52,`mat-menu`,33,5),yC(54,ho,5,6,`button`,34,ve),fg(56,`mat-divider`),zi$1(57,`button`,35),Fg(`click`,function(){jd(e);return Vd(fT().logout())}),zi$1(58,`mat-icon`),$T(59,`logout`),Vl(),zi$1(60,`span`),cT(61,10),Vl()()(),zi$1(62,`div`,36)(63,`a`,37),cT(64,11),Vl()()()}if(t&2){let e=ET(16),n=ET(28),i=ET(40),r=ET(50),m=ET(53),d=fT();zg(`collapsed`,d.isCollapsed()),dg(`disableClose`,!d.mobileNav())(`opened`,d.navOpen())(`mode`,d.mobileNav()===!0?`over`:`side`),ZE(3),hC(d.isCollapsed()?4:3),ZE(3),hC(d.isCollapsed()?6:7),ZE(2),hC(d.contextLoaded()&&d.organizations().length===0&&d.canCreateOrg()?8:9),ZE(4),vC(d.visibleNavItems()),ZE(3),dg(`routerLinkActiveOptions`,tb(24,ni)),ZE(2),zg(`active-section`,e.isActive),dg(`matMenuTriggerFor`,r)(`disabled`,!d.activeOrganization())(`matTooltipDisabled`,!d.isCollapsed()),ZE(8),vC(d.visibleOrgMenuItems),ZE(2),dg(`routerLinkActiveOptions`,tb(25,ni)),ZE(2),zg(`active-section`,n.isActive),dg(`matMenuTriggerFor`,m)(`matTooltipDisabled`,!d.isCollapsed()),ZE(8),vC(d.profileMenuItems),ZE(4),dg(`matMenuTriggerFor`,i.menu)(`matTooltipDisabled`,!d.isCollapsed()),ZE(10),hC(d.activeOrganization()?51:-1),ZE(3),vC(d.profileMenuItems),ZE(9),dg(`routerLink`,tb(26,Qi)),ZE(),Pg(d.version()),uT(64)}}function vo(t,o){if(t&1){let e=TC();zi$1(0,`gt-mobile-nav-toolbar`,50),Fg(`buttonClicked`,function(){jd(e);return Vd(fT().toggleSideNav())}),Vl()}if(t&2)dg(`activeOrg`,fT().activeOrganization())}var oi=(()=>{class t{constructor(){this.router=_(H),this.mainNav=_(Kn),this.organizationsService=_(p),this.auth=_($),this.settingsService=_(Mi),this.userService=_(I$1),this.navItems=[{name:$localize`Issues`,icon:`breaking_news`,route:[`org_slug`,`issues`]},{name:$localize`Uptime Monitors`,icon:`share_eta`,route:[`org_slug`,`uptime-monitors`],requiresFeature:`uptime`},{name:$localize`Performance`,icon:`avg_pace`,route:[`org_slug`,`performance`]},{name:$localize`Logs`,icon:`text_snippet`,route:[`org_slug`,`logs`],requiresFeature:`logs`},{name:$localize`Projects`,icon:`team_dashboard`,route:[`org_slug`,`projects`]},{name:$localize`Releases`,icon:`rocket_launch`,route:[`org_slug`,`releases`]}],this.orgMenuItems=[{name:$localize`General settings`,icon:`settings`,route:[`org_slug`,`settings`],exactRoute:!0},{name:$localize`Projects`,icon:`folder`,route:[`org_slug`,`settings`,`projects`]},{name:$localize`Subscription`,icon:`payment`,route:[`org_slug`,`settings`,`subscription`]},{name:$localize`Teams`,icon:`groups`,route:[`org_slug`,`settings`,`teams`]},{name:$localize`Members`,icon:`people`,route:[`org_slug`,`settings`,`members`]}],this.profileMenuItems=[{name:$localize`Account`,icon:`person`,route:[`/profile`],exactRoute:!0},{name:$localize`MFA`,icon:`security`,route:[`/profile`,`multi-factor-auth`]},{name:$localize`Notifications`,icon:`notifications`,route:[`/profile`,`notifications`]},{name:$localize`Auth Tokens`,icon:`vpn_key`,route:[`/profile`,`auth-tokens`]}],this.visibleNavItems=Tt(()=>{let e=this.settingsService.enabledFeatures();return this.navItems.filter(n=>!n.requiresFeature||e.includes(n.requiresFeature))}),this.visibleOrgMenuItems=this.orgMenuItems,this.isCollapsed=Ue(!1),this.activeOrganizationSlug=this.organizationsService.activeOrganizationSlug,this.activeOrganization=this.organizationsService.activeOrganization,this.organizations=this.organizationsService.organizations,this.organizationsInitialLoad=this.organizationsService.initialLoad,this.isLoggedIn=this.auth.isAuthenticated,this.navOpen=this.mainNav.navOpen,this.paidForGlitchTip=this.settingsService.paidForGlitchTip,this.mobileNav=this.mainNav.mobileNav,this.version=this.settingsService.version,this.contextLoaded=Tt(()=>this.settingsService.initialLoad()&&this.organizationsInitialLoad()&&!!this.userService.user()),this.canCreateOrg=Tt(()=>this.settingsService.enableOrganizationCreation()||this.userService.user()||this.organizationsService.organizationsCount())}getRouteWithOrgSlug(e){return e.map(n=>n===`org_slug`?this.activeOrganizationSlug():n)}async logout(){await this.auth.logout(),window.location.href=`/login`}dispatchResizeEvent(){window.dispatchEvent(new Event(`resize`))}toggleSideNav(){this.mainNav.getToggleNav()}toggleCollapse(){this.isCollapsed.update(e=>!e),this.dispatchResizeEvent()}closeSideNav(){this.mainNav.getClosedNav(),this.isCollapsed()&&(this.isCollapsed.set(!1),this.dispatchResizeEvent())}onOrgSelectChange(e,n){e.value?this.organizationsService.setActiveOrganizationSlug(e.value):(n.value=this.activeOrganizationSlug(),this.router.navigate([`organizations`,`new`]))}reload(){this.settingsService.reload(),this.userService.reload(),this.organizationsService.reload()}static{this.ɵfac=function(n){return new(n||t)}}static{this.ɵcmp=Hw({type:t,selectors:[[`gt-main-nav`]],ngContentSelectors:Hi,decls:5,vars:2,consts:()=>{let e;e=$localize`Organization`;let n;n=$localize`Profile`;let i;i=$localize`Support`;let r;r=$localize`Organization`;let m;m=$localize`Profile`;let d;d=$localize`Support`;let v;v=$localize`Log Out`;let I;I=$localize`GlitchTip ${`�0�`}:INTERPOLATION:`;let se;se=$localize`Create Organization${`�#3�`}:START_TAG_MAT_ICON:add${`�/#3�`}:CLOSE_TAG_MAT_ICON:`;let Q;return Q=$localize`Create organization`,[[`sidenav`,``],[`orgWrapper`,`routerLinkActive`],[`profileWrapper`,`routerLinkActive`],[`supportMenuComponent`,``],[`orgMenu`,`matMenu`],[`profileMenu`,`matMenu`],[`orgSelect`,``],r,m,d,v,I,se,Q,[1,`mat-elevation-z4`,3,`disableClose`,`opened`,`mode`,`collapsed`],[3,`activeOrg`],[1,`mat-elevation-z4`,3,`closed`,`disableClose`,`opened`,`mode`],[1,`logo-toolbar`],[`routerLink`,`.`,`src`,`static/assets/images/glitchtip-logo-v1.svg`,`alt`,`GlitchTip`,1,`main-logo`],[`routerLink`,`.`,`src`,`static/assets/images/glitchtip-logo-collasped.svg`,`alt`,`GlitchTip`,1,`collapsed-logo`],[`mat-icon-button`,``,1,`collapse-toggle`,3,`click`],[1,`org-create-button-container`],[`appearance`,`outline`,`subscriptSizing`,`dynamic`,1,`org-dropdown-container`],[1,`nav-section-divider`],[`routerLinkActive`,``,3,`routerLinkActiveOptions`],[`mat-list-item`,``,`matTooltip`,e,`matTooltipPosition`,`right`,3,`matMenuTriggerFor`,`disabled`,`matTooltipDisabled`],[`matListItemIcon`,``],[`matListItemTitle`,``,1,`nav-text`],[`matListItemMeta`,``],[1,`arrow-icon`],[2,`display`,`none`,3,`routerLink`],[`mat-list-item`,``,`matTooltip`,n,`matTooltipPosition`,`right`,3,`matMenuTriggerFor`,`matTooltipDisabled`],[`mat-list-item`,``,`matTooltip`,i,`matTooltipPosition`,`right`,3,`menuOpened`,`matMenuTriggerFor`,`matTooltipDisabled`],[`xPosition`,`after`,1,`nav-menu`],[`mat-menu-item`,``,`routerLinkActive`,`active-menu-item`,3,`routerLink`,`routerLinkActiveOptions`],[`mat-menu-item`,``,3,`click`],[1,`caption-text`,`version`],[`routerLinkActive`,`active-route`,3,`routerLink`],[`routerLink`,`.`,`src`,`static/assets/images/glitchtip-logo-v1.svg`,`alt`,`GlitchTip`,1,`main-logo`,3,`click`],[`routerLink`,`.`,`src`,`static/assets/images/glitchtip-logo-collasped.svg`,`alt`,`GlitchTip`,1,`collapsed-logo`,3,`click`],[`matButton`,`outlined`,`id`,`create-new-link`,`routerLink`,`/organizations/new`,1,`org-create-button`],[`iconPositionEnd`,``],[`data-cy`,`orgSelect`,`formControlName`,`orgSelectControl`,`hideSingleSelectionIndicator`,``,`canSelectNullableOptions`,``,3,`selectionChange`,`value`],[`data-cy`,`createNewLink`],[`disabled`,``,`matTooltip`,`Organization creation is currently disabled`,`matTooltipPosition`,`below`],[3,`value`],[1,`dropdown-divider`],[`mat-list-item`,``,`routerLinkActive`,`mdc-list-item--activated`,`matTooltipPosition`,`right`,3,`routerLink`,`matTooltip`,`matTooltipDisabled`],[`disabled`,``,`matTooltipPosition`,`right`,3,`matTooltip`,`matTooltipDisabled`],[1,`nav-text`],[3,`buttonClicked`,`activeOrg`]]},template:function(n,i){n&1&&(hT(),zi$1(0,`mat-sidenav-container`),pC(1,fo,65,27,`mat-sidenav`,14),zi$1(2,`mat-sidenav-content`),pC(3,vo,1,1,`gt-mobile-nav-toolbar`,15),gT(4),Vl()()),n&2&&(ZE(),hC(i.isLoggedIn()?1:-1),ZE(2),hC(i.isLoggedIn()?3:-1))},dependencies:[ti,it,ei,ze,Q$1,B,yt$1,wt$1,kt,ai$2,oi$1,ln$1,us,st,ds,We,f,u,ti$2,$t,Jt,mt,at$1,st$1,Lt,I,G,Bt,Yt,mt$1,ta,T,Qn,qn],styles:[`mat-sidenav-container[_ngcontent-%COMP%]{position:absolute;inset:0}mat-nav-list[_ngcontent-%COMP%]{padding:10px}mat-nav-list[_ngcontent-%COMP%]   button[mat-list-item][_ngcontent-%COMP%]{border:none;text-align:inherit}mat-nav-list[_ngcontent-%COMP%]   .nav-section-divider[_ngcontent-%COMP%]{margin:5px -10px;border-color:var(--%NS%mat-sys-outline-variant)}mat-nav-list[_ngcontent-%COMP%]   .mdc-list-item--disabled[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{opacity:.25}.active-section[_ngcontent-%COMP%]{background-color:var(--%NS%mat-sys-primary)}.active-section[_ngcontent-%COMP%]   .mdc-list-item__primary-text[_ngcontent-%COMP%], .active-section[_ngcontent-%COMP%]   span[matListItemTitle][_ngcontent-%COMP%], .active-section[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-on-primary)}.active-section[_ngcontent-%COMP%]   .arrow-icon[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-on-primary)}.active-menu-item[_ngcontent-%COMP%]{background-color:var(--%NS%mat-sys-surface-container-highest)}mat-sidenav[_ngcontent-%COMP%]{width:240px}mat-sidenav[_ngcontent-%COMP%]   mat-icon[matListItemIcon][_ngcontent-%COMP%]{margin-right:8px;margin-left:8px}mat-sidenav.collapsed[_ngcontent-%COMP%]{width:72px}mat-sidenav.collapsed[_ngcontent-%COMP%]   .org-create-button-container[_ngcontent-%COMP%], mat-sidenav.collapsed[_ngcontent-%COMP%]   .org-dropdown-container[_ngcontent-%COMP%], mat-sidenav.collapsed[_ngcontent-%COMP%]   .version[_ngcontent-%COMP%]{display:none}mat-sidenav.collapsed[_ngcontent-%COMP%]   .nav-text[_ngcontent-%COMP%]{display:none}mat-sidenav.collapsed[_ngcontent-%COMP%]   mat-nav-list[_ngcontent-%COMP%]{padding:16px}mat-sidenav.collapsed[_ngcontent-%COMP%]   mat-list-item[_ngcontent-%COMP%]{justify-content:center;padding:0}mat-sidenav.collapsed[_ngcontent-%COMP%]   [matListItemMeta][_ngcontent-%COMP%]{display:none}mat-sidenav.collapsed[_ngcontent-%COMP%]   .logo-toolbar[_ngcontent-%COMP%]{flex-direction:column;align-items:center;justify-content:center;margin-top:8px}mat-sidenav.collapsed[_ngcontent-%COMP%]   .logo-toolbar[_ngcontent-%COMP%]   .collapsed-logo[_ngcontent-%COMP%]{width:24px;margin-bottom:20px;cursor:pointer}mat-sidenav.collapsed[_ngcontent-%COMP%]   .logo-toolbar[_ngcontent-%COMP%]   .collapse-toggle[_ngcontent-%COMP%]{margin-right:0}.logo-toolbar[_ngcontent-%COMP%]{height:fit-content;padding-top:16px;justify-content:space-between}.logo-toolbar[_ngcontent-%COMP%]   .main-logo[_ngcontent-%COMP%]{width:115px;cursor:pointer}.logo-toolbar[_ngcontent-%COMP%]   .collapse-toggle[_ngcontent-%COMP%]{margin-right:8px}@media screen and (max-width:600px){.logo-toolbar[_ngcontent-%COMP%]   .collapse-toggle[_ngcontent-%COMP%]{display:none}}.org-create-button-container[_ngcontent-%COMP%], .org-dropdown-container[_ngcontent-%COMP%]{width:100%;padding:25px 15px 0}.org-create-button[_ngcontent-%COMP%]{height:48px}.version[_ngcontent-%COMP%]{text-align:center}.version[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#616161;font-weight:300;font-size:small;text-decoration:none}mat-list-item[_ngcontent-%COMP%]   .arrow-icon[_ngcontent-%COMP%], button[mat-list-item][_ngcontent-%COMP%]   .arrow-icon[_ngcontent-%COMP%]{transition:transform .2s ease-in-out,color .2s ease-in-out}mat-list-item[aria-expanded=true][_ngcontent-%COMP%]   .arrow-icon[_ngcontent-%COMP%], button[mat-list-item][aria-expanded=true][_ngcontent-%COMP%]   .arrow-icon[_ngcontent-%COMP%]{transform:rotate(180deg)}
/*# sourceMappingURL=main-nav.component-VYZWKP36.css.map */`]})}}return t})();var ri=(()=>{class t{static{this.ɵfac=function(n){return new(n||t)}}static{this.ɵcmp=Hw({type:t,selectors:[[`gt-logged-in`]],decls:2,vars:0,template:function(n,i){n&1&&(zi$1(0,`gt-main-nav`),fg(1,`router-outlet`),Vl())},dependencies:[oi,wr],encapsulation:2,changeDetection:1})}}return t})();var ot=t=>_($).loggedInGuard()?xn(t,[`/`]):!0;var ai=(t,o)=>_($).loggedInGuard()?!0:xn(t,[`/`,`login`],o.url!==`/`?{next:o.url}:{});var Co=t=>[t,`settings`,`subscription`];function Mo(t,o){t&1&&(zi$1(0,`span`),cT(1,2),Vl())}function So(t,o){t&1&&(zi$1(0,`span`),cT(1,3),Vl())}var si=(()=>{class t{constructor(e,n){this.snackBarRef=e,this.activeOrgSlug=n.activeOrgSlug,this.overageEnabled=n.overageEnabled}static{this.ɵfac=function(n){return new(n||t)(to$1(p$1),to$1(lt))}}static{this.ɵcmp=Hw({type:t,selectors:[[`gt-over-limit-snackbar`]],decls:11,vars:4,consts:()=>{let e;e=$localize` You've hit your plan's event limit for this billing period, so new events are being throttled. `;let n;n=$localize` Manage your subscription `;let i;i=$localize` to upgrade or raise your overage spend cap and keep ingesting.`;let r;return r=$localize` to upgrade or turn on overage billing and keep ingesting.`,[e,n,i,r,[`matSnackBarLabel`,``],[1,`subscription-link`,3,`click`,`routerLink`],[`matSnackBarActions`,``],[`matSnackBarAction`,``,`matIconButton`,``,1,`dismiss-button`,3,`click`]]},template:function(n,i){n&1&&(zi$1(0,`span`,4)(1,`span`),cT(2,0),Vl(),zi$1(3,`a`,5),Fg(`click`,function(){return i.snackBarRef.dismiss()}),cT(4,1),Vl(),pC(5,Mo,2,0,`span`)(6,So,2,0,`span`),Vl(),zi$1(7,`span`,6)(8,`button`,7),Fg(`click`,function(){return i.snackBarRef.dismiss()}),zi$1(9,`mat-icon`),$T(10,`close`),Vl()()()),n&2&&(ZE(3),dg(`routerLink`,nb(2,Co,i.activeOrgSlug)),ZE(2),hC(i.overageEnabled?5:6))},dependencies:[kt,wt$1,ai$2,ln$1,pt,bt,kt$1],styles:[`[_nghost-%COMP%]{display:flex}.subscription-link[_ngcontent-%COMP%], .dismiss-button[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-inverse-primary)}
/*# sourceMappingURL=over-limit-snackbar-GBSONOC3.css.map */`]})}}return t})();var li=(()=>{class t{constructor(){this.route=_(G$1),this.router=_(H),this.settings=_(Mi),this.subscription=_(w),this.user=_(I$1),this.snackBar=_(Qt),this.childRoutePath=[],this.subscriptions=[],this.isNavigationFromBackButton=!1,this.organizationService=_(p),this.orgSlug=aV.required({alias:`org-slug`}),ec(()=>{let e=this.organizationService.organizations(),n=this.organizationService.activeOrganizationSlug(),i=this.orgSlug();this.organizationService.organizationsResource.hasValue()&&!e.find(r=>r.slug===n)&&this.organizationService.setActiveOrganizationSlug(null),n?n!==i&&(this.isNavigationFromBackButton?this.organizationService.setActiveOrganizationSlug(i):this.router.navigate([`../`,n,...this.childRoutePath],{relativeTo:this.route})):this.router.navigate([`/`])}),ec(()=>{let e=this.settings.billingEnabled(),n=this.organizationService.activeOrganizationSlug();e&&n&&this.subscription.checkIfUserHasSubscription(n)}),ec(()=>{let e=this.organizationService.activeOrganizationSlug(),n=this.settings.billingEnabled(),i=this.organizationService.activeOrganization(),r=this.user.throttleWarningDismissedOrgs().includes(e);n&&i?.eventThrottleRate&&!r&&this.snackBar.openFromComponent(si,{data:{activeOrgSlug:e,overageEnabled:this.subscription.overageEnabled()},verticalPosition:`top`,duration:60*1e3}).afterDismissed().subscribe(()=>this.user.dismissThrottleWarning(e))})}ngOnInit(){this.extractChildRoutePath(),this.organizationService.setActiveOrganizationSlug(this.orgSlug()),this.subscribeToRouteChanges()}ngOnDestroy(){this.subscriptions.map(e=>e.unsubscribe())}subscribeToRouteChanges(){this.subscriptions.push(this.router.events.pipe(Dn(e=>e instanceof re)).subscribe(e=>{this.isNavigationFromBackButton=e.navigationTrigger===`popstate`,setTimeout(()=>this.isNavigationFromBackButton=!1)}),this.router.events.pipe(Dn(e=>e instanceof O)).subscribe(()=>{this.extractChildRoutePath()}))}extractChildRoutePath(){let e=[],n=this.route.firstChild;for(;n&&!n.routeConfig?.path?.includes(`:`);){for(let i of n.snapshot.url)e.push(i.path);n=n.firstChild}this.childRoutePath=e}static{this.ɵfac=function(n){return new(n||t)}}static{this.ɵcmp=Hw({type:t,selectors:[[`ng-component`]],inputs:{orgSlug:[1,`org-slug`,`orgSlug`]},decls:1,vars:0,template:function(n,i){n&1&&fg(0,`router-outlet`)},dependencies:[wr],encapsulation:2})}}return t})();var di=[{path:`login/finalize`,loadComponent:()=>import(`./chunk-DNyfo4qy.js`).then(t=>t.FinalizeLogin),title:`Finalize Login`},{path:`login`,pathMatch:`full`,loadComponent:()=>import(`./chunk-BeGfQ9Oy.js`).then(t=>t.LoginComponent),canActivate:[ot],title:`Log In`},{path:`register`,loadChildren:()=>import(`./chunk-BSdyd1dl.js`),canActivate:[ot],title:`Register`},{path:`reset-password`,loadChildren:()=>import(`./chunk-D0vvsER0.js`),title:`Reset Password`},{path:`accept/:memberId/:token`,loadChildren:()=>import(`./chunk-maHOPqx-.js`)},{path:`:org-slug/:project-slug/issues/:id`,redirectTo:`:org-slug/issues/:id`,pathMatch:`full`},{path:`orgredirect/organizations/:orgslug/settings/auth-tokens`,redirectTo:`/profile/auth-tokens`,pathMatch:`full`},{path:`account/settings/wizard/:hash`,redirectTo:`profile/wizard/:hash`,pathMatch:`full`},{path:``,component:ri,canActivate:[ai],children:[{path:``,loadChildren:()=>import(`./chunk-DtzIfOeK2.js`),pathMatch:`full`,data:{preload:!0}},{path:`organizations/new`,loadChildren:()=>import(`./chunk-B9U4L_V62.js`),title:`Create New Organization`},{path:`profile`,loadChildren:()=>import(`./chunk-Bv6VbBuz2.js`),title:`Profile`,data:{preload:!0}},{path:`system-info`,loadChildren:()=>import(`./chunk-BELwX6KG.js`),title:`System info`,data:{preload:!0}},{path:`:org-slug`,component:li,children:[{path:`issues`,loadChildren:()=>import(`./chunk-D451tC8r.js`),title:`Issues`,data:{preload:!0}},{path:`logs`,loadChildren:()=>import(`./chunk-6O3YyfWV2.js`),title:`Logs`},{path:`uptime-monitors`,loadChildren:()=>import(`./chunk-VN13VnJY.js`),title:`Uptime Monitors`},{path:`projects`,loadChildren:()=>import(`./chunk-iQcrdT3A2.js`),title:`Projects`},{path:`releases`,loadChildren:()=>import(`./chunk-DEY-Ri7J2.js`),title:`Releases`},{path:`settings`,loadChildren:()=>import(`./chunk-5-EML5V-2.js`),title:`Settings`,data:{preload:!0}},{path:`performance`,loadChildren:()=>import(`./chunk-B1CFi04Z.js`),title:`Performance`},{path:`:project-slug`,redirectTo:`settings/projects/:project-slug`}]}]},{path:`**`,redirectTo:``,pathMatch:`full`}];var ci=(()=>{class t extends Ar{updateTitle(e){let n=this.buildTitle(e);n!==void 0?document.title=n:document.title=`GlitchTip`}static{this.ɵfac=(()=>{let e;return function(i){return(e||(e=II(t)))(i||t)}})()}static{this.ɵprov=oe({token:t,factory:t.ɵfac})}}return t})();var mi=(()=>{class t{constructor(){this.errorBus=_(Ft$1),this.dialog=_(ee);let e=this.errorBus,n=_(ne);e.errors$.subscribe(i=>{n.report(i)})}handleError(e){/Loading chunk [\d]+ failed/.test(e.message)?this.dialog.open(R,{data:{title:$localize`Load new version?`,message:$localize`New version available. Load New Version?`,confirmText:$localize`Load`,destructive:!1}}).afterClosed().subscribe(r=>{r&&window.location.reload()}):(this.errorBus.next(e),console.error(e))}static{this.ɵfac=function(n){return new(n||t)}}static{this.ɵprov=oe({token:t,factory:t.ɵfac,providedIn:`root`})}}return t})();var pi=(()=>{class t{preload(e,n){return bo(e)?Ft(1e3).pipe(Ae(()=>n())):Ot}static{this.ɵfac=function(n){return new(n||t)}}static{this.ɵprov=oe({token:t,factory:t.ɵfac,providedIn:`root`})}}return t})();function bo(t){if(t.data&&t.data.preload){let o=navigator.connection;if(o){if(o.saveData)return!1;if(`effectiveType`in navigator.connection)return![`slow-2g`,`2g`,`3g`].includes(o.effectiveType);if(/Android|iPhone/i.test(navigator.userAgent))return!1}return!0}return!1}var No=`@`;var wo=(()=>{class t{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=_(pe);loadingSchedulerFn=_(Ao,{optional:!0});_engine;constructor(e,n,i,r,m){this.doc=e,this.delegate=n,this.zone=i,this.animationType=r,this.moduleImpl=m}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import(`./chunk-Ts0W0YDm.js`).then(i=>i),n;return this.loadingSchedulerFn?n=this.loadingSchedulerFn(e):n=e(),n.catch(i=>{throw new b(5300,!1)}).then(({ɵcreateEngine:i,ɵAnimationRendererFactory:r})=>{this._engine=i(this.animationType,this.doc);let m=new r(this.delegate,this._engine,this.zone);return this.delegate=m,m})}createRenderer(e,n){let i=this.delegate.createRenderer(e,n);if(i.ɵtype===0)return i;typeof i.throwOnSyntheticProps==`boolean`&&(i.throwOnSyntheticProps=!1);let r=new rt(i);return n?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(m=>{let d=m.createRenderer(e,n);r.use(d),this.scheduler??=this.injector.get(Oe,null,{optional:!0}),this.scheduler?.notify(10)}).catch(m=>{r.use(i)}),r}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(e){this._engine?.flush(),this.delegate.componentReplaced?.(e)}static ɵfac=function(n){iw()};static ɵprov=oe({token:t,factory:t.ɵfac})}return t})();var rt=class{delegate;replay=[];ɵtype=1;constructor(o){this.delegate=o}use(o){if(this.delegate=o,this.replay!==null){for(let e of this.replay)e(o);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(o,e){return this.delegate.createElement(o,e)}createComment(o){return this.delegate.createComment(o)}createText(o){return this.delegate.createText(o)}get destroyNode(){return this.delegate.destroyNode}appendChild(o,e){this.delegate.appendChild(o,e)}insertBefore(o,e,n,i){this.delegate.insertBefore(o,e,n,i)}removeChild(o,e,n,i){this.delegate.removeChild(o,e,n,i)}selectRootElement(o,e){return this.delegate.selectRootElement(o,e)}parentNode(o){return this.delegate.parentNode(o)}nextSibling(o){return this.delegate.nextSibling(o)}setAttribute(o,e,n,i){this.delegate.setAttribute(o,e,n,i)}removeAttribute(o,e,n){this.delegate.removeAttribute(o,e,n)}addClass(o,e){this.delegate.addClass(o,e)}removeClass(o,e){this.delegate.removeClass(o,e)}setStyle(o,e,n,i){this.delegate.setStyle(o,e,n,i)}removeStyle(o,e,n){this.delegate.removeStyle(o,e,n)}setProperty(o,e,n){this.shouldReplay(e)&&this.replay.push(i=>i.setProperty(o,e,n)),this.delegate.setProperty(o,e,n)}setValue(o,e){this.delegate.setValue(o,e)}listen(o,e,n,i){return this.shouldReplay(e)&&this.replay.push(r=>r.listen(o,e,n,i)),this.delegate.listen(o,e,n,i)}shouldReplay(o){return this.replay!==null&&o.startsWith(No)}};var Ao=new A(``);function ui(t=`animations`){return Ge(`NgAsyncAnimations`),ti$1([{provide:Br,useFactory:()=>new wo(_(_r),_(ln),_(ke),t)},{provide:Fv,useValue:t===`noop`?`NoopAnimations`:`BrowserAnimations`}])}var fi=4e3;window.Cypress&&(fi=100);var To=new RegExp(`403 Forbidden|404 OK`,`mi`);var at=[`en`,`fr`,`nb`,`ko`];var _i={no:`nb`};var ae=at.find(t=>navigator.language.startsWith(t))??at[0];window.document.documentElement.lang=ae;ae in _i&&(ae=_i[ae]);function yo(t,o){let e=_(it$1);return o(t.clone({url:`${e.replace(/\/$/,``)}${t.url}`}))}var vi=[];var Ci=[];var gi=document.querySelector(`base`);if(gi){let t=gi.href;t!==`/`&&(Ci.push({provide:it$1,useValue:t}),vi.push(yo))}var hi=()=>Ao$1(Wn,{providers:[...Ci,db(),ui(),na(di,Ci$1(),Si$1(pi),ia({scrollPositionRestoration:`enabled`}),oa({onSameUrlNavigation:`reload`,paramsInheritanceStrategy:`always`})),Ko(Jo(),qo([...vi])),vi$1({ignoreErrors:[To]}),{provide:yt$2,useValue:{duration:fi}},{provide:b$1,useValue:{appearance:`outlined`}},{provide:Xe,useClass:mi},{provide:Ar,useClass:ci},{provide:Un$1,useClass:X}]}).catch(t=>console.error(t));ae===at[0]?hi():fetch(`static/assets/i18n/messages.${ae}.json`).then(t=>{if(!t.ok)throw new Error(`HTTP error ${t.status}`);return t.json()}).then(t=>{Xn(t),hi()});export{yo as baseHrefInterceptor};
//# debugId=ba6222dd-fd19-5fb1-b9ff-77a5576b7bbf
//# sourceMappingURL=main-IZFSHP3I.js.map