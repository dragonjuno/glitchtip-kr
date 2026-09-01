import{$t as Ye,An as dg,Bn as fg,Bt as Vl,Cn as cT,D as Fg,Di as zi$1,Dn as dT,Ei as zg,Er as ng,Fr as pC,Gr as sV,Ir as pV,It as Ue,Jn as hT,Ln as fT,Lt as Ug,Mn as eb,Mr as oe,N as Gg,Nn as ec,Nr as og,Nt as TC,Oi as zo,Or as nm,Ot as Qr,Pt as Tt,Qn as he,Qr as tm,Rt as Ul,Tn as cb,Tr as nb,Tt as Q,Un as gT,V as Hw,W as IT,Wn as gV,Zn as hd,_t as Og,ai as ub,an as ZT,at as Lg,br as mC,c as A,ci as vC,cr as jd,di as vg,er as ib,f as Bg,gn as ab,gr as lV,hn as aV,i as $l,in as ZE,jn as eI,l as AT,li as vT,mi as vy,n as $T,o as $p,oi as ug,on as Zd,pi as vs,qn as hC,ri as uT,s as $w,un as _,vi as yC,wi as z,x as ET,xr as mV,xt as Pg,y as Dm,yi as yT,zt as Vd}from"./chunk-CydAPAPE.js";import{E as ai$1,G as ro,K as to,w as Zi}from"./chunk-DzW0_8HQ.js";import{H as yt,R as ts,d as Kr,f as Ne,g as Ti$1,u as K}from"./chunk-C5jr27J8.js";import{n as u,t as f}from"./chunk-DdTvXu9U.js";import{d as oe$1,f as st,i as Xt,o as Zt,r as Mi$1,u as nn}from"./chunk-DJPhQOTg.js";import{A as oi$1,D as ln$1,f as Re,l as Mn$1,y as ai$2}from"./chunk-D7YX0sdr.js";import"./chunk-DsCjHOfh.js";import{R as ve,a as E}from"./chunk-C-sOqvSq.js";import{a as Vt,c as zt,i as T,n as Bt,o as ee,r as Ht,s as jt}from"./chunk-t2g13iLz.js";import"./chunk-DhZqcpmO.js";import{t as m}from"./chunk-BRL1ZM02.js";import{n as wt,r as yt$1}from"./chunk-BpoZbjmB.js";import{t as a}from"./chunk-D2URFsIa.js";import"./chunk-Bha5Bx5i.js";import{t as p}from"./chunk-B6NRyyqb.js";import{l as kt}from"./chunk-DoYiX3zD.js";import{t as w}from"./chunk-DZWLEUZ4.js";import{t as Qt}from"./chunk-lacMDu-q.js";import{t as I}from"./chunk-CVdVtrcY.js";import{i as _$1,n as I$1,r as T$1,s as k,t as F}from"./chunk-Dcc5kKE4.js";import{n as Pe,t as Be}from"./chunk-DX643hOv.js";import{t as f$1}from"./chunk-1Fee1Ehw.js";import{n as Z,t as J}from"./chunk-BY3rTwHr2.js";import{t as q}from"./chunk-BTPWR8Li2.js";import{n as Z$1,t as L}from"./chunk-B5PKTg242.js";import{n as bt,r as nt,t as Dt}from"./chunk-Bv2LOrRJ2.js";import{t as a$1}from"./chunk-Cbsm0zhE2.js";import{t as J$1}from"./chunk-CGGS3GPT.js";import{n as o_}from"./chunk-B0tvkw2C.js";function hn(t,l){if(t&1&&(zi$1(0,`h2`,12),cT(1,0),Vl(),zi$1(2,`p`,13),cT(3,1),Vl()),t&2){let e=fT();ZE(3),Pg(e.freeEventLabel()),uT(3)}}function En(t,l){t&1&&(zi$1(0,`p`,14),cT(1,3),Vl())}function fn(t,l){if(t&1&&(zi$1(0,`p`,14),Og(1,4),fg(2,`strong`),Lg(),Vl()),t&2){let e=fT(2);ZE(2),Pg(e.eventThrottleRate()),uT(1)}}function Nn(t,l){if(t&1&&(zi$1(0,`p`,14),Og(1,5),fg(2,`strong`),Lg(),Vl()),t&2){let e=fT(2);ZE(2),Pg(e.usagePercent()),uT(1)}}function Pn(t,l){t&1&&(zi$1(0,`p`,14),cT(1,6),Vl())}function vn(t,l){if(t&1&&(zi$1(0,`h2`,12),cT(1,2),Vl(),pC(2,En,2,0,`p`,14)(3,fn,3,1,`p`,14)(4,Nn,3,1,`p`,14)(5,Pn,2,0,`p`,14)),t&2){let e=fT();ZE(2),hC(e.isHardStopped()?2:e.isThrottling()?3:e.usagePercent()!==null?4:5)}}function bn(t,l){t&1&&fg(0,`mat-spinner`,16)}function Rn(t,l){if(t&1){let e=TC();zi$1(0,`div`,11)(1,`button`,15),Fg(`click`,function(){jd(e);return Vd(fT().onUpgrade())}),zi$1(2,`span`),cT(3,7),Vl(),pC(4,bn,1,0,`mat-spinner`,16),Vl(),zi$1(5,`button`,17),Fg(`click`,function(){jd(e);return Vd(fT().onComparePlans())}),cT(6,8),Vl()()}if(t&2){let e=fT();ZE(),dg(`disabled`,e.upgradeLoading()),ZE(),Gg(`visibility`,e.upgradeLoading()?`hidden`:`visible`),ZE(),Pg(e.nextPlanLabel()),uT(3),ZE(),hC(e.upgradeLoading()?4:-1)}}var ln=(()=>{class t{constructor(){this.usagePercent=aV(null),this.eventThrottleRate=aV(null),this.isAcceptingEvents=aV(null),this.hideActions=aV(!1),this.variant=aV(`upgrade`),this.nextPlanEvents=aV(null),this.freeEventLimit=aV(null),this.upgradeLoading=aV(!1),this.upgradeClick=sV(),this.comparePlansClick=sV(),this.nextPlanLabel=Tt(()=>this.formatEvents(this.nextPlanEvents())),this.freeEventLabel=Tt(()=>this.formatEvents(this.freeEventLimit())),this.isHardStopped=Tt(()=>this.isAcceptingEvents()===!1),this.isThrottling=Tt(()=>{let e=this.eventThrottleRate();return e!==null&&e>0})}onUpgrade(){this.upgradeClick.emit()}onComparePlans(){this.comparePlansClick.emit()}formatEvents(e){return e===null?``:e>=1e6?`${e/1e6}M`:e>=1e3?`${e/1e3}k`:e.toLocaleString()}static{this.ɵfac=function(n){return new(n||t)}}static{this.ɵcmp=Hw({type:t,selectors:[[`gt-upgrade-banner`]],inputs:{usagePercent:[1,`usagePercent`],eventThrottleRate:[1,`eventThrottleRate`],isAcceptingEvents:[1,`isAcceptingEvents`],hideActions:[1,`hideActions`],variant:[1,`variant`],nextPlanEvents:[1,`nextPlanEvents`],freeEventLimit:[1,`freeEventLimit`],upgradeLoading:[1,`upgradeLoading`]},outputs:{upgradeClick:`upgradeClick`,comparePlansClick:`comparePlansClick`},decls:6,vars:2,consts:()=>{let e;e=$localize`Get started with GlitchTip`;let n;n=$localize`Start free with ${`�0�`}:INTERPOLATION: events/month, or go paid to scale up and support open source error tracking with priority support.`;let i;i=$localize`Don't lose events!`;let s;s=$localize` Your events are being rejected. Upgrade to resume event tracking. `;let m;m=$localize` About ${`�#2�`}:START_TAG_STRONG:${`�0�`}:INTERPOLATION:%${`�/#2�`}:CLOSE_TAG_STRONG: of your incoming events are being dropped. Upgrade to restore full coverage. `;let f;f=$localize` You're at ${`�#2�`}:START_TAG_STRONG:${`�0�`}:INTERPOLATION:%${`�/#2�`}:CLOSE_TAG_STRONG: of your event limit. Upgrade before throttling kicks in and support open source error tracking. `;let h;h=$localize` Support open source error tracking and avoid event loss as you scale. `;let N;N=$localize`Upgrade to ${`�0�`}:INTERPOLATION: events/mo`;let b;return b=$localize` Compare Plans `,[e,n,i,s,m,f,h,N,b,[`appearance`,`outlined`,1,`upgrade-banner`],[1,`banner-content`],[1,`banner-actions`],[1,`banner-headline`,`fancy`],[1,`banner-description`],[1,`banner-usage`],[`mat-flat-button`,``,`color`,`primary`,1,`upgrade-button`,3,`click`,`disabled`],[`diameter`,`18`,1,`upgrade-button-spinner`],[`mat-stroked-button`,``,3,`click`]]},template:function(n,i){n&1&&(zi$1(0,`mat-card`,9)(1,`mat-card-content`)(2,`div`,10),pC(3,hn,4,1)(4,vn,6,1),pC(5,Rn,7,5,`div`,11),Vl()()()),n&2&&(ZE(3),hC(i.variant()===`get-started`?3:4),ZE(2),hC(i.hideActions()?-1:5))},dependencies:[T$1,I$1,F,ai$2,oi$1,J,Z],styles:[`[_nghost-%COMP%]{display:block}.upgrade-banner[_ngcontent-%COMP%]{--%NS%mat-card-container-color: var(--%NS%mat-sys-surface-container-highest);background-color:var(--%NS%mat-sys-surface-container-highest);background-image:radial-gradient(circle,color-mix(in srgb,var(--%NS%mat-sys-outline) 40%,transparent) 1.3px,transparent 1.3px);background-size:22px 22px;position:relative}.upgrade-banner[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:0;background:linear-gradient(to right,var(--%NS%mat-sys-surface-container-highest) 30%,transparent 80%);pointer-events:none;z-index:0}.banner-content[_ngcontent-%COMP%]{position:relative;z-index:1;padding:24px}.banner-headline[_ngcontent-%COMP%]{margin:0 0 8px;font-size:1.75em;font-style:italic;color:var(--%NS%mat-sys-primary);display:inline-block}.banner-usage[_ngcontent-%COMP%]{margin:0 0 8px;color:var(--%NS%mat-sys-on-surface)}.banner-description[_ngcontent-%COMP%]{margin:0 0 16px;color:var(--%NS%mat-sys-on-surface-variant)}.banner-actions[_ngcontent-%COMP%]{display:flex;gap:12px;flex-wrap:wrap}.upgrade-button[_ngcontent-%COMP%]{position:relative}.upgrade-button-spinner[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}
/*# sourceMappingURL=upgrade-banner.component-I6NGHDIV.css.map */`]})}}return t})();var re={billingEmail:`support@glitchtip.com`,stripePortalLoginUrl:`https://billing.stripe.com/p/login/aFa8wQbQngs69vu6SRds401`};var Mn={subscriptionCreationLoadingId:null};var ke=(()=>{class t extends a{constructor(){super(Mn),this.snackBar=_(Qt),this.subscriptionService=_(w),this.subscriptionCreationLoadingId=Tt(()=>this.state().subscriptionCreationLoadingId),this.productsResource=Ti$1(()=>({url:`/api/0/stripe/products/`})),this.products=Tt(()=>this.productsResource.value()?.map(e=>Q(z({},e),{defaultPrice:Q(z({},e.defaultPrice),{price:parseFloat(e.defaultPrice.price)}),prices:(e.prices||[]).map(n=>Q(z({},n),{price:parseFloat(n.price)})),marketingFeatures:e.marketingFeatures||[],name:e.name.startsWith(`GlitchTip `)?e.name.slice(10):e.name,description:e.description.replace(/\s*-\s*[Uu]p to .*/i,``).trim()})).sort((e,n)=>(e.defaultPrice.price||0)-(n.defaultPrice.price||0))||[])}dispatchSubscriptionCreation(e,n){this.setSubscriptionCreationStart(n.stripeID),n.price===0?this.createFreeSubscription(e,n.stripeID):this.redirectToSubscriptionCheckout(e.slug,n.stripeID)}async createFreeSubscription(e,n){let{data:i,error:s,response:m}=await ai$1.POST(`/api/0/stripe/subscriptions/`,{body:{organization:e.id,price:n}});if(m.status===400)return this.setSubscriptionCreationError(`This organization already has a subscription. Please reload page for latest details.`),null;if(m.status===404)return this.setSubscriptionCreationError(`Only organization owners can choose subscriptions. Make sure you are authorized to perform this action.`),null;if(s)throw this.setSubscriptionCreationError(`There was an error processing your request. Please try again`),s;return this.setState({subscriptionCreationLoadingId:null}),this.subscriptionService.subscriptionResource.reload(),i}async redirectToSubscriptionCheckout(e,n){let{data:i,error:s,response:m}=await ai$1.POST(`/api/0/stripe/organizations/{organization_slug}/create-stripe-subscription-checkout/`,{params:{path:{organization_slug:e}},body:{price:n}});if(m.status===404)return this.setSubscriptionCreationError(`Only organization owners can choose subscriptions. Make sure you are authorized to perform this action.`),null;if(s)throw this.setSubscriptionCreationError(`There was an error processing your request. Please try again`),s;return window.location.href=i.url,i}setSubscriptionCreationStart(e){this.setState({subscriptionCreationLoadingId:e})}setSubscriptionCreationError(e){this.setState({subscriptionCreationLoadingId:null}),this.snackBar.open(e)}static{this.ɵfac=function(n){return new(n||t)}}static{this.ɵprov=oe({token:t,factory:t.ɵfac,providedIn:`root`})}}return t})();function In(t,l){if(t&1){let e=TC();zi$1(0,`mat-button-toggle-group`,19),Fg(`change`,function(i){jd(e);return Vd(fT(4).billingInterval.set(i.value))}),zi$1(1,`mat-button-toggle`,20),cT(2,1),Vl(),zi$1(3,`mat-button-toggle`,21),cT(4,2),Vl()()}if(t&2)dg(`value`,fT(4).billingInterval())}function On(t,l){if(t&1&&(zi$1(0,`p`,16),cT(1,3),Vl()),t&2){let e=fT().$index,n=fT(2);ZE(),Pg(n[e-1].name),uT(1)}}function An(t,l){if(t&1&&(zi$1(0,`li`)(1,`mat-icon`,22),$T(2,`check_circle`),Vl(),$T(3),Vl()),t&2){let e=l.$implicit;ZE(3),Ul(` `,e,` `)}}function yn(t,l){if(t&1&&(zi$1(0,`ul`,17),yC(1,An,4,1,`li`,null,mC),Vl()),t&2){let e=fT().$implicit;ZE(),vC(e.marketingFeatures)}}function wn(t,l){t&1&&(zi$1(0,`p`,23),Og(1,4),fg(2,`span`,25)(3,`span`,26),Lg(),Vl())}function xn(t,l){if(t&1&&(zi$1(0,`p`,23)(1,`span`,25),$T(2),ib(3,`number`),Vl(),zi$1(4,`span`,26),cT(5,5),Vl()()),t&2){let e=fT();ZE(2),Ul(`$`,ab(3,2,e.price)),ZE(3),Pg(e.interval===`year`?`year`:`month`),uT(5)}}function Dn(t,l){if(t&1){let e=TC();pC(0,wn,4,0,`p`,23)(1,xn,6,4,`p`,23),zi$1(2,`gt-loading-button`,24),Fg(`buttonClick`,function(){let i=jd(e);return Vd(fT(4).onSubmit(i))}),Vl()}if(t&2){let e=l,n=fT(4);hC(e.price===0?0:1),ZE(2),dg(`loading`,n.subscriptionCreationLoadingId()===e.stripeID)}}function Fn(t,l){if(t&1&&(zi$1(0,`mat-card`)(1,`mat-card-content`)(2,`div`,11)(3,`div`,12)(4,`mat-card-title`),$T(5),Vl(),pC(6,In,5,1,`mat-button-toggle-group`,13),Vl(),zi$1(7,`p`,14),$T(8),Vl()(),zi$1(9,`div`,15),pC(10,On,2,1,`p`,16),pC(11,yn,3,0,`ul`,17),Vl(),zi$1(12,`div`,18),pC(13,Dn,3,2),Vl()()()),t&2){let e,n=l.$implicit,i=l.$index,s=fT(3);ZE(5),tm(n.name),ZE(),hC(n.defaultPrice.price>0&&s.hasAnnualPrice(n)?6:-1),ZE(2),tm(n.description),ZE(2),hC(i>0?10:-1),ZE(),hC(n.marketingFeatures.length>0?11:-1),ZE(2),hC((e=s.getActivePrice(n))?13:-1,e)}}function $n(t,l){if(t&1&&(zi$1(0,`div`)(1,`div`,7),yC(2,Fn,14,6,`mat-card`,null,mC),Vl(),zi$1(4,`div`,8)(5,`mat-card`)(6,`mat-card-content`),fg(7,`gt-event-info`),Vl()()(),zi$1(8,`p`,9),Og(9,0),fg(10,`a`,10),Lg(),Vl()()),t&2){let e=fT(),n=fT();zg(`dialog-body`,n.isDialog),ZE(2),vC(e),ZE(8),dg(`href`,ZT(`mailto:`,n.billingEmail),$p),Pg(n.billingEmail),uT(9)}}function Ln(t,l){t&1&&pC(0,$n,11,5,`div`,6),t&2&&hC(l.length?0:-1)}var We=(()=>{class t extends a$1{constructor(){let e=_(ke);super(e),this.organizationService=_(p),this.subscriptionService=_(w),this.dialogRef=_(T,{optional:!0}),this.isDialog=!!this.dialogRef,this.billingInterval=Ue(this.subscriptionService.subscription()?.price?.interval===`year`?`year`:`month`),this.products=this.service.products,this.subscriptionCreationLoadingId=this.service.subscriptionCreationLoadingId,this.billingEmail=re.billingEmail,this.service=e}ngOnInit(){this.service.productsResource.reload()}onSubmit(e){let n=this.organizationService.activeOrganization();n&&this.service.dispatchSubscriptionCreation(n,e)}hasAnnualPrice(e){return e.defaultPrice.interval===`year`||e.prices.some(n=>n.interval===`year`)}getActivePrice(e){let n=this.billingInterval();return e.defaultPrice.interval===n||e.defaultPrice.price===0?e.defaultPrice:e.prices.find(i=>i.interval===n)}static{this.ɵfac=function(n){return new(n||t)}}static{this.ɵcmp=Hw({type:t,selectors:[[`gt-payment`]],features:[ng],decls:1,vars:1,consts:()=>{let e;e=$localize`Questions about subscriptions? Need assistance, or a bigger plan? Contact us at ${`�#10�`}:START_LINK:${`�0�`}:INTERPOLATION:${`�/#10�`}:CLOSE_LINK:.`;let n;n=$localize`Monthly`;let i;i=$localize`Annual`;let s;s=$localize` Everything from ${`�0�`}:INTERPOLATION: + `;let m;m=$localize`${`�#2�`}:START_TAG_SPAN:Free${`[�/#2�|�/#3�]`}:CLOSE_TAG_SPAN:${`�#3�`}:START_TAG_SPAN_1:($0)${`[�/#2�|�/#3�]`}:CLOSE_TAG_SPAN:`,m=dT(m);let f;return f=$localize`/ ${`�0�`}:INTERPOLATION:`,[e,n,i,s,m,f,[3,`dialog-body`],[1,`plans`],[1,`event-info`],[1,`body-text`],[3,`href`],[1,`plan-top`],[1,`plan-top-row`],[`hideSingleSelectionIndicator`,``,1,`plan-interval-toggle`,3,`value`],[1,`plan-tagline`],[1,`plan-features`],[1,`features-heading`],[1,`value-props`],[1,`plan-bottom`],[`hideSingleSelectionIndicator`,``,1,`plan-interval-toggle`,3,`change`,`value`],[`value`,`month`],[`value`,`year`],[`color`,`primary`],[1,`plan-price`],[`buttonText`,`Select`,3,`buttonClick`,`loading`],[1,`price-amount`],[1,`price-detail`]]},template:function(n,i){if(n&1&&pC(0,Ln,1,1),n&2){let s;hC((s=i.products())?0:-1,s)}},dependencies:[T$1,I$1,F,_$1,yt$1,wt,ai$2,Dt,bt,nt,Ht,q,J$1,to],styles:[`[_nghost-%COMP%]{display:flex;flex-direction:column;overflow:hidden}.dialog-body[_ngcontent-%COMP%]{flex:1;overflow-y:auto;padding:24px 24px 0;background-color:var(--%NS%mat-sys-surface-container-low)}@media(max-width:1279px){.plans[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(285px,1fr));grid-gap:24px}}@media(min-width:1280px){.plans[_ngcontent-%COMP%]{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr);border-radius:4px}.plans[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] + mat-card[_ngcontent-%COMP%]{border-left:none}}.plans[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]{text-align:left}@media(min-width:1280px){.plans[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]{border-radius:0;--%NS%mat-card-container-elevation-shadow: none}.plans[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]:first-child{border-radius:4px 0 0 4px}.plans[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]:last-child{border-radius:0 4px 4px 0}}.plans[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%}.plan-top-row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;gap:8px}.plan-top-row[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]{font-size:1.25rem;font-weight:500;margin:0}.plan-interval-toggle[_ngcontent-%COMP%]{flex-shrink:0}.plan-tagline[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-on-surface-variant);font-size:.875rem;margin:4px 0 0}.plan-features[_ngcontent-%COMP%]{flex:1;margin-top:16px}.features-heading[_ngcontent-%COMP%]{font-weight:600;font-size:.875rem;margin:0 0 8px}.value-props[_ngcontent-%COMP%]{margin:0;padding:0}.value-props[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style:none;font-size:.85em;clear:both;margin-bottom:4px}.value-props[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{width:1em;height:1em;margin:.07em .3em .5em 0;font-size:1em;float:left;color:var(--%NS%mat-sys-primary)}.plan-bottom[_ngcontent-%COMP%]{margin-top:16px}.plan-price[_ngcontent-%COMP%]{margin:0 0 12px}.price-amount[_ngcontent-%COMP%]{font-size:1.75rem;font-weight:600}.price-detail[_ngcontent-%COMP%]{font-size:.875rem;color:var(--%NS%mat-sys-on-surface-variant)}.event-info[_ngcontent-%COMP%]{margin-top:24px;margin-bottom:24px}
/*# sourceMappingURL=payment.component-V7ZOX3HE.css.map */`]})}}return t})();var Gn=[`switch`];var Bn=[`*`];function kn(t,l){t&1&&(zi$1(0,`span`,11),Zd(),zi$1(1,`svg`,13),fg(2,`path`,14),Vl(),zi$1(3,`svg`,15),fg(4,`path`,16),Vl()())}var Un=new A(`mat-slide-toggle-default-options`,{providedIn:`root`,factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})});var ze=class{source;checked;constructor(l,e){this.source=l,this.checked=e}};var Se=(()=>{class t{_elementRef=_(Qr);_focusMonitor=_(yt);_changeDetectorRef=_(pV);defaults=_(Un);_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(e){return new ze(this,e)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=ts();_focused=!1;name=null;id;labelPosition=`after`;ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;fullWidth=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new Ye;toggleChange=new Ye;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){_(K).load(Re);let e=_(new Dm(`tabindex`),{optional:!0}),n=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=n.color||`accent`,this.id=this._uniqueId=_(Ne).getId(`mat-mdc-slide-toggle-`),this.hideIcon=n.hideIcon??!1,this.disabledInteractive=n.disabledInteractive??!1,this._labelId=this._uniqueId+`-label`}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{e===`keyboard`||e===`program`?(this._focused=!0,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(e){e.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorOnChange=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new ze(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static ɵfac=function(n){return new(n||t)};static ɵcmp=Hw({type:t,selectors:[[`mat-slide-toggle`]],viewQuery:function(n,i){if(n&1&&Bg(Gn,5),n&2){let s;yT(s=vT())&&(i._switchElement=s.first)}},hostAttrs:[1,`mat-mdc-slide-toggle`],hostVars:15,hostBindings:function(n,i){n&2&&(vg(`id`,i.id),ug(`tabindex`,null)(`aria-label`,null)(`name`,null)(`aria-labelledby`,null),AT(i.color?`mat-`+i.color:``),zg(`mat-mdc-slide-toggle-focused`,i._focused)(`mat-mdc-slide-toggle-checked`,i.checked)(`mat-slide-toggle-full-width`,i.fullWidth)(`_mat-animation-noopable`,i._noopAnimations))},inputs:{name:`name`,id:`id`,labelPosition:`labelPosition`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],required:[2,`required`,`required`,gV],color:`color`,disabled:[2,`disabled`,`disabled`,gV],fullWidth:[2,`fullWidth`,`fullWidth`,gV],disableRipple:[2,`disableRipple`,`disableRipple`,gV],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:mV(e)],checked:[2,`checked`,`checked`,gV],hideIcon:[2,`hideIcon`,`hideIcon`,gV],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,gV]},outputs:{change:`change`,toggleChange:`toggleChange`},exportAs:[`matSlideToggle`],features:[eb([{provide:ve,useExisting:zo(()=>t),multi:!0},{provide:E,useExisting:t,multi:!0}]),eI],ngContentSelectors:Bn,decls:14,vars:27,consts:[[`switch`,``],[`mat-internal-form-field`,``,3,`labelPosition`],[`role`,`switch`,`type`,`button`,1,`mdc-switch`,3,`click`,`tabIndex`,`disabled`],[1,`mat-mdc-slide-toggle-touch-target`],[1,`mdc-switch__track`],[1,`mdc-switch__handle-track`],[1,`mdc-switch__handle`],[1,`mdc-switch__shadow`],[1,`mdc-elevation-overlay`],[1,`mdc-switch__ripple`],[`mat-ripple`,``,1,`mat-mdc-slide-toggle-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mdc-switch__icons`],[1,`mdc-label`,3,`click`,`for`],[`viewBox`,`0 0 24 24`,`aria-hidden`,`true`,1,`mdc-switch__icon`,`mdc-switch__icon--on`],[`d`,`M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z`],[`viewBox`,`0 0 24 24`,`aria-hidden`,`true`,1,`mdc-switch__icon`,`mdc-switch__icon--off`],[`d`,`M20 13H4v-2h16v2z`]],template:function(n,i){if(n&1&&(hT(),zi$1(0,`div`,1)(1,`button`,2,0),Fg(`click`,function(){return i._handleClick()}),fg(3,`div`,3)(4,`span`,4),zi$1(5,`span`,5)(6,`span`,6)(7,`span`,7),fg(8,`span`,8),Vl(),zi$1(9,`span`,9),fg(10,`span`,10),Vl(),pC(11,kn,5,0,`span`,11),Vl()()(),zi$1(12,`label`,12),Fg(`click`,function(m){return m.stopPropagation()}),gT(13),Vl()()),n&2){let s=ET(2);dg(`labelPosition`,i.labelPosition),ZE(),zg(`mdc-switch--selected`,i.checked)(`mdc-switch--unselected`,!i.checked)(`mdc-switch--checked`,i.checked)(`mdc-switch--disabled`,i.disabled)(`mat-mdc-slide-toggle-disabled-interactive`,i.disabledInteractive),dg(`tabIndex`,i.disabled&&!i.disabledInteractive?-1:i.tabIndex)(`disabled`,i.disabled&&!i.disabledInteractive),ug(`id`,i.buttonId)(`name`,i.name)(`aria-label`,i.ariaLabel)(`aria-labelledby`,i._getAriaLabelledBy())(`aria-describedby`,i.ariaDescribedby)(`aria-required`,i.required||null)(`aria-checked`,i.checked)(`aria-disabled`,i.disabled&&i.disabledInteractive?`true`:null),ZE(9),dg(`matRippleTrigger`,s)(`matRippleDisabled`,i.disableRipple||i.disabled)(`matRippleCentered`,!0),ZE(),hC(i.hideIcon?-1:11),ZE(),dg(`for`,i.buttonId),ug(`id`,i._labelId)}},dependencies:[Mn$1,m],styles:[`.mdc-switch {
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  display: inline-flex;
  flex-shrink: 0;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 0;
  position: relative;
  width: var(--%NS%mat-slide-toggle-track-width, 52px);
}
.mdc-switch.mdc-switch--disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-switch.mat-mdc-slide-toggle-disabled-interactive {
  pointer-events: auto;
}

.mdc-switch__track {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: var(--%NS%mat-slide-toggle-track-height, 32px);
  border-radius: var(--%NS%mat-slide-toggle-track-shape, var(--%NS%mat-sys-corner-full));
}
.mdc-switch--disabled.mdc-switch .mdc-switch__track {
  opacity: var(--%NS%mat-slide-toggle-disabled-track-opacity, 0.12);
}
.mdc-switch__track::before, .mdc-switch__track::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  width: 100%;
  border-width: var(--%NS%mat-slide-toggle-track-outline-width, 2px);
  border-color: var(--%NS%mat-slide-toggle-track-outline-color, var(--%NS%mat-sys-outline));
}
.mdc-switch--selected .mdc-switch__track::before, .mdc-switch--selected .mdc-switch__track::after {
  border-width: var(--%NS%mat-slide-toggle-selected-track-outline-width, 2px);
  border-color: var(--%NS%mat-slide-toggle-selected-track-outline-color, transparent);
}
.mdc-switch--disabled .mdc-switch__track::before, .mdc-switch--disabled .mdc-switch__track::after {
  border-width: var(--%NS%mat-slide-toggle-disabled-unselected-track-outline-width, 2px);
  border-color: var(--%NS%mat-slide-toggle-disabled-unselected-track-outline-color, var(--%NS%mat-sys-on-surface));
}
@media (forced-colors: active) {
  .mdc-switch__track {
    border-color: currentColor;
  }
}
.mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: translateX(0);
  background: var(--%NS%mat-slide-toggle-unselected-track-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before {
  transform: translateX(-100%);
}
.mdc-switch--selected .mdc-switch__track::before {
  opacity: var(--%NS%mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--%NS%mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::before {
  opacity: var(--%NS%mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--%NS%mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before {
  background: var(--%NS%mat-slide-toggle-unselected-hover-track-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before {
  background: var(--%NS%mat-slide-toggle-unselected-focus-track-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch:enabled:active .mdc-switch__track::before {
  background: var(--%NS%mat-slide-toggle-unselected-pressed-track-color, var(--%NS%mat-sys-surface-variant));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:hover:not(:focus):not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:focus:not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:active .mdc-switch__track::before, .mdc-switch.mdc-switch--disabled .mdc-switch__track::before {
  background: var(--%NS%mat-slide-toggle-disabled-unselected-track-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch__track::after {
  transform: translateX(-100%);
  background: var(--%NS%mat-slide-toggle-selected-track-color, var(--%NS%mat-sys-primary));
}
[dir=rtl] .mdc-switch__track::after {
  transform: translateX(100%);
}
.mdc-switch--selected .mdc-switch__track::after {
  transform: translateX(0);
}
.mdc-switch--selected .mdc-switch__track::after {
  opacity: var(--%NS%mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--%NS%mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::after {
  opacity: var(--%NS%mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--%NS%mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after {
  background: var(--%NS%mat-slide-toggle-selected-hover-track-color, var(--%NS%mat-sys-primary));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after {
  background: var(--%NS%mat-slide-toggle-selected-focus-track-color, var(--%NS%mat-sys-primary));
}
.mdc-switch:enabled:active .mdc-switch__track::after {
  background: var(--%NS%mat-slide-toggle-selected-pressed-track-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:hover:not(:focus):not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:focus:not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:active .mdc-switch__track::after, .mdc-switch.mdc-switch--disabled .mdc-switch__track::after {
  background: var(--%NS%mat-slide-toggle-disabled-selected-track-color, var(--%NS%mat-sys-on-surface));
}

.mdc-switch__handle-track {
  height: 100%;
  pointer-events: none;
  position: absolute;
  top: 0;
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  left: 0;
  right: auto;
  transform: translateX(0);
  width: calc(100% - var(--%NS%mat-slide-toggle-handle-width));
}
[dir=rtl] .mdc-switch__handle-track {
  left: auto;
  right: 0;
}
.mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(-100%);
}

.mdc-switch__handle {
  display: flex;
  pointer-events: auto;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: auto;
  transition: width 75ms cubic-bezier(0.4, 0, 0.2, 1), height 75ms cubic-bezier(0.4, 0, 0.2, 1), margin 75ms cubic-bezier(0.4, 0, 0.2, 1);
  width: var(--%NS%mat-slide-toggle-handle-width);
  height: var(--%NS%mat-slide-toggle-handle-height);
  border-radius: var(--%NS%mat-slide-toggle-handle-shape, var(--%NS%mat-sys-corner-full));
}
[dir=rtl] .mdc-switch__handle {
  left: auto;
  right: 0;
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle {
  width: var(--%NS%mat-slide-toggle-unselected-handle-size, 16px);
  height: var(--%NS%mat-slide-toggle-unselected-handle-size, 16px);
  margin: var(--%NS%mat-slide-toggle-unselected-handle-horizontal-margin, 0 8px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--%NS%mat-slide-toggle-unselected-with-icon-handle-horizontal-margin, 0 4px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle {
  width: var(--%NS%mat-slide-toggle-selected-handle-size, 24px);
  height: var(--%NS%mat-slide-toggle-selected-handle-size, 24px);
  margin: var(--%NS%mat-slide-toggle-selected-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--%NS%mat-slide-toggle-selected-with-icon-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons) {
  width: var(--%NS%mat-slide-toggle-with-icon-handle-size, 24px);
  height: var(--%NS%mat-slide-toggle-with-icon-handle-size, 24px);
}
.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  width: var(--%NS%mat-slide-toggle-pressed-handle-size, 28px);
  height: var(--%NS%mat-slide-toggle-pressed-handle-size, 28px);
}
.mat-mdc-slide-toggle .mdc-switch--%NS%selected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--%NS%mat-slide-toggle-selected-pressed-handle-horizontal-margin, 0 22px);
}
.mat-mdc-slide-toggle .mdc-switch--%NS%unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--%NS%mat-slide-toggle-unselected-pressed-handle-horizontal-margin, 0 2px);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after {
  opacity: var(--%NS%mat-slide-toggle-disabled-selected-handle-opacity, 1);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after {
  opacity: var(--%NS%mat-slide-toggle-disabled-unselected-handle-opacity, 0.38);
}
.mdc-switch__handle::before, .mdc-switch__handle::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  width: 100%;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transition: background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1), border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}
@media (forced-colors: active) {
  .mdc-switch__handle::before, .mdc-switch__handle::after {
    border-color: currentColor;
  }
}
.mdc-switch--%NS%selected:enabled .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-selected-handle-color, var(--%NS%mat-sys-on-primary));
}
.mdc-switch--%NS%selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-selected-hover-handle-color, var(--%NS%mat-sys-primary-container));
}
.mdc-switch--%NS%selected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-selected-focus-handle-color, var(--%NS%mat-sys-primary-container));
}
.mdc-switch--%NS%selected:enabled:active .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-selected-pressed-handle-color, var(--%NS%mat-sys-primary-container));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--%NS%selected:hover:not(:focus):not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--%NS%selected:focus:not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--%NS%selected:active .mdc-switch__handle::after, .mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-disabled-selected-handle-color, var(--%NS%mat-sys-surface));
}
.mdc-switch--%NS%unselected:enabled .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-unselected-handle-color, var(--%NS%mat-sys-outline));
}
.mdc-switch--%NS%unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-unselected-hover-handle-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-switch--%NS%unselected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-unselected-focus-handle-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-switch--%NS%unselected:enabled:active .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-unselected-pressed-handle-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-disabled-unselected-handle-color, var(--%NS%mat-sys-on-surface));
}
.mdc-switch__handle::before {
  background: var(--%NS%mat-slide-toggle-handle-surface-color);
}

.mdc-switch__shadow {
  border-radius: inherit;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
.mdc-switch:enabled .mdc-switch__shadow {
  box-shadow: var(--%NS%mat-slide-toggle-handle-elevation-shadow);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:hover:not(:focus):not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:focus:not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:active .mdc-switch__shadow, .mdc-switch.mdc-switch--disabled .mdc-switch__shadow {
  box-shadow: var(--%NS%mat-slide-toggle-disabled-handle-elevation-shadow);
}

.mdc-switch__ripple {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  width: var(--%NS%mat-slide-toggle-state-layer-size, 40px);
  height: var(--%NS%mat-slide-toggle-state-layer-size, 40px);
}
.mdc-switch__ripple::after {
  content: "";
  opacity: 0;
}
.mdc-switch--disabled .mdc-switch__ripple::after {
  display: none;
}
.mat-mdc-slide-toggle-disabled-interactive .mdc-switch__ripple::after {
  display: block;
}
.mdc-switch:hover .mdc-switch__ripple::after {
  transition: 75ms opacity cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:enabled:focus .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:enabled:active .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after, .mdc-switch--%NS%unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-slide-toggle-unselected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mdc-switch--%NS%unselected:enabled:focus .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-unselected-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-slide-toggle-unselected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mdc-switch--%NS%unselected:enabled:active .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-unselected-pressed-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-slide-toggle-unselected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}
.mdc-switch--%NS%selected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-selected-hover-state-layer-color, var(--%NS%mat-sys-primary));
  opacity: var(--%NS%mat-slide-toggle-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mdc-switch--%NS%selected:enabled:focus .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-selected-focus-state-layer-color, var(--%NS%mat-sys-primary));
  opacity: var(--%NS%mat-slide-toggle-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mdc-switch--%NS%selected:enabled:active .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-selected-pressed-state-layer-color, var(--%NS%mat-sys-primary));
  opacity: var(--%NS%mat-slide-toggle-selected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}

.mdc-switch__icons {
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 1;
  transform: translateZ(0);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__icons {
  opacity: var(--%NS%mat-slide-toggle-disabled-unselected-icon-opacity, 0.38);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons {
  opacity: var(--%NS%mat-slide-toggle-disabled-selected-icon-opacity, 0.38);
}

.mdc-switch__icon {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  opacity: 0;
  transition: opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1);
}
.mdc-switch--unselected .mdc-switch__icon {
  width: var(--%NS%mat-slide-toggle-unselected-icon-size, 16px);
  height: var(--%NS%mat-slide-toggle-unselected-icon-size, 16px);
  fill: var(--%NS%mat-slide-toggle-unselected-icon-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--%NS%mat-slide-toggle-disabled-unselected-icon-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__icon {
  width: var(--%NS%mat-slide-toggle-selected-icon-size, 16px);
  height: var(--%NS%mat-slide-toggle-selected-icon-size, 16px);
  fill: var(--%NS%mat-slide-toggle-selected-icon-color, var(--%NS%mat-sys-on-primary-container));
}
.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--%NS%mat-slide-toggle-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface));
}

.mdc-switch--selected .mdc-switch__icon--on,
.mdc-switch--unselected .mdc-switch__icon--off {
  opacity: 1;
  transition: opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1);
}

.mat-mdc-slide-toggle {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  -webkit-tap-highlight-color: transparent;
  outline: 0;
}
.mat-mdc-slide-toggle .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,
.mat-mdc-slide-toggle .mdc-switch__ripple::after {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),
.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty) {
  transform: translateZ(0);
}
.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-slide-toggle .mat-internal-form-field {
  color: var(--%NS%mat-slide-toggle-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-slide-toggle-label-text-font, var(--%NS%mat-sys-body-medium-font));
  line-height: var(--%NS%mat-slide-toggle-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-slide-toggle-label-text-size, var(--%NS%mat-sys-body-medium-size));
  letter-spacing: var(--%NS%mat-slide-toggle-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  font-weight: var(--%NS%mat-slide-toggle-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
}
.mat-mdc-slide-toggle .mat-ripple-element {
  opacity: 0.12;
}
.mat-mdc-slide-toggle .mat-focus-indicator::before {
  border-radius: 50%;
}
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after {
  transition: none;
}
.mat-mdc-slide-toggle .mdc-switch:enabled + .mdc-label {
  cursor: pointer;
}
.mat-mdc-slide-toggle .mdc-switch--disabled + label {
  color: var(--%NS%mat-slide-toggle-disabled-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-slide-toggle label:empty {
  display: none;
}

.mat-slide-toggle-full-width {
  width: 100%;
}
.mat-slide-toggle-full-width .mat-internal-form-field {
  width: 100%;
  justify-content: space-between;
}
.mat-slide-toggle-full-width .mat-internal-form-field label {
  margin: 0;
  flex-grow: 1;
  text-align: end;
}
.mat-slide-toggle-full-width .mdc-form-field--align-end label {
  text-align: start;
}

.mat-mdc-slide-toggle-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--%NS%mat-slide-toggle-touch-target-size, 48px);
  width: 100%;
  transform: translate(-50%, -50%);
  display: var(--%NS%mat-slide-toggle-touch-target-display, block);
}
[dir=rtl] .mat-mdc-slide-toggle-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2})}return t})();var sn=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=$w({type:t});static ɵinj=hd({imports:[Se,Kr]})}return t})();var Xn=[`migrationDialog`];function Yn(t,l){t&1&&fg(0,`mat-spinner`,25)}function jn(t,l){t&1&&(zi$1(0,`p`,27),cT(1,3),Vl())}function qn(t,l){t&1&&(zi$1(0,`span`,33),cT(1,6),ib(2,`date`),Vl()),t&2&&(ZE(2),Pg(ab(2,1,l)),uT(1))}function Qn(t,l){t&1&&(zi$1(0,`p`,36),cT(1,7),Vl())}function Kn(t,l){t&1&&(zi$1(0,`p`,37),cT(1,8),Vl())}function Wn(t,l){if(t&1&&(zi$1(0,`mat-error`),cT(1,12),ib(2,`currency`),ib(3,`currency`),Vl()),t&2){let e=fT(4);ZE(3),Pg(ab(2,2,e.minCapDollars))(ab(3,4,e.maxCapDollars)),uT(1)}}function Zn(t,l){if(t&1){let e=TC();zi$1(0,`mat-form-field`,38)(1,`mat-label`),cT(2,9),Vl(),zi$1(3,`span`,39),$T(4,`$\xA0`),Vl(),zi$1(5,`input`,40),Fg(`input`,function(i){jd(e);return Vd(fT(3).onCapInput(i.target.value))}),Vl(),pC(6,Wn,4,6,`mat-error`),Vl(),zi$1(7,`div`,41)(8,`button`,42),Fg(`click`,function(){jd(e);return Vd(fT(3).saveCap())}),cT(9,10),Vl(),zi$1(10,`button`,43),Fg(`click`,function(){jd(e);return Vd(fT(3).cancelEditCap())}),cT(11,11),Vl()()}if(t&2){let e=fT(3);ZE(5),dg(`min`,e.minCapDollars)(`max`,e.maxCapDollars)(`value`,e.capInputDollars()),ZE(),hC(e.capValid()?-1:6),ZE(2),dg(`disabled`,e.loading()||!e.capValid()),ZE(2),dg(`disabled`,e.loading())}}function Jn(t,l){if(t&1){let e=TC();zi$1(0,`div`,30)(1,`span`,31),$T(2),ib(3,`currency`),Vl(),zi$1(4,`span`,33),cT(5,13),Vl()(),zi$1(6,`button`,44),Fg(`click`,function(){jd(e);return Vd(fT(3).startEditCap())}),cT(7,14),Vl()}if(t&2){let e=fT(3);ZE(2),tm(ab(3,2,e.capDollarsCurrent())),ZE(4),dg(`disabled`,!e.canManage())}}function ei(t,l){if(t&1&&(fg(0,`mat-divider`),zi$1(1,`div`,29)(2,`div`,30)(3,`span`,31),$T(4),ib(5,`currency`),zi$1(6,`span`,32),cT(7,4),Vl()(),pC(8,qn,3,3,`span`,33),Vl(),zi$1(9,`span`,34),$T(10),zi$1(11,`span`),cT(12,5),Vl()()(),fg(13,`mat-progress-bar`,35),pC(14,Qn,2,0,`p`,36)(15,Kn,2,0,`p`,37),fg(16,`mat-divider`),zi$1(17,`div`,29),pC(18,Zn,12,6)(19,Jn,8,4),Vl()),t&2){let e,n=fT(2);ZE(4),Ul(`≈ `,ab(5,7,n.costDollars()),` `),ZE(4),hC((e=n.resetDate())?8:-1,e),ZE(2),Ul(``,n.capProgressPercent(),`% `),ZE(3),dg(`value`,n.capProgressPercent())(`color`,n.capReached()?`warn`:`primary`),ZE(),hC(n.capReached()?14:n.willReachCap()?15:-1),ZE(4),hC(n.editingCap()?18:19)}}function ti(t,l){if(t&1&&(zi$1(0,`mat-error`,28),$T(1),Vl()),t&2){let e=fT(2);ZE(),tm(e.error())}}function ni(t,l){if(t&1){let e=TC();zi$1(0,`mat-card`,19)(1,`mat-card-content`)(2,`div`,20)(3,`div`,21)(4,`span`,22),cT(5,1),Vl(),zi$1(6,`p`,23),cT(7,2),Vl()(),zi$1(8,`div`,24),pC(9,Yn,1,0,`mat-spinner`,25),zi$1(10,`mat-slide-toggle`,26),Fg(`change`,function(i){jd(e);return Vd(fT().onToggle(i))}),Vl()()(),pC(11,jn,2,0,`p`,27),pC(12,ei,20,9),pC(13,ti,2,1,`mat-error`,28),Vl()()}if(t&2){let e=fT();ZE(9),hC(e.loading()?9:-1),ZE(),dg(`checked`,e.enabled())(`disabled`,e.loading()||!e.canManage()),ZE(),hC(e.canManage()?-1:11),ZE(),hC(e.enabled()?12:-1),ZE(),hC(e.error()?13:-1)}}function ii(t,l){if(t&1&&(zi$1(0,`h2`,45),cT(1,15),Vl(),zi$1(2,`mat-dialog-content`,46)(3,`p`,47),Og(4,16),fg(5,`strong`),ib(6,`currency`),Lg(),Vl()(),zi$1(7,`mat-dialog-actions`)(8,`button`,48),cT(9,17),Vl(),zi$1(10,`button`,49),cT(11,18),Vl()()),t&2){let e=fT();ZE(6),Pg(ab(6,2,e.capInputDollars())),uT(4),ZE(4),dg(`mat-dialog-close`,!0)}}var cn=100;var dn=1e8;var oi=50;var pn=(()=>{class t{constructor(){this.service=_(w),this.orgService=_(p),this.dialog=_(ee),this.migrationDialog=lV(`migrationDialog`),this.toggle=lV(Se),this.status=this.service.overageStatus,this.enabled=this.service.overageEnabled,this.capProgressPercent=this.service.capProgressPercent,this.capReached=this.service.capReached,this.willReachCap=this.service.willReachCap,this.loading=this.service.overageConfigLoading,this.error=this.service.overageConfigError,this.canManage=this.orgService.accessOrgAdmin,this.costDollars=Tt(()=>(this.status()?.overageCostCents??0)/100),this.capDollarsCurrent=Tt(()=>(this.status()?.capCents??0)/100),this.resetDate=Tt(()=>{let e=this.service.subscription();return e?.subscriptionCycleEnd??e?.currentPeriodEnd??null}),this.editingCap=Ue(!1),this.defaultCapDollars=Tt(()=>{let e=this.status()?.capCents??0;return e>0?e/100:oi}),this.capDollars=Ue(null),this.capInputDollars=Tt(()=>this.capDollars()??this.defaultCapDollars()),this.capCents=Tt(()=>Math.round(this.capInputDollars()*100)),this.capValid=Tt(()=>this.capCents()>=cn&&this.capCents()<=dn),this.minCapDollars=cn/100,this.maxCapDollars=dn/100}onCapInput(e){let n=Number.parseFloat(e);this.capDollars.set(Number.isFinite(n)?n:null)}async onToggle(e){if(e.checked&&!this.enabled()){if(!this.capValid()){this.resyncToggle();return}if(!await this.confirmMigration()){this.resyncToggle();return}await this.service.configureOverage(!0,this.capCents())||this.resyncToggle()}else if(!e.checked&&this.enabled()){let n=await this.service.configureOverage(!1,0);this.editingCap.set(!1),this.capDollars.set(null),n||this.resyncToggle()}}startEditCap(){this.editingCap.set(!0)}cancelEditCap(){this.editingCap.set(!1),this.capDollars.set(null)}async saveCap(){if(!this.capValid())return;await this.service.configureOverage(!0,this.capCents())&&this.editingCap.set(!1)}resyncToggle(){let e=this.toggle();e&&(e.checked=this.enabled())}confirmMigration(){let e=this.migrationDialog();return e?vy(this.dialog.open(e).afterClosed()).then(n=>n===!0):Promise.resolve(!1)}static{this.ɵfac=function(n){return new(n||t)}}static{this.ɵcmp=Hw({type:t,selectors:[[`gt-overage-card`]],viewQuery:function(n,i){n&1&&Ug(i.migrationDialog,Xn,5)(i.toggle,Se,5),n&2&&IT(2)},decls:3,vars:1,consts:()=>{let e;e=$localize`Toggle overage billing`;let n;n=$localize`Overage billing`;let i;i=$localize` Keep ingesting past your plan quota and pay only for the overflow, up to a monthly cap you set. At the cap, throttling resumes, so your bill never goes over the cap. `;let s;s=$localize` Only organization owners can change overage billing. `;let m;m=$localize`this cycle (estimate)`;let f;f=$localize`of cap`;let h;h=$localize`Resets ${`�0�`}:INTERPOLATION:`;let N;N=$localize` Spend cap reached. Events above your quota are being throttled again. Raise the cap to keep ingesting. `;let b;b=$localize` On track to reach your cap before the cycle ends. `;let w;w=$localize`Monthly spend cap`;let I;I=$localize` Save `;let B;B=$localize` Cancel `;let L;L=$localize`Enter a cap between ${`�0�`}:INTERPOLATION: and ${`�1�`}:INTERPOLATION_1:.`;let Ze;Ze=$localize`Monthly spend cap`;let Je;Je=$localize` Adjust cap `;let et;et=$localize`Turn on overage billing?`;let tt;tt=$localize` You're only charged for events above your plan quota, up to a ${`�#5�`}:START_TAG_STRONG:${`�0�`}:INTERPOLATION: monthly cap${`�/#5�`}:CLOSE_TAG_STRONG: you can change anytime. Your bill never goes over the cap. `;let nt;nt=$localize`Cancel`;let it;return it=$localize` Turn on overage billing `,[[`migrationDialog`,``],n,i,s,m,f,h,N,b,w,I,B,L,Ze,Je,et,tt,nt,it,[`appearance`,`outlined`,1,`overage-card`],[1,`overage-top`],[1,`overage-top-text`],[1,`body-text-strong`],[1,`overage-tagline`,`body-text`],[1,`overage-top-control`],[`diameter`,`20`],[`aria-label`,e,3,`change`,`checked`,`disabled`],[1,`overage-sub`,`overage-owner-note`],[1,`overage-error`],[1,`overage-row`],[1,`overage-row-main`],[1,`overage-amount`],[1,`overage-est-note`],[1,`overage-sub`],[1,`overage-percent`],[`mode`,`determinate`,3,`value`,`color`],[1,`overage-alert`,`overage-alert--warn`],[1,`overage-alert`],[`appearance`,`outline`,1,`cap-field`],[`matTextPrefix`,``],[`matInput`,``,`type`,`number`,`step`,`1`,3,`input`,`min`,`max`,`value`],[1,`overage-actions`],[`mat-flat-button`,``,`color`,`primary`,3,`click`,`disabled`],[`mat-button`,``,3,`click`,`disabled`],[`mat-stroked-button`,``,3,`click`,`disabled`],[`mat-dialog-title`,``],[1,`mat-typography`],[1,`body-text`],[`mat-button`,``,`mat-dialog-close`,``],[`mat-flat-button`,``,`color`,`primary`,3,`mat-dialog-close`]]},template:function(n,i){if(n&1&&(pC(0,ni,14,6,`mat-card`,19),og(1,ii,12,4,`ng-template`,null,0,ub)),n&2){let s;hC((s=i.status())?0:-1,s)}},dependencies:[T$1,I$1,F,ai$2,oi$1,Ht,Bt,jt,zt,Vt,f,u,nn,st,oe$1,Xt,Zt,Be,Pe,Z$1,L,J,Z,sn,Se,ro,Zi],styles:[`.overage-card[_ngcontent-%COMP%]{margin-top:16px}.overage-top[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:space-between;gap:16px}.overage-top-text[_ngcontent-%COMP%]{flex:1}.overage-tagline[_ngcontent-%COMP%]{margin:4px 0 0;color:var(--%NS%mat-sys-on-surface-variant)}.overage-top-control[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;flex-shrink:0}mat-divider[_ngcontent-%COMP%]{margin:16px 0}.overage-row[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:10px}.overage-row-main[_ngcontent-%COMP%]{display:flex;flex-direction:column}.overage-amount[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-title-medium)}.overage-est-note[_ngcontent-%COMP%], .overage-sub[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-body-small);color:var(--%NS%mat-sys-on-surface-variant)}.overage-owner-note[_ngcontent-%COMP%]{margin:8px 0 0}.overage-percent[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-body-medium);color:var(--%NS%mat-sys-on-surface-variant);white-space:nowrap}mat-progress-bar[_ngcontent-%COMP%]{border-radius:4px}.overage-alert[_ngcontent-%COMP%]{margin:10px 0 0;font:var(--%NS%mat-sys-body-small);color:var(--%NS%mat-sys-on-surface-variant)}.overage-alert--warn[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-error)}.cap-field[_ngcontent-%COMP%]{width:200px}.overage-actions[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;margin-top:8px}.overage-error[_ngcontent-%COMP%]{display:block;margin-top:12px}mat-dialog-actions[_ngcontent-%COMP%]{padding:0 24px 24px;justify-content:flex-end;gap:10px}
/*# sourceMappingURL=overage-card.component-IXESV64D.css.map */`]})}}return t})();var ai=[`containerRef`];function ri(t,l){if(t&1&&(zi$1(0,`div`,25)(1,`div`),$T(2),ib(3,`number`),Vl()()),t&2){let e=l.model;ZE(2),nm(``,e.name,`: `,cb(3,2,e.value,`1.0-1`))}}function li(t,l){if(t&1&&(zi$1(0,`div`,20,0)(2,`ng-charts-bar-vertical-stacked`,24),og(3,ri,4,5,`ng-template`,null,1,ub),Vl()()),t&2){let e=fT();ZE(2),dg(`results`,e.chartData())(`view`,e.view())(`customColors`,e.customColors)(`xAxis`,!0)(`yAxis`,!0)(`animations`,!0)(`showXAxisLabel`,!1)(`showYAxisLabel`,!1)(`legend`,!1)(`barPadding`,4)(`xAxisTickFormatting`,e.xAxisTickFormatting)(`noBarWhenZero`,!0)}}function si(t,l){t&1&&(zi$1(0,`div`,21),cT(1,8),Vl())}function ci(t,l){if(t&1&&(zi$1(0,`span`,23),cT(1,9),ib(2,`number`),Vl()),t&2){let e=fT();ZE(2),Pg(cb(2,1,e.predictedTotal(),`1.0-0`)),uT(1)}}var mn=(()=>{class t{constructor(){this.dailyEvents=aV([]),this.periodEnd=aV(null),this.predictedTotal=aV(null),this.view=Ue([600,200]),this.customColors=[{name:`Performance`,value:`var(--mat-sys-primary)`},{name:`Issues`,value:`var(--issues-color)`},{name:`Uptime`,value:`var(--uptime-color)`},{name:`Logs`,value:`var(--logs-color)`},{name:`Projected`,value:`var(--mat-sys-surface-container-high)`}],this.chartData=Tt(()=>{let e=this.dailyEvents(),n=this.periodEnd(),i=this.predictedTotal(),s=[];for(let m of e)s.push({name:m.date,series:[{name:`Performance`,value:m.transactionEventCount},{name:`Issues`,value:m.eventCount},{name:`Uptime`,value:m.uptimeCheckEventCount},{name:`Logs`,value:m.logEventCount}]});if(n&&i!==null&&e.length>0){let m=e.reduce((I,B)=>I+B.eventCount+B.transactionEventCount+B.uptimeCheckEventCount+B.logEventCount,0),f=Math.max(0,i-m),h=new Date(e[e.length-1].date),N=new Date(n),b=Math.max(1,Math.ceil((N.getTime()-h.getTime())/(1e3*60*60*24))),w=Math.round(f/b);for(let I=1;I<=b;I++){let B=new Date(h);if(B.setDate(B.getDate()+I),B>N)break;let L=B.toISOString().split(`T`)[0];s.push({name:L,series:[{name:`Projected`,value:w}]})}}return s}),this.xAxisTickFormatting=e=>{let n=new Date(e+`T00:00:00`),i=n.getDate();return i===1||i%3===0?new Intl.DateTimeFormat(`en-US`,{month:`short`,day:`numeric`}).format(n):``}}set containerRef(e){e?(this._containerRef=e,this.initializeResizeObserver()):this._containerRef&&(this.resizeObserver?.disconnect(),this._containerRef=void 0)}initializeResizeObserver(){this.resizeObserver?.disconnect(),this.resizeObserver=new ResizeObserver(e=>{let{width:n}=e[0].contentRect;this.view.set([n,200])}),this._containerRef&&this.resizeObserver.observe(this._containerRef.nativeElement)}ngOnDestroy(){this.resizeObserver?.disconnect()}static{this.ɵfac=function(n){return new(n||t)}}static{this.ɵcmp=Hw({type:t,selectors:[[`gt-daily-events-chart`]],viewQuery:function(n,i){if(n&1&&Bg(ai,5),n&2){let s;yT(s=vT())&&(i.containerRef=s.first)}},inputs:{dailyEvents:[1,`dailyEvents`],periodEnd:[1,`periodEnd`],predictedTotal:[1,`predictedTotal`]},decls:30,vars:2,consts:()=>{let e;e=$localize`Number of Events`;let n;n=$localize`Performance`;let i;i=$localize`Issues`;let s;s=$localize`Uptime`;let m;m=$localize`Logs`;let f;f=$localize`Projected`;let h;h=$localize`No event data available for this period.`;let N;return N=$localize`Predicted end of month: ~${`�0�`}:INTERPOLATION:`,[[`containerRef`,``],[`tooltipTemplate`,``],e,n,i,s,m,f,h,N,[`appearance`,`outlined`,1,`daily-chart-card`],[1,`chart-header`],[1,`body-text-strong`],[1,`chart-legend`],[1,`legend-item`],[1,`legend-swatch`,`legend-swatch--performance`],[1,`legend-swatch`,`legend-swatch--issues`],[1,`legend-swatch`,`legend-swatch--uptime`],[1,`legend-swatch`,`legend-swatch--logs`],[1,`legend-swatch`,`legend-swatch--projected`],[1,`chart-container`],[1,`chart-no-data`,`body-text-strong`],[1,`chart-footer`],[1,`caption-text`],[3,`results`,`view`,`customColors`,`xAxis`,`yAxis`,`animations`,`showXAxisLabel`,`showYAxisLabel`,`legend`,`barPadding`,`xAxisTickFormatting`,`noBarWhenZero`],[1,`tooltip`]]},template:function(n,i){n&1&&(zi$1(0,`mat-card`,10)(1,`mat-card-content`)(2,`div`,11)(3,`span`,12),cT(4,2),Vl(),zi$1(5,`div`,13)(6,`span`,14),fg(7,`span`,15),zi$1(8,`span`),cT(9,3),Vl()(),zi$1(10,`span`,14),fg(11,`span`,16),zi$1(12,`span`),cT(13,4),Vl()(),zi$1(14,`span`,14),fg(15,`span`,17),zi$1(16,`span`),cT(17,5),Vl()(),zi$1(18,`span`,14),fg(19,`span`,18),zi$1(20,`span`),cT(21,6),Vl()(),zi$1(22,`span`,14),fg(23,`span`,19),zi$1(24,`span`),cT(25,7),Vl()()()(),pC(26,li,5,12,`div`,20)(27,si,2,0,`div`,21),zi$1(28,`div`,22),pC(29,ci,3,4,`span`,23),Vl()()()),n&2&&(ZE(26),hC(i.chartData().length>0?26:27),ZE(3),hC(i.predictedTotal()!==null?29:-1))},dependencies:[o_,T$1,I$1,F,to],styles:[`.daily-chart-card[_ngcontent-%COMP%]{margin-top:16px}.chart-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;flex-wrap:wrap;gap:8px}.chart-legend[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:8px 16px;font-size:.85em}.legend-item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px}.legend-swatch[_ngcontent-%COMP%]{display:inline-block;width:12px;height:12px;border-radius:2px}.legend-swatch--performance[_ngcontent-%COMP%]{background-color:var(--%NS%mat-sys-primary)}.legend-swatch--issues[_ngcontent-%COMP%]{background-color:var(--%NS%issues-color)}.legend-swatch--uptime[_ngcontent-%COMP%]{background-color:var(--%NS%uptime-color)}.legend-swatch--logs[_ngcontent-%COMP%]{background-color:var(--%NS%logs-color)}.legend-swatch--projected[_ngcontent-%COMP%]{background-color:var(--%NS%mat-sys-surface-container-high)}.chart-container[_ngcontent-%COMP%]{width:100%;height:200px}.chart-no-data[_ngcontent-%COMP%]{padding:48px 24px;text-align:center;color:var(--%NS%mat-sys-on-surface-variant)}.chart-footer[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;flex-wrap:wrap;gap:4px;margin-top:8px}.tooltip[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-label-medium);padding:4px}
/*# sourceMappingURL=daily-events-chart.component-IOMFY5NP.css.map */`]})}}return t})();function di(t,l){t&1&&fg(0,`mat-spinner`,3)}function _i(t,l){if(t&1&&($T(0),ib(1,`number`)),t&2)Ul(` `,cb(1,1,fT().value(),`1.0-0`),` `)}function pi(t,l){t&1&&$T(0,` — `)}function mi(t,l){if(t&1&&(zi$1(0,`div`,4),$T(1),Vl()),t&2){let e=fT();ZE(),tm(e.subtitle())}}function gi(t,l){if(t&1&&fg(0,`mat-progress-bar`,5),t&2){let e=fT();dg(`value`,e.percent()>100?100:e.percent())(`color`,e.isOverLimit()?`warn`:`primary`)}}var gn=(()=>{class t{constructor(){this.title=aV.required(),this.value=aV.required(),this.eventsAllowed=aV.required(),this.limitThreshold=aV(80),this.loading=aV(!1),this.showLimits=aV(!0),this.percent=Tt(()=>{let e=this.value(),n=this.eventsAllowed();return!this.showLimits()||e==null||!n?0:Math.round(e/n*100)}),this.isOverLimit=Tt(()=>this.percent()>=this.limitThreshold()),this.subtitle=Tt(()=>{if(this.value()===null)return $localize`Not enough data`;if(!this.showLimits())return``;let n=this.percent();return n>=100&&this.limitThreshold()===100?$localize`Over limit`:`${n}% of limit (${this.eventsAllowed()})`})}static{this.ɵfac=function(n){return new(n||t)}}static{this.ɵcmp=Hw({type:t,selectors:[[`gt-summary-card`]],inputs:{title:[1,`title`],value:[1,`value`],eventsAllowed:[1,`eventsAllowed`],limitThreshold:[1,`limitThreshold`],loading:[1,`loading`],showLimits:[1,`showLimits`]},decls:10,vars:8,consts:[[`appearance`,`outlined`],[1,`summary-title`],[1,`summary-value`],[`diameter`,`24`],[1,`summary-subtitle`],[`mode`,`determinate`,3,`value`,`color`]],template:function(n,i){n&1&&(zi$1(0,`mat-card`,0)(1,`mat-card-content`)(2,`div`,1),$T(3),Vl(),zi$1(4,`div`,2),pC(5,di,1,0,`mat-spinner`,3)(6,_i,2,4)(7,pi,1,0),Vl(),pC(8,mi,2,1,`div`,4),pC(9,gi,1,2,`mat-progress-bar`,5),Vl()()),n&2&&(zg(`over-limit`,i.isOverLimit()),ZE(3),tm(i.title()),ZE(),zg(`over-limit-text`,i.isOverLimit()),ZE(),hC(i.loading()?5:i.value()!==null?6:7),ZE(3),hC(i.subtitle()?8:-1),ZE(),hC(i.showLimits()?9:-1))},dependencies:[T$1,I$1,F,Z$1,L,J,Z,to],styles:[`mat-card[_ngcontent-%COMP%]{text-align:center}.summary-title[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-label-large);color:var(--%NS%mat-sys-on-surface-variant);margin-bottom:8px}.summary-value[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;font-size:2.5rem;font-weight:500;color:var(--%NS%mat-sys-primary);line-height:1.2}.summary-subtitle[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-body-small);color:var(--%NS%mat-sys-on-surface-variant);margin-top:4px;margin-bottom:12px}.over-limit-text[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-error)}mat-progress-bar[_ngcontent-%COMP%]{border-radius:4px}
/*# sourceMappingURL=summary-card.component-QP2E4DOZ.css.map */`]})}}return t})();function ui(t,l){if(t&1&&fg(0,`gt-summary-card`,8),t&2){let e=fT();dg(`value`,e.predictedTotal())(`eventsAllowed`,e.totalEventsAllowed())(`limitThreshold`,100)(`loading`,e.currentPeriodLoading())(`showLimits`,e.showLimits())}}function Si(t,l){if(t&1){let e=TC();zi$1(0,`mat-card`,10)(1,`mat-card-content`)(2,`div`,11)(3,`span`,12),cT(4,0),Vl(),zi$1(5,`button`,13),Fg(`click`,function(){jd(e);return Vd(fT().openEventInfo())}),zi$1(6,`mat-icon`),$T(7,`help`),Vl()()(),zi$1(8,`div`,14)(9,`span`,15),cT(10,1),Vl(),zi$1(11,`div`,16),fg(12,`div`,17),Vl(),zi$1(13,`span`,18),$T(14),ib(15,`number`),Vl()(),zi$1(16,`div`,14)(17,`span`,15),cT(18,2),Vl(),zi$1(19,`div`,16),fg(20,`div`,19),Vl(),zi$1(21,`span`,18),$T(22),ib(23,`number`),Vl()(),zi$1(24,`div`,14)(25,`span`,15),cT(26,3),Vl(),zi$1(27,`div`,16),fg(28,`div`,20),Vl(),zi$1(29,`span`,18),$T(30),ib(31,`number`),Vl()(),zi$1(32,`div`,14)(33,`span`,15),cT(34,4),Vl(),zi$1(35,`div`,16),fg(36,`div`,21),Vl(),zi$1(37,`span`,18),$T(38),ib(39,`number`),Vl()(),zi$1(40,`div`,22),cT(41,5),Vl()()()}if(t&2){let e=l;ZE(12),Gg(`width`,e.performance.percent,`%`),ZE(2),nm(``,cb(15,17,e.performance.count,`1.0-0`),` (`,e.performance.percent,`%)`),ZE(6),Gg(`width`,e.issues.percent,`%`),ZE(2),nm(``,cb(23,20,e.issues.count,`1.0-0`),` (`,e.issues.percent,`%)`),ZE(6),Gg(`width`,e.uptime.percent,`%`),ZE(2),nm(``,cb(31,23,e.uptime.count,`1.0-1`),` (`,e.uptime.percent,`%)`),ZE(6),Gg(`width`,e.logs.percent,`%`),ZE(2),nm(``,cb(39,26,e.logs.count,`1.0-1`),` (`,e.logs.percent,`%)`),ZE(3),Pg(e.fileSizeMb),uT(41)}}function Ci(t,l){t&1&&(zi$1(0,`mat-card`,10)(1,`mat-card-content`)(2,`div`,23),fg(3,`mat-spinner`,24),Vl()()())}var He=(()=>{class t{constructor(){this.subscriptionService=_(w),this.dialog=_(ee),this.totalEventsAllowed=aV.required(),this.showLimits=aV(!0),this.currentPeriodLabel=aV($localize`This Month`),this.previousPeriodLabel=aV($localize`Last Month`),this.eventsCountCurrentPeriod=this.subscriptionService.eventsCountCurrentPeriod,this.previousPeriod=this.subscriptionService.eventsCountPreviousPeriod,this.predictedTotal=this.subscriptionService.predictedEndOfMonth,this.subscription=this.subscriptionService.subscription,this.dailyEvents=this.subscriptionService.dailyEvents,this.periodEnd=Tt(()=>{let e=this.subscription();return e?.subscriptionCycleEnd??e?.currentPeriodEnd??null}),this.currentPeriodLoading=this.subscriptionService.currentPeriodLoading,this.previousPeriodLoading=this.subscriptionService.previousPeriodLoading,this.previousPeriodTotal=Tt(()=>{let e=this.previousPeriod();return e?e.total??e.eventCount+e.transactionEventCount+(e.uptimeCheckEventCount??0)+(e.logEventCount??0):null}),this.eventBreakdown=Tt(()=>{let e=this.eventsCountCurrentPeriod();if(!e)return null;let n=e.total||1;return{performance:{count:e.transactionEventCount??0,percent:Math.round((e.transactionEventCount??0)/n*100)},issues:{count:e.eventCount??0,percent:Math.round((e.eventCount??0)/n*100)},uptime:{count:e.uptimeCheckEventCount??0,percent:Math.round((e.uptimeCheckEventCount??0)/n*100)},logs:{count:e.logEventCount??0,percent:Math.round((e.logEventCount??0)/n*100)},fileSizeMb:e.fileSizeMb??0}})}openEventInfo(){this.dialog.open(J$1)}static{this.ɵfac=function(n){return new(n||t)}}static{this.ɵcmp=Hw({type:t,selectors:[[`gt-subscription-charts`]],inputs:{totalEventsAllowed:[1,`totalEventsAllowed`],showLimits:[1,`showLimits`],currentPeriodLabel:[1,`currentPeriodLabel`],previousPeriodLabel:[1,`previousPeriodLabel`]},decls:7,vars:15,consts:()=>{let e;e=$localize`Predicted End of Month`;let n;n=$localize`Event Breakdown`;let i;i=$localize`Performance`;let s;s=$localize`Issues`;let m;m=$localize`Uptime`;let f;f=$localize`Logs`;let h;return h=$localize`File storage: ${`�0�`}:INTERPOLATION: MB`,[n,i,s,m,f,h,[1,`summary-cards`],[3,`title`,`value`,`eventsAllowed`,`loading`,`showLimits`],[`title`,e,3,`value`,`eventsAllowed`,`limitThreshold`,`loading`,`showLimits`],[3,`dailyEvents`,`periodEnd`,`predictedTotal`],[`appearance`,`outlined`,1,`breakdown-card`],[1,`breakdown-header`],[1,`breakdown-title`,`body-text-strong`],[`mat-icon-button`,``,`aria-label`,`How are events counted?`,1,`info-button`,3,`click`],[1,`breakdown-row`],[1,`breakdown-label`],[1,`breakdown-bar-track`],[1,`breakdown-bar`,`breakdown-bar--performance`],[1,`breakdown-value`],[1,`breakdown-bar`,`breakdown-bar--issues`],[1,`breakdown-bar`,`breakdown-bar--uptime`],[1,`breakdown-bar`,`breakdown-bar--logs`],[1,`breakdown-file-storage`],[1,`spinner-container`],[`diameter`,`36`]]},template:function(n,i){if(n&1&&(zi$1(0,`div`,6),fg(1,`gt-summary-card`,7)(2,`gt-summary-card`,7),pC(3,ui,1,5,`gt-summary-card`,8),Vl(),fg(4,`gt-daily-events-chart`,9),pC(5,Si,42,29,`mat-card`,10)(6,Ci,4,0,`mat-card`,10)),n&2){let s;ZE(),dg(`title`,i.currentPeriodLabel())(`value`,i.eventsCountCurrentPeriod()?.total??null)(`eventsAllowed`,i.totalEventsAllowed())(`loading`,i.currentPeriodLoading())(`showLimits`,i.showLimits()),ZE(),dg(`title`,i.previousPeriodLabel())(`value`,i.previousPeriodTotal())(`eventsAllowed`,i.totalEventsAllowed())(`loading`,i.previousPeriodLoading())(`showLimits`,i.showLimits()),ZE(),hC(i.showLimits()?3:-1),ZE(),dg(`dailyEvents`,i.dailyEvents())(`periodEnd`,i.showLimits()?i.periodEnd():null)(`predictedTotal`,i.showLimits()?i.predictedTotal():null),ZE(),hC((s=i.eventBreakdown())?5:i.currentPeriodLoading()?6:-1,s)}},dependencies:[T$1,I$1,F,J,Z,mn,gn,yt$1,wt,ai$2,ln$1,to],styles:[`.summary-cards[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:24px;margin-bottom:8px}@media screen and (max-width:599px){.summary-cards[_ngcontent-%COMP%]{grid-template-columns:1fr}}.spinner-container[_ngcontent-%COMP%]{display:flex;justify-content:center;width:100%;padding:24px 0}.breakdown-card[_ngcontent-%COMP%]{margin-top:16px}.breakdown-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px;margin-bottom:16px}.breakdown-header[_ngcontent-%COMP%]   .info-button[_ngcontent-%COMP%]{width:28px;height:28px;line-height:28px;opacity:.6}.breakdown-header[_ngcontent-%COMP%]   .info-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px}.breakdown-title[_ngcontent-%COMP%]{margin-bottom:0}.breakdown-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:120px 1fr auto;align-items:center;gap:16px;margin-bottom:12px}@media(max-width:600px){.breakdown-row[_ngcontent-%COMP%]{grid-template-columns:1fr auto;grid-template-rows:auto auto;gap:4px 8px}.breakdown-row[_ngcontent-%COMP%]   .breakdown-bar-track[_ngcontent-%COMP%]{grid-column:1/-1;grid-row:2}}.breakdown-label[_ngcontent-%COMP%]{font-weight:500}.breakdown-bar-track[_ngcontent-%COMP%]{height:24px;background-color:var(--%NS%mat-sys-surface-container-high);border-radius:4px;overflow:hidden}.breakdown-bar[_ngcontent-%COMP%]{height:100%;border-radius:4px;min-width:0}.breakdown-bar--performance[_ngcontent-%COMP%]{background-color:var(--%NS%mat-sys-primary)}.breakdown-bar--issues[_ngcontent-%COMP%]{background-color:var(--%NS%issues-color)}.breakdown-bar--uptime[_ngcontent-%COMP%]{background-color:var(--%NS%uptime-color)}.breakdown-bar--logs[_ngcontent-%COMP%]{background-color:var(--%NS%logs-color)}.breakdown-value[_ngcontent-%COMP%]{font-weight:600;white-space:nowrap;min-width:100px;text-align:right}.breakdown-file-storage[_ngcontent-%COMP%]{margin-top:8px;color:var(--%NS%mat-sys-on-surface-variant)}
/*# sourceMappingURL=subscription-charts.component-BXR67IJK.css.map */`]})}}return t})();var un=(()=>{class t{constructor(){this.#e=Ti$1(()=>({url:`/api/0/instance-license/`})),this.billingEmail=Tt(()=>this.#e.value()?.billingEmail??``)}#e;static{this.ɵfac=function(n){return new(n||t)}}static{this.ɵprov=oe({token:t,factory:t.ɵfac,providedIn:`root`})}}return t})();function Ti(t,l){t&1&&(zi$1(0,`p`,7),cT(1,3),Vl())}var Sn=(()=>{class t{constructor(){this.isSuperuser=aV(!1)}static{this.ɵfac=function(n){return new(n||t)}}static{this.ɵcmp=Hw({type:t,selectors:[[`gt-support-banner`]],inputs:{isSuperuser:[1,`isSuperuser`]},decls:14,vars:1,consts:()=>{let e;e=$localize`Get priority support for your GlitchTip deployment`;let n;n=$localize` Priority email and live chat support direct from the engineers who build GlitchTip. `;let i;i=$localize`Get a support plan`;let s;return s=$localize` Add your license key in Django admin once subscribed. `,[e,n,i,s,[`appearance`,`outlined`,1,`support-banner`],[1,`banner-content`],[1,`banner-headline`],[1,`banner-description`],[1,`banner-actions`],[`mat-flat-button`,``,`color`,`primary`,`href`,`https://glitchtip.com/pricing?plan=self-hosted`,`target`,`_blank`,`rel`,`noopener`]]},template:function(n,i){n&1&&(zi$1(0,`mat-card`,4)(1,`mat-card-content`)(2,`div`,5)(3,`h2`,6),cT(4,0),Vl(),zi$1(5,`p`,7),cT(6,1),Vl(),pC(7,Ti,2,0,`p`,7),zi$1(8,`div`,8)(9,`a`,9)(10,`span`),cT(11,2),Vl(),zi$1(12,`mat-icon`),$T(13,`open_in_new`),Vl()()()()()()),n&2&&(ZE(7),hC(i.isSuperuser()?7:-1))},dependencies:[T$1,I$1,F,ai$2,oi$1,yt$1,wt],styles:[`[_nghost-%COMP%]{display:block}.support-banner[_ngcontent-%COMP%]{--%NS%mat-card-container-color: var(--%NS%mat-sys-surface-container-highest);background-color:var(--%NS%mat-sys-surface-container-highest);background-image:radial-gradient(circle,color-mix(in srgb,var(--%NS%mat-sys-outline) 40%,transparent) 1.3px,transparent 1.3px);background-size:22px 22px;position:relative}.support-banner[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:0;background:linear-gradient(to right,var(--%NS%mat-sys-surface-container-highest) 30%,transparent 80%);pointer-events:none;z-index:0}.banner-content[_ngcontent-%COMP%]{position:relative;z-index:1;padding:24px}.banner-headline[_ngcontent-%COMP%]{margin:0 0 8px;font-size:1.75em;font-style:italic;color:var(--%NS%mat-sys-primary);display:inline-block}.banner-description[_ngcontent-%COMP%]{margin:0 0 8px;color:var(--%NS%mat-sys-on-surface-variant)}.banner-description[_ngcontent-%COMP%]:last-of-type{margin-bottom:16px}.banner-actions[_ngcontent-%COMP%]{display:flex;gap:12px;flex-wrap:wrap}
/*# sourceMappingURL=support-banner.component-U4X3FA32.css.map */`]})}}return t})();function hi(t,l){t&1&&fg(0,`mat-spinner`,35)}function Ei(t,l){if(t&1){let e=TC();zi$1(0,`button`,34),Fg(`click`,function(){jd(e);return Vd(fT().manageBilling())}),zi$1(1,`span`),cT(2,8),Vl(),zi$1(3,`mat-icon`),$T(4,`open_in_new`),Vl(),pC(5,hi,1,0,`mat-spinner`,35),Vl()}if(t&2){let e=fT();dg(`disabled`,e.manageBillingLoading()),ZE(),Gg(`visibility`,e.manageBillingLoading()?`hidden`:`visible`),ZE(2),Gg(`visibility`,e.manageBillingLoading()?`hidden`:`visible`),ZE(2),hC(e.manageBillingLoading()?5:-1)}}function fi(t,l){if(t&1&&fg(0,`gt-support-banner`,17),t&2)dg(`isSuperuser`,fT().isSuperuser())}function Ni(t,l){if(t&1&&(zi$1(0,`p`,21),Og(1,9),fg(2,`a`,36),Lg(),Vl()),t&2){let e=fT();ZE(2),dg(`href`,ZT(`mailto:`,e.billingEmail),$p),Pg(e.billingEmail),uT(1)}}function Pi(t,l){t&1&&(zi$1(0,`a`,29)(1,`mat-icon`,25),$T(2,`favorite`),Vl(),zi$1(3,`div`,26)(4,`span`,19),cT(5,10),Vl(),zi$1(6,`span`,27),cT(7,11),Vl()(),zi$1(8,`mat-icon`,28),$T(9,`open_in_new`),Vl()())}var Cn=(()=>{class t{constructor(){this.settings=_(Mi$1),this.instanceLicense=_(un),this.userService=_(I),this.billingEmail=re.billingEmail,this.paidForGlitchTip=this.settings.paidForGlitchTip,this.isSuperuser=Tt(()=>this.userService.user()?.isSuperuser??!1),this.manageBillingLoading=Ue(!1),this.currentPeriodLabel=$localize`Last 30 Days`,this.previousPeriodLabel=$localize`Previous 30 Days`}manageBilling(){this.manageBillingLoading.set(!0);let e=this.instanceLicense.billingEmail(),n=e?`${re.stripePortalLoginUrl}?prefilled_email=${encodeURIComponent(e)}`:re.stripePortalLoginUrl;window.location.href=n}static{this.ɵfac=function(n){return new(n||t)}}static{this.ɵcmp=Hw({type:t,selectors:[[`gt-self-hosted-subscription`]],decls:43,vars:8,consts:()=>{let e;e=$localize`Subscription`;let n;n=$localize`Self-Hosted`;let i;i=$localize`Usage: Last 30 Days`;let s;s=$localize`Contribute Code`;let m;m=$localize`Help build GlitchTip on GitLab`;let f;f=$localize`Try GlitchTip Cloud`;let h;h=$localize`Let us handle hosting, updates, and backups for you.`;let N;N=$localize`Get Started`;let b;b=$localize`Manage Billing`;let w;w=$localize` Questions? Contact us at ${`�#2�`}:START_LINK:${`�0�`}:INTERPOLATION:${`�/#2�`}:CLOSE_LINK:. `;let I;I=$localize`Donate`;let B;return B=$localize`Support open source development on Liberapay`,[e,n,i,s,m,f,h,N,b,w,I,B,[`slot`,`left`],[1,`section-header-text`],[`slot`,`right`],[`mat-stroked-button`,``,1,`manage-billing-button`,3,`disabled`],[1,`l-body`],[3,`isSuperuser`],[1,`plan-header`],[1,`body-text-strong`],[`vertical`,``],[1,`body-text`],[3,`totalEventsAllowed`,`showLimits`,`currentPeriodLabel`,`previousPeriodLabel`],[1,`contribute-row`],[`href`,`https://gitlab.com/glitchtip/glitchtip`,`target`,`_blank`,`rel`,`noopener`,1,`contribute-card`],[1,`contribute-icon`],[1,`contribute-text`],[1,`caption-text`],[1,`external-icon`],[`href`,`https://liberapay.com/GlitchTip/donate`,`target`,`_blank`,`rel`,`noopener`,1,`contribute-card`],[1,`cloud-cta`],[1,`cloud-cta-icon`],[1,`cloud-cta-text`],[`mat-stroked-button`,``,`href`,`https://app.glitchtip.com`,`target`,`_blank`,`rel`,`noopener`],[`mat-stroked-button`,``,1,`manage-billing-button`,3,`click`,`disabled`],[`diameter`,`18`,1,`manage-billing-spinner`],[3,`href`]]},template:function(n,i){n&1&&(zi$1(0,`gt-top-app-bar`),$l(1,12),zi$1(2,`h1`,13),cT(3,0),Vl(),vs(),$l(4,14),pC(5,Ei,6,6,`button`,15),vs(),Vl(),zi$1(6,`section`,16),pC(7,fi,1,1,`gt-support-banner`,17),zi$1(8,`mat-card`)(9,`mat-card-content`)(10,`div`,18)(11,`span`,19),cT(12,1),Vl(),fg(13,`mat-divider`,20),zi$1(14,`span`,21),cT(15,2),Vl()(),fg(16,`mat-divider`)(17,`gt-subscription-charts`,22),pC(18,Ni,3,3,`p`,21),Vl()(),zi$1(19,`div`,23)(20,`a`,24)(21,`mat-icon`,25),$T(22,`code`),Vl(),zi$1(23,`div`,26)(24,`span`,19),cT(25,3),Vl(),zi$1(26,`span`,27),cT(27,4),Vl()(),zi$1(28,`mat-icon`,28),$T(29,`open_in_new`),Vl()(),pC(30,Pi,10,0,`a`,29),Vl(),zi$1(31,`mat-card`)(32,`mat-card-content`)(33,`div`,30)(34,`mat-icon`,31),$T(35,`cloud`),Vl(),zi$1(36,`div`,32)(37,`span`,19),cT(38,5),Vl(),zi$1(39,`span`,27),cT(40,6),Vl()(),zi$1(41,`a`,33),cT(42,7),Vl()()()()()),n&2&&(ZE(5),hC(i.paidForGlitchTip()?5:-1),ZE(2),hC(i.paidForGlitchTip()?-1:7),ZE(10),dg(`totalEventsAllowed`,null)(`showLimits`,!1)(`currentPeriodLabel`,i.currentPeriodLabel)(`previousPeriodLabel`,i.previousPeriodLabel),ZE(),hC(i.billingEmail?18:-1),ZE(12),hC(i.paidForGlitchTip()?-1:30))},dependencies:[f$1,T$1,I$1,F,ai$2,oi$1,yt$1,wt,f,u,J,Z,He,Sn],styles:[`mat-card[_ngcontent-%COMP%], .contribute-row[_ngcontent-%COMP%]{margin-top:24px;margin-bottom:24px}.contribute-row[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}@media screen and (min-width:600px){.contribute-row[_ngcontent-%COMP%]{flex-direction:row}.contribute-row[_ngcontent-%COMP%]   .contribute-card[_ngcontent-%COMP%]{flex:1}}.body-text[_ngcontent-%COMP%]{margin-bottom:0}.manage-billing-button[_ngcontent-%COMP%]{position:relative}.manage-billing-spinner[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.contribute-card[_ngcontent-%COMP%]{display:flex;align-items:center;gap:16px;padding:16px 20px;border:1px solid var(--%NS%mat-sys-outline-variant);border-radius:4px;background-color:var(--%NS%mat-sys-surface);color:var(--%NS%mat-sys-on-surface);text-decoration:none;transition:background-color .15s ease}.contribute-card[_ngcontent-%COMP%]:hover{background-color:var(--%NS%mat-sys-surface-container)}.contribute-card[_ngcontent-%COMP%]   .contribute-icon[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-on-surface);flex-shrink:0}.contribute-card[_ngcontent-%COMP%]   .contribute-text[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1;gap:2px}.contribute-card[_ngcontent-%COMP%]   .external-icon[_ngcontent-%COMP%]{flex-shrink:0;color:var(--%NS%mat-sys-on-surface-variant);font-size:18px;width:18px;height:18px}.plan-header[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px;padding:12px 0}.plan-header[_ngcontent-%COMP%]   mat-divider[_ngcontent-%COMP%]{display:none}.plan-header[_ngcontent-%COMP%]   .body-text[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-on-surface-variant);font-size:.875rem;margin:0}@media screen and (min-width:600px){.plan-header[_ngcontent-%COMP%]{flex-direction:row;align-items:center;gap:16px}.plan-header[_ngcontent-%COMP%]   .body-text[_ngcontent-%COMP%]{font-size:inherit}.plan-header[_ngcontent-%COMP%]   mat-divider[_ngcontent-%COMP%]{display:block;height:24px}}.cloud-cta[_ngcontent-%COMP%]{display:flex;align-items:center;gap:16px;flex-wrap:wrap}.cloud-cta[_ngcontent-%COMP%]   .cloud-cta-icon[_ngcontent-%COMP%]{flex-shrink:0;color:var(--%NS%mat-sys-primary);font-size:32px;width:32px;height:32px}.cloud-cta[_ngcontent-%COMP%]   .cloud-cta-text[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1;min-width:200px;gap:2px}.caption-text[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-on-surface-variant)}
/*# sourceMappingURL=self-hosted-subscription.component-C66AZIGZ.css.map */`]})}}return t})();var vi=t=>[`/`,t,`settings`,`projects`,`new`];function bi(t,l){t&1&&fg(0,`mat-spinner`,19)}function Ri(t,l){if(t&1){let e=TC();zi$1(0,`button`,16),Fg(`click`,function(){jd(e);return Vd(fT(2).manageSubscription())}),zi$1(1,`span`,17),cT(2,1),Vl(),zi$1(3,`span`,18),cT(4,2),Vl(),zi$1(5,`mat-icon`),$T(6,`open_in_new`),Vl(),pC(7,bi,1,0,`mat-spinner`,19),Vl()}if(t&2){let e=fT(2);dg(`disabled`,e.billingPortalLoading()),ZE(),Gg(`visibility`,e.billingPortalLoading()?`hidden`:`visible`),ZE(2),Gg(`visibility`,e.billingPortalLoading()?`hidden`:`visible`),ZE(2),Gg(`visibility`,e.billingPortalLoading()?`hidden`:`visible`),ZE(2),hC(e.billingPortalLoading()?7:-1)}}function Mi(t,l){t&1&&(zi$1(0,`span`,15),$T(1,`Redirected from Stripe`),Vl())}function Ii(t,l){t&1&&(zi$1(0,`div`,20),fg(1,`mat-spinner`,21),Vl())}function Oi(t,l){if(t&1&&(zi$1(0,`div`),$T(1,` GlitchTip was unable to find a subscription for your account. If you just signed up for a subscription on our payment platform, please contact us at `),zi$1(2,`a`,22),$T(3),Vl(),$T(4,`. `),Vl()),t&2){let e=fT(3);ZE(2),dg(`href`,ZT(`mailto:`,e.billingEmail),$p),ZE(),tm(e.billingEmail)}}function Ai(t,l){if(t&1&&(zi$1(0,`mat-card`),fg(1,`mat-card-header`),zi$1(2,`mat-card-content`),pC(3,Ii,2,0,`div`,20),pC(4,Oi,5,3,`div`),Vl()()),t&2){let e=fT(2);ZE(3),hC(e.subscriptionLoading()?3:-1),ZE(),hC(e.subscriptionRefreshTimeout()?4:-1)}}function yi(t,l){if(t&1){let e=TC();zi$1(0,`gt-upgrade-banner`,25),Fg(`upgradeClick`,function(){jd(e);return Vd(fT(4).upgradeToNextPlan())})(`comparePlansClick`,function(){jd(e);return Vd(fT(4).openBuiltInPricing())}),Vl()}if(t&2){let e=fT(4);dg(`usagePercent`,e.thisMonthPercent()>=80?e.thisMonthPercent():null)(`nextPlanEvents`,e.nextProduct()?.events??null)(`upgradeLoading`,e.upgradeLoading())}}function wi(t,l){t&1&&(zi$1(0,`p`,26),cT(1,5),Vl())}function xi(t,l){t&1&&(zi$1(0,`p`,24),cT(1,6),Vl())}function Di(t,l){if(t&1&&cT(0,3,1),t&2){let e=fT(5);Pg(e.daysRemaining())(e.daysRemaining()===1?`day`:`days`),uT(0)}}function Fi(t,l){t&1&&fg(0,`gt-overage-card`)}function $i(t,l){if(t&1&&(pC(0,wi,2,0,`p`,26),pC(1,xi,2,0,`p`,24),zi$1(2,`div`,27)(3,`span`,15),$T(4),Vl(),fg(5,`mat-divider`,28),zi$1(6,`span`,24),Og(7,3),ib(8,`date`),ib(9,`date`),pC(10,Di,1,2),Lg(),Vl()(),fg(11,`mat-divider`)(12,`gt-subscription-charts`,29),pC(13,Fi,1,0,`gt-overage-card`),zi$1(14,`p`,24),Og(15,4),fg(16,`a`,22),Lg(),Vl(),zi$1(17,`mat-error`),$T(18),Vl()),t&2){let e=fT(),n=fT(3);hC(e.status===`trialing`?0:-1),ZE(),hC(e.status===`past_due`?1:-1),ZE(3),tm(e.product.name),ZE(6),hC(n.daysRemaining()!==null?10:-1),Pg(ab(8,12,e.subscriptionCycleStart??e.currentPeriodStart))(ab(9,14,e.subscriptionCycleEnd??e.currentPeriodEnd)),uT(7),ZE(2),dg(`totalEventsAllowed`,n.totalEventsAllowed()),ZE(),hC(n.showOverageCard()?13:-1),ZE(3),dg(`href`,ZT(`mailto:`,n.billingEmail),$p),Pg(n.billingEmail),uT(15),ZE(2),tm(n.billingPortalLoadingError())}}function Li(t,l){t&1&&(zi$1(0,`p`,24),cT(1,7),Vl())}function Gi(t,l){t&1&&(zi$1(0,`a`,30),cT(1,9),Vl()),t&2&&dg(`routerLink`,nb(1,vi,l))}function Bi(t,l){if(t&1&&(zi$1(0,`mat-card`)(1,`mat-card-content`)(2,`p`),cT(3,8),Vl(),pC(4,Gi,2,3,`a`,30),Vl()()),t&2){let e,n=fT(4);ZE(4),hC((e=n.activeOrganizationSlug())?4:-1,e)}}function ki(t,l){if(t&1&&(pC(0,yi,1,3,`gt-upgrade-banner`,23),zi$1(1,`mat-card`)(2,`mat-card-content`)(3,`div`),pC(4,$i,19,16)(5,Li,2,0,`p`,24),Vl()()(),pC(6,Bi,5,1,`mat-card`)),t&2){let e=l,n=fT(3);hC(e.effectivePrice===0?0:-1),ZE(4),hC(e.status===`active`||e.status===`trialing`||e.status===`past_due`?4:5),ZE(2),hC(n.promptForProject()?6:-1)}}function Ui(t,l){if(t&1&&fg(0,`gt-upgrade-banner`,31)(1,`gt-payment`),t&2){let e=fT(3);dg(`hideActions`,!0)(`freeEventLimit`,e.freeEventLimit())}}function zi(t,l){if(t&1&&(pC(0,ki,7,3),pC(1,Ui,2,2)),t&2){let e,n=fT(2);hC((e=n.subscription())?0:-1,e),ZE(),hC(!n.subscription()||n.subscription().status===`canceled`?1:-1)}}function Hi(t,l){if(t&1&&(zi$1(0,`gt-top-app-bar`),$l(1,10),zi$1(2,`h1`,11),cT(3,0),Vl(),vs(),$l(4,12),pC(5,Ri,8,8,`button`,13),vs(),Vl(),zi$1(6,`section`,14),pC(7,Mi,2,0,`span`,15),pC(8,Ai,5,2,`mat-card`)(9,zi,2,2),Vl()),t&2){let e=fT();ZE(5),hC(e.subscription()&&e.subscription().status!==`canceled`?5:-1),ZE(2),hC(e.fromStripe()?7:-1),ZE(),hC(e.subscriptionLoading()||e.subscriptionRefreshTimeout()?8:9)}}function Vi(t,l){t&1&&fg(0,`gt-self-hosted-subscription`)}var $r=[{path:``,component:(()=>{class t extends a$1{constructor(){let e=_(w),n=_(he);super(e),this.orgService=_(p),this.settingsService=_(Mi$1),this.paymentService=_(ke),this.dialog=_(ee),this.isHosted=Tt(()=>this.settingsService.initialLoad()?this.settingsService.billingEnabled()===!0:null),this.orgSlug=aV.required({alias:`org-slug`}),this.sessionId=aV(``,{alias:`session_id`}),this.billingPortalRedirect=aV(``,{alias:`billing_portal_redirect`}),this.fromStripe=this.service.fromStripe,this.subscription=this.service.subscription,this.subscriptionLoading=this.service.subscriptionLoading,this.subscriptionRefreshTimeout=this.service.subscriptionRefreshTimeout,this.totalEventsAllowed=this.service.totalEventsAllowed,this.showOverageCard=Tt(()=>this.service.overageEligible()&&this.service.overageConfigured()),this.activeOrganization=this.orgService.activeOrganization,this.activeOrganizationSlug=this.orgService.activeOrganizationSlug,this.billingPortalLoading=this.service.billingPortalLoading,this.billingPortalLoadingError=this.service.billingPortalLoadingError,this.upgradeLoading=Tt(()=>this.paymentService.subscriptionCreationLoadingId()!==null),this.daysRemaining=Tt(()=>{let i=this.service.subscription(),s=i?.subscriptionCycleEnd??i?.currentPeriodEnd;if(!s)return null;let m=new Date(s),f=new Date,h=Math.ceil((m.getTime()-f.getTime())/(1e3*60*60*24));return Math.max(0,h)}),this.promptForProject=Tt(()=>{let i=this.orgService.activeOrganizationLoaded(),s=this.orgService.projectsCount(),m=this.service.subscription();return m?!!(i&&s===0&&m.status!==null&&m.status!==`canceled`):!1}),this.thisMonthPercent=this.service.thisMonthPercent,this.billingEmail=re.billingEmail,this.nextProduct=Tt(()=>{let i=this.subscription(),s=this.paymentService.products();if(!i||!s.length)return null;let m=i.product.events??0;return s.filter(h=>h.events>m).sort((h,N)=>h.events-N.events)[0]??null}),this.freeEventLimit=Tt(()=>this.paymentService.products().find(m=>m.defaultPrice?.price===0)?.events??null),this.service=e,e.setDetailActive(!0),n.onDestroy(()=>e.setDetailActive(!1)),ec(()=>{this.isHosted()===!0&&(this.paymentService.productsResource.reload(),this.sessionId()&&this.service.refreshUntilSubscriptionOrTimeout(),this.billingPortalRedirect()&&this.orgService.repeatRefreshOrgDetail())})}manageSubscription(){this.service.redirectToBillingPortal()}upgradeToNextPlan(){let e=this.nextProduct(),n=this.orgService.activeOrganization(),i=this.subscription();if(!e||!n)return;let s=i?.price?.interval,m=e.defaultPrice.interval===s&&e.defaultPrice||e.prices.find(f=>f.interval===s);m&&this.paymentService.dispatchSubscriptionCreation(n,m)}openBuiltInPricing(){this.dialog.open(We,{width:`90vw`,maxWidth:`1200px`,maxHeight:`90vh`})}static{this.ɵfac=function(n){return new(n||t)}}static{this.ɵcmp=Hw({type:t,selectors:[[`gt-subscription`]],inputs:{orgSlug:[1,`org-slug`,`orgSlug`],sessionId:[1,`session_id`,`sessionId`],billingPortalRedirect:[1,`billing_portal_redirect`,`billingPortalRedirect`]},features:[ng],decls:2,vars:1,consts:()=>{let e;e=$localize`Subscription`;let n;n=$localize`Manage Subscription`;let i;i=$localize`Manage`;let s;s=$localize`Billing Cycle: ${`�0�`}:INTERPOLATION: to ${`�1�`}:INTERPOLATION_1: ${`�*10:1�`}:START_BLOCK_IF: (${`�0:1�`}:INTERPOLATION_2: ${`�1:1�`}:INTERPOLATION_3: remaining) ${`�/*10:1�`}:CLOSE_BLOCK_IF:`;let m;m=$localize`If you have questions about your subscription, please contact us at ${`�#16�`}:START_LINK:${`�0�`}:INTERPOLATION:${`�/#16�`}:CLOSE_LINK:. `;let f;f=$localize`This organization has a trial subscription to GlitchTip.`;let h;h=$localize`This organization has a subscription to GlitchTip, but the payment is past due.`;let N;N=$localize`This organization does not have an active subscription to GlitchTip. Pick a plan to get started.`;let b;b=$localize`Now that you have an organization and a subscription, create a project.`;let w;return w=$localize`Create New Project`,[e,n,i,s,m,f,h,N,b,w,[`slot`,`left`],[1,`section-header-text`],[`slot`,`right`],[`mat-stroked-button`,``,1,`manage-subscription-button`,3,`disabled`],[1,`l-body`],[1,`body-text-strong`],[`mat-stroked-button`,``,1,`manage-subscription-button`,3,`click`,`disabled`],[1,`manage-subscription-text-long`],[1,`manage-subscription-text-short`],[`diameter`,`18`,1,`manage-subscription-spinner`],[1,`spinner-container`],[`diameter`,`36`],[3,`href`],[3,`usagePercent`,`nextPlanEvents`,`upgradeLoading`],[1,`body-text`],[3,`upgradeClick`,`comparePlansClick`,`usagePercent`,`nextPlanEvents`,`upgradeLoading`],[1,`body-text`,`no-bottom-margin`],[1,`plan-header`],[`vertical`,``],[3,`totalEventsAllowed`],[`mat-flat-button`,``,`color`,`primary`,3,`routerLink`],[`variant`,`get-started`,1,`get-started-banner`,3,`hideActions`,`freeEventLimit`]]},template:function(n,i){n&1&&pC(0,Hi,10,3)(1,Vi,1,0,`gt-self-hosted-subscription`),n&2&&hC(i.isHosted()===!0?0:i.isHosted()===!1?1:-1)},dependencies:[f$1,T$1,I$1,F,k,kt,ai$2,oi$1,nn,Xt,J,Z,f,u,yt$1,wt,He,ln,We,Cn,pn,Zi],styles:[`.manage-subscription-button[_ngcontent-%COMP%]{position:relative}.manage-subscription-spinner[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}@media screen and (min-width:600px){.manage-subscription-text-short[_ngcontent-%COMP%]{display:none}}@media screen and (max-width:599px){.manage-subscription-text-long[_ngcontent-%COMP%]{display:none}}mat-card[_ngcontent-%COMP%]{margin-top:24px;margin-bottom:24px}.body-text[_ngcontent-%COMP%]{margin-bottom:0}.plan-header[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px;padding:12px 0}.plan-header[_ngcontent-%COMP%]   mat-divider[_ngcontent-%COMP%]{display:none}.plan-header[_ngcontent-%COMP%]   .body-text[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-on-surface-variant);font-size:.875rem;margin:0}@media screen and (min-width:600px){.plan-header[_ngcontent-%COMP%]   .body-text[_ngcontent-%COMP%]{font-size:inherit}.plan-header[_ngcontent-%COMP%]{flex-direction:row;align-items:center;gap:16px}.plan-header[_ngcontent-%COMP%]   mat-divider[_ngcontent-%COMP%]{display:block;height:24px}}mat-error[_ngcontent-%COMP%]{margin-bottom:10px;display:block}.get-started-banner[_ngcontent-%COMP%]{margin-bottom:24px}.spinner-container[_ngcontent-%COMP%]{display:flex;justify-content:center;width:100%}
/*# sourceMappingURL=subscription.component-2S4JQTLZ.css.map */`]})}}return t})()}];export{$r as default};
//# debugId=f9ba5512-0b4c-5b41-8e09-a1a874c7c020
//# sourceMappingURL=chunk-RqK-Acvv.js.map