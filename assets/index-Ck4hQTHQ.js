function x0(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function N0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var b0={exports:{}},ih={},D0={exports:{}},ve={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bl=Symbol.for("react.element"),BS=Symbol.for("react.portal"),HS=Symbol.for("react.fragment"),WS=Symbol.for("react.strict_mode"),qS=Symbol.for("react.profiler"),KS=Symbol.for("react.provider"),GS=Symbol.for("react.context"),QS=Symbol.for("react.forward_ref"),YS=Symbol.for("react.suspense"),XS=Symbol.for("react.memo"),JS=Symbol.for("react.lazy"),cy=Symbol.iterator;function ZS(t){return t===null||typeof t!="object"?null:(t=cy&&t[cy]||t["@@iterator"],typeof t=="function"?t:null)}var O0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L0=Object.assign,M0={};function Vo(t,e,n){this.props=t,this.context=e,this.refs=M0,this.updater=n||O0}Vo.prototype.isReactComponent={};Vo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Vo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function V0(){}V0.prototype=Vo.prototype;function Dp(t,e,n){this.props=t,this.context=e,this.refs=M0,this.updater=n||O0}var Op=Dp.prototype=new V0;Op.constructor=Dp;L0(Op,Vo.prototype);Op.isPureReactComponent=!0;var hy=Array.isArray,U0=Object.prototype.hasOwnProperty,Lp={current:null},F0={key:!0,ref:!0,__self:!0,__source:!0};function j0(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)U0.call(e,r)&&!F0.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:bl,type:t,key:s,ref:o,props:i,_owner:Lp.current}}function eR(t,e){return{$$typeof:bl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Mp(t){return typeof t=="object"&&t!==null&&t.$$typeof===bl}function tR(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var dy=/\/+/g;function sd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?tR(""+t.key):e.toString(36)}function Fu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case bl:case BS:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+sd(o,0):r,hy(i)?(n="",t!=null&&(n=t.replace(dy,"$&/")+"/"),Fu(i,e,n,"",function(c){return c})):i!=null&&(Mp(i)&&(i=eR(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(dy,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",hy(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+sd(s,l);o+=Fu(s,e,n,u,i)}else if(u=ZS(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+sd(s,l++),o+=Fu(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function fu(t,e,n){if(t==null)return t;var r=[],i=0;return Fu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function nR(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Xt={current:null},ju={transition:null},rR={ReactCurrentDispatcher:Xt,ReactCurrentBatchConfig:ju,ReactCurrentOwner:Lp};function z0(){throw Error("act(...) is not supported in production builds of React.")}ve.Children={map:fu,forEach:function(t,e,n){fu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return fu(t,function(){e++}),e},toArray:function(t){return fu(t,function(e){return e})||[]},only:function(t){if(!Mp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ve.Component=Vo;ve.Fragment=HS;ve.Profiler=qS;ve.PureComponent=Dp;ve.StrictMode=WS;ve.Suspense=YS;ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rR;ve.act=z0;ve.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=L0({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Lp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)U0.call(e,u)&&!F0.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:bl,type:t.type,key:i,ref:s,props:r,_owner:o}};ve.createContext=function(t){return t={$$typeof:GS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:KS,_context:t},t.Consumer=t};ve.createElement=j0;ve.createFactory=function(t){var e=j0.bind(null,t);return e.type=t,e};ve.createRef=function(){return{current:null}};ve.forwardRef=function(t){return{$$typeof:QS,render:t}};ve.isValidElement=Mp;ve.lazy=function(t){return{$$typeof:JS,_payload:{_status:-1,_result:t},_init:nR}};ve.memo=function(t,e){return{$$typeof:XS,type:t,compare:e===void 0?null:e}};ve.startTransition=function(t){var e=ju.transition;ju.transition={};try{t()}finally{ju.transition=e}};ve.unstable_act=z0;ve.useCallback=function(t,e){return Xt.current.useCallback(t,e)};ve.useContext=function(t){return Xt.current.useContext(t)};ve.useDebugValue=function(){};ve.useDeferredValue=function(t){return Xt.current.useDeferredValue(t)};ve.useEffect=function(t,e){return Xt.current.useEffect(t,e)};ve.useId=function(){return Xt.current.useId()};ve.useImperativeHandle=function(t,e,n){return Xt.current.useImperativeHandle(t,e,n)};ve.useInsertionEffect=function(t,e){return Xt.current.useInsertionEffect(t,e)};ve.useLayoutEffect=function(t,e){return Xt.current.useLayoutEffect(t,e)};ve.useMemo=function(t,e){return Xt.current.useMemo(t,e)};ve.useReducer=function(t,e,n){return Xt.current.useReducer(t,e,n)};ve.useRef=function(t){return Xt.current.useRef(t)};ve.useState=function(t){return Xt.current.useState(t)};ve.useSyncExternalStore=function(t,e,n){return Xt.current.useSyncExternalStore(t,e,n)};ve.useTransition=function(){return Xt.current.useTransition()};ve.version="18.3.1";D0.exports=ve;var U=D0.exports;const zn=N0(U),iR=x0({__proto__:null,default:zn},[U]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sR=U,oR=Symbol.for("react.element"),aR=Symbol.for("react.fragment"),lR=Object.prototype.hasOwnProperty,uR=sR.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,cR={key:!0,ref:!0,__self:!0,__source:!0};function $0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)lR.call(e,r)&&!cR.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:oR,type:t,key:s,ref:o,props:i,_owner:uR.current}}ih.Fragment=aR;ih.jsx=$0;ih.jsxs=$0;b0.exports=ih;var z=b0.exports,nf={},B0={exports:{}},yn={},H0={exports:{}},W0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(K,J){var re=K.length;K.push(J);e:for(;0<re;){var me=re-1>>>1,ce=K[me];if(0<i(ce,J))K[me]=J,K[re]=ce,re=me;else break e}}function n(K){return K.length===0?null:K[0]}function r(K){if(K.length===0)return null;var J=K[0],re=K.pop();if(re!==J){K[0]=re;e:for(var me=0,ce=K.length,Ce=ce>>>1;me<Ce;){var We=2*(me+1)-1,Ze=K[We],qe=We+1,Dt=K[qe];if(0>i(Ze,re))qe<ce&&0>i(Dt,Ze)?(K[me]=Dt,K[qe]=re,me=qe):(K[me]=Ze,K[We]=re,me=We);else if(qe<ce&&0>i(Dt,re))K[me]=Dt,K[qe]=re,me=qe;else break e}}return J}function i(K,J){var re=K.sortIndex-J.sortIndex;return re!==0?re:K.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],d=1,f=null,m=3,E=!1,S=!1,C=!1,b=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function R(K){for(var J=n(c);J!==null;){if(J.callback===null)r(c);else if(J.startTime<=K)r(c),J.sortIndex=J.expirationTime,e(u,J);else break;J=n(c)}}function O(K){if(C=!1,R(K),!S)if(n(u)!==null)S=!0,_n(F);else{var J=n(c);J!==null&&Ee(O,J.startTime-K)}}function F(K,J){S=!1,C&&(C=!1,I(g),g=-1),E=!0;var re=m;try{for(R(J),f=n(u);f!==null&&(!(f.expirationTime>J)||K&&!P());){var me=f.callback;if(typeof me=="function"){f.callback=null,m=f.priorityLevel;var ce=me(f.expirationTime<=J);J=t.unstable_now(),typeof ce=="function"?f.callback=ce:f===n(u)&&r(u),R(J)}else r(u);f=n(u)}if(f!==null)var Ce=!0;else{var We=n(c);We!==null&&Ee(O,We.startTime-J),Ce=!1}return Ce}finally{f=null,m=re,E=!1}}var k=!1,w=null,g=-1,T=5,_=-1;function P(){return!(t.unstable_now()-_<T)}function N(){if(w!==null){var K=t.unstable_now();_=K;var J=!0;try{J=w(!0,K)}finally{J?A():(k=!1,w=null)}}else k=!1}var A;if(typeof v=="function")A=function(){v(N)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,vt=de.port2;de.port1.onmessage=N,A=function(){vt.postMessage(null)}}else A=function(){b(N,0)};function _n(K){w=K,k||(k=!0,A())}function Ee(K,J){g=b(function(){K(t.unstable_now())},J)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(K){K.callback=null},t.unstable_continueExecution=function(){S||E||(S=!0,_n(F))},t.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<K?Math.floor(1e3/K):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(K){switch(m){case 1:case 2:case 3:var J=3;break;default:J=m}var re=m;m=J;try{return K()}finally{m=re}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(K,J){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var re=m;m=K;try{return J()}finally{m=re}},t.unstable_scheduleCallback=function(K,J,re){var me=t.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?me+re:me):re=me,K){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=re+ce,K={id:d++,callback:J,priorityLevel:K,startTime:re,expirationTime:ce,sortIndex:-1},re>me?(K.sortIndex=re,e(c,K),n(u)===null&&K===n(c)&&(C?(I(g),g=-1):C=!0,Ee(O,re-me))):(K.sortIndex=ce,e(u,K),S||E||(S=!0,_n(F))),K},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(K){var J=m;return function(){var re=m;m=J;try{return K.apply(this,arguments)}finally{m=re}}}})(W0);H0.exports=W0;var hR=H0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dR=U,gn=hR;function H(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var q0=new Set,tl={};function Es(t,e){mo(t,e),mo(t+"Capture",e)}function mo(t,e){for(tl[t]=e,t=0;t<e.length;t++)q0.add(e[t])}var Dr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),rf=Object.prototype.hasOwnProperty,fR=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fy={},py={};function pR(t){return rf.call(py,t)?!0:rf.call(fy,t)?!1:fR.test(t)?py[t]=!0:(fy[t]=!0,!1)}function mR(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function gR(t,e,n,r){if(e===null||typeof e>"u"||mR(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Jt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var xt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){xt[t]=new Jt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];xt[e]=new Jt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){xt[t]=new Jt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){xt[t]=new Jt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){xt[t]=new Jt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){xt[t]=new Jt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){xt[t]=new Jt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){xt[t]=new Jt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){xt[t]=new Jt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Vp=/[\-:]([a-z])/g;function Up(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Vp,Up);xt[e]=new Jt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Vp,Up);xt[e]=new Jt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Vp,Up);xt[e]=new Jt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){xt[t]=new Jt(t,1,!1,t.toLowerCase(),null,!1,!1)});xt.xlinkHref=new Jt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){xt[t]=new Jt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Fp(t,e,n,r){var i=xt.hasOwnProperty(e)?xt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(gR(e,n,i,r)&&(n=null),r||i===null?pR(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var jr=dR.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,pu=Symbol.for("react.element"),Bs=Symbol.for("react.portal"),Hs=Symbol.for("react.fragment"),jp=Symbol.for("react.strict_mode"),sf=Symbol.for("react.profiler"),K0=Symbol.for("react.provider"),G0=Symbol.for("react.context"),zp=Symbol.for("react.forward_ref"),of=Symbol.for("react.suspense"),af=Symbol.for("react.suspense_list"),$p=Symbol.for("react.memo"),Zr=Symbol.for("react.lazy"),Q0=Symbol.for("react.offscreen"),my=Symbol.iterator;function da(t){return t===null||typeof t!="object"?null:(t=my&&t[my]||t["@@iterator"],typeof t=="function"?t:null)}var Xe=Object.assign,od;function Ra(t){if(od===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);od=e&&e[1]||""}return`
`+od+t}var ad=!1;function ld(t,e){if(!t||ad)return"";ad=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{ad=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ra(t):""}function yR(t){switch(t.tag){case 5:return Ra(t.type);case 16:return Ra("Lazy");case 13:return Ra("Suspense");case 19:return Ra("SuspenseList");case 0:case 2:case 15:return t=ld(t.type,!1),t;case 11:return t=ld(t.type.render,!1),t;case 1:return t=ld(t.type,!0),t;default:return""}}function lf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Hs:return"Fragment";case Bs:return"Portal";case sf:return"Profiler";case jp:return"StrictMode";case of:return"Suspense";case af:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case G0:return(t.displayName||"Context")+".Consumer";case K0:return(t._context.displayName||"Context")+".Provider";case zp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case $p:return e=t.displayName||null,e!==null?e:lf(t.type)||"Memo";case Zr:e=t._payload,t=t._init;try{return lf(t(e))}catch{}}return null}function vR(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return lf(e);case 8:return e===jp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Si(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Y0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function _R(t){var e=Y0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function mu(t){t._valueTracker||(t._valueTracker=_R(t))}function X0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Y0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function dc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function uf(t,e){var n=e.checked;return Xe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function gy(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Si(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function J0(t,e){e=e.checked,e!=null&&Fp(t,"checked",e,!1)}function cf(t,e){J0(t,e);var n=Si(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?hf(t,e.type,n):e.hasOwnProperty("defaultValue")&&hf(t,e.type,Si(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function yy(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function hf(t,e,n){(e!=="number"||dc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Aa=Array.isArray;function io(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Si(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function df(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(H(91));return Xe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function vy(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(H(92));if(Aa(n)){if(1<n.length)throw Error(H(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Si(n)}}function Z0(t,e){var n=Si(e.value),r=Si(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function _y(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function ew(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ff(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?ew(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var gu,tw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(gu=gu||document.createElement("div"),gu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=gu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function nl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Va={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},wR=["Webkit","ms","Moz","O"];Object.keys(Va).forEach(function(t){wR.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Va[e]=Va[t]})});function nw(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Va.hasOwnProperty(t)&&Va[t]?(""+e).trim():e+"px"}function rw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=nw(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var ER=Xe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pf(t,e){if(e){if(ER[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(H(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(H(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(H(61))}if(e.style!=null&&typeof e.style!="object")throw Error(H(62))}}function mf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gf=null;function Bp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var yf=null,so=null,oo=null;function wy(t){if(t=Ll(t)){if(typeof yf!="function")throw Error(H(280));var e=t.stateNode;e&&(e=uh(e),yf(t.stateNode,t.type,e))}}function iw(t){so?oo?oo.push(t):oo=[t]:so=t}function sw(){if(so){var t=so,e=oo;if(oo=so=null,wy(t),e)for(t=0;t<e.length;t++)wy(e[t])}}function ow(t,e){return t(e)}function aw(){}var ud=!1;function lw(t,e,n){if(ud)return t(e,n);ud=!0;try{return ow(t,e,n)}finally{ud=!1,(so!==null||oo!==null)&&(aw(),sw())}}function rl(t,e){var n=t.stateNode;if(n===null)return null;var r=uh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(H(231,e,typeof n));return n}var vf=!1;if(Dr)try{var fa={};Object.defineProperty(fa,"passive",{get:function(){vf=!0}}),window.addEventListener("test",fa,fa),window.removeEventListener("test",fa,fa)}catch{vf=!1}function TR(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Ua=!1,fc=null,pc=!1,_f=null,IR={onError:function(t){Ua=!0,fc=t}};function SR(t,e,n,r,i,s,o,l,u){Ua=!1,fc=null,TR.apply(IR,arguments)}function RR(t,e,n,r,i,s,o,l,u){if(SR.apply(this,arguments),Ua){if(Ua){var c=fc;Ua=!1,fc=null}else throw Error(H(198));pc||(pc=!0,_f=c)}}function Ts(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function uw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ey(t){if(Ts(t)!==t)throw Error(H(188))}function AR(t){var e=t.alternate;if(!e){if(e=Ts(t),e===null)throw Error(H(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Ey(i),t;if(s===r)return Ey(i),e;s=s.sibling}throw Error(H(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(H(189))}}if(n.alternate!==r)throw Error(H(190))}if(n.tag!==3)throw Error(H(188));return n.stateNode.current===n?t:e}function cw(t){return t=AR(t),t!==null?hw(t):null}function hw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=hw(t);if(e!==null)return e;t=t.sibling}return null}var dw=gn.unstable_scheduleCallback,Ty=gn.unstable_cancelCallback,PR=gn.unstable_shouldYield,CR=gn.unstable_requestPaint,ot=gn.unstable_now,kR=gn.unstable_getCurrentPriorityLevel,Hp=gn.unstable_ImmediatePriority,fw=gn.unstable_UserBlockingPriority,mc=gn.unstable_NormalPriority,xR=gn.unstable_LowPriority,pw=gn.unstable_IdlePriority,sh=null,or=null;function NR(t){if(or&&typeof or.onCommitFiberRoot=="function")try{or.onCommitFiberRoot(sh,t,void 0,(t.current.flags&128)===128)}catch{}}var $n=Math.clz32?Math.clz32:OR,bR=Math.log,DR=Math.LN2;function OR(t){return t>>>=0,t===0?32:31-(bR(t)/DR|0)|0}var yu=64,vu=4194304;function Pa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function gc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Pa(l):(s&=o,s!==0&&(r=Pa(s)))}else o=n&~i,o!==0?r=Pa(o):s!==0&&(r=Pa(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-$n(e),i=1<<n,r|=t[n],e&=~i;return r}function LR(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function MR(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-$n(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=LR(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function wf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function mw(){var t=yu;return yu<<=1,!(yu&4194240)&&(yu=64),t}function cd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Dl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-$n(e),t[e]=n}function VR(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-$n(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Wp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-$n(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Ne=0;function gw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var yw,qp,vw,_w,ww,Ef=!1,_u=[],hi=null,di=null,fi=null,il=new Map,sl=new Map,ti=[],UR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Iy(t,e){switch(t){case"focusin":case"focusout":hi=null;break;case"dragenter":case"dragleave":di=null;break;case"mouseover":case"mouseout":fi=null;break;case"pointerover":case"pointerout":il.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":sl.delete(e.pointerId)}}function pa(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ll(e),e!==null&&qp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function FR(t,e,n,r,i){switch(e){case"focusin":return hi=pa(hi,t,e,n,r,i),!0;case"dragenter":return di=pa(di,t,e,n,r,i),!0;case"mouseover":return fi=pa(fi,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return il.set(s,pa(il.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,sl.set(s,pa(sl.get(s)||null,t,e,n,r,i)),!0}return!1}function Ew(t){var e=Ki(t.target);if(e!==null){var n=Ts(e);if(n!==null){if(e=n.tag,e===13){if(e=uw(n),e!==null){t.blockedOn=e,ww(t.priority,function(){vw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function zu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Tf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);gf=r,n.target.dispatchEvent(r),gf=null}else return e=Ll(n),e!==null&&qp(e),t.blockedOn=n,!1;e.shift()}return!0}function Sy(t,e,n){zu(t)&&n.delete(e)}function jR(){Ef=!1,hi!==null&&zu(hi)&&(hi=null),di!==null&&zu(di)&&(di=null),fi!==null&&zu(fi)&&(fi=null),il.forEach(Sy),sl.forEach(Sy)}function ma(t,e){t.blockedOn===e&&(t.blockedOn=null,Ef||(Ef=!0,gn.unstable_scheduleCallback(gn.unstable_NormalPriority,jR)))}function ol(t){function e(i){return ma(i,t)}if(0<_u.length){ma(_u[0],t);for(var n=1;n<_u.length;n++){var r=_u[n];r.blockedOn===t&&(r.blockedOn=null)}}for(hi!==null&&ma(hi,t),di!==null&&ma(di,t),fi!==null&&ma(fi,t),il.forEach(e),sl.forEach(e),n=0;n<ti.length;n++)r=ti[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ti.length&&(n=ti[0],n.blockedOn===null);)Ew(n),n.blockedOn===null&&ti.shift()}var ao=jr.ReactCurrentBatchConfig,yc=!0;function zR(t,e,n,r){var i=Ne,s=ao.transition;ao.transition=null;try{Ne=1,Kp(t,e,n,r)}finally{Ne=i,ao.transition=s}}function $R(t,e,n,r){var i=Ne,s=ao.transition;ao.transition=null;try{Ne=4,Kp(t,e,n,r)}finally{Ne=i,ao.transition=s}}function Kp(t,e,n,r){if(yc){var i=Tf(t,e,n,r);if(i===null)wd(t,e,r,vc,n),Iy(t,r);else if(FR(i,t,e,n,r))r.stopPropagation();else if(Iy(t,r),e&4&&-1<UR.indexOf(t)){for(;i!==null;){var s=Ll(i);if(s!==null&&yw(s),s=Tf(t,e,n,r),s===null&&wd(t,e,r,vc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else wd(t,e,r,null,n)}}var vc=null;function Tf(t,e,n,r){if(vc=null,t=Bp(r),t=Ki(t),t!==null)if(e=Ts(t),e===null)t=null;else if(n=e.tag,n===13){if(t=uw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return vc=t,null}function Tw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(kR()){case Hp:return 1;case fw:return 4;case mc:case xR:return 16;case pw:return 536870912;default:return 16}default:return 16}}var li=null,Gp=null,$u=null;function Iw(){if($u)return $u;var t,e=Gp,n=e.length,r,i="value"in li?li.value:li.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return $u=i.slice(t,1<r?1-r:void 0)}function Bu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function wu(){return!0}function Ry(){return!1}function vn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?wu:Ry,this.isPropagationStopped=Ry,this}return Xe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=wu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=wu)},persist:function(){},isPersistent:wu}),e}var Uo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qp=vn(Uo),Ol=Xe({},Uo,{view:0,detail:0}),BR=vn(Ol),hd,dd,ga,oh=Xe({},Ol,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ga&&(ga&&t.type==="mousemove"?(hd=t.screenX-ga.screenX,dd=t.screenY-ga.screenY):dd=hd=0,ga=t),hd)},movementY:function(t){return"movementY"in t?t.movementY:dd}}),Ay=vn(oh),HR=Xe({},oh,{dataTransfer:0}),WR=vn(HR),qR=Xe({},Ol,{relatedTarget:0}),fd=vn(qR),KR=Xe({},Uo,{animationName:0,elapsedTime:0,pseudoElement:0}),GR=vn(KR),QR=Xe({},Uo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),YR=vn(QR),XR=Xe({},Uo,{data:0}),Py=vn(XR),JR={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ZR={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},eA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tA(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=eA[t])?!!e[t]:!1}function Yp(){return tA}var nA=Xe({},Ol,{key:function(t){if(t.key){var e=JR[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Bu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ZR[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yp,charCode:function(t){return t.type==="keypress"?Bu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Bu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),rA=vn(nA),iA=Xe({},oh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cy=vn(iA),sA=Xe({},Ol,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yp}),oA=vn(sA),aA=Xe({},Uo,{propertyName:0,elapsedTime:0,pseudoElement:0}),lA=vn(aA),uA=Xe({},oh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),cA=vn(uA),hA=[9,13,27,32],Xp=Dr&&"CompositionEvent"in window,Fa=null;Dr&&"documentMode"in document&&(Fa=document.documentMode);var dA=Dr&&"TextEvent"in window&&!Fa,Sw=Dr&&(!Xp||Fa&&8<Fa&&11>=Fa),ky=" ",xy=!1;function Rw(t,e){switch(t){case"keyup":return hA.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Aw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ws=!1;function fA(t,e){switch(t){case"compositionend":return Aw(e);case"keypress":return e.which!==32?null:(xy=!0,ky);case"textInput":return t=e.data,t===ky&&xy?null:t;default:return null}}function pA(t,e){if(Ws)return t==="compositionend"||!Xp&&Rw(t,e)?(t=Iw(),$u=Gp=li=null,Ws=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Sw&&e.locale!=="ko"?null:e.data;default:return null}}var mA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ny(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!mA[t.type]:e==="textarea"}function Pw(t,e,n,r){iw(r),e=_c(e,"onChange"),0<e.length&&(n=new Qp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ja=null,al=null;function gA(t){Uw(t,0)}function ah(t){var e=Gs(t);if(X0(e))return t}function yA(t,e){if(t==="change")return e}var Cw=!1;if(Dr){var pd;if(Dr){var md="oninput"in document;if(!md){var by=document.createElement("div");by.setAttribute("oninput","return;"),md=typeof by.oninput=="function"}pd=md}else pd=!1;Cw=pd&&(!document.documentMode||9<document.documentMode)}function Dy(){ja&&(ja.detachEvent("onpropertychange",kw),al=ja=null)}function kw(t){if(t.propertyName==="value"&&ah(al)){var e=[];Pw(e,al,t,Bp(t)),lw(gA,e)}}function vA(t,e,n){t==="focusin"?(Dy(),ja=e,al=n,ja.attachEvent("onpropertychange",kw)):t==="focusout"&&Dy()}function _A(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ah(al)}function wA(t,e){if(t==="click")return ah(e)}function EA(t,e){if(t==="input"||t==="change")return ah(e)}function TA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Wn=typeof Object.is=="function"?Object.is:TA;function ll(t,e){if(Wn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!rf.call(e,i)||!Wn(t[i],e[i]))return!1}return!0}function Oy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ly(t,e){var n=Oy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Oy(n)}}function xw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?xw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Nw(){for(var t=window,e=dc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=dc(t.document)}return e}function Jp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function IA(t){var e=Nw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&xw(n.ownerDocument.documentElement,n)){if(r!==null&&Jp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Ly(n,s);var o=Ly(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var SA=Dr&&"documentMode"in document&&11>=document.documentMode,qs=null,If=null,za=null,Sf=!1;function My(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Sf||qs==null||qs!==dc(r)||(r=qs,"selectionStart"in r&&Jp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),za&&ll(za,r)||(za=r,r=_c(If,"onSelect"),0<r.length&&(e=new Qp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=qs)))}function Eu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ks={animationend:Eu("Animation","AnimationEnd"),animationiteration:Eu("Animation","AnimationIteration"),animationstart:Eu("Animation","AnimationStart"),transitionend:Eu("Transition","TransitionEnd")},gd={},bw={};Dr&&(bw=document.createElement("div").style,"AnimationEvent"in window||(delete Ks.animationend.animation,delete Ks.animationiteration.animation,delete Ks.animationstart.animation),"TransitionEvent"in window||delete Ks.transitionend.transition);function lh(t){if(gd[t])return gd[t];if(!Ks[t])return t;var e=Ks[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in bw)return gd[t]=e[n];return t}var Dw=lh("animationend"),Ow=lh("animationiteration"),Lw=lh("animationstart"),Mw=lh("transitionend"),Vw=new Map,Vy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xi(t,e){Vw.set(t,e),Es(e,[t])}for(var yd=0;yd<Vy.length;yd++){var vd=Vy[yd],RA=vd.toLowerCase(),AA=vd[0].toUpperCase()+vd.slice(1);xi(RA,"on"+AA)}xi(Dw,"onAnimationEnd");xi(Ow,"onAnimationIteration");xi(Lw,"onAnimationStart");xi("dblclick","onDoubleClick");xi("focusin","onFocus");xi("focusout","onBlur");xi(Mw,"onTransitionEnd");mo("onMouseEnter",["mouseout","mouseover"]);mo("onMouseLeave",["mouseout","mouseover"]);mo("onPointerEnter",["pointerout","pointerover"]);mo("onPointerLeave",["pointerout","pointerover"]);Es("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Es("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Es("onBeforeInput",["compositionend","keypress","textInput","paste"]);Es("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Es("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Es("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ca="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),PA=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ca));function Uy(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,RR(r,e,void 0,t),t.currentTarget=null}function Uw(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Uy(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Uy(i,l,c),s=u}}}if(pc)throw t=_f,pc=!1,_f=null,t}function je(t,e){var n=e[kf];n===void 0&&(n=e[kf]=new Set);var r=t+"__bubble";n.has(r)||(Fw(e,t,2,!1),n.add(r))}function _d(t,e,n){var r=0;e&&(r|=4),Fw(n,t,r,e)}var Tu="_reactListening"+Math.random().toString(36).slice(2);function ul(t){if(!t[Tu]){t[Tu]=!0,q0.forEach(function(n){n!=="selectionchange"&&(PA.has(n)||_d(n,!1,t),_d(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Tu]||(e[Tu]=!0,_d("selectionchange",!1,e))}}function Fw(t,e,n,r){switch(Tw(e)){case 1:var i=zR;break;case 4:i=$R;break;default:i=Kp}n=i.bind(null,e,n,t),i=void 0,!vf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function wd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Ki(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}lw(function(){var c=s,d=Bp(n),f=[];e:{var m=Vw.get(t);if(m!==void 0){var E=Qp,S=t;switch(t){case"keypress":if(Bu(n)===0)break e;case"keydown":case"keyup":E=rA;break;case"focusin":S="focus",E=fd;break;case"focusout":S="blur",E=fd;break;case"beforeblur":case"afterblur":E=fd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=Ay;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=WR;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=oA;break;case Dw:case Ow:case Lw:E=GR;break;case Mw:E=lA;break;case"scroll":E=BR;break;case"wheel":E=cA;break;case"copy":case"cut":case"paste":E=YR;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=Cy}var C=(e&4)!==0,b=!C&&t==="scroll",I=C?m!==null?m+"Capture":null:m;C=[];for(var v=c,R;v!==null;){R=v;var O=R.stateNode;if(R.tag===5&&O!==null&&(R=O,I!==null&&(O=rl(v,I),O!=null&&C.push(cl(v,O,R)))),b)break;v=v.return}0<C.length&&(m=new E(m,S,null,n,d),f.push({event:m,listeners:C}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",E=t==="mouseout"||t==="pointerout",m&&n!==gf&&(S=n.relatedTarget||n.fromElement)&&(Ki(S)||S[Or]))break e;if((E||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,E?(S=n.relatedTarget||n.toElement,E=c,S=S?Ki(S):null,S!==null&&(b=Ts(S),S!==b||S.tag!==5&&S.tag!==6)&&(S=null)):(E=null,S=c),E!==S)){if(C=Ay,O="onMouseLeave",I="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(C=Cy,O="onPointerLeave",I="onPointerEnter",v="pointer"),b=E==null?m:Gs(E),R=S==null?m:Gs(S),m=new C(O,v+"leave",E,n,d),m.target=b,m.relatedTarget=R,O=null,Ki(d)===c&&(C=new C(I,v+"enter",S,n,d),C.target=R,C.relatedTarget=b,O=C),b=O,E&&S)t:{for(C=E,I=S,v=0,R=C;R;R=Vs(R))v++;for(R=0,O=I;O;O=Vs(O))R++;for(;0<v-R;)C=Vs(C),v--;for(;0<R-v;)I=Vs(I),R--;for(;v--;){if(C===I||I!==null&&C===I.alternate)break t;C=Vs(C),I=Vs(I)}C=null}else C=null;E!==null&&Fy(f,m,E,C,!1),S!==null&&b!==null&&Fy(f,b,S,C,!0)}}e:{if(m=c?Gs(c):window,E=m.nodeName&&m.nodeName.toLowerCase(),E==="select"||E==="input"&&m.type==="file")var F=yA;else if(Ny(m))if(Cw)F=EA;else{F=_A;var k=vA}else(E=m.nodeName)&&E.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(F=wA);if(F&&(F=F(t,c))){Pw(f,F,n,d);break e}k&&k(t,m,c),t==="focusout"&&(k=m._wrapperState)&&k.controlled&&m.type==="number"&&hf(m,"number",m.value)}switch(k=c?Gs(c):window,t){case"focusin":(Ny(k)||k.contentEditable==="true")&&(qs=k,If=c,za=null);break;case"focusout":za=If=qs=null;break;case"mousedown":Sf=!0;break;case"contextmenu":case"mouseup":case"dragend":Sf=!1,My(f,n,d);break;case"selectionchange":if(SA)break;case"keydown":case"keyup":My(f,n,d)}var w;if(Xp)e:{switch(t){case"compositionstart":var g="onCompositionStart";break e;case"compositionend":g="onCompositionEnd";break e;case"compositionupdate":g="onCompositionUpdate";break e}g=void 0}else Ws?Rw(t,n)&&(g="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(g="onCompositionStart");g&&(Sw&&n.locale!=="ko"&&(Ws||g!=="onCompositionStart"?g==="onCompositionEnd"&&Ws&&(w=Iw()):(li=d,Gp="value"in li?li.value:li.textContent,Ws=!0)),k=_c(c,g),0<k.length&&(g=new Py(g,t,null,n,d),f.push({event:g,listeners:k}),w?g.data=w:(w=Aw(n),w!==null&&(g.data=w)))),(w=dA?fA(t,n):pA(t,n))&&(c=_c(c,"onBeforeInput"),0<c.length&&(d=new Py("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=w))}Uw(f,e)})}function cl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function _c(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=rl(t,n),s!=null&&r.unshift(cl(t,s,i)),s=rl(t,e),s!=null&&r.push(cl(t,s,i))),t=t.return}return r}function Vs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Fy(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=rl(n,s),u!=null&&o.unshift(cl(n,u,l))):i||(u=rl(n,s),u!=null&&o.push(cl(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var CA=/\r\n?/g,kA=/\u0000|\uFFFD/g;function jy(t){return(typeof t=="string"?t:""+t).replace(CA,`
`).replace(kA,"")}function Iu(t,e,n){if(e=jy(e),jy(t)!==e&&n)throw Error(H(425))}function wc(){}var Rf=null,Af=null;function Pf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Cf=typeof setTimeout=="function"?setTimeout:void 0,xA=typeof clearTimeout=="function"?clearTimeout:void 0,zy=typeof Promise=="function"?Promise:void 0,NA=typeof queueMicrotask=="function"?queueMicrotask:typeof zy<"u"?function(t){return zy.resolve(null).then(t).catch(bA)}:Cf;function bA(t){setTimeout(function(){throw t})}function Ed(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ol(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ol(e)}function pi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function $y(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Fo=Math.random().toString(36).slice(2),rr="__reactFiber$"+Fo,hl="__reactProps$"+Fo,Or="__reactContainer$"+Fo,kf="__reactEvents$"+Fo,DA="__reactListeners$"+Fo,OA="__reactHandles$"+Fo;function Ki(t){var e=t[rr];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Or]||n[rr]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=$y(t);t!==null;){if(n=t[rr])return n;t=$y(t)}return e}t=n,n=t.parentNode}return null}function Ll(t){return t=t[rr]||t[Or],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Gs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(H(33))}function uh(t){return t[hl]||null}var xf=[],Qs=-1;function Ni(t){return{current:t}}function Be(t){0>Qs||(t.current=xf[Qs],xf[Qs]=null,Qs--)}function Ve(t,e){Qs++,xf[Qs]=t.current,t.current=e}var Ri={},qt=Ni(Ri),nn=Ni(!1),os=Ri;function go(t,e){var n=t.type.contextTypes;if(!n)return Ri;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function rn(t){return t=t.childContextTypes,t!=null}function Ec(){Be(nn),Be(qt)}function By(t,e,n){if(qt.current!==Ri)throw Error(H(168));Ve(qt,e),Ve(nn,n)}function jw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(H(108,vR(t)||"Unknown",i));return Xe({},n,r)}function Tc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ri,os=qt.current,Ve(qt,t),Ve(nn,nn.current),!0}function Hy(t,e,n){var r=t.stateNode;if(!r)throw Error(H(169));n?(t=jw(t,e,os),r.__reactInternalMemoizedMergedChildContext=t,Be(nn),Be(qt),Ve(qt,t)):Be(nn),Ve(nn,n)}var Sr=null,ch=!1,Td=!1;function zw(t){Sr===null?Sr=[t]:Sr.push(t)}function LA(t){ch=!0,zw(t)}function bi(){if(!Td&&Sr!==null){Td=!0;var t=0,e=Ne;try{var n=Sr;for(Ne=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Sr=null,ch=!1}catch(i){throw Sr!==null&&(Sr=Sr.slice(t+1)),dw(Hp,bi),i}finally{Ne=e,Td=!1}}return null}var Ys=[],Xs=0,Ic=null,Sc=0,Tn=[],In=0,as=null,Rr=1,Ar="";function Bi(t,e){Ys[Xs++]=Sc,Ys[Xs++]=Ic,Ic=t,Sc=e}function $w(t,e,n){Tn[In++]=Rr,Tn[In++]=Ar,Tn[In++]=as,as=t;var r=Rr;t=Ar;var i=32-$n(r)-1;r&=~(1<<i),n+=1;var s=32-$n(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Rr=1<<32-$n(e)+i|n<<i|r,Ar=s+t}else Rr=1<<s|n<<i|r,Ar=t}function Zp(t){t.return!==null&&(Bi(t,1),$w(t,1,0))}function em(t){for(;t===Ic;)Ic=Ys[--Xs],Ys[Xs]=null,Sc=Ys[--Xs],Ys[Xs]=null;for(;t===as;)as=Tn[--In],Tn[In]=null,Ar=Tn[--In],Tn[In]=null,Rr=Tn[--In],Tn[In]=null}var mn=null,dn=null,He=!1,jn=null;function Bw(t,e){var n=Sn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Wy(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,mn=t,dn=pi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,mn=t,dn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=as!==null?{id:Rr,overflow:Ar}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Sn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,mn=t,dn=null,!0):!1;default:return!1}}function Nf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function bf(t){if(He){var e=dn;if(e){var n=e;if(!Wy(t,e)){if(Nf(t))throw Error(H(418));e=pi(n.nextSibling);var r=mn;e&&Wy(t,e)?Bw(r,n):(t.flags=t.flags&-4097|2,He=!1,mn=t)}}else{if(Nf(t))throw Error(H(418));t.flags=t.flags&-4097|2,He=!1,mn=t}}}function qy(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;mn=t}function Su(t){if(t!==mn)return!1;if(!He)return qy(t),He=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Pf(t.type,t.memoizedProps)),e&&(e=dn)){if(Nf(t))throw Hw(),Error(H(418));for(;e;)Bw(t,e),e=pi(e.nextSibling)}if(qy(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(H(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){dn=pi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}dn=null}}else dn=mn?pi(t.stateNode.nextSibling):null;return!0}function Hw(){for(var t=dn;t;)t=pi(t.nextSibling)}function yo(){dn=mn=null,He=!1}function tm(t){jn===null?jn=[t]:jn.push(t)}var MA=jr.ReactCurrentBatchConfig;function ya(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(H(309));var r=n.stateNode}if(!r)throw Error(H(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(H(284));if(!n._owner)throw Error(H(290,t))}return t}function Ru(t,e){throw t=Object.prototype.toString.call(e),Error(H(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ky(t){var e=t._init;return e(t._payload)}function Ww(t){function e(I,v){if(t){var R=I.deletions;R===null?(I.deletions=[v],I.flags|=16):R.push(v)}}function n(I,v){if(!t)return null;for(;v!==null;)e(I,v),v=v.sibling;return null}function r(I,v){for(I=new Map;v!==null;)v.key!==null?I.set(v.key,v):I.set(v.index,v),v=v.sibling;return I}function i(I,v){return I=vi(I,v),I.index=0,I.sibling=null,I}function s(I,v,R){return I.index=R,t?(R=I.alternate,R!==null?(R=R.index,R<v?(I.flags|=2,v):R):(I.flags|=2,v)):(I.flags|=1048576,v)}function o(I){return t&&I.alternate===null&&(I.flags|=2),I}function l(I,v,R,O){return v===null||v.tag!==6?(v=kd(R,I.mode,O),v.return=I,v):(v=i(v,R),v.return=I,v)}function u(I,v,R,O){var F=R.type;return F===Hs?d(I,v,R.props.children,O,R.key):v!==null&&(v.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Zr&&Ky(F)===v.type)?(O=i(v,R.props),O.ref=ya(I,v,R),O.return=I,O):(O=Yu(R.type,R.key,R.props,null,I.mode,O),O.ref=ya(I,v,R),O.return=I,O)}function c(I,v,R,O){return v===null||v.tag!==4||v.stateNode.containerInfo!==R.containerInfo||v.stateNode.implementation!==R.implementation?(v=xd(R,I.mode,O),v.return=I,v):(v=i(v,R.children||[]),v.return=I,v)}function d(I,v,R,O,F){return v===null||v.tag!==7?(v=ns(R,I.mode,O,F),v.return=I,v):(v=i(v,R),v.return=I,v)}function f(I,v,R){if(typeof v=="string"&&v!==""||typeof v=="number")return v=kd(""+v,I.mode,R),v.return=I,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case pu:return R=Yu(v.type,v.key,v.props,null,I.mode,R),R.ref=ya(I,null,v),R.return=I,R;case Bs:return v=xd(v,I.mode,R),v.return=I,v;case Zr:var O=v._init;return f(I,O(v._payload),R)}if(Aa(v)||da(v))return v=ns(v,I.mode,R,null),v.return=I,v;Ru(I,v)}return null}function m(I,v,R,O){var F=v!==null?v.key:null;if(typeof R=="string"&&R!==""||typeof R=="number")return F!==null?null:l(I,v,""+R,O);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case pu:return R.key===F?u(I,v,R,O):null;case Bs:return R.key===F?c(I,v,R,O):null;case Zr:return F=R._init,m(I,v,F(R._payload),O)}if(Aa(R)||da(R))return F!==null?null:d(I,v,R,O,null);Ru(I,R)}return null}function E(I,v,R,O,F){if(typeof O=="string"&&O!==""||typeof O=="number")return I=I.get(R)||null,l(v,I,""+O,F);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case pu:return I=I.get(O.key===null?R:O.key)||null,u(v,I,O,F);case Bs:return I=I.get(O.key===null?R:O.key)||null,c(v,I,O,F);case Zr:var k=O._init;return E(I,v,R,k(O._payload),F)}if(Aa(O)||da(O))return I=I.get(R)||null,d(v,I,O,F,null);Ru(v,O)}return null}function S(I,v,R,O){for(var F=null,k=null,w=v,g=v=0,T=null;w!==null&&g<R.length;g++){w.index>g?(T=w,w=null):T=w.sibling;var _=m(I,w,R[g],O);if(_===null){w===null&&(w=T);break}t&&w&&_.alternate===null&&e(I,w),v=s(_,v,g),k===null?F=_:k.sibling=_,k=_,w=T}if(g===R.length)return n(I,w),He&&Bi(I,g),F;if(w===null){for(;g<R.length;g++)w=f(I,R[g],O),w!==null&&(v=s(w,v,g),k===null?F=w:k.sibling=w,k=w);return He&&Bi(I,g),F}for(w=r(I,w);g<R.length;g++)T=E(w,I,g,R[g],O),T!==null&&(t&&T.alternate!==null&&w.delete(T.key===null?g:T.key),v=s(T,v,g),k===null?F=T:k.sibling=T,k=T);return t&&w.forEach(function(P){return e(I,P)}),He&&Bi(I,g),F}function C(I,v,R,O){var F=da(R);if(typeof F!="function")throw Error(H(150));if(R=F.call(R),R==null)throw Error(H(151));for(var k=F=null,w=v,g=v=0,T=null,_=R.next();w!==null&&!_.done;g++,_=R.next()){w.index>g?(T=w,w=null):T=w.sibling;var P=m(I,w,_.value,O);if(P===null){w===null&&(w=T);break}t&&w&&P.alternate===null&&e(I,w),v=s(P,v,g),k===null?F=P:k.sibling=P,k=P,w=T}if(_.done)return n(I,w),He&&Bi(I,g),F;if(w===null){for(;!_.done;g++,_=R.next())_=f(I,_.value,O),_!==null&&(v=s(_,v,g),k===null?F=_:k.sibling=_,k=_);return He&&Bi(I,g),F}for(w=r(I,w);!_.done;g++,_=R.next())_=E(w,I,g,_.value,O),_!==null&&(t&&_.alternate!==null&&w.delete(_.key===null?g:_.key),v=s(_,v,g),k===null?F=_:k.sibling=_,k=_);return t&&w.forEach(function(N){return e(I,N)}),He&&Bi(I,g),F}function b(I,v,R,O){if(typeof R=="object"&&R!==null&&R.type===Hs&&R.key===null&&(R=R.props.children),typeof R=="object"&&R!==null){switch(R.$$typeof){case pu:e:{for(var F=R.key,k=v;k!==null;){if(k.key===F){if(F=R.type,F===Hs){if(k.tag===7){n(I,k.sibling),v=i(k,R.props.children),v.return=I,I=v;break e}}else if(k.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Zr&&Ky(F)===k.type){n(I,k.sibling),v=i(k,R.props),v.ref=ya(I,k,R),v.return=I,I=v;break e}n(I,k);break}else e(I,k);k=k.sibling}R.type===Hs?(v=ns(R.props.children,I.mode,O,R.key),v.return=I,I=v):(O=Yu(R.type,R.key,R.props,null,I.mode,O),O.ref=ya(I,v,R),O.return=I,I=O)}return o(I);case Bs:e:{for(k=R.key;v!==null;){if(v.key===k)if(v.tag===4&&v.stateNode.containerInfo===R.containerInfo&&v.stateNode.implementation===R.implementation){n(I,v.sibling),v=i(v,R.children||[]),v.return=I,I=v;break e}else{n(I,v);break}else e(I,v);v=v.sibling}v=xd(R,I.mode,O),v.return=I,I=v}return o(I);case Zr:return k=R._init,b(I,v,k(R._payload),O)}if(Aa(R))return S(I,v,R,O);if(da(R))return C(I,v,R,O);Ru(I,R)}return typeof R=="string"&&R!==""||typeof R=="number"?(R=""+R,v!==null&&v.tag===6?(n(I,v.sibling),v=i(v,R),v.return=I,I=v):(n(I,v),v=kd(R,I.mode,O),v.return=I,I=v),o(I)):n(I,v)}return b}var vo=Ww(!0),qw=Ww(!1),Rc=Ni(null),Ac=null,Js=null,nm=null;function rm(){nm=Js=Ac=null}function im(t){var e=Rc.current;Be(Rc),t._currentValue=e}function Df(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function lo(t,e){Ac=t,nm=Js=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(tn=!0),t.firstContext=null)}function An(t){var e=t._currentValue;if(nm!==t)if(t={context:t,memoizedValue:e,next:null},Js===null){if(Ac===null)throw Error(H(308));Js=t,Ac.dependencies={lanes:0,firstContext:t}}else Js=Js.next=t;return e}var Gi=null;function sm(t){Gi===null?Gi=[t]:Gi.push(t)}function Kw(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,sm(e)):(n.next=i.next,i.next=n),e.interleaved=n,Lr(t,r)}function Lr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ei=!1;function om(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function xr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function mi(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Se&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Lr(t,n)}return i=r.interleaved,i===null?(e.next=e,sm(r)):(e.next=i.next,i.next=e),r.interleaved=e,Lr(t,n)}function Hu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Wp(t,n)}}function Gy(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Pc(t,e,n,r){var i=t.updateQueue;ei=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=u))}if(s!==null){var f=i.baseState;o=0,d=c=u=null,l=s;do{var m=l.lane,E=l.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:E,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var S=t,C=l;switch(m=e,E=n,C.tag){case 1:if(S=C.payload,typeof S=="function"){f=S.call(E,f,m);break e}f=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=C.payload,m=typeof S=="function"?S.call(E,f,m):S,m==null)break e;f=Xe({},f,m);break e;case 2:ei=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else E={eventTime:E,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=E,u=f):d=d.next=E,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);us|=o,t.lanes=o,t.memoizedState=f}}function Qy(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(H(191,i));i.call(r)}}}var Ml={},ar=Ni(Ml),dl=Ni(Ml),fl=Ni(Ml);function Qi(t){if(t===Ml)throw Error(H(174));return t}function am(t,e){switch(Ve(fl,e),Ve(dl,t),Ve(ar,Ml),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ff(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ff(e,t)}Be(ar),Ve(ar,e)}function _o(){Be(ar),Be(dl),Be(fl)}function Qw(t){Qi(fl.current);var e=Qi(ar.current),n=ff(e,t.type);e!==n&&(Ve(dl,t),Ve(ar,n))}function lm(t){dl.current===t&&(Be(ar),Be(dl))}var Qe=Ni(0);function Cc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Id=[];function um(){for(var t=0;t<Id.length;t++)Id[t]._workInProgressVersionPrimary=null;Id.length=0}var Wu=jr.ReactCurrentDispatcher,Sd=jr.ReactCurrentBatchConfig,ls=0,Ye=null,mt=null,wt=null,kc=!1,$a=!1,pl=0,VA=0;function Ut(){throw Error(H(321))}function cm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Wn(t[n],e[n]))return!1;return!0}function hm(t,e,n,r,i,s){if(ls=s,Ye=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Wu.current=t===null||t.memoizedState===null?zA:$A,t=n(r,i),$a){s=0;do{if($a=!1,pl=0,25<=s)throw Error(H(301));s+=1,wt=mt=null,e.updateQueue=null,Wu.current=BA,t=n(r,i)}while($a)}if(Wu.current=xc,e=mt!==null&&mt.next!==null,ls=0,wt=mt=Ye=null,kc=!1,e)throw Error(H(300));return t}function dm(){var t=pl!==0;return pl=0,t}function tr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wt===null?Ye.memoizedState=wt=t:wt=wt.next=t,wt}function Pn(){if(mt===null){var t=Ye.alternate;t=t!==null?t.memoizedState:null}else t=mt.next;var e=wt===null?Ye.memoizedState:wt.next;if(e!==null)wt=e,mt=t;else{if(t===null)throw Error(H(310));mt=t,t={memoizedState:mt.memoizedState,baseState:mt.baseState,baseQueue:mt.baseQueue,queue:mt.queue,next:null},wt===null?Ye.memoizedState=wt=t:wt=wt.next=t}return wt}function ml(t,e){return typeof e=="function"?e(t):e}function Rd(t){var e=Pn(),n=e.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=t;var r=mt,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var d=c.lane;if((ls&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=f,o=r):u=u.next=f,Ye.lanes|=d,us|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,Wn(r,e.memoizedState)||(tn=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ye.lanes|=s,us|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ad(t){var e=Pn(),n=e.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Wn(s,e.memoizedState)||(tn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Yw(){}function Xw(t,e){var n=Ye,r=Pn(),i=e(),s=!Wn(r.memoizedState,i);if(s&&(r.memoizedState=i,tn=!0),r=r.queue,fm(eE.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||wt!==null&&wt.memoizedState.tag&1){if(n.flags|=2048,gl(9,Zw.bind(null,n,r,i,e),void 0,null),Tt===null)throw Error(H(349));ls&30||Jw(n,e,i)}return i}function Jw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ye.updateQueue,e===null?(e={lastEffect:null,stores:null},Ye.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Zw(t,e,n,r){e.value=n,e.getSnapshot=r,tE(e)&&nE(t)}function eE(t,e,n){return n(function(){tE(e)&&nE(t)})}function tE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Wn(t,n)}catch{return!0}}function nE(t){var e=Lr(t,1);e!==null&&Bn(e,t,1,-1)}function Yy(t){var e=tr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ml,lastRenderedState:t},e.queue=t,t=t.dispatch=jA.bind(null,Ye,t),[e.memoizedState,t]}function gl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ye.updateQueue,e===null?(e={lastEffect:null,stores:null},Ye.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function rE(){return Pn().memoizedState}function qu(t,e,n,r){var i=tr();Ye.flags|=t,i.memoizedState=gl(1|e,n,void 0,r===void 0?null:r)}function hh(t,e,n,r){var i=Pn();r=r===void 0?null:r;var s=void 0;if(mt!==null){var o=mt.memoizedState;if(s=o.destroy,r!==null&&cm(r,o.deps)){i.memoizedState=gl(e,n,s,r);return}}Ye.flags|=t,i.memoizedState=gl(1|e,n,s,r)}function Xy(t,e){return qu(8390656,8,t,e)}function fm(t,e){return hh(2048,8,t,e)}function iE(t,e){return hh(4,2,t,e)}function sE(t,e){return hh(4,4,t,e)}function oE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function aE(t,e,n){return n=n!=null?n.concat([t]):null,hh(4,4,oE.bind(null,e,t),n)}function pm(){}function lE(t,e){var n=Pn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&cm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function uE(t,e){var n=Pn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&cm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function cE(t,e,n){return ls&21?(Wn(n,e)||(n=mw(),Ye.lanes|=n,us|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,tn=!0),t.memoizedState=n)}function UA(t,e){var n=Ne;Ne=n!==0&&4>n?n:4,t(!0);var r=Sd.transition;Sd.transition={};try{t(!1),e()}finally{Ne=n,Sd.transition=r}}function hE(){return Pn().memoizedState}function FA(t,e,n){var r=yi(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},dE(t))fE(e,n);else if(n=Kw(t,e,n,r),n!==null){var i=Yt();Bn(n,t,r,i),pE(n,e,r)}}function jA(t,e,n){var r=yi(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(dE(t))fE(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Wn(l,o)){var u=e.interleaved;u===null?(i.next=i,sm(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=Kw(t,e,i,r),n!==null&&(i=Yt(),Bn(n,t,r,i),pE(n,e,r))}}function dE(t){var e=t.alternate;return t===Ye||e!==null&&e===Ye}function fE(t,e){$a=kc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function pE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Wp(t,n)}}var xc={readContext:An,useCallback:Ut,useContext:Ut,useEffect:Ut,useImperativeHandle:Ut,useInsertionEffect:Ut,useLayoutEffect:Ut,useMemo:Ut,useReducer:Ut,useRef:Ut,useState:Ut,useDebugValue:Ut,useDeferredValue:Ut,useTransition:Ut,useMutableSource:Ut,useSyncExternalStore:Ut,useId:Ut,unstable_isNewReconciler:!1},zA={readContext:An,useCallback:function(t,e){return tr().memoizedState=[t,e===void 0?null:e],t},useContext:An,useEffect:Xy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,qu(4194308,4,oE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return qu(4194308,4,t,e)},useInsertionEffect:function(t,e){return qu(4,2,t,e)},useMemo:function(t,e){var n=tr();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=tr();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=FA.bind(null,Ye,t),[r.memoizedState,t]},useRef:function(t){var e=tr();return t={current:t},e.memoizedState=t},useState:Yy,useDebugValue:pm,useDeferredValue:function(t){return tr().memoizedState=t},useTransition:function(){var t=Yy(!1),e=t[0];return t=UA.bind(null,t[1]),tr().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ye,i=tr();if(He){if(n===void 0)throw Error(H(407));n=n()}else{if(n=e(),Tt===null)throw Error(H(349));ls&30||Jw(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Xy(eE.bind(null,r,s,t),[t]),r.flags|=2048,gl(9,Zw.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=tr(),e=Tt.identifierPrefix;if(He){var n=Ar,r=Rr;n=(r&~(1<<32-$n(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=pl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=VA++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},$A={readContext:An,useCallback:lE,useContext:An,useEffect:fm,useImperativeHandle:aE,useInsertionEffect:iE,useLayoutEffect:sE,useMemo:uE,useReducer:Rd,useRef:rE,useState:function(){return Rd(ml)},useDebugValue:pm,useDeferredValue:function(t){var e=Pn();return cE(e,mt.memoizedState,t)},useTransition:function(){var t=Rd(ml)[0],e=Pn().memoizedState;return[t,e]},useMutableSource:Yw,useSyncExternalStore:Xw,useId:hE,unstable_isNewReconciler:!1},BA={readContext:An,useCallback:lE,useContext:An,useEffect:fm,useImperativeHandle:aE,useInsertionEffect:iE,useLayoutEffect:sE,useMemo:uE,useReducer:Ad,useRef:rE,useState:function(){return Ad(ml)},useDebugValue:pm,useDeferredValue:function(t){var e=Pn();return mt===null?e.memoizedState=t:cE(e,mt.memoizedState,t)},useTransition:function(){var t=Ad(ml)[0],e=Pn().memoizedState;return[t,e]},useMutableSource:Yw,useSyncExternalStore:Xw,useId:hE,unstable_isNewReconciler:!1};function Vn(t,e){if(t&&t.defaultProps){e=Xe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Of(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Xe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var dh={isMounted:function(t){return(t=t._reactInternals)?Ts(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Yt(),i=yi(t),s=xr(r,i);s.payload=e,n!=null&&(s.callback=n),e=mi(t,s,i),e!==null&&(Bn(e,t,i,r),Hu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Yt(),i=yi(t),s=xr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=mi(t,s,i),e!==null&&(Bn(e,t,i,r),Hu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Yt(),r=yi(t),i=xr(n,r);i.tag=2,e!=null&&(i.callback=e),e=mi(t,i,r),e!==null&&(Bn(e,t,r,n),Hu(e,t,r))}};function Jy(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ll(n,r)||!ll(i,s):!0}function mE(t,e,n){var r=!1,i=Ri,s=e.contextType;return typeof s=="object"&&s!==null?s=An(s):(i=rn(e)?os:qt.current,r=e.contextTypes,s=(r=r!=null)?go(t,i):Ri),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=dh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Zy(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&dh.enqueueReplaceState(e,e.state,null)}function Lf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},om(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=An(s):(s=rn(e)?os:qt.current,i.context=go(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Of(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&dh.enqueueReplaceState(i,i.state,null),Pc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function wo(t,e){try{var n="",r=e;do n+=yR(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Pd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Mf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var HA=typeof WeakMap=="function"?WeakMap:Map;function gE(t,e,n){n=xr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){bc||(bc=!0,qf=r),Mf(t,e)},n}function yE(t,e,n){n=xr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Mf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Mf(t,e),typeof r!="function"&&(gi===null?gi=new Set([this]):gi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function ev(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new HA;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=iP.bind(null,t,e,n),e.then(t,t))}function tv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function nv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=xr(-1,1),e.tag=2,mi(n,e,1))),n.lanes|=1),t)}var WA=jr.ReactCurrentOwner,tn=!1;function Qt(t,e,n,r){e.child=t===null?qw(e,null,n,r):vo(e,t.child,n,r)}function rv(t,e,n,r,i){n=n.render;var s=e.ref;return lo(e,i),r=hm(t,e,n,r,s,i),n=dm(),t!==null&&!tn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Mr(t,e,i)):(He&&n&&Zp(e),e.flags|=1,Qt(t,e,r,i),e.child)}function iv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Tm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,vE(t,e,s,r,i)):(t=Yu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ll,n(o,r)&&t.ref===e.ref)return Mr(t,e,i)}return e.flags|=1,t=vi(s,r),t.ref=e.ref,t.return=e,e.child=t}function vE(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ll(s,r)&&t.ref===e.ref)if(tn=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(tn=!0);else return e.lanes=t.lanes,Mr(t,e,i)}return Vf(t,e,n,r,i)}function _E(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ve(eo,cn),cn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ve(eo,cn),cn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Ve(eo,cn),cn|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Ve(eo,cn),cn|=r;return Qt(t,e,i,n),e.child}function wE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Vf(t,e,n,r,i){var s=rn(n)?os:qt.current;return s=go(e,s),lo(e,i),n=hm(t,e,n,r,s,i),r=dm(),t!==null&&!tn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Mr(t,e,i)):(He&&r&&Zp(e),e.flags|=1,Qt(t,e,n,i),e.child)}function sv(t,e,n,r,i){if(rn(n)){var s=!0;Tc(e)}else s=!1;if(lo(e,i),e.stateNode===null)Ku(t,e),mE(e,n,r),Lf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=An(c):(c=rn(n)?os:qt.current,c=go(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&Zy(e,o,r,c),ei=!1;var m=e.memoizedState;o.state=m,Pc(e,r,o,i),u=e.memoizedState,l!==r||m!==u||nn.current||ei?(typeof d=="function"&&(Of(e,n,d,r),u=e.memoizedState),(l=ei||Jy(e,n,l,r,m,u,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Gw(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Vn(e.type,l),o.props=c,f=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=An(u):(u=rn(n)?os:qt.current,u=go(e,u));var E=n.getDerivedStateFromProps;(d=typeof E=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==f||m!==u)&&Zy(e,o,r,u),ei=!1,m=e.memoizedState,o.state=m,Pc(e,r,o,i);var S=e.memoizedState;l!==f||m!==S||nn.current||ei?(typeof E=="function"&&(Of(e,n,E,r),S=e.memoizedState),(c=ei||Jy(e,n,c,r,m,S,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,S,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,S,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=S),o.props=r,o.state=S,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Uf(t,e,n,r,s,i)}function Uf(t,e,n,r,i,s){wE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Hy(e,n,!1),Mr(t,e,s);r=e.stateNode,WA.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=vo(e,t.child,null,s),e.child=vo(e,null,l,s)):Qt(t,e,l,s),e.memoizedState=r.state,i&&Hy(e,n,!0),e.child}function EE(t){var e=t.stateNode;e.pendingContext?By(t,e.pendingContext,e.pendingContext!==e.context):e.context&&By(t,e.context,!1),am(t,e.containerInfo)}function ov(t,e,n,r,i){return yo(),tm(i),e.flags|=256,Qt(t,e,n,r),e.child}var Ff={dehydrated:null,treeContext:null,retryLane:0};function jf(t){return{baseLanes:t,cachePool:null,transitions:null}}function TE(t,e,n){var r=e.pendingProps,i=Qe.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ve(Qe,i&1),t===null)return bf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=mh(o,r,0,null),t=ns(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=jf(n),e.memoizedState=Ff,t):mm(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return qA(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=vi(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=vi(l,s):(s=ns(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?jf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Ff,r}return s=t.child,t=s.sibling,r=vi(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function mm(t,e){return e=mh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Au(t,e,n,r){return r!==null&&tm(r),vo(e,t.child,null,n),t=mm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function qA(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Pd(Error(H(422))),Au(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=mh({mode:"visible",children:r.children},i,0,null),s=ns(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&vo(e,t.child,null,o),e.child.memoizedState=jf(o),e.memoizedState=Ff,s);if(!(e.mode&1))return Au(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(H(419)),r=Pd(s,r,void 0),Au(t,e,o,r)}if(l=(o&t.childLanes)!==0,tn||l){if(r=Tt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Lr(t,i),Bn(r,t,i,-1))}return Em(),r=Pd(Error(H(421))),Au(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=sP.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,dn=pi(i.nextSibling),mn=e,He=!0,jn=null,t!==null&&(Tn[In++]=Rr,Tn[In++]=Ar,Tn[In++]=as,Rr=t.id,Ar=t.overflow,as=e),e=mm(e,r.children),e.flags|=4096,e)}function av(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Df(t.return,e,n)}function Cd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function IE(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Qt(t,e,r.children,n),r=Qe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&av(t,n,e);else if(t.tag===19)av(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ve(Qe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Cc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Cd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Cc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Cd(e,!0,n,null,s);break;case"together":Cd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ku(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Mr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),us|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(H(153));if(e.child!==null){for(t=e.child,n=vi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=vi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function KA(t,e,n){switch(e.tag){case 3:EE(e),yo();break;case 5:Qw(e);break;case 1:rn(e.type)&&Tc(e);break;case 4:am(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Ve(Rc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ve(Qe,Qe.current&1),e.flags|=128,null):n&e.child.childLanes?TE(t,e,n):(Ve(Qe,Qe.current&1),t=Mr(t,e,n),t!==null?t.sibling:null);Ve(Qe,Qe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return IE(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ve(Qe,Qe.current),r)break;return null;case 22:case 23:return e.lanes=0,_E(t,e,n)}return Mr(t,e,n)}var SE,zf,RE,AE;SE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};zf=function(){};RE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Qi(ar.current);var s=null;switch(n){case"input":i=uf(t,i),r=uf(t,r),s=[];break;case"select":i=Xe({},i,{value:void 0}),r=Xe({},r,{value:void 0}),s=[];break;case"textarea":i=df(t,i),r=df(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=wc)}pf(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(tl.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(tl.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&je("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};AE=function(t,e,n,r){n!==r&&(e.flags|=4)};function va(t,e){if(!He)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ft(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function GA(t,e,n){var r=e.pendingProps;switch(em(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ft(e),null;case 1:return rn(e.type)&&Ec(),Ft(e),null;case 3:return r=e.stateNode,_o(),Be(nn),Be(qt),um(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Su(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,jn!==null&&(Qf(jn),jn=null))),zf(t,e),Ft(e),null;case 5:lm(e);var i=Qi(fl.current);if(n=e.type,t!==null&&e.stateNode!=null)RE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(H(166));return Ft(e),null}if(t=Qi(ar.current),Su(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[rr]=e,r[hl]=s,t=(e.mode&1)!==0,n){case"dialog":je("cancel",r),je("close",r);break;case"iframe":case"object":case"embed":je("load",r);break;case"video":case"audio":for(i=0;i<Ca.length;i++)je(Ca[i],r);break;case"source":je("error",r);break;case"img":case"image":case"link":je("error",r),je("load",r);break;case"details":je("toggle",r);break;case"input":gy(r,s),je("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},je("invalid",r);break;case"textarea":vy(r,s),je("invalid",r)}pf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Iu(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Iu(r.textContent,l,t),i=["children",""+l]):tl.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&je("scroll",r)}switch(n){case"input":mu(r),yy(r,s,!0);break;case"textarea":mu(r),_y(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=wc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ew(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[rr]=e,t[hl]=r,SE(t,e,!1,!1),e.stateNode=t;e:{switch(o=mf(n,r),n){case"dialog":je("cancel",t),je("close",t),i=r;break;case"iframe":case"object":case"embed":je("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ca.length;i++)je(Ca[i],t);i=r;break;case"source":je("error",t),i=r;break;case"img":case"image":case"link":je("error",t),je("load",t),i=r;break;case"details":je("toggle",t),i=r;break;case"input":gy(t,r),i=uf(t,r),je("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Xe({},r,{value:void 0}),je("invalid",t);break;case"textarea":vy(t,r),i=df(t,r),je("invalid",t);break;default:i=r}pf(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?rw(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&tw(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&nl(t,u):typeof u=="number"&&nl(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(tl.hasOwnProperty(s)?u!=null&&s==="onScroll"&&je("scroll",t):u!=null&&Fp(t,s,u,o))}switch(n){case"input":mu(t),yy(t,r,!1);break;case"textarea":mu(t),_y(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Si(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?io(t,!!r.multiple,s,!1):r.defaultValue!=null&&io(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=wc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ft(e),null;case 6:if(t&&e.stateNode!=null)AE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(H(166));if(n=Qi(fl.current),Qi(ar.current),Su(e)){if(r=e.stateNode,n=e.memoizedProps,r[rr]=e,(s=r.nodeValue!==n)&&(t=mn,t!==null))switch(t.tag){case 3:Iu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Iu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[rr]=e,e.stateNode=r}return Ft(e),null;case 13:if(Be(Qe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(He&&dn!==null&&e.mode&1&&!(e.flags&128))Hw(),yo(),e.flags|=98560,s=!1;else if(s=Su(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(H(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(H(317));s[rr]=e}else yo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ft(e),s=!1}else jn!==null&&(Qf(jn),jn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Qe.current&1?gt===0&&(gt=3):Em())),e.updateQueue!==null&&(e.flags|=4),Ft(e),null);case 4:return _o(),zf(t,e),t===null&&ul(e.stateNode.containerInfo),Ft(e),null;case 10:return im(e.type._context),Ft(e),null;case 17:return rn(e.type)&&Ec(),Ft(e),null;case 19:if(Be(Qe),s=e.memoizedState,s===null)return Ft(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)va(s,!1);else{if(gt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Cc(t),o!==null){for(e.flags|=128,va(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ve(Qe,Qe.current&1|2),e.child}t=t.sibling}s.tail!==null&&ot()>Eo&&(e.flags|=128,r=!0,va(s,!1),e.lanes=4194304)}else{if(!r)if(t=Cc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),va(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!He)return Ft(e),null}else 2*ot()-s.renderingStartTime>Eo&&n!==1073741824&&(e.flags|=128,r=!0,va(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ot(),e.sibling=null,n=Qe.current,Ve(Qe,r?n&1|2:n&1),e):(Ft(e),null);case 22:case 23:return wm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?cn&1073741824&&(Ft(e),e.subtreeFlags&6&&(e.flags|=8192)):Ft(e),null;case 24:return null;case 25:return null}throw Error(H(156,e.tag))}function QA(t,e){switch(em(e),e.tag){case 1:return rn(e.type)&&Ec(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return _o(),Be(nn),Be(qt),um(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return lm(e),null;case 13:if(Be(Qe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(H(340));yo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Be(Qe),null;case 4:return _o(),null;case 10:return im(e.type._context),null;case 22:case 23:return wm(),null;case 24:return null;default:return null}}var Pu=!1,$t=!1,YA=typeof WeakSet=="function"?WeakSet:Set,Y=null;function Zs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){tt(t,e,r)}else n.current=null}function $f(t,e,n){try{n()}catch(r){tt(t,e,r)}}var lv=!1;function XA(t,e){if(Rf=yc,t=Nw(),Jp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,d=0,f=t,m=null;t:for(;;){for(var E;f!==n||i!==0&&f.nodeType!==3||(l=o+i),f!==s||r!==0&&f.nodeType!==3||(u=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(E=f.firstChild)!==null;)m=f,f=E;for(;;){if(f===t)break t;if(m===n&&++c===i&&(l=o),m===s&&++d===r&&(u=o),(E=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=E}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Af={focusedElem:t,selectionRange:n},yc=!1,Y=e;Y!==null;)if(e=Y,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Y=t;else for(;Y!==null;){e=Y;try{var S=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var C=S.memoizedProps,b=S.memoizedState,I=e.stateNode,v=I.getSnapshotBeforeUpdate(e.elementType===e.type?C:Vn(e.type,C),b);I.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var R=e.stateNode.containerInfo;R.nodeType===1?R.textContent="":R.nodeType===9&&R.documentElement&&R.removeChild(R.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(H(163))}}catch(O){tt(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,Y=t;break}Y=e.return}return S=lv,lv=!1,S}function Ba(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&$f(e,n,s)}i=i.next}while(i!==r)}}function fh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Bf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function PE(t){var e=t.alternate;e!==null&&(t.alternate=null,PE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[rr],delete e[hl],delete e[kf],delete e[DA],delete e[OA])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function CE(t){return t.tag===5||t.tag===3||t.tag===4}function uv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||CE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Hf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=wc));else if(r!==4&&(t=t.child,t!==null))for(Hf(t,e,n),t=t.sibling;t!==null;)Hf(t,e,n),t=t.sibling}function Wf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Wf(t,e,n),t=t.sibling;t!==null;)Wf(t,e,n),t=t.sibling}var Rt=null,Un=!1;function Qr(t,e,n){for(n=n.child;n!==null;)kE(t,e,n),n=n.sibling}function kE(t,e,n){if(or&&typeof or.onCommitFiberUnmount=="function")try{or.onCommitFiberUnmount(sh,n)}catch{}switch(n.tag){case 5:$t||Zs(n,e);case 6:var r=Rt,i=Un;Rt=null,Qr(t,e,n),Rt=r,Un=i,Rt!==null&&(Un?(t=Rt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Rt.removeChild(n.stateNode));break;case 18:Rt!==null&&(Un?(t=Rt,n=n.stateNode,t.nodeType===8?Ed(t.parentNode,n):t.nodeType===1&&Ed(t,n),ol(t)):Ed(Rt,n.stateNode));break;case 4:r=Rt,i=Un,Rt=n.stateNode.containerInfo,Un=!0,Qr(t,e,n),Rt=r,Un=i;break;case 0:case 11:case 14:case 15:if(!$t&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&$f(n,e,o),i=i.next}while(i!==r)}Qr(t,e,n);break;case 1:if(!$t&&(Zs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){tt(n,e,l)}Qr(t,e,n);break;case 21:Qr(t,e,n);break;case 22:n.mode&1?($t=(r=$t)||n.memoizedState!==null,Qr(t,e,n),$t=r):Qr(t,e,n);break;default:Qr(t,e,n)}}function cv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new YA),e.forEach(function(r){var i=oP.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Mn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Rt=l.stateNode,Un=!1;break e;case 3:Rt=l.stateNode.containerInfo,Un=!0;break e;case 4:Rt=l.stateNode.containerInfo,Un=!0;break e}l=l.return}if(Rt===null)throw Error(H(160));kE(s,o,i),Rt=null,Un=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){tt(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)xE(e,t),e=e.sibling}function xE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Mn(e,t),er(t),r&4){try{Ba(3,t,t.return),fh(3,t)}catch(C){tt(t,t.return,C)}try{Ba(5,t,t.return)}catch(C){tt(t,t.return,C)}}break;case 1:Mn(e,t),er(t),r&512&&n!==null&&Zs(n,n.return);break;case 5:if(Mn(e,t),er(t),r&512&&n!==null&&Zs(n,n.return),t.flags&32){var i=t.stateNode;try{nl(i,"")}catch(C){tt(t,t.return,C)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&J0(i,s),mf(l,o);var c=mf(l,s);for(o=0;o<u.length;o+=2){var d=u[o],f=u[o+1];d==="style"?rw(i,f):d==="dangerouslySetInnerHTML"?tw(i,f):d==="children"?nl(i,f):Fp(i,d,f,c)}switch(l){case"input":cf(i,s);break;case"textarea":Z0(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var E=s.value;E!=null?io(i,!!s.multiple,E,!1):m!==!!s.multiple&&(s.defaultValue!=null?io(i,!!s.multiple,s.defaultValue,!0):io(i,!!s.multiple,s.multiple?[]:"",!1))}i[hl]=s}catch(C){tt(t,t.return,C)}}break;case 6:if(Mn(e,t),er(t),r&4){if(t.stateNode===null)throw Error(H(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(C){tt(t,t.return,C)}}break;case 3:if(Mn(e,t),er(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ol(e.containerInfo)}catch(C){tt(t,t.return,C)}break;case 4:Mn(e,t),er(t);break;case 13:Mn(e,t),er(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(vm=ot())),r&4&&cv(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?($t=(c=$t)||d,Mn(e,t),$t=c):Mn(e,t),er(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(Y=t,d=t.child;d!==null;){for(f=Y=d;Y!==null;){switch(m=Y,E=m.child,m.tag){case 0:case 11:case 14:case 15:Ba(4,m,m.return);break;case 1:Zs(m,m.return);var S=m.stateNode;if(typeof S.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,S.props=e.memoizedProps,S.state=e.memoizedState,S.componentWillUnmount()}catch(C){tt(r,n,C)}}break;case 5:Zs(m,m.return);break;case 22:if(m.memoizedState!==null){dv(f);continue}}E!==null?(E.return=m,Y=E):dv(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=nw("display",o))}catch(C){tt(t,t.return,C)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(C){tt(t,t.return,C)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Mn(e,t),er(t),r&4&&cv(t);break;case 21:break;default:Mn(e,t),er(t)}}function er(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(CE(n)){var r=n;break e}n=n.return}throw Error(H(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(nl(i,""),r.flags&=-33);var s=uv(t);Wf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=uv(t);Hf(t,l,o);break;default:throw Error(H(161))}}catch(u){tt(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function JA(t,e,n){Y=t,NE(t)}function NE(t,e,n){for(var r=(t.mode&1)!==0;Y!==null;){var i=Y,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Pu;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||$t;l=Pu;var c=$t;if(Pu=o,($t=u)&&!c)for(Y=i;Y!==null;)o=Y,u=o.child,o.tag===22&&o.memoizedState!==null?fv(i):u!==null?(u.return=o,Y=u):fv(i);for(;s!==null;)Y=s,NE(s),s=s.sibling;Y=i,Pu=l,$t=c}hv(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,Y=s):hv(t)}}function hv(t){for(;Y!==null;){var e=Y;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:$t||fh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!$t)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Vn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Qy(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Qy(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&ol(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(H(163))}$t||e.flags&512&&Bf(e)}catch(m){tt(e,e.return,m)}}if(e===t){Y=null;break}if(n=e.sibling,n!==null){n.return=e.return,Y=n;break}Y=e.return}}function dv(t){for(;Y!==null;){var e=Y;if(e===t){Y=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Y=n;break}Y=e.return}}function fv(t){for(;Y!==null;){var e=Y;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{fh(4,e)}catch(u){tt(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){tt(e,i,u)}}var s=e.return;try{Bf(e)}catch(u){tt(e,s,u)}break;case 5:var o=e.return;try{Bf(e)}catch(u){tt(e,o,u)}}}catch(u){tt(e,e.return,u)}if(e===t){Y=null;break}var l=e.sibling;if(l!==null){l.return=e.return,Y=l;break}Y=e.return}}var ZA=Math.ceil,Nc=jr.ReactCurrentDispatcher,gm=jr.ReactCurrentOwner,Rn=jr.ReactCurrentBatchConfig,Se=0,Tt=null,ht=null,Ct=0,cn=0,eo=Ni(0),gt=0,yl=null,us=0,ph=0,ym=0,Ha=null,Zt=null,vm=0,Eo=1/0,Tr=null,bc=!1,qf=null,gi=null,Cu=!1,ui=null,Dc=0,Wa=0,Kf=null,Gu=-1,Qu=0;function Yt(){return Se&6?ot():Gu!==-1?Gu:Gu=ot()}function yi(t){return t.mode&1?Se&2&&Ct!==0?Ct&-Ct:MA.transition!==null?(Qu===0&&(Qu=mw()),Qu):(t=Ne,t!==0||(t=window.event,t=t===void 0?16:Tw(t.type)),t):1}function Bn(t,e,n,r){if(50<Wa)throw Wa=0,Kf=null,Error(H(185));Dl(t,n,r),(!(Se&2)||t!==Tt)&&(t===Tt&&(!(Se&2)&&(ph|=n),gt===4&&ni(t,Ct)),sn(t,r),n===1&&Se===0&&!(e.mode&1)&&(Eo=ot()+500,ch&&bi()))}function sn(t,e){var n=t.callbackNode;MR(t,e);var r=gc(t,t===Tt?Ct:0);if(r===0)n!==null&&Ty(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Ty(n),e===1)t.tag===0?LA(pv.bind(null,t)):zw(pv.bind(null,t)),NA(function(){!(Se&6)&&bi()}),n=null;else{switch(gw(r)){case 1:n=Hp;break;case 4:n=fw;break;case 16:n=mc;break;case 536870912:n=pw;break;default:n=mc}n=FE(n,bE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function bE(t,e){if(Gu=-1,Qu=0,Se&6)throw Error(H(327));var n=t.callbackNode;if(uo()&&t.callbackNode!==n)return null;var r=gc(t,t===Tt?Ct:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Oc(t,r);else{e=r;var i=Se;Se|=2;var s=OE();(Tt!==t||Ct!==e)&&(Tr=null,Eo=ot()+500,ts(t,e));do try{nP();break}catch(l){DE(t,l)}while(!0);rm(),Nc.current=s,Se=i,ht!==null?e=0:(Tt=null,Ct=0,e=gt)}if(e!==0){if(e===2&&(i=wf(t),i!==0&&(r=i,e=Gf(t,i))),e===1)throw n=yl,ts(t,0),ni(t,r),sn(t,ot()),n;if(e===6)ni(t,r);else{if(i=t.current.alternate,!(r&30)&&!eP(i)&&(e=Oc(t,r),e===2&&(s=wf(t),s!==0&&(r=s,e=Gf(t,s))),e===1))throw n=yl,ts(t,0),ni(t,r),sn(t,ot()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(H(345));case 2:Hi(t,Zt,Tr);break;case 3:if(ni(t,r),(r&130023424)===r&&(e=vm+500-ot(),10<e)){if(gc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Yt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Cf(Hi.bind(null,t,Zt,Tr),e);break}Hi(t,Zt,Tr);break;case 4:if(ni(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-$n(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ot()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ZA(r/1960))-r,10<r){t.timeoutHandle=Cf(Hi.bind(null,t,Zt,Tr),r);break}Hi(t,Zt,Tr);break;case 5:Hi(t,Zt,Tr);break;default:throw Error(H(329))}}}return sn(t,ot()),t.callbackNode===n?bE.bind(null,t):null}function Gf(t,e){var n=Ha;return t.current.memoizedState.isDehydrated&&(ts(t,e).flags|=256),t=Oc(t,e),t!==2&&(e=Zt,Zt=n,e!==null&&Qf(e)),t}function Qf(t){Zt===null?Zt=t:Zt.push.apply(Zt,t)}function eP(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Wn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ni(t,e){for(e&=~ym,e&=~ph,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-$n(e),r=1<<n;t[n]=-1,e&=~r}}function pv(t){if(Se&6)throw Error(H(327));uo();var e=gc(t,0);if(!(e&1))return sn(t,ot()),null;var n=Oc(t,e);if(t.tag!==0&&n===2){var r=wf(t);r!==0&&(e=r,n=Gf(t,r))}if(n===1)throw n=yl,ts(t,0),ni(t,e),sn(t,ot()),n;if(n===6)throw Error(H(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Hi(t,Zt,Tr),sn(t,ot()),null}function _m(t,e){var n=Se;Se|=1;try{return t(e)}finally{Se=n,Se===0&&(Eo=ot()+500,ch&&bi())}}function cs(t){ui!==null&&ui.tag===0&&!(Se&6)&&uo();var e=Se;Se|=1;var n=Rn.transition,r=Ne;try{if(Rn.transition=null,Ne=1,t)return t()}finally{Ne=r,Rn.transition=n,Se=e,!(Se&6)&&bi()}}function wm(){cn=eo.current,Be(eo)}function ts(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,xA(n)),ht!==null)for(n=ht.return;n!==null;){var r=n;switch(em(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ec();break;case 3:_o(),Be(nn),Be(qt),um();break;case 5:lm(r);break;case 4:_o();break;case 13:Be(Qe);break;case 19:Be(Qe);break;case 10:im(r.type._context);break;case 22:case 23:wm()}n=n.return}if(Tt=t,ht=t=vi(t.current,null),Ct=cn=e,gt=0,yl=null,ym=ph=us=0,Zt=Ha=null,Gi!==null){for(e=0;e<Gi.length;e++)if(n=Gi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Gi=null}return t}function DE(t,e){do{var n=ht;try{if(rm(),Wu.current=xc,kc){for(var r=Ye.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}kc=!1}if(ls=0,wt=mt=Ye=null,$a=!1,pl=0,gm.current=null,n===null||n.return===null){gt=1,yl=e,ht=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Ct,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=l,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var E=tv(o);if(E!==null){E.flags&=-257,nv(E,o,l,s,e),E.mode&1&&ev(s,c,e),e=E,u=c;var S=e.updateQueue;if(S===null){var C=new Set;C.add(u),e.updateQueue=C}else S.add(u);break e}else{if(!(e&1)){ev(s,c,e),Em();break e}u=Error(H(426))}}else if(He&&l.mode&1){var b=tv(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),nv(b,o,l,s,e),tm(wo(u,l));break e}}s=u=wo(u,l),gt!==4&&(gt=2),Ha===null?Ha=[s]:Ha.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var I=gE(s,u,e);Gy(s,I);break e;case 1:l=u;var v=s.type,R=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||R!==null&&typeof R.componentDidCatch=="function"&&(gi===null||!gi.has(R)))){s.flags|=65536,e&=-e,s.lanes|=e;var O=yE(s,l,e);Gy(s,O);break e}}s=s.return}while(s!==null)}ME(n)}catch(F){e=F,ht===n&&n!==null&&(ht=n=n.return);continue}break}while(!0)}function OE(){var t=Nc.current;return Nc.current=xc,t===null?xc:t}function Em(){(gt===0||gt===3||gt===2)&&(gt=4),Tt===null||!(us&268435455)&&!(ph&268435455)||ni(Tt,Ct)}function Oc(t,e){var n=Se;Se|=2;var r=OE();(Tt!==t||Ct!==e)&&(Tr=null,ts(t,e));do try{tP();break}catch(i){DE(t,i)}while(!0);if(rm(),Se=n,Nc.current=r,ht!==null)throw Error(H(261));return Tt=null,Ct=0,gt}function tP(){for(;ht!==null;)LE(ht)}function nP(){for(;ht!==null&&!PR();)LE(ht)}function LE(t){var e=UE(t.alternate,t,cn);t.memoizedProps=t.pendingProps,e===null?ME(t):ht=e,gm.current=null}function ME(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=QA(n,e),n!==null){n.flags&=32767,ht=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{gt=6,ht=null;return}}else if(n=GA(n,e,cn),n!==null){ht=n;return}if(e=e.sibling,e!==null){ht=e;return}ht=e=t}while(e!==null);gt===0&&(gt=5)}function Hi(t,e,n){var r=Ne,i=Rn.transition;try{Rn.transition=null,Ne=1,rP(t,e,n,r)}finally{Rn.transition=i,Ne=r}return null}function rP(t,e,n,r){do uo();while(ui!==null);if(Se&6)throw Error(H(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(H(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(VR(t,s),t===Tt&&(ht=Tt=null,Ct=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Cu||(Cu=!0,FE(mc,function(){return uo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Rn.transition,Rn.transition=null;var o=Ne;Ne=1;var l=Se;Se|=4,gm.current=null,XA(t,n),xE(n,t),IA(Af),yc=!!Rf,Af=Rf=null,t.current=n,JA(n),CR(),Se=l,Ne=o,Rn.transition=s}else t.current=n;if(Cu&&(Cu=!1,ui=t,Dc=i),s=t.pendingLanes,s===0&&(gi=null),NR(n.stateNode),sn(t,ot()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(bc)throw bc=!1,t=qf,qf=null,t;return Dc&1&&t.tag!==0&&uo(),s=t.pendingLanes,s&1?t===Kf?Wa++:(Wa=0,Kf=t):Wa=0,bi(),null}function uo(){if(ui!==null){var t=gw(Dc),e=Rn.transition,n=Ne;try{if(Rn.transition=null,Ne=16>t?16:t,ui===null)var r=!1;else{if(t=ui,ui=null,Dc=0,Se&6)throw Error(H(331));var i=Se;for(Se|=4,Y=t.current;Y!==null;){var s=Y,o=s.child;if(Y.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(Y=c;Y!==null;){var d=Y;switch(d.tag){case 0:case 11:case 15:Ba(8,d,s)}var f=d.child;if(f!==null)f.return=d,Y=f;else for(;Y!==null;){d=Y;var m=d.sibling,E=d.return;if(PE(d),d===c){Y=null;break}if(m!==null){m.return=E,Y=m;break}Y=E}}}var S=s.alternate;if(S!==null){var C=S.child;if(C!==null){S.child=null;do{var b=C.sibling;C.sibling=null,C=b}while(C!==null)}}Y=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Y=o;else e:for(;Y!==null;){if(s=Y,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ba(9,s,s.return)}var I=s.sibling;if(I!==null){I.return=s.return,Y=I;break e}Y=s.return}}var v=t.current;for(Y=v;Y!==null;){o=Y;var R=o.child;if(o.subtreeFlags&2064&&R!==null)R.return=o,Y=R;else e:for(o=v;Y!==null;){if(l=Y,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:fh(9,l)}}catch(F){tt(l,l.return,F)}if(l===o){Y=null;break e}var O=l.sibling;if(O!==null){O.return=l.return,Y=O;break e}Y=l.return}}if(Se=i,bi(),or&&typeof or.onPostCommitFiberRoot=="function")try{or.onPostCommitFiberRoot(sh,t)}catch{}r=!0}return r}finally{Ne=n,Rn.transition=e}}return!1}function mv(t,e,n){e=wo(n,e),e=gE(t,e,1),t=mi(t,e,1),e=Yt(),t!==null&&(Dl(t,1,e),sn(t,e))}function tt(t,e,n){if(t.tag===3)mv(t,t,n);else for(;e!==null;){if(e.tag===3){mv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(gi===null||!gi.has(r))){t=wo(n,t),t=yE(e,t,1),e=mi(e,t,1),t=Yt(),e!==null&&(Dl(e,1,t),sn(e,t));break}}e=e.return}}function iP(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Yt(),t.pingedLanes|=t.suspendedLanes&n,Tt===t&&(Ct&n)===n&&(gt===4||gt===3&&(Ct&130023424)===Ct&&500>ot()-vm?ts(t,0):ym|=n),sn(t,e)}function VE(t,e){e===0&&(t.mode&1?(e=vu,vu<<=1,!(vu&130023424)&&(vu=4194304)):e=1);var n=Yt();t=Lr(t,e),t!==null&&(Dl(t,e,n),sn(t,n))}function sP(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),VE(t,n)}function oP(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(H(314))}r!==null&&r.delete(e),VE(t,n)}var UE;UE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||nn.current)tn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return tn=!1,KA(t,e,n);tn=!!(t.flags&131072)}else tn=!1,He&&e.flags&1048576&&$w(e,Sc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ku(t,e),t=e.pendingProps;var i=go(e,qt.current);lo(e,n),i=hm(null,e,r,t,i,n);var s=dm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,rn(r)?(s=!0,Tc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,om(e),i.updater=dh,e.stateNode=i,i._reactInternals=e,Lf(e,r,t,n),e=Uf(null,e,r,!0,s,n)):(e.tag=0,He&&s&&Zp(e),Qt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ku(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=lP(r),t=Vn(r,t),i){case 0:e=Vf(null,e,r,t,n);break e;case 1:e=sv(null,e,r,t,n);break e;case 11:e=rv(null,e,r,t,n);break e;case 14:e=iv(null,e,r,Vn(r.type,t),n);break e}throw Error(H(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vn(r,i),Vf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vn(r,i),sv(t,e,r,i,n);case 3:e:{if(EE(e),t===null)throw Error(H(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Gw(t,e),Pc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=wo(Error(H(423)),e),e=ov(t,e,r,n,i);break e}else if(r!==i){i=wo(Error(H(424)),e),e=ov(t,e,r,n,i);break e}else for(dn=pi(e.stateNode.containerInfo.firstChild),mn=e,He=!0,jn=null,n=qw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(yo(),r===i){e=Mr(t,e,n);break e}Qt(t,e,r,n)}e=e.child}return e;case 5:return Qw(e),t===null&&bf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Pf(r,i)?o=null:s!==null&&Pf(r,s)&&(e.flags|=32),wE(t,e),Qt(t,e,o,n),e.child;case 6:return t===null&&bf(e),null;case 13:return TE(t,e,n);case 4:return am(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=vo(e,null,r,n):Qt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vn(r,i),rv(t,e,r,i,n);case 7:return Qt(t,e,e.pendingProps,n),e.child;case 8:return Qt(t,e,e.pendingProps.children,n),e.child;case 12:return Qt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Ve(Rc,r._currentValue),r._currentValue=o,s!==null)if(Wn(s.value,o)){if(s.children===i.children&&!nn.current){e=Mr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=xr(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Df(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(H(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Df(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Qt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,lo(e,n),i=An(i),r=r(i),e.flags|=1,Qt(t,e,r,n),e.child;case 14:return r=e.type,i=Vn(r,e.pendingProps),i=Vn(r.type,i),iv(t,e,r,i,n);case 15:return vE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vn(r,i),Ku(t,e),e.tag=1,rn(r)?(t=!0,Tc(e)):t=!1,lo(e,n),mE(e,r,i),Lf(e,r,i,n),Uf(null,e,r,!0,t,n);case 19:return IE(t,e,n);case 22:return _E(t,e,n)}throw Error(H(156,e.tag))};function FE(t,e){return dw(t,e)}function aP(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Sn(t,e,n,r){return new aP(t,e,n,r)}function Tm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function lP(t){if(typeof t=="function")return Tm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===zp)return 11;if(t===$p)return 14}return 2}function vi(t,e){var n=t.alternate;return n===null?(n=Sn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Yu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Tm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Hs:return ns(n.children,i,s,e);case jp:o=8,i|=8;break;case sf:return t=Sn(12,n,e,i|2),t.elementType=sf,t.lanes=s,t;case of:return t=Sn(13,n,e,i),t.elementType=of,t.lanes=s,t;case af:return t=Sn(19,n,e,i),t.elementType=af,t.lanes=s,t;case Q0:return mh(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case K0:o=10;break e;case G0:o=9;break e;case zp:o=11;break e;case $p:o=14;break e;case Zr:o=16,r=null;break e}throw Error(H(130,t==null?t:typeof t,""))}return e=Sn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ns(t,e,n,r){return t=Sn(7,t,r,e),t.lanes=n,t}function mh(t,e,n,r){return t=Sn(22,t,r,e),t.elementType=Q0,t.lanes=n,t.stateNode={isHidden:!1},t}function kd(t,e,n){return t=Sn(6,t,null,e),t.lanes=n,t}function xd(t,e,n){return e=Sn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function uP(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=cd(0),this.expirationTimes=cd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Im(t,e,n,r,i,s,o,l,u){return t=new uP(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Sn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},om(s),t}function cP(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Bs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function jE(t){if(!t)return Ri;t=t._reactInternals;e:{if(Ts(t)!==t||t.tag!==1)throw Error(H(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(rn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(H(171))}if(t.tag===1){var n=t.type;if(rn(n))return jw(t,n,e)}return e}function zE(t,e,n,r,i,s,o,l,u){return t=Im(n,r,!0,t,i,s,o,l,u),t.context=jE(null),n=t.current,r=Yt(),i=yi(n),s=xr(r,i),s.callback=e??null,mi(n,s,i),t.current.lanes=i,Dl(t,i,r),sn(t,r),t}function gh(t,e,n,r){var i=e.current,s=Yt(),o=yi(i);return n=jE(n),e.context===null?e.context=n:e.pendingContext=n,e=xr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=mi(i,e,o),t!==null&&(Bn(t,i,o,s),Hu(t,i,o)),o}function Lc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function gv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Sm(t,e){gv(t,e),(t=t.alternate)&&gv(t,e)}function hP(){return null}var $E=typeof reportError=="function"?reportError:function(t){console.error(t)};function Rm(t){this._internalRoot=t}yh.prototype.render=Rm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(H(409));gh(t,e,null,null)};yh.prototype.unmount=Rm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;cs(function(){gh(null,t,null,null)}),e[Or]=null}};function yh(t){this._internalRoot=t}yh.prototype.unstable_scheduleHydration=function(t){if(t){var e=_w();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ti.length&&e!==0&&e<ti[n].priority;n++);ti.splice(n,0,t),n===0&&Ew(t)}};function Am(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function vh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function yv(){}function dP(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Lc(o);s.call(c)}}var o=zE(e,r,t,0,null,!1,!1,"",yv);return t._reactRootContainer=o,t[Or]=o.current,ul(t.nodeType===8?t.parentNode:t),cs(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=Lc(u);l.call(c)}}var u=Im(t,0,!1,null,null,!1,!1,"",yv);return t._reactRootContainer=u,t[Or]=u.current,ul(t.nodeType===8?t.parentNode:t),cs(function(){gh(e,u,n,r)}),u}function _h(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Lc(o);l.call(u)}}gh(e,o,t,i)}else o=dP(n,e,t,i,r);return Lc(o)}yw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Pa(e.pendingLanes);n!==0&&(Wp(e,n|1),sn(e,ot()),!(Se&6)&&(Eo=ot()+500,bi()))}break;case 13:cs(function(){var r=Lr(t,1);if(r!==null){var i=Yt();Bn(r,t,1,i)}}),Sm(t,1)}};qp=function(t){if(t.tag===13){var e=Lr(t,134217728);if(e!==null){var n=Yt();Bn(e,t,134217728,n)}Sm(t,134217728)}};vw=function(t){if(t.tag===13){var e=yi(t),n=Lr(t,e);if(n!==null){var r=Yt();Bn(n,t,e,r)}Sm(t,e)}};_w=function(){return Ne};ww=function(t,e){var n=Ne;try{return Ne=t,e()}finally{Ne=n}};yf=function(t,e,n){switch(e){case"input":if(cf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=uh(r);if(!i)throw Error(H(90));X0(r),cf(r,i)}}}break;case"textarea":Z0(t,n);break;case"select":e=n.value,e!=null&&io(t,!!n.multiple,e,!1)}};ow=_m;aw=cs;var fP={usingClientEntryPoint:!1,Events:[Ll,Gs,uh,iw,sw,_m]},_a={findFiberByHostInstance:Ki,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},pP={bundleType:_a.bundleType,version:_a.version,rendererPackageName:_a.rendererPackageName,rendererConfig:_a.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:jr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=cw(t),t===null?null:t.stateNode},findFiberByHostInstance:_a.findFiberByHostInstance||hP,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ku=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ku.isDisabled&&ku.supportsFiber)try{sh=ku.inject(pP),or=ku}catch{}}yn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fP;yn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Am(e))throw Error(H(200));return cP(t,e,null,n)};yn.createRoot=function(t,e){if(!Am(t))throw Error(H(299));var n=!1,r="",i=$E;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Im(t,1,!1,null,null,n,!1,r,i),t[Or]=e.current,ul(t.nodeType===8?t.parentNode:t),new Rm(e)};yn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(H(188)):(t=Object.keys(t).join(","),Error(H(268,t)));return t=cw(e),t=t===null?null:t.stateNode,t};yn.flushSync=function(t){return cs(t)};yn.hydrate=function(t,e,n){if(!vh(e))throw Error(H(200));return _h(null,t,e,!0,n)};yn.hydrateRoot=function(t,e,n){if(!Am(t))throw Error(H(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=$E;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=zE(e,null,t,1,n??null,i,!1,s,o),t[Or]=e.current,ul(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new yh(e)};yn.render=function(t,e,n){if(!vh(e))throw Error(H(200));return _h(null,t,e,!1,n)};yn.unmountComponentAtNode=function(t){if(!vh(t))throw Error(H(40));return t._reactRootContainer?(cs(function(){_h(null,null,t,!1,function(){t._reactRootContainer=null,t[Or]=null})}),!0):!1};yn.unstable_batchedUpdates=_m;yn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!vh(n))throw Error(H(200));if(t==null||t._reactInternals===void 0)throw Error(H(38));return _h(t,e,n,!1,r)};yn.version="18.3.1-next-f1338f8080-20240426";function BE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(BE)}catch(t){console.error(t)}}BE(),B0.exports=yn;var Pm=B0.exports;const mP=N0(Pm),gP=x0({__proto__:null,default:mP},[Pm]);var vv=Pm;nf.createRoot=vv.createRoot,nf.hydrateRoot=vv.hydrateRoot;/**
 * @remix-run/router v1.19.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ge(){return Ge=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ge.apply(this,arguments)}var lt;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(lt||(lt={}));const _v="popstate";function yP(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return vl("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:hs(i)}return _P(e,n,null,t)}function ge(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function To(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function vP(){return Math.random().toString(36).substr(2,8)}function wv(t,e){return{usr:t.state,key:t.key,idx:e}}function vl(t,e,n,r){return n===void 0&&(n=null),Ge({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Di(e):e,{state:n,key:e&&e.key||r||vP()})}function hs(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Di(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function _P(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=lt.Pop,u=null,c=d();c==null&&(c=0,o.replaceState(Ge({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function f(){l=lt.Pop;let b=d(),I=b==null?null:b-c;c=b,u&&u({action:l,location:C.location,delta:I})}function m(b,I){l=lt.Push;let v=vl(C.location,b,I);c=d()+1;let R=wv(v,c),O=C.createHref(v);try{o.pushState(R,"",O)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;i.location.assign(O)}s&&u&&u({action:l,location:C.location,delta:1})}function E(b,I){l=lt.Replace;let v=vl(C.location,b,I);c=d();let R=wv(v,c),O=C.createHref(v);o.replaceState(R,"",O),s&&u&&u({action:l,location:C.location,delta:0})}function S(b){let I=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof b=="string"?b:hs(b);return v=v.replace(/ $/,"%20"),ge(I,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,I)}let C={get action(){return l},get location(){return t(i,o)},listen(b){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(_v,f),u=b,()=>{i.removeEventListener(_v,f),u=null}},createHref(b){return e(i,b)},createURL:S,encodeLocation(b){let I=S(b);return{pathname:I.pathname,search:I.search,hash:I.hash}},push:m,replace:E,go(b){return o.go(b)}};return C}var Oe;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Oe||(Oe={}));const wP=new Set(["lazy","caseSensitive","path","id","index","children"]);function EP(t){return t.index===!0}function _l(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,s)=>{let o=[...n,String(s)],l=typeof i.id=="string"?i.id:o.join("-");if(ge(i.index!==!0||!i.children,"Cannot specify children on an index route"),ge(!r[l],'Found a route id collision on id "'+l+`".  Route id's must be globally unique within Data Router usages`),EP(i)){let u=Ge({},i,e(i),{id:l});return r[l]=u,u}else{let u=Ge({},i,e(i),{id:l,children:void 0});return r[l]=u,i.children&&(u.children=_l(i.children,e,o,r)),u}})}function qi(t,e,n){return n===void 0&&(n="/"),Xu(t,e,n,!1)}function Xu(t,e,n,r){let i=typeof e=="string"?Di(e):e,s=jo(i.pathname||"/",n);if(s==null)return null;let o=HE(t);IP(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=OP(s);l=bP(o[u],c,r)}return l}function TP(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function HE(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(ge(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Nr([r,u.relativePath]),d=n.concat(u);s.children&&s.children.length>0&&(ge(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),HE(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:xP(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of WE(s.path))i(s,o,u)}),e}function WE(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=WE(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function IP(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:NP(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const SP=/^:[\w-]+$/,RP=3,AP=2,PP=1,CP=10,kP=-2,Ev=t=>t==="*";function xP(t,e){let n=t.split("/"),r=n.length;return n.some(Ev)&&(r+=kP),e&&(r+=AP),n.filter(i=>!Ev(i)).reduce((i,s)=>i+(SP.test(s)?RP:s===""?PP:CP),r)}function NP(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function bP(t,e,n){n===void 0&&(n=!1);let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",f=Tv({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),m=u.route;if(!f&&c&&n&&!r[r.length-1].route.index&&(f=Tv({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},d)),!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:Nr([s,f.pathname]),pathnameBase:VP(Nr([s,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(s=Nr([s,f.pathnameBase]))}return o}function Tv(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=DP(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,d,f)=>{let{paramName:m,isOptional:E}=d;if(m==="*"){let C=l[f]||"";o=s.slice(0,s.length-C.length).replace(/(.)\/+$/,"$1")}const S=l[f];return E&&!S?c[m]=void 0:c[m]=(S||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function DP(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),To(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function OP(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return To(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function jo(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function LP(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Di(t):t;return{pathname:n?n.startsWith("/")?n:MP(n,e):e,search:UP(r),hash:FP(i)}}function MP(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Nd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function qE(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function wh(t,e){let n=qE(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Eh(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Di(t):(i=Ge({},t),ge(!i.pathname||!i.pathname.includes("?"),Nd("?","pathname","search",i)),ge(!i.pathname||!i.pathname.includes("#"),Nd("#","pathname","hash",i)),ge(!i.search||!i.search.includes("#"),Nd("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),f-=1;i.pathname=m.join("/")}l=f>=0?e[f]:"/"}let u=LP(i,l),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const Nr=t=>t.join("/").replace(/\/\/+/g,"/"),VP=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),UP=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,FP=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class Mc{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function Th(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const KE=["post","put","patch","delete"],jP=new Set(KE),zP=["get",...KE],$P=new Set(zP),BP=new Set([301,302,303,307,308]),HP=new Set([307,308]),bd={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},WP={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},wa={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Cm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,qP=t=>({hasErrorBoundary:!!t.hasErrorBoundary}),GE="remix-router-transitions";function KP(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",r=!n;ge(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(t.mapRouteProperties)i=t.mapRouteProperties;else if(t.detectErrorBoundary){let x=t.detectErrorBoundary;i=D=>({hasErrorBoundary:x(D)})}else i=qP;let s={},o=_l(t.routes,i,void 0,s),l,u=t.basename||"/",c=t.unstable_dataStrategy||JP,d=t.unstable_patchRoutesOnMiss,f=Ge({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,v7_skipActionErrorRevalidation:!1},t.future),m=null,E=new Set,S=null,C=null,b=null,I=t.hydrationData!=null,v=qi(o,t.history.location,u),R=null;if(v==null&&!d){let x=Gt(404,{pathname:t.history.location.pathname}),{matches:D,route:M}=bv(o);v=D,R={[M.id]:x}}v&&!t.hydrationData&&Xn(v,o,t.history.location.pathname).active&&(v=null);let O;if(v)if(v.some(x=>x.route.lazy))O=!1;else if(!v.some(x=>x.route.loader))O=!0;else if(f.v7_partialHydration){let x=t.hydrationData?t.hydrationData.loaderData:null,D=t.hydrationData?t.hydrationData.errors:null,M=j=>j.route.loader?typeof j.route.loader=="function"&&j.route.loader.hydrate===!0?!1:x&&x[j.route.id]!==void 0||D&&D[j.route.id]!==void 0:!0;if(D){let j=v.findIndex(G=>D[G.route.id]!==void 0);O=v.slice(0,j+1).every(M)}else O=v.every(M)}else O=t.hydrationData!=null;else if(O=!1,v=[],f.v7_partialHydration){let x=Xn(null,o,t.history.location.pathname);x.active&&x.matches&&(v=x.matches)}let F,k={historyAction:t.history.action,location:t.history.location,matches:v,initialized:O,navigation:bd,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||R,fetchers:new Map,blockers:new Map},w=lt.Pop,g=!1,T,_=!1,P=new Map,N=null,A=!1,de=!1,vt=[],_n=new Set,Ee=new Map,K=0,J=-1,re=new Map,me=new Set,ce=new Map,Ce=new Map,We=new Set,Ze=new Map,qe=new Map,Dt=new Map,xn=!1;function Nn(){if(m=t.history.listen(x=>{let{action:D,location:M,delta:j}=x;if(xn){xn=!1;return}To(qe.size===0||j!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let G=ea({currentLocation:k.location,nextLocation:M,historyAction:D});if(G&&j!=null){xn=!0,t.history.go(j*-1),Ui(G,{state:"blocked",location:M,proceed(){Ui(G,{state:"proceeding",proceed:void 0,reset:void 0,location:M}),t.history.go(j)},reset(){let Z=new Map(k.blockers);Z.set(G,wa),be({blockers:Z})}});return}return Yn(D,M)}),n){hC(e,P);let x=()=>dC(e,P);e.addEventListener("pagehide",x),N=()=>e.removeEventListener("pagehide",x)}return k.initialized||Yn(lt.Pop,k.location,{initialHydration:!0}),F}function Gn(){m&&m(),N&&N(),E.clear(),T&&T.abort(),k.fetchers.forEach((x,D)=>ks(D)),k.blockers.forEach((x,D)=>Ns(D))}function bn(x){return E.add(x),()=>E.delete(x)}function be(x,D){D===void 0&&(D={}),k=Ge({},k,x);let M=[],j=[];f.v7_fetcherPersist&&k.fetchers.forEach((G,Z)=>{G.state==="idle"&&(We.has(Z)?j.push(Z):M.push(Z))}),[...E].forEach(G=>G(k,{deletedFetchers:j,unstable_viewTransitionOpts:D.viewTransitionOpts,unstable_flushSync:D.flushSync===!0})),f.v7_fetcherPersist&&(M.forEach(G=>k.fetchers.delete(G)),j.forEach(G=>ks(G)))}function Qn(x,D,M){var j,G;let{flushSync:Z}=M===void 0?{}:M,ie=k.actionData!=null&&k.navigation.formMethod!=null&&Fn(k.navigation.formMethod)&&k.navigation.state==="loading"&&((j=x.state)==null?void 0:j._isRedirect)!==!0,W;D.actionData?Object.keys(D.actionData).length>0?W=D.actionData:W=null:ie?W=k.actionData:W=null;let ae=D.loaderData?xv(k.loaderData,D.loaderData,D.matches||[],D.errors):k.loaderData,ee=k.blockers;ee.size>0&&(ee=new Map(ee),ee.forEach((Re,ke)=>ee.set(ke,wa)));let te=g===!0||k.navigation.formMethod!=null&&Fn(k.navigation.formMethod)&&((G=x.state)==null?void 0:G._isRedirect)!==!0;l&&(o=l,l=void 0),A||w===lt.Pop||(w===lt.Push?t.history.push(x,x.state):w===lt.Replace&&t.history.replace(x,x.state));let ye;if(w===lt.Pop){let Re=P.get(k.location.pathname);Re&&Re.has(x.pathname)?ye={currentLocation:k.location,nextLocation:x}:P.has(x.pathname)&&(ye={currentLocation:x,nextLocation:k.location})}else if(_){let Re=P.get(k.location.pathname);Re?Re.add(x.pathname):(Re=new Set([x.pathname]),P.set(k.location.pathname,Re)),ye={currentLocation:k.location,nextLocation:x}}be(Ge({},D,{actionData:W,loaderData:ae,historyAction:w,location:x,initialized:!0,navigation:bd,revalidation:"idle",restoreScrollPosition:na(x,D.matches||k.matches),preventScrollReset:te,blockers:ee}),{viewTransitionOpts:ye,flushSync:Z===!0}),w=lt.Pop,g=!1,_=!1,A=!1,de=!1,vt=[]}async function Cs(x,D){if(typeof x=="number"){t.history.go(x);return}let M=Yf(k.location,k.matches,u,f.v7_prependBasename,x,f.v7_relativeSplatPath,D==null?void 0:D.fromRouteId,D==null?void 0:D.relative),{path:j,submission:G,error:Z}=Iv(f.v7_normalizeFormMethod,!1,M,D),ie=k.location,W=vl(k.location,j,D&&D.state);W=Ge({},W,t.history.encodeLocation(W));let ae=D&&D.replace!=null?D.replace:void 0,ee=lt.Push;ae===!0?ee=lt.Replace:ae===!1||G!=null&&Fn(G.formMethod)&&G.formAction===k.location.pathname+k.location.search&&(ee=lt.Replace);let te=D&&"preventScrollReset"in D?D.preventScrollReset===!0:void 0,ye=(D&&D.unstable_flushSync)===!0,Re=ea({currentLocation:ie,nextLocation:W,historyAction:ee});if(Re){Ui(Re,{state:"blocked",location:W,proceed(){Ui(Re,{state:"proceeding",proceed:void 0,reset:void 0,location:W}),Cs(x,D)},reset(){let ke=new Map(k.blockers);ke.set(Re,wa),be({blockers:ke})}});return}return await Yn(ee,W,{submission:G,pendingError:Z,preventScrollReset:te,replace:D&&D.replace,enableViewTransition:D&&D.unstable_viewTransition,flushSync:ye})}function Go(){if(pt(),be({revalidation:"loading"}),k.navigation.state!=="submitting"){if(k.navigation.state==="idle"){Yn(k.historyAction,k.location,{startUninterruptedRevalidation:!0});return}Yn(w||k.historyAction,k.navigation.location,{overrideNavigation:k.navigation})}}async function Yn(x,D,M){T&&T.abort(),T=null,w=x,A=(M&&M.startUninterruptedRevalidation)===!0,bs(k.location,k.matches),g=(M&&M.preventScrollReset)===!0,_=(M&&M.enableViewTransition)===!0;let j=l||o,G=M&&M.overrideNavigation,Z=qi(j,D,u),ie=(M&&M.flushSync)===!0,W=Xn(Z,j,D.pathname);if(W.active&&W.matches&&(Z=W.matches),!Z){let{error:Te,notFoundMatches:st,route:Ke}=yr(D.pathname);Qn(D,{matches:st,loaderData:{},errors:{[Ke.id]:Te}},{flushSync:ie});return}if(k.initialized&&!de&&iC(k.location,D)&&!(M&&M.submission&&Fn(M.submission.formMethod))){Qn(D,{matches:Z},{flushSync:ie});return}T=new AbortController;let ae=Us(t.history,D,T.signal,M&&M.submission),ee;if(M&&M.pendingError)ee=[to(Z).route.id,{type:Oe.error,error:M.pendingError}];else if(M&&M.submission&&Fn(M.submission.formMethod)){let Te=await Yh(ae,D,M.submission,Z,W.active,{replace:M.replace,flushSync:ie});if(Te.shortCircuited)return;if(Te.pendingActionResult){let[st,Ke]=Te.pendingActionResult;if(hn(Ke)&&Th(Ke.error)&&Ke.error.status===404){T=null,Qn(D,{matches:Te.matches,loaderData:{},errors:{[st]:Ke.error}});return}}Z=Te.matches||Z,ee=Te.pendingActionResult,G=Dd(D,M.submission),ie=!1,W.active=!1,ae=Us(t.history,ae.url,ae.signal)}let{shortCircuited:te,matches:ye,loaderData:Re,errors:ke}=await Xh(ae,D,Z,W.active,G,M&&M.submission,M&&M.fetcherSubmission,M&&M.replace,M&&M.initialHydration===!0,ie,ee);te||(T=null,Qn(D,Ge({matches:ye||Z},Nv(ee),{loaderData:Re,errors:ke})))}async function Yh(x,D,M,j,G,Z){Z===void 0&&(Z={}),pt();let ie=uC(D,M);if(be({navigation:ie},{flushSync:Z.flushSync===!0}),G){let ee=await ji(j,D.pathname,x.signal);if(ee.type==="aborted")return{shortCircuited:!0};if(ee.type==="error"){let{boundaryId:te,error:ye}=Hr(D.pathname,ee);return{matches:ee.partialMatches,pendingActionResult:[te,{type:Oe.error,error:ye}]}}else if(ee.matches)j=ee.matches;else{let{notFoundMatches:te,error:ye,route:Re}=yr(D.pathname);return{matches:te,pendingActionResult:[Re.id,{type:Oe.error,error:ye}]}}}let W,ae=ka(j,D);if(!ae.route.action&&!ae.route.lazy)W={type:Oe.error,error:Gt(405,{method:x.method,pathname:D.pathname,routeId:ae.route.id})};else if(W=(await Br("action",x,[ae],j))[0],x.signal.aborted)return{shortCircuited:!0};if(Xi(W)){let ee;return Z&&Z.replace!=null?ee=Z.replace:ee=Pv(W.response.headers.get("Location"),new URL(x.url),u)===k.location.pathname+k.location.search,await gr(x,W,{submission:M,replace:ee}),{shortCircuited:!0}}if(Yi(W))throw Gt(400,{type:"defer-action"});if(hn(W)){let ee=to(j,ae.route.id);return(Z&&Z.replace)!==!0&&(w=lt.Push),{matches:j,pendingActionResult:[ee.route.id,W]}}return{matches:j,pendingActionResult:[ae.route.id,W]}}async function Xh(x,D,M,j,G,Z,ie,W,ae,ee,te){let ye=G||Dd(D,Z),Re=Z||ie||Mv(ye),ke=!A&&(!f.v7_partialHydration||!ae);if(j){if(ke){let Ue=Qo(te);be(Ge({navigation:ye},Ue!==void 0?{actionData:Ue}:{}),{flushSync:ee})}let he=await ji(M,D.pathname,x.signal);if(he.type==="aborted")return{shortCircuited:!0};if(he.type==="error"){let{boundaryId:Ue,error:Lt}=Hr(D.pathname,he);return{matches:he.partialMatches,loaderData:{},errors:{[Ue]:Lt}}}else if(he.matches)M=he.matches;else{let{error:Ue,notFoundMatches:Lt,route:De}=yr(D.pathname);return{matches:Lt,loaderData:{},errors:{[De.id]:Ue}}}}let Te=l||o,[st,Ke]=Sv(t.history,k,M,Re,D,f.v7_partialHydration&&ae===!0,f.v7_skipActionErrorRevalidation,de,vt,_n,We,ce,me,Te,u,te);if(Fi(he=>!(M&&M.some(Ue=>Ue.route.id===he))||st&&st.some(Ue=>Ue.route.id===he)),J=++K,st.length===0&&Ke.length===0){let he=xs();return Qn(D,Ge({matches:M,loaderData:{},errors:te&&hn(te[1])?{[te[0]]:te[1].error}:null},Nv(te),he?{fetchers:new Map(k.fetchers)}:{}),{flushSync:ee}),{shortCircuited:!0}}if(ke){let he={};if(!j){he.navigation=ye;let Ue=Qo(te);Ue!==void 0&&(he.actionData=Ue)}Ke.length>0&&(he.fetchers=Yo(Ke)),be(he,{flushSync:ee})}Ke.forEach(he=>{Ee.has(he.key)&&Dn(he.key),he.controller&&Ee.set(he.key,he.controller)});let Wr=()=>Ke.forEach(he=>Dn(he.key));T&&T.signal.addEventListener("abort",Wr);let{loaderResults:Jn,fetcherResults:On}=await ft(k.matches,M,st,Ke,x);if(x.signal.aborted)return{shortCircuited:!0};T&&T.signal.removeEventListener("abort",Wr),Ke.forEach(he=>Ee.delete(he.key));let _r=Dv([...Jn,...On]);if(_r){if(_r.idx>=st.length){let he=Ke[_r.idx-st.length].key;me.add(he)}return await gr(x,_r.result,{replace:W}),{shortCircuited:!0}}let{loaderData:Zn,errors:Ot}=kv(k,M,st,Jn,te,Ke,On,Ze);Ze.forEach((he,Ue)=>{he.subscribe(Lt=>{(Lt||he.done)&&Ze.delete(Ue)})}),f.v7_partialHydration&&ae&&k.errors&&Object.entries(k.errors).filter(he=>{let[Ue]=he;return!st.some(Lt=>Lt.route.id===Ue)}).forEach(he=>{let[Ue,Lt]=he;Ot=Object.assign(Ot||{},{[Ue]:Lt})});let En=xs(),qr=eu(J),Ds=En||qr||Ke.length>0;return Ge({matches:M,loaderData:Zn,errors:Ot},Ds?{fetchers:new Map(k.fetchers)}:{})}function Qo(x){if(x&&!hn(x[1]))return{[x[0]]:x[1].data};if(k.actionData)return Object.keys(k.actionData).length===0?null:k.actionData}function Yo(x){return x.forEach(D=>{let M=k.fetchers.get(D.key),j=Ea(void 0,M?M.data:void 0);k.fetchers.set(D.key,j)}),new Map(k.fetchers)}function Zl(x,D,M,j){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");Ee.has(x)&&Dn(x);let G=(j&&j.unstable_flushSync)===!0,Z=l||o,ie=Yf(k.location,k.matches,u,f.v7_prependBasename,M,f.v7_relativeSplatPath,D,j==null?void 0:j.relative),W=qi(Z,ie,u),ae=Xn(W,Z,ie);if(ae.active&&ae.matches&&(W=ae.matches),!W){wn(x,D,Gt(404,{pathname:ie}),{flushSync:G});return}let{path:ee,submission:te,error:ye}=Iv(f.v7_normalizeFormMethod,!0,ie,j);if(ye){wn(x,D,ye,{flushSync:G});return}let Re=ka(W,ee);if(g=(j&&j.preventScrollReset)===!0,te&&Fn(te.formMethod)){Jh(x,D,ee,Re,W,ae.active,G,te);return}ce.set(x,{routeId:D,path:ee}),Xo(x,D,ee,Re,W,ae.active,G,te)}async function Jh(x,D,M,j,G,Z,ie,W){pt(),ce.delete(x);function ae(De){if(!De.route.action&&!De.route.lazy){let an=Gt(405,{method:W.formMethod,pathname:M,routeId:D});return wn(x,D,an,{flushSync:ie}),!0}return!1}if(!Z&&ae(j))return;let ee=k.fetchers.get(x);on(x,cC(W,ee),{flushSync:ie});let te=new AbortController,ye=Us(t.history,M,te.signal,W);if(Z){let De=await ji(G,M,ye.signal);if(De.type==="aborted")return;if(De.type==="error"){let{error:an}=Hr(M,De);wn(x,D,an,{flushSync:ie});return}else if(De.matches){if(G=De.matches,j=ka(G,M),ae(j))return}else{wn(x,D,Gt(404,{pathname:M}),{flushSync:ie});return}}Ee.set(x,te);let Re=K,Te=(await Br("action",ye,[j],G))[0];if(ye.signal.aborted){Ee.get(x)===te&&Ee.delete(x);return}if(f.v7_fetcherPersist&&We.has(x)){if(Xi(Te)||hn(Te)){on(x,Xr(void 0));return}}else{if(Xi(Te))if(Ee.delete(x),J>Re){on(x,Xr(void 0));return}else return me.add(x),on(x,Ea(W)),gr(ye,Te,{fetcherSubmission:W});if(hn(Te)){wn(x,D,Te.error);return}}if(Yi(Te))throw Gt(400,{type:"defer-action"});let st=k.navigation.location||k.location,Ke=Us(t.history,st,te.signal),Wr=l||o,Jn=k.navigation.state!=="idle"?qi(Wr,k.navigation.location,u):k.matches;ge(Jn,"Didn't find any matches after fetcher action");let On=++K;re.set(x,On);let _r=Ea(W,Te.data);k.fetchers.set(x,_r);let[Zn,Ot]=Sv(t.history,k,Jn,W,st,!1,f.v7_skipActionErrorRevalidation,de,vt,_n,We,ce,me,Wr,u,[j.route.id,Te]);Ot.filter(De=>De.key!==x).forEach(De=>{let an=De.key,ra=k.fetchers.get(an),nu=Ea(void 0,ra?ra.data:void 0);k.fetchers.set(an,nu),Ee.has(an)&&Dn(an),De.controller&&Ee.set(an,De.controller)}),be({fetchers:new Map(k.fetchers)});let En=()=>Ot.forEach(De=>Dn(De.key));te.signal.addEventListener("abort",En);let{loaderResults:qr,fetcherResults:Ds}=await ft(k.matches,Jn,Zn,Ot,Ke);if(te.signal.aborted)return;te.signal.removeEventListener("abort",En),re.delete(x),Ee.delete(x),Ot.forEach(De=>Ee.delete(De.key));let he=Dv([...qr,...Ds]);if(he){if(he.idx>=Zn.length){let De=Ot[he.idx-Zn.length].key;me.add(De)}return gr(Ke,he.result)}let{loaderData:Ue,errors:Lt}=kv(k,k.matches,Zn,qr,void 0,Ot,Ds,Ze);if(k.fetchers.has(x)){let De=Xr(Te.data);k.fetchers.set(x,De)}eu(On),k.navigation.state==="loading"&&On>J?(ge(w,"Expected pending action"),T&&T.abort(),Qn(k.navigation.location,{matches:Jn,loaderData:Ue,errors:Lt,fetchers:new Map(k.fetchers)})):(be({errors:Lt,loaderData:xv(k.loaderData,Ue,Jn,Lt),fetchers:new Map(k.fetchers)}),de=!1)}async function Xo(x,D,M,j,G,Z,ie,W){let ae=k.fetchers.get(x);on(x,Ea(W,ae?ae.data:void 0),{flushSync:ie});let ee=new AbortController,te=Us(t.history,M,ee.signal);if(Z){let Te=await ji(G,M,te.signal);if(Te.type==="aborted")return;if(Te.type==="error"){let{error:st}=Hr(M,Te);wn(x,D,st,{flushSync:ie});return}else if(Te.matches)G=Te.matches,j=ka(G,M);else{wn(x,D,Gt(404,{pathname:M}),{flushSync:ie});return}}Ee.set(x,ee);let ye=K,ke=(await Br("loader",te,[j],G))[0];if(Yi(ke)&&(ke=await ZE(ke,te.signal,!0)||ke),Ee.get(x)===ee&&Ee.delete(x),!te.signal.aborted){if(We.has(x)){on(x,Xr(void 0));return}if(Xi(ke))if(J>ye){on(x,Xr(void 0));return}else{me.add(x),await gr(te,ke);return}if(hn(ke)){wn(x,D,ke.error);return}ge(!Yi(ke),"Unhandled fetcher deferred data"),on(x,Xr(ke.data))}}async function gr(x,D,M){let{submission:j,fetcherSubmission:G,replace:Z}=M===void 0?{}:M;D.response.headers.has("X-Remix-Revalidate")&&(de=!0);let ie=D.response.headers.get("Location");ge(ie,"Expected a Location header on the redirect Response"),ie=Pv(ie,new URL(x.url),u);let W=vl(k.location,ie,{_isRedirect:!0});if(n){let ke=!1;if(D.response.headers.has("X-Remix-Reload-Document"))ke=!0;else if(Cm.test(ie)){const Te=t.history.createURL(ie);ke=Te.origin!==e.location.origin||jo(Te.pathname,u)==null}if(ke){Z?e.location.replace(ie):e.location.assign(ie);return}}T=null;let ae=Z===!0||D.response.headers.has("X-Remix-Replace")?lt.Replace:lt.Push,{formMethod:ee,formAction:te,formEncType:ye}=k.navigation;!j&&!G&&ee&&te&&ye&&(j=Mv(k.navigation));let Re=j||G;if(HP.has(D.response.status)&&Re&&Fn(Re.formMethod))await Yn(ae,W,{submission:Ge({},Re,{formAction:ie}),preventScrollReset:g});else{let ke=Dd(W,j);await Yn(ae,W,{overrideNavigation:ke,fetcherSubmission:G,preventScrollReset:g})}}async function Br(x,D,M,j){try{let G=await ZP(c,x,D,M,j,s,i);return await Promise.all(G.map((Z,ie)=>{if(oC(Z)){let W=Z.result;return{type:Oe.redirect,response:nC(W,D,M[ie].route.id,j,u,f.v7_relativeSplatPath)}}return tC(Z)}))}catch(G){return M.map(()=>({type:Oe.error,error:G}))}}async function ft(x,D,M,j,G){let[Z,...ie]=await Promise.all([M.length?Br("loader",G,M,D):[],...j.map(W=>{if(W.matches&&W.match&&W.controller){let ae=Us(t.history,W.path,W.controller.signal);return Br("loader",ae,[W.match],W.matches).then(ee=>ee[0])}else return Promise.resolve({type:Oe.error,error:Gt(404,{pathname:W.path})})})]);return await Promise.all([Lv(x,M,Z,Z.map(()=>G.signal),!1,k.loaderData),Lv(x,j.map(W=>W.match),ie,j.map(W=>W.controller?W.controller.signal:null),!0)]),{loaderResults:Z,fetcherResults:ie}}function pt(){de=!0,vt.push(...Fi()),ce.forEach((x,D)=>{Ee.has(D)&&(_n.add(D),Dn(D))})}function on(x,D,M){M===void 0&&(M={}),k.fetchers.set(x,D),be({fetchers:new Map(k.fetchers)},{flushSync:(M&&M.flushSync)===!0})}function wn(x,D,M,j){j===void 0&&(j={});let G=to(k.matches,D);ks(x),be({errors:{[G.route.id]:M},fetchers:new Map(k.fetchers)},{flushSync:(j&&j.flushSync)===!0})}function Jo(x){return f.v7_fetcherPersist&&(Ce.set(x,(Ce.get(x)||0)+1),We.has(x)&&We.delete(x)),k.fetchers.get(x)||WP}function ks(x){let D=k.fetchers.get(x);Ee.has(x)&&!(D&&D.state==="loading"&&re.has(x))&&Dn(x),ce.delete(x),re.delete(x),me.delete(x),We.delete(x),_n.delete(x),k.fetchers.delete(x)}function Vi(x){if(f.v7_fetcherPersist){let D=(Ce.get(x)||0)-1;D<=0?(Ce.delete(x),We.add(x)):Ce.set(x,D)}else ks(x);be({fetchers:new Map(k.fetchers)})}function Dn(x){let D=Ee.get(x);ge(D,"Expected fetch controller: "+x),D.abort(),Ee.delete(x)}function Zo(x){for(let D of x){let M=Jo(D),j=Xr(M.data);k.fetchers.set(D,j)}}function xs(){let x=[],D=!1;for(let M of me){let j=k.fetchers.get(M);ge(j,"Expected fetcher: "+M),j.state==="loading"&&(me.delete(M),x.push(M),D=!0)}return Zo(x),D}function eu(x){let D=[];for(let[M,j]of re)if(j<x){let G=k.fetchers.get(M);ge(G,"Expected fetcher: "+M),G.state==="loading"&&(Dn(M),re.delete(M),D.push(M))}return Zo(D),D.length>0}function Zh(x,D){let M=k.blockers.get(x)||wa;return qe.get(x)!==D&&qe.set(x,D),M}function Ns(x){k.blockers.delete(x),qe.delete(x)}function Ui(x,D){let M=k.blockers.get(x)||wa;ge(M.state==="unblocked"&&D.state==="blocked"||M.state==="blocked"&&D.state==="blocked"||M.state==="blocked"&&D.state==="proceeding"||M.state==="blocked"&&D.state==="unblocked"||M.state==="proceeding"&&D.state==="unblocked","Invalid blocker state transition: "+M.state+" -> "+D.state);let j=new Map(k.blockers);j.set(x,D),be({blockers:j})}function ea(x){let{currentLocation:D,nextLocation:M,historyAction:j}=x;if(qe.size===0)return;qe.size>1&&To(!1,"A router only supports one blocker at a time");let G=Array.from(qe.entries()),[Z,ie]=G[G.length-1],W=k.blockers.get(Z);if(!(W&&W.state==="proceeding")&&ie({currentLocation:D,nextLocation:M,historyAction:j}))return Z}function yr(x){let D=Gt(404,{pathname:x}),M=l||o,{matches:j,route:G}=bv(M);return Fi(),{notFoundMatches:j,route:G,error:D}}function Hr(x,D){return{boundaryId:to(D.partialMatches).route.id,error:Gt(400,{type:"route-discovery",pathname:x,message:D.error!=null&&"message"in D.error?D.error:String(D.error)})}}function Fi(x){let D=[];return Ze.forEach((M,j)=>{(!x||x(j))&&(M.cancel(),D.push(j),Ze.delete(j))}),D}function vr(x,D,M){if(S=x,b=D,C=M||null,!I&&k.navigation===bd){I=!0;let j=na(k.location,k.matches);j!=null&&be({restoreScrollPosition:j})}return()=>{S=null,b=null,C=null}}function ta(x,D){return C&&C(x,D.map(j=>TP(j,k.loaderData)))||x.key}function bs(x,D){if(S&&b){let M=ta(x,D);S[M]=b()}}function na(x,D){if(S){let M=ta(x,D),j=S[M];if(typeof j=="number")return j}return null}function Xn(x,D,M){if(d)if(x){let j=x[x.length-1].route;if(j.path&&(j.path==="*"||j.path.endsWith("/*")))return{active:!0,matches:Xu(D,M,u,!0)}}else return{active:!0,matches:Xu(D,M,u,!0)||[]};return{active:!1,matches:null}}async function ji(x,D,M){let j=x,G=j.length>0?j[j.length-1].route:null;for(;;){let Z=l==null,ie=l||o;try{await XP(d,D,j,ie,s,i,Dt,M)}catch(te){return{type:"error",error:te,partialMatches:j}}finally{Z&&(o=[...o])}if(M.aborted)return{type:"aborted"};let W=qi(ie,D,u),ae=!1;if(W){let te=W[W.length-1].route;if(te.index)return{type:"success",matches:W};if(te.path&&te.path.length>0)if(te.path==="*")ae=!0;else return{type:"success",matches:W}}let ee=Xu(ie,D,u,!0);if(!ee||j.map(te=>te.route.id).join("-")===ee.map(te=>te.route.id).join("-"))return{type:"success",matches:ae?W:null};if(j=ee,G=j[j.length-1].route,G.path==="*")return{type:"success",matches:j}}}function It(x){s={},l=_l(x,i,void 0,s)}function tu(x,D){let M=l==null;YE(x,D,l||o,s,i),M&&(o=[...o],be({}))}return F={get basename(){return u},get future(){return f},get state(){return k},get routes(){return o},get window(){return e},initialize:Nn,subscribe:bn,enableScrollRestoration:vr,navigate:Cs,fetch:Zl,revalidate:Go,createHref:x=>t.history.createHref(x),encodeLocation:x=>t.history.encodeLocation(x),getFetcher:Jo,deleteFetcher:Vi,dispose:Gn,getBlocker:Zh,deleteBlocker:Ns,patchRoutes:tu,_internalFetchControllers:Ee,_internalActiveDeferreds:Ze,_internalSetRoutes:It},F}function GP(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function Yf(t,e,n,r,i,s,o,l){let u,c;if(o){u=[];for(let f of e)if(u.push(f),f.route.id===o){c=f;break}}else u=e,c=e[e.length-1];let d=Eh(i||".",wh(u,s),jo(t.pathname,n)||t.pathname,l==="path");return i==null&&(d.search=t.search,d.hash=t.hash),(i==null||i===""||i===".")&&c&&c.route.index&&!km(d.search)&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(d.pathname=d.pathname==="/"?n:Nr([n,d.pathname])),hs(d)}function Iv(t,e,n,r){if(!r||!GP(r))return{path:n};if(r.formMethod&&!lC(r.formMethod))return{path:n,error:Gt(405,{method:r.formMethod})};let i=()=>({path:n,error:Gt(400,{type:"invalid-body"})}),s=r.formMethod||"get",o=t?s.toUpperCase():s.toLowerCase(),l=XE(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!Fn(o))return i();let m=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((E,S)=>{let[C,b]=S;return""+E+C+"="+b+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:l,formEncType:r.formEncType,formData:void 0,json:void 0,text:m}}}else if(r.formEncType==="application/json"){if(!Fn(o))return i();try{let m=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:l,formEncType:r.formEncType,formData:void 0,json:m,text:void 0}}}catch{return i()}}}ge(typeof FormData=="function","FormData is not available in this environment");let u,c;if(r.formData)u=Xf(r.formData),c=r.formData;else if(r.body instanceof FormData)u=Xf(r.body),c=r.body;else if(r.body instanceof URLSearchParams)u=r.body,c=Cv(u);else if(r.body==null)u=new URLSearchParams,c=new FormData;else try{u=new URLSearchParams(r.body),c=Cv(u)}catch{return i()}let d={formMethod:o,formAction:l,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:c,json:void 0,text:void 0};if(Fn(d.formMethod))return{path:n,submission:d};let f=Di(n);return e&&f.search&&km(f.search)&&u.append("index",""),f.search="?"+u,{path:hs(f),submission:d}}function QP(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function Sv(t,e,n,r,i,s,o,l,u,c,d,f,m,E,S,C){let b=C?hn(C[1])?C[1].error:C[1].data:void 0,I=t.createURL(e.location),v=t.createURL(i),R=C&&hn(C[1])?C[0]:void 0,O=R?QP(n,R):n,F=C?C[1].statusCode:void 0,k=o&&F&&F>=400,w=O.filter((T,_)=>{let{route:P}=T;if(P.lazy)return!0;if(P.loader==null)return!1;if(s)return typeof P.loader!="function"||P.loader.hydrate?!0:e.loaderData[P.id]===void 0&&(!e.errors||e.errors[P.id]===void 0);if(YP(e.loaderData,e.matches[_],T)||u.some(de=>de===T.route.id))return!0;let N=e.matches[_],A=T;return Rv(T,Ge({currentUrl:I,currentParams:N.params,nextUrl:v,nextParams:A.params},r,{actionResult:b,actionStatus:F,defaultShouldRevalidate:k?!1:l||I.pathname+I.search===v.pathname+v.search||I.search!==v.search||QE(N,A)}))}),g=[];return f.forEach((T,_)=>{if(s||!n.some(vt=>vt.route.id===T.routeId)||d.has(_))return;let P=qi(E,T.path,S);if(!P){g.push({key:_,routeId:T.routeId,path:T.path,matches:null,match:null,controller:null});return}let N=e.fetchers.get(_),A=ka(P,T.path),de=!1;m.has(_)?de=!1:c.has(_)?(c.delete(_),de=!0):N&&N.state!=="idle"&&N.data===void 0?de=l:de=Rv(A,Ge({currentUrl:I,currentParams:e.matches[e.matches.length-1].params,nextUrl:v,nextParams:n[n.length-1].params},r,{actionResult:b,actionStatus:F,defaultShouldRevalidate:k?!1:l})),de&&g.push({key:_,routeId:T.routeId,path:T.path,matches:P,match:A,controller:new AbortController})}),[w,g]}function YP(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function QE(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function Rv(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function XP(t,e,n,r,i,s,o,l){let u=[e,...n.map(c=>c.route.id)].join("-");try{let c=o.get(u);c||(c=t({path:e,matches:n,patch:(d,f)=>{l.aborted||YE(d,f,r,i,s)}}),o.set(u,c)),c&&sC(c)&&await c}finally{o.delete(u)}}function YE(t,e,n,r,i){if(t){var s;let o=r[t];ge(o,"No route found to patch children into: routeId = "+t);let l=_l(e,i,[t,"patch",String(((s=o.children)==null?void 0:s.length)||"0")],r);o.children?o.children.push(...l):o.children=l}else{let o=_l(e,i,["patch",String(n.length||"0")],r);n.push(...o)}}async function Av(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];ge(i,"No route found in manifest");let s={};for(let o in r){let u=i[o]!==void 0&&o!=="hasErrorBoundary";To(!u,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!u&&!wP.has(o)&&(s[o]=r[o])}Object.assign(i,s),Object.assign(i,Ge({},e(i),{lazy:void 0}))}function JP(t){return Promise.all(t.matches.map(e=>e.resolve()))}async function ZP(t,e,n,r,i,s,o,l){let u=r.reduce((f,m)=>f.add(m.route.id),new Set),c=new Set,d=await t({matches:i.map(f=>{let m=u.has(f.route.id);return Ge({},f,{shouldLoad:m,resolve:S=>(c.add(f.route.id),m?eC(e,n,f,s,o,S,l):Promise.resolve({type:Oe.data,result:void 0}))})}),request:n,params:i[0].params,context:l});return i.forEach(f=>ge(c.has(f.route.id),'`match.resolve()` was not called for route id "'+f.route.id+'". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.')),d.filter((f,m)=>u.has(i[m].route.id))}async function eC(t,e,n,r,i,s,o){let l,u,c=d=>{let f,m=new Promise((C,b)=>f=b);u=()=>f(),e.signal.addEventListener("abort",u);let E=C=>typeof d!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+t+'" [routeId: '+n.route.id+"]"))):d({request:e,params:n.params,context:o},...C!==void 0?[C]:[]),S;return s?S=s(C=>E(C)):S=(async()=>{try{return{type:"data",result:await E()}}catch(C){return{type:"error",result:C}}})(),Promise.race([S,m])};try{let d=n.route[t];if(n.route.lazy)if(d){let f,[m]=await Promise.all([c(d).catch(E=>{f=E}),Av(n.route,i,r)]);if(f!==void 0)throw f;l=m}else if(await Av(n.route,i,r),d=n.route[t],d)l=await c(d);else if(t==="action"){let f=new URL(e.url),m=f.pathname+f.search;throw Gt(405,{method:e.method,pathname:m,routeId:n.route.id})}else return{type:Oe.data,result:void 0};else if(d)l=await c(d);else{let f=new URL(e.url),m=f.pathname+f.search;throw Gt(404,{pathname:m})}ge(l.result!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(d){return{type:Oe.error,result:d}}finally{u&&e.signal.removeEventListener("abort",u)}return l}async function tC(t){let{result:e,type:n}=t;if(JE(e)){let c;try{let d=e.headers.get("Content-Type");d&&/\bapplication\/json\b/.test(d)?e.body==null?c=null:c=await e.json():c=await e.text()}catch(d){return{type:Oe.error,error:d}}return n===Oe.error?{type:Oe.error,error:new Mc(e.status,e.statusText,c),statusCode:e.status,headers:e.headers}:{type:Oe.data,data:c,statusCode:e.status,headers:e.headers}}if(n===Oe.error){if(Ov(e)){var r;if(e.data instanceof Error){var i;return{type:Oe.error,error:e.data,statusCode:(i=e.init)==null?void 0:i.status}}e=new Mc(((r=e.init)==null?void 0:r.status)||500,void 0,e.data)}return{type:Oe.error,error:e,statusCode:Th(e)?e.status:void 0}}if(aC(e)){var s,o;return{type:Oe.deferred,deferredData:e,statusCode:(s=e.init)==null?void 0:s.status,headers:((o=e.init)==null?void 0:o.headers)&&new Headers(e.init.headers)}}if(Ov(e)){var l,u;return{type:Oe.data,data:e.data,statusCode:(l=e.init)==null?void 0:l.status,headers:(u=e.init)!=null&&u.headers?new Headers(e.init.headers):void 0}}return{type:Oe.data,data:e}}function nC(t,e,n,r,i,s){let o=t.headers.get("Location");if(ge(o,"Redirects returned/thrown from loaders/actions must have a Location header"),!Cm.test(o)){let l=r.slice(0,r.findIndex(u=>u.route.id===n)+1);o=Yf(new URL(e.url),l,i,!0,o,s),t.headers.set("Location",o)}return t}function Pv(t,e,n){if(Cm.test(t)){let r=t,i=r.startsWith("//")?new URL(e.protocol+r):new URL(r),s=jo(i.pathname,n)!=null;if(i.origin===e.origin&&s)return i.pathname+i.search+i.hash}return t}function Us(t,e,n,r){let i=t.createURL(XE(e)).toString(),s={signal:n};if(r&&Fn(r.formMethod)){let{formMethod:o,formEncType:l}=r;s.method=o.toUpperCase(),l==="application/json"?(s.headers=new Headers({"Content-Type":l}),s.body=JSON.stringify(r.json)):l==="text/plain"?s.body=r.text:l==="application/x-www-form-urlencoded"&&r.formData?s.body=Xf(r.formData):s.body=r.formData}return new Request(i,s)}function Xf(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,typeof r=="string"?r:r.name);return e}function Cv(t){let e=new FormData;for(let[n,r]of t.entries())e.append(n,r);return e}function rC(t,e,n,r,i,s){let o={},l=null,u,c=!1,d={},f=r&&hn(r[1])?r[1].error:void 0;return n.forEach((m,E)=>{let S=e[E].route.id;if(ge(!Xi(m),"Cannot handle redirect results in processLoaderData"),hn(m)){let C=m.error;f!==void 0&&(C=f,f=void 0),l=l||{};{let b=to(t,S);l[b.route.id]==null&&(l[b.route.id]=C)}o[S]=void 0,c||(c=!0,u=Th(m.error)?m.error.status:500),m.headers&&(d[S]=m.headers)}else Yi(m)?(i.set(S,m.deferredData),o[S]=m.deferredData.data,m.statusCode!=null&&m.statusCode!==200&&!c&&(u=m.statusCode),m.headers&&(d[S]=m.headers)):(o[S]=m.data,m.statusCode&&m.statusCode!==200&&!c&&(u=m.statusCode),m.headers&&(d[S]=m.headers))}),f!==void 0&&r&&(l={[r[0]]:f},o[r[0]]=void 0),{loaderData:o,errors:l,statusCode:u||200,loaderHeaders:d}}function kv(t,e,n,r,i,s,o,l){let{loaderData:u,errors:c}=rC(e,n,r,i,l);for(let d=0;d<s.length;d++){let{key:f,match:m,controller:E}=s[d];ge(o!==void 0&&o[d]!==void 0,"Did not find corresponding fetcher result");let S=o[d];if(!(E&&E.signal.aborted))if(hn(S)){let C=to(t.matches,m==null?void 0:m.route.id);c&&c[C.route.id]||(c=Ge({},c,{[C.route.id]:S.error})),t.fetchers.delete(f)}else if(Xi(S))ge(!1,"Unhandled fetcher revalidation redirect");else if(Yi(S))ge(!1,"Unhandled fetcher deferred data");else{let C=Xr(S.data);t.fetchers.set(f,C)}}return{loaderData:u,errors:c}}function xv(t,e,n,r){let i=Ge({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&s.route.loader&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function Nv(t){return t?hn(t[1])?{actionData:{}}:{actionData:{[t[0]]:t[1].data}}:{}}function to(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function bv(t){let e=t.length===1?t[0]:t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function Gt(t,e){let{pathname:n,routeId:r,method:i,type:s,message:o}=e===void 0?{}:e,l="Unknown Server Error",u="Unknown @remix-run/router error";return t===400?(l="Bad Request",s==="route-discovery"?u='Unable to match URL "'+n+'" - the `unstable_patchRoutesOnMiss()` '+(`function threw the following error:
`+o):i&&n&&r?u="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"?u="defer() is not supported in actions":s==="invalid-body"&&(u="Unable to encode submission body")):t===403?(l="Forbidden",u='Route "'+r+'" does not match URL "'+n+'"'):t===404?(l="Not Found",u='No route matches URL "'+n+'"'):t===405&&(l="Method Not Allowed",i&&n&&r?u="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(u='Invalid request method "'+i.toUpperCase()+'"')),new Mc(t||500,l,new Error(u),!0)}function Dv(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(Xi(n))return{result:n,idx:e}}}function XE(t){let e=typeof t=="string"?Di(t):t;return hs(Ge({},e,{hash:""}))}function iC(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function sC(t){return typeof t=="object"&&t!=null&&"then"in t}function oC(t){return JE(t.result)&&BP.has(t.result.status)}function Yi(t){return t.type===Oe.deferred}function hn(t){return t.type===Oe.error}function Xi(t){return(t&&t.type)===Oe.redirect}function Ov(t){return typeof t=="object"&&t!=null&&"type"in t&&"data"in t&&"init"in t&&t.type==="DataWithResponseInit"}function aC(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function JE(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function lC(t){return $P.has(t.toLowerCase())}function Fn(t){return jP.has(t.toLowerCase())}async function Lv(t,e,n,r,i,s){for(let o=0;o<n.length;o++){let l=n[o],u=e[o];if(!u)continue;let c=t.find(f=>f.route.id===u.route.id),d=c!=null&&!QE(c,u)&&(s&&s[u.route.id])!==void 0;if(Yi(l)&&(i||d)){let f=r[o];ge(f,"Expected an AbortSignal for revalidating fetcher deferred result"),await ZE(l,f,i).then(m=>{m&&(n[o]=m||n[o])})}}}async function ZE(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:Oe.data,data:t.deferredData.unwrappedData}}catch(i){return{type:Oe.error,error:i}}return{type:Oe.data,data:t.deferredData.data}}}function km(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function ka(t,e){let n=typeof e=="string"?Di(e).search:e.search;if(t[t.length-1].route.index&&km(n||""))return t[t.length-1];let r=qE(t);return r[r.length-1]}function Mv(t){let{formMethod:e,formAction:n,formEncType:r,text:i,formData:s,json:o}=t;if(!(!e||!n||!r)){if(i!=null)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(s!=null)return{formMethod:e,formAction:n,formEncType:r,formData:s,json:void 0,text:void 0};if(o!==void 0)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function Dd(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function uC(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function Ea(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function cC(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0}}function Xr(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function hC(t,e){try{let n=t.sessionStorage.getItem(GE);if(n){let r=JSON.parse(n);for(let[i,s]of Object.entries(r||{}))s&&Array.isArray(s)&&e.set(i,new Set(s||[]))}}catch{}}function dC(t,e){if(e.size>0){let n={};for(let[r,i]of e)n[r]=[...i];try{t.sessionStorage.setItem(GE,JSON.stringify(n))}catch(r){To(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.26.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vc(){return Vc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Vc.apply(this,arguments)}const Ih=U.createContext(null),e1=U.createContext(null),Oi=U.createContext(null),xm=U.createContext(null),zr=U.createContext({outlet:null,matches:[],isDataRoute:!1}),t1=U.createContext(null);function fC(t,e){let{relative:n}=e===void 0?{}:e;zo()||ge(!1);let{basename:r,navigator:i}=U.useContext(Oi),{hash:s,pathname:o,search:l}=r1(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:Nr([r,o])),i.createHref({pathname:u,search:l,hash:s})}function zo(){return U.useContext(xm)!=null}function Vl(){return zo()||ge(!1),U.useContext(xm).location}function n1(t){U.useContext(Oi).static||U.useLayoutEffect(t)}function Ul(){let{isDataRoute:t}=U.useContext(zr);return t?PC():pC()}function pC(){zo()||ge(!1);let t=U.useContext(Ih),{basename:e,future:n,navigator:r}=U.useContext(Oi),{matches:i}=U.useContext(zr),{pathname:s}=Vl(),o=JSON.stringify(wh(i,n.v7_relativeSplatPath)),l=U.useRef(!1);return n1(()=>{l.current=!0}),U.useCallback(function(c,d){if(d===void 0&&(d={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let f=Eh(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:Nr([e,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[e,r,o,s,t])}const mC=U.createContext(null);function gC(t){let e=U.useContext(zr).outlet;return e&&U.createElement(mC.Provider,{value:t},e)}function r1(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=U.useContext(Oi),{matches:i}=U.useContext(zr),{pathname:s}=Vl(),o=JSON.stringify(wh(i,r.v7_relativeSplatPath));return U.useMemo(()=>Eh(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function yC(t,e,n,r){zo()||ge(!1);let{navigator:i}=U.useContext(Oi),{matches:s}=U.useContext(zr),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=Vl(),d;d=c;let f=d.pathname||"/",m=f;if(u!=="/"){let C=u.replace(/^\//,"").split("/");m="/"+f.replace(/^\//,"").split("/").slice(C.length).join("/")}let E=qi(t,{pathname:m});return TC(E&&E.map(C=>Object.assign({},C,{params:Object.assign({},l,C.params),pathname:Nr([u,i.encodeLocation?i.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?u:Nr([u,i.encodeLocation?i.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),s,n,r)}function vC(){let t=AC(),e=Th(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return U.createElement(U.Fragment,null,U.createElement("h2",null,"Unexpected Application Error!"),U.createElement("h3",{style:{fontStyle:"italic"}},e),n?U.createElement("pre",{style:i},n):null,null)}const _C=U.createElement(vC,null);class wC extends U.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?U.createElement(zr.Provider,{value:this.props.routeContext},U.createElement(t1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function EC(t){let{routeContext:e,match:n,children:r}=t,i=U.useContext(Ih);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),U.createElement(zr.Provider,{value:e},r)}function TC(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=o.findIndex(f=>f.route.id&&(l==null?void 0:l[f.route.id])!==void 0);d>=0||ge(!1),o=o.slice(0,Math.min(o.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:m,errors:E}=n,S=f.route.loader&&m[f.route.id]===void 0&&(!E||E[f.route.id]===void 0);if(f.route.lazy||S){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,f,m)=>{let E,S=!1,C=null,b=null;n&&(E=l&&f.route.id?l[f.route.id]:void 0,C=f.route.errorElement||_C,u&&(c<0&&m===0?(S=!0,b=null):c===m&&(S=!0,b=f.route.hydrateFallbackElement||null)));let I=e.concat(o.slice(0,m+1)),v=()=>{let R;return E?R=C:S?R=b:f.route.Component?R=U.createElement(f.route.Component,null):f.route.element?R=f.route.element:R=d,U.createElement(EC,{match:f,routeContext:{outlet:d,matches:I,isDataRoute:n!=null},children:R})};return n&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?U.createElement(wC,{location:n.location,revalidation:n.revalidation,component:C,error:E,children:v(),routeContext:{outlet:null,matches:I,isDataRoute:!0}}):v()},null)}var i1=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(i1||{}),Uc=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Uc||{});function IC(t){let e=U.useContext(Ih);return e||ge(!1),e}function SC(t){let e=U.useContext(e1);return e||ge(!1),e}function RC(t){let e=U.useContext(zr);return e||ge(!1),e}function s1(t){let e=RC(),n=e.matches[e.matches.length-1];return n.route.id||ge(!1),n.route.id}function AC(){var t;let e=U.useContext(t1),n=SC(Uc.UseRouteError),r=s1(Uc.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function PC(){let{router:t}=IC(i1.UseNavigateStable),e=s1(Uc.UseNavigateStable),n=U.useRef(!1);return n1(()=>{n.current=!0}),U.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Vc({fromRouteId:e},s)))},[t,e])}function CC(t){let{to:e,replace:n,state:r,relative:i}=t;zo()||ge(!1);let{future:s,static:o}=U.useContext(Oi),{matches:l}=U.useContext(zr),{pathname:u}=Vl(),c=Ul(),d=Eh(e,wh(l,s.v7_relativeSplatPath),u,i==="path"),f=JSON.stringify(d);return U.useEffect(()=>c(JSON.parse(f),{replace:n,state:r,relative:i}),[c,f,i,n,r]),null}function kC(t){return gC(t.context)}function xC(t){let{basename:e="/",children:n=null,location:r,navigationType:i=lt.Pop,navigator:s,static:o=!1,future:l}=t;zo()&&ge(!1);let u=e.replace(/^\/*/,"/"),c=U.useMemo(()=>({basename:u,navigator:s,static:o,future:Vc({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=Di(r));let{pathname:d="/",search:f="",hash:m="",state:E=null,key:S="default"}=r,C=U.useMemo(()=>{let b=jo(d,u);return b==null?null:{location:{pathname:b,search:f,hash:m,state:E,key:S},navigationType:i}},[u,d,f,m,E,S,i]);return C==null?null:U.createElement(Oi.Provider,{value:c},U.createElement(xm.Provider,{children:n,value:C}))}new Promise(()=>{});function NC(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:U.createElement(t.Component),Component:void 0}),t.HydrateFallback&&Object.assign(e,{hydrateFallbackElement:U.createElement(t.HydrateFallback),HydrateFallback:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:U.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.26.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wl(){return wl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},wl.apply(this,arguments)}function bC(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function DC(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function OC(t,e){return t.button===0&&(!e||e==="_self")&&!DC(t)}const LC=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],MC="6";try{window.__reactRouterVersion=MC}catch{}function VC(t,e){return KP({basename:void 0,future:wl({},void 0,{v7_prependBasename:!0}),history:yP({window:void 0}),hydrationData:UC(),routes:t,mapRouteProperties:NC,unstable_dataStrategy:void 0,unstable_patchRoutesOnMiss:void 0,window:void 0}).initialize()}function UC(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=wl({},e,{errors:FC(e.errors)})),e}function FC(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new Mc(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let s=window[i.__subType];if(typeof s=="function")try{let o=new s(i.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let s=new Error(i.message);s.stack="",n[r]=s}}else n[r]=i;return n}const jC=U.createContext({isTransitioning:!1}),zC=U.createContext(new Map),$C="startTransition",Vv=iR[$C],BC="flushSync",Uv=gP[BC];function HC(t){Vv?Vv(t):t()}function Ta(t){Uv?Uv(t):t()}let WC=class{constructor(){this.status="pending",this.promise=new Promise((e,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",e(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}};function qC(t){let{fallbackElement:e,router:n,future:r}=t,[i,s]=U.useState(n.state),[o,l]=U.useState(),[u,c]=U.useState({isTransitioning:!1}),[d,f]=U.useState(),[m,E]=U.useState(),[S,C]=U.useState(),b=U.useRef(new Map),{v7_startTransition:I}=r||{},v=U.useCallback(g=>{I?HC(g):g()},[I]),R=U.useCallback((g,T)=>{let{deletedFetchers:_,unstable_flushSync:P,unstable_viewTransitionOpts:N}=T;_.forEach(de=>b.current.delete(de)),g.fetchers.forEach((de,vt)=>{de.data!==void 0&&b.current.set(vt,de.data)});let A=n.window==null||n.window.document==null||typeof n.window.document.startViewTransition!="function";if(!N||A){P?Ta(()=>s(g)):v(()=>s(g));return}if(P){Ta(()=>{m&&(d&&d.resolve(),m.skipTransition()),c({isTransitioning:!0,flushSync:!0,currentLocation:N.currentLocation,nextLocation:N.nextLocation})});let de=n.window.document.startViewTransition(()=>{Ta(()=>s(g))});de.finished.finally(()=>{Ta(()=>{f(void 0),E(void 0),l(void 0),c({isTransitioning:!1})})}),Ta(()=>E(de));return}m?(d&&d.resolve(),m.skipTransition(),C({state:g,currentLocation:N.currentLocation,nextLocation:N.nextLocation})):(l(g),c({isTransitioning:!0,flushSync:!1,currentLocation:N.currentLocation,nextLocation:N.nextLocation}))},[n.window,m,d,b,v]);U.useLayoutEffect(()=>n.subscribe(R),[n,R]),U.useEffect(()=>{u.isTransitioning&&!u.flushSync&&f(new WC)},[u]),U.useEffect(()=>{if(d&&o&&n.window){let g=o,T=d.promise,_=n.window.document.startViewTransition(async()=>{v(()=>s(g)),await T});_.finished.finally(()=>{f(void 0),E(void 0),l(void 0),c({isTransitioning:!1})}),E(_)}},[v,o,d,n.window]),U.useEffect(()=>{d&&o&&i.location.key===o.location.key&&d.resolve()},[d,m,i.location,o]),U.useEffect(()=>{!u.isTransitioning&&S&&(l(S.state),c({isTransitioning:!0,flushSync:!1,currentLocation:S.currentLocation,nextLocation:S.nextLocation}),C(void 0))},[u.isTransitioning,S]),U.useEffect(()=>{},[]);let O=U.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:g=>n.navigate(g),push:(g,T,_)=>n.navigate(g,{state:T,preventScrollReset:_==null?void 0:_.preventScrollReset}),replace:(g,T,_)=>n.navigate(g,{replace:!0,state:T,preventScrollReset:_==null?void 0:_.preventScrollReset})}),[n]),F=n.basename||"/",k=U.useMemo(()=>({router:n,navigator:O,static:!1,basename:F}),[n,O,F]),w=U.useMemo(()=>({v7_relativeSplatPath:n.future.v7_relativeSplatPath}),[n.future.v7_relativeSplatPath]);return U.createElement(U.Fragment,null,U.createElement(Ih.Provider,{value:k},U.createElement(e1.Provider,{value:i},U.createElement(zC.Provider,{value:b.current},U.createElement(jC.Provider,{value:u},U.createElement(xC,{basename:F,location:i.location,navigationType:i.historyAction,navigator:O,future:w},i.initialized||n.future.v7_partialHydration?U.createElement(KC,{routes:n.routes,future:n.future,state:i}):e))))),null)}const KC=U.memo(GC);function GC(t){let{routes:e,future:n,state:r}=t;return yC(e,void 0,r,n)}const QC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",YC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,o1=U.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:c,preventScrollReset:d,unstable_viewTransition:f}=e,m=bC(e,LC),{basename:E}=U.useContext(Oi),S,C=!1;if(typeof c=="string"&&YC.test(c)&&(S=c,QC))try{let R=new URL(window.location.href),O=c.startsWith("//")?new URL(R.protocol+c):new URL(c),F=jo(O.pathname,E);O.origin===R.origin&&F!=null?c=F+O.search+O.hash:C=!0}catch{}let b=fC(c,{relative:i}),I=XC(c,{replace:o,state:l,target:u,preventScrollReset:d,relative:i,unstable_viewTransition:f});function v(R){r&&r(R),R.defaultPrevented||I(R)}return U.createElement("a",wl({},m,{href:S||b,onClick:C||s?r:v,ref:n,target:u}))});var Fv;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Fv||(Fv={}));var jv;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(jv||(jv={}));function XC(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l}=e===void 0?{}:e,u=Ul(),c=Vl(),d=r1(t,{relative:o});return U.useCallback(f=>{if(OC(f,n)){f.preventDefault();let m=r!==void 0?r:hs(c)===hs(d);u(t,{replace:m,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l})}},[c,u,d,r,i,n,t,s,o,l])}var Ht=function(){return Ht=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},Ht.apply(this,arguments)};function Nm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function El(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}var ze="-ms-",qa="-moz-",xe="-webkit-",a1="comm",Sh="rule",bm="decl",JC="@import",l1="@keyframes",ZC="@layer",u1=Math.abs,Dm=String.fromCharCode,Jf=Object.assign;function ek(t,e){return Et(t,0)^45?(((e<<2^Et(t,0))<<2^Et(t,1))<<2^Et(t,2))<<2^Et(t,3):0}function c1(t){return t.trim()}function Ir(t,e){return(t=e.exec(t))?t[0]:t}function fe(t,e,n){return t.replace(e,n)}function Ju(t,e,n){return t.indexOf(e,n)}function Et(t,e){return t.charCodeAt(e)|0}function Io(t,e,n){return t.slice(e,n)}function nr(t){return t.length}function h1(t){return t.length}function xa(t,e){return e.push(t),t}function tk(t,e){return t.map(e).join("")}function zv(t,e){return t.filter(function(n){return!Ir(n,e)})}var Rh=1,So=1,d1=0,Cn=0,ct=0,$o="";function Ah(t,e,n,r,i,s,o,l){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:Rh,column:So,length:o,return:"",siblings:l}}function Jr(t,e){return Jf(Ah("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function Fs(t){for(;t.root;)t=Jr(t.root,{children:[t]});xa(t,t.siblings)}function nk(){return ct}function rk(){return ct=Cn>0?Et($o,--Cn):0,So--,ct===10&&(So=1,Rh--),ct}function Hn(){return ct=Cn<d1?Et($o,Cn++):0,So++,ct===10&&(So=1,Rh++),ct}function rs(){return Et($o,Cn)}function Zu(){return Cn}function Ph(t,e){return Io($o,t,e)}function Zf(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ik(t){return Rh=So=1,d1=nr($o=t),Cn=0,[]}function sk(t){return $o="",t}function Od(t){return c1(Ph(Cn-1,ep(t===91?t+2:t===40?t+1:t)))}function ok(t){for(;(ct=rs())&&ct<33;)Hn();return Zf(t)>2||Zf(ct)>3?"":" "}function ak(t,e){for(;--e&&Hn()&&!(ct<48||ct>102||ct>57&&ct<65||ct>70&&ct<97););return Ph(t,Zu()+(e<6&&rs()==32&&Hn()==32))}function ep(t){for(;Hn();)switch(ct){case t:return Cn;case 34:case 39:t!==34&&t!==39&&ep(ct);break;case 40:t===41&&ep(t);break;case 92:Hn();break}return Cn}function lk(t,e){for(;Hn()&&t+ct!==57;)if(t+ct===84&&rs()===47)break;return"/*"+Ph(e,Cn-1)+"*"+Dm(t===47?t:Hn())}function uk(t){for(;!Zf(rs());)Hn();return Ph(t,Cn)}function ck(t){return sk(ec("",null,null,null,[""],t=ik(t),0,[0],t))}function ec(t,e,n,r,i,s,o,l,u){for(var c=0,d=0,f=o,m=0,E=0,S=0,C=1,b=1,I=1,v=0,R="",O=i,F=s,k=r,w=R;b;)switch(S=v,v=Hn()){case 40:if(S!=108&&Et(w,f-1)==58){Ju(w+=fe(Od(v),"&","&\f"),"&\f",u1(c?l[c-1]:0))!=-1&&(I=-1);break}case 34:case 39:case 91:w+=Od(v);break;case 9:case 10:case 13:case 32:w+=ok(S);break;case 92:w+=ak(Zu()-1,7);continue;case 47:switch(rs()){case 42:case 47:xa(hk(lk(Hn(),Zu()),e,n,u),u);break;default:w+="/"}break;case 123*C:l[c++]=nr(w)*I;case 125*C:case 59:case 0:switch(v){case 0:case 125:b=0;case 59+d:I==-1&&(w=fe(w,/\f/g,"")),E>0&&nr(w)-f&&xa(E>32?Bv(w+";",r,n,f-1,u):Bv(fe(w," ","")+";",r,n,f-2,u),u);break;case 59:w+=";";default:if(xa(k=$v(w,e,n,c,d,i,l,R,O=[],F=[],f,s),s),v===123)if(d===0)ec(w,e,k,k,O,s,f,l,F);else switch(m===99&&Et(w,3)===110?100:m){case 100:case 108:case 109:case 115:ec(t,k,k,r&&xa($v(t,k,k,0,0,i,l,R,i,O=[],f,F),F),i,F,f,l,r?O:F);break;default:ec(w,k,k,k,[""],F,0,l,F)}}c=d=E=0,C=I=1,R=w="",f=o;break;case 58:f=1+nr(w),E=S;default:if(C<1){if(v==123)--C;else if(v==125&&C++==0&&rk()==125)continue}switch(w+=Dm(v),v*C){case 38:I=d>0?1:(w+="\f",-1);break;case 44:l[c++]=(nr(w)-1)*I,I=1;break;case 64:rs()===45&&(w+=Od(Hn())),m=rs(),d=f=nr(R=w+=uk(Zu())),v++;break;case 45:S===45&&nr(w)==2&&(C=0)}}return s}function $v(t,e,n,r,i,s,o,l,u,c,d,f){for(var m=i-1,E=i===0?s:[""],S=h1(E),C=0,b=0,I=0;C<r;++C)for(var v=0,R=Io(t,m+1,m=u1(b=o[C])),O=t;v<S;++v)(O=c1(b>0?E[v]+" "+R:fe(R,/&\f/g,E[v])))&&(u[I++]=O);return Ah(t,e,n,i===0?Sh:l,u,c,d,f)}function hk(t,e,n,r){return Ah(t,e,n,a1,Dm(nk()),Io(t,2,-2),0,r)}function Bv(t,e,n,r,i){return Ah(t,e,n,bm,Io(t,0,r),Io(t,r+1,-1),r,i)}function f1(t,e,n){switch(ek(t,e)){case 5103:return xe+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return xe+t+t;case 4789:return qa+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return xe+t+qa+t+ze+t+t;case 5936:switch(Et(t,e+11)){case 114:return xe+t+ze+fe(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return xe+t+ze+fe(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return xe+t+ze+fe(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return xe+t+ze+t+t;case 6165:return xe+t+ze+"flex-"+t+t;case 5187:return xe+t+fe(t,/(\w+).+(:[^]+)/,xe+"box-$1$2"+ze+"flex-$1$2")+t;case 5443:return xe+t+ze+"flex-item-"+fe(t,/flex-|-self/g,"")+(Ir(t,/flex-|baseline/)?"":ze+"grid-row-"+fe(t,/flex-|-self/g,""))+t;case 4675:return xe+t+ze+"flex-line-pack"+fe(t,/align-content|flex-|-self/g,"")+t;case 5548:return xe+t+ze+fe(t,"shrink","negative")+t;case 5292:return xe+t+ze+fe(t,"basis","preferred-size")+t;case 6060:return xe+"box-"+fe(t,"-grow","")+xe+t+ze+fe(t,"grow","positive")+t;case 4554:return xe+fe(t,/([^-])(transform)/g,"$1"+xe+"$2")+t;case 6187:return fe(fe(fe(t,/(zoom-|grab)/,xe+"$1"),/(image-set)/,xe+"$1"),t,"")+t;case 5495:case 3959:return fe(t,/(image-set\([^]*)/,xe+"$1$`$1");case 4968:return fe(fe(t,/(.+:)(flex-)?(.*)/,xe+"box-pack:$3"+ze+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+xe+t+t;case 4200:if(!Ir(t,/flex-|baseline/))return ze+"grid-column-align"+Io(t,e)+t;break;case 2592:case 3360:return ze+fe(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,Ir(r.props,/grid-\w+-end/)})?~Ju(t+(n=n[e].value),"span",0)?t:ze+fe(t,"-start","")+t+ze+"grid-row-span:"+(~Ju(n,"span",0)?Ir(n,/\d+/):+Ir(n,/\d+/)-+Ir(t,/\d+/))+";":ze+fe(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return Ir(r.props,/grid-\w+-start/)})?t:ze+fe(fe(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return fe(t,/(.+)-inline(.+)/,xe+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(nr(t)-1-e>6)switch(Et(t,e+1)){case 109:if(Et(t,e+4)!==45)break;case 102:return fe(t,/(.+:)(.+)-([^]+)/,"$1"+xe+"$2-$3$1"+qa+(Et(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Ju(t,"stretch",0)?f1(fe(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return fe(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,l,u,c){return ze+i+":"+s+c+(o?ze+i+"-span:"+(l?u:+u-+s)+c:"")+t});case 4949:if(Et(t,e+6)===121)return fe(t,":",":"+xe)+t;break;case 6444:switch(Et(t,Et(t,14)===45?18:11)){case 120:return fe(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+xe+(Et(t,14)===45?"inline-":"")+"box$3$1"+xe+"$2$3$1"+ze+"$2box$3")+t;case 100:return fe(t,":",":"+ze)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return fe(t,"scroll-","scroll-snap-")+t}return t}function Fc(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function dk(t,e,n,r){switch(t.type){case ZC:if(t.children.length)break;case JC:case bm:return t.return=t.return||t.value;case a1:return"";case l1:return t.return=t.value+"{"+Fc(t.children,r)+"}";case Sh:if(!nr(t.value=t.props.join(",")))return""}return nr(n=Fc(t.children,r))?t.return=t.value+"{"+n+"}":""}function fk(t){var e=h1(t);return function(n,r,i,s){for(var o="",l=0;l<e;l++)o+=t[l](n,r,i,s)||"";return o}}function pk(t){return function(e){e.root||(e=e.return)&&t(e)}}function mk(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case bm:t.return=f1(t.value,t.length,n);return;case l1:return Fc([Jr(t,{value:fe(t.value,"@","@"+xe)})],r);case Sh:if(t.length)return tk(n=t.props,function(i){switch(Ir(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Fs(Jr(t,{props:[fe(i,/:(read-\w+)/,":"+qa+"$1")]})),Fs(Jr(t,{props:[i]})),Jf(t,{props:zv(n,r)});break;case"::placeholder":Fs(Jr(t,{props:[fe(i,/:(plac\w+)/,":"+xe+"input-$1")]})),Fs(Jr(t,{props:[fe(i,/:(plac\w+)/,":"+qa+"$1")]})),Fs(Jr(t,{props:[fe(i,/:(plac\w+)/,ze+"input-$1")]})),Fs(Jr(t,{props:[i]})),Jf(t,{props:zv(n,r)});break}return""})}}var gk={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},un={},Ro=typeof process<"u"&&un!==void 0&&(un.REACT_APP_SC_ATTR||un.SC_ATTR)||"data-styled",p1="active",m1="data-styled-version",Ch="6.1.12",Om=`/*!sc*/
`,jc=typeof window<"u"&&"HTMLElement"in window,yk=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&un!==void 0&&un.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&un.REACT_APP_SC_DISABLE_SPEEDY!==""?un.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&un.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&un!==void 0&&un.SC_DISABLE_SPEEDY!==void 0&&un.SC_DISABLE_SPEEDY!==""&&un.SC_DISABLE_SPEEDY!=="false"&&un.SC_DISABLE_SPEEDY),vk={},kh=Object.freeze([]),Ao=Object.freeze({});function g1(t,e,n){return n===void 0&&(n=Ao),t.theme!==n.theme&&t.theme||e||n.theme}var y1=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),_k=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,wk=/(^-|-$)/g;function Hv(t){return t.replace(_k,"-").replace(wk,"")}var Ek=/(a)(d)/gi,xu=52,Wv=function(t){return String.fromCharCode(t+(t>25?39:97))};function tp(t){var e,n="";for(e=Math.abs(t);e>xu;e=e/xu|0)n=Wv(e%xu)+n;return(Wv(e%xu)+n).replace(Ek,"$1-$2")}var Ld,v1=5381,no=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},_1=function(t){return no(v1,t)};function w1(t){return tp(_1(t)>>>0)}function Tk(t){return t.displayName||t.name||"Component"}function Md(t){return typeof t=="string"&&!0}var E1=typeof Symbol=="function"&&Symbol.for,T1=E1?Symbol.for("react.memo"):60115,Ik=E1?Symbol.for("react.forward_ref"):60112,Sk={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Rk={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},I1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ak=((Ld={})[Ik]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ld[T1]=I1,Ld);function qv(t){return("type"in(e=t)&&e.type.$$typeof)===T1?I1:"$$typeof"in t?Ak[t.$$typeof]:Sk;var e}var Pk=Object.defineProperty,Ck=Object.getOwnPropertyNames,Kv=Object.getOwnPropertySymbols,kk=Object.getOwnPropertyDescriptor,xk=Object.getPrototypeOf,Gv=Object.prototype;function S1(t,e,n){if(typeof e!="string"){if(Gv){var r=xk(e);r&&r!==Gv&&S1(t,r,n)}var i=Ck(e);Kv&&(i=i.concat(Kv(e)));for(var s=qv(t),o=qv(e),l=0;l<i.length;++l){var u=i[l];if(!(u in Rk||n&&n[u]||o&&u in o||s&&u in s)){var c=kk(e,u);try{Pk(t,u,c)}catch{}}}}return t}function Po(t){return typeof t=="function"}function Lm(t){return typeof t=="object"&&"styledComponentId"in t}function Ji(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function np(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=t[r];return n}function Tl(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function rp(t,e,n){if(n===void 0&&(n=!1),!n&&!Tl(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=rp(t[r],e[r]);else if(Tl(e))for(var r in e)t[r]=rp(t[r],e[r]);return t}function Mm(t,e){Object.defineProperty(t,"toString",{value:e})}function Fl(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var Nk=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;e>=s;)if((s<<=1)<0)throw Fl(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var l=this.indexOfGroup(e+1),u=(o=0,n.length);o<u;o++)this.tag.insertRule(l,n[o])&&(this.groupSizes[e]++,l++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(Om);return n},t}(),tc=new Map,zc=new Map,nc=1,Nu=function(t){if(tc.has(t))return tc.get(t);for(;zc.has(nc);)nc++;var e=nc++;return tc.set(t,e),zc.set(e,t),e},bk=function(t,e){nc=e+1,tc.set(t,e),zc.set(e,t)},Dk="style[".concat(Ro,"][").concat(m1,'="').concat(Ch,'"]'),Ok=new RegExp("^".concat(Ro,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Lk=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},Mk=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(Om),i=[],s=0,o=r.length;s<o;s++){var l=r[s].trim();if(l){var u=l.match(Ok);if(u){var c=0|parseInt(u[1],10),d=u[2];c!==0&&(bk(d,c),Lk(t,d,u[3]),t.getTag().insertRules(c,i)),i.length=0}else i.push(l)}}},Qv=function(t){for(var e=document.querySelectorAll(Dk),n=0,r=e.length;n<r;n++){var i=e[n];i&&i.getAttribute(Ro)!==p1&&(Mk(t,i),i.parentNode&&i.parentNode.removeChild(i))}};function Vk(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var R1=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(l){var u=Array.from(l.querySelectorAll("style[".concat(Ro,"]")));return u[u.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Ro,p1),r.setAttribute(m1,Ch);var o=Vk();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},Uk=function(){function t(e){this.element=R1(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw Fl(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),Fk=function(){function t(e){this.element=R1(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),jk=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),Yv=jc,zk={isServer:!jc,useCSSOMInjection:!yk},$c=function(){function t(e,n,r){e===void 0&&(e=Ao),n===void 0&&(n={});var i=this;this.options=Ht(Ht({},zk),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&jc&&Yv&&(Yv=!1,Qv(this)),Mm(this,function(){return function(s){for(var o=s.getTag(),l=o.length,u="",c=function(f){var m=function(I){return zc.get(I)}(f);if(m===void 0)return"continue";var E=s.names.get(m),S=o.getGroup(f);if(E===void 0||!E.size||S.length===0)return"continue";var C="".concat(Ro,".g").concat(f,'[id="').concat(m,'"]'),b="";E!==void 0&&E.forEach(function(I){I.length>0&&(b+="".concat(I,","))}),u+="".concat(S).concat(C,'{content:"').concat(b,'"}').concat(Om)},d=0;d<l;d++)c(d);return u}(i)})}return t.registerId=function(e){return Nu(e)},t.prototype.rehydrate=function(){!this.server&&jc&&Qv(this)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(Ht(Ht({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new jk(i):r?new Uk(i):new Fk(i)}(this.options),new Nk(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(Nu(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(Nu(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(Nu(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),$k=/&/g,Bk=/^\s*\/\/.*$/gm;function A1(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=A1(n.children,e)),n})}function Hk(t){var e,n,r,i=Ao,s=i.options,o=s===void 0?Ao:s,l=i.plugins,u=l===void 0?kh:l,c=function(m,E,S){return S.startsWith(n)&&S.endsWith(n)&&S.replaceAll(n,"").length>0?".".concat(e):m},d=u.slice();d.push(function(m){m.type===Sh&&m.value.includes("&")&&(m.props[0]=m.props[0].replace($k,n).replace(r,c))}),o.prefix&&d.push(mk),d.push(dk);var f=function(m,E,S,C){E===void 0&&(E=""),S===void 0&&(S=""),C===void 0&&(C="&"),e=C,n=E,r=new RegExp("\\".concat(n,"\\b"),"g");var b=m.replace(Bk,""),I=ck(S||E?"".concat(S," ").concat(E," { ").concat(b," }"):b);o.namespace&&(I=A1(I,o.namespace));var v=[];return Fc(I,fk(d.concat(pk(function(R){return v.push(R)})))),v};return f.hash=u.length?u.reduce(function(m,E){return E.name||Fl(15),no(m,E.name)},v1).toString():"",f}var Wk=new $c,ip=Hk(),P1=zn.createContext({shouldForwardProp:void 0,styleSheet:Wk,stylis:ip});P1.Consumer;zn.createContext(void 0);function sp(){return U.useContext(P1)}var qk=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=ip);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,Mm(this,function(){throw Fl(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=ip),this.name+e.hash},t}(),Kk=function(t){return t>="A"&&t<="Z"};function Xv(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;Kk(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var C1=function(t){return t==null||t===!1||t===""},k1=function(t){var e,n,r=[];for(var i in t){var s=t[i];t.hasOwnProperty(i)&&!C1(s)&&(Array.isArray(s)&&s.isCss||Po(s)?r.push("".concat(Xv(i),":"),s,";"):Tl(s)?r.push.apply(r,El(El(["".concat(i," {")],k1(s),!1),["}"],!1)):r.push("".concat(Xv(i),": ").concat((e=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in gk||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function _i(t,e,n,r){if(C1(t))return[];if(Lm(t))return[".".concat(t.styledComponentId)];if(Po(t)){if(!Po(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var i=t(e);return _i(i,e,n,r)}var s;return t instanceof qk?n?(t.inject(n,r),[t.getName(r)]):[t]:Tl(t)?k1(t):Array.isArray(t)?Array.prototype.concat.apply(kh,t.map(function(o){return _i(o,e,n,r)})):[t.toString()]}function x1(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Po(n)&&!Lm(n))return!1}return!0}var Gk=_1(Ch),Qk=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&x1(e),this.componentId=n,this.baseHash=no(Gk,n),this.baseStyle=r,$c.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Ji(i,this.staticRulesId);else{var s=np(_i(this.rules,e,n,r)),o=tp(no(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var l=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,l)}i=Ji(i,o),this.staticRulesId=o}else{for(var u=no(this.baseHash,r.hash),c="",d=0;d<this.rules.length;d++){var f=this.rules[d];if(typeof f=="string")c+=f;else if(f){var m=np(_i(f,e,n,r));u=no(u,m+d),c+=m}}if(c){var E=tp(u>>>0);n.hasNameForId(this.componentId,E)||n.insertRules(this.componentId,E,r(c,".".concat(E),void 0,this.componentId)),i=Ji(i,E)}}return i},t}(),Vm=zn.createContext(void 0);Vm.Consumer;var Vd={};function Yk(t,e,n){var r=Lm(t),i=t,s=!Md(t),o=e.attrs,l=o===void 0?kh:o,u=e.componentId,c=u===void 0?function(O,F){var k=typeof O!="string"?"sc":Hv(O);Vd[k]=(Vd[k]||0)+1;var w="".concat(k,"-").concat(w1(Ch+k+Vd[k]));return F?"".concat(F,"-").concat(w):w}(e.displayName,e.parentComponentId):u,d=e.displayName,f=d===void 0?function(O){return Md(O)?"styled.".concat(O):"Styled(".concat(Tk(O),")")}(t):d,m=e.displayName&&e.componentId?"".concat(Hv(e.displayName),"-").concat(e.componentId):e.componentId||c,E=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,S=e.shouldForwardProp;if(r&&i.shouldForwardProp){var C=i.shouldForwardProp;if(e.shouldForwardProp){var b=e.shouldForwardProp;S=function(O,F){return C(O,F)&&b(O,F)}}else S=C}var I=new Qk(n,m,r?i.componentStyle:void 0);function v(O,F){return function(k,w,g){var T=k.attrs,_=k.componentStyle,P=k.defaultProps,N=k.foldedComponentIds,A=k.styledComponentId,de=k.target,vt=zn.useContext(Vm),_n=sp(),Ee=k.shouldForwardProp||_n.shouldForwardProp,K=g1(w,vt,P)||Ao,J=function(Ze,qe,Dt){for(var xn,Nn=Ht(Ht({},qe),{className:void 0,theme:Dt}),Gn=0;Gn<Ze.length;Gn+=1){var bn=Po(xn=Ze[Gn])?xn(Nn):xn;for(var be in bn)Nn[be]=be==="className"?Ji(Nn[be],bn[be]):be==="style"?Ht(Ht({},Nn[be]),bn[be]):bn[be]}return qe.className&&(Nn.className=Ji(Nn.className,qe.className)),Nn}(T,w,K),re=J.as||de,me={};for(var ce in J)J[ce]===void 0||ce[0]==="$"||ce==="as"||ce==="theme"&&J.theme===K||(ce==="forwardedAs"?me.as=J.forwardedAs:Ee&&!Ee(ce,re)||(me[ce]=J[ce]));var Ce=function(Ze,qe){var Dt=sp(),xn=Ze.generateAndInjectStyles(qe,Dt.styleSheet,Dt.stylis);return xn}(_,J),We=Ji(N,A);return Ce&&(We+=" "+Ce),J.className&&(We+=" "+J.className),me[Md(re)&&!y1.has(re)?"class":"className"]=We,me.ref=g,U.createElement(re,me)}(R,O,F)}v.displayName=f;var R=zn.forwardRef(v);return R.attrs=E,R.componentStyle=I,R.displayName=f,R.shouldForwardProp=S,R.foldedComponentIds=r?Ji(i.foldedComponentIds,i.styledComponentId):"",R.styledComponentId=m,R.target=r?i.target:t,Object.defineProperty(R,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(O){this._foldedDefaultProps=r?function(F){for(var k=[],w=1;w<arguments.length;w++)k[w-1]=arguments[w];for(var g=0,T=k;g<T.length;g++)rp(F,T[g],!0);return F}({},i.defaultProps,O):O}}),Mm(R,function(){return".".concat(R.styledComponentId)}),s&&S1(R,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),R}function Jv(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var Zv=function(t){return Object.assign(t,{isCss:!0})};function Um(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(Po(t)||Tl(t))return Zv(_i(Jv(kh,El([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?_i(r):Zv(_i(Jv(r,e)))}function op(t,e,n){if(n===void 0&&(n=Ao),!e)throw Fl(1,e);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return t(e,n,Um.apply(void 0,El([i],s,!1)))};return r.attrs=function(i){return op(t,e,Ht(Ht({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return op(t,e,Ht(Ht({},n),i))},r}var N1=function(t){return op(Yk,t)},pe=N1;y1.forEach(function(t){pe[t]=N1(t)});var Xk=function(){function t(e,n){this.rules=e,this.componentId=n,this.isStatic=x1(e),$c.registerId(this.componentId+1)}return t.prototype.createStyles=function(e,n,r,i){var s=i(np(_i(this.rules,n,r,i)),""),o=this.componentId+e;r.insertRules(o,o,s)},t.prototype.removeStyles=function(e,n){n.clearRules(this.componentId+e)},t.prototype.renderStyles=function(e,n,r,i){e>2&&$c.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,n,r,i)},t}();function b1(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=Um.apply(void 0,El([t],e,!1)),i="sc-global-".concat(w1(JSON.stringify(r))),s=new Xk(r,i),o=function(u){var c=sp(),d=zn.useContext(Vm),f=zn.useRef(c.styleSheet.allocateGSInstance(i)).current;return c.styleSheet.server&&l(f,u,c.styleSheet,d,c.stylis),zn.useLayoutEffect(function(){if(!c.styleSheet.server)return l(f,u,c.styleSheet,d,c.stylis),function(){return s.removeStyles(f,c.styleSheet)}},[f,u,c.styleSheet,d,c.stylis]),null};function l(u,c,d,f,m){if(s.isStatic)s.renderStyles(u,vk,d,m);else{var E=Ht(Ht({},c),{theme:g1(c,f,o.defaultProps)});s.renderStyles(u,E,d,m)}}return zn.memo(o)}const Jk=pe.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`,Zk=pe.span`
  font-size: 24px;
`;function ex(){return z.jsx(Jk,{children:z.jsx(Zk,{children:"Loading..."})})}var D1=function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t},O1=Um(e_||(e_=D1([`
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
`])));b1(t_||(t_=D1(["",""],["",""])),O1);var e_,t_;function tx(){return z.jsx(z.Fragment,{children:z.jsx(kC,{})})}var n_={};/**
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
 */const L1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},nx=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},M1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,f=(s&3)<<4|l>>4;let m=(l&15)<<2|c>>6,E=c&63;u||(E=64,o||(m=64)),r.push(n[d],n[f],n[m],n[E])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(L1(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):nx(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||f==null)throw new rx;const m=s<<2|l>>4;if(r.push(m),c!==64){const E=l<<4&240|c>>2;if(r.push(E),f!==64){const S=c<<6&192|f;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class rx extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ix=function(t){const e=L1(t);return M1.encodeByteArray(e,!0)},Bc=function(t){return ix(t).replace(/\./g,"")},V1=function(t){try{return M1.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function sx(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ox=()=>sx().__FIREBASE_DEFAULTS__,ax=()=>{if(typeof process>"u"||typeof n_>"u")return;const t=n_.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},lx=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&V1(t[1]);return e&&JSON.parse(e)},xh=()=>{try{return ox()||ax()||lx()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},U1=t=>{var e,n;return(n=(e=xh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},F1=t=>{const e=U1(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},j1=()=>{var t;return(t=xh())===null||t===void 0?void 0:t.config},z1=t=>{var e;return(e=xh())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class ux{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function $1(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Bc(JSON.stringify(n)),Bc(JSON.stringify(o)),""].join(".")}/**
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
 */function Nt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function cx(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Nt())}function hx(){var t;const e=(t=xh())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function dx(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function fx(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function px(){const t=Nt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function mx(){return!hx()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function gx(){try{return typeof indexedDB=="object"}catch{return!1}}function yx(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const vx="FirebaseError";class kn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=vx,Object.setPrototypeOf(this,kn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,jl.prototype.create)}}class jl{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?_x(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new kn(i,l,r)}}function _x(t,e){return t.replace(wx,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const wx=/\{\$([^}]+)}/g;function Ex(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Hc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(r_(s)&&r_(o)){if(!Hc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function r_(t){return t!==null&&typeof t=="object"}/**
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
 */function zl(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Na(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ba(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Tx(t,e){const n=new Ix(t,e);return n.subscribe.bind(n)}class Ix{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Sx(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ud),i.error===void 0&&(i.error=Ud),i.complete===void 0&&(i.complete=Ud);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Sx(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ud(){}/**
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
 */class Rx{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ux;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Px(e))try{this.getOrInitializeService({instanceIdentifier:Wi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Wi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Wi){return this.instances.has(e)}getOptions(e=Wi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ax(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Wi){return this.component?this.component.multipleInstances?e:Wi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ax(t){return t===Wi?void 0:t}function Px(t){return t.instantiationMode==="EAGER"}/**
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
 */class Cx{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Rx(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var we;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(we||(we={}));const kx={debug:we.DEBUG,verbose:we.VERBOSE,info:we.INFO,warn:we.WARN,error:we.ERROR,silent:we.SILENT},xx=we.INFO,Nx={[we.DEBUG]:"log",[we.VERBOSE]:"log",[we.INFO]:"info",[we.WARN]:"warn",[we.ERROR]:"error"},bx=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Nx[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Fm{constructor(e){this.name=e,this._logLevel=xx,this._logHandler=bx,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in we))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?kx[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,we.DEBUG,...e),this._logHandler(this,we.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,we.VERBOSE,...e),this._logHandler(this,we.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,we.INFO,...e),this._logHandler(this,we.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,we.WARN,...e),this._logHandler(this,we.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,we.ERROR,...e),this._logHandler(this,we.ERROR,...e)}}const Dx=(t,e)=>e.some(n=>t instanceof n);let i_,s_;function Ox(){return i_||(i_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Lx(){return s_||(s_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const B1=new WeakMap,ap=new WeakMap,H1=new WeakMap,Fd=new WeakMap,jm=new WeakMap;function Mx(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(wi(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&B1.set(n,t)}).catch(()=>{}),jm.set(e,t),e}function Vx(t){if(ap.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ap.set(t,e)}let lp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ap.get(t);if(e==="objectStoreNames")return t.objectStoreNames||H1.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return wi(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ux(t){lp=t(lp)}function Fx(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(jd(this),e,...n);return H1.set(r,e.sort?e.sort():[e]),wi(r)}:Lx().includes(t)?function(...e){return t.apply(jd(this),e),wi(B1.get(this))}:function(...e){return wi(t.apply(jd(this),e))}}function jx(t){return typeof t=="function"?Fx(t):(t instanceof IDBTransaction&&Vx(t),Dx(t,Ox())?new Proxy(t,lp):t)}function wi(t){if(t instanceof IDBRequest)return Mx(t);if(Fd.has(t))return Fd.get(t);const e=jx(t);return e!==t&&(Fd.set(t,e),jm.set(e,t)),e}const jd=t=>jm.get(t);function zx(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=wi(o);return r&&o.addEventListener("upgradeneeded",u=>{r(wi(o.result),u.oldVersion,u.newVersion,wi(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const $x=["get","getKey","getAll","getAllKeys","count"],Bx=["put","add","delete","clear"],zd=new Map;function o_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(zd.get(e))return zd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Bx.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||$x.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return zd.set(e,s),s}Ux(t=>({...t,get:(e,n,r)=>o_(e,n)||t.get(e,n,r),has:(e,n)=>!!o_(e,n)||t.has(e,n)}));/**
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
 */class Hx{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Wx(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Wx(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const up="@firebase/app",a_="0.10.8";/**
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
 */const ds=new Fm("@firebase/app"),qx="@firebase/app-compat",Kx="@firebase/analytics-compat",Gx="@firebase/analytics",Qx="@firebase/app-check-compat",Yx="@firebase/app-check",Xx="@firebase/auth",Jx="@firebase/auth-compat",Zx="@firebase/database",eN="@firebase/database-compat",tN="@firebase/functions",nN="@firebase/functions-compat",rN="@firebase/installations",iN="@firebase/installations-compat",sN="@firebase/messaging",oN="@firebase/messaging-compat",aN="@firebase/performance",lN="@firebase/performance-compat",uN="@firebase/remote-config",cN="@firebase/remote-config-compat",hN="@firebase/storage",dN="@firebase/storage-compat",fN="@firebase/firestore",pN="@firebase/vertexai-preview",mN="@firebase/firestore-compat",gN="firebase",yN="10.12.5";/**
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
 */const cp="[DEFAULT]",vN={[up]:"fire-core",[qx]:"fire-core-compat",[Gx]:"fire-analytics",[Kx]:"fire-analytics-compat",[Yx]:"fire-app-check",[Qx]:"fire-app-check-compat",[Xx]:"fire-auth",[Jx]:"fire-auth-compat",[Zx]:"fire-rtdb",[eN]:"fire-rtdb-compat",[tN]:"fire-fn",[nN]:"fire-fn-compat",[rN]:"fire-iid",[iN]:"fire-iid-compat",[sN]:"fire-fcm",[oN]:"fire-fcm-compat",[aN]:"fire-perf",[lN]:"fire-perf-compat",[uN]:"fire-rc",[cN]:"fire-rc-compat",[hN]:"fire-gcs",[dN]:"fire-gcs-compat",[fN]:"fire-fst",[mN]:"fire-fst-compat",[pN]:"fire-vertex","fire-js":"fire-js",[gN]:"fire-js-all"};/**
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
 */const Wc=new Map,_N=new Map,hp=new Map;function l_(t,e){try{t.container.addComponent(e)}catch(n){ds.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function fs(t){const e=t.name;if(hp.has(e))return ds.debug(`There were multiple attempts to register component ${e}.`),!1;hp.set(e,t);for(const n of Wc.values())l_(n,t);for(const n of _N.values())l_(n,t);return!0}function Nh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function ir(t){return t.settings!==void 0}/**
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
 */const wN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ei=new jl("app","Firebase",wN);/**
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
 */class EN{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ai("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ei.create("app-deleted",{appName:this._name})}}/**
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
 */const Is=yN;function W1(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:cp,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Ei.create("bad-app-name",{appName:String(i)});if(n||(n=j1()),!n)throw Ei.create("no-options");const s=Wc.get(i);if(s){if(Hc(n,s.options)&&Hc(r,s.config))return s;throw Ei.create("duplicate-app",{appName:i})}const o=new Cx(i);for(const u of hp.values())o.addComponent(u);const l=new EN(n,r,o);return Wc.set(i,l),l}function zm(t=cp){const e=Wc.get(t);if(!e&&t===cp&&j1())return W1();if(!e)throw Ei.create("no-app",{appName:t});return e}function lr(t,e,n){var r;let i=(r=vN[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ds.warn(l.join(" "));return}fs(new Ai(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const TN="firebase-heartbeat-database",IN=1,Il="firebase-heartbeat-store";let $d=null;function q1(){return $d||($d=zx(TN,IN,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Il)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ei.create("idb-open",{originalErrorMessage:t.message})})),$d}async function SN(t){try{const n=(await q1()).transaction(Il),r=await n.objectStore(Il).get(K1(t));return await n.done,r}catch(e){if(e instanceof kn)ds.warn(e.message);else{const n=Ei.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ds.warn(n.message)}}}async function u_(t,e){try{const r=(await q1()).transaction(Il,"readwrite");await r.objectStore(Il).put(e,K1(t)),await r.done}catch(n){if(n instanceof kn)ds.warn(n.message);else{const r=Ei.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ds.warn(r.message)}}}function K1(t){return`${t.name}!${t.options.appId}`}/**
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
 */const RN=1024,AN=30*24*60*60*1e3;class PN{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new kN(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=c_();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=AN}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=c_(),{heartbeatsToSend:r,unsentEntries:i}=CN(this._heartbeatsCache.heartbeats),s=Bc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function c_(){return new Date().toISOString().substring(0,10)}function CN(t,e=RN){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),h_(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),h_(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class kN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return gx()?yx().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await SN(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return u_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return u_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function h_(t){return Bc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function xN(t){fs(new Ai("platform-logger",e=>new Hx(e),"PRIVATE")),fs(new Ai("heartbeat",e=>new PN(e),"PRIVATE")),lr(up,a_,t),lr(up,a_,"esm2017"),lr("fire-js","")}xN("");var NN="firebase",bN="10.12.5";/**
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
 */lr(NN,bN,"app");function G1(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const DN=G1,Q1=new jl("auth","Firebase",G1());/**
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
 */const qc=new Fm("@firebase/auth");function ON(t,...e){qc.logLevel<=we.WARN&&qc.warn(`Auth (${Is}): ${t}`,...e)}function rc(t,...e){qc.logLevel<=we.ERROR&&qc.error(`Auth (${Is}): ${t}`,...e)}/**
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
 */function qn(t,...e){throw $m(t,...e)}function ur(t,...e){return $m(t,...e)}function Y1(t,e,n){const r=Object.assign(Object.assign({},DN()),{[e]:n});return new jl("auth","Firebase",r).create(e,{appName:t.name})}function br(t){return Y1(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function $m(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Q1.create(t,...e)}function se(t,e,...n){if(!t)throw $m(e,...n)}function Pr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw rc(e),new Error(e)}function Vr(t,e){t||Pr(e)}/**
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
 */function dp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function LN(){return d_()==="http:"||d_()==="https:"}function d_(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function MN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(LN()||dx()||"connection"in navigator)?navigator.onLine:!0}function VN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class $l{constructor(e,n){this.shortDelay=e,this.longDelay=n,Vr(n>e,"Short delay should be less than long delay!"),this.isMobile=cx()||fx()}get(){return MN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Bm(t,e){Vr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class X1{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Pr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Pr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Pr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const UN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const FN=new $l(3e4,6e4);function Li(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function $r(t,e,n,r,i={}){return J1(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=zl(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),X1.fetch()(Z1(t,t.config.apiHost,n,l),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function J1(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},UN),e);try{const i=new zN(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw bu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw bu(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw bu(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw bu(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Y1(t,d,c);qn(t,d)}}catch(i){if(i instanceof kn)throw i;qn(t,"network-request-failed",{message:String(i)})}}async function Bl(t,e,n,r,i={}){const s=await $r(t,e,n,r,i);return"mfaPendingCredential"in s&&qn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Z1(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Bm(t.config,i):`${t.config.apiScheme}://${i}`}function jN(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class zN{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ur(this.auth,"network-request-failed")),FN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function bu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ur(t,e,r);return i.customData._tokenResponse=n,i}function f_(t){return t!==void 0&&t.enterprise!==void 0}class $N{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return jN(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function BN(t,e){return $r(t,"GET","/v2/recaptchaConfig",Li(t,e))}/**
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
 */async function HN(t,e){return $r(t,"POST","/v1/accounts:delete",e)}async function eT(t,e){return $r(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ka(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function WN(t,e=!1){const n=nt(t),r=await n.getIdToken(e),i=Hm(r);se(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ka(Bd(i.auth_time)),issuedAtTime:Ka(Bd(i.iat)),expirationTime:Ka(Bd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Bd(t){return Number(t)*1e3}function Hm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return rc("JWT malformed, contained fewer than 3 sections"),null;try{const i=V1(n);return i?JSON.parse(i):(rc("Failed to decode base64 JWT payload"),null)}catch(i){return rc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function p_(t){const e=Hm(t);return se(e,"internal-error"),se(typeof e.exp<"u","internal-error"),se(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Co(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof kn&&qN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function qN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class KN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class fp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ka(this.lastLoginAt),this.creationTime=Ka(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Kc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Co(t,eT(n,{idToken:r}));se(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?tT(s.providerUserInfo):[],l=QN(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),d=u?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new fp(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,f)}async function GN(t){const e=nt(t);await Kc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function QN(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function tT(t){return t.map(e=>{var{providerId:n}=e,r=Nm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function YN(t,e){const n=await J1(t,{},async()=>{const r=zl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Z1(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",X1.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function XN(t,e){return $r(t,"POST","/v2/accounts:revokeToken",Li(t,e))}/**
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
 */class co{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){se(e.idToken,"internal-error"),se(typeof e.idToken<"u","internal-error"),se(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):p_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){se(e.length!==0,"internal-error");const n=p_(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(se(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await YN(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new co;return r&&(se(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(se(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(se(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new co,this.toJSON())}_performRefresh(){return Pr("not implemented")}}/**
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
 */function Yr(t,e){se(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Cr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Nm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new KN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new fp(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Co(this,this.stsTokenManager.getToken(this.auth,e));return se(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return WN(this,e)}reload(){return GN(this)}_assign(e){this!==e&&(se(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Cr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){se(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Kc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ir(this.auth.app))return Promise.reject(br(this.auth));const e=await this.getIdToken();return await Co(this,HN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,c,d;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,E=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(l=n.tenantId)!==null&&l!==void 0?l:void 0,b=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,I=(c=n.createdAt)!==null&&c!==void 0?c:void 0,v=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:R,emailVerified:O,isAnonymous:F,providerData:k,stsTokenManager:w}=n;se(R&&w,e,"internal-error");const g=co.fromJSON(this.name,w);se(typeof R=="string",e,"internal-error"),Yr(f,e.name),Yr(m,e.name),se(typeof O=="boolean",e,"internal-error"),se(typeof F=="boolean",e,"internal-error"),Yr(E,e.name),Yr(S,e.name),Yr(C,e.name),Yr(b,e.name),Yr(I,e.name),Yr(v,e.name);const T=new Cr({uid:R,auth:e,email:m,emailVerified:O,displayName:f,isAnonymous:F,photoURL:S,phoneNumber:E,tenantId:C,stsTokenManager:g,createdAt:I,lastLoginAt:v});return k&&Array.isArray(k)&&(T.providerData=k.map(_=>Object.assign({},_))),b&&(T._redirectEventId=b),T}static async _fromIdTokenResponse(e,n,r=!1){const i=new co;i.updateFromServerResponse(n);const s=new Cr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Kc(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];se(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?tT(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new co;l.updateFromIdToken(r);const u=new Cr({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new fp(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
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
 */const m_=new Map;function kr(t){Vr(t instanceof Function,"Expected a class definition");let e=m_.get(t);return e?(Vr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,m_.set(t,e),e)}/**
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
 */class nT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}nT.type="NONE";const g_=nT;/**
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
 */function ic(t,e,n){return`firebase:${t}:${e}:${n}`}class ho{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ic(this.userKey,i.apiKey,s),this.fullPersistenceKey=ic("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Cr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ho(kr(g_),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||kr(g_);const o=ic(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const d=await c._get(o);if(d){const f=Cr._fromJSON(e,d);c!==s&&(l=f),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new ho(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new ho(s,e,r))}}/**
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
 */function y_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(sT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(rT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(aT(e))return"Blackberry";if(lT(e))return"Webos";if(Wm(e))return"Safari";if((e.includes("chrome/")||iT(e))&&!e.includes("edge/"))return"Chrome";if(oT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function rT(t=Nt()){return/firefox\//i.test(t)}function Wm(t=Nt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function iT(t=Nt()){return/crios\//i.test(t)}function sT(t=Nt()){return/iemobile/i.test(t)}function oT(t=Nt()){return/android/i.test(t)}function aT(t=Nt()){return/blackberry/i.test(t)}function lT(t=Nt()){return/webos/i.test(t)}function bh(t=Nt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function JN(t=Nt()){var e;return bh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ZN(){return px()&&document.documentMode===10}function uT(t=Nt()){return bh(t)||oT(t)||lT(t)||aT(t)||/windows phone/i.test(t)||sT(t)}function eb(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function cT(t,e=[]){let n;switch(t){case"Browser":n=y_(Nt());break;case"Worker":n=`${y_(Nt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Is}/${r}`}/**
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
 */class tb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function nb(t,e={}){return $r(t,"GET","/v2/passwordPolicy",Li(t,e))}/**
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
 */const rb=6;class ib{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:rb,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class sb{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new v_(this),this.idTokenSubscription=new v_(this),this.beforeStateQueue=new tb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Q1,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=kr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ho.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await eT(this,{idToken:e}),r=await Cr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(ir(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return se(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Kc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=VN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ir(this.app))return Promise.reject(br(this));const n=e?nt(e):null;return n&&se(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&se(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ir(this.app)?Promise.reject(br(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ir(this.app)?Promise.reject(br(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(kr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await nb(this),n=new ib(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new jl("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await XN(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&kr(e)||this._popupRedirectResolver;se(n,this,"argument-error"),this.redirectPersistenceManager=await ho.create(this,[kr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(se(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return se(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=cT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&ON(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ss(t){return nt(t)}class v_{constructor(e){this.auth=e,this.observer=null,this.addObserver=Tx(n=>this.observer=n)}get next(){return se(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Dh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ob(t){Dh=t}function hT(t){return Dh.loadJS(t)}function ab(){return Dh.recaptchaEnterpriseScript}function lb(){return Dh.gapiScript}function ub(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const cb="recaptcha-enterprise",hb="NO_RECAPTCHA";class db{constructor(e){this.type=cb,this.auth=Ss(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{BN(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new $N(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;f_(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(hb)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&f_(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=ab();u.length!==0&&(u+=l),hT(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function __(t,e,n,r=!1){const i=new db(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function pp(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await __(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await __(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function fb(t,e){const n=Nh(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Hc(s,e??{}))return i;qn(i,"already-initialized")}return n.initialize({options:e})}function pb(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(kr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function mb(t,e,n){const r=Ss(t);se(r._canInitEmulator,r,"emulator-config-failed"),se(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=dT(e),{host:o,port:l}=gb(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),yb()}function dT(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function gb(t){const e=dT(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:w_(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:w_(o)}}}function w_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function yb(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class qm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Pr("not implemented")}_getIdTokenResponse(e){return Pr("not implemented")}_linkToIdToken(e,n){return Pr("not implemented")}_getReauthenticationResolver(e){return Pr("not implemented")}}async function vb(t,e){return $r(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function _b(t,e){return Bl(t,"POST","/v1/accounts:signInWithPassword",Li(t,e))}/**
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
 */async function wb(t,e){return Bl(t,"POST","/v1/accounts:signInWithEmailLink",Li(t,e))}async function Eb(t,e){return Bl(t,"POST","/v1/accounts:signInWithEmailLink",Li(t,e))}/**
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
 */class Sl extends qm{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Sl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Sl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return pp(e,n,"signInWithPassword",_b);case"emailLink":return wb(e,{email:this._email,oobCode:this._password});default:qn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return pp(e,r,"signUpPassword",vb);case"emailLink":return Eb(e,{idToken:n,email:this._email,oobCode:this._password});default:qn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function fo(t,e){return Bl(t,"POST","/v1/accounts:signInWithIdp",Li(t,e))}/**
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
 */const Tb="http://localhost";class ps extends qm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ps(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):qn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Nm(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ps(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return fo(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,fo(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,fo(e,n)}buildRequest(){const e={requestUri:Tb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=zl(n)}return e}}/**
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
 */function Ib(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Sb(t){const e=Na(ba(t)).link,n=e?Na(ba(e)).deep_link_id:null,r=Na(ba(t)).deep_link_id;return(r?Na(ba(r)).link:null)||r||n||e||t}class Km{constructor(e){var n,r,i,s,o,l;const u=Na(ba(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,d=(r=u.oobCode)!==null&&r!==void 0?r:null,f=Ib((i=u.mode)!==null&&i!==void 0?i:null);se(c&&d&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=d,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=Sb(e);try{return new Km(n)}catch{return null}}}/**
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
 */class Bo{constructor(){this.providerId=Bo.PROVIDER_ID}static credential(e,n){return Sl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Km.parseLink(n);return se(r,"argument-error"),Sl._fromEmailAndCode(e,r.code,r.tenantId)}}Bo.PROVIDER_ID="password";Bo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Bo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class fT{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Hl extends fT{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ri extends Hl{constructor(){super("facebook.com")}static credential(e){return ps._fromParams({providerId:ri.PROVIDER_ID,signInMethod:ri.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ri.credentialFromTaggedObject(e)}static credentialFromError(e){return ri.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ri.credential(e.oauthAccessToken)}catch{return null}}}ri.FACEBOOK_SIGN_IN_METHOD="facebook.com";ri.PROVIDER_ID="facebook.com";/**
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
 */class ii extends Hl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ps._fromParams({providerId:ii.PROVIDER_ID,signInMethod:ii.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ii.credentialFromTaggedObject(e)}static credentialFromError(e){return ii.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ii.credential(n,r)}catch{return null}}}ii.GOOGLE_SIGN_IN_METHOD="google.com";ii.PROVIDER_ID="google.com";/**
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
 */class si extends Hl{constructor(){super("github.com")}static credential(e){return ps._fromParams({providerId:si.PROVIDER_ID,signInMethod:si.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return si.credentialFromTaggedObject(e)}static credentialFromError(e){return si.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return si.credential(e.oauthAccessToken)}catch{return null}}}si.GITHUB_SIGN_IN_METHOD="github.com";si.PROVIDER_ID="github.com";/**
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
 */class oi extends Hl{constructor(){super("twitter.com")}static credential(e,n){return ps._fromParams({providerId:oi.PROVIDER_ID,signInMethod:oi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return oi.credentialFromTaggedObject(e)}static credentialFromError(e){return oi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return oi.credential(n,r)}catch{return null}}}oi.TWITTER_SIGN_IN_METHOD="twitter.com";oi.PROVIDER_ID="twitter.com";/**
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
 */async function Rb(t,e){return Bl(t,"POST","/v1/accounts:signUp",Li(t,e))}/**
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
 */class ms{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Cr._fromIdTokenResponse(e,r,i),o=E_(r);return new ms({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=E_(r);return new ms({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function E_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Gc extends kn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Gc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Gc(e,n,r,i)}}function pT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Gc._fromErrorAndOperation(t,s,e,r):s})}async function Ab(t,e,n=!1){const r=await Co(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ms._forOperation(t,"link",r)}/**
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
 */async function Pb(t,e,n=!1){const{auth:r}=t;if(ir(r.app))return Promise.reject(br(r));const i="reauthenticate";try{const s=await Co(t,pT(r,i,e,t),n);se(s.idToken,r,"internal-error");const o=Hm(s.idToken);se(o,r,"internal-error");const{sub:l}=o;return se(t.uid===l,r,"user-mismatch"),ms._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&qn(r,"user-mismatch"),s}}/**
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
 */async function mT(t,e,n=!1){if(ir(t.app))return Promise.reject(br(t));const r="signIn",i=await pT(t,r,e),s=await ms._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Cb(t,e){return mT(Ss(t),e)}/**
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
 */async function gT(t){const e=Ss(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function kb(t,e,n){if(ir(t.app))return Promise.reject(br(t));const r=Ss(t),o=await pp(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Rb).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&gT(t),u}),l=await ms._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function xb(t,e,n){return ir(t.app)?Promise.reject(br(t)):Cb(nt(t),Bo.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&gT(t),r})}/**
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
 */async function Nb(t,e){return $r(t,"POST","/v1/accounts:update",e)}/**
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
 */async function yT(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=nt(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Co(r,Nb(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function bb(t,e,n,r){return nt(t).onIdTokenChanged(e,n,r)}function Db(t,e,n){return nt(t).beforeAuthStateChanged(e,n)}const Qc="__sak";/**
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
 */class vT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Qc,"1"),this.storage.removeItem(Qc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Ob(){const t=Nt();return Wm(t)||bh(t)}const Lb=1e3,Mb=10;class _T extends vT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Ob()&&eb(),this.fallbackToPolling=uT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);ZN()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Mb):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Lb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}_T.type="LOCAL";const Vb=_T;/**
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
 */class wT extends vT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}wT.type="SESSION";const ET=wT;/**
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
 */function Ub(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Oh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Oh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await Ub(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Oh.receivers=[];/**
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
 */function Gm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Fb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=Gm("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function cr(){return window}function jb(t){cr().location.href=t}/**
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
 */function TT(){return typeof cr().WorkerGlobalScope<"u"&&typeof cr().importScripts=="function"}async function zb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function $b(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Bb(){return TT()?self:null}/**
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
 */const IT="firebaseLocalStorageDb",Hb=1,Yc="firebaseLocalStorage",ST="fbase_key";class Wl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Lh(t,e){return t.transaction([Yc],e?"readwrite":"readonly").objectStore(Yc)}function Wb(){const t=indexedDB.deleteDatabase(IT);return new Wl(t).toPromise()}function mp(){const t=indexedDB.open(IT,Hb);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Yc,{keyPath:ST})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Yc)?e(r):(r.close(),await Wb(),e(await mp()))})})}async function T_(t,e,n){const r=Lh(t,!0).put({[ST]:e,value:n});return new Wl(r).toPromise()}async function qb(t,e){const n=Lh(t,!1).get(e),r=await new Wl(n).toPromise();return r===void 0?null:r.value}function I_(t,e){const n=Lh(t,!0).delete(e);return new Wl(n).toPromise()}const Kb=800,Gb=3;class RT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await mp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Gb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return TT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Oh._getInstance(Bb()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await zb(),!this.activeServiceWorker)return;this.sender=new Fb(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||$b()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await mp();return await T_(e,Qc,"1"),await I_(e,Qc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>T_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>qb(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>I_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Lh(i,!1).getAll();return new Wl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Kb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}RT.type="LOCAL";const Qb=RT;new $l(3e4,6e4);/**
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
 */function Yb(t,e){return e?kr(e):(se(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Qm extends qm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return fo(e,this._buildIdpRequest())}_linkToIdToken(e,n){return fo(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return fo(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Xb(t){return mT(t.auth,new Qm(t),t.bypassAuthState)}function Jb(t){const{auth:e,user:n}=t;return se(n,e,"internal-error"),Pb(n,new Qm(t),t.bypassAuthState)}async function Zb(t){const{auth:e,user:n}=t;return se(n,e,"internal-error"),Ab(n,new Qm(t),t.bypassAuthState)}/**
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
 */class AT{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Xb;case"linkViaPopup":case"linkViaRedirect":return Zb;case"reauthViaPopup":case"reauthViaRedirect":return Jb;default:qn(this.auth,"internal-error")}}resolve(e){Vr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Vr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const eD=new $l(2e3,1e4);class ro extends AT{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ro.currentPopupAction&&ro.currentPopupAction.cancel(),ro.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return se(e,this.auth,"internal-error"),e}async onExecution(){Vr(this.filter.length===1,"Popup operations only handle one event");const e=Gm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ur(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ur(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ro.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ur(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,eD.get())};e()}}ro.currentPopupAction=null;/**
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
 */const tD="pendingRedirect",sc=new Map;class nD extends AT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=sc.get(this.auth._key());if(!e){try{const r=await rD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}sc.set(this.auth._key(),e)}return this.bypassAuthState||sc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function rD(t,e){const n=oD(e),r=sD(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function iD(t,e){sc.set(t._key(),e)}function sD(t){return kr(t._redirectPersistence)}function oD(t){return ic(tD,t.config.apiKey,t.name)}async function aD(t,e,n=!1){if(ir(t.app))return Promise.reject(br(t));const r=Ss(t),i=Yb(r,e),o=await new nD(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const lD=10*60*1e3;class uD{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!cD(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!PT(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ur(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=lD&&this.cachedEventUids.clear(),this.cachedEventUids.has(S_(e))}saveEventToCache(e){this.cachedEventUids.add(S_(e)),this.lastProcessedEventTime=Date.now()}}function S_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function PT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function cD(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return PT(t);default:return!1}}/**
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
 */async function hD(t,e={}){return $r(t,"GET","/v1/projects",e)}/**
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
 */const dD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,fD=/^https?/;async function pD(t){if(t.config.emulator)return;const{authorizedDomains:e}=await hD(t);for(const n of e)try{if(mD(n))return}catch{}qn(t,"unauthorized-domain")}function mD(t){const e=dp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!fD.test(n))return!1;if(dD.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const gD=new $l(3e4,6e4);function R_(){const t=cr().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function yD(t){return new Promise((e,n)=>{var r,i,s;function o(){R_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{R_(),n(ur(t,"network-request-failed"))},timeout:gD.get()})}if(!((i=(r=cr().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=cr().gapi)===null||s===void 0)&&s.load)o();else{const l=ub("iframefcb");return cr()[l]=()=>{gapi.load?o():n(ur(t,"network-request-failed"))},hT(`${lb()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw oc=null,e})}let oc=null;function vD(t){return oc=oc||yD(t),oc}/**
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
 */const _D=new $l(5e3,15e3),wD="__/auth/iframe",ED="emulator/auth/iframe",TD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ID=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function SD(t){const e=t.config;se(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Bm(e,ED):`https://${t.config.authDomain}/${wD}`,r={apiKey:e.apiKey,appName:t.name,v:Is},i=ID.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${zl(r).slice(1)}`}async function RD(t){const e=await vD(t),n=cr().gapi;return se(n,t,"internal-error"),e.open({where:document.body,url:SD(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:TD,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=ur(t,"network-request-failed"),l=cr().setTimeout(()=>{s(o)},_D.get());function u(){cr().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const AD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},PD=500,CD=600,kD="_blank",xD="http://localhost";class A_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ND(t,e,n,r=PD,i=CD){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},AD),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Nt().toLowerCase();n&&(l=iT(c)?kD:n),rT(c)&&(e=e||xD,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[E,S])=>`${m}${E}=${S},`,"");if(JN(c)&&l!=="_self")return bD(e||"",l),new A_(null);const f=window.open(e||"",l,d);se(f,t,"popup-blocked");try{f.focus()}catch{}return new A_(f)}function bD(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const DD="__/auth/handler",OD="emulator/auth/handler",LD=encodeURIComponent("fac");async function P_(t,e,n,r,i,s){se(t.config.authDomain,t,"auth-domain-config-required"),se(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Is,eventId:i};if(e instanceof fT){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ex(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries({}))o[d]=f}if(e instanceof Hl){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const u=await t._getAppCheckToken(),c=u?`#${LD}=${encodeURIComponent(u)}`:"";return`${MD(t)}?${zl(l).slice(1)}${c}`}function MD({config:t}){return t.emulator?Bm(t,OD):`https://${t.authDomain}/${DD}`}/**
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
 */const Hd="webStorageSupport";class VD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ET,this._completeRedirectFn=aD,this._overrideRedirectResult=iD}async _openPopup(e,n,r,i){var s;Vr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await P_(e,n,r,dp(),i);return ND(e,o,Gm())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await P_(e,n,r,dp(),i);return jb(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Vr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await RD(e),r=new uD(e);return n.register("authEvent",i=>(se(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Hd,{type:Hd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Hd];o!==void 0&&n(!!o),qn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=pD(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return uT()||Wm()||bh()}}const UD=VD;var C_="@firebase/auth",k_="1.7.6";/**
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
 */class FD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){se(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function jD(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function zD(t){fs(new Ai("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;se(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:cT(t)},c=new sb(r,i,s,u);return pb(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),fs(new Ai("auth-internal",e=>{const n=Ss(e.getProvider("auth").getImmediate());return(r=>new FD(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),lr(C_,k_,jD(t)),lr(C_,k_,"esm2017")}/**
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
 */const $D=5*60,BD=z1("authIdTokenMaxAge")||$D;let x_=null;const HD=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>BD)return;const i=n==null?void 0:n.token;x_!==i&&(x_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function WD(t=zm()){const e=Nh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=fb(t,{popupRedirectResolver:UD,persistence:[Qb,Vb,ET]}),r=z1("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=HD(s.toString());Db(n,o,()=>o(n.currentUser)),bb(n,l=>o(l))}}const i=U1("auth");return i&&mb(n,`http://${i}`),n}function qD(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}ob({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=ur("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",qD().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});zD("Browser");var N_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var is,CT;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,g){function T(){}T.prototype=g.prototype,w.D=g.prototype,w.prototype=new T,w.prototype.constructor=w,w.C=function(_,P,N){for(var A=Array(arguments.length-2),de=2;de<arguments.length;de++)A[de-2]=arguments[de];return g.prototype[P].apply(_,A)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,g,T){T||(T=0);var _=Array(16);if(typeof g=="string")for(var P=0;16>P;++P)_[P]=g.charCodeAt(T++)|g.charCodeAt(T++)<<8|g.charCodeAt(T++)<<16|g.charCodeAt(T++)<<24;else for(P=0;16>P;++P)_[P]=g[T++]|g[T++]<<8|g[T++]<<16|g[T++]<<24;g=w.g[0],T=w.g[1],P=w.g[2];var N=w.g[3],A=g+(N^T&(P^N))+_[0]+3614090360&4294967295;g=T+(A<<7&4294967295|A>>>25),A=N+(P^g&(T^P))+_[1]+3905402710&4294967295,N=g+(A<<12&4294967295|A>>>20),A=P+(T^N&(g^T))+_[2]+606105819&4294967295,P=N+(A<<17&4294967295|A>>>15),A=T+(g^P&(N^g))+_[3]+3250441966&4294967295,T=P+(A<<22&4294967295|A>>>10),A=g+(N^T&(P^N))+_[4]+4118548399&4294967295,g=T+(A<<7&4294967295|A>>>25),A=N+(P^g&(T^P))+_[5]+1200080426&4294967295,N=g+(A<<12&4294967295|A>>>20),A=P+(T^N&(g^T))+_[6]+2821735955&4294967295,P=N+(A<<17&4294967295|A>>>15),A=T+(g^P&(N^g))+_[7]+4249261313&4294967295,T=P+(A<<22&4294967295|A>>>10),A=g+(N^T&(P^N))+_[8]+1770035416&4294967295,g=T+(A<<7&4294967295|A>>>25),A=N+(P^g&(T^P))+_[9]+2336552879&4294967295,N=g+(A<<12&4294967295|A>>>20),A=P+(T^N&(g^T))+_[10]+4294925233&4294967295,P=N+(A<<17&4294967295|A>>>15),A=T+(g^P&(N^g))+_[11]+2304563134&4294967295,T=P+(A<<22&4294967295|A>>>10),A=g+(N^T&(P^N))+_[12]+1804603682&4294967295,g=T+(A<<7&4294967295|A>>>25),A=N+(P^g&(T^P))+_[13]+4254626195&4294967295,N=g+(A<<12&4294967295|A>>>20),A=P+(T^N&(g^T))+_[14]+2792965006&4294967295,P=N+(A<<17&4294967295|A>>>15),A=T+(g^P&(N^g))+_[15]+1236535329&4294967295,T=P+(A<<22&4294967295|A>>>10),A=g+(P^N&(T^P))+_[1]+4129170786&4294967295,g=T+(A<<5&4294967295|A>>>27),A=N+(T^P&(g^T))+_[6]+3225465664&4294967295,N=g+(A<<9&4294967295|A>>>23),A=P+(g^T&(N^g))+_[11]+643717713&4294967295,P=N+(A<<14&4294967295|A>>>18),A=T+(N^g&(P^N))+_[0]+3921069994&4294967295,T=P+(A<<20&4294967295|A>>>12),A=g+(P^N&(T^P))+_[5]+3593408605&4294967295,g=T+(A<<5&4294967295|A>>>27),A=N+(T^P&(g^T))+_[10]+38016083&4294967295,N=g+(A<<9&4294967295|A>>>23),A=P+(g^T&(N^g))+_[15]+3634488961&4294967295,P=N+(A<<14&4294967295|A>>>18),A=T+(N^g&(P^N))+_[4]+3889429448&4294967295,T=P+(A<<20&4294967295|A>>>12),A=g+(P^N&(T^P))+_[9]+568446438&4294967295,g=T+(A<<5&4294967295|A>>>27),A=N+(T^P&(g^T))+_[14]+3275163606&4294967295,N=g+(A<<9&4294967295|A>>>23),A=P+(g^T&(N^g))+_[3]+4107603335&4294967295,P=N+(A<<14&4294967295|A>>>18),A=T+(N^g&(P^N))+_[8]+1163531501&4294967295,T=P+(A<<20&4294967295|A>>>12),A=g+(P^N&(T^P))+_[13]+2850285829&4294967295,g=T+(A<<5&4294967295|A>>>27),A=N+(T^P&(g^T))+_[2]+4243563512&4294967295,N=g+(A<<9&4294967295|A>>>23),A=P+(g^T&(N^g))+_[7]+1735328473&4294967295,P=N+(A<<14&4294967295|A>>>18),A=T+(N^g&(P^N))+_[12]+2368359562&4294967295,T=P+(A<<20&4294967295|A>>>12),A=g+(T^P^N)+_[5]+4294588738&4294967295,g=T+(A<<4&4294967295|A>>>28),A=N+(g^T^P)+_[8]+2272392833&4294967295,N=g+(A<<11&4294967295|A>>>21),A=P+(N^g^T)+_[11]+1839030562&4294967295,P=N+(A<<16&4294967295|A>>>16),A=T+(P^N^g)+_[14]+4259657740&4294967295,T=P+(A<<23&4294967295|A>>>9),A=g+(T^P^N)+_[1]+2763975236&4294967295,g=T+(A<<4&4294967295|A>>>28),A=N+(g^T^P)+_[4]+1272893353&4294967295,N=g+(A<<11&4294967295|A>>>21),A=P+(N^g^T)+_[7]+4139469664&4294967295,P=N+(A<<16&4294967295|A>>>16),A=T+(P^N^g)+_[10]+3200236656&4294967295,T=P+(A<<23&4294967295|A>>>9),A=g+(T^P^N)+_[13]+681279174&4294967295,g=T+(A<<4&4294967295|A>>>28),A=N+(g^T^P)+_[0]+3936430074&4294967295,N=g+(A<<11&4294967295|A>>>21),A=P+(N^g^T)+_[3]+3572445317&4294967295,P=N+(A<<16&4294967295|A>>>16),A=T+(P^N^g)+_[6]+76029189&4294967295,T=P+(A<<23&4294967295|A>>>9),A=g+(T^P^N)+_[9]+3654602809&4294967295,g=T+(A<<4&4294967295|A>>>28),A=N+(g^T^P)+_[12]+3873151461&4294967295,N=g+(A<<11&4294967295|A>>>21),A=P+(N^g^T)+_[15]+530742520&4294967295,P=N+(A<<16&4294967295|A>>>16),A=T+(P^N^g)+_[2]+3299628645&4294967295,T=P+(A<<23&4294967295|A>>>9),A=g+(P^(T|~N))+_[0]+4096336452&4294967295,g=T+(A<<6&4294967295|A>>>26),A=N+(T^(g|~P))+_[7]+1126891415&4294967295,N=g+(A<<10&4294967295|A>>>22),A=P+(g^(N|~T))+_[14]+2878612391&4294967295,P=N+(A<<15&4294967295|A>>>17),A=T+(N^(P|~g))+_[5]+4237533241&4294967295,T=P+(A<<21&4294967295|A>>>11),A=g+(P^(T|~N))+_[12]+1700485571&4294967295,g=T+(A<<6&4294967295|A>>>26),A=N+(T^(g|~P))+_[3]+2399980690&4294967295,N=g+(A<<10&4294967295|A>>>22),A=P+(g^(N|~T))+_[10]+4293915773&4294967295,P=N+(A<<15&4294967295|A>>>17),A=T+(N^(P|~g))+_[1]+2240044497&4294967295,T=P+(A<<21&4294967295|A>>>11),A=g+(P^(T|~N))+_[8]+1873313359&4294967295,g=T+(A<<6&4294967295|A>>>26),A=N+(T^(g|~P))+_[15]+4264355552&4294967295,N=g+(A<<10&4294967295|A>>>22),A=P+(g^(N|~T))+_[6]+2734768916&4294967295,P=N+(A<<15&4294967295|A>>>17),A=T+(N^(P|~g))+_[13]+1309151649&4294967295,T=P+(A<<21&4294967295|A>>>11),A=g+(P^(T|~N))+_[4]+4149444226&4294967295,g=T+(A<<6&4294967295|A>>>26),A=N+(T^(g|~P))+_[11]+3174756917&4294967295,N=g+(A<<10&4294967295|A>>>22),A=P+(g^(N|~T))+_[2]+718787259&4294967295,P=N+(A<<15&4294967295|A>>>17),A=T+(N^(P|~g))+_[9]+3951481745&4294967295,w.g[0]=w.g[0]+g&4294967295,w.g[1]=w.g[1]+(P+(A<<21&4294967295|A>>>11))&4294967295,w.g[2]=w.g[2]+P&4294967295,w.g[3]=w.g[3]+N&4294967295}r.prototype.u=function(w,g){g===void 0&&(g=w.length);for(var T=g-this.blockSize,_=this.B,P=this.h,N=0;N<g;){if(P==0)for(;N<=T;)i(this,w,N),N+=this.blockSize;if(typeof w=="string"){for(;N<g;)if(_[P++]=w.charCodeAt(N++),P==this.blockSize){i(this,_),P=0;break}}else for(;N<g;)if(_[P++]=w[N++],P==this.blockSize){i(this,_),P=0;break}}this.h=P,this.o+=g},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var g=1;g<w.length-8;++g)w[g]=0;var T=8*this.o;for(g=w.length-8;g<w.length;++g)w[g]=T&255,T/=256;for(this.u(w),w=Array(16),g=T=0;4>g;++g)for(var _=0;32>_;_+=8)w[T++]=this.g[g]>>>_&255;return w};function s(w,g){var T=l;return Object.prototype.hasOwnProperty.call(T,w)?T[w]:T[w]=g(w)}function o(w,g){this.h=g;for(var T=[],_=!0,P=w.length-1;0<=P;P--){var N=w[P]|0;_&&N==g||(T[P]=N,_=!1)}this.g=T}var l={};function u(w){return-128<=w&&128>w?s(w,function(g){return new o([g|0],0>g?-1:0)}):new o([w|0],0>w?-1:0)}function c(w){if(isNaN(w)||!isFinite(w))return f;if(0>w)return b(c(-w));for(var g=[],T=1,_=0;w>=T;_++)g[_]=w/T|0,T*=4294967296;return new o(g,0)}function d(w,g){if(w.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(w.charAt(0)=="-")return b(d(w.substring(1),g));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=c(Math.pow(g,8)),_=f,P=0;P<w.length;P+=8){var N=Math.min(8,w.length-P),A=parseInt(w.substring(P,P+N),g);8>N?(N=c(Math.pow(g,N)),_=_.j(N).add(c(A))):(_=_.j(T),_=_.add(c(A)))}return _}var f=u(0),m=u(1),E=u(16777216);t=o.prototype,t.m=function(){if(C(this))return-b(this).m();for(var w=0,g=1,T=0;T<this.g.length;T++){var _=this.i(T);w+=(0<=_?_:4294967296+_)*g,g*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(S(this))return"0";if(C(this))return"-"+b(this).toString(w);for(var g=c(Math.pow(w,6)),T=this,_="";;){var P=O(T,g).g;T=I(T,P.j(g));var N=((0<T.g.length?T.g[0]:T.h)>>>0).toString(w);if(T=P,S(T))return N+_;for(;6>N.length;)N="0"+N;_=N+_}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function S(w){if(w.h!=0)return!1;for(var g=0;g<w.g.length;g++)if(w.g[g]!=0)return!1;return!0}function C(w){return w.h==-1}t.l=function(w){return w=I(this,w),C(w)?-1:S(w)?0:1};function b(w){for(var g=w.g.length,T=[],_=0;_<g;_++)T[_]=~w.g[_];return new o(T,~w.h).add(m)}t.abs=function(){return C(this)?b(this):this},t.add=function(w){for(var g=Math.max(this.g.length,w.g.length),T=[],_=0,P=0;P<=g;P++){var N=_+(this.i(P)&65535)+(w.i(P)&65535),A=(N>>>16)+(this.i(P)>>>16)+(w.i(P)>>>16);_=A>>>16,N&=65535,A&=65535,T[P]=A<<16|N}return new o(T,T[T.length-1]&-2147483648?-1:0)};function I(w,g){return w.add(b(g))}t.j=function(w){if(S(this)||S(w))return f;if(C(this))return C(w)?b(this).j(b(w)):b(b(this).j(w));if(C(w))return b(this.j(b(w)));if(0>this.l(E)&&0>w.l(E))return c(this.m()*w.m());for(var g=this.g.length+w.g.length,T=[],_=0;_<2*g;_++)T[_]=0;for(_=0;_<this.g.length;_++)for(var P=0;P<w.g.length;P++){var N=this.i(_)>>>16,A=this.i(_)&65535,de=w.i(P)>>>16,vt=w.i(P)&65535;T[2*_+2*P]+=A*vt,v(T,2*_+2*P),T[2*_+2*P+1]+=N*vt,v(T,2*_+2*P+1),T[2*_+2*P+1]+=A*de,v(T,2*_+2*P+1),T[2*_+2*P+2]+=N*de,v(T,2*_+2*P+2)}for(_=0;_<g;_++)T[_]=T[2*_+1]<<16|T[2*_];for(_=g;_<2*g;_++)T[_]=0;return new o(T,0)};function v(w,g){for(;(w[g]&65535)!=w[g];)w[g+1]+=w[g]>>>16,w[g]&=65535,g++}function R(w,g){this.g=w,this.h=g}function O(w,g){if(S(g))throw Error("division by zero");if(S(w))return new R(f,f);if(C(w))return g=O(b(w),g),new R(b(g.g),b(g.h));if(C(g))return g=O(w,b(g)),new R(b(g.g),g.h);if(30<w.g.length){if(C(w)||C(g))throw Error("slowDivide_ only works with positive integers.");for(var T=m,_=g;0>=_.l(w);)T=F(T),_=F(_);var P=k(T,1),N=k(_,1);for(_=k(_,2),T=k(T,2);!S(_);){var A=N.add(_);0>=A.l(w)&&(P=P.add(T),N=A),_=k(_,1),T=k(T,1)}return g=I(w,P.j(g)),new R(P,g)}for(P=f;0<=w.l(g);){for(T=Math.max(1,Math.floor(w.m()/g.m())),_=Math.ceil(Math.log(T)/Math.LN2),_=48>=_?1:Math.pow(2,_-48),N=c(T),A=N.j(g);C(A)||0<A.l(w);)T-=_,N=c(T),A=N.j(g);S(N)&&(N=m),P=P.add(N),w=I(w,A)}return new R(P,w)}t.A=function(w){return O(this,w).h},t.and=function(w){for(var g=Math.max(this.g.length,w.g.length),T=[],_=0;_<g;_++)T[_]=this.i(_)&w.i(_);return new o(T,this.h&w.h)},t.or=function(w){for(var g=Math.max(this.g.length,w.g.length),T=[],_=0;_<g;_++)T[_]=this.i(_)|w.i(_);return new o(T,this.h|w.h)},t.xor=function(w){for(var g=Math.max(this.g.length,w.g.length),T=[],_=0;_<g;_++)T[_]=this.i(_)^w.i(_);return new o(T,this.h^w.h)};function F(w){for(var g=w.g.length+1,T=[],_=0;_<g;_++)T[_]=w.i(_)<<1|w.i(_-1)>>>31;return new o(T,w.h)}function k(w,g){var T=g>>5;g%=32;for(var _=w.g.length-T,P=[],N=0;N<_;N++)P[N]=0<g?w.i(N+T)>>>g|w.i(N+T+1)<<32-g:w.i(N+T);return new o(P,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,CT=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,is=o}).apply(typeof N_<"u"?N_:typeof self<"u"?self:typeof window<"u"?window:{});var Du=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var kT,xT,Da,NT,ac,gp,bT,DT,OT;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,p){return a==Array.prototype||a==Object.prototype||(a[h]=p.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Du=="object"&&Du];for(var h=0;h<a.length;++h){var p=a[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var p=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var L=a[y];if(!(L in p))break e;p=p[L]}a=a[a.length-1],y=p[a],h=h(y),h!=y&&h!=null&&e(p,a,{configurable:!0,writable:!0,value:h})}}function s(a,h){a instanceof String&&(a+="");var p=0,y=!1,L={next:function(){if(!y&&p<a.length){var V=p++;return{value:h(V,a[V]),done:!1}}return y=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}i("Array.prototype.values",function(a){return a||function(){return s(this,function(h,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,p){return a.call.apply(a.bind,arguments)}function f(a,h,p){if(!a)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,y),a.apply(h,L)}}return function(){return a.apply(h,arguments)}}function m(a,h,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:f,m.apply(null,arguments)}function E(a,h){var p=Array.prototype.slice.call(arguments,1);return function(){var y=p.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function S(a,h){function p(){}p.prototype=h.prototype,a.aa=h.prototype,a.prototype=new p,a.prototype.constructor=a,a.Qb=function(y,L,V){for(var q=Array(arguments.length-2),Le=2;Le<arguments.length;Le++)q[Le-2]=arguments[Le];return h.prototype[L].apply(y,q)}}function C(a){const h=a.length;if(0<h){const p=Array(h);for(let y=0;y<h;y++)p[y]=a[y];return p}return[]}function b(a,h){for(let p=1;p<arguments.length;p++){const y=arguments[p];if(u(y)){const L=a.length||0,V=y.length||0;a.length=L+V;for(let q=0;q<V;q++)a[L+q]=y[q]}else a.push(y)}}class I{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function v(a){return/^[\s\xa0]*$/.test(a)}function R(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function O(a){return O[" "](a),a}O[" "]=function(){};var F=R().indexOf("Gecko")!=-1&&!(R().toLowerCase().indexOf("webkit")!=-1&&R().indexOf("Edge")==-1)&&!(R().indexOf("Trident")!=-1||R().indexOf("MSIE")!=-1)&&R().indexOf("Edge")==-1;function k(a,h,p){for(const y in a)h.call(p,a[y],y,a)}function w(a,h){for(const p in a)h.call(void 0,a[p],p,a)}function g(a){const h={};for(const p in a)h[p]=a[p];return h}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _(a,h){let p,y;for(let L=1;L<arguments.length;L++){y=arguments[L];for(p in y)a[p]=y[p];for(let V=0;V<T.length;V++)p=T[V],Object.prototype.hasOwnProperty.call(y,p)&&(a[p]=y[p])}}function P(a){var h=1;a=a.split(":");const p=[];for(;0<h&&a.length;)p.push(a.shift()),h--;return a.length&&p.push(a.join(":")),p}function N(a){l.setTimeout(()=>{throw a},0)}function A(){var a=J;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class de{constructor(){this.h=this.g=null}add(h,p){const y=vt.get();y.set(h,p),this.h?this.h.next=y:this.g=y,this.h=y}}var vt=new I(()=>new _n,a=>a.reset());class _n{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let Ee,K=!1,J=new de,re=()=>{const a=l.Promise.resolve(void 0);Ee=()=>{a.then(me)}};var me=()=>{for(var a;a=A();){try{a.h.call(a.g)}catch(p){N(p)}var h=vt;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}K=!1};function ce(){this.s=this.s,this.C=this.C}ce.prototype.s=!1,ce.prototype.ma=function(){this.s||(this.s=!0,this.N())},ce.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ce(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Ce.prototype.h=function(){this.defaultPrevented=!0};var We=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};l.addEventListener("test",p,h),l.removeEventListener("test",p,h)}catch{}return a}();function Ze(a,h){if(Ce.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var p=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(F){e:{try{O(h.nodeName);var L=!0;break e}catch{}L=!1}L||(h=null)}}else p=="mouseover"?h=a.fromElement:p=="mouseout"&&(h=a.toElement);this.relatedTarget=h,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:qe[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Ze.aa.h.call(this)}}S(Ze,Ce);var qe={2:"touch",3:"pen",4:"mouse"};Ze.prototype.h=function(){Ze.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Dt="closure_listenable_"+(1e6*Math.random()|0),xn=0;function Nn(a,h,p,y,L){this.listener=a,this.proxy=null,this.src=h,this.type=p,this.capture=!!y,this.ha=L,this.key=++xn,this.da=this.fa=!1}function Gn(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function bn(a){this.src=a,this.g={},this.h=0}bn.prototype.add=function(a,h,p,y,L){var V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);var q=Qn(a,h,y,L);return-1<q?(h=a[q],p||(h.fa=!1)):(h=new Nn(h,this.src,V,!!y,L),h.fa=p,a.push(h)),h};function be(a,h){var p=h.type;if(p in a.g){var y=a.g[p],L=Array.prototype.indexOf.call(y,h,void 0),V;(V=0<=L)&&Array.prototype.splice.call(y,L,1),V&&(Gn(h),a.g[p].length==0&&(delete a.g[p],a.h--))}}function Qn(a,h,p,y){for(var L=0;L<a.length;++L){var V=a[L];if(!V.da&&V.listener==h&&V.capture==!!p&&V.ha==y)return L}return-1}var Cs="closure_lm_"+(1e6*Math.random()|0),Go={};function Yn(a,h,p,y,L){if(Array.isArray(h)){for(var V=0;V<h.length;V++)Yn(a,h[V],p,y,L);return null}return p=Br(p),a&&a[Dt]?a.K(h,p,c(y)?!!y.capture:!!y,L):Yh(a,h,p,!1,y,L)}function Yh(a,h,p,y,L,V){if(!h)throw Error("Invalid event type");var q=c(L)?!!L.capture:!!L,Le=Xo(a);if(Le||(a[Cs]=Le=new bn(a)),p=Le.add(h,p,y,q,V),p.proxy)return p;if(y=Xh(),p.proxy=y,y.src=a,y.listener=p,a.addEventListener)We||(L=q),L===void 0&&(L=!1),a.addEventListener(h.toString(),y,L);else if(a.attachEvent)a.attachEvent(Zl(h.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return p}function Xh(){function a(p){return h.call(a.src,a.listener,p)}const h=Jh;return a}function Qo(a,h,p,y,L){if(Array.isArray(h))for(var V=0;V<h.length;V++)Qo(a,h[V],p,y,L);else y=c(y)?!!y.capture:!!y,p=Br(p),a&&a[Dt]?(a=a.i,h=String(h).toString(),h in a.g&&(V=a.g[h],p=Qn(V,p,y,L),-1<p&&(Gn(V[p]),Array.prototype.splice.call(V,p,1),V.length==0&&(delete a.g[h],a.h--)))):a&&(a=Xo(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Qn(h,p,y,L)),(p=-1<a?h[a]:null)&&Yo(p))}function Yo(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[Dt])be(h.i,a);else{var p=a.type,y=a.proxy;h.removeEventListener?h.removeEventListener(p,y,a.capture):h.detachEvent?h.detachEvent(Zl(p),y):h.addListener&&h.removeListener&&h.removeListener(y),(p=Xo(h))?(be(p,a),p.h==0&&(p.src=null,h[Cs]=null)):Gn(a)}}}function Zl(a){return a in Go?Go[a]:Go[a]="on"+a}function Jh(a,h){if(a.da)a=!0;else{h=new Ze(h,this);var p=a.listener,y=a.ha||a.src;a.fa&&Yo(a),a=p.call(y,h)}return a}function Xo(a){return a=a[Cs],a instanceof bn?a:null}var gr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Br(a){return typeof a=="function"?a:(a[gr]||(a[gr]=function(h){return a.handleEvent(h)}),a[gr])}function ft(){ce.call(this),this.i=new bn(this),this.M=this,this.F=null}S(ft,ce),ft.prototype[Dt]=!0,ft.prototype.removeEventListener=function(a,h,p,y){Qo(this,a,h,p,y)};function pt(a,h){var p,y=a.F;if(y)for(p=[];y;y=y.F)p.push(y);if(a=a.M,y=h.type||h,typeof h=="string")h=new Ce(h,a);else if(h instanceof Ce)h.target=h.target||a;else{var L=h;h=new Ce(y,a),_(h,L)}if(L=!0,p)for(var V=p.length-1;0<=V;V--){var q=h.g=p[V];L=on(q,y,!0,h)&&L}if(q=h.g=a,L=on(q,y,!0,h)&&L,L=on(q,y,!1,h)&&L,p)for(V=0;V<p.length;V++)q=h.g=p[V],L=on(q,y,!1,h)&&L}ft.prototype.N=function(){if(ft.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var p=a.g[h],y=0;y<p.length;y++)Gn(p[y]);delete a.g[h],a.h--}}this.F=null},ft.prototype.K=function(a,h,p,y){return this.i.add(String(a),h,!1,p,y)},ft.prototype.L=function(a,h,p,y){return this.i.add(String(a),h,!0,p,y)};function on(a,h,p,y){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var L=!0,V=0;V<h.length;++V){var q=h[V];if(q&&!q.da&&q.capture==p){var Le=q.listener,St=q.ha||q.src;q.fa&&be(a.i,q),L=Le.call(St,y)!==!1&&L}}return L&&!y.defaultPrevented}function wn(a,h,p){if(typeof a=="function")p&&(a=m(a,p));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function Jo(a){a.g=wn(()=>{a.g=null,a.i&&(a.i=!1,Jo(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class ks extends ce{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Jo(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Vi(a){ce.call(this),this.h=a,this.g={}}S(Vi,ce);var Dn=[];function Zo(a){k(a.g,function(h,p){this.g.hasOwnProperty(p)&&Yo(h)},a),a.g={}}Vi.prototype.N=function(){Vi.aa.N.call(this),Zo(this)},Vi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var xs=l.JSON.stringify,eu=l.JSON.parse,Zh=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Ns(){}Ns.prototype.h=null;function Ui(a){return a.h||(a.h=a.i())}function ea(){}var yr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Hr(){Ce.call(this,"d")}S(Hr,Ce);function Fi(){Ce.call(this,"c")}S(Fi,Ce);var vr={},ta=null;function bs(){return ta=ta||new ft}vr.La="serverreachability";function na(a){Ce.call(this,vr.La,a)}S(na,Ce);function Xn(a){const h=bs();pt(h,new na(h))}vr.STAT_EVENT="statevent";function ji(a,h){Ce.call(this,vr.STAT_EVENT,a),this.stat=h}S(ji,Ce);function It(a){const h=bs();pt(h,new ji(h,a))}vr.Ma="timingevent";function tu(a,h){Ce.call(this,vr.Ma,a),this.size=h}S(tu,Ce);function x(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function D(){this.g=!0}D.prototype.xa=function(){this.g=!1};function M(a,h,p,y,L,V){a.info(function(){if(a.g)if(V)for(var q="",Le=V.split("&"),St=0;St<Le.length;St++){var Ae=Le[St].split("=");if(1<Ae.length){var Mt=Ae[0];Ae=Ae[1];var Vt=Mt.split("_");q=2<=Vt.length&&Vt[1]=="type"?q+(Mt+"="+Ae+"&"):q+(Mt+"=redacted&")}}else q=null;else q=V;return"XMLHTTP REQ ("+y+") [attempt "+L+"]: "+h+`
`+p+`
`+q})}function j(a,h,p,y,L,V,q){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+L+"]: "+h+`
`+p+`
`+V+" "+q})}function G(a,h,p,y){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+ie(a,p)+(y?" "+y:"")})}function Z(a,h){a.info(function(){return"TIMEOUT: "+h})}D.prototype.info=function(){};function ie(a,h){if(!a.g)return h;if(!h)return null;try{var p=JSON.parse(h);if(p){for(a=0;a<p.length;a++)if(Array.isArray(p[a])){var y=p[a];if(!(2>y.length)){var L=y[1];if(Array.isArray(L)&&!(1>L.length)){var V=L[0];if(V!="noop"&&V!="stop"&&V!="close")for(var q=1;q<L.length;q++)L[q]=""}}}}return xs(p)}catch{return h}}var W={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ae={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ee;function te(){}S(te,Ns),te.prototype.g=function(){return new XMLHttpRequest},te.prototype.i=function(){return{}},ee=new te;function ye(a,h,p,y){this.j=a,this.i=h,this.l=p,this.R=y||1,this.U=new Vi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Re}function Re(){this.i=null,this.g="",this.h=!1}var ke={},Te={};function st(a,h,p){a.L=1,a.v=su(wr(h)),a.m=p,a.P=!0,Ke(a,null)}function Ke(a,h){a.F=Date.now(),On(a),a.A=wr(a.v);var p=a.A,y=a.R;Array.isArray(y)||(y=[String(y)]),$g(p.i,"t",y),a.C=0,p=a.j.J,a.h=new Re,a.g=oy(a.j,p?h:null,!a.m),0<a.O&&(a.M=new ks(m(a.Y,a,a.g),a.O)),h=a.U,p=a.g,y=a.ca;var L="readystatechange";Array.isArray(L)||(L&&(Dn[0]=L.toString()),L=Dn);for(var V=0;V<L.length;V++){var q=Yn(p,L[V],y||h.handleEvent,!1,h.h||h);if(!q)break;h.g[q.key]=q}h=a.H?g(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Xn(),M(a.i,a.u,a.A,a.l,a.R,a.m)}ye.prototype.ca=function(a){a=a.target;const h=this.M;h&&Er(a)==3?h.j():this.Y(a)},ye.prototype.Y=function(a){try{if(a==this.g)e:{const Vt=Er(this.g);var h=this.g.Ba();const Ms=this.g.Z();if(!(3>Vt)&&(Vt!=3||this.g&&(this.h.h||this.g.oa()||Qg(this.g)))){this.J||Vt!=4||h==7||(h==8||0>=Ms?Xn(3):Xn(2)),Zn(this);var p=this.g.Z();this.X=p;t:if(Wr(this)){var y=Qg(this.g);a="";var L=y.length,V=Er(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){En(this),Ot(this);var q="";break t}this.h.i=new l.TextDecoder}for(h=0;h<L;h++)this.h.h=!0,a+=this.h.i.decode(y[h],{stream:!(V&&h==L-1)});y.length=0,this.h.g+=a,this.C=0,q=this.h.g}else q=this.g.oa();if(this.o=p==200,j(this.i,this.u,this.A,this.l,this.R,Vt,p),this.o){if(this.T&&!this.K){t:{if(this.g){var Le,St=this.g;if((Le=St.g?St.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(Le)){var Ae=Le;break t}}Ae=null}if(p=Ae)G(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,qr(this,p);else{this.o=!1,this.s=3,It(12),En(this),Ot(this);break e}}if(this.P){p=!0;let Ln;for(;!this.J&&this.C<q.length;)if(Ln=Jn(this,q),Ln==Te){Vt==4&&(this.s=4,It(14),p=!1),G(this.i,this.l,null,"[Incomplete Response]");break}else if(Ln==ke){this.s=4,It(15),G(this.i,this.l,q,"[Invalid Chunk]"),p=!1;break}else G(this.i,this.l,Ln,null),qr(this,Ln);if(Wr(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Vt!=4||q.length!=0||this.h.h||(this.s=1,It(16),p=!1),this.o=this.o&&p,!p)G(this.i,this.l,q,"[Invalid Chunked Response]"),En(this),Ot(this);else if(0<q.length&&!this.W){this.W=!0;var Mt=this.j;Mt.g==this&&Mt.ba&&!Mt.M&&(Mt.j.info("Great, no buffering proxy detected. Bytes received: "+q.length),rd(Mt),Mt.M=!0,It(11))}}else G(this.i,this.l,q,null),qr(this,q);Vt==4&&En(this),this.o&&!this.J&&(Vt==4?ny(this.j,this):(this.o=!1,On(this)))}else zS(this.g),p==400&&0<q.indexOf("Unknown SID")?(this.s=3,It(12)):(this.s=0,It(13)),En(this),Ot(this)}}}catch{}finally{}};function Wr(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Jn(a,h){var p=a.C,y=h.indexOf(`
`,p);return y==-1?Te:(p=Number(h.substring(p,y)),isNaN(p)?ke:(y+=1,y+p>h.length?Te:(h=h.slice(y,y+p),a.C=y+p,h)))}ye.prototype.cancel=function(){this.J=!0,En(this)};function On(a){a.S=Date.now()+a.I,_r(a,a.I)}function _r(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=x(m(a.ba,a),h)}function Zn(a){a.B&&(l.clearTimeout(a.B),a.B=null)}ye.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Z(this.i,this.A),this.L!=2&&(Xn(),It(17)),En(this),this.s=2,Ot(this)):_r(this,this.S-a)};function Ot(a){a.j.G==0||a.J||ny(a.j,a)}function En(a){Zn(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Zo(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function qr(a,h){try{var p=a.j;if(p.G!=0&&(p.g==a||De(p.h,a))){if(!a.K&&De(p.h,a)&&p.G==3){try{var y=p.Da.g.parse(h)}catch{y=null}if(Array.isArray(y)&&y.length==3){var L=y;if(L[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<a.F)cu(p),lu(p);else break e;nd(p),It(18)}}else p.za=L[1],0<p.za-p.T&&37500>L[2]&&p.F&&p.v==0&&!p.C&&(p.C=x(m(p.Za,p),6e3));if(1>=Lt(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else $i(p,11)}else if((a.K||p.g==a)&&cu(p),!v(h))for(L=p.Da.g.parse(h),h=0;h<L.length;h++){let Ae=L[h];if(p.T=Ae[0],Ae=Ae[1],p.G==2)if(Ae[0]=="c"){p.K=Ae[1],p.ia=Ae[2];const Mt=Ae[3];Mt!=null&&(p.la=Mt,p.j.info("VER="+p.la));const Vt=Ae[4];Vt!=null&&(p.Aa=Vt,p.j.info("SVER="+p.Aa));const Ms=Ae[5];Ms!=null&&typeof Ms=="number"&&0<Ms&&(y=1.5*Ms,p.L=y,p.j.info("backChannelRequestTimeoutMs_="+y)),y=p;const Ln=a.g;if(Ln){const du=Ln.g?Ln.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(du){var V=y.h;V.g||du.indexOf("spdy")==-1&&du.indexOf("quic")==-1&&du.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(an(V,V.h),V.h=null))}if(y.D){const id=Ln.g?Ln.g.getResponseHeader("X-HTTP-Session-Id"):null;id&&(y.ya=id,Fe(y.I,y.D,id))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-a.F,p.j.info("Handshake RTT: "+p.R+"ms")),y=p;var q=a;if(y.qa=sy(y,y.J?y.ia:null,y.W),q.K){ra(y.h,q);var Le=q,St=y.L;St&&(Le.I=St),Le.B&&(Zn(Le),On(Le)),y.g=q}else ey(y);0<p.i.length&&uu(p)}else Ae[0]!="stop"&&Ae[0]!="close"||$i(p,7);else p.G==3&&(Ae[0]=="stop"||Ae[0]=="close"?Ae[0]=="stop"?$i(p,7):td(p):Ae[0]!="noop"&&p.l&&p.l.ta(Ae),p.v=0)}}Xn(4)}catch{}}var Ds=class{constructor(a,h){this.g=a,this.map=h}};function he(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ue(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Lt(a){return a.h?1:a.g?a.g.size:0}function De(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function an(a,h){a.g?a.g.add(h):a.h=h}function ra(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}he.prototype.cancel=function(){if(this.i=nu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function nu(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const p of a.g.values())h=h.concat(p.D);return h}return C(a.i)}function AS(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],p=a.length,y=0;y<p;y++)h.push(a[y]);return h}h=[],p=0;for(y in a)h[p++]=a[y];return h}function PS(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var p=0;p<a;p++)h.push(p);return h}h=[],p=0;for(const y in a)h[p++]=y;return h}}}function Mg(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var p=PS(a),y=AS(a),L=y.length,V=0;V<L;V++)h.call(void 0,y[V],p&&p[V],a)}var Vg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function CS(a,h){if(a){a=a.split("&");for(var p=0;p<a.length;p++){var y=a[p].indexOf("="),L=null;if(0<=y){var V=a[p].substring(0,y);L=a[p].substring(y+1)}else V=a[p];h(V,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function zi(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof zi){this.h=a.h,ru(this,a.j),this.o=a.o,this.g=a.g,iu(this,a.s),this.l=a.l;var h=a.i,p=new oa;p.i=h.i,h.g&&(p.g=new Map(h.g),p.h=h.h),Ug(this,p),this.m=a.m}else a&&(h=String(a).match(Vg))?(this.h=!1,ru(this,h[1]||"",!0),this.o=ia(h[2]||""),this.g=ia(h[3]||"",!0),iu(this,h[4]),this.l=ia(h[5]||"",!0),Ug(this,h[6]||"",!0),this.m=ia(h[7]||"")):(this.h=!1,this.i=new oa(null,this.h))}zi.prototype.toString=function(){var a=[],h=this.j;h&&a.push(sa(h,Fg,!0),":");var p=this.g;return(p||h=="file")&&(a.push("//"),(h=this.o)&&a.push(sa(h,Fg,!0),"@"),a.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&a.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(sa(p,p.charAt(0)=="/"?NS:xS,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",sa(p,DS)),a.join("")};function wr(a){return new zi(a)}function ru(a,h,p){a.j=p?ia(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function iu(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Ug(a,h,p){h instanceof oa?(a.i=h,OS(a.i,a.h)):(p||(h=sa(h,bS)),a.i=new oa(h,a.h))}function Fe(a,h,p){a.i.set(h,p)}function su(a){return Fe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function ia(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function sa(a,h,p){return typeof a=="string"?(a=encodeURI(a).replace(h,kS),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function kS(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Fg=/[#\/\?@]/g,xS=/[#\?:]/g,NS=/[#\?]/g,bS=/[#\?@]/g,DS=/#/g;function oa(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Kr(a){a.g||(a.g=new Map,a.h=0,a.i&&CS(a.i,function(h,p){a.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=oa.prototype,t.add=function(a,h){Kr(this),this.i=null,a=Os(this,a);var p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(h),this.h+=1,this};function jg(a,h){Kr(a),h=Os(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function zg(a,h){return Kr(a),h=Os(a,h),a.g.has(h)}t.forEach=function(a,h){Kr(this),this.g.forEach(function(p,y){p.forEach(function(L){a.call(h,L,y,this)},this)},this)},t.na=function(){Kr(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),p=[];for(let y=0;y<h.length;y++){const L=a[y];for(let V=0;V<L.length;V++)p.push(h[y])}return p},t.V=function(a){Kr(this);let h=[];if(typeof a=="string")zg(this,a)&&(h=h.concat(this.g.get(Os(this,a))));else{a=Array.from(this.g.values());for(let p=0;p<a.length;p++)h=h.concat(a[p])}return h},t.set=function(a,h){return Kr(this),this.i=null,a=Os(this,a),zg(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function $g(a,h,p){jg(a,h),0<p.length&&(a.i=null,a.g.set(Os(a,h),C(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var p=0;p<h.length;p++){var y=h[p];const V=encodeURIComponent(String(y)),q=this.V(y);for(y=0;y<q.length;y++){var L=V;q[y]!==""&&(L+="="+encodeURIComponent(String(q[y]))),a.push(L)}}return this.i=a.join("&")};function Os(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function OS(a,h){h&&!a.j&&(Kr(a),a.i=null,a.g.forEach(function(p,y){var L=y.toLowerCase();y!=L&&(jg(this,y),$g(this,L,p))},a)),a.j=h}function LS(a,h){const p=new D;if(l.Image){const y=new Image;y.onload=E(Gr,p,"TestLoadImage: loaded",!0,h,y),y.onerror=E(Gr,p,"TestLoadImage: error",!1,h,y),y.onabort=E(Gr,p,"TestLoadImage: abort",!1,h,y),y.ontimeout=E(Gr,p,"TestLoadImage: timeout",!1,h,y),l.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else h(!1)}function MS(a,h){const p=new D,y=new AbortController,L=setTimeout(()=>{y.abort(),Gr(p,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:y.signal}).then(V=>{clearTimeout(L),V.ok?Gr(p,"TestPingServer: ok",!0,h):Gr(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(L),Gr(p,"TestPingServer: error",!1,h)})}function Gr(a,h,p,y,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),y(p)}catch{}}function VS(){this.g=new Zh}function US(a,h,p){const y=p||"";try{Mg(a,function(L,V){let q=L;c(L)&&(q=xs(L)),h.push(y+V+"="+encodeURIComponent(q))})}catch(L){throw h.push(y+"type="+encodeURIComponent("_badmap")),L}}function aa(a){this.l=a.Ub||null,this.j=a.eb||!1}S(aa,Ns),aa.prototype.g=function(){return new ou(this.l,this.j)},aa.prototype.i=function(a){return function(){return a}}({});function ou(a,h){ft.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(ou,ft),t=ou.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,ua(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,la(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ua(this)),this.g&&(this.readyState=3,ua(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Bg(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Bg(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?la(this):ua(this),this.readyState==3&&Bg(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,la(this))},t.Qa=function(a){this.g&&(this.response=a,la(this))},t.ga=function(){this.g&&la(this)};function la(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ua(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=h.next();return a.join(`\r
`)};function ua(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ou.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Hg(a){let h="";return k(a,function(p,y){h+=y,h+=":",h+=p,h+=`\r
`}),h}function ed(a,h,p){e:{for(y in p){var y=!1;break e}y=!0}y||(p=Hg(p),typeof a=="string"?p!=null&&encodeURIComponent(String(p)):Fe(a,h,p))}function et(a){ft.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(et,ft);var FS=/^https?$/i,jS=["POST","PUT"];t=et.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,p,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ee.g(),this.v=this.o?Ui(this.o):Ui(ee),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(V){Wg(this,V);return}if(a=p||"",p=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var L in y)p.set(L,y[L]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const V of y.keys())p.set(V,y.get(V));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(p.keys()).find(V=>V.toLowerCase()=="content-type"),L=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(jS,h,void 0))||y||L||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,q]of p)this.g.setRequestHeader(V,q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Gg(this),this.u=!0,this.g.send(a),this.u=!1}catch(V){Wg(this,V)}};function Wg(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,qg(a),au(a)}function qg(a){a.A||(a.A=!0,pt(a,"complete"),pt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,pt(this,"complete"),pt(this,"abort"),au(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),au(this,!0)),et.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Kg(this):this.bb())},t.bb=function(){Kg(this)};function Kg(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Er(a)!=4||a.Z()!=2)){if(a.u&&Er(a)==4)wn(a.Ea,0,a);else if(pt(a,"readystatechange"),Er(a)==4){a.h=!1;try{const q=a.Z();e:switch(q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var y;if(y=q===0){var L=String(a.D).match(Vg)[1]||null;!L&&l.self&&l.self.location&&(L=l.self.location.protocol.slice(0,-1)),y=!FS.test(L?L.toLowerCase():"")}p=y}if(p)pt(a,"complete"),pt(a,"success");else{a.m=6;try{var V=2<Er(a)?a.g.statusText:""}catch{V=""}a.l=V+" ["+a.Z()+"]",qg(a)}}finally{au(a)}}}}function au(a,h){if(a.g){Gg(a);const p=a.g,y=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||pt(a,"ready");try{p.onreadystatechange=y}catch{}}}function Gg(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Er(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Er(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),eu(h)}};function Qg(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function zS(a){const h={};a=(a.g&&2<=Er(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(v(a[y]))continue;var p=P(a[y]);const L=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const V=h[L]||[];h[L]=V,V.push(p)}w(h,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ca(a,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||h}function Yg(a){this.Aa=0,this.i=[],this.j=new D,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ca("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ca("baseRetryDelayMs",5e3,a),this.cb=ca("retryDelaySeedMs",1e4,a),this.Wa=ca("forwardChannelMaxRetries",2,a),this.wa=ca("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new he(a&&a.concurrentRequestLimit),this.Da=new VS,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Yg.prototype,t.la=8,t.G=1,t.connect=function(a,h,p,y){It(0),this.W=a,this.H=h||{},p&&y!==void 0&&(this.H.OSID=p,this.H.OAID=y),this.F=this.X,this.I=sy(this,null,this.W),uu(this)};function td(a){if(Xg(a),a.G==3){var h=a.U++,p=wr(a.I);if(Fe(p,"SID",a.K),Fe(p,"RID",h),Fe(p,"TYPE","terminate"),ha(a,p),h=new ye(a,a.j,h),h.L=2,h.v=su(wr(p)),p=!1,l.navigator&&l.navigator.sendBeacon)try{p=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!p&&l.Image&&(new Image().src=h.v,p=!0),p||(h.g=oy(h.j,null),h.g.ea(h.v)),h.F=Date.now(),On(h)}iy(a)}function lu(a){a.g&&(rd(a),a.g.cancel(),a.g=null)}function Xg(a){lu(a),a.u&&(l.clearTimeout(a.u),a.u=null),cu(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function uu(a){if(!Ue(a.h)&&!a.s){a.s=!0;var h=a.Ga;Ee||re(),K||(Ee(),K=!0),J.add(h,a),a.B=0}}function $S(a,h){return Lt(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=x(m(a.Ga,a,h),ry(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const L=new ye(this,this.j,a);let V=this.o;if(this.S&&(V?(V=g(V),_(V,this.S)):V=this.S),this.m!==null||this.O||(L.H=V,V=null),this.P)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var y=this.i[p];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(h+=y,4096<h){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=Zg(this,L,h),p=wr(this.I),Fe(p,"RID",a),Fe(p,"CVER",22),this.D&&Fe(p,"X-HTTP-Session-Id",this.D),ha(this,p),V&&(this.O?h="headers="+encodeURIComponent(String(Hg(V)))+"&"+h:this.m&&ed(p,this.m,V)),an(this.h,L),this.Ua&&Fe(p,"TYPE","init"),this.P?(Fe(p,"$req",h),Fe(p,"SID","null"),L.T=!0,st(L,p,null)):st(L,p,h),this.G=2}}else this.G==3&&(a?Jg(this,a):this.i.length==0||Ue(this.h)||Jg(this))};function Jg(a,h){var p;h?p=h.l:p=a.U++;const y=wr(a.I);Fe(y,"SID",a.K),Fe(y,"RID",p),Fe(y,"AID",a.T),ha(a,y),a.m&&a.o&&ed(y,a.m,a.o),p=new ye(a,a.j,p,a.B+1),a.m===null&&(p.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Zg(a,p,1e3),p.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),an(a.h,p),st(p,y,h)}function ha(a,h){a.H&&k(a.H,function(p,y){Fe(h,y,p)}),a.l&&Mg({},function(p,y){Fe(h,y,p)})}function Zg(a,h,p){p=Math.min(a.i.length,p);var y=a.l?m(a.l.Na,a.l,a):null;e:{var L=a.i;let V=-1;for(;;){const q=["count="+p];V==-1?0<p?(V=L[0].g,q.push("ofs="+V)):V=0:q.push("ofs="+V);let Le=!0;for(let St=0;St<p;St++){let Ae=L[St].g;const Mt=L[St].map;if(Ae-=V,0>Ae)V=Math.max(0,L[St].g-100),Le=!1;else try{US(Mt,q,"req"+Ae+"_")}catch{y&&y(Mt)}}if(Le){y=q.join("&");break e}}}return a=a.i.splice(0,p),h.D=a,y}function ey(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;Ee||re(),K||(Ee(),K=!0),J.add(h,a),a.v=0}}function nd(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=x(m(a.Fa,a),ry(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,ty(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=x(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,It(10),lu(this),ty(this))};function rd(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function ty(a){a.g=new ye(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=wr(a.qa);Fe(h,"RID","rpc"),Fe(h,"SID",a.K),Fe(h,"AID",a.T),Fe(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&Fe(h,"TO",a.ja),Fe(h,"TYPE","xmlhttp"),ha(a,h),a.m&&a.o&&ed(h,a.m,a.o),a.L&&(a.g.I=a.L);var p=a.g;a=a.ia,p.L=1,p.v=su(wr(h)),p.m=null,p.P=!0,Ke(p,a)}t.Za=function(){this.C!=null&&(this.C=null,lu(this),nd(this),It(19))};function cu(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function ny(a,h){var p=null;if(a.g==h){cu(a),rd(a),a.g=null;var y=2}else if(De(a.h,h))p=h.D,ra(a.h,h),y=1;else return;if(a.G!=0){if(h.o)if(y==1){p=h.m?h.m.length:0,h=Date.now()-h.F;var L=a.B;y=bs(),pt(y,new tu(y,p)),uu(a)}else ey(a);else if(L=h.s,L==3||L==0&&0<h.X||!(y==1&&$S(a,h)||y==2&&nd(a)))switch(p&&0<p.length&&(h=a.h,h.i=h.i.concat(p)),L){case 1:$i(a,5);break;case 4:$i(a,10);break;case 3:$i(a,6);break;default:$i(a,2)}}}function ry(a,h){let p=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(p*=2),p*h}function $i(a,h){if(a.j.info("Error code "+h),h==2){var p=m(a.fb,a),y=a.Xa;const L=!y;y=new zi(y||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ru(y,"https"),su(y),L?LS(y.toString(),p):MS(y.toString(),p)}else It(2);a.G=0,a.l&&a.l.sa(h),iy(a),Xg(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),It(2)):(this.j.info("Failed to ping google.com"),It(1))};function iy(a){if(a.G=0,a.ka=[],a.l){const h=nu(a.h);(h.length!=0||a.i.length!=0)&&(b(a.ka,h),b(a.ka,a.i),a.h.i.length=0,C(a.i),a.i.length=0),a.l.ra()}}function sy(a,h,p){var y=p instanceof zi?wr(p):new zi(p);if(y.g!="")h&&(y.g=h+"."+y.g),iu(y,y.s);else{var L=l.location;y=L.protocol,h=h?h+"."+L.hostname:L.hostname,L=+L.port;var V=new zi(null);y&&ru(V,y),h&&(V.g=h),L&&iu(V,L),p&&(V.l=p),y=V}return p=a.D,h=a.ya,p&&h&&Fe(y,p,h),Fe(y,"VER",a.la),ha(a,y),y}function oy(a,h,p){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new et(new aa({eb:p})):new et(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function ay(){}t=ay.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function hu(){}hu.prototype.g=function(a,h){return new ln(a,h)};function ln(a,h){ft.call(this),this.g=new Yg(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!v(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!v(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Ls(this)}S(ln,ft),ln.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ln.prototype.close=function(){td(this.g)},ln.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.u&&(p={},p.__data__=xs(a),a=p);h.i.push(new Ds(h.Ya++,a)),h.G==3&&uu(h)},ln.prototype.N=function(){this.g.l=null,delete this.j,td(this.g),delete this.g,ln.aa.N.call(this)};function ly(a){Hr.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const p in h){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}S(ly,Hr);function uy(){Fi.call(this),this.status=1}S(uy,Fi);function Ls(a){this.g=a}S(Ls,ay),Ls.prototype.ua=function(){pt(this.g,"a")},Ls.prototype.ta=function(a){pt(this.g,new ly(a))},Ls.prototype.sa=function(a){pt(this.g,new uy)},Ls.prototype.ra=function(){pt(this.g,"b")},hu.prototype.createWebChannel=hu.prototype.g,ln.prototype.send=ln.prototype.o,ln.prototype.open=ln.prototype.m,ln.prototype.close=ln.prototype.close,OT=function(){return new hu},DT=function(){return bs()},bT=vr,gp={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},W.NO_ERROR=0,W.TIMEOUT=8,W.HTTP_ERROR=6,ac=W,ae.COMPLETE="complete",NT=ae,ea.EventType=yr,yr.OPEN="a",yr.CLOSE="b",yr.ERROR="c",yr.MESSAGE="d",ft.prototype.listen=ft.prototype.K,Da=ea,xT=aa,et.prototype.listenOnce=et.prototype.L,et.prototype.getLastError=et.prototype.Ka,et.prototype.getLastErrorCode=et.prototype.Ba,et.prototype.getStatus=et.prototype.Z,et.prototype.getResponseJson=et.prototype.Oa,et.prototype.getResponseText=et.prototype.oa,et.prototype.send=et.prototype.ea,et.prototype.setWithCredentials=et.prototype.Ha,kT=et}).apply(typeof Du<"u"?Du:typeof self<"u"?self:typeof window<"u"?window:{});const b_="@firebase/firestore";/**
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
 */let Ho="10.12.5";/**
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
 */const gs=new Fm("@firebase/firestore");function Ia(){return gs.logLevel}function X(t,...e){if(gs.logLevel<=we.DEBUG){const n=e.map(Ym);gs.debug(`Firestore (${Ho}): ${t}`,...n)}}function Ur(t,...e){if(gs.logLevel<=we.ERROR){const n=e.map(Ym);gs.error(`Firestore (${Ho}): ${t}`,...n)}}function ko(t,...e){if(gs.logLevel<=we.WARN){const n=e.map(Ym);gs.warn(`Firestore (${Ho}): ${t}`,...n)}}function Ym(t){if(typeof t=="string")return t;try{/**
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
 */function oe(t="Unexpected state"){const e=`FIRESTORE (${Ho}) INTERNAL ASSERTION FAILED: `+t;throw Ur(e),new Error(e)}function Me(t,e){t||oe()}function ue(t,e){return t}/**
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
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Q extends kn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class LT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class KD{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(zt.UNAUTHENTICATED))}shutdown(){}}class GD{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class QD{constructor(e){this.t=e,this.currentUser=zt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Ti;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ti,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ti)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Me(typeof r.accessToken=="string"),new LT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Me(e===null||typeof e=="string"),new zt(e)}}class YD{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=zt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class XD{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new YD(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(zt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class JD{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ZD{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,X("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Me(typeof n.token=="string"),this.R=n.token,new JD(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function eO(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class MT{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=eO(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Pe(t,e){return t<e?-1:t>e?1:0}function xo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class yt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Q($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Q($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new Q($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Q($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return yt.fromMillis(Date.now())}static fromDate(e){return yt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new yt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Pe(this.nanoseconds,e.nanoseconds):Pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class le{constructor(e){this.timestamp=e}static fromTimestamp(e){return new le(e)}static min(){return new le(new yt(0,0))}static max(){return new le(new yt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Rl{constructor(e,n,r){n===void 0?n=0:n>e.length&&oe(),r===void 0?r=e.length-n:r>e.length-n&&oe(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Rl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Rl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class $e extends Rl{construct(e,n,r){return new $e(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Q($.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new $e(n)}static emptyPath(){return new $e([])}}const tO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Pt extends Rl{construct(e,n,r){return new Pt(e,n,r)}static isValidIdentifier(e){return tO.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Pt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Pt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new Q($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new Q($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new Q($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new Q($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Pt(n)}static emptyPath(){return new Pt([])}}/**
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
 */class ne{constructor(e){this.path=e}static fromPath(e){return new ne($e.fromString(e))}static fromName(e){return new ne($e.fromString(e).popFirst(5))}static empty(){return new ne($e.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&$e.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return $e.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ne(new $e(e.slice()))}}function nO(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=le.fromTimestamp(r===1e9?new yt(n+1,0):new yt(n,r));return new Pi(i,ne.empty(),e)}function rO(t){return new Pi(t.readTime,t.key,-1)}class Pi{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Pi(le.min(),ne.empty(),-1)}static max(){return new Pi(le.max(),ne.empty(),-1)}}function iO(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ne.comparator(t.documentKey,e.documentKey),n!==0?n:Pe(t.largestBatchId,e.largestBatchId))}/**
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
 */const sO="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class oO{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ql(t){if(t.code!==$.FAILED_PRECONDITION||t.message!==sO)throw t;X("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&oe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new B((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof B?n:B.resolve(n)}catch(n){return B.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):B.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):B.reject(n)}static resolve(e){return new B((n,r)=>{n(e)})}static reject(e){return new B((n,r)=>{r(e)})}static waitFor(e){return new B((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=B.resolve(!1);for(const r of e)n=n.next(i=>i?B.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new B((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++l,l===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new B((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function aO(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Kl(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Xm{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Xm.oe=-1;function Mh(t){return t==null}function Xc(t){return t===0&&1/t==-1/0}function lO(t){return typeof t=="number"&&Number.isInteger(t)&&!Xc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function D_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Rs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function VT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Je{constructor(e,n){this.comparator=e,this.root=n||At.EMPTY}insert(e,n){return new Je(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,At.BLACK,null,null))}remove(e){return new Je(this.comparator,this.root.remove(e,this.comparator).copy(null,null,At.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ou(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ou(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ou(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ou(this.root,e,this.comparator,!0)}}class Ou{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class At{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??At.RED,this.left=i??At.EMPTY,this.right=s??At.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new At(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return At.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return At.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,At.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,At.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw oe();const e=this.left.check();if(e!==this.right.check())throw oe();return e+(this.isRed()?0:1)}}At.EMPTY=null,At.RED=!0,At.BLACK=!1;At.EMPTY=new class{constructor(){this.size=0}get key(){throw oe()}get value(){throw oe()}get color(){throw oe()}get left(){throw oe()}get right(){throw oe()}copy(e,n,r,i,s){return this}insert(e,n,r){return new At(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class kt{constructor(e){this.comparator=e,this.data=new Je(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new O_(this.data.getIterator())}getIteratorFrom(e){return new O_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof kt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new kt(this.comparator);return n.data=e,n}}class O_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class fn{constructor(e){this.fields=e,e.sort(Pt.comparator)}static empty(){return new fn([])}unionWith(e){let n=new kt(Pt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new fn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return xo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class UT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class bt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new UT("Invalid base64 string: "+s):s}}(e);return new bt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new bt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}bt.EMPTY_BYTE_STRING=new bt("");const uO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ci(t){if(Me(!!t),typeof t=="string"){let e=0;const n=uO.exec(t);if(Me(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ut(t.seconds),nanos:ut(t.nanos)}}function ut(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ys(t){return typeof t=="string"?bt.fromBase64String(t):bt.fromUint8Array(t)}/**
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
 */function Jm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Zm(t){const e=t.mapValue.fields.__previous_value__;return Jm(e)?Zm(e):e}function Al(t){const e=Ci(t.mapValue.fields.__local_write_time__.timestampValue);return new yt(e.seconds,e.nanos)}/**
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
 */class cO{constructor(e,n,r,i,s,o,l,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c}}class Pl{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Pl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Pl&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Lu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function vs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Jm(t)?4:hO(t)?9007199254740991:10:oe()}function mr(t,e){if(t===e)return!0;const n=vs(t);if(n!==vs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Al(t).isEqual(Al(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Ci(i.timestampValue),l=Ci(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return ys(i.bytesValue).isEqual(ys(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return ut(i.geoPointValue.latitude)===ut(s.geoPointValue.latitude)&&ut(i.geoPointValue.longitude)===ut(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ut(i.integerValue)===ut(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ut(i.doubleValue),l=ut(s.doubleValue);return o===l?Xc(o)===Xc(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return xo(t.arrayValue.values||[],e.arrayValue.values||[],mr);case 10:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(D_(o)!==D_(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!mr(o[u],l[u])))return!1;return!0}(t,e);default:return oe()}}function Cl(t,e){return(t.values||[]).find(n=>mr(n,e))!==void 0}function No(t,e){if(t===e)return 0;const n=vs(t),r=vs(e);if(n!==r)return Pe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Pe(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=ut(s.integerValue||s.doubleValue),u=ut(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return L_(t.timestampValue,e.timestampValue);case 4:return L_(Al(t),Al(e));case 5:return Pe(t.stringValue,e.stringValue);case 6:return function(s,o){const l=ys(s),u=ys(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const d=Pe(l[c],u[c]);if(d!==0)return d}return Pe(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=Pe(ut(s.latitude),ut(o.latitude));return l!==0?l:Pe(ut(s.longitude),ut(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const l=s.values||[],u=o.values||[];for(let c=0;c<l.length&&c<u.length;++c){const d=No(l[c],u[c]);if(d)return d}return Pe(l.length,u.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Lu.mapValue&&o===Lu.mapValue)return 0;if(s===Lu.mapValue)return 1;if(o===Lu.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let f=0;f<u.length&&f<d.length;++f){const m=Pe(u[f],d[f]);if(m!==0)return m;const E=No(l[u[f]],c[d[f]]);if(E!==0)return E}return Pe(u.length,d.length)}(t.mapValue,e.mapValue);default:throw oe()}}function L_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Pe(t,e);const n=Ci(t),r=Ci(e),i=Pe(n.seconds,r.seconds);return i!==0?i:Pe(n.nanos,r.nanos)}function bo(t){return yp(t)}function yp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Ci(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ys(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ne.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=yp(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${yp(n.fields[o])}`;return i+"}"}(t.mapValue):oe()}function M_(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function vp(t){return!!t&&"integerValue"in t}function eg(t){return!!t&&"arrayValue"in t}function V_(t){return!!t&&"nullValue"in t}function U_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function lc(t){return!!t&&"mapValue"in t}function Ga(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Rs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ga(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ga(t.arrayValue.values[n]);return e}return Object.assign({},t)}function hO(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class en{constructor(e){this.value=e}static empty(){return new en({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!lc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ga(n)}setAll(e){let n=Pt.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Ga(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());lc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return mr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];lc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Rs(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new en(Ga(this.value))}}function FT(t){const e=[];return Rs(t.fields,(n,r)=>{const i=new Pt([n]);if(lc(r)){const s=FT(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new fn(e)}/**
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
 */class Bt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Bt(e,0,le.min(),le.min(),le.min(),en.empty(),0)}static newFoundDocument(e,n,r,i){return new Bt(e,1,n,le.min(),r,i,0)}static newNoDocument(e,n){return new Bt(e,2,n,le.min(),le.min(),en.empty(),0)}static newUnknownDocument(e,n){return new Bt(e,3,n,le.min(),le.min(),en.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(le.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=en.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=en.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=le.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Bt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Bt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Jc{constructor(e,n){this.position=e,this.inclusive=n}}function F_(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=ne.comparator(ne.fromName(o.referenceValue),n.key):r=No(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function j_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!mr(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class kl{constructor(e,n="asc"){this.field=e,this.dir=n}}function dO(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class jT{}class dt extends jT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new pO(e,n,r):n==="array-contains"?new yO(e,r):n==="in"?new vO(e,r):n==="not-in"?new _O(e,r):n==="array-contains-any"?new wO(e,r):new dt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new mO(e,r):new gO(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(No(n,this.value)):n!==null&&vs(this.value)===vs(n)&&this.matchesComparison(No(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return oe()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Kn extends jT{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Kn(e,n)}matches(e){return zT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function zT(t){return t.op==="and"}function $T(t){return fO(t)&&zT(t)}function fO(t){for(const e of t.filters)if(e instanceof Kn)return!1;return!0}function _p(t){if(t instanceof dt)return t.field.canonicalString()+t.op.toString()+bo(t.value);if($T(t))return t.filters.map(e=>_p(e)).join(",");{const e=t.filters.map(n=>_p(n)).join(",");return`${t.op}(${e})`}}function BT(t,e){return t instanceof dt?function(r,i){return i instanceof dt&&r.op===i.op&&r.field.isEqual(i.field)&&mr(r.value,i.value)}(t,e):t instanceof Kn?function(r,i){return i instanceof Kn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&BT(o,i.filters[l]),!0):!1}(t,e):void oe()}function HT(t){return t instanceof dt?function(n){return`${n.field.canonicalString()} ${n.op} ${bo(n.value)}`}(t):t instanceof Kn?function(n){return n.op.toString()+" {"+n.getFilters().map(HT).join(" ,")+"}"}(t):"Filter"}class pO extends dt{constructor(e,n,r){super(e,n,r),this.key=ne.fromName(r.referenceValue)}matches(e){const n=ne.comparator(e.key,this.key);return this.matchesComparison(n)}}class mO extends dt{constructor(e,n){super(e,"in",n),this.keys=WT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class gO extends dt{constructor(e,n){super(e,"not-in",n),this.keys=WT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function WT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ne.fromName(r.referenceValue))}class yO extends dt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return eg(n)&&Cl(n.arrayValue,this.value)}}class vO extends dt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Cl(this.value.arrayValue,n)}}class _O extends dt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Cl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Cl(this.value.arrayValue,n)}}class wO extends dt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!eg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Cl(this.value.arrayValue,r))}}/**
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
 */class EO{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function z_(t,e=null,n=[],r=[],i=null,s=null,o=null){return new EO(t,e,n,r,i,s,o)}function tg(t){const e=ue(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>_p(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Mh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>bo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>bo(r)).join(",")),e.ue=n}return e.ue}function ng(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!dO(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!BT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!j_(t.startAt,e.startAt)&&j_(t.endAt,e.endAt)}function wp(t){return ne.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Wo{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function TO(t,e,n,r,i,s,o,l){return new Wo(t,e,n,r,i,s,o,l)}function Vh(t){return new Wo(t)}function $_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function qT(t){return t.collectionGroup!==null}function Qa(t){const e=ue(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new kt(Pt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new kl(s,r))}),n.has(Pt.keyField().canonicalString())||e.ce.push(new kl(Pt.keyField(),r))}return e.ce}function hr(t){const e=ue(t);return e.le||(e.le=IO(e,Qa(t))),e.le}function IO(t,e){if(t.limitType==="F")return z_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new kl(i.field,s)});const n=t.endAt?new Jc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Jc(t.startAt.position,t.startAt.inclusive):null;return z_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Ep(t,e){const n=t.filters.concat([e]);return new Wo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Tp(t,e,n){return new Wo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Uh(t,e){return ng(hr(t),hr(e))&&t.limitType===e.limitType}function KT(t){return`${tg(hr(t))}|lt:${t.limitType}`}function js(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>HT(i)).join(", ")}]`),Mh(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>bo(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>bo(i)).join(",")),`Target(${r})`}(hr(t))}; limitType=${t.limitType})`}function Fh(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):ne.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Qa(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=F_(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,Qa(r),i)||r.endAt&&!function(o,l,u){const c=F_(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,Qa(r),i))}(t,e)}function SO(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function GT(t){return(e,n)=>{let r=!1;for(const i of Qa(t)){const s=RO(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function RO(t,e,n){const r=t.field.isKeyField()?ne.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?No(u,c):oe()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return oe()}}/**
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
 */class qo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Rs(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return VT(this.inner)}size(){return this.innerSize}}/**
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
 */const AO=new Je(ne.comparator);function Fr(){return AO}const QT=new Je(ne.comparator);function Oa(...t){let e=QT;for(const n of t)e=e.insert(n.key,n);return e}function YT(t){let e=QT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Zi(){return Ya()}function XT(){return Ya()}function Ya(){return new qo(t=>t.toString(),(t,e)=>t.isEqual(e))}const PO=new Je(ne.comparator),CO=new kt(ne.comparator);function _e(...t){let e=CO;for(const n of t)e=e.add(n);return e}const kO=new kt(Pe);function xO(){return kO}/**
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
 */function JT(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Xc(e)?"-0":e}}function ZT(t){return{integerValue:""+t}}function NO(t,e){return lO(e)?ZT(e):JT(t,e)}/**
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
 */class jh{constructor(){this._=void 0}}function bO(t,e,n){return t instanceof Zc?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Jm(s)&&(s=Zm(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof xl?tI(t,e):t instanceof Nl?nI(t,e):function(i,s){const o=eI(i,s),l=B_(o)+B_(i.Pe);return vp(o)&&vp(i.Pe)?ZT(l):JT(i.serializer,l)}(t,e)}function DO(t,e,n){return t instanceof xl?tI(t,e):t instanceof Nl?nI(t,e):n}function eI(t,e){return t instanceof eh?function(r){return vp(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Zc extends jh{}class xl extends jh{constructor(e){super(),this.elements=e}}function tI(t,e){const n=rI(e);for(const r of t.elements)n.some(i=>mr(i,r))||n.push(r);return{arrayValue:{values:n}}}class Nl extends jh{constructor(e){super(),this.elements=e}}function nI(t,e){let n=rI(e);for(const r of t.elements)n=n.filter(i=>!mr(i,r));return{arrayValue:{values:n}}}class eh extends jh{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function B_(t){return ut(t.integerValue||t.doubleValue)}function rI(t){return eg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function OO(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof xl&&i instanceof xl||r instanceof Nl&&i instanceof Nl?xo(r.elements,i.elements,mr):r instanceof eh&&i instanceof eh?mr(r.Pe,i.Pe):r instanceof Zc&&i instanceof Zc}(t.transform,e.transform)}class LO{constructor(e,n){this.version=e,this.transformResults=n}}class dr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new dr}static exists(e){return new dr(void 0,e)}static updateTime(e){return new dr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function uc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class zh{}function iI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new oI(t.key,dr.none()):new Gl(t.key,t.data,dr.none());{const n=t.data,r=en.empty();let i=new kt(Pt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Mi(t.key,r,new fn(i.toArray()),dr.none())}}function MO(t,e,n){t instanceof Gl?function(i,s,o){const l=i.value.clone(),u=W_(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Mi?function(i,s,o){if(!uc(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=W_(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(sI(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Xa(t,e,n,r){return t instanceof Gl?function(s,o,l,u){if(!uc(s.precondition,o))return l;const c=s.value.clone(),d=q_(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Mi?function(s,o,l,u){if(!uc(s.precondition,o))return l;const c=q_(s.fieldTransforms,u,o),d=o.data;return d.setAll(sI(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,l){return uc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function VO(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=eI(r.transform,i||null);s!=null&&(n===null&&(n=en.empty()),n.set(r.field,s))}return n||null}function H_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&xo(r,i,(s,o)=>OO(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Gl extends zh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Mi extends zh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function sI(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function W_(t,e,n){const r=new Map;Me(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,DO(o,l,n[i]))}return r}function q_(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,bO(s,o,e))}return r}class oI extends zh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class UO extends zh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class FO{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&MO(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Xa(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Xa(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=XT();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=iI(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(le.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),_e())}isEqual(e){return this.batchId===e.batchId&&xo(this.mutations,e.mutations,(n,r)=>H_(n,r))&&xo(this.baseMutations,e.baseMutations,(n,r)=>H_(n,r))}}class rg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Me(e.mutations.length===r.length);let i=function(){return PO}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new rg(e,n,r,i)}}/**
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
 */class jO{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class zO{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var at,Ie;function $O(t){switch(t){default:return oe();case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0}}function aI(t){if(t===void 0)return Ur("GRPC error has no .code"),$.UNKNOWN;switch(t){case at.OK:return $.OK;case at.CANCELLED:return $.CANCELLED;case at.UNKNOWN:return $.UNKNOWN;case at.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case at.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case at.INTERNAL:return $.INTERNAL;case at.UNAVAILABLE:return $.UNAVAILABLE;case at.UNAUTHENTICATED:return $.UNAUTHENTICATED;case at.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case at.NOT_FOUND:return $.NOT_FOUND;case at.ALREADY_EXISTS:return $.ALREADY_EXISTS;case at.PERMISSION_DENIED:return $.PERMISSION_DENIED;case at.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case at.ABORTED:return $.ABORTED;case at.OUT_OF_RANGE:return $.OUT_OF_RANGE;case at.UNIMPLEMENTED:return $.UNIMPLEMENTED;case at.DATA_LOSS:return $.DATA_LOSS;default:return oe()}}(Ie=at||(at={}))[Ie.OK=0]="OK",Ie[Ie.CANCELLED=1]="CANCELLED",Ie[Ie.UNKNOWN=2]="UNKNOWN",Ie[Ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ie[Ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ie[Ie.NOT_FOUND=5]="NOT_FOUND",Ie[Ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ie[Ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ie[Ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ie[Ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ie[Ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ie[Ie.ABORTED=10]="ABORTED",Ie[Ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ie[Ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ie[Ie.INTERNAL=13]="INTERNAL",Ie[Ie.UNAVAILABLE=14]="UNAVAILABLE",Ie[Ie.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function BO(){return new TextEncoder}/**
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
 */const HO=new is([4294967295,4294967295],0);function K_(t){const e=BO().encode(t),n=new CT;return n.update(e),new Uint8Array(n.digest())}function G_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new is([n,r],0),new is([i,s],0)]}class ig{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new La(`Invalid padding: ${n}`);if(r<0)throw new La(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new La(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new La(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=is.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(is.fromNumber(r)));return i.compare(HO)===1&&(i=new is([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=K_(e),[r,i]=G_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new ig(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=K_(e),[r,i]=G_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class La extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class $h{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Ql.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new $h(le.min(),i,new Je(Pe),Fr(),_e())}}class Ql{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ql(r,n,_e(),_e(),_e())}}/**
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
 */class cc{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class lI{constructor(e,n){this.targetId=e,this.me=n}}class uI{constructor(e,n,r=bt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Q_{constructor(){this.fe=0,this.ge=X_(),this.pe=bt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=_e(),n=_e(),r=_e();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:oe()}}),new Ql(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=X_()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Me(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class WO{constructor(e){this.Le=e,this.Be=new Map,this.ke=Fr(),this.qe=Y_(),this.Qe=new Je(Pe)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:oe()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(wp(s))if(r===0){const o=new ne(s.path);this.Ue(n,o,Bt.newNoDocument(o,le.min()))}else Me(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=ys(r).toUint8Array()}catch(u){if(u instanceof UT)return ko("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new ig(o,i,s)}catch(u){return ko(u instanceof La?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&wp(l.target)){const u=new ne(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,Bt.newNoDocument(u,e))}s.be&&(n.set(o,s.Ce()),s.ve())}});let r=_e();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new $h(e,n,this.Qe,this.ke,r);return this.ke=Fr(),this.qe=Y_(),this.Qe=new Je(Pe),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Q_,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new kt(Pe),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||X("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Q_),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Y_(){return new Je(ne.comparator)}function X_(){return new Je(ne.comparator)}const qO={asc:"ASCENDING",desc:"DESCENDING"},KO={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},GO={and:"AND",or:"OR"};class QO{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ip(t,e){return t.useProto3Json||Mh(e)?e:{value:e}}function th(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function cI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function YO(t,e){return th(t,e.toTimestamp())}function fr(t){return Me(!!t),le.fromTimestamp(function(n){const r=Ci(n);return new yt(r.seconds,r.nanos)}(t))}function sg(t,e){return Sp(t,e).canonicalString()}function Sp(t,e){const n=function(i){return new $e(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function hI(t){const e=$e.fromString(t);return Me(gI(e)),e}function Rp(t,e){return sg(t.databaseId,e.path)}function Wd(t,e){const n=hI(e);if(n.get(1)!==t.databaseId.projectId)throw new Q($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Q($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ne(fI(n))}function dI(t,e){return sg(t.databaseId,e)}function XO(t){const e=hI(t);return e.length===4?$e.emptyPath():fI(e)}function Ap(t){return new $e(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function fI(t){return Me(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function J_(t,e,n){return{name:Rp(t,e),fields:n.value.mapValue.fields}}function JO(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:oe()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(Me(d===void 0||typeof d=="string"),bt.fromBase64String(d||"")):(Me(d===void 0||d instanceof Buffer||d instanceof Uint8Array),bt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const d=c.code===void 0?$.UNKNOWN:aI(c.code);return new Q(d,c.message||"")}(o);n=new uI(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Wd(t,r.document.name),s=fr(r.document.updateTime),o=r.document.createTime?fr(r.document.createTime):le.min(),l=new en({mapValue:{fields:r.document.fields}}),u=Bt.newFoundDocument(i,s,o,l),c=r.targetIds||[],d=r.removedTargetIds||[];n=new cc(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Wd(t,r.document),s=r.readTime?fr(r.readTime):le.min(),o=Bt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new cc([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Wd(t,r.document),s=r.removedTargetIds||[];n=new cc([],s,i,null)}else{if(!("filter"in e))return oe();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new zO(i,s),l=r.targetId;n=new lI(l,o)}}return n}function ZO(t,e){let n;if(e instanceof Gl)n={update:J_(t,e.key,e.value)};else if(e instanceof oI)n={delete:Rp(t,e.key)};else if(e instanceof Mi)n={update:J_(t,e.key,e.data),updateMask:lL(e.fieldMask)};else{if(!(e instanceof UO))return oe();n={verify:Rp(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Zc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof xl)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Nl)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof eh)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw oe()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:YO(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:oe()}(t,e.precondition)),n}function eL(t,e){return t&&t.length>0?(Me(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?fr(i.updateTime):fr(s);return o.isEqual(le.min())&&(o=fr(s)),new LO(o,i.transformResults||[])}(n,e))):[]}function tL(t,e){return{documents:[dI(t,e.path)]}}function nL(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=dI(t,i);const s=function(c){if(c.length!==0)return mI(Kn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:zs(m.field),direction:sL(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Ip(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function rL(t){let e=XO(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Me(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(f){const m=pI(f);return m instanceof Kn&&$T(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(m=>function(S){return new kl($s(S.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(f){let m;return m=typeof f=="object"?f.value:f,Mh(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(f){const m=!!f.before,E=f.values||[];return new Jc(E,m)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const m=!f.before,E=f.values||[];return new Jc(E,m)}(n.endAt)),TO(e,i,o,s,l,"F",u,c)}function iL(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return oe()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function pI(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=$s(n.unaryFilter.field);return dt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=$s(n.unaryFilter.field);return dt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=$s(n.unaryFilter.field);return dt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=$s(n.unaryFilter.field);return dt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return oe()}}(t):t.fieldFilter!==void 0?function(n){return dt.create($s(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return oe()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Kn.create(n.compositeFilter.filters.map(r=>pI(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return oe()}}(n.compositeFilter.op))}(t):oe()}function sL(t){return qO[t]}function oL(t){return KO[t]}function aL(t){return GO[t]}function zs(t){return{fieldPath:t.canonicalString()}}function $s(t){return Pt.fromServerFormat(t.fieldPath)}function mI(t){return t instanceof dt?function(n){if(n.op==="=="){if(U_(n.value))return{unaryFilter:{field:zs(n.field),op:"IS_NAN"}};if(V_(n.value))return{unaryFilter:{field:zs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(U_(n.value))return{unaryFilter:{field:zs(n.field),op:"IS_NOT_NAN"}};if(V_(n.value))return{unaryFilter:{field:zs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:zs(n.field),op:oL(n.op),value:n.value}}}(t):t instanceof Kn?function(n){const r=n.getFilters().map(i=>mI(i));return r.length===1?r[0]:{compositeFilter:{op:aL(n.op),filters:r}}}(t):oe()}function lL(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function gI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class ci{constructor(e,n,r,i,s=le.min(),o=le.min(),l=bt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new ci(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ci(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ci(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ci(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class uL{constructor(e){this.ct=e}}function cL(t){const e=rL({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Tp(e,e.limit,"L"):e}/**
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
 */class hL{constructor(){this.an=new dL}addToCollectionParentIndex(e,n){return this.an.add(n),B.resolve()}getCollectionParents(e,n){return B.resolve(this.an.getEntries(n))}addFieldIndex(e,n){return B.resolve()}deleteFieldIndex(e,n){return B.resolve()}deleteAllFieldIndexes(e){return B.resolve()}createTargetIndexes(e,n){return B.resolve()}getDocumentsMatchingTarget(e,n){return B.resolve(null)}getIndexType(e,n){return B.resolve(0)}getFieldIndexes(e,n){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,n){return B.resolve(Pi.min())}getMinOffsetFromCollectionGroup(e,n){return B.resolve(Pi.min())}updateCollectionGroup(e,n,r){return B.resolve()}updateIndexEntries(e,n){return B.resolve()}}class dL{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new kt($e.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new kt($e.comparator)).toArray()}}/**
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
 */class Do{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static Ln(){return new Do(0)}static Bn(){return new Do(-1)}}/**
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
 */class fL{constructor(){this.changes=new qo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Bt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?B.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class pL{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class mL{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Xa(r.mutation,i,fn.empty(),yt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,_e()).next(()=>r))}getLocalViewOfDocuments(e,n,r=_e()){const i=Zi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Oa();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Zi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,_e()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Fr();const o=Ya(),l=function(){return Ya()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof Mi)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),Xa(d.mutation,c,d.mutation.getFieldMask(),yt.now())):o.set(c.key,fn.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var f;return l.set(c,new pL(d,(f=o.get(c))!==null&&f!==void 0?f:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Ya();let i=new Je((o,l)=>o-l),s=_e();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||fn.empty();d=l.applyToLocalView(c,d),r.set(u,d);const f=(i.get(l.batchId)||_e()).add(u);i=i.insert(l.batchId,f)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,d=u.value,f=XT();d.forEach(m=>{if(!s.has(m)){const E=iI(n.get(m),r.get(m));E!==null&&f.set(m,E),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return B.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return ne.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):qT(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):B.resolve(Zi());let l=-1,u=s;return o.next(c=>B.forEach(c,(d,f)=>(l<f.largestBatchId&&(l=f.largestBatchId),s.get(d)?B.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,_e())).next(d=>({batchId:l,changes:YT(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ne(n)).next(r=>{let i=Oa();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Oa();return this.indexManager.getCollectionParents(e,s).next(l=>B.forEach(l,u=>{const c=function(f,m){return new Wo(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,Bt.newInvalidDocument(d)))});let l=Oa();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&Xa(d.mutation,c,fn.empty(),yt.now()),Fh(n,c)&&(l=l.insert(u,c))}),l})}}/**
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
 */class gL{constructor(e){this.serializer=e,this.lr=new Map,this.hr=new Map}getBundleMetadata(e,n){return B.resolve(this.lr.get(n))}saveBundleMetadata(e,n){return this.lr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:fr(i.createTime)}}(n)),B.resolve()}getNamedQuery(e,n){return B.resolve(this.hr.get(n))}saveNamedQuery(e,n){return this.hr.set(n.name,function(i){return{name:i.name,query:cL(i.bundledQuery),readTime:fr(i.readTime)}}(n)),B.resolve()}}/**
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
 */class yL{constructor(){this.overlays=new Je(ne.comparator),this.Pr=new Map}getOverlay(e,n){return B.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Zi();return B.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),B.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Pr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Pr.delete(r)),B.resolve()}getOverlaysForCollection(e,n,r){const i=Zi(),s=n.length+1,o=new ne(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return B.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Je((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=Zi(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const l=Zi(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>l.set(c,d)),!(l.size()>=i)););return B.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Pr.get(i.largestBatchId).delete(r.key);this.Pr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new jO(n,r));let s=this.Pr.get(n);s===void 0&&(s=_e(),this.Pr.set(n,s)),this.Pr.set(n,s.add(r.key))}}/**
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
 */class vL{constructor(){this.sessionToken=bt.EMPTY_BYTE_STRING}getSessionToken(e){return B.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,B.resolve()}}/**
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
 */class og{constructor(){this.Ir=new kt(_t.Tr),this.Er=new kt(_t.dr)}isEmpty(){return this.Ir.isEmpty()}addReference(e,n){const r=new _t(e,n);this.Ir=this.Ir.add(r),this.Er=this.Er.add(r)}Ar(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Rr(new _t(e,n))}Vr(e,n){e.forEach(r=>this.removeReference(r,n))}mr(e){const n=new ne(new $e([])),r=new _t(n,e),i=new _t(n,e+1),s=[];return this.Er.forEachInRange([r,i],o=>{this.Rr(o),s.push(o.key)}),s}gr(){this.Ir.forEach(e=>this.Rr(e))}Rr(e){this.Ir=this.Ir.delete(e),this.Er=this.Er.delete(e)}pr(e){const n=new ne(new $e([])),r=new _t(n,e),i=new _t(n,e+1);let s=_e();return this.Er.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new _t(e,0),r=this.Ir.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class _t{constructor(e,n){this.key=e,this.yr=n}static Tr(e,n){return ne.comparator(e.key,n.key)||Pe(e.yr,n.yr)}static dr(e,n){return Pe(e.yr,n.yr)||ne.comparator(e.key,n.key)}}/**
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
 */class _L{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.wr=1,this.Sr=new kt(_t.Tr)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new FO(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Sr=this.Sr.add(new _t(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return B.resolve(o)}lookupMutationBatch(e,n){return B.resolve(this.br(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Dr(r),s=i<0?0:i;return B.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?-1:this.wr-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new _t(n,0),i=new _t(n,Number.POSITIVE_INFINITY),s=[];return this.Sr.forEachInRange([r,i],o=>{const l=this.br(o.yr);s.push(l)}),B.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new kt(Pe);return n.forEach(i=>{const s=new _t(i,0),o=new _t(i,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([s,o],l=>{r=r.add(l.yr)})}),B.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;ne.isDocumentKey(s)||(s=s.child(""));const o=new _t(new ne(s),0);let l=new kt(Pe);return this.Sr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.yr)),!0)},o),B.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.br(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Me(this.vr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Sr;return B.forEach(n.mutations,i=>{const s=new _t(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Sr=r})}xn(e){}containsKey(e,n){const r=new _t(n,0),i=this.Sr.firstAfterOrEqual(r);return B.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}vr(e,n){return this.Dr(e)}Dr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}br(e){const n=this.Dr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class wL{constructor(e){this.Fr=e,this.docs=function(){return new Je(ne.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Fr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return B.resolve(r?r.document.mutableCopy():Bt.newInvalidDocument(n))}getEntries(e,n){let r=Fr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Bt.newInvalidDocument(i))}),B.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Fr();const o=n.path,l=new ne(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||iO(rO(d),r)<=0||(i.has(d.key)||Fh(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return B.resolve(s)}getAllFromCollectionGroup(e,n,r,i){oe()}Mr(e,n){return B.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new EL(this)}getSize(e){return B.resolve(this.size)}}class EL extends fL{constructor(e){super(),this.ur=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ur.addEntry(e,i)):this.ur.removeEntry(r)}),B.waitFor(n)}getFromCache(e,n){return this.ur.getEntry(e,n)}getAllFromCache(e,n){return this.ur.getEntries(e,n)}}/**
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
 */class TL{constructor(e){this.persistence=e,this.Or=new qo(n=>tg(n),ng),this.lastRemoteSnapshotVersion=le.min(),this.highestTargetId=0,this.Nr=0,this.Lr=new og,this.targetCount=0,this.Br=Do.Ln()}forEachTarget(e,n){return this.Or.forEach((r,i)=>n(i)),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.Nr)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Nr&&(this.Nr=n),B.resolve()}Qn(e){this.Or.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Br=new Do(n),this.highestTargetId=n),e.sequenceNumber>this.Nr&&(this.Nr=e.sequenceNumber)}addTargetData(e,n){return this.Qn(n),this.targetCount+=1,B.resolve()}updateTargetData(e,n){return this.Qn(n),B.resolve()}removeTargetData(e,n){return this.Or.delete(n.target),this.Lr.mr(n.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Or.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Or.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),B.waitFor(s).next(()=>i)}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,n){const r=this.Or.get(n)||null;return B.resolve(r)}addMatchingKeys(e,n,r){return this.Lr.Ar(n,r),B.resolve()}removeMatchingKeys(e,n,r){this.Lr.Vr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),B.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Lr.mr(n),B.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Lr.pr(n);return B.resolve(r)}containsKey(e,n){return B.resolve(this.Lr.containsKey(n))}}/**
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
 */class IL{constructor(e,n){this.kr={},this.overlays={},this.qr=new Xm(0),this.Qr=!1,this.Qr=!0,this.Kr=new vL,this.referenceDelegate=e(this),this.$r=new TL(this),this.indexManager=new hL,this.remoteDocumentCache=function(i){return new wL(i)}(r=>this.referenceDelegate.Ur(r)),this.serializer=new uL(n),this.Wr=new gL(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new yL,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.kr[e.toKey()];return r||(r=new _L(n,this.referenceDelegate),this.kr[e.toKey()]=r),r}getGlobalsCache(){return this.Kr}getTargetCache(){return this.$r}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Wr}runTransaction(e,n,r){X("MemoryPersistence","Starting transaction:",e);const i=new SL(this.qr.next());return this.referenceDelegate.Gr(),r(i).next(s=>this.referenceDelegate.zr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}jr(e,n){return B.or(Object.values(this.kr).map(r=>()=>r.containsKey(e,n)))}}class SL extends oO{constructor(e){super(),this.currentSequenceNumber=e}}class ag{constructor(e){this.persistence=e,this.Hr=new og,this.Jr=null}static Yr(e){return new ag(e)}get Zr(){if(this.Jr)return this.Jr;throw oe()}addReference(e,n,r){return this.Hr.addReference(r,n),this.Zr.delete(r.toString()),B.resolve()}removeReference(e,n,r){return this.Hr.removeReference(r,n),this.Zr.add(r.toString()),B.resolve()}markPotentiallyOrphaned(e,n){return this.Zr.add(n.toString()),B.resolve()}removeTarget(e,n){this.Hr.mr(n.targetId).forEach(i=>this.Zr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Zr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Gr(){this.Jr=new Set}zr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.Zr,r=>{const i=ne.fromPath(r);return this.Xr(e,i).next(s=>{s||n.removeEntry(i,le.min())})}).next(()=>(this.Jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Xr(e,n).next(r=>{r?this.Zr.delete(n.toString()):this.Zr.add(n.toString())})}Ur(e){return 0}Xr(e,n){return B.or([()=>B.resolve(this.Hr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.jr(e,n)])}}/**
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
 */class lg{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Ki=r,this.$i=i}static Ui(e,n){let r=_e(),i=_e();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new lg(e,n.fromCache,r,i)}}/**
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
 */class RL{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class AL{constructor(){this.Wi=!1,this.Gi=!1,this.zi=100,this.ji=function(){return mx()?8:aO(Nt())>0?6:4}()}initialize(e,n){this.Hi=e,this.indexManager=n,this.Wi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Yi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new RL;return this.Zi(e,n,o).next(l=>{if(s.result=l,this.Gi)return this.Xi(e,n,o,l.size)})}).next(()=>s.result)}Xi(e,n,r,i){return r.documentReadCount<this.zi?(Ia()<=we.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",js(n),"since it only creates cache indexes for collection contains","more than or equal to",this.zi,"documents"),B.resolve()):(Ia()<=we.DEBUG&&X("QueryEngine","Query:",js(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ji*i?(Ia()<=we.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",js(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,hr(n))):B.resolve())}Ji(e,n){if($_(n))return B.resolve(null);let r=hr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Tp(n,null,"F"),r=hr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=_e(...s);return this.Hi.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.es(n,l);return this.ts(n,c,o,u.readTime)?this.Ji(e,Tp(n,null,"F")):this.ns(e,c,n,u)}))})))}Yi(e,n,r,i){return $_(n)||i.isEqual(le.min())?B.resolve(null):this.Hi.getDocuments(e,r).next(s=>{const o=this.es(n,s);return this.ts(n,o,r,i)?B.resolve(null):(Ia()<=we.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),js(n)),this.ns(e,o,n,nO(i,-1)).next(l=>l))})}es(e,n){let r=new kt(GT(e));return n.forEach((i,s)=>{Fh(e,s)&&(r=r.add(s))}),r}ts(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Zi(e,n,r){return Ia()<=we.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",js(n)),this.Hi.getDocumentsMatchingQuery(e,n,Pi.min(),r)}ns(e,n,r,i){return this.Hi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class PL{constructor(e,n,r,i){this.persistence=e,this.rs=n,this.serializer=i,this.ss=new Je(Pe),this.os=new qo(s=>tg(s),ng),this._s=new Map,this.us=e.getRemoteDocumentCache(),this.$r=e.getTargetCache(),this.Wr=e.getBundleCache(),this.cs(r)}cs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new mL(this.us,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.us.setIndexManager(this.indexManager),this.rs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ss))}}function CL(t,e,n,r){return new PL(t,e,n,r)}async function yI(t,e){const n=ue(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.cs(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=_e();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){l.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({ls:c,removedBatchIds:o,addedBatchIds:l}))})})}function kL(t,e){const n=ue(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.us.newChangeBuffer({trackRemovals:!0});return function(l,u,c,d){const f=c.batch,m=f.keys();let E=B.resolve();return m.forEach(S=>{E=E.next(()=>d.getEntry(u,S)).next(C=>{const b=c.docVersions.get(S);Me(b!==null),C.version.compareTo(b)<0&&(f.applyToRemoteDocument(C,c),C.isValidDocument()&&(C.setReadTime(c.commitVersion),d.addEntry(C)))})}),E.next(()=>l.mutationQueue.removeMutationBatch(u,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=_e();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function vI(t){const e=ue(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.$r.getLastRemoteSnapshotVersion(n))}function xL(t,e){const n=ue(t),r=e.snapshotVersion;let i=n.ss;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.us.newChangeBuffer({trackRemovals:!0});i=n.ss;const l=[];e.targetChanges.forEach((d,f)=>{const m=i.get(f);if(!m)return;l.push(n.$r.removeMatchingKeys(s,d.removedDocuments,f).next(()=>n.$r.addMatchingKeys(s,d.addedDocuments,f)));let E=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?E=E.withResumeToken(bt.EMPTY_BYTE_STRING,le.min()).withLastLimboFreeSnapshotVersion(le.min()):d.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(d.resumeToken,r)),i=i.insert(f,E),function(C,b,I){return C.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(m,E,d)&&l.push(n.$r.updateTargetData(s,E))});let u=Fr(),c=_e();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),l.push(NL(s,o,e.documentUpdates).next(d=>{u=d.hs,c=d.Ps})),!r.isEqual(le.min())){const d=n.$r.getLastRemoteSnapshotVersion(s).next(f=>n.$r.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(d)}return B.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.ss=i,s))}function NL(t,e,n){let r=_e(),i=_e();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Fr();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(le.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):X("LocalStore","Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{hs:o,Ps:i}})}function bL(t,e){const n=ue(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function DL(t,e){const n=ue(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.$r.getTargetData(r,e).next(s=>s?(i=s,B.resolve(i)):n.$r.allocateTargetId(r).next(o=>(i=new ci(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.$r.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ss.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ss=n.ss.insert(r.targetId,r),n.os.set(e,r.targetId)),r})}async function Pp(t,e,n){const r=ue(t),i=r.ss.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Kl(o))throw o;X("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ss=r.ss.remove(e),r.os.delete(i.target)}function Z_(t,e,n){const r=ue(t);let i=le.min(),s=_e();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const f=ue(u),m=f.os.get(d);return m!==void 0?B.resolve(f.ss.get(m)):f.$r.getTargetData(c,d)}(r,o,hr(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.$r.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.rs.getDocumentsMatchingQuery(o,e,n?i:le.min(),n?s:_e())).next(l=>(OL(r,SO(e),l),{documents:l,Is:s})))}function OL(t,e,n){let r=t._s.get(e)||le.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t._s.set(e,r)}class e0{constructor(){this.activeTargetIds=xO()}Vs(e){this.activeTargetIds=this.activeTargetIds.add(e)}fs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Rs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class LL{constructor(){this.io=new e0,this.so={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.io.Vs(e),this.so[e]||"not-current"}updateQueryState(e,n,r){this.so[e]=n}removeLocalQueryTarget(e){this.io.fs(e)}isLocalQueryTarget(e){return this.io.activeTargetIds.has(e)}clearQueryState(e){delete this.so[e]}getAllActiveQueryTargets(){return this.io.activeTargetIds}isActiveQueryTarget(e){return this.io.activeTargetIds.has(e)}start(){return this.io=new e0,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class ML{oo(e){}shutdown(){}}/**
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
 */class t0{constructor(){this._o=()=>this.ao(),this.uo=()=>this.co(),this.lo=[],this.ho()}oo(e){this.lo.push(e)}shutdown(){window.removeEventListener("online",this._o),window.removeEventListener("offline",this.uo)}ho(){window.addEventListener("online",this._o),window.addEventListener("offline",this.uo)}ao(){X("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.lo)e(0)}co(){X("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.lo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Mu=null;function qd(){return Mu===null?Mu=function(){return 268435456+Math.round(2147483648*Math.random())}():Mu++,"0x"+Mu.toString(16)}/**
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
 */const VL={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class UL{constructor(e){this.Po=e.Po,this.Io=e.Io}To(e){this.Eo=e}Ao(e){this.Ro=e}Vo(e){this.mo=e}onMessage(e){this.fo=e}close(){this.Io()}send(e){this.Po(e)}po(){this.Eo()}yo(){this.Ro()}wo(e){this.mo(e)}So(e){this.fo(e)}}/**
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
 */const jt="WebChannelConnection";class FL extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.bo=r+"://"+n.host,this.Do=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get vo(){return!1}Fo(n,r,i,s,o){const l=qd(),u=this.Mo(n,r.toUriEncodedString());X("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const c={"google-cloud-resource-prefix":this.Do,"x-goog-request-params":this.Co};return this.xo(c,s,o),this.Oo(n,u,c,i).then(d=>(X("RestConnection",`Received RPC '${n}' ${l}: `,d),d),d=>{throw ko("RestConnection",`RPC '${n}' ${l} failed with error: `,d,"url: ",u,"request:",i),d})}No(n,r,i,s,o,l){return this.Fo(n,r,i,s,o)}xo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ho}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}Mo(n,r){const i=VL[n];return`${this.bo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Oo(e,n,r,i){const s=qd();return new Promise((o,l)=>{const u=new kT;u.setWithCredentials(!0),u.listenOnce(NT.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case ac.NO_ERROR:const d=u.getResponseJson();X(jt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case ac.TIMEOUT:X(jt,`RPC '${e}' ${s} timed out`),l(new Q($.DEADLINE_EXCEEDED,"Request time out"));break;case ac.HTTP_ERROR:const f=u.getStatus();if(X(jt,`RPC '${e}' ${s} failed with status:`,f,"response text:",u.getResponseText()),f>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const E=m==null?void 0:m.error;if(E&&E.status&&E.message){const S=function(b){const I=b.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(I)>=0?I:$.UNKNOWN}(E.status);l(new Q(S,E.message))}else l(new Q($.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new Q($.UNAVAILABLE,"Connection failed."));break;default:oe()}}finally{X(jt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);X(jt,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Lo(e,n,r){const i=qd(),s=[this.bo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=OT(),l=DT(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.xmlHttpFactory=new xT({})),this.xo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");X(jt,`Creating RPC '${e}' stream ${i}: ${d}`,u);const f=o.createWebChannel(d,u);let m=!1,E=!1;const S=new UL({Po:b=>{E?X(jt,`Not sending because RPC '${e}' stream ${i} is closed:`,b):(m||(X(jt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),m=!0),X(jt,`RPC '${e}' stream ${i} sending:`,b),f.send(b))},Io:()=>f.close()}),C=(b,I,v)=>{b.listen(I,R=>{try{v(R)}catch(O){setTimeout(()=>{throw O},0)}})};return C(f,Da.EventType.OPEN,()=>{E||(X(jt,`RPC '${e}' stream ${i} transport opened.`),S.po())}),C(f,Da.EventType.CLOSE,()=>{E||(E=!0,X(jt,`RPC '${e}' stream ${i} transport closed`),S.wo())}),C(f,Da.EventType.ERROR,b=>{E||(E=!0,ko(jt,`RPC '${e}' stream ${i} transport errored:`,b),S.wo(new Q($.UNAVAILABLE,"The operation could not be completed")))}),C(f,Da.EventType.MESSAGE,b=>{var I;if(!E){const v=b.data[0];Me(!!v);const R=v,O=R.error||((I=R[0])===null||I===void 0?void 0:I.error);if(O){X(jt,`RPC '${e}' stream ${i} received error:`,O);const F=O.status;let k=function(T){const _=at[T];if(_!==void 0)return aI(_)}(F),w=O.message;k===void 0&&(k=$.INTERNAL,w="Unknown error status: "+F+" with message "+O.message),E=!0,S.wo(new Q(k,w)),f.close()}else X(jt,`RPC '${e}' stream ${i} received:`,v),S.So(v)}}),C(l,bT.STAT_EVENT,b=>{b.stat===gp.PROXY?X(jt,`RPC '${e}' stream ${i} detected buffering proxy`):b.stat===gp.NOPROXY&&X(jt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{S.yo()},0),S}}function Kd(){return typeof document<"u"?document:null}/**
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
 */function Bh(t){return new QO(t,!0)}/**
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
 */class _I{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ai=e,this.timerId=n,this.Bo=r,this.ko=i,this.qo=s,this.Qo=0,this.Ko=null,this.$o=Date.now(),this.reset()}reset(){this.Qo=0}Uo(){this.Qo=this.qo}Wo(e){this.cancel();const n=Math.floor(this.Qo+this.Go()),r=Math.max(0,Date.now()-this.$o),i=Math.max(0,n-r);i>0&&X("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Qo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Ko=this.ai.enqueueAfterDelay(this.timerId,i,()=>(this.$o=Date.now(),e())),this.Qo*=this.ko,this.Qo<this.Bo&&(this.Qo=this.Bo),this.Qo>this.qo&&(this.Qo=this.qo)}zo(){this.Ko!==null&&(this.Ko.skipDelay(),this.Ko=null)}cancel(){this.Ko!==null&&(this.Ko.cancel(),this.Ko=null)}Go(){return(Math.random()-.5)*this.Qo}}/**
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
 */class wI{constructor(e,n,r,i,s,o,l,u){this.ai=e,this.jo=r,this.Ho=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Jo=0,this.Yo=null,this.Zo=null,this.stream=null,this.Xo=0,this.e_=new _I(e,n)}t_(){return this.state===1||this.state===5||this.n_()}n_(){return this.state===2||this.state===3}start(){this.Xo=0,this.state!==4?this.auth():this.r_()}async stop(){this.t_()&&await this.close(0)}i_(){this.state=0,this.e_.reset()}s_(){this.n_()&&this.Yo===null&&(this.Yo=this.ai.enqueueAfterDelay(this.jo,6e4,()=>this.o_()))}__(e){this.a_(),this.stream.send(e)}async o_(){if(this.n_())return this.close(0)}a_(){this.Yo&&(this.Yo.cancel(),this.Yo=null)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}async close(e,n){this.a_(),this.u_(),this.e_.cancel(),this.Jo++,e!==4?this.e_.reset():n&&n.code===$.RESOURCE_EXHAUSTED?(Ur(n.toString()),Ur("Using maximum backoff delay to prevent overloading the backend."),this.e_.Uo()):n&&n.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.c_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Vo(n)}c_(){}auth(){this.state=1;const e=this.l_(this.Jo),n=this.Jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Jo===n&&this.h_(r,i)},r=>{e(()=>{const i=new Q($.UNKNOWN,"Fetching auth token failed: "+r.message);return this.P_(i)})})}h_(e,n){const r=this.l_(this.Jo);this.stream=this.I_(e,n),this.stream.To(()=>{r(()=>this.listener.To())}),this.stream.Ao(()=>{r(()=>(this.state=2,this.Zo=this.ai.enqueueAfterDelay(this.Ho,1e4,()=>(this.n_()&&(this.state=3),Promise.resolve())),this.listener.Ao()))}),this.stream.Vo(i=>{r(()=>this.P_(i))}),this.stream.onMessage(i=>{r(()=>++this.Xo==1?this.T_(i):this.onNext(i))})}r_(){this.state=5,this.e_.Wo(async()=>{this.state=0,this.start()})}P_(e){return X("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}l_(e){return n=>{this.ai.enqueueAndForget(()=>this.Jo===e?n():(X("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class jL extends wI{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}I_(e,n){return this.connection.Lo("Listen",e,n)}T_(e){return this.onNext(e)}onNext(e){this.e_.reset();const n=JO(this.serializer,e),r=function(s){if(!("targetChange"in s))return le.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?le.min():o.readTime?fr(o.readTime):le.min()}(e);return this.listener.E_(n,r)}d_(e){const n={};n.database=Ap(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=wp(u)?{documents:tL(s,u)}:{query:nL(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=cI(s,o.resumeToken);const c=Ip(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(le.min())>0){l.readTime=th(s,o.snapshotVersion.toTimestamp());const c=Ip(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=iL(this.serializer,e);r&&(n.labels=r),this.__(n)}A_(e){const n={};n.database=Ap(this.serializer),n.removeTarget=e,this.__(n)}}class zL extends wI{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get R_(){return this.Xo>0}start(){this.lastStreamToken=void 0,super.start()}c_(){this.R_&&this.V_([])}I_(e,n){return this.connection.Lo("Write",e,n)}T_(e){return Me(!!e.streamToken),this.lastStreamToken=e.streamToken,Me(!e.writeResults||e.writeResults.length===0),this.listener.m_()}onNext(e){Me(!!e.streamToken),this.lastStreamToken=e.streamToken,this.e_.reset();const n=eL(e.writeResults,e.commitTime),r=fr(e.commitTime);return this.listener.f_(r,n)}g_(){const e={};e.database=Ap(this.serializer),this.__(e)}V_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>ZO(this.serializer,r))};this.__(n)}}/**
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
 */class $L extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.p_=!1}y_(){if(this.p_)throw new Q($.FAILED_PRECONDITION,"The client has already been terminated.")}Fo(e,n,r,i){return this.y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Fo(e,Sp(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new Q($.UNKNOWN,s.toString())})}No(e,n,r,i,s){return this.y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.No(e,Sp(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Q($.UNKNOWN,o.toString())})}terminate(){this.p_=!0,this.connection.terminate()}}class BL{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.w_=0,this.S_=null,this.b_=!0}D_(){this.w_===0&&(this.C_("Unknown"),this.S_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.S_=null,this.v_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}F_(e){this.state==="Online"?this.C_("Unknown"):(this.w_++,this.w_>=1&&(this.M_(),this.v_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.M_(),this.w_=0,e==="Online"&&(this.b_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}v_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.b_?(Ur(n),this.b_=!1):X("OnlineStateTracker",n)}M_(){this.S_!==null&&(this.S_.cancel(),this.S_=null)}}/**
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
 */class HL{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.x_=[],this.O_=new Map,this.N_=new Set,this.L_=[],this.B_=s,this.B_.oo(o=>{r.enqueueAndForget(async()=>{As(this)&&(X("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=ue(u);c.N_.add(4),await Yl(c),c.k_.set("Unknown"),c.N_.delete(4),await Hh(c)}(this))})}),this.k_=new BL(r,i)}}async function Hh(t){if(As(t))for(const e of t.L_)await e(!0)}async function Yl(t){for(const e of t.L_)await e(!1)}function EI(t,e){const n=ue(t);n.O_.has(e.targetId)||(n.O_.set(e.targetId,e),dg(n)?hg(n):Ko(n).n_()&&cg(n,e))}function ug(t,e){const n=ue(t),r=Ko(n);n.O_.delete(e),r.n_()&&TI(n,e),n.O_.size===0&&(r.n_()?r.s_():As(n)&&n.k_.set("Unknown"))}function cg(t,e){if(t.q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(le.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ko(t).d_(e)}function TI(t,e){t.q_.xe(e),Ko(t).A_(e)}function hg(t){t.q_=new WO({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.O_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Ko(t).start(),t.k_.D_()}function dg(t){return As(t)&&!Ko(t).t_()&&t.O_.size>0}function As(t){return ue(t).N_.size===0}function II(t){t.q_=void 0}async function WL(t){t.k_.set("Online")}async function qL(t){t.O_.forEach((e,n)=>{cg(t,e)})}async function KL(t,e){II(t),dg(t)?(t.k_.F_(e),hg(t)):t.k_.set("Unknown")}async function GL(t,e,n){if(t.k_.set("Online"),e instanceof uI&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.O_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.O_.delete(l),i.q_.removeTarget(l))}(t,e)}catch(r){X("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await nh(t,r)}else if(e instanceof cc?t.q_.Ke(e):e instanceof lI?t.q_.He(e):t.q_.We(e),!n.isEqual(le.min()))try{const r=await vI(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.q_.rt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.O_.get(c);d&&s.O_.set(c,d.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const d=s.O_.get(u);if(!d)return;s.O_.set(u,d.withResumeToken(bt.EMPTY_BYTE_STRING,d.snapshotVersion)),TI(s,u);const f=new ci(d.target,u,c,d.sequenceNumber);cg(s,f)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){X("RemoteStore","Failed to raise snapshot:",r),await nh(t,r)}}async function nh(t,e,n){if(!Kl(e))throw e;t.N_.add(1),await Yl(t),t.k_.set("Offline"),n||(n=()=>vI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{X("RemoteStore","Retrying IndexedDB access"),await n(),t.N_.delete(1),await Hh(t)})}function SI(t,e){return e().catch(n=>nh(t,n,e))}async function Wh(t){const e=ue(t),n=ki(e);let r=e.x_.length>0?e.x_[e.x_.length-1].batchId:-1;for(;QL(e);)try{const i=await bL(e.localStore,r);if(i===null){e.x_.length===0&&n.s_();break}r=i.batchId,YL(e,i)}catch(i){await nh(e,i)}RI(e)&&AI(e)}function QL(t){return As(t)&&t.x_.length<10}function YL(t,e){t.x_.push(e);const n=ki(t);n.n_()&&n.R_&&n.V_(e.mutations)}function RI(t){return As(t)&&!ki(t).t_()&&t.x_.length>0}function AI(t){ki(t).start()}async function XL(t){ki(t).g_()}async function JL(t){const e=ki(t);for(const n of t.x_)e.V_(n.mutations)}async function ZL(t,e,n){const r=t.x_.shift(),i=rg.from(r,e,n);await SI(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Wh(t)}async function eM(t,e){e&&ki(t).R_&&await async function(r,i){if(function(o){return $O(o)&&o!==$.ABORTED}(i.code)){const s=r.x_.shift();ki(r).i_(),await SI(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Wh(r)}}(t,e),RI(t)&&AI(t)}async function n0(t,e){const n=ue(t);n.asyncQueue.verifyOperationInProgress(),X("RemoteStore","RemoteStore received new credentials");const r=As(n);n.N_.add(3),await Yl(n),r&&n.k_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.N_.delete(3),await Hh(n)}async function tM(t,e){const n=ue(t);e?(n.N_.delete(2),await Hh(n)):e||(n.N_.add(2),await Yl(n),n.k_.set("Unknown"))}function Ko(t){return t.Q_||(t.Q_=function(n,r,i){const s=ue(n);return s.y_(),new jL(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{To:WL.bind(null,t),Ao:qL.bind(null,t),Vo:KL.bind(null,t),E_:GL.bind(null,t)}),t.L_.push(async e=>{e?(t.Q_.i_(),dg(t)?hg(t):t.k_.set("Unknown")):(await t.Q_.stop(),II(t))})),t.Q_}function ki(t){return t.K_||(t.K_=function(n,r,i){const s=ue(n);return s.y_(),new zL(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{To:()=>Promise.resolve(),Ao:XL.bind(null,t),Vo:eM.bind(null,t),m_:JL.bind(null,t),f_:ZL.bind(null,t)}),t.L_.push(async e=>{e?(t.K_.i_(),await Wh(t)):(await t.K_.stop(),t.x_.length>0&&(X("RemoteStore",`Stopping write stream with ${t.x_.length} pending writes`),t.x_=[]))})),t.K_}/**
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
 */class fg{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Ti,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new fg(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Q($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function pg(t,e){if(Ur("AsyncQueue",`${e}: ${t}`),Kl(t))return new Q($.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class po{constructor(e){this.comparator=e?(n,r)=>e(n,r)||ne.comparator(n.key,r.key):(n,r)=>ne.comparator(n.key,r.key),this.keyedMap=Oa(),this.sortedSet=new Je(this.comparator)}static emptySet(e){return new po(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof po)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new po;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class r0{constructor(){this.U_=new Je(ne.comparator)}track(e){const n=e.doc.key,r=this.U_.get(n);r?e.type!==0&&r.type===3?this.U_=this.U_.insert(n,e):e.type===3&&r.type!==1?this.U_=this.U_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.U_=this.U_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.U_=this.U_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.U_=this.U_.remove(n):e.type===1&&r.type===2?this.U_=this.U_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.U_=this.U_.insert(n,{type:2,doc:e.doc}):oe():this.U_=this.U_.insert(n,e)}W_(){const e=[];return this.U_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Oo{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Oo(e,n,po.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Uh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class nM{constructor(){this.G_=void 0,this.z_=[]}j_(){return this.z_.some(e=>e.H_())}}class rM{constructor(){this.queries=i0(),this.onlineState="Unknown",this.J_=new Set}terminate(){(function(n,r){const i=ue(n),s=i.queries;i.queries=i0(),s.forEach((o,l)=>{for(const u of l.z_)u.onError(r)})})(this,new Q($.ABORTED,"Firestore shutting down"))}}function i0(){return new qo(t=>KT(t),Uh)}async function PI(t,e){const n=ue(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.j_()&&e.H_()&&(r=2):(s=new nM,r=e.H_()?0:1);try{switch(r){case 0:s.G_=await n.onListen(i,!0);break;case 1:s.G_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=pg(o,`Initialization of query '${js(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.z_.push(e),e.Y_(n.onlineState),s.G_&&e.Z_(s.G_)&&mg(n)}async function CI(t,e){const n=ue(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.z_.indexOf(e);o>=0&&(s.z_.splice(o,1),s.z_.length===0?i=e.H_()?0:1:!s.j_()&&e.H_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function iM(t,e){const n=ue(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.z_)l.Z_(i)&&(r=!0);o.G_=i}}r&&mg(n)}function sM(t,e,n){const r=ue(t),i=r.queries.get(e);if(i)for(const s of i.z_)s.onError(n);r.queries.delete(e)}function mg(t){t.J_.forEach(e=>{e.next()})}var Cp,s0;(s0=Cp||(Cp={})).X_="default",s0.Cache="cache";class kI{constructor(e,n,r){this.query=e,this.ea=n,this.ta=!1,this.na=null,this.onlineState="Unknown",this.options=r||{}}Z_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Oo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ta?this.ra(e)&&(this.ea.next(e),n=!0):this.ia(e,this.onlineState)&&(this.sa(e),n=!0),this.na=e,n}onError(e){this.ea.error(e)}Y_(e){this.onlineState=e;let n=!1;return this.na&&!this.ta&&this.ia(this.na,e)&&(this.sa(this.na),n=!0),n}ia(e,n){if(!e.fromCache||!this.H_())return!0;const r=n!=="Offline";return(!this.options.oa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ra(e){if(e.docChanges.length>0)return!0;const n=this.na&&this.na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}sa(e){e=Oo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ta=!0,this.ea.next(e)}H_(){return this.options.source!==Cp.Cache}}/**
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
 */class xI{constructor(e){this.key=e}}class NI{constructor(e){this.key=e}}class oM{constructor(e,n){this.query=e,this.Ia=n,this.Ta=null,this.hasCachedResults=!1,this.current=!1,this.Ea=_e(),this.mutatedKeys=_e(),this.da=GT(e),this.Aa=new po(this.da)}get Ra(){return this.Ia}Va(e,n){const r=n?n.ma:new r0,i=n?n.Aa:this.Aa;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,f)=>{const m=i.get(d),E=Fh(this.query,f)?f:null,S=!!m&&this.mutatedKeys.has(m.key),C=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let b=!1;m&&E?m.data.isEqual(E.data)?S!==C&&(r.track({type:3,doc:E}),b=!0):this.fa(m,E)||(r.track({type:2,doc:E}),b=!0,(u&&this.da(E,u)>0||c&&this.da(E,c)<0)&&(l=!0)):!m&&E?(r.track({type:0,doc:E}),b=!0):m&&!E&&(r.track({type:1,doc:m}),b=!0,(u||c)&&(l=!0)),b&&(E?(o=o.add(E),s=C?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{Aa:o,ma:r,ts:l,mutatedKeys:s}}fa(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Aa;this.Aa=e.Aa,this.mutatedKeys=e.mutatedKeys;const o=e.ma.W_();o.sort((d,f)=>function(E,S){const C=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return oe()}};return C(E)-C(S)}(d.type,f.type)||this.da(d.doc,f.doc)),this.ga(r),i=i!=null&&i;const l=n&&!i?this.pa():[],u=this.Ea.size===0&&this.current&&!i?1:0,c=u!==this.Ta;return this.Ta=u,o.length!==0||c?{snapshot:new Oo(this.query,e.Aa,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),ya:l}:{ya:l}}Y_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Aa:this.Aa,ma:new r0,mutatedKeys:this.mutatedKeys,ts:!1},!1)):{ya:[]}}wa(e){return!this.Ia.has(e)&&!!this.Aa.has(e)&&!this.Aa.get(e).hasLocalMutations}ga(e){e&&(e.addedDocuments.forEach(n=>this.Ia=this.Ia.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ia=this.Ia.delete(n)),this.current=e.current)}pa(){if(!this.current)return[];const e=this.Ea;this.Ea=_e(),this.Aa.forEach(r=>{this.wa(r.key)&&(this.Ea=this.Ea.add(r.key))});const n=[];return e.forEach(r=>{this.Ea.has(r)||n.push(new NI(r))}),this.Ea.forEach(r=>{e.has(r)||n.push(new xI(r))}),n}Sa(e){this.Ia=e.Is,this.Ea=_e();const n=this.Va(e.documents);return this.applyChanges(n,!0)}ba(){return Oo.fromInitialDocuments(this.query,this.Aa,this.mutatedKeys,this.Ta===0,this.hasCachedResults)}}class aM{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class lM{constructor(e){this.key=e,this.Da=!1}}class uM{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.va=new qo(l=>KT(l),Uh),this.Fa=new Map,this.Ma=new Set,this.xa=new Je(ne.comparator),this.Oa=new Map,this.Na=new og,this.La={},this.Ba=new Map,this.ka=Do.Bn(),this.onlineState="Unknown",this.qa=void 0}get isPrimaryClient(){return this.qa===!0}}async function cM(t,e,n=!0){const r=VI(t);let i;const s=r.va.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ba()):i=await bI(r,e,n,!0),i}async function hM(t,e){const n=VI(t);await bI(n,e,!0,!1)}async function bI(t,e,n,r){const i=await DL(t.localStore,hr(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let l;return r&&(l=await dM(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&EI(t.remoteStore,i),l}async function dM(t,e,n,r,i){t.Qa=(f,m,E)=>async function(C,b,I,v){let R=b.view.Va(I);R.ts&&(R=await Z_(C.localStore,b.query,!1).then(({documents:w})=>b.view.Va(w,R)));const O=v&&v.targetChanges.get(b.targetId),F=v&&v.targetMismatches.get(b.targetId)!=null,k=b.view.applyChanges(R,C.isPrimaryClient,O,F);return a0(C,b.targetId,k.ya),k.snapshot}(t,f,m,E);const s=await Z_(t.localStore,e,!0),o=new oM(e,s.Is),l=o.Va(s.documents),u=Ql.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);a0(t,n,c.ya);const d=new aM(e,n,o);return t.va.set(e,d),t.Fa.has(n)?t.Fa.get(n).push(e):t.Fa.set(n,[e]),c.snapshot}async function fM(t,e,n){const r=ue(t),i=r.va.get(e),s=r.Fa.get(i.targetId);if(s.length>1)return r.Fa.set(i.targetId,s.filter(o=>!Uh(o,e))),void r.va.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Pp(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&ug(r.remoteStore,i.targetId),kp(r,i.targetId)}).catch(ql)):(kp(r,i.targetId),await Pp(r.localStore,i.targetId,!0))}async function pM(t,e){const n=ue(t),r=n.va.get(e),i=n.Fa.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),ug(n.remoteStore,r.targetId))}async function mM(t,e,n){const r=TM(t);try{const i=await function(o,l){const u=ue(o),c=yt.now(),d=l.reduce((E,S)=>E.add(S.key),_e());let f,m;return u.persistence.runTransaction("Locally write mutations","readwrite",E=>{let S=Fr(),C=_e();return u.us.getEntries(E,d).next(b=>{S=b,S.forEach((I,v)=>{v.isValidDocument()||(C=C.add(I))})}).next(()=>u.localDocuments.getOverlayedDocuments(E,S)).next(b=>{f=b;const I=[];for(const v of l){const R=VO(v,f.get(v.key).overlayedDocument);R!=null&&I.push(new Mi(v.key,R,FT(R.value.mapValue),dr.exists(!0)))}return u.mutationQueue.addMutationBatch(E,c,I,l)}).next(b=>{m=b;const I=b.applyToLocalDocumentSet(f,C);return u.documentOverlayCache.saveOverlays(E,b.batchId,I)})}).then(()=>({batchId:m.batchId,changes:YT(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.La[o.currentUser.toKey()];c||(c=new Je(Pe)),c=c.insert(l,u),o.La[o.currentUser.toKey()]=c}(r,i.batchId,n),await Xl(r,i.changes),await Wh(r.remoteStore)}catch(i){const s=pg(i,"Failed to persist write");n.reject(s)}}async function DI(t,e){const n=ue(t);try{const r=await xL(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Oa.get(s);o&&(Me(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Da=!0:i.modifiedDocuments.size>0?Me(o.Da):i.removedDocuments.size>0&&(Me(o.Da),o.Da=!1))}),await Xl(n,r,e)}catch(r){await ql(r)}}function o0(t,e,n){const r=ue(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.va.forEach((s,o)=>{const l=o.view.Y_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=ue(o);u.onlineState=l;let c=!1;u.queries.forEach((d,f)=>{for(const m of f.z_)m.Y_(l)&&(c=!0)}),c&&mg(u)}(r.eventManager,e),i.length&&r.Ca.E_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function gM(t,e,n){const r=ue(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Oa.get(e),s=i&&i.key;if(s){let o=new Je(ne.comparator);o=o.insert(s,Bt.newNoDocument(s,le.min()));const l=_e().add(s),u=new $h(le.min(),new Map,new Je(Pe),o,l);await DI(r,u),r.xa=r.xa.remove(s),r.Oa.delete(e),gg(r)}else await Pp(r.localStore,e,!1).then(()=>kp(r,e,n)).catch(ql)}async function yM(t,e){const n=ue(t),r=e.batch.batchId;try{const i=await kL(n.localStore,e);LI(n,r,null),OI(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Xl(n,i)}catch(i){await ql(i)}}async function vM(t,e,n){const r=ue(t);try{const i=await function(o,l){const u=ue(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,l).next(f=>(Me(f!==null),d=f.keys(),u.mutationQueue.removeMutationBatch(c,f))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);LI(r,e,n),OI(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Xl(r,i)}catch(i){await ql(i)}}function OI(t,e){(t.Ba.get(e)||[]).forEach(n=>{n.resolve()}),t.Ba.delete(e)}function LI(t,e,n){const r=ue(t);let i=r.La[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.La[r.currentUser.toKey()]=i}}function kp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Fa.get(e))t.va.delete(r),n&&t.Ca.Ka(r,n);t.Fa.delete(e),t.isPrimaryClient&&t.Na.mr(e).forEach(r=>{t.Na.containsKey(r)||MI(t,r)})}function MI(t,e){t.Ma.delete(e.path.canonicalString());const n=t.xa.get(e);n!==null&&(ug(t.remoteStore,n),t.xa=t.xa.remove(e),t.Oa.delete(n),gg(t))}function a0(t,e,n){for(const r of n)r instanceof xI?(t.Na.addReference(r.key,e),_M(t,r)):r instanceof NI?(X("SyncEngine","Document no longer in limbo: "+r.key),t.Na.removeReference(r.key,e),t.Na.containsKey(r.key)||MI(t,r.key)):oe()}function _M(t,e){const n=e.key,r=n.path.canonicalString();t.xa.get(n)||t.Ma.has(r)||(X("SyncEngine","New document in limbo: "+n),t.Ma.add(r),gg(t))}function gg(t){for(;t.Ma.size>0&&t.xa.size<t.maxConcurrentLimboResolutions;){const e=t.Ma.values().next().value;t.Ma.delete(e);const n=new ne($e.fromString(e)),r=t.ka.next();t.Oa.set(r,new lM(n)),t.xa=t.xa.insert(n,r),EI(t.remoteStore,new ci(hr(Vh(n.path)),r,"TargetPurposeLimboResolution",Xm.oe))}}async function Xl(t,e,n){const r=ue(t),i=[],s=[],o=[];r.va.isEmpty()||(r.va.forEach((l,u)=>{o.push(r.Qa(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const f=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(c){i.push(c);const f=lg.Ui(u.targetId,c);s.push(f)}}))}),await Promise.all(o),r.Ca.E_(i),await async function(u,c){const d=ue(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>B.forEach(c,m=>B.forEach(m.Ki,E=>d.persistence.referenceDelegate.addReference(f,m.targetId,E)).next(()=>B.forEach(m.$i,E=>d.persistence.referenceDelegate.removeReference(f,m.targetId,E)))))}catch(f){if(!Kl(f))throw f;X("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const m=f.targetId;if(!f.fromCache){const E=d.ss.get(m),S=E.snapshotVersion,C=E.withLastLimboFreeSnapshotVersion(S);d.ss=d.ss.insert(m,C)}}}(r.localStore,s))}async function wM(t,e){const n=ue(t);if(!n.currentUser.isEqual(e)){X("SyncEngine","User change. New user:",e.toKey());const r=await yI(n.localStore,e);n.currentUser=e,function(s,o){s.Ba.forEach(l=>{l.forEach(u=>{u.reject(new Q($.CANCELLED,o))})}),s.Ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Xl(n,r.ls)}}function EM(t,e){const n=ue(t),r=n.Oa.get(e);if(r&&r.Da)return _e().add(r.key);{let i=_e();const s=n.Fa.get(e);if(!s)return i;for(const o of s){const l=n.va.get(o);i=i.unionWith(l.view.Ra)}return i}}function VI(t){const e=ue(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=DI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=EM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=gM.bind(null,e),e.Ca.E_=iM.bind(null,e.eventManager),e.Ca.Ka=sM.bind(null,e.eventManager),e}function TM(t){const e=ue(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=yM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=vM.bind(null,e),e}class l0{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Bh(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return CL(this.persistence,new AL,e.initialUser,this.serializer)}createPersistence(e){return new IL(ag.Yr,this.serializer)}createSharedClientState(e){return new LL}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class IM{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>o0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=wM.bind(null,this.syncEngine),await tM(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new rM}()}createDatastore(e){const n=Bh(e.databaseInfo.databaseId),r=function(s){return new FL(s)}(e.databaseInfo);return function(s,o,l,u){return new $L(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new HL(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>o0(this.syncEngine,n,0),function(){return t0.D()?new t0:new ML}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,d){const f=new uM(i,s,o,l,u,c);return d&&(f.qa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=ue(i);X("RemoteStore","RemoteStore shutting down."),s.N_.add(5),await Yl(s),s.B_.shutdown(),s.k_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}/**
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
 */class UI{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Wa(this.observer.next,e)}error(e){this.observer.error?this.Wa(this.observer.error,e):Ur("Uncaught Error in snapshot listener:",e.toString())}Ga(){this.muted=!0}Wa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class SM{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=zt.UNAUTHENTICATED,this.clientId=MT.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{X("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(X("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Q($.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ti;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=pg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Gd(t,e){t.asyncQueue.verifyOperationInProgress(),X("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await yI(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function u0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await AM(t);X("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>n0(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>n0(e.remoteStore,i)),t._onlineComponents=e}function RM(t){return t.name==="FirebaseError"?t.code===$.FAILED_PRECONDITION||t.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function AM(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){X("FirestoreClient","Using user provided OfflineComponentProvider");try{await Gd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!RM(n))throw n;ko("Error using user provided cache. Falling back to memory cache: "+n),await Gd(t,new l0)}}else X("FirestoreClient","Using default OfflineComponentProvider"),await Gd(t,new l0);return t._offlineComponents}async function FI(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(X("FirestoreClient","Using user provided OnlineComponentProvider"),await u0(t,t._uninitializedComponentsProvider._online)):(X("FirestoreClient","Using default OnlineComponentProvider"),await u0(t,new IM))),t._onlineComponents}function PM(t){return FI(t).then(e=>e.syncEngine)}async function xp(t){const e=await FI(t),n=e.eventManager;return n.onListen=cM.bind(null,e.syncEngine),n.onUnlisten=fM.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=hM.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=pM.bind(null,e.syncEngine),n}function CM(t,e,n={}){const r=new Ti;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new UI({next:m=>{o.enqueueAndForget(()=>CI(s,f));const E=m.docs.has(l);!E&&m.fromCache?c.reject(new Q($.UNAVAILABLE,"Failed to get document because the client is offline.")):E&&m.fromCache&&u&&u.source==="server"?c.reject(new Q($.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new kI(Vh(l.path),d,{includeMetadataChanges:!0,oa:!0});return PI(s,f)}(await xp(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function jI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const c0=new Map;/**
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
 */function zI(t,e,n){if(!n)throw new Q($.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function kM(t,e,n,r){if(e===!0&&r===!0)throw new Q($.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function h0(t){if(!ne.isDocumentKey(t))throw new Q($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function d0(t){if(ne.isDocumentKey(t))throw new Q($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function qh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":oe()}function pr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Q($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=qh(t);throw new Q($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class f0{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Q($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Q($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}kM("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=jI((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new Q($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new Q($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new Q($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Kh{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new f0({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Q($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new Q($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new f0(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new KD;switch(r.type){case"firstParty":return new XD(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Q($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=c0.get(n);r&&(X("ComponentProvider","Removing Datastore"),c0.delete(n),r.terminate())}(this),Promise.resolve()}}function xM(t,e,n,r={}){var i;const s=(t=pr(t,Kh))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&ko("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=zt.MOCK_USER;else{l=$1(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new Q($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new zt(c)}t._authCredentials=new GD(new LT(l,u))}}/**
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
 */class Ps{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ps(this.firestore,e,this._query)}}class Wt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ii(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Wt(this.firestore,e,this._key)}}class Ii extends Ps{constructor(e,n,r){super(e,n,Vh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Wt(this.firestore,null,new ne(e))}withConverter(e){return new Ii(this.firestore,e,this._path)}}function p0(t,e,...n){if(t=nt(t),zI("collection","path",e),t instanceof Kh){const r=$e.fromString(e,...n);return d0(r),new Ii(t,null,r)}{if(!(t instanceof Wt||t instanceof Ii))throw new Q($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child($e.fromString(e,...n));return d0(r),new Ii(t.firestore,null,r)}}function yg(t,e,...n){if(t=nt(t),arguments.length===1&&(e=MT.newId()),zI("doc","path",e),t instanceof Kh){const r=$e.fromString(e,...n);return h0(r),new Wt(t,null,new ne(r))}{if(!(t instanceof Wt||t instanceof Ii))throw new Q($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child($e.fromString(e,...n));return h0(r),new Wt(t.firestore,t instanceof Ii?t.converter:null,new ne(r))}}/**
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
 */class NM{constructor(){this._u=Promise.resolve(),this.au=[],this.uu=!1,this.cu=[],this.lu=null,this.hu=!1,this.Pu=!1,this.Iu=[],this.e_=new _I(this,"async_queue_retry"),this.Tu=()=>{const n=Kd();n&&X("AsyncQueue","Visibility state changed to "+n.visibilityState),this.e_.zo()};const e=Kd();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Tu)}get isShuttingDown(){return this.uu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Eu(),this.du(e)}enterRestrictedMode(e){if(!this.uu){this.uu=!0,this.Pu=e||!1;const n=Kd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Tu)}}enqueue(e){if(this.Eu(),this.uu)return new Promise(()=>{});const n=new Ti;return this.du(()=>this.uu&&this.Pu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.au.push(e),this.Au()))}async Au(){if(this.au.length!==0){try{await this.au[0](),this.au.shift(),this.e_.reset()}catch(e){if(!Kl(e))throw e;X("AsyncQueue","Operation failed with retryable error: "+e)}this.au.length>0&&this.e_.Wo(()=>this.Au())}}du(e){const n=this._u.then(()=>(this.hu=!0,e().catch(r=>{this.lu=r,this.hu=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Ur("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.hu=!1,r))));return this._u=n,n}enqueueAfterDelay(e,n,r){this.Eu(),this.Iu.indexOf(e)>-1&&(n=0);const i=fg.createAndSchedule(this,e,n,r,s=>this.Ru(s));return this.cu.push(i),i}Eu(){this.lu&&oe()}verifyOperationInProgress(){}async Vu(){let e;do e=this._u,await e;while(e!==this._u)}mu(e){for(const n of this.cu)if(n.timerId===e)return!0;return!1}fu(e){return this.Vu().then(()=>{this.cu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.cu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Vu()})}gu(e){this.Iu.push(e)}Ru(e){const n=this.cu.indexOf(e);this.cu.splice(n,1)}}function m0(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Lo extends Kh{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new NM}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||$I(this),this._firestoreClient.terminate()}}function bM(t,e){const n=typeof t=="object"?t:zm(),r=typeof t=="string"?t:"(default)",i=Nh(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=F1("firestore");s&&xM(i,...s)}return i}function vg(t){return t._firestoreClient||$I(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function $I(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,c,d){return new cO(l,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,jI(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new SM(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class Mo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Mo(bt.fromBase64String(e))}catch(n){throw new Q($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Mo(bt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Gh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Q($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Pt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class _g{constructor(e){this._methodName=e}}/**
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
 */class wg{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Q($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Q($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Pe(this._lat,e._lat)||Pe(this._long,e._long)}}/**
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
 */const DM=/^__.*__$/;class OM{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Mi(e,this.data,this.fieldMask,n,this.fieldTransforms):new Gl(e,this.data,n,this.fieldTransforms)}}class BI{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Mi(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function HI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw oe()}}class Eg{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.pu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get yu(){return this.settings.yu}wu(e){return new Eg(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.wu({path:r,bu:!1});return i.Du(e),i}Cu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.wu({path:r,bu:!1});return i.pu(),i}vu(e){return this.wu({path:void 0,bu:!0})}Fu(e){return rh(e,this.settings.methodName,this.settings.Mu||!1,this.path,this.settings.xu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Du(this.path.get(e))}Du(e){if(e.length===0)throw this.Fu("Document fields must not be empty");if(HI(this.yu)&&DM.test(e))throw this.Fu('Document fields cannot begin and end with "__"')}}class LM{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Bh(e)}Ou(e,n,r,i=!1){return new Eg({yu:e,methodName:n,xu:r,path:Pt.emptyPath(),bu:!1,Mu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Tg(t){const e=t._freezeSettings(),n=Bh(t._databaseId);return new LM(t._databaseId,!!e.ignoreUndefinedProperties,n)}function MM(t,e,n,r,i,s={}){const o=t.Ou(s.merge||s.mergeFields?2:0,e,n,i);Ig("Data must be an object, but it was:",o,r);const l=WI(r,o);let u,c;if(s.merge)u=new fn(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const f of s.mergeFields){const m=Np(e,f,n);if(!o.contains(m))throw new Q($.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);KI(d,m)||d.push(m)}u=new fn(d),c=o.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,c=o.fieldTransforms;return new OM(new en(l),u,c)}class Qh extends _g{_toFieldTransform(e){if(e.yu!==2)throw e.yu===1?e.Fu(`${this._methodName}() can only appear at the top level of your update data`):e.Fu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Qh}}function VM(t,e,n,r){const i=t.Ou(1,e,n);Ig("Data must be an object, but it was:",i,r);const s=[],o=en.empty();Rs(r,(u,c)=>{const d=Sg(e,u,n);c=nt(c);const f=i.Cu(d);if(c instanceof Qh)s.push(d);else{const m=Jl(c,f);m!=null&&(s.push(d),o.set(d,m))}});const l=new fn(s);return new BI(o,l,i.fieldTransforms)}function UM(t,e,n,r,i,s){const o=t.Ou(1,e,n),l=[Np(e,r,n)],u=[i];if(s.length%2!=0)throw new Q($.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)l.push(Np(e,s[m])),u.push(s[m+1]);const c=[],d=en.empty();for(let m=l.length-1;m>=0;--m)if(!KI(c,l[m])){const E=l[m];let S=u[m];S=nt(S);const C=o.Cu(E);if(S instanceof Qh)c.push(E);else{const b=Jl(S,C);b!=null&&(c.push(E),d.set(E,b))}}const f=new fn(c);return new BI(d,f,o.fieldTransforms)}function FM(t,e,n,r=!1){return Jl(n,t.Ou(r?4:3,e))}function Jl(t,e){if(qI(t=nt(t)))return Ig("Unsupported field value:",e,t),WI(t,e);if(t instanceof _g)return function(r,i){if(!HI(i.yu))throw i.Fu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Fu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.bu&&e.yu!==4)throw e.Fu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=Jl(l,i.vu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=nt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return NO(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=yt.fromDate(r);return{timestampValue:th(i.serializer,s)}}if(r instanceof yt){const s=new yt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:th(i.serializer,s)}}if(r instanceof wg)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Mo)return{bytesValue:cI(i.serializer,r._byteString)};if(r instanceof Wt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Fu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:sg(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Fu(`Unsupported field value: ${qh(r)}`)}(t,e)}function WI(t,e){const n={};return VT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Rs(t,(r,i)=>{const s=Jl(i,e.Su(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function qI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof yt||t instanceof wg||t instanceof Mo||t instanceof Wt||t instanceof _g)}function Ig(t,e,n){if(!qI(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=qh(n);throw r==="an object"?e.Fu(t+" a custom object"):e.Fu(t+" "+r)}}function Np(t,e,n){if((e=nt(e))instanceof Gh)return e._internalPath;if(typeof e=="string")return Sg(t,e);throw rh("Field path arguments must be of type string or ",t,!1,void 0,n)}const jM=new RegExp("[~\\*/\\[\\]]");function Sg(t,e,n){if(e.search(jM)>=0)throw rh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Gh(...e.split("."))._internalPath}catch{throw rh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function rh(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new Q($.INVALID_ARGUMENT,l+t+u)}function KI(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class GI{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Wt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new zM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Rg("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class zM extends GI{data(){return super.data()}}function Rg(t,e){return typeof e=="string"?Sg(t,e):e instanceof Gh?e._internalPath:e._delegate._internalPath}/**
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
 */function $M(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Q($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ag{}class QI extends Ag{}function g0(t,e,...n){let r=[];e instanceof Ag&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Cg).length,l=s.filter(u=>u instanceof Pg).length;if(o>1||o>0&&l>0)throw new Q($.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Pg extends QI{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Pg(e,n,r)}_apply(e){const n=this._parse(e);return YI(e._query,n),new Ps(e.firestore,e.converter,Ep(e._query,n))}_parse(e){const n=Tg(e.firestore);return function(s,o,l,u,c,d,f){let m;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new Q($.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){v0(f,d);const E=[];for(const S of f)E.push(y0(u,s,S));m={arrayValue:{values:E}}}else m=y0(u,s,f)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||v0(f,d),m=FM(l,o,f,d==="in"||d==="not-in");return dt.create(c,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Cg extends Ag{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Cg(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Kn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)YI(o,u),o=Ep(o,u)}(e._query,n),new Ps(e.firestore,e.converter,Ep(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class kg extends QI{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new kg(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new Q($.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new Q($.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new kl(s,o)}(e._query,this._field,this._direction);return new Ps(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Wo(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function BM(t,e="asc"){const n=e,r=Rg("orderBy",t);return kg._create(r,n)}function y0(t,e,n){if(typeof(n=nt(n))=="string"){if(n==="")throw new Q($.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!qT(e)&&n.indexOf("/")!==-1)throw new Q($.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child($e.fromString(n));if(!ne.isDocumentKey(r))throw new Q($.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return M_(t,new ne(r))}if(n instanceof Wt)return M_(t,n._key);throw new Q($.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${qh(n)}.`)}function v0(t,e){if(!Array.isArray(t)||t.length===0)throw new Q($.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function YI(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new Q($.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Q($.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class HM{convertValue(e,n="none"){switch(vs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ut(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ys(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw oe()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Rs(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new wg(ut(e.latitude),ut(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Zm(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Al(e));default:return null}}convertTimestamp(e){const n=Ci(e);return new yt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=$e.fromString(e);Me(gI(r));const i=new Pl(r.get(1),r.get(3)),s=new ne(r.popFirst(5));return i.isEqual(n)||Ur(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function WM(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class Ma{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class XI extends GI{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new hc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Rg("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class hc extends XI{data(e={}){return super.data(e)}}class qM{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ma(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new hc(this._firestore,this._userDataWriter,r.key,r,new Ma(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Q($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new hc(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ma(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new hc(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ma(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:KM(l.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function KM(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return oe()}}/**
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
 */function JI(t){t=pr(t,Wt);const e=pr(t.firestore,Lo);return CM(vg(e),t._key).then(n=>tS(e,t,n))}class ZI extends HM{constructor(e){super(),this.firestore=e}convertBytes(e){return new Mo(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Wt(this.firestore,null,n)}}function GM(t,e,n){t=pr(t,Wt);const r=pr(t.firestore,Lo),i=WM(t.converter,e);return eS(r,[MM(Tg(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,dr.none())])}function Qd(t,e,n,...r){t=pr(t,Wt);const i=pr(t.firestore,Lo),s=Tg(i);let o;return o=typeof(e=nt(e))=="string"||e instanceof Gh?UM(s,"updateDoc",t._key,e,n,r):VM(s,"updateDoc",t._key,e),eS(i,[o.toMutation(t._key,dr.exists(!0))])}function _0(t,...e){var n,r,i;t=nt(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||m0(e[o])||(s=e[o],o++);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(m0(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let u,c,d;if(t instanceof Wt)c=pr(t.firestore,Lo),d=Vh(t._key.path),u={next:f=>{e[o]&&e[o](tS(c,t,f))},error:e[o+1],complete:e[o+2]};else{const f=pr(t,Ps);c=pr(f.firestore,Lo),d=f._query;const m=new ZI(c);u={next:E=>{e[o]&&e[o](new qM(c,m,f,E))},error:e[o+1],complete:e[o+2]},$M(t._query)}return function(m,E,S,C){const b=new UI(C),I=new kI(E,b,S);return m.asyncQueue.enqueueAndForget(async()=>PI(await xp(m),I)),()=>{b.Ga(),m.asyncQueue.enqueueAndForget(async()=>CI(await xp(m),I))}}(vg(c),d,l,u)}function eS(t,e){return function(r,i){const s=new Ti;return r.asyncQueue.enqueueAndForget(async()=>mM(await PM(r),i,s)),s.promise}(vg(t),e)}function tS(t,e,n){const r=n.docs.get(e._key),i=new ZI(t);return new XI(t,i,e._key,r,new Ma(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){Ho=i})(Is),fs(new Ai("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Lo(new QD(r.getProvider("auth-internal")),new ZD(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new Q($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Pl(c.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),lr(b_,"4.6.5",e),lr(b_,"4.6.5","esm2017")})();/**
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
 */const nS="firebasestorage.googleapis.com",rS="storageBucket",QM=2*60*1e3,YM=10*60*1e3;/**
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
${this.customData.serverResponse}`:this.message=this._baseMessage}}var rt;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(rt||(rt={}));function Yd(t){return"storage/"+t}function xg(){const t="An unknown error occurred, please check the error payload for server response.";return new it(rt.UNKNOWN,t)}function XM(t){return new it(rt.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function JM(t){return new it(rt.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function ZM(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new it(rt.UNAUTHENTICATED,t)}function eV(){return new it(rt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function tV(t){return new it(rt.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function nV(){return new it(rt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function rV(){return new it(rt.CANCELED,"User canceled the upload/download.")}function iV(t){return new it(rt.INVALID_URL,"Invalid URL '"+t+"'.")}function sV(t){return new it(rt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function oV(){return new it(rt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+rS+"' property when initializing the app?")}function aV(){return new it(rt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function lV(){return new it(rt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function uV(t){return new it(rt.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function bp(t){return new it(rt.INVALID_ARGUMENT,t)}function iS(){return new it(rt.APP_DELETED,"The Firebase app was deleted.")}function cV(t){return new it(rt.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ja(t,e){return new it(rt.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Sa(t){throw new it(rt.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class pn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=pn.makeFromUrl(e,n)}catch{return new pn(e,"")}if(r.path==="")return r;throw sV(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(O){O.path.charAt(O.path.length-1)==="/"&&(O.path_=O.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function c(O){O.path_=decodeURIComponent(O.path)}const d="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",E=new RegExp(`^https?://${f}/${d}/b/${i}/o${m}`,"i"),S={bucket:1,path:3},C=n===nS?"(?:storage.googleapis.com|storage.cloud.google.com)":n,b="([^?#]*)",I=new RegExp(`^https?://${C}/${i}/${b}`,"i"),R=[{regex:l,indices:u,postModify:s},{regex:E,indices:S,postModify:c},{regex:I,indices:{bucket:1,path:2},postModify:c}];for(let O=0;O<R.length;O++){const F=R[O],k=F.regex.exec(e);if(k){const w=k[F.indices.bucket];let g=k[F.indices.path];g||(g=""),r=new pn(w,g),F.postModify(r);break}}if(r==null)throw iV(e);return r}}class hV{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function dV(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function u(){return l===2}let c=!1;function d(...b){c||(c=!0,e.apply(null,b))}function f(b){i=setTimeout(()=>{i=null,t(E,u())},b)}function m(){s&&clearTimeout(s)}function E(b,...I){if(c){m();return}if(b){m(),d.call(null,b,...I);return}if(u()||o){m(),d.call(null,b,...I);return}r<64&&(r*=2);let R;l===1?(l=2,R=0):R=(r+Math.random())*1e3,f(R)}let S=!1;function C(b){S||(S=!0,m(),!c&&(i!==null?(b||(l=2),clearTimeout(i),f(0)):b||(l=1)))}return f(0),s=setTimeout(()=>{o=!0,C(!0)},n),C}function fV(t){t(!1)}/**
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
 */function pV(t){return t!==void 0}function mV(t){return typeof t=="object"&&!Array.isArray(t)}function Ng(t){return typeof t=="string"||t instanceof String}function w0(t){return bg()&&t instanceof Blob}function bg(){return typeof Blob<"u"}function E0(t,e,n,r){if(r<e)throw bp(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw bp(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Dg(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function sS(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */function gV(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class yV{constructor(e,n,r,i,s,o,l,u,c,d,f,m=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=f,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((E,S)=>{this.resolve_=E,this.reject_=S,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Vu(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const u=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===ss.NO_ERROR,u=s.getStatus();if(!l||gV(u,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===ss.ABORT;r(!1,new Vu(!1,null,d));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new Vu(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());pV(u)?s(u):s()}catch(u){o(u)}else if(l!==null){const u=xg();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(i.canceled){const u=this.appDelete_?iS():rV();o(u)}else{const u=nV();o(u)}};this.canceled_?n(!1,new Vu(!1,null,!0)):this.backoffId_=dV(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&fV(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Vu{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function vV(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function _V(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function wV(t,e){e&&(t["X-Firebase-GMPID"]=e)}function EV(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function TV(t,e,n,r,i,s,o=!0){const l=sS(t.urlParams),u=t.url+l,c=Object.assign({},t.headers);return wV(c,e),vV(c,n),_V(c,s),EV(c,r),new yV(u,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function IV(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function SV(...t){const e=IV();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(bg())return new Blob(t);throw new it(rt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function RV(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function AV(t){if(typeof atob>"u")throw uV("base-64");return atob(t)}/**
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
 */const sr={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Xd{constructor(e,n){this.data=e,this.contentType=n||null}}function PV(t,e){switch(t){case sr.RAW:return new Xd(oS(e));case sr.BASE64:case sr.BASE64URL:return new Xd(aS(t,e));case sr.DATA_URL:return new Xd(kV(e),xV(e))}throw xg()}function oS(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function CV(t){let e;try{e=decodeURIComponent(t)}catch{throw Ja(sr.DATA_URL,"Malformed data URL.")}return oS(e)}function aS(t,e){switch(t){case sr.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Ja(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case sr.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Ja(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=AV(e)}catch(i){throw i.message.includes("polyfill")?i:Ja(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class lS{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Ja(sr.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=NV(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function kV(t){const e=new lS(t);return e.base64?aS(sr.BASE64,e.rest):CV(e.rest)}function xV(t){return new lS(t).contentType}function NV(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class ai{constructor(e,n){let r=0,i="";w0(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(w0(this.data_)){const r=this.data_,i=RV(r,e,n);return i===null?null:new ai(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new ai(r,!0)}}static getBlob(...e){if(bg()){const n=e.map(r=>r instanceof ai?r.data_:r);return new ai(SV.apply(null,n))}else{const n=e.map(o=>Ng(o)?PV(sr.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)i[s++]=o[l]}),new ai(i,!0)}}uploadData(){return this.data_}}/**
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
 */function uS(t){let e;try{e=JSON.parse(t)}catch{return null}return mV(e)?e:null}/**
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
 */function bV(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function DV(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function cS(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function OV(t,e){return e}class Kt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||OV}}let Uu=null;function LV(t){return!Ng(t)||t.length<2?t:cS(t)}function hS(){if(Uu)return Uu;const t=[];t.push(new Kt("bucket")),t.push(new Kt("generation")),t.push(new Kt("metageneration")),t.push(new Kt("name","fullPath",!0));function e(s,o){return LV(o)}const n=new Kt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Kt("size");return i.xform=r,t.push(i),t.push(new Kt("timeCreated")),t.push(new Kt("updated")),t.push(new Kt("md5Hash",null,!0)),t.push(new Kt("cacheControl",null,!0)),t.push(new Kt("contentDisposition",null,!0)),t.push(new Kt("contentEncoding",null,!0)),t.push(new Kt("contentLanguage",null,!0)),t.push(new Kt("contentType",null,!0)),t.push(new Kt("metadata","customMetadata",!0)),Uu=t,Uu}function MV(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new pn(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function VV(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return MV(r,t),r}function dS(t,e,n){const r=uS(e);return r===null?null:VV(t,r,n)}function UV(t,e,n,r){const i=uS(e);if(i===null||!Ng(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const d=t.bucket,f=t.fullPath,m="/b/"+o(d)+"/o/"+o(f),E=Dg(m,n,r),S=sS({alt:"media",token:c});return E+S})[0]}function FV(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class fS{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function pS(t){if(!t)throw xg()}function jV(t,e){function n(r,i){const s=dS(t,i,e);return pS(s!==null),s}return n}function zV(t,e){function n(r,i){const s=dS(t,i,e);return pS(s!==null),UV(s,i,t.host,t._protocol)}return n}function mS(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=eV():i=ZM():n.getStatus()===402?i=JM(t.bucket):n.getStatus()===403?i=tV(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function $V(t){const e=mS(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=XM(t.path)),s.serverResponse=i.serverResponse,s}return n}function BV(t,e,n){const r=e.fullServerUrl(),i=Dg(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,l=new fS(i,s,zV(t,n),o);return l.errorHandler=$V(e),l}function HV(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function WV(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=HV(null,e)),r}function qV(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let R="";for(let O=0;O<2;O++)R=R+Math.random().toString().slice(2);return R}const u=l();o["Content-Type"]="multipart/related; boundary="+u;const c=WV(e,r,i),d=FV(c,n),f="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,m=`\r
--`+u+"--",E=ai.getBlob(f,r,m);if(E===null)throw aV();const S={name:c.fullPath},C=Dg(s,t.host,t._protocol),b="POST",I=t.maxUploadRetryTime,v=new fS(C,b,jV(t,n),I);return v.urlParams=S,v.headers=o,v.body=E.uploadData(),v.errorHandler=mS(e),v}class KV{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ss.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ss.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ss.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Sa("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Sa("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Sa("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Sa("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Sa("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class GV extends KV{initXhr(){this.xhr_.responseType="text"}}function gS(){return new GV}/**
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
 */class _s{constructor(e,n){this._service=e,n instanceof pn?this._location=n:this._location=pn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new _s(e,n)}get root(){const e=new pn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return cS(this._location.path)}get storage(){return this._service}get parent(){const e=bV(this._location.path);if(e===null)return null;const n=new pn(this._location.bucket,e);return new _s(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw cV(e)}}function QV(t,e,n){t._throwIfRoot("uploadBytes");const r=qV(t.storage,t._location,hS(),new ai(e,!0),n);return t.storage.makeRequestWithTokens(r,gS).then(i=>({metadata:i,ref:t}))}function YV(t){t._throwIfRoot("getDownloadURL");const e=BV(t.storage,t._location,hS());return t.storage.makeRequestWithTokens(e,gS).then(n=>{if(n===null)throw lV();return n})}function XV(t,e){const n=DV(t._location.path,e),r=new pn(t._location.bucket,n);return new _s(t.storage,r)}/**
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
 */function JV(t){return/^[A-Za-z]+:\/\//.test(t)}function ZV(t,e){return new _s(t,e)}function yS(t,e){if(t instanceof Og){const n=t;if(n._bucket==null)throw oV();const r=new _s(n,n._bucket);return e!=null?yS(r,e):r}else return e!==void 0?XV(t,e):t}function e2(t,e){if(e&&JV(e)){if(t instanceof Og)return ZV(t,e);throw bp("To use ref(service, url), the first argument must be a Storage instance.")}else return yS(t,e)}function T0(t,e){const n=e==null?void 0:e[rS];return n==null?null:pn.makeFromBucketSpec(n,t)}function t2(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:$1(i,t.app.options.projectId))}class Og{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=nS,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=QM,this._maxUploadRetryTime=YM,this._requests=new Set,i!=null?this._bucket=pn.makeFromBucketSpec(i,this._host):this._bucket=T0(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=pn.makeFromBucketSpec(this._url,e):this._bucket=T0(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){E0("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){E0("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new _s(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new hV(iS());{const o=TV(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const I0="@firebase/storage",S0="0.12.6";/**
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
 */const vS="storage";function n2(t,e,n){return t=nt(t),QV(t,e,n)}function r2(t){return t=nt(t),YV(t)}function i2(t,e){return t=nt(t),e2(t,e)}function s2(t=zm(),e){t=nt(t);const r=Nh(t,vS).getImmediate({identifier:e}),i=F1("storage");return i&&o2(r,...i),r}function o2(t,e,n,r={}){t2(t,e,n,r)}function a2(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Og(n,r,i,e,Is)}function l2(){fs(new Ai(vS,a2,"PUBLIC").setMultipleInstances(!0)),lr(I0,S0,""),lr(I0,S0,"esm2017")}l2();const u2={apiKey:"AIzaSyAoB7jPca5UoD--vYdTE43HDZgqrwmDJBI",authDomain:"icecreamfactory-fbe1b.firebaseapp.com",projectId:"icecreamfactory-fbe1b",storageBucket:"icecreamfactory-fbe1b.appspot.com",messagingSenderId:"33392143586",appId:"1:33392143586:web:d8d0bec618cd4c377602bb"},Lg=W1(u2),ws=WD(Lg),c2=s2(Lg),Za=bM(Lg);function h2({children:t}){return ws.currentUser===null?z.jsx(CC,{to:"/login"}):z.jsx(z.Fragment,{children:t})}const d2=pe.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,f2=pe.div`
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
    width: 60px;
    height: 60px;
    border-radius: 50%;
    z-index: 13;
    opacity: 0;
    transition: all 0.1s linear 1s;
  }
  @media all and (max-width: 1400px) {
    font-size: 1.6em;
  }
  span {
    font-size: 30px;
    font-weight: 900;
    color: #333;
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
`,p2=pe.header`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 24px;
`,m2=pe.button`
  font-size: 16px;
  color: #333;
  background-color: #fff;
  border-radius: 24px;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  border: 1px solid #eee;
  &:hover {
    background-color: #eee;
  }
`;pe.h1`
  margin-top: 30px;
  font-size: 3.2em;
  font-weight: 900;
  color: #ff3636;
  letter-spacing: -2px;
  text-align: center;
  @media all and (max-width: 1400px) {
    margin-top: 0;
    font-size: 1.8em;
  }
`;const g2=pe.div`
  width: 100%;
  max-width: 454px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 90px;
  gap: 16px;
  @media all and (max-width: 1400px) {
    max-width: 360px;
    margin-top: 12px;
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
`,_S=pe.div`
  width: 100%;
  max-width: 196px;
  height: 268px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #cbbf93;
  background-color: #fff;
  border-radius: 22px;
  box-shadow: 0 9px #cbbf93;
  padding: 20px 44px;
  @media all and (max-width: 1400px) {
    padding: 20px 26px;
  }
  .title {
    color: #444;
    font-size: 14px;
    margin-bottom: 12px;
  }
`,R0=pe.div`
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
`,y2=pe(_S)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
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
`,v2=pe.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 470px;
  position: fixed;
  bottom: 44px;
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
    color: #333;
    font-weight: 900;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-name: slide;
    animation-direction: alternate;
    @keyframes slide {
      from {
        transform: translateY(0);
      }

      to {
        transform: translateY(5px);
      }
    }
  }
`,A0=pe.div`
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
`,_2=pe.button`
  color: #fff;
  border: none;
  width: 100%;
  max-width: 140px;
  aspect-ratio: 140 /83;
  transition: all 0.2s linear;
  cursor: pointer;
  &:hover {
    transform: scale(1.1) translateY(-5px);
  }
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
`,w2=pe.div`
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
`,E2=pe.div`
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
`,T2=pe.div`
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
`,I2=pe.div`
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
`,S2=pe.button`
  font-size: 16px;
  display: inline-block;
  font-weight: 900;
  margin-right: 10px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 6px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  .profileImg {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid #ddd;
    background-color: #eee;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
`,R2=pe.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  background: repeating-linear-gradient(
    -45deg,
    #fdeab6,
    #fdeab6 20px,
    #fff7d8 20px,
    #fff7d8 30px
  );
`,A2=t=>{const e=U.useRef(t);return U.useEffect(()=>{e.current=t}),e},P2=(t,e=100,n=!1)=>{const r=A2(t),i=U.useRef(),s=[e,n,r];function o(){i.current&&clearTimeout(i.current),i.current=void 0}U.useEffect(()=>o,s);function l(){i.current=void 0}return U.useCallback(function(){const u=arguments,{current:c}=i;if(c===void 0&&n)return i.current=setTimeout(l,e),r.current.apply(null,u);c&&clearTimeout(c),i.current=setTimeout(()=>{i.current=void 0,r.current.apply(null,u)},e)},s)},C2=(t,e,n)=>{const r=U.useState(t);return[r[0],P2(r[1],e,n)]};function Jd(t,e,n,r){const i=U.useRef(n),s=U.useRef(r);U.useEffect(()=>{i.current=n,s.current=r}),U.useEffect(()=>{const o=t&&"current"in t?t.current:t;if(!o)return;let l=0;function u(...d){l||i.current.apply(this,d)}o.addEventListener(e,u);const c=s.current;return()=>{l=1,o.removeEventListener(e,u),c&&c()}},[t,e])}const k2={},el=typeof window>"u"?null:window,x2=el&&typeof el.visualViewport<"u"?el.visualViewport:null,P0=()=>[document.documentElement.clientWidth,document.documentElement.clientHeight],N2=function(t){t===void 0&&(t=k2);const{wait:e,leading:n,initialWidth:r=0,initialHeight:i=0}=t,[s,o]=C2(typeof document>"u"?[r,i]:P0,e,n),l=()=>o(P0);return Jd(el,"resize",l),Jd(x2,"resize",l),Jd(el,"orientationchange",l),s},C0=yg(Za,"icecream","Mtu2EMz2fp8FKkItKQm5"),Zd=[0,1,2,3,4,5];function b2(){const t=ws.currentUser,e=t==null?void 0:t.uid,n=t==null?void 0:t.displayName,r=t==null?void 0:t.photoURL,i=Ul(),[s,o]=U.useState(!0),[l,u]=U.useState([]),[c,d]=U.useState([]),[f,m]=U.useState([]),[E,S]=U.useState(""),[C,b]=U.useState(Zd),[I,v]=U.useState(!1);N2();const R=async()=>{o(!0);try{const _=g0(p0(Za,"icecream")),P=g0(p0(Za,"rank"),BM("score","desc"));await _0(_,N=>{const A=N.docs.map(de=>de.data());v(A[0].loadingState),d(A[0].recipe),S(A[0].lastUser)}),await _0(P,N=>{const A=N.docs.map(de=>de.data());u(A)})}catch(_){console.log(_)}finally{o(!1)}},O=_=>{const P=[...f,_];m(P)},F=_=>{let P=_.slice();for(let N=P.length-1;N>0;N--){const A=Math.floor(Math.random()*(N+1));[P[N],P[A]]=[P[A],P[N]]}return P},k=()=>{const _=F(Zd);b(_)},w=async()=>{try{await ws.signOut(),i("/login")}catch(_){console.error("Error signing out: ",_)}},g=async()=>{const _=yg(Za,"rank",e),P=await JI(_);if(P.exists()){const A=(P.data().score||0)+1;await Qd(_,{score:A})}else await GM(_,{score:1,userName:n||"Unknown User"})},T=async()=>{if(m([]),c.length!==f.length)return!1;for(let _=0;_<c.length;_++)if(c[_]!==f[_])return!1;try{await Qd(C0,{loadingState:!0,lastUser:n}),g()}catch(_){console.log(_)}finally{const _=F(Zd);setTimeout(()=>{Qd(C0,{loadingState:!1,recipe:_})},2e3)}};return U.useEffect(()=>{R()},[]),U.useEffect(()=>{f.length===6&&(T(),k())},[f]),z.jsxs(z.Fragment,{children:[z.jsxs(d2,{children:[z.jsxs(f2,{className:I?"active":"",children:[r?z.jsx("img",{src:r,alt:"프로필 이미지"}):"",z.jsxs("span",{className:"text",children:[E," 성공!!"]}),z.jsx("div",{className:"second"}),z.jsx("div",{className:"first"})]}),z.jsxs(p2,{children:[z.jsxs(S2,{onClick:()=>{i("/profile")},children:[z.jsx("div",{className:"profileImg",children:r?z.jsx("img",{src:r,alt:"프로필 이미지"}):""}),z.jsx("span",{className:"name",children:n})]}),z.jsx(m2,{onClick:()=>{w()},children:"로그아웃"})]}),z.jsxs(w2,{children:[z.jsx("p",{className:"title",children:"순위"}),z.jsx(E2,{children:l.map((_,P)=>z.jsxs(T2,{className:`${P===0?"first":P===1?"second":P===2?"third":""}`,children:[z.jsxs("div",{className:"wrap",children:[z.jsx("span",{className:"index",children:P+1}),z.jsx("span",{className:"name",children:_.userName})]}),z.jsx("span",{className:"score",children:_.score})]},P))})]}),z.jsx(g2,{children:s?z.jsx(I2,{children:"Loading..."}):z.jsxs(z.Fragment,{children:[z.jsx(_S,{children:z.jsxs(z.Fragment,{children:[z.jsx("p",{className:"title",children:"만들어주세요!"}),z.jsx(R0,{className:"object",children:c.map((_,P)=>z.jsx(A0,{className:`${_===0?"strawberry":_===1?"choco":_===2?"mint":_===3?"vanilla":_===4?"blueberry":"greentea"} ${P===0?"one":P===1?"two":P===2?"three":P===3?"four":P===4?"five":"six"} wiggle`},P))})]})}),z.jsx(y2,{children:z.jsxs(z.Fragment,{children:[z.jsx("p",{className:"title",children:"나의 조합"}),z.jsx(R0,{className:"object",children:z.jsx("div",{className:`${f.length===1?"first":f.length===2?"second":f.length===3?"third":f.length===4?"fourth":f.length===5?"fifth":"sixth"}`,children:f.map((_,P)=>z.jsx(A0,{className:`
                              ${P+1===f.length?"active":""}
                              ${_===0?"strawberry":_===1?"choco":_===2?"mint":_===3?"vanilla":_===4?"blueberry":"greentea"} ${P===0?"one":P===1?"two":P===2?"three":P===3?"four":P===4?"five":"six"}`},P))})})]})})]})}),z.jsxs(v2,{children:[z.jsx("div",{className:"buttons",children:C.map(_=>z.jsx(_2,{className:_===0?"strawberry":_===1?"choco":_===2?"mint":_===3?"vanilla":_===4?"blueberry":"greentea",onClick:()=>O(_)},_))}),z.jsx("span",{children:"SELECT ME!!!"})]})]}),z.jsx(R2,{})]})}const D2=pe.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 0 16px;
`,O2=pe.label`
  width: 80px;
  height: 80px;
  overflow: hidden;
  border-radius: 50%;
  background-color: #eee;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 60px;
  }
`,L2=pe.img`
  width: 100%;
`,M2=pe.input`
  display: none;
`,V2=pe.h1`
  font-size: 24px;
  font-weight: 900;
  color: #333;
`,U2=pe.div`
  margin-top: 4em;
  width: 100%;
  max-width: 480px;
  background-color: #fff;
  border-radius: 40px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.16);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 36px;
`,F2=pe.div`
  width: 100%;
`,ef=pe.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 12px;
`,tf=pe.p`
  font-size: 16px;
  color: #333;
`,k0=pe.p`
  font-size: 14px;
  color: #707070;
`;function j2(){const t=ws.currentUser,[e,n]=U.useState(!0),[r,i]=U.useState(!1),[s,o]=U.useState(),[l,u]=U.useState(t==null?void 0:t.photoURL),[c,d]=U.useState(`${(t==null?void 0:t.displayName)??"Anonymous"}`),f=async()=>{n(!0);try{const E=await JI(yg(Za,"rank",t.uid));o(E.data().score||0)}catch(E){console.log(E)}finally{n(!1)}},m=async E=>{const{files:S}=E.target;if(t&&S&&S.length===1){i(!0);try{const C=S[0],b=i2(c2,`avatars/${t==null?void 0:t.uid}`),I=await n2(b,C),v=await r2(I.ref);u(v),await yT(t,{photoURL:v})}catch(C){console.log(C)}finally{i(!1)}}};return U.useEffect(()=>{f()},[]),z.jsx(D2,{children:z.jsxs(U2,{children:[z.jsx(V2,{children:"내정보"}),z.jsxs(F2,{children:[z.jsxs(ef,{children:[z.jsx(tf,{children:"프로필 이미지"}),r?"업로드 중...":z.jsxs(z.Fragment,{children:[z.jsx(O2,{htmlFor:"avatar",children:l?z.jsx(L2,{src:l}):z.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"w-5 h-5",children:z.jsx("path",{d:"M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z"})})}),z.jsx(M2,{onChange:m,id:"avatar",type:"file",accept:"image/*"})]})]}),z.jsxs(ef,{children:[z.jsx(k0,{children:"닉네임"}),z.jsx(tf,{children:c})]}),z.jsxs(ef,{children:[z.jsx(k0,{children:"점수"}),z.jsx(tf,{children:e?"점수 가져오는 중 ...":s})]})]})]})})}const z2=pe.div`
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
`,wS=pe.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 0 16px;
`,ES=pe.div`
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
`,TS=pe.form`
  width: 100%;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;pe.p`
  font-size: 40px;
  font-weight: 900;
  color: #ff3636;
  letter-spacing: -2px;
  margin-bottom: 120px;
`;const IS=pe.h1`
  font-size: 24px;
  color: #333;
`,es=pe.input`
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
`,SS=pe.span`
  margin-top: 6px;
  font-weight: 600;
  color: tomato;
`,RS=pe.span`
  margin-top: 20px;
  font-size: 12px;
`;function $2(){const t=Ul(),[e,n]=U.useState(!1),[r,i]=U.useState(!0),[s,o]=U.useState(""),[l,u]=U.useState(""),[c,d]=U.useState(""),f=E=>{const{target:{name:S,value:C}}=E;S==="email"?o(C):S==="password"&&u(C)},m=async E=>{if(E.preventDefault(),d(""),!(e||s===""||l===""))try{n(!0),await xb(ws,s,l),t("/")}catch(S){S instanceof kn&&(console.log(S.code,S.message),d(S.message))}finally{n(!1)}};return U.useEffect(()=>{setTimeout(()=>{i(!1)},1500)},[]),z.jsxs(wS,{children:[r&&z.jsxs(z2,{className:r?"":"hidden",children:[z.jsxs("h1",{children:["ICECREAM",z.jsx("br",{}),"FACTORY"]}),z.jsx("div",{className:"first"}),z.jsx("div",{className:"second"})]}),z.jsxs(ES,{className:r?"":"action",children:[z.jsx(IS,{children:"로그인이 필요해요"}),z.jsxs(TS,{onSubmit:m,children:[z.jsx(es,{onChange:f,name:"email",value:s,placeholder:"이메일",type:"email",required:!0}),z.jsx(es,{onChange:f,name:"password",value:l,placeholder:"비밀번호",type:"password",required:!0}),z.jsx(es,{className:"createBtn",type:"submit",value:e?"Loading...":"로그인"})]}),c!==""?z.jsx(SS,{children:c}):null,z.jsxs(RS,{children:["계정이 없나요? ",z.jsx(o1,{to:"/create-account",children:"회원가입하기 →"})]})]})]})}function B2(){const t=Ul(),[e,n]=U.useState(!1),[r,i]=U.useState(""),[s,o]=U.useState(""),[l,u]=U.useState(""),[c,d]=U.useState(""),f=E=>{const{target:{name:S,value:C}}=E;S==="name"?i(C):S==="email"?o(C):S==="password"&&u(C)},m=async E=>{if(E.preventDefault(),d(""),!(e||r===""||s===""||l===""))try{n(!0);const S=await kb(ws,s,l);console.log(S.user),await yT(S.user,{displayName:r}),t("/")}catch(S){S instanceof kn&&(console.log(S.code,S.message),d(S.message))}finally{n(!1)}};return z.jsx(wS,{children:z.jsxs(ES,{className:"action",children:[z.jsx(IS,{children:"회원가입"}),z.jsxs(TS,{onSubmit:m,children:[z.jsx(es,{onChange:f,name:"name",value:r,placeholder:"닉네임을 입력하세요",type:"text",required:!0}),z.jsx(es,{onChange:f,name:"email",value:s,placeholder:"이메일",type:"email",required:!0}),z.jsx(es,{onChange:f,name:"password",value:l,placeholder:"비밀번호",type:"password",required:!0}),z.jsx(es,{className:"createBtn",type:"submit",value:e?"Loading...":"가입하기"})]}),c!==""?z.jsx(SS,{children:c}):null,z.jsxs(RS,{children:["이미 회원이신가요? ",z.jsx(o1,{to:"/login",children:"로그인하기 →"})]})]})})}const H2=VC([{path:"/",element:z.jsx(h2,{children:z.jsx(tx,{})}),children:[{path:"",element:z.jsx(b2,{})},{path:"profile",element:z.jsx(j2,{})}]},{path:"/login",element:z.jsx($2,{})},{path:"/create-account",element:z.jsx(B2,{})}]),W2=b1`
  ${O1}
  * {
    box-sizing: border-box;
  }
  body {
    background-color: #FFF7D8;
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
`;function q2(){const[t,e]=U.useState(!0),n=async()=>{await ws.authStateReady(),e(!1)};return U.useEffect(()=>{n()},[]),z.jsxs(z.Fragment,{children:[z.jsx(W2,{}),t?z.jsx(ex,{}):z.jsx(qC,{router:H2})]})}nf.createRoot(document.getElementById("root")).render(z.jsx(zn.StrictMode,{children:z.jsx(q2,{})}));
