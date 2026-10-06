var y_=Object.defineProperty;var S_=(t,e,n)=>e in t?y_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var An=(t,e,n)=>S_(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Vg(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var jg={exports:{}},hc={},Gg={exports:{}},He={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ua=Symbol.for("react.element"),M_=Symbol.for("react.portal"),E_=Symbol.for("react.fragment"),w_=Symbol.for("react.strict_mode"),T_=Symbol.for("react.profiler"),b_=Symbol.for("react.provider"),C_=Symbol.for("react.context"),A_=Symbol.for("react.forward_ref"),R_=Symbol.for("react.suspense"),N_=Symbol.for("react.memo"),P_=Symbol.for("react.lazy"),sp=Symbol.iterator;function L_(t){return t===null||typeof t!="object"?null:(t=sp&&t[sp]||t["@@iterator"],typeof t=="function"?t:null)}var Hg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Wg=Object.assign,Xg={};function oo(t,e,n){this.props=t,this.context=e,this.refs=Xg,this.updater=n||Hg}oo.prototype.isReactComponent={};oo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};oo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function $g(){}$g.prototype=oo.prototype;function Lh(t,e,n){this.props=t,this.context=e,this.refs=Xg,this.updater=n||Hg}var Dh=Lh.prototype=new $g;Dh.constructor=Lh;Wg(Dh,oo.prototype);Dh.isPureReactComponent=!0;var op=Array.isArray,Yg=Object.prototype.hasOwnProperty,Ih={current:null},qg={key:!0,ref:!0,__self:!0,__source:!0};function Kg(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Yg.call(e,i)&&!qg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ua,type:t,key:s,ref:o,props:r,_owner:Ih.current}}function D_(t,e){return{$$typeof:ua,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Uh(t){return typeof t=="object"&&t!==null&&t.$$typeof===ua}function I_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ap=/\/+/g;function Gc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?I_(""+t.key):e.toString(36)}function ul(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ua:case M_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Gc(o,0):i,op(r)?(n="",t!=null&&(n=t.replace(ap,"$&/")+"/"),ul(r,e,n,"",function(c){return c})):r!=null&&(Uh(r)&&(r=D_(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(ap,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",op(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Gc(s,a);o+=ul(s,e,n,l,r)}else if(l=L_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Gc(s,a++),o+=ul(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ya(t,e,n){if(t==null)return t;var i=[],r=0;return ul(t,i,"","",function(s){return e.call(n,s,r++)}),i}function U_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var nn={current:null},dl={transition:null},F_={ReactCurrentDispatcher:nn,ReactCurrentBatchConfig:dl,ReactCurrentOwner:Ih};function Zg(){throw Error("act(...) is not supported in production builds of React.")}He.Children={map:ya,forEach:function(t,e,n){ya(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ya(t,function(){e++}),e},toArray:function(t){return ya(t,function(e){return e})||[]},only:function(t){if(!Uh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};He.Component=oo;He.Fragment=E_;He.Profiler=T_;He.PureComponent=Lh;He.StrictMode=w_;He.Suspense=R_;He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F_;He.act=Zg;He.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Wg({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Ih.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Yg.call(e,l)&&!qg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:ua,type:t.type,key:r,ref:s,props:i,_owner:o}};He.createContext=function(t){return t={$$typeof:C_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:b_,_context:t},t.Consumer=t};He.createElement=Kg;He.createFactory=function(t){var e=Kg.bind(null,t);return e.type=t,e};He.createRef=function(){return{current:null}};He.forwardRef=function(t){return{$$typeof:A_,render:t}};He.isValidElement=Uh;He.lazy=function(t){return{$$typeof:P_,_payload:{_status:-1,_result:t},_init:U_}};He.memo=function(t,e){return{$$typeof:N_,type:t,compare:e===void 0?null:e}};He.startTransition=function(t){var e=dl.transition;dl.transition={};try{t()}finally{dl.transition=e}};He.unstable_act=Zg;He.useCallback=function(t,e){return nn.current.useCallback(t,e)};He.useContext=function(t){return nn.current.useContext(t)};He.useDebugValue=function(){};He.useDeferredValue=function(t){return nn.current.useDeferredValue(t)};He.useEffect=function(t,e){return nn.current.useEffect(t,e)};He.useId=function(){return nn.current.useId()};He.useImperativeHandle=function(t,e,n){return nn.current.useImperativeHandle(t,e,n)};He.useInsertionEffect=function(t,e){return nn.current.useInsertionEffect(t,e)};He.useLayoutEffect=function(t,e){return nn.current.useLayoutEffect(t,e)};He.useMemo=function(t,e){return nn.current.useMemo(t,e)};He.useReducer=function(t,e,n){return nn.current.useReducer(t,e,n)};He.useRef=function(t){return nn.current.useRef(t)};He.useState=function(t){return nn.current.useState(t)};He.useSyncExternalStore=function(t,e,n){return nn.current.useSyncExternalStore(t,e,n)};He.useTransition=function(){return nn.current.useTransition()};He.version="18.3.1";Gg.exports=He;var ce=Gg.exports;const Qg=Vg(ce);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k_=ce,O_=Symbol.for("react.element"),B_=Symbol.for("react.fragment"),z_=Object.prototype.hasOwnProperty,V_=k_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,j_={key:!0,ref:!0,__self:!0,__source:!0};function Jg(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)z_.call(e,i)&&!j_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:O_,type:t,key:s,ref:o,props:r,_owner:V_.current}}hc.Fragment=B_;hc.jsx=Jg;hc.jsxs=Jg;jg.exports=hc;var f=jg.exports,Ku={},ex={exports:{}},Tn={},tx={exports:{}},nx={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,$){var q=P.length;P.push($);e:for(;0<q;){var ne=q-1>>>1,xe=P[ne];if(0<r(xe,$))P[ne]=$,P[q]=xe,q=ne;else break e}}function n(P){return P.length===0?null:P[0]}function i(P){if(P.length===0)return null;var $=P[0],q=P.pop();if(q!==$){P[0]=q;e:for(var ne=0,xe=P.length,Le=xe>>>1;ne<Le;){var Y=2*(ne+1)-1,K=P[Y],le=Y+1,de=P[le];if(0>r(K,q))le<xe&&0>r(de,K)?(P[ne]=de,P[le]=q,ne=le):(P[ne]=K,P[Y]=q,ne=Y);else if(le<xe&&0>r(de,q))P[ne]=de,P[le]=q,ne=le;else break e}}return $}function r(P,$){var q=P.sortIndex-$.sortIndex;return q!==0?q:P.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,p=3,m=!1,x=!1,v=!1,g=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(P){for(var $=n(c);$!==null;){if($.callback===null)i(c);else if($.startTime<=P)i(c),$.sortIndex=$.expirationTime,e(l,$);else break;$=n(c)}}function S(P){if(v=!1,_(P),!x)if(n(l)!==null)x=!0,U(A);else{var $=n(c);$!==null&&V(S,$.startTime-P)}}function A(P,$){x=!1,v&&(v=!1,h(R),R=-1),m=!0;var q=p;try{for(_($),d=n(l);d!==null&&(!(d.expirationTime>$)||P&&!N());){var ne=d.callback;if(typeof ne=="function"){d.callback=null,p=d.priorityLevel;var xe=ne(d.expirationTime<=$);$=t.unstable_now(),typeof xe=="function"?d.callback=xe:d===n(l)&&i(l),_($)}else i(l);d=n(l)}if(d!==null)var Le=!0;else{var Y=n(c);Y!==null&&V(S,Y.startTime-$),Le=!1}return Le}finally{d=null,p=q,m=!1}}var C=!1,b=null,R=-1,E=5,M=-1;function N(){return!(t.unstable_now()-M<E)}function I(){if(b!==null){var P=t.unstable_now();M=P;var $=!0;try{$=b(!0,P)}finally{$?D():(C=!1,b=null)}}else C=!1}var D;if(typeof y=="function")D=function(){y(I)};else if(typeof MessageChannel<"u"){var O=new MessageChannel,k=O.port2;O.port1.onmessage=I,D=function(){k.postMessage(null)}}else D=function(){g(I,0)};function U(P){b=P,C||(C=!0,D())}function V(P,$){R=g(function(){P(t.unstable_now())},$)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){x||m||(x=!0,U(A))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(P){switch(p){case 1:case 2:case 3:var $=3;break;default:$=p}var q=p;p=$;try{return P()}finally{p=q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,$){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var q=p;p=P;try{return $()}finally{p=q}},t.unstable_scheduleCallback=function(P,$,q){var ne=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?ne+q:ne):q=ne,P){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=q+xe,P={id:u++,callback:$,priorityLevel:P,startTime:q,expirationTime:xe,sortIndex:-1},q>ne?(P.sortIndex=q,e(c,P),n(l)===null&&P===n(c)&&(v?(h(R),R=-1):v=!0,V(S,q-ne))):(P.sortIndex=xe,e(l,P),x||m||(x=!0,U(A))),P},t.unstable_shouldYield=N,t.unstable_wrapCallback=function(P){var $=p;return function(){var q=p;p=$;try{return P.apply(this,arguments)}finally{p=q}}}})(nx);tx.exports=nx;var G_=tx.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H_=ce,wn=G_;function ie(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ix=new Set,Ho={};function $r(t,e){Xs(t,e),Xs(t+"Capture",e)}function Xs(t,e){for(Ho[t]=e,t=0;t<e.length;t++)ix.add(e[t])}var Ti=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zu=Object.prototype.hasOwnProperty,W_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,lp={},cp={};function X_(t){return Zu.call(cp,t)?!0:Zu.call(lp,t)?!1:W_.test(t)?cp[t]=!0:(lp[t]=!0,!1)}function $_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Y_(t,e,n,i){if(e===null||typeof e>"u"||$_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function rn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var jt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){jt[t]=new rn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];jt[e]=new rn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){jt[t]=new rn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){jt[t]=new rn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){jt[t]=new rn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){jt[t]=new rn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){jt[t]=new rn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){jt[t]=new rn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){jt[t]=new rn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Fh=/[\-:]([a-z])/g;function kh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Fh,kh);jt[e]=new rn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Fh,kh);jt[e]=new rn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Fh,kh);jt[e]=new rn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){jt[t]=new rn(t,1,!1,t.toLowerCase(),null,!1,!1)});jt.xlinkHref=new rn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){jt[t]=new rn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Oh(t,e,n,i){var r=jt.hasOwnProperty(e)?jt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Y_(e,n,r,i)&&(n=null),i||r===null?X_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Pi=H_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Sa=Symbol.for("react.element"),ys=Symbol.for("react.portal"),Ss=Symbol.for("react.fragment"),Bh=Symbol.for("react.strict_mode"),Qu=Symbol.for("react.profiler"),rx=Symbol.for("react.provider"),sx=Symbol.for("react.context"),zh=Symbol.for("react.forward_ref"),Ju=Symbol.for("react.suspense"),ed=Symbol.for("react.suspense_list"),Vh=Symbol.for("react.memo"),ji=Symbol.for("react.lazy"),ox=Symbol.for("react.offscreen"),up=Symbol.iterator;function ho(t){return t===null||typeof t!="object"?null:(t=up&&t[up]||t["@@iterator"],typeof t=="function"?t:null)}var pt=Object.assign,Hc;function Co(t){if(Hc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Hc=e&&e[1]||""}return`
`+Hc+t}var Wc=!1;function Xc(t,e){if(!t||Wc)return"";Wc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Wc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Co(t):""}function q_(t){switch(t.tag){case 5:return Co(t.type);case 16:return Co("Lazy");case 13:return Co("Suspense");case 19:return Co("SuspenseList");case 0:case 2:case 15:return t=Xc(t.type,!1),t;case 11:return t=Xc(t.type.render,!1),t;case 1:return t=Xc(t.type,!0),t;default:return""}}function td(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ss:return"Fragment";case ys:return"Portal";case Qu:return"Profiler";case Bh:return"StrictMode";case Ju:return"Suspense";case ed:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case sx:return(t.displayName||"Context")+".Consumer";case rx:return(t._context.displayName||"Context")+".Provider";case zh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Vh:return e=t.displayName||null,e!==null?e:td(t.type)||"Memo";case ji:e=t._payload,t=t._init;try{return td(t(e))}catch{}}return null}function K_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return td(e);case 8:return e===Bh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ar(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ax(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Z_(t){var e=ax(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ma(t){t._valueTracker||(t._valueTracker=Z_(t))}function lx(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=ax(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Nl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function nd(t,e){var n=e.checked;return pt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function dp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=ar(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function cx(t,e){e=e.checked,e!=null&&Oh(t,"checked",e,!1)}function id(t,e){cx(t,e);var n=ar(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?rd(t,e.type,n):e.hasOwnProperty("defaultValue")&&rd(t,e.type,ar(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function hp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function rd(t,e,n){(e!=="number"||Nl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ao=Array.isArray;function Us(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+ar(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function sd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ie(91));return pt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function fp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ie(92));if(Ao(n)){if(1<n.length)throw Error(ie(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ar(n)}}function ux(t,e){var n=ar(e.value),i=ar(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function pp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function dx(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function od(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?dx(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ea,hx=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ea=Ea||document.createElement("div"),Ea.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ea.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Wo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Lo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Q_=["Webkit","ms","Moz","O"];Object.keys(Lo).forEach(function(t){Q_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Lo[e]=Lo[t]})});function fx(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Lo.hasOwnProperty(t)&&Lo[t]?(""+e).trim():e+"px"}function px(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=fx(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var J_=pt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ad(t,e){if(e){if(J_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ie(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ie(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ie(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ie(62))}}function ld(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cd=null;function jh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ud=null,Fs=null,ks=null;function mp(t){if(t=fa(t)){if(typeof ud!="function")throw Error(ie(280));var e=t.stateNode;e&&(e=xc(e),ud(t.stateNode,t.type,e))}}function mx(t){Fs?ks?ks.push(t):ks=[t]:Fs=t}function gx(){if(Fs){var t=Fs,e=ks;if(ks=Fs=null,mp(t),e)for(t=0;t<e.length;t++)mp(e[t])}}function xx(t,e){return t(e)}function vx(){}var $c=!1;function _x(t,e,n){if($c)return t(e,n);$c=!0;try{return xx(t,e,n)}finally{$c=!1,(Fs!==null||ks!==null)&&(vx(),gx())}}function Xo(t,e){var n=t.stateNode;if(n===null)return null;var i=xc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ie(231,e,typeof n));return n}var dd=!1;if(Ti)try{var fo={};Object.defineProperty(fo,"passive",{get:function(){dd=!0}}),window.addEventListener("test",fo,fo),window.removeEventListener("test",fo,fo)}catch{dd=!1}function ey(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var Do=!1,Pl=null,Ll=!1,hd=null,ty={onError:function(t){Do=!0,Pl=t}};function ny(t,e,n,i,r,s,o,a,l){Do=!1,Pl=null,ey.apply(ty,arguments)}function iy(t,e,n,i,r,s,o,a,l){if(ny.apply(this,arguments),Do){if(Do){var c=Pl;Do=!1,Pl=null}else throw Error(ie(198));Ll||(Ll=!0,hd=c)}}function Yr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function yx(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function gp(t){if(Yr(t)!==t)throw Error(ie(188))}function ry(t){var e=t.alternate;if(!e){if(e=Yr(t),e===null)throw Error(ie(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return gp(r),t;if(s===i)return gp(r),e;s=s.sibling}throw Error(ie(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ie(189))}}if(n.alternate!==i)throw Error(ie(190))}if(n.tag!==3)throw Error(ie(188));return n.stateNode.current===n?t:e}function Sx(t){return t=ry(t),t!==null?Mx(t):null}function Mx(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Mx(t);if(e!==null)return e;t=t.sibling}return null}var Ex=wn.unstable_scheduleCallback,xp=wn.unstable_cancelCallback,sy=wn.unstable_shouldYield,oy=wn.unstable_requestPaint,yt=wn.unstable_now,ay=wn.unstable_getCurrentPriorityLevel,Gh=wn.unstable_ImmediatePriority,wx=wn.unstable_UserBlockingPriority,Dl=wn.unstable_NormalPriority,ly=wn.unstable_LowPriority,Tx=wn.unstable_IdlePriority,fc=null,ai=null;function cy(t){if(ai&&typeof ai.onCommitFiberRoot=="function")try{ai.onCommitFiberRoot(fc,t,void 0,(t.current.flags&128)===128)}catch{}}var qn=Math.clz32?Math.clz32:hy,uy=Math.log,dy=Math.LN2;function hy(t){return t>>>=0,t===0?32:31-(uy(t)/dy|0)|0}var wa=64,Ta=4194304;function Ro(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Il(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Ro(a):(s&=o,s!==0&&(i=Ro(s)))}else o=n&~r,o!==0?i=Ro(o):s!==0&&(i=Ro(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-qn(e),r=1<<n,i|=t[n],e&=~r;return i}function fy(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function py(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-qn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=fy(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function fd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function bx(){var t=wa;return wa<<=1,!(wa&4194240)&&(wa=64),t}function Yc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function da(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-qn(e),t[e]=n}function my(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-qn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Hh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-qn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var nt=0;function Cx(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Ax,Wh,Rx,Nx,Px,pd=!1,ba=[],Zi=null,Qi=null,Ji=null,$o=new Map,Yo=new Map,Wi=[],gy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vp(t,e){switch(t){case"focusin":case"focusout":Zi=null;break;case"dragenter":case"dragleave":Qi=null;break;case"mouseover":case"mouseout":Ji=null;break;case"pointerover":case"pointerout":$o.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yo.delete(e.pointerId)}}function po(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=fa(e),e!==null&&Wh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function xy(t,e,n,i,r){switch(e){case"focusin":return Zi=po(Zi,t,e,n,i,r),!0;case"dragenter":return Qi=po(Qi,t,e,n,i,r),!0;case"mouseover":return Ji=po(Ji,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return $o.set(s,po($o.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Yo.set(s,po(Yo.get(s)||null,t,e,n,i,r)),!0}return!1}function Lx(t){var e=Rr(t.target);if(e!==null){var n=Yr(e);if(n!==null){if(e=n.tag,e===13){if(e=yx(n),e!==null){t.blockedOn=e,Px(t.priority,function(){Rx(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function hl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=md(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);cd=i,n.target.dispatchEvent(i),cd=null}else return e=fa(n),e!==null&&Wh(e),t.blockedOn=n,!1;e.shift()}return!0}function _p(t,e,n){hl(t)&&n.delete(e)}function vy(){pd=!1,Zi!==null&&hl(Zi)&&(Zi=null),Qi!==null&&hl(Qi)&&(Qi=null),Ji!==null&&hl(Ji)&&(Ji=null),$o.forEach(_p),Yo.forEach(_p)}function mo(t,e){t.blockedOn===e&&(t.blockedOn=null,pd||(pd=!0,wn.unstable_scheduleCallback(wn.unstable_NormalPriority,vy)))}function qo(t){function e(r){return mo(r,t)}if(0<ba.length){mo(ba[0],t);for(var n=1;n<ba.length;n++){var i=ba[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Zi!==null&&mo(Zi,t),Qi!==null&&mo(Qi,t),Ji!==null&&mo(Ji,t),$o.forEach(e),Yo.forEach(e),n=0;n<Wi.length;n++)i=Wi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Wi.length&&(n=Wi[0],n.blockedOn===null);)Lx(n),n.blockedOn===null&&Wi.shift()}var Os=Pi.ReactCurrentBatchConfig,Ul=!0;function _y(t,e,n,i){var r=nt,s=Os.transition;Os.transition=null;try{nt=1,Xh(t,e,n,i)}finally{nt=r,Os.transition=s}}function yy(t,e,n,i){var r=nt,s=Os.transition;Os.transition=null;try{nt=4,Xh(t,e,n,i)}finally{nt=r,Os.transition=s}}function Xh(t,e,n,i){if(Ul){var r=md(t,e,n,i);if(r===null)ru(t,e,i,Fl,n),vp(t,i);else if(xy(r,t,e,n,i))i.stopPropagation();else if(vp(t,i),e&4&&-1<gy.indexOf(t)){for(;r!==null;){var s=fa(r);if(s!==null&&Ax(s),s=md(t,e,n,i),s===null&&ru(t,e,i,Fl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else ru(t,e,i,null,n)}}var Fl=null;function md(t,e,n,i){if(Fl=null,t=jh(i),t=Rr(t),t!==null)if(e=Yr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=yx(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Fl=t,null}function Dx(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ay()){case Gh:return 1;case wx:return 4;case Dl:case ly:return 16;case Tx:return 536870912;default:return 16}default:return 16}}var Yi=null,$h=null,fl=null;function Ix(){if(fl)return fl;var t,e=$h,n=e.length,i,r="value"in Yi?Yi.value:Yi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return fl=r.slice(t,1<i?1-i:void 0)}function pl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ca(){return!0}function yp(){return!1}function bn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ca:yp,this.isPropagationStopped=yp,this}return pt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ca)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ca)},persist:function(){},isPersistent:Ca}),e}var ao={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yh=bn(ao),ha=pt({},ao,{view:0,detail:0}),Sy=bn(ha),qc,Kc,go,pc=pt({},ha,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==go&&(go&&t.type==="mousemove"?(qc=t.screenX-go.screenX,Kc=t.screenY-go.screenY):Kc=qc=0,go=t),qc)},movementY:function(t){return"movementY"in t?t.movementY:Kc}}),Sp=bn(pc),My=pt({},pc,{dataTransfer:0}),Ey=bn(My),wy=pt({},ha,{relatedTarget:0}),Zc=bn(wy),Ty=pt({},ao,{animationName:0,elapsedTime:0,pseudoElement:0}),by=bn(Ty),Cy=pt({},ao,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ay=bn(Cy),Ry=pt({},ao,{data:0}),Mp=bn(Ry),Ny={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Py={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ly={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Dy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Ly[t])?!!e[t]:!1}function qh(){return Dy}var Iy=pt({},ha,{key:function(t){if(t.key){var e=Ny[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=pl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Py[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qh,charCode:function(t){return t.type==="keypress"?pl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?pl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Uy=bn(Iy),Fy=pt({},pc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ep=bn(Fy),ky=pt({},ha,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qh}),Oy=bn(ky),By=pt({},ao,{propertyName:0,elapsedTime:0,pseudoElement:0}),zy=bn(By),Vy=pt({},pc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),jy=bn(Vy),Gy=[9,13,27,32],Kh=Ti&&"CompositionEvent"in window,Io=null;Ti&&"documentMode"in document&&(Io=document.documentMode);var Hy=Ti&&"TextEvent"in window&&!Io,Ux=Ti&&(!Kh||Io&&8<Io&&11>=Io),wp=" ",Tp=!1;function Fx(t,e){switch(t){case"keyup":return Gy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kx(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ms=!1;function Wy(t,e){switch(t){case"compositionend":return kx(e);case"keypress":return e.which!==32?null:(Tp=!0,wp);case"textInput":return t=e.data,t===wp&&Tp?null:t;default:return null}}function Xy(t,e){if(Ms)return t==="compositionend"||!Kh&&Fx(t,e)?(t=Ix(),fl=$h=Yi=null,Ms=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ux&&e.locale!=="ko"?null:e.data;default:return null}}var $y={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!$y[t.type]:e==="textarea"}function Ox(t,e,n,i){mx(i),e=kl(e,"onChange"),0<e.length&&(n=new Yh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Uo=null,Ko=null;function Yy(t){qx(t,0)}function mc(t){var e=Ts(t);if(lx(e))return t}function qy(t,e){if(t==="change")return e}var Bx=!1;if(Ti){var Qc;if(Ti){var Jc="oninput"in document;if(!Jc){var Cp=document.createElement("div");Cp.setAttribute("oninput","return;"),Jc=typeof Cp.oninput=="function"}Qc=Jc}else Qc=!1;Bx=Qc&&(!document.documentMode||9<document.documentMode)}function Ap(){Uo&&(Uo.detachEvent("onpropertychange",zx),Ko=Uo=null)}function zx(t){if(t.propertyName==="value"&&mc(Ko)){var e=[];Ox(e,Ko,t,jh(t)),_x(Yy,e)}}function Ky(t,e,n){t==="focusin"?(Ap(),Uo=e,Ko=n,Uo.attachEvent("onpropertychange",zx)):t==="focusout"&&Ap()}function Zy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return mc(Ko)}function Qy(t,e){if(t==="click")return mc(e)}function Jy(t,e){if(t==="input"||t==="change")return mc(e)}function e1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Zn=typeof Object.is=="function"?Object.is:e1;function Zo(t,e){if(Zn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Zu.call(e,r)||!Zn(t[r],e[r]))return!1}return!0}function Rp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Np(t,e){var n=Rp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Rp(n)}}function Vx(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Vx(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function jx(){for(var t=window,e=Nl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Nl(t.document)}return e}function Zh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function t1(t){var e=jx(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Vx(n.ownerDocument.documentElement,n)){if(i!==null&&Zh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Np(n,s);var o=Np(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var n1=Ti&&"documentMode"in document&&11>=document.documentMode,Es=null,gd=null,Fo=null,xd=!1;function Pp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;xd||Es==null||Es!==Nl(i)||(i=Es,"selectionStart"in i&&Zh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Fo&&Zo(Fo,i)||(Fo=i,i=kl(gd,"onSelect"),0<i.length&&(e=new Yh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Es)))}function Aa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ws={animationend:Aa("Animation","AnimationEnd"),animationiteration:Aa("Animation","AnimationIteration"),animationstart:Aa("Animation","AnimationStart"),transitionend:Aa("Transition","TransitionEnd")},eu={},Gx={};Ti&&(Gx=document.createElement("div").style,"AnimationEvent"in window||(delete ws.animationend.animation,delete ws.animationiteration.animation,delete ws.animationstart.animation),"TransitionEvent"in window||delete ws.transitionend.transition);function gc(t){if(eu[t])return eu[t];if(!ws[t])return t;var e=ws[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Gx)return eu[t]=e[n];return t}var Hx=gc("animationend"),Wx=gc("animationiteration"),Xx=gc("animationstart"),$x=gc("transitionend"),Yx=new Map,Lp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function hr(t,e){Yx.set(t,e),$r(e,[t])}for(var tu=0;tu<Lp.length;tu++){var nu=Lp[tu],i1=nu.toLowerCase(),r1=nu[0].toUpperCase()+nu.slice(1);hr(i1,"on"+r1)}hr(Hx,"onAnimationEnd");hr(Wx,"onAnimationIteration");hr(Xx,"onAnimationStart");hr("dblclick","onDoubleClick");hr("focusin","onFocus");hr("focusout","onBlur");hr($x,"onTransitionEnd");Xs("onMouseEnter",["mouseout","mouseover"]);Xs("onMouseLeave",["mouseout","mouseover"]);Xs("onPointerEnter",["pointerout","pointerover"]);Xs("onPointerLeave",["pointerout","pointerover"]);$r("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$r("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$r("onBeforeInput",["compositionend","keypress","textInput","paste"]);$r("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$r("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$r("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var No="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),s1=new Set("cancel close invalid load scroll toggle".split(" ").concat(No));function Dp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,iy(i,e,void 0,t),t.currentTarget=null}function qx(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Dp(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Dp(r,a,c),s=l}}}if(Ll)throw t=hd,Ll=!1,hd=null,t}function st(t,e){var n=e[Md];n===void 0&&(n=e[Md]=new Set);var i=t+"__bubble";n.has(i)||(Kx(e,t,2,!1),n.add(i))}function iu(t,e,n){var i=0;e&&(i|=4),Kx(n,t,i,e)}var Ra="_reactListening"+Math.random().toString(36).slice(2);function Qo(t){if(!t[Ra]){t[Ra]=!0,ix.forEach(function(n){n!=="selectionchange"&&(s1.has(n)||iu(n,!1,t),iu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ra]||(e[Ra]=!0,iu("selectionchange",!1,e))}}function Kx(t,e,n,i){switch(Dx(e)){case 1:var r=_y;break;case 4:r=yy;break;default:r=Xh}n=r.bind(null,e,n,t),r=void 0,!dd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function ru(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Rr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}_x(function(){var c=s,u=jh(n),d=[];e:{var p=Yx.get(t);if(p!==void 0){var m=Yh,x=t;switch(t){case"keypress":if(pl(n)===0)break e;case"keydown":case"keyup":m=Uy;break;case"focusin":x="focus",m=Zc;break;case"focusout":x="blur",m=Zc;break;case"beforeblur":case"afterblur":m=Zc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Sp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Ey;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Oy;break;case Hx:case Wx:case Xx:m=by;break;case $x:m=zy;break;case"scroll":m=Sy;break;case"wheel":m=jy;break;case"copy":case"cut":case"paste":m=Ay;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Ep}var v=(e&4)!==0,g=!v&&t==="scroll",h=v?p!==null?p+"Capture":null:p;v=[];for(var y=c,_;y!==null;){_=y;var S=_.stateNode;if(_.tag===5&&S!==null&&(_=S,h!==null&&(S=Xo(y,h),S!=null&&v.push(Jo(y,S,_)))),g)break;y=y.return}0<v.length&&(p=new m(p,x,null,n,u),d.push({event:p,listeners:v}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",p&&n!==cd&&(x=n.relatedTarget||n.fromElement)&&(Rr(x)||x[bi]))break e;if((m||p)&&(p=u.window===u?u:(p=u.ownerDocument)?p.defaultView||p.parentWindow:window,m?(x=n.relatedTarget||n.toElement,m=c,x=x?Rr(x):null,x!==null&&(g=Yr(x),x!==g||x.tag!==5&&x.tag!==6)&&(x=null)):(m=null,x=c),m!==x)){if(v=Sp,S="onMouseLeave",h="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(v=Ep,S="onPointerLeave",h="onPointerEnter",y="pointer"),g=m==null?p:Ts(m),_=x==null?p:Ts(x),p=new v(S,y+"leave",m,n,u),p.target=g,p.relatedTarget=_,S=null,Rr(u)===c&&(v=new v(h,y+"enter",x,n,u),v.target=_,v.relatedTarget=g,S=v),g=S,m&&x)t:{for(v=m,h=x,y=0,_=v;_;_=Qr(_))y++;for(_=0,S=h;S;S=Qr(S))_++;for(;0<y-_;)v=Qr(v),y--;for(;0<_-y;)h=Qr(h),_--;for(;y--;){if(v===h||h!==null&&v===h.alternate)break t;v=Qr(v),h=Qr(h)}v=null}else v=null;m!==null&&Ip(d,p,m,v,!1),x!==null&&g!==null&&Ip(d,g,x,v,!0)}}e:{if(p=c?Ts(c):window,m=p.nodeName&&p.nodeName.toLowerCase(),m==="select"||m==="input"&&p.type==="file")var A=qy;else if(bp(p))if(Bx)A=Jy;else{A=Zy;var C=Ky}else(m=p.nodeName)&&m.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(A=Qy);if(A&&(A=A(t,c))){Ox(d,A,n,u);break e}C&&C(t,p,c),t==="focusout"&&(C=p._wrapperState)&&C.controlled&&p.type==="number"&&rd(p,"number",p.value)}switch(C=c?Ts(c):window,t){case"focusin":(bp(C)||C.contentEditable==="true")&&(Es=C,gd=c,Fo=null);break;case"focusout":Fo=gd=Es=null;break;case"mousedown":xd=!0;break;case"contextmenu":case"mouseup":case"dragend":xd=!1,Pp(d,n,u);break;case"selectionchange":if(n1)break;case"keydown":case"keyup":Pp(d,n,u)}var b;if(Kh)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Ms?Fx(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(Ux&&n.locale!=="ko"&&(Ms||R!=="onCompositionStart"?R==="onCompositionEnd"&&Ms&&(b=Ix()):(Yi=u,$h="value"in Yi?Yi.value:Yi.textContent,Ms=!0)),C=kl(c,R),0<C.length&&(R=new Mp(R,t,null,n,u),d.push({event:R,listeners:C}),b?R.data=b:(b=kx(n),b!==null&&(R.data=b)))),(b=Hy?Wy(t,n):Xy(t,n))&&(c=kl(c,"onBeforeInput"),0<c.length&&(u=new Mp("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=b))}qx(d,e)})}function Jo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function kl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Xo(t,n),s!=null&&i.unshift(Jo(t,s,r)),s=Xo(t,e),s!=null&&i.push(Jo(t,s,r))),t=t.return}return i}function Qr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ip(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Xo(n,s),l!=null&&o.unshift(Jo(n,l,a))):r||(l=Xo(n,s),l!=null&&o.push(Jo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var o1=/\r\n?/g,a1=/\u0000|\uFFFD/g;function Up(t){return(typeof t=="string"?t:""+t).replace(o1,`
`).replace(a1,"")}function Na(t,e,n){if(e=Up(e),Up(t)!==e&&n)throw Error(ie(425))}function Ol(){}var vd=null,_d=null;function yd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Sd=typeof setTimeout=="function"?setTimeout:void 0,l1=typeof clearTimeout=="function"?clearTimeout:void 0,Fp=typeof Promise=="function"?Promise:void 0,c1=typeof queueMicrotask=="function"?queueMicrotask:typeof Fp<"u"?function(t){return Fp.resolve(null).then(t).catch(u1)}:Sd;function u1(t){setTimeout(function(){throw t})}function su(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),qo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);qo(e)}function er(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function kp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var lo=Math.random().toString(36).slice(2),si="__reactFiber$"+lo,ea="__reactProps$"+lo,bi="__reactContainer$"+lo,Md="__reactEvents$"+lo,d1="__reactListeners$"+lo,h1="__reactHandles$"+lo;function Rr(t){var e=t[si];if(e)return e;for(var n=t.parentNode;n;){if(e=n[bi]||n[si]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=kp(t);t!==null;){if(n=t[si])return n;t=kp(t)}return e}t=n,n=t.parentNode}return null}function fa(t){return t=t[si]||t[bi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ts(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ie(33))}function xc(t){return t[ea]||null}var Ed=[],bs=-1;function fr(t){return{current:t}}function lt(t){0>bs||(t.current=Ed[bs],Ed[bs]=null,bs--)}function rt(t,e){bs++,Ed[bs]=t.current,t.current=e}var lr={},Yt=fr(lr),hn=fr(!1),Br=lr;function $s(t,e){var n=t.type.contextTypes;if(!n)return lr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function fn(t){return t=t.childContextTypes,t!=null}function Bl(){lt(hn),lt(Yt)}function Op(t,e,n){if(Yt.current!==lr)throw Error(ie(168));rt(Yt,e),rt(hn,n)}function Zx(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ie(108,K_(t)||"Unknown",r));return pt({},n,i)}function zl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||lr,Br=Yt.current,rt(Yt,t),rt(hn,hn.current),!0}function Bp(t,e,n){var i=t.stateNode;if(!i)throw Error(ie(169));n?(t=Zx(t,e,Br),i.__reactInternalMemoizedMergedChildContext=t,lt(hn),lt(Yt),rt(Yt,t)):lt(hn),rt(hn,n)}var _i=null,vc=!1,ou=!1;function Qx(t){_i===null?_i=[t]:_i.push(t)}function f1(t){vc=!0,Qx(t)}function pr(){if(!ou&&_i!==null){ou=!0;var t=0,e=nt;try{var n=_i;for(nt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}_i=null,vc=!1}catch(r){throw _i!==null&&(_i=_i.slice(t+1)),Ex(Gh,pr),r}finally{nt=e,ou=!1}}return null}var Cs=[],As=0,Vl=null,jl=0,Nn=[],Pn=0,zr=null,yi=1,Si="";function wr(t,e){Cs[As++]=jl,Cs[As++]=Vl,Vl=t,jl=e}function Jx(t,e,n){Nn[Pn++]=yi,Nn[Pn++]=Si,Nn[Pn++]=zr,zr=t;var i=yi;t=Si;var r=32-qn(i)-1;i&=~(1<<r),n+=1;var s=32-qn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,yi=1<<32-qn(e)+r|n<<r|i,Si=s+t}else yi=1<<s|n<<r|i,Si=t}function Qh(t){t.return!==null&&(wr(t,1),Jx(t,1,0))}function Jh(t){for(;t===Vl;)Vl=Cs[--As],Cs[As]=null,jl=Cs[--As],Cs[As]=null;for(;t===zr;)zr=Nn[--Pn],Nn[Pn]=null,Si=Nn[--Pn],Nn[Pn]=null,yi=Nn[--Pn],Nn[Pn]=null}var En=null,Mn=null,ct=!1,Xn=null;function e0(t,e){var n=Dn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function zp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,En=t,Mn=er(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,En=t,Mn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=zr!==null?{id:yi,overflow:Si}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Dn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,En=t,Mn=null,!0):!1;default:return!1}}function wd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Td(t){if(ct){var e=Mn;if(e){var n=e;if(!zp(t,e)){if(wd(t))throw Error(ie(418));e=er(n.nextSibling);var i=En;e&&zp(t,e)?e0(i,n):(t.flags=t.flags&-4097|2,ct=!1,En=t)}}else{if(wd(t))throw Error(ie(418));t.flags=t.flags&-4097|2,ct=!1,En=t}}}function Vp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;En=t}function Pa(t){if(t!==En)return!1;if(!ct)return Vp(t),ct=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!yd(t.type,t.memoizedProps)),e&&(e=Mn)){if(wd(t))throw t0(),Error(ie(418));for(;e;)e0(t,e),e=er(e.nextSibling)}if(Vp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ie(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Mn=er(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Mn=null}}else Mn=En?er(t.stateNode.nextSibling):null;return!0}function t0(){for(var t=Mn;t;)t=er(t.nextSibling)}function Ys(){Mn=En=null,ct=!1}function ef(t){Xn===null?Xn=[t]:Xn.push(t)}var p1=Pi.ReactCurrentBatchConfig;function xo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ie(309));var i=n.stateNode}if(!i)throw Error(ie(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ie(284));if(!n._owner)throw Error(ie(290,t))}return t}function La(t,e){throw t=Object.prototype.toString.call(e),Error(ie(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function jp(t){var e=t._init;return e(t._payload)}function n0(t){function e(h,y){if(t){var _=h.deletions;_===null?(h.deletions=[y],h.flags|=16):_.push(y)}}function n(h,y){if(!t)return null;for(;y!==null;)e(h,y),y=y.sibling;return null}function i(h,y){for(h=new Map;y!==null;)y.key!==null?h.set(y.key,y):h.set(y.index,y),y=y.sibling;return h}function r(h,y){return h=rr(h,y),h.index=0,h.sibling=null,h}function s(h,y,_){return h.index=_,t?(_=h.alternate,_!==null?(_=_.index,_<y?(h.flags|=2,y):_):(h.flags|=2,y)):(h.flags|=1048576,y)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,y,_,S){return y===null||y.tag!==6?(y=fu(_,h.mode,S),y.return=h,y):(y=r(y,_),y.return=h,y)}function l(h,y,_,S){var A=_.type;return A===Ss?u(h,y,_.props.children,S,_.key):y!==null&&(y.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===ji&&jp(A)===y.type)?(S=r(y,_.props),S.ref=xo(h,y,_),S.return=h,S):(S=Sl(_.type,_.key,_.props,null,h.mode,S),S.ref=xo(h,y,_),S.return=h,S)}function c(h,y,_,S){return y===null||y.tag!==4||y.stateNode.containerInfo!==_.containerInfo||y.stateNode.implementation!==_.implementation?(y=pu(_,h.mode,S),y.return=h,y):(y=r(y,_.children||[]),y.return=h,y)}function u(h,y,_,S,A){return y===null||y.tag!==7?(y=Fr(_,h.mode,S,A),y.return=h,y):(y=r(y,_),y.return=h,y)}function d(h,y,_){if(typeof y=="string"&&y!==""||typeof y=="number")return y=fu(""+y,h.mode,_),y.return=h,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Sa:return _=Sl(y.type,y.key,y.props,null,h.mode,_),_.ref=xo(h,null,y),_.return=h,_;case ys:return y=pu(y,h.mode,_),y.return=h,y;case ji:var S=y._init;return d(h,S(y._payload),_)}if(Ao(y)||ho(y))return y=Fr(y,h.mode,_,null),y.return=h,y;La(h,y)}return null}function p(h,y,_,S){var A=y!==null?y.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return A!==null?null:a(h,y,""+_,S);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Sa:return _.key===A?l(h,y,_,S):null;case ys:return _.key===A?c(h,y,_,S):null;case ji:return A=_._init,p(h,y,A(_._payload),S)}if(Ao(_)||ho(_))return A!==null?null:u(h,y,_,S,null);La(h,_)}return null}function m(h,y,_,S,A){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(_)||null,a(y,h,""+S,A);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Sa:return h=h.get(S.key===null?_:S.key)||null,l(y,h,S,A);case ys:return h=h.get(S.key===null?_:S.key)||null,c(y,h,S,A);case ji:var C=S._init;return m(h,y,_,C(S._payload),A)}if(Ao(S)||ho(S))return h=h.get(_)||null,u(y,h,S,A,null);La(y,S)}return null}function x(h,y,_,S){for(var A=null,C=null,b=y,R=y=0,E=null;b!==null&&R<_.length;R++){b.index>R?(E=b,b=null):E=b.sibling;var M=p(h,b,_[R],S);if(M===null){b===null&&(b=E);break}t&&b&&M.alternate===null&&e(h,b),y=s(M,y,R),C===null?A=M:C.sibling=M,C=M,b=E}if(R===_.length)return n(h,b),ct&&wr(h,R),A;if(b===null){for(;R<_.length;R++)b=d(h,_[R],S),b!==null&&(y=s(b,y,R),C===null?A=b:C.sibling=b,C=b);return ct&&wr(h,R),A}for(b=i(h,b);R<_.length;R++)E=m(b,h,R,_[R],S),E!==null&&(t&&E.alternate!==null&&b.delete(E.key===null?R:E.key),y=s(E,y,R),C===null?A=E:C.sibling=E,C=E);return t&&b.forEach(function(N){return e(h,N)}),ct&&wr(h,R),A}function v(h,y,_,S){var A=ho(_);if(typeof A!="function")throw Error(ie(150));if(_=A.call(_),_==null)throw Error(ie(151));for(var C=A=null,b=y,R=y=0,E=null,M=_.next();b!==null&&!M.done;R++,M=_.next()){b.index>R?(E=b,b=null):E=b.sibling;var N=p(h,b,M.value,S);if(N===null){b===null&&(b=E);break}t&&b&&N.alternate===null&&e(h,b),y=s(N,y,R),C===null?A=N:C.sibling=N,C=N,b=E}if(M.done)return n(h,b),ct&&wr(h,R),A;if(b===null){for(;!M.done;R++,M=_.next())M=d(h,M.value,S),M!==null&&(y=s(M,y,R),C===null?A=M:C.sibling=M,C=M);return ct&&wr(h,R),A}for(b=i(h,b);!M.done;R++,M=_.next())M=m(b,h,R,M.value,S),M!==null&&(t&&M.alternate!==null&&b.delete(M.key===null?R:M.key),y=s(M,y,R),C===null?A=M:C.sibling=M,C=M);return t&&b.forEach(function(I){return e(h,I)}),ct&&wr(h,R),A}function g(h,y,_,S){if(typeof _=="object"&&_!==null&&_.type===Ss&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Sa:e:{for(var A=_.key,C=y;C!==null;){if(C.key===A){if(A=_.type,A===Ss){if(C.tag===7){n(h,C.sibling),y=r(C,_.props.children),y.return=h,h=y;break e}}else if(C.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===ji&&jp(A)===C.type){n(h,C.sibling),y=r(C,_.props),y.ref=xo(h,C,_),y.return=h,h=y;break e}n(h,C);break}else e(h,C);C=C.sibling}_.type===Ss?(y=Fr(_.props.children,h.mode,S,_.key),y.return=h,h=y):(S=Sl(_.type,_.key,_.props,null,h.mode,S),S.ref=xo(h,y,_),S.return=h,h=S)}return o(h);case ys:e:{for(C=_.key;y!==null;){if(y.key===C)if(y.tag===4&&y.stateNode.containerInfo===_.containerInfo&&y.stateNode.implementation===_.implementation){n(h,y.sibling),y=r(y,_.children||[]),y.return=h,h=y;break e}else{n(h,y);break}else e(h,y);y=y.sibling}y=pu(_,h.mode,S),y.return=h,h=y}return o(h);case ji:return C=_._init,g(h,y,C(_._payload),S)}if(Ao(_))return x(h,y,_,S);if(ho(_))return v(h,y,_,S);La(h,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,y!==null&&y.tag===6?(n(h,y.sibling),y=r(y,_),y.return=h,h=y):(n(h,y),y=fu(_,h.mode,S),y.return=h,h=y),o(h)):n(h,y)}return g}var qs=n0(!0),i0=n0(!1),Gl=fr(null),Hl=null,Rs=null,tf=null;function nf(){tf=Rs=Hl=null}function rf(t){var e=Gl.current;lt(Gl),t._currentValue=e}function bd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Bs(t,e){Hl=t,tf=Rs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(cn=!0),t.firstContext=null)}function Fn(t){var e=t._currentValue;if(tf!==t)if(t={context:t,memoizedValue:e,next:null},Rs===null){if(Hl===null)throw Error(ie(308));Rs=t,Hl.dependencies={lanes:0,firstContext:t}}else Rs=Rs.next=t;return e}var Nr=null;function sf(t){Nr===null?Nr=[t]:Nr.push(t)}function r0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,sf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ci(t,i)}function Ci(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Gi=!1;function of(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function s0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function wi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function tr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ye&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ci(t,n)}return r=i.interleaved,r===null?(e.next=e,sf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ci(t,n)}function ml(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Hh(t,n)}}function Gp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Wl(t,e,n,i){var r=t.updateQueue;Gi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,u=c=l=null,a=s;do{var p=a.lane,m=a.eventTime;if((i&p)===p){u!==null&&(u=u.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,v=a;switch(p=e,m=n,v.tag){case 1:if(x=v.payload,typeof x=="function"){d=x.call(m,d,p);break e}d=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=v.payload,p=typeof x=="function"?x.call(m,d,p):x,p==null)break e;d=pt({},d,p);break e;case 2:Gi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,p=r.effects,p===null?r.effects=[a]:p.push(a))}else m={eventTime:m,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=m,l=d):u=u.next=m,o|=p;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;p=a,a=p.next,p.next=null,r.lastBaseUpdate=p,r.shared.pending=null}}while(!0);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);jr|=o,t.lanes=o,t.memoizedState=d}}function Hp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ie(191,r));r.call(i)}}}var pa={},li=fr(pa),ta=fr(pa),na=fr(pa);function Pr(t){if(t===pa)throw Error(ie(174));return t}function af(t,e){switch(rt(na,e),rt(ta,t),rt(li,pa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:od(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=od(e,t)}lt(li),rt(li,e)}function Ks(){lt(li),lt(ta),lt(na)}function o0(t){Pr(na.current);var e=Pr(li.current),n=od(e,t.type);e!==n&&(rt(ta,t),rt(li,n))}function lf(t){ta.current===t&&(lt(li),lt(ta))}var ht=fr(0);function Xl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var au=[];function cf(){for(var t=0;t<au.length;t++)au[t]._workInProgressVersionPrimary=null;au.length=0}var gl=Pi.ReactCurrentDispatcher,lu=Pi.ReactCurrentBatchConfig,Vr=0,ft=null,Ct=null,Dt=null,$l=!1,ko=!1,ia=0,m1=0;function Gt(){throw Error(ie(321))}function uf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Zn(t[n],e[n]))return!1;return!0}function df(t,e,n,i,r,s){if(Vr=s,ft=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,gl.current=t===null||t.memoizedState===null?_1:y1,t=n(i,r),ko){s=0;do{if(ko=!1,ia=0,25<=s)throw Error(ie(301));s+=1,Dt=Ct=null,e.updateQueue=null,gl.current=S1,t=n(i,r)}while(ko)}if(gl.current=Yl,e=Ct!==null&&Ct.next!==null,Vr=0,Dt=Ct=ft=null,$l=!1,e)throw Error(ie(300));return t}function hf(){var t=ia!==0;return ia=0,t}function ii(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dt===null?ft.memoizedState=Dt=t:Dt=Dt.next=t,Dt}function kn(){if(Ct===null){var t=ft.alternate;t=t!==null?t.memoizedState:null}else t=Ct.next;var e=Dt===null?ft.memoizedState:Dt.next;if(e!==null)Dt=e,Ct=t;else{if(t===null)throw Error(ie(310));Ct=t,t={memoizedState:Ct.memoizedState,baseState:Ct.baseState,baseQueue:Ct.baseQueue,queue:Ct.queue,next:null},Dt===null?ft.memoizedState=Dt=t:Dt=Dt.next=t}return Dt}function ra(t,e){return typeof e=="function"?e(t):e}function cu(t){var e=kn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=Ct,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((Vr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,ft.lanes|=u,jr|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Zn(i,e.memoizedState)||(cn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ft.lanes|=s,jr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function uu(t){var e=kn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Zn(s,e.memoizedState)||(cn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function a0(){}function l0(t,e){var n=ft,i=kn(),r=e(),s=!Zn(i.memoizedState,r);if(s&&(i.memoizedState=r,cn=!0),i=i.queue,ff(d0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Dt!==null&&Dt.memoizedState.tag&1){if(n.flags|=2048,sa(9,u0.bind(null,n,i,r,e),void 0,null),It===null)throw Error(ie(349));Vr&30||c0(n,e,r)}return r}function c0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ft.updateQueue,e===null?(e={lastEffect:null,stores:null},ft.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function u0(t,e,n,i){e.value=n,e.getSnapshot=i,h0(e)&&f0(t)}function d0(t,e,n){return n(function(){h0(e)&&f0(t)})}function h0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Zn(t,n)}catch{return!0}}function f0(t){var e=Ci(t,1);e!==null&&Kn(e,t,1,-1)}function Wp(t){var e=ii();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:t},e.queue=t,t=t.dispatch=v1.bind(null,ft,t),[e.memoizedState,t]}function sa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ft.updateQueue,e===null?(e={lastEffect:null,stores:null},ft.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function p0(){return kn().memoizedState}function xl(t,e,n,i){var r=ii();ft.flags|=t,r.memoizedState=sa(1|e,n,void 0,i===void 0?null:i)}function _c(t,e,n,i){var r=kn();i=i===void 0?null:i;var s=void 0;if(Ct!==null){var o=Ct.memoizedState;if(s=o.destroy,i!==null&&uf(i,o.deps)){r.memoizedState=sa(e,n,s,i);return}}ft.flags|=t,r.memoizedState=sa(1|e,n,s,i)}function Xp(t,e){return xl(8390656,8,t,e)}function ff(t,e){return _c(2048,8,t,e)}function m0(t,e){return _c(4,2,t,e)}function g0(t,e){return _c(4,4,t,e)}function x0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function v0(t,e,n){return n=n!=null?n.concat([t]):null,_c(4,4,x0.bind(null,e,t),n)}function pf(){}function _0(t,e){var n=kn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&uf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function y0(t,e){var n=kn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&uf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function S0(t,e,n){return Vr&21?(Zn(n,e)||(n=bx(),ft.lanes|=n,jr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,cn=!0),t.memoizedState=n)}function g1(t,e){var n=nt;nt=n!==0&&4>n?n:4,t(!0);var i=lu.transition;lu.transition={};try{t(!1),e()}finally{nt=n,lu.transition=i}}function M0(){return kn().memoizedState}function x1(t,e,n){var i=ir(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},E0(t))w0(e,n);else if(n=r0(t,e,n,i),n!==null){var r=en();Kn(n,t,i,r),T0(n,e,i)}}function v1(t,e,n){var i=ir(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(E0(t))w0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Zn(a,o)){var l=e.interleaved;l===null?(r.next=r,sf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=r0(t,e,r,i),n!==null&&(r=en(),Kn(n,t,i,r),T0(n,e,i))}}function E0(t){var e=t.alternate;return t===ft||e!==null&&e===ft}function w0(t,e){ko=$l=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function T0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Hh(t,n)}}var Yl={readContext:Fn,useCallback:Gt,useContext:Gt,useEffect:Gt,useImperativeHandle:Gt,useInsertionEffect:Gt,useLayoutEffect:Gt,useMemo:Gt,useReducer:Gt,useRef:Gt,useState:Gt,useDebugValue:Gt,useDeferredValue:Gt,useTransition:Gt,useMutableSource:Gt,useSyncExternalStore:Gt,useId:Gt,unstable_isNewReconciler:!1},_1={readContext:Fn,useCallback:function(t,e){return ii().memoizedState=[t,e===void 0?null:e],t},useContext:Fn,useEffect:Xp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,xl(4194308,4,x0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return xl(4194308,4,t,e)},useInsertionEffect:function(t,e){return xl(4,2,t,e)},useMemo:function(t,e){var n=ii();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ii();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=x1.bind(null,ft,t),[i.memoizedState,t]},useRef:function(t){var e=ii();return t={current:t},e.memoizedState=t},useState:Wp,useDebugValue:pf,useDeferredValue:function(t){return ii().memoizedState=t},useTransition:function(){var t=Wp(!1),e=t[0];return t=g1.bind(null,t[1]),ii().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ft,r=ii();if(ct){if(n===void 0)throw Error(ie(407));n=n()}else{if(n=e(),It===null)throw Error(ie(349));Vr&30||c0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Xp(d0.bind(null,i,s,t),[t]),i.flags|=2048,sa(9,u0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ii(),e=It.identifierPrefix;if(ct){var n=Si,i=yi;n=(i&~(1<<32-qn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ia++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=m1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},y1={readContext:Fn,useCallback:_0,useContext:Fn,useEffect:ff,useImperativeHandle:v0,useInsertionEffect:m0,useLayoutEffect:g0,useMemo:y0,useReducer:cu,useRef:p0,useState:function(){return cu(ra)},useDebugValue:pf,useDeferredValue:function(t){var e=kn();return S0(e,Ct.memoizedState,t)},useTransition:function(){var t=cu(ra)[0],e=kn().memoizedState;return[t,e]},useMutableSource:a0,useSyncExternalStore:l0,useId:M0,unstable_isNewReconciler:!1},S1={readContext:Fn,useCallback:_0,useContext:Fn,useEffect:ff,useImperativeHandle:v0,useInsertionEffect:m0,useLayoutEffect:g0,useMemo:y0,useReducer:uu,useRef:p0,useState:function(){return uu(ra)},useDebugValue:pf,useDeferredValue:function(t){var e=kn();return Ct===null?e.memoizedState=t:S0(e,Ct.memoizedState,t)},useTransition:function(){var t=uu(ra)[0],e=kn().memoizedState;return[t,e]},useMutableSource:a0,useSyncExternalStore:l0,useId:M0,unstable_isNewReconciler:!1};function Gn(t,e){if(t&&t.defaultProps){e=pt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Cd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:pt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var yc={isMounted:function(t){return(t=t._reactInternals)?Yr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=en(),r=ir(t),s=wi(i,r);s.payload=e,n!=null&&(s.callback=n),e=tr(t,s,r),e!==null&&(Kn(e,t,r,i),ml(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=en(),r=ir(t),s=wi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=tr(t,s,r),e!==null&&(Kn(e,t,r,i),ml(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=en(),i=ir(t),r=wi(n,i);r.tag=2,e!=null&&(r.callback=e),e=tr(t,r,i),e!==null&&(Kn(e,t,i,n),ml(e,t,i))}};function $p(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Zo(n,i)||!Zo(r,s):!0}function b0(t,e,n){var i=!1,r=lr,s=e.contextType;return typeof s=="object"&&s!==null?s=Fn(s):(r=fn(e)?Br:Yt.current,i=e.contextTypes,s=(i=i!=null)?$s(t,r):lr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=yc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Yp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&yc.enqueueReplaceState(e,e.state,null)}function Ad(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},of(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Fn(s):(s=fn(e)?Br:Yt.current,r.context=$s(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Cd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&yc.enqueueReplaceState(r,r.state,null),Wl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Zs(t,e){try{var n="",i=e;do n+=q_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function du(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Rd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var M1=typeof WeakMap=="function"?WeakMap:Map;function C0(t,e,n){n=wi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Kl||(Kl=!0,Bd=i),Rd(t,e)},n}function A0(t,e,n){n=wi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Rd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Rd(t,e),typeof i!="function"&&(nr===null?nr=new Set([this]):nr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function qp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new M1;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=F1.bind(null,t,e,n),e.then(t,t))}function Kp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Zp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=wi(-1,1),e.tag=2,tr(n,e,1))),n.lanes|=1),t)}var E1=Pi.ReactCurrentOwner,cn=!1;function Zt(t,e,n,i){e.child=t===null?i0(e,null,n,i):qs(e,t.child,n,i)}function Qp(t,e,n,i,r){n=n.render;var s=e.ref;return Bs(e,r),i=df(t,e,n,i,s,r),n=hf(),t!==null&&!cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ai(t,e,r)):(ct&&n&&Qh(e),e.flags|=1,Zt(t,e,i,r),e.child)}function Jp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Mf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,R0(t,e,s,i,r)):(t=Sl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Zo,n(o,i)&&t.ref===e.ref)return Ai(t,e,r)}return e.flags|=1,t=rr(s,i),t.ref=e.ref,t.return=e,e.child=t}function R0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Zo(s,i)&&t.ref===e.ref)if(cn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(cn=!0);else return e.lanes=t.lanes,Ai(t,e,r)}return Nd(t,e,n,i,r)}function N0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},rt(Ps,Sn),Sn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,rt(Ps,Sn),Sn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,rt(Ps,Sn),Sn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,rt(Ps,Sn),Sn|=i;return Zt(t,e,r,n),e.child}function P0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Nd(t,e,n,i,r){var s=fn(n)?Br:Yt.current;return s=$s(e,s),Bs(e,r),n=df(t,e,n,i,s,r),i=hf(),t!==null&&!cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ai(t,e,r)):(ct&&i&&Qh(e),e.flags|=1,Zt(t,e,n,r),e.child)}function em(t,e,n,i,r){if(fn(n)){var s=!0;zl(e)}else s=!1;if(Bs(e,r),e.stateNode===null)vl(t,e),b0(e,n,i),Ad(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Fn(c):(c=fn(n)?Br:Yt.current,c=$s(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Yp(e,o,i,c),Gi=!1;var p=e.memoizedState;o.state=p,Wl(e,i,o,r),l=e.memoizedState,a!==i||p!==l||hn.current||Gi?(typeof u=="function"&&(Cd(e,n,u,i),l=e.memoizedState),(a=Gi||$p(e,n,a,i,p,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,s0(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Gn(e.type,a),o.props=c,d=e.pendingProps,p=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Fn(l):(l=fn(n)?Br:Yt.current,l=$s(e,l));var m=n.getDerivedStateFromProps;(u=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||p!==l)&&Yp(e,o,i,l),Gi=!1,p=e.memoizedState,o.state=p,Wl(e,i,o,r);var x=e.memoizedState;a!==d||p!==x||hn.current||Gi?(typeof m=="function"&&(Cd(e,n,m,i),x=e.memoizedState),(c=Gi||$p(e,n,c,i,p,x,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),i=!1)}return Pd(t,e,n,i,s,r)}function Pd(t,e,n,i,r,s){P0(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Bp(e,n,!1),Ai(t,e,s);i=e.stateNode,E1.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=qs(e,t.child,null,s),e.child=qs(e,null,a,s)):Zt(t,e,a,s),e.memoizedState=i.state,r&&Bp(e,n,!0),e.child}function L0(t){var e=t.stateNode;e.pendingContext?Op(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Op(t,e.context,!1),af(t,e.containerInfo)}function tm(t,e,n,i,r){return Ys(),ef(r),e.flags|=256,Zt(t,e,n,i),e.child}var Ld={dehydrated:null,treeContext:null,retryLane:0};function Dd(t){return{baseLanes:t,cachePool:null,transitions:null}}function D0(t,e,n){var i=e.pendingProps,r=ht.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),rt(ht,r&1),t===null)return Td(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ec(o,i,0,null),t=Fr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Dd(n),e.memoizedState=Ld,t):mf(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return w1(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=rr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=rr(a,s):(s=Fr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Dd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Ld,i}return s=t.child,t=s.sibling,i=rr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function mf(t,e){return e=Ec({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Da(t,e,n,i){return i!==null&&ef(i),qs(e,t.child,null,n),t=mf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function w1(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=du(Error(ie(422))),Da(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Ec({mode:"visible",children:i.children},r,0,null),s=Fr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&qs(e,t.child,null,o),e.child.memoizedState=Dd(o),e.memoizedState=Ld,s);if(!(e.mode&1))return Da(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ie(419)),i=du(s,i,void 0),Da(t,e,o,i)}if(a=(o&t.childLanes)!==0,cn||a){if(i=It,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ci(t,r),Kn(i,t,r,-1))}return Sf(),i=du(Error(ie(421))),Da(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=k1.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Mn=er(r.nextSibling),En=e,ct=!0,Xn=null,t!==null&&(Nn[Pn++]=yi,Nn[Pn++]=Si,Nn[Pn++]=zr,yi=t.id,Si=t.overflow,zr=e),e=mf(e,i.children),e.flags|=4096,e)}function nm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),bd(t.return,e,n)}function hu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function I0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Zt(t,e,i.children,n),i=ht.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&nm(t,n,e);else if(t.tag===19)nm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(rt(ht,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Xl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),hu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Xl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}hu(e,!0,n,null,s);break;case"together":hu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function vl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ai(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),jr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ie(153));if(e.child!==null){for(t=e.child,n=rr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=rr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function T1(t,e,n){switch(e.tag){case 3:L0(e),Ys();break;case 5:o0(e);break;case 1:fn(e.type)&&zl(e);break;case 4:af(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;rt(Gl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(rt(ht,ht.current&1),e.flags|=128,null):n&e.child.childLanes?D0(t,e,n):(rt(ht,ht.current&1),t=Ai(t,e,n),t!==null?t.sibling:null);rt(ht,ht.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return I0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),rt(ht,ht.current),i)break;return null;case 22:case 23:return e.lanes=0,N0(t,e,n)}return Ai(t,e,n)}var U0,Id,F0,k0;U0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Id=function(){};F0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Pr(li.current);var s=null;switch(n){case"input":r=nd(t,r),i=nd(t,i),s=[];break;case"select":r=pt({},r,{value:void 0}),i=pt({},i,{value:void 0}),s=[];break;case"textarea":r=sd(t,r),i=sd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Ol)}ad(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ho.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ho.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&st("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};k0=function(t,e,n,i){n!==i&&(e.flags|=4)};function vo(t,e){if(!ct)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ht(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function b1(t,e,n){var i=e.pendingProps;switch(Jh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ht(e),null;case 1:return fn(e.type)&&Bl(),Ht(e),null;case 3:return i=e.stateNode,Ks(),lt(hn),lt(Yt),cf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Pa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Xn!==null&&(jd(Xn),Xn=null))),Id(t,e),Ht(e),null;case 5:lf(e);var r=Pr(na.current);if(n=e.type,t!==null&&e.stateNode!=null)F0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ie(166));return Ht(e),null}if(t=Pr(li.current),Pa(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[si]=e,i[ea]=s,t=(e.mode&1)!==0,n){case"dialog":st("cancel",i),st("close",i);break;case"iframe":case"object":case"embed":st("load",i);break;case"video":case"audio":for(r=0;r<No.length;r++)st(No[r],i);break;case"source":st("error",i);break;case"img":case"image":case"link":st("error",i),st("load",i);break;case"details":st("toggle",i);break;case"input":dp(i,s),st("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},st("invalid",i);break;case"textarea":fp(i,s),st("invalid",i)}ad(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Na(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Na(i.textContent,a,t),r=["children",""+a]):Ho.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&st("scroll",i)}switch(n){case"input":Ma(i),hp(i,s,!0);break;case"textarea":Ma(i),pp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ol)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=dx(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[si]=e,t[ea]=i,U0(t,e,!1,!1),e.stateNode=t;e:{switch(o=ld(n,i),n){case"dialog":st("cancel",t),st("close",t),r=i;break;case"iframe":case"object":case"embed":st("load",t),r=i;break;case"video":case"audio":for(r=0;r<No.length;r++)st(No[r],t);r=i;break;case"source":st("error",t),r=i;break;case"img":case"image":case"link":st("error",t),st("load",t),r=i;break;case"details":st("toggle",t),r=i;break;case"input":dp(t,i),r=nd(t,i),st("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=pt({},i,{value:void 0}),st("invalid",t);break;case"textarea":fp(t,i),r=sd(t,i),st("invalid",t);break;default:r=i}ad(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?px(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&hx(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Wo(t,l):typeof l=="number"&&Wo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ho.hasOwnProperty(s)?l!=null&&s==="onScroll"&&st("scroll",t):l!=null&&Oh(t,s,l,o))}switch(n){case"input":Ma(t),hp(t,i,!1);break;case"textarea":Ma(t),pp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+ar(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Us(t,!!i.multiple,s,!1):i.defaultValue!=null&&Us(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Ol)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ht(e),null;case 6:if(t&&e.stateNode!=null)k0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ie(166));if(n=Pr(na.current),Pr(li.current),Pa(e)){if(i=e.stateNode,n=e.memoizedProps,i[si]=e,(s=i.nodeValue!==n)&&(t=En,t!==null))switch(t.tag){case 3:Na(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Na(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[si]=e,e.stateNode=i}return Ht(e),null;case 13:if(lt(ht),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ct&&Mn!==null&&e.mode&1&&!(e.flags&128))t0(),Ys(),e.flags|=98560,s=!1;else if(s=Pa(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ie(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ie(317));s[si]=e}else Ys(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ht(e),s=!1}else Xn!==null&&(jd(Xn),Xn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ht.current&1?Rt===0&&(Rt=3):Sf())),e.updateQueue!==null&&(e.flags|=4),Ht(e),null);case 4:return Ks(),Id(t,e),t===null&&Qo(e.stateNode.containerInfo),Ht(e),null;case 10:return rf(e.type._context),Ht(e),null;case 17:return fn(e.type)&&Bl(),Ht(e),null;case 19:if(lt(ht),s=e.memoizedState,s===null)return Ht(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)vo(s,!1);else{if(Rt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Xl(t),o!==null){for(e.flags|=128,vo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return rt(ht,ht.current&1|2),e.child}t=t.sibling}s.tail!==null&&yt()>Qs&&(e.flags|=128,i=!0,vo(s,!1),e.lanes=4194304)}else{if(!i)if(t=Xl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),vo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ct)return Ht(e),null}else 2*yt()-s.renderingStartTime>Qs&&n!==1073741824&&(e.flags|=128,i=!0,vo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=yt(),e.sibling=null,n=ht.current,rt(ht,i?n&1|2:n&1),e):(Ht(e),null);case 22:case 23:return yf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Sn&1073741824&&(Ht(e),e.subtreeFlags&6&&(e.flags|=8192)):Ht(e),null;case 24:return null;case 25:return null}throw Error(ie(156,e.tag))}function C1(t,e){switch(Jh(e),e.tag){case 1:return fn(e.type)&&Bl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ks(),lt(hn),lt(Yt),cf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return lf(e),null;case 13:if(lt(ht),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ie(340));Ys()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return lt(ht),null;case 4:return Ks(),null;case 10:return rf(e.type._context),null;case 22:case 23:return yf(),null;case 24:return null;default:return null}}var Ia=!1,$t=!1,A1=typeof WeakSet=="function"?WeakSet:Set,pe=null;function Ns(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){xt(t,e,i)}else n.current=null}function Ud(t,e,n){try{n()}catch(i){xt(t,e,i)}}var im=!1;function R1(t,e){if(vd=Ul,t=jx(),Zh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=t,p=null;t:for(;;){for(var m;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(m=d.firstChild)!==null;)p=d,d=m;for(;;){if(d===t)break t;if(p===n&&++c===r&&(a=o),p===s&&++u===i&&(l=o),(m=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(_d={focusedElem:t,selectionRange:n},Ul=!1,pe=e;pe!==null;)if(e=pe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,pe=t;else for(;pe!==null;){e=pe;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var v=x.memoizedProps,g=x.memoizedState,h=e.stateNode,y=h.getSnapshotBeforeUpdate(e.elementType===e.type?v:Gn(e.type,v),g);h.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ie(163))}}catch(S){xt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,pe=t;break}pe=e.return}return x=im,im=!1,x}function Oo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Ud(e,n,s)}r=r.next}while(r!==i)}}function Sc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Fd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function O0(t){var e=t.alternate;e!==null&&(t.alternate=null,O0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[si],delete e[ea],delete e[Md],delete e[d1],delete e[h1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function B0(t){return t.tag===5||t.tag===3||t.tag===4}function rm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||B0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function kd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ol));else if(i!==4&&(t=t.child,t!==null))for(kd(t,e,n),t=t.sibling;t!==null;)kd(t,e,n),t=t.sibling}function Od(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Od(t,e,n),t=t.sibling;t!==null;)Od(t,e,n),t=t.sibling}var kt=null,Hn=!1;function Di(t,e,n){for(n=n.child;n!==null;)z0(t,e,n),n=n.sibling}function z0(t,e,n){if(ai&&typeof ai.onCommitFiberUnmount=="function")try{ai.onCommitFiberUnmount(fc,n)}catch{}switch(n.tag){case 5:$t||Ns(n,e);case 6:var i=kt,r=Hn;kt=null,Di(t,e,n),kt=i,Hn=r,kt!==null&&(Hn?(t=kt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):kt.removeChild(n.stateNode));break;case 18:kt!==null&&(Hn?(t=kt,n=n.stateNode,t.nodeType===8?su(t.parentNode,n):t.nodeType===1&&su(t,n),qo(t)):su(kt,n.stateNode));break;case 4:i=kt,r=Hn,kt=n.stateNode.containerInfo,Hn=!0,Di(t,e,n),kt=i,Hn=r;break;case 0:case 11:case 14:case 15:if(!$t&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ud(n,e,o),r=r.next}while(r!==i)}Di(t,e,n);break;case 1:if(!$t&&(Ns(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){xt(n,e,a)}Di(t,e,n);break;case 21:Di(t,e,n);break;case 22:n.mode&1?($t=(i=$t)||n.memoizedState!==null,Di(t,e,n),$t=i):Di(t,e,n);break;default:Di(t,e,n)}}function sm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new A1),e.forEach(function(i){var r=O1.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Bn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:kt=a.stateNode,Hn=!1;break e;case 3:kt=a.stateNode.containerInfo,Hn=!0;break e;case 4:kt=a.stateNode.containerInfo,Hn=!0;break e}a=a.return}if(kt===null)throw Error(ie(160));z0(s,o,r),kt=null,Hn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){xt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)V0(e,t),e=e.sibling}function V0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Bn(e,t),ti(t),i&4){try{Oo(3,t,t.return),Sc(3,t)}catch(v){xt(t,t.return,v)}try{Oo(5,t,t.return)}catch(v){xt(t,t.return,v)}}break;case 1:Bn(e,t),ti(t),i&512&&n!==null&&Ns(n,n.return);break;case 5:if(Bn(e,t),ti(t),i&512&&n!==null&&Ns(n,n.return),t.flags&32){var r=t.stateNode;try{Wo(r,"")}catch(v){xt(t,t.return,v)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&cx(r,s),ld(a,o);var c=ld(a,s);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?px(r,d):u==="dangerouslySetInnerHTML"?hx(r,d):u==="children"?Wo(r,d):Oh(r,u,d,c)}switch(a){case"input":id(r,s);break;case"textarea":ux(r,s);break;case"select":var p=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Us(r,!!s.multiple,m,!1):p!==!!s.multiple&&(s.defaultValue!=null?Us(r,!!s.multiple,s.defaultValue,!0):Us(r,!!s.multiple,s.multiple?[]:"",!1))}r[ea]=s}catch(v){xt(t,t.return,v)}}break;case 6:if(Bn(e,t),ti(t),i&4){if(t.stateNode===null)throw Error(ie(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(v){xt(t,t.return,v)}}break;case 3:if(Bn(e,t),ti(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{qo(e.containerInfo)}catch(v){xt(t,t.return,v)}break;case 4:Bn(e,t),ti(t);break;case 13:Bn(e,t),ti(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(vf=yt())),i&4&&sm(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?($t=(c=$t)||u,Bn(e,t),$t=c):Bn(e,t),ti(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(pe=t,u=t.child;u!==null;){for(d=pe=u;pe!==null;){switch(p=pe,m=p.child,p.tag){case 0:case 11:case 14:case 15:Oo(4,p,p.return);break;case 1:Ns(p,p.return);var x=p.stateNode;if(typeof x.componentWillUnmount=="function"){i=p,n=p.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(v){xt(i,n,v)}}break;case 5:Ns(p,p.return);break;case 22:if(p.memoizedState!==null){am(d);continue}}m!==null?(m.return=p,pe=m):am(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=fx("display",o))}catch(v){xt(t,t.return,v)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(v){xt(t,t.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Bn(e,t),ti(t),i&4&&sm(t);break;case 21:break;default:Bn(e,t),ti(t)}}function ti(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(B0(n)){var i=n;break e}n=n.return}throw Error(ie(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Wo(r,""),i.flags&=-33);var s=rm(t);Od(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=rm(t);kd(t,a,o);break;default:throw Error(ie(161))}}catch(l){xt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function N1(t,e,n){pe=t,j0(t)}function j0(t,e,n){for(var i=(t.mode&1)!==0;pe!==null;){var r=pe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ia;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||$t;a=Ia;var c=$t;if(Ia=o,($t=l)&&!c)for(pe=r;pe!==null;)o=pe,l=o.child,o.tag===22&&o.memoizedState!==null?lm(r):l!==null?(l.return=o,pe=l):lm(r);for(;s!==null;)pe=s,j0(s),s=s.sibling;pe=r,Ia=a,$t=c}om(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,pe=s):om(t)}}function om(t){for(;pe!==null;){var e=pe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:$t||Sc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!$t)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Gn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Hp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Hp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&qo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ie(163))}$t||e.flags&512&&Fd(e)}catch(p){xt(e,e.return,p)}}if(e===t){pe=null;break}if(n=e.sibling,n!==null){n.return=e.return,pe=n;break}pe=e.return}}function am(t){for(;pe!==null;){var e=pe;if(e===t){pe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,pe=n;break}pe=e.return}}function lm(t){for(;pe!==null;){var e=pe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Sc(4,e)}catch(l){xt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){xt(e,r,l)}}var s=e.return;try{Fd(e)}catch(l){xt(e,s,l)}break;case 5:var o=e.return;try{Fd(e)}catch(l){xt(e,o,l)}}}catch(l){xt(e,e.return,l)}if(e===t){pe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,pe=a;break}pe=e.return}}var P1=Math.ceil,ql=Pi.ReactCurrentDispatcher,gf=Pi.ReactCurrentOwner,Un=Pi.ReactCurrentBatchConfig,Ye=0,It=null,Tt=null,zt=0,Sn=0,Ps=fr(0),Rt=0,oa=null,jr=0,Mc=0,xf=0,Bo=null,an=null,vf=0,Qs=1/0,vi=null,Kl=!1,Bd=null,nr=null,Ua=!1,qi=null,Zl=0,zo=0,zd=null,_l=-1,yl=0;function en(){return Ye&6?yt():_l!==-1?_l:_l=yt()}function ir(t){return t.mode&1?Ye&2&&zt!==0?zt&-zt:p1.transition!==null?(yl===0&&(yl=bx()),yl):(t=nt,t!==0||(t=window.event,t=t===void 0?16:Dx(t.type)),t):1}function Kn(t,e,n,i){if(50<zo)throw zo=0,zd=null,Error(ie(185));da(t,n,i),(!(Ye&2)||t!==It)&&(t===It&&(!(Ye&2)&&(Mc|=n),Rt===4&&Xi(t,zt)),pn(t,i),n===1&&Ye===0&&!(e.mode&1)&&(Qs=yt()+500,vc&&pr()))}function pn(t,e){var n=t.callbackNode;py(t,e);var i=Il(t,t===It?zt:0);if(i===0)n!==null&&xp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&xp(n),e===1)t.tag===0?f1(cm.bind(null,t)):Qx(cm.bind(null,t)),c1(function(){!(Ye&6)&&pr()}),n=null;else{switch(Cx(i)){case 1:n=Gh;break;case 4:n=wx;break;case 16:n=Dl;break;case 536870912:n=Tx;break;default:n=Dl}n=K0(n,G0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function G0(t,e){if(_l=-1,yl=0,Ye&6)throw Error(ie(327));var n=t.callbackNode;if(zs()&&t.callbackNode!==n)return null;var i=Il(t,t===It?zt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Ql(t,i);else{e=i;var r=Ye;Ye|=2;var s=W0();(It!==t||zt!==e)&&(vi=null,Qs=yt()+500,Ur(t,e));do try{I1();break}catch(a){H0(t,a)}while(!0);nf(),ql.current=s,Ye=r,Tt!==null?e=0:(It=null,zt=0,e=Rt)}if(e!==0){if(e===2&&(r=fd(t),r!==0&&(i=r,e=Vd(t,r))),e===1)throw n=oa,Ur(t,0),Xi(t,i),pn(t,yt()),n;if(e===6)Xi(t,i);else{if(r=t.current.alternate,!(i&30)&&!L1(r)&&(e=Ql(t,i),e===2&&(s=fd(t),s!==0&&(i=s,e=Vd(t,s))),e===1))throw n=oa,Ur(t,0),Xi(t,i),pn(t,yt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ie(345));case 2:Tr(t,an,vi);break;case 3:if(Xi(t,i),(i&130023424)===i&&(e=vf+500-yt(),10<e)){if(Il(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){en(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Sd(Tr.bind(null,t,an,vi),e);break}Tr(t,an,vi);break;case 4:if(Xi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-qn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=yt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*P1(i/1960))-i,10<i){t.timeoutHandle=Sd(Tr.bind(null,t,an,vi),i);break}Tr(t,an,vi);break;case 5:Tr(t,an,vi);break;default:throw Error(ie(329))}}}return pn(t,yt()),t.callbackNode===n?G0.bind(null,t):null}function Vd(t,e){var n=Bo;return t.current.memoizedState.isDehydrated&&(Ur(t,e).flags|=256),t=Ql(t,e),t!==2&&(e=an,an=n,e!==null&&jd(e)),t}function jd(t){an===null?an=t:an.push.apply(an,t)}function L1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Zn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Xi(t,e){for(e&=~xf,e&=~Mc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-qn(e),i=1<<n;t[n]=-1,e&=~i}}function cm(t){if(Ye&6)throw Error(ie(327));zs();var e=Il(t,0);if(!(e&1))return pn(t,yt()),null;var n=Ql(t,e);if(t.tag!==0&&n===2){var i=fd(t);i!==0&&(e=i,n=Vd(t,i))}if(n===1)throw n=oa,Ur(t,0),Xi(t,e),pn(t,yt()),n;if(n===6)throw Error(ie(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Tr(t,an,vi),pn(t,yt()),null}function _f(t,e){var n=Ye;Ye|=1;try{return t(e)}finally{Ye=n,Ye===0&&(Qs=yt()+500,vc&&pr())}}function Gr(t){qi!==null&&qi.tag===0&&!(Ye&6)&&zs();var e=Ye;Ye|=1;var n=Un.transition,i=nt;try{if(Un.transition=null,nt=1,t)return t()}finally{nt=i,Un.transition=n,Ye=e,!(Ye&6)&&pr()}}function yf(){Sn=Ps.current,lt(Ps)}function Ur(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,l1(n)),Tt!==null)for(n=Tt.return;n!==null;){var i=n;switch(Jh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Bl();break;case 3:Ks(),lt(hn),lt(Yt),cf();break;case 5:lf(i);break;case 4:Ks();break;case 13:lt(ht);break;case 19:lt(ht);break;case 10:rf(i.type._context);break;case 22:case 23:yf()}n=n.return}if(It=t,Tt=t=rr(t.current,null),zt=Sn=e,Rt=0,oa=null,xf=Mc=jr=0,an=Bo=null,Nr!==null){for(e=0;e<Nr.length;e++)if(n=Nr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Nr=null}return t}function H0(t,e){do{var n=Tt;try{if(nf(),gl.current=Yl,$l){for(var i=ft.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}$l=!1}if(Vr=0,Dt=Ct=ft=null,ko=!1,ia=0,gf.current=null,n===null||n.return===null){Rt=1,oa=e,Tt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=zt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var p=u.alternate;p?(u.updateQueue=p.updateQueue,u.memoizedState=p.memoizedState,u.lanes=p.lanes):(u.updateQueue=null,u.memoizedState=null)}var m=Kp(o);if(m!==null){m.flags&=-257,Zp(m,o,a,s,e),m.mode&1&&qp(s,c,e),e=m,l=c;var x=e.updateQueue;if(x===null){var v=new Set;v.add(l),e.updateQueue=v}else x.add(l);break e}else{if(!(e&1)){qp(s,c,e),Sf();break e}l=Error(ie(426))}}else if(ct&&a.mode&1){var g=Kp(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),Zp(g,o,a,s,e),ef(Zs(l,a));break e}}s=l=Zs(l,a),Rt!==4&&(Rt=2),Bo===null?Bo=[s]:Bo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=C0(s,l,e);Gp(s,h);break e;case 1:a=l;var y=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof y.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(nr===null||!nr.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=A0(s,a,e);Gp(s,S);break e}}s=s.return}while(s!==null)}$0(n)}catch(A){e=A,Tt===n&&n!==null&&(Tt=n=n.return);continue}break}while(!0)}function W0(){var t=ql.current;return ql.current=Yl,t===null?Yl:t}function Sf(){(Rt===0||Rt===3||Rt===2)&&(Rt=4),It===null||!(jr&268435455)&&!(Mc&268435455)||Xi(It,zt)}function Ql(t,e){var n=Ye;Ye|=2;var i=W0();(It!==t||zt!==e)&&(vi=null,Ur(t,e));do try{D1();break}catch(r){H0(t,r)}while(!0);if(nf(),Ye=n,ql.current=i,Tt!==null)throw Error(ie(261));return It=null,zt=0,Rt}function D1(){for(;Tt!==null;)X0(Tt)}function I1(){for(;Tt!==null&&!sy();)X0(Tt)}function X0(t){var e=q0(t.alternate,t,Sn);t.memoizedProps=t.pendingProps,e===null?$0(t):Tt=e,gf.current=null}function $0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=C1(n,e),n!==null){n.flags&=32767,Tt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Rt=6,Tt=null;return}}else if(n=b1(n,e,Sn),n!==null){Tt=n;return}if(e=e.sibling,e!==null){Tt=e;return}Tt=e=t}while(e!==null);Rt===0&&(Rt=5)}function Tr(t,e,n){var i=nt,r=Un.transition;try{Un.transition=null,nt=1,U1(t,e,n,i)}finally{Un.transition=r,nt=i}return null}function U1(t,e,n,i){do zs();while(qi!==null);if(Ye&6)throw Error(ie(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ie(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(my(t,s),t===It&&(Tt=It=null,zt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ua||(Ua=!0,K0(Dl,function(){return zs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Un.transition,Un.transition=null;var o=nt;nt=1;var a=Ye;Ye|=4,gf.current=null,R1(t,n),V0(n,t),t1(_d),Ul=!!vd,_d=vd=null,t.current=n,N1(n),oy(),Ye=a,nt=o,Un.transition=s}else t.current=n;if(Ua&&(Ua=!1,qi=t,Zl=r),s=t.pendingLanes,s===0&&(nr=null),cy(n.stateNode),pn(t,yt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Kl)throw Kl=!1,t=Bd,Bd=null,t;return Zl&1&&t.tag!==0&&zs(),s=t.pendingLanes,s&1?t===zd?zo++:(zo=0,zd=t):zo=0,pr(),null}function zs(){if(qi!==null){var t=Cx(Zl),e=Un.transition,n=nt;try{if(Un.transition=null,nt=16>t?16:t,qi===null)var i=!1;else{if(t=qi,qi=null,Zl=0,Ye&6)throw Error(ie(331));var r=Ye;for(Ye|=4,pe=t.current;pe!==null;){var s=pe,o=s.child;if(pe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(pe=c;pe!==null;){var u=pe;switch(u.tag){case 0:case 11:case 15:Oo(8,u,s)}var d=u.child;if(d!==null)d.return=u,pe=d;else for(;pe!==null;){u=pe;var p=u.sibling,m=u.return;if(O0(u),u===c){pe=null;break}if(p!==null){p.return=m,pe=p;break}pe=m}}}var x=s.alternate;if(x!==null){var v=x.child;if(v!==null){x.child=null;do{var g=v.sibling;v.sibling=null,v=g}while(v!==null)}}pe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,pe=o;else e:for(;pe!==null;){if(s=pe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Oo(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,pe=h;break e}pe=s.return}}var y=t.current;for(pe=y;pe!==null;){o=pe;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,pe=_;else e:for(o=y;pe!==null;){if(a=pe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Sc(9,a)}}catch(A){xt(a,a.return,A)}if(a===o){pe=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,pe=S;break e}pe=a.return}}if(Ye=r,pr(),ai&&typeof ai.onPostCommitFiberRoot=="function")try{ai.onPostCommitFiberRoot(fc,t)}catch{}i=!0}return i}finally{nt=n,Un.transition=e}}return!1}function um(t,e,n){e=Zs(n,e),e=C0(t,e,1),t=tr(t,e,1),e=en(),t!==null&&(da(t,1,e),pn(t,e))}function xt(t,e,n){if(t.tag===3)um(t,t,n);else for(;e!==null;){if(e.tag===3){um(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(nr===null||!nr.has(i))){t=Zs(n,t),t=A0(e,t,1),e=tr(e,t,1),t=en(),e!==null&&(da(e,1,t),pn(e,t));break}}e=e.return}}function F1(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=en(),t.pingedLanes|=t.suspendedLanes&n,It===t&&(zt&n)===n&&(Rt===4||Rt===3&&(zt&130023424)===zt&&500>yt()-vf?Ur(t,0):xf|=n),pn(t,e)}function Y0(t,e){e===0&&(t.mode&1?(e=Ta,Ta<<=1,!(Ta&130023424)&&(Ta=4194304)):e=1);var n=en();t=Ci(t,e),t!==null&&(da(t,e,n),pn(t,n))}function k1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Y0(t,n)}function O1(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ie(314))}i!==null&&i.delete(e),Y0(t,n)}var q0;q0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||hn.current)cn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return cn=!1,T1(t,e,n);cn=!!(t.flags&131072)}else cn=!1,ct&&e.flags&1048576&&Jx(e,jl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;vl(t,e),t=e.pendingProps;var r=$s(e,Yt.current);Bs(e,n),r=df(null,e,i,t,r,n);var s=hf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,fn(i)?(s=!0,zl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,of(e),r.updater=yc,e.stateNode=r,r._reactInternals=e,Ad(e,i,t,n),e=Pd(null,e,i,!0,s,n)):(e.tag=0,ct&&s&&Qh(e),Zt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(vl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=z1(i),t=Gn(i,t),r){case 0:e=Nd(null,e,i,t,n);break e;case 1:e=em(null,e,i,t,n);break e;case 11:e=Qp(null,e,i,t,n);break e;case 14:e=Jp(null,e,i,Gn(i.type,t),n);break e}throw Error(ie(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),Nd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),em(t,e,i,r,n);case 3:e:{if(L0(e),t===null)throw Error(ie(387));i=e.pendingProps,s=e.memoizedState,r=s.element,s0(t,e),Wl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Zs(Error(ie(423)),e),e=tm(t,e,i,n,r);break e}else if(i!==r){r=Zs(Error(ie(424)),e),e=tm(t,e,i,n,r);break e}else for(Mn=er(e.stateNode.containerInfo.firstChild),En=e,ct=!0,Xn=null,n=i0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ys(),i===r){e=Ai(t,e,n);break e}Zt(t,e,i,n)}e=e.child}return e;case 5:return o0(e),t===null&&Td(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,yd(i,r)?o=null:s!==null&&yd(i,s)&&(e.flags|=32),P0(t,e),Zt(t,e,o,n),e.child;case 6:return t===null&&Td(e),null;case 13:return D0(t,e,n);case 4:return af(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=qs(e,null,i,n):Zt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),Qp(t,e,i,r,n);case 7:return Zt(t,e,e.pendingProps,n),e.child;case 8:return Zt(t,e,e.pendingProps.children,n),e.child;case 12:return Zt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,rt(Gl,i._currentValue),i._currentValue=o,s!==null)if(Zn(s.value,o)){if(s.children===r.children&&!hn.current){e=Ai(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=wi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),bd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ie(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),bd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Zt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Bs(e,n),r=Fn(r),i=i(r),e.flags|=1,Zt(t,e,i,n),e.child;case 14:return i=e.type,r=Gn(i,e.pendingProps),r=Gn(i.type,r),Jp(t,e,i,r,n);case 15:return R0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),vl(t,e),e.tag=1,fn(i)?(t=!0,zl(e)):t=!1,Bs(e,n),b0(e,i,r),Ad(e,i,r,n),Pd(null,e,i,!0,t,n);case 19:return I0(t,e,n);case 22:return N0(t,e,n)}throw Error(ie(156,e.tag))};function K0(t,e){return Ex(t,e)}function B1(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dn(t,e,n,i){return new B1(t,e,n,i)}function Mf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function z1(t){if(typeof t=="function")return Mf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===zh)return 11;if(t===Vh)return 14}return 2}function rr(t,e){var n=t.alternate;return n===null?(n=Dn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Sl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Mf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ss:return Fr(n.children,r,s,e);case Bh:o=8,r|=8;break;case Qu:return t=Dn(12,n,e,r|2),t.elementType=Qu,t.lanes=s,t;case Ju:return t=Dn(13,n,e,r),t.elementType=Ju,t.lanes=s,t;case ed:return t=Dn(19,n,e,r),t.elementType=ed,t.lanes=s,t;case ox:return Ec(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case rx:o=10;break e;case sx:o=9;break e;case zh:o=11;break e;case Vh:o=14;break e;case ji:o=16,i=null;break e}throw Error(ie(130,t==null?t:typeof t,""))}return e=Dn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Fr(t,e,n,i){return t=Dn(7,t,i,e),t.lanes=n,t}function Ec(t,e,n,i){return t=Dn(22,t,i,e),t.elementType=ox,t.lanes=n,t.stateNode={isHidden:!1},t}function fu(t,e,n){return t=Dn(6,t,null,e),t.lanes=n,t}function pu(t,e,n){return e=Dn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function V1(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yc(0),this.expirationTimes=Yc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Ef(t,e,n,i,r,s,o,a,l){return t=new V1(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Dn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},of(s),t}function j1(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ys,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Z0(t){if(!t)return lr;t=t._reactInternals;e:{if(Yr(t)!==t||t.tag!==1)throw Error(ie(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(fn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ie(171))}if(t.tag===1){var n=t.type;if(fn(n))return Zx(t,n,e)}return e}function Q0(t,e,n,i,r,s,o,a,l){return t=Ef(n,i,!0,t,r,s,o,a,l),t.context=Z0(null),n=t.current,i=en(),r=ir(n),s=wi(i,r),s.callback=e??null,tr(n,s,r),t.current.lanes=r,da(t,r,i),pn(t,i),t}function wc(t,e,n,i){var r=e.current,s=en(),o=ir(r);return n=Z0(n),e.context===null?e.context=n:e.pendingContext=n,e=wi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=tr(r,e,o),t!==null&&(Kn(t,r,o,s),ml(t,r,o)),o}function Jl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function dm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function wf(t,e){dm(t,e),(t=t.alternate)&&dm(t,e)}function G1(){return null}var J0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Tf(t){this._internalRoot=t}Tc.prototype.render=Tf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ie(409));wc(t,e,null,null)};Tc.prototype.unmount=Tf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Gr(function(){wc(null,t,null,null)}),e[bi]=null}};function Tc(t){this._internalRoot=t}Tc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Nx();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Wi.length&&e!==0&&e<Wi[n].priority;n++);Wi.splice(n,0,t),n===0&&Lx(t)}};function bf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function bc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function hm(){}function H1(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Jl(o);s.call(c)}}var o=Q0(e,i,t,0,null,!1,!1,"",hm);return t._reactRootContainer=o,t[bi]=o.current,Qo(t.nodeType===8?t.parentNode:t),Gr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Jl(l);a.call(c)}}var l=Ef(t,0,!1,null,null,!1,!1,"",hm);return t._reactRootContainer=l,t[bi]=l.current,Qo(t.nodeType===8?t.parentNode:t),Gr(function(){wc(e,l,n,i)}),l}function Cc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Jl(o);a.call(l)}}wc(e,o,t,r)}else o=H1(n,e,t,r,i);return Jl(o)}Ax=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ro(e.pendingLanes);n!==0&&(Hh(e,n|1),pn(e,yt()),!(Ye&6)&&(Qs=yt()+500,pr()))}break;case 13:Gr(function(){var i=Ci(t,1);if(i!==null){var r=en();Kn(i,t,1,r)}}),wf(t,1)}};Wh=function(t){if(t.tag===13){var e=Ci(t,134217728);if(e!==null){var n=en();Kn(e,t,134217728,n)}wf(t,134217728)}};Rx=function(t){if(t.tag===13){var e=ir(t),n=Ci(t,e);if(n!==null){var i=en();Kn(n,t,e,i)}wf(t,e)}};Nx=function(){return nt};Px=function(t,e){var n=nt;try{return nt=t,e()}finally{nt=n}};ud=function(t,e,n){switch(e){case"input":if(id(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=xc(i);if(!r)throw Error(ie(90));lx(i),id(i,r)}}}break;case"textarea":ux(t,n);break;case"select":e=n.value,e!=null&&Us(t,!!n.multiple,e,!1)}};xx=_f;vx=Gr;var W1={usingClientEntryPoint:!1,Events:[fa,Ts,xc,mx,gx,_f]},_o={findFiberByHostInstance:Rr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},X1={bundleType:_o.bundleType,version:_o.version,rendererPackageName:_o.rendererPackageName,rendererConfig:_o.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Pi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Sx(t),t===null?null:t.stateNode},findFiberByHostInstance:_o.findFiberByHostInstance||G1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fa.isDisabled&&Fa.supportsFiber)try{fc=Fa.inject(X1),ai=Fa}catch{}}Tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W1;Tn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bf(e))throw Error(ie(200));return j1(t,e,null,n)};Tn.createRoot=function(t,e){if(!bf(t))throw Error(ie(299));var n=!1,i="",r=J0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Ef(t,1,!1,null,null,n,!1,i,r),t[bi]=e.current,Qo(t.nodeType===8?t.parentNode:t),new Tf(e)};Tn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ie(188)):(t=Object.keys(t).join(","),Error(ie(268,t)));return t=Sx(e),t=t===null?null:t.stateNode,t};Tn.flushSync=function(t){return Gr(t)};Tn.hydrate=function(t,e,n){if(!bc(e))throw Error(ie(200));return Cc(null,t,e,!0,n)};Tn.hydrateRoot=function(t,e,n){if(!bf(t))throw Error(ie(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=J0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Q0(e,null,t,1,n??null,r,!1,s,o),t[bi]=e.current,Qo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Tc(e)};Tn.render=function(t,e,n){if(!bc(e))throw Error(ie(200));return Cc(null,t,e,!1,n)};Tn.unmountComponentAtNode=function(t){if(!bc(t))throw Error(ie(40));return t._reactRootContainer?(Gr(function(){Cc(null,null,t,!1,function(){t._reactRootContainer=null,t[bi]=null})}),!0):!1};Tn.unstable_batchedUpdates=_f;Tn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!bc(n))throw Error(ie(200));if(t==null||t._reactInternals===void 0)throw Error(ie(38));return Cc(t,e,n,!1,i)};Tn.version="18.3.1-next-f1338f8080-20240426";function ev(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ev)}catch(t){console.error(t)}}ev(),ex.exports=Tn;var $1=ex.exports,fm=$1;Ku.createRoot=fm.createRoot,Ku.hydrateRoot=fm.hydrateRoot;const Y1={},pm=t=>{let e;const n=new Set,i=(u,d)=>{const p=typeof u=="function"?u(e):u;if(!Object.is(p,e)){const m=e;e=d??(typeof p!="object"||p===null)?p:Object.assign({},e,p),n.forEach(x=>x(e,m))}},r=()=>e,l={setState:i,getState:r,getInitialState:()=>c,subscribe:u=>(n.add(u),()=>n.delete(u)),destroy:()=>{(Y1?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},c=e=t(i,r,l);return l},q1=t=>t?pm(t):pm;var tv={exports:{}},nv={},iv={exports:{}},rv={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Js=ce;function K1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Z1=typeof Object.is=="function"?Object.is:K1,Q1=Js.useState,J1=Js.useEffect,eS=Js.useLayoutEffect,tS=Js.useDebugValue;function nS(t,e){var n=e(),i=Q1({inst:{value:n,getSnapshot:e}}),r=i[0].inst,s=i[1];return eS(function(){r.value=n,r.getSnapshot=e,mu(r)&&s({inst:r})},[t,n,e]),J1(function(){return mu(r)&&s({inst:r}),t(function(){mu(r)&&s({inst:r})})},[t]),tS(n),n}function mu(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Z1(t,n)}catch{return!0}}function iS(t,e){return e()}var rS=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?iS:nS;rv.useSyncExternalStore=Js.useSyncExternalStore!==void 0?Js.useSyncExternalStore:rS;iv.exports=rv;var sS=iv.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ac=ce,oS=sS;function aS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var lS=typeof Object.is=="function"?Object.is:aS,cS=oS.useSyncExternalStore,uS=Ac.useRef,dS=Ac.useEffect,hS=Ac.useMemo,fS=Ac.useDebugValue;nv.useSyncExternalStoreWithSelector=function(t,e,n,i,r){var s=uS(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=hS(function(){function l(m){if(!c){if(c=!0,u=m,m=i(m),r!==void 0&&o.hasValue){var x=o.value;if(r(x,m))return d=x}return d=m}if(x=d,lS(u,m))return x;var v=i(m);return r!==void 0&&r(x,v)?(u=m,x):(u=m,d=v)}var c=!1,u,d,p=n===void 0?null:n;return[function(){return l(e())},p===null?void 0:function(){return l(p())}]},[e,n,i,r]);var a=cS(t,s[0],s[1]);return dS(function(){o.hasValue=!0,o.value=a},[a]),fS(a),a};tv.exports=nv;var pS=tv.exports;const mS=Vg(pS),sv={},{useDebugValue:gS}=Qg,{useSyncExternalStoreWithSelector:xS}=mS;let mm=!1;const vS=t=>t;function _S(t,e=vS,n){(sv?"production":void 0)!=="production"&&n&&!mm&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),mm=!0);const i=xS(t.subscribe,t.getState,t.getServerState||t.getInitialState,e,n);return gS(i),i}const gm=t=>{(sv?"production":void 0)!=="production"&&typeof t!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e=typeof t=="function"?q1(t):t,n=(i,r)=>_S(e,i,r);return Object.assign(n,e),n},Rc=t=>t?gm(t):gm,yS="1.0.0",SS="gta_sa_livery_studio_autosave",MS={gridVisible:!0,safeAreaVisible:!0,uvLinesVisible:!0,meshNamesVisible:!1,materialNamesVisible:!1,symmetryGuidesVisible:!0,autoSaveInterval:5,snapToGrid:!1,gridSize:32},Gd=[{id:"layer-livery",name:"Livery",type:"livery",visible:!0,locked:!1,opacity:1,blendMode:"normal"},{id:"layer-logo",name:"Logo",type:"logo",visible:!0,locked:!1,opacity:1,blendMode:"normal"},{id:"layer-text",name:"Text",type:"text",visible:!0,locked:!1,opacity:1,blendMode:"normal"},{id:"layer-decals",name:"Decals",type:"decal",visible:!0,locked:!1,opacity:1,blendMode:"normal"},{id:"layer-base",name:"Base Color",type:"base_color",visible:!0,locked:!1,opacity:1,blendMode:"normal",color:"#FFFFFF"},{id:"layer-uv",name:"UV Template Overlay",type:"uv",visible:!0,locked:!0,opacity:.35,blendMode:"multiply"},{id:"layer-bg",name:"Background",type:"background",visible:!0,locked:!0,opacity:1,blendMode:"normal",color:"#1A1A1A"}],xs=[{id:"mat-body",name:"Vehicle Body [carbody64]",diffuseColor:"#D32F2F",ambientColor:"#222222",specularColor:"#FFFFFF",opacity:1,isLiveryTarget:!0},{id:"mat-glass",name:"Vehicle Glass [vehiclelights128]",diffuseColor:"#2A3B4C",ambientColor:"#111111",specularColor:"#FFFFFF",opacity:.45,isLiveryTarget:!1},{id:"mat-wheel",name:"Wheel Rim [wheel64]",diffuseColor:"#888888",ambientColor:"#111111",specularColor:"#E0E0E0",opacity:1,isLiveryTarget:!1},{id:"mat-interior",name:"Interior [interior64]",diffuseColor:"#222222",ambientColor:"#050505",specularColor:"#111111",opacity:1,isLiveryTarget:!1},{id:"mat-chrome",name:"Chrome Details",diffuseColor:"#EEEEEE",ambientColor:"#444444",specularColor:"#FFFFFF",opacity:1,isLiveryTarget:!1},{id:"mat-lights",name:"Headlights & Taillights",diffuseColor:"#FFAA00",ambientColor:"#222222",specularColor:"#FFFFFF",opacity:.9,isLiveryTarget:!1}];function xm(t="Untitled Vehicle Livery"){const e=new Date().toISOString();return{version:yS,id:`proj_${Date.now()}_${Math.random().toString(36).substring(2,8)}`,name:t,createdAt:e,updatedAt:e,textureResolution:2048,layers:JSON.parse(JSON.stringify(Gd)),materials:JSON.parse(JSON.stringify(xs)),editorSettings:{...MS},cameraState:{position:[4.5,2.5,5],target:[0,.7,0],fov:45}}}function ov(t){return JSON.stringify(t,null,2)}function ES(t){try{const e=JSON.parse(t);if(!e.version||!e.id||!e.layers||!Array.isArray(e.layers))throw new Error("Invalid project structure. Missing essential .gslp header or layers.");return e}catch(e){throw new Error(`Failed to load .gslp project: ${e instanceof Error?e.message:"Corrupted JSON"}`)}}function gu(t){try{const e=ov({...t,updatedAt:new Date().toISOString()});localStorage.setItem(SS,e)}catch(e){console.warn("Auto-save to localStorage failed (quota exceeded or storage blocked):",e)}}function wS(t){const e=ov(t),n=new Blob([e],{type:"application/json"}),i=URL.createObjectURL(n),r=document.createElement("a"),s=t.name.replace(/[^a-z0-9_-]/gi,"_").toLowerCase();r.href=i,r.download=`${s}.gslp`,document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(i)}async function TS(t){const e=await t.text();return ES(e)}const Qn=Rc((t,e)=>({currentProject:xm(),vehicleModel:null,currentVehicleGroup:null,isDirty:!1,lastSavedAt:new Date().toLocaleTimeString(),newProject:n=>{const i=xm(n);t({currentProject:i,vehicleModel:null,isDirty:!1,lastSavedAt:new Date().toLocaleTimeString()}),gu(i)},loadProject:n=>{t({currentProject:n,isDirty:!1,lastSavedAt:new Date().toLocaleTimeString()}),gu(n)},setVehicleModel:(n,i=null)=>{t(r=>{const s={...r.currentProject,materials:n?n.materials:r.currentProject.materials};return{vehicleModel:n,currentVehicleGroup:i,currentProject:s,isDirty:!0}})},updateMaterial:(n,i)=>{t(r=>{const s=r.currentProject.materials.map(o=>o.id===n?{...o,...i}:o);return{currentProject:{...r.currentProject,materials:s,updatedAt:new Date().toISOString()},isDirty:!0}})},setProjectName:n=>{t(i=>({currentProject:{...i.currentProject,name:n},isDirty:!0}))},markDirty:()=>t({isDirty:!0}),saveProject:()=>{const n=e().currentProject;gu(n),t({isDirty:!1,lastSavedAt:new Date().toLocaleTimeString()})},exportProjectFile:()=>{const n=e().currentProject;wS(n),t({isDirty:!1,lastSavedAt:new Date().toLocaleTimeString()})},syncEditorState:(n,i)=>{t(r=>({currentProject:{...r.currentProject,layers:JSON.parse(JSON.stringify(n)),textureResolution:i,updatedAt:new Date().toISOString()},isDirty:!0}))}})),Jn=Rc(t=>({activeTab:"3d",isDevConsoleOpen:!1,isWelcomeModalOpen:!0,isSettingsModalOpen:!1,isExportModalOpen:!1,isGenerateTemplateModalOpen:!1,splitRatio:.5,selectedPartId:null,selectedMaterialId:null,selectedUVIslandId:null,setActiveTab:e=>t({activeTab:e}),toggleDevConsole:()=>t(e=>({isDevConsoleOpen:!e.isDevConsoleOpen})),setDevConsoleOpen:e=>t({isDevConsoleOpen:e}),setWelcomeModalOpen:e=>t({isWelcomeModalOpen:e}),setSettingsModalOpen:e=>t({isSettingsModalOpen:e}),setExportModalOpen:e=>t({isExportModalOpen:e}),setGenerateTemplateModalOpen:e=>t({isGenerateTemplateModalOpen:e}),setSplitRatio:e=>t({splitRatio:Math.max(.2,Math.min(.8,e))}),setSelectedPartId:e=>t({selectedPartId:e}),setSelectedMaterialId:e=>t({selectedMaterialId:e}),setSelectedUVIslandId:e=>t({selectedUVIslandId:e})})),ci=Rc((t,e)=>({activeTool:"select",viewMode:"textured",isGridVisible:!0,textureResolution:2048,brushColor:"#4F8CFF",brushSize:24,brushOpacity:1,artworkRevision:0,layers:JSON.parse(JSON.stringify(Gd)),activeLayerId:"layer-livery",history:[JSON.parse(JSON.stringify(Gd))],historyIndex:0,setActiveTool:n=>t({activeTool:n}),setViewMode:n=>t({viewMode:n}),toggleGrid:()=>t(n=>({isGridVisible:!n.isGridVisible})),setGridVisible:n=>t({isGridVisible:n}),setTextureResolution:n=>t({textureResolution:n}),setBrushColor:n=>t({brushColor:n}),setBrushSize:n=>t({brushSize:n}),setBrushOpacity:n=>t({brushOpacity:n}),setActiveLayerId:n=>t({activeLayerId:n}),recordHistory:()=>{const{layers:n,history:i,historyIndex:r}=e(),s=i.slice(0,r+1);s.push(JSON.parse(JSON.stringify(n))),s.length>30&&s.shift(),t({history:s,historyIndex:s.length-1})},addLayer:(n="New Layer",i="livery")=>{const r={id:`layer-${Date.now()}`,name:n,type:i,visible:!0,locked:!1,opacity:1,blendMode:"normal"};t(s=>({layers:[r,...s.layers],activeLayerId:r.id})),e().recordHistory()},removeLayer:n=>{t(i=>{if(i.layers.length<=1)return i;const r=i.layers.filter(s=>s.id!==n);return{layers:r,activeLayerId:i.activeLayerId===n?r[0].id:i.activeLayerId}}),e().recordHistory()},toggleLayerVisibility:n=>{t(i=>({layers:i.layers.map(r=>r.id===n?{...r,visible:!r.visible}:r)})),e().recordHistory()},toggleLayerLock:n=>{t(i=>({layers:i.layers.map(r=>r.id===n?{...r,locked:!r.locked}:r)}))},setLayerOpacity:(n,i)=>{t(r=>({layers:r.layers.map(s=>s.id===n?{...s,opacity:Math.max(0,Math.min(1,i))}:s)}))},renameLayer:(n,i)=>{t(r=>({layers:r.layers.map(s=>s.id===n?{...s,name:i}:s)})),e().recordHistory()},duplicateLayer:n=>{const i=e().layers.find(s=>s.id===n);if(!i)return;const r={...JSON.parse(JSON.stringify(i)),id:`layer-${Date.now()}`,name:`${i.name} Copy`};t(s=>({layers:[r,...s.layers],activeLayerId:r.id})),e().recordHistory()},setLayers:n=>{var i;t({layers:n,activeLayerId:((i=n[0])==null?void 0:i.id)||"layer-livery"}),e().recordHistory()},setLayerContent:(n,i)=>{t(r=>({layers:r.layers.map(s=>s.id===n?{...s,content:i}:s),artworkRevision:r.artworkRevision+1})),e().recordHistory()},undo:()=>{const{history:n,historyIndex:i}=e();if(i>0){const r=n[i-1];t({layers:JSON.parse(JSON.stringify(r)),historyIndex:i-1})}},redo:()=>{const{history:n,historyIndex:i}=e();if(i<n.length-1){const r=n[i+1];t({layers:JSON.parse(JSON.stringify(r)),historyIndex:i+1})}}}));/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bS=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),av=(...t)=>t.filter((e,n,i)=>!!e&&i.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var CS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AS=ce.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:o,...a},l)=>ce.createElement("svg",{ref:l,...CS,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:av("lucide",r),...a},[...o.map(([c,u])=>ce.createElement(c,u)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ee=(t,e)=>{const n=ce.forwardRef(({className:i,...r},s)=>ce.createElement(AS,{ref:s,iconNode:e,className:av(`lucide-${bS(t)}`,i),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cf=Ee("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RS=Ee("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hd=Ee("Car",[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NS=Ee("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv=Ee("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv=Ee("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PS=Ee("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Af=Ee("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vm=Ee("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv=Ee("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dv=Ee("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LS=Ee("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DS=Ee("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IS=Ee("Crosshair",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kr=Ee("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const US=Ee("Eraser",[["path",{d:"m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21",key:"182aya"}],["path",{d:"M22 21H7",key:"t4ddhn"}],["path",{d:"m5 11 9 9",key:"1mo9qw"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FS=Ee("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nc=Ee("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv=Ee("FilePlus",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M9 15h6",key:"cctwl0"}],["path",{d:"M12 18v-6",key:"17g6i2"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=Ee("FileSearch",[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"ms7g94"}],["path",{d:"m9 18-1.5-1.5",key:"1j6qii"}],["circle",{cx:"5",cy:"14",r:"3",key:"ufru5t"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv=Ee("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=Ee("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=Ee("Grid3x3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kS=Ee("ImagePlus",[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wd=Ee("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OS=Ee("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rf=Ee("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BS=Ee("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xu=Ee("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zS=Ee("LockOpen",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 9.9-1",key:"1mm8w8"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VS=Ee("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jS=Ee("Maximize",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GS=Ee("MousePointer",[["path",{d:"M12.586 12.586 19 19",key:"ea5xo7"}],["path",{d:"M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z",key:"277e5u"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HS=Ee("Move",[["polyline",{points:"5 9 2 12 5 15",key:"1r5uj5"}],["polyline",{points:"9 5 12 2 15 5",key:"5v383o"}],["polyline",{points:"15 19 12 22 9 19",key:"g7qi8m"}],["polyline",{points:"19 9 22 12 19 15",key:"tpp73q"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vu=Ee("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WS=Ee("PaintBucket",[["path",{d:"m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z",key:"irua1i"}],["path",{d:"m5 2 5 5",key:"1lls2c"}],["path",{d:"M2 13h15",key:"1hkzvu"}],["path",{d:"M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z",key:"xk76lq"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=Ee("Paintbrush",[["path",{d:"m14.622 17.897-10.68-2.913",key:"vj2p1u"}],["path",{d:"M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z",key:"18tc5c"}],["path",{d:"M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15",key:"ytzfxy"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ec=Ee("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XS=Ee("Pipette",[["path",{d:"m2 22 1-1h3l9-9",key:"1sre89"}],["path",{d:"M3 21v-3l9-9",key:"hpe2y6"}],["path",{d:"m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z",key:"196du1"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $S=Ee("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YS=Ee("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qS=Ee("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KS=Ee("RotateCw",[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _m=Ee("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZS=Ee("Scaling",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M14 15H9v-5",key:"pi4jk9"}],["path",{d:"M16 3h5v5",key:"1806ms"}],["path",{d:"M21 3 9 15",key:"15kdhq"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QS=Ee("Split",[["path",{d:"M16 3h5v5",key:"1806ms"}],["path",{d:"M8 3H3v5",key:"15dfkv"}],["path",{d:"M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3",key:"1qrqzj"}],["path",{d:"m15 9 6-6",key:"ko1vev"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JS=Ee("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=Ee("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eM=Ee("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tM=Ee("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=Ee("Type",[["polyline",{points:"4 7 4 4 20 4 20 7",key:"1nosan"}],["line",{x1:"9",x2:"15",y1:"20",y2:"20",key:"swin9y"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20",key:"1tx1rr"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nM=Ee("Undo2",[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vo=Ee("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=Ee("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iM=Ee("ZoomIn",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rM=Ee("ZoomOut",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]),sM=()=>{const{currentProject:t,setProjectName:e,isDirty:n,saveProject:i,exportProjectFile:r,newProject:s,loadProject:o}=Qn(),{isDevConsoleOpen:a,toggleDevConsole:l,setWelcomeModalOpen:c,setExportModalOpen:u}=Jn(),{undo:d,redo:p}=ci(),[m,x]=ce.useState(null),v=ce.useRef(null),g=()=>{var y;(y=v.current)==null||y.click(),x(null)},h=async y=>{var S;const _=(S=y.target.files)==null?void 0:S[0];if(_)try{const A=await TS(_);o(A)}catch(A){alert(A instanceof Error?A.message:"Failed to load project")}};return f.jsxs("header",{className:"h-10 bg-studio-panel border-b border-studio-border px-3 flex items-center justify-between text-xs select-none z-30 relative",children:[f.jsx("input",{type:"file",ref:v,accept:".gslp,.json",className:"hidden",onChange:h}),f.jsxs("div",{className:"flex items-center space-x-3",children:[f.jsxs("div",{onClick:()=>c(!0),className:"flex items-center space-x-2 font-bold text-studio-text hover:text-studio-accent cursor-pointer transition pr-2 border-r border-studio-border",title:"Open Welcome Screen",children:[f.jsx(Hd,{className:"w-4 h-4 text-studio-accent"}),f.jsx("span",{className:"tracking-wider uppercase text-[11px] font-black",children:"GTA SA Livery Studio"})]}),f.jsxs("nav",{className:"flex items-center space-x-0.5 relative",children:[f.jsxs("div",{className:"relative",children:[f.jsx("button",{onClick:()=>x(m==="file"?null:"file"),className:`px-2 py-1 rounded hover:bg-studio-secondary transition ${m==="file"?"bg-studio-secondary text-studio-accent":"text-studio-text"}`,children:"File"}),m==="file"&&f.jsxs("div",{className:"absolute top-full left-0 mt-1 w-52 bg-studio-panel border border-studio-border rounded-md shadow-2xl py-1 z-50 text-studio-text",onMouseLeave:()=>x(null),children:[f.jsxs("button",{onClick:()=>{s(),x(null)},className:"w-full text-left px-3 py-1.5 hover:bg-studio-secondary flex items-center justify-between",children:[f.jsxs("span",{className:"flex items-center space-x-2",children:[f.jsx(hv,{className:"w-3.5 h-3.5 text-studio-muted"}),f.jsx("span",{children:"New Project"})]}),f.jsx("span",{className:"text-[10px] text-studio-muted",children:"Ctrl+N"})]}),f.jsxs("button",{onClick:g,className:"w-full text-left px-3 py-1.5 hover:bg-studio-secondary flex items-center justify-between",children:[f.jsxs("span",{className:"flex items-center space-x-2",children:[f.jsx(mv,{className:"w-3.5 h-3.5 text-studio-muted"}),f.jsx("span",{children:"Open Project (.gslp)"})]}),f.jsx("span",{className:"text-[10px] text-studio-muted",children:"Ctrl+O"})]}),f.jsx("div",{className:"h-px bg-studio-border my-1"}),f.jsxs("button",{onClick:()=>{c(!0),x(null)},className:"w-full text-left px-3 py-1.5 hover:bg-studio-secondary flex items-center space-x-2",children:[f.jsx(Hd,{className:"w-3.5 h-3.5 text-studio-muted"}),f.jsx("span",{children:"Import .DFF / .TXD..."})]}),f.jsx("div",{className:"h-px bg-studio-border my-1"}),f.jsxs("button",{onClick:()=>{i(),x(null)},className:"w-full text-left px-3 py-1.5 hover:bg-studio-secondary flex items-center justify-between",children:[f.jsxs("span",{className:"flex items-center space-x-2",children:[f.jsx(_m,{className:"w-3.5 h-3.5 text-studio-muted"}),f.jsx("span",{children:"Save Project"})]}),f.jsx("span",{className:"text-[10px] text-studio-muted",children:"Ctrl+S"})]}),f.jsxs("button",{onClick:()=>{r(),x(null)},className:"w-full text-left px-3 py-1.5 hover:bg-studio-secondary flex items-center justify-between",children:[f.jsxs("span",{className:"flex items-center space-x-2",children:[f.jsx(kr,{className:"w-3.5 h-3.5 text-studio-muted"}),f.jsx("span",{children:"Export .gslp File..."})]}),f.jsx("span",{className:"text-[10px] text-studio-muted",children:"Ctrl+Shift+S"})]}),f.jsx("div",{className:"h-px bg-studio-border my-1"}),f.jsxs("button",{onClick:()=>{u(!0),x(null)},className:"w-full text-left px-3 py-1.5 hover:bg-studio-secondary flex items-center space-x-2 text-studio-accent",children:[f.jsx(kr,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"Export Texture (PNG / TGA)..."})]})]})]}),f.jsxs("div",{className:"relative",children:[f.jsx("button",{onClick:()=>x(m==="edit"?null:"edit"),className:`px-2 py-1 rounded hover:bg-studio-secondary transition ${m==="edit"?"bg-studio-secondary text-studio-accent":"text-studio-text"}`,children:"Edit"}),m==="edit"&&f.jsxs("div",{className:"absolute top-full left-0 mt-1 w-44 bg-studio-panel border border-studio-border rounded-md shadow-2xl py-1 z-50 text-studio-text",onMouseLeave:()=>x(null),children:[f.jsxs("button",{onClick:()=>{d(),x(null)},className:"w-full text-left px-3 py-1.5 hover:bg-studio-secondary flex items-center justify-between",children:[f.jsx("span",{children:"Undo"}),f.jsx("span",{className:"text-[10px] text-studio-muted",children:"Ctrl+Z"})]}),f.jsxs("button",{onClick:()=>{p(),x(null)},className:"w-full text-left px-3 py-1.5 hover:bg-studio-secondary flex items-center justify-between",children:[f.jsx("span",{children:"Redo"}),f.jsx("span",{className:"text-[10px] text-studio-muted",children:"Ctrl+Shift+Z"})]})]})]}),f.jsxs("div",{className:"relative",children:[f.jsx("button",{onClick:()=>x(m==="view"?null:"view"),className:`px-2 py-1 rounded hover:bg-studio-secondary transition ${m==="view"?"bg-studio-secondary text-studio-accent":"text-studio-text"}`,children:"View"}),m==="view"&&f.jsx("div",{className:"absolute top-full left-0 mt-1 w-48 bg-studio-panel border border-studio-border rounded-md shadow-2xl py-1 z-50 text-studio-text",onMouseLeave:()=>x(null),children:f.jsxs("button",{onClick:()=>{l(),x(null)},className:"w-full text-left px-3 py-1.5 hover:bg-studio-secondary flex items-center justify-between",children:[f.jsx("span",{children:"Developer Console"}),f.jsx("span",{className:"text-[10px] text-studio-muted",children:"F12 / Console"})]})})]}),f.jsx("button",{onClick:()=>c(!0),className:"px-2 py-1 rounded text-studio-text hover:bg-studio-secondary transition",children:"Vehicle"}),f.jsx("button",{onClick:()=>Jn.getState().setActiveTab("uv"),className:"px-2 py-1 rounded text-studio-text hover:bg-studio-secondary transition",children:"UV"}),f.jsx("button",{onClick:()=>u(!0),className:"px-2 py-1 rounded text-studio-text hover:bg-studio-secondary transition",children:"Texture"}),f.jsx("button",{onClick:()=>alert(`GTA SA Livery Studio v0.1.0
Professional vehicle livery editor for GTA San Andreas.
Phase 1: Foundation.`),className:"px-2 py-1 rounded text-studio-text hover:bg-studio-secondary transition",children:"Help"})]})]}),f.jsxs("div",{className:"flex items-center space-x-2",children:[f.jsx("input",{type:"text",value:t.name,onChange:y=>e(y.target.value),className:"bg-transparent text-center font-medium text-studio-text hover:bg-studio-secondary focus:bg-studio-secondary px-2 py-0.5 rounded border border-transparent focus:border-studio-border outline-none transition w-56 text-xs"}),n?f.jsxs("span",{className:"flex items-center space-x-1 text-studio-warning text-[10px]",title:"Unsaved changes",children:[f.jsx(Af,{className:"w-3 h-3"}),f.jsx("span",{children:"Unsaved"})]}):f.jsxs("span",{className:"flex items-center space-x-1 text-studio-muted text-[10px]",title:"All changes saved",children:[f.jsx(NS,{className:"w-3 h-3 text-studio-success"}),f.jsx("span",{children:"Saved"})]})]}),f.jsxs("div",{className:"flex items-center space-x-2",children:[f.jsxs("button",{onClick:()=>i(),className:"px-2.5 py-1 bg-studio-secondary hover:bg-studio-border text-studio-text rounded text-xs flex items-center space-x-1.5 transition",title:"Save Project (Ctrl+S)",children:[f.jsx(_m,{className:"w-3.5 h-3.5 text-studio-accent"}),f.jsx("span",{children:"Save"})]}),f.jsxs("button",{onClick:()=>u(!0),className:"px-2.5 py-1 bg-studio-accent hover:bg-studio-accentHover text-white rounded text-xs font-medium flex items-center space-x-1.5 transition shadow",children:[f.jsx(kr,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"Export"})]}),f.jsx("div",{className:"h-4 w-px bg-studio-border mx-1"}),f.jsxs("button",{onClick:l,className:`px-2 py-1 rounded text-xs flex items-center space-x-1.5 transition ${a?"bg-studio-accent/20 text-studio-accent border border-studio-accent/50":"text-studio-muted hover:text-studio-text hover:bg-studio-secondary"}`,title:"Toggle Developer Telemetry Console",children:[f.jsx(vv,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"Dev Mode"})]})]})]})},oM=[{id:"select",label:"Select Tool",shortcut:"V",icon:GS},{id:"move",label:"Move Tool",shortcut:"G",icon:HS},{id:"rotate",label:"Rotate Tool",shortcut:"R",icon:KS},{id:"scale",label:"Scale Tool",shortcut:"S",icon:ZS},{id:"brush",label:"Brush Tool",shortcut:"B",icon:xv},{id:"eraser",label:"Eraser Tool",shortcut:"E",icon:US},{id:"rectangle",label:"Shape Tool",shortcut:"U",icon:JS},{id:"text",label:"Text Tool",shortcut:"T",icon:_v},{id:"image",label:"Image / Decal",shortcut:"I",icon:Wd},{id:"fill",label:"Fill Tool",shortcut:"G",icon:WS},{id:"eyedropper",label:"Color Picker",shortcut:"K",icon:XS}],aM=()=>{const{activeTool:t,setActiveTool:e,brushColor:n,setBrushColor:i,brushSize:r}=ci();return f.jsxs("aside",{className:"w-12 bg-studio-panel border-r border-studio-border flex flex-col items-center py-2 select-none z-20 justify-between",children:[f.jsx("div",{className:"flex flex-col items-center space-y-1 w-full px-1",children:oM.map(s=>{const o=s.icon,a=t===s.id;return f.jsxs("button",{onClick:()=>e(s.id),className:`w-9 h-9 flex items-center justify-center rounded-lg transition group relative ${a?"bg-studio-accent text-white shadow-md":"text-studio-muted hover:text-studio-text hover:bg-studio-secondary"}`,title:`${s.label} (${s.shortcut})`,children:[f.jsx(o,{className:"w-4 h-4"}),f.jsxs("div",{className:"absolute left-full ml-2 hidden group-hover:flex items-center px-2 py-1 bg-studio-secondary border border-studio-border rounded shadow-lg text-[11px] text-studio-text whitespace-nowrap z-50 pointer-events-none",children:[f.jsx("span",{children:s.label}),f.jsx("span",{className:"ml-1.5 px-1 py-0.5 bg-studio-border rounded text-[10px] text-studio-muted font-mono",children:s.shortcut})]})]},s.id)})}),f.jsxs("div",{className:"flex flex-col items-center space-y-2 pb-1 border-t border-studio-border pt-2 w-full px-1",children:[f.jsx("div",{className:"relative group",children:f.jsx("input",{type:"color",value:n,onChange:s=>i(s.target.value),className:"w-7 h-7 rounded cursor-pointer border border-studio-border bg-transparent overflow-hidden",title:"Active Color"})}),f.jsxs("div",{className:"text-[10px] font-mono text-studio-muted",title:`Brush Size: ${r}px`,children:[r,"px"]})]})]})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Nf="168",Vs={ROTATE:0,DOLLY:1,PAN:2},Ls={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},lM=0,ym=1,cM=2,Sv=1,Mv=2,xi=3,cr=0,mn=1,ln=2,sr=0,js=1,Sm=2,Mm=3,Em=4,uM=5,Cr=100,dM=101,hM=102,fM=103,pM=104,mM=200,gM=201,xM=202,vM=203,Xd=204,$d=205,_M=206,yM=207,SM=208,MM=209,EM=210,wM=211,TM=212,bM=213,CM=214,AM=0,RM=1,NM=2,tc=3,PM=4,LM=5,DM=6,IM=7,Ev=0,UM=1,FM=2,or=0,kM=1,OM=2,BM=3,wv=4,zM=5,VM=6,jM=7,Tv=300,eo=301,to=302,Yd=303,qd=304,Pc=306,Kd=1e3,Lr=1001,Zd=1002,In=1003,GM=1004,ka=1005,$n=1006,_u=1007,Dr=1008,Ri=1009,bv=1010,Cv=1011,aa=1012,Pf=1013,Hr=1014,Mi=1015,ma=1016,Lf=1017,Df=1018,no=1020,Av=35902,Rv=1021,Nv=1022,Yn=1023,Pv=1024,Lv=1025,Gs=1026,io=1027,Dv=1028,If=1029,Iv=1030,Uf=1031,Ff=1033,Ml=33776,El=33777,wl=33778,Tl=33779,Qd=35840,Jd=35841,eh=35842,th=35843,nh=36196,ih=37492,rh=37496,sh=37808,oh=37809,ah=37810,lh=37811,ch=37812,uh=37813,dh=37814,hh=37815,fh=37816,ph=37817,mh=37818,gh=37819,xh=37820,vh=37821,bl=36492,_h=36494,yh=36495,Uv=36283,Sh=36284,Mh=36285,Eh=36286,HM=3200,WM=3201,Fv=0,XM=1,$i="",Wn="srgb",mr="srgb-linear",kf="display-p3",Lc="display-p3-linear",nc="linear",ot="srgb",ic="rec709",rc="p3",Jr=7680,wm=519,$M=512,YM=513,qM=514,kv=515,KM=516,ZM=517,QM=518,JM=519,Tm=35044,bm="300 es",Ei=2e3,sc=2001;class qr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Cl=Math.PI/180,wh=180/Math.PI;function ga(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Wt[t&255]+Wt[t>>8&255]+Wt[t>>16&255]+Wt[t>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[n&63|128]+Wt[n>>8&255]+"-"+Wt[n>>16&255]+Wt[n>>24&255]+Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]).toLowerCase()}function Qt(t,e,n){return Math.max(e,Math.min(n,t))}function eE(t,e){return(t%e+e)%e}function yu(t,e,n){return(1-n)*t+n*e}function yo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function sn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const tE={DEG2RAD:Cl};class Pe{constructor(e=0,n=0){Pe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class je{constructor(e,n,i,r,s,o,a,l,c){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],p=i[2],m=i[5],x=i[8],v=r[0],g=r[3],h=r[6],y=r[1],_=r[4],S=r[7],A=r[2],C=r[5],b=r[8];return s[0]=o*v+a*y+l*A,s[3]=o*g+a*_+l*C,s[6]=o*h+a*S+l*b,s[1]=c*v+u*y+d*A,s[4]=c*g+u*_+d*C,s[7]=c*h+u*S+d*b,s[2]=p*v+m*y+x*A,s[5]=p*g+m*_+x*C,s[8]=p*h+m*S+x*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,p=a*l-u*s,m=c*s-o*l,x=n*d+i*p+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/x;return e[0]=d*v,e[1]=(r*c-u*i)*v,e[2]=(a*i-r*o)*v,e[3]=p*v,e[4]=(u*n-r*l)*v,e[5]=(r*s-a*n)*v,e[6]=m*v,e[7]=(i*l-c*n)*v,e[8]=(o*n-i*s)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Su.makeScale(e,n)),this}rotate(e){return this.premultiply(Su.makeRotation(-e)),this}translate(e,n){return this.premultiply(Su.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Su=new je;function Ov(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function oc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function nE(){const t=oc("canvas");return t.style.display="block",t}const Cm={};function jo(t){t in Cm||(Cm[t]=!0,console.warn(t))}function iE(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Am=new je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Rm=new je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),So={[mr]:{transfer:nc,primaries:ic,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[Wn]:{transfer:ot,primaries:ic,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Lc]:{transfer:nc,primaries:rc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(Rm),fromReference:t=>t.applyMatrix3(Am)},[kf]:{transfer:ot,primaries:rc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(Rm),fromReference:t=>t.applyMatrix3(Am).convertLinearToSRGB()}},rE=new Set([mr,Lc]),et={enabled:!0,_workingColorSpace:mr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!rE.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=So[e].toReference,r=So[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return So[t].primaries},getTransfer:function(t){return t===$i?nc:So[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(So[e].luminanceCoefficients)}};function Hs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Mu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let es;class sE{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{es===void 0&&(es=oc("canvas")),es.width=e.width,es.height=e.height;const i=es.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=es}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=oc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Hs(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Hs(n[i]/255)*255):n[i]=Hs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let oE=0;class Bv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:oE++}),this.uuid=ga(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Eu(r[o].image)):s.push(Eu(r[o]))}else s=Eu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Eu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?sE.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let aE=0;class tn extends qr{constructor(e=tn.DEFAULT_IMAGE,n=tn.DEFAULT_MAPPING,i=Lr,r=Lr,s=$n,o=Dr,a=Yn,l=Ri,c=tn.DEFAULT_ANISOTROPY,u=$i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:aE++}),this.uuid=ga(),this.name="",this.source=new Bv(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Tv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Kd:e.x=e.x-Math.floor(e.x);break;case Lr:e.x=e.x<0?0:1;break;case Zd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Kd:e.y=e.y-Math.floor(e.y);break;case Lr:e.y=e.y<0?0:1;break;case Zd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=Tv;tn.DEFAULT_ANISOTROPY=1;class At{constructor(e=0,n=0,i=0,r=1){At.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],p=l[1],m=l[5],x=l[9],v=l[2],g=l[6],h=l[10];if(Math.abs(u-p)<.01&&Math.abs(d-v)<.01&&Math.abs(x-g)<.01){if(Math.abs(u+p)<.1&&Math.abs(d+v)<.1&&Math.abs(x+g)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,S=(m+1)/2,A=(h+1)/2,C=(u+p)/4,b=(d+v)/4,R=(x+g)/4;return _>S&&_>A?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=C/i,s=b/i):S>A?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=C/r,s=R/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=b/s,r=R/s),this.set(i,r,s,n),this}let y=Math.sqrt((g-x)*(g-x)+(d-v)*(d-v)+(p-u)*(p-u));return Math.abs(y)<.001&&(y=1),this.x=(g-x)/y,this.y=(d-v)/y,this.z=(p-u)/y,this.w=Math.acos((c+m+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class lE extends qr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new At(0,0,e,n),this.scissorTest=!1,this.viewport=new At(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new tn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Bv(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wr extends lE{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class zv extends tn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=In,this.minFilter=In,this.wrapR=Lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class cE extends tn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=In,this.minFilter=In,this.wrapR=Lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const p=s[o+0],m=s[o+1],x=s[o+2],v=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d;return}if(a===1){e[n+0]=p,e[n+1]=m,e[n+2]=x,e[n+3]=v;return}if(d!==v||l!==p||c!==m||u!==x){let g=1-a;const h=l*p+c*m+u*x+d*v,y=h>=0?1:-1,_=1-h*h;if(_>Number.EPSILON){const A=Math.sqrt(_),C=Math.atan2(A,h*y);g=Math.sin(g*C)/A,a=Math.sin(a*C)/A}const S=a*y;if(l=l*g+p*S,c=c*g+m*S,u=u*g+x*S,d=d*g+v*S,g===1-a){const A=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=A,c*=A,u*=A,d*=A}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],p=s[o+1],m=s[o+2],x=s[o+3];return e[n]=a*x+u*d+l*m-c*p,e[n+1]=l*x+u*p+c*d-a*m,e[n+2]=c*x+u*m+a*p-l*d,e[n+3]=u*x-a*d-l*p-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),p=l(i/2),m=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=p*u*d+c*m*x,this._y=c*m*d-p*u*x,this._z=c*u*x+p*m*d,this._w=c*u*d-p*m*x;break;case"YXZ":this._x=p*u*d+c*m*x,this._y=c*m*d-p*u*x,this._z=c*u*x-p*m*d,this._w=c*u*d+p*m*x;break;case"ZXY":this._x=p*u*d-c*m*x,this._y=c*m*d+p*u*x,this._z=c*u*x+p*m*d,this._w=c*u*d-p*m*x;break;case"ZYX":this._x=p*u*d-c*m*x,this._y=c*m*d+p*u*x,this._z=c*u*x-p*m*d,this._w=c*u*d+p*m*x;break;case"YZX":this._x=p*u*d+c*m*x,this._y=c*m*d+p*u*x,this._z=c*u*x-p*m*d,this._w=c*u*d-p*m*x;break;case"XZY":this._x=p*u*d-c*m*x,this._y=c*m*d-p*u*x,this._z=c*u*x+p*m*d,this._w=c*u*d+p*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],d=n[10],p=i+a+d;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>d){const m=2*Math.sqrt(1+i-a-d);this._w=(u-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>d){const m=2*Math.sqrt(1+a-i-d);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-n)*u)/c,p=Math.sin(n*u)/c;return this._w=o*d+this._w*p,this._x=i*d+this._x*p,this._y=r*d+this._y*p,this._z=s*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,n=0,i=0){j.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Nm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Nm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return wu.copy(this).projectOnVector(e),this.sub(wu)}reflect(e){return this.sub(wu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wu=new j,Nm=new Xr;class Ni{constructor(e=new j(1/0,1/0,1/0),n=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(zn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(zn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=zn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,zn):zn.fromBufferAttribute(s,o),zn.applyMatrix4(e.matrixWorld),this.expandByPoint(zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Oa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Oa.copy(i.boundingBox)),Oa.applyMatrix4(e.matrixWorld),this.union(Oa)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zn),zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Mo),Ba.subVectors(this.max,Mo),ts.subVectors(e.a,Mo),ns.subVectors(e.b,Mo),is.subVectors(e.c,Mo),Ii.subVectors(ns,ts),Ui.subVectors(is,ns),xr.subVectors(ts,is);let n=[0,-Ii.z,Ii.y,0,-Ui.z,Ui.y,0,-xr.z,xr.y,Ii.z,0,-Ii.x,Ui.z,0,-Ui.x,xr.z,0,-xr.x,-Ii.y,Ii.x,0,-Ui.y,Ui.x,0,-xr.y,xr.x,0];return!Tu(n,ts,ns,is,Ba)||(n=[1,0,0,0,1,0,0,0,1],!Tu(n,ts,ns,is,Ba))?!1:(za.crossVectors(Ii,Ui),n=[za.x,za.y,za.z],Tu(n,ts,ns,is,Ba))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const hi=[new j,new j,new j,new j,new j,new j,new j,new j],zn=new j,Oa=new Ni,ts=new j,ns=new j,is=new j,Ii=new j,Ui=new j,xr=new j,Mo=new j,Ba=new j,za=new j,vr=new j;function Tu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){vr.fromArray(t,s);const a=r.x*Math.abs(vr.x)+r.y*Math.abs(vr.y)+r.z*Math.abs(vr.z),l=e.dot(vr),c=n.dot(vr),u=i.dot(vr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const uE=new Ni,Eo=new j,bu=new j;class Dc{constructor(e=new j,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):uE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Eo.subVectors(e,this.center);const n=Eo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Eo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Eo.copy(e.center).add(bu)),this.expandByPoint(Eo.copy(e.center).sub(bu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fi=new j,Cu=new j,Va=new j,Fi=new j,Au=new j,ja=new j,Ru=new j;class Ic{constructor(e=new j,n=new j(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=fi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(fi.copy(this.origin).addScaledVector(this.direction,n),fi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Cu.copy(e).add(n).multiplyScalar(.5),Va.copy(n).sub(e).normalize(),Fi.copy(this.origin).sub(Cu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Va),a=Fi.dot(this.direction),l=-Fi.dot(Va),c=Fi.lengthSq(),u=Math.abs(1-o*o);let d,p,m,x;if(u>0)if(d=o*l-a,p=o*a-l,x=s*u,d>=0)if(p>=-x)if(p<=x){const v=1/u;d*=v,p*=v,m=d*(d+o*p+2*a)+p*(o*d+p+2*l)+c}else p=s,d=Math.max(0,-(o*p+a)),m=-d*d+p*(p+2*l)+c;else p=-s,d=Math.max(0,-(o*p+a)),m=-d*d+p*(p+2*l)+c;else p<=-x?(d=Math.max(0,-(-o*s+a)),p=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+p*(p+2*l)+c):p<=x?(d=0,p=Math.min(Math.max(-s,-l),s),m=p*(p+2*l)+c):(d=Math.max(0,-(o*s+a)),p=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+p*(p+2*l)+c);else p=o>0?-s:s,d=Math.max(0,-(o*p+a)),m=-d*d+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Cu).addScaledVector(Va,p),m}intersectSphere(e,n){fi.subVectors(e.center,this.origin);const i=fi.dot(this.direction),r=fi.dot(fi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,p=this.origin;return c>=0?(i=(e.min.x-p.x)*c,r=(e.max.x-p.x)*c):(i=(e.max.x-p.x)*c,r=(e.min.x-p.x)*c),u>=0?(s=(e.min.y-p.y)*u,o=(e.max.y-p.y)*u):(s=(e.max.y-p.y)*u,o=(e.min.y-p.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-p.z)*d,l=(e.max.z-p.z)*d):(a=(e.max.z-p.z)*d,l=(e.min.z-p.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,fi)!==null}intersectTriangle(e,n,i,r,s){Au.subVectors(n,e),ja.subVectors(i,e),Ru.crossVectors(Au,ja);let o=this.direction.dot(Ru),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Fi.subVectors(this.origin,e);const l=a*this.direction.dot(ja.crossVectors(Fi,ja));if(l<0)return null;const c=a*this.direction.dot(Au.cross(Fi));if(c<0||l+c>o)return null;const u=-a*Fi.dot(Ru);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ut{constructor(e,n,i,r,s,o,a,l,c,u,d,p,m,x,v,g){ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,d,p,m,x,v,g)}set(e,n,i,r,s,o,a,l,c,u,d,p,m,x,v,g){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=p,h[3]=m,h[7]=x,h[11]=v,h[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/rs.setFromMatrixColumn(e,0).length(),s=1/rs.setFromMatrixColumn(e,1).length(),o=1/rs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const p=o*u,m=o*d,x=a*u,v=a*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=m+x*c,n[5]=p-v*c,n[9]=-a*l,n[2]=v-p*c,n[6]=x+m*c,n[10]=o*l}else if(e.order==="YXZ"){const p=l*u,m=l*d,x=c*u,v=c*d;n[0]=p+v*a,n[4]=x*a-m,n[8]=o*c,n[1]=o*d,n[5]=o*u,n[9]=-a,n[2]=m*a-x,n[6]=v+p*a,n[10]=o*l}else if(e.order==="ZXY"){const p=l*u,m=l*d,x=c*u,v=c*d;n[0]=p-v*a,n[4]=-o*d,n[8]=x+m*a,n[1]=m+x*a,n[5]=o*u,n[9]=v-p*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const p=o*u,m=o*d,x=a*u,v=a*d;n[0]=l*u,n[4]=x*c-m,n[8]=p*c+v,n[1]=l*d,n[5]=v*c+p,n[9]=m*c-x,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const p=o*l,m=o*c,x=a*l,v=a*c;n[0]=l*u,n[4]=v-p*d,n[8]=x*d+m,n[1]=d,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=m*d+x,n[10]=p-v*d}else if(e.order==="XZY"){const p=o*l,m=o*c,x=a*l,v=a*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=p*d+v,n[5]=o*u,n[9]=m*d-x,n[2]=x*d-m,n[6]=a*u,n[10]=v*d+p}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dE,e,hE)}lookAt(e,n,i){const r=this.elements;return _n.subVectors(e,n),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),ki.crossVectors(i,_n),ki.lengthSq()===0&&(Math.abs(i.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),ki.crossVectors(i,_n)),ki.normalize(),Ga.crossVectors(_n,ki),r[0]=ki.x,r[4]=Ga.x,r[8]=_n.x,r[1]=ki.y,r[5]=Ga.y,r[9]=_n.y,r[2]=ki.z,r[6]=Ga.z,r[10]=_n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],p=i[9],m=i[13],x=i[2],v=i[6],g=i[10],h=i[14],y=i[3],_=i[7],S=i[11],A=i[15],C=r[0],b=r[4],R=r[8],E=r[12],M=r[1],N=r[5],I=r[9],D=r[13],O=r[2],k=r[6],U=r[10],V=r[14],P=r[3],$=r[7],q=r[11],ne=r[15];return s[0]=o*C+a*M+l*O+c*P,s[4]=o*b+a*N+l*k+c*$,s[8]=o*R+a*I+l*U+c*q,s[12]=o*E+a*D+l*V+c*ne,s[1]=u*C+d*M+p*O+m*P,s[5]=u*b+d*N+p*k+m*$,s[9]=u*R+d*I+p*U+m*q,s[13]=u*E+d*D+p*V+m*ne,s[2]=x*C+v*M+g*O+h*P,s[6]=x*b+v*N+g*k+h*$,s[10]=x*R+v*I+g*U+h*q,s[14]=x*E+v*D+g*V+h*ne,s[3]=y*C+_*M+S*O+A*P,s[7]=y*b+_*N+S*k+A*$,s[11]=y*R+_*I+S*U+A*q,s[15]=y*E+_*D+S*V+A*ne,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],p=e[10],m=e[14],x=e[3],v=e[7],g=e[11],h=e[15];return x*(+s*l*d-r*c*d-s*a*p+i*c*p+r*a*m-i*l*m)+v*(+n*l*m-n*c*p+s*o*p-r*o*m+r*c*u-s*l*u)+g*(+n*c*d-n*a*m-s*o*d+i*o*m+s*a*u-i*c*u)+h*(-r*a*u-n*l*d+n*a*p+r*o*d-i*o*p+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],p=e[10],m=e[11],x=e[12],v=e[13],g=e[14],h=e[15],y=d*g*c-v*p*c+v*l*m-a*g*m-d*l*h+a*p*h,_=x*p*c-u*g*c-x*l*m+o*g*m+u*l*h-o*p*h,S=u*v*c-x*d*c+x*a*m-o*v*m-u*a*h+o*d*h,A=x*d*l-u*v*l-x*a*p+o*v*p+u*a*g-o*d*g,C=n*y+i*_+r*S+s*A;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/C;return e[0]=y*b,e[1]=(v*p*s-d*g*s-v*r*m+i*g*m+d*r*h-i*p*h)*b,e[2]=(a*g*s-v*l*s+v*r*c-i*g*c-a*r*h+i*l*h)*b,e[3]=(d*l*s-a*p*s-d*r*c+i*p*c+a*r*m-i*l*m)*b,e[4]=_*b,e[5]=(u*g*s-x*p*s+x*r*m-n*g*m-u*r*h+n*p*h)*b,e[6]=(x*l*s-o*g*s-x*r*c+n*g*c+o*r*h-n*l*h)*b,e[7]=(o*p*s-u*l*s+u*r*c-n*p*c-o*r*m+n*l*m)*b,e[8]=S*b,e[9]=(x*d*s-u*v*s-x*i*m+n*v*m+u*i*h-n*d*h)*b,e[10]=(o*v*s-x*a*s+x*i*c-n*v*c-o*i*h+n*a*h)*b,e[11]=(u*a*s-o*d*s-u*i*c+n*d*c+o*i*m-n*a*m)*b,e[12]=A*b,e[13]=(u*v*r-x*d*r+x*i*p-n*v*p-u*i*g+n*d*g)*b,e[14]=(x*a*r-o*v*r-x*i*l+n*v*l+o*i*g-n*a*g)*b,e[15]=(o*d*r-u*a*r+u*i*l-n*d*l-o*i*p+n*a*p)*b,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,d=a+a,p=s*c,m=s*u,x=s*d,v=o*u,g=o*d,h=a*d,y=l*c,_=l*u,S=l*d,A=i.x,C=i.y,b=i.z;return r[0]=(1-(v+h))*A,r[1]=(m+S)*A,r[2]=(x-_)*A,r[3]=0,r[4]=(m-S)*C,r[5]=(1-(p+h))*C,r[6]=(g+y)*C,r[7]=0,r[8]=(x+_)*b,r[9]=(g-y)*b,r[10]=(1-(p+v))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=rs.set(r[0],r[1],r[2]).length();const o=rs.set(r[4],r[5],r[6]).length(),a=rs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Vn.copy(this);const c=1/s,u=1/o,d=1/a;return Vn.elements[0]*=c,Vn.elements[1]*=c,Vn.elements[2]*=c,Vn.elements[4]*=u,Vn.elements[5]*=u,Vn.elements[6]*=u,Vn.elements[8]*=d,Vn.elements[9]*=d,Vn.elements[10]*=d,n.setFromRotationMatrix(Vn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Ei){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),d=(n+e)/(n-e),p=(i+r)/(i-r);let m,x;if(a===Ei)m=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===sc)m=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ei){const l=this.elements,c=1/(n-e),u=1/(i-r),d=1/(o-s),p=(n+e)*c,m=(i+r)*u;let x,v;if(a===Ei)x=(o+s)*d,v=-2*d;else if(a===sc)x=s*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const rs=new j,Vn=new ut,dE=new j(0,0,0),hE=new j(1,1,1),ki=new j,Ga=new j,_n=new j,Pm=new ut,Lm=new Xr;class ui{constructor(e=0,n=0,i=0,r=ui.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],p=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Qt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Pm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Lm.setFromEuler(this),this.setFromQuaternion(Lm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ui.DEFAULT_ORDER="XYZ";class Of{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fE=0;const Dm=new j,ss=new Xr,pi=new ut,Ha=new j,wo=new j,pE=new j,mE=new Xr,Im=new j(1,0,0),Um=new j(0,1,0),Fm=new j(0,0,1),km={type:"added"},gE={type:"removed"},os={type:"childadded",child:null},Nu={type:"childremoved",child:null};class Vt extends qr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fE++}),this.uuid=ga(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vt.DEFAULT_UP.clone();const e=new j,n=new ui,i=new Xr,r=new j(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ut},normalMatrix:{value:new je}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=Vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Of,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ss.setFromAxisAngle(e,n),this.quaternion.multiply(ss),this}rotateOnWorldAxis(e,n){return ss.setFromAxisAngle(e,n),this.quaternion.premultiply(ss),this}rotateX(e){return this.rotateOnAxis(Im,e)}rotateY(e){return this.rotateOnAxis(Um,e)}rotateZ(e){return this.rotateOnAxis(Fm,e)}translateOnAxis(e,n){return Dm.copy(e).applyQuaternion(this.quaternion),this.position.add(Dm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Im,e)}translateY(e){return this.translateOnAxis(Um,e)}translateZ(e){return this.translateOnAxis(Fm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ha.copy(e):Ha.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(wo,Ha,this.up):pi.lookAt(Ha,wo,this.up),this.quaternion.setFromRotationMatrix(pi),r&&(pi.extractRotation(r.matrixWorld),ss.setFromRotationMatrix(pi),this.quaternion.premultiply(ss.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(km),os.child=e,this.dispatchEvent(os),os.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(gE),Nu.child=e,this.dispatchEvent(Nu),Nu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(km),os.child=e,this.dispatchEvent(os),os.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,e,pE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,mE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),p=o(e.skeletons),m=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),p.length>0&&(i.skeletons=p),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Vt.DEFAULT_UP=new j(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const jn=new j,mi=new j,Pu=new j,gi=new j,as=new j,ls=new j,Om=new j,Lu=new j,Du=new j,Iu=new j;class oi{constructor(e=new j,n=new j,i=new j){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),jn.subVectors(e,n),r.cross(jn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){jn.subVectors(r,n),mi.subVectors(i,n),Pu.subVectors(e,n);const o=jn.dot(jn),a=jn.dot(mi),l=jn.dot(Pu),c=mi.dot(mi),u=mi.dot(Pu),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const p=1/d,m=(c*l-a*u)*p,x=(o*u-a*l)*p;return s.set(1-m-x,x,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,gi.x),l.addScaledVector(o,gi.y),l.addScaledVector(a,gi.z),l)}static isFrontFacing(e,n,i,r){return jn.subVectors(i,n),mi.subVectors(e,n),jn.cross(mi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jn.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),jn.cross(mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return oi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return oi.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;as.subVectors(r,i),ls.subVectors(s,i),Lu.subVectors(e,i);const l=as.dot(Lu),c=ls.dot(Lu);if(l<=0&&c<=0)return n.copy(i);Du.subVectors(e,r);const u=as.dot(Du),d=ls.dot(Du);if(u>=0&&d<=u)return n.copy(r);const p=l*d-u*c;if(p<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(as,o);Iu.subVectors(e,s);const m=as.dot(Iu),x=ls.dot(Iu);if(x>=0&&m<=x)return n.copy(s);const v=m*c-l*x;if(v<=0&&c>=0&&x<=0)return a=c/(c-x),n.copy(i).addScaledVector(ls,a);const g=u*x-m*d;if(g<=0&&d-u>=0&&m-x>=0)return Om.subVectors(s,r),a=(d-u)/(d-u+(m-x)),n.copy(r).addScaledVector(Om,a);const h=1/(g+v+p);return o=v*h,a=p*h,n.copy(i).addScaledVector(as,o).addScaledVector(ls,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Vv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oi={h:0,s:0,l:0},Wa={h:0,s:0,l:0};function Uu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class ke{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Wn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=et.workingColorSpace){return this.r=e,this.g=n,this.b=i,et.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=et.workingColorSpace){if(e=eE(e,1),n=Qt(n,0,1),i=Qt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Uu(o,s,e+1/3),this.g=Uu(o,s,e),this.b=Uu(o,s,e-1/3)}return et.toWorkingColorSpace(this,r),this}setStyle(e,n=Wn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Wn){const i=Vv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hs(e.r),this.g=Hs(e.g),this.b=Hs(e.b),this}copyLinearToSRGB(e){return this.r=Mu(e.r),this.g=Mu(e.g),this.b=Mu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wn){return et.fromWorkingColorSpace(Xt.copy(this),e),Math.round(Qt(Xt.r*255,0,255))*65536+Math.round(Qt(Xt.g*255,0,255))*256+Math.round(Qt(Xt.b*255,0,255))}getHexString(e=Wn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=et.workingColorSpace){et.fromWorkingColorSpace(Xt.copy(this),n);const i=Xt.r,r=Xt.g,s=Xt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=et.workingColorSpace){return et.fromWorkingColorSpace(Xt.copy(this),n),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=Wn){et.fromWorkingColorSpace(Xt.copy(this),e);const n=Xt.r,i=Xt.g,r=Xt.b;return e!==Wn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Oi),this.setHSL(Oi.h+e,Oi.s+n,Oi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Oi),e.getHSL(Wa);const i=yu(Oi.h,Wa.h,n),r=yu(Oi.s,Wa.s,n),s=yu(Oi.l,Wa.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new ke;ke.NAMES=Vv;let xE=0;class Kr extends qr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xE++}),this.uuid=ga(),this.name="",this.type="Material",this.blending=js,this.side=cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xd,this.blendDst=$d,this.blendEquation=Cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=tc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jr,this.stencilZFail=Jr,this.stencilZPass=Jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==js&&(i.blending=this.blending),this.side!==cr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Xd&&(i.blendSrc=this.blendSrc),this.blendDst!==$d&&(i.blendDst=this.blendDst),this.blendEquation!==Cr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==tc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Jr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Jr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Jr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Bf extends Kr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=Ev,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new j,Xa=new Pe;class Jt{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Tm,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Mi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return jo("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Xa.fromBufferAttribute(this,n),Xa.applyMatrix3(e),this.setXY(n,Xa.x,Xa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix3(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix4(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyNormalMatrix(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.transformDirection(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=yo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=sn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=yo(n,this.array)),n}setX(e,n){return this.normalized&&(n=sn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=yo(n,this.array)),n}setY(e,n){return this.normalized&&(n=sn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=yo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=sn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=yo(n,this.array)),n}setW(e,n){return this.normalized&&(n=sn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=sn(n,this.array),i=sn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=sn(n,this.array),i=sn(i,this.array),r=sn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=sn(n,this.array),i=sn(i,this.array),r=sn(r,this.array),s=sn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Tm&&(e.usage=this.usage),e}}class jv extends Jt{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Gv extends Jt{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class gn extends Jt{constructor(e,n,i){super(new Float32Array(e),n,i)}}let vE=0;const Rn=new ut,Fu=new Vt,cs=new j,yn=new Ni,To=new Ni,Lt=new j;class Bt extends qr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vE++}),this.uuid=ga(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ov(e)?Gv:jv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new je().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Rn.makeRotationFromQuaternion(e),this.applyMatrix4(Rn),this}rotateX(e){return Rn.makeRotationX(e),this.applyMatrix4(Rn),this}rotateY(e){return Rn.makeRotationY(e),this.applyMatrix4(Rn),this}rotateZ(e){return Rn.makeRotationZ(e),this.applyMatrix4(Rn),this}translate(e,n,i){return Rn.makeTranslation(e,n,i),this.applyMatrix4(Rn),this}scale(e,n,i){return Rn.makeScale(e,n,i),this.applyMatrix4(Rn),this}lookAt(e){return Fu.lookAt(e),Fu.updateMatrix(),this.applyMatrix4(Fu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new gn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ni);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];yn.setFromBufferAttribute(s),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const i=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];To.setFromBufferAttribute(a),this.morphTargetsRelative?(Lt.addVectors(yn.min,To.min),yn.expandByPoint(Lt),Lt.addVectors(yn.max,To.max),yn.expandByPoint(Lt)):(yn.expandByPoint(To.min),yn.expandByPoint(To.max))}yn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Lt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Lt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Lt.fromBufferAttribute(a,c),l&&(cs.fromBufferAttribute(e,c),Lt.add(cs)),r=Math.max(r,i.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jt(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new j,l[R]=new j;const c=new j,u=new j,d=new j,p=new Pe,m=new Pe,x=new Pe,v=new j,g=new j;function h(R,E,M){c.fromBufferAttribute(i,R),u.fromBufferAttribute(i,E),d.fromBufferAttribute(i,M),p.fromBufferAttribute(s,R),m.fromBufferAttribute(s,E),x.fromBufferAttribute(s,M),u.sub(c),d.sub(c),m.sub(p),x.sub(p);const N=1/(m.x*x.y-x.x*m.y);isFinite(N)&&(v.copy(u).multiplyScalar(x.y).addScaledVector(d,-m.y).multiplyScalar(N),g.copy(d).multiplyScalar(m.x).addScaledVector(u,-x.x).multiplyScalar(N),a[R].add(v),a[E].add(v),a[M].add(v),l[R].add(g),l[E].add(g),l[M].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let R=0,E=y.length;R<E;++R){const M=y[R],N=M.start,I=M.count;for(let D=N,O=N+I;D<O;D+=3)h(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const _=new j,S=new j,A=new j,C=new j;function b(R){A.fromBufferAttribute(r,R),C.copy(A);const E=a[R];_.copy(E),_.sub(A.multiplyScalar(A.dot(E))).normalize(),S.crossVectors(C,E);const N=S.dot(l[R])<0?-1:1;o.setXYZW(R,_.x,_.y,_.z,N)}for(let R=0,E=y.length;R<E;++R){const M=y[R],N=M.start,I=M.count;for(let D=N,O=N+I;D<O;D+=3)b(e.getX(D+0)),b(e.getX(D+1)),b(e.getX(D+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Jt(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let p=0,m=i.count;p<m;p++)i.setXYZ(p,0,0,0);const r=new j,s=new j,o=new j,a=new j,l=new j,c=new j,u=new j,d=new j;if(e)for(let p=0,m=e.count;p<m;p+=3){const x=e.getX(p+0),v=e.getX(p+1),g=e.getX(p+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,v),o.fromBufferAttribute(n,g),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let p=0,m=n.count;p<m;p+=3)r.fromBufferAttribute(n,p+0),s.fromBufferAttribute(n,p+1),o.fromBufferAttribute(n,p+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(p+0,u.x,u.y,u.z),i.setXYZ(p+1,u.x,u.y,u.z),i.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Lt.fromBufferAttribute(e,n),Lt.normalize(),e.setXYZ(n,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,p=new c.constructor(l.length*u);let m=0,x=0;for(let v=0,g=l.length;v<g;v++){a.isInterleavedBufferAttribute?m=l[v]*a.data.stride+a.offset:m=l[v]*u;for(let h=0;h<u;h++)p[x++]=c[m++]}return new Jt(p,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Bt,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const p=c[u],m=e(p,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,p=c.length;d<p;d++){const m=c[d];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let p=0,m=d.length;p<m;p++)u.push(d[p].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bm=new ut,_r=new Ic,$a=new Dc,zm=new j,us=new j,ds=new j,hs=new j,ku=new j,Ya=new j,qa=new Pe,Ka=new Pe,Za=new Pe,Vm=new j,jm=new j,Gm=new j,Qa=new j,Ja=new j;class un extends Vt{constructor(e=new Bt,n=new Bf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ya.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(ku.fromBufferAttribute(d,e),o?Ya.addScaledVector(ku,u):Ya.addScaledVector(ku.sub(n),u))}n.add(Ya)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),$a.copy(i.boundingSphere),$a.applyMatrix4(s),_r.copy(e.ray).recast(e.near),!($a.containsPoint(_r.origin)===!1&&(_r.intersectSphere($a,zm)===null||_r.origin.distanceToSquared(zm)>(e.far-e.near)**2))&&(Bm.copy(s).invert(),_r.copy(e.ray).applyMatrix4(Bm),!(i.boundingBox!==null&&_r.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,_r)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,p=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,v=p.length;x<v;x++){const g=p[x],h=o[g.materialIndex],y=Math.max(g.start,m.start),_=Math.min(a.count,Math.min(g.start+g.count,m.start+m.count));for(let S=y,A=_;S<A;S+=3){const C=a.getX(S),b=a.getX(S+1),R=a.getX(S+2);r=el(this,h,e,i,c,u,d,C,b,R),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const x=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let g=x,h=v;g<h;g+=3){const y=a.getX(g),_=a.getX(g+1),S=a.getX(g+2);r=el(this,o,e,i,c,u,d,y,_,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,v=p.length;x<v;x++){const g=p[x],h=o[g.materialIndex],y=Math.max(g.start,m.start),_=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let S=y,A=_;S<A;S+=3){const C=S,b=S+1,R=S+2;r=el(this,h,e,i,c,u,d,C,b,R),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const x=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let g=x,h=v;g<h;g+=3){const y=g,_=g+1,S=g+2;r=el(this,o,e,i,c,u,d,y,_,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function _E(t,e,n,i,r,s,o,a){let l;if(e.side===mn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===cr,a),l===null)return null;Ja.copy(a),Ja.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ja);return c<n.near||c>n.far?null:{distance:c,point:Ja.clone(),object:t}}function el(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,us),t.getVertexPosition(l,ds),t.getVertexPosition(c,hs);const u=_E(t,e,n,i,us,ds,hs,Qa);if(u){r&&(qa.fromBufferAttribute(r,a),Ka.fromBufferAttribute(r,l),Za.fromBufferAttribute(r,c),u.uv=oi.getInterpolation(Qa,us,ds,hs,qa,Ka,Za,new Pe)),s&&(qa.fromBufferAttribute(s,a),Ka.fromBufferAttribute(s,l),Za.fromBufferAttribute(s,c),u.uv1=oi.getInterpolation(Qa,us,ds,hs,qa,Ka,Za,new Pe)),o&&(Vm.fromBufferAttribute(o,a),jm.fromBufferAttribute(o,l),Gm.fromBufferAttribute(o,c),u.normal=oi.getInterpolation(Qa,us,ds,hs,Vm,jm,Gm,new j),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new j,materialIndex:0};oi.getNormal(us,ds,hs,d.normal),u.face=d}return u}class co extends Bt{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let p=0,m=0;x("z","y","x",-1,-1,i,n,e,o,s,0),x("z","y","x",1,-1,i,n,-e,o,s,1),x("x","z","y",1,1,e,i,n,r,o,2),x("x","z","y",1,-1,e,i,-n,r,o,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new gn(c,3)),this.setAttribute("normal",new gn(u,3)),this.setAttribute("uv",new gn(d,2));function x(v,g,h,y,_,S,A,C,b,R,E){const M=S/b,N=A/R,I=S/2,D=A/2,O=C/2,k=b+1,U=R+1;let V=0,P=0;const $=new j;for(let q=0;q<U;q++){const ne=q*N-D;for(let xe=0;xe<k;xe++){const Le=xe*M-I;$[v]=Le*y,$[g]=ne*_,$[h]=O,c.push($.x,$.y,$.z),$[v]=0,$[g]=0,$[h]=C>0?1:-1,u.push($.x,$.y,$.z),d.push(xe/b),d.push(1-q/R),V+=1}}for(let q=0;q<R;q++)for(let ne=0;ne<b;ne++){const xe=p+ne+k*q,Le=p+ne+k*(q+1),Y=p+(ne+1)+k*(q+1),K=p+(ne+1)+k*q;l.push(xe,Le,K),l.push(Le,Y,K),P+=6}a.addGroup(m,P,E),m+=P,p+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new co(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ro(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Kt(t){const e={};for(let n=0;n<t.length;n++){const i=ro(t[n]);for(const r in i)e[r]=i[r]}return e}function yE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Hv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const SE={clone:ro,merge:Kt};var ME=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,EE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ur extends Kr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ME,this.fragmentShader=EE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ro(e.uniforms),this.uniformsGroups=yE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Wv extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=Ei}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Bi=new j,Hm=new Pe,Wm=new Pe;class Ln extends Wv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=wh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Cl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wh*2*Math.atan(Math.tan(Cl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z),Bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z)}getViewSize(e,n){return this.getViewBounds(e,Hm,Wm),n.subVectors(Wm,Hm)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Cl*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const fs=-90,ps=1;class wE extends Vt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ln(fs,ps,e,n);r.layers=this.layers,this.add(r);const s=new Ln(fs,ps,e,n);s.layers=this.layers,this.add(s);const o=new Ln(fs,ps,e,n);o.layers=this.layers,this.add(o);const a=new Ln(fs,ps,e,n);a.layers=this.layers,this.add(a);const l=new Ln(fs,ps,e,n);l.layers=this.layers,this.add(l);const c=new Ln(fs,ps,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Ei)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===sc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(d,p,m),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class Xv extends tn{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:eo,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class TE extends Wr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Xv(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:$n}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new co(5,5,5),s=new ur({name:"CubemapFromEquirect",uniforms:ro(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:mn,blending:sr});s.uniforms.tEquirect.value=n;const o=new un(r,s),a=n.minFilter;return n.minFilter===Dr&&(n.minFilter=$n),new wE(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Ou=new j,bE=new j,CE=new je;class Hi{constructor(e=new j(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Ou.subVectors(i,n).cross(bE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Ou),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||CE.getNormalMatrix(e),r=this.coplanarPoint(Ou).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yr=new Dc,tl=new j;class zf{constructor(e=new Hi,n=new Hi,i=new Hi,r=new Hi,s=new Hi,o=new Hi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ei){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],p=r[7],m=r[8],x=r[9],v=r[10],g=r[11],h=r[12],y=r[13],_=r[14],S=r[15];if(i[0].setComponents(l-s,p-c,g-m,S-h).normalize(),i[1].setComponents(l+s,p+c,g+m,S+h).normalize(),i[2].setComponents(l+o,p+u,g+x,S+y).normalize(),i[3].setComponents(l-o,p-u,g-x,S-y).normalize(),i[4].setComponents(l-a,p-d,g-v,S-_).normalize(),n===Ei)i[5].setComponents(l+a,p+d,g+v,S+_).normalize();else if(n===sc)i[5].setComponents(a,d,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),yr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yr)}intersectsSprite(e){return yr.center.set(0,0,0),yr.radius=.7071067811865476,yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(yr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(tl.x=r.normal.x>0?e.max.x:e.min.x,tl.y=r.normal.y>0?e.max.y:e.min.y,tl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(tl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function $v(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function AE(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,d=c.byteLength,p=t.createBuffer();t.bindBuffer(l,p),t.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l._updateRange,p=l.updateRanges;if(t.bindBuffer(c,a),d.count===-1&&p.length===0&&t.bufferSubData(c,0,u),p.length!==0){for(let m=0,x=p.length;m<x;m++){const v=p[m];t.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}d.count!==-1&&(t.bufferSubData(c,d.offset*u.BYTES_PER_ELEMENT,u,d.offset,d.count),d.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class xa extends Bt{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,p=n/l,m=[],x=[],v=[],g=[];for(let h=0;h<u;h++){const y=h*p-o;for(let _=0;_<c;_++){const S=_*d-s;x.push(S,-y,0),v.push(0,0,1),g.push(_/a),g.push(1-h/l)}}for(let h=0;h<l;h++)for(let y=0;y<a;y++){const _=y+c*h,S=y+c*(h+1),A=y+1+c*(h+1),C=y+1+c*h;m.push(_,S,C),m.push(S,A,C)}this.setIndex(m),this.setAttribute("position",new gn(x,3)),this.setAttribute("normal",new gn(v,3)),this.setAttribute("uv",new gn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xa(e.width,e.height,e.widthSegments,e.heightSegments)}}var RE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,NE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,PE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,LE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,DE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,IE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,UE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,FE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,OE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,BE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,VE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,jE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,GE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,HE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,WE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,XE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$E=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,YE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,KE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ZE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,QE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,JE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
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
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
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
#endif`,ew=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,tw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,iw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sw="gl_FragColor = linearToOutputTexel( gl_FragColor );",ow=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,aw=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,lw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cw=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,uw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dw=`#ifdef USE_ENVMAP
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
#endif`,hw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gw=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,xw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_w=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
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
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Sw=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Mw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ew=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ww=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Tw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Cw=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
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
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Aw=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Rw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Nw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Pw=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lw=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dw=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Iw=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Uw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ow=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hw=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ww=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,$w=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Yw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Qw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,eT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,iT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,rT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,oT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,aT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,dT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,hT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
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
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,fT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,pT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,gT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xT=`#ifdef USE_SKINNING
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
#endif`,vT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_T=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ST=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,MT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ET=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,wT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,TT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,CT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const AT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,RT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,PT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,DT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,UT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,FT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,kT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,OT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,BT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,VT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,GT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
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
}`,WT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$T=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,qT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,KT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
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
}`,ZT=`#define PHONG
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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
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
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,JT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
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
}`,t2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
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
}`,i2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,r2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,s2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,o2=`uniform float rotation;
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
}`,a2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:RE,alphahash_pars_fragment:NE,alphamap_fragment:PE,alphamap_pars_fragment:LE,alphatest_fragment:DE,alphatest_pars_fragment:IE,aomap_fragment:UE,aomap_pars_fragment:FE,batching_pars_vertex:kE,batching_vertex:OE,begin_vertex:BE,beginnormal_vertex:zE,bsdfs:VE,iridescence_fragment:jE,bumpmap_pars_fragment:GE,clipping_planes_fragment:HE,clipping_planes_pars_fragment:WE,clipping_planes_pars_vertex:XE,clipping_planes_vertex:$E,color_fragment:YE,color_pars_fragment:qE,color_pars_vertex:KE,color_vertex:ZE,common:QE,cube_uv_reflection_fragment:JE,defaultnormal_vertex:ew,displacementmap_pars_vertex:tw,displacementmap_vertex:nw,emissivemap_fragment:iw,emissivemap_pars_fragment:rw,colorspace_fragment:sw,colorspace_pars_fragment:ow,envmap_fragment:aw,envmap_common_pars_fragment:lw,envmap_pars_fragment:cw,envmap_pars_vertex:uw,envmap_physical_pars_fragment:Sw,envmap_vertex:dw,fog_vertex:hw,fog_pars_vertex:fw,fog_fragment:pw,fog_pars_fragment:mw,gradientmap_pars_fragment:gw,lightmap_pars_fragment:xw,lights_lambert_fragment:vw,lights_lambert_pars_fragment:_w,lights_pars_begin:yw,lights_toon_fragment:Mw,lights_toon_pars_fragment:Ew,lights_phong_fragment:ww,lights_phong_pars_fragment:Tw,lights_physical_fragment:bw,lights_physical_pars_fragment:Cw,lights_fragment_begin:Aw,lights_fragment_maps:Rw,lights_fragment_end:Nw,logdepthbuf_fragment:Pw,logdepthbuf_pars_fragment:Lw,logdepthbuf_pars_vertex:Dw,logdepthbuf_vertex:Iw,map_fragment:Uw,map_pars_fragment:Fw,map_particle_fragment:kw,map_particle_pars_fragment:Ow,metalnessmap_fragment:Bw,metalnessmap_pars_fragment:zw,morphinstance_vertex:Vw,morphcolor_vertex:jw,morphnormal_vertex:Gw,morphtarget_pars_vertex:Hw,morphtarget_vertex:Ww,normal_fragment_begin:Xw,normal_fragment_maps:$w,normal_pars_fragment:Yw,normal_pars_vertex:qw,normal_vertex:Kw,normalmap_pars_fragment:Zw,clearcoat_normal_fragment_begin:Qw,clearcoat_normal_fragment_maps:Jw,clearcoat_pars_fragment:eT,iridescence_pars_fragment:tT,opaque_fragment:nT,packing:iT,premultiplied_alpha_fragment:rT,project_vertex:sT,dithering_fragment:oT,dithering_pars_fragment:aT,roughnessmap_fragment:lT,roughnessmap_pars_fragment:cT,shadowmap_pars_fragment:uT,shadowmap_pars_vertex:dT,shadowmap_vertex:hT,shadowmask_pars_fragment:fT,skinbase_vertex:pT,skinning_pars_vertex:mT,skinning_vertex:gT,skinnormal_vertex:xT,specularmap_fragment:vT,specularmap_pars_fragment:_T,tonemapping_fragment:yT,tonemapping_pars_fragment:ST,transmission_fragment:MT,transmission_pars_fragment:ET,uv_pars_fragment:wT,uv_pars_vertex:TT,uv_vertex:bT,worldpos_vertex:CT,background_vert:AT,background_frag:RT,backgroundCube_vert:NT,backgroundCube_frag:PT,cube_vert:LT,cube_frag:DT,depth_vert:IT,depth_frag:UT,distanceRGBA_vert:FT,distanceRGBA_frag:kT,equirect_vert:OT,equirect_frag:BT,linedashed_vert:zT,linedashed_frag:VT,meshbasic_vert:jT,meshbasic_frag:GT,meshlambert_vert:HT,meshlambert_frag:WT,meshmatcap_vert:XT,meshmatcap_frag:$T,meshnormal_vert:YT,meshnormal_frag:qT,meshphong_vert:KT,meshphong_frag:ZT,meshphysical_vert:QT,meshphysical_frag:JT,meshtoon_vert:e2,meshtoon_frag:t2,points_vert:n2,points_frag:i2,shadow_vert:r2,shadow_frag:s2,sprite_vert:o2,sprite_frag:a2},ue={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},ri={basic:{uniforms:Kt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Kt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new ke(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Kt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Kt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Kt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new ke(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Kt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Kt([ue.points,ue.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Kt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Kt([ue.common,ue.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Kt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Kt([ue.sprite,ue.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Kt([ue.common,ue.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Kt([ue.lights,ue.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};ri.physical={uniforms:Kt([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new Pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const nl={r:0,b:0,g:0},Sr=new ui,l2=new ut;function c2(t,e,n,i,r,s,o){const a=new ke(0);let l=s===!0?0:1,c,u,d=null,p=0,m=null;function x(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?n:e).get(_)),_}function v(y){let _=!1;const S=x(y);S===null?h(a,l):S&&S.isColor&&(h(S,1),_=!0);const A=t.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function g(y,_){const S=x(_);S&&(S.isCubeTexture||S.mapping===Pc)?(u===void 0&&(u=new un(new co(1,1,1),new ur({name:"BackgroundCubeMaterial",uniforms:ro(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,C,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Sr.copy(_.backgroundRotation),Sr.x*=-1,Sr.y*=-1,Sr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Sr.y*=-1,Sr.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(l2.makeRotationFromEuler(Sr)),u.material.toneMapped=et.getTransfer(S.colorSpace)!==ot,(d!==S||p!==S.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,d=S,p=S.version,m=t.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new un(new xa(2,2),new ur({name:"BackgroundMaterial",uniforms:ro(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:cr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=et.getTransfer(S.colorSpace)!==ot,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||p!==S.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,d=S,p=S.version,m=t.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function h(y,_){y.getRGB(nl,Hv(t)),i.buffers.color.setClear(nl.r,nl.g,nl.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(y,_=1){a.set(y),l=_,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,h(a,l)},render:v,addToRenderList:g}}function u2(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=p(null);let s=r,o=!1;function a(M,N,I,D,O){let k=!1;const U=d(D,I,N);s!==U&&(s=U,c(s.object)),k=m(M,D,I,O),k&&x(M,D,I,O),O!==null&&e.update(O,t.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,S(M,N,I,D),O!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return t.createVertexArray()}function c(M){return t.bindVertexArray(M)}function u(M){return t.deleteVertexArray(M)}function d(M,N,I){const D=I.wireframe===!0;let O=i[M.id];O===void 0&&(O={},i[M.id]=O);let k=O[N.id];k===void 0&&(k={},O[N.id]=k);let U=k[D];return U===void 0&&(U=p(l()),k[D]=U),U}function p(M){const N=[],I=[],D=[];for(let O=0;O<n;O++)N[O]=0,I[O]=0,D[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:I,attributeDivisors:D,object:M,attributes:{},index:null}}function m(M,N,I,D){const O=s.attributes,k=N.attributes;let U=0;const V=I.getAttributes();for(const P in V)if(V[P].location>=0){const q=O[P];let ne=k[P];if(ne===void 0&&(P==="instanceMatrix"&&M.instanceMatrix&&(ne=M.instanceMatrix),P==="instanceColor"&&M.instanceColor&&(ne=M.instanceColor)),q===void 0||q.attribute!==ne||ne&&q.data!==ne.data)return!0;U++}return s.attributesNum!==U||s.index!==D}function x(M,N,I,D){const O={},k=N.attributes;let U=0;const V=I.getAttributes();for(const P in V)if(V[P].location>=0){let q=k[P];q===void 0&&(P==="instanceMatrix"&&M.instanceMatrix&&(q=M.instanceMatrix),P==="instanceColor"&&M.instanceColor&&(q=M.instanceColor));const ne={};ne.attribute=q,q&&q.data&&(ne.data=q.data),O[P]=ne,U++}s.attributes=O,s.attributesNum=U,s.index=D}function v(){const M=s.newAttributes;for(let N=0,I=M.length;N<I;N++)M[N]=0}function g(M){h(M,0)}function h(M,N){const I=s.newAttributes,D=s.enabledAttributes,O=s.attributeDivisors;I[M]=1,D[M]===0&&(t.enableVertexAttribArray(M),D[M]=1),O[M]!==N&&(t.vertexAttribDivisor(M,N),O[M]=N)}function y(){const M=s.newAttributes,N=s.enabledAttributes;for(let I=0,D=N.length;I<D;I++)N[I]!==M[I]&&(t.disableVertexAttribArray(I),N[I]=0)}function _(M,N,I,D,O,k,U){U===!0?t.vertexAttribIPointer(M,N,I,O,k):t.vertexAttribPointer(M,N,I,D,O,k)}function S(M,N,I,D){v();const O=D.attributes,k=I.getAttributes(),U=N.defaultAttributeValues;for(const V in k){const P=k[V];if(P.location>=0){let $=O[V];if($===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&($=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&($=M.instanceColor)),$!==void 0){const q=$.normalized,ne=$.itemSize,xe=e.get($);if(xe===void 0)continue;const Le=xe.buffer,Y=xe.type,K=xe.bytesPerElement,le=Y===t.INT||Y===t.UNSIGNED_INT||$.gpuType===Pf;if($.isInterleavedBufferAttribute){const de=$.data,Te=de.stride,Ce=$.offset;if(de.isInstancedInterleavedBuffer){for(let Ue=0;Ue<P.locationSize;Ue++)h(P.location+Ue,de.meshPerAttribute);M.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Ue=0;Ue<P.locationSize;Ue++)g(P.location+Ue);t.bindBuffer(t.ARRAY_BUFFER,Le);for(let Ue=0;Ue<P.locationSize;Ue++)_(P.location+Ue,ne/P.locationSize,Y,q,Te*K,(Ce+ne/P.locationSize*Ue)*K,le)}else{if($.isInstancedBufferAttribute){for(let de=0;de<P.locationSize;de++)h(P.location+de,$.meshPerAttribute);M.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let de=0;de<P.locationSize;de++)g(P.location+de);t.bindBuffer(t.ARRAY_BUFFER,Le);for(let de=0;de<P.locationSize;de++)_(P.location+de,ne/P.locationSize,Y,q,ne*K,ne/P.locationSize*de*K,le)}}else if(U!==void 0){const q=U[V];if(q!==void 0)switch(q.length){case 2:t.vertexAttrib2fv(P.location,q);break;case 3:t.vertexAttrib3fv(P.location,q);break;case 4:t.vertexAttrib4fv(P.location,q);break;default:t.vertexAttrib1fv(P.location,q)}}}}y()}function A(){R();for(const M in i){const N=i[M];for(const I in N){const D=N[I];for(const O in D)u(D[O].object),delete D[O];delete N[I]}delete i[M]}}function C(M){if(i[M.id]===void 0)return;const N=i[M.id];for(const I in N){const D=N[I];for(const O in D)u(D[O].object),delete D[O];delete N[I]}delete i[M.id]}function b(M){for(const N in i){const I=i[N];if(I[M.id]===void 0)continue;const D=I[M.id];for(const O in D)u(D[O].object),delete D[O];delete I[M.id]}}function R(){E(),o=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:E,dispose:A,releaseStatesOfGeometry:C,releaseStatesOfProgram:b,initAttributes:v,enableAttribute:g,disableUnusedAttributes:y}}function d2(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,d){d!==0&&(t.drawArraysInstanced(i,c,u,d),n.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let m=0;for(let x=0;x<d;x++)m+=u[x];n.update(m,i,1)}function l(c,u,d,p){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let x=0;x<c.length;x++)o(c[x],u[x],p[x]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,u,0,p,0,d);let x=0;for(let v=0;v<d;v++)x+=u[v];for(let v=0;v<p.length;v++)n.update(x,i,p[v])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function h2(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==Yn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const b=C===ma&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Ri&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Mi&&!b)}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=n.logarithmicDepthBuffer===!0,p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),v=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),g=t.getParameter(t.MAX_VERTEX_ATTRIBS),h=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),S=m>0,A=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:h,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:S,maxSamples:A}}function f2(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Hi,a=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){const m=d.length!==0||p||i!==0||r;return r=p,i=d.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,p){n=u(d,p,0)},this.setState=function(d,p,m){const x=d.clippingPlanes,v=d.clipIntersection,g=d.clipShadows,h=t.get(d);if(!r||x===null||x.length===0||s&&!g)s?u(null):c();else{const y=s?0:i,_=y*4;let S=h.clippingState||null;l.value=S,S=u(x,p,_,m);for(let A=0;A!==_;++A)S[A]=n[A];h.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,p,m,x){const v=d!==null?d.length:0;let g=null;if(v!==0){if(g=l.value,x!==!0||g===null){const h=m+v*4,y=p.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<h)&&(g=new Float32Array(h));for(let _=0,S=m;_!==v;++_,S+=4)o.copy(d[_]).applyMatrix4(y,a),o.normal.toArray(g,S),g[S+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function p2(t){let e=new WeakMap;function n(o,a){return a===Yd?o.mapping=eo:a===qd&&(o.mapping=to),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Yd||a===qd)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new TE(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Yv extends Wv{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ds=4,Xm=[.125,.215,.35,.446,.526,.582],Ar=20,Bu=new Yv,$m=new ke;let zu=null,Vu=0,ju=0,Gu=!1;const br=(1+Math.sqrt(5))/2,ms=1/br,Ym=[new j(-br,ms,0),new j(br,ms,0),new j(-ms,0,br),new j(ms,0,br),new j(0,br,-ms),new j(0,br,ms),new j(-1,1,-1),new j(1,1,-1),new j(-1,1,1),new j(1,1,1)];class qm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){zu=this._renderer.getRenderTarget(),Vu=this._renderer.getActiveCubeFace(),ju=this._renderer.getActiveMipmapLevel(),Gu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(zu,Vu,ju),this._renderer.xr.enabled=Gu,e.scissorTest=!1,il(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===eo||e.mapping===to?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zu=this._renderer.getRenderTarget(),Vu=this._renderer.getActiveCubeFace(),ju=this._renderer.getActiveMipmapLevel(),Gu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:$n,minFilter:$n,generateMipmaps:!1,type:ma,format:Yn,colorSpace:mr,depthBuffer:!1},r=Km(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Km(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=m2(s)),this._blurMaterial=g2(s,e,n)}return r}_compileMaterial(e){const n=new un(this._lodPlanes[0],e);this._renderer.compile(n,Bu)}_sceneToCubeUV(e,n,i,r){const a=new Ln(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor($m),u.toneMapping=or,u.autoClear=!1;const m=new Bf({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1}),x=new un(new co,m);let v=!1;const g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,v=!0):(m.color.copy($m),v=!0);for(let h=0;h<6;h++){const y=h%3;y===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):y===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const _=this._cubeSize;il(r,y*_,h>2?_:0,_,_),u.setRenderTarget(r),v&&u.render(x,a),u.render(e,a)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=p,u.autoClear=d,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===eo||e.mapping===to;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new un(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;il(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Bu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Ym[(r-s-1)%Ym.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new un(this._lodPlanes[r],c),p=c.uniforms,m=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Ar-1),v=s/x,g=isFinite(s)?1+Math.floor(u*v):Ar;g>Ar&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ar}`);const h=[];let y=0;for(let b=0;b<Ar;++b){const R=b/v,E=Math.exp(-R*R/2);h.push(E),b===0?y+=E:b<g&&(y+=2*E)}for(let b=0;b<h.length;b++)h[b]=h[b]/y;p.envMap.value=e.texture,p.samples.value=g,p.weights.value=h,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:_}=this;p.dTheta.value=x,p.mipInt.value=_-i;const S=this._sizeLods[r],A=3*S*(r>_-Ds?r-_+Ds:0),C=4*(this._cubeSize-S);il(n,A,C,3*S,2*S),l.setRenderTarget(n),l.render(d,Bu)}}function m2(t){const e=[],n=[],i=[];let r=t;const s=t-Ds+1+Xm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Ds?l=Xm[o-t+Ds-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,p=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,x=6,v=3,g=2,h=1,y=new Float32Array(v*x*m),_=new Float32Array(g*x*m),S=new Float32Array(h*x*m);for(let C=0;C<m;C++){const b=C%3*2/3-1,R=C>2?0:-1,E=[b,R,0,b+2/3,R,0,b+2/3,R+1,0,b,R,0,b+2/3,R+1,0,b,R+1,0];y.set(E,v*x*C),_.set(p,g*x*C);const M=[C,C,C,C,C,C];S.set(M,h*x*C)}const A=new Bt;A.setAttribute("position",new Jt(y,v)),A.setAttribute("uv",new Jt(_,g)),A.setAttribute("faceIndex",new Jt(S,h)),e.push(A),r>Ds&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Km(t,e,n){const i=new Wr(t,e,n);return i.texture.mapping=Pc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function il(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function g2(t,e,n){const i=new Float32Array(Ar),r=new j(0,1,0);return new ur({name:"SphericalGaussianBlur",defines:{n:Ar,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Vf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:sr,depthTest:!1,depthWrite:!1})}function Zm(){return new ur({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:sr,depthTest:!1,depthWrite:!1})}function Qm(){return new ur({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:sr,depthTest:!1,depthWrite:!1})}function Vf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function x2(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Yd||l===qd,u=l===eo||l===to;if(c||u){let d=e.get(a);const p=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return n===null&&(n=new qm(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const m=a.image;return c&&m&&m.height>0||u&&m&&r(m)?(n===null&&(n=new qm(t)),d=c?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function v2(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&jo("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function _2(t,e,n,i){const r={},s=new WeakMap;function o(d){const p=d.target;p.index!==null&&e.remove(p.index);for(const x in p.attributes)e.remove(p.attributes[x]);for(const x in p.morphAttributes){const v=p.morphAttributes[x];for(let g=0,h=v.length;g<h;g++)e.remove(v[g])}p.removeEventListener("dispose",o),delete r[p.id];const m=s.get(p);m&&(e.remove(m),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,n.memory.geometries--}function a(d,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,n.memory.geometries++),p}function l(d){const p=d.attributes;for(const x in p)e.update(p[x],t.ARRAY_BUFFER);const m=d.morphAttributes;for(const x in m){const v=m[x];for(let g=0,h=v.length;g<h;g++)e.update(v[g],t.ARRAY_BUFFER)}}function c(d){const p=[],m=d.index,x=d.attributes.position;let v=0;if(m!==null){const y=m.array;v=m.version;for(let _=0,S=y.length;_<S;_+=3){const A=y[_+0],C=y[_+1],b=y[_+2];p.push(A,C,C,b,b,A)}}else if(x!==void 0){const y=x.array;v=x.version;for(let _=0,S=y.length/3-1;_<S;_+=3){const A=_+0,C=_+1,b=_+2;p.push(A,C,C,b,b,A)}}else return;const g=new(Ov(p)?Gv:jv)(p,1);g.version=v;const h=s.get(d);h&&e.remove(h),s.set(d,g)}function u(d){const p=s.get(d);if(p){const m=d.index;m!==null&&p.version<m.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function y2(t,e,n){let i;function r(p){i=p}let s,o;function a(p){s=p.type,o=p.bytesPerElement}function l(p,m){t.drawElements(i,m,s,p*o),n.update(m,i,1)}function c(p,m,x){x!==0&&(t.drawElementsInstanced(i,m,s,p*o,x),n.update(m,i,x))}function u(p,m,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,p,0,x);let g=0;for(let h=0;h<x;h++)g+=m[h];n.update(g,i,1)}function d(p,m,x,v){if(x===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let h=0;h<p.length;h++)c(p[h]/o,m[h],v[h]);else{g.multiDrawElementsInstancedWEBGL(i,m,0,s,p,0,v,0,x);let h=0;for(let y=0;y<x;y++)h+=m[y];for(let y=0;y<v.length;y++)n.update(h,i,v[y])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function S2(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function M2(t,e,n){const i=new WeakMap,r=new At;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let p=i.get(a);if(p===void 0||p.count!==d){let M=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var m=M;p!==void 0&&p.texture.dispose();const x=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let S=0;x===!0&&(S=1),v===!0&&(S=2),g===!0&&(S=3);let A=a.attributes.position.count*S,C=1;A>e.maxTextureSize&&(C=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const b=new Float32Array(A*C*4*d),R=new zv(b,A,C,d);R.type=Mi,R.needsUpdate=!0;const E=S*4;for(let N=0;N<d;N++){const I=h[N],D=y[N],O=_[N],k=A*C*4*N;for(let U=0;U<I.count;U++){const V=U*E;x===!0&&(r.fromBufferAttribute(I,U),b[k+V+0]=r.x,b[k+V+1]=r.y,b[k+V+2]=r.z,b[k+V+3]=0),v===!0&&(r.fromBufferAttribute(D,U),b[k+V+4]=r.x,b[k+V+5]=r.y,b[k+V+6]=r.z,b[k+V+7]=0),g===!0&&(r.fromBufferAttribute(O,U),b[k+V+8]=r.x,b[k+V+9]=r.y,b[k+V+10]=r.z,b[k+V+11]=O.itemSize===4?r.w:1)}}p={count:d,texture:R,size:new Pe(A,C)},i.set(a,p),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let x=0;for(let g=0;g<c.length;g++)x+=c[g];const v=a.morphTargetsRelative?1:1-x;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}return{update:s}}function E2(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==c&&(p.update(),r.set(p,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class qv extends tn{constructor(e,n,i,r,s,o,a,l,c,u=Gs){if(u!==Gs&&u!==io)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Gs&&(i=Hr),i===void 0&&u===io&&(i=no),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:In,this.minFilter=l!==void 0?l:In,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Kv=new tn,Jm=new qv(1,1),Zv=new zv,Qv=new cE,Jv=new Xv,eg=[],tg=[],ng=new Float32Array(16),ig=new Float32Array(9),rg=new Float32Array(4);function uo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=eg[r];if(s===void 0&&(s=new Float32Array(r),eg[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Nt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Pt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Uc(t,e){let n=tg[e];n===void 0&&(n=new Int32Array(e),tg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function w2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function T2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2fv(this.addr,e),Pt(n,e)}}function b2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Nt(n,e))return;t.uniform3fv(this.addr,e),Pt(n,e)}}function C2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4fv(this.addr,e),Pt(n,e)}}function A2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Pt(n,e)}else{if(Nt(n,i))return;rg.set(i),t.uniformMatrix2fv(this.addr,!1,rg),Pt(n,i)}}function R2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Pt(n,e)}else{if(Nt(n,i))return;ig.set(i),t.uniformMatrix3fv(this.addr,!1,ig),Pt(n,i)}}function N2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Pt(n,e)}else{if(Nt(n,i))return;ng.set(i),t.uniformMatrix4fv(this.addr,!1,ng),Pt(n,i)}}function P2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function L2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2iv(this.addr,e),Pt(n,e)}}function D2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Nt(n,e))return;t.uniform3iv(this.addr,e),Pt(n,e)}}function I2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4iv(this.addr,e),Pt(n,e)}}function U2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function F2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2uiv(this.addr,e),Pt(n,e)}}function k2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Nt(n,e))return;t.uniform3uiv(this.addr,e),Pt(n,e)}}function O2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4uiv(this.addr,e),Pt(n,e)}}function B2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Jm.compareFunction=kv,s=Jm):s=Kv,n.setTexture2D(e||s,r)}function z2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Qv,r)}function V2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Jv,r)}function j2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Zv,r)}function G2(t){switch(t){case 5126:return w2;case 35664:return T2;case 35665:return b2;case 35666:return C2;case 35674:return A2;case 35675:return R2;case 35676:return N2;case 5124:case 35670:return P2;case 35667:case 35671:return L2;case 35668:case 35672:return D2;case 35669:case 35673:return I2;case 5125:return U2;case 36294:return F2;case 36295:return k2;case 36296:return O2;case 35678:case 36198:case 36298:case 36306:case 35682:return B2;case 35679:case 36299:case 36307:return z2;case 35680:case 36300:case 36308:case 36293:return V2;case 36289:case 36303:case 36311:case 36292:return j2}}function H2(t,e){t.uniform1fv(this.addr,e)}function W2(t,e){const n=uo(e,this.size,2);t.uniform2fv(this.addr,n)}function X2(t,e){const n=uo(e,this.size,3);t.uniform3fv(this.addr,n)}function $2(t,e){const n=uo(e,this.size,4);t.uniform4fv(this.addr,n)}function Y2(t,e){const n=uo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function q2(t,e){const n=uo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function K2(t,e){const n=uo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Z2(t,e){t.uniform1iv(this.addr,e)}function Q2(t,e){t.uniform2iv(this.addr,e)}function J2(t,e){t.uniform3iv(this.addr,e)}function eb(t,e){t.uniform4iv(this.addr,e)}function tb(t,e){t.uniform1uiv(this.addr,e)}function nb(t,e){t.uniform2uiv(this.addr,e)}function ib(t,e){t.uniform3uiv(this.addr,e)}function rb(t,e){t.uniform4uiv(this.addr,e)}function sb(t,e,n){const i=this.cache,r=e.length,s=Uc(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Kv,s[o])}function ob(t,e,n){const i=this.cache,r=e.length,s=Uc(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Qv,s[o])}function ab(t,e,n){const i=this.cache,r=e.length,s=Uc(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Jv,s[o])}function lb(t,e,n){const i=this.cache,r=e.length,s=Uc(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Zv,s[o])}function cb(t){switch(t){case 5126:return H2;case 35664:return W2;case 35665:return X2;case 35666:return $2;case 35674:return Y2;case 35675:return q2;case 35676:return K2;case 5124:case 35670:return Z2;case 35667:case 35671:return Q2;case 35668:case 35672:return J2;case 35669:case 35673:return eb;case 5125:return tb;case 36294:return nb;case 36295:return ib;case 36296:return rb;case 35678:case 36198:case 36298:case 36306:case 35682:return sb;case 35679:case 36299:case 36307:return ob;case 35680:case 36300:case 36308:case 36293:return ab;case 36289:case 36303:case 36311:case 36292:return lb}}class ub{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=G2(n.type)}}class db{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=cb(n.type)}}class hb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Hu=/(\w+)(\])?(\[|\.)?/g;function sg(t,e){t.seq.push(e),t.map[e.id]=e}function fb(t,e,n){const i=t.name,r=i.length;for(Hu.lastIndex=0;;){const s=Hu.exec(i),o=Hu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){sg(n,c===void 0?new ub(a,t,e):new db(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new hb(a),sg(n,d)),n=d}}}class Al{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);fb(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function og(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const pb=37297;let mb=0;function gb(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function xb(t){const e=et.getPrimaries(et.workingColorSpace),n=et.getPrimaries(t);let i;switch(e===n?i="":e===rc&&n===ic?i="LinearDisplayP3ToLinearSRGB":e===ic&&n===rc&&(i="LinearSRGBToLinearDisplayP3"),t){case mr:case Lc:return[i,"LinearTransferOETF"];case Wn:case kf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function ag(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+gb(t.getShaderSource(e),o)}else return r}function vb(t,e){const n=xb(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function _b(t,e){let n;switch(e){case kM:n="Linear";break;case OM:n="Reinhard";break;case BM:n="Cineon";break;case wv:n="ACESFilmic";break;case VM:n="AgX";break;case jM:n="Neutral";break;case zM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const rl=new j;function yb(){et.getLuminanceCoefficients(rl);const t=rl.x.toFixed(4),e=rl.y.toFixed(4),n=rl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Sb(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Po).join(`
`)}function Mb(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Eb(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Po(t){return t!==""}function lg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function cg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const wb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Th(t){return t.replace(wb,bb)}const Tb=new Map;function bb(t,e){let n=Ve[e];if(n===void 0){const i=Tb.get(e);if(i!==void 0)n=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Th(n)}const Cb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ug(t){return t.replace(Cb,Ab)}function Ab(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function dg(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Rb(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Sv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Mv?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===xi&&(e="SHADOWMAP_TYPE_VSM"),e}function Nb(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case eo:case to:e="ENVMAP_TYPE_CUBE";break;case Pc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Pb(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case to:e="ENVMAP_MODE_REFRACTION";break}return e}function Lb(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Ev:e="ENVMAP_BLENDING_MULTIPLY";break;case UM:e="ENVMAP_BLENDING_MIX";break;case FM:e="ENVMAP_BLENDING_ADD";break}return e}function Db(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Ib(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=Rb(n),c=Nb(n),u=Pb(n),d=Lb(n),p=Db(n),m=Sb(n),x=Mb(s),v=r.createProgram();let g,h,y=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Po).join(`
`),g.length>0&&(g+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Po).join(`
`),h.length>0&&(h+=`
`)):(g=[dg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Po).join(`
`),h=[dg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==or?"#define TONE_MAPPING":"",n.toneMapping!==or?Ve.tonemapping_pars_fragment:"",n.toneMapping!==or?_b("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,vb("linearToOutputTexel",n.outputColorSpace),yb(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Po).join(`
`)),o=Th(o),o=lg(o,n),o=cg(o,n),a=Th(a),a=lg(a,n),a=cg(a,n),o=ug(o),a=ug(a),n.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,h=["#define varying in",n.glslVersion===bm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===bm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const _=y+g+o,S=y+h+a,A=og(r,r.VERTEX_SHADER,_),C=og(r,r.FRAGMENT_SHADER,S);r.attachShader(v,A),r.attachShader(v,C),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function b(N){if(t.debug.checkShaderErrors){const I=r.getProgramInfoLog(v).trim(),D=r.getShaderInfoLog(A).trim(),O=r.getShaderInfoLog(C).trim();let k=!0,U=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(k=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,A,C);else{const V=ag(r,A,"vertex"),P=ag(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+I+`
`+V+`
`+P)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(D===""||O==="")&&(U=!1);U&&(N.diagnostics={runnable:k,programLog:I,vertexShader:{log:D,prefix:g},fragmentShader:{log:O,prefix:h}})}r.deleteShader(A),r.deleteShader(C),R=new Al(r,v),E=Eb(r,v)}let R;this.getUniforms=function(){return R===void 0&&b(this),R};let E;this.getAttributes=function(){return E===void 0&&b(this),E};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(v,pb)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=mb++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=C,this}let Ub=0;class Fb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new kb(e),n.set(e,i)),i}}class kb{constructor(e){this.id=Ub++,this.code=e,this.usedTimes=0}}function Ob(t,e,n,i,r,s,o){const a=new Of,l=new Fb,c=new Set,u=[],d=r.logarithmicDepthBuffer,p=r.vertexTextures;let m=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return c.add(E),E===0?"uv":`uv${E}`}function g(E,M,N,I,D){const O=I.fog,k=D.geometry,U=E.isMeshStandardMaterial?I.environment:null,V=(E.isMeshStandardMaterial?n:e).get(E.envMap||U),P=V&&V.mapping===Pc?V.image.height:null,$=x[E.type];E.precision!==null&&(m=r.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const q=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ne=q!==void 0?q.length:0;let xe=0;k.morphAttributes.position!==void 0&&(xe=1),k.morphAttributes.normal!==void 0&&(xe=2),k.morphAttributes.color!==void 0&&(xe=3);let Le,Y,K,le;if($){const Ke=ri[$];Le=Ke.vertexShader,Y=Ke.fragmentShader}else Le=E.vertexShader,Y=E.fragmentShader,l.update(E),K=l.getVertexShaderID(E),le=l.getFragmentShaderID(E);const de=t.getRenderTarget(),Te=D.isInstancedMesh===!0,Ce=D.isBatchedMesh===!0,Ue=!!E.map,tt=!!E.matcap,F=!!V,We=!!E.aoMap,Be=!!E.lightMap,qe=!!E.bumpMap,Se=!!E.normalMap,St=!!E.displacementMap,Ie=!!E.emissiveMap,Oe=!!E.metalnessMap,L=!!E.roughnessMap,w=E.anisotropy>0,X=E.clearcoat>0,J=E.dispersion>0,te=E.iridescence>0,ee=E.sheen>0,be=E.transmission>0,he=w&&!!E.anisotropyMap,ge=X&&!!E.clearcoatMap,ze=X&&!!E.clearcoatNormalMap,re=X&&!!E.clearcoatRoughnessMap,me=te&&!!E.iridescenceMap,Xe=te&&!!E.iridescenceThicknessMap,De=ee&&!!E.sheenColorMap,ve=ee&&!!E.sheenRoughnessMap,Fe=!!E.specularMap,Ge=!!E.specularColorMap,dt=!!E.specularIntensityMap,B=be&&!!E.transmissionMap,se=be&&!!E.thicknessMap,Z=!!E.gradientMap,Q=!!E.alphaMap,ae=E.alphaTest>0,Ae=!!E.alphaHash,$e=!!E.extensions;let Mt=or;E.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(Mt=t.toneMapping);const Ut={shaderID:$,shaderType:E.type,shaderName:E.name,vertexShader:Le,fragmentShader:Y,defines:E.defines,customVertexShaderID:K,customFragmentShaderID:le,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:Ce,batchingColor:Ce&&D._colorsTexture!==null,instancing:Te,instancingColor:Te&&D.instanceColor!==null,instancingMorph:Te&&D.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:de===null?t.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:mr,alphaToCoverage:!!E.alphaToCoverage,map:Ue,matcap:tt,envMap:F,envMapMode:F&&V.mapping,envMapCubeUVHeight:P,aoMap:We,lightMap:Be,bumpMap:qe,normalMap:Se,displacementMap:p&&St,emissiveMap:Ie,normalMapObjectSpace:Se&&E.normalMapType===XM,normalMapTangentSpace:Se&&E.normalMapType===Fv,metalnessMap:Oe,roughnessMap:L,anisotropy:w,anisotropyMap:he,clearcoat:X,clearcoatMap:ge,clearcoatNormalMap:ze,clearcoatRoughnessMap:re,dispersion:J,iridescence:te,iridescenceMap:me,iridescenceThicknessMap:Xe,sheen:ee,sheenColorMap:De,sheenRoughnessMap:ve,specularMap:Fe,specularColorMap:Ge,specularIntensityMap:dt,transmission:be,transmissionMap:B,thicknessMap:se,gradientMap:Z,opaque:E.transparent===!1&&E.blending===js&&E.alphaToCoverage===!1,alphaMap:Q,alphaTest:ae,alphaHash:Ae,combine:E.combine,mapUv:Ue&&v(E.map.channel),aoMapUv:We&&v(E.aoMap.channel),lightMapUv:Be&&v(E.lightMap.channel),bumpMapUv:qe&&v(E.bumpMap.channel),normalMapUv:Se&&v(E.normalMap.channel),displacementMapUv:St&&v(E.displacementMap.channel),emissiveMapUv:Ie&&v(E.emissiveMap.channel),metalnessMapUv:Oe&&v(E.metalnessMap.channel),roughnessMapUv:L&&v(E.roughnessMap.channel),anisotropyMapUv:he&&v(E.anisotropyMap.channel),clearcoatMapUv:ge&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:ze&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:Xe&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:De&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:ve&&v(E.sheenRoughnessMap.channel),specularMapUv:Fe&&v(E.specularMap.channel),specularColorMapUv:Ge&&v(E.specularColorMap.channel),specularIntensityMapUv:dt&&v(E.specularIntensityMap.channel),transmissionMapUv:B&&v(E.transmissionMap.channel),thicknessMapUv:se&&v(E.thicknessMap.channel),alphaMapUv:Q&&v(E.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Se||w),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!k.attributes.uv&&(Ue||Q),fog:!!O,useFog:E.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:D.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:xe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&N.length>0,shadowMapType:t.shadowMap.type,toneMapping:Mt,decodeVideoTexture:Ue&&E.map.isVideoTexture===!0&&et.getTransfer(E.map.colorSpace)===ot,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===ln,flipSided:E.side===mn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:$e&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($e&&E.extensions.multiDraw===!0||Ce)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ut.vertexUv1s=c.has(1),Ut.vertexUv2s=c.has(2),Ut.vertexUv3s=c.has(3),c.clear(),Ut}function h(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const N in E.defines)M.push(N),M.push(E.defines[N]);return E.isRawShaderMaterial===!1&&(y(M,E),_(M,E),M.push(t.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function y(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function _(E,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.doubleSided&&a.enable(10),M.flipSided&&a.enable(11),M.useDepthPacking&&a.enable(12),M.dithering&&a.enable(13),M.transmission&&a.enable(14),M.sheen&&a.enable(15),M.opaque&&a.enable(16),M.pointsUvs&&a.enable(17),M.decodeVideoTexture&&a.enable(18),M.alphaToCoverage&&a.enable(19),E.push(a.mask)}function S(E){const M=x[E.type];let N;if(M){const I=ri[M];N=SE.clone(I.uniforms)}else N=E.uniforms;return N}function A(E,M){let N;for(let I=0,D=u.length;I<D;I++){const O=u[I];if(O.cacheKey===M){N=O,++N.usedTimes;break}}return N===void 0&&(N=new Ib(t,M,E,s),u.push(N)),N}function C(E){if(--E.usedTimes===0){const M=u.indexOf(E);u[M]=u[u.length-1],u.pop(),E.destroy()}}function b(E){l.remove(E)}function R(){l.dispose()}return{getParameters:g,getProgramCacheKey:h,getUniforms:S,acquireProgram:A,releaseProgram:C,releaseShaderCache:b,programs:u,dispose:R}}function Bb(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function zb(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function hg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function fg(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,p,m,x,v,g){let h=t[e];return h===void 0?(h={id:d.id,object:d,geometry:p,material:m,groupOrder:x,renderOrder:d.renderOrder,z:v,group:g},t[e]=h):(h.id=d.id,h.object=d,h.geometry=p,h.material=m,h.groupOrder=x,h.renderOrder=d.renderOrder,h.z=v,h.group=g),e++,h}function a(d,p,m,x,v,g){const h=o(d,p,m,x,v,g);m.transmission>0?i.push(h):m.transparent===!0?r.push(h):n.push(h)}function l(d,p,m,x,v,g){const h=o(d,p,m,x,v,g);m.transmission>0?i.unshift(h):m.transparent===!0?r.unshift(h):n.unshift(h)}function c(d,p){n.length>1&&n.sort(d||zb),i.length>1&&i.sort(p||hg),r.length>1&&r.sort(p||hg)}function u(){for(let d=e,p=t.length;d<p;d++){const m=t[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function Vb(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new fg,t.set(i,[o])):r>=s.length?(o=new fg,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function jb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new j,color:new ke};break;case"SpotLight":n={position:new j,direction:new j,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new j,color:new ke,distance:0,decay:0};break;case"HemisphereLight":n={direction:new j,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":n={color:new ke,position:new j,halfWidth:new j,halfHeight:new j};break}return t[e.id]=n,n}}}function Gb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Hb=0;function Wb(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Xb(t){const e=new jb,n=Gb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new j);const r=new j,s=new ut,o=new ut;function a(c){let u=0,d=0,p=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let m=0,x=0,v=0,g=0,h=0,y=0,_=0,S=0,A=0,C=0,b=0;c.sort(Wb);for(let E=0,M=c.length;E<M;E++){const N=c[E],I=N.color,D=N.intensity,O=N.distance,k=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)u+=I.r*D,d+=I.g*D,p+=I.b*D;else if(N.isLightProbe){for(let U=0;U<9;U++)i.probe[U].addScaledVector(N.sh.coefficients[U],D);b++}else if(N.isDirectionalLight){const U=e.get(N);if(U.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const V=N.shadow,P=n.get(N);P.shadowIntensity=V.intensity,P.shadowBias=V.bias,P.shadowNormalBias=V.normalBias,P.shadowRadius=V.radius,P.shadowMapSize=V.mapSize,i.directionalShadow[m]=P,i.directionalShadowMap[m]=k,i.directionalShadowMatrix[m]=N.shadow.matrix,y++}i.directional[m]=U,m++}else if(N.isSpotLight){const U=e.get(N);U.position.setFromMatrixPosition(N.matrixWorld),U.color.copy(I).multiplyScalar(D),U.distance=O,U.coneCos=Math.cos(N.angle),U.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),U.decay=N.decay,i.spot[v]=U;const V=N.shadow;if(N.map&&(i.spotLightMap[A]=N.map,A++,V.updateMatrices(N),N.castShadow&&C++),i.spotLightMatrix[v]=V.matrix,N.castShadow){const P=n.get(N);P.shadowIntensity=V.intensity,P.shadowBias=V.bias,P.shadowNormalBias=V.normalBias,P.shadowRadius=V.radius,P.shadowMapSize=V.mapSize,i.spotShadow[v]=P,i.spotShadowMap[v]=k,S++}v++}else if(N.isRectAreaLight){const U=e.get(N);U.color.copy(I).multiplyScalar(D),U.halfWidth.set(N.width*.5,0,0),U.halfHeight.set(0,N.height*.5,0),i.rectArea[g]=U,g++}else if(N.isPointLight){const U=e.get(N);if(U.color.copy(N.color).multiplyScalar(N.intensity),U.distance=N.distance,U.decay=N.decay,N.castShadow){const V=N.shadow,P=n.get(N);P.shadowIntensity=V.intensity,P.shadowBias=V.bias,P.shadowNormalBias=V.normalBias,P.shadowRadius=V.radius,P.shadowMapSize=V.mapSize,P.shadowCameraNear=V.camera.near,P.shadowCameraFar=V.camera.far,i.pointShadow[x]=P,i.pointShadowMap[x]=k,i.pointShadowMatrix[x]=N.shadow.matrix,_++}i.point[x]=U,x++}else if(N.isHemisphereLight){const U=e.get(N);U.skyColor.copy(N.color).multiplyScalar(D),U.groundColor.copy(N.groundColor).multiplyScalar(D),i.hemi[h]=U,h++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=p;const R=i.hash;(R.directionalLength!==m||R.pointLength!==x||R.spotLength!==v||R.rectAreaLength!==g||R.hemiLength!==h||R.numDirectionalShadows!==y||R.numPointShadows!==_||R.numSpotShadows!==S||R.numSpotMaps!==A||R.numLightProbes!==b)&&(i.directional.length=m,i.spot.length=v,i.rectArea.length=g,i.point.length=x,i.hemi.length=h,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=S+A-C,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=b,R.directionalLength=m,R.pointLength=x,R.spotLength=v,R.rectAreaLength=g,R.hemiLength=h,R.numDirectionalShadows=y,R.numPointShadows=_,R.numSpotShadows=S,R.numSpotMaps=A,R.numLightProbes=b,i.version=Hb++)}function l(c,u){let d=0,p=0,m=0,x=0,v=0;const g=u.matrixWorldInverse;for(let h=0,y=c.length;h<y;h++){const _=c[h];if(_.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),d++}else if(_.isSpotLight){const S=i.spot[m];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),m++}else if(_.isRectAreaLight){const S=i.rectArea[x];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(g),o.identity(),s.copy(_.matrixWorld),s.premultiply(g),o.extractRotation(s),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),x++}else if(_.isPointLight){const S=i.point[p];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(g),p++}else if(_.isHemisphereLight){const S=i.hemi[v];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(g),v++}}}return{setup:a,setupView:l,state:i}}function pg(t){const e=new Xb(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function $b(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new pg(t),e.set(r,[a])):s>=o.length?(a=new pg(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class Yb extends Kr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=HM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class qb extends Kr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Kb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Qb(t,e,n){let i=new zf;const r=new Pe,s=new Pe,o=new At,a=new Yb({depthPacking:WM}),l=new qb,c={},u=n.maxTextureSize,d={[cr]:mn,[mn]:cr,[ln]:ln},p=new ur({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:Kb,fragmentShader:Zb}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const x=new Bt;x.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new un(x,p),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sv;let h=this.type;this.render=function(C,b,R){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;const E=t.getRenderTarget(),M=t.getActiveCubeFace(),N=t.getActiveMipmapLevel(),I=t.state;I.setBlending(sr),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const D=h!==xi&&this.type===xi,O=h===xi&&this.type!==xi;for(let k=0,U=C.length;k<U;k++){const V=C[k],P=V.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;r.copy(P.mapSize);const $=P.getFrameExtents();if(r.multiply($),s.copy(P.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/$.x),r.x=s.x*$.x,P.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/$.y),r.y=s.y*$.y,P.mapSize.y=s.y)),P.map===null||D===!0||O===!0){const ne=this.type!==xi?{minFilter:In,magFilter:In}:{};P.map!==null&&P.map.dispose(),P.map=new Wr(r.x,r.y,ne),P.map.texture.name=V.name+".shadowMap",P.camera.updateProjectionMatrix()}t.setRenderTarget(P.map),t.clear();const q=P.getViewportCount();for(let ne=0;ne<q;ne++){const xe=P.getViewport(ne);o.set(s.x*xe.x,s.y*xe.y,s.x*xe.z,s.y*xe.w),I.viewport(o),P.updateMatrices(V,ne),i=P.getFrustum(),S(b,R,P.camera,V,this.type)}P.isPointLightShadow!==!0&&this.type===xi&&y(P,R),P.needsUpdate=!1}h=this.type,g.needsUpdate=!1,t.setRenderTarget(E,M,N)};function y(C,b){const R=e.update(v);p.defines.VSM_SAMPLES!==C.blurSamples&&(p.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Wr(r.x,r.y)),p.uniforms.shadow_pass.value=C.map.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(b,null,R,p,v,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(b,null,R,m,v,null)}function _(C,b,R,E){let M=null;const N=R.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(N!==void 0)M=N;else if(M=R.isPointLight===!0?l:a,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const I=M.uuid,D=b.uuid;let O=c[I];O===void 0&&(O={},c[I]=O);let k=O[D];k===void 0&&(k=M.clone(),O[D]=k,b.addEventListener("dispose",A)),M=k}if(M.visible=b.visible,M.wireframe=b.wireframe,E===xi?M.side=b.shadowSide!==null?b.shadowSide:b.side:M.side=b.shadowSide!==null?b.shadowSide:d[b.side],M.alphaMap=b.alphaMap,M.alphaTest=b.alphaTest,M.map=b.map,M.clipShadows=b.clipShadows,M.clippingPlanes=b.clippingPlanes,M.clipIntersection=b.clipIntersection,M.displacementMap=b.displacementMap,M.displacementScale=b.displacementScale,M.displacementBias=b.displacementBias,M.wireframeLinewidth=b.wireframeLinewidth,M.linewidth=b.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const I=t.properties.get(M);I.light=R}return M}function S(C,b,R,E,M){if(C.visible===!1)return;if(C.layers.test(b.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===xi)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,C.matrixWorld);const D=e.update(C),O=C.material;if(Array.isArray(O)){const k=D.groups;for(let U=0,V=k.length;U<V;U++){const P=k[U],$=O[P.materialIndex];if($&&$.visible){const q=_(C,$,E,M);C.onBeforeShadow(t,C,b,R,D,q,P),t.renderBufferDirect(R,null,D,q,C,P),C.onAfterShadow(t,C,b,R,D,q,P)}}}else if(O.visible){const k=_(C,O,E,M);C.onBeforeShadow(t,C,b,R,D,k,null),t.renderBufferDirect(R,null,D,k,C,null),C.onAfterShadow(t,C,b,R,D,k,null)}}const I=C.children;for(let D=0,O=I.length;D<O;D++)S(I[D],b,R,E,M)}function A(C){C.target.removeEventListener("dispose",A);for(const R in c){const E=c[R],M=C.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}function Jb(t){function e(){let B=!1;const se=new At;let Z=null;const Q=new At(0,0,0,0);return{setMask:function(ae){Z!==ae&&!B&&(t.colorMask(ae,ae,ae,ae),Z=ae)},setLocked:function(ae){B=ae},setClear:function(ae,Ae,$e,Mt,Ut){Ut===!0&&(ae*=Mt,Ae*=Mt,$e*=Mt),se.set(ae,Ae,$e,Mt),Q.equals(se)===!1&&(t.clearColor(ae,Ae,$e,Mt),Q.copy(se))},reset:function(){B=!1,Z=null,Q.set(-1,0,0,0)}}}function n(){let B=!1,se=null,Z=null,Q=null;return{setTest:function(ae){ae?le(t.DEPTH_TEST):de(t.DEPTH_TEST)},setMask:function(ae){se!==ae&&!B&&(t.depthMask(ae),se=ae)},setFunc:function(ae){if(Z!==ae){switch(ae){case AM:t.depthFunc(t.NEVER);break;case RM:t.depthFunc(t.ALWAYS);break;case NM:t.depthFunc(t.LESS);break;case tc:t.depthFunc(t.LEQUAL);break;case PM:t.depthFunc(t.EQUAL);break;case LM:t.depthFunc(t.GEQUAL);break;case DM:t.depthFunc(t.GREATER);break;case IM:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Z=ae}},setLocked:function(ae){B=ae},setClear:function(ae){Q!==ae&&(t.clearDepth(ae),Q=ae)},reset:function(){B=!1,se=null,Z=null,Q=null}}}function i(){let B=!1,se=null,Z=null,Q=null,ae=null,Ae=null,$e=null,Mt=null,Ut=null;return{setTest:function(Ke){B||(Ke?le(t.STENCIL_TEST):de(t.STENCIL_TEST))},setMask:function(Ke){se!==Ke&&!B&&(t.stencilMask(Ke),se=Ke)},setFunc:function(Ke,di,ei){(Z!==Ke||Q!==di||ae!==ei)&&(t.stencilFunc(Ke,di,ei),Z=Ke,Q=di,ae=ei)},setOp:function(Ke,di,ei){(Ae!==Ke||$e!==di||Mt!==ei)&&(t.stencilOp(Ke,di,ei),Ae=Ke,$e=di,Mt=ei)},setLocked:function(Ke){B=Ke},setClear:function(Ke){Ut!==Ke&&(t.clearStencil(Ke),Ut=Ke)},reset:function(){B=!1,se=null,Z=null,Q=null,ae=null,Ae=null,$e=null,Mt=null,Ut=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},d=new WeakMap,p=[],m=null,x=!1,v=null,g=null,h=null,y=null,_=null,S=null,A=null,C=new ke(0,0,0),b=0,R=!1,E=null,M=null,N=null,I=null,D=null;const O=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,U=0;const V=t.getParameter(t.VERSION);V.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(V)[1]),k=U>=1):V.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),k=U>=2);let P=null,$={};const q=t.getParameter(t.SCISSOR_BOX),ne=t.getParameter(t.VIEWPORT),xe=new At().fromArray(q),Le=new At().fromArray(ne);function Y(B,se,Z,Q){const ae=new Uint8Array(4),Ae=t.createTexture();t.bindTexture(B,Ae),t.texParameteri(B,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(B,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let $e=0;$e<Z;$e++)B===t.TEXTURE_3D||B===t.TEXTURE_2D_ARRAY?t.texImage3D(se,0,t.RGBA,1,1,Q,0,t.RGBA,t.UNSIGNED_BYTE,ae):t.texImage2D(se+$e,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ae);return Ae}const K={};K[t.TEXTURE_2D]=Y(t.TEXTURE_2D,t.TEXTURE_2D,1),K[t.TEXTURE_CUBE_MAP]=Y(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[t.TEXTURE_2D_ARRAY]=Y(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),K[t.TEXTURE_3D]=Y(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),le(t.DEPTH_TEST),s.setFunc(tc),qe(!1),Se(ym),le(t.CULL_FACE),We(sr);function le(B){c[B]!==!0&&(t.enable(B),c[B]=!0)}function de(B){c[B]!==!1&&(t.disable(B),c[B]=!1)}function Te(B,se){return u[B]!==se?(t.bindFramebuffer(B,se),u[B]=se,B===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=se),B===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=se),!0):!1}function Ce(B,se){let Z=p,Q=!1;if(B){Z=d.get(se),Z===void 0&&(Z=[],d.set(se,Z));const ae=B.textures;if(Z.length!==ae.length||Z[0]!==t.COLOR_ATTACHMENT0){for(let Ae=0,$e=ae.length;Ae<$e;Ae++)Z[Ae]=t.COLOR_ATTACHMENT0+Ae;Z.length=ae.length,Q=!0}}else Z[0]!==t.BACK&&(Z[0]=t.BACK,Q=!0);Q&&t.drawBuffers(Z)}function Ue(B){return m!==B?(t.useProgram(B),m=B,!0):!1}const tt={[Cr]:t.FUNC_ADD,[dM]:t.FUNC_SUBTRACT,[hM]:t.FUNC_REVERSE_SUBTRACT};tt[fM]=t.MIN,tt[pM]=t.MAX;const F={[mM]:t.ZERO,[gM]:t.ONE,[xM]:t.SRC_COLOR,[Xd]:t.SRC_ALPHA,[EM]:t.SRC_ALPHA_SATURATE,[SM]:t.DST_COLOR,[_M]:t.DST_ALPHA,[vM]:t.ONE_MINUS_SRC_COLOR,[$d]:t.ONE_MINUS_SRC_ALPHA,[MM]:t.ONE_MINUS_DST_COLOR,[yM]:t.ONE_MINUS_DST_ALPHA,[wM]:t.CONSTANT_COLOR,[TM]:t.ONE_MINUS_CONSTANT_COLOR,[bM]:t.CONSTANT_ALPHA,[CM]:t.ONE_MINUS_CONSTANT_ALPHA};function We(B,se,Z,Q,ae,Ae,$e,Mt,Ut,Ke){if(B===sr){x===!0&&(de(t.BLEND),x=!1);return}if(x===!1&&(le(t.BLEND),x=!0),B!==uM){if(B!==v||Ke!==R){if((g!==Cr||_!==Cr)&&(t.blendEquation(t.FUNC_ADD),g=Cr,_=Cr),Ke)switch(B){case js:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Sm:t.blendFunc(t.ONE,t.ONE);break;case Mm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Em:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case js:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Sm:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Mm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Em:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}h=null,y=null,S=null,A=null,C.set(0,0,0),b=0,v=B,R=Ke}return}ae=ae||se,Ae=Ae||Z,$e=$e||Q,(se!==g||ae!==_)&&(t.blendEquationSeparate(tt[se],tt[ae]),g=se,_=ae),(Z!==h||Q!==y||Ae!==S||$e!==A)&&(t.blendFuncSeparate(F[Z],F[Q],F[Ae],F[$e]),h=Z,y=Q,S=Ae,A=$e),(Mt.equals(C)===!1||Ut!==b)&&(t.blendColor(Mt.r,Mt.g,Mt.b,Ut),C.copy(Mt),b=Ut),v=B,R=!1}function Be(B,se){B.side===ln?de(t.CULL_FACE):le(t.CULL_FACE);let Z=B.side===mn;se&&(Z=!Z),qe(Z),B.blending===js&&B.transparent===!1?We(sr):We(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),s.setFunc(B.depthFunc),s.setTest(B.depthTest),s.setMask(B.depthWrite),r.setMask(B.colorWrite);const Q=B.stencilWrite;o.setTest(Q),Q&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Ie(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?le(t.SAMPLE_ALPHA_TO_COVERAGE):de(t.SAMPLE_ALPHA_TO_COVERAGE)}function qe(B){E!==B&&(B?t.frontFace(t.CW):t.frontFace(t.CCW),E=B)}function Se(B){B!==lM?(le(t.CULL_FACE),B!==M&&(B===ym?t.cullFace(t.BACK):B===cM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):de(t.CULL_FACE),M=B}function St(B){B!==N&&(k&&t.lineWidth(B),N=B)}function Ie(B,se,Z){B?(le(t.POLYGON_OFFSET_FILL),(I!==se||D!==Z)&&(t.polygonOffset(se,Z),I=se,D=Z)):de(t.POLYGON_OFFSET_FILL)}function Oe(B){B?le(t.SCISSOR_TEST):de(t.SCISSOR_TEST)}function L(B){B===void 0&&(B=t.TEXTURE0+O-1),P!==B&&(t.activeTexture(B),P=B)}function w(B,se,Z){Z===void 0&&(P===null?Z=t.TEXTURE0+O-1:Z=P);let Q=$[Z];Q===void 0&&(Q={type:void 0,texture:void 0},$[Z]=Q),(Q.type!==B||Q.texture!==se)&&(P!==Z&&(t.activeTexture(Z),P=Z),t.bindTexture(B,se||K[B]),Q.type=B,Q.texture=se)}function X(){const B=$[P];B!==void 0&&B.type!==void 0&&(t.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function J(){try{t.compressedTexImage2D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function te(){try{t.compressedTexImage3D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ee(){try{t.texSubImage2D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function be(){try{t.texSubImage3D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function he(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ge(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ze(){try{t.texStorage2D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function re(){try{t.texStorage3D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function me(){try{t.texImage2D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Xe(){try{t.texImage3D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function De(B){xe.equals(B)===!1&&(t.scissor(B.x,B.y,B.z,B.w),xe.copy(B))}function ve(B){Le.equals(B)===!1&&(t.viewport(B.x,B.y,B.z,B.w),Le.copy(B))}function Fe(B,se){let Z=l.get(se);Z===void 0&&(Z=new WeakMap,l.set(se,Z));let Q=Z.get(B);Q===void 0&&(Q=t.getUniformBlockIndex(se,B.name),Z.set(B,Q))}function Ge(B,se){const Q=l.get(se).get(B);a.get(se)!==Q&&(t.uniformBlockBinding(se,Q,B.__bindingPointIndex),a.set(se,Q))}function dt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},P=null,$={},u={},d=new WeakMap,p=[],m=null,x=!1,v=null,g=null,h=null,y=null,_=null,S=null,A=null,C=new ke(0,0,0),b=0,R=!1,E=null,M=null,N=null,I=null,D=null,xe.set(0,0,t.canvas.width,t.canvas.height),Le.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:le,disable:de,bindFramebuffer:Te,drawBuffers:Ce,useProgram:Ue,setBlending:We,setMaterial:Be,setFlipSided:qe,setCullFace:Se,setLineWidth:St,setPolygonOffset:Ie,setScissorTest:Oe,activeTexture:L,bindTexture:w,unbindTexture:X,compressedTexImage2D:J,compressedTexImage3D:te,texImage2D:me,texImage3D:Xe,updateUBOMapping:Fe,uniformBlockBinding:Ge,texStorage2D:ze,texStorage3D:re,texSubImage2D:ee,texSubImage3D:be,compressedTexSubImage2D:he,compressedTexSubImage3D:ge,scissor:De,viewport:ve,reset:dt}}function mg(t,e,n,i){const r=eC(i);switch(n){case Rv:return t*e;case Pv:return t*e;case Lv:return t*e*2;case Dv:return t*e/r.components*r.byteLength;case If:return t*e/r.components*r.byteLength;case Iv:return t*e*2/r.components*r.byteLength;case Uf:return t*e*2/r.components*r.byteLength;case Nv:return t*e*3/r.components*r.byteLength;case Yn:return t*e*4/r.components*r.byteLength;case Ff:return t*e*4/r.components*r.byteLength;case Ml:case El:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case wl:case Tl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Jd:case th:return Math.max(t,16)*Math.max(e,8)/4;case Qd:case eh:return Math.max(t,8)*Math.max(e,8)/2;case nh:case ih:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case rh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case sh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case oh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case ah:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case lh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case ch:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case uh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case dh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case hh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case fh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case ph:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case mh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case gh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case xh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case vh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case bl:case _h:case yh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Uv:case Sh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Mh:case Eh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function eC(t){switch(t){case Ri:case bv:return{byteLength:1,components:1};case aa:case Cv:case ma:return{byteLength:2,components:1};case Lf:case Df:return{byteLength:2,components:4};case Hr:case Pf:case Mi:return{byteLength:4,components:1};case Av:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function tC(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Pe,u=new WeakMap;let d;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(L,w){return m?new OffscreenCanvas(L,w):oc("canvas")}function v(L,w,X){let J=1;const te=Oe(L);if((te.width>X||te.height>X)&&(J=X/Math.max(te.width,te.height)),J<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ee=Math.floor(J*te.width),be=Math.floor(J*te.height);d===void 0&&(d=x(ee,be));const he=w?x(ee,be):d;return he.width=ee,he.height=be,he.getContext("2d").drawImage(L,0,0,ee,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+ee+"x"+be+")."),he}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),L;return L}function g(L){return L.generateMipmaps&&L.minFilter!==In&&L.minFilter!==$n}function h(L){t.generateMipmap(L)}function y(L,w,X,J,te=!1){if(L!==null){if(t[L]!==void 0)return t[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ee=w;if(w===t.RED&&(X===t.FLOAT&&(ee=t.R32F),X===t.HALF_FLOAT&&(ee=t.R16F),X===t.UNSIGNED_BYTE&&(ee=t.R8)),w===t.RED_INTEGER&&(X===t.UNSIGNED_BYTE&&(ee=t.R8UI),X===t.UNSIGNED_SHORT&&(ee=t.R16UI),X===t.UNSIGNED_INT&&(ee=t.R32UI),X===t.BYTE&&(ee=t.R8I),X===t.SHORT&&(ee=t.R16I),X===t.INT&&(ee=t.R32I)),w===t.RG&&(X===t.FLOAT&&(ee=t.RG32F),X===t.HALF_FLOAT&&(ee=t.RG16F),X===t.UNSIGNED_BYTE&&(ee=t.RG8)),w===t.RG_INTEGER&&(X===t.UNSIGNED_BYTE&&(ee=t.RG8UI),X===t.UNSIGNED_SHORT&&(ee=t.RG16UI),X===t.UNSIGNED_INT&&(ee=t.RG32UI),X===t.BYTE&&(ee=t.RG8I),X===t.SHORT&&(ee=t.RG16I),X===t.INT&&(ee=t.RG32I)),w===t.RGB&&X===t.UNSIGNED_INT_5_9_9_9_REV&&(ee=t.RGB9_E5),w===t.RGBA){const be=te?nc:et.getTransfer(J);X===t.FLOAT&&(ee=t.RGBA32F),X===t.HALF_FLOAT&&(ee=t.RGBA16F),X===t.UNSIGNED_BYTE&&(ee=be===ot?t.SRGB8_ALPHA8:t.RGBA8),X===t.UNSIGNED_SHORT_4_4_4_4&&(ee=t.RGBA4),X===t.UNSIGNED_SHORT_5_5_5_1&&(ee=t.RGB5_A1)}return(ee===t.R16F||ee===t.R32F||ee===t.RG16F||ee===t.RG32F||ee===t.RGBA16F||ee===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function _(L,w){let X;return L?w===null||w===Hr||w===no?X=t.DEPTH24_STENCIL8:w===Mi?X=t.DEPTH32F_STENCIL8:w===aa&&(X=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Hr||w===no?X=t.DEPTH_COMPONENT24:w===Mi?X=t.DEPTH_COMPONENT32F:w===aa&&(X=t.DEPTH_COMPONENT16),X}function S(L,w){return g(L)===!0||L.isFramebufferTexture&&L.minFilter!==In&&L.minFilter!==$n?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function A(L){const w=L.target;w.removeEventListener("dispose",A),b(w),w.isVideoTexture&&u.delete(w)}function C(L){const w=L.target;w.removeEventListener("dispose",C),E(w)}function b(L){const w=i.get(L);if(w.__webglInit===void 0)return;const X=L.source,J=p.get(X);if(J){const te=J[w.__cacheKey];te.usedTimes--,te.usedTimes===0&&R(L),Object.keys(J).length===0&&p.delete(X)}i.remove(L)}function R(L){const w=i.get(L);t.deleteTexture(w.__webglTexture);const X=L.source,J=p.get(X);delete J[w.__cacheKey],o.memory.textures--}function E(L){const w=i.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(w.__webglFramebuffer[J]))for(let te=0;te<w.__webglFramebuffer[J].length;te++)t.deleteFramebuffer(w.__webglFramebuffer[J][te]);else t.deleteFramebuffer(w.__webglFramebuffer[J]);w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer[J])}else{if(Array.isArray(w.__webglFramebuffer))for(let J=0;J<w.__webglFramebuffer.length;J++)t.deleteFramebuffer(w.__webglFramebuffer[J]);else t.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&t.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let J=0;J<w.__webglColorRenderbuffer.length;J++)w.__webglColorRenderbuffer[J]&&t.deleteRenderbuffer(w.__webglColorRenderbuffer[J]);w.__webglDepthRenderbuffer&&t.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const X=L.textures;for(let J=0,te=X.length;J<te;J++){const ee=i.get(X[J]);ee.__webglTexture&&(t.deleteTexture(ee.__webglTexture),o.memory.textures--),i.remove(X[J])}i.remove(L)}let M=0;function N(){M=0}function I(){const L=M;return L>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),M+=1,L}function D(L){const w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.colorSpace),w.join()}function O(L,w){const X=i.get(L);if(L.isVideoTexture&&St(L),L.isRenderTargetTexture===!1&&L.version>0&&X.__version!==L.version){const J=L.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Le(X,L,w);return}}n.bindTexture(t.TEXTURE_2D,X.__webglTexture,t.TEXTURE0+w)}function k(L,w){const X=i.get(L);if(L.version>0&&X.__version!==L.version){Le(X,L,w);return}n.bindTexture(t.TEXTURE_2D_ARRAY,X.__webglTexture,t.TEXTURE0+w)}function U(L,w){const X=i.get(L);if(L.version>0&&X.__version!==L.version){Le(X,L,w);return}n.bindTexture(t.TEXTURE_3D,X.__webglTexture,t.TEXTURE0+w)}function V(L,w){const X=i.get(L);if(L.version>0&&X.__version!==L.version){Y(X,L,w);return}n.bindTexture(t.TEXTURE_CUBE_MAP,X.__webglTexture,t.TEXTURE0+w)}const P={[Kd]:t.REPEAT,[Lr]:t.CLAMP_TO_EDGE,[Zd]:t.MIRRORED_REPEAT},$={[In]:t.NEAREST,[GM]:t.NEAREST_MIPMAP_NEAREST,[ka]:t.NEAREST_MIPMAP_LINEAR,[$n]:t.LINEAR,[_u]:t.LINEAR_MIPMAP_NEAREST,[Dr]:t.LINEAR_MIPMAP_LINEAR},q={[$M]:t.NEVER,[JM]:t.ALWAYS,[YM]:t.LESS,[kv]:t.LEQUAL,[qM]:t.EQUAL,[QM]:t.GEQUAL,[KM]:t.GREATER,[ZM]:t.NOTEQUAL};function ne(L,w){if(w.type===Mi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===$n||w.magFilter===_u||w.magFilter===ka||w.magFilter===Dr||w.minFilter===$n||w.minFilter===_u||w.minFilter===ka||w.minFilter===Dr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(L,t.TEXTURE_WRAP_S,P[w.wrapS]),t.texParameteri(L,t.TEXTURE_WRAP_T,P[w.wrapT]),(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)&&t.texParameteri(L,t.TEXTURE_WRAP_R,P[w.wrapR]),t.texParameteri(L,t.TEXTURE_MAG_FILTER,$[w.magFilter]),t.texParameteri(L,t.TEXTURE_MIN_FILTER,$[w.minFilter]),w.compareFunction&&(t.texParameteri(L,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(L,t.TEXTURE_COMPARE_FUNC,q[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===In||w.minFilter!==ka&&w.minFilter!==Dr||w.type===Mi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");t.texParameterf(L,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function xe(L,w){let X=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",A));const J=w.source;let te=p.get(J);te===void 0&&(te={},p.set(J,te));const ee=D(w);if(ee!==L.__cacheKey){te[ee]===void 0&&(te[ee]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,X=!0),te[ee].usedTimes++;const be=te[L.__cacheKey];be!==void 0&&(te[L.__cacheKey].usedTimes--,be.usedTimes===0&&R(w)),L.__cacheKey=ee,L.__webglTexture=te[ee].texture}return X}function Le(L,w,X){let J=t.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(J=t.TEXTURE_2D_ARRAY),w.isData3DTexture&&(J=t.TEXTURE_3D);const te=xe(L,w),ee=w.source;n.bindTexture(J,L.__webglTexture,t.TEXTURE0+X);const be=i.get(ee);if(ee.version!==be.__version||te===!0){n.activeTexture(t.TEXTURE0+X);const he=et.getPrimaries(et.workingColorSpace),ge=w.colorSpace===$i?null:et.getPrimaries(w.colorSpace),ze=w.colorSpace===$i||he===ge?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);let re=v(w.image,!1,r.maxTextureSize);re=Ie(w,re);const me=s.convert(w.format,w.colorSpace),Xe=s.convert(w.type);let De=y(w.internalFormat,me,Xe,w.colorSpace,w.isVideoTexture);ne(J,w);let ve;const Fe=w.mipmaps,Ge=w.isVideoTexture!==!0,dt=be.__version===void 0||te===!0,B=ee.dataReady,se=S(w,re);if(w.isDepthTexture)De=_(w.format===io,w.type),dt&&(Ge?n.texStorage2D(t.TEXTURE_2D,1,De,re.width,re.height):n.texImage2D(t.TEXTURE_2D,0,De,re.width,re.height,0,me,Xe,null));else if(w.isDataTexture)if(Fe.length>0){Ge&&dt&&n.texStorage2D(t.TEXTURE_2D,se,De,Fe[0].width,Fe[0].height);for(let Z=0,Q=Fe.length;Z<Q;Z++)ve=Fe[Z],Ge?B&&n.texSubImage2D(t.TEXTURE_2D,Z,0,0,ve.width,ve.height,me,Xe,ve.data):n.texImage2D(t.TEXTURE_2D,Z,De,ve.width,ve.height,0,me,Xe,ve.data);w.generateMipmaps=!1}else Ge?(dt&&n.texStorage2D(t.TEXTURE_2D,se,De,re.width,re.height),B&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,re.width,re.height,me,Xe,re.data)):n.texImage2D(t.TEXTURE_2D,0,De,re.width,re.height,0,me,Xe,re.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ge&&dt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,se,De,Fe[0].width,Fe[0].height,re.depth);for(let Z=0,Q=Fe.length;Z<Q;Z++)if(ve=Fe[Z],w.format!==Yn)if(me!==null)if(Ge){if(B)if(w.layerUpdates.size>0){const ae=mg(ve.width,ve.height,w.format,w.type);for(const Ae of w.layerUpdates){const $e=ve.data.subarray(Ae*ae/ve.data.BYTES_PER_ELEMENT,(Ae+1)*ae/ve.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Z,0,0,Ae,ve.width,ve.height,1,me,$e,0,0)}w.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Z,0,0,0,ve.width,ve.height,re.depth,me,ve.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Z,De,ve.width,ve.height,re.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?B&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Z,0,0,0,ve.width,ve.height,re.depth,me,Xe,ve.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Z,De,ve.width,ve.height,re.depth,0,me,Xe,ve.data)}else{Ge&&dt&&n.texStorage2D(t.TEXTURE_2D,se,De,Fe[0].width,Fe[0].height);for(let Z=0,Q=Fe.length;Z<Q;Z++)ve=Fe[Z],w.format!==Yn?me!==null?Ge?B&&n.compressedTexSubImage2D(t.TEXTURE_2D,Z,0,0,ve.width,ve.height,me,ve.data):n.compressedTexImage2D(t.TEXTURE_2D,Z,De,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?B&&n.texSubImage2D(t.TEXTURE_2D,Z,0,0,ve.width,ve.height,me,Xe,ve.data):n.texImage2D(t.TEXTURE_2D,Z,De,ve.width,ve.height,0,me,Xe,ve.data)}else if(w.isDataArrayTexture)if(Ge){if(dt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,se,De,re.width,re.height,re.depth),B)if(w.layerUpdates.size>0){const Z=mg(re.width,re.height,w.format,w.type);for(const Q of w.layerUpdates){const ae=re.data.subarray(Q*Z/re.data.BYTES_PER_ELEMENT,(Q+1)*Z/re.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Q,re.width,re.height,1,me,Xe,ae)}w.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,me,Xe,re.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,De,re.width,re.height,re.depth,0,me,Xe,re.data);else if(w.isData3DTexture)Ge?(dt&&n.texStorage3D(t.TEXTURE_3D,se,De,re.width,re.height,re.depth),B&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,me,Xe,re.data)):n.texImage3D(t.TEXTURE_3D,0,De,re.width,re.height,re.depth,0,me,Xe,re.data);else if(w.isFramebufferTexture){if(dt)if(Ge)n.texStorage2D(t.TEXTURE_2D,se,De,re.width,re.height);else{let Z=re.width,Q=re.height;for(let ae=0;ae<se;ae++)n.texImage2D(t.TEXTURE_2D,ae,De,Z,Q,0,me,Xe,null),Z>>=1,Q>>=1}}else if(Fe.length>0){if(Ge&&dt){const Z=Oe(Fe[0]);n.texStorage2D(t.TEXTURE_2D,se,De,Z.width,Z.height)}for(let Z=0,Q=Fe.length;Z<Q;Z++)ve=Fe[Z],Ge?B&&n.texSubImage2D(t.TEXTURE_2D,Z,0,0,me,Xe,ve):n.texImage2D(t.TEXTURE_2D,Z,De,me,Xe,ve);w.generateMipmaps=!1}else if(Ge){if(dt){const Z=Oe(re);n.texStorage2D(t.TEXTURE_2D,se,De,Z.width,Z.height)}B&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,me,Xe,re)}else n.texImage2D(t.TEXTURE_2D,0,De,me,Xe,re);g(w)&&h(J),be.__version=ee.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function Y(L,w,X){if(w.image.length!==6)return;const J=xe(L,w),te=w.source;n.bindTexture(t.TEXTURE_CUBE_MAP,L.__webglTexture,t.TEXTURE0+X);const ee=i.get(te);if(te.version!==ee.__version||J===!0){n.activeTexture(t.TEXTURE0+X);const be=et.getPrimaries(et.workingColorSpace),he=w.colorSpace===$i?null:et.getPrimaries(w.colorSpace),ge=w.colorSpace===$i||be===he?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const ze=w.isCompressedTexture||w.image[0].isCompressedTexture,re=w.image[0]&&w.image[0].isDataTexture,me=[];for(let Q=0;Q<6;Q++)!ze&&!re?me[Q]=v(w.image[Q],!0,r.maxCubemapSize):me[Q]=re?w.image[Q].image:w.image[Q],me[Q]=Ie(w,me[Q]);const Xe=me[0],De=s.convert(w.format,w.colorSpace),ve=s.convert(w.type),Fe=y(w.internalFormat,De,ve,w.colorSpace),Ge=w.isVideoTexture!==!0,dt=ee.__version===void 0||J===!0,B=te.dataReady;let se=S(w,Xe);ne(t.TEXTURE_CUBE_MAP,w);let Z;if(ze){Ge&&dt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,se,Fe,Xe.width,Xe.height);for(let Q=0;Q<6;Q++){Z=me[Q].mipmaps;for(let ae=0;ae<Z.length;ae++){const Ae=Z[ae];w.format!==Yn?De!==null?Ge?B&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ae,0,0,Ae.width,Ae.height,De,Ae.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ae,Fe,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?B&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ae,0,0,Ae.width,Ae.height,De,ve,Ae.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ae,Fe,Ae.width,Ae.height,0,De,ve,Ae.data)}}}else{if(Z=w.mipmaps,Ge&&dt){Z.length>0&&se++;const Q=Oe(me[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,se,Fe,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(re){Ge?B&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,me[Q].width,me[Q].height,De,ve,me[Q].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Fe,me[Q].width,me[Q].height,0,De,ve,me[Q].data);for(let ae=0;ae<Z.length;ae++){const $e=Z[ae].image[Q].image;Ge?B&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ae+1,0,0,$e.width,$e.height,De,ve,$e.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ae+1,Fe,$e.width,$e.height,0,De,ve,$e.data)}}else{Ge?B&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,De,ve,me[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Fe,De,ve,me[Q]);for(let ae=0;ae<Z.length;ae++){const Ae=Z[ae];Ge?B&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ae+1,0,0,De,ve,Ae.image[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ae+1,Fe,De,ve,Ae.image[Q])}}}g(w)&&h(t.TEXTURE_CUBE_MAP),ee.__version=te.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function K(L,w,X,J,te,ee){const be=s.convert(X.format,X.colorSpace),he=s.convert(X.type),ge=y(X.internalFormat,be,he,X.colorSpace);if(!i.get(w).__hasExternalTextures){const re=Math.max(1,w.width>>ee),me=Math.max(1,w.height>>ee);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,ee,ge,re,me,w.depth,0,be,he,null):n.texImage2D(te,ee,ge,re,me,0,be,he,null)}n.bindFramebuffer(t.FRAMEBUFFER,L),Se(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,te,i.get(X).__webglTexture,0,qe(w)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,J,te,i.get(X).__webglTexture,ee),n.bindFramebuffer(t.FRAMEBUFFER,null)}function le(L,w,X){if(t.bindRenderbuffer(t.RENDERBUFFER,L),w.depthBuffer){const J=w.depthTexture,te=J&&J.isDepthTexture?J.type:null,ee=_(w.stencilBuffer,te),be=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,he=qe(w);Se(w)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,he,ee,w.width,w.height):X?t.renderbufferStorageMultisample(t.RENDERBUFFER,he,ee,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,ee,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,be,t.RENDERBUFFER,L)}else{const J=w.textures;for(let te=0;te<J.length;te++){const ee=J[te],be=s.convert(ee.format,ee.colorSpace),he=s.convert(ee.type),ge=y(ee.internalFormat,be,he,ee.colorSpace),ze=qe(w);X&&Se(w)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ze,ge,w.width,w.height):Se(w)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ze,ge,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,ge,w.width,w.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function de(L,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),O(w.depthTexture,0);const J=i.get(w.depthTexture).__webglTexture,te=qe(w);if(w.depthTexture.format===Gs)Se(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,J,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,J,0);else if(w.depthTexture.format===io)Se(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,J,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Te(L){const w=i.get(L),X=L.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==L.depthTexture){const J=L.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),J){const te=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,J.removeEventListener("dispose",te)};J.addEventListener("dispose",te),w.__depthDisposeCallback=te}w.__boundDepthTexture=J}if(L.depthTexture&&!w.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");de(w.__webglFramebuffer,L)}else if(X){w.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer[J]),w.__webglDepthbuffer[J]===void 0)w.__webglDepthbuffer[J]=t.createRenderbuffer(),le(w.__webglDepthbuffer[J],L,!1);else{const te=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ee=w.__webglDepthbuffer[J];t.bindRenderbuffer(t.RENDERBUFFER,ee),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,ee)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=t.createRenderbuffer(),le(w.__webglDepthbuffer,L,!1);else{const J=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,te=w.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,te),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,te)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ce(L,w,X){const J=i.get(L);w!==void 0&&K(J.__webglFramebuffer,L,L.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),X!==void 0&&Te(L)}function Ue(L){const w=L.texture,X=i.get(L),J=i.get(w);L.addEventListener("dispose",C);const te=L.textures,ee=L.isWebGLCubeRenderTarget===!0,be=te.length>1;if(be||(J.__webglTexture===void 0&&(J.__webglTexture=t.createTexture()),J.__version=w.version,o.memory.textures++),ee){X.__webglFramebuffer=[];for(let he=0;he<6;he++)if(w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer[he]=[];for(let ge=0;ge<w.mipmaps.length;ge++)X.__webglFramebuffer[he][ge]=t.createFramebuffer()}else X.__webglFramebuffer[he]=t.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer=[];for(let he=0;he<w.mipmaps.length;he++)X.__webglFramebuffer[he]=t.createFramebuffer()}else X.__webglFramebuffer=t.createFramebuffer();if(be)for(let he=0,ge=te.length;he<ge;he++){const ze=i.get(te[he]);ze.__webglTexture===void 0&&(ze.__webglTexture=t.createTexture(),o.memory.textures++)}if(L.samples>0&&Se(L)===!1){X.__webglMultisampledFramebuffer=t.createFramebuffer(),X.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let he=0;he<te.length;he++){const ge=te[he];X.__webglColorRenderbuffer[he]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,X.__webglColorRenderbuffer[he]);const ze=s.convert(ge.format,ge.colorSpace),re=s.convert(ge.type),me=y(ge.internalFormat,ze,re,ge.colorSpace,L.isXRRenderTarget===!0),Xe=qe(L);t.renderbufferStorageMultisample(t.RENDERBUFFER,Xe,me,L.width,L.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,X.__webglColorRenderbuffer[he])}t.bindRenderbuffer(t.RENDERBUFFER,null),L.depthBuffer&&(X.__webglDepthRenderbuffer=t.createRenderbuffer(),le(X.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ee){n.bindTexture(t.TEXTURE_CUBE_MAP,J.__webglTexture),ne(t.TEXTURE_CUBE_MAP,w);for(let he=0;he<6;he++)if(w.mipmaps&&w.mipmaps.length>0)for(let ge=0;ge<w.mipmaps.length;ge++)K(X.__webglFramebuffer[he][ge],L,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,ge);else K(X.__webglFramebuffer[he],L,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);g(w)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(be){for(let he=0,ge=te.length;he<ge;he++){const ze=te[he],re=i.get(ze);n.bindTexture(t.TEXTURE_2D,re.__webglTexture),ne(t.TEXTURE_2D,ze),K(X.__webglFramebuffer,L,ze,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,0),g(ze)&&h(t.TEXTURE_2D)}n.unbindTexture()}else{let he=t.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(he=L.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(he,J.__webglTexture),ne(he,w),w.mipmaps&&w.mipmaps.length>0)for(let ge=0;ge<w.mipmaps.length;ge++)K(X.__webglFramebuffer[ge],L,w,t.COLOR_ATTACHMENT0,he,ge);else K(X.__webglFramebuffer,L,w,t.COLOR_ATTACHMENT0,he,0);g(w)&&h(he),n.unbindTexture()}L.depthBuffer&&Te(L)}function tt(L){const w=L.textures;for(let X=0,J=w.length;X<J;X++){const te=w[X];if(g(te)){const ee=L.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,be=i.get(te).__webglTexture;n.bindTexture(ee,be),h(ee),n.unbindTexture()}}}const F=[],We=[];function Be(L){if(L.samples>0){if(Se(L)===!1){const w=L.textures,X=L.width,J=L.height;let te=t.COLOR_BUFFER_BIT;const ee=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,be=i.get(L),he=w.length>1;if(he)for(let ge=0;ge<w.length;ge++)n.bindFramebuffer(t.FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,be.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let ge=0;ge<w.length;ge++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),he){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,be.__webglColorRenderbuffer[ge]);const ze=i.get(w[ge]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ze,0)}t.blitFramebuffer(0,0,X,J,0,0,X,J,te,t.NEAREST),l===!0&&(F.length=0,We.length=0,F.push(t.COLOR_ATTACHMENT0+ge),L.depthBuffer&&L.resolveDepthBuffer===!1&&(F.push(ee),We.push(ee),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,We)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,F))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),he)for(let ge=0;ge<w.length;ge++){n.bindFramebuffer(t.FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,be.__webglColorRenderbuffer[ge]);const ze=i.get(w[ge]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,be.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,ze,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const w=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[w])}}}function qe(L){return Math.min(r.maxSamples,L.samples)}function Se(L){const w=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function St(L){const w=o.render.frame;u.get(L)!==w&&(u.set(L,w),L.update())}function Ie(L,w){const X=L.colorSpace,J=L.format,te=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||X!==mr&&X!==$i&&(et.getTransfer(X)===ot?(J!==Yn||te!==Ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),w}function Oe(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=N,this.setTexture2D=O,this.setTexture2DArray=k,this.setTexture3D=U,this.setTextureCube=V,this.rebindTextures=Ce,this.setupRenderTarget=Ue,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=Be,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=K,this.useMultisampledRTT=Se}function nC(t,e){function n(i,r=$i){let s;const o=et.getTransfer(r);if(i===Ri)return t.UNSIGNED_BYTE;if(i===Lf)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Df)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Av)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===bv)return t.BYTE;if(i===Cv)return t.SHORT;if(i===aa)return t.UNSIGNED_SHORT;if(i===Pf)return t.INT;if(i===Hr)return t.UNSIGNED_INT;if(i===Mi)return t.FLOAT;if(i===ma)return t.HALF_FLOAT;if(i===Rv)return t.ALPHA;if(i===Nv)return t.RGB;if(i===Yn)return t.RGBA;if(i===Pv)return t.LUMINANCE;if(i===Lv)return t.LUMINANCE_ALPHA;if(i===Gs)return t.DEPTH_COMPONENT;if(i===io)return t.DEPTH_STENCIL;if(i===Dv)return t.RED;if(i===If)return t.RED_INTEGER;if(i===Iv)return t.RG;if(i===Uf)return t.RG_INTEGER;if(i===Ff)return t.RGBA_INTEGER;if(i===Ml||i===El||i===wl||i===Tl)if(o===ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ml)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===El)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===wl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Tl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ml)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===El)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===wl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Tl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Qd||i===Jd||i===eh||i===th)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Qd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Jd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===eh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===th)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===nh||i===ih||i===rh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===nh||i===ih)return o===ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===rh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===sh||i===oh||i===ah||i===lh||i===ch||i===uh||i===dh||i===hh||i===fh||i===ph||i===mh||i===gh||i===xh||i===vh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===sh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===oh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ah)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===lh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ch)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===uh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===dh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===hh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===fh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ph)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===mh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===gh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===xh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===vh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===bl||i===_h||i===yh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===bl)return o===ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===_h)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===yh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Uv||i===Sh||i===Mh||i===Eh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===bl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Sh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Mh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Eh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===no?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class iC extends Ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ir extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rC={type:"move"};class Wu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ir,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ir,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ir,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const g=n.getJointPose(v,i),h=this._getHandJoint(c,v);g!==null&&(h.matrix.fromArray(g.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=g.radius),h.visible=g!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],p=u.position.distanceTo(d.position),m=.02,x=.005;c.inputState.pinching&&p>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(rC)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ir;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const sC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,oC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class aC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new tn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new ur({vertexShader:sC,fragmentShader:oC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new un(new xa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class lC extends qr{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,p=null,m=null,x=null;const v=new aC,g=n.getContextAttributes();let h=null,y=null;const _=[],S=[],A=new Pe;let C=null;const b=new Ln;b.layers.enable(1),b.viewport=new At;const R=new Ln;R.layers.enable(2),R.viewport=new At;const E=[b,R],M=new iC;M.layers.enable(1),M.layers.enable(2);let N=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let K=_[Y];return K===void 0&&(K=new Wu,_[Y]=K),K.getTargetRaySpace()},this.getControllerGrip=function(Y){let K=_[Y];return K===void 0&&(K=new Wu,_[Y]=K),K.getGripSpace()},this.getHand=function(Y){let K=_[Y];return K===void 0&&(K=new Wu,_[Y]=K),K.getHandSpace()};function D(Y){const K=S.indexOf(Y.inputSource);if(K===-1)return;const le=_[K];le!==void 0&&(le.update(Y.inputSource,Y.frame,c||o),le.dispatchEvent({type:Y.type,data:Y.inputSource}))}function O(){r.removeEventListener("select",D),r.removeEventListener("selectstart",D),r.removeEventListener("selectend",D),r.removeEventListener("squeeze",D),r.removeEventListener("squeezestart",D),r.removeEventListener("squeezeend",D),r.removeEventListener("end",O),r.removeEventListener("inputsourceschange",k);for(let Y=0;Y<_.length;Y++){const K=S[Y];K!==null&&(S[Y]=null,_[Y].disconnect(K))}N=null,I=null,v.reset(),e.setRenderTarget(h),m=null,p=null,d=null,r=null,y=null,Le.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return d},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",D),r.addEventListener("selectstart",D),r.addEventListener("selectend",D),r.addEventListener("squeeze",D),r.addEventListener("squeezestart",D),r.addEventListener("squeezeend",D),r.addEventListener("end",O),r.addEventListener("inputsourceschange",k),g.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(A),r.renderState.layers===void 0){const K={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,K),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new Wr(m.framebufferWidth,m.framebufferHeight,{format:Yn,type:Ri,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let K=null,le=null,de=null;g.depth&&(de=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,K=g.stencil?io:Gs,le=g.stencil?no:Hr);const Te={colorFormat:n.RGBA8,depthFormat:de,scaleFactor:s};d=new XRWebGLBinding(r,n),p=d.createProjectionLayer(Te),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),y=new Wr(p.textureWidth,p.textureHeight,{format:Yn,type:Ri,depthTexture:new qv(p.textureWidth,p.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Le.setContext(r),Le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function k(Y){for(let K=0;K<Y.removed.length;K++){const le=Y.removed[K],de=S.indexOf(le);de>=0&&(S[de]=null,_[de].disconnect(le))}for(let K=0;K<Y.added.length;K++){const le=Y.added[K];let de=S.indexOf(le);if(de===-1){for(let Ce=0;Ce<_.length;Ce++)if(Ce>=S.length){S.push(le),de=Ce;break}else if(S[Ce]===null){S[Ce]=le,de=Ce;break}if(de===-1)break}const Te=_[de];Te&&Te.connect(le)}}const U=new j,V=new j;function P(Y,K,le){U.setFromMatrixPosition(K.matrixWorld),V.setFromMatrixPosition(le.matrixWorld);const de=U.distanceTo(V),Te=K.projectionMatrix.elements,Ce=le.projectionMatrix.elements,Ue=Te[14]/(Te[10]-1),tt=Te[14]/(Te[10]+1),F=(Te[9]+1)/Te[5],We=(Te[9]-1)/Te[5],Be=(Te[8]-1)/Te[0],qe=(Ce[8]+1)/Ce[0],Se=Ue*Be,St=Ue*qe,Ie=de/(-Be+qe),Oe=Ie*-Be;if(K.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Oe),Y.translateZ(Ie),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Te[10]===-1)Y.projectionMatrix.copy(K.projectionMatrix),Y.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const L=Ue+Ie,w=tt+Ie,X=Se-Oe,J=St+(de-Oe),te=F*tt/w*L,ee=We*tt/w*L;Y.projectionMatrix.makePerspective(X,J,te,ee,L,w),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function $(Y,K){K===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(K.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let K=Y.near,le=Y.far;v.texture!==null&&(v.depthNear>0&&(K=v.depthNear),v.depthFar>0&&(le=v.depthFar)),M.near=R.near=b.near=K,M.far=R.far=b.far=le,(N!==M.near||I!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),N=M.near,I=M.far);const de=Y.parent,Te=M.cameras;$(M,de);for(let Ce=0;Ce<Te.length;Ce++)$(Te[Ce],de);Te.length===2?P(M,b,R):M.projectionMatrix.copy(b.projectionMatrix),q(Y,M,de)};function q(Y,K,le){le===null?Y.matrix.copy(K.matrixWorld):(Y.matrix.copy(le.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(K.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(K.projectionMatrix),Y.projectionMatrixInverse.copy(K.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=wh*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(Y){l=Y,p!==null&&(p.fixedFoveation=Y),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Y)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let ne=null;function xe(Y,K){if(u=K.getViewerPose(c||o),x=K,u!==null){const le=u.views;m!==null&&(e.setRenderTargetFramebuffer(y,m.framebuffer),e.setRenderTarget(y));let de=!1;le.length!==M.cameras.length&&(M.cameras.length=0,de=!0);for(let Ce=0;Ce<le.length;Ce++){const Ue=le[Ce];let tt=null;if(m!==null)tt=m.getViewport(Ue);else{const We=d.getViewSubImage(p,Ue);tt=We.viewport,Ce===0&&(e.setRenderTargetTextures(y,We.colorTexture,p.ignoreDepthValues?void 0:We.depthStencilTexture),e.setRenderTarget(y))}let F=E[Ce];F===void 0&&(F=new Ln,F.layers.enable(Ce),F.viewport=new At,E[Ce]=F),F.matrix.fromArray(Ue.transform.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale),F.projectionMatrix.fromArray(Ue.projectionMatrix),F.projectionMatrixInverse.copy(F.projectionMatrix).invert(),F.viewport.set(tt.x,tt.y,tt.width,tt.height),Ce===0&&(M.matrix.copy(F.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),de===!0&&M.cameras.push(F)}const Te=r.enabledFeatures;if(Te&&Te.includes("depth-sensing")){const Ce=d.getDepthInformation(le[0]);Ce&&Ce.isValid&&Ce.texture&&v.init(e,Ce,r.renderState)}}for(let le=0;le<_.length;le++){const de=S[le],Te=_[le];de!==null&&Te!==void 0&&Te.update(de,K,c||o)}ne&&ne(Y,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),x=null}const Le=new $v;Le.setAnimationLoop(xe),this.setAnimationLoop=function(Y){ne=Y},this.dispose=function(){}}}const Mr=new ui,cC=new ut;function uC(t,e){function n(g,h){g.matrixAutoUpdate===!0&&g.updateMatrix(),h.value.copy(g.matrix)}function i(g,h){h.color.getRGB(g.fogColor.value,Hv(t)),h.isFog?(g.fogNear.value=h.near,g.fogFar.value=h.far):h.isFogExp2&&(g.fogDensity.value=h.density)}function r(g,h,y,_,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(g,h):h.isMeshToonMaterial?(s(g,h),d(g,h)):h.isMeshPhongMaterial?(s(g,h),u(g,h)):h.isMeshStandardMaterial?(s(g,h),p(g,h),h.isMeshPhysicalMaterial&&m(g,h,S)):h.isMeshMatcapMaterial?(s(g,h),x(g,h)):h.isMeshDepthMaterial?s(g,h):h.isMeshDistanceMaterial?(s(g,h),v(g,h)):h.isMeshNormalMaterial?s(g,h):h.isLineBasicMaterial?(o(g,h),h.isLineDashedMaterial&&a(g,h)):h.isPointsMaterial?l(g,h,y,_):h.isSpriteMaterial?c(g,h):h.isShadowMaterial?(g.color.value.copy(h.color),g.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(g,h){g.opacity.value=h.opacity,h.color&&g.diffuse.value.copy(h.color),h.emissive&&g.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.bumpMap&&(g.bumpMap.value=h.bumpMap,n(h.bumpMap,g.bumpMapTransform),g.bumpScale.value=h.bumpScale,h.side===mn&&(g.bumpScale.value*=-1)),h.normalMap&&(g.normalMap.value=h.normalMap,n(h.normalMap,g.normalMapTransform),g.normalScale.value.copy(h.normalScale),h.side===mn&&g.normalScale.value.negate()),h.displacementMap&&(g.displacementMap.value=h.displacementMap,n(h.displacementMap,g.displacementMapTransform),g.displacementScale.value=h.displacementScale,g.displacementBias.value=h.displacementBias),h.emissiveMap&&(g.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,g.emissiveMapTransform)),h.specularMap&&(g.specularMap.value=h.specularMap,n(h.specularMap,g.specularMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest);const y=e.get(h),_=y.envMap,S=y.envMapRotation;_&&(g.envMap.value=_,Mr.copy(S),Mr.x*=-1,Mr.y*=-1,Mr.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Mr.y*=-1,Mr.z*=-1),g.envMapRotation.value.setFromMatrix4(cC.makeRotationFromEuler(Mr)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=h.reflectivity,g.ior.value=h.ior,g.refractionRatio.value=h.refractionRatio),h.lightMap&&(g.lightMap.value=h.lightMap,g.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,g.lightMapTransform)),h.aoMap&&(g.aoMap.value=h.aoMap,g.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,g.aoMapTransform))}function o(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform))}function a(g,h){g.dashSize.value=h.dashSize,g.totalSize.value=h.dashSize+h.gapSize,g.scale.value=h.scale}function l(g,h,y,_){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.size.value=h.size*y,g.scale.value=_*.5,h.map&&(g.map.value=h.map,n(h.map,g.uvTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function c(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.rotation.value=h.rotation,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function u(g,h){g.specular.value.copy(h.specular),g.shininess.value=Math.max(h.shininess,1e-4)}function d(g,h){h.gradientMap&&(g.gradientMap.value=h.gradientMap)}function p(g,h){g.metalness.value=h.metalness,h.metalnessMap&&(g.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,g.metalnessMapTransform)),g.roughness.value=h.roughness,h.roughnessMap&&(g.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,g.roughnessMapTransform)),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)}function m(g,h,y){g.ior.value=h.ior,h.sheen>0&&(g.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),g.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(g.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,g.sheenColorMapTransform)),h.sheenRoughnessMap&&(g.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,g.sheenRoughnessMapTransform))),h.clearcoat>0&&(g.clearcoat.value=h.clearcoat,g.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(g.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,g.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(g.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===mn&&g.clearcoatNormalScale.value.negate())),h.dispersion>0&&(g.dispersion.value=h.dispersion),h.iridescence>0&&(g.iridescence.value=h.iridescence,g.iridescenceIOR.value=h.iridescenceIOR,g.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(g.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,g.iridescenceMapTransform)),h.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),h.transmission>0&&(g.transmission.value=h.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),h.transmissionMap&&(g.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,g.transmissionMapTransform)),g.thickness.value=h.thickness,h.thicknessMap&&(g.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=h.attenuationDistance,g.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(g.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(g.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=h.specularIntensity,g.specularColor.value.copy(h.specularColor),h.specularColorMap&&(g.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,g.specularColorMapTransform)),h.specularIntensityMap&&(g.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,h){h.matcap&&(g.matcap.value=h.matcap)}function v(g,h){const y=e.get(h).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function dC(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,_){const S=_.program;i.uniformBlockBinding(y,S)}function c(y,_){let S=r[y.id];S===void 0&&(x(y),S=u(y),r[y.id]=S,y.addEventListener("dispose",g));const A=_.program;i.updateUBOMapping(y,A);const C=e.render.frame;s[y.id]!==C&&(p(y),s[y.id]=C)}function u(y){const _=d();y.__bindingPointIndex=_;const S=t.createBuffer(),A=y.__size,C=y.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,A,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,S),S}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(y){const _=r[y.id],S=y.uniforms,A=y.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let C=0,b=S.length;C<b;C++){const R=Array.isArray(S[C])?S[C]:[S[C]];for(let E=0,M=R.length;E<M;E++){const N=R[E];if(m(N,C,E,A)===!0){const I=N.__offset,D=Array.isArray(N.value)?N.value:[N.value];let O=0;for(let k=0;k<D.length;k++){const U=D[k],V=v(U);typeof U=="number"||typeof U=="boolean"?(N.__data[0]=U,t.bufferSubData(t.UNIFORM_BUFFER,I+O,N.__data)):U.isMatrix3?(N.__data[0]=U.elements[0],N.__data[1]=U.elements[1],N.__data[2]=U.elements[2],N.__data[3]=0,N.__data[4]=U.elements[3],N.__data[5]=U.elements[4],N.__data[6]=U.elements[5],N.__data[7]=0,N.__data[8]=U.elements[6],N.__data[9]=U.elements[7],N.__data[10]=U.elements[8],N.__data[11]=0):(U.toArray(N.__data,O),O+=V.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,I,N.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(y,_,S,A){const C=y.value,b=_+"_"+S;if(A[b]===void 0)return typeof C=="number"||typeof C=="boolean"?A[b]=C:A[b]=C.clone(),!0;{const R=A[b];if(typeof C=="number"||typeof C=="boolean"){if(R!==C)return A[b]=C,!0}else if(R.equals(C)===!1)return R.copy(C),!0}return!1}function x(y){const _=y.uniforms;let S=0;const A=16;for(let b=0,R=_.length;b<R;b++){const E=Array.isArray(_[b])?_[b]:[_[b]];for(let M=0,N=E.length;M<N;M++){const I=E[M],D=Array.isArray(I.value)?I.value:[I.value];for(let O=0,k=D.length;O<k;O++){const U=D[O],V=v(U),P=S%A,$=P%V.boundary,q=P+$;S+=$,q!==0&&A-q<V.storage&&(S+=A-q),I.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=S,S+=V.storage}}}const C=S%A;return C>0&&(S+=A-C),y.__size=S,y.__cache={},this}function v(y){const _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function g(y){const _=y.target;_.removeEventListener("dispose",g);const S=o.indexOf(_.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function h(){for(const y in r)t.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}class hC{constructor(e={}){const{canvas:n=nE(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const m=new Uint32Array(4),x=new Int32Array(4);let v=null,g=null;const h=[],y=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Wn,this.toneMapping=or,this.toneMappingExposure=1;const _=this;let S=!1,A=0,C=0,b=null,R=-1,E=null;const M=new At,N=new At;let I=null;const D=new ke(0);let O=0,k=n.width,U=n.height,V=1,P=null,$=null;const q=new At(0,0,k,U),ne=new At(0,0,k,U);let xe=!1;const Le=new zf;let Y=!1,K=!1;const le=new ut,de=new j,Te=new At,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ue=!1;function tt(){return b===null?V:1}let F=i;function We(T,z){return n.getContext(T,z)}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Nf}`),n.addEventListener("webglcontextlost",Z,!1),n.addEventListener("webglcontextrestored",Q,!1),n.addEventListener("webglcontextcreationerror",ae,!1),F===null){const z="webgl2";if(F=We(z,T),F===null)throw We(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Be,qe,Se,St,Ie,Oe,L,w,X,J,te,ee,be,he,ge,ze,re,me,Xe,De,ve,Fe,Ge,dt;function B(){Be=new v2(F),Be.init(),Fe=new nC(F,Be),qe=new h2(F,Be,e,Fe),Se=new Jb(F),St=new S2(F),Ie=new Bb,Oe=new tC(F,Be,Se,Ie,qe,Fe,St),L=new p2(_),w=new x2(_),X=new AE(F),Ge=new u2(F,X),J=new _2(F,X,St,Ge),te=new E2(F,J,X,St),Xe=new M2(F,qe,Oe),ze=new f2(Ie),ee=new Ob(_,L,w,Be,qe,Ge,ze),be=new uC(_,Ie),he=new Vb,ge=new $b(Be),me=new c2(_,L,w,Se,te,p,l),re=new Qb(_,te,qe),dt=new dC(F,St,qe,Se),De=new d2(F,Be,St),ve=new y2(F,Be,St),St.programs=ee.programs,_.capabilities=qe,_.extensions=Be,_.properties=Ie,_.renderLists=he,_.shadowMap=re,_.state=Se,_.info=St}B();const se=new lC(_,F);this.xr=se,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const T=Be.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Be.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(T){T!==void 0&&(V=T,this.setSize(k,U,!1))},this.getSize=function(T){return T.set(k,U)},this.setSize=function(T,z,H=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=T,U=z,n.width=Math.floor(T*V),n.height=Math.floor(z*V),H===!0&&(n.style.width=T+"px",n.style.height=z+"px"),this.setViewport(0,0,T,z)},this.getDrawingBufferSize=function(T){return T.set(k*V,U*V).floor()},this.setDrawingBufferSize=function(T,z,H){k=T,U=z,V=H,n.width=Math.floor(T*H),n.height=Math.floor(z*H),this.setViewport(0,0,T,z)},this.getCurrentViewport=function(T){return T.copy(M)},this.getViewport=function(T){return T.copy(q)},this.setViewport=function(T,z,H,W){T.isVector4?q.set(T.x,T.y,T.z,T.w):q.set(T,z,H,W),Se.viewport(M.copy(q).multiplyScalar(V).round())},this.getScissor=function(T){return T.copy(ne)},this.setScissor=function(T,z,H,W){T.isVector4?ne.set(T.x,T.y,T.z,T.w):ne.set(T,z,H,W),Se.scissor(N.copy(ne).multiplyScalar(V).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(T){Se.setScissorTest(xe=T)},this.setOpaqueSort=function(T){P=T},this.setTransparentSort=function(T){$=T},this.getClearColor=function(T){return T.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor.apply(me,arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha.apply(me,arguments)},this.clear=function(T=!0,z=!0,H=!0){let W=0;if(T){let G=!1;if(b!==null){const oe=b.texture.format;G=oe===Ff||oe===Uf||oe===If}if(G){const oe=b.texture.type,fe=oe===Ri||oe===Hr||oe===aa||oe===no||oe===Lf||oe===Df,_e=me.getClearColor(),ye=me.getClearAlpha(),Re=_e.r,Ne=_e.g,Me=_e.b;fe?(m[0]=Re,m[1]=Ne,m[2]=Me,m[3]=ye,F.clearBufferuiv(F.COLOR,0,m)):(x[0]=Re,x[1]=Ne,x[2]=Me,x[3]=ye,F.clearBufferiv(F.COLOR,0,x))}else W|=F.COLOR_BUFFER_BIT}z&&(W|=F.DEPTH_BUFFER_BIT),H&&(W|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Z,!1),n.removeEventListener("webglcontextrestored",Q,!1),n.removeEventListener("webglcontextcreationerror",ae,!1),he.dispose(),ge.dispose(),Ie.dispose(),L.dispose(),w.dispose(),te.dispose(),Ge.dispose(),dt.dispose(),ee.dispose(),se.dispose(),se.removeEventListener("sessionstart",ei),se.removeEventListener("sessionend",Qf),gr.stop()};function Z(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function Q(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const T=St.autoReset,z=re.enabled,H=re.autoUpdate,W=re.needsUpdate,G=re.type;B(),St.autoReset=T,re.enabled=z,re.autoUpdate=H,re.needsUpdate=W,re.type=G}function ae(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ae(T){const z=T.target;z.removeEventListener("dispose",Ae),$e(z)}function $e(T){Mt(T),Ie.remove(T)}function Mt(T){const z=Ie.get(T).programs;z!==void 0&&(z.forEach(function(H){ee.releaseProgram(H)}),T.isShaderMaterial&&ee.releaseShaderCache(T))}this.renderBufferDirect=function(T,z,H,W,G,oe){z===null&&(z=Ce);const fe=G.isMesh&&G.matrixWorld.determinant()<0,_e=g_(T,z,H,W,G);Se.setMaterial(W,fe);let ye=H.index,Re=1;if(W.wireframe===!0){if(ye=J.getWireframeAttribute(H),ye===void 0)return;Re=2}const Ne=H.drawRange,Me=H.attributes.position;let Ze=Ne.start*Re,mt=(Ne.start+Ne.count)*Re;oe!==null&&(Ze=Math.max(Ze,oe.start*Re),mt=Math.min(mt,(oe.start+oe.count)*Re)),ye!==null?(Ze=Math.max(Ze,0),mt=Math.min(mt,ye.count)):Me!=null&&(Ze=Math.max(Ze,0),mt=Math.min(mt,Me.count));const gt=mt-Ze;if(gt<0||gt===1/0)return;Ge.setup(G,W,_e,H,ye);let xn,Qe=De;if(ye!==null&&(xn=X.get(ye),Qe=ve,Qe.setIndex(xn)),G.isMesh)W.wireframe===!0?(Se.setLineWidth(W.wireframeLinewidth*tt()),Qe.setMode(F.LINES)):Qe.setMode(F.TRIANGLES);else if(G.isLine){let we=W.linewidth;we===void 0&&(we=1),Se.setLineWidth(we*tt()),G.isLineSegments?Qe.setMode(F.LINES):G.isLineLoop?Qe.setMode(F.LINE_LOOP):Qe.setMode(F.LINE_STRIP)}else G.isPoints?Qe.setMode(F.POINTS):G.isSprite&&Qe.setMode(F.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)Qe.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(Be.get("WEBGL_multi_draw"))Qe.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const we=G._multiDrawStarts,Ft=G._multiDrawCounts,Je=G._multiDrawCount,On=ye?X.get(ye).bytesPerElement:1,Zr=Ie.get(W).currentProgram.getUniforms();for(let vn=0;vn<Je;vn++)Zr.setValue(F,"_gl_DrawID",vn),Qe.render(we[vn]/On,Ft[vn])}else if(G.isInstancedMesh)Qe.renderInstances(Ze,gt,G.count);else if(H.isInstancedBufferGeometry){const we=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Ft=Math.min(H.instanceCount,we);Qe.renderInstances(Ze,gt,Ft)}else Qe.render(Ze,gt)};function Ut(T,z,H){T.transparent===!0&&T.side===ln&&T.forceSinglePass===!1?(T.side=mn,T.needsUpdate=!0,_a(T,z,H),T.side=cr,T.needsUpdate=!0,_a(T,z,H),T.side=ln):_a(T,z,H)}this.compile=function(T,z,H=null){H===null&&(H=T),g=ge.get(H),g.init(z),y.push(g),H.traverseVisible(function(G){G.isLight&&G.layers.test(z.layers)&&(g.pushLight(G),G.castShadow&&g.pushShadow(G))}),T!==H&&T.traverseVisible(function(G){G.isLight&&G.layers.test(z.layers)&&(g.pushLight(G),G.castShadow&&g.pushShadow(G))}),g.setupLights();const W=new Set;return T.traverse(function(G){const oe=G.material;if(oe)if(Array.isArray(oe))for(let fe=0;fe<oe.length;fe++){const _e=oe[fe];Ut(_e,H,G),W.add(_e)}else Ut(oe,H,G),W.add(oe)}),y.pop(),g=null,W},this.compileAsync=function(T,z,H=null){const W=this.compile(T,z,H);return new Promise(G=>{function oe(){if(W.forEach(function(fe){Ie.get(fe).currentProgram.isReady()&&W.delete(fe)}),W.size===0){G(T);return}setTimeout(oe,10)}Be.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let Ke=null;function di(T){Ke&&Ke(T)}function ei(){gr.stop()}function Qf(){gr.start()}const gr=new $v;gr.setAnimationLoop(di),typeof self<"u"&&gr.setContext(self),this.setAnimationLoop=function(T){Ke=T,se.setAnimationLoop(T),T===null?gr.stop():gr.start()},se.addEventListener("sessionstart",ei),se.addEventListener("sessionend",Qf),this.render=function(T,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(z),z=se.getCamera()),T.isScene===!0&&T.onBeforeRender(_,T,z,b),g=ge.get(T,y.length),g.init(z),y.push(g),le.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Le.setFromProjectionMatrix(le),K=this.localClippingEnabled,Y=ze.init(this.clippingPlanes,K),v=he.get(T,h.length),v.init(),h.push(v),se.enabled===!0&&se.isPresenting===!0){const oe=_.xr.getDepthSensingMesh();oe!==null&&Bc(oe,z,-1/0,_.sortObjects)}Bc(T,z,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(P,$),Ue=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,Ue&&me.addToRenderList(v,T),this.info.render.frame++,Y===!0&&ze.beginShadows();const H=g.state.shadowsArray;re.render(H,T,z),Y===!0&&ze.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=v.opaque,G=v.transmissive;if(g.setupLights(),z.isArrayCamera){const oe=z.cameras;if(G.length>0)for(let fe=0,_e=oe.length;fe<_e;fe++){const ye=oe[fe];ep(W,G,T,ye)}Ue&&me.render(T);for(let fe=0,_e=oe.length;fe<_e;fe++){const ye=oe[fe];Jf(v,T,ye,ye.viewport)}}else G.length>0&&ep(W,G,T,z),Ue&&me.render(T),Jf(v,T,z);b!==null&&(Oe.updateMultisampleRenderTarget(b),Oe.updateRenderTargetMipmap(b)),T.isScene===!0&&T.onAfterRender(_,T,z),Ge.resetDefaultState(),R=-1,E=null,y.pop(),y.length>0?(g=y[y.length-1],Y===!0&&ze.setGlobalState(_.clippingPlanes,g.state.camera)):g=null,h.pop(),h.length>0?v=h[h.length-1]:v=null};function Bc(T,z,H,W){if(T.visible===!1)return;if(T.layers.test(z.layers)){if(T.isGroup)H=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(z);else if(T.isLight)g.pushLight(T),T.castShadow&&g.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Le.intersectsSprite(T)){W&&Te.setFromMatrixPosition(T.matrixWorld).applyMatrix4(le);const fe=te.update(T),_e=T.material;_e.visible&&v.push(T,fe,_e,H,Te.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Le.intersectsObject(T))){const fe=te.update(T),_e=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Te.copy(T.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Te.copy(fe.boundingSphere.center)),Te.applyMatrix4(T.matrixWorld).applyMatrix4(le)),Array.isArray(_e)){const ye=fe.groups;for(let Re=0,Ne=ye.length;Re<Ne;Re++){const Me=ye[Re],Ze=_e[Me.materialIndex];Ze&&Ze.visible&&v.push(T,fe,Ze,H,Te.z,Me)}}else _e.visible&&v.push(T,fe,_e,H,Te.z,null)}}const oe=T.children;for(let fe=0,_e=oe.length;fe<_e;fe++)Bc(oe[fe],z,H,W)}function Jf(T,z,H,W){const G=T.opaque,oe=T.transmissive,fe=T.transparent;g.setupLightsView(H),Y===!0&&ze.setGlobalState(_.clippingPlanes,H),W&&Se.viewport(M.copy(W)),G.length>0&&va(G,z,H),oe.length>0&&va(oe,z,H),fe.length>0&&va(fe,z,H),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function ep(T,z,H,W){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[W.id]===void 0&&(g.state.transmissionRenderTarget[W.id]=new Wr(1,1,{generateMipmaps:!0,type:Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float")?ma:Ri,minFilter:Dr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));const oe=g.state.transmissionRenderTarget[W.id],fe=W.viewport||M;oe.setSize(fe.z,fe.w);const _e=_.getRenderTarget();_.setRenderTarget(oe),_.getClearColor(D),O=_.getClearAlpha(),O<1&&_.setClearColor(16777215,.5),_.clear(),Ue&&me.render(H);const ye=_.toneMapping;_.toneMapping=or;const Re=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),g.setupLightsView(W),Y===!0&&ze.setGlobalState(_.clippingPlanes,W),va(T,H,W),Oe.updateMultisampleRenderTarget(oe),Oe.updateRenderTargetMipmap(oe),Be.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let Me=0,Ze=z.length;Me<Ze;Me++){const mt=z[Me],gt=mt.object,xn=mt.geometry,Qe=mt.material,we=mt.group;if(Qe.side===ln&&gt.layers.test(W.layers)){const Ft=Qe.side;Qe.side=mn,Qe.needsUpdate=!0,tp(gt,H,W,xn,Qe,we),Qe.side=Ft,Qe.needsUpdate=!0,Ne=!0}}Ne===!0&&(Oe.updateMultisampleRenderTarget(oe),Oe.updateRenderTargetMipmap(oe))}_.setRenderTarget(_e),_.setClearColor(D,O),Re!==void 0&&(W.viewport=Re),_.toneMapping=ye}function va(T,z,H){const W=z.isScene===!0?z.overrideMaterial:null;for(let G=0,oe=T.length;G<oe;G++){const fe=T[G],_e=fe.object,ye=fe.geometry,Re=W===null?fe.material:W,Ne=fe.group;_e.layers.test(H.layers)&&tp(_e,z,H,ye,Re,Ne)}}function tp(T,z,H,W,G,oe){T.onBeforeRender(_,z,H,W,G,oe),T.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),G.onBeforeRender(_,z,H,W,T,oe),G.transparent===!0&&G.side===ln&&G.forceSinglePass===!1?(G.side=mn,G.needsUpdate=!0,_.renderBufferDirect(H,z,W,G,T,oe),G.side=cr,G.needsUpdate=!0,_.renderBufferDirect(H,z,W,G,T,oe),G.side=ln):_.renderBufferDirect(H,z,W,G,T,oe),T.onAfterRender(_,z,H,W,G,oe)}function _a(T,z,H){z.isScene!==!0&&(z=Ce);const W=Ie.get(T),G=g.state.lights,oe=g.state.shadowsArray,fe=G.state.version,_e=ee.getParameters(T,G.state,oe,z,H),ye=ee.getProgramCacheKey(_e);let Re=W.programs;W.environment=T.isMeshStandardMaterial?z.environment:null,W.fog=z.fog,W.envMap=(T.isMeshStandardMaterial?w:L).get(T.envMap||W.environment),W.envMapRotation=W.environment!==null&&T.envMap===null?z.environmentRotation:T.envMapRotation,Re===void 0&&(T.addEventListener("dispose",Ae),Re=new Map,W.programs=Re);let Ne=Re.get(ye);if(Ne!==void 0){if(W.currentProgram===Ne&&W.lightsStateVersion===fe)return ip(T,_e),Ne}else _e.uniforms=ee.getUniforms(T),T.onBeforeCompile(_e,_),Ne=ee.acquireProgram(_e,ye),Re.set(ye,Ne),W.uniforms=_e.uniforms;const Me=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Me.clippingPlanes=ze.uniform),ip(T,_e),W.needsLights=v_(T),W.lightsStateVersion=fe,W.needsLights&&(Me.ambientLightColor.value=G.state.ambient,Me.lightProbe.value=G.state.probe,Me.directionalLights.value=G.state.directional,Me.directionalLightShadows.value=G.state.directionalShadow,Me.spotLights.value=G.state.spot,Me.spotLightShadows.value=G.state.spotShadow,Me.rectAreaLights.value=G.state.rectArea,Me.ltc_1.value=G.state.rectAreaLTC1,Me.ltc_2.value=G.state.rectAreaLTC2,Me.pointLights.value=G.state.point,Me.pointLightShadows.value=G.state.pointShadow,Me.hemisphereLights.value=G.state.hemi,Me.directionalShadowMap.value=G.state.directionalShadowMap,Me.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Me.spotShadowMap.value=G.state.spotShadowMap,Me.spotLightMatrix.value=G.state.spotLightMatrix,Me.spotLightMap.value=G.state.spotLightMap,Me.pointShadowMap.value=G.state.pointShadowMap,Me.pointShadowMatrix.value=G.state.pointShadowMatrix),W.currentProgram=Ne,W.uniformsList=null,Ne}function np(T){if(T.uniformsList===null){const z=T.currentProgram.getUniforms();T.uniformsList=Al.seqWithValue(z.seq,T.uniforms)}return T.uniformsList}function ip(T,z){const H=Ie.get(T);H.outputColorSpace=z.outputColorSpace,H.batching=z.batching,H.batchingColor=z.batchingColor,H.instancing=z.instancing,H.instancingColor=z.instancingColor,H.instancingMorph=z.instancingMorph,H.skinning=z.skinning,H.morphTargets=z.morphTargets,H.morphNormals=z.morphNormals,H.morphColors=z.morphColors,H.morphTargetsCount=z.morphTargetsCount,H.numClippingPlanes=z.numClippingPlanes,H.numIntersection=z.numClipIntersection,H.vertexAlphas=z.vertexAlphas,H.vertexTangents=z.vertexTangents,H.toneMapping=z.toneMapping}function g_(T,z,H,W,G){z.isScene!==!0&&(z=Ce),Oe.resetTextureUnits();const oe=z.fog,fe=W.isMeshStandardMaterial?z.environment:null,_e=b===null?_.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:mr,ye=(W.isMeshStandardMaterial?w:L).get(W.envMap||fe),Re=W.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ne=!!H.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Me=!!H.morphAttributes.position,Ze=!!H.morphAttributes.normal,mt=!!H.morphAttributes.color;let gt=or;W.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(gt=_.toneMapping);const xn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Qe=xn!==void 0?xn.length:0,we=Ie.get(W),Ft=g.state.lights;if(Y===!0&&(K===!0||T!==E)){const Cn=T===E&&W.id===R;ze.setState(W,T,Cn)}let Je=!1;W.version===we.__version?(we.needsLights&&we.lightsStateVersion!==Ft.state.version||we.outputColorSpace!==_e||G.isBatchedMesh&&we.batching===!1||!G.isBatchedMesh&&we.batching===!0||G.isBatchedMesh&&we.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&we.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&we.instancing===!1||!G.isInstancedMesh&&we.instancing===!0||G.isSkinnedMesh&&we.skinning===!1||!G.isSkinnedMesh&&we.skinning===!0||G.isInstancedMesh&&we.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&we.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&we.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&we.instancingMorph===!1&&G.morphTexture!==null||we.envMap!==ye||W.fog===!0&&we.fog!==oe||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==ze.numPlanes||we.numIntersection!==ze.numIntersection)||we.vertexAlphas!==Re||we.vertexTangents!==Ne||we.morphTargets!==Me||we.morphNormals!==Ze||we.morphColors!==mt||we.toneMapping!==gt||we.morphTargetsCount!==Qe)&&(Je=!0):(Je=!0,we.__version=W.version);let On=we.currentProgram;Je===!0&&(On=_a(W,z,G));let Zr=!1,vn=!1,zc=!1;const Et=On.getUniforms(),Li=we.uniforms;if(Se.useProgram(On.program)&&(Zr=!0,vn=!0,zc=!0),W.id!==R&&(R=W.id,vn=!0),Zr||E!==T){Et.setValue(F,"projectionMatrix",T.projectionMatrix),Et.setValue(F,"viewMatrix",T.matrixWorldInverse);const Cn=Et.map.cameraPosition;Cn!==void 0&&Cn.setValue(F,de.setFromMatrixPosition(T.matrixWorld)),qe.logarithmicDepthBuffer&&Et.setValue(F,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Et.setValue(F,"isOrthographic",T.isOrthographicCamera===!0),E!==T&&(E=T,vn=!0,zc=!0)}if(G.isSkinnedMesh){Et.setOptional(F,G,"bindMatrix"),Et.setOptional(F,G,"bindMatrixInverse");const Cn=G.skeleton;Cn&&(Cn.boneTexture===null&&Cn.computeBoneTexture(),Et.setValue(F,"boneTexture",Cn.boneTexture,Oe))}G.isBatchedMesh&&(Et.setOptional(F,G,"batchingTexture"),Et.setValue(F,"batchingTexture",G._matricesTexture,Oe),Et.setOptional(F,G,"batchingIdTexture"),Et.setValue(F,"batchingIdTexture",G._indirectTexture,Oe),Et.setOptional(F,G,"batchingColorTexture"),G._colorsTexture!==null&&Et.setValue(F,"batchingColorTexture",G._colorsTexture,Oe));const Vc=H.morphAttributes;if((Vc.position!==void 0||Vc.normal!==void 0||Vc.color!==void 0)&&Xe.update(G,H,On),(vn||we.receiveShadow!==G.receiveShadow)&&(we.receiveShadow=G.receiveShadow,Et.setValue(F,"receiveShadow",G.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Li.envMap.value=ye,Li.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&z.environment!==null&&(Li.envMapIntensity.value=z.environmentIntensity),vn&&(Et.setValue(F,"toneMappingExposure",_.toneMappingExposure),we.needsLights&&x_(Li,zc),oe&&W.fog===!0&&be.refreshFogUniforms(Li,oe),be.refreshMaterialUniforms(Li,W,V,U,g.state.transmissionRenderTarget[T.id]),Al.upload(F,np(we),Li,Oe)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Al.upload(F,np(we),Li,Oe),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Et.setValue(F,"center",G.center),Et.setValue(F,"modelViewMatrix",G.modelViewMatrix),Et.setValue(F,"normalMatrix",G.normalMatrix),Et.setValue(F,"modelMatrix",G.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Cn=W.uniformsGroups;for(let jc=0,__=Cn.length;jc<__;jc++){const rp=Cn[jc];dt.update(rp,On),dt.bind(rp,On)}}return On}function x_(T,z){T.ambientLightColor.needsUpdate=z,T.lightProbe.needsUpdate=z,T.directionalLights.needsUpdate=z,T.directionalLightShadows.needsUpdate=z,T.pointLights.needsUpdate=z,T.pointLightShadows.needsUpdate=z,T.spotLights.needsUpdate=z,T.spotLightShadows.needsUpdate=z,T.rectAreaLights.needsUpdate=z,T.hemisphereLights.needsUpdate=z}function v_(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(T,z,H){Ie.get(T.texture).__webglTexture=z,Ie.get(T.depthTexture).__webglTexture=H;const W=Ie.get(T);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=H===void 0,W.__autoAllocateDepthBuffer||Be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,z){const H=Ie.get(T);H.__webglFramebuffer=z,H.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(T,z=0,H=0){b=T,A=z,C=H;let W=!0,G=null,oe=!1,fe=!1;if(T){const ye=Ie.get(T);if(ye.__useDefaultFramebuffer!==void 0)Se.bindFramebuffer(F.FRAMEBUFFER,null),W=!1;else if(ye.__webglFramebuffer===void 0)Oe.setupRenderTarget(T);else if(ye.__hasExternalTextures)Oe.rebindTextures(T,Ie.get(T.texture).__webglTexture,Ie.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Me=T.depthTexture;if(ye.__boundDepthTexture!==Me){if(Me!==null&&Ie.has(Me)&&(T.width!==Me.image.width||T.height!==Me.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Oe.setupDepthRenderbuffer(T)}}const Re=T.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(fe=!0);const Ne=Ie.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ne[z])?G=Ne[z][H]:G=Ne[z],oe=!0):T.samples>0&&Oe.useMultisampledRTT(T)===!1?G=Ie.get(T).__webglMultisampledFramebuffer:Array.isArray(Ne)?G=Ne[H]:G=Ne,M.copy(T.viewport),N.copy(T.scissor),I=T.scissorTest}else M.copy(q).multiplyScalar(V).floor(),N.copy(ne).multiplyScalar(V).floor(),I=xe;if(Se.bindFramebuffer(F.FRAMEBUFFER,G)&&W&&Se.drawBuffers(T,G),Se.viewport(M),Se.scissor(N),Se.setScissorTest(I),oe){const ye=Ie.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+z,ye.__webglTexture,H)}else if(fe){const ye=Ie.get(T.texture),Re=z||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,ye.__webglTexture,H||0,Re)}R=-1},this.readRenderTargetPixels=function(T,z,H,W,G,oe,fe){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=Ie.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&fe!==void 0&&(_e=_e[fe]),_e){Se.bindFramebuffer(F.FRAMEBUFFER,_e);try{const ye=T.texture,Re=ye.format,Ne=ye.type;if(!qe.textureFormatReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qe.textureTypeReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=T.width-W&&H>=0&&H<=T.height-G&&F.readPixels(z,H,W,G,Fe.convert(Re),Fe.convert(Ne),oe)}finally{const ye=b!==null?Ie.get(b).__webglFramebuffer:null;Se.bindFramebuffer(F.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(T,z,H,W,G,oe,fe){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=Ie.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&fe!==void 0&&(_e=_e[fe]),_e){Se.bindFramebuffer(F.FRAMEBUFFER,_e);try{const ye=T.texture,Re=ye.format,Ne=ye.type;if(!qe.textureFormatReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qe.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=T.width-W&&H>=0&&H<=T.height-G){const Me=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Me),F.bufferData(F.PIXEL_PACK_BUFFER,oe.byteLength,F.STREAM_READ),F.readPixels(z,H,W,G,Fe.convert(Re),Fe.convert(Ne),0),F.flush();const Ze=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);await iE(F,Ze,4);try{F.bindBuffer(F.PIXEL_PACK_BUFFER,Me),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,oe)}finally{F.deleteBuffer(Me),F.deleteSync(Ze)}return oe}}finally{const ye=b!==null?Ie.get(b).__webglFramebuffer:null;Se.bindFramebuffer(F.FRAMEBUFFER,ye)}}},this.copyFramebufferToTexture=function(T,z=null,H=0){T.isTexture!==!0&&(jo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,T=arguments[1]);const W=Math.pow(2,-H),G=Math.floor(T.image.width*W),oe=Math.floor(T.image.height*W),fe=z!==null?z.x:0,_e=z!==null?z.y:0;Oe.setTexture2D(T,0),F.copyTexSubImage2D(F.TEXTURE_2D,H,0,0,fe,_e,G,oe),Se.unbindTexture()},this.copyTextureToTexture=function(T,z,H=null,W=null,G=0){T.isTexture!==!0&&(jo("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,T=arguments[1],z=arguments[2],G=arguments[3]||0,H=null);let oe,fe,_e,ye,Re,Ne;H!==null?(oe=H.max.x-H.min.x,fe=H.max.y-H.min.y,_e=H.min.x,ye=H.min.y):(oe=T.image.width,fe=T.image.height,_e=0,ye=0),W!==null?(Re=W.x,Ne=W.y):(Re=0,Ne=0);const Me=Fe.convert(z.format),Ze=Fe.convert(z.type);Oe.setTexture2D(z,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,z.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,z.unpackAlignment);const mt=F.getParameter(F.UNPACK_ROW_LENGTH),gt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),xn=F.getParameter(F.UNPACK_SKIP_PIXELS),Qe=F.getParameter(F.UNPACK_SKIP_ROWS),we=F.getParameter(F.UNPACK_SKIP_IMAGES),Ft=T.isCompressedTexture?T.mipmaps[G]:T.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,Ft.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ft.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,_e),F.pixelStorei(F.UNPACK_SKIP_ROWS,ye),T.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,G,Re,Ne,oe,fe,Me,Ze,Ft.data):T.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,G,Re,Ne,Ft.width,Ft.height,Me,Ft.data):F.texSubImage2D(F.TEXTURE_2D,G,Re,Ne,oe,fe,Me,Ze,Ft),F.pixelStorei(F.UNPACK_ROW_LENGTH,mt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,gt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,xn),F.pixelStorei(F.UNPACK_SKIP_ROWS,Qe),F.pixelStorei(F.UNPACK_SKIP_IMAGES,we),G===0&&z.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),Se.unbindTexture()},this.copyTextureToTexture3D=function(T,z,H=null,W=null,G=0){T.isTexture!==!0&&(jo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,W=arguments[1]||null,T=arguments[2],z=arguments[3],G=arguments[4]||0);let oe,fe,_e,ye,Re,Ne,Me,Ze,mt;const gt=T.isCompressedTexture?T.mipmaps[G]:T.image;H!==null?(oe=H.max.x-H.min.x,fe=H.max.y-H.min.y,_e=H.max.z-H.min.z,ye=H.min.x,Re=H.min.y,Ne=H.min.z):(oe=gt.width,fe=gt.height,_e=gt.depth,ye=0,Re=0,Ne=0),W!==null?(Me=W.x,Ze=W.y,mt=W.z):(Me=0,Ze=0,mt=0);const xn=Fe.convert(z.format),Qe=Fe.convert(z.type);let we;if(z.isData3DTexture)Oe.setTexture3D(z,0),we=F.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)Oe.setTexture2DArray(z,0),we=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,z.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,z.unpackAlignment);const Ft=F.getParameter(F.UNPACK_ROW_LENGTH),Je=F.getParameter(F.UNPACK_IMAGE_HEIGHT),On=F.getParameter(F.UNPACK_SKIP_PIXELS),Zr=F.getParameter(F.UNPACK_SKIP_ROWS),vn=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,gt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,gt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ye),F.pixelStorei(F.UNPACK_SKIP_ROWS,Re),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ne),T.isDataTexture||T.isData3DTexture?F.texSubImage3D(we,G,Me,Ze,mt,oe,fe,_e,xn,Qe,gt.data):z.isCompressedArrayTexture?F.compressedTexSubImage3D(we,G,Me,Ze,mt,oe,fe,_e,xn,gt.data):F.texSubImage3D(we,G,Me,Ze,mt,oe,fe,_e,xn,Qe,gt),F.pixelStorei(F.UNPACK_ROW_LENGTH,Ft),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Je),F.pixelStorei(F.UNPACK_SKIP_PIXELS,On),F.pixelStorei(F.UNPACK_SKIP_ROWS,Zr),F.pixelStorei(F.UNPACK_SKIP_IMAGES,vn),G===0&&z.generateMipmaps&&F.generateMipmap(we),Se.unbindTexture()},this.initRenderTarget=function(T){Ie.get(T).__webglFramebuffer===void 0&&Oe.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Oe.setTextureCube(T,0):T.isData3DTexture?Oe.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Oe.setTexture2DArray(T,0):Oe.setTexture2D(T,0),Se.unbindTexture()},this.resetState=function(){A=0,C=0,b=null,Se.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===kf?"display-p3":"srgb",n.unpackColorSpace=et.workingColorSpace===Lc?"display-p3":"srgb"}}class fC extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ui,this.environmentIntensity=1,this.environmentRotation=new ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class e_ extends Kr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ac=new j,lc=new j,gg=new ut,bo=new Ic,sl=new Dc,Xu=new j,xg=new j;class pC extends Vt{constructor(e=new Bt,n=new e_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)ac.fromBufferAttribute(n,r-1),lc.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=ac.distanceTo(lc);e.setAttribute("lineDistance",new gn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),sl.copy(i.boundingSphere),sl.applyMatrix4(r),sl.radius+=s,e.ray.intersectsSphere(sl)===!1)return;gg.copy(r).invert(),bo.copy(e.ray).applyMatrix4(gg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,p=i.attributes.position;if(u!==null){const m=Math.max(0,o.start),x=Math.min(u.count,o.start+o.count);for(let v=m,g=x-1;v<g;v+=c){const h=u.getX(v),y=u.getX(v+1),_=ol(this,e,bo,l,h,y);_&&n.push(_)}if(this.isLineLoop){const v=u.getX(x-1),g=u.getX(m),h=ol(this,e,bo,l,v,g);h&&n.push(h)}}else{const m=Math.max(0,o.start),x=Math.min(p.count,o.start+o.count);for(let v=m,g=x-1;v<g;v+=c){const h=ol(this,e,bo,l,v,v+1);h&&n.push(h)}if(this.isLineLoop){const v=ol(this,e,bo,l,x-1,m);v&&n.push(v)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ol(t,e,n,i,r,s){const o=t.geometry.attributes.position;if(ac.fromBufferAttribute(o,r),lc.fromBufferAttribute(o,s),n.distanceSqToSegment(ac,lc,Xu,xg)>i)return;Xu.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(Xu);if(!(l<e.near||l>e.far))return{distance:l,point:xg.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,object:t}}const vg=new j,_g=new j;class mC extends pC{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)vg.fromBufferAttribute(n,r),_g.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+vg.distanceTo(_g);e.setAttribute("lineDistance",new gn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class gC extends tn{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class jf extends Bt{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],d=[],p=[],m=[];let x=0;const v=[],g=i/2;let h=0;y(),o===!1&&(e>0&&_(!0),n>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new gn(d,3)),this.setAttribute("normal",new gn(p,3)),this.setAttribute("uv",new gn(m,2));function y(){const S=new j,A=new j;let C=0;const b=(n-e)/i;for(let R=0;R<=s;R++){const E=[],M=R/s,N=M*(n-e)+e;for(let I=0;I<=r;I++){const D=I/r,O=D*l+a,k=Math.sin(O),U=Math.cos(O);A.x=N*k,A.y=-M*i+g,A.z=N*U,d.push(A.x,A.y,A.z),S.set(k,b,U).normalize(),p.push(S.x,S.y,S.z),m.push(D,1-M),E.push(x++)}v.push(E)}for(let R=0;R<r;R++)for(let E=0;E<s;E++){const M=v[E][R],N=v[E+1][R],I=v[E+1][R+1],D=v[E][R+1];u.push(M,N,D),u.push(N,I,D),C+=6}c.addGroup(h,C,0),h+=C}function _(S){const A=x,C=new Pe,b=new j;let R=0;const E=S===!0?e:n,M=S===!0?1:-1;for(let I=1;I<=r;I++)d.push(0,g*M,0),p.push(0,M,0),m.push(.5,.5),x++;const N=x;for(let I=0;I<=r;I++){const O=I/r*l+a,k=Math.cos(O),U=Math.sin(O);b.x=E*U,b.y=g*M,b.z=E*k,d.push(b.x,b.y,b.z),p.push(0,M,0),C.x=k*.5+.5,C.y=U*.5*M+.5,m.push(C.x,C.y),x++}for(let I=0;I<r;I++){const D=A+I,O=N+I;S===!0?u.push(O,O+1,D):u.push(O+1,O,D),R+=3}c.addGroup(h,R,S===!0?1:2),h+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jf(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class xC extends Kr{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ke(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class Or extends Kr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fv,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class t_ extends Vt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const $u=new ut,yg=new j,Sg=new j;class vC{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pe(512,512),this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zf,this._frameExtents=new Pe(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;yg.setFromMatrixPosition(e.matrixWorld),n.position.copy(yg),Sg.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Sg),n.updateMatrixWorld(),$u.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix($u),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply($u)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class _C extends vC{constructor(){super(new Yv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Yu extends t_{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.shadow=new _C}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class yC extends t_{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const Mg=new ut;class SC{constructor(e,n,i=0,r=1/0){this.ray=new Ic(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Of,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Mg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Mg),this}intersectObject(e,n=!0,i=[]){return bh(e,this,i,n),i.sort(Eg),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)bh(e[r],this,i,n);return i.sort(Eg),i}}function Eg(t,e){return t.distance-e.distance}function bh(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)bh(s[o],e,n,!0)}}class wg{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Qt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class MC extends mC{constructor(e=10,n=10,i=4473924,r=8947848){i=new ke(i),r=new ke(r);const s=n/2,o=e/n,a=e/2,l=[],c=[];for(let p=0,m=0,x=-a;p<=n;p++,x+=o){l.push(-a,0,x,a,0,x),l.push(x,0,-a,x,0,a);const v=p===s?i:r;v.toArray(c,m),m+=3,v.toArray(c,m),m+=3,v.toArray(c,m),m+=3,v.toArray(c,m),m+=3}const u=new Bt;u.setAttribute("position",new gn(l,3)),u.setAttribute("color",new gn(c,3));const d=new e_({vertexColors:!0,toneMapped:!1});super(u,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class EC extends qr{constructor(e,n){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nf);const Tg={type:"change"},Gf={type:"start"},n_={type:"end"},al=new Ic,bg=new Hi,wC=Math.cos(70*tE.DEG2RAD),bt=new j,on=2*Math.PI,it={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},qu=1e-6;class TC extends EC{constructor(e,n=null){super(e,n),this.state=it.NONE,this.enabled=!0,this.target=new j,this.cursor=new j,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Vs.ROTATE,MIDDLE:Vs.DOLLY,RIGHT:Vs.PAN},this.touches={ONE:Ls.ROTATE,TWO:Ls.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new j,this._lastQuaternion=new Xr,this._lastTargetPosition=new j,this._quat=new Xr().setFromUnitVectors(e.up,new j(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new wg,this._sphericalDelta=new wg,this._scale=1,this._panOffset=new j,this._rotateStart=new Pe,this._rotateEnd=new Pe,this._rotateDelta=new Pe,this._panStart=new Pe,this._panEnd=new Pe,this._panDelta=new Pe,this._dollyStart=new Pe,this._dollyEnd=new Pe,this._dollyDelta=new Pe,this._dollyDirection=new j,this._mouse=new Pe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=CC.bind(this),this._onPointerDown=bC.bind(this),this._onPointerUp=AC.bind(this),this._onContextMenu=UC.bind(this),this._onMouseWheel=PC.bind(this),this._onKeyDown=LC.bind(this),this._onTouchStart=DC.bind(this),this._onTouchMove=IC.bind(this),this._onMouseDown=RC.bind(this),this._onMouseMove=NC.bind(this),this._interceptControlDown=FC.bind(this),this._interceptControlUp=kC.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Tg),this.update(),this.state=it.NONE}update(e=null){const n=this.object.position;bt.copy(n).sub(this.target),bt.applyQuaternion(this._quat),this._spherical.setFromVector3(bt),this.autoRotate&&this.state===it.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=on:i>Math.PI&&(i-=on),r<-Math.PI?r+=on:r>Math.PI&&(r-=on),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(bt.setFromSpherical(this._spherical),bt.applyQuaternion(this._quatInverse),n.copy(this.target).add(bt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=bt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new j(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new j(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=bt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(al.origin.copy(this.object.position),al.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(al.direction))<wC?this.object.lookAt(this.target):(bg.setFromNormalAndCoplanarPoint(this.object.up,this.target),al.intersectPlane(bg,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>qu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>qu||this._lastTargetPosition.distanceToSquared(this.target)>qu?(this.dispatchEvent(Tg),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?on/60*this.autoRotateSpeed*e:on/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){bt.setFromMatrixColumn(n,0),bt.multiplyScalar(-e),this._panOffset.add(bt)}_panUp(e,n){this.screenSpacePanning===!0?bt.setFromMatrixColumn(n,1):(bt.setFromMatrixColumn(n,0),bt.crossVectors(this.object.up,bt)),bt.multiplyScalar(e),this._panOffset.add(bt)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;bt.copy(r).sub(this.target);let s=bt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*n*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=n-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(on*this._rotateDelta.x/n.clientHeight),this._rotateUp(on*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(on*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-on*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(on*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-on*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(on*this._rotateDelta.x/n.clientHeight),this._rotateUp(on*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new Pe,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function bC(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function CC(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function AC(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(n_),this.state=it.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function RC(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Vs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=it.DOLLY;break;case Vs.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=it.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=it.ROTATE}break;case Vs.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=it.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=it.PAN}break;default:this.state=it.NONE}this.state!==it.NONE&&this.dispatchEvent(Gf)}function NC(t){switch(this.state){case it.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case it.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case it.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function PC(t){this.enabled===!1||this.enableZoom===!1||this.state!==it.NONE||(t.preventDefault(),this.dispatchEvent(Gf),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(n_))}function LC(t){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(t)}function DC(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case Ls.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=it.TOUCH_ROTATE;break;case Ls.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=it.TOUCH_PAN;break;default:this.state=it.NONE}break;case 2:switch(this.touches.TWO){case Ls.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=it.TOUCH_DOLLY_PAN;break;case Ls.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=it.TOUCH_DOLLY_ROTATE;break;default:this.state=it.NONE}break;default:this.state=it.NONE}this.state!==it.NONE&&this.dispatchEvent(Gf)}function IC(t){switch(this._trackPointer(t),this.state){case it.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case it.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case it.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case it.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=it.NONE}}function UC(t){this.enabled!==!1&&t.preventDefault()}function FC(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function kC(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function OC(){const t=new Ir;t.name="Vehicle_AlphaCoupe";const e=[];function n(c,u,d,p,m,x,v,g,h){const y=new co(d,p,m),_=y.attributes.uv;for(let M=0;M<_.count;M++){const N=_.getX(M),I=_.getY(M);_.setXY(M,h.minU+N*(h.maxU-h.minU),h.minV+I*(h.maxV-h.minV))}_.needsUpdate=!0;const S=y.index?new Uint16Array(y.index.array):new Uint16Array(y.attributes.position.count);if(!y.index)for(let M=0;M<S.length;M++)S[M]=M;const A={id:c,name:u,materialId:v,materialIndex:g,vertexCount:y.attributes.position.count,triangleCount:S.length/3,vertices:new Float32Array(y.attributes.position.array),normals:new Float32Array(y.attributes.normal.array),uvs:new Float32Array(y.attributes.uv.array),indices:S};e.push(A);const C=[];for(let M=0;M<S.length;M+=3){const N=S[M],I=S[M+1],D=S[M+2];C.push({indices:[N,I,D],uvs:[{u:_.getX(N),v:_.getY(N)},{u:_.getX(I),v:_.getY(I)},{u:_.getX(D),v:_.getY(D)}]})}const b=xs.find(M=>M.id===v)||xs[0],R=new Or({color:new ke(b.diffuseColor),roughness:v==="mat-glass"?.1:.4,metalness:v==="mat-chrome"?.9:.2,transparent:v==="mat-glass",opacity:b.opacity}),E=new un(y,R);E.name=u,E.userData={partId:c,materialId:v,name:u},E.position.set(x[0],x[1],x[2]),E.castShadow=!0,E.receiveShadow=!0,t.add(E)}n("part_chassis","Chassis Body (Side Panels & Skirts)",1.9,.45,4.2,[0,.45,0],"mat-body",0,{minU:.05,maxU:.48,minV:.05,maxV:.48}),n("part_roof","Cabin & Roof Section",1.6,.42,2.1,[0,.88,-.2],"mat-body",0,{minU:.52,maxU:.95,minV:.05,maxV:.48}),n("part_hood","Front Engine Hood",1.7,.1,1.2,[0,.68,1.3],"mat-body",0,{minU:.52,maxU:.95,minV:.52,maxV:.95}),n("part_trunk","Rear Trunk & Spoiler",1.7,.1,.9,[0,.68,-1.5],"mat-body",0,{minU:.05,maxU:.48,minV:.52,maxV:.95}),n("part_windshield","Front & Rear Windshield",1.55,.38,1.9,[0,.88,-.2],"mat-glass",1,{minU:.8,maxU:.98,minV:.8,maxV:.98}),[[-.95,.32,1.25],[.95,.32,1.25],[-.95,.32,-1.25],[.95,.32,-1.25]].forEach((c,u)=>{const d=new jf(.34,.34,.28,20);d.rotateZ(Math.PI/2);const p=d.index?new Uint16Array(d.index.array):new Uint16Array(d.attributes.position.count);if(!d.index)for(let x=0;x<p.length;x++)p[x]=x;const m=new un(d,new Or({color:1973790,roughness:.8,metalness:.2}));m.name=`Wheel_${u+1}`,m.position.set(c[0],c[1],c[2]),m.castShadow=!0,m.userData={partId:`wheel_${u+1}`,materialId:"mat-wheel",name:`Wheel ${u+1}`},t.add(m),e.push({id:`wheel_${u+1}`,name:`Wheel ${u+1}`,materialId:"mat-wheel",materialIndex:2,vertexCount:d.attributes.position.count,triangleCount:p.length/3,vertices:new Float32Array(d.attributes.position.array),normals:new Float32Array(d.attributes.normal.array),uvs:new Float32Array(d.attributes.uv.array),indices:p})}),n("part_headlights","Front Headlight Lenses",1.6,.12,.08,[0,.52,2.12],"mat-lights",5,{minU:.01,maxU:.1,minV:.01,maxV:.05}),n("part_taillights","Rear Taillights",1.6,.12,.08,[0,.56,-2.12],"mat-lights",5,{minU:.1,maxU:.2,minV:.01,maxV:.05});const r=new Ni().setFromObject(t),s=new j,o=new j;r.getSize(s),r.getCenter(o);const a={id:"geo-alpha-coupe",name:"GTA SA Coupe Geometry",flags:20,meshes:e,materials:xs,hasNormals:!0,hasUVs:!0,hasPreLitColors:!1,numUVLayers:1,stats:{vertices:e.reduce((c,u)=>c+u.vertexCount,0),triangles:e.reduce((c,u)=>c+u.triangleCount,0)}};return{model:{name:"Alpha Coupe (SA Sport)",fileName:"alpha.dff",rwVersion:402915327,rwVersionString:"3.6.0.3 (GTA SA)",frames:[{id:0,name:"chassis",parentIndex:-1,rotationMatrix:[1,0,0,0,1,0,0,0,1],position:{x:0,y:0,z:0}}],geometries:[a],materials:xs,stats:{totalFrames:1,totalGeometries:1,totalMeshes:e.length,totalVertices:a.stats.vertices,totalTriangles:a.stats.triangles,totalMaterials:xs.length,hasUV:!0},boundingBox:{min:{x:r.min.x,y:r.min.y,z:r.min.z},max:{x:r.max.x,y:r.max.y,z:r.max.z},center:{x:o.x,y:o.y,z:o.z},size:{x:s.x,y:s.y,z:s.z}}},object3d:t}}const BC={normal:"source-over",multiply:"multiply",screen:"screen",overlay:"overlay"};function zC(t){return new Promise((e,n)=>{const i=new Image;i.onload=()=>e(i),i.onerror=()=>n(new Error("Unable to load layer artwork.")),i.src=t})}async function la(t,e){const n=document.createElement("canvas");n.width=e,n.height=e;const i=n.getContext("2d");if(!i)throw new Error("Canvas 2D is unavailable in this browser.");for(const r of[...t].reverse())if(r.visible){if(i.save(),i.globalAlpha=r.opacity,i.globalCompositeOperation=BC[r.blendMode],(r.type==="background"||r.type==="base_color")&&r.color&&(i.fillStyle=r.color,i.fillRect(0,0,e,e)),r.content)try{const s=await zC(r.content);i.drawImage(s,0,0,e,e)}catch{}i.restore()}return n}function i_(t,e,n){if(n==="png"){t.toBlob(o=>{o&&Cg(o,e)},"image/png");return}const i=t.getContext("2d");if(!i)return;const r=i.getImageData(0,0,t.width,t.height),s=VC(r);Cg(new Blob([s.buffer],{type:"image/x-tga"}),e)}function Cg(t,e){const n=URL.createObjectURL(t),i=document.createElement("a");i.href=n,i.download=e,i.click(),URL.revokeObjectURL(n)}function VC(t){const e=new Uint8Array(18),n=new DataView(e.buffer);n.setUint16(12,t.width,!0),n.setUint16(14,t.height,!0),e[2]=2,e[16]=32,e[17]=40;const i=new Uint8Array(t.width*t.height*4);for(let s=0;s<t.data.length;s+=4)i[s]=t.data[s+2],i[s+1]=t.data[s+1],i[s+2]=t.data[s],i[s+3]=t.data[s+3];const r=new Uint8Array(e.length+i.length);return r.set(e),r.set(i,e.length),r}const Ag=()=>{var R,E;const t=ce.useRef(null),e=ce.useRef(null),n=ce.useRef(null),i=ce.useRef(null),r=ce.useRef(null),s=ce.useRef(null),o=ce.useRef(null),[a,l]=ce.useState(60),{viewMode:c,setViewMode:u,isGridVisible:d,toggleGrid:p,layers:m,textureResolution:x,artworkRevision:v}=ci(),{vehicleModel:g,currentVehicleGroup:h,setVehicleModel:y,currentProject:_}=Qn(),{selectedPartId:S,setSelectedPartId:A}=Jn(),C=ce.useCallback(M=>{if(!i.current||!r.current)return;const N=i.current,I=r.current;M.updateMatrixWorld(!0);const D=new Ni().setFromObject(M);if(D.isEmpty()||!Number.isFinite(D.min.x))return;const O=new j;D.getSize(O);const k=new j;D.getCenter(k);const U=Math.max(O.x,O.y,O.z),V=N.fov*(Math.PI/180);let P=Math.abs(U/2/Math.tan(V/2))*1.5;P=Math.max(P,2.5);const $=new j(1.2,.7,1.3).normalize().multiplyScalar(P);N.position.copy(k).add($),N.near=Math.max(.01,P/100),N.far=Math.max(100,P*50),N.updateProjectionMatrix(),I.target.copy(k),I.minDistance=Math.max(.2,P*.1),I.maxDistance=Math.max(50,P*10),I.update()},[]),b=ce.useCallback(()=>{s.current?C(s.current):i.current&&r.current&&(i.current.position.set(4.2,2.3,4.8),r.current.target.set(0,.6,0),r.current.update())},[C]);return ce.useEffect(()=>{const M=t.current;if(!M)return;const N=new fC;N.background=new ke(1118481),e.current=N;const I=new Ln(45,M.clientWidth/M.clientHeight,.1,100);I.position.set(4.2,2.3,4.8),i.current=I;const D=new hC({antialias:!0,alpha:!1,powerPreference:"high-performance"});D.setSize(M.clientWidth,M.clientHeight),D.setPixelRatio(Math.min(window.devicePixelRatio,2)),D.shadowMap.enabled=!0,D.shadowMap.type=Mv,D.toneMapping=wv,D.toneMappingExposure=1.1,M.appendChild(D.domElement),n.current=D;const O=new TC(I,D.domElement);O.enableDamping=!0,O.dampingFactor=.05,O.maxPolarAngle=Math.PI/2+.05,O.minDistance=1,O.maxDistance=25,O.target.set(0,.6,0),r.current=O;const k=new yC(16777215,.65);N.add(k);const U=new Yu(16777215,1.4);U.position.set(6,8,5),U.castShadow=!0,U.shadow.mapSize.width=2048,U.shadow.mapSize.height=2048,U.shadow.camera.near=.5,U.shadow.camera.far=25,U.shadow.bias=-5e-4;const V=5;U.shadow.camera.left=-V,U.shadow.camera.right=V,U.shadow.camera.top=V,U.shadow.camera.bottom=-V,N.add(U);const P=new Yu(8961023,.7);P.position.set(-6,4,-5),N.add(P);const $=new Yu(16772829,.8);$.position.set(0,5,-8),N.add($);const q=new MC(20,40,5213439,2236962);q.position.y=0,N.add(q),o.current=q;const ne=new xa(30,30),xe=new xC({opacity:.35}),Le=new un(ne,xe);Le.rotation.x=-Math.PI/2,Le.position.y=-.002,Le.receiveShadow=!0,N.add(Le);const Y=new SC,K=new Pe,le=We=>{if(!D.domElement||!s.current)return;const Be=D.domElement.getBoundingClientRect();K.x=(We.clientX-Be.left)/Be.width*2-1,K.y=-((We.clientY-Be.top)/Be.height)*2+1,Y.setFromCamera(K,I);const qe=Y.intersectObjects(s.current.children,!0);if(qe.length>0){const Se=qe[0].object;Se.userData&&Se.userData.partId&&A(Se.userData.partId)}};D.domElement.addEventListener("click",le);const de=()=>{if(!M||!D||!I)return;const We=M.clientWidth,Be=M.clientHeight;I.aspect=We/Be,I.updateProjectionMatrix(),D.setSize(We,Be)},Te=new ResizeObserver(de);Te.observe(M);let Ce=0,Ue=performance.now(),tt;const F=We=>{tt=requestAnimationFrame(F),O.update(),D.render(N,I),Ce++,We-Ue>=1e3&&(l(Math.round(Ce*1e3/(We-Ue))),Ce=0,Ue=We)};return tt=requestAnimationFrame(F),()=>{cancelAnimationFrame(tt),Te.disconnect(),D.domElement.removeEventListener("click",le),M.contains(D.domElement)&&M.removeChild(D.domElement),D.dispose()}},[]),ce.useEffect(()=>{if(!e.current)return;const M=e.current;if(s.current&&(M.remove(s.current),s.current=null),h)M.add(h),s.current=h,C(h);else{const{model:N,object3d:I}=OC();M.add(I),s.current=I,C(I),Qn.getState().vehicleModel||y(N)}},[h,y,C]),ce.useEffect(()=>{o.current&&(o.current.visible=d)},[d]),ce.useEffect(()=>{if(!s.current)return;let M=!1;return la(m,x).then(N=>{if(M||!s.current)return;const I=new gC(N);I.colorSpace=Wn;const D=(O,k,U)=>{const V=S===O,P=_.materials.find(ne=>ne.id===k);let $=P?new ke(P.diffuseColor):new ke(8947848);V?$=new ke(5213439):$.r===0&&$.g===0&&$.b===0&&!(P!=null&&P.textureName)&&($=new ke(2236962));const q=!!(P!=null&&P.isLiveryTarget)&&!V;if(c==="wireframe")return new Bf({color:V?5213439:65416,wireframe:!0});if(c==="solid")return new Or({color:V?5213439:10066329,roughness:.6,metalness:.1,side:ln});if(c==="uv")return new Or({color:V?5213439:3359846,wireframe:!0,side:ln});{const ne=k.includes("glass")||k.includes("steklo"),xe=k.includes("chrome");return new Or({color:$,map:q?I:U&&"map"in U?U.map:null,roughness:ne?.1:.35,metalness:xe?.9:.15,transparent:ne||(P?P.opacity<1:!1),opacity:P?P.opacity:1,side:ln})}};s.current.traverse(O=>{if(O instanceof un&&O.userData){const k=O.userData.geometryIndex;if(Array.isArray(O.material))O.material=O.material.map((U,V)=>{const P=`geo-${k??0}-mat-${V}`,$=`mesh-${k??0}-${V}`;return D($,P,U)});else if(O.material){const U=O.userData.partId,V=O.userData.materialId;O.material=D(U,V,O.material)}}})}),()=>{M=!0}},[c,S,_.materials,m,x,v,h]),f.jsxs("div",{className:"relative w-full h-full bg-studio-bg select-none overflow-hidden",ref:t,children:[f.jsxs("div",{className:"absolute top-3 left-3 z-10 flex items-center space-x-1.5 bg-studio-panel/90 backdrop-blur border border-studio-border px-2.5 py-1.5 rounded-lg shadow-lg",children:[f.jsxs("button",{onClick:()=>u("textured"),className:`px-2.5 py-1 text-xs font-medium rounded flex items-center space-x-1.5 transition ${c==="textured"?"bg-studio-accent text-white shadow":"text-studio-muted hover:text-studio-text hover:bg-studio-secondary"}`,title:"Textured View",children:[f.jsx(Nc,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"Textured"})]}),f.jsxs("button",{onClick:()=>u("solid"),className:`px-2.5 py-1 text-xs font-medium rounded flex items-center space-x-1.5 transition ${c==="solid"?"bg-studio-accent text-white shadow":"text-studio-muted hover:text-studio-text hover:bg-studio-secondary"}`,title:"Solid View",children:[f.jsx(Cf,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"Solid"})]}),f.jsxs("button",{onClick:()=>u("wireframe"),className:`px-2.5 py-1 text-xs font-medium rounded flex items-center space-x-1.5 transition ${c==="wireframe"?"bg-studio-accent text-white shadow":"text-studio-muted hover:text-studio-text hover:bg-studio-secondary"}`,title:"Wireframe View",children:[f.jsx(Rf,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"Wireframe"})]}),f.jsx("button",{onClick:()=>u("uv"),className:`px-2.5 py-1 text-xs font-medium rounded flex items-center space-x-1.5 transition ${c==="uv"?"bg-studio-accent text-white shadow":"text-studio-muted hover:text-studio-text hover:bg-studio-secondary"}`,title:"UV Wire View",children:f.jsx("span",{children:"UV Mode"})}),f.jsx("div",{className:"h-4 w-px bg-studio-border mx-1"}),f.jsx("button",{onClick:p,className:`p-1.5 rounded transition ${d?"bg-studio-secondary text-studio-accent":"text-studio-muted hover:text-studio-text"}`,title:"Toggle Grid Ground",children:f.jsx(gv,{className:"w-3.5 h-3.5"})}),f.jsx("button",{onClick:b,className:"p-1.5 rounded text-studio-muted hover:text-studio-text hover:bg-studio-secondary transition",title:"Reset Camera (F)",children:f.jsx(qS,{className:"w-3.5 h-3.5"})})]}),f.jsxs("div",{className:"absolute bottom-3 right-3 z-10 pointer-events-none bg-studio-panel/85 backdrop-blur border border-studio-border/80 px-3 py-1.5 rounded-lg text-[11px] text-studio-muted font-mono flex items-center space-x-3 shadow-lg",children:[f.jsxs("span",{children:["FPS: ",f.jsx("strong",{className:"text-studio-text",children:a})]}),f.jsx("span",{children:"•"}),f.jsxs("span",{children:["Model: ",f.jsx("strong",{className:"text-studio-text",children:(g==null?void 0:g.name)||"Sample Coupe"})]}),(g==null?void 0:g.stats)&&f.jsxs(f.Fragment,{children:[f.jsx("span",{children:"•"}),f.jsxs("span",{children:["Verts: ",f.jsx("strong",{className:"text-studio-text",children:(R=g.stats.totalVertices)==null?void 0:R.toLocaleString()})]}),f.jsx("span",{children:"•"}),f.jsxs("span",{children:["Tris: ",f.jsx("strong",{className:"text-studio-text",children:(E=g.stats.totalTriangles)==null?void 0:E.toLocaleString()})]}),f.jsx("span",{children:"•"}),f.jsxs("span",{children:["Geos: ",f.jsx("strong",{className:"text-studio-text",children:g.stats.totalGeometries})]})]}),S&&f.jsxs(f.Fragment,{children:[f.jsx("span",{children:"•"}),f.jsxs("span",{className:"text-studio-accent font-semibold bg-studio-accent/10 px-1.5 py-0.5 rounded border border-studio-accent/20",children:["Part: ",S]})]})]})]})};function ll(t,e){const n=Math.max(0,Math.min(1,t.u)),i=Math.max(0,Math.min(1,1-t.v));return{x:Math.round(n*(e-1)),y:Math.round(i*(e-1))}}function jC(t){if(!t.uvs||t.uvs.length===0)return{id:`island-${t.id}`,meshId:t.id,materialId:t.materialId,name:t.name,polygons:[],bounds:{minU:0,maxU:1,minV:0,maxV:1}};const e=t.uvs,n=t.indices,i=[];let r=1,s=0,o=1,a=0;for(let l=0;l<n.length;l+=3){const c=n[l],u=n[l+1],d=n[l+2],p=e[c*2],m=e[c*2+1],x=e[u*2],v=e[u*2+1],g=e[d*2],h=e[d*2+1];r=Math.min(r,p,x,g),s=Math.max(s,p,x,g),o=Math.min(o,m,v,h),a=Math.max(a,m,v,h),i.push({indices:[c,u,d],uvs:[{u:p,v:m},{u:x,v},{u:g,v:h}]})}return{id:`island-${t.id}`,meshId:t.id,materialId:t.materialId,name:t.name,polygons:i,bounds:{minU:r,maxU:s,minV:o,maxV:a}}}function GC(t,e,n){const{resolution:i,showUVLines:r,showMeshNames:s,showGrid:o,transparentBackground:a,safeArea:l,activeIslandId:c}=n;if(t.clearRect(0,0,i,i),a||(t.fillStyle="#141414",t.fillRect(0,0,i,i)),o){const u=i/16;t.strokeStyle="#242424",t.lineWidth=1,t.beginPath();for(let d=0;d<=i;d+=u)t.moveTo(d,0),t.lineTo(d,i),t.moveTo(0,d),t.lineTo(i,d);t.stroke(),t.strokeStyle="#383838",t.lineWidth=1.5,t.beginPath(),t.moveTo(i/2,0),t.lineTo(i/2,i),t.moveTo(0,i/2),t.lineTo(i,i/2),t.stroke()}if(l){const u=i*.02;t.strokeStyle="#FFAA0055",t.lineWidth=1,t.setLineDash([6,6]),t.strokeRect(u,u,i-u*2,i-u*2),t.setLineDash([])}e.forEach(u=>{const d=c===u.id||c===u.meshId;if(r&&(t.strokeStyle=d?"#4F8CFF":"#708090",t.lineWidth=d?1.5:.75,t.fillStyle=d?"rgba(79, 140, 255, 0.2)":"rgba(100, 110, 120, 0.06)",u.polygons.forEach(p=>{const m=ll(p.uvs[0],i),x=ll(p.uvs[1],i),v=ll(p.uvs[2],i);t.beginPath(),t.moveTo(m.x,m.y),t.lineTo(x.x,x.y),t.lineTo(v.x,v.y),t.closePath(),t.fill(),t.stroke()})),s&&u.polygons.length>0){const p=(u.bounds.minU+u.bounds.maxU)/2,m=(u.bounds.minV+u.bounds.maxV)/2,x=ll({u:p,v:m},i);t.fillStyle=d?"#FFFFFF":"#AAAAAA",t.font=`bold ${Math.max(12,Math.round(i/80))}px Inter, Segoe UI, sans-serif`,t.textAlign="center",t.textBaseline="middle",t.fillText(u.name,x.x,x.y)}})}const Rg=()=>{const t=ce.useRef(null),e=ce.useRef(null),{vehicleModel:n}=Qn(),{textureResolution:i,setTextureResolution:r}=ci(),{selectedPartId:s,setSelectedPartId:o}=Jn(),[a,l]=ce.useState(1),[c,u]=ce.useState({x:0,y:0}),[d,p]=ce.useState(!1),[m,x]=ce.useState({x:0,y:0}),[v,g]=ce.useState(!0),[h,y]=ce.useState(!0),[_,S]=ce.useState(!0),[A,C]=ce.useState(!1),[b,R]=ce.useState(!0),E=ce.useMemo(()=>{if(!n||!n.geometries.length)return[];const U=[];return n.geometries.forEach(V=>{V.meshes.forEach(P=>{U.push(jC(P))})}),U},[n]),M=()=>{const U=t.current;if(!U)return;const V=U.getContext("2d");if(!V)return;GC(V,E,{resolution:i,showUVLines:v,showMeshNames:h,showGrid:_,transparentBackground:A,safeArea:b,activeIslandId:s})};ce.useEffect(()=>{M()},[E,i,v,h,_,A,b,s]);const N=()=>{const U=t.current;if(!U)return;const V=document.createElement("a");V.download=`uv_template_${(n==null?void 0:n.fileName.replace(".dff",""))||"vehicle"}_${i}x${i}.png`,V.href=U.toDataURL("image/png"),V.click()},I=U=>{(U.button===1||U.button===0&&U.altKey)&&(p(!0),x({x:U.clientX-c.x,y:U.clientY-c.y}))},D=U=>{d&&u({x:U.clientX-m.x,y:U.clientY-m.y})},O=()=>p(!1),k=U=>{U.preventDefault();const V=U.deltaY<0?1.15:.85;l(P=>Math.max(.2,Math.min(6,P*V)))};return f.jsxs("div",{className:"relative w-full h-full bg-studio-bg select-none overflow-hidden flex flex-col",ref:e,onMouseDown:I,onMouseMove:D,onMouseUp:O,onWheel:k,children:[f.jsxs("div",{className:"z-10 flex flex-wrap items-center justify-between bg-studio-panel/95 backdrop-blur border-b border-studio-border px-3 py-2",children:[f.jsxs("div",{className:"flex items-center space-x-2",children:[f.jsx("span",{className:"text-xs font-semibold text-studio-text uppercase tracking-wide",children:"UV Template"}),f.jsx("div",{className:"h-4 w-px bg-studio-border"}),f.jsxs("label",{className:"flex items-center space-x-1.5 text-xs text-studio-muted",children:[f.jsx("span",{children:"Size:"}),f.jsxs("select",{value:i,onChange:U=>r(Number(U.target.value)),className:"bg-studio-secondary text-studio-text border border-studio-border rounded px-2 py-0.5 text-xs focus:outline-none focus:border-studio-accent",children:[f.jsx("option",{value:"1024",children:"1024 x 1024"}),f.jsx("option",{value:"2048",children:"2048 x 2048"}),f.jsx("option",{value:"4096",children:"4096 x 4096"}),f.jsx("option",{value:"8192",children:"8192 x 8192"})]})]}),f.jsx("div",{className:"h-4 w-px bg-studio-border"}),f.jsxs("button",{onClick:()=>g(!v),className:`px-2 py-1 text-xs rounded flex items-center space-x-1 transition ${v?"bg-studio-secondary text-studio-accent font-medium":"text-studio-muted hover:text-studio-text"}`,children:[f.jsx(Nc,{className:"w-3 h-3"}),f.jsx("span",{children:"UV Lines"})]}),f.jsx("button",{onClick:()=>y(!h),className:`px-2 py-1 text-xs rounded transition ${h?"bg-studio-secondary text-studio-accent font-medium":"text-studio-muted hover:text-studio-text"}`,children:"Names"}),f.jsxs("button",{onClick:()=>S(!_),className:`px-2 py-1 text-xs rounded flex items-center space-x-1 transition ${_?"bg-studio-secondary text-studio-accent font-medium":"text-studio-muted hover:text-studio-text"}`,children:[f.jsx(gv,{className:"w-3 h-3"}),f.jsx("span",{children:"Grid"})]}),f.jsx("button",{onClick:()=>R(!b),className:`px-2 py-1 text-xs rounded transition ${b?"bg-studio-secondary text-studio-warning font-medium":"text-studio-muted hover:text-studio-text"}`,children:"Safe Area"}),f.jsx("button",{onClick:()=>C(!A),className:`px-2 py-1 text-xs rounded transition ${A?"bg-studio-secondary text-studio-accent font-medium":"text-studio-muted hover:text-studio-text"}`,children:"Alpha"})]}),f.jsxs("div",{className:"flex items-center space-x-2",children:[f.jsx("button",{onClick:()=>l(U=>Math.min(6,U*1.2)),className:"p-1 rounded text-studio-muted hover:text-studio-text hover:bg-studio-secondary",title:"Zoom In",children:f.jsx(iM,{className:"w-4 h-4"})}),f.jsxs("span",{className:"text-[11px] font-mono text-studio-muted",children:[Math.round(a*100),"%"]}),f.jsx("button",{onClick:()=>l(U=>Math.max(.2,U/1.2)),className:"p-1 rounded text-studio-muted hover:text-studio-text hover:bg-studio-secondary",title:"Zoom Out",children:f.jsx(rM,{className:"w-4 h-4"})}),f.jsx("button",{onClick:()=>{l(1),u({x:0,y:0})},className:"p-1 rounded text-studio-muted hover:text-studio-text hover:bg-studio-secondary",title:"Reset View",children:f.jsx(jS,{className:"w-3.5 h-3.5"})}),f.jsx("div",{className:"h-4 w-px bg-studio-border"}),f.jsxs("button",{onClick:N,className:"px-2.5 py-1 bg-studio-accent hover:bg-studio-accentHover text-white text-xs font-medium rounded flex items-center space-x-1.5 shadow transition",children:[f.jsx(kr,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"Export Template (PNG)"})]})]})]}),f.jsxs("div",{className:"flex-1 w-full h-full overflow-hidden flex items-center justify-center p-4 relative bg-[#0b0b0b]",children:[f.jsx("div",{style:{transform:`translate(${c.x}px, ${c.y}px) scale(${a})`,transformOrigin:"center center",transition:d?"none":"transform 0.05s ease-out"},className:"shadow-2xl border border-studio-border/80 relative",children:f.jsx("canvas",{ref:t,width:i,height:i,className:"w-[580px] h-[580px] max-w-none block bg-transparent"})}),f.jsxs("div",{className:"absolute bottom-3 left-3 z-10 flex items-center space-x-1 bg-studio-panel/90 backdrop-blur border border-studio-border p-1.5 rounded-lg max-w-[85%] overflow-x-auto",children:[f.jsx("span",{className:"text-[11px] text-studio-muted font-medium px-1.5",children:"UV Islands:"}),E.map(U=>f.jsx("button",{onClick:()=>o(U.meshId),className:`px-2 py-0.5 text-[11px] rounded transition whitespace-nowrap ${s===U.meshId?"bg-studio-accent text-white font-semibold":"text-studio-muted hover:text-studio-text hover:bg-studio-secondary"}`,children:U.name},U.id))]})]})]})};class Hf{constructor(e,n=0,i){An(this,"view");An(this,"_offset",0);An(this,"byteLength");this.byteLength=i??e.byteLength-n,this.view=new DataView(e,n,this.byteLength)}get offset(){return this._offset}seek(e){return this.assertBounds(e,0,"seek"),this._offset=e,this}skip(e){return this._offset+=e,this}assertBounds(e,n,i){if(e<0||e+n>this.byteLength)throw new RangeError(`[BinaryReader] ${i}: offset 0x${e.toString(16)} + ${n} bytes exceeds buffer size ${this.byteLength} (0x${this.byteLength.toString(16)})`)}readUint8At(e){return this.assertBounds(e,1,"readUint8At"),this.view.getUint8(e)}readUint16At(e){return this.assertBounds(e,2,"readUint16At"),this.view.getUint16(e,!0)}readUint32At(e){return this.assertBounds(e,4,"readUint32At"),this.view.getUint32(e,!0)}readInt32At(e){return this.assertBounds(e,4,"readInt32At"),this.view.getInt32(e,!0)}readFloat32At(e){return this.assertBounds(e,4,"readFloat32At"),this.view.getFloat32(e,!0)}readUint8(){const e=this.readUint8At(this._offset);return this._offset+=1,e}readUint16(){const e=this.readUint16At(this._offset);return this._offset+=2,e}readUint32(){const e=this.readUint32At(this._offset);return this._offset+=4,e}readInt32(){const e=this.readInt32At(this._offset);return this._offset+=4,e}readFloat32(){const e=this.readFloat32At(this._offset);return this._offset+=4,e}readFloat32Array(e){const n=e*4;this.assertBounds(this._offset,n,`readFloat32Array(${e})`);const i=new Float32Array(e);for(let r=0;r<e;r++)i[r]=this.view.getFloat32(this._offset+r*4,!0);return this._offset+=n,i}readUint16Array(e){const n=e*2;this.assertBounds(this._offset,n,`readUint16Array(${e})`);const i=new Uint16Array(e);for(let r=0;r<e;r++)i[r]=this.view.getUint16(this._offset+r*2,!0);return this._offset+=n,i}readUint32Array(e){const n=e*4;this.assertBounds(this._offset,n,`readUint32Array(${e})`);const i=new Uint32Array(e);for(let r=0;r<e;r++)i[r]=this.view.getUint32(this._offset+r*4,!0);return this._offset+=n,i}readBytes(e){this.assertBounds(this._offset,e,`readBytes(${e})`);const n=new Uint8Array(this.view.buffer,this.view.byteOffset+this._offset,e).slice();return this._offset+=e,n}readString(e){const n=this.readBytes(e),i=n.indexOf(0),r=i===-1?e:i;return new TextDecoder("ascii").decode(n.subarray(0,r)).trim()}readNullTerminatedString(e){return this.readString(e)}slice(e,n){return this.assertBounds(e,n,"slice"),new Hf(this.view.buffer,this.view.byteOffset+e,n)}remaining(){return this.byteLength-this._offset}canRead(e){return this._offset+e<=this.byteLength}}const _t={STRUCT:1,STRING:2,EXTENSION:3,CAMERA:5,TEXTURE:6,MATERIAL:7,MATERIAL_LIST:8,FRAME_LIST:14,GEOMETRY:15,CLUMP:16,LIGHT:18,UNICODE_STRING:19,ATOMIC:20,TEXTURE_NATIVE:21,TEXTURE_DICTIONARY:22,GEOMETRY_LIST:26,ANIM_ANIMATION:27,RIGHT_TO_RENDER:31,BIN_MESH_PLG:1294,SKIN_PLG:278,HANIM_PLG:286,MATERIAL_EFFECTS_PLG:288,USER_DATA_PLG:287,PIPELINE_SET_PLG:152562,FRAME_PLG:152563,EXTRA_VERT_COLOR_PLG:152564,COLLISION_PLG:152566,TWO_D_EFFECT_PLG:152567},Er={TRISTRIP:1,POSITIONS:2,TEXTURED:4,PRELIT:8,NORMALS:16,LIGHT:32,MODULATE_MATERIAL_COLOR:64,TEXTURED_2:128,NATIVE:16777216};function r_(t){if(!(t&4294901760)){const a=t>>8,l=t&255;return{version:a,build:l,versionString:`${a>>8&15}.${a>>4&15}.${a&15}.${l}`}}const e=(t>>14&261888)+196608|t>>16&63,n=t&65535,i=e>>16&15,r=e>>12&15,s=e>>8&15,o=e&15;return{version:e,build:n,versionString:`${i}.${r}.${s}.${o}`}}function Ng(t,e){if(e+12>t.byteLength)throw new Error(`Unexpected end of data reading chunk header at offset 0x${e.toString(16)}`);const n=t.getUint32(e,!0),i=t.getUint32(e+4,!0),r=t.getUint32(e+8,!0),{version:s,build:o,versionString:a}=r_(r);return{type:n,size:i,libraryId:r,version:s,build:o,versionString:a,nextOffset:e+12+i}}const HC={1:"STRUCT",2:"STRING",3:"EXTENSION",5:"CAMERA",6:"TEXTURE",7:"MATERIAL",8:"MATERIAL_LIST",14:"FRAME_LIST",15:"GEOMETRY",16:"CLUMP",18:"LIGHT",20:"ATOMIC",21:"TEXTURE_NATIVE",22:"TEXTURE_DICTIONARY",26:"GEOMETRY_LIST",27:"ANIM_ANIMATION",1294:"BIN_MESH_PLG",278:"SKIN_PLG",286:"HANIM_PLG",287:"USER_DATA_PLG",288:"MATERIAL_EFFECTS_PLG",152562:"PIPELINE_SET_PLG",152563:"FRAME_PLG",152564:"EXTRA_VERT_COLOR_PLG",152566:"COLLISION_PLG",152567:"TWO_D_EFFECT_PLG",152568:"NIGHT_VERTEX_COLORS_PLG"};function Ki(t){return HC[t]??`UNKNOWN_0x${t.toString(16).toUpperCase().padStart(4,"0")}`}const WC=new Set([3,6,7,8,14,15,16,20,21,22,26]);class s_{constructor(e){An(this,"reader");An(this,"errors",[]);this.reader=new Hf(e)}readHeader(e){if(e+12>this.reader.byteLength)return null;const n=this.reader.readUint32At(e),i=this.reader.readUint32At(e+4),r=this.reader.readUint32At(e+8),{versionString:s}=r_(r),o=e+12,a=o+i;return a>this.reader.byteLength?(this.errors.push({offset:e,message:`Chunk at 0x${e.toString(16)} (${Ki(n)}) claims dataEnd 0x${a.toString(16)} but file is only ${this.reader.byteLength} bytes`}),null):{type:n,length:i,libraryId:r,versionString:s,dataOffset:o,dataEnd:a}}readChunks(e=0,n){const i=n??this.reader.byteLength,r=[];let s=e;for(;s+12<=i;){const o=this.readHeader(s);if(!o)break;const a={type:o.type,typeName:Ki(o.type),length:o.length,libraryId:o.libraryId,versionString:o.versionString,offset:s,dataOffset:o.dataOffset,dataEnd:o.dataEnd,children:[],plugins:[]};WC.has(o.type)&&o.length>0&&(a.children=this.readChunks(o.dataOffset,o.dataEnd)),r.push(a),s=o.dataEnd}return r}readAll(){return this.readChunks(0)}findChild(e,n){return e.children.find(i=>i.type===n)}findChildren(e,n){return e.children.filter(i=>i.type===n)}readData(e){return this.reader.slice(e.dataOffset,e.length)}}class XC{constructor(){An(this,"errors",[]);An(this,"warnings",[])}parse(e,n){var m;this.errors=[],this.warnings=[];const i=new s_(e),r=i.readAll();if(r.length===0)return this.errors.push("No chunks found — file may be empty or corrupt"),this.emptyResult(n,e.byteLength);const s=r[0];s.type!==_t.CLUMP&&this.errors.push(`Expected CLUMP (0x10) as root chunk, found ${Ki(s.type)} (0x${s.type.toString(16)})`);for(const x of i.errors)this.errors.push(x.message);const o=this.parseFrameList(s,i),a=this.parseGeometryList(s,i),l=this.parseAtomics(s,i),c=this.collectUnknownPlugins(s),u=((m=r[0])==null?void 0:m.versionString)??"unknown",d=a.flatMap(x=>x.materials),p=[...new Set(d.filter(x=>x.hasTexture).map(x=>x.textureName))];return{fileName:n,fileSize:e.byteLength,rwVersionString:u,rootChunkType:s.type,rootChunkName:Ki(s.type),frames:o,geometries:a,atomics:l,unknownPlugins:c,errors:this.errors,warnings:this.warnings,stats:{frameCount:o.length,geometryCount:a.length,atomicCount:l.length,materialCount:d.length,totalTriangles:a.reduce((x,v)=>x+v.numTriangles,0),totalVertices:a.reduce((x,v)=>x+v.numVertices,0),uvSetCount:a.reduce((x,v)=>x+v.numUVSets,0),textureReferenceCount:p.length,textureNames:p,unknownPluginCount:c.length}}}parseFrameList(e,n){const i=n.findChild(e,_t.FRAME_LIST);if(!i)return this.warnings.push("No FRAME_LIST found in CLUMP"),[];const r=n.findChild(i,_t.STRUCT);if(!r)return this.errors.push("FRAME_LIST has no STRUCT child"),[];const s=n.readData(r),o=s.readUint32(),a=[];for(let c=0;c<o;c++){if(!s.canRead(56)){this.errors.push(`Frame ${c}: not enough data`);break}const u={x:s.readFloat32(),y:s.readFloat32(),z:s.readFloat32()},d={x:s.readFloat32(),y:s.readFloat32(),z:s.readFloat32()},p={x:s.readFloat32(),y:s.readFloat32(),z:s.readFloat32()},m={x:s.readFloat32(),y:s.readFloat32(),z:s.readFloat32()},x=s.readInt32(),v=s.readUint32();a.push({index:c,rotationMatrix:{right:u,up:d,at:p},position:m,parentIndex:x,matrixFlags:v,children:[]})}for(const c of a)c.parentIndex>=0&&c.parentIndex<a.length&&a[c.parentIndex].children.push(c.index);const l=n.findChild(i,_t.EXTENSION);if(l){let c=0;for(const u of l.children)if(u.type===_t.FRAME_PLG&&c<a.length){const d=n.readData(u);u.length>0&&(a[c].name=d.readString(u.length).replace(/\0/g,"").trim()),c++}}return a}parseGeometryList(e,n){const i=n.findChild(e,_t.GEOMETRY_LIST);return i?n.findChildren(i,_t.GEOMETRY).map((s,o)=>this.parseGeometry(s,o,n)):(this.warnings.push("No GEOMETRY_LIST found in CLUMP"),[])}parseGeometry(e,n,i){const r=i.findChild(e,_t.STRUCT),s={index:n,offset:e.offset,flags:0,flagsDecoded:{tristrip:!1,positions:!1,textured:!1,prelit:!1,normals:!1,textured2:!1,native:!1},numTriangles:0,numVertices:0,numMorphTargets:0,numUVSets:0,uvSets:[],triangles:[],morphTargets:[],materials:[],extensions:[]};if(!r)return this.errors.push(`Geometry[${n}]: no STRUCT child`),s;try{const o=i.readData(r),a=o.readUint32(),l=o.readUint32(),c=o.readUint32(),u=o.readUint32();s.flags=a,s.numTriangles=l,s.numVertices=c,s.numMorphTargets=u,s.flagsDecoded={tristrip:(a&Er.TRISTRIP)!==0,positions:(a&Er.POSITIONS)!==0,textured:(a&Er.TEXTURED)!==0,prelit:(a&Er.PRELIT)!==0,normals:(a&Er.NORMALS)!==0,textured2:(a&Er.TEXTURED_2)!==0,native:(a&Er.NATIVE)!==0};let d=0;s.flagsDecoded.textured&&(d=1),s.flagsDecoded.textured2&&(d=2);const p=a>>16&255;if(p>0&&(d=p),s.numUVSets=d,!s.flagsDecoded.native){if(s.flagsDecoded.prelit){const g=c*4;s.vertexColors=o.readBytes(g)}for(let g=0;g<d;g++){const h=o.readFloat32Array(c*2);s.uvSets.push({index:g,coordinates:h,count:c})}const v=[];for(let g=0;g<l;g++){const h=o.readUint16(),y=o.readUint16(),_=o.readUint16(),S=o.readUint16();v.push({v1:y,v2:h,v3:S,materialId:_})}s.triangles=v;for(let g=0;g<u;g++){const h=o.readFloat32(),y=o.readFloat32(),_=o.readFloat32(),S=o.readFloat32(),A=o.readUint32()!==0,C=o.readUint32()!==0,b={bsphere:{x:h,y,z:_,radius:S},hasVertices:A,hasNormals:C};A&&(b.vertices=o.readFloat32Array(c*3)),C&&(b.normals=o.readFloat32Array(c*3)),s.morphTargets.push(b)}}const m=i.findChild(e,_t.MATERIAL_LIST);m&&(s.materials=this.parseMaterialList(m,n,i));const x=i.findChild(e,_t.EXTENSION);x&&(s.extensions=this.parsePlugins(x,i))}catch(o){this.errors.push(`Geometry[${n}]: parse error — ${o.message}`)}return s}parseMaterialList(e,n,i){return i.findChildren(e,_t.MATERIAL).map((s,o)=>this.parseMaterial(s,o,n,i))}parseMaterial(e,n,i,r){const s={index:n,colorR:255,colorG:255,colorB:255,colorA:255,unused:0,isTextured:0,ambient:1,specular:0,diffuse:1,textureName:"",maskName:"",hasTexture:!1,extensions:[]},o=r.findChild(e,_t.STRUCT);if(o)try{const l=r.readData(o);s.unused=l.readUint32(),s.colorR=l.readUint8(),s.colorG=l.readUint8(),s.colorB=l.readUint8(),s.colorA=l.readUint8(),s.isTextured=l.readUint32(),s.ambient=l.readFloat32(),s.specular=l.readFloat32(),s.diffuse=l.readFloat32()}catch(l){this.errors.push(`Geo[${i}] Mat[${n}] STRUCT: ${l.message}`)}const a=r.findChild(e,_t.TEXTURE);if(a){s.hasTexture=!0,r.findChild(a,_t.STRUCT);const l=r.findChildren(a,_t.STRING);if(l.length>=1){const c=r.readData(l[0]);s.textureName=c.readString(l[0].length)}if(l.length>=2){const c=r.readData(l[1]);s.maskName=c.readString(l[1].length)}}return s}parseAtomics(e,n){return n.findChildren(e,_t.ATOMIC).map((i,r)=>{const s={frameIndex:0,geometryIndex:0,flags:0,unused:0,extensions:[]},o=n.findChild(i,_t.STRUCT);if(o)try{const l=n.readData(o);s.frameIndex=l.readUint32(),s.geometryIndex=l.readUint32(),s.flags=l.readUint32(),s.unused=l.readUint32()}catch(l){this.errors.push(`Atomic[${r}]: ${l.message}`)}const a=n.findChild(i,_t.EXTENSION);return a&&(s.extensions=this.parsePlugins(a,n)),s})}parsePlugins(e,n){return e.children.map(i=>({id:i.type,typeName:Ki(i.type),offset:i.offset,length:i.length,rawData:n.readData(i).readBytes(i.length)}))}collectUnknownPlugins(e){const n=new Set(Object.keys(_t).map(s=>_t[s])),i=[],r=s=>{!n.has(s.type)&&s.type!==1&&s.type!==2&&i.push({id:s.type,typeName:Ki(s.type),offset:s.offset,length:s.length,rawData:new Uint8Array(0)}),s.children.forEach(r)};return r(e),i}emptyResult(e,n){return{fileName:e,fileSize:n,rwVersionString:"unknown",rootChunkType:0,rootChunkName:"NONE",frames:[],geometries:[],atomics:[],unknownPlugins:[],errors:this.errors,warnings:this.warnings,stats:{frameCount:0,geometryCount:0,atomicCount:0,materialCount:0,totalTriangles:0,totalVertices:0,uvSetCount:0,textureReferenceCount:0,textureNames:[],unknownPluginCount:0}}}}const $C=new XC,YC={512:"A1R5G5B5",768:"R5G6B5",1024:"R4G4B4A4",1280:"LUM8",1536:"B8G8R8A8",1792:"B8G8R8",2048:"R5G5B5",2560:"PAL8",2816:"PAL4",3072:"PAL8 (no alpha)",3840:"UNKNOWN",256:"DEFAULT"},qC={0:"NONE",827611204:"DXT1",861165636:"DXT3",894720068:"DXT5"},KC={8:"D3D8",9:"D3D9",4:"PS2",5:"XBOX",6:"GameCube"};class ZC{constructor(){An(this,"errors",[]);An(this,"warnings",[])}parse(e,n){this.errors=[],this.warnings=[];const i=new s_(e),r=i.readAll(),s={fileName:n,fileSize:e.byteLength,rwVersionString:"unknown",rootChunkType:0,rootChunkName:"NONE",textureCount:0,textures:[],errors:this.errors,warnings:this.warnings,stats:{dxt1Count:0,dxt3Count:0,dxt5Count:0,uncompressedCount:0,totalDataSize:0}};if(r.length===0)return this.errors.push("No chunks found"),s;const o=r[0];o.type!==22&&this.errors.push(`Expected TEXTURE_DICTIONARY (0x16), found ${Ki(o.type)} (0x${o.type.toString(16)})`);const a={...s,rwVersionString:o.versionString,rootChunkType:o.type,rootChunkName:Ki(o.type)},l=i.findChild(o,1);if(l){const d=i.readData(l);a.textureCount=d.readUint16()}const c=i.findChildren(o,21),u=[];for(const d of c){const p=this.parseTextureNative(d,i);p&&u.push(p)}return a.textures=u,a.textureCount=u.length,a.stats={dxt1Count:u.filter(d=>d.compressionName==="DXT1").length,dxt3Count:u.filter(d=>d.compressionName==="DXT3").length,dxt5Count:u.filter(d=>d.compressionName==="DXT5").length,uncompressedCount:u.filter(d=>d.compressionName==="NONE").length,totalDataSize:u.reduce((d,p)=>d+p.rawDataSize,0)},a}parseTextureNative(e,n){const i=n.findChild(e,1);if(!i)return this.errors.push(`TEXTURE_NATIVE at 0x${e.offset.toString(16)} has no STRUCT`),null;try{const r=n.readData(i),s=r.readUint32(),o=r.readUint16(),a=r.readUint8(),l=r.readUint8(),c=r.readString(32),u=r.readString(32),d=r.readUint32(),p=r.readUint32(),m=r.readUint16(),x=r.readUint16(),v=r.readUint8(),g=r.readUint8();r.skip(1);const h=r.readUint8(),y=i.length-r.offset,_=y>0?r.readBytes(y):new Uint8Array(0),S=qC[p]??`UNKNOWN_0x${p.toString(16)}`,A=YC[d&65280]??`0x${d.toString(16)}`;return{name:c,maskName:u,width:m,height:x,depth:v,mipmapCount:g,rasterFormat:d,rasterFormatName:A,compression:p,compressionName:S,platform:s,platformName:KC[s]??`PLATFORM_${s}`,filterFlags:o,uAddressing:a,vAddressing:l,hasAlpha:h!==0||(d&1)!==0,rawDataSize:y,rawData:_}}catch(r){return this.errors.push(`TEXTURE_NATIVE parse error: ${r.message}`),null}}}const QC=new ZC;function Pg(t,e){const n=new Set(t.stats.textureNames.map(s=>s.toLowerCase().trim())),i=new Set(e.textures.map(s=>s.name.toLowerCase().trim())),r=[];for(const s of t.stats.textureNames){const o=s.toLowerCase().trim();i.has(o)?r.push({name:s,status:"MATCHED",source:"both"}):r.push({name:s,status:"MISSING_IN_TXD",source:"dff"})}for(const s of e.textures){const o=s.name.toLowerCase().trim();n.has(o)||r.push({name:s.name,status:"UNUSED_IN_DFF",source:"txd"})}return{dffFileName:t.fileName,txdFileName:e.fileName,entries:r,matched:r.filter(s=>s.status==="MATCHED").length,missingInTxd:r.filter(s=>s.status==="MISSING_IN_TXD").length,unusedInDff:r.filter(s=>s.status==="UNUSED_IN_DFF").length}}function JC(t){return t.map(e=>{const n=new Float32Array(e.coordinates.length);for(let i=0;i<e.count;i++)n[i*2]=e.coordinates[i*2],n[i*2+1]=1-e.coordinates[i*2+1];return{index:e.index,coordinates:n,count:e.count}})}class eA{convert(e){var m,x;const n={success:!1,message:"",isNative:e.flagsDecoded.native,verticesDecoded:0,trianglesDecoded:0,normalsStatus:"NONE",uvSetsDecoded:0,materialsCount:e.materials.length};if(e.flagsDecoded.native)return n.message=`Native geometry is currently unsupported (Requires explicit native decoder for platform/format). Extension plugins: ${e.extensions.map(v=>v.typeName).join(", ")}`,{geometry:new Bt,materials:[],report:n};const i=e.morphTargets[0];if(!i||!i.hasVertices||!i.vertices||i.vertices.length===0)return n.message=`Geometry ${e.index}: No vertices found in MorphTarget 0.`,{geometry:new Bt,materials:[],report:n};if(e.numVertices<=0)return n.message=`Geometry ${e.index}: Zero vertices declared.`,{geometry:new Bt,materials:[],report:n};const r=i.vertices;for(let v=0;v<r.length;v++)if(!Number.isFinite(r[v]))return n.message=`Geometry ${e.index}: Non-finite vertex coordinate at offset ${v}.`,{geometry:new Bt,materials:[],report:n};const s=new Bt;if(s.setAttribute("position",new Jt(r,3)),n.verticesDecoded=e.numVertices,e.flagsDecoded.normals&&i.hasNormals&&i.normals&&i.normals.length>=e.numVertices*3){let v=!0;for(let g=0;g<i.normals.length;g++)if(!Number.isFinite(i.normals[g])){v=!1;break}v&&(s.setAttribute("normal",new Jt(i.normals,3)),n.normalsStatus="ORIGINAL")}if(e.numUVSets>0&&e.uvSets.length>0){const v=JC(e.uvSets);(m=v[0])!=null&&m.coordinates&&v[0].coordinates.length>=e.numVertices*2&&(s.setAttribute("uv",new Jt(v[0].coordinates,2)),n.uvSetsDecoded=1),e.numUVSets>1&&((x=v[1])!=null&&x.coordinates)&&v[1].coordinates.length>=e.numVertices*2&&(s.setAttribute("uv2",new Jt(v[1].coordinates,2)),n.uvSetsDecoded=2)}if(!e.triangles||e.triangles.length===0)return n.message=`Geometry ${e.index}: No triangles present in geometry.`,{geometry:new Bt,materials:[],report:n};const o={};for(const v of e.triangles){if(v.v1>=e.numVertices||v.v2>=e.numVertices||v.v3>=e.numVertices)throw new Error(`Geometry ${e.index} triangle index out of bounds: [${v.v1}, ${v.v2}, ${v.v3}] (vertexCount: ${e.numVertices})`);o[v.materialId]||(o[v.materialId]=[]),o[v.materialId].push(v.v1,v.v2,v.v3)}const a=[];let l=0;const c=Object.keys(o).map(Number).sort((v,g)=>v-g);for(const v of c){const g=o[v];a.push(...g),s.addGroup(l,g.length,v),l+=g.length}const u=e.numVertices>65535?new Uint32Array(a):new Uint16Array(a);if(s.setIndex(new Jt(u,1)),n.trianglesDecoded=a.length/3,n.normalsStatus==="NONE"&&(s.computeVertexNormals(),n.normalsStatus="GENERATED"),s.computeBoundingBox(),s.computeBoundingSphere(),!s.boundingBox||!Number.isFinite(s.boundingBox.min.x))return n.message=`Geometry ${e.index}: Computed bounding box is invalid.`,{geometry:new Bt,materials:[],report:n};const d=[],p=c.length>0?c[c.length-1]:-1;for(let v=0;v<=p;v++){const g=e.materials.find(h=>h.index===v);if(g){let h=g.colorR/255,y=g.colorG/255,_=g.colorB/255;h===0&&y===0&&_===0&&!g.hasTexture&&(h=.15,y=.15,_=.15),d.push(new Or({color:new ke(h,y,_),name:g.textureName||`Material_${v}`,roughness:.7,metalness:.15,side:ln}))}else d.push(new Or({color:new ke(.6,.6,.6),name:`Default_${v}`,roughness:.7,metalness:.15,side:ln}))}return n.success=!0,n.message="Conversion successful",{geometry:s,materials:d,report:n}}}const tA=new eA;class nA{renderWareMatrixToThreeMatrix(e){const n=new ut,{right:i,up:r,at:s}=e.rotationMatrix,{position:o}=e;return n.set(i.x,r.x,s.x,o.x,i.y,r.y,s.y,o.y,i.z,r.z,s.z,o.z,0,0,0,1),n}build(e){const n={success:!1,message:"",geometriesConverted:0,geometriesFailed:0,atomicsMapped:0,geometryReports:[]},i=new Ir;if(i.name=e.fileName,!e.frames||e.frames.length===0)return n.message="No frames found in DFF",{group:i,report:n};const r=[];for(const a of e.frames){const l=new Ir;l.name=a.name||`Frame_${a.index}`,this.renderWareMatrixToThreeMatrix(a).decompose(l.position,l.quaternion,l.scale),r.push(l)}for(const a of e.frames)a.parentIndex>=0&&a.parentIndex<r.length?r[a.parentIndex].add(r[a.index]):i.add(r[a.index]);const s=[];for(const a of e.geometries)try{const{geometry:l,materials:c,report:u}=tA.convert(a);if(n.geometryReports.push(u),u.success){n.geometriesConverted++;const d=new un(l,c.length===1?c[0]:c);d.name=`Geometry_${a.index}`,d.castShadow=!0,d.receiveShadow=!0,s.push(d)}else n.geometriesFailed++,s.push(null)}catch(l){n.geometriesFailed++,n.geometryReports.push({success:!1,message:`Geometry ${a.index} exception: ${l.message}`,isNative:a.flagsDecoded.native,verticesDecoded:0,trianglesDecoded:0,normalsStatus:"NONE",uvSetsDecoded:0,materialsCount:0}),s.push(null)}for(let a=0;a<e.atomics.length;a++){const l=e.atomics[a];if(l.frameIndex<r.length&&l.geometryIndex<s.length){const c=s[l.geometryIndex];if(c){const u=c.clone();u.name=`Atomic_${l.frameIndex}_Geo_${l.geometryIndex}`,u.castShadow=!0,u.receiveShadow=!0;const p=e.geometries[l.geometryIndex].materials[0];u.userData={partId:`mesh-${l.geometryIndex}-${(p==null?void 0:p.index)??0}`,materialId:`geo-${l.geometryIndex}-mat-${(p==null?void 0:p.index)??0}`,geometryIndex:l.geometryIndex,frameIndex:l.frameIndex,atomicIndex:a,name:u.name},r[l.frameIndex].add(u),n.atomicsMapped++}}}i.rotation.x=-Math.PI/2,i.updateMatrixWorld(!0);const o=new Ni().setFromObject(i);if(!o.isEmpty()){const a=new j;o.getCenter(a);const l=new j;o.getSize(l),i.position.x=-a.x,i.position.y=-o.min.y,i.position.z=-a.z,i.updateMatrixWorld(!0);const c=new Ni().setFromObject(i),u=new j;c.getCenter(u);const d=new j;c.getSize(d),n.boundingBox={min:{x:c.min.x,y:c.min.y,z:c.min.z},max:{x:c.max.x,y:c.max.y,z:c.max.z},center:{x:u.x,y:u.y,z:u.z},size:{x:d.x,y:d.y,z:d.z}},i.userData.boundingBox=n.boundingBox}return n.atomicsMapped>0&&n.geometriesConverted>0?(n.success=!0,n.message=`Successfully built 3D scene with ${n.geometriesConverted} geometries and ${n.atomicsMapped} mapped meshes.`):n.geometriesConverted===0?(n.success=!1,n.message="No geometries could be converted into 3D meshes."):(n.success=!1,n.message="Geometries were converted, but no atomics could be mapped to frames."),{group:i,report:n}}}const iA=new nA;function o_(t,e){return`geo-${t}-mat-${e}`}function rA(t){return t.materials.map(e=>({id:o_(t.index,e.index),name:e.textureName||`Material ${e.index}`,textureName:e.textureName||void 0,diffuseColor:`#${[e.colorR,e.colorG,e.colorB].map(n=>n.toString(16).padStart(2,"0")).join("")}`,ambientColor:"#202020",specularColor:"#ffffff",opacity:e.colorA/255,isLiveryTarget:/carbody|vehicle|livery|paint/i.test(e.textureName)}))}function sA(t){var r,s;const e=((r=t.morphTargets[0])==null?void 0:r.vertices)??new Float32Array,n=(s=t.morphTargets[0])==null?void 0:s.normals,i=t.materials.map(o=>{var u;const a=t.triangles.filter(d=>d.materialId===o.index),l=a.flatMap(d=>[d.v1,d.v2,d.v3]),c=t.numVertices>65535?new Uint32Array(l):new Uint16Array(l);return{id:`mesh-${t.index}-${o.index}`,name:o.textureName||`Geometry ${t.index} / Material ${o.index}`,materialId:o_(t.index,o.index),materialIndex:o.index,vertexCount:t.numVertices,triangleCount:a.length,vertices:e,normals:n,uvs:(u=t.uvSets[0])==null?void 0:u.coordinates,indices:c}});return{id:`geometry-${t.index}`,name:`Geometry ${t.index}`,flags:t.flags,meshes:i,materials:rA(t),hasNormals:!!n,hasUVs:t.uvSets.length>0,hasPreLitColors:!!t.vertexColors,numUVLayers:t.numUVSets,stats:{vertices:t.numVertices,triangles:t.numTriangles}}}function oA(t){const e=t.geometries.map(sA),n=e.flatMap(a=>a.materials),i=t.geometries.flatMap(a=>{var l;return Array.from(((l=a.morphTargets[0])==null?void 0:l.vertices)??[])}),r={x:1/0,y:1/0,z:1/0},s={x:-1/0,y:-1/0,z:-1/0};for(let a=0;a<i.length;a+=3)r.x=Math.min(r.x,i[a]),r.y=Math.min(r.y,i[a+1]),r.z=Math.min(r.z,i[a+2]),s.x=Math.max(s.x,i[a]),s.y=Math.max(s.y,i[a+1]),s.z=Math.max(s.z,i[a+2]);Number.isFinite(r.x)||Object.assign(r,{x:0,y:0,z:0}),Number.isFinite(s.x)||Object.assign(s,{x:0,y:0,z:0});const o={x:(r.x+s.x)/2,y:(r.y+s.y)/2,z:(r.z+s.z)/2};return{name:t.fileName.replace(/\.dff$/i,""),fileName:t.fileName,rwVersion:t.rootChunkType,rwVersionString:t.rwVersionString,frames:t.frames.map(a=>({id:a.index,name:a.name??`Frame ${a.index}`,parentIndex:a.parentIndex,rotationMatrix:[a.rotationMatrix.right.x,a.rotationMatrix.right.y,a.rotationMatrix.right.z,a.rotationMatrix.up.x,a.rotationMatrix.up.y,a.rotationMatrix.up.z,a.rotationMatrix.at.x,a.rotationMatrix.at.y,a.rotationMatrix.at.z],position:a.position})),geometries:e,materials:n,stats:{totalFrames:t.stats.frameCount,totalGeometries:t.stats.geometryCount,totalMeshes:e.reduce((a,l)=>a+l.meshes.length,0),totalVertices:t.stats.totalVertices,totalTriangles:t.stats.totalTriangles,totalMaterials:n.length,hasUV:t.stats.uvSetCount>0},boundingBox:{min:r,max:s,center:o,size:{x:s.x-r.x,y:s.y-r.y,z:s.z-r.z}}}}const Wf=Rc(t=>({logs:[{id:"init-1",timestamp:new Date().toLocaleTimeString(),level:"info",category:"SYSTEM",message:"GTA SA Livery Studio engine initialized (Phase 1 Foundation)"},{id:"init-2",timestamp:new Date().toLocaleTimeString(),level:"info",category:"RENDER",message:"Three.js WebGL renderer subsystem ready"},{id:"init-3",timestamp:new Date().toLocaleTimeString(),level:"info",category:"DFF",message:"RenderWare 3.6 chunk validator and IRenderWareParser abstraction registered"}],addLog:(e,n,i,r)=>{t(s=>({logs:[...s.logs.slice(-200),{id:`log_${Date.now()}_${Math.random().toString(36).substring(2,6)}`,timestamp:new Date().toLocaleTimeString(),level:e,category:n,message:i,details:r}]}))},clearLogs:()=>t({logs:[]})})),zi=({title:t,count:e,expanded:n,toggle:i,icon:r})=>f.jsxs("button",{onClick:i,className:"w-full flex items-center justify-between px-3 py-2 bg-studio-secondary hover:bg-studio-border transition text-left",children:[f.jsxs("div",{className:"flex items-center space-x-2",children:[r,f.jsx("span",{className:"font-semibold text-xs uppercase tracking-widest text-studio-muted",children:t}),e!==void 0&&f.jsx("span",{className:"px-1.5 py-0.5 rounded bg-studio-accent/20 text-studio-accent text-[10px] font-mono",children:e})]}),n?f.jsx(lv,{className:"w-3.5 h-3.5 text-studio-muted"}):f.jsx(cv,{className:"w-3.5 h-3.5 text-studio-muted"})]}),vt=({label:t,value:e,mono:n})=>f.jsxs("div",{className:"flex items-start justify-between py-0.5 border-b border-studio-border/30 last:border-0",children:[f.jsx("span",{className:"text-studio-muted text-[10px] flex-shrink-0 w-36",children:t}),f.jsx("span",{className:`text-studio-text text-[10px] text-right flex-1 ${n?"font-mono":""}`,children:e})]}),Lg=({text:t,color:e})=>f.jsx("span",{className:`px-1.5 py-0.5 rounded text-[9px] font-bold uppercase ${e}`,children:t}),aA={header:!0,frames:!1,geometries:!1,atomics:!1,materials:!1,textures:!1,matching:!0,plugins:!0,errors:!0},lA=({dffAnalysis:t,txdAnalysis:e,matchResult:n})=>{const[i,r]=ce.useState(aA),s=a=>r(l=>({...l,[a]:!l[a]}));if(!t&&!e)return f.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-studio-muted space-y-3 p-8 text-center",children:[f.jsx(fv,{className:"w-12 h-12 opacity-20"}),f.jsx("p",{className:"text-sm",children:"No analysis results yet."}),f.jsx("p",{className:"text-xs opacity-60",children:"Import a .DFF file using the toolbar above to generate the diagnostic report."})]});const o=()=>{const a={dff:t?{file:t.fileName,fileSize:t.fileSize,renderWare:{root:t.rootChunkName,version:t.rwVersionString},stats:t.stats,frames:t.frames.map(d=>({index:d.index,name:d.name,parentIndex:d.parentIndex,position:d.position})),geometries:t.geometries.map(d=>({index:d.index,flags:d.flags,numTriangles:d.numTriangles,numVertices:d.numVertices,numUVSets:d.numUVSets,materials:d.materials.map(p=>({index:p.index,textureName:p.textureName,maskName:p.maskName}))})),atomics:t.atomics.map(d=>({frameIndex:d.frameIndex,geometryIndex:d.geometryIndex,flags:d.flags})),unknownPlugins:t.unknownPlugins.map(d=>({id:d.id,typeName:d.typeName,offset:d.offset,length:d.length}))}:null,txd:e?{file:e.fileName,textureCount:e.textureCount,stats:e.stats,textures:e.textures.map(d=>({name:d.name,maskName:d.maskName,width:d.width,height:d.height,depth:d.depth,compression:d.compressionName,mipmapCount:d.mipmapCount}))}:null,matching:(n==null?void 0:n.entries)??[]},l=new Blob([JSON.stringify(a,null,2)],{type:"application/json"}),c=URL.createObjectURL(l),u=document.createElement("a");u.href=c,u.download=`${(t==null?void 0:t.fileName.replace(".dff",""))??"vehicle"}_analysis.json`,u.click(),URL.revokeObjectURL(c)};return f.jsxs("div",{className:"h-full overflow-y-auto bg-studio-bg text-xs",children:[f.jsxs("div",{className:"sticky top-0 z-10 bg-studio-panel border-b border-studio-border px-3 py-2 flex items-center justify-between",children:[f.jsx("span",{className:"font-bold text-studio-text text-sm",children:(t==null?void 0:t.fileName)??(e==null?void 0:e.fileName)??"Analysis"}),f.jsxs("button",{onClick:o,className:"flex items-center space-x-1.5 px-3 py-1.5 bg-studio-accent hover:bg-studio-accentHover text-white rounded text-xs font-semibold transition",children:[f.jsx(kr,{className:"w-3 h-3"}),f.jsx("span",{children:"Export JSON"})]})]}),f.jsxs("div",{className:"divide-y divide-studio-border",children:[t&&f.jsxs("div",{children:[f.jsx(zi,{title:"DFF Summary",expanded:i.header,toggle:()=>s("header"),icon:f.jsx(Cf,{className:"w-3.5 h-3.5 text-studio-accent"})}),i.header&&f.jsxs("div",{className:"px-3 py-2 space-y-0.5",children:[f.jsx(vt,{label:"File",value:t.fileName}),f.jsx(vt,{label:"File Size",value:`${(t.fileSize/1024).toFixed(1)} KB`,mono:!0}),f.jsx(vt,{label:"RenderWare Version",value:t.rwVersionString,mono:!0}),f.jsx(vt,{label:"Root Chunk",value:f.jsx("span",{className:"text-studio-accent font-mono",children:t.rootChunkName})}),f.jsx(vt,{label:"Frames",value:t.stats.frameCount,mono:!0}),f.jsx(vt,{label:"Geometries",value:t.stats.geometryCount,mono:!0}),f.jsx(vt,{label:"Atomics",value:t.stats.atomicCount,mono:!0}),f.jsx(vt,{label:"Materials (total)",value:t.stats.materialCount,mono:!0}),f.jsx(vt,{label:"Triangles (total)",value:t.stats.totalTriangles.toLocaleString(),mono:!0}),f.jsx(vt,{label:"Vertices (total)",value:t.stats.totalVertices.toLocaleString(),mono:!0}),f.jsx(vt,{label:"Texture References",value:t.stats.textureReferenceCount,mono:!0}),f.jsx(vt,{label:"Unknown Plugins",value:t.stats.unknownPluginCount,mono:!0})]})]}),e&&f.jsxs("div",{children:[f.jsx(zi,{title:"TXD Summary",expanded:i.textures??!0,toggle:()=>s("textures"),icon:f.jsx(RS,{className:"w-3.5 h-3.5 text-purple-400"})}),(i.textures??!0)&&f.jsxs("div",{className:"px-3 py-2 space-y-0.5",children:[f.jsx(vt,{label:"File",value:e.fileName}),f.jsx(vt,{label:"File Size",value:`${(e.fileSize/1024).toFixed(1)} KB`,mono:!0}),f.jsx(vt,{label:"RW Version",value:e.rwVersionString,mono:!0}),f.jsx(vt,{label:"Textures",value:e.textureCount,mono:!0}),f.jsx(vt,{label:"DXT1",value:e.stats.dxt1Count,mono:!0}),f.jsx(vt,{label:"DXT3",value:e.stats.dxt3Count,mono:!0}),f.jsx(vt,{label:"DXT5",value:e.stats.dxt5Count,mono:!0}),f.jsx(vt,{label:"Uncompressed",value:e.stats.uncompressedCount,mono:!0}),f.jsx(vt,{label:"Total Data Size",value:`${(e.stats.totalDataSize/1024).toFixed(1)} KB`,mono:!0})]}),f.jsx("div",{className:"px-3 pb-2 space-y-1",children:e.textures.map((a,l)=>f.jsxs("div",{className:"flex items-center justify-between py-1 border-b border-studio-border/20 last:border-0",children:[f.jsxs("div",{children:[f.jsx("span",{className:"text-studio-text font-mono text-[10px]",children:a.name}),a.maskName&&f.jsxs("span",{className:"text-studio-muted text-[9px] ml-1.5",children:["/ ",a.maskName]})]}),f.jsxs("div",{className:"flex items-center space-x-1.5 flex-shrink-0",children:[f.jsxs("span",{className:"text-studio-muted font-mono text-[9px]",children:[a.width,"×",a.height]}),f.jsx(Lg,{text:a.compressionName,color:a.compressionName==="DXT1"?"bg-blue-500/20 text-blue-400":a.compressionName==="DXT3"?"bg-purple-500/20 text-purple-400":a.compressionName==="DXT5"?"bg-emerald-500/20 text-emerald-400":"bg-studio-border text-studio-muted"})]})]},l))})]}),t&&t.geometries.length>0&&f.jsxs("div",{children:[f.jsx(zi,{title:"Geometries",count:t.stats.geometryCount,expanded:i.geometries,toggle:()=>s("geometries"),icon:f.jsx(Rf,{className:"w-3.5 h-3.5 text-emerald-400"})}),i.geometries&&f.jsx("div",{className:"px-3 py-2 space-y-2",children:t.geometries.map((a,l)=>f.jsxs("div",{className:"bg-studio-secondary rounded p-2 text-[10px] border border-studio-border/40",children:[f.jsxs("div",{className:"font-semibold text-studio-accent mb-1",children:["Geometry [",a.index,"]"]}),f.jsxs("div",{className:"grid grid-cols-2 gap-x-3 gap-y-0.5 font-mono",children:[f.jsx("span",{className:"text-studio-muted",children:"Vertices:"}),f.jsx("span",{children:a.numVertices.toLocaleString()}),f.jsx("span",{className:"text-studio-muted",children:"Triangles:"}),f.jsx("span",{children:a.numTriangles.toLocaleString()}),f.jsx("span",{className:"text-studio-muted",children:"UV Sets:"}),f.jsx("span",{children:a.numUVSets}),f.jsx("span",{className:"text-studio-muted",children:"Materials:"}),f.jsx("span",{children:a.materials.length}),f.jsx("span",{className:"text-studio-muted",children:"Normals:"}),f.jsx("span",{children:a.flagsDecoded.normals?"✓":"—"}),f.jsx("span",{className:"text-studio-muted",children:"PreLit:"}),f.jsx("span",{children:a.flagsDecoded.prelit?"✓":"—"}),f.jsx("span",{className:"text-studio-muted",children:"Native:"}),f.jsx("span",{children:a.flagsDecoded.native?"⚠ Yes":"No"}),f.jsx("span",{className:"text-studio-muted",children:"Flags:"}),f.jsxs("span",{children:["0x",a.flags.toString(16).padStart(8,"0")]})]}),a.materials.length>0&&f.jsx("div",{className:"mt-1.5 space-y-0.5",children:a.materials.map((c,u)=>f.jsxs("div",{className:"flex items-center space-x-2 text-[9px]",children:[f.jsx("div",{className:"w-3 h-3 rounded-sm border border-studio-border flex-shrink-0",style:{backgroundColor:`rgba(${c.colorR},${c.colorG},${c.colorB},${c.colorA/255})`}}),f.jsx("span",{className:"font-mono text-studio-text",children:c.textureName||"(no texture)"}),c.maskName&&f.jsxs("span",{className:"text-studio-muted",children:["/ ",c.maskName]})]},u))})]},l))})]}),t&&t.frames.length>0&&f.jsxs("div",{children:[f.jsx(zi,{title:"Frames (Hierarchy)",count:t.stats.frameCount,expanded:i.frames,toggle:()=>s("frames")}),i.frames&&f.jsx("div",{className:"px-3 py-2 space-y-0.5",children:t.frames.map((a,l)=>f.jsxs("div",{className:"flex items-center space-x-2 py-0.5 font-mono text-[9px] border-b border-studio-border/20 last:border-0",children:[f.jsx("span",{className:"text-studio-border w-5 text-right",children:a.index}),f.jsx("span",{className:"text-studio-muted",children:"→"}),f.jsx("span",{className:"text-studio-text flex-1",children:a.name??"(unnamed)"}),f.jsxs("span",{className:"text-studio-border",children:["parent: ",a.parentIndex]})]},l))})]}),t&&t.atomics.length>0&&f.jsxs("div",{children:[f.jsx(zi,{title:"Atomics",count:t.stats.atomicCount,expanded:i.atomics,toggle:()=>s("atomics")}),i.atomics&&f.jsx("div",{className:"px-3 py-2 space-y-0.5",children:t.atomics.map((a,l)=>f.jsxs("div",{className:"flex items-center space-x-3 py-0.5 font-mono text-[9px] border-b border-studio-border/20 last:border-0",children:[f.jsxs("span",{className:"text-studio-muted",children:["Frame ",a.frameIndex]}),f.jsx("span",{className:"text-studio-border",children:"←→"}),f.jsxs("span",{className:"text-studio-accent",children:["Geo ",a.geometryIndex]}),f.jsxs("span",{className:"text-studio-border",children:["flags: 0x",a.flags.toString(16)]})]},l))})]}),n&&f.jsxs("div",{children:[f.jsx(zi,{title:"Texture Matching",expanded:i.matching,toggle:()=>s("matching")}),i.matching&&f.jsxs("div",{className:"px-3 py-2",children:[f.jsxs("div",{className:"flex space-x-4 text-[10px] mb-2",children:[f.jsxs("span",{className:"text-studio-success",children:["✓ Matched: ",n.matched]}),f.jsxs("span",{className:"text-studio-danger",children:["✗ Missing: ",n.missingInTxd]}),f.jsxs("span",{className:"text-studio-warning",children:["⊘ Unused: ",n.unusedInDff]})]}),n.entries.map((a,l)=>f.jsxs("div",{className:"flex items-center justify-between py-0.5 border-b border-studio-border/20 last:border-0",children:[f.jsx("span",{className:"font-mono text-[10px] text-studio-text",children:a.name}),f.jsx(Lg,{text:a.status==="MATCHED"?"MATCHED":a.status==="MISSING_IN_TXD"?"MISSING":"UNUSED",color:a.status==="MATCHED"?"bg-studio-success/20 text-studio-success":a.status==="MISSING_IN_TXD"?"bg-studio-danger/20 text-studio-danger":"bg-studio-warning/20 text-studio-warning"})]},l))]})]}),t&&t.unknownPlugins.length>0&&f.jsxs("div",{children:[f.jsx(zi,{title:"Unknown Plugins",count:t.stats.unknownPluginCount,expanded:i.plugins,toggle:()=>s("plugins")}),i.plugins&&f.jsx("div",{className:"px-3 py-2 space-y-0.5",children:t.unknownPlugins.map((a,l)=>f.jsxs("div",{className:"flex items-center justify-between font-mono text-[9px] py-0.5 border-b border-studio-border/20 last:border-0",children:[f.jsx("span",{className:"text-studio-warning",children:a.typeName}),f.jsxs("span",{className:"text-studio-muted",children:["offset: 0x",a.offset.toString(16)," · size: ",a.length]})]},l))})]}),t&&(t.errors.length>0||t.warnings.length>0)&&f.jsxs("div",{children:[f.jsx(zi,{title:"Errors & Warnings",count:t.errors.length+t.warnings.length,expanded:i.errors,toggle:()=>s("errors")}),i.errors&&f.jsxs("div",{className:"px-3 py-2 space-y-1",children:[t.errors.map((a,l)=>f.jsxs("div",{className:"flex items-start space-x-1.5 text-studio-danger text-[10px]",children:[f.jsx(dv,{className:"w-3 h-3 flex-shrink-0 mt-0.5"}),f.jsx("span",{children:a})]},l)),t.warnings.map((a,l)=>f.jsxs("div",{className:"flex items-start space-x-1.5 text-studio-warning text-[10px]",children:[f.jsx(Af,{className:"w-3 h-3 flex-shrink-0 mt-0.5"}),f.jsx("span",{children:a})]},l))]})]})]})]})},cA=()=>{const{addLog:t}=Wf(),{setVehicleModel:e}=Qn(),{setActiveTab:n}=Jn(),[i,r]=ce.useState(),[s,o]=ce.useState(),[a,l]=ce.useState(),[c,u]=ce.useState(!1),d=ce.useRef(null),p=ce.useRef(null),[m,x]=ce.useState({status:"idle"}),v=async y=>{u(!0),x({status:"idle"});try{const _=await y.arrayBuffer(),S=$C.parse(_,y.name);r(S),t("success","DFF",`Parsed ${y.name}: ${S.stats.geometryCount} geometries`,{fileName:y.name}),S.errors.length>0&&S.errors.forEach(A=>t("error","DFF",A)),s&&l(Pg(S,s))}catch(_){t("error","DFF",`Parse failed: ${_.message}`)}u(!1)},g=async y=>{u(!0);try{const _=await y.arrayBuffer(),S=QC.parse(_,y.name);o(S),t("success","TXD",`Parsed ${y.name}: ${S.textureCount} textures`,{fileName:y.name}),i&&l(Pg(i,S))}catch(_){t("error","TXD",`Parse failed: ${_.message}`)}u(!1)},h=()=>{if(i)try{const{group:y,report:_}=iA.build(i);t(_.success?"success":"warn","RENDER",_.message,{converted:_.geometriesConverted,failed:_.geometriesFailed,atomics:_.atomicsMapped}),_.geometryReports.forEach(S=>{S.success||t("error","RENDER",S.message)}),_.success?(x({status:"success",geometriesTotal:i.geometries.length,geometriesConverted:_.geometriesConverted,geometriesFailed:_.geometriesFailed,meshesCreated:_.atomicsMapped,boundingBox:_.boundingBox}),e(oA(i),y),n("3d")):x({status:"error",stage:"Geometry / Scene Conversion",error:_.message,geometriesTotal:i.geometries.length,geometriesConverted:_.geometriesConverted,geometriesFailed:_.geometriesFailed,meshesCreated:_.atomicsMapped})}catch(y){const _=y instanceof Error?y.message:String(y);t("error","RENDER",`Build failed: ${_}`),x({status:"error",stage:"SceneBuilder Exception",error:_,geometriesTotal:i.geometries.length,geometriesConverted:0,geometriesFailed:i.geometries.length,meshesCreated:0})}};return f.jsxs("div",{className:"h-full flex flex-col",children:[f.jsxs("div",{className:"flex-shrink-0 border-b border-studio-border bg-studio-panel px-3 py-2 flex items-center space-x-2",children:[f.jsxs("button",{onClick:()=>{var y;return(y=d.current)==null?void 0:y.click()},disabled:c,className:"flex items-center space-x-1.5 px-3 py-1.5 bg-studio-secondary hover:bg-studio-border text-studio-text rounded text-xs font-medium border border-studio-border transition disabled:opacity-50",children:[f.jsx(Vo,{className:"w-3 h-3 text-studio-accent"}),f.jsx("span",{children:"Import .DFF"})]}),f.jsxs("button",{onClick:()=>{var y;return(y=p.current)==null?void 0:y.click()},disabled:c,className:"flex items-center space-x-1.5 px-3 py-1.5 bg-studio-secondary hover:bg-studio-border text-studio-text rounded text-xs font-medium border border-studio-border transition disabled:opacity-50",children:[f.jsx(Vo,{className:"w-3 h-3 text-purple-400"}),f.jsx("span",{children:"Import .TXD"})]}),c&&f.jsx("span",{className:"text-studio-muted text-xs animate-pulse",children:"Parsing…"}),i&&f.jsxs("div",{className:"flex items-center space-x-1.5 ml-auto text-[10px]",children:[f.jsx(vm,{className:"w-3 h-3 text-studio-success"}),f.jsx("span",{className:"text-studio-success",children:i.fileName}),f.jsxs("button",{onClick:h,className:"flex items-center space-x-1 ml-2 px-2.5 py-1 bg-emerald-600/20 text-emerald-400 hover:bg-emerald-600/40 rounded transition border border-emerald-500/30 font-bold",children:[f.jsx($S,{className:"w-3 h-3"}),f.jsx("span",{children:"BUILD 3D"})]})]})]}),m.status==="error"&&f.jsxs("div",{className:"bg-studio-danger/15 border-b border-studio-danger/30 p-3 text-xs text-studio-danger flex flex-col space-y-1",children:[f.jsxs("div",{className:"flex items-center space-x-1.5 font-bold",children:[f.jsx(dv,{className:"w-4 h-4 flex-shrink-0"}),f.jsxs("span",{children:["BUILD 3D Falhou no estágio: ",m.stage]})]}),f.jsx("p",{className:"font-mono text-[11px] text-studio-text",children:m.error}),f.jsxs("div",{className:"text-[10px] text-studio-muted flex space-x-4 pt-1",children:[f.jsxs("span",{children:["Geometries: ",m.geometriesTotal]}),f.jsxs("span",{children:["Convertidas: ",m.geometriesConverted]}),f.jsxs("span",{children:["Ignoradas/Falhas: ",m.geometriesFailed]}),f.jsxs("span",{children:["Meshes criados: ",m.meshesCreated]})]})]}),m.status==="success"&&f.jsxs("div",{className:"bg-studio-success/15 border-b border-studio-success/30 px-3 py-2 text-xs text-studio-success flex items-center justify-between",children:[f.jsxs("div",{className:"flex items-center space-x-2",children:[f.jsx(vm,{className:"w-4 h-4 flex-shrink-0"}),f.jsxs("span",{children:["3D Construído com sucesso: ",m.meshesCreated," meshes no viewport"]})]}),f.jsx("button",{onClick:()=>n("3d"),className:"px-2 py-0.5 bg-studio-success/20 hover:bg-studio-success/30 rounded text-[11px] font-semibold transition",children:"Ver 3D View →"})]}),f.jsx("div",{className:"flex-1 overflow-hidden",children:f.jsx(lA,{dffAnalysis:i,txdAnalysis:s,matchResult:a})}),f.jsx("input",{ref:d,type:"file",accept:".dff",className:"hidden",onChange:async y=>{var S;const _=(S=y.target.files)==null?void 0:S[0];_&&await v(_),y.target.value=""}}),f.jsx("input",{ref:p,type:"file",accept:".txd",className:"hidden",onChange:async y=>{var S;const _=(S=y.target.files)==null?void 0:S[0];_&&await g(_),y.target.value=""}})]})},uA=()=>{const t=ce.useRef(null),e=ce.useRef(null),n=ce.useRef(null),i=ce.useRef(!1),r=ce.useRef({x:0,y:0}),[s,o]=ce.useState(!1),{layers:a,activeLayerId:l,setActiveLayerId:c,setLayerContent:u,activeTool:d,brushColor:p,brushSize:m,brushOpacity:x,textureResolution:v,undo:g}=ci(),h=a.find(I=>I.id===l)??a[0],y=ce.useCallback(I=>{const D=I.currentTarget.getBoundingClientRect();return{x:(I.clientX-D.left)*v/D.width,y:(I.clientY-D.top)*v/D.height}},[v]),_=ce.useCallback(async()=>{var V;const I=t.current,D=e.current;if(!I||!D||!h)return;o(!0),I.width=D.width=v,I.height=D.height=v;const O=a.map(P=>P.id===h.id?{...P,content:void 0}:P),k=await la(O,v);(V=I.getContext("2d"))==null||V.drawImage(k,0,0);const U=D.getContext("2d");if(U==null||U.clearRect(0,0,v,v),h.content){const P=new Image;P.onload=()=>U==null?void 0:U.drawImage(P,0,0,v,v),P.src=h.content}o(!1)},[h,a,v]);ce.useEffect(()=>{_()},[_]);const S=ce.useCallback(()=>{!h||!e.current||u(h.id,e.current.toDataURL("image/png"))},[h,u]),A=(I,D)=>{var k;const O=(k=e.current)==null?void 0:k.getContext("2d");O&&(O.save(),O.globalAlpha=x,O.globalCompositeOperation=d==="eraser"?"destination-out":"source-over",O.strokeStyle=p,O.lineWidth=m,O.lineCap="round",O.lineJoin="round",O.beginPath(),O.moveTo(I.x,I.y),O.lineTo(D.x,D.y),O.stroke(),O.restore())},C=I=>{var O,k;if(!h||h.locked||s)return;const D=y(I);if(I.currentTarget.setPointerCapture(I.pointerId),i.current=!0,r.current=D,d==="fill"){const U=(O=e.current)==null?void 0:O.getContext("2d");U&&(U.save(),U.globalAlpha=x,U.globalCompositeOperation="source-over",U.fillStyle=p,U.fillRect(0,0,v,v),U.restore(),S()),i.current=!1}else if(d==="eyedropper"){const U=(k=t.current)==null?void 0:k.getContext("2d"),V=U==null?void 0:U.getImageData(Math.floor(D.x),Math.floor(D.y),1,1).data;V&&ci.getState().setBrushColor(`#${[V[0],V[1],V[2]].map(P=>P.toString(16).padStart(2,"0")).join("")}`),i.current=!1}else(d==="brush"||d==="eraser")&&A(D,D)},b=I=>{if(!i.current||h!=null&&h.locked||d!=="brush"&&d!=="eraser")return;const D=y(I);A(r.current,D),r.current=D},R=I=>{var k;if(!i.current||!h||h.locked)return;const D=y(I),O=(k=e.current)==null?void 0:k.getContext("2d");O&&d==="rectangle"&&(O.save(),O.globalAlpha=x,O.strokeStyle=p,O.lineWidth=m,O.strokeRect(r.current.x,r.current.y,D.x-r.current.x,D.y-r.current.y),O.restore()),i.current=!1,S()},E=()=>{var O;if(!h||h.locked)return;const I=window.prompt("Texto para inserir");if(!I)return;const D=(O=e.current)==null?void 0:O.getContext("2d");D&&(D.save(),D.fillStyle=p,D.globalAlpha=x,D.font=`${Math.max(20,m*2)}px sans-serif`,D.fillText(I,v*.1,v*.15),D.restore(),S())},M=async I=>{var U;const D=(U=I.target.files)==null?void 0:U[0];if(!D||!h||h.locked)return;const O=await new Promise((V,P)=>{const $=new FileReader;$.onload=()=>V(String($.result)),$.onerror=P,$.readAsDataURL(D)}),k=new Image;k.onload=()=>{var V,P;(P=(V=e.current)==null?void 0:V.getContext("2d"))==null||P.drawImage(k,0,0,v,v),S()},k.src=O,I.target.value=""},N=async()=>{const I=await la(a,v);i_(I,`livery_${v}.png`,"png")};return f.jsxs("div",{className:"h-full flex flex-col bg-studio-bg",children:[f.jsxs("div",{className:"flex items-center gap-2 px-3 py-2 bg-studio-panel border-b border-studio-border text-xs",children:[f.jsx("span",{className:"font-semibold text-studio-text",children:"Livery Canvas"}),f.jsx("select",{value:(h==null?void 0:h.id)??"",onChange:I=>c(I.target.value),className:"bg-studio-secondary border border-studio-border rounded px-2 py-1 text-studio-text",children:a.map(I=>f.jsxs("option",{value:I.id,children:[I.locked?"🔒 ":"",I.name]},I.id))}),f.jsx("span",{className:"text-studio-muted",children:h!=null&&h.locked?"Camada bloqueada":`${d} · ${m}px`}),f.jsxs("div",{className:"ml-auto flex gap-2",children:[f.jsxs("button",{onClick:E,className:"px-2 py-1 rounded hover:bg-studio-secondary flex items-center gap-1",children:[f.jsx(_v,{className:"w-3.5 h-3.5"}),"Texto"]}),f.jsxs("button",{onClick:()=>{var I;return(I=n.current)==null?void 0:I.click()},className:"px-2 py-1 rounded hover:bg-studio-secondary flex items-center gap-1",children:[f.jsx(kS,{className:"w-3.5 h-3.5"}),"Imagem"]}),f.jsx("button",{onClick:g,className:"px-2 py-1 rounded hover:bg-studio-secondary",children:f.jsx(nM,{className:"w-3.5 h-3.5"})}),f.jsxs("button",{onClick:()=>void N(),className:"px-2 py-1 bg-studio-accent text-white rounded flex items-center gap-1",children:[f.jsx(kr,{className:"w-3.5 h-3.5"}),"PNG"]})]}),f.jsx("input",{ref:n,className:"hidden",type:"file",accept:"image/*",onChange:I=>void M(I)})]}),f.jsx("div",{className:"flex-1 overflow-auto p-5 flex items-center justify-center bg-[#0b0b0b]",children:f.jsxs("div",{className:"relative border border-studio-border shadow-2xl",style:{width:"min(72vh, calc(100vw - 420px))",aspectRatio:"1"},children:[f.jsx("canvas",{ref:t,className:"absolute inset-0 w-full h-full"}),f.jsx("canvas",{ref:e,className:`absolute inset-0 w-full h-full ${h!=null&&h.locked?"cursor-not-allowed":"cursor-crosshair"}`,onPointerDown:C,onPointerMove:b,onPointerUp:R,onPointerCancel:R})]})})]})},dA=()=>{const{activeTab:t,setActiveTab:e,splitRatio:n}=Jn(),{currentProject:i,vehicleModel:r}=Qn(),s=[{id:"3d",label:"3D View",icon:Nc},{id:"uv",label:"UV Editor",icon:BS},{id:"split",label:"Split 3D / UV",icon:QS},{id:"materials",label:"Materials",icon:ec},{id:"diagnostic",label:"Diagnostic",icon:fv},{id:"livery",label:"Livery",icon:xv},{id:"project",label:"Project Info",icon:pv}];return f.jsxs("div",{className:"flex-1 flex flex-col h-full bg-studio-bg overflow-hidden relative",children:[f.jsxs("div",{className:"h-8 bg-studio-panel border-b border-studio-border px-3 flex items-center justify-between text-xs select-none",children:[f.jsx("div",{className:"flex items-center space-x-1",children:s.map(o=>{const a=o.icon,l=t===o.id;return f.jsxs("button",{onClick:()=>e(o.id),className:`px-3 py-1 rounded-t flex items-center space-x-1.5 transition text-xs font-medium ${l?"bg-studio-bg text-studio-accent border-t-2 border-studio-accent shadow-sm":"text-studio-muted hover:text-studio-text hover:bg-studio-secondary"}`,children:[f.jsx(a,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:o.label})]},o.id)})}),f.jsx("div",{className:"text-[11px] text-studio-muted font-mono flex items-center space-x-2",children:f.jsxs("span",{children:["Mode: ",f.jsx("strong",{className:"text-studio-text",children:t.toUpperCase()})]})})]}),f.jsxs("div",{className:"flex-1 relative overflow-hidden",children:[t==="3d"&&f.jsx(Ag,{}),t==="uv"&&f.jsx(Rg,{}),t==="split"&&f.jsxs("div",{className:"w-full h-full flex flex-row",children:[f.jsx("div",{style:{width:`${n*100}%`},className:"h-full relative border-r border-studio-border",children:f.jsx(Ag,{})}),f.jsx("div",{style:{width:`${(1-n)*100}%`},className:"h-full relative",children:f.jsx(Rg,{})})]}),t==="diagnostic"&&f.jsx(cA,{}),t==="livery"&&f.jsx(uA,{}),t==="materials"&&f.jsxs("div",{className:"p-6 overflow-y-auto h-full max-w-4xl mx-auto",children:[f.jsx("div",{className:"flex items-center justify-between mb-4 border-b border-studio-border pb-3",children:f.jsxs("div",{children:[f.jsxs("h2",{className:"text-base font-bold text-studio-text flex items-center space-x-2",children:[f.jsx(ec,{className:"w-5 h-5 text-studio-accent"}),f.jsx("span",{children:"Vehicle Material Assignment"})]}),f.jsx("p",{className:"text-xs text-studio-muted mt-0.5",children:"Multi-material configuration for Grand Theft Auto: San Andreas RenderWare geometry."})]})}),f.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:i.materials.map(o=>f.jsxs("div",{className:"bg-studio-panel border border-studio-border rounded-lg p-4 flex flex-col justify-between shadow",children:[f.jsxs("div",{className:"flex items-start justify-between",children:[f.jsxs("div",{children:[f.jsx("h3",{className:"font-semibold text-sm text-studio-text",children:o.name}),f.jsxs("span",{className:"text-[11px] font-mono text-studio-muted",children:["ID: ",o.id]})]}),f.jsx("div",{className:"w-8 h-8 rounded border border-studio-border shadow-inner",style:{backgroundColor:o.diffuseColor}})]}),f.jsxs("div",{className:"mt-4 pt-3 border-t border-studio-border/60 flex items-center justify-between text-xs",children:[f.jsx("span",{className:"text-studio-muted",children:"Receives Livery Texture:"}),f.jsx("span",{className:`px-2 py-0.5 rounded text-[11px] font-medium ${o.isLiveryTarget?"bg-studio-accent/20 text-studio-accent border border-studio-accent/40":"bg-studio-secondary text-studio-muted"}`,children:o.isLiveryTarget?"Target Material":"No Livery"})]})]},o.id))})]}),t==="project"&&f.jsxs("div",{className:"p-6 overflow-y-auto h-full max-w-3xl mx-auto space-y-6",children:[f.jsxs("div",{className:"border-b border-studio-border pb-3",children:[f.jsxs("h2",{className:"text-base font-bold text-studio-text flex items-center space-x-2",children:[f.jsx(Cf,{className:"w-5 h-5 text-studio-accent"}),f.jsx("span",{children:"Project & Vehicle Specifications"})]}),f.jsx("p",{className:"text-xs text-studio-muted mt-0.5",children:"Technical RenderWare structures and metadata for this project."})]}),f.jsxs("div",{className:"bg-studio-panel border border-studio-border rounded-lg p-5 space-y-3",children:[f.jsx("h3",{className:"text-xs font-bold uppercase tracking-wider text-studio-muted",children:"Project Overview"}),f.jsxs("div",{className:"grid grid-cols-2 gap-4 text-xs",children:[f.jsxs("div",{children:[f.jsx("span",{className:"text-studio-muted block",children:"Project Name:"}),f.jsx("span",{className:"font-semibold text-studio-text",children:i.name})]}),f.jsxs("div",{children:[f.jsx("span",{className:"text-studio-muted block",children:"Format Version:"}),f.jsxs("span",{className:"font-mono text-studio-text",children:[i.version," (.gslp)"]})]}),f.jsxs("div",{children:[f.jsx("span",{className:"text-studio-muted block",children:"Texture Resolution:"}),f.jsxs("span",{className:"font-semibold text-studio-accent",children:[i.textureResolution," x ",i.textureResolution," px"]})]}),f.jsxs("div",{children:[f.jsx("span",{className:"text-studio-muted block",children:"Last Saved:"}),f.jsx("span",{className:"text-studio-text",children:new Date(i.updatedAt).toLocaleString()})]})]})]}),f.jsxs("div",{className:"bg-studio-panel border border-studio-border rounded-lg p-5 space-y-3",children:[f.jsx("h3",{className:"text-xs font-bold uppercase tracking-wider text-studio-muted",children:"Vehicle Telemetry (DFF)"}),r?f.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-4 text-xs font-mono",children:[f.jsxs("div",{className:"bg-studio-secondary p-2.5 rounded border border-studio-border",children:[f.jsx("span",{className:"text-studio-muted block text-[10px]",children:"VEHICLE"}),f.jsx("strong",{className:"text-studio-text text-sm",children:r.name})]}),f.jsxs("div",{className:"bg-studio-secondary p-2.5 rounded border border-studio-border",children:[f.jsx("span",{className:"text-studio-muted block text-[10px]",children:"ENGINE VERSION"}),f.jsx("strong",{className:"text-studio-accent text-sm",children:r.rwVersionString})]}),f.jsxs("div",{className:"bg-studio-secondary p-2.5 rounded border border-studio-border",children:[f.jsx("span",{className:"text-studio-muted block text-[10px]",children:"TOTAL VERTICES"}),f.jsx("strong",{className:"text-studio-text text-sm",children:r.stats.totalVertices.toLocaleString()})]}),f.jsxs("div",{className:"bg-studio-secondary p-2.5 rounded border border-studio-border",children:[f.jsx("span",{className:"text-studio-muted block text-[10px]",children:"TOTAL TRIANGLES"}),f.jsx("strong",{className:"text-studio-text text-sm",children:r.stats.totalTriangles.toLocaleString()})]}),f.jsxs("div",{className:"bg-studio-secondary p-2.5 rounded border border-studio-border",children:[f.jsx("span",{className:"text-studio-muted block text-[10px]",children:"MESH COUNT"}),f.jsx("strong",{className:"text-studio-text text-sm",children:r.stats.totalMeshes})]}),f.jsxs("div",{className:"bg-studio-secondary p-2.5 rounded border border-studio-border",children:[f.jsx("span",{className:"text-studio-muted block text-[10px]",children:"UV SETS DETECTED"}),f.jsxs("strong",{className:"text-studio-success text-sm flex items-center space-x-1",children:[f.jsx(uv,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"Valid UV"})]})]})]}):f.jsx("p",{className:"text-xs text-studio-muted",children:"No vehicle model loaded."})]})]})]})]})},hA=()=>{var _;const[t,e]=ce.useState("layers"),{currentProject:n,vehicleModel:i,updateMaterial:r}=Qn(),{layers:s,activeLayerId:o,setActiveLayerId:a,addLayer:l,removeLayer:c,toggleLayerVisibility:u,toggleLayerLock:d,setLayerOpacity:p,duplicateLayer:m}=ci(),{selectedPartId:x,selectedMaterialId:v,setSelectedMaterialId:g}=Jn(),h=[{id:"properties",label:"Properties",icon:OS},{id:"materials",label:"Materials",icon:ec},{id:"layers",label:"Layers",icon:Rf}],y=(_=i==null?void 0:i.geometries[0])==null?void 0:_.meshes.find(S=>S.id===x);return f.jsxs("aside",{className:"w-64 bg-studio-panel border-l border-studio-border flex flex-col h-full text-xs select-none z-20",children:[f.jsx("div",{className:"flex border-b border-studio-border",children:h.map(S=>{const A=S.icon;return f.jsxs("button",{onClick:()=>e(S.id),className:`flex-1 py-2 flex flex-col items-center space-y-0.5 text-[10px] font-medium transition ${t===S.id?"text-studio-accent border-b-2 border-studio-accent bg-studio-bg/50":"text-studio-muted hover:text-studio-text"}`,children:[f.jsx(A,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:S.label})]},S.id)})}),f.jsxs("div",{className:"flex-1 overflow-y-auto overflow-x-hidden",children:[t==="properties"&&f.jsxs("div",{className:"p-3 space-y-4",children:[f.jsxs("div",{className:"space-y-2",children:[f.jsx("h3",{className:"text-[10px] font-bold uppercase tracking-widest text-studio-muted",children:"Selected Part"}),y?f.jsxs("div",{className:"bg-studio-secondary rounded p-2.5 space-y-2 border border-studio-border/60",children:[f.jsx("div",{className:"font-semibold text-studio-text",children:y.name}),f.jsxs("div",{className:"space-y-1 text-[10px] font-mono",children:[f.jsxs("div",{className:"flex justify-between",children:[f.jsx("span",{className:"text-studio-muted",children:"ID:"}),f.jsx("span",{className:"text-studio-text",children:y.id})]}),f.jsxs("div",{className:"flex justify-between",children:[f.jsx("span",{className:"text-studio-muted",children:"Vertices:"}),f.jsx("span",{className:"text-studio-text",children:y.vertexCount.toLocaleString()})]}),f.jsxs("div",{className:"flex justify-between",children:[f.jsx("span",{className:"text-studio-muted",children:"Triangles:"}),f.jsx("span",{className:"text-studio-text",children:y.triangleCount.toLocaleString()})]}),f.jsxs("div",{className:"flex justify-between",children:[f.jsx("span",{className:"text-studio-muted",children:"Has UV:"}),f.jsx("span",{className:y.uvs?"text-studio-success":"text-studio-danger",children:y.uvs?"✓ Valid UV Data":"✗ No UV"})]})]})]}):f.jsxs("p",{className:"text-studio-muted text-[11px] flex items-center space-x-1.5",children:[f.jsx(IS,{className:"w-3 h-3 opacity-50"}),f.jsx("span",{children:"Click a part on the 3D model to inspect it."})]})]}),i&&f.jsxs("div",{className:"space-y-2",children:[f.jsx("h3",{className:"text-[10px] font-bold uppercase tracking-widest text-studio-muted",children:"Vehicle Info"}),f.jsxs("div",{className:"bg-studio-secondary rounded p-2.5 space-y-1 text-[10px] font-mono border border-studio-border/60",children:[f.jsxs("div",{className:"flex justify-between",children:[f.jsx("span",{className:"text-studio-muted",children:"Name:"}),f.jsx("span",{className:"text-studio-text font-semibold",children:i.name})]}),f.jsxs("div",{className:"flex justify-between",children:[f.jsx("span",{className:"text-studio-muted",children:"RW Version:"}),f.jsx("span",{className:"text-studio-accent",children:i.rwVersionString})]}),f.jsxs("div",{className:"flex justify-between",children:[f.jsx("span",{className:"text-studio-muted",children:"Meshes:"}),f.jsx("span",{className:"text-studio-text",children:i.stats.totalMeshes})]}),f.jsxs("div",{className:"flex justify-between",children:[f.jsx("span",{className:"text-studio-muted",children:"Vertices:"}),f.jsx("span",{className:"text-studio-text",children:i.stats.totalVertices.toLocaleString()})]}),f.jsxs("div",{className:"flex justify-between",children:[f.jsx("span",{className:"text-studio-muted",children:"Triangles:"}),f.jsx("span",{className:"text-studio-text",children:i.stats.totalTriangles.toLocaleString()})]}),f.jsxs("div",{className:"flex justify-between",children:[f.jsx("span",{className:"text-studio-muted",children:"Materials:"}),f.jsx("span",{className:"text-studio-text",children:i.stats.totalMaterials})]}),f.jsxs("div",{className:"flex justify-between",children:[f.jsx("span",{className:"text-studio-muted",children:"UV:"}),f.jsx("span",{className:"text-studio-success",children:i.stats.hasUV?"✓ Detected":"✗ Missing"})]})]})]})]}),t==="materials"&&f.jsxs("div",{className:"p-3 space-y-3",children:[f.jsx("h3",{className:"text-[10px] font-bold uppercase tracking-widest text-studio-muted",children:"Texture Slots"}),n.materials.map(S=>f.jsxs("div",{onClick:()=>g(S.id===v?null:S.id),className:`rounded-lg border transition cursor-pointer p-2.5 space-y-2 ${v===S.id?"border-studio-accent bg-studio-accent/10":"border-studio-border bg-studio-secondary hover:border-studio-border/80"}`,children:[f.jsxs("div",{className:"flex items-center justify-between",children:[f.jsxs("div",{className:"flex items-center space-x-2",children:[f.jsx("div",{className:"w-6 h-6 rounded border border-studio-border shadow-inner flex-shrink-0",style:{backgroundColor:S.diffuseColor}}),f.jsxs("div",{children:[f.jsx("div",{className:"font-semibold text-studio-text text-[11px] leading-tight",children:S.name}),f.jsx("div",{className:"text-[9px] font-mono text-studio-muted",children:S.id})]})]}),S.isLiveryTarget&&f.jsx("span",{className:"px-1.5 py-0.5 bg-studio-accent/25 text-studio-accent text-[9px] rounded font-medium border border-studio-accent/40",children:"LIVERY"})]}),v===S.id&&f.jsxs("div",{className:"space-y-2 pt-2 border-t border-studio-border/40",children:[f.jsxs("label",{className:"flex items-center justify-between",children:[f.jsx("span",{className:"text-studio-muted text-[10px]",children:"Diffuse Color"}),f.jsx("input",{type:"color",value:S.diffuseColor,onChange:A=>r(S.id,{diffuseColor:A.target.value}),className:"w-7 h-5 rounded cursor-pointer border border-studio-border"})]}),f.jsxs("label",{className:"flex items-center justify-between",children:[f.jsx("span",{className:"text-studio-muted text-[10px]",children:"Opacity"}),f.jsxs("div",{className:"flex items-center space-x-1",children:[f.jsx("input",{type:"range",min:0,max:1,step:.05,value:S.opacity,onChange:A=>r(S.id,{opacity:parseFloat(A.target.value)}),className:"w-20"}),f.jsxs("span",{className:"text-studio-text w-6 text-right",children:[Math.round(S.opacity*100),"%"]})]})]}),f.jsxs("div",{className:"flex items-center justify-between",children:[f.jsx("span",{className:"text-studio-muted text-[10px]",children:"Livery Target"}),f.jsx("button",{onClick:A=>{A.stopPropagation(),r(S.id,{isLiveryTarget:!S.isLiveryTarget})},className:`px-2 py-0.5 rounded text-[10px] font-medium transition ${S.isLiveryTarget?"bg-studio-accent text-white":"bg-studio-border text-studio-muted hover:text-studio-text"}`,children:S.isLiveryTarget?"✓ Enabled":"Enable"})]})]})]},S.id))]}),t==="layers"&&f.jsxs("div",{className:"p-2 space-y-1",children:[f.jsxs("div",{className:"flex items-center justify-between px-1 pb-1 border-b border-studio-border",children:[f.jsx("span",{className:"text-[10px] font-bold uppercase tracking-widest text-studio-muted",children:"Layers"}),f.jsxs("button",{onClick:()=>l(),className:"flex items-center space-x-0.5 text-studio-accent hover:text-studio-text text-[10px] hover:bg-studio-secondary px-1.5 py-0.5 rounded transition",title:"Add New Layer",children:[f.jsx(YS,{className:"w-3 h-3"}),f.jsx("span",{children:"Add"})]})]}),f.jsx("div",{className:"space-y-0.5",children:s.map(S=>{const A=S.id===o;return f.jsxs("div",{onClick:()=>a(S.id),className:`group flex items-center space-x-1.5 p-1.5 rounded cursor-pointer transition ${A?"bg-studio-accent/15 border border-studio-accent/40":"hover:bg-studio-secondary border border-transparent"}`,children:[f.jsx("div",{className:"w-4 h-4 rounded-sm border border-studio-border flex-shrink-0",style:{backgroundColor:S.color||(S.type==="uv"?"#4F8CFF":"#555555"),opacity:S.visible?1:.3}}),f.jsx("span",{className:`flex-1 truncate text-[11px] font-medium leading-none ${A?"text-studio-text":"text-studio-muted group-hover:text-studio-text"} ${S.visible?"":"line-through opacity-50"}`,children:S.name}),f.jsxs("div",{className:`flex items-center space-x-0.5 flex-shrink-0 transition-opacity ${A?"opacity-100":"opacity-0 group-hover:opacity-100"}`,onClick:C=>C.stopPropagation(),children:[f.jsx("button",{onClick:()=>u(S.id),className:"p-0.5 hover:text-studio-text text-studio-muted transition",title:S.visible?"Hide Layer":"Show Layer",children:S.visible?f.jsx(Nc,{className:"w-3 h-3"}):f.jsx(FS,{className:"w-3 h-3 opacity-40"})}),f.jsx("button",{onClick:()=>d(S.id),className:"p-0.5 hover:text-studio-text text-studio-muted transition",title:S.locked?"Unlock Layer":"Lock Layer",children:S.locked?f.jsx(VS,{className:"w-3 h-3 text-studio-warning"}):f.jsx(zS,{className:"w-3 h-3"})}),f.jsx("button",{onClick:()=>m(S.id),className:"p-0.5 hover:text-studio-text text-studio-muted transition",title:"Duplicate Layer",children:f.jsx(DS,{className:"w-3 h-3"})}),f.jsx("button",{onClick:()=>c(S.id),className:"p-0.5 hover:text-studio-danger text-studio-muted transition",title:"Delete Layer",children:f.jsx(eM,{className:"w-3 h-3"})})]})]},S.id)})}),(()=>{const S=s.find(A=>A.id===o);return S?f.jsxs("div",{className:"pt-2 border-t border-studio-border/60 px-1 mt-2 space-y-1",children:[f.jsxs("div",{className:"flex items-center justify-between text-[10px]",children:[f.jsxs("span",{className:"text-studio-muted",children:["Opacity — ",f.jsx("span",{className:"text-studio-text font-semibold",children:S.name})]}),f.jsxs("span",{className:"font-mono text-studio-text",children:[Math.round(S.opacity*100),"%"]})]}),f.jsx("input",{type:"range",min:0,max:1,step:.01,value:S.opacity,onChange:A=>p(S.id,parseFloat(A.target.value)),className:"w-full accent-studio-accent"}),f.jsxs("div",{className:"flex items-center justify-between text-[10px]",children:[f.jsx("span",{className:"text-studio-muted",children:"Blend Mode"}),f.jsx("span",{className:"px-1.5 py-0.5 bg-studio-secondary rounded text-studio-text font-mono",children:S.blendMode})]})]}):null})()]})]})]})},fA=()=>{const{vehicleModel:t,isDirty:e,lastSavedAt:n}=Qn(),{textureResolution:i,viewMode:r}=ci(),{isDevConsoleOpen:s,toggleDevConsole:o}=Jn(),{logs:a}=Wf(),l=a[a.length-1];return f.jsxs("div",{className:"flex-shrink-0 border-t border-studio-border flex flex-col bg-studio-panel z-20",children:[s&&f.jsx("div",{className:"h-44 border-b border-studio-border overflow-y-auto bg-[#0d0d0d] font-mono text-[10px] px-3 py-2 space-y-0.5",children:a.map(c=>f.jsxs("div",{className:`flex items-start space-x-2 leading-tight ${c.level==="error"?"text-studio-danger":c.level==="warn"?"text-studio-warning":c.level==="success"?"text-studio-success":"text-studio-muted"}`,children:[f.jsx("span",{className:"flex-shrink-0 text-studio-border",children:c.timestamp}),f.jsxs("span",{className:`flex-shrink-0 uppercase font-bold w-10 ${c.category==="DFF"?"text-studio-accent":c.category==="UV"?"text-purple-400":c.category==="RENDER"?"text-emerald-400":"text-studio-muted"}`,children:["[",c.category,"]"]}),f.jsx("span",{className:"text-studio-text",children:c.message})]},c.id))}),f.jsxs("div",{className:"h-7 flex items-center justify-between px-3 text-[10px] font-mono select-none",children:[f.jsxs("div",{className:"flex items-center space-x-3 text-studio-muted",children:[f.jsxs("div",{className:"flex items-center space-x-1.5",children:[f.jsx("div",{className:"w-2 h-2 rounded-full bg-studio-success animate-pulse"}),f.jsx("span",{className:"text-studio-text",children:"Ready"})]}),f.jsx("span",{className:"text-studio-border",children:"|"}),f.jsxs("span",{children:["DFF:"," ",f.jsx("strong",{className:"text-studio-text",children:(t==null?void 0:t.fileName)??"—"})]}),f.jsx("span",{className:"text-studio-border",children:"|"}),f.jsxs("span",{children:["Texture:"," ",f.jsxs("strong",{className:"text-studio-accent",children:[i," × ",i]})]}),f.jsx("span",{className:"text-studio-border",children:"|"}),f.jsxs("span",{children:["View:"," ",f.jsx("strong",{className:"text-studio-text capitalize",children:r})]}),t&&f.jsxs(f.Fragment,{children:[f.jsx("span",{className:"text-studio-border",children:"|"}),f.jsxs("span",{children:["V: ",f.jsx("strong",{className:"text-studio-text",children:t.stats.totalVertices.toLocaleString()})]}),f.jsxs("span",{children:["T: ",f.jsx("strong",{className:"text-studio-text",children:t.stats.totalTriangles.toLocaleString()})]})]})]}),f.jsxs("div",{className:"flex items-center space-x-3",children:[l&&f.jsxs("span",{className:`flex items-center space-x-1 max-w-[350px] truncate ${l.level==="error"?"text-studio-danger":l.level==="warn"?"text-studio-warning":"text-studio-muted"}`,children:[l.level==="warn"&&f.jsx(tM,{className:"w-3 h-3 flex-shrink-0"}),f.jsx("span",{className:"truncate",children:l.message})]}),f.jsx("span",{className:"text-studio-border",children:"|"}),f.jsx("span",{className:e?"text-studio-warning":"text-studio-muted",children:e?"● Unsaved":`Saved ${n}`}),f.jsxs("button",{onClick:o,className:`flex items-center space-x-1 px-2 py-0.5 rounded transition ${s?"bg-studio-accent/20 text-studio-accent":"text-studio-muted hover:text-studio-text hover:bg-studio-secondary"}`,title:"Toggle Developer Console",children:[f.jsx(vv,{className:"w-3 h-3"}),f.jsx("span",{children:"Console"}),s?f.jsx(lv,{className:"w-3 h-3"}):f.jsx(PS,{className:"w-3 h-3"})]})]})]})]})};class pA{validate(e){if(!e||e.byteLength<12)return{valid:!1,error:"Unable to parse DFF. File is empty or smaller than a 12-byte RenderWare header."};try{const n=new DataView(e),i=Ng(n,0);return i.type!==_t.CLUMP?{valid:!1,error:`Invalid RenderWare stream: expected Clump (0x10) root chunk, received 0x${i.type.toString(16).toUpperCase()}.`}:i.size+12>e.byteLength?{valid:!1,warning:"File stream indicates a chunk size larger than buffer. File may be truncated."}:{valid:!0,rwVersion:i.version,rwVersionString:i.versionString,rootChunkType:i.type}}catch(n){return{valid:!1,error:`Unable to parse DFF: ${n instanceof Error?n.message:"Unknown stream error."}`}}}inspectChunks(e){const n=[];if(!e||e.byteLength<12)return n;const i=new DataView(e);let r=0;try{for(;r+12<=e.byteLength;){const s=Ng(i,r);if(n.push({type:s.type,size:s.size,libraryId:s.libraryId,version:s.version,build:s.build}),s.size===0?r+=12:r=s.nextOffset,n.length>500)break}}catch{}return n}async parseDff(e,n){throw new Error("Full binary DFF parser scheduled for Phase 2. Validator is active.")}extractUVs(e){throw new Error("UV extraction pipeline scheduled for Phase 2/4. Real UV extraction will process binary coordinates.")}}const mA=new pA,gA=()=>{const{isWelcomeModalOpen:t,setWelcomeModalOpen:e}=Jn(),{newProject:n}=Qn(),{addLog:i}=Wf(),[r,s]=ce.useState(!1),[o,a]=ce.useState(null),l=ce.useRef(null),c=[],u=ce.useCallback(()=>{e(!1)},[e]),d=()=>{n("Untitled Vehicle Livery"),i("info","PROJECT","New project created"),u()},p=async x=>{if(!x.name.toLowerCase().endsWith(".dff")){a(`"${x.name}" is not a .DFF file. Please provide a RenderWare model file.`);return}const v=await x.arrayBuffer(),g=mA.validate(v);if(!g.valid){a(g.error||"Unable to parse DFF. The file may be corrupted or use an unsupported RenderWare structure."),i("error","DFF",g.error||"Invalid DFF file",{fileName:x.name});return}i("success","DFF",`Validated DFF: ${x.name} (RW ${g.rwVersionString})`,{fileName:x.name,rwVersion:g.rwVersionString}),i("warn","DFF","Full binary DFF parsing scheduled for Phase 2. Validation passed — sample vehicle loaded for now."),u(),alert(`✓ DFF validation passed!

File: ${x.name}
RenderWare: ${g.rwVersionString}

Full 3D import will be implemented in Phase 2.
The sample vehicle is displayed in the viewport.`)},m=async x=>{x.preventDefault(),s(!1),a(null);const v=Array.from(x.dataTransfer.files),g=v.find(y=>y.name.toLowerCase().endsWith(".dff")),h=v.find(y=>y.name.toLowerCase().endsWith(".txd"));if(!g&&!h){a("No supported files dropped. Please use .DFF or .TXD files from Grand Theft Auto: San Andreas.");return}g&&await p(g),h&&!g&&(i("warn","TXD",`TXD file detected: ${h.name}. TXD import scheduled for Phase 3.`),alert(`TXD file detected. TXD texture import is scheduled for Phase 3.
Please import a .DFF file first.`))};return t?f.jsxs("div",{className:"fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6",children:[f.jsxs("div",{className:"bg-studio-panel border border-studio-border rounded-xl shadow-2xl max-w-2xl w-full overflow-hidden",children:[f.jsxs("div",{className:"px-8 pt-8 pb-6 border-b border-studio-border relative bg-gradient-to-b from-studio-secondary to-transparent",children:[f.jsx("button",{onClick:u,className:"absolute top-4 right-4 p-1.5 rounded-lg text-studio-muted hover:text-studio-text hover:bg-studio-border transition",children:f.jsx(yv,{className:"w-4 h-4"})}),f.jsxs("div",{className:"flex items-center space-x-3 mb-2",children:[f.jsx("div",{className:"w-10 h-10 bg-studio-accent/20 rounded-xl border border-studio-accent/40 flex items-center justify-center",children:f.jsx(Hd,{className:"w-6 h-6 text-studio-accent"})}),f.jsxs("div",{children:[f.jsx("h1",{className:"text-xl font-black text-studio-text tracking-wide uppercase",children:"GTA SA Livery Studio"}),f.jsx("p",{className:"text-xs text-studio-muted",children:"Professional vehicle livery editor for Grand Theft Auto: San Andreas"})]})]})]}),f.jsxs("div",{className:"p-8 space-y-6",children:[f.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[f.jsxs("button",{onClick:d,className:"flex items-center justify-center space-x-2 p-4 bg-studio-accent hover:bg-studio-accentHover text-white rounded-lg font-semibold shadow transition group",children:[f.jsx(hv,{className:"w-5 h-5 group-hover:scale-110 transition-transform"}),f.jsx("span",{children:"New Project"})]}),f.jsxs("button",{onClick:()=>{var x;e(!1),(x=document.querySelector('input[accept=".gslp,.json"]'))==null||x.click()},className:"flex items-center justify-center space-x-2 p-4 bg-studio-secondary hover:bg-studio-border text-studio-text rounded-lg font-semibold border border-studio-border transition group",children:[f.jsx(mv,{className:"w-5 h-5 group-hover:scale-110 transition-transform text-studio-accent"}),f.jsx("span",{children:"Open Project"})]}),f.jsxs("button",{onClick:()=>{var x;return(x=l.current)==null?void 0:x.click()},className:"flex items-center justify-center space-x-2 p-4 bg-studio-secondary hover:bg-studio-border text-studio-text rounded-lg font-semibold border border-studio-border transition group",children:[f.jsx(Vo,{className:"w-5 h-5 group-hover:scale-110 transition-transform text-studio-muted"}),f.jsx("span",{children:"Import .DFF"})]}),f.jsxs("button",{onClick:()=>{var x;return(x=l.current)==null?void 0:x.click()},className:"flex items-center justify-center space-x-2 p-4 bg-studio-secondary hover:bg-studio-border text-studio-text rounded-lg font-semibold border border-studio-border transition group",children:[f.jsx(Vo,{className:"w-5 h-5 group-hover:scale-110 transition-transform text-studio-muted"}),f.jsx("span",{children:"Import .DFF + .TXD"})]})]}),f.jsxs("div",{onDragOver:x=>{x.preventDefault(),s(!0),a(null)},onDragLeave:()=>s(!1),onDrop:m,className:`border-2 border-dashed rounded-xl p-8 text-center transition-all cursor-pointer ${r?"border-studio-accent bg-studio-accent/10 scale-[1.01]":o?"border-studio-danger bg-studio-danger/10":"border-studio-border hover:border-studio-accent/50 hover:bg-studio-secondary"}`,children:[f.jsx(Vo,{className:`w-8 h-8 mx-auto mb-2 ${r?"text-studio-accent":"text-studio-muted"}`}),f.jsx("p",{className:`text-sm font-medium ${r?"text-studio-accent":"text-studio-muted"}`,children:r?"Drop files to import…":"Drop .DFF or .TXD files here"}),f.jsx("p",{className:"text-[11px] text-studio-border mt-1",children:"Supports RenderWare 3.x from Grand Theft Auto: San Andreas"}),o&&f.jsx("div",{className:"mt-3 px-3 py-2 bg-studio-danger/20 border border-studio-danger/40 rounded-lg text-[11px] text-studio-danger text-left",children:o})]}),f.jsxs("div",{children:[f.jsxs("h3",{className:"text-[10px] font-bold uppercase tracking-widest text-studio-muted mb-2 flex items-center space-x-1.5",children:[f.jsx(LS,{className:"w-3 h-3"}),f.jsx("span",{children:"Recent Projects"})]}),c.length===0?f.jsxs("div",{className:"text-center py-4 text-studio-border text-xs flex flex-col items-center space-y-1",children:[f.jsx(pv,{className:"w-6 h-6 opacity-30"}),f.jsx("span",{children:"No recent projects. Import a .DFF to get started."})]}):f.jsx("div",{className:"space-y-1",children:c.map(x=>f.jsxs("div",{className:"flex items-center justify-between p-2 rounded hover:bg-studio-secondary cursor-pointer transition",children:[f.jsx("span",{className:"text-sm text-studio-text font-medium",children:x.name}),f.jsx("span",{className:"text-[10px] text-studio-muted",children:x.updatedAt})]},x.id))})]})]})]}),f.jsx("input",{ref:l,type:"file",className:"hidden",accept:".dff,.txd",multiple:!0,onChange:async x=>{const g=Array.from(x.target.files||[]).find(h=>h.name.toLowerCase().endsWith(".dff"));g&&await p(g),x.target.value=""}})]}):null};function gs(t,e,n,i=1){return`rgba(${t},${e},${n},${i})`}function Dg(t,e,n,i,r){t.save(),t.translate(e/2,e/2),t.rotate(n*Math.PI/180);const s=e*1.5,o=Math.ceil(s/r)+1;for(let a=-o;a<=o;a++)t.fillStyle=i[(a%i.length+i.length)%i.length],t.fillRect(a*r-s,-s,r,s*2);t.restore()}const xA=[{id:"solid-black",name:"Matte Black",category:"solid",icon:"⬛",render:(t,e)=>{t.fillStyle="#111111",t.fillRect(0,0,e,e)}},{id:"solid-white",name:"Pearl White",category:"solid",icon:"⬜",render:(t,e)=>{t.fillStyle="#f5f5f5",t.fillRect(0,0,e,e)}},{id:"solid-red",name:"Crimson Red",category:"solid",icon:"🔴",render:(t,e)=>{t.fillStyle="#c0392b",t.fillRect(0,0,e,e)}},{id:"solid-blue",name:"Ocean Blue",category:"solid",icon:"🔵",render:(t,e)=>{t.fillStyle="#1a5276",t.fillRect(0,0,e,e)}},{id:"solid-green",name:"Toxic Green",category:"solid",icon:"🟢",render:(t,e)=>{t.fillStyle="#1e8449",t.fillRect(0,0,e,e)}},{id:"solid-gold",name:"Metallic Gold",category:"solid",icon:"🟡",render:(t,e)=>{t.fillStyle="#d4ac0d",t.fillRect(0,0,e,e)}},{id:"gradient-sunset",name:"Sunset",category:"gradient",icon:"🌅",render:(t,e)=>{const n=t.createLinearGradient(0,0,e,e);n.addColorStop(0,"#f39c12"),n.addColorStop(.5,"#e74c3c"),n.addColorStop(1,"#8e44ad"),t.fillStyle=n,t.fillRect(0,0,e,e)}},{id:"gradient-night",name:"Night Sky",category:"gradient",icon:"🌌",render:(t,e)=>{const n=t.createLinearGradient(0,0,0,e);n.addColorStop(0,"#0c0c2c"),n.addColorStop(1,"#1a1a4e"),t.fillStyle=n,t.fillRect(0,0,e,e),t.fillStyle="rgba(255,255,255,0.7)";for(let i=0;i<120;i++){const r=Math.random()*e,s=Math.random()*e,o=Math.random()*2+.5;t.beginPath(),t.arc(r,s,o,0,Math.PI*2),t.fill()}}},{id:"gradient-neon",name:"Neon Cyber",category:"gradient",icon:"⚡",render:(t,e)=>{const n=t.createLinearGradient(0,0,e,0);n.addColorStop(0,"#00f5ff"),n.addColorStop(.5,"#4f00ff"),n.addColorStop(1,"#ff00aa"),t.fillStyle=n,t.fillRect(0,0,e,e)}},{id:"gradient-fire",name:"Fire",category:"gradient",icon:"🔥",render:(t,e)=>{const n=t.createLinearGradient(0,e,0,0);n.addColorStop(0,"#1a0000"),n.addColorStop(.3,"#cc0000"),n.addColorStop(.6,"#ff6600"),n.addColorStop(.85,"#ffcc00"),n.addColorStop(1,"#ffff88"),t.fillStyle=n,t.fillRect(0,0,e,e)}},{id:"gradient-ocean",name:"Ocean Depth",category:"gradient",icon:"🌊",render:(t,e)=>{const n=t.createLinearGradient(0,0,0,e);n.addColorStop(0,"#00b4d8"),n.addColorStop(.5,"#0077b6"),n.addColorStop(1,"#03045e"),t.fillStyle=n,t.fillRect(0,0,e,e)}},{id:"racing-white-stripes",name:"Classic White Stripes",category:"racing",icon:"🏁",render:(t,e)=>{t.fillStyle="#1a1a1a",t.fillRect(0,0,e,e),Dg(t,e,0,["#1a1a1a","#f5f5f5","#1a1a1a"],e/4)}},{id:"racing-red-white",name:"Red & White",category:"racing",icon:"🚗",render:(t,e)=>{t.fillStyle="#c0392b",t.fillRect(0,0,e,e);const n=e*.07,i=e/2;t.fillStyle="#f5f5f5",t.fillRect(i-n*1.5,0,n,e),t.fillRect(i+n*.5,0,n,e)}},{id:"racing-diagonal",name:"Diagonal Sport",category:"racing",icon:"⚡",render:(t,e)=>{t.fillStyle="#2c2c2c",t.fillRect(0,0,e,e),Dg(t,e,45,[gs(44,44,44),gs(200,200,200,.9),gs(44,44,44)],e/5)}},{id:"racing-checkerboard",name:"Checkerboard",category:"racing",icon:"♟️",render:(t,e)=>{const i=e/8;for(let r=0;r<8;r++)for(let s=0;s<8;s++)t.fillStyle=(s+r)%2===0?"#111111":"#f5f5f5",t.fillRect(s*i,r*i,i,i)}},{id:"camo-woodland",name:"Woodland Camo",category:"camo",icon:"🌿",render:(t,e)=>{const n=["#4a5240","#3d4a30","#6b7a5c","#2d3520"];t.fillStyle=n[0],t.fillRect(0,0,e,e);for(let i=0;i<60;i++){t.fillStyle=n[i%n.length],t.beginPath();const r=Math.random()*e,s=Math.random()*e,o=(Math.random()*.15+.03)*e,a=(Math.random()*.1+.02)*e;t.ellipse(r,s,o,a,Math.random()*Math.PI,0,Math.PI*2),t.fill()}}},{id:"camo-urban",name:"Urban Camo",category:"camo",icon:"🏙️",render:(t,e)=>{const n=["#555555","#333333","#777777","#444444"];t.fillStyle=n[0],t.fillRect(0,0,e,e);for(let i=0;i<80;i++){t.fillStyle=n[i%n.length];const r=Math.random()*e,s=Math.random()*e,o=(Math.random()*.12+.02)*e,a=(Math.random()*.1+.015)*e;t.save(),t.translate(r,s),t.rotate(Math.random()*.5-.25),t.fillRect(-o/2,-a/2,o,a),t.restore()}}},{id:"camo-desert",name:"Desert Sand",category:"camo",icon:"🏜️",render:(t,e)=>{const n=["#c2a45a","#9e7c3c","#d4b76a","#7a5c28"];t.fillStyle=n[0],t.fillRect(0,0,e,e);for(let i=0;i<70;i++){t.fillStyle=n[i%n.length],t.beginPath();const r=Math.random()*e,s=Math.random()*e,o=(Math.random()*.13+.03)*e,a=(Math.random()*.08+.02)*e;t.ellipse(r,s,o,a,Math.random()*Math.PI,0,Math.PI*2),t.fill()}}},{id:"pattern-carbon",name:"Carbon Fiber",category:"pattern",icon:"🖤",render:(t,e)=>{const n=Math.max(8,Math.round(e/128));t.fillStyle="#1a1a1a",t.fillRect(0,0,e,e);for(let i=0;i<e;i+=n*2)for(let r=0;r<e;r+=n*2)t.fillStyle=gs(40,40,40,.9),t.fillRect(r,i,n,n),t.fillRect(r+n,i+n,n,n),t.fillStyle=gs(26,26,26,.9),t.fillRect(r+n,i,n,n),t.fillRect(r,i+n,n,n)}},{id:"pattern-hex",name:"Hex Grid",category:"pattern",icon:"🔷",render:(t,e)=>{t.fillStyle="#0d0d1a",t.fillRect(0,0,e,e);const n=Math.round(e/32),i=n*2,r=n*Math.sqrt(3);t.strokeStyle=gs(79,140,255,.4),t.lineWidth=Math.max(1,n*.15);for(let s=-1;s<=e/r+1;s++)for(let o=-1;o<=e/i+1;o++){const a=o*i+(s%2===0?0:n),l=s*r;t.beginPath();for(let c=0;c<6;c++){const u=Math.PI/3*c-Math.PI/6,d=a+n*Math.cos(u),p=l+n*Math.sin(u);c===0?t.moveTo(d,p):t.lineTo(d,p)}t.closePath(),t.stroke()}}}];async function vA(t,e){const n=document.createElement("canvas");n.width=e,n.height=e;const i=n.getContext("2d");return t.render(i,e),n.toDataURL("image/png")}var Ig={},_A=function(t,e,n,i,r){var s=new Worker(Ig[e]||(Ig[e]=URL.createObjectURL(new Blob([t+';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})'],{type:"text/javascript"}))));return s.onmessage=function(o){var a=o.data,l=a.$e$;if(l){var c=new Error(l[0]);c.code=l[1],c.stack=l[2],r(c,null)}else r(null,a)},s.postMessage(n,i),s},qt=Uint8Array,dn=Uint16Array,Fc=Int32Array,kc=new qt([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Oc=new qt([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Ch=new qt([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),a_=function(t,e){for(var n=new dn(31),i=0;i<31;++i)n[i]=e+=1<<t[i-1];for(var r=new Fc(n[30]),i=1;i<30;++i)for(var s=n[i];s<n[i+1];++s)r[s]=s-n[i]<<5|i;return{b:n,r}},l_=a_(kc,2),yA=l_.b,cc=l_.r;yA[28]=258,cc[258]=28;var SA=a_(Oc,0),Ah=SA.r,uc=new dn(32768);for(var at=0;at<32768;++at){var Vi=(at&43690)>>1|(at&21845)<<1;Vi=(Vi&52428)>>2|(Vi&13107)<<2,Vi=(Vi&61680)>>4|(Vi&3855)<<4,uc[at]=((Vi&65280)>>8|(Vi&255)<<8)>>1}var Ws=function(t,e,n){for(var i=t.length,r=0,s=new dn(e);r<i;++r)t[r]&&++s[t[r]-1];var o=new dn(e);for(r=1;r<e;++r)o[r]=o[r-1]+s[r-1]<<1;var a;if(n){a=new dn(1<<e);var l=15-e;for(r=0;r<i;++r)if(t[r])for(var c=r<<4|t[r],u=e-t[r],d=o[t[r]-1]++<<u,p=d|(1<<u)-1;d<=p;++d)a[uc[d]>>l]=c}else for(a=new dn(i),r=0;r<i;++r)t[r]&&(a[r]=uc[o[t[r]-1]++]>>15-t[r]);return a},dr=new qt(288);for(var at=0;at<144;++at)dr[at]=8;for(var at=144;at<256;++at)dr[at]=9;for(var at=256;at<280;++at)dr[at]=7;for(var at=280;at<288;++at)dr[at]=8;var ca=new qt(32);for(var at=0;at<32;++at)ca[at]=5;var c_=Ws(dr,9,0),u_=Ws(ca,5,0),Xf=function(t){return(t+7)/8|0},$f=function(t,e,n){return(e==null||e<0)&&(e=0),(n==null||n>t.length)&&(n=t.length),new qt(t.subarray(e,n))},MA=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],so=function(t,e,n){var i=new Error(e||MA[t]);if(i.code=t,Error.captureStackTrace&&Error.captureStackTrace(i,so),!n)throw i;return i},ni=function(t,e,n){n<<=e&7;var i=e/8|0;t[i]|=n,t[i+1]|=n>>8},vs=function(t,e,n){n<<=e&7;var i=e/8|0;t[i]|=n,t[i+1]|=n>>8,t[i+2]|=n>>16},Rl=function(t,e){for(var n=[],i=0;i<t.length;++i)t[i]&&n.push({s:i,f:t[i]});var r=n.length,s=n.slice();if(!r)return{t:qf,l:0};if(r==1){var o=new qt(n[0].s+1);return o[n[0].s]=1,{t:o,l:1}}n.sort(function(A,C){return A.f-C.f}),n.push({s:-1,f:25001});var a=n[0],l=n[1],c=0,u=1,d=2;for(n[0]={s:-1,f:a.f+l.f,l:a,r:l};u!=r-1;)a=n[n[c].f<n[d].f?c++:d++],l=n[c!=u&&n[c].f<n[d].f?c++:d++],n[u++]={s:-1,f:a.f+l.f,l:a,r:l};for(var p=s[0].s,i=1;i<r;++i)s[i].s>p&&(p=s[i].s);var m=new dn(p+1),x=dc(n[u-1],m,0);if(x>e){var i=0,v=0,g=x-e,h=1<<g;for(s.sort(function(C,b){return m[b.s]-m[C.s]||C.f-b.f});i<r;++i){var y=s[i].s;if(m[y]>e)v+=h-(1<<x-m[y]),m[y]=e;else break}for(v>>=g;v>0;){var _=s[i].s;m[_]<e?v-=1<<e-m[_]++-1:++i}for(;i>=0&&v;--i){var S=s[i].s;m[S]==e&&(--m[S],++v)}x=e}return{t:new qt(m),l:x}},dc=function(t,e,n){return t.s==-1?Math.max(dc(t.l,e,n+1),dc(t.r,e,n+1)):e[t.s]=n},Rh=function(t){for(var e=t.length;e&&!t[--e];);for(var n=new dn(++e),i=0,r=t[0],s=1,o=function(l){n[i++]=l},a=1;a<=e;++a)if(t[a]==r&&a!=e)++s;else{if(!r&&s>2){for(;s>138;s-=138)o(32754);s>2&&(o(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(o(r),--s;s>6;s-=6)o(8304);s>2&&(o(s-3<<5|8208),s=0)}for(;s--;)o(r);s=1,r=t[a]}return{c:n.subarray(0,i),n:e}},_s=function(t,e){for(var n=0,i=0;i<e.length;++i)n+=t[i]*e[i];return n},Yf=function(t,e,n){var i=n.length,r=Xf(e+2);t[r]=i&255,t[r+1]=i>>8,t[r+2]=t[r]^255,t[r+3]=t[r+1]^255;for(var s=0;s<i;++s)t[r+s+4]=n[s];return(r+4+i)*8},Nh=function(t,e,n,i,r,s,o,a,l,c,u){ni(e,u++,n),++r[256];for(var d=Rl(r,15),p=d.t,m=d.l,x=Rl(s,15),v=x.t,g=x.l,h=Rh(p),y=h.c,_=h.n,S=Rh(v),A=S.c,C=S.n,b=new dn(19),R=0;R<y.length;++R)++b[y[R]&31];for(var R=0;R<A.length;++R)++b[A[R]&31];for(var E=Rl(b,7),M=E.t,N=E.l,I=19;I>4&&!M[Ch[I-1]];--I);var D=c+5<<3,O=_s(r,dr)+_s(s,ca)+o,k=_s(r,p)+_s(s,v)+o+14+3*I+_s(b,M)+2*b[16]+3*b[17]+7*b[18];if(l>=0&&D<=O&&D<=k)return Yf(e,u,t.subarray(l,l+c));var U,V,P,$;if(ni(e,u,1+(k<O)),u+=2,k<O){U=Ws(p,m,0),V=p,P=Ws(v,g,0),$=v;var q=Ws(M,N,0);ni(e,u,_-257),ni(e,u+5,C-1),ni(e,u+10,I-4),u+=14;for(var R=0;R<I;++R)ni(e,u+3*R,M[Ch[R]]);u+=3*I;for(var ne=[y,A],xe=0;xe<2;++xe)for(var Le=ne[xe],R=0;R<Le.length;++R){var Y=Le[R]&31;ni(e,u,q[Y]),u+=M[Y],Y>15&&(ni(e,u,Le[R]>>5&127),u+=Le[R]>>12)}}else U=c_,V=dr,P=u_,$=ca;for(var R=0;R<a;++R){var K=i[R];if(K>255){var Y=K>>18&31;vs(e,u,U[Y+257]),u+=V[Y+257],Y>7&&(ni(e,u,K>>23&31),u+=kc[Y]);var le=K&31;vs(e,u,P[le]),u+=$[le],le>3&&(vs(e,u,K>>5&8191),u+=Oc[le])}else vs(e,u,U[K]),u+=V[K]}return vs(e,u,U[256]),u+V[256]},d_=new Fc([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),qf=new qt(0),h_=function(t,e,n,i,r,s){var o=s.z||t.length,a=new qt(i+o+5*(1+Math.ceil(o/7e3))+r),l=a.subarray(i,a.length-r),c=s.l,u=(s.r||0)&7;if(e){u&&(l[0]=s.r>>3);for(var d=d_[e-1],p=d>>13,m=d&8191,x=(1<<n)-1,v=s.p||new dn(32768),g=s.h||new dn(x+1),h=Math.ceil(n/3),y=2*h,_=function(Be){return(t[Be]^t[Be+1]<<h^t[Be+2]<<y)&x},S=new Fc(25e3),A=new dn(288),C=new dn(32),b=0,R=0,E=s.i||0,M=0,N=s.w||0,I=0;E+2<o;++E){var D=_(E),O=E&32767,k=g[D];if(v[O]=k,g[D]=O,N<=E){var U=o-E;if((b>7e3||M>24576)&&(U>423||!c)){u=Nh(t,l,0,S,A,C,R,M,I,E-I,u),M=b=R=0,I=E;for(var V=0;V<286;++V)A[V]=0;for(var V=0;V<30;++V)C[V]=0}var P=2,$=0,q=m,ne=O-k&32767;if(U>2&&D==_(E-ne))for(var xe=Math.min(p,U)-1,Le=Math.min(32767,E),Y=Math.min(258,U);ne<=Le&&--q&&O!=k;){if(t[E+P]==t[E+P-ne]){for(var K=0;K<Y&&t[E+K]==t[E+K-ne];++K);if(K>P){if(P=K,$=ne,K>xe)break;for(var le=Math.min(ne,K-2),de=0,V=0;V<le;++V){var Te=E-ne+V&32767,Ce=v[Te],Ue=Te-Ce&32767;Ue>de&&(de=Ue,k=Te)}}}O=k,k=v[O],ne+=O-k&32767}if($){S[M++]=268435456|cc[P]<<18|Ah[$];var tt=cc[P]&31,F=Ah[$]&31;R+=kc[tt]+Oc[F],++A[257+tt],++C[F],N=E+P,++b}else S[M++]=t[E],++A[t[E]]}}for(E=Math.max(E,N);E<o;++E)S[M++]=t[E],++A[t[E]];u=Nh(t,l,c,S,A,C,R,M,I,E-I,u),c||(s.r=u&7|l[u/8|0]<<3,u-=7,s.h=g,s.p=v,s.i=E,s.w=N)}else{for(var E=s.w||0;E<o+c;E+=65535){var We=E+65535;We>=o&&(l[u/8|0]=c,We=o),u=Yf(l,u+1,t.subarray(E,We))}s.i=o}return $f(a,0,i+Xf(u)+r)},EA=function(){for(var t=new Int32Array(256),e=0;e<256;++e){for(var n=e,i=9;--i;)n=(n&1&&-306674912)^n>>>1;t[e]=n}return t}(),wA=function(){var t=-1;return{p:function(e){for(var n=t,i=0;i<e.length;++i)n=EA[n&255^e[i]]^n>>>8;t=n},d:function(){return~t}}},f_=function(t,e,n,i,r){if(!r&&(r={l:1},e.dictionary)){var s=e.dictionary.subarray(-32768),o=new qt(s.length+t.length);o.set(s),o.set(t,s.length),t=o,r.w=s.length}return h_(t,e.level==null?6:e.level,e.mem==null?r.l?Math.ceil(Math.max(8,Math.min(13,Math.log(t.length)))*1.5):20:12+e.mem,n,i,r)},Kf=function(t,e){var n={};for(var i in t)n[i]=t[i];for(var i in e)n[i]=e[i];return n},Ug=function(t,e,n){for(var i=t(),r=t.toString(),s=r.slice(r.indexOf("[")+1,r.lastIndexOf("]")).replace(/\s+/g,"").split(","),o=0;o<i.length;++o){var a=i[o],l=s[o];if(typeof a=="function"){e+=";"+l+"=";var c=a.toString();if(a.prototype)if(c.indexOf("[native code]")!=-1){var u=c.indexOf(" ",8)+1;e+=c.slice(u,c.indexOf("(",u))}else{e+=c;for(var d in a.prototype)e+=";"+l+".prototype."+d+"="+a.prototype[d].toString()}else e+=c}else n[l]=a}return e},cl=[],TA=function(t){var e=[];for(var n in t)t[n].buffer&&e.push((t[n]=new t[n].constructor(t[n])).buffer);return e},bA=function(t,e,n,i){if(!cl[n]){for(var r="",s={},o=t.length-1,a=0;a<o;++a)r=Ug(t[a],r,s);cl[n]={c:Ug(t[o],r,s),e:s}}var l=Kf({},cl[n].e);return _A(cl[n].c+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+e.toString()+"}",n,l,TA(l),i)},CA=function(){return[qt,dn,Fc,kc,Oc,Ch,cc,Ah,c_,dr,u_,ca,uc,d_,qf,Ws,ni,vs,Rl,dc,Rh,_s,Yf,Nh,Xf,$f,h_,f_,Zf,p_]},p_=function(t){return postMessage(t,[t.buffer])},AA=function(t,e,n,i,r,s){var o=bA(n,i,r,function(a,l){o.terminate(),s(a,l)});return o.postMessage([t,e],e.consume?[t.buffer]:[]),function(){o.terminate()}},Ot=function(t,e,n){for(;n;++e)t[e]=n,n>>>=8};function RA(t,e,n){return n||(n=e,e={}),typeof n!="function"&&so(7),AA(t,e,[CA],function(i){return p_(Zf(i.data[0],i.data[1]))},0,n)}function Zf(t,e){return f_(t,e||{},0,0)}var m_=function(t,e,n,i){for(var r in t){var s=t[r],o=e+r,a=i;Array.isArray(s)&&(a=Kf(i,s[1]),s=s[0]),ArrayBuffer.isView(s)?n[o]=[s,a]:(n[o+="/"]=[new qt(0),a],m_(s,o,n,i))}},Fg=typeof TextEncoder<"u"&&new TextEncoder,NA=typeof TextDecoder<"u"&&new TextDecoder,PA=0;try{NA.decode(qf,{stream:!0}),PA=1}catch{}function kg(t,e){var n;if(Fg)return Fg.encode(t);for(var i=t.length,r=new qt(t.length+(t.length>>1)),s=0,o=function(c){r[s++]=c},n=0;n<i;++n){if(s+5>r.length){var a=new qt(s+8+(i-n<<1));a.set(r),r=a}var l=t.charCodeAt(n);l<128||e?o(l):l<2048?(o(192|l>>6),o(128|l&63)):l>55295&&l<57344?(l=65536+(l&1047552)|t.charCodeAt(++n)&1023,o(240|l>>18),o(128|l>>12&63),o(128|l>>6&63),o(128|l&63)):(o(224|l>>12),o(128|l>>6&63),o(128|l&63))}return $f(r,0,s)}var Ph=function(t){var e=0;if(t)for(var n in t){var i=t[n].length;i>65535&&so(9),e+=i+4}return e},Og=function(t,e,n,i,r,s,o,a){var l=i.length,c=n.extra,u=a&&a.length,d=Ph(c);Ot(t,e,o!=null?33639248:67324752),e+=4,o!=null&&(t[e++]=20,t[e++]=n.os),t[e]=20,e+=2,t[e++]=n.flag<<1|(s<0&&8),t[e++]=r&&8,t[e++]=n.compression&255,t[e++]=n.compression>>8;var p=new Date(n.mtime==null?Date.now():n.mtime),m=p.getFullYear()-1980;if((m<0||m>119)&&so(10),Ot(t,e,m<<25|p.getMonth()+1<<21|p.getDate()<<16|p.getHours()<<11|p.getMinutes()<<5|p.getSeconds()>>1),e+=4,s!=-1&&(Ot(t,e,n.crc),Ot(t,e+4,s<0?-s-2:s),Ot(t,e+8,n.size)),Ot(t,e+12,l),Ot(t,e+14,d),e+=16,o!=null&&(Ot(t,e,u),Ot(t,e+6,n.attrs),Ot(t,e+10,o),e+=14),t.set(i,e),e+=l,d)for(var x in c){var v=c[x],g=v.length;Ot(t,e,+x),Ot(t,e+2,g),t.set(v,e+4),e+=4+g}return u&&(t.set(a,e),e+=u),e},LA=function(t,e,n,i,r){Ot(t,e,101010256),Ot(t,e+8,n),Ot(t,e+10,n),Ot(t,e+12,i),Ot(t,e+16,r)};function DA(t,e,n){n||(n=e,e={}),typeof n!="function"&&so(7);var i={};m_(t,"",i,e);var r=Object.keys(i),s=r.length,o=0,a=0,l=s,c=new Array(s),u=[],d=function(){for(var g=0;g<u.length;++g)u[g]()},p=function(g,h){Bg(function(){n(g,h)})};Bg(function(){p=n});var m=function(){var g=new qt(a+22),h=o,y=a-o;a=0;for(var _=0;_<l;++_){var S=c[_];try{var A=S.c.length;Og(g,a,S,S.f,S.u,A);var C=30+S.f.length+Ph(S.extra),b=a+C;g.set(S.c,b),Og(g,o,S,S.f,S.u,A,a,S.m),o+=16+C+(S.m?S.m.length:0),a=b+A}catch(R){return p(R,null)}}LA(g,o,c.length,y,h),p(null,g)};s||m();for(var x=function(g){var h=r[g],y=i[h],_=y[0],S=y[1],A=wA(),C=_.length;A.p(_);var b=kg(h),R=b.length,E=S.comment,M=E&&kg(E),N=M&&M.length,I=Ph(S.extra),D=S.level==0?0:8,O=function(k,U){if(k)d(),p(k,null);else{var V=U.length;c[g]=Kf(S,{size:C,crc:A.d(),c:U,f:b,m:M,u:R!=h.length||M&&E.length!=N,compression:D}),o+=30+R+I+V,a+=76+2*(R+I)+(N||0)+V,--s||m()}};if(R>65535&&O(so(11,0,1),null),!D)O(null,_);else if(C<16e4)try{O(null,Zf(_,S))}catch(k){O(k,null)}else u.push(RA(_,S,O))},v=0;v<l;++v)x(v);return d}var Bg=typeof queueMicrotask=="function"?queueMicrotask:typeof setTimeout=="function"?setTimeout:function(t){t()};const Is={STRUCT:1,EXTENSION:3,TEXTURE_NATIVE:21,TEXTURE_DICTIONARY:22},IA=402915327,UA=8,zg=21;class Go{constructor(){An(this,"chunks",[]);An(this,"_size",0)}get size(){return this._size}writeUint8(e){const n=new Uint8Array(1);n[0]=e&255,this.chunks.push(n),this._size+=1}writeUint16LE(e){const n=new Uint8Array(2);n[0]=e&255,n[1]=e>>8&255,this.chunks.push(n),this._size+=2}writeUint32LE(e){const n=new Uint8Array(4);new DataView(n.buffer).setUint32(0,e>>>0,!0),this.chunks.push(n),this._size+=4}writeInt32LE(e){const n=new Uint8Array(4);new DataView(n.buffer).setInt32(0,e,!0),this.chunks.push(n),this._size+=4}writeFloat32LE(e){const n=new Uint8Array(4);new DataView(n.buffer).setFloat32(0,e,!0),this.chunks.push(n),this._size+=4}writeFixedString(e,n){const i=new Uint8Array(n);for(let r=0;r<Math.min(e.length,n);r++)i[r]=e.charCodeAt(r)&255;this.chunks.push(i),this._size+=n}writeBytes(e){this.chunks.push(e),this._size+=e.length}writeChunk(e,n){this.writeUint32LE(e),this.writeUint32LE(n.length),this.writeUint32LE(IA),this.writeBytes(n)}toUint8Array(){const e=new Uint8Array(this._size);let n=0;for(const i of this.chunks)e.set(i,n),n+=i.length;return e}}function FA(t,e,n){const i=t.getContext("2d");if(!i)return new Uint8Array(e*n*4);const r=i.getImageData(0,0,e,n);return new Uint8Array(r.data.buffer)}function kA(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n+=4)e[n+0]=t[n+2],e[n+1]=t[n+1],e[n+2]=t[n+0],e[n+3]=t[n+3];return e}function OA(t,e,n,i){const r=[t];let s=e,o=n,a=t;for(let l=1;l<i;l++){const c=Math.max(1,s>>1),u=Math.max(1,o>>1),d=new Uint8Array(c*u*4);for(let p=0;p<u;p++)for(let m=0;m<c;m++){const x=(p*2*s+m*2)*4,v=(p*2*s+m*2+1)*4,g=((p*2+1)*s+m*2)*4,h=((p*2+1)*s+m*2+1)*4,y=(p*c+m)*4;for(let _=0;_<4;_++)d[y+_]=Math.round((a[x+_]+a[v+_]+a[g+_]+a[h+_])/4)}r.push(d),a=d,s=c,o=u}return r}function BA(t,e,n,i){const r=t.width,s=t.height,o=FA(t,r,s),a=kA(o),l=OA(a,r,s,i),c=new Go;c.writeUint32LE(UA),c.writeUint8(2),c.writeUint8(1),c.writeUint8(1),c.writeUint8(0),c.writeFixedString(e,32),c.writeFixedString(n,32),c.writeUint32LE(zg),c.writeUint32LE(zg),c.writeUint16LE(r),c.writeUint16LE(s),c.writeUint8(32),c.writeUint8(i),c.writeUint8(0),c.writeUint8(1),c.writeUint8(0),c.writeUint8(0),c.writeUint8(0);for(const m of l)c.writeUint32LE(m.length),c.writeBytes(m);const u=c.toUint8Array(),d=new Uint8Array(0),p=new Go;return p.writeChunk(Is.STRUCT,u),p.writeChunk(Is.EXTENSION,d),p.toUint8Array()}function zA(t){const{canvas:e,textureName:n="livery_1",alphaName:i="",mipLevels:r=Math.floor(Math.log2(Math.min(e.width,e.height)))+1}=t,s=1,o=0,a=new Go;a.writeUint16LE(s),a.writeUint16LE(o);const l=a.toUint8Array(),c=BA(e,n,i,r),u=new Uint8Array(0),d=new Go;d.writeChunk(Is.STRUCT,l),d.writeChunk(Is.TEXTURE_NATIVE,c),d.writeChunk(Is.EXTENSION,u);const p=new Go;return p.writeChunk(Is.TEXTURE_DICTIONARY,d.toUint8Array()),p.toUint8Array()}async function VA(t){return new Promise((e,n)=>{t.toBlob(i=>{if(!i){n(new Error("canvas.toBlob failed"));return}i.arrayBuffer().then(r=>e(new Uint8Array(r))).catch(n)},"image/png")})}function jA(t,e,n){const i=t.vehicleTxdName??"vehicle.txd",r=t.txdSlotName??"livery_1",s=["============================================================","  GTA San Andreas Livery Package",`  Project: ${t.project.name}`,`  Resolution: ${t.resolution}×${t.resolution} px`,`  Created: ${new Date().toISOString()}`,"============================================================","","INSTALLATION","────────────",`1. Open the game's TXD file "${i}" with TXD Workshop`,"   or Magic.TXD.","",`2. Import "${n}" OR import the PNG file "${e}"`,`   into slot "${r}" inside the TXD file.`,"","3. Save the TXD and replace the original in:","   GTA San Andreas/models/gta3.img (use IMG Tool / Alci's IMG Editor)","","4. Launch the game. The livery texture will appear on the",`   vehicle matching material slot "${r}".`,"","NOTES","─────","• The .txd file was encoded as D3D8 / A8R8G8B8 (32-bit RGBA)","  which is the native GTA SA PC format.",`• Mip-maps: ${Math.floor(Math.log2(t.resolution))+1} levels generated via box filter.`,"• The PNG is identical in appearance and can be used as a","  lossless reference or for editing.","","FILES","─────",`  ${e}   — PNG texture (import this or the .txd)`,`  ${n}    — RenderWare .txd (D3D8, with mipmaps)`,"  livery_meta.json    — machine-readable metadata","","Made with GTA SA Livery Studio — Phase 2C","https://github.com/","============================================================"].join(`\r
`);return new TextEncoder().encode(s)}function GA(t,e,n){const i={version:"2c.0",project:{id:t.project.id,name:t.project.name,version:t.project.version,createdAt:t.project.createdAt,updatedAt:t.project.updatedAt},texture:{resolution:t.resolution,format:"A8R8G8B8",mipLevels:Math.floor(Math.log2(t.resolution))+1,txdSlotName:t.txdSlotName??"livery_1",vehicleTxdHint:t.vehicleTxdName??null},files:{png:e,txd:n},exportedAt:new Date().toISOString()};return new TextEncoder().encode(JSON.stringify(i,null,2))}async function HA(t){const e=t.project.name.replace(/[^a-zA-Z0-9_-]/g,"_").toLowerCase(),n=`livery_${e}_${t.resolution}px.png`,i=`livery_${e}_${t.resolution}px.txd`,r=`livery_${e}_${t.resolution}px.gslpkg`,s=await la(t.layers,t.resolution),o=await VA(s),a=zA({canvas:s,textureName:(t.txdSlotName??"livery_1").substring(0,31),alphaName:""}),l=jA(t,n,i),c=GA(t,n,i),u={[n]:[o,{level:0}],[i]:[a,{level:0}],"README.txt":[l,{level:9}],"livery_meta.json":[c,{level:9}]},d=await new Promise((m,x)=>{DA(u,{level:0},(v,g)=>{v?x(v):m(g)})});return{blob:new Blob([d],{type:"application/zip"}),filename:r,stats:{pngBytes:o.length,txdBytes:a.length,zipBytes:d.length,resolution:t.resolution}}}function WA(t){const e=URL.createObjectURL(t.blob),n=document.createElement("a");n.href=e,n.download=t.filename,n.click(),setTimeout(()=>URL.revokeObjectURL(e),1e4)}const XA=[{id:"solid",label:"Solid"},{id:"gradient",label:"Gradient"},{id:"racing",label:"Racing"},{id:"camo",label:"Camo"},{id:"pattern",label:"Pattern"}],$A=()=>{const{isExportModalOpen:t,setExportModalOpen:e}=Jn(),{textureResolution:n,layers:i,setLayerContent:r,activeLayerId:s}=ci(),{currentProject:o}=Qn(),[a,l]=ce.useState("texture"),[c,u]=ce.useState("png"),[d,p]=ce.useState(n),[m,x]=ce.useState("livery_1"),[v,g]=ce.useState(""),[h,y]=ce.useState(!1),[_,S]=ce.useState(null),[A,C]=ce.useState("solid"),[b,R]=ce.useState(null),[E,M]=ce.useState(null),N=xA.filter(k=>k.category===A);if(!t)return null;const I=async()=>{y(!0);try{const k=await la(i,d);i_(k,`livery_${d}.${c}`,c)}finally{y(!1),e(!1)}},D=async()=>{y(!0),S(null);try{const k=await HA({layers:i,resolution:d,project:o,txdSlotName:m||"livery_1",vehicleTxdName:v||void 0});S(k.stats),WA(k)}finally{y(!1)}},O=ce.useCallback(async k=>{R(k.id);try{const U=await vA(k,n);r(s,U),M(k.id),setTimeout(()=>M(null),2e3)}finally{R(null)}},[s,n,r]);return f.jsx("div",{className:"fixed inset-0 bg-black/75 backdrop-blur-sm z-50 flex items-center justify-center p-6",children:f.jsxs("div",{className:"bg-studio-panel border border-studio-border rounded-xl shadow-2xl w-[500px] max-h-[90vh] flex flex-col overflow-hidden",children:[f.jsxs("div",{className:"flex items-center justify-between px-5 py-3.5 border-b border-studio-border flex-shrink-0",children:[f.jsxs("h2",{className:"font-bold text-studio-text flex items-center space-x-2 text-sm",children:[f.jsx(kr,{className:"w-4 h-4 text-studio-accent"}),f.jsx("span",{children:"Export & Presets"})]}),f.jsx("button",{onClick:()=>e(!1),className:"p-1 rounded text-studio-muted hover:text-studio-text hover:bg-studio-secondary transition",children:f.jsx(yv,{className:"w-4 h-4"})})]}),f.jsx("div",{className:"flex border-b border-studio-border flex-shrink-0",children:[{id:"texture",label:"Texture",icon:Wd},{id:"package",label:"GTA Package",icon:vu},{id:"presets",label:"Presets",icon:ec}].map(({id:k,label:U,icon:V})=>f.jsxs("button",{onClick:()=>l(k),className:`flex-1 py-2.5 text-xs font-semibold flex items-center justify-center space-x-1.5 transition border-b-2 ${a===k?"border-studio-accent text-studio-accent":"border-transparent text-studio-muted hover:text-studio-text"}`,children:[f.jsx(V,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:U})]},k))}),f.jsxs("div",{className:"flex-1 overflow-y-auto",children:[a==="texture"&&f.jsxs("div",{className:"p-5 space-y-5",children:[f.jsxs("div",{className:"flex items-start space-x-2 p-3 bg-studio-success/10 border border-studio-success/30 rounded-lg text-xs",children:[f.jsx(Af,{className:"w-4 h-4 text-studio-success flex-shrink-0 mt-0.5"}),f.jsx("p",{className:"text-studio-muted",children:"Visible layers will be composited — UV coordinates are never modified."})]}),f.jsxs("div",{className:"space-y-2",children:[f.jsx("label",{className:"text-xs font-semibold text-studio-muted uppercase tracking-wide block",children:"Texture Resolution"}),f.jsx("div",{className:"grid grid-cols-4 gap-1.5",children:[1024,2048,4096,8192].map(k=>f.jsx("button",{onClick:()=>p(k),className:`py-2 rounded text-xs font-medium border transition ${d===k?"bg-studio-accent text-white border-studio-accent shadow":"bg-studio-secondary text-studio-muted border-studio-border hover:text-studio-text"}`,children:k},k))}),f.jsxs("p",{className:"text-[10px] text-studio-muted",children:["Output: ",f.jsxs("strong",{className:"text-studio-text",children:[d," × ",d," px"]})]})]}),f.jsxs("div",{className:"space-y-2",children:[f.jsx("label",{className:"text-xs font-semibold text-studio-muted uppercase tracking-wide block",children:"File Format"}),f.jsx("div",{className:"flex items-center space-x-2",children:["png","tga"].map(k=>f.jsx("button",{onClick:()=>u(k),className:`flex-1 py-2 rounded text-xs font-semibold border transition uppercase ${c===k?"bg-studio-accent text-white border-studio-accent shadow":"bg-studio-secondary text-studio-muted border-studio-border hover:text-studio-text"}`,children:k},k))})]}),f.jsxs("button",{onClick:()=>void I(),disabled:h,className:"w-full py-2.5 bg-studio-accent hover:bg-studio-accentHover text-white font-bold rounded-lg flex items-center justify-center space-x-2 transition shadow disabled:opacity-50",children:[h?f.jsx(xu,{className:"w-4 h-4 animate-spin"}):f.jsx(Wd,{className:"w-4 h-4"}),f.jsxs("span",{children:["Export ",d,"px ",c.toUpperCase()]})]})]}),a==="package"&&f.jsxs("div",{className:"p-5 space-y-5",children:[f.jsxs("div",{className:"flex items-start space-x-2 p-3 bg-studio-accent/10 border border-studio-accent/30 rounded-lg text-xs",children:[f.jsx(vu,{className:"w-4 h-4 text-studio-accent flex-shrink-0 mt-0.5"}),f.jsxs("p",{className:"text-studio-muted",children:["Exports a ",f.jsx("strong",{className:"text-studio-text",children:".gslpkg"})," ZIP containing a PNG texture, a GTA SA-compatible ",f.jsx("strong",{className:"text-studio-text",children:".txd"})," (D3D8, mipmapped), and installation instructions."]})]}),f.jsxs("div",{className:"space-y-2",children:[f.jsx("label",{className:"text-xs font-semibold text-studio-muted uppercase tracking-wide block",children:"Texture Resolution"}),f.jsxs("div",{className:"grid grid-cols-4 gap-1.5",children:[[1024,2048,4096].map(k=>f.jsx("button",{onClick:()=>p(k),className:`py-2 rounded text-xs font-medium border transition ${d===k?"bg-studio-accent text-white border-studio-accent shadow":"bg-studio-secondary text-studio-muted border-studio-border hover:text-studio-text"}`,children:k},k)),f.jsx("div",{className:"py-2 rounded text-xs font-medium border border-studio-border text-center text-studio-muted/50 bg-studio-secondary/50",title:"8192px not recommended for TXD",children:"8192"})]})]}),f.jsxs("div",{className:"space-y-1.5",children:[f.jsxs("label",{className:"text-xs font-semibold text-studio-muted uppercase tracking-wide block",children:["TXD Texture Slot Name",f.jsx("span",{className:"ml-2 font-normal normal-case text-[10px] text-studio-muted/70",children:"(max 31 chars)"})]}),f.jsx("input",{type:"text",value:m,maxLength:31,onChange:k=>x(k.target.value),placeholder:"livery_1",className:"w-full bg-studio-secondary border border-studio-border rounded px-3 py-2 text-xs text-studio-text focus:border-studio-accent outline-none font-mono"}),f.jsx("p",{className:"text-[10px] text-studio-muted",children:"The texture name inside the .txd that GTA SA references."})]}),f.jsxs("div",{className:"space-y-1.5",children:[f.jsxs("label",{className:"text-xs font-semibold text-studio-muted uppercase tracking-wide block",children:["Target Vehicle TXD",f.jsx("span",{className:"ml-2 font-normal normal-case text-[10px] text-studio-muted/70",children:"(optional, for README)"})]}),f.jsx("input",{type:"text",value:v,onChange:k=>g(k.target.value),placeholder:"e.g. infernus.txd",className:"w-full bg-studio-secondary border border-studio-border rounded px-3 py-2 text-xs text-studio-text focus:border-studio-accent outline-none font-mono"})]}),_&&f.jsxs("div",{className:"flex items-center space-x-1.5 p-3 bg-studio-success/10 border border-studio-success/30 rounded-lg text-[11px]",children:[f.jsx(uv,{className:"w-4 h-4 text-studio-success flex-shrink-0"}),f.jsxs("div",{className:"text-studio-muted space-x-3",children:[f.jsxs("span",{children:["PNG: ",f.jsxs("strong",{className:"text-studio-text",children:[(_.pngBytes/1024).toFixed(1)," KB"]})]}),f.jsxs("span",{children:["TXD: ",f.jsxs("strong",{className:"text-studio-text",children:[(_.txdBytes/1024).toFixed(1)," KB"]})]}),f.jsxs("span",{children:["ZIP: ",f.jsxs("strong",{className:"text-studio-text",children:[(_.zipBytes/1024).toFixed(1)," KB"]})]})]})]}),f.jsxs("button",{onClick:()=>void D(),disabled:h,className:"w-full py-2.5 bg-studio-accent hover:bg-studio-accentHover text-white font-bold rounded-lg flex items-center justify-center space-x-2 transition shadow disabled:opacity-50",children:[h?f.jsx(xu,{className:"w-4 h-4 animate-spin"}):f.jsx(vu,{className:"w-4 h-4"}),f.jsx("span",{children:"Export .gslpkg Package"}),f.jsx(cv,{className:"w-3.5 h-3.5"})]})]}),a==="presets"&&f.jsxs("div",{className:"p-4 space-y-3",children:[f.jsxs("p",{className:"text-xs text-studio-muted",children:["Apply a built-in paint preset to the ",f.jsx("strong",{className:"text-studio-text",children:"active layer"}),". This replaces the current layer content."]}),f.jsx("div",{className:"flex flex-wrap gap-1.5",children:XA.map(k=>f.jsx("button",{onClick:()=>C(k.id),className:`px-2.5 py-1 rounded text-[11px] font-medium border transition ${A===k.id?"bg-studio-accent text-white border-studio-accent":"bg-studio-secondary text-studio-muted border-studio-border hover:text-studio-text"}`,children:k.label},k.id))}),f.jsx("div",{className:"grid grid-cols-2 gap-2",children:N.map(k=>{const U=b===k.id,V=E===k.id;return f.jsxs("button",{onClick:()=>void O(k),disabled:b!==null,className:`group flex items-center space-x-3 px-3 py-2.5 rounded-lg border text-xs text-left transition ${V?"border-studio-success bg-studio-success/10 text-studio-success":"border-studio-border bg-studio-secondary hover:border-studio-accent hover:bg-studio-accent/5 text-studio-text"} disabled:opacity-60`,children:[f.jsx("span",{className:"text-lg flex-shrink-0",children:k.icon}),f.jsxs("div",{className:"flex-1 min-w-0",children:[f.jsx("div",{className:"font-semibold truncate text-[11px]",children:V?"✓ Applied!":k.name}),f.jsx("div",{className:"text-[9px] text-studio-muted capitalize",children:k.category})]}),U&&f.jsx(xu,{className:"w-3.5 h-3.5 animate-spin flex-shrink-0"})]},k.id)})})]})]})]})})},YA=()=>{const{undo:t,redo:e,setActiveTool:n,layers:i,textureResolution:r}=ci(),{setActiveTab:s}=Jn(),{saveProject:o,exportProjectFile:a,syncEditorState:l}=Qn(),c=ce.useRef(JSON.stringify({layers:i,textureResolution:r}));ce.useEffect(()=>{JSON.stringify({layers:i,textureResolution:r})!==c.current&&l(i,r)},[i,r,l]);const u=ce.useCallback(d=>{var h;const p=d.target;if(p.tagName==="INPUT"||p.tagName==="TEXTAREA")return;const x=d.ctrlKey||d.metaKey;if(x&&!d.shiftKey&&d.key==="s"){d.preventDefault(),o();return}if(x&&d.shiftKey&&d.key==="S"){d.preventDefault(),a();return}if(x&&d.key==="z"){d.preventDefault(),t();return}if(x&&(d.key==="y"||d.shiftKey&&d.key==="Z")){d.preventDefault(),e();return}if(x&&d.key==="o"){d.preventDefault(),(h=document.querySelector('input[accept=".gslp,.json"]'))==null||h.click();return}if(x)return;const g={v:"select",g:"move",r:"rotate",s:"scale",b:"brush",e:"eraser",u:"rectangle",t:"text",i:"image",k:"eyedropper"}[d.key.toLowerCase()];if(g){n(g);return}d.key==="f"||d.key,d.key==="1"&&s("3d"),d.key==="2"&&s("uv"),d.key==="3"&&s("split"),d.key==="4"&&s("materials"),d.key==="5"&&s("diagnostic"),d.key==="6"&&s("livery"),d.key==="7"&&s("project")},[t,e,n,s,o,a]);return ce.useEffect(()=>(window.addEventListener("keydown",u),()=>window.removeEventListener("keydown",u)),[u]),f.jsxs("div",{className:"w-screen h-screen bg-studio-bg text-studio-text flex flex-col overflow-hidden font-sans antialiased",children:[f.jsx(gA,{}),f.jsx($A,{}),f.jsx(sM,{}),f.jsxs("div",{className:"flex-1 flex overflow-hidden",children:[f.jsx(aM,{}),f.jsx(dA,{}),f.jsx(hA,{})]}),f.jsx(fA,{})]})};Ku.createRoot(document.getElementById("root")).render(f.jsx(Qg.StrictMode,{children:f.jsx(YA,{})}));
