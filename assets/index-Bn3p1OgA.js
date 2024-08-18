function x0(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function k0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var C0={exports:{}},ih={},b0={exports:{}},_e={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nl=Symbol.for("react.element"),zS=Symbol.for("react.portal"),$S=Symbol.for("react.fragment"),BS=Symbol.for("react.strict_mode"),HS=Symbol.for("react.profiler"),WS=Symbol.for("react.provider"),qS=Symbol.for("react.context"),KS=Symbol.for("react.forward_ref"),GS=Symbol.for("react.suspense"),QS=Symbol.for("react.memo"),YS=Symbol.for("react.lazy"),ay=Symbol.iterator;function XS(t){return t===null||typeof t!="object"?null:(t=ay&&t[ay]||t["@@iterator"],typeof t=="function"?t:null)}var N0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D0=Object.assign,L0={};function Uo(t,e,n){this.props=t,this.context=e,this.refs=L0,this.updater=n||N0}Uo.prototype.isReactComponent={};Uo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Uo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function O0(){}O0.prototype=Uo.prototype;function bp(t,e,n){this.props=t,this.context=e,this.refs=L0,this.updater=n||N0}var Np=bp.prototype=new O0;Np.constructor=bp;D0(Np,Uo.prototype);Np.isPureReactComponent=!0;var ly=Array.isArray,M0=Object.prototype.hasOwnProperty,Dp={current:null},V0={key:!0,ref:!0,__self:!0,__source:!0};function U0(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)M0.call(e,r)&&!V0.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Nl,type:t,key:s,ref:o,props:i,_owner:Dp.current}}function JS(t,e){return{$$typeof:Nl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Lp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Nl}function ZS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var uy=/\/+/g;function sd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?ZS(""+t.key):e.toString(36)}function Uu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Nl:case zS:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+sd(o,0):r,ly(i)?(n="",t!=null&&(n=t.replace(uy,"$&/")+"/"),Uu(i,e,n,"",function(c){return c})):i!=null&&(Lp(i)&&(i=JS(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(uy,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",ly(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+sd(s,l);o+=Uu(s,e,n,u,i)}else if(u=XS(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+sd(s,l++),o+=Uu(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function du(t,e,n){if(t==null)return t;var r=[],i=0;return Uu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function eR(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Xt={current:null},Fu={transition:null},tR={ReactCurrentDispatcher:Xt,ReactCurrentBatchConfig:Fu,ReactCurrentOwner:Dp};function F0(){throw Error("act(...) is not supported in production builds of React.")}_e.Children={map:du,forEach:function(t,e,n){du(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return du(t,function(){e++}),e},toArray:function(t){return du(t,function(e){return e})||[]},only:function(t){if(!Lp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};_e.Component=Uo;_e.Fragment=$S;_e.Profiler=HS;_e.PureComponent=bp;_e.StrictMode=BS;_e.Suspense=GS;_e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tR;_e.act=F0;_e.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=D0({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Dp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)M0.call(e,u)&&!V0.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Nl,type:t.type,key:i,ref:s,props:r,_owner:o}};_e.createContext=function(t){return t={$$typeof:qS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:WS,_context:t},t.Consumer=t};_e.createElement=U0;_e.createFactory=function(t){var e=U0.bind(null,t);return e.type=t,e};_e.createRef=function(){return{current:null}};_e.forwardRef=function(t){return{$$typeof:KS,render:t}};_e.isValidElement=Lp;_e.lazy=function(t){return{$$typeof:YS,_payload:{_status:-1,_result:t},_init:eR}};_e.memo=function(t,e){return{$$typeof:QS,type:t,compare:e===void 0?null:e}};_e.startTransition=function(t){var e=Fu.transition;Fu.transition={};try{t()}finally{Fu.transition=e}};_e.unstable_act=F0;_e.useCallback=function(t,e){return Xt.current.useCallback(t,e)};_e.useContext=function(t){return Xt.current.useContext(t)};_e.useDebugValue=function(){};_e.useDeferredValue=function(t){return Xt.current.useDeferredValue(t)};_e.useEffect=function(t,e){return Xt.current.useEffect(t,e)};_e.useId=function(){return Xt.current.useId()};_e.useImperativeHandle=function(t,e,n){return Xt.current.useImperativeHandle(t,e,n)};_e.useInsertionEffect=function(t,e){return Xt.current.useInsertionEffect(t,e)};_e.useLayoutEffect=function(t,e){return Xt.current.useLayoutEffect(t,e)};_e.useMemo=function(t,e){return Xt.current.useMemo(t,e)};_e.useReducer=function(t,e,n){return Xt.current.useReducer(t,e,n)};_e.useRef=function(t){return Xt.current.useRef(t)};_e.useState=function(t){return Xt.current.useState(t)};_e.useSyncExternalStore=function(t,e,n){return Xt.current.useSyncExternalStore(t,e,n)};_e.useTransition=function(){return Xt.current.useTransition()};_e.version="18.3.1";b0.exports=_e;var j=b0.exports;const zn=k0(j),nR=x0({__proto__:null,default:zn},[j]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rR=j,iR=Symbol.for("react.element"),sR=Symbol.for("react.fragment"),oR=Object.prototype.hasOwnProperty,aR=rR.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,lR={key:!0,ref:!0,__self:!0,__source:!0};function j0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)oR.call(e,r)&&!lR.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:iR,type:t,key:s,ref:o,props:i,_owner:aR.current}}ih.Fragment=sR;ih.jsx=j0;ih.jsxs=j0;C0.exports=ih;var V=C0.exports,Zd={},z0={exports:{}},vn={},$0={exports:{}},B0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(F,W){var X=F.length;F.push(W);e:for(;0<X;){var se=X-1>>>1,le=F[se];if(0<i(le,W))F[se]=W,F[X]=le,X=se;else break e}}function n(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var W=F[0],X=F.pop();if(X!==W){F[0]=X;e:for(var se=0,le=F.length,xe=le>>>1;se<xe;){var We=2*(se+1)-1,Ze=F[We],qe=We+1,Dt=F[qe];if(0>i(Ze,X))qe<le&&0>i(Dt,Ze)?(F[se]=Dt,F[qe]=X,se=qe):(F[se]=Ze,F[We]=X,se=We);else if(qe<le&&0>i(Dt,X))F[se]=Dt,F[qe]=X,se=qe;else break e}}return W}function i(F,W){var X=F.sortIndex-W.sortIndex;return X!==0?X:F.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],d=1,f=null,m=3,_=!1,T=!1,A=!1,b=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(F){for(var W=n(c);W!==null;){if(W.callback===null)r(c);else if(W.startTime<=F)r(c),W.sortIndex=W.expirationTime,e(u,W);else break;W=n(c)}}function L(F){if(A=!1,S(F),!T)if(n(u)!==null)T=!0,Zt(z);else{var W=n(c);W!==null&&ye(L,W.startTime-F)}}function z(F,W){T=!1,A&&(A=!1,I(g),g=-1),_=!0;var X=m;try{for(S(W),f=n(u);f!==null&&(!(f.expirationTime>W)||F&&!k());){var se=f.callback;if(typeof se=="function"){f.callback=null,m=f.priorityLevel;var le=se(f.expirationTime<=W);W=t.unstable_now(),typeof le=="function"?f.callback=le:f===n(u)&&r(u),S(W)}else r(u);f=n(u)}if(f!==null)var xe=!0;else{var We=n(c);We!==null&&ye(L,We.startTime-W),xe=!1}return xe}finally{f=null,m=X,_=!1}}var x=!1,w=null,g=-1,E=5,R=-1;function k(){return!(t.unstable_now()-R<E)}function N(){if(w!==null){var F=t.unstable_now();R=F;var W=!0;try{W=w(!0,F)}finally{W?P():(x=!1,w=null)}}else x=!1}var P;if(typeof v=="function")P=function(){v(N)};else if(typeof MessageChannel<"u"){var pe=new MessageChannel,at=pe.port2;pe.port1.onmessage=N,P=function(){at.postMessage(null)}}else P=function(){b(N,0)};function Zt(F){w=F,x||(x=!0,P())}function ye(F,W){g=b(function(){F(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(F){F.callback=null},t.unstable_continueExecution=function(){T||_||(T=!0,Zt(z))},t.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<F?Math.floor(1e3/F):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(F){switch(m){case 1:case 2:case 3:var W=3;break;default:W=m}var X=m;m=W;try{return F()}finally{m=X}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(F,W){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var X=m;m=F;try{return W()}finally{m=X}},t.unstable_scheduleCallback=function(F,W,X){var se=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?se+X:se):X=se,F){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=X+le,F={id:d++,callback:W,priorityLevel:F,startTime:X,expirationTime:le,sortIndex:-1},X>se?(F.sortIndex=X,e(c,F),n(u)===null&&F===n(c)&&(A?(I(g),g=-1):A=!0,ye(L,X-se))):(F.sortIndex=le,e(u,F),T||_||(T=!0,Zt(z))),F},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(F){var W=m;return function(){var X=m;m=W;try{return F.apply(this,arguments)}finally{m=X}}}})(B0);$0.exports=B0;var uR=$0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cR=j,yn=uR;function q(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var H0=new Set,tl={};function Es(t,e){go(t,e),go(t+"Capture",e)}function go(t,e){for(tl[t]=e,t=0;t<e.length;t++)H0.add(e[t])}var Dr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ef=Object.prototype.hasOwnProperty,hR=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,cy={},hy={};function dR(t){return ef.call(hy,t)?!0:ef.call(cy,t)?!1:hR.test(t)?hy[t]=!0:(cy[t]=!0,!1)}function fR(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function pR(t,e,n,r){if(e===null||typeof e>"u"||fR(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Jt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ct={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ct[t]=new Jt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ct[e]=new Jt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ct[t]=new Jt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ct[t]=new Jt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ct[t]=new Jt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ct[t]=new Jt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ct[t]=new Jt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ct[t]=new Jt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ct[t]=new Jt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Op=/[\-:]([a-z])/g;function Mp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Op,Mp);Ct[e]=new Jt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Op,Mp);Ct[e]=new Jt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Op,Mp);Ct[e]=new Jt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ct[t]=new Jt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ct.xlinkHref=new Jt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ct[t]=new Jt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Vp(t,e,n,r){var i=Ct.hasOwnProperty(e)?Ct[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(pR(e,n,i,r)&&(n=null),r||i===null?dR(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var jr=cR.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fu=Symbol.for("react.element"),Bs=Symbol.for("react.portal"),Hs=Symbol.for("react.fragment"),Up=Symbol.for("react.strict_mode"),tf=Symbol.for("react.profiler"),W0=Symbol.for("react.provider"),q0=Symbol.for("react.context"),Fp=Symbol.for("react.forward_ref"),nf=Symbol.for("react.suspense"),rf=Symbol.for("react.suspense_list"),jp=Symbol.for("react.memo"),Zr=Symbol.for("react.lazy"),K0=Symbol.for("react.offscreen"),dy=Symbol.iterator;function pa(t){return t===null||typeof t!="object"?null:(t=dy&&t[dy]||t["@@iterator"],typeof t=="function"?t:null)}var Xe=Object.assign,od;function Pa(t){if(od===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);od=e&&e[1]||""}return`
`+od+t}var ad=!1;function ld(t,e){if(!t||ad)return"";ad=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{ad=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Pa(t):""}function mR(t){switch(t.tag){case 5:return Pa(t.type);case 16:return Pa("Lazy");case 13:return Pa("Suspense");case 19:return Pa("SuspenseList");case 0:case 2:case 15:return t=ld(t.type,!1),t;case 11:return t=ld(t.type.render,!1),t;case 1:return t=ld(t.type,!0),t;default:return""}}function sf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Hs:return"Fragment";case Bs:return"Portal";case tf:return"Profiler";case Up:return"StrictMode";case nf:return"Suspense";case rf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case q0:return(t.displayName||"Context")+".Consumer";case W0:return(t._context.displayName||"Context")+".Provider";case Fp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case jp:return e=t.displayName||null,e!==null?e:sf(t.type)||"Memo";case Zr:e=t._payload,t=t._init;try{return sf(t(e))}catch{}}return null}function gR(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return sf(e);case 8:return e===Up?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Si(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function G0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function yR(t){var e=G0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function pu(t){t._valueTracker||(t._valueTracker=yR(t))}function Q0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=G0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function hc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function of(t,e){var n=e.checked;return Xe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function fy(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Si(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Y0(t,e){e=e.checked,e!=null&&Vp(t,"checked",e,!1)}function af(t,e){Y0(t,e);var n=Si(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?lf(t,e.type,n):e.hasOwnProperty("defaultValue")&&lf(t,e.type,Si(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function py(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function lf(t,e,n){(e!=="number"||hc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var xa=Array.isArray;function so(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Si(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function uf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(q(91));return Xe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function my(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(q(92));if(xa(n)){if(1<n.length)throw Error(q(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Si(n)}}function X0(t,e){var n=Si(e.value),r=Si(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function gy(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function J0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function cf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?J0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var mu,Z0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(mu=mu||document.createElement("div"),mu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=mu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function nl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Fa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},vR=["Webkit","ms","Moz","O"];Object.keys(Fa).forEach(function(t){vR.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Fa[e]=Fa[t]})});function ew(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Fa.hasOwnProperty(t)&&Fa[t]?(""+e).trim():e+"px"}function tw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ew(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var _R=Xe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function hf(t,e){if(e){if(_R[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(q(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(q(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(q(61))}if(e.style!=null&&typeof e.style!="object")throw Error(q(62))}}function df(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ff=null;function zp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var pf=null,oo=null,ao=null;function yy(t){if(t=Ol(t)){if(typeof pf!="function")throw Error(q(280));var e=t.stateNode;e&&(e=uh(e),pf(t.stateNode,t.type,e))}}function nw(t){oo?ao?ao.push(t):ao=[t]:oo=t}function rw(){if(oo){var t=oo,e=ao;if(ao=oo=null,yy(t),e)for(t=0;t<e.length;t++)yy(e[t])}}function iw(t,e){return t(e)}function sw(){}var ud=!1;function ow(t,e,n){if(ud)return t(e,n);ud=!0;try{return iw(t,e,n)}finally{ud=!1,(oo!==null||ao!==null)&&(sw(),rw())}}function rl(t,e){var n=t.stateNode;if(n===null)return null;var r=uh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(q(231,e,typeof n));return n}var mf=!1;if(Dr)try{var ma={};Object.defineProperty(ma,"passive",{get:function(){mf=!0}}),window.addEventListener("test",ma,ma),window.removeEventListener("test",ma,ma)}catch{mf=!1}function wR(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var ja=!1,dc=null,fc=!1,gf=null,ER={onError:function(t){ja=!0,dc=t}};function TR(t,e,n,r,i,s,o,l,u){ja=!1,dc=null,wR.apply(ER,arguments)}function IR(t,e,n,r,i,s,o,l,u){if(TR.apply(this,arguments),ja){if(ja){var c=dc;ja=!1,dc=null}else throw Error(q(198));fc||(fc=!0,gf=c)}}function Ts(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function aw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function vy(t){if(Ts(t)!==t)throw Error(q(188))}function SR(t){var e=t.alternate;if(!e){if(e=Ts(t),e===null)throw Error(q(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return vy(i),t;if(s===r)return vy(i),e;s=s.sibling}throw Error(q(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(q(189))}}if(n.alternate!==r)throw Error(q(190))}if(n.tag!==3)throw Error(q(188));return n.stateNode.current===n?t:e}function lw(t){return t=SR(t),t!==null?uw(t):null}function uw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=uw(t);if(e!==null)return e;t=t.sibling}return null}var cw=yn.unstable_scheduleCallback,_y=yn.unstable_cancelCallback,RR=yn.unstable_shouldYield,AR=yn.unstable_requestPaint,ot=yn.unstable_now,PR=yn.unstable_getCurrentPriorityLevel,$p=yn.unstable_ImmediatePriority,hw=yn.unstable_UserBlockingPriority,pc=yn.unstable_NormalPriority,xR=yn.unstable_LowPriority,dw=yn.unstable_IdlePriority,sh=null,or=null;function kR(t){if(or&&typeof or.onCommitFiberRoot=="function")try{or.onCommitFiberRoot(sh,t,void 0,(t.current.flags&128)===128)}catch{}}var $n=Math.clz32?Math.clz32:NR,CR=Math.log,bR=Math.LN2;function NR(t){return t>>>=0,t===0?32:31-(CR(t)/bR|0)|0}var gu=64,yu=4194304;function ka(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function mc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=ka(l):(s&=o,s!==0&&(r=ka(s)))}else o=n&~i,o!==0?r=ka(o):s!==0&&(r=ka(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-$n(e),i=1<<n,r|=t[n],e&=~i;return r}function DR(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function LR(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-$n(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=DR(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function yf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function fw(){var t=gu;return gu<<=1,!(gu&4194240)&&(gu=64),t}function cd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Dl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-$n(e),t[e]=n}function OR(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-$n(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Bp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-$n(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var be=0;function pw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var mw,Hp,gw,yw,vw,vf=!1,vu=[],hi=null,di=null,fi=null,il=new Map,sl=new Map,ti=[],MR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wy(t,e){switch(t){case"focusin":case"focusout":hi=null;break;case"dragenter":case"dragleave":di=null;break;case"mouseover":case"mouseout":fi=null;break;case"pointerover":case"pointerout":il.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":sl.delete(e.pointerId)}}function ga(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ol(e),e!==null&&Hp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function VR(t,e,n,r,i){switch(e){case"focusin":return hi=ga(hi,t,e,n,r,i),!0;case"dragenter":return di=ga(di,t,e,n,r,i),!0;case"mouseover":return fi=ga(fi,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return il.set(s,ga(il.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,sl.set(s,ga(sl.get(s)||null,t,e,n,r,i)),!0}return!1}function _w(t){var e=Ki(t.target);if(e!==null){var n=Ts(e);if(n!==null){if(e=n.tag,e===13){if(e=aw(n),e!==null){t.blockedOn=e,vw(t.priority,function(){gw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ju(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=_f(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);ff=r,n.target.dispatchEvent(r),ff=null}else return e=Ol(n),e!==null&&Hp(e),t.blockedOn=n,!1;e.shift()}return!0}function Ey(t,e,n){ju(t)&&n.delete(e)}function UR(){vf=!1,hi!==null&&ju(hi)&&(hi=null),di!==null&&ju(di)&&(di=null),fi!==null&&ju(fi)&&(fi=null),il.forEach(Ey),sl.forEach(Ey)}function ya(t,e){t.blockedOn===e&&(t.blockedOn=null,vf||(vf=!0,yn.unstable_scheduleCallback(yn.unstable_NormalPriority,UR)))}function ol(t){function e(i){return ya(i,t)}if(0<vu.length){ya(vu[0],t);for(var n=1;n<vu.length;n++){var r=vu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(hi!==null&&ya(hi,t),di!==null&&ya(di,t),fi!==null&&ya(fi,t),il.forEach(e),sl.forEach(e),n=0;n<ti.length;n++)r=ti[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ti.length&&(n=ti[0],n.blockedOn===null);)_w(n),n.blockedOn===null&&ti.shift()}var lo=jr.ReactCurrentBatchConfig,gc=!0;function FR(t,e,n,r){var i=be,s=lo.transition;lo.transition=null;try{be=1,Wp(t,e,n,r)}finally{be=i,lo.transition=s}}function jR(t,e,n,r){var i=be,s=lo.transition;lo.transition=null;try{be=4,Wp(t,e,n,r)}finally{be=i,lo.transition=s}}function Wp(t,e,n,r){if(gc){var i=_f(t,e,n,r);if(i===null)wd(t,e,r,yc,n),wy(t,r);else if(VR(i,t,e,n,r))r.stopPropagation();else if(wy(t,r),e&4&&-1<MR.indexOf(t)){for(;i!==null;){var s=Ol(i);if(s!==null&&mw(s),s=_f(t,e,n,r),s===null&&wd(t,e,r,yc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else wd(t,e,r,null,n)}}var yc=null;function _f(t,e,n,r){if(yc=null,t=zp(r),t=Ki(t),t!==null)if(e=Ts(t),e===null)t=null;else if(n=e.tag,n===13){if(t=aw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return yc=t,null}function ww(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(PR()){case $p:return 1;case hw:return 4;case pc:case xR:return 16;case dw:return 536870912;default:return 16}default:return 16}}var li=null,qp=null,zu=null;function Ew(){if(zu)return zu;var t,e=qp,n=e.length,r,i="value"in li?li.value:li.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return zu=i.slice(t,1<r?1-r:void 0)}function $u(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function _u(){return!0}function Ty(){return!1}function _n(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?_u:Ty,this.isPropagationStopped=Ty,this}return Xe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=_u)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=_u)},persist:function(){},isPersistent:_u}),e}var Fo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kp=_n(Fo),Ll=Xe({},Fo,{view:0,detail:0}),zR=_n(Ll),hd,dd,va,oh=Xe({},Ll,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==va&&(va&&t.type==="mousemove"?(hd=t.screenX-va.screenX,dd=t.screenY-va.screenY):dd=hd=0,va=t),hd)},movementY:function(t){return"movementY"in t?t.movementY:dd}}),Iy=_n(oh),$R=Xe({},oh,{dataTransfer:0}),BR=_n($R),HR=Xe({},Ll,{relatedTarget:0}),fd=_n(HR),WR=Xe({},Fo,{animationName:0,elapsedTime:0,pseudoElement:0}),qR=_n(WR),KR=Xe({},Fo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),GR=_n(KR),QR=Xe({},Fo,{data:0}),Sy=_n(QR),YR={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},XR={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},JR={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ZR(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=JR[t])?!!e[t]:!1}function Gp(){return ZR}var eA=Xe({},Ll,{key:function(t){if(t.key){var e=YR[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=$u(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?XR[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gp,charCode:function(t){return t.type==="keypress"?$u(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?$u(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),tA=_n(eA),nA=Xe({},oh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ry=_n(nA),rA=Xe({},Ll,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gp}),iA=_n(rA),sA=Xe({},Fo,{propertyName:0,elapsedTime:0,pseudoElement:0}),oA=_n(sA),aA=Xe({},oh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),lA=_n(aA),uA=[9,13,27,32],Qp=Dr&&"CompositionEvent"in window,za=null;Dr&&"documentMode"in document&&(za=document.documentMode);var cA=Dr&&"TextEvent"in window&&!za,Tw=Dr&&(!Qp||za&&8<za&&11>=za),Ay=" ",Py=!1;function Iw(t,e){switch(t){case"keyup":return uA.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ws=!1;function hA(t,e){switch(t){case"compositionend":return Sw(e);case"keypress":return e.which!==32?null:(Py=!0,Ay);case"textInput":return t=e.data,t===Ay&&Py?null:t;default:return null}}function dA(t,e){if(Ws)return t==="compositionend"||!Qp&&Iw(t,e)?(t=Ew(),zu=qp=li=null,Ws=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Tw&&e.locale!=="ko"?null:e.data;default:return null}}var fA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!fA[t.type]:e==="textarea"}function Rw(t,e,n,r){nw(r),e=vc(e,"onChange"),0<e.length&&(n=new Kp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var $a=null,al=null;function pA(t){Mw(t,0)}function ah(t){var e=Gs(t);if(Q0(e))return t}function mA(t,e){if(t==="change")return e}var Aw=!1;if(Dr){var pd;if(Dr){var md="oninput"in document;if(!md){var ky=document.createElement("div");ky.setAttribute("oninput","return;"),md=typeof ky.oninput=="function"}pd=md}else pd=!1;Aw=pd&&(!document.documentMode||9<document.documentMode)}function Cy(){$a&&($a.detachEvent("onpropertychange",Pw),al=$a=null)}function Pw(t){if(t.propertyName==="value"&&ah(al)){var e=[];Rw(e,al,t,zp(t)),ow(pA,e)}}function gA(t,e,n){t==="focusin"?(Cy(),$a=e,al=n,$a.attachEvent("onpropertychange",Pw)):t==="focusout"&&Cy()}function yA(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ah(al)}function vA(t,e){if(t==="click")return ah(e)}function _A(t,e){if(t==="input"||t==="change")return ah(e)}function wA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Wn=typeof Object.is=="function"?Object.is:wA;function ll(t,e){if(Wn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ef.call(e,i)||!Wn(t[i],e[i]))return!1}return!0}function by(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ny(t,e){var n=by(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=by(n)}}function xw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?xw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function kw(){for(var t=window,e=hc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=hc(t.document)}return e}function Yp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function EA(t){var e=kw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&xw(n.ownerDocument.documentElement,n)){if(r!==null&&Yp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Ny(n,s);var o=Ny(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var TA=Dr&&"documentMode"in document&&11>=document.documentMode,qs=null,wf=null,Ba=null,Ef=!1;function Dy(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ef||qs==null||qs!==hc(r)||(r=qs,"selectionStart"in r&&Yp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ba&&ll(Ba,r)||(Ba=r,r=vc(wf,"onSelect"),0<r.length&&(e=new Kp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=qs)))}function wu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ks={animationend:wu("Animation","AnimationEnd"),animationiteration:wu("Animation","AnimationIteration"),animationstart:wu("Animation","AnimationStart"),transitionend:wu("Transition","TransitionEnd")},gd={},Cw={};Dr&&(Cw=document.createElement("div").style,"AnimationEvent"in window||(delete Ks.animationend.animation,delete Ks.animationiteration.animation,delete Ks.animationstart.animation),"TransitionEvent"in window||delete Ks.transitionend.transition);function lh(t){if(gd[t])return gd[t];if(!Ks[t])return t;var e=Ks[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Cw)return gd[t]=e[n];return t}var bw=lh("animationend"),Nw=lh("animationiteration"),Dw=lh("animationstart"),Lw=lh("transitionend"),Ow=new Map,Ly="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ci(t,e){Ow.set(t,e),Es(e,[t])}for(var yd=0;yd<Ly.length;yd++){var vd=Ly[yd],IA=vd.toLowerCase(),SA=vd[0].toUpperCase()+vd.slice(1);Ci(IA,"on"+SA)}Ci(bw,"onAnimationEnd");Ci(Nw,"onAnimationIteration");Ci(Dw,"onAnimationStart");Ci("dblclick","onDoubleClick");Ci("focusin","onFocus");Ci("focusout","onBlur");Ci(Lw,"onTransitionEnd");go("onMouseEnter",["mouseout","mouseover"]);go("onMouseLeave",["mouseout","mouseover"]);go("onPointerEnter",["pointerout","pointerover"]);go("onPointerLeave",["pointerout","pointerover"]);Es("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Es("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Es("onBeforeInput",["compositionend","keypress","textInput","paste"]);Es("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Es("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Es("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ca="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),RA=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ca));function Oy(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,IR(r,e,void 0,t),t.currentTarget=null}function Mw(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Oy(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Oy(i,l,c),s=u}}}if(fc)throw t=gf,fc=!1,gf=null,t}function je(t,e){var n=e[Af];n===void 0&&(n=e[Af]=new Set);var r=t+"__bubble";n.has(r)||(Vw(e,t,2,!1),n.add(r))}function _d(t,e,n){var r=0;e&&(r|=4),Vw(n,t,r,e)}var Eu="_reactListening"+Math.random().toString(36).slice(2);function ul(t){if(!t[Eu]){t[Eu]=!0,H0.forEach(function(n){n!=="selectionchange"&&(RA.has(n)||_d(n,!1,t),_d(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Eu]||(e[Eu]=!0,_d("selectionchange",!1,e))}}function Vw(t,e,n,r){switch(ww(e)){case 1:var i=FR;break;case 4:i=jR;break;default:i=Wp}n=i.bind(null,e,n,t),i=void 0,!mf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function wd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Ki(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}ow(function(){var c=s,d=zp(n),f=[];e:{var m=Ow.get(t);if(m!==void 0){var _=Kp,T=t;switch(t){case"keypress":if($u(n)===0)break e;case"keydown":case"keyup":_=tA;break;case"focusin":T="focus",_=fd;break;case"focusout":T="blur",_=fd;break;case"beforeblur":case"afterblur":_=fd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Iy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=BR;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=iA;break;case bw:case Nw:case Dw:_=qR;break;case Lw:_=oA;break;case"scroll":_=zR;break;case"wheel":_=lA;break;case"copy":case"cut":case"paste":_=GR;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=Ry}var A=(e&4)!==0,b=!A&&t==="scroll",I=A?m!==null?m+"Capture":null:m;A=[];for(var v=c,S;v!==null;){S=v;var L=S.stateNode;if(S.tag===5&&L!==null&&(S=L,I!==null&&(L=rl(v,I),L!=null&&A.push(cl(v,L,S)))),b)break;v=v.return}0<A.length&&(m=new _(m,T,null,n,d),f.push({event:m,listeners:A}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",m&&n!==ff&&(T=n.relatedTarget||n.fromElement)&&(Ki(T)||T[Lr]))break e;if((_||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,_?(T=n.relatedTarget||n.toElement,_=c,T=T?Ki(T):null,T!==null&&(b=Ts(T),T!==b||T.tag!==5&&T.tag!==6)&&(T=null)):(_=null,T=c),_!==T)){if(A=Iy,L="onMouseLeave",I="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(A=Ry,L="onPointerLeave",I="onPointerEnter",v="pointer"),b=_==null?m:Gs(_),S=T==null?m:Gs(T),m=new A(L,v+"leave",_,n,d),m.target=b,m.relatedTarget=S,L=null,Ki(d)===c&&(A=new A(I,v+"enter",T,n,d),A.target=S,A.relatedTarget=b,L=A),b=L,_&&T)t:{for(A=_,I=T,v=0,S=A;S;S=Vs(S))v++;for(S=0,L=I;L;L=Vs(L))S++;for(;0<v-S;)A=Vs(A),v--;for(;0<S-v;)I=Vs(I),S--;for(;v--;){if(A===I||I!==null&&A===I.alternate)break t;A=Vs(A),I=Vs(I)}A=null}else A=null;_!==null&&My(f,m,_,A,!1),T!==null&&b!==null&&My(f,b,T,A,!0)}}e:{if(m=c?Gs(c):window,_=m.nodeName&&m.nodeName.toLowerCase(),_==="select"||_==="input"&&m.type==="file")var z=mA;else if(xy(m))if(Aw)z=_A;else{z=yA;var x=gA}else(_=m.nodeName)&&_.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(z=vA);if(z&&(z=z(t,c))){Rw(f,z,n,d);break e}x&&x(t,m,c),t==="focusout"&&(x=m._wrapperState)&&x.controlled&&m.type==="number"&&lf(m,"number",m.value)}switch(x=c?Gs(c):window,t){case"focusin":(xy(x)||x.contentEditable==="true")&&(qs=x,wf=c,Ba=null);break;case"focusout":Ba=wf=qs=null;break;case"mousedown":Ef=!0;break;case"contextmenu":case"mouseup":case"dragend":Ef=!1,Dy(f,n,d);break;case"selectionchange":if(TA)break;case"keydown":case"keyup":Dy(f,n,d)}var w;if(Qp)e:{switch(t){case"compositionstart":var g="onCompositionStart";break e;case"compositionend":g="onCompositionEnd";break e;case"compositionupdate":g="onCompositionUpdate";break e}g=void 0}else Ws?Iw(t,n)&&(g="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(g="onCompositionStart");g&&(Tw&&n.locale!=="ko"&&(Ws||g!=="onCompositionStart"?g==="onCompositionEnd"&&Ws&&(w=Ew()):(li=d,qp="value"in li?li.value:li.textContent,Ws=!0)),x=vc(c,g),0<x.length&&(g=new Sy(g,t,null,n,d),f.push({event:g,listeners:x}),w?g.data=w:(w=Sw(n),w!==null&&(g.data=w)))),(w=cA?hA(t,n):dA(t,n))&&(c=vc(c,"onBeforeInput"),0<c.length&&(d=new Sy("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=w))}Mw(f,e)})}function cl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function vc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=rl(t,n),s!=null&&r.unshift(cl(t,s,i)),s=rl(t,e),s!=null&&r.push(cl(t,s,i))),t=t.return}return r}function Vs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function My(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=rl(n,s),u!=null&&o.unshift(cl(n,u,l))):i||(u=rl(n,s),u!=null&&o.push(cl(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var AA=/\r\n?/g,PA=/\u0000|\uFFFD/g;function Vy(t){return(typeof t=="string"?t:""+t).replace(AA,`
`).replace(PA,"")}function Tu(t,e,n){if(e=Vy(e),Vy(t)!==e&&n)throw Error(q(425))}function _c(){}var Tf=null,If=null;function Sf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Rf=typeof setTimeout=="function"?setTimeout:void 0,xA=typeof clearTimeout=="function"?clearTimeout:void 0,Uy=typeof Promise=="function"?Promise:void 0,kA=typeof queueMicrotask=="function"?queueMicrotask:typeof Uy<"u"?function(t){return Uy.resolve(null).then(t).catch(CA)}:Rf;function CA(t){setTimeout(function(){throw t})}function Ed(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ol(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ol(e)}function pi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Fy(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var jo=Math.random().toString(36).slice(2),rr="__reactFiber$"+jo,hl="__reactProps$"+jo,Lr="__reactContainer$"+jo,Af="__reactEvents$"+jo,bA="__reactListeners$"+jo,NA="__reactHandles$"+jo;function Ki(t){var e=t[rr];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Lr]||n[rr]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Fy(t);t!==null;){if(n=t[rr])return n;t=Fy(t)}return e}t=n,n=t.parentNode}return null}function Ol(t){return t=t[rr]||t[Lr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Gs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(q(33))}function uh(t){return t[hl]||null}var Pf=[],Qs=-1;function bi(t){return{current:t}}function Be(t){0>Qs||(t.current=Pf[Qs],Pf[Qs]=null,Qs--)}function Ve(t,e){Qs++,Pf[Qs]=t.current,t.current=e}var Ri={},qt=bi(Ri),rn=bi(!1),os=Ri;function yo(t,e){var n=t.type.contextTypes;if(!n)return Ri;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function sn(t){return t=t.childContextTypes,t!=null}function wc(){Be(rn),Be(qt)}function jy(t,e,n){if(qt.current!==Ri)throw Error(q(168));Ve(qt,e),Ve(rn,n)}function Uw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(q(108,gR(t)||"Unknown",i));return Xe({},n,r)}function Ec(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ri,os=qt.current,Ve(qt,t),Ve(rn,rn.current),!0}function zy(t,e,n){var r=t.stateNode;if(!r)throw Error(q(169));n?(t=Uw(t,e,os),r.__reactInternalMemoizedMergedChildContext=t,Be(rn),Be(qt),Ve(qt,t)):Be(rn),Ve(rn,n)}var Sr=null,ch=!1,Td=!1;function Fw(t){Sr===null?Sr=[t]:Sr.push(t)}function DA(t){ch=!0,Fw(t)}function Ni(){if(!Td&&Sr!==null){Td=!0;var t=0,e=be;try{var n=Sr;for(be=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Sr=null,ch=!1}catch(i){throw Sr!==null&&(Sr=Sr.slice(t+1)),cw($p,Ni),i}finally{be=e,Td=!1}}return null}var Ys=[],Xs=0,Tc=null,Ic=0,Tn=[],In=0,as=null,Rr=1,Ar="";function Bi(t,e){Ys[Xs++]=Ic,Ys[Xs++]=Tc,Tc=t,Ic=e}function jw(t,e,n){Tn[In++]=Rr,Tn[In++]=Ar,Tn[In++]=as,as=t;var r=Rr;t=Ar;var i=32-$n(r)-1;r&=~(1<<i),n+=1;var s=32-$n(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Rr=1<<32-$n(e)+i|n<<i|r,Ar=s+t}else Rr=1<<s|n<<i|r,Ar=t}function Xp(t){t.return!==null&&(Bi(t,1),jw(t,1,0))}function Jp(t){for(;t===Tc;)Tc=Ys[--Xs],Ys[Xs]=null,Ic=Ys[--Xs],Ys[Xs]=null;for(;t===as;)as=Tn[--In],Tn[In]=null,Ar=Tn[--In],Tn[In]=null,Rr=Tn[--In],Tn[In]=null}var gn=null,fn=null,He=!1,jn=null;function zw(t,e){var n=Sn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function $y(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,gn=t,fn=pi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,gn=t,fn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=as!==null?{id:Rr,overflow:Ar}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Sn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,gn=t,fn=null,!0):!1;default:return!1}}function xf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function kf(t){if(He){var e=fn;if(e){var n=e;if(!$y(t,e)){if(xf(t))throw Error(q(418));e=pi(n.nextSibling);var r=gn;e&&$y(t,e)?zw(r,n):(t.flags=t.flags&-4097|2,He=!1,gn=t)}}else{if(xf(t))throw Error(q(418));t.flags=t.flags&-4097|2,He=!1,gn=t}}}function By(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;gn=t}function Iu(t){if(t!==gn)return!1;if(!He)return By(t),He=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Sf(t.type,t.memoizedProps)),e&&(e=fn)){if(xf(t))throw $w(),Error(q(418));for(;e;)zw(t,e),e=pi(e.nextSibling)}if(By(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(q(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){fn=pi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}fn=null}}else fn=gn?pi(t.stateNode.nextSibling):null;return!0}function $w(){for(var t=fn;t;)t=pi(t.nextSibling)}function vo(){fn=gn=null,He=!1}function Zp(t){jn===null?jn=[t]:jn.push(t)}var LA=jr.ReactCurrentBatchConfig;function _a(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(q(309));var r=n.stateNode}if(!r)throw Error(q(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(q(284));if(!n._owner)throw Error(q(290,t))}return t}function Su(t,e){throw t=Object.prototype.toString.call(e),Error(q(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Hy(t){var e=t._init;return e(t._payload)}function Bw(t){function e(I,v){if(t){var S=I.deletions;S===null?(I.deletions=[v],I.flags|=16):S.push(v)}}function n(I,v){if(!t)return null;for(;v!==null;)e(I,v),v=v.sibling;return null}function r(I,v){for(I=new Map;v!==null;)v.key!==null?I.set(v.key,v):I.set(v.index,v),v=v.sibling;return I}function i(I,v){return I=vi(I,v),I.index=0,I.sibling=null,I}function s(I,v,S){return I.index=S,t?(S=I.alternate,S!==null?(S=S.index,S<v?(I.flags|=2,v):S):(I.flags|=2,v)):(I.flags|=1048576,v)}function o(I){return t&&I.alternate===null&&(I.flags|=2),I}function l(I,v,S,L){return v===null||v.tag!==6?(v=kd(S,I.mode,L),v.return=I,v):(v=i(v,S),v.return=I,v)}function u(I,v,S,L){var z=S.type;return z===Hs?d(I,v,S.props.children,L,S.key):v!==null&&(v.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Zr&&Hy(z)===v.type)?(L=i(v,S.props),L.ref=_a(I,v,S),L.return=I,L):(L=Qu(S.type,S.key,S.props,null,I.mode,L),L.ref=_a(I,v,S),L.return=I,L)}function c(I,v,S,L){return v===null||v.tag!==4||v.stateNode.containerInfo!==S.containerInfo||v.stateNode.implementation!==S.implementation?(v=Cd(S,I.mode,L),v.return=I,v):(v=i(v,S.children||[]),v.return=I,v)}function d(I,v,S,L,z){return v===null||v.tag!==7?(v=ns(S,I.mode,L,z),v.return=I,v):(v=i(v,S),v.return=I,v)}function f(I,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return v=kd(""+v,I.mode,S),v.return=I,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case fu:return S=Qu(v.type,v.key,v.props,null,I.mode,S),S.ref=_a(I,null,v),S.return=I,S;case Bs:return v=Cd(v,I.mode,S),v.return=I,v;case Zr:var L=v._init;return f(I,L(v._payload),S)}if(xa(v)||pa(v))return v=ns(v,I.mode,S,null),v.return=I,v;Su(I,v)}return null}function m(I,v,S,L){var z=v!==null?v.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return z!==null?null:l(I,v,""+S,L);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case fu:return S.key===z?u(I,v,S,L):null;case Bs:return S.key===z?c(I,v,S,L):null;case Zr:return z=S._init,m(I,v,z(S._payload),L)}if(xa(S)||pa(S))return z!==null?null:d(I,v,S,L,null);Su(I,S)}return null}function _(I,v,S,L,z){if(typeof L=="string"&&L!==""||typeof L=="number")return I=I.get(S)||null,l(v,I,""+L,z);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case fu:return I=I.get(L.key===null?S:L.key)||null,u(v,I,L,z);case Bs:return I=I.get(L.key===null?S:L.key)||null,c(v,I,L,z);case Zr:var x=L._init;return _(I,v,S,x(L._payload),z)}if(xa(L)||pa(L))return I=I.get(S)||null,d(v,I,L,z,null);Su(v,L)}return null}function T(I,v,S,L){for(var z=null,x=null,w=v,g=v=0,E=null;w!==null&&g<S.length;g++){w.index>g?(E=w,w=null):E=w.sibling;var R=m(I,w,S[g],L);if(R===null){w===null&&(w=E);break}t&&w&&R.alternate===null&&e(I,w),v=s(R,v,g),x===null?z=R:x.sibling=R,x=R,w=E}if(g===S.length)return n(I,w),He&&Bi(I,g),z;if(w===null){for(;g<S.length;g++)w=f(I,S[g],L),w!==null&&(v=s(w,v,g),x===null?z=w:x.sibling=w,x=w);return He&&Bi(I,g),z}for(w=r(I,w);g<S.length;g++)E=_(w,I,g,S[g],L),E!==null&&(t&&E.alternate!==null&&w.delete(E.key===null?g:E.key),v=s(E,v,g),x===null?z=E:x.sibling=E,x=E);return t&&w.forEach(function(k){return e(I,k)}),He&&Bi(I,g),z}function A(I,v,S,L){var z=pa(S);if(typeof z!="function")throw Error(q(150));if(S=z.call(S),S==null)throw Error(q(151));for(var x=z=null,w=v,g=v=0,E=null,R=S.next();w!==null&&!R.done;g++,R=S.next()){w.index>g?(E=w,w=null):E=w.sibling;var k=m(I,w,R.value,L);if(k===null){w===null&&(w=E);break}t&&w&&k.alternate===null&&e(I,w),v=s(k,v,g),x===null?z=k:x.sibling=k,x=k,w=E}if(R.done)return n(I,w),He&&Bi(I,g),z;if(w===null){for(;!R.done;g++,R=S.next())R=f(I,R.value,L),R!==null&&(v=s(R,v,g),x===null?z=R:x.sibling=R,x=R);return He&&Bi(I,g),z}for(w=r(I,w);!R.done;g++,R=S.next())R=_(w,I,g,R.value,L),R!==null&&(t&&R.alternate!==null&&w.delete(R.key===null?g:R.key),v=s(R,v,g),x===null?z=R:x.sibling=R,x=R);return t&&w.forEach(function(N){return e(I,N)}),He&&Bi(I,g),z}function b(I,v,S,L){if(typeof S=="object"&&S!==null&&S.type===Hs&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case fu:e:{for(var z=S.key,x=v;x!==null;){if(x.key===z){if(z=S.type,z===Hs){if(x.tag===7){n(I,x.sibling),v=i(x,S.props.children),v.return=I,I=v;break e}}else if(x.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Zr&&Hy(z)===x.type){n(I,x.sibling),v=i(x,S.props),v.ref=_a(I,x,S),v.return=I,I=v;break e}n(I,x);break}else e(I,x);x=x.sibling}S.type===Hs?(v=ns(S.props.children,I.mode,L,S.key),v.return=I,I=v):(L=Qu(S.type,S.key,S.props,null,I.mode,L),L.ref=_a(I,v,S),L.return=I,I=L)}return o(I);case Bs:e:{for(x=S.key;v!==null;){if(v.key===x)if(v.tag===4&&v.stateNode.containerInfo===S.containerInfo&&v.stateNode.implementation===S.implementation){n(I,v.sibling),v=i(v,S.children||[]),v.return=I,I=v;break e}else{n(I,v);break}else e(I,v);v=v.sibling}v=Cd(S,I.mode,L),v.return=I,I=v}return o(I);case Zr:return x=S._init,b(I,v,x(S._payload),L)}if(xa(S))return T(I,v,S,L);if(pa(S))return A(I,v,S,L);Su(I,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,v!==null&&v.tag===6?(n(I,v.sibling),v=i(v,S),v.return=I,I=v):(n(I,v),v=kd(S,I.mode,L),v.return=I,I=v),o(I)):n(I,v)}return b}var _o=Bw(!0),Hw=Bw(!1),Sc=bi(null),Rc=null,Js=null,em=null;function tm(){em=Js=Rc=null}function nm(t){var e=Sc.current;Be(Sc),t._currentValue=e}function Cf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function uo(t,e){Rc=t,em=Js=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(nn=!0),t.firstContext=null)}function An(t){var e=t._currentValue;if(em!==t)if(t={context:t,memoizedValue:e,next:null},Js===null){if(Rc===null)throw Error(q(308));Js=t,Rc.dependencies={lanes:0,firstContext:t}}else Js=Js.next=t;return e}var Gi=null;function rm(t){Gi===null?Gi=[t]:Gi.push(t)}function Ww(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,rm(e)):(n.next=i.next,i.next=n),e.interleaved=n,Or(t,r)}function Or(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ei=!1;function im(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function qw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Cr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function mi(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Se&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Or(t,n)}return i=r.interleaved,i===null?(e.next=e,rm(r)):(e.next=i.next,i.next=e),r.interleaved=e,Or(t,n)}function Bu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Bp(t,n)}}function Wy(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ac(t,e,n,r){var i=t.updateQueue;ei=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=u))}if(s!==null){var f=i.baseState;o=0,d=c=u=null,l=s;do{var m=l.lane,_=l.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:_,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var T=t,A=l;switch(m=e,_=n,A.tag){case 1:if(T=A.payload,typeof T=="function"){f=T.call(_,f,m);break e}f=T;break e;case 3:T.flags=T.flags&-65537|128;case 0:if(T=A.payload,m=typeof T=="function"?T.call(_,f,m):T,m==null)break e;f=Xe({},f,m);break e;case 2:ei=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else _={eventTime:_,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=_,u=f):d=d.next=_,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);us|=o,t.lanes=o,t.memoizedState=f}}function qy(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(q(191,i));i.call(r)}}}var Ml={},ar=bi(Ml),dl=bi(Ml),fl=bi(Ml);function Qi(t){if(t===Ml)throw Error(q(174));return t}function sm(t,e){switch(Ve(fl,e),Ve(dl,t),Ve(ar,Ml),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:cf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=cf(e,t)}Be(ar),Ve(ar,e)}function wo(){Be(ar),Be(dl),Be(fl)}function Kw(t){Qi(fl.current);var e=Qi(ar.current),n=cf(e,t.type);e!==n&&(Ve(dl,t),Ve(ar,n))}function om(t){dl.current===t&&(Be(ar),Be(dl))}var Qe=bi(0);function Pc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Id=[];function am(){for(var t=0;t<Id.length;t++)Id[t]._workInProgressVersionPrimary=null;Id.length=0}var Hu=jr.ReactCurrentDispatcher,Sd=jr.ReactCurrentBatchConfig,ls=0,Ye=null,gt=null,wt=null,xc=!1,Ha=!1,pl=0,OA=0;function Ut(){throw Error(q(321))}function lm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Wn(t[n],e[n]))return!1;return!0}function um(t,e,n,r,i,s){if(ls=s,Ye=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Hu.current=t===null||t.memoizedState===null?FA:jA,t=n(r,i),Ha){s=0;do{if(Ha=!1,pl=0,25<=s)throw Error(q(301));s+=1,wt=gt=null,e.updateQueue=null,Hu.current=zA,t=n(r,i)}while(Ha)}if(Hu.current=kc,e=gt!==null&&gt.next!==null,ls=0,wt=gt=Ye=null,xc=!1,e)throw Error(q(300));return t}function cm(){var t=pl!==0;return pl=0,t}function tr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wt===null?Ye.memoizedState=wt=t:wt=wt.next=t,wt}function Pn(){if(gt===null){var t=Ye.alternate;t=t!==null?t.memoizedState:null}else t=gt.next;var e=wt===null?Ye.memoizedState:wt.next;if(e!==null)wt=e,gt=t;else{if(t===null)throw Error(q(310));gt=t,t={memoizedState:gt.memoizedState,baseState:gt.baseState,baseQueue:gt.baseQueue,queue:gt.queue,next:null},wt===null?Ye.memoizedState=wt=t:wt=wt.next=t}return wt}function ml(t,e){return typeof e=="function"?e(t):e}function Rd(t){var e=Pn(),n=e.queue;if(n===null)throw Error(q(311));n.lastRenderedReducer=t;var r=gt,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var d=c.lane;if((ls&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=f,o=r):u=u.next=f,Ye.lanes|=d,us|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,Wn(r,e.memoizedState)||(nn=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ye.lanes|=s,us|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ad(t){var e=Pn(),n=e.queue;if(n===null)throw Error(q(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Wn(s,e.memoizedState)||(nn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Gw(){}function Qw(t,e){var n=Ye,r=Pn(),i=e(),s=!Wn(r.memoizedState,i);if(s&&(r.memoizedState=i,nn=!0),r=r.queue,hm(Jw.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||wt!==null&&wt.memoizedState.tag&1){if(n.flags|=2048,gl(9,Xw.bind(null,n,r,i,e),void 0,null),Tt===null)throw Error(q(349));ls&30||Yw(n,e,i)}return i}function Yw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ye.updateQueue,e===null?(e={lastEffect:null,stores:null},Ye.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Xw(t,e,n,r){e.value=n,e.getSnapshot=r,Zw(e)&&e1(t)}function Jw(t,e,n){return n(function(){Zw(e)&&e1(t)})}function Zw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Wn(t,n)}catch{return!0}}function e1(t){var e=Or(t,1);e!==null&&Bn(e,t,1,-1)}function Ky(t){var e=tr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ml,lastRenderedState:t},e.queue=t,t=t.dispatch=UA.bind(null,Ye,t),[e.memoizedState,t]}function gl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ye.updateQueue,e===null?(e={lastEffect:null,stores:null},Ye.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function t1(){return Pn().memoizedState}function Wu(t,e,n,r){var i=tr();Ye.flags|=t,i.memoizedState=gl(1|e,n,void 0,r===void 0?null:r)}function hh(t,e,n,r){var i=Pn();r=r===void 0?null:r;var s=void 0;if(gt!==null){var o=gt.memoizedState;if(s=o.destroy,r!==null&&lm(r,o.deps)){i.memoizedState=gl(e,n,s,r);return}}Ye.flags|=t,i.memoizedState=gl(1|e,n,s,r)}function Gy(t,e){return Wu(8390656,8,t,e)}function hm(t,e){return hh(2048,8,t,e)}function n1(t,e){return hh(4,2,t,e)}function r1(t,e){return hh(4,4,t,e)}function i1(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function s1(t,e,n){return n=n!=null?n.concat([t]):null,hh(4,4,i1.bind(null,e,t),n)}function dm(){}function o1(t,e){var n=Pn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&lm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function a1(t,e){var n=Pn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&lm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function l1(t,e,n){return ls&21?(Wn(n,e)||(n=fw(),Ye.lanes|=n,us|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,nn=!0),t.memoizedState=n)}function MA(t,e){var n=be;be=n!==0&&4>n?n:4,t(!0);var r=Sd.transition;Sd.transition={};try{t(!1),e()}finally{be=n,Sd.transition=r}}function u1(){return Pn().memoizedState}function VA(t,e,n){var r=yi(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},c1(t))h1(e,n);else if(n=Ww(t,e,n,r),n!==null){var i=Yt();Bn(n,t,r,i),d1(n,e,r)}}function UA(t,e,n){var r=yi(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(c1(t))h1(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Wn(l,o)){var u=e.interleaved;u===null?(i.next=i,rm(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=Ww(t,e,i,r),n!==null&&(i=Yt(),Bn(n,t,r,i),d1(n,e,r))}}function c1(t){var e=t.alternate;return t===Ye||e!==null&&e===Ye}function h1(t,e){Ha=xc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function d1(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Bp(t,n)}}var kc={readContext:An,useCallback:Ut,useContext:Ut,useEffect:Ut,useImperativeHandle:Ut,useInsertionEffect:Ut,useLayoutEffect:Ut,useMemo:Ut,useReducer:Ut,useRef:Ut,useState:Ut,useDebugValue:Ut,useDeferredValue:Ut,useTransition:Ut,useMutableSource:Ut,useSyncExternalStore:Ut,useId:Ut,unstable_isNewReconciler:!1},FA={readContext:An,useCallback:function(t,e){return tr().memoizedState=[t,e===void 0?null:e],t},useContext:An,useEffect:Gy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Wu(4194308,4,i1.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Wu(4194308,4,t,e)},useInsertionEffect:function(t,e){return Wu(4,2,t,e)},useMemo:function(t,e){var n=tr();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=tr();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=VA.bind(null,Ye,t),[r.memoizedState,t]},useRef:function(t){var e=tr();return t={current:t},e.memoizedState=t},useState:Ky,useDebugValue:dm,useDeferredValue:function(t){return tr().memoizedState=t},useTransition:function(){var t=Ky(!1),e=t[0];return t=MA.bind(null,t[1]),tr().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ye,i=tr();if(He){if(n===void 0)throw Error(q(407));n=n()}else{if(n=e(),Tt===null)throw Error(q(349));ls&30||Yw(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Gy(Jw.bind(null,r,s,t),[t]),r.flags|=2048,gl(9,Xw.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=tr(),e=Tt.identifierPrefix;if(He){var n=Ar,r=Rr;n=(r&~(1<<32-$n(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=pl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=OA++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},jA={readContext:An,useCallback:o1,useContext:An,useEffect:hm,useImperativeHandle:s1,useInsertionEffect:n1,useLayoutEffect:r1,useMemo:a1,useReducer:Rd,useRef:t1,useState:function(){return Rd(ml)},useDebugValue:dm,useDeferredValue:function(t){var e=Pn();return l1(e,gt.memoizedState,t)},useTransition:function(){var t=Rd(ml)[0],e=Pn().memoizedState;return[t,e]},useMutableSource:Gw,useSyncExternalStore:Qw,useId:u1,unstable_isNewReconciler:!1},zA={readContext:An,useCallback:o1,useContext:An,useEffect:hm,useImperativeHandle:s1,useInsertionEffect:n1,useLayoutEffect:r1,useMemo:a1,useReducer:Ad,useRef:t1,useState:function(){return Ad(ml)},useDebugValue:dm,useDeferredValue:function(t){var e=Pn();return gt===null?e.memoizedState=t:l1(e,gt.memoizedState,t)},useTransition:function(){var t=Ad(ml)[0],e=Pn().memoizedState;return[t,e]},useMutableSource:Gw,useSyncExternalStore:Qw,useId:u1,unstable_isNewReconciler:!1};function Vn(t,e){if(t&&t.defaultProps){e=Xe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function bf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Xe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var dh={isMounted:function(t){return(t=t._reactInternals)?Ts(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Yt(),i=yi(t),s=Cr(r,i);s.payload=e,n!=null&&(s.callback=n),e=mi(t,s,i),e!==null&&(Bn(e,t,i,r),Bu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Yt(),i=yi(t),s=Cr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=mi(t,s,i),e!==null&&(Bn(e,t,i,r),Bu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Yt(),r=yi(t),i=Cr(n,r);i.tag=2,e!=null&&(i.callback=e),e=mi(t,i,r),e!==null&&(Bn(e,t,r,n),Bu(e,t,r))}};function Qy(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ll(n,r)||!ll(i,s):!0}function f1(t,e,n){var r=!1,i=Ri,s=e.contextType;return typeof s=="object"&&s!==null?s=An(s):(i=sn(e)?os:qt.current,r=e.contextTypes,s=(r=r!=null)?yo(t,i):Ri),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=dh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Yy(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&dh.enqueueReplaceState(e,e.state,null)}function Nf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},im(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=An(s):(s=sn(e)?os:qt.current,i.context=yo(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(bf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&dh.enqueueReplaceState(i,i.state,null),Ac(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Eo(t,e){try{var n="",r=e;do n+=mR(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Pd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Df(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var $A=typeof WeakMap=="function"?WeakMap:Map;function p1(t,e,n){n=Cr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){bc||(bc=!0,Bf=r),Df(t,e)},n}function m1(t,e,n){n=Cr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Df(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Df(t,e),typeof r!="function"&&(gi===null?gi=new Set([this]):gi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Xy(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new $A;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=nP.bind(null,t,e,n),e.then(t,t))}function Jy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Zy(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Cr(-1,1),e.tag=2,mi(n,e,1))),n.lanes|=1),t)}var BA=jr.ReactCurrentOwner,nn=!1;function Qt(t,e,n,r){e.child=t===null?Hw(e,null,n,r):_o(e,t.child,n,r)}function ev(t,e,n,r,i){n=n.render;var s=e.ref;return uo(e,i),r=um(t,e,n,r,s,i),n=cm(),t!==null&&!nn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Mr(t,e,i)):(He&&n&&Xp(e),e.flags|=1,Qt(t,e,r,i),e.child)}function tv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!wm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,g1(t,e,s,r,i)):(t=Qu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ll,n(o,r)&&t.ref===e.ref)return Mr(t,e,i)}return e.flags|=1,t=vi(s,r),t.ref=e.ref,t.return=e,e.child=t}function g1(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ll(s,r)&&t.ref===e.ref)if(nn=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(nn=!0);else return e.lanes=t.lanes,Mr(t,e,i)}return Lf(t,e,n,r,i)}function y1(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ve(eo,hn),hn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ve(eo,hn),hn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Ve(eo,hn),hn|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Ve(eo,hn),hn|=r;return Qt(t,e,i,n),e.child}function v1(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Lf(t,e,n,r,i){var s=sn(n)?os:qt.current;return s=yo(e,s),uo(e,i),n=um(t,e,n,r,s,i),r=cm(),t!==null&&!nn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Mr(t,e,i)):(He&&r&&Xp(e),e.flags|=1,Qt(t,e,n,i),e.child)}function nv(t,e,n,r,i){if(sn(n)){var s=!0;Ec(e)}else s=!1;if(uo(e,i),e.stateNode===null)qu(t,e),f1(e,n,r),Nf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=An(c):(c=sn(n)?os:qt.current,c=yo(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&Yy(e,o,r,c),ei=!1;var m=e.memoizedState;o.state=m,Ac(e,r,o,i),u=e.memoizedState,l!==r||m!==u||rn.current||ei?(typeof d=="function"&&(bf(e,n,d,r),u=e.memoizedState),(l=ei||Qy(e,n,l,r,m,u,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,qw(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Vn(e.type,l),o.props=c,f=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=An(u):(u=sn(n)?os:qt.current,u=yo(e,u));var _=n.getDerivedStateFromProps;(d=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==f||m!==u)&&Yy(e,o,r,u),ei=!1,m=e.memoizedState,o.state=m,Ac(e,r,o,i);var T=e.memoizedState;l!==f||m!==T||rn.current||ei?(typeof _=="function"&&(bf(e,n,_,r),T=e.memoizedState),(c=ei||Qy(e,n,c,r,m,T,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,T,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,T,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=T),o.props=r,o.state=T,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Of(t,e,n,r,s,i)}function Of(t,e,n,r,i,s){v1(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&zy(e,n,!1),Mr(t,e,s);r=e.stateNode,BA.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=_o(e,t.child,null,s),e.child=_o(e,null,l,s)):Qt(t,e,l,s),e.memoizedState=r.state,i&&zy(e,n,!0),e.child}function _1(t){var e=t.stateNode;e.pendingContext?jy(t,e.pendingContext,e.pendingContext!==e.context):e.context&&jy(t,e.context,!1),sm(t,e.containerInfo)}function rv(t,e,n,r,i){return vo(),Zp(i),e.flags|=256,Qt(t,e,n,r),e.child}var Mf={dehydrated:null,treeContext:null,retryLane:0};function Vf(t){return{baseLanes:t,cachePool:null,transitions:null}}function w1(t,e,n){var r=e.pendingProps,i=Qe.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ve(Qe,i&1),t===null)return kf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=mh(o,r,0,null),t=ns(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Vf(n),e.memoizedState=Mf,t):fm(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return HA(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=vi(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=vi(l,s):(s=ns(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Vf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Mf,r}return s=t.child,t=s.sibling,r=vi(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function fm(t,e){return e=mh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ru(t,e,n,r){return r!==null&&Zp(r),_o(e,t.child,null,n),t=fm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function HA(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Pd(Error(q(422))),Ru(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=mh({mode:"visible",children:r.children},i,0,null),s=ns(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&_o(e,t.child,null,o),e.child.memoizedState=Vf(o),e.memoizedState=Mf,s);if(!(e.mode&1))return Ru(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(q(419)),r=Pd(s,r,void 0),Ru(t,e,o,r)}if(l=(o&t.childLanes)!==0,nn||l){if(r=Tt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Or(t,i),Bn(r,t,i,-1))}return _m(),r=Pd(Error(q(421))),Ru(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=rP.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,fn=pi(i.nextSibling),gn=e,He=!0,jn=null,t!==null&&(Tn[In++]=Rr,Tn[In++]=Ar,Tn[In++]=as,Rr=t.id,Ar=t.overflow,as=e),e=fm(e,r.children),e.flags|=4096,e)}function iv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Cf(t.return,e,n)}function xd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function E1(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Qt(t,e,r.children,n),r=Qe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&iv(t,n,e);else if(t.tag===19)iv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ve(Qe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Pc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),xd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Pc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}xd(e,!0,n,null,s);break;case"together":xd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function qu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Mr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),us|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(q(153));if(e.child!==null){for(t=e.child,n=vi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=vi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function WA(t,e,n){switch(e.tag){case 3:_1(e),vo();break;case 5:Kw(e);break;case 1:sn(e.type)&&Ec(e);break;case 4:sm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Ve(Sc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ve(Qe,Qe.current&1),e.flags|=128,null):n&e.child.childLanes?w1(t,e,n):(Ve(Qe,Qe.current&1),t=Mr(t,e,n),t!==null?t.sibling:null);Ve(Qe,Qe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return E1(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ve(Qe,Qe.current),r)break;return null;case 22:case 23:return e.lanes=0,y1(t,e,n)}return Mr(t,e,n)}var T1,Uf,I1,S1;T1=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Uf=function(){};I1=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Qi(ar.current);var s=null;switch(n){case"input":i=of(t,i),r=of(t,r),s=[];break;case"select":i=Xe({},i,{value:void 0}),r=Xe({},r,{value:void 0}),s=[];break;case"textarea":i=uf(t,i),r=uf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=_c)}hf(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(tl.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(tl.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&je("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};S1=function(t,e,n,r){n!==r&&(e.flags|=4)};function wa(t,e){if(!He)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ft(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function qA(t,e,n){var r=e.pendingProps;switch(Jp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ft(e),null;case 1:return sn(e.type)&&wc(),Ft(e),null;case 3:return r=e.stateNode,wo(),Be(rn),Be(qt),am(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Iu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,jn!==null&&(qf(jn),jn=null))),Uf(t,e),Ft(e),null;case 5:om(e);var i=Qi(fl.current);if(n=e.type,t!==null&&e.stateNode!=null)I1(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(q(166));return Ft(e),null}if(t=Qi(ar.current),Iu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[rr]=e,r[hl]=s,t=(e.mode&1)!==0,n){case"dialog":je("cancel",r),je("close",r);break;case"iframe":case"object":case"embed":je("load",r);break;case"video":case"audio":for(i=0;i<Ca.length;i++)je(Ca[i],r);break;case"source":je("error",r);break;case"img":case"image":case"link":je("error",r),je("load",r);break;case"details":je("toggle",r);break;case"input":fy(r,s),je("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},je("invalid",r);break;case"textarea":my(r,s),je("invalid",r)}hf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Tu(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Tu(r.textContent,l,t),i=["children",""+l]):tl.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&je("scroll",r)}switch(n){case"input":pu(r),py(r,s,!0);break;case"textarea":pu(r),gy(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=_c)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=J0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[rr]=e,t[hl]=r,T1(t,e,!1,!1),e.stateNode=t;e:{switch(o=df(n,r),n){case"dialog":je("cancel",t),je("close",t),i=r;break;case"iframe":case"object":case"embed":je("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ca.length;i++)je(Ca[i],t);i=r;break;case"source":je("error",t),i=r;break;case"img":case"image":case"link":je("error",t),je("load",t),i=r;break;case"details":je("toggle",t),i=r;break;case"input":fy(t,r),i=of(t,r),je("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Xe({},r,{value:void 0}),je("invalid",t);break;case"textarea":my(t,r),i=uf(t,r),je("invalid",t);break;default:i=r}hf(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?tw(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Z0(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&nl(t,u):typeof u=="number"&&nl(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(tl.hasOwnProperty(s)?u!=null&&s==="onScroll"&&je("scroll",t):u!=null&&Vp(t,s,u,o))}switch(n){case"input":pu(t),py(t,r,!1);break;case"textarea":pu(t),gy(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Si(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?so(t,!!r.multiple,s,!1):r.defaultValue!=null&&so(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=_c)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ft(e),null;case 6:if(t&&e.stateNode!=null)S1(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(q(166));if(n=Qi(fl.current),Qi(ar.current),Iu(e)){if(r=e.stateNode,n=e.memoizedProps,r[rr]=e,(s=r.nodeValue!==n)&&(t=gn,t!==null))switch(t.tag){case 3:Tu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Tu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[rr]=e,e.stateNode=r}return Ft(e),null;case 13:if(Be(Qe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(He&&fn!==null&&e.mode&1&&!(e.flags&128))$w(),vo(),e.flags|=98560,s=!1;else if(s=Iu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(q(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(q(317));s[rr]=e}else vo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ft(e),s=!1}else jn!==null&&(qf(jn),jn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Qe.current&1?yt===0&&(yt=3):_m())),e.updateQueue!==null&&(e.flags|=4),Ft(e),null);case 4:return wo(),Uf(t,e),t===null&&ul(e.stateNode.containerInfo),Ft(e),null;case 10:return nm(e.type._context),Ft(e),null;case 17:return sn(e.type)&&wc(),Ft(e),null;case 19:if(Be(Qe),s=e.memoizedState,s===null)return Ft(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)wa(s,!1);else{if(yt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Pc(t),o!==null){for(e.flags|=128,wa(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ve(Qe,Qe.current&1|2),e.child}t=t.sibling}s.tail!==null&&ot()>To&&(e.flags|=128,r=!0,wa(s,!1),e.lanes=4194304)}else{if(!r)if(t=Pc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),wa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!He)return Ft(e),null}else 2*ot()-s.renderingStartTime>To&&n!==1073741824&&(e.flags|=128,r=!0,wa(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ot(),e.sibling=null,n=Qe.current,Ve(Qe,r?n&1|2:n&1),e):(Ft(e),null);case 22:case 23:return vm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?hn&1073741824&&(Ft(e),e.subtreeFlags&6&&(e.flags|=8192)):Ft(e),null;case 24:return null;case 25:return null}throw Error(q(156,e.tag))}function KA(t,e){switch(Jp(e),e.tag){case 1:return sn(e.type)&&wc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return wo(),Be(rn),Be(qt),am(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return om(e),null;case 13:if(Be(Qe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(q(340));vo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Be(Qe),null;case 4:return wo(),null;case 10:return nm(e.type._context),null;case 22:case 23:return vm(),null;case 24:return null;default:return null}}var Au=!1,$t=!1,GA=typeof WeakSet=="function"?WeakSet:Set,J=null;function Zs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){tt(t,e,r)}else n.current=null}function Ff(t,e,n){try{n()}catch(r){tt(t,e,r)}}var sv=!1;function QA(t,e){if(Tf=gc,t=kw(),Yp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,d=0,f=t,m=null;t:for(;;){for(var _;f!==n||i!==0&&f.nodeType!==3||(l=o+i),f!==s||r!==0&&f.nodeType!==3||(u=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(_=f.firstChild)!==null;)m=f,f=_;for(;;){if(f===t)break t;if(m===n&&++c===i&&(l=o),m===s&&++d===r&&(u=o),(_=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=_}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(If={focusedElem:t,selectionRange:n},gc=!1,J=e;J!==null;)if(e=J,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,J=t;else for(;J!==null;){e=J;try{var T=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(T!==null){var A=T.memoizedProps,b=T.memoizedState,I=e.stateNode,v=I.getSnapshotBeforeUpdate(e.elementType===e.type?A:Vn(e.type,A),b);I.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(q(163))}}catch(L){tt(e,e.return,L)}if(t=e.sibling,t!==null){t.return=e.return,J=t;break}J=e.return}return T=sv,sv=!1,T}function Wa(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ff(e,n,s)}i=i.next}while(i!==r)}}function fh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function jf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function R1(t){var e=t.alternate;e!==null&&(t.alternate=null,R1(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[rr],delete e[hl],delete e[Af],delete e[bA],delete e[NA])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function A1(t){return t.tag===5||t.tag===3||t.tag===4}function ov(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||A1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function zf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=_c));else if(r!==4&&(t=t.child,t!==null))for(zf(t,e,n),t=t.sibling;t!==null;)zf(t,e,n),t=t.sibling}function $f(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for($f(t,e,n),t=t.sibling;t!==null;)$f(t,e,n),t=t.sibling}var Rt=null,Un=!1;function Qr(t,e,n){for(n=n.child;n!==null;)P1(t,e,n),n=n.sibling}function P1(t,e,n){if(or&&typeof or.onCommitFiberUnmount=="function")try{or.onCommitFiberUnmount(sh,n)}catch{}switch(n.tag){case 5:$t||Zs(n,e);case 6:var r=Rt,i=Un;Rt=null,Qr(t,e,n),Rt=r,Un=i,Rt!==null&&(Un?(t=Rt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Rt.removeChild(n.stateNode));break;case 18:Rt!==null&&(Un?(t=Rt,n=n.stateNode,t.nodeType===8?Ed(t.parentNode,n):t.nodeType===1&&Ed(t,n),ol(t)):Ed(Rt,n.stateNode));break;case 4:r=Rt,i=Un,Rt=n.stateNode.containerInfo,Un=!0,Qr(t,e,n),Rt=r,Un=i;break;case 0:case 11:case 14:case 15:if(!$t&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ff(n,e,o),i=i.next}while(i!==r)}Qr(t,e,n);break;case 1:if(!$t&&(Zs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){tt(n,e,l)}Qr(t,e,n);break;case 21:Qr(t,e,n);break;case 22:n.mode&1?($t=(r=$t)||n.memoizedState!==null,Qr(t,e,n),$t=r):Qr(t,e,n);break;default:Qr(t,e,n)}}function av(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new GA),e.forEach(function(r){var i=iP.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Mn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Rt=l.stateNode,Un=!1;break e;case 3:Rt=l.stateNode.containerInfo,Un=!0;break e;case 4:Rt=l.stateNode.containerInfo,Un=!0;break e}l=l.return}if(Rt===null)throw Error(q(160));P1(s,o,i),Rt=null,Un=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){tt(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)x1(e,t),e=e.sibling}function x1(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Mn(e,t),er(t),r&4){try{Wa(3,t,t.return),fh(3,t)}catch(A){tt(t,t.return,A)}try{Wa(5,t,t.return)}catch(A){tt(t,t.return,A)}}break;case 1:Mn(e,t),er(t),r&512&&n!==null&&Zs(n,n.return);break;case 5:if(Mn(e,t),er(t),r&512&&n!==null&&Zs(n,n.return),t.flags&32){var i=t.stateNode;try{nl(i,"")}catch(A){tt(t,t.return,A)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Y0(i,s),df(l,o);var c=df(l,s);for(o=0;o<u.length;o+=2){var d=u[o],f=u[o+1];d==="style"?tw(i,f):d==="dangerouslySetInnerHTML"?Z0(i,f):d==="children"?nl(i,f):Vp(i,d,f,c)}switch(l){case"input":af(i,s);break;case"textarea":X0(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?so(i,!!s.multiple,_,!1):m!==!!s.multiple&&(s.defaultValue!=null?so(i,!!s.multiple,s.defaultValue,!0):so(i,!!s.multiple,s.multiple?[]:"",!1))}i[hl]=s}catch(A){tt(t,t.return,A)}}break;case 6:if(Mn(e,t),er(t),r&4){if(t.stateNode===null)throw Error(q(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(A){tt(t,t.return,A)}}break;case 3:if(Mn(e,t),er(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ol(e.containerInfo)}catch(A){tt(t,t.return,A)}break;case 4:Mn(e,t),er(t);break;case 13:Mn(e,t),er(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(gm=ot())),r&4&&av(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?($t=(c=$t)||d,Mn(e,t),$t=c):Mn(e,t),er(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(J=t,d=t.child;d!==null;){for(f=J=d;J!==null;){switch(m=J,_=m.child,m.tag){case 0:case 11:case 14:case 15:Wa(4,m,m.return);break;case 1:Zs(m,m.return);var T=m.stateNode;if(typeof T.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,T.props=e.memoizedProps,T.state=e.memoizedState,T.componentWillUnmount()}catch(A){tt(r,n,A)}}break;case 5:Zs(m,m.return);break;case 22:if(m.memoizedState!==null){uv(f);continue}}_!==null?(_.return=m,J=_):uv(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=ew("display",o))}catch(A){tt(t,t.return,A)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(A){tt(t,t.return,A)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Mn(e,t),er(t),r&4&&av(t);break;case 21:break;default:Mn(e,t),er(t)}}function er(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(A1(n)){var r=n;break e}n=n.return}throw Error(q(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(nl(i,""),r.flags&=-33);var s=ov(t);$f(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=ov(t);zf(t,l,o);break;default:throw Error(q(161))}}catch(u){tt(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function YA(t,e,n){J=t,k1(t)}function k1(t,e,n){for(var r=(t.mode&1)!==0;J!==null;){var i=J,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Au;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||$t;l=Au;var c=$t;if(Au=o,($t=u)&&!c)for(J=i;J!==null;)o=J,u=o.child,o.tag===22&&o.memoizedState!==null?cv(i):u!==null?(u.return=o,J=u):cv(i);for(;s!==null;)J=s,k1(s),s=s.sibling;J=i,Au=l,$t=c}lv(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,J=s):lv(t)}}function lv(t){for(;J!==null;){var e=J;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:$t||fh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!$t)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Vn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&qy(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}qy(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&ol(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(q(163))}$t||e.flags&512&&jf(e)}catch(m){tt(e,e.return,m)}}if(e===t){J=null;break}if(n=e.sibling,n!==null){n.return=e.return,J=n;break}J=e.return}}function uv(t){for(;J!==null;){var e=J;if(e===t){J=null;break}var n=e.sibling;if(n!==null){n.return=e.return,J=n;break}J=e.return}}function cv(t){for(;J!==null;){var e=J;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{fh(4,e)}catch(u){tt(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){tt(e,i,u)}}var s=e.return;try{jf(e)}catch(u){tt(e,s,u)}break;case 5:var o=e.return;try{jf(e)}catch(u){tt(e,o,u)}}}catch(u){tt(e,e.return,u)}if(e===t){J=null;break}var l=e.sibling;if(l!==null){l.return=e.return,J=l;break}J=e.return}}var XA=Math.ceil,Cc=jr.ReactCurrentDispatcher,pm=jr.ReactCurrentOwner,Rn=jr.ReactCurrentBatchConfig,Se=0,Tt=null,dt=null,xt=0,hn=0,eo=bi(0),yt=0,yl=null,us=0,ph=0,mm=0,qa=null,en=null,gm=0,To=1/0,Tr=null,bc=!1,Bf=null,gi=null,Pu=!1,ui=null,Nc=0,Ka=0,Hf=null,Ku=-1,Gu=0;function Yt(){return Se&6?ot():Ku!==-1?Ku:Ku=ot()}function yi(t){return t.mode&1?Se&2&&xt!==0?xt&-xt:LA.transition!==null?(Gu===0&&(Gu=fw()),Gu):(t=be,t!==0||(t=window.event,t=t===void 0?16:ww(t.type)),t):1}function Bn(t,e,n,r){if(50<Ka)throw Ka=0,Hf=null,Error(q(185));Dl(t,n,r),(!(Se&2)||t!==Tt)&&(t===Tt&&(!(Se&2)&&(ph|=n),yt===4&&ni(t,xt)),on(t,r),n===1&&Se===0&&!(e.mode&1)&&(To=ot()+500,ch&&Ni()))}function on(t,e){var n=t.callbackNode;LR(t,e);var r=mc(t,t===Tt?xt:0);if(r===0)n!==null&&_y(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&_y(n),e===1)t.tag===0?DA(hv.bind(null,t)):Fw(hv.bind(null,t)),kA(function(){!(Se&6)&&Ni()}),n=null;else{switch(pw(r)){case 1:n=$p;break;case 4:n=hw;break;case 16:n=pc;break;case 536870912:n=dw;break;default:n=pc}n=V1(n,C1.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function C1(t,e){if(Ku=-1,Gu=0,Se&6)throw Error(q(327));var n=t.callbackNode;if(co()&&t.callbackNode!==n)return null;var r=mc(t,t===Tt?xt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Dc(t,r);else{e=r;var i=Se;Se|=2;var s=N1();(Tt!==t||xt!==e)&&(Tr=null,To=ot()+500,ts(t,e));do try{eP();break}catch(l){b1(t,l)}while(!0);tm(),Cc.current=s,Se=i,dt!==null?e=0:(Tt=null,xt=0,e=yt)}if(e!==0){if(e===2&&(i=yf(t),i!==0&&(r=i,e=Wf(t,i))),e===1)throw n=yl,ts(t,0),ni(t,r),on(t,ot()),n;if(e===6)ni(t,r);else{if(i=t.current.alternate,!(r&30)&&!JA(i)&&(e=Dc(t,r),e===2&&(s=yf(t),s!==0&&(r=s,e=Wf(t,s))),e===1))throw n=yl,ts(t,0),ni(t,r),on(t,ot()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(q(345));case 2:Hi(t,en,Tr);break;case 3:if(ni(t,r),(r&130023424)===r&&(e=gm+500-ot(),10<e)){if(mc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Yt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Rf(Hi.bind(null,t,en,Tr),e);break}Hi(t,en,Tr);break;case 4:if(ni(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-$n(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ot()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*XA(r/1960))-r,10<r){t.timeoutHandle=Rf(Hi.bind(null,t,en,Tr),r);break}Hi(t,en,Tr);break;case 5:Hi(t,en,Tr);break;default:throw Error(q(329))}}}return on(t,ot()),t.callbackNode===n?C1.bind(null,t):null}function Wf(t,e){var n=qa;return t.current.memoizedState.isDehydrated&&(ts(t,e).flags|=256),t=Dc(t,e),t!==2&&(e=en,en=n,e!==null&&qf(e)),t}function qf(t){en===null?en=t:en.push.apply(en,t)}function JA(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Wn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ni(t,e){for(e&=~mm,e&=~ph,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-$n(e),r=1<<n;t[n]=-1,e&=~r}}function hv(t){if(Se&6)throw Error(q(327));co();var e=mc(t,0);if(!(e&1))return on(t,ot()),null;var n=Dc(t,e);if(t.tag!==0&&n===2){var r=yf(t);r!==0&&(e=r,n=Wf(t,r))}if(n===1)throw n=yl,ts(t,0),ni(t,e),on(t,ot()),n;if(n===6)throw Error(q(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Hi(t,en,Tr),on(t,ot()),null}function ym(t,e){var n=Se;Se|=1;try{return t(e)}finally{Se=n,Se===0&&(To=ot()+500,ch&&Ni())}}function cs(t){ui!==null&&ui.tag===0&&!(Se&6)&&co();var e=Se;Se|=1;var n=Rn.transition,r=be;try{if(Rn.transition=null,be=1,t)return t()}finally{be=r,Rn.transition=n,Se=e,!(Se&6)&&Ni()}}function vm(){hn=eo.current,Be(eo)}function ts(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,xA(n)),dt!==null)for(n=dt.return;n!==null;){var r=n;switch(Jp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&wc();break;case 3:wo(),Be(rn),Be(qt),am();break;case 5:om(r);break;case 4:wo();break;case 13:Be(Qe);break;case 19:Be(Qe);break;case 10:nm(r.type._context);break;case 22:case 23:vm()}n=n.return}if(Tt=t,dt=t=vi(t.current,null),xt=hn=e,yt=0,yl=null,mm=ph=us=0,en=qa=null,Gi!==null){for(e=0;e<Gi.length;e++)if(n=Gi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Gi=null}return t}function b1(t,e){do{var n=dt;try{if(tm(),Hu.current=kc,xc){for(var r=Ye.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}xc=!1}if(ls=0,wt=gt=Ye=null,Ha=!1,pl=0,pm.current=null,n===null||n.return===null){yt=1,yl=e,dt=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=xt,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=l,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var _=Jy(o);if(_!==null){_.flags&=-257,Zy(_,o,l,s,e),_.mode&1&&Xy(s,c,e),e=_,u=c;var T=e.updateQueue;if(T===null){var A=new Set;A.add(u),e.updateQueue=A}else T.add(u);break e}else{if(!(e&1)){Xy(s,c,e),_m();break e}u=Error(q(426))}}else if(He&&l.mode&1){var b=Jy(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Zy(b,o,l,s,e),Zp(Eo(u,l));break e}}s=u=Eo(u,l),yt!==4&&(yt=2),qa===null?qa=[s]:qa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var I=p1(s,u,e);Wy(s,I);break e;case 1:l=u;var v=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(gi===null||!gi.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var L=m1(s,l,e);Wy(s,L);break e}}s=s.return}while(s!==null)}L1(n)}catch(z){e=z,dt===n&&n!==null&&(dt=n=n.return);continue}break}while(!0)}function N1(){var t=Cc.current;return Cc.current=kc,t===null?kc:t}function _m(){(yt===0||yt===3||yt===2)&&(yt=4),Tt===null||!(us&268435455)&&!(ph&268435455)||ni(Tt,xt)}function Dc(t,e){var n=Se;Se|=2;var r=N1();(Tt!==t||xt!==e)&&(Tr=null,ts(t,e));do try{ZA();break}catch(i){b1(t,i)}while(!0);if(tm(),Se=n,Cc.current=r,dt!==null)throw Error(q(261));return Tt=null,xt=0,yt}function ZA(){for(;dt!==null;)D1(dt)}function eP(){for(;dt!==null&&!RR();)D1(dt)}function D1(t){var e=M1(t.alternate,t,hn);t.memoizedProps=t.pendingProps,e===null?L1(t):dt=e,pm.current=null}function L1(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=KA(n,e),n!==null){n.flags&=32767,dt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{yt=6,dt=null;return}}else if(n=qA(n,e,hn),n!==null){dt=n;return}if(e=e.sibling,e!==null){dt=e;return}dt=e=t}while(e!==null);yt===0&&(yt=5)}function Hi(t,e,n){var r=be,i=Rn.transition;try{Rn.transition=null,be=1,tP(t,e,n,r)}finally{Rn.transition=i,be=r}return null}function tP(t,e,n,r){do co();while(ui!==null);if(Se&6)throw Error(q(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(q(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(OR(t,s),t===Tt&&(dt=Tt=null,xt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Pu||(Pu=!0,V1(pc,function(){return co(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Rn.transition,Rn.transition=null;var o=be;be=1;var l=Se;Se|=4,pm.current=null,QA(t,n),x1(n,t),EA(If),gc=!!Tf,If=Tf=null,t.current=n,YA(n),AR(),Se=l,be=o,Rn.transition=s}else t.current=n;if(Pu&&(Pu=!1,ui=t,Nc=i),s=t.pendingLanes,s===0&&(gi=null),kR(n.stateNode),on(t,ot()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(bc)throw bc=!1,t=Bf,Bf=null,t;return Nc&1&&t.tag!==0&&co(),s=t.pendingLanes,s&1?t===Hf?Ka++:(Ka=0,Hf=t):Ka=0,Ni(),null}function co(){if(ui!==null){var t=pw(Nc),e=Rn.transition,n=be;try{if(Rn.transition=null,be=16>t?16:t,ui===null)var r=!1;else{if(t=ui,ui=null,Nc=0,Se&6)throw Error(q(331));var i=Se;for(Se|=4,J=t.current;J!==null;){var s=J,o=s.child;if(J.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(J=c;J!==null;){var d=J;switch(d.tag){case 0:case 11:case 15:Wa(8,d,s)}var f=d.child;if(f!==null)f.return=d,J=f;else for(;J!==null;){d=J;var m=d.sibling,_=d.return;if(R1(d),d===c){J=null;break}if(m!==null){m.return=_,J=m;break}J=_}}}var T=s.alternate;if(T!==null){var A=T.child;if(A!==null){T.child=null;do{var b=A.sibling;A.sibling=null,A=b}while(A!==null)}}J=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,J=o;else e:for(;J!==null;){if(s=J,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Wa(9,s,s.return)}var I=s.sibling;if(I!==null){I.return=s.return,J=I;break e}J=s.return}}var v=t.current;for(J=v;J!==null;){o=J;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,J=S;else e:for(o=v;J!==null;){if(l=J,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:fh(9,l)}}catch(z){tt(l,l.return,z)}if(l===o){J=null;break e}var L=l.sibling;if(L!==null){L.return=l.return,J=L;break e}J=l.return}}if(Se=i,Ni(),or&&typeof or.onPostCommitFiberRoot=="function")try{or.onPostCommitFiberRoot(sh,t)}catch{}r=!0}return r}finally{be=n,Rn.transition=e}}return!1}function dv(t,e,n){e=Eo(n,e),e=p1(t,e,1),t=mi(t,e,1),e=Yt(),t!==null&&(Dl(t,1,e),on(t,e))}function tt(t,e,n){if(t.tag===3)dv(t,t,n);else for(;e!==null;){if(e.tag===3){dv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(gi===null||!gi.has(r))){t=Eo(n,t),t=m1(e,t,1),e=mi(e,t,1),t=Yt(),e!==null&&(Dl(e,1,t),on(e,t));break}}e=e.return}}function nP(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Yt(),t.pingedLanes|=t.suspendedLanes&n,Tt===t&&(xt&n)===n&&(yt===4||yt===3&&(xt&130023424)===xt&&500>ot()-gm?ts(t,0):mm|=n),on(t,e)}function O1(t,e){e===0&&(t.mode&1?(e=yu,yu<<=1,!(yu&130023424)&&(yu=4194304)):e=1);var n=Yt();t=Or(t,e),t!==null&&(Dl(t,e,n),on(t,n))}function rP(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),O1(t,n)}function iP(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(q(314))}r!==null&&r.delete(e),O1(t,n)}var M1;M1=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||rn.current)nn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return nn=!1,WA(t,e,n);nn=!!(t.flags&131072)}else nn=!1,He&&e.flags&1048576&&jw(e,Ic,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;qu(t,e),t=e.pendingProps;var i=yo(e,qt.current);uo(e,n),i=um(null,e,r,t,i,n);var s=cm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,sn(r)?(s=!0,Ec(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,im(e),i.updater=dh,e.stateNode=i,i._reactInternals=e,Nf(e,r,t,n),e=Of(null,e,r,!0,s,n)):(e.tag=0,He&&s&&Xp(e),Qt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(qu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=oP(r),t=Vn(r,t),i){case 0:e=Lf(null,e,r,t,n);break e;case 1:e=nv(null,e,r,t,n);break e;case 11:e=ev(null,e,r,t,n);break e;case 14:e=tv(null,e,r,Vn(r.type,t),n);break e}throw Error(q(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vn(r,i),Lf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vn(r,i),nv(t,e,r,i,n);case 3:e:{if(_1(e),t===null)throw Error(q(387));r=e.pendingProps,s=e.memoizedState,i=s.element,qw(t,e),Ac(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Eo(Error(q(423)),e),e=rv(t,e,r,n,i);break e}else if(r!==i){i=Eo(Error(q(424)),e),e=rv(t,e,r,n,i);break e}else for(fn=pi(e.stateNode.containerInfo.firstChild),gn=e,He=!0,jn=null,n=Hw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(vo(),r===i){e=Mr(t,e,n);break e}Qt(t,e,r,n)}e=e.child}return e;case 5:return Kw(e),t===null&&kf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Sf(r,i)?o=null:s!==null&&Sf(r,s)&&(e.flags|=32),v1(t,e),Qt(t,e,o,n),e.child;case 6:return t===null&&kf(e),null;case 13:return w1(t,e,n);case 4:return sm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=_o(e,null,r,n):Qt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vn(r,i),ev(t,e,r,i,n);case 7:return Qt(t,e,e.pendingProps,n),e.child;case 8:return Qt(t,e,e.pendingProps.children,n),e.child;case 12:return Qt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Ve(Sc,r._currentValue),r._currentValue=o,s!==null)if(Wn(s.value,o)){if(s.children===i.children&&!rn.current){e=Mr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Cr(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Cf(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(q(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Cf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Qt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,uo(e,n),i=An(i),r=r(i),e.flags|=1,Qt(t,e,r,n),e.child;case 14:return r=e.type,i=Vn(r,e.pendingProps),i=Vn(r.type,i),tv(t,e,r,i,n);case 15:return g1(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vn(r,i),qu(t,e),e.tag=1,sn(r)?(t=!0,Ec(e)):t=!1,uo(e,n),f1(e,r,i),Nf(e,r,i,n),Of(null,e,r,!0,t,n);case 19:return E1(t,e,n);case 22:return y1(t,e,n)}throw Error(q(156,e.tag))};function V1(t,e){return cw(t,e)}function sP(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Sn(t,e,n,r){return new sP(t,e,n,r)}function wm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function oP(t){if(typeof t=="function")return wm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Fp)return 11;if(t===jp)return 14}return 2}function vi(t,e){var n=t.alternate;return n===null?(n=Sn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Qu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")wm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Hs:return ns(n.children,i,s,e);case Up:o=8,i|=8;break;case tf:return t=Sn(12,n,e,i|2),t.elementType=tf,t.lanes=s,t;case nf:return t=Sn(13,n,e,i),t.elementType=nf,t.lanes=s,t;case rf:return t=Sn(19,n,e,i),t.elementType=rf,t.lanes=s,t;case K0:return mh(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case W0:o=10;break e;case q0:o=9;break e;case Fp:o=11;break e;case jp:o=14;break e;case Zr:o=16,r=null;break e}throw Error(q(130,t==null?t:typeof t,""))}return e=Sn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ns(t,e,n,r){return t=Sn(7,t,r,e),t.lanes=n,t}function mh(t,e,n,r){return t=Sn(22,t,r,e),t.elementType=K0,t.lanes=n,t.stateNode={isHidden:!1},t}function kd(t,e,n){return t=Sn(6,t,null,e),t.lanes=n,t}function Cd(t,e,n){return e=Sn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function aP(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=cd(0),this.expirationTimes=cd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Em(t,e,n,r,i,s,o,l,u){return t=new aP(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Sn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},im(s),t}function lP(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Bs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function U1(t){if(!t)return Ri;t=t._reactInternals;e:{if(Ts(t)!==t||t.tag!==1)throw Error(q(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(sn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(q(171))}if(t.tag===1){var n=t.type;if(sn(n))return Uw(t,n,e)}return e}function F1(t,e,n,r,i,s,o,l,u){return t=Em(n,r,!0,t,i,s,o,l,u),t.context=U1(null),n=t.current,r=Yt(),i=yi(n),s=Cr(r,i),s.callback=e??null,mi(n,s,i),t.current.lanes=i,Dl(t,i,r),on(t,r),t}function gh(t,e,n,r){var i=e.current,s=Yt(),o=yi(i);return n=U1(n),e.context===null?e.context=n:e.pendingContext=n,e=Cr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=mi(i,e,o),t!==null&&(Bn(t,i,o,s),Bu(t,i,o)),o}function Lc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function fv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Tm(t,e){fv(t,e),(t=t.alternate)&&fv(t,e)}function uP(){return null}var j1=typeof reportError=="function"?reportError:function(t){console.error(t)};function Im(t){this._internalRoot=t}yh.prototype.render=Im.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(q(409));gh(t,e,null,null)};yh.prototype.unmount=Im.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;cs(function(){gh(null,t,null,null)}),e[Lr]=null}};function yh(t){this._internalRoot=t}yh.prototype.unstable_scheduleHydration=function(t){if(t){var e=yw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ti.length&&e!==0&&e<ti[n].priority;n++);ti.splice(n,0,t),n===0&&_w(t)}};function Sm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function vh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function pv(){}function cP(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Lc(o);s.call(c)}}var o=F1(e,r,t,0,null,!1,!1,"",pv);return t._reactRootContainer=o,t[Lr]=o.current,ul(t.nodeType===8?t.parentNode:t),cs(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=Lc(u);l.call(c)}}var u=Em(t,0,!1,null,null,!1,!1,"",pv);return t._reactRootContainer=u,t[Lr]=u.current,ul(t.nodeType===8?t.parentNode:t),cs(function(){gh(e,u,n,r)}),u}function _h(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Lc(o);l.call(u)}}gh(e,o,t,i)}else o=cP(n,e,t,i,r);return Lc(o)}mw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ka(e.pendingLanes);n!==0&&(Bp(e,n|1),on(e,ot()),!(Se&6)&&(To=ot()+500,Ni()))}break;case 13:cs(function(){var r=Or(t,1);if(r!==null){var i=Yt();Bn(r,t,1,i)}}),Tm(t,1)}};Hp=function(t){if(t.tag===13){var e=Or(t,134217728);if(e!==null){var n=Yt();Bn(e,t,134217728,n)}Tm(t,134217728)}};gw=function(t){if(t.tag===13){var e=yi(t),n=Or(t,e);if(n!==null){var r=Yt();Bn(n,t,e,r)}Tm(t,e)}};yw=function(){return be};vw=function(t,e){var n=be;try{return be=t,e()}finally{be=n}};pf=function(t,e,n){switch(e){case"input":if(af(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=uh(r);if(!i)throw Error(q(90));Q0(r),af(r,i)}}}break;case"textarea":X0(t,n);break;case"select":e=n.value,e!=null&&so(t,!!n.multiple,e,!1)}};iw=ym;sw=cs;var hP={usingClientEntryPoint:!1,Events:[Ol,Gs,uh,nw,rw,ym]},Ea={findFiberByHostInstance:Ki,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},dP={bundleType:Ea.bundleType,version:Ea.version,rendererPackageName:Ea.rendererPackageName,rendererConfig:Ea.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:jr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=lw(t),t===null?null:t.stateNode},findFiberByHostInstance:Ea.findFiberByHostInstance||uP,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xu.isDisabled&&xu.supportsFiber)try{sh=xu.inject(dP),or=xu}catch{}}vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hP;vn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Sm(e))throw Error(q(200));return lP(t,e,null,n)};vn.createRoot=function(t,e){if(!Sm(t))throw Error(q(299));var n=!1,r="",i=j1;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Em(t,1,!1,null,null,n,!1,r,i),t[Lr]=e.current,ul(t.nodeType===8?t.parentNode:t),new Im(e)};vn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(q(188)):(t=Object.keys(t).join(","),Error(q(268,t)));return t=lw(e),t=t===null?null:t.stateNode,t};vn.flushSync=function(t){return cs(t)};vn.hydrate=function(t,e,n){if(!vh(e))throw Error(q(200));return _h(null,t,e,!0,n)};vn.hydrateRoot=function(t,e,n){if(!Sm(t))throw Error(q(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=j1;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=F1(e,null,t,1,n??null,i,!1,s,o),t[Lr]=e.current,ul(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new yh(e)};vn.render=function(t,e,n){if(!vh(e))throw Error(q(200));return _h(null,t,e,!1,n)};vn.unmountComponentAtNode=function(t){if(!vh(t))throw Error(q(40));return t._reactRootContainer?(cs(function(){_h(null,null,t,!1,function(){t._reactRootContainer=null,t[Lr]=null})}),!0):!1};vn.unstable_batchedUpdates=ym;vn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!vh(n))throw Error(q(200));if(t==null||t._reactInternals===void 0)throw Error(q(38));return _h(t,e,n,!1,r)};vn.version="18.3.1-next-f1338f8080-20240426";function z1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(z1)}catch(t){console.error(t)}}z1(),z0.exports=vn;var Rm=z0.exports;const fP=k0(Rm),pP=x0({__proto__:null,default:fP},[Rm]);var mv=Rm;Zd.createRoot=mv.createRoot,Zd.hydrateRoot=mv.hydrateRoot;/**
 * @remix-run/router v1.19.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ge(){return Ge=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ge.apply(this,arguments)}var ut;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(ut||(ut={}));const gv="popstate";function mP(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return vl("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:hs(i)}return yP(e,n,null,t)}function ge(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Io(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function gP(){return Math.random().toString(36).substr(2,8)}function yv(t,e){return{usr:t.state,key:t.key,idx:e}}function vl(t,e,n,r){return n===void 0&&(n=null),Ge({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Di(e):e,{state:n,key:e&&e.key||r||gP()})}function hs(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Di(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function yP(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=ut.Pop,u=null,c=d();c==null&&(c=0,o.replaceState(Ge({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function f(){l=ut.Pop;let b=d(),I=b==null?null:b-c;c=b,u&&u({action:l,location:A.location,delta:I})}function m(b,I){l=ut.Push;let v=vl(A.location,b,I);c=d()+1;let S=yv(v,c),L=A.createHref(v);try{o.pushState(S,"",L)}catch(z){if(z instanceof DOMException&&z.name==="DataCloneError")throw z;i.location.assign(L)}s&&u&&u({action:l,location:A.location,delta:1})}function _(b,I){l=ut.Replace;let v=vl(A.location,b,I);c=d();let S=yv(v,c),L=A.createHref(v);o.replaceState(S,"",L),s&&u&&u({action:l,location:A.location,delta:0})}function T(b){let I=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof b=="string"?b:hs(b);return v=v.replace(/ $/,"%20"),ge(I,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,I)}let A={get action(){return l},get location(){return t(i,o)},listen(b){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(gv,f),u=b,()=>{i.removeEventListener(gv,f),u=null}},createHref(b){return e(i,b)},createURL:T,encodeLocation(b){let I=T(b);return{pathname:I.pathname,search:I.search,hash:I.hash}},push:m,replace:_,go(b){return o.go(b)}};return A}var Le;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Le||(Le={}));const vP=new Set(["lazy","caseSensitive","path","id","index","children"]);function _P(t){return t.index===!0}function _l(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,s)=>{let o=[...n,String(s)],l=typeof i.id=="string"?i.id:o.join("-");if(ge(i.index!==!0||!i.children,"Cannot specify children on an index route"),ge(!r[l],'Found a route id collision on id "'+l+`".  Route id's must be globally unique within Data Router usages`),_P(i)){let u=Ge({},i,e(i),{id:l});return r[l]=u,u}else{let u=Ge({},i,e(i),{id:l,children:void 0});return r[l]=u,i.children&&(u.children=_l(i.children,e,o,r)),u}})}function qi(t,e,n){return n===void 0&&(n="/"),Yu(t,e,n,!1)}function Yu(t,e,n,r){let i=typeof e=="string"?Di(e):e,s=zo(i.pathname||"/",n);if(s==null)return null;let o=$1(t);EP(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=NP(s);l=CP(o[u],c,r)}return l}function wP(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function $1(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(ge(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=br([r,u.relativePath]),d=n.concat(u);s.children&&s.children.length>0&&(ge(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),$1(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:xP(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of B1(s.path))i(s,o,u)}),e}function B1(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=B1(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function EP(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:kP(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const TP=/^:[\w-]+$/,IP=3,SP=2,RP=1,AP=10,PP=-2,vv=t=>t==="*";function xP(t,e){let n=t.split("/"),r=n.length;return n.some(vv)&&(r+=PP),e&&(r+=SP),n.filter(i=>!vv(i)).reduce((i,s)=>i+(TP.test(s)?IP:s===""?RP:AP),r)}function kP(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function CP(t,e,n){n===void 0&&(n=!1);let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",f=_v({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),m=u.route;if(!f&&c&&n&&!r[r.length-1].route.index&&(f=_v({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},d)),!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:br([s,f.pathname]),pathnameBase:OP(br([s,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(s=br([s,f.pathnameBase]))}return o}function _v(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=bP(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,d,f)=>{let{paramName:m,isOptional:_}=d;if(m==="*"){let A=l[f]||"";o=s.slice(0,s.length-A.length).replace(/(.)\/+$/,"$1")}const T=l[f];return _&&!T?c[m]=void 0:c[m]=(T||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function bP(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Io(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function NP(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Io(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function zo(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function DP(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Di(t):t;return{pathname:n?n.startsWith("/")?n:LP(n,e):e,search:MP(r),hash:VP(i)}}function LP(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function bd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function H1(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function wh(t,e){let n=H1(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Eh(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Di(t):(i=Ge({},t),ge(!i.pathname||!i.pathname.includes("?"),bd("?","pathname","search",i)),ge(!i.pathname||!i.pathname.includes("#"),bd("#","pathname","hash",i)),ge(!i.search||!i.search.includes("#"),bd("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),f-=1;i.pathname=m.join("/")}l=f>=0?e[f]:"/"}let u=DP(i,l),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const br=t=>t.join("/").replace(/\/\/+/g,"/"),OP=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),MP=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,VP=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class Oc{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function Th(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const W1=["post","put","patch","delete"],UP=new Set(W1),FP=["get",...W1],jP=new Set(FP),zP=new Set([301,302,303,307,308]),$P=new Set([307,308]),Nd={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},BP={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Ta={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Am=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,HP=t=>({hasErrorBoundary:!!t.hasErrorBoundary}),q1="remix-router-transitions";function WP(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",r=!n;ge(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(t.mapRouteProperties)i=t.mapRouteProperties;else if(t.detectErrorBoundary){let C=t.detectErrorBoundary;i=D=>({hasErrorBoundary:C(D)})}else i=HP;let s={},o=_l(t.routes,i,void 0,s),l,u=t.basename||"/",c=t.unstable_dataStrategy||YP,d=t.unstable_patchRoutesOnMiss,f=Ge({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,v7_skipActionErrorRevalidation:!1},t.future),m=null,_=new Set,T=null,A=null,b=null,I=t.hydrationData!=null,v=qi(o,t.history.location,u),S=null;if(v==null&&!d){let C=Gt(404,{pathname:t.history.location.pathname}),{matches:D,route:M}=kv(o);v=D,S={[M.id]:C}}v&&!t.hydrationData&&Xn(v,o,t.history.location.pathname).active&&(v=null);let L;if(v)if(v.some(C=>C.route.lazy))L=!1;else if(!v.some(C=>C.route.loader))L=!0;else if(f.v7_partialHydration){let C=t.hydrationData?t.hydrationData.loaderData:null,D=t.hydrationData?t.hydrationData.errors:null,M=$=>$.route.loader?typeof $.route.loader=="function"&&$.route.loader.hydrate===!0?!1:C&&C[$.route.id]!==void 0||D&&D[$.route.id]!==void 0:!0;if(D){let $=v.findIndex(Q=>D[Q.route.id]!==void 0);L=v.slice(0,$+1).every(M)}else L=v.every(M)}else L=t.hydrationData!=null;else if(L=!1,v=[],f.v7_partialHydration){let C=Xn(null,o,t.history.location.pathname);C.active&&C.matches&&(v=C.matches)}let z,x={historyAction:t.history.action,location:t.history.location,matches:v,initialized:L,navigation:Nd,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||S,fetchers:new Map,blockers:new Map},w=ut.Pop,g=!1,E,R=!1,k=new Map,N=null,P=!1,pe=!1,at=[],Zt=new Set,ye=new Map,F=0,W=-1,X=new Map,se=new Set,le=new Map,xe=new Map,We=new Set,Ze=new Map,qe=new Map,Dt=new Map,Cn=!1;function bn(){if(m=t.history.listen(C=>{let{action:D,location:M,delta:$}=C;if(Cn){Cn=!1;return}Io(qe.size===0||$!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let Q=na({currentLocation:x.location,nextLocation:M,historyAction:D});if(Q&&$!=null){Cn=!0,t.history.go($*-1),Ui(Q,{state:"blocked",location:M,proceed(){Ui(Q,{state:"proceeding",proceed:void 0,reset:void 0,location:M}),t.history.go($)},reset(){let ee=new Map(x.blockers);ee.set(Q,Ta),Ne({blockers:ee})}});return}return Yn(D,M)}),n){ux(e,k);let C=()=>cx(e,k);e.addEventListener("pagehide",C),N=()=>e.removeEventListener("pagehide",C)}return x.initialized||Yn(ut.Pop,x.location,{initialHydration:!0}),z}function Gn(){m&&m(),N&&N(),_.clear(),E&&E.abort(),x.fetchers.forEach((C,D)=>ks(D)),x.blockers.forEach((C,D)=>bs(D))}function Nn(C){return _.add(C),()=>_.delete(C)}function Ne(C,D){D===void 0&&(D={}),x=Ge({},x,C);let M=[],$=[];f.v7_fetcherPersist&&x.fetchers.forEach((Q,ee)=>{Q.state==="idle"&&(We.has(ee)?$.push(ee):M.push(ee))}),[..._].forEach(Q=>Q(x,{deletedFetchers:$,unstable_viewTransitionOpts:D.viewTransitionOpts,unstable_flushSync:D.flushSync===!0})),f.v7_fetcherPersist&&(M.forEach(Q=>x.fetchers.delete(Q)),$.forEach(Q=>ks(Q)))}function Qn(C,D,M){var $,Q;let{flushSync:ee}=M===void 0?{}:M,oe=x.actionData!=null&&x.navigation.formMethod!=null&&Fn(x.navigation.formMethod)&&x.navigation.state==="loading"&&(($=C.state)==null?void 0:$._isRedirect)!==!0,K;D.actionData?Object.keys(D.actionData).length>0?K=D.actionData:K=null:oe?K=x.actionData:K=null;let ce=D.loaderData?Pv(x.loaderData,D.loaderData,D.matches||[],D.errors):x.loaderData,te=x.blockers;te.size>0&&(te=new Map(te),te.forEach((Re,ke)=>te.set(ke,Ta)));let ne=g===!0||x.navigation.formMethod!=null&&Fn(x.navigation.formMethod)&&((Q=C.state)==null?void 0:Q._isRedirect)!==!0;l&&(o=l,l=void 0),P||w===ut.Pop||(w===ut.Push?t.history.push(C,C.state):w===ut.Replace&&t.history.replace(C,C.state));let ve;if(w===ut.Pop){let Re=k.get(x.location.pathname);Re&&Re.has(C.pathname)?ve={currentLocation:x.location,nextLocation:C}:k.has(C.pathname)&&(ve={currentLocation:C,nextLocation:x.location})}else if(R){let Re=k.get(x.location.pathname);Re?Re.add(C.pathname):(Re=new Set([C.pathname]),k.set(x.location.pathname,Re)),ve={currentLocation:x.location,nextLocation:C}}Ne(Ge({},D,{actionData:K,loaderData:ce,historyAction:w,location:C,initialized:!0,navigation:Nd,revalidation:"idle",restoreScrollPosition:ia(C,D.matches||x.matches),preventScrollReset:ne,blockers:te}),{viewTransitionOpts:ve,flushSync:ee===!0}),w=ut.Pop,g=!1,R=!1,P=!1,pe=!1,at=[]}async function xs(C,D){if(typeof C=="number"){t.history.go(C);return}let M=Kf(x.location,x.matches,u,f.v7_prependBasename,C,f.v7_relativeSplatPath,D==null?void 0:D.fromRouteId,D==null?void 0:D.relative),{path:$,submission:Q,error:ee}=wv(f.v7_normalizeFormMethod,!1,M,D),oe=x.location,K=vl(x.location,$,D&&D.state);K=Ge({},K,t.history.encodeLocation(K));let ce=D&&D.replace!=null?D.replace:void 0,te=ut.Push;ce===!0?te=ut.Replace:ce===!1||Q!=null&&Fn(Q.formMethod)&&Q.formAction===x.location.pathname+x.location.search&&(te=ut.Replace);let ne=D&&"preventScrollReset"in D?D.preventScrollReset===!0:void 0,ve=(D&&D.unstable_flushSync)===!0,Re=na({currentLocation:oe,nextLocation:K,historyAction:te});if(Re){Ui(Re,{state:"blocked",location:K,proceed(){Ui(Re,{state:"proceeding",proceed:void 0,reset:void 0,location:K}),xs(C,D)},reset(){let ke=new Map(x.blockers);ke.set(Re,Ta),Ne({blockers:ke})}});return}return await Yn(te,K,{submission:Q,pendingError:ee,preventScrollReset:ne,replace:D&&D.replace,enableViewTransition:D&&D.unstable_viewTransition,flushSync:ve})}function Yo(){if(mt(),Ne({revalidation:"loading"}),x.navigation.state!=="submitting"){if(x.navigation.state==="idle"){Yn(x.historyAction,x.location,{startUninterruptedRevalidation:!0});return}Yn(w||x.historyAction,x.navigation.location,{overrideNavigation:x.navigation})}}async function Yn(C,D,M){E&&E.abort(),E=null,w=C,P=(M&&M.startUninterruptedRevalidation)===!0,Ns(x.location,x.matches),g=(M&&M.preventScrollReset)===!0,R=(M&&M.enableViewTransition)===!0;let $=l||o,Q=M&&M.overrideNavigation,ee=qi($,D,u),oe=(M&&M.flushSync)===!0,K=Xn(ee,$,D.pathname);if(K.active&&K.matches&&(ee=K.matches),!ee){let{error:Te,notFoundMatches:st,route:Ke}=yr(D.pathname);Qn(D,{matches:st,loaderData:{},errors:{[Ke.id]:Te}},{flushSync:oe});return}if(x.initialized&&!pe&&nx(x.location,D)&&!(M&&M.submission&&Fn(M.submission.formMethod))){Qn(D,{matches:ee},{flushSync:oe});return}E=new AbortController;let ce=Us(t.history,D,E.signal,M&&M.submission),te;if(M&&M.pendingError)te=[to(ee).route.id,{type:Le.error,error:M.pendingError}];else if(M&&M.submission&&Fn(M.submission.formMethod)){let Te=await Yh(ce,D,M.submission,ee,K.active,{replace:M.replace,flushSync:oe});if(Te.shortCircuited)return;if(Te.pendingActionResult){let[st,Ke]=Te.pendingActionResult;if(dn(Ke)&&Th(Ke.error)&&Ke.error.status===404){E=null,Qn(D,{matches:Te.matches,loaderData:{},errors:{[st]:Ke.error}});return}}ee=Te.matches||ee,te=Te.pendingActionResult,Q=Dd(D,M.submission),oe=!1,K.active=!1,ce=Us(t.history,ce.url,ce.signal)}let{shortCircuited:ne,matches:ve,loaderData:Re,errors:ke}=await Xh(ce,D,ee,K.active,Q,M&&M.submission,M&&M.fetcherSubmission,M&&M.replace,M&&M.initialHydration===!0,oe,te);ne||(E=null,Qn(D,Ge({matches:ve||ee},xv(te),{loaderData:Re,errors:ke})))}async function Yh(C,D,M,$,Q,ee){ee===void 0&&(ee={}),mt();let oe=ax(D,M);if(Ne({navigation:oe},{flushSync:ee.flushSync===!0}),Q){let te=await ji($,D.pathname,C.signal);if(te.type==="aborted")return{shortCircuited:!0};if(te.type==="error"){let{boundaryId:ne,error:ve}=Hr(D.pathname,te);return{matches:te.partialMatches,pendingActionResult:[ne,{type:Le.error,error:ve}]}}else if(te.matches)$=te.matches;else{let{notFoundMatches:ne,error:ve,route:Re}=yr(D.pathname);return{matches:ne,pendingActionResult:[Re.id,{type:Le.error,error:ve}]}}}let K,ce=ba($,D);if(!ce.route.action&&!ce.route.lazy)K={type:Le.error,error:Gt(405,{method:C.method,pathname:D.pathname,routeId:ce.route.id})};else if(K=(await Br("action",C,[ce],$))[0],C.signal.aborted)return{shortCircuited:!0};if(Xi(K)){let te;return ee&&ee.replace!=null?te=ee.replace:te=Sv(K.response.headers.get("Location"),new URL(C.url),u)===x.location.pathname+x.location.search,await gr(C,K,{submission:M,replace:te}),{shortCircuited:!0}}if(Yi(K))throw Gt(400,{type:"defer-action"});if(dn(K)){let te=to($,ce.route.id);return(ee&&ee.replace)!==!0&&(w=ut.Push),{matches:$,pendingActionResult:[te.route.id,K]}}return{matches:$,pendingActionResult:[ce.route.id,K]}}async function Xh(C,D,M,$,Q,ee,oe,K,ce,te,ne){let ve=Q||Dd(D,ee),Re=ee||oe||Dv(ve),ke=!P&&(!f.v7_partialHydration||!ce);if($){if(ke){let Ue=Xo(ne);Ne(Ge({navigation:ve},Ue!==void 0?{actionData:Ue}:{}),{flushSync:te})}let fe=await ji(M,D.pathname,C.signal);if(fe.type==="aborted")return{shortCircuited:!0};if(fe.type==="error"){let{boundaryId:Ue,error:Ot}=Hr(D.pathname,fe);return{matches:fe.partialMatches,loaderData:{},errors:{[Ue]:Ot}}}else if(fe.matches)M=fe.matches;else{let{error:Ue,notFoundMatches:Ot,route:De}=yr(D.pathname);return{matches:Ot,loaderData:{},errors:{[De.id]:Ue}}}}let Te=l||o,[st,Ke]=Ev(t.history,x,M,Re,D,f.v7_partialHydration&&ce===!0,f.v7_skipActionErrorRevalidation,pe,at,Zt,We,le,se,Te,u,ne);if(Fi(fe=>!(M&&M.some(Ue=>Ue.route.id===fe))||st&&st.some(Ue=>Ue.route.id===fe)),W=++F,st.length===0&&Ke.length===0){let fe=Cs();return Qn(D,Ge({matches:M,loaderData:{},errors:ne&&dn(ne[1])?{[ne[0]]:ne[1].error}:null},xv(ne),fe?{fetchers:new Map(x.fetchers)}:{}),{flushSync:te}),{shortCircuited:!0}}if(ke){let fe={};if(!$){fe.navigation=ve;let Ue=Xo(ne);Ue!==void 0&&(fe.actionData=Ue)}Ke.length>0&&(fe.fetchers=Jo(Ke)),Ne(fe,{flushSync:te})}Ke.forEach(fe=>{ye.has(fe.key)&&Dn(fe.key),fe.controller&&ye.set(fe.key,fe.controller)});let Wr=()=>Ke.forEach(fe=>Dn(fe.key));E&&E.signal.addEventListener("abort",Wr);let{loaderResults:Jn,fetcherResults:Ln}=await pt(x.matches,M,st,Ke,C);if(C.signal.aborted)return{shortCircuited:!0};E&&E.signal.removeEventListener("abort",Wr),Ke.forEach(fe=>ye.delete(fe.key));let _r=Cv([...Jn,...Ln]);if(_r){if(_r.idx>=st.length){let fe=Ke[_r.idx-st.length].key;se.add(fe)}return await gr(C,_r.result,{replace:K}),{shortCircuited:!0}}let{loaderData:Zn,errors:Lt}=Av(x,M,st,Jn,ne,Ke,Ln,Ze);Ze.forEach((fe,Ue)=>{fe.subscribe(Ot=>{(Ot||fe.done)&&Ze.delete(Ue)})}),f.v7_partialHydration&&ce&&x.errors&&Object.entries(x.errors).filter(fe=>{let[Ue]=fe;return!st.some(Ot=>Ot.route.id===Ue)}).forEach(fe=>{let[Ue,Ot]=fe;Lt=Object.assign(Lt||{},{[Ue]:Ot})});let En=Cs(),qr=Zl(W),Ds=En||qr||Ke.length>0;return Ge({matches:M,loaderData:Zn,errors:Lt},Ds?{fetchers:new Map(x.fetchers)}:{})}function Xo(C){if(C&&!dn(C[1]))return{[C[0]]:C[1].data};if(x.actionData)return Object.keys(x.actionData).length===0?null:x.actionData}function Jo(C){return C.forEach(D=>{let M=x.fetchers.get(D.key),$=Ia(void 0,M?M.data:void 0);x.fetchers.set(D.key,$)}),new Map(x.fetchers)}function Jl(C,D,M,$){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");ye.has(C)&&Dn(C);let Q=($&&$.unstable_flushSync)===!0,ee=l||o,oe=Kf(x.location,x.matches,u,f.v7_prependBasename,M,f.v7_relativeSplatPath,D,$==null?void 0:$.relative),K=qi(ee,oe,u),ce=Xn(K,ee,oe);if(ce.active&&ce.matches&&(K=ce.matches),!K){wn(C,D,Gt(404,{pathname:oe}),{flushSync:Q});return}let{path:te,submission:ne,error:ve}=wv(f.v7_normalizeFormMethod,!0,oe,$);if(ve){wn(C,D,ve,{flushSync:Q});return}let Re=ba(K,te);if(g=($&&$.preventScrollReset)===!0,ne&&Fn(ne.formMethod)){Jh(C,D,te,Re,K,ce.active,Q,ne);return}le.set(C,{routeId:D,path:te}),Zo(C,D,te,Re,K,ce.active,Q,ne)}async function Jh(C,D,M,$,Q,ee,oe,K){mt(),le.delete(C);function ce(De){if(!De.route.action&&!De.route.lazy){let ln=Gt(405,{method:K.formMethod,pathname:M,routeId:D});return wn(C,D,ln,{flushSync:oe}),!0}return!1}if(!ee&&ce($))return;let te=x.fetchers.get(C);an(C,lx(K,te),{flushSync:oe});let ne=new AbortController,ve=Us(t.history,M,ne.signal,K);if(ee){let De=await ji(Q,M,ve.signal);if(De.type==="aborted")return;if(De.type==="error"){let{error:ln}=Hr(M,De);wn(C,D,ln,{flushSync:oe});return}else if(De.matches){if(Q=De.matches,$=ba(Q,M),ce($))return}else{wn(C,D,Gt(404,{pathname:M}),{flushSync:oe});return}}ye.set(C,ne);let Re=F,Te=(await Br("action",ve,[$],Q))[0];if(ve.signal.aborted){ye.get(C)===ne&&ye.delete(C);return}if(f.v7_fetcherPersist&&We.has(C)){if(Xi(Te)||dn(Te)){an(C,Xr(void 0));return}}else{if(Xi(Te))if(ye.delete(C),W>Re){an(C,Xr(void 0));return}else return se.add(C),an(C,Ia(K)),gr(ve,Te,{fetcherSubmission:K});if(dn(Te)){wn(C,D,Te.error);return}}if(Yi(Te))throw Gt(400,{type:"defer-action"});let st=x.navigation.location||x.location,Ke=Us(t.history,st,ne.signal),Wr=l||o,Jn=x.navigation.state!=="idle"?qi(Wr,x.navigation.location,u):x.matches;ge(Jn,"Didn't find any matches after fetcher action");let Ln=++F;X.set(C,Ln);let _r=Ia(K,Te.data);x.fetchers.set(C,_r);let[Zn,Lt]=Ev(t.history,x,Jn,K,st,!1,f.v7_skipActionErrorRevalidation,pe,at,Zt,We,le,se,Wr,u,[$.route.id,Te]);Lt.filter(De=>De.key!==C).forEach(De=>{let ln=De.key,sa=x.fetchers.get(ln),tu=Ia(void 0,sa?sa.data:void 0);x.fetchers.set(ln,tu),ye.has(ln)&&Dn(ln),De.controller&&ye.set(ln,De.controller)}),Ne({fetchers:new Map(x.fetchers)});let En=()=>Lt.forEach(De=>Dn(De.key));ne.signal.addEventListener("abort",En);let{loaderResults:qr,fetcherResults:Ds}=await pt(x.matches,Jn,Zn,Lt,Ke);if(ne.signal.aborted)return;ne.signal.removeEventListener("abort",En),X.delete(C),ye.delete(C),Lt.forEach(De=>ye.delete(De.key));let fe=Cv([...qr,...Ds]);if(fe){if(fe.idx>=Zn.length){let De=Lt[fe.idx-Zn.length].key;se.add(De)}return gr(Ke,fe.result)}let{loaderData:Ue,errors:Ot}=Av(x,x.matches,Zn,qr,void 0,Lt,Ds,Ze);if(x.fetchers.has(C)){let De=Xr(Te.data);x.fetchers.set(C,De)}Zl(Ln),x.navigation.state==="loading"&&Ln>W?(ge(w,"Expected pending action"),E&&E.abort(),Qn(x.navigation.location,{matches:Jn,loaderData:Ue,errors:Ot,fetchers:new Map(x.fetchers)})):(Ne({errors:Ot,loaderData:Pv(x.loaderData,Ue,Jn,Ot),fetchers:new Map(x.fetchers)}),pe=!1)}async function Zo(C,D,M,$,Q,ee,oe,K){let ce=x.fetchers.get(C);an(C,Ia(K,ce?ce.data:void 0),{flushSync:oe});let te=new AbortController,ne=Us(t.history,M,te.signal);if(ee){let Te=await ji(Q,M,ne.signal);if(Te.type==="aborted")return;if(Te.type==="error"){let{error:st}=Hr(M,Te);wn(C,D,st,{flushSync:oe});return}else if(Te.matches)Q=Te.matches,$=ba(Q,M);else{wn(C,D,Gt(404,{pathname:M}),{flushSync:oe});return}}ye.set(C,te);let ve=F,ke=(await Br("loader",ne,[$],Q))[0];if(Yi(ke)&&(ke=await X1(ke,ne.signal,!0)||ke),ye.get(C)===te&&ye.delete(C),!ne.signal.aborted){if(We.has(C)){an(C,Xr(void 0));return}if(Xi(ke))if(W>ve){an(C,Xr(void 0));return}else{se.add(C),await gr(ne,ke);return}if(dn(ke)){wn(C,D,ke.error);return}ge(!Yi(ke),"Unhandled fetcher deferred data"),an(C,Xr(ke.data))}}async function gr(C,D,M){let{submission:$,fetcherSubmission:Q,replace:ee}=M===void 0?{}:M;D.response.headers.has("X-Remix-Revalidate")&&(pe=!0);let oe=D.response.headers.get("Location");ge(oe,"Expected a Location header on the redirect Response"),oe=Sv(oe,new URL(C.url),u);let K=vl(x.location,oe,{_isRedirect:!0});if(n){let ke=!1;if(D.response.headers.has("X-Remix-Reload-Document"))ke=!0;else if(Am.test(oe)){const Te=t.history.createURL(oe);ke=Te.origin!==e.location.origin||zo(Te.pathname,u)==null}if(ke){ee?e.location.replace(oe):e.location.assign(oe);return}}E=null;let ce=ee===!0||D.response.headers.has("X-Remix-Replace")?ut.Replace:ut.Push,{formMethod:te,formAction:ne,formEncType:ve}=x.navigation;!$&&!Q&&te&&ne&&ve&&($=Dv(x.navigation));let Re=$||Q;if($P.has(D.response.status)&&Re&&Fn(Re.formMethod))await Yn(ce,K,{submission:Ge({},Re,{formAction:oe}),preventScrollReset:g});else{let ke=Dd(K,$);await Yn(ce,K,{overrideNavigation:ke,fetcherSubmission:Q,preventScrollReset:g})}}async function Br(C,D,M,$){try{let Q=await XP(c,C,D,M,$,s,i);return await Promise.all(Q.map((ee,oe)=>{if(ix(ee)){let K=ee.result;return{type:Le.redirect,response:ex(K,D,M[oe].route.id,$,u,f.v7_relativeSplatPath)}}return ZP(ee)}))}catch(Q){return M.map(()=>({type:Le.error,error:Q}))}}async function pt(C,D,M,$,Q){let[ee,...oe]=await Promise.all([M.length?Br("loader",Q,M,D):[],...$.map(K=>{if(K.matches&&K.match&&K.controller){let ce=Us(t.history,K.path,K.controller.signal);return Br("loader",ce,[K.match],K.matches).then(te=>te[0])}else return Promise.resolve({type:Le.error,error:Gt(404,{pathname:K.path})})})]);return await Promise.all([Nv(C,M,ee,ee.map(()=>Q.signal),!1,x.loaderData),Nv(C,$.map(K=>K.match),oe,$.map(K=>K.controller?K.controller.signal:null),!0)]),{loaderResults:ee,fetcherResults:oe}}function mt(){pe=!0,at.push(...Fi()),le.forEach((C,D)=>{ye.has(D)&&(Zt.add(D),Dn(D))})}function an(C,D,M){M===void 0&&(M={}),x.fetchers.set(C,D),Ne({fetchers:new Map(x.fetchers)},{flushSync:(M&&M.flushSync)===!0})}function wn(C,D,M,$){$===void 0&&($={});let Q=to(x.matches,D);ks(C),Ne({errors:{[Q.route.id]:M},fetchers:new Map(x.fetchers)},{flushSync:($&&$.flushSync)===!0})}function ea(C){return f.v7_fetcherPersist&&(xe.set(C,(xe.get(C)||0)+1),We.has(C)&&We.delete(C)),x.fetchers.get(C)||BP}function ks(C){let D=x.fetchers.get(C);ye.has(C)&&!(D&&D.state==="loading"&&X.has(C))&&Dn(C),le.delete(C),X.delete(C),se.delete(C),We.delete(C),Zt.delete(C),x.fetchers.delete(C)}function Vi(C){if(f.v7_fetcherPersist){let D=(xe.get(C)||0)-1;D<=0?(xe.delete(C),We.add(C)):xe.set(C,D)}else ks(C);Ne({fetchers:new Map(x.fetchers)})}function Dn(C){let D=ye.get(C);ge(D,"Expected fetch controller: "+C),D.abort(),ye.delete(C)}function ta(C){for(let D of C){let M=ea(D),$=Xr(M.data);x.fetchers.set(D,$)}}function Cs(){let C=[],D=!1;for(let M of se){let $=x.fetchers.get(M);ge($,"Expected fetcher: "+M),$.state==="loading"&&(se.delete(M),C.push(M),D=!0)}return ta(C),D}function Zl(C){let D=[];for(let[M,$]of X)if($<C){let Q=x.fetchers.get(M);ge(Q,"Expected fetcher: "+M),Q.state==="loading"&&(Dn(M),X.delete(M),D.push(M))}return ta(D),D.length>0}function Zh(C,D){let M=x.blockers.get(C)||Ta;return qe.get(C)!==D&&qe.set(C,D),M}function bs(C){x.blockers.delete(C),qe.delete(C)}function Ui(C,D){let M=x.blockers.get(C)||Ta;ge(M.state==="unblocked"&&D.state==="blocked"||M.state==="blocked"&&D.state==="blocked"||M.state==="blocked"&&D.state==="proceeding"||M.state==="blocked"&&D.state==="unblocked"||M.state==="proceeding"&&D.state==="unblocked","Invalid blocker state transition: "+M.state+" -> "+D.state);let $=new Map(x.blockers);$.set(C,D),Ne({blockers:$})}function na(C){let{currentLocation:D,nextLocation:M,historyAction:$}=C;if(qe.size===0)return;qe.size>1&&Io(!1,"A router only supports one blocker at a time");let Q=Array.from(qe.entries()),[ee,oe]=Q[Q.length-1],K=x.blockers.get(ee);if(!(K&&K.state==="proceeding")&&oe({currentLocation:D,nextLocation:M,historyAction:$}))return ee}function yr(C){let D=Gt(404,{pathname:C}),M=l||o,{matches:$,route:Q}=kv(M);return Fi(),{notFoundMatches:$,route:Q,error:D}}function Hr(C,D){return{boundaryId:to(D.partialMatches).route.id,error:Gt(400,{type:"route-discovery",pathname:C,message:D.error!=null&&"message"in D.error?D.error:String(D.error)})}}function Fi(C){let D=[];return Ze.forEach((M,$)=>{(!C||C($))&&(M.cancel(),D.push($),Ze.delete($))}),D}function vr(C,D,M){if(T=C,b=D,A=M||null,!I&&x.navigation===Nd){I=!0;let $=ia(x.location,x.matches);$!=null&&Ne({restoreScrollPosition:$})}return()=>{T=null,b=null,A=null}}function ra(C,D){return A&&A(C,D.map($=>wP($,x.loaderData)))||C.key}function Ns(C,D){if(T&&b){let M=ra(C,D);T[M]=b()}}function ia(C,D){if(T){let M=ra(C,D),$=T[M];if(typeof $=="number")return $}return null}function Xn(C,D,M){if(d)if(C){let $=C[C.length-1].route;if($.path&&($.path==="*"||$.path.endsWith("/*")))return{active:!0,matches:Yu(D,M,u,!0)}}else return{active:!0,matches:Yu(D,M,u,!0)||[]};return{active:!1,matches:null}}async function ji(C,D,M){let $=C,Q=$.length>0?$[$.length-1].route:null;for(;;){let ee=l==null,oe=l||o;try{await QP(d,D,$,oe,s,i,Dt,M)}catch(ne){return{type:"error",error:ne,partialMatches:$}}finally{ee&&(o=[...o])}if(M.aborted)return{type:"aborted"};let K=qi(oe,D,u),ce=!1;if(K){let ne=K[K.length-1].route;if(ne.index)return{type:"success",matches:K};if(ne.path&&ne.path.length>0)if(ne.path==="*")ce=!0;else return{type:"success",matches:K}}let te=Yu(oe,D,u,!0);if(!te||$.map(ne=>ne.route.id).join("-")===te.map(ne=>ne.route.id).join("-"))return{type:"success",matches:ce?K:null};if($=te,Q=$[$.length-1].route,Q.path==="*")return{type:"success",matches:$}}}function It(C){s={},l=_l(C,i,void 0,s)}function eu(C,D){let M=l==null;G1(C,D,l||o,s,i),M&&(o=[...o],Ne({}))}return z={get basename(){return u},get future(){return f},get state(){return x},get routes(){return o},get window(){return e},initialize:bn,subscribe:Nn,enableScrollRestoration:vr,navigate:xs,fetch:Jl,revalidate:Yo,createHref:C=>t.history.createHref(C),encodeLocation:C=>t.history.encodeLocation(C),getFetcher:ea,deleteFetcher:Vi,dispose:Gn,getBlocker:Zh,deleteBlocker:bs,patchRoutes:eu,_internalFetchControllers:ye,_internalActiveDeferreds:Ze,_internalSetRoutes:It},z}function qP(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function Kf(t,e,n,r,i,s,o,l){let u,c;if(o){u=[];for(let f of e)if(u.push(f),f.route.id===o){c=f;break}}else u=e,c=e[e.length-1];let d=Eh(i||".",wh(u,s),zo(t.pathname,n)||t.pathname,l==="path");return i==null&&(d.search=t.search,d.hash=t.hash),(i==null||i===""||i===".")&&c&&c.route.index&&!Pm(d.search)&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(d.pathname=d.pathname==="/"?n:br([n,d.pathname])),hs(d)}function wv(t,e,n,r){if(!r||!qP(r))return{path:n};if(r.formMethod&&!ox(r.formMethod))return{path:n,error:Gt(405,{method:r.formMethod})};let i=()=>({path:n,error:Gt(400,{type:"invalid-body"})}),s=r.formMethod||"get",o=t?s.toUpperCase():s.toLowerCase(),l=Q1(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!Fn(o))return i();let m=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((_,T)=>{let[A,b]=T;return""+_+A+"="+b+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:l,formEncType:r.formEncType,formData:void 0,json:void 0,text:m}}}else if(r.formEncType==="application/json"){if(!Fn(o))return i();try{let m=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:l,formEncType:r.formEncType,formData:void 0,json:m,text:void 0}}}catch{return i()}}}ge(typeof FormData=="function","FormData is not available in this environment");let u,c;if(r.formData)u=Gf(r.formData),c=r.formData;else if(r.body instanceof FormData)u=Gf(r.body),c=r.body;else if(r.body instanceof URLSearchParams)u=r.body,c=Rv(u);else if(r.body==null)u=new URLSearchParams,c=new FormData;else try{u=new URLSearchParams(r.body),c=Rv(u)}catch{return i()}let d={formMethod:o,formAction:l,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:c,json:void 0,text:void 0};if(Fn(d.formMethod))return{path:n,submission:d};let f=Di(n);return e&&f.search&&Pm(f.search)&&u.append("index",""),f.search="?"+u,{path:hs(f),submission:d}}function KP(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function Ev(t,e,n,r,i,s,o,l,u,c,d,f,m,_,T,A){let b=A?dn(A[1])?A[1].error:A[1].data:void 0,I=t.createURL(e.location),v=t.createURL(i),S=A&&dn(A[1])?A[0]:void 0,L=S?KP(n,S):n,z=A?A[1].statusCode:void 0,x=o&&z&&z>=400,w=L.filter((E,R)=>{let{route:k}=E;if(k.lazy)return!0;if(k.loader==null)return!1;if(s)return typeof k.loader!="function"||k.loader.hydrate?!0:e.loaderData[k.id]===void 0&&(!e.errors||e.errors[k.id]===void 0);if(GP(e.loaderData,e.matches[R],E)||u.some(pe=>pe===E.route.id))return!0;let N=e.matches[R],P=E;return Tv(E,Ge({currentUrl:I,currentParams:N.params,nextUrl:v,nextParams:P.params},r,{actionResult:b,actionStatus:z,defaultShouldRevalidate:x?!1:l||I.pathname+I.search===v.pathname+v.search||I.search!==v.search||K1(N,P)}))}),g=[];return f.forEach((E,R)=>{if(s||!n.some(at=>at.route.id===E.routeId)||d.has(R))return;let k=qi(_,E.path,T);if(!k){g.push({key:R,routeId:E.routeId,path:E.path,matches:null,match:null,controller:null});return}let N=e.fetchers.get(R),P=ba(k,E.path),pe=!1;m.has(R)?pe=!1:c.has(R)?(c.delete(R),pe=!0):N&&N.state!=="idle"&&N.data===void 0?pe=l:pe=Tv(P,Ge({currentUrl:I,currentParams:e.matches[e.matches.length-1].params,nextUrl:v,nextParams:n[n.length-1].params},r,{actionResult:b,actionStatus:z,defaultShouldRevalidate:x?!1:l})),pe&&g.push({key:R,routeId:E.routeId,path:E.path,matches:k,match:P,controller:new AbortController})}),[w,g]}function GP(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function K1(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function Tv(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function QP(t,e,n,r,i,s,o,l){let u=[e,...n.map(c=>c.route.id)].join("-");try{let c=o.get(u);c||(c=t({path:e,matches:n,patch:(d,f)=>{l.aborted||G1(d,f,r,i,s)}}),o.set(u,c)),c&&rx(c)&&await c}finally{o.delete(u)}}function G1(t,e,n,r,i){if(t){var s;let o=r[t];ge(o,"No route found to patch children into: routeId = "+t);let l=_l(e,i,[t,"patch",String(((s=o.children)==null?void 0:s.length)||"0")],r);o.children?o.children.push(...l):o.children=l}else{let o=_l(e,i,["patch",String(n.length||"0")],r);n.push(...o)}}async function Iv(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];ge(i,"No route found in manifest");let s={};for(let o in r){let u=i[o]!==void 0&&o!=="hasErrorBoundary";Io(!u,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!u&&!vP.has(o)&&(s[o]=r[o])}Object.assign(i,s),Object.assign(i,Ge({},e(i),{lazy:void 0}))}function YP(t){return Promise.all(t.matches.map(e=>e.resolve()))}async function XP(t,e,n,r,i,s,o,l){let u=r.reduce((f,m)=>f.add(m.route.id),new Set),c=new Set,d=await t({matches:i.map(f=>{let m=u.has(f.route.id);return Ge({},f,{shouldLoad:m,resolve:T=>(c.add(f.route.id),m?JP(e,n,f,s,o,T,l):Promise.resolve({type:Le.data,result:void 0}))})}),request:n,params:i[0].params,context:l});return i.forEach(f=>ge(c.has(f.route.id),'`match.resolve()` was not called for route id "'+f.route.id+'". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.')),d.filter((f,m)=>u.has(i[m].route.id))}async function JP(t,e,n,r,i,s,o){let l,u,c=d=>{let f,m=new Promise((A,b)=>f=b);u=()=>f(),e.signal.addEventListener("abort",u);let _=A=>typeof d!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+t+'" [routeId: '+n.route.id+"]"))):d({request:e,params:n.params,context:o},...A!==void 0?[A]:[]),T;return s?T=s(A=>_(A)):T=(async()=>{try{return{type:"data",result:await _()}}catch(A){return{type:"error",result:A}}})(),Promise.race([T,m])};try{let d=n.route[t];if(n.route.lazy)if(d){let f,[m]=await Promise.all([c(d).catch(_=>{f=_}),Iv(n.route,i,r)]);if(f!==void 0)throw f;l=m}else if(await Iv(n.route,i,r),d=n.route[t],d)l=await c(d);else if(t==="action"){let f=new URL(e.url),m=f.pathname+f.search;throw Gt(405,{method:e.method,pathname:m,routeId:n.route.id})}else return{type:Le.data,result:void 0};else if(d)l=await c(d);else{let f=new URL(e.url),m=f.pathname+f.search;throw Gt(404,{pathname:m})}ge(l.result!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(d){return{type:Le.error,result:d}}finally{u&&e.signal.removeEventListener("abort",u)}return l}async function ZP(t){let{result:e,type:n}=t;if(Y1(e)){let c;try{let d=e.headers.get("Content-Type");d&&/\bapplication\/json\b/.test(d)?e.body==null?c=null:c=await e.json():c=await e.text()}catch(d){return{type:Le.error,error:d}}return n===Le.error?{type:Le.error,error:new Oc(e.status,e.statusText,c),statusCode:e.status,headers:e.headers}:{type:Le.data,data:c,statusCode:e.status,headers:e.headers}}if(n===Le.error){if(bv(e)){var r;if(e.data instanceof Error){var i;return{type:Le.error,error:e.data,statusCode:(i=e.init)==null?void 0:i.status}}e=new Oc(((r=e.init)==null?void 0:r.status)||500,void 0,e.data)}return{type:Le.error,error:e,statusCode:Th(e)?e.status:void 0}}if(sx(e)){var s,o;return{type:Le.deferred,deferredData:e,statusCode:(s=e.init)==null?void 0:s.status,headers:((o=e.init)==null?void 0:o.headers)&&new Headers(e.init.headers)}}if(bv(e)){var l,u;return{type:Le.data,data:e.data,statusCode:(l=e.init)==null?void 0:l.status,headers:(u=e.init)!=null&&u.headers?new Headers(e.init.headers):void 0}}return{type:Le.data,data:e}}function ex(t,e,n,r,i,s){let o=t.headers.get("Location");if(ge(o,"Redirects returned/thrown from loaders/actions must have a Location header"),!Am.test(o)){let l=r.slice(0,r.findIndex(u=>u.route.id===n)+1);o=Kf(new URL(e.url),l,i,!0,o,s),t.headers.set("Location",o)}return t}function Sv(t,e,n){if(Am.test(t)){let r=t,i=r.startsWith("//")?new URL(e.protocol+r):new URL(r),s=zo(i.pathname,n)!=null;if(i.origin===e.origin&&s)return i.pathname+i.search+i.hash}return t}function Us(t,e,n,r){let i=t.createURL(Q1(e)).toString(),s={signal:n};if(r&&Fn(r.formMethod)){let{formMethod:o,formEncType:l}=r;s.method=o.toUpperCase(),l==="application/json"?(s.headers=new Headers({"Content-Type":l}),s.body=JSON.stringify(r.json)):l==="text/plain"?s.body=r.text:l==="application/x-www-form-urlencoded"&&r.formData?s.body=Gf(r.formData):s.body=r.formData}return new Request(i,s)}function Gf(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,typeof r=="string"?r:r.name);return e}function Rv(t){let e=new FormData;for(let[n,r]of t.entries())e.append(n,r);return e}function tx(t,e,n,r,i,s){let o={},l=null,u,c=!1,d={},f=r&&dn(r[1])?r[1].error:void 0;return n.forEach((m,_)=>{let T=e[_].route.id;if(ge(!Xi(m),"Cannot handle redirect results in processLoaderData"),dn(m)){let A=m.error;f!==void 0&&(A=f,f=void 0),l=l||{};{let b=to(t,T);l[b.route.id]==null&&(l[b.route.id]=A)}o[T]=void 0,c||(c=!0,u=Th(m.error)?m.error.status:500),m.headers&&(d[T]=m.headers)}else Yi(m)?(i.set(T,m.deferredData),o[T]=m.deferredData.data,m.statusCode!=null&&m.statusCode!==200&&!c&&(u=m.statusCode),m.headers&&(d[T]=m.headers)):(o[T]=m.data,m.statusCode&&m.statusCode!==200&&!c&&(u=m.statusCode),m.headers&&(d[T]=m.headers))}),f!==void 0&&r&&(l={[r[0]]:f},o[r[0]]=void 0),{loaderData:o,errors:l,statusCode:u||200,loaderHeaders:d}}function Av(t,e,n,r,i,s,o,l){let{loaderData:u,errors:c}=tx(e,n,r,i,l);for(let d=0;d<s.length;d++){let{key:f,match:m,controller:_}=s[d];ge(o!==void 0&&o[d]!==void 0,"Did not find corresponding fetcher result");let T=o[d];if(!(_&&_.signal.aborted))if(dn(T)){let A=to(t.matches,m==null?void 0:m.route.id);c&&c[A.route.id]||(c=Ge({},c,{[A.route.id]:T.error})),t.fetchers.delete(f)}else if(Xi(T))ge(!1,"Unhandled fetcher revalidation redirect");else if(Yi(T))ge(!1,"Unhandled fetcher deferred data");else{let A=Xr(T.data);t.fetchers.set(f,A)}}return{loaderData:u,errors:c}}function Pv(t,e,n,r){let i=Ge({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&s.route.loader&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function xv(t){return t?dn(t[1])?{actionData:{}}:{actionData:{[t[0]]:t[1].data}}:{}}function to(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function kv(t){let e=t.length===1?t[0]:t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function Gt(t,e){let{pathname:n,routeId:r,method:i,type:s,message:o}=e===void 0?{}:e,l="Unknown Server Error",u="Unknown @remix-run/router error";return t===400?(l="Bad Request",s==="route-discovery"?u='Unable to match URL "'+n+'" - the `unstable_patchRoutesOnMiss()` '+(`function threw the following error:
`+o):i&&n&&r?u="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"?u="defer() is not supported in actions":s==="invalid-body"&&(u="Unable to encode submission body")):t===403?(l="Forbidden",u='Route "'+r+'" does not match URL "'+n+'"'):t===404?(l="Not Found",u='No route matches URL "'+n+'"'):t===405&&(l="Method Not Allowed",i&&n&&r?u="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(u='Invalid request method "'+i.toUpperCase()+'"')),new Oc(t||500,l,new Error(u),!0)}function Cv(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(Xi(n))return{result:n,idx:e}}}function Q1(t){let e=typeof t=="string"?Di(t):t;return hs(Ge({},e,{hash:""}))}function nx(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function rx(t){return typeof t=="object"&&t!=null&&"then"in t}function ix(t){return Y1(t.result)&&zP.has(t.result.status)}function Yi(t){return t.type===Le.deferred}function dn(t){return t.type===Le.error}function Xi(t){return(t&&t.type)===Le.redirect}function bv(t){return typeof t=="object"&&t!=null&&"type"in t&&"data"in t&&"init"in t&&t.type==="DataWithResponseInit"}function sx(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function Y1(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function ox(t){return jP.has(t.toLowerCase())}function Fn(t){return UP.has(t.toLowerCase())}async function Nv(t,e,n,r,i,s){for(let o=0;o<n.length;o++){let l=n[o],u=e[o];if(!u)continue;let c=t.find(f=>f.route.id===u.route.id),d=c!=null&&!K1(c,u)&&(s&&s[u.route.id])!==void 0;if(Yi(l)&&(i||d)){let f=r[o];ge(f,"Expected an AbortSignal for revalidating fetcher deferred result"),await X1(l,f,i).then(m=>{m&&(n[o]=m||n[o])})}}}async function X1(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:Le.data,data:t.deferredData.unwrappedData}}catch(i){return{type:Le.error,error:i}}return{type:Le.data,data:t.deferredData.data}}}function Pm(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function ba(t,e){let n=typeof e=="string"?Di(e).search:e.search;if(t[t.length-1].route.index&&Pm(n||""))return t[t.length-1];let r=H1(t);return r[r.length-1]}function Dv(t){let{formMethod:e,formAction:n,formEncType:r,text:i,formData:s,json:o}=t;if(!(!e||!n||!r)){if(i!=null)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(s!=null)return{formMethod:e,formAction:n,formEncType:r,formData:s,json:void 0,text:void 0};if(o!==void 0)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function Dd(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function ax(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function Ia(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function lx(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0}}function Xr(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function ux(t,e){try{let n=t.sessionStorage.getItem(q1);if(n){let r=JSON.parse(n);for(let[i,s]of Object.entries(r||{}))s&&Array.isArray(s)&&e.set(i,new Set(s||[]))}}catch{}}function cx(t,e){if(e.size>0){let n={};for(let[r,i]of e)n[r]=[...i];try{t.sessionStorage.setItem(q1,JSON.stringify(n))}catch(r){Io(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.26.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Mc(){return Mc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Mc.apply(this,arguments)}const Ih=j.createContext(null),J1=j.createContext(null),Li=j.createContext(null),xm=j.createContext(null),zr=j.createContext({outlet:null,matches:[],isDataRoute:!1}),Z1=j.createContext(null);function hx(t,e){let{relative:n}=e===void 0?{}:e;$o()||ge(!1);let{basename:r,navigator:i}=j.useContext(Li),{hash:s,pathname:o,search:l}=tE(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:br([r,o])),i.createHref({pathname:u,search:l,hash:s})}function $o(){return j.useContext(xm)!=null}function Vl(){return $o()||ge(!1),j.useContext(xm).location}function eE(t){j.useContext(Li).static||j.useLayoutEffect(t)}function Bo(){let{isDataRoute:t}=j.useContext(zr);return t?Rx():dx()}function dx(){$o()||ge(!1);let t=j.useContext(Ih),{basename:e,future:n,navigator:r}=j.useContext(Li),{matches:i}=j.useContext(zr),{pathname:s}=Vl(),o=JSON.stringify(wh(i,n.v7_relativeSplatPath)),l=j.useRef(!1);return eE(()=>{l.current=!0}),j.useCallback(function(c,d){if(d===void 0&&(d={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let f=Eh(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:br([e,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[e,r,o,s,t])}const fx=j.createContext(null);function px(t){let e=j.useContext(zr).outlet;return e&&j.createElement(fx.Provider,{value:t},e)}function tE(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=j.useContext(Li),{matches:i}=j.useContext(zr),{pathname:s}=Vl(),o=JSON.stringify(wh(i,r.v7_relativeSplatPath));return j.useMemo(()=>Eh(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function mx(t,e,n,r){$o()||ge(!1);let{navigator:i}=j.useContext(Li),{matches:s}=j.useContext(zr),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=Vl(),d;d=c;let f=d.pathname||"/",m=f;if(u!=="/"){let A=u.replace(/^\//,"").split("/");m="/"+f.replace(/^\//,"").split("/").slice(A.length).join("/")}let _=qi(t,{pathname:m});return wx(_&&_.map(A=>Object.assign({},A,{params:Object.assign({},l,A.params),pathname:br([u,i.encodeLocation?i.encodeLocation(A.pathname).pathname:A.pathname]),pathnameBase:A.pathnameBase==="/"?u:br([u,i.encodeLocation?i.encodeLocation(A.pathnameBase).pathname:A.pathnameBase])})),s,n,r)}function gx(){let t=Sx(),e=Th(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},e),n?j.createElement("pre",{style:i},n):null,null)}const yx=j.createElement(gx,null);class vx extends j.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?j.createElement(zr.Provider,{value:this.props.routeContext},j.createElement(Z1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function _x(t){let{routeContext:e,match:n,children:r}=t,i=j.useContext(Ih);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),j.createElement(zr.Provider,{value:e},r)}function wx(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=o.findIndex(f=>f.route.id&&(l==null?void 0:l[f.route.id])!==void 0);d>=0||ge(!1),o=o.slice(0,Math.min(o.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:m,errors:_}=n,T=f.route.loader&&m[f.route.id]===void 0&&(!_||_[f.route.id]===void 0);if(f.route.lazy||T){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,f,m)=>{let _,T=!1,A=null,b=null;n&&(_=l&&f.route.id?l[f.route.id]:void 0,A=f.route.errorElement||yx,u&&(c<0&&m===0?(T=!0,b=null):c===m&&(T=!0,b=f.route.hydrateFallbackElement||null)));let I=e.concat(o.slice(0,m+1)),v=()=>{let S;return _?S=A:T?S=b:f.route.Component?S=j.createElement(f.route.Component,null):f.route.element?S=f.route.element:S=d,j.createElement(_x,{match:f,routeContext:{outlet:d,matches:I,isDataRoute:n!=null},children:S})};return n&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?j.createElement(vx,{location:n.location,revalidation:n.revalidation,component:A,error:_,children:v(),routeContext:{outlet:null,matches:I,isDataRoute:!0}}):v()},null)}var nE=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(nE||{}),Vc=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Vc||{});function Ex(t){let e=j.useContext(Ih);return e||ge(!1),e}function Tx(t){let e=j.useContext(J1);return e||ge(!1),e}function Ix(t){let e=j.useContext(zr);return e||ge(!1),e}function rE(t){let e=Ix(),n=e.matches[e.matches.length-1];return n.route.id||ge(!1),n.route.id}function Sx(){var t;let e=j.useContext(Z1),n=Tx(Vc.UseRouteError),r=rE(Vc.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function Rx(){let{router:t}=Ex(nE.UseNavigateStable),e=rE(Vc.UseNavigateStable),n=j.useRef(!1);return eE(()=>{n.current=!0}),j.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Mc({fromRouteId:e},s)))},[t,e])}function Ax(t){let{to:e,replace:n,state:r,relative:i}=t;$o()||ge(!1);let{future:s,static:o}=j.useContext(Li),{matches:l}=j.useContext(zr),{pathname:u}=Vl(),c=Bo(),d=Eh(e,wh(l,s.v7_relativeSplatPath),u,i==="path"),f=JSON.stringify(d);return j.useEffect(()=>c(JSON.parse(f),{replace:n,state:r,relative:i}),[c,f,i,n,r]),null}function Px(t){return px(t.context)}function xx(t){let{basename:e="/",children:n=null,location:r,navigationType:i=ut.Pop,navigator:s,static:o=!1,future:l}=t;$o()&&ge(!1);let u=e.replace(/^\/*/,"/"),c=j.useMemo(()=>({basename:u,navigator:s,static:o,future:Mc({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=Di(r));let{pathname:d="/",search:f="",hash:m="",state:_=null,key:T="default"}=r,A=j.useMemo(()=>{let b=zo(d,u);return b==null?null:{location:{pathname:b,search:f,hash:m,state:_,key:T},navigationType:i}},[u,d,f,m,_,T,i]);return A==null?null:j.createElement(Li.Provider,{value:c},j.createElement(xm.Provider,{children:n,value:A}))}new Promise(()=>{});function kx(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:j.createElement(t.Component),Component:void 0}),t.HydrateFallback&&Object.assign(e,{hydrateFallbackElement:j.createElement(t.HydrateFallback),HydrateFallback:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:j.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.26.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wl(){return wl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},wl.apply(this,arguments)}function Cx(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function bx(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Nx(t,e){return t.button===0&&(!e||e==="_self")&&!bx(t)}const Dx=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Lx="6";try{window.__reactRouterVersion=Lx}catch{}function Ox(t,e){return WP({basename:void 0,future:wl({},void 0,{v7_prependBasename:!0}),history:mP({window:void 0}),hydrationData:Mx(),routes:t,mapRouteProperties:kx,unstable_dataStrategy:void 0,unstable_patchRoutesOnMiss:void 0,window:void 0}).initialize()}function Mx(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=wl({},e,{errors:Vx(e.errors)})),e}function Vx(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new Oc(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let s=window[i.__subType];if(typeof s=="function")try{let o=new s(i.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let s=new Error(i.message);s.stack="",n[r]=s}}else n[r]=i;return n}const Ux=j.createContext({isTransitioning:!1}),Fx=j.createContext(new Map),jx="startTransition",Lv=nR[jx],zx="flushSync",Ov=pP[zx];function $x(t){Lv?Lv(t):t()}function Sa(t){Ov?Ov(t):t()}let Bx=class{constructor(){this.status="pending",this.promise=new Promise((e,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",e(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}};function Hx(t){let{fallbackElement:e,router:n,future:r}=t,[i,s]=j.useState(n.state),[o,l]=j.useState(),[u,c]=j.useState({isTransitioning:!1}),[d,f]=j.useState(),[m,_]=j.useState(),[T,A]=j.useState(),b=j.useRef(new Map),{v7_startTransition:I}=r||{},v=j.useCallback(g=>{I?$x(g):g()},[I]),S=j.useCallback((g,E)=>{let{deletedFetchers:R,unstable_flushSync:k,unstable_viewTransitionOpts:N}=E;R.forEach(pe=>b.current.delete(pe)),g.fetchers.forEach((pe,at)=>{pe.data!==void 0&&b.current.set(at,pe.data)});let P=n.window==null||n.window.document==null||typeof n.window.document.startViewTransition!="function";if(!N||P){k?Sa(()=>s(g)):v(()=>s(g));return}if(k){Sa(()=>{m&&(d&&d.resolve(),m.skipTransition()),c({isTransitioning:!0,flushSync:!0,currentLocation:N.currentLocation,nextLocation:N.nextLocation})});let pe=n.window.document.startViewTransition(()=>{Sa(()=>s(g))});pe.finished.finally(()=>{Sa(()=>{f(void 0),_(void 0),l(void 0),c({isTransitioning:!1})})}),Sa(()=>_(pe));return}m?(d&&d.resolve(),m.skipTransition(),A({state:g,currentLocation:N.currentLocation,nextLocation:N.nextLocation})):(l(g),c({isTransitioning:!0,flushSync:!1,currentLocation:N.currentLocation,nextLocation:N.nextLocation}))},[n.window,m,d,b,v]);j.useLayoutEffect(()=>n.subscribe(S),[n,S]),j.useEffect(()=>{u.isTransitioning&&!u.flushSync&&f(new Bx)},[u]),j.useEffect(()=>{if(d&&o&&n.window){let g=o,E=d.promise,R=n.window.document.startViewTransition(async()=>{v(()=>s(g)),await E});R.finished.finally(()=>{f(void 0),_(void 0),l(void 0),c({isTransitioning:!1})}),_(R)}},[v,o,d,n.window]),j.useEffect(()=>{d&&o&&i.location.key===o.location.key&&d.resolve()},[d,m,i.location,o]),j.useEffect(()=>{!u.isTransitioning&&T&&(l(T.state),c({isTransitioning:!0,flushSync:!1,currentLocation:T.currentLocation,nextLocation:T.nextLocation}),A(void 0))},[u.isTransitioning,T]),j.useEffect(()=>{},[]);let L=j.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:g=>n.navigate(g),push:(g,E,R)=>n.navigate(g,{state:E,preventScrollReset:R==null?void 0:R.preventScrollReset}),replace:(g,E,R)=>n.navigate(g,{replace:!0,state:E,preventScrollReset:R==null?void 0:R.preventScrollReset})}),[n]),z=n.basename||"/",x=j.useMemo(()=>({router:n,navigator:L,static:!1,basename:z}),[n,L,z]),w=j.useMemo(()=>({v7_relativeSplatPath:n.future.v7_relativeSplatPath}),[n.future.v7_relativeSplatPath]);return j.createElement(j.Fragment,null,j.createElement(Ih.Provider,{value:x},j.createElement(J1.Provider,{value:i},j.createElement(Fx.Provider,{value:b.current},j.createElement(Ux.Provider,{value:u},j.createElement(xx,{basename:z,location:i.location,navigationType:i.historyAction,navigator:L,future:w},i.initialized||n.future.v7_partialHydration?j.createElement(Wx,{routes:n.routes,future:n.future,state:i}):e))))),null)}const Wx=j.memo(qx);function qx(t){let{routes:e,future:n,state:r}=t;return mx(e,void 0,r,n)}const Kx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Gx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,iE=j.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:c,preventScrollReset:d,unstable_viewTransition:f}=e,m=Cx(e,Dx),{basename:_}=j.useContext(Li),T,A=!1;if(typeof c=="string"&&Gx.test(c)&&(T=c,Kx))try{let S=new URL(window.location.href),L=c.startsWith("//")?new URL(S.protocol+c):new URL(c),z=zo(L.pathname,_);L.origin===S.origin&&z!=null?c=z+L.search+L.hash:A=!0}catch{}let b=hx(c,{relative:i}),I=Qx(c,{replace:o,state:l,target:u,preventScrollReset:d,relative:i,unstable_viewTransition:f});function v(S){r&&r(S),S.defaultPrevented||I(S)}return j.createElement("a",wl({},m,{href:T||b,onClick:A||s?r:v,ref:n,target:u}))});var Mv;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Mv||(Mv={}));var Vv;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Vv||(Vv={}));function Qx(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l}=e===void 0?{}:e,u=Bo(),c=Vl(),d=tE(t,{relative:o});return j.useCallback(f=>{if(Nx(f,n)){f.preventDefault();let m=r!==void 0?r:hs(c)===hs(d);u(t,{replace:m,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l})}},[c,u,d,r,i,n,t,s,o,l])}var Ht=function(){return Ht=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},Ht.apply(this,arguments)};function km(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function El(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}var ze="-ms-",Ga="-moz-",Ce="-webkit-",sE="comm",Sh="rule",Cm="decl",Yx="@import",oE="@keyframes",Xx="@layer",aE=Math.abs,bm=String.fromCharCode,Qf=Object.assign;function Jx(t,e){return Et(t,0)^45?(((e<<2^Et(t,0))<<2^Et(t,1))<<2^Et(t,2))<<2^Et(t,3):0}function lE(t){return t.trim()}function Ir(t,e){return(t=e.exec(t))?t[0]:t}function me(t,e,n){return t.replace(e,n)}function Xu(t,e,n){return t.indexOf(e,n)}function Et(t,e){return t.charCodeAt(e)|0}function So(t,e,n){return t.slice(e,n)}function nr(t){return t.length}function uE(t){return t.length}function Na(t,e){return e.push(t),t}function Zx(t,e){return t.map(e).join("")}function Uv(t,e){return t.filter(function(n){return!Ir(n,e)})}var Rh=1,Ro=1,cE=0,xn=0,ht=0,Ho="";function Ah(t,e,n,r,i,s,o,l){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:Rh,column:Ro,length:o,return:"",siblings:l}}function Jr(t,e){return Qf(Ah("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function Fs(t){for(;t.root;)t=Jr(t.root,{children:[t]});Na(t,t.siblings)}function ek(){return ht}function tk(){return ht=xn>0?Et(Ho,--xn):0,Ro--,ht===10&&(Ro=1,Rh--),ht}function Hn(){return ht=xn<cE?Et(Ho,xn++):0,Ro++,ht===10&&(Ro=1,Rh++),ht}function rs(){return Et(Ho,xn)}function Ju(){return xn}function Ph(t,e){return So(Ho,t,e)}function Yf(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function nk(t){return Rh=Ro=1,cE=nr(Ho=t),xn=0,[]}function rk(t){return Ho="",t}function Ld(t){return lE(Ph(xn-1,Xf(t===91?t+2:t===40?t+1:t)))}function ik(t){for(;(ht=rs())&&ht<33;)Hn();return Yf(t)>2||Yf(ht)>3?"":" "}function sk(t,e){for(;--e&&Hn()&&!(ht<48||ht>102||ht>57&&ht<65||ht>70&&ht<97););return Ph(t,Ju()+(e<6&&rs()==32&&Hn()==32))}function Xf(t){for(;Hn();)switch(ht){case t:return xn;case 34:case 39:t!==34&&t!==39&&Xf(ht);break;case 40:t===41&&Xf(t);break;case 92:Hn();break}return xn}function ok(t,e){for(;Hn()&&t+ht!==57;)if(t+ht===84&&rs()===47)break;return"/*"+Ph(e,xn-1)+"*"+bm(t===47?t:Hn())}function ak(t){for(;!Yf(rs());)Hn();return Ph(t,xn)}function lk(t){return rk(Zu("",null,null,null,[""],t=nk(t),0,[0],t))}function Zu(t,e,n,r,i,s,o,l,u){for(var c=0,d=0,f=o,m=0,_=0,T=0,A=1,b=1,I=1,v=0,S="",L=i,z=s,x=r,w=S;b;)switch(T=v,v=Hn()){case 40:if(T!=108&&Et(w,f-1)==58){Xu(w+=me(Ld(v),"&","&\f"),"&\f",aE(c?l[c-1]:0))!=-1&&(I=-1);break}case 34:case 39:case 91:w+=Ld(v);break;case 9:case 10:case 13:case 32:w+=ik(T);break;case 92:w+=sk(Ju()-1,7);continue;case 47:switch(rs()){case 42:case 47:Na(uk(ok(Hn(),Ju()),e,n,u),u);break;default:w+="/"}break;case 123*A:l[c++]=nr(w)*I;case 125*A:case 59:case 0:switch(v){case 0:case 125:b=0;case 59+d:I==-1&&(w=me(w,/\f/g,"")),_>0&&nr(w)-f&&Na(_>32?jv(w+";",r,n,f-1,u):jv(me(w," ","")+";",r,n,f-2,u),u);break;case 59:w+=";";default:if(Na(x=Fv(w,e,n,c,d,i,l,S,L=[],z=[],f,s),s),v===123)if(d===0)Zu(w,e,x,x,L,s,f,l,z);else switch(m===99&&Et(w,3)===110?100:m){case 100:case 108:case 109:case 115:Zu(t,x,x,r&&Na(Fv(t,x,x,0,0,i,l,S,i,L=[],f,z),z),i,z,f,l,r?L:z);break;default:Zu(w,x,x,x,[""],z,0,l,z)}}c=d=_=0,A=I=1,S=w="",f=o;break;case 58:f=1+nr(w),_=T;default:if(A<1){if(v==123)--A;else if(v==125&&A++==0&&tk()==125)continue}switch(w+=bm(v),v*A){case 38:I=d>0?1:(w+="\f",-1);break;case 44:l[c++]=(nr(w)-1)*I,I=1;break;case 64:rs()===45&&(w+=Ld(Hn())),m=rs(),d=f=nr(S=w+=ak(Ju())),v++;break;case 45:T===45&&nr(w)==2&&(A=0)}}return s}function Fv(t,e,n,r,i,s,o,l,u,c,d,f){for(var m=i-1,_=i===0?s:[""],T=uE(_),A=0,b=0,I=0;A<r;++A)for(var v=0,S=So(t,m+1,m=aE(b=o[A])),L=t;v<T;++v)(L=lE(b>0?_[v]+" "+S:me(S,/&\f/g,_[v])))&&(u[I++]=L);return Ah(t,e,n,i===0?Sh:l,u,c,d,f)}function uk(t,e,n,r){return Ah(t,e,n,sE,bm(ek()),So(t,2,-2),0,r)}function jv(t,e,n,r,i){return Ah(t,e,n,Cm,So(t,0,r),So(t,r+1,-1),r,i)}function hE(t,e,n){switch(Jx(t,e)){case 5103:return Ce+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ce+t+t;case 4789:return Ga+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return Ce+t+Ga+t+ze+t+t;case 5936:switch(Et(t,e+11)){case 114:return Ce+t+ze+me(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return Ce+t+ze+me(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return Ce+t+ze+me(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return Ce+t+ze+t+t;case 6165:return Ce+t+ze+"flex-"+t+t;case 5187:return Ce+t+me(t,/(\w+).+(:[^]+)/,Ce+"box-$1$2"+ze+"flex-$1$2")+t;case 5443:return Ce+t+ze+"flex-item-"+me(t,/flex-|-self/g,"")+(Ir(t,/flex-|baseline/)?"":ze+"grid-row-"+me(t,/flex-|-self/g,""))+t;case 4675:return Ce+t+ze+"flex-line-pack"+me(t,/align-content|flex-|-self/g,"")+t;case 5548:return Ce+t+ze+me(t,"shrink","negative")+t;case 5292:return Ce+t+ze+me(t,"basis","preferred-size")+t;case 6060:return Ce+"box-"+me(t,"-grow","")+Ce+t+ze+me(t,"grow","positive")+t;case 4554:return Ce+me(t,/([^-])(transform)/g,"$1"+Ce+"$2")+t;case 6187:return me(me(me(t,/(zoom-|grab)/,Ce+"$1"),/(image-set)/,Ce+"$1"),t,"")+t;case 5495:case 3959:return me(t,/(image-set\([^]*)/,Ce+"$1$`$1");case 4968:return me(me(t,/(.+:)(flex-)?(.*)/,Ce+"box-pack:$3"+ze+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ce+t+t;case 4200:if(!Ir(t,/flex-|baseline/))return ze+"grid-column-align"+So(t,e)+t;break;case 2592:case 3360:return ze+me(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,Ir(r.props,/grid-\w+-end/)})?~Xu(t+(n=n[e].value),"span",0)?t:ze+me(t,"-start","")+t+ze+"grid-row-span:"+(~Xu(n,"span",0)?Ir(n,/\d+/):+Ir(n,/\d+/)-+Ir(t,/\d+/))+";":ze+me(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return Ir(r.props,/grid-\w+-start/)})?t:ze+me(me(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return me(t,/(.+)-inline(.+)/,Ce+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(nr(t)-1-e>6)switch(Et(t,e+1)){case 109:if(Et(t,e+4)!==45)break;case 102:return me(t,/(.+:)(.+)-([^]+)/,"$1"+Ce+"$2-$3$1"+Ga+(Et(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Xu(t,"stretch",0)?hE(me(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return me(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,l,u,c){return ze+i+":"+s+c+(o?ze+i+"-span:"+(l?u:+u-+s)+c:"")+t});case 4949:if(Et(t,e+6)===121)return me(t,":",":"+Ce)+t;break;case 6444:switch(Et(t,Et(t,14)===45?18:11)){case 120:return me(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ce+(Et(t,14)===45?"inline-":"")+"box$3$1"+Ce+"$2$3$1"+ze+"$2box$3")+t;case 100:return me(t,":",":"+ze)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return me(t,"scroll-","scroll-snap-")+t}return t}function Uc(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function ck(t,e,n,r){switch(t.type){case Xx:if(t.children.length)break;case Yx:case Cm:return t.return=t.return||t.value;case sE:return"";case oE:return t.return=t.value+"{"+Uc(t.children,r)+"}";case Sh:if(!nr(t.value=t.props.join(",")))return""}return nr(n=Uc(t.children,r))?t.return=t.value+"{"+n+"}":""}function hk(t){var e=uE(t);return function(n,r,i,s){for(var o="",l=0;l<e;l++)o+=t[l](n,r,i,s)||"";return o}}function dk(t){return function(e){e.root||(e=e.return)&&t(e)}}function fk(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case Cm:t.return=hE(t.value,t.length,n);return;case oE:return Uc([Jr(t,{value:me(t.value,"@","@"+Ce)})],r);case Sh:if(t.length)return Zx(n=t.props,function(i){switch(Ir(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Fs(Jr(t,{props:[me(i,/:(read-\w+)/,":"+Ga+"$1")]})),Fs(Jr(t,{props:[i]})),Qf(t,{props:Uv(n,r)});break;case"::placeholder":Fs(Jr(t,{props:[me(i,/:(plac\w+)/,":"+Ce+"input-$1")]})),Fs(Jr(t,{props:[me(i,/:(plac\w+)/,":"+Ga+"$1")]})),Fs(Jr(t,{props:[me(i,/:(plac\w+)/,ze+"input-$1")]})),Fs(Jr(t,{props:[i]})),Qf(t,{props:Uv(n,r)});break}return""})}}var pk={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},cn={},Ao=typeof process<"u"&&cn!==void 0&&(cn.REACT_APP_SC_ATTR||cn.SC_ATTR)||"data-styled",dE="active",fE="data-styled-version",xh="6.1.12",Nm=`/*!sc*/
`,Fc=typeof window<"u"&&"HTMLElement"in window,mk=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&cn!==void 0&&cn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&cn.REACT_APP_SC_DISABLE_SPEEDY!==""?cn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&cn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&cn!==void 0&&cn.SC_DISABLE_SPEEDY!==void 0&&cn.SC_DISABLE_SPEEDY!==""&&cn.SC_DISABLE_SPEEDY!=="false"&&cn.SC_DISABLE_SPEEDY),gk={},kh=Object.freeze([]),Po=Object.freeze({});function pE(t,e,n){return n===void 0&&(n=Po),t.theme!==n.theme&&t.theme||e||n.theme}var mE=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),yk=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,vk=/(^-|-$)/g;function zv(t){return t.replace(yk,"-").replace(vk,"")}var _k=/(a)(d)/gi,ku=52,$v=function(t){return String.fromCharCode(t+(t>25?39:97))};function Jf(t){var e,n="";for(e=Math.abs(t);e>ku;e=e/ku|0)n=$v(e%ku)+n;return($v(e%ku)+n).replace(_k,"$1-$2")}var Od,gE=5381,no=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},yE=function(t){return no(gE,t)};function vE(t){return Jf(yE(t)>>>0)}function wk(t){return t.displayName||t.name||"Component"}function Md(t){return typeof t=="string"&&!0}var _E=typeof Symbol=="function"&&Symbol.for,wE=_E?Symbol.for("react.memo"):60115,Ek=_E?Symbol.for("react.forward_ref"):60112,Tk={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Ik={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},EE={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Sk=((Od={})[Ek]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Od[wE]=EE,Od);function Bv(t){return("type"in(e=t)&&e.type.$$typeof)===wE?EE:"$$typeof"in t?Sk[t.$$typeof]:Tk;var e}var Rk=Object.defineProperty,Ak=Object.getOwnPropertyNames,Hv=Object.getOwnPropertySymbols,Pk=Object.getOwnPropertyDescriptor,xk=Object.getPrototypeOf,Wv=Object.prototype;function TE(t,e,n){if(typeof e!="string"){if(Wv){var r=xk(e);r&&r!==Wv&&TE(t,r,n)}var i=Ak(e);Hv&&(i=i.concat(Hv(e)));for(var s=Bv(t),o=Bv(e),l=0;l<i.length;++l){var u=i[l];if(!(u in Ik||n&&n[u]||o&&u in o||s&&u in s)){var c=Pk(e,u);try{Rk(t,u,c)}catch{}}}}return t}function xo(t){return typeof t=="function"}function Dm(t){return typeof t=="object"&&"styledComponentId"in t}function Ji(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function Zf(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=t[r];return n}function Tl(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function ep(t,e,n){if(n===void 0&&(n=!1),!n&&!Tl(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=ep(t[r],e[r]);else if(Tl(e))for(var r in e)t[r]=ep(t[r],e[r]);return t}function Lm(t,e){Object.defineProperty(t,"toString",{value:e})}function Ul(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var kk=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;e>=s;)if((s<<=1)<0)throw Ul(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var l=this.indexOfGroup(e+1),u=(o=0,n.length);o<u;o++)this.tag.insertRule(l,n[o])&&(this.groupSizes[e]++,l++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(Nm);return n},t}(),ec=new Map,jc=new Map,tc=1,Cu=function(t){if(ec.has(t))return ec.get(t);for(;jc.has(tc);)tc++;var e=tc++;return ec.set(t,e),jc.set(e,t),e},Ck=function(t,e){tc=e+1,ec.set(t,e),jc.set(e,t)},bk="style[".concat(Ao,"][").concat(fE,'="').concat(xh,'"]'),Nk=new RegExp("^".concat(Ao,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Dk=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},Lk=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(Nm),i=[],s=0,o=r.length;s<o;s++){var l=r[s].trim();if(l){var u=l.match(Nk);if(u){var c=0|parseInt(u[1],10),d=u[2];c!==0&&(Ck(d,c),Dk(t,d,u[3]),t.getTag().insertRules(c,i)),i.length=0}else i.push(l)}}},qv=function(t){for(var e=document.querySelectorAll(bk),n=0,r=e.length;n<r;n++){var i=e[n];i&&i.getAttribute(Ao)!==dE&&(Lk(t,i),i.parentNode&&i.parentNode.removeChild(i))}};function Ok(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var IE=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(l){var u=Array.from(l.querySelectorAll("style[".concat(Ao,"]")));return u[u.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Ao,dE),r.setAttribute(fE,xh);var o=Ok();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},Mk=function(){function t(e){this.element=IE(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw Ul(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),Vk=function(){function t(e){this.element=IE(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),Uk=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),Kv=Fc,Fk={isServer:!Fc,useCSSOMInjection:!mk},zc=function(){function t(e,n,r){e===void 0&&(e=Po),n===void 0&&(n={});var i=this;this.options=Ht(Ht({},Fk),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Fc&&Kv&&(Kv=!1,qv(this)),Lm(this,function(){return function(s){for(var o=s.getTag(),l=o.length,u="",c=function(f){var m=function(I){return jc.get(I)}(f);if(m===void 0)return"continue";var _=s.names.get(m),T=o.getGroup(f);if(_===void 0||!_.size||T.length===0)return"continue";var A="".concat(Ao,".g").concat(f,'[id="').concat(m,'"]'),b="";_!==void 0&&_.forEach(function(I){I.length>0&&(b+="".concat(I,","))}),u+="".concat(T).concat(A,'{content:"').concat(b,'"}').concat(Nm)},d=0;d<l;d++)c(d);return u}(i)})}return t.registerId=function(e){return Cu(e)},t.prototype.rehydrate=function(){!this.server&&Fc&&qv(this)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(Ht(Ht({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new Uk(i):r?new Mk(i):new Vk(i)}(this.options),new kk(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(Cu(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(Cu(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(Cu(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),jk=/&/g,zk=/^\s*\/\/.*$/gm;function SE(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=SE(n.children,e)),n})}function $k(t){var e,n,r,i=Po,s=i.options,o=s===void 0?Po:s,l=i.plugins,u=l===void 0?kh:l,c=function(m,_,T){return T.startsWith(n)&&T.endsWith(n)&&T.replaceAll(n,"").length>0?".".concat(e):m},d=u.slice();d.push(function(m){m.type===Sh&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(jk,n).replace(r,c))}),o.prefix&&d.push(fk),d.push(ck);var f=function(m,_,T,A){_===void 0&&(_=""),T===void 0&&(T=""),A===void 0&&(A="&"),e=A,n=_,r=new RegExp("\\".concat(n,"\\b"),"g");var b=m.replace(zk,""),I=lk(T||_?"".concat(T," ").concat(_," { ").concat(b," }"):b);o.namespace&&(I=SE(I,o.namespace));var v=[];return Uc(I,hk(d.concat(dk(function(S){return v.push(S)})))),v};return f.hash=u.length?u.reduce(function(m,_){return _.name||Ul(15),no(m,_.name)},gE).toString():"",f}var Bk=new zc,tp=$k(),RE=zn.createContext({shouldForwardProp:void 0,styleSheet:Bk,stylis:tp});RE.Consumer;zn.createContext(void 0);function np(){return j.useContext(RE)}var Hk=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=tp);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,Lm(this,function(){throw Ul(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=tp),this.name+e.hash},t}(),Wk=function(t){return t>="A"&&t<="Z"};function Gv(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;Wk(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var AE=function(t){return t==null||t===!1||t===""},PE=function(t){var e,n,r=[];for(var i in t){var s=t[i];t.hasOwnProperty(i)&&!AE(s)&&(Array.isArray(s)&&s.isCss||xo(s)?r.push("".concat(Gv(i),":"),s,";"):Tl(s)?r.push.apply(r,El(El(["".concat(i," {")],PE(s),!1),["}"],!1)):r.push("".concat(Gv(i),": ").concat((e=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in pk||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function _i(t,e,n,r){if(AE(t))return[];if(Dm(t))return[".".concat(t.styledComponentId)];if(xo(t)){if(!xo(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var i=t(e);return _i(i,e,n,r)}var s;return t instanceof Hk?n?(t.inject(n,r),[t.getName(r)]):[t]:Tl(t)?PE(t):Array.isArray(t)?Array.prototype.concat.apply(kh,t.map(function(o){return _i(o,e,n,r)})):[t.toString()]}function xE(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(xo(n)&&!Dm(n))return!1}return!0}var qk=yE(xh),Kk=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&xE(e),this.componentId=n,this.baseHash=no(qk,n),this.baseStyle=r,zc.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Ji(i,this.staticRulesId);else{var s=Zf(_i(this.rules,e,n,r)),o=Jf(no(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var l=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,l)}i=Ji(i,o),this.staticRulesId=o}else{for(var u=no(this.baseHash,r.hash),c="",d=0;d<this.rules.length;d++){var f=this.rules[d];if(typeof f=="string")c+=f;else if(f){var m=Zf(_i(f,e,n,r));u=no(u,m+d),c+=m}}if(c){var _=Jf(u>>>0);n.hasNameForId(this.componentId,_)||n.insertRules(this.componentId,_,r(c,".".concat(_),void 0,this.componentId)),i=Ji(i,_)}}return i},t}(),Om=zn.createContext(void 0);Om.Consumer;var Vd={};function Gk(t,e,n){var r=Dm(t),i=t,s=!Md(t),o=e.attrs,l=o===void 0?kh:o,u=e.componentId,c=u===void 0?function(L,z){var x=typeof L!="string"?"sc":zv(L);Vd[x]=(Vd[x]||0)+1;var w="".concat(x,"-").concat(vE(xh+x+Vd[x]));return z?"".concat(z,"-").concat(w):w}(e.displayName,e.parentComponentId):u,d=e.displayName,f=d===void 0?function(L){return Md(L)?"styled.".concat(L):"Styled(".concat(wk(L),")")}(t):d,m=e.displayName&&e.componentId?"".concat(zv(e.displayName),"-").concat(e.componentId):e.componentId||c,_=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,T=e.shouldForwardProp;if(r&&i.shouldForwardProp){var A=i.shouldForwardProp;if(e.shouldForwardProp){var b=e.shouldForwardProp;T=function(L,z){return A(L,z)&&b(L,z)}}else T=A}var I=new Kk(n,m,r?i.componentStyle:void 0);function v(L,z){return function(x,w,g){var E=x.attrs,R=x.componentStyle,k=x.defaultProps,N=x.foldedComponentIds,P=x.styledComponentId,pe=x.target,at=zn.useContext(Om),Zt=np(),ye=x.shouldForwardProp||Zt.shouldForwardProp,F=pE(w,at,k)||Po,W=function(Ze,qe,Dt){for(var Cn,bn=Ht(Ht({},qe),{className:void 0,theme:Dt}),Gn=0;Gn<Ze.length;Gn+=1){var Nn=xo(Cn=Ze[Gn])?Cn(bn):Cn;for(var Ne in Nn)bn[Ne]=Ne==="className"?Ji(bn[Ne],Nn[Ne]):Ne==="style"?Ht(Ht({},bn[Ne]),Nn[Ne]):Nn[Ne]}return qe.className&&(bn.className=Ji(bn.className,qe.className)),bn}(E,w,F),X=W.as||pe,se={};for(var le in W)W[le]===void 0||le[0]==="$"||le==="as"||le==="theme"&&W.theme===F||(le==="forwardedAs"?se.as=W.forwardedAs:ye&&!ye(le,X)||(se[le]=W[le]));var xe=function(Ze,qe){var Dt=np(),Cn=Ze.generateAndInjectStyles(qe,Dt.styleSheet,Dt.stylis);return Cn}(R,W),We=Ji(N,P);return xe&&(We+=" "+xe),W.className&&(We+=" "+W.className),se[Md(X)&&!mE.has(X)?"class":"className"]=We,se.ref=g,j.createElement(X,se)}(S,L,z)}v.displayName=f;var S=zn.forwardRef(v);return S.attrs=_,S.componentStyle=I,S.displayName=f,S.shouldForwardProp=T,S.foldedComponentIds=r?Ji(i.foldedComponentIds,i.styledComponentId):"",S.styledComponentId=m,S.target=r?i.target:t,Object.defineProperty(S,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(L){this._foldedDefaultProps=r?function(z){for(var x=[],w=1;w<arguments.length;w++)x[w-1]=arguments[w];for(var g=0,E=x;g<E.length;g++)ep(z,E[g],!0);return z}({},i.defaultProps,L):L}}),Lm(S,function(){return".".concat(S.styledComponentId)}),s&&TE(S,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),S}function Qv(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var Yv=function(t){return Object.assign(t,{isCss:!0})};function Mm(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(xo(t)||Tl(t))return Yv(_i(Qv(kh,El([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?_i(r):Yv(_i(Qv(r,e)))}function rp(t,e,n){if(n===void 0&&(n=Po),!e)throw Ul(1,e);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return t(e,n,Mm.apply(void 0,El([i],s,!1)))};return r.attrs=function(i){return rp(t,e,Ht(Ht({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return rp(t,e,Ht(Ht({},n),i))},r}var kE=function(t){return rp(Gk,t)},re=kE;mE.forEach(function(t){re[t]=kE(t)});var Qk=function(){function t(e,n){this.rules=e,this.componentId=n,this.isStatic=xE(e),zc.registerId(this.componentId+1)}return t.prototype.createStyles=function(e,n,r,i){var s=i(Zf(_i(this.rules,n,r,i)),""),o=this.componentId+e;r.insertRules(o,o,s)},t.prototype.removeStyles=function(e,n){n.clearRules(this.componentId+e)},t.prototype.renderStyles=function(e,n,r,i){e>2&&zc.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,n,r,i)},t}();function CE(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=Mm.apply(void 0,El([t],e,!1)),i="sc-global-".concat(vE(JSON.stringify(r))),s=new Qk(r,i),o=function(u){var c=np(),d=zn.useContext(Om),f=zn.useRef(c.styleSheet.allocateGSInstance(i)).current;return c.styleSheet.server&&l(f,u,c.styleSheet,d,c.stylis),zn.useLayoutEffect(function(){if(!c.styleSheet.server)return l(f,u,c.styleSheet,d,c.stylis),function(){return s.removeStyles(f,c.styleSheet)}},[f,u,c.styleSheet,d,c.stylis]),null};function l(u,c,d,f,m){if(s.isStatic)s.renderStyles(u,gk,d,m);else{var _=Ht(Ht({},c),{theme:pE(c,f,o.defaultProps)});s.renderStyles(u,_,d,m)}}return zn.memo(o)}const Yk=re.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`,Xk=re.span`
  font-size: 24px;
`;function Jk(){return V.jsx(Yk,{children:V.jsx(Xk,{children:"Loading..."})})}var bE=function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t},NE=Mm(Xv||(Xv=bE([`
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
`])));CE(Jv||(Jv=bE(["",""],["",""])),NE);var Xv,Jv;function Zk(){return V.jsx(V.Fragment,{children:V.jsx(Px,{})})}var Zv={};/**
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
 */const DE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},eC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},LE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,f=(s&3)<<4|l>>4;let m=(l&15)<<2|c>>6,_=c&63;u||(_=64,o||(m=64)),r.push(n[d],n[f],n[m],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(DE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):eC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||f==null)throw new tC;const m=s<<2|l>>4;if(r.push(m),c!==64){const _=l<<4&240|c>>2;if(r.push(_),f!==64){const T=c<<6&192|f;r.push(T)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class tC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const nC=function(t){const e=DE(t);return LE.encodeByteArray(e,!0)},$c=function(t){return nC(t).replace(/\./g,"")},OE=function(t){try{return LE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function rC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const iC=()=>rC().__FIREBASE_DEFAULTS__,sC=()=>{if(typeof process>"u"||typeof Zv>"u")return;const t=Zv.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},oC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&OE(t[1]);return e&&JSON.parse(e)},Ch=()=>{try{return iC()||sC()||oC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ME=t=>{var e,n;return(n=(e=Ch())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},VE=t=>{const e=ME(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},UE=()=>{var t;return(t=Ch())===null||t===void 0?void 0:t.config},FE=t=>{var e;return(e=Ch())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class aC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function bt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function lC(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(bt())}function uC(){var t;const e=(t=Ch())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function cC(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function hC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function dC(){const t=bt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function fC(){return!uC()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function pC(){try{return typeof indexedDB=="object"}catch{return!1}}function mC(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const gC="FirebaseError";class kn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=gC,Object.setPrototypeOf(this,kn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fl.prototype.create)}}class Fl{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?yC(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new kn(i,l,r)}}function yC(t,e){return t.replace(vC,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const vC=/\{\$([^}]+)}/g;function _C(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Bc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(e_(s)&&e_(o)){if(!Bc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function e_(t){return t!==null&&typeof t=="object"}/**
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
 */function jl(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Da(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function La(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function wC(t,e){const n=new EC(t,e);return n.subscribe.bind(n)}class EC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");TC(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ud),i.error===void 0&&(i.error=Ud),i.complete===void 0&&(i.complete=Ud);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function TC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ud(){}/**
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
 */function nt(t){return t&&t._delegate?t._delegate:t}class Ai{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class IC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new aC;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(RC(e))try{this.getOrInitializeService({instanceIdentifier:Wi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Wi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Wi){return this.instances.has(e)}getOptions(e=Wi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:SC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Wi){return this.component?this.component.multipleInstances?e:Wi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function SC(t){return t===Wi?void 0:t}function RC(t){return t.instantiationMode==="EAGER"}/**
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
 */class AC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new IC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ee||(Ee={}));const PC={debug:Ee.DEBUG,verbose:Ee.VERBOSE,info:Ee.INFO,warn:Ee.WARN,error:Ee.ERROR,silent:Ee.SILENT},xC=Ee.INFO,kC={[Ee.DEBUG]:"log",[Ee.VERBOSE]:"log",[Ee.INFO]:"info",[Ee.WARN]:"warn",[Ee.ERROR]:"error"},CC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=kC[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Vm{constructor(e){this.name=e,this._logLevel=xC,this._logHandler=CC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?PC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ee.DEBUG,...e),this._logHandler(this,Ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ee.VERBOSE,...e),this._logHandler(this,Ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ee.INFO,...e),this._logHandler(this,Ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ee.WARN,...e),this._logHandler(this,Ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ee.ERROR,...e),this._logHandler(this,Ee.ERROR,...e)}}const bC=(t,e)=>e.some(n=>t instanceof n);let t_,n_;function NC(){return t_||(t_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function DC(){return n_||(n_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const zE=new WeakMap,ip=new WeakMap,$E=new WeakMap,Fd=new WeakMap,Um=new WeakMap;function LC(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(wi(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&zE.set(n,t)}).catch(()=>{}),Um.set(e,t),e}function OC(t){if(ip.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ip.set(t,e)}let sp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ip.get(t);if(e==="objectStoreNames")return t.objectStoreNames||$E.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return wi(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function MC(t){sp=t(sp)}function VC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(jd(this),e,...n);return $E.set(r,e.sort?e.sort():[e]),wi(r)}:DC().includes(t)?function(...e){return t.apply(jd(this),e),wi(zE.get(this))}:function(...e){return wi(t.apply(jd(this),e))}}function UC(t){return typeof t=="function"?VC(t):(t instanceof IDBTransaction&&OC(t),bC(t,NC())?new Proxy(t,sp):t)}function wi(t){if(t instanceof IDBRequest)return LC(t);if(Fd.has(t))return Fd.get(t);const e=UC(t);return e!==t&&(Fd.set(t,e),Um.set(e,t)),e}const jd=t=>Um.get(t);function FC(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=wi(o);return r&&o.addEventListener("upgradeneeded",u=>{r(wi(o.result),u.oldVersion,u.newVersion,wi(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const jC=["get","getKey","getAll","getAllKeys","count"],zC=["put","add","delete","clear"],zd=new Map;function r_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(zd.get(e))return zd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=zC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||jC.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return zd.set(e,s),s}MC(t=>({...t,get:(e,n,r)=>r_(e,n)||t.get(e,n,r),has:(e,n)=>!!r_(e,n)||t.has(e,n)}));/**
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
 */class $C{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(BC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function BC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const op="@firebase/app",i_="0.10.8";/**
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
 */const ds=new Vm("@firebase/app"),HC="@firebase/app-compat",WC="@firebase/analytics-compat",qC="@firebase/analytics",KC="@firebase/app-check-compat",GC="@firebase/app-check",QC="@firebase/auth",YC="@firebase/auth-compat",XC="@firebase/database",JC="@firebase/database-compat",ZC="@firebase/functions",e2="@firebase/functions-compat",t2="@firebase/installations",n2="@firebase/installations-compat",r2="@firebase/messaging",i2="@firebase/messaging-compat",s2="@firebase/performance",o2="@firebase/performance-compat",a2="@firebase/remote-config",l2="@firebase/remote-config-compat",u2="@firebase/storage",c2="@firebase/storage-compat",h2="@firebase/firestore",d2="@firebase/vertexai-preview",f2="@firebase/firestore-compat",p2="firebase",m2="10.12.5";/**
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
 */const ap="[DEFAULT]",g2={[op]:"fire-core",[HC]:"fire-core-compat",[qC]:"fire-analytics",[WC]:"fire-analytics-compat",[GC]:"fire-app-check",[KC]:"fire-app-check-compat",[QC]:"fire-auth",[YC]:"fire-auth-compat",[XC]:"fire-rtdb",[JC]:"fire-rtdb-compat",[ZC]:"fire-fn",[e2]:"fire-fn-compat",[t2]:"fire-iid",[n2]:"fire-iid-compat",[r2]:"fire-fcm",[i2]:"fire-fcm-compat",[s2]:"fire-perf",[o2]:"fire-perf-compat",[a2]:"fire-rc",[l2]:"fire-rc-compat",[u2]:"fire-gcs",[c2]:"fire-gcs-compat",[h2]:"fire-fst",[f2]:"fire-fst-compat",[d2]:"fire-vertex","fire-js":"fire-js",[p2]:"fire-js-all"};/**
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
 */const Hc=new Map,y2=new Map,lp=new Map;function s_(t,e){try{t.container.addComponent(e)}catch(n){ds.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function fs(t){const e=t.name;if(lp.has(e))return ds.debug(`There were multiple attempts to register component ${e}.`),!1;lp.set(e,t);for(const n of Hc.values())s_(n,t);for(const n of y2.values())s_(n,t);return!0}function bh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function ir(t){return t.settings!==void 0}/**
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
 */const v2={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ei=new Fl("app","Firebase",v2);/**
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
 */class _2{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ai("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ei.create("app-deleted",{appName:this._name})}}/**
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
 */const Is=m2;function BE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ap,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Ei.create("bad-app-name",{appName:String(i)});if(n||(n=UE()),!n)throw Ei.create("no-options");const s=Hc.get(i);if(s){if(Bc(n,s.options)&&Bc(r,s.config))return s;throw Ei.create("duplicate-app",{appName:i})}const o=new AC(i);for(const u of lp.values())o.addComponent(u);const l=new _2(n,r,o);return Hc.set(i,l),l}function Fm(t=ap){const e=Hc.get(t);if(!e&&t===ap&&UE())return BE();if(!e)throw Ei.create("no-app",{appName:t});return e}function lr(t,e,n){var r;let i=(r=g2[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ds.warn(l.join(" "));return}fs(new Ai(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const w2="firebase-heartbeat-database",E2=1,Il="firebase-heartbeat-store";let $d=null;function HE(){return $d||($d=FC(w2,E2,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Il)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ei.create("idb-open",{originalErrorMessage:t.message})})),$d}async function T2(t){try{const n=(await HE()).transaction(Il),r=await n.objectStore(Il).get(WE(t));return await n.done,r}catch(e){if(e instanceof kn)ds.warn(e.message);else{const n=Ei.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ds.warn(n.message)}}}async function o_(t,e){try{const r=(await HE()).transaction(Il,"readwrite");await r.objectStore(Il).put(e,WE(t)),await r.done}catch(n){if(n instanceof kn)ds.warn(n.message);else{const r=Ei.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ds.warn(r.message)}}}function WE(t){return`${t.name}!${t.options.appId}`}/**
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
 */const I2=1024,S2=30*24*60*60*1e3;class R2{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new P2(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=a_();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=S2}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=a_(),{heartbeatsToSend:r,unsentEntries:i}=A2(this._heartbeatsCache.heartbeats),s=$c(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function a_(){return new Date().toISOString().substring(0,10)}function A2(t,e=I2){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),l_(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),l_(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class P2{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return pC()?mC().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await T2(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return o_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return o_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function l_(t){return $c(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function x2(t){fs(new Ai("platform-logger",e=>new $C(e),"PRIVATE")),fs(new Ai("heartbeat",e=>new R2(e),"PRIVATE")),lr(op,i_,t),lr(op,i_,"esm2017"),lr("fire-js","")}x2("");var k2="firebase",C2="10.12.5";/**
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
 */lr(k2,C2,"app");function qE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const b2=qE,KE=new Fl("auth","Firebase",qE());/**
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
 */const Wc=new Vm("@firebase/auth");function N2(t,...e){Wc.logLevel<=Ee.WARN&&Wc.warn(`Auth (${Is}): ${t}`,...e)}function nc(t,...e){Wc.logLevel<=Ee.ERROR&&Wc.error(`Auth (${Is}): ${t}`,...e)}/**
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
 */function qn(t,...e){throw jm(t,...e)}function ur(t,...e){return jm(t,...e)}function GE(t,e,n){const r=Object.assign(Object.assign({},b2()),{[e]:n});return new Fl("auth","Firebase",r).create(e,{appName:t.name})}function Nr(t){return GE(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function jm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return KE.create(t,...e)}function ae(t,e,...n){if(!t)throw jm(e,...n)}function Pr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw nc(e),new Error(e)}function Vr(t,e){t||Pr(e)}/**
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
 */function up(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function D2(){return u_()==="http:"||u_()==="https:"}function u_(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function L2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(D2()||cC()||"connection"in navigator)?navigator.onLine:!0}function O2(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class zl{constructor(e,n){this.shortDelay=e,this.longDelay=n,Vr(n>e,"Short delay should be less than long delay!"),this.isMobile=lC()||hC()}get(){return L2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */const M2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const V2=new zl(3e4,6e4);function Oi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function $r(t,e,n,r,i={}){return YE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=jl(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),QE.fetch()(XE(t,t.config.apiHost,n,l),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function YE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},M2),e);try{const i=new F2(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw bu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw bu(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw bu(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw bu(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw GE(t,d,c);qn(t,d)}}catch(i){if(i instanceof kn)throw i;qn(t,"network-request-failed",{message:String(i)})}}async function $l(t,e,n,r,i={}){const s=await $r(t,e,n,r,i);return"mfaPendingCredential"in s&&qn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function XE(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?zm(t.config,i):`${t.config.apiScheme}://${i}`}function U2(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class F2{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ur(this.auth,"network-request-failed")),V2.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function bu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ur(t,e,r);return i.customData._tokenResponse=n,i}function c_(t){return t!==void 0&&t.enterprise!==void 0}class j2{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return U2(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function z2(t,e){return $r(t,"GET","/v2/recaptchaConfig",Oi(t,e))}/**
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
 */async function $2(t,e){return $r(t,"POST","/v1/accounts:delete",e)}async function JE(t,e){return $r(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Qa(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function B2(t,e=!1){const n=nt(t),r=await n.getIdToken(e),i=$m(r);ae(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Qa(Bd(i.auth_time)),issuedAtTime:Qa(Bd(i.iat)),expirationTime:Qa(Bd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Bd(t){return Number(t)*1e3}function $m(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return nc("JWT malformed, contained fewer than 3 sections"),null;try{const i=OE(n);return i?JSON.parse(i):(nc("Failed to decode base64 JWT payload"),null)}catch(i){return nc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function h_(t){const e=$m(t);return ae(e,"internal-error"),ae(typeof e.exp<"u","internal-error"),ae(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ko(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof kn&&H2(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function H2({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class W2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */async function qc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ko(t,JE(n,{idToken:r}));ae(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?ZE(s.providerUserInfo):[],l=K2(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),d=u?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new cp(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,f)}async function q2(t){const e=nt(t);await qc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function K2(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function ZE(t){return t.map(e=>{var{providerId:n}=e,r=km(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function G2(t,e){const n=await YE(t,{},async()=>{const r=jl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=XE(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",QE.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Q2(t,e){return $r(t,"POST","/v2/accounts:revokeToken",Oi(t,e))}/**
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
 */class ho{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ae(e.idToken,"internal-error"),ae(typeof e.idToken<"u","internal-error"),ae(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):h_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ae(e.length!==0,"internal-error");const n=h_(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ae(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await G2(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ho;return r&&(ae(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(ae(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(ae(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ho,this.toJSON())}_performRefresh(){return Pr("not implemented")}}/**
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
 */function Yr(t,e){ae(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class xr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=km(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new W2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new cp(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ko(this,this.stsTokenManager.getToken(this.auth,e));return ae(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return B2(this,e)}reload(){return q2(this)}_assign(e){this!==e&&(ae(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new xr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await qc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ir(this.auth.app))return Promise.reject(Nr(this.auth));const e=await this.getIdToken();return await ko(this,$2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,c,d;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,_=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,T=(o=n.photoURL)!==null&&o!==void 0?o:void 0,A=(l=n.tenantId)!==null&&l!==void 0?l:void 0,b=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,I=(c=n.createdAt)!==null&&c!==void 0?c:void 0,v=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:S,emailVerified:L,isAnonymous:z,providerData:x,stsTokenManager:w}=n;ae(S&&w,e,"internal-error");const g=ho.fromJSON(this.name,w);ae(typeof S=="string",e,"internal-error"),Yr(f,e.name),Yr(m,e.name),ae(typeof L=="boolean",e,"internal-error"),ae(typeof z=="boolean",e,"internal-error"),Yr(_,e.name),Yr(T,e.name),Yr(A,e.name),Yr(b,e.name),Yr(I,e.name),Yr(v,e.name);const E=new xr({uid:S,auth:e,email:m,emailVerified:L,displayName:f,isAnonymous:z,photoURL:T,phoneNumber:_,tenantId:A,stsTokenManager:g,createdAt:I,lastLoginAt:v});return x&&Array.isArray(x)&&(E.providerData=x.map(R=>Object.assign({},R))),b&&(E._redirectEventId=b),E}static async _fromIdTokenResponse(e,n,r=!1){const i=new ho;i.updateFromServerResponse(n);const s=new xr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await qc(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];ae(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?ZE(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new ho;l.updateFromIdToken(r);const u=new xr({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new cp(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
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
 */function p_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(rT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(tT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(sT(e))return"Blackberry";if(oT(e))return"Webos";if(Bm(e))return"Safari";if((e.includes("chrome/")||nT(e))&&!e.includes("edge/"))return"Chrome";if(iT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function tT(t=bt()){return/firefox\//i.test(t)}function Bm(t=bt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function nT(t=bt()){return/crios\//i.test(t)}function rT(t=bt()){return/iemobile/i.test(t)}function iT(t=bt()){return/android/i.test(t)}function sT(t=bt()){return/blackberry/i.test(t)}function oT(t=bt()){return/webos/i.test(t)}function Nh(t=bt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Y2(t=bt()){var e;return Nh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function X2(){return dC()&&document.documentMode===10}function aT(t=bt()){return Nh(t)||iT(t)||oT(t)||sT(t)||/windows phone/i.test(t)||rT(t)}function J2(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function lT(t,e=[]){let n;switch(t){case"Browser":n=p_(bt());break;case"Worker":n=`${p_(bt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Is}/${r}`}/**
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
 */class Z2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function eb(t,e={}){return $r(t,"GET","/v2/passwordPolicy",Oi(t,e))}/**
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
 */const tb=6;class nb{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:tb,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class rb{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new m_(this),this.idTokenSubscription=new m_(this),this.beforeStateQueue=new Z2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=KE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=kr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await fo.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await JE(this,{idToken:e}),r=await xr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(ir(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await qc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=O2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ir(this.app))return Promise.reject(Nr(this));const n=e?nt(e):null;return n&&ae(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ae(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ir(this.app)?Promise.reject(Nr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ir(this.app)?Promise.reject(Nr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(kr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await eb(this),n=new nb(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Fl("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Q2(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&kr(e)||this._popupRedirectResolver;ae(n,this,"argument-error"),this.redirectPersistenceManager=await fo.create(this,[kr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ae(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=lT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&N2(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ss(t){return nt(t)}class m_{constructor(e){this.auth=e,this.observer=null,this.addObserver=wC(n=>this.observer=n)}get next(){return ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Dh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ib(t){Dh=t}function uT(t){return Dh.loadJS(t)}function sb(){return Dh.recaptchaEnterpriseScript}function ob(){return Dh.gapiScript}function ab(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const lb="recaptcha-enterprise",ub="NO_RECAPTCHA";class cb{constructor(e){this.type=lb,this.auth=Ss(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{z2(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new j2(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;c_(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(ub)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&c_(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=sb();u.length!==0&&(u+=l),uT(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function g_(t,e,n,r=!1){const i=new cb(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function hp(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await g_(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await g_(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function hb(t,e){const n=bh(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Bc(s,e??{}))return i;qn(i,"already-initialized")}return n.initialize({options:e})}function db(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(kr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function fb(t,e,n){const r=Ss(t);ae(r._canInitEmulator,r,"emulator-config-failed"),ae(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=cT(e),{host:o,port:l}=pb(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),mb()}function cT(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function pb(t){const e=cT(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:y_(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:y_(o)}}}function y_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function mb(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Hm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Pr("not implemented")}_getIdTokenResponse(e){return Pr("not implemented")}_linkToIdToken(e,n){return Pr("not implemented")}_getReauthenticationResolver(e){return Pr("not implemented")}}async function gb(t,e){return $r(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function yb(t,e){return $l(t,"POST","/v1/accounts:signInWithPassword",Oi(t,e))}/**
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
 */async function vb(t,e){return $l(t,"POST","/v1/accounts:signInWithEmailLink",Oi(t,e))}async function _b(t,e){return $l(t,"POST","/v1/accounts:signInWithEmailLink",Oi(t,e))}/**
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
 */class Sl extends Hm{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Sl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Sl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return hp(e,n,"signInWithPassword",yb);case"emailLink":return vb(e,{email:this._email,oobCode:this._password});default:qn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return hp(e,r,"signUpPassword",gb);case"emailLink":return _b(e,{idToken:n,email:this._email,oobCode:this._password});default:qn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */const wb="http://localhost";class ps extends Hm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ps(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):qn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=km(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ps(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return po(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,po(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,po(e,n)}buildRequest(){const e={requestUri:wb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=jl(n)}return e}}/**
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
 */function Eb(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Tb(t){const e=Da(La(t)).link,n=e?Da(La(e)).deep_link_id:null,r=Da(La(t)).deep_link_id;return(r?Da(La(r)).link:null)||r||n||e||t}class Wm{constructor(e){var n,r,i,s,o,l;const u=Da(La(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,d=(r=u.oobCode)!==null&&r!==void 0?r:null,f=Eb((i=u.mode)!==null&&i!==void 0?i:null);ae(c&&d&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=d,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=Tb(e);try{return new Wm(n)}catch{return null}}}/**
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
 */class Wo{constructor(){this.providerId=Wo.PROVIDER_ID}static credential(e,n){return Sl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Wm.parseLink(n);return ae(r,"argument-error"),Sl._fromEmailAndCode(e,r.code,r.tenantId)}}Wo.PROVIDER_ID="password";Wo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Wo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */async function Ib(t,e){return $l(t,"POST","/v1/accounts:signUp",Oi(t,e))}/**
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
 */class Kc extends kn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Kc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Kc(e,n,r,i)}}function dT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Kc._fromErrorAndOperation(t,s,e,r):s})}async function Sb(t,e,n=!1){const r=await ko(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ms._forOperation(t,"link",r)}/**
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
 */async function Rb(t,e,n=!1){const{auth:r}=t;if(ir(r.app))return Promise.reject(Nr(r));const i="reauthenticate";try{const s=await ko(t,dT(r,i,e,t),n);ae(s.idToken,r,"internal-error");const o=$m(s.idToken);ae(o,r,"internal-error");const{sub:l}=o;return ae(t.uid===l,r,"user-mismatch"),ms._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&qn(r,"user-mismatch"),s}}/**
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
 */async function fT(t,e,n=!1){if(ir(t.app))return Promise.reject(Nr(t));const r="signIn",i=await dT(t,r,e),s=await ms._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Ab(t,e){return fT(Ss(t),e)}/**
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
 */async function pT(t){const e=Ss(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Pb(t,e,n){if(ir(t.app))return Promise.reject(Nr(t));const r=Ss(t),o=await hp(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Ib).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&pT(t),u}),l=await ms._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function xb(t,e,n){return ir(t.app)?Promise.reject(Nr(t)):Ab(nt(t),Wo.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&pT(t),r})}/**
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
 */async function kb(t,e){return $r(t,"POST","/v1/accounts:update",e)}/**
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
 */async function mT(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=nt(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await ko(r,kb(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function Cb(t,e,n,r){return nt(t).onIdTokenChanged(e,n,r)}function bb(t,e,n){return nt(t).beforeAuthStateChanged(e,n)}const Gc="__sak";/**
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
 */function Nb(){const t=bt();return Bm(t)||Nh(t)}const Db=1e3,Lb=10;class yT extends gT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Nb()&&J2(),this.fallbackToPolling=aT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);X2()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Lb):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Db)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}yT.type="LOCAL";const Ob=yT;/**
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
 */function Mb(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Lh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Lh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await Mb(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Lh.receivers=[];/**
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
 */class Vb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=qm("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function cr(){return window}function Ub(t){cr().location.href=t}/**
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
 */function wT(){return typeof cr().WorkerGlobalScope<"u"&&typeof cr().importScripts=="function"}async function Fb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function jb(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function zb(){return wT()?self:null}/**
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
 */const ET="firebaseLocalStorageDb",$b=1,Qc="firebaseLocalStorage",TT="fbase_key";class Hl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Oh(t,e){return t.transaction([Qc],e?"readwrite":"readonly").objectStore(Qc)}function Bb(){const t=indexedDB.deleteDatabase(ET);return new Hl(t).toPromise()}function dp(){const t=indexedDB.open(ET,$b);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Qc,{keyPath:TT})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Qc)?e(r):(r.close(),await Bb(),e(await dp()))})})}async function __(t,e,n){const r=Oh(t,!0).put({[TT]:e,value:n});return new Hl(r).toPromise()}async function Hb(t,e){const n=Oh(t,!1).get(e),r=await new Hl(n).toPromise();return r===void 0?null:r.value}function w_(t,e){const n=Oh(t,!0).delete(e);return new Hl(n).toPromise()}const Wb=800,qb=3;class IT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await dp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>qb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return wT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Lh._getInstance(zb()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Fb(),!this.activeServiceWorker)return;this.sender=new Vb(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||jb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await dp();return await __(e,Gc,"1"),await w_(e,Gc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>__(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Hb(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>w_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Oh(i,!1).getAll();return new Hl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Wb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}IT.type="LOCAL";const Kb=IT;new zl(3e4,6e4);/**
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
 */function Gb(t,e){return e?kr(e):(ae(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Km extends Hm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return po(e,this._buildIdpRequest())}_linkToIdToken(e,n){return po(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return po(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Qb(t){return fT(t.auth,new Km(t),t.bypassAuthState)}function Yb(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),Rb(n,new Km(t),t.bypassAuthState)}async function Xb(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),Sb(n,new Km(t),t.bypassAuthState)}/**
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
 */class ST{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Qb;case"linkViaPopup":case"linkViaRedirect":return Xb;case"reauthViaPopup":case"reauthViaRedirect":return Yb;default:qn(this.auth,"internal-error")}}resolve(e){Vr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Vr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Jb=new zl(2e3,1e4);class ro extends ST{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ro.currentPopupAction&&ro.currentPopupAction.cancel(),ro.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ae(e,this.auth,"internal-error"),e}async onExecution(){Vr(this.filter.length===1,"Popup operations only handle one event");const e=qm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ur(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ur(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ro.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ur(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Jb.get())};e()}}ro.currentPopupAction=null;/**
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
 */const Zb="pendingRedirect",ic=new Map;class eN extends ST{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ic.get(this.auth._key());if(!e){try{const r=await tN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ic.set(this.auth._key(),e)}return this.bypassAuthState||ic.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function tN(t,e){const n=iN(e),r=rN(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function nN(t,e){ic.set(t._key(),e)}function rN(t){return kr(t._redirectPersistence)}function iN(t){return rc(Zb,t.config.apiKey,t.name)}async function sN(t,e,n=!1){if(ir(t.app))return Promise.reject(Nr(t));const r=Ss(t),i=Gb(r,e),o=await new eN(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const oN=10*60*1e3;class aN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!lN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!RT(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ur(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=oN&&this.cachedEventUids.clear(),this.cachedEventUids.has(E_(e))}saveEventToCache(e){this.cachedEventUids.add(E_(e)),this.lastProcessedEventTime=Date.now()}}function E_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function RT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function lN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return RT(t);default:return!1}}/**
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
 */async function uN(t,e={}){return $r(t,"GET","/v1/projects",e)}/**
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
 */const cN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,hN=/^https?/;async function dN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await uN(t);for(const n of e)try{if(fN(n))return}catch{}qn(t,"unauthorized-domain")}function fN(t){const e=up(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!hN.test(n))return!1;if(cN.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const pN=new zl(3e4,6e4);function T_(){const t=cr().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function mN(t){return new Promise((e,n)=>{var r,i,s;function o(){T_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{T_(),n(ur(t,"network-request-failed"))},timeout:pN.get()})}if(!((i=(r=cr().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=cr().gapi)===null||s===void 0)&&s.load)o();else{const l=ab("iframefcb");return cr()[l]=()=>{gapi.load?o():n(ur(t,"network-request-failed"))},uT(`${ob()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw sc=null,e})}let sc=null;function gN(t){return sc=sc||mN(t),sc}/**
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
 */const yN=new zl(5e3,15e3),vN="__/auth/iframe",_N="emulator/auth/iframe",wN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},EN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function TN(t){const e=t.config;ae(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?zm(e,_N):`https://${t.config.authDomain}/${vN}`,r={apiKey:e.apiKey,appName:t.name,v:Is},i=EN.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${jl(r).slice(1)}`}async function IN(t){const e=await gN(t),n=cr().gapi;return ae(n,t,"internal-error"),e.open({where:document.body,url:TN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wN,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=ur(t,"network-request-failed"),l=cr().setTimeout(()=>{s(o)},yN.get());function u(){cr().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const SN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},RN=500,AN=600,PN="_blank",xN="http://localhost";class I_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function kN(t,e,n,r=RN,i=AN){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},SN),{width:r.toString(),height:i.toString(),top:s,left:o}),c=bt().toLowerCase();n&&(l=nT(c)?PN:n),tT(c)&&(e=e||xN,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[_,T])=>`${m}${_}=${T},`,"");if(Y2(c)&&l!=="_self")return CN(e||"",l),new I_(null);const f=window.open(e||"",l,d);ae(f,t,"popup-blocked");try{f.focus()}catch{}return new I_(f)}function CN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const bN="__/auth/handler",NN="emulator/auth/handler",DN=encodeURIComponent("fac");async function S_(t,e,n,r,i,s){ae(t.config.authDomain,t,"auth-domain-config-required"),ae(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Is,eventId:i};if(e instanceof hT){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",_C(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries({}))o[d]=f}if(e instanceof Bl){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const u=await t._getAppCheckToken(),c=u?`#${DN}=${encodeURIComponent(u)}`:"";return`${LN(t)}?${jl(l).slice(1)}${c}`}function LN({config:t}){return t.emulator?zm(t,NN):`https://${t.authDomain}/${bN}`}/**
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
 */const Hd="webStorageSupport";class ON{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=_T,this._completeRedirectFn=sN,this._overrideRedirectResult=nN}async _openPopup(e,n,r,i){var s;Vr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await S_(e,n,r,up(),i);return kN(e,o,qm())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await S_(e,n,r,up(),i);return Ub(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Vr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await IN(e),r=new aN(e);return n.register("authEvent",i=>(ae(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Hd,{type:Hd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Hd];o!==void 0&&n(!!o),qn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=dN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return aT()||Bm()||Nh()}}const MN=ON;var R_="@firebase/auth",A_="1.7.6";/**
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
 */class VN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function UN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function FN(t){fs(new Ai("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;ae(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:lT(t)},c=new rb(r,i,s,u);return db(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),fs(new Ai("auth-internal",e=>{const n=Ss(e.getProvider("auth").getImmediate());return(r=>new VN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),lr(R_,A_,UN(t)),lr(R_,A_,"esm2017")}/**
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
 */const jN=5*60,zN=FE("authIdTokenMaxAge")||jN;let P_=null;const $N=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>zN)return;const i=n==null?void 0:n.token;P_!==i&&(P_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function BN(t=Fm()){const e=bh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=hb(t,{popupRedirectResolver:MN,persistence:[Kb,Ob,_T]}),r=FE("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=$N(s.toString());bb(n,o,()=>o(n.currentUser)),Cb(n,l=>o(l))}}const i=ME("auth");return i&&fb(n,`http://${i}`),n}function HN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}ib({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=ur("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",HN().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});FN("Browser");var x_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var is,AT;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,g){function E(){}E.prototype=g.prototype,w.D=g.prototype,w.prototype=new E,w.prototype.constructor=w,w.C=function(R,k,N){for(var P=Array(arguments.length-2),pe=2;pe<arguments.length;pe++)P[pe-2]=arguments[pe];return g.prototype[k].apply(R,P)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,g,E){E||(E=0);var R=Array(16);if(typeof g=="string")for(var k=0;16>k;++k)R[k]=g.charCodeAt(E++)|g.charCodeAt(E++)<<8|g.charCodeAt(E++)<<16|g.charCodeAt(E++)<<24;else for(k=0;16>k;++k)R[k]=g[E++]|g[E++]<<8|g[E++]<<16|g[E++]<<24;g=w.g[0],E=w.g[1],k=w.g[2];var N=w.g[3],P=g+(N^E&(k^N))+R[0]+3614090360&4294967295;g=E+(P<<7&4294967295|P>>>25),P=N+(k^g&(E^k))+R[1]+3905402710&4294967295,N=g+(P<<12&4294967295|P>>>20),P=k+(E^N&(g^E))+R[2]+606105819&4294967295,k=N+(P<<17&4294967295|P>>>15),P=E+(g^k&(N^g))+R[3]+3250441966&4294967295,E=k+(P<<22&4294967295|P>>>10),P=g+(N^E&(k^N))+R[4]+4118548399&4294967295,g=E+(P<<7&4294967295|P>>>25),P=N+(k^g&(E^k))+R[5]+1200080426&4294967295,N=g+(P<<12&4294967295|P>>>20),P=k+(E^N&(g^E))+R[6]+2821735955&4294967295,k=N+(P<<17&4294967295|P>>>15),P=E+(g^k&(N^g))+R[7]+4249261313&4294967295,E=k+(P<<22&4294967295|P>>>10),P=g+(N^E&(k^N))+R[8]+1770035416&4294967295,g=E+(P<<7&4294967295|P>>>25),P=N+(k^g&(E^k))+R[9]+2336552879&4294967295,N=g+(P<<12&4294967295|P>>>20),P=k+(E^N&(g^E))+R[10]+4294925233&4294967295,k=N+(P<<17&4294967295|P>>>15),P=E+(g^k&(N^g))+R[11]+2304563134&4294967295,E=k+(P<<22&4294967295|P>>>10),P=g+(N^E&(k^N))+R[12]+1804603682&4294967295,g=E+(P<<7&4294967295|P>>>25),P=N+(k^g&(E^k))+R[13]+4254626195&4294967295,N=g+(P<<12&4294967295|P>>>20),P=k+(E^N&(g^E))+R[14]+2792965006&4294967295,k=N+(P<<17&4294967295|P>>>15),P=E+(g^k&(N^g))+R[15]+1236535329&4294967295,E=k+(P<<22&4294967295|P>>>10),P=g+(k^N&(E^k))+R[1]+4129170786&4294967295,g=E+(P<<5&4294967295|P>>>27),P=N+(E^k&(g^E))+R[6]+3225465664&4294967295,N=g+(P<<9&4294967295|P>>>23),P=k+(g^E&(N^g))+R[11]+643717713&4294967295,k=N+(P<<14&4294967295|P>>>18),P=E+(N^g&(k^N))+R[0]+3921069994&4294967295,E=k+(P<<20&4294967295|P>>>12),P=g+(k^N&(E^k))+R[5]+3593408605&4294967295,g=E+(P<<5&4294967295|P>>>27),P=N+(E^k&(g^E))+R[10]+38016083&4294967295,N=g+(P<<9&4294967295|P>>>23),P=k+(g^E&(N^g))+R[15]+3634488961&4294967295,k=N+(P<<14&4294967295|P>>>18),P=E+(N^g&(k^N))+R[4]+3889429448&4294967295,E=k+(P<<20&4294967295|P>>>12),P=g+(k^N&(E^k))+R[9]+568446438&4294967295,g=E+(P<<5&4294967295|P>>>27),P=N+(E^k&(g^E))+R[14]+3275163606&4294967295,N=g+(P<<9&4294967295|P>>>23),P=k+(g^E&(N^g))+R[3]+4107603335&4294967295,k=N+(P<<14&4294967295|P>>>18),P=E+(N^g&(k^N))+R[8]+1163531501&4294967295,E=k+(P<<20&4294967295|P>>>12),P=g+(k^N&(E^k))+R[13]+2850285829&4294967295,g=E+(P<<5&4294967295|P>>>27),P=N+(E^k&(g^E))+R[2]+4243563512&4294967295,N=g+(P<<9&4294967295|P>>>23),P=k+(g^E&(N^g))+R[7]+1735328473&4294967295,k=N+(P<<14&4294967295|P>>>18),P=E+(N^g&(k^N))+R[12]+2368359562&4294967295,E=k+(P<<20&4294967295|P>>>12),P=g+(E^k^N)+R[5]+4294588738&4294967295,g=E+(P<<4&4294967295|P>>>28),P=N+(g^E^k)+R[8]+2272392833&4294967295,N=g+(P<<11&4294967295|P>>>21),P=k+(N^g^E)+R[11]+1839030562&4294967295,k=N+(P<<16&4294967295|P>>>16),P=E+(k^N^g)+R[14]+4259657740&4294967295,E=k+(P<<23&4294967295|P>>>9),P=g+(E^k^N)+R[1]+2763975236&4294967295,g=E+(P<<4&4294967295|P>>>28),P=N+(g^E^k)+R[4]+1272893353&4294967295,N=g+(P<<11&4294967295|P>>>21),P=k+(N^g^E)+R[7]+4139469664&4294967295,k=N+(P<<16&4294967295|P>>>16),P=E+(k^N^g)+R[10]+3200236656&4294967295,E=k+(P<<23&4294967295|P>>>9),P=g+(E^k^N)+R[13]+681279174&4294967295,g=E+(P<<4&4294967295|P>>>28),P=N+(g^E^k)+R[0]+3936430074&4294967295,N=g+(P<<11&4294967295|P>>>21),P=k+(N^g^E)+R[3]+3572445317&4294967295,k=N+(P<<16&4294967295|P>>>16),P=E+(k^N^g)+R[6]+76029189&4294967295,E=k+(P<<23&4294967295|P>>>9),P=g+(E^k^N)+R[9]+3654602809&4294967295,g=E+(P<<4&4294967295|P>>>28),P=N+(g^E^k)+R[12]+3873151461&4294967295,N=g+(P<<11&4294967295|P>>>21),P=k+(N^g^E)+R[15]+530742520&4294967295,k=N+(P<<16&4294967295|P>>>16),P=E+(k^N^g)+R[2]+3299628645&4294967295,E=k+(P<<23&4294967295|P>>>9),P=g+(k^(E|~N))+R[0]+4096336452&4294967295,g=E+(P<<6&4294967295|P>>>26),P=N+(E^(g|~k))+R[7]+1126891415&4294967295,N=g+(P<<10&4294967295|P>>>22),P=k+(g^(N|~E))+R[14]+2878612391&4294967295,k=N+(P<<15&4294967295|P>>>17),P=E+(N^(k|~g))+R[5]+4237533241&4294967295,E=k+(P<<21&4294967295|P>>>11),P=g+(k^(E|~N))+R[12]+1700485571&4294967295,g=E+(P<<6&4294967295|P>>>26),P=N+(E^(g|~k))+R[3]+2399980690&4294967295,N=g+(P<<10&4294967295|P>>>22),P=k+(g^(N|~E))+R[10]+4293915773&4294967295,k=N+(P<<15&4294967295|P>>>17),P=E+(N^(k|~g))+R[1]+2240044497&4294967295,E=k+(P<<21&4294967295|P>>>11),P=g+(k^(E|~N))+R[8]+1873313359&4294967295,g=E+(P<<6&4294967295|P>>>26),P=N+(E^(g|~k))+R[15]+4264355552&4294967295,N=g+(P<<10&4294967295|P>>>22),P=k+(g^(N|~E))+R[6]+2734768916&4294967295,k=N+(P<<15&4294967295|P>>>17),P=E+(N^(k|~g))+R[13]+1309151649&4294967295,E=k+(P<<21&4294967295|P>>>11),P=g+(k^(E|~N))+R[4]+4149444226&4294967295,g=E+(P<<6&4294967295|P>>>26),P=N+(E^(g|~k))+R[11]+3174756917&4294967295,N=g+(P<<10&4294967295|P>>>22),P=k+(g^(N|~E))+R[2]+718787259&4294967295,k=N+(P<<15&4294967295|P>>>17),P=E+(N^(k|~g))+R[9]+3951481745&4294967295,w.g[0]=w.g[0]+g&4294967295,w.g[1]=w.g[1]+(k+(P<<21&4294967295|P>>>11))&4294967295,w.g[2]=w.g[2]+k&4294967295,w.g[3]=w.g[3]+N&4294967295}r.prototype.u=function(w,g){g===void 0&&(g=w.length);for(var E=g-this.blockSize,R=this.B,k=this.h,N=0;N<g;){if(k==0)for(;N<=E;)i(this,w,N),N+=this.blockSize;if(typeof w=="string"){for(;N<g;)if(R[k++]=w.charCodeAt(N++),k==this.blockSize){i(this,R),k=0;break}}else for(;N<g;)if(R[k++]=w[N++],k==this.blockSize){i(this,R),k=0;break}}this.h=k,this.o+=g},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var g=1;g<w.length-8;++g)w[g]=0;var E=8*this.o;for(g=w.length-8;g<w.length;++g)w[g]=E&255,E/=256;for(this.u(w),w=Array(16),g=E=0;4>g;++g)for(var R=0;32>R;R+=8)w[E++]=this.g[g]>>>R&255;return w};function s(w,g){var E=l;return Object.prototype.hasOwnProperty.call(E,w)?E[w]:E[w]=g(w)}function o(w,g){this.h=g;for(var E=[],R=!0,k=w.length-1;0<=k;k--){var N=w[k]|0;R&&N==g||(E[k]=N,R=!1)}this.g=E}var l={};function u(w){return-128<=w&&128>w?s(w,function(g){return new o([g|0],0>g?-1:0)}):new o([w|0],0>w?-1:0)}function c(w){if(isNaN(w)||!isFinite(w))return f;if(0>w)return b(c(-w));for(var g=[],E=1,R=0;w>=E;R++)g[R]=w/E|0,E*=4294967296;return new o(g,0)}function d(w,g){if(w.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(w.charAt(0)=="-")return b(d(w.substring(1),g));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=c(Math.pow(g,8)),R=f,k=0;k<w.length;k+=8){var N=Math.min(8,w.length-k),P=parseInt(w.substring(k,k+N),g);8>N?(N=c(Math.pow(g,N)),R=R.j(N).add(c(P))):(R=R.j(E),R=R.add(c(P)))}return R}var f=u(0),m=u(1),_=u(16777216);t=o.prototype,t.m=function(){if(A(this))return-b(this).m();for(var w=0,g=1,E=0;E<this.g.length;E++){var R=this.i(E);w+=(0<=R?R:4294967296+R)*g,g*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(T(this))return"0";if(A(this))return"-"+b(this).toString(w);for(var g=c(Math.pow(w,6)),E=this,R="";;){var k=L(E,g).g;E=I(E,k.j(g));var N=((0<E.g.length?E.g[0]:E.h)>>>0).toString(w);if(E=k,T(E))return N+R;for(;6>N.length;)N="0"+N;R=N+R}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function T(w){if(w.h!=0)return!1;for(var g=0;g<w.g.length;g++)if(w.g[g]!=0)return!1;return!0}function A(w){return w.h==-1}t.l=function(w){return w=I(this,w),A(w)?-1:T(w)?0:1};function b(w){for(var g=w.g.length,E=[],R=0;R<g;R++)E[R]=~w.g[R];return new o(E,~w.h).add(m)}t.abs=function(){return A(this)?b(this):this},t.add=function(w){for(var g=Math.max(this.g.length,w.g.length),E=[],R=0,k=0;k<=g;k++){var N=R+(this.i(k)&65535)+(w.i(k)&65535),P=(N>>>16)+(this.i(k)>>>16)+(w.i(k)>>>16);R=P>>>16,N&=65535,P&=65535,E[k]=P<<16|N}return new o(E,E[E.length-1]&-2147483648?-1:0)};function I(w,g){return w.add(b(g))}t.j=function(w){if(T(this)||T(w))return f;if(A(this))return A(w)?b(this).j(b(w)):b(b(this).j(w));if(A(w))return b(this.j(b(w)));if(0>this.l(_)&&0>w.l(_))return c(this.m()*w.m());for(var g=this.g.length+w.g.length,E=[],R=0;R<2*g;R++)E[R]=0;for(R=0;R<this.g.length;R++)for(var k=0;k<w.g.length;k++){var N=this.i(R)>>>16,P=this.i(R)&65535,pe=w.i(k)>>>16,at=w.i(k)&65535;E[2*R+2*k]+=P*at,v(E,2*R+2*k),E[2*R+2*k+1]+=N*at,v(E,2*R+2*k+1),E[2*R+2*k+1]+=P*pe,v(E,2*R+2*k+1),E[2*R+2*k+2]+=N*pe,v(E,2*R+2*k+2)}for(R=0;R<g;R++)E[R]=E[2*R+1]<<16|E[2*R];for(R=g;R<2*g;R++)E[R]=0;return new o(E,0)};function v(w,g){for(;(w[g]&65535)!=w[g];)w[g+1]+=w[g]>>>16,w[g]&=65535,g++}function S(w,g){this.g=w,this.h=g}function L(w,g){if(T(g))throw Error("division by zero");if(T(w))return new S(f,f);if(A(w))return g=L(b(w),g),new S(b(g.g),b(g.h));if(A(g))return g=L(w,b(g)),new S(b(g.g),g.h);if(30<w.g.length){if(A(w)||A(g))throw Error("slowDivide_ only works with positive integers.");for(var E=m,R=g;0>=R.l(w);)E=z(E),R=z(R);var k=x(E,1),N=x(R,1);for(R=x(R,2),E=x(E,2);!T(R);){var P=N.add(R);0>=P.l(w)&&(k=k.add(E),N=P),R=x(R,1),E=x(E,1)}return g=I(w,k.j(g)),new S(k,g)}for(k=f;0<=w.l(g);){for(E=Math.max(1,Math.floor(w.m()/g.m())),R=Math.ceil(Math.log(E)/Math.LN2),R=48>=R?1:Math.pow(2,R-48),N=c(E),P=N.j(g);A(P)||0<P.l(w);)E-=R,N=c(E),P=N.j(g);T(N)&&(N=m),k=k.add(N),w=I(w,P)}return new S(k,w)}t.A=function(w){return L(this,w).h},t.and=function(w){for(var g=Math.max(this.g.length,w.g.length),E=[],R=0;R<g;R++)E[R]=this.i(R)&w.i(R);return new o(E,this.h&w.h)},t.or=function(w){for(var g=Math.max(this.g.length,w.g.length),E=[],R=0;R<g;R++)E[R]=this.i(R)|w.i(R);return new o(E,this.h|w.h)},t.xor=function(w){for(var g=Math.max(this.g.length,w.g.length),E=[],R=0;R<g;R++)E[R]=this.i(R)^w.i(R);return new o(E,this.h^w.h)};function z(w){for(var g=w.g.length+1,E=[],R=0;R<g;R++)E[R]=w.i(R)<<1|w.i(R-1)>>>31;return new o(E,w.h)}function x(w,g){var E=g>>5;g%=32;for(var R=w.g.length-E,k=[],N=0;N<R;N++)k[N]=0<g?w.i(N+E)>>>g|w.i(N+E+1)<<32-g:w.i(N+E);return new o(k,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,AT=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,is=o}).apply(typeof x_<"u"?x_:typeof self<"u"?self:typeof window<"u"?window:{});var Nu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var PT,xT,Oa,kT,oc,fp,CT,bT,NT;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,p){return a==Array.prototype||a==Object.prototype||(a[h]=p.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Nu=="object"&&Nu];for(var h=0;h<a.length;++h){var p=a[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var p=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var O=a[y];if(!(O in p))break e;p=p[O]}a=a[a.length-1],y=p[a],h=h(y),h!=y&&h!=null&&e(p,a,{configurable:!0,writable:!0,value:h})}}function s(a,h){a instanceof String&&(a+="");var p=0,y=!1,O={next:function(){if(!y&&p<a.length){var U=p++;return{value:h(U,a[U]),done:!1}}return y=!0,{done:!0,value:void 0}}};return O[Symbol.iterator]=function(){return O},O}i("Array.prototype.values",function(a){return a||function(){return s(this,function(h,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,p){return a.call.apply(a.bind,arguments)}function f(a,h,p){if(!a)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var O=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(O,y),a.apply(h,O)}}return function(){return a.apply(h,arguments)}}function m(a,h,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:f,m.apply(null,arguments)}function _(a,h){var p=Array.prototype.slice.call(arguments,1);return function(){var y=p.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function T(a,h){function p(){}p.prototype=h.prototype,a.aa=h.prototype,a.prototype=new p,a.prototype.constructor=a,a.Qb=function(y,O,U){for(var G=Array(arguments.length-2),Oe=2;Oe<arguments.length;Oe++)G[Oe-2]=arguments[Oe];return h.prototype[O].apply(y,G)}}function A(a){const h=a.length;if(0<h){const p=Array(h);for(let y=0;y<h;y++)p[y]=a[y];return p}return[]}function b(a,h){for(let p=1;p<arguments.length;p++){const y=arguments[p];if(u(y)){const O=a.length||0,U=y.length||0;a.length=O+U;for(let G=0;G<U;G++)a[O+G]=y[G]}else a.push(y)}}class I{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function v(a){return/^[\s\xa0]*$/.test(a)}function S(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function L(a){return L[" "](a),a}L[" "]=function(){};var z=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function x(a,h,p){for(const y in a)h.call(p,a[y],y,a)}function w(a,h){for(const p in a)h.call(void 0,a[p],p,a)}function g(a){const h={};for(const p in a)h[p]=a[p];return h}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function R(a,h){let p,y;for(let O=1;O<arguments.length;O++){y=arguments[O];for(p in y)a[p]=y[p];for(let U=0;U<E.length;U++)p=E[U],Object.prototype.hasOwnProperty.call(y,p)&&(a[p]=y[p])}}function k(a){var h=1;a=a.split(":");const p=[];for(;0<h&&a.length;)p.push(a.shift()),h--;return a.length&&p.push(a.join(":")),p}function N(a){l.setTimeout(()=>{throw a},0)}function P(){var a=W;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class pe{constructor(){this.h=this.g=null}add(h,p){const y=at.get();y.set(h,p),this.h?this.h.next=y:this.g=y,this.h=y}}var at=new I(()=>new Zt,a=>a.reset());class Zt{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let ye,F=!1,W=new pe,X=()=>{const a=l.Promise.resolve(void 0);ye=()=>{a.then(se)}};var se=()=>{for(var a;a=P();){try{a.h.call(a.g)}catch(p){N(p)}var h=at;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}F=!1};function le(){this.s=this.s,this.C=this.C}le.prototype.s=!1,le.prototype.ma=function(){this.s||(this.s=!0,this.N())},le.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function xe(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}xe.prototype.h=function(){this.defaultPrevented=!0};var We=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};l.addEventListener("test",p,h),l.removeEventListener("test",p,h)}catch{}return a}();function Ze(a,h){if(xe.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var p=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(z){e:{try{L(h.nodeName);var O=!0;break e}catch{}O=!1}O||(h=null)}}else p=="mouseover"?h=a.fromElement:p=="mouseout"&&(h=a.toElement);this.relatedTarget=h,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:qe[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Ze.aa.h.call(this)}}T(Ze,xe);var qe={2:"touch",3:"pen",4:"mouse"};Ze.prototype.h=function(){Ze.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Dt="closure_listenable_"+(1e6*Math.random()|0),Cn=0;function bn(a,h,p,y,O){this.listener=a,this.proxy=null,this.src=h,this.type=p,this.capture=!!y,this.ha=O,this.key=++Cn,this.da=this.fa=!1}function Gn(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Nn(a){this.src=a,this.g={},this.h=0}Nn.prototype.add=function(a,h,p,y,O){var U=a.toString();a=this.g[U],a||(a=this.g[U]=[],this.h++);var G=Qn(a,h,y,O);return-1<G?(h=a[G],p||(h.fa=!1)):(h=new bn(h,this.src,U,!!y,O),h.fa=p,a.push(h)),h};function Ne(a,h){var p=h.type;if(p in a.g){var y=a.g[p],O=Array.prototype.indexOf.call(y,h,void 0),U;(U=0<=O)&&Array.prototype.splice.call(y,O,1),U&&(Gn(h),a.g[p].length==0&&(delete a.g[p],a.h--))}}function Qn(a,h,p,y){for(var O=0;O<a.length;++O){var U=a[O];if(!U.da&&U.listener==h&&U.capture==!!p&&U.ha==y)return O}return-1}var xs="closure_lm_"+(1e6*Math.random()|0),Yo={};function Yn(a,h,p,y,O){if(Array.isArray(h)){for(var U=0;U<h.length;U++)Yn(a,h[U],p,y,O);return null}return p=Br(p),a&&a[Dt]?a.K(h,p,c(y)?!!y.capture:!!y,O):Yh(a,h,p,!1,y,O)}function Yh(a,h,p,y,O,U){if(!h)throw Error("Invalid event type");var G=c(O)?!!O.capture:!!O,Oe=Zo(a);if(Oe||(a[xs]=Oe=new Nn(a)),p=Oe.add(h,p,y,G,U),p.proxy)return p;if(y=Xh(),p.proxy=y,y.src=a,y.listener=p,a.addEventListener)We||(O=G),O===void 0&&(O=!1),a.addEventListener(h.toString(),y,O);else if(a.attachEvent)a.attachEvent(Jl(h.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return p}function Xh(){function a(p){return h.call(a.src,a.listener,p)}const h=Jh;return a}function Xo(a,h,p,y,O){if(Array.isArray(h))for(var U=0;U<h.length;U++)Xo(a,h[U],p,y,O);else y=c(y)?!!y.capture:!!y,p=Br(p),a&&a[Dt]?(a=a.i,h=String(h).toString(),h in a.g&&(U=a.g[h],p=Qn(U,p,y,O),-1<p&&(Gn(U[p]),Array.prototype.splice.call(U,p,1),U.length==0&&(delete a.g[h],a.h--)))):a&&(a=Zo(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Qn(h,p,y,O)),(p=-1<a?h[a]:null)&&Jo(p))}function Jo(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[Dt])Ne(h.i,a);else{var p=a.type,y=a.proxy;h.removeEventListener?h.removeEventListener(p,y,a.capture):h.detachEvent?h.detachEvent(Jl(p),y):h.addListener&&h.removeListener&&h.removeListener(y),(p=Zo(h))?(Ne(p,a),p.h==0&&(p.src=null,h[xs]=null)):Gn(a)}}}function Jl(a){return a in Yo?Yo[a]:Yo[a]="on"+a}function Jh(a,h){if(a.da)a=!0;else{h=new Ze(h,this);var p=a.listener,y=a.ha||a.src;a.fa&&Jo(a),a=p.call(y,h)}return a}function Zo(a){return a=a[xs],a instanceof Nn?a:null}var gr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Br(a){return typeof a=="function"?a:(a[gr]||(a[gr]=function(h){return a.handleEvent(h)}),a[gr])}function pt(){le.call(this),this.i=new Nn(this),this.M=this,this.F=null}T(pt,le),pt.prototype[Dt]=!0,pt.prototype.removeEventListener=function(a,h,p,y){Xo(this,a,h,p,y)};function mt(a,h){var p,y=a.F;if(y)for(p=[];y;y=y.F)p.push(y);if(a=a.M,y=h.type||h,typeof h=="string")h=new xe(h,a);else if(h instanceof xe)h.target=h.target||a;else{var O=h;h=new xe(y,a),R(h,O)}if(O=!0,p)for(var U=p.length-1;0<=U;U--){var G=h.g=p[U];O=an(G,y,!0,h)&&O}if(G=h.g=a,O=an(G,y,!0,h)&&O,O=an(G,y,!1,h)&&O,p)for(U=0;U<p.length;U++)G=h.g=p[U],O=an(G,y,!1,h)&&O}pt.prototype.N=function(){if(pt.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var p=a.g[h],y=0;y<p.length;y++)Gn(p[y]);delete a.g[h],a.h--}}this.F=null},pt.prototype.K=function(a,h,p,y){return this.i.add(String(a),h,!1,p,y)},pt.prototype.L=function(a,h,p,y){return this.i.add(String(a),h,!0,p,y)};function an(a,h,p,y){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var O=!0,U=0;U<h.length;++U){var G=h[U];if(G&&!G.da&&G.capture==p){var Oe=G.listener,St=G.ha||G.src;G.fa&&Ne(a.i,G),O=Oe.call(St,y)!==!1&&O}}return O&&!y.defaultPrevented}function wn(a,h,p){if(typeof a=="function")p&&(a=m(a,p));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function ea(a){a.g=wn(()=>{a.g=null,a.i&&(a.i=!1,ea(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class ks extends le{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:ea(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Vi(a){le.call(this),this.h=a,this.g={}}T(Vi,le);var Dn=[];function ta(a){x(a.g,function(h,p){this.g.hasOwnProperty(p)&&Jo(h)},a),a.g={}}Vi.prototype.N=function(){Vi.aa.N.call(this),ta(this)},Vi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Cs=l.JSON.stringify,Zl=l.JSON.parse,Zh=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function bs(){}bs.prototype.h=null;function Ui(a){return a.h||(a.h=a.i())}function na(){}var yr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Hr(){xe.call(this,"d")}T(Hr,xe);function Fi(){xe.call(this,"c")}T(Fi,xe);var vr={},ra=null;function Ns(){return ra=ra||new pt}vr.La="serverreachability";function ia(a){xe.call(this,vr.La,a)}T(ia,xe);function Xn(a){const h=Ns();mt(h,new ia(h))}vr.STAT_EVENT="statevent";function ji(a,h){xe.call(this,vr.STAT_EVENT,a),this.stat=h}T(ji,xe);function It(a){const h=Ns();mt(h,new ji(h,a))}vr.Ma="timingevent";function eu(a,h){xe.call(this,vr.Ma,a),this.size=h}T(eu,xe);function C(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function D(){this.g=!0}D.prototype.xa=function(){this.g=!1};function M(a,h,p,y,O,U){a.info(function(){if(a.g)if(U)for(var G="",Oe=U.split("&"),St=0;St<Oe.length;St++){var Ae=Oe[St].split("=");if(1<Ae.length){var Mt=Ae[0];Ae=Ae[1];var Vt=Mt.split("_");G=2<=Vt.length&&Vt[1]=="type"?G+(Mt+"="+Ae+"&"):G+(Mt+"=redacted&")}}else G=null;else G=U;return"XMLHTTP REQ ("+y+") [attempt "+O+"]: "+h+`
`+p+`
`+G})}function $(a,h,p,y,O,U,G){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+O+"]: "+h+`
`+p+`
`+U+" "+G})}function Q(a,h,p,y){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+oe(a,p)+(y?" "+y:"")})}function ee(a,h){a.info(function(){return"TIMEOUT: "+h})}D.prototype.info=function(){};function oe(a,h){if(!a.g)return h;if(!h)return null;try{var p=JSON.parse(h);if(p){for(a=0;a<p.length;a++)if(Array.isArray(p[a])){var y=p[a];if(!(2>y.length)){var O=y[1];if(Array.isArray(O)&&!(1>O.length)){var U=O[0];if(U!="noop"&&U!="stop"&&U!="close")for(var G=1;G<O.length;G++)O[G]=""}}}}return Cs(p)}catch{return h}}var K={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ce={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},te;function ne(){}T(ne,bs),ne.prototype.g=function(){return new XMLHttpRequest},ne.prototype.i=function(){return{}},te=new ne;function ve(a,h,p,y){this.j=a,this.i=h,this.l=p,this.R=y||1,this.U=new Vi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Re}function Re(){this.i=null,this.g="",this.h=!1}var ke={},Te={};function st(a,h,p){a.L=1,a.v=iu(wr(h)),a.m=p,a.P=!0,Ke(a,null)}function Ke(a,h){a.F=Date.now(),Ln(a),a.A=wr(a.v);var p=a.A,y=a.R;Array.isArray(y)||(y=[String(y)]),Fg(p.i,"t",y),a.C=0,p=a.j.J,a.h=new Re,a.g=ry(a.j,p?h:null,!a.m),0<a.O&&(a.M=new ks(m(a.Y,a,a.g),a.O)),h=a.U,p=a.g,y=a.ca;var O="readystatechange";Array.isArray(O)||(O&&(Dn[0]=O.toString()),O=Dn);for(var U=0;U<O.length;U++){var G=Yn(p,O[U],y||h.handleEvent,!1,h.h||h);if(!G)break;h.g[G.key]=G}h=a.H?g(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Xn(),M(a.i,a.u,a.A,a.l,a.R,a.m)}ve.prototype.ca=function(a){a=a.target;const h=this.M;h&&Er(a)==3?h.j():this.Y(a)},ve.prototype.Y=function(a){try{if(a==this.g)e:{const Vt=Er(this.g);var h=this.g.Ba();const Ms=this.g.Z();if(!(3>Vt)&&(Vt!=3||this.g&&(this.h.h||this.g.oa()||qg(this.g)))){this.J||Vt!=4||h==7||(h==8||0>=Ms?Xn(3):Xn(2)),Zn(this);var p=this.g.Z();this.X=p;t:if(Wr(this)){var y=qg(this.g);a="";var O=y.length,U=Er(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){En(this),Lt(this);var G="";break t}this.h.i=new l.TextDecoder}for(h=0;h<O;h++)this.h.h=!0,a+=this.h.i.decode(y[h],{stream:!(U&&h==O-1)});y.length=0,this.h.g+=a,this.C=0,G=this.h.g}else G=this.g.oa();if(this.o=p==200,$(this.i,this.u,this.A,this.l,this.R,Vt,p),this.o){if(this.T&&!this.K){t:{if(this.g){var Oe,St=this.g;if((Oe=St.g?St.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(Oe)){var Ae=Oe;break t}}Ae=null}if(p=Ae)Q(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,qr(this,p);else{this.o=!1,this.s=3,It(12),En(this),Lt(this);break e}}if(this.P){p=!0;let On;for(;!this.J&&this.C<G.length;)if(On=Jn(this,G),On==Te){Vt==4&&(this.s=4,It(14),p=!1),Q(this.i,this.l,null,"[Incomplete Response]");break}else if(On==ke){this.s=4,It(15),Q(this.i,this.l,G,"[Invalid Chunk]"),p=!1;break}else Q(this.i,this.l,On,null),qr(this,On);if(Wr(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Vt!=4||G.length!=0||this.h.h||(this.s=1,It(16),p=!1),this.o=this.o&&p,!p)Q(this.i,this.l,G,"[Invalid Chunked Response]"),En(this),Lt(this);else if(0<G.length&&!this.W){this.W=!0;var Mt=this.j;Mt.g==this&&Mt.ba&&!Mt.M&&(Mt.j.info("Great, no buffering proxy detected. Bytes received: "+G.length),rd(Mt),Mt.M=!0,It(11))}}else Q(this.i,this.l,G,null),qr(this,G);Vt==4&&En(this),this.o&&!this.J&&(Vt==4?Zg(this.j,this):(this.o=!1,Ln(this)))}else FS(this.g),p==400&&0<G.indexOf("Unknown SID")?(this.s=3,It(12)):(this.s=0,It(13)),En(this),Lt(this)}}}catch{}finally{}};function Wr(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Jn(a,h){var p=a.C,y=h.indexOf(`
`,p);return y==-1?Te:(p=Number(h.substring(p,y)),isNaN(p)?ke:(y+=1,y+p>h.length?Te:(h=h.slice(y,y+p),a.C=y+p,h)))}ve.prototype.cancel=function(){this.J=!0,En(this)};function Ln(a){a.S=Date.now()+a.I,_r(a,a.I)}function _r(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=C(m(a.ba,a),h)}function Zn(a){a.B&&(l.clearTimeout(a.B),a.B=null)}ve.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(ee(this.i,this.A),this.L!=2&&(Xn(),It(17)),En(this),this.s=2,Lt(this)):_r(this,this.S-a)};function Lt(a){a.j.G==0||a.J||Zg(a.j,a)}function En(a){Zn(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,ta(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function qr(a,h){try{var p=a.j;if(p.G!=0&&(p.g==a||De(p.h,a))){if(!a.K&&De(p.h,a)&&p.G==3){try{var y=p.Da.g.parse(h)}catch{y=null}if(Array.isArray(y)&&y.length==3){var O=y;if(O[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<a.F)uu(p),au(p);else break e;nd(p),It(18)}}else p.za=O[1],0<p.za-p.T&&37500>O[2]&&p.F&&p.v==0&&!p.C&&(p.C=C(m(p.Za,p),6e3));if(1>=Ot(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else $i(p,11)}else if((a.K||p.g==a)&&uu(p),!v(h))for(O=p.Da.g.parse(h),h=0;h<O.length;h++){let Ae=O[h];if(p.T=Ae[0],Ae=Ae[1],p.G==2)if(Ae[0]=="c"){p.K=Ae[1],p.ia=Ae[2];const Mt=Ae[3];Mt!=null&&(p.la=Mt,p.j.info("VER="+p.la));const Vt=Ae[4];Vt!=null&&(p.Aa=Vt,p.j.info("SVER="+p.Aa));const Ms=Ae[5];Ms!=null&&typeof Ms=="number"&&0<Ms&&(y=1.5*Ms,p.L=y,p.j.info("backChannelRequestTimeoutMs_="+y)),y=p;const On=a.g;if(On){const hu=On.g?On.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(hu){var U=y.h;U.g||hu.indexOf("spdy")==-1&&hu.indexOf("quic")==-1&&hu.indexOf("h2")==-1||(U.j=U.l,U.g=new Set,U.h&&(ln(U,U.h),U.h=null))}if(y.D){const id=On.g?On.g.getResponseHeader("X-HTTP-Session-Id"):null;id&&(y.ya=id,Fe(y.I,y.D,id))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-a.F,p.j.info("Handshake RTT: "+p.R+"ms")),y=p;var G=a;if(y.qa=ny(y,y.J?y.ia:null,y.W),G.K){sa(y.h,G);var Oe=G,St=y.L;St&&(Oe.I=St),Oe.B&&(Zn(Oe),Ln(Oe)),y.g=G}else Xg(y);0<p.i.length&&lu(p)}else Ae[0]!="stop"&&Ae[0]!="close"||$i(p,7);else p.G==3&&(Ae[0]=="stop"||Ae[0]=="close"?Ae[0]=="stop"?$i(p,7):td(p):Ae[0]!="noop"&&p.l&&p.l.ta(Ae),p.v=0)}}Xn(4)}catch{}}var Ds=class{constructor(a,h){this.g=a,this.map=h}};function fe(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ue(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Ot(a){return a.h?1:a.g?a.g.size:0}function De(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function ln(a,h){a.g?a.g.add(h):a.h=h}function sa(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}fe.prototype.cancel=function(){if(this.i=tu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function tu(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const p of a.g.values())h=h.concat(p.D);return h}return A(a.i)}function SS(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],p=a.length,y=0;y<p;y++)h.push(a[y]);return h}h=[],p=0;for(y in a)h[p++]=a[y];return h}function RS(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var p=0;p<a;p++)h.push(p);return h}h=[],p=0;for(const y in a)h[p++]=y;return h}}}function Dg(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var p=RS(a),y=SS(a),O=y.length,U=0;U<O;U++)h.call(void 0,y[U],p&&p[U],a)}var Lg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function AS(a,h){if(a){a=a.split("&");for(var p=0;p<a.length;p++){var y=a[p].indexOf("="),O=null;if(0<=y){var U=a[p].substring(0,y);O=a[p].substring(y+1)}else U=a[p];h(U,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function zi(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof zi){this.h=a.h,nu(this,a.j),this.o=a.o,this.g=a.g,ru(this,a.s),this.l=a.l;var h=a.i,p=new la;p.i=h.i,h.g&&(p.g=new Map(h.g),p.h=h.h),Og(this,p),this.m=a.m}else a&&(h=String(a).match(Lg))?(this.h=!1,nu(this,h[1]||"",!0),this.o=oa(h[2]||""),this.g=oa(h[3]||"",!0),ru(this,h[4]),this.l=oa(h[5]||"",!0),Og(this,h[6]||"",!0),this.m=oa(h[7]||"")):(this.h=!1,this.i=new la(null,this.h))}zi.prototype.toString=function(){var a=[],h=this.j;h&&a.push(aa(h,Mg,!0),":");var p=this.g;return(p||h=="file")&&(a.push("//"),(h=this.o)&&a.push(aa(h,Mg,!0),"@"),a.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&a.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(aa(p,p.charAt(0)=="/"?kS:xS,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",aa(p,bS)),a.join("")};function wr(a){return new zi(a)}function nu(a,h,p){a.j=p?oa(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function ru(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Og(a,h,p){h instanceof la?(a.i=h,NS(a.i,a.h)):(p||(h=aa(h,CS)),a.i=new la(h,a.h))}function Fe(a,h,p){a.i.set(h,p)}function iu(a){return Fe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function oa(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function aa(a,h,p){return typeof a=="string"?(a=encodeURI(a).replace(h,PS),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function PS(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Mg=/[#\/\?@]/g,xS=/[#\?:]/g,kS=/[#\?]/g,CS=/[#\?@]/g,bS=/#/g;function la(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Kr(a){a.g||(a.g=new Map,a.h=0,a.i&&AS(a.i,function(h,p){a.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=la.prototype,t.add=function(a,h){Kr(this),this.i=null,a=Ls(this,a);var p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(h),this.h+=1,this};function Vg(a,h){Kr(a),h=Ls(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Ug(a,h){return Kr(a),h=Ls(a,h),a.g.has(h)}t.forEach=function(a,h){Kr(this),this.g.forEach(function(p,y){p.forEach(function(O){a.call(h,O,y,this)},this)},this)},t.na=function(){Kr(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),p=[];for(let y=0;y<h.length;y++){const O=a[y];for(let U=0;U<O.length;U++)p.push(h[y])}return p},t.V=function(a){Kr(this);let h=[];if(typeof a=="string")Ug(this,a)&&(h=h.concat(this.g.get(Ls(this,a))));else{a=Array.from(this.g.values());for(let p=0;p<a.length;p++)h=h.concat(a[p])}return h},t.set=function(a,h){return Kr(this),this.i=null,a=Ls(this,a),Ug(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Fg(a,h,p){Vg(a,h),0<p.length&&(a.i=null,a.g.set(Ls(a,h),A(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var p=0;p<h.length;p++){var y=h[p];const U=encodeURIComponent(String(y)),G=this.V(y);for(y=0;y<G.length;y++){var O=U;G[y]!==""&&(O+="="+encodeURIComponent(String(G[y]))),a.push(O)}}return this.i=a.join("&")};function Ls(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function NS(a,h){h&&!a.j&&(Kr(a),a.i=null,a.g.forEach(function(p,y){var O=y.toLowerCase();y!=O&&(Vg(this,y),Fg(this,O,p))},a)),a.j=h}function DS(a,h){const p=new D;if(l.Image){const y=new Image;y.onload=_(Gr,p,"TestLoadImage: loaded",!0,h,y),y.onerror=_(Gr,p,"TestLoadImage: error",!1,h,y),y.onabort=_(Gr,p,"TestLoadImage: abort",!1,h,y),y.ontimeout=_(Gr,p,"TestLoadImage: timeout",!1,h,y),l.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else h(!1)}function LS(a,h){const p=new D,y=new AbortController,O=setTimeout(()=>{y.abort(),Gr(p,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:y.signal}).then(U=>{clearTimeout(O),U.ok?Gr(p,"TestPingServer: ok",!0,h):Gr(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(O),Gr(p,"TestPingServer: error",!1,h)})}function Gr(a,h,p,y,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),y(p)}catch{}}function OS(){this.g=new Zh}function MS(a,h,p){const y=p||"";try{Dg(a,function(O,U){let G=O;c(O)&&(G=Cs(O)),h.push(y+U+"="+encodeURIComponent(G))})}catch(O){throw h.push(y+"type="+encodeURIComponent("_badmap")),O}}function ua(a){this.l=a.Ub||null,this.j=a.eb||!1}T(ua,bs),ua.prototype.g=function(){return new su(this.l,this.j)},ua.prototype.i=function(a){return function(){return a}}({});function su(a,h){pt.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}T(su,pt),t=su.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,ha(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ca(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ha(this)),this.g&&(this.readyState=3,ha(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;jg(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function jg(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?ca(this):ha(this),this.readyState==3&&jg(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,ca(this))},t.Qa=function(a){this.g&&(this.response=a,ca(this))},t.ga=function(){this.g&&ca(this)};function ca(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ha(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=h.next();return a.join(`\r
`)};function ha(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(su.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function zg(a){let h="";return x(a,function(p,y){h+=y,h+=":",h+=p,h+=`\r
`}),h}function ed(a,h,p){e:{for(y in p){var y=!1;break e}y=!0}y||(p=zg(p),typeof a=="string"?p!=null&&encodeURIComponent(String(p)):Fe(a,h,p))}function et(a){pt.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}T(et,pt);var VS=/^https?$/i,US=["POST","PUT"];t=et.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,p,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():te.g(),this.v=this.o?Ui(this.o):Ui(te),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(U){$g(this,U);return}if(a=p||"",p=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var O in y)p.set(O,y[O]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const U of y.keys())p.set(U,y.get(U));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(p.keys()).find(U=>U.toLowerCase()=="content-type"),O=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(US,h,void 0))||y||O||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[U,G]of p)this.g.setRequestHeader(U,G);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Wg(this),this.u=!0,this.g.send(a),this.u=!1}catch(U){$g(this,U)}};function $g(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Bg(a),ou(a)}function Bg(a){a.A||(a.A=!0,mt(a,"complete"),mt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,mt(this,"complete"),mt(this,"abort"),ou(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ou(this,!0)),et.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Hg(this):this.bb())},t.bb=function(){Hg(this)};function Hg(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Er(a)!=4||a.Z()!=2)){if(a.u&&Er(a)==4)wn(a.Ea,0,a);else if(mt(a,"readystatechange"),Er(a)==4){a.h=!1;try{const G=a.Z();e:switch(G){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var y;if(y=G===0){var O=String(a.D).match(Lg)[1]||null;!O&&l.self&&l.self.location&&(O=l.self.location.protocol.slice(0,-1)),y=!VS.test(O?O.toLowerCase():"")}p=y}if(p)mt(a,"complete"),mt(a,"success");else{a.m=6;try{var U=2<Er(a)?a.g.statusText:""}catch{U=""}a.l=U+" ["+a.Z()+"]",Bg(a)}}finally{ou(a)}}}}function ou(a,h){if(a.g){Wg(a);const p=a.g,y=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||mt(a,"ready");try{p.onreadystatechange=y}catch{}}}function Wg(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Er(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Er(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Zl(h)}};function qg(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function FS(a){const h={};a=(a.g&&2<=Er(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(v(a[y]))continue;var p=k(a[y]);const O=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const U=h[O]||[];h[O]=U,U.push(p)}w(h,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function da(a,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||h}function Kg(a){this.Aa=0,this.i=[],this.j=new D,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=da("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=da("baseRetryDelayMs",5e3,a),this.cb=da("retryDelaySeedMs",1e4,a),this.Wa=da("forwardChannelMaxRetries",2,a),this.wa=da("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new fe(a&&a.concurrentRequestLimit),this.Da=new OS,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Kg.prototype,t.la=8,t.G=1,t.connect=function(a,h,p,y){It(0),this.W=a,this.H=h||{},p&&y!==void 0&&(this.H.OSID=p,this.H.OAID=y),this.F=this.X,this.I=ny(this,null,this.W),lu(this)};function td(a){if(Gg(a),a.G==3){var h=a.U++,p=wr(a.I);if(Fe(p,"SID",a.K),Fe(p,"RID",h),Fe(p,"TYPE","terminate"),fa(a,p),h=new ve(a,a.j,h),h.L=2,h.v=iu(wr(p)),p=!1,l.navigator&&l.navigator.sendBeacon)try{p=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!p&&l.Image&&(new Image().src=h.v,p=!0),p||(h.g=ry(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Ln(h)}ty(a)}function au(a){a.g&&(rd(a),a.g.cancel(),a.g=null)}function Gg(a){au(a),a.u&&(l.clearTimeout(a.u),a.u=null),uu(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function lu(a){if(!Ue(a.h)&&!a.s){a.s=!0;var h=a.Ga;ye||X(),F||(ye(),F=!0),W.add(h,a),a.B=0}}function jS(a,h){return Ot(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=C(m(a.Ga,a,h),ey(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const O=new ve(this,this.j,a);let U=this.o;if(this.S&&(U?(U=g(U),R(U,this.S)):U=this.S),this.m!==null||this.O||(O.H=U,U=null),this.P)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var y=this.i[p];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(h+=y,4096<h){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=Yg(this,O,h),p=wr(this.I),Fe(p,"RID",a),Fe(p,"CVER",22),this.D&&Fe(p,"X-HTTP-Session-Id",this.D),fa(this,p),U&&(this.O?h="headers="+encodeURIComponent(String(zg(U)))+"&"+h:this.m&&ed(p,this.m,U)),ln(this.h,O),this.Ua&&Fe(p,"TYPE","init"),this.P?(Fe(p,"$req",h),Fe(p,"SID","null"),O.T=!0,st(O,p,null)):st(O,p,h),this.G=2}}else this.G==3&&(a?Qg(this,a):this.i.length==0||Ue(this.h)||Qg(this))};function Qg(a,h){var p;h?p=h.l:p=a.U++;const y=wr(a.I);Fe(y,"SID",a.K),Fe(y,"RID",p),Fe(y,"AID",a.T),fa(a,y),a.m&&a.o&&ed(y,a.m,a.o),p=new ve(a,a.j,p,a.B+1),a.m===null&&(p.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Yg(a,p,1e3),p.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),ln(a.h,p),st(p,y,h)}function fa(a,h){a.H&&x(a.H,function(p,y){Fe(h,y,p)}),a.l&&Dg({},function(p,y){Fe(h,y,p)})}function Yg(a,h,p){p=Math.min(a.i.length,p);var y=a.l?m(a.l.Na,a.l,a):null;e:{var O=a.i;let U=-1;for(;;){const G=["count="+p];U==-1?0<p?(U=O[0].g,G.push("ofs="+U)):U=0:G.push("ofs="+U);let Oe=!0;for(let St=0;St<p;St++){let Ae=O[St].g;const Mt=O[St].map;if(Ae-=U,0>Ae)U=Math.max(0,O[St].g-100),Oe=!1;else try{MS(Mt,G,"req"+Ae+"_")}catch{y&&y(Mt)}}if(Oe){y=G.join("&");break e}}}return a=a.i.splice(0,p),h.D=a,y}function Xg(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;ye||X(),F||(ye(),F=!0),W.add(h,a),a.v=0}}function nd(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=C(m(a.Fa,a),ey(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Jg(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=C(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,It(10),au(this),Jg(this))};function rd(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Jg(a){a.g=new ve(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=wr(a.qa);Fe(h,"RID","rpc"),Fe(h,"SID",a.K),Fe(h,"AID",a.T),Fe(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&Fe(h,"TO",a.ja),Fe(h,"TYPE","xmlhttp"),fa(a,h),a.m&&a.o&&ed(h,a.m,a.o),a.L&&(a.g.I=a.L);var p=a.g;a=a.ia,p.L=1,p.v=iu(wr(h)),p.m=null,p.P=!0,Ke(p,a)}t.Za=function(){this.C!=null&&(this.C=null,au(this),nd(this),It(19))};function uu(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Zg(a,h){var p=null;if(a.g==h){uu(a),rd(a),a.g=null;var y=2}else if(De(a.h,h))p=h.D,sa(a.h,h),y=1;else return;if(a.G!=0){if(h.o)if(y==1){p=h.m?h.m.length:0,h=Date.now()-h.F;var O=a.B;y=Ns(),mt(y,new eu(y,p)),lu(a)}else Xg(a);else if(O=h.s,O==3||O==0&&0<h.X||!(y==1&&jS(a,h)||y==2&&nd(a)))switch(p&&0<p.length&&(h=a.h,h.i=h.i.concat(p)),O){case 1:$i(a,5);break;case 4:$i(a,10);break;case 3:$i(a,6);break;default:$i(a,2)}}}function ey(a,h){let p=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(p*=2),p*h}function $i(a,h){if(a.j.info("Error code "+h),h==2){var p=m(a.fb,a),y=a.Xa;const O=!y;y=new zi(y||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||nu(y,"https"),iu(y),O?DS(y.toString(),p):LS(y.toString(),p)}else It(2);a.G=0,a.l&&a.l.sa(h),ty(a),Gg(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),It(2)):(this.j.info("Failed to ping google.com"),It(1))};function ty(a){if(a.G=0,a.ka=[],a.l){const h=tu(a.h);(h.length!=0||a.i.length!=0)&&(b(a.ka,h),b(a.ka,a.i),a.h.i.length=0,A(a.i),a.i.length=0),a.l.ra()}}function ny(a,h,p){var y=p instanceof zi?wr(p):new zi(p);if(y.g!="")h&&(y.g=h+"."+y.g),ru(y,y.s);else{var O=l.location;y=O.protocol,h=h?h+"."+O.hostname:O.hostname,O=+O.port;var U=new zi(null);y&&nu(U,y),h&&(U.g=h),O&&ru(U,O),p&&(U.l=p),y=U}return p=a.D,h=a.ya,p&&h&&Fe(y,p,h),Fe(y,"VER",a.la),fa(a,y),y}function ry(a,h,p){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new et(new ua({eb:p})):new et(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function iy(){}t=iy.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function cu(){}cu.prototype.g=function(a,h){return new un(a,h)};function un(a,h){pt.call(this),this.g=new Kg(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!v(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!v(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Os(this)}T(un,pt),un.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},un.prototype.close=function(){td(this.g)},un.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.u&&(p={},p.__data__=Cs(a),a=p);h.i.push(new Ds(h.Ya++,a)),h.G==3&&lu(h)},un.prototype.N=function(){this.g.l=null,delete this.j,td(this.g),delete this.g,un.aa.N.call(this)};function sy(a){Hr.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const p in h){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}T(sy,Hr);function oy(){Fi.call(this),this.status=1}T(oy,Fi);function Os(a){this.g=a}T(Os,iy),Os.prototype.ua=function(){mt(this.g,"a")},Os.prototype.ta=function(a){mt(this.g,new sy(a))},Os.prototype.sa=function(a){mt(this.g,new oy)},Os.prototype.ra=function(){mt(this.g,"b")},cu.prototype.createWebChannel=cu.prototype.g,un.prototype.send=un.prototype.o,un.prototype.open=un.prototype.m,un.prototype.close=un.prototype.close,NT=function(){return new cu},bT=function(){return Ns()},CT=vr,fp={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},K.NO_ERROR=0,K.TIMEOUT=8,K.HTTP_ERROR=6,oc=K,ce.COMPLETE="complete",kT=ce,na.EventType=yr,yr.OPEN="a",yr.CLOSE="b",yr.ERROR="c",yr.MESSAGE="d",pt.prototype.listen=pt.prototype.K,Oa=na,xT=ua,et.prototype.listenOnce=et.prototype.L,et.prototype.getLastError=et.prototype.Ka,et.prototype.getLastErrorCode=et.prototype.Ba,et.prototype.getStatus=et.prototype.Z,et.prototype.getResponseJson=et.prototype.Oa,et.prototype.getResponseText=et.prototype.oa,et.prototype.send=et.prototype.ea,et.prototype.setWithCredentials=et.prototype.Ha,PT=et}).apply(typeof Nu<"u"?Nu:typeof self<"u"?self:typeof window<"u"?window:{});const k_="@firebase/firestore";/**
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
 */class zt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}zt.UNAUTHENTICATED=new zt(null),zt.GOOGLE_CREDENTIALS=new zt("google-credentials-uid"),zt.FIRST_PARTY=new zt("first-party-uid"),zt.MOCK_USER=new zt("mock-user");/**
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
 */const gs=new Vm("@firebase/firestore");function Ra(){return gs.logLevel}function Z(t,...e){if(gs.logLevel<=Ee.DEBUG){const n=e.map(Gm);gs.debug(`Firestore (${qo}): ${t}`,...n)}}function Ur(t,...e){if(gs.logLevel<=Ee.ERROR){const n=e.map(Gm);gs.error(`Firestore (${qo}): ${t}`,...n)}}function Co(t,...e){if(gs.logLevel<=Ee.WARN){const n=e.map(Gm);gs.warn(`Firestore (${qo}): ${t}`,...n)}}function Gm(t){if(typeof t=="string")return t;try{/**
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
 */function ue(t="Unexpected state"){const e=`FIRESTORE (${qo}) INTERNAL ASSERTION FAILED: `+t;throw Ur(e),new Error(e)}function Me(t,e){t||ue()}function de(t,e){return t}/**
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
 */const B={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Y extends kn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class DT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class WN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(zt.UNAUTHENTICATED))}shutdown(){}}class qN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class KN{constructor(e){this.t=e,this.currentUser=zt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Ti;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ti,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ti)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Me(typeof r.accessToken=="string"),new DT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Me(e===null||typeof e=="string"),new zt(e)}}class GN{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=zt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class QN{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new GN(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(zt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class YN{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class XN{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,Z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Me(typeof n.token=="string"),this.R=n.token,new YN(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function JN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class LT{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=JN(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Pe(t,e){return t<e?-1:t>e?1:0}function bo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class vt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Y(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Y(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new Y(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Y(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return vt.fromMillis(Date.now())}static fromDate(e){return vt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new vt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Pe(this.nanoseconds,e.nanoseconds):Pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class he{constructor(e){this.timestamp=e}static fromTimestamp(e){return new he(e)}static min(){return new he(new vt(0,0))}static max(){return new he(new vt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Rl{constructor(e,n,r){n===void 0?n=0:n>e.length&&ue(),r===void 0?r=e.length-n:r>e.length-n&&ue(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Rl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Rl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class $e extends Rl{construct(e,n,r){return new $e(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Y(B.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new $e(n)}static emptyPath(){return new $e([])}}const ZN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Pt extends Rl{construct(e,n,r){return new Pt(e,n,r)}static isValidIdentifier(e){return ZN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Pt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Pt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new Y(B.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new Y(B.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new Y(B.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new Y(B.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Pt(n)}static emptyPath(){return new Pt([])}}/**
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
 */class ie{constructor(e){this.path=e}static fromPath(e){return new ie($e.fromString(e))}static fromName(e){return new ie($e.fromString(e).popFirst(5))}static empty(){return new ie($e.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&$e.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return $e.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ie(new $e(e.slice()))}}function eD(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=he.fromTimestamp(r===1e9?new vt(n+1,0):new vt(n,r));return new Pi(i,ie.empty(),e)}function tD(t){return new Pi(t.readTime,t.key,-1)}class Pi{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Pi(he.min(),ie.empty(),-1)}static max(){return new Pi(he.max(),ie.empty(),-1)}}function nD(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ie.comparator(t.documentKey,e.documentKey),n!==0?n:Pe(t.largestBatchId,e.largestBatchId))}/**
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
 */const rD="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class iD{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Wl(t){if(t.code!==B.FAILED_PRECONDITION||t.message!==rD)throw t;Z("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class H{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ue(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new H((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof H?n:H.resolve(n)}catch(n){return H.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):H.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):H.reject(n)}static resolve(e){return new H((n,r)=>{n(e)})}static reject(e){return new H((n,r)=>{r(e)})}static waitFor(e){return new H((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=H.resolve(!1);for(const r of e)n=n.next(i=>i?H.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new H((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++l,l===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new H((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function sD(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ql(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Qm{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Qm.oe=-1;function Mh(t){return t==null}function Yc(t){return t===0&&1/t==-1/0}function oD(t){return typeof t=="number"&&Number.isInteger(t)&&!Yc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */class Je{constructor(e,n){this.comparator=e,this.root=n||At.EMPTY}insert(e,n){return new Je(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,At.BLACK,null,null))}remove(e){return new Je(this.comparator,this.root.remove(e,this.comparator).copy(null,null,At.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Du(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Du(this.root,e,this.comparator,!1)}getReverseIterator(){return new Du(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Du(this.root,e,this.comparator,!0)}}class Du{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class At{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??At.RED,this.left=i??At.EMPTY,this.right=s??At.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new At(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return At.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return At.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,At.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,At.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ue();const e=this.left.check();if(e!==this.right.check())throw ue();return e+(this.isRed()?0:1)}}At.EMPTY=null,At.RED=!0,At.BLACK=!1;At.EMPTY=new class{constructor(){this.size=0}get key(){throw ue()}get value(){throw ue()}get color(){throw ue()}get left(){throw ue()}get right(){throw ue()}copy(e,n,r,i,s){return this}insert(e,n,r){return new At(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class kt{constructor(e){this.comparator=e,this.data=new Je(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new b_(this.data.getIterator())}getIteratorFrom(e){return new b_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof kt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new kt(this.comparator);return n.data=e,n}}class b_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class pn{constructor(e){this.fields=e,e.sort(Pt.comparator)}static empty(){return new pn([])}unionWith(e){let n=new kt(Pt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new pn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return bo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Nt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new MT("Invalid base64 string: "+s):s}}(e);return new Nt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Nt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Nt.EMPTY_BYTE_STRING=new Nt("");const aD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function xi(t){if(Me(!!t),typeof t=="string"){let e=0;const n=aD.exec(t);if(Me(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ct(t.seconds),nanos:ct(t.nanos)}}function ct(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ys(t){return typeof t=="string"?Nt.fromBase64String(t):Nt.fromUint8Array(t)}/**
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
 */function Ym(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Xm(t){const e=t.mapValue.fields.__previous_value__;return Ym(e)?Xm(e):e}function Al(t){const e=xi(t.mapValue.fields.__local_write_time__.timestampValue);return new vt(e.seconds,e.nanos)}/**
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
 */class lD{constructor(e,n,r,i,s,o,l,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c}}class Pl{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Pl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Pl&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Lu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function vs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ym(t)?4:uD(t)?9007199254740991:10:ue()}function mr(t,e){if(t===e)return!0;const n=vs(t);if(n!==vs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Al(t).isEqual(Al(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=xi(i.timestampValue),l=xi(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return ys(i.bytesValue).isEqual(ys(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return ct(i.geoPointValue.latitude)===ct(s.geoPointValue.latitude)&&ct(i.geoPointValue.longitude)===ct(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ct(i.integerValue)===ct(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ct(i.doubleValue),l=ct(s.doubleValue);return o===l?Yc(o)===Yc(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return bo(t.arrayValue.values||[],e.arrayValue.values||[],mr);case 10:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(C_(o)!==C_(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!mr(o[u],l[u])))return!1;return!0}(t,e);default:return ue()}}function xl(t,e){return(t.values||[]).find(n=>mr(n,e))!==void 0}function No(t,e){if(t===e)return 0;const n=vs(t),r=vs(e);if(n!==r)return Pe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Pe(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=ct(s.integerValue||s.doubleValue),u=ct(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return N_(t.timestampValue,e.timestampValue);case 4:return N_(Al(t),Al(e));case 5:return Pe(t.stringValue,e.stringValue);case 6:return function(s,o){const l=ys(s),u=ys(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const d=Pe(l[c],u[c]);if(d!==0)return d}return Pe(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=Pe(ct(s.latitude),ct(o.latitude));return l!==0?l:Pe(ct(s.longitude),ct(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const l=s.values||[],u=o.values||[];for(let c=0;c<l.length&&c<u.length;++c){const d=No(l[c],u[c]);if(d)return d}return Pe(l.length,u.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Lu.mapValue&&o===Lu.mapValue)return 0;if(s===Lu.mapValue)return 1;if(o===Lu.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let f=0;f<u.length&&f<d.length;++f){const m=Pe(u[f],d[f]);if(m!==0)return m;const _=No(l[u[f]],c[d[f]]);if(_!==0)return _}return Pe(u.length,d.length)}(t.mapValue,e.mapValue);default:throw ue()}}function N_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Pe(t,e);const n=xi(t),r=xi(e),i=Pe(n.seconds,r.seconds);return i!==0?i:Pe(n.nanos,r.nanos)}function Do(t){return pp(t)}function pp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=xi(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ys(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ie.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=pp(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${pp(n.fields[o])}`;return i+"}"}(t.mapValue):ue()}function D_(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function mp(t){return!!t&&"integerValue"in t}function Jm(t){return!!t&&"arrayValue"in t}function L_(t){return!!t&&"nullValue"in t}function O_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ac(t){return!!t&&"mapValue"in t}function Ya(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Rs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ya(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ya(t.arrayValue.values[n]);return e}return Object.assign({},t)}function uD(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class tn{constructor(e){this.value=e}static empty(){return new tn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ac(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ya(n)}setAll(e){let n=Pt.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Ya(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());ac(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return mr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];ac(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Rs(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new tn(Ya(this.value))}}function VT(t){const e=[];return Rs(t.fields,(n,r)=>{const i=new Pt([n]);if(ac(r)){const s=VT(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new pn(e)}/**
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
 */class Bt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Bt(e,0,he.min(),he.min(),he.min(),tn.empty(),0)}static newFoundDocument(e,n,r,i){return new Bt(e,1,n,he.min(),r,i,0)}static newNoDocument(e,n){return new Bt(e,2,n,he.min(),he.min(),tn.empty(),0)}static newUnknownDocument(e,n){return new Bt(e,3,n,he.min(),he.min(),tn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(he.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=tn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=tn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=he.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Bt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Bt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Xc{constructor(e,n){this.position=e,this.inclusive=n}}function M_(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=ie.comparator(ie.fromName(o.referenceValue),n.key):r=No(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function V_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!mr(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class kl{constructor(e,n="asc"){this.field=e,this.dir=n}}function cD(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class UT{}class ft extends UT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new dD(e,n,r):n==="array-contains"?new mD(e,r):n==="in"?new gD(e,r):n==="not-in"?new yD(e,r):n==="array-contains-any"?new vD(e,r):new ft(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new fD(e,r):new pD(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(No(n,this.value)):n!==null&&vs(this.value)===vs(n)&&this.matchesComparison(No(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ue()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Kn extends UT{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Kn(e,n)}matches(e){return FT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function FT(t){return t.op==="and"}function jT(t){return hD(t)&&FT(t)}function hD(t){for(const e of t.filters)if(e instanceof Kn)return!1;return!0}function gp(t){if(t instanceof ft)return t.field.canonicalString()+t.op.toString()+Do(t.value);if(jT(t))return t.filters.map(e=>gp(e)).join(",");{const e=t.filters.map(n=>gp(n)).join(",");return`${t.op}(${e})`}}function zT(t,e){return t instanceof ft?function(r,i){return i instanceof ft&&r.op===i.op&&r.field.isEqual(i.field)&&mr(r.value,i.value)}(t,e):t instanceof Kn?function(r,i){return i instanceof Kn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&zT(o,i.filters[l]),!0):!1}(t,e):void ue()}function $T(t){return t instanceof ft?function(n){return`${n.field.canonicalString()} ${n.op} ${Do(n.value)}`}(t):t instanceof Kn?function(n){return n.op.toString()+" {"+n.getFilters().map($T).join(" ,")+"}"}(t):"Filter"}class dD extends ft{constructor(e,n,r){super(e,n,r),this.key=ie.fromName(r.referenceValue)}matches(e){const n=ie.comparator(e.key,this.key);return this.matchesComparison(n)}}class fD extends ft{constructor(e,n){super(e,"in",n),this.keys=BT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class pD extends ft{constructor(e,n){super(e,"not-in",n),this.keys=BT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function BT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ie.fromName(r.referenceValue))}class mD extends ft{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Jm(n)&&xl(n.arrayValue,this.value)}}class gD extends ft{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&xl(this.value.arrayValue,n)}}class yD extends ft{constructor(e,n){super(e,"not-in",n)}matches(e){if(xl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!xl(this.value.arrayValue,n)}}class vD extends ft{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Jm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>xl(this.value.arrayValue,r))}}/**
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
 */class _D{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function U_(t,e=null,n=[],r=[],i=null,s=null,o=null){return new _D(t,e,n,r,i,s,o)}function Zm(t){const e=de(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>gp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Mh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Do(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Do(r)).join(",")),e.ue=n}return e.ue}function eg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!cD(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!zT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!V_(t.startAt,e.startAt)&&V_(t.endAt,e.endAt)}function yp(t){return ie.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Ko{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function wD(t,e,n,r,i,s,o,l){return new Ko(t,e,n,r,i,s,o,l)}function Vh(t){return new Ko(t)}function F_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function HT(t){return t.collectionGroup!==null}function Xa(t){const e=de(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new kt(Pt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new kl(s,r))}),n.has(Pt.keyField().canonicalString())||e.ce.push(new kl(Pt.keyField(),r))}return e.ce}function hr(t){const e=de(t);return e.le||(e.le=ED(e,Xa(t))),e.le}function ED(t,e){if(t.limitType==="F")return U_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new kl(i.field,s)});const n=t.endAt?new Xc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Xc(t.startAt.position,t.startAt.inclusive):null;return U_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function vp(t,e){const n=t.filters.concat([e]);return new Ko(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function _p(t,e,n){return new Ko(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Uh(t,e){return eg(hr(t),hr(e))&&t.limitType===e.limitType}function WT(t){return`${Zm(hr(t))}|lt:${t.limitType}`}function js(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>$T(i)).join(", ")}]`),Mh(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Do(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Do(i)).join(",")),`Target(${r})`}(hr(t))}; limitType=${t.limitType})`}function Fh(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):ie.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Xa(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=M_(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,Xa(r),i)||r.endAt&&!function(o,l,u){const c=M_(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,Xa(r),i))}(t,e)}function TD(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function qT(t){return(e,n)=>{let r=!1;for(const i of Xa(t)){const s=ID(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function ID(t,e,n){const r=t.field.isKeyField()?ie.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?No(u,c):ue()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ue()}}/**
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
 */const SD=new Je(ie.comparator);function Fr(){return SD}const KT=new Je(ie.comparator);function Ma(...t){let e=KT;for(const n of t)e=e.insert(n.key,n);return e}function GT(t){let e=KT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Zi(){return Ja()}function QT(){return Ja()}function Ja(){return new Go(t=>t.toString(),(t,e)=>t.isEqual(e))}const RD=new Je(ie.comparator),AD=new kt(ie.comparator);function we(...t){let e=AD;for(const n of t)e=e.add(n);return e}const PD=new kt(Pe);function xD(){return PD}/**
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
 */function YT(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Yc(e)?"-0":e}}function XT(t){return{integerValue:""+t}}function kD(t,e){return oD(e)?XT(e):YT(t,e)}/**
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
 */class jh{constructor(){this._=void 0}}function CD(t,e,n){return t instanceof Jc?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Ym(s)&&(s=Xm(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Cl?ZT(t,e):t instanceof bl?eI(t,e):function(i,s){const o=JT(i,s),l=j_(o)+j_(i.Pe);return mp(o)&&mp(i.Pe)?XT(l):YT(i.serializer,l)}(t,e)}function bD(t,e,n){return t instanceof Cl?ZT(t,e):t instanceof bl?eI(t,e):n}function JT(t,e){return t instanceof Zc?function(r){return mp(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Jc extends jh{}class Cl extends jh{constructor(e){super(),this.elements=e}}function ZT(t,e){const n=tI(e);for(const r of t.elements)n.some(i=>mr(i,r))||n.push(r);return{arrayValue:{values:n}}}class bl extends jh{constructor(e){super(),this.elements=e}}function eI(t,e){let n=tI(e);for(const r of t.elements)n=n.filter(i=>!mr(i,r));return{arrayValue:{values:n}}}class Zc extends jh{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function j_(t){return ct(t.integerValue||t.doubleValue)}function tI(t){return Jm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function ND(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Cl&&i instanceof Cl||r instanceof bl&&i instanceof bl?bo(r.elements,i.elements,mr):r instanceof Zc&&i instanceof Zc?mr(r.Pe,i.Pe):r instanceof Jc&&i instanceof Jc}(t.transform,e.transform)}class DD{constructor(e,n){this.version=e,this.transformResults=n}}class dr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new dr}static exists(e){return new dr(void 0,e)}static updateTime(e){return new dr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function lc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class zh{}function nI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new iI(t.key,dr.none()):new Kl(t.key,t.data,dr.none());{const n=t.data,r=tn.empty();let i=new kt(Pt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Mi(t.key,r,new pn(i.toArray()),dr.none())}}function LD(t,e,n){t instanceof Kl?function(i,s,o){const l=i.value.clone(),u=$_(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Mi?function(i,s,o){if(!lc(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=$_(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(rI(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Za(t,e,n,r){return t instanceof Kl?function(s,o,l,u){if(!lc(s.precondition,o))return l;const c=s.value.clone(),d=B_(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Mi?function(s,o,l,u){if(!lc(s.precondition,o))return l;const c=B_(s.fieldTransforms,u,o),d=o.data;return d.setAll(rI(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,l){return lc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function OD(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=JT(r.transform,i||null);s!=null&&(n===null&&(n=tn.empty()),n.set(r.field,s))}return n||null}function z_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&bo(r,i,(s,o)=>ND(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Kl extends zh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Mi extends zh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function rI(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function $_(t,e,n){const r=new Map;Me(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,bD(o,l,n[i]))}return r}function B_(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,CD(s,o,e))}return r}class iI extends zh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class MD extends zh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class VD{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&LD(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Za(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Za(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=QT();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=nI(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(he.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),we())}isEqual(e){return this.batchId===e.batchId&&bo(this.mutations,e.mutations,(n,r)=>z_(n,r))&&bo(this.baseMutations,e.baseMutations,(n,r)=>z_(n,r))}}class tg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Me(e.mutations.length===r.length);let i=function(){return RD}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new tg(e,n,r,i)}}/**
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
 */class UD{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class FD{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var lt,Ie;function jD(t){switch(t){default:return ue();case B.CANCELLED:case B.UNKNOWN:case B.DEADLINE_EXCEEDED:case B.RESOURCE_EXHAUSTED:case B.INTERNAL:case B.UNAVAILABLE:case B.UNAUTHENTICATED:return!1;case B.INVALID_ARGUMENT:case B.NOT_FOUND:case B.ALREADY_EXISTS:case B.PERMISSION_DENIED:case B.FAILED_PRECONDITION:case B.ABORTED:case B.OUT_OF_RANGE:case B.UNIMPLEMENTED:case B.DATA_LOSS:return!0}}function sI(t){if(t===void 0)return Ur("GRPC error has no .code"),B.UNKNOWN;switch(t){case lt.OK:return B.OK;case lt.CANCELLED:return B.CANCELLED;case lt.UNKNOWN:return B.UNKNOWN;case lt.DEADLINE_EXCEEDED:return B.DEADLINE_EXCEEDED;case lt.RESOURCE_EXHAUSTED:return B.RESOURCE_EXHAUSTED;case lt.INTERNAL:return B.INTERNAL;case lt.UNAVAILABLE:return B.UNAVAILABLE;case lt.UNAUTHENTICATED:return B.UNAUTHENTICATED;case lt.INVALID_ARGUMENT:return B.INVALID_ARGUMENT;case lt.NOT_FOUND:return B.NOT_FOUND;case lt.ALREADY_EXISTS:return B.ALREADY_EXISTS;case lt.PERMISSION_DENIED:return B.PERMISSION_DENIED;case lt.FAILED_PRECONDITION:return B.FAILED_PRECONDITION;case lt.ABORTED:return B.ABORTED;case lt.OUT_OF_RANGE:return B.OUT_OF_RANGE;case lt.UNIMPLEMENTED:return B.UNIMPLEMENTED;case lt.DATA_LOSS:return B.DATA_LOSS;default:return ue()}}(Ie=lt||(lt={}))[Ie.OK=0]="OK",Ie[Ie.CANCELLED=1]="CANCELLED",Ie[Ie.UNKNOWN=2]="UNKNOWN",Ie[Ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ie[Ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ie[Ie.NOT_FOUND=5]="NOT_FOUND",Ie[Ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ie[Ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ie[Ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ie[Ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ie[Ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ie[Ie.ABORTED=10]="ABORTED",Ie[Ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ie[Ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ie[Ie.INTERNAL=13]="INTERNAL",Ie[Ie.UNAVAILABLE=14]="UNAVAILABLE",Ie[Ie.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function zD(){return new TextEncoder}/**
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
 */const $D=new is([4294967295,4294967295],0);function H_(t){const e=zD().encode(t),n=new AT;return n.update(e),new Uint8Array(n.digest())}function W_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new is([n,r],0),new is([i,s],0)]}class ng{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Va(`Invalid padding: ${n}`);if(r<0)throw new Va(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Va(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Va(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=is.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(is.fromNumber(r)));return i.compare($D)===1&&(i=new is([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=H_(e),[r,i]=W_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new ng(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=H_(e),[r,i]=W_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Va extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class $h{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Gl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new $h(he.min(),i,new Je(Pe),Fr(),we())}}class Gl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Gl(r,n,we(),we(),we())}}/**
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
 */class uc{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class oI{constructor(e,n){this.targetId=e,this.me=n}}class aI{constructor(e,n,r=Nt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class q_{constructor(){this.fe=0,this.ge=G_(),this.pe=Nt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=we(),n=we(),r=we();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ue()}}),new Gl(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=G_()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Me(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class BD{constructor(e){this.Le=e,this.Be=new Map,this.ke=Fr(),this.qe=K_(),this.Qe=new Je(Pe)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ue()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(yp(s))if(r===0){const o=new ie(s.path);this.Ue(n,o,Bt.newNoDocument(o,he.min()))}else Me(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=ys(r).toUint8Array()}catch(u){if(u instanceof MT)return Co("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new ng(o,i,s)}catch(u){return Co(u instanceof Va?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&yp(l.target)){const u=new ie(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,Bt.newNoDocument(u,e))}s.be&&(n.set(o,s.Ce()),s.ve())}});let r=we();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new $h(e,n,this.Qe,this.ke,r);return this.ke=Fr(),this.qe=K_(),this.Qe=new Je(Pe),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new q_,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new kt(Pe),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||Z("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new q_),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function K_(){return new Je(ie.comparator)}function G_(){return new Je(ie.comparator)}const HD={asc:"ASCENDING",desc:"DESCENDING"},WD={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},qD={and:"AND",or:"OR"};class KD{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function wp(t,e){return t.useProto3Json||Mh(e)?e:{value:e}}function eh(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function lI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function GD(t,e){return eh(t,e.toTimestamp())}function fr(t){return Me(!!t),he.fromTimestamp(function(n){const r=xi(n);return new vt(r.seconds,r.nanos)}(t))}function rg(t,e){return Ep(t,e).canonicalString()}function Ep(t,e){const n=function(i){return new $e(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function uI(t){const e=$e.fromString(t);return Me(pI(e)),e}function Tp(t,e){return rg(t.databaseId,e.path)}function Wd(t,e){const n=uI(e);if(n.get(1)!==t.databaseId.projectId)throw new Y(B.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Y(B.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ie(hI(n))}function cI(t,e){return rg(t.databaseId,e)}function QD(t){const e=uI(t);return e.length===4?$e.emptyPath():hI(e)}function Ip(t){return new $e(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function hI(t){return Me(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Q_(t,e,n){return{name:Tp(t,e),fields:n.value.mapValue.fields}}function YD(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:ue()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(Me(d===void 0||typeof d=="string"),Nt.fromBase64String(d||"")):(Me(d===void 0||d instanceof Buffer||d instanceof Uint8Array),Nt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const d=c.code===void 0?B.UNKNOWN:sI(c.code);return new Y(d,c.message||"")}(o);n=new aI(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Wd(t,r.document.name),s=fr(r.document.updateTime),o=r.document.createTime?fr(r.document.createTime):he.min(),l=new tn({mapValue:{fields:r.document.fields}}),u=Bt.newFoundDocument(i,s,o,l),c=r.targetIds||[],d=r.removedTargetIds||[];n=new uc(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Wd(t,r.document),s=r.readTime?fr(r.readTime):he.min(),o=Bt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new uc([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Wd(t,r.document),s=r.removedTargetIds||[];n=new uc([],s,i,null)}else{if(!("filter"in e))return ue();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new FD(i,s),l=r.targetId;n=new oI(l,o)}}return n}function XD(t,e){let n;if(e instanceof Kl)n={update:Q_(t,e.key,e.value)};else if(e instanceof iI)n={delete:Tp(t,e.key)};else if(e instanceof Mi)n={update:Q_(t,e.key,e.data),updateMask:o4(e.fieldMask)};else{if(!(e instanceof MD))return ue();n={verify:Tp(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Jc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Cl)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof bl)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Zc)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw ue()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:GD(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ue()}(t,e.precondition)),n}function JD(t,e){return t&&t.length>0?(Me(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?fr(i.updateTime):fr(s);return o.isEqual(he.min())&&(o=fr(s)),new DD(o,i.transformResults||[])}(n,e))):[]}function ZD(t,e){return{documents:[cI(t,e.path)]}}function e4(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=cI(t,i);const s=function(c){if(c.length!==0)return fI(Kn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:zs(m.field),direction:r4(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=wp(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function t4(t){let e=QD(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Me(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(f){const m=dI(f);return m instanceof Kn&&jT(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(m=>function(T){return new kl($s(T.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(T.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(f){let m;return m=typeof f=="object"?f.value:f,Mh(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(f){const m=!!f.before,_=f.values||[];return new Xc(_,m)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const m=!f.before,_=f.values||[];return new Xc(_,m)}(n.endAt)),wD(e,i,o,s,l,"F",u,c)}function n4(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ue()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function dI(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=$s(n.unaryFilter.field);return ft.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=$s(n.unaryFilter.field);return ft.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=$s(n.unaryFilter.field);return ft.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=$s(n.unaryFilter.field);return ft.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ue()}}(t):t.fieldFilter!==void 0?function(n){return ft.create($s(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ue()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Kn.create(n.compositeFilter.filters.map(r=>dI(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ue()}}(n.compositeFilter.op))}(t):ue()}function r4(t){return HD[t]}function i4(t){return WD[t]}function s4(t){return qD[t]}function zs(t){return{fieldPath:t.canonicalString()}}function $s(t){return Pt.fromServerFormat(t.fieldPath)}function fI(t){return t instanceof ft?function(n){if(n.op==="=="){if(O_(n.value))return{unaryFilter:{field:zs(n.field),op:"IS_NAN"}};if(L_(n.value))return{unaryFilter:{field:zs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(O_(n.value))return{unaryFilter:{field:zs(n.field),op:"IS_NOT_NAN"}};if(L_(n.value))return{unaryFilter:{field:zs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:zs(n.field),op:i4(n.op),value:n.value}}}(t):t instanceof Kn?function(n){const r=n.getFilters().map(i=>fI(i));return r.length===1?r[0]:{compositeFilter:{op:s4(n.op),filters:r}}}(t):ue()}function o4(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function pI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class ci{constructor(e,n,r,i,s=he.min(),o=he.min(),l=Nt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new ci(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ci(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ci(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ci(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class a4{constructor(e){this.ct=e}}function l4(t){const e=t4({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?_p(e,e.limit,"L"):e}/**
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
 */class u4{constructor(){this.an=new c4}addToCollectionParentIndex(e,n){return this.an.add(n),H.resolve()}getCollectionParents(e,n){return H.resolve(this.an.getEntries(n))}addFieldIndex(e,n){return H.resolve()}deleteFieldIndex(e,n){return H.resolve()}deleteAllFieldIndexes(e){return H.resolve()}createTargetIndexes(e,n){return H.resolve()}getDocumentsMatchingTarget(e,n){return H.resolve(null)}getIndexType(e,n){return H.resolve(0)}getFieldIndexes(e,n){return H.resolve([])}getNextCollectionGroupToUpdate(e){return H.resolve(null)}getMinOffset(e,n){return H.resolve(Pi.min())}getMinOffsetFromCollectionGroup(e,n){return H.resolve(Pi.min())}updateCollectionGroup(e,n,r){return H.resolve()}updateIndexEntries(e,n){return H.resolve()}}class c4{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new kt($e.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new kt($e.comparator)).toArray()}}/**
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
 */class h4{constructor(){this.changes=new Go(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Bt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?H.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class d4{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class f4{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Za(r.mutation,i,pn.empty(),vt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,we()).next(()=>r))}getLocalViewOfDocuments(e,n,r=we()){const i=Zi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ma();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Zi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,we()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Fr();const o=Ja(),l=function(){return Ja()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof Mi)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),Za(d.mutation,c,d.mutation.getFieldMask(),vt.now())):o.set(c.key,pn.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var f;return l.set(c,new d4(d,(f=o.get(c))!==null&&f!==void 0?f:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Ja();let i=new Je((o,l)=>o-l),s=we();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||pn.empty();d=l.applyToLocalView(c,d),r.set(u,d);const f=(i.get(l.batchId)||we()).add(u);i=i.insert(l.batchId,f)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,d=u.value,f=QT();d.forEach(m=>{if(!s.has(m)){const _=nI(n.get(m),r.get(m));_!==null&&f.set(m,_),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return H.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return ie.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):HT(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):H.resolve(Zi());let l=-1,u=s;return o.next(c=>H.forEach(c,(d,f)=>(l<f.largestBatchId&&(l=f.largestBatchId),s.get(d)?H.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,we())).next(d=>({batchId:l,changes:GT(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ie(n)).next(r=>{let i=Ma();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Ma();return this.indexManager.getCollectionParents(e,s).next(l=>H.forEach(l,u=>{const c=function(f,m){return new Ko(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,Bt.newInvalidDocument(d)))});let l=Ma();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&Za(d.mutation,c,pn.empty(),vt.now()),Fh(n,c)&&(l=l.insert(u,c))}),l})}}/**
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
 */class p4{constructor(e){this.serializer=e,this.lr=new Map,this.hr=new Map}getBundleMetadata(e,n){return H.resolve(this.lr.get(n))}saveBundleMetadata(e,n){return this.lr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:fr(i.createTime)}}(n)),H.resolve()}getNamedQuery(e,n){return H.resolve(this.hr.get(n))}saveNamedQuery(e,n){return this.hr.set(n.name,function(i){return{name:i.name,query:l4(i.bundledQuery),readTime:fr(i.readTime)}}(n)),H.resolve()}}/**
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
 */class m4{constructor(){this.overlays=new Je(ie.comparator),this.Pr=new Map}getOverlay(e,n){return H.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Zi();return H.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),H.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Pr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Pr.delete(r)),H.resolve()}getOverlaysForCollection(e,n,r){const i=Zi(),s=n.length+1,o=new ie(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return H.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Je((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=Zi(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const l=Zi(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>l.set(c,d)),!(l.size()>=i)););return H.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Pr.get(i.largestBatchId).delete(r.key);this.Pr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new UD(n,r));let s=this.Pr.get(n);s===void 0&&(s=we(),this.Pr.set(n,s)),this.Pr.set(n,s.add(r.key))}}/**
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
 */class g4{constructor(){this.sessionToken=Nt.EMPTY_BYTE_STRING}getSessionToken(e){return H.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,H.resolve()}}/**
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
 */class ig{constructor(){this.Ir=new kt(_t.Tr),this.Er=new kt(_t.dr)}isEmpty(){return this.Ir.isEmpty()}addReference(e,n){const r=new _t(e,n);this.Ir=this.Ir.add(r),this.Er=this.Er.add(r)}Ar(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Rr(new _t(e,n))}Vr(e,n){e.forEach(r=>this.removeReference(r,n))}mr(e){const n=new ie(new $e([])),r=new _t(n,e),i=new _t(n,e+1),s=[];return this.Er.forEachInRange([r,i],o=>{this.Rr(o),s.push(o.key)}),s}gr(){this.Ir.forEach(e=>this.Rr(e))}Rr(e){this.Ir=this.Ir.delete(e),this.Er=this.Er.delete(e)}pr(e){const n=new ie(new $e([])),r=new _t(n,e),i=new _t(n,e+1);let s=we();return this.Er.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new _t(e,0),r=this.Ir.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class _t{constructor(e,n){this.key=e,this.yr=n}static Tr(e,n){return ie.comparator(e.key,n.key)||Pe(e.yr,n.yr)}static dr(e,n){return Pe(e.yr,n.yr)||ie.comparator(e.key,n.key)}}/**
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
 */class y4{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.wr=1,this.Sr=new kt(_t.Tr)}checkEmpty(e){return H.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new VD(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Sr=this.Sr.add(new _t(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return H.resolve(o)}lookupMutationBatch(e,n){return H.resolve(this.br(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Dr(r),s=i<0?0:i;return H.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return H.resolve(this.mutationQueue.length===0?-1:this.wr-1)}getAllMutationBatches(e){return H.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new _t(n,0),i=new _t(n,Number.POSITIVE_INFINITY),s=[];return this.Sr.forEachInRange([r,i],o=>{const l=this.br(o.yr);s.push(l)}),H.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new kt(Pe);return n.forEach(i=>{const s=new _t(i,0),o=new _t(i,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([s,o],l=>{r=r.add(l.yr)})}),H.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;ie.isDocumentKey(s)||(s=s.child(""));const o=new _t(new ie(s),0);let l=new kt(Pe);return this.Sr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.yr)),!0)},o),H.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.br(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Me(this.vr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Sr;return H.forEach(n.mutations,i=>{const s=new _t(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Sr=r})}xn(e){}containsKey(e,n){const r=new _t(n,0),i=this.Sr.firstAfterOrEqual(r);return H.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,H.resolve()}vr(e,n){return this.Dr(e)}Dr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}br(e){const n=this.Dr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class v4{constructor(e){this.Fr=e,this.docs=function(){return new Je(ie.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Fr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return H.resolve(r?r.document.mutableCopy():Bt.newInvalidDocument(n))}getEntries(e,n){let r=Fr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Bt.newInvalidDocument(i))}),H.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Fr();const o=n.path,l=new ie(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||nD(tD(d),r)<=0||(i.has(d.key)||Fh(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return H.resolve(s)}getAllFromCollectionGroup(e,n,r,i){ue()}Mr(e,n){return H.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new _4(this)}getSize(e){return H.resolve(this.size)}}class _4 extends h4{constructor(e){super(),this.ur=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ur.addEntry(e,i)):this.ur.removeEntry(r)}),H.waitFor(n)}getFromCache(e,n){return this.ur.getEntry(e,n)}getAllFromCache(e,n){return this.ur.getEntries(e,n)}}/**
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
 */class w4{constructor(e){this.persistence=e,this.Or=new Go(n=>Zm(n),eg),this.lastRemoteSnapshotVersion=he.min(),this.highestTargetId=0,this.Nr=0,this.Lr=new ig,this.targetCount=0,this.Br=Lo.Ln()}forEachTarget(e,n){return this.Or.forEach((r,i)=>n(i)),H.resolve()}getLastRemoteSnapshotVersion(e){return H.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return H.resolve(this.Nr)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),H.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Nr&&(this.Nr=n),H.resolve()}Qn(e){this.Or.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Br=new Lo(n),this.highestTargetId=n),e.sequenceNumber>this.Nr&&(this.Nr=e.sequenceNumber)}addTargetData(e,n){return this.Qn(n),this.targetCount+=1,H.resolve()}updateTargetData(e,n){return this.Qn(n),H.resolve()}removeTargetData(e,n){return this.Or.delete(n.target),this.Lr.mr(n.targetId),this.targetCount-=1,H.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Or.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Or.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),H.waitFor(s).next(()=>i)}getTargetCount(e){return H.resolve(this.targetCount)}getTargetData(e,n){const r=this.Or.get(n)||null;return H.resolve(r)}addMatchingKeys(e,n,r){return this.Lr.Ar(n,r),H.resolve()}removeMatchingKeys(e,n,r){this.Lr.Vr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),H.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Lr.mr(n),H.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Lr.pr(n);return H.resolve(r)}containsKey(e,n){return H.resolve(this.Lr.containsKey(n))}}/**
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
 */class E4{constructor(e,n){this.kr={},this.overlays={},this.qr=new Qm(0),this.Qr=!1,this.Qr=!0,this.Kr=new g4,this.referenceDelegate=e(this),this.$r=new w4(this),this.indexManager=new u4,this.remoteDocumentCache=function(i){return new v4(i)}(r=>this.referenceDelegate.Ur(r)),this.serializer=new a4(n),this.Wr=new p4(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new m4,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.kr[e.toKey()];return r||(r=new y4(n,this.referenceDelegate),this.kr[e.toKey()]=r),r}getGlobalsCache(){return this.Kr}getTargetCache(){return this.$r}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Wr}runTransaction(e,n,r){Z("MemoryPersistence","Starting transaction:",e);const i=new T4(this.qr.next());return this.referenceDelegate.Gr(),r(i).next(s=>this.referenceDelegate.zr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}jr(e,n){return H.or(Object.values(this.kr).map(r=>()=>r.containsKey(e,n)))}}class T4 extends iD{constructor(e){super(),this.currentSequenceNumber=e}}class sg{constructor(e){this.persistence=e,this.Hr=new ig,this.Jr=null}static Yr(e){return new sg(e)}get Zr(){if(this.Jr)return this.Jr;throw ue()}addReference(e,n,r){return this.Hr.addReference(r,n),this.Zr.delete(r.toString()),H.resolve()}removeReference(e,n,r){return this.Hr.removeReference(r,n),this.Zr.add(r.toString()),H.resolve()}markPotentiallyOrphaned(e,n){return this.Zr.add(n.toString()),H.resolve()}removeTarget(e,n){this.Hr.mr(n.targetId).forEach(i=>this.Zr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Zr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Gr(){this.Jr=new Set}zr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return H.forEach(this.Zr,r=>{const i=ie.fromPath(r);return this.Xr(e,i).next(s=>{s||n.removeEntry(i,he.min())})}).next(()=>(this.Jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Xr(e,n).next(r=>{r?this.Zr.delete(n.toString()):this.Zr.add(n.toString())})}Ur(e){return 0}Xr(e,n){return H.or([()=>H.resolve(this.Hr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.jr(e,n)])}}/**
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
 */class og{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Ki=r,this.$i=i}static Ui(e,n){let r=we(),i=we();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new og(e,n.fromCache,r,i)}}/**
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
 */class I4{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class S4{constructor(){this.Wi=!1,this.Gi=!1,this.zi=100,this.ji=function(){return fC()?8:sD(bt())>0?6:4}()}initialize(e,n){this.Hi=e,this.indexManager=n,this.Wi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Yi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new I4;return this.Zi(e,n,o).next(l=>{if(s.result=l,this.Gi)return this.Xi(e,n,o,l.size)})}).next(()=>s.result)}Xi(e,n,r,i){return r.documentReadCount<this.zi?(Ra()<=Ee.DEBUG&&Z("QueryEngine","SDK will not create cache indexes for query:",js(n),"since it only creates cache indexes for collection contains","more than or equal to",this.zi,"documents"),H.resolve()):(Ra()<=Ee.DEBUG&&Z("QueryEngine","Query:",js(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ji*i?(Ra()<=Ee.DEBUG&&Z("QueryEngine","The SDK decides to create cache indexes for query:",js(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,hr(n))):H.resolve())}Ji(e,n){if(F_(n))return H.resolve(null);let r=hr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=_p(n,null,"F"),r=hr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=we(...s);return this.Hi.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.es(n,l);return this.ts(n,c,o,u.readTime)?this.Ji(e,_p(n,null,"F")):this.ns(e,c,n,u)}))})))}Yi(e,n,r,i){return F_(n)||i.isEqual(he.min())?H.resolve(null):this.Hi.getDocuments(e,r).next(s=>{const o=this.es(n,s);return this.ts(n,o,r,i)?H.resolve(null):(Ra()<=Ee.DEBUG&&Z("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),js(n)),this.ns(e,o,n,eD(i,-1)).next(l=>l))})}es(e,n){let r=new kt(qT(e));return n.forEach((i,s)=>{Fh(e,s)&&(r=r.add(s))}),r}ts(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Zi(e,n,r){return Ra()<=Ee.DEBUG&&Z("QueryEngine","Using full collection scan to execute query:",js(n)),this.Hi.getDocumentsMatchingQuery(e,n,Pi.min(),r)}ns(e,n,r,i){return this.Hi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class R4{constructor(e,n,r,i){this.persistence=e,this.rs=n,this.serializer=i,this.ss=new Je(Pe),this.os=new Go(s=>Zm(s),eg),this._s=new Map,this.us=e.getRemoteDocumentCache(),this.$r=e.getTargetCache(),this.Wr=e.getBundleCache(),this.cs(r)}cs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new f4(this.us,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.us.setIndexManager(this.indexManager),this.rs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ss))}}function A4(t,e,n,r){return new R4(t,e,n,r)}async function mI(t,e){const n=de(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.cs(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=we();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){l.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({ls:c,removedBatchIds:o,addedBatchIds:l}))})})}function P4(t,e){const n=de(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.us.newChangeBuffer({trackRemovals:!0});return function(l,u,c,d){const f=c.batch,m=f.keys();let _=H.resolve();return m.forEach(T=>{_=_.next(()=>d.getEntry(u,T)).next(A=>{const b=c.docVersions.get(T);Me(b!==null),A.version.compareTo(b)<0&&(f.applyToRemoteDocument(A,c),A.isValidDocument()&&(A.setReadTime(c.commitVersion),d.addEntry(A)))})}),_.next(()=>l.mutationQueue.removeMutationBatch(u,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=we();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function gI(t){const e=de(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.$r.getLastRemoteSnapshotVersion(n))}function x4(t,e){const n=de(t),r=e.snapshotVersion;let i=n.ss;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.us.newChangeBuffer({trackRemovals:!0});i=n.ss;const l=[];e.targetChanges.forEach((d,f)=>{const m=i.get(f);if(!m)return;l.push(n.$r.removeMatchingKeys(s,d.removedDocuments,f).next(()=>n.$r.addMatchingKeys(s,d.addedDocuments,f)));let _=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?_=_.withResumeToken(Nt.EMPTY_BYTE_STRING,he.min()).withLastLimboFreeSnapshotVersion(he.min()):d.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(d.resumeToken,r)),i=i.insert(f,_),function(A,b,I){return A.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-A.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(m,_,d)&&l.push(n.$r.updateTargetData(s,_))});let u=Fr(),c=we();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),l.push(k4(s,o,e.documentUpdates).next(d=>{u=d.hs,c=d.Ps})),!r.isEqual(he.min())){const d=n.$r.getLastRemoteSnapshotVersion(s).next(f=>n.$r.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(d)}return H.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.ss=i,s))}function k4(t,e,n){let r=we(),i=we();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Fr();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(he.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):Z("LocalStore","Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{hs:o,Ps:i}})}function C4(t,e){const n=de(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function b4(t,e){const n=de(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.$r.getTargetData(r,e).next(s=>s?(i=s,H.resolve(i)):n.$r.allocateTargetId(r).next(o=>(i=new ci(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.$r.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ss.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ss=n.ss.insert(r.targetId,r),n.os.set(e,r.targetId)),r})}async function Sp(t,e,n){const r=de(t),i=r.ss.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ql(o))throw o;Z("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ss=r.ss.remove(e),r.os.delete(i.target)}function Y_(t,e,n){const r=de(t);let i=he.min(),s=we();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const f=de(u),m=f.os.get(d);return m!==void 0?H.resolve(f.ss.get(m)):f.$r.getTargetData(c,d)}(r,o,hr(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.$r.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.rs.getDocumentsMatchingQuery(o,e,n?i:he.min(),n?s:we())).next(l=>(N4(r,TD(e),l),{documents:l,Is:s})))}function N4(t,e,n){let r=t._s.get(e)||he.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t._s.set(e,r)}class X_{constructor(){this.activeTargetIds=xD()}Vs(e){this.activeTargetIds=this.activeTargetIds.add(e)}fs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Rs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class D4{constructor(){this.io=new X_,this.so={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.io.Vs(e),this.so[e]||"not-current"}updateQueryState(e,n,r){this.so[e]=n}removeLocalQueryTarget(e){this.io.fs(e)}isLocalQueryTarget(e){return this.io.activeTargetIds.has(e)}clearQueryState(e){delete this.so[e]}getAllActiveQueryTargets(){return this.io.activeTargetIds}isActiveQueryTarget(e){return this.io.activeTargetIds.has(e)}start(){return this.io=new X_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class L4{oo(e){}shutdown(){}}/**
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
 */class J_{constructor(){this._o=()=>this.ao(),this.uo=()=>this.co(),this.lo=[],this.ho()}oo(e){this.lo.push(e)}shutdown(){window.removeEventListener("online",this._o),window.removeEventListener("offline",this.uo)}ho(){window.addEventListener("online",this._o),window.addEventListener("offline",this.uo)}ao(){Z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.lo)e(0)}co(){Z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.lo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const O4={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class M4{constructor(e){this.Po=e.Po,this.Io=e.Io}To(e){this.Eo=e}Ao(e){this.Ro=e}Vo(e){this.mo=e}onMessage(e){this.fo=e}close(){this.Io()}send(e){this.Po(e)}po(){this.Eo()}yo(){this.Ro()}wo(e){this.mo(e)}So(e){this.fo(e)}}/**
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
 */const jt="WebChannelConnection";class V4 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.bo=r+"://"+n.host,this.Do=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get vo(){return!1}Fo(n,r,i,s,o){const l=qd(),u=this.Mo(n,r.toUriEncodedString());Z("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const c={"google-cloud-resource-prefix":this.Do,"x-goog-request-params":this.Co};return this.xo(c,s,o),this.Oo(n,u,c,i).then(d=>(Z("RestConnection",`Received RPC '${n}' ${l}: `,d),d),d=>{throw Co("RestConnection",`RPC '${n}' ${l} failed with error: `,d,"url: ",u,"request:",i),d})}No(n,r,i,s,o,l){return this.Fo(n,r,i,s,o)}xo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+qo}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}Mo(n,r){const i=O4[n];return`${this.bo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Oo(e,n,r,i){const s=qd();return new Promise((o,l)=>{const u=new PT;u.setWithCredentials(!0),u.listenOnce(kT.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case oc.NO_ERROR:const d=u.getResponseJson();Z(jt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case oc.TIMEOUT:Z(jt,`RPC '${e}' ${s} timed out`),l(new Y(B.DEADLINE_EXCEEDED,"Request time out"));break;case oc.HTTP_ERROR:const f=u.getStatus();if(Z(jt,`RPC '${e}' ${s} failed with status:`,f,"response text:",u.getResponseText()),f>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const _=m==null?void 0:m.error;if(_&&_.status&&_.message){const T=function(b){const I=b.toLowerCase().replace(/_/g,"-");return Object.values(B).indexOf(I)>=0?I:B.UNKNOWN}(_.status);l(new Y(T,_.message))}else l(new Y(B.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new Y(B.UNAVAILABLE,"Connection failed."));break;default:ue()}}finally{Z(jt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);Z(jt,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Lo(e,n,r){const i=qd(),s=[this.bo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=NT(),l=bT(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.xmlHttpFactory=new xT({})),this.xo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");Z(jt,`Creating RPC '${e}' stream ${i}: ${d}`,u);const f=o.createWebChannel(d,u);let m=!1,_=!1;const T=new M4({Po:b=>{_?Z(jt,`Not sending because RPC '${e}' stream ${i} is closed:`,b):(m||(Z(jt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),m=!0),Z(jt,`RPC '${e}' stream ${i} sending:`,b),f.send(b))},Io:()=>f.close()}),A=(b,I,v)=>{b.listen(I,S=>{try{v(S)}catch(L){setTimeout(()=>{throw L},0)}})};return A(f,Oa.EventType.OPEN,()=>{_||(Z(jt,`RPC '${e}' stream ${i} transport opened.`),T.po())}),A(f,Oa.EventType.CLOSE,()=>{_||(_=!0,Z(jt,`RPC '${e}' stream ${i} transport closed`),T.wo())}),A(f,Oa.EventType.ERROR,b=>{_||(_=!0,Co(jt,`RPC '${e}' stream ${i} transport errored:`,b),T.wo(new Y(B.UNAVAILABLE,"The operation could not be completed")))}),A(f,Oa.EventType.MESSAGE,b=>{var I;if(!_){const v=b.data[0];Me(!!v);const S=v,L=S.error||((I=S[0])===null||I===void 0?void 0:I.error);if(L){Z(jt,`RPC '${e}' stream ${i} received error:`,L);const z=L.status;let x=function(E){const R=lt[E];if(R!==void 0)return sI(R)}(z),w=L.message;x===void 0&&(x=B.INTERNAL,w="Unknown error status: "+z+" with message "+L.message),_=!0,T.wo(new Y(x,w)),f.close()}else Z(jt,`RPC '${e}' stream ${i} received:`,v),T.So(v)}}),A(l,CT.STAT_EVENT,b=>{b.stat===fp.PROXY?Z(jt,`RPC '${e}' stream ${i} detected buffering proxy`):b.stat===fp.NOPROXY&&Z(jt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{T.yo()},0),T}}function Kd(){return typeof document<"u"?document:null}/**
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
 */function Bh(t){return new KD(t,!0)}/**
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
 */class yI{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ai=e,this.timerId=n,this.Bo=r,this.ko=i,this.qo=s,this.Qo=0,this.Ko=null,this.$o=Date.now(),this.reset()}reset(){this.Qo=0}Uo(){this.Qo=this.qo}Wo(e){this.cancel();const n=Math.floor(this.Qo+this.Go()),r=Math.max(0,Date.now()-this.$o),i=Math.max(0,n-r);i>0&&Z("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Qo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Ko=this.ai.enqueueAfterDelay(this.timerId,i,()=>(this.$o=Date.now(),e())),this.Qo*=this.ko,this.Qo<this.Bo&&(this.Qo=this.Bo),this.Qo>this.qo&&(this.Qo=this.qo)}zo(){this.Ko!==null&&(this.Ko.skipDelay(),this.Ko=null)}cancel(){this.Ko!==null&&(this.Ko.cancel(),this.Ko=null)}Go(){return(Math.random()-.5)*this.Qo}}/**
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
 */class vI{constructor(e,n,r,i,s,o,l,u){this.ai=e,this.jo=r,this.Ho=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Jo=0,this.Yo=null,this.Zo=null,this.stream=null,this.Xo=0,this.e_=new yI(e,n)}t_(){return this.state===1||this.state===5||this.n_()}n_(){return this.state===2||this.state===3}start(){this.Xo=0,this.state!==4?this.auth():this.r_()}async stop(){this.t_()&&await this.close(0)}i_(){this.state=0,this.e_.reset()}s_(){this.n_()&&this.Yo===null&&(this.Yo=this.ai.enqueueAfterDelay(this.jo,6e4,()=>this.o_()))}__(e){this.a_(),this.stream.send(e)}async o_(){if(this.n_())return this.close(0)}a_(){this.Yo&&(this.Yo.cancel(),this.Yo=null)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}async close(e,n){this.a_(),this.u_(),this.e_.cancel(),this.Jo++,e!==4?this.e_.reset():n&&n.code===B.RESOURCE_EXHAUSTED?(Ur(n.toString()),Ur("Using maximum backoff delay to prevent overloading the backend."),this.e_.Uo()):n&&n.code===B.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.c_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Vo(n)}c_(){}auth(){this.state=1;const e=this.l_(this.Jo),n=this.Jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Jo===n&&this.h_(r,i)},r=>{e(()=>{const i=new Y(B.UNKNOWN,"Fetching auth token failed: "+r.message);return this.P_(i)})})}h_(e,n){const r=this.l_(this.Jo);this.stream=this.I_(e,n),this.stream.To(()=>{r(()=>this.listener.To())}),this.stream.Ao(()=>{r(()=>(this.state=2,this.Zo=this.ai.enqueueAfterDelay(this.Ho,1e4,()=>(this.n_()&&(this.state=3),Promise.resolve())),this.listener.Ao()))}),this.stream.Vo(i=>{r(()=>this.P_(i))}),this.stream.onMessage(i=>{r(()=>++this.Xo==1?this.T_(i):this.onNext(i))})}r_(){this.state=5,this.e_.Wo(async()=>{this.state=0,this.start()})}P_(e){return Z("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}l_(e){return n=>{this.ai.enqueueAndForget(()=>this.Jo===e?n():(Z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class U4 extends vI{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}I_(e,n){return this.connection.Lo("Listen",e,n)}T_(e){return this.onNext(e)}onNext(e){this.e_.reset();const n=YD(this.serializer,e),r=function(s){if(!("targetChange"in s))return he.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?he.min():o.readTime?fr(o.readTime):he.min()}(e);return this.listener.E_(n,r)}d_(e){const n={};n.database=Ip(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=yp(u)?{documents:ZD(s,u)}:{query:e4(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=lI(s,o.resumeToken);const c=wp(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(he.min())>0){l.readTime=eh(s,o.snapshotVersion.toTimestamp());const c=wp(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=n4(this.serializer,e);r&&(n.labels=r),this.__(n)}A_(e){const n={};n.database=Ip(this.serializer),n.removeTarget=e,this.__(n)}}class F4 extends vI{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get R_(){return this.Xo>0}start(){this.lastStreamToken=void 0,super.start()}c_(){this.R_&&this.V_([])}I_(e,n){return this.connection.Lo("Write",e,n)}T_(e){return Me(!!e.streamToken),this.lastStreamToken=e.streamToken,Me(!e.writeResults||e.writeResults.length===0),this.listener.m_()}onNext(e){Me(!!e.streamToken),this.lastStreamToken=e.streamToken,this.e_.reset();const n=JD(e.writeResults,e.commitTime),r=fr(e.commitTime);return this.listener.f_(r,n)}g_(){const e={};e.database=Ip(this.serializer),this.__(e)}V_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>XD(this.serializer,r))};this.__(n)}}/**
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
 */class j4 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.p_=!1}y_(){if(this.p_)throw new Y(B.FAILED_PRECONDITION,"The client has already been terminated.")}Fo(e,n,r,i){return this.y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Fo(e,Ep(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new Y(B.UNKNOWN,s.toString())})}No(e,n,r,i,s){return this.y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.No(e,Ep(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Y(B.UNKNOWN,o.toString())})}terminate(){this.p_=!0,this.connection.terminate()}}class z4{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.w_=0,this.S_=null,this.b_=!0}D_(){this.w_===0&&(this.C_("Unknown"),this.S_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.S_=null,this.v_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}F_(e){this.state==="Online"?this.C_("Unknown"):(this.w_++,this.w_>=1&&(this.M_(),this.v_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.M_(),this.w_=0,e==="Online"&&(this.b_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}v_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.b_?(Ur(n),this.b_=!1):Z("OnlineStateTracker",n)}M_(){this.S_!==null&&(this.S_.cancel(),this.S_=null)}}/**
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
 */class $4{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.x_=[],this.O_=new Map,this.N_=new Set,this.L_=[],this.B_=s,this.B_.oo(o=>{r.enqueueAndForget(async()=>{As(this)&&(Z("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=de(u);c.N_.add(4),await Ql(c),c.k_.set("Unknown"),c.N_.delete(4),await Hh(c)}(this))})}),this.k_=new z4(r,i)}}async function Hh(t){if(As(t))for(const e of t.L_)await e(!0)}async function Ql(t){for(const e of t.L_)await e(!1)}function _I(t,e){const n=de(t);n.O_.has(e.targetId)||(n.O_.set(e.targetId,e),cg(n)?ug(n):Qo(n).n_()&&lg(n,e))}function ag(t,e){const n=de(t),r=Qo(n);n.O_.delete(e),r.n_()&&wI(n,e),n.O_.size===0&&(r.n_()?r.s_():As(n)&&n.k_.set("Unknown"))}function lg(t,e){if(t.q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(he.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Qo(t).d_(e)}function wI(t,e){t.q_.xe(e),Qo(t).A_(e)}function ug(t){t.q_=new BD({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.O_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Qo(t).start(),t.k_.D_()}function cg(t){return As(t)&&!Qo(t).t_()&&t.O_.size>0}function As(t){return de(t).N_.size===0}function EI(t){t.q_=void 0}async function B4(t){t.k_.set("Online")}async function H4(t){t.O_.forEach((e,n)=>{lg(t,e)})}async function W4(t,e){EI(t),cg(t)?(t.k_.F_(e),ug(t)):t.k_.set("Unknown")}async function q4(t,e,n){if(t.k_.set("Online"),e instanceof aI&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.O_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.O_.delete(l),i.q_.removeTarget(l))}(t,e)}catch(r){Z("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await th(t,r)}else if(e instanceof uc?t.q_.Ke(e):e instanceof oI?t.q_.He(e):t.q_.We(e),!n.isEqual(he.min()))try{const r=await gI(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.q_.rt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.O_.get(c);d&&s.O_.set(c,d.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const d=s.O_.get(u);if(!d)return;s.O_.set(u,d.withResumeToken(Nt.EMPTY_BYTE_STRING,d.snapshotVersion)),wI(s,u);const f=new ci(d.target,u,c,d.sequenceNumber);lg(s,f)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){Z("RemoteStore","Failed to raise snapshot:",r),await th(t,r)}}async function th(t,e,n){if(!ql(e))throw e;t.N_.add(1),await Ql(t),t.k_.set("Offline"),n||(n=()=>gI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Z("RemoteStore","Retrying IndexedDB access"),await n(),t.N_.delete(1),await Hh(t)})}function TI(t,e){return e().catch(n=>th(t,n,e))}async function Wh(t){const e=de(t),n=ki(e);let r=e.x_.length>0?e.x_[e.x_.length-1].batchId:-1;for(;K4(e);)try{const i=await C4(e.localStore,r);if(i===null){e.x_.length===0&&n.s_();break}r=i.batchId,G4(e,i)}catch(i){await th(e,i)}II(e)&&SI(e)}function K4(t){return As(t)&&t.x_.length<10}function G4(t,e){t.x_.push(e);const n=ki(t);n.n_()&&n.R_&&n.V_(e.mutations)}function II(t){return As(t)&&!ki(t).t_()&&t.x_.length>0}function SI(t){ki(t).start()}async function Q4(t){ki(t).g_()}async function Y4(t){const e=ki(t);for(const n of t.x_)e.V_(n.mutations)}async function X4(t,e,n){const r=t.x_.shift(),i=tg.from(r,e,n);await TI(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Wh(t)}async function J4(t,e){e&&ki(t).R_&&await async function(r,i){if(function(o){return jD(o)&&o!==B.ABORTED}(i.code)){const s=r.x_.shift();ki(r).i_(),await TI(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Wh(r)}}(t,e),II(t)&&SI(t)}async function Z_(t,e){const n=de(t);n.asyncQueue.verifyOperationInProgress(),Z("RemoteStore","RemoteStore received new credentials");const r=As(n);n.N_.add(3),await Ql(n),r&&n.k_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.N_.delete(3),await Hh(n)}async function Z4(t,e){const n=de(t);e?(n.N_.delete(2),await Hh(n)):e||(n.N_.add(2),await Ql(n),n.k_.set("Unknown"))}function Qo(t){return t.Q_||(t.Q_=function(n,r,i){const s=de(n);return s.y_(),new U4(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{To:B4.bind(null,t),Ao:H4.bind(null,t),Vo:W4.bind(null,t),E_:q4.bind(null,t)}),t.L_.push(async e=>{e?(t.Q_.i_(),cg(t)?ug(t):t.k_.set("Unknown")):(await t.Q_.stop(),EI(t))})),t.Q_}function ki(t){return t.K_||(t.K_=function(n,r,i){const s=de(n);return s.y_(),new F4(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{To:()=>Promise.resolve(),Ao:Q4.bind(null,t),Vo:J4.bind(null,t),m_:Y4.bind(null,t),f_:X4.bind(null,t)}),t.L_.push(async e=>{e?(t.K_.i_(),await Wh(t)):(await t.K_.stop(),t.x_.length>0&&(Z("RemoteStore",`Stopping write stream with ${t.x_.length} pending writes`),t.x_=[]))})),t.K_}/**
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
 */class hg{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Ti,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new hg(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Y(B.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function dg(t,e){if(Ur("AsyncQueue",`${e}: ${t}`),ql(t))return new Y(B.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class mo{constructor(e){this.comparator=e?(n,r)=>e(n,r)||ie.comparator(n.key,r.key):(n,r)=>ie.comparator(n.key,r.key),this.keyedMap=Ma(),this.sortedSet=new Je(this.comparator)}static emptySet(e){return new mo(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof mo)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class e0{constructor(){this.U_=new Je(ie.comparator)}track(e){const n=e.doc.key,r=this.U_.get(n);r?e.type!==0&&r.type===3?this.U_=this.U_.insert(n,e):e.type===3&&r.type!==1?this.U_=this.U_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.U_=this.U_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.U_=this.U_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.U_=this.U_.remove(n):e.type===1&&r.type===2?this.U_=this.U_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.U_=this.U_.insert(n,{type:2,doc:e.doc}):ue():this.U_=this.U_.insert(n,e)}W_(){const e=[];return this.U_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Oo{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Oo(e,n,mo.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Uh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class eL{constructor(){this.G_=void 0,this.z_=[]}j_(){return this.z_.some(e=>e.H_())}}class tL{constructor(){this.queries=t0(),this.onlineState="Unknown",this.J_=new Set}terminate(){(function(n,r){const i=de(n),s=i.queries;i.queries=t0(),s.forEach((o,l)=>{for(const u of l.z_)u.onError(r)})})(this,new Y(B.ABORTED,"Firestore shutting down"))}}function t0(){return new Go(t=>WT(t),Uh)}async function RI(t,e){const n=de(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.j_()&&e.H_()&&(r=2):(s=new eL,r=e.H_()?0:1);try{switch(r){case 0:s.G_=await n.onListen(i,!0);break;case 1:s.G_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=dg(o,`Initialization of query '${js(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.z_.push(e),e.Y_(n.onlineState),s.G_&&e.Z_(s.G_)&&fg(n)}async function AI(t,e){const n=de(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.z_.indexOf(e);o>=0&&(s.z_.splice(o,1),s.z_.length===0?i=e.H_()?0:1:!s.j_()&&e.H_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function nL(t,e){const n=de(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.z_)l.Z_(i)&&(r=!0);o.G_=i}}r&&fg(n)}function rL(t,e,n){const r=de(t),i=r.queries.get(e);if(i)for(const s of i.z_)s.onError(n);r.queries.delete(e)}function fg(t){t.J_.forEach(e=>{e.next()})}var Rp,n0;(n0=Rp||(Rp={})).X_="default",n0.Cache="cache";class PI{constructor(e,n,r){this.query=e,this.ea=n,this.ta=!1,this.na=null,this.onlineState="Unknown",this.options=r||{}}Z_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Oo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ta?this.ra(e)&&(this.ea.next(e),n=!0):this.ia(e,this.onlineState)&&(this.sa(e),n=!0),this.na=e,n}onError(e){this.ea.error(e)}Y_(e){this.onlineState=e;let n=!1;return this.na&&!this.ta&&this.ia(this.na,e)&&(this.sa(this.na),n=!0),n}ia(e,n){if(!e.fromCache||!this.H_())return!0;const r=n!=="Offline";return(!this.options.oa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ra(e){if(e.docChanges.length>0)return!0;const n=this.na&&this.na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}sa(e){e=Oo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ta=!0,this.ea.next(e)}H_(){return this.options.source!==Rp.Cache}}/**
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
 */class xI{constructor(e){this.key=e}}class kI{constructor(e){this.key=e}}class iL{constructor(e,n){this.query=e,this.Ia=n,this.Ta=null,this.hasCachedResults=!1,this.current=!1,this.Ea=we(),this.mutatedKeys=we(),this.da=qT(e),this.Aa=new mo(this.da)}get Ra(){return this.Ia}Va(e,n){const r=n?n.ma:new e0,i=n?n.Aa:this.Aa;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,f)=>{const m=i.get(d),_=Fh(this.query,f)?f:null,T=!!m&&this.mutatedKeys.has(m.key),A=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let b=!1;m&&_?m.data.isEqual(_.data)?T!==A&&(r.track({type:3,doc:_}),b=!0):this.fa(m,_)||(r.track({type:2,doc:_}),b=!0,(u&&this.da(_,u)>0||c&&this.da(_,c)<0)&&(l=!0)):!m&&_?(r.track({type:0,doc:_}),b=!0):m&&!_&&(r.track({type:1,doc:m}),b=!0,(u||c)&&(l=!0)),b&&(_?(o=o.add(_),s=A?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{Aa:o,ma:r,ts:l,mutatedKeys:s}}fa(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Aa;this.Aa=e.Aa,this.mutatedKeys=e.mutatedKeys;const o=e.ma.W_();o.sort((d,f)=>function(_,T){const A=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ue()}};return A(_)-A(T)}(d.type,f.type)||this.da(d.doc,f.doc)),this.ga(r),i=i!=null&&i;const l=n&&!i?this.pa():[],u=this.Ea.size===0&&this.current&&!i?1:0,c=u!==this.Ta;return this.Ta=u,o.length!==0||c?{snapshot:new Oo(this.query,e.Aa,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),ya:l}:{ya:l}}Y_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Aa:this.Aa,ma:new e0,mutatedKeys:this.mutatedKeys,ts:!1},!1)):{ya:[]}}wa(e){return!this.Ia.has(e)&&!!this.Aa.has(e)&&!this.Aa.get(e).hasLocalMutations}ga(e){e&&(e.addedDocuments.forEach(n=>this.Ia=this.Ia.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ia=this.Ia.delete(n)),this.current=e.current)}pa(){if(!this.current)return[];const e=this.Ea;this.Ea=we(),this.Aa.forEach(r=>{this.wa(r.key)&&(this.Ea=this.Ea.add(r.key))});const n=[];return e.forEach(r=>{this.Ea.has(r)||n.push(new kI(r))}),this.Ea.forEach(r=>{e.has(r)||n.push(new xI(r))}),n}Sa(e){this.Ia=e.Is,this.Ea=we();const n=this.Va(e.documents);return this.applyChanges(n,!0)}ba(){return Oo.fromInitialDocuments(this.query,this.Aa,this.mutatedKeys,this.Ta===0,this.hasCachedResults)}}class sL{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class oL{constructor(e){this.key=e,this.Da=!1}}class aL{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.va=new Go(l=>WT(l),Uh),this.Fa=new Map,this.Ma=new Set,this.xa=new Je(ie.comparator),this.Oa=new Map,this.Na=new ig,this.La={},this.Ba=new Map,this.ka=Lo.Bn(),this.onlineState="Unknown",this.qa=void 0}get isPrimaryClient(){return this.qa===!0}}async function lL(t,e,n=!0){const r=OI(t);let i;const s=r.va.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ba()):i=await CI(r,e,n,!0),i}async function uL(t,e){const n=OI(t);await CI(n,e,!0,!1)}async function CI(t,e,n,r){const i=await b4(t.localStore,hr(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let l;return r&&(l=await cL(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&_I(t.remoteStore,i),l}async function cL(t,e,n,r,i){t.Qa=(f,m,_)=>async function(A,b,I,v){let S=b.view.Va(I);S.ts&&(S=await Y_(A.localStore,b.query,!1).then(({documents:w})=>b.view.Va(w,S)));const L=v&&v.targetChanges.get(b.targetId),z=v&&v.targetMismatches.get(b.targetId)!=null,x=b.view.applyChanges(S,A.isPrimaryClient,L,z);return i0(A,b.targetId,x.ya),x.snapshot}(t,f,m,_);const s=await Y_(t.localStore,e,!0),o=new iL(e,s.Is),l=o.Va(s.documents),u=Gl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);i0(t,n,c.ya);const d=new sL(e,n,o);return t.va.set(e,d),t.Fa.has(n)?t.Fa.get(n).push(e):t.Fa.set(n,[e]),c.snapshot}async function hL(t,e,n){const r=de(t),i=r.va.get(e),s=r.Fa.get(i.targetId);if(s.length>1)return r.Fa.set(i.targetId,s.filter(o=>!Uh(o,e))),void r.va.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Sp(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&ag(r.remoteStore,i.targetId),Ap(r,i.targetId)}).catch(Wl)):(Ap(r,i.targetId),await Sp(r.localStore,i.targetId,!0))}async function dL(t,e){const n=de(t),r=n.va.get(e),i=n.Fa.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),ag(n.remoteStore,r.targetId))}async function fL(t,e,n){const r=wL(t);try{const i=await function(o,l){const u=de(o),c=vt.now(),d=l.reduce((_,T)=>_.add(T.key),we());let f,m;return u.persistence.runTransaction("Locally write mutations","readwrite",_=>{let T=Fr(),A=we();return u.us.getEntries(_,d).next(b=>{T=b,T.forEach((I,v)=>{v.isValidDocument()||(A=A.add(I))})}).next(()=>u.localDocuments.getOverlayedDocuments(_,T)).next(b=>{f=b;const I=[];for(const v of l){const S=OD(v,f.get(v.key).overlayedDocument);S!=null&&I.push(new Mi(v.key,S,VT(S.value.mapValue),dr.exists(!0)))}return u.mutationQueue.addMutationBatch(_,c,I,l)}).next(b=>{m=b;const I=b.applyToLocalDocumentSet(f,A);return u.documentOverlayCache.saveOverlays(_,b.batchId,I)})}).then(()=>({batchId:m.batchId,changes:GT(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.La[o.currentUser.toKey()];c||(c=new Je(Pe)),c=c.insert(l,u),o.La[o.currentUser.toKey()]=c}(r,i.batchId,n),await Yl(r,i.changes),await Wh(r.remoteStore)}catch(i){const s=dg(i,"Failed to persist write");n.reject(s)}}async function bI(t,e){const n=de(t);try{const r=await x4(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Oa.get(s);o&&(Me(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Da=!0:i.modifiedDocuments.size>0?Me(o.Da):i.removedDocuments.size>0&&(Me(o.Da),o.Da=!1))}),await Yl(n,r,e)}catch(r){await Wl(r)}}function r0(t,e,n){const r=de(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.va.forEach((s,o)=>{const l=o.view.Y_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=de(o);u.onlineState=l;let c=!1;u.queries.forEach((d,f)=>{for(const m of f.z_)m.Y_(l)&&(c=!0)}),c&&fg(u)}(r.eventManager,e),i.length&&r.Ca.E_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function pL(t,e,n){const r=de(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Oa.get(e),s=i&&i.key;if(s){let o=new Je(ie.comparator);o=o.insert(s,Bt.newNoDocument(s,he.min()));const l=we().add(s),u=new $h(he.min(),new Map,new Je(Pe),o,l);await bI(r,u),r.xa=r.xa.remove(s),r.Oa.delete(e),pg(r)}else await Sp(r.localStore,e,!1).then(()=>Ap(r,e,n)).catch(Wl)}async function mL(t,e){const n=de(t),r=e.batch.batchId;try{const i=await P4(n.localStore,e);DI(n,r,null),NI(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Yl(n,i)}catch(i){await Wl(i)}}async function gL(t,e,n){const r=de(t);try{const i=await function(o,l){const u=de(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,l).next(f=>(Me(f!==null),d=f.keys(),u.mutationQueue.removeMutationBatch(c,f))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);DI(r,e,n),NI(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Yl(r,i)}catch(i){await Wl(i)}}function NI(t,e){(t.Ba.get(e)||[]).forEach(n=>{n.resolve()}),t.Ba.delete(e)}function DI(t,e,n){const r=de(t);let i=r.La[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.La[r.currentUser.toKey()]=i}}function Ap(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Fa.get(e))t.va.delete(r),n&&t.Ca.Ka(r,n);t.Fa.delete(e),t.isPrimaryClient&&t.Na.mr(e).forEach(r=>{t.Na.containsKey(r)||LI(t,r)})}function LI(t,e){t.Ma.delete(e.path.canonicalString());const n=t.xa.get(e);n!==null&&(ag(t.remoteStore,n),t.xa=t.xa.remove(e),t.Oa.delete(n),pg(t))}function i0(t,e,n){for(const r of n)r instanceof xI?(t.Na.addReference(r.key,e),yL(t,r)):r instanceof kI?(Z("SyncEngine","Document no longer in limbo: "+r.key),t.Na.removeReference(r.key,e),t.Na.containsKey(r.key)||LI(t,r.key)):ue()}function yL(t,e){const n=e.key,r=n.path.canonicalString();t.xa.get(n)||t.Ma.has(r)||(Z("SyncEngine","New document in limbo: "+n),t.Ma.add(r),pg(t))}function pg(t){for(;t.Ma.size>0&&t.xa.size<t.maxConcurrentLimboResolutions;){const e=t.Ma.values().next().value;t.Ma.delete(e);const n=new ie($e.fromString(e)),r=t.ka.next();t.Oa.set(r,new oL(n)),t.xa=t.xa.insert(n,r),_I(t.remoteStore,new ci(hr(Vh(n.path)),r,"TargetPurposeLimboResolution",Qm.oe))}}async function Yl(t,e,n){const r=de(t),i=[],s=[],o=[];r.va.isEmpty()||(r.va.forEach((l,u)=>{o.push(r.Qa(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const f=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(c){i.push(c);const f=og.Ui(u.targetId,c);s.push(f)}}))}),await Promise.all(o),r.Ca.E_(i),await async function(u,c){const d=de(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>H.forEach(c,m=>H.forEach(m.Ki,_=>d.persistence.referenceDelegate.addReference(f,m.targetId,_)).next(()=>H.forEach(m.$i,_=>d.persistence.referenceDelegate.removeReference(f,m.targetId,_)))))}catch(f){if(!ql(f))throw f;Z("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const m=f.targetId;if(!f.fromCache){const _=d.ss.get(m),T=_.snapshotVersion,A=_.withLastLimboFreeSnapshotVersion(T);d.ss=d.ss.insert(m,A)}}}(r.localStore,s))}async function vL(t,e){const n=de(t);if(!n.currentUser.isEqual(e)){Z("SyncEngine","User change. New user:",e.toKey());const r=await mI(n.localStore,e);n.currentUser=e,function(s,o){s.Ba.forEach(l=>{l.forEach(u=>{u.reject(new Y(B.CANCELLED,o))})}),s.Ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Yl(n,r.ls)}}function _L(t,e){const n=de(t),r=n.Oa.get(e);if(r&&r.Da)return we().add(r.key);{let i=we();const s=n.Fa.get(e);if(!s)return i;for(const o of s){const l=n.va.get(o);i=i.unionWith(l.view.Ra)}return i}}function OI(t){const e=de(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=bI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=_L.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=pL.bind(null,e),e.Ca.E_=nL.bind(null,e.eventManager),e.Ca.Ka=rL.bind(null,e.eventManager),e}function wL(t){const e=de(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=mL.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=gL.bind(null,e),e}class s0{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Bh(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return A4(this.persistence,new S4,e.initialUser,this.serializer)}createPersistence(e){return new E4(sg.Yr,this.serializer)}createSharedClientState(e){return new D4}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class EL{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>r0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=vL.bind(null,this.syncEngine),await Z4(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new tL}()}createDatastore(e){const n=Bh(e.databaseInfo.databaseId),r=function(s){return new V4(s)}(e.databaseInfo);return function(s,o,l,u){return new j4(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new $4(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>r0(this.syncEngine,n,0),function(){return J_.D()?new J_:new L4}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,d){const f=new aL(i,s,o,l,u,c);return d&&(f.qa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=de(i);Z("RemoteStore","RemoteStore shutting down."),s.N_.add(5),await Ql(s),s.B_.shutdown(),s.k_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}/**
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
 */class TL{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=zt.UNAUTHENTICATED,this.clientId=LT.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{Z("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(Z("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Y(B.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ti;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=dg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Gd(t,e){t.asyncQueue.verifyOperationInProgress(),Z("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await mI(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function o0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await SL(t);Z("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Z_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Z_(e.remoteStore,i)),t._onlineComponents=e}function IL(t){return t.name==="FirebaseError"?t.code===B.FAILED_PRECONDITION||t.code===B.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function SL(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Z("FirestoreClient","Using user provided OfflineComponentProvider");try{await Gd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!IL(n))throw n;Co("Error using user provided cache. Falling back to memory cache: "+n),await Gd(t,new s0)}}else Z("FirestoreClient","Using default OfflineComponentProvider"),await Gd(t,new s0);return t._offlineComponents}async function VI(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Z("FirestoreClient","Using user provided OnlineComponentProvider"),await o0(t,t._uninitializedComponentsProvider._online)):(Z("FirestoreClient","Using default OnlineComponentProvider"),await o0(t,new EL))),t._onlineComponents}function RL(t){return VI(t).then(e=>e.syncEngine)}async function Pp(t){const e=await VI(t),n=e.eventManager;return n.onListen=lL.bind(null,e.syncEngine),n.onUnlisten=hL.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=uL.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=dL.bind(null,e.syncEngine),n}function AL(t,e,n={}){const r=new Ti;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new MI({next:m=>{o.enqueueAndForget(()=>AI(s,f));const _=m.docs.has(l);!_&&m.fromCache?c.reject(new Y(B.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&m.fromCache&&u&&u.source==="server"?c.reject(new Y(B.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new PI(Vh(l.path),d,{includeMetadataChanges:!0,oa:!0});return RI(s,f)}(await Pp(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function FI(t,e,n){if(!n)throw new Y(B.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function PL(t,e,n,r){if(e===!0&&r===!0)throw new Y(B.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function l0(t){if(!ie.isDocumentKey(t))throw new Y(B.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function u0(t){if(ie.isDocumentKey(t))throw new Y(B.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function qh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ue()}function pr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Y(B.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=qh(t);throw new Y(B.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class c0{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Y(B.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Y(B.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}PL("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=UI((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new Y(B.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new Y(B.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new Y(B.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Kh{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new c0({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Y(B.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new Y(B.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new c0(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new WN;switch(r.type){case"firstParty":return new QN(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Y(B.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=a0.get(n);r&&(Z("ComponentProvider","Removing Datastore"),a0.delete(n),r.terminate())}(this),Promise.resolve()}}function xL(t,e,n,r={}){var i;const s=(t=pr(t,Kh))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Co("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=zt.MOCK_USER;else{l=jE(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new Y(B.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new zt(c)}t._authCredentials=new qN(new DT(l,u))}}/**
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
 */class Ps{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ps(this.firestore,e,this._query)}}class Wt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ii(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Wt(this.firestore,e,this._key)}}class Ii extends Ps{constructor(e,n,r){super(e,n,Vh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Wt(this.firestore,null,new ie(e))}withConverter(e){return new Ii(this.firestore,e,this._path)}}function h0(t,e,...n){if(t=nt(t),FI("collection","path",e),t instanceof Kh){const r=$e.fromString(e,...n);return u0(r),new Ii(t,null,r)}{if(!(t instanceof Wt||t instanceof Ii))throw new Y(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child($e.fromString(e,...n));return u0(r),new Ii(t.firestore,null,r)}}function nh(t,e,...n){if(t=nt(t),arguments.length===1&&(e=LT.newId()),FI("doc","path",e),t instanceof Kh){const r=$e.fromString(e,...n);return l0(r),new Wt(t,null,new ie(r))}{if(!(t instanceof Wt||t instanceof Ii))throw new Y(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child($e.fromString(e,...n));return l0(r),new Wt(t.firestore,t instanceof Ii?t.converter:null,new ie(r))}}/**
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
 */class kL{constructor(){this._u=Promise.resolve(),this.au=[],this.uu=!1,this.cu=[],this.lu=null,this.hu=!1,this.Pu=!1,this.Iu=[],this.e_=new yI(this,"async_queue_retry"),this.Tu=()=>{const n=Kd();n&&Z("AsyncQueue","Visibility state changed to "+n.visibilityState),this.e_.zo()};const e=Kd();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Tu)}get isShuttingDown(){return this.uu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Eu(),this.du(e)}enterRestrictedMode(e){if(!this.uu){this.uu=!0,this.Pu=e||!1;const n=Kd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Tu)}}enqueue(e){if(this.Eu(),this.uu)return new Promise(()=>{});const n=new Ti;return this.du(()=>this.uu&&this.Pu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.au.push(e),this.Au()))}async Au(){if(this.au.length!==0){try{await this.au[0](),this.au.shift(),this.e_.reset()}catch(e){if(!ql(e))throw e;Z("AsyncQueue","Operation failed with retryable error: "+e)}this.au.length>0&&this.e_.Wo(()=>this.Au())}}du(e){const n=this._u.then(()=>(this.hu=!0,e().catch(r=>{this.lu=r,this.hu=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Ur("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.hu=!1,r))));return this._u=n,n}enqueueAfterDelay(e,n,r){this.Eu(),this.Iu.indexOf(e)>-1&&(n=0);const i=hg.createAndSchedule(this,e,n,r,s=>this.Ru(s));return this.cu.push(i),i}Eu(){this.lu&&ue()}verifyOperationInProgress(){}async Vu(){let e;do e=this._u,await e;while(e!==this._u)}mu(e){for(const n of this.cu)if(n.timerId===e)return!0;return!1}fu(e){return this.Vu().then(()=>{this.cu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.cu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Vu()})}gu(e){this.Iu.push(e)}Ru(e){const n=this.cu.indexOf(e);this.cu.splice(n,1)}}function d0(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Mo extends Kh{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new kL}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||jI(this),this._firestoreClient.terminate()}}function CL(t,e){const n=typeof t=="object"?t:Fm(),r=typeof t=="string"?t:"(default)",i=bh(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=VE("firestore");s&&xL(i,...s)}return i}function mg(t){return t._firestoreClient||jI(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function jI(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,c,d){return new lD(l,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,UI(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new TL(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class Vo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Vo(Nt.fromBase64String(e))}catch(n){throw new Y(B.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Vo(Nt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Gh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Y(B.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Pt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class yg{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Y(B.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Y(B.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Pe(this._lat,e._lat)||Pe(this._long,e._long)}}/**
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
 */const bL=/^__.*__$/;class NL{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Mi(e,this.data,this.fieldMask,n,this.fieldTransforms):new Kl(e,this.data,n,this.fieldTransforms)}}class zI{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Mi(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function $I(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ue()}}class vg{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.pu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get yu(){return this.settings.yu}wu(e){return new vg(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.wu({path:r,bu:!1});return i.Du(e),i}Cu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.wu({path:r,bu:!1});return i.pu(),i}vu(e){return this.wu({path:void 0,bu:!0})}Fu(e){return rh(e,this.settings.methodName,this.settings.Mu||!1,this.path,this.settings.xu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Du(this.path.get(e))}Du(e){if(e.length===0)throw this.Fu("Document fields must not be empty");if($I(this.yu)&&bL.test(e))throw this.Fu('Document fields cannot begin and end with "__"')}}class DL{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Bh(e)}Ou(e,n,r,i=!1){return new vg({yu:e,methodName:n,xu:r,path:Pt.emptyPath(),bu:!1,Mu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function _g(t){const e=t._freezeSettings(),n=Bh(t._databaseId);return new DL(t._databaseId,!!e.ignoreUndefinedProperties,n)}function LL(t,e,n,r,i,s={}){const o=t.Ou(s.merge||s.mergeFields?2:0,e,n,i);wg("Data must be an object, but it was:",o,r);const l=BI(r,o);let u,c;if(s.merge)u=new pn(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const f of s.mergeFields){const m=xp(e,f,n);if(!o.contains(m))throw new Y(B.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);WI(d,m)||d.push(m)}u=new pn(d),c=o.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,c=o.fieldTransforms;return new NL(new tn(l),u,c)}class Qh extends gg{_toFieldTransform(e){if(e.yu!==2)throw e.yu===1?e.Fu(`${this._methodName}() can only appear at the top level of your update data`):e.Fu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Qh}}function OL(t,e,n,r){const i=t.Ou(1,e,n);wg("Data must be an object, but it was:",i,r);const s=[],o=tn.empty();Rs(r,(u,c)=>{const d=Eg(e,u,n);c=nt(c);const f=i.Cu(d);if(c instanceof Qh)s.push(d);else{const m=Xl(c,f);m!=null&&(s.push(d),o.set(d,m))}});const l=new pn(s);return new zI(o,l,i.fieldTransforms)}function ML(t,e,n,r,i,s){const o=t.Ou(1,e,n),l=[xp(e,r,n)],u=[i];if(s.length%2!=0)throw new Y(B.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)l.push(xp(e,s[m])),u.push(s[m+1]);const c=[],d=tn.empty();for(let m=l.length-1;m>=0;--m)if(!WI(c,l[m])){const _=l[m];let T=u[m];T=nt(T);const A=o.Cu(_);if(T instanceof Qh)c.push(_);else{const b=Xl(T,A);b!=null&&(c.push(_),d.set(_,b))}}const f=new pn(c);return new zI(d,f,o.fieldTransforms)}function VL(t,e,n,r=!1){return Xl(n,t.Ou(r?4:3,e))}function Xl(t,e){if(HI(t=nt(t)))return wg("Unsupported field value:",e,t),BI(t,e);if(t instanceof gg)return function(r,i){if(!$I(i.yu))throw i.Fu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Fu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.bu&&e.yu!==4)throw e.Fu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=Xl(l,i.vu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=nt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return kD(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=vt.fromDate(r);return{timestampValue:eh(i.serializer,s)}}if(r instanceof vt){const s=new vt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:eh(i.serializer,s)}}if(r instanceof yg)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Vo)return{bytesValue:lI(i.serializer,r._byteString)};if(r instanceof Wt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Fu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:rg(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Fu(`Unsupported field value: ${qh(r)}`)}(t,e)}function BI(t,e){const n={};return OT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Rs(t,(r,i)=>{const s=Xl(i,e.Su(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function HI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof vt||t instanceof yg||t instanceof Vo||t instanceof Wt||t instanceof gg)}function wg(t,e,n){if(!HI(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=qh(n);throw r==="an object"?e.Fu(t+" a custom object"):e.Fu(t+" "+r)}}function xp(t,e,n){if((e=nt(e))instanceof Gh)return e._internalPath;if(typeof e=="string")return Eg(t,e);throw rh("Field path arguments must be of type string or ",t,!1,void 0,n)}const UL=new RegExp("[~\\*/\\[\\]]");function Eg(t,e,n){if(e.search(UL)>=0)throw rh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Gh(...e.split("."))._internalPath}catch{throw rh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function rh(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new Y(B.INVALID_ARGUMENT,l+t+u)}function WI(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class qI{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Wt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new FL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Tg("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class FL extends qI{data(){return super.data()}}function Tg(t,e){return typeof e=="string"?Eg(t,e):e instanceof Gh?e._internalPath:e._delegate._internalPath}/**
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
 */function jL(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Y(B.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ig{}class KI extends Ig{}function f0(t,e,...n){let r=[];e instanceof Ig&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Rg).length,l=s.filter(u=>u instanceof Sg).length;if(o>1||o>0&&l>0)throw new Y(B.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Sg extends KI{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Sg(e,n,r)}_apply(e){const n=this._parse(e);return GI(e._query,n),new Ps(e.firestore,e.converter,vp(e._query,n))}_parse(e){const n=_g(e.firestore);return function(s,o,l,u,c,d,f){let m;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new Y(B.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){m0(f,d);const _=[];for(const T of f)_.push(p0(u,s,T));m={arrayValue:{values:_}}}else m=p0(u,s,f)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||m0(f,d),m=VL(l,o,f,d==="in"||d==="not-in");return ft.create(c,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Rg extends Ig{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Rg(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Kn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)GI(o,u),o=vp(o,u)}(e._query,n),new Ps(e.firestore,e.converter,vp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ag extends KI{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Ag(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new Y(B.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new Y(B.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new kl(s,o)}(e._query,this._field,this._direction);return new Ps(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Ko(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function zL(t,e="asc"){const n=e,r=Tg("orderBy",t);return Ag._create(r,n)}function p0(t,e,n){if(typeof(n=nt(n))=="string"){if(n==="")throw new Y(B.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!HT(e)&&n.indexOf("/")!==-1)throw new Y(B.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child($e.fromString(n));if(!ie.isDocumentKey(r))throw new Y(B.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return D_(t,new ie(r))}if(n instanceof Wt)return D_(t,n._key);throw new Y(B.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${qh(n)}.`)}function m0(t,e){if(!Array.isArray(t)||t.length===0)throw new Y(B.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function GI(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new Y(B.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Y(B.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class $L{convertValue(e,n="none"){switch(vs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ct(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ys(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ue()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Rs(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new yg(ct(e.latitude),ct(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Xm(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Al(e));default:return null}}convertTimestamp(e){const n=xi(e);return new vt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=$e.fromString(e);Me(pI(r));const i=new Pl(r.get(1),r.get(3)),s=new ie(r.popFirst(5));return i.isEqual(n)||Ur(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function BL(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class Ua{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class QI extends qI{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new cc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Tg("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class cc extends QI{data(e={}){return super.data(e)}}class HL{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ua(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new cc(this._firestore,this._userDataWriter,r.key,r,new Ua(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Y(B.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new cc(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ua(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new cc(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ua(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:WL(l.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function WL(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ue()}}/**
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
 */function kp(t){t=pr(t,Wt);const e=pr(t.firestore,Mo);return AL(mg(e),t._key).then(n=>JI(e,t,n))}class YI extends $L{constructor(e){super(),this.firestore=e}convertBytes(e){return new Vo(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Wt(this.firestore,null,n)}}function qL(t,e,n){t=pr(t,Wt);const r=pr(t.firestore,Mo),i=BL(t.converter,e);return XI(r,[LL(_g(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,dr.none())])}function Qd(t,e,n,...r){t=pr(t,Wt);const i=pr(t.firestore,Mo),s=_g(i);let o;return o=typeof(e=nt(e))=="string"||e instanceof Gh?ML(s,"updateDoc",t._key,e,n,r):OL(s,"updateDoc",t._key,e),XI(i,[o.toMutation(t._key,dr.exists(!0))])}function g0(t,...e){var n,r,i;t=nt(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||d0(e[o])||(s=e[o],o++);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(d0(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let u,c,d;if(t instanceof Wt)c=pr(t.firestore,Mo),d=Vh(t._key.path),u={next:f=>{e[o]&&e[o](JI(c,t,f))},error:e[o+1],complete:e[o+2]};else{const f=pr(t,Ps);c=pr(f.firestore,Mo),d=f._query;const m=new YI(c);u={next:_=>{e[o]&&e[o](new HL(c,m,f,_))},error:e[o+1],complete:e[o+2]},jL(t._query)}return function(m,_,T,A){const b=new MI(A),I=new PI(_,b,T);return m.asyncQueue.enqueueAndForget(async()=>RI(await Pp(m),I)),()=>{b.Ga(),m.asyncQueue.enqueueAndForget(async()=>AI(await Pp(m),I))}}(mg(c),d,l,u)}function XI(t,e){return function(r,i){const s=new Ti;return r.asyncQueue.enqueueAndForget(async()=>fL(await RL(r),i,s)),s.promise}(mg(t),e)}function JI(t,e,n){const r=n.docs.get(e._key),i=new YI(t);return new QI(t,i,e._key,r,new Ua(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){qo=i})(Is),fs(new Ai("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Mo(new KN(r.getProvider("auth-internal")),new XN(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new Y(B.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Pl(c.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),lr(k_,"4.6.5",e),lr(k_,"4.6.5","esm2017")})();/**
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
 */const ZI="firebasestorage.googleapis.com",eS="storageBucket",KL=2*60*1e3,GL=10*60*1e3;/**
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
 */class it extends kn{constructor(e,n,r=0){super(Yd(e),`Firebase Storage: ${n} (${Yd(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,it.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Yd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var rt;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(rt||(rt={}));function Yd(t){return"storage/"+t}function Pg(){const t="An unknown error occurred, please check the error payload for server response.";return new it(rt.UNKNOWN,t)}function QL(t){return new it(rt.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function YL(t){return new it(rt.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function XL(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new it(rt.UNAUTHENTICATED,t)}function JL(){return new it(rt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function ZL(t){return new it(rt.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function eO(){return new it(rt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function tO(){return new it(rt.CANCELED,"User canceled the upload/download.")}function nO(t){return new it(rt.INVALID_URL,"Invalid URL '"+t+"'.")}function rO(t){return new it(rt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function iO(){return new it(rt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+eS+"' property when initializing the app?")}function sO(){return new it(rt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function oO(){return new it(rt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function aO(t){return new it(rt.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Cp(t){return new it(rt.INVALID_ARGUMENT,t)}function tS(){return new it(rt.APP_DELETED,"The Firebase app was deleted.")}function lO(t){return new it(rt.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function el(t,e){return new it(rt.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Aa(t){throw new it(rt.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class mn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=mn.makeFromUrl(e,n)}catch{return new mn(e,"")}if(r.path==="")return r;throw rO(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(L){L.path.charAt(L.path.length-1)==="/"&&(L.path_=L.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function c(L){L.path_=decodeURIComponent(L.path)}const d="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",_=new RegExp(`^https?://${f}/${d}/b/${i}/o${m}`,"i"),T={bucket:1,path:3},A=n===ZI?"(?:storage.googleapis.com|storage.cloud.google.com)":n,b="([^?#]*)",I=new RegExp(`^https?://${A}/${i}/${b}`,"i"),S=[{regex:l,indices:u,postModify:s},{regex:_,indices:T,postModify:c},{regex:I,indices:{bucket:1,path:2},postModify:c}];for(let L=0;L<S.length;L++){const z=S[L],x=z.regex.exec(e);if(x){const w=x[z.indices.bucket];let g=x[z.indices.path];g||(g=""),r=new mn(w,g),z.postModify(r);break}}if(r==null)throw nO(e);return r}}class uO{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function cO(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function u(){return l===2}let c=!1;function d(...b){c||(c=!0,e.apply(null,b))}function f(b){i=setTimeout(()=>{i=null,t(_,u())},b)}function m(){s&&clearTimeout(s)}function _(b,...I){if(c){m();return}if(b){m(),d.call(null,b,...I);return}if(u()||o){m(),d.call(null,b,...I);return}r<64&&(r*=2);let S;l===1?(l=2,S=0):S=(r+Math.random())*1e3,f(S)}let T=!1;function A(b){T||(T=!0,m(),!c&&(i!==null?(b||(l=2),clearTimeout(i),f(0)):b||(l=1)))}return f(0),s=setTimeout(()=>{o=!0,A(!0)},n),A}function hO(t){t(!1)}/**
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
 */function dO(t){return t!==void 0}function fO(t){return typeof t=="object"&&!Array.isArray(t)}function xg(t){return typeof t=="string"||t instanceof String}function y0(t){return kg()&&t instanceof Blob}function kg(){return typeof Blob<"u"}function v0(t,e,n,r){if(r<e)throw Cp(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Cp(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function pO(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class mO{constructor(e,n,r,i,s,o,l,u,c,d,f,m=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=f,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((_,T)=>{this.resolve_=_,this.reject_=T,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Mu(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const u=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===ss.NO_ERROR,u=s.getStatus();if(!l||pO(u,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===ss.ABORT;r(!1,new Mu(!1,null,d));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new Mu(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());dO(u)?s(u):s()}catch(u){o(u)}else if(l!==null){const u=Pg();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(i.canceled){const u=this.appDelete_?tS():tO();o(u)}else{const u=eO();o(u)}};this.canceled_?n(!1,new Mu(!1,null,!0)):this.backoffId_=cO(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&hO(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Mu{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function gO(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function yO(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function vO(t,e){e&&(t["X-Firebase-GMPID"]=e)}function _O(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function wO(t,e,n,r,i,s,o=!0){const l=nS(t.urlParams),u=t.url+l,c=Object.assign({},t.headers);return vO(c,e),gO(c,n),yO(c,s),_O(c,r),new mO(u,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function EO(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function TO(...t){const e=EO();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(kg())return new Blob(t);throw new it(rt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function IO(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function SO(t){if(typeof atob>"u")throw aO("base-64");return atob(t)}/**
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
 */const sr={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Xd{constructor(e,n){this.data=e,this.contentType=n||null}}function RO(t,e){switch(t){case sr.RAW:return new Xd(rS(e));case sr.BASE64:case sr.BASE64URL:return new Xd(iS(t,e));case sr.DATA_URL:return new Xd(PO(e),xO(e))}throw Pg()}function rS(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function AO(t){let e;try{e=decodeURIComponent(t)}catch{throw el(sr.DATA_URL,"Malformed data URL.")}return rS(e)}function iS(t,e){switch(t){case sr.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw el(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case sr.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw el(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=SO(e)}catch(i){throw i.message.includes("polyfill")?i:el(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class sS{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw el(sr.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=kO(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function PO(t){const e=new sS(t);return e.base64?iS(sr.BASE64,e.rest):AO(e.rest)}function xO(t){return new sS(t).contentType}function kO(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class ai{constructor(e,n){let r=0,i="";y0(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(y0(this.data_)){const r=this.data_,i=IO(r,e,n);return i===null?null:new ai(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new ai(r,!0)}}static getBlob(...e){if(kg()){const n=e.map(r=>r instanceof ai?r.data_:r);return new ai(TO.apply(null,n))}else{const n=e.map(o=>xg(o)?RO(sr.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)i[s++]=o[l]}),new ai(i,!0)}}uploadData(){return this.data_}}/**
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
 */function oS(t){let e;try{e=JSON.parse(t)}catch{return null}return fO(e)?e:null}/**
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
 */function CO(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function bO(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function aS(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function NO(t,e){return e}class Kt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||NO}}let Vu=null;function DO(t){return!xg(t)||t.length<2?t:aS(t)}function lS(){if(Vu)return Vu;const t=[];t.push(new Kt("bucket")),t.push(new Kt("generation")),t.push(new Kt("metageneration")),t.push(new Kt("name","fullPath",!0));function e(s,o){return DO(o)}const n=new Kt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Kt("size");return i.xform=r,t.push(i),t.push(new Kt("timeCreated")),t.push(new Kt("updated")),t.push(new Kt("md5Hash",null,!0)),t.push(new Kt("cacheControl",null,!0)),t.push(new Kt("contentDisposition",null,!0)),t.push(new Kt("contentEncoding",null,!0)),t.push(new Kt("contentLanguage",null,!0)),t.push(new Kt("contentType",null,!0)),t.push(new Kt("metadata","customMetadata",!0)),Vu=t,Vu}function LO(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new mn(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function OO(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return LO(r,t),r}function uS(t,e,n){const r=oS(e);return r===null?null:OO(t,r,n)}function MO(t,e,n,r){const i=oS(e);if(i===null||!xg(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const d=t.bucket,f=t.fullPath,m="/b/"+o(d)+"/o/"+o(f),_=Cg(m,n,r),T=nS({alt:"media",token:c});return _+T})[0]}function VO(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class cS{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function hS(t){if(!t)throw Pg()}function UO(t,e){function n(r,i){const s=uS(t,i,e);return hS(s!==null),s}return n}function FO(t,e){function n(r,i){const s=uS(t,i,e);return hS(s!==null),MO(s,i,t.host,t._protocol)}return n}function dS(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=JL():i=XL():n.getStatus()===402?i=YL(t.bucket):n.getStatus()===403?i=ZL(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function jO(t){const e=dS(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=QL(t.path)),s.serverResponse=i.serverResponse,s}return n}function zO(t,e,n){const r=e.fullServerUrl(),i=Cg(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,l=new cS(i,s,FO(t,n),o);return l.errorHandler=jO(e),l}function $O(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function BO(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=$O(null,e)),r}function HO(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let S="";for(let L=0;L<2;L++)S=S+Math.random().toString().slice(2);return S}const u=l();o["Content-Type"]="multipart/related; boundary="+u;const c=BO(e,r,i),d=VO(c,n),f="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,m=`\r
--`+u+"--",_=ai.getBlob(f,r,m);if(_===null)throw sO();const T={name:c.fullPath},A=Cg(s,t.host,t._protocol),b="POST",I=t.maxUploadRetryTime,v=new cS(A,b,UO(t,n),I);return v.urlParams=T,v.headers=o,v.body=_.uploadData(),v.errorHandler=dS(e),v}class WO{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ss.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ss.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ss.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Aa("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Aa("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Aa("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Aa("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Aa("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class qO extends WO{initXhr(){this.xhr_.responseType="text"}}function fS(){return new qO}/**
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
 */class _s{constructor(e,n){this._service=e,n instanceof mn?this._location=n:this._location=mn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new _s(e,n)}get root(){const e=new mn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return aS(this._location.path)}get storage(){return this._service}get parent(){const e=CO(this._location.path);if(e===null)return null;const n=new mn(this._location.bucket,e);return new _s(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw lO(e)}}function KO(t,e,n){t._throwIfRoot("uploadBytes");const r=HO(t.storage,t._location,lS(),new ai(e,!0),n);return t.storage.makeRequestWithTokens(r,fS).then(i=>({metadata:i,ref:t}))}function GO(t){t._throwIfRoot("getDownloadURL");const e=zO(t.storage,t._location,lS());return t.storage.makeRequestWithTokens(e,fS).then(n=>{if(n===null)throw oO();return n})}function QO(t,e){const n=bO(t._location.path,e),r=new mn(t._location.bucket,n);return new _s(t.storage,r)}/**
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
 */function YO(t){return/^[A-Za-z]+:\/\//.test(t)}function XO(t,e){return new _s(t,e)}function pS(t,e){if(t instanceof bg){const n=t;if(n._bucket==null)throw iO();const r=new _s(n,n._bucket);return e!=null?pS(r,e):r}else return e!==void 0?QO(t,e):t}function JO(t,e){if(e&&YO(e)){if(t instanceof bg)return XO(t,e);throw Cp("To use ref(service, url), the first argument must be a Storage instance.")}else return pS(t,e)}function _0(t,e){const n=e==null?void 0:e[eS];return n==null?null:mn.makeFromBucketSpec(n,t)}function ZO(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:jE(i,t.app.options.projectId))}class bg{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=ZI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=KL,this._maxUploadRetryTime=GL,this._requests=new Set,i!=null?this._bucket=mn.makeFromBucketSpec(i,this._host):this._bucket=_0(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=mn.makeFromBucketSpec(this._url,e):this._bucket=_0(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){v0("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){v0("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new _s(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new uO(tS());{const o=wO(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const w0="@firebase/storage",E0="0.12.6";/**
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
 */const mS="storage";function eM(t,e,n){return t=nt(t),KO(t,e,n)}function tM(t){return t=nt(t),GO(t)}function nM(t,e){return t=nt(t),JO(t,e)}function rM(t=Fm(),e){t=nt(t);const r=bh(t,mS).getImmediate({identifier:e}),i=VE("storage");return i&&iM(r,...i),r}function iM(t,e,n,r={}){ZO(t,e,n,r)}function sM(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new bg(n,r,i,e,Is)}function oM(){fs(new Ai(mS,sM,"PUBLIC").setMultipleInstances(!0)),lr(w0,E0,""),lr(w0,E0,"esm2017")}oM();const aM={apiKey:"AIzaSyAoB7jPca5UoD--vYdTE43HDZgqrwmDJBI",authDomain:"icecreamfactory-fbe1b.firebaseapp.com",projectId:"icecreamfactory-fbe1b",storageBucket:"icecreamfactory-fbe1b.appspot.com",messagingSenderId:"33392143586",appId:"1:33392143586:web:d8d0bec618cd4c377602bb"},Ng=BE(aM),ws=BN(Ng),lM=rM(Ng),io=CL(Ng);function uM({children:t}){return ws.currentUser===null?V.jsx(Ax,{to:"/login"}):V.jsx(V.Fragment,{children:t})}const cM=re.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,hM=re.div`
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
`,dM=re.header`
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
`,fM=re.div`
  width: 100%;
  max-width: 370px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  cursor: pointer;
`,pM=re.div`
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
`,mM=re.div`
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
`,gM=re.button`
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
`,yM=re.div`
  width: 100%;
  max-width: 370px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  &.webView {
    @media all and (max-width: 1024px) {
      display: none;
    }
  }
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
    width: 100%;
  }
`,vM=re.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: 100%;
`,_M=re.div`
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
`,wM=re.div`
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
`,EM=re.div`
  width: 100%;
  max-width: 480px;
  display: flex;
  justify-content: center;
  margin-top: 45px;
  gap: 16px;
  @media all and (max-width: 1024px) {
    padding: 0 16px;
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
`,gS=re.div`
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
`,T0=re.div`
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
`,TM=re(gS)`
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
`,IM=re.div`
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
`,I0=re.div`
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
`,SM=re.button`
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
`;re.div`
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
`;re.div`
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
`;re.div`
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
`;const RM=re.div`
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
`,AM=re.div`
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
`,yS=t=>{const{data:e,className:n}=t;return V.jsxs(yM,{className:n,children:[V.jsx("div",{className:"title",children:V.jsx("span",{children:"명예의 전당"})}),V.jsx(vM,{children:e.slice(0,3).map((r,i)=>V.jsxs(_M,{className:`${i===0?"first":i===1?"second":i===2?"third":""}`,children:[V.jsx("span",{children:r.userName}),V.jsx("span",{children:r.score})]},i))})]})},PM=re.div`
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
`,xM=re.button`
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
`,kM=re.div`
  width: 100%;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
`,CM=re.p`
  color: #fff;
  font-size: 20px;
  font-weight: 900;
  text-align: center;
  height: 34px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
`,bM=re.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  padding-top: 52px;
  gap: 16px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`,NM=re.div`
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
`;function DM(t){const{onClick:e,rankList:n}=t;return V.jsxs(PM,{children:[V.jsx(xM,{onClick:e,children:V.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:V.jsxs("g",{id:"그룹_30","data-name":"그룹 30",transform:"translate(-1844 -55)",children:[V.jsx("rect",{id:"사각형_21","data-name":"사각형 21",width:"24",height:"24",transform:"translate(1844 55)",fill:"none"}),V.jsxs("g",{id:"close_FILL0_wght400_GRAD0_opsz48",transform:"translate(1837.65 48.65)",fill:"#fff",strokeLinecap:"round",strokeLinejoin:"round",children:[V.jsx("path",{d:"M 25.11923027038574 27.05710792541504 L 24.76568031311035 26.70354843139648 L 18.35000038146973 20.28786849975586 L 11.9343204498291 26.70354843139648 L 11.58077049255371 27.05710792541504 L 11.22722053527832 26.70354843139648 L 9.996450424194336 25.4727783203125 L 9.642889976501465 25.11922836303711 L 9.996450424194336 24.76567840576172 L 16.41213035583496 18.34999847412109 L 9.996450424194336 11.93431854248047 L 9.642889976501465 11.58076858520508 L 9.996450424194336 11.22721862792969 L 11.22722053527832 9.996448516845703 L 11.58077049255371 9.642888069152832 L 11.9343204498291 9.996448516845703 L 18.35000038146973 16.41212844848633 L 24.76568031311035 9.996448516845703 L 25.11923027038574 9.642888069152832 L 25.47278022766113 9.996448516845703 L 26.70355033874512 11.22721862792969 L 27.05710983276367 11.58076858520508 L 26.70355033874512 11.93431854248047 L 20.28787040710449 18.34999847412109 L 26.70355033874512 24.76567840576172 L 27.05710983276367 25.11922836303711 L 26.70355033874512 25.4727783203125 L 25.47278022766113 26.70354843139648 L 25.11923027038574 27.05710792541504 Z",stroke:"none"}),V.jsx("path",{d:"M 25.11923027038574 26.34999847412109 L 26.35000038146973 25.11922836303711 L 19.58077049255371 18.34999847412109 L 26.35000038146973 11.58076858520508 L 25.11923027038574 10.34999847412109 L 18.35000038146973 17.11922836303711 L 11.58077049255371 10.34999847412109 L 10.35000038146973 11.58076858520508 L 17.11923027038574 18.34999847412109 L 10.35000038146973 25.11922836303711 L 11.58077049255371 26.34999847412109 L 18.35000038146973 19.58076858520508 L 25.11923027038574 26.34999847412109 M 25.11923027038574 27.34999847412109 C 24.86330795288086 27.34999847412109 24.60738563537598 27.25236892700195 24.4121208190918 27.05710792541504 L 18.35000038146973 20.9949893951416 L 12.28787994384766 27.05710792541504 C 11.8973503112793 27.44762992858887 11.26419162750244 27.44762992858887 10.87366008758545 27.05710792541504 L 9.642889976501465 25.82633781433105 C 9.252370834350586 25.4358081817627 9.252370834350586 24.80264854431152 9.642889976501465 24.41211891174316 L 15.70501041412354 18.34999847412109 L 9.642889976501465 12.28787803649902 C 9.252370834350586 11.89734840393066 9.252370834350586 11.26418876647949 9.642889976501465 10.87365818023682 L 10.87366008758545 9.642888069152832 C 11.26419162750244 9.252367973327637 11.8973503112793 9.252367973327637 12.28787994384766 9.642888069152832 L 18.35000038146973 15.7050085067749 L 24.4121208190918 9.642888069152832 C 24.80265045166016 9.252367973327637 25.43581008911133 9.252367973327637 25.82633972167969 9.642888069152832 L 27.05710983276367 10.87365818023682 C 27.44762992858887 11.26418876647949 27.44762992858887 11.89734840393066 27.05710983276367 12.28787803649902 L 20.99499130249023 18.34999847412109 L 27.05710983276367 24.41211891174316 C 27.44762992858887 24.80264854431152 27.44762992858887 25.4358081817627 27.05710983276367 25.82633781433105 L 25.82633972167969 27.05710792541504 C 25.63107490539551 27.25236892700195 25.37515258789062 27.34999847412109 25.11923027038574 27.34999847412109 Z",stroke:"none",fill:"#fff"})]})]})})}),V.jsxs(kM,{children:[V.jsx(CM,{children:"순위"}),V.jsx(yS,{data:n}),V.jsx(bM,{children:n.slice(3).map((r,i)=>V.jsxs(NM,{children:[V.jsxs("div",{className:"wrap",children:[V.jsxs("span",{className:"index",children:[i+3,"등"]}),V.jsx("img",{className:"photo",src:r.photoURL,alt:"프로필 이미지"}),V.jsx("span",{className:"name",children:r.userName})]}),V.jsx("span",{className:"score",children:r.score})]},i))})]})]})}const S0=nh(io,"icecream","Mtu2EMz2fp8FKkItKQm5"),Jd=[0,1,2,3,4,5];function LM(){const t=ws.currentUser,e=t==null?void 0:t.uid,n=t==null?void 0:t.displayName,r=t==null?void 0:t.photoURL,i=Bo(),[s,o]=j.useState(!0),[l,u]=j.useState(!1),[c,d]=j.useState([]),[f,m]=j.useState([]),[_,T]=j.useState([]),[A,b]=j.useState(""),[I,v]=j.useState(""),[S,L]=j.useState(Jd),[z,x]=j.useState(!1),[w,g]=j.useState(),E=async()=>{o(!0);try{const F=f0(h0(io,"icecream")),W=f0(h0(io,"rank"),zL("score","desc"));await g0(F,X=>{const se=X.docs.map(le=>le.data());x(se[0].loadingState),v(se[0].lastUserProfile),m(se[0].recipe),b(se[0].lastUser)}),await g0(W,X=>{const se=X.docs.map(le=>le.data());d(se)})}catch(F){console.log(F)}finally{o(!1)}},R=F=>{const W=[..._,F];T(W)},k=F=>{let W=F.slice();for(let X=W.length-1;X>0;X--){const se=Math.floor(Math.random()*(X+1));[W[X],W[se]]=[W[se],W[X]]}return W},N=()=>{const F=k(Jd);L(F)},P=async()=>{try{await ws.signOut(),i("/login")}catch(F){console.error("Error signing out: ",F)}},pe=async()=>{const F=nh(io,"rank",e),W=await kp(F);if(W.exists()){const X=W.data().score||0;g(X)}else g(0)},at=async()=>{const F=nh(io,"rank",e),W=await kp(F);if(W.exists()){const se=(W.data().score||0)+1;await Qd(F,{score:se,photoURL:r,userName:n}),g(se)}else await qL(F,{score:1,userName:n||"Unknown User",photoURL:r}),g(1)},Zt=async()=>{if(T([]),f.length!==_.length)return!1;for(let F=0;F<f.length;F++)if(f[F]!==_[F])return!1;try{await Qd(S0,{lastUserProfile:r,loadingState:!0,lastUser:n}),at()}catch(F){console.log(F)}finally{const F=k(Jd);setTimeout(()=>{Qd(S0,{loadingState:!1,recipe:F})},2e3)}},ye=()=>{u(!l)};return j.useEffect(()=>{E(),pe()},[]),j.useEffect(()=>{_.length===6&&(Zt(),N())},[_]),V.jsxs(V.Fragment,{children:[V.jsxs(cM,{children:[V.jsxs(hM,{className:z?"active":"",children:[I?V.jsx("img",{src:I,alt:"프로필 이미지"}):"",V.jsxs("span",{className:"text",children:[A," 성공!!"]}),V.jsx("div",{className:"second"}),V.jsx("div",{className:"first"})]}),V.jsxs(dM,{children:[V.jsxs(fM,{onClick:()=>{i("/profile")},children:[V.jsx(pM,{title:"마이페이지 바로가기",children:r?V.jsx("img",{src:r,alt:"프로필 이미지"}):""}),V.jsxs(mM,{title:"마이페이지 바로가기",children:[V.jsxs("div",{className:"textWrap",children:[V.jsx("span",{children:n}),V.jsx("span",{children:w})]}),V.jsx(gM,{title:"\b로그아웃",onClick:()=>{P()},children:V.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:V.jsxs("g",{id:"그룹_1","data-name":"그룹 1",transform:"translate(-254 -60)",children:[V.jsx("path",{id:"logout_24dp_5F6368_FILL0_wght400_GRAD0_opsz24",d:"M121.778-824a1.712,1.712,0,0,1-1.256-.522,1.712,1.712,0,0,1-.522-1.256v-12.444a1.712,1.712,0,0,1,.522-1.256,1.712,1.712,0,0,1,1.256-.522H128v1.778h-6.222v12.444H128V-824Zm9.778-3.556-1.222-1.289,2.267-2.267h-7.267v-1.778H132.6l-2.267-2.267,1.222-1.289L136-832Z",transform:"translate(138 904)",fill:"#fff",stroke:"#fff",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1"}),V.jsx("rect",{id:"사각형_4","data-name":"사각형 4",width:"24",height:"24",transform:"translate(254 60)",fill:"none"})]})})})]})]}),V.jsx(yS,{data:c,className:"webView"}),V.jsx(wM,{children:V.jsx("button",{title:"랭킹 보기",onClick:()=>{ye()},children:V.jsx("img",{src:"/img/ico_rank.svg",alt:"랭킹리스트 보기"})})})]}),V.jsx(EM,{children:s?V.jsx(RM,{children:"Loading..."}):V.jsxs(V.Fragment,{children:[V.jsx(gS,{children:V.jsxs(V.Fragment,{children:[V.jsx(T0,{className:"object",children:f.map((F,W)=>V.jsx(I0,{className:`${F===0?"strawberry":F===1?"choco":F===2?"mint":F===3?"vanilla":F===4?"blueberry":"greentea"} ${W===0?"one":W===1?"two":W===2?"three":W===3?"four":W===4?"five":"six"} wiggle`},W))}),V.jsx("p",{className:"title",children:"만들어주세요!"})]})}),V.jsx(TM,{children:V.jsxs(V.Fragment,{children:[V.jsx(T0,{className:"object",children:V.jsx("div",{className:`${_.length===1?"first":_.length===2?"second":_.length===3?"third":_.length===4?"fourth":_.length===5?"fifth":"sixth"}`,children:_.map((F,W)=>V.jsx(I0,{className:`
                              ${W+1===_.length?"active":""}
                              ${F===0?"strawberry":F===1?"choco":F===2?"mint":F===3?"vanilla":F===4?"blueberry":"greentea"} ${W===0?"one":W===1?"two":W===2?"three":W===3?"four":W===4?"five":"six"}`},W))})}),V.jsx("p",{className:"title",children:"나의 조합"})]})})]})}),V.jsxs(IM,{children:[V.jsx("div",{className:"buttons",children:S.map(F=>V.jsx(SM,{className:F===0?"strawberry":F===1?"choco":F===2?"mint":F===3?"vanilla":F===4?"blueberry":"greentea",onClick:()=>R(F)},F))}),V.jsx("span",{children:"SELECT ME!!!"})]})]}),l&&V.jsx(DM,{onClick:()=>{ye()},rankList:c}),V.jsx(AM,{})]})}const OM=re.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 30px 16px 0;
`,MM=re.div`
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
`,VM=re.div`
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
`,UM=re.div`
  width: 90px;
  height: 90px;
  border-radius: 23px;
  background-color: #e2b97e;
  border: 3px solid #1c1108;
  margin-bottom: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
`,FM=re.label`
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
`,jM=re.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,zM=re.input`
  display: none;
`;re.h1`
  font-size: 24px;
  font-weight: 900;
  color: #333;
`;const $M=re.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,R0=re.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  margin-bottom: 26px;
`,A0=re.p`
  font-size: 16px;
  color: #333;
  font-weight: 900;
`,P0=re.p`
  font-size: 14px;
  color: #6a5e55;
  font-weight: 900;
`,BM=re.img`
  width: 100%;
  max-width: 260px;
`,HM=re.p`
  font-size: 14px;
  font-weight: 900;
  color: #c1b18a;
  text-align: center;
  letter-spacing: -1.5px;
  padding-top: 22px;
`,WM=re.button`
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
`;function qM(){const t=ws.currentUser,[e,n]=j.useState(!0),[r,i]=j.useState(!1),[s,o]=j.useState(),[l,u]=j.useState(t==null?void 0:t.photoURL),[c,d]=j.useState(`${(t==null?void 0:t.displayName)??"Anonymous"}`),f=Bo(),m=async()=>{var T;n(!0);try{const A=await kp(nh(io,"rank",t.uid));if(!A.exists())o(0);else{const b=((T=A.data())==null?void 0:T.score)||0;o(b)}}catch(A){console.log(A)}finally{n(!1)}},_=async T=>{const{files:A}=T.target;if(t&&A&&A.length===1){i(!0);try{const b=A[0],I=nM(lM,`avatars/${t==null?void 0:t.uid}`),v=await eM(I,b),S=await tM(v.ref);u(S),await mT(t,{photoURL:S})}catch(b){console.log(b)}finally{i(!1)}}};return j.useEffect(()=>{m()},[]),V.jsxs(OM,{children:[V.jsx(MM,{children:V.jsx("span",{children:"마이페이지"})}),V.jsx(VM,{children:V.jsxs($M,{children:[r?V.jsx(UM,{children:"로딩 중"}):V.jsxs(V.Fragment,{children:[V.jsx(FM,{htmlFor:"avatar",className:l?"":"empty",children:l&&V.jsx(jM,{src:l})}),V.jsx(zM,{onChange:_,id:"avatar",type:"file",accept:"image/*"})]}),V.jsxs(R0,{children:[V.jsx(P0,{children:"닉네임"}),V.jsx(A0,{children:c})]}),V.jsxs(R0,{children:[V.jsx(P0,{children:"점수"}),V.jsx(A0,{children:e?"점수 가져오는 중 ...":s})]}),V.jsx(BM,{src:"/img/ico_code_deco.svg",alt:"바코드 데코레이션"}),V.jsxs(HM,{children:["PID | ",t.uid]})]})}),V.jsx(WM,{onClick:()=>{f("/")},children:"확인"})]})}const KM=re.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: all 200ms;
  opacity: 1;
  overflow: hidden;
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
    height: 100vh;
    background-color: #ffde53;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    animation-name: slide;
    animation-duration: 200ms;
    animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
    animation-fill-mode: forwards;
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
    height: 100vh;
    background-color: #ffba00;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    animation-name: slide2nd;
    animation-duration: 200ms;
    animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
    animation-fill-mode: forwards;
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
`,vS=re.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding: 0 16px;
`,_S=re.div`
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
`,wS=re.form`
  width: 100%;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;re.p`
  font-size: 40px;
  font-weight: 900;
  color: #ff3636;
  letter-spacing: -2px;
  margin-bottom: 120px;
`;const ES=re.h1`
  font-size: 24px;
  color: #333;
`,es=re.input`
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
`,TS=re.span`
  margin-top: 6px;
  font-weight: 600;
  color: tomato;
`,IS=re.span`
  margin-top: 20px;
  font-size: 12px;
`;function GM(){const t=Bo(),[e,n]=j.useState(!1),[r,i]=j.useState(!0),[s,o]=j.useState(""),[l,u]=j.useState(""),[c,d]=j.useState(""),f=_=>{const{target:{name:T,value:A}}=_;T==="email"?o(A):T==="password"&&u(A)},m=async _=>{if(_.preventDefault(),d(""),!(e||s===""||l===""))try{n(!0),await xb(ws,s,l),t("/")}catch(T){T instanceof kn&&(console.log(T.code,T.message),d(T.message))}finally{n(!1)}};return j.useEffect(()=>{setTimeout(()=>{i(!1)},1500)},[]),V.jsxs(vS,{children:[r&&V.jsxs(KM,{className:r?"":"hidden",children:[V.jsxs("h1",{children:["ICECREAM",V.jsx("br",{}),"FACTORY"]}),V.jsx("div",{className:"first"}),V.jsx("div",{className:"second"})]}),V.jsxs(_S,{className:r?"":"action",children:[V.jsx(ES,{children:"로그인이 필요해요"}),V.jsxs(wS,{onSubmit:m,children:[V.jsx(es,{onChange:f,name:"email",value:s,placeholder:"이메일",type:"email",required:!0}),V.jsx(es,{onChange:f,name:"password",value:l,placeholder:"비밀번호",type:"password",required:!0}),V.jsx(es,{className:"createBtn",type:"submit",value:e?"Loading...":"로그인"})]}),c!==""?V.jsx(TS,{children:c}):null,V.jsxs(IS,{children:["계정이 없나요? ",V.jsx(iE,{to:"/create-account",children:"회원가입하기 →"})]})]})]})}function QM(){const t=Bo(),[e,n]=j.useState(!1),[r,i]=j.useState(""),[s,o]=j.useState(""),[l,u]=j.useState(""),[c,d]=j.useState(""),f=_=>{const{target:{name:T,value:A}}=_;T==="name"?i(A):T==="email"?o(A):T==="password"&&u(A)},m=async _=>{if(_.preventDefault(),d(""),!(e||r===""||s===""||l===""))try{n(!0);const T=await Pb(ws,s,l);console.log(T.user),await mT(T.user,{displayName:r}),t("/")}catch(T){T instanceof kn&&(console.log(T.code,T.message),d(T.message))}finally{n(!1)}};return V.jsx(vS,{children:V.jsxs(_S,{className:"action",children:[V.jsx(ES,{children:"회원가입"}),V.jsxs(wS,{onSubmit:m,children:[V.jsx(es,{onChange:f,name:"name",value:r,placeholder:"닉네임을 입력하세요",type:"text",required:!0}),V.jsx(es,{onChange:f,name:"email",value:s,placeholder:"이메일",type:"email",required:!0}),V.jsx(es,{onChange:f,name:"password",value:l,placeholder:"비밀번호",type:"password",required:!0}),V.jsx(es,{className:"createBtn",type:"submit",value:e?"Loading...":"가입하기"})]}),c!==""?V.jsx(TS,{children:c}):null,V.jsxs(IS,{children:["이미 회원이신가요? ",V.jsx(iE,{to:"/login",children:"로그인하기 →"})]})]})})}const YM=Ox([{path:"/",element:V.jsx(uM,{children:V.jsx(Zk,{})}),children:[{path:"",element:V.jsx(LM,{})},{path:"profile",element:V.jsx(qM,{})}]},{path:"/login",element:V.jsx(GM,{})},{path:"/create-account",element:V.jsx(QM,{})}]),XM=CE`
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
`;function JM(){const[t,e]=j.useState(!0),n=async()=>{await ws.authStateReady(),e(!1)};return j.useEffect(()=>{n()},[]),V.jsxs(V.Fragment,{children:[V.jsx(XM,{}),t?V.jsx(Jk,{}):V.jsx(Hx,{router:YM})]})}Zd.createRoot(document.getElementById("root")).render(V.jsx(zn.StrictMode,{children:V.jsx(JM,{})}));
