function x0(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function k0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var C0={exports:{}},ih={},b0={exports:{}},we={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nl=Symbol.for("react.element"),jS=Symbol.for("react.portal"),zS=Symbol.for("react.fragment"),$S=Symbol.for("react.strict_mode"),BS=Symbol.for("react.profiler"),HS=Symbol.for("react.provider"),WS=Symbol.for("react.context"),qS=Symbol.for("react.forward_ref"),KS=Symbol.for("react.suspense"),GS=Symbol.for("react.memo"),QS=Symbol.for("react.lazy"),ay=Symbol.iterator;function YS(t){return t===null||typeof t!="object"?null:(t=ay&&t[ay]||t["@@iterator"],typeof t=="function"?t:null)}var N0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D0=Object.assign,L0={};function Uo(t,e,n){this.props=t,this.context=e,this.refs=L0,this.updater=n||N0}Uo.prototype.isReactComponent={};Uo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Uo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function O0(){}O0.prototype=Uo.prototype;function bp(t,e,n){this.props=t,this.context=e,this.refs=L0,this.updater=n||N0}var Np=bp.prototype=new O0;Np.constructor=bp;D0(Np,Uo.prototype);Np.isPureReactComponent=!0;var ly=Array.isArray,M0=Object.prototype.hasOwnProperty,Dp={current:null},V0={key:!0,ref:!0,__self:!0,__source:!0};function U0(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)M0.call(e,r)&&!V0.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Nl,type:t,key:s,ref:o,props:i,_owner:Dp.current}}function XS(t,e){return{$$typeof:Nl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Lp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Nl}function JS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var uy=/\/+/g;function sd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?JS(""+t.key):e.toString(36)}function Uu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Nl:case jS:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+sd(o,0):r,ly(i)?(n="",t!=null&&(n=t.replace(uy,"$&/")+"/"),Uu(i,e,n,"",function(c){return c})):i!=null&&(Lp(i)&&(i=XS(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(uy,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",ly(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+sd(s,l);o+=Uu(s,e,n,u,i)}else if(u=YS(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+sd(s,l++),o+=Uu(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function du(t,e,n){if(t==null)return t;var r=[],i=0;return Uu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function ZS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Jt={current:null},Fu={transition:null},eR={ReactCurrentDispatcher:Jt,ReactCurrentBatchConfig:Fu,ReactCurrentOwner:Dp};function F0(){throw Error("act(...) is not supported in production builds of React.")}we.Children={map:du,forEach:function(t,e,n){du(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return du(t,function(){e++}),e},toArray:function(t){return du(t,function(e){return e})||[]},only:function(t){if(!Lp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};we.Component=Uo;we.Fragment=zS;we.Profiler=BS;we.PureComponent=bp;we.StrictMode=$S;we.Suspense=KS;we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eR;we.act=F0;we.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=D0({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Dp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)M0.call(e,u)&&!V0.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Nl,type:t.type,key:i,ref:s,props:r,_owner:o}};we.createContext=function(t){return t={$$typeof:WS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:HS,_context:t},t.Consumer=t};we.createElement=U0;we.createFactory=function(t){var e=U0.bind(null,t);return e.type=t,e};we.createRef=function(){return{current:null}};we.forwardRef=function(t){return{$$typeof:qS,render:t}};we.isValidElement=Lp;we.lazy=function(t){return{$$typeof:QS,_payload:{_status:-1,_result:t},_init:ZS}};we.memo=function(t,e){return{$$typeof:GS,type:t,compare:e===void 0?null:e}};we.startTransition=function(t){var e=Fu.transition;Fu.transition={};try{t()}finally{Fu.transition=e}};we.unstable_act=F0;we.useCallback=function(t,e){return Jt.current.useCallback(t,e)};we.useContext=function(t){return Jt.current.useContext(t)};we.useDebugValue=function(){};we.useDeferredValue=function(t){return Jt.current.useDeferredValue(t)};we.useEffect=function(t,e){return Jt.current.useEffect(t,e)};we.useId=function(){return Jt.current.useId()};we.useImperativeHandle=function(t,e,n){return Jt.current.useImperativeHandle(t,e,n)};we.useInsertionEffect=function(t,e){return Jt.current.useInsertionEffect(t,e)};we.useLayoutEffect=function(t,e){return Jt.current.useLayoutEffect(t,e)};we.useMemo=function(t,e){return Jt.current.useMemo(t,e)};we.useReducer=function(t,e,n){return Jt.current.useReducer(t,e,n)};we.useRef=function(t){return Jt.current.useRef(t)};we.useState=function(t){return Jt.current.useState(t)};we.useSyncExternalStore=function(t,e,n){return Jt.current.useSyncExternalStore(t,e,n)};we.useTransition=function(){return Jt.current.useTransition()};we.version="18.3.1";b0.exports=we;var j=b0.exports;const zn=k0(j),tR=x0({__proto__:null,default:zn},[j]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nR=j,rR=Symbol.for("react.element"),iR=Symbol.for("react.fragment"),sR=Object.prototype.hasOwnProperty,oR=nR.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,aR={key:!0,ref:!0,__self:!0,__source:!0};function j0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)sR.call(e,r)&&!aR.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:rR,type:t,key:s,ref:o,props:i,_owner:oR.current}}ih.Fragment=iR;ih.jsx=j0;ih.jsxs=j0;C0.exports=ih;var V=C0.exports,Zd={},z0={exports:{}},vn={},$0={exports:{}},B0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(W,Q){var ne=W.length;W.push(Q);e:for(;0<ne;){var ye=ne-1>>>1,fe=W[ye];if(0<i(fe,Q))W[ye]=Q,W[ne]=fe,ne=ye;else break e}}function n(W){return W.length===0?null:W[0]}function r(W){if(W.length===0)return null;var Q=W[0],ne=W.pop();if(ne!==Q){W[0]=ne;e:for(var ye=0,fe=W.length,ke=fe>>>1;ye<ke;){var qe=2*(ye+1)-1,et=W[qe],Ke=qe+1,Lt=W[Ke];if(0>i(et,ne))Ke<fe&&0>i(Lt,et)?(W[ye]=Lt,W[Ke]=ne,ye=Ke):(W[ye]=et,W[qe]=ne,ye=qe);else if(Ke<fe&&0>i(Lt,ne))W[ye]=Lt,W[Ke]=ne,ye=Ke;else break e}}return Q}function i(W,Q){var ne=W.sortIndex-Q.sortIndex;return ne!==0?ne:W.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],d=1,f=null,m=3,_=!1,T=!1,A=!1,b=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(W){for(var Q=n(c);Q!==null;){if(Q.callback===null)r(c);else if(Q.startTime<=W)r(c),Q.sortIndex=Q.expirationTime,e(u,Q);else break;Q=n(c)}}function L(W){if(A=!1,S(W),!T)if(n(u)!==null)T=!0,Z(F);else{var Q=n(c);Q!==null&&Y(L,Q.startTime-W)}}function F(W,Q){T=!1,A&&(A=!1,I(g),g=-1),_=!0;var ne=m;try{for(S(Q),f=n(u);f!==null&&(!(f.expirationTime>Q)||W&&!k());){var ye=f.callback;if(typeof ye=="function"){f.callback=null,m=f.priorityLevel;var fe=ye(f.expirationTime<=Q);Q=t.unstable_now(),typeof fe=="function"?f.callback=fe:f===n(u)&&r(u),S(Q)}else r(u);f=n(u)}if(f!==null)var ke=!0;else{var qe=n(c);qe!==null&&Y(L,qe.startTime-Q),ke=!1}return ke}finally{f=null,m=ne,_=!1}}var x=!1,w=null,g=-1,E=5,R=-1;function k(){return!(t.unstable_now()-R<E)}function N(){if(w!==null){var W=t.unstable_now();R=W;var Q=!0;try{Q=w(!0,W)}finally{Q?P():(x=!1,w=null)}}else x=!1}var P;if(typeof v=="function")P=function(){v(N)};else if(typeof MessageChannel<"u"){var me=new MessageChannel,ot=me.port2;me.port1.onmessage=N,P=function(){ot.postMessage(null)}}else P=function(){b(N,0)};function Z(W){w=W,x||(x=!0,P())}function Y(W,Q){g=b(function(){W(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(W){W.callback=null},t.unstable_continueExecution=function(){T||_||(T=!0,Z(F))},t.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<W?Math.floor(1e3/W):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(W){switch(m){case 1:case 2:case 3:var Q=3;break;default:Q=m}var ne=m;m=Q;try{return W()}finally{m=ne}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(W,Q){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var ne=m;m=W;try{return Q()}finally{m=ne}},t.unstable_scheduleCallback=function(W,Q,ne){var ye=t.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?ye+ne:ye):ne=ye,W){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=ne+fe,W={id:d++,callback:Q,priorityLevel:W,startTime:ne,expirationTime:fe,sortIndex:-1},ne>ye?(W.sortIndex=ne,e(c,W),n(u)===null&&W===n(c)&&(A?(I(g),g=-1):A=!0,Y(L,ne-ye))):(W.sortIndex=fe,e(u,W),T||_||(T=!0,Z(F))),W},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(W){var Q=m;return function(){var ne=m;m=Q;try{return W.apply(this,arguments)}finally{m=ne}}}})(B0);$0.exports=B0;var lR=$0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uR=j,yn=lR;function H(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var H0=new Set,tl={};function Es(t,e){go(t,e),go(t+"Capture",e)}function go(t,e){for(tl[t]=e,t=0;t<e.length;t++)H0.add(e[t])}var Dr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ef=Object.prototype.hasOwnProperty,cR=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,cy={},hy={};function hR(t){return ef.call(hy,t)?!0:ef.call(cy,t)?!1:cR.test(t)?hy[t]=!0:(cy[t]=!0,!1)}function dR(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function fR(t,e,n,r){if(e===null||typeof e>"u"||dR(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Zt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var bt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){bt[t]=new Zt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];bt[e]=new Zt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){bt[t]=new Zt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){bt[t]=new Zt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){bt[t]=new Zt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){bt[t]=new Zt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){bt[t]=new Zt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){bt[t]=new Zt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){bt[t]=new Zt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Op=/[\-:]([a-z])/g;function Mp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Op,Mp);bt[e]=new Zt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Op,Mp);bt[e]=new Zt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Op,Mp);bt[e]=new Zt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){bt[t]=new Zt(t,1,!1,t.toLowerCase(),null,!1,!1)});bt.xlinkHref=new Zt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){bt[t]=new Zt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Vp(t,e,n,r){var i=bt.hasOwnProperty(e)?bt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(fR(e,n,i,r)&&(n=null),r||i===null?hR(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var jr=uR.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fu=Symbol.for("react.element"),Bs=Symbol.for("react.portal"),Hs=Symbol.for("react.fragment"),Up=Symbol.for("react.strict_mode"),tf=Symbol.for("react.profiler"),W0=Symbol.for("react.provider"),q0=Symbol.for("react.context"),Fp=Symbol.for("react.forward_ref"),nf=Symbol.for("react.suspense"),rf=Symbol.for("react.suspense_list"),jp=Symbol.for("react.memo"),Zr=Symbol.for("react.lazy"),K0=Symbol.for("react.offscreen"),dy=Symbol.iterator;function pa(t){return t===null||typeof t!="object"?null:(t=dy&&t[dy]||t["@@iterator"],typeof t=="function"?t:null)}var Je=Object.assign,od;function Pa(t){if(od===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);od=e&&e[1]||""}return`
`+od+t}var ad=!1;function ld(t,e){if(!t||ad)return"";ad=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{ad=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Pa(t):""}function pR(t){switch(t.tag){case 5:return Pa(t.type);case 16:return Pa("Lazy");case 13:return Pa("Suspense");case 19:return Pa("SuspenseList");case 0:case 2:case 15:return t=ld(t.type,!1),t;case 11:return t=ld(t.type.render,!1),t;case 1:return t=ld(t.type,!0),t;default:return""}}function sf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Hs:return"Fragment";case Bs:return"Portal";case tf:return"Profiler";case Up:return"StrictMode";case nf:return"Suspense";case rf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case q0:return(t.displayName||"Context")+".Consumer";case W0:return(t._context.displayName||"Context")+".Provider";case Fp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case jp:return e=t.displayName||null,e!==null?e:sf(t.type)||"Memo";case Zr:e=t._payload,t=t._init;try{return sf(t(e))}catch{}}return null}function mR(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return sf(e);case 8:return e===Up?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Si(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function G0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function gR(t){var e=G0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function pu(t){t._valueTracker||(t._valueTracker=gR(t))}function Q0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=G0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function hc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function of(t,e){var n=e.checked;return Je({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function fy(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Si(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Y0(t,e){e=e.checked,e!=null&&Vp(t,"checked",e,!1)}function af(t,e){Y0(t,e);var n=Si(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?lf(t,e.type,n):e.hasOwnProperty("defaultValue")&&lf(t,e.type,Si(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function py(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function lf(t,e,n){(e!=="number"||hc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var xa=Array.isArray;function so(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Si(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function uf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(H(91));return Je({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function my(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(H(92));if(xa(n)){if(1<n.length)throw Error(H(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Si(n)}}function X0(t,e){var n=Si(e.value),r=Si(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function gy(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function J0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function cf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?J0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var mu,Z0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(mu=mu||document.createElement("div"),mu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=mu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function nl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Fa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},yR=["Webkit","ms","Moz","O"];Object.keys(Fa).forEach(function(t){yR.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Fa[e]=Fa[t]})});function ew(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Fa.hasOwnProperty(t)&&Fa[t]?(""+e).trim():e+"px"}function tw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ew(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var vR=Je({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function hf(t,e){if(e){if(vR[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(H(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(H(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(H(61))}if(e.style!=null&&typeof e.style!="object")throw Error(H(62))}}function df(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ff=null;function zp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var pf=null,oo=null,ao=null;function yy(t){if(t=Ol(t)){if(typeof pf!="function")throw Error(H(280));var e=t.stateNode;e&&(e=uh(e),pf(t.stateNode,t.type,e))}}function nw(t){oo?ao?ao.push(t):ao=[t]:oo=t}function rw(){if(oo){var t=oo,e=ao;if(ao=oo=null,yy(t),e)for(t=0;t<e.length;t++)yy(e[t])}}function iw(t,e){return t(e)}function sw(){}var ud=!1;function ow(t,e,n){if(ud)return t(e,n);ud=!0;try{return iw(t,e,n)}finally{ud=!1,(oo!==null||ao!==null)&&(sw(),rw())}}function rl(t,e){var n=t.stateNode;if(n===null)return null;var r=uh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(H(231,e,typeof n));return n}var mf=!1;if(Dr)try{var ma={};Object.defineProperty(ma,"passive",{get:function(){mf=!0}}),window.addEventListener("test",ma,ma),window.removeEventListener("test",ma,ma)}catch{mf=!1}function _R(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var ja=!1,dc=null,fc=!1,gf=null,wR={onError:function(t){ja=!0,dc=t}};function ER(t,e,n,r,i,s,o,l,u){ja=!1,dc=null,_R.apply(wR,arguments)}function TR(t,e,n,r,i,s,o,l,u){if(ER.apply(this,arguments),ja){if(ja){var c=dc;ja=!1,dc=null}else throw Error(H(198));fc||(fc=!0,gf=c)}}function Ts(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function aw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function vy(t){if(Ts(t)!==t)throw Error(H(188))}function IR(t){var e=t.alternate;if(!e){if(e=Ts(t),e===null)throw Error(H(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return vy(i),t;if(s===r)return vy(i),e;s=s.sibling}throw Error(H(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(H(189))}}if(n.alternate!==r)throw Error(H(190))}if(n.tag!==3)throw Error(H(188));return n.stateNode.current===n?t:e}function lw(t){return t=IR(t),t!==null?uw(t):null}function uw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=uw(t);if(e!==null)return e;t=t.sibling}return null}var cw=yn.unstable_scheduleCallback,_y=yn.unstable_cancelCallback,SR=yn.unstable_shouldYield,RR=yn.unstable_requestPaint,lt=yn.unstable_now,AR=yn.unstable_getCurrentPriorityLevel,$p=yn.unstable_ImmediatePriority,hw=yn.unstable_UserBlockingPriority,pc=yn.unstable_NormalPriority,PR=yn.unstable_LowPriority,dw=yn.unstable_IdlePriority,sh=null,or=null;function xR(t){if(or&&typeof or.onCommitFiberRoot=="function")try{or.onCommitFiberRoot(sh,t,void 0,(t.current.flags&128)===128)}catch{}}var $n=Math.clz32?Math.clz32:bR,kR=Math.log,CR=Math.LN2;function bR(t){return t>>>=0,t===0?32:31-(kR(t)/CR|0)|0}var gu=64,yu=4194304;function ka(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function mc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=ka(l):(s&=o,s!==0&&(r=ka(s)))}else o=n&~i,o!==0?r=ka(o):s!==0&&(r=ka(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-$n(e),i=1<<n,r|=t[n],e&=~i;return r}function NR(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function DR(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-$n(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=NR(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function yf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function fw(){var t=gu;return gu<<=1,!(gu&4194240)&&(gu=64),t}function cd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Dl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-$n(e),t[e]=n}function LR(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-$n(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Bp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-$n(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Ne=0;function pw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var mw,Hp,gw,yw,vw,vf=!1,vu=[],hi=null,di=null,fi=null,il=new Map,sl=new Map,ti=[],OR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wy(t,e){switch(t){case"focusin":case"focusout":hi=null;break;case"dragenter":case"dragleave":di=null;break;case"mouseover":case"mouseout":fi=null;break;case"pointerover":case"pointerout":il.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":sl.delete(e.pointerId)}}function ga(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ol(e),e!==null&&Hp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function MR(t,e,n,r,i){switch(e){case"focusin":return hi=ga(hi,t,e,n,r,i),!0;case"dragenter":return di=ga(di,t,e,n,r,i),!0;case"mouseover":return fi=ga(fi,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return il.set(s,ga(il.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,sl.set(s,ga(sl.get(s)||null,t,e,n,r,i)),!0}return!1}function _w(t){var e=Ki(t.target);if(e!==null){var n=Ts(e);if(n!==null){if(e=n.tag,e===13){if(e=aw(n),e!==null){t.blockedOn=e,vw(t.priority,function(){gw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ju(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=_f(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);ff=r,n.target.dispatchEvent(r),ff=null}else return e=Ol(n),e!==null&&Hp(e),t.blockedOn=n,!1;e.shift()}return!0}function Ey(t,e,n){ju(t)&&n.delete(e)}function VR(){vf=!1,hi!==null&&ju(hi)&&(hi=null),di!==null&&ju(di)&&(di=null),fi!==null&&ju(fi)&&(fi=null),il.forEach(Ey),sl.forEach(Ey)}function ya(t,e){t.blockedOn===e&&(t.blockedOn=null,vf||(vf=!0,yn.unstable_scheduleCallback(yn.unstable_NormalPriority,VR)))}function ol(t){function e(i){return ya(i,t)}if(0<vu.length){ya(vu[0],t);for(var n=1;n<vu.length;n++){var r=vu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(hi!==null&&ya(hi,t),di!==null&&ya(di,t),fi!==null&&ya(fi,t),il.forEach(e),sl.forEach(e),n=0;n<ti.length;n++)r=ti[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ti.length&&(n=ti[0],n.blockedOn===null);)_w(n),n.blockedOn===null&&ti.shift()}var lo=jr.ReactCurrentBatchConfig,gc=!0;function UR(t,e,n,r){var i=Ne,s=lo.transition;lo.transition=null;try{Ne=1,Wp(t,e,n,r)}finally{Ne=i,lo.transition=s}}function FR(t,e,n,r){var i=Ne,s=lo.transition;lo.transition=null;try{Ne=4,Wp(t,e,n,r)}finally{Ne=i,lo.transition=s}}function Wp(t,e,n,r){if(gc){var i=_f(t,e,n,r);if(i===null)wd(t,e,r,yc,n),wy(t,r);else if(MR(i,t,e,n,r))r.stopPropagation();else if(wy(t,r),e&4&&-1<OR.indexOf(t)){for(;i!==null;){var s=Ol(i);if(s!==null&&mw(s),s=_f(t,e,n,r),s===null&&wd(t,e,r,yc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else wd(t,e,r,null,n)}}var yc=null;function _f(t,e,n,r){if(yc=null,t=zp(r),t=Ki(t),t!==null)if(e=Ts(t),e===null)t=null;else if(n=e.tag,n===13){if(t=aw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return yc=t,null}function ww(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(AR()){case $p:return 1;case hw:return 4;case pc:case PR:return 16;case dw:return 536870912;default:return 16}default:return 16}}var li=null,qp=null,zu=null;function Ew(){if(zu)return zu;var t,e=qp,n=e.length,r,i="value"in li?li.value:li.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return zu=i.slice(t,1<r?1-r:void 0)}function $u(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function _u(){return!0}function Ty(){return!1}function _n(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?_u:Ty,this.isPropagationStopped=Ty,this}return Je(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=_u)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=_u)},persist:function(){},isPersistent:_u}),e}var Fo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kp=_n(Fo),Ll=Je({},Fo,{view:0,detail:0}),jR=_n(Ll),hd,dd,va,oh=Je({},Ll,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==va&&(va&&t.type==="mousemove"?(hd=t.screenX-va.screenX,dd=t.screenY-va.screenY):dd=hd=0,va=t),hd)},movementY:function(t){return"movementY"in t?t.movementY:dd}}),Iy=_n(oh),zR=Je({},oh,{dataTransfer:0}),$R=_n(zR),BR=Je({},Ll,{relatedTarget:0}),fd=_n(BR),HR=Je({},Fo,{animationName:0,elapsedTime:0,pseudoElement:0}),WR=_n(HR),qR=Je({},Fo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),KR=_n(qR),GR=Je({},Fo,{data:0}),Sy=_n(GR),QR={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},YR={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},XR={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function JR(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=XR[t])?!!e[t]:!1}function Gp(){return JR}var ZR=Je({},Ll,{key:function(t){if(t.key){var e=QR[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=$u(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?YR[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gp,charCode:function(t){return t.type==="keypress"?$u(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?$u(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),eA=_n(ZR),tA=Je({},oh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ry=_n(tA),nA=Je({},Ll,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gp}),rA=_n(nA),iA=Je({},Fo,{propertyName:0,elapsedTime:0,pseudoElement:0}),sA=_n(iA),oA=Je({},oh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),aA=_n(oA),lA=[9,13,27,32],Qp=Dr&&"CompositionEvent"in window,za=null;Dr&&"documentMode"in document&&(za=document.documentMode);var uA=Dr&&"TextEvent"in window&&!za,Tw=Dr&&(!Qp||za&&8<za&&11>=za),Ay=" ",Py=!1;function Iw(t,e){switch(t){case"keyup":return lA.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ws=!1;function cA(t,e){switch(t){case"compositionend":return Sw(e);case"keypress":return e.which!==32?null:(Py=!0,Ay);case"textInput":return t=e.data,t===Ay&&Py?null:t;default:return null}}function hA(t,e){if(Ws)return t==="compositionend"||!Qp&&Iw(t,e)?(t=Ew(),zu=qp=li=null,Ws=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Tw&&e.locale!=="ko"?null:e.data;default:return null}}var dA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!dA[t.type]:e==="textarea"}function Rw(t,e,n,r){nw(r),e=vc(e,"onChange"),0<e.length&&(n=new Kp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var $a=null,al=null;function fA(t){Mw(t,0)}function ah(t){var e=Gs(t);if(Q0(e))return t}function pA(t,e){if(t==="change")return e}var Aw=!1;if(Dr){var pd;if(Dr){var md="oninput"in document;if(!md){var ky=document.createElement("div");ky.setAttribute("oninput","return;"),md=typeof ky.oninput=="function"}pd=md}else pd=!1;Aw=pd&&(!document.documentMode||9<document.documentMode)}function Cy(){$a&&($a.detachEvent("onpropertychange",Pw),al=$a=null)}function Pw(t){if(t.propertyName==="value"&&ah(al)){var e=[];Rw(e,al,t,zp(t)),ow(fA,e)}}function mA(t,e,n){t==="focusin"?(Cy(),$a=e,al=n,$a.attachEvent("onpropertychange",Pw)):t==="focusout"&&Cy()}function gA(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ah(al)}function yA(t,e){if(t==="click")return ah(e)}function vA(t,e){if(t==="input"||t==="change")return ah(e)}function _A(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Wn=typeof Object.is=="function"?Object.is:_A;function ll(t,e){if(Wn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ef.call(e,i)||!Wn(t[i],e[i]))return!1}return!0}function by(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ny(t,e){var n=by(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=by(n)}}function xw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?xw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function kw(){for(var t=window,e=hc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=hc(t.document)}return e}function Yp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function wA(t){var e=kw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&xw(n.ownerDocument.documentElement,n)){if(r!==null&&Yp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Ny(n,s);var o=Ny(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var EA=Dr&&"documentMode"in document&&11>=document.documentMode,qs=null,wf=null,Ba=null,Ef=!1;function Dy(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ef||qs==null||qs!==hc(r)||(r=qs,"selectionStart"in r&&Yp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ba&&ll(Ba,r)||(Ba=r,r=vc(wf,"onSelect"),0<r.length&&(e=new Kp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=qs)))}function wu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ks={animationend:wu("Animation","AnimationEnd"),animationiteration:wu("Animation","AnimationIteration"),animationstart:wu("Animation","AnimationStart"),transitionend:wu("Transition","TransitionEnd")},gd={},Cw={};Dr&&(Cw=document.createElement("div").style,"AnimationEvent"in window||(delete Ks.animationend.animation,delete Ks.animationiteration.animation,delete Ks.animationstart.animation),"TransitionEvent"in window||delete Ks.transitionend.transition);function lh(t){if(gd[t])return gd[t];if(!Ks[t])return t;var e=Ks[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Cw)return gd[t]=e[n];return t}var bw=lh("animationend"),Nw=lh("animationiteration"),Dw=lh("animationstart"),Lw=lh("transitionend"),Ow=new Map,Ly="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ci(t,e){Ow.set(t,e),Es(e,[t])}for(var yd=0;yd<Ly.length;yd++){var vd=Ly[yd],TA=vd.toLowerCase(),IA=vd[0].toUpperCase()+vd.slice(1);Ci(TA,"on"+IA)}Ci(bw,"onAnimationEnd");Ci(Nw,"onAnimationIteration");Ci(Dw,"onAnimationStart");Ci("dblclick","onDoubleClick");Ci("focusin","onFocus");Ci("focusout","onBlur");Ci(Lw,"onTransitionEnd");go("onMouseEnter",["mouseout","mouseover"]);go("onMouseLeave",["mouseout","mouseover"]);go("onPointerEnter",["pointerout","pointerover"]);go("onPointerLeave",["pointerout","pointerover"]);Es("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Es("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Es("onBeforeInput",["compositionend","keypress","textInput","paste"]);Es("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Es("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Es("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ca="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),SA=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ca));function Oy(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,TR(r,e,void 0,t),t.currentTarget=null}function Mw(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Oy(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Oy(i,l,c),s=u}}}if(fc)throw t=gf,fc=!1,gf=null,t}function ze(t,e){var n=e[Af];n===void 0&&(n=e[Af]=new Set);var r=t+"__bubble";n.has(r)||(Vw(e,t,2,!1),n.add(r))}function _d(t,e,n){var r=0;e&&(r|=4),Vw(n,t,r,e)}var Eu="_reactListening"+Math.random().toString(36).slice(2);function ul(t){if(!t[Eu]){t[Eu]=!0,H0.forEach(function(n){n!=="selectionchange"&&(SA.has(n)||_d(n,!1,t),_d(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Eu]||(e[Eu]=!0,_d("selectionchange",!1,e))}}function Vw(t,e,n,r){switch(ww(e)){case 1:var i=UR;break;case 4:i=FR;break;default:i=Wp}n=i.bind(null,e,n,t),i=void 0,!mf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function wd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Ki(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}ow(function(){var c=s,d=zp(n),f=[];e:{var m=Ow.get(t);if(m!==void 0){var _=Kp,T=t;switch(t){case"keypress":if($u(n)===0)break e;case"keydown":case"keyup":_=eA;break;case"focusin":T="focus",_=fd;break;case"focusout":T="blur",_=fd;break;case"beforeblur":case"afterblur":_=fd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Iy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=$R;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=rA;break;case bw:case Nw:case Dw:_=WR;break;case Lw:_=sA;break;case"scroll":_=jR;break;case"wheel":_=aA;break;case"copy":case"cut":case"paste":_=KR;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=Ry}var A=(e&4)!==0,b=!A&&t==="scroll",I=A?m!==null?m+"Capture":null:m;A=[];for(var v=c,S;v!==null;){S=v;var L=S.stateNode;if(S.tag===5&&L!==null&&(S=L,I!==null&&(L=rl(v,I),L!=null&&A.push(cl(v,L,S)))),b)break;v=v.return}0<A.length&&(m=new _(m,T,null,n,d),f.push({event:m,listeners:A}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",m&&n!==ff&&(T=n.relatedTarget||n.fromElement)&&(Ki(T)||T[Lr]))break e;if((_||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,_?(T=n.relatedTarget||n.toElement,_=c,T=T?Ki(T):null,T!==null&&(b=Ts(T),T!==b||T.tag!==5&&T.tag!==6)&&(T=null)):(_=null,T=c),_!==T)){if(A=Iy,L="onMouseLeave",I="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(A=Ry,L="onPointerLeave",I="onPointerEnter",v="pointer"),b=_==null?m:Gs(_),S=T==null?m:Gs(T),m=new A(L,v+"leave",_,n,d),m.target=b,m.relatedTarget=S,L=null,Ki(d)===c&&(A=new A(I,v+"enter",T,n,d),A.target=S,A.relatedTarget=b,L=A),b=L,_&&T)t:{for(A=_,I=T,v=0,S=A;S;S=Vs(S))v++;for(S=0,L=I;L;L=Vs(L))S++;for(;0<v-S;)A=Vs(A),v--;for(;0<S-v;)I=Vs(I),S--;for(;v--;){if(A===I||I!==null&&A===I.alternate)break t;A=Vs(A),I=Vs(I)}A=null}else A=null;_!==null&&My(f,m,_,A,!1),T!==null&&b!==null&&My(f,b,T,A,!0)}}e:{if(m=c?Gs(c):window,_=m.nodeName&&m.nodeName.toLowerCase(),_==="select"||_==="input"&&m.type==="file")var F=pA;else if(xy(m))if(Aw)F=vA;else{F=gA;var x=mA}else(_=m.nodeName)&&_.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(F=yA);if(F&&(F=F(t,c))){Rw(f,F,n,d);break e}x&&x(t,m,c),t==="focusout"&&(x=m._wrapperState)&&x.controlled&&m.type==="number"&&lf(m,"number",m.value)}switch(x=c?Gs(c):window,t){case"focusin":(xy(x)||x.contentEditable==="true")&&(qs=x,wf=c,Ba=null);break;case"focusout":Ba=wf=qs=null;break;case"mousedown":Ef=!0;break;case"contextmenu":case"mouseup":case"dragend":Ef=!1,Dy(f,n,d);break;case"selectionchange":if(EA)break;case"keydown":case"keyup":Dy(f,n,d)}var w;if(Qp)e:{switch(t){case"compositionstart":var g="onCompositionStart";break e;case"compositionend":g="onCompositionEnd";break e;case"compositionupdate":g="onCompositionUpdate";break e}g=void 0}else Ws?Iw(t,n)&&(g="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(g="onCompositionStart");g&&(Tw&&n.locale!=="ko"&&(Ws||g!=="onCompositionStart"?g==="onCompositionEnd"&&Ws&&(w=Ew()):(li=d,qp="value"in li?li.value:li.textContent,Ws=!0)),x=vc(c,g),0<x.length&&(g=new Sy(g,t,null,n,d),f.push({event:g,listeners:x}),w?g.data=w:(w=Sw(n),w!==null&&(g.data=w)))),(w=uA?cA(t,n):hA(t,n))&&(c=vc(c,"onBeforeInput"),0<c.length&&(d=new Sy("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=w))}Mw(f,e)})}function cl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function vc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=rl(t,n),s!=null&&r.unshift(cl(t,s,i)),s=rl(t,e),s!=null&&r.push(cl(t,s,i))),t=t.return}return r}function Vs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function My(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=rl(n,s),u!=null&&o.unshift(cl(n,u,l))):i||(u=rl(n,s),u!=null&&o.push(cl(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var RA=/\r\n?/g,AA=/\u0000|\uFFFD/g;function Vy(t){return(typeof t=="string"?t:""+t).replace(RA,`
`).replace(AA,"")}function Tu(t,e,n){if(e=Vy(e),Vy(t)!==e&&n)throw Error(H(425))}function _c(){}var Tf=null,If=null;function Sf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Rf=typeof setTimeout=="function"?setTimeout:void 0,PA=typeof clearTimeout=="function"?clearTimeout:void 0,Uy=typeof Promise=="function"?Promise:void 0,xA=typeof queueMicrotask=="function"?queueMicrotask:typeof Uy<"u"?function(t){return Uy.resolve(null).then(t).catch(kA)}:Rf;function kA(t){setTimeout(function(){throw t})}function Ed(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ol(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ol(e)}function pi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Fy(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var jo=Math.random().toString(36).slice(2),rr="__reactFiber$"+jo,hl="__reactProps$"+jo,Lr="__reactContainer$"+jo,Af="__reactEvents$"+jo,CA="__reactListeners$"+jo,bA="__reactHandles$"+jo;function Ki(t){var e=t[rr];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Lr]||n[rr]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Fy(t);t!==null;){if(n=t[rr])return n;t=Fy(t)}return e}t=n,n=t.parentNode}return null}function Ol(t){return t=t[rr]||t[Lr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Gs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(H(33))}function uh(t){return t[hl]||null}var Pf=[],Qs=-1;function bi(t){return{current:t}}function He(t){0>Qs||(t.current=Pf[Qs],Pf[Qs]=null,Qs--)}function Ue(t,e){Qs++,Pf[Qs]=t.current,t.current=e}var Ri={},Kt=bi(Ri),rn=bi(!1),os=Ri;function yo(t,e){var n=t.type.contextTypes;if(!n)return Ri;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function sn(t){return t=t.childContextTypes,t!=null}function wc(){He(rn),He(Kt)}function jy(t,e,n){if(Kt.current!==Ri)throw Error(H(168));Ue(Kt,e),Ue(rn,n)}function Uw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(H(108,mR(t)||"Unknown",i));return Je({},n,r)}function Ec(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ri,os=Kt.current,Ue(Kt,t),Ue(rn,rn.current),!0}function zy(t,e,n){var r=t.stateNode;if(!r)throw Error(H(169));n?(t=Uw(t,e,os),r.__reactInternalMemoizedMergedChildContext=t,He(rn),He(Kt),Ue(Kt,t)):He(rn),Ue(rn,n)}var Sr=null,ch=!1,Td=!1;function Fw(t){Sr===null?Sr=[t]:Sr.push(t)}function NA(t){ch=!0,Fw(t)}function Ni(){if(!Td&&Sr!==null){Td=!0;var t=0,e=Ne;try{var n=Sr;for(Ne=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Sr=null,ch=!1}catch(i){throw Sr!==null&&(Sr=Sr.slice(t+1)),cw($p,Ni),i}finally{Ne=e,Td=!1}}return null}var Ys=[],Xs=0,Tc=null,Ic=0,Tn=[],In=0,as=null,Rr=1,Ar="";function Bi(t,e){Ys[Xs++]=Ic,Ys[Xs++]=Tc,Tc=t,Ic=e}function jw(t,e,n){Tn[In++]=Rr,Tn[In++]=Ar,Tn[In++]=as,as=t;var r=Rr;t=Ar;var i=32-$n(r)-1;r&=~(1<<i),n+=1;var s=32-$n(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Rr=1<<32-$n(e)+i|n<<i|r,Ar=s+t}else Rr=1<<s|n<<i|r,Ar=t}function Xp(t){t.return!==null&&(Bi(t,1),jw(t,1,0))}function Jp(t){for(;t===Tc;)Tc=Ys[--Xs],Ys[Xs]=null,Ic=Ys[--Xs],Ys[Xs]=null;for(;t===as;)as=Tn[--In],Tn[In]=null,Ar=Tn[--In],Tn[In]=null,Rr=Tn[--In],Tn[In]=null}var gn=null,fn=null,We=!1,jn=null;function zw(t,e){var n=Sn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function $y(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,gn=t,fn=pi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,gn=t,fn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=as!==null?{id:Rr,overflow:Ar}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Sn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,gn=t,fn=null,!0):!1;default:return!1}}function xf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function kf(t){if(We){var e=fn;if(e){var n=e;if(!$y(t,e)){if(xf(t))throw Error(H(418));e=pi(n.nextSibling);var r=gn;e&&$y(t,e)?zw(r,n):(t.flags=t.flags&-4097|2,We=!1,gn=t)}}else{if(xf(t))throw Error(H(418));t.flags=t.flags&-4097|2,We=!1,gn=t}}}function By(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;gn=t}function Iu(t){if(t!==gn)return!1;if(!We)return By(t),We=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Sf(t.type,t.memoizedProps)),e&&(e=fn)){if(xf(t))throw $w(),Error(H(418));for(;e;)zw(t,e),e=pi(e.nextSibling)}if(By(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(H(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){fn=pi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}fn=null}}else fn=gn?pi(t.stateNode.nextSibling):null;return!0}function $w(){for(var t=fn;t;)t=pi(t.nextSibling)}function vo(){fn=gn=null,We=!1}function Zp(t){jn===null?jn=[t]:jn.push(t)}var DA=jr.ReactCurrentBatchConfig;function _a(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(H(309));var r=n.stateNode}if(!r)throw Error(H(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(H(284));if(!n._owner)throw Error(H(290,t))}return t}function Su(t,e){throw t=Object.prototype.toString.call(e),Error(H(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Hy(t){var e=t._init;return e(t._payload)}function Bw(t){function e(I,v){if(t){var S=I.deletions;S===null?(I.deletions=[v],I.flags|=16):S.push(v)}}function n(I,v){if(!t)return null;for(;v!==null;)e(I,v),v=v.sibling;return null}function r(I,v){for(I=new Map;v!==null;)v.key!==null?I.set(v.key,v):I.set(v.index,v),v=v.sibling;return I}function i(I,v){return I=vi(I,v),I.index=0,I.sibling=null,I}function s(I,v,S){return I.index=S,t?(S=I.alternate,S!==null?(S=S.index,S<v?(I.flags|=2,v):S):(I.flags|=2,v)):(I.flags|=1048576,v)}function o(I){return t&&I.alternate===null&&(I.flags|=2),I}function l(I,v,S,L){return v===null||v.tag!==6?(v=kd(S,I.mode,L),v.return=I,v):(v=i(v,S),v.return=I,v)}function u(I,v,S,L){var F=S.type;return F===Hs?d(I,v,S.props.children,L,S.key):v!==null&&(v.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Zr&&Hy(F)===v.type)?(L=i(v,S.props),L.ref=_a(I,v,S),L.return=I,L):(L=Qu(S.type,S.key,S.props,null,I.mode,L),L.ref=_a(I,v,S),L.return=I,L)}function c(I,v,S,L){return v===null||v.tag!==4||v.stateNode.containerInfo!==S.containerInfo||v.stateNode.implementation!==S.implementation?(v=Cd(S,I.mode,L),v.return=I,v):(v=i(v,S.children||[]),v.return=I,v)}function d(I,v,S,L,F){return v===null||v.tag!==7?(v=ns(S,I.mode,L,F),v.return=I,v):(v=i(v,S),v.return=I,v)}function f(I,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return v=kd(""+v,I.mode,S),v.return=I,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case fu:return S=Qu(v.type,v.key,v.props,null,I.mode,S),S.ref=_a(I,null,v),S.return=I,S;case Bs:return v=Cd(v,I.mode,S),v.return=I,v;case Zr:var L=v._init;return f(I,L(v._payload),S)}if(xa(v)||pa(v))return v=ns(v,I.mode,S,null),v.return=I,v;Su(I,v)}return null}function m(I,v,S,L){var F=v!==null?v.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return F!==null?null:l(I,v,""+S,L);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case fu:return S.key===F?u(I,v,S,L):null;case Bs:return S.key===F?c(I,v,S,L):null;case Zr:return F=S._init,m(I,v,F(S._payload),L)}if(xa(S)||pa(S))return F!==null?null:d(I,v,S,L,null);Su(I,S)}return null}function _(I,v,S,L,F){if(typeof L=="string"&&L!==""||typeof L=="number")return I=I.get(S)||null,l(v,I,""+L,F);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case fu:return I=I.get(L.key===null?S:L.key)||null,u(v,I,L,F);case Bs:return I=I.get(L.key===null?S:L.key)||null,c(v,I,L,F);case Zr:var x=L._init;return _(I,v,S,x(L._payload),F)}if(xa(L)||pa(L))return I=I.get(S)||null,d(v,I,L,F,null);Su(v,L)}return null}function T(I,v,S,L){for(var F=null,x=null,w=v,g=v=0,E=null;w!==null&&g<S.length;g++){w.index>g?(E=w,w=null):E=w.sibling;var R=m(I,w,S[g],L);if(R===null){w===null&&(w=E);break}t&&w&&R.alternate===null&&e(I,w),v=s(R,v,g),x===null?F=R:x.sibling=R,x=R,w=E}if(g===S.length)return n(I,w),We&&Bi(I,g),F;if(w===null){for(;g<S.length;g++)w=f(I,S[g],L),w!==null&&(v=s(w,v,g),x===null?F=w:x.sibling=w,x=w);return We&&Bi(I,g),F}for(w=r(I,w);g<S.length;g++)E=_(w,I,g,S[g],L),E!==null&&(t&&E.alternate!==null&&w.delete(E.key===null?g:E.key),v=s(E,v,g),x===null?F=E:x.sibling=E,x=E);return t&&w.forEach(function(k){return e(I,k)}),We&&Bi(I,g),F}function A(I,v,S,L){var F=pa(S);if(typeof F!="function")throw Error(H(150));if(S=F.call(S),S==null)throw Error(H(151));for(var x=F=null,w=v,g=v=0,E=null,R=S.next();w!==null&&!R.done;g++,R=S.next()){w.index>g?(E=w,w=null):E=w.sibling;var k=m(I,w,R.value,L);if(k===null){w===null&&(w=E);break}t&&w&&k.alternate===null&&e(I,w),v=s(k,v,g),x===null?F=k:x.sibling=k,x=k,w=E}if(R.done)return n(I,w),We&&Bi(I,g),F;if(w===null){for(;!R.done;g++,R=S.next())R=f(I,R.value,L),R!==null&&(v=s(R,v,g),x===null?F=R:x.sibling=R,x=R);return We&&Bi(I,g),F}for(w=r(I,w);!R.done;g++,R=S.next())R=_(w,I,g,R.value,L),R!==null&&(t&&R.alternate!==null&&w.delete(R.key===null?g:R.key),v=s(R,v,g),x===null?F=R:x.sibling=R,x=R);return t&&w.forEach(function(N){return e(I,N)}),We&&Bi(I,g),F}function b(I,v,S,L){if(typeof S=="object"&&S!==null&&S.type===Hs&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case fu:e:{for(var F=S.key,x=v;x!==null;){if(x.key===F){if(F=S.type,F===Hs){if(x.tag===7){n(I,x.sibling),v=i(x,S.props.children),v.return=I,I=v;break e}}else if(x.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Zr&&Hy(F)===x.type){n(I,x.sibling),v=i(x,S.props),v.ref=_a(I,x,S),v.return=I,I=v;break e}n(I,x);break}else e(I,x);x=x.sibling}S.type===Hs?(v=ns(S.props.children,I.mode,L,S.key),v.return=I,I=v):(L=Qu(S.type,S.key,S.props,null,I.mode,L),L.ref=_a(I,v,S),L.return=I,I=L)}return o(I);case Bs:e:{for(x=S.key;v!==null;){if(v.key===x)if(v.tag===4&&v.stateNode.containerInfo===S.containerInfo&&v.stateNode.implementation===S.implementation){n(I,v.sibling),v=i(v,S.children||[]),v.return=I,I=v;break e}else{n(I,v);break}else e(I,v);v=v.sibling}v=Cd(S,I.mode,L),v.return=I,I=v}return o(I);case Zr:return x=S._init,b(I,v,x(S._payload),L)}if(xa(S))return T(I,v,S,L);if(pa(S))return A(I,v,S,L);Su(I,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,v!==null&&v.tag===6?(n(I,v.sibling),v=i(v,S),v.return=I,I=v):(n(I,v),v=kd(S,I.mode,L),v.return=I,I=v),o(I)):n(I,v)}return b}var _o=Bw(!0),Hw=Bw(!1),Sc=bi(null),Rc=null,Js=null,em=null;function tm(){em=Js=Rc=null}function nm(t){var e=Sc.current;He(Sc),t._currentValue=e}function Cf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function uo(t,e){Rc=t,em=Js=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(nn=!0),t.firstContext=null)}function An(t){var e=t._currentValue;if(em!==t)if(t={context:t,memoizedValue:e,next:null},Js===null){if(Rc===null)throw Error(H(308));Js=t,Rc.dependencies={lanes:0,firstContext:t}}else Js=Js.next=t;return e}var Gi=null;function rm(t){Gi===null?Gi=[t]:Gi.push(t)}function Ww(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,rm(e)):(n.next=i.next,i.next=n),e.interleaved=n,Or(t,r)}function Or(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ei=!1;function im(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function qw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Cr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function mi(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Re&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Or(t,n)}return i=r.interleaved,i===null?(e.next=e,rm(r)):(e.next=i.next,i.next=e),r.interleaved=e,Or(t,n)}function Bu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Bp(t,n)}}function Wy(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ac(t,e,n,r){var i=t.updateQueue;ei=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=u))}if(s!==null){var f=i.baseState;o=0,d=c=u=null,l=s;do{var m=l.lane,_=l.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:_,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var T=t,A=l;switch(m=e,_=n,A.tag){case 1:if(T=A.payload,typeof T=="function"){f=T.call(_,f,m);break e}f=T;break e;case 3:T.flags=T.flags&-65537|128;case 0:if(T=A.payload,m=typeof T=="function"?T.call(_,f,m):T,m==null)break e;f=Je({},f,m);break e;case 2:ei=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else _={eventTime:_,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=_,u=f):d=d.next=_,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);us|=o,t.lanes=o,t.memoizedState=f}}function qy(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(H(191,i));i.call(r)}}}var Ml={},ar=bi(Ml),dl=bi(Ml),fl=bi(Ml);function Qi(t){if(t===Ml)throw Error(H(174));return t}function sm(t,e){switch(Ue(fl,e),Ue(dl,t),Ue(ar,Ml),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:cf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=cf(e,t)}He(ar),Ue(ar,e)}function wo(){He(ar),He(dl),He(fl)}function Kw(t){Qi(fl.current);var e=Qi(ar.current),n=cf(e,t.type);e!==n&&(Ue(dl,t),Ue(ar,n))}function om(t){dl.current===t&&(He(ar),He(dl))}var Ye=bi(0);function Pc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Id=[];function am(){for(var t=0;t<Id.length;t++)Id[t]._workInProgressVersionPrimary=null;Id.length=0}var Hu=jr.ReactCurrentDispatcher,Sd=jr.ReactCurrentBatchConfig,ls=0,Xe=null,yt=null,Et=null,xc=!1,Ha=!1,pl=0,LA=0;function Ft(){throw Error(H(321))}function lm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Wn(t[n],e[n]))return!1;return!0}function um(t,e,n,r,i,s){if(ls=s,Xe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Hu.current=t===null||t.memoizedState===null?UA:FA,t=n(r,i),Ha){s=0;do{if(Ha=!1,pl=0,25<=s)throw Error(H(301));s+=1,Et=yt=null,e.updateQueue=null,Hu.current=jA,t=n(r,i)}while(Ha)}if(Hu.current=kc,e=yt!==null&&yt.next!==null,ls=0,Et=yt=Xe=null,xc=!1,e)throw Error(H(300));return t}function cm(){var t=pl!==0;return pl=0,t}function tr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Et===null?Xe.memoizedState=Et=t:Et=Et.next=t,Et}function Pn(){if(yt===null){var t=Xe.alternate;t=t!==null?t.memoizedState:null}else t=yt.next;var e=Et===null?Xe.memoizedState:Et.next;if(e!==null)Et=e,yt=t;else{if(t===null)throw Error(H(310));yt=t,t={memoizedState:yt.memoizedState,baseState:yt.baseState,baseQueue:yt.baseQueue,queue:yt.queue,next:null},Et===null?Xe.memoizedState=Et=t:Et=Et.next=t}return Et}function ml(t,e){return typeof e=="function"?e(t):e}function Rd(t){var e=Pn(),n=e.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=t;var r=yt,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var d=c.lane;if((ls&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=f,o=r):u=u.next=f,Xe.lanes|=d,us|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,Wn(r,e.memoizedState)||(nn=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Xe.lanes|=s,us|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ad(t){var e=Pn(),n=e.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Wn(s,e.memoizedState)||(nn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Gw(){}function Qw(t,e){var n=Xe,r=Pn(),i=e(),s=!Wn(r.memoizedState,i);if(s&&(r.memoizedState=i,nn=!0),r=r.queue,hm(Jw.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Et!==null&&Et.memoizedState.tag&1){if(n.flags|=2048,gl(9,Xw.bind(null,n,r,i,e),void 0,null),It===null)throw Error(H(349));ls&30||Yw(n,e,i)}return i}function Yw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Xe.updateQueue,e===null?(e={lastEffect:null,stores:null},Xe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Xw(t,e,n,r){e.value=n,e.getSnapshot=r,Zw(e)&&e1(t)}function Jw(t,e,n){return n(function(){Zw(e)&&e1(t)})}function Zw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Wn(t,n)}catch{return!0}}function e1(t){var e=Or(t,1);e!==null&&Bn(e,t,1,-1)}function Ky(t){var e=tr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ml,lastRenderedState:t},e.queue=t,t=t.dispatch=VA.bind(null,Xe,t),[e.memoizedState,t]}function gl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Xe.updateQueue,e===null?(e={lastEffect:null,stores:null},Xe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function t1(){return Pn().memoizedState}function Wu(t,e,n,r){var i=tr();Xe.flags|=t,i.memoizedState=gl(1|e,n,void 0,r===void 0?null:r)}function hh(t,e,n,r){var i=Pn();r=r===void 0?null:r;var s=void 0;if(yt!==null){var o=yt.memoizedState;if(s=o.destroy,r!==null&&lm(r,o.deps)){i.memoizedState=gl(e,n,s,r);return}}Xe.flags|=t,i.memoizedState=gl(1|e,n,s,r)}function Gy(t,e){return Wu(8390656,8,t,e)}function hm(t,e){return hh(2048,8,t,e)}function n1(t,e){return hh(4,2,t,e)}function r1(t,e){return hh(4,4,t,e)}function i1(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function s1(t,e,n){return n=n!=null?n.concat([t]):null,hh(4,4,i1.bind(null,e,t),n)}function dm(){}function o1(t,e){var n=Pn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&lm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function a1(t,e){var n=Pn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&lm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function l1(t,e,n){return ls&21?(Wn(n,e)||(n=fw(),Xe.lanes|=n,us|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,nn=!0),t.memoizedState=n)}function OA(t,e){var n=Ne;Ne=n!==0&&4>n?n:4,t(!0);var r=Sd.transition;Sd.transition={};try{t(!1),e()}finally{Ne=n,Sd.transition=r}}function u1(){return Pn().memoizedState}function MA(t,e,n){var r=yi(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},c1(t))h1(e,n);else if(n=Ww(t,e,n,r),n!==null){var i=Xt();Bn(n,t,r,i),d1(n,e,r)}}function VA(t,e,n){var r=yi(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(c1(t))h1(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Wn(l,o)){var u=e.interleaved;u===null?(i.next=i,rm(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=Ww(t,e,i,r),n!==null&&(i=Xt(),Bn(n,t,r,i),d1(n,e,r))}}function c1(t){var e=t.alternate;return t===Xe||e!==null&&e===Xe}function h1(t,e){Ha=xc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function d1(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Bp(t,n)}}var kc={readContext:An,useCallback:Ft,useContext:Ft,useEffect:Ft,useImperativeHandle:Ft,useInsertionEffect:Ft,useLayoutEffect:Ft,useMemo:Ft,useReducer:Ft,useRef:Ft,useState:Ft,useDebugValue:Ft,useDeferredValue:Ft,useTransition:Ft,useMutableSource:Ft,useSyncExternalStore:Ft,useId:Ft,unstable_isNewReconciler:!1},UA={readContext:An,useCallback:function(t,e){return tr().memoizedState=[t,e===void 0?null:e],t},useContext:An,useEffect:Gy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Wu(4194308,4,i1.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Wu(4194308,4,t,e)},useInsertionEffect:function(t,e){return Wu(4,2,t,e)},useMemo:function(t,e){var n=tr();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=tr();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=MA.bind(null,Xe,t),[r.memoizedState,t]},useRef:function(t){var e=tr();return t={current:t},e.memoizedState=t},useState:Ky,useDebugValue:dm,useDeferredValue:function(t){return tr().memoizedState=t},useTransition:function(){var t=Ky(!1),e=t[0];return t=OA.bind(null,t[1]),tr().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Xe,i=tr();if(We){if(n===void 0)throw Error(H(407));n=n()}else{if(n=e(),It===null)throw Error(H(349));ls&30||Yw(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Gy(Jw.bind(null,r,s,t),[t]),r.flags|=2048,gl(9,Xw.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=tr(),e=It.identifierPrefix;if(We){var n=Ar,r=Rr;n=(r&~(1<<32-$n(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=pl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=LA++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},FA={readContext:An,useCallback:o1,useContext:An,useEffect:hm,useImperativeHandle:s1,useInsertionEffect:n1,useLayoutEffect:r1,useMemo:a1,useReducer:Rd,useRef:t1,useState:function(){return Rd(ml)},useDebugValue:dm,useDeferredValue:function(t){var e=Pn();return l1(e,yt.memoizedState,t)},useTransition:function(){var t=Rd(ml)[0],e=Pn().memoizedState;return[t,e]},useMutableSource:Gw,useSyncExternalStore:Qw,useId:u1,unstable_isNewReconciler:!1},jA={readContext:An,useCallback:o1,useContext:An,useEffect:hm,useImperativeHandle:s1,useInsertionEffect:n1,useLayoutEffect:r1,useMemo:a1,useReducer:Ad,useRef:t1,useState:function(){return Ad(ml)},useDebugValue:dm,useDeferredValue:function(t){var e=Pn();return yt===null?e.memoizedState=t:l1(e,yt.memoizedState,t)},useTransition:function(){var t=Ad(ml)[0],e=Pn().memoizedState;return[t,e]},useMutableSource:Gw,useSyncExternalStore:Qw,useId:u1,unstable_isNewReconciler:!1};function Vn(t,e){if(t&&t.defaultProps){e=Je({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function bf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Je({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var dh={isMounted:function(t){return(t=t._reactInternals)?Ts(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Xt(),i=yi(t),s=Cr(r,i);s.payload=e,n!=null&&(s.callback=n),e=mi(t,s,i),e!==null&&(Bn(e,t,i,r),Bu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Xt(),i=yi(t),s=Cr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=mi(t,s,i),e!==null&&(Bn(e,t,i,r),Bu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Xt(),r=yi(t),i=Cr(n,r);i.tag=2,e!=null&&(i.callback=e),e=mi(t,i,r),e!==null&&(Bn(e,t,r,n),Bu(e,t,r))}};function Qy(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ll(n,r)||!ll(i,s):!0}function f1(t,e,n){var r=!1,i=Ri,s=e.contextType;return typeof s=="object"&&s!==null?s=An(s):(i=sn(e)?os:Kt.current,r=e.contextTypes,s=(r=r!=null)?yo(t,i):Ri),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=dh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Yy(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&dh.enqueueReplaceState(e,e.state,null)}function Nf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},im(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=An(s):(s=sn(e)?os:Kt.current,i.context=yo(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(bf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&dh.enqueueReplaceState(i,i.state,null),Ac(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Eo(t,e){try{var n="",r=e;do n+=pR(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Pd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Df(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var zA=typeof WeakMap=="function"?WeakMap:Map;function p1(t,e,n){n=Cr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){bc||(bc=!0,Bf=r),Df(t,e)},n}function m1(t,e,n){n=Cr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Df(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Df(t,e),typeof r!="function"&&(gi===null?gi=new Set([this]):gi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Xy(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new zA;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=tP.bind(null,t,e,n),e.then(t,t))}function Jy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Zy(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Cr(-1,1),e.tag=2,mi(n,e,1))),n.lanes|=1),t)}var $A=jr.ReactCurrentOwner,nn=!1;function Yt(t,e,n,r){e.child=t===null?Hw(e,null,n,r):_o(e,t.child,n,r)}function ev(t,e,n,r,i){n=n.render;var s=e.ref;return uo(e,i),r=um(t,e,n,r,s,i),n=cm(),t!==null&&!nn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Mr(t,e,i)):(We&&n&&Xp(e),e.flags|=1,Yt(t,e,r,i),e.child)}function tv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!wm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,g1(t,e,s,r,i)):(t=Qu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ll,n(o,r)&&t.ref===e.ref)return Mr(t,e,i)}return e.flags|=1,t=vi(s,r),t.ref=e.ref,t.return=e,e.child=t}function g1(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ll(s,r)&&t.ref===e.ref)if(nn=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(nn=!0);else return e.lanes=t.lanes,Mr(t,e,i)}return Lf(t,e,n,r,i)}function y1(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ue(eo,hn),hn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ue(eo,hn),hn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Ue(eo,hn),hn|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Ue(eo,hn),hn|=r;return Yt(t,e,i,n),e.child}function v1(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Lf(t,e,n,r,i){var s=sn(n)?os:Kt.current;return s=yo(e,s),uo(e,i),n=um(t,e,n,r,s,i),r=cm(),t!==null&&!nn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Mr(t,e,i)):(We&&r&&Xp(e),e.flags|=1,Yt(t,e,n,i),e.child)}function nv(t,e,n,r,i){if(sn(n)){var s=!0;Ec(e)}else s=!1;if(uo(e,i),e.stateNode===null)qu(t,e),f1(e,n,r),Nf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=An(c):(c=sn(n)?os:Kt.current,c=yo(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&Yy(e,o,r,c),ei=!1;var m=e.memoizedState;o.state=m,Ac(e,r,o,i),u=e.memoizedState,l!==r||m!==u||rn.current||ei?(typeof d=="function"&&(bf(e,n,d,r),u=e.memoizedState),(l=ei||Qy(e,n,l,r,m,u,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,qw(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Vn(e.type,l),o.props=c,f=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=An(u):(u=sn(n)?os:Kt.current,u=yo(e,u));var _=n.getDerivedStateFromProps;(d=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==f||m!==u)&&Yy(e,o,r,u),ei=!1,m=e.memoizedState,o.state=m,Ac(e,r,o,i);var T=e.memoizedState;l!==f||m!==T||rn.current||ei?(typeof _=="function"&&(bf(e,n,_,r),T=e.memoizedState),(c=ei||Qy(e,n,c,r,m,T,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,T,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,T,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=T),o.props=r,o.state=T,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Of(t,e,n,r,s,i)}function Of(t,e,n,r,i,s){v1(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&zy(e,n,!1),Mr(t,e,s);r=e.stateNode,$A.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=_o(e,t.child,null,s),e.child=_o(e,null,l,s)):Yt(t,e,l,s),e.memoizedState=r.state,i&&zy(e,n,!0),e.child}function _1(t){var e=t.stateNode;e.pendingContext?jy(t,e.pendingContext,e.pendingContext!==e.context):e.context&&jy(t,e.context,!1),sm(t,e.containerInfo)}function rv(t,e,n,r,i){return vo(),Zp(i),e.flags|=256,Yt(t,e,n,r),e.child}var Mf={dehydrated:null,treeContext:null,retryLane:0};function Vf(t){return{baseLanes:t,cachePool:null,transitions:null}}function w1(t,e,n){var r=e.pendingProps,i=Ye.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ue(Ye,i&1),t===null)return kf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=mh(o,r,0,null),t=ns(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Vf(n),e.memoizedState=Mf,t):fm(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return BA(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=vi(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=vi(l,s):(s=ns(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Vf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Mf,r}return s=t.child,t=s.sibling,r=vi(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function fm(t,e){return e=mh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ru(t,e,n,r){return r!==null&&Zp(r),_o(e,t.child,null,n),t=fm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function BA(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Pd(Error(H(422))),Ru(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=mh({mode:"visible",children:r.children},i,0,null),s=ns(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&_o(e,t.child,null,o),e.child.memoizedState=Vf(o),e.memoizedState=Mf,s);if(!(e.mode&1))return Ru(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(H(419)),r=Pd(s,r,void 0),Ru(t,e,o,r)}if(l=(o&t.childLanes)!==0,nn||l){if(r=It,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Or(t,i),Bn(r,t,i,-1))}return _m(),r=Pd(Error(H(421))),Ru(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=nP.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,fn=pi(i.nextSibling),gn=e,We=!0,jn=null,t!==null&&(Tn[In++]=Rr,Tn[In++]=Ar,Tn[In++]=as,Rr=t.id,Ar=t.overflow,as=e),e=fm(e,r.children),e.flags|=4096,e)}function iv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Cf(t.return,e,n)}function xd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function E1(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Yt(t,e,r.children,n),r=Ye.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&iv(t,n,e);else if(t.tag===19)iv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ue(Ye,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Pc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),xd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Pc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}xd(e,!0,n,null,s);break;case"together":xd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function qu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Mr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),us|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(H(153));if(e.child!==null){for(t=e.child,n=vi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=vi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function HA(t,e,n){switch(e.tag){case 3:_1(e),vo();break;case 5:Kw(e);break;case 1:sn(e.type)&&Ec(e);break;case 4:sm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Ue(Sc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ue(Ye,Ye.current&1),e.flags|=128,null):n&e.child.childLanes?w1(t,e,n):(Ue(Ye,Ye.current&1),t=Mr(t,e,n),t!==null?t.sibling:null);Ue(Ye,Ye.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return E1(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ue(Ye,Ye.current),r)break;return null;case 22:case 23:return e.lanes=0,y1(t,e,n)}return Mr(t,e,n)}var T1,Uf,I1,S1;T1=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Uf=function(){};I1=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Qi(ar.current);var s=null;switch(n){case"input":i=of(t,i),r=of(t,r),s=[];break;case"select":i=Je({},i,{value:void 0}),r=Je({},r,{value:void 0}),s=[];break;case"textarea":i=uf(t,i),r=uf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=_c)}hf(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(tl.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(tl.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&ze("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};S1=function(t,e,n,r){n!==r&&(e.flags|=4)};function wa(t,e){if(!We)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function jt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function WA(t,e,n){var r=e.pendingProps;switch(Jp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(e),null;case 1:return sn(e.type)&&wc(),jt(e),null;case 3:return r=e.stateNode,wo(),He(rn),He(Kt),am(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Iu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,jn!==null&&(qf(jn),jn=null))),Uf(t,e),jt(e),null;case 5:om(e);var i=Qi(fl.current);if(n=e.type,t!==null&&e.stateNode!=null)I1(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(H(166));return jt(e),null}if(t=Qi(ar.current),Iu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[rr]=e,r[hl]=s,t=(e.mode&1)!==0,n){case"dialog":ze("cancel",r),ze("close",r);break;case"iframe":case"object":case"embed":ze("load",r);break;case"video":case"audio":for(i=0;i<Ca.length;i++)ze(Ca[i],r);break;case"source":ze("error",r);break;case"img":case"image":case"link":ze("error",r),ze("load",r);break;case"details":ze("toggle",r);break;case"input":fy(r,s),ze("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ze("invalid",r);break;case"textarea":my(r,s),ze("invalid",r)}hf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Tu(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Tu(r.textContent,l,t),i=["children",""+l]):tl.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ze("scroll",r)}switch(n){case"input":pu(r),py(r,s,!0);break;case"textarea":pu(r),gy(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=_c)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=J0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[rr]=e,t[hl]=r,T1(t,e,!1,!1),e.stateNode=t;e:{switch(o=df(n,r),n){case"dialog":ze("cancel",t),ze("close",t),i=r;break;case"iframe":case"object":case"embed":ze("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ca.length;i++)ze(Ca[i],t);i=r;break;case"source":ze("error",t),i=r;break;case"img":case"image":case"link":ze("error",t),ze("load",t),i=r;break;case"details":ze("toggle",t),i=r;break;case"input":fy(t,r),i=of(t,r),ze("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Je({},r,{value:void 0}),ze("invalid",t);break;case"textarea":my(t,r),i=uf(t,r),ze("invalid",t);break;default:i=r}hf(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?tw(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Z0(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&nl(t,u):typeof u=="number"&&nl(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(tl.hasOwnProperty(s)?u!=null&&s==="onScroll"&&ze("scroll",t):u!=null&&Vp(t,s,u,o))}switch(n){case"input":pu(t),py(t,r,!1);break;case"textarea":pu(t),gy(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Si(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?so(t,!!r.multiple,s,!1):r.defaultValue!=null&&so(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=_c)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return jt(e),null;case 6:if(t&&e.stateNode!=null)S1(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(H(166));if(n=Qi(fl.current),Qi(ar.current),Iu(e)){if(r=e.stateNode,n=e.memoizedProps,r[rr]=e,(s=r.nodeValue!==n)&&(t=gn,t!==null))switch(t.tag){case 3:Tu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Tu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[rr]=e,e.stateNode=r}return jt(e),null;case 13:if(He(Ye),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(We&&fn!==null&&e.mode&1&&!(e.flags&128))$w(),vo(),e.flags|=98560,s=!1;else if(s=Iu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(H(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(H(317));s[rr]=e}else vo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;jt(e),s=!1}else jn!==null&&(qf(jn),jn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ye.current&1?vt===0&&(vt=3):_m())),e.updateQueue!==null&&(e.flags|=4),jt(e),null);case 4:return wo(),Uf(t,e),t===null&&ul(e.stateNode.containerInfo),jt(e),null;case 10:return nm(e.type._context),jt(e),null;case 17:return sn(e.type)&&wc(),jt(e),null;case 19:if(He(Ye),s=e.memoizedState,s===null)return jt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)wa(s,!1);else{if(vt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Pc(t),o!==null){for(e.flags|=128,wa(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ue(Ye,Ye.current&1|2),e.child}t=t.sibling}s.tail!==null&&lt()>To&&(e.flags|=128,r=!0,wa(s,!1),e.lanes=4194304)}else{if(!r)if(t=Pc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),wa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!We)return jt(e),null}else 2*lt()-s.renderingStartTime>To&&n!==1073741824&&(e.flags|=128,r=!0,wa(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=lt(),e.sibling=null,n=Ye.current,Ue(Ye,r?n&1|2:n&1),e):(jt(e),null);case 22:case 23:return vm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?hn&1073741824&&(jt(e),e.subtreeFlags&6&&(e.flags|=8192)):jt(e),null;case 24:return null;case 25:return null}throw Error(H(156,e.tag))}function qA(t,e){switch(Jp(e),e.tag){case 1:return sn(e.type)&&wc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return wo(),He(rn),He(Kt),am(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return om(e),null;case 13:if(He(Ye),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(H(340));vo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return He(Ye),null;case 4:return wo(),null;case 10:return nm(e.type._context),null;case 22:case 23:return vm(),null;case 24:return null;default:return null}}var Au=!1,Bt=!1,KA=typeof WeakSet=="function"?WeakSet:Set,J=null;function Zs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){nt(t,e,r)}else n.current=null}function Ff(t,e,n){try{n()}catch(r){nt(t,e,r)}}var sv=!1;function GA(t,e){if(Tf=gc,t=kw(),Yp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,d=0,f=t,m=null;t:for(;;){for(var _;f!==n||i!==0&&f.nodeType!==3||(l=o+i),f!==s||r!==0&&f.nodeType!==3||(u=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(_=f.firstChild)!==null;)m=f,f=_;for(;;){if(f===t)break t;if(m===n&&++c===i&&(l=o),m===s&&++d===r&&(u=o),(_=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=_}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(If={focusedElem:t,selectionRange:n},gc=!1,J=e;J!==null;)if(e=J,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,J=t;else for(;J!==null;){e=J;try{var T=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(T!==null){var A=T.memoizedProps,b=T.memoizedState,I=e.stateNode,v=I.getSnapshotBeforeUpdate(e.elementType===e.type?A:Vn(e.type,A),b);I.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(H(163))}}catch(L){nt(e,e.return,L)}if(t=e.sibling,t!==null){t.return=e.return,J=t;break}J=e.return}return T=sv,sv=!1,T}function Wa(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ff(e,n,s)}i=i.next}while(i!==r)}}function fh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function jf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function R1(t){var e=t.alternate;e!==null&&(t.alternate=null,R1(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[rr],delete e[hl],delete e[Af],delete e[CA],delete e[bA])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function A1(t){return t.tag===5||t.tag===3||t.tag===4}function ov(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||A1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function zf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=_c));else if(r!==4&&(t=t.child,t!==null))for(zf(t,e,n),t=t.sibling;t!==null;)zf(t,e,n),t=t.sibling}function $f(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for($f(t,e,n),t=t.sibling;t!==null;)$f(t,e,n),t=t.sibling}var At=null,Un=!1;function Qr(t,e,n){for(n=n.child;n!==null;)P1(t,e,n),n=n.sibling}function P1(t,e,n){if(or&&typeof or.onCommitFiberUnmount=="function")try{or.onCommitFiberUnmount(sh,n)}catch{}switch(n.tag){case 5:Bt||Zs(n,e);case 6:var r=At,i=Un;At=null,Qr(t,e,n),At=r,Un=i,At!==null&&(Un?(t=At,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):At.removeChild(n.stateNode));break;case 18:At!==null&&(Un?(t=At,n=n.stateNode,t.nodeType===8?Ed(t.parentNode,n):t.nodeType===1&&Ed(t,n),ol(t)):Ed(At,n.stateNode));break;case 4:r=At,i=Un,At=n.stateNode.containerInfo,Un=!0,Qr(t,e,n),At=r,Un=i;break;case 0:case 11:case 14:case 15:if(!Bt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ff(n,e,o),i=i.next}while(i!==r)}Qr(t,e,n);break;case 1:if(!Bt&&(Zs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){nt(n,e,l)}Qr(t,e,n);break;case 21:Qr(t,e,n);break;case 22:n.mode&1?(Bt=(r=Bt)||n.memoizedState!==null,Qr(t,e,n),Bt=r):Qr(t,e,n);break;default:Qr(t,e,n)}}function av(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new KA),e.forEach(function(r){var i=rP.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Mn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:At=l.stateNode,Un=!1;break e;case 3:At=l.stateNode.containerInfo,Un=!0;break e;case 4:At=l.stateNode.containerInfo,Un=!0;break e}l=l.return}if(At===null)throw Error(H(160));P1(s,o,i),At=null,Un=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){nt(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)x1(e,t),e=e.sibling}function x1(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Mn(e,t),er(t),r&4){try{Wa(3,t,t.return),fh(3,t)}catch(A){nt(t,t.return,A)}try{Wa(5,t,t.return)}catch(A){nt(t,t.return,A)}}break;case 1:Mn(e,t),er(t),r&512&&n!==null&&Zs(n,n.return);break;case 5:if(Mn(e,t),er(t),r&512&&n!==null&&Zs(n,n.return),t.flags&32){var i=t.stateNode;try{nl(i,"")}catch(A){nt(t,t.return,A)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Y0(i,s),df(l,o);var c=df(l,s);for(o=0;o<u.length;o+=2){var d=u[o],f=u[o+1];d==="style"?tw(i,f):d==="dangerouslySetInnerHTML"?Z0(i,f):d==="children"?nl(i,f):Vp(i,d,f,c)}switch(l){case"input":af(i,s);break;case"textarea":X0(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?so(i,!!s.multiple,_,!1):m!==!!s.multiple&&(s.defaultValue!=null?so(i,!!s.multiple,s.defaultValue,!0):so(i,!!s.multiple,s.multiple?[]:"",!1))}i[hl]=s}catch(A){nt(t,t.return,A)}}break;case 6:if(Mn(e,t),er(t),r&4){if(t.stateNode===null)throw Error(H(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(A){nt(t,t.return,A)}}break;case 3:if(Mn(e,t),er(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ol(e.containerInfo)}catch(A){nt(t,t.return,A)}break;case 4:Mn(e,t),er(t);break;case 13:Mn(e,t),er(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(gm=lt())),r&4&&av(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Bt=(c=Bt)||d,Mn(e,t),Bt=c):Mn(e,t),er(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(J=t,d=t.child;d!==null;){for(f=J=d;J!==null;){switch(m=J,_=m.child,m.tag){case 0:case 11:case 14:case 15:Wa(4,m,m.return);break;case 1:Zs(m,m.return);var T=m.stateNode;if(typeof T.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,T.props=e.memoizedProps,T.state=e.memoizedState,T.componentWillUnmount()}catch(A){nt(r,n,A)}}break;case 5:Zs(m,m.return);break;case 22:if(m.memoizedState!==null){uv(f);continue}}_!==null?(_.return=m,J=_):uv(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=ew("display",o))}catch(A){nt(t,t.return,A)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(A){nt(t,t.return,A)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Mn(e,t),er(t),r&4&&av(t);break;case 21:break;default:Mn(e,t),er(t)}}function er(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(A1(n)){var r=n;break e}n=n.return}throw Error(H(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(nl(i,""),r.flags&=-33);var s=ov(t);$f(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=ov(t);zf(t,l,o);break;default:throw Error(H(161))}}catch(u){nt(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function QA(t,e,n){J=t,k1(t)}function k1(t,e,n){for(var r=(t.mode&1)!==0;J!==null;){var i=J,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Au;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||Bt;l=Au;var c=Bt;if(Au=o,(Bt=u)&&!c)for(J=i;J!==null;)o=J,u=o.child,o.tag===22&&o.memoizedState!==null?cv(i):u!==null?(u.return=o,J=u):cv(i);for(;s!==null;)J=s,k1(s),s=s.sibling;J=i,Au=l,Bt=c}lv(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,J=s):lv(t)}}function lv(t){for(;J!==null;){var e=J;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Bt||fh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Bt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Vn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&qy(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}qy(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&ol(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(H(163))}Bt||e.flags&512&&jf(e)}catch(m){nt(e,e.return,m)}}if(e===t){J=null;break}if(n=e.sibling,n!==null){n.return=e.return,J=n;break}J=e.return}}function uv(t){for(;J!==null;){var e=J;if(e===t){J=null;break}var n=e.sibling;if(n!==null){n.return=e.return,J=n;break}J=e.return}}function cv(t){for(;J!==null;){var e=J;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{fh(4,e)}catch(u){nt(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){nt(e,i,u)}}var s=e.return;try{jf(e)}catch(u){nt(e,s,u)}break;case 5:var o=e.return;try{jf(e)}catch(u){nt(e,o,u)}}}catch(u){nt(e,e.return,u)}if(e===t){J=null;break}var l=e.sibling;if(l!==null){l.return=e.return,J=l;break}J=e.return}}var YA=Math.ceil,Cc=jr.ReactCurrentDispatcher,pm=jr.ReactCurrentOwner,Rn=jr.ReactCurrentBatchConfig,Re=0,It=null,ft=null,kt=0,hn=0,eo=bi(0),vt=0,yl=null,us=0,ph=0,mm=0,qa=null,en=null,gm=0,To=1/0,Tr=null,bc=!1,Bf=null,gi=null,Pu=!1,ui=null,Nc=0,Ka=0,Hf=null,Ku=-1,Gu=0;function Xt(){return Re&6?lt():Ku!==-1?Ku:Ku=lt()}function yi(t){return t.mode&1?Re&2&&kt!==0?kt&-kt:DA.transition!==null?(Gu===0&&(Gu=fw()),Gu):(t=Ne,t!==0||(t=window.event,t=t===void 0?16:ww(t.type)),t):1}function Bn(t,e,n,r){if(50<Ka)throw Ka=0,Hf=null,Error(H(185));Dl(t,n,r),(!(Re&2)||t!==It)&&(t===It&&(!(Re&2)&&(ph|=n),vt===4&&ni(t,kt)),on(t,r),n===1&&Re===0&&!(e.mode&1)&&(To=lt()+500,ch&&Ni()))}function on(t,e){var n=t.callbackNode;DR(t,e);var r=mc(t,t===It?kt:0);if(r===0)n!==null&&_y(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&_y(n),e===1)t.tag===0?NA(hv.bind(null,t)):Fw(hv.bind(null,t)),xA(function(){!(Re&6)&&Ni()}),n=null;else{switch(pw(r)){case 1:n=$p;break;case 4:n=hw;break;case 16:n=pc;break;case 536870912:n=dw;break;default:n=pc}n=V1(n,C1.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function C1(t,e){if(Ku=-1,Gu=0,Re&6)throw Error(H(327));var n=t.callbackNode;if(co()&&t.callbackNode!==n)return null;var r=mc(t,t===It?kt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Dc(t,r);else{e=r;var i=Re;Re|=2;var s=N1();(It!==t||kt!==e)&&(Tr=null,To=lt()+500,ts(t,e));do try{ZA();break}catch(l){b1(t,l)}while(!0);tm(),Cc.current=s,Re=i,ft!==null?e=0:(It=null,kt=0,e=vt)}if(e!==0){if(e===2&&(i=yf(t),i!==0&&(r=i,e=Wf(t,i))),e===1)throw n=yl,ts(t,0),ni(t,r),on(t,lt()),n;if(e===6)ni(t,r);else{if(i=t.current.alternate,!(r&30)&&!XA(i)&&(e=Dc(t,r),e===2&&(s=yf(t),s!==0&&(r=s,e=Wf(t,s))),e===1))throw n=yl,ts(t,0),ni(t,r),on(t,lt()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(H(345));case 2:Hi(t,en,Tr);break;case 3:if(ni(t,r),(r&130023424)===r&&(e=gm+500-lt(),10<e)){if(mc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Xt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Rf(Hi.bind(null,t,en,Tr),e);break}Hi(t,en,Tr);break;case 4:if(ni(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-$n(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=lt()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*YA(r/1960))-r,10<r){t.timeoutHandle=Rf(Hi.bind(null,t,en,Tr),r);break}Hi(t,en,Tr);break;case 5:Hi(t,en,Tr);break;default:throw Error(H(329))}}}return on(t,lt()),t.callbackNode===n?C1.bind(null,t):null}function Wf(t,e){var n=qa;return t.current.memoizedState.isDehydrated&&(ts(t,e).flags|=256),t=Dc(t,e),t!==2&&(e=en,en=n,e!==null&&qf(e)),t}function qf(t){en===null?en=t:en.push.apply(en,t)}function XA(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Wn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ni(t,e){for(e&=~mm,e&=~ph,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-$n(e),r=1<<n;t[n]=-1,e&=~r}}function hv(t){if(Re&6)throw Error(H(327));co();var e=mc(t,0);if(!(e&1))return on(t,lt()),null;var n=Dc(t,e);if(t.tag!==0&&n===2){var r=yf(t);r!==0&&(e=r,n=Wf(t,r))}if(n===1)throw n=yl,ts(t,0),ni(t,e),on(t,lt()),n;if(n===6)throw Error(H(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Hi(t,en,Tr),on(t,lt()),null}function ym(t,e){var n=Re;Re|=1;try{return t(e)}finally{Re=n,Re===0&&(To=lt()+500,ch&&Ni())}}function cs(t){ui!==null&&ui.tag===0&&!(Re&6)&&co();var e=Re;Re|=1;var n=Rn.transition,r=Ne;try{if(Rn.transition=null,Ne=1,t)return t()}finally{Ne=r,Rn.transition=n,Re=e,!(Re&6)&&Ni()}}function vm(){hn=eo.current,He(eo)}function ts(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,PA(n)),ft!==null)for(n=ft.return;n!==null;){var r=n;switch(Jp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&wc();break;case 3:wo(),He(rn),He(Kt),am();break;case 5:om(r);break;case 4:wo();break;case 13:He(Ye);break;case 19:He(Ye);break;case 10:nm(r.type._context);break;case 22:case 23:vm()}n=n.return}if(It=t,ft=t=vi(t.current,null),kt=hn=e,vt=0,yl=null,mm=ph=us=0,en=qa=null,Gi!==null){for(e=0;e<Gi.length;e++)if(n=Gi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Gi=null}return t}function b1(t,e){do{var n=ft;try{if(tm(),Hu.current=kc,xc){for(var r=Xe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}xc=!1}if(ls=0,Et=yt=Xe=null,Ha=!1,pl=0,pm.current=null,n===null||n.return===null){vt=1,yl=e,ft=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=kt,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=l,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var _=Jy(o);if(_!==null){_.flags&=-257,Zy(_,o,l,s,e),_.mode&1&&Xy(s,c,e),e=_,u=c;var T=e.updateQueue;if(T===null){var A=new Set;A.add(u),e.updateQueue=A}else T.add(u);break e}else{if(!(e&1)){Xy(s,c,e),_m();break e}u=Error(H(426))}}else if(We&&l.mode&1){var b=Jy(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Zy(b,o,l,s,e),Zp(Eo(u,l));break e}}s=u=Eo(u,l),vt!==4&&(vt=2),qa===null?qa=[s]:qa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var I=p1(s,u,e);Wy(s,I);break e;case 1:l=u;var v=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(gi===null||!gi.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var L=m1(s,l,e);Wy(s,L);break e}}s=s.return}while(s!==null)}L1(n)}catch(F){e=F,ft===n&&n!==null&&(ft=n=n.return);continue}break}while(!0)}function N1(){var t=Cc.current;return Cc.current=kc,t===null?kc:t}function _m(){(vt===0||vt===3||vt===2)&&(vt=4),It===null||!(us&268435455)&&!(ph&268435455)||ni(It,kt)}function Dc(t,e){var n=Re;Re|=2;var r=N1();(It!==t||kt!==e)&&(Tr=null,ts(t,e));do try{JA();break}catch(i){b1(t,i)}while(!0);if(tm(),Re=n,Cc.current=r,ft!==null)throw Error(H(261));return It=null,kt=0,vt}function JA(){for(;ft!==null;)D1(ft)}function ZA(){for(;ft!==null&&!SR();)D1(ft)}function D1(t){var e=M1(t.alternate,t,hn);t.memoizedProps=t.pendingProps,e===null?L1(t):ft=e,pm.current=null}function L1(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=qA(n,e),n!==null){n.flags&=32767,ft=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{vt=6,ft=null;return}}else if(n=WA(n,e,hn),n!==null){ft=n;return}if(e=e.sibling,e!==null){ft=e;return}ft=e=t}while(e!==null);vt===0&&(vt=5)}function Hi(t,e,n){var r=Ne,i=Rn.transition;try{Rn.transition=null,Ne=1,eP(t,e,n,r)}finally{Rn.transition=i,Ne=r}return null}function eP(t,e,n,r){do co();while(ui!==null);if(Re&6)throw Error(H(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(H(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(LR(t,s),t===It&&(ft=It=null,kt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Pu||(Pu=!0,V1(pc,function(){return co(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Rn.transition,Rn.transition=null;var o=Ne;Ne=1;var l=Re;Re|=4,pm.current=null,GA(t,n),x1(n,t),wA(If),gc=!!Tf,If=Tf=null,t.current=n,QA(n),RR(),Re=l,Ne=o,Rn.transition=s}else t.current=n;if(Pu&&(Pu=!1,ui=t,Nc=i),s=t.pendingLanes,s===0&&(gi=null),xR(n.stateNode),on(t,lt()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(bc)throw bc=!1,t=Bf,Bf=null,t;return Nc&1&&t.tag!==0&&co(),s=t.pendingLanes,s&1?t===Hf?Ka++:(Ka=0,Hf=t):Ka=0,Ni(),null}function co(){if(ui!==null){var t=pw(Nc),e=Rn.transition,n=Ne;try{if(Rn.transition=null,Ne=16>t?16:t,ui===null)var r=!1;else{if(t=ui,ui=null,Nc=0,Re&6)throw Error(H(331));var i=Re;for(Re|=4,J=t.current;J!==null;){var s=J,o=s.child;if(J.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(J=c;J!==null;){var d=J;switch(d.tag){case 0:case 11:case 15:Wa(8,d,s)}var f=d.child;if(f!==null)f.return=d,J=f;else for(;J!==null;){d=J;var m=d.sibling,_=d.return;if(R1(d),d===c){J=null;break}if(m!==null){m.return=_,J=m;break}J=_}}}var T=s.alternate;if(T!==null){var A=T.child;if(A!==null){T.child=null;do{var b=A.sibling;A.sibling=null,A=b}while(A!==null)}}J=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,J=o;else e:for(;J!==null;){if(s=J,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Wa(9,s,s.return)}var I=s.sibling;if(I!==null){I.return=s.return,J=I;break e}J=s.return}}var v=t.current;for(J=v;J!==null;){o=J;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,J=S;else e:for(o=v;J!==null;){if(l=J,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:fh(9,l)}}catch(F){nt(l,l.return,F)}if(l===o){J=null;break e}var L=l.sibling;if(L!==null){L.return=l.return,J=L;break e}J=l.return}}if(Re=i,Ni(),or&&typeof or.onPostCommitFiberRoot=="function")try{or.onPostCommitFiberRoot(sh,t)}catch{}r=!0}return r}finally{Ne=n,Rn.transition=e}}return!1}function dv(t,e,n){e=Eo(n,e),e=p1(t,e,1),t=mi(t,e,1),e=Xt(),t!==null&&(Dl(t,1,e),on(t,e))}function nt(t,e,n){if(t.tag===3)dv(t,t,n);else for(;e!==null;){if(e.tag===3){dv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(gi===null||!gi.has(r))){t=Eo(n,t),t=m1(e,t,1),e=mi(e,t,1),t=Xt(),e!==null&&(Dl(e,1,t),on(e,t));break}}e=e.return}}function tP(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Xt(),t.pingedLanes|=t.suspendedLanes&n,It===t&&(kt&n)===n&&(vt===4||vt===3&&(kt&130023424)===kt&&500>lt()-gm?ts(t,0):mm|=n),on(t,e)}function O1(t,e){e===0&&(t.mode&1?(e=yu,yu<<=1,!(yu&130023424)&&(yu=4194304)):e=1);var n=Xt();t=Or(t,e),t!==null&&(Dl(t,e,n),on(t,n))}function nP(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),O1(t,n)}function rP(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(H(314))}r!==null&&r.delete(e),O1(t,n)}var M1;M1=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||rn.current)nn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return nn=!1,HA(t,e,n);nn=!!(t.flags&131072)}else nn=!1,We&&e.flags&1048576&&jw(e,Ic,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;qu(t,e),t=e.pendingProps;var i=yo(e,Kt.current);uo(e,n),i=um(null,e,r,t,i,n);var s=cm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,sn(r)?(s=!0,Ec(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,im(e),i.updater=dh,e.stateNode=i,i._reactInternals=e,Nf(e,r,t,n),e=Of(null,e,r,!0,s,n)):(e.tag=0,We&&s&&Xp(e),Yt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(qu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=sP(r),t=Vn(r,t),i){case 0:e=Lf(null,e,r,t,n);break e;case 1:e=nv(null,e,r,t,n);break e;case 11:e=ev(null,e,r,t,n);break e;case 14:e=tv(null,e,r,Vn(r.type,t),n);break e}throw Error(H(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vn(r,i),Lf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vn(r,i),nv(t,e,r,i,n);case 3:e:{if(_1(e),t===null)throw Error(H(387));r=e.pendingProps,s=e.memoizedState,i=s.element,qw(t,e),Ac(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Eo(Error(H(423)),e),e=rv(t,e,r,n,i);break e}else if(r!==i){i=Eo(Error(H(424)),e),e=rv(t,e,r,n,i);break e}else for(fn=pi(e.stateNode.containerInfo.firstChild),gn=e,We=!0,jn=null,n=Hw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(vo(),r===i){e=Mr(t,e,n);break e}Yt(t,e,r,n)}e=e.child}return e;case 5:return Kw(e),t===null&&kf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Sf(r,i)?o=null:s!==null&&Sf(r,s)&&(e.flags|=32),v1(t,e),Yt(t,e,o,n),e.child;case 6:return t===null&&kf(e),null;case 13:return w1(t,e,n);case 4:return sm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=_o(e,null,r,n):Yt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vn(r,i),ev(t,e,r,i,n);case 7:return Yt(t,e,e.pendingProps,n),e.child;case 8:return Yt(t,e,e.pendingProps.children,n),e.child;case 12:return Yt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Ue(Sc,r._currentValue),r._currentValue=o,s!==null)if(Wn(s.value,o)){if(s.children===i.children&&!rn.current){e=Mr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Cr(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Cf(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(H(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Cf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Yt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,uo(e,n),i=An(i),r=r(i),e.flags|=1,Yt(t,e,r,n),e.child;case 14:return r=e.type,i=Vn(r,e.pendingProps),i=Vn(r.type,i),tv(t,e,r,i,n);case 15:return g1(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vn(r,i),qu(t,e),e.tag=1,sn(r)?(t=!0,Ec(e)):t=!1,uo(e,n),f1(e,r,i),Nf(e,r,i,n),Of(null,e,r,!0,t,n);case 19:return E1(t,e,n);case 22:return y1(t,e,n)}throw Error(H(156,e.tag))};function V1(t,e){return cw(t,e)}function iP(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Sn(t,e,n,r){return new iP(t,e,n,r)}function wm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function sP(t){if(typeof t=="function")return wm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Fp)return 11;if(t===jp)return 14}return 2}function vi(t,e){var n=t.alternate;return n===null?(n=Sn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Qu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")wm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Hs:return ns(n.children,i,s,e);case Up:o=8,i|=8;break;case tf:return t=Sn(12,n,e,i|2),t.elementType=tf,t.lanes=s,t;case nf:return t=Sn(13,n,e,i),t.elementType=nf,t.lanes=s,t;case rf:return t=Sn(19,n,e,i),t.elementType=rf,t.lanes=s,t;case K0:return mh(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case W0:o=10;break e;case q0:o=9;break e;case Fp:o=11;break e;case jp:o=14;break e;case Zr:o=16,r=null;break e}throw Error(H(130,t==null?t:typeof t,""))}return e=Sn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ns(t,e,n,r){return t=Sn(7,t,r,e),t.lanes=n,t}function mh(t,e,n,r){return t=Sn(22,t,r,e),t.elementType=K0,t.lanes=n,t.stateNode={isHidden:!1},t}function kd(t,e,n){return t=Sn(6,t,null,e),t.lanes=n,t}function Cd(t,e,n){return e=Sn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function oP(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=cd(0),this.expirationTimes=cd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Em(t,e,n,r,i,s,o,l,u){return t=new oP(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Sn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},im(s),t}function aP(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Bs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function U1(t){if(!t)return Ri;t=t._reactInternals;e:{if(Ts(t)!==t||t.tag!==1)throw Error(H(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(sn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(H(171))}if(t.tag===1){var n=t.type;if(sn(n))return Uw(t,n,e)}return e}function F1(t,e,n,r,i,s,o,l,u){return t=Em(n,r,!0,t,i,s,o,l,u),t.context=U1(null),n=t.current,r=Xt(),i=yi(n),s=Cr(r,i),s.callback=e??null,mi(n,s,i),t.current.lanes=i,Dl(t,i,r),on(t,r),t}function gh(t,e,n,r){var i=e.current,s=Xt(),o=yi(i);return n=U1(n),e.context===null?e.context=n:e.pendingContext=n,e=Cr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=mi(i,e,o),t!==null&&(Bn(t,i,o,s),Bu(t,i,o)),o}function Lc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function fv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Tm(t,e){fv(t,e),(t=t.alternate)&&fv(t,e)}function lP(){return null}var j1=typeof reportError=="function"?reportError:function(t){console.error(t)};function Im(t){this._internalRoot=t}yh.prototype.render=Im.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(H(409));gh(t,e,null,null)};yh.prototype.unmount=Im.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;cs(function(){gh(null,t,null,null)}),e[Lr]=null}};function yh(t){this._internalRoot=t}yh.prototype.unstable_scheduleHydration=function(t){if(t){var e=yw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ti.length&&e!==0&&e<ti[n].priority;n++);ti.splice(n,0,t),n===0&&_w(t)}};function Sm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function vh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function pv(){}function uP(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Lc(o);s.call(c)}}var o=F1(e,r,t,0,null,!1,!1,"",pv);return t._reactRootContainer=o,t[Lr]=o.current,ul(t.nodeType===8?t.parentNode:t),cs(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=Lc(u);l.call(c)}}var u=Em(t,0,!1,null,null,!1,!1,"",pv);return t._reactRootContainer=u,t[Lr]=u.current,ul(t.nodeType===8?t.parentNode:t),cs(function(){gh(e,u,n,r)}),u}function _h(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Lc(o);l.call(u)}}gh(e,o,t,i)}else o=uP(n,e,t,i,r);return Lc(o)}mw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ka(e.pendingLanes);n!==0&&(Bp(e,n|1),on(e,lt()),!(Re&6)&&(To=lt()+500,Ni()))}break;case 13:cs(function(){var r=Or(t,1);if(r!==null){var i=Xt();Bn(r,t,1,i)}}),Tm(t,1)}};Hp=function(t){if(t.tag===13){var e=Or(t,134217728);if(e!==null){var n=Xt();Bn(e,t,134217728,n)}Tm(t,134217728)}};gw=function(t){if(t.tag===13){var e=yi(t),n=Or(t,e);if(n!==null){var r=Xt();Bn(n,t,e,r)}Tm(t,e)}};yw=function(){return Ne};vw=function(t,e){var n=Ne;try{return Ne=t,e()}finally{Ne=n}};pf=function(t,e,n){switch(e){case"input":if(af(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=uh(r);if(!i)throw Error(H(90));Q0(r),af(r,i)}}}break;case"textarea":X0(t,n);break;case"select":e=n.value,e!=null&&so(t,!!n.multiple,e,!1)}};iw=ym;sw=cs;var cP={usingClientEntryPoint:!1,Events:[Ol,Gs,uh,nw,rw,ym]},Ea={findFiberByHostInstance:Ki,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},hP={bundleType:Ea.bundleType,version:Ea.version,rendererPackageName:Ea.rendererPackageName,rendererConfig:Ea.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:jr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=lw(t),t===null?null:t.stateNode},findFiberByHostInstance:Ea.findFiberByHostInstance||lP,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xu.isDisabled&&xu.supportsFiber)try{sh=xu.inject(hP),or=xu}catch{}}vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cP;vn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Sm(e))throw Error(H(200));return aP(t,e,null,n)};vn.createRoot=function(t,e){if(!Sm(t))throw Error(H(299));var n=!1,r="",i=j1;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Em(t,1,!1,null,null,n,!1,r,i),t[Lr]=e.current,ul(t.nodeType===8?t.parentNode:t),new Im(e)};vn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(H(188)):(t=Object.keys(t).join(","),Error(H(268,t)));return t=lw(e),t=t===null?null:t.stateNode,t};vn.flushSync=function(t){return cs(t)};vn.hydrate=function(t,e,n){if(!vh(e))throw Error(H(200));return _h(null,t,e,!0,n)};vn.hydrateRoot=function(t,e,n){if(!Sm(t))throw Error(H(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=j1;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=F1(e,null,t,1,n??null,i,!1,s,o),t[Lr]=e.current,ul(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new yh(e)};vn.render=function(t,e,n){if(!vh(e))throw Error(H(200));return _h(null,t,e,!1,n)};vn.unmountComponentAtNode=function(t){if(!vh(t))throw Error(H(40));return t._reactRootContainer?(cs(function(){_h(null,null,t,!1,function(){t._reactRootContainer=null,t[Lr]=null})}),!0):!1};vn.unstable_batchedUpdates=ym;vn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!vh(n))throw Error(H(200));if(t==null||t._reactInternals===void 0)throw Error(H(38));return _h(t,e,n,!1,r)};vn.version="18.3.1-next-f1338f8080-20240426";function z1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(z1)}catch(t){console.error(t)}}z1(),z0.exports=vn;var Rm=z0.exports;const dP=k0(Rm),fP=x0({__proto__:null,default:dP},[Rm]);var mv=Rm;Zd.createRoot=mv.createRoot,Zd.hydrateRoot=mv.hydrateRoot;/**
 * @remix-run/router v1.19.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qe(){return Qe=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Qe.apply(this,arguments)}var ct;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(ct||(ct={}));const gv="popstate";function pP(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return vl("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:hs(i)}return gP(e,n,null,t)}function ve(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Io(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function mP(){return Math.random().toString(36).substr(2,8)}function yv(t,e){return{usr:t.state,key:t.key,idx:e}}function vl(t,e,n,r){return n===void 0&&(n=null),Qe({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Di(e):e,{state:n,key:e&&e.key||r||mP()})}function hs(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Di(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function gP(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=ct.Pop,u=null,c=d();c==null&&(c=0,o.replaceState(Qe({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function f(){l=ct.Pop;let b=d(),I=b==null?null:b-c;c=b,u&&u({action:l,location:A.location,delta:I})}function m(b,I){l=ct.Push;let v=vl(A.location,b,I);c=d()+1;let S=yv(v,c),L=A.createHref(v);try{o.pushState(S,"",L)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;i.location.assign(L)}s&&u&&u({action:l,location:A.location,delta:1})}function _(b,I){l=ct.Replace;let v=vl(A.location,b,I);c=d();let S=yv(v,c),L=A.createHref(v);o.replaceState(S,"",L),s&&u&&u({action:l,location:A.location,delta:0})}function T(b){let I=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof b=="string"?b:hs(b);return v=v.replace(/ $/,"%20"),ve(I,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,I)}let A={get action(){return l},get location(){return t(i,o)},listen(b){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(gv,f),u=b,()=>{i.removeEventListener(gv,f),u=null}},createHref(b){return e(i,b)},createURL:T,encodeLocation(b){let I=T(b);return{pathname:I.pathname,search:I.search,hash:I.hash}},push:m,replace:_,go(b){return o.go(b)}};return A}var Oe;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Oe||(Oe={}));const yP=new Set(["lazy","caseSensitive","path","id","index","children"]);function vP(t){return t.index===!0}function _l(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,s)=>{let o=[...n,String(s)],l=typeof i.id=="string"?i.id:o.join("-");if(ve(i.index!==!0||!i.children,"Cannot specify children on an index route"),ve(!r[l],'Found a route id collision on id "'+l+`".  Route id's must be globally unique within Data Router usages`),vP(i)){let u=Qe({},i,e(i),{id:l});return r[l]=u,u}else{let u=Qe({},i,e(i),{id:l,children:void 0});return r[l]=u,i.children&&(u.children=_l(i.children,e,o,r)),u}})}function qi(t,e,n){return n===void 0&&(n="/"),Yu(t,e,n,!1)}function Yu(t,e,n,r){let i=typeof e=="string"?Di(e):e,s=zo(i.pathname||"/",n);if(s==null)return null;let o=$1(t);wP(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=bP(s);l=kP(o[u],c,r)}return l}function _P(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function $1(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(ve(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=br([r,u.relativePath]),d=n.concat(u);s.children&&s.children.length>0&&(ve(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),$1(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:PP(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of B1(s.path))i(s,o,u)}),e}function B1(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=B1(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function wP(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:xP(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const EP=/^:[\w-]+$/,TP=3,IP=2,SP=1,RP=10,AP=-2,vv=t=>t==="*";function PP(t,e){let n=t.split("/"),r=n.length;return n.some(vv)&&(r+=AP),e&&(r+=IP),n.filter(i=>!vv(i)).reduce((i,s)=>i+(EP.test(s)?TP:s===""?SP:RP),r)}function xP(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function kP(t,e,n){n===void 0&&(n=!1);let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",f=_v({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),m=u.route;if(!f&&c&&n&&!r[r.length-1].route.index&&(f=_v({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},d)),!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:br([s,f.pathname]),pathnameBase:LP(br([s,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(s=br([s,f.pathnameBase]))}return o}function _v(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=CP(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,d,f)=>{let{paramName:m,isOptional:_}=d;if(m==="*"){let A=l[f]||"";o=s.slice(0,s.length-A.length).replace(/(.)\/+$/,"$1")}const T=l[f];return _&&!T?c[m]=void 0:c[m]=(T||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function CP(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Io(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function bP(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Io(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function zo(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function NP(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Di(t):t;return{pathname:n?n.startsWith("/")?n:DP(n,e):e,search:OP(r),hash:MP(i)}}function DP(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function bd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function H1(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function wh(t,e){let n=H1(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Eh(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Di(t):(i=Qe({},t),ve(!i.pathname||!i.pathname.includes("?"),bd("?","pathname","search",i)),ve(!i.pathname||!i.pathname.includes("#"),bd("#","pathname","hash",i)),ve(!i.search||!i.search.includes("#"),bd("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),f-=1;i.pathname=m.join("/")}l=f>=0?e[f]:"/"}let u=NP(i,l),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const br=t=>t.join("/").replace(/\/\/+/g,"/"),LP=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),OP=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,MP=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class Oc{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function Th(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const W1=["post","put","patch","delete"],VP=new Set(W1),UP=["get",...W1],FP=new Set(UP),jP=new Set([301,302,303,307,308]),zP=new Set([307,308]),Nd={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},$P={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Ta={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Am=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,BP=t=>({hasErrorBoundary:!!t.hasErrorBoundary}),q1="remix-router-transitions";function HP(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",r=!n;ve(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(t.mapRouteProperties)i=t.mapRouteProperties;else if(t.detectErrorBoundary){let C=t.detectErrorBoundary;i=D=>({hasErrorBoundary:C(D)})}else i=BP;let s={},o=_l(t.routes,i,void 0,s),l,u=t.basename||"/",c=t.unstable_dataStrategy||QP,d=t.unstable_patchRoutesOnMiss,f=Qe({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,v7_skipActionErrorRevalidation:!1},t.future),m=null,_=new Set,T=null,A=null,b=null,I=t.hydrationData!=null,v=qi(o,t.history.location,u),S=null;if(v==null&&!d){let C=Qt(404,{pathname:t.history.location.pathname}),{matches:D,route:M}=kv(o);v=D,S={[M.id]:C}}v&&!t.hydrationData&&Xn(v,o,t.history.location.pathname).active&&(v=null);let L;if(v)if(v.some(C=>C.route.lazy))L=!1;else if(!v.some(C=>C.route.loader))L=!0;else if(f.v7_partialHydration){let C=t.hydrationData?t.hydrationData.loaderData:null,D=t.hydrationData?t.hydrationData.errors:null,M=z=>z.route.loader?typeof z.route.loader=="function"&&z.route.loader.hydrate===!0?!1:C&&C[z.route.id]!==void 0||D&&D[z.route.id]!==void 0:!0;if(D){let z=v.findIndex(G=>D[G.route.id]!==void 0);L=v.slice(0,z+1).every(M)}else L=v.every(M)}else L=t.hydrationData!=null;else if(L=!1,v=[],f.v7_partialHydration){let C=Xn(null,o,t.history.location.pathname);C.active&&C.matches&&(v=C.matches)}let F,x={historyAction:t.history.action,location:t.history.location,matches:v,initialized:L,navigation:Nd,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||S,fetchers:new Map,blockers:new Map},w=ct.Pop,g=!1,E,R=!1,k=new Map,N=null,P=!1,me=!1,ot=[],Z=new Set,Y=new Map,W=0,Q=-1,ne=new Map,ye=new Set,fe=new Map,ke=new Map,qe=new Set,et=new Map,Ke=new Map,Lt=new Map,Cn=!1;function bn(){if(m=t.history.listen(C=>{let{action:D,location:M,delta:z}=C;if(Cn){Cn=!1;return}Io(Ke.size===0||z!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let G=na({currentLocation:x.location,nextLocation:M,historyAction:D});if(G&&z!=null){Cn=!0,t.history.go(z*-1),Ui(G,{state:"blocked",location:M,proceed(){Ui(G,{state:"proceeding",proceed:void 0,reset:void 0,location:M}),t.history.go(z)},reset(){let te=new Map(x.blockers);te.set(G,Ta),De({blockers:te})}});return}return Yn(D,M)}),n){lx(e,k);let C=()=>ux(e,k);e.addEventListener("pagehide",C),N=()=>e.removeEventListener("pagehide",C)}return x.initialized||Yn(ct.Pop,x.location,{initialHydration:!0}),F}function Gn(){m&&m(),N&&N(),_.clear(),E&&E.abort(),x.fetchers.forEach((C,D)=>ks(D)),x.blockers.forEach((C,D)=>bs(D))}function Nn(C){return _.add(C),()=>_.delete(C)}function De(C,D){D===void 0&&(D={}),x=Qe({},x,C);let M=[],z=[];f.v7_fetcherPersist&&x.fetchers.forEach((G,te)=>{G.state==="idle"&&(qe.has(te)?z.push(te):M.push(te))}),[..._].forEach(G=>G(x,{deletedFetchers:z,unstable_viewTransitionOpts:D.viewTransitionOpts,unstable_flushSync:D.flushSync===!0})),f.v7_fetcherPersist&&(M.forEach(G=>x.fetchers.delete(G)),z.forEach(G=>ks(G)))}function Qn(C,D,M){var z,G;let{flushSync:te}=M===void 0?{}:M,ae=x.actionData!=null&&x.navigation.formMethod!=null&&Fn(x.navigation.formMethod)&&x.navigation.state==="loading"&&((z=C.state)==null?void 0:z._isRedirect)!==!0,q;D.actionData?Object.keys(D.actionData).length>0?q=D.actionData:q=null:ae?q=x.actionData:q=null;let ce=D.loaderData?Pv(x.loaderData,D.loaderData,D.matches||[],D.errors):x.loaderData,re=x.blockers;re.size>0&&(re=new Map(re),re.forEach((Ae,Ce)=>re.set(Ce,Ta)));let ie=g===!0||x.navigation.formMethod!=null&&Fn(x.navigation.formMethod)&&((G=C.state)==null?void 0:G._isRedirect)!==!0;l&&(o=l,l=void 0),P||w===ct.Pop||(w===ct.Push?t.history.push(C,C.state):w===ct.Replace&&t.history.replace(C,C.state));let _e;if(w===ct.Pop){let Ae=k.get(x.location.pathname);Ae&&Ae.has(C.pathname)?_e={currentLocation:x.location,nextLocation:C}:k.has(C.pathname)&&(_e={currentLocation:C,nextLocation:x.location})}else if(R){let Ae=k.get(x.location.pathname);Ae?Ae.add(C.pathname):(Ae=new Set([C.pathname]),k.set(x.location.pathname,Ae)),_e={currentLocation:x.location,nextLocation:C}}De(Qe({},D,{actionData:q,loaderData:ce,historyAction:w,location:C,initialized:!0,navigation:Nd,revalidation:"idle",restoreScrollPosition:ia(C,D.matches||x.matches),preventScrollReset:ie,blockers:re}),{viewTransitionOpts:_e,flushSync:te===!0}),w=ct.Pop,g=!1,R=!1,P=!1,me=!1,ot=[]}async function xs(C,D){if(typeof C=="number"){t.history.go(C);return}let M=Kf(x.location,x.matches,u,f.v7_prependBasename,C,f.v7_relativeSplatPath,D==null?void 0:D.fromRouteId,D==null?void 0:D.relative),{path:z,submission:G,error:te}=wv(f.v7_normalizeFormMethod,!1,M,D),ae=x.location,q=vl(x.location,z,D&&D.state);q=Qe({},q,t.history.encodeLocation(q));let ce=D&&D.replace!=null?D.replace:void 0,re=ct.Push;ce===!0?re=ct.Replace:ce===!1||G!=null&&Fn(G.formMethod)&&G.formAction===x.location.pathname+x.location.search&&(re=ct.Replace);let ie=D&&"preventScrollReset"in D?D.preventScrollReset===!0:void 0,_e=(D&&D.unstable_flushSync)===!0,Ae=na({currentLocation:ae,nextLocation:q,historyAction:re});if(Ae){Ui(Ae,{state:"blocked",location:q,proceed(){Ui(Ae,{state:"proceeding",proceed:void 0,reset:void 0,location:q}),xs(C,D)},reset(){let Ce=new Map(x.blockers);Ce.set(Ae,Ta),De({blockers:Ce})}});return}return await Yn(re,q,{submission:G,pendingError:te,preventScrollReset:ie,replace:D&&D.replace,enableViewTransition:D&&D.unstable_viewTransition,flushSync:_e})}function Yo(){if(gt(),De({revalidation:"loading"}),x.navigation.state!=="submitting"){if(x.navigation.state==="idle"){Yn(x.historyAction,x.location,{startUninterruptedRevalidation:!0});return}Yn(w||x.historyAction,x.navigation.location,{overrideNavigation:x.navigation})}}async function Yn(C,D,M){E&&E.abort(),E=null,w=C,P=(M&&M.startUninterruptedRevalidation)===!0,Ns(x.location,x.matches),g=(M&&M.preventScrollReset)===!0,R=(M&&M.enableViewTransition)===!0;let z=l||o,G=M&&M.overrideNavigation,te=qi(z,D,u),ae=(M&&M.flushSync)===!0,q=Xn(te,z,D.pathname);if(q.active&&q.matches&&(te=q.matches),!te){let{error:Ie,notFoundMatches:at,route:Ge}=yr(D.pathname);Qn(D,{matches:at,loaderData:{},errors:{[Ge.id]:Ie}},{flushSync:ae});return}if(x.initialized&&!me&&tx(x.location,D)&&!(M&&M.submission&&Fn(M.submission.formMethod))){Qn(D,{matches:te},{flushSync:ae});return}E=new AbortController;let ce=Us(t.history,D,E.signal,M&&M.submission),re;if(M&&M.pendingError)re=[to(te).route.id,{type:Oe.error,error:M.pendingError}];else if(M&&M.submission&&Fn(M.submission.formMethod)){let Ie=await Yh(ce,D,M.submission,te,q.active,{replace:M.replace,flushSync:ae});if(Ie.shortCircuited)return;if(Ie.pendingActionResult){let[at,Ge]=Ie.pendingActionResult;if(dn(Ge)&&Th(Ge.error)&&Ge.error.status===404){E=null,Qn(D,{matches:Ie.matches,loaderData:{},errors:{[at]:Ge.error}});return}}te=Ie.matches||te,re=Ie.pendingActionResult,G=Dd(D,M.submission),ae=!1,q.active=!1,ce=Us(t.history,ce.url,ce.signal)}let{shortCircuited:ie,matches:_e,loaderData:Ae,errors:Ce}=await Xh(ce,D,te,q.active,G,M&&M.submission,M&&M.fetcherSubmission,M&&M.replace,M&&M.initialHydration===!0,ae,re);ie||(E=null,Qn(D,Qe({matches:_e||te},xv(re),{loaderData:Ae,errors:Ce})))}async function Yh(C,D,M,z,G,te){te===void 0&&(te={}),gt();let ae=ox(D,M);if(De({navigation:ae},{flushSync:te.flushSync===!0}),G){let re=await ji(z,D.pathname,C.signal);if(re.type==="aborted")return{shortCircuited:!0};if(re.type==="error"){let{boundaryId:ie,error:_e}=Hr(D.pathname,re);return{matches:re.partialMatches,pendingActionResult:[ie,{type:Oe.error,error:_e}]}}else if(re.matches)z=re.matches;else{let{notFoundMatches:ie,error:_e,route:Ae}=yr(D.pathname);return{matches:ie,pendingActionResult:[Ae.id,{type:Oe.error,error:_e}]}}}let q,ce=ba(z,D);if(!ce.route.action&&!ce.route.lazy)q={type:Oe.error,error:Qt(405,{method:C.method,pathname:D.pathname,routeId:ce.route.id})};else if(q=(await Br("action",C,[ce],z))[0],C.signal.aborted)return{shortCircuited:!0};if(Xi(q)){let re;return te&&te.replace!=null?re=te.replace:re=Sv(q.response.headers.get("Location"),new URL(C.url),u)===x.location.pathname+x.location.search,await gr(C,q,{submission:M,replace:re}),{shortCircuited:!0}}if(Yi(q))throw Qt(400,{type:"defer-action"});if(dn(q)){let re=to(z,ce.route.id);return(te&&te.replace)!==!0&&(w=ct.Push),{matches:z,pendingActionResult:[re.route.id,q]}}return{matches:z,pendingActionResult:[ce.route.id,q]}}async function Xh(C,D,M,z,G,te,ae,q,ce,re,ie){let _e=G||Dd(D,te),Ae=te||ae||Dv(_e),Ce=!P&&(!f.v7_partialHydration||!ce);if(z){if(Ce){let Fe=Xo(ie);De(Qe({navigation:_e},Fe!==void 0?{actionData:Fe}:{}),{flushSync:re})}let pe=await ji(M,D.pathname,C.signal);if(pe.type==="aborted")return{shortCircuited:!0};if(pe.type==="error"){let{boundaryId:Fe,error:Mt}=Hr(D.pathname,pe);return{matches:pe.partialMatches,loaderData:{},errors:{[Fe]:Mt}}}else if(pe.matches)M=pe.matches;else{let{error:Fe,notFoundMatches:Mt,route:Le}=yr(D.pathname);return{matches:Mt,loaderData:{},errors:{[Le.id]:Fe}}}}let Ie=l||o,[at,Ge]=Ev(t.history,x,M,Ae,D,f.v7_partialHydration&&ce===!0,f.v7_skipActionErrorRevalidation,me,ot,Z,qe,fe,ye,Ie,u,ie);if(Fi(pe=>!(M&&M.some(Fe=>Fe.route.id===pe))||at&&at.some(Fe=>Fe.route.id===pe)),Q=++W,at.length===0&&Ge.length===0){let pe=Cs();return Qn(D,Qe({matches:M,loaderData:{},errors:ie&&dn(ie[1])?{[ie[0]]:ie[1].error}:null},xv(ie),pe?{fetchers:new Map(x.fetchers)}:{}),{flushSync:re}),{shortCircuited:!0}}if(Ce){let pe={};if(!z){pe.navigation=_e;let Fe=Xo(ie);Fe!==void 0&&(pe.actionData=Fe)}Ge.length>0&&(pe.fetchers=Jo(Ge)),De(pe,{flushSync:re})}Ge.forEach(pe=>{Y.has(pe.key)&&Dn(pe.key),pe.controller&&Y.set(pe.key,pe.controller)});let Wr=()=>Ge.forEach(pe=>Dn(pe.key));E&&E.signal.addEventListener("abort",Wr);let{loaderResults:Jn,fetcherResults:Ln}=await mt(x.matches,M,at,Ge,C);if(C.signal.aborted)return{shortCircuited:!0};E&&E.signal.removeEventListener("abort",Wr),Ge.forEach(pe=>Y.delete(pe.key));let _r=Cv([...Jn,...Ln]);if(_r){if(_r.idx>=at.length){let pe=Ge[_r.idx-at.length].key;ye.add(pe)}return await gr(C,_r.result,{replace:q}),{shortCircuited:!0}}let{loaderData:Zn,errors:Ot}=Av(x,M,at,Jn,ie,Ge,Ln,et);et.forEach((pe,Fe)=>{pe.subscribe(Mt=>{(Mt||pe.done)&&et.delete(Fe)})}),f.v7_partialHydration&&ce&&x.errors&&Object.entries(x.errors).filter(pe=>{let[Fe]=pe;return!at.some(Mt=>Mt.route.id===Fe)}).forEach(pe=>{let[Fe,Mt]=pe;Ot=Object.assign(Ot||{},{[Fe]:Mt})});let En=Cs(),qr=Zl(Q),Ds=En||qr||Ge.length>0;return Qe({matches:M,loaderData:Zn,errors:Ot},Ds?{fetchers:new Map(x.fetchers)}:{})}function Xo(C){if(C&&!dn(C[1]))return{[C[0]]:C[1].data};if(x.actionData)return Object.keys(x.actionData).length===0?null:x.actionData}function Jo(C){return C.forEach(D=>{let M=x.fetchers.get(D.key),z=Ia(void 0,M?M.data:void 0);x.fetchers.set(D.key,z)}),new Map(x.fetchers)}function Jl(C,D,M,z){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");Y.has(C)&&Dn(C);let G=(z&&z.unstable_flushSync)===!0,te=l||o,ae=Kf(x.location,x.matches,u,f.v7_prependBasename,M,f.v7_relativeSplatPath,D,z==null?void 0:z.relative),q=qi(te,ae,u),ce=Xn(q,te,ae);if(ce.active&&ce.matches&&(q=ce.matches),!q){wn(C,D,Qt(404,{pathname:ae}),{flushSync:G});return}let{path:re,submission:ie,error:_e}=wv(f.v7_normalizeFormMethod,!0,ae,z);if(_e){wn(C,D,_e,{flushSync:G});return}let Ae=ba(q,re);if(g=(z&&z.preventScrollReset)===!0,ie&&Fn(ie.formMethod)){Jh(C,D,re,Ae,q,ce.active,G,ie);return}fe.set(C,{routeId:D,path:re}),Zo(C,D,re,Ae,q,ce.active,G,ie)}async function Jh(C,D,M,z,G,te,ae,q){gt(),fe.delete(C);function ce(Le){if(!Le.route.action&&!Le.route.lazy){let ln=Qt(405,{method:q.formMethod,pathname:M,routeId:D});return wn(C,D,ln,{flushSync:ae}),!0}return!1}if(!te&&ce(z))return;let re=x.fetchers.get(C);an(C,ax(q,re),{flushSync:ae});let ie=new AbortController,_e=Us(t.history,M,ie.signal,q);if(te){let Le=await ji(G,M,_e.signal);if(Le.type==="aborted")return;if(Le.type==="error"){let{error:ln}=Hr(M,Le);wn(C,D,ln,{flushSync:ae});return}else if(Le.matches){if(G=Le.matches,z=ba(G,M),ce(z))return}else{wn(C,D,Qt(404,{pathname:M}),{flushSync:ae});return}}Y.set(C,ie);let Ae=W,Ie=(await Br("action",_e,[z],G))[0];if(_e.signal.aborted){Y.get(C)===ie&&Y.delete(C);return}if(f.v7_fetcherPersist&&qe.has(C)){if(Xi(Ie)||dn(Ie)){an(C,Xr(void 0));return}}else{if(Xi(Ie))if(Y.delete(C),Q>Ae){an(C,Xr(void 0));return}else return ye.add(C),an(C,Ia(q)),gr(_e,Ie,{fetcherSubmission:q});if(dn(Ie)){wn(C,D,Ie.error);return}}if(Yi(Ie))throw Qt(400,{type:"defer-action"});let at=x.navigation.location||x.location,Ge=Us(t.history,at,ie.signal),Wr=l||o,Jn=x.navigation.state!=="idle"?qi(Wr,x.navigation.location,u):x.matches;ve(Jn,"Didn't find any matches after fetcher action");let Ln=++W;ne.set(C,Ln);let _r=Ia(q,Ie.data);x.fetchers.set(C,_r);let[Zn,Ot]=Ev(t.history,x,Jn,q,at,!1,f.v7_skipActionErrorRevalidation,me,ot,Z,qe,fe,ye,Wr,u,[z.route.id,Ie]);Ot.filter(Le=>Le.key!==C).forEach(Le=>{let ln=Le.key,sa=x.fetchers.get(ln),tu=Ia(void 0,sa?sa.data:void 0);x.fetchers.set(ln,tu),Y.has(ln)&&Dn(ln),Le.controller&&Y.set(ln,Le.controller)}),De({fetchers:new Map(x.fetchers)});let En=()=>Ot.forEach(Le=>Dn(Le.key));ie.signal.addEventListener("abort",En);let{loaderResults:qr,fetcherResults:Ds}=await mt(x.matches,Jn,Zn,Ot,Ge);if(ie.signal.aborted)return;ie.signal.removeEventListener("abort",En),ne.delete(C),Y.delete(C),Ot.forEach(Le=>Y.delete(Le.key));let pe=Cv([...qr,...Ds]);if(pe){if(pe.idx>=Zn.length){let Le=Ot[pe.idx-Zn.length].key;ye.add(Le)}return gr(Ge,pe.result)}let{loaderData:Fe,errors:Mt}=Av(x,x.matches,Zn,qr,void 0,Ot,Ds,et);if(x.fetchers.has(C)){let Le=Xr(Ie.data);x.fetchers.set(C,Le)}Zl(Ln),x.navigation.state==="loading"&&Ln>Q?(ve(w,"Expected pending action"),E&&E.abort(),Qn(x.navigation.location,{matches:Jn,loaderData:Fe,errors:Mt,fetchers:new Map(x.fetchers)})):(De({errors:Mt,loaderData:Pv(x.loaderData,Fe,Jn,Mt),fetchers:new Map(x.fetchers)}),me=!1)}async function Zo(C,D,M,z,G,te,ae,q){let ce=x.fetchers.get(C);an(C,Ia(q,ce?ce.data:void 0),{flushSync:ae});let re=new AbortController,ie=Us(t.history,M,re.signal);if(te){let Ie=await ji(G,M,ie.signal);if(Ie.type==="aborted")return;if(Ie.type==="error"){let{error:at}=Hr(M,Ie);wn(C,D,at,{flushSync:ae});return}else if(Ie.matches)G=Ie.matches,z=ba(G,M);else{wn(C,D,Qt(404,{pathname:M}),{flushSync:ae});return}}Y.set(C,re);let _e=W,Ce=(await Br("loader",ie,[z],G))[0];if(Yi(Ce)&&(Ce=await X1(Ce,ie.signal,!0)||Ce),Y.get(C)===re&&Y.delete(C),!ie.signal.aborted){if(qe.has(C)){an(C,Xr(void 0));return}if(Xi(Ce))if(Q>_e){an(C,Xr(void 0));return}else{ye.add(C),await gr(ie,Ce);return}if(dn(Ce)){wn(C,D,Ce.error);return}ve(!Yi(Ce),"Unhandled fetcher deferred data"),an(C,Xr(Ce.data))}}async function gr(C,D,M){let{submission:z,fetcherSubmission:G,replace:te}=M===void 0?{}:M;D.response.headers.has("X-Remix-Revalidate")&&(me=!0);let ae=D.response.headers.get("Location");ve(ae,"Expected a Location header on the redirect Response"),ae=Sv(ae,new URL(C.url),u);let q=vl(x.location,ae,{_isRedirect:!0});if(n){let Ce=!1;if(D.response.headers.has("X-Remix-Reload-Document"))Ce=!0;else if(Am.test(ae)){const Ie=t.history.createURL(ae);Ce=Ie.origin!==e.location.origin||zo(Ie.pathname,u)==null}if(Ce){te?e.location.replace(ae):e.location.assign(ae);return}}E=null;let ce=te===!0||D.response.headers.has("X-Remix-Replace")?ct.Replace:ct.Push,{formMethod:re,formAction:ie,formEncType:_e}=x.navigation;!z&&!G&&re&&ie&&_e&&(z=Dv(x.navigation));let Ae=z||G;if(zP.has(D.response.status)&&Ae&&Fn(Ae.formMethod))await Yn(ce,q,{submission:Qe({},Ae,{formAction:ae}),preventScrollReset:g});else{let Ce=Dd(q,z);await Yn(ce,q,{overrideNavigation:Ce,fetcherSubmission:G,preventScrollReset:g})}}async function Br(C,D,M,z){try{let G=await YP(c,C,D,M,z,s,i);return await Promise.all(G.map((te,ae)=>{if(rx(te)){let q=te.result;return{type:Oe.redirect,response:ZP(q,D,M[ae].route.id,z,u,f.v7_relativeSplatPath)}}return JP(te)}))}catch(G){return M.map(()=>({type:Oe.error,error:G}))}}async function mt(C,D,M,z,G){let[te,...ae]=await Promise.all([M.length?Br("loader",G,M,D):[],...z.map(q=>{if(q.matches&&q.match&&q.controller){let ce=Us(t.history,q.path,q.controller.signal);return Br("loader",ce,[q.match],q.matches).then(re=>re[0])}else return Promise.resolve({type:Oe.error,error:Qt(404,{pathname:q.path})})})]);return await Promise.all([Nv(C,M,te,te.map(()=>G.signal),!1,x.loaderData),Nv(C,z.map(q=>q.match),ae,z.map(q=>q.controller?q.controller.signal:null),!0)]),{loaderResults:te,fetcherResults:ae}}function gt(){me=!0,ot.push(...Fi()),fe.forEach((C,D)=>{Y.has(D)&&(Z.add(D),Dn(D))})}function an(C,D,M){M===void 0&&(M={}),x.fetchers.set(C,D),De({fetchers:new Map(x.fetchers)},{flushSync:(M&&M.flushSync)===!0})}function wn(C,D,M,z){z===void 0&&(z={});let G=to(x.matches,D);ks(C),De({errors:{[G.route.id]:M},fetchers:new Map(x.fetchers)},{flushSync:(z&&z.flushSync)===!0})}function ea(C){return f.v7_fetcherPersist&&(ke.set(C,(ke.get(C)||0)+1),qe.has(C)&&qe.delete(C)),x.fetchers.get(C)||$P}function ks(C){let D=x.fetchers.get(C);Y.has(C)&&!(D&&D.state==="loading"&&ne.has(C))&&Dn(C),fe.delete(C),ne.delete(C),ye.delete(C),qe.delete(C),Z.delete(C),x.fetchers.delete(C)}function Vi(C){if(f.v7_fetcherPersist){let D=(ke.get(C)||0)-1;D<=0?(ke.delete(C),qe.add(C)):ke.set(C,D)}else ks(C);De({fetchers:new Map(x.fetchers)})}function Dn(C){let D=Y.get(C);ve(D,"Expected fetch controller: "+C),D.abort(),Y.delete(C)}function ta(C){for(let D of C){let M=ea(D),z=Xr(M.data);x.fetchers.set(D,z)}}function Cs(){let C=[],D=!1;for(let M of ye){let z=x.fetchers.get(M);ve(z,"Expected fetcher: "+M),z.state==="loading"&&(ye.delete(M),C.push(M),D=!0)}return ta(C),D}function Zl(C){let D=[];for(let[M,z]of ne)if(z<C){let G=x.fetchers.get(M);ve(G,"Expected fetcher: "+M),G.state==="loading"&&(Dn(M),ne.delete(M),D.push(M))}return ta(D),D.length>0}function Zh(C,D){let M=x.blockers.get(C)||Ta;return Ke.get(C)!==D&&Ke.set(C,D),M}function bs(C){x.blockers.delete(C),Ke.delete(C)}function Ui(C,D){let M=x.blockers.get(C)||Ta;ve(M.state==="unblocked"&&D.state==="blocked"||M.state==="blocked"&&D.state==="blocked"||M.state==="blocked"&&D.state==="proceeding"||M.state==="blocked"&&D.state==="unblocked"||M.state==="proceeding"&&D.state==="unblocked","Invalid blocker state transition: "+M.state+" -> "+D.state);let z=new Map(x.blockers);z.set(C,D),De({blockers:z})}function na(C){let{currentLocation:D,nextLocation:M,historyAction:z}=C;if(Ke.size===0)return;Ke.size>1&&Io(!1,"A router only supports one blocker at a time");let G=Array.from(Ke.entries()),[te,ae]=G[G.length-1],q=x.blockers.get(te);if(!(q&&q.state==="proceeding")&&ae({currentLocation:D,nextLocation:M,historyAction:z}))return te}function yr(C){let D=Qt(404,{pathname:C}),M=l||o,{matches:z,route:G}=kv(M);return Fi(),{notFoundMatches:z,route:G,error:D}}function Hr(C,D){return{boundaryId:to(D.partialMatches).route.id,error:Qt(400,{type:"route-discovery",pathname:C,message:D.error!=null&&"message"in D.error?D.error:String(D.error)})}}function Fi(C){let D=[];return et.forEach((M,z)=>{(!C||C(z))&&(M.cancel(),D.push(z),et.delete(z))}),D}function vr(C,D,M){if(T=C,b=D,A=M||null,!I&&x.navigation===Nd){I=!0;let z=ia(x.location,x.matches);z!=null&&De({restoreScrollPosition:z})}return()=>{T=null,b=null,A=null}}function ra(C,D){return A&&A(C,D.map(z=>_P(z,x.loaderData)))||C.key}function Ns(C,D){if(T&&b){let M=ra(C,D);T[M]=b()}}function ia(C,D){if(T){let M=ra(C,D),z=T[M];if(typeof z=="number")return z}return null}function Xn(C,D,M){if(d)if(C){let z=C[C.length-1].route;if(z.path&&(z.path==="*"||z.path.endsWith("/*")))return{active:!0,matches:Yu(D,M,u,!0)}}else return{active:!0,matches:Yu(D,M,u,!0)||[]};return{active:!1,matches:null}}async function ji(C,D,M){let z=C,G=z.length>0?z[z.length-1].route:null;for(;;){let te=l==null,ae=l||o;try{await GP(d,D,z,ae,s,i,Lt,M)}catch(ie){return{type:"error",error:ie,partialMatches:z}}finally{te&&(o=[...o])}if(M.aborted)return{type:"aborted"};let q=qi(ae,D,u),ce=!1;if(q){let ie=q[q.length-1].route;if(ie.index)return{type:"success",matches:q};if(ie.path&&ie.path.length>0)if(ie.path==="*")ce=!0;else return{type:"success",matches:q}}let re=Yu(ae,D,u,!0);if(!re||z.map(ie=>ie.route.id).join("-")===re.map(ie=>ie.route.id).join("-"))return{type:"success",matches:ce?q:null};if(z=re,G=z[z.length-1].route,G.path==="*")return{type:"success",matches:z}}}function St(C){s={},l=_l(C,i,void 0,s)}function eu(C,D){let M=l==null;G1(C,D,l||o,s,i),M&&(o=[...o],De({}))}return F={get basename(){return u},get future(){return f},get state(){return x},get routes(){return o},get window(){return e},initialize:bn,subscribe:Nn,enableScrollRestoration:vr,navigate:xs,fetch:Jl,revalidate:Yo,createHref:C=>t.history.createHref(C),encodeLocation:C=>t.history.encodeLocation(C),getFetcher:ea,deleteFetcher:Vi,dispose:Gn,getBlocker:Zh,deleteBlocker:bs,patchRoutes:eu,_internalFetchControllers:Y,_internalActiveDeferreds:et,_internalSetRoutes:St},F}function WP(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function Kf(t,e,n,r,i,s,o,l){let u,c;if(o){u=[];for(let f of e)if(u.push(f),f.route.id===o){c=f;break}}else u=e,c=e[e.length-1];let d=Eh(i||".",wh(u,s),zo(t.pathname,n)||t.pathname,l==="path");return i==null&&(d.search=t.search,d.hash=t.hash),(i==null||i===""||i===".")&&c&&c.route.index&&!Pm(d.search)&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(d.pathname=d.pathname==="/"?n:br([n,d.pathname])),hs(d)}function wv(t,e,n,r){if(!r||!WP(r))return{path:n};if(r.formMethod&&!sx(r.formMethod))return{path:n,error:Qt(405,{method:r.formMethod})};let i=()=>({path:n,error:Qt(400,{type:"invalid-body"})}),s=r.formMethod||"get",o=t?s.toUpperCase():s.toLowerCase(),l=Q1(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!Fn(o))return i();let m=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((_,T)=>{let[A,b]=T;return""+_+A+"="+b+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:l,formEncType:r.formEncType,formData:void 0,json:void 0,text:m}}}else if(r.formEncType==="application/json"){if(!Fn(o))return i();try{let m=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:l,formEncType:r.formEncType,formData:void 0,json:m,text:void 0}}}catch{return i()}}}ve(typeof FormData=="function","FormData is not available in this environment");let u,c;if(r.formData)u=Gf(r.formData),c=r.formData;else if(r.body instanceof FormData)u=Gf(r.body),c=r.body;else if(r.body instanceof URLSearchParams)u=r.body,c=Rv(u);else if(r.body==null)u=new URLSearchParams,c=new FormData;else try{u=new URLSearchParams(r.body),c=Rv(u)}catch{return i()}let d={formMethod:o,formAction:l,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:c,json:void 0,text:void 0};if(Fn(d.formMethod))return{path:n,submission:d};let f=Di(n);return e&&f.search&&Pm(f.search)&&u.append("index",""),f.search="?"+u,{path:hs(f),submission:d}}function qP(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function Ev(t,e,n,r,i,s,o,l,u,c,d,f,m,_,T,A){let b=A?dn(A[1])?A[1].error:A[1].data:void 0,I=t.createURL(e.location),v=t.createURL(i),S=A&&dn(A[1])?A[0]:void 0,L=S?qP(n,S):n,F=A?A[1].statusCode:void 0,x=o&&F&&F>=400,w=L.filter((E,R)=>{let{route:k}=E;if(k.lazy)return!0;if(k.loader==null)return!1;if(s)return typeof k.loader!="function"||k.loader.hydrate?!0:e.loaderData[k.id]===void 0&&(!e.errors||e.errors[k.id]===void 0);if(KP(e.loaderData,e.matches[R],E)||u.some(me=>me===E.route.id))return!0;let N=e.matches[R],P=E;return Tv(E,Qe({currentUrl:I,currentParams:N.params,nextUrl:v,nextParams:P.params},r,{actionResult:b,actionStatus:F,defaultShouldRevalidate:x?!1:l||I.pathname+I.search===v.pathname+v.search||I.search!==v.search||K1(N,P)}))}),g=[];return f.forEach((E,R)=>{if(s||!n.some(ot=>ot.route.id===E.routeId)||d.has(R))return;let k=qi(_,E.path,T);if(!k){g.push({key:R,routeId:E.routeId,path:E.path,matches:null,match:null,controller:null});return}let N=e.fetchers.get(R),P=ba(k,E.path),me=!1;m.has(R)?me=!1:c.has(R)?(c.delete(R),me=!0):N&&N.state!=="idle"&&N.data===void 0?me=l:me=Tv(P,Qe({currentUrl:I,currentParams:e.matches[e.matches.length-1].params,nextUrl:v,nextParams:n[n.length-1].params},r,{actionResult:b,actionStatus:F,defaultShouldRevalidate:x?!1:l})),me&&g.push({key:R,routeId:E.routeId,path:E.path,matches:k,match:P,controller:new AbortController})}),[w,g]}function KP(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function K1(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function Tv(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function GP(t,e,n,r,i,s,o,l){let u=[e,...n.map(c=>c.route.id)].join("-");try{let c=o.get(u);c||(c=t({path:e,matches:n,patch:(d,f)=>{l.aborted||G1(d,f,r,i,s)}}),o.set(u,c)),c&&nx(c)&&await c}finally{o.delete(u)}}function G1(t,e,n,r,i){if(t){var s;let o=r[t];ve(o,"No route found to patch children into: routeId = "+t);let l=_l(e,i,[t,"patch",String(((s=o.children)==null?void 0:s.length)||"0")],r);o.children?o.children.push(...l):o.children=l}else{let o=_l(e,i,["patch",String(n.length||"0")],r);n.push(...o)}}async function Iv(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];ve(i,"No route found in manifest");let s={};for(let o in r){let u=i[o]!==void 0&&o!=="hasErrorBoundary";Io(!u,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!u&&!yP.has(o)&&(s[o]=r[o])}Object.assign(i,s),Object.assign(i,Qe({},e(i),{lazy:void 0}))}function QP(t){return Promise.all(t.matches.map(e=>e.resolve()))}async function YP(t,e,n,r,i,s,o,l){let u=r.reduce((f,m)=>f.add(m.route.id),new Set),c=new Set,d=await t({matches:i.map(f=>{let m=u.has(f.route.id);return Qe({},f,{shouldLoad:m,resolve:T=>(c.add(f.route.id),m?XP(e,n,f,s,o,T,l):Promise.resolve({type:Oe.data,result:void 0}))})}),request:n,params:i[0].params,context:l});return i.forEach(f=>ve(c.has(f.route.id),'`match.resolve()` was not called for route id "'+f.route.id+'". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.')),d.filter((f,m)=>u.has(i[m].route.id))}async function XP(t,e,n,r,i,s,o){let l,u,c=d=>{let f,m=new Promise((A,b)=>f=b);u=()=>f(),e.signal.addEventListener("abort",u);let _=A=>typeof d!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+t+'" [routeId: '+n.route.id+"]"))):d({request:e,params:n.params,context:o},...A!==void 0?[A]:[]),T;return s?T=s(A=>_(A)):T=(async()=>{try{return{type:"data",result:await _()}}catch(A){return{type:"error",result:A}}})(),Promise.race([T,m])};try{let d=n.route[t];if(n.route.lazy)if(d){let f,[m]=await Promise.all([c(d).catch(_=>{f=_}),Iv(n.route,i,r)]);if(f!==void 0)throw f;l=m}else if(await Iv(n.route,i,r),d=n.route[t],d)l=await c(d);else if(t==="action"){let f=new URL(e.url),m=f.pathname+f.search;throw Qt(405,{method:e.method,pathname:m,routeId:n.route.id})}else return{type:Oe.data,result:void 0};else if(d)l=await c(d);else{let f=new URL(e.url),m=f.pathname+f.search;throw Qt(404,{pathname:m})}ve(l.result!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(d){return{type:Oe.error,result:d}}finally{u&&e.signal.removeEventListener("abort",u)}return l}async function JP(t){let{result:e,type:n}=t;if(Y1(e)){let c;try{let d=e.headers.get("Content-Type");d&&/\bapplication\/json\b/.test(d)?e.body==null?c=null:c=await e.json():c=await e.text()}catch(d){return{type:Oe.error,error:d}}return n===Oe.error?{type:Oe.error,error:new Oc(e.status,e.statusText,c),statusCode:e.status,headers:e.headers}:{type:Oe.data,data:c,statusCode:e.status,headers:e.headers}}if(n===Oe.error){if(bv(e)){var r;if(e.data instanceof Error){var i;return{type:Oe.error,error:e.data,statusCode:(i=e.init)==null?void 0:i.status}}e=new Oc(((r=e.init)==null?void 0:r.status)||500,void 0,e.data)}return{type:Oe.error,error:e,statusCode:Th(e)?e.status:void 0}}if(ix(e)){var s,o;return{type:Oe.deferred,deferredData:e,statusCode:(s=e.init)==null?void 0:s.status,headers:((o=e.init)==null?void 0:o.headers)&&new Headers(e.init.headers)}}if(bv(e)){var l,u;return{type:Oe.data,data:e.data,statusCode:(l=e.init)==null?void 0:l.status,headers:(u=e.init)!=null&&u.headers?new Headers(e.init.headers):void 0}}return{type:Oe.data,data:e}}function ZP(t,e,n,r,i,s){let o=t.headers.get("Location");if(ve(o,"Redirects returned/thrown from loaders/actions must have a Location header"),!Am.test(o)){let l=r.slice(0,r.findIndex(u=>u.route.id===n)+1);o=Kf(new URL(e.url),l,i,!0,o,s),t.headers.set("Location",o)}return t}function Sv(t,e,n){if(Am.test(t)){let r=t,i=r.startsWith("//")?new URL(e.protocol+r):new URL(r),s=zo(i.pathname,n)!=null;if(i.origin===e.origin&&s)return i.pathname+i.search+i.hash}return t}function Us(t,e,n,r){let i=t.createURL(Q1(e)).toString(),s={signal:n};if(r&&Fn(r.formMethod)){let{formMethod:o,formEncType:l}=r;s.method=o.toUpperCase(),l==="application/json"?(s.headers=new Headers({"Content-Type":l}),s.body=JSON.stringify(r.json)):l==="text/plain"?s.body=r.text:l==="application/x-www-form-urlencoded"&&r.formData?s.body=Gf(r.formData):s.body=r.formData}return new Request(i,s)}function Gf(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,typeof r=="string"?r:r.name);return e}function Rv(t){let e=new FormData;for(let[n,r]of t.entries())e.append(n,r);return e}function ex(t,e,n,r,i,s){let o={},l=null,u,c=!1,d={},f=r&&dn(r[1])?r[1].error:void 0;return n.forEach((m,_)=>{let T=e[_].route.id;if(ve(!Xi(m),"Cannot handle redirect results in processLoaderData"),dn(m)){let A=m.error;f!==void 0&&(A=f,f=void 0),l=l||{};{let b=to(t,T);l[b.route.id]==null&&(l[b.route.id]=A)}o[T]=void 0,c||(c=!0,u=Th(m.error)?m.error.status:500),m.headers&&(d[T]=m.headers)}else Yi(m)?(i.set(T,m.deferredData),o[T]=m.deferredData.data,m.statusCode!=null&&m.statusCode!==200&&!c&&(u=m.statusCode),m.headers&&(d[T]=m.headers)):(o[T]=m.data,m.statusCode&&m.statusCode!==200&&!c&&(u=m.statusCode),m.headers&&(d[T]=m.headers))}),f!==void 0&&r&&(l={[r[0]]:f},o[r[0]]=void 0),{loaderData:o,errors:l,statusCode:u||200,loaderHeaders:d}}function Av(t,e,n,r,i,s,o,l){let{loaderData:u,errors:c}=ex(e,n,r,i,l);for(let d=0;d<s.length;d++){let{key:f,match:m,controller:_}=s[d];ve(o!==void 0&&o[d]!==void 0,"Did not find corresponding fetcher result");let T=o[d];if(!(_&&_.signal.aborted))if(dn(T)){let A=to(t.matches,m==null?void 0:m.route.id);c&&c[A.route.id]||(c=Qe({},c,{[A.route.id]:T.error})),t.fetchers.delete(f)}else if(Xi(T))ve(!1,"Unhandled fetcher revalidation redirect");else if(Yi(T))ve(!1,"Unhandled fetcher deferred data");else{let A=Xr(T.data);t.fetchers.set(f,A)}}return{loaderData:u,errors:c}}function Pv(t,e,n,r){let i=Qe({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&s.route.loader&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function xv(t){return t?dn(t[1])?{actionData:{}}:{actionData:{[t[0]]:t[1].data}}:{}}function to(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function kv(t){let e=t.length===1?t[0]:t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function Qt(t,e){let{pathname:n,routeId:r,method:i,type:s,message:o}=e===void 0?{}:e,l="Unknown Server Error",u="Unknown @remix-run/router error";return t===400?(l="Bad Request",s==="route-discovery"?u='Unable to match URL "'+n+'" - the `unstable_patchRoutesOnMiss()` '+(`function threw the following error:
`+o):i&&n&&r?u="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"?u="defer() is not supported in actions":s==="invalid-body"&&(u="Unable to encode submission body")):t===403?(l="Forbidden",u='Route "'+r+'" does not match URL "'+n+'"'):t===404?(l="Not Found",u='No route matches URL "'+n+'"'):t===405&&(l="Method Not Allowed",i&&n&&r?u="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(u='Invalid request method "'+i.toUpperCase()+'"')),new Oc(t||500,l,new Error(u),!0)}function Cv(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(Xi(n))return{result:n,idx:e}}}function Q1(t){let e=typeof t=="string"?Di(t):t;return hs(Qe({},e,{hash:""}))}function tx(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function nx(t){return typeof t=="object"&&t!=null&&"then"in t}function rx(t){return Y1(t.result)&&jP.has(t.result.status)}function Yi(t){return t.type===Oe.deferred}function dn(t){return t.type===Oe.error}function Xi(t){return(t&&t.type)===Oe.redirect}function bv(t){return typeof t=="object"&&t!=null&&"type"in t&&"data"in t&&"init"in t&&t.type==="DataWithResponseInit"}function ix(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function Y1(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function sx(t){return FP.has(t.toLowerCase())}function Fn(t){return VP.has(t.toLowerCase())}async function Nv(t,e,n,r,i,s){for(let o=0;o<n.length;o++){let l=n[o],u=e[o];if(!u)continue;let c=t.find(f=>f.route.id===u.route.id),d=c!=null&&!K1(c,u)&&(s&&s[u.route.id])!==void 0;if(Yi(l)&&(i||d)){let f=r[o];ve(f,"Expected an AbortSignal for revalidating fetcher deferred result"),await X1(l,f,i).then(m=>{m&&(n[o]=m||n[o])})}}}async function X1(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:Oe.data,data:t.deferredData.unwrappedData}}catch(i){return{type:Oe.error,error:i}}return{type:Oe.data,data:t.deferredData.data}}}function Pm(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function ba(t,e){let n=typeof e=="string"?Di(e).search:e.search;if(t[t.length-1].route.index&&Pm(n||""))return t[t.length-1];let r=H1(t);return r[r.length-1]}function Dv(t){let{formMethod:e,formAction:n,formEncType:r,text:i,formData:s,json:o}=t;if(!(!e||!n||!r)){if(i!=null)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(s!=null)return{formMethod:e,formAction:n,formEncType:r,formData:s,json:void 0,text:void 0};if(o!==void 0)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function Dd(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function ox(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function Ia(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function ax(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0}}function Xr(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function lx(t,e){try{let n=t.sessionStorage.getItem(q1);if(n){let r=JSON.parse(n);for(let[i,s]of Object.entries(r||{}))s&&Array.isArray(s)&&e.set(i,new Set(s||[]))}}catch{}}function ux(t,e){if(e.size>0){let n={};for(let[r,i]of e)n[r]=[...i];try{t.sessionStorage.setItem(q1,JSON.stringify(n))}catch(r){Io(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.26.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Mc(){return Mc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Mc.apply(this,arguments)}const Ih=j.createContext(null),J1=j.createContext(null),Li=j.createContext(null),xm=j.createContext(null),zr=j.createContext({outlet:null,matches:[],isDataRoute:!1}),Z1=j.createContext(null);function cx(t,e){let{relative:n}=e===void 0?{}:e;$o()||ve(!1);let{basename:r,navigator:i}=j.useContext(Li),{hash:s,pathname:o,search:l}=tE(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:br([r,o])),i.createHref({pathname:u,search:l,hash:s})}function $o(){return j.useContext(xm)!=null}function Vl(){return $o()||ve(!1),j.useContext(xm).location}function eE(t){j.useContext(Li).static||j.useLayoutEffect(t)}function Bo(){let{isDataRoute:t}=j.useContext(zr);return t?Sx():hx()}function hx(){$o()||ve(!1);let t=j.useContext(Ih),{basename:e,future:n,navigator:r}=j.useContext(Li),{matches:i}=j.useContext(zr),{pathname:s}=Vl(),o=JSON.stringify(wh(i,n.v7_relativeSplatPath)),l=j.useRef(!1);return eE(()=>{l.current=!0}),j.useCallback(function(c,d){if(d===void 0&&(d={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let f=Eh(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:br([e,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[e,r,o,s,t])}const dx=j.createContext(null);function fx(t){let e=j.useContext(zr).outlet;return e&&j.createElement(dx.Provider,{value:t},e)}function tE(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=j.useContext(Li),{matches:i}=j.useContext(zr),{pathname:s}=Vl(),o=JSON.stringify(wh(i,r.v7_relativeSplatPath));return j.useMemo(()=>Eh(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function px(t,e,n,r){$o()||ve(!1);let{navigator:i}=j.useContext(Li),{matches:s}=j.useContext(zr),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=Vl(),d;d=c;let f=d.pathname||"/",m=f;if(u!=="/"){let A=u.replace(/^\//,"").split("/");m="/"+f.replace(/^\//,"").split("/").slice(A.length).join("/")}let _=qi(t,{pathname:m});return _x(_&&_.map(A=>Object.assign({},A,{params:Object.assign({},l,A.params),pathname:br([u,i.encodeLocation?i.encodeLocation(A.pathname).pathname:A.pathname]),pathnameBase:A.pathnameBase==="/"?u:br([u,i.encodeLocation?i.encodeLocation(A.pathnameBase).pathname:A.pathnameBase])})),s,n,r)}function mx(){let t=Ix(),e=Th(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},e),n?j.createElement("pre",{style:i},n):null,null)}const gx=j.createElement(mx,null);class yx extends j.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?j.createElement(zr.Provider,{value:this.props.routeContext},j.createElement(Z1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function vx(t){let{routeContext:e,match:n,children:r}=t,i=j.useContext(Ih);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),j.createElement(zr.Provider,{value:e},r)}function _x(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=o.findIndex(f=>f.route.id&&(l==null?void 0:l[f.route.id])!==void 0);d>=0||ve(!1),o=o.slice(0,Math.min(o.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:m,errors:_}=n,T=f.route.loader&&m[f.route.id]===void 0&&(!_||_[f.route.id]===void 0);if(f.route.lazy||T){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,f,m)=>{let _,T=!1,A=null,b=null;n&&(_=l&&f.route.id?l[f.route.id]:void 0,A=f.route.errorElement||gx,u&&(c<0&&m===0?(T=!0,b=null):c===m&&(T=!0,b=f.route.hydrateFallbackElement||null)));let I=e.concat(o.slice(0,m+1)),v=()=>{let S;return _?S=A:T?S=b:f.route.Component?S=j.createElement(f.route.Component,null):f.route.element?S=f.route.element:S=d,j.createElement(vx,{match:f,routeContext:{outlet:d,matches:I,isDataRoute:n!=null},children:S})};return n&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?j.createElement(yx,{location:n.location,revalidation:n.revalidation,component:A,error:_,children:v(),routeContext:{outlet:null,matches:I,isDataRoute:!0}}):v()},null)}var nE=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(nE||{}),Vc=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Vc||{});function wx(t){let e=j.useContext(Ih);return e||ve(!1),e}function Ex(t){let e=j.useContext(J1);return e||ve(!1),e}function Tx(t){let e=j.useContext(zr);return e||ve(!1),e}function rE(t){let e=Tx(),n=e.matches[e.matches.length-1];return n.route.id||ve(!1),n.route.id}function Ix(){var t;let e=j.useContext(Z1),n=Ex(Vc.UseRouteError),r=rE(Vc.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function Sx(){let{router:t}=wx(nE.UseNavigateStable),e=rE(Vc.UseNavigateStable),n=j.useRef(!1);return eE(()=>{n.current=!0}),j.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Mc({fromRouteId:e},s)))},[t,e])}function Rx(t){let{to:e,replace:n,state:r,relative:i}=t;$o()||ve(!1);let{future:s,static:o}=j.useContext(Li),{matches:l}=j.useContext(zr),{pathname:u}=Vl(),c=Bo(),d=Eh(e,wh(l,s.v7_relativeSplatPath),u,i==="path"),f=JSON.stringify(d);return j.useEffect(()=>c(JSON.parse(f),{replace:n,state:r,relative:i}),[c,f,i,n,r]),null}function Ax(t){return fx(t.context)}function Px(t){let{basename:e="/",children:n=null,location:r,navigationType:i=ct.Pop,navigator:s,static:o=!1,future:l}=t;$o()&&ve(!1);let u=e.replace(/^\/*/,"/"),c=j.useMemo(()=>({basename:u,navigator:s,static:o,future:Mc({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=Di(r));let{pathname:d="/",search:f="",hash:m="",state:_=null,key:T="default"}=r,A=j.useMemo(()=>{let b=zo(d,u);return b==null?null:{location:{pathname:b,search:f,hash:m,state:_,key:T},navigationType:i}},[u,d,f,m,_,T,i]);return A==null?null:j.createElement(Li.Provider,{value:c},j.createElement(xm.Provider,{children:n,value:A}))}new Promise(()=>{});function xx(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:j.createElement(t.Component),Component:void 0}),t.HydrateFallback&&Object.assign(e,{hydrateFallbackElement:j.createElement(t.HydrateFallback),HydrateFallback:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:j.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.26.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wl(){return wl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},wl.apply(this,arguments)}function kx(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Cx(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function bx(t,e){return t.button===0&&(!e||e==="_self")&&!Cx(t)}const Nx=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Dx="6";try{window.__reactRouterVersion=Dx}catch{}function Lx(t,e){return HP({basename:void 0,future:wl({},void 0,{v7_prependBasename:!0}),history:pP({window:void 0}),hydrationData:Ox(),routes:t,mapRouteProperties:xx,unstable_dataStrategy:void 0,unstable_patchRoutesOnMiss:void 0,window:void 0}).initialize()}function Ox(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=wl({},e,{errors:Mx(e.errors)})),e}function Mx(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new Oc(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let s=window[i.__subType];if(typeof s=="function")try{let o=new s(i.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let s=new Error(i.message);s.stack="",n[r]=s}}else n[r]=i;return n}const Vx=j.createContext({isTransitioning:!1}),Ux=j.createContext(new Map),Fx="startTransition",Lv=tR[Fx],jx="flushSync",Ov=fP[jx];function zx(t){Lv?Lv(t):t()}function Sa(t){Ov?Ov(t):t()}let $x=class{constructor(){this.status="pending",this.promise=new Promise((e,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",e(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}};function Bx(t){let{fallbackElement:e,router:n,future:r}=t,[i,s]=j.useState(n.state),[o,l]=j.useState(),[u,c]=j.useState({isTransitioning:!1}),[d,f]=j.useState(),[m,_]=j.useState(),[T,A]=j.useState(),b=j.useRef(new Map),{v7_startTransition:I}=r||{},v=j.useCallback(g=>{I?zx(g):g()},[I]),S=j.useCallback((g,E)=>{let{deletedFetchers:R,unstable_flushSync:k,unstable_viewTransitionOpts:N}=E;R.forEach(me=>b.current.delete(me)),g.fetchers.forEach((me,ot)=>{me.data!==void 0&&b.current.set(ot,me.data)});let P=n.window==null||n.window.document==null||typeof n.window.document.startViewTransition!="function";if(!N||P){k?Sa(()=>s(g)):v(()=>s(g));return}if(k){Sa(()=>{m&&(d&&d.resolve(),m.skipTransition()),c({isTransitioning:!0,flushSync:!0,currentLocation:N.currentLocation,nextLocation:N.nextLocation})});let me=n.window.document.startViewTransition(()=>{Sa(()=>s(g))});me.finished.finally(()=>{Sa(()=>{f(void 0),_(void 0),l(void 0),c({isTransitioning:!1})})}),Sa(()=>_(me));return}m?(d&&d.resolve(),m.skipTransition(),A({state:g,currentLocation:N.currentLocation,nextLocation:N.nextLocation})):(l(g),c({isTransitioning:!0,flushSync:!1,currentLocation:N.currentLocation,nextLocation:N.nextLocation}))},[n.window,m,d,b,v]);j.useLayoutEffect(()=>n.subscribe(S),[n,S]),j.useEffect(()=>{u.isTransitioning&&!u.flushSync&&f(new $x)},[u]),j.useEffect(()=>{if(d&&o&&n.window){let g=o,E=d.promise,R=n.window.document.startViewTransition(async()=>{v(()=>s(g)),await E});R.finished.finally(()=>{f(void 0),_(void 0),l(void 0),c({isTransitioning:!1})}),_(R)}},[v,o,d,n.window]),j.useEffect(()=>{d&&o&&i.location.key===o.location.key&&d.resolve()},[d,m,i.location,o]),j.useEffect(()=>{!u.isTransitioning&&T&&(l(T.state),c({isTransitioning:!0,flushSync:!1,currentLocation:T.currentLocation,nextLocation:T.nextLocation}),A(void 0))},[u.isTransitioning,T]),j.useEffect(()=>{},[]);let L=j.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:g=>n.navigate(g),push:(g,E,R)=>n.navigate(g,{state:E,preventScrollReset:R==null?void 0:R.preventScrollReset}),replace:(g,E,R)=>n.navigate(g,{replace:!0,state:E,preventScrollReset:R==null?void 0:R.preventScrollReset})}),[n]),F=n.basename||"/",x=j.useMemo(()=>({router:n,navigator:L,static:!1,basename:F}),[n,L,F]),w=j.useMemo(()=>({v7_relativeSplatPath:n.future.v7_relativeSplatPath}),[n.future.v7_relativeSplatPath]);return j.createElement(j.Fragment,null,j.createElement(Ih.Provider,{value:x},j.createElement(J1.Provider,{value:i},j.createElement(Ux.Provider,{value:b.current},j.createElement(Vx.Provider,{value:u},j.createElement(Px,{basename:F,location:i.location,navigationType:i.historyAction,navigator:L,future:w},i.initialized||n.future.v7_partialHydration?j.createElement(Hx,{routes:n.routes,future:n.future,state:i}):e))))),null)}const Hx=j.memo(Wx);function Wx(t){let{routes:e,future:n,state:r}=t;return px(e,void 0,r,n)}const qx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Kx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,iE=j.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:c,preventScrollReset:d,unstable_viewTransition:f}=e,m=kx(e,Nx),{basename:_}=j.useContext(Li),T,A=!1;if(typeof c=="string"&&Kx.test(c)&&(T=c,qx))try{let S=new URL(window.location.href),L=c.startsWith("//")?new URL(S.protocol+c):new URL(c),F=zo(L.pathname,_);L.origin===S.origin&&F!=null?c=F+L.search+L.hash:A=!0}catch{}let b=cx(c,{relative:i}),I=Gx(c,{replace:o,state:l,target:u,preventScrollReset:d,relative:i,unstable_viewTransition:f});function v(S){r&&r(S),S.defaultPrevented||I(S)}return j.createElement("a",wl({},m,{href:T||b,onClick:A||s?r:v,ref:n,target:u}))});var Mv;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Mv||(Mv={}));var Vv;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Vv||(Vv={}));function Gx(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l}=e===void 0?{}:e,u=Bo(),c=Vl(),d=tE(t,{relative:o});return j.useCallback(f=>{if(bx(f,n)){f.preventDefault();let m=r!==void 0?r:hs(c)===hs(d);u(t,{replace:m,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l})}},[c,u,d,r,i,n,t,s,o,l])}var Wt=function(){return Wt=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},Wt.apply(this,arguments)};function km(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function El(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}var $e="-ms-",Ga="-moz-",be="-webkit-",sE="comm",Sh="rule",Cm="decl",Qx="@import",oE="@keyframes",Yx="@layer",aE=Math.abs,bm=String.fromCharCode,Qf=Object.assign;function Xx(t,e){return Tt(t,0)^45?(((e<<2^Tt(t,0))<<2^Tt(t,1))<<2^Tt(t,2))<<2^Tt(t,3):0}function lE(t){return t.trim()}function Ir(t,e){return(t=e.exec(t))?t[0]:t}function ge(t,e,n){return t.replace(e,n)}function Xu(t,e,n){return t.indexOf(e,n)}function Tt(t,e){return t.charCodeAt(e)|0}function So(t,e,n){return t.slice(e,n)}function nr(t){return t.length}function uE(t){return t.length}function Na(t,e){return e.push(t),t}function Jx(t,e){return t.map(e).join("")}function Uv(t,e){return t.filter(function(n){return!Ir(n,e)})}var Rh=1,Ro=1,cE=0,xn=0,dt=0,Ho="";function Ah(t,e,n,r,i,s,o,l){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:Rh,column:Ro,length:o,return:"",siblings:l}}function Jr(t,e){return Qf(Ah("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function Fs(t){for(;t.root;)t=Jr(t.root,{children:[t]});Na(t,t.siblings)}function Zx(){return dt}function ek(){return dt=xn>0?Tt(Ho,--xn):0,Ro--,dt===10&&(Ro=1,Rh--),dt}function Hn(){return dt=xn<cE?Tt(Ho,xn++):0,Ro++,dt===10&&(Ro=1,Rh++),dt}function rs(){return Tt(Ho,xn)}function Ju(){return xn}function Ph(t,e){return So(Ho,t,e)}function Yf(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function tk(t){return Rh=Ro=1,cE=nr(Ho=t),xn=0,[]}function nk(t){return Ho="",t}function Ld(t){return lE(Ph(xn-1,Xf(t===91?t+2:t===40?t+1:t)))}function rk(t){for(;(dt=rs())&&dt<33;)Hn();return Yf(t)>2||Yf(dt)>3?"":" "}function ik(t,e){for(;--e&&Hn()&&!(dt<48||dt>102||dt>57&&dt<65||dt>70&&dt<97););return Ph(t,Ju()+(e<6&&rs()==32&&Hn()==32))}function Xf(t){for(;Hn();)switch(dt){case t:return xn;case 34:case 39:t!==34&&t!==39&&Xf(dt);break;case 40:t===41&&Xf(t);break;case 92:Hn();break}return xn}function sk(t,e){for(;Hn()&&t+dt!==57;)if(t+dt===84&&rs()===47)break;return"/*"+Ph(e,xn-1)+"*"+bm(t===47?t:Hn())}function ok(t){for(;!Yf(rs());)Hn();return Ph(t,xn)}function ak(t){return nk(Zu("",null,null,null,[""],t=tk(t),0,[0],t))}function Zu(t,e,n,r,i,s,o,l,u){for(var c=0,d=0,f=o,m=0,_=0,T=0,A=1,b=1,I=1,v=0,S="",L=i,F=s,x=r,w=S;b;)switch(T=v,v=Hn()){case 40:if(T!=108&&Tt(w,f-1)==58){Xu(w+=ge(Ld(v),"&","&\f"),"&\f",aE(c?l[c-1]:0))!=-1&&(I=-1);break}case 34:case 39:case 91:w+=Ld(v);break;case 9:case 10:case 13:case 32:w+=rk(T);break;case 92:w+=ik(Ju()-1,7);continue;case 47:switch(rs()){case 42:case 47:Na(lk(sk(Hn(),Ju()),e,n,u),u);break;default:w+="/"}break;case 123*A:l[c++]=nr(w)*I;case 125*A:case 59:case 0:switch(v){case 0:case 125:b=0;case 59+d:I==-1&&(w=ge(w,/\f/g,"")),_>0&&nr(w)-f&&Na(_>32?jv(w+";",r,n,f-1,u):jv(ge(w," ","")+";",r,n,f-2,u),u);break;case 59:w+=";";default:if(Na(x=Fv(w,e,n,c,d,i,l,S,L=[],F=[],f,s),s),v===123)if(d===0)Zu(w,e,x,x,L,s,f,l,F);else switch(m===99&&Tt(w,3)===110?100:m){case 100:case 108:case 109:case 115:Zu(t,x,x,r&&Na(Fv(t,x,x,0,0,i,l,S,i,L=[],f,F),F),i,F,f,l,r?L:F);break;default:Zu(w,x,x,x,[""],F,0,l,F)}}c=d=_=0,A=I=1,S=w="",f=o;break;case 58:f=1+nr(w),_=T;default:if(A<1){if(v==123)--A;else if(v==125&&A++==0&&ek()==125)continue}switch(w+=bm(v),v*A){case 38:I=d>0?1:(w+="\f",-1);break;case 44:l[c++]=(nr(w)-1)*I,I=1;break;case 64:rs()===45&&(w+=Ld(Hn())),m=rs(),d=f=nr(S=w+=ok(Ju())),v++;break;case 45:T===45&&nr(w)==2&&(A=0)}}return s}function Fv(t,e,n,r,i,s,o,l,u,c,d,f){for(var m=i-1,_=i===0?s:[""],T=uE(_),A=0,b=0,I=0;A<r;++A)for(var v=0,S=So(t,m+1,m=aE(b=o[A])),L=t;v<T;++v)(L=lE(b>0?_[v]+" "+S:ge(S,/&\f/g,_[v])))&&(u[I++]=L);return Ah(t,e,n,i===0?Sh:l,u,c,d,f)}function lk(t,e,n,r){return Ah(t,e,n,sE,bm(Zx()),So(t,2,-2),0,r)}function jv(t,e,n,r,i){return Ah(t,e,n,Cm,So(t,0,r),So(t,r+1,-1),r,i)}function hE(t,e,n){switch(Xx(t,e)){case 5103:return be+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return be+t+t;case 4789:return Ga+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return be+t+Ga+t+$e+t+t;case 5936:switch(Tt(t,e+11)){case 114:return be+t+$e+ge(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return be+t+$e+ge(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return be+t+$e+ge(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return be+t+$e+t+t;case 6165:return be+t+$e+"flex-"+t+t;case 5187:return be+t+ge(t,/(\w+).+(:[^]+)/,be+"box-$1$2"+$e+"flex-$1$2")+t;case 5443:return be+t+$e+"flex-item-"+ge(t,/flex-|-self/g,"")+(Ir(t,/flex-|baseline/)?"":$e+"grid-row-"+ge(t,/flex-|-self/g,""))+t;case 4675:return be+t+$e+"flex-line-pack"+ge(t,/align-content|flex-|-self/g,"")+t;case 5548:return be+t+$e+ge(t,"shrink","negative")+t;case 5292:return be+t+$e+ge(t,"basis","preferred-size")+t;case 6060:return be+"box-"+ge(t,"-grow","")+be+t+$e+ge(t,"grow","positive")+t;case 4554:return be+ge(t,/([^-])(transform)/g,"$1"+be+"$2")+t;case 6187:return ge(ge(ge(t,/(zoom-|grab)/,be+"$1"),/(image-set)/,be+"$1"),t,"")+t;case 5495:case 3959:return ge(t,/(image-set\([^]*)/,be+"$1$`$1");case 4968:return ge(ge(t,/(.+:)(flex-)?(.*)/,be+"box-pack:$3"+$e+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+be+t+t;case 4200:if(!Ir(t,/flex-|baseline/))return $e+"grid-column-align"+So(t,e)+t;break;case 2592:case 3360:return $e+ge(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,Ir(r.props,/grid-\w+-end/)})?~Xu(t+(n=n[e].value),"span",0)?t:$e+ge(t,"-start","")+t+$e+"grid-row-span:"+(~Xu(n,"span",0)?Ir(n,/\d+/):+Ir(n,/\d+/)-+Ir(t,/\d+/))+";":$e+ge(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return Ir(r.props,/grid-\w+-start/)})?t:$e+ge(ge(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return ge(t,/(.+)-inline(.+)/,be+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(nr(t)-1-e>6)switch(Tt(t,e+1)){case 109:if(Tt(t,e+4)!==45)break;case 102:return ge(t,/(.+:)(.+)-([^]+)/,"$1"+be+"$2-$3$1"+Ga+(Tt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Xu(t,"stretch",0)?hE(ge(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return ge(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,l,u,c){return $e+i+":"+s+c+(o?$e+i+"-span:"+(l?u:+u-+s)+c:"")+t});case 4949:if(Tt(t,e+6)===121)return ge(t,":",":"+be)+t;break;case 6444:switch(Tt(t,Tt(t,14)===45?18:11)){case 120:return ge(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+be+(Tt(t,14)===45?"inline-":"")+"box$3$1"+be+"$2$3$1"+$e+"$2box$3")+t;case 100:return ge(t,":",":"+$e)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ge(t,"scroll-","scroll-snap-")+t}return t}function Uc(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function uk(t,e,n,r){switch(t.type){case Yx:if(t.children.length)break;case Qx:case Cm:return t.return=t.return||t.value;case sE:return"";case oE:return t.return=t.value+"{"+Uc(t.children,r)+"}";case Sh:if(!nr(t.value=t.props.join(",")))return""}return nr(n=Uc(t.children,r))?t.return=t.value+"{"+n+"}":""}function ck(t){var e=uE(t);return function(n,r,i,s){for(var o="",l=0;l<e;l++)o+=t[l](n,r,i,s)||"";return o}}function hk(t){return function(e){e.root||(e=e.return)&&t(e)}}function dk(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case Cm:t.return=hE(t.value,t.length,n);return;case oE:return Uc([Jr(t,{value:ge(t.value,"@","@"+be)})],r);case Sh:if(t.length)return Jx(n=t.props,function(i){switch(Ir(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Fs(Jr(t,{props:[ge(i,/:(read-\w+)/,":"+Ga+"$1")]})),Fs(Jr(t,{props:[i]})),Qf(t,{props:Uv(n,r)});break;case"::placeholder":Fs(Jr(t,{props:[ge(i,/:(plac\w+)/,":"+be+"input-$1")]})),Fs(Jr(t,{props:[ge(i,/:(plac\w+)/,":"+Ga+"$1")]})),Fs(Jr(t,{props:[ge(i,/:(plac\w+)/,$e+"input-$1")]})),Fs(Jr(t,{props:[i]})),Qf(t,{props:Uv(n,r)});break}return""})}}var fk={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},cn={},Ao=typeof process<"u"&&cn!==void 0&&(cn.REACT_APP_SC_ATTR||cn.SC_ATTR)||"data-styled",dE="active",fE="data-styled-version",xh="6.1.12",Nm=`/*!sc*/
`,Fc=typeof window<"u"&&"HTMLElement"in window,pk=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&cn!==void 0&&cn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&cn.REACT_APP_SC_DISABLE_SPEEDY!==""?cn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&cn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&cn!==void 0&&cn.SC_DISABLE_SPEEDY!==void 0&&cn.SC_DISABLE_SPEEDY!==""&&cn.SC_DISABLE_SPEEDY!=="false"&&cn.SC_DISABLE_SPEEDY),mk={},kh=Object.freeze([]),Po=Object.freeze({});function pE(t,e,n){return n===void 0&&(n=Po),t.theme!==n.theme&&t.theme||e||n.theme}var mE=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),gk=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,yk=/(^-|-$)/g;function zv(t){return t.replace(gk,"-").replace(yk,"")}var vk=/(a)(d)/gi,ku=52,$v=function(t){return String.fromCharCode(t+(t>25?39:97))};function Jf(t){var e,n="";for(e=Math.abs(t);e>ku;e=e/ku|0)n=$v(e%ku)+n;return($v(e%ku)+n).replace(vk,"$1-$2")}var Od,gE=5381,no=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},yE=function(t){return no(gE,t)};function vE(t){return Jf(yE(t)>>>0)}function _k(t){return t.displayName||t.name||"Component"}function Md(t){return typeof t=="string"&&!0}var _E=typeof Symbol=="function"&&Symbol.for,wE=_E?Symbol.for("react.memo"):60115,wk=_E?Symbol.for("react.forward_ref"):60112,Ek={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Tk={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},EE={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ik=((Od={})[wk]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Od[wE]=EE,Od);function Bv(t){return("type"in(e=t)&&e.type.$$typeof)===wE?EE:"$$typeof"in t?Ik[t.$$typeof]:Ek;var e}var Sk=Object.defineProperty,Rk=Object.getOwnPropertyNames,Hv=Object.getOwnPropertySymbols,Ak=Object.getOwnPropertyDescriptor,Pk=Object.getPrototypeOf,Wv=Object.prototype;function TE(t,e,n){if(typeof e!="string"){if(Wv){var r=Pk(e);r&&r!==Wv&&TE(t,r,n)}var i=Rk(e);Hv&&(i=i.concat(Hv(e)));for(var s=Bv(t),o=Bv(e),l=0;l<i.length;++l){var u=i[l];if(!(u in Tk||n&&n[u]||o&&u in o||s&&u in s)){var c=Ak(e,u);try{Sk(t,u,c)}catch{}}}}return t}function xo(t){return typeof t=="function"}function Dm(t){return typeof t=="object"&&"styledComponentId"in t}function Ji(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function Zf(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=t[r];return n}function Tl(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function ep(t,e,n){if(n===void 0&&(n=!1),!n&&!Tl(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=ep(t[r],e[r]);else if(Tl(e))for(var r in e)t[r]=ep(t[r],e[r]);return t}function Lm(t,e){Object.defineProperty(t,"toString",{value:e})}function Ul(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var xk=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;e>=s;)if((s<<=1)<0)throw Ul(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var l=this.indexOfGroup(e+1),u=(o=0,n.length);o<u;o++)this.tag.insertRule(l,n[o])&&(this.groupSizes[e]++,l++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(Nm);return n},t}(),ec=new Map,jc=new Map,tc=1,Cu=function(t){if(ec.has(t))return ec.get(t);for(;jc.has(tc);)tc++;var e=tc++;return ec.set(t,e),jc.set(e,t),e},kk=function(t,e){tc=e+1,ec.set(t,e),jc.set(e,t)},Ck="style[".concat(Ao,"][").concat(fE,'="').concat(xh,'"]'),bk=new RegExp("^".concat(Ao,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Nk=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},Dk=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(Nm),i=[],s=0,o=r.length;s<o;s++){var l=r[s].trim();if(l){var u=l.match(bk);if(u){var c=0|parseInt(u[1],10),d=u[2];c!==0&&(kk(d,c),Nk(t,d,u[3]),t.getTag().insertRules(c,i)),i.length=0}else i.push(l)}}},qv=function(t){for(var e=document.querySelectorAll(Ck),n=0,r=e.length;n<r;n++){var i=e[n];i&&i.getAttribute(Ao)!==dE&&(Dk(t,i),i.parentNode&&i.parentNode.removeChild(i))}};function Lk(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var IE=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(l){var u=Array.from(l.querySelectorAll("style[".concat(Ao,"]")));return u[u.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Ao,dE),r.setAttribute(fE,xh);var o=Lk();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},Ok=function(){function t(e){this.element=IE(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw Ul(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),Mk=function(){function t(e){this.element=IE(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),Vk=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),Kv=Fc,Uk={isServer:!Fc,useCSSOMInjection:!pk},zc=function(){function t(e,n,r){e===void 0&&(e=Po),n===void 0&&(n={});var i=this;this.options=Wt(Wt({},Uk),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Fc&&Kv&&(Kv=!1,qv(this)),Lm(this,function(){return function(s){for(var o=s.getTag(),l=o.length,u="",c=function(f){var m=function(I){return jc.get(I)}(f);if(m===void 0)return"continue";var _=s.names.get(m),T=o.getGroup(f);if(_===void 0||!_.size||T.length===0)return"continue";var A="".concat(Ao,".g").concat(f,'[id="').concat(m,'"]'),b="";_!==void 0&&_.forEach(function(I){I.length>0&&(b+="".concat(I,","))}),u+="".concat(T).concat(A,'{content:"').concat(b,'"}').concat(Nm)},d=0;d<l;d++)c(d);return u}(i)})}return t.registerId=function(e){return Cu(e)},t.prototype.rehydrate=function(){!this.server&&Fc&&qv(this)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(Wt(Wt({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new Vk(i):r?new Ok(i):new Mk(i)}(this.options),new xk(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(Cu(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(Cu(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(Cu(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),Fk=/&/g,jk=/^\s*\/\/.*$/gm;function SE(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=SE(n.children,e)),n})}function zk(t){var e,n,r,i=Po,s=i.options,o=s===void 0?Po:s,l=i.plugins,u=l===void 0?kh:l,c=function(m,_,T){return T.startsWith(n)&&T.endsWith(n)&&T.replaceAll(n,"").length>0?".".concat(e):m},d=u.slice();d.push(function(m){m.type===Sh&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(Fk,n).replace(r,c))}),o.prefix&&d.push(dk),d.push(uk);var f=function(m,_,T,A){_===void 0&&(_=""),T===void 0&&(T=""),A===void 0&&(A="&"),e=A,n=_,r=new RegExp("\\".concat(n,"\\b"),"g");var b=m.replace(jk,""),I=ak(T||_?"".concat(T," ").concat(_," { ").concat(b," }"):b);o.namespace&&(I=SE(I,o.namespace));var v=[];return Uc(I,ck(d.concat(hk(function(S){return v.push(S)})))),v};return f.hash=u.length?u.reduce(function(m,_){return _.name||Ul(15),no(m,_.name)},gE).toString():"",f}var $k=new zc,tp=zk(),RE=zn.createContext({shouldForwardProp:void 0,styleSheet:$k,stylis:tp});RE.Consumer;zn.createContext(void 0);function np(){return j.useContext(RE)}var Bk=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=tp);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,Lm(this,function(){throw Ul(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=tp),this.name+e.hash},t}(),Hk=function(t){return t>="A"&&t<="Z"};function Gv(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;Hk(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var AE=function(t){return t==null||t===!1||t===""},PE=function(t){var e,n,r=[];for(var i in t){var s=t[i];t.hasOwnProperty(i)&&!AE(s)&&(Array.isArray(s)&&s.isCss||xo(s)?r.push("".concat(Gv(i),":"),s,";"):Tl(s)?r.push.apply(r,El(El(["".concat(i," {")],PE(s),!1),["}"],!1)):r.push("".concat(Gv(i),": ").concat((e=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in fk||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function _i(t,e,n,r){if(AE(t))return[];if(Dm(t))return[".".concat(t.styledComponentId)];if(xo(t)){if(!xo(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var i=t(e);return _i(i,e,n,r)}var s;return t instanceof Bk?n?(t.inject(n,r),[t.getName(r)]):[t]:Tl(t)?PE(t):Array.isArray(t)?Array.prototype.concat.apply(kh,t.map(function(o){return _i(o,e,n,r)})):[t.toString()]}function xE(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(xo(n)&&!Dm(n))return!1}return!0}var Wk=yE(xh),qk=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&xE(e),this.componentId=n,this.baseHash=no(Wk,n),this.baseStyle=r,zc.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Ji(i,this.staticRulesId);else{var s=Zf(_i(this.rules,e,n,r)),o=Jf(no(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var l=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,l)}i=Ji(i,o),this.staticRulesId=o}else{for(var u=no(this.baseHash,r.hash),c="",d=0;d<this.rules.length;d++){var f=this.rules[d];if(typeof f=="string")c+=f;else if(f){var m=Zf(_i(f,e,n,r));u=no(u,m+d),c+=m}}if(c){var _=Jf(u>>>0);n.hasNameForId(this.componentId,_)||n.insertRules(this.componentId,_,r(c,".".concat(_),void 0,this.componentId)),i=Ji(i,_)}}return i},t}(),Om=zn.createContext(void 0);Om.Consumer;var Vd={};function Kk(t,e,n){var r=Dm(t),i=t,s=!Md(t),o=e.attrs,l=o===void 0?kh:o,u=e.componentId,c=u===void 0?function(L,F){var x=typeof L!="string"?"sc":zv(L);Vd[x]=(Vd[x]||0)+1;var w="".concat(x,"-").concat(vE(xh+x+Vd[x]));return F?"".concat(F,"-").concat(w):w}(e.displayName,e.parentComponentId):u,d=e.displayName,f=d===void 0?function(L){return Md(L)?"styled.".concat(L):"Styled(".concat(_k(L),")")}(t):d,m=e.displayName&&e.componentId?"".concat(zv(e.displayName),"-").concat(e.componentId):e.componentId||c,_=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,T=e.shouldForwardProp;if(r&&i.shouldForwardProp){var A=i.shouldForwardProp;if(e.shouldForwardProp){var b=e.shouldForwardProp;T=function(L,F){return A(L,F)&&b(L,F)}}else T=A}var I=new qk(n,m,r?i.componentStyle:void 0);function v(L,F){return function(x,w,g){var E=x.attrs,R=x.componentStyle,k=x.defaultProps,N=x.foldedComponentIds,P=x.styledComponentId,me=x.target,ot=zn.useContext(Om),Z=np(),Y=x.shouldForwardProp||Z.shouldForwardProp,W=pE(w,ot,k)||Po,Q=function(et,Ke,Lt){for(var Cn,bn=Wt(Wt({},Ke),{className:void 0,theme:Lt}),Gn=0;Gn<et.length;Gn+=1){var Nn=xo(Cn=et[Gn])?Cn(bn):Cn;for(var De in Nn)bn[De]=De==="className"?Ji(bn[De],Nn[De]):De==="style"?Wt(Wt({},bn[De]),Nn[De]):Nn[De]}return Ke.className&&(bn.className=Ji(bn.className,Ke.className)),bn}(E,w,W),ne=Q.as||me,ye={};for(var fe in Q)Q[fe]===void 0||fe[0]==="$"||fe==="as"||fe==="theme"&&Q.theme===W||(fe==="forwardedAs"?ye.as=Q.forwardedAs:Y&&!Y(fe,ne)||(ye[fe]=Q[fe]));var ke=function(et,Ke){var Lt=np(),Cn=et.generateAndInjectStyles(Ke,Lt.styleSheet,Lt.stylis);return Cn}(R,Q),qe=Ji(N,P);return ke&&(qe+=" "+ke),Q.className&&(qe+=" "+Q.className),ye[Md(ne)&&!mE.has(ne)?"class":"className"]=qe,ye.ref=g,j.createElement(ne,ye)}(S,L,F)}v.displayName=f;var S=zn.forwardRef(v);return S.attrs=_,S.componentStyle=I,S.displayName=f,S.shouldForwardProp=T,S.foldedComponentIds=r?Ji(i.foldedComponentIds,i.styledComponentId):"",S.styledComponentId=m,S.target=r?i.target:t,Object.defineProperty(S,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(L){this._foldedDefaultProps=r?function(F){for(var x=[],w=1;w<arguments.length;w++)x[w-1]=arguments[w];for(var g=0,E=x;g<E.length;g++)ep(F,E[g],!0);return F}({},i.defaultProps,L):L}}),Lm(S,function(){return".".concat(S.styledComponentId)}),s&&TE(S,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),S}function Qv(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var Yv=function(t){return Object.assign(t,{isCss:!0})};function Mm(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(xo(t)||Tl(t))return Yv(_i(Qv(kh,El([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?_i(r):Yv(_i(Qv(r,e)))}function rp(t,e,n){if(n===void 0&&(n=Po),!e)throw Ul(1,e);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return t(e,n,Mm.apply(void 0,El([i],s,!1)))};return r.attrs=function(i){return rp(t,e,Wt(Wt({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return rp(t,e,Wt(Wt({},n),i))},r}var kE=function(t){return rp(Kk,t)},se=kE;mE.forEach(function(t){se[t]=kE(t)});var Gk=function(){function t(e,n){this.rules=e,this.componentId=n,this.isStatic=xE(e),zc.registerId(this.componentId+1)}return t.prototype.createStyles=function(e,n,r,i){var s=i(Zf(_i(this.rules,n,r,i)),""),o=this.componentId+e;r.insertRules(o,o,s)},t.prototype.removeStyles=function(e,n){n.clearRules(this.componentId+e)},t.prototype.renderStyles=function(e,n,r,i){e>2&&zc.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,n,r,i)},t}();function CE(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=Mm.apply(void 0,El([t],e,!1)),i="sc-global-".concat(vE(JSON.stringify(r))),s=new Gk(r,i),o=function(u){var c=np(),d=zn.useContext(Om),f=zn.useRef(c.styleSheet.allocateGSInstance(i)).current;return c.styleSheet.server&&l(f,u,c.styleSheet,d,c.stylis),zn.useLayoutEffect(function(){if(!c.styleSheet.server)return l(f,u,c.styleSheet,d,c.stylis),function(){return s.removeStyles(f,c.styleSheet)}},[f,u,c.styleSheet,d,c.stylis]),null};function l(u,c,d,f,m){if(s.isStatic)s.renderStyles(u,mk,d,m);else{var _=Wt(Wt({},c),{theme:pE(c,f,o.defaultProps)});s.renderStyles(u,_,d,m)}}return zn.memo(o)}const Qk=se.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`,Yk=se.span`
  font-size: 24px;
`;function Xk(){return V.jsx(Qk,{children:V.jsx(Yk,{children:"Loading..."})})}var bE=function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t},NE=Mm(Xv||(Xv=bE([`
/* http://meyerweb.com/eric/tools/css/reset/
   v5.0.1 | 20191019
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
`],[`
/* http://meyerweb.com/eric/tools/css/reset/
   v5.0.1 | 20191019
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
`])));CE(Jv||(Jv=bE(["",""],["",""])),NE);var Xv,Jv;function Jk(){return V.jsx(V.Fragment,{children:V.jsx(Ax,{})})}var Zv={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Zk=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},LE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,f=(s&3)<<4|l>>4;let m=(l&15)<<2|c>>6,_=c&63;u||(_=64,o||(m=64)),r.push(n[d],n[f],n[m],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(DE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Zk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||f==null)throw new eC;const m=s<<2|l>>4;if(r.push(m),c!==64){const _=l<<4&240|c>>2;if(r.push(_),f!==64){const T=c<<6&192|f;r.push(T)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class eC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const tC=function(t){const e=DE(t);return LE.encodeByteArray(e,!0)},$c=function(t){return tC(t).replace(/\./g,"")},OE=function(t){try{return LE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rC=()=>nC().__FIREBASE_DEFAULTS__,iC=()=>{if(typeof process>"u"||typeof Zv>"u")return;const t=Zv.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},sC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&OE(t[1]);return e&&JSON.parse(e)},Ch=()=>{try{return rC()||iC()||sC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ME=t=>{var e,n;return(n=(e=Ch())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},VE=t=>{const e=ME(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},UE=()=>{var t;return(t=Ch())===null||t===void 0?void 0:t.config},FE=t=>{var e;return(e=Ch())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[$c(JSON.stringify(n)),$c(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function aC(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Nt())}function lC(){var t;const e=(t=Ch())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function uC(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function cC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function hC(){const t=Nt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function dC(){return!lC()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function fC(){try{return typeof indexedDB=="object"}catch{return!1}}function pC(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mC="FirebaseError";class kn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=mC,Object.setPrototypeOf(this,kn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fl.prototype.create)}}class Fl{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?gC(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new kn(i,l,r)}}function gC(t,e){return t.replace(yC,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const yC=/\{\$([^}]+)}/g;function vC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Bc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(e_(s)&&e_(o)){if(!Bc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function e_(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jl(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Da(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function La(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function _C(t,e){const n=new wC(t,e);return n.subscribe.bind(n)}class wC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");EC(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ud),i.error===void 0&&(i.error=Ud),i.complete===void 0&&(i.complete=Ud);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function EC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ud(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(t){return t&&t._delegate?t._delegate:t}class Ai{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new oC;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(SC(e))try{this.getOrInitializeService({instanceIdentifier:Wi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Wi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Wi){return this.instances.has(e)}getOptions(e=Wi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:IC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Wi){return this.component?this.component.multipleInstances?e:Wi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function IC(t){return t===Wi?void 0:t}function SC(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new TC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Te||(Te={}));const AC={debug:Te.DEBUG,verbose:Te.VERBOSE,info:Te.INFO,warn:Te.WARN,error:Te.ERROR,silent:Te.SILENT},PC=Te.INFO,xC={[Te.DEBUG]:"log",[Te.VERBOSE]:"log",[Te.INFO]:"info",[Te.WARN]:"warn",[Te.ERROR]:"error"},kC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=xC[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Vm{constructor(e){this.name=e,this._logLevel=PC,this._logHandler=kC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?AC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Te.DEBUG,...e),this._logHandler(this,Te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Te.VERBOSE,...e),this._logHandler(this,Te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Te.INFO,...e),this._logHandler(this,Te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Te.WARN,...e),this._logHandler(this,Te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Te.ERROR,...e),this._logHandler(this,Te.ERROR,...e)}}const CC=(t,e)=>e.some(n=>t instanceof n);let t_,n_;function bC(){return t_||(t_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function NC(){return n_||(n_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const zE=new WeakMap,ip=new WeakMap,$E=new WeakMap,Fd=new WeakMap,Um=new WeakMap;function DC(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(wi(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&zE.set(n,t)}).catch(()=>{}),Um.set(e,t),e}function LC(t){if(ip.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ip.set(t,e)}let sp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ip.get(t);if(e==="objectStoreNames")return t.objectStoreNames||$E.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return wi(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function OC(t){sp=t(sp)}function MC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(jd(this),e,...n);return $E.set(r,e.sort?e.sort():[e]),wi(r)}:NC().includes(t)?function(...e){return t.apply(jd(this),e),wi(zE.get(this))}:function(...e){return wi(t.apply(jd(this),e))}}function VC(t){return typeof t=="function"?MC(t):(t instanceof IDBTransaction&&LC(t),CC(t,bC())?new Proxy(t,sp):t)}function wi(t){if(t instanceof IDBRequest)return DC(t);if(Fd.has(t))return Fd.get(t);const e=VC(t);return e!==t&&(Fd.set(t,e),Um.set(e,t)),e}const jd=t=>Um.get(t);function UC(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=wi(o);return r&&o.addEventListener("upgradeneeded",u=>{r(wi(o.result),u.oldVersion,u.newVersion,wi(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const FC=["get","getKey","getAll","getAllKeys","count"],jC=["put","add","delete","clear"],zd=new Map;function r_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(zd.get(e))return zd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=jC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||FC.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return zd.set(e,s),s}OC(t=>({...t,get:(e,n,r)=>r_(e,n)||t.get(e,n,r),has:(e,n)=>!!r_(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if($C(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function $C(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const op="@firebase/app",i_="0.10.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds=new Vm("@firebase/app"),BC="@firebase/app-compat",HC="@firebase/analytics-compat",WC="@firebase/analytics",qC="@firebase/app-check-compat",KC="@firebase/app-check",GC="@firebase/auth",QC="@firebase/auth-compat",YC="@firebase/database",XC="@firebase/database-compat",JC="@firebase/functions",ZC="@firebase/functions-compat",e2="@firebase/installations",t2="@firebase/installations-compat",n2="@firebase/messaging",r2="@firebase/messaging-compat",i2="@firebase/performance",s2="@firebase/performance-compat",o2="@firebase/remote-config",a2="@firebase/remote-config-compat",l2="@firebase/storage",u2="@firebase/storage-compat",c2="@firebase/firestore",h2="@firebase/vertexai-preview",d2="@firebase/firestore-compat",f2="firebase",p2="10.12.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ap="[DEFAULT]",m2={[op]:"fire-core",[BC]:"fire-core-compat",[WC]:"fire-analytics",[HC]:"fire-analytics-compat",[KC]:"fire-app-check",[qC]:"fire-app-check-compat",[GC]:"fire-auth",[QC]:"fire-auth-compat",[YC]:"fire-rtdb",[XC]:"fire-rtdb-compat",[JC]:"fire-fn",[ZC]:"fire-fn-compat",[e2]:"fire-iid",[t2]:"fire-iid-compat",[n2]:"fire-fcm",[r2]:"fire-fcm-compat",[i2]:"fire-perf",[s2]:"fire-perf-compat",[o2]:"fire-rc",[a2]:"fire-rc-compat",[l2]:"fire-gcs",[u2]:"fire-gcs-compat",[c2]:"fire-fst",[d2]:"fire-fst-compat",[h2]:"fire-vertex","fire-js":"fire-js",[f2]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hc=new Map,g2=new Map,lp=new Map;function s_(t,e){try{t.container.addComponent(e)}catch(n){ds.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function fs(t){const e=t.name;if(lp.has(e))return ds.debug(`There were multiple attempts to register component ${e}.`),!1;lp.set(e,t);for(const n of Hc.values())s_(n,t);for(const n of g2.values())s_(n,t);return!0}function bh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function ir(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y2={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ei=new Fl("app","Firebase",y2);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v2{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ai("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ei.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is=p2;function BE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ap,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Ei.create("bad-app-name",{appName:String(i)});if(n||(n=UE()),!n)throw Ei.create("no-options");const s=Hc.get(i);if(s){if(Bc(n,s.options)&&Bc(r,s.config))return s;throw Ei.create("duplicate-app",{appName:i})}const o=new RC(i);for(const u of lp.values())o.addComponent(u);const l=new v2(n,r,o);return Hc.set(i,l),l}function Fm(t=ap){const e=Hc.get(t);if(!e&&t===ap&&UE())return BE();if(!e)throw Ei.create("no-app",{appName:t});return e}function lr(t,e,n){var r;let i=(r=m2[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ds.warn(l.join(" "));return}fs(new Ai(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _2="firebase-heartbeat-database",w2=1,Il="firebase-heartbeat-store";let $d=null;function HE(){return $d||($d=UC(_2,w2,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Il)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ei.create("idb-open",{originalErrorMessage:t.message})})),$d}async function E2(t){try{const n=(await HE()).transaction(Il),r=await n.objectStore(Il).get(WE(t));return await n.done,r}catch(e){if(e instanceof kn)ds.warn(e.message);else{const n=Ei.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ds.warn(n.message)}}}async function o_(t,e){try{const r=(await HE()).transaction(Il,"readwrite");await r.objectStore(Il).put(e,WE(t)),await r.done}catch(n){if(n instanceof kn)ds.warn(n.message);else{const r=Ei.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ds.warn(r.message)}}}function WE(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T2=1024,I2=30*24*60*60*1e3;class S2{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new A2(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=a_();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=I2}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=a_(),{heartbeatsToSend:r,unsentEntries:i}=R2(this._heartbeatsCache.heartbeats),s=$c(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function a_(){return new Date().toISOString().substring(0,10)}function R2(t,e=T2){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),l_(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),l_(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class A2{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return fC()?pC().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await E2(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return o_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return o_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function l_(t){return $c(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P2(t){fs(new Ai("platform-logger",e=>new zC(e),"PRIVATE")),fs(new Ai("heartbeat",e=>new S2(e),"PRIVATE")),lr(op,i_,t),lr(op,i_,"esm2017"),lr("fire-js","")}P2("");var x2="firebase",k2="10.12.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */lr(x2,k2,"app");function qE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const C2=qE,KE=new Fl("auth","Firebase",qE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wc=new Vm("@firebase/auth");function b2(t,...e){Wc.logLevel<=Te.WARN&&Wc.warn(`Auth (${Is}): ${t}`,...e)}function nc(t,...e){Wc.logLevel<=Te.ERROR&&Wc.error(`Auth (${Is}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(t,...e){throw jm(t,...e)}function ur(t,...e){return jm(t,...e)}function GE(t,e,n){const r=Object.assign(Object.assign({},C2()),{[e]:n});return new Fl("auth","Firebase",r).create(e,{appName:t.name})}function Nr(t){return GE(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function jm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return KE.create(t,...e)}function le(t,e,...n){if(!t)throw jm(e,...n)}function Pr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw nc(e),new Error(e)}function Vr(t,e){t||Pr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function up(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function N2(){return u_()==="http:"||u_()==="https:"}function u_(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(N2()||uC()||"connection"in navigator)?navigator.onLine:!0}function L2(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(e,n){this.shortDelay=e,this.longDelay=n,Vr(n>e,"Short delay should be less than long delay!"),this.isMobile=aC()||cC()}get(){return D2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zm(t,e){Vr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Pr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Pr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Pr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M2=new zl(3e4,6e4);function Oi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function $r(t,e,n,r,i={}){return YE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=jl(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),QE.fetch()(XE(t,t.config.apiHost,n,l),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function YE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},O2),e);try{const i=new U2(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw bu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw bu(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw bu(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw bu(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw GE(t,d,c);qn(t,d)}}catch(i){if(i instanceof kn)throw i;qn(t,"network-request-failed",{message:String(i)})}}async function $l(t,e,n,r,i={}){const s=await $r(t,e,n,r,i);return"mfaPendingCredential"in s&&qn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function XE(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?zm(t.config,i):`${t.config.apiScheme}://${i}`}function V2(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class U2{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ur(this.auth,"network-request-failed")),M2.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function bu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ur(t,e,r);return i.customData._tokenResponse=n,i}function c_(t){return t!==void 0&&t.enterprise!==void 0}class F2{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return V2(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function j2(t,e){return $r(t,"GET","/v2/recaptchaConfig",Oi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z2(t,e){return $r(t,"POST","/v1/accounts:delete",e)}async function JE(t,e){return $r(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qa(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function $2(t,e=!1){const n=rt(t),r=await n.getIdToken(e),i=$m(r);le(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Qa(Bd(i.auth_time)),issuedAtTime:Qa(Bd(i.iat)),expirationTime:Qa(Bd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Bd(t){return Number(t)*1e3}function $m(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return nc("JWT malformed, contained fewer than 3 sections"),null;try{const i=OE(n);return i?JSON.parse(i):(nc("Failed to decode base64 JWT payload"),null)}catch(i){return nc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function h_(t){const e=$m(t);return le(e,"internal-error"),le(typeof e.exp<"u","internal-error"),le(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ko(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof kn&&B2(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function B2({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qa(this.lastLoginAt),this.creationTime=Qa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ko(t,JE(n,{idToken:r}));le(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?ZE(s.providerUserInfo):[],l=q2(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),d=u?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new cp(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,f)}async function W2(t){const e=rt(t);await qc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function q2(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function ZE(t){return t.map(e=>{var{providerId:n}=e,r=km(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K2(t,e){const n=await YE(t,{},async()=>{const r=jl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=XE(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",QE.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function G2(t,e){return $r(t,"POST","/v2/accounts:revokeToken",Oi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){le(e.idToken,"internal-error"),le(typeof e.idToken<"u","internal-error"),le(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):h_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){le(e.length!==0,"internal-error");const n=h_(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(le(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await K2(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ho;return r&&(le(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(le(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(le(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ho,this.toJSON())}_performRefresh(){return Pr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yr(t,e){le(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class xr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=km(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new H2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new cp(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ko(this,this.stsTokenManager.getToken(this.auth,e));return le(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return $2(this,e)}reload(){return W2(this)}_assign(e){this!==e&&(le(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new xr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){le(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await qc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ir(this.auth.app))return Promise.reject(Nr(this.auth));const e=await this.getIdToken();return await ko(this,z2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,c,d;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,_=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,T=(o=n.photoURL)!==null&&o!==void 0?o:void 0,A=(l=n.tenantId)!==null&&l!==void 0?l:void 0,b=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,I=(c=n.createdAt)!==null&&c!==void 0?c:void 0,v=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:S,emailVerified:L,isAnonymous:F,providerData:x,stsTokenManager:w}=n;le(S&&w,e,"internal-error");const g=ho.fromJSON(this.name,w);le(typeof S=="string",e,"internal-error"),Yr(f,e.name),Yr(m,e.name),le(typeof L=="boolean",e,"internal-error"),le(typeof F=="boolean",e,"internal-error"),Yr(_,e.name),Yr(T,e.name),Yr(A,e.name),Yr(b,e.name),Yr(I,e.name),Yr(v,e.name);const E=new xr({uid:S,auth:e,email:m,emailVerified:L,displayName:f,isAnonymous:F,photoURL:T,phoneNumber:_,tenantId:A,stsTokenManager:g,createdAt:I,lastLoginAt:v});return x&&Array.isArray(x)&&(E.providerData=x.map(R=>Object.assign({},R))),b&&(E._redirectEventId=b),E}static async _fromIdTokenResponse(e,n,r=!1){const i=new ho;i.updateFromServerResponse(n);const s=new xr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await qc(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];le(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?ZE(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new ho;l.updateFromIdToken(r);const u=new xr({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new cp(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d_=new Map;function kr(t){Vr(t instanceof Function,"Expected a class definition");let e=d_.get(t);return e?(Vr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,d_.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}eT.type="NONE";const f_=eT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rc(t,e,n){return`firebase:${t}:${e}:${n}`}class fo{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=rc(this.userKey,i.apiKey,s),this.fullPersistenceKey=rc("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?xr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new fo(kr(f_),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||kr(f_);const o=rc(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const d=await c._get(o);if(d){const f=xr._fromJSON(e,d);c!==s&&(l=f),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new fo(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new fo(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(rT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(tT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(sT(e))return"Blackberry";if(oT(e))return"Webos";if(Bm(e))return"Safari";if((e.includes("chrome/")||nT(e))&&!e.includes("edge/"))return"Chrome";if(iT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function tT(t=Nt()){return/firefox\//i.test(t)}function Bm(t=Nt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function nT(t=Nt()){return/crios\//i.test(t)}function rT(t=Nt()){return/iemobile/i.test(t)}function iT(t=Nt()){return/android/i.test(t)}function sT(t=Nt()){return/blackberry/i.test(t)}function oT(t=Nt()){return/webos/i.test(t)}function Nh(t=Nt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Q2(t=Nt()){var e;return Nh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Y2(){return hC()&&document.documentMode===10}function aT(t=Nt()){return Nh(t)||iT(t)||oT(t)||sT(t)||/windows phone/i.test(t)||rT(t)}function X2(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lT(t,e=[]){let n;switch(t){case"Browser":n=p_(Nt());break;case"Worker":n=`${p_(Nt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Is}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z2(t,e={}){return $r(t,"GET","/v2/passwordPolicy",Oi(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eb=6;class tb{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:eb,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new m_(this),this.idTokenSubscription=new m_(this),this.beforeStateQueue=new J2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=KE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=kr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await fo.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await JE(this,{idToken:e}),r=await xr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(ir(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return le(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await qc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=L2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ir(this.app))return Promise.reject(Nr(this));const n=e?rt(e):null;return n&&le(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&le(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ir(this.app)?Promise.reject(Nr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ir(this.app)?Promise.reject(Nr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(kr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Z2(this),n=new tb(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Fl("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await G2(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&kr(e)||this._popupRedirectResolver;le(n,this,"argument-error"),this.redirectPersistenceManager=await fo.create(this,[kr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(le(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return le(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=lT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&b2(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ss(t){return rt(t)}class m_{constructor(e){this.auth=e,this.observer=null,this.addObserver=_C(n=>this.observer=n)}get next(){return le(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function rb(t){Dh=t}function uT(t){return Dh.loadJS(t)}function ib(){return Dh.recaptchaEnterpriseScript}function sb(){return Dh.gapiScript}function ob(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const ab="recaptcha-enterprise",lb="NO_RECAPTCHA";class ub{constructor(e){this.type=ab,this.auth=Ss(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{j2(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new F2(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;c_(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(lb)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&c_(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=ib();u.length!==0&&(u+=l),uT(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function g_(t,e,n,r=!1){const i=new ub(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function hp(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await g_(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await g_(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cb(t,e){const n=bh(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Bc(s,e??{}))return i;qn(i,"already-initialized")}return n.initialize({options:e})}function hb(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(kr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function db(t,e,n){const r=Ss(t);le(r._canInitEmulator,r,"emulator-config-failed"),le(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=cT(e),{host:o,port:l}=fb(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),pb()}function cT(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function fb(t){const e=cT(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:y_(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:y_(o)}}}function y_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function pb(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Pr("not implemented")}_getIdTokenResponse(e){return Pr("not implemented")}_linkToIdToken(e,n){return Pr("not implemented")}_getReauthenticationResolver(e){return Pr("not implemented")}}async function mb(t,e){return $r(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gb(t,e){return $l(t,"POST","/v1/accounts:signInWithPassword",Oi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yb(t,e){return $l(t,"POST","/v1/accounts:signInWithEmailLink",Oi(t,e))}async function vb(t,e){return $l(t,"POST","/v1/accounts:signInWithEmailLink",Oi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl extends Hm{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Sl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Sl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return hp(e,n,"signInWithPassword",gb);case"emailLink":return yb(e,{email:this._email,oobCode:this._password});default:qn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return hp(e,r,"signUpPassword",mb);case"emailLink":return vb(e,{idToken:n,email:this._email,oobCode:this._password});default:qn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function po(t,e){return $l(t,"POST","/v1/accounts:signInWithIdp",Oi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _b="http://localhost";class ps extends Hm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ps(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):qn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=km(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ps(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return po(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,po(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,po(e,n)}buildRequest(){const e={requestUri:_b,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=jl(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wb(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Eb(t){const e=Da(La(t)).link,n=e?Da(La(e)).deep_link_id:null,r=Da(La(t)).deep_link_id;return(r?Da(La(r)).link:null)||r||n||e||t}class Wm{constructor(e){var n,r,i,s,o,l;const u=Da(La(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,d=(r=u.oobCode)!==null&&r!==void 0?r:null,f=wb((i=u.mode)!==null&&i!==void 0?i:null);le(c&&d&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=d,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=Eb(e);try{return new Wm(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(){this.providerId=Wo.PROVIDER_ID}static credential(e,n){return Sl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Wm.parseLink(n);return le(r,"argument-error"),Sl._fromEmailAndCode(e,r.code,r.tenantId)}}Wo.PROVIDER_ID="password";Wo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Wo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hT{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl extends hT{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri extends Bl{constructor(){super("facebook.com")}static credential(e){return ps._fromParams({providerId:ri.PROVIDER_ID,signInMethod:ri.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ri.credentialFromTaggedObject(e)}static credentialFromError(e){return ri.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ri.credential(e.oauthAccessToken)}catch{return null}}}ri.FACEBOOK_SIGN_IN_METHOD="facebook.com";ri.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii extends Bl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ps._fromParams({providerId:ii.PROVIDER_ID,signInMethod:ii.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ii.credentialFromTaggedObject(e)}static credentialFromError(e){return ii.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ii.credential(n,r)}catch{return null}}}ii.GOOGLE_SIGN_IN_METHOD="google.com";ii.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si extends Bl{constructor(){super("github.com")}static credential(e){return ps._fromParams({providerId:si.PROVIDER_ID,signInMethod:si.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return si.credentialFromTaggedObject(e)}static credentialFromError(e){return si.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return si.credential(e.oauthAccessToken)}catch{return null}}}si.GITHUB_SIGN_IN_METHOD="github.com";si.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi extends Bl{constructor(){super("twitter.com")}static credential(e,n){return ps._fromParams({providerId:oi.PROVIDER_ID,signInMethod:oi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return oi.credentialFromTaggedObject(e)}static credentialFromError(e){return oi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return oi.credential(n,r)}catch{return null}}}oi.TWITTER_SIGN_IN_METHOD="twitter.com";oi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tb(t,e){return $l(t,"POST","/v1/accounts:signUp",Oi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await xr._fromIdTokenResponse(e,r,i),o=v_(r);return new ms({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=v_(r);return new ms({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function v_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc extends kn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Kc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Kc(e,n,r,i)}}function dT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Kc._fromErrorAndOperation(t,s,e,r):s})}async function Ib(t,e,n=!1){const r=await ko(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ms._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sb(t,e,n=!1){const{auth:r}=t;if(ir(r.app))return Promise.reject(Nr(r));const i="reauthenticate";try{const s=await ko(t,dT(r,i,e,t),n);le(s.idToken,r,"internal-error");const o=$m(s.idToken);le(o,r,"internal-error");const{sub:l}=o;return le(t.uid===l,r,"user-mismatch"),ms._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&qn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fT(t,e,n=!1){if(ir(t.app))return Promise.reject(Nr(t));const r="signIn",i=await dT(t,r,e),s=await ms._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Rb(t,e){return fT(Ss(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pT(t){const e=Ss(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Ab(t,e,n){if(ir(t.app))return Promise.reject(Nr(t));const r=Ss(t),o=await hp(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Tb).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&pT(t),u}),l=await ms._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function Pb(t,e,n){return ir(t.app)?Promise.reject(Nr(t)):Rb(rt(t),Wo.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&pT(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xb(t,e){return $r(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mT(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=rt(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await ko(r,xb(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function kb(t,e,n,r){return rt(t).onIdTokenChanged(e,n,r)}function Cb(t,e,n){return rt(t).beforeAuthStateChanged(e,n)}const Gc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Gc,"1"),this.storage.removeItem(Gc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bb(){const t=Nt();return Bm(t)||Nh(t)}const Nb=1e3,Db=10;class yT extends gT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=bb()&&X2(),this.fallbackToPolling=aT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Y2()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Db):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Nb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}yT.type="LOCAL";const Lb=yT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vT extends gT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}vT.type="SESSION";const _T=vT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ob(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Lh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await Ob(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Lh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=qm("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(){return window}function Vb(t){cr().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wT(){return typeof cr().WorkerGlobalScope<"u"&&typeof cr().importScripts=="function"}async function Ub(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Fb(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function jb(){return wT()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ET="firebaseLocalStorageDb",zb=1,Qc="firebaseLocalStorage",TT="fbase_key";class Hl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Oh(t,e){return t.transaction([Qc],e?"readwrite":"readonly").objectStore(Qc)}function $b(){const t=indexedDB.deleteDatabase(ET);return new Hl(t).toPromise()}function dp(){const t=indexedDB.open(ET,zb);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Qc,{keyPath:TT})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Qc)?e(r):(r.close(),await $b(),e(await dp()))})})}async function __(t,e,n){const r=Oh(t,!0).put({[TT]:e,value:n});return new Hl(r).toPromise()}async function Bb(t,e){const n=Oh(t,!1).get(e),r=await new Hl(n).toPromise();return r===void 0?null:r.value}function w_(t,e){const n=Oh(t,!0).delete(e);return new Hl(n).toPromise()}const Hb=800,Wb=3;class IT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await dp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Wb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return wT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Lh._getInstance(jb()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Ub(),!this.activeServiceWorker)return;this.sender=new Mb(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Fb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await dp();return await __(e,Gc,"1"),await w_(e,Gc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>__(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Bb(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>w_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Oh(i,!1).getAll();return new Hl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Hb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}IT.type="LOCAL";const qb=IT;new zl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kb(t,e){return e?kr(e):(le(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km extends Hm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return po(e,this._buildIdpRequest())}_linkToIdToken(e,n){return po(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return po(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Gb(t){return fT(t.auth,new Km(t),t.bypassAuthState)}function Qb(t){const{auth:e,user:n}=t;return le(n,e,"internal-error"),Sb(n,new Km(t),t.bypassAuthState)}async function Yb(t){const{auth:e,user:n}=t;return le(n,e,"internal-error"),Ib(n,new Km(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ST{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Gb;case"linkViaPopup":case"linkViaRedirect":return Yb;case"reauthViaPopup":case"reauthViaRedirect":return Qb;default:qn(this.auth,"internal-error")}}resolve(e){Vr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Vr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xb=new zl(2e3,1e4);class ro extends ST{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ro.currentPopupAction&&ro.currentPopupAction.cancel(),ro.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return le(e,this.auth,"internal-error"),e}async onExecution(){Vr(this.filter.length===1,"Popup operations only handle one event");const e=qm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ur(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ur(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ro.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ur(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Xb.get())};e()}}ro.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jb="pendingRedirect",ic=new Map;class Zb extends ST{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ic.get(this.auth._key());if(!e){try{const r=await eN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ic.set(this.auth._key(),e)}return this.bypassAuthState||ic.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function eN(t,e){const n=rN(e),r=nN(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function tN(t,e){ic.set(t._key(),e)}function nN(t){return kr(t._redirectPersistence)}function rN(t){return rc(Jb,t.config.apiKey,t.name)}async function iN(t,e,n=!1){if(ir(t.app))return Promise.reject(Nr(t));const r=Ss(t),i=Kb(r,e),o=await new Zb(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sN=10*60*1e3;class oN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!aN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!RT(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ur(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=sN&&this.cachedEventUids.clear(),this.cachedEventUids.has(E_(e))}saveEventToCache(e){this.cachedEventUids.add(E_(e)),this.lastProcessedEventTime=Date.now()}}function E_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function RT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function aN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return RT(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lN(t,e={}){return $r(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,cN=/^https?/;async function hN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await lN(t);for(const n of e)try{if(dN(n))return}catch{}qn(t,"unauthorized-domain")}function dN(t){const e=up(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!cN.test(n))return!1;if(uN.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fN=new zl(3e4,6e4);function T_(){const t=cr().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function pN(t){return new Promise((e,n)=>{var r,i,s;function o(){T_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{T_(),n(ur(t,"network-request-failed"))},timeout:fN.get()})}if(!((i=(r=cr().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=cr().gapi)===null||s===void 0)&&s.load)o();else{const l=ob("iframefcb");return cr()[l]=()=>{gapi.load?o():n(ur(t,"network-request-failed"))},uT(`${sb()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw sc=null,e})}let sc=null;function mN(t){return sc=sc||pN(t),sc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gN=new zl(5e3,15e3),yN="__/auth/iframe",vN="emulator/auth/iframe",_N={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},wN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function EN(t){const e=t.config;le(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?zm(e,vN):`https://${t.config.authDomain}/${yN}`,r={apiKey:e.apiKey,appName:t.name,v:Is},i=wN.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${jl(r).slice(1)}`}async function TN(t){const e=await mN(t),n=cr().gapi;return le(n,t,"internal-error"),e.open({where:document.body,url:EN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:_N,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=ur(t,"network-request-failed"),l=cr().setTimeout(()=>{s(o)},gN.get());function u(){cr().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},SN=500,RN=600,AN="_blank",PN="http://localhost";class I_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function xN(t,e,n,r=SN,i=RN){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},IN),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Nt().toLowerCase();n&&(l=nT(c)?AN:n),tT(c)&&(e=e||PN,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[_,T])=>`${m}${_}=${T},`,"");if(Q2(c)&&l!=="_self")return kN(e||"",l),new I_(null);const f=window.open(e||"",l,d);le(f,t,"popup-blocked");try{f.focus()}catch{}return new I_(f)}function kN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CN="__/auth/handler",bN="emulator/auth/handler",NN=encodeURIComponent("fac");async function S_(t,e,n,r,i,s){le(t.config.authDomain,t,"auth-domain-config-required"),le(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Is,eventId:i};if(e instanceof hT){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",vC(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries({}))o[d]=f}if(e instanceof Bl){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const u=await t._getAppCheckToken(),c=u?`#${NN}=${encodeURIComponent(u)}`:"";return`${DN(t)}?${jl(l).slice(1)}${c}`}function DN({config:t}){return t.emulator?zm(t,bN):`https://${t.authDomain}/${CN}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hd="webStorageSupport";class LN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=_T,this._completeRedirectFn=iN,this._overrideRedirectResult=tN}async _openPopup(e,n,r,i){var s;Vr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await S_(e,n,r,up(),i);return xN(e,o,qm())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await S_(e,n,r,up(),i);return Vb(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Vr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await TN(e),r=new oN(e);return n.register("authEvent",i=>(le(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Hd,{type:Hd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Hd];o!==void 0&&n(!!o),qn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=hN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return aT()||Bm()||Nh()}}const ON=LN;var R_="@firebase/auth",A_="1.7.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){le(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function UN(t){fs(new Ai("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;le(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:lT(t)},c=new nb(r,i,s,u);return hb(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),fs(new Ai("auth-internal",e=>{const n=Ss(e.getProvider("auth").getImmediate());return(r=>new MN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),lr(R_,A_,VN(t)),lr(R_,A_,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FN=5*60,jN=FE("authIdTokenMaxAge")||FN;let P_=null;const zN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>jN)return;const i=n==null?void 0:n.token;P_!==i&&(P_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function $N(t=Fm()){const e=bh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=cb(t,{popupRedirectResolver:ON,persistence:[qb,Lb,_T]}),r=FE("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=zN(s.toString());Cb(n,o,()=>o(n.currentUser)),kb(n,l=>o(l))}}const i=ME("auth");return i&&db(n,`http://${i}`),n}function BN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}rb({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=ur("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",BN().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});UN("Browser");var x_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var is,AT;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,g){function E(){}E.prototype=g.prototype,w.D=g.prototype,w.prototype=new E,w.prototype.constructor=w,w.C=function(R,k,N){for(var P=Array(arguments.length-2),me=2;me<arguments.length;me++)P[me-2]=arguments[me];return g.prototype[k].apply(R,P)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,g,E){E||(E=0);var R=Array(16);if(typeof g=="string")for(var k=0;16>k;++k)R[k]=g.charCodeAt(E++)|g.charCodeAt(E++)<<8|g.charCodeAt(E++)<<16|g.charCodeAt(E++)<<24;else for(k=0;16>k;++k)R[k]=g[E++]|g[E++]<<8|g[E++]<<16|g[E++]<<24;g=w.g[0],E=w.g[1],k=w.g[2];var N=w.g[3],P=g+(N^E&(k^N))+R[0]+3614090360&4294967295;g=E+(P<<7&4294967295|P>>>25),P=N+(k^g&(E^k))+R[1]+3905402710&4294967295,N=g+(P<<12&4294967295|P>>>20),P=k+(E^N&(g^E))+R[2]+606105819&4294967295,k=N+(P<<17&4294967295|P>>>15),P=E+(g^k&(N^g))+R[3]+3250441966&4294967295,E=k+(P<<22&4294967295|P>>>10),P=g+(N^E&(k^N))+R[4]+4118548399&4294967295,g=E+(P<<7&4294967295|P>>>25),P=N+(k^g&(E^k))+R[5]+1200080426&4294967295,N=g+(P<<12&4294967295|P>>>20),P=k+(E^N&(g^E))+R[6]+2821735955&4294967295,k=N+(P<<17&4294967295|P>>>15),P=E+(g^k&(N^g))+R[7]+4249261313&4294967295,E=k+(P<<22&4294967295|P>>>10),P=g+(N^E&(k^N))+R[8]+1770035416&4294967295,g=E+(P<<7&4294967295|P>>>25),P=N+(k^g&(E^k))+R[9]+2336552879&4294967295,N=g+(P<<12&4294967295|P>>>20),P=k+(E^N&(g^E))+R[10]+4294925233&4294967295,k=N+(P<<17&4294967295|P>>>15),P=E+(g^k&(N^g))+R[11]+2304563134&4294967295,E=k+(P<<22&4294967295|P>>>10),P=g+(N^E&(k^N))+R[12]+1804603682&4294967295,g=E+(P<<7&4294967295|P>>>25),P=N+(k^g&(E^k))+R[13]+4254626195&4294967295,N=g+(P<<12&4294967295|P>>>20),P=k+(E^N&(g^E))+R[14]+2792965006&4294967295,k=N+(P<<17&4294967295|P>>>15),P=E+(g^k&(N^g))+R[15]+1236535329&4294967295,E=k+(P<<22&4294967295|P>>>10),P=g+(k^N&(E^k))+R[1]+4129170786&4294967295,g=E+(P<<5&4294967295|P>>>27),P=N+(E^k&(g^E))+R[6]+3225465664&4294967295,N=g+(P<<9&4294967295|P>>>23),P=k+(g^E&(N^g))+R[11]+643717713&4294967295,k=N+(P<<14&4294967295|P>>>18),P=E+(N^g&(k^N))+R[0]+3921069994&4294967295,E=k+(P<<20&4294967295|P>>>12),P=g+(k^N&(E^k))+R[5]+3593408605&4294967295,g=E+(P<<5&4294967295|P>>>27),P=N+(E^k&(g^E))+R[10]+38016083&4294967295,N=g+(P<<9&4294967295|P>>>23),P=k+(g^E&(N^g))+R[15]+3634488961&4294967295,k=N+(P<<14&4294967295|P>>>18),P=E+(N^g&(k^N))+R[4]+3889429448&4294967295,E=k+(P<<20&4294967295|P>>>12),P=g+(k^N&(E^k))+R[9]+568446438&4294967295,g=E+(P<<5&4294967295|P>>>27),P=N+(E^k&(g^E))+R[14]+3275163606&4294967295,N=g+(P<<9&4294967295|P>>>23),P=k+(g^E&(N^g))+R[3]+4107603335&4294967295,k=N+(P<<14&4294967295|P>>>18),P=E+(N^g&(k^N))+R[8]+1163531501&4294967295,E=k+(P<<20&4294967295|P>>>12),P=g+(k^N&(E^k))+R[13]+2850285829&4294967295,g=E+(P<<5&4294967295|P>>>27),P=N+(E^k&(g^E))+R[2]+4243563512&4294967295,N=g+(P<<9&4294967295|P>>>23),P=k+(g^E&(N^g))+R[7]+1735328473&4294967295,k=N+(P<<14&4294967295|P>>>18),P=E+(N^g&(k^N))+R[12]+2368359562&4294967295,E=k+(P<<20&4294967295|P>>>12),P=g+(E^k^N)+R[5]+4294588738&4294967295,g=E+(P<<4&4294967295|P>>>28),P=N+(g^E^k)+R[8]+2272392833&4294967295,N=g+(P<<11&4294967295|P>>>21),P=k+(N^g^E)+R[11]+1839030562&4294967295,k=N+(P<<16&4294967295|P>>>16),P=E+(k^N^g)+R[14]+4259657740&4294967295,E=k+(P<<23&4294967295|P>>>9),P=g+(E^k^N)+R[1]+2763975236&4294967295,g=E+(P<<4&4294967295|P>>>28),P=N+(g^E^k)+R[4]+1272893353&4294967295,N=g+(P<<11&4294967295|P>>>21),P=k+(N^g^E)+R[7]+4139469664&4294967295,k=N+(P<<16&4294967295|P>>>16),P=E+(k^N^g)+R[10]+3200236656&4294967295,E=k+(P<<23&4294967295|P>>>9),P=g+(E^k^N)+R[13]+681279174&4294967295,g=E+(P<<4&4294967295|P>>>28),P=N+(g^E^k)+R[0]+3936430074&4294967295,N=g+(P<<11&4294967295|P>>>21),P=k+(N^g^E)+R[3]+3572445317&4294967295,k=N+(P<<16&4294967295|P>>>16),P=E+(k^N^g)+R[6]+76029189&4294967295,E=k+(P<<23&4294967295|P>>>9),P=g+(E^k^N)+R[9]+3654602809&4294967295,g=E+(P<<4&4294967295|P>>>28),P=N+(g^E^k)+R[12]+3873151461&4294967295,N=g+(P<<11&4294967295|P>>>21),P=k+(N^g^E)+R[15]+530742520&4294967295,k=N+(P<<16&4294967295|P>>>16),P=E+(k^N^g)+R[2]+3299628645&4294967295,E=k+(P<<23&4294967295|P>>>9),P=g+(k^(E|~N))+R[0]+4096336452&4294967295,g=E+(P<<6&4294967295|P>>>26),P=N+(E^(g|~k))+R[7]+1126891415&4294967295,N=g+(P<<10&4294967295|P>>>22),P=k+(g^(N|~E))+R[14]+2878612391&4294967295,k=N+(P<<15&4294967295|P>>>17),P=E+(N^(k|~g))+R[5]+4237533241&4294967295,E=k+(P<<21&4294967295|P>>>11),P=g+(k^(E|~N))+R[12]+1700485571&4294967295,g=E+(P<<6&4294967295|P>>>26),P=N+(E^(g|~k))+R[3]+2399980690&4294967295,N=g+(P<<10&4294967295|P>>>22),P=k+(g^(N|~E))+R[10]+4293915773&4294967295,k=N+(P<<15&4294967295|P>>>17),P=E+(N^(k|~g))+R[1]+2240044497&4294967295,E=k+(P<<21&4294967295|P>>>11),P=g+(k^(E|~N))+R[8]+1873313359&4294967295,g=E+(P<<6&4294967295|P>>>26),P=N+(E^(g|~k))+R[15]+4264355552&4294967295,N=g+(P<<10&4294967295|P>>>22),P=k+(g^(N|~E))+R[6]+2734768916&4294967295,k=N+(P<<15&4294967295|P>>>17),P=E+(N^(k|~g))+R[13]+1309151649&4294967295,E=k+(P<<21&4294967295|P>>>11),P=g+(k^(E|~N))+R[4]+4149444226&4294967295,g=E+(P<<6&4294967295|P>>>26),P=N+(E^(g|~k))+R[11]+3174756917&4294967295,N=g+(P<<10&4294967295|P>>>22),P=k+(g^(N|~E))+R[2]+718787259&4294967295,k=N+(P<<15&4294967295|P>>>17),P=E+(N^(k|~g))+R[9]+3951481745&4294967295,w.g[0]=w.g[0]+g&4294967295,w.g[1]=w.g[1]+(k+(P<<21&4294967295|P>>>11))&4294967295,w.g[2]=w.g[2]+k&4294967295,w.g[3]=w.g[3]+N&4294967295}r.prototype.u=function(w,g){g===void 0&&(g=w.length);for(var E=g-this.blockSize,R=this.B,k=this.h,N=0;N<g;){if(k==0)for(;N<=E;)i(this,w,N),N+=this.blockSize;if(typeof w=="string"){for(;N<g;)if(R[k++]=w.charCodeAt(N++),k==this.blockSize){i(this,R),k=0;break}}else for(;N<g;)if(R[k++]=w[N++],k==this.blockSize){i(this,R),k=0;break}}this.h=k,this.o+=g},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var g=1;g<w.length-8;++g)w[g]=0;var E=8*this.o;for(g=w.length-8;g<w.length;++g)w[g]=E&255,E/=256;for(this.u(w),w=Array(16),g=E=0;4>g;++g)for(var R=0;32>R;R+=8)w[E++]=this.g[g]>>>R&255;return w};function s(w,g){var E=l;return Object.prototype.hasOwnProperty.call(E,w)?E[w]:E[w]=g(w)}function o(w,g){this.h=g;for(var E=[],R=!0,k=w.length-1;0<=k;k--){var N=w[k]|0;R&&N==g||(E[k]=N,R=!1)}this.g=E}var l={};function u(w){return-128<=w&&128>w?s(w,function(g){return new o([g|0],0>g?-1:0)}):new o([w|0],0>w?-1:0)}function c(w){if(isNaN(w)||!isFinite(w))return f;if(0>w)return b(c(-w));for(var g=[],E=1,R=0;w>=E;R++)g[R]=w/E|0,E*=4294967296;return new o(g,0)}function d(w,g){if(w.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(w.charAt(0)=="-")return b(d(w.substring(1),g));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=c(Math.pow(g,8)),R=f,k=0;k<w.length;k+=8){var N=Math.min(8,w.length-k),P=parseInt(w.substring(k,k+N),g);8>N?(N=c(Math.pow(g,N)),R=R.j(N).add(c(P))):(R=R.j(E),R=R.add(c(P)))}return R}var f=u(0),m=u(1),_=u(16777216);t=o.prototype,t.m=function(){if(A(this))return-b(this).m();for(var w=0,g=1,E=0;E<this.g.length;E++){var R=this.i(E);w+=(0<=R?R:4294967296+R)*g,g*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(T(this))return"0";if(A(this))return"-"+b(this).toString(w);for(var g=c(Math.pow(w,6)),E=this,R="";;){var k=L(E,g).g;E=I(E,k.j(g));var N=((0<E.g.length?E.g[0]:E.h)>>>0).toString(w);if(E=k,T(E))return N+R;for(;6>N.length;)N="0"+N;R=N+R}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function T(w){if(w.h!=0)return!1;for(var g=0;g<w.g.length;g++)if(w.g[g]!=0)return!1;return!0}function A(w){return w.h==-1}t.l=function(w){return w=I(this,w),A(w)?-1:T(w)?0:1};function b(w){for(var g=w.g.length,E=[],R=0;R<g;R++)E[R]=~w.g[R];return new o(E,~w.h).add(m)}t.abs=function(){return A(this)?b(this):this},t.add=function(w){for(var g=Math.max(this.g.length,w.g.length),E=[],R=0,k=0;k<=g;k++){var N=R+(this.i(k)&65535)+(w.i(k)&65535),P=(N>>>16)+(this.i(k)>>>16)+(w.i(k)>>>16);R=P>>>16,N&=65535,P&=65535,E[k]=P<<16|N}return new o(E,E[E.length-1]&-2147483648?-1:0)};function I(w,g){return w.add(b(g))}t.j=function(w){if(T(this)||T(w))return f;if(A(this))return A(w)?b(this).j(b(w)):b(b(this).j(w));if(A(w))return b(this.j(b(w)));if(0>this.l(_)&&0>w.l(_))return c(this.m()*w.m());for(var g=this.g.length+w.g.length,E=[],R=0;R<2*g;R++)E[R]=0;for(R=0;R<this.g.length;R++)for(var k=0;k<w.g.length;k++){var N=this.i(R)>>>16,P=this.i(R)&65535,me=w.i(k)>>>16,ot=w.i(k)&65535;E[2*R+2*k]+=P*ot,v(E,2*R+2*k),E[2*R+2*k+1]+=N*ot,v(E,2*R+2*k+1),E[2*R+2*k+1]+=P*me,v(E,2*R+2*k+1),E[2*R+2*k+2]+=N*me,v(E,2*R+2*k+2)}for(R=0;R<g;R++)E[R]=E[2*R+1]<<16|E[2*R];for(R=g;R<2*g;R++)E[R]=0;return new o(E,0)};function v(w,g){for(;(w[g]&65535)!=w[g];)w[g+1]+=w[g]>>>16,w[g]&=65535,g++}function S(w,g){this.g=w,this.h=g}function L(w,g){if(T(g))throw Error("division by zero");if(T(w))return new S(f,f);if(A(w))return g=L(b(w),g),new S(b(g.g),b(g.h));if(A(g))return g=L(w,b(g)),new S(b(g.g),g.h);if(30<w.g.length){if(A(w)||A(g))throw Error("slowDivide_ only works with positive integers.");for(var E=m,R=g;0>=R.l(w);)E=F(E),R=F(R);var k=x(E,1),N=x(R,1);for(R=x(R,2),E=x(E,2);!T(R);){var P=N.add(R);0>=P.l(w)&&(k=k.add(E),N=P),R=x(R,1),E=x(E,1)}return g=I(w,k.j(g)),new S(k,g)}for(k=f;0<=w.l(g);){for(E=Math.max(1,Math.floor(w.m()/g.m())),R=Math.ceil(Math.log(E)/Math.LN2),R=48>=R?1:Math.pow(2,R-48),N=c(E),P=N.j(g);A(P)||0<P.l(w);)E-=R,N=c(E),P=N.j(g);T(N)&&(N=m),k=k.add(N),w=I(w,P)}return new S(k,w)}t.A=function(w){return L(this,w).h},t.and=function(w){for(var g=Math.max(this.g.length,w.g.length),E=[],R=0;R<g;R++)E[R]=this.i(R)&w.i(R);return new o(E,this.h&w.h)},t.or=function(w){for(var g=Math.max(this.g.length,w.g.length),E=[],R=0;R<g;R++)E[R]=this.i(R)|w.i(R);return new o(E,this.h|w.h)},t.xor=function(w){for(var g=Math.max(this.g.length,w.g.length),E=[],R=0;R<g;R++)E[R]=this.i(R)^w.i(R);return new o(E,this.h^w.h)};function F(w){for(var g=w.g.length+1,E=[],R=0;R<g;R++)E[R]=w.i(R)<<1|w.i(R-1)>>>31;return new o(E,w.h)}function x(w,g){var E=g>>5;g%=32;for(var R=w.g.length-E,k=[],N=0;N<R;N++)k[N]=0<g?w.i(N+E)>>>g|w.i(N+E+1)<<32-g:w.i(N+E);return new o(k,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,AT=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,is=o}).apply(typeof x_<"u"?x_:typeof self<"u"?self:typeof window<"u"?window:{});var Nu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var PT,xT,Oa,kT,oc,fp,CT,bT,NT;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,p){return a==Array.prototype||a==Object.prototype||(a[h]=p.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Nu=="object"&&Nu];for(var h=0;h<a.length;++h){var p=a[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var p=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var O=a[y];if(!(O in p))break e;p=p[O]}a=a[a.length-1],y=p[a],h=h(y),h!=y&&h!=null&&e(p,a,{configurable:!0,writable:!0,value:h})}}function s(a,h){a instanceof String&&(a+="");var p=0,y=!1,O={next:function(){if(!y&&p<a.length){var U=p++;return{value:h(U,a[U]),done:!1}}return y=!0,{done:!0,value:void 0}}};return O[Symbol.iterator]=function(){return O},O}i("Array.prototype.values",function(a){return a||function(){return s(this,function(h,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,p){return a.call.apply(a.bind,arguments)}function f(a,h,p){if(!a)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var O=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(O,y),a.apply(h,O)}}return function(){return a.apply(h,arguments)}}function m(a,h,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:f,m.apply(null,arguments)}function _(a,h){var p=Array.prototype.slice.call(arguments,1);return function(){var y=p.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function T(a,h){function p(){}p.prototype=h.prototype,a.aa=h.prototype,a.prototype=new p,a.prototype.constructor=a,a.Qb=function(y,O,U){for(var K=Array(arguments.length-2),Me=2;Me<arguments.length;Me++)K[Me-2]=arguments[Me];return h.prototype[O].apply(y,K)}}function A(a){const h=a.length;if(0<h){const p=Array(h);for(let y=0;y<h;y++)p[y]=a[y];return p}return[]}function b(a,h){for(let p=1;p<arguments.length;p++){const y=arguments[p];if(u(y)){const O=a.length||0,U=y.length||0;a.length=O+U;for(let K=0;K<U;K++)a[O+K]=y[K]}else a.push(y)}}class I{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function v(a){return/^[\s\xa0]*$/.test(a)}function S(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function L(a){return L[" "](a),a}L[" "]=function(){};var F=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function x(a,h,p){for(const y in a)h.call(p,a[y],y,a)}function w(a,h){for(const p in a)h.call(void 0,a[p],p,a)}function g(a){const h={};for(const p in a)h[p]=a[p];return h}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function R(a,h){let p,y;for(let O=1;O<arguments.length;O++){y=arguments[O];for(p in y)a[p]=y[p];for(let U=0;U<E.length;U++)p=E[U],Object.prototype.hasOwnProperty.call(y,p)&&(a[p]=y[p])}}function k(a){var h=1;a=a.split(":");const p=[];for(;0<h&&a.length;)p.push(a.shift()),h--;return a.length&&p.push(a.join(":")),p}function N(a){l.setTimeout(()=>{throw a},0)}function P(){var a=Q;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class me{constructor(){this.h=this.g=null}add(h,p){const y=ot.get();y.set(h,p),this.h?this.h.next=y:this.g=y,this.h=y}}var ot=new I(()=>new Z,a=>a.reset());class Z{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let Y,W=!1,Q=new me,ne=()=>{const a=l.Promise.resolve(void 0);Y=()=>{a.then(ye)}};var ye=()=>{for(var a;a=P();){try{a.h.call(a.g)}catch(p){N(p)}var h=ot;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}W=!1};function fe(){this.s=this.s,this.C=this.C}fe.prototype.s=!1,fe.prototype.ma=function(){this.s||(this.s=!0,this.N())},fe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ke(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}ke.prototype.h=function(){this.defaultPrevented=!0};var qe=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};l.addEventListener("test",p,h),l.removeEventListener("test",p,h)}catch{}return a}();function et(a,h){if(ke.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var p=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(F){e:{try{L(h.nodeName);var O=!0;break e}catch{}O=!1}O||(h=null)}}else p=="mouseover"?h=a.fromElement:p=="mouseout"&&(h=a.toElement);this.relatedTarget=h,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Ke[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&et.aa.h.call(this)}}T(et,ke);var Ke={2:"touch",3:"pen",4:"mouse"};et.prototype.h=function(){et.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Lt="closure_listenable_"+(1e6*Math.random()|0),Cn=0;function bn(a,h,p,y,O){this.listener=a,this.proxy=null,this.src=h,this.type=p,this.capture=!!y,this.ha=O,this.key=++Cn,this.da=this.fa=!1}function Gn(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Nn(a){this.src=a,this.g={},this.h=0}Nn.prototype.add=function(a,h,p,y,O){var U=a.toString();a=this.g[U],a||(a=this.g[U]=[],this.h++);var K=Qn(a,h,y,O);return-1<K?(h=a[K],p||(h.fa=!1)):(h=new bn(h,this.src,U,!!y,O),h.fa=p,a.push(h)),h};function De(a,h){var p=h.type;if(p in a.g){var y=a.g[p],O=Array.prototype.indexOf.call(y,h,void 0),U;(U=0<=O)&&Array.prototype.splice.call(y,O,1),U&&(Gn(h),a.g[p].length==0&&(delete a.g[p],a.h--))}}function Qn(a,h,p,y){for(var O=0;O<a.length;++O){var U=a[O];if(!U.da&&U.listener==h&&U.capture==!!p&&U.ha==y)return O}return-1}var xs="closure_lm_"+(1e6*Math.random()|0),Yo={};function Yn(a,h,p,y,O){if(Array.isArray(h)){for(var U=0;U<h.length;U++)Yn(a,h[U],p,y,O);return null}return p=Br(p),a&&a[Lt]?a.K(h,p,c(y)?!!y.capture:!!y,O):Yh(a,h,p,!1,y,O)}function Yh(a,h,p,y,O,U){if(!h)throw Error("Invalid event type");var K=c(O)?!!O.capture:!!O,Me=Zo(a);if(Me||(a[xs]=Me=new Nn(a)),p=Me.add(h,p,y,K,U),p.proxy)return p;if(y=Xh(),p.proxy=y,y.src=a,y.listener=p,a.addEventListener)qe||(O=K),O===void 0&&(O=!1),a.addEventListener(h.toString(),y,O);else if(a.attachEvent)a.attachEvent(Jl(h.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return p}function Xh(){function a(p){return h.call(a.src,a.listener,p)}const h=Jh;return a}function Xo(a,h,p,y,O){if(Array.isArray(h))for(var U=0;U<h.length;U++)Xo(a,h[U],p,y,O);else y=c(y)?!!y.capture:!!y,p=Br(p),a&&a[Lt]?(a=a.i,h=String(h).toString(),h in a.g&&(U=a.g[h],p=Qn(U,p,y,O),-1<p&&(Gn(U[p]),Array.prototype.splice.call(U,p,1),U.length==0&&(delete a.g[h],a.h--)))):a&&(a=Zo(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Qn(h,p,y,O)),(p=-1<a?h[a]:null)&&Jo(p))}function Jo(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[Lt])De(h.i,a);else{var p=a.type,y=a.proxy;h.removeEventListener?h.removeEventListener(p,y,a.capture):h.detachEvent?h.detachEvent(Jl(p),y):h.addListener&&h.removeListener&&h.removeListener(y),(p=Zo(h))?(De(p,a),p.h==0&&(p.src=null,h[xs]=null)):Gn(a)}}}function Jl(a){return a in Yo?Yo[a]:Yo[a]="on"+a}function Jh(a,h){if(a.da)a=!0;else{h=new et(h,this);var p=a.listener,y=a.ha||a.src;a.fa&&Jo(a),a=p.call(y,h)}return a}function Zo(a){return a=a[xs],a instanceof Nn?a:null}var gr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Br(a){return typeof a=="function"?a:(a[gr]||(a[gr]=function(h){return a.handleEvent(h)}),a[gr])}function mt(){fe.call(this),this.i=new Nn(this),this.M=this,this.F=null}T(mt,fe),mt.prototype[Lt]=!0,mt.prototype.removeEventListener=function(a,h,p,y){Xo(this,a,h,p,y)};function gt(a,h){var p,y=a.F;if(y)for(p=[];y;y=y.F)p.push(y);if(a=a.M,y=h.type||h,typeof h=="string")h=new ke(h,a);else if(h instanceof ke)h.target=h.target||a;else{var O=h;h=new ke(y,a),R(h,O)}if(O=!0,p)for(var U=p.length-1;0<=U;U--){var K=h.g=p[U];O=an(K,y,!0,h)&&O}if(K=h.g=a,O=an(K,y,!0,h)&&O,O=an(K,y,!1,h)&&O,p)for(U=0;U<p.length;U++)K=h.g=p[U],O=an(K,y,!1,h)&&O}mt.prototype.N=function(){if(mt.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var p=a.g[h],y=0;y<p.length;y++)Gn(p[y]);delete a.g[h],a.h--}}this.F=null},mt.prototype.K=function(a,h,p,y){return this.i.add(String(a),h,!1,p,y)},mt.prototype.L=function(a,h,p,y){return this.i.add(String(a),h,!0,p,y)};function an(a,h,p,y){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var O=!0,U=0;U<h.length;++U){var K=h[U];if(K&&!K.da&&K.capture==p){var Me=K.listener,Rt=K.ha||K.src;K.fa&&De(a.i,K),O=Me.call(Rt,y)!==!1&&O}}return O&&!y.defaultPrevented}function wn(a,h,p){if(typeof a=="function")p&&(a=m(a,p));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function ea(a){a.g=wn(()=>{a.g=null,a.i&&(a.i=!1,ea(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class ks extends fe{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:ea(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Vi(a){fe.call(this),this.h=a,this.g={}}T(Vi,fe);var Dn=[];function ta(a){x(a.g,function(h,p){this.g.hasOwnProperty(p)&&Jo(h)},a),a.g={}}Vi.prototype.N=function(){Vi.aa.N.call(this),ta(this)},Vi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Cs=l.JSON.stringify,Zl=l.JSON.parse,Zh=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function bs(){}bs.prototype.h=null;function Ui(a){return a.h||(a.h=a.i())}function na(){}var yr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Hr(){ke.call(this,"d")}T(Hr,ke);function Fi(){ke.call(this,"c")}T(Fi,ke);var vr={},ra=null;function Ns(){return ra=ra||new mt}vr.La="serverreachability";function ia(a){ke.call(this,vr.La,a)}T(ia,ke);function Xn(a){const h=Ns();gt(h,new ia(h))}vr.STAT_EVENT="statevent";function ji(a,h){ke.call(this,vr.STAT_EVENT,a),this.stat=h}T(ji,ke);function St(a){const h=Ns();gt(h,new ji(h,a))}vr.Ma="timingevent";function eu(a,h){ke.call(this,vr.Ma,a),this.size=h}T(eu,ke);function C(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function D(){this.g=!0}D.prototype.xa=function(){this.g=!1};function M(a,h,p,y,O,U){a.info(function(){if(a.g)if(U)for(var K="",Me=U.split("&"),Rt=0;Rt<Me.length;Rt++){var Pe=Me[Rt].split("=");if(1<Pe.length){var Vt=Pe[0];Pe=Pe[1];var Ut=Vt.split("_");K=2<=Ut.length&&Ut[1]=="type"?K+(Vt+"="+Pe+"&"):K+(Vt+"=redacted&")}}else K=null;else K=U;return"XMLHTTP REQ ("+y+") [attempt "+O+"]: "+h+`
`+p+`
`+K})}function z(a,h,p,y,O,U,K){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+O+"]: "+h+`
`+p+`
`+U+" "+K})}function G(a,h,p,y){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+ae(a,p)+(y?" "+y:"")})}function te(a,h){a.info(function(){return"TIMEOUT: "+h})}D.prototype.info=function(){};function ae(a,h){if(!a.g)return h;if(!h)return null;try{var p=JSON.parse(h);if(p){for(a=0;a<p.length;a++)if(Array.isArray(p[a])){var y=p[a];if(!(2>y.length)){var O=y[1];if(Array.isArray(O)&&!(1>O.length)){var U=O[0];if(U!="noop"&&U!="stop"&&U!="close")for(var K=1;K<O.length;K++)O[K]=""}}}}return Cs(p)}catch{return h}}var q={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ce={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},re;function ie(){}T(ie,bs),ie.prototype.g=function(){return new XMLHttpRequest},ie.prototype.i=function(){return{}},re=new ie;function _e(a,h,p,y){this.j=a,this.i=h,this.l=p,this.R=y||1,this.U=new Vi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ae}function Ae(){this.i=null,this.g="",this.h=!1}var Ce={},Ie={};function at(a,h,p){a.L=1,a.v=iu(wr(h)),a.m=p,a.P=!0,Ge(a,null)}function Ge(a,h){a.F=Date.now(),Ln(a),a.A=wr(a.v);var p=a.A,y=a.R;Array.isArray(y)||(y=[String(y)]),Fg(p.i,"t",y),a.C=0,p=a.j.J,a.h=new Ae,a.g=ry(a.j,p?h:null,!a.m),0<a.O&&(a.M=new ks(m(a.Y,a,a.g),a.O)),h=a.U,p=a.g,y=a.ca;var O="readystatechange";Array.isArray(O)||(O&&(Dn[0]=O.toString()),O=Dn);for(var U=0;U<O.length;U++){var K=Yn(p,O[U],y||h.handleEvent,!1,h.h||h);if(!K)break;h.g[K.key]=K}h=a.H?g(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Xn(),M(a.i,a.u,a.A,a.l,a.R,a.m)}_e.prototype.ca=function(a){a=a.target;const h=this.M;h&&Er(a)==3?h.j():this.Y(a)},_e.prototype.Y=function(a){try{if(a==this.g)e:{const Ut=Er(this.g);var h=this.g.Ba();const Ms=this.g.Z();if(!(3>Ut)&&(Ut!=3||this.g&&(this.h.h||this.g.oa()||qg(this.g)))){this.J||Ut!=4||h==7||(h==8||0>=Ms?Xn(3):Xn(2)),Zn(this);var p=this.g.Z();this.X=p;t:if(Wr(this)){var y=qg(this.g);a="";var O=y.length,U=Er(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){En(this),Ot(this);var K="";break t}this.h.i=new l.TextDecoder}for(h=0;h<O;h++)this.h.h=!0,a+=this.h.i.decode(y[h],{stream:!(U&&h==O-1)});y.length=0,this.h.g+=a,this.C=0,K=this.h.g}else K=this.g.oa();if(this.o=p==200,z(this.i,this.u,this.A,this.l,this.R,Ut,p),this.o){if(this.T&&!this.K){t:{if(this.g){var Me,Rt=this.g;if((Me=Rt.g?Rt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(Me)){var Pe=Me;break t}}Pe=null}if(p=Pe)G(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,qr(this,p);else{this.o=!1,this.s=3,St(12),En(this),Ot(this);break e}}if(this.P){p=!0;let On;for(;!this.J&&this.C<K.length;)if(On=Jn(this,K),On==Ie){Ut==4&&(this.s=4,St(14),p=!1),G(this.i,this.l,null,"[Incomplete Response]");break}else if(On==Ce){this.s=4,St(15),G(this.i,this.l,K,"[Invalid Chunk]"),p=!1;break}else G(this.i,this.l,On,null),qr(this,On);if(Wr(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ut!=4||K.length!=0||this.h.h||(this.s=1,St(16),p=!1),this.o=this.o&&p,!p)G(this.i,this.l,K,"[Invalid Chunked Response]"),En(this),Ot(this);else if(0<K.length&&!this.W){this.W=!0;var Vt=this.j;Vt.g==this&&Vt.ba&&!Vt.M&&(Vt.j.info("Great, no buffering proxy detected. Bytes received: "+K.length),rd(Vt),Vt.M=!0,St(11))}}else G(this.i,this.l,K,null),qr(this,K);Ut==4&&En(this),this.o&&!this.J&&(Ut==4?Zg(this.j,this):(this.o=!1,Ln(this)))}else US(this.g),p==400&&0<K.indexOf("Unknown SID")?(this.s=3,St(12)):(this.s=0,St(13)),En(this),Ot(this)}}}catch{}finally{}};function Wr(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Jn(a,h){var p=a.C,y=h.indexOf(`
`,p);return y==-1?Ie:(p=Number(h.substring(p,y)),isNaN(p)?Ce:(y+=1,y+p>h.length?Ie:(h=h.slice(y,y+p),a.C=y+p,h)))}_e.prototype.cancel=function(){this.J=!0,En(this)};function Ln(a){a.S=Date.now()+a.I,_r(a,a.I)}function _r(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=C(m(a.ba,a),h)}function Zn(a){a.B&&(l.clearTimeout(a.B),a.B=null)}_e.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(te(this.i,this.A),this.L!=2&&(Xn(),St(17)),En(this),this.s=2,Ot(this)):_r(this,this.S-a)};function Ot(a){a.j.G==0||a.J||Zg(a.j,a)}function En(a){Zn(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,ta(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function qr(a,h){try{var p=a.j;if(p.G!=0&&(p.g==a||Le(p.h,a))){if(!a.K&&Le(p.h,a)&&p.G==3){try{var y=p.Da.g.parse(h)}catch{y=null}if(Array.isArray(y)&&y.length==3){var O=y;if(O[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<a.F)uu(p),au(p);else break e;nd(p),St(18)}}else p.za=O[1],0<p.za-p.T&&37500>O[2]&&p.F&&p.v==0&&!p.C&&(p.C=C(m(p.Za,p),6e3));if(1>=Mt(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else $i(p,11)}else if((a.K||p.g==a)&&uu(p),!v(h))for(O=p.Da.g.parse(h),h=0;h<O.length;h++){let Pe=O[h];if(p.T=Pe[0],Pe=Pe[1],p.G==2)if(Pe[0]=="c"){p.K=Pe[1],p.ia=Pe[2];const Vt=Pe[3];Vt!=null&&(p.la=Vt,p.j.info("VER="+p.la));const Ut=Pe[4];Ut!=null&&(p.Aa=Ut,p.j.info("SVER="+p.Aa));const Ms=Pe[5];Ms!=null&&typeof Ms=="number"&&0<Ms&&(y=1.5*Ms,p.L=y,p.j.info("backChannelRequestTimeoutMs_="+y)),y=p;const On=a.g;if(On){const hu=On.g?On.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(hu){var U=y.h;U.g||hu.indexOf("spdy")==-1&&hu.indexOf("quic")==-1&&hu.indexOf("h2")==-1||(U.j=U.l,U.g=new Set,U.h&&(ln(U,U.h),U.h=null))}if(y.D){const id=On.g?On.g.getResponseHeader("X-HTTP-Session-Id"):null;id&&(y.ya=id,je(y.I,y.D,id))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-a.F,p.j.info("Handshake RTT: "+p.R+"ms")),y=p;var K=a;if(y.qa=ny(y,y.J?y.ia:null,y.W),K.K){sa(y.h,K);var Me=K,Rt=y.L;Rt&&(Me.I=Rt),Me.B&&(Zn(Me),Ln(Me)),y.g=K}else Xg(y);0<p.i.length&&lu(p)}else Pe[0]!="stop"&&Pe[0]!="close"||$i(p,7);else p.G==3&&(Pe[0]=="stop"||Pe[0]=="close"?Pe[0]=="stop"?$i(p,7):td(p):Pe[0]!="noop"&&p.l&&p.l.ta(Pe),p.v=0)}}Xn(4)}catch{}}var Ds=class{constructor(a,h){this.g=a,this.map=h}};function pe(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Fe(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Mt(a){return a.h?1:a.g?a.g.size:0}function Le(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function ln(a,h){a.g?a.g.add(h):a.h=h}function sa(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}pe.prototype.cancel=function(){if(this.i=tu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function tu(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const p of a.g.values())h=h.concat(p.D);return h}return A(a.i)}function IS(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],p=a.length,y=0;y<p;y++)h.push(a[y]);return h}h=[],p=0;for(y in a)h[p++]=a[y];return h}function SS(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var p=0;p<a;p++)h.push(p);return h}h=[],p=0;for(const y in a)h[p++]=y;return h}}}function Dg(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var p=SS(a),y=IS(a),O=y.length,U=0;U<O;U++)h.call(void 0,y[U],p&&p[U],a)}var Lg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function RS(a,h){if(a){a=a.split("&");for(var p=0;p<a.length;p++){var y=a[p].indexOf("="),O=null;if(0<=y){var U=a[p].substring(0,y);O=a[p].substring(y+1)}else U=a[p];h(U,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function zi(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof zi){this.h=a.h,nu(this,a.j),this.o=a.o,this.g=a.g,ru(this,a.s),this.l=a.l;var h=a.i,p=new la;p.i=h.i,h.g&&(p.g=new Map(h.g),p.h=h.h),Og(this,p),this.m=a.m}else a&&(h=String(a).match(Lg))?(this.h=!1,nu(this,h[1]||"",!0),this.o=oa(h[2]||""),this.g=oa(h[3]||"",!0),ru(this,h[4]),this.l=oa(h[5]||"",!0),Og(this,h[6]||"",!0),this.m=oa(h[7]||"")):(this.h=!1,this.i=new la(null,this.h))}zi.prototype.toString=function(){var a=[],h=this.j;h&&a.push(aa(h,Mg,!0),":");var p=this.g;return(p||h=="file")&&(a.push("//"),(h=this.o)&&a.push(aa(h,Mg,!0),"@"),a.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&a.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(aa(p,p.charAt(0)=="/"?xS:PS,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",aa(p,CS)),a.join("")};function wr(a){return new zi(a)}function nu(a,h,p){a.j=p?oa(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function ru(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Og(a,h,p){h instanceof la?(a.i=h,bS(a.i,a.h)):(p||(h=aa(h,kS)),a.i=new la(h,a.h))}function je(a,h,p){a.i.set(h,p)}function iu(a){return je(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function oa(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function aa(a,h,p){return typeof a=="string"?(a=encodeURI(a).replace(h,AS),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function AS(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Mg=/[#\/\?@]/g,PS=/[#\?:]/g,xS=/[#\?]/g,kS=/[#\?@]/g,CS=/#/g;function la(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Kr(a){a.g||(a.g=new Map,a.h=0,a.i&&RS(a.i,function(h,p){a.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=la.prototype,t.add=function(a,h){Kr(this),this.i=null,a=Ls(this,a);var p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(h),this.h+=1,this};function Vg(a,h){Kr(a),h=Ls(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Ug(a,h){return Kr(a),h=Ls(a,h),a.g.has(h)}t.forEach=function(a,h){Kr(this),this.g.forEach(function(p,y){p.forEach(function(O){a.call(h,O,y,this)},this)},this)},t.na=function(){Kr(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),p=[];for(let y=0;y<h.length;y++){const O=a[y];for(let U=0;U<O.length;U++)p.push(h[y])}return p},t.V=function(a){Kr(this);let h=[];if(typeof a=="string")Ug(this,a)&&(h=h.concat(this.g.get(Ls(this,a))));else{a=Array.from(this.g.values());for(let p=0;p<a.length;p++)h=h.concat(a[p])}return h},t.set=function(a,h){return Kr(this),this.i=null,a=Ls(this,a),Ug(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Fg(a,h,p){Vg(a,h),0<p.length&&(a.i=null,a.g.set(Ls(a,h),A(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var p=0;p<h.length;p++){var y=h[p];const U=encodeURIComponent(String(y)),K=this.V(y);for(y=0;y<K.length;y++){var O=U;K[y]!==""&&(O+="="+encodeURIComponent(String(K[y]))),a.push(O)}}return this.i=a.join("&")};function Ls(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function bS(a,h){h&&!a.j&&(Kr(a),a.i=null,a.g.forEach(function(p,y){var O=y.toLowerCase();y!=O&&(Vg(this,y),Fg(this,O,p))},a)),a.j=h}function NS(a,h){const p=new D;if(l.Image){const y=new Image;y.onload=_(Gr,p,"TestLoadImage: loaded",!0,h,y),y.onerror=_(Gr,p,"TestLoadImage: error",!1,h,y),y.onabort=_(Gr,p,"TestLoadImage: abort",!1,h,y),y.ontimeout=_(Gr,p,"TestLoadImage: timeout",!1,h,y),l.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else h(!1)}function DS(a,h){const p=new D,y=new AbortController,O=setTimeout(()=>{y.abort(),Gr(p,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:y.signal}).then(U=>{clearTimeout(O),U.ok?Gr(p,"TestPingServer: ok",!0,h):Gr(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(O),Gr(p,"TestPingServer: error",!1,h)})}function Gr(a,h,p,y,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),y(p)}catch{}}function LS(){this.g=new Zh}function OS(a,h,p){const y=p||"";try{Dg(a,function(O,U){let K=O;c(O)&&(K=Cs(O)),h.push(y+U+"="+encodeURIComponent(K))})}catch(O){throw h.push(y+"type="+encodeURIComponent("_badmap")),O}}function ua(a){this.l=a.Ub||null,this.j=a.eb||!1}T(ua,bs),ua.prototype.g=function(){return new su(this.l,this.j)},ua.prototype.i=function(a){return function(){return a}}({});function su(a,h){mt.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}T(su,mt),t=su.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,ha(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ca(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ha(this)),this.g&&(this.readyState=3,ha(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;jg(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function jg(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?ca(this):ha(this),this.readyState==3&&jg(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,ca(this))},t.Qa=function(a){this.g&&(this.response=a,ca(this))},t.ga=function(){this.g&&ca(this)};function ca(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ha(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=h.next();return a.join(`\r
`)};function ha(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(su.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function zg(a){let h="";return x(a,function(p,y){h+=y,h+=":",h+=p,h+=`\r
`}),h}function ed(a,h,p){e:{for(y in p){var y=!1;break e}y=!0}y||(p=zg(p),typeof a=="string"?p!=null&&encodeURIComponent(String(p)):je(a,h,p))}function tt(a){mt.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}T(tt,mt);var MS=/^https?$/i,VS=["POST","PUT"];t=tt.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,p,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():re.g(),this.v=this.o?Ui(this.o):Ui(re),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(U){$g(this,U);return}if(a=p||"",p=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var O in y)p.set(O,y[O]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const U of y.keys())p.set(U,y.get(U));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(p.keys()).find(U=>U.toLowerCase()=="content-type"),O=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(VS,h,void 0))||y||O||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[U,K]of p)this.g.setRequestHeader(U,K);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Wg(this),this.u=!0,this.g.send(a),this.u=!1}catch(U){$g(this,U)}};function $g(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Bg(a),ou(a)}function Bg(a){a.A||(a.A=!0,gt(a,"complete"),gt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,gt(this,"complete"),gt(this,"abort"),ou(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ou(this,!0)),tt.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Hg(this):this.bb())},t.bb=function(){Hg(this)};function Hg(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Er(a)!=4||a.Z()!=2)){if(a.u&&Er(a)==4)wn(a.Ea,0,a);else if(gt(a,"readystatechange"),Er(a)==4){a.h=!1;try{const K=a.Z();e:switch(K){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var y;if(y=K===0){var O=String(a.D).match(Lg)[1]||null;!O&&l.self&&l.self.location&&(O=l.self.location.protocol.slice(0,-1)),y=!MS.test(O?O.toLowerCase():"")}p=y}if(p)gt(a,"complete"),gt(a,"success");else{a.m=6;try{var U=2<Er(a)?a.g.statusText:""}catch{U=""}a.l=U+" ["+a.Z()+"]",Bg(a)}}finally{ou(a)}}}}function ou(a,h){if(a.g){Wg(a);const p=a.g,y=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||gt(a,"ready");try{p.onreadystatechange=y}catch{}}}function Wg(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Er(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Er(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Zl(h)}};function qg(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function US(a){const h={};a=(a.g&&2<=Er(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(v(a[y]))continue;var p=k(a[y]);const O=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const U=h[O]||[];h[O]=U,U.push(p)}w(h,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function da(a,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||h}function Kg(a){this.Aa=0,this.i=[],this.j=new D,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=da("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=da("baseRetryDelayMs",5e3,a),this.cb=da("retryDelaySeedMs",1e4,a),this.Wa=da("forwardChannelMaxRetries",2,a),this.wa=da("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new pe(a&&a.concurrentRequestLimit),this.Da=new LS,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Kg.prototype,t.la=8,t.G=1,t.connect=function(a,h,p,y){St(0),this.W=a,this.H=h||{},p&&y!==void 0&&(this.H.OSID=p,this.H.OAID=y),this.F=this.X,this.I=ny(this,null,this.W),lu(this)};function td(a){if(Gg(a),a.G==3){var h=a.U++,p=wr(a.I);if(je(p,"SID",a.K),je(p,"RID",h),je(p,"TYPE","terminate"),fa(a,p),h=new _e(a,a.j,h),h.L=2,h.v=iu(wr(p)),p=!1,l.navigator&&l.navigator.sendBeacon)try{p=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!p&&l.Image&&(new Image().src=h.v,p=!0),p||(h.g=ry(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Ln(h)}ty(a)}function au(a){a.g&&(rd(a),a.g.cancel(),a.g=null)}function Gg(a){au(a),a.u&&(l.clearTimeout(a.u),a.u=null),uu(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function lu(a){if(!Fe(a.h)&&!a.s){a.s=!0;var h=a.Ga;Y||ne(),W||(Y(),W=!0),Q.add(h,a),a.B=0}}function FS(a,h){return Mt(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=C(m(a.Ga,a,h),ey(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const O=new _e(this,this.j,a);let U=this.o;if(this.S&&(U?(U=g(U),R(U,this.S)):U=this.S),this.m!==null||this.O||(O.H=U,U=null),this.P)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var y=this.i[p];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(h+=y,4096<h){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=Yg(this,O,h),p=wr(this.I),je(p,"RID",a),je(p,"CVER",22),this.D&&je(p,"X-HTTP-Session-Id",this.D),fa(this,p),U&&(this.O?h="headers="+encodeURIComponent(String(zg(U)))+"&"+h:this.m&&ed(p,this.m,U)),ln(this.h,O),this.Ua&&je(p,"TYPE","init"),this.P?(je(p,"$req",h),je(p,"SID","null"),O.T=!0,at(O,p,null)):at(O,p,h),this.G=2}}else this.G==3&&(a?Qg(this,a):this.i.length==0||Fe(this.h)||Qg(this))};function Qg(a,h){var p;h?p=h.l:p=a.U++;const y=wr(a.I);je(y,"SID",a.K),je(y,"RID",p),je(y,"AID",a.T),fa(a,y),a.m&&a.o&&ed(y,a.m,a.o),p=new _e(a,a.j,p,a.B+1),a.m===null&&(p.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Yg(a,p,1e3),p.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),ln(a.h,p),at(p,y,h)}function fa(a,h){a.H&&x(a.H,function(p,y){je(h,y,p)}),a.l&&Dg({},function(p,y){je(h,y,p)})}function Yg(a,h,p){p=Math.min(a.i.length,p);var y=a.l?m(a.l.Na,a.l,a):null;e:{var O=a.i;let U=-1;for(;;){const K=["count="+p];U==-1?0<p?(U=O[0].g,K.push("ofs="+U)):U=0:K.push("ofs="+U);let Me=!0;for(let Rt=0;Rt<p;Rt++){let Pe=O[Rt].g;const Vt=O[Rt].map;if(Pe-=U,0>Pe)U=Math.max(0,O[Rt].g-100),Me=!1;else try{OS(Vt,K,"req"+Pe+"_")}catch{y&&y(Vt)}}if(Me){y=K.join("&");break e}}}return a=a.i.splice(0,p),h.D=a,y}function Xg(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;Y||ne(),W||(Y(),W=!0),Q.add(h,a),a.v=0}}function nd(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=C(m(a.Fa,a),ey(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Jg(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=C(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,St(10),au(this),Jg(this))};function rd(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Jg(a){a.g=new _e(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=wr(a.qa);je(h,"RID","rpc"),je(h,"SID",a.K),je(h,"AID",a.T),je(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&je(h,"TO",a.ja),je(h,"TYPE","xmlhttp"),fa(a,h),a.m&&a.o&&ed(h,a.m,a.o),a.L&&(a.g.I=a.L);var p=a.g;a=a.ia,p.L=1,p.v=iu(wr(h)),p.m=null,p.P=!0,Ge(p,a)}t.Za=function(){this.C!=null&&(this.C=null,au(this),nd(this),St(19))};function uu(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Zg(a,h){var p=null;if(a.g==h){uu(a),rd(a),a.g=null;var y=2}else if(Le(a.h,h))p=h.D,sa(a.h,h),y=1;else return;if(a.G!=0){if(h.o)if(y==1){p=h.m?h.m.length:0,h=Date.now()-h.F;var O=a.B;y=Ns(),gt(y,new eu(y,p)),lu(a)}else Xg(a);else if(O=h.s,O==3||O==0&&0<h.X||!(y==1&&FS(a,h)||y==2&&nd(a)))switch(p&&0<p.length&&(h=a.h,h.i=h.i.concat(p)),O){case 1:$i(a,5);break;case 4:$i(a,10);break;case 3:$i(a,6);break;default:$i(a,2)}}}function ey(a,h){let p=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(p*=2),p*h}function $i(a,h){if(a.j.info("Error code "+h),h==2){var p=m(a.fb,a),y=a.Xa;const O=!y;y=new zi(y||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||nu(y,"https"),iu(y),O?NS(y.toString(),p):DS(y.toString(),p)}else St(2);a.G=0,a.l&&a.l.sa(h),ty(a),Gg(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),St(2)):(this.j.info("Failed to ping google.com"),St(1))};function ty(a){if(a.G=0,a.ka=[],a.l){const h=tu(a.h);(h.length!=0||a.i.length!=0)&&(b(a.ka,h),b(a.ka,a.i),a.h.i.length=0,A(a.i),a.i.length=0),a.l.ra()}}function ny(a,h,p){var y=p instanceof zi?wr(p):new zi(p);if(y.g!="")h&&(y.g=h+"."+y.g),ru(y,y.s);else{var O=l.location;y=O.protocol,h=h?h+"."+O.hostname:O.hostname,O=+O.port;var U=new zi(null);y&&nu(U,y),h&&(U.g=h),O&&ru(U,O),p&&(U.l=p),y=U}return p=a.D,h=a.ya,p&&h&&je(y,p,h),je(y,"VER",a.la),fa(a,y),y}function ry(a,h,p){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new tt(new ua({eb:p})):new tt(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function iy(){}t=iy.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function cu(){}cu.prototype.g=function(a,h){return new un(a,h)};function un(a,h){mt.call(this),this.g=new Kg(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!v(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!v(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Os(this)}T(un,mt),un.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},un.prototype.close=function(){td(this.g)},un.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.u&&(p={},p.__data__=Cs(a),a=p);h.i.push(new Ds(h.Ya++,a)),h.G==3&&lu(h)},un.prototype.N=function(){this.g.l=null,delete this.j,td(this.g),delete this.g,un.aa.N.call(this)};function sy(a){Hr.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const p in h){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}T(sy,Hr);function oy(){Fi.call(this),this.status=1}T(oy,Fi);function Os(a){this.g=a}T(Os,iy),Os.prototype.ua=function(){gt(this.g,"a")},Os.prototype.ta=function(a){gt(this.g,new sy(a))},Os.prototype.sa=function(a){gt(this.g,new oy)},Os.prototype.ra=function(){gt(this.g,"b")},cu.prototype.createWebChannel=cu.prototype.g,un.prototype.send=un.prototype.o,un.prototype.open=un.prototype.m,un.prototype.close=un.prototype.close,NT=function(){return new cu},bT=function(){return Ns()},CT=vr,fp={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},q.NO_ERROR=0,q.TIMEOUT=8,q.HTTP_ERROR=6,oc=q,ce.COMPLETE="complete",kT=ce,na.EventType=yr,yr.OPEN="a",yr.CLOSE="b",yr.ERROR="c",yr.MESSAGE="d",mt.prototype.listen=mt.prototype.K,Oa=na,xT=ua,tt.prototype.listenOnce=tt.prototype.L,tt.prototype.getLastError=tt.prototype.Ka,tt.prototype.getLastErrorCode=tt.prototype.Ba,tt.prototype.getStatus=tt.prototype.Z,tt.prototype.getResponseJson=tt.prototype.Oa,tt.prototype.getResponseText=tt.prototype.oa,tt.prototype.send=tt.prototype.ea,tt.prototype.setWithCredentials=tt.prototype.Ha,PT=tt}).apply(typeof Nu<"u"?Nu:typeof self<"u"?self:typeof window<"u"?window:{});const k_="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}$t.UNAUTHENTICATED=new $t(null),$t.GOOGLE_CREDENTIALS=new $t("google-credentials-uid"),$t.FIRST_PARTY=new $t("first-party-uid"),$t.MOCK_USER=new $t("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qo="10.12.5";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gs=new Vm("@firebase/firestore");function Ra(){return gs.logLevel}function ee(t,...e){if(gs.logLevel<=Te.DEBUG){const n=e.map(Gm);gs.debug(`Firestore (${qo}): ${t}`,...n)}}function Ur(t,...e){if(gs.logLevel<=Te.ERROR){const n=e.map(Gm);gs.error(`Firestore (${qo}): ${t}`,...n)}}function Co(t,...e){if(gs.logLevel<=Te.WARN){const n=e.map(Gm);gs.warn(`Firestore (${qo}): ${t}`,...n)}}function Gm(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(t="Unexpected state"){const e=`FIRESTORE (${qo}) INTERNAL ASSERTION FAILED: `+t;throw Ur(e),new Error(e)}function Ve(t,e){t||ue()}function de(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class X extends kn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class HN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n($t.UNAUTHENTICATED))}shutdown(){}}class WN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class qN{constructor(e){this.t=e,this.currentUser=$t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Ti;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ti,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{ee("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(ee("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ti)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ee("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ve(typeof r.accessToken=="string"),new DT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ve(e===null||typeof e=="string"),new $t(e)}}class KN{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=$t.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class GN{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new KN(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n($t.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class QN{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class YN{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&ee("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,ee("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{ee("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):ee("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ve(typeof n.token=="string"),this.R=n.token,new QN(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LT{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=XN(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function xe(t,e){return t<e?-1:t>e?1:0}function bo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new X($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new X($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new X($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new X($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return _t.fromMillis(Date.now())}static fromDate(e){return _t.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new _t(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?xe(this.nanoseconds,e.nanoseconds):xe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e){this.timestamp=e}static fromTimestamp(e){return new he(e)}static min(){return new he(new _t(0,0))}static max(){return new he(new _t(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e,n,r){n===void 0?n=0:n>e.length&&ue(),r===void 0?r=e.length-n:r>e.length-n&&ue(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Rl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Rl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Be extends Rl{construct(e,n,r){return new Be(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new X($.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Be(n)}static emptyPath(){return new Be([])}}const JN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class xt extends Rl{construct(e,n,r){return new xt(e,n,r)}static isValidIdentifier(e){return JN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),xt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new xt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new X($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new X($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new X($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new X($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new xt(n)}static emptyPath(){return new xt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e){this.path=e}static fromPath(e){return new oe(Be.fromString(e))}static fromName(e){return new oe(Be.fromString(e).popFirst(5))}static empty(){return new oe(Be.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Be.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Be.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new oe(new Be(e.slice()))}}function ZN(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=he.fromTimestamp(r===1e9?new _t(n+1,0):new _t(n,r));return new Pi(i,oe.empty(),e)}function eD(t){return new Pi(t.readTime,t.key,-1)}class Pi{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Pi(he.min(),oe.empty(),-1)}static max(){return new Pi(he.max(),oe.empty(),-1)}}function tD(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=oe.comparator(t.documentKey,e.documentKey),n!==0?n:xe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nD="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class rD{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wl(t){if(t.code!==$.FAILED_PRECONDITION||t.message!==nD)throw t;ee("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ue(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new B((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof B?n:B.resolve(n)}catch(n){return B.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):B.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):B.reject(n)}static resolve(e){return new B((n,r)=>{n(e)})}static reject(e){return new B((n,r)=>{r(e)})}static waitFor(e){return new B((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=B.resolve(!1);for(const r of e)n=n.next(i=>i?B.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new B((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++l,l===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new B((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function iD(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ql(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Qm.oe=-1;function Mh(t){return t==null}function Yc(t){return t===0&&1/t==-1/0}function sD(t){return typeof t=="number"&&Number.isInteger(t)&&!Yc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Rs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function OT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e,n){this.comparator=e,this.root=n||Pt.EMPTY}insert(e,n){return new Ze(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Pt.BLACK,null,null))}remove(e){return new Ze(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Pt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Du(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Du(this.root,e,this.comparator,!1)}getReverseIterator(){return new Du(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Du(this.root,e,this.comparator,!0)}}class Du{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Pt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Pt.RED,this.left=i??Pt.EMPTY,this.right=s??Pt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Pt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Pt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Pt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ue();const e=this.left.check();if(e!==this.right.check())throw ue();return e+(this.isRed()?0:1)}}Pt.EMPTY=null,Pt.RED=!0,Pt.BLACK=!1;Pt.EMPTY=new class{constructor(){this.size=0}get key(){throw ue()}get value(){throw ue()}get color(){throw ue()}get left(){throw ue()}get right(){throw ue()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Pt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.comparator=e,this.data=new Ze(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new b_(this.data.getIterator())}getIteratorFrom(e){return new b_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ct)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ct(this.comparator);return n.data=e,n}}class b_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e){this.fields=e,e.sort(xt.comparator)}static empty(){return new pn([])}unionWith(e){let n=new Ct(xt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new pn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return bo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new MT("Invalid base64 string: "+s):s}}(e);return new Dt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Dt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return xe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Dt.EMPTY_BYTE_STRING=new Dt("");const oD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function xi(t){if(Ve(!!t),typeof t=="string"){let e=0;const n=oD.exec(t);if(Ve(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ht(t.seconds),nanos:ht(t.nanos)}}function ht(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ys(t){return typeof t=="string"?Dt.fromBase64String(t):Dt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ym(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Xm(t){const e=t.mapValue.fields.__previous_value__;return Ym(e)?Xm(e):e}function Al(t){const e=xi(t.mapValue.fields.__local_write_time__.timestampValue);return new _t(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aD{constructor(e,n,r,i,s,o,l,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c}}class Pl{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Pl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Pl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function vs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ym(t)?4:lD(t)?9007199254740991:10:ue()}function mr(t,e){if(t===e)return!0;const n=vs(t);if(n!==vs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Al(t).isEqual(Al(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=xi(i.timestampValue),l=xi(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return ys(i.bytesValue).isEqual(ys(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return ht(i.geoPointValue.latitude)===ht(s.geoPointValue.latitude)&&ht(i.geoPointValue.longitude)===ht(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ht(i.integerValue)===ht(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ht(i.doubleValue),l=ht(s.doubleValue);return o===l?Yc(o)===Yc(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return bo(t.arrayValue.values||[],e.arrayValue.values||[],mr);case 10:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(C_(o)!==C_(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!mr(o[u],l[u])))return!1;return!0}(t,e);default:return ue()}}function xl(t,e){return(t.values||[]).find(n=>mr(n,e))!==void 0}function No(t,e){if(t===e)return 0;const n=vs(t),r=vs(e);if(n!==r)return xe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return xe(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=ht(s.integerValue||s.doubleValue),u=ht(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return N_(t.timestampValue,e.timestampValue);case 4:return N_(Al(t),Al(e));case 5:return xe(t.stringValue,e.stringValue);case 6:return function(s,o){const l=ys(s),u=ys(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const d=xe(l[c],u[c]);if(d!==0)return d}return xe(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=xe(ht(s.latitude),ht(o.latitude));return l!==0?l:xe(ht(s.longitude),ht(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const l=s.values||[],u=o.values||[];for(let c=0;c<l.length&&c<u.length;++c){const d=No(l[c],u[c]);if(d)return d}return xe(l.length,u.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Lu.mapValue&&o===Lu.mapValue)return 0;if(s===Lu.mapValue)return 1;if(o===Lu.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let f=0;f<u.length&&f<d.length;++f){const m=xe(u[f],d[f]);if(m!==0)return m;const _=No(l[u[f]],c[d[f]]);if(_!==0)return _}return xe(u.length,d.length)}(t.mapValue,e.mapValue);default:throw ue()}}function N_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return xe(t,e);const n=xi(t),r=xi(e),i=xe(n.seconds,r.seconds);return i!==0?i:xe(n.nanos,r.nanos)}function Do(t){return pp(t)}function pp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=xi(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ys(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return oe.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=pp(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${pp(n.fields[o])}`;return i+"}"}(t.mapValue):ue()}function D_(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function mp(t){return!!t&&"integerValue"in t}function Jm(t){return!!t&&"arrayValue"in t}function L_(t){return!!t&&"nullValue"in t}function O_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ac(t){return!!t&&"mapValue"in t}function Ya(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Rs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ya(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ya(t.arrayValue.values[n]);return e}return Object.assign({},t)}function lD(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e){this.value=e}static empty(){return new tn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ac(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ya(n)}setAll(e){let n=xt.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Ya(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());ac(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return mr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];ac(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Rs(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new tn(Ya(this.value))}}function VT(t){const e=[];return Rs(t.fields,(n,r)=>{const i=new xt([n]);if(ac(r)){const s=VT(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new pn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Ht(e,0,he.min(),he.min(),he.min(),tn.empty(),0)}static newFoundDocument(e,n,r,i){return new Ht(e,1,n,he.min(),r,i,0)}static newNoDocument(e,n){return new Ht(e,2,n,he.min(),he.min(),tn.empty(),0)}static newUnknownDocument(e,n){return new Ht(e,3,n,he.min(),he.min(),tn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(he.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=tn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=tn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=he.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ht&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ht(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(e,n){this.position=e,this.inclusive=n}}function M_(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=oe.comparator(oe.fromName(o.referenceValue),n.key):r=No(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function V_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!mr(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(e,n="asc"){this.field=e,this.dir=n}}function uD(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UT{}class pt extends UT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new hD(e,n,r):n==="array-contains"?new pD(e,r):n==="in"?new mD(e,r):n==="not-in"?new gD(e,r):n==="array-contains-any"?new yD(e,r):new pt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new dD(e,r):new fD(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(No(n,this.value)):n!==null&&vs(this.value)===vs(n)&&this.matchesComparison(No(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ue()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Kn extends UT{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Kn(e,n)}matches(e){return FT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function FT(t){return t.op==="and"}function jT(t){return cD(t)&&FT(t)}function cD(t){for(const e of t.filters)if(e instanceof Kn)return!1;return!0}function gp(t){if(t instanceof pt)return t.field.canonicalString()+t.op.toString()+Do(t.value);if(jT(t))return t.filters.map(e=>gp(e)).join(",");{const e=t.filters.map(n=>gp(n)).join(",");return`${t.op}(${e})`}}function zT(t,e){return t instanceof pt?function(r,i){return i instanceof pt&&r.op===i.op&&r.field.isEqual(i.field)&&mr(r.value,i.value)}(t,e):t instanceof Kn?function(r,i){return i instanceof Kn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&zT(o,i.filters[l]),!0):!1}(t,e):void ue()}function $T(t){return t instanceof pt?function(n){return`${n.field.canonicalString()} ${n.op} ${Do(n.value)}`}(t):t instanceof Kn?function(n){return n.op.toString()+" {"+n.getFilters().map($T).join(" ,")+"}"}(t):"Filter"}class hD extends pt{constructor(e,n,r){super(e,n,r),this.key=oe.fromName(r.referenceValue)}matches(e){const n=oe.comparator(e.key,this.key);return this.matchesComparison(n)}}class dD extends pt{constructor(e,n){super(e,"in",n),this.keys=BT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class fD extends pt{constructor(e,n){super(e,"not-in",n),this.keys=BT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function BT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>oe.fromName(r.referenceValue))}class pD extends pt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Jm(n)&&xl(n.arrayValue,this.value)}}class mD extends pt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&xl(this.value.arrayValue,n)}}class gD extends pt{constructor(e,n){super(e,"not-in",n)}matches(e){if(xl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!xl(this.value.arrayValue,n)}}class yD extends pt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Jm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>xl(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vD{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function U_(t,e=null,n=[],r=[],i=null,s=null,o=null){return new vD(t,e,n,r,i,s,o)}function Zm(t){const e=de(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>gp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Mh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Do(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Do(r)).join(",")),e.ue=n}return e.ue}function eg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!uD(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!zT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!V_(t.startAt,e.startAt)&&V_(t.endAt,e.endAt)}function yp(t){return oe.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function _D(t,e,n,r,i,s,o,l){return new Ko(t,e,n,r,i,s,o,l)}function Vh(t){return new Ko(t)}function F_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function HT(t){return t.collectionGroup!==null}function Xa(t){const e=de(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Ct(xt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new kl(s,r))}),n.has(xt.keyField().canonicalString())||e.ce.push(new kl(xt.keyField(),r))}return e.ce}function hr(t){const e=de(t);return e.le||(e.le=wD(e,Xa(t))),e.le}function wD(t,e){if(t.limitType==="F")return U_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new kl(i.field,s)});const n=t.endAt?new Xc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Xc(t.startAt.position,t.startAt.inclusive):null;return U_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function vp(t,e){const n=t.filters.concat([e]);return new Ko(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function _p(t,e,n){return new Ko(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Uh(t,e){return eg(hr(t),hr(e))&&t.limitType===e.limitType}function WT(t){return`${Zm(hr(t))}|lt:${t.limitType}`}function js(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>$T(i)).join(", ")}]`),Mh(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Do(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Do(i)).join(",")),`Target(${r})`}(hr(t))}; limitType=${t.limitType})`}function Fh(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):oe.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Xa(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=M_(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,Xa(r),i)||r.endAt&&!function(o,l,u){const c=M_(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,Xa(r),i))}(t,e)}function ED(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function qT(t){return(e,n)=>{let r=!1;for(const i of Xa(t)){const s=TD(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function TD(t,e,n){const r=t.field.isKeyField()?oe.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?No(u,c):ue()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ue()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Rs(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return OT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ID=new Ze(oe.comparator);function Fr(){return ID}const KT=new Ze(oe.comparator);function Ma(...t){let e=KT;for(const n of t)e=e.insert(n.key,n);return e}function GT(t){let e=KT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Zi(){return Ja()}function QT(){return Ja()}function Ja(){return new Go(t=>t.toString(),(t,e)=>t.isEqual(e))}const SD=new Ze(oe.comparator),RD=new Ct(oe.comparator);function Ee(...t){let e=RD;for(const n of t)e=e.add(n);return e}const AD=new Ct(xe);function PD(){return AD}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YT(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Yc(e)?"-0":e}}function XT(t){return{integerValue:""+t}}function xD(t,e){return sD(e)?XT(e):YT(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(){this._=void 0}}function kD(t,e,n){return t instanceof Jc?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Ym(s)&&(s=Xm(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Cl?ZT(t,e):t instanceof bl?eI(t,e):function(i,s){const o=JT(i,s),l=j_(o)+j_(i.Pe);return mp(o)&&mp(i.Pe)?XT(l):YT(i.serializer,l)}(t,e)}function CD(t,e,n){return t instanceof Cl?ZT(t,e):t instanceof bl?eI(t,e):n}function JT(t,e){return t instanceof Zc?function(r){return mp(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Jc extends jh{}class Cl extends jh{constructor(e){super(),this.elements=e}}function ZT(t,e){const n=tI(e);for(const r of t.elements)n.some(i=>mr(i,r))||n.push(r);return{arrayValue:{values:n}}}class bl extends jh{constructor(e){super(),this.elements=e}}function eI(t,e){let n=tI(e);for(const r of t.elements)n=n.filter(i=>!mr(i,r));return{arrayValue:{values:n}}}class Zc extends jh{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function j_(t){return ht(t.integerValue||t.doubleValue)}function tI(t){return Jm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function bD(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Cl&&i instanceof Cl||r instanceof bl&&i instanceof bl?bo(r.elements,i.elements,mr):r instanceof Zc&&i instanceof Zc?mr(r.Pe,i.Pe):r instanceof Jc&&i instanceof Jc}(t.transform,e.transform)}class ND{constructor(e,n){this.version=e,this.transformResults=n}}class dr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new dr}static exists(e){return new dr(void 0,e)}static updateTime(e){return new dr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function lc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class zh{}function nI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new iI(t.key,dr.none()):new Kl(t.key,t.data,dr.none());{const n=t.data,r=tn.empty();let i=new Ct(xt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Mi(t.key,r,new pn(i.toArray()),dr.none())}}function DD(t,e,n){t instanceof Kl?function(i,s,o){const l=i.value.clone(),u=$_(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Mi?function(i,s,o){if(!lc(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=$_(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(rI(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Za(t,e,n,r){return t instanceof Kl?function(s,o,l,u){if(!lc(s.precondition,o))return l;const c=s.value.clone(),d=B_(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Mi?function(s,o,l,u){if(!lc(s.precondition,o))return l;const c=B_(s.fieldTransforms,u,o),d=o.data;return d.setAll(rI(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,l){return lc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function LD(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=JT(r.transform,i||null);s!=null&&(n===null&&(n=tn.empty()),n.set(r.field,s))}return n||null}function z_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&bo(r,i,(s,o)=>bD(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Kl extends zh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Mi extends zh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function rI(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function $_(t,e,n){const r=new Map;Ve(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,CD(o,l,n[i]))}return r}function B_(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,kD(s,o,e))}return r}class iI extends zh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class OD extends zh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MD{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&DD(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Za(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Za(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=QT();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=nI(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(he.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ee())}isEqual(e){return this.batchId===e.batchId&&bo(this.mutations,e.mutations,(n,r)=>z_(n,r))&&bo(this.baseMutations,e.baseMutations,(n,r)=>z_(n,r))}}class tg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Ve(e.mutations.length===r.length);let i=function(){return SD}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new tg(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VD{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UD{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ut,Se;function FD(t){switch(t){default:return ue();case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0}}function sI(t){if(t===void 0)return Ur("GRPC error has no .code"),$.UNKNOWN;switch(t){case ut.OK:return $.OK;case ut.CANCELLED:return $.CANCELLED;case ut.UNKNOWN:return $.UNKNOWN;case ut.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case ut.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case ut.INTERNAL:return $.INTERNAL;case ut.UNAVAILABLE:return $.UNAVAILABLE;case ut.UNAUTHENTICATED:return $.UNAUTHENTICATED;case ut.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case ut.NOT_FOUND:return $.NOT_FOUND;case ut.ALREADY_EXISTS:return $.ALREADY_EXISTS;case ut.PERMISSION_DENIED:return $.PERMISSION_DENIED;case ut.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case ut.ABORTED:return $.ABORTED;case ut.OUT_OF_RANGE:return $.OUT_OF_RANGE;case ut.UNIMPLEMENTED:return $.UNIMPLEMENTED;case ut.DATA_LOSS:return $.DATA_LOSS;default:return ue()}}(Se=ut||(ut={}))[Se.OK=0]="OK",Se[Se.CANCELLED=1]="CANCELLED",Se[Se.UNKNOWN=2]="UNKNOWN",Se[Se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Se[Se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Se[Se.NOT_FOUND=5]="NOT_FOUND",Se[Se.ALREADY_EXISTS=6]="ALREADY_EXISTS",Se[Se.PERMISSION_DENIED=7]="PERMISSION_DENIED",Se[Se.UNAUTHENTICATED=16]="UNAUTHENTICATED",Se[Se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Se[Se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Se[Se.ABORTED=10]="ABORTED",Se[Se.OUT_OF_RANGE=11]="OUT_OF_RANGE",Se[Se.UNIMPLEMENTED=12]="UNIMPLEMENTED",Se[Se.INTERNAL=13]="INTERNAL",Se[Se.UNAVAILABLE=14]="UNAVAILABLE",Se[Se.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jD(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zD=new is([4294967295,4294967295],0);function H_(t){const e=jD().encode(t),n=new AT;return n.update(e),new Uint8Array(n.digest())}function W_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new is([n,r],0),new is([i,s],0)]}class ng{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Va(`Invalid padding: ${n}`);if(r<0)throw new Va(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Va(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Va(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=is.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(is.fromNumber(r)));return i.compare(zD)===1&&(i=new is([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=H_(e),[r,i]=W_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new ng(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=H_(e),[r,i]=W_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Va extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Gl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new $h(he.min(),i,new Ze(xe),Fr(),Ee())}}class Gl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Gl(r,n,Ee(),Ee(),Ee())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class oI{constructor(e,n){this.targetId=e,this.me=n}}class aI{constructor(e,n,r=Dt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class q_{constructor(){this.fe=0,this.ge=G_(),this.pe=Dt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=Ee(),n=Ee(),r=Ee();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ue()}}),new Gl(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=G_()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ve(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class $D{constructor(e){this.Le=e,this.Be=new Map,this.ke=Fr(),this.qe=K_(),this.Qe=new Ze(xe)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ue()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(yp(s))if(r===0){const o=new oe(s.path);this.Ue(n,o,Ht.newNoDocument(o,he.min()))}else Ve(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=ys(r).toUint8Array()}catch(u){if(u instanceof MT)return Co("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new ng(o,i,s)}catch(u){return Co(u instanceof Va?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&yp(l.target)){const u=new oe(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,Ht.newNoDocument(u,e))}s.be&&(n.set(o,s.Ce()),s.ve())}});let r=Ee();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new $h(e,n,this.Qe,this.ke,r);return this.ke=Fr(),this.qe=K_(),this.Qe=new Ze(xe),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new q_,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Ct(xe),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||ee("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new q_),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function K_(){return new Ze(oe.comparator)}function G_(){return new Ze(oe.comparator)}const BD={asc:"ASCENDING",desc:"DESCENDING"},HD={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},WD={and:"AND",or:"OR"};class qD{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function wp(t,e){return t.useProto3Json||Mh(e)?e:{value:e}}function eh(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function lI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function KD(t,e){return eh(t,e.toTimestamp())}function fr(t){return Ve(!!t),he.fromTimestamp(function(n){const r=xi(n);return new _t(r.seconds,r.nanos)}(t))}function rg(t,e){return Ep(t,e).canonicalString()}function Ep(t,e){const n=function(i){return new Be(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function uI(t){const e=Be.fromString(t);return Ve(pI(e)),e}function Tp(t,e){return rg(t.databaseId,e.path)}function Wd(t,e){const n=uI(e);if(n.get(1)!==t.databaseId.projectId)throw new X($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new X($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new oe(hI(n))}function cI(t,e){return rg(t.databaseId,e)}function GD(t){const e=uI(t);return e.length===4?Be.emptyPath():hI(e)}function Ip(t){return new Be(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function hI(t){return Ve(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Q_(t,e,n){return{name:Tp(t,e),fields:n.value.mapValue.fields}}function QD(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:ue()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(Ve(d===void 0||typeof d=="string"),Dt.fromBase64String(d||"")):(Ve(d===void 0||d instanceof Buffer||d instanceof Uint8Array),Dt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const d=c.code===void 0?$.UNKNOWN:sI(c.code);return new X(d,c.message||"")}(o);n=new aI(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Wd(t,r.document.name),s=fr(r.document.updateTime),o=r.document.createTime?fr(r.document.createTime):he.min(),l=new tn({mapValue:{fields:r.document.fields}}),u=Ht.newFoundDocument(i,s,o,l),c=r.targetIds||[],d=r.removedTargetIds||[];n=new uc(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Wd(t,r.document),s=r.readTime?fr(r.readTime):he.min(),o=Ht.newNoDocument(i,s),l=r.removedTargetIds||[];n=new uc([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Wd(t,r.document),s=r.removedTargetIds||[];n=new uc([],s,i,null)}else{if(!("filter"in e))return ue();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new UD(i,s),l=r.targetId;n=new oI(l,o)}}return n}function YD(t,e){let n;if(e instanceof Kl)n={update:Q_(t,e.key,e.value)};else if(e instanceof iI)n={delete:Tp(t,e.key)};else if(e instanceof Mi)n={update:Q_(t,e.key,e.data),updateMask:s4(e.fieldMask)};else{if(!(e instanceof OD))return ue();n={verify:Tp(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Jc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Cl)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof bl)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Zc)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw ue()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:KD(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ue()}(t,e.precondition)),n}function XD(t,e){return t&&t.length>0?(Ve(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?fr(i.updateTime):fr(s);return o.isEqual(he.min())&&(o=fr(s)),new ND(o,i.transformResults||[])}(n,e))):[]}function JD(t,e){return{documents:[cI(t,e.path)]}}function ZD(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=cI(t,i);const s=function(c){if(c.length!==0)return fI(Kn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:zs(m.field),direction:n4(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=wp(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function e4(t){let e=GD(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Ve(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(f){const m=dI(f);return m instanceof Kn&&jT(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(m=>function(T){return new kl($s(T.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(T.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(f){let m;return m=typeof f=="object"?f.value:f,Mh(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(f){const m=!!f.before,_=f.values||[];return new Xc(_,m)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const m=!f.before,_=f.values||[];return new Xc(_,m)}(n.endAt)),_D(e,i,o,s,l,"F",u,c)}function t4(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ue()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function dI(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=$s(n.unaryFilter.field);return pt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=$s(n.unaryFilter.field);return pt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=$s(n.unaryFilter.field);return pt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=$s(n.unaryFilter.field);return pt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ue()}}(t):t.fieldFilter!==void 0?function(n){return pt.create($s(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ue()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Kn.create(n.compositeFilter.filters.map(r=>dI(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ue()}}(n.compositeFilter.op))}(t):ue()}function n4(t){return BD[t]}function r4(t){return HD[t]}function i4(t){return WD[t]}function zs(t){return{fieldPath:t.canonicalString()}}function $s(t){return xt.fromServerFormat(t.fieldPath)}function fI(t){return t instanceof pt?function(n){if(n.op==="=="){if(O_(n.value))return{unaryFilter:{field:zs(n.field),op:"IS_NAN"}};if(L_(n.value))return{unaryFilter:{field:zs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(O_(n.value))return{unaryFilter:{field:zs(n.field),op:"IS_NOT_NAN"}};if(L_(n.value))return{unaryFilter:{field:zs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:zs(n.field),op:r4(n.op),value:n.value}}}(t):t instanceof Kn?function(n){const r=n.getFilters().map(i=>fI(i));return r.length===1?r[0]:{compositeFilter:{op:i4(n.op),filters:r}}}(t):ue()}function s4(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function pI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e,n,r,i,s=he.min(),o=he.min(),l=Dt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new ci(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ci(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ci(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ci(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o4{constructor(e){this.ct=e}}function a4(t){const e=e4({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?_p(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l4{constructor(){this.an=new u4}addToCollectionParentIndex(e,n){return this.an.add(n),B.resolve()}getCollectionParents(e,n){return B.resolve(this.an.getEntries(n))}addFieldIndex(e,n){return B.resolve()}deleteFieldIndex(e,n){return B.resolve()}deleteAllFieldIndexes(e){return B.resolve()}createTargetIndexes(e,n){return B.resolve()}getDocumentsMatchingTarget(e,n){return B.resolve(null)}getIndexType(e,n){return B.resolve(0)}getFieldIndexes(e,n){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,n){return B.resolve(Pi.min())}getMinOffsetFromCollectionGroup(e,n){return B.resolve(Pi.min())}updateCollectionGroup(e,n,r){return B.resolve()}updateIndexEntries(e,n){return B.resolve()}}class u4{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ct(Be.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ct(Be.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static Ln(){return new Lo(0)}static Bn(){return new Lo(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c4{constructor(){this.changes=new Go(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ht.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?B.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h4{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d4{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Za(r.mutation,i,pn.empty(),_t.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ee()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ee()){const i=Zi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ma();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Zi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ee()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Fr();const o=Ja(),l=function(){return Ja()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof Mi)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),Za(d.mutation,c,d.mutation.getFieldMask(),_t.now())):o.set(c.key,pn.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var f;return l.set(c,new h4(d,(f=o.get(c))!==null&&f!==void 0?f:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Ja();let i=new Ze((o,l)=>o-l),s=Ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||pn.empty();d=l.applyToLocalView(c,d),r.set(u,d);const f=(i.get(l.batchId)||Ee()).add(u);i=i.insert(l.batchId,f)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,d=u.value,f=QT();d.forEach(m=>{if(!s.has(m)){const _=nI(n.get(m),r.get(m));_!==null&&f.set(m,_),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return B.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return oe.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):HT(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):B.resolve(Zi());let l=-1,u=s;return o.next(c=>B.forEach(c,(d,f)=>(l<f.largestBatchId&&(l=f.largestBatchId),s.get(d)?B.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,Ee())).next(d=>({batchId:l,changes:GT(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new oe(n)).next(r=>{let i=Ma();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Ma();return this.indexManager.getCollectionParents(e,s).next(l=>B.forEach(l,u=>{const c=function(f,m){return new Ko(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,Ht.newInvalidDocument(d)))});let l=Ma();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&Za(d.mutation,c,pn.empty(),_t.now()),Fh(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f4{constructor(e){this.serializer=e,this.lr=new Map,this.hr=new Map}getBundleMetadata(e,n){return B.resolve(this.lr.get(n))}saveBundleMetadata(e,n){return this.lr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:fr(i.createTime)}}(n)),B.resolve()}getNamedQuery(e,n){return B.resolve(this.hr.get(n))}saveNamedQuery(e,n){return this.hr.set(n.name,function(i){return{name:i.name,query:a4(i.bundledQuery),readTime:fr(i.readTime)}}(n)),B.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p4{constructor(){this.overlays=new Ze(oe.comparator),this.Pr=new Map}getOverlay(e,n){return B.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Zi();return B.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),B.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Pr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Pr.delete(r)),B.resolve()}getOverlaysForCollection(e,n,r){const i=Zi(),s=n.length+1,o=new oe(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return B.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ze((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=Zi(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const l=Zi(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>l.set(c,d)),!(l.size()>=i)););return B.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Pr.get(i.largestBatchId).delete(r.key);this.Pr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new VD(n,r));let s=this.Pr.get(n);s===void 0&&(s=Ee(),this.Pr.set(n,s)),this.Pr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m4{constructor(){this.sessionToken=Dt.EMPTY_BYTE_STRING}getSessionToken(e){return B.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,B.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(){this.Ir=new Ct(wt.Tr),this.Er=new Ct(wt.dr)}isEmpty(){return this.Ir.isEmpty()}addReference(e,n){const r=new wt(e,n);this.Ir=this.Ir.add(r),this.Er=this.Er.add(r)}Ar(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Rr(new wt(e,n))}Vr(e,n){e.forEach(r=>this.removeReference(r,n))}mr(e){const n=new oe(new Be([])),r=new wt(n,e),i=new wt(n,e+1),s=[];return this.Er.forEachInRange([r,i],o=>{this.Rr(o),s.push(o.key)}),s}gr(){this.Ir.forEach(e=>this.Rr(e))}Rr(e){this.Ir=this.Ir.delete(e),this.Er=this.Er.delete(e)}pr(e){const n=new oe(new Be([])),r=new wt(n,e),i=new wt(n,e+1);let s=Ee();return this.Er.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new wt(e,0),r=this.Ir.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class wt{constructor(e,n){this.key=e,this.yr=n}static Tr(e,n){return oe.comparator(e.key,n.key)||xe(e.yr,n.yr)}static dr(e,n){return xe(e.yr,n.yr)||oe.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g4{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.wr=1,this.Sr=new Ct(wt.Tr)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new MD(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Sr=this.Sr.add(new wt(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return B.resolve(o)}lookupMutationBatch(e,n){return B.resolve(this.br(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Dr(r),s=i<0?0:i;return B.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?-1:this.wr-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new wt(n,0),i=new wt(n,Number.POSITIVE_INFINITY),s=[];return this.Sr.forEachInRange([r,i],o=>{const l=this.br(o.yr);s.push(l)}),B.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ct(xe);return n.forEach(i=>{const s=new wt(i,0),o=new wt(i,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([s,o],l=>{r=r.add(l.yr)})}),B.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;oe.isDocumentKey(s)||(s=s.child(""));const o=new wt(new oe(s),0);let l=new Ct(xe);return this.Sr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.yr)),!0)},o),B.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.br(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Ve(this.vr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Sr;return B.forEach(n.mutations,i=>{const s=new wt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Sr=r})}xn(e){}containsKey(e,n){const r=new wt(n,0),i=this.Sr.firstAfterOrEqual(r);return B.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}vr(e,n){return this.Dr(e)}Dr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}br(e){const n=this.Dr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y4{constructor(e){this.Fr=e,this.docs=function(){return new Ze(oe.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Fr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return B.resolve(r?r.document.mutableCopy():Ht.newInvalidDocument(n))}getEntries(e,n){let r=Fr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ht.newInvalidDocument(i))}),B.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Fr();const o=n.path,l=new oe(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||tD(eD(d),r)<=0||(i.has(d.key)||Fh(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return B.resolve(s)}getAllFromCollectionGroup(e,n,r,i){ue()}Mr(e,n){return B.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new v4(this)}getSize(e){return B.resolve(this.size)}}class v4 extends c4{constructor(e){super(),this.ur=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ur.addEntry(e,i)):this.ur.removeEntry(r)}),B.waitFor(n)}getFromCache(e,n){return this.ur.getEntry(e,n)}getAllFromCache(e,n){return this.ur.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _4{constructor(e){this.persistence=e,this.Or=new Go(n=>Zm(n),eg),this.lastRemoteSnapshotVersion=he.min(),this.highestTargetId=0,this.Nr=0,this.Lr=new ig,this.targetCount=0,this.Br=Lo.Ln()}forEachTarget(e,n){return this.Or.forEach((r,i)=>n(i)),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.Nr)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Nr&&(this.Nr=n),B.resolve()}Qn(e){this.Or.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Br=new Lo(n),this.highestTargetId=n),e.sequenceNumber>this.Nr&&(this.Nr=e.sequenceNumber)}addTargetData(e,n){return this.Qn(n),this.targetCount+=1,B.resolve()}updateTargetData(e,n){return this.Qn(n),B.resolve()}removeTargetData(e,n){return this.Or.delete(n.target),this.Lr.mr(n.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Or.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Or.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),B.waitFor(s).next(()=>i)}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,n){const r=this.Or.get(n)||null;return B.resolve(r)}addMatchingKeys(e,n,r){return this.Lr.Ar(n,r),B.resolve()}removeMatchingKeys(e,n,r){this.Lr.Vr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),B.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Lr.mr(n),B.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Lr.pr(n);return B.resolve(r)}containsKey(e,n){return B.resolve(this.Lr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w4{constructor(e,n){this.kr={},this.overlays={},this.qr=new Qm(0),this.Qr=!1,this.Qr=!0,this.Kr=new m4,this.referenceDelegate=e(this),this.$r=new _4(this),this.indexManager=new l4,this.remoteDocumentCache=function(i){return new y4(i)}(r=>this.referenceDelegate.Ur(r)),this.serializer=new o4(n),this.Wr=new f4(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new p4,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.kr[e.toKey()];return r||(r=new g4(n,this.referenceDelegate),this.kr[e.toKey()]=r),r}getGlobalsCache(){return this.Kr}getTargetCache(){return this.$r}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Wr}runTransaction(e,n,r){ee("MemoryPersistence","Starting transaction:",e);const i=new E4(this.qr.next());return this.referenceDelegate.Gr(),r(i).next(s=>this.referenceDelegate.zr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}jr(e,n){return B.or(Object.values(this.kr).map(r=>()=>r.containsKey(e,n)))}}class E4 extends rD{constructor(e){super(),this.currentSequenceNumber=e}}class sg{constructor(e){this.persistence=e,this.Hr=new ig,this.Jr=null}static Yr(e){return new sg(e)}get Zr(){if(this.Jr)return this.Jr;throw ue()}addReference(e,n,r){return this.Hr.addReference(r,n),this.Zr.delete(r.toString()),B.resolve()}removeReference(e,n,r){return this.Hr.removeReference(r,n),this.Zr.add(r.toString()),B.resolve()}markPotentiallyOrphaned(e,n){return this.Zr.add(n.toString()),B.resolve()}removeTarget(e,n){this.Hr.mr(n.targetId).forEach(i=>this.Zr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Zr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Gr(){this.Jr=new Set}zr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.Zr,r=>{const i=oe.fromPath(r);return this.Xr(e,i).next(s=>{s||n.removeEntry(i,he.min())})}).next(()=>(this.Jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Xr(e,n).next(r=>{r?this.Zr.delete(n.toString()):this.Zr.add(n.toString())})}Ur(e){return 0}Xr(e,n){return B.or([()=>B.resolve(this.Hr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.jr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Ki=r,this.$i=i}static Ui(e,n){let r=Ee(),i=Ee();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new og(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T4{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I4{constructor(){this.Wi=!1,this.Gi=!1,this.zi=100,this.ji=function(){return dC()?8:iD(Nt())>0?6:4}()}initialize(e,n){this.Hi=e,this.indexManager=n,this.Wi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Yi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new T4;return this.Zi(e,n,o).next(l=>{if(s.result=l,this.Gi)return this.Xi(e,n,o,l.size)})}).next(()=>s.result)}Xi(e,n,r,i){return r.documentReadCount<this.zi?(Ra()<=Te.DEBUG&&ee("QueryEngine","SDK will not create cache indexes for query:",js(n),"since it only creates cache indexes for collection contains","more than or equal to",this.zi,"documents"),B.resolve()):(Ra()<=Te.DEBUG&&ee("QueryEngine","Query:",js(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ji*i?(Ra()<=Te.DEBUG&&ee("QueryEngine","The SDK decides to create cache indexes for query:",js(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,hr(n))):B.resolve())}Ji(e,n){if(F_(n))return B.resolve(null);let r=hr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=_p(n,null,"F"),r=hr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Ee(...s);return this.Hi.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.es(n,l);return this.ts(n,c,o,u.readTime)?this.Ji(e,_p(n,null,"F")):this.ns(e,c,n,u)}))})))}Yi(e,n,r,i){return F_(n)||i.isEqual(he.min())?B.resolve(null):this.Hi.getDocuments(e,r).next(s=>{const o=this.es(n,s);return this.ts(n,o,r,i)?B.resolve(null):(Ra()<=Te.DEBUG&&ee("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),js(n)),this.ns(e,o,n,ZN(i,-1)).next(l=>l))})}es(e,n){let r=new Ct(qT(e));return n.forEach((i,s)=>{Fh(e,s)&&(r=r.add(s))}),r}ts(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Zi(e,n,r){return Ra()<=Te.DEBUG&&ee("QueryEngine","Using full collection scan to execute query:",js(n)),this.Hi.getDocumentsMatchingQuery(e,n,Pi.min(),r)}ns(e,n,r,i){return this.Hi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S4{constructor(e,n,r,i){this.persistence=e,this.rs=n,this.serializer=i,this.ss=new Ze(xe),this.os=new Go(s=>Zm(s),eg),this._s=new Map,this.us=e.getRemoteDocumentCache(),this.$r=e.getTargetCache(),this.Wr=e.getBundleCache(),this.cs(r)}cs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new d4(this.us,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.us.setIndexManager(this.indexManager),this.rs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ss))}}function R4(t,e,n,r){return new S4(t,e,n,r)}async function mI(t,e){const n=de(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.cs(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=Ee();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){l.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({ls:c,removedBatchIds:o,addedBatchIds:l}))})})}function A4(t,e){const n=de(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.us.newChangeBuffer({trackRemovals:!0});return function(l,u,c,d){const f=c.batch,m=f.keys();let _=B.resolve();return m.forEach(T=>{_=_.next(()=>d.getEntry(u,T)).next(A=>{const b=c.docVersions.get(T);Ve(b!==null),A.version.compareTo(b)<0&&(f.applyToRemoteDocument(A,c),A.isValidDocument()&&(A.setReadTime(c.commitVersion),d.addEntry(A)))})}),_.next(()=>l.mutationQueue.removeMutationBatch(u,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=Ee();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function gI(t){const e=de(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.$r.getLastRemoteSnapshotVersion(n))}function P4(t,e){const n=de(t),r=e.snapshotVersion;let i=n.ss;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.us.newChangeBuffer({trackRemovals:!0});i=n.ss;const l=[];e.targetChanges.forEach((d,f)=>{const m=i.get(f);if(!m)return;l.push(n.$r.removeMatchingKeys(s,d.removedDocuments,f).next(()=>n.$r.addMatchingKeys(s,d.addedDocuments,f)));let _=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?_=_.withResumeToken(Dt.EMPTY_BYTE_STRING,he.min()).withLastLimboFreeSnapshotVersion(he.min()):d.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(d.resumeToken,r)),i=i.insert(f,_),function(A,b,I){return A.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-A.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(m,_,d)&&l.push(n.$r.updateTargetData(s,_))});let u=Fr(),c=Ee();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),l.push(x4(s,o,e.documentUpdates).next(d=>{u=d.hs,c=d.Ps})),!r.isEqual(he.min())){const d=n.$r.getLastRemoteSnapshotVersion(s).next(f=>n.$r.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(d)}return B.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.ss=i,s))}function x4(t,e,n){let r=Ee(),i=Ee();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Fr();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(he.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):ee("LocalStore","Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{hs:o,Ps:i}})}function k4(t,e){const n=de(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function C4(t,e){const n=de(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.$r.getTargetData(r,e).next(s=>s?(i=s,B.resolve(i)):n.$r.allocateTargetId(r).next(o=>(i=new ci(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.$r.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ss.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ss=n.ss.insert(r.targetId,r),n.os.set(e,r.targetId)),r})}async function Sp(t,e,n){const r=de(t),i=r.ss.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ql(o))throw o;ee("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ss=r.ss.remove(e),r.os.delete(i.target)}function Y_(t,e,n){const r=de(t);let i=he.min(),s=Ee();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const f=de(u),m=f.os.get(d);return m!==void 0?B.resolve(f.ss.get(m)):f.$r.getTargetData(c,d)}(r,o,hr(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.$r.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.rs.getDocumentsMatchingQuery(o,e,n?i:he.min(),n?s:Ee())).next(l=>(b4(r,ED(e),l),{documents:l,Is:s})))}function b4(t,e,n){let r=t._s.get(e)||he.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t._s.set(e,r)}class X_{constructor(){this.activeTargetIds=PD()}Vs(e){this.activeTargetIds=this.activeTargetIds.add(e)}fs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Rs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class N4{constructor(){this.io=new X_,this.so={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.io.Vs(e),this.so[e]||"not-current"}updateQueryState(e,n,r){this.so[e]=n}removeLocalQueryTarget(e){this.io.fs(e)}isLocalQueryTarget(e){return this.io.activeTargetIds.has(e)}clearQueryState(e){delete this.so[e]}getAllActiveQueryTargets(){return this.io.activeTargetIds}isActiveQueryTarget(e){return this.io.activeTargetIds.has(e)}start(){return this.io=new X_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D4{oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_{constructor(){this._o=()=>this.ao(),this.uo=()=>this.co(),this.lo=[],this.ho()}oo(e){this.lo.push(e)}shutdown(){window.removeEventListener("online",this._o),window.removeEventListener("offline",this.uo)}ho(){window.addEventListener("online",this._o),window.addEventListener("offline",this.uo)}ao(){ee("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.lo)e(0)}co(){ee("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.lo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ou=null;function qd(){return Ou===null?Ou=function(){return 268435456+Math.round(2147483648*Math.random())}():Ou++,"0x"+Ou.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L4={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O4{constructor(e){this.Po=e.Po,this.Io=e.Io}To(e){this.Eo=e}Ao(e){this.Ro=e}Vo(e){this.mo=e}onMessage(e){this.fo=e}close(){this.Io()}send(e){this.Po(e)}po(){this.Eo()}yo(){this.Ro()}wo(e){this.mo(e)}So(e){this.fo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt="WebChannelConnection";class M4 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.bo=r+"://"+n.host,this.Do=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get vo(){return!1}Fo(n,r,i,s,o){const l=qd(),u=this.Mo(n,r.toUriEncodedString());ee("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const c={"google-cloud-resource-prefix":this.Do,"x-goog-request-params":this.Co};return this.xo(c,s,o),this.Oo(n,u,c,i).then(d=>(ee("RestConnection",`Received RPC '${n}' ${l}: `,d),d),d=>{throw Co("RestConnection",`RPC '${n}' ${l} failed with error: `,d,"url: ",u,"request:",i),d})}No(n,r,i,s,o,l){return this.Fo(n,r,i,s,o)}xo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+qo}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}Mo(n,r){const i=L4[n];return`${this.bo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Oo(e,n,r,i){const s=qd();return new Promise((o,l)=>{const u=new PT;u.setWithCredentials(!0),u.listenOnce(kT.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case oc.NO_ERROR:const d=u.getResponseJson();ee(zt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case oc.TIMEOUT:ee(zt,`RPC '${e}' ${s} timed out`),l(new X($.DEADLINE_EXCEEDED,"Request time out"));break;case oc.HTTP_ERROR:const f=u.getStatus();if(ee(zt,`RPC '${e}' ${s} failed with status:`,f,"response text:",u.getResponseText()),f>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const _=m==null?void 0:m.error;if(_&&_.status&&_.message){const T=function(b){const I=b.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(I)>=0?I:$.UNKNOWN}(_.status);l(new X(T,_.message))}else l(new X($.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new X($.UNAVAILABLE,"Connection failed."));break;default:ue()}}finally{ee(zt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);ee(zt,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Lo(e,n,r){const i=qd(),s=[this.bo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=NT(),l=bT(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.xmlHttpFactory=new xT({})),this.xo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");ee(zt,`Creating RPC '${e}' stream ${i}: ${d}`,u);const f=o.createWebChannel(d,u);let m=!1,_=!1;const T=new O4({Po:b=>{_?ee(zt,`Not sending because RPC '${e}' stream ${i} is closed:`,b):(m||(ee(zt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),m=!0),ee(zt,`RPC '${e}' stream ${i} sending:`,b),f.send(b))},Io:()=>f.close()}),A=(b,I,v)=>{b.listen(I,S=>{try{v(S)}catch(L){setTimeout(()=>{throw L},0)}})};return A(f,Oa.EventType.OPEN,()=>{_||(ee(zt,`RPC '${e}' stream ${i} transport opened.`),T.po())}),A(f,Oa.EventType.CLOSE,()=>{_||(_=!0,ee(zt,`RPC '${e}' stream ${i} transport closed`),T.wo())}),A(f,Oa.EventType.ERROR,b=>{_||(_=!0,Co(zt,`RPC '${e}' stream ${i} transport errored:`,b),T.wo(new X($.UNAVAILABLE,"The operation could not be completed")))}),A(f,Oa.EventType.MESSAGE,b=>{var I;if(!_){const v=b.data[0];Ve(!!v);const S=v,L=S.error||((I=S[0])===null||I===void 0?void 0:I.error);if(L){ee(zt,`RPC '${e}' stream ${i} received error:`,L);const F=L.status;let x=function(E){const R=ut[E];if(R!==void 0)return sI(R)}(F),w=L.message;x===void 0&&(x=$.INTERNAL,w="Unknown error status: "+F+" with message "+L.message),_=!0,T.wo(new X(x,w)),f.close()}else ee(zt,`RPC '${e}' stream ${i} received:`,v),T.So(v)}}),A(l,CT.STAT_EVENT,b=>{b.stat===fp.PROXY?ee(zt,`RPC '${e}' stream ${i} detected buffering proxy`):b.stat===fp.NOPROXY&&ee(zt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{T.yo()},0),T}}function Kd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bh(t){return new qD(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yI{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ai=e,this.timerId=n,this.Bo=r,this.ko=i,this.qo=s,this.Qo=0,this.Ko=null,this.$o=Date.now(),this.reset()}reset(){this.Qo=0}Uo(){this.Qo=this.qo}Wo(e){this.cancel();const n=Math.floor(this.Qo+this.Go()),r=Math.max(0,Date.now()-this.$o),i=Math.max(0,n-r);i>0&&ee("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Qo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Ko=this.ai.enqueueAfterDelay(this.timerId,i,()=>(this.$o=Date.now(),e())),this.Qo*=this.ko,this.Qo<this.Bo&&(this.Qo=this.Bo),this.Qo>this.qo&&(this.Qo=this.qo)}zo(){this.Ko!==null&&(this.Ko.skipDelay(),this.Ko=null)}cancel(){this.Ko!==null&&(this.Ko.cancel(),this.Ko=null)}Go(){return(Math.random()-.5)*this.Qo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vI{constructor(e,n,r,i,s,o,l,u){this.ai=e,this.jo=r,this.Ho=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Jo=0,this.Yo=null,this.Zo=null,this.stream=null,this.Xo=0,this.e_=new yI(e,n)}t_(){return this.state===1||this.state===5||this.n_()}n_(){return this.state===2||this.state===3}start(){this.Xo=0,this.state!==4?this.auth():this.r_()}async stop(){this.t_()&&await this.close(0)}i_(){this.state=0,this.e_.reset()}s_(){this.n_()&&this.Yo===null&&(this.Yo=this.ai.enqueueAfterDelay(this.jo,6e4,()=>this.o_()))}__(e){this.a_(),this.stream.send(e)}async o_(){if(this.n_())return this.close(0)}a_(){this.Yo&&(this.Yo.cancel(),this.Yo=null)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}async close(e,n){this.a_(),this.u_(),this.e_.cancel(),this.Jo++,e!==4?this.e_.reset():n&&n.code===$.RESOURCE_EXHAUSTED?(Ur(n.toString()),Ur("Using maximum backoff delay to prevent overloading the backend."),this.e_.Uo()):n&&n.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.c_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Vo(n)}c_(){}auth(){this.state=1;const e=this.l_(this.Jo),n=this.Jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Jo===n&&this.h_(r,i)},r=>{e(()=>{const i=new X($.UNKNOWN,"Fetching auth token failed: "+r.message);return this.P_(i)})})}h_(e,n){const r=this.l_(this.Jo);this.stream=this.I_(e,n),this.stream.To(()=>{r(()=>this.listener.To())}),this.stream.Ao(()=>{r(()=>(this.state=2,this.Zo=this.ai.enqueueAfterDelay(this.Ho,1e4,()=>(this.n_()&&(this.state=3),Promise.resolve())),this.listener.Ao()))}),this.stream.Vo(i=>{r(()=>this.P_(i))}),this.stream.onMessage(i=>{r(()=>++this.Xo==1?this.T_(i):this.onNext(i))})}r_(){this.state=5,this.e_.Wo(async()=>{this.state=0,this.start()})}P_(e){return ee("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}l_(e){return n=>{this.ai.enqueueAndForget(()=>this.Jo===e?n():(ee("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class V4 extends vI{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}I_(e,n){return this.connection.Lo("Listen",e,n)}T_(e){return this.onNext(e)}onNext(e){this.e_.reset();const n=QD(this.serializer,e),r=function(s){if(!("targetChange"in s))return he.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?he.min():o.readTime?fr(o.readTime):he.min()}(e);return this.listener.E_(n,r)}d_(e){const n={};n.database=Ip(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=yp(u)?{documents:JD(s,u)}:{query:ZD(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=lI(s,o.resumeToken);const c=wp(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(he.min())>0){l.readTime=eh(s,o.snapshotVersion.toTimestamp());const c=wp(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=t4(this.serializer,e);r&&(n.labels=r),this.__(n)}A_(e){const n={};n.database=Ip(this.serializer),n.removeTarget=e,this.__(n)}}class U4 extends vI{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get R_(){return this.Xo>0}start(){this.lastStreamToken=void 0,super.start()}c_(){this.R_&&this.V_([])}I_(e,n){return this.connection.Lo("Write",e,n)}T_(e){return Ve(!!e.streamToken),this.lastStreamToken=e.streamToken,Ve(!e.writeResults||e.writeResults.length===0),this.listener.m_()}onNext(e){Ve(!!e.streamToken),this.lastStreamToken=e.streamToken,this.e_.reset();const n=XD(e.writeResults,e.commitTime),r=fr(e.commitTime);return this.listener.f_(r,n)}g_(){const e={};e.database=Ip(this.serializer),this.__(e)}V_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>YD(this.serializer,r))};this.__(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F4 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.p_=!1}y_(){if(this.p_)throw new X($.FAILED_PRECONDITION,"The client has already been terminated.")}Fo(e,n,r,i){return this.y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Fo(e,Ep(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new X($.UNKNOWN,s.toString())})}No(e,n,r,i,s){return this.y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.No(e,Ep(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new X($.UNKNOWN,o.toString())})}terminate(){this.p_=!0,this.connection.terminate()}}class j4{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.w_=0,this.S_=null,this.b_=!0}D_(){this.w_===0&&(this.C_("Unknown"),this.S_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.S_=null,this.v_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}F_(e){this.state==="Online"?this.C_("Unknown"):(this.w_++,this.w_>=1&&(this.M_(),this.v_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.M_(),this.w_=0,e==="Online"&&(this.b_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}v_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.b_?(Ur(n),this.b_=!1):ee("OnlineStateTracker",n)}M_(){this.S_!==null&&(this.S_.cancel(),this.S_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z4{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.x_=[],this.O_=new Map,this.N_=new Set,this.L_=[],this.B_=s,this.B_.oo(o=>{r.enqueueAndForget(async()=>{As(this)&&(ee("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=de(u);c.N_.add(4),await Ql(c),c.k_.set("Unknown"),c.N_.delete(4),await Hh(c)}(this))})}),this.k_=new j4(r,i)}}async function Hh(t){if(As(t))for(const e of t.L_)await e(!0)}async function Ql(t){for(const e of t.L_)await e(!1)}function _I(t,e){const n=de(t);n.O_.has(e.targetId)||(n.O_.set(e.targetId,e),cg(n)?ug(n):Qo(n).n_()&&lg(n,e))}function ag(t,e){const n=de(t),r=Qo(n);n.O_.delete(e),r.n_()&&wI(n,e),n.O_.size===0&&(r.n_()?r.s_():As(n)&&n.k_.set("Unknown"))}function lg(t,e){if(t.q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(he.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Qo(t).d_(e)}function wI(t,e){t.q_.xe(e),Qo(t).A_(e)}function ug(t){t.q_=new $D({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.O_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Qo(t).start(),t.k_.D_()}function cg(t){return As(t)&&!Qo(t).t_()&&t.O_.size>0}function As(t){return de(t).N_.size===0}function EI(t){t.q_=void 0}async function $4(t){t.k_.set("Online")}async function B4(t){t.O_.forEach((e,n)=>{lg(t,e)})}async function H4(t,e){EI(t),cg(t)?(t.k_.F_(e),ug(t)):t.k_.set("Unknown")}async function W4(t,e,n){if(t.k_.set("Online"),e instanceof aI&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.O_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.O_.delete(l),i.q_.removeTarget(l))}(t,e)}catch(r){ee("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await th(t,r)}else if(e instanceof uc?t.q_.Ke(e):e instanceof oI?t.q_.He(e):t.q_.We(e),!n.isEqual(he.min()))try{const r=await gI(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.q_.rt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.O_.get(c);d&&s.O_.set(c,d.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const d=s.O_.get(u);if(!d)return;s.O_.set(u,d.withResumeToken(Dt.EMPTY_BYTE_STRING,d.snapshotVersion)),wI(s,u);const f=new ci(d.target,u,c,d.sequenceNumber);lg(s,f)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){ee("RemoteStore","Failed to raise snapshot:",r),await th(t,r)}}async function th(t,e,n){if(!ql(e))throw e;t.N_.add(1),await Ql(t),t.k_.set("Offline"),n||(n=()=>gI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ee("RemoteStore","Retrying IndexedDB access"),await n(),t.N_.delete(1),await Hh(t)})}function TI(t,e){return e().catch(n=>th(t,n,e))}async function Wh(t){const e=de(t),n=ki(e);let r=e.x_.length>0?e.x_[e.x_.length-1].batchId:-1;for(;q4(e);)try{const i=await k4(e.localStore,r);if(i===null){e.x_.length===0&&n.s_();break}r=i.batchId,K4(e,i)}catch(i){await th(e,i)}II(e)&&SI(e)}function q4(t){return As(t)&&t.x_.length<10}function K4(t,e){t.x_.push(e);const n=ki(t);n.n_()&&n.R_&&n.V_(e.mutations)}function II(t){return As(t)&&!ki(t).t_()&&t.x_.length>0}function SI(t){ki(t).start()}async function G4(t){ki(t).g_()}async function Q4(t){const e=ki(t);for(const n of t.x_)e.V_(n.mutations)}async function Y4(t,e,n){const r=t.x_.shift(),i=tg.from(r,e,n);await TI(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Wh(t)}async function X4(t,e){e&&ki(t).R_&&await async function(r,i){if(function(o){return FD(o)&&o!==$.ABORTED}(i.code)){const s=r.x_.shift();ki(r).i_(),await TI(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Wh(r)}}(t,e),II(t)&&SI(t)}async function Z_(t,e){const n=de(t);n.asyncQueue.verifyOperationInProgress(),ee("RemoteStore","RemoteStore received new credentials");const r=As(n);n.N_.add(3),await Ql(n),r&&n.k_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.N_.delete(3),await Hh(n)}async function J4(t,e){const n=de(t);e?(n.N_.delete(2),await Hh(n)):e||(n.N_.add(2),await Ql(n),n.k_.set("Unknown"))}function Qo(t){return t.Q_||(t.Q_=function(n,r,i){const s=de(n);return s.y_(),new V4(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{To:$4.bind(null,t),Ao:B4.bind(null,t),Vo:H4.bind(null,t),E_:W4.bind(null,t)}),t.L_.push(async e=>{e?(t.Q_.i_(),cg(t)?ug(t):t.k_.set("Unknown")):(await t.Q_.stop(),EI(t))})),t.Q_}function ki(t){return t.K_||(t.K_=function(n,r,i){const s=de(n);return s.y_(),new U4(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{To:()=>Promise.resolve(),Ao:G4.bind(null,t),Vo:X4.bind(null,t),m_:Q4.bind(null,t),f_:Y4.bind(null,t)}),t.L_.push(async e=>{e?(t.K_.i_(),await Wh(t)):(await t.K_.stop(),t.x_.length>0&&(ee("RemoteStore",`Stopping write stream with ${t.x_.length} pending writes`),t.x_=[]))})),t.K_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Ti,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new hg(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new X($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function dg(t,e){if(Ur("AsyncQueue",`${e}: ${t}`),ql(t))return new X($.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e){this.comparator=e?(n,r)=>e(n,r)||oe.comparator(n.key,r.key):(n,r)=>oe.comparator(n.key,r.key),this.keyedMap=Ma(),this.sortedSet=new Ze(this.comparator)}static emptySet(e){return new mo(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof mo)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new mo;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0{constructor(){this.U_=new Ze(oe.comparator)}track(e){const n=e.doc.key,r=this.U_.get(n);r?e.type!==0&&r.type===3?this.U_=this.U_.insert(n,e):e.type===3&&r.type!==1?this.U_=this.U_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.U_=this.U_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.U_=this.U_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.U_=this.U_.remove(n):e.type===1&&r.type===2?this.U_=this.U_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.U_=this.U_.insert(n,{type:2,doc:e.doc}):ue():this.U_=this.U_.insert(n,e)}W_(){const e=[];return this.U_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Oo{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Oo(e,n,mo.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Uh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z4{constructor(){this.G_=void 0,this.z_=[]}j_(){return this.z_.some(e=>e.H_())}}class eL{constructor(){this.queries=t0(),this.onlineState="Unknown",this.J_=new Set}terminate(){(function(n,r){const i=de(n),s=i.queries;i.queries=t0(),s.forEach((o,l)=>{for(const u of l.z_)u.onError(r)})})(this,new X($.ABORTED,"Firestore shutting down"))}}function t0(){return new Go(t=>WT(t),Uh)}async function RI(t,e){const n=de(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.j_()&&e.H_()&&(r=2):(s=new Z4,r=e.H_()?0:1);try{switch(r){case 0:s.G_=await n.onListen(i,!0);break;case 1:s.G_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=dg(o,`Initialization of query '${js(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.z_.push(e),e.Y_(n.onlineState),s.G_&&e.Z_(s.G_)&&fg(n)}async function AI(t,e){const n=de(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.z_.indexOf(e);o>=0&&(s.z_.splice(o,1),s.z_.length===0?i=e.H_()?0:1:!s.j_()&&e.H_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function tL(t,e){const n=de(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.z_)l.Z_(i)&&(r=!0);o.G_=i}}r&&fg(n)}function nL(t,e,n){const r=de(t),i=r.queries.get(e);if(i)for(const s of i.z_)s.onError(n);r.queries.delete(e)}function fg(t){t.J_.forEach(e=>{e.next()})}var Rp,n0;(n0=Rp||(Rp={})).X_="default",n0.Cache="cache";class PI{constructor(e,n,r){this.query=e,this.ea=n,this.ta=!1,this.na=null,this.onlineState="Unknown",this.options=r||{}}Z_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Oo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ta?this.ra(e)&&(this.ea.next(e),n=!0):this.ia(e,this.onlineState)&&(this.sa(e),n=!0),this.na=e,n}onError(e){this.ea.error(e)}Y_(e){this.onlineState=e;let n=!1;return this.na&&!this.ta&&this.ia(this.na,e)&&(this.sa(this.na),n=!0),n}ia(e,n){if(!e.fromCache||!this.H_())return!0;const r=n!=="Offline";return(!this.options.oa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ra(e){if(e.docChanges.length>0)return!0;const n=this.na&&this.na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}sa(e){e=Oo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ta=!0,this.ea.next(e)}H_(){return this.options.source!==Rp.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{constructor(e){this.key=e}}class kI{constructor(e){this.key=e}}class rL{constructor(e,n){this.query=e,this.Ia=n,this.Ta=null,this.hasCachedResults=!1,this.current=!1,this.Ea=Ee(),this.mutatedKeys=Ee(),this.da=qT(e),this.Aa=new mo(this.da)}get Ra(){return this.Ia}Va(e,n){const r=n?n.ma:new e0,i=n?n.Aa:this.Aa;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,f)=>{const m=i.get(d),_=Fh(this.query,f)?f:null,T=!!m&&this.mutatedKeys.has(m.key),A=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let b=!1;m&&_?m.data.isEqual(_.data)?T!==A&&(r.track({type:3,doc:_}),b=!0):this.fa(m,_)||(r.track({type:2,doc:_}),b=!0,(u&&this.da(_,u)>0||c&&this.da(_,c)<0)&&(l=!0)):!m&&_?(r.track({type:0,doc:_}),b=!0):m&&!_&&(r.track({type:1,doc:m}),b=!0,(u||c)&&(l=!0)),b&&(_?(o=o.add(_),s=A?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{Aa:o,ma:r,ts:l,mutatedKeys:s}}fa(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Aa;this.Aa=e.Aa,this.mutatedKeys=e.mutatedKeys;const o=e.ma.W_();o.sort((d,f)=>function(_,T){const A=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ue()}};return A(_)-A(T)}(d.type,f.type)||this.da(d.doc,f.doc)),this.ga(r),i=i!=null&&i;const l=n&&!i?this.pa():[],u=this.Ea.size===0&&this.current&&!i?1:0,c=u!==this.Ta;return this.Ta=u,o.length!==0||c?{snapshot:new Oo(this.query,e.Aa,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),ya:l}:{ya:l}}Y_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Aa:this.Aa,ma:new e0,mutatedKeys:this.mutatedKeys,ts:!1},!1)):{ya:[]}}wa(e){return!this.Ia.has(e)&&!!this.Aa.has(e)&&!this.Aa.get(e).hasLocalMutations}ga(e){e&&(e.addedDocuments.forEach(n=>this.Ia=this.Ia.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ia=this.Ia.delete(n)),this.current=e.current)}pa(){if(!this.current)return[];const e=this.Ea;this.Ea=Ee(),this.Aa.forEach(r=>{this.wa(r.key)&&(this.Ea=this.Ea.add(r.key))});const n=[];return e.forEach(r=>{this.Ea.has(r)||n.push(new kI(r))}),this.Ea.forEach(r=>{e.has(r)||n.push(new xI(r))}),n}Sa(e){this.Ia=e.Is,this.Ea=Ee();const n=this.Va(e.documents);return this.applyChanges(n,!0)}ba(){return Oo.fromInitialDocuments(this.query,this.Aa,this.mutatedKeys,this.Ta===0,this.hasCachedResults)}}class iL{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class sL{constructor(e){this.key=e,this.Da=!1}}class oL{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.va=new Go(l=>WT(l),Uh),this.Fa=new Map,this.Ma=new Set,this.xa=new Ze(oe.comparator),this.Oa=new Map,this.Na=new ig,this.La={},this.Ba=new Map,this.ka=Lo.Bn(),this.onlineState="Unknown",this.qa=void 0}get isPrimaryClient(){return this.qa===!0}}async function aL(t,e,n=!0){const r=OI(t);let i;const s=r.va.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ba()):i=await CI(r,e,n,!0),i}async function lL(t,e){const n=OI(t);await CI(n,e,!0,!1)}async function CI(t,e,n,r){const i=await C4(t.localStore,hr(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let l;return r&&(l=await uL(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&_I(t.remoteStore,i),l}async function uL(t,e,n,r,i){t.Qa=(f,m,_)=>async function(A,b,I,v){let S=b.view.Va(I);S.ts&&(S=await Y_(A.localStore,b.query,!1).then(({documents:w})=>b.view.Va(w,S)));const L=v&&v.targetChanges.get(b.targetId),F=v&&v.targetMismatches.get(b.targetId)!=null,x=b.view.applyChanges(S,A.isPrimaryClient,L,F);return i0(A,b.targetId,x.ya),x.snapshot}(t,f,m,_);const s=await Y_(t.localStore,e,!0),o=new rL(e,s.Is),l=o.Va(s.documents),u=Gl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);i0(t,n,c.ya);const d=new iL(e,n,o);return t.va.set(e,d),t.Fa.has(n)?t.Fa.get(n).push(e):t.Fa.set(n,[e]),c.snapshot}async function cL(t,e,n){const r=de(t),i=r.va.get(e),s=r.Fa.get(i.targetId);if(s.length>1)return r.Fa.set(i.targetId,s.filter(o=>!Uh(o,e))),void r.va.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Sp(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&ag(r.remoteStore,i.targetId),Ap(r,i.targetId)}).catch(Wl)):(Ap(r,i.targetId),await Sp(r.localStore,i.targetId,!0))}async function hL(t,e){const n=de(t),r=n.va.get(e),i=n.Fa.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),ag(n.remoteStore,r.targetId))}async function dL(t,e,n){const r=_L(t);try{const i=await function(o,l){const u=de(o),c=_t.now(),d=l.reduce((_,T)=>_.add(T.key),Ee());let f,m;return u.persistence.runTransaction("Locally write mutations","readwrite",_=>{let T=Fr(),A=Ee();return u.us.getEntries(_,d).next(b=>{T=b,T.forEach((I,v)=>{v.isValidDocument()||(A=A.add(I))})}).next(()=>u.localDocuments.getOverlayedDocuments(_,T)).next(b=>{f=b;const I=[];for(const v of l){const S=LD(v,f.get(v.key).overlayedDocument);S!=null&&I.push(new Mi(v.key,S,VT(S.value.mapValue),dr.exists(!0)))}return u.mutationQueue.addMutationBatch(_,c,I,l)}).next(b=>{m=b;const I=b.applyToLocalDocumentSet(f,A);return u.documentOverlayCache.saveOverlays(_,b.batchId,I)})}).then(()=>({batchId:m.batchId,changes:GT(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.La[o.currentUser.toKey()];c||(c=new Ze(xe)),c=c.insert(l,u),o.La[o.currentUser.toKey()]=c}(r,i.batchId,n),await Yl(r,i.changes),await Wh(r.remoteStore)}catch(i){const s=dg(i,"Failed to persist write");n.reject(s)}}async function bI(t,e){const n=de(t);try{const r=await P4(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Oa.get(s);o&&(Ve(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Da=!0:i.modifiedDocuments.size>0?Ve(o.Da):i.removedDocuments.size>0&&(Ve(o.Da),o.Da=!1))}),await Yl(n,r,e)}catch(r){await Wl(r)}}function r0(t,e,n){const r=de(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.va.forEach((s,o)=>{const l=o.view.Y_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=de(o);u.onlineState=l;let c=!1;u.queries.forEach((d,f)=>{for(const m of f.z_)m.Y_(l)&&(c=!0)}),c&&fg(u)}(r.eventManager,e),i.length&&r.Ca.E_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function fL(t,e,n){const r=de(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Oa.get(e),s=i&&i.key;if(s){let o=new Ze(oe.comparator);o=o.insert(s,Ht.newNoDocument(s,he.min()));const l=Ee().add(s),u=new $h(he.min(),new Map,new Ze(xe),o,l);await bI(r,u),r.xa=r.xa.remove(s),r.Oa.delete(e),pg(r)}else await Sp(r.localStore,e,!1).then(()=>Ap(r,e,n)).catch(Wl)}async function pL(t,e){const n=de(t),r=e.batch.batchId;try{const i=await A4(n.localStore,e);DI(n,r,null),NI(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Yl(n,i)}catch(i){await Wl(i)}}async function mL(t,e,n){const r=de(t);try{const i=await function(o,l){const u=de(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,l).next(f=>(Ve(f!==null),d=f.keys(),u.mutationQueue.removeMutationBatch(c,f))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);DI(r,e,n),NI(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Yl(r,i)}catch(i){await Wl(i)}}function NI(t,e){(t.Ba.get(e)||[]).forEach(n=>{n.resolve()}),t.Ba.delete(e)}function DI(t,e,n){const r=de(t);let i=r.La[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.La[r.currentUser.toKey()]=i}}function Ap(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Fa.get(e))t.va.delete(r),n&&t.Ca.Ka(r,n);t.Fa.delete(e),t.isPrimaryClient&&t.Na.mr(e).forEach(r=>{t.Na.containsKey(r)||LI(t,r)})}function LI(t,e){t.Ma.delete(e.path.canonicalString());const n=t.xa.get(e);n!==null&&(ag(t.remoteStore,n),t.xa=t.xa.remove(e),t.Oa.delete(n),pg(t))}function i0(t,e,n){for(const r of n)r instanceof xI?(t.Na.addReference(r.key,e),gL(t,r)):r instanceof kI?(ee("SyncEngine","Document no longer in limbo: "+r.key),t.Na.removeReference(r.key,e),t.Na.containsKey(r.key)||LI(t,r.key)):ue()}function gL(t,e){const n=e.key,r=n.path.canonicalString();t.xa.get(n)||t.Ma.has(r)||(ee("SyncEngine","New document in limbo: "+n),t.Ma.add(r),pg(t))}function pg(t){for(;t.Ma.size>0&&t.xa.size<t.maxConcurrentLimboResolutions;){const e=t.Ma.values().next().value;t.Ma.delete(e);const n=new oe(Be.fromString(e)),r=t.ka.next();t.Oa.set(r,new sL(n)),t.xa=t.xa.insert(n,r),_I(t.remoteStore,new ci(hr(Vh(n.path)),r,"TargetPurposeLimboResolution",Qm.oe))}}async function Yl(t,e,n){const r=de(t),i=[],s=[],o=[];r.va.isEmpty()||(r.va.forEach((l,u)=>{o.push(r.Qa(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const f=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(c){i.push(c);const f=og.Ui(u.targetId,c);s.push(f)}}))}),await Promise.all(o),r.Ca.E_(i),await async function(u,c){const d=de(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>B.forEach(c,m=>B.forEach(m.Ki,_=>d.persistence.referenceDelegate.addReference(f,m.targetId,_)).next(()=>B.forEach(m.$i,_=>d.persistence.referenceDelegate.removeReference(f,m.targetId,_)))))}catch(f){if(!ql(f))throw f;ee("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const m=f.targetId;if(!f.fromCache){const _=d.ss.get(m),T=_.snapshotVersion,A=_.withLastLimboFreeSnapshotVersion(T);d.ss=d.ss.insert(m,A)}}}(r.localStore,s))}async function yL(t,e){const n=de(t);if(!n.currentUser.isEqual(e)){ee("SyncEngine","User change. New user:",e.toKey());const r=await mI(n.localStore,e);n.currentUser=e,function(s,o){s.Ba.forEach(l=>{l.forEach(u=>{u.reject(new X($.CANCELLED,o))})}),s.Ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Yl(n,r.ls)}}function vL(t,e){const n=de(t),r=n.Oa.get(e);if(r&&r.Da)return Ee().add(r.key);{let i=Ee();const s=n.Fa.get(e);if(!s)return i;for(const o of s){const l=n.va.get(o);i=i.unionWith(l.view.Ra)}return i}}function OI(t){const e=de(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=bI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=vL.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=fL.bind(null,e),e.Ca.E_=tL.bind(null,e.eventManager),e.Ca.Ka=nL.bind(null,e.eventManager),e}function _L(t){const e=de(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=pL.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=mL.bind(null,e),e}class s0{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Bh(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return R4(this.persistence,new I4,e.initialUser,this.serializer)}createPersistence(e){return new w4(sg.Yr,this.serializer)}createSharedClientState(e){return new N4}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class wL{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>r0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=yL.bind(null,this.syncEngine),await J4(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new eL}()}createDatastore(e){const n=Bh(e.databaseInfo.databaseId),r=function(s){return new M4(s)}(e.databaseInfo);return function(s,o,l,u){return new F4(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new z4(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>r0(this.syncEngine,n,0),function(){return J_.D()?new J_:new D4}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,d){const f=new oL(i,s,o,l,u,c);return d&&(f.qa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=de(i);ee("RemoteStore","RemoteStore shutting down."),s.N_.add(5),await Ql(s),s.B_.shutdown(),s.k_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Wa(this.observer.next,e)}error(e){this.observer.error?this.Wa(this.observer.error,e):Ur("Uncaught Error in snapshot listener:",e.toString())}Ga(){this.muted=!0}Wa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EL{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=$t.UNAUTHENTICATED,this.clientId=LT.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{ee("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(ee("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new X($.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ti;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=dg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Gd(t,e){t.asyncQueue.verifyOperationInProgress(),ee("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await mI(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function o0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await IL(t);ee("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Z_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Z_(e.remoteStore,i)),t._onlineComponents=e}function TL(t){return t.name==="FirebaseError"?t.code===$.FAILED_PRECONDITION||t.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function IL(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ee("FirestoreClient","Using user provided OfflineComponentProvider");try{await Gd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!TL(n))throw n;Co("Error using user provided cache. Falling back to memory cache: "+n),await Gd(t,new s0)}}else ee("FirestoreClient","Using default OfflineComponentProvider"),await Gd(t,new s0);return t._offlineComponents}async function VI(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ee("FirestoreClient","Using user provided OnlineComponentProvider"),await o0(t,t._uninitializedComponentsProvider._online)):(ee("FirestoreClient","Using default OnlineComponentProvider"),await o0(t,new wL))),t._onlineComponents}function SL(t){return VI(t).then(e=>e.syncEngine)}async function Pp(t){const e=await VI(t),n=e.eventManager;return n.onListen=aL.bind(null,e.syncEngine),n.onUnlisten=cL.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=lL.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=hL.bind(null,e.syncEngine),n}function RL(t,e,n={}){const r=new Ti;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new MI({next:m=>{o.enqueueAndForget(()=>AI(s,f));const _=m.docs.has(l);!_&&m.fromCache?c.reject(new X($.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&m.fromCache&&u&&u.source==="server"?c.reject(new X($.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new PI(Vh(l.path),d,{includeMetadataChanges:!0,oa:!0});return RI(s,f)}(await Pp(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a0=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FI(t,e,n){if(!n)throw new X($.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function AL(t,e,n,r){if(e===!0&&r===!0)throw new X($.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function l0(t){if(!oe.isDocumentKey(t))throw new X($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function u0(t){if(oe.isDocumentKey(t))throw new X($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function qh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ue()}function pr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new X($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=qh(t);throw new X($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c0{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new X($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new X($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}AL("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=UI((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new X($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new X($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new X($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Kh{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new c0({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new X($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new X($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new c0(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new HN;switch(r.type){case"firstParty":return new GN(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new X($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=a0.get(n);r&&(ee("ComponentProvider","Removing Datastore"),a0.delete(n),r.terminate())}(this),Promise.resolve()}}function PL(t,e,n,r={}){var i;const s=(t=pr(t,Kh))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Co("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=$t.MOCK_USER;else{l=jE(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new X($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new $t(c)}t._authCredentials=new WN(new DT(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ps(this.firestore,e,this._query)}}class qt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ii(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new qt(this.firestore,e,this._key)}}class Ii extends Ps{constructor(e,n,r){super(e,n,Vh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new qt(this.firestore,null,new oe(e))}withConverter(e){return new Ii(this.firestore,e,this._path)}}function h0(t,e,...n){if(t=rt(t),FI("collection","path",e),t instanceof Kh){const r=Be.fromString(e,...n);return u0(r),new Ii(t,null,r)}{if(!(t instanceof qt||t instanceof Ii))throw new X($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Be.fromString(e,...n));return u0(r),new Ii(t.firestore,null,r)}}function nh(t,e,...n){if(t=rt(t),arguments.length===1&&(e=LT.newId()),FI("doc","path",e),t instanceof Kh){const r=Be.fromString(e,...n);return l0(r),new qt(t,null,new oe(r))}{if(!(t instanceof qt||t instanceof Ii))throw new X($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Be.fromString(e,...n));return l0(r),new qt(t.firestore,t instanceof Ii?t.converter:null,new oe(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xL{constructor(){this._u=Promise.resolve(),this.au=[],this.uu=!1,this.cu=[],this.lu=null,this.hu=!1,this.Pu=!1,this.Iu=[],this.e_=new yI(this,"async_queue_retry"),this.Tu=()=>{const n=Kd();n&&ee("AsyncQueue","Visibility state changed to "+n.visibilityState),this.e_.zo()};const e=Kd();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Tu)}get isShuttingDown(){return this.uu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Eu(),this.du(e)}enterRestrictedMode(e){if(!this.uu){this.uu=!0,this.Pu=e||!1;const n=Kd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Tu)}}enqueue(e){if(this.Eu(),this.uu)return new Promise(()=>{});const n=new Ti;return this.du(()=>this.uu&&this.Pu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.au.push(e),this.Au()))}async Au(){if(this.au.length!==0){try{await this.au[0](),this.au.shift(),this.e_.reset()}catch(e){if(!ql(e))throw e;ee("AsyncQueue","Operation failed with retryable error: "+e)}this.au.length>0&&this.e_.Wo(()=>this.Au())}}du(e){const n=this._u.then(()=>(this.hu=!0,e().catch(r=>{this.lu=r,this.hu=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Ur("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.hu=!1,r))));return this._u=n,n}enqueueAfterDelay(e,n,r){this.Eu(),this.Iu.indexOf(e)>-1&&(n=0);const i=hg.createAndSchedule(this,e,n,r,s=>this.Ru(s));return this.cu.push(i),i}Eu(){this.lu&&ue()}verifyOperationInProgress(){}async Vu(){let e;do e=this._u,await e;while(e!==this._u)}mu(e){for(const n of this.cu)if(n.timerId===e)return!0;return!1}fu(e){return this.Vu().then(()=>{this.cu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.cu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Vu()})}gu(e){this.Iu.push(e)}Ru(e){const n=this.cu.indexOf(e);this.cu.splice(n,1)}}function d0(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Mo extends Kh{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new xL}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||jI(this),this._firestoreClient.terminate()}}function kL(t,e){const n=typeof t=="object"?t:Fm(),r=typeof t=="string"?t:"(default)",i=bh(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=VE("firestore");s&&PL(i,...s)}return i}function mg(t){return t._firestoreClient||jI(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function jI(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,c,d){return new aD(l,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,UI(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new EL(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Vo(Dt.fromBase64String(e))}catch(n){throw new X($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Vo(Dt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new X($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new xt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new X($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new X($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return xe(this._lat,e._lat)||xe(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CL=/^__.*__$/;class bL{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Mi(e,this.data,this.fieldMask,n,this.fieldTransforms):new Kl(e,this.data,n,this.fieldTransforms)}}class zI{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Mi(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function $I(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ue()}}class vg{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.pu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get yu(){return this.settings.yu}wu(e){return new vg(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.wu({path:r,bu:!1});return i.Du(e),i}Cu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.wu({path:r,bu:!1});return i.pu(),i}vu(e){return this.wu({path:void 0,bu:!0})}Fu(e){return rh(e,this.settings.methodName,this.settings.Mu||!1,this.path,this.settings.xu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Du(this.path.get(e))}Du(e){if(e.length===0)throw this.Fu("Document fields must not be empty");if($I(this.yu)&&CL.test(e))throw this.Fu('Document fields cannot begin and end with "__"')}}class NL{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Bh(e)}Ou(e,n,r,i=!1){return new vg({yu:e,methodName:n,xu:r,path:xt.emptyPath(),bu:!1,Mu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function _g(t){const e=t._freezeSettings(),n=Bh(t._databaseId);return new NL(t._databaseId,!!e.ignoreUndefinedProperties,n)}function DL(t,e,n,r,i,s={}){const o=t.Ou(s.merge||s.mergeFields?2:0,e,n,i);wg("Data must be an object, but it was:",o,r);const l=BI(r,o);let u,c;if(s.merge)u=new pn(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const f of s.mergeFields){const m=xp(e,f,n);if(!o.contains(m))throw new X($.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);WI(d,m)||d.push(m)}u=new pn(d),c=o.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,c=o.fieldTransforms;return new bL(new tn(l),u,c)}class Qh extends gg{_toFieldTransform(e){if(e.yu!==2)throw e.yu===1?e.Fu(`${this._methodName}() can only appear at the top level of your update data`):e.Fu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Qh}}function LL(t,e,n,r){const i=t.Ou(1,e,n);wg("Data must be an object, but it was:",i,r);const s=[],o=tn.empty();Rs(r,(u,c)=>{const d=Eg(e,u,n);c=rt(c);const f=i.Cu(d);if(c instanceof Qh)s.push(d);else{const m=Xl(c,f);m!=null&&(s.push(d),o.set(d,m))}});const l=new pn(s);return new zI(o,l,i.fieldTransforms)}function OL(t,e,n,r,i,s){const o=t.Ou(1,e,n),l=[xp(e,r,n)],u=[i];if(s.length%2!=0)throw new X($.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)l.push(xp(e,s[m])),u.push(s[m+1]);const c=[],d=tn.empty();for(let m=l.length-1;m>=0;--m)if(!WI(c,l[m])){const _=l[m];let T=u[m];T=rt(T);const A=o.Cu(_);if(T instanceof Qh)c.push(_);else{const b=Xl(T,A);b!=null&&(c.push(_),d.set(_,b))}}const f=new pn(c);return new zI(d,f,o.fieldTransforms)}function ML(t,e,n,r=!1){return Xl(n,t.Ou(r?4:3,e))}function Xl(t,e){if(HI(t=rt(t)))return wg("Unsupported field value:",e,t),BI(t,e);if(t instanceof gg)return function(r,i){if(!$I(i.yu))throw i.Fu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Fu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.bu&&e.yu!==4)throw e.Fu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=Xl(l,i.vu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=rt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return xD(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=_t.fromDate(r);return{timestampValue:eh(i.serializer,s)}}if(r instanceof _t){const s=new _t(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:eh(i.serializer,s)}}if(r instanceof yg)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Vo)return{bytesValue:lI(i.serializer,r._byteString)};if(r instanceof qt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Fu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:rg(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Fu(`Unsupported field value: ${qh(r)}`)}(t,e)}function BI(t,e){const n={};return OT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Rs(t,(r,i)=>{const s=Xl(i,e.Su(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function HI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof _t||t instanceof yg||t instanceof Vo||t instanceof qt||t instanceof gg)}function wg(t,e,n){if(!HI(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=qh(n);throw r==="an object"?e.Fu(t+" a custom object"):e.Fu(t+" "+r)}}function xp(t,e,n){if((e=rt(e))instanceof Gh)return e._internalPath;if(typeof e=="string")return Eg(t,e);throw rh("Field path arguments must be of type string or ",t,!1,void 0,n)}const VL=new RegExp("[~\\*/\\[\\]]");function Eg(t,e,n){if(e.search(VL)>=0)throw rh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Gh(...e.split("."))._internalPath}catch{throw rh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function rh(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new X($.INVALID_ARGUMENT,l+t+u)}function WI(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qI{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new qt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new UL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Tg("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class UL extends qI{data(){return super.data()}}function Tg(t,e){return typeof e=="string"?Eg(t,e):e instanceof Gh?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FL(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new X($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ig{}class KI extends Ig{}function f0(t,e,...n){let r=[];e instanceof Ig&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Rg).length,l=s.filter(u=>u instanceof Sg).length;if(o>1||o>0&&l>0)throw new X($.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Sg extends KI{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Sg(e,n,r)}_apply(e){const n=this._parse(e);return GI(e._query,n),new Ps(e.firestore,e.converter,vp(e._query,n))}_parse(e){const n=_g(e.firestore);return function(s,o,l,u,c,d,f){let m;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new X($.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){m0(f,d);const _=[];for(const T of f)_.push(p0(u,s,T));m={arrayValue:{values:_}}}else m=p0(u,s,f)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||m0(f,d),m=ML(l,o,f,d==="in"||d==="not-in");return pt.create(c,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Rg extends Ig{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Rg(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Kn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)GI(o,u),o=vp(o,u)}(e._query,n),new Ps(e.firestore,e.converter,vp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ag extends KI{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Ag(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new X($.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new X($.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new kl(s,o)}(e._query,this._field,this._direction);return new Ps(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Ko(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function jL(t,e="asc"){const n=e,r=Tg("orderBy",t);return Ag._create(r,n)}function p0(t,e,n){if(typeof(n=rt(n))=="string"){if(n==="")throw new X($.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!HT(e)&&n.indexOf("/")!==-1)throw new X($.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Be.fromString(n));if(!oe.isDocumentKey(r))throw new X($.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return D_(t,new oe(r))}if(n instanceof qt)return D_(t,n._key);throw new X($.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${qh(n)}.`)}function m0(t,e){if(!Array.isArray(t)||t.length===0)throw new X($.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function GI(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new X($.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new X($.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class zL{convertValue(e,n="none"){switch(vs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ht(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ys(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ue()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Rs(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new yg(ht(e.latitude),ht(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Xm(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Al(e));default:return null}}convertTimestamp(e){const n=xi(e);return new _t(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Be.fromString(e);Ve(pI(r));const i=new Pl(r.get(1),r.get(3)),s=new oe(r.popFirst(5));return i.isEqual(n)||Ur(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $L(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class QI extends qI{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new cc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Tg("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class cc extends QI{data(e={}){return super.data(e)}}class BL{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ua(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new cc(this._firestore,this._userDataWriter,r.key,r,new Ua(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new X($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new cc(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ua(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new cc(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ua(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:HL(l.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function HL(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ue()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kp(t){t=pr(t,qt);const e=pr(t.firestore,Mo);return RL(mg(e),t._key).then(n=>JI(e,t,n))}class YI extends zL{constructor(e){super(),this.firestore=e}convertBytes(e){return new Vo(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new qt(this.firestore,null,n)}}function WL(t,e,n){t=pr(t,qt);const r=pr(t.firestore,Mo),i=$L(t.converter,e);return XI(r,[DL(_g(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,dr.none())])}function Qd(t,e,n,...r){t=pr(t,qt);const i=pr(t.firestore,Mo),s=_g(i);let o;return o=typeof(e=rt(e))=="string"||e instanceof Gh?OL(s,"updateDoc",t._key,e,n,r):LL(s,"updateDoc",t._key,e),XI(i,[o.toMutation(t._key,dr.exists(!0))])}function g0(t,...e){var n,r,i;t=rt(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||d0(e[o])||(s=e[o],o++);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(d0(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let u,c,d;if(t instanceof qt)c=pr(t.firestore,Mo),d=Vh(t._key.path),u={next:f=>{e[o]&&e[o](JI(c,t,f))},error:e[o+1],complete:e[o+2]};else{const f=pr(t,Ps);c=pr(f.firestore,Mo),d=f._query;const m=new YI(c);u={next:_=>{e[o]&&e[o](new BL(c,m,f,_))},error:e[o+1],complete:e[o+2]},FL(t._query)}return function(m,_,T,A){const b=new MI(A),I=new PI(_,b,T);return m.asyncQueue.enqueueAndForget(async()=>RI(await Pp(m),I)),()=>{b.Ga(),m.asyncQueue.enqueueAndForget(async()=>AI(await Pp(m),I))}}(mg(c),d,l,u)}function XI(t,e){return function(r,i){const s=new Ti;return r.asyncQueue.enqueueAndForget(async()=>dL(await SL(r),i,s)),s.promise}(mg(t),e)}function JI(t,e,n){const r=n.docs.get(e._key),i=new YI(t);return new QI(t,i,e._key,r,new Ua(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){qo=i})(Is),fs(new Ai("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Mo(new qN(r.getProvider("auth-internal")),new YN(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new X($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Pl(c.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),lr(k_,"4.6.5",e),lr(k_,"4.6.5","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZI="firebasestorage.googleapis.com",eS="storageBucket",qL=2*60*1e3,KL=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st extends kn{constructor(e,n,r=0){super(Yd(e),`Firebase Storage: ${n} (${Yd(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,st.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Yd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var it;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(it||(it={}));function Yd(t){return"storage/"+t}function Pg(){const t="An unknown error occurred, please check the error payload for server response.";return new st(it.UNKNOWN,t)}function GL(t){return new st(it.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function QL(t){return new st(it.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function YL(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new st(it.UNAUTHENTICATED,t)}function XL(){return new st(it.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function JL(t){return new st(it.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function ZL(){return new st(it.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function eO(){return new st(it.CANCELED,"User canceled the upload/download.")}function tO(t){return new st(it.INVALID_URL,"Invalid URL '"+t+"'.")}function nO(t){return new st(it.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function rO(){return new st(it.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+eS+"' property when initializing the app?")}function iO(){return new st(it.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function sO(){return new st(it.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function oO(t){return new st(it.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Cp(t){return new st(it.INVALID_ARGUMENT,t)}function tS(){return new st(it.APP_DELETED,"The Firebase app was deleted.")}function aO(t){return new st(it.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function el(t,e){return new st(it.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Aa(t){throw new st(it.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=mn.makeFromUrl(e,n)}catch{return new mn(e,"")}if(r.path==="")return r;throw nO(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(L){L.path.charAt(L.path.length-1)==="/"&&(L.path_=L.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function c(L){L.path_=decodeURIComponent(L.path)}const d="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",_=new RegExp(`^https?://${f}/${d}/b/${i}/o${m}`,"i"),T={bucket:1,path:3},A=n===ZI?"(?:storage.googleapis.com|storage.cloud.google.com)":n,b="([^?#]*)",I=new RegExp(`^https?://${A}/${i}/${b}`,"i"),S=[{regex:l,indices:u,postModify:s},{regex:_,indices:T,postModify:c},{regex:I,indices:{bucket:1,path:2},postModify:c}];for(let L=0;L<S.length;L++){const F=S[L],x=F.regex.exec(e);if(x){const w=x[F.indices.bucket];let g=x[F.indices.path];g||(g=""),r=new mn(w,g),F.postModify(r);break}}if(r==null)throw tO(e);return r}}class lO{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uO(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function u(){return l===2}let c=!1;function d(...b){c||(c=!0,e.apply(null,b))}function f(b){i=setTimeout(()=>{i=null,t(_,u())},b)}function m(){s&&clearTimeout(s)}function _(b,...I){if(c){m();return}if(b){m(),d.call(null,b,...I);return}if(u()||o){m(),d.call(null,b,...I);return}r<64&&(r*=2);let S;l===1?(l=2,S=0):S=(r+Math.random())*1e3,f(S)}let T=!1;function A(b){T||(T=!0,m(),!c&&(i!==null?(b||(l=2),clearTimeout(i),f(0)):b||(l=1)))}return f(0),s=setTimeout(()=>{o=!0,A(!0)},n),A}function cO(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hO(t){return t!==void 0}function dO(t){return typeof t=="object"&&!Array.isArray(t)}function xg(t){return typeof t=="string"||t instanceof String}function y0(t){return kg()&&t instanceof Blob}function kg(){return typeof Blob<"u"}function v0(t,e,n,r){if(r<e)throw Cp(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Cp(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cg(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function nS(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ss;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ss||(ss={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fO(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pO{constructor(e,n,r,i,s,o,l,u,c,d,f,m=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=f,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((_,T)=>{this.resolve_=_,this.reject_=T,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Mu(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const u=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===ss.NO_ERROR,u=s.getStatus();if(!l||fO(u,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===ss.ABORT;r(!1,new Mu(!1,null,d));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new Mu(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());hO(u)?s(u):s()}catch(u){o(u)}else if(l!==null){const u=Pg();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(i.canceled){const u=this.appDelete_?tS():eO();o(u)}else{const u=ZL();o(u)}};this.canceled_?n(!1,new Mu(!1,null,!0)):this.backoffId_=uO(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&cO(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Mu{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function mO(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function gO(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function yO(t,e){e&&(t["X-Firebase-GMPID"]=e)}function vO(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function _O(t,e,n,r,i,s,o=!0){const l=nS(t.urlParams),u=t.url+l,c=Object.assign({},t.headers);return yO(c,e),mO(c,n),gO(c,s),vO(c,r),new pO(u,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wO(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function EO(...t){const e=wO();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(kg())return new Blob(t);throw new st(it.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function TO(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IO(t){if(typeof atob>"u")throw oO("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sr={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Xd{constructor(e,n){this.data=e,this.contentType=n||null}}function SO(t,e){switch(t){case sr.RAW:return new Xd(rS(e));case sr.BASE64:case sr.BASE64URL:return new Xd(iS(t,e));case sr.DATA_URL:return new Xd(AO(e),PO(e))}throw Pg()}function rS(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function RO(t){let e;try{e=decodeURIComponent(t)}catch{throw el(sr.DATA_URL,"Malformed data URL.")}return rS(e)}function iS(t,e){switch(t){case sr.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw el(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case sr.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw el(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=IO(e)}catch(i){throw i.message.includes("polyfill")?i:el(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class sS{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw el(sr.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=xO(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function AO(t){const e=new sS(t);return e.base64?iS(sr.BASE64,e.rest):RO(e.rest)}function PO(t){return new sS(t).contentType}function xO(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e,n){let r=0,i="";y0(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(y0(this.data_)){const r=this.data_,i=TO(r,e,n);return i===null?null:new ai(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new ai(r,!0)}}static getBlob(...e){if(kg()){const n=e.map(r=>r instanceof ai?r.data_:r);return new ai(EO.apply(null,n))}else{const n=e.map(o=>xg(o)?SO(sr.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)i[s++]=o[l]}),new ai(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oS(t){let e;try{e=JSON.parse(t)}catch{return null}return dO(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kO(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function CO(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function aS(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bO(t,e){return e}class Gt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||bO}}let Vu=null;function NO(t){return!xg(t)||t.length<2?t:aS(t)}function lS(){if(Vu)return Vu;const t=[];t.push(new Gt("bucket")),t.push(new Gt("generation")),t.push(new Gt("metageneration")),t.push(new Gt("name","fullPath",!0));function e(s,o){return NO(o)}const n=new Gt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Gt("size");return i.xform=r,t.push(i),t.push(new Gt("timeCreated")),t.push(new Gt("updated")),t.push(new Gt("md5Hash",null,!0)),t.push(new Gt("cacheControl",null,!0)),t.push(new Gt("contentDisposition",null,!0)),t.push(new Gt("contentEncoding",null,!0)),t.push(new Gt("contentLanguage",null,!0)),t.push(new Gt("contentType",null,!0)),t.push(new Gt("metadata","customMetadata",!0)),Vu=t,Vu}function DO(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new mn(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function LO(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return DO(r,t),r}function uS(t,e,n){const r=oS(e);return r===null?null:LO(t,r,n)}function OO(t,e,n,r){const i=oS(e);if(i===null||!xg(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const d=t.bucket,f=t.fullPath,m="/b/"+o(d)+"/o/"+o(f),_=Cg(m,n,r),T=nS({alt:"media",token:c});return _+T})[0]}function MO(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class cS{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hS(t){if(!t)throw Pg()}function VO(t,e){function n(r,i){const s=uS(t,i,e);return hS(s!==null),s}return n}function UO(t,e){function n(r,i){const s=uS(t,i,e);return hS(s!==null),OO(s,i,t.host,t._protocol)}return n}function dS(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=XL():i=YL():n.getStatus()===402?i=QL(t.bucket):n.getStatus()===403?i=JL(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function FO(t){const e=dS(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=GL(t.path)),s.serverResponse=i.serverResponse,s}return n}function jO(t,e,n){const r=e.fullServerUrl(),i=Cg(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,l=new cS(i,s,UO(t,n),o);return l.errorHandler=FO(e),l}function zO(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function $O(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=zO(null,e)),r}function BO(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let S="";for(let L=0;L<2;L++)S=S+Math.random().toString().slice(2);return S}const u=l();o["Content-Type"]="multipart/related; boundary="+u;const c=$O(e,r,i),d=MO(c,n),f="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,m=`\r
--`+u+"--",_=ai.getBlob(f,r,m);if(_===null)throw iO();const T={name:c.fullPath},A=Cg(s,t.host,t._protocol),b="POST",I=t.maxUploadRetryTime,v=new cS(A,b,VO(t,n),I);return v.urlParams=T,v.headers=o,v.body=_.uploadData(),v.errorHandler=dS(e),v}class HO{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ss.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ss.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ss.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Aa("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Aa("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Aa("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Aa("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Aa("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class WO extends HO{initXhr(){this.xhr_.responseType="text"}}function fS(){return new WO}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e,n){this._service=e,n instanceof mn?this._location=n:this._location=mn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new _s(e,n)}get root(){const e=new mn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return aS(this._location.path)}get storage(){return this._service}get parent(){const e=kO(this._location.path);if(e===null)return null;const n=new mn(this._location.bucket,e);return new _s(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw aO(e)}}function qO(t,e,n){t._throwIfRoot("uploadBytes");const r=BO(t.storage,t._location,lS(),new ai(e,!0),n);return t.storage.makeRequestWithTokens(r,fS).then(i=>({metadata:i,ref:t}))}function KO(t){t._throwIfRoot("getDownloadURL");const e=jO(t.storage,t._location,lS());return t.storage.makeRequestWithTokens(e,fS).then(n=>{if(n===null)throw sO();return n})}function GO(t,e){const n=CO(t._location.path,e),r=new mn(t._location.bucket,n);return new _s(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QO(t){return/^[A-Za-z]+:\/\//.test(t)}function YO(t,e){return new _s(t,e)}function pS(t,e){if(t instanceof bg){const n=t;if(n._bucket==null)throw rO();const r=new _s(n,n._bucket);return e!=null?pS(r,e):r}else return e!==void 0?GO(t,e):t}function XO(t,e){if(e&&QO(e)){if(t instanceof bg)return YO(t,e);throw Cp("To use ref(service, url), the first argument must be a Storage instance.")}else return pS(t,e)}function _0(t,e){const n=e==null?void 0:e[eS];return n==null?null:mn.makeFromBucketSpec(n,t)}function JO(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:jE(i,t.app.options.projectId))}class bg{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=ZI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=qL,this._maxUploadRetryTime=KL,this._requests=new Set,i!=null?this._bucket=mn.makeFromBucketSpec(i,this._host):this._bucket=_0(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=mn.makeFromBucketSpec(this._url,e):this._bucket=_0(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){v0("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){v0("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new _s(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new lO(tS());{const o=_O(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const w0="@firebase/storage",E0="0.12.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mS="storage";function ZO(t,e,n){return t=rt(t),qO(t,e,n)}function eM(t){return t=rt(t),KO(t)}function tM(t,e){return t=rt(t),XO(t,e)}function nM(t=Fm(),e){t=rt(t);const r=bh(t,mS).getImmediate({identifier:e}),i=VE("storage");return i&&rM(r,...i),r}function rM(t,e,n,r={}){JO(t,e,n,r)}function iM(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new bg(n,r,i,e,Is)}function sM(){fs(new Ai(mS,iM,"PUBLIC").setMultipleInstances(!0)),lr(w0,E0,""),lr(w0,E0,"esm2017")}sM();const oM={apiKey:"AIzaSyAoB7jPca5UoD--vYdTE43HDZgqrwmDJBI",authDomain:"icecreamfactory-fbe1b.firebaseapp.com",projectId:"icecreamfactory-fbe1b",storageBucket:"icecreamfactory-fbe1b.appspot.com",messagingSenderId:"33392143586",appId:"1:33392143586:web:d8d0bec618cd4c377602bb"},Ng=BE(oM),ws=$N(Ng),aM=nM(Ng),io=kL(Ng);function lM({children:t}){return ws.currentUser===null?V.jsx(Rx,{to:"/login"}):V.jsx(V.Fragment,{children:t})}const uM=se.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,cM=se.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  opacity: 0;
  transition: all 0.1s linear;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 24px;
  .first,
  .second {
    position: absolute;
    width: 65%;
    height: 100vh;
    top: -100%;
    left: 50%;
    transform: translateX(-50%);
    background-color: #ffba00;
    transition: all 0.2s;
  }
  .second {
    width: 100%;
    background-color: #ffde53;
    transition-delay: 0.3s;
  }
  img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    z-index: 13;
    opacity: 0;
    transition: all 0.1s linear 1s;
    object-fit: cover;
  }
  @media all and (max-width: 1400px) {
    font-size: 1.6em;
  }
  span {
    font-size: 30px;
    font-weight: 900;
    color: #fff;
    opacity: 0;
    transition: all 0.1s linear 1s;
    transform: translateY(-20px) scale(1);
    z-index: 12;
  }
  &.active {
    opacity: 1;
    z-index: 11;
    img,
    span {
      opacity: 1;
      transform: translateY(0) scale(1.2);
    }

    .first,
    .second {
      top: 0;
    }
  }
`,hM=se.header`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0 30px;
  margin-top: 30px;
  padding-bottom: 20px;
  @media all and (max-width: 1024px) {
    padding: 0 16px;
    margin-top: 20px;
    align-items: center;
  }
`,dM=se.div`
  width: 100%;
  max-width: 370px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  cursor: pointer;
`,fM=se.div`
  width: 80px;
  min-width: 80px;
  aspect-ratio: 1 / 1;
  border-radius: 22px;
  border: 7px solid #1f0c1f;
  background-color: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 1;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media all and (max-width: 1024px) {
    width: 60px;
    min-width: 60px;
    border-radius: 16px;
    border: 7px solid #1f0c1f;
  }
`,pM=se.div`
  height: 66px;
  border-radius: 0 9px 9px 0;
  background-color: #2c211b;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 13px 20px;
  transform: translateX(-7px);
  .textWrap {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 4px;
    span {
      font-size: 16px;
      color: #fff;
      font-weight: 900;
      text-shadow: -1px 0px #050000, 0px 1px #050000, 1px 0px #050000,
        0px -1px #050000;
    }
  }
  @media all and (max-width: 1024px) {
    height: 46px;
    padding: 0 11px 0 14px;
    span {
      font-size: 14px;
    }
  }
`,mM=se.button`
  border: none;
  background: none;
  padding: 0;
  margin-left: 20px;
  cursor: pointer;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.1s linear;
  &:hover {
    transform: translateX(5px);
  }
`,gM=se.div`
  width: 100%;
  max-width: 370px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  .title {
    width: 100%;
    max-width: 140px;
    height: 38px;
    background-color: #f11532;
    border: 3px solid #b70000;
    border-radius: 5px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 3px #b70000;
    margin-bottom: 46px;
    @media all and (max-width: 1024px) {
      margin-bottom: 26px;
    }
    span {
      color: #fff;
      font-weight: 900;
      font-size: 16px;
    }
    &::after,
    &::before {
      content: "";
      width: 8px;
      height: 8px;
      background-color: #fff;
      border-radius: 50%;
      border: 1px solid #b70000;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
    &::after {
      left: 9px;
    }
    &::before {
      right: 9px;
    }
  }
  @media all and (max-width: 1024px) {
    position: absolute;
    left: 50%;
    top: 93px;
    transform: translateX(-50%);
  }
`,yM=se.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: 100%;
`,vM=se.div`
  width: 100%;
  max-width: 114px;
  background-color: #2c211b;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  align-items: center;
  gap: 7px;
  padding: 26px 0 16px;
  position: relative;
  &::after {
    content: "";
    width: 28px;
    height: 30px;
    display: block;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
  }
  span {
    color: #fff;
    font-size: 20px;
    font-weight: 900;
  }
  &.first {
    outline: 3px solid #fff4e1;
    border: 3px solid #ffb300;
    background-color: #ffce5b;
    order: 1;
    box-shadow: 0 2px 12px #ff3d00;
    &::after {
      background: url(/img/ico_1st_badge.svg) no-repeat center / contain;
      top: -4px;
    }
    span {
      color: #392b20;
    }
  }
  &.second {
    order: 0;
    transform: translateY(20px);
    &::after {
      background: url(/img/ico_2nd_badge.svg) no-repeat center / contain;
      top: 0;
    }
  }
  &.third {
    order: 2;
    transform: translateY(20px);
    &::after {
      background: url(/img/ico_3rd_badge.svg) no-repeat center / contain;
      top: 0;
    }
  }
`,_M=se.div`
  width: 100%;
  max-width: 370px;
  display: flex;
  padding-top: 20px;
  justify-content: flex-end;
  button {
    width: 44px;
    height: 44px;
    border: 3px solid #211208;
    border-radius: 9px;
    background-color: #3b2e26;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    cursor: pointer;
    transition: all 0.1s linear;
    &:hover {
      transform: translateY(-5px);
    }
  }
  @media all and (max-width: 1024px) {
    width: auto;
    max-width: unset;
    padding-top: 0;
  }
`,wM=se.div`
  width: 100%;
  max-width: 480px;
  display: flex;
  justify-content: center;
  margin-top: 45px;
  gap: 16px;
  @media all and (max-width: 1024px) {
    padding: 0 16px;
    margin-top: 240px;
  }
  .title {
    font-size: 14px;
    color: #333;
    font-weight: 900;
  }
  .object {
    padding-top: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
  }
`,gS=se.div`
  width: 100%;
  max-width: 230px;
  aspect-ratio: 1 / 1.618;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  border: 2px solid #3f2d23;
  background-color: #f0e3c3;
  border-radius: 22px;
  box-shadow: 0 5px #3f2d23, 0 10px rgba(63, 45, 35, 0.5);
  padding: 20px 44px;
  position: relative;
  gap: 24px;
  &::after {
    content: "";
    width: 42px;
    height: 50px;
    display: block;
    background: url(/img/ico_clip.svg) no-repeat center / cover;
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%, -50%);
  }
  .title {
    color: #222;
    font-size: 14px;
    margin-bottom: 12px;
  }
`,T0=se.div`
  width: 100%;
  height: 198px;
  position: relative;
  > div {
    position: absolute;
  }
  .one {
    bottom: 0;
    z-index: 0;
  }
  .two {
    bottom: 28px;
    z-index: 1;
  }
  .three {
    bottom: 56px;
    z-index: 2;
  }
  .four {
    bottom: 84px;
    z-index: 3;
  }
  .five {
    bottom: 112px;
    z-index: 4;
  }
  .six {
    bottom: 140px;
    z-index: 5;
  }
`,EM=se(gS)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 24px;
  .object {
    > div {
      bottom: 0;
      width: 100%;
      height: 100%;
      > div {
        position: absolute;
        &.one {
          bottom: 0;
        }
      }
    }
  }
`,TM=se.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 392px;
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  gap: 20px;
  padding: 0 16px;
  z-index: 10;
  .buttons {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    width: 100%;
  }
  span {
    font-size: 14px;
    color: #fff;
    font-weight: 900;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-name: slide;
    animation-direction: alternate;
    @media all and (max-width: 1024px) {
      display: none;
    }
    @keyframes slide {
      from {
        transform: translateY(0);
      }

      to {
        transform: translateY(5px);
      }
    }
  }
`,I0=se.div`
  width: 100%;
  max-width: 164px;
  aspect-ratio: 140 /83;
  &.strawberry {
    background: url(/img/ico_icecream_strawberry.svg) no-repeat center / cover;
  }
  &.choco {
    background: url(/img/ico_icecream_choco.svg) no-repeat center / cover;
  }
  &.mint {
    background: url(/img/ico_icecream_mint.svg) no-repeat center / cover;
  }
  &.vanilla {
    background: url(/img/ico_icecream_vanilla.svg) no-repeat center / cover;
  }
  &.blueberry {
    background: url(/img/ico_icecream_blueberry.svg) no-repeat center / cover;
  }
  &.greentea {
    background: url(/img/ico_icecream_greentea.svg) no-repeat center / cover;
  }
  &.active {
    animation-duration: 200ms;
    animation-name: wiggle;
  }
  &.wiggle {
    animation-duration: 1s;
    animation-name: wiggle;
    animation-iteration-count: infinite;
  }
  @keyframes wiggle {
    from {
      transform: scaleX(1) scaleY(1);
    }
    50% {
      transform: scaleX(0.9) scaleY(1.1);
    }
    to {
      transform: scaleX(1) scaleY(1);
    }
  }
`,IM=se.button`
  color: #fff;
  border: none;
  width: 100%;
  padding: 0;
  max-width: 112px;
  aspect-ratio: 112 / 96;
  transition: all 0.2s linear;
  cursor: pointer;
  &:hover {
    transform: scale(1.1) translateY(-5px);
  }
  @media all and (max-width: 1024px) {
    &:hover {
      transform: unset;
    }
  }
  &.strawberry {
    background: url(/img/button_strawberry.svg) no-repeat center / contain;
  }
  &.choco {
    background: url(/img/button_choco.svg) no-repeat center / cover;
  }
  &.mint {
    background: url(/img/button_mint.svg) no-repeat center / cover;
  }
  &.vanilla {
    background: url(/img/button_vanilla.svg) no-repeat center / cover;
  }
  &.blueberry {
    background: url(/img/button_blueberry.svg) no-repeat center / cover;
  }
  &.greentea {
    background: url(/img/button_greentea.svg) no-repeat center / cover;
  }
`;se.div`
  background: #fff5db;
  border-radius: 44px;
  padding: 24px;
  width: 100%;
  max-width: 396px;
  position: fixed;
  top: 90px;
  left: 60px;
  border: 2px solid #a87b00;
  box-shadow: 0px 17px #cbbf93;
  .title {
    font-size: 18px;
    color: #444;
    font-weight: 900;
    text-align: center;
    margin-bottom: 24px;
  }

  @media all and (max-width: 1400px) {
    position: static;
    padding: 0;
    border: none;
    box-shadow: none;
    background-color: unset;
    max-width: unset;
    padding: 0 16px;
    max-width: 392px;
  }
`;se.div`
  width: 100%;
  overflow-y: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 17px 10px;
  padding-bottom: 20px;
  max-height: 700px;
  @media all and (max-width: 1400px) {
    display: flex;
    flex-direction: column;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;se.div`
  width: 100px;
  height: 120px;
  min-width: 100px;
  min-height: 120px;
  border-radius: 10px;
  border: 1px solid #edddcc;
  background-color: #fff3e6;
  display: flex;
  flex-direction: column;
  padding: 0 14px;
  box-shadow: 0px 7px #e2d2c0;
  @media all and (max-width: 1400px) {
    width: 100%;
    height: 38px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    min-width: unset;
    min-height: unset;
    box-shadow: 0px 3px #e2d2c0;
  }
  &.first {
    border-color: #e0a400;
    background-color: #ffd972;
    box-shadow: 0px 7px #e2b641;
    .wrap {
      border-color: #ffeab2;
    }
  }
  &.second {
    border-color: #bebebe;
    background-color: #ebebeb;
    box-shadow: 0px 7px #a2a2a2;
    .wrap {
      border-color: #d8d8d8;
    }
  }
  &.third {
    border-color: #d0ad89;
    background-color: #eacaa9;
    box-shadow: 0px 7px #be9a76;
    .wrap {
      border-color: #d0b99d;
    }
  }
  .wrap {
    margin-top: 12px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 6px;
    border-bottom: 1px solid #edd7bf;
    padding-bottom: 14px;
    @media all and (max-width: 1400px) {
      margin-top: 0;
      gap: 12px;
      flex-direction: row;
      align-items: center;
      padding-bottom: 0;
    }
    .index {
      text-shadow: -1px 0px #444, 0px 1px #444, 1px 0px #444, 0px -1px #444;
      font-size: 18px;
      font-weight: 900;
      color: #ffffff;
    }
    .name {
      display: block;
      width: 100%;
      text-align: center;
      color: #444;
      font-weight: 900;
      font-size: 16px;
    }
  }
  .score {
    display: block;
    text-align: center;
    color: #444;
    font-weight: 900;
    font-size: 30px;
    margin-top: 11px;
    @media all and (max-width: 1400px) {
      margin-top: 0;
      font-size: 24px;
    }
  }
`;const SM=se.div`
  width: 100%;
  height: 100%;
  min-height: 100px;
  color: 333;
  font-size: 16px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`,RM=se.div`
  width: 100%;
  height: 130px;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: -1;
  border-top: 2px solid #415615;
  background-color: #728e36;
  &::before {
    content: "";
    width: 100%;
    height: 12px;
    background-color: #adb337;
    position: absolute;
  }
  &::after {
    content: "";
    width: 100%;
    height: 24px;
    top: 12px;
    background-color: #819f25;
    position: absolute;
  }
  @media all and (max-width: 1024px) {
    height: 98px;
  }
`,AM=se.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.9);
  top: 0;
  left: 0;
  z-index: 100;
  padding: 42px 16px 0;
  display: flex;
  justify-content: center;
`,PM=se.button`
  width: 44px;
  height: 44px;
  border: 3px solid #c83517;
  border-radius: 9px;
  background-color: #f84c4c;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  position: fixed;
  top: 30px;
  right: 30px;
  cursor: pointer;
  transition: all 0.1s linear;
  &:hover {
    transform: translateY(-5px);
  }
`,xM=se.div`
  width: 100%;
  max-width: 480px;
`,kM=se.p`
  color: #fff;
  font-size: 20px;
  font-weight: 900;
  text-align: center;
  height: 34px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
`,CM=se.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  padding-top: 32px;
  gap: 16px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`,bM=se.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .wrap {
    display: flex;
    align-items: center;
  }
  span {
    color: #fff;
    font-size: 20px;
    font-weight: 900;
  }
  .index {
    margin-right: 18px;
  }
  .photo {
    width: 40px;
    height: 40px;
    border-radius: 8px;
    object-fit: cover;
    margin-right: 8px;
  }
`;function NM(t){const{onClick:e,rankList:n}=t;return V.jsxs(AM,{children:[V.jsx(PM,{onClick:e,children:V.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:V.jsxs("g",{id:"그룹_30","data-name":"그룹 30",transform:"translate(-1844 -55)",children:[V.jsx("rect",{id:"사각형_21","data-name":"사각형 21",width:"24",height:"24",transform:"translate(1844 55)",fill:"none"}),V.jsxs("g",{id:"close_FILL0_wght400_GRAD0_opsz48",transform:"translate(1837.65 48.65)",fill:"#fff",strokeLinecap:"round",strokeLinejoin:"round",children:[V.jsx("path",{d:"M 25.11923027038574 27.05710792541504 L 24.76568031311035 26.70354843139648 L 18.35000038146973 20.28786849975586 L 11.9343204498291 26.70354843139648 L 11.58077049255371 27.05710792541504 L 11.22722053527832 26.70354843139648 L 9.996450424194336 25.4727783203125 L 9.642889976501465 25.11922836303711 L 9.996450424194336 24.76567840576172 L 16.41213035583496 18.34999847412109 L 9.996450424194336 11.93431854248047 L 9.642889976501465 11.58076858520508 L 9.996450424194336 11.22721862792969 L 11.22722053527832 9.996448516845703 L 11.58077049255371 9.642888069152832 L 11.9343204498291 9.996448516845703 L 18.35000038146973 16.41212844848633 L 24.76568031311035 9.996448516845703 L 25.11923027038574 9.642888069152832 L 25.47278022766113 9.996448516845703 L 26.70355033874512 11.22721862792969 L 27.05710983276367 11.58076858520508 L 26.70355033874512 11.93431854248047 L 20.28787040710449 18.34999847412109 L 26.70355033874512 24.76567840576172 L 27.05710983276367 25.11922836303711 L 26.70355033874512 25.4727783203125 L 25.47278022766113 26.70354843139648 L 25.11923027038574 27.05710792541504 Z",stroke:"none"}),V.jsx("path",{d:"M 25.11923027038574 26.34999847412109 L 26.35000038146973 25.11922836303711 L 19.58077049255371 18.34999847412109 L 26.35000038146973 11.58076858520508 L 25.11923027038574 10.34999847412109 L 18.35000038146973 17.11922836303711 L 11.58077049255371 10.34999847412109 L 10.35000038146973 11.58076858520508 L 17.11923027038574 18.34999847412109 L 10.35000038146973 25.11922836303711 L 11.58077049255371 26.34999847412109 L 18.35000038146973 19.58076858520508 L 25.11923027038574 26.34999847412109 M 25.11923027038574 27.34999847412109 C 24.86330795288086 27.34999847412109 24.60738563537598 27.25236892700195 24.4121208190918 27.05710792541504 L 18.35000038146973 20.9949893951416 L 12.28787994384766 27.05710792541504 C 11.8973503112793 27.44762992858887 11.26419162750244 27.44762992858887 10.87366008758545 27.05710792541504 L 9.642889976501465 25.82633781433105 C 9.252370834350586 25.4358081817627 9.252370834350586 24.80264854431152 9.642889976501465 24.41211891174316 L 15.70501041412354 18.34999847412109 L 9.642889976501465 12.28787803649902 C 9.252370834350586 11.89734840393066 9.252370834350586 11.26418876647949 9.642889976501465 10.87365818023682 L 10.87366008758545 9.642888069152832 C 11.26419162750244 9.252367973327637 11.8973503112793 9.252367973327637 12.28787994384766 9.642888069152832 L 18.35000038146973 15.7050085067749 L 24.4121208190918 9.642888069152832 C 24.80265045166016 9.252367973327637 25.43581008911133 9.252367973327637 25.82633972167969 9.642888069152832 L 27.05710983276367 10.87365818023682 C 27.44762992858887 11.26418876647949 27.44762992858887 11.89734840393066 27.05710983276367 12.28787803649902 L 20.99499130249023 18.34999847412109 L 27.05710983276367 24.41211891174316 C 27.44762992858887 24.80264854431152 27.44762992858887 25.4358081817627 27.05710983276367 25.82633781433105 L 25.82633972167969 27.05710792541504 C 25.63107490539551 27.25236892700195 25.37515258789062 27.34999847412109 25.11923027038574 27.34999847412109 Z",stroke:"none",fill:"#fff"})]})]})})}),V.jsxs(xM,{children:[V.jsx(kM,{children:"순위"}),V.jsx(CM,{children:n.map((r,i)=>V.jsxs(bM,{children:[V.jsxs("div",{className:"wrap",children:[V.jsxs("span",{className:"index",children:[i+1,"등"]}),V.jsx("img",{className:"photo",src:r.photoURL,alt:"프로필 이미지"}),V.jsx("span",{className:"name",children:r.userName})]}),V.jsx("span",{className:"score",children:r.score})]},i))})]})]})}const S0=nh(io,"icecream","Mtu2EMz2fp8FKkItKQm5"),Jd=[0,1,2,3,4,5];function DM(){const t=ws.currentUser,e=t==null?void 0:t.uid,n=t==null?void 0:t.displayName,r=t==null?void 0:t.photoURL,i=Bo(),[s,o]=j.useState(!0),[l,u]=j.useState(!1),[c,d]=j.useState([]),[f,m]=j.useState([]),[_,T]=j.useState([]),[A,b]=j.useState(""),[I,v]=j.useState(Jd),[S,L]=j.useState(!1),[F,x]=j.useState(),w=async()=>{o(!0);try{const Z=f0(h0(io,"icecream")),Y=f0(h0(io,"rank"),jL("score","desc"));await g0(Z,W=>{const Q=W.docs.map(ne=>ne.data());L(Q[0].loadingState),m(Q[0].recipe),b(Q[0].lastUser)}),await g0(Y,W=>{const Q=W.docs.map(ne=>ne.data());d(Q)})}catch(Z){console.log(Z)}finally{o(!1)}},g=Z=>{const Y=[..._,Z];T(Y)},E=Z=>{let Y=Z.slice();for(let W=Y.length-1;W>0;W--){const Q=Math.floor(Math.random()*(W+1));[Y[W],Y[Q]]=[Y[Q],Y[W]]}return Y},R=()=>{const Z=E(Jd);v(Z)},k=async()=>{try{await ws.signOut(),i("/login")}catch(Z){console.error("Error signing out: ",Z)}},N=async()=>{const Z=nh(io,"rank",e),Y=await kp(Z);if(Y.exists()){const W=Y.data().score||0;x(W)}else x(0)},P=async()=>{const Z=nh(io,"rank",e),Y=await kp(Z);if(Y.exists()){const Q=(Y.data().score||0)+1;await Qd(Z,{score:Q,photoURL:r,userName:n}),x(Q)}else await WL(Z,{score:1,userName:n||"Unknown User",photoURL:r}),x(1)},me=async()=>{if(T([]),f.length!==_.length)return!1;for(let Z=0;Z<f.length;Z++)if(f[Z]!==_[Z])return!1;try{await Qd(S0,{loadingState:!0,lastUser:n}),P()}catch(Z){console.log(Z)}finally{const Z=E(Jd);setTimeout(()=>{Qd(S0,{loadingState:!1,recipe:Z})},2e3)}},ot=()=>{u(!l)};return j.useEffect(()=>{w(),N()},[]),j.useEffect(()=>{_.length===6&&(me(),R())},[_]),V.jsxs(V.Fragment,{children:[V.jsxs(uM,{children:[V.jsxs(cM,{className:S?"active":"",children:[r?V.jsx("img",{src:r,alt:"프로필 이미지"}):"",V.jsxs("span",{className:"text",children:[A," 성공!!"]}),V.jsx("div",{className:"second"}),V.jsx("div",{className:"first"})]}),V.jsxs(hM,{children:[V.jsxs(dM,{onClick:()=>{i("/profile")},children:[V.jsx(fM,{title:"마이페이지 바로가기",children:r?V.jsx("img",{src:r,alt:"프로필 이미지"}):""}),V.jsxs(pM,{title:"마이페이지 바로가기",children:[V.jsxs("div",{className:"textWrap",children:[V.jsx("span",{children:n}),V.jsx("span",{children:F})]}),V.jsx(mM,{title:"\b로그아웃",onClick:()=>{k()},children:V.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:V.jsxs("g",{id:"그룹_1","data-name":"그룹 1",transform:"translate(-254 -60)",children:[V.jsx("path",{id:"logout_24dp_5F6368_FILL0_wght400_GRAD0_opsz24",d:"M121.778-824a1.712,1.712,0,0,1-1.256-.522,1.712,1.712,0,0,1-.522-1.256v-12.444a1.712,1.712,0,0,1,.522-1.256,1.712,1.712,0,0,1,1.256-.522H128v1.778h-6.222v12.444H128V-824Zm9.778-3.556-1.222-1.289,2.267-2.267h-7.267v-1.778H132.6l-2.267-2.267,1.222-1.289L136-832Z",transform:"translate(138 904)",fill:"#fff",stroke:"#fff",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1"}),V.jsx("rect",{id:"사각형_4","data-name":"사각형 4",width:"24",height:"24",transform:"translate(254 60)",fill:"none"})]})})})]})]}),V.jsxs(gM,{children:[V.jsx("div",{className:"title",children:V.jsx("span",{children:"명예의 전당"})}),V.jsx(yM,{children:c.slice(0,3).map((Z,Y)=>V.jsxs(vM,{className:`${Y===0?"first":Y===1?"second":Y===2?"third":""}`,children:[V.jsx("span",{children:Z.userName}),V.jsx("span",{children:Z.score})]},Y))})]}),V.jsx(_M,{children:V.jsx("button",{title:"랭킹 보기",onClick:()=>{ot()},children:V.jsx("img",{src:"/img/ico_rank.svg",alt:"랭킹리스트 보기"})})})]}),V.jsx(wM,{children:s?V.jsx(SM,{children:"Loading..."}):V.jsxs(V.Fragment,{children:[V.jsx(gS,{children:V.jsxs(V.Fragment,{children:[V.jsx(T0,{className:"object",children:f.map((Z,Y)=>V.jsx(I0,{className:`${Z===0?"strawberry":Z===1?"choco":Z===2?"mint":Z===3?"vanilla":Z===4?"blueberry":"greentea"} ${Y===0?"one":Y===1?"two":Y===2?"three":Y===3?"four":Y===4?"five":"six"} wiggle`},Y))}),V.jsx("p",{className:"title",children:"만들어주세요!"})]})}),V.jsx(EM,{children:V.jsxs(V.Fragment,{children:[V.jsx(T0,{className:"object",children:V.jsx("div",{className:`${_.length===1?"first":_.length===2?"second":_.length===3?"third":_.length===4?"fourth":_.length===5?"fifth":"sixth"}`,children:_.map((Z,Y)=>V.jsx(I0,{className:`
                              ${Y+1===_.length?"active":""}
                              ${Z===0?"strawberry":Z===1?"choco":Z===2?"mint":Z===3?"vanilla":Z===4?"blueberry":"greentea"} ${Y===0?"one":Y===1?"two":Y===2?"three":Y===3?"four":Y===4?"five":"six"}`},Y))})}),V.jsx("p",{className:"title",children:"나의 조합"})]})})]})}),V.jsxs(TM,{children:[V.jsx("div",{className:"buttons",children:I.map(Z=>V.jsx(IM,{className:Z===0?"strawberry":Z===1?"choco":Z===2?"mint":Z===3?"vanilla":Z===4?"blueberry":"greentea",onClick:()=>g(Z)},Z))}),V.jsx("span",{children:"SELECT ME!!!"})]})]}),l&&V.jsx(NM,{onClick:()=>{ot()},rankList:c}),V.jsx(RM,{})]})}const LM=se.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 30px 16px 0;
`,OM=se.div`
  border: 2px solid #1c1108;
  background-color: #392b20;
  padding: 6px 11px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
  span {
    font-weight: 900;
    color: #fff;
    font-size: 16px;
  }
`,MM=se.div`
  width: 100%;
  max-width: 320px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f0e3c3;
  border: 2px solid #3f2d23;
  position: relative;
  box-shadow: 0 6px #3f2d23, 0 11px rgba(63, 45, 35, 0.5);
  padding: 60px 30px 30px;
  &::after {
    content: "";
    width: 42px;
    height: 50px;
    display: block;
    background: url(/img/ico_clip.svg) no-repeat center / cover;
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%, -50%);
  }
`,VM=se.div`
  width: 90px;
  height: 90px;
  border-radius: 23px;
  background-color: #e2b97e;
  border: 3px solid #1c1108;
  margin-bottom: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
`,UM=se.label`
  width: 90px;
  height: 90px;
  overflow: hidden;
  border-radius: 23px;
  background-color: #e2b97e;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid #1c1108;
  margin-bottom: 38px;
  transition: all 0.1s linear;
  &:hover {
    transform: translateY(-5px);
  }
  &.empty {
    &::after {
      content: "";
      width: 40px;
      height: 40px;
      display: block;
      background: url(/img/ico_camera.svg) no-repeat center / cover;
      position: absolute;
    }
  }
`,FM=se.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,jM=se.input`
  display: none;
`;se.h1`
  font-size: 24px;
  font-weight: 900;
  color: #333;
`;const zM=se.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,R0=se.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  margin-bottom: 26px;
`,A0=se.p`
  font-size: 16px;
  color: #333;
  font-weight: 900;
`,P0=se.p`
  font-size: 14px;
  color: #6a5e55;
  font-weight: 900;
`,$M=se.img`
  width: 100%;
  max-width: 260px;
`,BM=se.p`
  font-size: 14px;
  font-weight: 900;
  color: #c1b18a;
  text-align: center;
  letter-spacing: -1.5px;
  padding-top: 22px;
`,HM=se.button`
  width: 112px;
  height: 80px;
  background: url(/img/ico_button_bg.svg) no-repeat center / contain;
  border: none;
  color: #fff;
  font-size: 16px;
  font-weight: 900;
  margin-top: 56px;
  cursor: pointer;
  transition: all 0.1s linear;
  &:hover {
    transform: translateY(-5px);
  }
`;function WM(){const t=ws.currentUser,[e,n]=j.useState(!0),[r,i]=j.useState(!1),[s,o]=j.useState(),[l,u]=j.useState(t==null?void 0:t.photoURL),[c,d]=j.useState(`${(t==null?void 0:t.displayName)??"Anonymous"}`),f=Bo(),m=async()=>{var T;n(!0);try{const A=await kp(nh(io,"rank",t.uid));if(!A.exists())o(0);else{const b=((T=A.data())==null?void 0:T.score)||0;o(b)}}catch(A){console.log(A)}finally{n(!1)}},_=async T=>{const{files:A}=T.target;if(t&&A&&A.length===1){i(!0);try{const b=A[0],I=tM(aM,`avatars/${t==null?void 0:t.uid}`),v=await ZO(I,b),S=await eM(v.ref);u(S),await mT(t,{photoURL:S})}catch(b){console.log(b)}finally{i(!1)}}};return j.useEffect(()=>{m()},[]),V.jsxs(LM,{children:[V.jsx(OM,{children:V.jsx("span",{children:"마이페이지"})}),V.jsx(MM,{children:V.jsxs(zM,{children:[r?V.jsx(VM,{children:"로딩 중"}):V.jsxs(V.Fragment,{children:[V.jsx(UM,{htmlFor:"avatar",className:l?"":"empty",children:l&&V.jsx(FM,{src:l})}),V.jsx(jM,{onChange:_,id:"avatar",type:"file",accept:"image/*"})]}),V.jsxs(R0,{children:[V.jsx(P0,{children:"닉네임"}),V.jsx(A0,{children:c})]}),V.jsxs(R0,{children:[V.jsx(P0,{children:"점수"}),V.jsx(A0,{children:e?"점수 가져오는 중 ...":s})]}),V.jsx($M,{src:"/img/ico_code_deco.svg",alt:"바코드 데코레이션"}),V.jsxs(BM,{children:["PID | ",t.uid]})]})}),V.jsx(HM,{onClick:()=>{f("/")},children:"확인"})]})}const qM=se.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: all 200ms;
  opacity: 1;
  &.hidden {
    opacity: 0;
  }
  h1 {
    position: fixed;
    z-index: 99;
    text-align: center;
    color: #fff;
    font-size: 100px;
    font-weight: 900;
    letter-spacing: -1.5px;
    line-height: 90px;
    text-shadow: 0 6px 4px rgba(0, 0, 0, 0.16);
    transform: rotate(-10deg);
    top: 2em;
    opacity: 0;
    animation: combined 200ms cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
    animation-fill-mode: forwards;
    animation-delay: 500ms;
    @media all and (max-width: 620px) {
      font-size: 70px;
      line-height: 60px;
    }
    @keyframes combined {
      0% {
        opacity: 0;
        transform: rotate(-10deg) scale(2);
      }
      50% {
        opacity: 1;
      }
      100% {
        opacity: 1;
        transform: rotate(-10deg) scale(1);
      }
    }
  }
  .first {
    width: 70%;
    height: 100%;
    background-color: #ffde53;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    animation-name: slide;
    animation-duration: 200ms;
    animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
    @media all and (max-width: 728px) {
      width: 80%;
    }
    @keyframes slide {
      from {
        top: -100%;
      }
      to {
        top: 0;
      }
    }
  }
  .second {
    width: 40%;
    height: 100%;
    background-color: #ffba00;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    animation-name: slide2nd;
    animation-duration: 200ms;
    animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
    @media all and (max-width: 728px) {
      width: 60%;
    }
    @keyframes slide2nd {
      from {
        top: 100%;
      }
      to {
        top: 0;
      }
    }
  }
`,yS=se.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 0 16px;
`,vS=se.div`
  margin-top: 8em;
  width: 100%;
  max-width: 480px;
  background-color: #fff;
  border-radius: 40px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.16);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px 24px;
  opacity: 0;
  transition: all 200ms linear;
  &.action {
    opacity: 1;
  }
`,_S=se.form`
  width: 100%;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;se.p`
  font-size: 40px;
  font-weight: 900;
  color: #ff3636;
  letter-spacing: -2px;
  margin-bottom: 120px;
`;const wS=se.h1`
  font-size: 24px;
  color: #333;
`,es=se.input`
  height: 40px;
  padding: 0 16px;
  border-radius: 16px;
  border: 1px solid #ccc;
  &.createBtn {
    border: none;
    background-color: #ff3636;
    color: #fff;
    border-radius: 24px;
    cursor: pointer;
    transition: all 0.1s linear;
    font-size: 14px;
    font-weight: 900;
  }
  &.createBtn:hover {
    background-color: #f61f1f;
  }
`,ES=se.span`
  margin-top: 6px;
  font-weight: 600;
  color: tomato;
`,TS=se.span`
  margin-top: 20px;
  font-size: 12px;
`;function KM(){const t=Bo(),[e,n]=j.useState(!1),[r,i]=j.useState(!0),[s,o]=j.useState(""),[l,u]=j.useState(""),[c,d]=j.useState(""),f=_=>{const{target:{name:T,value:A}}=_;T==="email"?o(A):T==="password"&&u(A)},m=async _=>{if(_.preventDefault(),d(""),!(e||s===""||l===""))try{n(!0),await Pb(ws,s,l),t("/")}catch(T){T instanceof kn&&(console.log(T.code,T.message),d(T.message))}finally{n(!1)}};return j.useEffect(()=>{setTimeout(()=>{i(!1)},1500)},[]),V.jsxs(yS,{children:[r&&V.jsxs(qM,{className:r?"":"hidden",children:[V.jsxs("h1",{children:["ICECREAM",V.jsx("br",{}),"FACTORY"]}),V.jsx("div",{className:"first"}),V.jsx("div",{className:"second"})]}),V.jsxs(vS,{className:r?"":"action",children:[V.jsx(wS,{children:"로그인이 필요해요"}),V.jsxs(_S,{onSubmit:m,children:[V.jsx(es,{onChange:f,name:"email",value:s,placeholder:"이메일",type:"email",required:!0}),V.jsx(es,{onChange:f,name:"password",value:l,placeholder:"비밀번호",type:"password",required:!0}),V.jsx(es,{className:"createBtn",type:"submit",value:e?"Loading...":"로그인"})]}),c!==""?V.jsx(ES,{children:c}):null,V.jsxs(TS,{children:["계정이 없나요? ",V.jsx(iE,{to:"/create-account",children:"회원가입하기 →"})]})]})]})}function GM(){const t=Bo(),[e,n]=j.useState(!1),[r,i]=j.useState(""),[s,o]=j.useState(""),[l,u]=j.useState(""),[c,d]=j.useState(""),f=_=>{const{target:{name:T,value:A}}=_;T==="name"?i(A):T==="email"?o(A):T==="password"&&u(A)},m=async _=>{if(_.preventDefault(),d(""),!(e||r===""||s===""||l===""))try{n(!0);const T=await Ab(ws,s,l);console.log(T.user),await mT(T.user,{displayName:r}),t("/")}catch(T){T instanceof kn&&(console.log(T.code,T.message),d(T.message))}finally{n(!1)}};return V.jsx(yS,{children:V.jsxs(vS,{className:"action",children:[V.jsx(wS,{children:"회원가입"}),V.jsxs(_S,{onSubmit:m,children:[V.jsx(es,{onChange:f,name:"name",value:r,placeholder:"닉네임을 입력하세요",type:"text",required:!0}),V.jsx(es,{onChange:f,name:"email",value:s,placeholder:"이메일",type:"email",required:!0}),V.jsx(es,{onChange:f,name:"password",value:l,placeholder:"비밀번호",type:"password",required:!0}),V.jsx(es,{className:"createBtn",type:"submit",value:e?"Loading...":"가입하기"})]}),c!==""?V.jsx(ES,{children:c}):null,V.jsxs(TS,{children:["이미 회원이신가요? ",V.jsx(iE,{to:"/login",children:"로그인하기 →"})]})]})})}const QM=Lx([{path:"/",element:V.jsx(lM,{children:V.jsx(Jk,{})}),children:[{path:"",element:V.jsx(DM,{})},{path:"profile",element:V.jsx(WM,{})}]},{path:"/login",element:V.jsx(KM,{})},{path:"/create-account",element:V.jsx(GM,{})}]),YM=CE`
  ${NE}
  * {
    box-sizing: border-box;
  }
  body {
    background-color: #E5C459;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    height: 100vh;
  }
  h1 {
    font-size: 34px;
    font-weight: 600;
    margin-bottom: 24px;
  }
  button {
    -webkit-tap-highlight-color : transparent;
  }
`;function XM(){const[t,e]=j.useState(!0),n=async()=>{await ws.authStateReady(),e(!1)};return j.useEffect(()=>{n()},[]),V.jsxs(V.Fragment,{children:[V.jsx(YM,{}),t?V.jsx(Xk,{}):V.jsx(Bx,{router:QM})]})}Zd.createRoot(document.getElementById("root")).render(V.jsx(zn.StrictMode,{children:V.jsx(XM,{})}));
