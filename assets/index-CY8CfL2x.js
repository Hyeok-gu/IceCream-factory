function GI(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function QI(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ov={exports:{}},zu={},Lv={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ya=Symbol.for("react.element"),YI=Symbol.for("react.portal"),XI=Symbol.for("react.fragment"),JI=Symbol.for("react.strict_mode"),ZI=Symbol.for("react.profiler"),eS=Symbol.for("react.provider"),tS=Symbol.for("react.context"),nS=Symbol.for("react.forward_ref"),rS=Symbol.for("react.suspense"),iS=Symbol.for("react.memo"),sS=Symbol.for("react.lazy"),kg=Symbol.iterator;function oS(t){return t===null||typeof t!="object"?null:(t=kg&&t[kg]||t["@@iterator"],typeof t=="function"?t:null)}var Vv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Mv=Object.assign,Uv={};function Ns(t,e,n){this.props=t,this.context=e,this.refs=Uv,this.updater=n||Vv}Ns.prototype.isReactComponent={};Ns.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ns.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Fv(){}Fv.prototype=Ns.prototype;function Rf(t,e,n){this.props=t,this.context=e,this.refs=Uv,this.updater=n||Vv}var Af=Rf.prototype=new Fv;Af.constructor=Rf;Mv(Af,Ns.prototype);Af.isPureReactComponent=!0;var Pg=Array.isArray,jv=Object.prototype.hasOwnProperty,kf={current:null},$v={key:!0,ref:!0,__self:!0,__source:!0};function zv(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)jv.call(e,r)&&!$v.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:ya,type:t,key:s,ref:o,props:i,_owner:kf.current}}function aS(t,e){return{$$typeof:ya,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Pf(t){return typeof t=="object"&&t!==null&&t.$$typeof===ya}function lS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Cg=/\/+/g;function Zc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?lS(""+t.key):e.toString(36)}function Sl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ya:case YI:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Zc(o,0):r,Pg(i)?(n="",t!=null&&(n=t.replace(Cg,"$&/")+"/"),Sl(i,e,n,"",function(c){return c})):i!=null&&(Pf(i)&&(i=aS(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Cg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Pg(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Zc(s,l);o+=Sl(s,e,n,u,i)}else if(u=oS(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Zc(s,l++),o+=Sl(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ja(t,e,n){if(t==null)return t;var r=[],i=0;return Sl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function uS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var wt={current:null},Rl={transition:null},cS={ReactCurrentDispatcher:wt,ReactCurrentBatchConfig:Rl,ReactCurrentOwner:kf};function Bv(){throw Error("act(...) is not supported in production builds of React.")}re.Children={map:Ja,forEach:function(t,e,n){Ja(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ja(t,function(){e++}),e},toArray:function(t){return Ja(t,function(e){return e})||[]},only:function(t){if(!Pf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};re.Component=Ns;re.Fragment=XI;re.Profiler=ZI;re.PureComponent=Rf;re.StrictMode=JI;re.Suspense=rS;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cS;re.act=Bv;re.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Mv({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=kf.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)jv.call(e,u)&&!$v.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:ya,type:t.type,key:i,ref:s,props:r,_owner:o}};re.createContext=function(t){return t={$$typeof:tS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:eS,_context:t},t.Consumer=t};re.createElement=zv;re.createFactory=function(t){var e=zv.bind(null,t);return e.type=t,e};re.createRef=function(){return{current:null}};re.forwardRef=function(t){return{$$typeof:nS,render:t}};re.isValidElement=Pf;re.lazy=function(t){return{$$typeof:sS,_payload:{_status:-1,_result:t},_init:uS}};re.memo=function(t,e){return{$$typeof:iS,type:t,compare:e===void 0?null:e}};re.startTransition=function(t){var e=Rl.transition;Rl.transition={};try{t()}finally{Rl.transition=e}};re.unstable_act=Bv;re.useCallback=function(t,e){return wt.current.useCallback(t,e)};re.useContext=function(t){return wt.current.useContext(t)};re.useDebugValue=function(){};re.useDeferredValue=function(t){return wt.current.useDeferredValue(t)};re.useEffect=function(t,e){return wt.current.useEffect(t,e)};re.useId=function(){return wt.current.useId()};re.useImperativeHandle=function(t,e,n){return wt.current.useImperativeHandle(t,e,n)};re.useInsertionEffect=function(t,e){return wt.current.useInsertionEffect(t,e)};re.useLayoutEffect=function(t,e){return wt.current.useLayoutEffect(t,e)};re.useMemo=function(t,e){return wt.current.useMemo(t,e)};re.useReducer=function(t,e,n){return wt.current.useReducer(t,e,n)};re.useRef=function(t){return wt.current.useRef(t)};re.useState=function(t){return wt.current.useState(t)};re.useSyncExternalStore=function(t,e,n){return wt.current.useSyncExternalStore(t,e,n)};re.useTransition=function(){return wt.current.useTransition()};re.version="18.3.1";Lv.exports=re;var F=Lv.exports;const nn=QI(F),hS=GI({__proto__:null,default:nn},[F]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dS=F,fS=Symbol.for("react.element"),pS=Symbol.for("react.fragment"),mS=Object.prototype.hasOwnProperty,gS=dS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,yS={key:!0,ref:!0,__self:!0,__source:!0};function Wv(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)mS.call(e,r)&&!yS.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:fS,type:t,key:s,ref:o,props:i,_owner:gS.current}}zu.Fragment=pS;zu.jsx=Wv;zu.jsxs=Wv;Ov.exports=zu;var D=Ov.exports,Hh={},Hv={exports:{}},Ft={},qv={exports:{}},Kv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,z){var K=L.length;L.push(z);e:for(;0<K;){var ee=K-1>>>1,te=L[ee];if(0<i(te,z))L[ee]=z,L[K]=te,K=ee;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var z=L[0],K=L.pop();if(K!==z){L[0]=K;e:for(var ee=0,te=L.length,we=te>>>1;ee<we;){var xt=2*(ee+1)-1,Tt=L[xt],pt=xt+1,It=L[pt];if(0>i(Tt,K))pt<te&&0>i(It,Tt)?(L[ee]=It,L[pt]=K,ee=pt):(L[ee]=Tt,L[xt]=K,ee=xt);else if(pt<te&&0>i(It,K))L[ee]=It,L[pt]=K,ee=pt;else break e}}return z}function i(L,z){var K=L.sortIndex-z.sortIndex;return K!==0?K:L.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],d=1,p=null,m=3,w=!1,S=!1,k=!1,C=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function T(L){for(var z=n(c);z!==null;){if(z.callback===null)r(c);else if(z.startTime<=L)r(c),z.sortIndex=z.expirationTime,e(u,z);else break;z=n(c)}}function N(L){if(k=!1,T(L),!S)if(n(u)!==null)S=!0,An(M);else{var z=n(c);z!==null&&tt(N,z.startTime-L)}}function M(L,z){S=!1,k&&(k=!1,E(y),y=-1),w=!0;var K=m;try{for(T(z),p=n(u);p!==null&&(!(p.expirationTime>z)||L&&!P());){var ee=p.callback;if(typeof ee=="function"){p.callback=null,m=p.priorityLevel;var te=ee(p.expirationTime<=z);z=t.unstable_now(),typeof te=="function"?p.callback=te:p===n(u)&&r(u),T(z)}else r(u);p=n(u)}if(p!==null)var we=!0;else{var xt=n(c);xt!==null&&tt(N,xt.startTime-z),we=!1}return we}finally{p=null,m=K,w=!1}}var V=!1,v=null,y=-1,I=5,R=-1;function P(){return!(t.unstable_now()-R<I)}function x(){if(v!==null){var L=t.unstable_now();R=L;var z=!0;try{z=v(!0,L)}finally{z?A():(V=!1,v=null)}}else V=!1}var A;if(typeof _=="function")A=function(){_(x)};else if(typeof MessageChannel<"u"){var et=new MessageChannel,Yt=et.port2;et.port1.onmessage=x,A=function(){Yt.postMessage(null)}}else A=function(){C(x,0)};function An(L){v=L,V||(V=!0,A())}function tt(L,z){y=C(function(){L(t.unstable_now())},z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){S||w||(S=!0,An(M))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(L){switch(m){case 1:case 2:case 3:var z=3;break;default:z=m}var K=m;m=z;try{return L()}finally{m=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,z){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var K=m;m=L;try{return z()}finally{m=K}},t.unstable_scheduleCallback=function(L,z,K){var ee=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?ee+K:ee):K=ee,L){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=K+te,L={id:d++,callback:z,priorityLevel:L,startTime:K,expirationTime:te,sortIndex:-1},K>ee?(L.sortIndex=K,e(c,L),n(u)===null&&L===n(c)&&(k?(E(y),y=-1):k=!0,tt(N,K-ee))):(L.sortIndex=te,e(u,L),S||w||(S=!0,An(M))),L},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(L){var z=m;return function(){var K=m;m=z;try{return L.apply(this,arguments)}finally{m=K}}}})(Kv);qv.exports=Kv;var _S=qv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vS=F,Ut=_S;function $(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Gv=new Set,$o={};function Ti(t,e){cs(t,e),cs(t+"Capture",e)}function cs(t,e){for($o[t]=e,t=0;t<e.length;t++)Gv.add(e[t])}var $n=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qh=Object.prototype.hasOwnProperty,wS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,xg={},Ng={};function ES(t){return qh.call(Ng,t)?!0:qh.call(xg,t)?!1:wS.test(t)?Ng[t]=!0:(xg[t]=!0,!1)}function TS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function IS(t,e,n,r){if(e===null||typeof e>"u"||TS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Et(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Xe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Xe[t]=new Et(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Xe[e]=new Et(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Xe[t]=new Et(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Xe[t]=new Et(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Xe[t]=new Et(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Xe[t]=new Et(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Xe[t]=new Et(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Xe[t]=new Et(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Xe[t]=new Et(t,5,!1,t.toLowerCase(),null,!1,!1)});var Cf=/[\-:]([a-z])/g;function xf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Cf,xf);Xe[e]=new Et(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Cf,xf);Xe[e]=new Et(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Cf,xf);Xe[e]=new Et(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Xe[t]=new Et(t,1,!1,t.toLowerCase(),null,!1,!1)});Xe.xlinkHref=new Et("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Xe[t]=new Et(t,1,!1,t.toLowerCase(),null,!0,!0)});function Nf(t,e,n,r){var i=Xe.hasOwnProperty(e)?Xe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(IS(e,n,i,r)&&(n=null),r||i===null?ES(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Gn=vS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Za=Symbol.for("react.element"),Fi=Symbol.for("react.portal"),ji=Symbol.for("react.fragment"),bf=Symbol.for("react.strict_mode"),Kh=Symbol.for("react.profiler"),Qv=Symbol.for("react.provider"),Yv=Symbol.for("react.context"),Df=Symbol.for("react.forward_ref"),Gh=Symbol.for("react.suspense"),Qh=Symbol.for("react.suspense_list"),Of=Symbol.for("react.memo"),ir=Symbol.for("react.lazy"),Xv=Symbol.for("react.offscreen"),bg=Symbol.iterator;function no(t){return t===null||typeof t!="object"?null:(t=bg&&t[bg]||t["@@iterator"],typeof t=="function"?t:null)}var Se=Object.assign,eh;function fo(t){if(eh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);eh=e&&e[1]||""}return`
`+eh+t}var th=!1;function nh(t,e){if(!t||th)return"";th=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{th=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?fo(t):""}function SS(t){switch(t.tag){case 5:return fo(t.type);case 16:return fo("Lazy");case 13:return fo("Suspense");case 19:return fo("SuspenseList");case 0:case 2:case 15:return t=nh(t.type,!1),t;case 11:return t=nh(t.type.render,!1),t;case 1:return t=nh(t.type,!0),t;default:return""}}function Yh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ji:return"Fragment";case Fi:return"Portal";case Kh:return"Profiler";case bf:return"StrictMode";case Gh:return"Suspense";case Qh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Yv:return(t.displayName||"Context")+".Consumer";case Qv:return(t._context.displayName||"Context")+".Provider";case Df:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Of:return e=t.displayName||null,e!==null?e:Yh(t.type)||"Memo";case ir:e=t._payload,t=t._init;try{return Yh(t(e))}catch{}}return null}function RS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Yh(e);case 8:return e===bf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Nr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Jv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function AS(t){var e=Jv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function el(t){t._valueTracker||(t._valueTracker=AS(t))}function Zv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Jv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Yl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Xh(t,e){var n=e.checked;return Se({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Dg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Nr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function e0(t,e){e=e.checked,e!=null&&Nf(t,"checked",e,!1)}function Jh(t,e){e0(t,e);var n=Nr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Zh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Zh(t,e.type,Nr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Og(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Zh(t,e,n){(e!=="number"||Yl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var po=Array.isArray;function es(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Nr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function ed(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error($(91));return Se({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Lg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error($(92));if(po(n)){if(1<n.length)throw Error($(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Nr(n)}}function t0(t,e){var n=Nr(e.value),r=Nr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Vg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function n0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function td(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?n0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var tl,r0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(tl=tl||document.createElement("div"),tl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=tl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function zo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ro={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kS=["Webkit","ms","Moz","O"];Object.keys(Ro).forEach(function(t){kS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ro[e]=Ro[t]})});function i0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ro.hasOwnProperty(t)&&Ro[t]?(""+e).trim():e+"px"}function s0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=i0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var PS=Se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function nd(t,e){if(e){if(PS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error($(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error($(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error($(61))}if(e.style!=null&&typeof e.style!="object")throw Error($(62))}}function rd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var id=null;function Lf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var sd=null,ts=null,ns=null;function Mg(t){if(t=wa(t)){if(typeof sd!="function")throw Error($(280));var e=t.stateNode;e&&(e=Ku(e),sd(t.stateNode,t.type,e))}}function o0(t){ts?ns?ns.push(t):ns=[t]:ts=t}function a0(){if(ts){var t=ts,e=ns;if(ns=ts=null,Mg(t),e)for(t=0;t<e.length;t++)Mg(e[t])}}function l0(t,e){return t(e)}function u0(){}var rh=!1;function c0(t,e,n){if(rh)return t(e,n);rh=!0;try{return l0(t,e,n)}finally{rh=!1,(ts!==null||ns!==null)&&(u0(),a0())}}function Bo(t,e){var n=t.stateNode;if(n===null)return null;var r=Ku(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error($(231,e,typeof n));return n}var od=!1;if($n)try{var ro={};Object.defineProperty(ro,"passive",{get:function(){od=!0}}),window.addEventListener("test",ro,ro),window.removeEventListener("test",ro,ro)}catch{od=!1}function CS(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Ao=!1,Xl=null,Jl=!1,ad=null,xS={onError:function(t){Ao=!0,Xl=t}};function NS(t,e,n,r,i,s,o,l,u){Ao=!1,Xl=null,CS.apply(xS,arguments)}function bS(t,e,n,r,i,s,o,l,u){if(NS.apply(this,arguments),Ao){if(Ao){var c=Xl;Ao=!1,Xl=null}else throw Error($(198));Jl||(Jl=!0,ad=c)}}function Ii(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function h0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ug(t){if(Ii(t)!==t)throw Error($(188))}function DS(t){var e=t.alternate;if(!e){if(e=Ii(t),e===null)throw Error($(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Ug(i),t;if(s===r)return Ug(i),e;s=s.sibling}throw Error($(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error($(189))}}if(n.alternate!==r)throw Error($(190))}if(n.tag!==3)throw Error($(188));return n.stateNode.current===n?t:e}function d0(t){return t=DS(t),t!==null?f0(t):null}function f0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=f0(t);if(e!==null)return e;t=t.sibling}return null}var p0=Ut.unstable_scheduleCallback,Fg=Ut.unstable_cancelCallback,OS=Ut.unstable_shouldYield,LS=Ut.unstable_requestPaint,Ne=Ut.unstable_now,VS=Ut.unstable_getCurrentPriorityLevel,Vf=Ut.unstable_ImmediatePriority,m0=Ut.unstable_UserBlockingPriority,Zl=Ut.unstable_NormalPriority,MS=Ut.unstable_LowPriority,g0=Ut.unstable_IdlePriority,Bu=null,gn=null;function US(t){if(gn&&typeof gn.onCommitFiberRoot=="function")try{gn.onCommitFiberRoot(Bu,t,void 0,(t.current.flags&128)===128)}catch{}}var rn=Math.clz32?Math.clz32:$S,FS=Math.log,jS=Math.LN2;function $S(t){return t>>>=0,t===0?32:31-(FS(t)/jS|0)|0}var nl=64,rl=4194304;function mo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function eu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=mo(l):(s&=o,s!==0&&(r=mo(s)))}else o=n&~i,o!==0?r=mo(o):s!==0&&(r=mo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-rn(e),i=1<<n,r|=t[n],e&=~i;return r}function zS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function BS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-rn(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=zS(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function ld(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function y0(){var t=nl;return nl<<=1,!(nl&4194240)&&(nl=64),t}function ih(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function _a(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-rn(e),t[e]=n}function WS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-rn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Mf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-rn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var he=0;function _0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var v0,Uf,w0,E0,T0,ud=!1,il=[],yr=null,_r=null,vr=null,Wo=new Map,Ho=new Map,or=[],HS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jg(t,e){switch(t){case"focusin":case"focusout":yr=null;break;case"dragenter":case"dragleave":_r=null;break;case"mouseover":case"mouseout":vr=null;break;case"pointerover":case"pointerout":Wo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ho.delete(e.pointerId)}}function io(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=wa(e),e!==null&&Uf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function qS(t,e,n,r,i){switch(e){case"focusin":return yr=io(yr,t,e,n,r,i),!0;case"dragenter":return _r=io(_r,t,e,n,r,i),!0;case"mouseover":return vr=io(vr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Wo.set(s,io(Wo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ho.set(s,io(Ho.get(s)||null,t,e,n,r,i)),!0}return!1}function I0(t){var e=Xr(t.target);if(e!==null){var n=Ii(e);if(n!==null){if(e=n.tag,e===13){if(e=h0(n),e!==null){t.blockedOn=e,T0(t.priority,function(){w0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Al(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=cd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);id=r,n.target.dispatchEvent(r),id=null}else return e=wa(n),e!==null&&Uf(e),t.blockedOn=n,!1;e.shift()}return!0}function $g(t,e,n){Al(t)&&n.delete(e)}function KS(){ud=!1,yr!==null&&Al(yr)&&(yr=null),_r!==null&&Al(_r)&&(_r=null),vr!==null&&Al(vr)&&(vr=null),Wo.forEach($g),Ho.forEach($g)}function so(t,e){t.blockedOn===e&&(t.blockedOn=null,ud||(ud=!0,Ut.unstable_scheduleCallback(Ut.unstable_NormalPriority,KS)))}function qo(t){function e(i){return so(i,t)}if(0<il.length){so(il[0],t);for(var n=1;n<il.length;n++){var r=il[n];r.blockedOn===t&&(r.blockedOn=null)}}for(yr!==null&&so(yr,t),_r!==null&&so(_r,t),vr!==null&&so(vr,t),Wo.forEach(e),Ho.forEach(e),n=0;n<or.length;n++)r=or[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<or.length&&(n=or[0],n.blockedOn===null);)I0(n),n.blockedOn===null&&or.shift()}var rs=Gn.ReactCurrentBatchConfig,tu=!0;function GS(t,e,n,r){var i=he,s=rs.transition;rs.transition=null;try{he=1,Ff(t,e,n,r)}finally{he=i,rs.transition=s}}function QS(t,e,n,r){var i=he,s=rs.transition;rs.transition=null;try{he=4,Ff(t,e,n,r)}finally{he=i,rs.transition=s}}function Ff(t,e,n,r){if(tu){var i=cd(t,e,n,r);if(i===null)ph(t,e,r,nu,n),jg(t,r);else if(qS(i,t,e,n,r))r.stopPropagation();else if(jg(t,r),e&4&&-1<HS.indexOf(t)){for(;i!==null;){var s=wa(i);if(s!==null&&v0(s),s=cd(t,e,n,r),s===null&&ph(t,e,r,nu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else ph(t,e,r,null,n)}}var nu=null;function cd(t,e,n,r){if(nu=null,t=Lf(r),t=Xr(t),t!==null)if(e=Ii(t),e===null)t=null;else if(n=e.tag,n===13){if(t=h0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return nu=t,null}function S0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(VS()){case Vf:return 1;case m0:return 4;case Zl:case MS:return 16;case g0:return 536870912;default:return 16}default:return 16}}var fr=null,jf=null,kl=null;function R0(){if(kl)return kl;var t,e=jf,n=e.length,r,i="value"in fr?fr.value:fr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return kl=i.slice(t,1<r?1-r:void 0)}function Pl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function sl(){return!0}function zg(){return!1}function jt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?sl:zg,this.isPropagationStopped=zg,this}return Se(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=sl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=sl)},persist:function(){},isPersistent:sl}),e}var bs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$f=jt(bs),va=Se({},bs,{view:0,detail:0}),YS=jt(va),sh,oh,oo,Wu=Se({},va,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==oo&&(oo&&t.type==="mousemove"?(sh=t.screenX-oo.screenX,oh=t.screenY-oo.screenY):oh=sh=0,oo=t),sh)},movementY:function(t){return"movementY"in t?t.movementY:oh}}),Bg=jt(Wu),XS=Se({},Wu,{dataTransfer:0}),JS=jt(XS),ZS=Se({},va,{relatedTarget:0}),ah=jt(ZS),eR=Se({},bs,{animationName:0,elapsedTime:0,pseudoElement:0}),tR=jt(eR),nR=Se({},bs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),rR=jt(nR),iR=Se({},bs,{data:0}),Wg=jt(iR),sR={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},oR={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},aR={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lR(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=aR[t])?!!e[t]:!1}function zf(){return lR}var uR=Se({},va,{key:function(t){if(t.key){var e=sR[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Pl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?oR[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zf,charCode:function(t){return t.type==="keypress"?Pl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Pl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),cR=jt(uR),hR=Se({},Wu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hg=jt(hR),dR=Se({},va,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zf}),fR=jt(dR),pR=Se({},bs,{propertyName:0,elapsedTime:0,pseudoElement:0}),mR=jt(pR),gR=Se({},Wu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),yR=jt(gR),_R=[9,13,27,32],Bf=$n&&"CompositionEvent"in window,ko=null;$n&&"documentMode"in document&&(ko=document.documentMode);var vR=$n&&"TextEvent"in window&&!ko,A0=$n&&(!Bf||ko&&8<ko&&11>=ko),qg=" ",Kg=!1;function k0(t,e){switch(t){case"keyup":return _R.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function P0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var $i=!1;function wR(t,e){switch(t){case"compositionend":return P0(e);case"keypress":return e.which!==32?null:(Kg=!0,qg);case"textInput":return t=e.data,t===qg&&Kg?null:t;default:return null}}function ER(t,e){if($i)return t==="compositionend"||!Bf&&k0(t,e)?(t=R0(),kl=jf=fr=null,$i=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return A0&&e.locale!=="ko"?null:e.data;default:return null}}var TR={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!TR[t.type]:e==="textarea"}function C0(t,e,n,r){o0(r),e=ru(e,"onChange"),0<e.length&&(n=new $f("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Po=null,Ko=null;function IR(t){j0(t,0)}function Hu(t){var e=Wi(t);if(Zv(e))return t}function SR(t,e){if(t==="change")return e}var x0=!1;if($n){var lh;if($n){var uh="oninput"in document;if(!uh){var Qg=document.createElement("div");Qg.setAttribute("oninput","return;"),uh=typeof Qg.oninput=="function"}lh=uh}else lh=!1;x0=lh&&(!document.documentMode||9<document.documentMode)}function Yg(){Po&&(Po.detachEvent("onpropertychange",N0),Ko=Po=null)}function N0(t){if(t.propertyName==="value"&&Hu(Ko)){var e=[];C0(e,Ko,t,Lf(t)),c0(IR,e)}}function RR(t,e,n){t==="focusin"?(Yg(),Po=e,Ko=n,Po.attachEvent("onpropertychange",N0)):t==="focusout"&&Yg()}function AR(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Hu(Ko)}function kR(t,e){if(t==="click")return Hu(e)}function PR(t,e){if(t==="input"||t==="change")return Hu(e)}function CR(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var an=typeof Object.is=="function"?Object.is:CR;function Go(t,e){if(an(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!qh.call(e,i)||!an(t[i],e[i]))return!1}return!0}function Xg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Jg(t,e){var n=Xg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Xg(n)}}function b0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?b0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function D0(){for(var t=window,e=Yl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Yl(t.document)}return e}function Wf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function xR(t){var e=D0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&b0(n.ownerDocument.documentElement,n)){if(r!==null&&Wf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Jg(n,s);var o=Jg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var NR=$n&&"documentMode"in document&&11>=document.documentMode,zi=null,hd=null,Co=null,dd=!1;function Zg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;dd||zi==null||zi!==Yl(r)||(r=zi,"selectionStart"in r&&Wf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Co&&Go(Co,r)||(Co=r,r=ru(hd,"onSelect"),0<r.length&&(e=new $f("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=zi)))}function ol(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Bi={animationend:ol("Animation","AnimationEnd"),animationiteration:ol("Animation","AnimationIteration"),animationstart:ol("Animation","AnimationStart"),transitionend:ol("Transition","TransitionEnd")},ch={},O0={};$n&&(O0=document.createElement("div").style,"AnimationEvent"in window||(delete Bi.animationend.animation,delete Bi.animationiteration.animation,delete Bi.animationstart.animation),"TransitionEvent"in window||delete Bi.transitionend.transition);function qu(t){if(ch[t])return ch[t];if(!Bi[t])return t;var e=Bi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in O0)return ch[t]=e[n];return t}var L0=qu("animationend"),V0=qu("animationiteration"),M0=qu("animationstart"),U0=qu("transitionend"),F0=new Map,ey="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mr(t,e){F0.set(t,e),Ti(e,[t])}for(var hh=0;hh<ey.length;hh++){var dh=ey[hh],bR=dh.toLowerCase(),DR=dh[0].toUpperCase()+dh.slice(1);Mr(bR,"on"+DR)}Mr(L0,"onAnimationEnd");Mr(V0,"onAnimationIteration");Mr(M0,"onAnimationStart");Mr("dblclick","onDoubleClick");Mr("focusin","onFocus");Mr("focusout","onBlur");Mr(U0,"onTransitionEnd");cs("onMouseEnter",["mouseout","mouseover"]);cs("onMouseLeave",["mouseout","mouseover"]);cs("onPointerEnter",["pointerout","pointerover"]);cs("onPointerLeave",["pointerout","pointerover"]);Ti("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ti("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ti("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ti("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ti("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ti("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var go="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),OR=new Set("cancel close invalid load scroll toggle".split(" ").concat(go));function ty(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,bS(r,e,void 0,t),t.currentTarget=null}function j0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;ty(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;ty(i,l,c),s=u}}}if(Jl)throw t=ad,Jl=!1,ad=null,t}function ge(t,e){var n=e[yd];n===void 0&&(n=e[yd]=new Set);var r=t+"__bubble";n.has(r)||($0(e,t,2,!1),n.add(r))}function fh(t,e,n){var r=0;e&&(r|=4),$0(n,t,r,e)}var al="_reactListening"+Math.random().toString(36).slice(2);function Qo(t){if(!t[al]){t[al]=!0,Gv.forEach(function(n){n!=="selectionchange"&&(OR.has(n)||fh(n,!1,t),fh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[al]||(e[al]=!0,fh("selectionchange",!1,e))}}function $0(t,e,n,r){switch(S0(e)){case 1:var i=GS;break;case 4:i=QS;break;default:i=Ff}n=i.bind(null,e,n,t),i=void 0,!od||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function ph(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Xr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}c0(function(){var c=s,d=Lf(n),p=[];e:{var m=F0.get(t);if(m!==void 0){var w=$f,S=t;switch(t){case"keypress":if(Pl(n)===0)break e;case"keydown":case"keyup":w=cR;break;case"focusin":S="focus",w=ah;break;case"focusout":S="blur",w=ah;break;case"beforeblur":case"afterblur":w=ah;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Bg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=JS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=fR;break;case L0:case V0:case M0:w=tR;break;case U0:w=mR;break;case"scroll":w=YS;break;case"wheel":w=yR;break;case"copy":case"cut":case"paste":w=rR;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Hg}var k=(e&4)!==0,C=!k&&t==="scroll",E=k?m!==null?m+"Capture":null:m;k=[];for(var _=c,T;_!==null;){T=_;var N=T.stateNode;if(T.tag===5&&N!==null&&(T=N,E!==null&&(N=Bo(_,E),N!=null&&k.push(Yo(_,N,T)))),C)break;_=_.return}0<k.length&&(m=new w(m,S,null,n,d),p.push({event:m,listeners:k}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",w=t==="mouseout"||t==="pointerout",m&&n!==id&&(S=n.relatedTarget||n.fromElement)&&(Xr(S)||S[zn]))break e;if((w||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,w?(S=n.relatedTarget||n.toElement,w=c,S=S?Xr(S):null,S!==null&&(C=Ii(S),S!==C||S.tag!==5&&S.tag!==6)&&(S=null)):(w=null,S=c),w!==S)){if(k=Bg,N="onMouseLeave",E="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(k=Hg,N="onPointerLeave",E="onPointerEnter",_="pointer"),C=w==null?m:Wi(w),T=S==null?m:Wi(S),m=new k(N,_+"leave",w,n,d),m.target=C,m.relatedTarget=T,N=null,Xr(d)===c&&(k=new k(E,_+"enter",S,n,d),k.target=T,k.relatedTarget=C,N=k),C=N,w&&S)t:{for(k=w,E=S,_=0,T=k;T;T=Oi(T))_++;for(T=0,N=E;N;N=Oi(N))T++;for(;0<_-T;)k=Oi(k),_--;for(;0<T-_;)E=Oi(E),T--;for(;_--;){if(k===E||E!==null&&k===E.alternate)break t;k=Oi(k),E=Oi(E)}k=null}else k=null;w!==null&&ny(p,m,w,k,!1),S!==null&&C!==null&&ny(p,C,S,k,!0)}}e:{if(m=c?Wi(c):window,w=m.nodeName&&m.nodeName.toLowerCase(),w==="select"||w==="input"&&m.type==="file")var M=SR;else if(Gg(m))if(x0)M=PR;else{M=AR;var V=RR}else(w=m.nodeName)&&w.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(M=kR);if(M&&(M=M(t,c))){C0(p,M,n,d);break e}V&&V(t,m,c),t==="focusout"&&(V=m._wrapperState)&&V.controlled&&m.type==="number"&&Zh(m,"number",m.value)}switch(V=c?Wi(c):window,t){case"focusin":(Gg(V)||V.contentEditable==="true")&&(zi=V,hd=c,Co=null);break;case"focusout":Co=hd=zi=null;break;case"mousedown":dd=!0;break;case"contextmenu":case"mouseup":case"dragend":dd=!1,Zg(p,n,d);break;case"selectionchange":if(NR)break;case"keydown":case"keyup":Zg(p,n,d)}var v;if(Bf)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else $i?k0(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(A0&&n.locale!=="ko"&&($i||y!=="onCompositionStart"?y==="onCompositionEnd"&&$i&&(v=R0()):(fr=d,jf="value"in fr?fr.value:fr.textContent,$i=!0)),V=ru(c,y),0<V.length&&(y=new Wg(y,t,null,n,d),p.push({event:y,listeners:V}),v?y.data=v:(v=P0(n),v!==null&&(y.data=v)))),(v=vR?wR(t,n):ER(t,n))&&(c=ru(c,"onBeforeInput"),0<c.length&&(d=new Wg("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:c}),d.data=v))}j0(p,e)})}function Yo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ru(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Bo(t,n),s!=null&&r.unshift(Yo(t,s,i)),s=Bo(t,e),s!=null&&r.push(Yo(t,s,i))),t=t.return}return r}function Oi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ny(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=Bo(n,s),u!=null&&o.unshift(Yo(n,u,l))):i||(u=Bo(n,s),u!=null&&o.push(Yo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var LR=/\r\n?/g,VR=/\u0000|\uFFFD/g;function ry(t){return(typeof t=="string"?t:""+t).replace(LR,`
`).replace(VR,"")}function ll(t,e,n){if(e=ry(e),ry(t)!==e&&n)throw Error($(425))}function iu(){}var fd=null,pd=null;function md(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var gd=typeof setTimeout=="function"?setTimeout:void 0,MR=typeof clearTimeout=="function"?clearTimeout:void 0,iy=typeof Promise=="function"?Promise:void 0,UR=typeof queueMicrotask=="function"?queueMicrotask:typeof iy<"u"?function(t){return iy.resolve(null).then(t).catch(FR)}:gd;function FR(t){setTimeout(function(){throw t})}function mh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),qo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);qo(e)}function wr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function sy(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ds=Math.random().toString(36).slice(2),fn="__reactFiber$"+Ds,Xo="__reactProps$"+Ds,zn="__reactContainer$"+Ds,yd="__reactEvents$"+Ds,jR="__reactListeners$"+Ds,$R="__reactHandles$"+Ds;function Xr(t){var e=t[fn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[zn]||n[fn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=sy(t);t!==null;){if(n=t[fn])return n;t=sy(t)}return e}t=n,n=t.parentNode}return null}function wa(t){return t=t[fn]||t[zn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Wi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error($(33))}function Ku(t){return t[Xo]||null}var _d=[],Hi=-1;function Ur(t){return{current:t}}function ve(t){0>Hi||(t.current=_d[Hi],_d[Hi]=null,Hi--)}function pe(t,e){Hi++,_d[Hi]=t.current,t.current=e}var br={},ft=Ur(br),kt=Ur(!1),li=br;function hs(t,e){var n=t.type.contextTypes;if(!n)return br;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Pt(t){return t=t.childContextTypes,t!=null}function su(){ve(kt),ve(ft)}function oy(t,e,n){if(ft.current!==br)throw Error($(168));pe(ft,e),pe(kt,n)}function z0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error($(108,RS(t)||"Unknown",i));return Se({},n,r)}function ou(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||br,li=ft.current,pe(ft,t),pe(kt,kt.current),!0}function ay(t,e,n){var r=t.stateNode;if(!r)throw Error($(169));n?(t=z0(t,e,li),r.__reactInternalMemoizedMergedChildContext=t,ve(kt),ve(ft),pe(ft,t)):ve(kt),pe(kt,n)}var Dn=null,Gu=!1,gh=!1;function B0(t){Dn===null?Dn=[t]:Dn.push(t)}function zR(t){Gu=!0,B0(t)}function Fr(){if(!gh&&Dn!==null){gh=!0;var t=0,e=he;try{var n=Dn;for(he=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Dn=null,Gu=!1}catch(i){throw Dn!==null&&(Dn=Dn.slice(t+1)),p0(Vf,Fr),i}finally{he=e,gh=!1}}return null}var qi=[],Ki=0,au=null,lu=0,zt=[],Bt=0,ui=null,On=1,Ln="";function Gr(t,e){qi[Ki++]=lu,qi[Ki++]=au,au=t,lu=e}function W0(t,e,n){zt[Bt++]=On,zt[Bt++]=Ln,zt[Bt++]=ui,ui=t;var r=On;t=Ln;var i=32-rn(r)-1;r&=~(1<<i),n+=1;var s=32-rn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,On=1<<32-rn(e)+i|n<<i|r,Ln=s+t}else On=1<<s|n<<i|r,Ln=t}function Hf(t){t.return!==null&&(Gr(t,1),W0(t,1,0))}function qf(t){for(;t===au;)au=qi[--Ki],qi[Ki]=null,lu=qi[--Ki],qi[Ki]=null;for(;t===ui;)ui=zt[--Bt],zt[Bt]=null,Ln=zt[--Bt],zt[Bt]=null,On=zt[--Bt],zt[Bt]=null}var Mt=null,Ot=null,Ee=!1,tn=null;function H0(t,e){var n=Wt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ly(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Mt=t,Ot=wr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Mt=t,Ot=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ui!==null?{id:On,overflow:Ln}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Wt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Mt=t,Ot=null,!0):!1;default:return!1}}function vd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function wd(t){if(Ee){var e=Ot;if(e){var n=e;if(!ly(t,e)){if(vd(t))throw Error($(418));e=wr(n.nextSibling);var r=Mt;e&&ly(t,e)?H0(r,n):(t.flags=t.flags&-4097|2,Ee=!1,Mt=t)}}else{if(vd(t))throw Error($(418));t.flags=t.flags&-4097|2,Ee=!1,Mt=t}}}function uy(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Mt=t}function ul(t){if(t!==Mt)return!1;if(!Ee)return uy(t),Ee=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!md(t.type,t.memoizedProps)),e&&(e=Ot)){if(vd(t))throw q0(),Error($(418));for(;e;)H0(t,e),e=wr(e.nextSibling)}if(uy(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error($(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ot=wr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ot=null}}else Ot=Mt?wr(t.stateNode.nextSibling):null;return!0}function q0(){for(var t=Ot;t;)t=wr(t.nextSibling)}function ds(){Ot=Mt=null,Ee=!1}function Kf(t){tn===null?tn=[t]:tn.push(t)}var BR=Gn.ReactCurrentBatchConfig;function ao(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error($(309));var r=n.stateNode}if(!r)throw Error($(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error($(284));if(!n._owner)throw Error($(290,t))}return t}function cl(t,e){throw t=Object.prototype.toString.call(e),Error($(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function cy(t){var e=t._init;return e(t._payload)}function K0(t){function e(E,_){if(t){var T=E.deletions;T===null?(E.deletions=[_],E.flags|=16):T.push(_)}}function n(E,_){if(!t)return null;for(;_!==null;)e(E,_),_=_.sibling;return null}function r(E,_){for(E=new Map;_!==null;)_.key!==null?E.set(_.key,_):E.set(_.index,_),_=_.sibling;return E}function i(E,_){return E=Sr(E,_),E.index=0,E.sibling=null,E}function s(E,_,T){return E.index=T,t?(T=E.alternate,T!==null?(T=T.index,T<_?(E.flags|=2,_):T):(E.flags|=2,_)):(E.flags|=1048576,_)}function o(E){return t&&E.alternate===null&&(E.flags|=2),E}function l(E,_,T,N){return _===null||_.tag!==6?(_=Ih(T,E.mode,N),_.return=E,_):(_=i(_,T),_.return=E,_)}function u(E,_,T,N){var M=T.type;return M===ji?d(E,_,T.props.children,N,T.key):_!==null&&(_.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===ir&&cy(M)===_.type)?(N=i(_,T.props),N.ref=ao(E,_,T),N.return=E,N):(N=Ll(T.type,T.key,T.props,null,E.mode,N),N.ref=ao(E,_,T),N.return=E,N)}function c(E,_,T,N){return _===null||_.tag!==4||_.stateNode.containerInfo!==T.containerInfo||_.stateNode.implementation!==T.implementation?(_=Sh(T,E.mode,N),_.return=E,_):(_=i(_,T.children||[]),_.return=E,_)}function d(E,_,T,N,M){return _===null||_.tag!==7?(_=ii(T,E.mode,N,M),_.return=E,_):(_=i(_,T),_.return=E,_)}function p(E,_,T){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Ih(""+_,E.mode,T),_.return=E,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Za:return T=Ll(_.type,_.key,_.props,null,E.mode,T),T.ref=ao(E,null,_),T.return=E,T;case Fi:return _=Sh(_,E.mode,T),_.return=E,_;case ir:var N=_._init;return p(E,N(_._payload),T)}if(po(_)||no(_))return _=ii(_,E.mode,T,null),_.return=E,_;cl(E,_)}return null}function m(E,_,T,N){var M=_!==null?_.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return M!==null?null:l(E,_,""+T,N);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case Za:return T.key===M?u(E,_,T,N):null;case Fi:return T.key===M?c(E,_,T,N):null;case ir:return M=T._init,m(E,_,M(T._payload),N)}if(po(T)||no(T))return M!==null?null:d(E,_,T,N,null);cl(E,T)}return null}function w(E,_,T,N,M){if(typeof N=="string"&&N!==""||typeof N=="number")return E=E.get(T)||null,l(_,E,""+N,M);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Za:return E=E.get(N.key===null?T:N.key)||null,u(_,E,N,M);case Fi:return E=E.get(N.key===null?T:N.key)||null,c(_,E,N,M);case ir:var V=N._init;return w(E,_,T,V(N._payload),M)}if(po(N)||no(N))return E=E.get(T)||null,d(_,E,N,M,null);cl(_,N)}return null}function S(E,_,T,N){for(var M=null,V=null,v=_,y=_=0,I=null;v!==null&&y<T.length;y++){v.index>y?(I=v,v=null):I=v.sibling;var R=m(E,v,T[y],N);if(R===null){v===null&&(v=I);break}t&&v&&R.alternate===null&&e(E,v),_=s(R,_,y),V===null?M=R:V.sibling=R,V=R,v=I}if(y===T.length)return n(E,v),Ee&&Gr(E,y),M;if(v===null){for(;y<T.length;y++)v=p(E,T[y],N),v!==null&&(_=s(v,_,y),V===null?M=v:V.sibling=v,V=v);return Ee&&Gr(E,y),M}for(v=r(E,v);y<T.length;y++)I=w(v,E,y,T[y],N),I!==null&&(t&&I.alternate!==null&&v.delete(I.key===null?y:I.key),_=s(I,_,y),V===null?M=I:V.sibling=I,V=I);return t&&v.forEach(function(P){return e(E,P)}),Ee&&Gr(E,y),M}function k(E,_,T,N){var M=no(T);if(typeof M!="function")throw Error($(150));if(T=M.call(T),T==null)throw Error($(151));for(var V=M=null,v=_,y=_=0,I=null,R=T.next();v!==null&&!R.done;y++,R=T.next()){v.index>y?(I=v,v=null):I=v.sibling;var P=m(E,v,R.value,N);if(P===null){v===null&&(v=I);break}t&&v&&P.alternate===null&&e(E,v),_=s(P,_,y),V===null?M=P:V.sibling=P,V=P,v=I}if(R.done)return n(E,v),Ee&&Gr(E,y),M;if(v===null){for(;!R.done;y++,R=T.next())R=p(E,R.value,N),R!==null&&(_=s(R,_,y),V===null?M=R:V.sibling=R,V=R);return Ee&&Gr(E,y),M}for(v=r(E,v);!R.done;y++,R=T.next())R=w(v,E,y,R.value,N),R!==null&&(t&&R.alternate!==null&&v.delete(R.key===null?y:R.key),_=s(R,_,y),V===null?M=R:V.sibling=R,V=R);return t&&v.forEach(function(x){return e(E,x)}),Ee&&Gr(E,y),M}function C(E,_,T,N){if(typeof T=="object"&&T!==null&&T.type===ji&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case Za:e:{for(var M=T.key,V=_;V!==null;){if(V.key===M){if(M=T.type,M===ji){if(V.tag===7){n(E,V.sibling),_=i(V,T.props.children),_.return=E,E=_;break e}}else if(V.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===ir&&cy(M)===V.type){n(E,V.sibling),_=i(V,T.props),_.ref=ao(E,V,T),_.return=E,E=_;break e}n(E,V);break}else e(E,V);V=V.sibling}T.type===ji?(_=ii(T.props.children,E.mode,N,T.key),_.return=E,E=_):(N=Ll(T.type,T.key,T.props,null,E.mode,N),N.ref=ao(E,_,T),N.return=E,E=N)}return o(E);case Fi:e:{for(V=T.key;_!==null;){if(_.key===V)if(_.tag===4&&_.stateNode.containerInfo===T.containerInfo&&_.stateNode.implementation===T.implementation){n(E,_.sibling),_=i(_,T.children||[]),_.return=E,E=_;break e}else{n(E,_);break}else e(E,_);_=_.sibling}_=Sh(T,E.mode,N),_.return=E,E=_}return o(E);case ir:return V=T._init,C(E,_,V(T._payload),N)}if(po(T))return S(E,_,T,N);if(no(T))return k(E,_,T,N);cl(E,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,_!==null&&_.tag===6?(n(E,_.sibling),_=i(_,T),_.return=E,E=_):(n(E,_),_=Ih(T,E.mode,N),_.return=E,E=_),o(E)):n(E,_)}return C}var fs=K0(!0),G0=K0(!1),uu=Ur(null),cu=null,Gi=null,Gf=null;function Qf(){Gf=Gi=cu=null}function Yf(t){var e=uu.current;ve(uu),t._currentValue=e}function Ed(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function is(t,e){cu=t,Gf=Gi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(At=!0),t.firstContext=null)}function qt(t){var e=t._currentValue;if(Gf!==t)if(t={context:t,memoizedValue:e,next:null},Gi===null){if(cu===null)throw Error($(308));Gi=t,cu.dependencies={lanes:0,firstContext:t}}else Gi=Gi.next=t;return e}var Jr=null;function Xf(t){Jr===null?Jr=[t]:Jr.push(t)}function Q0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Xf(e)):(n.next=i.next,i.next=n),e.interleaved=n,Bn(t,r)}function Bn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var sr=!1;function Jf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Y0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Fn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Er(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ae&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Bn(t,n)}return i=r.interleaved,i===null?(e.next=e,Xf(r)):(e.next=i.next,i.next=e),r.interleaved=e,Bn(t,n)}function Cl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Mf(t,n)}}function hy(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function hu(t,e,n,r){var i=t.updateQueue;sr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,d=c=u=null,l=s;do{var m=l.lane,w=l.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:w,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var S=t,k=l;switch(m=e,w=n,k.tag){case 1:if(S=k.payload,typeof S=="function"){p=S.call(w,p,m);break e}p=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=k.payload,m=typeof S=="function"?S.call(w,p,m):S,m==null)break e;p=Se({},p,m);break e;case 2:sr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else w={eventTime:w,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=w,u=p):d=d.next=w,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);hi|=o,t.lanes=o,t.memoizedState=p}}function dy(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error($(191,i));i.call(r)}}}var Ea={},yn=Ur(Ea),Jo=Ur(Ea),Zo=Ur(Ea);function Zr(t){if(t===Ea)throw Error($(174));return t}function Zf(t,e){switch(pe(Zo,e),pe(Jo,t),pe(yn,Ea),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:td(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=td(e,t)}ve(yn),pe(yn,e)}function ps(){ve(yn),ve(Jo),ve(Zo)}function X0(t){Zr(Zo.current);var e=Zr(yn.current),n=td(e,t.type);e!==n&&(pe(Jo,t),pe(yn,n))}function ep(t){Jo.current===t&&(ve(yn),ve(Jo))}var Te=Ur(0);function du(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var yh=[];function tp(){for(var t=0;t<yh.length;t++)yh[t]._workInProgressVersionPrimary=null;yh.length=0}var xl=Gn.ReactCurrentDispatcher,_h=Gn.ReactCurrentBatchConfig,ci=0,Ie=null,Ue=null,ze=null,fu=!1,xo=!1,ea=0,WR=0;function st(){throw Error($(321))}function np(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!an(t[n],e[n]))return!1;return!0}function rp(t,e,n,r,i,s){if(ci=s,Ie=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,xl.current=t===null||t.memoizedState===null?GR:QR,t=n(r,i),xo){s=0;do{if(xo=!1,ea=0,25<=s)throw Error($(301));s+=1,ze=Ue=null,e.updateQueue=null,xl.current=YR,t=n(r,i)}while(xo)}if(xl.current=pu,e=Ue!==null&&Ue.next!==null,ci=0,ze=Ue=Ie=null,fu=!1,e)throw Error($(300));return t}function ip(){var t=ea!==0;return ea=0,t}function hn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ze===null?Ie.memoizedState=ze=t:ze=ze.next=t,ze}function Kt(){if(Ue===null){var t=Ie.alternate;t=t!==null?t.memoizedState:null}else t=Ue.next;var e=ze===null?Ie.memoizedState:ze.next;if(e!==null)ze=e,Ue=t;else{if(t===null)throw Error($(310));Ue=t,t={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},ze===null?Ie.memoizedState=ze=t:ze=ze.next=t}return ze}function ta(t,e){return typeof e=="function"?e(t):e}function vh(t){var e=Kt(),n=e.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=t;var r=Ue,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var d=c.lane;if((ci&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,Ie.lanes|=d,hi|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,an(r,e.memoizedState)||(At=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ie.lanes|=s,hi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function wh(t){var e=Kt(),n=e.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);an(s,e.memoizedState)||(At=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function J0(){}function Z0(t,e){var n=Ie,r=Kt(),i=e(),s=!an(r.memoizedState,i);if(s&&(r.memoizedState=i,At=!0),r=r.queue,sp(nw.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ze!==null&&ze.memoizedState.tag&1){if(n.flags|=2048,na(9,tw.bind(null,n,r,i,e),void 0,null),We===null)throw Error($(349));ci&30||ew(n,e,i)}return i}function ew(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ie.updateQueue,e===null?(e={lastEffect:null,stores:null},Ie.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function tw(t,e,n,r){e.value=n,e.getSnapshot=r,rw(e)&&iw(t)}function nw(t,e,n){return n(function(){rw(e)&&iw(t)})}function rw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!an(t,n)}catch{return!0}}function iw(t){var e=Bn(t,1);e!==null&&sn(e,t,1,-1)}function fy(t){var e=hn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:t},e.queue=t,t=t.dispatch=KR.bind(null,Ie,t),[e.memoizedState,t]}function na(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ie.updateQueue,e===null?(e={lastEffect:null,stores:null},Ie.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function sw(){return Kt().memoizedState}function Nl(t,e,n,r){var i=hn();Ie.flags|=t,i.memoizedState=na(1|e,n,void 0,r===void 0?null:r)}function Qu(t,e,n,r){var i=Kt();r=r===void 0?null:r;var s=void 0;if(Ue!==null){var o=Ue.memoizedState;if(s=o.destroy,r!==null&&np(r,o.deps)){i.memoizedState=na(e,n,s,r);return}}Ie.flags|=t,i.memoizedState=na(1|e,n,s,r)}function py(t,e){return Nl(8390656,8,t,e)}function sp(t,e){return Qu(2048,8,t,e)}function ow(t,e){return Qu(4,2,t,e)}function aw(t,e){return Qu(4,4,t,e)}function lw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function uw(t,e,n){return n=n!=null?n.concat([t]):null,Qu(4,4,lw.bind(null,e,t),n)}function op(){}function cw(t,e){var n=Kt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&np(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function hw(t,e){var n=Kt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&np(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function dw(t,e,n){return ci&21?(an(n,e)||(n=y0(),Ie.lanes|=n,hi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,At=!0),t.memoizedState=n)}function HR(t,e){var n=he;he=n!==0&&4>n?n:4,t(!0);var r=_h.transition;_h.transition={};try{t(!1),e()}finally{he=n,_h.transition=r}}function fw(){return Kt().memoizedState}function qR(t,e,n){var r=Ir(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},pw(t))mw(e,n);else if(n=Q0(t,e,n,r),n!==null){var i=vt();sn(n,t,r,i),gw(n,e,r)}}function KR(t,e,n){var r=Ir(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(pw(t))mw(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,an(l,o)){var u=e.interleaved;u===null?(i.next=i,Xf(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=Q0(t,e,i,r),n!==null&&(i=vt(),sn(n,t,r,i),gw(n,e,r))}}function pw(t){var e=t.alternate;return t===Ie||e!==null&&e===Ie}function mw(t,e){xo=fu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function gw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Mf(t,n)}}var pu={readContext:qt,useCallback:st,useContext:st,useEffect:st,useImperativeHandle:st,useInsertionEffect:st,useLayoutEffect:st,useMemo:st,useReducer:st,useRef:st,useState:st,useDebugValue:st,useDeferredValue:st,useTransition:st,useMutableSource:st,useSyncExternalStore:st,useId:st,unstable_isNewReconciler:!1},GR={readContext:qt,useCallback:function(t,e){return hn().memoizedState=[t,e===void 0?null:e],t},useContext:qt,useEffect:py,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Nl(4194308,4,lw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Nl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Nl(4,2,t,e)},useMemo:function(t,e){var n=hn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=hn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=qR.bind(null,Ie,t),[r.memoizedState,t]},useRef:function(t){var e=hn();return t={current:t},e.memoizedState=t},useState:fy,useDebugValue:op,useDeferredValue:function(t){return hn().memoizedState=t},useTransition:function(){var t=fy(!1),e=t[0];return t=HR.bind(null,t[1]),hn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ie,i=hn();if(Ee){if(n===void 0)throw Error($(407));n=n()}else{if(n=e(),We===null)throw Error($(349));ci&30||ew(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,py(nw.bind(null,r,s,t),[t]),r.flags|=2048,na(9,tw.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=hn(),e=We.identifierPrefix;if(Ee){var n=Ln,r=On;n=(r&~(1<<32-rn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ea++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=WR++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},QR={readContext:qt,useCallback:cw,useContext:qt,useEffect:sp,useImperativeHandle:uw,useInsertionEffect:ow,useLayoutEffect:aw,useMemo:hw,useReducer:vh,useRef:sw,useState:function(){return vh(ta)},useDebugValue:op,useDeferredValue:function(t){var e=Kt();return dw(e,Ue.memoizedState,t)},useTransition:function(){var t=vh(ta)[0],e=Kt().memoizedState;return[t,e]},useMutableSource:J0,useSyncExternalStore:Z0,useId:fw,unstable_isNewReconciler:!1},YR={readContext:qt,useCallback:cw,useContext:qt,useEffect:sp,useImperativeHandle:uw,useInsertionEffect:ow,useLayoutEffect:aw,useMemo:hw,useReducer:wh,useRef:sw,useState:function(){return wh(ta)},useDebugValue:op,useDeferredValue:function(t){var e=Kt();return Ue===null?e.memoizedState=t:dw(e,Ue.memoizedState,t)},useTransition:function(){var t=wh(ta)[0],e=Kt().memoizedState;return[t,e]},useMutableSource:J0,useSyncExternalStore:Z0,useId:fw,unstable_isNewReconciler:!1};function Zt(t,e){if(t&&t.defaultProps){e=Se({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Td(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Se({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Yu={isMounted:function(t){return(t=t._reactInternals)?Ii(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=vt(),i=Ir(t),s=Fn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Er(t,s,i),e!==null&&(sn(e,t,i,r),Cl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=vt(),i=Ir(t),s=Fn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Er(t,s,i),e!==null&&(sn(e,t,i,r),Cl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=vt(),r=Ir(t),i=Fn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Er(t,i,r),e!==null&&(sn(e,t,r,n),Cl(e,t,r))}};function my(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Go(n,r)||!Go(i,s):!0}function yw(t,e,n){var r=!1,i=br,s=e.contextType;return typeof s=="object"&&s!==null?s=qt(s):(i=Pt(e)?li:ft.current,r=e.contextTypes,s=(r=r!=null)?hs(t,i):br),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Yu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function gy(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Yu.enqueueReplaceState(e,e.state,null)}function Id(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Jf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=qt(s):(s=Pt(e)?li:ft.current,i.context=hs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Td(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Yu.enqueueReplaceState(i,i.state,null),hu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ms(t,e){try{var n="",r=e;do n+=SS(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Eh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Sd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var XR=typeof WeakMap=="function"?WeakMap:Map;function _w(t,e,n){n=Fn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){gu||(gu=!0,Od=r),Sd(t,e)},n}function vw(t,e,n){n=Fn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Sd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Sd(t,e),typeof r!="function"&&(Tr===null?Tr=new Set([this]):Tr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function yy(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new XR;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=hA.bind(null,t,e,n),e.then(t,t))}function _y(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function vy(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Fn(-1,1),e.tag=2,Er(n,e,1))),n.lanes|=1),t)}var JR=Gn.ReactCurrentOwner,At=!1;function _t(t,e,n,r){e.child=t===null?G0(e,null,n,r):fs(e,t.child,n,r)}function wy(t,e,n,r,i){n=n.render;var s=e.ref;return is(e,i),r=rp(t,e,n,r,s,i),n=ip(),t!==null&&!At?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Wn(t,e,i)):(Ee&&n&&Hf(e),e.flags|=1,_t(t,e,r,i),e.child)}function Ey(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!pp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,ww(t,e,s,r,i)):(t=Ll(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Go,n(o,r)&&t.ref===e.ref)return Wn(t,e,i)}return e.flags|=1,t=Sr(s,r),t.ref=e.ref,t.return=e,e.child=t}function ww(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Go(s,r)&&t.ref===e.ref)if(At=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(At=!0);else return e.lanes=t.lanes,Wn(t,e,i)}return Rd(t,e,n,r,i)}function Ew(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},pe(Yi,Dt),Dt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,pe(Yi,Dt),Dt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,pe(Yi,Dt),Dt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,pe(Yi,Dt),Dt|=r;return _t(t,e,i,n),e.child}function Tw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Rd(t,e,n,r,i){var s=Pt(n)?li:ft.current;return s=hs(e,s),is(e,i),n=rp(t,e,n,r,s,i),r=ip(),t!==null&&!At?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Wn(t,e,i)):(Ee&&r&&Hf(e),e.flags|=1,_t(t,e,n,i),e.child)}function Ty(t,e,n,r,i){if(Pt(n)){var s=!0;ou(e)}else s=!1;if(is(e,i),e.stateNode===null)bl(t,e),yw(e,n,r),Id(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=qt(c):(c=Pt(n)?li:ft.current,c=hs(e,c));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&gy(e,o,r,c),sr=!1;var m=e.memoizedState;o.state=m,hu(e,r,o,i),u=e.memoizedState,l!==r||m!==u||kt.current||sr?(typeof d=="function"&&(Td(e,n,d,r),u=e.memoizedState),(l=sr||my(e,n,l,r,m,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Y0(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Zt(e.type,l),o.props=c,p=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=qt(u):(u=Pt(n)?li:ft.current,u=hs(e,u));var w=n.getDerivedStateFromProps;(d=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||m!==u)&&gy(e,o,r,u),sr=!1,m=e.memoizedState,o.state=m,hu(e,r,o,i);var S=e.memoizedState;l!==p||m!==S||kt.current||sr?(typeof w=="function"&&(Td(e,n,w,r),S=e.memoizedState),(c=sr||my(e,n,c,r,m,S,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,S,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,S,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=S),o.props=r,o.state=S,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Ad(t,e,n,r,s,i)}function Ad(t,e,n,r,i,s){Tw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&ay(e,n,!1),Wn(t,e,s);r=e.stateNode,JR.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=fs(e,t.child,null,s),e.child=fs(e,null,l,s)):_t(t,e,l,s),e.memoizedState=r.state,i&&ay(e,n,!0),e.child}function Iw(t){var e=t.stateNode;e.pendingContext?oy(t,e.pendingContext,e.pendingContext!==e.context):e.context&&oy(t,e.context,!1),Zf(t,e.containerInfo)}function Iy(t,e,n,r,i){return ds(),Kf(i),e.flags|=256,_t(t,e,n,r),e.child}var kd={dehydrated:null,treeContext:null,retryLane:0};function Pd(t){return{baseLanes:t,cachePool:null,transitions:null}}function Sw(t,e,n){var r=e.pendingProps,i=Te.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),pe(Te,i&1),t===null)return wd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Zu(o,r,0,null),t=ii(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Pd(n),e.memoizedState=kd,t):ap(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return ZR(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Sr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Sr(l,s):(s=ii(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Pd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=kd,r}return s=t.child,t=s.sibling,r=Sr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function ap(t,e){return e=Zu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function hl(t,e,n,r){return r!==null&&Kf(r),fs(e,t.child,null,n),t=ap(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function ZR(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Eh(Error($(422))),hl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Zu({mode:"visible",children:r.children},i,0,null),s=ii(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&fs(e,t.child,null,o),e.child.memoizedState=Pd(o),e.memoizedState=kd,s);if(!(e.mode&1))return hl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error($(419)),r=Eh(s,r,void 0),hl(t,e,o,r)}if(l=(o&t.childLanes)!==0,At||l){if(r=We,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Bn(t,i),sn(r,t,i,-1))}return fp(),r=Eh(Error($(421))),hl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=dA.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ot=wr(i.nextSibling),Mt=e,Ee=!0,tn=null,t!==null&&(zt[Bt++]=On,zt[Bt++]=Ln,zt[Bt++]=ui,On=t.id,Ln=t.overflow,ui=e),e=ap(e,r.children),e.flags|=4096,e)}function Sy(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ed(t.return,e,n)}function Th(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Rw(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(_t(t,e,r.children,n),r=Te.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Sy(t,n,e);else if(t.tag===19)Sy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(pe(Te,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&du(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Th(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&du(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Th(e,!0,n,null,s);break;case"together":Th(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function bl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Wn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),hi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error($(153));if(e.child!==null){for(t=e.child,n=Sr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Sr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function eA(t,e,n){switch(e.tag){case 3:Iw(e),ds();break;case 5:X0(e);break;case 1:Pt(e.type)&&ou(e);break;case 4:Zf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;pe(uu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(pe(Te,Te.current&1),e.flags|=128,null):n&e.child.childLanes?Sw(t,e,n):(pe(Te,Te.current&1),t=Wn(t,e,n),t!==null?t.sibling:null);pe(Te,Te.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Rw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),pe(Te,Te.current),r)break;return null;case 22:case 23:return e.lanes=0,Ew(t,e,n)}return Wn(t,e,n)}var Aw,Cd,kw,Pw;Aw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Cd=function(){};kw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Zr(yn.current);var s=null;switch(n){case"input":i=Xh(t,i),r=Xh(t,r),s=[];break;case"select":i=Se({},i,{value:void 0}),r=Se({},r,{value:void 0}),s=[];break;case"textarea":i=ed(t,i),r=ed(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=iu)}nd(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&($o.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&($o.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&ge("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Pw=function(t,e,n,r){n!==r&&(e.flags|=4)};function lo(t,e){if(!Ee)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ot(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function tA(t,e,n){var r=e.pendingProps;switch(qf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ot(e),null;case 1:return Pt(e.type)&&su(),ot(e),null;case 3:return r=e.stateNode,ps(),ve(kt),ve(ft),tp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ul(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,tn!==null&&(Md(tn),tn=null))),Cd(t,e),ot(e),null;case 5:ep(e);var i=Zr(Zo.current);if(n=e.type,t!==null&&e.stateNode!=null)kw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error($(166));return ot(e),null}if(t=Zr(yn.current),ul(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[fn]=e,r[Xo]=s,t=(e.mode&1)!==0,n){case"dialog":ge("cancel",r),ge("close",r);break;case"iframe":case"object":case"embed":ge("load",r);break;case"video":case"audio":for(i=0;i<go.length;i++)ge(go[i],r);break;case"source":ge("error",r);break;case"img":case"image":case"link":ge("error",r),ge("load",r);break;case"details":ge("toggle",r);break;case"input":Dg(r,s),ge("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ge("invalid",r);break;case"textarea":Lg(r,s),ge("invalid",r)}nd(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&ll(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&ll(r.textContent,l,t),i=["children",""+l]):$o.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ge("scroll",r)}switch(n){case"input":el(r),Og(r,s,!0);break;case"textarea":el(r),Vg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=iu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=n0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[fn]=e,t[Xo]=r,Aw(t,e,!1,!1),e.stateNode=t;e:{switch(o=rd(n,r),n){case"dialog":ge("cancel",t),ge("close",t),i=r;break;case"iframe":case"object":case"embed":ge("load",t),i=r;break;case"video":case"audio":for(i=0;i<go.length;i++)ge(go[i],t);i=r;break;case"source":ge("error",t),i=r;break;case"img":case"image":case"link":ge("error",t),ge("load",t),i=r;break;case"details":ge("toggle",t),i=r;break;case"input":Dg(t,r),i=Xh(t,r),ge("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Se({},r,{value:void 0}),ge("invalid",t);break;case"textarea":Lg(t,r),i=ed(t,r),ge("invalid",t);break;default:i=r}nd(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?s0(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&r0(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&zo(t,u):typeof u=="number"&&zo(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&($o.hasOwnProperty(s)?u!=null&&s==="onScroll"&&ge("scroll",t):u!=null&&Nf(t,s,u,o))}switch(n){case"input":el(t),Og(t,r,!1);break;case"textarea":el(t),Vg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Nr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?es(t,!!r.multiple,s,!1):r.defaultValue!=null&&es(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=iu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ot(e),null;case 6:if(t&&e.stateNode!=null)Pw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error($(166));if(n=Zr(Zo.current),Zr(yn.current),ul(e)){if(r=e.stateNode,n=e.memoizedProps,r[fn]=e,(s=r.nodeValue!==n)&&(t=Mt,t!==null))switch(t.tag){case 3:ll(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ll(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[fn]=e,e.stateNode=r}return ot(e),null;case 13:if(ve(Te),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ee&&Ot!==null&&e.mode&1&&!(e.flags&128))q0(),ds(),e.flags|=98560,s=!1;else if(s=ul(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error($(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error($(317));s[fn]=e}else ds(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ot(e),s=!1}else tn!==null&&(Md(tn),tn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Te.current&1?Fe===0&&(Fe=3):fp())),e.updateQueue!==null&&(e.flags|=4),ot(e),null);case 4:return ps(),Cd(t,e),t===null&&Qo(e.stateNode.containerInfo),ot(e),null;case 10:return Yf(e.type._context),ot(e),null;case 17:return Pt(e.type)&&su(),ot(e),null;case 19:if(ve(Te),s=e.memoizedState,s===null)return ot(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)lo(s,!1);else{if(Fe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=du(t),o!==null){for(e.flags|=128,lo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return pe(Te,Te.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ne()>gs&&(e.flags|=128,r=!0,lo(s,!1),e.lanes=4194304)}else{if(!r)if(t=du(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),lo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ee)return ot(e),null}else 2*Ne()-s.renderingStartTime>gs&&n!==1073741824&&(e.flags|=128,r=!0,lo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ne(),e.sibling=null,n=Te.current,pe(Te,r?n&1|2:n&1),e):(ot(e),null);case 22:case 23:return dp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Dt&1073741824&&(ot(e),e.subtreeFlags&6&&(e.flags|=8192)):ot(e),null;case 24:return null;case 25:return null}throw Error($(156,e.tag))}function nA(t,e){switch(qf(e),e.tag){case 1:return Pt(e.type)&&su(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ps(),ve(kt),ve(ft),tp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ep(e),null;case 13:if(ve(Te),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error($(340));ds()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ve(Te),null;case 4:return ps(),null;case 10:return Yf(e.type._context),null;case 22:case 23:return dp(),null;case 24:return null;default:return null}}var dl=!1,ut=!1,rA=typeof WeakSet=="function"?WeakSet:Set,H=null;function Qi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ke(t,e,r)}else n.current=null}function xd(t,e,n){try{n()}catch(r){ke(t,e,r)}}var Ry=!1;function iA(t,e){if(fd=tu,t=D0(),Wf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,d=0,p=t,m=null;t:for(;;){for(var w;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(w=p.firstChild)!==null;)m=p,p=w;for(;;){if(p===t)break t;if(m===n&&++c===i&&(l=o),m===s&&++d===r&&(u=o),(w=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=w}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(pd={focusedElem:t,selectionRange:n},tu=!1,H=e;H!==null;)if(e=H,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,H=t;else for(;H!==null;){e=H;try{var S=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var k=S.memoizedProps,C=S.memoizedState,E=e.stateNode,_=E.getSnapshotBeforeUpdate(e.elementType===e.type?k:Zt(e.type,k),C);E.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var T=e.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error($(163))}}catch(N){ke(e,e.return,N)}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}return S=Ry,Ry=!1,S}function No(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&xd(e,n,s)}i=i.next}while(i!==r)}}function Xu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Nd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Cw(t){var e=t.alternate;e!==null&&(t.alternate=null,Cw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[fn],delete e[Xo],delete e[yd],delete e[jR],delete e[$R])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function xw(t){return t.tag===5||t.tag===3||t.tag===4}function Ay(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||xw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function bd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=iu));else if(r!==4&&(t=t.child,t!==null))for(bd(t,e,n),t=t.sibling;t!==null;)bd(t,e,n),t=t.sibling}function Dd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Dd(t,e,n),t=t.sibling;t!==null;)Dd(t,e,n),t=t.sibling}var qe=null,en=!1;function tr(t,e,n){for(n=n.child;n!==null;)Nw(t,e,n),n=n.sibling}function Nw(t,e,n){if(gn&&typeof gn.onCommitFiberUnmount=="function")try{gn.onCommitFiberUnmount(Bu,n)}catch{}switch(n.tag){case 5:ut||Qi(n,e);case 6:var r=qe,i=en;qe=null,tr(t,e,n),qe=r,en=i,qe!==null&&(en?(t=qe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):qe.removeChild(n.stateNode));break;case 18:qe!==null&&(en?(t=qe,n=n.stateNode,t.nodeType===8?mh(t.parentNode,n):t.nodeType===1&&mh(t,n),qo(t)):mh(qe,n.stateNode));break;case 4:r=qe,i=en,qe=n.stateNode.containerInfo,en=!0,tr(t,e,n),qe=r,en=i;break;case 0:case 11:case 14:case 15:if(!ut&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&xd(n,e,o),i=i.next}while(i!==r)}tr(t,e,n);break;case 1:if(!ut&&(Qi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ke(n,e,l)}tr(t,e,n);break;case 21:tr(t,e,n);break;case 22:n.mode&1?(ut=(r=ut)||n.memoizedState!==null,tr(t,e,n),ut=r):tr(t,e,n);break;default:tr(t,e,n)}}function ky(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new rA),e.forEach(function(r){var i=fA.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Jt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:qe=l.stateNode,en=!1;break e;case 3:qe=l.stateNode.containerInfo,en=!0;break e;case 4:qe=l.stateNode.containerInfo,en=!0;break e}l=l.return}if(qe===null)throw Error($(160));Nw(s,o,i),qe=null,en=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){ke(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)bw(e,t),e=e.sibling}function bw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Jt(e,t),cn(t),r&4){try{No(3,t,t.return),Xu(3,t)}catch(k){ke(t,t.return,k)}try{No(5,t,t.return)}catch(k){ke(t,t.return,k)}}break;case 1:Jt(e,t),cn(t),r&512&&n!==null&&Qi(n,n.return);break;case 5:if(Jt(e,t),cn(t),r&512&&n!==null&&Qi(n,n.return),t.flags&32){var i=t.stateNode;try{zo(i,"")}catch(k){ke(t,t.return,k)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&e0(i,s),rd(l,o);var c=rd(l,s);for(o=0;o<u.length;o+=2){var d=u[o],p=u[o+1];d==="style"?s0(i,p):d==="dangerouslySetInnerHTML"?r0(i,p):d==="children"?zo(i,p):Nf(i,d,p,c)}switch(l){case"input":Jh(i,s);break;case"textarea":t0(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var w=s.value;w!=null?es(i,!!s.multiple,w,!1):m!==!!s.multiple&&(s.defaultValue!=null?es(i,!!s.multiple,s.defaultValue,!0):es(i,!!s.multiple,s.multiple?[]:"",!1))}i[Xo]=s}catch(k){ke(t,t.return,k)}}break;case 6:if(Jt(e,t),cn(t),r&4){if(t.stateNode===null)throw Error($(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(k){ke(t,t.return,k)}}break;case 3:if(Jt(e,t),cn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{qo(e.containerInfo)}catch(k){ke(t,t.return,k)}break;case 4:Jt(e,t),cn(t);break;case 13:Jt(e,t),cn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(cp=Ne())),r&4&&ky(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(ut=(c=ut)||d,Jt(e,t),ut=c):Jt(e,t),cn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(H=t,d=t.child;d!==null;){for(p=H=d;H!==null;){switch(m=H,w=m.child,m.tag){case 0:case 11:case 14:case 15:No(4,m,m.return);break;case 1:Qi(m,m.return);var S=m.stateNode;if(typeof S.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,S.props=e.memoizedProps,S.state=e.memoizedState,S.componentWillUnmount()}catch(k){ke(r,n,k)}}break;case 5:Qi(m,m.return);break;case 22:if(m.memoizedState!==null){Cy(p);continue}}w!==null?(w.return=m,H=w):Cy(p)}d=d.sibling}e:for(d=null,p=t;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=i0("display",o))}catch(k){ke(t,t.return,k)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(k){ke(t,t.return,k)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Jt(e,t),cn(t),r&4&&ky(t);break;case 21:break;default:Jt(e,t),cn(t)}}function cn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(xw(n)){var r=n;break e}n=n.return}throw Error($(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(zo(i,""),r.flags&=-33);var s=Ay(t);Dd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Ay(t);bd(t,l,o);break;default:throw Error($(161))}}catch(u){ke(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function sA(t,e,n){H=t,Dw(t)}function Dw(t,e,n){for(var r=(t.mode&1)!==0;H!==null;){var i=H,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||dl;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||ut;l=dl;var c=ut;if(dl=o,(ut=u)&&!c)for(H=i;H!==null;)o=H,u=o.child,o.tag===22&&o.memoizedState!==null?xy(i):u!==null?(u.return=o,H=u):xy(i);for(;s!==null;)H=s,Dw(s),s=s.sibling;H=i,dl=l,ut=c}Py(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,H=s):Py(t)}}function Py(t){for(;H!==null;){var e=H;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ut||Xu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ut)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Zt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&dy(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}dy(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&qo(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error($(163))}ut||e.flags&512&&Nd(e)}catch(m){ke(e,e.return,m)}}if(e===t){H=null;break}if(n=e.sibling,n!==null){n.return=e.return,H=n;break}H=e.return}}function Cy(t){for(;H!==null;){var e=H;if(e===t){H=null;break}var n=e.sibling;if(n!==null){n.return=e.return,H=n;break}H=e.return}}function xy(t){for(;H!==null;){var e=H;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Xu(4,e)}catch(u){ke(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){ke(e,i,u)}}var s=e.return;try{Nd(e)}catch(u){ke(e,s,u)}break;case 5:var o=e.return;try{Nd(e)}catch(u){ke(e,o,u)}}}catch(u){ke(e,e.return,u)}if(e===t){H=null;break}var l=e.sibling;if(l!==null){l.return=e.return,H=l;break}H=e.return}}var oA=Math.ceil,mu=Gn.ReactCurrentDispatcher,lp=Gn.ReactCurrentOwner,Ht=Gn.ReactCurrentBatchConfig,ae=0,We=null,Ve=null,Qe=0,Dt=0,Yi=Ur(0),Fe=0,ra=null,hi=0,Ju=0,up=0,bo=null,St=null,cp=0,gs=1/0,Nn=null,gu=!1,Od=null,Tr=null,fl=!1,pr=null,yu=0,Do=0,Ld=null,Dl=-1,Ol=0;function vt(){return ae&6?Ne():Dl!==-1?Dl:Dl=Ne()}function Ir(t){return t.mode&1?ae&2&&Qe!==0?Qe&-Qe:BR.transition!==null?(Ol===0&&(Ol=y0()),Ol):(t=he,t!==0||(t=window.event,t=t===void 0?16:S0(t.type)),t):1}function sn(t,e,n,r){if(50<Do)throw Do=0,Ld=null,Error($(185));_a(t,n,r),(!(ae&2)||t!==We)&&(t===We&&(!(ae&2)&&(Ju|=n),Fe===4&&ar(t,Qe)),Ct(t,r),n===1&&ae===0&&!(e.mode&1)&&(gs=Ne()+500,Gu&&Fr()))}function Ct(t,e){var n=t.callbackNode;BS(t,e);var r=eu(t,t===We?Qe:0);if(r===0)n!==null&&Fg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Fg(n),e===1)t.tag===0?zR(Ny.bind(null,t)):B0(Ny.bind(null,t)),UR(function(){!(ae&6)&&Fr()}),n=null;else{switch(_0(r)){case 1:n=Vf;break;case 4:n=m0;break;case 16:n=Zl;break;case 536870912:n=g0;break;default:n=Zl}n=$w(n,Ow.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Ow(t,e){if(Dl=-1,Ol=0,ae&6)throw Error($(327));var n=t.callbackNode;if(ss()&&t.callbackNode!==n)return null;var r=eu(t,t===We?Qe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=_u(t,r);else{e=r;var i=ae;ae|=2;var s=Vw();(We!==t||Qe!==e)&&(Nn=null,gs=Ne()+500,ri(t,e));do try{uA();break}catch(l){Lw(t,l)}while(!0);Qf(),mu.current=s,ae=i,Ve!==null?e=0:(We=null,Qe=0,e=Fe)}if(e!==0){if(e===2&&(i=ld(t),i!==0&&(r=i,e=Vd(t,i))),e===1)throw n=ra,ri(t,0),ar(t,r),Ct(t,Ne()),n;if(e===6)ar(t,r);else{if(i=t.current.alternate,!(r&30)&&!aA(i)&&(e=_u(t,r),e===2&&(s=ld(t),s!==0&&(r=s,e=Vd(t,s))),e===1))throw n=ra,ri(t,0),ar(t,r),Ct(t,Ne()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error($(345));case 2:Qr(t,St,Nn);break;case 3:if(ar(t,r),(r&130023424)===r&&(e=cp+500-Ne(),10<e)){if(eu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){vt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=gd(Qr.bind(null,t,St,Nn),e);break}Qr(t,St,Nn);break;case 4:if(ar(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-rn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*oA(r/1960))-r,10<r){t.timeoutHandle=gd(Qr.bind(null,t,St,Nn),r);break}Qr(t,St,Nn);break;case 5:Qr(t,St,Nn);break;default:throw Error($(329))}}}return Ct(t,Ne()),t.callbackNode===n?Ow.bind(null,t):null}function Vd(t,e){var n=bo;return t.current.memoizedState.isDehydrated&&(ri(t,e).flags|=256),t=_u(t,e),t!==2&&(e=St,St=n,e!==null&&Md(e)),t}function Md(t){St===null?St=t:St.push.apply(St,t)}function aA(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!an(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ar(t,e){for(e&=~up,e&=~Ju,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-rn(e),r=1<<n;t[n]=-1,e&=~r}}function Ny(t){if(ae&6)throw Error($(327));ss();var e=eu(t,0);if(!(e&1))return Ct(t,Ne()),null;var n=_u(t,e);if(t.tag!==0&&n===2){var r=ld(t);r!==0&&(e=r,n=Vd(t,r))}if(n===1)throw n=ra,ri(t,0),ar(t,e),Ct(t,Ne()),n;if(n===6)throw Error($(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Qr(t,St,Nn),Ct(t,Ne()),null}function hp(t,e){var n=ae;ae|=1;try{return t(e)}finally{ae=n,ae===0&&(gs=Ne()+500,Gu&&Fr())}}function di(t){pr!==null&&pr.tag===0&&!(ae&6)&&ss();var e=ae;ae|=1;var n=Ht.transition,r=he;try{if(Ht.transition=null,he=1,t)return t()}finally{he=r,Ht.transition=n,ae=e,!(ae&6)&&Fr()}}function dp(){Dt=Yi.current,ve(Yi)}function ri(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,MR(n)),Ve!==null)for(n=Ve.return;n!==null;){var r=n;switch(qf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&su();break;case 3:ps(),ve(kt),ve(ft),tp();break;case 5:ep(r);break;case 4:ps();break;case 13:ve(Te);break;case 19:ve(Te);break;case 10:Yf(r.type._context);break;case 22:case 23:dp()}n=n.return}if(We=t,Ve=t=Sr(t.current,null),Qe=Dt=e,Fe=0,ra=null,up=Ju=hi=0,St=bo=null,Jr!==null){for(e=0;e<Jr.length;e++)if(n=Jr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Jr=null}return t}function Lw(t,e){do{var n=Ve;try{if(Qf(),xl.current=pu,fu){for(var r=Ie.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}fu=!1}if(ci=0,ze=Ue=Ie=null,xo=!1,ea=0,lp.current=null,n===null||n.return===null){Fe=1,ra=e,Ve=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Qe,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var w=_y(o);if(w!==null){w.flags&=-257,vy(w,o,l,s,e),w.mode&1&&yy(s,c,e),e=w,u=c;var S=e.updateQueue;if(S===null){var k=new Set;k.add(u),e.updateQueue=k}else S.add(u);break e}else{if(!(e&1)){yy(s,c,e),fp();break e}u=Error($(426))}}else if(Ee&&l.mode&1){var C=_y(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),vy(C,o,l,s,e),Kf(ms(u,l));break e}}s=u=ms(u,l),Fe!==4&&(Fe=2),bo===null?bo=[s]:bo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var E=_w(s,u,e);hy(s,E);break e;case 1:l=u;var _=s.type,T=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(Tr===null||!Tr.has(T)))){s.flags|=65536,e&=-e,s.lanes|=e;var N=vw(s,l,e);hy(s,N);break e}}s=s.return}while(s!==null)}Uw(n)}catch(M){e=M,Ve===n&&n!==null&&(Ve=n=n.return);continue}break}while(!0)}function Vw(){var t=mu.current;return mu.current=pu,t===null?pu:t}function fp(){(Fe===0||Fe===3||Fe===2)&&(Fe=4),We===null||!(hi&268435455)&&!(Ju&268435455)||ar(We,Qe)}function _u(t,e){var n=ae;ae|=2;var r=Vw();(We!==t||Qe!==e)&&(Nn=null,ri(t,e));do try{lA();break}catch(i){Lw(t,i)}while(!0);if(Qf(),ae=n,mu.current=r,Ve!==null)throw Error($(261));return We=null,Qe=0,Fe}function lA(){for(;Ve!==null;)Mw(Ve)}function uA(){for(;Ve!==null&&!OS();)Mw(Ve)}function Mw(t){var e=jw(t.alternate,t,Dt);t.memoizedProps=t.pendingProps,e===null?Uw(t):Ve=e,lp.current=null}function Uw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=nA(n,e),n!==null){n.flags&=32767,Ve=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Fe=6,Ve=null;return}}else if(n=tA(n,e,Dt),n!==null){Ve=n;return}if(e=e.sibling,e!==null){Ve=e;return}Ve=e=t}while(e!==null);Fe===0&&(Fe=5)}function Qr(t,e,n){var r=he,i=Ht.transition;try{Ht.transition=null,he=1,cA(t,e,n,r)}finally{Ht.transition=i,he=r}return null}function cA(t,e,n,r){do ss();while(pr!==null);if(ae&6)throw Error($(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error($(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(WS(t,s),t===We&&(Ve=We=null,Qe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||fl||(fl=!0,$w(Zl,function(){return ss(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ht.transition,Ht.transition=null;var o=he;he=1;var l=ae;ae|=4,lp.current=null,iA(t,n),bw(n,t),xR(pd),tu=!!fd,pd=fd=null,t.current=n,sA(n),LS(),ae=l,he=o,Ht.transition=s}else t.current=n;if(fl&&(fl=!1,pr=t,yu=i),s=t.pendingLanes,s===0&&(Tr=null),US(n.stateNode),Ct(t,Ne()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(gu)throw gu=!1,t=Od,Od=null,t;return yu&1&&t.tag!==0&&ss(),s=t.pendingLanes,s&1?t===Ld?Do++:(Do=0,Ld=t):Do=0,Fr(),null}function ss(){if(pr!==null){var t=_0(yu),e=Ht.transition,n=he;try{if(Ht.transition=null,he=16>t?16:t,pr===null)var r=!1;else{if(t=pr,pr=null,yu=0,ae&6)throw Error($(331));var i=ae;for(ae|=4,H=t.current;H!==null;){var s=H,o=s.child;if(H.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(H=c;H!==null;){var d=H;switch(d.tag){case 0:case 11:case 15:No(8,d,s)}var p=d.child;if(p!==null)p.return=d,H=p;else for(;H!==null;){d=H;var m=d.sibling,w=d.return;if(Cw(d),d===c){H=null;break}if(m!==null){m.return=w,H=m;break}H=w}}}var S=s.alternate;if(S!==null){var k=S.child;if(k!==null){S.child=null;do{var C=k.sibling;k.sibling=null,k=C}while(k!==null)}}H=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,H=o;else e:for(;H!==null;){if(s=H,s.flags&2048)switch(s.tag){case 0:case 11:case 15:No(9,s,s.return)}var E=s.sibling;if(E!==null){E.return=s.return,H=E;break e}H=s.return}}var _=t.current;for(H=_;H!==null;){o=H;var T=o.child;if(o.subtreeFlags&2064&&T!==null)T.return=o,H=T;else e:for(o=_;H!==null;){if(l=H,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Xu(9,l)}}catch(M){ke(l,l.return,M)}if(l===o){H=null;break e}var N=l.sibling;if(N!==null){N.return=l.return,H=N;break e}H=l.return}}if(ae=i,Fr(),gn&&typeof gn.onPostCommitFiberRoot=="function")try{gn.onPostCommitFiberRoot(Bu,t)}catch{}r=!0}return r}finally{he=n,Ht.transition=e}}return!1}function by(t,e,n){e=ms(n,e),e=_w(t,e,1),t=Er(t,e,1),e=vt(),t!==null&&(_a(t,1,e),Ct(t,e))}function ke(t,e,n){if(t.tag===3)by(t,t,n);else for(;e!==null;){if(e.tag===3){by(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Tr===null||!Tr.has(r))){t=ms(n,t),t=vw(e,t,1),e=Er(e,t,1),t=vt(),e!==null&&(_a(e,1,t),Ct(e,t));break}}e=e.return}}function hA(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=vt(),t.pingedLanes|=t.suspendedLanes&n,We===t&&(Qe&n)===n&&(Fe===4||Fe===3&&(Qe&130023424)===Qe&&500>Ne()-cp?ri(t,0):up|=n),Ct(t,e)}function Fw(t,e){e===0&&(t.mode&1?(e=rl,rl<<=1,!(rl&130023424)&&(rl=4194304)):e=1);var n=vt();t=Bn(t,e),t!==null&&(_a(t,e,n),Ct(t,n))}function dA(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Fw(t,n)}function fA(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error($(314))}r!==null&&r.delete(e),Fw(t,n)}var jw;jw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||kt.current)At=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return At=!1,eA(t,e,n);At=!!(t.flags&131072)}else At=!1,Ee&&e.flags&1048576&&W0(e,lu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;bl(t,e),t=e.pendingProps;var i=hs(e,ft.current);is(e,n),i=rp(null,e,r,t,i,n);var s=ip();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Pt(r)?(s=!0,ou(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Jf(e),i.updater=Yu,e.stateNode=i,i._reactInternals=e,Id(e,r,t,n),e=Ad(null,e,r,!0,s,n)):(e.tag=0,Ee&&s&&Hf(e),_t(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(bl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=mA(r),t=Zt(r,t),i){case 0:e=Rd(null,e,r,t,n);break e;case 1:e=Ty(null,e,r,t,n);break e;case 11:e=wy(null,e,r,t,n);break e;case 14:e=Ey(null,e,r,Zt(r.type,t),n);break e}throw Error($(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Zt(r,i),Rd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Zt(r,i),Ty(t,e,r,i,n);case 3:e:{if(Iw(e),t===null)throw Error($(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Y0(t,e),hu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ms(Error($(423)),e),e=Iy(t,e,r,n,i);break e}else if(r!==i){i=ms(Error($(424)),e),e=Iy(t,e,r,n,i);break e}else for(Ot=wr(e.stateNode.containerInfo.firstChild),Mt=e,Ee=!0,tn=null,n=G0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ds(),r===i){e=Wn(t,e,n);break e}_t(t,e,r,n)}e=e.child}return e;case 5:return X0(e),t===null&&wd(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,md(r,i)?o=null:s!==null&&md(r,s)&&(e.flags|=32),Tw(t,e),_t(t,e,o,n),e.child;case 6:return t===null&&wd(e),null;case 13:return Sw(t,e,n);case 4:return Zf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=fs(e,null,r,n):_t(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Zt(r,i),wy(t,e,r,i,n);case 7:return _t(t,e,e.pendingProps,n),e.child;case 8:return _t(t,e,e.pendingProps.children,n),e.child;case 12:return _t(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,pe(uu,r._currentValue),r._currentValue=o,s!==null)if(an(s.value,o)){if(s.children===i.children&&!kt.current){e=Wn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Fn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Ed(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error($(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Ed(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}_t(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,is(e,n),i=qt(i),r=r(i),e.flags|=1,_t(t,e,r,n),e.child;case 14:return r=e.type,i=Zt(r,e.pendingProps),i=Zt(r.type,i),Ey(t,e,r,i,n);case 15:return ww(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Zt(r,i),bl(t,e),e.tag=1,Pt(r)?(t=!0,ou(e)):t=!1,is(e,n),yw(e,r,i),Id(e,r,i,n),Ad(null,e,r,!0,t,n);case 19:return Rw(t,e,n);case 22:return Ew(t,e,n)}throw Error($(156,e.tag))};function $w(t,e){return p0(t,e)}function pA(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wt(t,e,n,r){return new pA(t,e,n,r)}function pp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function mA(t){if(typeof t=="function")return pp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Df)return 11;if(t===Of)return 14}return 2}function Sr(t,e){var n=t.alternate;return n===null?(n=Wt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ll(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")pp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ji:return ii(n.children,i,s,e);case bf:o=8,i|=8;break;case Kh:return t=Wt(12,n,e,i|2),t.elementType=Kh,t.lanes=s,t;case Gh:return t=Wt(13,n,e,i),t.elementType=Gh,t.lanes=s,t;case Qh:return t=Wt(19,n,e,i),t.elementType=Qh,t.lanes=s,t;case Xv:return Zu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Qv:o=10;break e;case Yv:o=9;break e;case Df:o=11;break e;case Of:o=14;break e;case ir:o=16,r=null;break e}throw Error($(130,t==null?t:typeof t,""))}return e=Wt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ii(t,e,n,r){return t=Wt(7,t,r,e),t.lanes=n,t}function Zu(t,e,n,r){return t=Wt(22,t,r,e),t.elementType=Xv,t.lanes=n,t.stateNode={isHidden:!1},t}function Ih(t,e,n){return t=Wt(6,t,null,e),t.lanes=n,t}function Sh(t,e,n){return e=Wt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function gA(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ih(0),this.expirationTimes=ih(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ih(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function mp(t,e,n,r,i,s,o,l,u){return t=new gA(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Wt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Jf(s),t}function yA(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Fi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function zw(t){if(!t)return br;t=t._reactInternals;e:{if(Ii(t)!==t||t.tag!==1)throw Error($(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Pt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error($(171))}if(t.tag===1){var n=t.type;if(Pt(n))return z0(t,n,e)}return e}function Bw(t,e,n,r,i,s,o,l,u){return t=mp(n,r,!0,t,i,s,o,l,u),t.context=zw(null),n=t.current,r=vt(),i=Ir(n),s=Fn(r,i),s.callback=e??null,Er(n,s,i),t.current.lanes=i,_a(t,i,r),Ct(t,r),t}function ec(t,e,n,r){var i=e.current,s=vt(),o=Ir(i);return n=zw(n),e.context===null?e.context=n:e.pendingContext=n,e=Fn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Er(i,e,o),t!==null&&(sn(t,i,o,s),Cl(t,i,o)),o}function vu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Dy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function gp(t,e){Dy(t,e),(t=t.alternate)&&Dy(t,e)}function _A(){return null}var Ww=typeof reportError=="function"?reportError:function(t){console.error(t)};function yp(t){this._internalRoot=t}tc.prototype.render=yp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error($(409));ec(t,e,null,null)};tc.prototype.unmount=yp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;di(function(){ec(null,t,null,null)}),e[zn]=null}};function tc(t){this._internalRoot=t}tc.prototype.unstable_scheduleHydration=function(t){if(t){var e=E0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<or.length&&e!==0&&e<or[n].priority;n++);or.splice(n,0,t),n===0&&I0(t)}};function _p(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function nc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Oy(){}function vA(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=vu(o);s.call(c)}}var o=Bw(e,r,t,0,null,!1,!1,"",Oy);return t._reactRootContainer=o,t[zn]=o.current,Qo(t.nodeType===8?t.parentNode:t),di(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=vu(u);l.call(c)}}var u=mp(t,0,!1,null,null,!1,!1,"",Oy);return t._reactRootContainer=u,t[zn]=u.current,Qo(t.nodeType===8?t.parentNode:t),di(function(){ec(e,u,n,r)}),u}function rc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=vu(o);l.call(u)}}ec(e,o,t,i)}else o=vA(n,e,t,i,r);return vu(o)}v0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=mo(e.pendingLanes);n!==0&&(Mf(e,n|1),Ct(e,Ne()),!(ae&6)&&(gs=Ne()+500,Fr()))}break;case 13:di(function(){var r=Bn(t,1);if(r!==null){var i=vt();sn(r,t,1,i)}}),gp(t,1)}};Uf=function(t){if(t.tag===13){var e=Bn(t,134217728);if(e!==null){var n=vt();sn(e,t,134217728,n)}gp(t,134217728)}};w0=function(t){if(t.tag===13){var e=Ir(t),n=Bn(t,e);if(n!==null){var r=vt();sn(n,t,e,r)}gp(t,e)}};E0=function(){return he};T0=function(t,e){var n=he;try{return he=t,e()}finally{he=n}};sd=function(t,e,n){switch(e){case"input":if(Jh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Ku(r);if(!i)throw Error($(90));Zv(r),Jh(r,i)}}}break;case"textarea":t0(t,n);break;case"select":e=n.value,e!=null&&es(t,!!n.multiple,e,!1)}};l0=hp;u0=di;var wA={usingClientEntryPoint:!1,Events:[wa,Wi,Ku,o0,a0,hp]},uo={findFiberByHostInstance:Xr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},EA={bundleType:uo.bundleType,version:uo.version,rendererPackageName:uo.rendererPackageName,rendererConfig:uo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Gn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=d0(t),t===null?null:t.stateNode},findFiberByHostInstance:uo.findFiberByHostInstance||_A,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pl.isDisabled&&pl.supportsFiber)try{Bu=pl.inject(EA),gn=pl}catch{}}Ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wA;Ft.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_p(e))throw Error($(200));return yA(t,e,null,n)};Ft.createRoot=function(t,e){if(!_p(t))throw Error($(299));var n=!1,r="",i=Ww;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=mp(t,1,!1,null,null,n,!1,r,i),t[zn]=e.current,Qo(t.nodeType===8?t.parentNode:t),new yp(e)};Ft.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error($(188)):(t=Object.keys(t).join(","),Error($(268,t)));return t=d0(e),t=t===null?null:t.stateNode,t};Ft.flushSync=function(t){return di(t)};Ft.hydrate=function(t,e,n){if(!nc(e))throw Error($(200));return rc(null,t,e,!0,n)};Ft.hydrateRoot=function(t,e,n){if(!_p(t))throw Error($(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Ww;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Bw(e,null,t,1,n??null,i,!1,s,o),t[zn]=e.current,Qo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new tc(e)};Ft.render=function(t,e,n){if(!nc(e))throw Error($(200));return rc(null,t,e,!1,n)};Ft.unmountComponentAtNode=function(t){if(!nc(t))throw Error($(40));return t._reactRootContainer?(di(function(){rc(null,null,t,!1,function(){t._reactRootContainer=null,t[zn]=null})}),!0):!1};Ft.unstable_batchedUpdates=hp;Ft.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!nc(n))throw Error($(200));if(t==null||t._reactInternals===void 0)throw Error($(38));return rc(t,e,n,!1,r)};Ft.version="18.3.1-next-f1338f8080-20240426";function Hw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hw)}catch(t){console.error(t)}}Hw(),Hv.exports=Ft;var TA=Hv.exports,Ly=TA;Hh.createRoot=Ly.createRoot,Hh.hydrateRoot=Ly.hydrateRoot;var ht=function(){return ht=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},ht.apply(this,arguments)};function vp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function ia(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}var ye="-ms-",Oo="-moz-",ce="-webkit-",qw="comm",ic="rule",wp="decl",IA="@import",Kw="@keyframes",SA="@layer",Gw=Math.abs,Ep=String.fromCharCode,Ud=Object.assign;function RA(t,e){return Be(t,0)^45?(((e<<2^Be(t,0))<<2^Be(t,1))<<2^Be(t,2))<<2^Be(t,3):0}function Qw(t){return t.trim()}function bn(t,e){return(t=e.exec(t))?t[0]:t}function ne(t,e,n){return t.replace(e,n)}function Vl(t,e,n){return t.indexOf(e,n)}function Be(t,e){return t.charCodeAt(e)|0}function ys(t,e,n){return t.slice(e,n)}function dn(t){return t.length}function Yw(t){return t.length}function yo(t,e){return e.push(t),t}function AA(t,e){return t.map(e).join("")}function Vy(t,e){return t.filter(function(n){return!bn(n,e)})}var sc=1,_s=1,Xw=0,Gt=0,Le=0,Os="";function oc(t,e,n,r,i,s,o,l){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:sc,column:_s,length:o,return:"",siblings:l}}function rr(t,e){return Ud(oc("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function Li(t){for(;t.root;)t=rr(t.root,{children:[t]});yo(t,t.siblings)}function kA(){return Le}function PA(){return Le=Gt>0?Be(Os,--Gt):0,_s--,Le===10&&(_s=1,sc--),Le}function on(){return Le=Gt<Xw?Be(Os,Gt++):0,_s++,Le===10&&(_s=1,sc++),Le}function si(){return Be(Os,Gt)}function Ml(){return Gt}function ac(t,e){return ys(Os,t,e)}function Fd(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function CA(t){return sc=_s=1,Xw=dn(Os=t),Gt=0,[]}function xA(t){return Os="",t}function Rh(t){return Qw(ac(Gt-1,jd(t===91?t+2:t===40?t+1:t)))}function NA(t){for(;(Le=si())&&Le<33;)on();return Fd(t)>2||Fd(Le)>3?"":" "}function bA(t,e){for(;--e&&on()&&!(Le<48||Le>102||Le>57&&Le<65||Le>70&&Le<97););return ac(t,Ml()+(e<6&&si()==32&&on()==32))}function jd(t){for(;on();)switch(Le){case t:return Gt;case 34:case 39:t!==34&&t!==39&&jd(Le);break;case 40:t===41&&jd(t);break;case 92:on();break}return Gt}function DA(t,e){for(;on()&&t+Le!==57;)if(t+Le===84&&si()===47)break;return"/*"+ac(e,Gt-1)+"*"+Ep(t===47?t:on())}function OA(t){for(;!Fd(si());)on();return ac(t,Gt)}function LA(t){return xA(Ul("",null,null,null,[""],t=CA(t),0,[0],t))}function Ul(t,e,n,r,i,s,o,l,u){for(var c=0,d=0,p=o,m=0,w=0,S=0,k=1,C=1,E=1,_=0,T="",N=i,M=s,V=r,v=T;C;)switch(S=_,_=on()){case 40:if(S!=108&&Be(v,p-1)==58){Vl(v+=ne(Rh(_),"&","&\f"),"&\f",Gw(c?l[c-1]:0))!=-1&&(E=-1);break}case 34:case 39:case 91:v+=Rh(_);break;case 9:case 10:case 13:case 32:v+=NA(S);break;case 92:v+=bA(Ml()-1,7);continue;case 47:switch(si()){case 42:case 47:yo(VA(DA(on(),Ml()),e,n,u),u);break;default:v+="/"}break;case 123*k:l[c++]=dn(v)*E;case 125*k:case 59:case 0:switch(_){case 0:case 125:C=0;case 59+d:E==-1&&(v=ne(v,/\f/g,"")),w>0&&dn(v)-p&&yo(w>32?Uy(v+";",r,n,p-1,u):Uy(ne(v," ","")+";",r,n,p-2,u),u);break;case 59:v+=";";default:if(yo(V=My(v,e,n,c,d,i,l,T,N=[],M=[],p,s),s),_===123)if(d===0)Ul(v,e,V,V,N,s,p,l,M);else switch(m===99&&Be(v,3)===110?100:m){case 100:case 108:case 109:case 115:Ul(t,V,V,r&&yo(My(t,V,V,0,0,i,l,T,i,N=[],p,M),M),i,M,p,l,r?N:M);break;default:Ul(v,V,V,V,[""],M,0,l,M)}}c=d=w=0,k=E=1,T=v="",p=o;break;case 58:p=1+dn(v),w=S;default:if(k<1){if(_==123)--k;else if(_==125&&k++==0&&PA()==125)continue}switch(v+=Ep(_),_*k){case 38:E=d>0?1:(v+="\f",-1);break;case 44:l[c++]=(dn(v)-1)*E,E=1;break;case 64:si()===45&&(v+=Rh(on())),m=si(),d=p=dn(T=v+=OA(Ml())),_++;break;case 45:S===45&&dn(v)==2&&(k=0)}}return s}function My(t,e,n,r,i,s,o,l,u,c,d,p){for(var m=i-1,w=i===0?s:[""],S=Yw(w),k=0,C=0,E=0;k<r;++k)for(var _=0,T=ys(t,m+1,m=Gw(C=o[k])),N=t;_<S;++_)(N=Qw(C>0?w[_]+" "+T:ne(T,/&\f/g,w[_])))&&(u[E++]=N);return oc(t,e,n,i===0?ic:l,u,c,d,p)}function VA(t,e,n,r){return oc(t,e,n,qw,Ep(kA()),ys(t,2,-2),0,r)}function Uy(t,e,n,r,i){return oc(t,e,n,wp,ys(t,0,r),ys(t,r+1,-1),r,i)}function Jw(t,e,n){switch(RA(t,e)){case 5103:return ce+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ce+t+t;case 4789:return Oo+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return ce+t+Oo+t+ye+t+t;case 5936:switch(Be(t,e+11)){case 114:return ce+t+ye+ne(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return ce+t+ye+ne(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return ce+t+ye+ne(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return ce+t+ye+t+t;case 6165:return ce+t+ye+"flex-"+t+t;case 5187:return ce+t+ne(t,/(\w+).+(:[^]+)/,ce+"box-$1$2"+ye+"flex-$1$2")+t;case 5443:return ce+t+ye+"flex-item-"+ne(t,/flex-|-self/g,"")+(bn(t,/flex-|baseline/)?"":ye+"grid-row-"+ne(t,/flex-|-self/g,""))+t;case 4675:return ce+t+ye+"flex-line-pack"+ne(t,/align-content|flex-|-self/g,"")+t;case 5548:return ce+t+ye+ne(t,"shrink","negative")+t;case 5292:return ce+t+ye+ne(t,"basis","preferred-size")+t;case 6060:return ce+"box-"+ne(t,"-grow","")+ce+t+ye+ne(t,"grow","positive")+t;case 4554:return ce+ne(t,/([^-])(transform)/g,"$1"+ce+"$2")+t;case 6187:return ne(ne(ne(t,/(zoom-|grab)/,ce+"$1"),/(image-set)/,ce+"$1"),t,"")+t;case 5495:case 3959:return ne(t,/(image-set\([^]*)/,ce+"$1$`$1");case 4968:return ne(ne(t,/(.+:)(flex-)?(.*)/,ce+"box-pack:$3"+ye+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ce+t+t;case 4200:if(!bn(t,/flex-|baseline/))return ye+"grid-column-align"+ys(t,e)+t;break;case 2592:case 3360:return ye+ne(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,bn(r.props,/grid-\w+-end/)})?~Vl(t+(n=n[e].value),"span",0)?t:ye+ne(t,"-start","")+t+ye+"grid-row-span:"+(~Vl(n,"span",0)?bn(n,/\d+/):+bn(n,/\d+/)-+bn(t,/\d+/))+";":ye+ne(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return bn(r.props,/grid-\w+-start/)})?t:ye+ne(ne(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return ne(t,/(.+)-inline(.+)/,ce+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(dn(t)-1-e>6)switch(Be(t,e+1)){case 109:if(Be(t,e+4)!==45)break;case 102:return ne(t,/(.+:)(.+)-([^]+)/,"$1"+ce+"$2-$3$1"+Oo+(Be(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Vl(t,"stretch",0)?Jw(ne(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return ne(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,l,u,c){return ye+i+":"+s+c+(o?ye+i+"-span:"+(l?u:+u-+s)+c:"")+t});case 4949:if(Be(t,e+6)===121)return ne(t,":",":"+ce)+t;break;case 6444:switch(Be(t,Be(t,14)===45?18:11)){case 120:return ne(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ce+(Be(t,14)===45?"inline-":"")+"box$3$1"+ce+"$2$3$1"+ye+"$2box$3")+t;case 100:return ne(t,":",":"+ye)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ne(t,"scroll-","scroll-snap-")+t}return t}function wu(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function MA(t,e,n,r){switch(t.type){case SA:if(t.children.length)break;case IA:case wp:return t.return=t.return||t.value;case qw:return"";case Kw:return t.return=t.value+"{"+wu(t.children,r)+"}";case ic:if(!dn(t.value=t.props.join(",")))return""}return dn(n=wu(t.children,r))?t.return=t.value+"{"+n+"}":""}function UA(t){var e=Yw(t);return function(n,r,i,s){for(var o="",l=0;l<e;l++)o+=t[l](n,r,i,s)||"";return o}}function FA(t){return function(e){e.root||(e=e.return)&&t(e)}}function jA(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case wp:t.return=Jw(t.value,t.length,n);return;case Kw:return wu([rr(t,{value:ne(t.value,"@","@"+ce)})],r);case ic:if(t.length)return AA(n=t.props,function(i){switch(bn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Li(rr(t,{props:[ne(i,/:(read-\w+)/,":"+Oo+"$1")]})),Li(rr(t,{props:[i]})),Ud(t,{props:Vy(n,r)});break;case"::placeholder":Li(rr(t,{props:[ne(i,/:(plac\w+)/,":"+ce+"input-$1")]})),Li(rr(t,{props:[ne(i,/:(plac\w+)/,":"+Oo+"$1")]})),Li(rr(t,{props:[ne(i,/:(plac\w+)/,ye+"input-$1")]})),Li(rr(t,{props:[i]})),Ud(t,{props:Vy(n,r)});break}return""})}}var $A={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},bt={},vs=typeof process<"u"&&bt!==void 0&&(bt.REACT_APP_SC_ATTR||bt.SC_ATTR)||"data-styled",Zw="active",e1="data-styled-version",lc="6.1.12",Tp=`/*!sc*/
`,Eu=typeof window<"u"&&"HTMLElement"in window,zA=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&bt!==void 0&&bt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&bt.REACT_APP_SC_DISABLE_SPEEDY!==""?bt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&bt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&bt!==void 0&&bt.SC_DISABLE_SPEEDY!==void 0&&bt.SC_DISABLE_SPEEDY!==""&&bt.SC_DISABLE_SPEEDY!=="false"&&bt.SC_DISABLE_SPEEDY),BA={},uc=Object.freeze([]),ws=Object.freeze({});function t1(t,e,n){return n===void 0&&(n=ws),t.theme!==n.theme&&t.theme||e||n.theme}var n1=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),WA=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,HA=/(^-|-$)/g;function Fy(t){return t.replace(WA,"-").replace(HA,"")}var qA=/(a)(d)/gi,ml=52,jy=function(t){return String.fromCharCode(t+(t>25?39:97))};function $d(t){var e,n="";for(e=Math.abs(t);e>ml;e=e/ml|0)n=jy(e%ml)+n;return(jy(e%ml)+n).replace(qA,"$1-$2")}var Ah,r1=5381,Xi=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},i1=function(t){return Xi(r1,t)};function s1(t){return $d(i1(t)>>>0)}function KA(t){return t.displayName||t.name||"Component"}function kh(t){return typeof t=="string"&&!0}var o1=typeof Symbol=="function"&&Symbol.for,a1=o1?Symbol.for("react.memo"):60115,GA=o1?Symbol.for("react.forward_ref"):60112,QA={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},YA={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},l1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},XA=((Ah={})[GA]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ah[a1]=l1,Ah);function $y(t){return("type"in(e=t)&&e.type.$$typeof)===a1?l1:"$$typeof"in t?XA[t.$$typeof]:QA;var e}var JA=Object.defineProperty,ZA=Object.getOwnPropertyNames,zy=Object.getOwnPropertySymbols,ek=Object.getOwnPropertyDescriptor,tk=Object.getPrototypeOf,By=Object.prototype;function u1(t,e,n){if(typeof e!="string"){if(By){var r=tk(e);r&&r!==By&&u1(t,r,n)}var i=ZA(e);zy&&(i=i.concat(zy(e)));for(var s=$y(t),o=$y(e),l=0;l<i.length;++l){var u=i[l];if(!(u in YA||n&&n[u]||o&&u in o||s&&u in s)){var c=ek(e,u);try{JA(t,u,c)}catch{}}}}return t}function Es(t){return typeof t=="function"}function Ip(t){return typeof t=="object"&&"styledComponentId"in t}function ei(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function zd(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=t[r];return n}function sa(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Bd(t,e,n){if(n===void 0&&(n=!1),!n&&!sa(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=Bd(t[r],e[r]);else if(sa(e))for(var r in e)t[r]=Bd(t[r],e[r]);return t}function Sp(t,e){Object.defineProperty(t,"toString",{value:e})}function Ta(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var nk=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;e>=s;)if((s<<=1)<0)throw Ta(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var l=this.indexOfGroup(e+1),u=(o=0,n.length);o<u;o++)this.tag.insertRule(l,n[o])&&(this.groupSizes[e]++,l++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(Tp);return n},t}(),Fl=new Map,Tu=new Map,jl=1,gl=function(t){if(Fl.has(t))return Fl.get(t);for(;Tu.has(jl);)jl++;var e=jl++;return Fl.set(t,e),Tu.set(e,t),e},rk=function(t,e){jl=e+1,Fl.set(t,e),Tu.set(e,t)},ik="style[".concat(vs,"][").concat(e1,'="').concat(lc,'"]'),sk=new RegExp("^".concat(vs,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ok=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},ak=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(Tp),i=[],s=0,o=r.length;s<o;s++){var l=r[s].trim();if(l){var u=l.match(sk);if(u){var c=0|parseInt(u[1],10),d=u[2];c!==0&&(rk(d,c),ok(t,d,u[3]),t.getTag().insertRules(c,i)),i.length=0}else i.push(l)}}},Wy=function(t){for(var e=document.querySelectorAll(ik),n=0,r=e.length;n<r;n++){var i=e[n];i&&i.getAttribute(vs)!==Zw&&(ak(t,i),i.parentNode&&i.parentNode.removeChild(i))}};function lk(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var c1=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(l){var u=Array.from(l.querySelectorAll("style[".concat(vs,"]")));return u[u.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(vs,Zw),r.setAttribute(e1,lc);var o=lk();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},uk=function(){function t(e){this.element=c1(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw Ta(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),ck=function(){function t(e){this.element=c1(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),hk=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),Hy=Eu,dk={isServer:!Eu,useCSSOMInjection:!zA},Iu=function(){function t(e,n,r){e===void 0&&(e=ws),n===void 0&&(n={});var i=this;this.options=ht(ht({},dk),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Eu&&Hy&&(Hy=!1,Wy(this)),Sp(this,function(){return function(s){for(var o=s.getTag(),l=o.length,u="",c=function(p){var m=function(E){return Tu.get(E)}(p);if(m===void 0)return"continue";var w=s.names.get(m),S=o.getGroup(p);if(w===void 0||!w.size||S.length===0)return"continue";var k="".concat(vs,".g").concat(p,'[id="').concat(m,'"]'),C="";w!==void 0&&w.forEach(function(E){E.length>0&&(C+="".concat(E,","))}),u+="".concat(S).concat(k,'{content:"').concat(C,'"}').concat(Tp)},d=0;d<l;d++)c(d);return u}(i)})}return t.registerId=function(e){return gl(e)},t.prototype.rehydrate=function(){!this.server&&Eu&&Wy(this)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(ht(ht({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new hk(i):r?new uk(i):new ck(i)}(this.options),new nk(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(gl(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(gl(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(gl(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),fk=/&/g,pk=/^\s*\/\/.*$/gm;function h1(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=h1(n.children,e)),n})}function mk(t){var e,n,r,i=ws,s=i.options,o=s===void 0?ws:s,l=i.plugins,u=l===void 0?uc:l,c=function(m,w,S){return S.startsWith(n)&&S.endsWith(n)&&S.replaceAll(n,"").length>0?".".concat(e):m},d=u.slice();d.push(function(m){m.type===ic&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(fk,n).replace(r,c))}),o.prefix&&d.push(jA),d.push(MA);var p=function(m,w,S,k){w===void 0&&(w=""),S===void 0&&(S=""),k===void 0&&(k="&"),e=k,n=w,r=new RegExp("\\".concat(n,"\\b"),"g");var C=m.replace(pk,""),E=LA(S||w?"".concat(S," ").concat(w," { ").concat(C," }"):C);o.namespace&&(E=h1(E,o.namespace));var _=[];return wu(E,UA(d.concat(FA(function(T){return _.push(T)})))),_};return p.hash=u.length?u.reduce(function(m,w){return w.name||Ta(15),Xi(m,w.name)},r1).toString():"",p}var gk=new Iu,Wd=mk(),d1=nn.createContext({shouldForwardProp:void 0,styleSheet:gk,stylis:Wd});d1.Consumer;nn.createContext(void 0);function Hd(){return F.useContext(d1)}var yk=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=Wd);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,Sp(this,function(){throw Ta(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=Wd),this.name+e.hash},t}(),_k=function(t){return t>="A"&&t<="Z"};function qy(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;_k(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var f1=function(t){return t==null||t===!1||t===""},p1=function(t){var e,n,r=[];for(var i in t){var s=t[i];t.hasOwnProperty(i)&&!f1(s)&&(Array.isArray(s)&&s.isCss||Es(s)?r.push("".concat(qy(i),":"),s,";"):sa(s)?r.push.apply(r,ia(ia(["".concat(i," {")],p1(s),!1),["}"],!1)):r.push("".concat(qy(i),": ").concat((e=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in $A||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Rr(t,e,n,r){if(f1(t))return[];if(Ip(t))return[".".concat(t.styledComponentId)];if(Es(t)){if(!Es(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var i=t(e);return Rr(i,e,n,r)}var s;return t instanceof yk?n?(t.inject(n,r),[t.getName(r)]):[t]:sa(t)?p1(t):Array.isArray(t)?Array.prototype.concat.apply(uc,t.map(function(o){return Rr(o,e,n,r)})):[t.toString()]}function m1(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Es(n)&&!Ip(n))return!1}return!0}var vk=i1(lc),wk=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&m1(e),this.componentId=n,this.baseHash=Xi(vk,n),this.baseStyle=r,Iu.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=ei(i,this.staticRulesId);else{var s=zd(Rr(this.rules,e,n,r)),o=$d(Xi(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var l=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,l)}i=ei(i,o),this.staticRulesId=o}else{for(var u=Xi(this.baseHash,r.hash),c="",d=0;d<this.rules.length;d++){var p=this.rules[d];if(typeof p=="string")c+=p;else if(p){var m=zd(Rr(p,e,n,r));u=Xi(u,m+d),c+=m}}if(c){var w=$d(u>>>0);n.hasNameForId(this.componentId,w)||n.insertRules(this.componentId,w,r(c,".".concat(w),void 0,this.componentId)),i=ei(i,w)}}return i},t}(),Rp=nn.createContext(void 0);Rp.Consumer;var Ph={};function Ek(t,e,n){var r=Ip(t),i=t,s=!kh(t),o=e.attrs,l=o===void 0?uc:o,u=e.componentId,c=u===void 0?function(N,M){var V=typeof N!="string"?"sc":Fy(N);Ph[V]=(Ph[V]||0)+1;var v="".concat(V,"-").concat(s1(lc+V+Ph[V]));return M?"".concat(M,"-").concat(v):v}(e.displayName,e.parentComponentId):u,d=e.displayName,p=d===void 0?function(N){return kh(N)?"styled.".concat(N):"Styled(".concat(KA(N),")")}(t):d,m=e.displayName&&e.componentId?"".concat(Fy(e.displayName),"-").concat(e.componentId):e.componentId||c,w=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,S=e.shouldForwardProp;if(r&&i.shouldForwardProp){var k=i.shouldForwardProp;if(e.shouldForwardProp){var C=e.shouldForwardProp;S=function(N,M){return k(N,M)&&C(N,M)}}else S=k}var E=new wk(n,m,r?i.componentStyle:void 0);function _(N,M){return function(V,v,y){var I=V.attrs,R=V.componentStyle,P=V.defaultProps,x=V.foldedComponentIds,A=V.styledComponentId,et=V.target,Yt=nn.useContext(Rp),An=Hd(),tt=V.shouldForwardProp||An.shouldForwardProp,L=t1(v,Yt,P)||ws,z=function(Tt,pt,It){for(var Br,kn=ht(ht({},pt),{className:void 0,theme:It}),Xn=0;Xn<Tt.length;Xn+=1){var Pn=Es(Br=Tt[Xn])?Br(kn):Br;for(var $t in Pn)kn[$t]=$t==="className"?ei(kn[$t],Pn[$t]):$t==="style"?ht(ht({},kn[$t]),Pn[$t]):Pn[$t]}return pt.className&&(kn.className=ei(kn.className,pt.className)),kn}(I,v,L),K=z.as||et,ee={};for(var te in z)z[te]===void 0||te[0]==="$"||te==="as"||te==="theme"&&z.theme===L||(te==="forwardedAs"?ee.as=z.forwardedAs:tt&&!tt(te,K)||(ee[te]=z[te]));var we=function(Tt,pt){var It=Hd(),Br=Tt.generateAndInjectStyles(pt,It.styleSheet,It.stylis);return Br}(R,z),xt=ei(x,A);return we&&(xt+=" "+we),z.className&&(xt+=" "+z.className),ee[kh(K)&&!n1.has(K)?"class":"className"]=xt,ee.ref=y,F.createElement(K,ee)}(T,N,M)}_.displayName=p;var T=nn.forwardRef(_);return T.attrs=w,T.componentStyle=E,T.displayName=p,T.shouldForwardProp=S,T.foldedComponentIds=r?ei(i.foldedComponentIds,i.styledComponentId):"",T.styledComponentId=m,T.target=r?i.target:t,Object.defineProperty(T,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(N){this._foldedDefaultProps=r?function(M){for(var V=[],v=1;v<arguments.length;v++)V[v-1]=arguments[v];for(var y=0,I=V;y<I.length;y++)Bd(M,I[y],!0);return M}({},i.defaultProps,N):N}}),Sp(T,function(){return".".concat(T.styledComponentId)}),s&&u1(T,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),T}function Ky(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var Gy=function(t){return Object.assign(t,{isCss:!0})};function Ap(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(Es(t)||sa(t))return Gy(Rr(Ky(uc,ia([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?Rr(r):Gy(Rr(Ky(r,e)))}function qd(t,e,n){if(n===void 0&&(n=ws),!e)throw Ta(1,e);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return t(e,n,Ap.apply(void 0,ia([i],s,!1)))};return r.attrs=function(i){return qd(t,e,ht(ht({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return qd(t,e,ht(ht({},n),i))},r}var g1=function(t){return qd(Ek,t)},G=g1;n1.forEach(function(t){G[t]=g1(t)});var Tk=function(){function t(e,n){this.rules=e,this.componentId=n,this.isStatic=m1(e),Iu.registerId(this.componentId+1)}return t.prototype.createStyles=function(e,n,r,i){var s=i(zd(Rr(this.rules,n,r,i)),""),o=this.componentId+e;r.insertRules(o,o,s)},t.prototype.removeStyles=function(e,n){n.clearRules(this.componentId+e)},t.prototype.renderStyles=function(e,n,r,i){e>2&&Iu.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,n,r,i)},t}();function y1(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=Ap.apply(void 0,ia([t],e,!1)),i="sc-global-".concat(s1(JSON.stringify(r))),s=new Tk(r,i),o=function(u){var c=Hd(),d=nn.useContext(Rp),p=nn.useRef(c.styleSheet.allocateGSInstance(i)).current;return c.styleSheet.server&&l(p,u,c.styleSheet,d,c.stylis),nn.useLayoutEffect(function(){if(!c.styleSheet.server)return l(p,u,c.styleSheet,d,c.stylis),function(){return s.removeStyles(p,c.styleSheet)}},[p,u,c.styleSheet,d,c.stylis]),null};function l(u,c,d,p,m){if(s.isStatic)s.renderStyles(u,BA,d,m);else{var w=ht(ht({},c),{theme:t1(c,p,o.defaultProps)});s.renderStyles(u,w,d,m)}}return nn.memo(o)}const Ik=G.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`,Sk=G.span`
  font-size: 24px;
`;function Rk(){return D.jsx(Ik,{children:D.jsx(Sk,{children:"Loading..."})})}var _1=function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t},v1=Ap(Qy||(Qy=_1([`
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
`])));y1(Yy||(Yy=_1(["",""],["",""])),v1);var Qy,Yy;/**
 * @remix-run/router v1.19.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function oa(){return oa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},oa.apply(this,arguments)}var mr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(mr||(mr={}));const Xy="popstate";function Ak(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:l="",hash:u=""}=Si(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),Kd("",{pathname:o,search:l,hash:u},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),l="";if(o&&o.getAttribute("href")){let u=i.location.href,c=u.indexOf("#");l=c===-1?u:u.slice(0,c)}return l+"#"+(typeof s=="string"?s:Su(s))}function r(i,s){kp(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return Pk(e,n,r,t)}function be(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function kp(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function kk(){return Math.random().toString(36).substr(2,8)}function Jy(t,e){return{usr:t.state,key:t.key,idx:e}}function Kd(t,e,n,r){return n===void 0&&(n=null),oa({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Si(e):e,{state:n,key:e&&e.key||r||kk()})}function Su(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Si(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Pk(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=mr.Pop,u=null,c=d();c==null&&(c=0,o.replaceState(oa({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function p(){l=mr.Pop;let C=d(),E=C==null?null:C-c;c=C,u&&u({action:l,location:k.location,delta:E})}function m(C,E){l=mr.Push;let _=Kd(k.location,C,E);n&&n(_,C),c=d()+1;let T=Jy(_,c),N=k.createHref(_);try{o.pushState(T,"",N)}catch(M){if(M instanceof DOMException&&M.name==="DataCloneError")throw M;i.location.assign(N)}s&&u&&u({action:l,location:k.location,delta:1})}function w(C,E){l=mr.Replace;let _=Kd(k.location,C,E);n&&n(_,C),c=d();let T=Jy(_,c),N=k.createHref(_);o.replaceState(T,"",N),s&&u&&u({action:l,location:k.location,delta:0})}function S(C){let E=i.location.origin!=="null"?i.location.origin:i.location.href,_=typeof C=="string"?C:Su(C);return _=_.replace(/ $/,"%20"),be(E,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,E)}let k={get action(){return l},get location(){return t(i,o)},listen(C){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Xy,p),u=C,()=>{i.removeEventListener(Xy,p),u=null}},createHref(C){return e(i,C)},createURL:S,encodeLocation(C){let E=S(C);return{pathname:E.pathname,search:E.search,hash:E.hash}},push:m,replace:w,go(C){return o.go(C)}};return k}var Zy;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Zy||(Zy={}));function Ck(t,e,n){return n===void 0&&(n="/"),xk(t,e,n,!1)}function xk(t,e,n,r){let i=typeof e=="string"?Si(e):e,s=Pp(i.pathname||"/",n);if(s==null)return null;let o=w1(t);Nk(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=zk(s);l=jk(o[u],c,r)}return l}function w1(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(be(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Ar([r,u.relativePath]),d=n.concat(u);s.children&&s.children.length>0&&(be(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),w1(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:Uk(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of E1(s.path))i(s,o,u)}),e}function E1(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=E1(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function Nk(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Fk(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const bk=/^:[\w-]+$/,Dk=3,Ok=2,Lk=1,Vk=10,Mk=-2,e_=t=>t==="*";function Uk(t,e){let n=t.split("/"),r=n.length;return n.some(e_)&&(r+=Mk),e&&(r+=Ok),n.filter(i=>!e_(i)).reduce((i,s)=>i+(bk.test(s)?Dk:s===""?Lk:Vk),r)}function Fk(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function jk(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",p=t_({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),m=u.route;if(!p&&c&&n&&!r[r.length-1].route.index&&(p=t_({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},d)),!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:Ar([s,p.pathname]),pathnameBase:qk(Ar([s,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(s=Ar([s,p.pathnameBase]))}return o}function t_(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=$k(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,d,p)=>{let{paramName:m,isOptional:w}=d;if(m==="*"){let k=l[p]||"";o=s.slice(0,s.length-k.length).replace(/(.)\/+$/,"$1")}const S=l[p];return w&&!S?c[m]=void 0:c[m]=(S||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function $k(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),kp(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function zk(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return kp(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Pp(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Bk(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Si(t):t;return{pathname:n?n.startsWith("/")?n:Wk(n,e):e,search:Kk(r),hash:Gk(i)}}function Wk(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ch(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Hk(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Cp(t,e){let n=Hk(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function xp(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Si(t):(i=oa({},t),be(!i.pathname||!i.pathname.includes("?"),Ch("?","pathname","search",i)),be(!i.pathname||!i.pathname.includes("#"),Ch("#","pathname","hash",i)),be(!i.search||!i.search.includes("#"),Ch("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}l=p>=0?e[p]:"/"}let u=Bk(i,l),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const Ar=t=>t.join("/").replace(/\/\/+/g,"/"),qk=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Kk=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Gk=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Qk(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const T1=["post","put","patch","delete"];new Set(T1);const Yk=["get",...T1];new Set(Yk);/**
 * React Router v6.26.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function aa(){return aa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},aa.apply(this,arguments)}const Np=F.createContext(null),Xk=F.createContext(null),jr=F.createContext(null),cc=F.createContext(null),Qn=F.createContext({outlet:null,matches:[],isDataRoute:!1}),I1=F.createContext(null);function Jk(t,e){let{relative:n}=e===void 0?{}:e;Ls()||be(!1);let{basename:r,navigator:i}=F.useContext(jr),{hash:s,pathname:o,search:l}=R1(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:Ar([r,o])),i.createHref({pathname:u,search:l,hash:s})}function Ls(){return F.useContext(cc)!=null}function Ia(){return Ls()||be(!1),F.useContext(cc).location}function S1(t){F.useContext(jr).static||F.useLayoutEffect(t)}function Vs(){let{isDataRoute:t}=F.useContext(Qn);return t?fP():Zk()}function Zk(){Ls()||be(!1);let t=F.useContext(Np),{basename:e,future:n,navigator:r}=F.useContext(jr),{matches:i}=F.useContext(Qn),{pathname:s}=Ia(),o=JSON.stringify(Cp(i,n.v7_relativeSplatPath)),l=F.useRef(!1);return S1(()=>{l.current=!0}),F.useCallback(function(c,d){if(d===void 0&&(d={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let p=xp(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:Ar([e,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[e,r,o,s,t])}const eP=F.createContext(null);function tP(t){let e=F.useContext(Qn).outlet;return e&&F.createElement(eP.Provider,{value:t},e)}function R1(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=F.useContext(jr),{matches:i}=F.useContext(Qn),{pathname:s}=Ia(),o=JSON.stringify(Cp(i,r.v7_relativeSplatPath));return F.useMemo(()=>xp(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function nP(t,e){return rP(t,e)}function rP(t,e,n,r){Ls()||be(!1);let{navigator:i}=F.useContext(jr),{matches:s}=F.useContext(Qn),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=Ia(),d;if(e){var p;let C=typeof e=="string"?Si(e):e;u==="/"||(p=C.pathname)!=null&&p.startsWith(u)||be(!1),d=C}else d=c;let m=d.pathname||"/",w=m;if(u!=="/"){let C=u.replace(/^\//,"").split("/");w="/"+m.replace(/^\//,"").split("/").slice(C.length).join("/")}let S=Ck(t,{pathname:w}),k=lP(S&&S.map(C=>Object.assign({},C,{params:Object.assign({},l,C.params),pathname:Ar([u,i.encodeLocation?i.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?u:Ar([u,i.encodeLocation?i.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),s,n,r);return e&&k?F.createElement(cc.Provider,{value:{location:aa({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:mr.Pop}},k):k}function iP(){let t=dP(),e=Qk(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return F.createElement(F.Fragment,null,F.createElement("h2",null,"Unexpected Application Error!"),F.createElement("h3",{style:{fontStyle:"italic"}},e),n?F.createElement("pre",{style:i},n):null,null)}const sP=F.createElement(iP,null);class oP extends F.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?F.createElement(Qn.Provider,{value:this.props.routeContext},F.createElement(I1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function aP(t){let{routeContext:e,match:n,children:r}=t,i=F.useContext(Np);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),F.createElement(Qn.Provider,{value:e},r)}function lP(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);d>=0||be(!1),o=o.slice(0,Math.min(o.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let p=o[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=d),p.route.id){let{loaderData:m,errors:w}=n,S=p.route.loader&&m[p.route.id]===void 0&&(!w||w[p.route.id]===void 0);if(p.route.lazy||S){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,p,m)=>{let w,S=!1,k=null,C=null;n&&(w=l&&p.route.id?l[p.route.id]:void 0,k=p.route.errorElement||sP,u&&(c<0&&m===0?(S=!0,C=null):c===m&&(S=!0,C=p.route.hydrateFallbackElement||null)));let E=e.concat(o.slice(0,m+1)),_=()=>{let T;return w?T=k:S?T=C:p.route.Component?T=F.createElement(p.route.Component,null):p.route.element?T=p.route.element:T=d,F.createElement(aP,{match:p,routeContext:{outlet:d,matches:E,isDataRoute:n!=null},children:T})};return n&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?F.createElement(oP,{location:n.location,revalidation:n.revalidation,component:k,error:w,children:_(),routeContext:{outlet:null,matches:E,isDataRoute:!0}}):_()},null)}var A1=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(A1||{}),Ru=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Ru||{});function uP(t){let e=F.useContext(Np);return e||be(!1),e}function cP(t){let e=F.useContext(Xk);return e||be(!1),e}function hP(t){let e=F.useContext(Qn);return e||be(!1),e}function k1(t){let e=hP(),n=e.matches[e.matches.length-1];return n.route.id||be(!1),n.route.id}function dP(){var t;let e=F.useContext(I1),n=cP(Ru.UseRouteError),r=k1(Ru.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function fP(){let{router:t}=uP(A1.UseNavigateStable),e=k1(Ru.UseNavigateStable),n=F.useRef(!1);return S1(()=>{n.current=!0}),F.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,aa({fromRouteId:e},s)))},[t,e])}function pP(t){let{to:e,replace:n,state:r,relative:i}=t;Ls()||be(!1);let{future:s,static:o}=F.useContext(jr),{matches:l}=F.useContext(Qn),{pathname:u}=Ia(),c=Vs(),d=xp(e,Cp(l,s.v7_relativeSplatPath),u,i==="path"),p=JSON.stringify(d);return F.useEffect(()=>c(JSON.parse(p),{replace:n,state:r,relative:i}),[c,p,i,n,r]),null}function mP(t){return tP(t.context)}function _o(t){be(!1)}function gP(t){let{basename:e="/",children:n=null,location:r,navigationType:i=mr.Pop,navigator:s,static:o=!1,future:l}=t;Ls()&&be(!1);let u=e.replace(/^\/*/,"/"),c=F.useMemo(()=>({basename:u,navigator:s,static:o,future:aa({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=Si(r));let{pathname:d="/",search:p="",hash:m="",state:w=null,key:S="default"}=r,k=F.useMemo(()=>{let C=Pp(d,u);return C==null?null:{location:{pathname:C,search:p,hash:m,state:w,key:S},navigationType:i}},[u,d,p,m,w,S,i]);return k==null?null:F.createElement(jr.Provider,{value:c},F.createElement(cc.Provider,{children:n,value:k}))}function yP(t){let{children:e,location:n}=t;return nP(Gd(e),n)}new Promise(()=>{});function Gd(t,e){e===void 0&&(e=[]);let n=[];return F.Children.forEach(t,(r,i)=>{if(!F.isValidElement(r))return;let s=[...e,i];if(r.type===F.Fragment){n.push.apply(n,Gd(r.props.children,s));return}r.type!==_o&&be(!1),!r.props.index||!r.props.children||be(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Gd(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.26.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qd(){return Qd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Qd.apply(this,arguments)}function _P(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function vP(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function wP(t,e){return t.button===0&&(!e||e==="_self")&&!vP(t)}const EP=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],TP="6";try{window.__reactRouterVersion=TP}catch{}const IP="startTransition",n_=hS[IP];function SP(t){let{basename:e,children:n,future:r,window:i}=t,s=F.useRef();s.current==null&&(s.current=Ak({window:i,v5Compat:!0}));let o=s.current,[l,u]=F.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},d=F.useCallback(p=>{c&&n_?n_(()=>u(p)):u(p)},[u,c]);return F.useLayoutEffect(()=>o.listen(d),[o,d]),F.createElement(gP,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const RP=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",AP=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,P1=F.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:c,preventScrollReset:d,unstable_viewTransition:p}=e,m=_P(e,EP),{basename:w}=F.useContext(jr),S,k=!1;if(typeof c=="string"&&AP.test(c)&&(S=c,RP))try{let T=new URL(window.location.href),N=c.startsWith("//")?new URL(T.protocol+c):new URL(c),M=Pp(N.pathname,w);N.origin===T.origin&&M!=null?c=M+N.search+N.hash:k=!0}catch{}let C=Jk(c,{relative:i}),E=kP(c,{replace:o,state:l,target:u,preventScrollReset:d,relative:i,unstable_viewTransition:p});function _(T){r&&r(T),T.defaultPrevented||E(T)}return F.createElement("a",Qd({},m,{href:S||C,onClick:k||s?r:_,ref:n,target:u}))});var r_;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(r_||(r_={}));var i_;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(i_||(i_={}));function kP(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l}=e===void 0?{}:e,u=Vs(),c=Ia(),d=R1(t,{relative:o});return F.useCallback(p=>{if(wP(p,n)){p.preventDefault();let m=r!==void 0?r:Su(c)===Su(d);u(t,{replace:m,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l})}},[c,u,d,r,i,n,t,s,o,l])}function PP(){return D.jsx(D.Fragment,{children:D.jsx(mP,{})})}var s_={};/**
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
 */const C1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},CP=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},x1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,p=(s&3)<<4|l>>4;let m=(l&15)<<2|c>>6,w=c&63;u||(w=64,o||(m=64)),r.push(n[d],n[p],n[m],n[w])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(C1(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):CP(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||p==null)throw new xP;const m=s<<2|l>>4;if(r.push(m),c!==64){const w=l<<4&240|c>>2;if(r.push(w),p!==64){const S=c<<6&192|p;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class xP extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const NP=function(t){const e=C1(t);return x1.encodeByteArray(e,!0)},Au=function(t){return NP(t).replace(/\./g,"")},N1=function(t){try{return x1.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function bP(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const DP=()=>bP().__FIREBASE_DEFAULTS__,OP=()=>{if(typeof process>"u"||typeof s_>"u")return;const t=s_.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},LP=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&N1(t[1]);return e&&JSON.parse(e)},hc=()=>{try{return DP()||OP()||LP()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},b1=t=>{var e,n;return(n=(e=hc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},D1=t=>{const e=b1(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},O1=()=>{var t;return(t=hc())===null||t===void 0?void 0:t.config},L1=t=>{var e;return(e=hc())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class VP{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function V1(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Au(JSON.stringify(n)),Au(JSON.stringify(o)),""].join(".")}/**
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
 */function Je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function MP(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Je())}function UP(){var t;const e=(t=hc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function FP(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function jP(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $P(){const t=Je();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function zP(){return!UP()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function BP(){try{return typeof indexedDB=="object"}catch{return!1}}function WP(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const HP="FirebaseError";class Qt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=HP,Object.setPrototypeOf(this,Qt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Sa.prototype.create)}}class Sa{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?qP(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Qt(i,l,r)}}function qP(t,e){return t.replace(KP,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const KP=/\{\$([^}]+)}/g;function GP(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ku(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(o_(s)&&o_(o)){if(!ku(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function o_(t){return t!==null&&typeof t=="object"}/**
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
 */function Ra(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function vo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function wo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function QP(t,e){const n=new YP(t,e);return n.subscribe.bind(n)}class YP{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");XP(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=xh),i.error===void 0&&(i.error=xh),i.complete===void 0&&(i.complete=xh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function XP(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function xh(){}/**
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
 */function Pe(t){return t&&t._delegate?t._delegate:t}class Dr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Yr="[DEFAULT]";/**
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
 */class JP{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new VP;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(eC(e))try{this.getOrInitializeService({instanceIdentifier:Yr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Yr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Yr){return this.instances.has(e)}getOptions(e=Yr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ZP(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Yr){return this.component?this.component.multipleInstances?e:Yr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ZP(t){return t===Yr?void 0:t}function eC(t){return t.instantiationMode==="EAGER"}/**
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
 */class tC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new JP(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const nC={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},rC=se.INFO,iC={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},sC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=iC[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class bp{constructor(e){this.name=e,this._logLevel=rC,this._logHandler=sC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?nC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const oC=(t,e)=>e.some(n=>t instanceof n);let a_,l_;function aC(){return a_||(a_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function lC(){return l_||(l_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const M1=new WeakMap,Yd=new WeakMap,U1=new WeakMap,Nh=new WeakMap,Dp=new WeakMap;function uC(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(kr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&M1.set(n,t)}).catch(()=>{}),Dp.set(e,t),e}function cC(t){if(Yd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Yd.set(t,e)}let Xd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Yd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||U1.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return kr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function hC(t){Xd=t(Xd)}function dC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(bh(this),e,...n);return U1.set(r,e.sort?e.sort():[e]),kr(r)}:lC().includes(t)?function(...e){return t.apply(bh(this),e),kr(M1.get(this))}:function(...e){return kr(t.apply(bh(this),e))}}function fC(t){return typeof t=="function"?dC(t):(t instanceof IDBTransaction&&cC(t),oC(t,aC())?new Proxy(t,Xd):t)}function kr(t){if(t instanceof IDBRequest)return uC(t);if(Nh.has(t))return Nh.get(t);const e=fC(t);return e!==t&&(Nh.set(t,e),Dp.set(e,t)),e}const bh=t=>Dp.get(t);function pC(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=kr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(kr(o.result),u.oldVersion,u.newVersion,kr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const mC=["get","getKey","getAll","getAllKeys","count"],gC=["put","add","delete","clear"],Dh=new Map;function u_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Dh.get(e))return Dh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=gC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||mC.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return Dh.set(e,s),s}hC(t=>({...t,get:(e,n,r)=>u_(e,n)||t.get(e,n,r),has:(e,n)=>!!u_(e,n)||t.has(e,n)}));/**
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
 */class yC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(_C(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function _C(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Jd="@firebase/app",c_="0.10.8";/**
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
 */const fi=new bp("@firebase/app"),vC="@firebase/app-compat",wC="@firebase/analytics-compat",EC="@firebase/analytics",TC="@firebase/app-check-compat",IC="@firebase/app-check",SC="@firebase/auth",RC="@firebase/auth-compat",AC="@firebase/database",kC="@firebase/database-compat",PC="@firebase/functions",CC="@firebase/functions-compat",xC="@firebase/installations",NC="@firebase/installations-compat",bC="@firebase/messaging",DC="@firebase/messaging-compat",OC="@firebase/performance",LC="@firebase/performance-compat",VC="@firebase/remote-config",MC="@firebase/remote-config-compat",UC="@firebase/storage",FC="@firebase/storage-compat",jC="@firebase/firestore",$C="@firebase/vertexai-preview",zC="@firebase/firestore-compat",BC="firebase",WC="10.12.5";/**
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
 */const Zd="[DEFAULT]",HC={[Jd]:"fire-core",[vC]:"fire-core-compat",[EC]:"fire-analytics",[wC]:"fire-analytics-compat",[IC]:"fire-app-check",[TC]:"fire-app-check-compat",[SC]:"fire-auth",[RC]:"fire-auth-compat",[AC]:"fire-rtdb",[kC]:"fire-rtdb-compat",[PC]:"fire-fn",[CC]:"fire-fn-compat",[xC]:"fire-iid",[NC]:"fire-iid-compat",[bC]:"fire-fcm",[DC]:"fire-fcm-compat",[OC]:"fire-perf",[LC]:"fire-perf-compat",[VC]:"fire-rc",[MC]:"fire-rc-compat",[UC]:"fire-gcs",[FC]:"fire-gcs-compat",[jC]:"fire-fst",[zC]:"fire-fst-compat",[$C]:"fire-vertex","fire-js":"fire-js",[BC]:"fire-js-all"};/**
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
 */const Pu=new Map,qC=new Map,ef=new Map;function h_(t,e){try{t.container.addComponent(e)}catch(n){fi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function pi(t){const e=t.name;if(ef.has(e))return fi.debug(`There were multiple attempts to register component ${e}.`),!1;ef.set(e,t);for(const n of Pu.values())h_(n,t);for(const n of qC.values())h_(n,t);return!0}function dc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function pn(t){return t.settings!==void 0}/**
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
 */const KC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Pr=new Sa("app","Firebase",KC);/**
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
 */class GC{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Dr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Pr.create("app-deleted",{appName:this._name})}}/**
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
 */const Ri=WC;function F1(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Zd,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Pr.create("bad-app-name",{appName:String(i)});if(n||(n=O1()),!n)throw Pr.create("no-options");const s=Pu.get(i);if(s){if(ku(n,s.options)&&ku(r,s.config))return s;throw Pr.create("duplicate-app",{appName:i})}const o=new tC(i);for(const u of ef.values())o.addComponent(u);const l=new GC(n,r,o);return Pu.set(i,l),l}function Op(t=Zd){const e=Pu.get(t);if(!e&&t===Zd&&O1())return F1();if(!e)throw Pr.create("no-app",{appName:t});return e}function _n(t,e,n){var r;let i=(r=HC[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),fi.warn(l.join(" "));return}pi(new Dr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const QC="firebase-heartbeat-database",YC=1,la="firebase-heartbeat-store";let Oh=null;function j1(){return Oh||(Oh=pC(QC,YC,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(la)}catch(n){console.warn(n)}}}}).catch(t=>{throw Pr.create("idb-open",{originalErrorMessage:t.message})})),Oh}async function XC(t){try{const n=(await j1()).transaction(la),r=await n.objectStore(la).get($1(t));return await n.done,r}catch(e){if(e instanceof Qt)fi.warn(e.message);else{const n=Pr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});fi.warn(n.message)}}}async function d_(t,e){try{const r=(await j1()).transaction(la,"readwrite");await r.objectStore(la).put(e,$1(t)),await r.done}catch(n){if(n instanceof Qt)fi.warn(n.message);else{const r=Pr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});fi.warn(r.message)}}}function $1(t){return`${t.name}!${t.options.appId}`}/**
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
 */const JC=1024,ZC=30*24*60*60*1e3;class ex{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new nx(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=f_();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=ZC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=f_(),{heartbeatsToSend:r,unsentEntries:i}=tx(this._heartbeatsCache.heartbeats),s=Au(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function f_(){return new Date().toISOString().substring(0,10)}function tx(t,e=JC){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),p_(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),p_(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class nx{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return BP()?WP().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await XC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return d_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return d_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function p_(t){return Au(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function rx(t){pi(new Dr("platform-logger",e=>new yC(e),"PRIVATE")),pi(new Dr("heartbeat",e=>new ex(e),"PRIVATE")),_n(Jd,c_,t),_n(Jd,c_,"esm2017"),_n("fire-js","")}rx("");var ix="firebase",sx="10.12.5";/**
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
 */_n(ix,sx,"app");function z1(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ox=z1,B1=new Sa("auth","Firebase",z1());/**
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
 */const Cu=new bp("@firebase/auth");function ax(t,...e){Cu.logLevel<=se.WARN&&Cu.warn(`Auth (${Ri}): ${t}`,...e)}function $l(t,...e){Cu.logLevel<=se.ERROR&&Cu.error(`Auth (${Ri}): ${t}`,...e)}/**
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
 */function ln(t,...e){throw Lp(t,...e)}function vn(t,...e){return Lp(t,...e)}function W1(t,e,n){const r=Object.assign(Object.assign({},ox()),{[e]:n});return new Sa("auth","Firebase",r).create(e,{appName:t.name})}function jn(t){return W1(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Lp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return B1.create(t,...e)}function Y(t,e,...n){if(!t)throw Lp(e,...n)}function Vn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw $l(e),new Error(e)}function Hn(t,e){t||Vn(e)}/**
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
 */function tf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function lx(){return m_()==="http:"||m_()==="https:"}function m_(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function ux(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(lx()||FP()||"connection"in navigator)?navigator.onLine:!0}function cx(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Aa{constructor(e,n){this.shortDelay=e,this.longDelay=n,Hn(n>e,"Short delay should be less than long delay!"),this.isMobile=MP()||jP()}get(){return ux()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Vp(t,e){Hn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class H1{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Vn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Vn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Vn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const hx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const dx=new Aa(3e4,6e4);function $r(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Yn(t,e,n,r,i={}){return q1(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Ra(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),H1.fetch()(K1(t,t.config.apiHost,n,l),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function q1(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},hx),e);try{const i=new px(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw yl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw yl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw yl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw yl(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw W1(t,d,c);ln(t,d)}}catch(i){if(i instanceof Qt)throw i;ln(t,"network-request-failed",{message:String(i)})}}async function ka(t,e,n,r,i={}){const s=await Yn(t,e,n,r,i);return"mfaPendingCredential"in s&&ln(t,"multi-factor-auth-required",{_serverResponse:s}),s}function K1(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Vp(t.config,i):`${t.config.apiScheme}://${i}`}function fx(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class px{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(vn(this.auth,"network-request-failed")),dx.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function yl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=vn(t,e,r);return i.customData._tokenResponse=n,i}function g_(t){return t!==void 0&&t.enterprise!==void 0}class mx{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return fx(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function gx(t,e){return Yn(t,"GET","/v2/recaptchaConfig",$r(t,e))}/**
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
 */async function yx(t,e){return Yn(t,"POST","/v1/accounts:delete",e)}async function G1(t,e){return Yn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Lo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function _x(t,e=!1){const n=Pe(t),r=await n.getIdToken(e),i=Mp(r);Y(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Lo(Lh(i.auth_time)),issuedAtTime:Lo(Lh(i.iat)),expirationTime:Lo(Lh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Lh(t){return Number(t)*1e3}function Mp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return $l("JWT malformed, contained fewer than 3 sections"),null;try{const i=N1(n);return i?JSON.parse(i):($l("Failed to decode base64 JWT payload"),null)}catch(i){return $l("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function y_(t){const e=Mp(t);return Y(e,"internal-error"),Y(typeof e.exp<"u","internal-error"),Y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ts(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Qt&&vx(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function vx({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class wx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class nf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Lo(this.lastLoginAt),this.creationTime=Lo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function xu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ts(t,G1(n,{idToken:r}));Y(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Q1(s.providerUserInfo):[],l=Tx(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),d=u?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new nf(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function Ex(t){const e=Pe(t);await xu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Tx(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Q1(t){return t.map(e=>{var{providerId:n}=e,r=vp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Ix(t,e){const n=await q1(t,{},async()=>{const r=Ra({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=K1(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",H1.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Sx(t,e){return Yn(t,"POST","/v2/accounts:revokeToken",$r(t,e))}/**
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
 */class os{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Y(e.idToken,"internal-error"),Y(typeof e.idToken<"u","internal-error"),Y(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):y_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Y(e.length!==0,"internal-error");const n=y_(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Y(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Ix(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new os;return r&&(Y(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Y(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Y(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new os,this.toJSON())}_performRefresh(){return Vn("not implemented")}}/**
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
 */function nr(t,e){Y(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Mn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=vp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new wx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new nf(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ts(this,this.stsTokenManager.getToken(this.auth,e));return Y(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return _x(this,e)}reload(){return Ex(this)}_assign(e){this!==e&&(Y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Mn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await xu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(pn(this.auth.app))return Promise.reject(jn(this.auth));const e=await this.getIdToken();return await Ts(this,yx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,c,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,w=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(l=n.tenantId)!==null&&l!==void 0?l:void 0,C=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,E=(c=n.createdAt)!==null&&c!==void 0?c:void 0,_=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:T,emailVerified:N,isAnonymous:M,providerData:V,stsTokenManager:v}=n;Y(T&&v,e,"internal-error");const y=os.fromJSON(this.name,v);Y(typeof T=="string",e,"internal-error"),nr(p,e.name),nr(m,e.name),Y(typeof N=="boolean",e,"internal-error"),Y(typeof M=="boolean",e,"internal-error"),nr(w,e.name),nr(S,e.name),nr(k,e.name),nr(C,e.name),nr(E,e.name),nr(_,e.name);const I=new Mn({uid:T,auth:e,email:m,emailVerified:N,displayName:p,isAnonymous:M,photoURL:S,phoneNumber:w,tenantId:k,stsTokenManager:y,createdAt:E,lastLoginAt:_});return V&&Array.isArray(V)&&(I.providerData=V.map(R=>Object.assign({},R))),C&&(I._redirectEventId=C),I}static async _fromIdTokenResponse(e,n,r=!1){const i=new os;i.updateFromServerResponse(n);const s=new Mn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await xu(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Y(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Q1(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new os;l.updateFromIdToken(r);const u=new Mn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new nf(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
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
 */const __=new Map;function Un(t){Hn(t instanceof Function,"Expected a class definition");let e=__.get(t);return e?(Hn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,__.set(t,e),e)}/**
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
 */class Y1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Y1.type="NONE";const v_=Y1;/**
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
 */function zl(t,e,n){return`firebase:${t}:${e}:${n}`}class as{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=zl(this.userKey,i.apiKey,s),this.fullPersistenceKey=zl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Mn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new as(Un(v_),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Un(v_);const o=zl(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const d=await c._get(o);if(d){const p=Mn._fromJSON(e,d);c!==s&&(l=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new as(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new as(s,e,r))}}/**
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
 */function w_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Z1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(X1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(tE(e))return"Blackberry";if(nE(e))return"Webos";if(Up(e))return"Safari";if((e.includes("chrome/")||J1(e))&&!e.includes("edge/"))return"Chrome";if(eE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function X1(t=Je()){return/firefox\//i.test(t)}function Up(t=Je()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function J1(t=Je()){return/crios\//i.test(t)}function Z1(t=Je()){return/iemobile/i.test(t)}function eE(t=Je()){return/android/i.test(t)}function tE(t=Je()){return/blackberry/i.test(t)}function nE(t=Je()){return/webos/i.test(t)}function fc(t=Je()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Rx(t=Je()){var e;return fc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ax(){return $P()&&document.documentMode===10}function rE(t=Je()){return fc(t)||eE(t)||nE(t)||tE(t)||/windows phone/i.test(t)||Z1(t)}function kx(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function iE(t,e=[]){let n;switch(t){case"Browser":n=w_(Je());break;case"Worker":n=`${w_(Je())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ri}/${r}`}/**
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
 */class Px{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Cx(t,e={}){return Yn(t,"GET","/v2/passwordPolicy",$r(t,e))}/**
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
 */const xx=6;class Nx{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:xx,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class bx{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new E_(this),this.idTokenSubscription=new E_(this),this.beforeStateQueue=new Px(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=B1,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Un(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await as.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await G1(this,{idToken:e}),r=await Mn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(pn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await xu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=cx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(pn(this.app))return Promise.reject(jn(this));const n=e?Pe(e):null;return n&&Y(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return pn(this.app)?Promise.reject(jn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return pn(this.app)?Promise.reject(jn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Un(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Cx(this),n=new Nx(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Sa("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Sx(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Un(e)||this._popupRedirectResolver;Y(n,this,"argument-error"),this.redirectPersistenceManager=await as.create(this,[Un(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Y(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=iE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&ax(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ai(t){return Pe(t)}class E_{constructor(e){this.auth=e,this.observer=null,this.addObserver=QP(n=>this.observer=n)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let pc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Dx(t){pc=t}function sE(t){return pc.loadJS(t)}function Ox(){return pc.recaptchaEnterpriseScript}function Lx(){return pc.gapiScript}function Vx(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Mx="recaptcha-enterprise",Ux="NO_RECAPTCHA";class Fx{constructor(e){this.type=Mx,this.auth=Ai(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{gx(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new mx(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;g_(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(Ux)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&g_(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=Ox();u.length!==0&&(u+=l),sE(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function T_(t,e,n,r=!1){const i=new Fx(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function rf(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await T_(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await T_(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function jx(t,e){const n=dc(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ku(s,e??{}))return i;ln(i,"already-initialized")}return n.initialize({options:e})}function $x(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Un);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function zx(t,e,n){const r=Ai(t);Y(r._canInitEmulator,r,"emulator-config-failed"),Y(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=oE(e),{host:o,port:l}=Bx(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),Wx()}function oE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Bx(t){const e=oE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:I_(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:I_(o)}}}function I_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Wx(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Fp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Vn("not implemented")}_getIdTokenResponse(e){return Vn("not implemented")}_linkToIdToken(e,n){return Vn("not implemented")}_getReauthenticationResolver(e){return Vn("not implemented")}}async function Hx(t,e){return Yn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function qx(t,e){return ka(t,"POST","/v1/accounts:signInWithPassword",$r(t,e))}/**
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
 */async function Kx(t,e){return ka(t,"POST","/v1/accounts:signInWithEmailLink",$r(t,e))}async function Gx(t,e){return ka(t,"POST","/v1/accounts:signInWithEmailLink",$r(t,e))}/**
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
 */class ua extends Fp{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ua(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ua(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return rf(e,n,"signInWithPassword",qx);case"emailLink":return Kx(e,{email:this._email,oobCode:this._password});default:ln(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return rf(e,r,"signUpPassword",Hx);case"emailLink":return Gx(e,{idToken:n,email:this._email,oobCode:this._password});default:ln(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ls(t,e){return ka(t,"POST","/v1/accounts:signInWithIdp",$r(t,e))}/**
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
 */const Qx="http://localhost";class mi extends Fp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new mi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ln("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=vp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new mi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ls(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ls(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ls(e,n)}buildRequest(){const e={requestUri:Qx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ra(n)}return e}}/**
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
 */function Yx(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Xx(t){const e=vo(wo(t)).link,n=e?vo(wo(e)).deep_link_id:null,r=vo(wo(t)).deep_link_id;return(r?vo(wo(r)).link:null)||r||n||e||t}class jp{constructor(e){var n,r,i,s,o,l;const u=vo(wo(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,d=(r=u.oobCode)!==null&&r!==void 0?r:null,p=Yx((i=u.mode)!==null&&i!==void 0?i:null);Y(c&&d&&p,"argument-error"),this.apiKey=c,this.operation=p,this.code=d,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=Xx(e);try{return new jp(n)}catch{return null}}}/**
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
 */class Ms{constructor(){this.providerId=Ms.PROVIDER_ID}static credential(e,n){return ua._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=jp.parseLink(n);return Y(r,"argument-error"),ua._fromEmailAndCode(e,r.code,r.tenantId)}}Ms.PROVIDER_ID="password";Ms.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ms.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class aE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Pa extends aE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class lr extends Pa{constructor(){super("facebook.com")}static credential(e){return mi._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return lr.credentialFromTaggedObject(e)}static credentialFromError(e){return lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return lr.credential(e.oauthAccessToken)}catch{return null}}}lr.FACEBOOK_SIGN_IN_METHOD="facebook.com";lr.PROVIDER_ID="facebook.com";/**
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
 */class ur extends Pa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return mi._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ur.credentialFromTaggedObject(e)}static credentialFromError(e){return ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ur.credential(n,r)}catch{return null}}}ur.GOOGLE_SIGN_IN_METHOD="google.com";ur.PROVIDER_ID="google.com";/**
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
 */class cr extends Pa{constructor(){super("github.com")}static credential(e){return mi._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return cr.credential(e.oauthAccessToken)}catch{return null}}}cr.GITHUB_SIGN_IN_METHOD="github.com";cr.PROVIDER_ID="github.com";/**
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
 */class hr extends Pa{constructor(){super("twitter.com")}static credential(e,n){return mi._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return hr.credential(n,r)}catch{return null}}}hr.TWITTER_SIGN_IN_METHOD="twitter.com";hr.PROVIDER_ID="twitter.com";/**
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
 */async function Jx(t,e){return ka(t,"POST","/v1/accounts:signUp",$r(t,e))}/**
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
 */class gi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Mn._fromIdTokenResponse(e,r,i),o=S_(r);return new gi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=S_(r);return new gi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function S_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Nu extends Qt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Nu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Nu(e,n,r,i)}}function lE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Nu._fromErrorAndOperation(t,s,e,r):s})}async function Zx(t,e,n=!1){const r=await Ts(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return gi._forOperation(t,"link",r)}/**
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
 */async function e2(t,e,n=!1){const{auth:r}=t;if(pn(r.app))return Promise.reject(jn(r));const i="reauthenticate";try{const s=await Ts(t,lE(r,i,e,t),n);Y(s.idToken,r,"internal-error");const o=Mp(s.idToken);Y(o,r,"internal-error");const{sub:l}=o;return Y(t.uid===l,r,"user-mismatch"),gi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ln(r,"user-mismatch"),s}}/**
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
 */async function uE(t,e,n=!1){if(pn(t.app))return Promise.reject(jn(t));const r="signIn",i=await lE(t,r,e),s=await gi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function t2(t,e){return uE(Ai(t),e)}/**
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
 */async function cE(t){const e=Ai(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function n2(t,e,n){if(pn(t.app))return Promise.reject(jn(t));const r=Ai(t),o=await rf(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Jx).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&cE(t),u}),l=await gi._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function r2(t,e,n){return pn(t.app)?Promise.reject(jn(t)):t2(Pe(t),Ms.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&cE(t),r})}/**
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
 */async function i2(t,e){return Yn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function hE(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Pe(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Ts(r,i2(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function s2(t,e,n,r){return Pe(t).onIdTokenChanged(e,n,r)}function o2(t,e,n){return Pe(t).beforeAuthStateChanged(e,n)}const bu="__sak";/**
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
 */class dE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(bu,"1"),this.storage.removeItem(bu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function a2(){const t=Je();return Up(t)||fc(t)}const l2=1e3,u2=10;class fE extends dE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=a2()&&kx(),this.fallbackToPolling=rE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Ax()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,u2):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},l2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}fE.type="LOCAL";const c2=fE;/**
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
 */class pE extends dE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}pE.type="SESSION";const mE=pE;/**
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
 */function h2(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class mc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new mc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await h2(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}mc.receivers=[];/**
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
 */function $p(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class d2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=$p("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function wn(){return window}function f2(t){wn().location.href=t}/**
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
 */function gE(){return typeof wn().WorkerGlobalScope<"u"&&typeof wn().importScripts=="function"}async function p2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function m2(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function g2(){return gE()?self:null}/**
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
 */const yE="firebaseLocalStorageDb",y2=1,Du="firebaseLocalStorage",_E="fbase_key";class Ca{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function gc(t,e){return t.transaction([Du],e?"readwrite":"readonly").objectStore(Du)}function _2(){const t=indexedDB.deleteDatabase(yE);return new Ca(t).toPromise()}function sf(){const t=indexedDB.open(yE,y2);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Du,{keyPath:_E})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Du)?e(r):(r.close(),await _2(),e(await sf()))})})}async function R_(t,e,n){const r=gc(t,!0).put({[_E]:e,value:n});return new Ca(r).toPromise()}async function v2(t,e){const n=gc(t,!1).get(e),r=await new Ca(n).toPromise();return r===void 0?null:r.value}function A_(t,e){const n=gc(t,!0).delete(e);return new Ca(n).toPromise()}const w2=800,E2=3;class vE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await sf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>E2)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return gE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=mc._getInstance(g2()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await p2(),!this.activeServiceWorker)return;this.sender=new d2(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||m2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await sf();return await R_(e,bu,"1"),await A_(e,bu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>R_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>v2(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>A_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=gc(i,!1).getAll();return new Ca(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),w2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}vE.type="LOCAL";const T2=vE;new Aa(3e4,6e4);/**
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
 */function I2(t,e){return e?Un(e):(Y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class zp extends Fp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ls(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ls(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ls(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function S2(t){return uE(t.auth,new zp(t),t.bypassAuthState)}function R2(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),e2(n,new zp(t),t.bypassAuthState)}async function A2(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),Zx(n,new zp(t),t.bypassAuthState)}/**
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
 */class wE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return S2;case"linkViaPopup":case"linkViaRedirect":return A2;case"reauthViaPopup":case"reauthViaRedirect":return R2;default:ln(this.auth,"internal-error")}}resolve(e){Hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const k2=new Aa(2e3,1e4);class Ji extends wE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ji.currentPopupAction&&Ji.currentPopupAction.cancel(),Ji.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Y(e,this.auth,"internal-error"),e}async onExecution(){Hn(this.filter.length===1,"Popup operations only handle one event");const e=$p();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(vn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(vn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ji.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(vn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,k2.get())};e()}}Ji.currentPopupAction=null;/**
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
 */const P2="pendingRedirect",Bl=new Map;class C2 extends wE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Bl.get(this.auth._key());if(!e){try{const r=await x2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Bl.set(this.auth._key(),e)}return this.bypassAuthState||Bl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function x2(t,e){const n=D2(e),r=b2(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function N2(t,e){Bl.set(t._key(),e)}function b2(t){return Un(t._redirectPersistence)}function D2(t){return zl(P2,t.config.apiKey,t.name)}async function O2(t,e,n=!1){if(pn(t.app))return Promise.reject(jn(t));const r=Ai(t),i=I2(r,e),o=await new C2(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const L2=10*60*1e3;class V2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!M2(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!EE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(vn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=L2&&this.cachedEventUids.clear(),this.cachedEventUids.has(k_(e))}saveEventToCache(e){this.cachedEventUids.add(k_(e)),this.lastProcessedEventTime=Date.now()}}function k_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function EE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function M2(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return EE(t);default:return!1}}/**
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
 */async function U2(t,e={}){return Yn(t,"GET","/v1/projects",e)}/**
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
 */const F2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,j2=/^https?/;async function $2(t){if(t.config.emulator)return;const{authorizedDomains:e}=await U2(t);for(const n of e)try{if(z2(n))return}catch{}ln(t,"unauthorized-domain")}function z2(t){const e=tf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!j2.test(n))return!1;if(F2.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const B2=new Aa(3e4,6e4);function P_(){const t=wn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function W2(t){return new Promise((e,n)=>{var r,i,s;function o(){P_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{P_(),n(vn(t,"network-request-failed"))},timeout:B2.get()})}if(!((i=(r=wn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=wn().gapi)===null||s===void 0)&&s.load)o();else{const l=Vx("iframefcb");return wn()[l]=()=>{gapi.load?o():n(vn(t,"network-request-failed"))},sE(`${Lx()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Wl=null,e})}let Wl=null;function H2(t){return Wl=Wl||W2(t),Wl}/**
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
 */const q2=new Aa(5e3,15e3),K2="__/auth/iframe",G2="emulator/auth/iframe",Q2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Y2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function X2(t){const e=t.config;Y(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Vp(e,G2):`https://${t.config.authDomain}/${K2}`,r={apiKey:e.apiKey,appName:t.name,v:Ri},i=Y2.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ra(r).slice(1)}`}async function J2(t){const e=await H2(t),n=wn().gapi;return Y(n,t,"internal-error"),e.open({where:document.body,url:X2(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Q2,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=vn(t,"network-request-failed"),l=wn().setTimeout(()=>{s(o)},q2.get());function u(){wn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const Z2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},eN=500,tN=600,nN="_blank",rN="http://localhost";class C_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function iN(t,e,n,r=eN,i=tN){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},Z2),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Je().toLowerCase();n&&(l=J1(c)?nN:n),X1(c)&&(e=e||rN,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[w,S])=>`${m}${w}=${S},`,"");if(Rx(c)&&l!=="_self")return sN(e||"",l),new C_(null);const p=window.open(e||"",l,d);Y(p,t,"popup-blocked");try{p.focus()}catch{}return new C_(p)}function sN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const oN="__/auth/handler",aN="emulator/auth/handler",lN=encodeURIComponent("fac");async function x_(t,e,n,r,i,s){Y(t.config.authDomain,t,"auth-domain-config-required"),Y(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ri,eventId:i};if(e instanceof aE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",GP(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof Pa){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const u=await t._getAppCheckToken(),c=u?`#${lN}=${encodeURIComponent(u)}`:"";return`${uN(t)}?${Ra(l).slice(1)}${c}`}function uN({config:t}){return t.emulator?Vp(t,aN):`https://${t.authDomain}/${oN}`}/**
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
 */const Vh="webStorageSupport";class cN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=mE,this._completeRedirectFn=O2,this._overrideRedirectResult=N2}async _openPopup(e,n,r,i){var s;Hn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await x_(e,n,r,tf(),i);return iN(e,o,$p())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await x_(e,n,r,tf(),i);return f2(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Hn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await J2(e),r=new V2(e);return n.register("authEvent",i=>(Y(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Vh,{type:Vh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Vh];o!==void 0&&n(!!o),ln(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=$2(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return rE()||Up()||fc()}}const hN=cN;var N_="@firebase/auth",b_="1.7.6";/**
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
 */class dN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function fN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function pN(t){pi(new Dr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Y(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:iE(t)},c=new bx(r,i,s,u);return $x(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),pi(new Dr("auth-internal",e=>{const n=Ai(e.getProvider("auth").getImmediate());return(r=>new dN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),_n(N_,b_,fN(t)),_n(N_,b_,"esm2017")}/**
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
 */const mN=5*60,gN=L1("authIdTokenMaxAge")||mN;let D_=null;const yN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>gN)return;const i=n==null?void 0:n.token;D_!==i&&(D_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function _N(t=Op()){const e=dc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=jx(t,{popupRedirectResolver:hN,persistence:[T2,c2,mE]}),r=L1("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=yN(s.toString());o2(n,o,()=>o(n.currentUser)),s2(n,l=>o(l))}}const i=b1("auth");return i&&zx(n,`http://${i}`),n}function vN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Dx({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=vn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",vN().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});pN("Browser");var O_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var oi,TE;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,y){function I(){}I.prototype=y.prototype,v.D=y.prototype,v.prototype=new I,v.prototype.constructor=v,v.C=function(R,P,x){for(var A=Array(arguments.length-2),et=2;et<arguments.length;et++)A[et-2]=arguments[et];return y.prototype[P].apply(R,A)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,y,I){I||(I=0);var R=Array(16);if(typeof y=="string")for(var P=0;16>P;++P)R[P]=y.charCodeAt(I++)|y.charCodeAt(I++)<<8|y.charCodeAt(I++)<<16|y.charCodeAt(I++)<<24;else for(P=0;16>P;++P)R[P]=y[I++]|y[I++]<<8|y[I++]<<16|y[I++]<<24;y=v.g[0],I=v.g[1],P=v.g[2];var x=v.g[3],A=y+(x^I&(P^x))+R[0]+3614090360&4294967295;y=I+(A<<7&4294967295|A>>>25),A=x+(P^y&(I^P))+R[1]+3905402710&4294967295,x=y+(A<<12&4294967295|A>>>20),A=P+(I^x&(y^I))+R[2]+606105819&4294967295,P=x+(A<<17&4294967295|A>>>15),A=I+(y^P&(x^y))+R[3]+3250441966&4294967295,I=P+(A<<22&4294967295|A>>>10),A=y+(x^I&(P^x))+R[4]+4118548399&4294967295,y=I+(A<<7&4294967295|A>>>25),A=x+(P^y&(I^P))+R[5]+1200080426&4294967295,x=y+(A<<12&4294967295|A>>>20),A=P+(I^x&(y^I))+R[6]+2821735955&4294967295,P=x+(A<<17&4294967295|A>>>15),A=I+(y^P&(x^y))+R[7]+4249261313&4294967295,I=P+(A<<22&4294967295|A>>>10),A=y+(x^I&(P^x))+R[8]+1770035416&4294967295,y=I+(A<<7&4294967295|A>>>25),A=x+(P^y&(I^P))+R[9]+2336552879&4294967295,x=y+(A<<12&4294967295|A>>>20),A=P+(I^x&(y^I))+R[10]+4294925233&4294967295,P=x+(A<<17&4294967295|A>>>15),A=I+(y^P&(x^y))+R[11]+2304563134&4294967295,I=P+(A<<22&4294967295|A>>>10),A=y+(x^I&(P^x))+R[12]+1804603682&4294967295,y=I+(A<<7&4294967295|A>>>25),A=x+(P^y&(I^P))+R[13]+4254626195&4294967295,x=y+(A<<12&4294967295|A>>>20),A=P+(I^x&(y^I))+R[14]+2792965006&4294967295,P=x+(A<<17&4294967295|A>>>15),A=I+(y^P&(x^y))+R[15]+1236535329&4294967295,I=P+(A<<22&4294967295|A>>>10),A=y+(P^x&(I^P))+R[1]+4129170786&4294967295,y=I+(A<<5&4294967295|A>>>27),A=x+(I^P&(y^I))+R[6]+3225465664&4294967295,x=y+(A<<9&4294967295|A>>>23),A=P+(y^I&(x^y))+R[11]+643717713&4294967295,P=x+(A<<14&4294967295|A>>>18),A=I+(x^y&(P^x))+R[0]+3921069994&4294967295,I=P+(A<<20&4294967295|A>>>12),A=y+(P^x&(I^P))+R[5]+3593408605&4294967295,y=I+(A<<5&4294967295|A>>>27),A=x+(I^P&(y^I))+R[10]+38016083&4294967295,x=y+(A<<9&4294967295|A>>>23),A=P+(y^I&(x^y))+R[15]+3634488961&4294967295,P=x+(A<<14&4294967295|A>>>18),A=I+(x^y&(P^x))+R[4]+3889429448&4294967295,I=P+(A<<20&4294967295|A>>>12),A=y+(P^x&(I^P))+R[9]+568446438&4294967295,y=I+(A<<5&4294967295|A>>>27),A=x+(I^P&(y^I))+R[14]+3275163606&4294967295,x=y+(A<<9&4294967295|A>>>23),A=P+(y^I&(x^y))+R[3]+4107603335&4294967295,P=x+(A<<14&4294967295|A>>>18),A=I+(x^y&(P^x))+R[8]+1163531501&4294967295,I=P+(A<<20&4294967295|A>>>12),A=y+(P^x&(I^P))+R[13]+2850285829&4294967295,y=I+(A<<5&4294967295|A>>>27),A=x+(I^P&(y^I))+R[2]+4243563512&4294967295,x=y+(A<<9&4294967295|A>>>23),A=P+(y^I&(x^y))+R[7]+1735328473&4294967295,P=x+(A<<14&4294967295|A>>>18),A=I+(x^y&(P^x))+R[12]+2368359562&4294967295,I=P+(A<<20&4294967295|A>>>12),A=y+(I^P^x)+R[5]+4294588738&4294967295,y=I+(A<<4&4294967295|A>>>28),A=x+(y^I^P)+R[8]+2272392833&4294967295,x=y+(A<<11&4294967295|A>>>21),A=P+(x^y^I)+R[11]+1839030562&4294967295,P=x+(A<<16&4294967295|A>>>16),A=I+(P^x^y)+R[14]+4259657740&4294967295,I=P+(A<<23&4294967295|A>>>9),A=y+(I^P^x)+R[1]+2763975236&4294967295,y=I+(A<<4&4294967295|A>>>28),A=x+(y^I^P)+R[4]+1272893353&4294967295,x=y+(A<<11&4294967295|A>>>21),A=P+(x^y^I)+R[7]+4139469664&4294967295,P=x+(A<<16&4294967295|A>>>16),A=I+(P^x^y)+R[10]+3200236656&4294967295,I=P+(A<<23&4294967295|A>>>9),A=y+(I^P^x)+R[13]+681279174&4294967295,y=I+(A<<4&4294967295|A>>>28),A=x+(y^I^P)+R[0]+3936430074&4294967295,x=y+(A<<11&4294967295|A>>>21),A=P+(x^y^I)+R[3]+3572445317&4294967295,P=x+(A<<16&4294967295|A>>>16),A=I+(P^x^y)+R[6]+76029189&4294967295,I=P+(A<<23&4294967295|A>>>9),A=y+(I^P^x)+R[9]+3654602809&4294967295,y=I+(A<<4&4294967295|A>>>28),A=x+(y^I^P)+R[12]+3873151461&4294967295,x=y+(A<<11&4294967295|A>>>21),A=P+(x^y^I)+R[15]+530742520&4294967295,P=x+(A<<16&4294967295|A>>>16),A=I+(P^x^y)+R[2]+3299628645&4294967295,I=P+(A<<23&4294967295|A>>>9),A=y+(P^(I|~x))+R[0]+4096336452&4294967295,y=I+(A<<6&4294967295|A>>>26),A=x+(I^(y|~P))+R[7]+1126891415&4294967295,x=y+(A<<10&4294967295|A>>>22),A=P+(y^(x|~I))+R[14]+2878612391&4294967295,P=x+(A<<15&4294967295|A>>>17),A=I+(x^(P|~y))+R[5]+4237533241&4294967295,I=P+(A<<21&4294967295|A>>>11),A=y+(P^(I|~x))+R[12]+1700485571&4294967295,y=I+(A<<6&4294967295|A>>>26),A=x+(I^(y|~P))+R[3]+2399980690&4294967295,x=y+(A<<10&4294967295|A>>>22),A=P+(y^(x|~I))+R[10]+4293915773&4294967295,P=x+(A<<15&4294967295|A>>>17),A=I+(x^(P|~y))+R[1]+2240044497&4294967295,I=P+(A<<21&4294967295|A>>>11),A=y+(P^(I|~x))+R[8]+1873313359&4294967295,y=I+(A<<6&4294967295|A>>>26),A=x+(I^(y|~P))+R[15]+4264355552&4294967295,x=y+(A<<10&4294967295|A>>>22),A=P+(y^(x|~I))+R[6]+2734768916&4294967295,P=x+(A<<15&4294967295|A>>>17),A=I+(x^(P|~y))+R[13]+1309151649&4294967295,I=P+(A<<21&4294967295|A>>>11),A=y+(P^(I|~x))+R[4]+4149444226&4294967295,y=I+(A<<6&4294967295|A>>>26),A=x+(I^(y|~P))+R[11]+3174756917&4294967295,x=y+(A<<10&4294967295|A>>>22),A=P+(y^(x|~I))+R[2]+718787259&4294967295,P=x+(A<<15&4294967295|A>>>17),A=I+(x^(P|~y))+R[9]+3951481745&4294967295,v.g[0]=v.g[0]+y&4294967295,v.g[1]=v.g[1]+(P+(A<<21&4294967295|A>>>11))&4294967295,v.g[2]=v.g[2]+P&4294967295,v.g[3]=v.g[3]+x&4294967295}r.prototype.u=function(v,y){y===void 0&&(y=v.length);for(var I=y-this.blockSize,R=this.B,P=this.h,x=0;x<y;){if(P==0)for(;x<=I;)i(this,v,x),x+=this.blockSize;if(typeof v=="string"){for(;x<y;)if(R[P++]=v.charCodeAt(x++),P==this.blockSize){i(this,R),P=0;break}}else for(;x<y;)if(R[P++]=v[x++],P==this.blockSize){i(this,R),P=0;break}}this.h=P,this.o+=y},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var y=1;y<v.length-8;++y)v[y]=0;var I=8*this.o;for(y=v.length-8;y<v.length;++y)v[y]=I&255,I/=256;for(this.u(v),v=Array(16),y=I=0;4>y;++y)for(var R=0;32>R;R+=8)v[I++]=this.g[y]>>>R&255;return v};function s(v,y){var I=l;return Object.prototype.hasOwnProperty.call(I,v)?I[v]:I[v]=y(v)}function o(v,y){this.h=y;for(var I=[],R=!0,P=v.length-1;0<=P;P--){var x=v[P]|0;R&&x==y||(I[P]=x,R=!1)}this.g=I}var l={};function u(v){return-128<=v&&128>v?s(v,function(y){return new o([y|0],0>y?-1:0)}):new o([v|0],0>v?-1:0)}function c(v){if(isNaN(v)||!isFinite(v))return p;if(0>v)return C(c(-v));for(var y=[],I=1,R=0;v>=I;R++)y[R]=v/I|0,I*=4294967296;return new o(y,0)}function d(v,y){if(v.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(v.charAt(0)=="-")return C(d(v.substring(1),y));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=c(Math.pow(y,8)),R=p,P=0;P<v.length;P+=8){var x=Math.min(8,v.length-P),A=parseInt(v.substring(P,P+x),y);8>x?(x=c(Math.pow(y,x)),R=R.j(x).add(c(A))):(R=R.j(I),R=R.add(c(A)))}return R}var p=u(0),m=u(1),w=u(16777216);t=o.prototype,t.m=function(){if(k(this))return-C(this).m();for(var v=0,y=1,I=0;I<this.g.length;I++){var R=this.i(I);v+=(0<=R?R:4294967296+R)*y,y*=4294967296}return v},t.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(S(this))return"0";if(k(this))return"-"+C(this).toString(v);for(var y=c(Math.pow(v,6)),I=this,R="";;){var P=N(I,y).g;I=E(I,P.j(y));var x=((0<I.g.length?I.g[0]:I.h)>>>0).toString(v);if(I=P,S(I))return x+R;for(;6>x.length;)x="0"+x;R=x+R}},t.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function S(v){if(v.h!=0)return!1;for(var y=0;y<v.g.length;y++)if(v.g[y]!=0)return!1;return!0}function k(v){return v.h==-1}t.l=function(v){return v=E(this,v),k(v)?-1:S(v)?0:1};function C(v){for(var y=v.g.length,I=[],R=0;R<y;R++)I[R]=~v.g[R];return new o(I,~v.h).add(m)}t.abs=function(){return k(this)?C(this):this},t.add=function(v){for(var y=Math.max(this.g.length,v.g.length),I=[],R=0,P=0;P<=y;P++){var x=R+(this.i(P)&65535)+(v.i(P)&65535),A=(x>>>16)+(this.i(P)>>>16)+(v.i(P)>>>16);R=A>>>16,x&=65535,A&=65535,I[P]=A<<16|x}return new o(I,I[I.length-1]&-2147483648?-1:0)};function E(v,y){return v.add(C(y))}t.j=function(v){if(S(this)||S(v))return p;if(k(this))return k(v)?C(this).j(C(v)):C(C(this).j(v));if(k(v))return C(this.j(C(v)));if(0>this.l(w)&&0>v.l(w))return c(this.m()*v.m());for(var y=this.g.length+v.g.length,I=[],R=0;R<2*y;R++)I[R]=0;for(R=0;R<this.g.length;R++)for(var P=0;P<v.g.length;P++){var x=this.i(R)>>>16,A=this.i(R)&65535,et=v.i(P)>>>16,Yt=v.i(P)&65535;I[2*R+2*P]+=A*Yt,_(I,2*R+2*P),I[2*R+2*P+1]+=x*Yt,_(I,2*R+2*P+1),I[2*R+2*P+1]+=A*et,_(I,2*R+2*P+1),I[2*R+2*P+2]+=x*et,_(I,2*R+2*P+2)}for(R=0;R<y;R++)I[R]=I[2*R+1]<<16|I[2*R];for(R=y;R<2*y;R++)I[R]=0;return new o(I,0)};function _(v,y){for(;(v[y]&65535)!=v[y];)v[y+1]+=v[y]>>>16,v[y]&=65535,y++}function T(v,y){this.g=v,this.h=y}function N(v,y){if(S(y))throw Error("division by zero");if(S(v))return new T(p,p);if(k(v))return y=N(C(v),y),new T(C(y.g),C(y.h));if(k(y))return y=N(v,C(y)),new T(C(y.g),y.h);if(30<v.g.length){if(k(v)||k(y))throw Error("slowDivide_ only works with positive integers.");for(var I=m,R=y;0>=R.l(v);)I=M(I),R=M(R);var P=V(I,1),x=V(R,1);for(R=V(R,2),I=V(I,2);!S(R);){var A=x.add(R);0>=A.l(v)&&(P=P.add(I),x=A),R=V(R,1),I=V(I,1)}return y=E(v,P.j(y)),new T(P,y)}for(P=p;0<=v.l(y);){for(I=Math.max(1,Math.floor(v.m()/y.m())),R=Math.ceil(Math.log(I)/Math.LN2),R=48>=R?1:Math.pow(2,R-48),x=c(I),A=x.j(y);k(A)||0<A.l(v);)I-=R,x=c(I),A=x.j(y);S(x)&&(x=m),P=P.add(x),v=E(v,A)}return new T(P,v)}t.A=function(v){return N(this,v).h},t.and=function(v){for(var y=Math.max(this.g.length,v.g.length),I=[],R=0;R<y;R++)I[R]=this.i(R)&v.i(R);return new o(I,this.h&v.h)},t.or=function(v){for(var y=Math.max(this.g.length,v.g.length),I=[],R=0;R<y;R++)I[R]=this.i(R)|v.i(R);return new o(I,this.h|v.h)},t.xor=function(v){for(var y=Math.max(this.g.length,v.g.length),I=[],R=0;R<y;R++)I[R]=this.i(R)^v.i(R);return new o(I,this.h^v.h)};function M(v){for(var y=v.g.length+1,I=[],R=0;R<y;R++)I[R]=v.i(R)<<1|v.i(R-1)>>>31;return new o(I,v.h)}function V(v,y){var I=y>>5;y%=32;for(var R=v.g.length-I,P=[],x=0;x<R;x++)P[x]=0<y?v.i(x+I)>>>y|v.i(x+I+1)<<32-y:v.i(x+I);return new o(P,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,TE=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,oi=o}).apply(typeof O_<"u"?O_:typeof self<"u"?self:typeof window<"u"?window:{});var _l=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var IE,SE,Eo,RE,Hl,of,AE,kE,PE;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof _l=="object"&&_l];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var f=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var b=a[g];if(!(b in f))break e;f=f[b]}a=a[a.length-1],g=f[a],h=h(g),h!=g&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function s(a,h){a instanceof String&&(a+="");var f=0,g=!1,b={next:function(){if(!g&&f<a.length){var O=f++;return{value:h(O,a[O]),done:!1}}return g=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}i("Array.prototype.values",function(a){return a||function(){return s(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,g),a.apply(h,b)}}return function(){return a.apply(h,arguments)}}function m(a,h,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function w(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function S(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(g,b,O){for(var B=Array(arguments.length-2),de=2;de<arguments.length;de++)B[de-2]=arguments[de];return h.prototype[b].apply(g,B)}}function k(a){const h=a.length;if(0<h){const f=Array(h);for(let g=0;g<h;g++)f[g]=a[g];return f}return[]}function C(a,h){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(u(g)){const b=a.length||0,O=g.length||0;a.length=b+O;for(let B=0;B<O;B++)a[b+B]=g[B]}else a.push(g)}}class E{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function _(a){return/^[\s\xa0]*$/.test(a)}function T(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function N(a){return N[" "](a),a}N[" "]=function(){};var M=T().indexOf("Gecko")!=-1&&!(T().toLowerCase().indexOf("webkit")!=-1&&T().indexOf("Edge")==-1)&&!(T().indexOf("Trident")!=-1||T().indexOf("MSIE")!=-1)&&T().indexOf("Edge")==-1;function V(a,h,f){for(const g in a)h.call(f,a[g],g,a)}function v(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function y(a){const h={};for(const f in a)h[f]=a[f];return h}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function R(a,h){let f,g;for(let b=1;b<arguments.length;b++){g=arguments[b];for(f in g)a[f]=g[f];for(let O=0;O<I.length;O++)f=I[O],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function P(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function x(a){l.setTimeout(()=>{throw a},0)}function A(){var a=z;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class et{constructor(){this.h=this.g=null}add(h,f){const g=Yt.get();g.set(h,f),this.h?this.h.next=g:this.g=g,this.h=g}}var Yt=new E(()=>new An,a=>a.reset());class An{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let tt,L=!1,z=new et,K=()=>{const a=l.Promise.resolve(void 0);tt=()=>{a.then(ee)}};var ee=()=>{for(var a;a=A();){try{a.h.call(a.g)}catch(f){x(f)}var h=Yt;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}L=!1};function te(){this.s=this.s,this.C=this.C}te.prototype.s=!1,te.prototype.ma=function(){this.s||(this.s=!0,this.N())},te.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function we(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}we.prototype.h=function(){this.defaultPrevented=!0};var xt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,h),l.removeEventListener("test",f,h)}catch{}return a}();function Tt(a,h){if(we.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(M){e:{try{N(h.nodeName);var b=!0;break e}catch{}b=!1}b||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:pt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Tt.aa.h.call(this)}}S(Tt,we);var pt={2:"touch",3:"pen",4:"mouse"};Tt.prototype.h=function(){Tt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var It="closure_listenable_"+(1e6*Math.random()|0),Br=0;function kn(a,h,f,g,b){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!g,this.ha=b,this.key=++Br,this.da=this.fa=!1}function Xn(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Pn(a){this.src=a,this.g={},this.h=0}Pn.prototype.add=function(a,h,f,g,b){var O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);var B=Nc(a,h,g,b);return-1<B?(h=a[B],f||(h.fa=!1)):(h=new kn(h,this.src,O,!!g,b),h.fa=f,a.push(h)),h};function $t(a,h){var f=h.type;if(f in a.g){var g=a.g[f],b=Array.prototype.indexOf.call(g,h,void 0),O;(O=0<=b)&&Array.prototype.splice.call(g,b,1),O&&(Xn(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function Nc(a,h,f,g){for(var b=0;b<a.length;++b){var O=a[b];if(!O.da&&O.listener==h&&O.capture==!!f&&O.ha==g)return b}return-1}var bc="closure_lm_"+(1e6*Math.random()|0),Dc={};function Pm(a,h,f,g,b){if(Array.isArray(h)){for(var O=0;O<h.length;O++)Pm(a,h[O],f,g,b);return null}return f=Nm(f),a&&a[It]?a.K(h,f,c(g)?!!g.capture:!!g,b):vI(a,h,f,!1,g,b)}function vI(a,h,f,g,b,O){if(!h)throw Error("Invalid event type");var B=c(b)?!!b.capture:!!b,de=Lc(a);if(de||(a[bc]=de=new Pn(a)),f=de.add(h,f,g,B,O),f.proxy)return f;if(g=wI(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)xt||(b=B),b===void 0&&(b=!1),a.addEventListener(h.toString(),g,b);else if(a.attachEvent)a.attachEvent(xm(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function wI(){function a(f){return h.call(a.src,a.listener,f)}const h=EI;return a}function Cm(a,h,f,g,b){if(Array.isArray(h))for(var O=0;O<h.length;O++)Cm(a,h[O],f,g,b);else g=c(g)?!!g.capture:!!g,f=Nm(f),a&&a[It]?(a=a.i,h=String(h).toString(),h in a.g&&(O=a.g[h],f=Nc(O,f,g,b),-1<f&&(Xn(O[f]),Array.prototype.splice.call(O,f,1),O.length==0&&(delete a.g[h],a.h--)))):a&&(a=Lc(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Nc(h,f,g,b)),(f=-1<a?h[a]:null)&&Oc(f))}function Oc(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[It])$t(h.i,a);else{var f=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(f,g,a.capture):h.detachEvent?h.detachEvent(xm(f),g):h.addListener&&h.removeListener&&h.removeListener(g),(f=Lc(h))?($t(f,a),f.h==0&&(f.src=null,h[bc]=null)):Xn(a)}}}function xm(a){return a in Dc?Dc[a]:Dc[a]="on"+a}function EI(a,h){if(a.da)a=!0;else{h=new Tt(h,this);var f=a.listener,g=a.ha||a.src;a.fa&&Oc(a),a=f.call(g,h)}return a}function Lc(a){return a=a[bc],a instanceof Pn?a:null}var Vc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Nm(a){return typeof a=="function"?a:(a[Vc]||(a[Vc]=function(h){return a.handleEvent(h)}),a[Vc])}function nt(){te.call(this),this.i=new Pn(this),this.M=this,this.F=null}S(nt,te),nt.prototype[It]=!0,nt.prototype.removeEventListener=function(a,h,f,g){Cm(this,a,h,f,g)};function mt(a,h){var f,g=a.F;if(g)for(f=[];g;g=g.F)f.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new we(h,a);else if(h instanceof we)h.target=h.target||a;else{var b=h;h=new we(g,a),R(h,b)}if(b=!0,f)for(var O=f.length-1;0<=O;O--){var B=h.g=f[O];b=Ma(B,g,!0,h)&&b}if(B=h.g=a,b=Ma(B,g,!0,h)&&b,b=Ma(B,g,!1,h)&&b,f)for(O=0;O<f.length;O++)B=h.g=f[O],b=Ma(B,g,!1,h)&&b}nt.prototype.N=function(){if(nt.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],g=0;g<f.length;g++)Xn(f[g]);delete a.g[h],a.h--}}this.F=null},nt.prototype.K=function(a,h,f,g){return this.i.add(String(a),h,!1,f,g)},nt.prototype.L=function(a,h,f,g){return this.i.add(String(a),h,!0,f,g)};function Ma(a,h,f,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var b=!0,O=0;O<h.length;++O){var B=h[O];if(B&&!B.da&&B.capture==f){var de=B.listener,He=B.ha||B.src;B.fa&&$t(a.i,B),b=de.call(He,g)!==!1&&b}}return b&&!g.defaultPrevented}function bm(a,h,f){if(typeof a=="function")f&&(a=m(a,f));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function Dm(a){a.g=bm(()=>{a.g=null,a.i&&(a.i=!1,Dm(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class TI extends te{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Dm(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function zs(a){te.call(this),this.h=a,this.g={}}S(zs,te);var Om=[];function Lm(a){V(a.g,function(h,f){this.g.hasOwnProperty(f)&&Oc(h)},a),a.g={}}zs.prototype.N=function(){zs.aa.N.call(this),Lm(this)},zs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Mc=l.JSON.stringify,II=l.JSON.parse,SI=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Uc(){}Uc.prototype.h=null;function Vm(a){return a.h||(a.h=a.i())}function Mm(){}var Bs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Fc(){we.call(this,"d")}S(Fc,we);function jc(){we.call(this,"c")}S(jc,we);var Wr={},Um=null;function Ua(){return Um=Um||new nt}Wr.La="serverreachability";function Fm(a){we.call(this,Wr.La,a)}S(Fm,we);function Ws(a){const h=Ua();mt(h,new Fm(h))}Wr.STAT_EVENT="statevent";function jm(a,h){we.call(this,Wr.STAT_EVENT,a),this.stat=h}S(jm,we);function gt(a){const h=Ua();mt(h,new jm(h,a))}Wr.Ma="timingevent";function $m(a,h){we.call(this,Wr.Ma,a),this.size=h}S($m,we);function Hs(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function qs(){this.g=!0}qs.prototype.xa=function(){this.g=!1};function RI(a,h,f,g,b,O){a.info(function(){if(a.g)if(O)for(var B="",de=O.split("&"),He=0;He<de.length;He++){var le=de[He].split("=");if(1<le.length){var rt=le[0];le=le[1];var it=rt.split("_");B=2<=it.length&&it[1]=="type"?B+(rt+"="+le+"&"):B+(rt+"=redacted&")}}else B=null;else B=O;return"XMLHTTP REQ ("+g+") [attempt "+b+"]: "+h+`
`+f+`
`+B})}function AI(a,h,f,g,b,O,B){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+b+"]: "+h+`
`+f+`
`+O+" "+B})}function xi(a,h,f,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+PI(a,f)+(g?" "+g:"")})}function kI(a,h){a.info(function(){return"TIMEOUT: "+h})}qs.prototype.info=function(){};function PI(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var g=f[a];if(!(2>g.length)){var b=g[1];if(Array.isArray(b)&&!(1>b.length)){var O=b[0];if(O!="noop"&&O!="stop"&&O!="close")for(var B=1;B<b.length;B++)b[B]=""}}}}return Mc(f)}catch{return h}}var Fa={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},zm={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},$c;function ja(){}S(ja,Uc),ja.prototype.g=function(){return new XMLHttpRequest},ja.prototype.i=function(){return{}},$c=new ja;function Jn(a,h,f,g){this.j=a,this.i=h,this.l=f,this.R=g||1,this.U=new zs(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Bm}function Bm(){this.i=null,this.g="",this.h=!1}var Wm={},zc={};function Bc(a,h,f){a.L=1,a.v=Wa(Cn(h)),a.m=f,a.P=!0,Hm(a,null)}function Hm(a,h){a.F=Date.now(),$a(a),a.A=Cn(a.v);var f=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),sg(f.i,"t",g),a.C=0,f=a.j.J,a.h=new Bm,a.g=Ig(a.j,f?h:null,!a.m),0<a.O&&(a.M=new TI(m(a.Y,a,a.g),a.O)),h=a.U,f=a.g,g=a.ca;var b="readystatechange";Array.isArray(b)||(b&&(Om[0]=b.toString()),b=Om);for(var O=0;O<b.length;O++){var B=Pm(f,b[O],g||h.handleEvent,!1,h.h||h);if(!B)break;h.g[B.key]=B}h=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Ws(),RI(a.i,a.u,a.A,a.l,a.R,a.m)}Jn.prototype.ca=function(a){a=a.target;const h=this.M;h&&xn(a)==3?h.j():this.Y(a)},Jn.prototype.Y=function(a){try{if(a==this.g)e:{const it=xn(this.g);var h=this.g.Ba();const Di=this.g.Z();if(!(3>it)&&(it!=3||this.g&&(this.h.h||this.g.oa()||dg(this.g)))){this.J||it!=4||h==7||(h==8||0>=Di?Ws(3):Ws(2)),Wc(this);var f=this.g.Z();this.X=f;t:if(qm(this)){var g=dg(this.g);a="";var b=g.length,O=xn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Hr(this),Ks(this);var B="";break t}this.h.i=new l.TextDecoder}for(h=0;h<b;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(O&&h==b-1)});g.length=0,this.h.g+=a,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=f==200,AI(this.i,this.u,this.A,this.l,this.R,it,f),this.o){if(this.T&&!this.K){t:{if(this.g){var de,He=this.g;if((de=He.g?He.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(de)){var le=de;break t}}le=null}if(f=le)xi(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Hc(this,f);else{this.o=!1,this.s=3,gt(12),Hr(this),Ks(this);break e}}if(this.P){f=!0;let Xt;for(;!this.J&&this.C<B.length;)if(Xt=CI(this,B),Xt==zc){it==4&&(this.s=4,gt(14),f=!1),xi(this.i,this.l,null,"[Incomplete Response]");break}else if(Xt==Wm){this.s=4,gt(15),xi(this.i,this.l,B,"[Invalid Chunk]"),f=!1;break}else xi(this.i,this.l,Xt,null),Hc(this,Xt);if(qm(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),it!=4||B.length!=0||this.h.h||(this.s=1,gt(16),f=!1),this.o=this.o&&f,!f)xi(this.i,this.l,B,"[Invalid Chunked Response]"),Hr(this),Ks(this);else if(0<B.length&&!this.W){this.W=!0;var rt=this.j;rt.g==this&&rt.ba&&!rt.M&&(rt.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),Xc(rt),rt.M=!0,gt(11))}}else xi(this.i,this.l,B,null),Hc(this,B);it==4&&Hr(this),this.o&&!this.J&&(it==4?vg(this.j,this):(this.o=!1,$a(this)))}else qI(this.g),f==400&&0<B.indexOf("Unknown SID")?(this.s=3,gt(12)):(this.s=0,gt(13)),Hr(this),Ks(this)}}}catch{}finally{}};function qm(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function CI(a,h){var f=a.C,g=h.indexOf(`
`,f);return g==-1?zc:(f=Number(h.substring(f,g)),isNaN(f)?Wm:(g+=1,g+f>h.length?zc:(h=h.slice(g,g+f),a.C=g+f,h)))}Jn.prototype.cancel=function(){this.J=!0,Hr(this)};function $a(a){a.S=Date.now()+a.I,Km(a,a.I)}function Km(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Hs(m(a.ba,a),h)}function Wc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Jn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(kI(this.i,this.A),this.L!=2&&(Ws(),gt(17)),Hr(this),this.s=2,Ks(this)):Km(this,this.S-a)};function Ks(a){a.j.G==0||a.J||vg(a.j,a)}function Hr(a){Wc(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Lm(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Hc(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||qc(f.h,a))){if(!a.K&&qc(f.h,a)&&f.G==3){try{var g=f.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var b=g;if(b[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)Qa(f),Ka(f);else break e;Yc(f),gt(18)}}else f.za=b[1],0<f.za-f.T&&37500>b[2]&&f.F&&f.v==0&&!f.C&&(f.C=Hs(m(f.Za,f),6e3));if(1>=Ym(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Kr(f,11)}else if((a.K||f.g==a)&&Qa(f),!_(h))for(b=f.Da.g.parse(h),h=0;h<b.length;h++){let le=b[h];if(f.T=le[0],le=le[1],f.G==2)if(le[0]=="c"){f.K=le[1],f.ia=le[2];const rt=le[3];rt!=null&&(f.la=rt,f.j.info("VER="+f.la));const it=le[4];it!=null&&(f.Aa=it,f.j.info("SVER="+f.Aa));const Di=le[5];Di!=null&&typeof Di=="number"&&0<Di&&(g=1.5*Di,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Xt=a.g;if(Xt){const Xa=Xt.g?Xt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Xa){var O=g.h;O.g||Xa.indexOf("spdy")==-1&&Xa.indexOf("quic")==-1&&Xa.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(Kc(O,O.h),O.h=null))}if(g.D){const Jc=Xt.g?Xt.g.getResponseHeader("X-HTTP-Session-Id"):null;Jc&&(g.ya=Jc,me(g.I,g.D,Jc))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var B=a;if(g.qa=Tg(g,g.J?g.ia:null,g.W),B.K){Xm(g.h,B);var de=B,He=g.L;He&&(de.I=He),de.B&&(Wc(de),$a(de)),g.g=B}else yg(g);0<f.i.length&&Ga(f)}else le[0]!="stop"&&le[0]!="close"||Kr(f,7);else f.G==3&&(le[0]=="stop"||le[0]=="close"?le[0]=="stop"?Kr(f,7):Qc(f):le[0]!="noop"&&f.l&&f.l.ta(le),f.v=0)}}Ws(4)}catch{}}var xI=class{constructor(a,h){this.g=a,this.map=h}};function Gm(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Qm(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Ym(a){return a.h?1:a.g?a.g.size:0}function qc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Kc(a,h){a.g?a.g.add(h):a.h=h}function Xm(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Gm.prototype.cancel=function(){if(this.i=Jm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Jm(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return k(a.i)}function NI(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],f=a.length,g=0;g<f;g++)h.push(a[g]);return h}h=[],f=0;for(g in a)h[f++]=a[g];return h}function bI(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const g in a)h[f++]=g;return h}}}function Zm(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=bI(a),g=NI(a),b=g.length,O=0;O<b;O++)h.call(void 0,g[O],f&&f[O],a)}var eg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function DI(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var g=a[f].indexOf("="),b=null;if(0<=g){var O=a[f].substring(0,g);b=a[f].substring(g+1)}else O=a[f];h(O,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function qr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof qr){this.h=a.h,za(this,a.j),this.o=a.o,this.g=a.g,Ba(this,a.s),this.l=a.l;var h=a.i,f=new Ys;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),tg(this,f),this.m=a.m}else a&&(h=String(a).match(eg))?(this.h=!1,za(this,h[1]||"",!0),this.o=Gs(h[2]||""),this.g=Gs(h[3]||"",!0),Ba(this,h[4]),this.l=Gs(h[5]||"",!0),tg(this,h[6]||"",!0),this.m=Gs(h[7]||"")):(this.h=!1,this.i=new Ys(null,this.h))}qr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Qs(h,ng,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Qs(h,ng,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Qs(f,f.charAt(0)=="/"?VI:LI,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Qs(f,UI)),a.join("")};function Cn(a){return new qr(a)}function za(a,h,f){a.j=f?Gs(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Ba(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function tg(a,h,f){h instanceof Ys?(a.i=h,FI(a.i,a.h)):(f||(h=Qs(h,MI)),a.i=new Ys(h,a.h))}function me(a,h,f){a.i.set(h,f)}function Wa(a){return me(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Gs(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Qs(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,OI),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function OI(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var ng=/[#\/\?@]/g,LI=/[#\?:]/g,VI=/[#\?]/g,MI=/[#\?@]/g,UI=/#/g;function Ys(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Zn(a){a.g||(a.g=new Map,a.h=0,a.i&&DI(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=Ys.prototype,t.add=function(a,h){Zn(this),this.i=null,a=Ni(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function rg(a,h){Zn(a),h=Ni(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function ig(a,h){return Zn(a),h=Ni(a,h),a.g.has(h)}t.forEach=function(a,h){Zn(this),this.g.forEach(function(f,g){f.forEach(function(b){a.call(h,b,g,this)},this)},this)},t.na=function(){Zn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let g=0;g<h.length;g++){const b=a[g];for(let O=0;O<b.length;O++)f.push(h[g])}return f},t.V=function(a){Zn(this);let h=[];if(typeof a=="string")ig(this,a)&&(h=h.concat(this.g.get(Ni(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},t.set=function(a,h){return Zn(this),this.i=null,a=Ni(this,a),ig(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function sg(a,h,f){rg(a,h),0<f.length&&(a.i=null,a.g.set(Ni(a,h),k(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var g=h[f];const O=encodeURIComponent(String(g)),B=this.V(g);for(g=0;g<B.length;g++){var b=O;B[g]!==""&&(b+="="+encodeURIComponent(String(B[g]))),a.push(b)}}return this.i=a.join("&")};function Ni(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function FI(a,h){h&&!a.j&&(Zn(a),a.i=null,a.g.forEach(function(f,g){var b=g.toLowerCase();g!=b&&(rg(this,g),sg(this,b,f))},a)),a.j=h}function jI(a,h){const f=new qs;if(l.Image){const g=new Image;g.onload=w(er,f,"TestLoadImage: loaded",!0,h,g),g.onerror=w(er,f,"TestLoadImage: error",!1,h,g),g.onabort=w(er,f,"TestLoadImage: abort",!1,h,g),g.ontimeout=w(er,f,"TestLoadImage: timeout",!1,h,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function $I(a,h){const f=new qs,g=new AbortController,b=setTimeout(()=>{g.abort(),er(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(O=>{clearTimeout(b),O.ok?er(f,"TestPingServer: ok",!0,h):er(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(b),er(f,"TestPingServer: error",!1,h)})}function er(a,h,f,g,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),g(f)}catch{}}function zI(){this.g=new SI}function BI(a,h,f){const g=f||"";try{Zm(a,function(b,O){let B=b;c(b)&&(B=Mc(b)),h.push(g+O+"="+encodeURIComponent(B))})}catch(b){throw h.push(g+"type="+encodeURIComponent("_badmap")),b}}function Xs(a){this.l=a.Ub||null,this.j=a.eb||!1}S(Xs,Uc),Xs.prototype.g=function(){return new Ha(this.l,this.j)},Xs.prototype.i=function(a){return function(){return a}}({});function Ha(a,h){nt.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(Ha,nt),t=Ha.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Zs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Js(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Zs(this)),this.g&&(this.readyState=3,Zs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;og(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function og(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Js(this):Zs(this),this.readyState==3&&og(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Js(this))},t.Qa=function(a){this.g&&(this.response=a,Js(this))},t.ga=function(){this.g&&Js(this)};function Js(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Zs(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function Zs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ha.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function ag(a){let h="";return V(a,function(f,g){h+=g,h+=":",h+=f,h+=`\r
`}),h}function Gc(a,h,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=ag(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):me(a,h,f))}function Ae(a){nt.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(Ae,nt);var WI=/^https?$/i,HI=["POST","PUT"];t=Ae.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():$c.g(),this.v=this.o?Vm(this.o):Vm($c),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(O){lg(this,O);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var b in g)f.set(b,g[b]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const O of g.keys())f.set(O,g.get(O));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(O=>O.toLowerCase()=="content-type"),b=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(HI,h,void 0))||g||b||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,B]of f)this.g.setRequestHeader(O,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{hg(this),this.u=!0,this.g.send(a),this.u=!1}catch(O){lg(this,O)}};function lg(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,ug(a),qa(a)}function ug(a){a.A||(a.A=!0,mt(a,"complete"),mt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,mt(this,"complete"),mt(this,"abort"),qa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),qa(this,!0)),Ae.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?cg(this):this.bb())},t.bb=function(){cg(this)};function cg(a){if(a.h&&typeof o<"u"&&(!a.v[1]||xn(a)!=4||a.Z()!=2)){if(a.u&&xn(a)==4)bm(a.Ea,0,a);else if(mt(a,"readystatechange"),xn(a)==4){a.h=!1;try{const B=a.Z();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var g;if(g=B===0){var b=String(a.D).match(eg)[1]||null;!b&&l.self&&l.self.location&&(b=l.self.location.protocol.slice(0,-1)),g=!WI.test(b?b.toLowerCase():"")}f=g}if(f)mt(a,"complete"),mt(a,"success");else{a.m=6;try{var O=2<xn(a)?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.Z()+"]",ug(a)}}finally{qa(a)}}}}function qa(a,h){if(a.g){hg(a);const f=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||mt(a,"ready");try{f.onreadystatechange=g}catch{}}}function hg(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function xn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<xn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),II(h)}};function dg(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function qI(a){const h={};a=(a.g&&2<=xn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(_(a[g]))continue;var f=P(a[g]);const b=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const O=h[b]||[];h[b]=O,O.push(f)}v(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function eo(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function fg(a){this.Aa=0,this.i=[],this.j=new qs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=eo("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=eo("baseRetryDelayMs",5e3,a),this.cb=eo("retryDelaySeedMs",1e4,a),this.Wa=eo("forwardChannelMaxRetries",2,a),this.wa=eo("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Gm(a&&a.concurrentRequestLimit),this.Da=new zI,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=fg.prototype,t.la=8,t.G=1,t.connect=function(a,h,f,g){gt(0),this.W=a,this.H=h||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=Tg(this,null,this.W),Ga(this)};function Qc(a){if(pg(a),a.G==3){var h=a.U++,f=Cn(a.I);if(me(f,"SID",a.K),me(f,"RID",h),me(f,"TYPE","terminate"),to(a,f),h=new Jn(a,a.j,h),h.L=2,h.v=Wa(Cn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=h.v,f=!0),f||(h.g=Ig(h.j,null),h.g.ea(h.v)),h.F=Date.now(),$a(h)}Eg(a)}function Ka(a){a.g&&(Xc(a),a.g.cancel(),a.g=null)}function pg(a){Ka(a),a.u&&(l.clearTimeout(a.u),a.u=null),Qa(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Ga(a){if(!Qm(a.h)&&!a.s){a.s=!0;var h=a.Ga;tt||K(),L||(tt(),L=!0),z.add(h,a),a.B=0}}function KI(a,h){return Ym(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Hs(m(a.Ga,a,h),wg(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const b=new Jn(this,this.j,a);let O=this.o;if(this.S&&(O?(O=y(O),R(O,this.S)):O=this.S),this.m!==null||this.O||(b.H=O,O=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=gg(this,b,h),f=Cn(this.I),me(f,"RID",a),me(f,"CVER",22),this.D&&me(f,"X-HTTP-Session-Id",this.D),to(this,f),O&&(this.O?h="headers="+encodeURIComponent(String(ag(O)))+"&"+h:this.m&&Gc(f,this.m,O)),Kc(this.h,b),this.Ua&&me(f,"TYPE","init"),this.P?(me(f,"$req",h),me(f,"SID","null"),b.T=!0,Bc(b,f,null)):Bc(b,f,h),this.G=2}}else this.G==3&&(a?mg(this,a):this.i.length==0||Qm(this.h)||mg(this))};function mg(a,h){var f;h?f=h.l:f=a.U++;const g=Cn(a.I);me(g,"SID",a.K),me(g,"RID",f),me(g,"AID",a.T),to(a,g),a.m&&a.o&&Gc(g,a.m,a.o),f=new Jn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=gg(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Kc(a.h,f),Bc(f,g,h)}function to(a,h){a.H&&V(a.H,function(f,g){me(h,g,f)}),a.l&&Zm({},function(f,g){me(h,g,f)})}function gg(a,h,f){f=Math.min(a.i.length,f);var g=a.l?m(a.l.Na,a.l,a):null;e:{var b=a.i;let O=-1;for(;;){const B=["count="+f];O==-1?0<f?(O=b[0].g,B.push("ofs="+O)):O=0:B.push("ofs="+O);let de=!0;for(let He=0;He<f;He++){let le=b[He].g;const rt=b[He].map;if(le-=O,0>le)O=Math.max(0,b[He].g-100),de=!1;else try{BI(rt,B,"req"+le+"_")}catch{g&&g(rt)}}if(de){g=B.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,g}function yg(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;tt||K(),L||(tt(),L=!0),z.add(h,a),a.v=0}}function Yc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Hs(m(a.Fa,a),wg(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,_g(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Hs(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,gt(10),Ka(this),_g(this))};function Xc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function _g(a){a.g=new Jn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=Cn(a.qa);me(h,"RID","rpc"),me(h,"SID",a.K),me(h,"AID",a.T),me(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&me(h,"TO",a.ja),me(h,"TYPE","xmlhttp"),to(a,h),a.m&&a.o&&Gc(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Wa(Cn(h)),f.m=null,f.P=!0,Hm(f,a)}t.Za=function(){this.C!=null&&(this.C=null,Ka(this),Yc(this),gt(19))};function Qa(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function vg(a,h){var f=null;if(a.g==h){Qa(a),Xc(a),a.g=null;var g=2}else if(qc(a.h,h))f=h.D,Xm(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var b=a.B;g=Ua(),mt(g,new $m(g,f)),Ga(a)}else yg(a);else if(b=h.s,b==3||b==0&&0<h.X||!(g==1&&KI(a,h)||g==2&&Yc(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),b){case 1:Kr(a,5);break;case 4:Kr(a,10);break;case 3:Kr(a,6);break;default:Kr(a,2)}}}function wg(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function Kr(a,h){if(a.j.info("Error code "+h),h==2){var f=m(a.fb,a),g=a.Xa;const b=!g;g=new qr(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||za(g,"https"),Wa(g),b?jI(g.toString(),f):$I(g.toString(),f)}else gt(2);a.G=0,a.l&&a.l.sa(h),Eg(a),pg(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),gt(2)):(this.j.info("Failed to ping google.com"),gt(1))};function Eg(a){if(a.G=0,a.ka=[],a.l){const h=Jm(a.h);(h.length!=0||a.i.length!=0)&&(C(a.ka,h),C(a.ka,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.ra()}}function Tg(a,h,f){var g=f instanceof qr?Cn(f):new qr(f);if(g.g!="")h&&(g.g=h+"."+g.g),Ba(g,g.s);else{var b=l.location;g=b.protocol,h=h?h+"."+b.hostname:b.hostname,b=+b.port;var O=new qr(null);g&&za(O,g),h&&(O.g=h),b&&Ba(O,b),f&&(O.l=f),g=O}return f=a.D,h=a.ya,f&&h&&me(g,f,h),me(g,"VER",a.la),to(a,g),g}function Ig(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Ae(new Xs({eb:f})):new Ae(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Sg(){}t=Sg.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ya(){}Ya.prototype.g=function(a,h){return new Nt(a,h)};function Nt(a,h){nt.call(this),this.g=new fg(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!_(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!_(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new bi(this)}S(Nt,nt),Nt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Nt.prototype.close=function(){Qc(this.g)},Nt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=Mc(a),a=f);h.i.push(new xI(h.Ya++,a)),h.G==3&&Ga(h)},Nt.prototype.N=function(){this.g.l=null,delete this.j,Qc(this.g),delete this.g,Nt.aa.N.call(this)};function Rg(a){Fc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}S(Rg,Fc);function Ag(){jc.call(this),this.status=1}S(Ag,jc);function bi(a){this.g=a}S(bi,Sg),bi.prototype.ua=function(){mt(this.g,"a")},bi.prototype.ta=function(a){mt(this.g,new Rg(a))},bi.prototype.sa=function(a){mt(this.g,new Ag)},bi.prototype.ra=function(){mt(this.g,"b")},Ya.prototype.createWebChannel=Ya.prototype.g,Nt.prototype.send=Nt.prototype.o,Nt.prototype.open=Nt.prototype.m,Nt.prototype.close=Nt.prototype.close,PE=function(){return new Ya},kE=function(){return Ua()},AE=Wr,of={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Fa.NO_ERROR=0,Fa.TIMEOUT=8,Fa.HTTP_ERROR=6,Hl=Fa,zm.COMPLETE="complete",RE=zm,Mm.EventType=Bs,Bs.OPEN="a",Bs.CLOSE="b",Bs.ERROR="c",Bs.MESSAGE="d",nt.prototype.listen=nt.prototype.K,Eo=Mm,SE=Xs,Ae.prototype.listenOnce=Ae.prototype.L,Ae.prototype.getLastError=Ae.prototype.Ka,Ae.prototype.getLastErrorCode=Ae.prototype.Ba,Ae.prototype.getStatus=Ae.prototype.Z,Ae.prototype.getResponseJson=Ae.prototype.Oa,Ae.prototype.getResponseText=Ae.prototype.oa,Ae.prototype.send=Ae.prototype.ea,Ae.prototype.setWithCredentials=Ae.prototype.Ha,IE=Ae}).apply(typeof _l<"u"?_l:typeof self<"u"?self:typeof window<"u"?window:{});const L_="@firebase/firestore";/**
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
 */class lt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}lt.UNAUTHENTICATED=new lt(null),lt.GOOGLE_CREDENTIALS=new lt("google-credentials-uid"),lt.FIRST_PARTY=new lt("first-party-uid"),lt.MOCK_USER=new lt("mock-user");/**
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
 */let Us="10.12.5";/**
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
 */const yi=new bp("@firebase/firestore");function co(){return yi.logLevel}function q(t,...e){if(yi.logLevel<=se.DEBUG){const n=e.map(Bp);yi.debug(`Firestore (${Us}): ${t}`,...n)}}function qn(t,...e){if(yi.logLevel<=se.ERROR){const n=e.map(Bp);yi.error(`Firestore (${Us}): ${t}`,...n)}}function Is(t,...e){if(yi.logLevel<=se.WARN){const n=e.map(Bp);yi.warn(`Firestore (${Us}): ${t}`,...n)}}function Bp(t){if(typeof t=="string")return t;try{/**
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
 */function X(t="Unexpected state"){const e=`FIRESTORE (${Us}) INTERNAL ASSERTION FAILED: `+t;throw qn(e),new Error(e)}function fe(t,e){t||X()}function Z(t,e){return t}/**
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
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends Qt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Cr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class CE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class wN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(lt.UNAUTHENTICATED))}shutdown(){}}class EN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class TN{constructor(e){this.t=e,this.currentUser=lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Cr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Cr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Cr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(fe(typeof r.accessToken=="string"),new CE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return fe(e===null||typeof e=="string"),new lt(e)}}class IN{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=lt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class SN{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new IN(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(lt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class RN{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class AN{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(fe(typeof n.token=="string"),this.R=n.token,new RN(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function kN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class xE{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=kN(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ue(t,e){return t<e?-1:t>e?1:0}function Ss(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class je{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new W(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return je.fromMillis(Date.now())}static fromDate(e){return je.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new je(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new je(0,0))}static max(){return new J(new je(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class ca{constructor(e,n,r){n===void 0?n=0:n>e.length&&X(),r===void 0?r=e.length-n:r>e.length-n&&X(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ca.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ca?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class _e extends ca{construct(e,n,r){return new _e(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(U.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new _e(n)}static emptyPath(){return new _e([])}}const PN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ge extends ca{construct(e,n,r){return new Ge(e,n,r)}static isValidIdentifier(e){return PN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ge.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ge(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new W(U.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new W(U.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new W(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new W(U.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ge(n)}static emptyPath(){return new Ge([])}}/**
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
 */class Q{constructor(e){this.path=e}static fromPath(e){return new Q(_e.fromString(e))}static fromName(e){return new Q(_e.fromString(e).popFirst(5))}static empty(){return new Q(_e.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&_e.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return _e.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Q(new _e(e.slice()))}}function CN(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=J.fromTimestamp(r===1e9?new je(n+1,0):new je(n,r));return new Or(i,Q.empty(),e)}function xN(t){return new Or(t.readTime,t.key,-1)}class Or{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Or(J.min(),Q.empty(),-1)}static max(){return new Or(J.max(),Q.empty(),-1)}}function NN(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Q.comparator(t.documentKey,e.documentKey),n!==0?n:ue(t.largestBatchId,e.largestBatchId))}/**
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
 */const bN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class DN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function xa(t){if(t.code!==U.FAILED_PRECONDITION||t.message!==bN)throw t;q("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&X(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new j((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof j?n:j.resolve(n)}catch(n){return j.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):j.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):j.reject(n)}static resolve(e){return new j((n,r)=>{n(e)})}static reject(e){return new j((n,r)=>{r(e)})}static waitFor(e){return new j((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=j.resolve(!1);for(const r of e)n=n.next(i=>i?j.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new j((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++l,l===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new j((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function ON(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Na(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Wp{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Wp.oe=-1;function yc(t){return t==null}function Ou(t){return t===0&&1/t==-1/0}function LN(t){return typeof t=="number"&&Number.isInteger(t)&&!Ou(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function V_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ki(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function NE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Re{constructor(e,n){this.comparator=e,this.root=n||Ke.EMPTY}insert(e,n){return new Re(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ke.BLACK,null,null))}remove(e){return new Re(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ke.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new vl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new vl(this.root,e,this.comparator,!1)}getReverseIterator(){return new vl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new vl(this.root,e,this.comparator,!0)}}class vl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ke{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ke.RED,this.left=i??Ke.EMPTY,this.right=s??Ke.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ke(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ke.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ke.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw X();const e=this.left.check();if(e!==this.right.check())throw X();return e+(this.isRed()?0:1)}}Ke.EMPTY=null,Ke.RED=!0,Ke.BLACK=!1;Ke.EMPTY=new class{constructor(){this.size=0}get key(){throw X()}get value(){throw X()}get color(){throw X()}get left(){throw X()}get right(){throw X()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Ke(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ye{constructor(e){this.comparator=e,this.data=new Re(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new M_(this.data.getIterator())}getIteratorFrom(e){return new M_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ye)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ye(this.comparator);return n.data=e,n}}class M_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Lt{constructor(e){this.fields=e,e.sort(Ge.comparator)}static empty(){return new Lt([])}unionWith(e){let n=new Ye(Ge.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Lt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ss(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class bE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ze{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new bE("Invalid base64 string: "+s):s}}(e);return new Ze(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ze(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ze.EMPTY_BYTE_STRING=new Ze("");const VN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Lr(t){if(fe(!!t),typeof t=="string"){let e=0;const n=VN.exec(t);if(fe(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Oe(t.seconds),nanos:Oe(t.nanos)}}function Oe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function _i(t){return typeof t=="string"?Ze.fromBase64String(t):Ze.fromUint8Array(t)}/**
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
 */function Hp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function qp(t){const e=t.mapValue.fields.__previous_value__;return Hp(e)?qp(e):e}function ha(t){const e=Lr(t.mapValue.fields.__local_write_time__.timestampValue);return new je(e.seconds,e.nanos)}/**
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
 */class MN{constructor(e,n,r,i,s,o,l,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c}}class da{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new da("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof da&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const wl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function vi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Hp(t)?4:UN(t)?9007199254740991:10:X()}function Rn(t,e){if(t===e)return!0;const n=vi(t);if(n!==vi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ha(t).isEqual(ha(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Lr(i.timestampValue),l=Lr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return _i(i.bytesValue).isEqual(_i(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Oe(i.geoPointValue.latitude)===Oe(s.geoPointValue.latitude)&&Oe(i.geoPointValue.longitude)===Oe(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Oe(i.integerValue)===Oe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Oe(i.doubleValue),l=Oe(s.doubleValue);return o===l?Ou(o)===Ou(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Ss(t.arrayValue.values||[],e.arrayValue.values||[],Rn);case 10:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(V_(o)!==V_(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Rn(o[u],l[u])))return!1;return!0}(t,e);default:return X()}}function fa(t,e){return(t.values||[]).find(n=>Rn(n,e))!==void 0}function Rs(t,e){if(t===e)return 0;const n=vi(t),r=vi(e);if(n!==r)return ue(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ue(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Oe(s.integerValue||s.doubleValue),u=Oe(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return U_(t.timestampValue,e.timestampValue);case 4:return U_(ha(t),ha(e));case 5:return ue(t.stringValue,e.stringValue);case 6:return function(s,o){const l=_i(s),u=_i(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const d=ue(l[c],u[c]);if(d!==0)return d}return ue(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ue(Oe(s.latitude),Oe(o.latitude));return l!==0?l:ue(Oe(s.longitude),Oe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const l=s.values||[],u=o.values||[];for(let c=0;c<l.length&&c<u.length;++c){const d=Rs(l[c],u[c]);if(d)return d}return ue(l.length,u.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===wl.mapValue&&o===wl.mapValue)return 0;if(s===wl.mapValue)return 1;if(o===wl.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let p=0;p<u.length&&p<d.length;++p){const m=ue(u[p],d[p]);if(m!==0)return m;const w=Rs(l[u[p]],c[d[p]]);if(w!==0)return w}return ue(u.length,d.length)}(t.mapValue,e.mapValue);default:throw X()}}function U_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ue(t,e);const n=Lr(t),r=Lr(e),i=ue(n.seconds,r.seconds);return i!==0?i:ue(n.nanos,r.nanos)}function As(t){return af(t)}function af(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Lr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return _i(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=af(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${af(n.fields[o])}`;return i+"}"}(t.mapValue):X()}function F_(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function lf(t){return!!t&&"integerValue"in t}function Kp(t){return!!t&&"arrayValue"in t}function j_(t){return!!t&&"nullValue"in t}function $_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ql(t){return!!t&&"mapValue"in t}function Vo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ki(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Vo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Vo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function UN(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Rt{constructor(e){this.value=e}static empty(){return new Rt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ql(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Vo(n)}setAll(e){let n=Ge.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Vo(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());ql(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Rn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];ql(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ki(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Rt(Vo(this.value))}}function DE(t){const e=[];return ki(t.fields,(n,r)=>{const i=new Ge([n]);if(ql(r)){const s=DE(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Lt(e)}/**
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
 */class ct{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new ct(e,0,J.min(),J.min(),J.min(),Rt.empty(),0)}static newFoundDocument(e,n,r,i){return new ct(e,1,n,J.min(),r,i,0)}static newNoDocument(e,n){return new ct(e,2,n,J.min(),J.min(),Rt.empty(),0)}static newUnknownDocument(e,n){return new ct(e,3,n,J.min(),J.min(),Rt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Rt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ct&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ct(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Lu{constructor(e,n){this.position=e,this.inclusive=n}}function z_(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=Q.comparator(Q.fromName(o.referenceValue),n.key):r=Rs(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function B_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Rn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class pa{constructor(e,n="asc"){this.field=e,this.dir=n}}function FN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class OE{}class Me extends OE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new $N(e,n,r):n==="array-contains"?new WN(e,r):n==="in"?new HN(e,r):n==="not-in"?new qN(e,r):n==="array-contains-any"?new KN(e,r):new Me(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new zN(e,r):new BN(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Rs(n,this.value)):n!==null&&vi(this.value)===vi(n)&&this.matchesComparison(Rs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class un extends OE{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new un(e,n)}matches(e){return LE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function LE(t){return t.op==="and"}function VE(t){return jN(t)&&LE(t)}function jN(t){for(const e of t.filters)if(e instanceof un)return!1;return!0}function uf(t){if(t instanceof Me)return t.field.canonicalString()+t.op.toString()+As(t.value);if(VE(t))return t.filters.map(e=>uf(e)).join(",");{const e=t.filters.map(n=>uf(n)).join(",");return`${t.op}(${e})`}}function ME(t,e){return t instanceof Me?function(r,i){return i instanceof Me&&r.op===i.op&&r.field.isEqual(i.field)&&Rn(r.value,i.value)}(t,e):t instanceof un?function(r,i){return i instanceof un&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&ME(o,i.filters[l]),!0):!1}(t,e):void X()}function UE(t){return t instanceof Me?function(n){return`${n.field.canonicalString()} ${n.op} ${As(n.value)}`}(t):t instanceof un?function(n){return n.op.toString()+" {"+n.getFilters().map(UE).join(" ,")+"}"}(t):"Filter"}class $N extends Me{constructor(e,n,r){super(e,n,r),this.key=Q.fromName(r.referenceValue)}matches(e){const n=Q.comparator(e.key,this.key);return this.matchesComparison(n)}}class zN extends Me{constructor(e,n){super(e,"in",n),this.keys=FE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class BN extends Me{constructor(e,n){super(e,"not-in",n),this.keys=FE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function FE(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Q.fromName(r.referenceValue))}class WN extends Me{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Kp(n)&&fa(n.arrayValue,this.value)}}class HN extends Me{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&fa(this.value.arrayValue,n)}}class qN extends Me{constructor(e,n){super(e,"not-in",n)}matches(e){if(fa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!fa(this.value.arrayValue,n)}}class KN extends Me{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Kp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>fa(this.value.arrayValue,r))}}/**
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
 */class GN{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function W_(t,e=null,n=[],r=[],i=null,s=null,o=null){return new GN(t,e,n,r,i,s,o)}function Gp(t){const e=Z(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>uf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),yc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>As(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>As(r)).join(",")),e.ue=n}return e.ue}function Qp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!FN(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ME(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!B_(t.startAt,e.startAt)&&B_(t.endAt,e.endAt)}function cf(t){return Q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Fs{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function QN(t,e,n,r,i,s,o,l){return new Fs(t,e,n,r,i,s,o,l)}function _c(t){return new Fs(t)}function H_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function jE(t){return t.collectionGroup!==null}function Mo(t){const e=Z(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Ye(Ge.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new pa(s,r))}),n.has(Ge.keyField().canonicalString())||e.ce.push(new pa(Ge.keyField(),r))}return e.ce}function En(t){const e=Z(t);return e.le||(e.le=YN(e,Mo(t))),e.le}function YN(t,e){if(t.limitType==="F")return W_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new pa(i.field,s)});const n=t.endAt?new Lu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Lu(t.startAt.position,t.startAt.inclusive):null;return W_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function hf(t,e){const n=t.filters.concat([e]);return new Fs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function df(t,e,n){return new Fs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function vc(t,e){return Qp(En(t),En(e))&&t.limitType===e.limitType}function $E(t){return`${Gp(En(t))}|lt:${t.limitType}`}function Vi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>UE(i)).join(", ")}]`),yc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>As(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>As(i)).join(",")),`Target(${r})`}(En(t))}; limitType=${t.limitType})`}function wc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):Q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Mo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=z_(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,Mo(r),i)||r.endAt&&!function(o,l,u){const c=z_(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,Mo(r),i))}(t,e)}function XN(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function zE(t){return(e,n)=>{let r=!1;for(const i of Mo(t)){const s=JN(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function JN(t,e,n){const r=t.field.isKeyField()?Q.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?Rs(u,c):X()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return X()}}/**
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
 */class js{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ki(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return NE(this.inner)}size(){return this.innerSize}}/**
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
 */const ZN=new Re(Q.comparator);function Kn(){return ZN}const BE=new Re(Q.comparator);function To(...t){let e=BE;for(const n of t)e=e.insert(n.key,n);return e}function WE(t){let e=BE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ti(){return Uo()}function HE(){return Uo()}function Uo(){return new js(t=>t.toString(),(t,e)=>t.isEqual(e))}const eb=new Re(Q.comparator),tb=new Ye(Q.comparator);function ie(...t){let e=tb;for(const n of t)e=e.add(n);return e}const nb=new Ye(ue);function rb(){return nb}/**
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
 */function qE(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ou(e)?"-0":e}}function KE(t){return{integerValue:""+t}}function ib(t,e){return LN(e)?KE(e):qE(t,e)}/**
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
 */class Ec{constructor(){this._=void 0}}function sb(t,e,n){return t instanceof Vu?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Hp(s)&&(s=qp(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof ma?QE(t,e):t instanceof ga?YE(t,e):function(i,s){const o=GE(i,s),l=q_(o)+q_(i.Pe);return lf(o)&&lf(i.Pe)?KE(l):qE(i.serializer,l)}(t,e)}function ob(t,e,n){return t instanceof ma?QE(t,e):t instanceof ga?YE(t,e):n}function GE(t,e){return t instanceof Mu?function(r){return lf(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Vu extends Ec{}class ma extends Ec{constructor(e){super(),this.elements=e}}function QE(t,e){const n=XE(e);for(const r of t.elements)n.some(i=>Rn(i,r))||n.push(r);return{arrayValue:{values:n}}}class ga extends Ec{constructor(e){super(),this.elements=e}}function YE(t,e){let n=XE(e);for(const r of t.elements)n=n.filter(i=>!Rn(i,r));return{arrayValue:{values:n}}}class Mu extends Ec{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function q_(t){return Oe(t.integerValue||t.doubleValue)}function XE(t){return Kp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function ab(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof ma&&i instanceof ma||r instanceof ga&&i instanceof ga?Ss(r.elements,i.elements,Rn):r instanceof Mu&&i instanceof Mu?Rn(r.Pe,i.Pe):r instanceof Vu&&i instanceof Vu}(t.transform,e.transform)}class lb{constructor(e,n){this.version=e,this.transformResults=n}}class Tn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Tn}static exists(e){return new Tn(void 0,e)}static updateTime(e){return new Tn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Kl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Tc{}function JE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new eT(t.key,Tn.none()):new ba(t.key,t.data,Tn.none());{const n=t.data,r=Rt.empty();let i=new Ye(Ge.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new zr(t.key,r,new Lt(i.toArray()),Tn.none())}}function ub(t,e,n){t instanceof ba?function(i,s,o){const l=i.value.clone(),u=G_(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof zr?function(i,s,o){if(!Kl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=G_(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(ZE(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Fo(t,e,n,r){return t instanceof ba?function(s,o,l,u){if(!Kl(s.precondition,o))return l;const c=s.value.clone(),d=Q_(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof zr?function(s,o,l,u){if(!Kl(s.precondition,o))return l;const c=Q_(s.fieldTransforms,u,o),d=o.data;return d.setAll(ZE(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return Kl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function cb(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=GE(r.transform,i||null);s!=null&&(n===null&&(n=Rt.empty()),n.set(r.field,s))}return n||null}function K_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ss(r,i,(s,o)=>ab(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ba extends Tc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class zr extends Tc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function ZE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function G_(t,e,n){const r=new Map;fe(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,ob(o,l,n[i]))}return r}function Q_(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,sb(s,o,e))}return r}class eT extends Tc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class hb extends Tc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class db{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&ub(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Fo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Fo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=HE();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=JE(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ie())}isEqual(e){return this.batchId===e.batchId&&Ss(this.mutations,e.mutations,(n,r)=>K_(n,r))&&Ss(this.baseMutations,e.baseMutations,(n,r)=>K_(n,r))}}class Yp{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){fe(e.mutations.length===r.length);let i=function(){return eb}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Yp(e,n,r,i)}}/**
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
 */class fb{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class pb{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var De,oe;function mb(t){switch(t){default:return X();case U.CANCELLED:case U.UNKNOWN:case U.DEADLINE_EXCEEDED:case U.RESOURCE_EXHAUSTED:case U.INTERNAL:case U.UNAVAILABLE:case U.UNAUTHENTICATED:return!1;case U.INVALID_ARGUMENT:case U.NOT_FOUND:case U.ALREADY_EXISTS:case U.PERMISSION_DENIED:case U.FAILED_PRECONDITION:case U.ABORTED:case U.OUT_OF_RANGE:case U.UNIMPLEMENTED:case U.DATA_LOSS:return!0}}function tT(t){if(t===void 0)return qn("GRPC error has no .code"),U.UNKNOWN;switch(t){case De.OK:return U.OK;case De.CANCELLED:return U.CANCELLED;case De.UNKNOWN:return U.UNKNOWN;case De.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case De.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case De.INTERNAL:return U.INTERNAL;case De.UNAVAILABLE:return U.UNAVAILABLE;case De.UNAUTHENTICATED:return U.UNAUTHENTICATED;case De.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case De.NOT_FOUND:return U.NOT_FOUND;case De.ALREADY_EXISTS:return U.ALREADY_EXISTS;case De.PERMISSION_DENIED:return U.PERMISSION_DENIED;case De.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case De.ABORTED:return U.ABORTED;case De.OUT_OF_RANGE:return U.OUT_OF_RANGE;case De.UNIMPLEMENTED:return U.UNIMPLEMENTED;case De.DATA_LOSS:return U.DATA_LOSS;default:return X()}}(oe=De||(De={}))[oe.OK=0]="OK",oe[oe.CANCELLED=1]="CANCELLED",oe[oe.UNKNOWN=2]="UNKNOWN",oe[oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oe[oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oe[oe.NOT_FOUND=5]="NOT_FOUND",oe[oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",oe[oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",oe[oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",oe[oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oe[oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oe[oe.ABORTED=10]="ABORTED",oe[oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",oe[oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",oe[oe.INTERNAL=13]="INTERNAL",oe[oe.UNAVAILABLE=14]="UNAVAILABLE",oe[oe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function gb(){return new TextEncoder}/**
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
 */const yb=new oi([4294967295,4294967295],0);function Y_(t){const e=gb().encode(t),n=new TE;return n.update(e),new Uint8Array(n.digest())}function X_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new oi([n,r],0),new oi([i,s],0)]}class Xp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Io(`Invalid padding: ${n}`);if(r<0)throw new Io(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Io(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Io(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=oi.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(oi.fromNumber(r)));return i.compare(yb)===1&&(i=new oi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Y_(e),[r,i]=X_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Xp(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=Y_(e),[r,i]=X_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Io extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ic{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Da.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ic(J.min(),i,new Re(ue),Kn(),ie())}}class Da{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Da(r,n,ie(),ie(),ie())}}/**
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
 */class Gl{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class nT{constructor(e,n){this.targetId=e,this.me=n}}class rT{constructor(e,n,r=Ze.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class J_{constructor(){this.fe=0,this.ge=ev(),this.pe=Ze.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=ie(),n=ie(),r=ie();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:X()}}),new Da(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=ev()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,fe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class _b{constructor(e){this.Le=e,this.Be=new Map,this.ke=Kn(),this.qe=Z_(),this.Qe=new Re(ue)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:X()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(cf(s))if(r===0){const o=new Q(s.path);this.Ue(n,o,ct.newNoDocument(o,J.min()))}else fe(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=_i(r).toUint8Array()}catch(u){if(u instanceof bE)return Is("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Xp(o,i,s)}catch(u){return Is(u instanceof Io?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&cf(l.target)){const u=new Q(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,ct.newNoDocument(u,e))}s.be&&(n.set(o,s.Ce()),s.ve())}});let r=ie();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Ic(e,n,this.Qe,this.ke,r);return this.ke=Kn(),this.qe=Z_(),this.Qe=new Re(ue),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new J_,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Ye(ue),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||q("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new J_),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Z_(){return new Re(Q.comparator)}function ev(){return new Re(Q.comparator)}const vb={asc:"ASCENDING",desc:"DESCENDING"},wb={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Eb={and:"AND",or:"OR"};class Tb{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ff(t,e){return t.useProto3Json||yc(e)?e:{value:e}}function Uu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function iT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Ib(t,e){return Uu(t,e.toTimestamp())}function In(t){return fe(!!t),J.fromTimestamp(function(n){const r=Lr(n);return new je(r.seconds,r.nanos)}(t))}function Jp(t,e){return pf(t,e).canonicalString()}function pf(t,e){const n=function(i){return new _e(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function sT(t){const e=_e.fromString(t);return fe(cT(e)),e}function mf(t,e){return Jp(t.databaseId,e.path)}function Mh(t,e){const n=sT(e);if(n.get(1)!==t.databaseId.projectId)throw new W(U.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(U.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Q(aT(n))}function oT(t,e){return Jp(t.databaseId,e)}function Sb(t){const e=sT(t);return e.length===4?_e.emptyPath():aT(e)}function gf(t){return new _e(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function aT(t){return fe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function tv(t,e,n){return{name:mf(t,e),fields:n.value.mapValue.fields}}function Rb(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:X()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(fe(d===void 0||typeof d=="string"),Ze.fromBase64String(d||"")):(fe(d===void 0||d instanceof Buffer||d instanceof Uint8Array),Ze.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const d=c.code===void 0?U.UNKNOWN:tT(c.code);return new W(d,c.message||"")}(o);n=new rT(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Mh(t,r.document.name),s=In(r.document.updateTime),o=r.document.createTime?In(r.document.createTime):J.min(),l=new Rt({mapValue:{fields:r.document.fields}}),u=ct.newFoundDocument(i,s,o,l),c=r.targetIds||[],d=r.removedTargetIds||[];n=new Gl(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Mh(t,r.document),s=r.readTime?In(r.readTime):J.min(),o=ct.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Gl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Mh(t,r.document),s=r.removedTargetIds||[];n=new Gl([],s,i,null)}else{if(!("filter"in e))return X();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new pb(i,s),l=r.targetId;n=new nT(l,o)}}return n}function Ab(t,e){let n;if(e instanceof ba)n={update:tv(t,e.key,e.value)};else if(e instanceof eT)n={delete:mf(t,e.key)};else if(e instanceof zr)n={update:tv(t,e.key,e.data),updateMask:Lb(e.fieldMask)};else{if(!(e instanceof hb))return X();n={verify:mf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Vu)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ma)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ga)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Mu)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw X()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Ib(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:X()}(t,e.precondition)),n}function kb(t,e){return t&&t.length>0?(fe(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?In(i.updateTime):In(s);return o.isEqual(J.min())&&(o=In(s)),new lb(o,i.transformResults||[])}(n,e))):[]}function Pb(t,e){return{documents:[oT(t,e.path)]}}function Cb(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=oT(t,i);const s=function(c){if(c.length!==0)return uT(un.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:Mi(m.field),direction:bb(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=ff(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function xb(t){let e=Sb(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){fe(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(p){const m=lT(p);return m instanceof un&&VE(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(S){return new pa(Ui(S.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,yc(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,w=p.values||[];return new Lu(w,m)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const m=!p.before,w=p.values||[];return new Lu(w,m)}(n.endAt)),QN(e,i,o,s,l,"F",u,c)}function Nb(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return X()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function lT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ui(n.unaryFilter.field);return Me.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ui(n.unaryFilter.field);return Me.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ui(n.unaryFilter.field);return Me.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ui(n.unaryFilter.field);return Me.create(o,"!=",{nullValue:"NULL_VALUE"});default:return X()}}(t):t.fieldFilter!==void 0?function(n){return Me.create(Ui(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return X()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return un.create(n.compositeFilter.filters.map(r=>lT(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return X()}}(n.compositeFilter.op))}(t):X()}function bb(t){return vb[t]}function Db(t){return wb[t]}function Ob(t){return Eb[t]}function Mi(t){return{fieldPath:t.canonicalString()}}function Ui(t){return Ge.fromServerFormat(t.fieldPath)}function uT(t){return t instanceof Me?function(n){if(n.op==="=="){if($_(n.value))return{unaryFilter:{field:Mi(n.field),op:"IS_NAN"}};if(j_(n.value))return{unaryFilter:{field:Mi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if($_(n.value))return{unaryFilter:{field:Mi(n.field),op:"IS_NOT_NAN"}};if(j_(n.value))return{unaryFilter:{field:Mi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Mi(n.field),op:Db(n.op),value:n.value}}}(t):t instanceof un?function(n){const r=n.getFilters().map(i=>uT(i));return r.length===1?r[0]:{compositeFilter:{op:Ob(n.op),filters:r}}}(t):X()}function Lb(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function cT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class gr{constructor(e,n,r,i,s=J.min(),o=J.min(),l=Ze.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new gr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Vb{constructor(e){this.ct=e}}function Mb(t){const e=xb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?df(e,e.limit,"L"):e}/**
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
 */class Ub{constructor(){this.an=new Fb}addToCollectionParentIndex(e,n){return this.an.add(n),j.resolve()}getCollectionParents(e,n){return j.resolve(this.an.getEntries(n))}addFieldIndex(e,n){return j.resolve()}deleteFieldIndex(e,n){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,n){return j.resolve()}getDocumentsMatchingTarget(e,n){return j.resolve(null)}getIndexType(e,n){return j.resolve(0)}getFieldIndexes(e,n){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,n){return j.resolve(Or.min())}getMinOffsetFromCollectionGroup(e,n){return j.resolve(Or.min())}updateCollectionGroup(e,n,r){return j.resolve()}updateIndexEntries(e,n){return j.resolve()}}class Fb{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ye(_e.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ye(_e.comparator)).toArray()}}/**
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
 */class ks{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static Ln(){return new ks(0)}static Bn(){return new ks(-1)}}/**
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
 */class jb{constructor(){this.changes=new js(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ct.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?j.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class $b{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class zb{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Fo(r.mutation,i,Lt.empty(),je.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ie()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ie()){const i=ti();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=To();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ti();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ie()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Kn();const o=Uo(),l=function(){return Uo()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof zr)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),Fo(d.mutation,c,d.mutation.getFieldMask(),je.now())):o.set(c.key,Lt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var p;return l.set(c,new $b(d,(p=o.get(c))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Uo();let i=new Re((o,l)=>o-l),s=ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||Lt.empty();d=l.applyToLocalView(c,d),r.set(u,d);const p=(i.get(l.batchId)||ie()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,d=u.value,p=HE();d.forEach(m=>{if(!s.has(m)){const w=JE(n.get(m),r.get(m));w!==null&&p.set(m,w),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return j.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return Q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):jE(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):j.resolve(ti());let l=-1,u=s;return o.next(c=>j.forEach(c,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(d)?j.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,ie())).next(d=>({batchId:l,changes:WE(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Q(n)).next(r=>{let i=To();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=To();return this.indexManager.getCollectionParents(e,s).next(l=>j.forEach(l,u=>{const c=function(p,m){return new Fs(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,ct.newInvalidDocument(d)))});let l=To();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&Fo(d.mutation,c,Lt.empty(),je.now()),wc(n,c)&&(l=l.insert(u,c))}),l})}}/**
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
 */class Bb{constructor(e){this.serializer=e,this.lr=new Map,this.hr=new Map}getBundleMetadata(e,n){return j.resolve(this.lr.get(n))}saveBundleMetadata(e,n){return this.lr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:In(i.createTime)}}(n)),j.resolve()}getNamedQuery(e,n){return j.resolve(this.hr.get(n))}saveNamedQuery(e,n){return this.hr.set(n.name,function(i){return{name:i.name,query:Mb(i.bundledQuery),readTime:In(i.readTime)}}(n)),j.resolve()}}/**
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
 */class Wb{constructor(){this.overlays=new Re(Q.comparator),this.Pr=new Map}getOverlay(e,n){return j.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ti();return j.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),j.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Pr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Pr.delete(r)),j.resolve()}getOverlaysForCollection(e,n,r){const i=ti(),s=n.length+1,o=new Q(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return j.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Re((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=ti(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const l=ti(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>l.set(c,d)),!(l.size()>=i)););return j.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Pr.get(i.largestBatchId).delete(r.key);this.Pr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new fb(n,r));let s=this.Pr.get(n);s===void 0&&(s=ie(),this.Pr.set(n,s)),this.Pr.set(n,s.add(r.key))}}/**
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
 */class Hb{constructor(){this.sessionToken=Ze.EMPTY_BYTE_STRING}getSessionToken(e){return j.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,j.resolve()}}/**
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
 */class Zp{constructor(){this.Ir=new Ye($e.Tr),this.Er=new Ye($e.dr)}isEmpty(){return this.Ir.isEmpty()}addReference(e,n){const r=new $e(e,n);this.Ir=this.Ir.add(r),this.Er=this.Er.add(r)}Ar(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Rr(new $e(e,n))}Vr(e,n){e.forEach(r=>this.removeReference(r,n))}mr(e){const n=new Q(new _e([])),r=new $e(n,e),i=new $e(n,e+1),s=[];return this.Er.forEachInRange([r,i],o=>{this.Rr(o),s.push(o.key)}),s}gr(){this.Ir.forEach(e=>this.Rr(e))}Rr(e){this.Ir=this.Ir.delete(e),this.Er=this.Er.delete(e)}pr(e){const n=new Q(new _e([])),r=new $e(n,e),i=new $e(n,e+1);let s=ie();return this.Er.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new $e(e,0),r=this.Ir.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class $e{constructor(e,n){this.key=e,this.yr=n}static Tr(e,n){return Q.comparator(e.key,n.key)||ue(e.yr,n.yr)}static dr(e,n){return ue(e.yr,n.yr)||Q.comparator(e.key,n.key)}}/**
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
 */class qb{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.wr=1,this.Sr=new Ye($e.Tr)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new db(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Sr=this.Sr.add(new $e(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return j.resolve(o)}lookupMutationBatch(e,n){return j.resolve(this.br(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Dr(r),s=i<0?0:i;return j.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?-1:this.wr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new $e(n,0),i=new $e(n,Number.POSITIVE_INFINITY),s=[];return this.Sr.forEachInRange([r,i],o=>{const l=this.br(o.yr);s.push(l)}),j.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ye(ue);return n.forEach(i=>{const s=new $e(i,0),o=new $e(i,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([s,o],l=>{r=r.add(l.yr)})}),j.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;Q.isDocumentKey(s)||(s=s.child(""));const o=new $e(new Q(s),0);let l=new Ye(ue);return this.Sr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.yr)),!0)},o),j.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.br(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){fe(this.vr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Sr;return j.forEach(n.mutations,i=>{const s=new $e(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Sr=r})}xn(e){}containsKey(e,n){const r=new $e(n,0),i=this.Sr.firstAfterOrEqual(r);return j.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}vr(e,n){return this.Dr(e)}Dr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}br(e){const n=this.Dr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Kb{constructor(e){this.Fr=e,this.docs=function(){return new Re(Q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Fr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return j.resolve(r?r.document.mutableCopy():ct.newInvalidDocument(n))}getEntries(e,n){let r=Kn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ct.newInvalidDocument(i))}),j.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Kn();const o=n.path,l=new Q(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||NN(xN(d),r)<=0||(i.has(d.key)||wc(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return j.resolve(s)}getAllFromCollectionGroup(e,n,r,i){X()}Mr(e,n){return j.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Gb(this)}getSize(e){return j.resolve(this.size)}}class Gb extends jb{constructor(e){super(),this.ur=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ur.addEntry(e,i)):this.ur.removeEntry(r)}),j.waitFor(n)}getFromCache(e,n){return this.ur.getEntry(e,n)}getAllFromCache(e,n){return this.ur.getEntries(e,n)}}/**
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
 */class Qb{constructor(e){this.persistence=e,this.Or=new js(n=>Gp(n),Qp),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.Nr=0,this.Lr=new Zp,this.targetCount=0,this.Br=ks.Ln()}forEachTarget(e,n){return this.Or.forEach((r,i)=>n(i)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.Nr)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Nr&&(this.Nr=n),j.resolve()}Qn(e){this.Or.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Br=new ks(n),this.highestTargetId=n),e.sequenceNumber>this.Nr&&(this.Nr=e.sequenceNumber)}addTargetData(e,n){return this.Qn(n),this.targetCount+=1,j.resolve()}updateTargetData(e,n){return this.Qn(n),j.resolve()}removeTargetData(e,n){return this.Or.delete(n.target),this.Lr.mr(n.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Or.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Or.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),j.waitFor(s).next(()=>i)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,n){const r=this.Or.get(n)||null;return j.resolve(r)}addMatchingKeys(e,n,r){return this.Lr.Ar(n,r),j.resolve()}removeMatchingKeys(e,n,r){this.Lr.Vr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),j.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Lr.mr(n),j.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Lr.pr(n);return j.resolve(r)}containsKey(e,n){return j.resolve(this.Lr.containsKey(n))}}/**
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
 */class Yb{constructor(e,n){this.kr={},this.overlays={},this.qr=new Wp(0),this.Qr=!1,this.Qr=!0,this.Kr=new Hb,this.referenceDelegate=e(this),this.$r=new Qb(this),this.indexManager=new Ub,this.remoteDocumentCache=function(i){return new Kb(i)}(r=>this.referenceDelegate.Ur(r)),this.serializer=new Vb(n),this.Wr=new Bb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Wb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.kr[e.toKey()];return r||(r=new qb(n,this.referenceDelegate),this.kr[e.toKey()]=r),r}getGlobalsCache(){return this.Kr}getTargetCache(){return this.$r}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Wr}runTransaction(e,n,r){q("MemoryPersistence","Starting transaction:",e);const i=new Xb(this.qr.next());return this.referenceDelegate.Gr(),r(i).next(s=>this.referenceDelegate.zr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}jr(e,n){return j.or(Object.values(this.kr).map(r=>()=>r.containsKey(e,n)))}}class Xb extends DN{constructor(e){super(),this.currentSequenceNumber=e}}class em{constructor(e){this.persistence=e,this.Hr=new Zp,this.Jr=null}static Yr(e){return new em(e)}get Zr(){if(this.Jr)return this.Jr;throw X()}addReference(e,n,r){return this.Hr.addReference(r,n),this.Zr.delete(r.toString()),j.resolve()}removeReference(e,n,r){return this.Hr.removeReference(r,n),this.Zr.add(r.toString()),j.resolve()}markPotentiallyOrphaned(e,n){return this.Zr.add(n.toString()),j.resolve()}removeTarget(e,n){this.Hr.mr(n.targetId).forEach(i=>this.Zr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Zr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Gr(){this.Jr=new Set}zr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.Zr,r=>{const i=Q.fromPath(r);return this.Xr(e,i).next(s=>{s||n.removeEntry(i,J.min())})}).next(()=>(this.Jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Xr(e,n).next(r=>{r?this.Zr.delete(n.toString()):this.Zr.add(n.toString())})}Ur(e){return 0}Xr(e,n){return j.or([()=>j.resolve(this.Hr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.jr(e,n)])}}/**
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
 */class tm{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Ki=r,this.$i=i}static Ui(e,n){let r=ie(),i=ie();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new tm(e,n.fromCache,r,i)}}/**
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
 */class Jb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Zb{constructor(){this.Wi=!1,this.Gi=!1,this.zi=100,this.ji=function(){return zP()?8:ON(Je())>0?6:4}()}initialize(e,n){this.Hi=e,this.indexManager=n,this.Wi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Yi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new Jb;return this.Zi(e,n,o).next(l=>{if(s.result=l,this.Gi)return this.Xi(e,n,o,l.size)})}).next(()=>s.result)}Xi(e,n,r,i){return r.documentReadCount<this.zi?(co()<=se.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",Vi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.zi,"documents"),j.resolve()):(co()<=se.DEBUG&&q("QueryEngine","Query:",Vi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ji*i?(co()<=se.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",Vi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,En(n))):j.resolve())}Ji(e,n){if(H_(n))return j.resolve(null);let r=En(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=df(n,null,"F"),r=En(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ie(...s);return this.Hi.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.es(n,l);return this.ts(n,c,o,u.readTime)?this.Ji(e,df(n,null,"F")):this.ns(e,c,n,u)}))})))}Yi(e,n,r,i){return H_(n)||i.isEqual(J.min())?j.resolve(null):this.Hi.getDocuments(e,r).next(s=>{const o=this.es(n,s);return this.ts(n,o,r,i)?j.resolve(null):(co()<=se.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Vi(n)),this.ns(e,o,n,CN(i,-1)).next(l=>l))})}es(e,n){let r=new Ye(zE(e));return n.forEach((i,s)=>{wc(e,s)&&(r=r.add(s))}),r}ts(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Zi(e,n,r){return co()<=se.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",Vi(n)),this.Hi.getDocumentsMatchingQuery(e,n,Or.min(),r)}ns(e,n,r,i){return this.Hi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class e4{constructor(e,n,r,i){this.persistence=e,this.rs=n,this.serializer=i,this.ss=new Re(ue),this.os=new js(s=>Gp(s),Qp),this._s=new Map,this.us=e.getRemoteDocumentCache(),this.$r=e.getTargetCache(),this.Wr=e.getBundleCache(),this.cs(r)}cs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new zb(this.us,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.us.setIndexManager(this.indexManager),this.rs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ss))}}function t4(t,e,n,r){return new e4(t,e,n,r)}async function hT(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.cs(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ie();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){l.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({ls:c,removedBatchIds:o,addedBatchIds:l}))})})}function n4(t,e){const n=Z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.us.newChangeBuffer({trackRemovals:!0});return function(l,u,c,d){const p=c.batch,m=p.keys();let w=j.resolve();return m.forEach(S=>{w=w.next(()=>d.getEntry(u,S)).next(k=>{const C=c.docVersions.get(S);fe(C!==null),k.version.compareTo(C)<0&&(p.applyToRemoteDocument(k,c),k.isValidDocument()&&(k.setReadTime(c.commitVersion),d.addEntry(k)))})}),w.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ie();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function dT(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.$r.getLastRemoteSnapshotVersion(n))}function r4(t,e){const n=Z(t),r=e.snapshotVersion;let i=n.ss;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.us.newChangeBuffer({trackRemovals:!0});i=n.ss;const l=[];e.targetChanges.forEach((d,p)=>{const m=i.get(p);if(!m)return;l.push(n.$r.removeMatchingKeys(s,d.removedDocuments,p).next(()=>n.$r.addMatchingKeys(s,d.addedDocuments,p)));let w=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?w=w.withResumeToken(Ze.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):d.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(d.resumeToken,r)),i=i.insert(p,w),function(k,C,E){return k.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(m,w,d)&&l.push(n.$r.updateTargetData(s,w))});let u=Kn(),c=ie();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),l.push(i4(s,o,e.documentUpdates).next(d=>{u=d.hs,c=d.Ps})),!r.isEqual(J.min())){const d=n.$r.getLastRemoteSnapshotVersion(s).next(p=>n.$r.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(d)}return j.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.ss=i,s))}function i4(t,e,n){let r=ie(),i=ie();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Kn();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(J.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):q("LocalStore","Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{hs:o,Ps:i}})}function s4(t,e){const n=Z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function o4(t,e){const n=Z(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.$r.getTargetData(r,e).next(s=>s?(i=s,j.resolve(i)):n.$r.allocateTargetId(r).next(o=>(i=new gr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.$r.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ss.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ss=n.ss.insert(r.targetId,r),n.os.set(e,r.targetId)),r})}async function yf(t,e,n){const r=Z(t),i=r.ss.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Na(o))throw o;q("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ss=r.ss.remove(e),r.os.delete(i.target)}function nv(t,e,n){const r=Z(t);let i=J.min(),s=ie();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const p=Z(u),m=p.os.get(d);return m!==void 0?j.resolve(p.ss.get(m)):p.$r.getTargetData(c,d)}(r,o,En(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.$r.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.rs.getDocumentsMatchingQuery(o,e,n?i:J.min(),n?s:ie())).next(l=>(a4(r,XN(e),l),{documents:l,Is:s})))}function a4(t,e,n){let r=t._s.get(e)||J.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t._s.set(e,r)}class rv{constructor(){this.activeTargetIds=rb()}Vs(e){this.activeTargetIds=this.activeTargetIds.add(e)}fs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Rs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class l4{constructor(){this.io=new rv,this.so={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.io.Vs(e),this.so[e]||"not-current"}updateQueryState(e,n,r){this.so[e]=n}removeLocalQueryTarget(e){this.io.fs(e)}isLocalQueryTarget(e){return this.io.activeTargetIds.has(e)}clearQueryState(e){delete this.so[e]}getAllActiveQueryTargets(){return this.io.activeTargetIds}isActiveQueryTarget(e){return this.io.activeTargetIds.has(e)}start(){return this.io=new rv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class u4{oo(e){}shutdown(){}}/**
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
 */class iv{constructor(){this._o=()=>this.ao(),this.uo=()=>this.co(),this.lo=[],this.ho()}oo(e){this.lo.push(e)}shutdown(){window.removeEventListener("online",this._o),window.removeEventListener("offline",this.uo)}ho(){window.addEventListener("online",this._o),window.addEventListener("offline",this.uo)}ao(){q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.lo)e(0)}co(){q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.lo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let El=null;function Uh(){return El===null?El=function(){return 268435456+Math.round(2147483648*Math.random())}():El++,"0x"+El.toString(16)}/**
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
 */const c4={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class h4{constructor(e){this.Po=e.Po,this.Io=e.Io}To(e){this.Eo=e}Ao(e){this.Ro=e}Vo(e){this.mo=e}onMessage(e){this.fo=e}close(){this.Io()}send(e){this.Po(e)}po(){this.Eo()}yo(){this.Ro()}wo(e){this.mo(e)}So(e){this.fo(e)}}/**
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
 */const at="WebChannelConnection";class d4 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.bo=r+"://"+n.host,this.Do=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get vo(){return!1}Fo(n,r,i,s,o){const l=Uh(),u=this.Mo(n,r.toUriEncodedString());q("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const c={"google-cloud-resource-prefix":this.Do,"x-goog-request-params":this.Co};return this.xo(c,s,o),this.Oo(n,u,c,i).then(d=>(q("RestConnection",`Received RPC '${n}' ${l}: `,d),d),d=>{throw Is("RestConnection",`RPC '${n}' ${l} failed with error: `,d,"url: ",u,"request:",i),d})}No(n,r,i,s,o,l){return this.Fo(n,r,i,s,o)}xo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Us}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}Mo(n,r){const i=c4[n];return`${this.bo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Oo(e,n,r,i){const s=Uh();return new Promise((o,l)=>{const u=new IE;u.setWithCredentials(!0),u.listenOnce(RE.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Hl.NO_ERROR:const d=u.getResponseJson();q(at,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case Hl.TIMEOUT:q(at,`RPC '${e}' ${s} timed out`),l(new W(U.DEADLINE_EXCEEDED,"Request time out"));break;case Hl.HTTP_ERROR:const p=u.getStatus();if(q(at,`RPC '${e}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const w=m==null?void 0:m.error;if(w&&w.status&&w.message){const S=function(C){const E=C.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf(E)>=0?E:U.UNKNOWN}(w.status);l(new W(S,w.message))}else l(new W(U.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new W(U.UNAVAILABLE,"Connection failed."));break;default:X()}}finally{q(at,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);q(at,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Lo(e,n,r){const i=Uh(),s=[this.bo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=PE(),l=kE(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.xmlHttpFactory=new SE({})),this.xo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");q(at,`Creating RPC '${e}' stream ${i}: ${d}`,u);const p=o.createWebChannel(d,u);let m=!1,w=!1;const S=new h4({Po:C=>{w?q(at,`Not sending because RPC '${e}' stream ${i} is closed:`,C):(m||(q(at,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),q(at,`RPC '${e}' stream ${i} sending:`,C),p.send(C))},Io:()=>p.close()}),k=(C,E,_)=>{C.listen(E,T=>{try{_(T)}catch(N){setTimeout(()=>{throw N},0)}})};return k(p,Eo.EventType.OPEN,()=>{w||(q(at,`RPC '${e}' stream ${i} transport opened.`),S.po())}),k(p,Eo.EventType.CLOSE,()=>{w||(w=!0,q(at,`RPC '${e}' stream ${i} transport closed`),S.wo())}),k(p,Eo.EventType.ERROR,C=>{w||(w=!0,Is(at,`RPC '${e}' stream ${i} transport errored:`,C),S.wo(new W(U.UNAVAILABLE,"The operation could not be completed")))}),k(p,Eo.EventType.MESSAGE,C=>{var E;if(!w){const _=C.data[0];fe(!!_);const T=_,N=T.error||((E=T[0])===null||E===void 0?void 0:E.error);if(N){q(at,`RPC '${e}' stream ${i} received error:`,N);const M=N.status;let V=function(I){const R=De[I];if(R!==void 0)return tT(R)}(M),v=N.message;V===void 0&&(V=U.INTERNAL,v="Unknown error status: "+M+" with message "+N.message),w=!0,S.wo(new W(V,v)),p.close()}else q(at,`RPC '${e}' stream ${i} received:`,_),S.So(_)}}),k(l,AE.STAT_EVENT,C=>{C.stat===of.PROXY?q(at,`RPC '${e}' stream ${i} detected buffering proxy`):C.stat===of.NOPROXY&&q(at,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{S.yo()},0),S}}function Fh(){return typeof document<"u"?document:null}/**
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
 */function Sc(t){return new Tb(t,!0)}/**
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
 */class fT{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ai=e,this.timerId=n,this.Bo=r,this.ko=i,this.qo=s,this.Qo=0,this.Ko=null,this.$o=Date.now(),this.reset()}reset(){this.Qo=0}Uo(){this.Qo=this.qo}Wo(e){this.cancel();const n=Math.floor(this.Qo+this.Go()),r=Math.max(0,Date.now()-this.$o),i=Math.max(0,n-r);i>0&&q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Qo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Ko=this.ai.enqueueAfterDelay(this.timerId,i,()=>(this.$o=Date.now(),e())),this.Qo*=this.ko,this.Qo<this.Bo&&(this.Qo=this.Bo),this.Qo>this.qo&&(this.Qo=this.qo)}zo(){this.Ko!==null&&(this.Ko.skipDelay(),this.Ko=null)}cancel(){this.Ko!==null&&(this.Ko.cancel(),this.Ko=null)}Go(){return(Math.random()-.5)*this.Qo}}/**
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
 */class pT{constructor(e,n,r,i,s,o,l,u){this.ai=e,this.jo=r,this.Ho=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Jo=0,this.Yo=null,this.Zo=null,this.stream=null,this.Xo=0,this.e_=new fT(e,n)}t_(){return this.state===1||this.state===5||this.n_()}n_(){return this.state===2||this.state===3}start(){this.Xo=0,this.state!==4?this.auth():this.r_()}async stop(){this.t_()&&await this.close(0)}i_(){this.state=0,this.e_.reset()}s_(){this.n_()&&this.Yo===null&&(this.Yo=this.ai.enqueueAfterDelay(this.jo,6e4,()=>this.o_()))}__(e){this.a_(),this.stream.send(e)}async o_(){if(this.n_())return this.close(0)}a_(){this.Yo&&(this.Yo.cancel(),this.Yo=null)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}async close(e,n){this.a_(),this.u_(),this.e_.cancel(),this.Jo++,e!==4?this.e_.reset():n&&n.code===U.RESOURCE_EXHAUSTED?(qn(n.toString()),qn("Using maximum backoff delay to prevent overloading the backend."),this.e_.Uo()):n&&n.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.c_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Vo(n)}c_(){}auth(){this.state=1;const e=this.l_(this.Jo),n=this.Jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Jo===n&&this.h_(r,i)},r=>{e(()=>{const i=new W(U.UNKNOWN,"Fetching auth token failed: "+r.message);return this.P_(i)})})}h_(e,n){const r=this.l_(this.Jo);this.stream=this.I_(e,n),this.stream.To(()=>{r(()=>this.listener.To())}),this.stream.Ao(()=>{r(()=>(this.state=2,this.Zo=this.ai.enqueueAfterDelay(this.Ho,1e4,()=>(this.n_()&&(this.state=3),Promise.resolve())),this.listener.Ao()))}),this.stream.Vo(i=>{r(()=>this.P_(i))}),this.stream.onMessage(i=>{r(()=>++this.Xo==1?this.T_(i):this.onNext(i))})}r_(){this.state=5,this.e_.Wo(async()=>{this.state=0,this.start()})}P_(e){return q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}l_(e){return n=>{this.ai.enqueueAndForget(()=>this.Jo===e?n():(q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class f4 extends pT{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}I_(e,n){return this.connection.Lo("Listen",e,n)}T_(e){return this.onNext(e)}onNext(e){this.e_.reset();const n=Rb(this.serializer,e),r=function(s){if(!("targetChange"in s))return J.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?In(o.readTime):J.min()}(e);return this.listener.E_(n,r)}d_(e){const n={};n.database=gf(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=cf(u)?{documents:Pb(s,u)}:{query:Cb(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=iT(s,o.resumeToken);const c=ff(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(J.min())>0){l.readTime=Uu(s,o.snapshotVersion.toTimestamp());const c=ff(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=Nb(this.serializer,e);r&&(n.labels=r),this.__(n)}A_(e){const n={};n.database=gf(this.serializer),n.removeTarget=e,this.__(n)}}class p4 extends pT{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get R_(){return this.Xo>0}start(){this.lastStreamToken=void 0,super.start()}c_(){this.R_&&this.V_([])}I_(e,n){return this.connection.Lo("Write",e,n)}T_(e){return fe(!!e.streamToken),this.lastStreamToken=e.streamToken,fe(!e.writeResults||e.writeResults.length===0),this.listener.m_()}onNext(e){fe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.e_.reset();const n=kb(e.writeResults,e.commitTime),r=In(e.commitTime);return this.listener.f_(r,n)}g_(){const e={};e.database=gf(this.serializer),this.__(e)}V_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Ab(this.serializer,r))};this.__(n)}}/**
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
 */class m4 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.p_=!1}y_(){if(this.p_)throw new W(U.FAILED_PRECONDITION,"The client has already been terminated.")}Fo(e,n,r,i){return this.y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Fo(e,pf(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new W(U.UNKNOWN,s.toString())})}No(e,n,r,i,s){return this.y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.No(e,pf(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new W(U.UNKNOWN,o.toString())})}terminate(){this.p_=!0,this.connection.terminate()}}class g4{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.w_=0,this.S_=null,this.b_=!0}D_(){this.w_===0&&(this.C_("Unknown"),this.S_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.S_=null,this.v_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}F_(e){this.state==="Online"?this.C_("Unknown"):(this.w_++,this.w_>=1&&(this.M_(),this.v_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.M_(),this.w_=0,e==="Online"&&(this.b_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}v_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.b_?(qn(n),this.b_=!1):q("OnlineStateTracker",n)}M_(){this.S_!==null&&(this.S_.cancel(),this.S_=null)}}/**
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
 */class y4{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.x_=[],this.O_=new Map,this.N_=new Set,this.L_=[],this.B_=s,this.B_.oo(o=>{r.enqueueAndForget(async()=>{Pi(this)&&(q("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=Z(u);c.N_.add(4),await Oa(c),c.k_.set("Unknown"),c.N_.delete(4),await Rc(c)}(this))})}),this.k_=new g4(r,i)}}async function Rc(t){if(Pi(t))for(const e of t.L_)await e(!0)}async function Oa(t){for(const e of t.L_)await e(!1)}function mT(t,e){const n=Z(t);n.O_.has(e.targetId)||(n.O_.set(e.targetId,e),sm(n)?im(n):$s(n).n_()&&rm(n,e))}function nm(t,e){const n=Z(t),r=$s(n);n.O_.delete(e),r.n_()&&gT(n,e),n.O_.size===0&&(r.n_()?r.s_():Pi(n)&&n.k_.set("Unknown"))}function rm(t,e){if(t.q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}$s(t).d_(e)}function gT(t,e){t.q_.xe(e),$s(t).A_(e)}function im(t){t.q_=new _b({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.O_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),$s(t).start(),t.k_.D_()}function sm(t){return Pi(t)&&!$s(t).t_()&&t.O_.size>0}function Pi(t){return Z(t).N_.size===0}function yT(t){t.q_=void 0}async function _4(t){t.k_.set("Online")}async function v4(t){t.O_.forEach((e,n)=>{rm(t,e)})}async function w4(t,e){yT(t),sm(t)?(t.k_.F_(e),im(t)):t.k_.set("Unknown")}async function E4(t,e,n){if(t.k_.set("Online"),e instanceof rT&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.O_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.O_.delete(l),i.q_.removeTarget(l))}(t,e)}catch(r){q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Fu(t,r)}else if(e instanceof Gl?t.q_.Ke(e):e instanceof nT?t.q_.He(e):t.q_.We(e),!n.isEqual(J.min()))try{const r=await dT(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.q_.rt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.O_.get(c);d&&s.O_.set(c,d.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const d=s.O_.get(u);if(!d)return;s.O_.set(u,d.withResumeToken(Ze.EMPTY_BYTE_STRING,d.snapshotVersion)),gT(s,u);const p=new gr(d.target,u,c,d.sequenceNumber);rm(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){q("RemoteStore","Failed to raise snapshot:",r),await Fu(t,r)}}async function Fu(t,e,n){if(!Na(e))throw e;t.N_.add(1),await Oa(t),t.k_.set("Offline"),n||(n=()=>dT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{q("RemoteStore","Retrying IndexedDB access"),await n(),t.N_.delete(1),await Rc(t)})}function _T(t,e){return e().catch(n=>Fu(t,n,e))}async function Ac(t){const e=Z(t),n=Vr(e);let r=e.x_.length>0?e.x_[e.x_.length-1].batchId:-1;for(;T4(e);)try{const i=await s4(e.localStore,r);if(i===null){e.x_.length===0&&n.s_();break}r=i.batchId,I4(e,i)}catch(i){await Fu(e,i)}vT(e)&&wT(e)}function T4(t){return Pi(t)&&t.x_.length<10}function I4(t,e){t.x_.push(e);const n=Vr(t);n.n_()&&n.R_&&n.V_(e.mutations)}function vT(t){return Pi(t)&&!Vr(t).t_()&&t.x_.length>0}function wT(t){Vr(t).start()}async function S4(t){Vr(t).g_()}async function R4(t){const e=Vr(t);for(const n of t.x_)e.V_(n.mutations)}async function A4(t,e,n){const r=t.x_.shift(),i=Yp.from(r,e,n);await _T(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Ac(t)}async function k4(t,e){e&&Vr(t).R_&&await async function(r,i){if(function(o){return mb(o)&&o!==U.ABORTED}(i.code)){const s=r.x_.shift();Vr(r).i_(),await _T(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Ac(r)}}(t,e),vT(t)&&wT(t)}async function sv(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),q("RemoteStore","RemoteStore received new credentials");const r=Pi(n);n.N_.add(3),await Oa(n),r&&n.k_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.N_.delete(3),await Rc(n)}async function P4(t,e){const n=Z(t);e?(n.N_.delete(2),await Rc(n)):e||(n.N_.add(2),await Oa(n),n.k_.set("Unknown"))}function $s(t){return t.Q_||(t.Q_=function(n,r,i){const s=Z(n);return s.y_(),new f4(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{To:_4.bind(null,t),Ao:v4.bind(null,t),Vo:w4.bind(null,t),E_:E4.bind(null,t)}),t.L_.push(async e=>{e?(t.Q_.i_(),sm(t)?im(t):t.k_.set("Unknown")):(await t.Q_.stop(),yT(t))})),t.Q_}function Vr(t){return t.K_||(t.K_=function(n,r,i){const s=Z(n);return s.y_(),new p4(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{To:()=>Promise.resolve(),Ao:S4.bind(null,t),Vo:k4.bind(null,t),m_:R4.bind(null,t),f_:A4.bind(null,t)}),t.L_.push(async e=>{e?(t.K_.i_(),await Ac(t)):(await t.K_.stop(),t.x_.length>0&&(q("RemoteStore",`Stopping write stream with ${t.x_.length} pending writes`),t.x_=[]))})),t.K_}/**
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
 */class om{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Cr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new om(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(U.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function am(t,e){if(qn("AsyncQueue",`${e}: ${t}`),Na(t))return new W(U.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class us{constructor(e){this.comparator=e?(n,r)=>e(n,r)||Q.comparator(n.key,r.key):(n,r)=>Q.comparator(n.key,r.key),this.keyedMap=To(),this.sortedSet=new Re(this.comparator)}static emptySet(e){return new us(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof us)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new us;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class ov{constructor(){this.U_=new Re(Q.comparator)}track(e){const n=e.doc.key,r=this.U_.get(n);r?e.type!==0&&r.type===3?this.U_=this.U_.insert(n,e):e.type===3&&r.type!==1?this.U_=this.U_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.U_=this.U_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.U_=this.U_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.U_=this.U_.remove(n):e.type===1&&r.type===2?this.U_=this.U_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.U_=this.U_.insert(n,{type:2,doc:e.doc}):X():this.U_=this.U_.insert(n,e)}W_(){const e=[];return this.U_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ps{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Ps(e,n,us.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&vc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class C4{constructor(){this.G_=void 0,this.z_=[]}j_(){return this.z_.some(e=>e.H_())}}class x4{constructor(){this.queries=av(),this.onlineState="Unknown",this.J_=new Set}terminate(){(function(n,r){const i=Z(n),s=i.queries;i.queries=av(),s.forEach((o,l)=>{for(const u of l.z_)u.onError(r)})})(this,new W(U.ABORTED,"Firestore shutting down"))}}function av(){return new js(t=>$E(t),vc)}async function ET(t,e){const n=Z(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.j_()&&e.H_()&&(r=2):(s=new C4,r=e.H_()?0:1);try{switch(r){case 0:s.G_=await n.onListen(i,!0);break;case 1:s.G_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=am(o,`Initialization of query '${Vi(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.z_.push(e),e.Y_(n.onlineState),s.G_&&e.Z_(s.G_)&&lm(n)}async function TT(t,e){const n=Z(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.z_.indexOf(e);o>=0&&(s.z_.splice(o,1),s.z_.length===0?i=e.H_()?0:1:!s.j_()&&e.H_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function N4(t,e){const n=Z(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.z_)l.Z_(i)&&(r=!0);o.G_=i}}r&&lm(n)}function b4(t,e,n){const r=Z(t),i=r.queries.get(e);if(i)for(const s of i.z_)s.onError(n);r.queries.delete(e)}function lm(t){t.J_.forEach(e=>{e.next()})}var _f,lv;(lv=_f||(_f={})).X_="default",lv.Cache="cache";class IT{constructor(e,n,r){this.query=e,this.ea=n,this.ta=!1,this.na=null,this.onlineState="Unknown",this.options=r||{}}Z_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ps(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ta?this.ra(e)&&(this.ea.next(e),n=!0):this.ia(e,this.onlineState)&&(this.sa(e),n=!0),this.na=e,n}onError(e){this.ea.error(e)}Y_(e){this.onlineState=e;let n=!1;return this.na&&!this.ta&&this.ia(this.na,e)&&(this.sa(this.na),n=!0),n}ia(e,n){if(!e.fromCache||!this.H_())return!0;const r=n!=="Offline";return(!this.options.oa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ra(e){if(e.docChanges.length>0)return!0;const n=this.na&&this.na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}sa(e){e=Ps.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ta=!0,this.ea.next(e)}H_(){return this.options.source!==_f.Cache}}/**
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
 */class ST{constructor(e){this.key=e}}class RT{constructor(e){this.key=e}}class D4{constructor(e,n){this.query=e,this.Ia=n,this.Ta=null,this.hasCachedResults=!1,this.current=!1,this.Ea=ie(),this.mutatedKeys=ie(),this.da=zE(e),this.Aa=new us(this.da)}get Ra(){return this.Ia}Va(e,n){const r=n?n.ma:new ov,i=n?n.Aa:this.Aa;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,p)=>{const m=i.get(d),w=wc(this.query,p)?p:null,S=!!m&&this.mutatedKeys.has(m.key),k=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let C=!1;m&&w?m.data.isEqual(w.data)?S!==k&&(r.track({type:3,doc:w}),C=!0):this.fa(m,w)||(r.track({type:2,doc:w}),C=!0,(u&&this.da(w,u)>0||c&&this.da(w,c)<0)&&(l=!0)):!m&&w?(r.track({type:0,doc:w}),C=!0):m&&!w&&(r.track({type:1,doc:m}),C=!0,(u||c)&&(l=!0)),C&&(w?(o=o.add(w),s=k?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{Aa:o,ma:r,ts:l,mutatedKeys:s}}fa(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Aa;this.Aa=e.Aa,this.mutatedKeys=e.mutatedKeys;const o=e.ma.W_();o.sort((d,p)=>function(w,S){const k=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X()}};return k(w)-k(S)}(d.type,p.type)||this.da(d.doc,p.doc)),this.ga(r),i=i!=null&&i;const l=n&&!i?this.pa():[],u=this.Ea.size===0&&this.current&&!i?1:0,c=u!==this.Ta;return this.Ta=u,o.length!==0||c?{snapshot:new Ps(this.query,e.Aa,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),ya:l}:{ya:l}}Y_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Aa:this.Aa,ma:new ov,mutatedKeys:this.mutatedKeys,ts:!1},!1)):{ya:[]}}wa(e){return!this.Ia.has(e)&&!!this.Aa.has(e)&&!this.Aa.get(e).hasLocalMutations}ga(e){e&&(e.addedDocuments.forEach(n=>this.Ia=this.Ia.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ia=this.Ia.delete(n)),this.current=e.current)}pa(){if(!this.current)return[];const e=this.Ea;this.Ea=ie(),this.Aa.forEach(r=>{this.wa(r.key)&&(this.Ea=this.Ea.add(r.key))});const n=[];return e.forEach(r=>{this.Ea.has(r)||n.push(new RT(r))}),this.Ea.forEach(r=>{e.has(r)||n.push(new ST(r))}),n}Sa(e){this.Ia=e.Is,this.Ea=ie();const n=this.Va(e.documents);return this.applyChanges(n,!0)}ba(){return Ps.fromInitialDocuments(this.query,this.Aa,this.mutatedKeys,this.Ta===0,this.hasCachedResults)}}class O4{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class L4{constructor(e){this.key=e,this.Da=!1}}class V4{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.va=new js(l=>$E(l),vc),this.Fa=new Map,this.Ma=new Set,this.xa=new Re(Q.comparator),this.Oa=new Map,this.Na=new Zp,this.La={},this.Ba=new Map,this.ka=ks.Bn(),this.onlineState="Unknown",this.qa=void 0}get isPrimaryClient(){return this.qa===!0}}async function M4(t,e,n=!0){const r=NT(t);let i;const s=r.va.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ba()):i=await AT(r,e,n,!0),i}async function U4(t,e){const n=NT(t);await AT(n,e,!0,!1)}async function AT(t,e,n,r){const i=await o4(t.localStore,En(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let l;return r&&(l=await F4(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&mT(t.remoteStore,i),l}async function F4(t,e,n,r,i){t.Qa=(p,m,w)=>async function(k,C,E,_){let T=C.view.Va(E);T.ts&&(T=await nv(k.localStore,C.query,!1).then(({documents:v})=>C.view.Va(v,T)));const N=_&&_.targetChanges.get(C.targetId),M=_&&_.targetMismatches.get(C.targetId)!=null,V=C.view.applyChanges(T,k.isPrimaryClient,N,M);return cv(k,C.targetId,V.ya),V.snapshot}(t,p,m,w);const s=await nv(t.localStore,e,!0),o=new D4(e,s.Is),l=o.Va(s.documents),u=Da.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);cv(t,n,c.ya);const d=new O4(e,n,o);return t.va.set(e,d),t.Fa.has(n)?t.Fa.get(n).push(e):t.Fa.set(n,[e]),c.snapshot}async function j4(t,e,n){const r=Z(t),i=r.va.get(e),s=r.Fa.get(i.targetId);if(s.length>1)return r.Fa.set(i.targetId,s.filter(o=>!vc(o,e))),void r.va.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await yf(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&nm(r.remoteStore,i.targetId),vf(r,i.targetId)}).catch(xa)):(vf(r,i.targetId),await yf(r.localStore,i.targetId,!0))}async function $4(t,e){const n=Z(t),r=n.va.get(e),i=n.Fa.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),nm(n.remoteStore,r.targetId))}async function z4(t,e,n){const r=Q4(t);try{const i=await function(o,l){const u=Z(o),c=je.now(),d=l.reduce((w,S)=>w.add(S.key),ie());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",w=>{let S=Kn(),k=ie();return u.us.getEntries(w,d).next(C=>{S=C,S.forEach((E,_)=>{_.isValidDocument()||(k=k.add(E))})}).next(()=>u.localDocuments.getOverlayedDocuments(w,S)).next(C=>{p=C;const E=[];for(const _ of l){const T=cb(_,p.get(_.key).overlayedDocument);T!=null&&E.push(new zr(_.key,T,DE(T.value.mapValue),Tn.exists(!0)))}return u.mutationQueue.addMutationBatch(w,c,E,l)}).next(C=>{m=C;const E=C.applyToLocalDocumentSet(p,k);return u.documentOverlayCache.saveOverlays(w,C.batchId,E)})}).then(()=>({batchId:m.batchId,changes:WE(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.La[o.currentUser.toKey()];c||(c=new Re(ue)),c=c.insert(l,u),o.La[o.currentUser.toKey()]=c}(r,i.batchId,n),await La(r,i.changes),await Ac(r.remoteStore)}catch(i){const s=am(i,"Failed to persist write");n.reject(s)}}async function kT(t,e){const n=Z(t);try{const r=await r4(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Oa.get(s);o&&(fe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Da=!0:i.modifiedDocuments.size>0?fe(o.Da):i.removedDocuments.size>0&&(fe(o.Da),o.Da=!1))}),await La(n,r,e)}catch(r){await xa(r)}}function uv(t,e,n){const r=Z(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.va.forEach((s,o)=>{const l=o.view.Y_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=Z(o);u.onlineState=l;let c=!1;u.queries.forEach((d,p)=>{for(const m of p.z_)m.Y_(l)&&(c=!0)}),c&&lm(u)}(r.eventManager,e),i.length&&r.Ca.E_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function B4(t,e,n){const r=Z(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Oa.get(e),s=i&&i.key;if(s){let o=new Re(Q.comparator);o=o.insert(s,ct.newNoDocument(s,J.min()));const l=ie().add(s),u=new Ic(J.min(),new Map,new Re(ue),o,l);await kT(r,u),r.xa=r.xa.remove(s),r.Oa.delete(e),um(r)}else await yf(r.localStore,e,!1).then(()=>vf(r,e,n)).catch(xa)}async function W4(t,e){const n=Z(t),r=e.batch.batchId;try{const i=await n4(n.localStore,e);CT(n,r,null),PT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await La(n,i)}catch(i){await xa(i)}}async function H4(t,e,n){const r=Z(t);try{const i=await function(o,l){const u=Z(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(fe(p!==null),d=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);CT(r,e,n),PT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await La(r,i)}catch(i){await xa(i)}}function PT(t,e){(t.Ba.get(e)||[]).forEach(n=>{n.resolve()}),t.Ba.delete(e)}function CT(t,e,n){const r=Z(t);let i=r.La[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.La[r.currentUser.toKey()]=i}}function vf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Fa.get(e))t.va.delete(r),n&&t.Ca.Ka(r,n);t.Fa.delete(e),t.isPrimaryClient&&t.Na.mr(e).forEach(r=>{t.Na.containsKey(r)||xT(t,r)})}function xT(t,e){t.Ma.delete(e.path.canonicalString());const n=t.xa.get(e);n!==null&&(nm(t.remoteStore,n),t.xa=t.xa.remove(e),t.Oa.delete(n),um(t))}function cv(t,e,n){for(const r of n)r instanceof ST?(t.Na.addReference(r.key,e),q4(t,r)):r instanceof RT?(q("SyncEngine","Document no longer in limbo: "+r.key),t.Na.removeReference(r.key,e),t.Na.containsKey(r.key)||xT(t,r.key)):X()}function q4(t,e){const n=e.key,r=n.path.canonicalString();t.xa.get(n)||t.Ma.has(r)||(q("SyncEngine","New document in limbo: "+n),t.Ma.add(r),um(t))}function um(t){for(;t.Ma.size>0&&t.xa.size<t.maxConcurrentLimboResolutions;){const e=t.Ma.values().next().value;t.Ma.delete(e);const n=new Q(_e.fromString(e)),r=t.ka.next();t.Oa.set(r,new L4(n)),t.xa=t.xa.insert(n,r),mT(t.remoteStore,new gr(En(_c(n.path)),r,"TargetPurposeLimboResolution",Wp.oe))}}async function La(t,e,n){const r=Z(t),i=[],s=[],o=[];r.va.isEmpty()||(r.va.forEach((l,u)=>{o.push(r.Qa(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){i.push(c);const p=tm.Ui(u.targetId,c);s.push(p)}}))}),await Promise.all(o),r.Ca.E_(i),await async function(u,c){const d=Z(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>j.forEach(c,m=>j.forEach(m.Ki,w=>d.persistence.referenceDelegate.addReference(p,m.targetId,w)).next(()=>j.forEach(m.$i,w=>d.persistence.referenceDelegate.removeReference(p,m.targetId,w)))))}catch(p){if(!Na(p))throw p;q("LocalStore","Failed to update sequence numbers: "+p)}for(const p of c){const m=p.targetId;if(!p.fromCache){const w=d.ss.get(m),S=w.snapshotVersion,k=w.withLastLimboFreeSnapshotVersion(S);d.ss=d.ss.insert(m,k)}}}(r.localStore,s))}async function K4(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){q("SyncEngine","User change. New user:",e.toKey());const r=await hT(n.localStore,e);n.currentUser=e,function(s,o){s.Ba.forEach(l=>{l.forEach(u=>{u.reject(new W(U.CANCELLED,o))})}),s.Ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await La(n,r.ls)}}function G4(t,e){const n=Z(t),r=n.Oa.get(e);if(r&&r.Da)return ie().add(r.key);{let i=ie();const s=n.Fa.get(e);if(!s)return i;for(const o of s){const l=n.va.get(o);i=i.unionWith(l.view.Ra)}return i}}function NT(t){const e=Z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=kT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=G4.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=B4.bind(null,e),e.Ca.E_=N4.bind(null,e.eventManager),e.Ca.Ka=b4.bind(null,e.eventManager),e}function Q4(t){const e=Z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=W4.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=H4.bind(null,e),e}class hv{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Sc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return t4(this.persistence,new Zb,e.initialUser,this.serializer)}createPersistence(e){return new Yb(em.Yr,this.serializer)}createSharedClientState(e){return new l4}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Y4{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>uv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=K4.bind(null,this.syncEngine),await P4(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new x4}()}createDatastore(e){const n=Sc(e.databaseInfo.databaseId),r=function(s){return new d4(s)}(e.databaseInfo);return function(s,o,l,u){return new m4(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new y4(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>uv(this.syncEngine,n,0),function(){return iv.D()?new iv:new u4}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,d){const p=new V4(i,s,o,l,u,c);return d&&(p.qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=Z(i);q("RemoteStore","RemoteStore shutting down."),s.N_.add(5),await Oa(s),s.B_.shutdown(),s.k_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}/**
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
 */class bT{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Wa(this.observer.next,e)}error(e){this.observer.error?this.Wa(this.observer.error,e):qn("Uncaught Error in snapshot listener:",e.toString())}Ga(){this.muted=!0}Wa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class X4{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=lt.UNAUTHENTICATED,this.clientId=xE.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{q("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(q("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new W(U.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Cr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=am(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function jh(t,e){t.asyncQueue.verifyOperationInProgress(),q("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await hT(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function dv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Z4(t);q("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>sv(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>sv(e.remoteStore,i)),t._onlineComponents=e}function J4(t){return t.name==="FirebaseError"?t.code===U.FAILED_PRECONDITION||t.code===U.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function Z4(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){q("FirestoreClient","Using user provided OfflineComponentProvider");try{await jh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!J4(n))throw n;Is("Error using user provided cache. Falling back to memory cache: "+n),await jh(t,new hv)}}else q("FirestoreClient","Using default OfflineComponentProvider"),await jh(t,new hv);return t._offlineComponents}async function DT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(q("FirestoreClient","Using user provided OnlineComponentProvider"),await dv(t,t._uninitializedComponentsProvider._online)):(q("FirestoreClient","Using default OnlineComponentProvider"),await dv(t,new Y4))),t._onlineComponents}function eD(t){return DT(t).then(e=>e.syncEngine)}async function wf(t){const e=await DT(t),n=e.eventManager;return n.onListen=M4.bind(null,e.syncEngine),n.onUnlisten=j4.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=U4.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=$4.bind(null,e.syncEngine),n}function tD(t,e,n={}){const r=new Cr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new bT({next:m=>{o.enqueueAndForget(()=>TT(s,p));const w=m.docs.has(l);!w&&m.fromCache?c.reject(new W(U.UNAVAILABLE,"Failed to get document because the client is offline.")):w&&m.fromCache&&u&&u.source==="server"?c.reject(new W(U.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new IT(_c(l.path),d,{includeMetadataChanges:!0,oa:!0});return ET(s,p)}(await wf(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function OT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const fv=new Map;/**
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
 */function LT(t,e,n){if(!n)throw new W(U.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function nD(t,e,n,r){if(e===!0&&r===!0)throw new W(U.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function pv(t){if(!Q.isDocumentKey(t))throw new W(U.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function mv(t){if(Q.isDocumentKey(t))throw new W(U.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function kc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":X()}function Sn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=kc(t);throw new W(U.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class gv{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new W(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new W(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}nD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=OT((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new W(U.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new W(U.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new W(U.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Pc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new gv({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new W(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new W(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new gv(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new wN;switch(r.type){case"firstParty":return new SN(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=fv.get(n);r&&(q("ComponentProvider","Removing Datastore"),fv.delete(n),r.terminate())}(this),Promise.resolve()}}function rD(t,e,n,r={}){var i;const s=(t=Sn(t,Pc))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Is("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=lt.MOCK_USER;else{l=V1(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new W(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new lt(c)}t._authCredentials=new EN(new CE(l,u))}}/**
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
 */class Ci{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ci(this.firestore,e,this._query)}}class dt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new xr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new dt(this.firestore,e,this._key)}}class xr extends Ci{constructor(e,n,r){super(e,n,_c(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new dt(this.firestore,null,new Q(e))}withConverter(e){return new xr(this.firestore,e,this._path)}}function yv(t,e,...n){if(t=Pe(t),LT("collection","path",e),t instanceof Pc){const r=_e.fromString(e,...n);return mv(r),new xr(t,null,r)}{if(!(t instanceof dt||t instanceof xr))throw new W(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(_e.fromString(e,...n));return mv(r),new xr(t.firestore,null,r)}}function ju(t,e,...n){if(t=Pe(t),arguments.length===1&&(e=xE.newId()),LT("doc","path",e),t instanceof Pc){const r=_e.fromString(e,...n);return pv(r),new dt(t,null,new Q(r))}{if(!(t instanceof dt||t instanceof xr))throw new W(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(_e.fromString(e,...n));return pv(r),new dt(t.firestore,t instanceof xr?t.converter:null,new Q(r))}}/**
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
 */class iD{constructor(){this._u=Promise.resolve(),this.au=[],this.uu=!1,this.cu=[],this.lu=null,this.hu=!1,this.Pu=!1,this.Iu=[],this.e_=new fT(this,"async_queue_retry"),this.Tu=()=>{const n=Fh();n&&q("AsyncQueue","Visibility state changed to "+n.visibilityState),this.e_.zo()};const e=Fh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Tu)}get isShuttingDown(){return this.uu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Eu(),this.du(e)}enterRestrictedMode(e){if(!this.uu){this.uu=!0,this.Pu=e||!1;const n=Fh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Tu)}}enqueue(e){if(this.Eu(),this.uu)return new Promise(()=>{});const n=new Cr;return this.du(()=>this.uu&&this.Pu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.au.push(e),this.Au()))}async Au(){if(this.au.length!==0){try{await this.au[0](),this.au.shift(),this.e_.reset()}catch(e){if(!Na(e))throw e;q("AsyncQueue","Operation failed with retryable error: "+e)}this.au.length>0&&this.e_.Wo(()=>this.Au())}}du(e){const n=this._u.then(()=>(this.hu=!0,e().catch(r=>{this.lu=r,this.hu=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw qn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.hu=!1,r))));return this._u=n,n}enqueueAfterDelay(e,n,r){this.Eu(),this.Iu.indexOf(e)>-1&&(n=0);const i=om.createAndSchedule(this,e,n,r,s=>this.Ru(s));return this.cu.push(i),i}Eu(){this.lu&&X()}verifyOperationInProgress(){}async Vu(){let e;do e=this._u,await e;while(e!==this._u)}mu(e){for(const n of this.cu)if(n.timerId===e)return!0;return!1}fu(e){return this.Vu().then(()=>{this.cu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.cu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Vu()})}gu(e){this.Iu.push(e)}Ru(e){const n=this.cu.indexOf(e);this.cu.splice(n,1)}}function _v(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Cs extends Pc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new iD}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||VT(this),this._firestoreClient.terminate()}}function sD(t,e){const n=typeof t=="object"?t:Op(),r=typeof t=="string"?t:"(default)",i=dc(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=D1("firestore");s&&rD(i,...s)}return i}function cm(t){return t._firestoreClient||VT(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function VT(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,c,d){return new MN(l,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,OT(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new X4(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class xs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new xs(Ze.fromBase64String(e))}catch(n){throw new W(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new xs(Ze.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Cc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ge(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class hm{constructor(e){this._methodName=e}}/**
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
 */class dm{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}}/**
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
 */const oD=/^__.*__$/;class aD{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new zr(e,this.data,this.fieldMask,n,this.fieldTransforms):new ba(e,this.data,n,this.fieldTransforms)}}class MT{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new zr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function UT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X()}}class fm{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.pu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get yu(){return this.settings.yu}wu(e){return new fm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.wu({path:r,bu:!1});return i.Du(e),i}Cu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.wu({path:r,bu:!1});return i.pu(),i}vu(e){return this.wu({path:void 0,bu:!0})}Fu(e){return $u(e,this.settings.methodName,this.settings.Mu||!1,this.path,this.settings.xu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Du(this.path.get(e))}Du(e){if(e.length===0)throw this.Fu("Document fields must not be empty");if(UT(this.yu)&&oD.test(e))throw this.Fu('Document fields cannot begin and end with "__"')}}class lD{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Sc(e)}Ou(e,n,r,i=!1){return new fm({yu:e,methodName:n,xu:r,path:Ge.emptyPath(),bu:!1,Mu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function pm(t){const e=t._freezeSettings(),n=Sc(t._databaseId);return new lD(t._databaseId,!!e.ignoreUndefinedProperties,n)}function uD(t,e,n,r,i,s={}){const o=t.Ou(s.merge||s.mergeFields?2:0,e,n,i);mm("Data must be an object, but it was:",o,r);const l=FT(r,o);let u,c;if(s.merge)u=new Lt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const p of s.mergeFields){const m=Ef(e,p,n);if(!o.contains(m))throw new W(U.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);$T(d,m)||d.push(m)}u=new Lt(d),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new aD(new Rt(l),u,c)}class xc extends hm{_toFieldTransform(e){if(e.yu!==2)throw e.yu===1?e.Fu(`${this._methodName}() can only appear at the top level of your update data`):e.Fu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof xc}}function cD(t,e,n,r){const i=t.Ou(1,e,n);mm("Data must be an object, but it was:",i,r);const s=[],o=Rt.empty();ki(r,(u,c)=>{const d=gm(e,u,n);c=Pe(c);const p=i.Cu(d);if(c instanceof xc)s.push(d);else{const m=Va(c,p);m!=null&&(s.push(d),o.set(d,m))}});const l=new Lt(s);return new MT(o,l,i.fieldTransforms)}function hD(t,e,n,r,i,s){const o=t.Ou(1,e,n),l=[Ef(e,r,n)],u=[i];if(s.length%2!=0)throw new W(U.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)l.push(Ef(e,s[m])),u.push(s[m+1]);const c=[],d=Rt.empty();for(let m=l.length-1;m>=0;--m)if(!$T(c,l[m])){const w=l[m];let S=u[m];S=Pe(S);const k=o.Cu(w);if(S instanceof xc)c.push(w);else{const C=Va(S,k);C!=null&&(c.push(w),d.set(w,C))}}const p=new Lt(c);return new MT(d,p,o.fieldTransforms)}function dD(t,e,n,r=!1){return Va(n,t.Ou(r?4:3,e))}function Va(t,e){if(jT(t=Pe(t)))return mm("Unsupported field value:",e,t),FT(t,e);if(t instanceof hm)return function(r,i){if(!UT(i.yu))throw i.Fu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Fu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.bu&&e.yu!==4)throw e.Fu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=Va(l,i.vu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Pe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return ib(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=je.fromDate(r);return{timestampValue:Uu(i.serializer,s)}}if(r instanceof je){const s=new je(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Uu(i.serializer,s)}}if(r instanceof dm)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof xs)return{bytesValue:iT(i.serializer,r._byteString)};if(r instanceof dt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Fu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Jp(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Fu(`Unsupported field value: ${kc(r)}`)}(t,e)}function FT(t,e){const n={};return NE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ki(t,(r,i)=>{const s=Va(i,e.Su(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function jT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof je||t instanceof dm||t instanceof xs||t instanceof dt||t instanceof hm)}function mm(t,e,n){if(!jT(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=kc(n);throw r==="an object"?e.Fu(t+" a custom object"):e.Fu(t+" "+r)}}function Ef(t,e,n){if((e=Pe(e))instanceof Cc)return e._internalPath;if(typeof e=="string")return gm(t,e);throw $u("Field path arguments must be of type string or ",t,!1,void 0,n)}const fD=new RegExp("[~\\*/\\[\\]]");function gm(t,e,n){if(e.search(fD)>=0)throw $u(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Cc(...e.split("."))._internalPath}catch{throw $u(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function $u(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new W(U.INVALID_ARGUMENT,l+t+u)}function $T(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class zT{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new dt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new pD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ym("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class pD extends zT{data(){return super.data()}}function ym(t,e){return typeof e=="string"?gm(t,e):e instanceof Cc?e._internalPath:e._delegate._internalPath}/**
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
 */function mD(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(U.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class _m{}class BT extends _m{}function vv(t,e,...n){let r=[];e instanceof _m&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof wm).length,l=s.filter(u=>u instanceof vm).length;if(o>1||o>0&&l>0)throw new W(U.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class vm extends BT{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new vm(e,n,r)}_apply(e){const n=this._parse(e);return WT(e._query,n),new Ci(e.firestore,e.converter,hf(e._query,n))}_parse(e){const n=pm(e.firestore);return function(s,o,l,u,c,d,p){let m;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new W(U.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Ev(p,d);const w=[];for(const S of p)w.push(wv(u,s,S));m={arrayValue:{values:w}}}else m=wv(u,s,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Ev(p,d),m=dD(l,o,p,d==="in"||d==="not-in");return Me.create(c,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class wm extends _m{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new wm(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:un.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)WT(o,u),o=hf(o,u)}(e._query,n),new Ci(e.firestore,e.converter,hf(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Em extends BT{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Em(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new W(U.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new W(U.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new pa(s,o)}(e._query,this._field,this._direction);return new Ci(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Fs(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function gD(t,e="asc"){const n=e,r=ym("orderBy",t);return Em._create(r,n)}function wv(t,e,n){if(typeof(n=Pe(n))=="string"){if(n==="")throw new W(U.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!jE(e)&&n.indexOf("/")!==-1)throw new W(U.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(_e.fromString(n));if(!Q.isDocumentKey(r))throw new W(U.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return F_(t,new Q(r))}if(n instanceof dt)return F_(t,n._key);throw new W(U.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${kc(n)}.`)}function Ev(t,e){if(!Array.isArray(t)||t.length===0)throw new W(U.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function WT(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new W(U.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new W(U.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class yD{convertValue(e,n="none"){switch(vi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Oe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(_i(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw X()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ki(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new dm(Oe(e.latitude),Oe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=qp(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ha(e));default:return null}}convertTimestamp(e){const n=Lr(e);return new je(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=_e.fromString(e);fe(cT(r));const i=new da(r.get(1),r.get(3)),s=new Q(r.popFirst(5));return i.isEqual(n)||qn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function _D(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class So{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class HT extends zT{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ql(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ym("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ql extends HT{data(e={}){return super.data(e)}}class vD{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new So(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ql(this._firestore,this._userDataWriter,r.key,r,new So(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(U.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new Ql(i._firestore,i._userDataWriter,l.doc.key,l.doc,new So(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Ql(i._firestore,i._userDataWriter,l.doc.key,l.doc,new So(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:wD(l.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function wD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return X()}}/**
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
 */function Tf(t){t=Sn(t,dt);const e=Sn(t.firestore,Cs);return tD(cm(e),t._key).then(n=>GT(e,t,n))}class qT extends yD{constructor(e){super(),this.firestore=e}convertBytes(e){return new xs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new dt(this.firestore,null,n)}}function ED(t,e,n){t=Sn(t,dt);const r=Sn(t.firestore,Cs),i=_D(t.converter,e);return KT(r,[uD(pm(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Tn.none())])}function $h(t,e,n,...r){t=Sn(t,dt);const i=Sn(t.firestore,Cs),s=pm(i);let o;return o=typeof(e=Pe(e))=="string"||e instanceof Cc?hD(s,"updateDoc",t._key,e,n,r):cD(s,"updateDoc",t._key,e),KT(i,[o.toMutation(t._key,Tn.exists(!0))])}function Tv(t,...e){var n,r,i;t=Pe(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||_v(e[o])||(s=e[o],o++);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(_v(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(i=p.complete)===null||i===void 0?void 0:i.bind(p)}let u,c,d;if(t instanceof dt)c=Sn(t.firestore,Cs),d=_c(t._key.path),u={next:p=>{e[o]&&e[o](GT(c,t,p))},error:e[o+1],complete:e[o+2]};else{const p=Sn(t,Ci);c=Sn(p.firestore,Cs),d=p._query;const m=new qT(c);u={next:w=>{e[o]&&e[o](new vD(c,m,p,w))},error:e[o+1],complete:e[o+2]},mD(t._query)}return function(m,w,S,k){const C=new bT(k),E=new IT(w,C,S);return m.asyncQueue.enqueueAndForget(async()=>ET(await wf(m),E)),()=>{C.Ga(),m.asyncQueue.enqueueAndForget(async()=>TT(await wf(m),E))}}(cm(c),d,l,u)}function KT(t,e){return function(r,i){const s=new Cr;return r.asyncQueue.enqueueAndForget(async()=>z4(await eD(r),i,s)),s.promise}(cm(t),e)}function GT(t,e,n){const r=n.docs.get(e._key),i=new qT(t);return new HT(t,i,e._key,r,new So(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){Us=i})(Ri),pi(new Dr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Cs(new TN(r.getProvider("auth-internal")),new AN(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new W(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new da(c.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),_n(L_,"4.6.5",e),_n(L_,"4.6.5","esm2017")})();/**
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
 */const QT="firebasestorage.googleapis.com",YT="storageBucket",TD=2*60*1e3,ID=10*60*1e3;/**
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
 */class xe extends Qt{constructor(e,n,r=0){super(zh(e),`Firebase Storage: ${n} (${zh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,xe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return zh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ce;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ce||(Ce={}));function zh(t){return"storage/"+t}function Tm(){const t="An unknown error occurred, please check the error payload for server response.";return new xe(Ce.UNKNOWN,t)}function SD(t){return new xe(Ce.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function RD(t){return new xe(Ce.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function AD(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new xe(Ce.UNAUTHENTICATED,t)}function kD(){return new xe(Ce.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function PD(t){return new xe(Ce.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function CD(){return new xe(Ce.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function xD(){return new xe(Ce.CANCELED,"User canceled the upload/download.")}function ND(t){return new xe(Ce.INVALID_URL,"Invalid URL '"+t+"'.")}function bD(t){return new xe(Ce.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function DD(){return new xe(Ce.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+YT+"' property when initializing the app?")}function OD(){return new xe(Ce.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function LD(){return new xe(Ce.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function VD(t){return new xe(Ce.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function If(t){return new xe(Ce.INVALID_ARGUMENT,t)}function XT(){return new xe(Ce.APP_DELETED,"The Firebase app was deleted.")}function MD(t){return new xe(Ce.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function jo(t,e){return new xe(Ce.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function ho(t){throw new xe(Ce.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Vt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Vt.makeFromUrl(e,n)}catch{return new Vt(e,"")}if(r.path==="")return r;throw bD(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(N){N.path.charAt(N.path.length-1)==="/"&&(N.path_=N.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function c(N){N.path_=decodeURIComponent(N.path)}const d="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",w=new RegExp(`^https?://${p}/${d}/b/${i}/o${m}`,"i"),S={bucket:1,path:3},k=n===QT?"(?:storage.googleapis.com|storage.cloud.google.com)":n,C="([^?#]*)",E=new RegExp(`^https?://${k}/${i}/${C}`,"i"),T=[{regex:l,indices:u,postModify:s},{regex:w,indices:S,postModify:c},{regex:E,indices:{bucket:1,path:2},postModify:c}];for(let N=0;N<T.length;N++){const M=T[N],V=M.regex.exec(e);if(V){const v=V[M.indices.bucket];let y=V[M.indices.path];y||(y=""),r=new Vt(v,y),M.postModify(r);break}}if(r==null)throw ND(e);return r}}class UD{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function FD(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function u(){return l===2}let c=!1;function d(...C){c||(c=!0,e.apply(null,C))}function p(C){i=setTimeout(()=>{i=null,t(w,u())},C)}function m(){s&&clearTimeout(s)}function w(C,...E){if(c){m();return}if(C){m(),d.call(null,C,...E);return}if(u()||o){m(),d.call(null,C,...E);return}r<64&&(r*=2);let T;l===1?(l=2,T=0):T=(r+Math.random())*1e3,p(T)}let S=!1;function k(C){S||(S=!0,m(),!c&&(i!==null?(C||(l=2),clearTimeout(i),p(0)):C||(l=1)))}return p(0),s=setTimeout(()=>{o=!0,k(!0)},n),k}function jD(t){t(!1)}/**
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
 */function $D(t){return t!==void 0}function zD(t){return typeof t=="object"&&!Array.isArray(t)}function Im(t){return typeof t=="string"||t instanceof String}function Iv(t){return Sm()&&t instanceof Blob}function Sm(){return typeof Blob<"u"}function Sv(t,e,n,r){if(r<e)throw If(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw If(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Rm(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function JT(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var ai;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ai||(ai={}));/**
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
 */function BD(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class WD{constructor(e,n,r,i,s,o,l,u,c,d,p,m=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=p,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((w,S)=>{this.resolve_=w,this.reject_=S,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Tl(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const u=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===ai.NO_ERROR,u=s.getStatus();if(!l||BD(u,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===ai.ABORT;r(!1,new Tl(!1,null,d));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new Tl(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());$D(u)?s(u):s()}catch(u){o(u)}else if(l!==null){const u=Tm();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(i.canceled){const u=this.appDelete_?XT():xD();o(u)}else{const u=CD();o(u)}};this.canceled_?n(!1,new Tl(!1,null,!0)):this.backoffId_=FD(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&jD(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Tl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function HD(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function qD(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function KD(t,e){e&&(t["X-Firebase-GMPID"]=e)}function GD(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function QD(t,e,n,r,i,s,o=!0){const l=JT(t.urlParams),u=t.url+l,c=Object.assign({},t.headers);return KD(c,e),HD(c,n),qD(c,s),GD(c,r),new WD(u,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function YD(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function XD(...t){const e=YD();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Sm())return new Blob(t);throw new xe(Ce.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function JD(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function ZD(t){if(typeof atob>"u")throw VD("base-64");return atob(t)}/**
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
 */const mn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Bh{constructor(e,n){this.data=e,this.contentType=n||null}}function eO(t,e){switch(t){case mn.RAW:return new Bh(ZT(e));case mn.BASE64:case mn.BASE64URL:return new Bh(eI(t,e));case mn.DATA_URL:return new Bh(nO(e),rO(e))}throw Tm()}function ZT(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function tO(t){let e;try{e=decodeURIComponent(t)}catch{throw jo(mn.DATA_URL,"Malformed data URL.")}return ZT(e)}function eI(t,e){switch(t){case mn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw jo(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case mn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw jo(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=ZD(e)}catch(i){throw i.message.includes("polyfill")?i:jo(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class tI{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw jo(mn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=iO(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function nO(t){const e=new tI(t);return e.base64?eI(mn.BASE64,e.rest):tO(e.rest)}function rO(t){return new tI(t).contentType}function iO(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class dr{constructor(e,n){let r=0,i="";Iv(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Iv(this.data_)){const r=this.data_,i=JD(r,e,n);return i===null?null:new dr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new dr(r,!0)}}static getBlob(...e){if(Sm()){const n=e.map(r=>r instanceof dr?r.data_:r);return new dr(XD.apply(null,n))}else{const n=e.map(o=>Im(o)?eO(mn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)i[s++]=o[l]}),new dr(i,!0)}}uploadData(){return this.data_}}/**
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
 */function nI(t){let e;try{e=JSON.parse(t)}catch{return null}return zD(e)?e:null}/**
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
 */function sO(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function oO(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function rI(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function aO(t,e){return e}class yt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||aO}}let Il=null;function lO(t){return!Im(t)||t.length<2?t:rI(t)}function iI(){if(Il)return Il;const t=[];t.push(new yt("bucket")),t.push(new yt("generation")),t.push(new yt("metageneration")),t.push(new yt("name","fullPath",!0));function e(s,o){return lO(o)}const n=new yt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new yt("size");return i.xform=r,t.push(i),t.push(new yt("timeCreated")),t.push(new yt("updated")),t.push(new yt("md5Hash",null,!0)),t.push(new yt("cacheControl",null,!0)),t.push(new yt("contentDisposition",null,!0)),t.push(new yt("contentEncoding",null,!0)),t.push(new yt("contentLanguage",null,!0)),t.push(new yt("contentType",null,!0)),t.push(new yt("metadata","customMetadata",!0)),Il=t,Il}function uO(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Vt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function cO(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return uO(r,t),r}function sI(t,e,n){const r=nI(e);return r===null?null:cO(t,r,n)}function hO(t,e,n,r){const i=nI(e);if(i===null||!Im(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const d=t.bucket,p=t.fullPath,m="/b/"+o(d)+"/o/"+o(p),w=Rm(m,n,r),S=JT({alt:"media",token:c});return w+S})[0]}function dO(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class oI{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function aI(t){if(!t)throw Tm()}function fO(t,e){function n(r,i){const s=sI(t,i,e);return aI(s!==null),s}return n}function pO(t,e){function n(r,i){const s=sI(t,i,e);return aI(s!==null),hO(s,i,t.host,t._protocol)}return n}function lI(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=kD():i=AD():n.getStatus()===402?i=RD(t.bucket):n.getStatus()===403?i=PD(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function mO(t){const e=lI(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=SD(t.path)),s.serverResponse=i.serverResponse,s}return n}function gO(t,e,n){const r=e.fullServerUrl(),i=Rm(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,l=new oI(i,s,pO(t,n),o);return l.errorHandler=mO(e),l}function yO(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function _O(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=yO(null,e)),r}function vO(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let T="";for(let N=0;N<2;N++)T=T+Math.random().toString().slice(2);return T}const u=l();o["Content-Type"]="multipart/related; boundary="+u;const c=_O(e,r,i),d=dO(c,n),p="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,m=`\r
--`+u+"--",w=dr.getBlob(p,r,m);if(w===null)throw OD();const S={name:c.fullPath},k=Rm(s,t.host,t._protocol),C="POST",E=t.maxUploadRetryTime,_=new oI(k,C,fO(t,n),E);return _.urlParams=S,_.headers=o,_.body=w.uploadData(),_.errorHandler=lI(e),_}class wO{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ai.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ai.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ai.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw ho("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ho("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ho("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ho("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ho("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class EO extends wO{initXhr(){this.xhr_.responseType="text"}}function uI(){return new EO}/**
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
 */class wi{constructor(e,n){this._service=e,n instanceof Vt?this._location=n:this._location=Vt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new wi(e,n)}get root(){const e=new Vt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return rI(this._location.path)}get storage(){return this._service}get parent(){const e=sO(this._location.path);if(e===null)return null;const n=new Vt(this._location.bucket,e);return new wi(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw MD(e)}}function TO(t,e,n){t._throwIfRoot("uploadBytes");const r=vO(t.storage,t._location,iI(),new dr(e,!0),n);return t.storage.makeRequestWithTokens(r,uI).then(i=>({metadata:i,ref:t}))}function IO(t){t._throwIfRoot("getDownloadURL");const e=gO(t.storage,t._location,iI());return t.storage.makeRequestWithTokens(e,uI).then(n=>{if(n===null)throw LD();return n})}function SO(t,e){const n=oO(t._location.path,e),r=new Vt(t._location.bucket,n);return new wi(t.storage,r)}/**
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
 */function RO(t){return/^[A-Za-z]+:\/\//.test(t)}function AO(t,e){return new wi(t,e)}function cI(t,e){if(t instanceof Am){const n=t;if(n._bucket==null)throw DD();const r=new wi(n,n._bucket);return e!=null?cI(r,e):r}else return e!==void 0?SO(t,e):t}function kO(t,e){if(e&&RO(e)){if(t instanceof Am)return AO(t,e);throw If("To use ref(service, url), the first argument must be a Storage instance.")}else return cI(t,e)}function Rv(t,e){const n=e==null?void 0:e[YT];return n==null?null:Vt.makeFromBucketSpec(n,t)}function PO(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:V1(i,t.app.options.projectId))}class Am{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=QT,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=TD,this._maxUploadRetryTime=ID,this._requests=new Set,i!=null?this._bucket=Vt.makeFromBucketSpec(i,this._host):this._bucket=Rv(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Vt.makeFromBucketSpec(this._url,e):this._bucket=Rv(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Sv("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Sv("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new wi(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new UD(XT());{const o=QD(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Av="@firebase/storage",kv="0.12.6";/**
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
 */const hI="storage";function CO(t,e,n){return t=Pe(t),TO(t,e,n)}function xO(t){return t=Pe(t),IO(t)}function NO(t,e){return t=Pe(t),kO(t,e)}function bO(t=Op(),e){t=Pe(t);const r=dc(t,hI).getImmediate({identifier:e}),i=D1("storage");return i&&DO(r,...i),r}function DO(t,e,n,r={}){PO(t,e,n,r)}function OO(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Am(n,r,i,e,Ri)}function LO(){pi(new Dr(hI,OO,"PUBLIC").setMultipleInstances(!0)),_n(Av,kv,""),_n(Av,kv,"esm2017")}LO();const VO={apiKey:"AIzaSyAoB7jPca5UoD--vYdTE43HDZgqrwmDJBI",authDomain:"icecreamfactory-fbe1b.firebaseapp.com",projectId:"icecreamfactory-fbe1b",storageBucket:"icecreamfactory-fbe1b.appspot.com",messagingSenderId:"33392143586",appId:"1:33392143586:web:d8d0bec618cd4c377602bb"},km=F1(VO),Ei=_N(km),MO=bO(km),Zi=sD(km);function UO({children:t}){return Ei.currentUser===null?D.jsx(pP,{to:"/login"}):D.jsx(D.Fragment,{children:t})}const FO=G.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,jO=G.div`
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
`,$O=G.header`
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
`,zO=G.div`
  width: 100%;
  max-width: 370px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  cursor: pointer;
`,BO=G.div`
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
`,WO=G.div`
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
`,HO=G.button`
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
`,qO=G.div`
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
`,KO=G.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: 100%;
`,GO=G.div`
  width: 100%;
  max-width: 114px;
  background-color: #2c211b;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  align-items: center;
  gap: 7px;
  padding: 26px 0 14px;
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
    width: 100%;
    color: #fff;
    font-size: 16px;
    font-weight: 900;
    display: block;
    text-align: center;
    padding: 0 6px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
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
`,QO=G.div`
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
`,YO=G.div`
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
`,dI=G.div`
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
`,Pv=G.div`
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
`,XO=G(dI)`
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
`,JO=G.div`
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
`,Cv=G.div`
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
`,ZO=G.button`
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
`;G.div`
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
`;G.div`
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
`;G.div`
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
`;const eL=G.div`
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
`,tL=G.div`
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
`,fI=t=>{const{data:e,className:n}=t;return D.jsxs(qO,{className:n,children:[D.jsx("div",{className:"title",children:D.jsx("span",{children:"명예의 전당"})}),D.jsx(KO,{children:e.slice(0,3).map((r,i)=>D.jsxs(GO,{className:`${i===0?"first":i===1?"second":i===2?"third":""}`,children:[D.jsx("span",{children:r.userName}),D.jsx("span",{children:r.score})]},i))})]})},nL=G.div`
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
`,rL=G.button`
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
`,iL=G.div`
  width: 100%;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
`,sL=G.p`
  color: #fff;
  font-size: 20px;
  font-weight: 900;
  text-align: center;
  height: 34px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
`,oL=G.div`
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
`,aL=G.div`
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
`;function lL(t){const{onClick:e,rankList:n}=t;return D.jsxs(nL,{children:[D.jsx(rL,{onClick:e,children:D.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:D.jsxs("g",{id:"그룹_30","data-name":"그룹 30",transform:"translate(-1844 -55)",children:[D.jsx("rect",{id:"사각형_21","data-name":"사각형 21",width:"24",height:"24",transform:"translate(1844 55)",fill:"none"}),D.jsxs("g",{id:"close_FILL0_wght400_GRAD0_opsz48",transform:"translate(1837.65 48.65)",fill:"#fff",strokeLinecap:"round",strokeLinejoin:"round",children:[D.jsx("path",{d:"M 25.11923027038574 27.05710792541504 L 24.76568031311035 26.70354843139648 L 18.35000038146973 20.28786849975586 L 11.9343204498291 26.70354843139648 L 11.58077049255371 27.05710792541504 L 11.22722053527832 26.70354843139648 L 9.996450424194336 25.4727783203125 L 9.642889976501465 25.11922836303711 L 9.996450424194336 24.76567840576172 L 16.41213035583496 18.34999847412109 L 9.996450424194336 11.93431854248047 L 9.642889976501465 11.58076858520508 L 9.996450424194336 11.22721862792969 L 11.22722053527832 9.996448516845703 L 11.58077049255371 9.642888069152832 L 11.9343204498291 9.996448516845703 L 18.35000038146973 16.41212844848633 L 24.76568031311035 9.996448516845703 L 25.11923027038574 9.642888069152832 L 25.47278022766113 9.996448516845703 L 26.70355033874512 11.22721862792969 L 27.05710983276367 11.58076858520508 L 26.70355033874512 11.93431854248047 L 20.28787040710449 18.34999847412109 L 26.70355033874512 24.76567840576172 L 27.05710983276367 25.11922836303711 L 26.70355033874512 25.4727783203125 L 25.47278022766113 26.70354843139648 L 25.11923027038574 27.05710792541504 Z",stroke:"none"}),D.jsx("path",{d:"M 25.11923027038574 26.34999847412109 L 26.35000038146973 25.11922836303711 L 19.58077049255371 18.34999847412109 L 26.35000038146973 11.58076858520508 L 25.11923027038574 10.34999847412109 L 18.35000038146973 17.11922836303711 L 11.58077049255371 10.34999847412109 L 10.35000038146973 11.58076858520508 L 17.11923027038574 18.34999847412109 L 10.35000038146973 25.11922836303711 L 11.58077049255371 26.34999847412109 L 18.35000038146973 19.58076858520508 L 25.11923027038574 26.34999847412109 M 25.11923027038574 27.34999847412109 C 24.86330795288086 27.34999847412109 24.60738563537598 27.25236892700195 24.4121208190918 27.05710792541504 L 18.35000038146973 20.9949893951416 L 12.28787994384766 27.05710792541504 C 11.8973503112793 27.44762992858887 11.26419162750244 27.44762992858887 10.87366008758545 27.05710792541504 L 9.642889976501465 25.82633781433105 C 9.252370834350586 25.4358081817627 9.252370834350586 24.80264854431152 9.642889976501465 24.41211891174316 L 15.70501041412354 18.34999847412109 L 9.642889976501465 12.28787803649902 C 9.252370834350586 11.89734840393066 9.252370834350586 11.26418876647949 9.642889976501465 10.87365818023682 L 10.87366008758545 9.642888069152832 C 11.26419162750244 9.252367973327637 11.8973503112793 9.252367973327637 12.28787994384766 9.642888069152832 L 18.35000038146973 15.7050085067749 L 24.4121208190918 9.642888069152832 C 24.80265045166016 9.252367973327637 25.43581008911133 9.252367973327637 25.82633972167969 9.642888069152832 L 27.05710983276367 10.87365818023682 C 27.44762992858887 11.26418876647949 27.44762992858887 11.89734840393066 27.05710983276367 12.28787803649902 L 20.99499130249023 18.34999847412109 L 27.05710983276367 24.41211891174316 C 27.44762992858887 24.80264854431152 27.44762992858887 25.4358081817627 27.05710983276367 25.82633781433105 L 25.82633972167969 27.05710792541504 C 25.63107490539551 27.25236892700195 25.37515258789062 27.34999847412109 25.11923027038574 27.34999847412109 Z",stroke:"none",fill:"#fff"})]})]})})}),D.jsxs(iL,{children:[D.jsx(sL,{children:"순위"}),D.jsx(fI,{data:n}),D.jsx(oL,{children:n.slice(3).map((r,i)=>D.jsxs(aL,{children:[D.jsxs("div",{className:"wrap",children:[D.jsxs("span",{className:"index",children:[i+4,"등"]}),D.jsx("img",{className:"photo",src:r.photoURL,alt:"프로필 이미지"}),D.jsx("span",{className:"name",children:r.userName})]}),D.jsx("span",{className:"score",children:r.score})]},i))})]})]})}const xv=ju(Zi,"icecream","Mtu2EMz2fp8FKkItKQm5"),Wh=[0,1,2,3,4,5];function uL(){const t=Ei.currentUser,e=t==null?void 0:t.uid,n=t==null?void 0:t.displayName,r=t==null?void 0:t.photoURL,i=Vs(),[s,o]=F.useState(!0),[l,u]=F.useState(!1),[c,d]=F.useState([]),[p,m]=F.useState([]),[w,S]=F.useState([]),[k,C]=F.useState(""),[E,_]=F.useState(""),[T,N]=F.useState(Wh),[M,V]=F.useState(!1),[v,y]=F.useState(),I=async()=>{o(!0);try{const L=vv(yv(Zi,"icecream")),z=vv(yv(Zi,"rank"),gD("score","desc"));await Tv(L,K=>{const ee=K.docs.map(te=>te.data());V(ee[0].loadingState),_(ee[0].lastUserProfile),m(ee[0].recipe),C(ee[0].lastUser)}),await Tv(z,K=>{const ee=K.docs.map(te=>te.data());d(ee)})}catch(L){console.log(L)}finally{o(!1)}},R=L=>{const z=[...w,L];S(z)},P=L=>{let z=L.slice();for(let K=z.length-1;K>0;K--){const ee=Math.floor(Math.random()*(K+1));[z[K],z[ee]]=[z[ee],z[K]]}return z},x=()=>{const L=P(Wh);N(L)},A=async()=>{try{await Ei.signOut(),i("/login")}catch(L){console.error("Error signing out: ",L)}},et=async()=>{const L=ju(Zi,"rank",e),z=await Tf(L);if(z.exists()){const K=z.data().score||0;y(K)}else y(0)},Yt=async()=>{const L=ju(Zi,"rank",e),z=await Tf(L);if(z.exists()){const ee=(z.data().score||0)+1;await $h(L,{score:ee,photoURL:r,userName:n}),y(ee)}else await ED(L,{score:1,userName:n||"Unknown User",photoURL:r}),y(1)},An=async()=>{if(S([]),p.length!==w.length)return!1;for(let L=0;L<p.length;L++)if(p[L]!==w[L])return!1;try{await $h(xv,{lastUserProfile:r,loadingState:!0,lastUser:n}),Yt()}catch(L){console.log(L)}finally{const L=P(Wh);setTimeout(()=>{$h(xv,{loadingState:!1,recipe:L})},2e3)}},tt=()=>{u(!l)};return F.useEffect(()=>{I(),et()},[]),F.useEffect(()=>{w.length===6&&(An(),x())},[w]),D.jsxs(D.Fragment,{children:[D.jsxs(FO,{children:[D.jsxs(jO,{className:M?"active":"",children:[E?D.jsx("img",{src:E,alt:"프로필 이미지"}):"",D.jsxs("span",{className:"text",children:[k," 성공!!"]}),D.jsx("div",{className:"second"}),D.jsx("div",{className:"first"})]}),D.jsxs($O,{children:[D.jsxs(zO,{onClick:()=>{i("/profile")},children:[D.jsx(BO,{title:"마이페이지 바로가기",children:r?D.jsx("img",{src:r,alt:"프로필 이미지"}):""}),D.jsxs(WO,{title:"마이페이지 바로가기",children:[D.jsxs("div",{className:"textWrap",children:[D.jsx("span",{children:n}),D.jsx("span",{children:v})]}),D.jsx(HO,{title:"\b로그아웃",onClick:()=>{A()},children:D.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:D.jsxs("g",{id:"그룹_1","data-name":"그룹 1",transform:"translate(-254 -60)",children:[D.jsx("path",{id:"logout_24dp_5F6368_FILL0_wght400_GRAD0_opsz24",d:"M121.778-824a1.712,1.712,0,0,1-1.256-.522,1.712,1.712,0,0,1-.522-1.256v-12.444a1.712,1.712,0,0,1,.522-1.256,1.712,1.712,0,0,1,1.256-.522H128v1.778h-6.222v12.444H128V-824Zm9.778-3.556-1.222-1.289,2.267-2.267h-7.267v-1.778H132.6l-2.267-2.267,1.222-1.289L136-832Z",transform:"translate(138 904)",fill:"#fff",stroke:"#fff",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1"}),D.jsx("rect",{id:"사각형_4","data-name":"사각형 4",width:"24",height:"24",transform:"translate(254 60)",fill:"none"})]})})})]})]}),D.jsx(fI,{data:c,className:"webView"}),D.jsx(QO,{children:D.jsx("button",{title:"랭킹 보기",onClick:()=>{tt()},children:D.jsx("img",{src:"/img/ico_rank.svg",alt:"랭킹리스트 보기"})})})]}),D.jsx(YO,{children:s?D.jsx(eL,{children:"Loading..."}):D.jsxs(D.Fragment,{children:[D.jsx(dI,{children:D.jsxs(D.Fragment,{children:[D.jsx(Pv,{className:"object",children:p.map((L,z)=>D.jsx(Cv,{className:`${L===0?"strawberry":L===1?"choco":L===2?"mint":L===3?"vanilla":L===4?"blueberry":"greentea"} ${z===0?"one":z===1?"two":z===2?"three":z===3?"four":z===4?"five":"six"} wiggle`},z))}),D.jsx("p",{className:"title",children:"만들어주세요!"})]})}),D.jsx(XO,{children:D.jsxs(D.Fragment,{children:[D.jsx(Pv,{className:"object",children:D.jsx("div",{className:`${w.length===1?"first":w.length===2?"second":w.length===3?"third":w.length===4?"fourth":w.length===5?"fifth":"sixth"}`,children:w.map((L,z)=>D.jsx(Cv,{className:`
                              ${z+1===w.length?"active":""}
                              ${L===0?"strawberry":L===1?"choco":L===2?"mint":L===3?"vanilla":L===4?"blueberry":"greentea"} ${z===0?"one":z===1?"two":z===2?"three":z===3?"four":z===4?"five":"six"}`},z))})}),D.jsx("p",{className:"title",children:"나의 조합"})]})})]})}),D.jsxs(JO,{children:[D.jsx("div",{className:"buttons",children:T.map(L=>D.jsx(ZO,{className:L===0?"strawberry":L===1?"choco":L===2?"mint":L===3?"vanilla":L===4?"blueberry":"greentea",onClick:()=>R(L)},L))}),D.jsx("span",{children:"SELECT ME!!!"})]})]}),l&&D.jsx(lL,{onClick:()=>{tt()},rankList:c}),D.jsx(tL,{})]})}const cL=G.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 30px 16px 0;
`,hL=G.div`
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
`,dL=G.div`
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
`,fL=G.div`
  width: 90px;
  height: 90px;
  border-radius: 23px;
  background-color: #e2b97e;
  border: 3px solid #1c1108;
  margin-bottom: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
`,pL=G.label`
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
`,mL=G.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,gL=G.input`
  display: none;
`;G.h1`
  font-size: 24px;
  font-weight: 900;
  color: #333;
`;const yL=G.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Nv=G.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  margin-bottom: 26px;
`,bv=G.p`
  font-size: 16px;
  color: #333;
  font-weight: 900;
`,Dv=G.p`
  font-size: 14px;
  color: #6a5e55;
  font-weight: 900;
`,_L=G.img`
  width: 100%;
  max-width: 260px;
`,vL=G.p`
  font-size: 14px;
  font-weight: 900;
  color: #c1b18a;
  text-align: center;
  letter-spacing: -1.5px;
  padding-top: 22px;
`,wL=G.button`
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
`;function EL(){const t=Ei.currentUser,[e,n]=F.useState(!0),[r,i]=F.useState(!1),[s,o]=F.useState(),[l,u]=F.useState(t==null?void 0:t.photoURL),[c,d]=F.useState(`${(t==null?void 0:t.displayName)??"Anonymous"}`),p=Vs(),m=async()=>{var S;n(!0);try{const k=await Tf(ju(Zi,"rank",t.uid));if(!k.exists())o(0);else{const C=((S=k.data())==null?void 0:S.score)||0;o(C)}}catch(k){console.log(k)}finally{n(!1)}},w=async S=>{const{files:k}=S.target;if(t&&k&&k.length===1){i(!0);try{const C=k[0],E=NO(MO,`avatars/${t==null?void 0:t.uid}`),_=await CO(E,C),T=await xO(_.ref);u(T),await hE(t,{photoURL:T})}catch(C){console.log(C)}finally{i(!1)}}};return F.useEffect(()=>{m()},[]),D.jsxs(cL,{children:[D.jsx(hL,{children:D.jsx("span",{children:"마이페이지"})}),D.jsx(dL,{children:D.jsxs(yL,{children:[r?D.jsx(fL,{children:"로딩 중"}):D.jsxs(D.Fragment,{children:[D.jsx(pL,{htmlFor:"avatar",className:l?"":"empty",children:l&&D.jsx(mL,{src:l})}),D.jsx(gL,{onChange:w,id:"avatar",type:"file",accept:"image/*"})]}),D.jsxs(Nv,{children:[D.jsx(Dv,{children:"닉네임"}),D.jsx(bv,{children:c})]}),D.jsxs(Nv,{children:[D.jsx(Dv,{children:"점수"}),D.jsx(bv,{children:e?"점수 가져오는 중 ...":s})]}),D.jsx(_L,{src:"/img/ico_code_deco.svg",alt:"바코드 데코레이션"}),D.jsxs(vL,{children:["PID | ",t.uid]})]})}),D.jsx(wL,{onClick:()=>{p("/")},children:"확인"})]})}const TL=G.div`
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
`,pI=G.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding: 0 16px;
`,mI=G.div`
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
`,gI=G.form`
  width: 100%;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;G.p`
  font-size: 40px;
  font-weight: 900;
  color: #ff3636;
  letter-spacing: -2px;
  margin-bottom: 120px;
`;const yI=G.h1`
  font-size: 24px;
  color: #333;
`,ni=G.input`
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
`,Sf=G.span`
  font-weight: 600;
  color: tomato;
  font-size: 12px;
`,_I=G.span`
  margin-top: 20px;
  font-size: 12px;
`;function IL(){const t=Vs(),[e,n]=F.useState(!1),[r,i]=F.useState(!0),[s,o]=F.useState(""),[l,u]=F.useState(""),[c,d]=F.useState(""),p=w=>{const{target:{name:S,value:k}}=w;S==="email"?o(k):S==="password"&&u(k)},m=async w=>{if(w.preventDefault(),d(""),!(e||s===""||l===""))try{n(!0),await r2(Ei,s,l),t("/")}catch(S){S instanceof Qt&&(console.log(S.code,S.message),d(S.message))}finally{n(!1)}};return F.useEffect(()=>{setTimeout(()=>{i(!1)},1500)},[]),D.jsxs(pI,{children:[r&&D.jsxs(TL,{className:r?"":"hidden",children:[D.jsxs("h1",{children:["ICECREAM",D.jsx("br",{}),"FACTORY"]}),D.jsx("div",{className:"first"}),D.jsx("div",{className:"second"})]}),D.jsxs(mI,{className:r?"":"action",children:[D.jsx(yI,{children:"로그인이 필요해요"}),D.jsxs(gI,{onSubmit:m,children:[D.jsx(ni,{onChange:p,name:"email",value:s,placeholder:"이메일",type:"email",required:!0}),D.jsx(ni,{onChange:p,name:"password",value:l,placeholder:"비밀번호",type:"password",required:!0}),D.jsx(ni,{className:"createBtn",type:"submit",value:e?"Loading...":"로그인"})]}),c!==""?D.jsx(Sf,{children:c}):null,D.jsxs(_I,{children:["계정이 없나요? ",D.jsx(P1,{to:"/create-account",children:"회원가입하기 →"})]})]})]})}function SL(){const t=Vs(),[e,n]=F.useState(!1),[r,i]=F.useState(""),[s,o]=F.useState(""),[l,u]=F.useState(""),[c,d]=F.useState("");F.useState(!1);const p=w=>{const{target:{name:S,value:k}}=w;S==="name"?i(k):S==="email"?o(k):S==="password"&&u(k)},m=async w=>{if(w.preventDefault(),d(""),!(e||r===""||r.length>12||s===""||l===""))try{n(!0);const S=await n2(Ei,s,l);console.log(S.user),await hE(S.user,{displayName:r}),t("/")}catch(S){S instanceof Qt&&(console.log(S.code,S.message),d(S.message))}finally{n(!1)}};return D.jsx(pI,{children:D.jsxs(mI,{className:"action",children:[D.jsx(yI,{children:"회원가입"}),D.jsxs(gI,{onSubmit:m,children:[D.jsx(ni,{onChange:p,name:"name",value:r,placeholder:"닉네임을 입력하세요",type:"text",required:!0}),r.length>12&&D.jsx(Sf,{children:"최대 12글자 미만으로 입력해 주세요"}),D.jsx(ni,{onChange:p,name:"email",value:s,placeholder:"이메일",type:"email",required:!0}),D.jsx(ni,{onChange:p,name:"password",value:l,placeholder:"비밀번호",type:"password",required:!0}),D.jsx(ni,{className:"createBtn",type:"submit",value:e?"Loading...":"가입하기"})]}),c!==""?D.jsx(Sf,{children:c}):null,D.jsxs(_I,{children:["이미 회원이신가요? ",D.jsx(P1,{to:"/login",children:"로그인하기 →"})]})]})})}const RL=y1`
  ${v1}
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
`;function AL(){const[t,e]=F.useState(!0),n=async()=>{await Ei.authStateReady(),e(!1)};return F.useEffect(()=>{n()},[]),D.jsxs(D.Fragment,{children:[D.jsx(RL,{}),t?D.jsx(Rk,{}):D.jsx(SP,{children:D.jsxs(UO,{children:[D.jsx(PP,{}),D.jsxs(yP,{children:[D.jsx(_o,{path:"/",element:D.jsx(uL,{})}),D.jsx(_o,{path:"profile",element:D.jsx(EL,{})}),D.jsx(_o,{path:"/login",element:D.jsx(IL,{})}),D.jsx(_o,{path:"/create-account",element:D.jsx(SL,{})})]})]})})]})}Hh.createRoot(document.getElementById("root")).render(D.jsx(nn.StrictMode,{children:D.jsx(AL,{})}));
