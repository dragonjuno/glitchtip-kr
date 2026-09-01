import{$t as Ye$1,A as Fy,B as Hr,Cr as ms,E as Fc,Ei as zg,Er as ng,Fn as ev,Fr as pC,Gt as Ww,Jn as hT,Kn as gy,Lr as pe,Ot as Qr,P as Gs,R as Hl,Rr as pg,Si as ys,Tt as Q,U as II,Un as gT,V as Hw,Wn as gV,Zn as hd,b as Dn,c as A,fn as _r,fr as ke$1,h as Br,hn as aV,in as ZE,jn as eI,k as Fv,ki as zr,l as AT,lt as M,m as Bn,oi as ug,p as Bl,qn as hC,rn as Z,s as $w,t as $,ui as vV,un as _,ut as ME,wi as z,xr as mV,zn as fe}from"./chunk-CydAPAPE.js";import{_ as Qn}from"./chunk-DzW0_8HQ.js";import{A as ne,H as yt$1,N as pi,O as h,R as ts,b as Vr,d as Kr,f as Ne$1,h as Te$1,i as C,j as ns,l as Ie$1,o as D,p as Ot,r as Ae$1,t as $r,u as K,x as Wr,y as V}from"./chunk-C5jr27J8.js";var R=(function(i){return i[i.FADING_IN=0]=`FADING_IN`,i[i.VISIBLE=1]=`VISIBLE`,i[i.FADING_OUT=2]=`FADING_OUT`,i[i.HIDDEN=3]=`HIDDEN`,i})(R||{});var It=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=R.HIDDEN;constructor(e,t,n,o=!1){this._renderer=e,this.element=t,this.config=n,this._animationForciblyDisabledThroughCss=o}fadeOut(){this._renderer.fadeOutRipple(this)}};var Se=Te$1({passive:!0,capture:!0});var Vt=class{_events=new Map;addHandler(e,t,n,o){let a=this._events.get(t);if(a){let r=a.get(n);r?r.add(o):a.set(n,new Set([o]))}else this._events.set(t,new Map([[n,new Set([o])]])),e.runOutsideAngular(()=>{document.addEventListener(t,this._delegateEventHandler,Se)})}removeHandler(e,t,n){let o=this._events.get(e);if(!o)return;let a=o.get(t);a&&(a.delete(n),a.size===0&&o.delete(t),o.size===0&&(this._events.delete(e),document.removeEventListener(e,this._delegateEventHandler,Se)))}_delegateEventHandler=e=>{let t=D(e);t&&this._events.get(e.type)?.forEach((n,o)=>{(o===t||o.contains(t))&&n.forEach(a=>a.handleEvent(e))})}};var rt={enterDuration:225,exitDuration:150};var Qe=800;var we=Te$1({passive:!0,capture:!0});var xe=[`mousedown`,`touchstart`];var Ne=[`mouseup`,`mouseleave`,`touchend`,`touchcancel`];var Je=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵcmp=Hw({type:i,selectors:[[`ng-component`]],hostAttrs:[`mat-ripple-style-loader`,``],decls:0,vars:0,template:function(n,o){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--%NS%mat-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2})}return i})();var st=class i{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Vt;constructor(e,t,n,o,a){this._target=e,this._ngZone=t,this._platform=o,o.isBrowser&&(this._containerElement=C(n)),a&&a.get(K).load(Je)}fadeInRipple(e,t,n={}){let o=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),a=z(z({},rt),n.animation);n.centered&&(e=o.left+o.width/2,t=o.top+o.height/2);let r=n.radius||tn(e,t,o),c=e-o.left,d=t-o.top,m=a.enterDuration,l=document.createElement(`div`);l.classList.add(`mat-ripple-element`),l.style.left=`${c-r}px`,l.style.top=`${d-r}px`,l.style.height=`${r*2}px`,l.style.width=`${r*2}px`,n.color!=null&&(l.style.backgroundColor=n.color),l.style.transitionDuration=`${m}ms`,this._containerElement.appendChild(l);let h=window.getComputedStyle(l),g=h.transitionProperty,_=h.transitionDuration,f=g===`none`||_===`0s`||_===`0s, 0s`||o.width===0&&o.height===0,p=new It(this,l,n,f);l.style.transform=`scale3d(1, 1, 1)`,p.state=R.FADING_IN,n.persistent||(this._mostRecentTransientRipple=p);let j=null;return!f&&(m||a.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let ne=()=>{j&&(j.fallbackTimer=null),clearTimeout(ie),this._finishRippleTransition(p)},Ot=()=>this._destroyRipple(p),ie=setTimeout(Ot,m+100);l.addEventListener(`transitionend`,ne),l.addEventListener(`transitioncancel`,Ot),j={onTransitionEnd:ne,onTransitionCancel:Ot,fallbackTimer:ie}}),this._activeRipples.set(p,j),(f||!m)&&this._finishRippleTransition(p),p}fadeOutRipple(e){if(e.state===R.FADING_OUT||e.state===R.HIDDEN)return;let t=e.element,n=z(z({},rt),e.config.animation);t.style.transitionDuration=`${n.exitDuration}ms`,t.style.opacity=`0`,e.state=R.FADING_OUT,(e._animationForciblyDisabledThroughCss||!n.exitDuration)&&this._finishRippleTransition(e)}fadeOutAll(){this._getActiveRipples().forEach(e=>e.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(e=>{e.config.persistent||e.fadeOut()})}setupTriggerEvents(e){let t=C(e);!this._platform.isBrowser||!t||t===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=t,xe.forEach(n=>{i._eventManager.addHandler(this._ngZone,n,t,this)}))}handleEvent(e){e.type===`mousedown`?this._onMousedown(e):e.type===`touchstart`?this._onTouchStart(e):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Ne.forEach(t=>{this._triggerElement.addEventListener(t,this,we)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(e){e.state===R.FADING_IN?this._startFadeOutTransition(e):e.state===R.FADING_OUT&&this._destroyRipple(e)}_startFadeOutTransition(e){let t=e===this._mostRecentTransientRipple,{persistent:n}=e.config;e.state=R.VISIBLE,!n&&(!t||!this._isPointerDown)&&e.fadeOut()}_destroyRipple(e){let t=this._activeRipples.get(e)??null;this._activeRipples.delete(e),this._activeRipples.size||(this._containerRect=null),e===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),e.state=R.HIDDEN,t!==null&&(e.element.removeEventListener(`transitionend`,t.onTransitionEnd),e.element.removeEventListener(`transitioncancel`,t.onTransitionCancel),t.fallbackTimer!==null&&clearTimeout(t.fallbackTimer)),e.element.remove()}_onMousedown(e){let t=Ae$1(e),n=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+Qe;!this._target.rippleDisabled&&!t&&!n&&(this._isPointerDown=!0,this.fadeInRipple(e.clientX,e.clientY,this._target.rippleConfig))}_onTouchStart(e){if(!this._target.rippleDisabled&&!Ie$1(e)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let t=e.changedTouches;if(t)for(let n=0;n<t.length;n++)this.fadeInRipple(t[n].clientX,t[n].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(e=>{let t=e.state===R.VISIBLE||e.config.terminateOnPointerUp&&e.state===R.FADING_IN;!e.config.persistent&&t&&e.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let e=this._triggerElement;e&&(xe.forEach(t=>i._eventManager.removeHandler(t,e,this)),this._pointerUpEventsRegistered&&(Ne.forEach(t=>e.removeEventListener(t,this,we)),this._pointerUpEventsRegistered=!1))}};function tn(i,e,t){let n=Math.max(Math.abs(i-t.left),Math.abs(i-t.right)),o=Math.max(Math.abs(e-t.top),Math.abs(e-t.bottom));return Math.sqrt(n*n+o*o)}var Lt=new A(`mat-ripple-global-options`);var Mn=(()=>{class i{_elementRef=_(Qr);_animationsDisabled=ts();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(t){t&&this.fadeOutAllNonPersistent(),this._disabled=t,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(t){this._trigger=t,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let t=_(ke$1),n=_(h),o=_(Lt,{optional:!0}),a=_(pe);this._globalOptions=o||{},this._rippleRenderer=new st(this,t,this._elementRef,n,a)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:z(z(z({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(t,n=0,o){return typeof t==`number`?this._rippleRenderer.fadeInRipple(t,n,z(z({},this.rippleConfig),o)):this._rippleRenderer.fadeInRipple(0,0,z(z({},this.rippleConfig),t))}static ɵfac=function(n){return new(n||i)};static ɵdir=Ww({type:i,selectors:[[``,`mat-ripple`,``],[``,`matRipple`,``]],hostAttrs:[1,`mat-ripple`],hostVars:2,hostBindings:function(n,o){n&2&&zg(`mat-ripple-unbounded`,o.unbounded)},inputs:{color:[0,`matRippleColor`,`color`],unbounded:[0,`matRippleUnbounded`,`unbounded`],centered:[0,`matRippleCentered`,`centered`],radius:[0,`matRippleRadius`,`radius`],animation:[0,`matRippleAnimation`,`animation`],disabled:[0,`matRippleDisabled`,`disabled`],trigger:[0,`matRippleTrigger`,`trigger`]},exportAs:[`matRipple`]})}return i})();var en={capture:!0};var nn=[`focus`,`mousedown`,`mouseenter`,`touchstart`];var jt=`mat-ripple-loader-uninitialized`;var Yt=`mat-ripple-loader-class-name`;var Ce=`mat-ripple-loader-centered`;var _t=`mat-ripple-loader-disabled`;var ke=(()=>{class i{_document=_(_r);_animationsDisabled=ts();_globalRippleOptions=_(Lt,{optional:!0});_platform=_(h);_ngZone=_(ke$1);_injector=_(pe);_eventCleanups;_hosts=new Map;constructor(){let t=_(Br).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>nn.map(n=>t.listen(this._document,n,this._onInteraction,en)))}ngOnDestroy(){let t=this._hosts.keys();for(let n of t)this.destroyRipple(n);this._eventCleanups.forEach(n=>n())}configureRipple(t,n){t.setAttribute(jt,this._globalRippleOptions?.namespace??``),(n.className||!t.hasAttribute(Yt))&&t.setAttribute(Yt,n.className||``),n.centered&&t.setAttribute(Ce,``),n.disabled&&t.setAttribute(_t,``)}setDisabled(t,n){let o=this._hosts.get(t);o?(o.target.rippleDisabled=n,!n&&!o.hasSetUpEvents&&(o.hasSetUpEvents=!0,o.renderer.setupTriggerEvents(t))):n?t.setAttribute(_t,``):t.removeAttribute(_t)}_onInteraction=t=>{let n=D(t);if(n instanceof HTMLElement){let o=n.closest(`[${jt}="${this._globalRippleOptions?.namespace??``}"]`);o&&this._createRipple(o)}};_createRipple(t){if(!this._document||this._hosts.has(t))return;t.querySelector(`.mat-ripple`)?.remove();let n=this._document.createElement(`span`);n.classList.add(`mat-ripple`,t.getAttribute(Yt)),t.append(n);let o=this._globalRippleOptions,a=this._animationsDisabled?0:o?.animation?.enterDuration??rt.enterDuration,r=this._animationsDisabled?0:o?.animation?.exitDuration??rt.exitDuration,c={rippleDisabled:this._animationsDisabled||o?.disabled||t.hasAttribute(_t),rippleConfig:{centered:t.hasAttribute(Ce),terminateOnPointerUp:o?.terminateOnPointerUp,animation:{enterDuration:a,exitDuration:r}}},d=new st(c,this._ngZone,n,this._platform,this._injector),m=!c.rippleDisabled;m&&d.setupTriggerEvents(t),this._hosts.set(t,{target:c,renderer:d,hasSetUpEvents:m}),t.removeAttribute(jt)}destroyRipple(t){let n=this._hosts.get(t);n&&(n.renderer._removeTriggerEvents(),this._hosts.delete(t))}static ɵfac=function(n){return new(n||i)};static ɵprov=zr({token:i,factory:i.ɵfac})}return i})();var Re=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵcmp=Hw({type:i,selectors:[[`structural-styles`]],decls:0,vars:0,template:function(n,o){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--%NS%mat-focus-indicator-display, none);
  border-width: var(--%NS%mat-focus-indicator-border-width, 3px);
  border-style: var(--%NS%mat-focus-indicator-border-style, solid);
  border-color: var(--%NS%mat-focus-indicator-border-color, transparent);
  border-radius: var(--%NS%mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --%NS%mat-focus-indicator-display: block;
    --%NS%mat-focus-indicator-fallback-border-style: none;
  }
}
`],encapsulation:2})}return i})();var on=[`*`,[[``,`progressIndicator`,``]]];var an=[`*`,`[progressIndicator]`];function rn(i,e){i&1&&(Hl(0,`div`,1),gT(1,1),Bl())}var sn=new A(`MAT_BUTTON_CONFIG`);function Ee(i){return i==null?void 0:mV(i)}var Ht=(()=>{class i{_elementRef=_(Qr);_ngZone=_(ke$1);_animationsDisabled=ts();_config=_(sn,{optional:!0});_focusMonitor=_(yt$1);_cleanupClick;_renderer=_(Fc);_rippleLoader=_(ke);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=t,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(t){this.tabIndex=t}showProgress=aV(!1,{transform:gV});constructor(){_(K).load(Re);let t=this._elementRef.nativeElement;this._isAnchor=t.tagName===`A`,this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(t,{className:`mat-mdc-button-ripple`})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(t=`program`,n){t?this._focusMonitor.focusVia(this._elementRef.nativeElement,t,n):this._elementRef.nativeElement.focus(n)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,`click`,t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}))}static ɵfac=function(n){return new(n||i)};static ɵdir=Ww({type:i,hostAttrs:[1,`mat-mdc-button-base`],hostVars:15,hostBindings:function(n,o){n&2&&(ug(`disabled`,o._getDisabledAttribute())(`aria-disabled`,o._getAriaDisabled())(`tabindex`,o._getTabIndex()),AT(o.color?`mat-`+o.color:``),zg(`mat-mdc-button-progress-indicator-shown`,o.showProgress())(`mat-mdc-button-disabled`,o.disabled)(`mat-mdc-button-disabled-interactive`,o.disabledInteractive)(`mat-unthemed`,!o.color)(`_mat-animation-noopable`,o._animationsDisabled))},inputs:{color:`color`,disableRipple:[2,`disableRipple`,`disableRipple`,gV],disabled:[2,`disabled`,`disabled`,gV],ariaDisabled:[2,`aria-disabled`,`ariaDisabled`,gV],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,gV],tabIndex:[2,`tabIndex`,`tabIndex`,Ee],_tabindex:[2,`tabindex`,`_tabindex`,Ee],showProgress:[1,`showProgress`]}})}return i})();var ln=(()=>{class i extends Ht{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static ɵfac=function(n){return new(n||i)};static ɵcmp=Hw({type:i,selectors:[[`button`,`mat-icon-button`,``],[`a`,`mat-icon-button`,``],[`button`,`matIconButton`,``],[`a`,`matIconButton`,``]],hostAttrs:[1,`mdc-icon-button`,`mat-mdc-icon-button`],exportAs:[`matButton`,`matAnchor`],features:[ng],ngContentSelectors:an,decls:5,vars:1,consts:[[1,`mat-mdc-button-persistent-ripple`,`mdc-icon-button__ripple`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(n,o){n&1&&(hT(on),pg(0,`span`,0),gT(1),pC(2,rn,2,0,`div`,1),pg(3,`span`,2)(4,`span`,3)),n&2&&(ZE(2),hC(o.showProgress()?2:-1))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--%NS%mat-icon-button-container-shape, var(--%NS%mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--%NS%mat-icon-button-state-layer-size, 40px);
  height: var(--%NS%mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--%NS%mat-icon-button-state-layer-size, 40px) - var(--%NS%mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--%NS%mat-icon-button-icon-size, 24px);
  color: var(--%NS%mat-icon-button-icon-color, var(--%NS%mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--%NS%mat-icon-button-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface-variant) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-icon-button-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-icon-button-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-icon-button-touch-target-size, 48px);
  display: var(--%NS%mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--%NS%mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--%NS%mat-icon-button-icon-size, 24px);
  height: var(--%NS%mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__determinate-circle-graphic {
  width: inherit;
  height: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__indeterminate-circle-graphic {
  height: 100%;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--%NS%mat-icon-button-container-shape, var(--%NS%mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})}return i})();var Oe=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=$w({type:i});static ɵinj=hd({imports:[Kr]})}return i})();var cn=[[[``,8,`material-icons`,3,`iconPositionEnd`,``],[`mat-icon`,3,`iconPositionEnd`,``],[``,`matButtonIcon`,``,3,`iconPositionEnd`,``]],`*`,[[``,`iconPositionEnd`,``,8,`material-icons`],[`mat-icon`,`iconPositionEnd`,``],[``,`matButtonIcon`,``,`iconPositionEnd`,``]],[[``,`progressIndicator`,``]]];var dn=[`.material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])`,`*`,`.material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]`,`[progressIndicator]`];function mn(i,e){i&1&&(Hl(0,`div`,2),gT(1,3),Bl())}var De=new Map([[`text`,[`mat-mdc-button`]],[`filled`,[`mdc-button--unelevated`,`mat-mdc-unelevated-button`]],[`elevated`,[`mdc-button--raised`,`mat-mdc-raised-button`]],[`outlined`,[`mdc-button--outlined`,`mat-mdc-outlined-button`]],[`tonal`,[`mat-tonal-button`]]]);var oi=(()=>{class i extends Ht{get appearance(){return this._appearance}set appearance(t){this.setAppearance(t||this._config?.defaultAppearance||`text`)}_appearance=null;constructor(){super();let t=hn(this._elementRef.nativeElement);t&&this.setAppearance(t)}setAppearance(t){if(t===this._appearance)return;let n=this._elementRef.nativeElement.classList,o=this._appearance?De.get(this._appearance):null,a=De.get(t);o&&n.remove(...o),n.add(...a),this._appearance=t}static ɵfac=function(n){return new(n||i)};static ɵcmp=Hw({type:i,selectors:[[`button`,`matButton`,``],[`a`,`matButton`,``],[`button`,`mat-button`,``],[`button`,`mat-raised-button`,``],[`button`,`mat-flat-button`,``],[`button`,`mat-stroked-button`,``],[`a`,`mat-button`,``],[`a`,`mat-raised-button`,``],[`a`,`mat-flat-button`,``],[`a`,`mat-stroked-button`,``]],hostAttrs:[1,`mdc-button`],inputs:{appearance:[0,`matButton`,`appearance`]},exportAs:[`matButton`,`matAnchor`],features:[ng],ngContentSelectors:dn,decls:8,vars:5,consts:[[1,`mat-mdc-button-persistent-ripple`],[1,`mdc-button__label`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(n,o){n&1&&(hT(cn),pg(0,`span`,0),gT(1),Hl(2,`span`,1),gT(3,1),Bl(),gT(4,2),pC(5,mn,2,0,`div`,2),pg(6,`span`,3)(7,`span`,4)),n&2&&(zg(`mdc-button__ripple`,!o._isFab)(`mdc-fab__ripple`,o._isFab),ZE(5),hC(o.showProgress()?5:-1))},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--%NS%mat-button-text-horizontal-padding, 12px);
  height: var(--%NS%mat-button-text-container-height, 40px);
  font-family: var(--%NS%mat-button-text-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-text-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-text-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-text-label-text-transform);
  font-weight: var(--%NS%mat-button-text-label-text-weight, var(--%NS%mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-text-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--%NS%mat-button-text-label-text-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--%NS%mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-text-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-text-touch-target-size, 48px);
  display: var(--%NS%mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-filled-container-height, 40px);
  font-family: var(--%NS%mat-button-filled-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-filled-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-filled-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-filled-label-text-transform);
  font-weight: var(--%NS%mat-button-filled-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-filled-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-state-layer-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-filled-touch-target-size, 48px);
  display: var(--%NS%mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--%NS%mat-button-filled-label-text-color, var(--%NS%mat-sys-on-primary));
  background-color: var(--%NS%mat-button-filled-container-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-filled-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-unelevated-button .mat-mdc-button-progress-indicator-container {
  --%NS%mat-progress-spinner-active-indicator-color: var(--%NS%mat-button-filled-progress-active-indicator-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--%NS%mat-button-protected-container-elevation-shadow, var(--%NS%mat-sys-level1));
  height: var(--%NS%mat-button-protected-container-height, 40px);
  font-family: var(--%NS%mat-button-protected-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-protected-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-protected-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-protected-label-text-transform);
  font-weight: var(--%NS%mat-button-protected-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-protected-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-protected-touch-target-size, 48px);
  display: var(--%NS%mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--%NS%mat-button-protected-label-text-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-button-protected-container-color, var(--%NS%mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-protected-container-shape, var(--%NS%mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--%NS%mat-button-protected-hover-container-elevation-shadow, var(--%NS%mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--%NS%mat-button-protected-focus-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--%NS%mat-button-protected-pressed-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-protected-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--%NS%mat-button-protected-disabled-container-elevation-shadow, var(--%NS%mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-outlined-container-height, 40px);
  font-family: var(--%NS%mat-button-outlined-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-outlined-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-outlined-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-outlined-label-text-transform);
  font-weight: var(--%NS%mat-button-outlined-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  border-radius: var(--%NS%mat-button-outlined-container-shape, var(--%NS%mat-sys-corner-full));
  border-width: var(--%NS%mat-button-outlined-outline-width, 1px);
  padding: 0 var(--%NS%mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-outlined-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-outlined-touch-target-size, 48px);
  display: var(--%NS%mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--%NS%mat-button-outlined-label-text-color, var(--%NS%mat-sys-primary));
  border-color: var(--%NS%mat-button-outlined-outline-color, var(--%NS%mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: var(--%NS%mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-tonal-container-height, 40px);
  font-family: var(--%NS%mat-button-tonal-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-tonal-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-tonal-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-tonal-label-text-transform);
  font-weight: var(--%NS%mat-button-tonal-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--%NS%mat-button-tonal-label-text-color, var(--%NS%mat-sys-on-secondary-container));
  background-color: var(--%NS%mat-button-tonal-container-color, var(--%NS%mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-tonal-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-tonal-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-secondary-container) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-tonal-touch-target-size, 48px);
  display: var(--%NS%mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon,
.mat-mdc-button-progress-indicator-shown [matButtonIcon],
.mat-mdc-button-progress-indicator-shown .mdc-button__label {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})}return i})();function hn(i){return i.hasAttribute(`mat-raised-button`)?`elevated`:i.hasAttribute(`mat-stroked-button`)?`outlined`:i.hasAttribute(`mat-flat-button`)?`filled`:i.hasAttribute(`mat-button`)?`text`:null}var ai=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=$w({type:i});static ɵinj=hd({imports:[Oe,Kr]})}return i})();function li(i){return i&&typeof i.connect==`function`&&!(i instanceof Gs)}var lt=(function(i){return i[i.REPLACED=0]=`REPLACED`,i[i.INSERTED=1]=`INSERTED`,i[i.MOVED=2]=`MOVED`,i[i.REMOVED=3]=`REMOVED`,i})(lt||{});var Pe=class{viewCacheSize=20;_viewCache=[];applyChanges(e,t,n,o,a){e.forEachOperation((r,c,d)=>{let m,l;if(r.previousIndex==null){let h=()=>n(r,c,d);m=this._insertView(h,d,t,o(r)),l=m?lt.INSERTED:lt.REPLACED}else d==null?(this._detachAndCacheView(c,t),l=lt.REMOVED):(m=this._moveView(c,d,t,o(r)),l=lt.MOVED);a&&a({context:m?.context,operation:l,record:r})})}detach(){for(let e of this._viewCache)e.destroy();this._viewCache=[]}_insertView(e,t,n,o){let a=this._insertViewFromCache(t,n);if(a){a.context.$implicit=o;return}let r=e();return n.createEmbeddedView(r.templateRef,r.context,r.index)}_detachAndCacheView(e,t){let n=t.detach(e);this._maybeCacheView(n,t)}_moveView(e,t,n,o){let a=n.get(e);return n.move(a,t),a.context.$implicit=o,a}_maybeCacheView(e,t){if(this._viewCache.length<this.viewCacheSize)this._viewCache.push(e);else{let n=t.indexOf(e);n===-1?e.destroy():t.remove(n)}}_insertViewFromCache(e,t){let n=this._viewCache.pop();return n&&t.insert(n,e),n||null}};var un=20;var ct=(()=>{class i{_ngZone=_(ke$1);_platform=_(h);_renderer=_(Br).createRenderer(null,null);_cleanupGlobalListener;_scrolled=new Z;_scrolledCount=0;scrollContainers=new Map;register(t){this.scrollContainers.has(t)||this.scrollContainers.set(t,t.elementScrolled().subscribe(()=>this._scrolled.next(t)))}deregister(t){let n=this.scrollContainers.get(t);n&&(n.unsubscribe(),this.scrollContainers.delete(t))}scrolled(t=un){return this._platform.isBrowser?new M(n=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen(`document`,`scroll`,()=>this._scrolled.next())));let o=t>0?this._scrolled.pipe(Fy(t)).subscribe(n):this._scrolled.subscribe(n);return this._scrolledCount++,()=>{o.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):gy()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((t,n)=>this.deregister(n)),this._scrolled.complete()}ancestorScrolled(t,n){let o=this.getAncestorScrollContainers(t);return this.scrolled(n).pipe(Dn(a=>!a||o.indexOf(a)>-1))}getAncestorScrollContainers(t){let n=[];return this.scrollContainers.forEach((o,a)=>{this._targetContainsElement(a,t)&&n.push(a)}),n}_targetContainsElement(t,n){let o=C(n),a=t.getElementRef().nativeElement;do if(o==a)return!0;while(o=o.parentElement);return!1}static ɵfac=function(n){return new(n||i)};static ɵprov=zr({token:i,factory:i.ɵfac})}return i})();var pn=(()=>{class i{elementRef=_(Qr);scrollDispatcher=_(ct);ngZone=_(ke$1);dir=_(pi,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new Z;_renderer=_(Fc);_cleanupScroll;_elementScrolled=new Z;ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,`scroll`,t=>this._elementScrolled.next(t))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(t){let n=this.elementRef.nativeElement,o=this.dir&&this.dir.value==`rtl`;t.left??=o?t.end:t.start,t.right??=o?t.start:t.end,t.bottom!=null&&(t.top=n.scrollHeight-n.clientHeight-t.bottom),o&&Vr()!=V.NORMAL?(t.left!=null&&(t.right=n.scrollWidth-n.clientWidth-t.left),Vr()==V.INVERTED?t.left=t.right:Vr()==V.NEGATED&&(t.left=t.right?-t.right:t.right)):t.right!=null&&(t.left=n.scrollWidth-n.clientWidth-t.right),this._applyScrollToOptions(t)}_applyScrollToOptions(t){let n=this.elementRef.nativeElement;Wr()?n.scrollTo(t):(t.top!=null&&(n.scrollTop=t.top),t.left!=null&&(n.scrollLeft=t.left))}measureScrollOffset(t){let n=`left`,o=`right`,a=this.elementRef.nativeElement;if(t==`top`)return a.scrollTop;if(t==`bottom`)return a.scrollHeight-a.clientHeight-a.scrollTop;let r=this.dir&&this.dir.value==`rtl`;return t==`start`?t=r?o:n:t==`end`&&(t=r?n:o),r&&Vr()==V.INVERTED?t==n?a.scrollWidth-a.clientWidth-a.scrollLeft:a.scrollLeft:r&&Vr()==V.NEGATED?t==n?a.scrollLeft+a.scrollWidth-a.clientWidth:-a.scrollLeft:t==n?a.scrollLeft:a.scrollWidth-a.clientWidth-a.scrollLeft}static ɵfac=function(n){return new(n||i)};static ɵdir=Ww({type:i,selectors:[[``,`cdk-scrollable`,``],[``,`cdkScrollable`,``]]})}return i})();var fn=20;var J=(()=>{class i{_platform=_(h);_listeners;_viewportSize=null;_change=new Z;_document=_(_r);constructor(){let t=_(ke$1),n=_(Br).createRenderer(null,null);t.runOutsideAngular(()=>{if(this._platform.isBrowser){let o=a=>this._change.next(a);this._listeners=[n.listen(`window`,`resize`,o),n.listen(`window`,`orientationchange`,o)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(t=>t()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let t={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),t}getViewportRect(){let t=this.getViewportScrollPosition(),{width:n,height:o}=this.getViewportSize();return{top:t.top,left:t.left,bottom:t.top+o,right:t.left+n,height:o,width:n}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let t=this._document,n=this._getWindow(),o=t.documentElement,a=o.getBoundingClientRect();return{top:-a.top||t.body?.scrollTop||n.scrollY||o.scrollTop||0,left:-a.left||t.body?.scrollLeft||n.scrollX||o.scrollLeft||0}}change(t=fn){return t>0?this._change.pipe(Fy(t)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let t=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:t.innerWidth,height:t.innerHeight}:{width:0,height:0}}static ɵfac=function(n){return new(n||i)};static ɵprov=zr({token:i,factory:i.ɵfac})}return i})();var $i=new A(`CDK_VIRTUAL_SCROLL_VIEWPORT`);var Wt=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=$w({type:i});static ɵinj=hd({})}return i})();var Xt=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=$w({type:i});static ɵinj=hd({imports:[Kr,Wt,Kr,Wt]})}return i})();var dt=class{_attachedHost=null;attach(e){return this._attachedHost=e,e.attach(this)}detach(){let e=this._attachedHost;e!=null&&(this._attachedHost=null,e.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(e){this._attachedHost=e}};var Ut=class extends dt{component;viewContainerRef;injector;projectableNodes;bindings;directives;constructor(e,t,n,o,a,r){super(),this.component=e,this.viewContainerRef=t,this.injector=n,this.projectableNodes=o,this.bindings=a||null,this.directives=r||null}};var tt=class extends dt{templateRef;viewContainerRef;context;injector;constructor(e,t,n,o){super(),this.templateRef=e,this.viewContainerRef=t,this.context=n,this.injector=o}get origin(){return this.templateRef.elementRef}attach(e,t=this.context){return this.context=t,super.attach(e)}detach(){return this.context=void 0,super.detach()}};var Zt=class extends dt{element;constructor(e){super(),this.element=e instanceof Qr?e.nativeElement:e}};var yt=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(e){if(e instanceof Ut)return this._attachedPortal=e,this.attachComponentPortal(e);if(e instanceof tt)return this._attachedPortal=e,this.attachTemplatePortal(e);if(this.attachDomPortal&&e instanceof Zt)return this._attachedPortal=e,this.attachDomPortal(e)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(e){this._disposeFn=e}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}};var St=class extends yt{outletElement;_appRef;_defaultInjector;constructor(e,t,n){super(),this.outletElement=e,this._appRef=t,this._defaultInjector=n}attachComponentPortal(e){let t;if(e.viewContainerRef){let n=e.injector||e.viewContainerRef.injector,o=n.get(Bn,null,{optional:!0})||void 0;t=e.viewContainerRef.createComponent(e.component,{index:e.viewContainerRef.length,injector:n,ngModuleRef:o,projectableNodes:e.projectableNodes||void 0,bindings:e.bindings||void 0,directives:e.directives||void 0}),this.setDisposeFn(()=>t.destroy())}else{let n=this._appRef,o=e.injector||this._defaultInjector||pe.NULL,a=o.get(fe,n.injector);t=vV(e.component,{elementInjector:o,environmentInjector:a,projectableNodes:e.projectableNodes||void 0,bindings:e.bindings||void 0,directives:e.directives||void 0}),n.attachView(t.hostView),this.setDisposeFn(()=>{n.viewCount>0&&n.detachView(t.hostView),t.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(t)),this._attachedPortal=e,t}attachTemplatePortal(e){let t=e.viewContainerRef,n=t.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return n.rootNodes.forEach(o=>this.outletElement.appendChild(o)),n.detectChanges(),this.setDisposeFn(()=>{let o=t.indexOf(n);o!==-1&&t.remove(o)}),this._attachedPortal=e,n}attachDomPortal=e=>{let t=e.element;t.parentNode;let n=this.outletElement.ownerDocument.createComment(`dom-portal`);t.parentNode.insertBefore(n,t),this.outletElement.appendChild(t),this._attachedPortal=e,super.setDisposeFn(()=>{n.parentNode&&n.parentNode.replaceChild(t,n)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(e){return e.hostView.rootNodes[0]}};var no=(()=>{class i extends tt{constructor(){let t=_(Hr),n=_(ms);super(t,n)}static ɵfac=function(n){return new(n||i)};static ɵdir=Ww({type:i,selectors:[[``,`cdkPortal`,``]],exportAs:[`cdkPortal`],features:[ng]})}return i})();var io=(()=>{class i extends yt{_moduleRef=_(Bn,{optional:!0});_document=_(_r);_viewContainerRef=_(ms);_isInitialized=!1;_attachedRef=null;get portal(){return this._attachedPortal}set portal(t){this.hasAttached()&&!t&&!this._isInitialized||(this.hasAttached()&&super.detach(),t&&super.attach(t),this._attachedPortal=t||null)}attached=new Ye$1;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(t){t.setAttachedHost(this);let n=t.viewContainerRef!=null?t.viewContainerRef:this._viewContainerRef,o=n.createComponent(t.component,{index:n.length,injector:t.injector||n.injector,projectableNodes:t.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:t.bindings||void 0,directives:t.directives||void 0});return n!==this._viewContainerRef&&this._getRootNode().appendChild(o.hostView.rootNodes[0]),super.setDisposeFn(()=>o.destroy()),this._attachedPortal=t,this._attachedRef=o,this.attached.emit(o),o}attachTemplatePortal(t){t.setAttachedHost(this);let n=this._viewContainerRef.createEmbeddedView(t.templateRef,t.context,{injector:t.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=t,this._attachedRef=n,this.attached.emit(n),n}attachDomPortal=t=>{let n=t.element;n.parentNode;let o=this._document.createComment(`dom-portal`);t.setAttachedHost(this),n.parentNode.insertBefore(o,n),this._getRootNode().appendChild(n),this._attachedPortal=t,super.setDisposeFn(()=>{o.parentNode&&o.parentNode.replaceChild(n,o)})};_getRootNode(){let t=this._viewContainerRef.element.nativeElement;return t.nodeType===t.ELEMENT_NODE?t:t.parentNode}static ɵfac=(()=>{let t;return function(o){return(t||(t=II(i)))(o||i)}})();static ɵdir=Ww({type:i,selectors:[[``,`cdkPortalOutlet`,``]],inputs:{portal:[0,`cdkPortalOutlet`,`portal`]},outputs:{attached:`attached`},exportAs:[`cdkPortalOutlet`],features:[ng]})}return i})();var Me=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=$w({type:i});static ɵinj=hd({})}return i})();var Ae=Wr();function Le(i){return new wt(i.get(J),i.get(_r))}var wt=class{_viewportRuler;_previousHTMLStyles={top:``,left:``};_previousScrollPosition;_isEnabled=!1;_document;constructor(e,t){this._viewportRuler=e,this._document=t}attach(){}enable(){if(this._canBeEnabled()){let e=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=e.style.left||``,this._previousHTMLStyles.top=e.style.top||``,e.style.left=ns(-this._previousScrollPosition.left),e.style.top=ns(-this._previousScrollPosition.top),e.classList.add(`cdk-global-scrollblock`),this._isEnabled=!0}}disable(){if(this._isEnabled){let e=this._document.documentElement,t=this._document.body,n=e.style,o=t.style,a=n.scrollBehavior||``,r=o.scrollBehavior||``;this._isEnabled=!1,n.left=this._previousHTMLStyles.left,n.top=this._previousHTMLStyles.top,e.classList.remove(`cdk-global-scrollblock`),Ae&&(n.scrollBehavior=o.scrollBehavior=`auto`),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),Ae&&(n.scrollBehavior=a,o.scrollBehavior=r)}}_canBeEnabled(){if(this._document.documentElement.classList.contains(`cdk-global-scrollblock`)||this._isEnabled)return!1;let t=this._document.documentElement,n=this._viewportRuler.getViewportSize();return t.scrollHeight>n.height||t.scrollWidth>n.width}};function je(i,e){return new xt(i.get(ct),i.get(ke$1),i.get(J),e)}var xt=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(e,t,n,o){this._scrollDispatcher=e,this._ngZone=t,this._viewportRuler=n,this._config=o}attach(e){this._overlayRef,this._overlayRef=e}enable(){if(this._scrollSubscription)return;let e=this._scrollDispatcher.scrolled(0).pipe(Dn(t=>!t||!this._overlayRef.overlayElement.contains(t.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=e.subscribe(()=>{let t=this._viewportRuler.getViewportScrollPosition().top;Math.abs(t-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=e.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var mt=class{enable(){}disable(){}attach(){}};function Gt(i,e){return e.some(t=>{let n=i.bottom<t.top,o=i.top>t.bottom,a=i.right<t.left,r=i.left>t.right;return n||o||a||r})}function Te(i,e){return e.some(t=>{let n=i.top<t.top,o=i.bottom>t.bottom,a=i.left<t.left,r=i.right>t.right;return n||o||a||r})}function qt(i,e){return new Nt(i.get(ct),i.get(J),i.get(ke$1),e)}var Nt=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(e,t,n,o){this._scrollDispatcher=e,this._viewportRuler=t,this._ngZone=n,this._config=o}attach(e){this._overlayRef,this._overlayRef=e}enable(){if(!this._scrollSubscription){let e=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(e).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let t=this._overlayRef.overlayElement.getBoundingClientRect(),{width:n,height:o}=this._viewportRuler.getViewportSize();Gt(t,[{width:n,height:o,bottom:o,right:n,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}};var Ye=(()=>{class i{_injector=_(pe);noop=()=>new mt;close=t=>je(this._injector,t);block=()=>Le(this._injector);reposition=t=>qt(this._injector,t);static ɵfac=function(n){return new(n||i)};static ɵprov=zr({token:i,factory:i.ɵfac})}return i})();var ht=class{positionStrategy;scrollStrategy=new mt;panelClass=``;hasBackdrop=!1;backdropClass=`cdk-overlay-dark-backdrop`;disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(e){if(e){let t=Object.keys(e);for(let n of t)e[n]!==void 0&&(this[n]=e[n])}}};var Ct=class{connectionPair;scrollableViewProperties;constructor(e,t){this.connectionPair=e,this.scrollableViewProperties=t}};var He=(()=>{class i{_attachedOverlays=[];_document=_(_r);_isAttached=!1;ngOnDestroy(){this.detach()}add(t){this.remove(t),this._attachedOverlays.push(t)}remove(t){let n=this._attachedOverlays.indexOf(t);n>-1&&this._attachedOverlays.splice(n,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(t,n,o){return o.observers.length<1?!1:t.eventPredicate?t.eventPredicate(n):!0}static ɵfac=function(n){return new(n||i)};static ɵprov=zr({token:i,factory:i.ɵfac})}return i})();var We=(()=>{class i extends He{_ngZone=_(ke$1);_renderer=_(Br).createRenderer(null,null);_cleanupKeydown;add(t){super.add(t),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen(`body`,`keydown`,this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=t=>{let n=this._attachedOverlays;for(let o=n.length-1;o>-1;o--){let a=n[o];if(this.canReceiveEvent(a,t,a._keydownEvents)){this._ngZone.run(()=>a._keydownEvents.next(t));break}}};static ɵfac=function(n){return new(n||i)};static ɵprov=zr({token:i,factory:i.ɵfac})}return i})();var Xe=(()=>{class i extends He{_platform=_(h);_ngZone=_(ke$1);_renderer=_(Br).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(t){if(super.add(t),!this._isAttached){let n=this._document.body,o={capture:!0},a=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[a.listen(n,`pointerdown`,this._pointerDownListener,o),a.listen(n,`click`,this._clickListener,o),a.listen(n,`auxclick`,this._clickListener,o),a.listen(n,`contextmenu`,this._clickListener,o)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=n.style.cursor,n.style.cursor=`pointer`,this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(t=>t()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=t=>{this._pointerDownEventTarget=D(t)};_clickListener=t=>{let n=D(t),o=t.type===`click`&&this._pointerDownEventTarget?this._pointerDownEventTarget:n;this._pointerDownEventTarget=null;let a=this._attachedOverlays.slice();for(let r=a.length-1;r>-1;r--){let c=a[r],d=c._outsidePointerEvents;if(!(!c.hasAttached()||!this.canReceiveEvent(c,t,d))){if(Fe(c.overlayElement,n)||Fe(c.overlayElement,o))break;this._ngZone?this._ngZone.run(()=>d.next(t)):d.next(t)}}};static ɵfac=function(n){return new(n||i)};static ɵprov=zr({token:i,factory:i.ɵfac})}return i})();function Fe(i,e){let t=typeof ShadowRoot<`u`&&ShadowRoot,n=e;for(;n;){if(n===i)return!0;n=t&&n instanceof ShadowRoot?n.host:n.parentNode}return!1}var Ue=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵcmp=Hw({type:i,selectors:[[`ng-component`]],hostAttrs:[`cdk-overlay-style-loader`,``],decls:0,vars:0,template:function(n,o){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2})}return i})();var Ze=(()=>{class i{_platform=_(h);_containerElement;_document=_(_r);_styleLoader=_(K);ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let t=`cdk-overlay-container`;if(this._platform.isBrowser||$r()){let o=this._document.querySelectorAll(`.${t}[platform="server"], .${t}[platform="test"]`);for(let a=0;a<o.length;a++)o[a].remove()}let n=this._document.createElement(`div`);n.classList.add(t),$r()?n.setAttribute(`platform`,`test`):this._platform.isBrowser||n.setAttribute(`platform`,`server`),this._document.body.appendChild(n),this._containerElement=n}_loadStyles(){this._styleLoader.load(Ue)}static ɵfac=function(n){return new(n||i)};static ɵprov=zr({token:i,factory:i.ɵfac})}return i})();var $t=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(e,t,n,o){this._renderer=t,this._ngZone=n,this.element=e.createElement(`div`),this.element.classList.add(`cdk-overlay-backdrop`),this._cleanupClick=t.listen(this.element,`click`,o)}detach(){this._ngZone.runOutsideAngular(()=>{let e=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(e,`transitionend`,this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),e.style.pointerEvents=`none`,e.classList.remove(`cdk-overlay-backdrop-showing`)})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function Qt(i){return i&&i.nodeType===1}var kt=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new Z;_attachments=new Z;_detachments=new Z;_positionStrategy;_scrollStrategy;_locationChanges=$.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new Z;_outsidePointerEvents=new Z;_afterNextRenderRef;constructor(e,t,n,o,a,r,c,d,m,l=!1,h,g){this._portalOutlet=e,this._host=t,this._pane=n,this._config=o,this._ngZone=a,this._keyboardDispatcher=r,this._document=c,this._location=d,this._outsideClickDispatcher=m,this._animationsDisabled=l,this._injector=h,this._renderer=g,o.scrollStrategy&&(this._scrollStrategy=o.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=o.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(e){if(this._disposed)return null;this._attachHost();let t=this._portalOutlet.attach(e);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=ME(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof t?.onDestroy==`function`&&t.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),t}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let e=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),e}dispose(){if(this._disposed)return;let e=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,e&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(e){e!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=e,this.hasAttached()&&(e.attach(this),this.updatePosition()))}updateSize(e){this._config=z(z({},this._config),e),this._updateElementSize()}setDirection(e){this._config=Q(z({},this._config),{direction:e}),this._updateElementDirection()}addPanelClass(e){this._pane&&this._toggleClasses(this._pane,e,!0)}removePanelClass(e){this._pane&&this._toggleClasses(this._pane,e,!1)}getDirection(){let e=this._config.direction;return e?typeof e==`string`?e:e.value:`ltr`}updateScrollStrategy(e){e!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=e,this.hasAttached()&&(e.attach(this),e.enable()))}_updateElementDirection(){this._host.setAttribute(`dir`,this.getDirection())}_updateElementSize(){if(!this._pane)return;let e=this._pane.style;e.width=ns(this._config.width),e.height=ns(this._config.height),e.minWidth=ns(this._config.minWidth),e.minHeight=ns(this._config.minHeight),e.maxWidth=ns(this._config.maxWidth),e.maxHeight=ns(this._config.maxHeight)}_togglePointerEvents(e){this._pane.style.pointerEvents=e?``:`none`}_attachHost(){if(!this._host.parentElement){let e=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;Qt(e)?e.after(this._host):e?.type===`parent`?e.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let e=`cdk-overlay-backdrop-showing`;this._backdropRef?.dispose(),this._backdropRef=new $t(this._document,this._renderer,this._ngZone,t=>{this._backdropClick.next(t)}),this._animationsDisabled&&this._backdropRef.element.classList.add(`cdk-overlay-backdrop-noop-animation`),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<`u`?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(e))}):this._backdropRef.element.classList.add(e)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(e,t,n){let o=ne(t||[]).filter(a=>!!a);o.length&&(n?e.classList.add(...o):e.classList.remove(...o))}_detachContentWhenEmpty(){let e=!1;try{this._detachContentAfterRenderRef=ME(()=>{e=!0,this._detachContent()},{injector:this._injector})}catch(t){if(e)throw t;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let e=this._scrollStrategy;e?.disable(),e?.detach?.()}};var ze=`cdk-overlay-connected-position-bounding-box`;var bn=/([A-Za-z%]+)$/;function Jt(i,e){return new Rt(e,i.get(J),i.get(_r),i.get(h),i.get(Ze))}var Rt=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new Z;_resizeSubscription=$.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation=`global`;positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(e,t,n,o,a){this._viewportRuler=t,this._document=n,this._platform=o,this._overlayContainer=a,this.setOrigin(e)}attach(e){this._overlayRef&&this._overlayRef,this._validatePositions(),e.hostElement.classList.add(ze),this._overlayRef=e,this._boundingBox=e.hostElement,this._pane=e.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let e=this._originRect,t=this._overlayRect,n=this._viewportRect,o=this._containerRect,a=[],r;for(let c of this._preferredPositions){let d=this._getOriginPoint(e,o,c),m=this._getOverlayPoint(d,t,c),l=this._getOverlayFit(m,t,n,c);if(l.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(c,d);return}if(this._canFitWithFlexibleDimensions(l,m,n)){a.push({position:c,origin:d,overlayRect:t,boundingBoxRect:this._calculateBoundingBoxRect(d,c)});continue}(!r||r.overlayFit.visibleArea<l.visibleArea)&&(r={overlayFit:l,overlayPoint:m,originPoint:d,position:c,overlayRect:t})}if(a.length){let c=null,d=-1;for(let m of a){let l=m.boundingBoxRect.width*m.boundingBoxRect.height*(m.position.weight||1);l>d&&(d=l,c=m)}this._isPushed=!1,this._applyPosition(c.position,c.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(r.position,r.originPoint);return}this._applyPosition(r.position,r.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&X(this._boundingBox.style,{top:``,left:``,right:``,bottom:``,height:``,width:``,alignItems:``,justifyContent:``}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(ze),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let e=this._lastPosition;e?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(e,this._getOriginPoint(this._originRect,this._containerRect,e))):this.apply()}withScrollableContainers(e){return this._scrollables=e,this}withPositions(e){return this._preferredPositions=e,e.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(e){return this._viewportMargin=e,this}withFlexibleDimensions(e=!0){return this._hasFlexibleDimensions=e,this}withGrowAfterOpen(e=!0){return this._growAfterOpen=e,this}withPush(e=!0){return this._canPush=e,this}withLockedPosition(e=!0){return this._positionLocked=e,this}setOrigin(e){return this._origin=e,this}withDefaultOffsetX(e){return this._offsetX=e,this}withDefaultOffsetY(e){return this._offsetY=e,this}withTransformOriginOn(e){return this._transformOriginSelector=e,this}withPopoverLocation(e){return this._popoverLocation=e,this}getPopoverInsertionPoint(){return this._popoverLocation===`global`?null:this._popoverLocation!==`inline`?this._popoverLocation:this._origin instanceof Qr?this._origin.nativeElement:Qt(this._origin)?this._origin:null}_getOriginPoint(e,t,n){let o;if(n.originX==`center`)o=e.left+e.width/2;else{let r=this._isRtl()?e.right:e.left,c=this._isRtl()?e.left:e.right;o=n.originX==`start`?r:c}t.left<0&&(o-=t.left);let a;return n.originY==`center`?a=e.top+e.height/2:a=n.originY==`top`?e.top:e.bottom,t.top<0&&(a-=t.top),{x:o,y:a}}_getOverlayPoint(e,t,n){let o;n.overlayX==`center`?o=-t.width/2:n.overlayX===`start`?o=this._isRtl()?-t.width:0:o=this._isRtl()?0:-t.width;let a;return n.overlayY==`center`?a=-t.height/2:a=n.overlayY==`top`?0:-t.height,{x:e.x+o,y:e.y+a}}_getOverlayFit(e,t,n,o){let a=Ie(t),{x:r,y:c}=e,d=this._getOffset(o,`x`),m=this._getOffset(o,`y`);d&&(r+=d),m&&(c+=m);let l=0-r,h=r+a.width-n.width,g=0-c,_=c+a.height-n.height,f=this._subtractOverflows(a.width,l,h),p=this._subtractOverflows(a.height,g,_),j=f*p;return{visibleArea:j,isCompletelyWithinViewport:a.width*a.height===j,fitsInViewportVertically:p===a.height,fitsInViewportHorizontally:f==a.width}}_canFitWithFlexibleDimensions(e,t,n){if(this._hasFlexibleDimensions){let o=n.bottom-t.y,a=n.right-t.x,r=Be(this._overlayRef.getConfig().minHeight),c=Be(this._overlayRef.getConfig().minWidth),d=e.fitsInViewportVertically||r!=null&&r<=o,m=e.fitsInViewportHorizontally||c!=null&&c<=a;return d&&m}return!1}_pushOverlayOnScreen(e,t,n){if(this._previousPushAmount&&this._positionLocked)return{x:e.x+this._previousPushAmount.x,y:e.y+this._previousPushAmount.y};let o=Ie(t),a=this._viewportRect,r=Math.max(e.x+o.width-a.width,0),c=Math.max(e.y+o.height-a.height,0),d=Math.max(a.top-n.top-e.y,0),m=Math.max(a.left-n.left-e.x,0),l=0,h=0;return o.width<=a.width?l=m||-r:l=e.x<this._getViewportMarginStart()?a.left-n.left-e.x:0,o.height<=a.height?h=d||-c:h=e.y<this._getViewportMarginTop()?a.top-n.top-e.y:0,this._previousPushAmount={x:l,y:h},{x:e.x+l,y:e.y+h}}_applyPosition(e,t){if(this._setTransformOrigin(e),this._setOverlayElementStyles(t,e),this._setBoundingBoxStyles(t,e),e.panelClass&&this._addPanelClasses(e.panelClass),this._positionChanges.observers.length){let n=this._getScrollVisibility();if(e!==this._lastPosition||!this._lastScrollVisibility||!gn(this._lastScrollVisibility,n)){let o=new Ct(e,n);this._positionChanges.next(o)}this._lastScrollVisibility=n}this._lastPosition=e,this._isInitialRender=!1}_setTransformOrigin(e){if(!this._transformOriginSelector)return;let t=this._boundingBox.querySelectorAll(this._transformOriginSelector),n,o=e.overlayY;e.overlayX===`center`?n=`center`:this._isRtl()?n=e.overlayX===`start`?`right`:`left`:n=e.overlayX===`start`?`left`:`right`;for(let a=0;a<t.length;a++)t[a].style.transformOrigin=`${n} ${o}`}_calculateBoundingBoxRect(e,t){let n=this._viewportRect,o=this._isRtl(),a,r,c;if(t.overlayY===`top`)r=e.y,a=n.height-r+this._getViewportMarginBottom();else if(t.overlayY===`bottom`)c=n.height-e.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),a=n.height-c+this._getViewportMarginTop();else{let _=Math.min(n.bottom-e.y+n.top,e.y),f=this._lastBoundingBoxSize.height;a=_*2,r=e.y-_,a>f&&!this._isInitialRender&&!this._growAfterOpen&&(r=e.y-f/2)}let d=t.overlayX===`start`&&!o||t.overlayX===`end`&&o,m=t.overlayX===`end`&&!o||t.overlayX===`start`&&o,l,h,g;if(m)g=n.width-e.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),l=e.x-this._getViewportMarginStart();else if(d)h=e.x,l=n.right-e.x-this._getViewportMarginEnd();else{let _=Math.min(n.right-e.x+n.left,e.x),f=this._lastBoundingBoxSize.width;l=_*2,h=e.x-_,l>f&&!this._isInitialRender&&!this._growAfterOpen&&(h=e.x-f/2)}return{top:r,left:h,bottom:c,right:g,width:l,height:a}}_setBoundingBoxStyles(e,t){let n=this._calculateBoundingBoxRect(e,t);!this._isInitialRender&&!this._growAfterOpen&&(n.height=Math.min(n.height,this._lastBoundingBoxSize.height),n.width=Math.min(n.width,this._lastBoundingBoxSize.width));let o={};if(this._hasExactPosition())o.top=o.left=`0`,o.bottom=o.right=`auto`,o.maxHeight=o.maxWidth=``,o.width=o.height=`100%`;else{let a=this._overlayRef.getConfig().maxHeight,r=this._overlayRef.getConfig().maxWidth;o.width=ns(n.width),o.height=ns(n.height),o.top=ns(n.top)||`auto`,o.bottom=ns(n.bottom)||`auto`,o.left=ns(n.left)||`auto`,o.right=ns(n.right)||`auto`,t.overlayX===`center`?o.alignItems=`center`:o.alignItems=t.overlayX===`end`?`flex-end`:`flex-start`,t.overlayY===`center`?o.justifyContent=`center`:o.justifyContent=t.overlayY===`bottom`?`flex-end`:`flex-start`,a&&(o.maxHeight=ns(a)),r&&(o.maxWidth=ns(r))}this._lastBoundingBoxSize=n,X(this._boundingBox.style,o)}_resetBoundingBoxStyles(){X(this._boundingBox.style,{top:`0`,left:`0`,right:`0`,bottom:`0`,height:``,width:``,alignItems:``,justifyContent:``})}_resetOverlayElementStyles(){X(this._pane.style,{top:``,left:``,bottom:``,right:``,position:``,transform:``})}_setOverlayElementStyles(e,t){let n={},o=this._hasExactPosition(),a=this._hasFlexibleDimensions,r=this._overlayRef.getConfig();if(o){let l=this._viewportRuler.getViewportScrollPosition();X(n,this._getExactOverlayY(t,e,l)),X(n,this._getExactOverlayX(t,e,l))}else n.position=`static`;let c=``,d=this._getOffset(t,`x`),m=this._getOffset(t,`y`);d&&(c+=`translateX(${d}px) `),m&&(c+=`translateY(${m}px)`),n.transform=c.trim(),r.maxHeight&&(o?n.maxHeight=ns(r.maxHeight):a&&(n.maxHeight=``)),r.maxWidth&&(o?n.maxWidth=ns(r.maxWidth):a&&(n.maxWidth=``)),X(this._pane.style,n)}_getExactOverlayY(e,t,n){let o={top:``,bottom:``},a=this._getOverlayPoint(t,this._overlayRect,e);if(this._isPushed&&(a=this._pushOverlayOnScreen(a,this._overlayRect,n)),e.overlayY===`bottom`)o.bottom=`${this._document.documentElement.clientHeight-(a.y+this._overlayRect.height)}px`;else o.top=ns(a.y);return o}_getExactOverlayX(e,t,n){let o={left:``,right:``},a=this._getOverlayPoint(t,this._overlayRect,e);this._isPushed&&(a=this._pushOverlayOnScreen(a,this._overlayRect,n));let r;if(this._isRtl()?r=e.overlayX===`end`?`left`:`right`:r=e.overlayX===`end`?`right`:`left`,r===`right`)o.right=`${this._document.documentElement.clientWidth-(a.x+this._overlayRect.width)}px`;else o.left=ns(a.x);return o}_getScrollVisibility(){let e=this._getOriginRect(),t=this._pane.getBoundingClientRect(),n=this._scrollables.map(o=>o.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:Te(e,n),isOriginOutsideView:Gt(e,n),isOverlayClipped:Te(t,n),isOverlayOutsideView:Gt(t,n)}}_subtractOverflows(e,...t){return t.reduce((n,o)=>n-Math.max(o,0),e)}_getNarrowedViewportRect(){let e=this._document.documentElement.clientWidth,t=this._document.documentElement.clientHeight,n=this._viewportRuler.getViewportScrollPosition();return{top:n.top+this._getViewportMarginTop(),left:n.left+this._getViewportMarginStart(),right:n.left+e-this._getViewportMarginEnd(),bottom:n.top+t-this._getViewportMarginBottom(),width:e-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:t-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()===`rtl`}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(e,t){return t===`x`?e.offsetX==null?this._offsetX:e.offsetX:e.offsetY==null?this._offsetY:e.offsetY}_validatePositions(){}_addPanelClasses(e){this._pane&&ne(e).forEach(t=>{t!==``&&this._appliedPanelClasses.indexOf(t)===-1&&(this._appliedPanelClasses.push(t),this._pane.classList.add(t))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(e=>{this._pane.classList.remove(e)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let e=this._origin;if(e instanceof Qr)return e.nativeElement.getBoundingClientRect();if(e instanceof Element)return e.getBoundingClientRect();let t=e.width||0,n=e.height||0;return{top:e.y,bottom:e.y+n,left:e.x,right:e.x+t,height:n,width:t}}_getContainerRect(){let e=this._overlayRef.getConfig().usePopover&&this._popoverLocation!==`global`,t=this._overlayContainer.getContainerElement();e&&(t.style.display=`block`);let n=t.getBoundingClientRect();return e&&(t.style.display=``),n}};function X(i,e){for(let t in e)e.hasOwnProperty(t)&&(i[t]=e[t]);return i}function Be(i){if(typeof i!=`number`&&i!=null){let[e,t]=i.split(bn);return!t||t===`px`?parseFloat(e):null}return i||null}function Ie(i){return{top:Math.floor(i.top),right:Math.floor(i.right),bottom:Math.floor(i.bottom),left:Math.floor(i.left),width:Math.floor(i.width),height:Math.floor(i.height)}}function gn(i,e){return i===e?!0:i.isOriginClipped===e.isOriginClipped&&i.isOriginOutsideView===e.isOriginOutsideView&&i.isOverlayClipped===e.isOverlayClipped&&i.isOverlayOutsideView===e.isOverlayOutsideView}var Ve=`cdk-global-overlay-wrapper`;function Ge(i){return new Et}var Et=class{_overlayRef;_cssPosition=`static`;_topOffset=``;_bottomOffset=``;_alignItems=``;_xPosition=``;_xOffset=``;_width=``;_height=``;_isDisposed=!1;attach(e){let t=e.getConfig();this._overlayRef=e,this._width&&!t.width&&e.updateSize({width:this._width}),this._height&&!t.height&&e.updateSize({height:this._height}),e.hostElement.classList.add(Ve),this._isDisposed=!1}top(e=``){return this._bottomOffset=``,this._topOffset=e,this._alignItems=`flex-start`,this}left(e=``){return this._xOffset=e,this._xPosition=`left`,this}bottom(e=``){return this._topOffset=``,this._bottomOffset=e,this._alignItems=`flex-end`,this}right(e=``){return this._xOffset=e,this._xPosition=`right`,this}start(e=``){return this._xOffset=e,this._xPosition=`start`,this}end(e=``){return this._xOffset=e,this._xPosition=`end`,this}width(e=``){return this._overlayRef?this._overlayRef.updateSize({width:e}):this._width=e,this}height(e=``){return this._overlayRef?this._overlayRef.updateSize({height:e}):this._height=e,this}centerHorizontally(e=``){return this.left(e),this._xPosition=`center`,this}centerVertically(e=``){return this.top(e),this._alignItems=`center`,this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let e=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement.style,{width:o,height:a,maxWidth:r,maxHeight:c}=this._overlayRef.getConfig(),d=(o===`100%`||o===`100vw`)&&(!r||r===`100%`||r===`100vw`),m=(a===`100%`||a===`100vh`)&&(!c||c===`100%`||c===`100vh`),l=this._xPosition,h=this._xOffset,g=this._overlayRef.getConfig().direction===`rtl`,_=``,f=``,p=``;d?p=`flex-start`:l===`center`?(p=`center`,g?f=h:_=h):g?l===`left`||l===`end`?(p=`flex-end`,_=h):(l===`right`||l===`start`)&&(p=`flex-start`,f=h):l===`left`||l===`start`?(p=`flex-start`,_=h):(l===`right`||l===`end`)&&(p=`flex-end`,f=h),e.position=this._cssPosition,e.marginLeft=d?`0`:_,e.marginTop=m?`0`:this._topOffset,e.marginBottom=this._bottomOffset,e.marginRight=d?`0`:f,t.justifyContent=p,t.alignItems=m?`flex-start`:this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let e=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement,n=t.style;t.classList.remove(Ve),n.justifyContent=n.alignItems=e.marginTop=e.marginBottom=e.marginLeft=e.marginRight=e.position=``,this._overlayRef=null,this._isDisposed=!0}};var $e=(()=>{class i{_injector=_(pe);global(){return Ge()}flexibleConnectedTo(t){return Jt(this._injector,t)}static ɵfac=function(n){return new(n||i)};static ɵprov=zr({token:i,factory:i.ɵfac})}return i})();var te=new A(`OVERLAY_DEFAULT_CONFIG`);function ee(i,e){i.get(K).load(Ue);let t=i.get(Ze),n=i.get(_r),o=i.get(Ne$1),a=i.get(ys),r=i.get(pi),c=i.get(Fc,null,{optional:!0})||i.get(Br).createRenderer(null,null),d=new ht(e),m=i.get(te,null,{optional:!0})?.usePopover??!0;d.direction=d.direction||r.value,!n.body||!(`showPopover`in n.body)?d.usePopover=!1:d.usePopover=e?.usePopover??m;let l=n.createElement(`div`),h=n.createElement(`div`);l.id=o.getId(`cdk-overlay-`),l.classList.add(`cdk-overlay-pane`),h.appendChild(l),d.usePopover&&(h.setAttribute(`popover`,`manual`),h.classList.add(`cdk-overlay-popover`));let g=d.usePopover?d.positionStrategy?.getPopoverInsertionPoint?.():null;return Qt(g)?g.after(h):g?.type===`parent`?g.element.appendChild(h):t.getContainerElement().appendChild(h),new kt(new St(l,a,i),h,l,d,i.get(ke$1),i.get(We),n,i.get(Qn),i.get(Xe),e?.disableAnimations??i.get(Fv,null,{optional:!0})===`NoopAnimations`,i.get(fe),c)}var Ke=(()=>{class i{scrollStrategies=_(Ye);_positionBuilder=_($e);_injector=_(pe);create(t){return ee(this._injector,t)}position(){return this._positionBuilder}static ɵfac=function(n){return new(n||i)};static ɵprov=zr({token:i,factory:i.ɵfac})}return i})();var vn=[{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`},{originX:`start`,originY:`top`,overlayX:`start`,overlayY:`bottom`},{originX:`end`,originY:`top`,overlayX:`end`,overlayY:`bottom`},{originX:`end`,originY:`bottom`,overlayX:`end`,overlayY:`top`}];var _n=new A(`cdk-connected-overlay-scroll-strategy`,{providedIn:`root`,factory:()=>{let i=_(pe);return()=>qt(i)}});var Kt=(()=>{class i{elementRef=_(Qr);static ɵfac=function(n){return new(n||i)};static ɵdir=Ww({type:i,selectors:[[``,`cdk-overlay-origin`,``],[``,`overlay-origin`,``],[``,`cdkOverlayOrigin`,``]],exportAs:[`cdkOverlayOrigin`]})}return i})();var qe=new A(`cdk-connected-overlay-default-config`);var yn=(()=>{class i{_dir=_(pi,{optional:!0});_injector=_(pe);_overlayRef;_templatePortal;_backdropSubscription=$.EMPTY;_attachSubscription=$.EMPTY;_detachSubscription=$.EMPTY;_positionSubscription=$.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=_(_n);_ngZone=_(ke$1);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(t){this._offsetX=t,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(t){this._offsetY=t,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(t){typeof t!=`string`&&this._assignConfig(t)}backdropClick=new Ye$1;positionChange=new Ye$1;attach=new Ye$1;detach=new Ye$1;overlayKeydown=new Ye$1;overlayOutsideClick=new Ye$1;constructor(){let t=_(Hr),n=_(ms),o=_(qe,{optional:!0}),a=_(te,{optional:!0});this.usePopover=a?.usePopover===!1?null:`global`,this._templatePortal=new tt(t,n),this.scrollStrategy=this._scrollStrategyFactory(),o&&this._assignConfig(o)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:`ltr`}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(t){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),t.origin&&this.open&&this._position.apply()),t.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=vn);let t=this._overlayRef=ee(this._injector,this._buildConfig());this._attachSubscription=t.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=t.detachments().subscribe(()=>this.detach.emit()),t.keydownEvents().subscribe(n=>{this.overlayKeydown.next(n),n.keyCode===27&&!this.disableClose&&!Ot(n)&&(n.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(n=>{let o=this._getOriginElement(),a=D(n);(!o||o!==a&&!o.contains(a))&&this.overlayOutsideClick.next(n)})}_buildConfig(){let t=this._position=this.positionStrategy||this._createPositionStrategy(),n=new ht({direction:this._dir||`ltr`,positionStrategy:t,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(n.height=this.height),(this.minWidth||this.minWidth===0)&&(n.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(n.minHeight=this.minHeight),this.backdropClass&&(n.backdropClass=this.backdropClass),this.panelClass&&(n.panelClass=this.panelClass),n}_updatePositionStrategy(t){let n=this.positions.map(o=>({originX:o.originX,originY:o.originY,overlayX:o.overlayX,overlayY:o.overlayY,offsetX:o.offsetX||this.offsetX,offsetY:o.offsetY||this.offsetY,panelClass:o.panelClass||void 0}));return t.setOrigin(this._getOrigin()).withPositions(n).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?`global`:this.usePopover)}_createPositionStrategy(){let t=Jt(this._injector,this._getOrigin());return this._updatePositionStrategy(t),t}_getOrigin(){return this.origin instanceof Kt?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof Kt?this.origin.elementRef.nativeElement:this.origin instanceof Qr?this.origin.nativeElement:typeof Element<`u`&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let t=this._overlayRef;t.getConfig().hasBackdrop=this.hasBackdrop,t.updateSize({width:this._getWidth()}),t.hasAttached()||t.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=t.backdropClick().subscribe(n=>this.backdropClick.emit(n)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(ev(()=>this.positionChange.observers.length>0)).subscribe(n=>{this._ngZone.run(()=>this.positionChange.emit(n)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(t){this.origin=t.origin??this.origin,this.positions=t.positions??this.positions,this.positionStrategy=t.positionStrategy??this.positionStrategy,this.offsetX=t.offsetX??this.offsetX,this.offsetY=t.offsetY??this.offsetY,this.width=t.width??this.width,this.height=t.height??this.height,this.minWidth=t.minWidth??this.minWidth,this.minHeight=t.minHeight??this.minHeight,this.backdropClass=t.backdropClass??this.backdropClass,this.panelClass=t.panelClass??this.panelClass,this.viewportMargin=t.viewportMargin??this.viewportMargin,this.scrollStrategy=t.scrollStrategy??this.scrollStrategy,this.disableClose=t.disableClose??this.disableClose,this.transformOriginSelector=t.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=t.hasBackdrop??this.hasBackdrop,this.lockPosition=t.lockPosition??this.lockPosition,this.flexibleDimensions=t.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=t.growAfterOpen??this.growAfterOpen,this.push=t.push??this.push,this.disposeOnNavigation=t.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=t.usePopover??this.usePopover,this.matchWidth=t.matchWidth??this.matchWidth}static ɵfac=function(n){return new(n||i)};static ɵdir=Ww({type:i,selectors:[[``,`cdk-connected-overlay`,``],[``,`connected-overlay`,``],[``,`cdkConnectedOverlay`,``]],inputs:{origin:[0,`cdkConnectedOverlayOrigin`,`origin`],positions:[0,`cdkConnectedOverlayPositions`,`positions`],positionStrategy:[0,`cdkConnectedOverlayPositionStrategy`,`positionStrategy`],offsetX:[0,`cdkConnectedOverlayOffsetX`,`offsetX`],offsetY:[0,`cdkConnectedOverlayOffsetY`,`offsetY`],width:[0,`cdkConnectedOverlayWidth`,`width`],height:[0,`cdkConnectedOverlayHeight`,`height`],minWidth:[0,`cdkConnectedOverlayMinWidth`,`minWidth`],minHeight:[0,`cdkConnectedOverlayMinHeight`,`minHeight`],backdropClass:[0,`cdkConnectedOverlayBackdropClass`,`backdropClass`],panelClass:[0,`cdkConnectedOverlayPanelClass`,`panelClass`],viewportMargin:[0,`cdkConnectedOverlayViewportMargin`,`viewportMargin`],scrollStrategy:[0,`cdkConnectedOverlayScrollStrategy`,`scrollStrategy`],open:[0,`cdkConnectedOverlayOpen`,`open`],disableClose:[0,`cdkConnectedOverlayDisableClose`,`disableClose`],transformOriginSelector:[0,`cdkConnectedOverlayTransformOriginOn`,`transformOriginSelector`],hasBackdrop:[2,`cdkConnectedOverlayHasBackdrop`,`hasBackdrop`,gV],lockPosition:[2,`cdkConnectedOverlayLockPosition`,`lockPosition`,gV],flexibleDimensions:[2,`cdkConnectedOverlayFlexibleDimensions`,`flexibleDimensions`,gV],growAfterOpen:[2,`cdkConnectedOverlayGrowAfterOpen`,`growAfterOpen`,gV],push:[2,`cdkConnectedOverlayPush`,`push`,gV],disposeOnNavigation:[2,`cdkConnectedOverlayDisposeOnNavigation`,`disposeOnNavigation`,gV],usePopover:[0,`cdkConnectedOverlayUsePopover`,`usePopover`],matchWidth:[2,`cdkConnectedOverlayMatchWidth`,`matchWidth`,gV],_config:[0,`cdkConnectedOverlay`,`_config`]},outputs:{backdropClick:`backdropClick`,positionChange:`positionChange`,attach:`attach`,detach:`detach`,overlayKeydown:`overlayKeydown`,overlayOutsideClick:`overlayOutsideClick`},exportAs:[`cdkConnectedOverlay`],features:[eI]})}return i})();var Sn=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=$w({type:i});static ɵinj=hd({providers:[Ke],imports:[Kr,Me,Xt,Xt]})}return i})();export{oi as A,io as C,ln as D,li as E,tt as F,yn as I,yt as L,qt as M,st as N,lt as O,te as P,ht as S,kt as T,Xt as _,Kt as a,ct as b,Me as c,Pe as d,Re as f,Wt as g,Ut as h,Jt as i,pn as j,no as k,Mn as l,St as m,Ge as n,Le as o,Sn as p,J as r,Lt as s,$i as t,Oe as u,Ze as v,ke as w,ee as x,ai as y};
//# debugId=1986eb8f-4bfc-55a2-8429-e6bf9f6448d0
//# sourceMappingURL=chunk-D7YX0sdr.js.map