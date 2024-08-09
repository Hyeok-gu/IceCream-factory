function G_(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Q_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Y_={exports:{}},Wc={},X_={exports:{}},ve={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var El=Symbol.for("react.element"),BI=Symbol.for("react.portal"),HI=Symbol.for("react.fragment"),WI=Symbol.for("react.strict_mode"),qI=Symbol.for("react.profiler"),KI=Symbol.for("react.provider"),GI=Symbol.for("react.context"),QI=Symbol.for("react.forward_ref"),YI=Symbol.for("react.suspense"),XI=Symbol.for("react.memo"),JI=Symbol.for("react.lazy"),jg=Symbol.iterator;function ZI(t){return t===null||typeof t!="object"?null:(t=jg&&t[jg]||t["@@iterator"],typeof t=="function"?t:null)}var J_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Z_=Object.assign,e0={};function Co(t,e,n){this.props=t,this.context=e,this.refs=e0,this.updater=n||J_}Co.prototype.isReactComponent={};Co.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Co.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function t0(){}t0.prototype=Co.prototype;function gp(t,e,n){this.props=t,this.context=e,this.refs=e0,this.updater=n||J_}var yp=gp.prototype=new t0;yp.constructor=gp;Z_(yp,Co.prototype);yp.isPureReactComponent=!0;var zg=Array.isArray,n0=Object.prototype.hasOwnProperty,vp={current:null},r0={key:!0,ref:!0,__self:!0,__source:!0};function i0(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)n0.call(e,r)&&!r0.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:El,type:t,key:s,ref:o,props:i,_owner:vp.current}}function eS(t,e){return{$$typeof:El,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function _p(t){return typeof t=="object"&&t!==null&&t.$$typeof===El}function tS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var $g=/\/+/g;function Wh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?tS(""+t.key):e.toString(36)}function Au(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case El:case BI:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Wh(o,0):r,zg(i)?(n="",t!=null&&(n=t.replace($g,"$&/")+"/"),Au(i,e,n,"",function(c){return c})):i!=null&&(_p(i)&&(i=eS(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace($g,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",zg(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Wh(s,l);o+=Au(s,e,n,u,i)}else if(u=ZI(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Wh(s,l++),o+=Au(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function nu(t,e,n){if(t==null)return t;var r=[],i=0;return Au(t,r,"","",function(s){return e.call(n,s,i++)}),r}function nS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Gt={current:null},Pu={transition:null},rS={ReactCurrentDispatcher:Gt,ReactCurrentBatchConfig:Pu,ReactCurrentOwner:vp};function s0(){throw Error("act(...) is not supported in production builds of React.")}ve.Children={map:nu,forEach:function(t,e,n){nu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return nu(t,function(){e++}),e},toArray:function(t){return nu(t,function(e){return e})||[]},only:function(t){if(!_p(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ve.Component=Co;ve.Fragment=HI;ve.Profiler=qI;ve.PureComponent=gp;ve.StrictMode=WI;ve.Suspense=YI;ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rS;ve.act=s0;ve.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Z_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=vp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)n0.call(e,u)&&!r0.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:El,type:t.type,key:i,ref:s,props:r,_owner:o}};ve.createContext=function(t){return t={$$typeof:GI,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:KI,_context:t},t.Consumer=t};ve.createElement=i0;ve.createFactory=function(t){var e=i0.bind(null,t);return e.type=t,e};ve.createRef=function(){return{current:null}};ve.forwardRef=function(t){return{$$typeof:QI,render:t}};ve.isValidElement=_p;ve.lazy=function(t){return{$$typeof:JI,_payload:{_status:-1,_result:t},_init:nS}};ve.memo=function(t,e){return{$$typeof:XI,type:t,compare:e===void 0?null:e}};ve.startTransition=function(t){var e=Pu.transition;Pu.transition={};try{t()}finally{Pu.transition=e}};ve.unstable_act=s0;ve.useCallback=function(t,e){return Gt.current.useCallback(t,e)};ve.useContext=function(t){return Gt.current.useContext(t)};ve.useDebugValue=function(){};ve.useDeferredValue=function(t){return Gt.current.useDeferredValue(t)};ve.useEffect=function(t,e){return Gt.current.useEffect(t,e)};ve.useId=function(){return Gt.current.useId()};ve.useImperativeHandle=function(t,e,n){return Gt.current.useImperativeHandle(t,e,n)};ve.useInsertionEffect=function(t,e){return Gt.current.useInsertionEffect(t,e)};ve.useLayoutEffect=function(t,e){return Gt.current.useLayoutEffect(t,e)};ve.useMemo=function(t,e){return Gt.current.useMemo(t,e)};ve.useReducer=function(t,e,n){return Gt.current.useReducer(t,e,n)};ve.useRef=function(t){return Gt.current.useRef(t)};ve.useState=function(t){return Gt.current.useState(t)};ve.useSyncExternalStore=function(t,e,n){return Gt.current.useSyncExternalStore(t,e,n)};ve.useTransition=function(){return Gt.current.useTransition()};ve.version="18.3.1";X_.exports=ve;var U=X_.exports;const Mn=Q_(U),iS=G_({__proto__:null,default:Mn},[U]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sS=U,oS=Symbol.for("react.element"),aS=Symbol.for("react.fragment"),lS=Object.prototype.hasOwnProperty,uS=sS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,cS={key:!0,ref:!0,__self:!0,__source:!0};function o0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)lS.call(e,r)&&!cS.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:oS,type:t,key:s,ref:o,props:i,_owner:uS.current}}Wc.Fragment=aS;Wc.jsx=o0;Wc.jsxs=o0;Y_.exports=Wc;var W=Y_.exports,jd={},a0={exports:{}},pn={},l0={exports:{}},u0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,Y){var Z=$.length;$.push(Y);e:for(;0<Z;){var me=Z-1>>>1,he=$[me];if(0<i(he,Y))$[me]=Y,$[Z]=he,Z=me;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var Y=$[0],Z=$.pop();if(Z!==Y){$[0]=Z;e:for(var me=0,he=$.length,Pe=he>>>1;me<Pe;){var We=2*(me+1)-1,Ze=$[We],qe=We+1,Nt=$[qe];if(0>i(Ze,Z))qe<he&&0>i(Nt,Ze)?($[me]=Nt,$[qe]=Z,me=qe):($[me]=Ze,$[We]=Z,me=We);else if(qe<he&&0>i(Nt,Z))$[me]=Nt,$[qe]=Z,me=qe;else break e}}return Y}function i($,Y){var Z=$.sortIndex-Y.sortIndex;return Z!==0?Z:$.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],d=1,f=null,m=3,E=!1,R=!1,P=!1,O=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S($){for(var Y=n(c);Y!==null;){if(Y.callback===null)r(c);else if(Y.startTime<=$)r(c),Y.sortIndex=Y.expirationTime,e(u,Y);else break;Y=n(c)}}function b($){if(P=!1,S($),!R)if(n(u)!==null)R=!0,Yt(F);else{var Y=n(c);Y!==null&&K(b,Y.startTime-$)}}function F($,Y){R=!1,P&&(P=!1,T(g),g=-1),E=!0;var Z=m;try{for(S(Y),f=n(u);f!==null&&(!(f.expirationTime>Y)||$&&!k());){var me=f.callback;if(typeof me=="function"){f.callback=null,m=f.priorityLevel;var he=me(f.expirationTime<=Y);Y=t.unstable_now(),typeof he=="function"?f.callback=he:f===n(u)&&r(u),S(Y)}else r(u);f=n(u)}if(f!==null)var Pe=!0;else{var We=n(c);We!==null&&K(b,We.startTime-Y),Pe=!1}return Pe}finally{f=null,m=Z,E=!1}}var C=!1,_=null,g=-1,w=5,I=-1;function k(){return!(t.unstable_now()-I<w)}function N(){if(_!==null){var $=t.unstable_now();I=$;var Y=!0;try{Y=_(!0,$)}finally{Y?A():(C=!1,_=null)}}else C=!1}var A;if(typeof v=="function")A=function(){v(N)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,it=fe.port2;fe.port1.onmessage=N,A=function(){it.postMessage(null)}}else A=function(){O(N,0)};function Yt($){_=$,C||(C=!0,A())}function K($,Y){g=O(function(){$(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){R||E||(R=!0,Yt(F))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function($){switch(m){case 1:case 2:case 3:var Y=3;break;default:Y=m}var Z=m;m=Y;try{return $()}finally{m=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,Y){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var Z=m;m=$;try{return Y()}finally{m=Z}},t.unstable_scheduleCallback=function($,Y,Z){var me=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?me+Z:me):Z=me,$){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=Z+he,$={id:d++,callback:Y,priorityLevel:$,startTime:Z,expirationTime:he,sortIndex:-1},Z>me?($.sortIndex=Z,e(c,$),n(u)===null&&$===n(c)&&(P?(T(g),g=-1):P=!0,K(b,Z-me))):($.sortIndex=he,e(u,$),R||E||(R=!0,Yt(F))),$},t.unstable_shouldYield=k,t.unstable_wrapCallback=function($){var Y=m;return function(){var Z=m;m=Y;try{return $.apply(this,arguments)}finally{m=Z}}}})(u0);l0.exports=u0;var hS=l0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dS=U,fn=hS;function H(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var c0=new Set,Ha={};function ds(t,e){io(t,e),io(t+"Capture",e)}function io(t,e){for(Ha[t]=e,t=0;t<e.length;t++)c0.add(e[t])}var Pr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zd=Object.prototype.hasOwnProperty,fS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Bg={},Hg={};function pS(t){return zd.call(Hg,t)?!0:zd.call(Bg,t)?!1:fS.test(t)?Hg[t]=!0:(Bg[t]=!0,!1)}function mS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function gS(t,e,n,r){if(e===null||typeof e>"u"||mS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Qt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ct={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ct[t]=new Qt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ct[e]=new Qt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ct[t]=new Qt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ct[t]=new Qt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ct[t]=new Qt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ct[t]=new Qt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ct[t]=new Qt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ct[t]=new Qt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ct[t]=new Qt(t,5,!1,t.toLowerCase(),null,!1,!1)});var wp=/[\-:]([a-z])/g;function Ep(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(wp,Ep);Ct[e]=new Qt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(wp,Ep);Ct[e]=new Qt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(wp,Ep);Ct[e]=new Qt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ct[t]=new Qt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ct.xlinkHref=new Qt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ct[t]=new Qt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Tp(t,e,n,r){var i=Ct.hasOwnProperty(e)?Ct[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(gS(e,n,i,r)&&(n=null),r||i===null?pS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var br=dS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ru=Symbol.for("react.element"),Os=Symbol.for("react.portal"),bs=Symbol.for("react.fragment"),Ip=Symbol.for("react.strict_mode"),$d=Symbol.for("react.profiler"),h0=Symbol.for("react.provider"),d0=Symbol.for("react.context"),Sp=Symbol.for("react.forward_ref"),Bd=Symbol.for("react.suspense"),Hd=Symbol.for("react.suspense_list"),Rp=Symbol.for("react.memo"),Kr=Symbol.for("react.lazy"),f0=Symbol.for("react.offscreen"),Wg=Symbol.iterator;function ia(t){return t===null||typeof t!="object"?null:(t=Wg&&t[Wg]||t["@@iterator"],typeof t=="function"?t:null)}var Xe=Object.assign,qh;function ga(t){if(qh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);qh=e&&e[1]||""}return`
`+qh+t}var Kh=!1;function Gh(t,e){if(!t||Kh)return"";Kh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Kh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ga(t):""}function yS(t){switch(t.tag){case 5:return ga(t.type);case 16:return ga("Lazy");case 13:return ga("Suspense");case 19:return ga("SuspenseList");case 0:case 2:case 15:return t=Gh(t.type,!1),t;case 11:return t=Gh(t.type.render,!1),t;case 1:return t=Gh(t.type,!0),t;default:return""}}function Wd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case bs:return"Fragment";case Os:return"Portal";case $d:return"Profiler";case Ip:return"StrictMode";case Bd:return"Suspense";case Hd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case d0:return(t.displayName||"Context")+".Consumer";case h0:return(t._context.displayName||"Context")+".Provider";case Sp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Rp:return e=t.displayName||null,e!==null?e:Wd(t.type)||"Memo";case Kr:e=t._payload,t=t._init;try{return Wd(t(e))}catch{}}return null}function vS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Wd(e);case 8:return e===Ip?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function _i(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function p0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function _S(t){var e=p0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function iu(t){t._valueTracker||(t._valueTracker=_S(t))}function m0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=p0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Zu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function qd(t,e){var n=e.checked;return Xe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function qg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=_i(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function g0(t,e){e=e.checked,e!=null&&Tp(t,"checked",e,!1)}function Kd(t,e){g0(t,e);var n=_i(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Gd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Gd(t,e.type,_i(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Kg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Gd(t,e,n){(e!=="number"||Zu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ya=Array.isArray;function Gs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+_i(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Qd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(H(91));return Xe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Gg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(H(92));if(ya(n)){if(1<n.length)throw Error(H(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:_i(n)}}function y0(t,e){var n=_i(e.value),r=_i(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Qg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function v0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Yd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?v0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var su,_0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(su=su||document.createElement("div"),su.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=su.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Wa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ka={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},wS=["Webkit","ms","Moz","O"];Object.keys(ka).forEach(function(t){wS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ka[e]=ka[t]})});function w0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ka.hasOwnProperty(t)&&ka[t]?(""+e).trim():e+"px"}function E0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=w0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var ES=Xe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xd(t,e){if(e){if(ES[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(H(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(H(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(H(61))}if(e.style!=null&&typeof e.style!="object")throw Error(H(62))}}function Jd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zd=null;function Ap(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ef=null,Qs=null,Ys=null;function Yg(t){if(t=Sl(t)){if(typeof ef!="function")throw Error(H(280));var e=t.stateNode;e&&(e=Yc(e),ef(t.stateNode,t.type,e))}}function T0(t){Qs?Ys?Ys.push(t):Ys=[t]:Qs=t}function I0(){if(Qs){var t=Qs,e=Ys;if(Ys=Qs=null,Yg(t),e)for(t=0;t<e.length;t++)Yg(e[t])}}function S0(t,e){return t(e)}function R0(){}var Qh=!1;function A0(t,e,n){if(Qh)return t(e,n);Qh=!0;try{return S0(t,e,n)}finally{Qh=!1,(Qs!==null||Ys!==null)&&(R0(),I0())}}function qa(t,e){var n=t.stateNode;if(n===null)return null;var r=Yc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(H(231,e,typeof n));return n}var tf=!1;if(Pr)try{var sa={};Object.defineProperty(sa,"passive",{get:function(){tf=!0}}),window.addEventListener("test",sa,sa),window.removeEventListener("test",sa,sa)}catch{tf=!1}function TS(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var xa=!1,ec=null,tc=!1,nf=null,IS={onError:function(t){xa=!0,ec=t}};function SS(t,e,n,r,i,s,o,l,u){xa=!1,ec=null,TS.apply(IS,arguments)}function RS(t,e,n,r,i,s,o,l,u){if(SS.apply(this,arguments),xa){if(xa){var c=ec;xa=!1,ec=null}else throw Error(H(198));tc||(tc=!0,nf=c)}}function fs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function P0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Xg(t){if(fs(t)!==t)throw Error(H(188))}function AS(t){var e=t.alternate;if(!e){if(e=fs(t),e===null)throw Error(H(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Xg(i),t;if(s===r)return Xg(i),e;s=s.sibling}throw Error(H(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(H(189))}}if(n.alternate!==r)throw Error(H(190))}if(n.tag!==3)throw Error(H(188));return n.stateNode.current===n?t:e}function C0(t){return t=AS(t),t!==null?k0(t):null}function k0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=k0(t);if(e!==null)return e;t=t.sibling}return null}var x0=fn.unstable_scheduleCallback,Jg=fn.unstable_cancelCallback,PS=fn.unstable_shouldYield,CS=fn.unstable_requestPaint,rt=fn.unstable_now,kS=fn.unstable_getCurrentPriorityLevel,Pp=fn.unstable_ImmediatePriority,N0=fn.unstable_UserBlockingPriority,nc=fn.unstable_NormalPriority,xS=fn.unstable_LowPriority,D0=fn.unstable_IdlePriority,qc=null,tr=null;function NS(t){if(tr&&typeof tr.onCommitFiberRoot=="function")try{tr.onCommitFiberRoot(qc,t,void 0,(t.current.flags&128)===128)}catch{}}var Vn=Math.clz32?Math.clz32:bS,DS=Math.log,OS=Math.LN2;function bS(t){return t>>>=0,t===0?32:31-(DS(t)/OS|0)|0}var ou=64,au=4194304;function va(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function rc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=va(l):(s&=o,s!==0&&(r=va(s)))}else o=n&~i,o!==0?r=va(o):s!==0&&(r=va(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Vn(e),i=1<<n,r|=t[n],e&=~i;return r}function LS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function MS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Vn(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=LS(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function rf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function O0(){var t=ou;return ou<<=1,!(ou&4194240)&&(ou=64),t}function Yh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Tl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Vn(e),t[e]=n}function VS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Vn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Cp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Vn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var xe=0;function b0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var L0,kp,M0,V0,F0,sf=!1,lu=[],si=null,oi=null,ai=null,Ka=new Map,Ga=new Map,Qr=[],FS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zg(t,e){switch(t){case"focusin":case"focusout":si=null;break;case"dragenter":case"dragleave":oi=null;break;case"mouseover":case"mouseout":ai=null;break;case"pointerover":case"pointerout":Ka.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ga.delete(e.pointerId)}}function oa(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Sl(e),e!==null&&kp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function US(t,e,n,r,i){switch(e){case"focusin":return si=oa(si,t,e,n,r,i),!0;case"dragenter":return oi=oa(oi,t,e,n,r,i),!0;case"mouseover":return ai=oa(ai,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ka.set(s,oa(Ka.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ga.set(s,oa(Ga.get(s)||null,t,e,n,r,i)),!0}return!1}function U0(t){var e=zi(t.target);if(e!==null){var n=fs(e);if(n!==null){if(e=n.tag,e===13){if(e=P0(n),e!==null){t.blockedOn=e,F0(t.priority,function(){M0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Cu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=of(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Zd=r,n.target.dispatchEvent(r),Zd=null}else return e=Sl(n),e!==null&&kp(e),t.blockedOn=n,!1;e.shift()}return!0}function ey(t,e,n){Cu(t)&&n.delete(e)}function jS(){sf=!1,si!==null&&Cu(si)&&(si=null),oi!==null&&Cu(oi)&&(oi=null),ai!==null&&Cu(ai)&&(ai=null),Ka.forEach(ey),Ga.forEach(ey)}function aa(t,e){t.blockedOn===e&&(t.blockedOn=null,sf||(sf=!0,fn.unstable_scheduleCallback(fn.unstable_NormalPriority,jS)))}function Qa(t){function e(i){return aa(i,t)}if(0<lu.length){aa(lu[0],t);for(var n=1;n<lu.length;n++){var r=lu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(si!==null&&aa(si,t),oi!==null&&aa(oi,t),ai!==null&&aa(ai,t),Ka.forEach(e),Ga.forEach(e),n=0;n<Qr.length;n++)r=Qr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Qr.length&&(n=Qr[0],n.blockedOn===null);)U0(n),n.blockedOn===null&&Qr.shift()}var Xs=br.ReactCurrentBatchConfig,ic=!0;function zS(t,e,n,r){var i=xe,s=Xs.transition;Xs.transition=null;try{xe=1,xp(t,e,n,r)}finally{xe=i,Xs.transition=s}}function $S(t,e,n,r){var i=xe,s=Xs.transition;Xs.transition=null;try{xe=4,xp(t,e,n,r)}finally{xe=i,Xs.transition=s}}function xp(t,e,n,r){if(ic){var i=of(t,e,n,r);if(i===null)od(t,e,r,sc,n),Zg(t,r);else if(US(i,t,e,n,r))r.stopPropagation();else if(Zg(t,r),e&4&&-1<FS.indexOf(t)){for(;i!==null;){var s=Sl(i);if(s!==null&&L0(s),s=of(t,e,n,r),s===null&&od(t,e,r,sc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else od(t,e,r,null,n)}}var sc=null;function of(t,e,n,r){if(sc=null,t=Ap(r),t=zi(t),t!==null)if(e=fs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=P0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return sc=t,null}function j0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(kS()){case Pp:return 1;case N0:return 4;case nc:case xS:return 16;case D0:return 536870912;default:return 16}default:return 16}}var ti=null,Np=null,ku=null;function z0(){if(ku)return ku;var t,e=Np,n=e.length,r,i="value"in ti?ti.value:ti.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return ku=i.slice(t,1<r?1-r:void 0)}function xu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function uu(){return!0}function ty(){return!1}function mn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?uu:ty,this.isPropagationStopped=ty,this}return Xe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=uu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=uu)},persist:function(){},isPersistent:uu}),e}var ko={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Dp=mn(ko),Il=Xe({},ko,{view:0,detail:0}),BS=mn(Il),Xh,Jh,la,Kc=Xe({},Il,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Op,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==la&&(la&&t.type==="mousemove"?(Xh=t.screenX-la.screenX,Jh=t.screenY-la.screenY):Jh=Xh=0,la=t),Xh)},movementY:function(t){return"movementY"in t?t.movementY:Jh}}),ny=mn(Kc),HS=Xe({},Kc,{dataTransfer:0}),WS=mn(HS),qS=Xe({},Il,{relatedTarget:0}),Zh=mn(qS),KS=Xe({},ko,{animationName:0,elapsedTime:0,pseudoElement:0}),GS=mn(KS),QS=Xe({},ko,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),YS=mn(QS),XS=Xe({},ko,{data:0}),ry=mn(XS),JS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ZS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},eR={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tR(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=eR[t])?!!e[t]:!1}function Op(){return tR}var nR=Xe({},Il,{key:function(t){if(t.key){var e=JS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=xu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ZS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Op,charCode:function(t){return t.type==="keypress"?xu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?xu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),rR=mn(nR),iR=Xe({},Kc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),iy=mn(iR),sR=Xe({},Il,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Op}),oR=mn(sR),aR=Xe({},ko,{propertyName:0,elapsedTime:0,pseudoElement:0}),lR=mn(aR),uR=Xe({},Kc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),cR=mn(uR),hR=[9,13,27,32],bp=Pr&&"CompositionEvent"in window,Na=null;Pr&&"documentMode"in document&&(Na=document.documentMode);var dR=Pr&&"TextEvent"in window&&!Na,$0=Pr&&(!bp||Na&&8<Na&&11>=Na),sy=" ",oy=!1;function B0(t,e){switch(t){case"keyup":return hR.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function H0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ls=!1;function fR(t,e){switch(t){case"compositionend":return H0(e);case"keypress":return e.which!==32?null:(oy=!0,sy);case"textInput":return t=e.data,t===sy&&oy?null:t;default:return null}}function pR(t,e){if(Ls)return t==="compositionend"||!bp&&B0(t,e)?(t=z0(),ku=Np=ti=null,Ls=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return $0&&e.locale!=="ko"?null:e.data;default:return null}}var mR={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ay(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!mR[t.type]:e==="textarea"}function W0(t,e,n,r){T0(r),e=oc(e,"onChange"),0<e.length&&(n=new Dp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Da=null,Ya=null;function gR(t){nw(t,0)}function Gc(t){var e=Fs(t);if(m0(e))return t}function yR(t,e){if(t==="change")return e}var q0=!1;if(Pr){var ed;if(Pr){var td="oninput"in document;if(!td){var ly=document.createElement("div");ly.setAttribute("oninput","return;"),td=typeof ly.oninput=="function"}ed=td}else ed=!1;q0=ed&&(!document.documentMode||9<document.documentMode)}function uy(){Da&&(Da.detachEvent("onpropertychange",K0),Ya=Da=null)}function K0(t){if(t.propertyName==="value"&&Gc(Ya)){var e=[];W0(e,Ya,t,Ap(t)),A0(gR,e)}}function vR(t,e,n){t==="focusin"?(uy(),Da=e,Ya=n,Da.attachEvent("onpropertychange",K0)):t==="focusout"&&uy()}function _R(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Gc(Ya)}function wR(t,e){if(t==="click")return Gc(e)}function ER(t,e){if(t==="input"||t==="change")return Gc(e)}function TR(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var jn=typeof Object.is=="function"?Object.is:TR;function Xa(t,e){if(jn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!zd.call(e,i)||!jn(t[i],e[i]))return!1}return!0}function cy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function hy(t,e){var n=cy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=cy(n)}}function G0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?G0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Q0(){for(var t=window,e=Zu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Zu(t.document)}return e}function Lp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function IR(t){var e=Q0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&G0(n.ownerDocument.documentElement,n)){if(r!==null&&Lp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=hy(n,s);var o=hy(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var SR=Pr&&"documentMode"in document&&11>=document.documentMode,Ms=null,af=null,Oa=null,lf=!1;function dy(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;lf||Ms==null||Ms!==Zu(r)||(r=Ms,"selectionStart"in r&&Lp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Oa&&Xa(Oa,r)||(Oa=r,r=oc(af,"onSelect"),0<r.length&&(e=new Dp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ms)))}function cu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Vs={animationend:cu("Animation","AnimationEnd"),animationiteration:cu("Animation","AnimationIteration"),animationstart:cu("Animation","AnimationStart"),transitionend:cu("Transition","TransitionEnd")},nd={},Y0={};Pr&&(Y0=document.createElement("div").style,"AnimationEvent"in window||(delete Vs.animationend.animation,delete Vs.animationiteration.animation,delete Vs.animationstart.animation),"TransitionEvent"in window||delete Vs.transitionend.transition);function Qc(t){if(nd[t])return nd[t];if(!Vs[t])return t;var e=Vs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Y0)return nd[t]=e[n];return t}var X0=Qc("animationend"),J0=Qc("animationiteration"),Z0=Qc("animationstart"),ew=Qc("transitionend"),tw=new Map,fy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Si(t,e){tw.set(t,e),ds(e,[t])}for(var rd=0;rd<fy.length;rd++){var id=fy[rd],RR=id.toLowerCase(),AR=id[0].toUpperCase()+id.slice(1);Si(RR,"on"+AR)}Si(X0,"onAnimationEnd");Si(J0,"onAnimationIteration");Si(Z0,"onAnimationStart");Si("dblclick","onDoubleClick");Si("focusin","onFocus");Si("focusout","onBlur");Si(ew,"onTransitionEnd");io("onMouseEnter",["mouseout","mouseover"]);io("onMouseLeave",["mouseout","mouseover"]);io("onPointerEnter",["pointerout","pointerover"]);io("onPointerLeave",["pointerout","pointerover"]);ds("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ds("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ds("onBeforeInput",["compositionend","keypress","textInput","paste"]);ds("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ds("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ds("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _a="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),PR=new Set("cancel close invalid load scroll toggle".split(" ").concat(_a));function py(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,RS(r,e,void 0,t),t.currentTarget=null}function nw(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;py(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;py(i,l,c),s=u}}}if(tc)throw t=nf,tc=!1,nf=null,t}function je(t,e){var n=e[ff];n===void 0&&(n=e[ff]=new Set);var r=t+"__bubble";n.has(r)||(rw(e,t,2,!1),n.add(r))}function sd(t,e,n){var r=0;e&&(r|=4),rw(n,t,r,e)}var hu="_reactListening"+Math.random().toString(36).slice(2);function Ja(t){if(!t[hu]){t[hu]=!0,c0.forEach(function(n){n!=="selectionchange"&&(PR.has(n)||sd(n,!1,t),sd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[hu]||(e[hu]=!0,sd("selectionchange",!1,e))}}function rw(t,e,n,r){switch(j0(e)){case 1:var i=zS;break;case 4:i=$S;break;default:i=xp}n=i.bind(null,e,n,t),i=void 0,!tf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function od(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=zi(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}A0(function(){var c=s,d=Ap(n),f=[];e:{var m=tw.get(t);if(m!==void 0){var E=Dp,R=t;switch(t){case"keypress":if(xu(n)===0)break e;case"keydown":case"keyup":E=rR;break;case"focusin":R="focus",E=Zh;break;case"focusout":R="blur",E=Zh;break;case"beforeblur":case"afterblur":E=Zh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=ny;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=WS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=oR;break;case X0:case J0:case Z0:E=GS;break;case ew:E=lR;break;case"scroll":E=BS;break;case"wheel":E=cR;break;case"copy":case"cut":case"paste":E=YS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=iy}var P=(e&4)!==0,O=!P&&t==="scroll",T=P?m!==null?m+"Capture":null:m;P=[];for(var v=c,S;v!==null;){S=v;var b=S.stateNode;if(S.tag===5&&b!==null&&(S=b,T!==null&&(b=qa(v,T),b!=null&&P.push(Za(v,b,S)))),O)break;v=v.return}0<P.length&&(m=new E(m,R,null,n,d),f.push({event:m,listeners:P}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",E=t==="mouseout"||t==="pointerout",m&&n!==Zd&&(R=n.relatedTarget||n.fromElement)&&(zi(R)||R[Cr]))break e;if((E||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,E?(R=n.relatedTarget||n.toElement,E=c,R=R?zi(R):null,R!==null&&(O=fs(R),R!==O||R.tag!==5&&R.tag!==6)&&(R=null)):(E=null,R=c),E!==R)){if(P=ny,b="onMouseLeave",T="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(P=iy,b="onPointerLeave",T="onPointerEnter",v="pointer"),O=E==null?m:Fs(E),S=R==null?m:Fs(R),m=new P(b,v+"leave",E,n,d),m.target=O,m.relatedTarget=S,b=null,zi(d)===c&&(P=new P(T,v+"enter",R,n,d),P.target=S,P.relatedTarget=O,b=P),O=b,E&&R)t:{for(P=E,T=R,v=0,S=P;S;S=Ps(S))v++;for(S=0,b=T;b;b=Ps(b))S++;for(;0<v-S;)P=Ps(P),v--;for(;0<S-v;)T=Ps(T),S--;for(;v--;){if(P===T||T!==null&&P===T.alternate)break t;P=Ps(P),T=Ps(T)}P=null}else P=null;E!==null&&my(f,m,E,P,!1),R!==null&&O!==null&&my(f,O,R,P,!0)}}e:{if(m=c?Fs(c):window,E=m.nodeName&&m.nodeName.toLowerCase(),E==="select"||E==="input"&&m.type==="file")var F=yR;else if(ay(m))if(q0)F=ER;else{F=_R;var C=vR}else(E=m.nodeName)&&E.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(F=wR);if(F&&(F=F(t,c))){W0(f,F,n,d);break e}C&&C(t,m,c),t==="focusout"&&(C=m._wrapperState)&&C.controlled&&m.type==="number"&&Gd(m,"number",m.value)}switch(C=c?Fs(c):window,t){case"focusin":(ay(C)||C.contentEditable==="true")&&(Ms=C,af=c,Oa=null);break;case"focusout":Oa=af=Ms=null;break;case"mousedown":lf=!0;break;case"contextmenu":case"mouseup":case"dragend":lf=!1,dy(f,n,d);break;case"selectionchange":if(SR)break;case"keydown":case"keyup":dy(f,n,d)}var _;if(bp)e:{switch(t){case"compositionstart":var g="onCompositionStart";break e;case"compositionend":g="onCompositionEnd";break e;case"compositionupdate":g="onCompositionUpdate";break e}g=void 0}else Ls?B0(t,n)&&(g="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(g="onCompositionStart");g&&($0&&n.locale!=="ko"&&(Ls||g!=="onCompositionStart"?g==="onCompositionEnd"&&Ls&&(_=z0()):(ti=d,Np="value"in ti?ti.value:ti.textContent,Ls=!0)),C=oc(c,g),0<C.length&&(g=new ry(g,t,null,n,d),f.push({event:g,listeners:C}),_?g.data=_:(_=H0(n),_!==null&&(g.data=_)))),(_=dR?fR(t,n):pR(t,n))&&(c=oc(c,"onBeforeInput"),0<c.length&&(d=new ry("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=_))}nw(f,e)})}function Za(t,e,n){return{instance:t,listener:e,currentTarget:n}}function oc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=qa(t,n),s!=null&&r.unshift(Za(t,s,i)),s=qa(t,e),s!=null&&r.push(Za(t,s,i))),t=t.return}return r}function Ps(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function my(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=qa(n,s),u!=null&&o.unshift(Za(n,u,l))):i||(u=qa(n,s),u!=null&&o.push(Za(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var CR=/\r\n?/g,kR=/\u0000|\uFFFD/g;function gy(t){return(typeof t=="string"?t:""+t).replace(CR,`
`).replace(kR,"")}function du(t,e,n){if(e=gy(e),gy(t)!==e&&n)throw Error(H(425))}function ac(){}var uf=null,cf=null;function hf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var df=typeof setTimeout=="function"?setTimeout:void 0,xR=typeof clearTimeout=="function"?clearTimeout:void 0,yy=typeof Promise=="function"?Promise:void 0,NR=typeof queueMicrotask=="function"?queueMicrotask:typeof yy<"u"?function(t){return yy.resolve(null).then(t).catch(DR)}:df;function DR(t){setTimeout(function(){throw t})}function ad(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Qa(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Qa(e)}function li(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function vy(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var xo=Math.random().toString(36).slice(2),Zn="__reactFiber$"+xo,el="__reactProps$"+xo,Cr="__reactContainer$"+xo,ff="__reactEvents$"+xo,OR="__reactListeners$"+xo,bR="__reactHandles$"+xo;function zi(t){var e=t[Zn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Cr]||n[Zn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=vy(t);t!==null;){if(n=t[Zn])return n;t=vy(t)}return e}t=n,n=t.parentNode}return null}function Sl(t){return t=t[Zn]||t[Cr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Fs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(H(33))}function Yc(t){return t[el]||null}var pf=[],Us=-1;function Ri(t){return{current:t}}function Be(t){0>Us||(t.current=pf[Us],pf[Us]=null,Us--)}function Ve(t,e){Us++,pf[Us]=t.current,t.current=e}var wi={},Ht=Ri(wi),en=Ri(!1),Zi=wi;function so(t,e){var n=t.type.contextTypes;if(!n)return wi;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function tn(t){return t=t.childContextTypes,t!=null}function lc(){Be(en),Be(Ht)}function _y(t,e,n){if(Ht.current!==wi)throw Error(H(168));Ve(Ht,e),Ve(en,n)}function iw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(H(108,vS(t)||"Unknown",i));return Xe({},n,r)}function uc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||wi,Zi=Ht.current,Ve(Ht,t),Ve(en,en.current),!0}function wy(t,e,n){var r=t.stateNode;if(!r)throw Error(H(169));n?(t=iw(t,e,Zi),r.__reactInternalMemoizedMergedChildContext=t,Be(en),Be(Ht),Ve(Ht,t)):Be(en),Ve(en,n)}var vr=null,Xc=!1,ld=!1;function sw(t){vr===null?vr=[t]:vr.push(t)}function LR(t){Xc=!0,sw(t)}function Ai(){if(!ld&&vr!==null){ld=!0;var t=0,e=xe;try{var n=vr;for(xe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}vr=null,Xc=!1}catch(i){throw vr!==null&&(vr=vr.slice(t+1)),x0(Pp,Ai),i}finally{xe=e,ld=!1}}return null}var js=[],zs=0,cc=null,hc=0,vn=[],_n=0,es=null,_r=1,wr="";function Vi(t,e){js[zs++]=hc,js[zs++]=cc,cc=t,hc=e}function ow(t,e,n){vn[_n++]=_r,vn[_n++]=wr,vn[_n++]=es,es=t;var r=_r;t=wr;var i=32-Vn(r)-1;r&=~(1<<i),n+=1;var s=32-Vn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,_r=1<<32-Vn(e)+i|n<<i|r,wr=s+t}else _r=1<<s|n<<i|r,wr=t}function Mp(t){t.return!==null&&(Vi(t,1),ow(t,1,0))}function Vp(t){for(;t===cc;)cc=js[--zs],js[zs]=null,hc=js[--zs],js[zs]=null;for(;t===es;)es=vn[--_n],vn[_n]=null,wr=vn[--_n],vn[_n]=null,_r=vn[--_n],vn[_n]=null}var dn=null,cn=null,He=!1,Ln=null;function aw(t,e){var n=wn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Ey(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,dn=t,cn=li(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,dn=t,cn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=es!==null?{id:_r,overflow:wr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=wn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,dn=t,cn=null,!0):!1;default:return!1}}function mf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function gf(t){if(He){var e=cn;if(e){var n=e;if(!Ey(t,e)){if(mf(t))throw Error(H(418));e=li(n.nextSibling);var r=dn;e&&Ey(t,e)?aw(r,n):(t.flags=t.flags&-4097|2,He=!1,dn=t)}}else{if(mf(t))throw Error(H(418));t.flags=t.flags&-4097|2,He=!1,dn=t}}}function Ty(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;dn=t}function fu(t){if(t!==dn)return!1;if(!He)return Ty(t),He=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!hf(t.type,t.memoizedProps)),e&&(e=cn)){if(mf(t))throw lw(),Error(H(418));for(;e;)aw(t,e),e=li(e.nextSibling)}if(Ty(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(H(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){cn=li(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}cn=null}}else cn=dn?li(t.stateNode.nextSibling):null;return!0}function lw(){for(var t=cn;t;)t=li(t.nextSibling)}function oo(){cn=dn=null,He=!1}function Fp(t){Ln===null?Ln=[t]:Ln.push(t)}var MR=br.ReactCurrentBatchConfig;function ua(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(H(309));var r=n.stateNode}if(!r)throw Error(H(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(H(284));if(!n._owner)throw Error(H(290,t))}return t}function pu(t,e){throw t=Object.prototype.toString.call(e),Error(H(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Iy(t){var e=t._init;return e(t._payload)}function uw(t){function e(T,v){if(t){var S=T.deletions;S===null?(T.deletions=[v],T.flags|=16):S.push(v)}}function n(T,v){if(!t)return null;for(;v!==null;)e(T,v),v=v.sibling;return null}function r(T,v){for(T=new Map;v!==null;)v.key!==null?T.set(v.key,v):T.set(v.index,v),v=v.sibling;return T}function i(T,v){return T=di(T,v),T.index=0,T.sibling=null,T}function s(T,v,S){return T.index=S,t?(S=T.alternate,S!==null?(S=S.index,S<v?(T.flags|=2,v):S):(T.flags|=2,v)):(T.flags|=1048576,v)}function o(T){return t&&T.alternate===null&&(T.flags|=2),T}function l(T,v,S,b){return v===null||v.tag!==6?(v=md(S,T.mode,b),v.return=T,v):(v=i(v,S),v.return=T,v)}function u(T,v,S,b){var F=S.type;return F===bs?d(T,v,S.props.children,b,S.key):v!==null&&(v.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Kr&&Iy(F)===v.type)?(b=i(v,S.props),b.ref=ua(T,v,S),b.return=T,b):(b=Vu(S.type,S.key,S.props,null,T.mode,b),b.ref=ua(T,v,S),b.return=T,b)}function c(T,v,S,b){return v===null||v.tag!==4||v.stateNode.containerInfo!==S.containerInfo||v.stateNode.implementation!==S.implementation?(v=gd(S,T.mode,b),v.return=T,v):(v=i(v,S.children||[]),v.return=T,v)}function d(T,v,S,b,F){return v===null||v.tag!==7?(v=Yi(S,T.mode,b,F),v.return=T,v):(v=i(v,S),v.return=T,v)}function f(T,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return v=md(""+v,T.mode,S),v.return=T,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ru:return S=Vu(v.type,v.key,v.props,null,T.mode,S),S.ref=ua(T,null,v),S.return=T,S;case Os:return v=gd(v,T.mode,S),v.return=T,v;case Kr:var b=v._init;return f(T,b(v._payload),S)}if(ya(v)||ia(v))return v=Yi(v,T.mode,S,null),v.return=T,v;pu(T,v)}return null}function m(T,v,S,b){var F=v!==null?v.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return F!==null?null:l(T,v,""+S,b);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ru:return S.key===F?u(T,v,S,b):null;case Os:return S.key===F?c(T,v,S,b):null;case Kr:return F=S._init,m(T,v,F(S._payload),b)}if(ya(S)||ia(S))return F!==null?null:d(T,v,S,b,null);pu(T,S)}return null}function E(T,v,S,b,F){if(typeof b=="string"&&b!==""||typeof b=="number")return T=T.get(S)||null,l(v,T,""+b,F);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case ru:return T=T.get(b.key===null?S:b.key)||null,u(v,T,b,F);case Os:return T=T.get(b.key===null?S:b.key)||null,c(v,T,b,F);case Kr:var C=b._init;return E(T,v,S,C(b._payload),F)}if(ya(b)||ia(b))return T=T.get(S)||null,d(v,T,b,F,null);pu(v,b)}return null}function R(T,v,S,b){for(var F=null,C=null,_=v,g=v=0,w=null;_!==null&&g<S.length;g++){_.index>g?(w=_,_=null):w=_.sibling;var I=m(T,_,S[g],b);if(I===null){_===null&&(_=w);break}t&&_&&I.alternate===null&&e(T,_),v=s(I,v,g),C===null?F=I:C.sibling=I,C=I,_=w}if(g===S.length)return n(T,_),He&&Vi(T,g),F;if(_===null){for(;g<S.length;g++)_=f(T,S[g],b),_!==null&&(v=s(_,v,g),C===null?F=_:C.sibling=_,C=_);return He&&Vi(T,g),F}for(_=r(T,_);g<S.length;g++)w=E(_,T,g,S[g],b),w!==null&&(t&&w.alternate!==null&&_.delete(w.key===null?g:w.key),v=s(w,v,g),C===null?F=w:C.sibling=w,C=w);return t&&_.forEach(function(k){return e(T,k)}),He&&Vi(T,g),F}function P(T,v,S,b){var F=ia(S);if(typeof F!="function")throw Error(H(150));if(S=F.call(S),S==null)throw Error(H(151));for(var C=F=null,_=v,g=v=0,w=null,I=S.next();_!==null&&!I.done;g++,I=S.next()){_.index>g?(w=_,_=null):w=_.sibling;var k=m(T,_,I.value,b);if(k===null){_===null&&(_=w);break}t&&_&&k.alternate===null&&e(T,_),v=s(k,v,g),C===null?F=k:C.sibling=k,C=k,_=w}if(I.done)return n(T,_),He&&Vi(T,g),F;if(_===null){for(;!I.done;g++,I=S.next())I=f(T,I.value,b),I!==null&&(v=s(I,v,g),C===null?F=I:C.sibling=I,C=I);return He&&Vi(T,g),F}for(_=r(T,_);!I.done;g++,I=S.next())I=E(_,T,g,I.value,b),I!==null&&(t&&I.alternate!==null&&_.delete(I.key===null?g:I.key),v=s(I,v,g),C===null?F=I:C.sibling=I,C=I);return t&&_.forEach(function(N){return e(T,N)}),He&&Vi(T,g),F}function O(T,v,S,b){if(typeof S=="object"&&S!==null&&S.type===bs&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case ru:e:{for(var F=S.key,C=v;C!==null;){if(C.key===F){if(F=S.type,F===bs){if(C.tag===7){n(T,C.sibling),v=i(C,S.props.children),v.return=T,T=v;break e}}else if(C.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Kr&&Iy(F)===C.type){n(T,C.sibling),v=i(C,S.props),v.ref=ua(T,C,S),v.return=T,T=v;break e}n(T,C);break}else e(T,C);C=C.sibling}S.type===bs?(v=Yi(S.props.children,T.mode,b,S.key),v.return=T,T=v):(b=Vu(S.type,S.key,S.props,null,T.mode,b),b.ref=ua(T,v,S),b.return=T,T=b)}return o(T);case Os:e:{for(C=S.key;v!==null;){if(v.key===C)if(v.tag===4&&v.stateNode.containerInfo===S.containerInfo&&v.stateNode.implementation===S.implementation){n(T,v.sibling),v=i(v,S.children||[]),v.return=T,T=v;break e}else{n(T,v);break}else e(T,v);v=v.sibling}v=gd(S,T.mode,b),v.return=T,T=v}return o(T);case Kr:return C=S._init,O(T,v,C(S._payload),b)}if(ya(S))return R(T,v,S,b);if(ia(S))return P(T,v,S,b);pu(T,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,v!==null&&v.tag===6?(n(T,v.sibling),v=i(v,S),v.return=T,T=v):(n(T,v),v=md(S,T.mode,b),v.return=T,T=v),o(T)):n(T,v)}return O}var ao=uw(!0),cw=uw(!1),dc=Ri(null),fc=null,$s=null,Up=null;function jp(){Up=$s=fc=null}function zp(t){var e=dc.current;Be(dc),t._currentValue=e}function yf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Js(t,e){fc=t,Up=$s=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Zt=!0),t.firstContext=null)}function Tn(t){var e=t._currentValue;if(Up!==t)if(t={context:t,memoizedValue:e,next:null},$s===null){if(fc===null)throw Error(H(308));$s=t,fc.dependencies={lanes:0,firstContext:t}}else $s=$s.next=t;return e}var $i=null;function $p(t){$i===null?$i=[t]:$i.push(t)}function hw(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,$p(e)):(n.next=i.next,i.next=n),e.interleaved=n,kr(t,r)}function kr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Gr=!1;function Bp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function dw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Sr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ui(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Ie&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,kr(t,n)}return i=r.interleaved,i===null?(e.next=e,$p(r)):(e.next=i.next,i.next=e),r.interleaved=e,kr(t,n)}function Nu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Cp(t,n)}}function Sy(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function pc(t,e,n,r){var i=t.updateQueue;Gr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=u))}if(s!==null){var f=i.baseState;o=0,d=c=u=null,l=s;do{var m=l.lane,E=l.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:E,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var R=t,P=l;switch(m=e,E=n,P.tag){case 1:if(R=P.payload,typeof R=="function"){f=R.call(E,f,m);break e}f=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=P.payload,m=typeof R=="function"?R.call(E,f,m):R,m==null)break e;f=Xe({},f,m);break e;case 2:Gr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else E={eventTime:E,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=E,u=f):d=d.next=E,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ns|=o,t.lanes=o,t.memoizedState=f}}function Ry(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(H(191,i));i.call(r)}}}var Rl={},nr=Ri(Rl),tl=Ri(Rl),nl=Ri(Rl);function Bi(t){if(t===Rl)throw Error(H(174));return t}function Hp(t,e){switch(Ve(nl,e),Ve(tl,t),Ve(nr,Rl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Yd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Yd(e,t)}Be(nr),Ve(nr,e)}function lo(){Be(nr),Be(tl),Be(nl)}function fw(t){Bi(nl.current);var e=Bi(nr.current),n=Yd(e,t.type);e!==n&&(Ve(tl,t),Ve(nr,n))}function Wp(t){tl.current===t&&(Be(nr),Be(tl))}var Qe=Ri(0);function mc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ud=[];function qp(){for(var t=0;t<ud.length;t++)ud[t]._workInProgressVersionPrimary=null;ud.length=0}var Du=br.ReactCurrentDispatcher,cd=br.ReactCurrentBatchConfig,ts=0,Ye=null,ft=null,yt=null,gc=!1,ba=!1,rl=0,VR=0;function Mt(){throw Error(H(321))}function Kp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!jn(t[n],e[n]))return!1;return!0}function Gp(t,e,n,r,i,s){if(ts=s,Ye=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Du.current=t===null||t.memoizedState===null?zR:$R,t=n(r,i),ba){s=0;do{if(ba=!1,rl=0,25<=s)throw Error(H(301));s+=1,yt=ft=null,e.updateQueue=null,Du.current=BR,t=n(r,i)}while(ba)}if(Du.current=yc,e=ft!==null&&ft.next!==null,ts=0,yt=ft=Ye=null,gc=!1,e)throw Error(H(300));return t}function Qp(){var t=rl!==0;return rl=0,t}function Xn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yt===null?Ye.memoizedState=yt=t:yt=yt.next=t,yt}function In(){if(ft===null){var t=Ye.alternate;t=t!==null?t.memoizedState:null}else t=ft.next;var e=yt===null?Ye.memoizedState:yt.next;if(e!==null)yt=e,ft=t;else{if(t===null)throw Error(H(310));ft=t,t={memoizedState:ft.memoizedState,baseState:ft.baseState,baseQueue:ft.baseQueue,queue:ft.queue,next:null},yt===null?Ye.memoizedState=yt=t:yt=yt.next=t}return yt}function il(t,e){return typeof e=="function"?e(t):e}function hd(t){var e=In(),n=e.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=t;var r=ft,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var d=c.lane;if((ts&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=f,o=r):u=u.next=f,Ye.lanes|=d,ns|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,jn(r,e.memoizedState)||(Zt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ye.lanes|=s,ns|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function dd(t){var e=In(),n=e.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);jn(s,e.memoizedState)||(Zt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function pw(){}function mw(t,e){var n=Ye,r=In(),i=e(),s=!jn(r.memoizedState,i);if(s&&(r.memoizedState=i,Zt=!0),r=r.queue,Yp(vw.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||yt!==null&&yt.memoizedState.tag&1){if(n.flags|=2048,sl(9,yw.bind(null,n,r,i,e),void 0,null),_t===null)throw Error(H(349));ts&30||gw(n,e,i)}return i}function gw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ye.updateQueue,e===null?(e={lastEffect:null,stores:null},Ye.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function yw(t,e,n,r){e.value=n,e.getSnapshot=r,_w(e)&&ww(t)}function vw(t,e,n){return n(function(){_w(e)&&ww(t)})}function _w(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!jn(t,n)}catch{return!0}}function ww(t){var e=kr(t,1);e!==null&&Fn(e,t,1,-1)}function Ay(t){var e=Xn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:il,lastRenderedState:t},e.queue=t,t=t.dispatch=jR.bind(null,Ye,t),[e.memoizedState,t]}function sl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ye.updateQueue,e===null?(e={lastEffect:null,stores:null},Ye.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Ew(){return In().memoizedState}function Ou(t,e,n,r){var i=Xn();Ye.flags|=t,i.memoizedState=sl(1|e,n,void 0,r===void 0?null:r)}function Jc(t,e,n,r){var i=In();r=r===void 0?null:r;var s=void 0;if(ft!==null){var o=ft.memoizedState;if(s=o.destroy,r!==null&&Kp(r,o.deps)){i.memoizedState=sl(e,n,s,r);return}}Ye.flags|=t,i.memoizedState=sl(1|e,n,s,r)}function Py(t,e){return Ou(8390656,8,t,e)}function Yp(t,e){return Jc(2048,8,t,e)}function Tw(t,e){return Jc(4,2,t,e)}function Iw(t,e){return Jc(4,4,t,e)}function Sw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Rw(t,e,n){return n=n!=null?n.concat([t]):null,Jc(4,4,Sw.bind(null,e,t),n)}function Xp(){}function Aw(t,e){var n=In();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Kp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Pw(t,e){var n=In();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Kp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Cw(t,e,n){return ts&21?(jn(n,e)||(n=O0(),Ye.lanes|=n,ns|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Zt=!0),t.memoizedState=n)}function FR(t,e){var n=xe;xe=n!==0&&4>n?n:4,t(!0);var r=cd.transition;cd.transition={};try{t(!1),e()}finally{xe=n,cd.transition=r}}function kw(){return In().memoizedState}function UR(t,e,n){var r=hi(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},xw(t))Nw(e,n);else if(n=hw(t,e,n,r),n!==null){var i=Kt();Fn(n,t,r,i),Dw(n,e,r)}}function jR(t,e,n){var r=hi(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(xw(t))Nw(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,jn(l,o)){var u=e.interleaved;u===null?(i.next=i,$p(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=hw(t,e,i,r),n!==null&&(i=Kt(),Fn(n,t,r,i),Dw(n,e,r))}}function xw(t){var e=t.alternate;return t===Ye||e!==null&&e===Ye}function Nw(t,e){ba=gc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Dw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Cp(t,n)}}var yc={readContext:Tn,useCallback:Mt,useContext:Mt,useEffect:Mt,useImperativeHandle:Mt,useInsertionEffect:Mt,useLayoutEffect:Mt,useMemo:Mt,useReducer:Mt,useRef:Mt,useState:Mt,useDebugValue:Mt,useDeferredValue:Mt,useTransition:Mt,useMutableSource:Mt,useSyncExternalStore:Mt,useId:Mt,unstable_isNewReconciler:!1},zR={readContext:Tn,useCallback:function(t,e){return Xn().memoizedState=[t,e===void 0?null:e],t},useContext:Tn,useEffect:Py,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ou(4194308,4,Sw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ou(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ou(4,2,t,e)},useMemo:function(t,e){var n=Xn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Xn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=UR.bind(null,Ye,t),[r.memoizedState,t]},useRef:function(t){var e=Xn();return t={current:t},e.memoizedState=t},useState:Ay,useDebugValue:Xp,useDeferredValue:function(t){return Xn().memoizedState=t},useTransition:function(){var t=Ay(!1),e=t[0];return t=FR.bind(null,t[1]),Xn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ye,i=Xn();if(He){if(n===void 0)throw Error(H(407));n=n()}else{if(n=e(),_t===null)throw Error(H(349));ts&30||gw(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Py(vw.bind(null,r,s,t),[t]),r.flags|=2048,sl(9,yw.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Xn(),e=_t.identifierPrefix;if(He){var n=wr,r=_r;n=(r&~(1<<32-Vn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=rl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=VR++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},$R={readContext:Tn,useCallback:Aw,useContext:Tn,useEffect:Yp,useImperativeHandle:Rw,useInsertionEffect:Tw,useLayoutEffect:Iw,useMemo:Pw,useReducer:hd,useRef:Ew,useState:function(){return hd(il)},useDebugValue:Xp,useDeferredValue:function(t){var e=In();return Cw(e,ft.memoizedState,t)},useTransition:function(){var t=hd(il)[0],e=In().memoizedState;return[t,e]},useMutableSource:pw,useSyncExternalStore:mw,useId:kw,unstable_isNewReconciler:!1},BR={readContext:Tn,useCallback:Aw,useContext:Tn,useEffect:Yp,useImperativeHandle:Rw,useInsertionEffect:Tw,useLayoutEffect:Iw,useMemo:Pw,useReducer:dd,useRef:Ew,useState:function(){return dd(il)},useDebugValue:Xp,useDeferredValue:function(t){var e=In();return ft===null?e.memoizedState=t:Cw(e,ft.memoizedState,t)},useTransition:function(){var t=dd(il)[0],e=In().memoizedState;return[t,e]},useMutableSource:pw,useSyncExternalStore:mw,useId:kw,unstable_isNewReconciler:!1};function Dn(t,e){if(t&&t.defaultProps){e=Xe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function vf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Xe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Zc={isMounted:function(t){return(t=t._reactInternals)?fs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Kt(),i=hi(t),s=Sr(r,i);s.payload=e,n!=null&&(s.callback=n),e=ui(t,s,i),e!==null&&(Fn(e,t,i,r),Nu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Kt(),i=hi(t),s=Sr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ui(t,s,i),e!==null&&(Fn(e,t,i,r),Nu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Kt(),r=hi(t),i=Sr(n,r);i.tag=2,e!=null&&(i.callback=e),e=ui(t,i,r),e!==null&&(Fn(e,t,r,n),Nu(e,t,r))}};function Cy(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Xa(n,r)||!Xa(i,s):!0}function Ow(t,e,n){var r=!1,i=wi,s=e.contextType;return typeof s=="object"&&s!==null?s=Tn(s):(i=tn(e)?Zi:Ht.current,r=e.contextTypes,s=(r=r!=null)?so(t,i):wi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Zc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function ky(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Zc.enqueueReplaceState(e,e.state,null)}function _f(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Bp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Tn(s):(s=tn(e)?Zi:Ht.current,i.context=so(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(vf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Zc.enqueueReplaceState(i,i.state,null),pc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function uo(t,e){try{var n="",r=e;do n+=yS(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function fd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function wf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var HR=typeof WeakMap=="function"?WeakMap:Map;function bw(t,e,n){n=Sr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){_c||(_c=!0,xf=r),wf(t,e)},n}function Lw(t,e,n){n=Sr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){wf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){wf(t,e),typeof r!="function"&&(ci===null?ci=new Set([this]):ci.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function xy(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new HR;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=iA.bind(null,t,e,n),e.then(t,t))}function Ny(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Dy(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Sr(-1,1),e.tag=2,ui(n,e,1))),n.lanes|=1),t)}var WR=br.ReactCurrentOwner,Zt=!1;function qt(t,e,n,r){e.child=t===null?cw(e,null,n,r):ao(e,t.child,n,r)}function Oy(t,e,n,r,i){n=n.render;var s=e.ref;return Js(e,i),r=Gp(t,e,n,r,s,i),n=Qp(),t!==null&&!Zt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,xr(t,e,i)):(He&&n&&Mp(e),e.flags|=1,qt(t,e,r,i),e.child)}function by(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!sm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Mw(t,e,s,r,i)):(t=Vu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Xa,n(o,r)&&t.ref===e.ref)return xr(t,e,i)}return e.flags|=1,t=di(s,r),t.ref=e.ref,t.return=e,e.child=t}function Mw(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Xa(s,r)&&t.ref===e.ref)if(Zt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Zt=!0);else return e.lanes=t.lanes,xr(t,e,i)}return Ef(t,e,n,r,i)}function Vw(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ve(Hs,ln),ln|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ve(Hs,ln),ln|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Ve(Hs,ln),ln|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Ve(Hs,ln),ln|=r;return qt(t,e,i,n),e.child}function Fw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ef(t,e,n,r,i){var s=tn(n)?Zi:Ht.current;return s=so(e,s),Js(e,i),n=Gp(t,e,n,r,s,i),r=Qp(),t!==null&&!Zt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,xr(t,e,i)):(He&&r&&Mp(e),e.flags|=1,qt(t,e,n,i),e.child)}function Ly(t,e,n,r,i){if(tn(n)){var s=!0;uc(e)}else s=!1;if(Js(e,i),e.stateNode===null)bu(t,e),Ow(e,n,r),_f(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Tn(c):(c=tn(n)?Zi:Ht.current,c=so(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&ky(e,o,r,c),Gr=!1;var m=e.memoizedState;o.state=m,pc(e,r,o,i),u=e.memoizedState,l!==r||m!==u||en.current||Gr?(typeof d=="function"&&(vf(e,n,d,r),u=e.memoizedState),(l=Gr||Cy(e,n,l,r,m,u,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,dw(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Dn(e.type,l),o.props=c,f=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Tn(u):(u=tn(n)?Zi:Ht.current,u=so(e,u));var E=n.getDerivedStateFromProps;(d=typeof E=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==f||m!==u)&&ky(e,o,r,u),Gr=!1,m=e.memoizedState,o.state=m,pc(e,r,o,i);var R=e.memoizedState;l!==f||m!==R||en.current||Gr?(typeof E=="function"&&(vf(e,n,E,r),R=e.memoizedState),(c=Gr||Cy(e,n,c,r,m,R,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,R,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,R,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=R),o.props=r,o.state=R,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Tf(t,e,n,r,s,i)}function Tf(t,e,n,r,i,s){Fw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&wy(e,n,!1),xr(t,e,s);r=e.stateNode,WR.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ao(e,t.child,null,s),e.child=ao(e,null,l,s)):qt(t,e,l,s),e.memoizedState=r.state,i&&wy(e,n,!0),e.child}function Uw(t){var e=t.stateNode;e.pendingContext?_y(t,e.pendingContext,e.pendingContext!==e.context):e.context&&_y(t,e.context,!1),Hp(t,e.containerInfo)}function My(t,e,n,r,i){return oo(),Fp(i),e.flags|=256,qt(t,e,n,r),e.child}var If={dehydrated:null,treeContext:null,retryLane:0};function Sf(t){return{baseLanes:t,cachePool:null,transitions:null}}function jw(t,e,n){var r=e.pendingProps,i=Qe.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ve(Qe,i&1),t===null)return gf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=nh(o,r,0,null),t=Yi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Sf(n),e.memoizedState=If,t):Jp(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return qR(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=di(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=di(l,s):(s=Yi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Sf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=If,r}return s=t.child,t=s.sibling,r=di(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Jp(t,e){return e=nh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function mu(t,e,n,r){return r!==null&&Fp(r),ao(e,t.child,null,n),t=Jp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function qR(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=fd(Error(H(422))),mu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=nh({mode:"visible",children:r.children},i,0,null),s=Yi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ao(e,t.child,null,o),e.child.memoizedState=Sf(o),e.memoizedState=If,s);if(!(e.mode&1))return mu(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(H(419)),r=fd(s,r,void 0),mu(t,e,o,r)}if(l=(o&t.childLanes)!==0,Zt||l){if(r=_t,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,kr(t,i),Fn(r,t,i,-1))}return im(),r=fd(Error(H(421))),mu(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=sA.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,cn=li(i.nextSibling),dn=e,He=!0,Ln=null,t!==null&&(vn[_n++]=_r,vn[_n++]=wr,vn[_n++]=es,_r=t.id,wr=t.overflow,es=e),e=Jp(e,r.children),e.flags|=4096,e)}function Vy(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),yf(t.return,e,n)}function pd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function zw(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(qt(t,e,r.children,n),r=Qe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Vy(t,n,e);else if(t.tag===19)Vy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ve(Qe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&mc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),pd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&mc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}pd(e,!0,n,null,s);break;case"together":pd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function bu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function xr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ns|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(H(153));if(e.child!==null){for(t=e.child,n=di(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=di(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function KR(t,e,n){switch(e.tag){case 3:Uw(e),oo();break;case 5:fw(e);break;case 1:tn(e.type)&&uc(e);break;case 4:Hp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Ve(dc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ve(Qe,Qe.current&1),e.flags|=128,null):n&e.child.childLanes?jw(t,e,n):(Ve(Qe,Qe.current&1),t=xr(t,e,n),t!==null?t.sibling:null);Ve(Qe,Qe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return zw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ve(Qe,Qe.current),r)break;return null;case 22:case 23:return e.lanes=0,Vw(t,e,n)}return xr(t,e,n)}var $w,Rf,Bw,Hw;$w=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Rf=function(){};Bw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Bi(nr.current);var s=null;switch(n){case"input":i=qd(t,i),r=qd(t,r),s=[];break;case"select":i=Xe({},i,{value:void 0}),r=Xe({},r,{value:void 0}),s=[];break;case"textarea":i=Qd(t,i),r=Qd(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ac)}Xd(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ha.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ha.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&je("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Hw=function(t,e,n,r){n!==r&&(e.flags|=4)};function ca(t,e){if(!He)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Vt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function GR(t,e,n){var r=e.pendingProps;switch(Vp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vt(e),null;case 1:return tn(e.type)&&lc(),Vt(e),null;case 3:return r=e.stateNode,lo(),Be(en),Be(Ht),qp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(fu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ln!==null&&(Of(Ln),Ln=null))),Rf(t,e),Vt(e),null;case 5:Wp(e);var i=Bi(nl.current);if(n=e.type,t!==null&&e.stateNode!=null)Bw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(H(166));return Vt(e),null}if(t=Bi(nr.current),fu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Zn]=e,r[el]=s,t=(e.mode&1)!==0,n){case"dialog":je("cancel",r),je("close",r);break;case"iframe":case"object":case"embed":je("load",r);break;case"video":case"audio":for(i=0;i<_a.length;i++)je(_a[i],r);break;case"source":je("error",r);break;case"img":case"image":case"link":je("error",r),je("load",r);break;case"details":je("toggle",r);break;case"input":qg(r,s),je("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},je("invalid",r);break;case"textarea":Gg(r,s),je("invalid",r)}Xd(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&du(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&du(r.textContent,l,t),i=["children",""+l]):Ha.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&je("scroll",r)}switch(n){case"input":iu(r),Kg(r,s,!0);break;case"textarea":iu(r),Qg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ac)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=v0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Zn]=e,t[el]=r,$w(t,e,!1,!1),e.stateNode=t;e:{switch(o=Jd(n,r),n){case"dialog":je("cancel",t),je("close",t),i=r;break;case"iframe":case"object":case"embed":je("load",t),i=r;break;case"video":case"audio":for(i=0;i<_a.length;i++)je(_a[i],t);i=r;break;case"source":je("error",t),i=r;break;case"img":case"image":case"link":je("error",t),je("load",t),i=r;break;case"details":je("toggle",t),i=r;break;case"input":qg(t,r),i=qd(t,r),je("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Xe({},r,{value:void 0}),je("invalid",t);break;case"textarea":Gg(t,r),i=Qd(t,r),je("invalid",t);break;default:i=r}Xd(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?E0(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&_0(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Wa(t,u):typeof u=="number"&&Wa(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ha.hasOwnProperty(s)?u!=null&&s==="onScroll"&&je("scroll",t):u!=null&&Tp(t,s,u,o))}switch(n){case"input":iu(t),Kg(t,r,!1);break;case"textarea":iu(t),Qg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+_i(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Gs(t,!!r.multiple,s,!1):r.defaultValue!=null&&Gs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=ac)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Vt(e),null;case 6:if(t&&e.stateNode!=null)Hw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(H(166));if(n=Bi(nl.current),Bi(nr.current),fu(e)){if(r=e.stateNode,n=e.memoizedProps,r[Zn]=e,(s=r.nodeValue!==n)&&(t=dn,t!==null))switch(t.tag){case 3:du(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&du(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Zn]=e,e.stateNode=r}return Vt(e),null;case 13:if(Be(Qe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(He&&cn!==null&&e.mode&1&&!(e.flags&128))lw(),oo(),e.flags|=98560,s=!1;else if(s=fu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(H(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(H(317));s[Zn]=e}else oo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Vt(e),s=!1}else Ln!==null&&(Of(Ln),Ln=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Qe.current&1?pt===0&&(pt=3):im())),e.updateQueue!==null&&(e.flags|=4),Vt(e),null);case 4:return lo(),Rf(t,e),t===null&&Ja(e.stateNode.containerInfo),Vt(e),null;case 10:return zp(e.type._context),Vt(e),null;case 17:return tn(e.type)&&lc(),Vt(e),null;case 19:if(Be(Qe),s=e.memoizedState,s===null)return Vt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ca(s,!1);else{if(pt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=mc(t),o!==null){for(e.flags|=128,ca(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ve(Qe,Qe.current&1|2),e.child}t=t.sibling}s.tail!==null&&rt()>co&&(e.flags|=128,r=!0,ca(s,!1),e.lanes=4194304)}else{if(!r)if(t=mc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ca(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!He)return Vt(e),null}else 2*rt()-s.renderingStartTime>co&&n!==1073741824&&(e.flags|=128,r=!0,ca(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=rt(),e.sibling=null,n=Qe.current,Ve(Qe,r?n&1|2:n&1),e):(Vt(e),null);case 22:case 23:return rm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?ln&1073741824&&(Vt(e),e.subtreeFlags&6&&(e.flags|=8192)):Vt(e),null;case 24:return null;case 25:return null}throw Error(H(156,e.tag))}function QR(t,e){switch(Vp(e),e.tag){case 1:return tn(e.type)&&lc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return lo(),Be(en),Be(Ht),qp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Wp(e),null;case 13:if(Be(Qe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(H(340));oo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Be(Qe),null;case 4:return lo(),null;case 10:return zp(e.type._context),null;case 22:case 23:return rm(),null;case 24:return null;default:return null}}var gu=!1,jt=!1,YR=typeof WeakSet=="function"?WeakSet:Set,J=null;function Bs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){tt(t,e,r)}else n.current=null}function Af(t,e,n){try{n()}catch(r){tt(t,e,r)}}var Fy=!1;function XR(t,e){if(uf=ic,t=Q0(),Lp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,d=0,f=t,m=null;t:for(;;){for(var E;f!==n||i!==0&&f.nodeType!==3||(l=o+i),f!==s||r!==0&&f.nodeType!==3||(u=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(E=f.firstChild)!==null;)m=f,f=E;for(;;){if(f===t)break t;if(m===n&&++c===i&&(l=o),m===s&&++d===r&&(u=o),(E=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=E}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(cf={focusedElem:t,selectionRange:n},ic=!1,J=e;J!==null;)if(e=J,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,J=t;else for(;J!==null;){e=J;try{var R=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var P=R.memoizedProps,O=R.memoizedState,T=e.stateNode,v=T.getSnapshotBeforeUpdate(e.elementType===e.type?P:Dn(e.type,P),O);T.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(H(163))}}catch(b){tt(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,J=t;break}J=e.return}return R=Fy,Fy=!1,R}function La(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Af(e,n,s)}i=i.next}while(i!==r)}}function eh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Pf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Ww(t){var e=t.alternate;e!==null&&(t.alternate=null,Ww(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Zn],delete e[el],delete e[ff],delete e[OR],delete e[bR])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function qw(t){return t.tag===5||t.tag===3||t.tag===4}function Uy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||qw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Cf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ac));else if(r!==4&&(t=t.child,t!==null))for(Cf(t,e,n),t=t.sibling;t!==null;)Cf(t,e,n),t=t.sibling}function kf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(kf(t,e,n),t=t.sibling;t!==null;)kf(t,e,n),t=t.sibling}var It=null,On=!1;function Br(t,e,n){for(n=n.child;n!==null;)Kw(t,e,n),n=n.sibling}function Kw(t,e,n){if(tr&&typeof tr.onCommitFiberUnmount=="function")try{tr.onCommitFiberUnmount(qc,n)}catch{}switch(n.tag){case 5:jt||Bs(n,e);case 6:var r=It,i=On;It=null,Br(t,e,n),It=r,On=i,It!==null&&(On?(t=It,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):It.removeChild(n.stateNode));break;case 18:It!==null&&(On?(t=It,n=n.stateNode,t.nodeType===8?ad(t.parentNode,n):t.nodeType===1&&ad(t,n),Qa(t)):ad(It,n.stateNode));break;case 4:r=It,i=On,It=n.stateNode.containerInfo,On=!0,Br(t,e,n),It=r,On=i;break;case 0:case 11:case 14:case 15:if(!jt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Af(n,e,o),i=i.next}while(i!==r)}Br(t,e,n);break;case 1:if(!jt&&(Bs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){tt(n,e,l)}Br(t,e,n);break;case 21:Br(t,e,n);break;case 22:n.mode&1?(jt=(r=jt)||n.memoizedState!==null,Br(t,e,n),jt=r):Br(t,e,n);break;default:Br(t,e,n)}}function jy(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new YR),e.forEach(function(r){var i=oA.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Nn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:It=l.stateNode,On=!1;break e;case 3:It=l.stateNode.containerInfo,On=!0;break e;case 4:It=l.stateNode.containerInfo,On=!0;break e}l=l.return}if(It===null)throw Error(H(160));Kw(s,o,i),It=null,On=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){tt(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Gw(e,t),e=e.sibling}function Gw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Nn(e,t),Yn(t),r&4){try{La(3,t,t.return),eh(3,t)}catch(P){tt(t,t.return,P)}try{La(5,t,t.return)}catch(P){tt(t,t.return,P)}}break;case 1:Nn(e,t),Yn(t),r&512&&n!==null&&Bs(n,n.return);break;case 5:if(Nn(e,t),Yn(t),r&512&&n!==null&&Bs(n,n.return),t.flags&32){var i=t.stateNode;try{Wa(i,"")}catch(P){tt(t,t.return,P)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&g0(i,s),Jd(l,o);var c=Jd(l,s);for(o=0;o<u.length;o+=2){var d=u[o],f=u[o+1];d==="style"?E0(i,f):d==="dangerouslySetInnerHTML"?_0(i,f):d==="children"?Wa(i,f):Tp(i,d,f,c)}switch(l){case"input":Kd(i,s);break;case"textarea":y0(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var E=s.value;E!=null?Gs(i,!!s.multiple,E,!1):m!==!!s.multiple&&(s.defaultValue!=null?Gs(i,!!s.multiple,s.defaultValue,!0):Gs(i,!!s.multiple,s.multiple?[]:"",!1))}i[el]=s}catch(P){tt(t,t.return,P)}}break;case 6:if(Nn(e,t),Yn(t),r&4){if(t.stateNode===null)throw Error(H(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(P){tt(t,t.return,P)}}break;case 3:if(Nn(e,t),Yn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Qa(e.containerInfo)}catch(P){tt(t,t.return,P)}break;case 4:Nn(e,t),Yn(t);break;case 13:Nn(e,t),Yn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(tm=rt())),r&4&&jy(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(jt=(c=jt)||d,Nn(e,t),jt=c):Nn(e,t),Yn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(J=t,d=t.child;d!==null;){for(f=J=d;J!==null;){switch(m=J,E=m.child,m.tag){case 0:case 11:case 14:case 15:La(4,m,m.return);break;case 1:Bs(m,m.return);var R=m.stateNode;if(typeof R.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,R.props=e.memoizedProps,R.state=e.memoizedState,R.componentWillUnmount()}catch(P){tt(r,n,P)}}break;case 5:Bs(m,m.return);break;case 22:if(m.memoizedState!==null){$y(f);continue}}E!==null?(E.return=m,J=E):$y(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=w0("display",o))}catch(P){tt(t,t.return,P)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(P){tt(t,t.return,P)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Nn(e,t),Yn(t),r&4&&jy(t);break;case 21:break;default:Nn(e,t),Yn(t)}}function Yn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(qw(n)){var r=n;break e}n=n.return}throw Error(H(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Wa(i,""),r.flags&=-33);var s=Uy(t);kf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Uy(t);Cf(t,l,o);break;default:throw Error(H(161))}}catch(u){tt(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function JR(t,e,n){J=t,Qw(t)}function Qw(t,e,n){for(var r=(t.mode&1)!==0;J!==null;){var i=J,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||gu;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||jt;l=gu;var c=jt;if(gu=o,(jt=u)&&!c)for(J=i;J!==null;)o=J,u=o.child,o.tag===22&&o.memoizedState!==null?By(i):u!==null?(u.return=o,J=u):By(i);for(;s!==null;)J=s,Qw(s),s=s.sibling;J=i,gu=l,jt=c}zy(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,J=s):zy(t)}}function zy(t){for(;J!==null;){var e=J;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:jt||eh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!jt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Dn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Ry(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ry(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Qa(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(H(163))}jt||e.flags&512&&Pf(e)}catch(m){tt(e,e.return,m)}}if(e===t){J=null;break}if(n=e.sibling,n!==null){n.return=e.return,J=n;break}J=e.return}}function $y(t){for(;J!==null;){var e=J;if(e===t){J=null;break}var n=e.sibling;if(n!==null){n.return=e.return,J=n;break}J=e.return}}function By(t){for(;J!==null;){var e=J;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{eh(4,e)}catch(u){tt(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){tt(e,i,u)}}var s=e.return;try{Pf(e)}catch(u){tt(e,s,u)}break;case 5:var o=e.return;try{Pf(e)}catch(u){tt(e,o,u)}}}catch(u){tt(e,e.return,u)}if(e===t){J=null;break}var l=e.sibling;if(l!==null){l.return=e.return,J=l;break}J=e.return}}var ZR=Math.ceil,vc=br.ReactCurrentDispatcher,Zp=br.ReactCurrentOwner,En=br.ReactCurrentBatchConfig,Ie=0,_t=null,ut=null,At=0,ln=0,Hs=Ri(0),pt=0,ol=null,ns=0,th=0,em=0,Ma=null,Xt=null,tm=0,co=1/0,gr=null,_c=!1,xf=null,ci=null,yu=!1,ni=null,wc=0,Va=0,Nf=null,Lu=-1,Mu=0;function Kt(){return Ie&6?rt():Lu!==-1?Lu:Lu=rt()}function hi(t){return t.mode&1?Ie&2&&At!==0?At&-At:MR.transition!==null?(Mu===0&&(Mu=O0()),Mu):(t=xe,t!==0||(t=window.event,t=t===void 0?16:j0(t.type)),t):1}function Fn(t,e,n,r){if(50<Va)throw Va=0,Nf=null,Error(H(185));Tl(t,n,r),(!(Ie&2)||t!==_t)&&(t===_t&&(!(Ie&2)&&(th|=n),pt===4&&Yr(t,At)),nn(t,r),n===1&&Ie===0&&!(e.mode&1)&&(co=rt()+500,Xc&&Ai()))}function nn(t,e){var n=t.callbackNode;MS(t,e);var r=rc(t,t===_t?At:0);if(r===0)n!==null&&Jg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Jg(n),e===1)t.tag===0?LR(Hy.bind(null,t)):sw(Hy.bind(null,t)),NR(function(){!(Ie&6)&&Ai()}),n=null;else{switch(b0(r)){case 1:n=Pp;break;case 4:n=N0;break;case 16:n=nc;break;case 536870912:n=D0;break;default:n=nc}n=rE(n,Yw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Yw(t,e){if(Lu=-1,Mu=0,Ie&6)throw Error(H(327));var n=t.callbackNode;if(Zs()&&t.callbackNode!==n)return null;var r=rc(t,t===_t?At:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ec(t,r);else{e=r;var i=Ie;Ie|=2;var s=Jw();(_t!==t||At!==e)&&(gr=null,co=rt()+500,Qi(t,e));do try{nA();break}catch(l){Xw(t,l)}while(!0);jp(),vc.current=s,Ie=i,ut!==null?e=0:(_t=null,At=0,e=pt)}if(e!==0){if(e===2&&(i=rf(t),i!==0&&(r=i,e=Df(t,i))),e===1)throw n=ol,Qi(t,0),Yr(t,r),nn(t,rt()),n;if(e===6)Yr(t,r);else{if(i=t.current.alternate,!(r&30)&&!eA(i)&&(e=Ec(t,r),e===2&&(s=rf(t),s!==0&&(r=s,e=Df(t,s))),e===1))throw n=ol,Qi(t,0),Yr(t,r),nn(t,rt()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(H(345));case 2:Fi(t,Xt,gr);break;case 3:if(Yr(t,r),(r&130023424)===r&&(e=tm+500-rt(),10<e)){if(rc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Kt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=df(Fi.bind(null,t,Xt,gr),e);break}Fi(t,Xt,gr);break;case 4:if(Yr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Vn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=rt()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ZR(r/1960))-r,10<r){t.timeoutHandle=df(Fi.bind(null,t,Xt,gr),r);break}Fi(t,Xt,gr);break;case 5:Fi(t,Xt,gr);break;default:throw Error(H(329))}}}return nn(t,rt()),t.callbackNode===n?Yw.bind(null,t):null}function Df(t,e){var n=Ma;return t.current.memoizedState.isDehydrated&&(Qi(t,e).flags|=256),t=Ec(t,e),t!==2&&(e=Xt,Xt=n,e!==null&&Of(e)),t}function Of(t){Xt===null?Xt=t:Xt.push.apply(Xt,t)}function eA(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!jn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Yr(t,e){for(e&=~em,e&=~th,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Vn(e),r=1<<n;t[n]=-1,e&=~r}}function Hy(t){if(Ie&6)throw Error(H(327));Zs();var e=rc(t,0);if(!(e&1))return nn(t,rt()),null;var n=Ec(t,e);if(t.tag!==0&&n===2){var r=rf(t);r!==0&&(e=r,n=Df(t,r))}if(n===1)throw n=ol,Qi(t,0),Yr(t,e),nn(t,rt()),n;if(n===6)throw Error(H(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Fi(t,Xt,gr),nn(t,rt()),null}function nm(t,e){var n=Ie;Ie|=1;try{return t(e)}finally{Ie=n,Ie===0&&(co=rt()+500,Xc&&Ai())}}function rs(t){ni!==null&&ni.tag===0&&!(Ie&6)&&Zs();var e=Ie;Ie|=1;var n=En.transition,r=xe;try{if(En.transition=null,xe=1,t)return t()}finally{xe=r,En.transition=n,Ie=e,!(Ie&6)&&Ai()}}function rm(){ln=Hs.current,Be(Hs)}function Qi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,xR(n)),ut!==null)for(n=ut.return;n!==null;){var r=n;switch(Vp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&lc();break;case 3:lo(),Be(en),Be(Ht),qp();break;case 5:Wp(r);break;case 4:lo();break;case 13:Be(Qe);break;case 19:Be(Qe);break;case 10:zp(r.type._context);break;case 22:case 23:rm()}n=n.return}if(_t=t,ut=t=di(t.current,null),At=ln=e,pt=0,ol=null,em=th=ns=0,Xt=Ma=null,$i!==null){for(e=0;e<$i.length;e++)if(n=$i[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}$i=null}return t}function Xw(t,e){do{var n=ut;try{if(jp(),Du.current=yc,gc){for(var r=Ye.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}gc=!1}if(ts=0,yt=ft=Ye=null,ba=!1,rl=0,Zp.current=null,n===null||n.return===null){pt=1,ol=e,ut=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=At,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=l,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var E=Ny(o);if(E!==null){E.flags&=-257,Dy(E,o,l,s,e),E.mode&1&&xy(s,c,e),e=E,u=c;var R=e.updateQueue;if(R===null){var P=new Set;P.add(u),e.updateQueue=P}else R.add(u);break e}else{if(!(e&1)){xy(s,c,e),im();break e}u=Error(H(426))}}else if(He&&l.mode&1){var O=Ny(o);if(O!==null){!(O.flags&65536)&&(O.flags|=256),Dy(O,o,l,s,e),Fp(uo(u,l));break e}}s=u=uo(u,l),pt!==4&&(pt=2),Ma===null?Ma=[s]:Ma.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var T=bw(s,u,e);Sy(s,T);break e;case 1:l=u;var v=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(ci===null||!ci.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var b=Lw(s,l,e);Sy(s,b);break e}}s=s.return}while(s!==null)}eE(n)}catch(F){e=F,ut===n&&n!==null&&(ut=n=n.return);continue}break}while(!0)}function Jw(){var t=vc.current;return vc.current=yc,t===null?yc:t}function im(){(pt===0||pt===3||pt===2)&&(pt=4),_t===null||!(ns&268435455)&&!(th&268435455)||Yr(_t,At)}function Ec(t,e){var n=Ie;Ie|=2;var r=Jw();(_t!==t||At!==e)&&(gr=null,Qi(t,e));do try{tA();break}catch(i){Xw(t,i)}while(!0);if(jp(),Ie=n,vc.current=r,ut!==null)throw Error(H(261));return _t=null,At=0,pt}function tA(){for(;ut!==null;)Zw(ut)}function nA(){for(;ut!==null&&!PS();)Zw(ut)}function Zw(t){var e=nE(t.alternate,t,ln);t.memoizedProps=t.pendingProps,e===null?eE(t):ut=e,Zp.current=null}function eE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=QR(n,e),n!==null){n.flags&=32767,ut=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{pt=6,ut=null;return}}else if(n=GR(n,e,ln),n!==null){ut=n;return}if(e=e.sibling,e!==null){ut=e;return}ut=e=t}while(e!==null);pt===0&&(pt=5)}function Fi(t,e,n){var r=xe,i=En.transition;try{En.transition=null,xe=1,rA(t,e,n,r)}finally{En.transition=i,xe=r}return null}function rA(t,e,n,r){do Zs();while(ni!==null);if(Ie&6)throw Error(H(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(H(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(VS(t,s),t===_t&&(ut=_t=null,At=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||yu||(yu=!0,rE(nc,function(){return Zs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=En.transition,En.transition=null;var o=xe;xe=1;var l=Ie;Ie|=4,Zp.current=null,XR(t,n),Gw(n,t),IR(cf),ic=!!uf,cf=uf=null,t.current=n,JR(n),CS(),Ie=l,xe=o,En.transition=s}else t.current=n;if(yu&&(yu=!1,ni=t,wc=i),s=t.pendingLanes,s===0&&(ci=null),NS(n.stateNode),nn(t,rt()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(_c)throw _c=!1,t=xf,xf=null,t;return wc&1&&t.tag!==0&&Zs(),s=t.pendingLanes,s&1?t===Nf?Va++:(Va=0,Nf=t):Va=0,Ai(),null}function Zs(){if(ni!==null){var t=b0(wc),e=En.transition,n=xe;try{if(En.transition=null,xe=16>t?16:t,ni===null)var r=!1;else{if(t=ni,ni=null,wc=0,Ie&6)throw Error(H(331));var i=Ie;for(Ie|=4,J=t.current;J!==null;){var s=J,o=s.child;if(J.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(J=c;J!==null;){var d=J;switch(d.tag){case 0:case 11:case 15:La(8,d,s)}var f=d.child;if(f!==null)f.return=d,J=f;else for(;J!==null;){d=J;var m=d.sibling,E=d.return;if(Ww(d),d===c){J=null;break}if(m!==null){m.return=E,J=m;break}J=E}}}var R=s.alternate;if(R!==null){var P=R.child;if(P!==null){R.child=null;do{var O=P.sibling;P.sibling=null,P=O}while(P!==null)}}J=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,J=o;else e:for(;J!==null;){if(s=J,s.flags&2048)switch(s.tag){case 0:case 11:case 15:La(9,s,s.return)}var T=s.sibling;if(T!==null){T.return=s.return,J=T;break e}J=s.return}}var v=t.current;for(J=v;J!==null;){o=J;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,J=S;else e:for(o=v;J!==null;){if(l=J,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:eh(9,l)}}catch(F){tt(l,l.return,F)}if(l===o){J=null;break e}var b=l.sibling;if(b!==null){b.return=l.return,J=b;break e}J=l.return}}if(Ie=i,Ai(),tr&&typeof tr.onPostCommitFiberRoot=="function")try{tr.onPostCommitFiberRoot(qc,t)}catch{}r=!0}return r}finally{xe=n,En.transition=e}}return!1}function Wy(t,e,n){e=uo(n,e),e=bw(t,e,1),t=ui(t,e,1),e=Kt(),t!==null&&(Tl(t,1,e),nn(t,e))}function tt(t,e,n){if(t.tag===3)Wy(t,t,n);else for(;e!==null;){if(e.tag===3){Wy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ci===null||!ci.has(r))){t=uo(n,t),t=Lw(e,t,1),e=ui(e,t,1),t=Kt(),e!==null&&(Tl(e,1,t),nn(e,t));break}}e=e.return}}function iA(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Kt(),t.pingedLanes|=t.suspendedLanes&n,_t===t&&(At&n)===n&&(pt===4||pt===3&&(At&130023424)===At&&500>rt()-tm?Qi(t,0):em|=n),nn(t,e)}function tE(t,e){e===0&&(t.mode&1?(e=au,au<<=1,!(au&130023424)&&(au=4194304)):e=1);var n=Kt();t=kr(t,e),t!==null&&(Tl(t,e,n),nn(t,n))}function sA(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),tE(t,n)}function oA(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(H(314))}r!==null&&r.delete(e),tE(t,n)}var nE;nE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||en.current)Zt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Zt=!1,KR(t,e,n);Zt=!!(t.flags&131072)}else Zt=!1,He&&e.flags&1048576&&ow(e,hc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;bu(t,e),t=e.pendingProps;var i=so(e,Ht.current);Js(e,n),i=Gp(null,e,r,t,i,n);var s=Qp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,tn(r)?(s=!0,uc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Bp(e),i.updater=Zc,e.stateNode=i,i._reactInternals=e,_f(e,r,t,n),e=Tf(null,e,r,!0,s,n)):(e.tag=0,He&&s&&Mp(e),qt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(bu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=lA(r),t=Dn(r,t),i){case 0:e=Ef(null,e,r,t,n);break e;case 1:e=Ly(null,e,r,t,n);break e;case 11:e=Oy(null,e,r,t,n);break e;case 14:e=by(null,e,r,Dn(r.type,t),n);break e}throw Error(H(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Dn(r,i),Ef(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Dn(r,i),Ly(t,e,r,i,n);case 3:e:{if(Uw(e),t===null)throw Error(H(387));r=e.pendingProps,s=e.memoizedState,i=s.element,dw(t,e),pc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=uo(Error(H(423)),e),e=My(t,e,r,n,i);break e}else if(r!==i){i=uo(Error(H(424)),e),e=My(t,e,r,n,i);break e}else for(cn=li(e.stateNode.containerInfo.firstChild),dn=e,He=!0,Ln=null,n=cw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(oo(),r===i){e=xr(t,e,n);break e}qt(t,e,r,n)}e=e.child}return e;case 5:return fw(e),t===null&&gf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,hf(r,i)?o=null:s!==null&&hf(r,s)&&(e.flags|=32),Fw(t,e),qt(t,e,o,n),e.child;case 6:return t===null&&gf(e),null;case 13:return jw(t,e,n);case 4:return Hp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ao(e,null,r,n):qt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Dn(r,i),Oy(t,e,r,i,n);case 7:return qt(t,e,e.pendingProps,n),e.child;case 8:return qt(t,e,e.pendingProps.children,n),e.child;case 12:return qt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Ve(dc,r._currentValue),r._currentValue=o,s!==null)if(jn(s.value,o)){if(s.children===i.children&&!en.current){e=xr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Sr(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),yf(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(H(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),yf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}qt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Js(e,n),i=Tn(i),r=r(i),e.flags|=1,qt(t,e,r,n),e.child;case 14:return r=e.type,i=Dn(r,e.pendingProps),i=Dn(r.type,i),by(t,e,r,i,n);case 15:return Mw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Dn(r,i),bu(t,e),e.tag=1,tn(r)?(t=!0,uc(e)):t=!1,Js(e,n),Ow(e,r,i),_f(e,r,i,n),Tf(null,e,r,!0,t,n);case 19:return zw(t,e,n);case 22:return Vw(t,e,n)}throw Error(H(156,e.tag))};function rE(t,e){return x0(t,e)}function aA(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wn(t,e,n,r){return new aA(t,e,n,r)}function sm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function lA(t){if(typeof t=="function")return sm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Sp)return 11;if(t===Rp)return 14}return 2}function di(t,e){var n=t.alternate;return n===null?(n=wn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Vu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")sm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case bs:return Yi(n.children,i,s,e);case Ip:o=8,i|=8;break;case $d:return t=wn(12,n,e,i|2),t.elementType=$d,t.lanes=s,t;case Bd:return t=wn(13,n,e,i),t.elementType=Bd,t.lanes=s,t;case Hd:return t=wn(19,n,e,i),t.elementType=Hd,t.lanes=s,t;case f0:return nh(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case h0:o=10;break e;case d0:o=9;break e;case Sp:o=11;break e;case Rp:o=14;break e;case Kr:o=16,r=null;break e}throw Error(H(130,t==null?t:typeof t,""))}return e=wn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Yi(t,e,n,r){return t=wn(7,t,r,e),t.lanes=n,t}function nh(t,e,n,r){return t=wn(22,t,r,e),t.elementType=f0,t.lanes=n,t.stateNode={isHidden:!1},t}function md(t,e,n){return t=wn(6,t,null,e),t.lanes=n,t}function gd(t,e,n){return e=wn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function uA(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yh(0),this.expirationTimes=Yh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function om(t,e,n,r,i,s,o,l,u){return t=new uA(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=wn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bp(s),t}function cA(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Os,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function iE(t){if(!t)return wi;t=t._reactInternals;e:{if(fs(t)!==t||t.tag!==1)throw Error(H(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(tn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(H(171))}if(t.tag===1){var n=t.type;if(tn(n))return iw(t,n,e)}return e}function sE(t,e,n,r,i,s,o,l,u){return t=om(n,r,!0,t,i,s,o,l,u),t.context=iE(null),n=t.current,r=Kt(),i=hi(n),s=Sr(r,i),s.callback=e??null,ui(n,s,i),t.current.lanes=i,Tl(t,i,r),nn(t,r),t}function rh(t,e,n,r){var i=e.current,s=Kt(),o=hi(i);return n=iE(n),e.context===null?e.context=n:e.pendingContext=n,e=Sr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ui(i,e,o),t!==null&&(Fn(t,i,o,s),Nu(t,i,o)),o}function Tc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function qy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function am(t,e){qy(t,e),(t=t.alternate)&&qy(t,e)}function hA(){return null}var oE=typeof reportError=="function"?reportError:function(t){console.error(t)};function lm(t){this._internalRoot=t}ih.prototype.render=lm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(H(409));rh(t,e,null,null)};ih.prototype.unmount=lm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;rs(function(){rh(null,t,null,null)}),e[Cr]=null}};function ih(t){this._internalRoot=t}ih.prototype.unstable_scheduleHydration=function(t){if(t){var e=V0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Qr.length&&e!==0&&e<Qr[n].priority;n++);Qr.splice(n,0,t),n===0&&U0(t)}};function um(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function sh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ky(){}function dA(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Tc(o);s.call(c)}}var o=sE(e,r,t,0,null,!1,!1,"",Ky);return t._reactRootContainer=o,t[Cr]=o.current,Ja(t.nodeType===8?t.parentNode:t),rs(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=Tc(u);l.call(c)}}var u=om(t,0,!1,null,null,!1,!1,"",Ky);return t._reactRootContainer=u,t[Cr]=u.current,Ja(t.nodeType===8?t.parentNode:t),rs(function(){rh(e,u,n,r)}),u}function oh(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Tc(o);l.call(u)}}rh(e,o,t,i)}else o=dA(n,e,t,i,r);return Tc(o)}L0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=va(e.pendingLanes);n!==0&&(Cp(e,n|1),nn(e,rt()),!(Ie&6)&&(co=rt()+500,Ai()))}break;case 13:rs(function(){var r=kr(t,1);if(r!==null){var i=Kt();Fn(r,t,1,i)}}),am(t,1)}};kp=function(t){if(t.tag===13){var e=kr(t,134217728);if(e!==null){var n=Kt();Fn(e,t,134217728,n)}am(t,134217728)}};M0=function(t){if(t.tag===13){var e=hi(t),n=kr(t,e);if(n!==null){var r=Kt();Fn(n,t,e,r)}am(t,e)}};V0=function(){return xe};F0=function(t,e){var n=xe;try{return xe=t,e()}finally{xe=n}};ef=function(t,e,n){switch(e){case"input":if(Kd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Yc(r);if(!i)throw Error(H(90));m0(r),Kd(r,i)}}}break;case"textarea":y0(t,n);break;case"select":e=n.value,e!=null&&Gs(t,!!n.multiple,e,!1)}};S0=nm;R0=rs;var fA={usingClientEntryPoint:!1,Events:[Sl,Fs,Yc,T0,I0,nm]},ha={findFiberByHostInstance:zi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},pA={bundleType:ha.bundleType,version:ha.version,rendererPackageName:ha.rendererPackageName,rendererConfig:ha.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:br.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=C0(t),t===null?null:t.stateNode},findFiberByHostInstance:ha.findFiberByHostInstance||hA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vu.isDisabled&&vu.supportsFiber)try{qc=vu.inject(pA),tr=vu}catch{}}pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fA;pn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!um(e))throw Error(H(200));return cA(t,e,null,n)};pn.createRoot=function(t,e){if(!um(t))throw Error(H(299));var n=!1,r="",i=oE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=om(t,1,!1,null,null,n,!1,r,i),t[Cr]=e.current,Ja(t.nodeType===8?t.parentNode:t),new lm(e)};pn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(H(188)):(t=Object.keys(t).join(","),Error(H(268,t)));return t=C0(e),t=t===null?null:t.stateNode,t};pn.flushSync=function(t){return rs(t)};pn.hydrate=function(t,e,n){if(!sh(e))throw Error(H(200));return oh(null,t,e,!0,n)};pn.hydrateRoot=function(t,e,n){if(!um(t))throw Error(H(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=oE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=sE(e,null,t,1,n??null,i,!1,s,o),t[Cr]=e.current,Ja(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new ih(e)};pn.render=function(t,e,n){if(!sh(e))throw Error(H(200));return oh(null,t,e,!1,n)};pn.unmountComponentAtNode=function(t){if(!sh(t))throw Error(H(40));return t._reactRootContainer?(rs(function(){oh(null,null,t,!1,function(){t._reactRootContainer=null,t[Cr]=null})}),!0):!1};pn.unstable_batchedUpdates=nm;pn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!sh(n))throw Error(H(200));if(t==null||t._reactInternals===void 0)throw Error(H(38));return oh(t,e,n,!1,r)};pn.version="18.3.1-next-f1338f8080-20240426";function aE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(aE)}catch(t){console.error(t)}}aE(),a0.exports=pn;var cm=a0.exports;const mA=Q_(cm),gA=G_({__proto__:null,default:mA},[cm]);var Gy=cm;jd.createRoot=Gy.createRoot,jd.hydrateRoot=Gy.hydrateRoot;/**
 * @remix-run/router v1.19.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ge(){return Ge=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ge.apply(this,arguments)}var ot;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(ot||(ot={}));const Qy="popstate";function yA(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return al("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:is(i)}return _A(e,n,null,t)}function ge(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function ho(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function vA(){return Math.random().toString(36).substr(2,8)}function Yy(t,e){return{usr:t.state,key:t.key,idx:e}}function al(t,e,n,r){return n===void 0&&(n=null),Ge({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Pi(e):e,{state:n,key:e&&e.key||r||vA()})}function is(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Pi(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function _A(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=ot.Pop,u=null,c=d();c==null&&(c=0,o.replaceState(Ge({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function f(){l=ot.Pop;let O=d(),T=O==null?null:O-c;c=O,u&&u({action:l,location:P.location,delta:T})}function m(O,T){l=ot.Push;let v=al(P.location,O,T);c=d()+1;let S=Yy(v,c),b=P.createHref(v);try{o.pushState(S,"",b)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;i.location.assign(b)}s&&u&&u({action:l,location:P.location,delta:1})}function E(O,T){l=ot.Replace;let v=al(P.location,O,T);c=d();let S=Yy(v,c),b=P.createHref(v);o.replaceState(S,"",b),s&&u&&u({action:l,location:P.location,delta:0})}function R(O){let T=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof O=="string"?O:is(O);return v=v.replace(/ $/,"%20"),ge(T,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,T)}let P={get action(){return l},get location(){return t(i,o)},listen(O){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Qy,f),u=O,()=>{i.removeEventListener(Qy,f),u=null}},createHref(O){return e(i,O)},createURL:R,encodeLocation(O){let T=R(O);return{pathname:T.pathname,search:T.search,hash:T.hash}},push:m,replace:E,go(O){return o.go(O)}};return P}var Oe;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Oe||(Oe={}));const wA=new Set(["lazy","caseSensitive","path","id","index","children"]);function EA(t){return t.index===!0}function ll(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,s)=>{let o=[...n,String(s)],l=typeof i.id=="string"?i.id:o.join("-");if(ge(i.index!==!0||!i.children,"Cannot specify children on an index route"),ge(!r[l],'Found a route id collision on id "'+l+`".  Route id's must be globally unique within Data Router usages`),EA(i)){let u=Ge({},i,e(i),{id:l});return r[l]=u,u}else{let u=Ge({},i,e(i),{id:l,children:void 0});return r[l]=u,i.children&&(u.children=ll(i.children,e,o,r)),u}})}function ji(t,e,n){return n===void 0&&(n="/"),Fu(t,e,n,!1)}function Fu(t,e,n,r){let i=typeof e=="string"?Pi(e):e,s=No(i.pathname||"/",n);if(s==null)return null;let o=lE(t);IA(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=bA(s);l=DA(o[u],c,r)}return l}function TA(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function lE(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(ge(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Rr([r,u.relativePath]),d=n.concat(u);s.children&&s.children.length>0&&(ge(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),lE(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:xA(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of uE(s.path))i(s,o,u)}),e}function uE(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=uE(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function IA(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:NA(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const SA=/^:[\w-]+$/,RA=3,AA=2,PA=1,CA=10,kA=-2,Xy=t=>t==="*";function xA(t,e){let n=t.split("/"),r=n.length;return n.some(Xy)&&(r+=kA),e&&(r+=AA),n.filter(i=>!Xy(i)).reduce((i,s)=>i+(SA.test(s)?RA:s===""?PA:CA),r)}function NA(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function DA(t,e,n){n===void 0&&(n=!1);let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",f=Jy({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),m=u.route;if(!f&&c&&n&&!r[r.length-1].route.index&&(f=Jy({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},d)),!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:Rr([s,f.pathname]),pathnameBase:VA(Rr([s,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(s=Rr([s,f.pathnameBase]))}return o}function Jy(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=OA(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,d,f)=>{let{paramName:m,isOptional:E}=d;if(m==="*"){let P=l[f]||"";o=s.slice(0,s.length-P.length).replace(/(.)\/+$/,"$1")}const R=l[f];return E&&!R?c[m]=void 0:c[m]=(R||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function OA(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),ho(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function bA(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ho(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function No(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function LA(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Pi(t):t;return{pathname:n?n.startsWith("/")?n:MA(n,e):e,search:FA(r),hash:UA(i)}}function MA(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function yd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function cE(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function ah(t,e){let n=cE(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function lh(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Pi(t):(i=Ge({},t),ge(!i.pathname||!i.pathname.includes("?"),yd("?","pathname","search",i)),ge(!i.pathname||!i.pathname.includes("#"),yd("#","pathname","hash",i)),ge(!i.search||!i.search.includes("#"),yd("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),f-=1;i.pathname=m.join("/")}l=f>=0?e[f]:"/"}let u=LA(i,l),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const Rr=t=>t.join("/").replace(/\/\/+/g,"/"),VA=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),FA=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,UA=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class Ic{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function uh(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const hE=["post","put","patch","delete"],jA=new Set(hE),zA=["get",...hE],$A=new Set(zA),BA=new Set([301,302,303,307,308]),HA=new Set([307,308]),vd={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},WA={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},da={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},hm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,qA=t=>({hasErrorBoundary:!!t.hasErrorBoundary}),dE="remix-router-transitions";function KA(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",r=!n;ge(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(t.mapRouteProperties)i=t.mapRouteProperties;else if(t.detectErrorBoundary){let x=t.detectErrorBoundary;i=D=>({hasErrorBoundary:x(D)})}else i=qA;let s={},o=ll(t.routes,i,void 0,s),l,u=t.basename||"/",c=t.unstable_dataStrategy||JA,d=t.unstable_patchRoutesOnMiss,f=Ge({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,v7_skipActionErrorRevalidation:!1},t.future),m=null,E=new Set,R=null,P=null,O=null,T=t.hydrationData!=null,v=ji(o,t.history.location,u),S=null;if(v==null&&!d){let x=Wt(404,{pathname:t.history.location.pathname}),{matches:D,route:M}=lv(o);v=D,S={[M.id]:x}}v&&!t.hydrationData&&Kn(v,o,t.history.location.pathname).active&&(v=null);let b;if(v)if(v.some(x=>x.route.lazy))b=!1;else if(!v.some(x=>x.route.loader))b=!0;else if(f.v7_partialHydration){let x=t.hydrationData?t.hydrationData.loaderData:null,D=t.hydrationData?t.hydrationData.errors:null,M=j=>j.route.loader?typeof j.route.loader=="function"&&j.route.loader.hydrate===!0?!1:x&&x[j.route.id]!==void 0||D&&D[j.route.id]!==void 0:!0;if(D){let j=v.findIndex(Q=>D[Q.route.id]!==void 0);b=v.slice(0,j+1).every(M)}else b=v.every(M)}else b=t.hydrationData!=null;else if(b=!1,v=[],f.v7_partialHydration){let x=Kn(null,o,t.history.location.pathname);x.active&&x.matches&&(v=x.matches)}let F,C={historyAction:t.history.action,location:t.history.location,matches:v,initialized:b,navigation:vd,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||S,fetchers:new Map,blockers:new Map},_=ot.Pop,g=!1,w,I=!1,k=new Map,N=null,A=!1,fe=!1,it=[],Yt=new Set,K=new Map,$=0,Y=-1,Z=new Map,me=new Set,he=new Map,Pe=new Map,We=new Set,Ze=new Map,qe=new Map,Nt=new Map,Rn=!1;function An(){if(m=t.history.listen(x=>{let{action:D,location:M,delta:j}=x;if(Rn){Rn=!1;return}ho(qe.size===0||j!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let Q=qo({currentLocation:C.location,nextLocation:M,historyAction:D});if(Q&&j!=null){Rn=!0,t.history.go(j*-1),Di(Q,{state:"blocked",location:M,proceed(){Di(Q,{state:"proceeding",proceed:void 0,reset:void 0,location:M}),t.history.go(j)},reset(){let te=new Map(C.blockers);te.set(Q,da),Ne({blockers:te})}});return}return qn(D,M)}),n){hP(e,k);let x=()=>dP(e,k);e.addEventListener("pagehide",x),N=()=>e.removeEventListener("pagehide",x)}return C.initialized||qn(ot.Pop,C.location,{initialHydration:!0}),F}function Hn(){m&&m(),N&&N(),E.clear(),w&&w.abort(),C.fetchers.forEach((x,D)=>_s(D)),C.blockers.forEach((x,D)=>Es(D))}function Pn(x){return E.add(x),()=>E.delete(x)}function Ne(x,D){D===void 0&&(D={}),C=Ge({},C,x);let M=[],j=[];f.v7_fetcherPersist&&C.fetchers.forEach((Q,te)=>{Q.state==="idle"&&(We.has(te)?j.push(te):M.push(te))}),[...E].forEach(Q=>Q(C,{deletedFetchers:j,unstable_viewTransitionOpts:D.viewTransitionOpts,unstable_flushSync:D.flushSync===!0})),f.v7_fetcherPersist&&(M.forEach(Q=>C.fetchers.delete(Q)),j.forEach(Q=>_s(Q)))}function Wn(x,D,M){var j,Q;let{flushSync:te}=M===void 0?{}:M,se=C.actionData!=null&&C.navigation.formMethod!=null&&bn(C.navigation.formMethod)&&C.navigation.state==="loading"&&((j=x.state)==null?void 0:j._isRedirect)!==!0,q;D.actionData?Object.keys(D.actionData).length>0?q=D.actionData:q=null:se?q=C.actionData:q=null;let le=D.loaderData?ov(C.loaderData,D.loaderData,D.matches||[],D.errors):C.loaderData,ne=C.blockers;ne.size>0&&(ne=new Map(ne),ne.forEach((Se,Ce)=>ne.set(Ce,da)));let re=g===!0||C.navigation.formMethod!=null&&bn(C.navigation.formMethod)&&((Q=x.state)==null?void 0:Q._isRedirect)!==!0;l&&(o=l,l=void 0),A||_===ot.Pop||(_===ot.Push?t.history.push(x,x.state):_===ot.Replace&&t.history.replace(x,x.state));let ye;if(_===ot.Pop){let Se=k.get(C.location.pathname);Se&&Se.has(x.pathname)?ye={currentLocation:C.location,nextLocation:x}:k.has(x.pathname)&&(ye={currentLocation:x,nextLocation:C.location})}else if(I){let Se=k.get(C.location.pathname);Se?Se.add(x.pathname):(Se=new Set([x.pathname]),k.set(C.location.pathname,Se)),ye={currentLocation:C.location,nextLocation:x}}Ne(Ge({},D,{actionData:q,loaderData:le,historyAction:_,location:x,initialized:!0,navigation:vd,revalidation:"idle",restoreScrollPosition:Go(x,D.matches||C.matches),preventScrollReset:re,blockers:ne}),{viewTransitionOpts:ye,flushSync:te===!0}),_=ot.Pop,g=!1,I=!1,A=!1,fe=!1,it=[]}async function vs(x,D){if(typeof x=="number"){t.history.go(x);return}let M=bf(C.location,C.matches,u,f.v7_prependBasename,x,f.v7_relativeSplatPath,D==null?void 0:D.fromRouteId,D==null?void 0:D.relative),{path:j,submission:Q,error:te}=Zy(f.v7_normalizeFormMethod,!1,M,D),se=C.location,q=al(C.location,j,D&&D.state);q=Ge({},q,t.history.encodeLocation(q));let le=D&&D.replace!=null?D.replace:void 0,ne=ot.Push;le===!0?ne=ot.Replace:le===!1||Q!=null&&bn(Q.formMethod)&&Q.formAction===C.location.pathname+C.location.search&&(ne=ot.Replace);let re=D&&"preventScrollReset"in D?D.preventScrollReset===!0:void 0,ye=(D&&D.unstable_flushSync)===!0,Se=qo({currentLocation:se,nextLocation:q,historyAction:ne});if(Se){Di(Se,{state:"blocked",location:q,proceed(){Di(Se,{state:"proceeding",proceed:void 0,reset:void 0,location:q}),vs(x,D)},reset(){let Ce=new Map(C.blockers);Ce.set(Se,da),Ne({blockers:Ce})}});return}return await qn(ne,q,{submission:Q,pendingError:te,preventScrollReset:re,replace:D&&D.replace,enableViewTransition:D&&D.unstable_viewTransition,flushSync:ye})}function jo(){if(dt(),Ne({revalidation:"loading"}),C.navigation.state!=="submitting"){if(C.navigation.state==="idle"){qn(C.historyAction,C.location,{startUninterruptedRevalidation:!0});return}qn(_||C.historyAction,C.navigation.location,{overrideNavigation:C.navigation})}}async function qn(x,D,M){w&&w.abort(),w=null,_=x,A=(M&&M.startUninterruptedRevalidation)===!0,Ts(C.location,C.matches),g=(M&&M.preventScrollReset)===!0,I=(M&&M.enableViewTransition)===!0;let j=l||o,Q=M&&M.overrideNavigation,te=ji(j,D,u),se=(M&&M.flushSync)===!0,q=Kn(te,j,D.pathname);if(q.active&&q.matches&&(te=q.matches),!te){let{error:Ee,notFoundMatches:nt,route:Ke}=hr(D.pathname);Wn(D,{matches:nt,loaderData:{},errors:{[Ke.id]:Ee}},{flushSync:se});return}if(C.initialized&&!fe&&iP(C.location,D)&&!(M&&M.submission&&bn(M.submission.formMethod))){Wn(D,{matches:te},{flushSync:se});return}w=new AbortController;let le=Cs(t.history,D,w.signal,M&&M.submission),ne;if(M&&M.pendingError)ne=[Ws(te).route.id,{type:Oe.error,error:M.pendingError}];else if(M&&M.submission&&bn(M.submission.formMethod)){let Ee=await Mh(le,D,M.submission,te,q.active,{replace:M.replace,flushSync:se});if(Ee.shortCircuited)return;if(Ee.pendingActionResult){let[nt,Ke]=Ee.pendingActionResult;if(un(Ke)&&uh(Ke.error)&&Ke.error.status===404){w=null,Wn(D,{matches:Ee.matches,loaderData:{},errors:{[nt]:Ke.error}});return}}te=Ee.matches||te,ne=Ee.pendingActionResult,Q=_d(D,M.submission),se=!1,q.active=!1,le=Cs(t.history,le.url,le.signal)}let{shortCircuited:re,matches:ye,loaderData:Se,errors:Ce}=await Vh(le,D,te,q.active,Q,M&&M.submission,M&&M.fetcherSubmission,M&&M.replace,M&&M.initialHydration===!0,se,ne);re||(w=null,Wn(D,Ge({matches:ye||te},av(ne),{loaderData:Se,errors:Ce})))}async function Mh(x,D,M,j,Q,te){te===void 0&&(te={}),dt();let se=uP(D,M);if(Ne({navigation:se},{flushSync:te.flushSync===!0}),Q){let ne=await bi(j,D.pathname,x.signal);if(ne.type==="aborted")return{shortCircuited:!0};if(ne.type==="error"){let{boundaryId:re,error:ye}=Fr(D.pathname,ne);return{matches:ne.partialMatches,pendingActionResult:[re,{type:Oe.error,error:ye}]}}else if(ne.matches)j=ne.matches;else{let{notFoundMatches:re,error:ye,route:Se}=hr(D.pathname);return{matches:re,pendingActionResult:[Se.id,{type:Oe.error,error:ye}]}}}let q,le=wa(j,D);if(!le.route.action&&!le.route.lazy)q={type:Oe.error,error:Wt(405,{method:x.method,pathname:D.pathname,routeId:le.route.id})};else if(q=(await Vr("action",x,[le],j))[0],x.signal.aborted)return{shortCircuited:!0};if(Wi(q)){let ne;return te&&te.replace!=null?ne=te.replace:ne=rv(q.response.headers.get("Location"),new URL(x.url),u)===C.location.pathname+C.location.search,await cr(x,q,{submission:M,replace:ne}),{shortCircuited:!0}}if(Hi(q))throw Wt(400,{type:"defer-action"});if(un(q)){let ne=Ws(j,le.route.id);return(te&&te.replace)!==!0&&(_=ot.Push),{matches:j,pendingActionResult:[ne.route.id,q]}}return{matches:j,pendingActionResult:[le.route.id,q]}}async function Vh(x,D,M,j,Q,te,se,q,le,ne,re){let ye=Q||_d(D,te),Se=te||se||dv(ye),Ce=!A&&(!f.v7_partialHydration||!le);if(j){if(Ce){let Fe=zo(re);Ne(Ge({navigation:ye},Fe!==void 0?{actionData:Fe}:{}),{flushSync:ne})}let de=await bi(M,D.pathname,x.signal);if(de.type==="aborted")return{shortCircuited:!0};if(de.type==="error"){let{boundaryId:Fe,error:Ot}=Fr(D.pathname,de);return{matches:de.partialMatches,loaderData:{},errors:{[Fe]:Ot}}}else if(de.matches)M=de.matches;else{let{error:Fe,notFoundMatches:Ot,route:De}=hr(D.pathname);return{matches:Ot,loaderData:{},errors:{[De.id]:Fe}}}}let Ee=l||o,[nt,Ke]=ev(t.history,C,M,Se,D,f.v7_partialHydration&&le===!0,f.v7_skipActionErrorRevalidation,fe,it,Yt,We,he,me,Ee,u,re);if(Oi(de=>!(M&&M.some(Fe=>Fe.route.id===de))||nt&&nt.some(Fe=>Fe.route.id===de)),Y=++$,nt.length===0&&Ke.length===0){let de=ws();return Wn(D,Ge({matches:M,loaderData:{},errors:re&&un(re[1])?{[re[0]]:re[1].error}:null},av(re),de?{fetchers:new Map(C.fetchers)}:{}),{flushSync:ne}),{shortCircuited:!0}}if(Ce){let de={};if(!j){de.navigation=ye;let Fe=zo(re);Fe!==void 0&&(de.actionData=Fe)}Ke.length>0&&(de.fetchers=$o(Ke)),Ne(de,{flushSync:ne})}Ke.forEach(de=>{K.has(de.key)&&Cn(de.key),de.controller&&K.set(de.key,de.controller)});let Ur=()=>Ke.forEach(de=>Cn(de.key));w&&w.signal.addEventListener("abort",Ur);let{loaderResults:Gn,fetcherResults:kn}=await ht(C.matches,M,nt,Ke,x);if(x.signal.aborted)return{shortCircuited:!0};w&&w.signal.removeEventListener("abort",Ur),Ke.forEach(de=>K.delete(de.key));let fr=uv([...Gn,...kn]);if(fr){if(fr.idx>=nt.length){let de=Ke[fr.idx-nt.length].key;me.add(de)}return await cr(x,fr.result,{replace:q}),{shortCircuited:!0}}let{loaderData:Qn,errors:Dt}=sv(C,M,nt,Gn,re,Ke,kn,Ze);Ze.forEach((de,Fe)=>{de.subscribe(Ot=>{(Ot||de.done)&&Ze.delete(Fe)})}),f.v7_partialHydration&&le&&C.errors&&Object.entries(C.errors).filter(de=>{let[Fe]=de;return!nt.some(Ot=>Ot.route.id===Fe)}).forEach(de=>{let[Fe,Ot]=de;Dt=Object.assign(Dt||{},{[Fe]:Ot})});let yn=ws(),jr=Bl(Y),Is=yn||jr||Ke.length>0;return Ge({matches:M,loaderData:Qn,errors:Dt},Is?{fetchers:new Map(C.fetchers)}:{})}function zo(x){if(x&&!un(x[1]))return{[x[0]]:x[1].data};if(C.actionData)return Object.keys(C.actionData).length===0?null:C.actionData}function $o(x){return x.forEach(D=>{let M=C.fetchers.get(D.key),j=fa(void 0,M?M.data:void 0);C.fetchers.set(D.key,j)}),new Map(C.fetchers)}function $l(x,D,M,j){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");K.has(x)&&Cn(x);let Q=(j&&j.unstable_flushSync)===!0,te=l||o,se=bf(C.location,C.matches,u,f.v7_prependBasename,M,f.v7_relativeSplatPath,D,j==null?void 0:j.relative),q=ji(te,se,u),le=Kn(q,te,se);if(le.active&&le.matches&&(q=le.matches),!q){gn(x,D,Wt(404,{pathname:se}),{flushSync:Q});return}let{path:ne,submission:re,error:ye}=Zy(f.v7_normalizeFormMethod,!0,se,j);if(ye){gn(x,D,ye,{flushSync:Q});return}let Se=wa(q,ne);if(g=(j&&j.preventScrollReset)===!0,re&&bn(re.formMethod)){Fh(x,D,ne,Se,q,le.active,Q,re);return}he.set(x,{routeId:D,path:ne}),Bo(x,D,ne,Se,q,le.active,Q,re)}async function Fh(x,D,M,j,Q,te,se,q){dt(),he.delete(x);function le(De){if(!De.route.action&&!De.route.lazy){let sn=Wt(405,{method:q.formMethod,pathname:M,routeId:D});return gn(x,D,sn,{flushSync:se}),!0}return!1}if(!te&&le(j))return;let ne=C.fetchers.get(x);rn(x,cP(q,ne),{flushSync:se});let re=new AbortController,ye=Cs(t.history,M,re.signal,q);if(te){let De=await bi(Q,M,ye.signal);if(De.type==="aborted")return;if(De.type==="error"){let{error:sn}=Fr(M,De);gn(x,D,sn,{flushSync:se});return}else if(De.matches){if(Q=De.matches,j=wa(Q,M),le(j))return}else{gn(x,D,Wt(404,{pathname:M}),{flushSync:se});return}}K.set(x,re);let Se=$,Ee=(await Vr("action",ye,[j],Q))[0];if(ye.signal.aborted){K.get(x)===re&&K.delete(x);return}if(f.v7_fetcherPersist&&We.has(x)){if(Wi(Ee)||un(Ee)){rn(x,Wr(void 0));return}}else{if(Wi(Ee))if(K.delete(x),Y>Se){rn(x,Wr(void 0));return}else return me.add(x),rn(x,fa(q)),cr(ye,Ee,{fetcherSubmission:q});if(un(Ee)){gn(x,D,Ee.error);return}}if(Hi(Ee))throw Wt(400,{type:"defer-action"});let nt=C.navigation.location||C.location,Ke=Cs(t.history,nt,re.signal),Ur=l||o,Gn=C.navigation.state!=="idle"?ji(Ur,C.navigation.location,u):C.matches;ge(Gn,"Didn't find any matches after fetcher action");let kn=++$;Z.set(x,kn);let fr=fa(q,Ee.data);C.fetchers.set(x,fr);let[Qn,Dt]=ev(t.history,C,Gn,q,nt,!1,f.v7_skipActionErrorRevalidation,fe,it,Yt,We,he,me,Ur,u,[j.route.id,Ee]);Dt.filter(De=>De.key!==x).forEach(De=>{let sn=De.key,Qo=C.fetchers.get(sn),Wl=fa(void 0,Qo?Qo.data:void 0);C.fetchers.set(sn,Wl),K.has(sn)&&Cn(sn),De.controller&&K.set(sn,De.controller)}),Ne({fetchers:new Map(C.fetchers)});let yn=()=>Dt.forEach(De=>Cn(De.key));re.signal.addEventListener("abort",yn);let{loaderResults:jr,fetcherResults:Is}=await ht(C.matches,Gn,Qn,Dt,Ke);if(re.signal.aborted)return;re.signal.removeEventListener("abort",yn),Z.delete(x),K.delete(x),Dt.forEach(De=>K.delete(De.key));let de=uv([...jr,...Is]);if(de){if(de.idx>=Qn.length){let De=Dt[de.idx-Qn.length].key;me.add(De)}return cr(Ke,de.result)}let{loaderData:Fe,errors:Ot}=sv(C,C.matches,Qn,jr,void 0,Dt,Is,Ze);if(C.fetchers.has(x)){let De=Wr(Ee.data);C.fetchers.set(x,De)}Bl(kn),C.navigation.state==="loading"&&kn>Y?(ge(_,"Expected pending action"),w&&w.abort(),Wn(C.navigation.location,{matches:Gn,loaderData:Fe,errors:Ot,fetchers:new Map(C.fetchers)})):(Ne({errors:Ot,loaderData:ov(C.loaderData,Fe,Gn,Ot),fetchers:new Map(C.fetchers)}),fe=!1)}async function Bo(x,D,M,j,Q,te,se,q){let le=C.fetchers.get(x);rn(x,fa(q,le?le.data:void 0),{flushSync:se});let ne=new AbortController,re=Cs(t.history,M,ne.signal);if(te){let Ee=await bi(Q,M,re.signal);if(Ee.type==="aborted")return;if(Ee.type==="error"){let{error:nt}=Fr(M,Ee);gn(x,D,nt,{flushSync:se});return}else if(Ee.matches)Q=Ee.matches,j=wa(Q,M);else{gn(x,D,Wt(404,{pathname:M}),{flushSync:se});return}}K.set(x,ne);let ye=$,Ce=(await Vr("loader",re,[j],Q))[0];if(Hi(Ce)&&(Ce=await yE(Ce,re.signal,!0)||Ce),K.get(x)===ne&&K.delete(x),!re.signal.aborted){if(We.has(x)){rn(x,Wr(void 0));return}if(Wi(Ce))if(Y>ye){rn(x,Wr(void 0));return}else{me.add(x),await cr(re,Ce);return}if(un(Ce)){gn(x,D,Ce.error);return}ge(!Hi(Ce),"Unhandled fetcher deferred data"),rn(x,Wr(Ce.data))}}async function cr(x,D,M){let{submission:j,fetcherSubmission:Q,replace:te}=M===void 0?{}:M;D.response.headers.has("X-Remix-Revalidate")&&(fe=!0);let se=D.response.headers.get("Location");ge(se,"Expected a Location header on the redirect Response"),se=rv(se,new URL(x.url),u);let q=al(C.location,se,{_isRedirect:!0});if(n){let Ce=!1;if(D.response.headers.has("X-Remix-Reload-Document"))Ce=!0;else if(hm.test(se)){const Ee=t.history.createURL(se);Ce=Ee.origin!==e.location.origin||No(Ee.pathname,u)==null}if(Ce){te?e.location.replace(se):e.location.assign(se);return}}w=null;let le=te===!0||D.response.headers.has("X-Remix-Replace")?ot.Replace:ot.Push,{formMethod:ne,formAction:re,formEncType:ye}=C.navigation;!j&&!Q&&ne&&re&&ye&&(j=dv(C.navigation));let Se=j||Q;if(HA.has(D.response.status)&&Se&&bn(Se.formMethod))await qn(le,q,{submission:Ge({},Se,{formAction:se}),preventScrollReset:g});else{let Ce=_d(q,j);await qn(le,q,{overrideNavigation:Ce,fetcherSubmission:Q,preventScrollReset:g})}}async function Vr(x,D,M,j){try{let Q=await ZA(c,x,D,M,j,s,i);return await Promise.all(Q.map((te,se)=>{if(oP(te)){let q=te.result;return{type:Oe.redirect,response:nP(q,D,M[se].route.id,j,u,f.v7_relativeSplatPath)}}return tP(te)}))}catch(Q){return M.map(()=>({type:Oe.error,error:Q}))}}async function ht(x,D,M,j,Q){let[te,...se]=await Promise.all([M.length?Vr("loader",Q,M,D):[],...j.map(q=>{if(q.matches&&q.match&&q.controller){let le=Cs(t.history,q.path,q.controller.signal);return Vr("loader",le,[q.match],q.matches).then(ne=>ne[0])}else return Promise.resolve({type:Oe.error,error:Wt(404,{pathname:q.path})})})]);return await Promise.all([hv(x,M,te,te.map(()=>Q.signal),!1,C.loaderData),hv(x,j.map(q=>q.match),se,j.map(q=>q.controller?q.controller.signal:null),!0)]),{loaderResults:te,fetcherResults:se}}function dt(){fe=!0,it.push(...Oi()),he.forEach((x,D)=>{K.has(D)&&(Yt.add(D),Cn(D))})}function rn(x,D,M){M===void 0&&(M={}),C.fetchers.set(x,D),Ne({fetchers:new Map(C.fetchers)},{flushSync:(M&&M.flushSync)===!0})}function gn(x,D,M,j){j===void 0&&(j={});let Q=Ws(C.matches,D);_s(x),Ne({errors:{[Q.route.id]:M},fetchers:new Map(C.fetchers)},{flushSync:(j&&j.flushSync)===!0})}function Ho(x){return f.v7_fetcherPersist&&(Pe.set(x,(Pe.get(x)||0)+1),We.has(x)&&We.delete(x)),C.fetchers.get(x)||WA}function _s(x){let D=C.fetchers.get(x);K.has(x)&&!(D&&D.state==="loading"&&Z.has(x))&&Cn(x),he.delete(x),Z.delete(x),me.delete(x),We.delete(x),Yt.delete(x),C.fetchers.delete(x)}function Ni(x){if(f.v7_fetcherPersist){let D=(Pe.get(x)||0)-1;D<=0?(Pe.delete(x),We.add(x)):Pe.set(x,D)}else _s(x);Ne({fetchers:new Map(C.fetchers)})}function Cn(x){let D=K.get(x);ge(D,"Expected fetch controller: "+x),D.abort(),K.delete(x)}function Wo(x){for(let D of x){let M=Ho(D),j=Wr(M.data);C.fetchers.set(D,j)}}function ws(){let x=[],D=!1;for(let M of me){let j=C.fetchers.get(M);ge(j,"Expected fetcher: "+M),j.state==="loading"&&(me.delete(M),x.push(M),D=!0)}return Wo(x),D}function Bl(x){let D=[];for(let[M,j]of Z)if(j<x){let Q=C.fetchers.get(M);ge(Q,"Expected fetcher: "+M),Q.state==="loading"&&(Cn(M),Z.delete(M),D.push(M))}return Wo(D),D.length>0}function Uh(x,D){let M=C.blockers.get(x)||da;return qe.get(x)!==D&&qe.set(x,D),M}function Es(x){C.blockers.delete(x),qe.delete(x)}function Di(x,D){let M=C.blockers.get(x)||da;ge(M.state==="unblocked"&&D.state==="blocked"||M.state==="blocked"&&D.state==="blocked"||M.state==="blocked"&&D.state==="proceeding"||M.state==="blocked"&&D.state==="unblocked"||M.state==="proceeding"&&D.state==="unblocked","Invalid blocker state transition: "+M.state+" -> "+D.state);let j=new Map(C.blockers);j.set(x,D),Ne({blockers:j})}function qo(x){let{currentLocation:D,nextLocation:M,historyAction:j}=x;if(qe.size===0)return;qe.size>1&&ho(!1,"A router only supports one blocker at a time");let Q=Array.from(qe.entries()),[te,se]=Q[Q.length-1],q=C.blockers.get(te);if(!(q&&q.state==="proceeding")&&se({currentLocation:D,nextLocation:M,historyAction:j}))return te}function hr(x){let D=Wt(404,{pathname:x}),M=l||o,{matches:j,route:Q}=lv(M);return Oi(),{notFoundMatches:j,route:Q,error:D}}function Fr(x,D){return{boundaryId:Ws(D.partialMatches).route.id,error:Wt(400,{type:"route-discovery",pathname:x,message:D.error!=null&&"message"in D.error?D.error:String(D.error)})}}function Oi(x){let D=[];return Ze.forEach((M,j)=>{(!x||x(j))&&(M.cancel(),D.push(j),Ze.delete(j))}),D}function dr(x,D,M){if(R=x,O=D,P=M||null,!T&&C.navigation===vd){T=!0;let j=Go(C.location,C.matches);j!=null&&Ne({restoreScrollPosition:j})}return()=>{R=null,O=null,P=null}}function Ko(x,D){return P&&P(x,D.map(j=>TA(j,C.loaderData)))||x.key}function Ts(x,D){if(R&&O){let M=Ko(x,D);R[M]=O()}}function Go(x,D){if(R){let M=Ko(x,D),j=R[M];if(typeof j=="number")return j}return null}function Kn(x,D,M){if(d)if(x){let j=x[x.length-1].route;if(j.path&&(j.path==="*"||j.path.endsWith("/*")))return{active:!0,matches:Fu(D,M,u,!0)}}else return{active:!0,matches:Fu(D,M,u,!0)||[]};return{active:!1,matches:null}}async function bi(x,D,M){let j=x,Q=j.length>0?j[j.length-1].route:null;for(;;){let te=l==null,se=l||o;try{await XA(d,D,j,se,s,i,Nt,M)}catch(re){return{type:"error",error:re,partialMatches:j}}finally{te&&(o=[...o])}if(M.aborted)return{type:"aborted"};let q=ji(se,D,u),le=!1;if(q){let re=q[q.length-1].route;if(re.index)return{type:"success",matches:q};if(re.path&&re.path.length>0)if(re.path==="*")le=!0;else return{type:"success",matches:q}}let ne=Fu(se,D,u,!0);if(!ne||j.map(re=>re.route.id).join("-")===ne.map(re=>re.route.id).join("-"))return{type:"success",matches:le?q:null};if(j=ne,Q=j[j.length-1].route,Q.path==="*")return{type:"success",matches:j}}}function Et(x){s={},l=ll(x,i,void 0,s)}function Hl(x,D){let M=l==null;pE(x,D,l||o,s,i),M&&(o=[...o],Ne({}))}return F={get basename(){return u},get future(){return f},get state(){return C},get routes(){return o},get window(){return e},initialize:An,subscribe:Pn,enableScrollRestoration:dr,navigate:vs,fetch:$l,revalidate:jo,createHref:x=>t.history.createHref(x),encodeLocation:x=>t.history.encodeLocation(x),getFetcher:Ho,deleteFetcher:Ni,dispose:Hn,getBlocker:Uh,deleteBlocker:Es,patchRoutes:Hl,_internalFetchControllers:K,_internalActiveDeferreds:Ze,_internalSetRoutes:Et},F}function GA(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function bf(t,e,n,r,i,s,o,l){let u,c;if(o){u=[];for(let f of e)if(u.push(f),f.route.id===o){c=f;break}}else u=e,c=e[e.length-1];let d=lh(i||".",ah(u,s),No(t.pathname,n)||t.pathname,l==="path");return i==null&&(d.search=t.search,d.hash=t.hash),(i==null||i===""||i===".")&&c&&c.route.index&&!dm(d.search)&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(d.pathname=d.pathname==="/"?n:Rr([n,d.pathname])),is(d)}function Zy(t,e,n,r){if(!r||!GA(r))return{path:n};if(r.formMethod&&!lP(r.formMethod))return{path:n,error:Wt(405,{method:r.formMethod})};let i=()=>({path:n,error:Wt(400,{type:"invalid-body"})}),s=r.formMethod||"get",o=t?s.toUpperCase():s.toLowerCase(),l=mE(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!bn(o))return i();let m=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((E,R)=>{let[P,O]=R;return""+E+P+"="+O+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:l,formEncType:r.formEncType,formData:void 0,json:void 0,text:m}}}else if(r.formEncType==="application/json"){if(!bn(o))return i();try{let m=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:l,formEncType:r.formEncType,formData:void 0,json:m,text:void 0}}}catch{return i()}}}ge(typeof FormData=="function","FormData is not available in this environment");let u,c;if(r.formData)u=Lf(r.formData),c=r.formData;else if(r.body instanceof FormData)u=Lf(r.body),c=r.body;else if(r.body instanceof URLSearchParams)u=r.body,c=iv(u);else if(r.body==null)u=new URLSearchParams,c=new FormData;else try{u=new URLSearchParams(r.body),c=iv(u)}catch{return i()}let d={formMethod:o,formAction:l,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:c,json:void 0,text:void 0};if(bn(d.formMethod))return{path:n,submission:d};let f=Pi(n);return e&&f.search&&dm(f.search)&&u.append("index",""),f.search="?"+u,{path:is(f),submission:d}}function QA(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function ev(t,e,n,r,i,s,o,l,u,c,d,f,m,E,R,P){let O=P?un(P[1])?P[1].error:P[1].data:void 0,T=t.createURL(e.location),v=t.createURL(i),S=P&&un(P[1])?P[0]:void 0,b=S?QA(n,S):n,F=P?P[1].statusCode:void 0,C=o&&F&&F>=400,_=b.filter((w,I)=>{let{route:k}=w;if(k.lazy)return!0;if(k.loader==null)return!1;if(s)return typeof k.loader!="function"||k.loader.hydrate?!0:e.loaderData[k.id]===void 0&&(!e.errors||e.errors[k.id]===void 0);if(YA(e.loaderData,e.matches[I],w)||u.some(fe=>fe===w.route.id))return!0;let N=e.matches[I],A=w;return tv(w,Ge({currentUrl:T,currentParams:N.params,nextUrl:v,nextParams:A.params},r,{actionResult:O,actionStatus:F,defaultShouldRevalidate:C?!1:l||T.pathname+T.search===v.pathname+v.search||T.search!==v.search||fE(N,A)}))}),g=[];return f.forEach((w,I)=>{if(s||!n.some(it=>it.route.id===w.routeId)||d.has(I))return;let k=ji(E,w.path,R);if(!k){g.push({key:I,routeId:w.routeId,path:w.path,matches:null,match:null,controller:null});return}let N=e.fetchers.get(I),A=wa(k,w.path),fe=!1;m.has(I)?fe=!1:c.has(I)?(c.delete(I),fe=!0):N&&N.state!=="idle"&&N.data===void 0?fe=l:fe=tv(A,Ge({currentUrl:T,currentParams:e.matches[e.matches.length-1].params,nextUrl:v,nextParams:n[n.length-1].params},r,{actionResult:O,actionStatus:F,defaultShouldRevalidate:C?!1:l})),fe&&g.push({key:I,routeId:w.routeId,path:w.path,matches:k,match:A,controller:new AbortController})}),[_,g]}function YA(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function fE(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function tv(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function XA(t,e,n,r,i,s,o,l){let u=[e,...n.map(c=>c.route.id)].join("-");try{let c=o.get(u);c||(c=t({path:e,matches:n,patch:(d,f)=>{l.aborted||pE(d,f,r,i,s)}}),o.set(u,c)),c&&sP(c)&&await c}finally{o.delete(u)}}function pE(t,e,n,r,i){if(t){var s;let o=r[t];ge(o,"No route found to patch children into: routeId = "+t);let l=ll(e,i,[t,"patch",String(((s=o.children)==null?void 0:s.length)||"0")],r);o.children?o.children.push(...l):o.children=l}else{let o=ll(e,i,["patch",String(n.length||"0")],r);n.push(...o)}}async function nv(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];ge(i,"No route found in manifest");let s={};for(let o in r){let u=i[o]!==void 0&&o!=="hasErrorBoundary";ho(!u,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!u&&!wA.has(o)&&(s[o]=r[o])}Object.assign(i,s),Object.assign(i,Ge({},e(i),{lazy:void 0}))}function JA(t){return Promise.all(t.matches.map(e=>e.resolve()))}async function ZA(t,e,n,r,i,s,o,l){let u=r.reduce((f,m)=>f.add(m.route.id),new Set),c=new Set,d=await t({matches:i.map(f=>{let m=u.has(f.route.id);return Ge({},f,{shouldLoad:m,resolve:R=>(c.add(f.route.id),m?eP(e,n,f,s,o,R,l):Promise.resolve({type:Oe.data,result:void 0}))})}),request:n,params:i[0].params,context:l});return i.forEach(f=>ge(c.has(f.route.id),'`match.resolve()` was not called for route id "'+f.route.id+'". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.')),d.filter((f,m)=>u.has(i[m].route.id))}async function eP(t,e,n,r,i,s,o){let l,u,c=d=>{let f,m=new Promise((P,O)=>f=O);u=()=>f(),e.signal.addEventListener("abort",u);let E=P=>typeof d!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+t+'" [routeId: '+n.route.id+"]"))):d({request:e,params:n.params,context:o},...P!==void 0?[P]:[]),R;return s?R=s(P=>E(P)):R=(async()=>{try{return{type:"data",result:await E()}}catch(P){return{type:"error",result:P}}})(),Promise.race([R,m])};try{let d=n.route[t];if(n.route.lazy)if(d){let f,[m]=await Promise.all([c(d).catch(E=>{f=E}),nv(n.route,i,r)]);if(f!==void 0)throw f;l=m}else if(await nv(n.route,i,r),d=n.route[t],d)l=await c(d);else if(t==="action"){let f=new URL(e.url),m=f.pathname+f.search;throw Wt(405,{method:e.method,pathname:m,routeId:n.route.id})}else return{type:Oe.data,result:void 0};else if(d)l=await c(d);else{let f=new URL(e.url),m=f.pathname+f.search;throw Wt(404,{pathname:m})}ge(l.result!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(d){return{type:Oe.error,result:d}}finally{u&&e.signal.removeEventListener("abort",u)}return l}async function tP(t){let{result:e,type:n}=t;if(gE(e)){let c;try{let d=e.headers.get("Content-Type");d&&/\bapplication\/json\b/.test(d)?e.body==null?c=null:c=await e.json():c=await e.text()}catch(d){return{type:Oe.error,error:d}}return n===Oe.error?{type:Oe.error,error:new Ic(e.status,e.statusText,c),statusCode:e.status,headers:e.headers}:{type:Oe.data,data:c,statusCode:e.status,headers:e.headers}}if(n===Oe.error){if(cv(e)){var r;if(e.data instanceof Error){var i;return{type:Oe.error,error:e.data,statusCode:(i=e.init)==null?void 0:i.status}}e=new Ic(((r=e.init)==null?void 0:r.status)||500,void 0,e.data)}return{type:Oe.error,error:e,statusCode:uh(e)?e.status:void 0}}if(aP(e)){var s,o;return{type:Oe.deferred,deferredData:e,statusCode:(s=e.init)==null?void 0:s.status,headers:((o=e.init)==null?void 0:o.headers)&&new Headers(e.init.headers)}}if(cv(e)){var l,u;return{type:Oe.data,data:e.data,statusCode:(l=e.init)==null?void 0:l.status,headers:(u=e.init)!=null&&u.headers?new Headers(e.init.headers):void 0}}return{type:Oe.data,data:e}}function nP(t,e,n,r,i,s){let o=t.headers.get("Location");if(ge(o,"Redirects returned/thrown from loaders/actions must have a Location header"),!hm.test(o)){let l=r.slice(0,r.findIndex(u=>u.route.id===n)+1);o=bf(new URL(e.url),l,i,!0,o,s),t.headers.set("Location",o)}return t}function rv(t,e,n){if(hm.test(t)){let r=t,i=r.startsWith("//")?new URL(e.protocol+r):new URL(r),s=No(i.pathname,n)!=null;if(i.origin===e.origin&&s)return i.pathname+i.search+i.hash}return t}function Cs(t,e,n,r){let i=t.createURL(mE(e)).toString(),s={signal:n};if(r&&bn(r.formMethod)){let{formMethod:o,formEncType:l}=r;s.method=o.toUpperCase(),l==="application/json"?(s.headers=new Headers({"Content-Type":l}),s.body=JSON.stringify(r.json)):l==="text/plain"?s.body=r.text:l==="application/x-www-form-urlencoded"&&r.formData?s.body=Lf(r.formData):s.body=r.formData}return new Request(i,s)}function Lf(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,typeof r=="string"?r:r.name);return e}function iv(t){let e=new FormData;for(let[n,r]of t.entries())e.append(n,r);return e}function rP(t,e,n,r,i,s){let o={},l=null,u,c=!1,d={},f=r&&un(r[1])?r[1].error:void 0;return n.forEach((m,E)=>{let R=e[E].route.id;if(ge(!Wi(m),"Cannot handle redirect results in processLoaderData"),un(m)){let P=m.error;f!==void 0&&(P=f,f=void 0),l=l||{};{let O=Ws(t,R);l[O.route.id]==null&&(l[O.route.id]=P)}o[R]=void 0,c||(c=!0,u=uh(m.error)?m.error.status:500),m.headers&&(d[R]=m.headers)}else Hi(m)?(i.set(R,m.deferredData),o[R]=m.deferredData.data,m.statusCode!=null&&m.statusCode!==200&&!c&&(u=m.statusCode),m.headers&&(d[R]=m.headers)):(o[R]=m.data,m.statusCode&&m.statusCode!==200&&!c&&(u=m.statusCode),m.headers&&(d[R]=m.headers))}),f!==void 0&&r&&(l={[r[0]]:f},o[r[0]]=void 0),{loaderData:o,errors:l,statusCode:u||200,loaderHeaders:d}}function sv(t,e,n,r,i,s,o,l){let{loaderData:u,errors:c}=rP(e,n,r,i,l);for(let d=0;d<s.length;d++){let{key:f,match:m,controller:E}=s[d];ge(o!==void 0&&o[d]!==void 0,"Did not find corresponding fetcher result");let R=o[d];if(!(E&&E.signal.aborted))if(un(R)){let P=Ws(t.matches,m==null?void 0:m.route.id);c&&c[P.route.id]||(c=Ge({},c,{[P.route.id]:R.error})),t.fetchers.delete(f)}else if(Wi(R))ge(!1,"Unhandled fetcher revalidation redirect");else if(Hi(R))ge(!1,"Unhandled fetcher deferred data");else{let P=Wr(R.data);t.fetchers.set(f,P)}}return{loaderData:u,errors:c}}function ov(t,e,n,r){let i=Ge({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&s.route.loader&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function av(t){return t?un(t[1])?{actionData:{}}:{actionData:{[t[0]]:t[1].data}}:{}}function Ws(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function lv(t){let e=t.length===1?t[0]:t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function Wt(t,e){let{pathname:n,routeId:r,method:i,type:s,message:o}=e===void 0?{}:e,l="Unknown Server Error",u="Unknown @remix-run/router error";return t===400?(l="Bad Request",s==="route-discovery"?u='Unable to match URL "'+n+'" - the `unstable_patchRoutesOnMiss()` '+(`function threw the following error:
`+o):i&&n&&r?u="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"?u="defer() is not supported in actions":s==="invalid-body"&&(u="Unable to encode submission body")):t===403?(l="Forbidden",u='Route "'+r+'" does not match URL "'+n+'"'):t===404?(l="Not Found",u='No route matches URL "'+n+'"'):t===405&&(l="Method Not Allowed",i&&n&&r?u="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(u='Invalid request method "'+i.toUpperCase()+'"')),new Ic(t||500,l,new Error(u),!0)}function uv(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(Wi(n))return{result:n,idx:e}}}function mE(t){let e=typeof t=="string"?Pi(t):t;return is(Ge({},e,{hash:""}))}function iP(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function sP(t){return typeof t=="object"&&t!=null&&"then"in t}function oP(t){return gE(t.result)&&BA.has(t.result.status)}function Hi(t){return t.type===Oe.deferred}function un(t){return t.type===Oe.error}function Wi(t){return(t&&t.type)===Oe.redirect}function cv(t){return typeof t=="object"&&t!=null&&"type"in t&&"data"in t&&"init"in t&&t.type==="DataWithResponseInit"}function aP(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function gE(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function lP(t){return $A.has(t.toLowerCase())}function bn(t){return jA.has(t.toLowerCase())}async function hv(t,e,n,r,i,s){for(let o=0;o<n.length;o++){let l=n[o],u=e[o];if(!u)continue;let c=t.find(f=>f.route.id===u.route.id),d=c!=null&&!fE(c,u)&&(s&&s[u.route.id])!==void 0;if(Hi(l)&&(i||d)){let f=r[o];ge(f,"Expected an AbortSignal for revalidating fetcher deferred result"),await yE(l,f,i).then(m=>{m&&(n[o]=m||n[o])})}}}async function yE(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:Oe.data,data:t.deferredData.unwrappedData}}catch(i){return{type:Oe.error,error:i}}return{type:Oe.data,data:t.deferredData.data}}}function dm(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function wa(t,e){let n=typeof e=="string"?Pi(e).search:e.search;if(t[t.length-1].route.index&&dm(n||""))return t[t.length-1];let r=cE(t);return r[r.length-1]}function dv(t){let{formMethod:e,formAction:n,formEncType:r,text:i,formData:s,json:o}=t;if(!(!e||!n||!r)){if(i!=null)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(s!=null)return{formMethod:e,formAction:n,formEncType:r,formData:s,json:void 0,text:void 0};if(o!==void 0)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function _d(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function uP(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function fa(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function cP(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0}}function Wr(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function hP(t,e){try{let n=t.sessionStorage.getItem(dE);if(n){let r=JSON.parse(n);for(let[i,s]of Object.entries(r||{}))s&&Array.isArray(s)&&e.set(i,new Set(s||[]))}}catch{}}function dP(t,e){if(e.size>0){let n={};for(let[r,i]of e)n[r]=[...i];try{t.sessionStorage.setItem(dE,JSON.stringify(n))}catch(r){ho(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.26.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Sc(){return Sc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Sc.apply(this,arguments)}const ch=U.createContext(null),vE=U.createContext(null),Ci=U.createContext(null),fm=U.createContext(null),Lr=U.createContext({outlet:null,matches:[],isDataRoute:!1}),_E=U.createContext(null);function fP(t,e){let{relative:n}=e===void 0?{}:e;Do()||ge(!1);let{basename:r,navigator:i}=U.useContext(Ci),{hash:s,pathname:o,search:l}=EE(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:Rr([r,o])),i.createHref({pathname:u,search:l,hash:s})}function Do(){return U.useContext(fm)!=null}function Al(){return Do()||ge(!1),U.useContext(fm).location}function wE(t){U.useContext(Ci).static||U.useLayoutEffect(t)}function Pl(){let{isDataRoute:t}=U.useContext(Lr);return t?PP():pP()}function pP(){Do()||ge(!1);let t=U.useContext(ch),{basename:e,future:n,navigator:r}=U.useContext(Ci),{matches:i}=U.useContext(Lr),{pathname:s}=Al(),o=JSON.stringify(ah(i,n.v7_relativeSplatPath)),l=U.useRef(!1);return wE(()=>{l.current=!0}),U.useCallback(function(c,d){if(d===void 0&&(d={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let f=lh(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:Rr([e,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[e,r,o,s,t])}const mP=U.createContext(null);function gP(t){let e=U.useContext(Lr).outlet;return e&&U.createElement(mP.Provider,{value:t},e)}function EE(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=U.useContext(Ci),{matches:i}=U.useContext(Lr),{pathname:s}=Al(),o=JSON.stringify(ah(i,r.v7_relativeSplatPath));return U.useMemo(()=>lh(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function yP(t,e,n,r){Do()||ge(!1);let{navigator:i}=U.useContext(Ci),{matches:s}=U.useContext(Lr),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=Al(),d;d=c;let f=d.pathname||"/",m=f;if(u!=="/"){let P=u.replace(/^\//,"").split("/");m="/"+f.replace(/^\//,"").split("/").slice(P.length).join("/")}let E=ji(t,{pathname:m});return TP(E&&E.map(P=>Object.assign({},P,{params:Object.assign({},l,P.params),pathname:Rr([u,i.encodeLocation?i.encodeLocation(P.pathname).pathname:P.pathname]),pathnameBase:P.pathnameBase==="/"?u:Rr([u,i.encodeLocation?i.encodeLocation(P.pathnameBase).pathname:P.pathnameBase])})),s,n,r)}function vP(){let t=AP(),e=uh(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return U.createElement(U.Fragment,null,U.createElement("h2",null,"Unexpected Application Error!"),U.createElement("h3",{style:{fontStyle:"italic"}},e),n?U.createElement("pre",{style:i},n):null,null)}const _P=U.createElement(vP,null);class wP extends U.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?U.createElement(Lr.Provider,{value:this.props.routeContext},U.createElement(_E.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function EP(t){let{routeContext:e,match:n,children:r}=t,i=U.useContext(ch);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),U.createElement(Lr.Provider,{value:e},r)}function TP(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=o.findIndex(f=>f.route.id&&(l==null?void 0:l[f.route.id])!==void 0);d>=0||ge(!1),o=o.slice(0,Math.min(o.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:m,errors:E}=n,R=f.route.loader&&m[f.route.id]===void 0&&(!E||E[f.route.id]===void 0);if(f.route.lazy||R){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,f,m)=>{let E,R=!1,P=null,O=null;n&&(E=l&&f.route.id?l[f.route.id]:void 0,P=f.route.errorElement||_P,u&&(c<0&&m===0?(R=!0,O=null):c===m&&(R=!0,O=f.route.hydrateFallbackElement||null)));let T=e.concat(o.slice(0,m+1)),v=()=>{let S;return E?S=P:R?S=O:f.route.Component?S=U.createElement(f.route.Component,null):f.route.element?S=f.route.element:S=d,U.createElement(EP,{match:f,routeContext:{outlet:d,matches:T,isDataRoute:n!=null},children:S})};return n&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?U.createElement(wP,{location:n.location,revalidation:n.revalidation,component:P,error:E,children:v(),routeContext:{outlet:null,matches:T,isDataRoute:!0}}):v()},null)}var TE=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(TE||{}),Rc=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Rc||{});function IP(t){let e=U.useContext(ch);return e||ge(!1),e}function SP(t){let e=U.useContext(vE);return e||ge(!1),e}function RP(t){let e=U.useContext(Lr);return e||ge(!1),e}function IE(t){let e=RP(),n=e.matches[e.matches.length-1];return n.route.id||ge(!1),n.route.id}function AP(){var t;let e=U.useContext(_E),n=SP(Rc.UseRouteError),r=IE(Rc.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function PP(){let{router:t}=IP(TE.UseNavigateStable),e=IE(Rc.UseNavigateStable),n=U.useRef(!1);return wE(()=>{n.current=!0}),U.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Sc({fromRouteId:e},s)))},[t,e])}function CP(t){let{to:e,replace:n,state:r,relative:i}=t;Do()||ge(!1);let{future:s,static:o}=U.useContext(Ci),{matches:l}=U.useContext(Lr),{pathname:u}=Al(),c=Pl(),d=lh(e,ah(l,s.v7_relativeSplatPath),u,i==="path"),f=JSON.stringify(d);return U.useEffect(()=>c(JSON.parse(f),{replace:n,state:r,relative:i}),[c,f,i,n,r]),null}function kP(t){return gP(t.context)}function xP(t){let{basename:e="/",children:n=null,location:r,navigationType:i=ot.Pop,navigator:s,static:o=!1,future:l}=t;Do()&&ge(!1);let u=e.replace(/^\/*/,"/"),c=U.useMemo(()=>({basename:u,navigator:s,static:o,future:Sc({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=Pi(r));let{pathname:d="/",search:f="",hash:m="",state:E=null,key:R="default"}=r,P=U.useMemo(()=>{let O=No(d,u);return O==null?null:{location:{pathname:O,search:f,hash:m,state:E,key:R},navigationType:i}},[u,d,f,m,E,R,i]);return P==null?null:U.createElement(Ci.Provider,{value:c},U.createElement(fm.Provider,{children:n,value:P}))}new Promise(()=>{});function NP(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:U.createElement(t.Component),Component:void 0}),t.HydrateFallback&&Object.assign(e,{hydrateFallbackElement:U.createElement(t.HydrateFallback),HydrateFallback:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:U.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.26.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ul(){return ul=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ul.apply(this,arguments)}function DP(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function OP(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function bP(t,e){return t.button===0&&(!e||e==="_self")&&!OP(t)}const LP=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],MP="6";try{window.__reactRouterVersion=MP}catch{}function VP(t,e){return KA({basename:void 0,future:ul({},void 0,{v7_prependBasename:!0}),history:yA({window:void 0}),hydrationData:FP(),routes:t,mapRouteProperties:NP,unstable_dataStrategy:void 0,unstable_patchRoutesOnMiss:void 0,window:void 0}).initialize()}function FP(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=ul({},e,{errors:UP(e.errors)})),e}function UP(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new Ic(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let s=window[i.__subType];if(typeof s=="function")try{let o=new s(i.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let s=new Error(i.message);s.stack="",n[r]=s}}else n[r]=i;return n}const jP=U.createContext({isTransitioning:!1}),zP=U.createContext(new Map),$P="startTransition",fv=iS[$P],BP="flushSync",pv=gA[BP];function HP(t){fv?fv(t):t()}function pa(t){pv?pv(t):t()}let WP=class{constructor(){this.status="pending",this.promise=new Promise((e,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",e(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}};function qP(t){let{fallbackElement:e,router:n,future:r}=t,[i,s]=U.useState(n.state),[o,l]=U.useState(),[u,c]=U.useState({isTransitioning:!1}),[d,f]=U.useState(),[m,E]=U.useState(),[R,P]=U.useState(),O=U.useRef(new Map),{v7_startTransition:T}=r||{},v=U.useCallback(g=>{T?HP(g):g()},[T]),S=U.useCallback((g,w)=>{let{deletedFetchers:I,unstable_flushSync:k,unstable_viewTransitionOpts:N}=w;I.forEach(fe=>O.current.delete(fe)),g.fetchers.forEach((fe,it)=>{fe.data!==void 0&&O.current.set(it,fe.data)});let A=n.window==null||n.window.document==null||typeof n.window.document.startViewTransition!="function";if(!N||A){k?pa(()=>s(g)):v(()=>s(g));return}if(k){pa(()=>{m&&(d&&d.resolve(),m.skipTransition()),c({isTransitioning:!0,flushSync:!0,currentLocation:N.currentLocation,nextLocation:N.nextLocation})});let fe=n.window.document.startViewTransition(()=>{pa(()=>s(g))});fe.finished.finally(()=>{pa(()=>{f(void 0),E(void 0),l(void 0),c({isTransitioning:!1})})}),pa(()=>E(fe));return}m?(d&&d.resolve(),m.skipTransition(),P({state:g,currentLocation:N.currentLocation,nextLocation:N.nextLocation})):(l(g),c({isTransitioning:!0,flushSync:!1,currentLocation:N.currentLocation,nextLocation:N.nextLocation}))},[n.window,m,d,O,v]);U.useLayoutEffect(()=>n.subscribe(S),[n,S]),U.useEffect(()=>{u.isTransitioning&&!u.flushSync&&f(new WP)},[u]),U.useEffect(()=>{if(d&&o&&n.window){let g=o,w=d.promise,I=n.window.document.startViewTransition(async()=>{v(()=>s(g)),await w});I.finished.finally(()=>{f(void 0),E(void 0),l(void 0),c({isTransitioning:!1})}),E(I)}},[v,o,d,n.window]),U.useEffect(()=>{d&&o&&i.location.key===o.location.key&&d.resolve()},[d,m,i.location,o]),U.useEffect(()=>{!u.isTransitioning&&R&&(l(R.state),c({isTransitioning:!0,flushSync:!1,currentLocation:R.currentLocation,nextLocation:R.nextLocation}),P(void 0))},[u.isTransitioning,R]),U.useEffect(()=>{},[]);let b=U.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:g=>n.navigate(g),push:(g,w,I)=>n.navigate(g,{state:w,preventScrollReset:I==null?void 0:I.preventScrollReset}),replace:(g,w,I)=>n.navigate(g,{replace:!0,state:w,preventScrollReset:I==null?void 0:I.preventScrollReset})}),[n]),F=n.basename||"/",C=U.useMemo(()=>({router:n,navigator:b,static:!1,basename:F}),[n,b,F]),_=U.useMemo(()=>({v7_relativeSplatPath:n.future.v7_relativeSplatPath}),[n.future.v7_relativeSplatPath]);return U.createElement(U.Fragment,null,U.createElement(ch.Provider,{value:C},U.createElement(vE.Provider,{value:i},U.createElement(zP.Provider,{value:O.current},U.createElement(jP.Provider,{value:u},U.createElement(xP,{basename:F,location:i.location,navigationType:i.historyAction,navigator:b,future:_},i.initialized||n.future.v7_partialHydration?U.createElement(KP,{routes:n.routes,future:n.future,state:i}):e))))),null)}const KP=U.memo(GP);function GP(t){let{routes:e,future:n,state:r}=t;return yP(e,void 0,r,n)}const QP=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",YP=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,SE=U.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:c,preventScrollReset:d,unstable_viewTransition:f}=e,m=DP(e,LP),{basename:E}=U.useContext(Ci),R,P=!1;if(typeof c=="string"&&YP.test(c)&&(R=c,QP))try{let S=new URL(window.location.href),b=c.startsWith("//")?new URL(S.protocol+c):new URL(c),F=No(b.pathname,E);b.origin===S.origin&&F!=null?c=F+b.search+b.hash:P=!0}catch{}let O=fP(c,{relative:i}),T=XP(c,{replace:o,state:l,target:u,preventScrollReset:d,relative:i,unstable_viewTransition:f});function v(S){r&&r(S),S.defaultPrevented||T(S)}return U.createElement("a",ul({},m,{href:R||O,onClick:P||s?r:v,ref:n,target:u}))});var mv;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(mv||(mv={}));var gv;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(gv||(gv={}));function XP(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l}=e===void 0?{}:e,u=Pl(),c=Al(),d=EE(t,{relative:o});return U.useCallback(f=>{if(bP(f,n)){f.preventDefault();let m=r!==void 0?r:is(c)===is(d);u(t,{replace:m,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l})}},[c,u,d,r,i,n,t,s,o,l])}var $t=function(){return $t=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},$t.apply(this,arguments)};function pm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function cl(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}var ze="-ms-",Fa="-moz-",ke="-webkit-",RE="comm",hh="rule",mm="decl",JP="@import",AE="@keyframes",ZP="@layer",PE=Math.abs,gm=String.fromCharCode,Mf=Object.assign;function eC(t,e){return vt(t,0)^45?(((e<<2^vt(t,0))<<2^vt(t,1))<<2^vt(t,2))<<2^vt(t,3):0}function CE(t){return t.trim()}function yr(t,e){return(t=e.exec(t))?t[0]:t}function pe(t,e,n){return t.replace(e,n)}function Uu(t,e,n){return t.indexOf(e,n)}function vt(t,e){return t.charCodeAt(e)|0}function fo(t,e,n){return t.slice(e,n)}function Jn(t){return t.length}function kE(t){return t.length}function Ea(t,e){return e.push(t),t}function tC(t,e){return t.map(e).join("")}function yv(t,e){return t.filter(function(n){return!yr(n,e)})}var dh=1,po=1,xE=0,Sn=0,lt=0,Oo="";function fh(t,e,n,r,i,s,o,l){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:dh,column:po,length:o,return:"",siblings:l}}function qr(t,e){return Mf(fh("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function ks(t){for(;t.root;)t=qr(t.root,{children:[t]});Ea(t,t.siblings)}function nC(){return lt}function rC(){return lt=Sn>0?vt(Oo,--Sn):0,po--,lt===10&&(po=1,dh--),lt}function Un(){return lt=Sn<xE?vt(Oo,Sn++):0,po++,lt===10&&(po=1,dh++),lt}function Xi(){return vt(Oo,Sn)}function ju(){return Sn}function ph(t,e){return fo(Oo,t,e)}function Vf(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function iC(t){return dh=po=1,xE=Jn(Oo=t),Sn=0,[]}function sC(t){return Oo="",t}function wd(t){return CE(ph(Sn-1,Ff(t===91?t+2:t===40?t+1:t)))}function oC(t){for(;(lt=Xi())&&lt<33;)Un();return Vf(t)>2||Vf(lt)>3?"":" "}function aC(t,e){for(;--e&&Un()&&!(lt<48||lt>102||lt>57&&lt<65||lt>70&&lt<97););return ph(t,ju()+(e<6&&Xi()==32&&Un()==32))}function Ff(t){for(;Un();)switch(lt){case t:return Sn;case 34:case 39:t!==34&&t!==39&&Ff(lt);break;case 40:t===41&&Ff(t);break;case 92:Un();break}return Sn}function lC(t,e){for(;Un()&&t+lt!==57;)if(t+lt===84&&Xi()===47)break;return"/*"+ph(e,Sn-1)+"*"+gm(t===47?t:Un())}function uC(t){for(;!Vf(Xi());)Un();return ph(t,Sn)}function cC(t){return sC(zu("",null,null,null,[""],t=iC(t),0,[0],t))}function zu(t,e,n,r,i,s,o,l,u){for(var c=0,d=0,f=o,m=0,E=0,R=0,P=1,O=1,T=1,v=0,S="",b=i,F=s,C=r,_=S;O;)switch(R=v,v=Un()){case 40:if(R!=108&&vt(_,f-1)==58){Uu(_+=pe(wd(v),"&","&\f"),"&\f",PE(c?l[c-1]:0))!=-1&&(T=-1);break}case 34:case 39:case 91:_+=wd(v);break;case 9:case 10:case 13:case 32:_+=oC(R);break;case 92:_+=aC(ju()-1,7);continue;case 47:switch(Xi()){case 42:case 47:Ea(hC(lC(Un(),ju()),e,n,u),u);break;default:_+="/"}break;case 123*P:l[c++]=Jn(_)*T;case 125*P:case 59:case 0:switch(v){case 0:case 125:O=0;case 59+d:T==-1&&(_=pe(_,/\f/g,"")),E>0&&Jn(_)-f&&Ea(E>32?_v(_+";",r,n,f-1,u):_v(pe(_," ","")+";",r,n,f-2,u),u);break;case 59:_+=";";default:if(Ea(C=vv(_,e,n,c,d,i,l,S,b=[],F=[],f,s),s),v===123)if(d===0)zu(_,e,C,C,b,s,f,l,F);else switch(m===99&&vt(_,3)===110?100:m){case 100:case 108:case 109:case 115:zu(t,C,C,r&&Ea(vv(t,C,C,0,0,i,l,S,i,b=[],f,F),F),i,F,f,l,r?b:F);break;default:zu(_,C,C,C,[""],F,0,l,F)}}c=d=E=0,P=T=1,S=_="",f=o;break;case 58:f=1+Jn(_),E=R;default:if(P<1){if(v==123)--P;else if(v==125&&P++==0&&rC()==125)continue}switch(_+=gm(v),v*P){case 38:T=d>0?1:(_+="\f",-1);break;case 44:l[c++]=(Jn(_)-1)*T,T=1;break;case 64:Xi()===45&&(_+=wd(Un())),m=Xi(),d=f=Jn(S=_+=uC(ju())),v++;break;case 45:R===45&&Jn(_)==2&&(P=0)}}return s}function vv(t,e,n,r,i,s,o,l,u,c,d,f){for(var m=i-1,E=i===0?s:[""],R=kE(E),P=0,O=0,T=0;P<r;++P)for(var v=0,S=fo(t,m+1,m=PE(O=o[P])),b=t;v<R;++v)(b=CE(O>0?E[v]+" "+S:pe(S,/&\f/g,E[v])))&&(u[T++]=b);return fh(t,e,n,i===0?hh:l,u,c,d,f)}function hC(t,e,n,r){return fh(t,e,n,RE,gm(nC()),fo(t,2,-2),0,r)}function _v(t,e,n,r,i){return fh(t,e,n,mm,fo(t,0,r),fo(t,r+1,-1),r,i)}function NE(t,e,n){switch(eC(t,e)){case 5103:return ke+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ke+t+t;case 4789:return Fa+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return ke+t+Fa+t+ze+t+t;case 5936:switch(vt(t,e+11)){case 114:return ke+t+ze+pe(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return ke+t+ze+pe(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return ke+t+ze+pe(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return ke+t+ze+t+t;case 6165:return ke+t+ze+"flex-"+t+t;case 5187:return ke+t+pe(t,/(\w+).+(:[^]+)/,ke+"box-$1$2"+ze+"flex-$1$2")+t;case 5443:return ke+t+ze+"flex-item-"+pe(t,/flex-|-self/g,"")+(yr(t,/flex-|baseline/)?"":ze+"grid-row-"+pe(t,/flex-|-self/g,""))+t;case 4675:return ke+t+ze+"flex-line-pack"+pe(t,/align-content|flex-|-self/g,"")+t;case 5548:return ke+t+ze+pe(t,"shrink","negative")+t;case 5292:return ke+t+ze+pe(t,"basis","preferred-size")+t;case 6060:return ke+"box-"+pe(t,"-grow","")+ke+t+ze+pe(t,"grow","positive")+t;case 4554:return ke+pe(t,/([^-])(transform)/g,"$1"+ke+"$2")+t;case 6187:return pe(pe(pe(t,/(zoom-|grab)/,ke+"$1"),/(image-set)/,ke+"$1"),t,"")+t;case 5495:case 3959:return pe(t,/(image-set\([^]*)/,ke+"$1$`$1");case 4968:return pe(pe(t,/(.+:)(flex-)?(.*)/,ke+"box-pack:$3"+ze+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ke+t+t;case 4200:if(!yr(t,/flex-|baseline/))return ze+"grid-column-align"+fo(t,e)+t;break;case 2592:case 3360:return ze+pe(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,yr(r.props,/grid-\w+-end/)})?~Uu(t+(n=n[e].value),"span",0)?t:ze+pe(t,"-start","")+t+ze+"grid-row-span:"+(~Uu(n,"span",0)?yr(n,/\d+/):+yr(n,/\d+/)-+yr(t,/\d+/))+";":ze+pe(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return yr(r.props,/grid-\w+-start/)})?t:ze+pe(pe(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return pe(t,/(.+)-inline(.+)/,ke+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Jn(t)-1-e>6)switch(vt(t,e+1)){case 109:if(vt(t,e+4)!==45)break;case 102:return pe(t,/(.+:)(.+)-([^]+)/,"$1"+ke+"$2-$3$1"+Fa+(vt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Uu(t,"stretch",0)?NE(pe(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return pe(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,l,u,c){return ze+i+":"+s+c+(o?ze+i+"-span:"+(l?u:+u-+s)+c:"")+t});case 4949:if(vt(t,e+6)===121)return pe(t,":",":"+ke)+t;break;case 6444:switch(vt(t,vt(t,14)===45?18:11)){case 120:return pe(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ke+(vt(t,14)===45?"inline-":"")+"box$3$1"+ke+"$2$3$1"+ze+"$2box$3")+t;case 100:return pe(t,":",":"+ze)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return pe(t,"scroll-","scroll-snap-")+t}return t}function Ac(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function dC(t,e,n,r){switch(t.type){case ZP:if(t.children.length)break;case JP:case mm:return t.return=t.return||t.value;case RE:return"";case AE:return t.return=t.value+"{"+Ac(t.children,r)+"}";case hh:if(!Jn(t.value=t.props.join(",")))return""}return Jn(n=Ac(t.children,r))?t.return=t.value+"{"+n+"}":""}function fC(t){var e=kE(t);return function(n,r,i,s){for(var o="",l=0;l<e;l++)o+=t[l](n,r,i,s)||"";return o}}function pC(t){return function(e){e.root||(e=e.return)&&t(e)}}function mC(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case mm:t.return=NE(t.value,t.length,n);return;case AE:return Ac([qr(t,{value:pe(t.value,"@","@"+ke)})],r);case hh:if(t.length)return tC(n=t.props,function(i){switch(yr(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ks(qr(t,{props:[pe(i,/:(read-\w+)/,":"+Fa+"$1")]})),ks(qr(t,{props:[i]})),Mf(t,{props:yv(n,r)});break;case"::placeholder":ks(qr(t,{props:[pe(i,/:(plac\w+)/,":"+ke+"input-$1")]})),ks(qr(t,{props:[pe(i,/:(plac\w+)/,":"+Fa+"$1")]})),ks(qr(t,{props:[pe(i,/:(plac\w+)/,ze+"input-$1")]})),ks(qr(t,{props:[i]})),Mf(t,{props:yv(n,r)});break}return""})}}var gC={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},an={},mo=typeof process<"u"&&an!==void 0&&(an.REACT_APP_SC_ATTR||an.SC_ATTR)||"data-styled",DE="active",OE="data-styled-version",mh="6.1.12",ym=`/*!sc*/
`,Pc=typeof window<"u"&&"HTMLElement"in window,yC=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&an!==void 0&&an.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&an.REACT_APP_SC_DISABLE_SPEEDY!==""?an.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&an.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&an!==void 0&&an.SC_DISABLE_SPEEDY!==void 0&&an.SC_DISABLE_SPEEDY!==""&&an.SC_DISABLE_SPEEDY!=="false"&&an.SC_DISABLE_SPEEDY),vC={},gh=Object.freeze([]),go=Object.freeze({});function bE(t,e,n){return n===void 0&&(n=go),t.theme!==n.theme&&t.theme||e||n.theme}var LE=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),_C=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,wC=/(^-|-$)/g;function wv(t){return t.replace(_C,"-").replace(wC,"")}var EC=/(a)(d)/gi,_u=52,Ev=function(t){return String.fromCharCode(t+(t>25?39:97))};function Uf(t){var e,n="";for(e=Math.abs(t);e>_u;e=e/_u|0)n=Ev(e%_u)+n;return(Ev(e%_u)+n).replace(EC,"$1-$2")}var Ed,ME=5381,qs=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},VE=function(t){return qs(ME,t)};function FE(t){return Uf(VE(t)>>>0)}function TC(t){return t.displayName||t.name||"Component"}function Td(t){return typeof t=="string"&&!0}var UE=typeof Symbol=="function"&&Symbol.for,jE=UE?Symbol.for("react.memo"):60115,IC=UE?Symbol.for("react.forward_ref"):60112,SC={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},RC={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},zE={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},AC=((Ed={})[IC]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ed[jE]=zE,Ed);function Tv(t){return("type"in(e=t)&&e.type.$$typeof)===jE?zE:"$$typeof"in t?AC[t.$$typeof]:SC;var e}var PC=Object.defineProperty,CC=Object.getOwnPropertyNames,Iv=Object.getOwnPropertySymbols,kC=Object.getOwnPropertyDescriptor,xC=Object.getPrototypeOf,Sv=Object.prototype;function $E(t,e,n){if(typeof e!="string"){if(Sv){var r=xC(e);r&&r!==Sv&&$E(t,r,n)}var i=CC(e);Iv&&(i=i.concat(Iv(e)));for(var s=Tv(t),o=Tv(e),l=0;l<i.length;++l){var u=i[l];if(!(u in RC||n&&n[u]||o&&u in o||s&&u in s)){var c=kC(e,u);try{PC(t,u,c)}catch{}}}}return t}function yo(t){return typeof t=="function"}function vm(t){return typeof t=="object"&&"styledComponentId"in t}function qi(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function jf(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=t[r];return n}function hl(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function zf(t,e,n){if(n===void 0&&(n=!1),!n&&!hl(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=zf(t[r],e[r]);else if(hl(e))for(var r in e)t[r]=zf(t[r],e[r]);return t}function _m(t,e){Object.defineProperty(t,"toString",{value:e})}function Cl(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var NC=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;e>=s;)if((s<<=1)<0)throw Cl(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var l=this.indexOfGroup(e+1),u=(o=0,n.length);o<u;o++)this.tag.insertRule(l,n[o])&&(this.groupSizes[e]++,l++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(ym);return n},t}(),$u=new Map,Cc=new Map,Bu=1,wu=function(t){if($u.has(t))return $u.get(t);for(;Cc.has(Bu);)Bu++;var e=Bu++;return $u.set(t,e),Cc.set(e,t),e},DC=function(t,e){Bu=e+1,$u.set(t,e),Cc.set(e,t)},OC="style[".concat(mo,"][").concat(OE,'="').concat(mh,'"]'),bC=new RegExp("^".concat(mo,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),LC=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},MC=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(ym),i=[],s=0,o=r.length;s<o;s++){var l=r[s].trim();if(l){var u=l.match(bC);if(u){var c=0|parseInt(u[1],10),d=u[2];c!==0&&(DC(d,c),LC(t,d,u[3]),t.getTag().insertRules(c,i)),i.length=0}else i.push(l)}}},Rv=function(t){for(var e=document.querySelectorAll(OC),n=0,r=e.length;n<r;n++){var i=e[n];i&&i.getAttribute(mo)!==DE&&(MC(t,i),i.parentNode&&i.parentNode.removeChild(i))}};function VC(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var BE=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(l){var u=Array.from(l.querySelectorAll("style[".concat(mo,"]")));return u[u.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(mo,DE),r.setAttribute(OE,mh);var o=VC();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},FC=function(){function t(e){this.element=BE(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw Cl(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),UC=function(){function t(e){this.element=BE(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),jC=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),Av=Pc,zC={isServer:!Pc,useCSSOMInjection:!yC},kc=function(){function t(e,n,r){e===void 0&&(e=go),n===void 0&&(n={});var i=this;this.options=$t($t({},zC),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Pc&&Av&&(Av=!1,Rv(this)),_m(this,function(){return function(s){for(var o=s.getTag(),l=o.length,u="",c=function(f){var m=function(T){return Cc.get(T)}(f);if(m===void 0)return"continue";var E=s.names.get(m),R=o.getGroup(f);if(E===void 0||!E.size||R.length===0)return"continue";var P="".concat(mo,".g").concat(f,'[id="').concat(m,'"]'),O="";E!==void 0&&E.forEach(function(T){T.length>0&&(O+="".concat(T,","))}),u+="".concat(R).concat(P,'{content:"').concat(O,'"}').concat(ym)},d=0;d<l;d++)c(d);return u}(i)})}return t.registerId=function(e){return wu(e)},t.prototype.rehydrate=function(){!this.server&&Pc&&Rv(this)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t($t($t({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new jC(i):r?new FC(i):new UC(i)}(this.options),new NC(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(wu(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(wu(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(wu(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),$C=/&/g,BC=/^\s*\/\/.*$/gm;function HE(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=HE(n.children,e)),n})}function HC(t){var e,n,r,i=go,s=i.options,o=s===void 0?go:s,l=i.plugins,u=l===void 0?gh:l,c=function(m,E,R){return R.startsWith(n)&&R.endsWith(n)&&R.replaceAll(n,"").length>0?".".concat(e):m},d=u.slice();d.push(function(m){m.type===hh&&m.value.includes("&")&&(m.props[0]=m.props[0].replace($C,n).replace(r,c))}),o.prefix&&d.push(mC),d.push(dC);var f=function(m,E,R,P){E===void 0&&(E=""),R===void 0&&(R=""),P===void 0&&(P="&"),e=P,n=E,r=new RegExp("\\".concat(n,"\\b"),"g");var O=m.replace(BC,""),T=cC(R||E?"".concat(R," ").concat(E," { ").concat(O," }"):O);o.namespace&&(T=HE(T,o.namespace));var v=[];return Ac(T,fC(d.concat(pC(function(S){return v.push(S)})))),v};return f.hash=u.length?u.reduce(function(m,E){return E.name||Cl(15),qs(m,E.name)},ME).toString():"",f}var WC=new kc,$f=HC(),WE=Mn.createContext({shouldForwardProp:void 0,styleSheet:WC,stylis:$f});WE.Consumer;Mn.createContext(void 0);function Bf(){return U.useContext(WE)}var qC=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=$f);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,_m(this,function(){throw Cl(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=$f),this.name+e.hash},t}(),KC=function(t){return t>="A"&&t<="Z"};function Pv(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;KC(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var qE=function(t){return t==null||t===!1||t===""},KE=function(t){var e,n,r=[];for(var i in t){var s=t[i];t.hasOwnProperty(i)&&!qE(s)&&(Array.isArray(s)&&s.isCss||yo(s)?r.push("".concat(Pv(i),":"),s,";"):hl(s)?r.push.apply(r,cl(cl(["".concat(i," {")],KE(s),!1),["}"],!1)):r.push("".concat(Pv(i),": ").concat((e=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in gC||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function fi(t,e,n,r){if(qE(t))return[];if(vm(t))return[".".concat(t.styledComponentId)];if(yo(t)){if(!yo(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var i=t(e);return fi(i,e,n,r)}var s;return t instanceof qC?n?(t.inject(n,r),[t.getName(r)]):[t]:hl(t)?KE(t):Array.isArray(t)?Array.prototype.concat.apply(gh,t.map(function(o){return fi(o,e,n,r)})):[t.toString()]}function GE(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(yo(n)&&!vm(n))return!1}return!0}var GC=VE(mh),QC=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&GE(e),this.componentId=n,this.baseHash=qs(GC,n),this.baseStyle=r,kc.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=qi(i,this.staticRulesId);else{var s=jf(fi(this.rules,e,n,r)),o=Uf(qs(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var l=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,l)}i=qi(i,o),this.staticRulesId=o}else{for(var u=qs(this.baseHash,r.hash),c="",d=0;d<this.rules.length;d++){var f=this.rules[d];if(typeof f=="string")c+=f;else if(f){var m=jf(fi(f,e,n,r));u=qs(u,m+d),c+=m}}if(c){var E=Uf(u>>>0);n.hasNameForId(this.componentId,E)||n.insertRules(this.componentId,E,r(c,".".concat(E),void 0,this.componentId)),i=qi(i,E)}}return i},t}(),wm=Mn.createContext(void 0);wm.Consumer;var Id={};function YC(t,e,n){var r=vm(t),i=t,s=!Td(t),o=e.attrs,l=o===void 0?gh:o,u=e.componentId,c=u===void 0?function(b,F){var C=typeof b!="string"?"sc":wv(b);Id[C]=(Id[C]||0)+1;var _="".concat(C,"-").concat(FE(mh+C+Id[C]));return F?"".concat(F,"-").concat(_):_}(e.displayName,e.parentComponentId):u,d=e.displayName,f=d===void 0?function(b){return Td(b)?"styled.".concat(b):"Styled(".concat(TC(b),")")}(t):d,m=e.displayName&&e.componentId?"".concat(wv(e.displayName),"-").concat(e.componentId):e.componentId||c,E=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,R=e.shouldForwardProp;if(r&&i.shouldForwardProp){var P=i.shouldForwardProp;if(e.shouldForwardProp){var O=e.shouldForwardProp;R=function(b,F){return P(b,F)&&O(b,F)}}else R=P}var T=new QC(n,m,r?i.componentStyle:void 0);function v(b,F){return function(C,_,g){var w=C.attrs,I=C.componentStyle,k=C.defaultProps,N=C.foldedComponentIds,A=C.styledComponentId,fe=C.target,it=Mn.useContext(wm),Yt=Bf(),K=C.shouldForwardProp||Yt.shouldForwardProp,$=bE(_,it,k)||go,Y=function(Ze,qe,Nt){for(var Rn,An=$t($t({},qe),{className:void 0,theme:Nt}),Hn=0;Hn<Ze.length;Hn+=1){var Pn=yo(Rn=Ze[Hn])?Rn(An):Rn;for(var Ne in Pn)An[Ne]=Ne==="className"?qi(An[Ne],Pn[Ne]):Ne==="style"?$t($t({},An[Ne]),Pn[Ne]):Pn[Ne]}return qe.className&&(An.className=qi(An.className,qe.className)),An}(w,_,$),Z=Y.as||fe,me={};for(var he in Y)Y[he]===void 0||he[0]==="$"||he==="as"||he==="theme"&&Y.theme===$||(he==="forwardedAs"?me.as=Y.forwardedAs:K&&!K(he,Z)||(me[he]=Y[he]));var Pe=function(Ze,qe){var Nt=Bf(),Rn=Ze.generateAndInjectStyles(qe,Nt.styleSheet,Nt.stylis);return Rn}(I,Y),We=qi(N,A);return Pe&&(We+=" "+Pe),Y.className&&(We+=" "+Y.className),me[Td(Z)&&!LE.has(Z)?"class":"className"]=We,me.ref=g,U.createElement(Z,me)}(S,b,F)}v.displayName=f;var S=Mn.forwardRef(v);return S.attrs=E,S.componentStyle=T,S.displayName=f,S.shouldForwardProp=R,S.foldedComponentIds=r?qi(i.foldedComponentIds,i.styledComponentId):"",S.styledComponentId=m,S.target=r?i.target:t,Object.defineProperty(S,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(b){this._foldedDefaultProps=r?function(F){for(var C=[],_=1;_<arguments.length;_++)C[_-1]=arguments[_];for(var g=0,w=C;g<w.length;g++)zf(F,w[g],!0);return F}({},i.defaultProps,b):b}}),_m(S,function(){return".".concat(S.styledComponentId)}),s&&$E(S,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),S}function Cv(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var kv=function(t){return Object.assign(t,{isCss:!0})};function Em(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(yo(t)||hl(t))return kv(fi(Cv(gh,cl([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?fi(r):kv(fi(Cv(r,e)))}function Hf(t,e,n){if(n===void 0&&(n=go),!e)throw Cl(1,e);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return t(e,n,Em.apply(void 0,cl([i],s,!1)))};return r.attrs=function(i){return Hf(t,e,$t($t({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Hf(t,e,$t($t({},n),i))},r}var QE=function(t){return Hf(YC,t)},Me=QE;LE.forEach(function(t){Me[t]=QE(t)});var XC=function(){function t(e,n){this.rules=e,this.componentId=n,this.isStatic=GE(e),kc.registerId(this.componentId+1)}return t.prototype.createStyles=function(e,n,r,i){var s=i(jf(fi(this.rules,n,r,i)),""),o=this.componentId+e;r.insertRules(o,o,s)},t.prototype.removeStyles=function(e,n){n.clearRules(this.componentId+e)},t.prototype.renderStyles=function(e,n,r,i){e>2&&kc.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,n,r,i)},t}();function YE(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=Em.apply(void 0,cl([t],e,!1)),i="sc-global-".concat(FE(JSON.stringify(r))),s=new XC(r,i),o=function(u){var c=Bf(),d=Mn.useContext(wm),f=Mn.useRef(c.styleSheet.allocateGSInstance(i)).current;return c.styleSheet.server&&l(f,u,c.styleSheet,d,c.stylis),Mn.useLayoutEffect(function(){if(!c.styleSheet.server)return l(f,u,c.styleSheet,d,c.stylis),function(){return s.removeStyles(f,c.styleSheet)}},[f,u,c.styleSheet,d,c.stylis]),null};function l(u,c,d,f,m){if(s.isStatic)s.renderStyles(u,vC,d,m);else{var E=$t($t({},c),{theme:bE(c,f,o.defaultProps)});s.renderStyles(u,E,d,m)}}return Mn.memo(o)}const JC=Me.div``,ZC=Me.span`
  font-size: 24px;
`;function ek(){return W.jsx(JC,{children:W.jsx(ZC,{children:"Loading..."})})}var XE=function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t},JE=Em(xv||(xv=XE([`
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
`])));YE(Nv||(Nv=XE(["",""],["",""])),JE);var xv,Nv;function tk(){return W.jsx(W.Fragment,{children:W.jsx(kP,{})})}var Dv={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},nk=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},eT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,f=(s&3)<<4|l>>4;let m=(l&15)<<2|c>>6,E=c&63;u||(E=64,o||(m=64)),r.push(n[d],n[f],n[m],n[E])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ZE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):nk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||f==null)throw new rk;const m=s<<2|l>>4;if(r.push(m),c!==64){const E=l<<4&240|c>>2;if(r.push(E),f!==64){const R=c<<6&192|f;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class rk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ik=function(t){const e=ZE(t);return eT.encodeByteArray(e,!0)},xc=function(t){return ik(t).replace(/\./g,"")},tT=function(t){try{return eT.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function sk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ok=()=>sk().__FIREBASE_DEFAULTS__,ak=()=>{if(typeof process>"u"||typeof Dv>"u")return;const t=Dv.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},lk=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&tT(t[1]);return e&&JSON.parse(e)},yh=()=>{try{return ok()||ak()||lk()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},nT=t=>{var e,n;return(n=(e=yh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},uk=t=>{const e=nT(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},rT=()=>{var t;return(t=yh())===null||t===void 0?void 0:t.config},iT=t=>{var e;return(e=yh())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ck{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function hk(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[xc(JSON.stringify(n)),xc(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function dk(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(kt())}function fk(){var t;const e=(t=yh())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function pk(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function mk(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function gk(){const t=kt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function yk(){return!fk()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function vk(){try{return typeof indexedDB=="object"}catch{return!1}}function _k(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wk="FirebaseError";class Bn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=wk,Object.setPrototypeOf(this,Bn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,kl.prototype.create)}}class kl{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Ek(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Bn(i,l,r)}}function Ek(t,e){return t.replace(Tk,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Tk=/\{\$([^}]+)}/g;function Ik(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Nc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Ov(s)&&Ov(o)){if(!Nc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Ov(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xl(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ta(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ia(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Sk(t,e){const n=new Rk(t,e);return n.subscribe.bind(n)}class Rk{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Ak(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Sd),i.error===void 0&&(i.error=Sd),i.complete===void 0&&(i.complete=Sd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ak(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Sd(){}/**
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
 */function wt(t){return t&&t._delegate?t._delegate:t}class ss{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ui="[DEFAULT]";/**
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
 */class Pk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ck;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(kk(e))try{this.getOrInitializeService({instanceIdentifier:Ui})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ui){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ui){return this.instances.has(e)}getOptions(e=Ui){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ck(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ui){return this.component?this.component.multipleInstances?e:Ui:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ck(t){return t===Ui?void 0:t}function kk(t){return t.instantiationMode==="EAGER"}/**
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
 */class xk{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Pk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var we;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(we||(we={}));const Nk={debug:we.DEBUG,verbose:we.VERBOSE,info:we.INFO,warn:we.WARN,error:we.ERROR,silent:we.SILENT},Dk=we.INFO,Ok={[we.DEBUG]:"log",[we.VERBOSE]:"log",[we.INFO]:"info",[we.WARN]:"warn",[we.ERROR]:"error"},bk=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Ok[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Tm{constructor(e){this.name=e,this._logLevel=Dk,this._logHandler=bk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in we))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Nk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,we.DEBUG,...e),this._logHandler(this,we.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,we.VERBOSE,...e),this._logHandler(this,we.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,we.INFO,...e),this._logHandler(this,we.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,we.WARN,...e),this._logHandler(this,we.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,we.ERROR,...e),this._logHandler(this,we.ERROR,...e)}}const Lk=(t,e)=>e.some(n=>t instanceof n);let bv,Lv;function Mk(){return bv||(bv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Vk(){return Lv||(Lv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const sT=new WeakMap,Wf=new WeakMap,oT=new WeakMap,Rd=new WeakMap,Im=new WeakMap;function Fk(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(pi(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&sT.set(n,t)}).catch(()=>{}),Im.set(e,t),e}function Uk(t){if(Wf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Wf.set(t,e)}let qf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Wf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||oT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return pi(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function jk(t){qf=t(qf)}function zk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ad(this),e,...n);return oT.set(r,e.sort?e.sort():[e]),pi(r)}:Vk().includes(t)?function(...e){return t.apply(Ad(this),e),pi(sT.get(this))}:function(...e){return pi(t.apply(Ad(this),e))}}function $k(t){return typeof t=="function"?zk(t):(t instanceof IDBTransaction&&Uk(t),Lk(t,Mk())?new Proxy(t,qf):t)}function pi(t){if(t instanceof IDBRequest)return Fk(t);if(Rd.has(t))return Rd.get(t);const e=$k(t);return e!==t&&(Rd.set(t,e),Im.set(e,t)),e}const Ad=t=>Im.get(t);function Bk(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=pi(o);return r&&o.addEventListener("upgradeneeded",u=>{r(pi(o.result),u.oldVersion,u.newVersion,pi(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const Hk=["get","getKey","getAll","getAllKeys","count"],Wk=["put","add","delete","clear"],Pd=new Map;function Mv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Pd.get(e))return Pd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Wk.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Hk.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return Pd.set(e,s),s}jk(t=>({...t,get:(e,n,r)=>Mv(e,n)||t.get(e,n,r),has:(e,n)=>!!Mv(e,n)||t.has(e,n)}));/**
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
 */class qk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Kk(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Kk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Kf="@firebase/app",Vv="0.10.8";/**
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
 */const os=new Tm("@firebase/app"),Gk="@firebase/app-compat",Qk="@firebase/analytics-compat",Yk="@firebase/analytics",Xk="@firebase/app-check-compat",Jk="@firebase/app-check",Zk="@firebase/auth",ex="@firebase/auth-compat",tx="@firebase/database",nx="@firebase/database-compat",rx="@firebase/functions",ix="@firebase/functions-compat",sx="@firebase/installations",ox="@firebase/installations-compat",ax="@firebase/messaging",lx="@firebase/messaging-compat",ux="@firebase/performance",cx="@firebase/performance-compat",hx="@firebase/remote-config",dx="@firebase/remote-config-compat",fx="@firebase/storage",px="@firebase/storage-compat",mx="@firebase/firestore",gx="@firebase/vertexai-preview",yx="@firebase/firestore-compat",vx="firebase",_x="10.12.5";/**
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
 */const Gf="[DEFAULT]",wx={[Kf]:"fire-core",[Gk]:"fire-core-compat",[Yk]:"fire-analytics",[Qk]:"fire-analytics-compat",[Jk]:"fire-app-check",[Xk]:"fire-app-check-compat",[Zk]:"fire-auth",[ex]:"fire-auth-compat",[tx]:"fire-rtdb",[nx]:"fire-rtdb-compat",[rx]:"fire-fn",[ix]:"fire-fn-compat",[sx]:"fire-iid",[ox]:"fire-iid-compat",[ax]:"fire-fcm",[lx]:"fire-fcm-compat",[ux]:"fire-perf",[cx]:"fire-perf-compat",[hx]:"fire-rc",[dx]:"fire-rc-compat",[fx]:"fire-gcs",[px]:"fire-gcs-compat",[mx]:"fire-fst",[yx]:"fire-fst-compat",[gx]:"fire-vertex","fire-js":"fire-js",[vx]:"fire-js-all"};/**
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
 */const Dc=new Map,Ex=new Map,Qf=new Map;function Fv(t,e){try{t.container.addComponent(e)}catch(n){os.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function vo(t){const e=t.name;if(Qf.has(e))return os.debug(`There were multiple attempts to register component ${e}.`),!1;Qf.set(e,t);for(const n of Dc.values())Fv(n,t);for(const n of Ex.values())Fv(n,t);return!0}function Sm(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function er(t){return t.settings!==void 0}/**
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
 */const Tx={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},mi=new kl("app","Firebase",Tx);/**
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
 */class Ix{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ss("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw mi.create("app-deleted",{appName:this._name})}}/**
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
 */const bo=_x;function aT(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Gf,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw mi.create("bad-app-name",{appName:String(i)});if(n||(n=rT()),!n)throw mi.create("no-options");const s=Dc.get(i);if(s){if(Nc(n,s.options)&&Nc(r,s.config))return s;throw mi.create("duplicate-app",{appName:i})}const o=new xk(i);for(const u of Qf.values())o.addComponent(u);const l=new Ix(n,r,o);return Dc.set(i,l),l}function lT(t=Gf){const e=Dc.get(t);if(!e&&t===Gf&&rT())return aT();if(!e)throw mi.create("no-app",{appName:t});return e}function gi(t,e,n){var r;let i=(r=wx[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),os.warn(l.join(" "));return}vo(new ss(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Sx="firebase-heartbeat-database",Rx=1,dl="firebase-heartbeat-store";let Cd=null;function uT(){return Cd||(Cd=Bk(Sx,Rx,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(dl)}catch(n){console.warn(n)}}}}).catch(t=>{throw mi.create("idb-open",{originalErrorMessage:t.message})})),Cd}async function Ax(t){try{const n=(await uT()).transaction(dl),r=await n.objectStore(dl).get(cT(t));return await n.done,r}catch(e){if(e instanceof Bn)os.warn(e.message);else{const n=mi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});os.warn(n.message)}}}async function Uv(t,e){try{const r=(await uT()).transaction(dl,"readwrite");await r.objectStore(dl).put(e,cT(t)),await r.done}catch(n){if(n instanceof Bn)os.warn(n.message);else{const r=mi.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});os.warn(r.message)}}}function cT(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Px=1024,Cx=30*24*60*60*1e3;class kx{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Nx(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=jv();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=Cx}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=jv(),{heartbeatsToSend:r,unsentEntries:i}=xx(this._heartbeatsCache.heartbeats),s=xc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function jv(){return new Date().toISOString().substring(0,10)}function xx(t,e=Px){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),zv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),zv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Nx{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return vk()?_k().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Ax(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Uv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Uv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function zv(t){return xc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Dx(t){vo(new ss("platform-logger",e=>new qk(e),"PRIVATE")),vo(new ss("heartbeat",e=>new kx(e),"PRIVATE")),gi(Kf,Vv,t),gi(Kf,Vv,"esm2017"),gi("fire-js","")}Dx("");var Ox="firebase",bx="10.12.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */gi(Ox,bx,"app");function hT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Lx=hT,dT=new kl("auth","Firebase",hT());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oc=new Tm("@firebase/auth");function Mx(t,...e){Oc.logLevel<=we.WARN&&Oc.warn(`Auth (${bo}): ${t}`,...e)}function Hu(t,...e){Oc.logLevel<=we.ERROR&&Oc.error(`Auth (${bo}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zn(t,...e){throw Rm(t,...e)}function rr(t,...e){return Rm(t,...e)}function fT(t,e,n){const r=Object.assign(Object.assign({},Lx()),{[e]:n});return new kl("auth","Firebase",r).create(e,{appName:t.name})}function Ar(t){return fT(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Rm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return dT.create(t,...e)}function oe(t,e,...n){if(!t)throw Rm(e,...n)}function Er(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Hu(e),new Error(e)}function Nr(t,e){t||Er(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Vx(){return $v()==="http:"||$v()==="https:"}function $v(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Vx()||pk()||"connection"in navigator)?navigator.onLine:!0}function Ux(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e,n){this.shortDelay=e,this.longDelay=n,Nr(n>e,"Short delay should be less than long delay!"),this.isMobile=dk()||mk()}get(){return Fx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Am(t,e){Nr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pT{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Er("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Er("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Er("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zx=new Nl(3e4,6e4);function ki(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Mr(t,e,n,r,i={}){return mT(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=xl(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),pT.fetch()(gT(t,t.config.apiHost,n,l),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function mT(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},jx),e);try{const i=new Bx(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Eu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Eu(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Eu(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Eu(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw fT(t,d,c);zn(t,d)}}catch(i){if(i instanceof Bn)throw i;zn(t,"network-request-failed",{message:String(i)})}}async function Dl(t,e,n,r,i={}){const s=await Mr(t,e,n,r,i);return"mfaPendingCredential"in s&&zn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function gT(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Am(t.config,i):`${t.config.apiScheme}://${i}`}function $x(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Bx{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(rr(this.auth,"network-request-failed")),zx.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Eu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=rr(t,e,r);return i.customData._tokenResponse=n,i}function Bv(t){return t!==void 0&&t.enterprise!==void 0}class Hx{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return $x(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Wx(t,e){return Mr(t,"GET","/v2/recaptchaConfig",ki(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qx(t,e){return Mr(t,"POST","/v1/accounts:delete",e)}async function yT(t,e){return Mr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ua(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Kx(t,e=!1){const n=wt(t),r=await n.getIdToken(e),i=Pm(r);oe(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ua(kd(i.auth_time)),issuedAtTime:Ua(kd(i.iat)),expirationTime:Ua(kd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function kd(t){return Number(t)*1e3}function Pm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Hu("JWT malformed, contained fewer than 3 sections"),null;try{const i=tT(n);return i?JSON.parse(i):(Hu("Failed to decode base64 JWT payload"),null)}catch(i){return Hu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Hv(t){const e=Pm(t);return oe(e,"internal-error"),oe(typeof e.exp<"u","internal-error"),oe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _o(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Bn&&Gx(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Gx({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ua(this.lastLoginAt),this.creationTime=Ua(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function bc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await _o(t,yT(n,{idToken:r}));oe(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?vT(s.providerUserInfo):[],l=Xx(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),d=u?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Xf(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,f)}async function Yx(t){const e=wt(t);await bc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Xx(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function vT(t){return t.map(e=>{var{providerId:n}=e,r=pm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jx(t,e){const n=await mT(t,{},async()=>{const r=xl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=gT(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",pT.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Zx(t,e){return Mr(t,"POST","/v2/accounts:revokeToken",ki(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){oe(e.idToken,"internal-error"),oe(typeof e.idToken<"u","internal-error"),oe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Hv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){oe(e.length!==0,"internal-error");const n=Hv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(oe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Jx(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new eo;return r&&(oe(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(oe(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(oe(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new eo,this.toJSON())}_performRefresh(){return Er("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hr(t,e){oe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Tr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=pm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Qx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Xf(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await _o(this,this.stsTokenManager.getToken(this.auth,e));return oe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Kx(this,e)}reload(){return Yx(this)}_assign(e){this!==e&&(oe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Tr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){oe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await bc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(er(this.auth.app))return Promise.reject(Ar(this.auth));const e=await this.getIdToken();return await _o(this,qx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,c,d;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,E=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(l=n.tenantId)!==null&&l!==void 0?l:void 0,O=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,T=(c=n.createdAt)!==null&&c!==void 0?c:void 0,v=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:S,emailVerified:b,isAnonymous:F,providerData:C,stsTokenManager:_}=n;oe(S&&_,e,"internal-error");const g=eo.fromJSON(this.name,_);oe(typeof S=="string",e,"internal-error"),Hr(f,e.name),Hr(m,e.name),oe(typeof b=="boolean",e,"internal-error"),oe(typeof F=="boolean",e,"internal-error"),Hr(E,e.name),Hr(R,e.name),Hr(P,e.name),Hr(O,e.name),Hr(T,e.name),Hr(v,e.name);const w=new Tr({uid:S,auth:e,email:m,emailVerified:b,displayName:f,isAnonymous:F,photoURL:R,phoneNumber:E,tenantId:P,stsTokenManager:g,createdAt:T,lastLoginAt:v});return C&&Array.isArray(C)&&(w.providerData=C.map(I=>Object.assign({},I))),O&&(w._redirectEventId=O),w}static async _fromIdTokenResponse(e,n,r=!1){const i=new eo;i.updateFromServerResponse(n);const s=new Tr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await bc(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];oe(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?vT(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new eo;l.updateFromIdToken(r);const u=new Tr({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Xf(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wv=new Map;function Ir(t){Nr(t instanceof Function,"Expected a class definition");let e=Wv.get(t);return e?(Nr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Wv.set(t,e),e)}/**
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
 */class _T{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}_T.type="NONE";const qv=_T;/**
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
 */function Wu(t,e,n){return`firebase:${t}:${e}:${n}`}class to{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Wu(this.userKey,i.apiKey,s),this.fullPersistenceKey=Wu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Tr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new to(Ir(qv),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Ir(qv);const o=Wu(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const d=await c._get(o);if(d){const f=Tr._fromJSON(e,d);c!==s&&(l=f),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new to(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new to(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(TT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(wT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ST(e))return"Blackberry";if(RT(e))return"Webos";if(Cm(e))return"Safari";if((e.includes("chrome/")||ET(e))&&!e.includes("edge/"))return"Chrome";if(IT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function wT(t=kt()){return/firefox\//i.test(t)}function Cm(t=kt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ET(t=kt()){return/crios\//i.test(t)}function TT(t=kt()){return/iemobile/i.test(t)}function IT(t=kt()){return/android/i.test(t)}function ST(t=kt()){return/blackberry/i.test(t)}function RT(t=kt()){return/webos/i.test(t)}function vh(t=kt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function eN(t=kt()){var e;return vh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function tN(){return gk()&&document.documentMode===10}function AT(t=kt()){return vh(t)||IT(t)||RT(t)||ST(t)||/windows phone/i.test(t)||TT(t)}function nN(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PT(t,e=[]){let n;switch(t){case"Browser":n=Kv(kt());break;case"Worker":n=`${Kv(kt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${bo}/${r}`}/**
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
 */class rN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function iN(t,e={}){return Mr(t,"GET","/v2/passwordPolicy",ki(t,e))}/**
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
 */const sN=6;class oN{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:sN,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aN{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Gv(this),this.idTokenSubscription=new Gv(this),this.beforeStateQueue=new rN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=dT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ir(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await to.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await yT(this,{idToken:e}),r=await Tr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(er(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return oe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await bc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ux()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(er(this.app))return Promise.reject(Ar(this));const n=e?wt(e):null;return n&&oe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&oe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return er(this.app)?Promise.reject(Ar(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return er(this.app)?Promise.reject(Ar(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ir(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await iN(this),n=new oN(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new kl("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Zx(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ir(e)||this._popupRedirectResolver;oe(n,this,"argument-error"),this.redirectPersistenceManager=await to.create(this,[Ir(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(oe(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return oe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=PT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Mx(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ps(t){return wt(t)}class Gv{constructor(e){this.auth=e,this.observer=null,this.addObserver=Sk(n=>this.observer=n)}get next(){return oe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _h={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function lN(t){_h=t}function CT(t){return _h.loadJS(t)}function uN(){return _h.recaptchaEnterpriseScript}function cN(){return _h.gapiScript}function hN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const dN="recaptcha-enterprise",fN="NO_RECAPTCHA";class pN{constructor(e){this.type=dN,this.auth=ps(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{Wx(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new Hx(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;Bv(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(fN)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Bv(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=uN();u.length!==0&&(u+=l),CT(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function Qv(t,e,n,r=!1){const i=new pN(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Jf(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Qv(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Qv(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mN(t,e){const n=Sm(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Nc(s,e??{}))return i;zn(i,"already-initialized")}return n.initialize({options:e})}function gN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ir);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function yN(t,e,n){const r=ps(t);oe(r._canInitEmulator,r,"emulator-config-failed"),oe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=kT(e),{host:o,port:l}=vN(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),_N()}function kT(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function vN(t){const e=kT(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Yv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Yv(o)}}}function Yv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function _N(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Er("not implemented")}_getIdTokenResponse(e){return Er("not implemented")}_linkToIdToken(e,n){return Er("not implemented")}_getReauthenticationResolver(e){return Er("not implemented")}}async function wN(t,e){return Mr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EN(t,e){return Dl(t,"POST","/v1/accounts:signInWithPassword",ki(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TN(t,e){return Dl(t,"POST","/v1/accounts:signInWithEmailLink",ki(t,e))}async function IN(t,e){return Dl(t,"POST","/v1/accounts:signInWithEmailLink",ki(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl extends km{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new fl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new fl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Jf(e,n,"signInWithPassword",EN);case"emailLink":return TN(e,{email:this._email,oobCode:this._password});default:zn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Jf(e,r,"signUpPassword",wN);case"emailLink":return IN(e,{idToken:n,email:this._email,oobCode:this._password});default:zn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function no(t,e){return Dl(t,"POST","/v1/accounts:signInWithIdp",ki(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SN="http://localhost";class as extends km{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new as(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):zn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=pm(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new as(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return no(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,no(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,no(e,n)}buildRequest(){const e={requestUri:SN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=xl(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RN(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function AN(t){const e=Ta(Ia(t)).link,n=e?Ta(Ia(e)).deep_link_id:null,r=Ta(Ia(t)).deep_link_id;return(r?Ta(Ia(r)).link:null)||r||n||e||t}class xm{constructor(e){var n,r,i,s,o,l;const u=Ta(Ia(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,d=(r=u.oobCode)!==null&&r!==void 0?r:null,f=RN((i=u.mode)!==null&&i!==void 0?i:null);oe(c&&d&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=d,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=AN(e);try{return new xm(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(){this.providerId=Lo.PROVIDER_ID}static credential(e,n){return fl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=xm.parseLink(n);return oe(r,"argument-error"),fl._fromEmailAndCode(e,r.code,r.tenantId)}}Lo.PROVIDER_ID="password";Lo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Lo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xT{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ol extends xT{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr extends Ol{constructor(){super("facebook.com")}static credential(e){return as._fromParams({providerId:Xr.PROVIDER_ID,signInMethod:Xr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xr.credentialFromTaggedObject(e)}static credentialFromError(e){return Xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xr.credential(e.oauthAccessToken)}catch{return null}}}Xr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Xr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr extends Ol{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return as._fromParams({providerId:Jr.PROVIDER_ID,signInMethod:Jr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Jr.credentialFromTaggedObject(e)}static credentialFromError(e){return Jr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Jr.credential(n,r)}catch{return null}}}Jr.GOOGLE_SIGN_IN_METHOD="google.com";Jr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr extends Ol{constructor(){super("github.com")}static credential(e){return as._fromParams({providerId:Zr.PROVIDER_ID,signInMethod:Zr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zr.credentialFromTaggedObject(e)}static credentialFromError(e){return Zr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zr.credential(e.oauthAccessToken)}catch{return null}}}Zr.GITHUB_SIGN_IN_METHOD="github.com";Zr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei extends Ol{constructor(){super("twitter.com")}static credential(e,n){return as._fromParams({providerId:ei.PROVIDER_ID,signInMethod:ei.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ei.credentialFromTaggedObject(e)}static credentialFromError(e){return ei.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ei.credential(n,r)}catch{return null}}}ei.TWITTER_SIGN_IN_METHOD="twitter.com";ei.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PN(t,e){return Dl(t,"POST","/v1/accounts:signUp",ki(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Tr._fromIdTokenResponse(e,r,i),o=Xv(r);return new ls({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Xv(r);return new ls({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Xv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc extends Bn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Lc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Lc(e,n,r,i)}}function NT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Lc._fromErrorAndOperation(t,s,e,r):s})}async function CN(t,e,n=!1){const r=await _o(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ls._forOperation(t,"link",r)}/**
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
 */async function kN(t,e,n=!1){const{auth:r}=t;if(er(r.app))return Promise.reject(Ar(r));const i="reauthenticate";try{const s=await _o(t,NT(r,i,e,t),n);oe(s.idToken,r,"internal-error");const o=Pm(s.idToken);oe(o,r,"internal-error");const{sub:l}=o;return oe(t.uid===l,r,"user-mismatch"),ls._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&zn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DT(t,e,n=!1){if(er(t.app))return Promise.reject(Ar(t));const r="signIn",i=await NT(t,r,e),s=await ls._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function xN(t,e){return DT(ps(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OT(t){const e=ps(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function NN(t,e,n){if(er(t.app))return Promise.reject(Ar(t));const r=ps(t),o=await Jf(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",PN).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&OT(t),u}),l=await ls._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function DN(t,e,n){return er(t.app)?Promise.reject(Ar(t)):xN(wt(t),Lo.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&OT(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ON(t,e){return Mr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bN(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=wt(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await _o(r,ON(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function LN(t,e,n,r){return wt(t).onIdTokenChanged(e,n,r)}function MN(t,e,n){return wt(t).beforeAuthStateChanged(e,n)}const Mc="__sak";/**
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
 */class bT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Mc,"1"),this.storage.removeItem(Mc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VN(){const t=kt();return Cm(t)||vh(t)}const FN=1e3,UN=10;class LT extends bT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=VN()&&nN(),this.fallbackToPolling=AT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);tN()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,UN):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},FN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}LT.type="LOCAL";const jN=LT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MT extends bT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}MT.type="SESSION";const VT=MT;/**
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
 */function zN(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class wh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new wh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await zN(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}wh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class $N{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=Nm("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(){return window}function BN(t){ir().location.href=t}/**
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
 */function FT(){return typeof ir().WorkerGlobalScope<"u"&&typeof ir().importScripts=="function"}async function HN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function WN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function qN(){return FT()?self:null}/**
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
 */const UT="firebaseLocalStorageDb",KN=1,Vc="firebaseLocalStorage",jT="fbase_key";class bl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Eh(t,e){return t.transaction([Vc],e?"readwrite":"readonly").objectStore(Vc)}function GN(){const t=indexedDB.deleteDatabase(UT);return new bl(t).toPromise()}function Zf(){const t=indexedDB.open(UT,KN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Vc,{keyPath:jT})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Vc)?e(r):(r.close(),await GN(),e(await Zf()))})})}async function Jv(t,e,n){const r=Eh(t,!0).put({[jT]:e,value:n});return new bl(r).toPromise()}async function QN(t,e){const n=Eh(t,!1).get(e),r=await new bl(n).toPromise();return r===void 0?null:r.value}function Zv(t,e){const n=Eh(t,!0).delete(e);return new bl(n).toPromise()}const YN=800,XN=3;class zT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Zf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>XN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return FT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=wh._getInstance(qN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await HN(),!this.activeServiceWorker)return;this.sender=new $N(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||WN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Zf();return await Jv(e,Mc,"1"),await Zv(e,Mc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Jv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>QN(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Zv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Eh(i,!1).getAll();return new bl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),YN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}zT.type="LOCAL";const JN=zT;new Nl(3e4,6e4);/**
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
 */function ZN(t,e){return e?Ir(e):(oe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Dm extends km{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return no(e,this._buildIdpRequest())}_linkToIdToken(e,n){return no(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return no(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function eD(t){return DT(t.auth,new Dm(t),t.bypassAuthState)}function tD(t){const{auth:e,user:n}=t;return oe(n,e,"internal-error"),kN(n,new Dm(t),t.bypassAuthState)}async function nD(t){const{auth:e,user:n}=t;return oe(n,e,"internal-error"),CN(n,new Dm(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return eD;case"linkViaPopup":case"linkViaRedirect":return nD;case"reauthViaPopup":case"reauthViaRedirect":return tD;default:zn(this.auth,"internal-error")}}resolve(e){Nr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Nr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rD=new Nl(2e3,1e4);class Ks extends $T{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ks.currentPopupAction&&Ks.currentPopupAction.cancel(),Ks.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return oe(e,this.auth,"internal-error"),e}async onExecution(){Nr(this.filter.length===1,"Popup operations only handle one event");const e=Nm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(rr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(rr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ks.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(rr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,rD.get())};e()}}Ks.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iD="pendingRedirect",qu=new Map;class sD extends $T{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=qu.get(this.auth._key());if(!e){try{const r=await oD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}qu.set(this.auth._key(),e)}return this.bypassAuthState||qu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function oD(t,e){const n=uD(e),r=lD(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function aD(t,e){qu.set(t._key(),e)}function lD(t){return Ir(t._redirectPersistence)}function uD(t){return Wu(iD,t.config.apiKey,t.name)}async function cD(t,e,n=!1){if(er(t.app))return Promise.reject(Ar(t));const r=ps(t),i=ZN(r,e),o=await new sD(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hD=10*60*1e3;class dD{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!fD(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!BT(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(rr(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=hD&&this.cachedEventUids.clear(),this.cachedEventUids.has(e_(e))}saveEventToCache(e){this.cachedEventUids.add(e_(e)),this.lastProcessedEventTime=Date.now()}}function e_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function BT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function fD(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return BT(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pD(t,e={}){return Mr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gD=/^https?/;async function yD(t){if(t.config.emulator)return;const{authorizedDomains:e}=await pD(t);for(const n of e)try{if(vD(n))return}catch{}zn(t,"unauthorized-domain")}function vD(t){const e=Yf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!gD.test(n))return!1;if(mD.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const _D=new Nl(3e4,6e4);function t_(){const t=ir().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function wD(t){return new Promise((e,n)=>{var r,i,s;function o(){t_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{t_(),n(rr(t,"network-request-failed"))},timeout:_D.get()})}if(!((i=(r=ir().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=ir().gapi)===null||s===void 0)&&s.load)o();else{const l=hN("iframefcb");return ir()[l]=()=>{gapi.load?o():n(rr(t,"network-request-failed"))},CT(`${cN()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Ku=null,e})}let Ku=null;function ED(t){return Ku=Ku||wD(t),Ku}/**
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
 */const TD=new Nl(5e3,15e3),ID="__/auth/iframe",SD="emulator/auth/iframe",RD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},AD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function PD(t){const e=t.config;oe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Am(e,SD):`https://${t.config.authDomain}/${ID}`,r={apiKey:e.apiKey,appName:t.name,v:bo},i=AD.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${xl(r).slice(1)}`}async function CD(t){const e=await ED(t),n=ir().gapi;return oe(n,t,"internal-error"),e.open({where:document.body,url:PD(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:RD,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=rr(t,"network-request-failed"),l=ir().setTimeout(()=>{s(o)},TD.get());function u(){ir().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const kD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},xD=500,ND=600,DD="_blank",OD="http://localhost";class n_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function bD(t,e,n,r=xD,i=ND){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},kD),{width:r.toString(),height:i.toString(),top:s,left:o}),c=kt().toLowerCase();n&&(l=ET(c)?DD:n),wT(c)&&(e=e||OD,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[E,R])=>`${m}${E}=${R},`,"");if(eN(c)&&l!=="_self")return LD(e||"",l),new n_(null);const f=window.open(e||"",l,d);oe(f,t,"popup-blocked");try{f.focus()}catch{}return new n_(f)}function LD(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const MD="__/auth/handler",VD="emulator/auth/handler",FD=encodeURIComponent("fac");async function r_(t,e,n,r,i,s){oe(t.config.authDomain,t,"auth-domain-config-required"),oe(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:bo,eventId:i};if(e instanceof xT){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ik(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries({}))o[d]=f}if(e instanceof Ol){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const u=await t._getAppCheckToken(),c=u?`#${FD}=${encodeURIComponent(u)}`:"";return`${UD(t)}?${xl(l).slice(1)}${c}`}function UD({config:t}){return t.emulator?Am(t,VD):`https://${t.authDomain}/${MD}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xd="webStorageSupport";class jD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=VT,this._completeRedirectFn=cD,this._overrideRedirectResult=aD}async _openPopup(e,n,r,i){var s;Nr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await r_(e,n,r,Yf(),i);return bD(e,o,Nm())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await r_(e,n,r,Yf(),i);return BN(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Nr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await CD(e),r=new dD(e);return n.register("authEvent",i=>(oe(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(xd,{type:xd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[xd];o!==void 0&&n(!!o),zn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=yD(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return AT()||Cm()||vh()}}const zD=jD;var i_="@firebase/auth",s_="1.7.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $D{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){oe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BD(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function HD(t){vo(new ss("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;oe(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:PT(t)},c=new aN(r,i,s,u);return gN(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),vo(new ss("auth-internal",e=>{const n=ps(e.getProvider("auth").getImmediate());return(r=>new $D(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),gi(i_,s_,BD(t)),gi(i_,s_,"esm2017")}/**
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
 */const WD=5*60,qD=iT("authIdTokenMaxAge")||WD;let o_=null;const KD=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>qD)return;const i=n==null?void 0:n.token;o_!==i&&(o_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function GD(t=lT()){const e=Sm(t,"auth");if(e.isInitialized())return e.getImmediate();const n=mN(t,{popupRedirectResolver:zD,persistence:[JN,jN,VT]}),r=iT("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=KD(s.toString());MN(n,o,()=>o(n.currentUser)),LN(n,l=>o(l))}}const i=nT("auth");return i&&yN(n,`http://${i}`),n}function QD(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}lN({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=rr("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",QD().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});HD("Browser");var a_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ji,HT;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(_,g){function w(){}w.prototype=g.prototype,_.D=g.prototype,_.prototype=new w,_.prototype.constructor=_,_.C=function(I,k,N){for(var A=Array(arguments.length-2),fe=2;fe<arguments.length;fe++)A[fe-2]=arguments[fe];return g.prototype[k].apply(I,A)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(_,g,w){w||(w=0);var I=Array(16);if(typeof g=="string")for(var k=0;16>k;++k)I[k]=g.charCodeAt(w++)|g.charCodeAt(w++)<<8|g.charCodeAt(w++)<<16|g.charCodeAt(w++)<<24;else for(k=0;16>k;++k)I[k]=g[w++]|g[w++]<<8|g[w++]<<16|g[w++]<<24;g=_.g[0],w=_.g[1],k=_.g[2];var N=_.g[3],A=g+(N^w&(k^N))+I[0]+3614090360&4294967295;g=w+(A<<7&4294967295|A>>>25),A=N+(k^g&(w^k))+I[1]+3905402710&4294967295,N=g+(A<<12&4294967295|A>>>20),A=k+(w^N&(g^w))+I[2]+606105819&4294967295,k=N+(A<<17&4294967295|A>>>15),A=w+(g^k&(N^g))+I[3]+3250441966&4294967295,w=k+(A<<22&4294967295|A>>>10),A=g+(N^w&(k^N))+I[4]+4118548399&4294967295,g=w+(A<<7&4294967295|A>>>25),A=N+(k^g&(w^k))+I[5]+1200080426&4294967295,N=g+(A<<12&4294967295|A>>>20),A=k+(w^N&(g^w))+I[6]+2821735955&4294967295,k=N+(A<<17&4294967295|A>>>15),A=w+(g^k&(N^g))+I[7]+4249261313&4294967295,w=k+(A<<22&4294967295|A>>>10),A=g+(N^w&(k^N))+I[8]+1770035416&4294967295,g=w+(A<<7&4294967295|A>>>25),A=N+(k^g&(w^k))+I[9]+2336552879&4294967295,N=g+(A<<12&4294967295|A>>>20),A=k+(w^N&(g^w))+I[10]+4294925233&4294967295,k=N+(A<<17&4294967295|A>>>15),A=w+(g^k&(N^g))+I[11]+2304563134&4294967295,w=k+(A<<22&4294967295|A>>>10),A=g+(N^w&(k^N))+I[12]+1804603682&4294967295,g=w+(A<<7&4294967295|A>>>25),A=N+(k^g&(w^k))+I[13]+4254626195&4294967295,N=g+(A<<12&4294967295|A>>>20),A=k+(w^N&(g^w))+I[14]+2792965006&4294967295,k=N+(A<<17&4294967295|A>>>15),A=w+(g^k&(N^g))+I[15]+1236535329&4294967295,w=k+(A<<22&4294967295|A>>>10),A=g+(k^N&(w^k))+I[1]+4129170786&4294967295,g=w+(A<<5&4294967295|A>>>27),A=N+(w^k&(g^w))+I[6]+3225465664&4294967295,N=g+(A<<9&4294967295|A>>>23),A=k+(g^w&(N^g))+I[11]+643717713&4294967295,k=N+(A<<14&4294967295|A>>>18),A=w+(N^g&(k^N))+I[0]+3921069994&4294967295,w=k+(A<<20&4294967295|A>>>12),A=g+(k^N&(w^k))+I[5]+3593408605&4294967295,g=w+(A<<5&4294967295|A>>>27),A=N+(w^k&(g^w))+I[10]+38016083&4294967295,N=g+(A<<9&4294967295|A>>>23),A=k+(g^w&(N^g))+I[15]+3634488961&4294967295,k=N+(A<<14&4294967295|A>>>18),A=w+(N^g&(k^N))+I[4]+3889429448&4294967295,w=k+(A<<20&4294967295|A>>>12),A=g+(k^N&(w^k))+I[9]+568446438&4294967295,g=w+(A<<5&4294967295|A>>>27),A=N+(w^k&(g^w))+I[14]+3275163606&4294967295,N=g+(A<<9&4294967295|A>>>23),A=k+(g^w&(N^g))+I[3]+4107603335&4294967295,k=N+(A<<14&4294967295|A>>>18),A=w+(N^g&(k^N))+I[8]+1163531501&4294967295,w=k+(A<<20&4294967295|A>>>12),A=g+(k^N&(w^k))+I[13]+2850285829&4294967295,g=w+(A<<5&4294967295|A>>>27),A=N+(w^k&(g^w))+I[2]+4243563512&4294967295,N=g+(A<<9&4294967295|A>>>23),A=k+(g^w&(N^g))+I[7]+1735328473&4294967295,k=N+(A<<14&4294967295|A>>>18),A=w+(N^g&(k^N))+I[12]+2368359562&4294967295,w=k+(A<<20&4294967295|A>>>12),A=g+(w^k^N)+I[5]+4294588738&4294967295,g=w+(A<<4&4294967295|A>>>28),A=N+(g^w^k)+I[8]+2272392833&4294967295,N=g+(A<<11&4294967295|A>>>21),A=k+(N^g^w)+I[11]+1839030562&4294967295,k=N+(A<<16&4294967295|A>>>16),A=w+(k^N^g)+I[14]+4259657740&4294967295,w=k+(A<<23&4294967295|A>>>9),A=g+(w^k^N)+I[1]+2763975236&4294967295,g=w+(A<<4&4294967295|A>>>28),A=N+(g^w^k)+I[4]+1272893353&4294967295,N=g+(A<<11&4294967295|A>>>21),A=k+(N^g^w)+I[7]+4139469664&4294967295,k=N+(A<<16&4294967295|A>>>16),A=w+(k^N^g)+I[10]+3200236656&4294967295,w=k+(A<<23&4294967295|A>>>9),A=g+(w^k^N)+I[13]+681279174&4294967295,g=w+(A<<4&4294967295|A>>>28),A=N+(g^w^k)+I[0]+3936430074&4294967295,N=g+(A<<11&4294967295|A>>>21),A=k+(N^g^w)+I[3]+3572445317&4294967295,k=N+(A<<16&4294967295|A>>>16),A=w+(k^N^g)+I[6]+76029189&4294967295,w=k+(A<<23&4294967295|A>>>9),A=g+(w^k^N)+I[9]+3654602809&4294967295,g=w+(A<<4&4294967295|A>>>28),A=N+(g^w^k)+I[12]+3873151461&4294967295,N=g+(A<<11&4294967295|A>>>21),A=k+(N^g^w)+I[15]+530742520&4294967295,k=N+(A<<16&4294967295|A>>>16),A=w+(k^N^g)+I[2]+3299628645&4294967295,w=k+(A<<23&4294967295|A>>>9),A=g+(k^(w|~N))+I[0]+4096336452&4294967295,g=w+(A<<6&4294967295|A>>>26),A=N+(w^(g|~k))+I[7]+1126891415&4294967295,N=g+(A<<10&4294967295|A>>>22),A=k+(g^(N|~w))+I[14]+2878612391&4294967295,k=N+(A<<15&4294967295|A>>>17),A=w+(N^(k|~g))+I[5]+4237533241&4294967295,w=k+(A<<21&4294967295|A>>>11),A=g+(k^(w|~N))+I[12]+1700485571&4294967295,g=w+(A<<6&4294967295|A>>>26),A=N+(w^(g|~k))+I[3]+2399980690&4294967295,N=g+(A<<10&4294967295|A>>>22),A=k+(g^(N|~w))+I[10]+4293915773&4294967295,k=N+(A<<15&4294967295|A>>>17),A=w+(N^(k|~g))+I[1]+2240044497&4294967295,w=k+(A<<21&4294967295|A>>>11),A=g+(k^(w|~N))+I[8]+1873313359&4294967295,g=w+(A<<6&4294967295|A>>>26),A=N+(w^(g|~k))+I[15]+4264355552&4294967295,N=g+(A<<10&4294967295|A>>>22),A=k+(g^(N|~w))+I[6]+2734768916&4294967295,k=N+(A<<15&4294967295|A>>>17),A=w+(N^(k|~g))+I[13]+1309151649&4294967295,w=k+(A<<21&4294967295|A>>>11),A=g+(k^(w|~N))+I[4]+4149444226&4294967295,g=w+(A<<6&4294967295|A>>>26),A=N+(w^(g|~k))+I[11]+3174756917&4294967295,N=g+(A<<10&4294967295|A>>>22),A=k+(g^(N|~w))+I[2]+718787259&4294967295,k=N+(A<<15&4294967295|A>>>17),A=w+(N^(k|~g))+I[9]+3951481745&4294967295,_.g[0]=_.g[0]+g&4294967295,_.g[1]=_.g[1]+(k+(A<<21&4294967295|A>>>11))&4294967295,_.g[2]=_.g[2]+k&4294967295,_.g[3]=_.g[3]+N&4294967295}r.prototype.u=function(_,g){g===void 0&&(g=_.length);for(var w=g-this.blockSize,I=this.B,k=this.h,N=0;N<g;){if(k==0)for(;N<=w;)i(this,_,N),N+=this.blockSize;if(typeof _=="string"){for(;N<g;)if(I[k++]=_.charCodeAt(N++),k==this.blockSize){i(this,I),k=0;break}}else for(;N<g;)if(I[k++]=_[N++],k==this.blockSize){i(this,I),k=0;break}}this.h=k,this.o+=g},r.prototype.v=function(){var _=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);_[0]=128;for(var g=1;g<_.length-8;++g)_[g]=0;var w=8*this.o;for(g=_.length-8;g<_.length;++g)_[g]=w&255,w/=256;for(this.u(_),_=Array(16),g=w=0;4>g;++g)for(var I=0;32>I;I+=8)_[w++]=this.g[g]>>>I&255;return _};function s(_,g){var w=l;return Object.prototype.hasOwnProperty.call(w,_)?w[_]:w[_]=g(_)}function o(_,g){this.h=g;for(var w=[],I=!0,k=_.length-1;0<=k;k--){var N=_[k]|0;I&&N==g||(w[k]=N,I=!1)}this.g=w}var l={};function u(_){return-128<=_&&128>_?s(_,function(g){return new o([g|0],0>g?-1:0)}):new o([_|0],0>_?-1:0)}function c(_){if(isNaN(_)||!isFinite(_))return f;if(0>_)return O(c(-_));for(var g=[],w=1,I=0;_>=w;I++)g[I]=_/w|0,w*=4294967296;return new o(g,0)}function d(_,g){if(_.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(_.charAt(0)=="-")return O(d(_.substring(1),g));if(0<=_.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=c(Math.pow(g,8)),I=f,k=0;k<_.length;k+=8){var N=Math.min(8,_.length-k),A=parseInt(_.substring(k,k+N),g);8>N?(N=c(Math.pow(g,N)),I=I.j(N).add(c(A))):(I=I.j(w),I=I.add(c(A)))}return I}var f=u(0),m=u(1),E=u(16777216);t=o.prototype,t.m=function(){if(P(this))return-O(this).m();for(var _=0,g=1,w=0;w<this.g.length;w++){var I=this.i(w);_+=(0<=I?I:4294967296+I)*g,g*=4294967296}return _},t.toString=function(_){if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(R(this))return"0";if(P(this))return"-"+O(this).toString(_);for(var g=c(Math.pow(_,6)),w=this,I="";;){var k=b(w,g).g;w=T(w,k.j(g));var N=((0<w.g.length?w.g[0]:w.h)>>>0).toString(_);if(w=k,R(w))return N+I;for(;6>N.length;)N="0"+N;I=N+I}},t.i=function(_){return 0>_?0:_<this.g.length?this.g[_]:this.h};function R(_){if(_.h!=0)return!1;for(var g=0;g<_.g.length;g++)if(_.g[g]!=0)return!1;return!0}function P(_){return _.h==-1}t.l=function(_){return _=T(this,_),P(_)?-1:R(_)?0:1};function O(_){for(var g=_.g.length,w=[],I=0;I<g;I++)w[I]=~_.g[I];return new o(w,~_.h).add(m)}t.abs=function(){return P(this)?O(this):this},t.add=function(_){for(var g=Math.max(this.g.length,_.g.length),w=[],I=0,k=0;k<=g;k++){var N=I+(this.i(k)&65535)+(_.i(k)&65535),A=(N>>>16)+(this.i(k)>>>16)+(_.i(k)>>>16);I=A>>>16,N&=65535,A&=65535,w[k]=A<<16|N}return new o(w,w[w.length-1]&-2147483648?-1:0)};function T(_,g){return _.add(O(g))}t.j=function(_){if(R(this)||R(_))return f;if(P(this))return P(_)?O(this).j(O(_)):O(O(this).j(_));if(P(_))return O(this.j(O(_)));if(0>this.l(E)&&0>_.l(E))return c(this.m()*_.m());for(var g=this.g.length+_.g.length,w=[],I=0;I<2*g;I++)w[I]=0;for(I=0;I<this.g.length;I++)for(var k=0;k<_.g.length;k++){var N=this.i(I)>>>16,A=this.i(I)&65535,fe=_.i(k)>>>16,it=_.i(k)&65535;w[2*I+2*k]+=A*it,v(w,2*I+2*k),w[2*I+2*k+1]+=N*it,v(w,2*I+2*k+1),w[2*I+2*k+1]+=A*fe,v(w,2*I+2*k+1),w[2*I+2*k+2]+=N*fe,v(w,2*I+2*k+2)}for(I=0;I<g;I++)w[I]=w[2*I+1]<<16|w[2*I];for(I=g;I<2*g;I++)w[I]=0;return new o(w,0)};function v(_,g){for(;(_[g]&65535)!=_[g];)_[g+1]+=_[g]>>>16,_[g]&=65535,g++}function S(_,g){this.g=_,this.h=g}function b(_,g){if(R(g))throw Error("division by zero");if(R(_))return new S(f,f);if(P(_))return g=b(O(_),g),new S(O(g.g),O(g.h));if(P(g))return g=b(_,O(g)),new S(O(g.g),g.h);if(30<_.g.length){if(P(_)||P(g))throw Error("slowDivide_ only works with positive integers.");for(var w=m,I=g;0>=I.l(_);)w=F(w),I=F(I);var k=C(w,1),N=C(I,1);for(I=C(I,2),w=C(w,2);!R(I);){var A=N.add(I);0>=A.l(_)&&(k=k.add(w),N=A),I=C(I,1),w=C(w,1)}return g=T(_,k.j(g)),new S(k,g)}for(k=f;0<=_.l(g);){for(w=Math.max(1,Math.floor(_.m()/g.m())),I=Math.ceil(Math.log(w)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),N=c(w),A=N.j(g);P(A)||0<A.l(_);)w-=I,N=c(w),A=N.j(g);R(N)&&(N=m),k=k.add(N),_=T(_,A)}return new S(k,_)}t.A=function(_){return b(this,_).h},t.and=function(_){for(var g=Math.max(this.g.length,_.g.length),w=[],I=0;I<g;I++)w[I]=this.i(I)&_.i(I);return new o(w,this.h&_.h)},t.or=function(_){for(var g=Math.max(this.g.length,_.g.length),w=[],I=0;I<g;I++)w[I]=this.i(I)|_.i(I);return new o(w,this.h|_.h)},t.xor=function(_){for(var g=Math.max(this.g.length,_.g.length),w=[],I=0;I<g;I++)w[I]=this.i(I)^_.i(I);return new o(w,this.h^_.h)};function F(_){for(var g=_.g.length+1,w=[],I=0;I<g;I++)w[I]=_.i(I)<<1|_.i(I-1)>>>31;return new o(w,_.h)}function C(_,g){var w=g>>5;g%=32;for(var I=_.g.length-w,k=[],N=0;N<I;N++)k[N]=0<g?_.i(N+w)>>>g|_.i(N+w+1)<<32-g:_.i(N+w);return new o(k,_.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,HT=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,Ji=o}).apply(typeof a_<"u"?a_:typeof self<"u"?self:typeof window<"u"?window:{});var Tu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var WT,qT,Sa,KT,Gu,ep,GT,QT,YT;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,p){return a==Array.prototype||a==Object.prototype||(a[h]=p.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Tu=="object"&&Tu];for(var h=0;h<a.length;++h){var p=a[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var p=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var L=a[y];if(!(L in p))break e;p=p[L]}a=a[a.length-1],y=p[a],h=h(y),h!=y&&h!=null&&e(p,a,{configurable:!0,writable:!0,value:h})}}function s(a,h){a instanceof String&&(a+="");var p=0,y=!1,L={next:function(){if(!y&&p<a.length){var V=p++;return{value:h(V,a[V]),done:!1}}return y=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}i("Array.prototype.values",function(a){return a||function(){return s(this,function(h,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,p){return a.call.apply(a.bind,arguments)}function f(a,h,p){if(!a)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,y),a.apply(h,L)}}return function(){return a.apply(h,arguments)}}function m(a,h,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:f,m.apply(null,arguments)}function E(a,h){var p=Array.prototype.slice.call(arguments,1);return function(){var y=p.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function R(a,h){function p(){}p.prototype=h.prototype,a.aa=h.prototype,a.prototype=new p,a.prototype.constructor=a,a.Qb=function(y,L,V){for(var G=Array(arguments.length-2),be=2;be<arguments.length;be++)G[be-2]=arguments[be];return h.prototype[L].apply(y,G)}}function P(a){const h=a.length;if(0<h){const p=Array(h);for(let y=0;y<h;y++)p[y]=a[y];return p}return[]}function O(a,h){for(let p=1;p<arguments.length;p++){const y=arguments[p];if(u(y)){const L=a.length||0,V=y.length||0;a.length=L+V;for(let G=0;G<V;G++)a[L+G]=y[G]}else a.push(y)}}class T{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function v(a){return/^[\s\xa0]*$/.test(a)}function S(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function b(a){return b[" "](a),a}b[" "]=function(){};var F=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function C(a,h,p){for(const y in a)h.call(p,a[y],y,a)}function _(a,h){for(const p in a)h.call(void 0,a[p],p,a)}function g(a){const h={};for(const p in a)h[p]=a[p];return h}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,h){let p,y;for(let L=1;L<arguments.length;L++){y=arguments[L];for(p in y)a[p]=y[p];for(let V=0;V<w.length;V++)p=w[V],Object.prototype.hasOwnProperty.call(y,p)&&(a[p]=y[p])}}function k(a){var h=1;a=a.split(":");const p=[];for(;0<h&&a.length;)p.push(a.shift()),h--;return a.length&&p.push(a.join(":")),p}function N(a){l.setTimeout(()=>{throw a},0)}function A(){var a=Y;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class fe{constructor(){this.h=this.g=null}add(h,p){const y=it.get();y.set(h,p),this.h?this.h.next=y:this.g=y,this.h=y}}var it=new T(()=>new Yt,a=>a.reset());class Yt{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let K,$=!1,Y=new fe,Z=()=>{const a=l.Promise.resolve(void 0);K=()=>{a.then(me)}};var me=()=>{for(var a;a=A();){try{a.h.call(a.g)}catch(p){N(p)}var h=it;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}$=!1};function he(){this.s=this.s,this.C=this.C}he.prototype.s=!1,he.prototype.ma=function(){this.s||(this.s=!0,this.N())},he.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Pe(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Pe.prototype.h=function(){this.defaultPrevented=!0};var We=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};l.addEventListener("test",p,h),l.removeEventListener("test",p,h)}catch{}return a}();function Ze(a,h){if(Pe.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var p=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(F){e:{try{b(h.nodeName);var L=!0;break e}catch{}L=!1}L||(h=null)}}else p=="mouseover"?h=a.fromElement:p=="mouseout"&&(h=a.toElement);this.relatedTarget=h,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:qe[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Ze.aa.h.call(this)}}R(Ze,Pe);var qe={2:"touch",3:"pen",4:"mouse"};Ze.prototype.h=function(){Ze.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Nt="closure_listenable_"+(1e6*Math.random()|0),Rn=0;function An(a,h,p,y,L){this.listener=a,this.proxy=null,this.src=h,this.type=p,this.capture=!!y,this.ha=L,this.key=++Rn,this.da=this.fa=!1}function Hn(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Pn(a){this.src=a,this.g={},this.h=0}Pn.prototype.add=function(a,h,p,y,L){var V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);var G=Wn(a,h,y,L);return-1<G?(h=a[G],p||(h.fa=!1)):(h=new An(h,this.src,V,!!y,L),h.fa=p,a.push(h)),h};function Ne(a,h){var p=h.type;if(p in a.g){var y=a.g[p],L=Array.prototype.indexOf.call(y,h,void 0),V;(V=0<=L)&&Array.prototype.splice.call(y,L,1),V&&(Hn(h),a.g[p].length==0&&(delete a.g[p],a.h--))}}function Wn(a,h,p,y){for(var L=0;L<a.length;++L){var V=a[L];if(!V.da&&V.listener==h&&V.capture==!!p&&V.ha==y)return L}return-1}var vs="closure_lm_"+(1e6*Math.random()|0),jo={};function qn(a,h,p,y,L){if(Array.isArray(h)){for(var V=0;V<h.length;V++)qn(a,h[V],p,y,L);return null}return p=Vr(p),a&&a[Nt]?a.K(h,p,c(y)?!!y.capture:!!y,L):Mh(a,h,p,!1,y,L)}function Mh(a,h,p,y,L,V){if(!h)throw Error("Invalid event type");var G=c(L)?!!L.capture:!!L,be=Bo(a);if(be||(a[vs]=be=new Pn(a)),p=be.add(h,p,y,G,V),p.proxy)return p;if(y=Vh(),p.proxy=y,y.src=a,y.listener=p,a.addEventListener)We||(L=G),L===void 0&&(L=!1),a.addEventListener(h.toString(),y,L);else if(a.attachEvent)a.attachEvent($l(h.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return p}function Vh(){function a(p){return h.call(a.src,a.listener,p)}const h=Fh;return a}function zo(a,h,p,y,L){if(Array.isArray(h))for(var V=0;V<h.length;V++)zo(a,h[V],p,y,L);else y=c(y)?!!y.capture:!!y,p=Vr(p),a&&a[Nt]?(a=a.i,h=String(h).toString(),h in a.g&&(V=a.g[h],p=Wn(V,p,y,L),-1<p&&(Hn(V[p]),Array.prototype.splice.call(V,p,1),V.length==0&&(delete a.g[h],a.h--)))):a&&(a=Bo(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Wn(h,p,y,L)),(p=-1<a?h[a]:null)&&$o(p))}function $o(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[Nt])Ne(h.i,a);else{var p=a.type,y=a.proxy;h.removeEventListener?h.removeEventListener(p,y,a.capture):h.detachEvent?h.detachEvent($l(p),y):h.addListener&&h.removeListener&&h.removeListener(y),(p=Bo(h))?(Ne(p,a),p.h==0&&(p.src=null,h[vs]=null)):Hn(a)}}}function $l(a){return a in jo?jo[a]:jo[a]="on"+a}function Fh(a,h){if(a.da)a=!0;else{h=new Ze(h,this);var p=a.listener,y=a.ha||a.src;a.fa&&$o(a),a=p.call(y,h)}return a}function Bo(a){return a=a[vs],a instanceof Pn?a:null}var cr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Vr(a){return typeof a=="function"?a:(a[cr]||(a[cr]=function(h){return a.handleEvent(h)}),a[cr])}function ht(){he.call(this),this.i=new Pn(this),this.M=this,this.F=null}R(ht,he),ht.prototype[Nt]=!0,ht.prototype.removeEventListener=function(a,h,p,y){zo(this,a,h,p,y)};function dt(a,h){var p,y=a.F;if(y)for(p=[];y;y=y.F)p.push(y);if(a=a.M,y=h.type||h,typeof h=="string")h=new Pe(h,a);else if(h instanceof Pe)h.target=h.target||a;else{var L=h;h=new Pe(y,a),I(h,L)}if(L=!0,p)for(var V=p.length-1;0<=V;V--){var G=h.g=p[V];L=rn(G,y,!0,h)&&L}if(G=h.g=a,L=rn(G,y,!0,h)&&L,L=rn(G,y,!1,h)&&L,p)for(V=0;V<p.length;V++)G=h.g=p[V],L=rn(G,y,!1,h)&&L}ht.prototype.N=function(){if(ht.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var p=a.g[h],y=0;y<p.length;y++)Hn(p[y]);delete a.g[h],a.h--}}this.F=null},ht.prototype.K=function(a,h,p,y){return this.i.add(String(a),h,!1,p,y)},ht.prototype.L=function(a,h,p,y){return this.i.add(String(a),h,!0,p,y)};function rn(a,h,p,y){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var L=!0,V=0;V<h.length;++V){var G=h[V];if(G&&!G.da&&G.capture==p){var be=G.listener,Tt=G.ha||G.src;G.fa&&Ne(a.i,G),L=be.call(Tt,y)!==!1&&L}}return L&&!y.defaultPrevented}function gn(a,h,p){if(typeof a=="function")p&&(a=m(a,p));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function Ho(a){a.g=gn(()=>{a.g=null,a.i&&(a.i=!1,Ho(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class _s extends he{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Ho(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ni(a){he.call(this),this.h=a,this.g={}}R(Ni,he);var Cn=[];function Wo(a){C(a.g,function(h,p){this.g.hasOwnProperty(p)&&$o(h)},a),a.g={}}Ni.prototype.N=function(){Ni.aa.N.call(this),Wo(this)},Ni.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ws=l.JSON.stringify,Bl=l.JSON.parse,Uh=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Es(){}Es.prototype.h=null;function Di(a){return a.h||(a.h=a.i())}function qo(){}var hr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Fr(){Pe.call(this,"d")}R(Fr,Pe);function Oi(){Pe.call(this,"c")}R(Oi,Pe);var dr={},Ko=null;function Ts(){return Ko=Ko||new ht}dr.La="serverreachability";function Go(a){Pe.call(this,dr.La,a)}R(Go,Pe);function Kn(a){const h=Ts();dt(h,new Go(h))}dr.STAT_EVENT="statevent";function bi(a,h){Pe.call(this,dr.STAT_EVENT,a),this.stat=h}R(bi,Pe);function Et(a){const h=Ts();dt(h,new bi(h,a))}dr.Ma="timingevent";function Hl(a,h){Pe.call(this,dr.Ma,a),this.size=h}R(Hl,Pe);function x(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function D(){this.g=!0}D.prototype.xa=function(){this.g=!1};function M(a,h,p,y,L,V){a.info(function(){if(a.g)if(V)for(var G="",be=V.split("&"),Tt=0;Tt<be.length;Tt++){var Re=be[Tt].split("=");if(1<Re.length){var bt=Re[0];Re=Re[1];var Lt=bt.split("_");G=2<=Lt.length&&Lt[1]=="type"?G+(bt+"="+Re+"&"):G+(bt+"=redacted&")}}else G=null;else G=V;return"XMLHTTP REQ ("+y+") [attempt "+L+"]: "+h+`
`+p+`
`+G})}function j(a,h,p,y,L,V,G){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+L+"]: "+h+`
`+p+`
`+V+" "+G})}function Q(a,h,p,y){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+se(a,p)+(y?" "+y:"")})}function te(a,h){a.info(function(){return"TIMEOUT: "+h})}D.prototype.info=function(){};function se(a,h){if(!a.g)return h;if(!h)return null;try{var p=JSON.parse(h);if(p){for(a=0;a<p.length;a++)if(Array.isArray(p[a])){var y=p[a];if(!(2>y.length)){var L=y[1];if(Array.isArray(L)&&!(1>L.length)){var V=L[0];if(V!="noop"&&V!="stop"&&V!="close")for(var G=1;G<L.length;G++)L[G]=""}}}}return ws(p)}catch{return h}}var q={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},le={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ne;function re(){}R(re,Es),re.prototype.g=function(){return new XMLHttpRequest},re.prototype.i=function(){return{}},ne=new re;function ye(a,h,p,y){this.j=a,this.i=h,this.l=p,this.R=y||1,this.U=new Ni(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Se}function Se(){this.i=null,this.g="",this.h=!1}var Ce={},Ee={};function nt(a,h,p){a.L=1,a.v=Gl(pr(h)),a.m=p,a.P=!0,Ke(a,null)}function Ke(a,h){a.F=Date.now(),kn(a),a.A=pr(a.v);var p=a.A,y=a.R;Array.isArray(y)||(y=[String(y)]),vg(p.i,"t",y),a.C=0,p=a.j.J,a.h=new Se,a.g=Mg(a.j,p?h:null,!a.m),0<a.O&&(a.M=new _s(m(a.Y,a,a.g),a.O)),h=a.U,p=a.g,y=a.ca;var L="readystatechange";Array.isArray(L)||(L&&(Cn[0]=L.toString()),L=Cn);for(var V=0;V<L.length;V++){var G=qn(p,L[V],y||h.handleEvent,!1,h.h||h);if(!G)break;h.g[G.key]=G}h=a.H?g(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Kn(),M(a.i,a.u,a.A,a.l,a.R,a.m)}ye.prototype.ca=function(a){a=a.target;const h=this.M;h&&mr(a)==3?h.j():this.Y(a)},ye.prototype.Y=function(a){try{if(a==this.g)e:{const Lt=mr(this.g);var h=this.g.Ba();const As=this.g.Z();if(!(3>Lt)&&(Lt!=3||this.g&&(this.h.h||this.g.oa()||Rg(this.g)))){this.J||Lt!=4||h==7||(h==8||0>=As?Kn(3):Kn(2)),Qn(this);var p=this.g.Z();this.X=p;t:if(Ur(this)){var y=Rg(this.g);a="";var L=y.length,V=mr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){yn(this),Dt(this);var G="";break t}this.h.i=new l.TextDecoder}for(h=0;h<L;h++)this.h.h=!0,a+=this.h.i.decode(y[h],{stream:!(V&&h==L-1)});y.length=0,this.h.g+=a,this.C=0,G=this.h.g}else G=this.g.oa();if(this.o=p==200,j(this.i,this.u,this.A,this.l,this.R,Lt,p),this.o){if(this.T&&!this.K){t:{if(this.g){var be,Tt=this.g;if((be=Tt.g?Tt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(be)){var Re=be;break t}}Re=null}if(p=Re)Q(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,jr(this,p);else{this.o=!1,this.s=3,Et(12),yn(this),Dt(this);break e}}if(this.P){p=!0;let xn;for(;!this.J&&this.C<G.length;)if(xn=Gn(this,G),xn==Ee){Lt==4&&(this.s=4,Et(14),p=!1),Q(this.i,this.l,null,"[Incomplete Response]");break}else if(xn==Ce){this.s=4,Et(15),Q(this.i,this.l,G,"[Invalid Chunk]"),p=!1;break}else Q(this.i,this.l,xn,null),jr(this,xn);if(Ur(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Lt!=4||G.length!=0||this.h.h||(this.s=1,Et(16),p=!1),this.o=this.o&&p,!p)Q(this.i,this.l,G,"[Invalid Chunked Response]"),yn(this),Dt(this);else if(0<G.length&&!this.W){this.W=!0;var bt=this.j;bt.g==this&&bt.ba&&!bt.M&&(bt.j.info("Great, no buffering proxy detected. Bytes received: "+G.length),Bh(bt),bt.M=!0,Et(11))}}else Q(this.i,this.l,G,null),jr(this,G);Lt==4&&yn(this),this.o&&!this.J&&(Lt==4?Dg(this.j,this):(this.o=!1,kn(this)))}else zI(this.g),p==400&&0<G.indexOf("Unknown SID")?(this.s=3,Et(12)):(this.s=0,Et(13)),yn(this),Dt(this)}}}catch{}finally{}};function Ur(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Gn(a,h){var p=a.C,y=h.indexOf(`
`,p);return y==-1?Ee:(p=Number(h.substring(p,y)),isNaN(p)?Ce:(y+=1,y+p>h.length?Ee:(h=h.slice(y,y+p),a.C=y+p,h)))}ye.prototype.cancel=function(){this.J=!0,yn(this)};function kn(a){a.S=Date.now()+a.I,fr(a,a.I)}function fr(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=x(m(a.ba,a),h)}function Qn(a){a.B&&(l.clearTimeout(a.B),a.B=null)}ye.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(te(this.i,this.A),this.L!=2&&(Kn(),Et(17)),yn(this),this.s=2,Dt(this)):fr(this,this.S-a)};function Dt(a){a.j.G==0||a.J||Dg(a.j,a)}function yn(a){Qn(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Wo(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function jr(a,h){try{var p=a.j;if(p.G!=0&&(p.g==a||De(p.h,a))){if(!a.K&&De(p.h,a)&&p.G==3){try{var y=p.Da.g.parse(h)}catch{y=null}if(Array.isArray(y)&&y.length==3){var L=y;if(L[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<a.F)Zl(p),Xl(p);else break e;$h(p),Et(18)}}else p.za=L[1],0<p.za-p.T&&37500>L[2]&&p.F&&p.v==0&&!p.C&&(p.C=x(m(p.Za,p),6e3));if(1>=Ot(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else Mi(p,11)}else if((a.K||p.g==a)&&Zl(p),!v(h))for(L=p.Da.g.parse(h),h=0;h<L.length;h++){let Re=L[h];if(p.T=Re[0],Re=Re[1],p.G==2)if(Re[0]=="c"){p.K=Re[1],p.ia=Re[2];const bt=Re[3];bt!=null&&(p.la=bt,p.j.info("VER="+p.la));const Lt=Re[4];Lt!=null&&(p.Aa=Lt,p.j.info("SVER="+p.Aa));const As=Re[5];As!=null&&typeof As=="number"&&0<As&&(y=1.5*As,p.L=y,p.j.info("backChannelRequestTimeoutMs_="+y)),y=p;const xn=a.g;if(xn){const tu=xn.g?xn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(tu){var V=y.h;V.g||tu.indexOf("spdy")==-1&&tu.indexOf("quic")==-1&&tu.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(sn(V,V.h),V.h=null))}if(y.D){const Hh=xn.g?xn.g.getResponseHeader("X-HTTP-Session-Id"):null;Hh&&(y.ya=Hh,Ue(y.I,y.D,Hh))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-a.F,p.j.info("Handshake RTT: "+p.R+"ms")),y=p;var G=a;if(y.qa=Lg(y,y.J?y.ia:null,y.W),G.K){Qo(y.h,G);var be=G,Tt=y.L;Tt&&(be.I=Tt),be.B&&(Qn(be),kn(be)),y.g=G}else xg(y);0<p.i.length&&Jl(p)}else Re[0]!="stop"&&Re[0]!="close"||Mi(p,7);else p.G==3&&(Re[0]=="stop"||Re[0]=="close"?Re[0]=="stop"?Mi(p,7):zh(p):Re[0]!="noop"&&p.l&&p.l.ta(Re),p.v=0)}}Kn(4)}catch{}}var Is=class{constructor(a,h){this.g=a,this.map=h}};function de(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Fe(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Ot(a){return a.h?1:a.g?a.g.size:0}function De(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function sn(a,h){a.g?a.g.add(h):a.h=h}function Qo(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}de.prototype.cancel=function(){if(this.i=Wl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Wl(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const p of a.g.values())h=h.concat(p.D);return h}return P(a.i)}function AI(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],p=a.length,y=0;y<p;y++)h.push(a[y]);return h}h=[],p=0;for(y in a)h[p++]=a[y];return h}function PI(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var p=0;p<a;p++)h.push(p);return h}h=[],p=0;for(const y in a)h[p++]=y;return h}}}function dg(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var p=PI(a),y=AI(a),L=y.length,V=0;V<L;V++)h.call(void 0,y[V],p&&p[V],a)}var fg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function CI(a,h){if(a){a=a.split("&");for(var p=0;p<a.length;p++){var y=a[p].indexOf("="),L=null;if(0<=y){var V=a[p].substring(0,y);L=a[p].substring(y+1)}else V=a[p];h(V,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function Li(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Li){this.h=a.h,ql(this,a.j),this.o=a.o,this.g=a.g,Kl(this,a.s),this.l=a.l;var h=a.i,p=new Jo;p.i=h.i,h.g&&(p.g=new Map(h.g),p.h=h.h),pg(this,p),this.m=a.m}else a&&(h=String(a).match(fg))?(this.h=!1,ql(this,h[1]||"",!0),this.o=Yo(h[2]||""),this.g=Yo(h[3]||"",!0),Kl(this,h[4]),this.l=Yo(h[5]||"",!0),pg(this,h[6]||"",!0),this.m=Yo(h[7]||"")):(this.h=!1,this.i=new Jo(null,this.h))}Li.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Xo(h,mg,!0),":");var p=this.g;return(p||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Xo(h,mg,!0),"@"),a.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&a.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(Xo(p,p.charAt(0)=="/"?NI:xI,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",Xo(p,OI)),a.join("")};function pr(a){return new Li(a)}function ql(a,h,p){a.j=p?Yo(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Kl(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function pg(a,h,p){h instanceof Jo?(a.i=h,bI(a.i,a.h)):(p||(h=Xo(h,DI)),a.i=new Jo(h,a.h))}function Ue(a,h,p){a.i.set(h,p)}function Gl(a){return Ue(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Yo(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Xo(a,h,p){return typeof a=="string"?(a=encodeURI(a).replace(h,kI),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function kI(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var mg=/[#\/\?@]/g,xI=/[#\?:]/g,NI=/[#\?]/g,DI=/[#\?@]/g,OI=/#/g;function Jo(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function zr(a){a.g||(a.g=new Map,a.h=0,a.i&&CI(a.i,function(h,p){a.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=Jo.prototype,t.add=function(a,h){zr(this),this.i=null,a=Ss(this,a);var p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(h),this.h+=1,this};function gg(a,h){zr(a),h=Ss(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function yg(a,h){return zr(a),h=Ss(a,h),a.g.has(h)}t.forEach=function(a,h){zr(this),this.g.forEach(function(p,y){p.forEach(function(L){a.call(h,L,y,this)},this)},this)},t.na=function(){zr(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),p=[];for(let y=0;y<h.length;y++){const L=a[y];for(let V=0;V<L.length;V++)p.push(h[y])}return p},t.V=function(a){zr(this);let h=[];if(typeof a=="string")yg(this,a)&&(h=h.concat(this.g.get(Ss(this,a))));else{a=Array.from(this.g.values());for(let p=0;p<a.length;p++)h=h.concat(a[p])}return h},t.set=function(a,h){return zr(this),this.i=null,a=Ss(this,a),yg(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function vg(a,h,p){gg(a,h),0<p.length&&(a.i=null,a.g.set(Ss(a,h),P(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var p=0;p<h.length;p++){var y=h[p];const V=encodeURIComponent(String(y)),G=this.V(y);for(y=0;y<G.length;y++){var L=V;G[y]!==""&&(L+="="+encodeURIComponent(String(G[y]))),a.push(L)}}return this.i=a.join("&")};function Ss(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function bI(a,h){h&&!a.j&&(zr(a),a.i=null,a.g.forEach(function(p,y){var L=y.toLowerCase();y!=L&&(gg(this,y),vg(this,L,p))},a)),a.j=h}function LI(a,h){const p=new D;if(l.Image){const y=new Image;y.onload=E($r,p,"TestLoadImage: loaded",!0,h,y),y.onerror=E($r,p,"TestLoadImage: error",!1,h,y),y.onabort=E($r,p,"TestLoadImage: abort",!1,h,y),y.ontimeout=E($r,p,"TestLoadImage: timeout",!1,h,y),l.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else h(!1)}function MI(a,h){const p=new D,y=new AbortController,L=setTimeout(()=>{y.abort(),$r(p,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:y.signal}).then(V=>{clearTimeout(L),V.ok?$r(p,"TestPingServer: ok",!0,h):$r(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(L),$r(p,"TestPingServer: error",!1,h)})}function $r(a,h,p,y,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),y(p)}catch{}}function VI(){this.g=new Uh}function FI(a,h,p){const y=p||"";try{dg(a,function(L,V){let G=L;c(L)&&(G=ws(L)),h.push(y+V+"="+encodeURIComponent(G))})}catch(L){throw h.push(y+"type="+encodeURIComponent("_badmap")),L}}function Zo(a){this.l=a.Ub||null,this.j=a.eb||!1}R(Zo,Es),Zo.prototype.g=function(){return new Ql(this.l,this.j)},Zo.prototype.i=function(a){return function(){return a}}({});function Ql(a,h){ht.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(Ql,ht),t=Ql.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,ta(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ea(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ta(this)),this.g&&(this.readyState=3,ta(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;_g(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function _g(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?ea(this):ta(this),this.readyState==3&&_g(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,ea(this))},t.Qa=function(a){this.g&&(this.response=a,ea(this))},t.ga=function(){this.g&&ea(this)};function ea(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ta(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=h.next();return a.join(`\r
`)};function ta(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ql.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function wg(a){let h="";return C(a,function(p,y){h+=y,h+=":",h+=p,h+=`\r
`}),h}function jh(a,h,p){e:{for(y in p){var y=!1;break e}y=!0}y||(p=wg(p),typeof a=="string"?p!=null&&encodeURIComponent(String(p)):Ue(a,h,p))}function et(a){ht.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(et,ht);var UI=/^https?$/i,jI=["POST","PUT"];t=et.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,p,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ne.g(),this.v=this.o?Di(this.o):Di(ne),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(V){Eg(this,V);return}if(a=p||"",p=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var L in y)p.set(L,y[L]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const V of y.keys())p.set(V,y.get(V));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(p.keys()).find(V=>V.toLowerCase()=="content-type"),L=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(jI,h,void 0))||y||L||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,G]of p)this.g.setRequestHeader(V,G);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Sg(this),this.u=!0,this.g.send(a),this.u=!1}catch(V){Eg(this,V)}};function Eg(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Tg(a),Yl(a)}function Tg(a){a.A||(a.A=!0,dt(a,"complete"),dt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,dt(this,"complete"),dt(this,"abort"),Yl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Yl(this,!0)),et.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Ig(this):this.bb())},t.bb=function(){Ig(this)};function Ig(a){if(a.h&&typeof o<"u"&&(!a.v[1]||mr(a)!=4||a.Z()!=2)){if(a.u&&mr(a)==4)gn(a.Ea,0,a);else if(dt(a,"readystatechange"),mr(a)==4){a.h=!1;try{const G=a.Z();e:switch(G){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var y;if(y=G===0){var L=String(a.D).match(fg)[1]||null;!L&&l.self&&l.self.location&&(L=l.self.location.protocol.slice(0,-1)),y=!UI.test(L?L.toLowerCase():"")}p=y}if(p)dt(a,"complete"),dt(a,"success");else{a.m=6;try{var V=2<mr(a)?a.g.statusText:""}catch{V=""}a.l=V+" ["+a.Z()+"]",Tg(a)}}finally{Yl(a)}}}}function Yl(a,h){if(a.g){Sg(a);const p=a.g,y=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||dt(a,"ready");try{p.onreadystatechange=y}catch{}}}function Sg(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function mr(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<mr(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Bl(h)}};function Rg(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function zI(a){const h={};a=(a.g&&2<=mr(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(v(a[y]))continue;var p=k(a[y]);const L=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const V=h[L]||[];h[L]=V,V.push(p)}_(h,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function na(a,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||h}function Ag(a){this.Aa=0,this.i=[],this.j=new D,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=na("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=na("baseRetryDelayMs",5e3,a),this.cb=na("retryDelaySeedMs",1e4,a),this.Wa=na("forwardChannelMaxRetries",2,a),this.wa=na("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new de(a&&a.concurrentRequestLimit),this.Da=new VI,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Ag.prototype,t.la=8,t.G=1,t.connect=function(a,h,p,y){Et(0),this.W=a,this.H=h||{},p&&y!==void 0&&(this.H.OSID=p,this.H.OAID=y),this.F=this.X,this.I=Lg(this,null,this.W),Jl(this)};function zh(a){if(Pg(a),a.G==3){var h=a.U++,p=pr(a.I);if(Ue(p,"SID",a.K),Ue(p,"RID",h),Ue(p,"TYPE","terminate"),ra(a,p),h=new ye(a,a.j,h),h.L=2,h.v=Gl(pr(p)),p=!1,l.navigator&&l.navigator.sendBeacon)try{p=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!p&&l.Image&&(new Image().src=h.v,p=!0),p||(h.g=Mg(h.j,null),h.g.ea(h.v)),h.F=Date.now(),kn(h)}bg(a)}function Xl(a){a.g&&(Bh(a),a.g.cancel(),a.g=null)}function Pg(a){Xl(a),a.u&&(l.clearTimeout(a.u),a.u=null),Zl(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Jl(a){if(!Fe(a.h)&&!a.s){a.s=!0;var h=a.Ga;K||Z(),$||(K(),$=!0),Y.add(h,a),a.B=0}}function $I(a,h){return Ot(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=x(m(a.Ga,a,h),Og(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const L=new ye(this,this.j,a);let V=this.o;if(this.S&&(V?(V=g(V),I(V,this.S)):V=this.S),this.m!==null||this.O||(L.H=V,V=null),this.P)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var y=this.i[p];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(h+=y,4096<h){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=kg(this,L,h),p=pr(this.I),Ue(p,"RID",a),Ue(p,"CVER",22),this.D&&Ue(p,"X-HTTP-Session-Id",this.D),ra(this,p),V&&(this.O?h="headers="+encodeURIComponent(String(wg(V)))+"&"+h:this.m&&jh(p,this.m,V)),sn(this.h,L),this.Ua&&Ue(p,"TYPE","init"),this.P?(Ue(p,"$req",h),Ue(p,"SID","null"),L.T=!0,nt(L,p,null)):nt(L,p,h),this.G=2}}else this.G==3&&(a?Cg(this,a):this.i.length==0||Fe(this.h)||Cg(this))};function Cg(a,h){var p;h?p=h.l:p=a.U++;const y=pr(a.I);Ue(y,"SID",a.K),Ue(y,"RID",p),Ue(y,"AID",a.T),ra(a,y),a.m&&a.o&&jh(y,a.m,a.o),p=new ye(a,a.j,p,a.B+1),a.m===null&&(p.H=a.o),h&&(a.i=h.D.concat(a.i)),h=kg(a,p,1e3),p.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),sn(a.h,p),nt(p,y,h)}function ra(a,h){a.H&&C(a.H,function(p,y){Ue(h,y,p)}),a.l&&dg({},function(p,y){Ue(h,y,p)})}function kg(a,h,p){p=Math.min(a.i.length,p);var y=a.l?m(a.l.Na,a.l,a):null;e:{var L=a.i;let V=-1;for(;;){const G=["count="+p];V==-1?0<p?(V=L[0].g,G.push("ofs="+V)):V=0:G.push("ofs="+V);let be=!0;for(let Tt=0;Tt<p;Tt++){let Re=L[Tt].g;const bt=L[Tt].map;if(Re-=V,0>Re)V=Math.max(0,L[Tt].g-100),be=!1;else try{FI(bt,G,"req"+Re+"_")}catch{y&&y(bt)}}if(be){y=G.join("&");break e}}}return a=a.i.splice(0,p),h.D=a,y}function xg(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;K||Z(),$||(K(),$=!0),Y.add(h,a),a.v=0}}function $h(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=x(m(a.Fa,a),Og(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Ng(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=x(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Et(10),Xl(this),Ng(this))};function Bh(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Ng(a){a.g=new ye(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=pr(a.qa);Ue(h,"RID","rpc"),Ue(h,"SID",a.K),Ue(h,"AID",a.T),Ue(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&Ue(h,"TO",a.ja),Ue(h,"TYPE","xmlhttp"),ra(a,h),a.m&&a.o&&jh(h,a.m,a.o),a.L&&(a.g.I=a.L);var p=a.g;a=a.ia,p.L=1,p.v=Gl(pr(h)),p.m=null,p.P=!0,Ke(p,a)}t.Za=function(){this.C!=null&&(this.C=null,Xl(this),$h(this),Et(19))};function Zl(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Dg(a,h){var p=null;if(a.g==h){Zl(a),Bh(a),a.g=null;var y=2}else if(De(a.h,h))p=h.D,Qo(a.h,h),y=1;else return;if(a.G!=0){if(h.o)if(y==1){p=h.m?h.m.length:0,h=Date.now()-h.F;var L=a.B;y=Ts(),dt(y,new Hl(y,p)),Jl(a)}else xg(a);else if(L=h.s,L==3||L==0&&0<h.X||!(y==1&&$I(a,h)||y==2&&$h(a)))switch(p&&0<p.length&&(h=a.h,h.i=h.i.concat(p)),L){case 1:Mi(a,5);break;case 4:Mi(a,10);break;case 3:Mi(a,6);break;default:Mi(a,2)}}}function Og(a,h){let p=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(p*=2),p*h}function Mi(a,h){if(a.j.info("Error code "+h),h==2){var p=m(a.fb,a),y=a.Xa;const L=!y;y=new Li(y||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ql(y,"https"),Gl(y),L?LI(y.toString(),p):MI(y.toString(),p)}else Et(2);a.G=0,a.l&&a.l.sa(h),bg(a),Pg(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Et(2)):(this.j.info("Failed to ping google.com"),Et(1))};function bg(a){if(a.G=0,a.ka=[],a.l){const h=Wl(a.h);(h.length!=0||a.i.length!=0)&&(O(a.ka,h),O(a.ka,a.i),a.h.i.length=0,P(a.i),a.i.length=0),a.l.ra()}}function Lg(a,h,p){var y=p instanceof Li?pr(p):new Li(p);if(y.g!="")h&&(y.g=h+"."+y.g),Kl(y,y.s);else{var L=l.location;y=L.protocol,h=h?h+"."+L.hostname:L.hostname,L=+L.port;var V=new Li(null);y&&ql(V,y),h&&(V.g=h),L&&Kl(V,L),p&&(V.l=p),y=V}return p=a.D,h=a.ya,p&&h&&Ue(y,p,h),Ue(y,"VER",a.la),ra(a,y),y}function Mg(a,h,p){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new et(new Zo({eb:p})):new et(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Vg(){}t=Vg.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function eu(){}eu.prototype.g=function(a,h){return new on(a,h)};function on(a,h){ht.call(this),this.g=new Ag(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!v(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!v(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Rs(this)}R(on,ht),on.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},on.prototype.close=function(){zh(this.g)},on.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.u&&(p={},p.__data__=ws(a),a=p);h.i.push(new Is(h.Ya++,a)),h.G==3&&Jl(h)},on.prototype.N=function(){this.g.l=null,delete this.j,zh(this.g),delete this.g,on.aa.N.call(this)};function Fg(a){Fr.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const p in h){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}R(Fg,Fr);function Ug(){Oi.call(this),this.status=1}R(Ug,Oi);function Rs(a){this.g=a}R(Rs,Vg),Rs.prototype.ua=function(){dt(this.g,"a")},Rs.prototype.ta=function(a){dt(this.g,new Fg(a))},Rs.prototype.sa=function(a){dt(this.g,new Ug)},Rs.prototype.ra=function(){dt(this.g,"b")},eu.prototype.createWebChannel=eu.prototype.g,on.prototype.send=on.prototype.o,on.prototype.open=on.prototype.m,on.prototype.close=on.prototype.close,YT=function(){return new eu},QT=function(){return Ts()},GT=dr,ep={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},q.NO_ERROR=0,q.TIMEOUT=8,q.HTTP_ERROR=6,Gu=q,le.COMPLETE="complete",KT=le,qo.EventType=hr,hr.OPEN="a",hr.CLOSE="b",hr.ERROR="c",hr.MESSAGE="d",ht.prototype.listen=ht.prototype.K,Sa=qo,qT=Zo,et.prototype.listenOnce=et.prototype.L,et.prototype.getLastError=et.prototype.Ka,et.prototype.getLastErrorCode=et.prototype.Ba,et.prototype.getStatus=et.prototype.Z,et.prototype.getResponseJson=et.prototype.Oa,et.prototype.getResponseText=et.prototype.oa,et.prototype.send=et.prototype.ea,et.prototype.setWithCredentials=et.prototype.Ha,WT=et}).apply(typeof Tu<"u"?Tu:typeof self<"u"?self:typeof window<"u"?window:{});const l_="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ut.UNAUTHENTICATED=new Ut(null),Ut.GOOGLE_CREDENTIALS=new Ut("google-credentials-uid"),Ut.FIRST_PARTY=new Ut("first-party-uid"),Ut.MOCK_USER=new Ut("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mo="10.12.5";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const us=new Tm("@firebase/firestore");function ma(){return us.logLevel}function ee(t,...e){if(us.logLevel<=we.DEBUG){const n=e.map(Om);us.debug(`Firestore (${Mo}): ${t}`,...n)}}function Dr(t,...e){if(us.logLevel<=we.ERROR){const n=e.map(Om);us.error(`Firestore (${Mo}): ${t}`,...n)}}function wo(t,...e){if(us.logLevel<=we.WARN){const n=e.map(Om);us.warn(`Firestore (${Mo}): ${t}`,...n)}}function Om(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function ae(t="Unexpected state"){const e=`FIRESTORE (${Mo}) INTERNAL ASSERTION FAILED: `+t;throw Dr(e),new Error(e)}function Le(t,e){t||ae()}function ce(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class X extends Bn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class YD{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ut.UNAUTHENTICATED))}shutdown(){}}class XD{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class JD{constructor(e){this.t=e,this.currentUser=Ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new yi;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new yi,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{ee("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(ee("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new yi)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ee("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Le(typeof r.accessToken=="string"),new XT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Le(e===null||typeof e=="string"),new Ut(e)}}class ZD{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ut.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class eO{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new ZD(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ut.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class tO{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class nO{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&ee("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,ee("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{ee("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):ee("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Le(typeof n.token=="string"),this.R=n.token,new tO(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rO(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JT{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=rO(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Ae(t,e){return t<e?-1:t>e?1:0}function Eo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new X(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new X(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new X(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new X(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return mt.fromMillis(Date.now())}static fromDate(e){return mt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new mt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ae(this.nanoseconds,e.nanoseconds):Ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ue(e)}static min(){return new ue(new mt(0,0))}static max(){return new ue(new mt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(e,n,r){n===void 0?n=0:n>e.length&&ae(),r===void 0?r=e.length-n:r>e.length-n&&ae(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return pl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof pl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class $e extends pl{construct(e,n,r){return new $e(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new X(z.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new $e(n)}static emptyPath(){return new $e([])}}const iO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Rt extends pl{construct(e,n,r){return new Rt(e,n,r)}static isValidIdentifier(e){return iO.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Rt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Rt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new X(z.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new X(z.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new X(z.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new X(z.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Rt(n)}static emptyPath(){return new Rt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e){this.path=e}static fromPath(e){return new ie($e.fromString(e))}static fromName(e){return new ie($e.fromString(e).popFirst(5))}static empty(){return new ie($e.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&$e.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return $e.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ie(new $e(e.slice()))}}function sO(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ue.fromTimestamp(r===1e9?new mt(n+1,0):new mt(n,r));return new Ei(i,ie.empty(),e)}function oO(t){return new Ei(t.readTime,t.key,-1)}class Ei{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ei(ue.min(),ie.empty(),-1)}static max(){return new Ei(ue.max(),ie.empty(),-1)}}function aO(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ie.comparator(t.documentKey,e.documentKey),n!==0?n:Ae(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lO="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class uO{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ll(t){if(t.code!==z.FAILED_PRECONDITION||t.message!==lO)throw t;ee("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ae(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new B((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof B?n:B.resolve(n)}catch(n){return B.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):B.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):B.reject(n)}static resolve(e){return new B((n,r)=>{n(e)})}static reject(e){return new B((n,r)=>{r(e)})}static waitFor(e){return new B((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=B.resolve(!1);for(const r of e)n=n.next(i=>i?B.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new B((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++l,l===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new B((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function cO(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ml(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class bm{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}bm.oe=-1;function Th(t){return t==null}function Fc(t){return t===0&&1/t==-1/0}function hO(t){return typeof t=="number"&&Number.isInteger(t)&&!Fc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ms(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ZT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e,n){this.comparator=e,this.root=n||St.EMPTY}insert(e,n){return new Je(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,St.BLACK,null,null))}remove(e){return new Je(this.comparator,this.root.remove(e,this.comparator).copy(null,null,St.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Iu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Iu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Iu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Iu(this.root,e,this.comparator,!0)}}class Iu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class St{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??St.RED,this.left=i??St.EMPTY,this.right=s??St.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new St(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return St.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return St.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,St.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,St.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ae();const e=this.left.check();if(e!==this.right.check())throw ae();return e+(this.isRed()?0:1)}}St.EMPTY=null,St.RED=!0,St.BLACK=!1;St.EMPTY=new class{constructor(){this.size=0}get key(){throw ae()}get value(){throw ae()}get color(){throw ae()}get left(){throw ae()}get right(){throw ae()}copy(e,n,r,i,s){return this}insert(e,n,r){return new St(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.comparator=e,this.data=new Je(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new c_(this.data.getIterator())}getIteratorFrom(e){return new c_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Pt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Pt(this.comparator);return n.data=e,n}}class c_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e){this.fields=e,e.sort(Rt.comparator)}static empty(){return new hn([])}unionWith(e){let n=new Pt(Rt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new hn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Eo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class e1 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new e1("Invalid base64 string: "+s):s}}(e);return new xt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new xt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}xt.EMPTY_BYTE_STRING=new xt("");const dO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ti(t){if(Le(!!t),typeof t=="string"){let e=0;const n=dO.exec(t);if(Le(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:at(t.seconds),nanos:at(t.nanos)}}function at(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function cs(t){return typeof t=="string"?xt.fromBase64String(t):xt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Mm(t){const e=t.mapValue.fields.__previous_value__;return Lm(e)?Mm(e):e}function ml(t){const e=Ti(t.mapValue.fields.__local_write_time__.timestampValue);return new mt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fO{constructor(e,n,r,i,s,o,l,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c}}class gl{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new gl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof gl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Su={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function hs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Lm(t)?4:pO(t)?9007199254740991:10:ae()}function ur(t,e){if(t===e)return!0;const n=hs(t);if(n!==hs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ml(t).isEqual(ml(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Ti(i.timestampValue),l=Ti(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return cs(i.bytesValue).isEqual(cs(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return at(i.geoPointValue.latitude)===at(s.geoPointValue.latitude)&&at(i.geoPointValue.longitude)===at(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return at(i.integerValue)===at(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=at(i.doubleValue),l=at(s.doubleValue);return o===l?Fc(o)===Fc(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Eo(t.arrayValue.values||[],e.arrayValue.values||[],ur);case 10:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(u_(o)!==u_(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!ur(o[u],l[u])))return!1;return!0}(t,e);default:return ae()}}function yl(t,e){return(t.values||[]).find(n=>ur(n,e))!==void 0}function To(t,e){if(t===e)return 0;const n=hs(t),r=hs(e);if(n!==r)return Ae(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ae(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=at(s.integerValue||s.doubleValue),u=at(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return h_(t.timestampValue,e.timestampValue);case 4:return h_(ml(t),ml(e));case 5:return Ae(t.stringValue,e.stringValue);case 6:return function(s,o){const l=cs(s),u=cs(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const d=Ae(l[c],u[c]);if(d!==0)return d}return Ae(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=Ae(at(s.latitude),at(o.latitude));return l!==0?l:Ae(at(s.longitude),at(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const l=s.values||[],u=o.values||[];for(let c=0;c<l.length&&c<u.length;++c){const d=To(l[c],u[c]);if(d)return d}return Ae(l.length,u.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Su.mapValue&&o===Su.mapValue)return 0;if(s===Su.mapValue)return 1;if(o===Su.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let f=0;f<u.length&&f<d.length;++f){const m=Ae(u[f],d[f]);if(m!==0)return m;const E=To(l[u[f]],c[d[f]]);if(E!==0)return E}return Ae(u.length,d.length)}(t.mapValue,e.mapValue);default:throw ae()}}function h_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ae(t,e);const n=Ti(t),r=Ti(e),i=Ae(n.seconds,r.seconds);return i!==0?i:Ae(n.nanos,r.nanos)}function Io(t){return tp(t)}function tp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Ti(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return cs(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ie.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=tp(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${tp(n.fields[o])}`;return i+"}"}(t.mapValue):ae()}function d_(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function np(t){return!!t&&"integerValue"in t}function Vm(t){return!!t&&"arrayValue"in t}function f_(t){return!!t&&"nullValue"in t}function p_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Qu(t){return!!t&&"mapValue"in t}function ja(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ms(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ja(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ja(t.arrayValue.values[n]);return e}return Object.assign({},t)}function pO(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e){this.value=e}static empty(){return new Jt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Qu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ja(n)}setAll(e){let n=Rt.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=ja(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Qu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ur(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Qu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ms(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Jt(ja(this.value))}}function t1(t){const e=[];return ms(t.fields,(n,r)=>{const i=new Rt([n]);if(Qu(r)){const s=t1(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new hn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new zt(e,0,ue.min(),ue.min(),ue.min(),Jt.empty(),0)}static newFoundDocument(e,n,r,i){return new zt(e,1,n,ue.min(),r,i,0)}static newNoDocument(e,n){return new zt(e,2,n,ue.min(),ue.min(),Jt.empty(),0)}static newUnknownDocument(e,n){return new zt(e,3,n,ue.min(),ue.min(),Jt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ue.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Jt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Jt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ue.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof zt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new zt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Uc{constructor(e,n){this.position=e,this.inclusive=n}}function m_(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=ie.comparator(ie.fromName(o.referenceValue),n.key):r=To(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function g_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ur(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class vl{constructor(e,n="asc"){this.field=e,this.dir=n}}function mO(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class n1{}class ct extends n1{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new yO(e,n,r):n==="array-contains"?new wO(e,r):n==="in"?new EO(e,r):n==="not-in"?new TO(e,r):n==="array-contains-any"?new IO(e,r):new ct(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new vO(e,r):new _O(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(To(n,this.value)):n!==null&&hs(this.value)===hs(n)&&this.matchesComparison(To(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ae()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class $n extends n1{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new $n(e,n)}matches(e){return r1(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function r1(t){return t.op==="and"}function i1(t){return gO(t)&&r1(t)}function gO(t){for(const e of t.filters)if(e instanceof $n)return!1;return!0}function rp(t){if(t instanceof ct)return t.field.canonicalString()+t.op.toString()+Io(t.value);if(i1(t))return t.filters.map(e=>rp(e)).join(",");{const e=t.filters.map(n=>rp(n)).join(",");return`${t.op}(${e})`}}function s1(t,e){return t instanceof ct?function(r,i){return i instanceof ct&&r.op===i.op&&r.field.isEqual(i.field)&&ur(r.value,i.value)}(t,e):t instanceof $n?function(r,i){return i instanceof $n&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&s1(o,i.filters[l]),!0):!1}(t,e):void ae()}function o1(t){return t instanceof ct?function(n){return`${n.field.canonicalString()} ${n.op} ${Io(n.value)}`}(t):t instanceof $n?function(n){return n.op.toString()+" {"+n.getFilters().map(o1).join(" ,")+"}"}(t):"Filter"}class yO extends ct{constructor(e,n,r){super(e,n,r),this.key=ie.fromName(r.referenceValue)}matches(e){const n=ie.comparator(e.key,this.key);return this.matchesComparison(n)}}class vO extends ct{constructor(e,n){super(e,"in",n),this.keys=a1("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class _O extends ct{constructor(e,n){super(e,"not-in",n),this.keys=a1("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function a1(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ie.fromName(r.referenceValue))}class wO extends ct{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Vm(n)&&yl(n.arrayValue,this.value)}}class EO extends ct{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&yl(this.value.arrayValue,n)}}class TO extends ct{constructor(e,n){super(e,"not-in",n)}matches(e){if(yl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!yl(this.value.arrayValue,n)}}class IO extends ct{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Vm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>yl(this.value.arrayValue,r))}}/**
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
 */class SO{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function y_(t,e=null,n=[],r=[],i=null,s=null,o=null){return new SO(t,e,n,r,i,s,o)}function Fm(t){const e=ce(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>rp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Th(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Io(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Io(r)).join(",")),e.ue=n}return e.ue}function Um(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!mO(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!s1(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!g_(t.startAt,e.startAt)&&g_(t.endAt,e.endAt)}function ip(t){return ie.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function RO(t,e,n,r,i,s,o,l){return new Vo(t,e,n,r,i,s,o,l)}function Ih(t){return new Vo(t)}function v_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function l1(t){return t.collectionGroup!==null}function za(t){const e=ce(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Pt(Rt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new vl(s,r))}),n.has(Rt.keyField().canonicalString())||e.ce.push(new vl(Rt.keyField(),r))}return e.ce}function sr(t){const e=ce(t);return e.le||(e.le=AO(e,za(t))),e.le}function AO(t,e){if(t.limitType==="F")return y_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new vl(i.field,s)});const n=t.endAt?new Uc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Uc(t.startAt.position,t.startAt.inclusive):null;return y_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function sp(t,e){const n=t.filters.concat([e]);return new Vo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function op(t,e,n){return new Vo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Sh(t,e){return Um(sr(t),sr(e))&&t.limitType===e.limitType}function u1(t){return`${Fm(sr(t))}|lt:${t.limitType}`}function xs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>o1(i)).join(", ")}]`),Th(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Io(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Io(i)).join(",")),`Target(${r})`}(sr(t))}; limitType=${t.limitType})`}function Rh(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):ie.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of za(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=m_(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,za(r),i)||r.endAt&&!function(o,l,u){const c=m_(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,za(r),i))}(t,e)}function PO(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function c1(t){return(e,n)=>{let r=!1;for(const i of za(t)){const s=CO(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function CO(t,e,n){const r=t.field.isKeyField()?ie.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?To(u,c):ae()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ae()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ms(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return ZT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kO=new Je(ie.comparator);function Or(){return kO}const h1=new Je(ie.comparator);function Ra(...t){let e=h1;for(const n of t)e=e.insert(n.key,n);return e}function d1(t){let e=h1;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ki(){return $a()}function f1(){return $a()}function $a(){return new Fo(t=>t.toString(),(t,e)=>t.isEqual(e))}const xO=new Je(ie.comparator),NO=new Pt(ie.comparator);function _e(...t){let e=NO;for(const n of t)e=e.add(n);return e}const DO=new Pt(Ae);function OO(){return DO}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p1(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Fc(e)?"-0":e}}function m1(t){return{integerValue:""+t}}function bO(t,e){return hO(e)?m1(e):p1(t,e)}/**
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
 */class Ah{constructor(){this._=void 0}}function LO(t,e,n){return t instanceof jc?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Lm(s)&&(s=Mm(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof _l?y1(t,e):t instanceof wl?v1(t,e):function(i,s){const o=g1(i,s),l=__(o)+__(i.Pe);return np(o)&&np(i.Pe)?m1(l):p1(i.serializer,l)}(t,e)}function MO(t,e,n){return t instanceof _l?y1(t,e):t instanceof wl?v1(t,e):n}function g1(t,e){return t instanceof zc?function(r){return np(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class jc extends Ah{}class _l extends Ah{constructor(e){super(),this.elements=e}}function y1(t,e){const n=_1(e);for(const r of t.elements)n.some(i=>ur(i,r))||n.push(r);return{arrayValue:{values:n}}}class wl extends Ah{constructor(e){super(),this.elements=e}}function v1(t,e){let n=_1(e);for(const r of t.elements)n=n.filter(i=>!ur(i,r));return{arrayValue:{values:n}}}class zc extends Ah{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function __(t){return at(t.integerValue||t.doubleValue)}function _1(t){return Vm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function VO(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof _l&&i instanceof _l||r instanceof wl&&i instanceof wl?Eo(r.elements,i.elements,ur):r instanceof zc&&i instanceof zc?ur(r.Pe,i.Pe):r instanceof jc&&i instanceof jc}(t.transform,e.transform)}class FO{constructor(e,n){this.version=e,this.transformResults=n}}class or{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new or}static exists(e){return new or(void 0,e)}static updateTime(e){return new or(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Yu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ph{}function w1(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new T1(t.key,or.none()):new Vl(t.key,t.data,or.none());{const n=t.data,r=Jt.empty();let i=new Pt(Rt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new xi(t.key,r,new hn(i.toArray()),or.none())}}function UO(t,e,n){t instanceof Vl?function(i,s,o){const l=i.value.clone(),u=E_(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof xi?function(i,s,o){if(!Yu(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=E_(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(E1(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ba(t,e,n,r){return t instanceof Vl?function(s,o,l,u){if(!Yu(s.precondition,o))return l;const c=s.value.clone(),d=T_(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof xi?function(s,o,l,u){if(!Yu(s.precondition,o))return l;const c=T_(s.fieldTransforms,u,o),d=o.data;return d.setAll(E1(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,l){return Yu(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function jO(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=g1(r.transform,i||null);s!=null&&(n===null&&(n=Jt.empty()),n.set(r.field,s))}return n||null}function w_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Eo(r,i,(s,o)=>VO(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Vl extends Ph{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class xi extends Ph{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function E1(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function E_(t,e,n){const r=new Map;Le(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,MO(o,l,n[i]))}return r}function T_(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,LO(s,o,e))}return r}class T1 extends Ph{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class zO extends Ph{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $O{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&UO(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ba(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ba(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=f1();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=w1(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(ue.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),_e())}isEqual(e){return this.batchId===e.batchId&&Eo(this.mutations,e.mutations,(n,r)=>w_(n,r))&&Eo(this.baseMutations,e.baseMutations,(n,r)=>w_(n,r))}}class jm{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Le(e.mutations.length===r.length);let i=function(){return xO}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new jm(e,n,r,i)}}/**
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
 */class BO{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class HO{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var st,Te;function WO(t){switch(t){default:return ae();case z.CANCELLED:case z.UNKNOWN:case z.DEADLINE_EXCEEDED:case z.RESOURCE_EXHAUSTED:case z.INTERNAL:case z.UNAVAILABLE:case z.UNAUTHENTICATED:return!1;case z.INVALID_ARGUMENT:case z.NOT_FOUND:case z.ALREADY_EXISTS:case z.PERMISSION_DENIED:case z.FAILED_PRECONDITION:case z.ABORTED:case z.OUT_OF_RANGE:case z.UNIMPLEMENTED:case z.DATA_LOSS:return!0}}function I1(t){if(t===void 0)return Dr("GRPC error has no .code"),z.UNKNOWN;switch(t){case st.OK:return z.OK;case st.CANCELLED:return z.CANCELLED;case st.UNKNOWN:return z.UNKNOWN;case st.DEADLINE_EXCEEDED:return z.DEADLINE_EXCEEDED;case st.RESOURCE_EXHAUSTED:return z.RESOURCE_EXHAUSTED;case st.INTERNAL:return z.INTERNAL;case st.UNAVAILABLE:return z.UNAVAILABLE;case st.UNAUTHENTICATED:return z.UNAUTHENTICATED;case st.INVALID_ARGUMENT:return z.INVALID_ARGUMENT;case st.NOT_FOUND:return z.NOT_FOUND;case st.ALREADY_EXISTS:return z.ALREADY_EXISTS;case st.PERMISSION_DENIED:return z.PERMISSION_DENIED;case st.FAILED_PRECONDITION:return z.FAILED_PRECONDITION;case st.ABORTED:return z.ABORTED;case st.OUT_OF_RANGE:return z.OUT_OF_RANGE;case st.UNIMPLEMENTED:return z.UNIMPLEMENTED;case st.DATA_LOSS:return z.DATA_LOSS;default:return ae()}}(Te=st||(st={}))[Te.OK=0]="OK",Te[Te.CANCELLED=1]="CANCELLED",Te[Te.UNKNOWN=2]="UNKNOWN",Te[Te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Te[Te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Te[Te.NOT_FOUND=5]="NOT_FOUND",Te[Te.ALREADY_EXISTS=6]="ALREADY_EXISTS",Te[Te.PERMISSION_DENIED=7]="PERMISSION_DENIED",Te[Te.UNAUTHENTICATED=16]="UNAUTHENTICATED",Te[Te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Te[Te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Te[Te.ABORTED=10]="ABORTED",Te[Te.OUT_OF_RANGE=11]="OUT_OF_RANGE",Te[Te.UNIMPLEMENTED=12]="UNIMPLEMENTED",Te[Te.INTERNAL=13]="INTERNAL",Te[Te.UNAVAILABLE=14]="UNAVAILABLE",Te[Te.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function qO(){return new TextEncoder}/**
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
 */const KO=new Ji([4294967295,4294967295],0);function I_(t){const e=qO().encode(t),n=new HT;return n.update(e),new Uint8Array(n.digest())}function S_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Ji([n,r],0),new Ji([i,s],0)]}class zm{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Aa(`Invalid padding: ${n}`);if(r<0)throw new Aa(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Aa(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Aa(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Ji.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Ji.fromNumber(r)));return i.compare(KO)===1&&(i=new Ji([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=I_(e),[r,i]=S_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new zm(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=I_(e),[r,i]=S_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Aa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Fl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ch(ue.min(),i,new Je(Ae),Or(),_e())}}class Fl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Fl(r,n,_e(),_e(),_e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class S1{constructor(e,n){this.targetId=e,this.me=n}}class R1{constructor(e,n,r=xt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class R_{constructor(){this.fe=0,this.ge=P_(),this.pe=xt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=_e(),n=_e(),r=_e();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ae()}}),new Fl(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=P_()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Le(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class GO{constructor(e){this.Le=e,this.Be=new Map,this.ke=Or(),this.qe=A_(),this.Qe=new Je(Ae)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ae()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(ip(s))if(r===0){const o=new ie(s.path);this.Ue(n,o,zt.newNoDocument(o,ue.min()))}else Le(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=cs(r).toUint8Array()}catch(u){if(u instanceof e1)return wo("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new zm(o,i,s)}catch(u){return wo(u instanceof Aa?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&ip(l.target)){const u=new ie(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,zt.newNoDocument(u,e))}s.be&&(n.set(o,s.Ce()),s.ve())}});let r=_e();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Ch(e,n,this.Qe,this.ke,r);return this.ke=Or(),this.qe=A_(),this.Qe=new Je(Ae),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new R_,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Pt(Ae),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||ee("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new R_),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function A_(){return new Je(ie.comparator)}function P_(){return new Je(ie.comparator)}const QO={asc:"ASCENDING",desc:"DESCENDING"},YO={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},XO={and:"AND",or:"OR"};class JO{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ap(t,e){return t.useProto3Json||Th(e)?e:{value:e}}function $c(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function A1(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function ZO(t,e){return $c(t,e.toTimestamp())}function ar(t){return Le(!!t),ue.fromTimestamp(function(n){const r=Ti(n);return new mt(r.seconds,r.nanos)}(t))}function $m(t,e){return lp(t,e).canonicalString()}function lp(t,e){const n=function(i){return new $e(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function P1(t){const e=$e.fromString(t);return Le(D1(e)),e}function up(t,e){return $m(t.databaseId,e.path)}function Nd(t,e){const n=P1(e);if(n.get(1)!==t.databaseId.projectId)throw new X(z.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new X(z.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ie(k1(n))}function C1(t,e){return $m(t.databaseId,e)}function eb(t){const e=P1(t);return e.length===4?$e.emptyPath():k1(e)}function cp(t){return new $e(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function k1(t){return Le(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function C_(t,e,n){return{name:up(t,e),fields:n.value.mapValue.fields}}function tb(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:ae()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(Le(d===void 0||typeof d=="string"),xt.fromBase64String(d||"")):(Le(d===void 0||d instanceof Buffer||d instanceof Uint8Array),xt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const d=c.code===void 0?z.UNKNOWN:I1(c.code);return new X(d,c.message||"")}(o);n=new R1(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Nd(t,r.document.name),s=ar(r.document.updateTime),o=r.document.createTime?ar(r.document.createTime):ue.min(),l=new Jt({mapValue:{fields:r.document.fields}}),u=zt.newFoundDocument(i,s,o,l),c=r.targetIds||[],d=r.removedTargetIds||[];n=new Xu(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Nd(t,r.document),s=r.readTime?ar(r.readTime):ue.min(),o=zt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Xu([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Nd(t,r.document),s=r.removedTargetIds||[];n=new Xu([],s,i,null)}else{if(!("filter"in e))return ae();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new HO(i,s),l=r.targetId;n=new S1(l,o)}}return n}function nb(t,e){let n;if(e instanceof Vl)n={update:C_(t,e.key,e.value)};else if(e instanceof T1)n={delete:up(t,e.key)};else if(e instanceof xi)n={update:C_(t,e.key,e.data),updateMask:hb(e.fieldMask)};else{if(!(e instanceof zO))return ae();n={verify:up(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof jc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof _l)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof wl)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof zc)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw ae()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:ZO(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ae()}(t,e.precondition)),n}function rb(t,e){return t&&t.length>0?(Le(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?ar(i.updateTime):ar(s);return o.isEqual(ue.min())&&(o=ar(s)),new FO(o,i.transformResults||[])}(n,e))):[]}function ib(t,e){return{documents:[C1(t,e.path)]}}function sb(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=C1(t,i);const s=function(c){if(c.length!==0)return N1($n.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:Ns(m.field),direction:lb(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=ap(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function ob(t){let e=eb(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Le(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(f){const m=x1(f);return m instanceof $n&&i1(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(m=>function(R){return new vl(Ds(R.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(f){let m;return m=typeof f=="object"?f.value:f,Th(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(f){const m=!!f.before,E=f.values||[];return new Uc(E,m)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const m=!f.before,E=f.values||[];return new Uc(E,m)}(n.endAt)),RO(e,i,o,s,l,"F",u,c)}function ab(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ae()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function x1(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ds(n.unaryFilter.field);return ct.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ds(n.unaryFilter.field);return ct.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ds(n.unaryFilter.field);return ct.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ds(n.unaryFilter.field);return ct.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ae()}}(t):t.fieldFilter!==void 0?function(n){return ct.create(Ds(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ae()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return $n.create(n.compositeFilter.filters.map(r=>x1(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ae()}}(n.compositeFilter.op))}(t):ae()}function lb(t){return QO[t]}function ub(t){return YO[t]}function cb(t){return XO[t]}function Ns(t){return{fieldPath:t.canonicalString()}}function Ds(t){return Rt.fromServerFormat(t.fieldPath)}function N1(t){return t instanceof ct?function(n){if(n.op==="=="){if(p_(n.value))return{unaryFilter:{field:Ns(n.field),op:"IS_NAN"}};if(f_(n.value))return{unaryFilter:{field:Ns(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(p_(n.value))return{unaryFilter:{field:Ns(n.field),op:"IS_NOT_NAN"}};if(f_(n.value))return{unaryFilter:{field:Ns(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ns(n.field),op:ub(n.op),value:n.value}}}(t):t instanceof $n?function(n){const r=n.getFilters().map(i=>N1(i));return r.length===1?r[0]:{compositeFilter:{op:cb(n.op),filters:r}}}(t):ae()}function hb(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function D1(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e,n,r,i,s=ue.min(),o=ue.min(),l=xt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new ri(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ri(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ri(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ri(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class db{constructor(e){this.ct=e}}function fb(t){const e=ob({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?op(e,e.limit,"L"):e}/**
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
 */class pb{constructor(){this.an=new mb}addToCollectionParentIndex(e,n){return this.an.add(n),B.resolve()}getCollectionParents(e,n){return B.resolve(this.an.getEntries(n))}addFieldIndex(e,n){return B.resolve()}deleteFieldIndex(e,n){return B.resolve()}deleteAllFieldIndexes(e){return B.resolve()}createTargetIndexes(e,n){return B.resolve()}getDocumentsMatchingTarget(e,n){return B.resolve(null)}getIndexType(e,n){return B.resolve(0)}getFieldIndexes(e,n){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,n){return B.resolve(Ei.min())}getMinOffsetFromCollectionGroup(e,n){return B.resolve(Ei.min())}updateCollectionGroup(e,n,r){return B.resolve()}updateIndexEntries(e,n){return B.resolve()}}class mb{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Pt($e.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Pt($e.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static Ln(){return new So(0)}static Bn(){return new So(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gb{constructor(){this.changes=new Fo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,zt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?B.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class yb{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vb{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ba(r.mutation,i,hn.empty(),mt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,_e()).next(()=>r))}getLocalViewOfDocuments(e,n,r=_e()){const i=Ki();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ra();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ki();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,_e()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Or();const o=$a(),l=function(){return $a()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof xi)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),Ba(d.mutation,c,d.mutation.getFieldMask(),mt.now())):o.set(c.key,hn.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var f;return l.set(c,new yb(d,(f=o.get(c))!==null&&f!==void 0?f:null))}),l))}recalculateAndSaveOverlays(e,n){const r=$a();let i=new Je((o,l)=>o-l),s=_e();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||hn.empty();d=l.applyToLocalView(c,d),r.set(u,d);const f=(i.get(l.batchId)||_e()).add(u);i=i.insert(l.batchId,f)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,d=u.value,f=f1();d.forEach(m=>{if(!s.has(m)){const E=w1(n.get(m),r.get(m));E!==null&&f.set(m,E),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return B.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return ie.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):l1(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):B.resolve(Ki());let l=-1,u=s;return o.next(c=>B.forEach(c,(d,f)=>(l<f.largestBatchId&&(l=f.largestBatchId),s.get(d)?B.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,_e())).next(d=>({batchId:l,changes:d1(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ie(n)).next(r=>{let i=Ra();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Ra();return this.indexManager.getCollectionParents(e,s).next(l=>B.forEach(l,u=>{const c=function(f,m){return new Vo(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,zt.newInvalidDocument(d)))});let l=Ra();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&Ba(d.mutation,c,hn.empty(),mt.now()),Rh(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _b{constructor(e){this.serializer=e,this.lr=new Map,this.hr=new Map}getBundleMetadata(e,n){return B.resolve(this.lr.get(n))}saveBundleMetadata(e,n){return this.lr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:ar(i.createTime)}}(n)),B.resolve()}getNamedQuery(e,n){return B.resolve(this.hr.get(n))}saveNamedQuery(e,n){return this.hr.set(n.name,function(i){return{name:i.name,query:fb(i.bundledQuery),readTime:ar(i.readTime)}}(n)),B.resolve()}}/**
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
 */class wb{constructor(){this.overlays=new Je(ie.comparator),this.Pr=new Map}getOverlay(e,n){return B.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ki();return B.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),B.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Pr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Pr.delete(r)),B.resolve()}getOverlaysForCollection(e,n,r){const i=Ki(),s=n.length+1,o=new ie(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return B.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Je((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=Ki(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const l=Ki(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>l.set(c,d)),!(l.size()>=i)););return B.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Pr.get(i.largestBatchId).delete(r.key);this.Pr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new BO(n,r));let s=this.Pr.get(n);s===void 0&&(s=_e(),this.Pr.set(n,s)),this.Pr.set(n,s.add(r.key))}}/**
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
 */class Eb{constructor(){this.sessionToken=xt.EMPTY_BYTE_STRING}getSessionToken(e){return B.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,B.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(){this.Ir=new Pt(gt.Tr),this.Er=new Pt(gt.dr)}isEmpty(){return this.Ir.isEmpty()}addReference(e,n){const r=new gt(e,n);this.Ir=this.Ir.add(r),this.Er=this.Er.add(r)}Ar(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Rr(new gt(e,n))}Vr(e,n){e.forEach(r=>this.removeReference(r,n))}mr(e){const n=new ie(new $e([])),r=new gt(n,e),i=new gt(n,e+1),s=[];return this.Er.forEachInRange([r,i],o=>{this.Rr(o),s.push(o.key)}),s}gr(){this.Ir.forEach(e=>this.Rr(e))}Rr(e){this.Ir=this.Ir.delete(e),this.Er=this.Er.delete(e)}pr(e){const n=new ie(new $e([])),r=new gt(n,e),i=new gt(n,e+1);let s=_e();return this.Er.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new gt(e,0),r=this.Ir.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class gt{constructor(e,n){this.key=e,this.yr=n}static Tr(e,n){return ie.comparator(e.key,n.key)||Ae(e.yr,n.yr)}static dr(e,n){return Ae(e.yr,n.yr)||ie.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tb{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.wr=1,this.Sr=new Pt(gt.Tr)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new $O(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Sr=this.Sr.add(new gt(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return B.resolve(o)}lookupMutationBatch(e,n){return B.resolve(this.br(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Dr(r),s=i<0?0:i;return B.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?-1:this.wr-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new gt(n,0),i=new gt(n,Number.POSITIVE_INFINITY),s=[];return this.Sr.forEachInRange([r,i],o=>{const l=this.br(o.yr);s.push(l)}),B.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Pt(Ae);return n.forEach(i=>{const s=new gt(i,0),o=new gt(i,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([s,o],l=>{r=r.add(l.yr)})}),B.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;ie.isDocumentKey(s)||(s=s.child(""));const o=new gt(new ie(s),0);let l=new Pt(Ae);return this.Sr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.yr)),!0)},o),B.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.br(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Le(this.vr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Sr;return B.forEach(n.mutations,i=>{const s=new gt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Sr=r})}xn(e){}containsKey(e,n){const r=new gt(n,0),i=this.Sr.firstAfterOrEqual(r);return B.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}vr(e,n){return this.Dr(e)}Dr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}br(e){const n=this.Dr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ib{constructor(e){this.Fr=e,this.docs=function(){return new Je(ie.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Fr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return B.resolve(r?r.document.mutableCopy():zt.newInvalidDocument(n))}getEntries(e,n){let r=Or();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():zt.newInvalidDocument(i))}),B.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Or();const o=n.path,l=new ie(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||aO(oO(d),r)<=0||(i.has(d.key)||Rh(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return B.resolve(s)}getAllFromCollectionGroup(e,n,r,i){ae()}Mr(e,n){return B.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Sb(this)}getSize(e){return B.resolve(this.size)}}class Sb extends gb{constructor(e){super(),this.ur=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ur.addEntry(e,i)):this.ur.removeEntry(r)}),B.waitFor(n)}getFromCache(e,n){return this.ur.getEntry(e,n)}getAllFromCache(e,n){return this.ur.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rb{constructor(e){this.persistence=e,this.Or=new Fo(n=>Fm(n),Um),this.lastRemoteSnapshotVersion=ue.min(),this.highestTargetId=0,this.Nr=0,this.Lr=new Bm,this.targetCount=0,this.Br=So.Ln()}forEachTarget(e,n){return this.Or.forEach((r,i)=>n(i)),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.Nr)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Nr&&(this.Nr=n),B.resolve()}Qn(e){this.Or.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Br=new So(n),this.highestTargetId=n),e.sequenceNumber>this.Nr&&(this.Nr=e.sequenceNumber)}addTargetData(e,n){return this.Qn(n),this.targetCount+=1,B.resolve()}updateTargetData(e,n){return this.Qn(n),B.resolve()}removeTargetData(e,n){return this.Or.delete(n.target),this.Lr.mr(n.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Or.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Or.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),B.waitFor(s).next(()=>i)}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,n){const r=this.Or.get(n)||null;return B.resolve(r)}addMatchingKeys(e,n,r){return this.Lr.Ar(n,r),B.resolve()}removeMatchingKeys(e,n,r){this.Lr.Vr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),B.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Lr.mr(n),B.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Lr.pr(n);return B.resolve(r)}containsKey(e,n){return B.resolve(this.Lr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{constructor(e,n){this.kr={},this.overlays={},this.qr=new bm(0),this.Qr=!1,this.Qr=!0,this.Kr=new Eb,this.referenceDelegate=e(this),this.$r=new Rb(this),this.indexManager=new pb,this.remoteDocumentCache=function(i){return new Ib(i)}(r=>this.referenceDelegate.Ur(r)),this.serializer=new db(n),this.Wr=new _b(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new wb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.kr[e.toKey()];return r||(r=new Tb(n,this.referenceDelegate),this.kr[e.toKey()]=r),r}getGlobalsCache(){return this.Kr}getTargetCache(){return this.$r}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Wr}runTransaction(e,n,r){ee("MemoryPersistence","Starting transaction:",e);const i=new Pb(this.qr.next());return this.referenceDelegate.Gr(),r(i).next(s=>this.referenceDelegate.zr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}jr(e,n){return B.or(Object.values(this.kr).map(r=>()=>r.containsKey(e,n)))}}class Pb extends uO{constructor(e){super(),this.currentSequenceNumber=e}}class Hm{constructor(e){this.persistence=e,this.Hr=new Bm,this.Jr=null}static Yr(e){return new Hm(e)}get Zr(){if(this.Jr)return this.Jr;throw ae()}addReference(e,n,r){return this.Hr.addReference(r,n),this.Zr.delete(r.toString()),B.resolve()}removeReference(e,n,r){return this.Hr.removeReference(r,n),this.Zr.add(r.toString()),B.resolve()}markPotentiallyOrphaned(e,n){return this.Zr.add(n.toString()),B.resolve()}removeTarget(e,n){this.Hr.mr(n.targetId).forEach(i=>this.Zr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Zr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Gr(){this.Jr=new Set}zr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.Zr,r=>{const i=ie.fromPath(r);return this.Xr(e,i).next(s=>{s||n.removeEntry(i,ue.min())})}).next(()=>(this.Jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Xr(e,n).next(r=>{r?this.Zr.delete(n.toString()):this.Zr.add(n.toString())})}Ur(e){return 0}Xr(e,n){return B.or([()=>B.resolve(this.Hr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.jr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Ki=r,this.$i=i}static Ui(e,n){let r=_e(),i=_e();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Wm(e,n.fromCache,r,i)}}/**
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
 */class Cb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class kb{constructor(){this.Wi=!1,this.Gi=!1,this.zi=100,this.ji=function(){return yk()?8:cO(kt())>0?6:4}()}initialize(e,n){this.Hi=e,this.indexManager=n,this.Wi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Yi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new Cb;return this.Zi(e,n,o).next(l=>{if(s.result=l,this.Gi)return this.Xi(e,n,o,l.size)})}).next(()=>s.result)}Xi(e,n,r,i){return r.documentReadCount<this.zi?(ma()<=we.DEBUG&&ee("QueryEngine","SDK will not create cache indexes for query:",xs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.zi,"documents"),B.resolve()):(ma()<=we.DEBUG&&ee("QueryEngine","Query:",xs(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ji*i?(ma()<=we.DEBUG&&ee("QueryEngine","The SDK decides to create cache indexes for query:",xs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,sr(n))):B.resolve())}Ji(e,n){if(v_(n))return B.resolve(null);let r=sr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=op(n,null,"F"),r=sr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=_e(...s);return this.Hi.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.es(n,l);return this.ts(n,c,o,u.readTime)?this.Ji(e,op(n,null,"F")):this.ns(e,c,n,u)}))})))}Yi(e,n,r,i){return v_(n)||i.isEqual(ue.min())?B.resolve(null):this.Hi.getDocuments(e,r).next(s=>{const o=this.es(n,s);return this.ts(n,o,r,i)?B.resolve(null):(ma()<=we.DEBUG&&ee("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),xs(n)),this.ns(e,o,n,sO(i,-1)).next(l=>l))})}es(e,n){let r=new Pt(c1(e));return n.forEach((i,s)=>{Rh(e,s)&&(r=r.add(s))}),r}ts(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Zi(e,n,r){return ma()<=we.DEBUG&&ee("QueryEngine","Using full collection scan to execute query:",xs(n)),this.Hi.getDocumentsMatchingQuery(e,n,Ei.min(),r)}ns(e,n,r,i){return this.Hi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(e,n,r,i){this.persistence=e,this.rs=n,this.serializer=i,this.ss=new Je(Ae),this.os=new Fo(s=>Fm(s),Um),this._s=new Map,this.us=e.getRemoteDocumentCache(),this.$r=e.getTargetCache(),this.Wr=e.getBundleCache(),this.cs(r)}cs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new vb(this.us,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.us.setIndexManager(this.indexManager),this.rs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ss))}}function Nb(t,e,n,r){return new xb(t,e,n,r)}async function O1(t,e){const n=ce(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.cs(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=_e();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){l.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({ls:c,removedBatchIds:o,addedBatchIds:l}))})})}function Db(t,e){const n=ce(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.us.newChangeBuffer({trackRemovals:!0});return function(l,u,c,d){const f=c.batch,m=f.keys();let E=B.resolve();return m.forEach(R=>{E=E.next(()=>d.getEntry(u,R)).next(P=>{const O=c.docVersions.get(R);Le(O!==null),P.version.compareTo(O)<0&&(f.applyToRemoteDocument(P,c),P.isValidDocument()&&(P.setReadTime(c.commitVersion),d.addEntry(P)))})}),E.next(()=>l.mutationQueue.removeMutationBatch(u,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=_e();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function b1(t){const e=ce(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.$r.getLastRemoteSnapshotVersion(n))}function Ob(t,e){const n=ce(t),r=e.snapshotVersion;let i=n.ss;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.us.newChangeBuffer({trackRemovals:!0});i=n.ss;const l=[];e.targetChanges.forEach((d,f)=>{const m=i.get(f);if(!m)return;l.push(n.$r.removeMatchingKeys(s,d.removedDocuments,f).next(()=>n.$r.addMatchingKeys(s,d.addedDocuments,f)));let E=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?E=E.withResumeToken(xt.EMPTY_BYTE_STRING,ue.min()).withLastLimboFreeSnapshotVersion(ue.min()):d.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(d.resumeToken,r)),i=i.insert(f,E),function(P,O,T){return P.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(m,E,d)&&l.push(n.$r.updateTargetData(s,E))});let u=Or(),c=_e();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),l.push(bb(s,o,e.documentUpdates).next(d=>{u=d.hs,c=d.Ps})),!r.isEqual(ue.min())){const d=n.$r.getLastRemoteSnapshotVersion(s).next(f=>n.$r.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(d)}return B.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.ss=i,s))}function bb(t,e,n){let r=_e(),i=_e();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Or();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(ue.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):ee("LocalStore","Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{hs:o,Ps:i}})}function Lb(t,e){const n=ce(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Mb(t,e){const n=ce(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.$r.getTargetData(r,e).next(s=>s?(i=s,B.resolve(i)):n.$r.allocateTargetId(r).next(o=>(i=new ri(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.$r.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ss.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ss=n.ss.insert(r.targetId,r),n.os.set(e,r.targetId)),r})}async function hp(t,e,n){const r=ce(t),i=r.ss.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ml(o))throw o;ee("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ss=r.ss.remove(e),r.os.delete(i.target)}function k_(t,e,n){const r=ce(t);let i=ue.min(),s=_e();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const f=ce(u),m=f.os.get(d);return m!==void 0?B.resolve(f.ss.get(m)):f.$r.getTargetData(c,d)}(r,o,sr(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.$r.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.rs.getDocumentsMatchingQuery(o,e,n?i:ue.min(),n?s:_e())).next(l=>(Vb(r,PO(e),l),{documents:l,Is:s})))}function Vb(t,e,n){let r=t._s.get(e)||ue.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t._s.set(e,r)}class x_{constructor(){this.activeTargetIds=OO()}Vs(e){this.activeTargetIds=this.activeTargetIds.add(e)}fs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Rs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Fb{constructor(){this.io=new x_,this.so={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.io.Vs(e),this.so[e]||"not-current"}updateQueryState(e,n,r){this.so[e]=n}removeLocalQueryTarget(e){this.io.fs(e)}isLocalQueryTarget(e){return this.io.activeTargetIds.has(e)}clearQueryState(e){delete this.so[e]}getAllActiveQueryTargets(){return this.io.activeTargetIds}isActiveQueryTarget(e){return this.io.activeTargetIds.has(e)}start(){return this.io=new x_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Ub{oo(e){}shutdown(){}}/**
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
 */class N_{constructor(){this._o=()=>this.ao(),this.uo=()=>this.co(),this.lo=[],this.ho()}oo(e){this.lo.push(e)}shutdown(){window.removeEventListener("online",this._o),window.removeEventListener("offline",this.uo)}ho(){window.addEventListener("online",this._o),window.addEventListener("offline",this.uo)}ao(){ee("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.lo)e(0)}co(){ee("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.lo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ru=null;function Dd(){return Ru===null?Ru=function(){return 268435456+Math.round(2147483648*Math.random())}():Ru++,"0x"+Ru.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zb{constructor(e){this.Po=e.Po,this.Io=e.Io}To(e){this.Eo=e}Ao(e){this.Ro=e}Vo(e){this.mo=e}onMessage(e){this.fo=e}close(){this.Io()}send(e){this.Po(e)}po(){this.Eo()}yo(){this.Ro()}wo(e){this.mo(e)}So(e){this.fo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft="WebChannelConnection";class $b extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.bo=r+"://"+n.host,this.Do=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get vo(){return!1}Fo(n,r,i,s,o){const l=Dd(),u=this.Mo(n,r.toUriEncodedString());ee("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const c={"google-cloud-resource-prefix":this.Do,"x-goog-request-params":this.Co};return this.xo(c,s,o),this.Oo(n,u,c,i).then(d=>(ee("RestConnection",`Received RPC '${n}' ${l}: `,d),d),d=>{throw wo("RestConnection",`RPC '${n}' ${l} failed with error: `,d,"url: ",u,"request:",i),d})}No(n,r,i,s,o,l){return this.Fo(n,r,i,s,o)}xo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Mo}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}Mo(n,r){const i=jb[n];return`${this.bo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Oo(e,n,r,i){const s=Dd();return new Promise((o,l)=>{const u=new WT;u.setWithCredentials(!0),u.listenOnce(KT.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Gu.NO_ERROR:const d=u.getResponseJson();ee(Ft,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case Gu.TIMEOUT:ee(Ft,`RPC '${e}' ${s} timed out`),l(new X(z.DEADLINE_EXCEEDED,"Request time out"));break;case Gu.HTTP_ERROR:const f=u.getStatus();if(ee(Ft,`RPC '${e}' ${s} failed with status:`,f,"response text:",u.getResponseText()),f>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const E=m==null?void 0:m.error;if(E&&E.status&&E.message){const R=function(O){const T=O.toLowerCase().replace(/_/g,"-");return Object.values(z).indexOf(T)>=0?T:z.UNKNOWN}(E.status);l(new X(R,E.message))}else l(new X(z.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new X(z.UNAVAILABLE,"Connection failed."));break;default:ae()}}finally{ee(Ft,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);ee(Ft,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Lo(e,n,r){const i=Dd(),s=[this.bo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=YT(),l=QT(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.xmlHttpFactory=new qT({})),this.xo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");ee(Ft,`Creating RPC '${e}' stream ${i}: ${d}`,u);const f=o.createWebChannel(d,u);let m=!1,E=!1;const R=new zb({Po:O=>{E?ee(Ft,`Not sending because RPC '${e}' stream ${i} is closed:`,O):(m||(ee(Ft,`Opening RPC '${e}' stream ${i} transport.`),f.open(),m=!0),ee(Ft,`RPC '${e}' stream ${i} sending:`,O),f.send(O))},Io:()=>f.close()}),P=(O,T,v)=>{O.listen(T,S=>{try{v(S)}catch(b){setTimeout(()=>{throw b},0)}})};return P(f,Sa.EventType.OPEN,()=>{E||(ee(Ft,`RPC '${e}' stream ${i} transport opened.`),R.po())}),P(f,Sa.EventType.CLOSE,()=>{E||(E=!0,ee(Ft,`RPC '${e}' stream ${i} transport closed`),R.wo())}),P(f,Sa.EventType.ERROR,O=>{E||(E=!0,wo(Ft,`RPC '${e}' stream ${i} transport errored:`,O),R.wo(new X(z.UNAVAILABLE,"The operation could not be completed")))}),P(f,Sa.EventType.MESSAGE,O=>{var T;if(!E){const v=O.data[0];Le(!!v);const S=v,b=S.error||((T=S[0])===null||T===void 0?void 0:T.error);if(b){ee(Ft,`RPC '${e}' stream ${i} received error:`,b);const F=b.status;let C=function(w){const I=st[w];if(I!==void 0)return I1(I)}(F),_=b.message;C===void 0&&(C=z.INTERNAL,_="Unknown error status: "+F+" with message "+b.message),E=!0,R.wo(new X(C,_)),f.close()}else ee(Ft,`RPC '${e}' stream ${i} received:`,v),R.So(v)}}),P(l,GT.STAT_EVENT,O=>{O.stat===ep.PROXY?ee(Ft,`RPC '${e}' stream ${i} detected buffering proxy`):O.stat===ep.NOPROXY&&ee(Ft,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{R.yo()},0),R}}function Od(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kh(t){return new JO(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L1{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ai=e,this.timerId=n,this.Bo=r,this.ko=i,this.qo=s,this.Qo=0,this.Ko=null,this.$o=Date.now(),this.reset()}reset(){this.Qo=0}Uo(){this.Qo=this.qo}Wo(e){this.cancel();const n=Math.floor(this.Qo+this.Go()),r=Math.max(0,Date.now()-this.$o),i=Math.max(0,n-r);i>0&&ee("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Qo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Ko=this.ai.enqueueAfterDelay(this.timerId,i,()=>(this.$o=Date.now(),e())),this.Qo*=this.ko,this.Qo<this.Bo&&(this.Qo=this.Bo),this.Qo>this.qo&&(this.Qo=this.qo)}zo(){this.Ko!==null&&(this.Ko.skipDelay(),this.Ko=null)}cancel(){this.Ko!==null&&(this.Ko.cancel(),this.Ko=null)}Go(){return(Math.random()-.5)*this.Qo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M1{constructor(e,n,r,i,s,o,l,u){this.ai=e,this.jo=r,this.Ho=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Jo=0,this.Yo=null,this.Zo=null,this.stream=null,this.Xo=0,this.e_=new L1(e,n)}t_(){return this.state===1||this.state===5||this.n_()}n_(){return this.state===2||this.state===3}start(){this.Xo=0,this.state!==4?this.auth():this.r_()}async stop(){this.t_()&&await this.close(0)}i_(){this.state=0,this.e_.reset()}s_(){this.n_()&&this.Yo===null&&(this.Yo=this.ai.enqueueAfterDelay(this.jo,6e4,()=>this.o_()))}__(e){this.a_(),this.stream.send(e)}async o_(){if(this.n_())return this.close(0)}a_(){this.Yo&&(this.Yo.cancel(),this.Yo=null)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}async close(e,n){this.a_(),this.u_(),this.e_.cancel(),this.Jo++,e!==4?this.e_.reset():n&&n.code===z.RESOURCE_EXHAUSTED?(Dr(n.toString()),Dr("Using maximum backoff delay to prevent overloading the backend."),this.e_.Uo()):n&&n.code===z.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.c_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Vo(n)}c_(){}auth(){this.state=1;const e=this.l_(this.Jo),n=this.Jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Jo===n&&this.h_(r,i)},r=>{e(()=>{const i=new X(z.UNKNOWN,"Fetching auth token failed: "+r.message);return this.P_(i)})})}h_(e,n){const r=this.l_(this.Jo);this.stream=this.I_(e,n),this.stream.To(()=>{r(()=>this.listener.To())}),this.stream.Ao(()=>{r(()=>(this.state=2,this.Zo=this.ai.enqueueAfterDelay(this.Ho,1e4,()=>(this.n_()&&(this.state=3),Promise.resolve())),this.listener.Ao()))}),this.stream.Vo(i=>{r(()=>this.P_(i))}),this.stream.onMessage(i=>{r(()=>++this.Xo==1?this.T_(i):this.onNext(i))})}r_(){this.state=5,this.e_.Wo(async()=>{this.state=0,this.start()})}P_(e){return ee("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}l_(e){return n=>{this.ai.enqueueAndForget(()=>this.Jo===e?n():(ee("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Bb extends M1{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}I_(e,n){return this.connection.Lo("Listen",e,n)}T_(e){return this.onNext(e)}onNext(e){this.e_.reset();const n=tb(this.serializer,e),r=function(s){if(!("targetChange"in s))return ue.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ue.min():o.readTime?ar(o.readTime):ue.min()}(e);return this.listener.E_(n,r)}d_(e){const n={};n.database=cp(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=ip(u)?{documents:ib(s,u)}:{query:sb(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=A1(s,o.resumeToken);const c=ap(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(ue.min())>0){l.readTime=$c(s,o.snapshotVersion.toTimestamp());const c=ap(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=ab(this.serializer,e);r&&(n.labels=r),this.__(n)}A_(e){const n={};n.database=cp(this.serializer),n.removeTarget=e,this.__(n)}}class Hb extends M1{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get R_(){return this.Xo>0}start(){this.lastStreamToken=void 0,super.start()}c_(){this.R_&&this.V_([])}I_(e,n){return this.connection.Lo("Write",e,n)}T_(e){return Le(!!e.streamToken),this.lastStreamToken=e.streamToken,Le(!e.writeResults||e.writeResults.length===0),this.listener.m_()}onNext(e){Le(!!e.streamToken),this.lastStreamToken=e.streamToken,this.e_.reset();const n=rb(e.writeResults,e.commitTime),r=ar(e.commitTime);return this.listener.f_(r,n)}g_(){const e={};e.database=cp(this.serializer),this.__(e)}V_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>nb(this.serializer,r))};this.__(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wb extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.p_=!1}y_(){if(this.p_)throw new X(z.FAILED_PRECONDITION,"The client has already been terminated.")}Fo(e,n,r,i){return this.y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Fo(e,lp(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new X(z.UNKNOWN,s.toString())})}No(e,n,r,i,s){return this.y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.No(e,lp(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new X(z.UNKNOWN,o.toString())})}terminate(){this.p_=!0,this.connection.terminate()}}class qb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.w_=0,this.S_=null,this.b_=!0}D_(){this.w_===0&&(this.C_("Unknown"),this.S_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.S_=null,this.v_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}F_(e){this.state==="Online"?this.C_("Unknown"):(this.w_++,this.w_>=1&&(this.M_(),this.v_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.M_(),this.w_=0,e==="Online"&&(this.b_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}v_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.b_?(Dr(n),this.b_=!1):ee("OnlineStateTracker",n)}M_(){this.S_!==null&&(this.S_.cancel(),this.S_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kb{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.x_=[],this.O_=new Map,this.N_=new Set,this.L_=[],this.B_=s,this.B_.oo(o=>{r.enqueueAndForget(async()=>{gs(this)&&(ee("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=ce(u);c.N_.add(4),await Ul(c),c.k_.set("Unknown"),c.N_.delete(4),await xh(c)}(this))})}),this.k_=new qb(r,i)}}async function xh(t){if(gs(t))for(const e of t.L_)await e(!0)}async function Ul(t){for(const e of t.L_)await e(!1)}function V1(t,e){const n=ce(t);n.O_.has(e.targetId)||(n.O_.set(e.targetId,e),Qm(n)?Gm(n):Uo(n).n_()&&Km(n,e))}function qm(t,e){const n=ce(t),r=Uo(n);n.O_.delete(e),r.n_()&&F1(n,e),n.O_.size===0&&(r.n_()?r.s_():gs(n)&&n.k_.set("Unknown"))}function Km(t,e){if(t.q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ue.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Uo(t).d_(e)}function F1(t,e){t.q_.xe(e),Uo(t).A_(e)}function Gm(t){t.q_=new GO({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.O_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Uo(t).start(),t.k_.D_()}function Qm(t){return gs(t)&&!Uo(t).t_()&&t.O_.size>0}function gs(t){return ce(t).N_.size===0}function U1(t){t.q_=void 0}async function Gb(t){t.k_.set("Online")}async function Qb(t){t.O_.forEach((e,n)=>{Km(t,e)})}async function Yb(t,e){U1(t),Qm(t)?(t.k_.F_(e),Gm(t)):t.k_.set("Unknown")}async function Xb(t,e,n){if(t.k_.set("Online"),e instanceof R1&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.O_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.O_.delete(l),i.q_.removeTarget(l))}(t,e)}catch(r){ee("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Bc(t,r)}else if(e instanceof Xu?t.q_.Ke(e):e instanceof S1?t.q_.He(e):t.q_.We(e),!n.isEqual(ue.min()))try{const r=await b1(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.q_.rt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.O_.get(c);d&&s.O_.set(c,d.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const d=s.O_.get(u);if(!d)return;s.O_.set(u,d.withResumeToken(xt.EMPTY_BYTE_STRING,d.snapshotVersion)),F1(s,u);const f=new ri(d.target,u,c,d.sequenceNumber);Km(s,f)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){ee("RemoteStore","Failed to raise snapshot:",r),await Bc(t,r)}}async function Bc(t,e,n){if(!Ml(e))throw e;t.N_.add(1),await Ul(t),t.k_.set("Offline"),n||(n=()=>b1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ee("RemoteStore","Retrying IndexedDB access"),await n(),t.N_.delete(1),await xh(t)})}function j1(t,e){return e().catch(n=>Bc(t,n,e))}async function Nh(t){const e=ce(t),n=Ii(e);let r=e.x_.length>0?e.x_[e.x_.length-1].batchId:-1;for(;Jb(e);)try{const i=await Lb(e.localStore,r);if(i===null){e.x_.length===0&&n.s_();break}r=i.batchId,Zb(e,i)}catch(i){await Bc(e,i)}z1(e)&&$1(e)}function Jb(t){return gs(t)&&t.x_.length<10}function Zb(t,e){t.x_.push(e);const n=Ii(t);n.n_()&&n.R_&&n.V_(e.mutations)}function z1(t){return gs(t)&&!Ii(t).t_()&&t.x_.length>0}function $1(t){Ii(t).start()}async function eL(t){Ii(t).g_()}async function tL(t){const e=Ii(t);for(const n of t.x_)e.V_(n.mutations)}async function nL(t,e,n){const r=t.x_.shift(),i=jm.from(r,e,n);await j1(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Nh(t)}async function rL(t,e){e&&Ii(t).R_&&await async function(r,i){if(function(o){return WO(o)&&o!==z.ABORTED}(i.code)){const s=r.x_.shift();Ii(r).i_(),await j1(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Nh(r)}}(t,e),z1(t)&&$1(t)}async function D_(t,e){const n=ce(t);n.asyncQueue.verifyOperationInProgress(),ee("RemoteStore","RemoteStore received new credentials");const r=gs(n);n.N_.add(3),await Ul(n),r&&n.k_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.N_.delete(3),await xh(n)}async function iL(t,e){const n=ce(t);e?(n.N_.delete(2),await xh(n)):e||(n.N_.add(2),await Ul(n),n.k_.set("Unknown"))}function Uo(t){return t.Q_||(t.Q_=function(n,r,i){const s=ce(n);return s.y_(),new Bb(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{To:Gb.bind(null,t),Ao:Qb.bind(null,t),Vo:Yb.bind(null,t),E_:Xb.bind(null,t)}),t.L_.push(async e=>{e?(t.Q_.i_(),Qm(t)?Gm(t):t.k_.set("Unknown")):(await t.Q_.stop(),U1(t))})),t.Q_}function Ii(t){return t.K_||(t.K_=function(n,r,i){const s=ce(n);return s.y_(),new Hb(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{To:()=>Promise.resolve(),Ao:eL.bind(null,t),Vo:rL.bind(null,t),m_:tL.bind(null,t),f_:nL.bind(null,t)}),t.L_.push(async e=>{e?(t.K_.i_(),await Nh(t)):(await t.K_.stop(),t.x_.length>0&&(ee("RemoteStore",`Stopping write stream with ${t.x_.length} pending writes`),t.x_=[]))})),t.K_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new yi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Ym(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new X(z.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Xm(t,e){if(Dr("AsyncQueue",`${e}: ${t}`),Ml(t))return new X(z.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e){this.comparator=e?(n,r)=>e(n,r)||ie.comparator(n.key,r.key):(n,r)=>ie.comparator(n.key,r.key),this.keyedMap=Ra(),this.sortedSet=new Je(this.comparator)}static emptySet(e){return new ro(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ro)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ro;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(){this.U_=new Je(ie.comparator)}track(e){const n=e.doc.key,r=this.U_.get(n);r?e.type!==0&&r.type===3?this.U_=this.U_.insert(n,e):e.type===3&&r.type!==1?this.U_=this.U_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.U_=this.U_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.U_=this.U_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.U_=this.U_.remove(n):e.type===1&&r.type===2?this.U_=this.U_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.U_=this.U_.insert(n,{type:2,doc:e.doc}):ae():this.U_=this.U_.insert(n,e)}W_(){const e=[];return this.U_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ro{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Ro(e,n,ro.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Sh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sL{constructor(){this.G_=void 0,this.z_=[]}j_(){return this.z_.some(e=>e.H_())}}class oL{constructor(){this.queries=b_(),this.onlineState="Unknown",this.J_=new Set}terminate(){(function(n,r){const i=ce(n),s=i.queries;i.queries=b_(),s.forEach((o,l)=>{for(const u of l.z_)u.onError(r)})})(this,new X(z.ABORTED,"Firestore shutting down"))}}function b_(){return new Fo(t=>u1(t),Sh)}async function B1(t,e){const n=ce(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.j_()&&e.H_()&&(r=2):(s=new sL,r=e.H_()?0:1);try{switch(r){case 0:s.G_=await n.onListen(i,!0);break;case 1:s.G_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Xm(o,`Initialization of query '${xs(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.z_.push(e),e.Y_(n.onlineState),s.G_&&e.Z_(s.G_)&&Jm(n)}async function H1(t,e){const n=ce(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.z_.indexOf(e);o>=0&&(s.z_.splice(o,1),s.z_.length===0?i=e.H_()?0:1:!s.j_()&&e.H_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function aL(t,e){const n=ce(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.z_)l.Z_(i)&&(r=!0);o.G_=i}}r&&Jm(n)}function lL(t,e,n){const r=ce(t),i=r.queries.get(e);if(i)for(const s of i.z_)s.onError(n);r.queries.delete(e)}function Jm(t){t.J_.forEach(e=>{e.next()})}var dp,L_;(L_=dp||(dp={})).X_="default",L_.Cache="cache";class W1{constructor(e,n,r){this.query=e,this.ea=n,this.ta=!1,this.na=null,this.onlineState="Unknown",this.options=r||{}}Z_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ro(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ta?this.ra(e)&&(this.ea.next(e),n=!0):this.ia(e,this.onlineState)&&(this.sa(e),n=!0),this.na=e,n}onError(e){this.ea.error(e)}Y_(e){this.onlineState=e;let n=!1;return this.na&&!this.ta&&this.ia(this.na,e)&&(this.sa(this.na),n=!0),n}ia(e,n){if(!e.fromCache||!this.H_())return!0;const r=n!=="Offline";return(!this.options.oa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ra(e){if(e.docChanges.length>0)return!0;const n=this.na&&this.na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}sa(e){e=Ro.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ta=!0,this.ea.next(e)}H_(){return this.options.source!==dp.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q1{constructor(e){this.key=e}}class K1{constructor(e){this.key=e}}class uL{constructor(e,n){this.query=e,this.Ia=n,this.Ta=null,this.hasCachedResults=!1,this.current=!1,this.Ea=_e(),this.mutatedKeys=_e(),this.da=c1(e),this.Aa=new ro(this.da)}get Ra(){return this.Ia}Va(e,n){const r=n?n.ma:new O_,i=n?n.Aa:this.Aa;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,f)=>{const m=i.get(d),E=Rh(this.query,f)?f:null,R=!!m&&this.mutatedKeys.has(m.key),P=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let O=!1;m&&E?m.data.isEqual(E.data)?R!==P&&(r.track({type:3,doc:E}),O=!0):this.fa(m,E)||(r.track({type:2,doc:E}),O=!0,(u&&this.da(E,u)>0||c&&this.da(E,c)<0)&&(l=!0)):!m&&E?(r.track({type:0,doc:E}),O=!0):m&&!E&&(r.track({type:1,doc:m}),O=!0,(u||c)&&(l=!0)),O&&(E?(o=o.add(E),s=P?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{Aa:o,ma:r,ts:l,mutatedKeys:s}}fa(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Aa;this.Aa=e.Aa,this.mutatedKeys=e.mutatedKeys;const o=e.ma.W_();o.sort((d,f)=>function(E,R){const P=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ae()}};return P(E)-P(R)}(d.type,f.type)||this.da(d.doc,f.doc)),this.ga(r),i=i!=null&&i;const l=n&&!i?this.pa():[],u=this.Ea.size===0&&this.current&&!i?1:0,c=u!==this.Ta;return this.Ta=u,o.length!==0||c?{snapshot:new Ro(this.query,e.Aa,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),ya:l}:{ya:l}}Y_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Aa:this.Aa,ma:new O_,mutatedKeys:this.mutatedKeys,ts:!1},!1)):{ya:[]}}wa(e){return!this.Ia.has(e)&&!!this.Aa.has(e)&&!this.Aa.get(e).hasLocalMutations}ga(e){e&&(e.addedDocuments.forEach(n=>this.Ia=this.Ia.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ia=this.Ia.delete(n)),this.current=e.current)}pa(){if(!this.current)return[];const e=this.Ea;this.Ea=_e(),this.Aa.forEach(r=>{this.wa(r.key)&&(this.Ea=this.Ea.add(r.key))});const n=[];return e.forEach(r=>{this.Ea.has(r)||n.push(new K1(r))}),this.Ea.forEach(r=>{e.has(r)||n.push(new q1(r))}),n}Sa(e){this.Ia=e.Is,this.Ea=_e();const n=this.Va(e.documents);return this.applyChanges(n,!0)}ba(){return Ro.fromInitialDocuments(this.query,this.Aa,this.mutatedKeys,this.Ta===0,this.hasCachedResults)}}class cL{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class hL{constructor(e){this.key=e,this.Da=!1}}class dL{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.va=new Fo(l=>u1(l),Sh),this.Fa=new Map,this.Ma=new Set,this.xa=new Je(ie.comparator),this.Oa=new Map,this.Na=new Bm,this.La={},this.Ba=new Map,this.ka=So.Bn(),this.onlineState="Unknown",this.qa=void 0}get isPrimaryClient(){return this.qa===!0}}async function fL(t,e,n=!0){const r=Z1(t);let i;const s=r.va.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ba()):i=await G1(r,e,n,!0),i}async function pL(t,e){const n=Z1(t);await G1(n,e,!0,!1)}async function G1(t,e,n,r){const i=await Mb(t.localStore,sr(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let l;return r&&(l=await mL(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&V1(t.remoteStore,i),l}async function mL(t,e,n,r,i){t.Qa=(f,m,E)=>async function(P,O,T,v){let S=O.view.Va(T);S.ts&&(S=await k_(P.localStore,O.query,!1).then(({documents:_})=>O.view.Va(_,S)));const b=v&&v.targetChanges.get(O.targetId),F=v&&v.targetMismatches.get(O.targetId)!=null,C=O.view.applyChanges(S,P.isPrimaryClient,b,F);return V_(P,O.targetId,C.ya),C.snapshot}(t,f,m,E);const s=await k_(t.localStore,e,!0),o=new uL(e,s.Is),l=o.Va(s.documents),u=Fl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);V_(t,n,c.ya);const d=new cL(e,n,o);return t.va.set(e,d),t.Fa.has(n)?t.Fa.get(n).push(e):t.Fa.set(n,[e]),c.snapshot}async function gL(t,e,n){const r=ce(t),i=r.va.get(e),s=r.Fa.get(i.targetId);if(s.length>1)return r.Fa.set(i.targetId,s.filter(o=>!Sh(o,e))),void r.va.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await hp(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&qm(r.remoteStore,i.targetId),fp(r,i.targetId)}).catch(Ll)):(fp(r,i.targetId),await hp(r.localStore,i.targetId,!0))}async function yL(t,e){const n=ce(t),r=n.va.get(e),i=n.Fa.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),qm(n.remoteStore,r.targetId))}async function vL(t,e,n){const r=RL(t);try{const i=await function(o,l){const u=ce(o),c=mt.now(),d=l.reduce((E,R)=>E.add(R.key),_e());let f,m;return u.persistence.runTransaction("Locally write mutations","readwrite",E=>{let R=Or(),P=_e();return u.us.getEntries(E,d).next(O=>{R=O,R.forEach((T,v)=>{v.isValidDocument()||(P=P.add(T))})}).next(()=>u.localDocuments.getOverlayedDocuments(E,R)).next(O=>{f=O;const T=[];for(const v of l){const S=jO(v,f.get(v.key).overlayedDocument);S!=null&&T.push(new xi(v.key,S,t1(S.value.mapValue),or.exists(!0)))}return u.mutationQueue.addMutationBatch(E,c,T,l)}).next(O=>{m=O;const T=O.applyToLocalDocumentSet(f,P);return u.documentOverlayCache.saveOverlays(E,O.batchId,T)})}).then(()=>({batchId:m.batchId,changes:d1(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.La[o.currentUser.toKey()];c||(c=new Je(Ae)),c=c.insert(l,u),o.La[o.currentUser.toKey()]=c}(r,i.batchId,n),await jl(r,i.changes),await Nh(r.remoteStore)}catch(i){const s=Xm(i,"Failed to persist write");n.reject(s)}}async function Q1(t,e){const n=ce(t);try{const r=await Ob(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Oa.get(s);o&&(Le(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Da=!0:i.modifiedDocuments.size>0?Le(o.Da):i.removedDocuments.size>0&&(Le(o.Da),o.Da=!1))}),await jl(n,r,e)}catch(r){await Ll(r)}}function M_(t,e,n){const r=ce(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.va.forEach((s,o)=>{const l=o.view.Y_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=ce(o);u.onlineState=l;let c=!1;u.queries.forEach((d,f)=>{for(const m of f.z_)m.Y_(l)&&(c=!0)}),c&&Jm(u)}(r.eventManager,e),i.length&&r.Ca.E_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function _L(t,e,n){const r=ce(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Oa.get(e),s=i&&i.key;if(s){let o=new Je(ie.comparator);o=o.insert(s,zt.newNoDocument(s,ue.min()));const l=_e().add(s),u=new Ch(ue.min(),new Map,new Je(Ae),o,l);await Q1(r,u),r.xa=r.xa.remove(s),r.Oa.delete(e),Zm(r)}else await hp(r.localStore,e,!1).then(()=>fp(r,e,n)).catch(Ll)}async function wL(t,e){const n=ce(t),r=e.batch.batchId;try{const i=await Db(n.localStore,e);X1(n,r,null),Y1(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await jl(n,i)}catch(i){await Ll(i)}}async function EL(t,e,n){const r=ce(t);try{const i=await function(o,l){const u=ce(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,l).next(f=>(Le(f!==null),d=f.keys(),u.mutationQueue.removeMutationBatch(c,f))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);X1(r,e,n),Y1(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await jl(r,i)}catch(i){await Ll(i)}}function Y1(t,e){(t.Ba.get(e)||[]).forEach(n=>{n.resolve()}),t.Ba.delete(e)}function X1(t,e,n){const r=ce(t);let i=r.La[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.La[r.currentUser.toKey()]=i}}function fp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Fa.get(e))t.va.delete(r),n&&t.Ca.Ka(r,n);t.Fa.delete(e),t.isPrimaryClient&&t.Na.mr(e).forEach(r=>{t.Na.containsKey(r)||J1(t,r)})}function J1(t,e){t.Ma.delete(e.path.canonicalString());const n=t.xa.get(e);n!==null&&(qm(t.remoteStore,n),t.xa=t.xa.remove(e),t.Oa.delete(n),Zm(t))}function V_(t,e,n){for(const r of n)r instanceof q1?(t.Na.addReference(r.key,e),TL(t,r)):r instanceof K1?(ee("SyncEngine","Document no longer in limbo: "+r.key),t.Na.removeReference(r.key,e),t.Na.containsKey(r.key)||J1(t,r.key)):ae()}function TL(t,e){const n=e.key,r=n.path.canonicalString();t.xa.get(n)||t.Ma.has(r)||(ee("SyncEngine","New document in limbo: "+n),t.Ma.add(r),Zm(t))}function Zm(t){for(;t.Ma.size>0&&t.xa.size<t.maxConcurrentLimboResolutions;){const e=t.Ma.values().next().value;t.Ma.delete(e);const n=new ie($e.fromString(e)),r=t.ka.next();t.Oa.set(r,new hL(n)),t.xa=t.xa.insert(n,r),V1(t.remoteStore,new ri(sr(Ih(n.path)),r,"TargetPurposeLimboResolution",bm.oe))}}async function jl(t,e,n){const r=ce(t),i=[],s=[],o=[];r.va.isEmpty()||(r.va.forEach((l,u)=>{o.push(r.Qa(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const f=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(c){i.push(c);const f=Wm.Ui(u.targetId,c);s.push(f)}}))}),await Promise.all(o),r.Ca.E_(i),await async function(u,c){const d=ce(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>B.forEach(c,m=>B.forEach(m.Ki,E=>d.persistence.referenceDelegate.addReference(f,m.targetId,E)).next(()=>B.forEach(m.$i,E=>d.persistence.referenceDelegate.removeReference(f,m.targetId,E)))))}catch(f){if(!Ml(f))throw f;ee("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const m=f.targetId;if(!f.fromCache){const E=d.ss.get(m),R=E.snapshotVersion,P=E.withLastLimboFreeSnapshotVersion(R);d.ss=d.ss.insert(m,P)}}}(r.localStore,s))}async function IL(t,e){const n=ce(t);if(!n.currentUser.isEqual(e)){ee("SyncEngine","User change. New user:",e.toKey());const r=await O1(n.localStore,e);n.currentUser=e,function(s,o){s.Ba.forEach(l=>{l.forEach(u=>{u.reject(new X(z.CANCELLED,o))})}),s.Ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await jl(n,r.ls)}}function SL(t,e){const n=ce(t),r=n.Oa.get(e);if(r&&r.Da)return _e().add(r.key);{let i=_e();const s=n.Fa.get(e);if(!s)return i;for(const o of s){const l=n.va.get(o);i=i.unionWith(l.view.Ra)}return i}}function Z1(t){const e=ce(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Q1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=SL.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=_L.bind(null,e),e.Ca.E_=aL.bind(null,e.eventManager),e.Ca.Ka=lL.bind(null,e.eventManager),e}function RL(t){const e=ce(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=wL.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=EL.bind(null,e),e}class F_{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=kh(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return Nb(this.persistence,new kb,e.initialUser,this.serializer)}createPersistence(e){return new Ab(Hm.Yr,this.serializer)}createSharedClientState(e){return new Fb}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class AL{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>M_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=IL.bind(null,this.syncEngine),await iL(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new oL}()}createDatastore(e){const n=kh(e.databaseInfo.databaseId),r=function(s){return new $b(s)}(e.databaseInfo);return function(s,o,l,u){return new Wb(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new Kb(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>M_(this.syncEngine,n,0),function(){return N_.D()?new N_:new Ub}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,d){const f=new dL(i,s,o,l,u,c);return d&&(f.qa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=ce(i);ee("RemoteStore","RemoteStore shutting down."),s.N_.add(5),await Ul(s),s.B_.shutdown(),s.k_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class eI{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Wa(this.observer.next,e)}error(e){this.observer.error?this.Wa(this.observer.error,e):Dr("Uncaught Error in snapshot listener:",e.toString())}Ga(){this.muted=!0}Wa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PL{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ut.UNAUTHENTICATED,this.clientId=JT.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{ee("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(ee("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new X(z.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new yi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Xm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function bd(t,e){t.asyncQueue.verifyOperationInProgress(),ee("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await O1(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function U_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await kL(t);ee("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>D_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>D_(e.remoteStore,i)),t._onlineComponents=e}function CL(t){return t.name==="FirebaseError"?t.code===z.FAILED_PRECONDITION||t.code===z.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function kL(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ee("FirestoreClient","Using user provided OfflineComponentProvider");try{await bd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!CL(n))throw n;wo("Error using user provided cache. Falling back to memory cache: "+n),await bd(t,new F_)}}else ee("FirestoreClient","Using default OfflineComponentProvider"),await bd(t,new F_);return t._offlineComponents}async function tI(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ee("FirestoreClient","Using user provided OnlineComponentProvider"),await U_(t,t._uninitializedComponentsProvider._online)):(ee("FirestoreClient","Using default OnlineComponentProvider"),await U_(t,new AL))),t._onlineComponents}function xL(t){return tI(t).then(e=>e.syncEngine)}async function pp(t){const e=await tI(t),n=e.eventManager;return n.onListen=fL.bind(null,e.syncEngine),n.onUnlisten=gL.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=pL.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=yL.bind(null,e.syncEngine),n}function NL(t,e,n={}){const r=new yi;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new eI({next:m=>{o.enqueueAndForget(()=>H1(s,f));const E=m.docs.has(l);!E&&m.fromCache?c.reject(new X(z.UNAVAILABLE,"Failed to get document because the client is offline.")):E&&m.fromCache&&u&&u.source==="server"?c.reject(new X(z.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new W1(Ih(l.path),d,{includeMetadataChanges:!0,oa:!0});return B1(s,f)}(await pp(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function nI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j_=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rI(t,e,n){if(!n)throw new X(z.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function DL(t,e,n,r){if(e===!0&&r===!0)throw new X(z.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function z_(t){if(!ie.isDocumentKey(t))throw new X(z.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function $_(t){if(ie.isDocumentKey(t))throw new X(z.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Dh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ae()}function lr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new X(z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Dh(t);throw new X(z.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new X(z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new X(z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}DL("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=nI((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new X(z.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new X(z.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new X(z.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Oh{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new B_({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new X(z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new X(z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new B_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new YD;switch(r.type){case"firstParty":return new eO(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new X(z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=j_.get(n);r&&(ee("ComponentProvider","Removing Datastore"),j_.delete(n),r.terminate())}(this),Promise.resolve()}}function OL(t,e,n,r={}){var i;const s=(t=lr(t,Oh))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&wo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=Ut.MOCK_USER;else{l=hk(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new X(z.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Ut(c)}t._authCredentials=new XD(new XT(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ys(this.firestore,e,this._query)}}class Bt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new vi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Bt(this.firestore,e,this._key)}}class vi extends ys{constructor(e,n,r){super(e,n,Ih(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Bt(this.firestore,null,new ie(e))}withConverter(e){return new vi(this.firestore,e,this._path)}}function Ld(t,e,...n){if(t=wt(t),rI("collection","path",e),t instanceof Oh){const r=$e.fromString(e,...n);return $_(r),new vi(t,null,r)}{if(!(t instanceof Bt||t instanceof vi))throw new X(z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child($e.fromString(e,...n));return $_(r),new vi(t.firestore,null,r)}}function iI(t,e,...n){if(t=wt(t),arguments.length===1&&(e=JT.newId()),rI("doc","path",e),t instanceof Oh){const r=$e.fromString(e,...n);return z_(r),new Bt(t,null,new ie(r))}{if(!(t instanceof Bt||t instanceof vi))throw new X(z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child($e.fromString(e,...n));return z_(r),new Bt(t.firestore,t instanceof vi?t.converter:null,new ie(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bL{constructor(){this._u=Promise.resolve(),this.au=[],this.uu=!1,this.cu=[],this.lu=null,this.hu=!1,this.Pu=!1,this.Iu=[],this.e_=new L1(this,"async_queue_retry"),this.Tu=()=>{const n=Od();n&&ee("AsyncQueue","Visibility state changed to "+n.visibilityState),this.e_.zo()};const e=Od();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Tu)}get isShuttingDown(){return this.uu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Eu(),this.du(e)}enterRestrictedMode(e){if(!this.uu){this.uu=!0,this.Pu=e||!1;const n=Od();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Tu)}}enqueue(e){if(this.Eu(),this.uu)return new Promise(()=>{});const n=new yi;return this.du(()=>this.uu&&this.Pu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.au.push(e),this.Au()))}async Au(){if(this.au.length!==0){try{await this.au[0](),this.au.shift(),this.e_.reset()}catch(e){if(!Ml(e))throw e;ee("AsyncQueue","Operation failed with retryable error: "+e)}this.au.length>0&&this.e_.Wo(()=>this.Au())}}du(e){const n=this._u.then(()=>(this.hu=!0,e().catch(r=>{this.lu=r,this.hu=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Dr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.hu=!1,r))));return this._u=n,n}enqueueAfterDelay(e,n,r){this.Eu(),this.Iu.indexOf(e)>-1&&(n=0);const i=Ym.createAndSchedule(this,e,n,r,s=>this.Ru(s));return this.cu.push(i),i}Eu(){this.lu&&ae()}verifyOperationInProgress(){}async Vu(){let e;do e=this._u,await e;while(e!==this._u)}mu(e){for(const n of this.cu)if(n.timerId===e)return!0;return!1}fu(e){return this.Vu().then(()=>{this.cu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.cu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Vu()})}gu(e){this.Iu.push(e)}Ru(e){const n=this.cu.indexOf(e);this.cu.splice(n,1)}}function H_(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Ao extends Oh{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new bL}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||sI(this),this._firestoreClient.terminate()}}function LL(t,e){const n=typeof t=="object"?t:lT(),r=typeof t=="string"?t:"(default)",i=Sm(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=uk("firestore");s&&OL(i,...s)}return i}function eg(t){return t._firestoreClient||sI(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function sI(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,c,d){return new fO(l,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,nI(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new PL(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Po(xt.fromBase64String(e))}catch(n){throw new X(z.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Po(xt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new X(z.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Rt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new X(z.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new X(z.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ae(this._lat,e._lat)||Ae(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ML=/^__.*__$/;class VL{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new xi(e,this.data,this.fieldMask,n,this.fieldTransforms):new Vl(e,this.data,n,this.fieldTransforms)}}class oI{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new xi(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function aI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ae()}}class rg{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.pu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get yu(){return this.settings.yu}wu(e){return new rg(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.wu({path:r,bu:!1});return i.Du(e),i}Cu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.wu({path:r,bu:!1});return i.pu(),i}vu(e){return this.wu({path:void 0,bu:!0})}Fu(e){return Hc(e,this.settings.methodName,this.settings.Mu||!1,this.path,this.settings.xu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Du(this.path.get(e))}Du(e){if(e.length===0)throw this.Fu("Document fields must not be empty");if(aI(this.yu)&&ML.test(e))throw this.Fu('Document fields cannot begin and end with "__"')}}class FL{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||kh(e)}Ou(e,n,r,i=!1){return new rg({yu:e,methodName:n,xu:r,path:Rt.emptyPath(),bu:!1,Mu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ig(t){const e=t._freezeSettings(),n=kh(t._databaseId);return new FL(t._databaseId,!!e.ignoreUndefinedProperties,n)}function UL(t,e,n,r,i,s={}){const o=t.Ou(s.merge||s.mergeFields?2:0,e,n,i);sg("Data must be an object, but it was:",o,r);const l=lI(r,o);let u,c;if(s.merge)u=new hn(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const f of s.mergeFields){const m=mp(e,f,n);if(!o.contains(m))throw new X(z.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);cI(d,m)||d.push(m)}u=new hn(d),c=o.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,c=o.fieldTransforms;return new VL(new Jt(l),u,c)}class Lh extends tg{_toFieldTransform(e){if(e.yu!==2)throw e.yu===1?e.Fu(`${this._methodName}() can only appear at the top level of your update data`):e.Fu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Lh}}function jL(t,e,n,r){const i=t.Ou(1,e,n);sg("Data must be an object, but it was:",i,r);const s=[],o=Jt.empty();ms(r,(u,c)=>{const d=og(e,u,n);c=wt(c);const f=i.Cu(d);if(c instanceof Lh)s.push(d);else{const m=zl(c,f);m!=null&&(s.push(d),o.set(d,m))}});const l=new hn(s);return new oI(o,l,i.fieldTransforms)}function zL(t,e,n,r,i,s){const o=t.Ou(1,e,n),l=[mp(e,r,n)],u=[i];if(s.length%2!=0)throw new X(z.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)l.push(mp(e,s[m])),u.push(s[m+1]);const c=[],d=Jt.empty();for(let m=l.length-1;m>=0;--m)if(!cI(c,l[m])){const E=l[m];let R=u[m];R=wt(R);const P=o.Cu(E);if(R instanceof Lh)c.push(E);else{const O=zl(R,P);O!=null&&(c.push(E),d.set(E,O))}}const f=new hn(c);return new oI(d,f,o.fieldTransforms)}function $L(t,e,n,r=!1){return zl(n,t.Ou(r?4:3,e))}function zl(t,e){if(uI(t=wt(t)))return sg("Unsupported field value:",e,t),lI(t,e);if(t instanceof tg)return function(r,i){if(!aI(i.yu))throw i.Fu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Fu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.bu&&e.yu!==4)throw e.Fu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=zl(l,i.vu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=wt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return bO(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=mt.fromDate(r);return{timestampValue:$c(i.serializer,s)}}if(r instanceof mt){const s=new mt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:$c(i.serializer,s)}}if(r instanceof ng)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Po)return{bytesValue:A1(i.serializer,r._byteString)};if(r instanceof Bt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Fu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:$m(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Fu(`Unsupported field value: ${Dh(r)}`)}(t,e)}function lI(t,e){const n={};return ZT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ms(t,(r,i)=>{const s=zl(i,e.Su(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function uI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof mt||t instanceof ng||t instanceof Po||t instanceof Bt||t instanceof tg)}function sg(t,e,n){if(!uI(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Dh(n);throw r==="an object"?e.Fu(t+" a custom object"):e.Fu(t+" "+r)}}function mp(t,e,n){if((e=wt(e))instanceof bh)return e._internalPath;if(typeof e=="string")return og(t,e);throw Hc("Field path arguments must be of type string or ",t,!1,void 0,n)}const BL=new RegExp("[~\\*/\\[\\]]");function og(t,e,n){if(e.search(BL)>=0)throw Hc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new bh(...e.split("."))._internalPath}catch{throw Hc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Hc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new X(z.INVALID_ARGUMENT,l+t+u)}function cI(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hI{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Bt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new HL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ag("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class HL extends hI{data(){return super.data()}}function ag(t,e){return typeof e=="string"?og(t,e):e instanceof bh?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WL(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new X(z.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class lg{}class dI extends lg{}function Md(t,e,...n){let r=[];e instanceof lg&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof cg).length,l=s.filter(u=>u instanceof ug).length;if(o>1||o>0&&l>0)throw new X(z.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class ug extends dI{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new ug(e,n,r)}_apply(e){const n=this._parse(e);return fI(e._query,n),new ys(e.firestore,e.converter,sp(e._query,n))}_parse(e){const n=ig(e.firestore);return function(s,o,l,u,c,d,f){let m;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new X(z.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){q_(f,d);const E=[];for(const R of f)E.push(W_(u,s,R));m={arrayValue:{values:E}}}else m=W_(u,s,f)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||q_(f,d),m=$L(l,o,f,d==="in"||d==="not-in");return ct.create(c,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class cg extends lg{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new cg(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:$n.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)fI(o,u),o=sp(o,u)}(e._query,n),new ys(e.firestore,e.converter,sp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class hg extends dI{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new hg(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new X(z.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new X(z.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new vl(s,o)}(e._query,this._field,this._direction);return new ys(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Vo(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function qL(t,e="asc"){const n=e,r=ag("orderBy",t);return hg._create(r,n)}function W_(t,e,n){if(typeof(n=wt(n))=="string"){if(n==="")throw new X(z.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!l1(e)&&n.indexOf("/")!==-1)throw new X(z.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child($e.fromString(n));if(!ie.isDocumentKey(r))throw new X(z.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return d_(t,new ie(r))}if(n instanceof Bt)return d_(t,n._key);throw new X(z.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Dh(n)}.`)}function q_(t,e){if(!Array.isArray(t)||t.length===0)throw new X(z.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function fI(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new X(z.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new X(z.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class KL{convertValue(e,n="none"){switch(hs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return at(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(cs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ae()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ms(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new ng(at(e.latitude),at(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Mm(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ml(e));default:return null}}convertTimestamp(e){const n=Ti(e);return new mt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=$e.fromString(e);Le(D1(r));const i=new gl(r.get(1),r.get(3)),s=new ie(r.popFirst(5));return i.isEqual(n)||Dr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GL(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class pI extends hI{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ju(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ag("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ju extends pI{data(e={}){return super.data(e)}}class QL{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Pa(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ju(this._firestore,this._userDataWriter,r.key,r,new Pa(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new X(z.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new Ju(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Pa(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Ju(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Pa(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:YL(l.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function YL(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ae()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XL(t){t=lr(t,Bt);const e=lr(t.firestore,Ao);return NL(eg(e),t._key).then(n=>yI(e,t,n))}class mI extends KL{constructor(e){super(),this.firestore=e}convertBytes(e){return new Po(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Bt(this.firestore,null,n)}}function JL(t,e,n){t=lr(t,Bt);const r=lr(t.firestore,Ao),i=GL(t.converter,e);return gI(r,[UL(ig(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,or.none())])}function Vd(t,e,n,...r){t=lr(t,Bt);const i=lr(t.firestore,Ao),s=ig(i);let o;return o=typeof(e=wt(e))=="string"||e instanceof bh?zL(s,"updateDoc",t._key,e,n,r):jL(s,"updateDoc",t._key,e),gI(i,[o.toMutation(t._key,or.exists(!0))])}function Fd(t,...e){var n,r,i;t=wt(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||H_(e[o])||(s=e[o],o++);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(H_(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let u,c,d;if(t instanceof Bt)c=lr(t.firestore,Ao),d=Ih(t._key.path),u={next:f=>{e[o]&&e[o](yI(c,t,f))},error:e[o+1],complete:e[o+2]};else{const f=lr(t,ys);c=lr(f.firestore,Ao),d=f._query;const m=new mI(c);u={next:E=>{e[o]&&e[o](new QL(c,m,f,E))},error:e[o+1],complete:e[o+2]},WL(t._query)}return function(m,E,R,P){const O=new eI(P),T=new W1(E,O,R);return m.asyncQueue.enqueueAndForget(async()=>B1(await pp(m),T)),()=>{O.Ga(),m.asyncQueue.enqueueAndForget(async()=>H1(await pp(m),T))}}(eg(c),d,l,u)}function gI(t,e){return function(r,i){const s=new yi;return r.asyncQueue.enqueueAndForget(async()=>vL(await xL(r),i,s)),s.promise}(eg(t),e)}function yI(t,e,n){const r=n.docs.get(e._key),i=new mI(t);return new pI(t,i,e._key,r,new Pa(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){Mo=i})(bo),vo(new ss("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Ao(new JD(r.getProvider("auth-internal")),new nO(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new X(z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new gl(c.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),gi(l_,"4.6.5",e),gi(l_,"4.6.5","esm2017")})();const ZL={apiKey:"AIzaSyAoB7jPca5UoD--vYdTE43HDZgqrwmDJBI",authDomain:"icecreamfactory-fbe1b.firebaseapp.com",projectId:"icecreamfactory-fbe1b",storageBucket:"icecreamfactory-fbe1b.appspot.com",messagingSenderId:"33392143586",appId:"1:33392143586:web:d8d0bec618cd4c377602bb"},vI=aT(ZL),ii=GD(vI),Ca=LL(vI);function eM({children:t}){return ii.currentUser===null?W.jsx(CP,{to:"/login"}):W.jsx(W.Fragment,{children:t})}const tM=Me.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,nM=Me.div`
  background-color: rgba(255, 255, 255, 1);
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: -1;
  opacity: 0;
  transition: all 0.1s linear;
  display: flex;
  align-items: center;
  justify-content: center;
  @media all and (max-width: 1250px) {
    font-size: 1.6em;
  }
  span {
    font-size: 30px;
    font-weight: 900;
    color: #333;
    opacity: 0;
    transition: all 0.1s linear;
    transition-delay: 0.5s;
  }
  &.active {
    opacity: 1;
    z-index: 10;
    span {
      opacity: 1;
    }
  }
`,rM=Me.header`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 24px;
`,iM=Me.button`
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
`,sM=Me.h1`
  margin-top: 30px;
  font-size: 3.2em;
  font-weight: 900;
  color: #ff3636;
  letter-spacing: -2px;
  text-align: center;
  @media all and (max-width: 1250px) {
    margin-top: 18px;
    font-size: 2em;
  }
`,oM=Me.div`
  width: 100%;
  max-width: 454px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 90px;
  gap: 16px;
  @media all and (max-width: 1250px) {
    max-width: 360px;
    margin-top: 30px;
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
    > div {
      width: 100%;
      max-width: 164px;
      aspect-ratio: 140 /83;
      &.one {
        z-index: 2;
      }
      &.two {
        transform: translateY(-50px);
        z-index: 1;
      }
      &.three {
        transform: translateY(-100px);
        z-index: 0;
      }
      &.strawberry {
        background: url(/img/ico_icecream_strawberry.svg) no-repeat center /
          cover;
      }
      &.choco {
        background: url(/img/ico_icecream_choco.svg) no-repeat center / cover;
      }
      &.mint {
        background: url(/img/ico_icecream_mint.svg) no-repeat center / cover;
      }
    }
  }
`,aM=Me.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`,lM=Me.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  .object {
    > div {
      &.one {
        z-index: 0;
        transform: translateY(-100px);
      }
    }
    &.second {
      > div {
        &.one {
          z-index: 1;
          transform: translateY(-50px);
        }
        &.two {
          transform: translateY(-100px);
          z-index: 0;
        }
      }
    }
    &.third {
      > div {
        &.one {
          transform: translateY(0);
          z-index: 2;
        }
      }
    }
  }
`,uM=Me.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 470px;
  position: fixed;
  bottom: 44px;
  left: 50%;
  transform: translateX(-50%);
  gap: 20px;
  padding: 0 16px;
  > div {
    display: flex;
    justify-content: center;
    gap: 10px;
    width: 100%;
  }
  span {
    font-size: 14px;
    color: #333;
    font-weight: 900;
  }
`,cM=Me.button`
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
`,hM=Me.div`
  background: #fff;
  border-radius: 36px;
  padding: 36px;
  width: 100%;
  max-width: 316px;
  position: fixed;
  top: 90px;
  left: 24px;
  @media all and (max-width: 1250px) {
    position: static;
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    max-width: none;
    width: calc(100% - 32px);
    gap: 20px;
    padding: 20px;
    border-radius: 20px;
  }
  .first-user {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
    @media all and (max-width: 1250px) {
      margin-bottom: 0;
      width: 50%;
    }
    .title {
      font-size: 20px;
      font-weight: bold;
      color: #444;
      @media all and (max-width: 1250px) {
        font-size: 16px;
      }
    }
    .name {
      display: block;
      margin-top: 18px;
      font-size: 36px;
      font-weight: bold;
      color: #ff3636;
      @media all and (max-width: 1250px) {
        margin-top: 12px;
        font-size: 30px;
      }
    }
  }
`,dM=Me.div`
  display: flex;
  flex-direction: column;
  @media all and (max-width: 1250px) {
    width: 50%;
  }
  .index {
    width: 100%;
    padding-bottom: 6px;
    border-bottom: 1px solid #ccc;
    margin-bottom: 12px;
  }
`,fM=Me.div`
  height: 120px;
  overflow-y: auto;
  @media all and (max-width: 1250px) {
    height: 60px;
  }
`,pM=Me.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  span {
    font-size: 14px;
    color: #333;
  }
`,Ud=Me.div`
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
`,mM=Me.span`
  font-size: 16px;
  display: inline-block;
  font-weight: 900;
  margin-right: 10px;
`,K_=iI(Ca,"icecream","Mtu2EMz2fp8FKkItKQm5");function gM(){const t=ii.currentUser.uid,e=ii.currentUser.displayName,n=Pl(),[r,i]=U.useState(!0),[s,o]=U.useState(!1),[l,u]=U.useState(!0),[c,d]=U.useState(!1),[f,m]=U.useState([]),[E,R]=U.useState([]),[P,O]=U.useState([]),[T,v]=U.useState([]),[S,b]=U.useState(""),[F,C]=U.useState([]),_=async()=>{i(!0);try{const K=Md(Ld(Ca,"icecream"));await Fd(K,$=>{const Y=$.docs.map(Z=>Z.data());R(Y[0].recipe),b(Y[0].lastUser)})}catch(K){console.log(K)}finally{i(!1)}},g=()=>{try{const K=Md(Ld(Ca,"rank"));Fd(K,$=>{$.docChanges().forEach(Y=>{Y.type==="modified"&&(d(!0),setTimeout(()=>{d(!1)},1500))})})}catch(K){console.log(K)}},w=K=>{const $=[K,...P];O($)},I=()=>{o(!0);try{if(E.length!==P.length)return!1;for(let K=0;K<E.length;K++)if(E[K]!==P[K])return!1;it()}catch(K){console.log(K)}finally{O([]),fe(),A(),o(!1)}},k=K=>{let $=K.slice();for(let Y=$.length-1;Y>0;Y--){const Z=Math.floor(Math.random()*(Y+1));[$[Y],$[Z]]=[$[Z],$[Y]]}return $},N=()=>{const K=k([0,1,2]);C(K),console.log(K)},A=async()=>{i(!0);const K=k([0,1,2]);v(K);try{await Vd(K_,{recipe:K})}catch($){console.log($)}finally{i(!1)}},fe=async()=>{u(!0);try{const K=Md(Ld(Ca,"rank"),qL("score","desc"));await Fd(K,$=>{const Y=$.docs.map(Z=>Z.data());m(Y)})}catch(K){console.log(K)}finally{u(!1)}},it=async()=>{if(!ii.currentUser)return;const K=iI(Ca,"rank",t),$=await XL(K);if(await Vd(K_,{lastUser:e}),$.exists()){const Z=($.data().score||0)+1;await Vd(K,{score:Z})}else await JL(K,{score:1,userName:e||"Unknown User"})},Yt=async()=>{try{await ii.signOut(),n("/login")}catch(K){console.error("Error signing out: ",K)}};return U.useEffect(()=>{g()}),U.useEffect(()=>{N(),_(),fe()},[]),U.useEffect(()=>{P.length===3&&(I(),N())},[P]),W.jsx(W.Fragment,{children:W.jsxs(tM,{children:[W.jsx(nM,{className:c?"active":"",children:W.jsxs("span",{children:[S," 성공!!"]})}),W.jsxs(rM,{children:[W.jsx(mM,{children:e}),W.jsx(iM,{onClick:()=>{Yt()},children:"로그아웃"})]}),W.jsx(sM,{children:"ICECREAM FACTORY"}),W.jsx(oM,{children:r?W.jsx(Ud,{children:"Loading..."}):W.jsxs(W.Fragment,{children:[W.jsx(aM,{children:W.jsxs(W.Fragment,{children:[W.jsx("p",{className:"title",children:"만들어주세요!"}),W.jsx("div",{className:"object",children:E.map((K,$)=>W.jsx("div",{className:`${K===0?"strawberry":K===1?"choco":"mint"} ${$===0?"one":$===1?"two":"three"}`},$))})]})}),W.jsx(lM,{children:s?W.jsx(Ud,{children:"Loading.."}):W.jsxs(W.Fragment,{children:[W.jsx("p",{className:"title",children:"나의 조합"}),W.jsx("div",{className:`${P.length===2?"second":P.length===3?"third":""} object`,children:P.map((K,$)=>W.jsx("div",{className:`${K===0?"strawberry":K===1?"choco":"mint"} ${$===0?"one":$===1?"two":"three"}`},$))})]})})]})}),W.jsxs(uM,{children:[W.jsx("div",{children:F.map(K=>W.jsx(cM,{className:K===0?"strawberry":K===1?"choco":"mint",onClick:()=>w(K)},K))}),W.jsx("span",{children:"SELECT ME!!!"})]}),W.jsxs(hM,{children:[W.jsxs("div",{className:"first-user",children:[W.jsx("p",{className:"title",children:"최고의 실력자"}),W.jsx("span",{className:"name",children:f.length>0?f[0].userName:"1등 없음!"})]}),l?W.jsx(Ud,{children:"Loading..."}):W.jsxs(dM,{children:[W.jsx("div",{className:"index",children:"기회가 있는 자"}),W.jsx(fM,{children:f.slice(1).map((K,$)=>W.jsxs(pM,{children:[W.jsx("span",{children:K.userName}),W.jsx("span",{children:K.score})]},$))})]})]})]})})}function yM(){return W.jsx("div",{children:"hello"})}const _I=Me.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 8em;
  width: 100%;
`,wI=Me.div`
  width: 100%;
  max-width: 480px;
  background-color: #fff;
  border-radius: 40px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.16);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px 24px;
`,EI=Me.form`
  width: 100%;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,TI=Me.p`
  font-size: 40px;
  font-weight: 900;
  color: #ff3636;
  letter-spacing: -2px;
  margin-bottom: 120px;
`,II=Me.h1`
  font-size: 24px;
  color: #333;
`,Gi=Me.input`
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
`,SI=Me.span`
  margin-top: 6px;
  font-weight: 600;
  color: tomato;
`,RI=Me.span`
  margin-top: 20px;
  font-size: 12px;
`;function vM(){const t=Pl(),[e,n]=U.useState(!1),[r,i]=U.useState(""),[s,o]=U.useState(""),[l,u]=U.useState(""),c=f=>{const{target:{name:m,value:E}}=f;m==="email"?i(E):m==="password"&&o(E)},d=async f=>{if(f.preventDefault(),u(""),!(e||r===""||s===""))try{n(!0),await DN(ii,r,s),t("/")}catch(m){m instanceof Bn&&(console.log(m.code,m.message),u(m.message))}finally{n(!1)}};return W.jsxs(_I,{children:[W.jsx(TI,{children:"ICECREAM FACTORY"}),W.jsxs(wI,{children:[W.jsx(II,{children:"로그인이 필요해요"}),W.jsxs(EI,{onSubmit:d,children:[W.jsx(Gi,{onChange:c,name:"email",value:r,placeholder:"이메일",type:"email",required:!0}),W.jsx(Gi,{onChange:c,name:"password",value:s,placeholder:"비밀번호",type:"password",required:!0}),W.jsx(Gi,{className:"createBtn",type:"submit",value:e?"Loading...":"로그인"})]}),l!==""?W.jsx(SI,{children:l}):null,W.jsxs(RI,{children:["계정이 없나요? ",W.jsx(SE,{to:"/create-account",children:"회원가입하기 →"})]})]})]})}function _M(){const t=Pl(),[e,n]=U.useState(!1),[r,i]=U.useState(""),[s,o]=U.useState(""),[l,u]=U.useState(""),[c,d]=U.useState(""),f=E=>{const{target:{name:R,value:P}}=E;R==="name"?i(P):R==="email"?o(P):R==="password"&&u(P)},m=async E=>{if(E.preventDefault(),d(""),!(e||r===""||s===""||l===""))try{n(!0);const R=await NN(ii,s,l);console.log(R.user),await bN(R.user,{displayName:r}),t("/")}catch(R){R instanceof Bn&&(console.log(R.code,R.message),d(R.message))}finally{n(!1)}};return W.jsxs(_I,{children:[W.jsx(TI,{children:"ICECREAM FACTORY"}),W.jsxs(wI,{children:[W.jsx(II,{children:"회원가입"}),W.jsxs(EI,{onSubmit:m,children:[W.jsx(Gi,{onChange:f,name:"name",value:r,placeholder:"닉네임을 입력하세요",type:"text",required:!0}),W.jsx(Gi,{onChange:f,name:"email",value:s,placeholder:"이메일",type:"email",required:!0}),W.jsx(Gi,{onChange:f,name:"password",value:l,placeholder:"비밀번호",type:"password",required:!0}),W.jsx(Gi,{className:"createBtn",type:"submit",value:e?"Loading...":"가입하기"})]}),c!==""?W.jsx(SI,{children:c}):null,W.jsxs(RI,{children:["이미 회원이신가요? ",W.jsx(SE,{to:"/login",children:"로그인하기 →"})]})]})]})}const wM=VP([{path:"/",element:W.jsx(eM,{children:W.jsx(tk,{})}),children:[{path:"",element:W.jsx(gM,{})},{path:"profile",element:W.jsx(yM,{})}]},{path:"/login",element:W.jsx(vM,{})},{path:"/create-account",element:W.jsx(_M,{})}]),EM=YE`
  ${JE}
  * {
    box-sizing: border-box;
  }
  body {
    background: url(/img/login_bg.png) no-repeat center / cover;
    background-color: #FFF7D8;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    height: 100vh;
  }
  h1 {
    font-size: 34px;
    font-weight: 600;
    margin-bottom: 24px;
  }
`;function TM(){const[t,e]=U.useState(!0),n=async()=>{await ii.authStateReady(),e(!1)};return U.useEffect(()=>{n()},[]),W.jsxs(W.Fragment,{children:[W.jsx(EM,{}),t?W.jsx(ek,{}):W.jsx(qP,{router:wM})]})}jd.createRoot(document.getElementById("root")).render(W.jsx(Mn.StrictMode,{children:W.jsx(TM,{})}));
