(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(s){if(s.ep)return;s.ep=!0;const l=t(s);fetch(s.href,l)}})();function Vm(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Mu={exports:{}},ho={},Su={exports:{}},Ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gp;function b0(){if(gp)return Ke;gp=1;var o=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),v=Symbol.iterator;function y(R){return R===null||typeof R!="object"?null:(R=v&&R[v]||R["@@iterator"],typeof R=="function"?R:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,E={};function b(R,q,ge){this.props=R,this.context=q,this.refs=E,this.updater=ge||x}b.prototype.isReactComponent={},b.prototype.setState=function(R,q){if(typeof R!="object"&&typeof R!="function"&&R!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,R,q,"setState")},b.prototype.forceUpdate=function(R){this.updater.enqueueForceUpdate(this,R,"forceUpdate")};function M(){}M.prototype=b.prototype;function _(R,q,ge){this.props=R,this.context=q,this.refs=E,this.updater=ge||x}var I=_.prototype=new M;I.constructor=_,w(I,b.prototype),I.isPureReactComponent=!0;var U=Array.isArray,z=Object.prototype.hasOwnProperty,T={current:null},W={key:!0,ref:!0,__self:!0,__source:!0};function ee(R,q,ge){var Z,De={},Ce=null,Le=null;if(q!=null)for(Z in q.ref!==void 0&&(Le=q.ref),q.key!==void 0&&(Ce=""+q.key),q)z.call(q,Z)&&!W.hasOwnProperty(Z)&&(De[Z]=q[Z]);var we=arguments.length-2;if(we===1)De.children=ge;else if(1<we){for(var ze=Array(we),Oe=0;Oe<we;Oe++)ze[Oe]=arguments[Oe+2];De.children=ze}if(R&&R.defaultProps)for(Z in we=R.defaultProps,we)De[Z]===void 0&&(De[Z]=we[Z]);return{$$typeof:o,type:R,key:Ce,ref:Le,props:De,_owner:T.current}}function ne(R,q){return{$$typeof:o,type:R.type,key:q,ref:R.ref,props:R.props,_owner:R._owner}}function oe(R){return typeof R=="object"&&R!==null&&R.$$typeof===o}function he(R){var q={"=":"=0",":":"=2"};return"$"+R.replace(/[=:]/g,function(ge){return q[ge]})}var ie=/\/+/g;function F(R,q){return typeof R=="object"&&R!==null&&R.key!=null?he(""+R.key):q.toString(36)}function V(R,q,ge,Z,De){var Ce=typeof R;(Ce==="undefined"||Ce==="boolean")&&(R=null);var Le=!1;if(R===null)Le=!0;else switch(Ce){case"string":case"number":Le=!0;break;case"object":switch(R.$$typeof){case o:case e:Le=!0}}if(Le)return Le=R,De=De(Le),R=Z===""?"."+F(Le,0):Z,U(De)?(ge="",R!=null&&(ge=R.replace(ie,"$&/")+"/"),V(De,q,ge,"",function(Oe){return Oe})):De!=null&&(oe(De)&&(De=ne(De,ge+(!De.key||Le&&Le.key===De.key?"":(""+De.key).replace(ie,"$&/")+"/")+R)),q.push(De)),1;if(Le=0,Z=Z===""?".":Z+":",U(R))for(var we=0;we<R.length;we++){Ce=R[we];var ze=Z+F(Ce,we);Le+=V(Ce,q,ge,ze,De)}else if(ze=y(R),typeof ze=="function")for(R=ze.call(R),we=0;!(Ce=R.next()).done;)Ce=Ce.value,ze=Z+F(Ce,we++),Le+=V(Ce,q,ge,ze,De);else if(Ce==="object")throw q=String(R),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(R).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.");return Le}function G(R,q,ge){if(R==null)return R;var Z=[],De=0;return V(R,Z,"","",function(Ce){return q.call(ge,Ce,De++)}),Z}function B(R){if(R._status===-1){var q=R._result;q=q(),q.then(function(ge){(R._status===0||R._status===-1)&&(R._status=1,R._result=ge)},function(ge){(R._status===0||R._status===-1)&&(R._status=2,R._result=ge)}),R._status===-1&&(R._status=0,R._result=q)}if(R._status===1)return R._result.default;throw R._result}var se={current:null},Y={transition:null},K={ReactCurrentDispatcher:se,ReactCurrentBatchConfig:Y,ReactCurrentOwner:T};function te(){throw Error("act(...) is not supported in production builds of React.")}return Ke.Children={map:G,forEach:function(R,q,ge){G(R,function(){q.apply(this,arguments)},ge)},count:function(R){var q=0;return G(R,function(){q++}),q},toArray:function(R){return G(R,function(q){return q})||[]},only:function(R){if(!oe(R))throw Error("React.Children.only expected to receive a single React element child.");return R}},Ke.Component=b,Ke.Fragment=t,Ke.Profiler=s,Ke.PureComponent=_,Ke.StrictMode=r,Ke.Suspense=h,Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K,Ke.act=te,Ke.cloneElement=function(R,q,ge){if(R==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+R+".");var Z=w({},R.props),De=R.key,Ce=R.ref,Le=R._owner;if(q!=null){if(q.ref!==void 0&&(Ce=q.ref,Le=T.current),q.key!==void 0&&(De=""+q.key),R.type&&R.type.defaultProps)var we=R.type.defaultProps;for(ze in q)z.call(q,ze)&&!W.hasOwnProperty(ze)&&(Z[ze]=q[ze]===void 0&&we!==void 0?we[ze]:q[ze])}var ze=arguments.length-2;if(ze===1)Z.children=ge;else if(1<ze){we=Array(ze);for(var Oe=0;Oe<ze;Oe++)we[Oe]=arguments[Oe+2];Z.children=we}return{$$typeof:o,type:R.type,key:De,ref:Ce,props:Z,_owner:Le}},Ke.createContext=function(R){return R={$$typeof:c,_currentValue:R,_currentValue2:R,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},R.Provider={$$typeof:l,_context:R},R.Consumer=R},Ke.createElement=ee,Ke.createFactory=function(R){var q=ee.bind(null,R);return q.type=R,q},Ke.createRef=function(){return{current:null}},Ke.forwardRef=function(R){return{$$typeof:d,render:R}},Ke.isValidElement=oe,Ke.lazy=function(R){return{$$typeof:m,_payload:{_status:-1,_result:R},_init:B}},Ke.memo=function(R,q){return{$$typeof:f,type:R,compare:q===void 0?null:q}},Ke.startTransition=function(R){var q=Y.transition;Y.transition={};try{R()}finally{Y.transition=q}},Ke.unstable_act=te,Ke.useCallback=function(R,q){return se.current.useCallback(R,q)},Ke.useContext=function(R){return se.current.useContext(R)},Ke.useDebugValue=function(){},Ke.useDeferredValue=function(R){return se.current.useDeferredValue(R)},Ke.useEffect=function(R,q){return se.current.useEffect(R,q)},Ke.useId=function(){return se.current.useId()},Ke.useImperativeHandle=function(R,q,ge){return se.current.useImperativeHandle(R,q,ge)},Ke.useInsertionEffect=function(R,q){return se.current.useInsertionEffect(R,q)},Ke.useLayoutEffect=function(R,q){return se.current.useLayoutEffect(R,q)},Ke.useMemo=function(R,q){return se.current.useMemo(R,q)},Ke.useReducer=function(R,q,ge){return se.current.useReducer(R,q,ge)},Ke.useRef=function(R){return se.current.useRef(R)},Ke.useState=function(R){return se.current.useState(R)},Ke.useSyncExternalStore=function(R,q,ge){return se.current.useSyncExternalStore(R,q,ge)},Ke.useTransition=function(){return se.current.useTransition()},Ke.version="18.3.1",Ke}var vp;function xd(){return vp||(vp=1,Su.exports=b0()),Su.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yp;function T0(){if(yp)return ho;yp=1;var o=xd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(d,h,f){var m,v={},y=null,x=null;f!==void 0&&(y=""+f),h.key!==void 0&&(y=""+h.key),h.ref!==void 0&&(x=h.ref);for(m in h)r.call(h,m)&&!l.hasOwnProperty(m)&&(v[m]=h[m]);if(d&&d.defaultProps)for(m in h=d.defaultProps,h)v[m]===void 0&&(v[m]=h[m]);return{$$typeof:e,type:d,key:y,ref:x,props:v,_owner:s.current}}return ho.Fragment=t,ho.jsx=c,ho.jsxs=c,ho}var xp;function L0(){return xp||(xp=1,Mu.exports=T0()),Mu.exports}var Q=L0(),Sl=xd();const A0=Vm(Sl);var qa={},Eu={exports:{}},pn={},bu={exports:{}},Tu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _p;function C0(){return _p||(_p=1,(function(o){function e(Y,K){var te=Y.length;Y.push(K);e:for(;0<te;){var R=te-1>>>1,q=Y[R];if(0<s(q,K))Y[R]=K,Y[te]=q,te=R;else break e}}function t(Y){return Y.length===0?null:Y[0]}function r(Y){if(Y.length===0)return null;var K=Y[0],te=Y.pop();if(te!==K){Y[0]=te;e:for(var R=0,q=Y.length,ge=q>>>1;R<ge;){var Z=2*(R+1)-1,De=Y[Z],Ce=Z+1,Le=Y[Ce];if(0>s(De,te))Ce<q&&0>s(Le,De)?(Y[R]=Le,Y[Ce]=te,R=Ce):(Y[R]=De,Y[Z]=te,R=Z);else if(Ce<q&&0>s(Le,te))Y[R]=Le,Y[Ce]=te,R=Ce;else break e}}return K}function s(Y,K){var te=Y.sortIndex-K.sortIndex;return te!==0?te:Y.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;o.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();o.unstable_now=function(){return c.now()-d}}var h=[],f=[],m=1,v=null,y=3,x=!1,w=!1,E=!1,b=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(Y){for(var K=t(f);K!==null;){if(K.callback===null)r(f);else if(K.startTime<=Y)r(f),K.sortIndex=K.expirationTime,e(h,K);else break;K=t(f)}}function U(Y){if(E=!1,I(Y),!w)if(t(h)!==null)w=!0,B(z);else{var K=t(f);K!==null&&se(U,K.startTime-Y)}}function z(Y,K){w=!1,E&&(E=!1,M(ee),ee=-1),x=!0;var te=y;try{for(I(K),v=t(h);v!==null&&(!(v.expirationTime>K)||Y&&!he());){var R=v.callback;if(typeof R=="function"){v.callback=null,y=v.priorityLevel;var q=R(v.expirationTime<=K);K=o.unstable_now(),typeof q=="function"?v.callback=q:v===t(h)&&r(h),I(K)}else r(h);v=t(h)}if(v!==null)var ge=!0;else{var Z=t(f);Z!==null&&se(U,Z.startTime-K),ge=!1}return ge}finally{v=null,y=te,x=!1}}var T=!1,W=null,ee=-1,ne=5,oe=-1;function he(){return!(o.unstable_now()-oe<ne)}function ie(){if(W!==null){var Y=o.unstable_now();oe=Y;var K=!0;try{K=W(!0,Y)}finally{K?F():(T=!1,W=null)}}else T=!1}var F;if(typeof _=="function")F=function(){_(ie)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,G=V.port2;V.port1.onmessage=ie,F=function(){G.postMessage(null)}}else F=function(){b(ie,0)};function B(Y){W=Y,T||(T=!0,F())}function se(Y,K){ee=b(function(){Y(o.unstable_now())},K)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(Y){Y.callback=null},o.unstable_continueExecution=function(){w||x||(w=!0,B(z))},o.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ne=0<Y?Math.floor(1e3/Y):5},o.unstable_getCurrentPriorityLevel=function(){return y},o.unstable_getFirstCallbackNode=function(){return t(h)},o.unstable_next=function(Y){switch(y){case 1:case 2:case 3:var K=3;break;default:K=y}var te=y;y=K;try{return Y()}finally{y=te}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(Y,K){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var te=y;y=Y;try{return K()}finally{y=te}},o.unstable_scheduleCallback=function(Y,K,te){var R=o.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?R+te:R):te=R,Y){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=te+q,Y={id:m++,callback:K,priorityLevel:Y,startTime:te,expirationTime:q,sortIndex:-1},te>R?(Y.sortIndex=te,e(f,Y),t(h)===null&&Y===t(f)&&(E?(M(ee),ee=-1):E=!0,se(U,te-R))):(Y.sortIndex=q,e(h,Y),w||x||(w=!0,B(z))),Y},o.unstable_shouldYield=he,o.unstable_wrapCallback=function(Y){var K=y;return function(){var te=y;y=K;try{return Y.apply(this,arguments)}finally{y=te}}}})(Tu)),Tu}var wp;function R0(){return wp||(wp=1,bu.exports=C0()),bu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mp;function P0(){if(Mp)return pn;Mp=1;var o=xd(),e=R0();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,s={};function l(n,i){c(n,i),c(n+"Capture",i)}function c(n,i){for(s[n]=i,n=0;n<i.length;n++)r.add(i[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},v={};function y(n){return h.call(v,n)?!0:h.call(m,n)?!1:f.test(n)?v[n]=!0:(m[n]=!0,!1)}function x(n,i,a,u){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function w(n,i,a,u){if(i===null||typeof i>"u"||x(n,i,a,u))return!0;if(u)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function E(n,i,a,u,p,g,S){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=p,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=g,this.removeEmptyString=S}var b={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){b[n]=new E(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];b[i]=new E(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){b[n]=new E(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){b[n]=new E(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){b[n]=new E(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){b[n]=new E(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){b[n]=new E(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){b[n]=new E(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){b[n]=new E(n,5,!1,n.toLowerCase(),null,!1,!1)});var M=/[\-:]([a-z])/g;function _(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(M,_);b[i]=new E(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(M,_);b[i]=new E(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(M,_);b[i]=new E(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){b[n]=new E(n,1,!1,n.toLowerCase(),null,!1,!1)}),b.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){b[n]=new E(n,1,!1,n.toLowerCase(),null,!0,!0)});function I(n,i,a,u){var p=b.hasOwnProperty(i)?b[i]:null;(p!==null?p.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,a,p,u)&&(a=null),u||p===null?y(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):p.mustUseProperty?n[p.propertyName]=a===null?p.type===3?!1:"":a:(i=p.attributeName,u=p.attributeNamespace,a===null?n.removeAttribute(i):(p=p.type,a=p===3||p===4&&a===!0?"":""+a,u?n.setAttributeNS(u,i,a):n.setAttribute(i,a))))}var U=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,z=Symbol.for("react.element"),T=Symbol.for("react.portal"),W=Symbol.for("react.fragment"),ee=Symbol.for("react.strict_mode"),ne=Symbol.for("react.profiler"),oe=Symbol.for("react.provider"),he=Symbol.for("react.context"),ie=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),G=Symbol.for("react.memo"),B=Symbol.for("react.lazy"),se=Symbol.for("react.offscreen"),Y=Symbol.iterator;function K(n){return n===null||typeof n!="object"?null:(n=Y&&n[Y]||n["@@iterator"],typeof n=="function"?n:null)}var te=Object.assign,R;function q(n){if(R===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);R=i&&i[1]||""}return`
`+R+n}var ge=!1;function Z(n,i){if(!n||ge)return"";ge=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(J){var u=J}Reflect.construct(n,[],i)}else{try{i.call()}catch(J){u=J}n.call(i.prototype)}else{try{throw Error()}catch(J){u=J}n()}}catch(J){if(J&&u&&typeof J.stack=="string"){for(var p=J.stack.split(`
`),g=u.stack.split(`
`),S=p.length-1,C=g.length-1;1<=S&&0<=C&&p[S]!==g[C];)C--;for(;1<=S&&0<=C;S--,C--)if(p[S]!==g[C]){if(S!==1||C!==1)do if(S--,C--,0>C||p[S]!==g[C]){var D=`
`+p[S].replace(" at new "," at ");return n.displayName&&D.includes("<anonymous>")&&(D=D.replace("<anonymous>",n.displayName)),D}while(1<=S&&0<=C);break}}}finally{ge=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?q(n):""}function De(n){switch(n.tag){case 5:return q(n.type);case 16:return q("Lazy");case 13:return q("Suspense");case 19:return q("SuspenseList");case 0:case 2:case 15:return n=Z(n.type,!1),n;case 11:return n=Z(n.type.render,!1),n;case 1:return n=Z(n.type,!0),n;default:return""}}function Ce(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case W:return"Fragment";case T:return"Portal";case ne:return"Profiler";case ee:return"StrictMode";case F:return"Suspense";case V:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case he:return(n.displayName||"Context")+".Consumer";case oe:return(n._context.displayName||"Context")+".Provider";case ie:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case G:return i=n.displayName||null,i!==null?i:Ce(n.type)||"Memo";case B:i=n._payload,n=n._init;try{return Ce(n(i))}catch{}}return null}function Le(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ce(i);case 8:return i===ee?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function we(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ze(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Oe(n){var i=ze(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var p=a.get,g=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return p.call(this)},set:function(S){u=""+S,g.call(this,S)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return u},setValue:function(S){u=""+S},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Qe(n){n._valueTracker||(n._valueTracker=Oe(n))}function me(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),u="";return n&&(u=ze(n)?n.checked?"true":"false":n.value),n=u,n!==a?(i.setValue(n),!0):!1}function ye(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Me(n,i){var a=i.checked;return te({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Fe(n,i){var a=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;a=we(i.value!=null?i.value:a),n._wrapperState={initialChecked:u,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Te(n,i){i=i.checked,i!=null&&I(n,"checked",i,!1)}function P(n,i){Te(n,i);var a=we(i.value),u=i.type;if(a!=null)u==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?ae(n,i.type,a):i.hasOwnProperty("defaultValue")&&ae(n,i.type,we(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function A(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function ae(n,i,a){(i!=="number"||ye(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var le=Array.isArray;function Se(n,i,a,u){if(n=n.options,i){i={};for(var p=0;p<a.length;p++)i["$"+a[p]]=!0;for(a=0;a<n.length;a++)p=i.hasOwnProperty("$"+n[a].value),n[a].selected!==p&&(n[a].selected=p),p&&u&&(n[a].defaultSelected=!0)}else{for(a=""+we(a),i=null,p=0;p<n.length;p++){if(n[p].value===a){n[p].selected=!0,u&&(n[p].defaultSelected=!0);return}i!==null||n[p].disabled||(i=n[p])}i!==null&&(i.selected=!0)}}function Ie(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return te({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function nt(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(le(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:we(a)}}function Xe(n,i){var a=we(i.value),u=we(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),u!=null&&(n.defaultValue=""+u)}function O(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function ve(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _e(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?ve(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Be,ue=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,u,p){MSApp.execUnsafeLocalFunction(function(){return n(i,a,u,p)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Be=Be||document.createElement("div"),Be.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Be.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Ve(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var it={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Tt=["Webkit","ms","Moz","O"];Object.keys(it).forEach(function(n){Tt.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),it[i]=it[n]})});function Jn(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||it.hasOwnProperty(n)&&it[n]?(""+i).trim():i+"px"}function yt(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var u=a.indexOf("--")===0,p=Jn(a,i[a],u);a==="float"&&(a="cssFloat"),u?n.setProperty(a,p):n[a]=p}}var Dn=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function nn(n,i){if(i){if(Dn[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ls(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sr=null;function Er(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var In=null,ci=null,ui=null;function As(n){if(n=Js(n)){if(typeof In!="function")throw Error(t(280));var i=n.stateNode;i&&(i=la(i),In(n.stateNode,n.type,i))}}function br(n){ci?ui?ui.push(n):ui=[n]:ci=n}function Cs(){if(ci){var n=ci,i=ui;if(ui=ci=null,As(n),i)for(n=0;n<i.length;n++)As(i[n])}}function Rs(n,i){return n(i)}function Ho(){}var Ps=!1;function L(n,i,a){if(Ps)return n(i,a);Ps=!0;try{return Rs(n,i,a)}finally{Ps=!1,(ci!==null||ui!==null)&&(Ho(),Cs())}}function $(n,i){var a=n.stateNode;if(a===null)return null;var u=la(a);if(u===null)return null;a=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var X=!1;if(d)try{var re={};Object.defineProperty(re,"passive",{get:function(){X=!0}}),window.addEventListener("test",re,re),window.removeEventListener("test",re,re)}catch{X=!1}function Ee(n,i,a,u,p,g,S,C,D){var J=Array.prototype.slice.call(arguments,3);try{i.apply(a,J)}catch(de){this.onError(de)}}var $e=!1,je=null,qe=!1,at=null,Je={onError:function(n){$e=!0,je=n}};function rt(n,i,a,u,p,g,S,C,D){$e=!1,je=null,Ee.apply(Je,arguments)}function Ze(n,i,a,u,p,g,S,C,D){if(rt.apply(this,arguments),$e){if($e){var J=je;$e=!1,je=null}else throw Error(t(198));qe||(qe=!0,at=J)}}function et(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function gn(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Ft(n){if(et(n)!==n)throw Error(t(188))}function di(n){var i=n.alternate;if(!i){if(i=et(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,u=i;;){var p=a.return;if(p===null)break;var g=p.alternate;if(g===null){if(u=p.return,u!==null){a=u;continue}break}if(p.child===g.child){for(g=p.child;g;){if(g===a)return Ft(p),n;if(g===u)return Ft(p),i;g=g.sibling}throw Error(t(188))}if(a.return!==u.return)a=p,u=g;else{for(var S=!1,C=p.child;C;){if(C===a){S=!0,a=p,u=g;break}if(C===u){S=!0,u=p,a=g;break}C=C.sibling}if(!S){for(C=g.child;C;){if(C===a){S=!0,a=g,u=p;break}if(C===u){S=!0,u=g,a=p;break}C=C.sibling}if(!S)throw Error(t(189))}}if(a.alternate!==u)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function Lt(n){return n=di(n),n!==null?Qn(n):null}function Qn(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Qn(n);if(i!==null)return i;n=n.sibling}return null}var wt=e.unstable_scheduleCallback,Tr=e.unstable_cancelCallback,Zt=e.unstable_shouldYield,kn=e.unstable_requestPaint,Mt=e.unstable_now,Bg=e.unstable_getCurrentPriorityLevel,Vl=e.unstable_ImmediatePriority,Wd=e.unstable_UserBlockingPriority,Vo=e.unstable_NormalPriority,Og=e.unstable_LowPriority,jd=e.unstable_IdlePriority,Go=null,$n=null;function Ug(n){if($n&&typeof $n.onCommitFiberRoot=="function")try{$n.onCommitFiberRoot(Go,n,void 0,(n.current.flags&128)===128)}catch{}}var Fn=Math.clz32?Math.clz32:Gg,Hg=Math.log,Vg=Math.LN2;function Gg(n){return n>>>=0,n===0?32:31-(Hg(n)/Vg|0)|0}var Wo=64,jo=4194304;function Ns(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Xo(n,i){var a=n.pendingLanes;if(a===0)return 0;var u=0,p=n.suspendedLanes,g=n.pingedLanes,S=a&268435455;if(S!==0){var C=S&~p;C!==0?u=Ns(C):(g&=S,g!==0&&(u=Ns(g)))}else S=a&~p,S!==0?u=Ns(S):g!==0&&(u=Ns(g));if(u===0)return 0;if(i!==0&&i!==u&&(i&p)===0&&(p=u&-u,g=i&-i,p>=g||p===16&&(g&4194240)!==0))return i;if((u&4)!==0&&(u|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)a=31-Fn(i),p=1<<a,u|=n[a],i&=~p;return u}function Wg(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jg(n,i){for(var a=n.suspendedLanes,u=n.pingedLanes,p=n.expirationTimes,g=n.pendingLanes;0<g;){var S=31-Fn(g),C=1<<S,D=p[S];D===-1?((C&a)===0||(C&u)!==0)&&(p[S]=Wg(C,i)):D<=i&&(n.expiredLanes|=C),g&=~C}}function Gl(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Xd(){var n=Wo;return Wo<<=1,(Wo&4194240)===0&&(Wo=64),n}function Wl(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Ds(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Fn(i),n[i]=a}function Xg(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<a;){var p=31-Fn(a),g=1<<p;i[p]=0,u[p]=-1,n[p]=-1,a&=~g}}function jl(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var u=31-Fn(a),p=1<<u;p&i|n[u]&i&&(n[u]|=i),a&=~p}}var ct=0;function qd(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Yd,Xl,Zd,Jd,Qd,ql=!1,qo=[],bi=null,Ti=null,Li=null,Is=new Map,ks=new Map,Ai=[],qg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $d(n,i){switch(n){case"focusin":case"focusout":bi=null;break;case"dragenter":case"dragleave":Ti=null;break;case"mouseover":case"mouseout":Li=null;break;case"pointerover":case"pointerout":Is.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ks.delete(i.pointerId)}}function Fs(n,i,a,u,p,g){return n===null||n.nativeEvent!==g?(n={blockedOn:i,domEventName:a,eventSystemFlags:u,nativeEvent:g,targetContainers:[p]},i!==null&&(i=Js(i),i!==null&&Xl(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,p!==null&&i.indexOf(p)===-1&&i.push(p),n)}function Yg(n,i,a,u,p){switch(i){case"focusin":return bi=Fs(bi,n,i,a,u,p),!0;case"dragenter":return Ti=Fs(Ti,n,i,a,u,p),!0;case"mouseover":return Li=Fs(Li,n,i,a,u,p),!0;case"pointerover":var g=p.pointerId;return Is.set(g,Fs(Is.get(g)||null,n,i,a,u,p)),!0;case"gotpointercapture":return g=p.pointerId,ks.set(g,Fs(ks.get(g)||null,n,i,a,u,p)),!0}return!1}function Kd(n){var i=rr(n.target);if(i!==null){var a=et(i);if(a!==null){if(i=a.tag,i===13){if(i=gn(a),i!==null){n.blockedOn=i,Qd(n.priority,function(){Zd(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Yo(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Zl(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var u=new a.constructor(a.type,a);Sr=u,a.target.dispatchEvent(u),Sr=null}else return i=Js(a),i!==null&&Xl(i),n.blockedOn=a,!1;i.shift()}return!0}function eh(n,i,a){Yo(n)&&a.delete(i)}function Zg(){ql=!1,bi!==null&&Yo(bi)&&(bi=null),Ti!==null&&Yo(Ti)&&(Ti=null),Li!==null&&Yo(Li)&&(Li=null),Is.forEach(eh),ks.forEach(eh)}function zs(n,i){n.blockedOn===i&&(n.blockedOn=null,ql||(ql=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Zg)))}function Bs(n){function i(p){return zs(p,n)}if(0<qo.length){zs(qo[0],n);for(var a=1;a<qo.length;a++){var u=qo[a];u.blockedOn===n&&(u.blockedOn=null)}}for(bi!==null&&zs(bi,n),Ti!==null&&zs(Ti,n),Li!==null&&zs(Li,n),Is.forEach(i),ks.forEach(i),a=0;a<Ai.length;a++)u=Ai[a],u.blockedOn===n&&(u.blockedOn=null);for(;0<Ai.length&&(a=Ai[0],a.blockedOn===null);)Kd(a),a.blockedOn===null&&Ai.shift()}var Lr=U.ReactCurrentBatchConfig,Zo=!0;function Jg(n,i,a,u){var p=ct,g=Lr.transition;Lr.transition=null;try{ct=1,Yl(n,i,a,u)}finally{ct=p,Lr.transition=g}}function Qg(n,i,a,u){var p=ct,g=Lr.transition;Lr.transition=null;try{ct=4,Yl(n,i,a,u)}finally{ct=p,Lr.transition=g}}function Yl(n,i,a,u){if(Zo){var p=Zl(n,i,a,u);if(p===null)hc(n,i,u,Jo,a),$d(n,u);else if(Yg(p,n,i,a,u))u.stopPropagation();else if($d(n,u),i&4&&-1<qg.indexOf(n)){for(;p!==null;){var g=Js(p);if(g!==null&&Yd(g),g=Zl(n,i,a,u),g===null&&hc(n,i,u,Jo,a),g===p)break;p=g}p!==null&&u.stopPropagation()}else hc(n,i,u,null,a)}}var Jo=null;function Zl(n,i,a,u){if(Jo=null,n=Er(u),n=rr(n),n!==null)if(i=et(n),i===null)n=null;else if(a=i.tag,a===13){if(n=gn(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Jo=n,null}function th(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Bg()){case Vl:return 1;case Wd:return 4;case Vo:case Og:return 16;case jd:return 536870912;default:return 16}default:return 16}}var Ci=null,Jl=null,Qo=null;function nh(){if(Qo)return Qo;var n,i=Jl,a=i.length,u,p="value"in Ci?Ci.value:Ci.textContent,g=p.length;for(n=0;n<a&&i[n]===p[n];n++);var S=a-n;for(u=1;u<=S&&i[a-u]===p[g-u];u++);return Qo=p.slice(n,1<u?1-u:void 0)}function $o(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Ko(){return!0}function ih(){return!1}function vn(n){function i(a,u,p,g,S){this._reactName=a,this._targetInst=p,this.type=u,this.nativeEvent=g,this.target=S,this.currentTarget=null;for(var C in n)n.hasOwnProperty(C)&&(a=n[C],this[C]=a?a(g):g[C]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Ko:ih,this.isPropagationStopped=ih,this}return te(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ko)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ko)},persist:function(){},isPersistent:Ko}),i}var Ar={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ql=vn(Ar),Os=te({},Ar,{view:0,detail:0}),$g=vn(Os),$l,Kl,Us,ea=te({},Os,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Us&&(Us&&n.type==="mousemove"?($l=n.screenX-Us.screenX,Kl=n.screenY-Us.screenY):Kl=$l=0,Us=n),$l)},movementY:function(n){return"movementY"in n?n.movementY:Kl}}),rh=vn(ea),Kg=te({},ea,{dataTransfer:0}),ev=vn(Kg),tv=te({},Os,{relatedTarget:0}),ec=vn(tv),nv=te({},Ar,{animationName:0,elapsedTime:0,pseudoElement:0}),iv=vn(nv),rv=te({},Ar,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),sv=vn(rv),ov=te({},Ar,{data:0}),sh=vn(ov),av={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function uv(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=cv[n])?!!i[n]:!1}function tc(){return uv}var dv=te({},Os,{key:function(n){if(n.key){var i=av[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=$o(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?lv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tc,charCode:function(n){return n.type==="keypress"?$o(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?$o(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),hv=vn(dv),fv=te({},ea,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),oh=vn(fv),pv=te({},Os,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tc}),mv=vn(pv),gv=te({},Ar,{propertyName:0,elapsedTime:0,pseudoElement:0}),vv=vn(gv),yv=te({},ea,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),xv=vn(yv),_v=[9,13,27,32],nc=d&&"CompositionEvent"in window,Hs=null;d&&"documentMode"in document&&(Hs=document.documentMode);var wv=d&&"TextEvent"in window&&!Hs,ah=d&&(!nc||Hs&&8<Hs&&11>=Hs),lh=" ",ch=!1;function uh(n,i){switch(n){case"keyup":return _v.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Cr=!1;function Mv(n,i){switch(n){case"compositionend":return dh(i);case"keypress":return i.which!==32?null:(ch=!0,lh);case"textInput":return n=i.data,n===lh&&ch?null:n;default:return null}}function Sv(n,i){if(Cr)return n==="compositionend"||!nc&&uh(n,i)?(n=nh(),Qo=Jl=Ci=null,Cr=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return ah&&i.locale!=="ko"?null:i.data;default:return null}}var Ev={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Ev[n.type]:i==="textarea"}function fh(n,i,a,u){br(u),i=sa(i,"onChange"),0<i.length&&(a=new Ql("onChange","change",null,a,u),n.push({event:a,listeners:i}))}var Vs=null,Gs=null;function bv(n){Ph(n,0)}function ta(n){var i=Ir(n);if(me(i))return n}function Tv(n,i){if(n==="change")return i}var ph=!1;if(d){var ic;if(d){var rc="oninput"in document;if(!rc){var mh=document.createElement("div");mh.setAttribute("oninput","return;"),rc=typeof mh.oninput=="function"}ic=rc}else ic=!1;ph=ic&&(!document.documentMode||9<document.documentMode)}function gh(){Vs&&(Vs.detachEvent("onpropertychange",vh),Gs=Vs=null)}function vh(n){if(n.propertyName==="value"&&ta(Gs)){var i=[];fh(i,Gs,n,Er(n)),L(bv,i)}}function Lv(n,i,a){n==="focusin"?(gh(),Vs=i,Gs=a,Vs.attachEvent("onpropertychange",vh)):n==="focusout"&&gh()}function Av(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ta(Gs)}function Cv(n,i){if(n==="click")return ta(i)}function Rv(n,i){if(n==="input"||n==="change")return ta(i)}function Pv(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var zn=typeof Object.is=="function"?Object.is:Pv;function Ws(n,i){if(zn(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),u=Object.keys(i);if(a.length!==u.length)return!1;for(u=0;u<a.length;u++){var p=a[u];if(!h.call(i,p)||!zn(n[p],i[p]))return!1}return!0}function yh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function xh(n,i){var a=yh(n);n=0;for(var u;a;){if(a.nodeType===3){if(u=n+a.textContent.length,n<=i&&u>=i)return{node:a,offset:i-n};n=u}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=yh(a)}}function _h(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?_h(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function wh(){for(var n=window,i=ye();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=ye(n.document)}return i}function sc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function Nv(n){var i=wh(),a=n.focusedElem,u=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&_h(a.ownerDocument.documentElement,a)){if(u!==null&&sc(a)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var p=a.textContent.length,g=Math.min(u.start,p);u=u.end===void 0?g:Math.min(u.end,p),!n.extend&&g>u&&(p=u,u=g,g=p),p=xh(a,g);var S=xh(a,u);p&&S&&(n.rangeCount!==1||n.anchorNode!==p.node||n.anchorOffset!==p.offset||n.focusNode!==S.node||n.focusOffset!==S.offset)&&(i=i.createRange(),i.setStart(p.node,p.offset),n.removeAllRanges(),g>u?(n.addRange(i),n.extend(S.node,S.offset)):(i.setEnd(S.node,S.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Dv=d&&"documentMode"in document&&11>=document.documentMode,Rr=null,oc=null,js=null,ac=!1;function Mh(n,i,a){var u=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ac||Rr==null||Rr!==ye(u)||(u=Rr,"selectionStart"in u&&sc(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),js&&Ws(js,u)||(js=u,u=sa(oc,"onSelect"),0<u.length&&(i=new Ql("onSelect","select",null,i,a),n.push({event:i,listeners:u}),i.target=Rr)))}function na(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Pr={animationend:na("Animation","AnimationEnd"),animationiteration:na("Animation","AnimationIteration"),animationstart:na("Animation","AnimationStart"),transitionend:na("Transition","TransitionEnd")},lc={},Sh={};d&&(Sh=document.createElement("div").style,"AnimationEvent"in window||(delete Pr.animationend.animation,delete Pr.animationiteration.animation,delete Pr.animationstart.animation),"TransitionEvent"in window||delete Pr.transitionend.transition);function ia(n){if(lc[n])return lc[n];if(!Pr[n])return n;var i=Pr[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Sh)return lc[n]=i[a];return n}var Eh=ia("animationend"),bh=ia("animationiteration"),Th=ia("animationstart"),Lh=ia("transitionend"),Ah=new Map,Ch="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ri(n,i){Ah.set(n,i),l(i,[n])}for(var cc=0;cc<Ch.length;cc++){var uc=Ch[cc],Iv=uc.toLowerCase(),kv=uc[0].toUpperCase()+uc.slice(1);Ri(Iv,"on"+kv)}Ri(Eh,"onAnimationEnd"),Ri(bh,"onAnimationIteration"),Ri(Th,"onAnimationStart"),Ri("dblclick","onDoubleClick"),Ri("focusin","onFocus"),Ri("focusout","onBlur"),Ri(Lh,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Fv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xs));function Rh(n,i,a){var u=n.type||"unknown-event";n.currentTarget=a,Ze(u,i,void 0,n),n.currentTarget=null}function Ph(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var u=n[a],p=u.event;u=u.listeners;e:{var g=void 0;if(i)for(var S=u.length-1;0<=S;S--){var C=u[S],D=C.instance,J=C.currentTarget;if(C=C.listener,D!==g&&p.isPropagationStopped())break e;Rh(p,C,J),g=D}else for(S=0;S<u.length;S++){if(C=u[S],D=C.instance,J=C.currentTarget,C=C.listener,D!==g&&p.isPropagationStopped())break e;Rh(p,C,J),g=D}}}if(qe)throw n=at,qe=!1,at=null,n}function gt(n,i){var a=i[yc];a===void 0&&(a=i[yc]=new Set);var u=n+"__bubble";a.has(u)||(Nh(i,n,2,!1),a.add(u))}function dc(n,i,a){var u=0;i&&(u|=4),Nh(a,n,u,i)}var ra="_reactListening"+Math.random().toString(36).slice(2);function qs(n){if(!n[ra]){n[ra]=!0,r.forEach(function(a){a!=="selectionchange"&&(Fv.has(a)||dc(a,!1,n),dc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[ra]||(i[ra]=!0,dc("selectionchange",!1,i))}}function Nh(n,i,a,u){switch(th(i)){case 1:var p=Jg;break;case 4:p=Qg;break;default:p=Yl}a=p.bind(null,i,a,n),p=void 0,!X||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(p=!0),u?p!==void 0?n.addEventListener(i,a,{capture:!0,passive:p}):n.addEventListener(i,a,!0):p!==void 0?n.addEventListener(i,a,{passive:p}):n.addEventListener(i,a,!1)}function hc(n,i,a,u,p){var g=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var S=u.tag;if(S===3||S===4){var C=u.stateNode.containerInfo;if(C===p||C.nodeType===8&&C.parentNode===p)break;if(S===4)for(S=u.return;S!==null;){var D=S.tag;if((D===3||D===4)&&(D=S.stateNode.containerInfo,D===p||D.nodeType===8&&D.parentNode===p))return;S=S.return}for(;C!==null;){if(S=rr(C),S===null)return;if(D=S.tag,D===5||D===6){u=g=S;continue e}C=C.parentNode}}u=u.return}L(function(){var J=g,de=Er(a),fe=[];e:{var ce=Ah.get(n);if(ce!==void 0){var Ae=Ql,Pe=n;switch(n){case"keypress":if($o(a)===0)break e;case"keydown":case"keyup":Ae=hv;break;case"focusin":Pe="focus",Ae=ec;break;case"focusout":Pe="blur",Ae=ec;break;case"beforeblur":case"afterblur":Ae=ec;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ae=rh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ae=ev;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ae=mv;break;case Eh:case bh:case Th:Ae=iv;break;case Lh:Ae=vv;break;case"scroll":Ae=$g;break;case"wheel":Ae=xv;break;case"copy":case"cut":case"paste":Ae=sv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ae=oh}var Ne=(i&4)!==0,Ct=!Ne&&n==="scroll",H=Ne?ce!==null?ce+"Capture":null:ce;Ne=[];for(var k=J,j;k!==null;){j=k;var pe=j.stateNode;if(j.tag===5&&pe!==null&&(j=pe,H!==null&&(pe=$(k,H),pe!=null&&Ne.push(Ys(k,pe,j)))),Ct)break;k=k.return}0<Ne.length&&(ce=new Ae(ce,Pe,null,a,de),fe.push({event:ce,listeners:Ne}))}}if((i&7)===0){e:{if(ce=n==="mouseover"||n==="pointerover",Ae=n==="mouseout"||n==="pointerout",ce&&a!==Sr&&(Pe=a.relatedTarget||a.fromElement)&&(rr(Pe)||Pe[hi]))break e;if((Ae||ce)&&(ce=de.window===de?de:(ce=de.ownerDocument)?ce.defaultView||ce.parentWindow:window,Ae?(Pe=a.relatedTarget||a.toElement,Ae=J,Pe=Pe?rr(Pe):null,Pe!==null&&(Ct=et(Pe),Pe!==Ct||Pe.tag!==5&&Pe.tag!==6)&&(Pe=null)):(Ae=null,Pe=J),Ae!==Pe)){if(Ne=rh,pe="onMouseLeave",H="onMouseEnter",k="mouse",(n==="pointerout"||n==="pointerover")&&(Ne=oh,pe="onPointerLeave",H="onPointerEnter",k="pointer"),Ct=Ae==null?ce:Ir(Ae),j=Pe==null?ce:Ir(Pe),ce=new Ne(pe,k+"leave",Ae,a,de),ce.target=Ct,ce.relatedTarget=j,pe=null,rr(de)===J&&(Ne=new Ne(H,k+"enter",Pe,a,de),Ne.target=j,Ne.relatedTarget=Ct,pe=Ne),Ct=pe,Ae&&Pe)t:{for(Ne=Ae,H=Pe,k=0,j=Ne;j;j=Nr(j))k++;for(j=0,pe=H;pe;pe=Nr(pe))j++;for(;0<k-j;)Ne=Nr(Ne),k--;for(;0<j-k;)H=Nr(H),j--;for(;k--;){if(Ne===H||H!==null&&Ne===H.alternate)break t;Ne=Nr(Ne),H=Nr(H)}Ne=null}else Ne=null;Ae!==null&&Dh(fe,ce,Ae,Ne,!1),Pe!==null&&Ct!==null&&Dh(fe,Ct,Pe,Ne,!0)}}e:{if(ce=J?Ir(J):window,Ae=ce.nodeName&&ce.nodeName.toLowerCase(),Ae==="select"||Ae==="input"&&ce.type==="file")var ke=Tv;else if(hh(ce))if(ph)ke=Rv;else{ke=Av;var Ue=Lv}else(Ae=ce.nodeName)&&Ae.toLowerCase()==="input"&&(ce.type==="checkbox"||ce.type==="radio")&&(ke=Cv);if(ke&&(ke=ke(n,J))){fh(fe,ke,a,de);break e}Ue&&Ue(n,ce,J),n==="focusout"&&(Ue=ce._wrapperState)&&Ue.controlled&&ce.type==="number"&&ae(ce,"number",ce.value)}switch(Ue=J?Ir(J):window,n){case"focusin":(hh(Ue)||Ue.contentEditable==="true")&&(Rr=Ue,oc=J,js=null);break;case"focusout":js=oc=Rr=null;break;case"mousedown":ac=!0;break;case"contextmenu":case"mouseup":case"dragend":ac=!1,Mh(fe,a,de);break;case"selectionchange":if(Dv)break;case"keydown":case"keyup":Mh(fe,a,de)}var He;if(nc)e:{switch(n){case"compositionstart":var Ye="onCompositionStart";break e;case"compositionend":Ye="onCompositionEnd";break e;case"compositionupdate":Ye="onCompositionUpdate";break e}Ye=void 0}else Cr?uh(n,a)&&(Ye="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(Ye="onCompositionStart");Ye&&(ah&&a.locale!=="ko"&&(Cr||Ye!=="onCompositionStart"?Ye==="onCompositionEnd"&&Cr&&(He=nh()):(Ci=de,Jl="value"in Ci?Ci.value:Ci.textContent,Cr=!0)),Ue=sa(J,Ye),0<Ue.length&&(Ye=new sh(Ye,n,null,a,de),fe.push({event:Ye,listeners:Ue}),He?Ye.data=He:(He=dh(a),He!==null&&(Ye.data=He)))),(He=wv?Mv(n,a):Sv(n,a))&&(J=sa(J,"onBeforeInput"),0<J.length&&(de=new sh("onBeforeInput","beforeinput",null,a,de),fe.push({event:de,listeners:J}),de.data=He))}Ph(fe,i)})}function Ys(n,i,a){return{instance:n,listener:i,currentTarget:a}}function sa(n,i){for(var a=i+"Capture",u=[];n!==null;){var p=n,g=p.stateNode;p.tag===5&&g!==null&&(p=g,g=$(n,a),g!=null&&u.unshift(Ys(n,g,p)),g=$(n,i),g!=null&&u.push(Ys(n,g,p))),n=n.return}return u}function Nr(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Dh(n,i,a,u,p){for(var g=i._reactName,S=[];a!==null&&a!==u;){var C=a,D=C.alternate,J=C.stateNode;if(D!==null&&D===u)break;C.tag===5&&J!==null&&(C=J,p?(D=$(a,g),D!=null&&S.unshift(Ys(a,D,C))):p||(D=$(a,g),D!=null&&S.push(Ys(a,D,C)))),a=a.return}S.length!==0&&n.push({event:i,listeners:S})}var zv=/\r\n?/g,Bv=/\u0000|\uFFFD/g;function Ih(n){return(typeof n=="string"?n:""+n).replace(zv,`
`).replace(Bv,"")}function oa(n,i,a){if(i=Ih(i),Ih(n)!==i&&a)throw Error(t(425))}function aa(){}var fc=null,pc=null;function mc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var gc=typeof setTimeout=="function"?setTimeout:void 0,Ov=typeof clearTimeout=="function"?clearTimeout:void 0,kh=typeof Promise=="function"?Promise:void 0,Uv=typeof queueMicrotask=="function"?queueMicrotask:typeof kh<"u"?function(n){return kh.resolve(null).then(n).catch(Hv)}:gc;function Hv(n){setTimeout(function(){throw n})}function vc(n,i){var a=i,u=0;do{var p=a.nextSibling;if(n.removeChild(a),p&&p.nodeType===8)if(a=p.data,a==="/$"){if(u===0){n.removeChild(p),Bs(i);return}u--}else a!=="$"&&a!=="$?"&&a!=="$!"||u++;a=p}while(a);Bs(i)}function Pi(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Fh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Dr=Math.random().toString(36).slice(2),Kn="__reactFiber$"+Dr,Zs="__reactProps$"+Dr,hi="__reactContainer$"+Dr,yc="__reactEvents$"+Dr,Vv="__reactListeners$"+Dr,Gv="__reactHandles$"+Dr;function rr(n){var i=n[Kn];if(i)return i;for(var a=n.parentNode;a;){if(i=a[hi]||a[Kn]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Fh(n);n!==null;){if(a=n[Kn])return a;n=Fh(n)}return i}n=a,a=n.parentNode}return null}function Js(n){return n=n[Kn]||n[hi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ir(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function la(n){return n[Zs]||null}var xc=[],kr=-1;function Ni(n){return{current:n}}function vt(n){0>kr||(n.current=xc[kr],xc[kr]=null,kr--)}function pt(n,i){kr++,xc[kr]=n.current,n.current=i}var Di={},Jt=Ni(Di),cn=Ni(!1),sr=Di;function Fr(n,i){var a=n.type.contextTypes;if(!a)return Di;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var p={},g;for(g in a)p[g]=i[g];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=p),p}function un(n){return n=n.childContextTypes,n!=null}function ca(){vt(cn),vt(Jt)}function zh(n,i,a){if(Jt.current!==Di)throw Error(t(168));pt(Jt,i),pt(cn,a)}function Bh(n,i,a){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return a;u=u.getChildContext();for(var p in u)if(!(p in i))throw Error(t(108,Le(n)||"Unknown",p));return te({},a,u)}function ua(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Di,sr=Jt.current,pt(Jt,n),pt(cn,cn.current),!0}function Oh(n,i,a){var u=n.stateNode;if(!u)throw Error(t(169));a?(n=Bh(n,i,sr),u.__reactInternalMemoizedMergedChildContext=n,vt(cn),vt(Jt),pt(Jt,n)):vt(cn),pt(cn,a)}var fi=null,da=!1,_c=!1;function Uh(n){fi===null?fi=[n]:fi.push(n)}function Wv(n){da=!0,Uh(n)}function Ii(){if(!_c&&fi!==null){_c=!0;var n=0,i=ct;try{var a=fi;for(ct=1;n<a.length;n++){var u=a[n];do u=u(!0);while(u!==null)}fi=null,da=!1}catch(p){throw fi!==null&&(fi=fi.slice(n+1)),wt(Vl,Ii),p}finally{ct=i,_c=!1}}return null}var zr=[],Br=0,ha=null,fa=0,En=[],bn=0,or=null,pi=1,mi="";function ar(n,i){zr[Br++]=fa,zr[Br++]=ha,ha=n,fa=i}function Hh(n,i,a){En[bn++]=pi,En[bn++]=mi,En[bn++]=or,or=n;var u=pi;n=mi;var p=32-Fn(u)-1;u&=~(1<<p),a+=1;var g=32-Fn(i)+p;if(30<g){var S=p-p%5;g=(u&(1<<S)-1).toString(32),u>>=S,p-=S,pi=1<<32-Fn(i)+p|a<<p|u,mi=g+n}else pi=1<<g|a<<p|u,mi=n}function wc(n){n.return!==null&&(ar(n,1),Hh(n,1,0))}function Mc(n){for(;n===ha;)ha=zr[--Br],zr[Br]=null,fa=zr[--Br],zr[Br]=null;for(;n===or;)or=En[--bn],En[bn]=null,mi=En[--bn],En[bn]=null,pi=En[--bn],En[bn]=null}var yn=null,xn=null,xt=!1,Bn=null;function Vh(n,i){var a=Cn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Gh(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,yn=n,xn=Pi(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,yn=n,xn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=or!==null?{id:pi,overflow:mi}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Cn(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,yn=n,xn=null,!0):!1;default:return!1}}function Sc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Ec(n){if(xt){var i=xn;if(i){var a=i;if(!Gh(n,i)){if(Sc(n))throw Error(t(418));i=Pi(a.nextSibling);var u=yn;i&&Gh(n,i)?Vh(u,a):(n.flags=n.flags&-4097|2,xt=!1,yn=n)}}else{if(Sc(n))throw Error(t(418));n.flags=n.flags&-4097|2,xt=!1,yn=n}}}function Wh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;yn=n}function pa(n){if(n!==yn)return!1;if(!xt)return Wh(n),xt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!mc(n.type,n.memoizedProps)),i&&(i=xn)){if(Sc(n))throw jh(),Error(t(418));for(;i;)Vh(n,i),i=Pi(i.nextSibling)}if(Wh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){xn=Pi(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}xn=null}}else xn=yn?Pi(n.stateNode.nextSibling):null;return!0}function jh(){for(var n=xn;n;)n=Pi(n.nextSibling)}function Or(){xn=yn=null,xt=!1}function bc(n){Bn===null?Bn=[n]:Bn.push(n)}var jv=U.ReactCurrentBatchConfig;function Qs(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var u=a.stateNode}if(!u)throw Error(t(147,n));var p=u,g=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(S){var C=p.refs;S===null?delete C[g]:C[g]=S},i._stringRef=g,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function ma(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Xh(n){var i=n._init;return i(n._payload)}function qh(n){function i(H,k){if(n){var j=H.deletions;j===null?(H.deletions=[k],H.flags|=16):j.push(k)}}function a(H,k){if(!n)return null;for(;k!==null;)i(H,k),k=k.sibling;return null}function u(H,k){for(H=new Map;k!==null;)k.key!==null?H.set(k.key,k):H.set(k.index,k),k=k.sibling;return H}function p(H,k){return H=Vi(H,k),H.index=0,H.sibling=null,H}function g(H,k,j){return H.index=j,n?(j=H.alternate,j!==null?(j=j.index,j<k?(H.flags|=2,k):j):(H.flags|=2,k)):(H.flags|=1048576,k)}function S(H){return n&&H.alternate===null&&(H.flags|=2),H}function C(H,k,j,pe){return k===null||k.tag!==6?(k=gu(j,H.mode,pe),k.return=H,k):(k=p(k,j),k.return=H,k)}function D(H,k,j,pe){var ke=j.type;return ke===W?de(H,k,j.props.children,pe,j.key):k!==null&&(k.elementType===ke||typeof ke=="object"&&ke!==null&&ke.$$typeof===B&&Xh(ke)===k.type)?(pe=p(k,j.props),pe.ref=Qs(H,k,j),pe.return=H,pe):(pe=Oa(j.type,j.key,j.props,null,H.mode,pe),pe.ref=Qs(H,k,j),pe.return=H,pe)}function J(H,k,j,pe){return k===null||k.tag!==4||k.stateNode.containerInfo!==j.containerInfo||k.stateNode.implementation!==j.implementation?(k=vu(j,H.mode,pe),k.return=H,k):(k=p(k,j.children||[]),k.return=H,k)}function de(H,k,j,pe,ke){return k===null||k.tag!==7?(k=mr(j,H.mode,pe,ke),k.return=H,k):(k=p(k,j),k.return=H,k)}function fe(H,k,j){if(typeof k=="string"&&k!==""||typeof k=="number")return k=gu(""+k,H.mode,j),k.return=H,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case z:return j=Oa(k.type,k.key,k.props,null,H.mode,j),j.ref=Qs(H,null,k),j.return=H,j;case T:return k=vu(k,H.mode,j),k.return=H,k;case B:var pe=k._init;return fe(H,pe(k._payload),j)}if(le(k)||K(k))return k=mr(k,H.mode,j,null),k.return=H,k;ma(H,k)}return null}function ce(H,k,j,pe){var ke=k!==null?k.key:null;if(typeof j=="string"&&j!==""||typeof j=="number")return ke!==null?null:C(H,k,""+j,pe);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case z:return j.key===ke?D(H,k,j,pe):null;case T:return j.key===ke?J(H,k,j,pe):null;case B:return ke=j._init,ce(H,k,ke(j._payload),pe)}if(le(j)||K(j))return ke!==null?null:de(H,k,j,pe,null);ma(H,j)}return null}function Ae(H,k,j,pe,ke){if(typeof pe=="string"&&pe!==""||typeof pe=="number")return H=H.get(j)||null,C(k,H,""+pe,ke);if(typeof pe=="object"&&pe!==null){switch(pe.$$typeof){case z:return H=H.get(pe.key===null?j:pe.key)||null,D(k,H,pe,ke);case T:return H=H.get(pe.key===null?j:pe.key)||null,J(k,H,pe,ke);case B:var Ue=pe._init;return Ae(H,k,j,Ue(pe._payload),ke)}if(le(pe)||K(pe))return H=H.get(j)||null,de(k,H,pe,ke,null);ma(k,pe)}return null}function Pe(H,k,j,pe){for(var ke=null,Ue=null,He=k,Ye=k=0,Ot=null;He!==null&&Ye<j.length;Ye++){He.index>Ye?(Ot=He,He=null):Ot=He.sibling;var ot=ce(H,He,j[Ye],pe);if(ot===null){He===null&&(He=Ot);break}n&&He&&ot.alternate===null&&i(H,He),k=g(ot,k,Ye),Ue===null?ke=ot:Ue.sibling=ot,Ue=ot,He=Ot}if(Ye===j.length)return a(H,He),xt&&ar(H,Ye),ke;if(He===null){for(;Ye<j.length;Ye++)He=fe(H,j[Ye],pe),He!==null&&(k=g(He,k,Ye),Ue===null?ke=He:Ue.sibling=He,Ue=He);return xt&&ar(H,Ye),ke}for(He=u(H,He);Ye<j.length;Ye++)Ot=Ae(He,H,Ye,j[Ye],pe),Ot!==null&&(n&&Ot.alternate!==null&&He.delete(Ot.key===null?Ye:Ot.key),k=g(Ot,k,Ye),Ue===null?ke=Ot:Ue.sibling=Ot,Ue=Ot);return n&&He.forEach(function(Gi){return i(H,Gi)}),xt&&ar(H,Ye),ke}function Ne(H,k,j,pe){var ke=K(j);if(typeof ke!="function")throw Error(t(150));if(j=ke.call(j),j==null)throw Error(t(151));for(var Ue=ke=null,He=k,Ye=k=0,Ot=null,ot=j.next();He!==null&&!ot.done;Ye++,ot=j.next()){He.index>Ye?(Ot=He,He=null):Ot=He.sibling;var Gi=ce(H,He,ot.value,pe);if(Gi===null){He===null&&(He=Ot);break}n&&He&&Gi.alternate===null&&i(H,He),k=g(Gi,k,Ye),Ue===null?ke=Gi:Ue.sibling=Gi,Ue=Gi,He=Ot}if(ot.done)return a(H,He),xt&&ar(H,Ye),ke;if(He===null){for(;!ot.done;Ye++,ot=j.next())ot=fe(H,ot.value,pe),ot!==null&&(k=g(ot,k,Ye),Ue===null?ke=ot:Ue.sibling=ot,Ue=ot);return xt&&ar(H,Ye),ke}for(He=u(H,He);!ot.done;Ye++,ot=j.next())ot=Ae(He,H,Ye,ot.value,pe),ot!==null&&(n&&ot.alternate!==null&&He.delete(ot.key===null?Ye:ot.key),k=g(ot,k,Ye),Ue===null?ke=ot:Ue.sibling=ot,Ue=ot);return n&&He.forEach(function(E0){return i(H,E0)}),xt&&ar(H,Ye),ke}function Ct(H,k,j,pe){if(typeof j=="object"&&j!==null&&j.type===W&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case z:e:{for(var ke=j.key,Ue=k;Ue!==null;){if(Ue.key===ke){if(ke=j.type,ke===W){if(Ue.tag===7){a(H,Ue.sibling),k=p(Ue,j.props.children),k.return=H,H=k;break e}}else if(Ue.elementType===ke||typeof ke=="object"&&ke!==null&&ke.$$typeof===B&&Xh(ke)===Ue.type){a(H,Ue.sibling),k=p(Ue,j.props),k.ref=Qs(H,Ue,j),k.return=H,H=k;break e}a(H,Ue);break}else i(H,Ue);Ue=Ue.sibling}j.type===W?(k=mr(j.props.children,H.mode,pe,j.key),k.return=H,H=k):(pe=Oa(j.type,j.key,j.props,null,H.mode,pe),pe.ref=Qs(H,k,j),pe.return=H,H=pe)}return S(H);case T:e:{for(Ue=j.key;k!==null;){if(k.key===Ue)if(k.tag===4&&k.stateNode.containerInfo===j.containerInfo&&k.stateNode.implementation===j.implementation){a(H,k.sibling),k=p(k,j.children||[]),k.return=H,H=k;break e}else{a(H,k);break}else i(H,k);k=k.sibling}k=vu(j,H.mode,pe),k.return=H,H=k}return S(H);case B:return Ue=j._init,Ct(H,k,Ue(j._payload),pe)}if(le(j))return Pe(H,k,j,pe);if(K(j))return Ne(H,k,j,pe);ma(H,j)}return typeof j=="string"&&j!==""||typeof j=="number"?(j=""+j,k!==null&&k.tag===6?(a(H,k.sibling),k=p(k,j),k.return=H,H=k):(a(H,k),k=gu(j,H.mode,pe),k.return=H,H=k),S(H)):a(H,k)}return Ct}var Ur=qh(!0),Yh=qh(!1),ga=Ni(null),va=null,Hr=null,Tc=null;function Lc(){Tc=Hr=va=null}function Ac(n){var i=ga.current;vt(ga),n._currentValue=i}function Cc(n,i,a){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===a)break;n=n.return}}function Vr(n,i){va=n,Tc=Hr=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(dn=!0),n.firstContext=null)}function Tn(n){var i=n._currentValue;if(Tc!==n)if(n={context:n,memoizedValue:i,next:null},Hr===null){if(va===null)throw Error(t(308));Hr=n,va.dependencies={lanes:0,firstContext:n}}else Hr=Hr.next=n;return i}var lr=null;function Rc(n){lr===null?lr=[n]:lr.push(n)}function Zh(n,i,a,u){var p=i.interleaved;return p===null?(a.next=a,Rc(i)):(a.next=p.next,p.next=a),i.interleaved=a,gi(n,u)}function gi(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var ki=!1;function Pc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Jh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function vi(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Fi(n,i,a){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(st&2)!==0){var p=u.pending;return p===null?i.next=i:(i.next=p.next,p.next=i),u.pending=i,gi(n,a)}return p=u.interleaved,p===null?(i.next=i,Rc(u)):(i.next=p.next,p.next=i),u.interleaved=i,gi(n,a)}function ya(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,jl(n,a)}}function Qh(n,i){var a=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,a===u)){var p=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var S={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?p=g=S:g=g.next=S,a=a.next}while(a!==null);g===null?p=g=i:g=g.next=i}else p=g=i;a={baseState:u.baseState,firstBaseUpdate:p,lastBaseUpdate:g,shared:u.shared,effects:u.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function xa(n,i,a,u){var p=n.updateQueue;ki=!1;var g=p.firstBaseUpdate,S=p.lastBaseUpdate,C=p.shared.pending;if(C!==null){p.shared.pending=null;var D=C,J=D.next;D.next=null,S===null?g=J:S.next=J,S=D;var de=n.alternate;de!==null&&(de=de.updateQueue,C=de.lastBaseUpdate,C!==S&&(C===null?de.firstBaseUpdate=J:C.next=J,de.lastBaseUpdate=D))}if(g!==null){var fe=p.baseState;S=0,de=J=D=null,C=g;do{var ce=C.lane,Ae=C.eventTime;if((u&ce)===ce){de!==null&&(de=de.next={eventTime:Ae,lane:0,tag:C.tag,payload:C.payload,callback:C.callback,next:null});e:{var Pe=n,Ne=C;switch(ce=i,Ae=a,Ne.tag){case 1:if(Pe=Ne.payload,typeof Pe=="function"){fe=Pe.call(Ae,fe,ce);break e}fe=Pe;break e;case 3:Pe.flags=Pe.flags&-65537|128;case 0:if(Pe=Ne.payload,ce=typeof Pe=="function"?Pe.call(Ae,fe,ce):Pe,ce==null)break e;fe=te({},fe,ce);break e;case 2:ki=!0}}C.callback!==null&&C.lane!==0&&(n.flags|=64,ce=p.effects,ce===null?p.effects=[C]:ce.push(C))}else Ae={eventTime:Ae,lane:ce,tag:C.tag,payload:C.payload,callback:C.callback,next:null},de===null?(J=de=Ae,D=fe):de=de.next=Ae,S|=ce;if(C=C.next,C===null){if(C=p.shared.pending,C===null)break;ce=C,C=ce.next,ce.next=null,p.lastBaseUpdate=ce,p.shared.pending=null}}while(!0);if(de===null&&(D=fe),p.baseState=D,p.firstBaseUpdate=J,p.lastBaseUpdate=de,i=p.shared.interleaved,i!==null){p=i;do S|=p.lane,p=p.next;while(p!==i)}else g===null&&(p.shared.lanes=0);dr|=S,n.lanes=S,n.memoizedState=fe}}function $h(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],p=u.callback;if(p!==null){if(u.callback=null,u=a,typeof p!="function")throw Error(t(191,p));p.call(u)}}}var $s={},ei=Ni($s),Ks=Ni($s),eo=Ni($s);function cr(n){if(n===$s)throw Error(t(174));return n}function Nc(n,i){switch(pt(eo,i),pt(Ks,n),pt(ei,$s),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:_e(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=_e(i,n)}vt(ei),pt(ei,i)}function Gr(){vt(ei),vt(Ks),vt(eo)}function Kh(n){cr(eo.current);var i=cr(ei.current),a=_e(i,n.type);i!==a&&(pt(Ks,n),pt(ei,a))}function Dc(n){Ks.current===n&&(vt(ei),vt(Ks))}var St=Ni(0);function _a(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Ic=[];function kc(){for(var n=0;n<Ic.length;n++)Ic[n]._workInProgressVersionPrimary=null;Ic.length=0}var wa=U.ReactCurrentDispatcher,Fc=U.ReactCurrentBatchConfig,ur=0,Et=null,Dt=null,zt=null,Ma=!1,to=!1,no=0,Xv=0;function Qt(){throw Error(t(321))}function zc(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!zn(n[a],i[a]))return!1;return!0}function Bc(n,i,a,u,p,g){if(ur=g,Et=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,wa.current=n===null||n.memoizedState===null?Jv:Qv,n=a(u,p),to){g=0;do{if(to=!1,no=0,25<=g)throw Error(t(301));g+=1,zt=Dt=null,i.updateQueue=null,wa.current=$v,n=a(u,p)}while(to)}if(wa.current=ba,i=Dt!==null&&Dt.next!==null,ur=0,zt=Dt=Et=null,Ma=!1,i)throw Error(t(300));return n}function Oc(){var n=no!==0;return no=0,n}function ti(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return zt===null?Et.memoizedState=zt=n:zt=zt.next=n,zt}function Ln(){if(Dt===null){var n=Et.alternate;n=n!==null?n.memoizedState:null}else n=Dt.next;var i=zt===null?Et.memoizedState:zt.next;if(i!==null)zt=i,Dt=n;else{if(n===null)throw Error(t(310));Dt=n,n={memoizedState:Dt.memoizedState,baseState:Dt.baseState,baseQueue:Dt.baseQueue,queue:Dt.queue,next:null},zt===null?Et.memoizedState=zt=n:zt=zt.next=n}return zt}function io(n,i){return typeof i=="function"?i(n):i}function Uc(n){var i=Ln(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=Dt,p=u.baseQueue,g=a.pending;if(g!==null){if(p!==null){var S=p.next;p.next=g.next,g.next=S}u.baseQueue=p=g,a.pending=null}if(p!==null){g=p.next,u=u.baseState;var C=S=null,D=null,J=g;do{var de=J.lane;if((ur&de)===de)D!==null&&(D=D.next={lane:0,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),u=J.hasEagerState?J.eagerState:n(u,J.action);else{var fe={lane:de,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null};D===null?(C=D=fe,S=u):D=D.next=fe,Et.lanes|=de,dr|=de}J=J.next}while(J!==null&&J!==g);D===null?S=u:D.next=C,zn(u,i.memoizedState)||(dn=!0),i.memoizedState=u,i.baseState=S,i.baseQueue=D,a.lastRenderedState=u}if(n=a.interleaved,n!==null){p=n;do g=p.lane,Et.lanes|=g,dr|=g,p=p.next;while(p!==n)}else p===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Hc(n){var i=Ln(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=a.dispatch,p=a.pending,g=i.memoizedState;if(p!==null){a.pending=null;var S=p=p.next;do g=n(g,S.action),S=S.next;while(S!==p);zn(g,i.memoizedState)||(dn=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),a.lastRenderedState=g}return[g,u]}function ef(){}function tf(n,i){var a=Et,u=Ln(),p=i(),g=!zn(u.memoizedState,p);if(g&&(u.memoizedState=p,dn=!0),u=u.queue,Vc(sf.bind(null,a,u,n),[n]),u.getSnapshot!==i||g||zt!==null&&zt.memoizedState.tag&1){if(a.flags|=2048,ro(9,rf.bind(null,a,u,p,i),void 0,null),Bt===null)throw Error(t(349));(ur&30)!==0||nf(a,i,p)}return p}function nf(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Et.updateQueue,i===null?(i={lastEffect:null,stores:null},Et.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function rf(n,i,a,u){i.value=a,i.getSnapshot=u,of(i)&&af(n)}function sf(n,i,a){return a(function(){of(i)&&af(n)})}function of(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!zn(n,a)}catch{return!0}}function af(n){var i=gi(n,1);i!==null&&Vn(i,n,1,-1)}function lf(n){var i=ti();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:io,lastRenderedState:n},i.queue=n,n=n.dispatch=Zv.bind(null,Et,n),[i.memoizedState,n]}function ro(n,i,a,u){return n={tag:n,create:i,destroy:a,deps:u,next:null},i=Et.updateQueue,i===null?(i={lastEffect:null,stores:null},Et.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(u=a.next,a.next=n,n.next=u,i.lastEffect=n)),n}function cf(){return Ln().memoizedState}function Sa(n,i,a,u){var p=ti();Et.flags|=n,p.memoizedState=ro(1|i,a,void 0,u===void 0?null:u)}function Ea(n,i,a,u){var p=Ln();u=u===void 0?null:u;var g=void 0;if(Dt!==null){var S=Dt.memoizedState;if(g=S.destroy,u!==null&&zc(u,S.deps)){p.memoizedState=ro(i,a,g,u);return}}Et.flags|=n,p.memoizedState=ro(1|i,a,g,u)}function uf(n,i){return Sa(8390656,8,n,i)}function Vc(n,i){return Ea(2048,8,n,i)}function df(n,i){return Ea(4,2,n,i)}function hf(n,i){return Ea(4,4,n,i)}function ff(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function pf(n,i,a){return a=a!=null?a.concat([n]):null,Ea(4,4,ff.bind(null,i,n),a)}function Gc(){}function mf(n,i){var a=Ln();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&zc(i,u[1])?u[0]:(a.memoizedState=[n,i],n)}function gf(n,i){var a=Ln();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&zc(i,u[1])?u[0]:(n=n(),a.memoizedState=[n,i],n)}function vf(n,i,a){return(ur&21)===0?(n.baseState&&(n.baseState=!1,dn=!0),n.memoizedState=a):(zn(a,i)||(a=Xd(),Et.lanes|=a,dr|=a,n.baseState=!0),i)}function qv(n,i){var a=ct;ct=a!==0&&4>a?a:4,n(!0);var u=Fc.transition;Fc.transition={};try{n(!1),i()}finally{ct=a,Fc.transition=u}}function yf(){return Ln().memoizedState}function Yv(n,i,a){var u=Ui(n);if(a={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null},xf(n))_f(i,a);else if(a=Zh(n,i,a,u),a!==null){var p=sn();Vn(a,n,u,p),wf(a,i,u)}}function Zv(n,i,a){var u=Ui(n),p={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null};if(xf(n))_f(i,p);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var S=i.lastRenderedState,C=g(S,a);if(p.hasEagerState=!0,p.eagerState=C,zn(C,S)){var D=i.interleaved;D===null?(p.next=p,Rc(i)):(p.next=D.next,D.next=p),i.interleaved=p;return}}catch{}finally{}a=Zh(n,i,p,u),a!==null&&(p=sn(),Vn(a,n,u,p),wf(a,i,u))}}function xf(n){var i=n.alternate;return n===Et||i!==null&&i===Et}function _f(n,i){to=Ma=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function wf(n,i,a){if((a&4194240)!==0){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,jl(n,a)}}var ba={readContext:Tn,useCallback:Qt,useContext:Qt,useEffect:Qt,useImperativeHandle:Qt,useInsertionEffect:Qt,useLayoutEffect:Qt,useMemo:Qt,useReducer:Qt,useRef:Qt,useState:Qt,useDebugValue:Qt,useDeferredValue:Qt,useTransition:Qt,useMutableSource:Qt,useSyncExternalStore:Qt,useId:Qt,unstable_isNewReconciler:!1},Jv={readContext:Tn,useCallback:function(n,i){return ti().memoizedState=[n,i===void 0?null:i],n},useContext:Tn,useEffect:uf,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Sa(4194308,4,ff.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Sa(4194308,4,n,i)},useInsertionEffect:function(n,i){return Sa(4,2,n,i)},useMemo:function(n,i){var a=ti();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var u=ti();return i=a!==void 0?a(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=Yv.bind(null,Et,n),[u.memoizedState,n]},useRef:function(n){var i=ti();return n={current:n},i.memoizedState=n},useState:lf,useDebugValue:Gc,useDeferredValue:function(n){return ti().memoizedState=n},useTransition:function(){var n=lf(!1),i=n[0];return n=qv.bind(null,n[1]),ti().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var u=Et,p=ti();if(xt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),Bt===null)throw Error(t(349));(ur&30)!==0||nf(u,i,a)}p.memoizedState=a;var g={value:a,getSnapshot:i};return p.queue=g,uf(sf.bind(null,u,g,n),[n]),u.flags|=2048,ro(9,rf.bind(null,u,g,a,i),void 0,null),a},useId:function(){var n=ti(),i=Bt.identifierPrefix;if(xt){var a=mi,u=pi;a=(u&~(1<<32-Fn(u)-1)).toString(32)+a,i=":"+i+"R"+a,a=no++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Xv++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Qv={readContext:Tn,useCallback:mf,useContext:Tn,useEffect:Vc,useImperativeHandle:pf,useInsertionEffect:df,useLayoutEffect:hf,useMemo:gf,useReducer:Uc,useRef:cf,useState:function(){return Uc(io)},useDebugValue:Gc,useDeferredValue:function(n){var i=Ln();return vf(i,Dt.memoizedState,n)},useTransition:function(){var n=Uc(io)[0],i=Ln().memoizedState;return[n,i]},useMutableSource:ef,useSyncExternalStore:tf,useId:yf,unstable_isNewReconciler:!1},$v={readContext:Tn,useCallback:mf,useContext:Tn,useEffect:Vc,useImperativeHandle:pf,useInsertionEffect:df,useLayoutEffect:hf,useMemo:gf,useReducer:Hc,useRef:cf,useState:function(){return Hc(io)},useDebugValue:Gc,useDeferredValue:function(n){var i=Ln();return Dt===null?i.memoizedState=n:vf(i,Dt.memoizedState,n)},useTransition:function(){var n=Hc(io)[0],i=Ln().memoizedState;return[n,i]},useMutableSource:ef,useSyncExternalStore:tf,useId:yf,unstable_isNewReconciler:!1};function On(n,i){if(n&&n.defaultProps){i=te({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function Wc(n,i,a,u){i=n.memoizedState,a=a(u,i),a=a==null?i:te({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Ta={isMounted:function(n){return(n=n._reactInternals)?et(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var u=sn(),p=Ui(n),g=vi(u,p);g.payload=i,a!=null&&(g.callback=a),i=Fi(n,g,p),i!==null&&(Vn(i,n,p,u),ya(i,n,p))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var u=sn(),p=Ui(n),g=vi(u,p);g.tag=1,g.payload=i,a!=null&&(g.callback=a),i=Fi(n,g,p),i!==null&&(Vn(i,n,p,u),ya(i,n,p))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=sn(),u=Ui(n),p=vi(a,u);p.tag=2,i!=null&&(p.callback=i),i=Fi(n,p,u),i!==null&&(Vn(i,n,u,a),ya(i,n,u))}};function Mf(n,i,a,u,p,g,S){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,g,S):i.prototype&&i.prototype.isPureReactComponent?!Ws(a,u)||!Ws(p,g):!0}function Sf(n,i,a){var u=!1,p=Di,g=i.contextType;return typeof g=="object"&&g!==null?g=Tn(g):(p=un(i)?sr:Jt.current,u=i.contextTypes,g=(u=u!=null)?Fr(n,p):Di),i=new i(a,g),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ta,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=p,n.__reactInternalMemoizedMaskedChildContext=g),i}function Ef(n,i,a,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,u),i.state!==n&&Ta.enqueueReplaceState(i,i.state,null)}function jc(n,i,a,u){var p=n.stateNode;p.props=a,p.state=n.memoizedState,p.refs={},Pc(n);var g=i.contextType;typeof g=="object"&&g!==null?p.context=Tn(g):(g=un(i)?sr:Jt.current,p.context=Fr(n,g)),p.state=n.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(Wc(n,i,g,a),p.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(i=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),i!==p.state&&Ta.enqueueReplaceState(p,p.state,null),xa(n,a,p,u),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308)}function Wr(n,i){try{var a="",u=i;do a+=De(u),u=u.return;while(u);var p=a}catch(g){p=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:i,stack:p,digest:null}}function Xc(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function qc(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Kv=typeof WeakMap=="function"?WeakMap:Map;function bf(n,i,a){a=vi(-1,a),a.tag=3,a.payload={element:null};var u=i.value;return a.callback=function(){Da||(Da=!0,lu=u),qc(n,i)},a}function Tf(n,i,a){a=vi(-1,a),a.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var p=i.value;a.payload=function(){return u(p)},a.callback=function(){qc(n,i)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){qc(n,i),typeof u!="function"&&(Bi===null?Bi=new Set([this]):Bi.add(this));var S=i.stack;this.componentDidCatch(i.value,{componentStack:S!==null?S:""})}),a}function Lf(n,i,a){var u=n.pingCache;if(u===null){u=n.pingCache=new Kv;var p=new Set;u.set(i,p)}else p=u.get(i),p===void 0&&(p=new Set,u.set(i,p));p.has(a)||(p.add(a),n=f0.bind(null,n,i,a),i.then(n,n))}function Af(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Cf(n,i,a,u,p){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=vi(-1,1),i.tag=2,Fi(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=p,n)}var e0=U.ReactCurrentOwner,dn=!1;function rn(n,i,a,u){i.child=n===null?Yh(i,null,a,u):Ur(i,n.child,a,u)}function Rf(n,i,a,u,p){a=a.render;var g=i.ref;return Vr(i,p),u=Bc(n,i,a,u,g,p),a=Oc(),n!==null&&!dn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~p,yi(n,i,p)):(xt&&a&&wc(i),i.flags|=1,rn(n,i,u,p),i.child)}function Pf(n,i,a,u,p){if(n===null){var g=a.type;return typeof g=="function"&&!mu(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=g,Nf(n,i,g,u,p)):(n=Oa(a.type,null,u,i,i.mode,p),n.ref=i.ref,n.return=i,i.child=n)}if(g=n.child,(n.lanes&p)===0){var S=g.memoizedProps;if(a=a.compare,a=a!==null?a:Ws,a(S,u)&&n.ref===i.ref)return yi(n,i,p)}return i.flags|=1,n=Vi(g,u),n.ref=i.ref,n.return=i,i.child=n}function Nf(n,i,a,u,p){if(n!==null){var g=n.memoizedProps;if(Ws(g,u)&&n.ref===i.ref)if(dn=!1,i.pendingProps=u=g,(n.lanes&p)!==0)(n.flags&131072)!==0&&(dn=!0);else return i.lanes=n.lanes,yi(n,i,p)}return Yc(n,i,a,u,p)}function Df(n,i,a){var u=i.pendingProps,p=u.children,g=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},pt(Xr,_n),_n|=a;else{if((a&1073741824)===0)return n=g!==null?g.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,pt(Xr,_n),_n|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=g!==null?g.baseLanes:a,pt(Xr,_n),_n|=u}else g!==null?(u=g.baseLanes|a,i.memoizedState=null):u=a,pt(Xr,_n),_n|=u;return rn(n,i,p,a),i.child}function If(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Yc(n,i,a,u,p){var g=un(a)?sr:Jt.current;return g=Fr(i,g),Vr(i,p),a=Bc(n,i,a,u,g,p),u=Oc(),n!==null&&!dn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~p,yi(n,i,p)):(xt&&u&&wc(i),i.flags|=1,rn(n,i,a,p),i.child)}function kf(n,i,a,u,p){if(un(a)){var g=!0;ua(i)}else g=!1;if(Vr(i,p),i.stateNode===null)Aa(n,i),Sf(i,a,u),jc(i,a,u,p),u=!0;else if(n===null){var S=i.stateNode,C=i.memoizedProps;S.props=C;var D=S.context,J=a.contextType;typeof J=="object"&&J!==null?J=Tn(J):(J=un(a)?sr:Jt.current,J=Fr(i,J));var de=a.getDerivedStateFromProps,fe=typeof de=="function"||typeof S.getSnapshotBeforeUpdate=="function";fe||typeof S.UNSAFE_componentWillReceiveProps!="function"&&typeof S.componentWillReceiveProps!="function"||(C!==u||D!==J)&&Ef(i,S,u,J),ki=!1;var ce=i.memoizedState;S.state=ce,xa(i,u,S,p),D=i.memoizedState,C!==u||ce!==D||cn.current||ki?(typeof de=="function"&&(Wc(i,a,de,u),D=i.memoizedState),(C=ki||Mf(i,a,C,u,ce,D,J))?(fe||typeof S.UNSAFE_componentWillMount!="function"&&typeof S.componentWillMount!="function"||(typeof S.componentWillMount=="function"&&S.componentWillMount(),typeof S.UNSAFE_componentWillMount=="function"&&S.UNSAFE_componentWillMount()),typeof S.componentDidMount=="function"&&(i.flags|=4194308)):(typeof S.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=D),S.props=u,S.state=D,S.context=J,u=C):(typeof S.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{S=i.stateNode,Jh(n,i),C=i.memoizedProps,J=i.type===i.elementType?C:On(i.type,C),S.props=J,fe=i.pendingProps,ce=S.context,D=a.contextType,typeof D=="object"&&D!==null?D=Tn(D):(D=un(a)?sr:Jt.current,D=Fr(i,D));var Ae=a.getDerivedStateFromProps;(de=typeof Ae=="function"||typeof S.getSnapshotBeforeUpdate=="function")||typeof S.UNSAFE_componentWillReceiveProps!="function"&&typeof S.componentWillReceiveProps!="function"||(C!==fe||ce!==D)&&Ef(i,S,u,D),ki=!1,ce=i.memoizedState,S.state=ce,xa(i,u,S,p);var Pe=i.memoizedState;C!==fe||ce!==Pe||cn.current||ki?(typeof Ae=="function"&&(Wc(i,a,Ae,u),Pe=i.memoizedState),(J=ki||Mf(i,a,J,u,ce,Pe,D)||!1)?(de||typeof S.UNSAFE_componentWillUpdate!="function"&&typeof S.componentWillUpdate!="function"||(typeof S.componentWillUpdate=="function"&&S.componentWillUpdate(u,Pe,D),typeof S.UNSAFE_componentWillUpdate=="function"&&S.UNSAFE_componentWillUpdate(u,Pe,D)),typeof S.componentDidUpdate=="function"&&(i.flags|=4),typeof S.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof S.componentDidUpdate!="function"||C===n.memoizedProps&&ce===n.memoizedState||(i.flags|=4),typeof S.getSnapshotBeforeUpdate!="function"||C===n.memoizedProps&&ce===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=Pe),S.props=u,S.state=Pe,S.context=D,u=J):(typeof S.componentDidUpdate!="function"||C===n.memoizedProps&&ce===n.memoizedState||(i.flags|=4),typeof S.getSnapshotBeforeUpdate!="function"||C===n.memoizedProps&&ce===n.memoizedState||(i.flags|=1024),u=!1)}return Zc(n,i,a,u,g,p)}function Zc(n,i,a,u,p,g){If(n,i);var S=(i.flags&128)!==0;if(!u&&!S)return p&&Oh(i,a,!1),yi(n,i,g);u=i.stateNode,e0.current=i;var C=S&&typeof a.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&S?(i.child=Ur(i,n.child,null,g),i.child=Ur(i,null,C,g)):rn(n,i,C,g),i.memoizedState=u.state,p&&Oh(i,a,!0),i.child}function Ff(n){var i=n.stateNode;i.pendingContext?zh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&zh(n,i.context,!1),Nc(n,i.containerInfo)}function zf(n,i,a,u,p){return Or(),bc(p),i.flags|=256,rn(n,i,a,u),i.child}var Jc={dehydrated:null,treeContext:null,retryLane:0};function Qc(n){return{baseLanes:n,cachePool:null,transitions:null}}function Bf(n,i,a){var u=i.pendingProps,p=St.current,g=!1,S=(i.flags&128)!==0,C;if((C=S)||(C=n!==null&&n.memoizedState===null?!1:(p&2)!==0),C?(g=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(p|=1),pt(St,p&1),n===null)return Ec(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(S=u.children,n=u.fallback,g?(u=i.mode,g=i.child,S={mode:"hidden",children:S},(u&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=S):g=Ua(S,u,0,null),n=mr(n,u,a,null),g.return=i,n.return=i,g.sibling=n,i.child=g,i.child.memoizedState=Qc(a),i.memoizedState=Jc,n):$c(i,S));if(p=n.memoizedState,p!==null&&(C=p.dehydrated,C!==null))return t0(n,i,S,u,C,p,a);if(g){g=u.fallback,S=i.mode,p=n.child,C=p.sibling;var D={mode:"hidden",children:u.children};return(S&1)===0&&i.child!==p?(u=i.child,u.childLanes=0,u.pendingProps=D,i.deletions=null):(u=Vi(p,D),u.subtreeFlags=p.subtreeFlags&14680064),C!==null?g=Vi(C,g):(g=mr(g,S,a,null),g.flags|=2),g.return=i,u.return=i,u.sibling=g,i.child=u,u=g,g=i.child,S=n.child.memoizedState,S=S===null?Qc(a):{baseLanes:S.baseLanes|a,cachePool:null,transitions:S.transitions},g.memoizedState=S,g.childLanes=n.childLanes&~a,i.memoizedState=Jc,u}return g=n.child,n=g.sibling,u=Vi(g,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=a),u.return=i,u.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=u,i.memoizedState=null,u}function $c(n,i){return i=Ua({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function La(n,i,a,u){return u!==null&&bc(u),Ur(i,n.child,null,a),n=$c(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function t0(n,i,a,u,p,g,S){if(a)return i.flags&256?(i.flags&=-257,u=Xc(Error(t(422))),La(n,i,S,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(g=u.fallback,p=i.mode,u=Ua({mode:"visible",children:u.children},p,0,null),g=mr(g,p,S,null),g.flags|=2,u.return=i,g.return=i,u.sibling=g,i.child=u,(i.mode&1)!==0&&Ur(i,n.child,null,S),i.child.memoizedState=Qc(S),i.memoizedState=Jc,g);if((i.mode&1)===0)return La(n,i,S,null);if(p.data==="$!"){if(u=p.nextSibling&&p.nextSibling.dataset,u)var C=u.dgst;return u=C,g=Error(t(419)),u=Xc(g,u,void 0),La(n,i,S,u)}if(C=(S&n.childLanes)!==0,dn||C){if(u=Bt,u!==null){switch(S&-S){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(u.suspendedLanes|S))!==0?0:p,p!==0&&p!==g.retryLane&&(g.retryLane=p,gi(n,p),Vn(u,n,p,-1))}return pu(),u=Xc(Error(t(421))),La(n,i,S,u)}return p.data==="$?"?(i.flags|=128,i.child=n.child,i=p0.bind(null,n),p._reactRetry=i,null):(n=g.treeContext,xn=Pi(p.nextSibling),yn=i,xt=!0,Bn=null,n!==null&&(En[bn++]=pi,En[bn++]=mi,En[bn++]=or,pi=n.id,mi=n.overflow,or=i),i=$c(i,u.children),i.flags|=4096,i)}function Of(n,i,a){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),Cc(n.return,i,a)}function Kc(n,i,a,u,p){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:a,tailMode:p}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=u,g.tail=a,g.tailMode=p)}function Uf(n,i,a){var u=i.pendingProps,p=u.revealOrder,g=u.tail;if(rn(n,i,u.children,a),u=St.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Of(n,a,i);else if(n.tag===19)Of(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(pt(St,u),(i.mode&1)===0)i.memoizedState=null;else switch(p){case"forwards":for(a=i.child,p=null;a!==null;)n=a.alternate,n!==null&&_a(n)===null&&(p=a),a=a.sibling;a=p,a===null?(p=i.child,i.child=null):(p=a.sibling,a.sibling=null),Kc(i,!1,p,a,g);break;case"backwards":for(a=null,p=i.child,i.child=null;p!==null;){if(n=p.alternate,n!==null&&_a(n)===null){i.child=p;break}n=p.sibling,p.sibling=a,a=p,p=n}Kc(i,!0,a,null,g);break;case"together":Kc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Aa(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function yi(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),dr|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Vi(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Vi(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function n0(n,i,a){switch(i.tag){case 3:Ff(i),Or();break;case 5:Kh(i);break;case 1:un(i.type)&&ua(i);break;case 4:Nc(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,p=i.memoizedProps.value;pt(ga,u._currentValue),u._currentValue=p;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(pt(St,St.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Bf(n,i,a):(pt(St,St.current&1),n=yi(n,i,a),n!==null?n.sibling:null);pt(St,St.current&1);break;case 19:if(u=(a&i.childLanes)!==0,(n.flags&128)!==0){if(u)return Uf(n,i,a);i.flags|=128}if(p=i.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),pt(St,St.current),u)break;return null;case 22:case 23:return i.lanes=0,Df(n,i,a)}return yi(n,i,a)}var Hf,eu,Vf,Gf;Hf=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},eu=function(){},Vf=function(n,i,a,u){var p=n.memoizedProps;if(p!==u){n=i.stateNode,cr(ei.current);var g=null;switch(a){case"input":p=Me(n,p),u=Me(n,u),g=[];break;case"select":p=te({},p,{value:void 0}),u=te({},u,{value:void 0}),g=[];break;case"textarea":p=Ie(n,p),u=Ie(n,u),g=[];break;default:typeof p.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=aa)}nn(a,u);var S;a=null;for(J in p)if(!u.hasOwnProperty(J)&&p.hasOwnProperty(J)&&p[J]!=null)if(J==="style"){var C=p[J];for(S in C)C.hasOwnProperty(S)&&(a||(a={}),a[S]="")}else J!=="dangerouslySetInnerHTML"&&J!=="children"&&J!=="suppressContentEditableWarning"&&J!=="suppressHydrationWarning"&&J!=="autoFocus"&&(s.hasOwnProperty(J)?g||(g=[]):(g=g||[]).push(J,null));for(J in u){var D=u[J];if(C=p!=null?p[J]:void 0,u.hasOwnProperty(J)&&D!==C&&(D!=null||C!=null))if(J==="style")if(C){for(S in C)!C.hasOwnProperty(S)||D&&D.hasOwnProperty(S)||(a||(a={}),a[S]="");for(S in D)D.hasOwnProperty(S)&&C[S]!==D[S]&&(a||(a={}),a[S]=D[S])}else a||(g||(g=[]),g.push(J,a)),a=D;else J==="dangerouslySetInnerHTML"?(D=D?D.__html:void 0,C=C?C.__html:void 0,D!=null&&C!==D&&(g=g||[]).push(J,D)):J==="children"?typeof D!="string"&&typeof D!="number"||(g=g||[]).push(J,""+D):J!=="suppressContentEditableWarning"&&J!=="suppressHydrationWarning"&&(s.hasOwnProperty(J)?(D!=null&&J==="onScroll"&&gt("scroll",n),g||C===D||(g=[])):(g=g||[]).push(J,D))}a&&(g=g||[]).push("style",a);var J=g;(i.updateQueue=J)&&(i.flags|=4)}},Gf=function(n,i,a,u){a!==u&&(i.flags|=4)};function so(n,i){if(!xt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function $t(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,u=0;if(i)for(var p=n.child;p!==null;)a|=p.lanes|p.childLanes,u|=p.subtreeFlags&14680064,u|=p.flags&14680064,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)a|=p.lanes|p.childLanes,u|=p.subtreeFlags,u|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=u,n.childLanes=a,i}function i0(n,i,a){var u=i.pendingProps;switch(Mc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $t(i),null;case 1:return un(i.type)&&ca(),$t(i),null;case 3:return u=i.stateNode,Gr(),vt(cn),vt(Jt),kc(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(pa(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Bn!==null&&(du(Bn),Bn=null))),eu(n,i),$t(i),null;case 5:Dc(i);var p=cr(eo.current);if(a=i.type,n!==null&&i.stateNode!=null)Vf(n,i,a,u,p),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return $t(i),null}if(n=cr(ei.current),pa(i)){u=i.stateNode,a=i.type;var g=i.memoizedProps;switch(u[Kn]=i,u[Zs]=g,n=(i.mode&1)!==0,a){case"dialog":gt("cancel",u),gt("close",u);break;case"iframe":case"object":case"embed":gt("load",u);break;case"video":case"audio":for(p=0;p<Xs.length;p++)gt(Xs[p],u);break;case"source":gt("error",u);break;case"img":case"image":case"link":gt("error",u),gt("load",u);break;case"details":gt("toggle",u);break;case"input":Fe(u,g),gt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!g.multiple},gt("invalid",u);break;case"textarea":nt(u,g),gt("invalid",u)}nn(a,g),p=null;for(var S in g)if(g.hasOwnProperty(S)){var C=g[S];S==="children"?typeof C=="string"?u.textContent!==C&&(g.suppressHydrationWarning!==!0&&oa(u.textContent,C,n),p=["children",C]):typeof C=="number"&&u.textContent!==""+C&&(g.suppressHydrationWarning!==!0&&oa(u.textContent,C,n),p=["children",""+C]):s.hasOwnProperty(S)&&C!=null&&S==="onScroll"&&gt("scroll",u)}switch(a){case"input":Qe(u),A(u,g,!0);break;case"textarea":Qe(u),O(u);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(u.onclick=aa)}u=p,i.updateQueue=u,u!==null&&(i.flags|=4)}else{S=p.nodeType===9?p:p.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ve(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=S.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=S.createElement(a,{is:u.is}):(n=S.createElement(a),a==="select"&&(S=n,u.multiple?S.multiple=!0:u.size&&(S.size=u.size))):n=S.createElementNS(n,a),n[Kn]=i,n[Zs]=u,Hf(n,i,!1,!1),i.stateNode=n;e:{switch(S=Ls(a,u),a){case"dialog":gt("cancel",n),gt("close",n),p=u;break;case"iframe":case"object":case"embed":gt("load",n),p=u;break;case"video":case"audio":for(p=0;p<Xs.length;p++)gt(Xs[p],n);p=u;break;case"source":gt("error",n),p=u;break;case"img":case"image":case"link":gt("error",n),gt("load",n),p=u;break;case"details":gt("toggle",n),p=u;break;case"input":Fe(n,u),p=Me(n,u),gt("invalid",n);break;case"option":p=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},p=te({},u,{value:void 0}),gt("invalid",n);break;case"textarea":nt(n,u),p=Ie(n,u),gt("invalid",n);break;default:p=u}nn(a,p),C=p;for(g in C)if(C.hasOwnProperty(g)){var D=C[g];g==="style"?yt(n,D):g==="dangerouslySetInnerHTML"?(D=D?D.__html:void 0,D!=null&&ue(n,D)):g==="children"?typeof D=="string"?(a!=="textarea"||D!=="")&&Ve(n,D):typeof D=="number"&&Ve(n,""+D):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(s.hasOwnProperty(g)?D!=null&&g==="onScroll"&&gt("scroll",n):D!=null&&I(n,g,D,S))}switch(a){case"input":Qe(n),A(n,u,!1);break;case"textarea":Qe(n),O(n);break;case"option":u.value!=null&&n.setAttribute("value",""+we(u.value));break;case"select":n.multiple=!!u.multiple,g=u.value,g!=null?Se(n,!!u.multiple,g,!1):u.defaultValue!=null&&Se(n,!!u.multiple,u.defaultValue,!0);break;default:typeof p.onClick=="function"&&(n.onclick=aa)}switch(a){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return $t(i),null;case 6:if(n&&i.stateNode!=null)Gf(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(a=cr(eo.current),cr(ei.current),pa(i)){if(u=i.stateNode,a=i.memoizedProps,u[Kn]=i,(g=u.nodeValue!==a)&&(n=yn,n!==null))switch(n.tag){case 3:oa(u.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&oa(u.nodeValue,a,(n.mode&1)!==0)}g&&(i.flags|=4)}else u=(a.nodeType===9?a:a.ownerDocument).createTextNode(u),u[Kn]=i,i.stateNode=u}return $t(i),null;case 13:if(vt(St),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(xt&&xn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)jh(),Or(),i.flags|=98560,g=!1;else if(g=pa(i),u!==null&&u.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[Kn]=i}else Or(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;$t(i),g=!1}else Bn!==null&&(du(Bn),Bn=null),g=!0;if(!g)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(St.current&1)!==0?It===0&&(It=3):pu())),i.updateQueue!==null&&(i.flags|=4),$t(i),null);case 4:return Gr(),eu(n,i),n===null&&qs(i.stateNode.containerInfo),$t(i),null;case 10:return Ac(i.type._context),$t(i),null;case 17:return un(i.type)&&ca(),$t(i),null;case 19:if(vt(St),g=i.memoizedState,g===null)return $t(i),null;if(u=(i.flags&128)!==0,S=g.rendering,S===null)if(u)so(g,!1);else{if(It!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(S=_a(n),S!==null){for(i.flags|=128,so(g,!1),u=S.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=a,a=i.child;a!==null;)g=a,n=u,g.flags&=14680066,S=g.alternate,S===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=S.childLanes,g.lanes=S.lanes,g.child=S.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=S.memoizedProps,g.memoizedState=S.memoizedState,g.updateQueue=S.updateQueue,g.type=S.type,n=S.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return pt(St,St.current&1|2),i.child}n=n.sibling}g.tail!==null&&Mt()>qr&&(i.flags|=128,u=!0,so(g,!1),i.lanes=4194304)}else{if(!u)if(n=_a(S),n!==null){if(i.flags|=128,u=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),so(g,!0),g.tail===null&&g.tailMode==="hidden"&&!S.alternate&&!xt)return $t(i),null}else 2*Mt()-g.renderingStartTime>qr&&a!==1073741824&&(i.flags|=128,u=!0,so(g,!1),i.lanes=4194304);g.isBackwards?(S.sibling=i.child,i.child=S):(a=g.last,a!==null?a.sibling=S:i.child=S,g.last=S)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=Mt(),i.sibling=null,a=St.current,pt(St,u?a&1|2:a&1),i):($t(i),null);case 22:case 23:return fu(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(_n&1073741824)!==0&&($t(i),i.subtreeFlags&6&&(i.flags|=8192)):$t(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function r0(n,i){switch(Mc(i),i.tag){case 1:return un(i.type)&&ca(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Gr(),vt(cn),vt(Jt),kc(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Dc(i),null;case 13:if(vt(St),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Or()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return vt(St),null;case 4:return Gr(),null;case 10:return Ac(i.type._context),null;case 22:case 23:return fu(),null;case 24:return null;default:return null}}var Ca=!1,Kt=!1,s0=typeof WeakSet=="function"?WeakSet:Set,Re=null;function jr(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(u){At(n,i,u)}else a.current=null}function tu(n,i,a){try{a()}catch(u){At(n,i,u)}}var Wf=!1;function o0(n,i){if(fc=Zo,n=wh(),sc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var u=a.getSelection&&a.getSelection();if(u&&u.rangeCount!==0){a=u.anchorNode;var p=u.anchorOffset,g=u.focusNode;u=u.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var S=0,C=-1,D=-1,J=0,de=0,fe=n,ce=null;t:for(;;){for(var Ae;fe!==a||p!==0&&fe.nodeType!==3||(C=S+p),fe!==g||u!==0&&fe.nodeType!==3||(D=S+u),fe.nodeType===3&&(S+=fe.nodeValue.length),(Ae=fe.firstChild)!==null;)ce=fe,fe=Ae;for(;;){if(fe===n)break t;if(ce===a&&++J===p&&(C=S),ce===g&&++de===u&&(D=S),(Ae=fe.nextSibling)!==null)break;fe=ce,ce=fe.parentNode}fe=Ae}a=C===-1||D===-1?null:{start:C,end:D}}else a=null}a=a||{start:0,end:0}}else a=null;for(pc={focusedElem:n,selectionRange:a},Zo=!1,Re=i;Re!==null;)if(i=Re,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Re=n;else for(;Re!==null;){i=Re;try{var Pe=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Pe!==null){var Ne=Pe.memoizedProps,Ct=Pe.memoizedState,H=i.stateNode,k=H.getSnapshotBeforeUpdate(i.elementType===i.type?Ne:On(i.type,Ne),Ct);H.__reactInternalSnapshotBeforeUpdate=k}break;case 3:var j=i.stateNode.containerInfo;j.nodeType===1?j.textContent="":j.nodeType===9&&j.documentElement&&j.removeChild(j.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(pe){At(i,i.return,pe)}if(n=i.sibling,n!==null){n.return=i.return,Re=n;break}Re=i.return}return Pe=Wf,Wf=!1,Pe}function oo(n,i,a){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var p=u=u.next;do{if((p.tag&n)===n){var g=p.destroy;p.destroy=void 0,g!==void 0&&tu(i,a,g)}p=p.next}while(p!==u)}}function Ra(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var u=a.create;a.destroy=u()}a=a.next}while(a!==i)}}function nu(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function jf(n){var i=n.alternate;i!==null&&(n.alternate=null,jf(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Kn],delete i[Zs],delete i[yc],delete i[Vv],delete i[Gv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Xf(n){return n.tag===5||n.tag===3||n.tag===4}function qf(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Xf(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function iu(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=aa));else if(u!==4&&(n=n.child,n!==null))for(iu(n,i,a),n=n.sibling;n!==null;)iu(n,i,a),n=n.sibling}function ru(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(ru(n,i,a),n=n.sibling;n!==null;)ru(n,i,a),n=n.sibling}var Wt=null,Un=!1;function zi(n,i,a){for(a=a.child;a!==null;)Yf(n,i,a),a=a.sibling}function Yf(n,i,a){if($n&&typeof $n.onCommitFiberUnmount=="function")try{$n.onCommitFiberUnmount(Go,a)}catch{}switch(a.tag){case 5:Kt||jr(a,i);case 6:var u=Wt,p=Un;Wt=null,zi(n,i,a),Wt=u,Un=p,Wt!==null&&(Un?(n=Wt,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Wt.removeChild(a.stateNode));break;case 18:Wt!==null&&(Un?(n=Wt,a=a.stateNode,n.nodeType===8?vc(n.parentNode,a):n.nodeType===1&&vc(n,a),Bs(n)):vc(Wt,a.stateNode));break;case 4:u=Wt,p=Un,Wt=a.stateNode.containerInfo,Un=!0,zi(n,i,a),Wt=u,Un=p;break;case 0:case 11:case 14:case 15:if(!Kt&&(u=a.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){p=u=u.next;do{var g=p,S=g.destroy;g=g.tag,S!==void 0&&((g&2)!==0||(g&4)!==0)&&tu(a,i,S),p=p.next}while(p!==u)}zi(n,i,a);break;case 1:if(!Kt&&(jr(a,i),u=a.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=a.memoizedProps,u.state=a.memoizedState,u.componentWillUnmount()}catch(C){At(a,i,C)}zi(n,i,a);break;case 21:zi(n,i,a);break;case 22:a.mode&1?(Kt=(u=Kt)||a.memoizedState!==null,zi(n,i,a),Kt=u):zi(n,i,a);break;default:zi(n,i,a)}}function Zf(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new s0),i.forEach(function(u){var p=m0.bind(null,n,u);a.has(u)||(a.add(u),u.then(p,p))})}}function Hn(n,i){var a=i.deletions;if(a!==null)for(var u=0;u<a.length;u++){var p=a[u];try{var g=n,S=i,C=S;e:for(;C!==null;){switch(C.tag){case 5:Wt=C.stateNode,Un=!1;break e;case 3:Wt=C.stateNode.containerInfo,Un=!0;break e;case 4:Wt=C.stateNode.containerInfo,Un=!0;break e}C=C.return}if(Wt===null)throw Error(t(160));Yf(g,S,p),Wt=null,Un=!1;var D=p.alternate;D!==null&&(D.return=null),p.return=null}catch(J){At(p,i,J)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Jf(i,n),i=i.sibling}function Jf(n,i){var a=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Hn(i,n),ni(n),u&4){try{oo(3,n,n.return),Ra(3,n)}catch(Ne){At(n,n.return,Ne)}try{oo(5,n,n.return)}catch(Ne){At(n,n.return,Ne)}}break;case 1:Hn(i,n),ni(n),u&512&&a!==null&&jr(a,a.return);break;case 5:if(Hn(i,n),ni(n),u&512&&a!==null&&jr(a,a.return),n.flags&32){var p=n.stateNode;try{Ve(p,"")}catch(Ne){At(n,n.return,Ne)}}if(u&4&&(p=n.stateNode,p!=null)){var g=n.memoizedProps,S=a!==null?a.memoizedProps:g,C=n.type,D=n.updateQueue;if(n.updateQueue=null,D!==null)try{C==="input"&&g.type==="radio"&&g.name!=null&&Te(p,g),Ls(C,S);var J=Ls(C,g);for(S=0;S<D.length;S+=2){var de=D[S],fe=D[S+1];de==="style"?yt(p,fe):de==="dangerouslySetInnerHTML"?ue(p,fe):de==="children"?Ve(p,fe):I(p,de,fe,J)}switch(C){case"input":P(p,g);break;case"textarea":Xe(p,g);break;case"select":var ce=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!g.multiple;var Ae=g.value;Ae!=null?Se(p,!!g.multiple,Ae,!1):ce!==!!g.multiple&&(g.defaultValue!=null?Se(p,!!g.multiple,g.defaultValue,!0):Se(p,!!g.multiple,g.multiple?[]:"",!1))}p[Zs]=g}catch(Ne){At(n,n.return,Ne)}}break;case 6:if(Hn(i,n),ni(n),u&4){if(n.stateNode===null)throw Error(t(162));p=n.stateNode,g=n.memoizedProps;try{p.nodeValue=g}catch(Ne){At(n,n.return,Ne)}}break;case 3:if(Hn(i,n),ni(n),u&4&&a!==null&&a.memoizedState.isDehydrated)try{Bs(i.containerInfo)}catch(Ne){At(n,n.return,Ne)}break;case 4:Hn(i,n),ni(n);break;case 13:Hn(i,n),ni(n),p=n.child,p.flags&8192&&(g=p.memoizedState!==null,p.stateNode.isHidden=g,!g||p.alternate!==null&&p.alternate.memoizedState!==null||(au=Mt())),u&4&&Zf(n);break;case 22:if(de=a!==null&&a.memoizedState!==null,n.mode&1?(Kt=(J=Kt)||de,Hn(i,n),Kt=J):Hn(i,n),ni(n),u&8192){if(J=n.memoizedState!==null,(n.stateNode.isHidden=J)&&!de&&(n.mode&1)!==0)for(Re=n,de=n.child;de!==null;){for(fe=Re=de;Re!==null;){switch(ce=Re,Ae=ce.child,ce.tag){case 0:case 11:case 14:case 15:oo(4,ce,ce.return);break;case 1:jr(ce,ce.return);var Pe=ce.stateNode;if(typeof Pe.componentWillUnmount=="function"){u=ce,a=ce.return;try{i=u,Pe.props=i.memoizedProps,Pe.state=i.memoizedState,Pe.componentWillUnmount()}catch(Ne){At(u,a,Ne)}}break;case 5:jr(ce,ce.return);break;case 22:if(ce.memoizedState!==null){Kf(fe);continue}}Ae!==null?(Ae.return=ce,Re=Ae):Kf(fe)}de=de.sibling}e:for(de=null,fe=n;;){if(fe.tag===5){if(de===null){de=fe;try{p=fe.stateNode,J?(g=p.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(C=fe.stateNode,D=fe.memoizedProps.style,S=D!=null&&D.hasOwnProperty("display")?D.display:null,C.style.display=Jn("display",S))}catch(Ne){At(n,n.return,Ne)}}}else if(fe.tag===6){if(de===null)try{fe.stateNode.nodeValue=J?"":fe.memoizedProps}catch(Ne){At(n,n.return,Ne)}}else if((fe.tag!==22&&fe.tag!==23||fe.memoizedState===null||fe===n)&&fe.child!==null){fe.child.return=fe,fe=fe.child;continue}if(fe===n)break e;for(;fe.sibling===null;){if(fe.return===null||fe.return===n)break e;de===fe&&(de=null),fe=fe.return}de===fe&&(de=null),fe.sibling.return=fe.return,fe=fe.sibling}}break;case 19:Hn(i,n),ni(n),u&4&&Zf(n);break;case 21:break;default:Hn(i,n),ni(n)}}function ni(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Xf(a)){var u=a;break e}a=a.return}throw Error(t(160))}switch(u.tag){case 5:var p=u.stateNode;u.flags&32&&(Ve(p,""),u.flags&=-33);var g=qf(n);ru(n,g,p);break;case 3:case 4:var S=u.stateNode.containerInfo,C=qf(n);iu(n,C,S);break;default:throw Error(t(161))}}catch(D){At(n,n.return,D)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function a0(n,i,a){Re=n,Qf(n)}function Qf(n,i,a){for(var u=(n.mode&1)!==0;Re!==null;){var p=Re,g=p.child;if(p.tag===22&&u){var S=p.memoizedState!==null||Ca;if(!S){var C=p.alternate,D=C!==null&&C.memoizedState!==null||Kt;C=Ca;var J=Kt;if(Ca=S,(Kt=D)&&!J)for(Re=p;Re!==null;)S=Re,D=S.child,S.tag===22&&S.memoizedState!==null?ep(p):D!==null?(D.return=S,Re=D):ep(p);for(;g!==null;)Re=g,Qf(g),g=g.sibling;Re=p,Ca=C,Kt=J}$f(n)}else(p.subtreeFlags&8772)!==0&&g!==null?(g.return=p,Re=g):$f(n)}}function $f(n){for(;Re!==null;){var i=Re;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Kt||Ra(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!Kt)if(a===null)u.componentDidMount();else{var p=i.elementType===i.type?a.memoizedProps:On(i.type,a.memoizedProps);u.componentDidUpdate(p,a.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&$h(i,g,u);break;case 3:var S=i.updateQueue;if(S!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}$h(i,S,a)}break;case 5:var C=i.stateNode;if(a===null&&i.flags&4){a=C;var D=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":D.autoFocus&&a.focus();break;case"img":D.src&&(a.src=D.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var J=i.alternate;if(J!==null){var de=J.memoizedState;if(de!==null){var fe=de.dehydrated;fe!==null&&Bs(fe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Kt||i.flags&512&&nu(i)}catch(ce){At(i,i.return,ce)}}if(i===n){Re=null;break}if(a=i.sibling,a!==null){a.return=i.return,Re=a;break}Re=i.return}}function Kf(n){for(;Re!==null;){var i=Re;if(i===n){Re=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Re=a;break}Re=i.return}}function ep(n){for(;Re!==null;){var i=Re;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Ra(4,i)}catch(D){At(i,a,D)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var p=i.return;try{u.componentDidMount()}catch(D){At(i,p,D)}}var g=i.return;try{nu(i)}catch(D){At(i,g,D)}break;case 5:var S=i.return;try{nu(i)}catch(D){At(i,S,D)}}}catch(D){At(i,i.return,D)}if(i===n){Re=null;break}var C=i.sibling;if(C!==null){C.return=i.return,Re=C;break}Re=i.return}}var l0=Math.ceil,Pa=U.ReactCurrentDispatcher,su=U.ReactCurrentOwner,An=U.ReactCurrentBatchConfig,st=0,Bt=null,Pt=null,jt=0,_n=0,Xr=Ni(0),It=0,ao=null,dr=0,Na=0,ou=0,lo=null,hn=null,au=0,qr=1/0,xi=null,Da=!1,lu=null,Bi=null,Ia=!1,Oi=null,ka=0,co=0,cu=null,Fa=-1,za=0;function sn(){return(st&6)!==0?Mt():Fa!==-1?Fa:Fa=Mt()}function Ui(n){return(n.mode&1)===0?1:(st&2)!==0&&jt!==0?jt&-jt:jv.transition!==null?(za===0&&(za=Xd()),za):(n=ct,n!==0||(n=window.event,n=n===void 0?16:th(n.type)),n)}function Vn(n,i,a,u){if(50<co)throw co=0,cu=null,Error(t(185));Ds(n,a,u),((st&2)===0||n!==Bt)&&(n===Bt&&((st&2)===0&&(Na|=a),It===4&&Hi(n,jt)),fn(n,u),a===1&&st===0&&(i.mode&1)===0&&(qr=Mt()+500,da&&Ii()))}function fn(n,i){var a=n.callbackNode;jg(n,i);var u=Xo(n,n===Bt?jt:0);if(u===0)a!==null&&Tr(a),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(a!=null&&Tr(a),i===1)n.tag===0?Wv(np.bind(null,n)):Uh(np.bind(null,n)),Uv(function(){(st&6)===0&&Ii()}),a=null;else{switch(qd(u)){case 1:a=Vl;break;case 4:a=Wd;break;case 16:a=Vo;break;case 536870912:a=jd;break;default:a=Vo}a=up(a,tp.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function tp(n,i){if(Fa=-1,za=0,(st&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Yr()&&n.callbackNode!==a)return null;var u=Xo(n,n===Bt?jt:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||i)i=Ba(n,u);else{i=u;var p=st;st|=2;var g=rp();(Bt!==n||jt!==i)&&(xi=null,qr=Mt()+500,fr(n,i));do try{d0();break}catch(C){ip(n,C)}while(!0);Lc(),Pa.current=g,st=p,Pt!==null?i=0:(Bt=null,jt=0,i=It)}if(i!==0){if(i===2&&(p=Gl(n),p!==0&&(u=p,i=uu(n,p))),i===1)throw a=ao,fr(n,0),Hi(n,u),fn(n,Mt()),a;if(i===6)Hi(n,u);else{if(p=n.current.alternate,(u&30)===0&&!c0(p)&&(i=Ba(n,u),i===2&&(g=Gl(n),g!==0&&(u=g,i=uu(n,g))),i===1))throw a=ao,fr(n,0),Hi(n,u),fn(n,Mt()),a;switch(n.finishedWork=p,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:pr(n,hn,xi);break;case 3:if(Hi(n,u),(u&130023424)===u&&(i=au+500-Mt(),10<i)){if(Xo(n,0)!==0)break;if(p=n.suspendedLanes,(p&u)!==u){sn(),n.pingedLanes|=n.suspendedLanes&p;break}n.timeoutHandle=gc(pr.bind(null,n,hn,xi),i);break}pr(n,hn,xi);break;case 4:if(Hi(n,u),(u&4194240)===u)break;for(i=n.eventTimes,p=-1;0<u;){var S=31-Fn(u);g=1<<S,S=i[S],S>p&&(p=S),u&=~g}if(u=p,u=Mt()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*l0(u/1960))-u,10<u){n.timeoutHandle=gc(pr.bind(null,n,hn,xi),u);break}pr(n,hn,xi);break;case 5:pr(n,hn,xi);break;default:throw Error(t(329))}}}return fn(n,Mt()),n.callbackNode===a?tp.bind(null,n):null}function uu(n,i){var a=lo;return n.current.memoizedState.isDehydrated&&(fr(n,i).flags|=256),n=Ba(n,i),n!==2&&(i=hn,hn=a,i!==null&&du(i)),n}function du(n){hn===null?hn=n:hn.push.apply(hn,n)}function c0(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var u=0;u<a.length;u++){var p=a[u],g=p.getSnapshot;p=p.value;try{if(!zn(g(),p))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Hi(n,i){for(i&=~ou,i&=~Na,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Fn(i),u=1<<a;n[a]=-1,i&=~u}}function np(n){if((st&6)!==0)throw Error(t(327));Yr();var i=Xo(n,0);if((i&1)===0)return fn(n,Mt()),null;var a=Ba(n,i);if(n.tag!==0&&a===2){var u=Gl(n);u!==0&&(i=u,a=uu(n,u))}if(a===1)throw a=ao,fr(n,0),Hi(n,i),fn(n,Mt()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,pr(n,hn,xi),fn(n,Mt()),null}function hu(n,i){var a=st;st|=1;try{return n(i)}finally{st=a,st===0&&(qr=Mt()+500,da&&Ii())}}function hr(n){Oi!==null&&Oi.tag===0&&(st&6)===0&&Yr();var i=st;st|=1;var a=An.transition,u=ct;try{if(An.transition=null,ct=1,n)return n()}finally{ct=u,An.transition=a,st=i,(st&6)===0&&Ii()}}function fu(){_n=Xr.current,vt(Xr)}function fr(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Ov(a)),Pt!==null)for(a=Pt.return;a!==null;){var u=a;switch(Mc(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&ca();break;case 3:Gr(),vt(cn),vt(Jt),kc();break;case 5:Dc(u);break;case 4:Gr();break;case 13:vt(St);break;case 19:vt(St);break;case 10:Ac(u.type._context);break;case 22:case 23:fu()}a=a.return}if(Bt=n,Pt=n=Vi(n.current,null),jt=_n=i,It=0,ao=null,ou=Na=dr=0,hn=lo=null,lr!==null){for(i=0;i<lr.length;i++)if(a=lr[i],u=a.interleaved,u!==null){a.interleaved=null;var p=u.next,g=a.pending;if(g!==null){var S=g.next;g.next=p,u.next=S}a.pending=u}lr=null}return n}function ip(n,i){do{var a=Pt;try{if(Lc(),wa.current=ba,Ma){for(var u=Et.memoizedState;u!==null;){var p=u.queue;p!==null&&(p.pending=null),u=u.next}Ma=!1}if(ur=0,zt=Dt=Et=null,to=!1,no=0,su.current=null,a===null||a.return===null){It=1,ao=i,Pt=null;break}e:{var g=n,S=a.return,C=a,D=i;if(i=jt,C.flags|=32768,D!==null&&typeof D=="object"&&typeof D.then=="function"){var J=D,de=C,fe=de.tag;if((de.mode&1)===0&&(fe===0||fe===11||fe===15)){var ce=de.alternate;ce?(de.updateQueue=ce.updateQueue,de.memoizedState=ce.memoizedState,de.lanes=ce.lanes):(de.updateQueue=null,de.memoizedState=null)}var Ae=Af(S);if(Ae!==null){Ae.flags&=-257,Cf(Ae,S,C,g,i),Ae.mode&1&&Lf(g,J,i),i=Ae,D=J;var Pe=i.updateQueue;if(Pe===null){var Ne=new Set;Ne.add(D),i.updateQueue=Ne}else Pe.add(D);break e}else{if((i&1)===0){Lf(g,J,i),pu();break e}D=Error(t(426))}}else if(xt&&C.mode&1){var Ct=Af(S);if(Ct!==null){(Ct.flags&65536)===0&&(Ct.flags|=256),Cf(Ct,S,C,g,i),bc(Wr(D,C));break e}}g=D=Wr(D,C),It!==4&&(It=2),lo===null?lo=[g]:lo.push(g),g=S;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var H=bf(g,D,i);Qh(g,H);break e;case 1:C=D;var k=g.type,j=g.stateNode;if((g.flags&128)===0&&(typeof k.getDerivedStateFromError=="function"||j!==null&&typeof j.componentDidCatch=="function"&&(Bi===null||!Bi.has(j)))){g.flags|=65536,i&=-i,g.lanes|=i;var pe=Tf(g,C,i);Qh(g,pe);break e}}g=g.return}while(g!==null)}op(a)}catch(ke){i=ke,Pt===a&&a!==null&&(Pt=a=a.return);continue}break}while(!0)}function rp(){var n=Pa.current;return Pa.current=ba,n===null?ba:n}function pu(){(It===0||It===3||It===2)&&(It=4),Bt===null||(dr&268435455)===0&&(Na&268435455)===0||Hi(Bt,jt)}function Ba(n,i){var a=st;st|=2;var u=rp();(Bt!==n||jt!==i)&&(xi=null,fr(n,i));do try{u0();break}catch(p){ip(n,p)}while(!0);if(Lc(),st=a,Pa.current=u,Pt!==null)throw Error(t(261));return Bt=null,jt=0,It}function u0(){for(;Pt!==null;)sp(Pt)}function d0(){for(;Pt!==null&&!Zt();)sp(Pt)}function sp(n){var i=cp(n.alternate,n,_n);n.memoizedProps=n.pendingProps,i===null?op(n):Pt=i,su.current=null}function op(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=i0(a,i,_n),a!==null){Pt=a;return}}else{if(a=r0(a,i),a!==null){a.flags&=32767,Pt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{It=6,Pt=null;return}}if(i=i.sibling,i!==null){Pt=i;return}Pt=i=n}while(i!==null);It===0&&(It=5)}function pr(n,i,a){var u=ct,p=An.transition;try{An.transition=null,ct=1,h0(n,i,a,u)}finally{An.transition=p,ct=u}return null}function h0(n,i,a,u){do Yr();while(Oi!==null);if((st&6)!==0)throw Error(t(327));a=n.finishedWork;var p=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=a.lanes|a.childLanes;if(Xg(n,g),n===Bt&&(Pt=Bt=null,jt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Ia||(Ia=!0,up(Vo,function(){return Yr(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=An.transition,An.transition=null;var S=ct;ct=1;var C=st;st|=4,su.current=null,o0(n,a),Jf(a,n),Nv(pc),Zo=!!fc,pc=fc=null,n.current=a,a0(a),kn(),st=C,ct=S,An.transition=g}else n.current=a;if(Ia&&(Ia=!1,Oi=n,ka=p),g=n.pendingLanes,g===0&&(Bi=null),Ug(a.stateNode),fn(n,Mt()),i!==null)for(u=n.onRecoverableError,a=0;a<i.length;a++)p=i[a],u(p.value,{componentStack:p.stack,digest:p.digest});if(Da)throw Da=!1,n=lu,lu=null,n;return(ka&1)!==0&&n.tag!==0&&Yr(),g=n.pendingLanes,(g&1)!==0?n===cu?co++:(co=0,cu=n):co=0,Ii(),null}function Yr(){if(Oi!==null){var n=qd(ka),i=An.transition,a=ct;try{if(An.transition=null,ct=16>n?16:n,Oi===null)var u=!1;else{if(n=Oi,Oi=null,ka=0,(st&6)!==0)throw Error(t(331));var p=st;for(st|=4,Re=n.current;Re!==null;){var g=Re,S=g.child;if((Re.flags&16)!==0){var C=g.deletions;if(C!==null){for(var D=0;D<C.length;D++){var J=C[D];for(Re=J;Re!==null;){var de=Re;switch(de.tag){case 0:case 11:case 15:oo(8,de,g)}var fe=de.child;if(fe!==null)fe.return=de,Re=fe;else for(;Re!==null;){de=Re;var ce=de.sibling,Ae=de.return;if(jf(de),de===J){Re=null;break}if(ce!==null){ce.return=Ae,Re=ce;break}Re=Ae}}}var Pe=g.alternate;if(Pe!==null){var Ne=Pe.child;if(Ne!==null){Pe.child=null;do{var Ct=Ne.sibling;Ne.sibling=null,Ne=Ct}while(Ne!==null)}}Re=g}}if((g.subtreeFlags&2064)!==0&&S!==null)S.return=g,Re=S;else e:for(;Re!==null;){if(g=Re,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:oo(9,g,g.return)}var H=g.sibling;if(H!==null){H.return=g.return,Re=H;break e}Re=g.return}}var k=n.current;for(Re=k;Re!==null;){S=Re;var j=S.child;if((S.subtreeFlags&2064)!==0&&j!==null)j.return=S,Re=j;else e:for(S=k;Re!==null;){if(C=Re,(C.flags&2048)!==0)try{switch(C.tag){case 0:case 11:case 15:Ra(9,C)}}catch(ke){At(C,C.return,ke)}if(C===S){Re=null;break e}var pe=C.sibling;if(pe!==null){pe.return=C.return,Re=pe;break e}Re=C.return}}if(st=p,Ii(),$n&&typeof $n.onPostCommitFiberRoot=="function")try{$n.onPostCommitFiberRoot(Go,n)}catch{}u=!0}return u}finally{ct=a,An.transition=i}}return!1}function ap(n,i,a){i=Wr(a,i),i=bf(n,i,1),n=Fi(n,i,1),i=sn(),n!==null&&(Ds(n,1,i),fn(n,i))}function At(n,i,a){if(n.tag===3)ap(n,n,a);else for(;i!==null;){if(i.tag===3){ap(i,n,a);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Bi===null||!Bi.has(u))){n=Wr(a,n),n=Tf(i,n,1),i=Fi(i,n,1),n=sn(),i!==null&&(Ds(i,1,n),fn(i,n));break}}i=i.return}}function f0(n,i,a){var u=n.pingCache;u!==null&&u.delete(i),i=sn(),n.pingedLanes|=n.suspendedLanes&a,Bt===n&&(jt&a)===a&&(It===4||It===3&&(jt&130023424)===jt&&500>Mt()-au?fr(n,0):ou|=a),fn(n,i)}function lp(n,i){i===0&&((n.mode&1)===0?i=1:(i=jo,jo<<=1,(jo&130023424)===0&&(jo=4194304)));var a=sn();n=gi(n,i),n!==null&&(Ds(n,i,a),fn(n,a))}function p0(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),lp(n,a)}function m0(n,i){var a=0;switch(n.tag){case 13:var u=n.stateNode,p=n.memoizedState;p!==null&&(a=p.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),lp(n,a)}var cp;cp=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||cn.current)dn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return dn=!1,n0(n,i,a);dn=(n.flags&131072)!==0}else dn=!1,xt&&(i.flags&1048576)!==0&&Hh(i,fa,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;Aa(n,i),n=i.pendingProps;var p=Fr(i,Jt.current);Vr(i,a),p=Bc(null,i,u,n,p,a);var g=Oc();return i.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,un(u)?(g=!0,ua(i)):g=!1,i.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,Pc(i),p.updater=Ta,i.stateNode=p,p._reactInternals=i,jc(i,u,n,a),i=Zc(null,i,u,!0,g,a)):(i.tag=0,xt&&g&&wc(i),rn(null,i,p,a),i=i.child),i;case 16:u=i.elementType;e:{switch(Aa(n,i),n=i.pendingProps,p=u._init,u=p(u._payload),i.type=u,p=i.tag=v0(u),n=On(u,n),p){case 0:i=Yc(null,i,u,n,a);break e;case 1:i=kf(null,i,u,n,a);break e;case 11:i=Rf(null,i,u,n,a);break e;case 14:i=Pf(null,i,u,On(u.type,n),a);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,p=i.pendingProps,p=i.elementType===u?p:On(u,p),Yc(n,i,u,p,a);case 1:return u=i.type,p=i.pendingProps,p=i.elementType===u?p:On(u,p),kf(n,i,u,p,a);case 3:e:{if(Ff(i),n===null)throw Error(t(387));u=i.pendingProps,g=i.memoizedState,p=g.element,Jh(n,i),xa(i,u,null,a);var S=i.memoizedState;if(u=S.element,g.isDehydrated)if(g={element:u,isDehydrated:!1,cache:S.cache,pendingSuspenseBoundaries:S.pendingSuspenseBoundaries,transitions:S.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){p=Wr(Error(t(423)),i),i=zf(n,i,u,a,p);break e}else if(u!==p){p=Wr(Error(t(424)),i),i=zf(n,i,u,a,p);break e}else for(xn=Pi(i.stateNode.containerInfo.firstChild),yn=i,xt=!0,Bn=null,a=Yh(i,null,u,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Or(),u===p){i=yi(n,i,a);break e}rn(n,i,u,a)}i=i.child}return i;case 5:return Kh(i),n===null&&Ec(i),u=i.type,p=i.pendingProps,g=n!==null?n.memoizedProps:null,S=p.children,mc(u,p)?S=null:g!==null&&mc(u,g)&&(i.flags|=32),If(n,i),rn(n,i,S,a),i.child;case 6:return n===null&&Ec(i),null;case 13:return Bf(n,i,a);case 4:return Nc(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=Ur(i,null,u,a):rn(n,i,u,a),i.child;case 11:return u=i.type,p=i.pendingProps,p=i.elementType===u?p:On(u,p),Rf(n,i,u,p,a);case 7:return rn(n,i,i.pendingProps,a),i.child;case 8:return rn(n,i,i.pendingProps.children,a),i.child;case 12:return rn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(u=i.type._context,p=i.pendingProps,g=i.memoizedProps,S=p.value,pt(ga,u._currentValue),u._currentValue=S,g!==null)if(zn(g.value,S)){if(g.children===p.children&&!cn.current){i=yi(n,i,a);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var C=g.dependencies;if(C!==null){S=g.child;for(var D=C.firstContext;D!==null;){if(D.context===u){if(g.tag===1){D=vi(-1,a&-a),D.tag=2;var J=g.updateQueue;if(J!==null){J=J.shared;var de=J.pending;de===null?D.next=D:(D.next=de.next,de.next=D),J.pending=D}}g.lanes|=a,D=g.alternate,D!==null&&(D.lanes|=a),Cc(g.return,a,i),C.lanes|=a;break}D=D.next}}else if(g.tag===10)S=g.type===i.type?null:g.child;else if(g.tag===18){if(S=g.return,S===null)throw Error(t(341));S.lanes|=a,C=S.alternate,C!==null&&(C.lanes|=a),Cc(S,a,i),S=g.sibling}else S=g.child;if(S!==null)S.return=g;else for(S=g;S!==null;){if(S===i){S=null;break}if(g=S.sibling,g!==null){g.return=S.return,S=g;break}S=S.return}g=S}rn(n,i,p.children,a),i=i.child}return i;case 9:return p=i.type,u=i.pendingProps.children,Vr(i,a),p=Tn(p),u=u(p),i.flags|=1,rn(n,i,u,a),i.child;case 14:return u=i.type,p=On(u,i.pendingProps),p=On(u.type,p),Pf(n,i,u,p,a);case 15:return Nf(n,i,i.type,i.pendingProps,a);case 17:return u=i.type,p=i.pendingProps,p=i.elementType===u?p:On(u,p),Aa(n,i),i.tag=1,un(u)?(n=!0,ua(i)):n=!1,Vr(i,a),Sf(i,u,p),jc(i,u,p,a),Zc(null,i,u,!0,n,a);case 19:return Uf(n,i,a);case 22:return Df(n,i,a)}throw Error(t(156,i.tag))};function up(n,i){return wt(n,i)}function g0(n,i,a,u){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Cn(n,i,a,u){return new g0(n,i,a,u)}function mu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function v0(n){if(typeof n=="function")return mu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ie)return 11;if(n===G)return 14}return 2}function Vi(n,i){var a=n.alternate;return a===null?(a=Cn(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Oa(n,i,a,u,p,g){var S=2;if(u=n,typeof n=="function")mu(n)&&(S=1);else if(typeof n=="string")S=5;else e:switch(n){case W:return mr(a.children,p,g,i);case ee:S=8,p|=8;break;case ne:return n=Cn(12,a,i,p|2),n.elementType=ne,n.lanes=g,n;case F:return n=Cn(13,a,i,p),n.elementType=F,n.lanes=g,n;case V:return n=Cn(19,a,i,p),n.elementType=V,n.lanes=g,n;case se:return Ua(a,p,g,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case oe:S=10;break e;case he:S=9;break e;case ie:S=11;break e;case G:S=14;break e;case B:S=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Cn(S,a,i,p),i.elementType=n,i.type=u,i.lanes=g,i}function mr(n,i,a,u){return n=Cn(7,n,u,i),n.lanes=a,n}function Ua(n,i,a,u){return n=Cn(22,n,u,i),n.elementType=se,n.lanes=a,n.stateNode={isHidden:!1},n}function gu(n,i,a){return n=Cn(6,n,null,i),n.lanes=a,n}function vu(n,i,a){return i=Cn(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function y0(n,i,a,u,p){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wl(0),this.expirationTimes=Wl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wl(0),this.identifierPrefix=u,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function yu(n,i,a,u,p,g,S,C,D){return n=new y0(n,i,a,C,D),i===1?(i=1,g===!0&&(i|=8)):i=0,g=Cn(3,null,null,i),n.current=g,g.stateNode=n,g.memoizedState={element:u,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Pc(g),n}function x0(n,i,a){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:T,key:u==null?null:""+u,children:n,containerInfo:i,implementation:a}}function dp(n){if(!n)return Di;n=n._reactInternals;e:{if(et(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(un(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(un(a))return Bh(n,a,i)}return i}function hp(n,i,a,u,p,g,S,C,D){return n=yu(a,u,!0,n,p,g,S,C,D),n.context=dp(null),a=n.current,u=sn(),p=Ui(a),g=vi(u,p),g.callback=i??null,Fi(a,g,p),n.current.lanes=p,Ds(n,p,u),fn(n,u),n}function Ha(n,i,a,u){var p=i.current,g=sn(),S=Ui(p);return a=dp(a),i.context===null?i.context=a:i.pendingContext=a,i=vi(g,S),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=Fi(p,i,S),n!==null&&(Vn(n,p,S,g),ya(n,p,S)),S}function Va(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function fp(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function xu(n,i){fp(n,i),(n=n.alternate)&&fp(n,i)}function _0(){return null}var pp=typeof reportError=="function"?reportError:function(n){console.error(n)};function _u(n){this._internalRoot=n}Ga.prototype.render=_u.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Ha(n,i,null,null)},Ga.prototype.unmount=_u.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;hr(function(){Ha(null,n,null,null)}),i[hi]=null}};function Ga(n){this._internalRoot=n}Ga.prototype.unstable_scheduleHydration=function(n){if(n){var i=Jd();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Ai.length&&i!==0&&i<Ai[a].priority;a++);Ai.splice(a,0,n),a===0&&Kd(n)}};function wu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Wa(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function mp(){}function w0(n,i,a,u,p){if(p){if(typeof u=="function"){var g=u;u=function(){var J=Va(S);g.call(J)}}var S=hp(i,u,n,0,null,!1,!1,"",mp);return n._reactRootContainer=S,n[hi]=S.current,qs(n.nodeType===8?n.parentNode:n),hr(),S}for(;p=n.lastChild;)n.removeChild(p);if(typeof u=="function"){var C=u;u=function(){var J=Va(D);C.call(J)}}var D=yu(n,0,!1,null,null,!1,!1,"",mp);return n._reactRootContainer=D,n[hi]=D.current,qs(n.nodeType===8?n.parentNode:n),hr(function(){Ha(i,D,a,u)}),D}function ja(n,i,a,u,p){var g=a._reactRootContainer;if(g){var S=g;if(typeof p=="function"){var C=p;p=function(){var D=Va(S);C.call(D)}}Ha(i,S,n,p)}else S=w0(a,i,n,p,u);return Va(S)}Yd=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Ns(i.pendingLanes);a!==0&&(jl(i,a|1),fn(i,Mt()),(st&6)===0&&(qr=Mt()+500,Ii()))}break;case 13:hr(function(){var u=gi(n,1);if(u!==null){var p=sn();Vn(u,n,1,p)}}),xu(n,1)}},Xl=function(n){if(n.tag===13){var i=gi(n,134217728);if(i!==null){var a=sn();Vn(i,n,134217728,a)}xu(n,134217728)}},Zd=function(n){if(n.tag===13){var i=Ui(n),a=gi(n,i);if(a!==null){var u=sn();Vn(a,n,i,u)}xu(n,i)}},Jd=function(){return ct},Qd=function(n,i){var a=ct;try{return ct=n,i()}finally{ct=a}},In=function(n,i,a){switch(i){case"input":if(P(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var u=a[i];if(u!==n&&u.form===n.form){var p=la(u);if(!p)throw Error(t(90));me(u),P(u,p)}}}break;case"textarea":Xe(n,a);break;case"select":i=a.value,i!=null&&Se(n,!!a.multiple,i,!1)}},Rs=hu,Ho=hr;var M0={usingClientEntryPoint:!1,Events:[Js,Ir,la,br,Cs,hu]},uo={findFiberByHostInstance:rr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},S0={bundleType:uo.bundleType,version:uo.version,rendererPackageName:uo.rendererPackageName,rendererConfig:uo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:U.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Lt(n),n===null?null:n.stateNode},findFiberByHostInstance:uo.findFiberByHostInstance||_0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xa.isDisabled&&Xa.supportsFiber)try{Go=Xa.inject(S0),$n=Xa}catch{}}return pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M0,pn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wu(i))throw Error(t(200));return x0(n,i,null,a)},pn.createRoot=function(n,i){if(!wu(n))throw Error(t(299));var a=!1,u="",p=pp;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(p=i.onRecoverableError)),i=yu(n,1,!1,null,null,a,!1,u,p),n[hi]=i.current,qs(n.nodeType===8?n.parentNode:n),new _u(i)},pn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Lt(i),n=n===null?null:n.stateNode,n},pn.flushSync=function(n){return hr(n)},pn.hydrate=function(n,i,a){if(!Wa(i))throw Error(t(200));return ja(null,n,i,!0,a)},pn.hydrateRoot=function(n,i,a){if(!wu(n))throw Error(t(405));var u=a!=null&&a.hydratedSources||null,p=!1,g="",S=pp;if(a!=null&&(a.unstable_strictMode===!0&&(p=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(S=a.onRecoverableError)),i=hp(i,null,n,1,a??null,p,!1,g,S),n[hi]=i.current,qs(n),u)for(n=0;n<u.length;n++)a=u[n],p=a._getVersion,p=p(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,p]:i.mutableSourceEagerHydrationData.push(a,p);return new Ga(i)},pn.render=function(n,i,a){if(!Wa(i))throw Error(t(200));return ja(null,n,i,!1,a)},pn.unmountComponentAtNode=function(n){if(!Wa(n))throw Error(t(40));return n._reactRootContainer?(hr(function(){ja(null,null,n,!1,function(){n._reactRootContainer=null,n[hi]=null})}),!0):!1},pn.unstable_batchedUpdates=hu,pn.unstable_renderSubtreeIntoContainer=function(n,i,a,u){if(!Wa(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return ja(n,i,a,!1,u)},pn.version="18.3.1-next-f1338f8080-20240426",pn}var Sp;function N0(){if(Sp)return Eu.exports;Sp=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Eu.exports=P0(),Eu.exports}var Ep;function D0(){if(Ep)return qa;Ep=1;var o=N0();return qa.createRoot=o.createRoot,qa.hydrateRoot=o.hydrateRoot,qa}var I0=D0();const k0=Vm(I0);/**
 * @license
 * Copyright 2010-2021 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gm="128",F0=0,bp=1,z0=2,Wm=1,B0=2,So=3,Dl=0,Ht=1,Il=2,jm=1,To=0,Lo=1,cd=2,Tp=3,Lp=4,O0=5,hs=100,U0=101,H0=102,Ap=103,Cp=104,V0=200,G0=201,W0=202,j0=203,Xm=204,qm=205,X0=206,q0=207,Y0=208,Z0=209,J0=210,Q0=0,$0=1,K0=2,ud=3,ey=4,ty=5,ny=6,iy=7,kl=0,ry=1,sy=2,Ao=0,oy=1,ay=2,ly=3,cy=4,uy=5,Ym=300,_d=301,wd=302,Rp=303,Pp=304,Md=306,Sd=307,dd=1e3,qn=1001,hd=1002,on=1003,Np=1004,Dp=1005,Rn=1006,dy=1007,Ed=1008,bd=1009,hy=1010,fy=1011,bl=1012,py=1013,El=1014,$i=1015,Tl=1016,my=1017,gy=1018,vy=1019,Co=1020,yy=1021,yr=1022,Yn=1023,xy=1024,_y=1025,gs=1026,No=1027,wy=1028,My=1029,Sy=1030,Ey=1031,by=1032,Ty=1033,Ip=33776,kp=33777,Fp=33778,zp=33779,Bp=35840,Op=35841,Up=35842,Hp=35843,Ly=36196,Vp=37492,Gp=37496,Ay=37808,Cy=37809,Ry=37810,Py=37811,Ny=37812,Dy=37813,Iy=37814,ky=37815,Fy=37816,zy=37817,By=37818,Oy=37819,Uy=37820,Hy=37821,Vy=36492,Gy=37840,Wy=37841,jy=37842,Xy=37843,qy=37844,Yy=37845,Zy=37846,Jy=37847,Qy=37848,$y=37849,Ky=37850,ex=37851,tx=37852,nx=37853,ix=2200,rx=2201,sx=2202,Ll=2300,Al=2301,Lu=2302,fs=2400,ps=2401,Cl=2402,Td=2500,Zm=2501,ox=0,Bo=3e3,Jm=3001,ax=3007,lx=3002,cx=3003,ux=3004,dx=3005,hx=3006,fx=3200,px=3201,xs=0,mx=1,Au=7680,gx=519,Do=35044,Rl=35048,Wp="300 es";class wr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const l=s.indexOf(t);l!==-1&&s.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const s=r.slice(0);for(let l=0,c=s.length;l<c;l++)s[l].call(this,e);e.target=null}}}const Xt=[];for(let o=0;o<256;o++)Xt[o]=(o<16?"0":"")+o.toString(16);const Cu=Math.PI/180,fd=180/Math.PI;function oi(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Xt[o&255]+Xt[o>>8&255]+Xt[o>>16&255]+Xt[o>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[t&63|128]+Xt[t>>8&255]+"-"+Xt[t>>16&255]+Xt[t>>24&255]+Xt[r&255]+Xt[r>>8&255]+Xt[r>>16&255]+Xt[r>>24&255]).toUpperCase()}function Sn(o,e,t){return Math.max(e,Math.min(t,o))}function vx(o,e){return(o%e+e)%e}function Ru(o,e,t){return(1-t)*o+t*e}function jp(o){return(o&o-1)===0&&o!==0}function yx(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function xx(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}class xe{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,s=e.elements;return this.x=s[0]*t+s[3]*r+s[6],this.y=s[1]*t+s[4]*r+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,r){return r!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),s=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*r-c*s+e.x,this.y=l*s+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}}xe.prototype.isVector2=!0;class qt{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,r,s,l,c,d,h,f){const m=this.elements;return m[0]=e,m[1]=s,m[2]=d,m[3]=t,m[4]=l,m[5]=h,m[6]=r,m[7]=c,m[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,s=t.elements,l=this.elements,c=r[0],d=r[3],h=r[6],f=r[1],m=r[4],v=r[7],y=r[2],x=r[5],w=r[8],E=s[0],b=s[3],M=s[6],_=s[1],I=s[4],U=s[7],z=s[2],T=s[5],W=s[8];return l[0]=c*E+d*_+h*z,l[3]=c*b+d*I+h*T,l[6]=c*M+d*U+h*W,l[1]=f*E+m*_+v*z,l[4]=f*b+m*I+v*T,l[7]=f*M+m*U+v*W,l[2]=y*E+x*_+w*z,l[5]=y*b+x*I+w*T,l[8]=y*M+x*U+w*W,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],s=e[2],l=e[3],c=e[4],d=e[5],h=e[6],f=e[7],m=e[8];return t*c*m-t*d*f-r*l*m+r*d*h+s*l*f-s*c*h}invert(){const e=this.elements,t=e[0],r=e[1],s=e[2],l=e[3],c=e[4],d=e[5],h=e[6],f=e[7],m=e[8],v=m*c-d*f,y=d*h-m*l,x=f*l-c*h,w=t*v+r*y+s*x;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/w;return e[0]=v*E,e[1]=(s*f-m*r)*E,e[2]=(d*r-s*c)*E,e[3]=y*E,e[4]=(m*t-s*h)*E,e[5]=(s*l-d*t)*E,e[6]=x*E,e[7]=(r*h-f*t)*E,e[8]=(c*t-r*l)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,s,l,c,d){const h=Math.cos(l),f=Math.sin(l);return this.set(r*h,r*f,-r*(h*c+f*d)+c+e,-s*f,s*h,-s*(-f*c+h*d)+d+t,0,0,1),this}scale(e,t){const r=this.elements;return r[0]*=e,r[3]*=e,r[6]*=e,r[1]*=t,r[4]*=t,r[7]*=t,this}rotate(e){const t=Math.cos(e),r=Math.sin(e),s=this.elements,l=s[0],c=s[3],d=s[6],h=s[1],f=s[4],m=s[7];return s[0]=t*l+r*h,s[3]=t*c+r*f,s[6]=t*d+r*m,s[1]=-r*l+t*h,s[4]=-r*c+t*f,s[7]=-r*d+t*m,this}translate(e,t){const r=this.elements;return r[0]+=e*r[2],r[3]+=e*r[5],r[6]+=e*r[8],r[1]+=t*r[2],r[4]+=t*r[5],r[7]+=t*r[8],this}equals(e){const t=this.elements,r=e.elements;for(let s=0;s<9;s++)if(t[s]!==r[s])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}qt.prototype.isMatrix3=!0;let Zr;class _s{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Zr===void 0&&(Zr=document.createElementNS("http://www.w3.org/1999/xhtml","canvas")),Zr.width=e.width,Zr.height=e.height;const r=Zr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=Zr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}}let _x=0;class Yt extends wr{constructor(e=Yt.DEFAULT_IMAGE,t=Yt.DEFAULT_MAPPING,r=qn,s=qn,l=Rn,c=Ed,d=Yn,h=bd,f=1,m=Bo){super(),Object.defineProperty(this,"id",{value:_x++}),this.uuid=oi(),this.name="",this.image=e,this.mipmaps=[],this.mapping=t,this.wrapS=r,this.wrapT=s,this.magFilter=l,this.minFilter=c,this.anisotropy=f,this.format=d,this.internalFormat=null,this.type=h,this.offset=new xe(0,0),this.repeat=new xe(1,1),this.center=new xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=m,this.version=0,this.onUpdate=null}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){const s=this.image;if(s.uuid===void 0&&(s.uuid=oi()),!t&&e.images[s.uuid]===void 0){let l;if(Array.isArray(s)){l=[];for(let c=0,d=s.length;c<d;c++)s[c].isDataTexture?l.push(Pu(s[c].image)):l.push(Pu(s[c]))}else l=Pu(s);e.images[s.uuid]={uuid:s.uuid,url:l}}r.image=s.uuid}return t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ym)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case dd:e.x=e.x-Math.floor(e.x);break;case qn:e.x=e.x<0?0:1;break;case hd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case dd:e.y=e.y-Math.floor(e.y);break;case qn:e.y=e.y<0?0:1;break;case hd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&this.version++}}Yt.DEFAULT_IMAGE=void 0;Yt.DEFAULT_MAPPING=Ym;Yt.prototype.isTexture=!0;function Pu(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?_s.getDataURL(o):o.data?{data:Array.prototype.slice.call(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}class dt{constructor(e=0,t=0,r=0,s=1){this.x=e,this.y=t,this.z=r,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,s){return this.x=e,this.y=t,this.z=r,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,s=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*s+c[12]*l,this.y=c[1]*t+c[5]*r+c[9]*s+c[13]*l,this.z=c[2]*t+c[6]*r+c[10]*s+c[14]*l,this.w=c[3]*t+c[7]*r+c[11]*s+c[15]*l,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,s,l;const h=e.elements,f=h[0],m=h[4],v=h[8],y=h[1],x=h[5],w=h[9],E=h[2],b=h[6],M=h[10];if(Math.abs(m-y)<.01&&Math.abs(v-E)<.01&&Math.abs(w-b)<.01){if(Math.abs(m+y)<.1&&Math.abs(v+E)<.1&&Math.abs(w+b)<.1&&Math.abs(f+x+M-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const I=(f+1)/2,U=(x+1)/2,z=(M+1)/2,T=(m+y)/4,W=(v+E)/4,ee=(w+b)/4;return I>U&&I>z?I<.01?(r=0,s=.707106781,l=.707106781):(r=Math.sqrt(I),s=T/r,l=W/r):U>z?U<.01?(r=.707106781,s=0,l=.707106781):(s=Math.sqrt(U),r=T/s,l=ee/s):z<.01?(r=.707106781,s=.707106781,l=0):(l=Math.sqrt(z),r=W/l,s=ee/l),this.set(r,s,l,t),this}let _=Math.sqrt((b-w)*(b-w)+(v-E)*(v-E)+(y-m)*(y-m));return Math.abs(_)<.001&&(_=1),this.x=(b-w)/_,this.y=(v-E)/_,this.z=(y-m)/_,this.w=Math.acos((f+x+M-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,r){return r!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}}dt.prototype.isVector4=!0;class xr extends wr{constructor(e,t,r){super(),this.width=e,this.height=t,this.depth=1,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t),r=r||{},this.texture=new Yt(void 0,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.encoding),this.texture.image={},this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=1,this.texture.generateMipmaps=r.generateMipmaps!==void 0?r.generateMipmaps:!1,this.texture.minFilter=r.minFilter!==void 0?r.minFilter:Rn,this.depthBuffer=r.depthBuffer!==void 0?r.depthBuffer:!0,this.stencilBuffer=r.stencilBuffer!==void 0?r.stencilBuffer:!1,this.depthTexture=r.depthTexture!==void 0?r.depthTexture:null}setTexture(e){e.image={width:this.width,height:this.height,depth:this.depth},this.texture=e}setSize(e,t,r=1){(this.width!==e||this.height!==t||this.depth!==r)&&(this.width=e,this.height=t,this.depth=r,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=r,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}xr.prototype.isWebGLRenderTarget=!0;class wx extends xr{constructor(e,t,r){super(e,t,r),this.samples=4}copy(e){return super.copy.call(this,e),this.samples=e.samples,this}}wx.prototype.isWebGLMultisampleRenderTarget=!0;class an{constructor(e=0,t=0,r=0,s=1){this._x=e,this._y=t,this._z=r,this._w=s}static slerp(e,t,r,s){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),r.slerpQuaternions(e,t,s)}static slerpFlat(e,t,r,s,l,c,d){let h=r[s+0],f=r[s+1],m=r[s+2],v=r[s+3];const y=l[c+0],x=l[c+1],w=l[c+2],E=l[c+3];if(d===0){e[t+0]=h,e[t+1]=f,e[t+2]=m,e[t+3]=v;return}if(d===1){e[t+0]=y,e[t+1]=x,e[t+2]=w,e[t+3]=E;return}if(v!==E||h!==y||f!==x||m!==w){let b=1-d;const M=h*y+f*x+m*w+v*E,_=M>=0?1:-1,I=1-M*M;if(I>Number.EPSILON){const z=Math.sqrt(I),T=Math.atan2(z,M*_);b=Math.sin(b*T)/z,d=Math.sin(d*T)/z}const U=d*_;if(h=h*b+y*U,f=f*b+x*U,m=m*b+w*U,v=v*b+E*U,b===1-d){const z=1/Math.sqrt(h*h+f*f+m*m+v*v);h*=z,f*=z,m*=z,v*=z}}e[t]=h,e[t+1]=f,e[t+2]=m,e[t+3]=v}static multiplyQuaternionsFlat(e,t,r,s,l,c){const d=r[s],h=r[s+1],f=r[s+2],m=r[s+3],v=l[c],y=l[c+1],x=l[c+2],w=l[c+3];return e[t]=d*w+m*v+h*x-f*y,e[t+1]=h*w+m*y+f*v-d*x,e[t+2]=f*w+m*x+d*y-h*v,e[t+3]=m*w-d*v-h*y-f*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,s){return this._x=e,this._y=t,this._z=r,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const r=e._x,s=e._y,l=e._z,c=e._order,d=Math.cos,h=Math.sin,f=d(r/2),m=d(s/2),v=d(l/2),y=h(r/2),x=h(s/2),w=h(l/2);switch(c){case"XYZ":this._x=y*m*v+f*x*w,this._y=f*x*v-y*m*w,this._z=f*m*w+y*x*v,this._w=f*m*v-y*x*w;break;case"YXZ":this._x=y*m*v+f*x*w,this._y=f*x*v-y*m*w,this._z=f*m*w-y*x*v,this._w=f*m*v+y*x*w;break;case"ZXY":this._x=y*m*v-f*x*w,this._y=f*x*v+y*m*w,this._z=f*m*w+y*x*v,this._w=f*m*v-y*x*w;break;case"ZYX":this._x=y*m*v-f*x*w,this._y=f*x*v+y*m*w,this._z=f*m*w-y*x*v,this._w=f*m*v+y*x*w;break;case"YZX":this._x=y*m*v+f*x*w,this._y=f*x*v+y*m*w,this._z=f*m*w-y*x*v,this._w=f*m*v-y*x*w;break;case"XZY":this._x=y*m*v-f*x*w,this._y=f*x*v-y*m*w,this._z=f*m*w+y*x*v,this._w=f*m*v+y*x*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,s=Math.sin(r);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],s=t[4],l=t[8],c=t[1],d=t[5],h=t[9],f=t[2],m=t[6],v=t[10],y=r+d+v;if(y>0){const x=.5/Math.sqrt(y+1);this._w=.25/x,this._x=(m-h)*x,this._y=(l-f)*x,this._z=(c-s)*x}else if(r>d&&r>v){const x=2*Math.sqrt(1+r-d-v);this._w=(m-h)/x,this._x=.25*x,this._y=(s+c)/x,this._z=(l+f)/x}else if(d>v){const x=2*Math.sqrt(1+d-r-v);this._w=(l-f)/x,this._x=(s+c)/x,this._y=.25*x,this._z=(h+m)/x}else{const x=2*Math.sqrt(1+v-r-d);this._w=(c-s)/x,this._x=(l+f)/x,this._y=(h+m)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Sn(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const s=Math.min(1,t/r);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,s=e._y,l=e._z,c=e._w,d=t._x,h=t._y,f=t._z,m=t._w;return this._x=r*m+c*d+s*f-l*h,this._y=s*m+c*h+l*d-r*f,this._z=l*m+c*f+r*h-s*d,this._w=c*m-r*d-s*h-l*f,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,s=this._y,l=this._z,c=this._w;let d=c*e._w+r*e._x+s*e._y+l*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=c,this._x=r,this._y=s,this._z=l,this;const h=1-d*d;if(h<=Number.EPSILON){const x=1-t;return this._w=x*c+t*this._w,this._x=x*r+t*this._x,this._y=x*s+t*this._y,this._z=x*l+t*this._z,this.normalize(),this._onChangeCallback(),this}const f=Math.sqrt(h),m=Math.atan2(f,d),v=Math.sin((1-t)*m)/f,y=Math.sin(t*m)/f;return this._w=c*v+this._w*y,this._x=r*v+this._x*y,this._y=s*v+this._y*y,this._z=l*v+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,t,r){this.copy(e).slerp(t,r)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}an.prototype.isQuaternion=!0;class N{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Xp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,s=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*s,this.y=l[1]*t+l[4]*r+l[7]*s,this.z=l[2]*t+l[5]*r+l[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,s=this.z,l=e.elements,c=1/(l[3]*t+l[7]*r+l[11]*s+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*s+l[12])*c,this.y=(l[1]*t+l[5]*r+l[9]*s+l[13])*c,this.z=(l[2]*t+l[6]*r+l[10]*s+l[14])*c,this}applyQuaternion(e){const t=this.x,r=this.y,s=this.z,l=e.x,c=e.y,d=e.z,h=e.w,f=h*t+c*s-d*r,m=h*r+d*t-l*s,v=h*s+l*r-c*t,y=-l*t-c*r-d*s;return this.x=f*h+y*-l+m*-d-v*-c,this.y=m*h+y*-c+v*-l-f*-d,this.z=v*h+y*-d+f*-c-m*-l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,s=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*s,this.y=l[1]*t+l[5]*r+l[9]*s,this.z=l[2]*t+l[6]*r+l[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,s=e.y,l=e.z,c=t.x,d=t.y,h=t.z;return this.x=s*h-l*d,this.y=l*c-r*h,this.z=r*d-s*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Nu.copy(this).projectOnVector(e),this.sub(Nu)}reflect(e){return this.sub(Nu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Sn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,s=this.z-e.z;return t*t+r*r+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const s=Math.sin(t)*e;return this.x=s*Math.sin(r),this.y=Math.cos(t)*e,this.z=s*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,r){return r!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}}N.prototype.isVector3=!0;const Nu=new N,Xp=new an;class Nn{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,r=1/0,s=1/0,l=-1/0,c=-1/0,d=-1/0;for(let h=0,f=e.length;h<f;h+=3){const m=e[h],v=e[h+1],y=e[h+2];m<t&&(t=m),v<r&&(r=v),y<s&&(s=y),m>l&&(l=m),v>c&&(c=v),y>d&&(d=y)}return this.min.set(t,r,s),this.max.set(l,c,d),this}setFromBufferAttribute(e){let t=1/0,r=1/0,s=1/0,l=-1/0,c=-1/0,d=-1/0;for(let h=0,f=e.count;h<f;h++){const m=e.getX(h),v=e.getY(h),y=e.getZ(h);m<t&&(t=m),v<r&&(r=v),y<s&&(s=y),m>l&&(l=m),v>c&&(c=v),y>d&&(d=y)}return this.min.set(t,r,s),this.max.set(l,c,d),this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=fo.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e){return this.makeEmpty(),this.expandByObject(e)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return e===void 0&&(console.warn("THREE.Box3: .getCenter() target is now required"),e=new N),this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return e===void 0&&(console.warn("THREE.Box3: .getSize() target is now required"),e=new N),this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e){e.updateWorldMatrix(!1,!1);const t=e.geometry;t!==void 0&&(t.boundingBox===null&&t.computeBoundingBox(),Du.copy(t.boundingBox),Du.applyMatrix4(e.matrixWorld),this.union(Du));const r=e.children;for(let s=0,l=r.length;s<l;s++)this.expandByObject(r[s]);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t===void 0&&(console.warn("THREE.Box3: .getParameter() target is now required"),t=new N),t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,fo),fo.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(po),Ya.subVectors(this.max,po),Jr.subVectors(e.a,po),Qr.subVectors(e.b,po),$r.subVectors(e.c,po),Wi.subVectors(Qr,Jr),ji.subVectors($r,Qr),gr.subVectors(Jr,$r);let t=[0,-Wi.z,Wi.y,0,-ji.z,ji.y,0,-gr.z,gr.y,Wi.z,0,-Wi.x,ji.z,0,-ji.x,gr.z,0,-gr.x,-Wi.y,Wi.x,0,-ji.y,ji.x,0,-gr.y,gr.x,0];return!Iu(t,Jr,Qr,$r,Ya)||(t=[1,0,0,0,1,0,0,0,1],!Iu(t,Jr,Qr,$r,Ya))?!1:(Za.crossVectors(Wi,ji),t=[Za.x,Za.y,Za.z],Iu(t,Jr,Qr,$r,Ya))}clampPoint(e,t){return t===void 0&&(console.warn("THREE.Box3: .clampPoint() target is now required"),t=new N),t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return fo.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return e===void 0&&console.error("THREE.Box3: .getBoundingSphere() target is now required"),this.getCenter(e.center),e.radius=this.getSize(fo).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}Nn.prototype.isBox3=!0;const _i=[new N,new N,new N,new N,new N,new N,new N,new N],fo=new N,Du=new Nn,Jr=new N,Qr=new N,$r=new N,Wi=new N,ji=new N,gr=new N,po=new N,Ya=new N,Za=new N,vr=new N;function Iu(o,e,t,r,s){for(let l=0,c=o.length-3;l<=c;l+=3){vr.fromArray(o,l);const d=s.x*Math.abs(vr.x)+s.y*Math.abs(vr.y)+s.z*Math.abs(vr.z),h=e.dot(vr),f=t.dot(vr),m=r.dot(vr);if(Math.max(-Math.max(h,f,m),Math.min(h,f,m))>d)return!1}return!0}const Mx=new Nn,qp=new N,ku=new N,Fu=new N;class ws{constructor(e=new N,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):Mx.setFromPoints(e).getCenter(r);let s=0;for(let l=0,c=e.length;l<c;l++)s=Math.max(s,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t===void 0&&(console.warn("THREE.Sphere: .clampPoint() target is now required"),t=new N),t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return e===void 0&&(console.warn("THREE.Sphere: .getBoundingBox() target is now required"),e=new Nn),this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Fu.subVectors(e,this.center);const t=Fu.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),s=(r-this.radius)*.5;this.center.add(Fu.multiplyScalar(s/r)),this.radius+=s}return this}union(e){return ku.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(qp.copy(e.center).add(ku)),this.expandByPoint(qp.copy(e.center).sub(ku)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wi=new N,zu=new N,Ja=new N,Xi=new N,Bu=new N,Qa=new N,Ou=new N;class Ms{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t===void 0&&(console.warn("THREE.Ray: .at() target is now required"),t=new N),t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wi)),this}closestPointToPoint(e,t){t===void 0&&(console.warn("THREE.Ray: .closestPointToPoint() target is now required"),t=new N),t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(r).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=wi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wi.copy(this.direction).multiplyScalar(t).add(this.origin),wi.distanceToSquared(e))}distanceSqToSegment(e,t,r,s){zu.copy(e).add(t).multiplyScalar(.5),Ja.copy(t).sub(e).normalize(),Xi.copy(this.origin).sub(zu);const l=e.distanceTo(t)*.5,c=-this.direction.dot(Ja),d=Xi.dot(this.direction),h=-Xi.dot(Ja),f=Xi.lengthSq(),m=Math.abs(1-c*c);let v,y,x,w;if(m>0)if(v=c*h-d,y=c*d-h,w=l*m,v>=0)if(y>=-w)if(y<=w){const E=1/m;v*=E,y*=E,x=v*(v+c*y+2*d)+y*(c*v+y+2*h)+f}else y=l,v=Math.max(0,-(c*y+d)),x=-v*v+y*(y+2*h)+f;else y=-l,v=Math.max(0,-(c*y+d)),x=-v*v+y*(y+2*h)+f;else y<=-w?(v=Math.max(0,-(-c*l+d)),y=v>0?-l:Math.min(Math.max(-l,-h),l),x=-v*v+y*(y+2*h)+f):y<=w?(v=0,y=Math.min(Math.max(-l,-h),l),x=y*(y+2*h)+f):(v=Math.max(0,-(c*l+d)),y=v>0?l:Math.min(Math.max(-l,-h),l),x=-v*v+y*(y+2*h)+f);else y=c>0?-l:l,v=Math.max(0,-(c*y+d)),x=-v*v+y*(y+2*h)+f;return r&&r.copy(this.direction).multiplyScalar(v).add(this.origin),s&&s.copy(Ja).multiplyScalar(y).add(zu),x}intersectSphere(e,t){wi.subVectors(e.center,this.origin);const r=wi.dot(this.direction),s=wi.dot(wi)-r*r,l=e.radius*e.radius;if(s>l)return null;const c=Math.sqrt(l-s),d=r-c,h=r+c;return d<0&&h<0?null:d<0?this.at(h,t):this.at(d,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,s,l,c,d,h;const f=1/this.direction.x,m=1/this.direction.y,v=1/this.direction.z,y=this.origin;return f>=0?(r=(e.min.x-y.x)*f,s=(e.max.x-y.x)*f):(r=(e.max.x-y.x)*f,s=(e.min.x-y.x)*f),m>=0?(l=(e.min.y-y.y)*m,c=(e.max.y-y.y)*m):(l=(e.max.y-y.y)*m,c=(e.min.y-y.y)*m),r>c||l>s||((l>r||r!==r)&&(r=l),(c<s||s!==s)&&(s=c),v>=0?(d=(e.min.z-y.z)*v,h=(e.max.z-y.z)*v):(d=(e.max.z-y.z)*v,h=(e.min.z-y.z)*v),r>h||d>s)||((d>r||r!==r)&&(r=d),(h<s||s!==s)&&(s=h),s<0)?null:this.at(r>=0?r:s,t)}intersectsBox(e){return this.intersectBox(e,wi)!==null}intersectTriangle(e,t,r,s,l){Bu.subVectors(t,e),Qa.subVectors(r,e),Ou.crossVectors(Bu,Qa);let c=this.direction.dot(Ou),d;if(c>0){if(s)return null;d=1}else if(c<0)d=-1,c=-c;else return null;Xi.subVectors(this.origin,e);const h=d*this.direction.dot(Qa.crossVectors(Xi,Qa));if(h<0)return null;const f=d*this.direction.dot(Bu.cross(Xi));if(f<0||h+f>c)return null;const m=-d*Xi.dot(Ou);return m<0?null:this.at(m/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class We{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,r,s,l,c,d,h,f,m,v,y,x,w,E,b){const M=this.elements;return M[0]=e,M[4]=t,M[8]=r,M[12]=s,M[1]=l,M[5]=c,M[9]=d,M[13]=h,M[2]=f,M[6]=m,M[10]=v,M[14]=y,M[3]=x,M[7]=w,M[11]=E,M[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new We().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,s=1/Kr.setFromMatrixColumn(e,0).length(),l=1/Kr.setFromMatrixColumn(e,1).length(),c=1/Kr.setFromMatrixColumn(e,2).length();return t[0]=r[0]*s,t[1]=r[1]*s,t[2]=r[2]*s,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*c,t[9]=r[9]*c,t[10]=r[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,r=e.x,s=e.y,l=e.z,c=Math.cos(r),d=Math.sin(r),h=Math.cos(s),f=Math.sin(s),m=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const y=c*m,x=c*v,w=d*m,E=d*v;t[0]=h*m,t[4]=-h*v,t[8]=f,t[1]=x+w*f,t[5]=y-E*f,t[9]=-d*h,t[2]=E-y*f,t[6]=w+x*f,t[10]=c*h}else if(e.order==="YXZ"){const y=h*m,x=h*v,w=f*m,E=f*v;t[0]=y+E*d,t[4]=w*d-x,t[8]=c*f,t[1]=c*v,t[5]=c*m,t[9]=-d,t[2]=x*d-w,t[6]=E+y*d,t[10]=c*h}else if(e.order==="ZXY"){const y=h*m,x=h*v,w=f*m,E=f*v;t[0]=y-E*d,t[4]=-c*v,t[8]=w+x*d,t[1]=x+w*d,t[5]=c*m,t[9]=E-y*d,t[2]=-c*f,t[6]=d,t[10]=c*h}else if(e.order==="ZYX"){const y=c*m,x=c*v,w=d*m,E=d*v;t[0]=h*m,t[4]=w*f-x,t[8]=y*f+E,t[1]=h*v,t[5]=E*f+y,t[9]=x*f-w,t[2]=-f,t[6]=d*h,t[10]=c*h}else if(e.order==="YZX"){const y=c*h,x=c*f,w=d*h,E=d*f;t[0]=h*m,t[4]=E-y*v,t[8]=w*v+x,t[1]=v,t[5]=c*m,t[9]=-d*m,t[2]=-f*m,t[6]=x*v+w,t[10]=y-E*v}else if(e.order==="XZY"){const y=c*h,x=c*f,w=d*h,E=d*f;t[0]=h*m,t[4]=-v,t[8]=f*m,t[1]=y*v+E,t[5]=c*m,t[9]=x*v-w,t[2]=w*v-x,t[6]=d*m,t[10]=E*v+y}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Sx,e,Ex)}lookAt(e,t,r){const s=this.elements;return wn.subVectors(e,t),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),qi.crossVectors(r,wn),qi.lengthSq()===0&&(Math.abs(r.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),qi.crossVectors(r,wn)),qi.normalize(),$a.crossVectors(wn,qi),s[0]=qi.x,s[4]=$a.x,s[8]=wn.x,s[1]=qi.y,s[5]=$a.y,s[9]=wn.y,s[2]=qi.z,s[6]=$a.z,s[10]=wn.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,s=t.elements,l=this.elements,c=r[0],d=r[4],h=r[8],f=r[12],m=r[1],v=r[5],y=r[9],x=r[13],w=r[2],E=r[6],b=r[10],M=r[14],_=r[3],I=r[7],U=r[11],z=r[15],T=s[0],W=s[4],ee=s[8],ne=s[12],oe=s[1],he=s[5],ie=s[9],F=s[13],V=s[2],G=s[6],B=s[10],se=s[14],Y=s[3],K=s[7],te=s[11],R=s[15];return l[0]=c*T+d*oe+h*V+f*Y,l[4]=c*W+d*he+h*G+f*K,l[8]=c*ee+d*ie+h*B+f*te,l[12]=c*ne+d*F+h*se+f*R,l[1]=m*T+v*oe+y*V+x*Y,l[5]=m*W+v*he+y*G+x*K,l[9]=m*ee+v*ie+y*B+x*te,l[13]=m*ne+v*F+y*se+x*R,l[2]=w*T+E*oe+b*V+M*Y,l[6]=w*W+E*he+b*G+M*K,l[10]=w*ee+E*ie+b*B+M*te,l[14]=w*ne+E*F+b*se+M*R,l[3]=_*T+I*oe+U*V+z*Y,l[7]=_*W+I*he+U*G+z*K,l[11]=_*ee+I*ie+U*B+z*te,l[15]=_*ne+I*F+U*se+z*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],s=e[8],l=e[12],c=e[1],d=e[5],h=e[9],f=e[13],m=e[2],v=e[6],y=e[10],x=e[14],w=e[3],E=e[7],b=e[11],M=e[15];return w*(+l*h*v-s*f*v-l*d*y+r*f*y+s*d*x-r*h*x)+E*(+t*h*x-t*f*y+l*c*y-s*c*x+s*f*m-l*h*m)+b*(+t*f*v-t*d*x-l*c*v+r*c*x+l*d*m-r*f*m)+M*(-s*d*m-t*h*v+t*d*y+s*c*v-r*c*y+r*h*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],s=e[2],l=e[3],c=e[4],d=e[5],h=e[6],f=e[7],m=e[8],v=e[9],y=e[10],x=e[11],w=e[12],E=e[13],b=e[14],M=e[15],_=v*b*f-E*y*f+E*h*x-d*b*x-v*h*M+d*y*M,I=w*y*f-m*b*f-w*h*x+c*b*x+m*h*M-c*y*M,U=m*E*f-w*v*f+w*d*x-c*E*x-m*d*M+c*v*M,z=w*v*h-m*E*h-w*d*y+c*E*y+m*d*b-c*v*b,T=t*_+r*I+s*U+l*z;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const W=1/T;return e[0]=_*W,e[1]=(E*y*l-v*b*l-E*s*x+r*b*x+v*s*M-r*y*M)*W,e[2]=(d*b*l-E*h*l+E*s*f-r*b*f-d*s*M+r*h*M)*W,e[3]=(v*h*l-d*y*l-v*s*f+r*y*f+d*s*x-r*h*x)*W,e[4]=I*W,e[5]=(m*b*l-w*y*l+w*s*x-t*b*x-m*s*M+t*y*M)*W,e[6]=(w*h*l-c*b*l-w*s*f+t*b*f+c*s*M-t*h*M)*W,e[7]=(c*y*l-m*h*l+m*s*f-t*y*f-c*s*x+t*h*x)*W,e[8]=U*W,e[9]=(w*v*l-m*E*l-w*r*x+t*E*x+m*r*M-t*v*M)*W,e[10]=(c*E*l-w*d*l+w*r*f-t*E*f-c*r*M+t*d*M)*W,e[11]=(m*d*l-c*v*l-m*r*f+t*v*f+c*r*x-t*d*x)*W,e[12]=z*W,e[13]=(m*E*s-w*v*s+w*r*y-t*E*y-m*r*b+t*v*b)*W,e[14]=(w*d*s-c*E*s-w*r*h+t*E*h+c*r*b-t*d*b)*W,e[15]=(c*v*s-m*d*s+m*r*h-t*v*h-c*r*y+t*d*y)*W,this}scale(e){const t=this.elements,r=e.x,s=e.y,l=e.z;return t[0]*=r,t[4]*=s,t[8]*=l,t[1]*=r,t[5]*=s,t[9]*=l,t[2]*=r,t[6]*=s,t[10]*=l,t[3]*=r,t[7]*=s,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,s))}makeTranslation(e,t,r){return this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),s=Math.sin(t),l=1-r,c=e.x,d=e.y,h=e.z,f=l*c,m=l*d;return this.set(f*c+r,f*d-s*h,f*h+s*d,0,f*d+s*h,m*d+r,m*h-s*c,0,f*h-s*d,m*h+s*c,l*h*h+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r){return this.set(1,t,r,0,e,1,r,0,e,t,1,0,0,0,0,1),this}compose(e,t,r){const s=this.elements,l=t._x,c=t._y,d=t._z,h=t._w,f=l+l,m=c+c,v=d+d,y=l*f,x=l*m,w=l*v,E=c*m,b=c*v,M=d*v,_=h*f,I=h*m,U=h*v,z=r.x,T=r.y,W=r.z;return s[0]=(1-(E+M))*z,s[1]=(x+U)*z,s[2]=(w-I)*z,s[3]=0,s[4]=(x-U)*T,s[5]=(1-(y+M))*T,s[6]=(b+_)*T,s[7]=0,s[8]=(w+I)*W,s[9]=(b-_)*W,s[10]=(1-(y+E))*W,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,r){const s=this.elements;let l=Kr.set(s[0],s[1],s[2]).length();const c=Kr.set(s[4],s[5],s[6]).length(),d=Kr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(l=-l),e.x=s[12],e.y=s[13],e.z=s[14],Gn.copy(this);const f=1/l,m=1/c,v=1/d;return Gn.elements[0]*=f,Gn.elements[1]*=f,Gn.elements[2]*=f,Gn.elements[4]*=m,Gn.elements[5]*=m,Gn.elements[6]*=m,Gn.elements[8]*=v,Gn.elements[9]*=v,Gn.elements[10]*=v,t.setFromRotationMatrix(Gn),r.x=l,r.y=c,r.z=d,this}makePerspective(e,t,r,s,l,c){c===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const d=this.elements,h=2*l/(t-e),f=2*l/(r-s),m=(t+e)/(t-e),v=(r+s)/(r-s),y=-(c+l)/(c-l),x=-2*c*l/(c-l);return d[0]=h,d[4]=0,d[8]=m,d[12]=0,d[1]=0,d[5]=f,d[9]=v,d[13]=0,d[2]=0,d[6]=0,d[10]=y,d[14]=x,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,r,s,l,c){const d=this.elements,h=1/(t-e),f=1/(r-s),m=1/(c-l),v=(t+e)*h,y=(r+s)*f,x=(c+l)*m;return d[0]=2*h,d[4]=0,d[8]=0,d[12]=-v,d[1]=0,d[5]=2*f,d[9]=0,d[13]=-y,d[2]=0,d[6]=0,d[10]=-2*m,d[14]=-x,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let s=0;s<16;s++)if(t[s]!==r[s])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}We.prototype.isMatrix4=!0;const Kr=new N,Gn=new We,Sx=new N(0,0,0),Ex=new N(1,1,1),qi=new N,$a=new N,wn=new N,Yp=new We,Zp=new an;class Ss{constructor(e=0,t=0,r=0,s=Ss.DefaultOrder){this._x=e,this._y=t,this._z=r,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,s){return this._x=e,this._y=t,this._z=r,this._order=s||this._order,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t,r){const s=e.elements,l=s[0],c=s[4],d=s[8],h=s[1],f=s[5],m=s[9],v=s[2],y=s[6],x=s[10];switch(t=t||this._order,t){case"XYZ":this._y=Math.asin(Sn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,x),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(y,f),this._z=0);break;case"YXZ":this._x=Math.asin(-Sn(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(d,x),this._z=Math.atan2(h,f)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(Sn(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-v,x),this._z=Math.atan2(-c,f)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-Sn(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(y,x),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-c,f));break;case"YZX":this._z=Math.asin(Sn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-m,f),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(d,x));break;case"XZY":this._z=Math.asin(-Sn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(y,f),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-m,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r!==!1&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Yp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yp,t,r)}setFromVector3(e,t){return this.set(e.x,e.y,e.z,t||this._order)}reorder(e){return Zp.setFromEuler(this),this.setFromQuaternion(Zp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new N(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}Ss.prototype.isEuler=!0;Ss.DefaultOrder="XYZ";Ss.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class bx{constructor(){this.mask=1}set(e){this.mask=1<<e|0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}}let Tx=0;const Jp=new N,es=new an,Mi=new We,Ka=new N,mo=new N,Lx=new N,Ax=new an,Qp=new N(1,0,0),$p=new N(0,1,0),Kp=new N(0,0,1),Cx={type:"added"},em={type:"removed"};class lt extends wr{constructor(){super(),Object.defineProperty(this,"id",{value:Tx++}),this.uuid=oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=lt.DefaultUp.clone();const e=new N,t=new Ss,r=new an,s=new N(1,1,1);function l(){r.setFromEuler(t,!1)}function c(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new We},normalMatrix:{value:new qt}}),this.matrix=new We,this.matrixWorld=new We,this.matrixAutoUpdate=lt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new bx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return es.setFromAxisAngle(e,t),this.quaternion.multiply(es),this}rotateOnWorldAxis(e,t){return es.setFromAxisAngle(e,t),this.quaternion.premultiply(es),this}rotateX(e){return this.rotateOnAxis(Qp,e)}rotateY(e){return this.rotateOnAxis($p,e)}rotateZ(e){return this.rotateOnAxis(Kp,e)}translateOnAxis(e,t){return Jp.copy(e).applyQuaternion(this.quaternion),this.position.add(Jp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Qp,e)}translateY(e){return this.translateOnAxis($p,e)}translateZ(e){return this.translateOnAxis(Kp,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Ka.copy(e):Ka.set(e,t,r);const s=this.parent;this.updateWorldMatrix(!0,!1),mo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(mo,Ka,this.up):Mi.lookAt(Ka,mo,this.up),this.quaternion.setFromRotationMatrix(Mi),s&&(Mi.extractRotation(s.matrixWorld),es.setFromRotationMatrix(Mi),this.quaternion.premultiply(es.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Cx)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(em)),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(em)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,s=this.children.length;r<s;r++){const c=this.children[r].getObjectByProperty(e,t);if(c!==void 0)return c}}getWorldPosition(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldPosition() target is now required"),e=new N),this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"),e=new an),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mo,e,Lx),e}getWorldScale(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldScale() target is now required"),e=new N),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mo,Ax,e),e}getWorldDirection(e){e===void 0&&(console.warn("THREE.Object3D: .getWorldDirection() target is now required"),e=new N),this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,s=t.length;r<s;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,s=t.length;r<s;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,s=t.length;r<s;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let l=0,c=s.length;l<c;l++)s[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},r.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function l(d,h){return d[h.uuid]===void 0&&(d[h.uuid]=h.toJSON(e)),h.uuid}if(this.isMesh||this.isLine||this.isPoints){s.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const h=d.shapes;if(Array.isArray(h))for(let f=0,m=h.length;f<m;f++){const v=h[f];l(e.shapes,v)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let h=0,f=this.material.length;h<f;h++)d.push(l(e.materials,this.material[h]));s.material=d}else s.material=l(e.materials,this.material);if(this.children.length>0){s.children=[];for(let d=0;d<this.children.length;d++)s.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let d=0;d<this.animations.length;d++){const h=this.animations[d];s.animations.push(l(e.animations,h))}}if(t){const d=c(e.geometries),h=c(e.materials),f=c(e.textures),m=c(e.images),v=c(e.shapes),y=c(e.skeletons),x=c(e.animations);d.length>0&&(r.geometries=d),h.length>0&&(r.materials=h),f.length>0&&(r.textures=f),m.length>0&&(r.images=m),v.length>0&&(r.shapes=v),y.length>0&&(r.skeletons=y),x.length>0&&(r.animations=x)}return r.object=s,r;function c(d){const h=[];for(const f in d){const m=d[f];delete m.metadata,h.push(m)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const s=e.children[r];this.add(s.clone())}return this}}lt.DefaultUp=new N(0,1,0);lt.DefaultMatrixAutoUpdate=!0;lt.prototype.isObject3D=!0;const Uu=new N,Rx=new N,Px=new qt;class ri{constructor(e=new N(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,s){return this.normal.set(e,t,r),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const s=Uu.subVectors(r,t).cross(Rx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t===void 0&&(console.warn("THREE.Plane: .projectPoint() target is now required"),t=new N),t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){t===void 0&&(console.warn("THREE.Plane: .intersectLine() target is now required"),t=new N);const r=e.delta(Uu),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/s;return l<0||l>1?null:t.copy(r).multiplyScalar(l).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e===void 0&&(console.warn("THREE.Plane: .coplanarPoint() target is now required"),e=new N),e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Px.getNormalMatrix(e),s=this.coplanarPoint(Uu).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-s.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}ri.prototype.isPlane=!0;const Wn=new N,Si=new N,Hu=new N,Ei=new N,ts=new N,ns=new N,tm=new N,Vu=new N,Gu=new N,Wu=new N;class kt{constructor(e=new N,t=new N,r=new N){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,s){s===void 0&&(console.warn("THREE.Triangle: .getNormal() target is now required"),s=new N),s.subVectors(r,t),Wn.subVectors(e,t),s.cross(Wn);const l=s.lengthSq();return l>0?s.multiplyScalar(1/Math.sqrt(l)):s.set(0,0,0)}static getBarycoord(e,t,r,s,l){Wn.subVectors(s,t),Si.subVectors(r,t),Hu.subVectors(e,t);const c=Wn.dot(Wn),d=Wn.dot(Si),h=Wn.dot(Hu),f=Si.dot(Si),m=Si.dot(Hu),v=c*f-d*d;if(l===void 0&&(console.warn("THREE.Triangle: .getBarycoord() target is now required"),l=new N),v===0)return l.set(-2,-1,-1);const y=1/v,x=(f*h-d*m)*y,w=(c*m-d*h)*y;return l.set(1-x-w,w,x)}static containsPoint(e,t,r,s){return this.getBarycoord(e,t,r,s,Ei),Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getUV(e,t,r,s,l,c,d,h){return this.getBarycoord(e,t,r,s,Ei),h.set(0,0),h.addScaledVector(l,Ei.x),h.addScaledVector(c,Ei.y),h.addScaledVector(d,Ei.z),h}static isFrontFacing(e,t,r,s){return Wn.subVectors(r,t),Si.subVectors(e,t),Wn.cross(Si).dot(s)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,s){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[s]),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),Wn.cross(Si).length()*.5}getMidpoint(e){return e===void 0&&(console.warn("THREE.Triangle: .getMidpoint() target is now required"),e=new N),e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return kt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e===void 0&&(console.warn("THREE.Triangle: .getPlane() target is now required"),e=new ri),e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return kt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,r,s,l){return kt.getUV(e,this.a,this.b,this.c,t,r,s,l)}containsPoint(e){return kt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return kt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){t===void 0&&(console.warn("THREE.Triangle: .closestPointToPoint() target is now required"),t=new N);const r=this.a,s=this.b,l=this.c;let c,d;ts.subVectors(s,r),ns.subVectors(l,r),Vu.subVectors(e,r);const h=ts.dot(Vu),f=ns.dot(Vu);if(h<=0&&f<=0)return t.copy(r);Gu.subVectors(e,s);const m=ts.dot(Gu),v=ns.dot(Gu);if(m>=0&&v<=m)return t.copy(s);const y=h*v-m*f;if(y<=0&&h>=0&&m<=0)return c=h/(h-m),t.copy(r).addScaledVector(ts,c);Wu.subVectors(e,l);const x=ts.dot(Wu),w=ns.dot(Wu);if(w>=0&&x<=w)return t.copy(l);const E=x*f-h*w;if(E<=0&&f>=0&&w<=0)return d=f/(f-w),t.copy(r).addScaledVector(ns,d);const b=m*w-x*v;if(b<=0&&v-m>=0&&x-w>=0)return tm.subVectors(l,s),d=(v-m)/(v-m+(x-w)),t.copy(s).addScaledVector(tm,d);const M=1/(b+E+y);return c=E*M,d=y*M,t.copy(r).addScaledVector(ts,c).addScaledVector(ns,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Nx=0;function Gt(){Object.defineProperty(this,"id",{value:Nx++}),this.uuid=oi(),this.name="",this.type="Material",this.fog=!0,this.blending=Lo,this.side=Dl,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Xm,this.blendDst=qm,this.blendEquation=hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ud,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Au,this.stencilZFail=Au,this.stencilZPass=Au,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaTest=0,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0}Gt.prototype=Object.assign(Object.create(wr.prototype),{constructor:Gt,isMaterial:!0,onBuild:function(){},onBeforeCompile:function(){},customProgramCacheKey:function(){return this.onBeforeCompile.toString()},setValues:function(o){if(o!==void 0)for(const e in o){const t=o[e];if(t===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}if(e==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=t===jm;continue}const r=this[e];if(r===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}r&&r.isColor?r.set(t):r&&r.isVector3&&t&&t.isVector3?r.copy(t):this[e]=t}},toJSON:function(o){const e=o===void 0||typeof o=="string";e&&(o={textures:{},images:{}});const t={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),this.color&&this.color.isColor&&(t.color=this.color.getHex()),this.roughness!==void 0&&(t.roughness=this.roughness),this.metalness!==void 0&&(t.metalness=this.metalness),this.sheen&&this.sheen.isColor&&(t.sheen=this.sheen.getHex()),this.emissive&&this.emissive.isColor&&(t.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(t.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(t.specular=this.specular.getHex()),this.shininess!==void 0&&(t.shininess=this.shininess),this.clearcoat!==void 0&&(t.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(t.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(t.clearcoatMap=this.clearcoatMap.toJSON(o).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(t.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(o).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(t.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(o).uuid,t.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(t.map=this.map.toJSON(o).uuid),this.matcap&&this.matcap.isTexture&&(t.matcap=this.matcap.toJSON(o).uuid),this.alphaMap&&this.alphaMap.isTexture&&(t.alphaMap=this.alphaMap.toJSON(o).uuid),this.lightMap&&this.lightMap.isTexture&&(t.lightMap=this.lightMap.toJSON(o).uuid,t.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(t.aoMap=this.aoMap.toJSON(o).uuid,t.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(t.bumpMap=this.bumpMap.toJSON(o).uuid,t.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(t.normalMap=this.normalMap.toJSON(o).uuid,t.normalMapType=this.normalMapType,t.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(t.displacementMap=this.displacementMap.toJSON(o).uuid,t.displacementScale=this.displacementScale,t.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(t.roughnessMap=this.roughnessMap.toJSON(o).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(t.metalnessMap=this.metalnessMap.toJSON(o).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(t.emissiveMap=this.emissiveMap.toJSON(o).uuid),this.specularMap&&this.specularMap.isTexture&&(t.specularMap=this.specularMap.toJSON(o).uuid),this.envMap&&this.envMap.isTexture&&(t.envMap=this.envMap.toJSON(o).uuid,this.combine!==void 0&&(t.combine=this.combine)),this.envMapIntensity!==void 0&&(t.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(t.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(t.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(t.gradientMap=this.gradientMap.toJSON(o).uuid),this.size!==void 0&&(t.size=this.size),this.shadowSide!==null&&(t.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(t.sizeAttenuation=this.sizeAttenuation),this.blending!==Lo&&(t.blending=this.blending),this.side!==Dl&&(t.side=this.side),this.vertexColors&&(t.vertexColors=!0),this.opacity<1&&(t.opacity=this.opacity),this.transparent===!0&&(t.transparent=this.transparent),t.depthFunc=this.depthFunc,t.depthTest=this.depthTest,t.depthWrite=this.depthWrite,t.colorWrite=this.colorWrite,t.stencilWrite=this.stencilWrite,t.stencilWriteMask=this.stencilWriteMask,t.stencilFunc=this.stencilFunc,t.stencilRef=this.stencilRef,t.stencilFuncMask=this.stencilFuncMask,t.stencilFail=this.stencilFail,t.stencilZFail=this.stencilZFail,t.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(t.rotation=this.rotation),this.polygonOffset===!0&&(t.polygonOffset=!0),this.polygonOffsetFactor!==0&&(t.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(t.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(t.linewidth=this.linewidth),this.dashSize!==void 0&&(t.dashSize=this.dashSize),this.gapSize!==void 0&&(t.gapSize=this.gapSize),this.scale!==void 0&&(t.scale=this.scale),this.dithering===!0&&(t.dithering=!0),this.alphaTest>0&&(t.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(t.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(t.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(t.wireframe=this.wireframe),this.wireframeLinewidth>1&&(t.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(t.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(t.wireframeLinejoin=this.wireframeLinejoin),this.morphTargets===!0&&(t.morphTargets=!0),this.morphNormals===!0&&(t.morphNormals=!0),this.skinning===!0&&(t.skinning=!0),this.flatShading===!0&&(t.flatShading=this.flatShading),this.visible===!1&&(t.visible=!1),this.toneMapped===!1&&(t.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(t.userData=this.userData);function r(s){const l=[];for(const c in s){const d=s[c];delete d.metadata,l.push(d)}return l}if(e){const s=r(o.textures),l=r(o.images);s.length>0&&(t.textures=s),l.length>0&&(t.images=l)}return t},clone:function(){return new this.constructor().copy(this)},copy:function(o){this.name=o.name,this.fog=o.fog,this.blending=o.blending,this.side=o.side,this.vertexColors=o.vertexColors,this.opacity=o.opacity,this.transparent=o.transparent,this.blendSrc=o.blendSrc,this.blendDst=o.blendDst,this.blendEquation=o.blendEquation,this.blendSrcAlpha=o.blendSrcAlpha,this.blendDstAlpha=o.blendDstAlpha,this.blendEquationAlpha=o.blendEquationAlpha,this.depthFunc=o.depthFunc,this.depthTest=o.depthTest,this.depthWrite=o.depthWrite,this.stencilWriteMask=o.stencilWriteMask,this.stencilFunc=o.stencilFunc,this.stencilRef=o.stencilRef,this.stencilFuncMask=o.stencilFuncMask,this.stencilFail=o.stencilFail,this.stencilZFail=o.stencilZFail,this.stencilZPass=o.stencilZPass,this.stencilWrite=o.stencilWrite;const e=o.clippingPlanes;let t=null;if(e!==null){const r=e.length;t=new Array(r);for(let s=0;s!==r;++s)t[s]=e[s].clone()}return this.clippingPlanes=t,this.clipIntersection=o.clipIntersection,this.clipShadows=o.clipShadows,this.shadowSide=o.shadowSide,this.colorWrite=o.colorWrite,this.precision=o.precision,this.polygonOffset=o.polygonOffset,this.polygonOffsetFactor=o.polygonOffsetFactor,this.polygonOffsetUnits=o.polygonOffsetUnits,this.dithering=o.dithering,this.alphaTest=o.alphaTest,this.alphaToCoverage=o.alphaToCoverage,this.premultipliedAlpha=o.premultipliedAlpha,this.visible=o.visible,this.toneMapped=o.toneMapped,this.userData=JSON.parse(JSON.stringify(o.userData)),this},dispose:function(){this.dispatchEvent({type:"dispose"})}});Object.defineProperty(Gt.prototype,"needsUpdate",{set:function(o){o===!0&&this.version++}});const Qm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jn={h:0,s:0,l:0},el={h:0,s:0,l:0};function ju(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}function Xu(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function qu(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}class Ge{constructor(e,t,r){return t===void 0&&r===void 0?this.set(e):this.setRGB(e,t,r)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,t,r){return this.r=e,this.g=t,this.b=r,this}setHSL(e,t,r){if(e=vx(e,1),t=Sn(t,0,1),r=Sn(r,0,1),t===0)this.r=this.g=this.b=r;else{const s=r<=.5?r*(1+t):r+t-r*t,l=2*r-s;this.r=ju(l,s,e+1/3),this.g=ju(l,s,e),this.b=ju(l,s,e-1/3)}return this}setStyle(e){function t(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const l=r[1],c=r[2];switch(l){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,t(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,t(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c)){const d=parseFloat(s[1])/360,h=parseInt(s[2],10)/100,f=parseInt(s[3],10)/100;return t(s[4]),this.setHSL(d,h,f)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],l=s.length;if(l===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,this;if(l===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){const t=Qm[e.toLowerCase()];return t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copyGammaToLinear(e,t=2){return this.r=Math.pow(e.r,t),this.g=Math.pow(e.g,t),this.b=Math.pow(e.b,t),this}copyLinearToGamma(e,t=2){const r=t>0?1/t:1;return this.r=Math.pow(e.r,r),this.g=Math.pow(e.g,r),this.b=Math.pow(e.b,r),this}convertGammaToLinear(e){return this.copyGammaToLinear(this,e),this}convertLinearToGamma(e){return this.copyLinearToGamma(this,e),this}copySRGBToLinear(e){return this.r=Xu(e.r),this.g=Xu(e.g),this.b=Xu(e.b),this}copyLinearToSRGB(e){return this.r=qu(e.r),this.g=qu(e.g),this.b=qu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){e===void 0&&(console.warn("THREE.Color: .getHSL() target is now required"),e={h:0,s:0,l:0});const t=this.r,r=this.g,s=this.b,l=Math.max(t,r,s),c=Math.min(t,r,s);let d,h;const f=(c+l)/2;if(c===l)d=0,h=0;else{const m=l-c;switch(h=f<=.5?m/(l+c):m/(2-l-c),l){case t:d=(r-s)/m+(r<s?6:0);break;case r:d=(s-t)/m+2;break;case s:d=(t-r)/m+4;break}d/=6}return e.h=d,e.s=h,e.l=f,e}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(e,t,r){return this.getHSL(jn),jn.h+=e,jn.s+=t,jn.l+=r,this.setHSL(jn.h,jn.s,jn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(jn),e.getHSL(el);const r=Ru(jn.h,el.h,t),s=Ru(jn.s,el.s,t),l=Ru(jn.l,el.l,t);return this.setHSL(r,s,l),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}Ge.NAMES=Qm;Ge.prototype.isColor=!0;Ge.prototype.r=1;Ge.prototype.g=1;Ge.prototype.b=1;class Ld extends Gt{constructor(e){super(),this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=kl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this}}Ld.prototype.isMeshBasicMaterial=!0;const mt=new N,tl=new xe;class Nt{constructor(e,t,r){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r===!0,this.usage=Do,this.updateRange={offset:0,count:-1},this.version=0,this.onUploadCallback=function(){}}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let s=0,l=this.itemSize;s<l;s++)this.array[e+s]=t.array[r+s];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let r=0;for(let s=0,l=e.length;s<l;s++){let c=e[s];c===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",s),c=new Ge),t[r++]=c.r,t[r++]=c.g,t[r++]=c.b}return this}copyVector2sArray(e){const t=this.array;let r=0;for(let s=0,l=e.length;s<l;s++){let c=e[s];c===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",s),c=new xe),t[r++]=c.x,t[r++]=c.y}return this}copyVector3sArray(e){const t=this.array;let r=0;for(let s=0,l=e.length;s<l;s++){let c=e[s];c===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",s),c=new N),t[r++]=c.x,t[r++]=c.y,t[r++]=c.z}return this}copyVector4sArray(e){const t=this.array;let r=0;for(let s=0,l=e.length;s<l;s++){let c=e[s];c===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",s),c=new dt),t[r++]=c.x,t[r++]=c.y,t[r++]=c.z,t[r++]=c.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)tl.fromBufferAttribute(this,t),tl.applyMatrix3(e),this.setXY(t,tl.x,tl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix3(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)mt.x=this.getX(t),mt.y=this.getY(t),mt.z=this.getZ(t),mt.applyMatrix4(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)mt.x=this.getX(t),mt.y=this.getY(t),mt.z=this.getZ(t),mt.applyNormalMatrix(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)mt.x=this.getX(t),mt.y=this.getY(t),mt.z=this.getZ(t),mt.transformDirection(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=s,this}setXYZW(e,t,r,s,l){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=s,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Do&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}Nt.prototype.isBufferAttribute=!0;class $m extends Nt{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Km extends Nt{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Dx extends Nt{constructor(e,t,r){super(new Uint16Array(e),t,r)}}Dx.prototype.isFloat16BufferAttribute=!0;class Vt extends Nt{constructor(e,t,r){super(new Float32Array(e),t,r)}}function eg(o){if(o.length===0)return-1/0;let e=o[0];for(let t=1,r=o.length;t<r;++t)o[t]>e&&(e=o[t]);return e}let Ix=0;const ii=new We,Yu=new lt,is=new N,Mn=new Nn,go=new Nn,Ut=new N;class ft extends wr{constructor(){super(),Object.defineProperty(this,"id",{value:Ix++}),this.uuid=oi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(eg(e)>65535?Km:$m)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new qt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}rotateX(e){return ii.makeRotationX(e),this.applyMatrix4(ii),this}rotateY(e){return ii.makeRotationY(e),this.applyMatrix4(ii),this}rotateZ(e){return ii.makeRotationZ(e),this.applyMatrix4(ii),this}translate(e,t,r){return ii.makeTranslation(e,t,r),this.applyMatrix4(ii),this}scale(e,t,r){return ii.makeScale(e,t,r),this.applyMatrix4(ii),this}lookAt(e){return Yu.lookAt(e),Yu.updateMatrix(),this.applyMatrix4(Yu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(e){const t=[];for(let r=0,s=e.length;r<s;r++){const l=e[r];t.push(l.x,l.y,l.z||0)}return this.setAttribute("position",new Vt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){const l=t[r];Mn.setFromBufferAttribute(l),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ws);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(e){const r=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const d=t[l];go.setFromBufferAttribute(d),this.morphTargetsRelative?(Ut.addVectors(Mn.min,go.min),Mn.expandByPoint(Ut),Ut.addVectors(Mn.max,go.max),Mn.expandByPoint(Ut)):(Mn.expandByPoint(go.min),Mn.expandByPoint(go.max))}Mn.getCenter(r);let s=0;for(let l=0,c=e.count;l<c;l++)Ut.fromBufferAttribute(e,l),s=Math.max(s,r.distanceToSquared(Ut));if(t)for(let l=0,c=t.length;l<c;l++){const d=t[l],h=this.morphTargetsRelative;for(let f=0,m=d.count;f<m;f++)Ut.fromBufferAttribute(d,f),h&&(is.fromBufferAttribute(e,f),Ut.add(is)),s=Math.max(s,r.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeFaceNormals(){}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=e.array,s=t.position.array,l=t.normal.array,c=t.uv.array,d=s.length/3;t.tangent===void 0&&this.setAttribute("tangent",new Nt(new Float32Array(4*d),4));const h=t.tangent.array,f=[],m=[];for(let oe=0;oe<d;oe++)f[oe]=new N,m[oe]=new N;const v=new N,y=new N,x=new N,w=new xe,E=new xe,b=new xe,M=new N,_=new N;function I(oe,he,ie){v.fromArray(s,oe*3),y.fromArray(s,he*3),x.fromArray(s,ie*3),w.fromArray(c,oe*2),E.fromArray(c,he*2),b.fromArray(c,ie*2),y.sub(v),x.sub(v),E.sub(w),b.sub(w);const F=1/(E.x*b.y-b.x*E.y);isFinite(F)&&(M.copy(y).multiplyScalar(b.y).addScaledVector(x,-E.y).multiplyScalar(F),_.copy(x).multiplyScalar(E.x).addScaledVector(y,-b.x).multiplyScalar(F),f[oe].add(M),f[he].add(M),f[ie].add(M),m[oe].add(_),m[he].add(_),m[ie].add(_))}let U=this.groups;U.length===0&&(U=[{start:0,count:r.length}]);for(let oe=0,he=U.length;oe<he;++oe){const ie=U[oe],F=ie.start,V=ie.count;for(let G=F,B=F+V;G<B;G+=3)I(r[G+0],r[G+1],r[G+2])}const z=new N,T=new N,W=new N,ee=new N;function ne(oe){W.fromArray(l,oe*3),ee.copy(W);const he=f[oe];z.copy(he),z.sub(W.multiplyScalar(W.dot(he))).normalize(),T.crossVectors(ee,he);const F=T.dot(m[oe])<0?-1:1;h[oe*4]=z.x,h[oe*4+1]=z.y,h[oe*4+2]=z.z,h[oe*4+3]=F}for(let oe=0,he=U.length;oe<he;++oe){const ie=U[oe],F=ie.start,V=ie.count;for(let G=F,B=F+V;G<B;G+=3)ne(r[G+0]),ne(r[G+1]),ne(r[G+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Nt(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let y=0,x=r.count;y<x;y++)r.setXYZ(y,0,0,0);const s=new N,l=new N,c=new N,d=new N,h=new N,f=new N,m=new N,v=new N;if(e)for(let y=0,x=e.count;y<x;y+=3){const w=e.getX(y+0),E=e.getX(y+1),b=e.getX(y+2);s.fromBufferAttribute(t,w),l.fromBufferAttribute(t,E),c.fromBufferAttribute(t,b),m.subVectors(c,l),v.subVectors(s,l),m.cross(v),d.fromBufferAttribute(r,w),h.fromBufferAttribute(r,E),f.fromBufferAttribute(r,b),d.add(m),h.add(m),f.add(m),r.setXYZ(w,d.x,d.y,d.z),r.setXYZ(E,h.x,h.y,h.z),r.setXYZ(b,f.x,f.y,f.z)}else for(let y=0,x=t.count;y<x;y+=3)s.fromBufferAttribute(t,y+0),l.fromBufferAttribute(t,y+1),c.fromBufferAttribute(t,y+2),m.subVectors(c,l),v.subVectors(s,l),m.cross(v),r.setXYZ(y+0,m.x,m.y,m.z),r.setXYZ(y+1,m.x,m.y,m.z),r.setXYZ(y+2,m.x,m.y,m.z);this.normalizeNormals(),r.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const r=this.attributes;for(const s in r){if(e.attributes[s]===void 0)continue;const c=r[s].array,d=e.attributes[s],h=d.array,f=d.itemSize*t,m=Math.min(h.length,c.length-f);for(let v=0,y=f;v<m;v++,y++)c[y]=h[v]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)Ut.fromBufferAttribute(e,t),Ut.normalize(),e.setXYZ(t,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(d,h){const f=d.array,m=d.itemSize,v=d.normalized,y=new f.constructor(h.length*m);let x=0,w=0;for(let E=0,b=h.length;E<b;E++){x=h[E]*m;for(let M=0;M<m;M++)y[w++]=f[x++]}return new Nt(y,m,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ft,r=this.index.array,s=this.attributes;for(const d in s){const h=s[d],f=e(h,r);t.setAttribute(d,f)}const l=this.morphAttributes;for(const d in l){const h=[],f=l[d];for(let m=0,v=f.length;m<v;m++){const y=f[m],x=e(y,r);h.push(x)}t.morphAttributes[d]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let d=0,h=c.length;d<h;d++){const f=c[d];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const f in h)h[f]!==void 0&&(e[f]=h[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const h in r){const f=r[h];e.data.attributes[h]=f.toJSON(e.data)}const s={};let l=!1;for(const h in this.morphAttributes){const f=this.morphAttributes[h],m=[];for(let v=0,y=f.length;v<y;v++){const x=f[v];m.push(x.toJSON(e.data))}m.length>0&&(s[h]=m,l=!0)}l&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new ft().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const s=e.attributes;for(const f in s){const m=s[f];this.setAttribute(f,m.clone(t))}const l=e.morphAttributes;for(const f in l){const m=[],v=l[f];for(let y=0,x=v.length;y<x;y++)m.push(v[y].clone(t));this.morphAttributes[f]=m}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let f=0,m=c.length;f<m;f++){const v=c[f];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}ft.prototype.isBufferGeometry=!0;const nm=new We,rs=new Ms,Zu=new ws,Yi=new N,Zi=new N,Ji=new N,Ju=new N,Qu=new N,$u=new N,nl=new N,il=new N,rl=new N,sl=new xe,ol=new xe,al=new xe,Ku=new N,ll=new N;class Zn extends lt{constructor(e=new ft,t=new Ld){super(),this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,r=Object.keys(t);if(r.length>0){const s=t[r[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=s.length;l<c;l++){const d=s[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(e,t){const r=this.geometry,s=this.material,l=this.matrixWorld;if(s===void 0||(r.boundingSphere===null&&r.computeBoundingSphere(),Zu.copy(r.boundingSphere),Zu.applyMatrix4(l),e.ray.intersectsSphere(Zu)===!1)||(nm.copy(l).invert(),rs.copy(e.ray).applyMatrix4(nm),r.boundingBox!==null&&rs.intersectsBox(r.boundingBox)===!1))return;let c;if(r.isBufferGeometry){const d=r.index,h=r.attributes.position,f=r.morphAttributes.position,m=r.morphTargetsRelative,v=r.attributes.uv,y=r.attributes.uv2,x=r.groups,w=r.drawRange;if(d!==null)if(Array.isArray(s))for(let E=0,b=x.length;E<b;E++){const M=x[E],_=s[M.materialIndex],I=Math.max(M.start,w.start),U=Math.min(M.start+M.count,w.start+w.count);for(let z=I,T=U;z<T;z+=3){const W=d.getX(z),ee=d.getX(z+1),ne=d.getX(z+2);c=cl(this,_,e,rs,h,f,m,v,y,W,ee,ne),c&&(c.faceIndex=Math.floor(z/3),c.face.materialIndex=M.materialIndex,t.push(c))}}else{const E=Math.max(0,w.start),b=Math.min(d.count,w.start+w.count);for(let M=E,_=b;M<_;M+=3){const I=d.getX(M),U=d.getX(M+1),z=d.getX(M+2);c=cl(this,s,e,rs,h,f,m,v,y,I,U,z),c&&(c.faceIndex=Math.floor(M/3),t.push(c))}}else if(h!==void 0)if(Array.isArray(s))for(let E=0,b=x.length;E<b;E++){const M=x[E],_=s[M.materialIndex],I=Math.max(M.start,w.start),U=Math.min(M.start+M.count,w.start+w.count);for(let z=I,T=U;z<T;z+=3){const W=z,ee=z+1,ne=z+2;c=cl(this,_,e,rs,h,f,m,v,y,W,ee,ne),c&&(c.faceIndex=Math.floor(z/3),c.face.materialIndex=M.materialIndex,t.push(c))}}else{const E=Math.max(0,w.start),b=Math.min(h.count,w.start+w.count);for(let M=E,_=b;M<_;M+=3){const I=M,U=M+1,z=M+2;c=cl(this,s,e,rs,h,f,m,v,y,I,U,z),c&&(c.faceIndex=Math.floor(M/3),t.push(c))}}}else r.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}Zn.prototype.isMesh=!0;function kx(o,e,t,r,s,l,c,d){let h;if(e.side===Ht?h=r.intersectTriangle(c,l,s,!0,d):h=r.intersectTriangle(s,l,c,e.side!==Il,d),h===null)return null;ll.copy(d),ll.applyMatrix4(o.matrixWorld);const f=t.ray.origin.distanceTo(ll);return f<t.near||f>t.far?null:{distance:f,point:ll.clone(),object:o}}function cl(o,e,t,r,s,l,c,d,h,f,m,v){Yi.fromBufferAttribute(s,f),Zi.fromBufferAttribute(s,m),Ji.fromBufferAttribute(s,v);const y=o.morphTargetInfluences;if(e.morphTargets&&l&&y){nl.set(0,0,0),il.set(0,0,0),rl.set(0,0,0);for(let w=0,E=l.length;w<E;w++){const b=y[w],M=l[w];b!==0&&(Ju.fromBufferAttribute(M,f),Qu.fromBufferAttribute(M,m),$u.fromBufferAttribute(M,v),c?(nl.addScaledVector(Ju,b),il.addScaledVector(Qu,b),rl.addScaledVector($u,b)):(nl.addScaledVector(Ju.sub(Yi),b),il.addScaledVector(Qu.sub(Zi),b),rl.addScaledVector($u.sub(Ji),b)))}Yi.add(nl),Zi.add(il),Ji.add(rl)}o.isSkinnedMesh&&e.skinning&&(o.boneTransform(f,Yi),o.boneTransform(m,Zi),o.boneTransform(v,Ji));const x=kx(o,e,t,r,Yi,Zi,Ji,Ku);if(x){d&&(sl.fromBufferAttribute(d,f),ol.fromBufferAttribute(d,m),al.fromBufferAttribute(d,v),x.uv=kt.getUV(Ku,Yi,Zi,Ji,sl,ol,al,new xe)),h&&(sl.fromBufferAttribute(h,f),ol.fromBufferAttribute(h,m),al.fromBufferAttribute(h,v),x.uv2=kt.getUV(Ku,Yi,Zi,Ji,sl,ol,al,new xe));const w={a:f,b:m,c:v,normal:new N,materialIndex:0};kt.getNormal(Yi,Zi,Ji,w.normal),x.face=w}return x}class Ad extends ft{constructor(e=1,t=1,r=1,s=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:s,heightSegments:l,depthSegments:c};const d=this;s=Math.floor(s),l=Math.floor(l),c=Math.floor(c);const h=[],f=[],m=[],v=[];let y=0,x=0;w("z","y","x",-1,-1,r,t,e,c,l,0),w("z","y","x",1,-1,r,t,-e,c,l,1),w("x","z","y",1,1,e,r,t,s,c,2),w("x","z","y",1,-1,e,r,-t,s,c,3),w("x","y","z",1,-1,e,t,r,s,l,4),w("x","y","z",-1,-1,e,t,-r,s,l,5),this.setIndex(h),this.setAttribute("position",new Vt(f,3)),this.setAttribute("normal",new Vt(m,3)),this.setAttribute("uv",new Vt(v,2));function w(E,b,M,_,I,U,z,T,W,ee,ne){const oe=U/W,he=z/ee,ie=U/2,F=z/2,V=T/2,G=W+1,B=ee+1;let se=0,Y=0;const K=new N;for(let te=0;te<B;te++){const R=te*he-F;for(let q=0;q<G;q++){const ge=q*oe-ie;K[E]=ge*_,K[b]=R*I,K[M]=V,f.push(K.x,K.y,K.z),K[E]=0,K[b]=0,K[M]=T>0?1:-1,m.push(K.x,K.y,K.z),v.push(q/W),v.push(1-te/ee),se+=1}}for(let te=0;te<ee;te++)for(let R=0;R<W;R++){const q=y+R+G*te,ge=y+R+G*(te+1),Z=y+(R+1)+G*(te+1),De=y+(R+1)+G*te;h.push(q,ge,De),h.push(ge,Z,De),Y+=6}d.addGroup(x,Y,ne),x+=Y,y+=se}}}function vs(o){const e={};for(const t in o){e[t]={};for(const r in o[t]){const s=o[t][r];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?e[t][r]=s.clone():Array.isArray(s)?e[t][r]=s.slice():e[t][r]=s}}return e}function en(o){const e={};for(let t=0;t<o.length;t++){const r=vs(o[t]);for(const s in r)e[s]=r[s]}return e}const Fx={clone:vs,merge:en};var zx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _r extends Gt{constructor(e){super(),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=zx,this.fragmentShader=Bx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vs(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const c=this.uniforms[s].value;c&&c.isTexture?t.uniforms[s]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[s]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[s]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[s]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[s]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[s]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[s]={type:"m4",value:c.toArray()}:t.uniforms[s]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const r={};for(const s in this.extensions)this.extensions[s]===!0&&(r[s]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}_r.prototype.isShaderMaterial=!0;class Cd extends lt{constructor(){super(),this.type="Camera",this.matrixWorldInverse=new We,this.projectionMatrix=new We,this.projectionMatrixInverse=new We}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){e===void 0&&(console.warn("THREE.Camera: .getWorldDirection() target is now required"),e=new N),this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}Cd.prototype.isCamera=!0;class mn extends Cd{constructor(e=50,t=1,r=.1,s=2e3){super(),this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=fd*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Cu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fd*2*Math.atan(Math.tan(Cu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,r,s,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=s,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Cu*.5*this.fov)/this.zoom,r=2*t,s=this.aspect*r,l=-.5*s;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,f=c.fullHeight;l+=c.offsetX*s/h,t-=c.offsetY*r/f,s*=c.width/h,r*=c.height/f}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+s,t,t-r,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}mn.prototype.isPerspectiveCamera=!0;const ss=90,os=1;class Rd extends lt{constructor(e,t,r){if(super(),this.type="CubeCamera",r.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=r;const s=new mn(ss,os,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new N(1,0,0)),this.add(s);const l=new mn(ss,os,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new N(-1,0,0)),this.add(l);const c=new mn(ss,os,e,t);c.layers=this.layers,c.up.set(0,0,1),c.lookAt(new N(0,1,0)),this.add(c);const d=new mn(ss,os,e,t);d.layers=this.layers,d.up.set(0,0,-1),d.lookAt(new N(0,-1,0)),this.add(d);const h=new mn(ss,os,e,t);h.layers=this.layers,h.up.set(0,-1,0),h.lookAt(new N(0,0,1)),this.add(h);const f=new mn(ss,os,e,t);f.layers=this.layers,f.up.set(0,-1,0),f.lookAt(new N(0,0,-1)),this.add(f)}update(e,t){this.parent===null&&this.updateMatrixWorld();const r=this.renderTarget,[s,l,c,d,h,f]=this.children,m=e.xr.enabled,v=e.getRenderTarget();e.xr.enabled=!1;const y=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0),e.render(t,s),e.setRenderTarget(r,1),e.render(t,l),e.setRenderTarget(r,2),e.render(t,c),e.setRenderTarget(r,3),e.render(t,d),e.setRenderTarget(r,4),e.render(t,h),r.texture.generateMipmaps=y,e.setRenderTarget(r,5),e.render(t,f),e.setRenderTarget(v),e.xr.enabled=m}}class Fl extends Yt{constructor(e,t,r,s,l,c,d,h,f,m){e=e!==void 0?e:[],t=t!==void 0?t:_d,d=d!==void 0?d:yr,super(e,t,r,s,l,c,d,h,f,m),this._needsFlipEnvMap=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}Fl.prototype.isCubeTexture=!0;class tg extends xr{constructor(e,t,r){Number.isInteger(t)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),t=r),super(e,e,t),t=t||{},this.texture=new Fl(void 0,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Rn,this.texture._needsFlipEnvMap=!1}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.format=Yn,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ad(5,5,5),l=new _r({name:"CubemapFromEquirect",uniforms:vs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Ht,blending:To});l.uniforms.tEquirect.value=t;const c=new Zn(s,l),d=t.minFilter;return t.minFilter===Ed&&(t.minFilter=Rn),new Rd(1,10,this).update(e,c),t.minFilter=d,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,r,s){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,r,s);e.setRenderTarget(l)}}tg.prototype.isWebGLCubeRenderTarget=!0;class ng extends Yt{constructor(e,t,r,s,l,c,d,h,f,m,v,y){super(null,c,d,h,f,m,s,l,v,y),this.image={data:e||null,width:t||1,height:r||1},this.magFilter=f!==void 0?f:on,this.minFilter=m!==void 0?m:on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}ng.prototype.isDataTexture=!0;const as=new ws,ul=new N;class zl{constructor(e=new ri,t=new ri,r=new ri,s=new ri,l=new ri,c=new ri){this.planes=[e,t,r,s,l,c]}set(e,t,r,s,l,c){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(r),d[3].copy(s),d[4].copy(l),d[5].copy(c),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e){const t=this.planes,r=e.elements,s=r[0],l=r[1],c=r[2],d=r[3],h=r[4],f=r[5],m=r[6],v=r[7],y=r[8],x=r[9],w=r[10],E=r[11],b=r[12],M=r[13],_=r[14],I=r[15];return t[0].setComponents(d-s,v-h,E-y,I-b).normalize(),t[1].setComponents(d+s,v+h,E+y,I+b).normalize(),t[2].setComponents(d+l,v+f,E+x,I+M).normalize(),t[3].setComponents(d-l,v-f,E-x,I-M).normalize(),t[4].setComponents(d-c,v-m,E-w,I-_).normalize(),t[5].setComponents(d+c,v+m,E+w,I+_).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),as.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(as)}intersectsSprite(e){return as.center.set(0,0,0),as.radius=.7071067811865476,as.applyMatrix4(e.matrixWorld),this.intersectsSphere(as)}intersectsSphere(e){const t=this.planes,r=e.center,s=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const s=t[r];if(ul.x=s.normal.x>0?e.max.x:e.min.x,ul.y=s.normal.y>0?e.max.y:e.min.y,ul.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ul)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ig(){let o=null,e=!1,t=null,r=null;function s(l,c){t(l,c),r=o.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(r=o.requestAnimationFrame(s),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){o=l}}}function Ox(o,e){const t=e.isWebGL2,r=new WeakMap;function s(f,m){const v=f.array,y=f.usage,x=o.createBuffer();o.bindBuffer(m,x),o.bufferData(m,v,y),f.onUploadCallback();let w=5126;return v instanceof Float32Array?w=5126:v instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):v instanceof Uint16Array?f.isFloat16BufferAttribute?t?w=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):w=5123:v instanceof Int16Array?w=5122:v instanceof Uint32Array?w=5125:v instanceof Int32Array?w=5124:v instanceof Int8Array?w=5120:v instanceof Uint8Array&&(w=5121),{buffer:x,type:w,bytesPerElement:v.BYTES_PER_ELEMENT,version:f.version}}function l(f,m,v){const y=m.array,x=m.updateRange;o.bindBuffer(v,f),x.count===-1?o.bufferSubData(v,0,y):(t?o.bufferSubData(v,x.offset*y.BYTES_PER_ELEMENT,y,x.offset,x.count):o.bufferSubData(v,x.offset*y.BYTES_PER_ELEMENT,y.subarray(x.offset,x.offset+x.count)),x.count=-1)}function c(f){return f.isInterleavedBufferAttribute&&(f=f.data),r.get(f)}function d(f){f.isInterleavedBufferAttribute&&(f=f.data);const m=r.get(f);m&&(o.deleteBuffer(m.buffer),r.delete(f))}function h(f,m){if(f.isGLBufferAttribute){const y=r.get(f);(!y||y.version<f.version)&&r.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}f.isInterleavedBufferAttribute&&(f=f.data);const v=r.get(f);v===void 0?r.set(f,s(f,m)):v.version<f.version&&(l(v.buffer,f,m),v.version=f.version)}return{get:c,remove:d,update:h}}class Ux extends ft{constructor(e=1,t=1,r=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:s};const l=e/2,c=t/2,d=Math.floor(r),h=Math.floor(s),f=d+1,m=h+1,v=e/d,y=t/h,x=[],w=[],E=[],b=[];for(let M=0;M<m;M++){const _=M*y-c;for(let I=0;I<f;I++){const U=I*v-l;w.push(U,-_,0),E.push(0,0,1),b.push(I/d),b.push(1-M/h)}}for(let M=0;M<h;M++)for(let _=0;_<d;_++){const I=_+f*M,U=_+f*(M+1),z=_+1+f*(M+1),T=_+1+f*M;x.push(I,U,T),x.push(U,z,T)}this.setIndex(x),this.setAttribute("position",new Vt(w,3)),this.setAttribute("normal",new Vt(E,3)),this.setAttribute("uv",new Vt(b,2))}}var Hx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Vx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gx=`#ifdef ALPHATEST
	if ( diffuseColor.a < ALPHATEST ) discard;
#endif`,Wx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );
	#endif
#endif`,jx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xx="vec3 transformed = vec3( position );",qx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yx=`vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	return vec2( -1.04, 1.04 ) * a004 + r.zw;
}
float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
#if defined ( PHYSICALLY_CORRECT_LIGHTS )
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
#else
	if( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
		return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );
	}
	return 1.0;
#endif
}
vec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {
	float fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );
	return ( 1.0 - specularColor ) * fresnel + specularColor;
}
vec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {
	float fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );
	vec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;
	return Fr * fresnel + F0;
}
float G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	float gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	return 1.0 / ( gl * gv );
}
float G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( incidentLight.direction + viewDir );
	float dotNL = saturate( dot( normal, incidentLight.direction ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( G * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
vec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	return specularColor * brdf.x + brdf.y;
}
void BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
	vec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	vec3 FssEss = F * brdf.x + brdf.y;
	float Ess = brdf.x + brdf.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );
	float dotNH = saturate( dot( geometry.normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
float GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {
	return ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );
}
float BlinnExponentToGGXRoughness( const in float blinnExponent ) {
	return sqrt( 2.0 / ( blinnExponent + 2.0 ) );
}
#if defined( USE_SHEEN )
float D_Charlie(float roughness, float NoH) {
	float invAlpha = 1.0 / roughness;
	float cos2h = NoH * NoH;
	float sin2h = max(1.0 - cos2h, 0.0078125);	return (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);
}
float V_Neubelt(float NoV, float NoL) {
	return saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));
}
vec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {
	vec3 N = geometry.normal;
	vec3 V = geometry.viewDir;
	vec3 H = normalize( V + L );
	float dotNH = saturate( dot( N, H ) );
	return specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );
}
#endif`,Zx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Jx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Qx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$x=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,e_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,t_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,n_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,i_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,r_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement(a) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract(sin(sn) * c);
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
vec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	float distance = dot( planeNormal, point - pointOnPlane );
	return - distance * planeNormal + point;
}
float sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return sign( dot( point - pointOnPlane, planeNormal ) );
}
vec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,s_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );
		vec2 f = fract( uv );
		uv += 0.5 - f;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		vec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x += texelSize;
		vec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.y += texelSize;
		vec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x -= texelSize;
		vec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		vec3 tm = mix( tl, tr, f.x );
		vec3 bm = mix( bl, br, f.x );
		return mix( tm, bm, f.y );
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,o_=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,a_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,l_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,c_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,u_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,d_="gl_FragColor = linearToOutputTexel( gl_FragColor );",h_=`
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value ) {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}`,f_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifndef ENVMAP_TYPE_CUBE_UV
		envColor = envMapTexelToLinear( envColor );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,p_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,m_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,g_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,v_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,y_=`#ifdef USE_FOG
	fogDepth = - mvPosition.z;
#endif`,x_=`#ifdef USE_FOG
	varying float fogDepth;
#endif`,__=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, fogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,w_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float fogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,M_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return texture2D( gradientMap, coord ).rgb;
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,S_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel= texture2D( lightMap, vUv2 );
	reflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
#endif`,E_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,b_=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );
		#endif
	}
	#pragma unroll_loop_end
#endif`,T_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {
	vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	return irradiance;
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		directLight.color = directionalLight.color;
		directLight.direction = directionalLight.direction;
		directLight.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = pointLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		directLight.color = pointLight.color;
		directLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );
		directLight.visible = ( directLight.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = spotLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		float angleCos = dot( directLight.direction, spotLight.direction );
		if ( angleCos > spotLight.coneCos ) {
			float spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );
			directLight.color = spotLight.color;
			directLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );
			directLight.visible = true;
		} else {
			directLight.color = vec3( 0.0 );
			directLight.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {
		float dotNL = dot( geometry.normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			irradiance *= PI;
		#endif
		return irradiance;
	}
#endif`,L_=`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {
		vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );
			#else
				vec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
		#else
			vec4 envMapColor = vec4( 0.0 );
		#endif
		return PI * envMapColor.rgb * envMapIntensity;
	}
	float getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {
		float maxMIPLevelScalar = float( maxMIPLevel );
		float sigma = PI * roughness * roughness / ( 1.0 + roughness );
		float desiredMIPLevel = maxMIPLevelScalar + log2( sigma );
		return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );
	}
	vec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( -viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
		#else
			vec3 reflectVec = refract( -viewDir, normal, refractionRatio );
		#endif
		reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
		float specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );
			#else
				vec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
		#endif
		return envMapColor.rgb * envMapIntensity;
	}
#endif`,A_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,C_=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,R_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,P_=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,N_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;
material.specularRoughness = min( material.specularRoughness, 1.0 );
#ifdef REFLECTIVITY
	material.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );
#endif
#ifdef CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheen;
#endif`,D_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float specularRoughness;
	vec3 specularColor;
#ifdef CLEARCOAT
	float clearcoat;
	float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	vec3 sheenColor;
#endif
};
#define MAXIMUM_SPECULAR_COEFFICIENT 0.16
#define DEFAULT_SPECULAR_COEFFICIENT 0.04
float clearcoatDHRApprox( const in float roughness, const in float dotNL ) {
	return DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.specularRoughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	#ifdef CLEARCOAT
		float ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = ccDotNL * directLight.color;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			ccIrradiance *= PI;
		#endif
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
		reflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
	#else
		float clearcoatDHR = 0.0;
	#endif
	#ifdef USE_SHEEN
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(
			material.specularRoughness,
			directLight.direction,
			geometry,
			material.sheenColor
		);
	#else
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);
	#endif
	reflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef CLEARCOAT
		float ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		reflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
		float ccDotNL = ccDotNV;
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
	#else
		float clearcoatDHR = 0.0;
	#endif
	float clearcoatInv = 1.0 - clearcoatDHR;
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	BRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,I_=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointDirectLightIrradiance( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotDirectLightIrradiance( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,k_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );
	#ifdef CLEARCOAT
		clearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );
	#endif
#endif`,F_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,z_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,B_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,O_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,U_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,H_=`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,V_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,G_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,W_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,j_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,X_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,q_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
	objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
	objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
	objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
#endif`,Y_=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifndef USE_MORPHNORMALS
		uniform float morphTargetInfluences[ 8 ];
	#else
		uniform float morphTargetInfluences[ 4 ];
	#endif
#endif`,Z_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	transformed += morphTarget0 * morphTargetInfluences[ 0 ];
	transformed += morphTarget1 * morphTargetInfluences[ 1 ];
	transformed += morphTarget2 * morphTargetInfluences[ 2 ];
	transformed += morphTarget3 * morphTargetInfluences[ 3 ];
	#ifndef USE_MORPHNORMALS
		transformed += morphTarget4 * morphTargetInfluences[ 4 ];
		transformed += morphTarget5 * morphTargetInfluences[ 5 ];
		transformed += morphTarget6 * morphTargetInfluences[ 6 ];
		transformed += morphTarget7 * morphTargetInfluences[ 7 ];
	#endif
#endif`,J_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Q_=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( -vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,$_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,K_=`#ifdef CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,ew=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,tw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,nw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return (( near + viewZ ) * far ) / (( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,iw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ow=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,aw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cw=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,uw=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,dw=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,hw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,fw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,mw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,vw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_w=`#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ww=`#ifdef USE_TRANSMISSIONMAP
	totalTransmission *= texture2D( transmissionMap, vUv ).r;
#endif`,Mw=`#ifdef USE_TRANSMISSIONMAP
	uniform sampler2D transmissionMap;
#endif`,Sw=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Ew=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,bw=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Tw=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Lw=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Aw=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Cw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Rw=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Pw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Nw=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Dw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Iw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,kw=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Fw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,zw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Bw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ow=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Uw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Vw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
	
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gw=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <skinbase_vertex>
	#ifdef USE_ENVMAP
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ww=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jw=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qw=`#define MATCAP
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#ifndef FLAT_SHADED
		vNormal = normalize( transformedNormal );
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Yw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zw=`#define TOON
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qw=`#define PHONG
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$w=`#define STANDARD
#ifdef PHYSICAL
	#define REFLECTIVITY
	#define CLEARCOAT
	#define TRANSMISSION
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef TRANSMISSION
	uniform float transmission;
#endif
#ifdef REFLECTIVITY
	uniform float reflectivity;
#endif
#ifdef CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <transmissionmap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#ifdef TRANSMISSION
		float totalTransmission = transmission;
	#endif
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <transmissionmap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#ifdef TRANSMISSION
		diffuseColor.a *= mix( saturate( 1. - totalTransmission + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) ), 1.0, metalness );
	#endif
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kw=`#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <packing>
#include <uv_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}`,tM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,nM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,rM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,sM=`#include <common>
#include <fog_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <begin_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,aM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`;const tt={alphamap_fragment:Hx,alphamap_pars_fragment:Vx,alphatest_fragment:Gx,aomap_fragment:Wx,aomap_pars_fragment:jx,begin_vertex:Xx,beginnormal_vertex:qx,bsdfs:Yx,bumpmap_pars_fragment:Zx,clipping_planes_fragment:Jx,clipping_planes_pars_fragment:Qx,clipping_planes_pars_vertex:$x,clipping_planes_vertex:Kx,color_fragment:e_,color_pars_fragment:t_,color_pars_vertex:n_,color_vertex:i_,common:r_,cube_uv_reflection_fragment:s_,defaultnormal_vertex:o_,displacementmap_pars_vertex:a_,displacementmap_vertex:l_,emissivemap_fragment:c_,emissivemap_pars_fragment:u_,encodings_fragment:d_,encodings_pars_fragment:h_,envmap_fragment:f_,envmap_common_pars_fragment:p_,envmap_pars_fragment:m_,envmap_pars_vertex:g_,envmap_physical_pars_fragment:L_,envmap_vertex:v_,fog_vertex:y_,fog_pars_vertex:x_,fog_fragment:__,fog_pars_fragment:w_,gradientmap_pars_fragment:M_,lightmap_fragment:S_,lightmap_pars_fragment:E_,lights_lambert_vertex:b_,lights_pars_begin:T_,lights_toon_fragment:A_,lights_toon_pars_fragment:C_,lights_phong_fragment:R_,lights_phong_pars_fragment:P_,lights_physical_fragment:N_,lights_physical_pars_fragment:D_,lights_fragment_begin:I_,lights_fragment_maps:k_,lights_fragment_end:F_,logdepthbuf_fragment:z_,logdepthbuf_pars_fragment:B_,logdepthbuf_pars_vertex:O_,logdepthbuf_vertex:U_,map_fragment:H_,map_pars_fragment:V_,map_particle_fragment:G_,map_particle_pars_fragment:W_,metalnessmap_fragment:j_,metalnessmap_pars_fragment:X_,morphnormal_vertex:q_,morphtarget_pars_vertex:Y_,morphtarget_vertex:Z_,normal_fragment_begin:J_,normal_fragment_maps:Q_,normalmap_pars_fragment:$_,clearcoat_normal_fragment_begin:K_,clearcoat_normal_fragment_maps:ew,clearcoat_pars_fragment:tw,packing:nw,premultiplied_alpha_fragment:iw,project_vertex:rw,dithering_fragment:sw,dithering_pars_fragment:ow,roughnessmap_fragment:aw,roughnessmap_pars_fragment:lw,shadowmap_pars_fragment:cw,shadowmap_pars_vertex:uw,shadowmap_vertex:dw,shadowmask_pars_fragment:hw,skinbase_vertex:fw,skinning_pars_vertex:pw,skinning_vertex:mw,skinnormal_vertex:gw,specularmap_fragment:vw,specularmap_pars_fragment:yw,tonemapping_fragment:xw,tonemapping_pars_fragment:_w,transmissionmap_fragment:ww,transmissionmap_pars_fragment:Mw,uv_pars_fragment:Sw,uv_pars_vertex:Ew,uv_vertex:bw,uv2_pars_fragment:Tw,uv2_pars_vertex:Lw,uv2_vertex:Aw,worldpos_vertex:Cw,background_frag:Rw,background_vert:Pw,cube_frag:Nw,cube_vert:Dw,depth_frag:Iw,depth_vert:kw,distanceRGBA_frag:Fw,distanceRGBA_vert:zw,equirect_frag:Bw,equirect_vert:Ow,linedashed_frag:Uw,linedashed_vert:Hw,meshbasic_frag:Vw,meshbasic_vert:Gw,meshlambert_frag:Ww,meshlambert_vert:jw,meshmatcap_frag:Xw,meshmatcap_vert:qw,meshtoon_frag:Yw,meshtoon_vert:Zw,meshphong_frag:Jw,meshphong_vert:Qw,meshphysical_frag:$w,meshphysical_vert:Kw,normal_frag:eM,normal_vert:tM,points_frag:nM,points_vert:iM,shadow_frag:rM,shadow_vert:sM,sprite_frag:oM,sprite_vert:aM},be={common:{diffuse:{value:new Ge(15658734)},opacity:{value:1},map:{value:null},uvTransform:{value:new qt},uv2Transform:{value:new qt},alphaMap:{value:null}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},uvTransform:{value:new qt}},sprite:{diffuse:{value:new Ge(15658734)},opacity:{value:1},center:{value:new xe(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},uvTransform:{value:new qt}}},si={basic:{uniforms:en([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:en([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.fog,be.lights,{emissive:{value:new Ge(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:en([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:en([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:en([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new Ge(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:en([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:en([be.points,be.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:en([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:en([be.common,be.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:en([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:tt.normal_vert,fragmentShader:tt.normal_frag},sprite:{uniforms:en([be.sprite,be.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},cube:{uniforms:en([be.envmap,{opacity:{value:1}}]),vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distanceRGBA:{uniforms:en([be.common,be.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distanceRGBA_vert,fragmentShader:tt.distanceRGBA_frag},shadow:{uniforms:en([be.lights,be.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};si.physical={uniforms:en([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new xe(1,1)},clearcoatNormalMap:{value:null},sheen:{value:new Ge(0)},transmission:{value:0},transmissionMap:{value:null}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};function lM(o,e,t,r,s){const l=new Ge(0);let c=0,d,h,f=null,m=0,v=null;function y(w,E,b,M){let _=E.isScene===!0?E.background:null;_&&_.isTexture&&(_=e.get(_));const I=o.xr,U=I.getSession&&I.getSession();U&&U.environmentBlendMode==="additive"&&(_=null),_===null?x(l,c):_&&_.isColor&&(x(_,1),M=!0),(o.autoClear||M)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Md)?(h===void 0&&(h=new Zn(new Ad(1,1,1),new _r({name:"BackgroundCubeMaterial",uniforms:vs(si.cube.uniforms),vertexShader:si.cube.vertexShader,fragmentShader:si.cube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(z,T,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_._needsFlipEnvMap?-1:1,(f!==_||m!==_.version||v!==o.toneMapping)&&(h.material.needsUpdate=!0,f=_,m=_.version,v=o.toneMapping),w.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(d===void 0&&(d=new Zn(new Ux(2,2),new _r({name:"BackgroundMaterial",uniforms:vs(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:Dl,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=_,_.matrixAutoUpdate===!0&&_.updateMatrix(),d.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||m!==_.version||v!==o.toneMapping)&&(d.material.needsUpdate=!0,f=_,m=_.version,v=o.toneMapping),w.unshift(d,d.geometry,d.material,0,0,null))}function x(w,E){t.buffers.color.setClear(w.r,w.g,w.b,E,s)}return{getClearColor:function(){return l},setClearColor:function(w,E=1){l.set(w),c=E,x(l,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,x(l,c)},render:y}}function cM(o,e,t,r){const s=o.getParameter(34921),l=r.isWebGL2?null:e.get("OES_vertex_array_object"),c=r.isWebGL2||l!==null,d={},h=E(null);let f=h;function m(F,V,G,B,se){let Y=!1;if(c){const K=w(B,G,V);f!==K&&(f=K,y(f.object)),Y=b(B,se),Y&&M(B,se)}else{const K=V.wireframe===!0;(f.geometry!==B.id||f.program!==G.id||f.wireframe!==K)&&(f.geometry=B.id,f.program=G.id,f.wireframe=K,Y=!0)}F.isInstancedMesh===!0&&(Y=!0),se!==null&&t.update(se,34963),Y&&(W(F,V,G,B),se!==null&&o.bindBuffer(34963,t.get(se).buffer))}function v(){return r.isWebGL2?o.createVertexArray():l.createVertexArrayOES()}function y(F){return r.isWebGL2?o.bindVertexArray(F):l.bindVertexArrayOES(F)}function x(F){return r.isWebGL2?o.deleteVertexArray(F):l.deleteVertexArrayOES(F)}function w(F,V,G){const B=G.wireframe===!0;let se=d[F.id];se===void 0&&(se={},d[F.id]=se);let Y=se[V.id];Y===void 0&&(Y={},se[V.id]=Y);let K=Y[B];return K===void 0&&(K=E(v()),Y[B]=K),K}function E(F){const V=[],G=[],B=[];for(let se=0;se<s;se++)V[se]=0,G[se]=0,B[se]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:G,attributeDivisors:B,object:F,attributes:{},index:null}}function b(F,V){const G=f.attributes,B=F.attributes;let se=0;for(const Y in B){const K=G[Y],te=B[Y];if(K===void 0||K.attribute!==te||K.data!==te.data)return!0;se++}return f.attributesNum!==se||f.index!==V}function M(F,V){const G={},B=F.attributes;let se=0;for(const Y in B){const K=B[Y],te={};te.attribute=K,K.data&&(te.data=K.data),G[Y]=te,se++}f.attributes=G,f.attributesNum=se,f.index=V}function _(){const F=f.newAttributes;for(let V=0,G=F.length;V<G;V++)F[V]=0}function I(F){U(F,0)}function U(F,V){const G=f.newAttributes,B=f.enabledAttributes,se=f.attributeDivisors;G[F]=1,B[F]===0&&(o.enableVertexAttribArray(F),B[F]=1),se[F]!==V&&((r.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,V),se[F]=V)}function z(){const F=f.newAttributes,V=f.enabledAttributes;for(let G=0,B=V.length;G<B;G++)V[G]!==F[G]&&(o.disableVertexAttribArray(G),V[G]=0)}function T(F,V,G,B,se,Y){r.isWebGL2===!0&&(G===5124||G===5125)?o.vertexAttribIPointer(F,V,G,se,Y):o.vertexAttribPointer(F,V,G,B,se,Y)}function W(F,V,G,B){if(r.isWebGL2===!1&&(F.isInstancedMesh||B.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const se=B.attributes,Y=G.getAttributes(),K=V.defaultAttributeValues;for(const te in Y){const R=Y[te];if(R>=0){const q=se[te];if(q!==void 0){const ge=q.normalized,Z=q.itemSize,De=t.get(q);if(De===void 0)continue;const Ce=De.buffer,Le=De.type,we=De.bytesPerElement;if(q.isInterleavedBufferAttribute){const ze=q.data,Oe=ze.stride,Qe=q.offset;ze&&ze.isInstancedInterleavedBuffer?(U(R,ze.meshPerAttribute),B._maxInstanceCount===void 0&&(B._maxInstanceCount=ze.meshPerAttribute*ze.count)):I(R),o.bindBuffer(34962,Ce),T(R,Z,Le,ge,Oe*we,Qe*we)}else q.isInstancedBufferAttribute?(U(R,q.meshPerAttribute),B._maxInstanceCount===void 0&&(B._maxInstanceCount=q.meshPerAttribute*q.count)):I(R),o.bindBuffer(34962,Ce),T(R,Z,Le,ge,0,0)}else if(te==="instanceMatrix"){const ge=t.get(F.instanceMatrix);if(ge===void 0)continue;const Z=ge.buffer,De=ge.type;U(R+0,1),U(R+1,1),U(R+2,1),U(R+3,1),o.bindBuffer(34962,Z),o.vertexAttribPointer(R+0,4,De,!1,64,0),o.vertexAttribPointer(R+1,4,De,!1,64,16),o.vertexAttribPointer(R+2,4,De,!1,64,32),o.vertexAttribPointer(R+3,4,De,!1,64,48)}else if(te==="instanceColor"){const ge=t.get(F.instanceColor);if(ge===void 0)continue;const Z=ge.buffer,De=ge.type;U(R,1),o.bindBuffer(34962,Z),o.vertexAttribPointer(R,3,De,!1,12,0)}else if(K!==void 0){const ge=K[te];if(ge!==void 0)switch(ge.length){case 2:o.vertexAttrib2fv(R,ge);break;case 3:o.vertexAttrib3fv(R,ge);break;case 4:o.vertexAttrib4fv(R,ge);break;default:o.vertexAttrib1fv(R,ge)}}}}z()}function ee(){he();for(const F in d){const V=d[F];for(const G in V){const B=V[G];for(const se in B)x(B[se].object),delete B[se];delete V[G]}delete d[F]}}function ne(F){if(d[F.id]===void 0)return;const V=d[F.id];for(const G in V){const B=V[G];for(const se in B)x(B[se].object),delete B[se];delete V[G]}delete d[F.id]}function oe(F){for(const V in d){const G=d[V];if(G[F.id]===void 0)continue;const B=G[F.id];for(const se in B)x(B[se].object),delete B[se];delete G[F.id]}}function he(){ie(),f!==h&&(f=h,y(f.object))}function ie(){h.geometry=null,h.program=null,h.wireframe=!1}return{setup:m,reset:he,resetDefaultState:ie,dispose:ee,releaseStatesOfGeometry:ne,releaseStatesOfProgram:oe,initAttributes:_,enableAttribute:I,disableUnusedAttributes:z}}function uM(o,e,t,r){const s=r.isWebGL2;let l;function c(f){l=f}function d(f,m){o.drawArrays(l,f,m),t.update(m,l,1)}function h(f,m,v){if(v===0)return;let y,x;if(s)y=o,x="drawArraysInstanced";else if(y=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",y===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[x](l,f,m,v),t.update(m,l,v)}this.setMode=c,this.render=d,this.renderInstances=h}function dM(o,e,t){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=o.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function l(T){if(T==="highp"){if(o.getShaderPrecisionFormat(35633,36338).precision>0&&o.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";T="mediump"}return T==="mediump"&&o.getShaderPrecisionFormat(35633,36337).precision>0&&o.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const c=typeof WebGL2RenderingContext<"u"&&o instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&o instanceof WebGL2ComputeRenderingContext;let d=t.precision!==void 0?t.precision:"highp";const h=l(d);h!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",h,"instead."),d=h);const f=t.logarithmicDepthBuffer===!0,m=o.getParameter(34930),v=o.getParameter(35660),y=o.getParameter(3379),x=o.getParameter(34076),w=o.getParameter(34921),E=o.getParameter(36347),b=o.getParameter(36348),M=o.getParameter(36349),_=v>0,I=c||e.has("OES_texture_float"),U=_&&I,z=c?o.getParameter(36183):0;return{isWebGL2:c,getMaxAnisotropy:s,getMaxPrecision:l,precision:d,logarithmicDepthBuffer:f,maxTextures:m,maxVertexTextures:v,maxTextureSize:y,maxCubemapSize:x,maxAttributes:w,maxVertexUniforms:E,maxVaryings:b,maxFragmentUniforms:M,vertexTextures:_,floatFragmentTextures:I,floatVertexTextures:U,maxSamples:z}}function hM(o){const e=this;let t=null,r=0,s=!1,l=!1;const c=new ri,d=new qt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(v,y,x){const w=v.length!==0||y||r!==0||s;return s=y,t=m(v,x,0),r=v.length,w},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1,f()},this.setState=function(v,y,x){const w=v.clippingPlanes,E=v.clipIntersection,b=v.clipShadows,M=o.get(v);if(!s||w===null||w.length===0||l&&!b)l?m(null):f();else{const _=l?0:r,I=_*4;let U=M.clippingState||null;h.value=U,U=m(w,y,I,x);for(let z=0;z!==I;++z)U[z]=t[z];M.clippingState=U,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=_}};function f(){h.value!==t&&(h.value=t,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function m(v,y,x,w){const E=v!==null?v.length:0;let b=null;if(E!==0){if(b=h.value,w!==!0||b===null){const M=x+E*4,_=y.matrixWorldInverse;d.getNormalMatrix(_),(b===null||b.length<M)&&(b=new Float32Array(M));for(let I=0,U=x;I!==E;++I,U+=4)c.copy(v[I]).applyMatrix4(_,d),c.normal.toArray(b,U),b[U+3]=c.constant}h.value=b,h.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,b}}function fM(o){let e=new WeakMap;function t(c,d){return d===Rp?c.mapping=_d:d===Pp&&(c.mapping=wd),c}function r(c){if(c&&c.isTexture){const d=c.mapping;if(d===Rp||d===Pp)if(e.has(c)){const h=e.get(c).texture;return t(h,c.mapping)}else{const h=c.image;if(h&&h.height>0){const f=o.getRenderTarget(),m=new tg(h.height/2);return m.fromEquirectangularTexture(o,c),e.set(c,m),o.setRenderTarget(f),c.addEventListener("dispose",s),t(m.texture,c.mapping)}else return null}}return c}function s(c){const d=c.target;d.removeEventListener("dispose",s);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}function pM(o){const e={};function t(r){if(e[r]!==void 0)return e[r];let s;switch(r){case"WEBGL_depth_texture":s=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=o.getExtension(r)}return e[r]=s,s}return{has:function(r){return t(r)!==null},init:function(r){r.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float")},get:function(r){const s=t(r);return s===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),s}}}function mM(o,e,t,r){const s={},l=new WeakMap;function c(v){const y=v.target;y.index!==null&&e.remove(y.index);for(const w in y.attributes)e.remove(y.attributes[w]);y.removeEventListener("dispose",c),delete s[y.id];const x=l.get(y);x&&(e.remove(x),l.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,t.memory.geometries--}function d(v,y){return s[y.id]===!0||(y.addEventListener("dispose",c),s[y.id]=!0,t.memory.geometries++),y}function h(v){const y=v.attributes;for(const w in y)e.update(y[w],34962);const x=v.morphAttributes;for(const w in x){const E=x[w];for(let b=0,M=E.length;b<M;b++)e.update(E[b],34962)}}function f(v){const y=[],x=v.index,w=v.attributes.position;let E=0;if(x!==null){const _=x.array;E=x.version;for(let I=0,U=_.length;I<U;I+=3){const z=_[I+0],T=_[I+1],W=_[I+2];y.push(z,T,T,W,W,z)}}else{const _=w.array;E=w.version;for(let I=0,U=_.length/3-1;I<U;I+=3){const z=I+0,T=I+1,W=I+2;y.push(z,T,T,W,W,z)}}const b=new(eg(y)>65535?Km:$m)(y,1);b.version=E;const M=l.get(v);M&&e.remove(M),l.set(v,b)}function m(v){const y=l.get(v);if(y){const x=v.index;x!==null&&y.version<x.version&&f(v)}else f(v);return l.get(v)}return{get:d,update:h,getWireframeAttribute:m}}function gM(o,e,t,r){const s=r.isWebGL2;let l;function c(y){l=y}let d,h;function f(y){d=y.type,h=y.bytesPerElement}function m(y,x){o.drawElements(l,x,d,y*h),t.update(x,l,1)}function v(y,x,w){if(w===0)return;let E,b;if(s)E=o,b="drawElementsInstanced";else if(E=e.get("ANGLE_instanced_arrays"),b="drawElementsInstancedANGLE",E===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}E[b](l,x,d,y*h,w),t.update(x,l,w)}this.setMode=c,this.setIndex=f,this.render=m,this.renderInstances=v}function vM(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,c,d){switch(t.calls++,c){case 4:t.triangles+=d*(l/3);break;case 1:t.lines+=d*(l/2);break;case 3:t.lines+=d*(l-1);break;case 2:t.lines+=d*l;break;case 0:t.points+=d*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function s(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:r}}function yM(o,e){return o[0]-e[0]}function xM(o,e){return Math.abs(e[1])-Math.abs(o[1])}function _M(o){const e={},t=new Float32Array(8),r=[];for(let l=0;l<8;l++)r[l]=[l,0];function s(l,c,d,h){const f=l.morphTargetInfluences,m=f===void 0?0:f.length;let v=e[c.id];if(v===void 0){v=[];for(let b=0;b<m;b++)v[b]=[b,0];e[c.id]=v}for(let b=0;b<m;b++){const M=v[b];M[0]=b,M[1]=f[b]}v.sort(xM);for(let b=0;b<8;b++)b<m&&v[b][1]?(r[b][0]=v[b][0],r[b][1]=v[b][1]):(r[b][0]=Number.MAX_SAFE_INTEGER,r[b][1]=0);r.sort(yM);const y=d.morphTargets&&c.morphAttributes.position,x=d.morphNormals&&c.morphAttributes.normal;let w=0;for(let b=0;b<8;b++){const M=r[b],_=M[0],I=M[1];_!==Number.MAX_SAFE_INTEGER&&I?(y&&c.getAttribute("morphTarget"+b)!==y[_]&&c.setAttribute("morphTarget"+b,y[_]),x&&c.getAttribute("morphNormal"+b)!==x[_]&&c.setAttribute("morphNormal"+b,x[_]),t[b]=I,w+=I):(y&&c.hasAttribute("morphTarget"+b)===!0&&c.deleteAttribute("morphTarget"+b),x&&c.hasAttribute("morphNormal"+b)===!0&&c.deleteAttribute("morphNormal"+b),t[b]=0)}const E=c.morphTargetsRelative?1:1-w;h.getUniforms().setValue(o,"morphTargetBaseInfluence",E),h.getUniforms().setValue(o,"morphTargetInfluences",t)}return{update:s}}function wM(o,e,t,r){let s=new WeakMap;function l(h){const f=r.render.frame,m=h.geometry,v=e.get(h,m);return s.get(v)!==f&&(e.update(v),s.set(v,f)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),t.update(h.instanceMatrix,34962),h.instanceColor!==null&&t.update(h.instanceColor,34962)),v}function c(){s=new WeakMap}function d(h){const f=h.target;f.removeEventListener("dispose",d),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:l,dispose:c}}class rg extends Yt{constructor(e=null,t=1,r=1,s=1){super(null),this.image={data:e,width:t,height:r,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}rg.prototype.isDataTexture2DArray=!0;class sg extends Yt{constructor(e=null,t=1,r=1,s=1){super(null),this.image={data:e,width:t,height:r,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}sg.prototype.isDataTexture3D=!0;const og=new Yt,MM=new rg,SM=new sg,ag=new Fl,im=[],rm=[],sm=new Float32Array(16),om=new Float32Array(9),am=new Float32Array(4);function Es(o,e,t){const r=o[0];if(r<=0||r>0)return o;const s=e*t;let l=im[s];if(l===void 0&&(l=new Float32Array(s),im[s]=l),e!==0){r.toArray(l,0);for(let c=1,d=0;c!==e;++c)d+=t,o[c].toArray(l,d)}return l}function ln(o,e){if(o.length!==e.length)return!1;for(let t=0,r=o.length;t<r;t++)if(o[t]!==e[t])return!1;return!0}function tn(o,e){for(let t=0,r=e.length;t<r;t++)o[t]=e[t]}function lg(o,e){let t=rm[e];t===void 0&&(t=new Int32Array(e),rm[e]=t);for(let r=0;r!==e;++r)t[r]=o.allocateTextureUnit();return t}function EM(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function bM(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;o.uniform2fv(this.addr,e),tn(t,e)}}function TM(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ln(t,e))return;o.uniform3fv(this.addr,e),tn(t,e)}}function LM(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;o.uniform4fv(this.addr,e),tn(t,e)}}function AM(o,e){const t=this.cache,r=e.elements;if(r===void 0){if(ln(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(ln(t,r))return;am.set(r),o.uniformMatrix2fv(this.addr,!1,am),tn(t,r)}}function CM(o,e){const t=this.cache,r=e.elements;if(r===void 0){if(ln(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(ln(t,r))return;om.set(r),o.uniformMatrix3fv(this.addr,!1,om),tn(t,r)}}function RM(o,e){const t=this.cache,r=e.elements;if(r===void 0){if(ln(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(ln(t,r))return;sm.set(r),o.uniformMatrix4fv(this.addr,!1,sm),tn(t,r)}}function PM(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function NM(o,e){const t=this.cache;ln(t,e)||(o.uniform2iv(this.addr,e),tn(t,e))}function DM(o,e){const t=this.cache;ln(t,e)||(o.uniform3iv(this.addr,e),tn(t,e))}function IM(o,e){const t=this.cache;ln(t,e)||(o.uniform4iv(this.addr,e),tn(t,e))}function kM(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function FM(o,e){const t=this.cache;ln(t,e)||(o.uniform2uiv(this.addr,e),tn(t,e))}function zM(o,e){const t=this.cache;ln(t,e)||(o.uniform3uiv(this.addr,e),tn(t,e))}function BM(o,e){const t=this.cache;ln(t,e)||(o.uniform4uiv(this.addr,e),tn(t,e))}function OM(o,e,t){const r=this.cache,s=t.allocateTextureUnit();r[0]!==s&&(o.uniform1i(this.addr,s),r[0]=s),t.safeSetTexture2D(e||og,s)}function UM(o,e,t){const r=this.cache,s=t.allocateTextureUnit();r[0]!==s&&(o.uniform1i(this.addr,s),r[0]=s),t.setTexture3D(e||SM,s)}function HM(o,e,t){const r=this.cache,s=t.allocateTextureUnit();r[0]!==s&&(o.uniform1i(this.addr,s),r[0]=s),t.safeSetTextureCube(e||ag,s)}function VM(o,e,t){const r=this.cache,s=t.allocateTextureUnit();r[0]!==s&&(o.uniform1i(this.addr,s),r[0]=s),t.setTexture2DArray(e||MM,s)}function GM(o){switch(o){case 5126:return EM;case 35664:return bM;case 35665:return TM;case 35666:return LM;case 35674:return AM;case 35675:return CM;case 35676:return RM;case 5124:case 35670:return PM;case 35667:case 35671:return NM;case 35668:case 35672:return DM;case 35669:case 35673:return IM;case 5125:return kM;case 36294:return FM;case 36295:return zM;case 36296:return BM;case 35678:case 36198:case 36298:case 36306:case 35682:return OM;case 35679:case 36299:case 36307:return UM;case 35680:case 36300:case 36308:case 36293:return HM;case 36289:case 36303:case 36311:case 36292:return VM}}function WM(o,e){o.uniform1fv(this.addr,e)}function jM(o,e){const t=Es(e,this.size,2);o.uniform2fv(this.addr,t)}function XM(o,e){const t=Es(e,this.size,3);o.uniform3fv(this.addr,t)}function qM(o,e){const t=Es(e,this.size,4);o.uniform4fv(this.addr,t)}function YM(o,e){const t=Es(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function ZM(o,e){const t=Es(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function JM(o,e){const t=Es(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function QM(o,e){o.uniform1iv(this.addr,e)}function $M(o,e){o.uniform2iv(this.addr,e)}function KM(o,e){o.uniform3iv(this.addr,e)}function eS(o,e){o.uniform4iv(this.addr,e)}function tS(o,e){o.uniform1uiv(this.addr,e)}function nS(o,e){o.uniform2uiv(this.addr,e)}function iS(o,e){o.uniform3uiv(this.addr,e)}function rS(o,e){o.uniform4uiv(this.addr,e)}function sS(o,e,t){const r=e.length,s=lg(t,r);o.uniform1iv(this.addr,s);for(let l=0;l!==r;++l)t.safeSetTexture2D(e[l]||og,s[l])}function oS(o,e,t){const r=e.length,s=lg(t,r);o.uniform1iv(this.addr,s);for(let l=0;l!==r;++l)t.safeSetTextureCube(e[l]||ag,s[l])}function aS(o){switch(o){case 5126:return WM;case 35664:return jM;case 35665:return XM;case 35666:return qM;case 35674:return YM;case 35675:return ZM;case 35676:return JM;case 5124:case 35670:return QM;case 35667:case 35671:return $M;case 35668:case 35672:return KM;case 35669:case 35673:return eS;case 5125:return tS;case 36294:return nS;case 36295:return iS;case 36296:return rS;case 35678:case 36198:case 36298:case 36306:case 35682:return sS;case 35680:case 36300:case 36308:case 36293:return oS}}function lS(o,e,t){this.id=o,this.addr=t,this.cache=[],this.setValue=GM(e.type)}function cg(o,e,t){this.id=o,this.addr=t,this.cache=[],this.size=e.size,this.setValue=aS(e.type)}cg.prototype.updateCache=function(o){const e=this.cache;o instanceof Float32Array&&e.length!==o.length&&(this.cache=new Float32Array(o.length)),tn(e,o)};function ug(o){this.id=o,this.seq=[],this.map={}}ug.prototype.setValue=function(o,e,t){const r=this.seq;for(let s=0,l=r.length;s!==l;++s){const c=r[s];c.setValue(o,e[c.id],t)}};const ed=/(\w+)(\])?(\[|\.)?/g;function lm(o,e){o.seq.push(e),o.map[e.id]=e}function cS(o,e,t){const r=o.name,s=r.length;for(ed.lastIndex=0;;){const l=ed.exec(r),c=ed.lastIndex;let d=l[1];const h=l[2]==="]",f=l[3];if(h&&(d=d|0),f===void 0||f==="["&&c+2===s){lm(t,f===void 0?new lS(d,o,e):new cg(d,o,e));break}else{let v=t.map[d];v===void 0&&(v=new ug(d),lm(t,v)),t=v}}}function Ki(o,e){this.seq=[],this.map={};const t=o.getProgramParameter(e,35718);for(let r=0;r<t;++r){const s=o.getActiveUniform(e,r),l=o.getUniformLocation(e,s.name);cS(s,l,this)}}Ki.prototype.setValue=function(o,e,t,r){const s=this.map[e];s!==void 0&&s.setValue(o,t,r)};Ki.prototype.setOptional=function(o,e,t){const r=e[t];r!==void 0&&this.setValue(o,t,r)};Ki.upload=function(o,e,t,r){for(let s=0,l=e.length;s!==l;++s){const c=e[s],d=t[c.id];d.needsUpdate!==!1&&c.setValue(o,d.value,r)}};Ki.seqWithValue=function(o,e){const t=[];for(let r=0,s=o.length;r!==s;++r){const l=o[r];l.id in e&&t.push(l)}return t};function cm(o,e,t){const r=o.createShader(e);return o.shaderSource(r,t),o.compileShader(r),r}let uS=0;function dS(o){const e=o.split(`
`);for(let t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join(`
`)}function dg(o){switch(o){case Bo:return["Linear","( value )"];case Jm:return["sRGB","( value )"];case lx:return["RGBE","( value )"];case ux:return["RGBM","( value, 7.0 )"];case dx:return["RGBM","( value, 16.0 )"];case hx:return["RGBD","( value, 256.0 )"];case ax:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case cx:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",o),["Linear","( value )"]}}function um(o,e,t){const r=o.getShaderParameter(e,35713),s=o.getShaderInfoLog(e).trim();if(r&&s==="")return"";const l=o.getShaderSource(e);return"THREE.WebGLShader: gl.getShaderInfoLog() "+t+`
`+s+dS(l)}function vo(o,e){const t=dg(e);return"vec4 "+o+"( vec4 value ) { return "+t[0]+"ToLinear"+t[1]+"; }"}function hS(o,e){const t=dg(e);return"vec4 "+o+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function fS(o,e){let t;switch(e){case oy:t="Linear";break;case ay:t="Reinhard";break;case ly:t="OptimizedCineon";break;case cy:t="ACESFilmic";break;case uy:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function pS(o){return[o.extensionDerivatives||o.envMapCubeUV||o.bumpMap||o.tangentSpaceNormalMap||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Eo).join(`
`)}function mS(o){const e=[];for(const t in o){const r=o[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function gS(o,e){const t={},r=o.getProgramParameter(e,35721);for(let s=0;s<r;s++){const c=o.getActiveAttrib(e,s).name;t[c]=o.getAttribLocation(e,c)}return t}function Eo(o){return o!==""}function dm(o,e){return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hm(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const vS=/^[ \t]*#include +<([\w\d./]+)>/gm;function pd(o){return o.replace(vS,yS)}function yS(o,e){const t=tt[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return pd(t)}const xS=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,_S=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fm(o){return o.replace(_S,hg).replace(xS,wS)}function wS(o,e,t,r){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),hg(o,e,t,r)}function hg(o,e,t,r){let s="";for(let l=parseInt(e);l<parseInt(t);l++)s+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return s}function pm(o){let e="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function MS(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Wm?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===B0?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===So&&(e="SHADOWMAP_TYPE_VSM"),e}function SS(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case _d:case wd:e="ENVMAP_TYPE_CUBE";break;case Md:case Sd:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ES(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case wd:case Sd:e="ENVMAP_MODE_REFRACTION";break}return e}function bS(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case kl:e="ENVMAP_BLENDING_MULTIPLY";break;case ry:e="ENVMAP_BLENDING_MIX";break;case sy:e="ENVMAP_BLENDING_ADD";break}return e}function TS(o,e,t,r){const s=o.getContext(),l=t.defines;let c=t.vertexShader,d=t.fragmentShader;const h=MS(t),f=SS(t),m=ES(t),v=bS(t),y=o.gammaFactor>0?o.gammaFactor:1,x=t.isWebGL2?"":pS(t),w=mS(l),E=s.createProgram();let b,M,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(b=[w].filter(Eo).join(`
`),b.length>0&&(b+=`
`),M=[x,w].filter(Eo).join(`
`),M.length>0&&(M+=`
`)):(b=[pm(t),"#define SHADER_NAME "+t.shaderName,w,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+y,"#define MAX_BONES "+t.maxBones,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Eo).join(`
`),M=[x,pm(t),"#define SHADER_NAME "+t.shaderName,w,t.alphaTest?"#define ALPHATEST "+t.alphaTest+(t.alphaTest%1?"":".0"):"","#define GAMMA_FACTOR "+y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+m:"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.sheen?"#define USE_SHEEN":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ao?"#define TONE_MAPPING":"",t.toneMapping!==Ao?tt.tonemapping_pars_fragment:"",t.toneMapping!==Ao?fS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",tt.encodings_pars_fragment,t.map?vo("mapTexelToLinear",t.mapEncoding):"",t.matcap?vo("matcapTexelToLinear",t.matcapEncoding):"",t.envMap?vo("envMapTexelToLinear",t.envMapEncoding):"",t.emissiveMap?vo("emissiveMapTexelToLinear",t.emissiveMapEncoding):"",t.lightMap?vo("lightMapTexelToLinear",t.lightMapEncoding):"",hS("linearToOutputTexel",t.outputEncoding),t.depthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Eo).join(`
`)),c=pd(c),c=dm(c,t),c=hm(c,t),d=pd(d),d=dm(d,t),d=hm(d,t),c=fm(c),d=fm(d),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,b=["#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,M=["#define varying in",t.glslVersion===Wp?"":"out highp vec4 pc_fragColor;",t.glslVersion===Wp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const I=_+b+c,U=_+M+d,z=cm(s,35633,I),T=cm(s,35632,U);if(s.attachShader(E,z),s.attachShader(E,T),t.index0AttributeName!==void 0?s.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E),o.debug.checkShaderErrors){const ne=s.getProgramInfoLog(E).trim(),oe=s.getShaderInfoLog(z).trim(),he=s.getShaderInfoLog(T).trim();let ie=!0,F=!0;if(s.getProgramParameter(E,35714)===!1){ie=!1;const V=um(s,z,"vertex"),G=um(s,T,"fragment");console.error("THREE.WebGLProgram: shader error: ",s.getError(),"35715",s.getProgramParameter(E,35715),"gl.getProgramInfoLog",ne,V,G)}else ne!==""?console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",ne):(oe===""||he==="")&&(F=!1);F&&(this.diagnostics={runnable:ie,programLog:ne,vertexShader:{log:oe,prefix:b},fragmentShader:{log:he,prefix:M}})}s.deleteShader(z),s.deleteShader(T);let W;this.getUniforms=function(){return W===void 0&&(W=new Ki(s,E)),W};let ee;return this.getAttributes=function(){return ee===void 0&&(ee=gS(s,E)),ee},this.destroy=function(){r.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.name=t.shaderName,this.id=uS++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=z,this.fragmentShader=T,this}function LS(o,e,t,r,s,l){const c=[],d=r.isWebGL2,h=r.logarithmicDepthBuffer,f=r.floatVertexTextures,m=r.maxVertexUniforms,v=r.vertexTextures;let y=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},w=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","instancingColor","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap","roughnessMap","metalnessMap","gradientMap","alphaMap","combine","vertexColors","vertexAlphas","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","alphaTest","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","sheen","transmissionMap"];function E(T){const ee=T.skeleton.bones;if(f)return 1024;{const oe=Math.floor((m-20)/4),he=Math.min(oe,ee.length);return he<ee.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+ee.length+" bones. This GPU supports "+he+"."),0):he}}function b(T){let W;return T&&T.isTexture?W=T.encoding:T&&T.isWebGLRenderTarget?(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),W=T.texture.encoding):W=Bo,W}function M(T,W,ee,ne,oe){const he=ne.fog,ie=T.isMeshStandardMaterial?ne.environment:null,F=e.get(T.envMap||ie),V=x[T.type],G=oe.isSkinnedMesh?E(oe):0;T.precision!==null&&(y=r.getMaxPrecision(T.precision),y!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",y,"instead."));let B,se;if(V){const te=si[V];B=te.vertexShader,se=te.fragmentShader}else B=T.vertexShader,se=T.fragmentShader;const Y=o.getRenderTarget();return{isWebGL2:d,shaderID:V,shaderName:T.type,vertexShader:B,fragmentShader:se,defines:T.defines,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:y,instancing:oe.isInstancedMesh===!0,instancingColor:oe.isInstancedMesh===!0&&oe.instanceColor!==null,supportsVertexTextures:v,outputEncoding:Y!==null?b(Y.texture):o.outputEncoding,map:!!T.map,mapEncoding:b(T.map),matcap:!!T.matcap,matcapEncoding:b(T.matcap),envMap:!!F,envMapMode:F&&F.mapping,envMapEncoding:b(F),envMapCubeUV:!!F&&(F.mapping===Md||F.mapping===Sd),lightMap:!!T.lightMap,lightMapEncoding:b(T.lightMap),aoMap:!!T.aoMap,emissiveMap:!!T.emissiveMap,emissiveMapEncoding:b(T.emissiveMap),bumpMap:!!T.bumpMap,normalMap:!!T.normalMap,objectSpaceNormalMap:T.normalMapType===mx,tangentSpaceNormalMap:T.normalMapType===xs,clearcoatMap:!!T.clearcoatMap,clearcoatRoughnessMap:!!T.clearcoatRoughnessMap,clearcoatNormalMap:!!T.clearcoatNormalMap,displacementMap:!!T.displacementMap,roughnessMap:!!T.roughnessMap,metalnessMap:!!T.metalnessMap,specularMap:!!T.specularMap,alphaMap:!!T.alphaMap,gradientMap:!!T.gradientMap,sheen:!!T.sheen,transmissionMap:!!T.transmissionMap,combine:T.combine,vertexTangents:T.normalMap&&T.vertexTangents,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&oe.geometry&&oe.geometry.attributes.color&&oe.geometry.attributes.color.itemSize===4,vertexUvs:!!T.map||!!T.bumpMap||!!T.normalMap||!!T.specularMap||!!T.alphaMap||!!T.emissiveMap||!!T.roughnessMap||!!T.metalnessMap||!!T.clearcoatMap||!!T.clearcoatRoughnessMap||!!T.clearcoatNormalMap||!!T.displacementMap||!!T.transmissionMap,uvsVertexOnly:!(T.map||T.bumpMap||T.normalMap||T.specularMap||T.alphaMap||T.emissiveMap||T.roughnessMap||T.metalnessMap||T.clearcoatNormalMap||T.transmissionMap)&&!!T.displacementMap,fog:!!he,useFog:T.fog,fogExp2:he&&he.isFogExp2,flatShading:!!T.flatShading,sizeAttenuation:T.sizeAttenuation,logarithmicDepthBuffer:h,skinning:T.skinning&&G>0,maxBones:G,useVertexTexture:f,morphTargets:T.morphTargets,morphNormals:T.morphNormals,numDirLights:W.directional.length,numPointLights:W.point.length,numSpotLights:W.spot.length,numRectAreaLights:W.rectArea.length,numHemiLights:W.hemi.length,numDirLightShadows:W.directionalShadowMap.length,numPointLightShadows:W.pointShadowMap.length,numSpotLightShadows:W.spotShadowMap.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:T.dithering,shadowMapEnabled:o.shadowMap.enabled&&ee.length>0,shadowMapType:o.shadowMap.type,toneMapping:T.toneMapped?o.toneMapping:Ao,physicallyCorrectLights:o.physicallyCorrectLights,premultipliedAlpha:T.premultipliedAlpha,alphaTest:T.alphaTest,doubleSided:T.side===Il,flipSided:T.side===Ht,depthPacking:T.depthPacking!==void 0?T.depthPacking:!1,index0AttributeName:T.index0AttributeName,extensionDerivatives:T.extensions&&T.extensions.derivatives,extensionFragDepth:T.extensions&&T.extensions.fragDepth,extensionDrawBuffers:T.extensions&&T.extensions.drawBuffers,extensionShaderTextureLOD:T.extensions&&T.extensions.shaderTextureLOD,rendererExtensionFragDepth:d||t.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||t.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||t.has("EXT_shader_texture_lod"),customProgramCacheKey:T.customProgramCacheKey()}}function _(T){const W=[];if(T.shaderID?W.push(T.shaderID):(W.push(T.fragmentShader),W.push(T.vertexShader)),T.defines!==void 0)for(const ee in T.defines)W.push(ee),W.push(T.defines[ee]);if(T.isRawShaderMaterial===!1){for(let ee=0;ee<w.length;ee++)W.push(T[w[ee]]);W.push(o.outputEncoding),W.push(o.gammaFactor)}return W.push(T.customProgramCacheKey),W.join()}function I(T){const W=x[T.type];let ee;if(W){const ne=si[W];ee=Fx.clone(ne.uniforms)}else ee=T.uniforms;return ee}function U(T,W){let ee;for(let ne=0,oe=c.length;ne<oe;ne++){const he=c[ne];if(he.cacheKey===W){ee=he,++ee.usedTimes;break}}return ee===void 0&&(ee=new TS(o,W,T,s),c.push(ee)),ee}function z(T){if(--T.usedTimes===0){const W=c.indexOf(T);c[W]=c[c.length-1],c.pop(),T.destroy()}}return{getParameters:M,getProgramCacheKey:_,getUniforms:I,acquireProgram:U,releaseProgram:z,programs:c}}function AS(){let o=new WeakMap;function e(l){let c=o.get(l);return c===void 0&&(c={},o.set(l,c)),c}function t(l){o.delete(l)}function r(l,c,d){o.get(l)[c]=d}function s(){o=new WeakMap}return{get:e,remove:t,update:r,dispose:s}}function CS(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.program!==e.program?o.program.id-e.program.id:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function RS(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function mm(o){const e=[];let t=0;const r=[],s=[],l={id:-1};function c(){t=0,r.length=0,s.length=0}function d(y,x,w,E,b,M){let _=e[t];const I=o.get(w);return _===void 0?(_={id:y.id,object:y,geometry:x,material:w,program:I.program||l,groupOrder:E,renderOrder:y.renderOrder,z:b,group:M},e[t]=_):(_.id=y.id,_.object=y,_.geometry=x,_.material=w,_.program=I.program||l,_.groupOrder=E,_.renderOrder=y.renderOrder,_.z=b,_.group=M),t++,_}function h(y,x,w,E,b,M){const _=d(y,x,w,E,b,M);(w.transparent===!0?s:r).push(_)}function f(y,x,w,E,b,M){const _=d(y,x,w,E,b,M);(w.transparent===!0?s:r).unshift(_)}function m(y,x){r.length>1&&r.sort(y||CS),s.length>1&&s.sort(x||RS)}function v(){for(let y=t,x=e.length;y<x;y++){const w=e[y];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.program=null,w.group=null}}return{opaque:r,transparent:s,init:c,push:h,unshift:f,finish:v,sort:m}}function PS(o){let e=new WeakMap;function t(s,l){let c;return e.has(s)===!1?(c=new mm(o),e.set(s,[c])):l>=e.get(s).length?(c=new mm(o),e.get(s).push(c)):c=e.get(s)[l],c}function r(){e=new WeakMap}return{get:t,dispose:r}}function NS(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Ge};break;case"SpotLight":t={position:new N,direction:new N,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new N,halfWidth:new N,halfHeight:new N};break}return o[e.id]=t,t}}}function DS(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let IS=0;function kS(o,e){return(e.castShadow?1:0)-(o.castShadow?1:0)}function FS(o,e){const t=new NS,r=DS(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let m=0;m<9;m++)s.probe.push(new N);const l=new N,c=new We,d=new We;function h(m){let v=0,y=0,x=0;for(let W=0;W<9;W++)s.probe[W].set(0,0,0);let w=0,E=0,b=0,M=0,_=0,I=0,U=0,z=0;m.sort(kS);for(let W=0,ee=m.length;W<ee;W++){const ne=m[W],oe=ne.color,he=ne.intensity,ie=ne.distance,F=ne.shadow&&ne.shadow.map?ne.shadow.map.texture:null;if(ne.isAmbientLight)v+=oe.r*he,y+=oe.g*he,x+=oe.b*he;else if(ne.isLightProbe)for(let V=0;V<9;V++)s.probe[V].addScaledVector(ne.sh.coefficients[V],he);else if(ne.isDirectionalLight){const V=t.get(ne);if(V.color.copy(ne.color).multiplyScalar(ne.intensity),ne.castShadow){const G=ne.shadow,B=r.get(ne);B.shadowBias=G.bias,B.shadowNormalBias=G.normalBias,B.shadowRadius=G.radius,B.shadowMapSize=G.mapSize,s.directionalShadow[w]=B,s.directionalShadowMap[w]=F,s.directionalShadowMatrix[w]=ne.shadow.matrix,I++}s.directional[w]=V,w++}else if(ne.isSpotLight){const V=t.get(ne);if(V.position.setFromMatrixPosition(ne.matrixWorld),V.color.copy(oe).multiplyScalar(he),V.distance=ie,V.coneCos=Math.cos(ne.angle),V.penumbraCos=Math.cos(ne.angle*(1-ne.penumbra)),V.decay=ne.decay,ne.castShadow){const G=ne.shadow,B=r.get(ne);B.shadowBias=G.bias,B.shadowNormalBias=G.normalBias,B.shadowRadius=G.radius,B.shadowMapSize=G.mapSize,s.spotShadow[b]=B,s.spotShadowMap[b]=F,s.spotShadowMatrix[b]=ne.shadow.matrix,z++}s.spot[b]=V,b++}else if(ne.isRectAreaLight){const V=t.get(ne);V.color.copy(oe).multiplyScalar(he),V.halfWidth.set(ne.width*.5,0,0),V.halfHeight.set(0,ne.height*.5,0),s.rectArea[M]=V,M++}else if(ne.isPointLight){const V=t.get(ne);if(V.color.copy(ne.color).multiplyScalar(ne.intensity),V.distance=ne.distance,V.decay=ne.decay,ne.castShadow){const G=ne.shadow,B=r.get(ne);B.shadowBias=G.bias,B.shadowNormalBias=G.normalBias,B.shadowRadius=G.radius,B.shadowMapSize=G.mapSize,B.shadowCameraNear=G.camera.near,B.shadowCameraFar=G.camera.far,s.pointShadow[E]=B,s.pointShadowMap[E]=F,s.pointShadowMatrix[E]=ne.shadow.matrix,U++}s.point[E]=V,E++}else if(ne.isHemisphereLight){const V=t.get(ne);V.skyColor.copy(ne.color).multiplyScalar(he),V.groundColor.copy(ne.groundColor).multiplyScalar(he),s.hemi[_]=V,_++}}M>0&&(e.isWebGL2||o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=be.LTC_FLOAT_1,s.rectAreaLTC2=be.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=be.LTC_HALF_1,s.rectAreaLTC2=be.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=v,s.ambient[1]=y,s.ambient[2]=x;const T=s.hash;(T.directionalLength!==w||T.pointLength!==E||T.spotLength!==b||T.rectAreaLength!==M||T.hemiLength!==_||T.numDirectionalShadows!==I||T.numPointShadows!==U||T.numSpotShadows!==z)&&(s.directional.length=w,s.spot.length=b,s.rectArea.length=M,s.point.length=E,s.hemi.length=_,s.directionalShadow.length=I,s.directionalShadowMap.length=I,s.pointShadow.length=U,s.pointShadowMap.length=U,s.spotShadow.length=z,s.spotShadowMap.length=z,s.directionalShadowMatrix.length=I,s.pointShadowMatrix.length=U,s.spotShadowMatrix.length=z,T.directionalLength=w,T.pointLength=E,T.spotLength=b,T.rectAreaLength=M,T.hemiLength=_,T.numDirectionalShadows=I,T.numPointShadows=U,T.numSpotShadows=z,s.version=IS++)}function f(m,v){let y=0,x=0,w=0,E=0,b=0;const M=v.matrixWorldInverse;for(let _=0,I=m.length;_<I;_++){const U=m[_];if(U.isDirectionalLight){const z=s.directional[y];z.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),z.direction.sub(l),z.direction.transformDirection(M),y++}else if(U.isSpotLight){const z=s.spot[w];z.position.setFromMatrixPosition(U.matrixWorld),z.position.applyMatrix4(M),z.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),z.direction.sub(l),z.direction.transformDirection(M),w++}else if(U.isRectAreaLight){const z=s.rectArea[E];z.position.setFromMatrixPosition(U.matrixWorld),z.position.applyMatrix4(M),d.identity(),c.copy(U.matrixWorld),c.premultiply(M),d.extractRotation(c),z.halfWidth.set(U.width*.5,0,0),z.halfHeight.set(0,U.height*.5,0),z.halfWidth.applyMatrix4(d),z.halfHeight.applyMatrix4(d),E++}else if(U.isPointLight){const z=s.point[x];z.position.setFromMatrixPosition(U.matrixWorld),z.position.applyMatrix4(M),x++}else if(U.isHemisphereLight){const z=s.hemi[b];z.direction.setFromMatrixPosition(U.matrixWorld),z.direction.transformDirection(M),z.direction.normalize(),b++}}}return{setup:h,setupView:f,state:s}}function gm(o,e){const t=new FS(o,e),r=[],s=[];function l(){r.length=0,s.length=0}function c(v){r.push(v)}function d(v){s.push(v)}function h(){t.setup(r)}function f(v){t.setupView(r,v)}return{init:l,state:{lightsArray:r,shadowsArray:s,lights:t},setupLights:h,setupLightsView:f,pushLight:c,pushShadow:d}}function zS(o,e){let t=new WeakMap;function r(l,c=0){let d;return t.has(l)===!1?(d=new gm(o,e),t.set(l,[d])):c>=t.get(l).length?(d=new gm(o,e),t.get(l).push(d)):d=t.get(l)[c],d}function s(){t=new WeakMap}return{get:r,dispose:s}}class fg extends Gt{constructor(e){super(),this.type="MeshDepthMaterial",this.depthPacking=fx,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}fg.prototype.isMeshDepthMaterial=!0;class pg extends Gt{constructor(e){super(),this.type="MeshDistanceMaterial",this.referencePosition=new N,this.nearDistance=1,this.farDistance=1e3,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}pg.prototype.isMeshDistanceMaterial=!0;var BS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	float mean = 0.0;
	float squared_mean = 0.0;
	float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );
	for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, i ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean * HALF_SAMPLE_RATE;
	squared_mean = squared_mean * HALF_SAMPLE_RATE;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`,OS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`;function mg(o,e,t){let r=new zl;const s=new xe,l=new xe,c=new dt,d=[],h=[],f={},m=t.maxTextureSize,v={0:Ht,1:Dl,2:Il},y=new _r({defines:{SAMPLE_RATE:2/8,HALF_SAMPLE_RATE:1/8},uniforms:{shadow_pass:{value:null},resolution:{value:new xe},radius:{value:4}},vertexShader:OS,fragmentShader:BS}),x=y.clone();x.defines.HORIZONTAL_PASS=1;const w=new ft;w.setAttribute("position",new Nt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Zn(w,y),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wm,this.render=function(T,W,ee){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||T.length===0)return;const ne=o.getRenderTarget(),oe=o.getActiveCubeFace(),he=o.getActiveMipmapLevel(),ie=o.state;ie.setBlending(To),ie.buffers.color.setClear(1,1,1,1),ie.buffers.depth.setTest(!0),ie.setScissorTest(!1);for(let F=0,V=T.length;F<V;F++){const G=T[F],B=G.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const se=B.getFrameExtents();if(s.multiply(se),l.copy(B.mapSize),(s.x>m||s.y>m)&&(s.x>m&&(l.x=Math.floor(m/se.x),s.x=l.x*se.x,B.mapSize.x=l.x),s.y>m&&(l.y=Math.floor(m/se.y),s.y=l.y*se.y,B.mapSize.y=l.y)),B.map===null&&!B.isPointLightShadow&&this.type===So){const K={minFilter:Rn,magFilter:Rn,format:Yn};B.map=new xr(s.x,s.y,K),B.map.texture.name=G.name+".shadowMap",B.mapPass=new xr(s.x,s.y,K),B.camera.updateProjectionMatrix()}if(B.map===null){const K={minFilter:on,magFilter:on,format:Yn};B.map=new xr(s.x,s.y,K),B.map.texture.name=G.name+".shadowMap",B.camera.updateProjectionMatrix()}o.setRenderTarget(B.map),o.clear();const Y=B.getViewportCount();for(let K=0;K<Y;K++){const te=B.getViewport(K);c.set(l.x*te.x,l.y*te.y,l.x*te.z,l.y*te.w),ie.viewport(c),B.updateMatrices(G,K),r=B.getFrustum(),z(W,ee,B.camera,G,this.type)}!B.isPointLightShadow&&this.type===So&&M(B,ee),B.needsUpdate=!1}b.needsUpdate=!1,o.setRenderTarget(ne,oe,he)};function M(T,W){const ee=e.update(E);y.uniforms.shadow_pass.value=T.map.texture,y.uniforms.resolution.value=T.mapSize,y.uniforms.radius.value=T.radius,o.setRenderTarget(T.mapPass),o.clear(),o.renderBufferDirect(W,null,ee,y,E,null),x.uniforms.shadow_pass.value=T.mapPass.texture,x.uniforms.resolution.value=T.mapSize,x.uniforms.radius.value=T.radius,o.setRenderTarget(T.map),o.clear(),o.renderBufferDirect(W,null,ee,x,E,null)}function _(T,W,ee){const ne=T<<0|W<<1|ee<<2;let oe=d[ne];return oe===void 0&&(oe=new fg({depthPacking:px,morphTargets:T,skinning:W}),d[ne]=oe),oe}function I(T,W,ee){const ne=T<<0|W<<1|ee<<2;let oe=h[ne];return oe===void 0&&(oe=new pg({morphTargets:T,skinning:W}),h[ne]=oe),oe}function U(T,W,ee,ne,oe,he,ie){let F=null,V=_,G=T.customDepthMaterial;if(ne.isPointLight===!0&&(V=I,G=T.customDistanceMaterial),G===void 0){let B=!1;ee.morphTargets===!0&&(B=W.morphAttributes&&W.morphAttributes.position&&W.morphAttributes.position.length>0);let se=!1;T.isSkinnedMesh===!0&&(ee.skinning===!0?se=!0:console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:",T));const Y=T.isInstancedMesh===!0;F=V(B,se,Y)}else F=G;if(o.localClippingEnabled&&ee.clipShadows===!0&&ee.clippingPlanes.length!==0){const B=F.uuid,se=ee.uuid;let Y=f[B];Y===void 0&&(Y={},f[B]=Y);let K=Y[se];K===void 0&&(K=F.clone(),Y[se]=K),F=K}return F.visible=ee.visible,F.wireframe=ee.wireframe,ie===So?F.side=ee.shadowSide!==null?ee.shadowSide:ee.side:F.side=ee.shadowSide!==null?ee.shadowSide:v[ee.side],F.clipShadows=ee.clipShadows,F.clippingPlanes=ee.clippingPlanes,F.clipIntersection=ee.clipIntersection,F.wireframeLinewidth=ee.wireframeLinewidth,F.linewidth=ee.linewidth,ne.isPointLight===!0&&F.isMeshDistanceMaterial===!0&&(F.referencePosition.setFromMatrixPosition(ne.matrixWorld),F.nearDistance=oe,F.farDistance=he),F}function z(T,W,ee,ne,oe){if(T.visible===!1)return;if(T.layers.test(W.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&oe===So)&&(!T.frustumCulled||r.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,T.matrixWorld);const F=e.update(T),V=T.material;if(Array.isArray(V)){const G=F.groups;for(let B=0,se=G.length;B<se;B++){const Y=G[B],K=V[Y.materialIndex];if(K&&K.visible){const te=U(T,F,K,ne,ee.near,ee.far,oe);o.renderBufferDirect(ee,null,F,te,T,Y)}}}else if(V.visible){const G=U(T,F,V,ne,ee.near,ee.far,oe);o.renderBufferDirect(ee,null,F,G,T,null)}}const ie=T.children;for(let F=0,V=ie.length;F<V;F++)z(ie[F],W,ee,ne,oe)}}function US(o,e,t){const r=t.isWebGL2;function s(){let O=!1;const ve=new dt;let _e=null;const Be=new dt(0,0,0,0);return{setMask:function(ue){_e!==ue&&!O&&(o.colorMask(ue,ue,ue,ue),_e=ue)},setLocked:function(ue){O=ue},setClear:function(ue,Ve,it,Tt,Jn){Jn===!0&&(ue*=Tt,Ve*=Tt,it*=Tt),ve.set(ue,Ve,it,Tt),Be.equals(ve)===!1&&(o.clearColor(ue,Ve,it,Tt),Be.copy(ve))},reset:function(){O=!1,_e=null,Be.set(-1,0,0,0)}}}function l(){let O=!1,ve=null,_e=null,Be=null;return{setTest:function(ue){ue?q(2929):ge(2929)},setMask:function(ue){ve!==ue&&!O&&(o.depthMask(ue),ve=ue)},setFunc:function(ue){if(_e!==ue){if(ue)switch(ue){case Q0:o.depthFunc(512);break;case $0:o.depthFunc(519);break;case K0:o.depthFunc(513);break;case ud:o.depthFunc(515);break;case ey:o.depthFunc(514);break;case ty:o.depthFunc(518);break;case ny:o.depthFunc(516);break;case iy:o.depthFunc(517);break;default:o.depthFunc(515)}else o.depthFunc(515);_e=ue}},setLocked:function(ue){O=ue},setClear:function(ue){Be!==ue&&(o.clearDepth(ue),Be=ue)},reset:function(){O=!1,ve=null,_e=null,Be=null}}}function c(){let O=!1,ve=null,_e=null,Be=null,ue=null,Ve=null,it=null,Tt=null,Jn=null;return{setTest:function(yt){O||(yt?q(2960):ge(2960))},setMask:function(yt){ve!==yt&&!O&&(o.stencilMask(yt),ve=yt)},setFunc:function(yt,Dn,nn){(_e!==yt||Be!==Dn||ue!==nn)&&(o.stencilFunc(yt,Dn,nn),_e=yt,Be=Dn,ue=nn)},setOp:function(yt,Dn,nn){(Ve!==yt||it!==Dn||Tt!==nn)&&(o.stencilOp(yt,Dn,nn),Ve=yt,it=Dn,Tt=nn)},setLocked:function(yt){O=yt},setClear:function(yt){Jn!==yt&&(o.clearStencil(yt),Jn=yt)},reset:function(){O=!1,ve=null,_e=null,Be=null,ue=null,Ve=null,it=null,Tt=null,Jn=null}}}const d=new s,h=new l,f=new c;let m={},v=null,y={},x=null,w=!1,E=null,b=null,M=null,_=null,I=null,U=null,z=null,T=!1,W=null,ee=null,ne=null,oe=null,he=null;const ie=o.getParameter(35661);let F=!1,V=0;const G=o.getParameter(7938);G.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(G)[1]),F=V>=1):G.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),F=V>=2);let B=null,se={};const Y=new dt(0,0,o.canvas.width,o.canvas.height),K=new dt(0,0,o.canvas.width,o.canvas.height);function te(O,ve,_e){const Be=new Uint8Array(4),ue=o.createTexture();o.bindTexture(O,ue),o.texParameteri(O,10241,9728),o.texParameteri(O,10240,9728);for(let Ve=0;Ve<_e;Ve++)o.texImage2D(ve+Ve,0,6408,1,1,0,6408,5121,Be);return ue}const R={};R[3553]=te(3553,3553,1),R[34067]=te(34067,34069,6),d.setClear(0,0,0,1),h.setClear(1),f.setClear(0),q(2929),h.setFunc(ud),Qe(!1),me(bp),q(2884),ze(To);function q(O){m[O]!==!0&&(o.enable(O),m[O]=!0)}function ge(O){m[O]!==!1&&(o.disable(O),m[O]=!1)}function Z(O){O!==v&&(o.bindFramebuffer(36160,O),v=O)}function De(O,ve){ve===null&&v!==null&&(ve=v),y[O]!==ve&&(o.bindFramebuffer(O,ve),y[O]=ve,r&&(O===36009&&(y[36160]=ve),O===36160&&(y[36009]=ve)))}function Ce(O){return x!==O?(o.useProgram(O),x=O,!0):!1}const Le={[hs]:32774,[U0]:32778,[H0]:32779};if(r)Le[Ap]=32775,Le[Cp]=32776;else{const O=e.get("EXT_blend_minmax");O!==null&&(Le[Ap]=O.MIN_EXT,Le[Cp]=O.MAX_EXT)}const we={[V0]:0,[G0]:1,[W0]:768,[Xm]:770,[J0]:776,[Y0]:774,[X0]:772,[j0]:769,[qm]:771,[Z0]:775,[q0]:773};function ze(O,ve,_e,Be,ue,Ve,it,Tt){if(O===To){w===!0&&(ge(3042),w=!1);return}if(w===!1&&(q(3042),w=!0),O!==O0){if(O!==E||Tt!==T){if((b!==hs||I!==hs)&&(o.blendEquation(32774),b=hs,I=hs),Tt)switch(O){case Lo:o.blendFuncSeparate(1,771,1,771);break;case cd:o.blendFunc(1,1);break;case Tp:o.blendFuncSeparate(0,0,769,771);break;case Lp:o.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Lo:o.blendFuncSeparate(770,771,1,771);break;case cd:o.blendFunc(770,1);break;case Tp:o.blendFunc(0,769);break;case Lp:o.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}M=null,_=null,U=null,z=null,E=O,T=Tt}return}ue=ue||ve,Ve=Ve||_e,it=it||Be,(ve!==b||ue!==I)&&(o.blendEquationSeparate(Le[ve],Le[ue]),b=ve,I=ue),(_e!==M||Be!==_||Ve!==U||it!==z)&&(o.blendFuncSeparate(we[_e],we[Be],we[Ve],we[it]),M=_e,_=Be,U=Ve,z=it),E=O,T=null}function Oe(O,ve){O.side===Il?ge(2884):q(2884);let _e=O.side===Ht;ve&&(_e=!_e),Qe(_e),O.blending===Lo&&O.transparent===!1?ze(To):ze(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.premultipliedAlpha),h.setFunc(O.depthFunc),h.setTest(O.depthTest),h.setMask(O.depthWrite),d.setMask(O.colorWrite);const Be=O.stencilWrite;f.setTest(Be),Be&&(f.setMask(O.stencilWriteMask),f.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),f.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Me(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?q(32926):ge(32926)}function Qe(O){W!==O&&(O?o.frontFace(2304):o.frontFace(2305),W=O)}function me(O){O!==F0?(q(2884),O!==ee&&(O===bp?o.cullFace(1029):O===z0?o.cullFace(1028):o.cullFace(1032))):ge(2884),ee=O}function ye(O){O!==ne&&(F&&o.lineWidth(O),ne=O)}function Me(O,ve,_e){O?(q(32823),(oe!==ve||he!==_e)&&(o.polygonOffset(ve,_e),oe=ve,he=_e)):ge(32823)}function Fe(O){O?q(3089):ge(3089)}function Te(O){O===void 0&&(O=33984+ie-1),B!==O&&(o.activeTexture(O),B=O)}function P(O,ve){B===null&&Te();let _e=se[B];_e===void 0&&(_e={type:void 0,texture:void 0},se[B]=_e),(_e.type!==O||_e.texture!==ve)&&(o.bindTexture(O,ve||R[O]),_e.type=O,_e.texture=ve)}function A(){const O=se[B];O!==void 0&&O.type!==void 0&&(o.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function ae(){try{o.compressedTexImage2D.apply(o,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function le(){try{o.texImage2D.apply(o,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Se(){try{o.texImage3D.apply(o,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ie(O){Y.equals(O)===!1&&(o.scissor(O.x,O.y,O.z,O.w),Y.copy(O))}function nt(O){K.equals(O)===!1&&(o.viewport(O.x,O.y,O.z,O.w),K.copy(O))}function Xe(){o.disable(3042),o.disable(2884),o.disable(2929),o.disable(32823),o.disable(3089),o.disable(2960),o.disable(32926),o.blendEquation(32774),o.blendFunc(1,0),o.blendFuncSeparate(1,0,1,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(513),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(519,0,4294967295),o.stencilOp(7680,7680,7680),o.clearStencil(0),o.cullFace(1029),o.frontFace(2305),o.polygonOffset(0,0),o.activeTexture(33984),o.bindFramebuffer(36160,null),r===!0&&(o.bindFramebuffer(36009,null),o.bindFramebuffer(36008,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),m={},B=null,se={},v=null,y={},x=null,w=!1,E=null,b=null,M=null,_=null,I=null,U=null,z=null,T=!1,W=null,ee=null,ne=null,oe=null,he=null,Y.set(0,0,o.canvas.width,o.canvas.height),K.set(0,0,o.canvas.width,o.canvas.height),d.reset(),h.reset(),f.reset()}return{buffers:{color:d,depth:h,stencil:f},enable:q,disable:ge,bindFramebuffer:De,bindXRFramebuffer:Z,useProgram:Ce,setBlending:ze,setMaterial:Oe,setFlipSided:Qe,setCullFace:me,setLineWidth:ye,setPolygonOffset:Me,setScissorTest:Fe,activeTexture:Te,bindTexture:P,unbindTexture:A,compressedTexImage2D:ae,texImage2D:le,texImage3D:Se,scissor:Ie,viewport:nt,reset:Xe}}function HS(o,e,t,r,s,l,c){const d=s.isWebGL2,h=s.maxTextures,f=s.maxCubemapSize,m=s.maxTextureSize,v=s.maxSamples,y=new WeakMap;let x,w=!1;try{w=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(P,A){return w?new OffscreenCanvas(P,A):document.createElementNS("http://www.w3.org/1999/xhtml","canvas")}function b(P,A,ae,le){let Se=1;if((P.width>le||P.height>le)&&(Se=le/Math.max(P.width,P.height)),Se<1||A===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const Ie=A?xx:Math.floor,nt=Ie(Se*P.width),Xe=Ie(Se*P.height);x===void 0&&(x=E(nt,Xe));const O=ae?E(nt,Xe):x;return O.width=nt,O.height=Xe,O.getContext("2d").drawImage(P,0,0,nt,Xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+nt+"x"+Xe+")."),O}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function M(P){return jp(P.width)&&jp(P.height)}function _(P){return d?!1:P.wrapS!==qn||P.wrapT!==qn||P.minFilter!==on&&P.minFilter!==Rn}function I(P,A){return P.generateMipmaps&&A&&P.minFilter!==on&&P.minFilter!==Rn}function U(P,A,ae,le){o.generateMipmap(P);const Se=r.get(A);Se.__maxMipLevel=Math.log2(Math.max(ae,le))}function z(P,A,ae){if(d===!1)return A;if(P!==null){if(o[P]!==void 0)return o[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let le=A;return A===6403&&(ae===5126&&(le=33326),ae===5131&&(le=33325),ae===5121&&(le=33321)),A===6407&&(ae===5126&&(le=34837),ae===5131&&(le=34843),ae===5121&&(le=32849)),A===6408&&(ae===5126&&(le=34836),ae===5131&&(le=34842),ae===5121&&(le=32856)),(le===33325||le===33326||le===34842||le===34836)&&e.get("EXT_color_buffer_float"),le}function T(P){return P===on||P===Np||P===Dp?9728:9729}function W(P){const A=P.target;A.removeEventListener("dispose",W),ne(A),A.isVideoTexture&&y.delete(A),c.memory.textures--}function ee(P){const A=P.target;A.removeEventListener("dispose",ee),oe(A),c.memory.textures--}function ne(P){const A=r.get(P);A.__webglInit!==void 0&&(o.deleteTexture(A.__webglTexture),r.remove(P))}function oe(P){const A=P.texture,ae=r.get(P),le=r.get(A);if(P){if(le.__webglTexture!==void 0&&o.deleteTexture(le.__webglTexture),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let Se=0;Se<6;Se++)o.deleteFramebuffer(ae.__webglFramebuffer[Se]),ae.__webglDepthbuffer&&o.deleteRenderbuffer(ae.__webglDepthbuffer[Se]);else o.deleteFramebuffer(ae.__webglFramebuffer),ae.__webglDepthbuffer&&o.deleteRenderbuffer(ae.__webglDepthbuffer),ae.__webglMultisampledFramebuffer&&o.deleteFramebuffer(ae.__webglMultisampledFramebuffer),ae.__webglColorRenderbuffer&&o.deleteRenderbuffer(ae.__webglColorRenderbuffer),ae.__webglDepthRenderbuffer&&o.deleteRenderbuffer(ae.__webglDepthRenderbuffer);r.remove(A),r.remove(P)}}let he=0;function ie(){he=0}function F(){const P=he;return P>=h&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+h),he+=1,P}function V(P,A){const ae=r.get(P);if(P.isVideoTexture&&me(P),P.version>0&&ae.__version!==P.version){const le=P.image;if(le===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(le.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(ae,P,A);return}}t.activeTexture(33984+A),t.bindTexture(3553,ae.__webglTexture)}function G(P,A){const ae=r.get(P);if(P.version>0&&ae.__version!==P.version){q(ae,P,A);return}t.activeTexture(33984+A),t.bindTexture(35866,ae.__webglTexture)}function B(P,A){const ae=r.get(P);if(P.version>0&&ae.__version!==P.version){q(ae,P,A);return}t.activeTexture(33984+A),t.bindTexture(32879,ae.__webglTexture)}function se(P,A){const ae=r.get(P);if(P.version>0&&ae.__version!==P.version){ge(ae,P,A);return}t.activeTexture(33984+A),t.bindTexture(34067,ae.__webglTexture)}const Y={[dd]:10497,[qn]:33071,[hd]:33648},K={[on]:9728,[Np]:9984,[Dp]:9986,[Rn]:9729,[dy]:9985,[Ed]:9987};function te(P,A,ae){if(ae?(o.texParameteri(P,10242,Y[A.wrapS]),o.texParameteri(P,10243,Y[A.wrapT]),(P===32879||P===35866)&&o.texParameteri(P,32882,Y[A.wrapR]),o.texParameteri(P,10240,K[A.magFilter]),o.texParameteri(P,10241,K[A.minFilter])):(o.texParameteri(P,10242,33071),o.texParameteri(P,10243,33071),(P===32879||P===35866)&&o.texParameteri(P,32882,33071),(A.wrapS!==qn||A.wrapT!==qn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(P,10240,T(A.magFilter)),o.texParameteri(P,10241,T(A.minFilter)),A.minFilter!==on&&A.minFilter!==Rn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const le=e.get("EXT_texture_filter_anisotropic");if(A.type===$i&&e.has("OES_texture_float_linear")===!1||d===!1&&A.type===Tl&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||r.get(A).__currentAnisotropy)&&(o.texParameterf(P,le.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),r.get(A).__currentAnisotropy=A.anisotropy)}}function R(P,A){P.__webglInit===void 0&&(P.__webglInit=!0,A.addEventListener("dispose",W),P.__webglTexture=o.createTexture(),c.memory.textures++)}function q(P,A,ae){let le=3553;A.isDataTexture2DArray&&(le=35866),A.isDataTexture3D&&(le=32879),R(P,A),t.activeTexture(33984+ae),t.bindTexture(le,P.__webglTexture),o.pixelStorei(37440,A.flipY),o.pixelStorei(37441,A.premultiplyAlpha),o.pixelStorei(3317,A.unpackAlignment),o.pixelStorei(37443,0);const Se=_(A)&&M(A.image)===!1,Ie=b(A.image,Se,!1,m),nt=M(Ie)||d,Xe=l.convert(A.format);let O=l.convert(A.type),ve=z(A.internalFormat,Xe,O);te(le,A,nt);let _e;const Be=A.mipmaps;if(A.isDepthTexture)ve=6402,d?A.type===$i?ve=36012:A.type===El?ve=33190:A.type===Co?ve=35056:ve=33189:A.type===$i&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===gs&&ve===6402&&A.type!==bl&&A.type!==El&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=bl,O=l.convert(A.type)),A.format===No&&ve===6402&&(ve=34041,A.type!==Co&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=Co,O=l.convert(A.type))),t.texImage2D(3553,0,ve,Ie.width,Ie.height,0,Xe,O,null);else if(A.isDataTexture)if(Be.length>0&&nt){for(let ue=0,Ve=Be.length;ue<Ve;ue++)_e=Be[ue],t.texImage2D(3553,ue,ve,_e.width,_e.height,0,Xe,O,_e.data);A.generateMipmaps=!1,P.__maxMipLevel=Be.length-1}else t.texImage2D(3553,0,ve,Ie.width,Ie.height,0,Xe,O,Ie.data),P.__maxMipLevel=0;else if(A.isCompressedTexture){for(let ue=0,Ve=Be.length;ue<Ve;ue++)_e=Be[ue],A.format!==Yn&&A.format!==yr?Xe!==null?t.compressedTexImage2D(3553,ue,ve,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):t.texImage2D(3553,ue,ve,_e.width,_e.height,0,Xe,O,_e.data);P.__maxMipLevel=Be.length-1}else if(A.isDataTexture2DArray)t.texImage3D(35866,0,ve,Ie.width,Ie.height,Ie.depth,0,Xe,O,Ie.data),P.__maxMipLevel=0;else if(A.isDataTexture3D)t.texImage3D(32879,0,ve,Ie.width,Ie.height,Ie.depth,0,Xe,O,Ie.data),P.__maxMipLevel=0;else if(Be.length>0&&nt){for(let ue=0,Ve=Be.length;ue<Ve;ue++)_e=Be[ue],t.texImage2D(3553,ue,ve,Xe,O,_e);A.generateMipmaps=!1,P.__maxMipLevel=Be.length-1}else t.texImage2D(3553,0,ve,Xe,O,Ie),P.__maxMipLevel=0;I(A,nt)&&U(le,A,Ie.width,Ie.height),P.__version=A.version,A.onUpdate&&A.onUpdate(A)}function ge(P,A,ae){if(A.image.length!==6)return;R(P,A),t.activeTexture(33984+ae),t.bindTexture(34067,P.__webglTexture),o.pixelStorei(37440,A.flipY),o.pixelStorei(37441,A.premultiplyAlpha),o.pixelStorei(3317,A.unpackAlignment),o.pixelStorei(37443,0);const le=A&&(A.isCompressedTexture||A.image[0].isCompressedTexture),Se=A.image[0]&&A.image[0].isDataTexture,Ie=[];for(let ue=0;ue<6;ue++)!le&&!Se?Ie[ue]=b(A.image[ue],!1,!0,f):Ie[ue]=Se?A.image[ue].image:A.image[ue];const nt=Ie[0],Xe=M(nt)||d,O=l.convert(A.format),ve=l.convert(A.type),_e=z(A.internalFormat,O,ve);te(34067,A,Xe);let Be;if(le){for(let ue=0;ue<6;ue++){Be=Ie[ue].mipmaps;for(let Ve=0;Ve<Be.length;Ve++){const it=Be[Ve];A.format!==Yn&&A.format!==yr?O!==null?t.compressedTexImage2D(34069+ue,Ve,_e,it.width,it.height,0,it.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):t.texImage2D(34069+ue,Ve,_e,it.width,it.height,0,O,ve,it.data)}}P.__maxMipLevel=Be.length-1}else{Be=A.mipmaps;for(let ue=0;ue<6;ue++)if(Se){t.texImage2D(34069+ue,0,_e,Ie[ue].width,Ie[ue].height,0,O,ve,Ie[ue].data);for(let Ve=0;Ve<Be.length;Ve++){const Tt=Be[Ve].image[ue].image;t.texImage2D(34069+ue,Ve+1,_e,Tt.width,Tt.height,0,O,ve,Tt.data)}}else{t.texImage2D(34069+ue,0,_e,O,ve,Ie[ue]);for(let Ve=0;Ve<Be.length;Ve++){const it=Be[Ve];t.texImage2D(34069+ue,Ve+1,_e,O,ve,it.image[ue])}}P.__maxMipLevel=Be.length}I(A,Xe)&&U(34067,A,nt.width,nt.height),P.__version=A.version,A.onUpdate&&A.onUpdate(A)}function Z(P,A,ae,le){const Se=A.texture,Ie=l.convert(Se.format),nt=l.convert(Se.type),Xe=z(Se.internalFormat,Ie,nt);le===32879||le===35866?t.texImage3D(le,0,Xe,A.width,A.height,A.depth,0,Ie,nt,null):t.texImage2D(le,0,Xe,A.width,A.height,0,Ie,nt,null),t.bindFramebuffer(36160,P),o.framebufferTexture2D(36160,ae,le,r.get(Se).__webglTexture,0),t.bindFramebuffer(36160,null)}function De(P,A,ae){if(o.bindRenderbuffer(36161,P),A.depthBuffer&&!A.stencilBuffer){let le=33189;if(ae){const Se=A.depthTexture;Se&&Se.isDepthTexture&&(Se.type===$i?le=36012:Se.type===El&&(le=33190));const Ie=Qe(A);o.renderbufferStorageMultisample(36161,Ie,le,A.width,A.height)}else o.renderbufferStorage(36161,le,A.width,A.height);o.framebufferRenderbuffer(36160,36096,36161,P)}else if(A.depthBuffer&&A.stencilBuffer){if(ae){const le=Qe(A);o.renderbufferStorageMultisample(36161,le,35056,A.width,A.height)}else o.renderbufferStorage(36161,34041,A.width,A.height);o.framebufferRenderbuffer(36160,33306,36161,P)}else{const le=A.texture,Se=l.convert(le.format),Ie=l.convert(le.type),nt=z(le.internalFormat,Se,Ie);if(ae){const Xe=Qe(A);o.renderbufferStorageMultisample(36161,Xe,nt,A.width,A.height)}else o.renderbufferStorage(36161,nt,A.width,A.height)}o.bindRenderbuffer(36161,null)}function Ce(P,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,P),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),V(A.depthTexture,0);const le=r.get(A.depthTexture).__webglTexture;if(A.depthTexture.format===gs)o.framebufferTexture2D(36160,36096,3553,le,0);else if(A.depthTexture.format===No)o.framebufferTexture2D(36160,33306,3553,le,0);else throw new Error("Unknown depthTexture format")}function Le(P){const A=r.get(P),ae=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture){if(ae)throw new Error("target.depthTexture not supported in Cube render targets");Ce(A.__webglFramebuffer,P)}else if(ae){A.__webglDepthbuffer=[];for(let le=0;le<6;le++)t.bindFramebuffer(36160,A.__webglFramebuffer[le]),A.__webglDepthbuffer[le]=o.createRenderbuffer(),De(A.__webglDepthbuffer[le],P,!1)}else t.bindFramebuffer(36160,A.__webglFramebuffer),A.__webglDepthbuffer=o.createRenderbuffer(),De(A.__webglDepthbuffer,P,!1);t.bindFramebuffer(36160,null)}function we(P){const A=P.texture,ae=r.get(P),le=r.get(A);P.addEventListener("dispose",ee),le.__webglTexture=o.createTexture(),le.__version=A.version,c.memory.textures++;const Se=P.isWebGLCubeRenderTarget===!0,Ie=P.isWebGLMultisampleRenderTarget===!0,nt=A.isDataTexture3D||A.isDataTexture2DArray,Xe=M(P)||d;if(d&&A.format===yr&&(A.type===$i||A.type===Tl)&&(A.format=Yn,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),Se){ae.__webglFramebuffer=[];for(let O=0;O<6;O++)ae.__webglFramebuffer[O]=o.createFramebuffer()}else if(ae.__webglFramebuffer=o.createFramebuffer(),Ie)if(d){ae.__webglMultisampledFramebuffer=o.createFramebuffer(),ae.__webglColorRenderbuffer=o.createRenderbuffer(),o.bindRenderbuffer(36161,ae.__webglColorRenderbuffer);const O=l.convert(A.format),ve=l.convert(A.type),_e=z(A.internalFormat,O,ve),Be=Qe(P);o.renderbufferStorageMultisample(36161,Be,_e,P.width,P.height),t.bindFramebuffer(36160,ae.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064,36161,ae.__webglColorRenderbuffer),o.bindRenderbuffer(36161,null),P.depthBuffer&&(ae.__webglDepthRenderbuffer=o.createRenderbuffer(),De(ae.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(Se){t.bindTexture(34067,le.__webglTexture),te(34067,A,Xe);for(let O=0;O<6;O++)Z(ae.__webglFramebuffer[O],P,36064,34069+O);I(A,Xe)&&U(34067,A,P.width,P.height),t.bindTexture(34067,null)}else{let O=3553;nt&&(d?O=A.isDataTexture3D?32879:35866:console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")),t.bindTexture(O,le.__webglTexture),te(O,A,Xe),Z(ae.__webglFramebuffer,P,36064,O),I(A,Xe)&&U(3553,A,P.width,P.height),t.bindTexture(3553,null)}P.depthBuffer&&Le(P)}function ze(P){const A=P.texture,ae=M(P)||d;if(I(A,ae)){const le=P.isWebGLCubeRenderTarget?34067:3553,Se=r.get(A).__webglTexture;t.bindTexture(le,Se),U(le,A,P.width,P.height),t.bindTexture(le,null)}}function Oe(P){if(P.isWebGLMultisampleRenderTarget)if(d){const A=P.width,ae=P.height;let le=16384;P.depthBuffer&&(le|=256),P.stencilBuffer&&(le|=1024);const Se=r.get(P);t.bindFramebuffer(36008,Se.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,Se.__webglFramebuffer),o.blitFramebuffer(0,0,A,ae,0,0,A,ae,le,9728),t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,Se.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function Qe(P){return d&&P.isWebGLMultisampleRenderTarget?Math.min(v,P.samples):0}function me(P){const A=c.render.frame;y.get(P)!==A&&(y.set(P,A),P.update())}let ye=!1,Me=!1;function Fe(P,A){P&&P.isWebGLRenderTarget&&(ye===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),ye=!0),P=P.texture),V(P,A)}function Te(P,A){P&&P.isWebGLCubeRenderTarget&&(Me===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),Me=!0),P=P.texture),se(P,A)}this.allocateTextureUnit=F,this.resetTextureUnits=ie,this.setTexture2D=V,this.setTexture2DArray=G,this.setTexture3D=B,this.setTextureCube=se,this.setupRenderTarget=we,this.updateRenderTargetMipmap=ze,this.updateMultisampleRenderTarget=Oe,this.safeSetTexture2D=Fe,this.safeSetTextureCube=Te}function VS(o,e,t){const r=t.isWebGL2;function s(l){let c;if(l===bd)return 5121;if(l===my)return 32819;if(l===gy)return 32820;if(l===vy)return 33635;if(l===hy)return 5120;if(l===fy)return 5122;if(l===bl)return 5123;if(l===py)return 5124;if(l===El)return 5125;if(l===$i)return 5126;if(l===Tl)return r?5131:(c=e.get("OES_texture_half_float"),c!==null?c.HALF_FLOAT_OES:null);if(l===yy)return 6406;if(l===yr)return 6407;if(l===Yn)return 6408;if(l===xy)return 6409;if(l===_y)return 6410;if(l===gs)return 6402;if(l===No)return 34041;if(l===wy)return 6403;if(l===My)return 36244;if(l===Sy)return 33319;if(l===Ey)return 33320;if(l===by)return 36248;if(l===Ty)return 36249;if(l===Ip||l===kp||l===Fp||l===zp)if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(l===Ip)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(l===kp)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(l===Fp)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(l===zp)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(l===Bp||l===Op||l===Up||l===Hp)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(l===Bp)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(l===Op)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(l===Up)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(l===Hp)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(l===Ly)return c=e.get("WEBGL_compressed_texture_etc1"),c!==null?c.COMPRESSED_RGB_ETC1_WEBGL:null;if((l===Vp||l===Gp)&&(c=e.get("WEBGL_compressed_texture_etc"),c!==null)){if(l===Vp)return c.COMPRESSED_RGB8_ETC2;if(l===Gp)return c.COMPRESSED_RGBA8_ETC2_EAC}if(l===Ay||l===Cy||l===Ry||l===Py||l===Ny||l===Dy||l===Iy||l===ky||l===Fy||l===zy||l===By||l===Oy||l===Uy||l===Hy||l===Gy||l===Wy||l===jy||l===Xy||l===qy||l===Yy||l===Zy||l===Jy||l===Qy||l===$y||l===Ky||l===ex||l===tx||l===nx)return c=e.get("WEBGL_compressed_texture_astc"),c!==null?l:null;if(l===Vy)return c=e.get("EXT_texture_compression_bptc"),c!==null?l:null;if(l===Co)return r?34042:(c=e.get("WEBGL_depth_texture"),c!==null?c.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:s}}class gg extends mn{constructor(e=[]){super(),this.cameras=e}}gg.prototype.isArrayCamera=!0;class bo extends lt{constructor(){super(),this.type="Group"}}bo.prototype.isGroup=!0;const GS={type:"move"};class td{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let s=null,l=null,c=null;const d=this._targetRay,h=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(d!==null&&(s=t.getPose(e.targetRaySpace,r),s!==null&&(d.matrix.fromArray(s.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),s.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(s.linearVelocity)):d.hasLinearVelocity=!1,s.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(s.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(GS))),f&&e.hand){c=!0;for(const E of e.hand.values()){const b=t.getJointPose(E,r);if(f.joints[E.jointName]===void 0){const _=new bo;_.matrixAutoUpdate=!1,_.visible=!1,f.joints[E.jointName]=_,f.add(_)}const M=f.joints[E.jointName];b!==null&&(M.matrix.fromArray(b.transform.matrix),M.matrix.decompose(M.position,M.rotation,M.scale),M.jointRadius=b.radius),M.visible=b!==null}const m=f.joints["index-finger-tip"],v=f.joints["thumb-tip"],y=m.position.distanceTo(v.position),x=.02,w=.005;f.inputState.pinching&&y>x+w?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&y<=x-w&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));return d!==null&&(d.visible=s!==null),h!==null&&(h.visible=l!==null),f!==null&&(f.visible=c!==null),this}}class WS extends wr{constructor(e,t){super();const r=this,s=e.state;let l=null,c=1,d=null,h="local-floor",f=null;const m=[],v=new Map,y=new mn;y.layers.enable(1),y.viewport=new dt;const x=new mn;x.layers.enable(2),x.viewport=new dt;const w=[y,x],E=new gg;E.layers.enable(1),E.layers.enable(2);let b=null,M=null;this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let F=m[ie];return F===void 0&&(F=new td,m[ie]=F),F.getTargetRaySpace()},this.getControllerGrip=function(ie){let F=m[ie];return F===void 0&&(F=new td,m[ie]=F),F.getGripSpace()},this.getHand=function(ie){let F=m[ie];return F===void 0&&(F=new td,m[ie]=F),F.getHandSpace()};function _(ie){const F=v.get(ie.inputSource);F&&F.dispatchEvent({type:ie.type,data:ie.inputSource})}function I(){v.forEach(function(ie,F){ie.disconnect(F)}),v.clear(),b=null,M=null,s.bindXRFramebuffer(null),e.setRenderTarget(e.getRenderTarget()),he.stop(),r.isPresenting=!1,r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){c=ie,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){h=ie,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d},this.getSession=function(){return l},this.setSession=async function(ie){if(l=ie,l!==null){l.addEventListener("select",_),l.addEventListener("selectstart",_),l.addEventListener("selectend",_),l.addEventListener("squeeze",_),l.addEventListener("squeezestart",_),l.addEventListener("squeezeend",_),l.addEventListener("end",I),l.addEventListener("inputsourceschange",U);const F=t.getContextAttributes();F.xrCompatible!==!0&&await t.makeXRCompatible();const V={antialias:F.antialias,alpha:F.alpha,depth:F.depth,stencil:F.stencil,framebufferScaleFactor:c},G=new XRWebGLLayer(l,t,V);l.updateRenderState({baseLayer:G}),d=await l.requestReferenceSpace(h),he.setContext(l),he.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}};function U(ie){const F=l.inputSources;for(let V=0;V<m.length;V++)v.set(F[V],m[V]);for(let V=0;V<ie.removed.length;V++){const G=ie.removed[V],B=v.get(G);B&&(B.dispatchEvent({type:"disconnected",data:G}),v.delete(G))}for(let V=0;V<ie.added.length;V++){const G=ie.added[V],B=v.get(G);B&&B.dispatchEvent({type:"connected",data:G})}}const z=new N,T=new N;function W(ie,F,V){z.setFromMatrixPosition(F.matrixWorld),T.setFromMatrixPosition(V.matrixWorld);const G=z.distanceTo(T),B=F.projectionMatrix.elements,se=V.projectionMatrix.elements,Y=B[14]/(B[10]-1),K=B[14]/(B[10]+1),te=(B[9]+1)/B[5],R=(B[9]-1)/B[5],q=(B[8]-1)/B[0],ge=(se[8]+1)/se[0],Z=Y*q,De=Y*ge,Ce=G/(-q+ge),Le=Ce*-q;F.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(Le),ie.translateZ(Ce),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert();const we=Y+Ce,ze=K+Ce,Oe=Z-Le,Qe=De+(G-Le),me=te*K/ze*we,ye=R*K/ze*we;ie.projectionMatrix.makePerspective(Oe,Qe,me,ye,we,ze)}function ee(ie,F){F===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(F.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.getCamera=function(ie){E.near=x.near=y.near=ie.near,E.far=x.far=y.far=ie.far,(b!==E.near||M!==E.far)&&(l.updateRenderState({depthNear:E.near,depthFar:E.far}),b=E.near,M=E.far);const F=ie.parent,V=E.cameras;ee(E,F);for(let B=0;B<V.length;B++)ee(V[B],F);ie.matrixWorld.copy(E.matrixWorld),ie.matrix.copy(E.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale);const G=ie.children;for(let B=0,se=G.length;B<se;B++)G[B].updateMatrixWorld(!0);return V.length===2?W(E,y,x):E.projectionMatrix.copy(y.projectionMatrix),E};let ne=null;function oe(ie,F){if(f=F.getViewerPose(d),f!==null){const G=f.views,B=l.renderState.baseLayer;s.bindXRFramebuffer(B.framebuffer);let se=!1;G.length!==E.cameras.length&&(E.cameras.length=0,se=!0);for(let Y=0;Y<G.length;Y++){const K=G[Y],te=B.getViewport(K),R=w[Y];R.matrix.fromArray(K.transform.matrix),R.projectionMatrix.fromArray(K.projectionMatrix),R.viewport.set(te.x,te.y,te.width,te.height),Y===0&&E.matrix.copy(R.matrix),se===!0&&E.cameras.push(R)}}const V=l.inputSources;for(let G=0;G<m.length;G++){const B=m[G],se=V[G];B.update(se,F,d)}ne&&ne(ie,F)}const he=new ig;he.setAnimationLoop(oe),this.setAnimationLoop=function(ie){ne=ie},this.dispose=function(){}}}function jS(o){function e(M,_){M.fogColor.value.copy(_.color),_.isFog?(M.fogNear.value=_.near,M.fogFar.value=_.far):_.isFogExp2&&(M.fogDensity.value=_.density)}function t(M,_,I,U){_.isMeshBasicMaterial?r(M,_):_.isMeshLambertMaterial?(r(M,_),h(M,_)):_.isMeshToonMaterial?(r(M,_),m(M,_)):_.isMeshPhongMaterial?(r(M,_),f(M,_)):_.isMeshStandardMaterial?(r(M,_),_.isMeshPhysicalMaterial?y(M,_):v(M,_)):_.isMeshMatcapMaterial?(r(M,_),x(M,_)):_.isMeshDepthMaterial?(r(M,_),w(M,_)):_.isMeshDistanceMaterial?(r(M,_),E(M,_)):_.isMeshNormalMaterial?(r(M,_),b(M,_)):_.isLineBasicMaterial?(s(M,_),_.isLineDashedMaterial&&l(M,_)):_.isPointsMaterial?c(M,_,I,U):_.isSpriteMaterial?d(M,_):_.isShadowMaterial?(M.color.value.copy(_.color),M.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function r(M,_){M.opacity.value=_.opacity,_.color&&M.diffuse.value.copy(_.color),_.emissive&&M.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(M.map.value=_.map),_.alphaMap&&(M.alphaMap.value=_.alphaMap),_.specularMap&&(M.specularMap.value=_.specularMap);const I=o.get(_).envMap;if(I){M.envMap.value=I,M.flipEnvMap.value=I.isCubeTexture&&I._needsFlipEnvMap?-1:1,M.reflectivity.value=_.reflectivity,M.refractionRatio.value=_.refractionRatio;const T=o.get(I).__maxMipLevel;T!==void 0&&(M.maxMipLevel.value=T)}_.lightMap&&(M.lightMap.value=_.lightMap,M.lightMapIntensity.value=_.lightMapIntensity),_.aoMap&&(M.aoMap.value=_.aoMap,M.aoMapIntensity.value=_.aoMapIntensity);let U;_.map?U=_.map:_.specularMap?U=_.specularMap:_.displacementMap?U=_.displacementMap:_.normalMap?U=_.normalMap:_.bumpMap?U=_.bumpMap:_.roughnessMap?U=_.roughnessMap:_.metalnessMap?U=_.metalnessMap:_.alphaMap?U=_.alphaMap:_.emissiveMap?U=_.emissiveMap:_.clearcoatMap?U=_.clearcoatMap:_.clearcoatNormalMap?U=_.clearcoatNormalMap:_.clearcoatRoughnessMap&&(U=_.clearcoatRoughnessMap),U!==void 0&&(U.isWebGLRenderTarget&&(U=U.texture),U.matrixAutoUpdate===!0&&U.updateMatrix(),M.uvTransform.value.copy(U.matrix));let z;_.aoMap?z=_.aoMap:_.lightMap&&(z=_.lightMap),z!==void 0&&(z.isWebGLRenderTarget&&(z=z.texture),z.matrixAutoUpdate===!0&&z.updateMatrix(),M.uv2Transform.value.copy(z.matrix))}function s(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity}function l(M,_){M.dashSize.value=_.dashSize,M.totalSize.value=_.dashSize+_.gapSize,M.scale.value=_.scale}function c(M,_,I,U){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.size.value=_.size*I,M.scale.value=U*.5,_.map&&(M.map.value=_.map),_.alphaMap&&(M.alphaMap.value=_.alphaMap);let z;_.map?z=_.map:_.alphaMap&&(z=_.alphaMap),z!==void 0&&(z.matrixAutoUpdate===!0&&z.updateMatrix(),M.uvTransform.value.copy(z.matrix))}function d(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.rotation.value=_.rotation,_.map&&(M.map.value=_.map),_.alphaMap&&(M.alphaMap.value=_.alphaMap);let I;_.map?I=_.map:_.alphaMap&&(I=_.alphaMap),I!==void 0&&(I.matrixAutoUpdate===!0&&I.updateMatrix(),M.uvTransform.value.copy(I.matrix))}function h(M,_){_.emissiveMap&&(M.emissiveMap.value=_.emissiveMap)}function f(M,_){M.specular.value.copy(_.specular),M.shininess.value=Math.max(_.shininess,1e-4),_.emissiveMap&&(M.emissiveMap.value=_.emissiveMap),_.bumpMap&&(M.bumpMap.value=_.bumpMap,M.bumpScale.value=_.bumpScale,_.side===Ht&&(M.bumpScale.value*=-1)),_.normalMap&&(M.normalMap.value=_.normalMap,M.normalScale.value.copy(_.normalScale),_.side===Ht&&M.normalScale.value.negate()),_.displacementMap&&(M.displacementMap.value=_.displacementMap,M.displacementScale.value=_.displacementScale,M.displacementBias.value=_.displacementBias)}function m(M,_){_.gradientMap&&(M.gradientMap.value=_.gradientMap),_.emissiveMap&&(M.emissiveMap.value=_.emissiveMap),_.bumpMap&&(M.bumpMap.value=_.bumpMap,M.bumpScale.value=_.bumpScale,_.side===Ht&&(M.bumpScale.value*=-1)),_.normalMap&&(M.normalMap.value=_.normalMap,M.normalScale.value.copy(_.normalScale),_.side===Ht&&M.normalScale.value.negate()),_.displacementMap&&(M.displacementMap.value=_.displacementMap,M.displacementScale.value=_.displacementScale,M.displacementBias.value=_.displacementBias)}function v(M,_){M.roughness.value=_.roughness,M.metalness.value=_.metalness,_.roughnessMap&&(M.roughnessMap.value=_.roughnessMap),_.metalnessMap&&(M.metalnessMap.value=_.metalnessMap),_.emissiveMap&&(M.emissiveMap.value=_.emissiveMap),_.bumpMap&&(M.bumpMap.value=_.bumpMap,M.bumpScale.value=_.bumpScale,_.side===Ht&&(M.bumpScale.value*=-1)),_.normalMap&&(M.normalMap.value=_.normalMap,M.normalScale.value.copy(_.normalScale),_.side===Ht&&M.normalScale.value.negate()),_.displacementMap&&(M.displacementMap.value=_.displacementMap,M.displacementScale.value=_.displacementScale,M.displacementBias.value=_.displacementBias),o.get(_).envMap&&(M.envMapIntensity.value=_.envMapIntensity)}function y(M,_){v(M,_),M.reflectivity.value=_.reflectivity,M.clearcoat.value=_.clearcoat,M.clearcoatRoughness.value=_.clearcoatRoughness,_.sheen&&M.sheen.value.copy(_.sheen),_.clearcoatMap&&(M.clearcoatMap.value=_.clearcoatMap),_.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap),_.clearcoatNormalMap&&(M.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),M.clearcoatNormalMap.value=_.clearcoatNormalMap,_.side===Ht&&M.clearcoatNormalScale.value.negate()),M.transmission.value=_.transmission,_.transmissionMap&&(M.transmissionMap.value=_.transmissionMap)}function x(M,_){_.matcap&&(M.matcap.value=_.matcap),_.bumpMap&&(M.bumpMap.value=_.bumpMap,M.bumpScale.value=_.bumpScale,_.side===Ht&&(M.bumpScale.value*=-1)),_.normalMap&&(M.normalMap.value=_.normalMap,M.normalScale.value.copy(_.normalScale),_.side===Ht&&M.normalScale.value.negate()),_.displacementMap&&(M.displacementMap.value=_.displacementMap,M.displacementScale.value=_.displacementScale,M.displacementBias.value=_.displacementBias)}function w(M,_){_.displacementMap&&(M.displacementMap.value=_.displacementMap,M.displacementScale.value=_.displacementScale,M.displacementBias.value=_.displacementBias)}function E(M,_){_.displacementMap&&(M.displacementMap.value=_.displacementMap,M.displacementScale.value=_.displacementScale,M.displacementBias.value=_.displacementBias),M.referencePosition.value.copy(_.referencePosition),M.nearDistance.value=_.nearDistance,M.farDistance.value=_.farDistance}function b(M,_){_.bumpMap&&(M.bumpMap.value=_.bumpMap,M.bumpScale.value=_.bumpScale,_.side===Ht&&(M.bumpScale.value*=-1)),_.normalMap&&(M.normalMap.value=_.normalMap,M.normalScale.value.copy(_.normalScale),_.side===Ht&&M.normalScale.value.negate()),_.displacementMap&&(M.displacementMap.value=_.displacementMap,M.displacementScale.value=_.displacementScale,M.displacementBias.value=_.displacementBias)}return{refreshFogUniforms:e,refreshMaterialUniforms:t}}function XS(){const o=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");return o.style.display="block",o}function ht(o){o=o||{};const e=o.canvas!==void 0?o.canvas:XS(),t=o.context!==void 0?o.context:null,r=o.alpha!==void 0?o.alpha:!1,s=o.depth!==void 0?o.depth:!0,l=o.stencil!==void 0?o.stencil:!0,c=o.antialias!==void 0?o.antialias:!1,d=o.premultipliedAlpha!==void 0?o.premultipliedAlpha:!0,h=o.preserveDrawingBuffer!==void 0?o.preserveDrawingBuffer:!1,f=o.powerPreference!==void 0?o.powerPreference:"default",m=o.failIfMajorPerformanceCaveat!==void 0?o.failIfMajorPerformanceCaveat:!1;let v=null,y=null;const x=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=Bo,this.physicallyCorrectLights=!1,this.toneMapping=Ao,this.toneMappingExposure=1;const E=this;let b=!1,M=0,_=0,I=null,U=-1,z=null;const T=new dt,W=new dt;let ee=null,ne=e.width,oe=e.height,he=1,ie=null,F=null;const V=new dt(0,0,ne,oe),G=new dt(0,0,ne,oe);let B=!1;const se=new zl;let Y=!1,K=!1;const te=new We,R=new N,q={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ge(){return I===null?he:1}let Z=t;function De(L,$){for(let X=0;X<L.length;X++){const re=L[X],Ee=e.getContext(re,$);if(Ee!==null)return Ee}return null}try{const L={alpha:r,depth:s,stencil:l,antialias:c,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:f,failIfMajorPerformanceCaveat:m};if(e.addEventListener("webglcontextlost",Ve,!1),e.addEventListener("webglcontextrestored",it,!1),Z===null){const $=["webgl2","webgl","experimental-webgl"];if(E.isWebGL1Renderer===!0&&$.shift(),Z=De($,L),Z===null)throw De($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}Z.getShaderPrecisionFormat===void 0&&(Z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let Ce,Le,we,ze,Oe,Qe,me,ye,Me,Fe,Te,P,A,ae,le,Se,Ie,nt,Xe,O,ve,_e;function Be(){Ce=new pM(Z),Le=new dM(Z,Ce,o),Ce.init(Le),ve=new VS(Z,Ce,Le),we=new US(Z,Ce,Le),ze=new vM,Oe=new AS,Qe=new HS(Z,Ce,we,Oe,Le,ve,ze),me=new fM(E),ye=new Ox(Z,Le),_e=new cM(Z,Ce,ye,Le),Me=new mM(Z,ye,ze,_e),Fe=new wM(Z,Me,ye,ze),nt=new _M(Z),le=new hM(Oe),Te=new LS(E,me,Ce,Le,_e,le),P=new jS(Oe),A=new PS(Oe),ae=new zS(Ce,Le),Ie=new lM(E,me,we,Fe,d),Se=new mg(E,Fe,Le),Xe=new uM(Z,Ce,ze,Le),O=new gM(Z,Ce,ze,Le),ze.programs=Te.programs,E.capabilities=Le,E.extensions=Ce,E.properties=Oe,E.renderLists=A,E.shadowMap=Se,E.state=we,E.info=ze}Be();const ue=new WS(E,Z);this.xr=ue,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){const L=Ce.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=Ce.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(L){L!==void 0&&(he=L,this.setSize(ne,oe,!1))},this.getSize=function(L){return L===void 0&&(console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"),L=new xe),L.set(ne,oe)},this.setSize=function(L,$,X){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ne=L,oe=$,e.width=Math.floor(L*he),e.height=Math.floor($*he),X!==!1&&(e.style.width=L+"px",e.style.height=$+"px"),this.setViewport(0,0,L,$)},this.getDrawingBufferSize=function(L){return L===void 0&&(console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"),L=new xe),L.set(ne*he,oe*he).floor()},this.setDrawingBufferSize=function(L,$,X){ne=L,oe=$,he=X,e.width=Math.floor(L*X),e.height=Math.floor($*X),this.setViewport(0,0,L,$)},this.getCurrentViewport=function(L){return L===void 0&&(console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"),L=new dt),L.copy(T)},this.getViewport=function(L){return L.copy(V)},this.setViewport=function(L,$,X,re){L.isVector4?V.set(L.x,L.y,L.z,L.w):V.set(L,$,X,re),we.viewport(T.copy(V).multiplyScalar(he).floor())},this.getScissor=function(L){return L.copy(G)},this.setScissor=function(L,$,X,re){L.isVector4?G.set(L.x,L.y,L.z,L.w):G.set(L,$,X,re),we.scissor(W.copy(G).multiplyScalar(he).floor())},this.getScissorTest=function(){return B},this.setScissorTest=function(L){we.setScissorTest(B=L)},this.setOpaqueSort=function(L){ie=L},this.setTransparentSort=function(L){F=L},this.getClearColor=function(L){return L===void 0&&(console.warn("WebGLRenderer: .getClearColor() now requires a Color as an argument"),L=new Ge),L.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor.apply(Ie,arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha.apply(Ie,arguments)},this.clear=function(L,$,X){let re=0;(L===void 0||L)&&(re|=16384),($===void 0||$)&&(re|=256),(X===void 0||X)&&(re|=1024),Z.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ve,!1),e.removeEventListener("webglcontextrestored",it,!1),A.dispose(),ae.dispose(),Oe.dispose(),me.dispose(),Fe.dispose(),_e.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",Sr),ue.removeEventListener("sessionend",Er),In.stop()};function Ve(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function it(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const L=ze.autoReset,$=Se.enabled,X=Se.autoUpdate,re=Se.needsUpdate,Ee=Se.type;Be(),ze.autoReset=L,Se.enabled=$,Se.autoUpdate=X,Se.needsUpdate=re,Se.type=Ee}function Tt(L){const $=L.target;$.removeEventListener("dispose",Tt),Jn($)}function Jn(L){yt(L),Oe.remove(L)}function yt(L){const $=Oe.get(L).programs;$!==void 0&&$.forEach(function(X){Te.releaseProgram(X)})}function Dn(L,$){L.render(function(X){E.renderBufferImmediate(X,$)})}this.renderBufferImmediate=function(L,$){_e.initAttributes();const X=Oe.get(L);L.hasPositions&&!X.position&&(X.position=Z.createBuffer()),L.hasNormals&&!X.normal&&(X.normal=Z.createBuffer()),L.hasUvs&&!X.uv&&(X.uv=Z.createBuffer()),L.hasColors&&!X.color&&(X.color=Z.createBuffer());const re=$.getAttributes();L.hasPositions&&(Z.bindBuffer(34962,X.position),Z.bufferData(34962,L.positionArray,35048),_e.enableAttribute(re.position),Z.vertexAttribPointer(re.position,3,5126,!1,0,0)),L.hasNormals&&(Z.bindBuffer(34962,X.normal),Z.bufferData(34962,L.normalArray,35048),_e.enableAttribute(re.normal),Z.vertexAttribPointer(re.normal,3,5126,!1,0,0)),L.hasUvs&&(Z.bindBuffer(34962,X.uv),Z.bufferData(34962,L.uvArray,35048),_e.enableAttribute(re.uv),Z.vertexAttribPointer(re.uv,2,5126,!1,0,0)),L.hasColors&&(Z.bindBuffer(34962,X.color),Z.bufferData(34962,L.colorArray,35048),_e.enableAttribute(re.color),Z.vertexAttribPointer(re.color,3,5126,!1,0,0)),_e.disableUnusedAttributes(),Z.drawArrays(4,0,L.count),L.count=0},this.renderBufferDirect=function(L,$,X,re,Ee,$e){$===null&&($=q);const je=Ee.isMesh&&Ee.matrixWorld.determinant()<0,qe=Rs(L,$,re,Ee);we.setMaterial(re,je);let at=X.index;const Je=X.attributes.position;if(at===null){if(Je===void 0||Je.count===0)return}else if(at.count===0)return;let rt=1;re.wireframe===!0&&(at=Me.getWireframeAttribute(X),rt=2),(re.morphTargets||re.morphNormals)&&nt.update(Ee,X,re,qe),_e.setup(Ee,re,qe,X,at);let Ze,et=Xe;at!==null&&(Ze=ye.get(at),et=O,et.setIndex(Ze));const gn=at!==null?at.count:Je.count,Ft=X.drawRange.start*rt,di=X.drawRange.count*rt,Lt=$e!==null?$e.start*rt:0,Qn=$e!==null?$e.count*rt:1/0,wt=Math.max(Ft,Lt),Tr=Math.min(gn,Ft+di,Lt+Qn)-1,Zt=Math.max(0,Tr-wt+1);if(Zt!==0){if(Ee.isMesh)re.wireframe===!0?(we.setLineWidth(re.wireframeLinewidth*ge()),et.setMode(1)):et.setMode(4);else if(Ee.isLine){let kn=re.linewidth;kn===void 0&&(kn=1),we.setLineWidth(kn*ge()),Ee.isLineSegments?et.setMode(1):Ee.isLineLoop?et.setMode(2):et.setMode(3)}else Ee.isPoints?et.setMode(0):Ee.isSprite&&et.setMode(4);if(Ee.isInstancedMesh)et.renderInstances(wt,Zt,Ee.count);else if(X.isInstancedBufferGeometry){const kn=Math.min(X.instanceCount,X._maxInstanceCount);et.renderInstances(wt,Zt,kn)}else et.render(wt,Zt)}},this.compile=function(L,$){y=ae.get(L),y.init(),L.traverseVisible(function(X){X.isLight&&X.layers.test($.layers)&&(y.pushLight(X),X.castShadow&&y.pushShadow(X))}),y.setupLights(),L.traverse(function(X){const re=X.material;if(re)if(Array.isArray(re))for(let Ee=0;Ee<re.length;Ee++){const $e=re[Ee];br($e,L,X)}else br(re,L,X)})};let nn=null;function Ls(L){nn&&nn(L)}function Sr(){In.stop()}function Er(){In.start()}const In=new ig;In.setAnimationLoop(Ls),typeof window<"u"&&In.setContext(window),this.setAnimationLoop=function(L){nn=L,ue.setAnimationLoop(L),L===null?In.stop():In.start()},ue.addEventListener("sessionstart",Sr),ue.addEventListener("sessionend",Er),this.render=function(L,$){let X,re;if(arguments[2]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."),X=arguments[2]),arguments[3]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."),re=arguments[3]),$!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;L.autoUpdate===!0&&L.updateMatrixWorld(),$.parent===null&&$.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&($=ue.getCamera($)),L.isScene===!0&&L.onBeforeRender(E,L,$,X||I),y=ae.get(L,w.length),y.init(),w.push(y),te.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),se.setFromProjectionMatrix(te),K=this.localClippingEnabled,Y=le.init(this.clippingPlanes,K,$),v=A.get(L,x.length),v.init(),x.push(v),ci(L,$,0,E.sortObjects),v.finish(),E.sortObjects===!0&&v.sort(ie,F),Y===!0&&le.beginShadows();const Ee=y.state.shadowsArray;Se.render(Ee,L,$),y.setupLights(),y.setupLightsView($),Y===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset(),X!==void 0&&this.setRenderTarget(X),Ie.render(v,L,$,re);const $e=v.opaque,je=v.transparent;$e.length>0&&ui($e,L,$),je.length>0&&ui(je,L,$),I!==null&&(Qe.updateRenderTargetMipmap(I),Qe.updateMultisampleRenderTarget(I)),L.isScene===!0&&L.onAfterRender(E,L,$),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1),_e.resetDefaultState(),U=-1,z=null,w.pop(),w.length>0?y=w[w.length-1]:y=null,x.pop(),x.length>0?v=x[x.length-1]:v=null};function ci(L,$,X,re){if(L.visible===!1)return;if(L.layers.test($.layers)){if(L.isGroup)X=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update($);else if(L.isLight)y.pushLight(L),L.castShadow&&y.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||se.intersectsSprite(L)){re&&R.setFromMatrixPosition(L.matrixWorld).applyMatrix4(te);const je=Fe.update(L),qe=L.material;qe.visible&&v.push(L,je,qe,X,R.z,null)}}else if(L.isImmediateRenderObject)re&&R.setFromMatrixPosition(L.matrixWorld).applyMatrix4(te),v.push(L,null,L.material,X,R.z,null);else if((L.isMesh||L.isLine||L.isPoints)&&(L.isSkinnedMesh&&L.skeleton.frame!==ze.render.frame&&(L.skeleton.update(),L.skeleton.frame=ze.render.frame),!L.frustumCulled||se.intersectsObject(L))){re&&R.setFromMatrixPosition(L.matrixWorld).applyMatrix4(te);const je=Fe.update(L),qe=L.material;if(Array.isArray(qe)){const at=je.groups;for(let Je=0,rt=at.length;Je<rt;Je++){const Ze=at[Je],et=qe[Ze.materialIndex];et&&et.visible&&v.push(L,je,et,X,R.z,Ze)}}else qe.visible&&v.push(L,je,qe,X,R.z,null)}}const $e=L.children;for(let je=0,qe=$e.length;je<qe;je++)ci($e[je],$,X,re)}function ui(L,$,X){const re=$.isScene===!0?$.overrideMaterial:null;for(let Ee=0,$e=L.length;Ee<$e;Ee++){const je=L[Ee],qe=je.object,at=je.geometry,Je=re===null?je.material:re,rt=je.group;if(X.isArrayCamera){const Ze=X.cameras;for(let et=0,gn=Ze.length;et<gn;et++){const Ft=Ze[et];qe.layers.test(Ft.layers)&&(we.viewport(T.copy(Ft.viewport)),y.setupLightsView(Ft),As(qe,$,Ft,at,Je,rt))}}else As(qe,$,X,at,Je,rt)}}function As(L,$,X,re,Ee,$e){if(L.onBeforeRender(E,$,X,re,Ee,$e),L.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),L.isImmediateRenderObject){const je=Rs(X,$,Ee,L);we.setMaterial(Ee),_e.reset(),Dn(L,je)}else E.renderBufferDirect(X,$,re,Ee,L,$e);L.onAfterRender(E,$,X,re,Ee,$e)}function br(L,$,X){$.isScene!==!0&&($=q);const re=Oe.get(L),Ee=y.state.lights,$e=y.state.shadowsArray,je=Ee.state.version,qe=Te.getParameters(L,Ee.state,$e,$,X),at=Te.getProgramCacheKey(qe);let Je=re.programs;re.environment=L.isMeshStandardMaterial?$.environment:null,re.fog=$.fog,re.envMap=me.get(L.envMap||re.environment),Je===void 0&&(L.addEventListener("dispose",Tt),Je=new Map,re.programs=Je);let rt=Je.get(at);if(rt!==void 0){if(re.currentProgram===rt&&re.lightsStateVersion===je)return Cs(L,qe),rt}else qe.uniforms=Te.getUniforms(L),L.onBuild(qe,E),L.onBeforeCompile(qe,E),rt=Te.acquireProgram(qe,at),Je.set(at,rt),re.uniforms=qe.uniforms;const Ze=re.uniforms;(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Ze.clippingPlanes=le.uniform),Cs(L,qe),re.needsLights=Ps(L),re.lightsStateVersion=je,re.needsLights&&(Ze.ambientLightColor.value=Ee.state.ambient,Ze.lightProbe.value=Ee.state.probe,Ze.directionalLights.value=Ee.state.directional,Ze.directionalLightShadows.value=Ee.state.directionalShadow,Ze.spotLights.value=Ee.state.spot,Ze.spotLightShadows.value=Ee.state.spotShadow,Ze.rectAreaLights.value=Ee.state.rectArea,Ze.ltc_1.value=Ee.state.rectAreaLTC1,Ze.ltc_2.value=Ee.state.rectAreaLTC2,Ze.pointLights.value=Ee.state.point,Ze.pointLightShadows.value=Ee.state.pointShadow,Ze.hemisphereLights.value=Ee.state.hemi,Ze.directionalShadowMap.value=Ee.state.directionalShadowMap,Ze.directionalShadowMatrix.value=Ee.state.directionalShadowMatrix,Ze.spotShadowMap.value=Ee.state.spotShadowMap,Ze.spotShadowMatrix.value=Ee.state.spotShadowMatrix,Ze.pointShadowMap.value=Ee.state.pointShadowMap,Ze.pointShadowMatrix.value=Ee.state.pointShadowMatrix);const et=rt.getUniforms(),gn=Ki.seqWithValue(et.seq,Ze);return re.currentProgram=rt,re.uniformsList=gn,rt}function Cs(L,$){const X=Oe.get(L);X.outputEncoding=$.outputEncoding,X.instancing=$.instancing,X.numClippingPlanes=$.numClippingPlanes,X.numIntersection=$.numClipIntersection,X.vertexAlphas=$.vertexAlphas}function Rs(L,$,X,re){$.isScene!==!0&&($=q),Qe.resetTextureUnits();const Ee=$.fog,$e=X.isMeshStandardMaterial?$.environment:null,je=I===null?E.outputEncoding:I.texture.encoding,qe=me.get(X.envMap||$e),at=X.vertexColors===!0&&re.geometry&&re.geometry.attributes.color&&re.geometry.attributes.color.itemSize===4,Je=Oe.get(X),rt=y.state.lights;if(Y===!0&&(K===!0||L!==z)){const wt=L===z&&X.id===U;le.setState(X,L,wt)}let Ze=!1;X.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==rt.state.version||Je.outputEncoding!==je||re.isInstancedMesh&&Je.instancing===!1||!re.isInstancedMesh&&Je.instancing===!0||Je.envMap!==qe||X.fog&&Je.fog!==Ee||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==le.numPlanes||Je.numIntersection!==le.numIntersection)||Je.vertexAlphas!==at)&&(Ze=!0):(Ze=!0,Je.__version=X.version);let et=Je.currentProgram;Ze===!0&&(et=br(X,$,re));let gn=!1,Ft=!1,di=!1;const Lt=et.getUniforms(),Qn=Je.uniforms;if(we.useProgram(et.program)&&(gn=!0,Ft=!0,di=!0),X.id!==U&&(U=X.id,Ft=!0),gn||z!==L){if(Lt.setValue(Z,"projectionMatrix",L.projectionMatrix),Le.logarithmicDepthBuffer&&Lt.setValue(Z,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),z!==L&&(z=L,Ft=!0,di=!0),X.isShaderMaterial||X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshStandardMaterial||X.envMap){const wt=Lt.map.cameraPosition;wt!==void 0&&wt.setValue(Z,R.setFromMatrixPosition(L.matrixWorld))}(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Lt.setValue(Z,"isOrthographic",L.isOrthographicCamera===!0),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial||X.isShadowMaterial||X.skinning)&&Lt.setValue(Z,"viewMatrix",L.matrixWorldInverse)}if(X.skinning){Lt.setOptional(Z,re,"bindMatrix"),Lt.setOptional(Z,re,"bindMatrixInverse");const wt=re.skeleton;if(wt){const Tr=wt.bones;if(Le.floatVertexTextures){if(wt.boneTexture===null){let Zt=Math.sqrt(Tr.length*4);Zt=yx(Zt),Zt=Math.max(Zt,4);const kn=new Float32Array(Zt*Zt*4);kn.set(wt.boneMatrices);const Mt=new ng(kn,Zt,Zt,Yn,$i);wt.boneMatrices=kn,wt.boneTexture=Mt,wt.boneTextureSize=Zt}Lt.setValue(Z,"boneTexture",wt.boneTexture,Qe),Lt.setValue(Z,"boneTextureSize",wt.boneTextureSize)}else Lt.setOptional(Z,wt,"boneMatrices")}}return(Ft||Je.receiveShadow!==re.receiveShadow)&&(Je.receiveShadow=re.receiveShadow,Lt.setValue(Z,"receiveShadow",re.receiveShadow)),Ft&&(Lt.setValue(Z,"toneMappingExposure",E.toneMappingExposure),Je.needsLights&&Ho(Qn,di),Ee&&X.fog&&P.refreshFogUniforms(Qn,Ee),P.refreshMaterialUniforms(Qn,X,he,oe),Ki.upload(Z,Je.uniformsList,Qn,Qe)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Ki.upload(Z,Je.uniformsList,Qn,Qe),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Lt.setValue(Z,"center",re.center),Lt.setValue(Z,"modelViewMatrix",re.modelViewMatrix),Lt.setValue(Z,"normalMatrix",re.normalMatrix),Lt.setValue(Z,"modelMatrix",re.matrixWorld),et}function Ho(L,$){L.ambientLightColor.needsUpdate=$,L.lightProbe.needsUpdate=$,L.directionalLights.needsUpdate=$,L.directionalLightShadows.needsUpdate=$,L.pointLights.needsUpdate=$,L.pointLightShadows.needsUpdate=$,L.spotLights.needsUpdate=$,L.spotLightShadows.needsUpdate=$,L.rectAreaLights.needsUpdate=$,L.hemisphereLights.needsUpdate=$}function Ps(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return _},this.getRenderTarget=function(){return I},this.setRenderTarget=function(L,$=0,X=0){I=L,M=$,_=X,L&&Oe.get(L).__webglFramebuffer===void 0&&Qe.setupRenderTarget(L);let re=null,Ee=!1,$e=!1;if(L){const je=L.texture;(je.isDataTexture3D||je.isDataTexture2DArray)&&($e=!0);const qe=Oe.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(re=qe[$],Ee=!0):L.isWebGLMultisampleRenderTarget?re=Oe.get(L).__webglMultisampledFramebuffer:re=qe,T.copy(L.viewport),W.copy(L.scissor),ee=L.scissorTest}else T.copy(V).multiplyScalar(he).floor(),W.copy(G).multiplyScalar(he).floor(),ee=B;if(we.bindFramebuffer(36160,re),we.viewport(T),we.scissor(W),we.setScissorTest(ee),Ee){const je=Oe.get(L.texture);Z.framebufferTexture2D(36160,36064,34069+$,je.__webglTexture,X)}else if($e){const je=Oe.get(L.texture),qe=$||0;Z.framebufferTextureLayer(36160,36064,je.__webglTexture,X||0,qe)}},this.readRenderTargetPixels=function(L,$,X,re,Ee,$e,je){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=Oe.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&je!==void 0&&(qe=qe[je]),qe){we.bindFramebuffer(36160,qe);try{const at=L.texture,Je=at.format,rt=at.type;if(Je!==Yn&&ve.convert(Je)!==Z.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ze=rt===Tl&&(Ce.has("EXT_color_buffer_half_float")||Le.isWebGL2&&Ce.has("EXT_color_buffer_float"));if(rt!==bd&&ve.convert(rt)!==Z.getParameter(35738)&&!(rt===$i&&(Le.isWebGL2||Ce.has("OES_texture_float")||Ce.has("WEBGL_color_buffer_float")))&&!Ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z.checkFramebufferStatus(36160)===36053?$>=0&&$<=L.width-re&&X>=0&&X<=L.height-Ee&&Z.readPixels($,X,re,Ee,ve.convert(Je),ve.convert(rt),$e):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{const at=I!==null?Oe.get(I).__webglFramebuffer:null;we.bindFramebuffer(36160,at)}}},this.copyFramebufferToTexture=function(L,$,X=0){const re=Math.pow(2,-X),Ee=Math.floor($.image.width*re),$e=Math.floor($.image.height*re),je=ve.convert($.format);Qe.setTexture2D($,0),Z.copyTexImage2D(3553,X,je,L.x,L.y,Ee,$e,0),we.unbindTexture()},this.copyTextureToTexture=function(L,$,X,re=0){const Ee=$.image.width,$e=$.image.height,je=ve.convert(X.format),qe=ve.convert(X.type);Qe.setTexture2D(X,0),Z.pixelStorei(37440,X.flipY),Z.pixelStorei(37441,X.premultiplyAlpha),Z.pixelStorei(3317,X.unpackAlignment),$.isDataTexture?Z.texSubImage2D(3553,re,L.x,L.y,Ee,$e,je,qe,$.image.data):$.isCompressedTexture?Z.compressedTexSubImage2D(3553,re,L.x,L.y,$.mipmaps[0].width,$.mipmaps[0].height,je,$.mipmaps[0].data):Z.texSubImage2D(3553,re,L.x,L.y,je,qe,$.image),re===0&&X.generateMipmaps&&Z.generateMipmap(3553),we.unbindTexture()},this.copyTextureToTexture3D=function(L,$,X,re,Ee=0){if(E.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const{width:$e,height:je,data:qe}=X.image,at=ve.convert(re.format),Je=ve.convert(re.type);let rt;if(re.isDataTexture3D)Qe.setTexture3D(re,0),rt=32879;else if(re.isDataTexture2DArray)Qe.setTexture2DArray(re,0),rt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Z.pixelStorei(37440,re.flipY),Z.pixelStorei(37441,re.premultiplyAlpha),Z.pixelStorei(3317,re.unpackAlignment);const Ze=Z.getParameter(3314),et=Z.getParameter(32878),gn=Z.getParameter(3316),Ft=Z.getParameter(3315),di=Z.getParameter(32877);Z.pixelStorei(3314,$e),Z.pixelStorei(32878,je),Z.pixelStorei(3316,L.min.x),Z.pixelStorei(3315,L.min.y),Z.pixelStorei(32877,L.min.z),Z.texSubImage3D(rt,Ee,$.x,$.y,$.z,L.max.x-L.min.x+1,L.max.y-L.min.y+1,L.max.z-L.min.z+1,at,Je,qe),Z.pixelStorei(3314,Ze),Z.pixelStorei(32878,et),Z.pixelStorei(3316,gn),Z.pixelStorei(3315,Ft),Z.pixelStorei(32877,di),Ee===0&&re.generateMipmaps&&Z.generateMipmap(rt),we.unbindTexture()},this.initTexture=function(L){Qe.setTexture2D(L,0),we.unbindTexture()},this.resetState=function(){M=0,_=0,I=null,we.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class qS extends ht{}qS.prototype.isWebGL1Renderer=!0;class Pd extends lt{constructor(){super(),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.background!==null&&(t.object.background=this.background.toJSON(e)),this.environment!==null&&(t.object.environment=this.environment.toJSON(e)),this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}Pd.prototype.isScene=!0;class Mr{constructor(e,t){this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Do,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=oi(),this.onUploadCallback=function(){}}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,r){e*=this.stride,r*=t.stride;for(let s=0,l=this.stride;s<l;s++)this.array[e+s]=t.array[r+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=oi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),r=new Mr(t,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=oi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}Mr.prototype.isInterleavedBuffer=!0;const Rt=new N;class Io{constructor(e,t,r,s){this.name="",this.data=e,this.itemSize=t,this.offset=r,this.normalized=s===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,r=this.data.count;t<r;t++)Rt.x=this.getX(t),Rt.y=this.getY(t),Rt.z=this.getZ(t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Rt.x=this.getX(t),Rt.y=this.getY(t),Rt.z=this.getZ(t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Rt.x=this.getX(t),Rt.y=this.getY(t),Rt.z=this.getZ(t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,r){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=r,this}setXYZ(e,t,r,s){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=s,this}setXYZW(e,t,r,s,l){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=s,this.data.array[e+3]=l,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const s=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[s+l])}return new Nt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Io(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const s=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[s+l])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}Io.prototype.isInterleavedBufferAttribute=!0;class vg extends Gt{constructor(e){super(),this.type="SpriteMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this}}vg.prototype.isSpriteMaterial=!0;let ls;const yo=new N,cs=new N,us=new N,ds=new xe,xo=new xe,yg=new We,dl=new N,_o=new N,hl=new N,vm=new xe,nd=new xe,ym=new xe;class YS extends lt{constructor(e){if(super(),this.type="Sprite",ls===void 0){ls=new ft;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new Mr(t,5);ls.setIndex([0,1,2,0,2,3]),ls.setAttribute("position",new Io(r,3,0,!1)),ls.setAttribute("uv",new Io(r,2,3,!1))}this.geometry=ls,this.material=e!==void 0?e:new vg,this.center=new xe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),cs.setFromMatrixScale(this.matrixWorld),yg.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),us.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&cs.multiplyScalar(-us.z);const r=this.material.rotation;let s,l;r!==0&&(l=Math.cos(r),s=Math.sin(r));const c=this.center;fl(dl.set(-.5,-.5,0),us,c,cs,s,l),fl(_o.set(.5,-.5,0),us,c,cs,s,l),fl(hl.set(.5,.5,0),us,c,cs,s,l),vm.set(0,0),nd.set(1,0),ym.set(1,1);let d=e.ray.intersectTriangle(dl,_o,hl,!1,yo);if(d===null&&(fl(_o.set(-.5,.5,0),us,c,cs,s,l),nd.set(0,1),d=e.ray.intersectTriangle(dl,hl,_o,!1,yo),d===null))return;const h=e.ray.origin.distanceTo(yo);h<e.near||h>e.far||t.push({distance:h,point:yo.clone(),uv:kt.getUV(yo,dl,_o,hl,vm,nd,ym,new xe),face:null,object:this})}copy(e){return super.copy(e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}YS.prototype.isSprite=!0;function fl(o,e,t,r,s,l){ds.subVectors(o,t).addScalar(.5).multiply(r),s!==void 0?(xo.x=l*ds.x-s*ds.y,xo.y=s*ds.x+l*ds.y):xo.copy(ds),o.copy(e),o.x+=xo.x,o.y+=xo.y,o.applyMatrix4(yg)}const xm=new N,_m=new dt,wm=new dt,ZS=new N,Mm=new We;class xg extends Zn{constructor(e,t){super(e,t),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new We,this.bindMatrixInverse=new We}copy(e){return super.copy(e),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new dt,t=this.geometry.attributes.skinWeight;for(let r=0,s=t.count;r<s;r++){e.x=t.getX(r),e.y=t.getY(r),e.z=t.getZ(r),e.w=t.getW(r);const l=1/e.manhattanLength();l!==1/0?e.multiplyScalar(l):e.set(1,0,0,0),t.setXYZW(r,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const r=this.skeleton,s=this.geometry;_m.fromBufferAttribute(s.attributes.skinIndex,e),wm.fromBufferAttribute(s.attributes.skinWeight,e),xm.fromBufferAttribute(s.attributes.position,e).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let l=0;l<4;l++){const c=wm.getComponent(l);if(c!==0){const d=_m.getComponent(l);Mm.multiplyMatrices(r.bones[d].matrixWorld,r.boneInverses[d]),t.addScaledVector(ZS.copy(xm).applyMatrix4(Mm),c)}}return t.applyMatrix4(this.bindMatrixInverse)}}xg.prototype.isSkinnedMesh=!0;class JS extends lt{constructor(){super(),this.type="Bone"}}JS.prototype.isBone=!0;const Sm=new We,Em=new We,pl=[],wo=new Zn;class QS extends Zn{constructor(e,t,r){super(e,t),this.instanceMatrix=new Nt(new Float32Array(r*16),16),this.instanceColor=null,this.count=r,this.frustumCulled=!1}copy(e){return super.copy(e),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const r=this.matrixWorld,s=this.count;if(wo.geometry=this.geometry,wo.material=this.material,wo.material!==void 0)for(let l=0;l<s;l++){this.getMatrixAt(l,Sm),Em.multiplyMatrices(r,Sm),wo.matrixWorld=Em,wo.raycast(e,pl);for(let c=0,d=pl.length;c<d;c++){const h=pl[c];h.instanceId=l,h.object=this,t.push(h)}pl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Nt(new Float32Array(this.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}QS.prototype.isInstancedMesh=!0;class Oo extends Gt{constructor(e){super(),this.type="LineBasicMaterial",this.color=new Ge(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.morphTargets=e.morphTargets,this}}Oo.prototype.isLineBasicMaterial=!0;const bm=new N,Tm=new N,Lm=new We,id=new Ms,ml=new ws;class Nd extends lt{constructor(e=new ft,t=new Oo){super(),this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,r=[0];for(let s=1,l=t.count;s<l;s++)bm.fromBufferAttribute(t,s-1),Tm.fromBufferAttribute(t,s),r[s]=r[s-1],r[s]+=bm.distanceTo(Tm);e.setAttribute("lineDistance",new Vt(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(e,t){const r=this.geometry,s=this.matrixWorld,l=e.params.Line.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),ml.copy(r.boundingSphere),ml.applyMatrix4(s),ml.radius+=l,e.ray.intersectsSphere(ml)===!1)return;Lm.copy(s).invert(),id.copy(e.ray).applyMatrix4(Lm);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=d*d,f=new N,m=new N,v=new N,y=new N,x=this.isLineSegments?2:1;if(r.isBufferGeometry){const w=r.index,b=r.attributes.position;if(w!==null){const M=Math.max(0,c.start),_=Math.min(w.count,c.start+c.count);for(let I=M,U=_-1;I<U;I+=x){const z=w.getX(I),T=w.getX(I+1);if(f.fromBufferAttribute(b,z),m.fromBufferAttribute(b,T),id.distanceSqToSegment(f,m,y,v)>h)continue;y.applyMatrix4(this.matrixWorld);const ee=e.ray.origin.distanceTo(y);ee<e.near||ee>e.far||t.push({distance:ee,point:v.clone().applyMatrix4(this.matrixWorld),index:I,face:null,faceIndex:null,object:this})}}else{const M=Math.max(0,c.start),_=Math.min(b.count,c.start+c.count);for(let I=M,U=_-1;I<U;I+=x){if(f.fromBufferAttribute(b,I),m.fromBufferAttribute(b,I+1),id.distanceSqToSegment(f,m,y,v)>h)continue;y.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(y);T<e.near||T>e.far||t.push({distance:T,point:v.clone().applyMatrix4(this.matrixWorld),index:I,face:null,faceIndex:null,object:this})}}}else r.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,r=Object.keys(t);if(r.length>0){const s=t[r[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=s.length;l<c;l++){const d=s[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}Nd.prototype.isLine=!0;const Am=new N,Cm=new N;class Dd extends Nd{constructor(e,t){super(e,t),this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,r=[];for(let s=0,l=t.count;s<l;s+=2)Am.fromBufferAttribute(t,s),Cm.fromBufferAttribute(t,s+1),r[s]=s===0?0:r[s-1],r[s+1]=r[s]+Am.distanceTo(Cm);e.setAttribute("lineDistance",new Vt(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}}Dd.prototype.isLineSegments=!0;class $S extends Nd{constructor(e,t){super(e,t),this.type="LineLoop"}}$S.prototype.isLineLoop=!0;class Id extends Gt{constructor(e){super(),this.type="PointsMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.morphTargets=e.morphTargets,this}}Id.prototype.isPointsMaterial=!0;const Rm=new We,md=new Ms,gl=new ws,vl=new N;class _g extends lt{constructor(e=new ft,t=new Id){super(),this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,s=this.matrixWorld,l=e.params.Points.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),gl.copy(r.boundingSphere),gl.applyMatrix4(s),gl.radius+=l,e.ray.intersectsSphere(gl)===!1)return;Rm.copy(s).invert(),md.copy(e.ray).applyMatrix4(Rm);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=d*d;if(r.isBufferGeometry){const f=r.index,v=r.attributes.position;if(f!==null){const y=Math.max(0,c.start),x=Math.min(f.count,c.start+c.count);for(let w=y,E=x;w<E;w++){const b=f.getX(w);vl.fromBufferAttribute(v,b),Pm(vl,b,h,s,e,t,this)}}else{const y=Math.max(0,c.start),x=Math.min(v.count,c.start+c.count);for(let w=y,E=x;w<E;w++)vl.fromBufferAttribute(v,w),Pm(vl,w,h,s,e,t,this)}}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,r=Object.keys(t);if(r.length>0){const s=t[r[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=s.length;l<c;l++){const d=s[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}_g.prototype.isPoints=!0;function Pm(o,e,t,r,s,l,c){const d=md.distanceSqToPoint(o);if(d<t){const h=new N;md.closestPointToPoint(o,h),h.applyMatrix4(r);const f=s.ray.origin.distanceTo(h);if(f<s.near||f>s.far)return;l.push({distance:f,distanceToRay:Math.sqrt(d),point:h,index:e,face:null,object:c})}}class KS extends Yt{constructor(e,t,r,s,l,c,d,h,f){super(e,t,r,s,l,c,d,h,f),this.format=d!==void 0?d:yr,this.minFilter=c!==void 0?c:Rn,this.magFilter=l!==void 0?l:Rn,this.generateMipmaps=!1;const m=this;function v(){m.needsUpdate=!0,e.requestVideoFrameCallback(v)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(v)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}KS.prototype.isVideoTexture=!0;class e1 extends Yt{constructor(e,t,r,s,l,c,d,h,f,m,v,y){super(null,c,d,h,f,m,s,l,v,y),this.image={width:t,height:r},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}e1.prototype.isCompressedTexture=!0;class t1 extends Yt{constructor(e,t,r,s,l,c,d,h,f){super(e,t,r,s,l,c,d,h,f),this.needsUpdate=!0}}t1.prototype.isCanvasTexture=!0;class n1 extends Yt{constructor(e,t,r,s,l,c,d,h,f,m){if(m=m!==void 0?m:gs,m!==gs&&m!==No)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&m===gs&&(r=bl),r===void 0&&m===No&&(r=Co),super(null,s,l,c,d,h,m,r,f),this.image={width:e,height:t},this.magFilter=d!==void 0?d:on,this.minFilter=h!==void 0?h:on,this.flipY=!1,this.generateMipmaps=!1}}n1.prototype.isDepthTexture=!0;const i1={triangulate:function(o,e,t){t=t||2;const r=e&&e.length,s=r?e[0]*t:o.length;let l=wg(o,0,s,t,!0);const c=[];if(!l||l.next===l.prev)return c;let d,h,f,m,v,y,x;if(r&&(l=l1(o,e,l,t)),o.length>80*t){d=f=o[0],h=m=o[1];for(let w=t;w<s;w+=t)v=o[w],y=o[w+1],v<d&&(d=v),y<h&&(h=y),v>f&&(f=v),y>m&&(m=y);x=Math.max(f-d,m-h),x=x!==0?1/x:0}return ko(l,c,t,d,h,x),c}};function wg(o,e,t,r,s){let l,c;if(s===x1(o,e,t,r)>0)for(l=e;l<t;l+=r)c=Nm(l,o[l],o[l+1],c);else for(l=t-r;l>=e;l-=r)c=Nm(l,o[l],o[l+1],c);return c&&Bl(c,c.next)&&(zo(c),c=c.next),c}function tr(o,e){if(!o)return o;e||(e=o);let t=o,r;do if(r=!1,!t.steiner&&(Bl(t,t.next)||bt(t.prev,t,t.next)===0)){if(zo(t),t=e=t.prev,t===t.next)break;r=!0}else t=t.next;while(r||t!==e);return e}function ko(o,e,t,r,s,l,c){if(!o)return;!c&&l&&f1(o,r,s,l);let d=o,h,f;for(;o.prev!==o.next;){if(h=o.prev,f=o.next,l?s1(o,r,s,l):r1(o)){e.push(h.i/t),e.push(o.i/t),e.push(f.i/t),zo(o),o=f.next,d=f.next;continue}if(o=f,o===d){c?c===1?(o=o1(tr(o),e,t),ko(o,e,t,r,s,l,2)):c===2&&a1(o,e,t,r,s,l):ko(tr(o),e,t,r,s,l,1);break}}}function r1(o){const e=o.prev,t=o,r=o.next;if(bt(e,t,r)>=0)return!1;let s=o.next.next;for(;s!==o.prev;){if(ms(e.x,e.y,t.x,t.y,r.x,r.y,s.x,s.y)&&bt(s.prev,s,s.next)>=0)return!1;s=s.next}return!0}function s1(o,e,t,r){const s=o.prev,l=o,c=o.next;if(bt(s,l,c)>=0)return!1;const d=s.x<l.x?s.x<c.x?s.x:c.x:l.x<c.x?l.x:c.x,h=s.y<l.y?s.y<c.y?s.y:c.y:l.y<c.y?l.y:c.y,f=s.x>l.x?s.x>c.x?s.x:c.x:l.x>c.x?l.x:c.x,m=s.y>l.y?s.y>c.y?s.y:c.y:l.y>c.y?l.y:c.y,v=gd(d,h,e,t,r),y=gd(f,m,e,t,r);let x=o.prevZ,w=o.nextZ;for(;x&&x.z>=v&&w&&w.z<=y;){if(x!==o.prev&&x!==o.next&&ms(s.x,s.y,l.x,l.y,c.x,c.y,x.x,x.y)&&bt(x.prev,x,x.next)>=0||(x=x.prevZ,w!==o.prev&&w!==o.next&&ms(s.x,s.y,l.x,l.y,c.x,c.y,w.x,w.y)&&bt(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;x&&x.z>=v;){if(x!==o.prev&&x!==o.next&&ms(s.x,s.y,l.x,l.y,c.x,c.y,x.x,x.y)&&bt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;w&&w.z<=y;){if(w!==o.prev&&w!==o.next&&ms(s.x,s.y,l.x,l.y,c.x,c.y,w.x,w.y)&&bt(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function o1(o,e,t){let r=o;do{const s=r.prev,l=r.next.next;!Bl(s,l)&&Mg(s,r,r.next,l)&&Fo(s,l)&&Fo(l,s)&&(e.push(s.i/t),e.push(r.i/t),e.push(l.i/t),zo(r),zo(r.next),r=o=l),r=r.next}while(r!==o);return tr(r)}function a1(o,e,t,r,s,l){let c=o;do{let d=c.next.next;for(;d!==c.prev;){if(c.i!==d.i&&g1(c,d)){let h=Sg(c,d);c=tr(c,c.next),h=tr(h,h.next),ko(c,e,t,r,s,l),ko(h,e,t,r,s,l);return}d=d.next}c=c.next}while(c!==o)}function l1(o,e,t,r){const s=[];let l,c,d,h,f;for(l=0,c=e.length;l<c;l++)d=e[l]*r,h=l<c-1?e[l+1]*r:o.length,f=wg(o,d,h,r,!1),f===f.next&&(f.steiner=!0),s.push(m1(f));for(s.sort(c1),l=0;l<s.length;l++)u1(s[l],t),t=tr(t,t.next);return t}function c1(o,e){return o.x-e.x}function u1(o,e){if(e=d1(o,e),e){const t=Sg(e,o);tr(e,e.next),tr(t,t.next)}}function d1(o,e){let t=e;const r=o.x,s=o.y;let l=-1/0,c;do{if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const y=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(y<=r&&y>l){if(l=y,y===r){if(s===t.y)return t;if(s===t.next.y)return t.next}c=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!c)return null;if(r===l)return c;const d=c,h=c.x,f=c.y;let m=1/0,v;t=c;do r>=t.x&&t.x>=h&&r!==t.x&&ms(s<f?r:l,s,h,f,s<f?l:r,s,t.x,t.y)&&(v=Math.abs(s-t.y)/(r-t.x),Fo(t,o)&&(v<m||v===m&&(t.x>c.x||t.x===c.x&&h1(c,t)))&&(c=t,m=v)),t=t.next;while(t!==d);return c}function h1(o,e){return bt(o.prev,o,e.prev)<0&&bt(e.next,o,o.next)<0}function f1(o,e,t,r){let s=o;do s.z===null&&(s.z=gd(s.x,s.y,e,t,r)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==o);s.prevZ.nextZ=null,s.prevZ=null,p1(s)}function p1(o){let e,t,r,s,l,c,d,h,f=1;do{for(t=o,o=null,l=null,c=0;t;){for(c++,r=t,d=0,e=0;e<f&&(d++,r=r.nextZ,!!r);e++);for(h=f;d>0||h>0&&r;)d!==0&&(h===0||!r||t.z<=r.z)?(s=t,t=t.nextZ,d--):(s=r,r=r.nextZ,h--),l?l.nextZ=s:o=s,s.prevZ=l,l=s;t=r}l.nextZ=null,f*=2}while(c>1);return o}function gd(o,e,t,r,s){return o=32767*(o-t)*s,e=32767*(e-r)*s,o=(o|o<<8)&16711935,o=(o|o<<4)&252645135,o=(o|o<<2)&858993459,o=(o|o<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,o|e<<1}function m1(o){let e=o,t=o;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==o);return t}function ms(o,e,t,r,s,l,c,d){return(s-c)*(e-d)-(o-c)*(l-d)>=0&&(o-c)*(r-d)-(t-c)*(e-d)>=0&&(t-c)*(l-d)-(s-c)*(r-d)>=0}function g1(o,e){return o.next.i!==e.i&&o.prev.i!==e.i&&!v1(o,e)&&(Fo(o,e)&&Fo(e,o)&&y1(o,e)&&(bt(o.prev,o,e.prev)||bt(o,e.prev,e))||Bl(o,e)&&bt(o.prev,o,o.next)>0&&bt(e.prev,e,e.next)>0)}function bt(o,e,t){return(e.y-o.y)*(t.x-e.x)-(e.x-o.x)*(t.y-e.y)}function Bl(o,e){return o.x===e.x&&o.y===e.y}function Mg(o,e,t,r){const s=xl(bt(o,e,t)),l=xl(bt(o,e,r)),c=xl(bt(t,r,o)),d=xl(bt(t,r,e));return!!(s!==l&&c!==d||s===0&&yl(o,t,e)||l===0&&yl(o,r,e)||c===0&&yl(t,o,r)||d===0&&yl(t,e,r))}function yl(o,e,t){return e.x<=Math.max(o.x,t.x)&&e.x>=Math.min(o.x,t.x)&&e.y<=Math.max(o.y,t.y)&&e.y>=Math.min(o.y,t.y)}function xl(o){return o>0?1:o<0?-1:0}function v1(o,e){let t=o;do{if(t.i!==o.i&&t.next.i!==o.i&&t.i!==e.i&&t.next.i!==e.i&&Mg(t,t.next,o,e))return!0;t=t.next}while(t!==o);return!1}function Fo(o,e){return bt(o.prev,o,o.next)<0?bt(o,e,o.next)>=0&&bt(o,o.prev,e)>=0:bt(o,e,o.prev)<0||bt(o,o.next,e)<0}function y1(o,e){let t=o,r=!1;const s=(o.x+e.x)/2,l=(o.y+e.y)/2;do t.y>l!=t.next.y>l&&t.next.y!==t.y&&s<(t.next.x-t.x)*(l-t.y)/(t.next.y-t.y)+t.x&&(r=!r),t=t.next;while(t!==o);return r}function Sg(o,e){const t=new vd(o.i,o.x,o.y),r=new vd(e.i,e.x,e.y),s=o.next,l=e.prev;return o.next=e,e.prev=o,t.next=s,s.prev=t,r.next=t,t.prev=r,l.next=r,r.prev=l,r}function Nm(o,e,t,r){const s=new vd(o,e,t);return r?(s.next=r.next,s.prev=r,r.next.prev=s,r.next=s):(s.prev=s,s.next=s),s}function zo(o){o.next.prev=o.prev,o.prev.next=o.next,o.prevZ&&(o.prevZ.nextZ=o.nextZ),o.nextZ&&(o.nextZ.prevZ=o.prevZ)}function vd(o,e,t){this.i=o,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function x1(o,e,t,r){let s=0;for(let l=e,c=t-r;l<t;l+=r)s+=(o[c]-o[l])*(o[l+1]+o[c+1]),c=l;return s}class er{static area(e){const t=e.length;let r=0;for(let s=t-1,l=0;l<t;s=l++)r+=e[s].x*e[l].y-e[l].x*e[s].y;return r*.5}static isClockWise(e){return er.area(e)<0}static triangulateShape(e,t){const r=[],s=[],l=[];Dm(e),Im(r,e);let c=e.length;t.forEach(Dm);for(let h=0;h<t.length;h++)s.push(c),c+=t[h].length,Im(r,t[h]);const d=i1.triangulate(r,s);for(let h=0;h<d.length;h+=3)l.push(d.slice(h,h+3));return l}}function Dm(o){const e=o.length;e>2&&o[e-1].equals(o[0])&&o.pop()}function Im(o,e){for(let t=0;t<e.length;t++)o.push(e[t].x),o.push(e[t].y)}class Ol extends ft{constructor(e,t){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const r=this,s=[],l=[];for(let d=0,h=e.length;d<h;d++){const f=e[d];c(f)}this.setAttribute("position",new Vt(s,3)),this.setAttribute("uv",new Vt(l,2)),this.computeVertexNormals();function c(d){const h=[],f=t.curveSegments!==void 0?t.curveSegments:12,m=t.steps!==void 0?t.steps:1;let v=t.depth!==void 0?t.depth:100,y=t.bevelEnabled!==void 0?t.bevelEnabled:!0,x=t.bevelThickness!==void 0?t.bevelThickness:6,w=t.bevelSize!==void 0?t.bevelSize:x-2,E=t.bevelOffset!==void 0?t.bevelOffset:0,b=t.bevelSegments!==void 0?t.bevelSegments:3;const M=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:_1;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),v=t.amount);let I,U=!1,z,T,W,ee;M&&(I=M.getSpacedPoints(m),U=!0,y=!1,z=M.computeFrenetFrames(m,!1),T=new N,W=new N,ee=new N),y||(b=0,x=0,w=0,E=0);const ne=d.extractPoints(f);let oe=ne.shape;const he=ne.holes;if(!er.isClockWise(oe)){oe=oe.reverse();for(let me=0,ye=he.length;me<ye;me++){const Me=he[me];er.isClockWise(Me)&&(he[me]=Me.reverse())}}const F=er.triangulateShape(oe,he),V=oe;for(let me=0,ye=he.length;me<ye;me++){const Me=he[me];oe=oe.concat(Me)}function G(me,ye,Me){return ye||console.error("THREE.ExtrudeGeometry: vec does not exist"),ye.clone().multiplyScalar(Me).add(me)}const B=oe.length,se=F.length;function Y(me,ye,Me){let Fe,Te,P;const A=me.x-ye.x,ae=me.y-ye.y,le=Me.x-me.x,Se=Me.y-me.y,Ie=A*A+ae*ae,nt=A*Se-ae*le;if(Math.abs(nt)>Number.EPSILON){const Xe=Math.sqrt(Ie),O=Math.sqrt(le*le+Se*Se),ve=ye.x-ae/Xe,_e=ye.y+A/Xe,Be=Me.x-Se/O,ue=Me.y+le/O,Ve=((Be-ve)*Se-(ue-_e)*le)/(A*Se-ae*le);Fe=ve+A*Ve-me.x,Te=_e+ae*Ve-me.y;const it=Fe*Fe+Te*Te;if(it<=2)return new xe(Fe,Te);P=Math.sqrt(it/2)}else{let Xe=!1;A>Number.EPSILON?le>Number.EPSILON&&(Xe=!0):A<-Number.EPSILON?le<-Number.EPSILON&&(Xe=!0):Math.sign(ae)===Math.sign(Se)&&(Xe=!0),Xe?(Fe=-ae,Te=A,P=Math.sqrt(Ie)):(Fe=A,Te=ae,P=Math.sqrt(Ie/2))}return new xe(Fe/P,Te/P)}const K=[];for(let me=0,ye=V.length,Me=ye-1,Fe=me+1;me<ye;me++,Me++,Fe++)Me===ye&&(Me=0),Fe===ye&&(Fe=0),K[me]=Y(V[me],V[Me],V[Fe]);const te=[];let R,q=K.concat();for(let me=0,ye=he.length;me<ye;me++){const Me=he[me];R=[];for(let Fe=0,Te=Me.length,P=Te-1,A=Fe+1;Fe<Te;Fe++,P++,A++)P===Te&&(P=0),A===Te&&(A=0),R[Fe]=Y(Me[Fe],Me[P],Me[A]);te.push(R),q=q.concat(R)}for(let me=0;me<b;me++){const ye=me/b,Me=x*Math.cos(ye*Math.PI/2),Fe=w*Math.sin(ye*Math.PI/2)+E;for(let Te=0,P=V.length;Te<P;Te++){const A=G(V[Te],K[Te],Fe);Le(A.x,A.y,-Me)}for(let Te=0,P=he.length;Te<P;Te++){const A=he[Te];R=te[Te];for(let ae=0,le=A.length;ae<le;ae++){const Se=G(A[ae],R[ae],Fe);Le(Se.x,Se.y,-Me)}}}const ge=w+E;for(let me=0;me<B;me++){const ye=y?G(oe[me],q[me],ge):oe[me];U?(W.copy(z.normals[0]).multiplyScalar(ye.x),T.copy(z.binormals[0]).multiplyScalar(ye.y),ee.copy(I[0]).add(W).add(T),Le(ee.x,ee.y,ee.z)):Le(ye.x,ye.y,0)}for(let me=1;me<=m;me++)for(let ye=0;ye<B;ye++){const Me=y?G(oe[ye],q[ye],ge):oe[ye];U?(W.copy(z.normals[me]).multiplyScalar(Me.x),T.copy(z.binormals[me]).multiplyScalar(Me.y),ee.copy(I[me]).add(W).add(T),Le(ee.x,ee.y,ee.z)):Le(Me.x,Me.y,v/m*me)}for(let me=b-1;me>=0;me--){const ye=me/b,Me=x*Math.cos(ye*Math.PI/2),Fe=w*Math.sin(ye*Math.PI/2)+E;for(let Te=0,P=V.length;Te<P;Te++){const A=G(V[Te],K[Te],Fe);Le(A.x,A.y,v+Me)}for(let Te=0,P=he.length;Te<P;Te++){const A=he[Te];R=te[Te];for(let ae=0,le=A.length;ae<le;ae++){const Se=G(A[ae],R[ae],Fe);U?Le(Se.x,Se.y+I[m-1].y,I[m-1].x+Me):Le(Se.x,Se.y,v+Me)}}}Z(),De();function Z(){const me=s.length/3;if(y){let ye=0,Me=B*ye;for(let Fe=0;Fe<se;Fe++){const Te=F[Fe];we(Te[2]+Me,Te[1]+Me,Te[0]+Me)}ye=m+b*2,Me=B*ye;for(let Fe=0;Fe<se;Fe++){const Te=F[Fe];we(Te[0]+Me,Te[1]+Me,Te[2]+Me)}}else{for(let ye=0;ye<se;ye++){const Me=F[ye];we(Me[2],Me[1],Me[0])}for(let ye=0;ye<se;ye++){const Me=F[ye];we(Me[0]+B*m,Me[1]+B*m,Me[2]+B*m)}}r.addGroup(me,s.length/3-me,0)}function De(){const me=s.length/3;let ye=0;Ce(V,ye),ye+=V.length;for(let Me=0,Fe=he.length;Me<Fe;Me++){const Te=he[Me];Ce(Te,ye),ye+=Te.length}r.addGroup(me,s.length/3-me,1)}function Ce(me,ye){let Me=me.length;for(;--Me>=0;){const Fe=Me;let Te=Me-1;Te<0&&(Te=me.length-1);for(let P=0,A=m+b*2;P<A;P++){const ae=B*P,le=B*(P+1),Se=ye+Fe+ae,Ie=ye+Te+ae,nt=ye+Te+le,Xe=ye+Fe+le;ze(Se,Ie,nt,Xe)}}}function Le(me,ye,Me){h.push(me),h.push(ye),h.push(Me)}function we(me,ye,Me){Oe(me),Oe(ye),Oe(Me);const Fe=s.length/3,Te=_.generateTopUV(r,s,Fe-3,Fe-2,Fe-1);Qe(Te[0]),Qe(Te[1]),Qe(Te[2])}function ze(me,ye,Me,Fe){Oe(me),Oe(ye),Oe(Fe),Oe(ye),Oe(Me),Oe(Fe);const Te=s.length/3,P=_.generateSideWallUV(r,s,Te-6,Te-3,Te-2,Te-1);Qe(P[0]),Qe(P[1]),Qe(P[3]),Qe(P[1]),Qe(P[2]),Qe(P[3])}function Oe(me){s.push(h[me*3+0]),s.push(h[me*3+1]),s.push(h[me*3+2])}function Qe(me){l.push(me.x),l.push(me.y)}}}toJSON(){const e=ft.prototype.toJSON.call(this),t=this.parameters.shapes,r=this.parameters.options;return w1(t,r,e)}}const _1={generateTopUV:function(o,e,t,r,s){const l=e[t*3],c=e[t*3+1],d=e[r*3],h=e[r*3+1],f=e[s*3],m=e[s*3+1];return[new xe(l,c),new xe(d,h),new xe(f,m)]},generateSideWallUV:function(o,e,t,r,s,l){const c=e[t*3],d=e[t*3+1],h=e[t*3+2],f=e[r*3],m=e[r*3+1],v=e[r*3+2],y=e[s*3],x=e[s*3+1],w=e[s*3+2],E=e[l*3],b=e[l*3+1],M=e[l*3+2];return Math.abs(d-m)<.01?[new xe(c,1-h),new xe(f,1-v),new xe(y,1-w),new xe(E,1-M)]:[new xe(d,1-h),new xe(m,1-v),new xe(x,1-w),new xe(b,1-M)]}};function w1(o,e,t){if(t.shapes=[],Array.isArray(o))for(let r=0,s=o.length;r<s;r++){const l=o[r];t.shapes.push(l.uuid)}else t.shapes.push(o.uuid);return e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class M1 extends ft{constructor(e,t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const r=[],s=[],l=[],c=[];let d=0,h=0;if(Array.isArray(e)===!1)f(e);else for(let m=0;m<e.length;m++)f(e[m]),this.addGroup(d,h,m),d+=h,h=0;this.setIndex(r),this.setAttribute("position",new Vt(s,3)),this.setAttribute("normal",new Vt(l,3)),this.setAttribute("uv",new Vt(c,2));function f(m){const v=s.length/3,y=m.extractPoints(t);let x=y.shape;const w=y.holes;er.isClockWise(x)===!1&&(x=x.reverse());for(let b=0,M=w.length;b<M;b++){const _=w[b];er.isClockWise(_)===!0&&(w[b]=_.reverse())}const E=er.triangulateShape(x,w);for(let b=0,M=w.length;b<M;b++){const _=w[b];x=x.concat(_)}for(let b=0,M=x.length;b<M;b++){const _=x[b];s.push(_.x,_.y,0),l.push(0,0,1),c.push(_.x,_.y)}for(let b=0,M=E.length;b<M;b++){const _=E[b],I=_[0]+v,U=_[1]+v,z=_[2]+v;r.push(I,U,z),h+=3}}}toJSON(){const e=ft.prototype.toJSON.call(this),t=this.parameters.shapes;return S1(t,e)}}function S1(o,e){if(e.shapes=[],Array.isArray(o))for(let t=0,r=o.length;t<r;t++){const s=o[t];e.shapes.push(s.uuid)}else e.shapes.push(o.uuid);return e}class E1 extends Gt{constructor(e){super(),this.type="ShadowMaterial",this.color=new Ge(0),this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this}}E1.prototype.isShadowMaterial=!0;class b1 extends _r{constructor(e){super(e),this.type="RawShaderMaterial"}}b1.prototype.isRawShaderMaterial=!0;class Eg extends Gt{constructor(e){super(),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xs,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.vertexTangents=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this.vertexTangents=e.vertexTangents,this}}Eg.prototype.isMeshStandardMaterial=!0;class T1 extends Eg{constructor(e){super(),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoat=0,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new xe(1,1),this.clearcoatNormalMap=null,this.reflectivity=.5,Object.defineProperty(this,"ior",{get:function(){return(1+.4*this.reflectivity)/(1-.4*this.reflectivity)},set:function(t){this.reflectivity=Sn(2.5*(t-1)/(t+1),0,1)}}),this.sheen=null,this.transmission=0,this.transmissionMap=null,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.reflectivity=e.reflectivity,e.sheen?this.sheen=(this.sheen||new Ge).copy(e.sheen):this.sheen=null,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this}}T1.prototype.isMeshPhysicalMaterial=!0;class L1 extends Gt{constructor(e){super(),this.type="MeshPhongMaterial",this.color=new Ge(16777215),this.specular=new Ge(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xs,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=kl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this}}L1.prototype.isMeshPhongMaterial=!0;class A1 extends Gt{constructor(e){super(),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ge(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xs,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this}}A1.prototype.isMeshToonMaterial=!0;class C1 extends Gt{constructor(e){super(),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xs,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this}}C1.prototype.isMeshNormalMaterial=!0;class R1 extends Gt{constructor(e){super(),this.type="MeshLambertMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=kl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this}}R1.prototype.isMeshLambertMaterial=!0;class P1 extends Gt{constructor(e){super(),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Ge(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xs,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this}}P1.prototype.isMeshMatcapMaterial=!0;class N1 extends Oo{constructor(e){super(),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}N1.prototype.isLineDashedMaterial=!0;const _t={arraySlice:function(o,e,t){return _t.isTypedArray(o)?new o.constructor(o.subarray(e,t!==void 0?t:o.length)):o.slice(e,t)},convertArray:function(o,e,t){return!o||!t&&o.constructor===e?o:typeof e.BYTES_PER_ELEMENT=="number"?new e(o):Array.prototype.slice.call(o)},isTypedArray:function(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)},getKeyframeOrder:function(o){function e(s,l){return o[s]-o[l]}const t=o.length,r=new Array(t);for(let s=0;s!==t;++s)r[s]=s;return r.sort(e),r},sortedArray:function(o,e,t){const r=o.length,s=new o.constructor(r);for(let l=0,c=0;c!==r;++l){const d=t[l]*e;for(let h=0;h!==e;++h)s[c++]=o[d+h]}return s},flattenJSON:function(o,e,t,r){let s=1,l=o[0];for(;l!==void 0&&l[r]===void 0;)l=o[s++];if(l===void 0)return;let c=l[r];if(c!==void 0)if(Array.isArray(c))do c=l[r],c!==void 0&&(e.push(l.time),t.push.apply(t,c)),l=o[s++];while(l!==void 0);else if(c.toArray!==void 0)do c=l[r],c!==void 0&&(e.push(l.time),c.toArray(t,t.length)),l=o[s++];while(l!==void 0);else do c=l[r],c!==void 0&&(e.push(l.time),t.push(c)),l=o[s++];while(l!==void 0)},subclip:function(o,e,t,r,s=30){const l=o.clone();l.name=e;const c=[];for(let h=0;h<l.tracks.length;++h){const f=l.tracks[h],m=f.getValueSize(),v=[],y=[];for(let x=0;x<f.times.length;++x){const w=f.times[x]*s;if(!(w<t||w>=r)){v.push(f.times[x]);for(let E=0;E<m;++E)y.push(f.values[x*m+E])}}v.length!==0&&(f.times=_t.convertArray(v,f.times.constructor),f.values=_t.convertArray(y,f.values.constructor),c.push(f))}l.tracks=c;let d=1/0;for(let h=0;h<l.tracks.length;++h)d>l.tracks[h].times[0]&&(d=l.tracks[h].times[0]);for(let h=0;h<l.tracks.length;++h)l.tracks[h].shift(-1*d);return l.resetDuration(),l},makeClipAdditive:function(o,e=0,t=o,r=30){r<=0&&(r=30);const s=t.tracks.length,l=e/r;for(let c=0;c<s;++c){const d=t.tracks[c],h=d.ValueTypeName;if(h==="bool"||h==="string")continue;const f=o.tracks.find(function(M){return M.name===d.name&&M.ValueTypeName===h});if(f===void 0)continue;let m=0;const v=d.getValueSize();d.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(m=v/3);let y=0;const x=f.getValueSize();f.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(y=x/3);const w=d.times.length-1;let E;if(l<=d.times[0]){const M=m,_=v-m;E=_t.arraySlice(d.values,M,_)}else if(l>=d.times[w]){const M=w*v+m,_=M+v-m;E=_t.arraySlice(d.values,M,_)}else{const M=d.createInterpolant(),_=m,I=v-m;M.evaluate(l),E=_t.arraySlice(M.resultBuffer,_,I)}h==="quaternion"&&new an().fromArray(E).normalize().conjugate().toArray(E);const b=f.times.length;for(let M=0;M<b;++M){const _=M*x+y;if(h==="quaternion")an.multiplyQuaternionsFlat(f.values,_,E,0,f.values,_);else{const I=x-y*2;for(let U=0;U<I;++U)f.values[_+U]-=E[U]}}}return o.blendMode=Zm,o}};class nr{constructor(e,t,r,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(r),this.sampleValues=t,this.valueSize=r,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let r=this._cachedIndex,s=t[r],l=t[r-1];e:{t:{let c;n:{i:if(!(e<s)){for(let d=r+2;;){if(s===void 0){if(e<l)break i;return r=t.length,this._cachedIndex=r,this.afterEnd_(r-1,e,l)}if(r===d)break;if(l=s,s=t[++r],e<s)break t}c=t.length;break n}if(!(e>=l)){const d=t[1];e<d&&(r=2,l=d);for(let h=r-2;;){if(l===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,s);if(r===h)break;if(s=l,l=t[--r-1],e>=l)break t}c=r,r=0;break n}break e}for(;r<c;){const d=r+c>>>1;e<t[d]?c=d:r=d+1}if(s=t[r],l=t[r-1],l===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,s);if(s===void 0)return r=t.length,this._cachedIndex=r,this.afterEnd_(r-1,l,e)}this._cachedIndex=r,this.intervalChanged_(r,l,s)}return this.interpolate_(r,l,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,r=this.sampleValues,s=this.valueSize,l=e*s;for(let c=0;c!==s;++c)t[c]=r[l+c];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}nr.prototype.beforeStart_=nr.prototype.copySampleValue_;nr.prototype.afterEnd_=nr.prototype.copySampleValue_;class D1 extends nr{constructor(e,t,r,s){super(e,t,r,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:fs,endingEnd:fs}}intervalChanged_(e,t,r){const s=this.parameterPositions;let l=e-2,c=e+1,d=s[l],h=s[c];if(d===void 0)switch(this.getSettings_().endingStart){case ps:l=e,d=2*t-r;break;case Cl:l=s.length-2,d=t+s[l]-s[l+1];break;default:l=e,d=r}if(h===void 0)switch(this.getSettings_().endingEnd){case ps:c=e,h=2*r-t;break;case Cl:c=1,h=r+s[1]-s[0];break;default:c=e-1,h=t}const f=(r-t)*.5,m=this.valueSize;this._weightPrev=f/(t-d),this._weightNext=f/(h-r),this._offsetPrev=l*m,this._offsetNext=c*m}interpolate_(e,t,r,s){const l=this.resultBuffer,c=this.sampleValues,d=this.valueSize,h=e*d,f=h-d,m=this._offsetPrev,v=this._offsetNext,y=this._weightPrev,x=this._weightNext,w=(r-t)/(s-t),E=w*w,b=E*w,M=-y*b+2*y*E-y*w,_=(1+y)*b+(-1.5-2*y)*E+(-.5+y)*w+1,I=(-1-x)*b+(1.5+x)*E+.5*w,U=x*b-x*E;for(let z=0;z!==d;++z)l[z]=M*c[m+z]+_*c[f+z]+I*c[h+z]+U*c[v+z];return l}}class bg extends nr{constructor(e,t,r,s){super(e,t,r,s)}interpolate_(e,t,r,s){const l=this.resultBuffer,c=this.sampleValues,d=this.valueSize,h=e*d,f=h-d,m=(r-t)/(s-t),v=1-m;for(let y=0;y!==d;++y)l[y]=c[f+y]*v+c[h+y]*m;return l}}class I1 extends nr{constructor(e,t,r,s){super(e,t,r,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class li{constructor(e,t,r,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=_t.convertArray(t,this.TimeBufferType),this.values=_t.convertArray(r,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let r;if(t.toJSON!==this.toJSON)r=t.toJSON(e);else{r={name:e.name,times:_t.convertArray(e.times,Array),values:_t.convertArray(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(r.interpolation=s)}return r.type=e.ValueTypeName,r}InterpolantFactoryMethodDiscrete(e){return new I1(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new bg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new D1(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ll:t=this.InterpolantFactoryMethodDiscrete;break;case Al:t=this.InterpolantFactoryMethodLinear;break;case Lu:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const r="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(r);return console.warn("THREE.KeyframeTrack:",r),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ll;case this.InterpolantFactoryMethodLinear:return Al;case this.InterpolantFactoryMethodSmooth:return Lu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let r=0,s=t.length;r!==s;++r)t[r]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let r=0,s=t.length;r!==s;++r)t[r]*=e}return this}trim(e,t){const r=this.times,s=r.length;let l=0,c=s-1;for(;l!==s&&r[l]<e;)++l;for(;c!==-1&&r[c]>t;)--c;if(++c,l!==0||c!==s){l>=c&&(c=Math.max(c,1),l=c-1);const d=this.getValueSize();this.times=_t.arraySlice(r,l,c),this.values=_t.arraySlice(this.values,l*d,c*d)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const r=this.times,s=this.values,l=r.length;l===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let c=null;for(let d=0;d!==l;d++){const h=r[d];if(typeof h=="number"&&isNaN(h)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,d,h),e=!1;break}if(c!==null&&c>h){console.error("THREE.KeyframeTrack: Out of order keys.",this,d,h,c),e=!1;break}c=h}if(s!==void 0&&_t.isTypedArray(s))for(let d=0,h=s.length;d!==h;++d){const f=s[d];if(isNaN(f)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,d,f),e=!1;break}}return e}optimize(){const e=_t.arraySlice(this.times),t=_t.arraySlice(this.values),r=this.getValueSize(),s=this.getInterpolation()===Lu,l=e.length-1;let c=1;for(let d=1;d<l;++d){let h=!1;const f=e[d],m=e[d+1];if(f!==m&&(d!==1||f!==e[0]))if(s)h=!0;else{const v=d*r,y=v-r,x=v+r;for(let w=0;w!==r;++w){const E=t[v+w];if(E!==t[y+w]||E!==t[x+w]){h=!0;break}}}if(h){if(d!==c){e[c]=e[d];const v=d*r,y=c*r;for(let x=0;x!==r;++x)t[y+x]=t[v+x]}++c}}if(l>0){e[c]=e[l];for(let d=l*r,h=c*r,f=0;f!==r;++f)t[h+f]=t[d+f];++c}return c!==e.length?(this.times=_t.arraySlice(e,0,c),this.values=_t.arraySlice(t,0,c*r)):(this.times=e,this.values=t),this}clone(){const e=_t.arraySlice(this.times,0),t=_t.arraySlice(this.values,0),r=this.constructor,s=new r(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}li.prototype.TimeBufferType=Float32Array;li.prototype.ValueBufferType=Float32Array;li.prototype.DefaultInterpolation=Al;class bs extends li{}bs.prototype.ValueTypeName="bool";bs.prototype.ValueBufferType=Array;bs.prototype.DefaultInterpolation=Ll;bs.prototype.InterpolantFactoryMethodLinear=void 0;bs.prototype.InterpolantFactoryMethodSmooth=void 0;class Tg extends li{}Tg.prototype.ValueTypeName="color";class Pl extends li{}Pl.prototype.ValueTypeName="number";class k1 extends nr{constructor(e,t,r,s){super(e,t,r,s)}interpolate_(e,t,r,s){const l=this.resultBuffer,c=this.sampleValues,d=this.valueSize,h=(r-t)/(s-t);let f=e*d;for(let m=f+d;f!==m;f+=4)an.slerpFlat(l,0,c,f-d,c,f,h);return l}}class Uo extends li{InterpolantFactoryMethodLinear(e){return new k1(this.times,this.values,this.getValueSize(),e)}}Uo.prototype.ValueTypeName="quaternion";Uo.prototype.DefaultInterpolation=Al;Uo.prototype.InterpolantFactoryMethodSmooth=void 0;class Ts extends li{}Ts.prototype.ValueTypeName="string";Ts.prototype.ValueBufferType=Array;Ts.prototype.DefaultInterpolation=Ll;Ts.prototype.InterpolantFactoryMethodLinear=void 0;Ts.prototype.InterpolantFactoryMethodSmooth=void 0;class Nl extends li{}Nl.prototype.ValueTypeName="vector";class km{constructor(e,t=-1,r,s=Td){this.name=e,this.tracks=r,this.duration=t,this.blendMode=s,this.uuid=oi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],r=e.tracks,s=1/(e.fps||1);for(let c=0,d=r.length;c!==d;++c)t.push(z1(r[c]).scale(s));const l=new this(e.name,e.duration,t,e.blendMode);return l.uuid=e.uuid,l}static toJSON(e){const t=[],r=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let l=0,c=r.length;l!==c;++l)t.push(li.toJSON(r[l]));return s}static CreateFromMorphTargetSequence(e,t,r,s){const l=t.length,c=[];for(let d=0;d<l;d++){let h=[],f=[];h.push((d+l-1)%l,d,(d+1)%l),f.push(0,1,0);const m=_t.getKeyframeOrder(h);h=_t.sortedArray(h,1,m),f=_t.sortedArray(f,1,m),!s&&h[0]===0&&(h.push(l),f.push(f[0])),c.push(new Pl(".morphTargetInfluences["+t[d].name+"]",h,f).scale(1/r))}return new this(e,-1,c)}static findByName(e,t){let r=e;if(!Array.isArray(e)){const s=e;r=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<r.length;s++)if(r[s].name===t)return r[s];return null}static CreateClipsFromMorphTargetSequences(e,t,r){const s={},l=/^([\w-]*?)([\d]+)$/;for(let d=0,h=e.length;d<h;d++){const f=e[d],m=f.name.match(l);if(m&&m.length>1){const v=m[1];let y=s[v];y||(s[v]=y=[]),y.push(f)}}const c=[];for(const d in s)c.push(this.CreateFromMorphTargetSequence(d,s[d],t,r));return c}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const r=function(v,y,x,w,E){if(x.length!==0){const b=[],M=[];_t.flattenJSON(x,b,M,w),b.length!==0&&E.push(new v(y,b,M))}},s=[],l=e.name||"default",c=e.fps||30,d=e.blendMode;let h=e.length||-1;const f=e.hierarchy||[];for(let v=0;v<f.length;v++){const y=f[v].keys;if(!(!y||y.length===0))if(y[0].morphTargets){const x={};let w;for(w=0;w<y.length;w++)if(y[w].morphTargets)for(let E=0;E<y[w].morphTargets.length;E++)x[y[w].morphTargets[E]]=-1;for(const E in x){const b=[],M=[];for(let _=0;_!==y[w].morphTargets.length;++_){const I=y[w];b.push(I.time),M.push(I.morphTarget===E?1:0)}s.push(new Pl(".morphTargetInfluence["+E+"]",b,M))}h=x.length*c}else{const x=".bones["+t[v].name+"]";r(Nl,x+".position",y,"pos",s),r(Uo,x+".quaternion",y,"rot",s),r(Nl,x+".scale",y,"scl",s)}}return s.length===0?null:new this(l,h,s,d)}resetDuration(){const e=this.tracks;let t=0;for(let r=0,s=e.length;r!==s;++r){const l=this.tracks[r];t=Math.max(t,l.times[l.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function F1(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Pl;case"vector":case"vector2":case"vector3":case"vector4":return Nl;case"color":return Tg;case"quaternion":return Uo;case"bool":case"boolean":return bs;case"string":return Ts}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function z1(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=F1(o.type);if(o.times===void 0){const t=[],r=[];_t.flattenJSON(o.keys,t,r,"value"),o.times=t,o.values=r}return e.parse!==void 0?e.parse(o):new e(o.name,o.times,o.values,o.interpolation)}const ys={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class B1{constructor(e,t,r){const s=this;let l=!1,c=0,d=0,h;const f=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this.itemStart=function(m){d++,l===!1&&s.onStart!==void 0&&s.onStart(m,c,d),l=!0},this.itemEnd=function(m){c++,s.onProgress!==void 0&&s.onProgress(m,c,d),c===d&&(l=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(m){s.onError!==void 0&&s.onError(m)},this.resolveURL=function(m){return h?h(m):m},this.setURLModifier=function(m){return h=m,this},this.addHandler=function(m,v){return f.push(m,v),this},this.removeHandler=function(m){const v=f.indexOf(m);return v!==-1&&f.splice(v,2),this},this.getHandler=function(m){for(let v=0,y=f.length;v<y;v+=2){const x=f[v],w=f[v+1];if(x.global&&(x.lastIndex=0),x.test(m))return w}return null}}}const O1=new B1;class ir{constructor(e){this.manager=e!==void 0?e:O1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const r=this;return new Promise(function(s,l){r.load(e,s,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Xn={};class U1 extends ir{constructor(e){super(e)}load(e,t,r,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,c=ys.get(e);if(c!==void 0)return l.manager.itemStart(e),setTimeout(function(){t&&t(c),l.manager.itemEnd(e)},0),c;if(Xn[e]!==void 0){Xn[e].push({onLoad:t,onProgress:r,onError:s});return}const d=/^data:(.*?)(;base64)?,(.*)$/,h=e.match(d);let f;if(h){const m=h[1],v=!!h[2];let y=h[3];y=decodeURIComponent(y),v&&(y=atob(y));try{let x;const w=(this.responseType||"").toLowerCase();switch(w){case"arraybuffer":case"blob":const E=new Uint8Array(y.length);for(let M=0;M<y.length;M++)E[M]=y.charCodeAt(M);w==="blob"?x=new Blob([E.buffer],{type:m}):x=E.buffer;break;case"document":x=new DOMParser().parseFromString(y,m);break;case"json":x=JSON.parse(y);break;default:x=y;break}setTimeout(function(){t&&t(x),l.manager.itemEnd(e)},0)}catch(x){setTimeout(function(){s&&s(x),l.manager.itemError(e),l.manager.itemEnd(e)},0)}}else{Xn[e]=[],Xn[e].push({onLoad:t,onProgress:r,onError:s}),f=new XMLHttpRequest,f.open("GET",e,!0),f.addEventListener("load",function(m){const v=this.response,y=Xn[e];if(delete Xn[e],this.status===200||this.status===0){this.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),ys.add(e,v);for(let x=0,w=y.length;x<w;x++){const E=y[x];E.onLoad&&E.onLoad(v)}l.manager.itemEnd(e)}else{for(let x=0,w=y.length;x<w;x++){const E=y[x];E.onError&&E.onError(m)}l.manager.itemError(e),l.manager.itemEnd(e)}},!1),f.addEventListener("progress",function(m){const v=Xn[e];for(let y=0,x=v.length;y<x;y++){const w=v[y];w.onProgress&&w.onProgress(m)}},!1),f.addEventListener("error",function(m){const v=Xn[e];delete Xn[e];for(let y=0,x=v.length;y<x;y++){const w=v[y];w.onError&&w.onError(m)}l.manager.itemError(e),l.manager.itemEnd(e)},!1),f.addEventListener("abort",function(m){const v=Xn[e];delete Xn[e];for(let y=0,x=v.length;y<x;y++){const w=v[y];w.onError&&w.onError(m)}l.manager.itemError(e),l.manager.itemEnd(e)},!1),this.responseType!==void 0&&(f.responseType=this.responseType),this.withCredentials!==void 0&&(f.withCredentials=this.withCredentials),f.overrideMimeType&&f.overrideMimeType(this.mimeType!==void 0?this.mimeType:"text/plain");for(const m in this.requestHeader)f.setRequestHeader(m,this.requestHeader[m]);f.send(null)}return l.manager.itemStart(e),f}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Lg extends ir{constructor(e){super(e)}load(e,t,r,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,c=ys.get(e);if(c!==void 0)return l.manager.itemStart(e),setTimeout(function(){t&&t(c),l.manager.itemEnd(e)},0),c;const d=document.createElementNS("http://www.w3.org/1999/xhtml","img");function h(){d.removeEventListener("load",h,!1),d.removeEventListener("error",f,!1),ys.add(e,this),t&&t(this),l.manager.itemEnd(e)}function f(m){d.removeEventListener("load",h,!1),d.removeEventListener("error",f,!1),s&&s(m),l.manager.itemError(e),l.manager.itemEnd(e)}return d.addEventListener("load",h,!1),d.addEventListener("error",f,!1),e.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),l.manager.itemStart(e),d.src=e,d}}class H1 extends ir{constructor(e){super(e)}load(e,t,r,s){const l=new Fl,c=new Lg(this.manager);c.setCrossOrigin(this.crossOrigin),c.setPath(this.path);let d=0;function h(f){c.load(e[f],function(m){l.images[f]=m,d++,d===6&&(l.needsUpdate=!0,t&&t(l))},void 0,s)}for(let f=0;f<e.length;++f)h(f);return l}}class V1 extends ir{constructor(e){super(e)}load(e,t,r,s){const l=new Yt,c=new Lg(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(d){l.image=d;const h=e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0;l.format=h?yr:Yn,l.needsUpdate=!0,t!==void 0&&t(l)},r,s),l}}class Pn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,s=this.getPoint(0),l=0;t.push(0);for(let c=1;c<=e;c++)r=this.getPoint(c/e),l+=r.distanceTo(s),t.push(l),s=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const r=this.getLengths();let s=0;const l=r.length;let c;t?c=t:c=e*r[l-1];let d=0,h=l-1,f;for(;d<=h;)if(s=Math.floor(d+(h-d)/2),f=r[s]-c,f<0)d=s+1;else if(f>0)h=s-1;else{h=s;break}if(s=h,r[s]===c)return s/(l-1);const m=r[s],y=r[s+1]-m,x=(c-m)/y;return(s+x)/(l-1)}getTangent(e,t){let s=e-1e-4,l=e+1e-4;s<0&&(s=0),l>1&&(l=1);const c=this.getPoint(s),d=this.getPoint(l),h=t||(c.isVector2?new xe:new N);return h.copy(d).sub(c).normalize(),h}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t){const r=new N,s=[],l=[],c=[],d=new N,h=new We;for(let x=0;x<=e;x++){const w=x/e;s[x]=this.getTangentAt(w,new N),s[x].normalize()}l[0]=new N,c[0]=new N;let f=Number.MAX_VALUE;const m=Math.abs(s[0].x),v=Math.abs(s[0].y),y=Math.abs(s[0].z);m<=f&&(f=m,r.set(1,0,0)),v<=f&&(f=v,r.set(0,1,0)),y<=f&&r.set(0,0,1),d.crossVectors(s[0],r).normalize(),l[0].crossVectors(s[0],d),c[0].crossVectors(s[0],l[0]);for(let x=1;x<=e;x++){if(l[x]=l[x-1].clone(),c[x]=c[x-1].clone(),d.crossVectors(s[x-1],s[x]),d.length()>Number.EPSILON){d.normalize();const w=Math.acos(Sn(s[x-1].dot(s[x]),-1,1));l[x].applyMatrix4(h.makeRotationAxis(d,w))}c[x].crossVectors(s[x],l[x])}if(t===!0){let x=Math.acos(Sn(l[0].dot(l[e]),-1,1));x/=e,s[0].dot(d.crossVectors(l[0],l[e]))>0&&(x=-x);for(let w=1;w<=e;w++)l[w].applyMatrix4(h.makeRotationAxis(s[w],x*w)),c[w].crossVectors(s[w],l[w])}return{tangents:s,normals:l,binormals:c}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ul extends Pn{constructor(e=0,t=0,r=1,s=1,l=0,c=Math.PI*2,d=!1,h=0){super(),this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=s,this.aStartAngle=l,this.aEndAngle=c,this.aClockwise=d,this.aRotation=h}getPoint(e,t){const r=t||new xe,s=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const c=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=s;for(;l>s;)l-=s;l<Number.EPSILON&&(c?l=0:l=s),this.aClockwise===!0&&!c&&(l===s?l=-s:l=l-s);const d=this.aStartAngle+e*l;let h=this.aX+this.xRadius*Math.cos(d),f=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const m=Math.cos(this.aRotation),v=Math.sin(this.aRotation),y=h-this.aX,x=f-this.aY;h=y*m-x*v+this.aX,f=y*v+x*m+this.aY}return r.set(h,f)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}Ul.prototype.isEllipseCurve=!0;class Ag extends Ul{constructor(e,t,r,s,l,c){super(e,t,r,r,s,l,c),this.type="ArcCurve"}}Ag.prototype.isArcCurve=!0;function kd(){let o=0,e=0,t=0,r=0;function s(l,c,d,h){o=l,e=d,t=-3*l+3*c-2*d-h,r=2*l-2*c+d+h}return{initCatmullRom:function(l,c,d,h,f){s(c,d,f*(d-l),f*(h-c))},initNonuniformCatmullRom:function(l,c,d,h,f,m,v){let y=(c-l)/f-(d-l)/(f+m)+(d-c)/m,x=(d-c)/m-(h-c)/(m+v)+(h-d)/v;y*=m,x*=m,s(c,d,y,x)},calc:function(l){const c=l*l,d=c*l;return o+e*l+t*c+r*d}}}const _l=new N,rd=new kd,sd=new kd,od=new kd;class Cg extends Pn{constructor(e=[],t=!1,r="centripetal",s=.5){super(),this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=s}getPoint(e,t=new N){const r=t,s=this.points,l=s.length,c=(l-(this.closed?0:1))*e;let d=Math.floor(c),h=c-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/l)+1)*l:h===0&&d===l-1&&(d=l-2,h=1);let f,m;this.closed||d>0?f=s[(d-1)%l]:(_l.subVectors(s[0],s[1]).add(s[0]),f=_l);const v=s[d%l],y=s[(d+1)%l];if(this.closed||d+2<l?m=s[(d+2)%l]:(_l.subVectors(s[l-1],s[l-2]).add(s[l-1]),m=_l),this.curveType==="centripetal"||this.curveType==="chordal"){const x=this.curveType==="chordal"?.5:.25;let w=Math.pow(f.distanceToSquared(v),x),E=Math.pow(v.distanceToSquared(y),x),b=Math.pow(y.distanceToSquared(m),x);E<1e-4&&(E=1),w<1e-4&&(w=E),b<1e-4&&(b=E),rd.initNonuniformCatmullRom(f.x,v.x,y.x,m.x,w,E,b),sd.initNonuniformCatmullRom(f.y,v.y,y.y,m.y,w,E,b),od.initNonuniformCatmullRom(f.z,v.z,y.z,m.z,w,E,b)}else this.curveType==="catmullrom"&&(rd.initCatmullRom(f.x,v.x,y.x,m.x,this.tension),sd.initCatmullRom(f.y,v.y,y.y,m.y,this.tension),od.initCatmullRom(f.z,v.z,y.z,m.z,this.tension));return r.set(rd.calc(h),sd.calc(h),od.calc(h)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const s=e.points[t];this.points.push(new N().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}Cg.prototype.isCatmullRomCurve3=!0;function Fm(o,e,t,r,s){const l=(r-e)*.5,c=(s-t)*.5,d=o*o,h=o*d;return(2*t-2*r+l+c)*h+(-3*t+3*r-2*l-c)*d+l*o+t}function G1(o,e){const t=1-o;return t*t*e}function W1(o,e){return 2*(1-o)*o*e}function j1(o,e){return o*o*e}function Ro(o,e,t,r){return G1(o,e)+W1(o,t)+j1(o,r)}function X1(o,e){const t=1-o;return t*t*t*e}function q1(o,e){const t=1-o;return 3*t*t*o*e}function Y1(o,e){return 3*(1-o)*o*o*e}function Z1(o,e){return o*o*o*e}function Po(o,e,t,r,s){return X1(o,e)+q1(o,t)+Y1(o,r)+Z1(o,s)}class Fd extends Pn{constructor(e=new xe,t=new xe,r=new xe,s=new xe){super(),this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=s}getPoint(e,t=new xe){const r=t,s=this.v0,l=this.v1,c=this.v2,d=this.v3;return r.set(Po(e,s.x,l.x,c.x,d.x),Po(e,s.y,l.y,c.y,d.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}Fd.prototype.isCubicBezierCurve=!0;class Rg extends Pn{constructor(e=new N,t=new N,r=new N,s=new N){super(),this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=s}getPoint(e,t=new N){const r=t,s=this.v0,l=this.v1,c=this.v2,d=this.v3;return r.set(Po(e,s.x,l.x,c.x,d.x),Po(e,s.y,l.y,c.y,d.y),Po(e,s.z,l.z,c.z,d.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}Rg.prototype.isCubicBezierCurve3=!0;class Hl extends Pn{constructor(e=new xe,t=new xe){super(),this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new xe){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const r=t||new xe;return r.copy(this.v2).sub(this.v1).normalize(),r}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}Hl.prototype.isLineCurve=!0;class J1 extends Pn{constructor(e=new N,t=new N){super(),this.type="LineCurve3",this.isLineCurve3=!0,this.v1=e,this.v2=t}getPoint(e,t=new N){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class zd extends Pn{constructor(e=new xe,t=new xe,r=new xe){super(),this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new xe){const r=t,s=this.v0,l=this.v1,c=this.v2;return r.set(Ro(e,s.x,l.x,c.x),Ro(e,s.y,l.y,c.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}zd.prototype.isQuadraticBezierCurve=!0;class Pg extends Pn{constructor(e=new N,t=new N,r=new N){super(),this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new N){const r=t,s=this.v0,l=this.v1,c=this.v2;return r.set(Ro(e,s.x,l.x,c.x),Ro(e,s.y,l.y,c.y),Ro(e,s.z,l.z,c.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}Pg.prototype.isQuadraticBezierCurve3=!0;class Bd extends Pn{constructor(e=[]){super(),this.type="SplineCurve",this.points=e}getPoint(e,t=new xe){const r=t,s=this.points,l=(s.length-1)*e,c=Math.floor(l),d=l-c,h=s[c===0?c:c-1],f=s[c],m=s[c>s.length-2?s.length-1:c+1],v=s[c>s.length-3?s.length-1:c+2];return r.set(Fm(d,h.x,f.x,m.x,v.x),Fm(d,h.y,f.y,m.y,v.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const s=e.points[t];this.points.push(new xe().fromArray(s))}return this}}Bd.prototype.isSplineCurve=!0;var Q1=Object.freeze({__proto__:null,ArcCurve:Ag,CatmullRomCurve3:Cg,CubicBezierCurve:Fd,CubicBezierCurve3:Rg,EllipseCurve:Ul,LineCurve:Hl,LineCurve3:J1,QuadraticBezierCurve:zd,QuadraticBezierCurve3:Pg,SplineCurve:Bd});class $1 extends Pn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Hl(t,e))}getPoint(e){const t=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=t){const l=r[s]-t,c=this.curves[s],d=c.getLength(),h=d===0?0:1-l/d;return c.getPointAt(h)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let r=0,s=this.curves.length;r<s;r++)t+=this.curves[r].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let r;for(let s=0,l=this.curves;s<l.length;s++){const c=l[s],d=c&&c.isEllipseCurve?e*2:c&&(c.isLineCurve||c.isLineCurve3)?1:c&&c.isSplineCurve?e*c.points.length:e,h=c.getPoints(d);for(let f=0;f<h.length;f++){const m=h[f];r&&r.equals(m)||(t.push(m),r=m)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,r=this.curves.length;t<r;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){const s=e.curves[t];this.curves.push(new Q1[s.type]().fromJSON(s))}return this}}class yd extends $1{constructor(e){super(),this.type="Path",this.currentPoint=new xe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,r=e.length;t<r;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const r=new Hl(this.currentPoint.clone(),new xe(e,t));return this.curves.push(r),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,r,s){const l=new zd(this.currentPoint.clone(),new xe(e,t),new xe(r,s));return this.curves.push(l),this.currentPoint.set(r,s),this}bezierCurveTo(e,t,r,s,l,c){const d=new Fd(this.currentPoint.clone(),new xe(e,t),new xe(r,s),new xe(l,c));return this.curves.push(d),this.currentPoint.set(l,c),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),r=new Bd(t);return this.curves.push(r),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,r,s,l,c){const d=this.currentPoint.x,h=this.currentPoint.y;return this.absarc(e+d,t+h,r,s,l,c),this}absarc(e,t,r,s,l,c){return this.absellipse(e,t,r,r,s,l,c),this}ellipse(e,t,r,s,l,c,d,h){const f=this.currentPoint.x,m=this.currentPoint.y;return this.absellipse(e+f,t+m,r,s,l,c,d,h),this}absellipse(e,t,r,s,l,c,d,h){const f=new Ul(e,t,r,s,l,c,d,h);if(this.curves.length>0){const v=f.getPoint(0);v.equals(this.currentPoint)||this.lineTo(v.x,v.y)}this.curves.push(f);const m=f.getPoint(1);return this.currentPoint.copy(m),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Od extends yd{constructor(e){super(e),this.uuid=oi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let r=0,s=this.holes.length;r<s;r++)t[r]=this.holes[r].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,r=this.holes.length;t<r;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){const s=e.holes[t];this.holes.push(new yd().fromJSON(s))}return this}}class ai extends lt{constructor(e,t=1){super(),this.type="Light",this.color=new Ge(e),this.intensity=t}dispose(){}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}ai.prototype.isLight=!0;class K1 extends ai{constructor(e,t,r){super(e,r),this.type="HemisphereLight",this.position.copy(lt.DefaultUp),this.updateMatrix(),this.groundColor=new Ge(t)}copy(e){return ai.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}}K1.prototype.isHemisphereLight=!0;const zm=new We,Bm=new N,Om=new N;class Ud{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.mapSize=new xe(512,512),this.map=null,this.mapPass=null,this.matrix=new We,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zl,this._frameExtents=new xe(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;Bm.setFromMatrixPosition(e.matrixWorld),t.position.copy(Bm),Om.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Om),t.updateMatrixWorld(),zm.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zm),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(t.projectionMatrix),r.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ng extends Ud{constructor(){super(new mn(50,1,.5,500)),this.focus=1}updateMatrices(e){const t=this.camera,r=fd*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,l=e.distance||t.far;(r!==t.fov||s!==t.aspect||l!==t.far)&&(t.fov=r,t.aspect=s,t.far=l,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}Ng.prototype.isSpotLightShadow=!0;class eE extends ai{constructor(e,t,r=0,s=Math.PI/3,l=0,c=1){super(e,t),this.type="SpotLight",this.position.copy(lt.DefaultUp),this.updateMatrix(),this.target=new lt,this.distance=r,this.angle=s,this.penumbra=l,this.decay=c,this.shadow=new Ng}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}eE.prototype.isSpotLight=!0;const Um=new We,Mo=new N,ad=new N;class Dg extends Ud{constructor(){super(new mn(90,1,.5,500)),this._frameExtents=new xe(4,2),this._viewportCount=6,this._viewports=[new dt(2,1,1,1),new dt(0,1,1,1),new dt(3,1,1,1),new dt(1,1,1,1),new dt(3,0,1,1),new dt(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){const r=this.camera,s=this.matrix,l=e.distance||r.far;l!==r.far&&(r.far=l,r.updateProjectionMatrix()),Mo.setFromMatrixPosition(e.matrixWorld),r.position.copy(Mo),ad.copy(r.position),ad.add(this._cubeDirections[t]),r.up.copy(this._cubeUps[t]),r.lookAt(ad),r.updateMatrixWorld(),s.makeTranslation(-Mo.x,-Mo.y,-Mo.z),Um.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Um)}}Dg.prototype.isPointLightShadow=!0;class tE extends ai{constructor(e,t,r=0,s=1){super(e,t),this.type="PointLight",this.distance=r,this.decay=s,this.shadow=new Dg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}tE.prototype.isPointLight=!0;class Ig extends Cd{constructor(e=-1,t=1,r=1,s=-1,l=.1,c=2e3){super(),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=s,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,s,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=s,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let l=r-e,c=r+e,d=s+t,h=s-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=f*this.view.offsetX,c=l+f*this.view.width,d-=m*this.view.offsetY,h=d-m*this.view.height}this.projectionMatrix.makeOrthographic(l,c,d,h,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}Ig.prototype.isOrthographicCamera=!0;class kg extends Ud{constructor(){super(new Ig(-5,5,5,-5,.5,500))}}kg.prototype.isDirectionalLightShadow=!0;class nE extends ai{constructor(e,t){super(e,t),this.type="DirectionalLight",this.position.copy(lt.DefaultUp),this.updateMatrix(),this.target=new lt,this.shadow=new kg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}nE.prototype.isDirectionalLight=!0;class iE extends ai{constructor(e,t){super(e,t),this.type="AmbientLight"}}iE.prototype.isAmbientLight=!0;class rE extends ai{constructor(e,t,r=10,s=10){super(e,t),this.type="RectAreaLight",this.width=r,this.height=s}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}rE.prototype.isRectAreaLight=!0;class Fg{constructor(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new N)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const r=e.x,s=e.y,l=e.z,c=this.coefficients;return t.copy(c[0]).multiplyScalar(.282095),t.addScaledVector(c[1],.488603*s),t.addScaledVector(c[2],.488603*l),t.addScaledVector(c[3],.488603*r),t.addScaledVector(c[4],1.092548*(r*s)),t.addScaledVector(c[5],1.092548*(s*l)),t.addScaledVector(c[6],.315392*(3*l*l-1)),t.addScaledVector(c[7],1.092548*(r*l)),t.addScaledVector(c[8],.546274*(r*r-s*s)),t}getIrradianceAt(e,t){const r=e.x,s=e.y,l=e.z,c=this.coefficients;return t.copy(c[0]).multiplyScalar(.886227),t.addScaledVector(c[1],2*.511664*s),t.addScaledVector(c[2],2*.511664*l),t.addScaledVector(c[3],2*.511664*r),t.addScaledVector(c[4],2*.429043*r*s),t.addScaledVector(c[5],2*.429043*s*l),t.addScaledVector(c[6],.743125*l*l-.247708),t.addScaledVector(c[7],2*.429043*r*l),t.addScaledVector(c[8],.429043*(r*r-s*s)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let r=0;r<9;r++)this.coefficients[r].addScaledVector(e.coefficients[r],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let r=0;r<9;r++)this.coefficients[r].lerp(e.coefficients[r],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const r=this.coefficients;for(let s=0;s<9;s++)r[s].fromArray(e,t+s*3);return this}toArray(e=[],t=0){const r=this.coefficients;for(let s=0;s<9;s++)r[s].toArray(e,t+s*3);return e}static getBasisAt(e,t){const r=e.x,s=e.y,l=e.z;t[0]=.282095,t[1]=.488603*s,t[2]=.488603*l,t[3]=.488603*r,t[4]=1.092548*r*s,t[5]=1.092548*s*l,t[6]=.315392*(3*l*l-1),t[7]=1.092548*r*l,t[8]=.546274*(r*r-s*s)}}Fg.prototype.isSphericalHarmonics3=!0;class Hd extends ai{constructor(e=new Fg,t=1){super(void 0,t),this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}Hd.prototype.isLightProbe=!0;class sE{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let r=0,s=e.length;r<s;r++)t+=String.fromCharCode(e[r]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.substr(0,t+1)}}class oE extends ft{constructor(){super(),this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){const e=super.toJSON(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}oE.prototype.isInstancedBufferGeometry=!0;class aE extends Nt{constructor(e,t,r,s){typeof r=="number"&&(s=r,r=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),super(e,t,r),this.meshPerAttribute=s||1}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}aE.prototype.isInstancedBufferAttribute=!0;class lE extends ir{constructor(e){super(e),typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,r,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,c=ys.get(e);if(c!==void 0)return l.manager.itemStart(e),setTimeout(function(){t&&t(c),l.manager.itemEnd(e)},0),c;const d={};d.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",d.headers=this.requestHeader,fetch(e,d).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(l.options,{colorSpaceConversion:"none"}))}).then(function(h){ys.add(e,h),t&&t(h),l.manager.itemEnd(e)}).catch(function(h){s&&s(h),l.manager.itemError(e),l.manager.itemEnd(e)}),l.manager.itemStart(e)}}lE.prototype.isImageBitmapLoader=!0;let wl;const cE={getContext:function(){return wl===void 0&&(wl=new(window.AudioContext||window.webkitAudioContext)),wl},setContext:function(o){wl=o}};class uE extends ir{constructor(e){super(e)}load(e,t,r,s){const l=this,c=new U1(this.manager);c.setResponseType("arraybuffer"),c.setPath(this.path),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(d){try{const h=d.slice(0);cE.getContext().decodeAudioData(h,function(m){t(m)})}catch(h){s?s(h):console.error(h),l.manager.itemError(e)}},r,s)}}class dE extends Hd{constructor(e,t,r=1){super(void 0,r);const s=new Ge().set(e),l=new Ge().set(t),c=new N(s.r,s.g,s.b),d=new N(l.r,l.g,l.b),h=Math.sqrt(Math.PI),f=h*Math.sqrt(.75);this.sh.coefficients[0].copy(c).add(d).multiplyScalar(h),this.sh.coefficients[1].copy(c).sub(d).multiplyScalar(f)}}dE.prototype.isHemisphereLightProbe=!0;class hE extends Hd{constructor(e,t=1){super(void 0,t);const r=new Ge().set(e);this.sh.coefficients[0].set(r.r,r.g,r.b).multiplyScalar(2*Math.sqrt(Math.PI))}}hE.prototype.isAmbientLightProbe=!0;class fE{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Hm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Hm();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Hm(){return(typeof performance>"u"?Date:performance).now()}class pE extends lt{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}class mE{constructor(e,t,r){this.binding=e,this.valueSize=r;let s,l,c;switch(t){case"quaternion":s=this._slerp,l=this._slerpAdditive,c=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(r*6),this._workIndex=5;break;case"string":case"bool":s=this._select,l=this._select,c=this._setAdditiveIdentityOther,this.buffer=new Array(r*5);break;default:s=this._lerp,l=this._lerpAdditive,c=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(r*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=l,this._setIdentity=c,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const r=this.buffer,s=this.valueSize,l=e*s+s;let c=this.cumulativeWeight;if(c===0){for(let d=0;d!==s;++d)r[l+d]=r[d];c=t}else{c+=t;const d=t/c;this._mixBufferRegion(r,l,0,d,s)}this.cumulativeWeight=c}accumulateAdditive(e){const t=this.buffer,r=this.valueSize,s=r*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,r),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,r=this.buffer,s=e*t+t,l=this.cumulativeWeight,c=this.cumulativeWeightAdditive,d=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,l<1){const h=t*this._origIndex;this._mixBufferRegion(r,s,h,1-l,t)}c>0&&this._mixBufferRegionAdditive(r,s,this._addIndex*t,1,t);for(let h=t,f=t+t;h!==f;++h)if(r[h]!==r[h+t]){d.setValue(r,s);break}}saveOriginalState(){const e=this.binding,t=this.buffer,r=this.valueSize,s=r*this._origIndex;e.getValue(t,s);for(let l=r,c=s;l!==c;++l)t[l]=t[s+l%r];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let r=e;r<t;r++)this.buffer[r]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let r=0;r<this.valueSize;r++)this.buffer[t+r]=this.buffer[e+r]}_select(e,t,r,s,l){if(s>=.5)for(let c=0;c!==l;++c)e[t+c]=e[r+c]}_slerp(e,t,r,s){an.slerpFlat(e,t,e,t,e,r,s)}_slerpAdditive(e,t,r,s,l){const c=this._workIndex*l;an.multiplyQuaternionsFlat(e,c,e,t,e,r),an.slerpFlat(e,t,e,t,e,c,s)}_lerp(e,t,r,s,l){const c=1-s;for(let d=0;d!==l;++d){const h=t+d;e[h]=e[h]*c+e[r+d]*s}}_lerpAdditive(e,t,r,s,l){for(let c=0;c!==l;++c){const d=t+c;e[d]=e[d]+e[r+c]*s}}}const Vd="\\[\\]\\.:\\/",gE=new RegExp("["+Vd+"]","g"),Gd="[^"+Vd+"]",vE="[^"+Vd.replace("\\.","")+"]",yE=/((?:WC+[\/:])*)/.source.replace("WC",Gd),xE=/(WCOD+)?/.source.replace("WCOD",vE),_E=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Gd),wE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Gd),ME=new RegExp("^"+yE+xE+_E+wE+"$"),SE=["material","materials","bones"];class EE{constructor(e,t,r){const s=r||ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const r=this._targetGroup.nCachedObjects_,s=this._bindings[r];s!==void 0&&s.getValue(e,t)}setValue(e,t){const r=this._bindings;for(let s=this._targetGroup.nCachedObjects_,l=r.length;s!==l;++s)r[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,r=e.length;t!==r;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,r=e.length;t!==r;++t)e[t].unbind()}}class ut{constructor(e,t,r){this.path=t,this.parsedPath=r||ut.parseTrackName(t),this.node=ut.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,r){return e&&e.isAnimationObjectGroup?new ut.Composite(e,t,r):new ut(e,t,r)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(gE,"")}static parseTrackName(e){const t=ME.exec(e);if(!t)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const r={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=r.nodeName&&r.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const l=r.nodeName.substring(s+1);SE.indexOf(l)!==-1&&(r.nodeName=r.nodeName.substring(0,s),r.objectName=l)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return r}static findNode(e,t){if(!t||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const r=e.skeleton.getBoneByName(t);if(r!==void 0)return r}if(e.children){const r=function(l){for(let c=0;c<l.length;c++){const d=l[c];if(d.name===t||d.uuid===t)return d;const h=r(d.children);if(h)return h}return null},s=r(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.node[this.propertyName]}_getValue_array(e,t){const r=this.resolvedProperty;for(let s=0,l=r.length;s!==l;++s)e[t++]=r[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const r=this.resolvedProperty;for(let s=0,l=r.length;s!==l;++s)r[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const r=this.resolvedProperty;for(let s=0,l=r.length;s!==l;++s)r[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const r=this.resolvedProperty;for(let s=0,l=r.length;s!==l;++s)r[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,r=t.objectName,s=t.propertyName;let l=t.propertyIndex;if(e||(e=ut.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(r){let f=t.objectIndex;switch(r){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let m=0;m<e.length;m++)if(e[m].name===f){f=m;break}break;default:if(e[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[r]}if(f!==void 0){if(e[f]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[f]}}const c=e[s];if(c===void 0){const f=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+f+"."+s+" but it wasn't found.",e);return}let d=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?d=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(d=this.Versioning.MatrixWorldNeedsUpdate);let h=this.BindingType.Direct;if(l!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(e.geometry.isBufferGeometry){if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[l]!==void 0&&(l=e.morphTargetDictionary[l])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}h=this.BindingType.ArrayElement,this.resolvedProperty=c,this.propertyIndex=l}else c.fromArray!==void 0&&c.toArray!==void 0?(h=this.BindingType.HasFromToArray,this.resolvedProperty=c):Array.isArray(c)?(h=this.BindingType.EntireArray,this.resolvedProperty=c):this.propertyName=s;this.getValue=this.GetterByBindingType[h],this.setValue=this.SetterByBindingTypeAndVersioning[h][d]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ut.Composite=EE;ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ut.prototype.GetterByBindingType=[ut.prototype._getValue_direct,ut.prototype._getValue_array,ut.prototype._getValue_arrayElement,ut.prototype._getValue_toArray];ut.prototype.SetterByBindingTypeAndVersioning=[[ut.prototype._setValue_direct,ut.prototype._setValue_direct_setNeedsUpdate,ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_array,ut.prototype._setValue_array_setNeedsUpdate,ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_arrayElement,ut.prototype._setValue_arrayElement_setNeedsUpdate,ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_fromArray,ut.prototype._setValue_fromArray_setNeedsUpdate,ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class bE{constructor(e,t,r=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=r,this.blendMode=s;const l=t.tracks,c=l.length,d=new Array(c),h={endingStart:fs,endingEnd:fs};for(let f=0;f!==c;++f){const m=l[f].createInterpolant(null);d[f]=m,m.settings=h}this._interpolantSettings=h,this._interpolants=d,this._propertyBindings=new Array(c),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=rx,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,r){if(e.fadeOut(t),this.fadeIn(t),r){const s=this._clip.duration,l=e._clip.duration,c=l/s,d=s/l;e.warp(1,c,t),this.warp(d,1,t)}return this}crossFadeTo(e,t,r){return e.crossFadeFrom(this,t,r)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,r){const s=this._mixer,l=s.time,c=this.timeScale;let d=this._timeScaleInterpolant;d===null&&(d=s._lendControlInterpolant(),this._timeScaleInterpolant=d);const h=d.parameterPositions,f=d.sampleValues;return h[0]=l,h[1]=l+r,f[0]=e/c,f[1]=t/c,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,r,s){if(!this.enabled){this._updateWeight(e);return}const l=this._startTime;if(l!==null){const h=(e-l)*r;if(h<0||r===0)return;this._startTime=null,t=r*h}t*=this._updateTimeScale(e);const c=this._updateTime(t),d=this._updateWeight(e);if(d>0){const h=this._interpolants,f=this._propertyBindings;switch(this.blendMode){case Zm:for(let m=0,v=h.length;m!==v;++m)h[m].evaluate(c),f[m].accumulateAdditive(d);break;case Td:default:for(let m=0,v=h.length;m!==v;++m)h[m].evaluate(c),f[m].accumulate(s,d)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const r=this._weightInterpolant;if(r!==null){const s=r.evaluate(e)[0];t*=s,e>r.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const r=this._timeScaleInterpolant;if(r!==null){const s=r.evaluate(e)[0];t*=s,e>r.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,r=this.loop;let s=this.time+e,l=this._loopCount;const c=r===sx;if(e===0)return l===-1?s:c&&(l&1)===1?t-s:s;if(r===ix){l===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(l===-1&&(e>=0?(l=0,this._setEndings(!0,this.repetitions===0,c)):this._setEndings(this.repetitions===0,!0,c)),s>=t||s<0){const d=Math.floor(s/t);s-=t*d,l+=Math.abs(d);const h=this.repetitions-l;if(h<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(h===1){const f=e<0;this._setEndings(f,!f,c)}else this._setEndings(!1,!1,c);this._loopCount=l,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:d})}}else this.time=s;if(c&&(l&1)===1)return t-s}return s}_setEndings(e,t,r){const s=this._interpolantSettings;r?(s.endingStart=ps,s.endingEnd=ps):(e?s.endingStart=this.zeroSlopeAtStart?ps:fs:s.endingStart=Cl,t?s.endingEnd=this.zeroSlopeAtEnd?ps:fs:s.endingEnd=Cl)}_scheduleFading(e,t,r){const s=this._mixer,l=s.time;let c=this._weightInterpolant;c===null&&(c=s._lendControlInterpolant(),this._weightInterpolant=c);const d=c.parameterPositions,h=c.sampleValues;return d[0]=l,h[0]=t,d[1]=l+e,h[1]=r,this}}class TE extends wr{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const r=e._localRoot||this._root,s=e._clip.tracks,l=s.length,c=e._propertyBindings,d=e._interpolants,h=r.uuid,f=this._bindingsByRootAndName;let m=f[h];m===void 0&&(m={},f[h]=m);for(let v=0;v!==l;++v){const y=s[v],x=y.name;let w=m[x];if(w!==void 0)c[v]=w;else{if(w=c[v],w!==void 0){w._cacheIndex===null&&(++w.referenceCount,this._addInactiveBinding(w,h,x));continue}const E=t&&t._propertyBindings[v].binding.parsedPath;w=new mE(ut.create(r,x,E),y.ValueTypeName,y.getValueSize()),++w.referenceCount,this._addInactiveBinding(w,h,x),c[v]=w}d[v].resultBuffer=w.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const r=(e._localRoot||this._root).uuid,s=e._clip.uuid,l=this._actionsByClip[s];this._bindAction(e,l&&l.knownActions[0]),this._addInactiveAction(e,s,r)}const t=e._propertyBindings;for(let r=0,s=t.length;r!==s;++r){const l=t[r];l.useCount++===0&&(this._lendBinding(l),l.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let r=0,s=t.length;r!==s;++r){const l=t[r];--l.useCount===0&&(l.restoreOriginalState(),this._takeBackBinding(l))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,r){const s=this._actions,l=this._actionsByClip;let c=l[t];if(c===void 0)c={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,l[t]=c;else{const d=c.knownActions;e._byClipCacheIndex=d.length,d.push(e)}e._cacheIndex=s.length,s.push(e),c.actionByRoot[r]=e}_removeInactiveAction(e){const t=this._actions,r=t[t.length-1],s=e._cacheIndex;r._cacheIndex=s,t[s]=r,t.pop(),e._cacheIndex=null;const l=e._clip.uuid,c=this._actionsByClip,d=c[l],h=d.knownActions,f=h[h.length-1],m=e._byClipCacheIndex;f._byClipCacheIndex=m,h[m]=f,h.pop(),e._byClipCacheIndex=null;const v=d.actionByRoot,y=(e._localRoot||this._root).uuid;delete v[y],h.length===0&&delete c[l],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let r=0,s=t.length;r!==s;++r){const l=t[r];--l.referenceCount===0&&this._removeInactiveBinding(l)}}_lendAction(e){const t=this._actions,r=e._cacheIndex,s=this._nActiveActions++,l=t[s];e._cacheIndex=s,t[s]=e,l._cacheIndex=r,t[r]=l}_takeBackAction(e){const t=this._actions,r=e._cacheIndex,s=--this._nActiveActions,l=t[s];e._cacheIndex=s,t[s]=e,l._cacheIndex=r,t[r]=l}_addInactiveBinding(e,t,r){const s=this._bindingsByRootAndName,l=this._bindings;let c=s[t];c===void 0&&(c={},s[t]=c),c[r]=e,e._cacheIndex=l.length,l.push(e)}_removeInactiveBinding(e){const t=this._bindings,r=e.binding,s=r.rootNode.uuid,l=r.path,c=this._bindingsByRootAndName,d=c[s],h=t[t.length-1],f=e._cacheIndex;h._cacheIndex=f,t[f]=h,t.pop(),delete d[l],Object.keys(d).length===0&&delete c[s]}_lendBinding(e){const t=this._bindings,r=e._cacheIndex,s=this._nActiveBindings++,l=t[s];e._cacheIndex=s,t[s]=e,l._cacheIndex=r,t[r]=l}_takeBackBinding(e){const t=this._bindings,r=e._cacheIndex,s=--this._nActiveBindings,l=t[s];e._cacheIndex=s,t[s]=e,l._cacheIndex=r,t[r]=l}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let r=e[t];return r===void 0&&(r=new bg(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),r.__cacheIndex=t,e[t]=r),r}_takeBackControlInterpolant(e){const t=this._controlInterpolants,r=e.__cacheIndex,s=--this._nActiveControlInterpolants,l=t[s];e.__cacheIndex=s,t[s]=e,l.__cacheIndex=r,t[r]=l}clipAction(e,t,r){const s=t||this._root,l=s.uuid;let c=typeof e=="string"?km.findByName(s,e):e;const d=c!==null?c.uuid:e,h=this._actionsByClip[d];let f=null;if(r===void 0&&(c!==null?r=c.blendMode:r=Td),h!==void 0){const v=h.actionByRoot[l];if(v!==void 0&&v.blendMode===r)return v;f=h.knownActions[0],c===null&&(c=f._clip)}if(c===null)return null;const m=new bE(this,c,t,r);return this._bindAction(m,f),this._addInactiveAction(m,d,l),m}existingAction(e,t){const r=t||this._root,s=r.uuid,l=typeof e=="string"?km.findByName(r,e):e,c=l?l.uuid:e,d=this._actionsByClip[c];return d!==void 0&&d.actionByRoot[s]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let r=t-1;r>=0;--r)e[r].stop();return this}update(e){e*=this.timeScale;const t=this._actions,r=this._nActiveActions,s=this.time+=e,l=Math.sign(e),c=this._accuIndex^=1;for(let f=0;f!==r;++f)t[f]._update(s,e,l,c);const d=this._bindings,h=this._nActiveBindings;for(let f=0;f!==h;++f)d[f].apply(c);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,r=e.uuid,s=this._actionsByClip,l=s[r];if(l!==void 0){const c=l.knownActions;for(let d=0,h=c.length;d!==h;++d){const f=c[d];this._deactivateAction(f);const m=f._cacheIndex,v=t[t.length-1];f._cacheIndex=null,f._byClipCacheIndex=null,v._cacheIndex=m,t[m]=v,t.pop(),this._removeInactiveBindingsForAction(f)}delete s[r]}}uncacheRoot(e){const t=e.uuid,r=this._actionsByClip;for(const c in r){const d=r[c].actionByRoot,h=d[t];h!==void 0&&(this._deactivateAction(h),this._removeInactiveAction(h))}const s=this._bindingsByRootAndName,l=s[t];if(l!==void 0)for(const c in l){const d=l[c];d.restoreOriginalState(),this._removeInactiveBinding(d)}}uncacheAction(e,t){const r=this.existingAction(e,t);r!==null&&(this._deactivateAction(r),this._removeInactiveAction(r))}}TE.prototype._controlInterpolantsResultBuffer=new Float32Array(1);class LE extends Mr{constructor(e,t,r=1){super(e,t),this.meshPerAttribute=r||1}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}LE.prototype.isInstancedInterleavedBuffer=!0;class AE extends lt{constructor(e){super(),this.material=e,this.render=function(){},this.hasPositions=!1,this.hasNormals=!1,this.hasColors=!1,this.hasUvs=!1,this.positionArray=null,this.normalArray=null,this.colorArray=null,this.uvArray=null,this.count=0}}AE.prototype.isImmediateRenderObject=!0;const Qi=new N,Ml=new We,ld=new We;class CE extends Dd{constructor(e){const t=zg(e),r=new ft,s=[],l=[],c=new Ge(0,0,1),d=new Ge(0,1,0);for(let f=0;f<t.length;f++){const m=t[f];m.parent&&m.parent.isBone&&(s.push(0,0,0),s.push(0,0,0),l.push(c.r,c.g,c.b),l.push(d.r,d.g,d.b))}r.setAttribute("position",new Vt(s,3)),r.setAttribute("color",new Vt(l,3));const h=new Oo({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(r,h),this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,r=this.geometry,s=r.getAttribute("position");ld.copy(this.root.matrixWorld).invert();for(let l=0,c=0;l<t.length;l++){const d=t[l];d.parent&&d.parent.isBone&&(Ml.multiplyMatrices(ld,d.matrixWorld),Qi.setFromMatrixPosition(Ml),s.setXYZ(c,Qi.x,Qi.y,Qi.z),Ml.multiplyMatrices(ld,d.parent.matrixWorld),Qi.setFromMatrixPosition(Ml),s.setXYZ(c+1,Qi.x,Qi.y,Qi.z),c+=2)}r.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}}function zg(o){const e=[];o&&o.isBone&&e.push(o);for(let t=0;t<o.children.length;t++)e.push.apply(e,zg(o.children[t]));return e}class RE extends Dd{constructor(e=10,t=10,r=4473924,s=8947848){r=new Ge(r),s=new Ge(s);const l=t/2,c=e/t,d=e/2,h=[],f=[];for(let y=0,x=0,w=-d;y<=t;y++,w+=c){h.push(-d,0,w,d,0,w),h.push(w,0,-d,w,0,d);const E=y===l?r:s;E.toArray(f,x),x+=3,E.toArray(f,x),x+=3,E.toArray(f,x),x+=3,E.toArray(f,x),x+=3}const m=new ft;m.setAttribute("position",new Vt(h,3)),m.setAttribute("color",new Vt(f,3));const v=new Oo({vertexColors:!0,toneMapped:!1});super(m,v),this.type="GridHelper"}}const PE=new Float32Array(1);new Int32Array(PE.buffer);const NE=new Ld({side:Ht,depthWrite:!1,depthTest:!1});new Zn(new Ad,NE);Pn.create=function(o,e){return console.log("THREE.Curve.create() has been deprecated"),o.prototype=Object.create(Pn.prototype),o.prototype.constructor=o,o.prototype.getPoint=e,o};yd.prototype.fromPoints=function(o){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(o)};RE.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};CE.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};ir.prototype.extractUrlBase=function(o){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),sE.extractUrlBase(o)};ir.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};Nn.prototype.center=function(o){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(o)};Nn.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Nn.prototype.isIntersectionBox=function(o){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(o)};Nn.prototype.isIntersectionSphere=function(o){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(o)};Nn.prototype.size=function(o){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(o)};ws.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()};zl.prototype.setFromMatrix=function(o){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(o)};qt.prototype.flattenToArrayOffset=function(o,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(o,e)};qt.prototype.multiplyVector3=function(o){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),o.applyMatrix3(this)};qt.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")};qt.prototype.applyToBufferAttribute=function(o){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),o.applyMatrix3(this)};qt.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")};qt.prototype.getInverse=function(o){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(o).invert()};We.prototype.extractPosition=function(o){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(o)};We.prototype.flattenToArrayOffset=function(o,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(o,e)};We.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new N().setFromMatrixColumn(this,3)};We.prototype.setRotationFromQuaternion=function(o){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(o)};We.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")};We.prototype.multiplyVector3=function(o){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),o.applyMatrix4(this)};We.prototype.multiplyVector4=function(o){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),o.applyMatrix4(this)};We.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")};We.prototype.rotateAxis=function(o){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),o.transformDirection(this)};We.prototype.crossVector=function(o){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),o.applyMatrix4(this)};We.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")};We.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")};We.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")};We.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")};We.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")};We.prototype.applyToBufferAttribute=function(o){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),o.applyMatrix4(this)};We.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")};We.prototype.makeFrustum=function(o,e,t,r,s,l){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(o,e,r,t,s,l)};We.prototype.getInverse=function(o){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(o).invert()};ri.prototype.isIntersectionLine=function(o){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(o)};an.prototype.multiplyVector3=function(o){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),o.applyQuaternion(this)};an.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()};Ms.prototype.isIntersectionBox=function(o){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(o)};Ms.prototype.isIntersectionPlane=function(o){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(o)};Ms.prototype.isIntersectionSphere=function(o){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(o)};kt.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()};kt.prototype.barycoordFromPoint=function(o,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(o,e)};kt.prototype.midpoint=function(o){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(o)};kt.prototypenormal=function(o){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(o)};kt.prototype.plane=function(o){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(o)};kt.barycoordFromPoint=function(o,e,t,r,s){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),kt.getBarycoord(o,e,t,r,s)};kt.normal=function(o,e,t,r){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),kt.getNormal(o,e,t,r)};Od.prototype.extractAllPoints=function(o){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(o)};Od.prototype.extrude=function(o){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new Ol(this,o)};Od.prototype.makeGeometry=function(o){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new M1(this,o)};xe.prototype.fromAttribute=function(o,e,t){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(o,e,t)};xe.prototype.distanceToManhattan=function(o){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(o)};xe.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};N.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")};N.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")};N.prototype.getPositionFromMatrix=function(o){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(o)};N.prototype.getScaleFromMatrix=function(o){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(o)};N.prototype.getColumnFromMatrix=function(o,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,o)};N.prototype.applyProjection=function(o){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(o)};N.prototype.fromAttribute=function(o,e,t){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(o,e,t)};N.prototype.distanceToManhattan=function(o){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(o)};N.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};dt.prototype.fromAttribute=function(o,e,t){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(o,e,t)};dt.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};lt.prototype.getChildByName=function(o){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(o)};lt.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")};lt.prototype.translate=function(o,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,o)};lt.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")};lt.prototype.applyMatrix=function(o){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(o)};Object.defineProperties(lt.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(o){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=o}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});Zn.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")};Object.defineProperties(Zn.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),ox},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});xg.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};mn.prototype.setLens=function(o,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(o)};Object.defineProperties(ai.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(o){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=o}},shadowCameraLeft:{set:function(o){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=o}},shadowCameraRight:{set:function(o){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=o}},shadowCameraTop:{set:function(o){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=o}},shadowCameraBottom:{set:function(o){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=o}},shadowCameraNear:{set:function(o){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=o}},shadowCameraFar:{set:function(o){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=o}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(o){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=o}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(o){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=o}},shadowMapHeight:{set:function(o){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=o}}});Object.defineProperties(Nt.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===Rl},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(Rl)}}});Nt.prototype.setDynamic=function(o){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(o===!0?Rl:Do),this};Nt.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},Nt.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};ft.prototype.addIndex=function(o){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(o)};ft.prototype.addAttribute=function(o,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(e&&e.isBufferAttribute)&&!(e&&e.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(o,new Nt(arguments[1],arguments[2]))):o==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(o,e)};ft.prototype.addDrawCall=function(o,e,t){t!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(o,e)};ft.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()};ft.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")};ft.prototype.removeAttribute=function(o){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(o)};ft.prototype.applyMatrix=function(o){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(o)};Object.defineProperties(ft.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});Mr.prototype.setDynamic=function(o){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(o===!0?Rl:Do),this};Mr.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};Ol.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")};Ol.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")};Ol.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")};Pd.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")};Object.defineProperties(Gt.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new Ge}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(o){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=o===jm}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(o){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=o}}});Object.defineProperties(_r.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(o){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=o}}});ht.prototype.clearTarget=function(o,e,t,r){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(o),this.clear(e,t,r)};ht.prototype.animate=function(o){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(o)};ht.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()};ht.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()};ht.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision};ht.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()};ht.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")};ht.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")};ht.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")};ht.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")};ht.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")};ht.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")};ht.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures};ht.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")};ht.prototype.enableScissorTest=function(o){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(o)};ht.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")};ht.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")};ht.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")};ht.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")};ht.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")};ht.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")};ht.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")};ht.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")};ht.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")};ht.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()};Object.defineProperties(ht.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(o){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=o}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(o){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=o}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(o){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=o===!0?Jm:Bo}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}}});Object.defineProperties(mg.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(xr.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(o){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=o}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(o){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=o}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(o){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=o}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(o){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=o}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(o){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=o}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(o){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=o}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(o){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=o}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(o){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=o}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(o){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=o}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(o){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=o}}});pE.prototype.load=function(o){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");const e=this;return new uE().load(o,function(r){e.setBuffer(r)}),this};Rd.prototype.updateCubeMap=function(o,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(o,e)};Rd.prototype.clear=function(o,e,t,r){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(o,e,t,r)};_s.crossOrigin=void 0;_s.loadTexture=function(o,e,t,r){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const s=new V1;s.setCrossOrigin(this.crossOrigin);const l=s.load(o,t,void 0,r);return e&&(l.mapping=e),l};_s.loadTextureCube=function(o,e,t,r){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const s=new H1;s.setCrossOrigin(this.crossOrigin);const l=s.load(o,t,void 0,r);return e&&(l.mapping=e),l};_s.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};_s.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gm);const DE=()=>{const o=Sl.useRef(null),[e,t]=Sl.useState(0);return Sl.useEffect(()=>{const r=new Pd,s=new mn(75,window.innerWidth/window.innerHeight,.1,1e3),l=new ht({canvas:o.current,alpha:!0,antialias:!0});l.setSize(window.innerWidth,window.innerHeight),l.setPixelRatio(Math.min(window.devicePixelRatio,2)),s.position.z=5;const c=new ft,d=1500,h=new Float32Array(d*3),f=new Float32Array(d*3);for(let I=0;I<d*3;I+=3){h[I]=(Math.random()-.5)*15,h[I+1]=(Math.random()-.5)*15,h[I+2]=(Math.random()-.5)*10;const U=Math.random();U<.33?(f[I]=0,f[I+1]=.83,f[I+2]=1):U<.66?(f[I]=.49,f[I+1]=.23,f[I+2]=.93):(f[I]=.93,f[I+1]=.28,f[I+2]=.6)}c.setAttribute("position",new Nt(h,3)),c.setAttribute("color",new Nt(f,3));const m=new Id({size:.025,vertexColors:!0,transparent:!0,opacity:.5,blending:cd}),v=new _g(c,m);r.add(v);let y=0,x=0;const w=I=>{y=I.clientX/window.innerWidth*2-1,x=-(I.clientY/window.innerHeight)*2+1};window.addEventListener("mousemove",w);const E=new fE,b=()=>{requestAnimationFrame(b);const I=E.getElapsedTime();v.rotation.y=I*.03,v.rotation.x=Math.sin(I*.05)*.1,s.position.x+=(y*.3-s.position.x)*.03,s.position.y+=(x*.3-s.position.y)*.03,l.render(r,s)};b();const M=()=>{s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix(),l.setSize(window.innerWidth,window.innerHeight)},_=()=>{t(window.scrollY)};return window.addEventListener("resize",M),window.addEventListener("scroll",_),()=>{window.removeEventListener("mousemove",w),window.removeEventListener("resize",M),window.removeEventListener("scroll",_),l.dispose()}},[]),Q.jsxs("div",{children:[Q.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          background: #000000;
          color: #f5f5f7;
          line-height: 1.6;
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
        }

        #three-canvas {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          opacity: 0.7;
        }

        .content-wrapper {
          position: relative;
          z-index: 1;
        }

        /* Navigation */
        nav {
          position: fixed;
          top: 0;
          width: 100%;
          backdrop-filter: blur(20px) saturate(180%);
          background: rgba(0, 0, 0, 0.8);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          z-index: 1000;
          transition: all 0.3s ease;
        }

        nav.scrolled {
          background: rgba(0, 0, 0, 0.95);
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.3rem;
          font-weight: 600;
          color: #f5f5f7;
          letter-spacing: -0.02em;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
          list-style: none;
        }

        .nav-links a {
          color: #f5f5f7;
          text-decoration: none;
          font-size: 0.875rem;
          font-weight: 400;
          transition: opacity 0.3s ease;
        }

        .nav-links a:hover {
          opacity: 0.6;
        }

        /* Hero Section */
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 2rem;
        }

        .hero-content {
          max-width: 900px;
          animation: fadeIn 1s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .hero h1 {
          font-size: clamp(3rem, 8vw, 6rem);
          font-weight: 700;
          letter-spacing: -0.03em;
          margin-bottom: 1.5rem;
          background: linear-gradient(135deg, #00d4ff 0%, #7c3aed 50%, #ec4899 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1.1;
          animation: gradientShift 8s ease infinite;
          background-size: 200% 200%;
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .hero-subtitle {
          font-size: clamp(1.2rem, 3vw, 1.75rem);
          font-weight: 400;
          color: #86868b;
          margin-bottom: 3rem;
          letter-spacing: -0.01em;
        }

        .cta-group {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn-primary {
          padding: 0.875rem 2rem;
          background: linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%);
          color: #fff;
          border: none;
          border-radius: 980px;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(0, 212, 255, 0.3);
        }

        .btn-primary:hover {
          background: linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%);
          transform: scale(1.05);
          box-shadow: 0 6px 30px rgba(124, 58, 237, 0.5);
        }

        .btn-secondary {
          padding: 0.875rem 2rem;
          background: transparent;
          color: #f5f5f7;
          border: 2px solid transparent;
          background-image: linear-gradient(#000, #000), linear-gradient(135deg, #00d4ff, #7c3aed);
          background-origin: border-box;
          background-clip: padding-box, border-box;
          border-radius: 980px;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
          transition: all 0.3s ease;
        }

        .btn-secondary:hover {
          background-image: linear-gradient(rgba(0, 212, 255, 0.1), rgba(124, 58, 237, 0.1)), linear-gradient(135deg, #00d4ff, #7c3aed);
          transform: scale(1.02);
        }

        /* Section Styling */
        section {
          padding: 8rem 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-header {
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 700;
          margin-bottom: 3rem;
          letter-spacing: -0.03em;
          text-align: center;
          background: linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-subheader {
          font-size: 1.25rem;
          color: #86868b;
          text-align: center;
          max-width: 700px;
          margin: 0 auto 4rem;
          font-weight: 400;
        }

        /* Experience Cards */
        .experience-grid {
          display: grid;
          gap: 2rem;
        }

        .exp-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 18px;
          padding: 2.5rem;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .exp-card:hover {
          background: rgba(0, 212, 255, 0.05);
          border-color: rgba(124, 58, 237, 0.3);
          transform: translateY(-4px);
          box-shadow: 0 10px 40px rgba(0, 212, 255, 0.2);
        }

        .exp-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .exp-title {
          font-size: 1.5rem;
          font-weight: 600;
          background: linear-gradient(135deg, #00d4ff 0%, #ec4899 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.25rem;
        }

        .exp-company {
          font-size: 1.125rem;
          color: #86868b;
          font-weight: 400;
        }

        .exp-meta {
          text-align: right;
          font-size: 0.9rem;
          color: #86868b;
        }

        .exp-card ul {
          list-style: none;
          padding: 0;
        }

        .exp-card li {
          color: #a1a1a6;
          margin-bottom: 0.75rem;
          padding-left: 1.5rem;
          position: relative;
          line-height: 1.6;
        }

        .exp-card li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: #86868b;
        }

        /* Projects Grid */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .project-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 18px;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .project-card:hover {
          background: rgba(124, 58, 237, 0.05);
          border-color: rgba(0, 212, 255, 0.4);
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(124, 58, 237, 0.3);
        }

        .project-video {
          position: relative;
          width: 100%;
          padding-bottom: 56.25%;
          background: #000;
          overflow: hidden;
        }

        .project-video iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .project-placeholder {
          position: relative;
          width: 100%;
          padding-bottom: 56.25%;
          background: linear-gradient(135deg, rgba(100, 100, 100, 0.2), rgba(50, 50, 50, 0.2));
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .project-placeholder-content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 4rem;
        }

        .project-info {
          padding: 2rem;
        }

        .project-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
          letter-spacing: -0.02em;
          background: linear-gradient(135deg, #7c3aed 0%, #ec4899 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .tech-tags {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-bottom: 1rem;
        }

        .tech-tag {
          padding: 0.375rem 0.875rem;
          background: linear-gradient(135deg, rgba(0, 212, 255, 0.15), rgba(124, 58, 237, 0.15));
          border: 1px solid rgba(0, 212, 255, 0.3);
          border-radius: 980px;
          font-size: 0.813rem;
          font-weight: 500;
          color: #00d4ff;
          transition: all 0.3s ease;
        }

        .tech-tag:hover {
          background: linear-gradient(135deg, rgba(0, 212, 255, 0.3), rgba(124, 58, 237, 0.3));
          border-color: rgba(124, 58, 237, 0.5);
          transform: translateY(-2px);
        }

        .project-description {
          color: #86868b;
          font-size: 0.938rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .project-link {
          color: #00d4ff;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.938rem;
          transition: all 0.3s ease;
          background: linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .project-link:hover {
          opacity: 0.7;
          transform: translateX(5px);
          display: inline-block;
        }

        /* Skills Section */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .skill-category {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 18px;
          padding: 2rem;
          transition: all 0.3s ease;
        }

        .skill-category:hover {
          background: rgba(0, 212, 255, 0.05);
          border-color: rgba(124, 58, 237, 0.3);
          box-shadow: 0 10px 30px rgba(0, 212, 255, 0.15);
        }

        .skill-category h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          letter-spacing: -0.02em;
          background: linear-gradient(135deg, #00d4ff 0%, #ec4899 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .skill-items {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .skill-item {
          padding: 0.5rem 1rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 980px;
          font-size: 0.875rem;
          color: #a1a1a6;
          transition: all 0.3s ease;
        }

        .skill-item:hover {
          background: linear-gradient(135deg, rgba(0, 212, 255, 0.2), rgba(124, 58, 237, 0.2));
          color: #00d4ff;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 212, 255, 0.3);
        }

        /* Footer */
        footer {
          padding: 4rem 2rem;
          text-align: center;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
        }

        .footer-links {
          display: flex;
          gap: 2rem;
          justify-content: center;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .footer-link {
          color: #86868b;
          text-decoration: none;
          font-size: 0.875rem;
          transition: color 0.3s ease;
        }

        .footer-link:hover {
          color: #f5f5f7;
        }

        .copyright {
          color: #86868b;
          font-size: 0.813rem;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .nav-links {
            gap: 1rem;
          }

          .nav-links a {
            font-size: 0.813rem;
          }

          section {
            padding: 4rem 1.5rem;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }

          .skills-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .nav-links {
            display: none;
          }
        }
      `}),Q.jsx("canvas",{ref:o,id:"three-canvas"}),Q.jsxs("div",{className:"content-wrapper",children:[Q.jsx("nav",{className:e>50?"scrolled":"",children:Q.jsxs("div",{className:"nav-container",children:[Q.jsx("div",{className:"logo",children:"Subham"}),Q.jsxs("ul",{className:"nav-links",children:[Q.jsx("li",{children:Q.jsx("a",{href:"#about",children:"About"})}),Q.jsx("li",{children:Q.jsx("a",{href:"#experience",children:"Experience"})}),Q.jsx("li",{children:Q.jsx("a",{href:"#projects",children:"Projects"})}),Q.jsx("li",{children:Q.jsx("a",{href:"#skills",children:"Skills"})})]})]})}),Q.jsx("section",{className:"hero",children:Q.jsxs("div",{className:"hero-content",children:[Q.jsx("h1",{children:"Subham Bhattacharya"}),Q.jsx("p",{className:"hero-subtitle",children:"Software Engineer crafting exceptional digital experiences"}),Q.jsxs("div",{className:"cta-group",children:[Q.jsx("a",{href:"https://github.com/CyberDragon25",className:"btn-primary",target:"_blank",rel:"noopener noreferrer",children:"View GitHub"}),Q.jsx("a",{href:"https://linkedin.com/in/shubhambhattacharya",className:"btn-secondary",target:"_blank",rel:"noopener noreferrer",children:"LinkedIn"}),Q.jsx("a",{href:"mailto:bhattacharya.shubham123@gmail.com",className:"btn-secondary",children:"Contact"})]})]})}),Q.jsxs("section",{id:"about",children:[Q.jsx("h2",{className:"section-header",children:"About"}),Q.jsx("p",{className:"section-subheader",children:"Computer Science graduate from Iowa State University with expertise in full-stack development, mobile applications, and systems programming. Passionate about building impactful software solutions."})]}),Q.jsxs("section",{id:"experience",children:[Q.jsx("h2",{className:"section-header",children:"Experience"}),Q.jsxs("div",{className:"experience-grid",children:[Q.jsxs("div",{className:"exp-card",children:[Q.jsxs("div",{className:"exp-header",children:[Q.jsxs("div",{children:[Q.jsx("div",{className:"exp-title",children:"Software Engineering Intern"}),Q.jsx("div",{className:"exp-company",children:"Qualcomm"})]}),Q.jsxs("div",{className:"exp-meta",children:[Q.jsx("div",{children:"May 2024 – Aug 2024"}),Q.jsx("div",{children:"San Diego, CA"})]})]}),Q.jsxs("ul",{children:[Q.jsx("li",{children:"Engineered a kernel-level CPU latency benchmarking library in C/C++ using Windows Driver Framework, improving observability by 20%"}),Q.jsx("li",{children:"Implemented IOCTL-based communication layer for seamless user-space to kernel-space interaction"}),Q.jsx("li",{children:"Designed priority-based kernel thread scheduling with configurable core affinity"})]})]}),Q.jsxs("div",{className:"exp-card",children:[Q.jsxs("div",{className:"exp-header",children:[Q.jsxs("div",{children:[Q.jsx("div",{className:"exp-title",children:"Tech Fellow - TIP 101"}),Q.jsx("div",{className:"exp-company",children:"CodePath"})]}),Q.jsxs("div",{className:"exp-meta",children:[Q.jsx("div",{children:"Aug 2025 – Present"}),Q.jsx("div",{children:"Remote"})]})]}),Q.jsxs("ul",{children:[Q.jsx("li",{children:"Mentored 6+ students per session in advanced data structures and algorithms"}),Q.jsx("li",{children:"Collaborated with leadership team to refine curriculum materials for 100+ students"})]})]}),Q.jsxs("div",{className:"exp-card",children:[Q.jsxs("div",{className:"exp-header",children:[Q.jsxs("div",{children:[Q.jsx("div",{className:"exp-title",children:"Tech Lead - Android"}),Q.jsx("div",{className:"exp-company",children:"Google Developers Student Club"})]}),Q.jsxs("div",{className:"exp-meta",children:[Q.jsx("div",{children:"Oct 2022 – May 2025"}),Q.jsx("div",{children:"Ames, IA"})]})]}),Q.jsxs("ul",{children:[Q.jsx("li",{children:"Architected comprehensive Android development curriculum for 30+ students"}),Q.jsx("li",{children:"Designed workshops covering Compose, REST API integration, and dependency injection"})]})]})]})]}),Q.jsxs("section",{id:"projects",children:[Q.jsx("h2",{className:"section-header",children:"Featured Projects"}),Q.jsxs("div",{className:"projects-grid",children:[Q.jsxs("div",{className:"project-card",children:[Q.jsx("div",{className:"project-video",children:Q.jsx("iframe",{src:"https://www.youtube.com/embed/mgoWAoikVoQ",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}),Q.jsxs("div",{className:"project-info",children:[Q.jsx("h3",{className:"project-title",children:"FindRight"}),Q.jsxs("div",{className:"tech-tags",children:[Q.jsx("span",{className:"tech-tag",children:"Java"}),Q.jsx("span",{className:"tech-tag",children:"Android"}),Q.jsx("span",{className:"tech-tag",children:"XML"}),Q.jsx("span",{className:"tech-tag",children:"GitLab CI/CD"})]}),Q.jsx("p",{className:"project-description",children:"Two-sided marketplace Android application connecting service providers with clients. Features role-based flows, real-time discovery, and RESTful API integration."}),Q.jsx("a",{href:"https://youtu.be/mgoWAoikVoQ",className:"project-link",target:"_blank",rel:"noopener noreferrer",children:"Watch demo →"})]})]}),Q.jsxs("div",{className:"project-card",children:[Q.jsx("div",{className:"project-video",children:Q.jsx("iframe",{src:"https://www.youtube.com/embed/9oS3cz72fZQ",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}),Q.jsxs("div",{className:"project-info",children:[Q.jsx("h3",{className:"project-title",children:"Cyflix"}),Q.jsxs("div",{className:"tech-tags",children:[Q.jsx("span",{className:"tech-tag",children:"MongoDB"}),Q.jsx("span",{className:"tech-tag",children:"Express"}),Q.jsx("span",{className:"tech-tag",children:"React"}),Q.jsx("span",{className:"tech-tag",children:"Node.js"})]}),Q.jsx("p",{className:"project-description",children:"Full-stack video streaming platform with JWT authentication and TMDB API integration. Features 1000+ movie titles with real-time watchlist updates."}),Q.jsx("a",{href:"https://youtu.be/9oS3cz72fZQ",className:"project-link",target:"_blank",rel:"noopener noreferrer",children:"Watch demo →"})]})]}),Q.jsxs("div",{className:"project-card",children:[Q.jsx("div",{className:"project-placeholder",children:Q.jsx("div",{className:"project-placeholder-content",children:"🎮"})}),Q.jsxs("div",{className:"project-info",children:[Q.jsx("h3",{className:"project-title",children:"Terminal-Based Pokemon Game"}),Q.jsxs("div",{className:"tech-tags",children:[Q.jsx("span",{className:"tech-tag",children:"C"}),Q.jsx("span",{className:"tech-tag",children:"C++"}),Q.jsx("span",{className:"tech-tag",children:"ncurses"})]}),Q.jsx("p",{className:"project-description",children:"Roguelike Pokemon game with procedural generation and turn-based combat. Implements Dijkstra's algorithm for intelligent NPC pathfinding."})]})]})]})]}),Q.jsxs("section",{id:"skills",children:[Q.jsx("h2",{className:"section-header",children:"Technical Skills"}),Q.jsxs("div",{className:"skills-grid",children:[Q.jsxs("div",{className:"skill-category",children:[Q.jsx("h3",{children:"Languages"}),Q.jsxs("div",{className:"skill-items",children:[Q.jsx("span",{className:"skill-item",children:"Python"}),Q.jsx("span",{className:"skill-item",children:"Java"}),Q.jsx("span",{className:"skill-item",children:"C"}),Q.jsx("span",{className:"skill-item",children:"C++"}),Q.jsx("span",{className:"skill-item",children:"JavaScript"}),Q.jsx("span",{className:"skill-item",children:"Kotlin"})]})]}),Q.jsxs("div",{className:"skill-category",children:[Q.jsx("h3",{children:"Developer Tools"}),Q.jsxs("div",{className:"skill-items",children:[Q.jsx("span",{className:"skill-item",children:"Git"}),Q.jsx("span",{className:"skill-item",children:"VS Code"}),Q.jsx("span",{className:"skill-item",children:"WinDbg"}),Q.jsx("span",{className:"skill-item",children:"IntelliJ"}),Q.jsx("span",{className:"skill-item",children:"Android Studio"}),Q.jsx("span",{className:"skill-item",children:"GCP"})]})]}),Q.jsxs("div",{className:"skill-category",children:[Q.jsx("h3",{children:"Technologies"}),Q.jsxs("div",{className:"skill-items",children:[Q.jsx("span",{className:"skill-item",children:"React"}),Q.jsx("span",{className:"skill-item",children:"Node.js"}),Q.jsx("span",{className:"skill-item",children:"MongoDB"}),Q.jsx("span",{className:"skill-item",children:"Express"}),Q.jsx("span",{className:"skill-item",children:"Jetpack Compose"}),Q.jsx("span",{className:"skill-item",children:"WDF"}),Q.jsx("span",{className:"skill-item",children:"Linux"}),Q.jsx("span",{className:"skill-item",children:"HTML/CSS"})]})]})]})]}),Q.jsx("footer",{children:Q.jsxs("div",{className:"footer-content",children:[Q.jsxs("div",{className:"footer-links",children:[Q.jsx("a",{href:"mailto:bhattacharya.shubham123@gmail.com",className:"footer-link",children:"Email"}),Q.jsx("a",{href:"https://github.com/CyberDragon25",className:"footer-link",target:"_blank",rel:"noopener noreferrer",children:"GitHub"}),Q.jsx("a",{href:"https://linkedin.com/in/shubhambhattacharya",className:"footer-link",target:"_blank",rel:"noopener noreferrer",children:"LinkedIn"})]}),Q.jsx("p",{className:"copyright",children:"© 2025 Subham Bhattacharya. All rights reserved."})]})})]})]})};k0.createRoot(document.getElementById("root")).render(Q.jsx(A0.StrictMode,{children:Q.jsx(DE,{})}));
