(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(r){if(r.ep)return;r.ep=!0;const l=n(r);fetch(r.href,l)}})();function Wy(c){return c&&c.__esModule&&Object.prototype.hasOwnProperty.call(c,"default")?c.default:c}var ph={exports:{}},jo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $g;function qy(){if($g)return jo;$g=1;var c=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(a,r,l){var u=null;if(l!==void 0&&(u=""+l),r.key!==void 0&&(u=""+r.key),"key"in r){l={};for(var h in r)h!=="key"&&(l[h]=r[h])}else l=r;return r=l.ref,{$$typeof:c,type:a,key:u,ref:r!==void 0?r:null,props:l}}return jo.Fragment=e,jo.jsx=n,jo.jsxs=n,jo}var ev;function Xy(){return ev||(ev=1,ph.exports=qy()),ph.exports}var Te=Xy(),mh={exports:{}},st={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tv;function Yy(){if(tv)return st;tv=1;var c=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function v(B){return B===null||typeof B!="object"?null:(B=_&&B[_]||B["@@iterator"],typeof B=="function"?B:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,E={};function x(B,$,oe){this.props=B,this.context=$,this.refs=E,this.updater=oe||S}x.prototype.isReactComponent={},x.prototype.setState=function(B,$){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,$,"setState")},x.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function y(){}y.prototype=x.prototype;function T(B,$,oe){this.props=B,this.context=$,this.refs=E,this.updater=oe||S}var A=T.prototype=new y;A.constructor=T,M(A,x.prototype),A.isPureReactComponent=!0;var D=Array.isArray,I={H:null,A:null,T:null,S:null,V:null},P=Object.prototype.hasOwnProperty;function z(B,$,oe,ye,ee,de){return oe=de.ref,{$$typeof:c,type:B,key:$,ref:oe!==void 0?oe:null,props:de}}function V(B,$){return z(B.type,$,void 0,void 0,void 0,B.props)}function U(B){return typeof B=="object"&&B!==null&&B.$$typeof===c}function w(B){var $={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(oe){return $[oe]})}var F=/\/+/g;function ie(B,$){return typeof B=="object"&&B!==null&&B.key!=null?w(""+B.key):$.toString(36)}function k(){}function Q(B){switch(B.status){case"fulfilled":return B.value;case"rejected":throw B.reason;default:switch(typeof B.status=="string"?B.then(k,k):(B.status="pending",B.then(function($){B.status==="pending"&&(B.status="fulfilled",B.value=$)},function($){B.status==="pending"&&(B.status="rejected",B.reason=$)})),B.status){case"fulfilled":return B.value;case"rejected":throw B.reason}}throw B}function Y(B,$,oe,ye,ee){var de=typeof B;(de==="undefined"||de==="boolean")&&(B=null);var _e=!1;if(B===null)_e=!0;else switch(de){case"bigint":case"string":case"number":_e=!0;break;case"object":switch(B.$$typeof){case c:case e:_e=!0;break;case g:return _e=B._init,Y(_e(B._payload),$,oe,ye,ee)}}if(_e)return ee=ee(B),_e=ye===""?"."+ie(B,0):ye,D(ee)?(oe="",_e!=null&&(oe=_e.replace(F,"$&/")+"/"),Y(ee,$,oe,"",function(Je){return Je})):ee!=null&&(U(ee)&&(ee=V(ee,oe+(ee.key==null||B&&B.key===ee.key?"":(""+ee.key).replace(F,"$&/")+"/")+_e)),$.push(ee)),1;_e=0;var Ae=ye===""?".":ye+":";if(D(B))for(var Fe=0;Fe<B.length;Fe++)ye=B[Fe],de=Ae+ie(ye,Fe),_e+=Y(ye,$,oe,de,ee);else if(Fe=v(B),typeof Fe=="function")for(B=Fe.call(B),Fe=0;!(ye=B.next()).done;)ye=ye.value,de=Ae+ie(ye,Fe++),_e+=Y(ye,$,oe,de,ee);else if(de==="object"){if(typeof B.then=="function")return Y(Q(B),$,oe,ye,ee);throw $=String(B),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return _e}function L(B,$,oe){if(B==null)return B;var ye=[],ee=0;return Y(B,ye,"","",function(de){return $.call(oe,de,ee++)}),ye}function K(B){if(B._status===-1){var $=B._result;$=$(),$.then(function(oe){(B._status===0||B._status===-1)&&(B._status=1,B._result=oe)},function(oe){(B._status===0||B._status===-1)&&(B._status=2,B._result=oe)}),B._status===-1&&(B._status=0,B._result=$)}if(B._status===1)return B._result.default;throw B._result}var j=typeof reportError=="function"?reportError:function(B){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof B=="object"&&B!==null&&typeof B.message=="string"?String(B.message):String(B),error:B});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",B);return}console.error(B)};function he(){}return st.Children={map:L,forEach:function(B,$,oe){L(B,function(){$.apply(this,arguments)},oe)},count:function(B){var $=0;return L(B,function(){$++}),$},toArray:function(B){return L(B,function($){return $})||[]},only:function(B){if(!U(B))throw Error("React.Children.only expected to receive a single React element child.");return B}},st.Component=x,st.Fragment=n,st.Profiler=r,st.PureComponent=T,st.StrictMode=a,st.Suspense=d,st.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,st.__COMPILER_RUNTIME={__proto__:null,c:function(B){return I.H.useMemoCache(B)}},st.cache=function(B){return function(){return B.apply(null,arguments)}},st.cloneElement=function(B,$,oe){if(B==null)throw Error("The argument must be a React element, but you passed "+B+".");var ye=M({},B.props),ee=B.key,de=void 0;if($!=null)for(_e in $.ref!==void 0&&(de=void 0),$.key!==void 0&&(ee=""+$.key),$)!P.call($,_e)||_e==="key"||_e==="__self"||_e==="__source"||_e==="ref"&&$.ref===void 0||(ye[_e]=$[_e]);var _e=arguments.length-2;if(_e===1)ye.children=oe;else if(1<_e){for(var Ae=Array(_e),Fe=0;Fe<_e;Fe++)Ae[Fe]=arguments[Fe+2];ye.children=Ae}return z(B.type,ee,void 0,void 0,de,ye)},st.createContext=function(B){return B={$$typeof:u,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null},B.Provider=B,B.Consumer={$$typeof:l,_context:B},B},st.createElement=function(B,$,oe){var ye,ee={},de=null;if($!=null)for(ye in $.key!==void 0&&(de=""+$.key),$)P.call($,ye)&&ye!=="key"&&ye!=="__self"&&ye!=="__source"&&(ee[ye]=$[ye]);var _e=arguments.length-2;if(_e===1)ee.children=oe;else if(1<_e){for(var Ae=Array(_e),Fe=0;Fe<_e;Fe++)Ae[Fe]=arguments[Fe+2];ee.children=Ae}if(B&&B.defaultProps)for(ye in _e=B.defaultProps,_e)ee[ye]===void 0&&(ee[ye]=_e[ye]);return z(B,de,void 0,void 0,null,ee)},st.createRef=function(){return{current:null}},st.forwardRef=function(B){return{$$typeof:h,render:B}},st.isValidElement=U,st.lazy=function(B){return{$$typeof:g,_payload:{_status:-1,_result:B},_init:K}},st.memo=function(B,$){return{$$typeof:p,type:B,compare:$===void 0?null:$}},st.startTransition=function(B){var $=I.T,oe={};I.T=oe;try{var ye=B(),ee=I.S;ee!==null&&ee(oe,ye),typeof ye=="object"&&ye!==null&&typeof ye.then=="function"&&ye.then(he,j)}catch(de){j(de)}finally{I.T=$}},st.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},st.use=function(B){return I.H.use(B)},st.useActionState=function(B,$,oe){return I.H.useActionState(B,$,oe)},st.useCallback=function(B,$){return I.H.useCallback(B,$)},st.useContext=function(B){return I.H.useContext(B)},st.useDebugValue=function(){},st.useDeferredValue=function(B,$){return I.H.useDeferredValue(B,$)},st.useEffect=function(B,$,oe){var ye=I.H;if(typeof oe=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ye.useEffect(B,$)},st.useId=function(){return I.H.useId()},st.useImperativeHandle=function(B,$,oe){return I.H.useImperativeHandle(B,$,oe)},st.useInsertionEffect=function(B,$){return I.H.useInsertionEffect(B,$)},st.useLayoutEffect=function(B,$){return I.H.useLayoutEffect(B,$)},st.useMemo=function(B,$){return I.H.useMemo(B,$)},st.useOptimistic=function(B,$){return I.H.useOptimistic(B,$)},st.useReducer=function(B,$,oe){return I.H.useReducer(B,$,oe)},st.useRef=function(B){return I.H.useRef(B)},st.useState=function(B){return I.H.useState(B)},st.useSyncExternalStore=function(B,$,oe){return I.H.useSyncExternalStore(B,$,oe)},st.useTransition=function(){return I.H.useTransition()},st.version="19.1.1",st}var nv;function gd(){return nv||(nv=1,mh.exports=Yy()),mh.exports}var fn=gd();const Ky=Wy(fn);var gh={exports:{}},Wo={},vh={exports:{}},_h={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iv;function Zy(){return iv||(iv=1,function(c){function e(L,K){var j=L.length;L.push(K);e:for(;0<j;){var he=j-1>>>1,B=L[he];if(0<r(B,K))L[he]=K,L[j]=B,j=he;else break e}}function n(L){return L.length===0?null:L[0]}function a(L){if(L.length===0)return null;var K=L[0],j=L.pop();if(j!==K){L[0]=j;e:for(var he=0,B=L.length,$=B>>>1;he<$;){var oe=2*(he+1)-1,ye=L[oe],ee=oe+1,de=L[ee];if(0>r(ye,j))ee<B&&0>r(de,ye)?(L[he]=de,L[ee]=j,he=ee):(L[he]=ye,L[oe]=j,he=oe);else if(ee<B&&0>r(de,j))L[he]=de,L[ee]=j,he=ee;else break e}}return K}function r(L,K){var j=L.sortIndex-K.sortIndex;return j!==0?j:L.id-K.id}if(c.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;c.unstable_now=function(){return l.now()}}else{var u=Date,h=u.now();c.unstable_now=function(){return u.now()-h}}var d=[],p=[],g=1,_=null,v=3,S=!1,M=!1,E=!1,x=!1,y=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,A=typeof setImmediate<"u"?setImmediate:null;function D(L){for(var K=n(p);K!==null;){if(K.callback===null)a(p);else if(K.startTime<=L)a(p),K.sortIndex=K.expirationTime,e(d,K);else break;K=n(p)}}function I(L){if(E=!1,D(L),!M)if(n(d)!==null)M=!0,P||(P=!0,ie());else{var K=n(p);K!==null&&Y(I,K.startTime-L)}}var P=!1,z=-1,V=5,U=-1;function w(){return x?!0:!(c.unstable_now()-U<V)}function F(){if(x=!1,P){var L=c.unstable_now();U=L;var K=!0;try{e:{M=!1,E&&(E=!1,T(z),z=-1),S=!0;var j=v;try{t:{for(D(L),_=n(d);_!==null&&!(_.expirationTime>L&&w());){var he=_.callback;if(typeof he=="function"){_.callback=null,v=_.priorityLevel;var B=he(_.expirationTime<=L);if(L=c.unstable_now(),typeof B=="function"){_.callback=B,D(L),K=!0;break t}_===n(d)&&a(d),D(L)}else a(d);_=n(d)}if(_!==null)K=!0;else{var $=n(p);$!==null&&Y(I,$.startTime-L),K=!1}}break e}finally{_=null,v=j,S=!1}K=void 0}}finally{K?ie():P=!1}}}var ie;if(typeof A=="function")ie=function(){A(F)};else if(typeof MessageChannel<"u"){var k=new MessageChannel,Q=k.port2;k.port1.onmessage=F,ie=function(){Q.postMessage(null)}}else ie=function(){y(F,0)};function Y(L,K){z=y(function(){L(c.unstable_now())},K)}c.unstable_IdlePriority=5,c.unstable_ImmediatePriority=1,c.unstable_LowPriority=4,c.unstable_NormalPriority=3,c.unstable_Profiling=null,c.unstable_UserBlockingPriority=2,c.unstable_cancelCallback=function(L){L.callback=null},c.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<L?Math.floor(1e3/L):5},c.unstable_getCurrentPriorityLevel=function(){return v},c.unstable_next=function(L){switch(v){case 1:case 2:case 3:var K=3;break;default:K=v}var j=v;v=K;try{return L()}finally{v=j}},c.unstable_requestPaint=function(){x=!0},c.unstable_runWithPriority=function(L,K){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var j=v;v=L;try{return K()}finally{v=j}},c.unstable_scheduleCallback=function(L,K,j){var he=c.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?he+j:he):j=he,L){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=j+B,L={id:g++,callback:K,priorityLevel:L,startTime:j,expirationTime:B,sortIndex:-1},j>he?(L.sortIndex=j,e(p,L),n(d)===null&&L===n(p)&&(E?(T(z),z=-1):E=!0,Y(I,j-he))):(L.sortIndex=B,e(d,L),M||S||(M=!0,P||(P=!0,ie()))),L},c.unstable_shouldYield=w,c.unstable_wrapCallback=function(L){var K=v;return function(){var j=v;v=K;try{return L.apply(this,arguments)}finally{v=j}}}}(_h)),_h}var av;function Qy(){return av||(av=1,vh.exports=Zy()),vh.exports}var xh={exports:{}},Rn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sv;function Jy(){if(sv)return Rn;sv=1;var c=gd();function e(d){var p="https://react.dev/errors/"+d;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+d+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},r=Symbol.for("react.portal");function l(d,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:r,key:_==null?null:""+_,children:d,containerInfo:p,implementation:g}}var u=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(d,p){if(d==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Rn.createPortal=function(d,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return l(d,p,null,g)},Rn.flushSync=function(d){var p=u.T,g=a.p;try{if(u.T=null,a.p=2,d)return d()}finally{u.T=p,a.p=g,a.d.f()}},Rn.preconnect=function(d,p){typeof d=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,a.d.C(d,p))},Rn.prefetchDNS=function(d){typeof d=="string"&&a.d.D(d)},Rn.preinit=function(d,p){if(typeof d=="string"&&p&&typeof p.as=="string"){var g=p.as,_=h(g,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?a.d.S(d,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:S}):g==="script"&&a.d.X(d,{crossOrigin:_,integrity:v,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Rn.preinitModule=function(d,p){if(typeof d=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);a.d.M(d,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&a.d.M(d)},Rn.preload=function(d,p){if(typeof d=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=h(g,p.crossOrigin);a.d.L(d,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Rn.preloadModule=function(d,p){if(typeof d=="string")if(p){var g=h(p.as,p.crossOrigin);a.d.m(d,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else a.d.m(d)},Rn.requestFormReset=function(d){a.d.r(d)},Rn.unstable_batchedUpdates=function(d,p){return d(p)},Rn.useFormState=function(d,p,g){return u.H.useFormState(d,p,g)},Rn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Rn.version="19.1.1",Rn}var rv;function $y(){if(rv)return xh.exports;rv=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(e){console.error(e)}}return c(),xh.exports=Jy(),xh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ov;function eS(){if(ov)return Wo;ov=1;var c=Qy(),e=gd(),n=$y();function a(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function l(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function u(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function h(t){if(l(t)!==t)throw Error(a(188))}function d(t){var i=t.alternate;if(!i){if(i=l(t),i===null)throw Error(a(188));return i!==t?null:t}for(var s=t,o=i;;){var f=s.return;if(f===null)break;var m=f.alternate;if(m===null){if(o=f.return,o!==null){s=o;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===s)return h(f),t;if(m===o)return h(f),i;m=m.sibling}throw Error(a(188))}if(s.return!==o.return)s=f,o=m;else{for(var b=!1,C=f.child;C;){if(C===s){b=!0,s=f,o=m;break}if(C===o){b=!0,o=f,s=m;break}C=C.sibling}if(!b){for(C=m.child;C;){if(C===s){b=!0,s=m,o=f;break}if(C===o){b=!0,o=m,s=f;break}C=C.sibling}if(!b)throw Error(a(189))}}if(s.alternate!==o)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?t:i}function p(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=p(t),i!==null)return i;t=t.sibling}return null}var g=Object.assign,_=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),y=Symbol.for("react.provider"),T=Symbol.for("react.consumer"),A=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),F=Symbol.iterator;function ie(t){return t===null||typeof t!="object"?null:(t=F&&t[F]||t["@@iterator"],typeof t=="function"?t:null)}var k=Symbol.for("react.client.reference");function Q(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===k?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case M:return"Fragment";case x:return"Profiler";case E:return"StrictMode";case I:return"Suspense";case P:return"SuspenseList";case U:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case S:return"Portal";case A:return(t.displayName||"Context")+".Provider";case T:return(t._context.displayName||"Context")+".Consumer";case D:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return i=t.displayName||null,i!==null?i:Q(t.type)||"Memo";case V:i=t._payload,t=t._init;try{return Q(t(i))}catch{}}return null}var Y=Array.isArray,L=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j={pending:!1,data:null,method:null,action:null},he=[],B=-1;function $(t){return{current:t}}function oe(t){0>B||(t.current=he[B],he[B]=null,B--)}function ye(t,i){B++,he[B]=t.current,t.current=i}var ee=$(null),de=$(null),_e=$(null),Ae=$(null);function Fe(t,i){switch(ye(_e,i),ye(de,t),ye(ee,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?wg(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=wg(i),t=Rg(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}oe(ee),ye(ee,t)}function Je(){oe(ee),oe(de),oe(_e)}function pt(t){t.memoizedState!==null&&ye(Ae,t);var i=ee.current,s=Rg(i,t.type);i!==s&&(ye(de,t),ye(ee,s))}function X(t){de.current===t&&(oe(ee),oe(de)),Ae.current===t&&(oe(Ae),Fo._currentValue=j)}var ft=Object.prototype.hasOwnProperty,ct=c.unstable_scheduleCallback,zt=c.unstable_cancelCallback,Ye=c.unstable_shouldYield,xt=c.unstable_requestPaint,$e=c.unstable_now,at=c.unstable_getCurrentPriorityLevel,Wt=c.unstable_ImmediatePriority,G=c.unstable_UserBlockingPriority,N=c.unstable_NormalPriority,fe=c.unstable_LowPriority,Se=c.unstable_IdlePriority,Me=c.log,Ee=c.unstable_setDisableYieldValue,ke=null,Re=null;function De(t){if(typeof Me=="function"&&Ee(t),Re&&typeof Re.setStrictMode=="function")try{Re.setStrictMode(ke,t)}catch{}}var qe=Math.clz32?Math.clz32:ht,Ce=Math.log,Ge=Math.LN2;function ht(t){return t>>>=0,t===0?32:31-(Ce(t)/Ge|0)|0}var Ke=256,Ne=4194304;function nt(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function rt(t,i,s){var o=t.pendingLanes;if(o===0)return 0;var f=0,m=t.suspendedLanes,b=t.pingedLanes;t=t.warmLanes;var C=o&134217727;return C!==0?(o=C&~m,o!==0?f=nt(o):(b&=C,b!==0?f=nt(b):s||(s=C&~t,s!==0&&(f=nt(s))))):(C=o&~m,C!==0?f=nt(C):b!==0?f=nt(b):s||(s=o&~t,s!==0&&(f=nt(s)))),f===0?0:i!==0&&i!==f&&(i&m)===0&&(m=f&-f,s=i&-i,m>=s||m===32&&(s&4194048)!==0)?i:f}function Bt(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function q(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Oe(){var t=Ke;return Ke<<=1,(Ke&4194048)===0&&(Ke=256),t}function me(){var t=Ne;return Ne<<=1,(Ne&62914560)===0&&(Ne=4194304),t}function xe(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function we(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function it(t,i,s,o,f,m){var b=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var C=t.entanglements,H=t.expirationTimes,se=t.hiddenUpdates;for(s=b&~s;0<s;){var pe=31-qe(s),ve=1<<pe;C[pe]=0,H[pe]=-1;var re=se[pe];if(re!==null)for(se[pe]=null,pe=0;pe<re.length;pe++){var le=re[pe];le!==null&&(le.lane&=-536870913)}s&=~ve}o!==0&&yt(t,o,0),m!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=m&~(b&~i))}function yt(t,i,s){t.pendingLanes|=i,t.suspendedLanes&=~i;var o=31-qe(i);t.entangledLanes|=i,t.entanglements[o]=t.entanglements[o]|1073741824|s&4194090}function Vt(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var o=31-qe(s),f=1<<o;f&i|t[o]&i&&(t[o]|=i),s&=~f}}function Yt(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Et(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function jn(){var t=K.p;return t!==0?t:(t=window.event,t===void 0?32:Xg(t.type))}function ti(t,i){var s=K.p;try{return K.p=t,i()}finally{K.p=s}}var bn=Math.random().toString(36).slice(2),en="__reactFiber$"+bn,xn="__reactProps$"+bn,Hi="__reactContainer$"+bn,pa="__reactEvents$"+bn,ul="__reactListeners$"+bn,Os="__reactHandles$"+bn,qr="__reactResources$"+bn,ma="__reactMarker$"+bn;function Xr(t){delete t[en],delete t[xn],delete t[pa],delete t[ul],delete t[Os]}function ga(t){var i=t[en];if(i)return i;for(var s=t.parentNode;s;){if(i=s[Hi]||s[en]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=Ug(t);t!==null;){if(s=t[en])return s;t=Ug(t)}return i}t=s,s=t.parentNode}return null}function va(t){if(t=t[en]||t[Hi]){var i=t.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return t}return null}function O(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(a(33))}function Z(t){var i=t[qr];return i||(i=t[qr]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function te(t){t[ma]=!0}var ce=new Set,ne={};function be(t,i){Ue(t,i),Ue(t+"Capture",i)}function Ue(t,i){for(ne[t]=i,t=0;t<i.length;t++)ce.add(i[t])}var Be=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),He={},Ze={};function et(t){return ft.call(Ze,t)?!0:ft.call(He,t)?!1:Be.test(t)?Ze[t]=!0:(He[t]=!0,!1)}function We(t,i,s){if(et(i))if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var o=i.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+s)}}function _t(t,i,s){if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+s)}}function bt(t,i,s,o){if(o===null)t.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(i,s,""+o)}}var Ft,Tn;function vt(t){if(Ft===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);Ft=i&&i[1]||"",Tn=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ft+t+Tn}var Ve=!1;function on(t,i){if(!t||Ve)return"";Ve=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(i){var ve=function(){throw Error()};if(Object.defineProperty(ve.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ve,[])}catch(le){var re=le}Reflect.construct(t,[],ve)}else{try{ve.call()}catch(le){re=le}t.call(ve.prototype)}}else{try{throw Error()}catch(le){re=le}(ve=t())&&typeof ve.catch=="function"&&ve.catch(function(){})}}catch(le){if(le&&re&&typeof le.stack=="string")return[le.stack,re.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=o.DetermineComponentFrameRoot(),b=m[0],C=m[1];if(b&&C){var H=b.split(`
`),se=C.split(`
`);for(f=o=0;o<H.length&&!H[o].includes("DetermineComponentFrameRoot");)o++;for(;f<se.length&&!se[f].includes("DetermineComponentFrameRoot");)f++;if(o===H.length||f===se.length)for(o=H.length-1,f=se.length-1;1<=o&&0<=f&&H[o]!==se[f];)f--;for(;1<=o&&0<=f;o--,f--)if(H[o]!==se[f]){if(o!==1||f!==1)do if(o--,f--,0>f||H[o]!==se[f]){var pe=`
`+H[o].replace(" at new "," at ");return t.displayName&&pe.includes("<anonymous>")&&(pe=pe.replace("<anonymous>",t.displayName)),pe}while(1<=o&&0<=f);break}}}finally{Ve=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?vt(s):""}function Ct(t){switch(t.tag){case 26:case 27:case 5:return vt(t.type);case 16:return vt("Lazy");case 13:return vt("Suspense");case 19:return vt("SuspenseList");case 0:case 15:return on(t.type,!1);case 11:return on(t.type.render,!1);case 1:return on(t.type,!0);case 31:return vt("Activity");default:return""}}function ni(t){try{var i="";do i+=Ct(t),t=t.return;while(t);return i}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function yn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function bi(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Yr(t){var i=bi(t)?"checked":"value",s=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),o=""+t[i];if(!t.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var f=s.get,m=s.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(b){o=""+b,m.call(this,b)}}),Object.defineProperty(t,i,{enumerable:s.enumerable}),{getValue:function(){return o},setValue:function(b){o=""+b},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function qt(t){t._valueTracker||(t._valueTracker=Yr(t))}function pi(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),o="";return t&&(o=bi(t)?t.checked?"true":"false":t.value),t=o,t!==s?(i.setValue(t),!0):!1}function _a(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var On=/[\n"\\]/g;function An(t){return t.replace(On,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Kr(t,i,s,o,f,m,b,C){t.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.type=b:t.removeAttribute("type"),i!=null?b==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+yn(i)):t.value!==""+yn(i)&&(t.value=""+yn(i)):b!=="submit"&&b!=="reset"||t.removeAttribute("value"),i!=null?fu(t,b,yn(i)):s!=null?fu(t,b,yn(s)):o!=null&&t.removeAttribute("value"),f==null&&m!=null&&(t.defaultChecked=!!m),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?t.name=""+yn(C):t.removeAttribute("name")}function Zr(t,i,s,o,f,m,b,C){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(t.type=m),i!=null||s!=null){if(!(m!=="submit"&&m!=="reset"||i!=null))return;s=s!=null?""+yn(s):"",i=i!=null?""+yn(i):s,C||i===t.value||(t.value=i),t.defaultValue=i}o=o??f,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=C?t.checked:!!o,t.defaultChecked=!!o,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(t.name=b)}function fu(t,i,s){i==="number"&&_a(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function Ps(t,i,s,o){if(t=t.options,i){i={};for(var f=0;f<s.length;f++)i["$"+s[f]]=!0;for(s=0;s<t.length;s++)f=i.hasOwnProperty("$"+t[s].value),t[s].selected!==f&&(t[s].selected=f),f&&o&&(t[s].defaultSelected=!0)}else{for(s=""+yn(s),i=null,f=0;f<t.length;f++){if(t[f].value===s){t[f].selected=!0,o&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function Td(t,i,s){if(i!=null&&(i=""+yn(i),i!==t.value&&(t.value=i),s==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=s!=null?""+yn(s):""}function Ad(t,i,s,o){if(i==null){if(o!=null){if(s!=null)throw Error(a(92));if(Y(o)){if(1<o.length)throw Error(a(93));o=o[0]}s=o}s==null&&(s=""),i=s}s=yn(i),t.defaultValue=s,o=t.textContent,o===s&&o!==""&&o!==null&&(t.value=o)}function zs(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var k_=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function wd(t,i,s){var o=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?o?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":o?t.setProperty(i,s):typeof s!="number"||s===0||k_.has(i)?i==="float"?t.cssFloat=s:t[i]=(""+s).trim():t[i]=s+"px"}function Rd(t,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(t=t.style,s!=null){for(var o in s)!s.hasOwnProperty(o)||i!=null&&i.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var f in i)o=i[f],i.hasOwnProperty(f)&&s[f]!==o&&wd(t,f,o)}else for(var m in i)i.hasOwnProperty(m)&&wd(t,m,i[m])}function hu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var V_=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),j_=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function fl(t){return j_.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var du=null;function pu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Bs=null,Is=null;function Cd(t){var i=va(t);if(i&&(t=i.stateNode)){var s=t[xn]||null;e:switch(t=i.stateNode,i.type){case"input":if(Kr(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+An(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var o=s[i];if(o!==t&&o.form===t.form){var f=o[xn]||null;if(!f)throw Error(a(90));Kr(o,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<s.length;i++)o=s[i],o.form===t.form&&pi(o)}break e;case"textarea":Td(t,s.value,s.defaultValue);break e;case"select":i=s.value,i!=null&&Ps(t,!!s.multiple,i,!1)}}}var mu=!1;function Dd(t,i,s){if(mu)return t(i,s);mu=!0;try{var o=t(i);return o}finally{if(mu=!1,(Bs!==null||Is!==null)&&(Zl(),Bs&&(i=Bs,t=Is,Is=Bs=null,Cd(i),t)))for(i=0;i<t.length;i++)Cd(t[i])}}function Qr(t,i){var s=t.stateNode;if(s===null)return null;var o=s[xn]||null;if(o===null)return null;s=o[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var Gi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),gu=!1;if(Gi)try{var Jr={};Object.defineProperty(Jr,"passive",{get:function(){gu=!0}}),window.addEventListener("test",Jr,Jr),window.removeEventListener("test",Jr,Jr)}catch{gu=!1}var xa=null,vu=null,hl=null;function Nd(){if(hl)return hl;var t,i=vu,s=i.length,o,f="value"in xa?xa.value:xa.textContent,m=f.length;for(t=0;t<s&&i[t]===f[t];t++);var b=s-t;for(o=1;o<=b&&i[s-o]===f[m-o];o++);return hl=f.slice(t,1<o?1-o:void 0)}function dl(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function pl(){return!0}function Ud(){return!1}function Pn(t){function i(s,o,f,m,b){this._reactName=s,this._targetInst=f,this.type=o,this.nativeEvent=m,this.target=b,this.currentTarget=null;for(var C in t)t.hasOwnProperty(C)&&(s=t[C],this[C]=s?s(m):m[C]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?pl:Ud,this.isPropagationStopped=Ud,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=pl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=pl)},persist:function(){},isPersistent:pl}),i}var is={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ml=Pn(is),$r=g({},is,{view:0,detail:0}),W_=Pn($r),_u,xu,eo,gl=g({},$r,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Su,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==eo&&(eo&&t.type==="mousemove"?(_u=t.screenX-eo.screenX,xu=t.screenY-eo.screenY):xu=_u=0,eo=t),_u)},movementY:function(t){return"movementY"in t?t.movementY:xu}}),Ld=Pn(gl),q_=g({},gl,{dataTransfer:0}),X_=Pn(q_),Y_=g({},$r,{relatedTarget:0}),yu=Pn(Y_),K_=g({},is,{animationName:0,elapsedTime:0,pseudoElement:0}),Z_=Pn(K_),Q_=g({},is,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),J_=Pn(Q_),$_=g({},is,{data:0}),Od=Pn($_),ex={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ix(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=nx[t])?!!i[t]:!1}function Su(){return ix}var ax=g({},$r,{key:function(t){if(t.key){var i=ex[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=dl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?tx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Su,charCode:function(t){return t.type==="keypress"?dl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?dl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),sx=Pn(ax),rx=g({},gl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pd=Pn(rx),ox=g({},$r,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Su}),lx=Pn(ox),cx=g({},is,{propertyName:0,elapsedTime:0,pseudoElement:0}),ux=Pn(cx),fx=g({},gl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),hx=Pn(fx),dx=g({},is,{newState:0,oldState:0}),px=Pn(dx),mx=[9,13,27,32],Mu=Gi&&"CompositionEvent"in window,to=null;Gi&&"documentMode"in document&&(to=document.documentMode);var gx=Gi&&"TextEvent"in window&&!to,zd=Gi&&(!Mu||to&&8<to&&11>=to),Bd=" ",Id=!1;function Fd(t,i){switch(t){case"keyup":return mx.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Fs=!1;function vx(t,i){switch(t){case"compositionend":return Hd(i);case"keypress":return i.which!==32?null:(Id=!0,Bd);case"textInput":return t=i.data,t===Bd&&Id?null:t;default:return null}}function _x(t,i){if(Fs)return t==="compositionend"||!Mu&&Fd(t,i)?(t=Nd(),hl=vu=xa=null,Fs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return zd&&i.locale!=="ko"?null:i.data;default:return null}}var xx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gd(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!xx[t.type]:i==="textarea"}function kd(t,i,s,o){Bs?Is?Is.push(o):Is=[o]:Bs=o,i=nc(i,"onChange"),0<i.length&&(s=new ml("onChange","change",null,s,o),t.push({event:s,listeners:i}))}var no=null,io=null;function yx(t){Mg(t,0)}function vl(t){var i=O(t);if(pi(i))return t}function Vd(t,i){if(t==="change")return i}var jd=!1;if(Gi){var Eu;if(Gi){var bu="oninput"in document;if(!bu){var Wd=document.createElement("div");Wd.setAttribute("oninput","return;"),bu=typeof Wd.oninput=="function"}Eu=bu}else Eu=!1;jd=Eu&&(!document.documentMode||9<document.documentMode)}function qd(){no&&(no.detachEvent("onpropertychange",Xd),io=no=null)}function Xd(t){if(t.propertyName==="value"&&vl(io)){var i=[];kd(i,io,t,pu(t)),Dd(yx,i)}}function Sx(t,i,s){t==="focusin"?(qd(),no=i,io=s,no.attachEvent("onpropertychange",Xd)):t==="focusout"&&qd()}function Mx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return vl(io)}function Ex(t,i){if(t==="click")return vl(i)}function bx(t,i){if(t==="input"||t==="change")return vl(i)}function Tx(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Wn=typeof Object.is=="function"?Object.is:Tx;function ao(t,i){if(Wn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),o=Object.keys(i);if(s.length!==o.length)return!1;for(o=0;o<s.length;o++){var f=s[o];if(!ft.call(i,f)||!Wn(t[f],i[f]))return!1}return!0}function Yd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Kd(t,i){var s=Yd(t);t=0;for(var o;s;){if(s.nodeType===3){if(o=t+s.textContent.length,t<=i&&o>=i)return{node:s,offset:i-t};t=o}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Yd(s)}}function Zd(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Zd(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Qd(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=_a(t.document);i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=_a(t.document)}return i}function Tu(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var Ax=Gi&&"documentMode"in document&&11>=document.documentMode,Hs=null,Au=null,so=null,wu=!1;function Jd(t,i,s){var o=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;wu||Hs==null||Hs!==_a(o)||(o=Hs,"selectionStart"in o&&Tu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),so&&ao(so,o)||(so=o,o=nc(Au,"onSelect"),0<o.length&&(i=new ml("onSelect","select",null,i,s),t.push({event:i,listeners:o}),i.target=Hs)))}function as(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var Gs={animationend:as("Animation","AnimationEnd"),animationiteration:as("Animation","AnimationIteration"),animationstart:as("Animation","AnimationStart"),transitionrun:as("Transition","TransitionRun"),transitionstart:as("Transition","TransitionStart"),transitioncancel:as("Transition","TransitionCancel"),transitionend:as("Transition","TransitionEnd")},Ru={},$d={};Gi&&($d=document.createElement("div").style,"AnimationEvent"in window||(delete Gs.animationend.animation,delete Gs.animationiteration.animation,delete Gs.animationstart.animation),"TransitionEvent"in window||delete Gs.transitionend.transition);function ss(t){if(Ru[t])return Ru[t];if(!Gs[t])return t;var i=Gs[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in $d)return Ru[t]=i[s];return t}var ep=ss("animationend"),tp=ss("animationiteration"),np=ss("animationstart"),wx=ss("transitionrun"),Rx=ss("transitionstart"),Cx=ss("transitioncancel"),ip=ss("transitionend"),ap=new Map,Cu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Cu.push("scrollEnd");function mi(t,i){ap.set(t,i),be(i,[t])}var sp=new WeakMap;function ii(t,i){if(typeof t=="object"&&t!==null){var s=sp.get(t);return s!==void 0?s:(i={value:t,source:i,stack:ni(i)},sp.set(t,i),i)}return{value:t,source:i,stack:ni(i)}}var ai=[],ks=0,Du=0;function _l(){for(var t=ks,i=Du=ks=0;i<t;){var s=ai[i];ai[i++]=null;var o=ai[i];ai[i++]=null;var f=ai[i];ai[i++]=null;var m=ai[i];if(ai[i++]=null,o!==null&&f!==null){var b=o.pending;b===null?f.next=f:(f.next=b.next,b.next=f),o.pending=f}m!==0&&rp(s,f,m)}}function xl(t,i,s,o){ai[ks++]=t,ai[ks++]=i,ai[ks++]=s,ai[ks++]=o,Du|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Nu(t,i,s,o){return xl(t,i,s,o),yl(t)}function Vs(t,i){return xl(t,null,null,i),yl(t)}function rp(t,i,s){t.lanes|=s;var o=t.alternate;o!==null&&(o.lanes|=s);for(var f=!1,m=t.return;m!==null;)m.childLanes|=s,o=m.alternate,o!==null&&(o.childLanes|=s),m.tag===22&&(t=m.stateNode,t===null||t._visibility&1||(f=!0)),t=m,m=m.return;return t.tag===3?(m=t.stateNode,f&&i!==null&&(f=31-qe(s),t=m.hiddenUpdates,o=t[f],o===null?t[f]=[i]:o.push(i),i.lane=s|536870912),m):null}function yl(t){if(50<No)throw No=0,If=null,Error(a(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var js={};function Dx(t,i,s,o){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(t,i,s,o){return new Dx(t,i,s,o)}function Uu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ki(t,i){var s=t.alternate;return s===null?(s=qn(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function op(t,i){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,i=s.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function Sl(t,i,s,o,f,m){var b=0;if(o=t,typeof t=="function")Uu(t)&&(b=1);else if(typeof t=="string")b=Uy(t,s,ee.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case U:return t=qn(31,s,i,f),t.elementType=U,t.lanes=m,t;case M:return rs(s.children,f,m,i);case E:b=8,f|=24;break;case x:return t=qn(12,s,i,f|2),t.elementType=x,t.lanes=m,t;case I:return t=qn(13,s,i,f),t.elementType=I,t.lanes=m,t;case P:return t=qn(19,s,i,f),t.elementType=P,t.lanes=m,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case y:case A:b=10;break e;case T:b=9;break e;case D:b=11;break e;case z:b=14;break e;case V:b=16,o=null;break e}b=29,s=Error(a(130,t===null?"null":typeof t,"")),o=null}return i=qn(b,s,i,f),i.elementType=t,i.type=o,i.lanes=m,i}function rs(t,i,s,o){return t=qn(7,t,o,i),t.lanes=s,t}function Lu(t,i,s){return t=qn(6,t,null,i),t.lanes=s,t}function Ou(t,i,s){return i=qn(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var Ws=[],qs=0,Ml=null,El=0,si=[],ri=0,os=null,Vi=1,ji="";function ls(t,i){Ws[qs++]=El,Ws[qs++]=Ml,Ml=t,El=i}function lp(t,i,s){si[ri++]=Vi,si[ri++]=ji,si[ri++]=os,os=t;var o=Vi;t=ji;var f=32-qe(o)-1;o&=~(1<<f),s+=1;var m=32-qe(i)+f;if(30<m){var b=f-f%5;m=(o&(1<<b)-1).toString(32),o>>=b,f-=b,Vi=1<<32-qe(i)+f|s<<f|o,ji=m+t}else Vi=1<<m|s<<f|o,ji=t}function Pu(t){t.return!==null&&(ls(t,1),lp(t,1,0))}function zu(t){for(;t===Ml;)Ml=Ws[--qs],Ws[qs]=null,El=Ws[--qs],Ws[qs]=null;for(;t===os;)os=si[--ri],si[ri]=null,ji=si[--ri],si[ri]=null,Vi=si[--ri],si[ri]=null}var Un=null,Kt=null,wt=!1,cs=null,Ti=!1,Bu=Error(a(519));function us(t){var i=Error(a(418,""));throw lo(ii(i,t)),Bu}function cp(t){var i=t.stateNode,s=t.type,o=t.memoizedProps;switch(i[en]=t,i[xn]=o,s){case"dialog":gt("cancel",i),gt("close",i);break;case"iframe":case"object":case"embed":gt("load",i);break;case"video":case"audio":for(s=0;s<Lo.length;s++)gt(Lo[s],i);break;case"source":gt("error",i);break;case"img":case"image":case"link":gt("error",i),gt("load",i);break;case"details":gt("toggle",i);break;case"input":gt("invalid",i),Zr(i,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),qt(i);break;case"select":gt("invalid",i);break;case"textarea":gt("invalid",i),Ad(i,o.value,o.defaultValue,o.children),qt(i)}s=o.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||o.suppressHydrationWarning===!0||Ag(i.textContent,s)?(o.popover!=null&&(gt("beforetoggle",i),gt("toggle",i)),o.onScroll!=null&&gt("scroll",i),o.onScrollEnd!=null&&gt("scrollend",i),o.onClick!=null&&(i.onclick=ic),i=!0):i=!1,i||us(t)}function up(t){for(Un=t.return;Un;)switch(Un.tag){case 5:case 13:Ti=!1;return;case 27:case 3:Ti=!0;return;default:Un=Un.return}}function ro(t){if(t!==Un)return!1;if(!wt)return up(t),wt=!0,!1;var i=t.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||eh(t.type,t.memoizedProps)),s=!s),s&&Kt&&us(t),up(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8)if(s=t.data,s==="/$"){if(i===0){Kt=vi(t.nextSibling);break e}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++;t=t.nextSibling}Kt=null}}else i===27?(i=Kt,Pa(t.type)?(t=ah,ah=null,Kt=t):Kt=i):Kt=Un?vi(t.stateNode.nextSibling):null;return!0}function oo(){Kt=Un=null,wt=!1}function fp(){var t=cs;return t!==null&&(In===null?In=t:In.push.apply(In,t),cs=null),t}function lo(t){cs===null?cs=[t]:cs.push(t)}var Iu=$(null),fs=null,Wi=null;function ya(t,i,s){ye(Iu,i._currentValue),i._currentValue=s}function qi(t){t._currentValue=Iu.current,oe(Iu)}function Fu(t,i,s){for(;t!==null;){var o=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,o!==null&&(o.childLanes|=i)):o!==null&&(o.childLanes&i)!==i&&(o.childLanes|=i),t===s)break;t=t.return}}function Hu(t,i,s,o){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var m=f.dependencies;if(m!==null){var b=f.child;m=m.firstContext;e:for(;m!==null;){var C=m;m=f;for(var H=0;H<i.length;H++)if(C.context===i[H]){m.lanes|=s,C=m.alternate,C!==null&&(C.lanes|=s),Fu(m.return,s,t),o||(b=null);break e}m=C.next}}else if(f.tag===18){if(b=f.return,b===null)throw Error(a(341));b.lanes|=s,m=b.alternate,m!==null&&(m.lanes|=s),Fu(b,s,t),b=null}else b=f.child;if(b!==null)b.return=f;else for(b=f;b!==null;){if(b===t){b=null;break}if(f=b.sibling,f!==null){f.return=b.return,b=f;break}b=b.return}f=b}}function co(t,i,s,o){t=null;for(var f=i,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var b=f.alternate;if(b===null)throw Error(a(387));if(b=b.memoizedProps,b!==null){var C=f.type;Wn(f.pendingProps.value,b.value)||(t!==null?t.push(C):t=[C])}}else if(f===Ae.current){if(b=f.alternate,b===null)throw Error(a(387));b.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push(Fo):t=[Fo])}f=f.return}t!==null&&Hu(i,t,s,o),i.flags|=262144}function bl(t){for(t=t.firstContext;t!==null;){if(!Wn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function hs(t){fs=t,Wi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function wn(t){return hp(fs,t)}function Tl(t,i){return fs===null&&hs(t),hp(t,i)}function hp(t,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},Wi===null){if(t===null)throw Error(a(308));Wi=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else Wi=Wi.next=i;return s}var Nx=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(s,o){t.push(o)}};this.abort=function(){i.aborted=!0,t.forEach(function(s){return s()})}},Ux=c.unstable_scheduleCallback,Lx=c.unstable_NormalPriority,ln={$$typeof:A,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Gu(){return{controller:new Nx,data:new Map,refCount:0}}function uo(t){t.refCount--,t.refCount===0&&Ux(Lx,function(){t.controller.abort()})}var fo=null,ku=0,Xs=0,Ys=null;function Ox(t,i){if(fo===null){var s=fo=[];ku=0,Xs=Wf(),Ys={status:"pending",value:void 0,then:function(o){s.push(o)}}}return ku++,i.then(dp,dp),i}function dp(){if(--ku===0&&fo!==null){Ys!==null&&(Ys.status="fulfilled");var t=fo;fo=null,Xs=0,Ys=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function Px(t,i){var s=[],o={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return t.then(function(){o.status="fulfilled",o.value=i;for(var f=0;f<s.length;f++)(0,s[f])(i)},function(f){for(o.status="rejected",o.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),o}var pp=L.S;L.S=function(t,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&Ox(t,i),pp!==null&&pp(t,i)};var ds=$(null);function Vu(){var t=ds.current;return t!==null?t:Ht.pooledCache}function Al(t,i){i===null?ye(ds,ds.current):ye(ds,i.pool)}function mp(){var t=Vu();return t===null?null:{parent:ln._currentValue,pool:t}}var ho=Error(a(460)),gp=Error(a(474)),wl=Error(a(542)),ju={then:function(){}};function vp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Rl(){}function _p(t,i,s){switch(s=t[s],s===void 0?t.push(i):s!==i&&(i.then(Rl,Rl),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,yp(t),t;default:if(typeof i.status=="string")i.then(Rl,Rl);else{if(t=Ht,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=i,t.status="pending",t.then(function(o){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=o}},function(o){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=o}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,yp(t),t}throw po=i,ho}}var po=null;function xp(){if(po===null)throw Error(a(459));var t=po;return po=null,t}function yp(t){if(t===ho||t===wl)throw Error(a(483))}var Sa=!1;function Wu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function qu(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ma(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ea(t,i,s){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Dt&2)!==0){var f=o.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),o.pending=i,i=yl(t),rp(t,null,s),i}return xl(t,o,i,s),yl(t)}function mo(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var o=i.lanes;o&=t.pendingLanes,s|=o,i.lanes=s,Vt(t,s)}}function Xu(t,i){var s=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,s===o)){var f=null,m=null;if(s=s.firstBaseUpdate,s!==null){do{var b={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};m===null?f=m=b:m=m.next=b,s=s.next}while(s!==null);m===null?f=m=i:m=m.next=i}else f=m=i;s={baseState:o.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:o.shared,callbacks:o.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}var Yu=!1;function go(){if(Yu){var t=Ys;if(t!==null)throw t}}function vo(t,i,s,o){Yu=!1;var f=t.updateQueue;Sa=!1;var m=f.firstBaseUpdate,b=f.lastBaseUpdate,C=f.shared.pending;if(C!==null){f.shared.pending=null;var H=C,se=H.next;H.next=null,b===null?m=se:b.next=se,b=H;var pe=t.alternate;pe!==null&&(pe=pe.updateQueue,C=pe.lastBaseUpdate,C!==b&&(C===null?pe.firstBaseUpdate=se:C.next=se,pe.lastBaseUpdate=H))}if(m!==null){var ve=f.baseState;b=0,pe=se=H=null,C=m;do{var re=C.lane&-536870913,le=re!==C.lane;if(le?(St&re)===re:(o&re)===re){re!==0&&re===Xs&&(Yu=!0),pe!==null&&(pe=pe.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});e:{var tt=t,Xe=C;re=i;var Pt=s;switch(Xe.tag){case 1:if(tt=Xe.payload,typeof tt=="function"){ve=tt.call(Pt,ve,re);break e}ve=tt;break e;case 3:tt.flags=tt.flags&-65537|128;case 0:if(tt=Xe.payload,re=typeof tt=="function"?tt.call(Pt,ve,re):tt,re==null)break e;ve=g({},ve,re);break e;case 2:Sa=!0}}re=C.callback,re!==null&&(t.flags|=64,le&&(t.flags|=8192),le=f.callbacks,le===null?f.callbacks=[re]:le.push(re))}else le={lane:re,tag:C.tag,payload:C.payload,callback:C.callback,next:null},pe===null?(se=pe=le,H=ve):pe=pe.next=le,b|=re;if(C=C.next,C===null){if(C=f.shared.pending,C===null)break;le=C,C=le.next,le.next=null,f.lastBaseUpdate=le,f.shared.pending=null}}while(!0);pe===null&&(H=ve),f.baseState=H,f.firstBaseUpdate=se,f.lastBaseUpdate=pe,m===null&&(f.shared.lanes=0),Na|=b,t.lanes=b,t.memoizedState=ve}}function Sp(t,i){if(typeof t!="function")throw Error(a(191,t));t.call(i)}function Mp(t,i){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)Sp(s[t],i)}var Ks=$(null),Cl=$(0);function Ep(t,i){t=$i,ye(Cl,t),ye(Ks,i),$i=t|i.baseLanes}function Ku(){ye(Cl,$i),ye(Ks,Ks.current)}function Zu(){$i=Cl.current,oe(Ks),oe(Cl)}var ba=0,ut=null,Lt=null,tn=null,Dl=!1,Zs=!1,ps=!1,Nl=0,_o=0,Qs=null,zx=0;function Qt(){throw Error(a(321))}function Qu(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!Wn(t[s],i[s]))return!1;return!0}function Ju(t,i,s,o,f,m){return ba=m,ut=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,L.H=t===null||t.memoizedState===null?rm:om,ps=!1,m=s(o,f),ps=!1,Zs&&(m=Tp(i,s,o,f)),bp(t),m}function bp(t){L.H=Bl;var i=Lt!==null&&Lt.next!==null;if(ba=0,tn=Lt=ut=null,Dl=!1,_o=0,Qs=null,i)throw Error(a(300));t===null||pn||(t=t.dependencies,t!==null&&bl(t)&&(pn=!0))}function Tp(t,i,s,o){ut=t;var f=0;do{if(Zs&&(Qs=null),_o=0,Zs=!1,25<=f)throw Error(a(301));if(f+=1,tn=Lt=null,t.updateQueue!=null){var m=t.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}L.H=Vx,m=i(s,o)}while(Zs);return m}function Bx(){var t=L.H,i=t.useState()[0];return i=typeof i.then=="function"?xo(i):i,t=t.useState()[0],(Lt!==null?Lt.memoizedState:null)!==t&&(ut.flags|=1024),i}function $u(){var t=Nl!==0;return Nl=0,t}function ef(t,i,s){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~s}function tf(t){if(Dl){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}Dl=!1}ba=0,tn=Lt=ut=null,Zs=!1,_o=Nl=0,Qs=null}function zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tn===null?ut.memoizedState=tn=t:tn=tn.next=t,tn}function nn(){if(Lt===null){var t=ut.alternate;t=t!==null?t.memoizedState:null}else t=Lt.next;var i=tn===null?ut.memoizedState:tn.next;if(i!==null)tn=i,Lt=t;else{if(t===null)throw ut.alternate===null?Error(a(467)):Error(a(310));Lt=t,t={memoizedState:Lt.memoizedState,baseState:Lt.baseState,baseQueue:Lt.baseQueue,queue:Lt.queue,next:null},tn===null?ut.memoizedState=tn=t:tn=tn.next=t}return tn}function nf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function xo(t){var i=_o;return _o+=1,Qs===null&&(Qs=[]),t=_p(Qs,t,i),i=ut,(tn===null?i.memoizedState:tn.next)===null&&(i=i.alternate,L.H=i===null||i.memoizedState===null?rm:om),t}function Ul(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return xo(t);if(t.$$typeof===A)return wn(t)}throw Error(a(438,String(t)))}function af(t){var i=null,s=ut.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var o=ut.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(i={data:o.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=nf(),ut.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(t),o=0;o<t;o++)s[o]=w;return i.index++,s}function Xi(t,i){return typeof i=="function"?i(t):i}function Ll(t){var i=nn();return sf(i,Lt,t)}function sf(t,i,s){var o=t.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=s;var f=t.baseQueue,m=o.pending;if(m!==null){if(f!==null){var b=f.next;f.next=m.next,m.next=b}i.baseQueue=f=m,o.pending=null}if(m=t.baseState,f===null)t.memoizedState=m;else{i=f.next;var C=b=null,H=null,se=i,pe=!1;do{var ve=se.lane&-536870913;if(ve!==se.lane?(St&ve)===ve:(ba&ve)===ve){var re=se.revertLane;if(re===0)H!==null&&(H=H.next={lane:0,revertLane:0,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null}),ve===Xs&&(pe=!0);else if((ba&re)===re){se=se.next,re===Xs&&(pe=!0);continue}else ve={lane:0,revertLane:se.revertLane,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null},H===null?(C=H=ve,b=m):H=H.next=ve,ut.lanes|=re,Na|=re;ve=se.action,ps&&s(m,ve),m=se.hasEagerState?se.eagerState:s(m,ve)}else re={lane:ve,revertLane:se.revertLane,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null},H===null?(C=H=re,b=m):H=H.next=re,ut.lanes|=ve,Na|=ve;se=se.next}while(se!==null&&se!==i);if(H===null?b=m:H.next=C,!Wn(m,t.memoizedState)&&(pn=!0,pe&&(s=Ys,s!==null)))throw s;t.memoizedState=m,t.baseState=b,t.baseQueue=H,o.lastRenderedState=m}return f===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function rf(t){var i=nn(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=t;var o=s.dispatch,f=s.pending,m=i.memoizedState;if(f!==null){s.pending=null;var b=f=f.next;do m=t(m,b.action),b=b.next;while(b!==f);Wn(m,i.memoizedState)||(pn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),s.lastRenderedState=m}return[m,o]}function Ap(t,i,s){var o=ut,f=nn(),m=wt;if(m){if(s===void 0)throw Error(a(407));s=s()}else s=i();var b=!Wn((Lt||f).memoizedState,s);b&&(f.memoizedState=s,pn=!0),f=f.queue;var C=Cp.bind(null,o,f,t);if(yo(2048,8,C,[t]),f.getSnapshot!==i||b||tn!==null&&tn.memoizedState.tag&1){if(o.flags|=2048,Js(9,Ol(),Rp.bind(null,o,f,s,i),null),Ht===null)throw Error(a(349));m||(ba&124)!==0||wp(o,i,s)}return s}function wp(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=ut.updateQueue,i===null?(i=nf(),ut.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function Rp(t,i,s,o){i.value=s,i.getSnapshot=o,Dp(i)&&Np(t)}function Cp(t,i,s){return s(function(){Dp(i)&&Np(t)})}function Dp(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!Wn(t,s)}catch{return!0}}function Np(t){var i=Vs(t,2);i!==null&&Qn(i,t,2)}function of(t){var i=zn();if(typeof t=="function"){var s=t;if(t=s(),ps){De(!0);try{s()}finally{De(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:t},i}function Up(t,i,s,o){return t.baseState=s,sf(t,Lt,typeof o=="function"?o:Xi)}function Ix(t,i,s,o,f){if(zl(t))throw Error(a(485));if(t=i.action,t!==null){var m={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){m.listeners.push(b)}};L.T!==null?s(!0):m.isTransition=!1,o(m),s=i.pending,s===null?(m.next=i.pending=m,Lp(i,m)):(m.next=s.next,i.pending=s.next=m)}}function Lp(t,i){var s=i.action,o=i.payload,f=t.state;if(i.isTransition){var m=L.T,b={};L.T=b;try{var C=s(f,o),H=L.S;H!==null&&H(b,C),Op(t,i,C)}catch(se){lf(t,i,se)}finally{L.T=m}}else try{m=s(f,o),Op(t,i,m)}catch(se){lf(t,i,se)}}function Op(t,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(o){Pp(t,i,o)},function(o){return lf(t,i,o)}):Pp(t,i,s)}function Pp(t,i,s){i.status="fulfilled",i.value=s,zp(i),t.state=s,i=t.pending,i!==null&&(s=i.next,s===i?t.pending=null:(s=s.next,i.next=s,Lp(t,s)))}function lf(t,i,s){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do i.status="rejected",i.reason=s,zp(i),i=i.next;while(i!==o)}t.action=null}function zp(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function Bp(t,i){return i}function Ip(t,i){if(wt){var s=Ht.formState;if(s!==null){e:{var o=ut;if(wt){if(Kt){t:{for(var f=Kt,m=Ti;f.nodeType!==8;){if(!m){f=null;break t}if(f=vi(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){Kt=vi(f.nextSibling),o=f.data==="F!";break e}}us(o)}o=!1}o&&(i=s[0])}}return s=zn(),s.memoizedState=s.baseState=i,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bp,lastRenderedState:i},s.queue=o,s=im.bind(null,ut,o),o.dispatch=s,o=of(!1),m=df.bind(null,ut,!1,o.queue),o=zn(),f={state:i,dispatch:null,action:t,pending:null},o.queue=f,s=Ix.bind(null,ut,f,m,s),f.dispatch=s,o.memoizedState=t,[i,s,!1]}function Fp(t){var i=nn();return Hp(i,Lt,t)}function Hp(t,i,s){if(i=sf(t,i,Bp)[0],t=Ll(Xi)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var o=xo(i)}catch(b){throw b===ho?wl:b}else o=i;i=nn();var f=i.queue,m=f.dispatch;return s!==i.memoizedState&&(ut.flags|=2048,Js(9,Ol(),Fx.bind(null,f,s),null)),[o,m,t]}function Fx(t,i){t.action=i}function Gp(t){var i=nn(),s=Lt;if(s!==null)return Hp(i,s,t);nn(),i=i.memoizedState,s=nn();var o=s.queue.dispatch;return s.memoizedState=t,[i,o,!1]}function Js(t,i,s,o){return t={tag:t,create:s,deps:o,inst:i,next:null},i=ut.updateQueue,i===null&&(i=nf(),ut.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=t.next=t:(o=s.next,s.next=t,t.next=o,i.lastEffect=t),t}function Ol(){return{destroy:void 0,resource:void 0}}function kp(){return nn().memoizedState}function Pl(t,i,s,o){var f=zn();o=o===void 0?null:o,ut.flags|=t,f.memoizedState=Js(1|i,Ol(),s,o)}function yo(t,i,s,o){var f=nn();o=o===void 0?null:o;var m=f.memoizedState.inst;Lt!==null&&o!==null&&Qu(o,Lt.memoizedState.deps)?f.memoizedState=Js(i,m,s,o):(ut.flags|=t,f.memoizedState=Js(1|i,m,s,o))}function Vp(t,i){Pl(8390656,8,t,i)}function jp(t,i){yo(2048,8,t,i)}function Wp(t,i){return yo(4,2,t,i)}function qp(t,i){return yo(4,4,t,i)}function Xp(t,i){if(typeof i=="function"){t=t();var s=i(t);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Yp(t,i,s){s=s!=null?s.concat([t]):null,yo(4,4,Xp.bind(null,i,t),s)}function cf(){}function Kp(t,i){var s=nn();i=i===void 0?null:i;var o=s.memoizedState;return i!==null&&Qu(i,o[1])?o[0]:(s.memoizedState=[t,i],t)}function Zp(t,i){var s=nn();i=i===void 0?null:i;var o=s.memoizedState;if(i!==null&&Qu(i,o[1]))return o[0];if(o=t(),ps){De(!0);try{t()}finally{De(!1)}}return s.memoizedState=[o,i],o}function uf(t,i,s){return s===void 0||(ba&1073741824)!==0?t.memoizedState=i:(t.memoizedState=s,t=$m(),ut.lanes|=t,Na|=t,s)}function Qp(t,i,s,o){return Wn(s,i)?s:Ks.current!==null?(t=uf(t,s,o),Wn(t,i)||(pn=!0),t):(ba&42)===0?(pn=!0,t.memoizedState=s):(t=$m(),ut.lanes|=t,Na|=t,i)}function Jp(t,i,s,o,f){var m=K.p;K.p=m!==0&&8>m?m:8;var b=L.T,C={};L.T=C,df(t,!1,i,s);try{var H=f(),se=L.S;if(se!==null&&se(C,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var pe=Px(H,o);So(t,i,pe,Zn(t))}else So(t,i,o,Zn(t))}catch(ve){So(t,i,{then:function(){},status:"rejected",reason:ve},Zn())}finally{K.p=m,L.T=b}}function Hx(){}function ff(t,i,s,o){if(t.tag!==5)throw Error(a(476));var f=$p(t).queue;Jp(t,f,i,j,s===null?Hx:function(){return em(t),s(o)})}function $p(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:j,baseState:j,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:j},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:s},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function em(t){var i=$p(t).next.queue;So(t,i,{},Zn())}function hf(){return wn(Fo)}function tm(){return nn().memoizedState}function nm(){return nn().memoizedState}function Gx(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var s=Zn();t=Ma(s);var o=Ea(i,t,s);o!==null&&(Qn(o,i,s),mo(o,i,s)),i={cache:Gu()},t.payload=i;return}i=i.return}}function kx(t,i,s){var o=Zn();s={lane:o,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},zl(t)?am(i,s):(s=Nu(t,i,s,o),s!==null&&(Qn(s,t,o),sm(s,i,o)))}function im(t,i,s){var o=Zn();So(t,i,s,o)}function So(t,i,s,o){var f={lane:o,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(zl(t))am(i,f);else{var m=t.alternate;if(t.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var b=i.lastRenderedState,C=m(b,s);if(f.hasEagerState=!0,f.eagerState=C,Wn(C,b))return xl(t,i,f,0),Ht===null&&_l(),!1}catch{}finally{}if(s=Nu(t,i,f,o),s!==null)return Qn(s,t,o),sm(s,i,o),!0}return!1}function df(t,i,s,o){if(o={lane:2,revertLane:Wf(),action:o,hasEagerState:!1,eagerState:null,next:null},zl(t)){if(i)throw Error(a(479))}else i=Nu(t,s,o,2),i!==null&&Qn(i,t,2)}function zl(t){var i=t.alternate;return t===ut||i!==null&&i===ut}function am(t,i){Zs=Dl=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function sm(t,i,s){if((s&4194048)!==0){var o=i.lanes;o&=t.pendingLanes,s|=o,i.lanes=s,Vt(t,s)}}var Bl={readContext:wn,use:Ul,useCallback:Qt,useContext:Qt,useEffect:Qt,useImperativeHandle:Qt,useLayoutEffect:Qt,useInsertionEffect:Qt,useMemo:Qt,useReducer:Qt,useRef:Qt,useState:Qt,useDebugValue:Qt,useDeferredValue:Qt,useTransition:Qt,useSyncExternalStore:Qt,useId:Qt,useHostTransitionStatus:Qt,useFormState:Qt,useActionState:Qt,useOptimistic:Qt,useMemoCache:Qt,useCacheRefresh:Qt},rm={readContext:wn,use:Ul,useCallback:function(t,i){return zn().memoizedState=[t,i===void 0?null:i],t},useContext:wn,useEffect:Vp,useImperativeHandle:function(t,i,s){s=s!=null?s.concat([t]):null,Pl(4194308,4,Xp.bind(null,i,t),s)},useLayoutEffect:function(t,i){return Pl(4194308,4,t,i)},useInsertionEffect:function(t,i){Pl(4,2,t,i)},useMemo:function(t,i){var s=zn();i=i===void 0?null:i;var o=t();if(ps){De(!0);try{t()}finally{De(!1)}}return s.memoizedState=[o,i],o},useReducer:function(t,i,s){var o=zn();if(s!==void 0){var f=s(i);if(ps){De(!0);try{s(i)}finally{De(!1)}}}else f=i;return o.memoizedState=o.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},o.queue=t,t=t.dispatch=kx.bind(null,ut,t),[o.memoizedState,t]},useRef:function(t){var i=zn();return t={current:t},i.memoizedState=t},useState:function(t){t=of(t);var i=t.queue,s=im.bind(null,ut,i);return i.dispatch=s,[t.memoizedState,s]},useDebugValue:cf,useDeferredValue:function(t,i){var s=zn();return uf(s,t,i)},useTransition:function(){var t=of(!1);return t=Jp.bind(null,ut,t.queue,!0,!1),zn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,s){var o=ut,f=zn();if(wt){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),Ht===null)throw Error(a(349));(St&124)!==0||wp(o,i,s)}f.memoizedState=s;var m={value:s,getSnapshot:i};return f.queue=m,Vp(Cp.bind(null,o,m,t),[t]),o.flags|=2048,Js(9,Ol(),Rp.bind(null,o,m,s,i),null),s},useId:function(){var t=zn(),i=Ht.identifierPrefix;if(wt){var s=ji,o=Vi;s=(o&~(1<<32-qe(o)-1)).toString(32)+s,i="«"+i+"R"+s,s=Nl++,0<s&&(i+="H"+s.toString(32)),i+="»"}else s=zx++,i="«"+i+"r"+s.toString(32)+"»";return t.memoizedState=i},useHostTransitionStatus:hf,useFormState:Ip,useActionState:Ip,useOptimistic:function(t){var i=zn();i.memoizedState=i.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=df.bind(null,ut,!0,s),s.dispatch=i,[t,i]},useMemoCache:af,useCacheRefresh:function(){return zn().memoizedState=Gx.bind(null,ut)}},om={readContext:wn,use:Ul,useCallback:Kp,useContext:wn,useEffect:jp,useImperativeHandle:Yp,useInsertionEffect:Wp,useLayoutEffect:qp,useMemo:Zp,useReducer:Ll,useRef:kp,useState:function(){return Ll(Xi)},useDebugValue:cf,useDeferredValue:function(t,i){var s=nn();return Qp(s,Lt.memoizedState,t,i)},useTransition:function(){var t=Ll(Xi)[0],i=nn().memoizedState;return[typeof t=="boolean"?t:xo(t),i]},useSyncExternalStore:Ap,useId:tm,useHostTransitionStatus:hf,useFormState:Fp,useActionState:Fp,useOptimistic:function(t,i){var s=nn();return Up(s,Lt,t,i)},useMemoCache:af,useCacheRefresh:nm},Vx={readContext:wn,use:Ul,useCallback:Kp,useContext:wn,useEffect:jp,useImperativeHandle:Yp,useInsertionEffect:Wp,useLayoutEffect:qp,useMemo:Zp,useReducer:rf,useRef:kp,useState:function(){return rf(Xi)},useDebugValue:cf,useDeferredValue:function(t,i){var s=nn();return Lt===null?uf(s,t,i):Qp(s,Lt.memoizedState,t,i)},useTransition:function(){var t=rf(Xi)[0],i=nn().memoizedState;return[typeof t=="boolean"?t:xo(t),i]},useSyncExternalStore:Ap,useId:tm,useHostTransitionStatus:hf,useFormState:Gp,useActionState:Gp,useOptimistic:function(t,i){var s=nn();return Lt!==null?Up(s,Lt,t,i):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:af,useCacheRefresh:nm},$s=null,Mo=0;function Il(t){var i=Mo;return Mo+=1,$s===null&&($s=[]),_p($s,t,i)}function Eo(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function Fl(t,i){throw i.$$typeof===_?Error(a(525)):(t=Object.prototype.toString.call(i),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function lm(t){var i=t._init;return i(t._payload)}function cm(t){function i(J,W){if(t){var ae=J.deletions;ae===null?(J.deletions=[W],J.flags|=16):ae.push(W)}}function s(J,W){if(!t)return null;for(;W!==null;)i(J,W),W=W.sibling;return null}function o(J){for(var W=new Map;J!==null;)J.key!==null?W.set(J.key,J):W.set(J.index,J),J=J.sibling;return W}function f(J,W){return J=ki(J,W),J.index=0,J.sibling=null,J}function m(J,W,ae){return J.index=ae,t?(ae=J.alternate,ae!==null?(ae=ae.index,ae<W?(J.flags|=67108866,W):ae):(J.flags|=67108866,W)):(J.flags|=1048576,W)}function b(J){return t&&J.alternate===null&&(J.flags|=67108866),J}function C(J,W,ae,ge){return W===null||W.tag!==6?(W=Lu(ae,J.mode,ge),W.return=J,W):(W=f(W,ae),W.return=J,W)}function H(J,W,ae,ge){var Ie=ae.type;return Ie===M?pe(J,W,ae.props.children,ge,ae.key):W!==null&&(W.elementType===Ie||typeof Ie=="object"&&Ie!==null&&Ie.$$typeof===V&&lm(Ie)===W.type)?(W=f(W,ae.props),Eo(W,ae),W.return=J,W):(W=Sl(ae.type,ae.key,ae.props,null,J.mode,ge),Eo(W,ae),W.return=J,W)}function se(J,W,ae,ge){return W===null||W.tag!==4||W.stateNode.containerInfo!==ae.containerInfo||W.stateNode.implementation!==ae.implementation?(W=Ou(ae,J.mode,ge),W.return=J,W):(W=f(W,ae.children||[]),W.return=J,W)}function pe(J,W,ae,ge,Ie){return W===null||W.tag!==7?(W=rs(ae,J.mode,ge,Ie),W.return=J,W):(W=f(W,ae),W.return=J,W)}function ve(J,W,ae){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=Lu(""+W,J.mode,ae),W.return=J,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case v:return ae=Sl(W.type,W.key,W.props,null,J.mode,ae),Eo(ae,W),ae.return=J,ae;case S:return W=Ou(W,J.mode,ae),W.return=J,W;case V:var ge=W._init;return W=ge(W._payload),ve(J,W,ae)}if(Y(W)||ie(W))return W=rs(W,J.mode,ae,null),W.return=J,W;if(typeof W.then=="function")return ve(J,Il(W),ae);if(W.$$typeof===A)return ve(J,Tl(J,W),ae);Fl(J,W)}return null}function re(J,W,ae,ge){var Ie=W!==null?W.key:null;if(typeof ae=="string"&&ae!==""||typeof ae=="number"||typeof ae=="bigint")return Ie!==null?null:C(J,W,""+ae,ge);if(typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case v:return ae.key===Ie?H(J,W,ae,ge):null;case S:return ae.key===Ie?se(J,W,ae,ge):null;case V:return Ie=ae._init,ae=Ie(ae._payload),re(J,W,ae,ge)}if(Y(ae)||ie(ae))return Ie!==null?null:pe(J,W,ae,ge,null);if(typeof ae.then=="function")return re(J,W,Il(ae),ge);if(ae.$$typeof===A)return re(J,W,Tl(J,ae),ge);Fl(J,ae)}return null}function le(J,W,ae,ge,Ie){if(typeof ge=="string"&&ge!==""||typeof ge=="number"||typeof ge=="bigint")return J=J.get(ae)||null,C(W,J,""+ge,Ie);if(typeof ge=="object"&&ge!==null){switch(ge.$$typeof){case v:return J=J.get(ge.key===null?ae:ge.key)||null,H(W,J,ge,Ie);case S:return J=J.get(ge.key===null?ae:ge.key)||null,se(W,J,ge,Ie);case V:var dt=ge._init;return ge=dt(ge._payload),le(J,W,ae,ge,Ie)}if(Y(ge)||ie(ge))return J=J.get(ae)||null,pe(W,J,ge,Ie,null);if(typeof ge.then=="function")return le(J,W,ae,Il(ge),Ie);if(ge.$$typeof===A)return le(J,W,ae,Tl(W,ge),Ie);Fl(W,ge)}return null}function tt(J,W,ae,ge){for(var Ie=null,dt=null,je=W,Qe=W=0,gn=null;je!==null&&Qe<ae.length;Qe++){je.index>Qe?(gn=je,je=null):gn=je.sibling;var Tt=re(J,je,ae[Qe],ge);if(Tt===null){je===null&&(je=gn);break}t&&je&&Tt.alternate===null&&i(J,je),W=m(Tt,W,Qe),dt===null?Ie=Tt:dt.sibling=Tt,dt=Tt,je=gn}if(Qe===ae.length)return s(J,je),wt&&ls(J,Qe),Ie;if(je===null){for(;Qe<ae.length;Qe++)je=ve(J,ae[Qe],ge),je!==null&&(W=m(je,W,Qe),dt===null?Ie=je:dt.sibling=je,dt=je);return wt&&ls(J,Qe),Ie}for(je=o(je);Qe<ae.length;Qe++)gn=le(je,J,Qe,ae[Qe],ge),gn!==null&&(t&&gn.alternate!==null&&je.delete(gn.key===null?Qe:gn.key),W=m(gn,W,Qe),dt===null?Ie=gn:dt.sibling=gn,dt=gn);return t&&je.forEach(function(Ha){return i(J,Ha)}),wt&&ls(J,Qe),Ie}function Xe(J,W,ae,ge){if(ae==null)throw Error(a(151));for(var Ie=null,dt=null,je=W,Qe=W=0,gn=null,Tt=ae.next();je!==null&&!Tt.done;Qe++,Tt=ae.next()){je.index>Qe?(gn=je,je=null):gn=je.sibling;var Ha=re(J,je,Tt.value,ge);if(Ha===null){je===null&&(je=gn);break}t&&je&&Ha.alternate===null&&i(J,je),W=m(Ha,W,Qe),dt===null?Ie=Ha:dt.sibling=Ha,dt=Ha,je=gn}if(Tt.done)return s(J,je),wt&&ls(J,Qe),Ie;if(je===null){for(;!Tt.done;Qe++,Tt=ae.next())Tt=ve(J,Tt.value,ge),Tt!==null&&(W=m(Tt,W,Qe),dt===null?Ie=Tt:dt.sibling=Tt,dt=Tt);return wt&&ls(J,Qe),Ie}for(je=o(je);!Tt.done;Qe++,Tt=ae.next())Tt=le(je,J,Qe,Tt.value,ge),Tt!==null&&(t&&Tt.alternate!==null&&je.delete(Tt.key===null?Qe:Tt.key),W=m(Tt,W,Qe),dt===null?Ie=Tt:dt.sibling=Tt,dt=Tt);return t&&je.forEach(function(jy){return i(J,jy)}),wt&&ls(J,Qe),Ie}function Pt(J,W,ae,ge){if(typeof ae=="object"&&ae!==null&&ae.type===M&&ae.key===null&&(ae=ae.props.children),typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case v:e:{for(var Ie=ae.key;W!==null;){if(W.key===Ie){if(Ie=ae.type,Ie===M){if(W.tag===7){s(J,W.sibling),ge=f(W,ae.props.children),ge.return=J,J=ge;break e}}else if(W.elementType===Ie||typeof Ie=="object"&&Ie!==null&&Ie.$$typeof===V&&lm(Ie)===W.type){s(J,W.sibling),ge=f(W,ae.props),Eo(ge,ae),ge.return=J,J=ge;break e}s(J,W);break}else i(J,W);W=W.sibling}ae.type===M?(ge=rs(ae.props.children,J.mode,ge,ae.key),ge.return=J,J=ge):(ge=Sl(ae.type,ae.key,ae.props,null,J.mode,ge),Eo(ge,ae),ge.return=J,J=ge)}return b(J);case S:e:{for(Ie=ae.key;W!==null;){if(W.key===Ie)if(W.tag===4&&W.stateNode.containerInfo===ae.containerInfo&&W.stateNode.implementation===ae.implementation){s(J,W.sibling),ge=f(W,ae.children||[]),ge.return=J,J=ge;break e}else{s(J,W);break}else i(J,W);W=W.sibling}ge=Ou(ae,J.mode,ge),ge.return=J,J=ge}return b(J);case V:return Ie=ae._init,ae=Ie(ae._payload),Pt(J,W,ae,ge)}if(Y(ae))return tt(J,W,ae,ge);if(ie(ae)){if(Ie=ie(ae),typeof Ie!="function")throw Error(a(150));return ae=Ie.call(ae),Xe(J,W,ae,ge)}if(typeof ae.then=="function")return Pt(J,W,Il(ae),ge);if(ae.$$typeof===A)return Pt(J,W,Tl(J,ae),ge);Fl(J,ae)}return typeof ae=="string"&&ae!==""||typeof ae=="number"||typeof ae=="bigint"?(ae=""+ae,W!==null&&W.tag===6?(s(J,W.sibling),ge=f(W,ae),ge.return=J,J=ge):(s(J,W),ge=Lu(ae,J.mode,ge),ge.return=J,J=ge),b(J)):s(J,W)}return function(J,W,ae,ge){try{Mo=0;var Ie=Pt(J,W,ae,ge);return $s=null,Ie}catch(je){if(je===ho||je===wl)throw je;var dt=qn(29,je,null,J.mode);return dt.lanes=ge,dt.return=J,dt}finally{}}}var er=cm(!0),um=cm(!1),oi=$(null),Ai=null;function Ta(t){var i=t.alternate;ye(cn,cn.current&1),ye(oi,t),Ai===null&&(i===null||Ks.current!==null||i.memoizedState!==null)&&(Ai=t)}function fm(t){if(t.tag===22){if(ye(cn,cn.current),ye(oi,t),Ai===null){var i=t.alternate;i!==null&&i.memoizedState!==null&&(Ai=t)}}else Aa()}function Aa(){ye(cn,cn.current),ye(oi,oi.current)}function Yi(t){oe(oi),Ai===t&&(Ai=null),oe(cn)}var cn=$(0);function Hl(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||ih(s)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function pf(t,i,s,o){i=t.memoizedState,s=s(o,i),s=s==null?i:g({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var mf={enqueueSetState:function(t,i,s){t=t._reactInternals;var o=Zn(),f=Ma(o);f.payload=i,s!=null&&(f.callback=s),i=Ea(t,f,o),i!==null&&(Qn(i,t,o),mo(i,t,o))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var o=Zn(),f=Ma(o);f.tag=1,f.payload=i,s!=null&&(f.callback=s),i=Ea(t,f,o),i!==null&&(Qn(i,t,o),mo(i,t,o))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=Zn(),o=Ma(s);o.tag=2,i!=null&&(o.callback=i),i=Ea(t,o,s),i!==null&&(Qn(i,t,s),mo(i,t,s))}};function hm(t,i,s,o,f,m,b){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,m,b):i.prototype&&i.prototype.isPureReactComponent?!ao(s,o)||!ao(f,m):!0}function dm(t,i,s,o){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,o),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,o),i.state!==t&&mf.enqueueReplaceState(i,i.state,null)}function ms(t,i){var s=i;if("ref"in i){s={};for(var o in i)o!=="ref"&&(s[o]=i[o])}if(t=t.defaultProps){s===i&&(s=g({},s));for(var f in t)s[f]===void 0&&(s[f]=t[f])}return s}var Gl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function pm(t){Gl(t)}function mm(t){console.error(t)}function gm(t){Gl(t)}function kl(t,i){try{var s=t.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(o){setTimeout(function(){throw o})}}function vm(t,i,s){try{var o=t.onCaughtError;o(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function gf(t,i,s){return s=Ma(s),s.tag=3,s.payload={element:null},s.callback=function(){kl(t,i)},s}function _m(t){return t=Ma(t),t.tag=3,t}function xm(t,i,s,o){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var m=o.value;t.payload=function(){return f(m)},t.callback=function(){vm(i,s,o)}}var b=s.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(t.callback=function(){vm(i,s,o),typeof f!="function"&&(Ua===null?Ua=new Set([this]):Ua.add(this));var C=o.stack;this.componentDidCatch(o.value,{componentStack:C!==null?C:""})})}function jx(t,i,s,o,f){if(s.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(i=s.alternate,i!==null&&co(i,s,f,!0),s=oi.current,s!==null){switch(s.tag){case 13:return Ai===null?Hf():s.alternate===null&&Zt===0&&(Zt=3),s.flags&=-257,s.flags|=65536,s.lanes=f,o===ju?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([o]):i.add(o),kf(t,o,f)),!1;case 22:return s.flags|=65536,o===ju?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([o])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([o]):s.add(o)),kf(t,o,f)),!1}throw Error(a(435,s.tag))}return kf(t,o,f),Hf(),!1}if(wt)return i=oi.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,o!==Bu&&(t=Error(a(422),{cause:o}),lo(ii(t,s)))):(o!==Bu&&(i=Error(a(423),{cause:o}),lo(ii(i,s))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,o=ii(o,s),f=gf(t.stateNode,o,f),Xu(t,f),Zt!==4&&(Zt=2)),!1;var m=Error(a(520),{cause:o});if(m=ii(m,s),Do===null?Do=[m]:Do.push(m),Zt!==4&&(Zt=2),i===null)return!0;o=ii(o,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,t=f&-f,s.lanes|=t,t=gf(s.stateNode,o,t),Xu(s,t),!1;case 1:if(i=s.type,m=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ua===null||!Ua.has(m))))return s.flags|=65536,f&=-f,s.lanes|=f,f=_m(f),xm(f,t,s,o),Xu(s,f),!1}s=s.return}while(s!==null);return!1}var ym=Error(a(461)),pn=!1;function Sn(t,i,s,o){i.child=t===null?um(i,null,s,o):er(i,t.child,s,o)}function Sm(t,i,s,o,f){s=s.render;var m=i.ref;if("ref"in o){var b={};for(var C in o)C!=="ref"&&(b[C]=o[C])}else b=o;return hs(i),o=Ju(t,i,s,b,m,f),C=$u(),t!==null&&!pn?(ef(t,i,f),Ki(t,i,f)):(wt&&C&&Pu(i),i.flags|=1,Sn(t,i,o,f),i.child)}function Mm(t,i,s,o,f){if(t===null){var m=s.type;return typeof m=="function"&&!Uu(m)&&m.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=m,Em(t,i,m,o,f)):(t=Sl(s.type,null,o,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(m=t.child,!bf(t,f)){var b=m.memoizedProps;if(s=s.compare,s=s!==null?s:ao,s(b,o)&&t.ref===i.ref)return Ki(t,i,f)}return i.flags|=1,t=ki(m,o),t.ref=i.ref,t.return=i,i.child=t}function Em(t,i,s,o,f){if(t!==null){var m=t.memoizedProps;if(ao(m,o)&&t.ref===i.ref)if(pn=!1,i.pendingProps=o=m,bf(t,f))(t.flags&131072)!==0&&(pn=!0);else return i.lanes=t.lanes,Ki(t,i,f)}return vf(t,i,s,o,f)}function bm(t,i,s){var o=i.pendingProps,f=o.children,m=t!==null?t.memoizedState:null;if(o.mode==="hidden"){if((i.flags&128)!==0){if(o=m!==null?m.baseLanes|s:s,t!==null){for(f=i.child=t.child,m=0;f!==null;)m=m|f.lanes|f.childLanes,f=f.sibling;i.childLanes=m&~o}else i.childLanes=0,i.child=null;return Tm(t,i,o,s)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&Al(i,m!==null?m.cachePool:null),m!==null?Ep(i,m):Ku(),fm(i);else return i.lanes=i.childLanes=536870912,Tm(t,i,m!==null?m.baseLanes|s:s,s)}else m!==null?(Al(i,m.cachePool),Ep(i,m),Aa(),i.memoizedState=null):(t!==null&&Al(i,null),Ku(),Aa());return Sn(t,i,f,s),i.child}function Tm(t,i,s,o){var f=Vu();return f=f===null?null:{parent:ln._currentValue,pool:f},i.memoizedState={baseLanes:s,cachePool:f},t!==null&&Al(i,null),Ku(),fm(i),t!==null&&co(t,i,o,!0),null}function Vl(t,i){var s=i.ref;if(s===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(t===null||t.ref!==s)&&(i.flags|=4194816)}}function vf(t,i,s,o,f){return hs(i),s=Ju(t,i,s,o,void 0,f),o=$u(),t!==null&&!pn?(ef(t,i,f),Ki(t,i,f)):(wt&&o&&Pu(i),i.flags|=1,Sn(t,i,s,f),i.child)}function Am(t,i,s,o,f,m){return hs(i),i.updateQueue=null,s=Tp(i,o,s,f),bp(t),o=$u(),t!==null&&!pn?(ef(t,i,m),Ki(t,i,m)):(wt&&o&&Pu(i),i.flags|=1,Sn(t,i,s,m),i.child)}function wm(t,i,s,o,f){if(hs(i),i.stateNode===null){var m=js,b=s.contextType;typeof b=="object"&&b!==null&&(m=wn(b)),m=new s(o,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=mf,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=o,m.state=i.memoizedState,m.refs={},Wu(i),b=s.contextType,m.context=typeof b=="object"&&b!==null?wn(b):js,m.state=i.memoizedState,b=s.getDerivedStateFromProps,typeof b=="function"&&(pf(i,s,b,o),m.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(b=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),b!==m.state&&mf.enqueueReplaceState(m,m.state,null),vo(i,o,m,f),go(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),o=!0}else if(t===null){m=i.stateNode;var C=i.memoizedProps,H=ms(s,C);m.props=H;var se=m.context,pe=s.contextType;b=js,typeof pe=="object"&&pe!==null&&(b=wn(pe));var ve=s.getDerivedStateFromProps;pe=typeof ve=="function"||typeof m.getSnapshotBeforeUpdate=="function",C=i.pendingProps!==C,pe||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(C||se!==b)&&dm(i,m,o,b),Sa=!1;var re=i.memoizedState;m.state=re,vo(i,o,m,f),go(),se=i.memoizedState,C||re!==se||Sa?(typeof ve=="function"&&(pf(i,s,ve,o),se=i.memoizedState),(H=Sa||hm(i,s,H,o,re,se,b))?(pe||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=o,i.memoizedState=se),m.props=o,m.state=se,m.context=b,o=H):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),o=!1)}else{m=i.stateNode,qu(t,i),b=i.memoizedProps,pe=ms(s,b),m.props=pe,ve=i.pendingProps,re=m.context,se=s.contextType,H=js,typeof se=="object"&&se!==null&&(H=wn(se)),C=s.getDerivedStateFromProps,(se=typeof C=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(b!==ve||re!==H)&&dm(i,m,o,H),Sa=!1,re=i.memoizedState,m.state=re,vo(i,o,m,f),go();var le=i.memoizedState;b!==ve||re!==le||Sa||t!==null&&t.dependencies!==null&&bl(t.dependencies)?(typeof C=="function"&&(pf(i,s,C,o),le=i.memoizedState),(pe=Sa||hm(i,s,pe,o,re,le,H)||t!==null&&t.dependencies!==null&&bl(t.dependencies))?(se||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(o,le,H),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(o,le,H)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||b===t.memoizedProps&&re===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||b===t.memoizedProps&&re===t.memoizedState||(i.flags|=1024),i.memoizedProps=o,i.memoizedState=le),m.props=o,m.state=le,m.context=H,o=pe):(typeof m.componentDidUpdate!="function"||b===t.memoizedProps&&re===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||b===t.memoizedProps&&re===t.memoizedState||(i.flags|=1024),o=!1)}return m=o,Vl(t,i),o=(i.flags&128)!==0,m||o?(m=i.stateNode,s=o&&typeof s.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,t!==null&&o?(i.child=er(i,t.child,null,f),i.child=er(i,null,s,f)):Sn(t,i,s,f),i.memoizedState=m.state,t=i.child):t=Ki(t,i,f),t}function Rm(t,i,s,o){return oo(),i.flags|=256,Sn(t,i,s,o),i.child}var _f={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xf(t){return{baseLanes:t,cachePool:mp()}}function yf(t,i,s){return t=t!==null?t.childLanes&~s:0,i&&(t|=li),t}function Cm(t,i,s){var o=i.pendingProps,f=!1,m=(i.flags&128)!==0,b;if((b=m)||(b=t!==null&&t.memoizedState===null?!1:(cn.current&2)!==0),b&&(f=!0,i.flags&=-129),b=(i.flags&32)!==0,i.flags&=-33,t===null){if(wt){if(f?Ta(i):Aa(),wt){var C=Kt,H;if(H=C){e:{for(H=C,C=Ti;H.nodeType!==8;){if(!C){C=null;break e}if(H=vi(H.nextSibling),H===null){C=null;break e}}C=H}C!==null?(i.memoizedState={dehydrated:C,treeContext:os!==null?{id:Vi,overflow:ji}:null,retryLane:536870912,hydrationErrors:null},H=qn(18,null,null,0),H.stateNode=C,H.return=i,i.child=H,Un=i,Kt=null,H=!0):H=!1}H||us(i)}if(C=i.memoizedState,C!==null&&(C=C.dehydrated,C!==null))return ih(C)?i.lanes=32:i.lanes=536870912,null;Yi(i)}return C=o.children,o=o.fallback,f?(Aa(),f=i.mode,C=jl({mode:"hidden",children:C},f),o=rs(o,f,s,null),C.return=i,o.return=i,C.sibling=o,i.child=C,f=i.child,f.memoizedState=xf(s),f.childLanes=yf(t,b,s),i.memoizedState=_f,o):(Ta(i),Sf(i,C))}if(H=t.memoizedState,H!==null&&(C=H.dehydrated,C!==null)){if(m)i.flags&256?(Ta(i),i.flags&=-257,i=Mf(t,i,s)):i.memoizedState!==null?(Aa(),i.child=t.child,i.flags|=128,i=null):(Aa(),f=o.fallback,C=i.mode,o=jl({mode:"visible",children:o.children},C),f=rs(f,C,s,null),f.flags|=2,o.return=i,f.return=i,o.sibling=f,i.child=o,er(i,t.child,null,s),o=i.child,o.memoizedState=xf(s),o.childLanes=yf(t,b,s),i.memoizedState=_f,i=f);else if(Ta(i),ih(C)){if(b=C.nextSibling&&C.nextSibling.dataset,b)var se=b.dgst;b=se,o=Error(a(419)),o.stack="",o.digest=b,lo({value:o,source:null,stack:null}),i=Mf(t,i,s)}else if(pn||co(t,i,s,!1),b=(s&t.childLanes)!==0,pn||b){if(b=Ht,b!==null&&(o=s&-s,o=(o&42)!==0?1:Yt(o),o=(o&(b.suspendedLanes|s))!==0?0:o,o!==0&&o!==H.retryLane))throw H.retryLane=o,Vs(t,o),Qn(b,t,o),ym;C.data==="$?"||Hf(),i=Mf(t,i,s)}else C.data==="$?"?(i.flags|=192,i.child=t.child,i=null):(t=H.treeContext,Kt=vi(C.nextSibling),Un=i,wt=!0,cs=null,Ti=!1,t!==null&&(si[ri++]=Vi,si[ri++]=ji,si[ri++]=os,Vi=t.id,ji=t.overflow,os=i),i=Sf(i,o.children),i.flags|=4096);return i}return f?(Aa(),f=o.fallback,C=i.mode,H=t.child,se=H.sibling,o=ki(H,{mode:"hidden",children:o.children}),o.subtreeFlags=H.subtreeFlags&65011712,se!==null?f=ki(se,f):(f=rs(f,C,s,null),f.flags|=2),f.return=i,o.return=i,o.sibling=f,i.child=o,o=f,f=i.child,C=t.child.memoizedState,C===null?C=xf(s):(H=C.cachePool,H!==null?(se=ln._currentValue,H=H.parent!==se?{parent:se,pool:se}:H):H=mp(),C={baseLanes:C.baseLanes|s,cachePool:H}),f.memoizedState=C,f.childLanes=yf(t,b,s),i.memoizedState=_f,o):(Ta(i),s=t.child,t=s.sibling,s=ki(s,{mode:"visible",children:o.children}),s.return=i,s.sibling=null,t!==null&&(b=i.deletions,b===null?(i.deletions=[t],i.flags|=16):b.push(t)),i.child=s,i.memoizedState=null,s)}function Sf(t,i){return i=jl({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function jl(t,i){return t=qn(22,t,null,i),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Mf(t,i,s){return er(i,t.child,null,s),t=Sf(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Dm(t,i,s){t.lanes|=i;var o=t.alternate;o!==null&&(o.lanes|=i),Fu(t.return,i,s)}function Ef(t,i,s,o,f){var m=t.memoizedState;m===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:o,tail:s,tailMode:f}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=o,m.tail=s,m.tailMode=f)}function Nm(t,i,s){var o=i.pendingProps,f=o.revealOrder,m=o.tail;if(Sn(t,i,o.children,s),o=cn.current,(o&2)!==0)o=o&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Dm(t,s,i);else if(t.tag===19)Dm(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}switch(ye(cn,o),f){case"forwards":for(s=i.child,f=null;s!==null;)t=s.alternate,t!==null&&Hl(t)===null&&(f=s),s=s.sibling;s=f,s===null?(f=i.child,i.child=null):(f=s.sibling,s.sibling=null),Ef(i,!1,f,s,m);break;case"backwards":for(s=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&Hl(t)===null){i.child=f;break}t=f.sibling,f.sibling=s,s=f,f=t}Ef(i,!0,s,null,m);break;case"together":Ef(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Ki(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),Na|=i.lanes,(s&i.childLanes)===0)if(t!==null){if(co(t,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(a(153));if(i.child!==null){for(t=i.child,s=ki(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=ki(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function bf(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&bl(t)))}function Wx(t,i,s){switch(i.tag){case 3:Fe(i,i.stateNode.containerInfo),ya(i,ln,t.memoizedState.cache),oo();break;case 27:case 5:pt(i);break;case 4:Fe(i,i.stateNode.containerInfo);break;case 10:ya(i,i.type,i.memoizedProps.value);break;case 13:var o=i.memoizedState;if(o!==null)return o.dehydrated!==null?(Ta(i),i.flags|=128,null):(s&i.child.childLanes)!==0?Cm(t,i,s):(Ta(i),t=Ki(t,i,s),t!==null?t.sibling:null);Ta(i);break;case 19:var f=(t.flags&128)!==0;if(o=(s&i.childLanes)!==0,o||(co(t,i,s,!1),o=(s&i.childLanes)!==0),f){if(o)return Nm(t,i,s);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),ye(cn,cn.current),o)break;return null;case 22:case 23:return i.lanes=0,bm(t,i,s);case 24:ya(i,ln,t.memoizedState.cache)}return Ki(t,i,s)}function Um(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps)pn=!0;else{if(!bf(t,s)&&(i.flags&128)===0)return pn=!1,Wx(t,i,s);pn=(t.flags&131072)!==0}else pn=!1,wt&&(i.flags&1048576)!==0&&lp(i,El,i.index);switch(i.lanes=0,i.tag){case 16:e:{t=i.pendingProps;var o=i.elementType,f=o._init;if(o=f(o._payload),i.type=o,typeof o=="function")Uu(o)?(t=ms(o,t),i.tag=1,i=wm(null,i,o,t,s)):(i.tag=0,i=vf(null,i,o,t,s));else{if(o!=null){if(f=o.$$typeof,f===D){i.tag=11,i=Sm(null,i,o,t,s);break e}else if(f===z){i.tag=14,i=Mm(null,i,o,t,s);break e}}throw i=Q(o)||o,Error(a(306,i,""))}}return i;case 0:return vf(t,i,i.type,i.pendingProps,s);case 1:return o=i.type,f=ms(o,i.pendingProps),wm(t,i,o,f,s);case 3:e:{if(Fe(i,i.stateNode.containerInfo),t===null)throw Error(a(387));o=i.pendingProps;var m=i.memoizedState;f=m.element,qu(t,i),vo(i,o,null,s);var b=i.memoizedState;if(o=b.cache,ya(i,ln,o),o!==m.cache&&Hu(i,[ln],s,!0),go(),o=b.element,m.isDehydrated)if(m={element:o,isDehydrated:!1,cache:b.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=Rm(t,i,o,s);break e}else if(o!==f){f=ii(Error(a(424)),i),lo(f),i=Rm(t,i,o,s);break e}else{switch(t=i.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Kt=vi(t.firstChild),Un=i,wt=!0,cs=null,Ti=!0,s=um(i,null,o,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(oo(),o===f){i=Ki(t,i,s);break e}Sn(t,i,o,s)}i=i.child}return i;case 26:return Vl(t,i),t===null?(s=zg(i.type,null,i.pendingProps,null))?i.memoizedState=s:wt||(s=i.type,t=i.pendingProps,o=ac(_e.current).createElement(s),o[en]=i,o[xn]=t,En(o,s,t),te(o),i.stateNode=o):i.memoizedState=zg(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return pt(i),t===null&&wt&&(o=i.stateNode=Lg(i.type,i.pendingProps,_e.current),Un=i,Ti=!0,f=Kt,Pa(i.type)?(ah=f,Kt=vi(o.firstChild)):Kt=f),Sn(t,i,i.pendingProps.children,s),Vl(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&wt&&((f=o=Kt)&&(o=xy(o,i.type,i.pendingProps,Ti),o!==null?(i.stateNode=o,Un=i,Kt=vi(o.firstChild),Ti=!1,f=!0):f=!1),f||us(i)),pt(i),f=i.type,m=i.pendingProps,b=t!==null?t.memoizedProps:null,o=m.children,eh(f,m)?o=null:b!==null&&eh(f,b)&&(i.flags|=32),i.memoizedState!==null&&(f=Ju(t,i,Bx,null,null,s),Fo._currentValue=f),Vl(t,i),Sn(t,i,o,s),i.child;case 6:return t===null&&wt&&((t=s=Kt)&&(s=yy(s,i.pendingProps,Ti),s!==null?(i.stateNode=s,Un=i,Kt=null,t=!0):t=!1),t||us(i)),null;case 13:return Cm(t,i,s);case 4:return Fe(i,i.stateNode.containerInfo),o=i.pendingProps,t===null?i.child=er(i,null,o,s):Sn(t,i,o,s),i.child;case 11:return Sm(t,i,i.type,i.pendingProps,s);case 7:return Sn(t,i,i.pendingProps,s),i.child;case 8:return Sn(t,i,i.pendingProps.children,s),i.child;case 12:return Sn(t,i,i.pendingProps.children,s),i.child;case 10:return o=i.pendingProps,ya(i,i.type,o.value),Sn(t,i,o.children,s),i.child;case 9:return f=i.type._context,o=i.pendingProps.children,hs(i),f=wn(f),o=o(f),i.flags|=1,Sn(t,i,o,s),i.child;case 14:return Mm(t,i,i.type,i.pendingProps,s);case 15:return Em(t,i,i.type,i.pendingProps,s);case 19:return Nm(t,i,s);case 31:return o=i.pendingProps,s=i.mode,o={mode:o.mode,children:o.children},t===null?(s=jl(o,s),s.ref=i.ref,i.child=s,s.return=i,i=s):(s=ki(t.child,o),s.ref=i.ref,i.child=s,s.return=i,i=s),i;case 22:return bm(t,i,s);case 24:return hs(i),o=wn(ln),t===null?(f=Vu(),f===null&&(f=Ht,m=Gu(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=s),f=m),i.memoizedState={parent:o,cache:f},Wu(i),ya(i,ln,f)):((t.lanes&s)!==0&&(qu(t,i),vo(i,null,null,s),go()),f=t.memoizedState,m=i.memoizedState,f.parent!==o?(f={parent:o,cache:o},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),ya(i,ln,o)):(o=m.cache,ya(i,ln,o),o!==f.cache&&Hu(i,[ln],s,!0))),Sn(t,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function Zi(t){t.flags|=4}function Lm(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Gg(i)){if(i=oi.current,i!==null&&((St&4194048)===St?Ai!==null:(St&62914560)!==St&&(St&536870912)===0||i!==Ai))throw po=ju,gp;t.flags|=8192}}function Wl(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?me():536870912,t.lanes|=i,ar|=i)}function bo(t,i){if(!wt)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Xt(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,o=0;if(i)for(var f=t.child;f!==null;)s|=f.lanes|f.childLanes,o|=f.subtreeFlags&65011712,o|=f.flags&65011712,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)s|=f.lanes|f.childLanes,o|=f.subtreeFlags,o|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=o,t.childLanes=s,i}function qx(t,i,s){var o=i.pendingProps;switch(zu(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xt(i),null;case 1:return Xt(i),null;case 3:return s=i.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),i.memoizedState.cache!==o&&(i.flags|=2048),qi(ln),Je(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(ro(i)?Zi(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,fp())),Xt(i),null;case 26:return s=i.memoizedState,t===null?(Zi(i),s!==null?(Xt(i),Lm(i,s)):(Xt(i),i.flags&=-16777217)):s?s!==t.memoizedState?(Zi(i),Xt(i),Lm(i,s)):(Xt(i),i.flags&=-16777217):(t.memoizedProps!==o&&Zi(i),Xt(i),i.flags&=-16777217),null;case 27:X(i),s=_e.current;var f=i.type;if(t!==null&&i.stateNode!=null)t.memoizedProps!==o&&Zi(i);else{if(!o){if(i.stateNode===null)throw Error(a(166));return Xt(i),null}t=ee.current,ro(i)?cp(i):(t=Lg(f,o,s),i.stateNode=t,Zi(i))}return Xt(i),null;case 5:if(X(i),s=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==o&&Zi(i);else{if(!o){if(i.stateNode===null)throw Error(a(166));return Xt(i),null}if(t=ee.current,ro(i))cp(i);else{switch(f=ac(_e.current),t){case 1:t=f.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:t=f.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":t=f.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":t=f.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":t=f.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof o.is=="string"?f.createElement("select",{is:o.is}):f.createElement("select"),o.multiple?t.multiple=!0:o.size&&(t.size=o.size);break;default:t=typeof o.is=="string"?f.createElement(s,{is:o.is}):f.createElement(s)}}t[en]=i,t[xn]=o;e:for(f=i.child;f!==null;){if(f.tag===5||f.tag===6)t.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===i)break e;for(;f.sibling===null;){if(f.return===null||f.return===i)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}i.stateNode=t;e:switch(En(t,s,o),s){case"button":case"input":case"select":case"textarea":t=!!o.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&Zi(i)}}return Xt(i),i.flags&=-16777217,null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==o&&Zi(i);else{if(typeof o!="string"&&i.stateNode===null)throw Error(a(166));if(t=_e.current,ro(i)){if(t=i.stateNode,s=i.memoizedProps,o=null,f=Un,f!==null)switch(f.tag){case 27:case 5:o=f.memoizedProps}t[en]=i,t=!!(t.nodeValue===s||o!==null&&o.suppressHydrationWarning===!0||Ag(t.nodeValue,s)),t||us(i)}else t=ac(t).createTextNode(o),t[en]=i,i.stateNode=t}return Xt(i),null;case 13:if(o=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=ro(i),o!==null&&o.dehydrated!==null){if(t===null){if(!f)throw Error(a(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[en]=i}else oo(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Xt(i),f=!1}else f=fp(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(Yi(i),i):(Yi(i),null)}if(Yi(i),(i.flags&128)!==0)return i.lanes=s,i;if(s=o!==null,t=t!==null&&t.memoizedState!==null,s){o=i.child,f=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(f=o.alternate.memoizedState.cachePool.pool);var m=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(m=o.memoizedState.cachePool.pool),m!==f&&(o.flags|=2048)}return s!==t&&s&&(i.child.flags|=8192),Wl(i,i.updateQueue),Xt(i),null;case 4:return Je(),t===null&&Kf(i.stateNode.containerInfo),Xt(i),null;case 10:return qi(i.type),Xt(i),null;case 19:if(oe(cn),f=i.memoizedState,f===null)return Xt(i),null;if(o=(i.flags&128)!==0,m=f.rendering,m===null)if(o)bo(f,!1);else{if(Zt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(m=Hl(t),m!==null){for(i.flags|=128,bo(f,!1),t=m.updateQueue,i.updateQueue=t,Wl(i,t),i.subtreeFlags=0,t=s,s=i.child;s!==null;)op(s,t),s=s.sibling;return ye(cn,cn.current&1|2),i.child}t=t.sibling}f.tail!==null&&$e()>Yl&&(i.flags|=128,o=!0,bo(f,!1),i.lanes=4194304)}else{if(!o)if(t=Hl(m),t!==null){if(i.flags|=128,o=!0,t=t.updateQueue,i.updateQueue=t,Wl(i,t),bo(f,!0),f.tail===null&&f.tailMode==="hidden"&&!m.alternate&&!wt)return Xt(i),null}else 2*$e()-f.renderingStartTime>Yl&&s!==536870912&&(i.flags|=128,o=!0,bo(f,!1),i.lanes=4194304);f.isBackwards?(m.sibling=i.child,i.child=m):(t=f.last,t!==null?t.sibling=m:i.child=m,f.last=m)}return f.tail!==null?(i=f.tail,f.rendering=i,f.tail=i.sibling,f.renderingStartTime=$e(),i.sibling=null,t=cn.current,ye(cn,o?t&1|2:t&1),i):(Xt(i),null);case 22:case 23:return Yi(i),Zu(),o=i.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(i.flags|=8192):o&&(i.flags|=8192),o?(s&536870912)!==0&&(i.flags&128)===0&&(Xt(i),i.subtreeFlags&6&&(i.flags|=8192)):Xt(i),s=i.updateQueue,s!==null&&Wl(i,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),o=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),o!==s&&(i.flags|=2048),t!==null&&oe(ds),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),qi(ln),Xt(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function Xx(t,i){switch(zu(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return qi(ln),Je(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return X(i),null;case 13:if(Yi(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(a(340));oo()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return oe(cn),null;case 4:return Je(),null;case 10:return qi(i.type),null;case 22:case 23:return Yi(i),Zu(),t!==null&&oe(ds),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return qi(ln),null;case 25:return null;default:return null}}function Om(t,i){switch(zu(i),i.tag){case 3:qi(ln),Je();break;case 26:case 27:case 5:X(i);break;case 4:Je();break;case 13:Yi(i);break;case 19:oe(cn);break;case 10:qi(i.type);break;case 22:case 23:Yi(i),Zu(),t!==null&&oe(ds);break;case 24:qi(ln)}}function To(t,i){try{var s=i.updateQueue,o=s!==null?s.lastEffect:null;if(o!==null){var f=o.next;s=f;do{if((s.tag&t)===t){o=void 0;var m=s.create,b=s.inst;o=m(),b.destroy=o}s=s.next}while(s!==f)}}catch(C){It(i,i.return,C)}}function wa(t,i,s){try{var o=i.updateQueue,f=o!==null?o.lastEffect:null;if(f!==null){var m=f.next;o=m;do{if((o.tag&t)===t){var b=o.inst,C=b.destroy;if(C!==void 0){b.destroy=void 0,f=i;var H=s,se=C;try{se()}catch(pe){It(f,H,pe)}}}o=o.next}while(o!==m)}}catch(pe){It(i,i.return,pe)}}function Pm(t){var i=t.updateQueue;if(i!==null){var s=t.stateNode;try{Mp(i,s)}catch(o){It(t,t.return,o)}}}function zm(t,i,s){s.props=ms(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(o){It(t,i,o)}}function Ao(t,i){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof s=="function"?t.refCleanup=s(o):s.current=o}}catch(f){It(t,i,f)}}function wi(t,i){var s=t.ref,o=t.refCleanup;if(s!==null)if(typeof o=="function")try{o()}catch(f){It(t,i,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){It(t,i,f)}else s.current=null}function Bm(t){var i=t.type,s=t.memoizedProps,o=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&o.focus();break e;case"img":s.src?o.src=s.src:s.srcSet&&(o.srcset=s.srcSet)}}catch(f){It(t,t.return,f)}}function Tf(t,i,s){try{var o=t.stateNode;py(o,t.type,s,i),o[xn]=i}catch(f){It(t,t.return,f)}}function Im(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Pa(t.type)||t.tag===4}function Af(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Im(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Pa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function wf(t,i,s){var o=t.tag;if(o===5||o===6)t=t.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(t),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=ic));else if(o!==4&&(o===27&&Pa(t.type)&&(s=t.stateNode,i=null),t=t.child,t!==null))for(wf(t,i,s),t=t.sibling;t!==null;)wf(t,i,s),t=t.sibling}function ql(t,i,s){var o=t.tag;if(o===5||o===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(o!==4&&(o===27&&Pa(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(ql(t,i,s),t=t.sibling;t!==null;)ql(t,i,s),t=t.sibling}function Fm(t){var i=t.stateNode,s=t.memoizedProps;try{for(var o=t.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);En(i,o,s),i[en]=t,i[xn]=s}catch(m){It(t,t.return,m)}}var Qi=!1,Jt=!1,Rf=!1,Hm=typeof WeakSet=="function"?WeakSet:Set,mn=null;function Yx(t,i){if(t=t.containerInfo,Jf=uc,t=Qd(t),Tu(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var o=s.getSelection&&s.getSelection();if(o&&o.rangeCount!==0){s=o.anchorNode;var f=o.anchorOffset,m=o.focusNode;o=o.focusOffset;try{s.nodeType,m.nodeType}catch{s=null;break e}var b=0,C=-1,H=-1,se=0,pe=0,ve=t,re=null;t:for(;;){for(var le;ve!==s||f!==0&&ve.nodeType!==3||(C=b+f),ve!==m||o!==0&&ve.nodeType!==3||(H=b+o),ve.nodeType===3&&(b+=ve.nodeValue.length),(le=ve.firstChild)!==null;)re=ve,ve=le;for(;;){if(ve===t)break t;if(re===s&&++se===f&&(C=b),re===m&&++pe===o&&(H=b),(le=ve.nextSibling)!==null)break;ve=re,re=ve.parentNode}ve=le}s=C===-1||H===-1?null:{start:C,end:H}}else s=null}s=s||{start:0,end:0}}else s=null;for($f={focusedElem:t,selectionRange:s},uc=!1,mn=i;mn!==null;)if(i=mn,t=i.child,(i.subtreeFlags&1024)!==0&&t!==null)t.return=i,mn=t;else for(;mn!==null;){switch(i=mn,m=i.alternate,t=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&m!==null){t=void 0,s=i,f=m.memoizedProps,m=m.memoizedState,o=s.stateNode;try{var tt=ms(s.type,f,s.elementType===s.type);t=o.getSnapshotBeforeUpdate(tt,m),o.__reactInternalSnapshotBeforeUpdate=t}catch(Xe){It(s,s.return,Xe)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,s=t.nodeType,s===9)nh(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":nh(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=i.sibling,t!==null){t.return=i.return,mn=t;break}mn=i.return}}function Gm(t,i,s){var o=s.flags;switch(s.tag){case 0:case 11:case 15:Ra(t,s),o&4&&To(5,s);break;case 1:if(Ra(t,s),o&4)if(t=s.stateNode,i===null)try{t.componentDidMount()}catch(b){It(s,s.return,b)}else{var f=ms(s.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(f,i,t.__reactInternalSnapshotBeforeUpdate)}catch(b){It(s,s.return,b)}}o&64&&Pm(s),o&512&&Ao(s,s.return);break;case 3:if(Ra(t,s),o&64&&(t=s.updateQueue,t!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{Mp(t,i)}catch(b){It(s,s.return,b)}}break;case 27:i===null&&o&4&&Fm(s);case 26:case 5:Ra(t,s),i===null&&o&4&&Bm(s),o&512&&Ao(s,s.return);break;case 12:Ra(t,s);break;case 13:Ra(t,s),o&4&&jm(t,s),o&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=iy.bind(null,s),Sy(t,s))));break;case 22:if(o=s.memoizedState!==null||Qi,!o){i=i!==null&&i.memoizedState!==null||Jt,f=Qi;var m=Jt;Qi=o,(Jt=i)&&!m?Ca(t,s,(s.subtreeFlags&8772)!==0):Ra(t,s),Qi=f,Jt=m}break;case 30:break;default:Ra(t,s)}}function km(t){var i=t.alternate;i!==null&&(t.alternate=null,km(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&Xr(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var jt=null,Bn=!1;function Ji(t,i,s){for(s=s.child;s!==null;)Vm(t,i,s),s=s.sibling}function Vm(t,i,s){if(Re&&typeof Re.onCommitFiberUnmount=="function")try{Re.onCommitFiberUnmount(ke,s)}catch{}switch(s.tag){case 26:Jt||wi(s,i),Ji(t,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:Jt||wi(s,i);var o=jt,f=Bn;Pa(s.type)&&(jt=s.stateNode,Bn=!1),Ji(t,i,s),Po(s.stateNode),jt=o,Bn=f;break;case 5:Jt||wi(s,i);case 6:if(o=jt,f=Bn,jt=null,Ji(t,i,s),jt=o,Bn=f,jt!==null)if(Bn)try{(jt.nodeType===9?jt.body:jt.nodeName==="HTML"?jt.ownerDocument.body:jt).removeChild(s.stateNode)}catch(m){It(s,i,m)}else try{jt.removeChild(s.stateNode)}catch(m){It(s,i,m)}break;case 18:jt!==null&&(Bn?(t=jt,Ng(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),Vo(t)):Ng(jt,s.stateNode));break;case 4:o=jt,f=Bn,jt=s.stateNode.containerInfo,Bn=!0,Ji(t,i,s),jt=o,Bn=f;break;case 0:case 11:case 14:case 15:Jt||wa(2,s,i),Jt||wa(4,s,i),Ji(t,i,s);break;case 1:Jt||(wi(s,i),o=s.stateNode,typeof o.componentWillUnmount=="function"&&zm(s,i,o)),Ji(t,i,s);break;case 21:Ji(t,i,s);break;case 22:Jt=(o=Jt)||s.memoizedState!==null,Ji(t,i,s),Jt=o;break;default:Ji(t,i,s)}}function jm(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Vo(t)}catch(s){It(i,i.return,s)}}function Kx(t){switch(t.tag){case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new Hm),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new Hm),i;default:throw Error(a(435,t.tag))}}function Cf(t,i){var s=Kx(t);i.forEach(function(o){var f=ay.bind(null,t,o);s.has(o)||(s.add(o),o.then(f,f))})}function Xn(t,i){var s=i.deletions;if(s!==null)for(var o=0;o<s.length;o++){var f=s[o],m=t,b=i,C=b;e:for(;C!==null;){switch(C.tag){case 27:if(Pa(C.type)){jt=C.stateNode,Bn=!1;break e}break;case 5:jt=C.stateNode,Bn=!1;break e;case 3:case 4:jt=C.stateNode.containerInfo,Bn=!0;break e}C=C.return}if(jt===null)throw Error(a(160));Vm(m,b,f),jt=null,Bn=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)Wm(i,t),i=i.sibling}var gi=null;function Wm(t,i){var s=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Xn(i,t),Yn(t),o&4&&(wa(3,t,t.return),To(3,t),wa(5,t,t.return));break;case 1:Xn(i,t),Yn(t),o&512&&(Jt||s===null||wi(s,s.return)),o&64&&Qi&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?o:s.concat(o))));break;case 26:var f=gi;if(Xn(i,t),Yn(t),o&512&&(Jt||s===null||wi(s,s.return)),o&4){var m=s!==null?s.memoizedState:null;if(o=t.memoizedState,s===null)if(o===null)if(t.stateNode===null){e:{o=t.type,s=t.memoizedProps,f=f.ownerDocument||f;t:switch(o){case"title":m=f.getElementsByTagName("title")[0],(!m||m[ma]||m[en]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(o),f.head.insertBefore(m,f.querySelector("head > title"))),En(m,o,s),m[en]=t,te(m),o=m;break e;case"link":var b=Fg("link","href",f).get(o+(s.href||""));if(b){for(var C=0;C<b.length;C++)if(m=b[C],m.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&m.getAttribute("rel")===(s.rel==null?null:s.rel)&&m.getAttribute("title")===(s.title==null?null:s.title)&&m.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){b.splice(C,1);break t}}m=f.createElement(o),En(m,o,s),f.head.appendChild(m);break;case"meta":if(b=Fg("meta","content",f).get(o+(s.content||""))){for(C=0;C<b.length;C++)if(m=b[C],m.getAttribute("content")===(s.content==null?null:""+s.content)&&m.getAttribute("name")===(s.name==null?null:s.name)&&m.getAttribute("property")===(s.property==null?null:s.property)&&m.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&m.getAttribute("charset")===(s.charSet==null?null:s.charSet)){b.splice(C,1);break t}}m=f.createElement(o),En(m,o,s),f.head.appendChild(m);break;default:throw Error(a(468,o))}m[en]=t,te(m),o=m}t.stateNode=o}else Hg(f,t.type,t.stateNode);else t.stateNode=Ig(f,o,t.memoizedProps);else m!==o?(m===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):m.count--,o===null?Hg(f,t.type,t.stateNode):Ig(f,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Tf(t,t.memoizedProps,s.memoizedProps)}break;case 27:Xn(i,t),Yn(t),o&512&&(Jt||s===null||wi(s,s.return)),s!==null&&o&4&&Tf(t,t.memoizedProps,s.memoizedProps);break;case 5:if(Xn(i,t),Yn(t),o&512&&(Jt||s===null||wi(s,s.return)),t.flags&32){f=t.stateNode;try{zs(f,"")}catch(le){It(t,t.return,le)}}o&4&&t.stateNode!=null&&(f=t.memoizedProps,Tf(t,f,s!==null?s.memoizedProps:f)),o&1024&&(Rf=!0);break;case 6:if(Xn(i,t),Yn(t),o&4){if(t.stateNode===null)throw Error(a(162));o=t.memoizedProps,s=t.stateNode;try{s.nodeValue=o}catch(le){It(t,t.return,le)}}break;case 3:if(oc=null,f=gi,gi=sc(i.containerInfo),Xn(i,t),gi=f,Yn(t),o&4&&s!==null&&s.memoizedState.isDehydrated)try{Vo(i.containerInfo)}catch(le){It(t,t.return,le)}Rf&&(Rf=!1,qm(t));break;case 4:o=gi,gi=sc(t.stateNode.containerInfo),Xn(i,t),Yn(t),gi=o;break;case 12:Xn(i,t),Yn(t);break;case 13:Xn(i,t),Yn(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Pf=$e()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Cf(t,o)));break;case 22:f=t.memoizedState!==null;var H=s!==null&&s.memoizedState!==null,se=Qi,pe=Jt;if(Qi=se||f,Jt=pe||H,Xn(i,t),Jt=pe,Qi=se,Yn(t),o&8192)e:for(i=t.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(s===null||H||Qi||Jt||gs(t)),s=null,i=t;;){if(i.tag===5||i.tag===26){if(s===null){H=s=i;try{if(m=H.stateNode,f)b=m.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{C=H.stateNode;var ve=H.memoizedProps.style,re=ve!=null&&ve.hasOwnProperty("display")?ve.display:null;C.style.display=re==null||typeof re=="boolean"?"":(""+re).trim()}}catch(le){It(H,H.return,le)}}}else if(i.tag===6){if(s===null){H=i;try{H.stateNode.nodeValue=f?"":H.memoizedProps}catch(le){It(H,H.return,le)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}o&4&&(o=t.updateQueue,o!==null&&(s=o.retryQueue,s!==null&&(o.retryQueue=null,Cf(t,s))));break;case 19:Xn(i,t),Yn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Cf(t,o)));break;case 30:break;case 21:break;default:Xn(i,t),Yn(t)}}function Yn(t){var i=t.flags;if(i&2){try{for(var s,o=t.return;o!==null;){if(Im(o)){s=o;break}o=o.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var f=s.stateNode,m=Af(t);ql(t,m,f);break;case 5:var b=s.stateNode;s.flags&32&&(zs(b,""),s.flags&=-33);var C=Af(t);ql(t,C,b);break;case 3:case 4:var H=s.stateNode.containerInfo,se=Af(t);wf(t,se,H);break;default:throw Error(a(161))}}catch(pe){It(t,t.return,pe)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function qm(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;qm(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function Ra(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Gm(t,i.alternate,i),i=i.sibling}function gs(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:wa(4,i,i.return),gs(i);break;case 1:wi(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&zm(i,i.return,s),gs(i);break;case 27:Po(i.stateNode);case 26:case 5:wi(i,i.return),gs(i);break;case 22:i.memoizedState===null&&gs(i);break;case 30:gs(i);break;default:gs(i)}t=t.sibling}}function Ca(t,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var o=i.alternate,f=t,m=i,b=m.flags;switch(m.tag){case 0:case 11:case 15:Ca(f,m,s),To(4,m);break;case 1:if(Ca(f,m,s),o=m,f=o.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(se){It(o,o.return,se)}if(o=m,f=o.updateQueue,f!==null){var C=o.stateNode;try{var H=f.shared.hiddenCallbacks;if(H!==null)for(f.shared.hiddenCallbacks=null,f=0;f<H.length;f++)Sp(H[f],C)}catch(se){It(o,o.return,se)}}s&&b&64&&Pm(m),Ao(m,m.return);break;case 27:Fm(m);case 26:case 5:Ca(f,m,s),s&&o===null&&b&4&&Bm(m),Ao(m,m.return);break;case 12:Ca(f,m,s);break;case 13:Ca(f,m,s),s&&b&4&&jm(f,m);break;case 22:m.memoizedState===null&&Ca(f,m,s),Ao(m,m.return);break;case 30:break;default:Ca(f,m,s)}i=i.sibling}}function Df(t,i){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&uo(s))}function Nf(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&uo(t))}function Ri(t,i,s,o){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Xm(t,i,s,o),i=i.sibling}function Xm(t,i,s,o){var f=i.flags;switch(i.tag){case 0:case 11:case 15:Ri(t,i,s,o),f&2048&&To(9,i);break;case 1:Ri(t,i,s,o);break;case 3:Ri(t,i,s,o),f&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&uo(t)));break;case 12:if(f&2048){Ri(t,i,s,o),t=i.stateNode;try{var m=i.memoizedProps,b=m.id,C=m.onPostCommit;typeof C=="function"&&C(b,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(H){It(i,i.return,H)}}else Ri(t,i,s,o);break;case 13:Ri(t,i,s,o);break;case 23:break;case 22:m=i.stateNode,b=i.alternate,i.memoizedState!==null?m._visibility&2?Ri(t,i,s,o):wo(t,i):m._visibility&2?Ri(t,i,s,o):(m._visibility|=2,tr(t,i,s,o,(i.subtreeFlags&10256)!==0)),f&2048&&Df(b,i);break;case 24:Ri(t,i,s,o),f&2048&&Nf(i.alternate,i);break;default:Ri(t,i,s,o)}}function tr(t,i,s,o,f){for(f=f&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var m=t,b=i,C=s,H=o,se=b.flags;switch(b.tag){case 0:case 11:case 15:tr(m,b,C,H,f),To(8,b);break;case 23:break;case 22:var pe=b.stateNode;b.memoizedState!==null?pe._visibility&2?tr(m,b,C,H,f):wo(m,b):(pe._visibility|=2,tr(m,b,C,H,f)),f&&se&2048&&Df(b.alternate,b);break;case 24:tr(m,b,C,H,f),f&&se&2048&&Nf(b.alternate,b);break;default:tr(m,b,C,H,f)}i=i.sibling}}function wo(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=t,o=i,f=o.flags;switch(o.tag){case 22:wo(s,o),f&2048&&Df(o.alternate,o);break;case 24:wo(s,o),f&2048&&Nf(o.alternate,o);break;default:wo(s,o)}i=i.sibling}}var Ro=8192;function nr(t){if(t.subtreeFlags&Ro)for(t=t.child;t!==null;)Ym(t),t=t.sibling}function Ym(t){switch(t.tag){case 26:nr(t),t.flags&Ro&&t.memoizedState!==null&&Oy(gi,t.memoizedState,t.memoizedProps);break;case 5:nr(t);break;case 3:case 4:var i=gi;gi=sc(t.stateNode.containerInfo),nr(t),gi=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=Ro,Ro=16777216,nr(t),Ro=i):nr(t));break;default:nr(t)}}function Km(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function Co(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var o=i[s];mn=o,Qm(o,t)}Km(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Zm(t),t=t.sibling}function Zm(t){switch(t.tag){case 0:case 11:case 15:Co(t),t.flags&2048&&wa(9,t,t.return);break;case 3:Co(t);break;case 12:Co(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,Xl(t)):Co(t);break;default:Co(t)}}function Xl(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var o=i[s];mn=o,Qm(o,t)}Km(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:wa(8,i,i.return),Xl(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,Xl(i));break;default:Xl(i)}t=t.sibling}}function Qm(t,i){for(;mn!==null;){var s=mn;switch(s.tag){case 0:case 11:case 15:wa(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var o=s.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:uo(s.memoizedState.cache)}if(o=s.child,o!==null)o.return=s,mn=o;else e:for(s=t;mn!==null;){o=mn;var f=o.sibling,m=o.return;if(km(o),o===s){mn=null;break e}if(f!==null){f.return=m,mn=f;break e}mn=m}}}var Zx={getCacheForType:function(t){var i=wn(ln),s=i.data.get(t);return s===void 0&&(s=t(),i.data.set(t,s)),s}},Qx=typeof WeakMap=="function"?WeakMap:Map,Dt=0,Ht=null,mt=null,St=0,Nt=0,Kn=null,Da=!1,ir=!1,Uf=!1,$i=0,Zt=0,Na=0,vs=0,Lf=0,li=0,ar=0,Do=null,In=null,Of=!1,Pf=0,Yl=1/0,Kl=null,Ua=null,Mn=0,La=null,sr=null,rr=0,zf=0,Bf=null,Jm=null,No=0,If=null;function Zn(){if((Dt&2)!==0&&St!==0)return St&-St;if(L.T!==null){var t=Xs;return t!==0?t:Wf()}return jn()}function $m(){li===0&&(li=(St&536870912)===0||wt?Oe():536870912);var t=oi.current;return t!==null&&(t.flags|=32),li}function Qn(t,i,s){(t===Ht&&(Nt===2||Nt===9)||t.cancelPendingCommit!==null)&&(or(t,0),Oa(t,St,li,!1)),we(t,s),((Dt&2)===0||t!==Ht)&&(t===Ht&&((Dt&2)===0&&(vs|=s),Zt===4&&Oa(t,St,li,!1)),Ci(t))}function eg(t,i,s){if((Dt&6)!==0)throw Error(a(327));var o=!s&&(i&124)===0&&(i&t.expiredLanes)===0||Bt(t,i),f=o?ey(t,i):Gf(t,i,!0),m=o;do{if(f===0){ir&&!o&&Oa(t,i,0,!1);break}else{if(s=t.current.alternate,m&&!Jx(s)){f=Gf(t,i,!1),m=!1;continue}if(f===2){if(m=i,t.errorRecoveryDisabledLanes&m)var b=0;else b=t.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){i=b;e:{var C=t;f=Do;var H=C.current.memoizedState.isDehydrated;if(H&&(or(C,b).flags|=256),b=Gf(C,b,!1),b!==2){if(Uf&&!H){C.errorRecoveryDisabledLanes|=m,vs|=m,f=4;break e}m=In,In=f,m!==null&&(In===null?In=m:In.push.apply(In,m))}f=b}if(m=!1,f!==2)continue}}if(f===1){or(t,0),Oa(t,i,0,!0);break}e:{switch(o=t,m=f,m){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:Oa(o,i,li,!Da);break e;case 2:In=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(f=Pf+300-$e(),10<f)){if(Oa(o,i,li,!Da),rt(o,0,!0)!==0)break e;o.timeoutHandle=Cg(tg.bind(null,o,s,In,Kl,Of,i,li,vs,ar,Da,m,2,-0,0),f);break e}tg(o,s,In,Kl,Of,i,li,vs,ar,Da,m,0,-0,0)}}break}while(!0);Ci(t)}function tg(t,i,s,o,f,m,b,C,H,se,pe,ve,re,le){if(t.timeoutHandle=-1,ve=i.subtreeFlags,(ve&8192||(ve&16785408)===16785408)&&(Io={stylesheets:null,count:0,unsuspend:Ly},Ym(i),ve=Py(),ve!==null)){t.cancelPendingCommit=ve(lg.bind(null,t,i,m,s,o,f,b,C,H,pe,1,re,le)),Oa(t,m,b,!se);return}lg(t,i,m,s,o,f,b,C,H)}function Jx(t){for(var i=t;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var o=0;o<s.length;o++){var f=s[o],m=f.getSnapshot;f=f.value;try{if(!Wn(m(),f))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Oa(t,i,s,o){i&=~Lf,i&=~vs,t.suspendedLanes|=i,t.pingedLanes&=~i,o&&(t.warmLanes|=i),o=t.expirationTimes;for(var f=i;0<f;){var m=31-qe(f),b=1<<m;o[m]=-1,f&=~b}s!==0&&yt(t,s,i)}function Zl(){return(Dt&6)===0?(Uo(0),!1):!0}function Ff(){if(mt!==null){if(Nt===0)var t=mt.return;else t=mt,Wi=fs=null,tf(t),$s=null,Mo=0,t=mt;for(;t!==null;)Om(t.alternate,t),t=t.return;mt=null}}function or(t,i){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,gy(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),Ff(),Ht=t,mt=s=ki(t.current,null),St=i,Nt=0,Kn=null,Da=!1,ir=Bt(t,i),Uf=!1,ar=li=Lf=vs=Na=Zt=0,In=Do=null,Of=!1,(i&8)!==0&&(i|=i&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=i;0<o;){var f=31-qe(o),m=1<<f;i|=t[f],o&=~m}return $i=i,_l(),s}function ng(t,i){ut=null,L.H=Bl,i===ho||i===wl?(i=xp(),Nt=3):i===gp?(i=xp(),Nt=4):Nt=i===ym?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,Kn=i,mt===null&&(Zt=1,kl(t,ii(i,t.current)))}function ig(){var t=L.H;return L.H=Bl,t===null?Bl:t}function ag(){var t=L.A;return L.A=Zx,t}function Hf(){Zt=4,Da||(St&4194048)!==St&&oi.current!==null||(ir=!0),(Na&134217727)===0&&(vs&134217727)===0||Ht===null||Oa(Ht,St,li,!1)}function Gf(t,i,s){var o=Dt;Dt|=2;var f=ig(),m=ag();(Ht!==t||St!==i)&&(Kl=null,or(t,i)),i=!1;var b=Zt;e:do try{if(Nt!==0&&mt!==null){var C=mt,H=Kn;switch(Nt){case 8:Ff(),b=6;break e;case 3:case 2:case 9:case 6:oi.current===null&&(i=!0);var se=Nt;if(Nt=0,Kn=null,lr(t,C,H,se),s&&ir){b=0;break e}break;default:se=Nt,Nt=0,Kn=null,lr(t,C,H,se)}}$x(),b=Zt;break}catch(pe){ng(t,pe)}while(!0);return i&&t.shellSuspendCounter++,Wi=fs=null,Dt=o,L.H=f,L.A=m,mt===null&&(Ht=null,St=0,_l()),b}function $x(){for(;mt!==null;)sg(mt)}function ey(t,i){var s=Dt;Dt|=2;var o=ig(),f=ag();Ht!==t||St!==i?(Kl=null,Yl=$e()+500,or(t,i)):ir=Bt(t,i);e:do try{if(Nt!==0&&mt!==null){i=mt;var m=Kn;t:switch(Nt){case 1:Nt=0,Kn=null,lr(t,i,m,1);break;case 2:case 9:if(vp(m)){Nt=0,Kn=null,rg(i);break}i=function(){Nt!==2&&Nt!==9||Ht!==t||(Nt=7),Ci(t)},m.then(i,i);break e;case 3:Nt=7;break e;case 4:Nt=5;break e;case 7:vp(m)?(Nt=0,Kn=null,rg(i)):(Nt=0,Kn=null,lr(t,i,m,7));break;case 5:var b=null;switch(mt.tag){case 26:b=mt.memoizedState;case 5:case 27:var C=mt;if(!b||Gg(b)){Nt=0,Kn=null;var H=C.sibling;if(H!==null)mt=H;else{var se=C.return;se!==null?(mt=se,Ql(se)):mt=null}break t}}Nt=0,Kn=null,lr(t,i,m,5);break;case 6:Nt=0,Kn=null,lr(t,i,m,6);break;case 8:Ff(),Zt=6;break e;default:throw Error(a(462))}}ty();break}catch(pe){ng(t,pe)}while(!0);return Wi=fs=null,L.H=o,L.A=f,Dt=s,mt!==null?0:(Ht=null,St=0,_l(),Zt)}function ty(){for(;mt!==null&&!Ye();)sg(mt)}function sg(t){var i=Um(t.alternate,t,$i);t.memoizedProps=t.pendingProps,i===null?Ql(t):mt=i}function rg(t){var i=t,s=i.alternate;switch(i.tag){case 15:case 0:i=Am(s,i,i.pendingProps,i.type,void 0,St);break;case 11:i=Am(s,i,i.pendingProps,i.type.render,i.ref,St);break;case 5:tf(i);default:Om(s,i),i=mt=op(i,$i),i=Um(s,i,$i)}t.memoizedProps=t.pendingProps,i===null?Ql(t):mt=i}function lr(t,i,s,o){Wi=fs=null,tf(i),$s=null,Mo=0;var f=i.return;try{if(jx(t,f,i,s,St)){Zt=1,kl(t,ii(s,t.current)),mt=null;return}}catch(m){if(f!==null)throw mt=f,m;Zt=1,kl(t,ii(s,t.current)),mt=null;return}i.flags&32768?(wt||o===1?t=!0:ir||(St&536870912)!==0?t=!1:(Da=t=!0,(o===2||o===9||o===3||o===6)&&(o=oi.current,o!==null&&o.tag===13&&(o.flags|=16384))),og(i,t)):Ql(i)}function Ql(t){var i=t;do{if((i.flags&32768)!==0){og(i,Da);return}t=i.return;var s=qx(i.alternate,i,$i);if(s!==null){mt=s;return}if(i=i.sibling,i!==null){mt=i;return}mt=i=t}while(i!==null);Zt===0&&(Zt=5)}function og(t,i){do{var s=Xx(t.alternate,t);if(s!==null){s.flags&=32767,mt=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(t=t.sibling,t!==null)){mt=t;return}mt=t=s}while(t!==null);Zt=6,mt=null}function lg(t,i,s,o,f,m,b,C,H){t.cancelPendingCommit=null;do Jl();while(Mn!==0);if((Dt&6)!==0)throw Error(a(327));if(i!==null){if(i===t.current)throw Error(a(177));if(m=i.lanes|i.childLanes,m|=Du,it(t,s,m,b,C,H),t===Ht&&(mt=Ht=null,St=0),sr=i,La=t,rr=s,zf=m,Bf=f,Jm=o,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,sy(N,function(){return dg(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||o){o=L.T,L.T=null,f=K.p,K.p=2,b=Dt,Dt|=4;try{Yx(t,i,s)}finally{Dt=b,K.p=f,L.T=o}}Mn=1,cg(),ug(),fg()}}function cg(){if(Mn===1){Mn=0;var t=La,i=sr,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=L.T,L.T=null;var o=K.p;K.p=2;var f=Dt;Dt|=4;try{Wm(i,t);var m=$f,b=Qd(t.containerInfo),C=m.focusedElem,H=m.selectionRange;if(b!==C&&C&&C.ownerDocument&&Zd(C.ownerDocument.documentElement,C)){if(H!==null&&Tu(C)){var se=H.start,pe=H.end;if(pe===void 0&&(pe=se),"selectionStart"in C)C.selectionStart=se,C.selectionEnd=Math.min(pe,C.value.length);else{var ve=C.ownerDocument||document,re=ve&&ve.defaultView||window;if(re.getSelection){var le=re.getSelection(),tt=C.textContent.length,Xe=Math.min(H.start,tt),Pt=H.end===void 0?Xe:Math.min(H.end,tt);!le.extend&&Xe>Pt&&(b=Pt,Pt=Xe,Xe=b);var J=Kd(C,Xe),W=Kd(C,Pt);if(J&&W&&(le.rangeCount!==1||le.anchorNode!==J.node||le.anchorOffset!==J.offset||le.focusNode!==W.node||le.focusOffset!==W.offset)){var ae=ve.createRange();ae.setStart(J.node,J.offset),le.removeAllRanges(),Xe>Pt?(le.addRange(ae),le.extend(W.node,W.offset)):(ae.setEnd(W.node,W.offset),le.addRange(ae))}}}}for(ve=[],le=C;le=le.parentNode;)le.nodeType===1&&ve.push({element:le,left:le.scrollLeft,top:le.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<ve.length;C++){var ge=ve[C];ge.element.scrollLeft=ge.left,ge.element.scrollTop=ge.top}}uc=!!Jf,$f=Jf=null}finally{Dt=f,K.p=o,L.T=s}}t.current=i,Mn=2}}function ug(){if(Mn===2){Mn=0;var t=La,i=sr,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=L.T,L.T=null;var o=K.p;K.p=2;var f=Dt;Dt|=4;try{Gm(t,i.alternate,i)}finally{Dt=f,K.p=o,L.T=s}}Mn=3}}function fg(){if(Mn===4||Mn===3){Mn=0,xt();var t=La,i=sr,s=rr,o=Jm;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Mn=5:(Mn=0,sr=La=null,hg(t,t.pendingLanes));var f=t.pendingLanes;if(f===0&&(Ua=null),Et(s),i=i.stateNode,Re&&typeof Re.onCommitFiberRoot=="function")try{Re.onCommitFiberRoot(ke,i,void 0,(i.current.flags&128)===128)}catch{}if(o!==null){i=L.T,f=K.p,K.p=2,L.T=null;try{for(var m=t.onRecoverableError,b=0;b<o.length;b++){var C=o[b];m(C.value,{componentStack:C.stack})}}finally{L.T=i,K.p=f}}(rr&3)!==0&&Jl(),Ci(t),f=t.pendingLanes,(s&4194090)!==0&&(f&42)!==0?t===If?No++:(No=0,If=t):No=0,Uo(0)}}function hg(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,uo(i)))}function Jl(t){return cg(),ug(),fg(),dg()}function dg(){if(Mn!==5)return!1;var t=La,i=zf;zf=0;var s=Et(rr),o=L.T,f=K.p;try{K.p=32>s?32:s,L.T=null,s=Bf,Bf=null;var m=La,b=rr;if(Mn=0,sr=La=null,rr=0,(Dt&6)!==0)throw Error(a(331));var C=Dt;if(Dt|=4,Zm(m.current),Xm(m,m.current,b,s),Dt=C,Uo(0,!1),Re&&typeof Re.onPostCommitFiberRoot=="function")try{Re.onPostCommitFiberRoot(ke,m)}catch{}return!0}finally{K.p=f,L.T=o,hg(t,i)}}function pg(t,i,s){i=ii(s,i),i=gf(t.stateNode,i,2),t=Ea(t,i,2),t!==null&&(we(t,2),Ci(t))}function It(t,i,s){if(t.tag===3)pg(t,t,s);else for(;i!==null;){if(i.tag===3){pg(i,t,s);break}else if(i.tag===1){var o=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ua===null||!Ua.has(o))){t=ii(s,t),s=_m(2),o=Ea(i,s,2),o!==null&&(xm(s,o,i,t),we(o,2),Ci(o));break}}i=i.return}}function kf(t,i,s){var o=t.pingCache;if(o===null){o=t.pingCache=new Qx;var f=new Set;o.set(i,f)}else f=o.get(i),f===void 0&&(f=new Set,o.set(i,f));f.has(s)||(Uf=!0,f.add(s),t=ny.bind(null,t,i,s),i.then(t,t))}function ny(t,i,s){var o=t.pingCache;o!==null&&o.delete(i),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,Ht===t&&(St&s)===s&&(Zt===4||Zt===3&&(St&62914560)===St&&300>$e()-Pf?(Dt&2)===0&&or(t,0):Lf|=s,ar===St&&(ar=0)),Ci(t)}function mg(t,i){i===0&&(i=me()),t=Vs(t,i),t!==null&&(we(t,i),Ci(t))}function iy(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),mg(t,s)}function ay(t,i){var s=0;switch(t.tag){case 13:var o=t.stateNode,f=t.memoizedState;f!==null&&(s=f.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(a(314))}o!==null&&o.delete(i),mg(t,s)}function sy(t,i){return ct(t,i)}var $l=null,cr=null,Vf=!1,ec=!1,jf=!1,_s=0;function Ci(t){t!==cr&&t.next===null&&(cr===null?$l=cr=t:cr=cr.next=t),ec=!0,Vf||(Vf=!0,oy())}function Uo(t,i){if(!jf&&ec){jf=!0;do for(var s=!1,o=$l;o!==null;){if(t!==0){var f=o.pendingLanes;if(f===0)var m=0;else{var b=o.suspendedLanes,C=o.pingedLanes;m=(1<<31-qe(42|t)+1)-1,m&=f&~(b&~C),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(s=!0,xg(o,m))}else m=St,m=rt(o,o===Ht?m:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(m&3)===0||Bt(o,m)||(s=!0,xg(o,m));o=o.next}while(s);jf=!1}}function ry(){gg()}function gg(){ec=Vf=!1;var t=0;_s!==0&&(my()&&(t=_s),_s=0);for(var i=$e(),s=null,o=$l;o!==null;){var f=o.next,m=vg(o,i);m===0?(o.next=null,s===null?$l=f:s.next=f,f===null&&(cr=s)):(s=o,(t!==0||(m&3)!==0)&&(ec=!0)),o=f}Uo(t)}function vg(t,i){for(var s=t.suspendedLanes,o=t.pingedLanes,f=t.expirationTimes,m=t.pendingLanes&-62914561;0<m;){var b=31-qe(m),C=1<<b,H=f[b];H===-1?((C&s)===0||(C&o)!==0)&&(f[b]=q(C,i)):H<=i&&(t.expiredLanes|=C),m&=~C}if(i=Ht,s=St,s=rt(t,t===i?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,s===0||t===i&&(Nt===2||Nt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&zt(o),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||Bt(t,s)){if(i=s&-s,i===t.callbackPriority)return i;switch(o!==null&&zt(o),Et(s)){case 2:case 8:s=G;break;case 32:s=N;break;case 268435456:s=Se;break;default:s=N}return o=_g.bind(null,t),s=ct(s,o),t.callbackPriority=i,t.callbackNode=s,i}return o!==null&&o!==null&&zt(o),t.callbackPriority=2,t.callbackNode=null,2}function _g(t,i){if(Mn!==0&&Mn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(Jl()&&t.callbackNode!==s)return null;var o=St;return o=rt(t,t===Ht?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(eg(t,o,i),vg(t,$e()),t.callbackNode!=null&&t.callbackNode===s?_g.bind(null,t):null)}function xg(t,i){if(Jl())return null;eg(t,i,!0)}function oy(){vy(function(){(Dt&6)!==0?ct(Wt,ry):gg()})}function Wf(){return _s===0&&(_s=Oe()),_s}function yg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:fl(""+t)}function Sg(t,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,t.id&&s.setAttribute("form",t.id),i.parentNode.insertBefore(s,i),t=new FormData(t),s.parentNode.removeChild(s),t}function ly(t,i,s,o,f){if(i==="submit"&&s&&s.stateNode===f){var m=yg((f[xn]||null).action),b=o.submitter;b&&(i=(i=b[xn]||null)?yg(i.formAction):b.getAttribute("formAction"),i!==null&&(m=i,b=null));var C=new ml("action","action",null,o,f);t.push({event:C,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(_s!==0){var H=b?Sg(f,b):new FormData(f);ff(s,{pending:!0,data:H,method:f.method,action:m},null,H)}}else typeof m=="function"&&(C.preventDefault(),H=b?Sg(f,b):new FormData(f),ff(s,{pending:!0,data:H,method:f.method,action:m},m,H))},currentTarget:f}]})}}for(var qf=0;qf<Cu.length;qf++){var Xf=Cu[qf],cy=Xf.toLowerCase(),uy=Xf[0].toUpperCase()+Xf.slice(1);mi(cy,"on"+uy)}mi(ep,"onAnimationEnd"),mi(tp,"onAnimationIteration"),mi(np,"onAnimationStart"),mi("dblclick","onDoubleClick"),mi("focusin","onFocus"),mi("focusout","onBlur"),mi(wx,"onTransitionRun"),mi(Rx,"onTransitionStart"),mi(Cx,"onTransitionCancel"),mi(ip,"onTransitionEnd"),Ue("onMouseEnter",["mouseout","mouseover"]),Ue("onMouseLeave",["mouseout","mouseover"]),Ue("onPointerEnter",["pointerout","pointerover"]),Ue("onPointerLeave",["pointerout","pointerover"]),be("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),be("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),be("onBeforeInput",["compositionend","keypress","textInput","paste"]),be("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),be("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),be("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Lo));function Mg(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var o=t[s],f=o.event;o=o.listeners;e:{var m=void 0;if(i)for(var b=o.length-1;0<=b;b--){var C=o[b],H=C.instance,se=C.currentTarget;if(C=C.listener,H!==m&&f.isPropagationStopped())break e;m=C,f.currentTarget=se;try{m(f)}catch(pe){Gl(pe)}f.currentTarget=null,m=H}else for(b=0;b<o.length;b++){if(C=o[b],H=C.instance,se=C.currentTarget,C=C.listener,H!==m&&f.isPropagationStopped())break e;m=C,f.currentTarget=se;try{m(f)}catch(pe){Gl(pe)}f.currentTarget=null,m=H}}}}function gt(t,i){var s=i[pa];s===void 0&&(s=i[pa]=new Set);var o=t+"__bubble";s.has(o)||(Eg(i,t,2,!1),s.add(o))}function Yf(t,i,s){var o=0;i&&(o|=4),Eg(s,t,o,i)}var tc="_reactListening"+Math.random().toString(36).slice(2);function Kf(t){if(!t[tc]){t[tc]=!0,ce.forEach(function(s){s!=="selectionchange"&&(fy.has(s)||Yf(s,!1,t),Yf(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[tc]||(i[tc]=!0,Yf("selectionchange",!1,i))}}function Eg(t,i,s,o){switch(Xg(i)){case 2:var f=Iy;break;case 8:f=Fy;break;default:f=ch}s=f.bind(null,i,s,t),f=void 0,!gu||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),o?f!==void 0?t.addEventListener(i,s,{capture:!0,passive:f}):t.addEventListener(i,s,!0):f!==void 0?t.addEventListener(i,s,{passive:f}):t.addEventListener(i,s,!1)}function Zf(t,i,s,o,f){var m=o;if((i&1)===0&&(i&2)===0&&o!==null)e:for(;;){if(o===null)return;var b=o.tag;if(b===3||b===4){var C=o.stateNode.containerInfo;if(C===f)break;if(b===4)for(b=o.return;b!==null;){var H=b.tag;if((H===3||H===4)&&b.stateNode.containerInfo===f)return;b=b.return}for(;C!==null;){if(b=ga(C),b===null)return;if(H=b.tag,H===5||H===6||H===26||H===27){o=m=b;continue e}C=C.parentNode}}o=o.return}Dd(function(){var se=m,pe=pu(s),ve=[];e:{var re=ap.get(t);if(re!==void 0){var le=ml,tt=t;switch(t){case"keypress":if(dl(s)===0)break e;case"keydown":case"keyup":le=sx;break;case"focusin":tt="focus",le=yu;break;case"focusout":tt="blur",le=yu;break;case"beforeblur":case"afterblur":le=yu;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":le=Ld;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":le=X_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":le=lx;break;case ep:case tp:case np:le=Z_;break;case ip:le=ux;break;case"scroll":case"scrollend":le=W_;break;case"wheel":le=hx;break;case"copy":case"cut":case"paste":le=J_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":le=Pd;break;case"toggle":case"beforetoggle":le=px}var Xe=(i&4)!==0,Pt=!Xe&&(t==="scroll"||t==="scrollend"),J=Xe?re!==null?re+"Capture":null:re;Xe=[];for(var W=se,ae;W!==null;){var ge=W;if(ae=ge.stateNode,ge=ge.tag,ge!==5&&ge!==26&&ge!==27||ae===null||J===null||(ge=Qr(W,J),ge!=null&&Xe.push(Oo(W,ge,ae))),Pt)break;W=W.return}0<Xe.length&&(re=new le(re,tt,null,s,pe),ve.push({event:re,listeners:Xe}))}}if((i&7)===0){e:{if(re=t==="mouseover"||t==="pointerover",le=t==="mouseout"||t==="pointerout",re&&s!==du&&(tt=s.relatedTarget||s.fromElement)&&(ga(tt)||tt[Hi]))break e;if((le||re)&&(re=pe.window===pe?pe:(re=pe.ownerDocument)?re.defaultView||re.parentWindow:window,le?(tt=s.relatedTarget||s.toElement,le=se,tt=tt?ga(tt):null,tt!==null&&(Pt=l(tt),Xe=tt.tag,tt!==Pt||Xe!==5&&Xe!==27&&Xe!==6)&&(tt=null)):(le=null,tt=se),le!==tt)){if(Xe=Ld,ge="onMouseLeave",J="onMouseEnter",W="mouse",(t==="pointerout"||t==="pointerover")&&(Xe=Pd,ge="onPointerLeave",J="onPointerEnter",W="pointer"),Pt=le==null?re:O(le),ae=tt==null?re:O(tt),re=new Xe(ge,W+"leave",le,s,pe),re.target=Pt,re.relatedTarget=ae,ge=null,ga(pe)===se&&(Xe=new Xe(J,W+"enter",tt,s,pe),Xe.target=ae,Xe.relatedTarget=Pt,ge=Xe),Pt=ge,le&&tt)t:{for(Xe=le,J=tt,W=0,ae=Xe;ae;ae=ur(ae))W++;for(ae=0,ge=J;ge;ge=ur(ge))ae++;for(;0<W-ae;)Xe=ur(Xe),W--;for(;0<ae-W;)J=ur(J),ae--;for(;W--;){if(Xe===J||J!==null&&Xe===J.alternate)break t;Xe=ur(Xe),J=ur(J)}Xe=null}else Xe=null;le!==null&&bg(ve,re,le,Xe,!1),tt!==null&&Pt!==null&&bg(ve,Pt,tt,Xe,!0)}}e:{if(re=se?O(se):window,le=re.nodeName&&re.nodeName.toLowerCase(),le==="select"||le==="input"&&re.type==="file")var Ie=Vd;else if(Gd(re))if(jd)Ie=bx;else{Ie=Mx;var dt=Sx}else le=re.nodeName,!le||le.toLowerCase()!=="input"||re.type!=="checkbox"&&re.type!=="radio"?se&&hu(se.elementType)&&(Ie=Vd):Ie=Ex;if(Ie&&(Ie=Ie(t,se))){kd(ve,Ie,s,pe);break e}dt&&dt(t,re,se),t==="focusout"&&se&&re.type==="number"&&se.memoizedProps.value!=null&&fu(re,"number",re.value)}switch(dt=se?O(se):window,t){case"focusin":(Gd(dt)||dt.contentEditable==="true")&&(Hs=dt,Au=se,so=null);break;case"focusout":so=Au=Hs=null;break;case"mousedown":wu=!0;break;case"contextmenu":case"mouseup":case"dragend":wu=!1,Jd(ve,s,pe);break;case"selectionchange":if(Ax)break;case"keydown":case"keyup":Jd(ve,s,pe)}var je;if(Mu)e:{switch(t){case"compositionstart":var Qe="onCompositionStart";break e;case"compositionend":Qe="onCompositionEnd";break e;case"compositionupdate":Qe="onCompositionUpdate";break e}Qe=void 0}else Fs?Fd(t,s)&&(Qe="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(Qe="onCompositionStart");Qe&&(zd&&s.locale!=="ko"&&(Fs||Qe!=="onCompositionStart"?Qe==="onCompositionEnd"&&Fs&&(je=Nd()):(xa=pe,vu="value"in xa?xa.value:xa.textContent,Fs=!0)),dt=nc(se,Qe),0<dt.length&&(Qe=new Od(Qe,t,null,s,pe),ve.push({event:Qe,listeners:dt}),je?Qe.data=je:(je=Hd(s),je!==null&&(Qe.data=je)))),(je=gx?vx(t,s):_x(t,s))&&(Qe=nc(se,"onBeforeInput"),0<Qe.length&&(dt=new Od("onBeforeInput","beforeinput",null,s,pe),ve.push({event:dt,listeners:Qe}),dt.data=je)),ly(ve,t,se,s,pe)}Mg(ve,i)})}function Oo(t,i,s){return{instance:t,listener:i,currentTarget:s}}function nc(t,i){for(var s=i+"Capture",o=[];t!==null;){var f=t,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=Qr(t,s),f!=null&&o.unshift(Oo(t,f,m)),f=Qr(t,i),f!=null&&o.push(Oo(t,f,m))),t.tag===3)return o;t=t.return}return[]}function ur(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function bg(t,i,s,o,f){for(var m=i._reactName,b=[];s!==null&&s!==o;){var C=s,H=C.alternate,se=C.stateNode;if(C=C.tag,H!==null&&H===o)break;C!==5&&C!==26&&C!==27||se===null||(H=se,f?(se=Qr(s,m),se!=null&&b.unshift(Oo(s,se,H))):f||(se=Qr(s,m),se!=null&&b.push(Oo(s,se,H)))),s=s.return}b.length!==0&&t.push({event:i,listeners:b})}var hy=/\r\n?/g,dy=/\u0000|\uFFFD/g;function Tg(t){return(typeof t=="string"?t:""+t).replace(hy,`
`).replace(dy,"")}function Ag(t,i){return i=Tg(i),Tg(t)===i}function ic(){}function Ot(t,i,s,o,f,m){switch(s){case"children":typeof o=="string"?i==="body"||i==="textarea"&&o===""||zs(t,o):(typeof o=="number"||typeof o=="bigint")&&i!=="body"&&zs(t,""+o);break;case"className":_t(t,"class",o);break;case"tabIndex":_t(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":_t(t,s,o);break;case"style":Rd(t,o,m);break;case"data":if(i!=="object"){_t(t,"data",o);break}case"src":case"href":if(o===""&&(i!=="a"||s!=="href")){t.removeAttribute(s);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(s);break}o=fl(""+o),t.setAttribute(s,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(s==="formAction"?(i!=="input"&&Ot(t,i,"name",f.name,f,null),Ot(t,i,"formEncType",f.formEncType,f,null),Ot(t,i,"formMethod",f.formMethod,f,null),Ot(t,i,"formTarget",f.formTarget,f,null)):(Ot(t,i,"encType",f.encType,f,null),Ot(t,i,"method",f.method,f,null),Ot(t,i,"target",f.target,f,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(s);break}o=fl(""+o),t.setAttribute(s,o);break;case"onClick":o!=null&&(t.onclick=ic);break;case"onScroll":o!=null&&gt("scroll",t);break;case"onScrollEnd":o!=null&&gt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(s=o.__html,s!=null){if(f.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}s=fl(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(s,""+o):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":o===!0?t.setAttribute(s,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(s,o):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(s,o):t.removeAttribute(s);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(s):t.setAttribute(s,o);break;case"popover":gt("beforetoggle",t),gt("toggle",t),We(t,"popover",o);break;case"xlinkActuate":bt(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":bt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":bt(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":bt(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":bt(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":bt(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":bt(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":bt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":bt(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":We(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=V_.get(s)||s,We(t,s,o))}}function Qf(t,i,s,o,f,m){switch(s){case"style":Rd(t,o,m);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(s=o.__html,s!=null){if(f.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"children":typeof o=="string"?zs(t,o):(typeof o=="number"||typeof o=="bigint")&&zs(t,""+o);break;case"onScroll":o!=null&&gt("scroll",t);break;case"onScrollEnd":o!=null&&gt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=ic);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ne.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),i=s.slice(2,f?s.length-7:void 0),m=t[xn]||null,m=m!=null?m[s]:null,typeof m=="function"&&t.removeEventListener(i,m,f),typeof o=="function")){typeof m!="function"&&m!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(i,o,f);break e}s in t?t[s]=o:o===!0?t.setAttribute(s,""):We(t,s,o)}}}function En(t,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":gt("error",t),gt("load",t);var o=!1,f=!1,m;for(m in s)if(s.hasOwnProperty(m)){var b=s[m];if(b!=null)switch(m){case"src":o=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Ot(t,i,m,b,s,null)}}f&&Ot(t,i,"srcSet",s.srcSet,s,null),o&&Ot(t,i,"src",s.src,s,null);return;case"input":gt("invalid",t);var C=m=b=f=null,H=null,se=null;for(o in s)if(s.hasOwnProperty(o)){var pe=s[o];if(pe!=null)switch(o){case"name":f=pe;break;case"type":b=pe;break;case"checked":H=pe;break;case"defaultChecked":se=pe;break;case"value":m=pe;break;case"defaultValue":C=pe;break;case"children":case"dangerouslySetInnerHTML":if(pe!=null)throw Error(a(137,i));break;default:Ot(t,i,o,pe,s,null)}}Zr(t,m,C,H,se,b,f,!1),qt(t);return;case"select":gt("invalid",t),o=b=m=null;for(f in s)if(s.hasOwnProperty(f)&&(C=s[f],C!=null))switch(f){case"value":m=C;break;case"defaultValue":b=C;break;case"multiple":o=C;default:Ot(t,i,f,C,s,null)}i=m,s=b,t.multiple=!!o,i!=null?Ps(t,!!o,i,!1):s!=null&&Ps(t,!!o,s,!0);return;case"textarea":gt("invalid",t),m=f=o=null;for(b in s)if(s.hasOwnProperty(b)&&(C=s[b],C!=null))switch(b){case"value":o=C;break;case"defaultValue":f=C;break;case"children":m=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(a(91));break;default:Ot(t,i,b,C,s,null)}Ad(t,o,f,m),qt(t);return;case"option":for(H in s)if(s.hasOwnProperty(H)&&(o=s[H],o!=null))switch(H){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ot(t,i,H,o,s,null)}return;case"dialog":gt("beforetoggle",t),gt("toggle",t),gt("cancel",t),gt("close",t);break;case"iframe":case"object":gt("load",t);break;case"video":case"audio":for(o=0;o<Lo.length;o++)gt(Lo[o],t);break;case"image":gt("error",t),gt("load",t);break;case"details":gt("toggle",t);break;case"embed":case"source":case"link":gt("error",t),gt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(se in s)if(s.hasOwnProperty(se)&&(o=s[se],o!=null))switch(se){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Ot(t,i,se,o,s,null)}return;default:if(hu(i)){for(pe in s)s.hasOwnProperty(pe)&&(o=s[pe],o!==void 0&&Qf(t,i,pe,o,s,void 0));return}}for(C in s)s.hasOwnProperty(C)&&(o=s[C],o!=null&&Ot(t,i,C,o,s,null))}function py(t,i,s,o){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,b=null,C=null,H=null,se=null,pe=null;for(le in s){var ve=s[le];if(s.hasOwnProperty(le)&&ve!=null)switch(le){case"checked":break;case"value":break;case"defaultValue":H=ve;default:o.hasOwnProperty(le)||Ot(t,i,le,null,o,ve)}}for(var re in o){var le=o[re];if(ve=s[re],o.hasOwnProperty(re)&&(le!=null||ve!=null))switch(re){case"type":m=le;break;case"name":f=le;break;case"checked":se=le;break;case"defaultChecked":pe=le;break;case"value":b=le;break;case"defaultValue":C=le;break;case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(a(137,i));break;default:le!==ve&&Ot(t,i,re,le,o,ve)}}Kr(t,b,C,H,se,pe,m,f);return;case"select":le=b=C=re=null;for(m in s)if(H=s[m],s.hasOwnProperty(m)&&H!=null)switch(m){case"value":break;case"multiple":le=H;default:o.hasOwnProperty(m)||Ot(t,i,m,null,o,H)}for(f in o)if(m=o[f],H=s[f],o.hasOwnProperty(f)&&(m!=null||H!=null))switch(f){case"value":re=m;break;case"defaultValue":C=m;break;case"multiple":b=m;default:m!==H&&Ot(t,i,f,m,o,H)}i=C,s=b,o=le,re!=null?Ps(t,!!s,re,!1):!!o!=!!s&&(i!=null?Ps(t,!!s,i,!0):Ps(t,!!s,s?[]:"",!1));return;case"textarea":le=re=null;for(C in s)if(f=s[C],s.hasOwnProperty(C)&&f!=null&&!o.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:Ot(t,i,C,null,o,f)}for(b in o)if(f=o[b],m=s[b],o.hasOwnProperty(b)&&(f!=null||m!=null))switch(b){case"value":re=f;break;case"defaultValue":le=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==m&&Ot(t,i,b,f,o,m)}Td(t,re,le);return;case"option":for(var tt in s)if(re=s[tt],s.hasOwnProperty(tt)&&re!=null&&!o.hasOwnProperty(tt))switch(tt){case"selected":t.selected=!1;break;default:Ot(t,i,tt,null,o,re)}for(H in o)if(re=o[H],le=s[H],o.hasOwnProperty(H)&&re!==le&&(re!=null||le!=null))switch(H){case"selected":t.selected=re&&typeof re!="function"&&typeof re!="symbol";break;default:Ot(t,i,H,re,o,le)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Xe in s)re=s[Xe],s.hasOwnProperty(Xe)&&re!=null&&!o.hasOwnProperty(Xe)&&Ot(t,i,Xe,null,o,re);for(se in o)if(re=o[se],le=s[se],o.hasOwnProperty(se)&&re!==le&&(re!=null||le!=null))switch(se){case"children":case"dangerouslySetInnerHTML":if(re!=null)throw Error(a(137,i));break;default:Ot(t,i,se,re,o,le)}return;default:if(hu(i)){for(var Pt in s)re=s[Pt],s.hasOwnProperty(Pt)&&re!==void 0&&!o.hasOwnProperty(Pt)&&Qf(t,i,Pt,void 0,o,re);for(pe in o)re=o[pe],le=s[pe],!o.hasOwnProperty(pe)||re===le||re===void 0&&le===void 0||Qf(t,i,pe,re,o,le);return}}for(var J in s)re=s[J],s.hasOwnProperty(J)&&re!=null&&!o.hasOwnProperty(J)&&Ot(t,i,J,null,o,re);for(ve in o)re=o[ve],le=s[ve],!o.hasOwnProperty(ve)||re===le||re==null&&le==null||Ot(t,i,ve,re,o,le)}var Jf=null,$f=null;function ac(t){return t.nodeType===9?t:t.ownerDocument}function wg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Rg(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function eh(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var th=null;function my(){var t=window.event;return t&&t.type==="popstate"?t===th?!1:(th=t,!0):(th=null,!1)}var Cg=typeof setTimeout=="function"?setTimeout:void 0,gy=typeof clearTimeout=="function"?clearTimeout:void 0,Dg=typeof Promise=="function"?Promise:void 0,vy=typeof queueMicrotask=="function"?queueMicrotask:typeof Dg<"u"?function(t){return Dg.resolve(null).then(t).catch(_y)}:Cg;function _y(t){setTimeout(function(){throw t})}function Pa(t){return t==="head"}function Ng(t,i){var s=i,o=0,f=0;do{var m=s.nextSibling;if(t.removeChild(s),m&&m.nodeType===8)if(s=m.data,s==="/$"){if(0<o&&8>o){s=o;var b=t.ownerDocument;if(s&1&&Po(b.documentElement),s&2&&Po(b.body),s&4)for(s=b.head,Po(s),b=s.firstChild;b;){var C=b.nextSibling,H=b.nodeName;b[ma]||H==="SCRIPT"||H==="STYLE"||H==="LINK"&&b.rel.toLowerCase()==="stylesheet"||s.removeChild(b),b=C}}if(f===0){t.removeChild(m),Vo(i);return}f--}else s==="$"||s==="$?"||s==="$!"?f++:o=s.charCodeAt(0)-48;else o=0;s=m}while(s);Vo(i)}function nh(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":nh(s),Xr(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function xy(t,i,s,o){for(;t.nodeType===1;){var f=s;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[ma])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(m=t.getAttribute("rel"),m==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(m!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(m=t.getAttribute("src"),(m!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===m)return t}else return t;if(t=vi(t.nextSibling),t===null)break}return null}function yy(t,i,s){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=vi(t.nextSibling),t===null))return null;return t}function ih(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function Sy(t,i){var s=t.ownerDocument;if(t.data!=="$?"||s.readyState==="complete")i();else{var o=function(){i(),s.removeEventListener("DOMContentLoaded",o)};s.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function vi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return t}var ah=null;function Ug(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return t;i--}else s==="/$"&&i++}t=t.previousSibling}return null}function Lg(t,i,s){switch(i=ac(s),t){case"html":if(t=i.documentElement,!t)throw Error(a(452));return t;case"head":if(t=i.head,!t)throw Error(a(453));return t;case"body":if(t=i.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function Po(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Xr(t)}var ci=new Map,Og=new Set;function sc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ea=K.d;K.d={f:My,r:Ey,D:by,C:Ty,L:Ay,m:wy,X:Cy,S:Ry,M:Dy};function My(){var t=ea.f(),i=Zl();return t||i}function Ey(t){var i=va(t);i!==null&&i.tag===5&&i.type==="form"?em(i):ea.r(t)}var fr=typeof document>"u"?null:document;function Pg(t,i,s){var o=fr;if(o&&typeof i=="string"&&i){var f=An(i);f='link[rel="'+t+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),Og.has(f)||(Og.add(f),t={rel:t,crossOrigin:s,href:i},o.querySelector(f)===null&&(i=o.createElement("link"),En(i,"link",t),te(i),o.head.appendChild(i)))}}function by(t){ea.D(t),Pg("dns-prefetch",t,null)}function Ty(t,i){ea.C(t,i),Pg("preconnect",t,i)}function Ay(t,i,s){ea.L(t,i,s);var o=fr;if(o&&t&&i){var f='link[rel="preload"][as="'+An(i)+'"]';i==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+An(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+An(s.imageSizes)+'"]')):f+='[href="'+An(t)+'"]';var m=f;switch(i){case"style":m=hr(t);break;case"script":m=dr(t)}ci.has(m)||(t=g({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:t,as:i},s),ci.set(m,t),o.querySelector(f)!==null||i==="style"&&o.querySelector(zo(m))||i==="script"&&o.querySelector(Bo(m))||(i=o.createElement("link"),En(i,"link",t),te(i),o.head.appendChild(i)))}}function wy(t,i){ea.m(t,i);var s=fr;if(s&&t){var o=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+An(o)+'"][href="'+An(t)+'"]',m=f;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=dr(t)}if(!ci.has(m)&&(t=g({rel:"modulepreload",href:t},i),ci.set(m,t),s.querySelector(f)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Bo(m)))return}o=s.createElement("link"),En(o,"link",t),te(o),s.head.appendChild(o)}}}function Ry(t,i,s){ea.S(t,i,s);var o=fr;if(o&&t){var f=Z(o).hoistableStyles,m=hr(t);i=i||"default";var b=f.get(m);if(!b){var C={loading:0,preload:null};if(b=o.querySelector(zo(m)))C.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":i},s),(s=ci.get(m))&&sh(t,s);var H=b=o.createElement("link");te(H),En(H,"link",t),H._p=new Promise(function(se,pe){H.onload=se,H.onerror=pe}),H.addEventListener("load",function(){C.loading|=1}),H.addEventListener("error",function(){C.loading|=2}),C.loading|=4,rc(b,i,o)}b={type:"stylesheet",instance:b,count:1,state:C},f.set(m,b)}}}function Cy(t,i){ea.X(t,i);var s=fr;if(s&&t){var o=Z(s).hoistableScripts,f=dr(t),m=o.get(f);m||(m=s.querySelector(Bo(f)),m||(t=g({src:t,async:!0},i),(i=ci.get(f))&&rh(t,i),m=s.createElement("script"),te(m),En(m,"link",t),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},o.set(f,m))}}function Dy(t,i){ea.M(t,i);var s=fr;if(s&&t){var o=Z(s).hoistableScripts,f=dr(t),m=o.get(f);m||(m=s.querySelector(Bo(f)),m||(t=g({src:t,async:!0,type:"module"},i),(i=ci.get(f))&&rh(t,i),m=s.createElement("script"),te(m),En(m,"link",t),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},o.set(f,m))}}function zg(t,i,s,o){var f=(f=_e.current)?sc(f):null;if(!f)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=hr(s.href),s=Z(f).hoistableStyles,o=s.get(i),o||(o={type:"style",instance:null,count:0,state:null},s.set(i,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=hr(s.href);var m=Z(f).hoistableStyles,b=m.get(t);if(b||(f=f.ownerDocument||f,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(t,b),(m=f.querySelector(zo(t)))&&!m._p&&(b.instance=m,b.state.loading=5),ci.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},ci.set(t,s),m||Ny(f,t,s,b.state))),i&&o===null)throw Error(a(528,""));return b}if(i&&o!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=dr(s),s=Z(f).hoistableScripts,o=s.get(i),o||(o={type:"script",instance:null,count:0,state:null},s.set(i,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function hr(t){return'href="'+An(t)+'"'}function zo(t){return'link[rel="stylesheet"]['+t+"]"}function Bg(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function Ny(t,i,s,o){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?o.loading=1:(i=t.createElement("link"),o.preload=i,i.addEventListener("load",function(){return o.loading|=1}),i.addEventListener("error",function(){return o.loading|=2}),En(i,"link",s),te(i),t.head.appendChild(i))}function dr(t){return'[src="'+An(t)+'"]'}function Bo(t){return"script[async]"+t}function Ig(t,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var o=t.querySelector('style[data-href~="'+An(s.href)+'"]');if(o)return i.instance=o,te(o),o;var f=g({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),te(o),En(o,"style",f),rc(o,s.precedence,t),i.instance=o;case"stylesheet":f=hr(s.href);var m=t.querySelector(zo(f));if(m)return i.state.loading|=4,i.instance=m,te(m),m;o=Bg(s),(f=ci.get(f))&&sh(o,f),m=(t.ownerDocument||t).createElement("link"),te(m);var b=m;return b._p=new Promise(function(C,H){b.onload=C,b.onerror=H}),En(m,"link",o),i.state.loading|=4,rc(m,s.precedence,t),i.instance=m;case"script":return m=dr(s.src),(f=t.querySelector(Bo(m)))?(i.instance=f,te(f),f):(o=s,(f=ci.get(m))&&(o=g({},s),rh(o,f)),t=t.ownerDocument||t,f=t.createElement("script"),te(f),En(f,"link",o),t.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(o=i.instance,i.state.loading|=4,rc(o,s.precedence,t));return i.instance}function rc(t,i,s){for(var o=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=o.length?o[o.length-1]:null,m=f,b=0;b<o.length;b++){var C=o[b];if(C.dataset.precedence===i)m=C;else if(m!==f)break}m?m.parentNode.insertBefore(t,m.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(t,i.firstChild))}function sh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function rh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var oc=null;function Fg(t,i,s){if(oc===null){var o=new Map,f=oc=new Map;f.set(s,o)}else f=oc,o=f.get(s),o||(o=new Map,f.set(s,o));if(o.has(t))return o;for(o.set(t,null),s=s.getElementsByTagName(t),f=0;f<s.length;f++){var m=s[f];if(!(m[ma]||m[en]||t==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var b=m.getAttribute(i)||"";b=t+b;var C=o.get(b);C?C.push(m):o.set(b,[m])}}return o}function Hg(t,i,s){t=t.ownerDocument||t,t.head.insertBefore(s,i==="title"?t.querySelector("head > title"):null)}function Uy(t,i,s){if(s===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function Gg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Io=null;function Ly(){}function Oy(t,i,s){if(Io===null)throw Error(a(475));var o=Io;if(i.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var f=hr(s.href),m=t.querySelector(zo(f));if(m){t=m._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(o.count++,o=lc.bind(o),t.then(o,o)),i.state.loading|=4,i.instance=m,te(m);return}m=t.ownerDocument||t,s=Bg(s),(f=ci.get(f))&&sh(s,f),m=m.createElement("link"),te(m);var b=m;b._p=new Promise(function(C,H){b.onload=C,b.onerror=H}),En(m,"link",s),i.instance=m}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(i,t),(t=i.state.preload)&&(i.state.loading&3)===0&&(o.count++,i=lc.bind(o),t.addEventListener("load",i),t.addEventListener("error",i))}}function Py(){if(Io===null)throw Error(a(475));var t=Io;return t.stylesheets&&t.count===0&&oh(t,t.stylesheets),0<t.count?function(i){var s=setTimeout(function(){if(t.stylesheets&&oh(t,t.stylesheets),t.unsuspend){var o=t.unsuspend;t.unsuspend=null,o()}},6e4);return t.unsuspend=i,function(){t.unsuspend=null,clearTimeout(s)}}:null}function lc(){if(this.count--,this.count===0){if(this.stylesheets)oh(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var cc=null;function oh(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,cc=new Map,i.forEach(zy,t),cc=null,lc.call(t))}function zy(t,i){if(!(i.state.loading&4)){var s=cc.get(t);if(s)var o=s.get(null);else{s=new Map,cc.set(t,s);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var b=f[m];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(s.set(b.dataset.precedence,b),o=b)}o&&s.set(null,o)}f=i.instance,b=f.getAttribute("data-precedence"),m=s.get(b)||o,m===o&&s.set(null,f),s.set(b,f),this.count++,o=lc.bind(this),f.addEventListener("load",o),f.addEventListener("error",o),m?m.parentNode.insertBefore(f,m.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),i.state.loading|=4}}var Fo={$$typeof:A,Provider:null,Consumer:null,_currentValue:j,_currentValue2:j,_threadCount:0};function By(t,i,s,o,f,m,b,C){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=xe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xe(0),this.hiddenUpdates=xe(null),this.identifierPrefix=o,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=C,this.incompleteTransitions=new Map}function kg(t,i,s,o,f,m,b,C,H,se,pe,ve){return t=new By(t,i,s,b,C,H,se,ve),i=1,m===!0&&(i|=24),m=qn(3,null,null,i),t.current=m,m.stateNode=t,i=Gu(),i.refCount++,t.pooledCache=i,i.refCount++,m.memoizedState={element:o,isDehydrated:s,cache:i},Wu(m),t}function Vg(t){return t?(t=js,t):js}function jg(t,i,s,o,f,m){f=Vg(f),o.context===null?o.context=f:o.pendingContext=f,o=Ma(i),o.payload={element:s},m=m===void 0?null:m,m!==null&&(o.callback=m),s=Ea(t,o,i),s!==null&&(Qn(s,t,i),mo(s,t,i))}function Wg(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function lh(t,i){Wg(t,i),(t=t.alternate)&&Wg(t,i)}function qg(t){if(t.tag===13){var i=Vs(t,67108864);i!==null&&Qn(i,t,67108864),lh(t,67108864)}}var uc=!0;function Iy(t,i,s,o){var f=L.T;L.T=null;var m=K.p;try{K.p=2,ch(t,i,s,o)}finally{K.p=m,L.T=f}}function Fy(t,i,s,o){var f=L.T;L.T=null;var m=K.p;try{K.p=8,ch(t,i,s,o)}finally{K.p=m,L.T=f}}function ch(t,i,s,o){if(uc){var f=uh(o);if(f===null)Zf(t,i,o,fc,s),Yg(t,o);else if(Gy(f,t,i,s,o))o.stopPropagation();else if(Yg(t,o),i&4&&-1<Hy.indexOf(t)){for(;f!==null;){var m=va(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var b=nt(m.pendingLanes);if(b!==0){var C=m;for(C.pendingLanes|=2,C.entangledLanes|=2;b;){var H=1<<31-qe(b);C.entanglements[1]|=H,b&=~H}Ci(m),(Dt&6)===0&&(Yl=$e()+500,Uo(0))}}break;case 13:C=Vs(m,2),C!==null&&Qn(C,m,2),Zl(),lh(m,2)}if(m=uh(o),m===null&&Zf(t,i,o,fc,s),m===f)break;f=m}f!==null&&o.stopPropagation()}else Zf(t,i,o,null,s)}}function uh(t){return t=pu(t),fh(t)}var fc=null;function fh(t){if(fc=null,t=ga(t),t!==null){var i=l(t);if(i===null)t=null;else{var s=i.tag;if(s===13){if(t=u(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return fc=t,null}function Xg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(at()){case Wt:return 2;case G:return 8;case N:case fe:return 32;case Se:return 268435456;default:return 32}default:return 32}}var hh=!1,za=null,Ba=null,Ia=null,Ho=new Map,Go=new Map,Fa=[],Hy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Yg(t,i){switch(t){case"focusin":case"focusout":za=null;break;case"dragenter":case"dragleave":Ba=null;break;case"mouseover":case"mouseout":Ia=null;break;case"pointerover":case"pointerout":Ho.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Go.delete(i.pointerId)}}function ko(t,i,s,o,f,m){return t===null||t.nativeEvent!==m?(t={blockedOn:i,domEventName:s,eventSystemFlags:o,nativeEvent:m,targetContainers:[f]},i!==null&&(i=va(i),i!==null&&qg(i)),t):(t.eventSystemFlags|=o,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function Gy(t,i,s,o,f){switch(i){case"focusin":return za=ko(za,t,i,s,o,f),!0;case"dragenter":return Ba=ko(Ba,t,i,s,o,f),!0;case"mouseover":return Ia=ko(Ia,t,i,s,o,f),!0;case"pointerover":var m=f.pointerId;return Ho.set(m,ko(Ho.get(m)||null,t,i,s,o,f)),!0;case"gotpointercapture":return m=f.pointerId,Go.set(m,ko(Go.get(m)||null,t,i,s,o,f)),!0}return!1}function Kg(t){var i=ga(t.target);if(i!==null){var s=l(i);if(s!==null){if(i=s.tag,i===13){if(i=u(s),i!==null){t.blockedOn=i,ti(t.priority,function(){if(s.tag===13){var o=Zn();o=Yt(o);var f=Vs(s,o);f!==null&&Qn(f,s,o),lh(s,o)}});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function hc(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=uh(t.nativeEvent);if(s===null){s=t.nativeEvent;var o=new s.constructor(s.type,s);du=o,s.target.dispatchEvent(o),du=null}else return i=va(s),i!==null&&qg(i),t.blockedOn=s,!1;i.shift()}return!0}function Zg(t,i,s){hc(t)&&s.delete(i)}function ky(){hh=!1,za!==null&&hc(za)&&(za=null),Ba!==null&&hc(Ba)&&(Ba=null),Ia!==null&&hc(Ia)&&(Ia=null),Ho.forEach(Zg),Go.forEach(Zg)}function dc(t,i){t.blockedOn===i&&(t.blockedOn=null,hh||(hh=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,ky)))}var pc=null;function Qg(t){pc!==t&&(pc=t,c.unstable_scheduleCallback(c.unstable_NormalPriority,function(){pc===t&&(pc=null);for(var i=0;i<t.length;i+=3){var s=t[i],o=t[i+1],f=t[i+2];if(typeof o!="function"){if(fh(o||s)===null)continue;break}var m=va(s);m!==null&&(t.splice(i,3),i-=3,ff(m,{pending:!0,data:f,method:s.method,action:o},o,f))}}))}function Vo(t){function i(H){return dc(H,t)}za!==null&&dc(za,t),Ba!==null&&dc(Ba,t),Ia!==null&&dc(Ia,t),Ho.forEach(i),Go.forEach(i);for(var s=0;s<Fa.length;s++){var o=Fa[s];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Fa.length&&(s=Fa[0],s.blockedOn===null);)Kg(s),s.blockedOn===null&&Fa.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(o=0;o<s.length;o+=3){var f=s[o],m=s[o+1],b=f[xn]||null;if(typeof m=="function")b||Qg(s);else if(b){var C=null;if(m&&m.hasAttribute("formAction")){if(f=m,b=m[xn]||null)C=b.formAction;else if(fh(f)!==null)continue}else C=b.action;typeof C=="function"?s[o+1]=C:(s.splice(o,3),o-=3),Qg(s)}}}function dh(t){this._internalRoot=t}mc.prototype.render=dh.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,o=Zn();jg(s,o,t,i,null,null)},mc.prototype.unmount=dh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;jg(t.current,2,null,t,null,null),Zl(),i[Hi]=null}};function mc(t){this._internalRoot=t}mc.prototype.unstable_scheduleHydration=function(t){if(t){var i=jn();t={blockedOn:null,target:t,priority:i};for(var s=0;s<Fa.length&&i!==0&&i<Fa[s].priority;s++);Fa.splice(s,0,t),s===0&&Kg(t)}};var Jg=e.version;if(Jg!=="19.1.1")throw Error(a(527,Jg,"19.1.1"));K.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=d(i),t=t!==null?p(t):null,t=t===null?null:t.stateNode,t};var Vy={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gc.isDisabled&&gc.supportsFiber)try{ke=gc.inject(Vy),Re=gc}catch{}}return Wo.createRoot=function(t,i){if(!r(t))throw Error(a(299));var s=!1,o="",f=pm,m=mm,b=gm,C=null;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(o=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(b=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(C=i.unstable_transitionCallbacks)),i=kg(t,1,!1,null,null,s,o,f,m,b,C,null),t[Hi]=i.current,Kf(t),new dh(i)},Wo.hydrateRoot=function(t,i,s){if(!r(t))throw Error(a(299));var o=!1,f="",m=pm,b=mm,C=gm,H=null,se=null;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(m=s.onUncaughtError),s.onCaughtError!==void 0&&(b=s.onCaughtError),s.onRecoverableError!==void 0&&(C=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(H=s.unstable_transitionCallbacks),s.formState!==void 0&&(se=s.formState)),i=kg(t,1,!0,i,s??null,o,f,m,b,C,H,se),i.context=Vg(null),s=i.current,o=Zn(),o=Yt(o),f=Ma(o),f.callback=null,Ea(s,f,o),s=o,i.current.lanes=s,we(i,s),Ci(i),t[Hi]=i.current,Kf(t),new mc(i)},Wo.version="19.1.1",Wo}var lv;function tS(){if(lv)return gh.exports;lv=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(e){console.error(e)}}return c(),gh.exports=eS(),gh.exports}var nS=tS();/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iS=c=>c.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),aS=c=>c.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,a)=>a?a.toUpperCase():n.toLowerCase()),cv=c=>{const e=aS(c);return e.charAt(0).toUpperCase()+e.slice(1)},e_=(...c)=>c.filter((e,n,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===n).join(" ").trim(),sS=c=>{for(const e in c)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var rS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oS=fn.forwardRef(({color:c="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:a,className:r="",children:l,iconNode:u,...h},d)=>fn.createElement("svg",{ref:d,...rS,width:e,height:e,stroke:c,strokeWidth:a?Number(n)*24/Number(e):n,className:e_("lucide",r),...!l&&!sS(h)&&{"aria-hidden":"true"},...h},[...u.map(([p,g])=>fn.createElement(p,g)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const al=(c,e)=>{const n=fn.forwardRef(({className:a,...r},l)=>fn.createElement(oS,{ref:l,iconNode:e,className:e_(`lucide-${iS(cv(c))}`,`lucide-${c}`,a),...r}));return n.displayName=cv(c),n};/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lS=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m9 8 3 3v7",key:"17yadx"}],["path",{d:"m12 11 3-3",key:"p4cfq1"}],["path",{d:"M9 12h6",key:"1c52cq"}],["path",{d:"M9 16h6",key:"8wimt3"}]],cS=al("badge-japanese-yen",lS);/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uS=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],fS=al("book-open",uS);/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hS=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],dS=al("chevron-left",hS);/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pS=[["path",{d:"M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74z",key:"15q6uc"}],["path",{d:"m20 14.285 1.5.845a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74l1.5-.845",key:"byia6g"}]],mS=al("layers-2",pS);/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gS=[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3",key:"s6n7sd"}]],vS=al("mic",gS),nu=({title:c,onGoBack:e})=>Te.jsxs("div",{className:"flex items-center justify-between p-4 sm:p-6 bg-white border-b-2 border-gray-200 drop-shadow-sm sticky top-0 z-50",children:[Te.jsx("button",{onClick:e,className:"p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200","aria-label":"Go back to homepage",children:Te.jsx(dS,{className:"w-6 h-6 text-gray-700"})}),Te.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-gray-800 font-['Inter']",children:c}),Te.jsx("div",{className:"w-8 h-8"})," "]}),uv=[{char:"あ",romaji:"a"},{char:"い",romaji:"i"},{char:"う",romaji:"u"},{char:"え",romaji:"e"},{char:"お",romaji:"o"},{char:"か",romaji:"ka"},{char:"き",romaji:"ki"},{char:"く",romaji:"ku"},{char:"け",romaji:"ke"},{char:"こ",romaji:"ko"},{char:"さ",romaji:"sa"},{char:"し",romaji:"shi"},{char:"す",romaji:"su"},{char:"せ",romaji:"se"},{char:"そ",romaji:"so"},{char:"た",romaji:"ta"},{char:"ち",romaji:"chi"},{char:"つ",romaji:"tsu"},{char:"て",romaji:"te"},{char:"と",romaji:"to"},{char:"な",romaji:"na"},{char:"に",romaji:"ni"},{char:"ぬ",romaji:"nu"},{char:"ね",romaji:"ne"},{char:"の",romaji:"no"},{char:"は",romaji:"ha"},{char:"ひ",romaji:"hi"},{char:"ふ",romaji:"fu"},{char:"へ",romaji:"he"},{char:"ほ",romaji:"ho"},{char:"ま",romaji:"ma"},{char:"み",romaji:"mi"},{char:"む",romaji:"mu"},{char:"め",romaji:"me"},{char:"も",romaji:"mo"},{char:"や",romaji:"ya"},{char:" ",romaji:" "},{char:"ゆ",romaji:"yu"},{char:" ",romaji:" "},{char:"よ",romaji:"yo"},{char:"ら",romaji:"ra"},{char:"り",romaji:"ri"},{char:"る",romaji:"ru"},{char:"れ",romaji:"re"},{char:"ろ",romaji:"ro"},{char:"わ",romaji:"wa"},{char:"を",romaji:"wo"},{char:"ん",romaji:"n"},{char:" ",romaji:" "},{char:" ",romaji:" "},{char:"が",romaji:"ga"},{char:"ぎ",romaji:"gi"},{char:"ぐ",romaji:"gu"},{char:"げ",romaji:"ge"},{char:"ご",romaji:"go"},{char:"ざ",romaji:"za"},{char:"じ",romaji:"ji"},{char:"ず",romaji:"zu"},{char:"ぜ",romaji:"ze"},{char:"ぞ",romaji:"zo"},{char:"だ",romaji:"da"},{char:"ぢ",romaji:"ji"},{char:"づ",romaji:"zu"},{char:"で",romaji:"de"},{char:"ど",romaji:"do"},{char:"ば",romaji:"ba"},{char:"び",romaji:"bi"},{char:"ぶ",romaji:"bu"},{char:"べ",romaji:"be"},{char:"ぼ",romaji:"bo"},{char:"ぱ",romaji:"pa"},{char:"ぴ",romaji:"pi"},{char:"ぷ",romaji:"pu"},{char:"ぺ",romaji:"pe"},{char:"ぽ",romaji:"po"}],fv=[{char:"ア",romaji:"a"},{char:"イ",romaji:"i"},{char:"ウ",romaji:"u"},{char:"エ",romaji:"e"},{char:"オ",romaji:"o"},{char:"カ",romaji:"ka"},{char:"キ",romaji:"ki"},{char:"ク",romaji:"ku"},{char:"ケ",romaji:"ke"},{char:"コ",romaji:"ko"},{char:"サ",romaji:"sa"},{char:"シ",romaji:"shi"},{char:"ス",romaji:"su"},{char:"セ",romaji:"se"},{char:"ソ",romaji:"so"},{char:"タ",romaji:"ta"},{char:"チ",romaji:"chi"},{char:"ツ",romaji:"tsu"},{char:"テ",romaji:"te"},{char:"ト",romaji:"to"},{char:"ナ",romaji:"na"},{char:"ニ",romaji:"ni"},{char:"ヌ",romaji:"nu"},{char:"ネ",romaji:"ne"},{char:"ノ",romaji:"no"},{char:"ハ",romaji:"ha"},{char:"ヒ",romaji:"hi"},{char:"フ",romaji:"fu"},{char:"ヘ",romaji:"he"},{char:"ホ",romaji:"ho"},{char:"マ",romaji:"ma"},{char:"ミ",romaji:"mi"},{char:"ム",romaji:"mu"},{char:"メ",romaji:"me"},{char:"モ",romaji:"mo"},{char:"ヤ",romaji:"ya"},{char:" ",romaji:" "},{char:"ユ",romaji:"yu"},{char:" ",romaji:" "},{char:"ヨ",romaji:"yo"},{char:"ラ",romaji:"ra"},{char:"リ",romaji:"ri"},{char:"ル",romaji:"ru"},{char:"レ",romaji:"re"},{char:"ロ",romaji:"ro"},{char:"ワ",romaji:"wa"},{char:"ヲ",romaji:"wo"},{char:"ン",romaji:"n"},{char:" ",romaji:" "},{char:" ",romaji:" "},{char:"ガ",romaji:"ga"},{char:"ギ",romaji:"gi"},{char:"グ",romaji:"gu"},{char:"ゲ",romaji:"ge"},{char:"ゴ",romaji:"go"},{char:"ザ",romaji:"za"},{char:"ジ",romaji:"ji"},{char:"ズ",romaji:"zu"},{char:"ゼ",romaji:"ze"},{char:"ゾ",romaji:"zo"},{char:"ダ",romaji:"da"},{char:"ヂ",romaji:"ji"},{char:"ヅ",romaji:"zu"},{char:"デ",romaji:"de"},{char:"ド",romaji:"do"},{char:"バ",romaji:"ba"},{char:"ビ",romaji:"bi"},{char:"ブ",romaji:"bu"},{char:"ベ",romaji:"be"},{char:"ボ",romaji:"bo"},{char:"パ",romaji:"pa"},{char:"ピ",romaji:"pi"},{char:"プ",romaji:"pu"},{char:"ペ",romaji:"pe"},{char:"ポ",romaji:"po"}],vc=c=>Te.jsx("div",{className:"grid grid-cols-5 gap-2",children:c.map((e,n)=>Te.jsxs("div",{className:"flex flex-col items-center justify-center p-2 border rounded shadow text-center cursor-pointer hover:bg-gray-100 transition-colors",children:[Te.jsx("span",{className:"text-2xl font-bold",children:e.char}),Te.jsx("span",{className:"text-sm text-gray-500",children:e.romaji})]},n))}),_S=({onGoBack:c})=>{const[e,n]=fn.useState("hiragana");return Te.jsxs("div",{className:"p-4 md:p-8",children:[Te.jsx(nu,{title:"Hiragana & Katakana",onGoBack:c}),Te.jsxs("div",{className:"md:hidden mt-4",children:[Te.jsxs("div",{className:"flex justify-center mb-4",children:[Te.jsx("button",{className:`px-4 py-2 text-xl font-bold rounded-l-lg ${e==="hiragana"?"bg-blue-500 text-white":"bg-gray-200"}`,onClick:()=>n("hiragana"),children:"Hiragana"}),Te.jsx("button",{className:`px-4 py-2 text-xl font-bold rounded-r-lg ${e==="katakana"?"bg-blue-500 text-white":"bg-gray-200"}`,onClick:()=>n("katakana"),children:"Katakana"})]}),e==="hiragana"&&Te.jsxs("div",{className:"bg-white p-4 rounded-lg shadow-lg",children:[Te.jsx("h2",{className:"text-2xl font-bold mb-4 text-center",children:"Hiragana"}),vc(uv)]}),e==="katakana"&&Te.jsxs("div",{className:"bg-white p-4 rounded-lg shadow-lg",children:[Te.jsx("h2",{className:"text-2xl font-bold mb-4 text-center",children:"Katakana"}),vc(fv)]})]}),Te.jsxs("div",{className:"hidden md:flex md:space-x-8 mt-4",children:[Te.jsxs("div",{className:"w-1/2",children:[Te.jsx("h2",{className:"text-3xl font-bold mb-4 text-center",children:"Hiragana"}),vc(uv)]}),Te.jsxs("div",{className:"w-1/2",children:[Te.jsx("h2",{className:"text-3xl font-bold mb-4 text-center",children:"Katakana"}),vc(fv)]})]})]})},yh={n5:[{kanji:"一",reading:"いち/ひと",meaning:"one",exampleWords:["一つ (ひとつ)","一日 (ついたち)"]},{kanji:"二",reading:"に/ふた",meaning:"two",exampleWords:["二つ (ふたつ)","二日 (ふつか)"]},{kanji:"三",reading:"さん/み",meaning:"three",exampleWords:["三つ (みっつ)","三日 (みっか)"]},{kanji:"四",reading:"よん/し",meaning:"four",exampleWords:["四つ (よっつ)","四日 (よっか)"]},{kanji:"五",reading:"ご/いつ",meaning:"five",exampleWords:["五つ (いつつ)","五日 (いつか)"]},{kanji:"六",reading:"ろく/む",meaning:"six",exampleWords:["六つ (むっつ)","六日 (むいか)"]},{kanji:"七",reading:"なな/しち",meaning:"seven",exampleWords:["七つ (ななつ)","七日 (なのか)"]},{kanji:"八",reading:"はち/や",meaning:"eight",exampleWords:["八つ (やっつ)","八日 (ようか)"]},{kanji:"九",reading:"きゅう/ここの",meaning:"nine",exampleWords:["九つ (ここのつ)","九日 (ここのか)"]},{kanji:"十",reading:"じゅう/とお",meaning:"ten",exampleWords:["十 (とお)","十日 (とおか)"]},{kanji:"百",reading:"ひゃく",meaning:"hundred",exampleWords:["百円 (ひゃくえん)","三百 (さんびゃく)"]},{kanji:"千",reading:"せん",meaning:"thousand",exampleWords:["千円 (せんえん)","三千 (さんぜん)"]},{kanji:"万",reading:"まん",meaning:"ten thousand",exampleWords:["一万円 (いちまんえん)","十万 (じゅうまん)"]},{kanji:"円",reading:"えん",meaning:"yen/circle",exampleWords:["百円 (ひゃくえん)","円い (まるい)"]},{kanji:"日",reading:"にち/び/ひ",meaning:"day/sun",exampleWords:["日本 (にほん)","日曜日 (にちようび)"]},{kanji:"月",reading:"つき/げつ",meaning:"moon/month",exampleWords:["月曜日 (げつようび)","今月 (こんげつ)"]},{kanji:"火",reading:"か/ひ",meaning:"fire",exampleWords:["火曜日 (かようび)","花火 (はなび)"]},{kanji:"水",reading:"すい/みず",meaning:"water",exampleWords:["水曜日 (すいようび)","水 (みず)"]},{kanji:"木",reading:"もく/き",meaning:"tree/wood",exampleWords:["木曜日 (もくようび)","木 (き)"]},{kanji:"金",reading:"きん/かね",meaning:"gold/money",exampleWords:["金曜日 (きんようび)","お金 (おかね)"]},{kanji:"土",reading:"ど/つち",meaning:"earth/soil",exampleWords:["土曜日 (どようび)","土地 (とち)"]},{kanji:"本",reading:"ほん",meaning:"book/origin",exampleWords:["日本 (にほん)","本 (ほん)"]},{kanji:"語",reading:"ご",meaning:"language/word",exampleWords:["日本語 (にほんご)","英語 (えいご)"]},{kanji:"人",reading:"じん/ひと",meaning:"person",exampleWords:["日本人 (にほんじん)","一人 (ひとり)"]},{kanji:"学",reading:"がく",meaning:"learn/study",exampleWords:["学生 (がくせい)","大学 (だいがく)"]},{kanji:"校",reading:"こう",meaning:"school",exampleWords:["学校 (がっこう)","高校 (こうこう)"]},{kanji:"生",reading:"せい",meaning:"life/birth",exampleWords:["学生 (がくせい)","先生 (せんせい)"]},{kanji:"先",reading:"せん",meaning:"previous/ahead",exampleWords:["先生 (せんせい)","先月 (せんげつ)"]},{kanji:"名",reading:"めい",meaning:"name",exampleWords:["名前 (なまえ)","有名 (ゆうめい)"]},{kanji:"大",reading:"だい/おお",meaning:"big",exampleWords:["大学 (だいがく)","大きい (おおきい)"]},{kanji:"小",reading:"しょう/ちい",meaning:"small",exampleWords:["小学校 (しょうがっこう)","小さい (ちいさい)"]},{kanji:"中",reading:"ちゅう/なか",meaning:"middle/inside",exampleWords:["中国 (ちゅうごく)","中 (なか)"]},{kanji:"高",reading:"こう/たか",meaning:"high/expensive",exampleWords:["高校 (こうこう)","高い (たかい)"]},{kanji:"国",reading:"こく/くに",meaning:"country",exampleWords:["外国 (がいこく)","国 (くに)"]},{kanji:"山",reading:"やま/さん",meaning:"mountain",exampleWords:["山 (やま)","富士山 (ふじさん)"]},{kanji:"川",reading:"かわ",meaning:"river",exampleWords:["川 (かわ)","小川 (おがわ)"]},{kanji:"田",reading:"た/だ",meaning:"rice field",exampleWords:["山田 (やまだ)","水田 (すいでん)"]},{kanji:"時",reading:"じ/とき",meaning:"time",exampleWords:["時間 (じかん)","時々 (ときどき)"]},{kanji:"分",reading:"ふん/ぶん",meaning:"minute/part",exampleWords:["五分 (ごふん)","自分 (じぶん)"]},{kanji:"半",reading:"はん",meaning:"half",exampleWords:["三時半 (さんじはん)","半分 (はんぶん)"]},{kanji:"上",reading:"じょう/うえ",meaning:"up/above",exampleWords:["上 (うえ)","上手 (じょうず)"]},{kanji:"下",reading:"か/した",meaning:"down/below",exampleWords:["下 (した)","下手 (へた)"]},{kanji:"左",reading:"さ/ひだり",meaning:"left",exampleWords:["左 (ひだり)","左側 (ひだりがわ)"]},{kanji:"右",reading:"う/みぎ",meaning:"right",exampleWords:["右 (みぎ)","右側 (みぎがわ)"]},{kanji:"東",reading:"とう/ひがし",meaning:"east",exampleWords:["東京 (とうきょう)","東 (ひがし)"]},{kanji:"西",reading:"せい/にし",meaning:"west",exampleWords:["西 (にし)","西洋 (せいよう)"]},{kanji:"南",reading:"なん/みなみ",meaning:"south",exampleWords:["南 (みなみ)","南口 (みなみぐち)"]},{kanji:"北",reading:"ほく/きた",meaning:"north",exampleWords:["北 (きた)","北海道 (ほっかいどう)"]},{kanji:"男",reading:"だん/おとこ",meaning:"man",exampleWords:["男性 (だんせい)","男の子 (おとこのこ)"]},{kanji:"女",reading:"じょ/おんな",meaning:"woman",exampleWords:["女性 (じょせい)","女の子 (おんなのこ)"]},{kanji:"見",reading:"けん/み",meaning:"see",exampleWords:["見る (みる)","見学 (けんがく)"]},{kanji:"行",reading:"こう/い",meaning:"go",exampleWords:["行く (いく)","旅行 (りょこう)"]},{kanji:"来",reading:"らい/く",meaning:"come",exampleWords:["来る (くる)","来月 (らいげつ)"]},{kanji:"出",reading:"しゅつ/で",meaning:"go out",exampleWords:["出る (でる)","出口 (でぐち)"]},{kanji:"入",reading:"にゅう/はい",meaning:"enter",exampleWords:["入る (はいる)","入口 (いりぐち)"]},{kanji:"口",reading:"こう/くち",meaning:"mouth",exampleWords:["入口 (いりぐち)","口 (くち)"]},{kanji:"車",reading:"しゃ/くるま",meaning:"car",exampleWords:["電車 (でんしゃ)","車 (くるま)"]},{kanji:"食",reading:"しょく/た",meaning:"eat",exampleWords:["食べる (たべる)","食事 (しょくじ)"]},{kanji:"飲",reading:"いん/の",meaning:"drink",exampleWords:["飲む (のむ)","飲料水 (いんりょうすい)"]},{kanji:"買",reading:"かい/か",meaning:"buy",exampleWords:["買う (かう)","買い物 (かいもの)"]},{kanji:"読",reading:"どく/よ",meaning:"read",exampleWords:["読む (よむ)","読書 (どくしょ)"]},{kanji:"書",reading:"しょ/か",meaning:"write",exampleWords:["書く (かく)","図書館 (としょかん)"]},{kanji:"聞",reading:"ぶん/き",meaning:"listen/ask",exampleWords:["聞く (きく)","新聞 (しんぶん)"]},{kanji:"話",reading:"わ/はな",meaning:"talk",exampleWords:["話す (はなす)","会話 (かいわ)"]},{kanji:"会",reading:"かい/あ",meaning:"meet",exampleWords:["会う (あう)","会社 (かいしゃ)"]},{kanji:"今",reading:"こん/いま",meaning:"now",exampleWords:["今 (いま)","今日 (きょう)"]},{kanji:"週",reading:"しゅう",meaning:"week",exampleWords:["今週 (こんしゅう)","来週 (らいしゅう)"]},{kanji:"年",reading:"ねん/とし",meaning:"year",exampleWords:["今年 (ことし)","来年 (らいねん)"]},{kanji:"前",reading:"ぜん/まえ",meaning:"before/front",exampleWords:["午前 (ごぜん)","前 (まえ)"]},{kanji:"後",reading:"ご/あと",meaning:"after/behind",exampleWords:["午後 (ごご)","後 (あと)"]},{kanji:"間",reading:"かん/あいだ",meaning:"interval/between",exampleWords:["時間 (じかん)","間 (あいだ)"]},{kanji:"毎",reading:"まい",meaning:"every",exampleWords:["毎日 (まいにち)","毎週 (まいしゅう)"]}],n4:[{kanji:"長",reading:"ちょう/なが",meaning:"long/leader",exampleWords:["長い (ながい)","社長 (しゃちょう)"]},{kanji:"新",reading:"しん/あたら",meaning:"new",exampleWords:["新しい (あたらしい)","新聞 (しんぶん)"]},{kanji:"古",reading:"こ/ふる",meaning:"old",exampleWords:["古い (ふるい)","中古 (ちゅうこ)"]},{kanji:"友",reading:"ゆう/とも",meaning:"friend",exampleWords:["友達 (ともだち)","親友 (しんゆう)"]},{kanji:"母",reading:"ぼ/はは",meaning:"mother",exampleWords:["母 (はは)","お母さん (おかあさん)"]},{kanji:"父",reading:"ふ/ちち",meaning:"father",exampleWords:["父 (ちち)","お父さん (おとうさん)"]},{kanji:"兄",reading:"けい/あに",meaning:"older brother",exampleWords:["兄 (あに)","お兄さん (おにいさん)"]},{kanji:"弟",reading:"だい/おとうと",meaning:"younger brother",exampleWords:["弟 (おとうと)","兄弟 (きょうだい)"]},{kanji:"姉",reading:"し/あね",meaning:"older sister",exampleWords:["姉 (あね)","お姉さん (おねえさん)"]},{kanji:"妹",reading:"まい/いもうと",meaning:"younger sister",exampleWords:["妹 (いもうと)","姉妹 (しまい)"]},{kanji:"家",reading:"か/いえ",meaning:"house/home",exampleWords:["家 (いえ)","家族 (かぞく)"]},{kanji:"族",reading:"ぞく",meaning:"family/tribe",exampleWords:["家族 (かぞく)","民族 (みんぞく)"]},{kanji:"親",reading:"しん/おや",meaning:"parent/intimate",exampleWords:["親 (おや)","親しい (したしい)"]},{kanji:"知",reading:"ち/し",meaning:"know",exampleWords:["知る (しる)","知らせる (しらせる)"]},{kanji:"好",reading:"こう/す",meaning:"like/favorite",exampleWords:["好き (すき)","大好物 (だいこうぶつ)"]},{kanji:"安",reading:"あん/やす",meaning:"cheap/peaceful",exampleWords:["安い (やすい)","安心 (あんしん)"]},{kanji:"広",reading:"こう/ひろ",meaning:"wide/spacious",exampleWords:["広い (ひろい)","広場 (ひろば)"]},{kanji:"店",reading:"てん/みせ",meaning:"shop",exampleWords:["店 (みせ)","店員 (てんいん)"]},{kanji:"駅",reading:"えき",meaning:"station",exampleWords:["駅 (えき)","駅前 (えきまえ)"]},{kanji:"道",reading:"どう/みち",meaning:"road/way",exampleWords:["道 (みち)","茶道 (さどう)"]},{kanji:"曜",reading:"よう",meaning:"weekday",exampleWords:["日曜日 (にちようび)","何曜日 (なんようび)"]},{kanji:"朝",reading:"ちょう/あさ",meaning:"morning",exampleWords:["朝 (あさ)","朝食 (ちょうしょく)"]},{kanji:"昼",reading:"ちゅう/ひる",meaning:"noon",exampleWords:["昼 (ひる)","昼休み (ひるやすみ)"]},{kanji:"夜",reading:"や/よる",meaning:"night",exampleWords:["夜 (よる)","今夜 (こんや)"]},{kanji:"週",reading:"しゅう",meaning:"week",exampleWords:["先週 (せんしゅう)","来週 (らいしゅう)"]},{kanji:"今",reading:"こん/いま",meaning:"now",exampleWords:["今 (いま)","今月 (こんげつ)"]},{kanji:"来",reading:"らい/く",meaning:"come/next",exampleWords:["来る (くる)","来週 (らいしゅう)"]},{kanji:"帰",reading:"き/かえ",meaning:"return",exampleWords:["帰る (かえる)","帰国 (きこく)"]},{kanji:"電",reading:"でん",meaning:"electricity",exampleWords:["電気 (でんき)","電話 (でんわ)"]},{kanji:"話",reading:"わ/はな",meaning:"talk/story",exampleWords:["話す (はなす)","電話 (でんわ)"]},{kanji:"車",reading:"しゃ/くるま",meaning:"car",exampleWords:["電車 (でんしゃ)","自動車 (じどうしゃ)"]},{kanji:"手",reading:"しゅ/て",meaning:"hand",exampleWords:["手 (て)","手紙 (てがみ)"]},{kanji:"紙",reading:"し/かみ",meaning:"paper",exampleWords:["手紙 (てがみ)","紙 (かみ)"]},{kanji:"私",reading:"し/わたし",meaning:"I/private",exampleWords:["私 (わたし)","私立 (しりつ)"]},{kanji:"会",reading:"かい/あ",meaning:"meet",exampleWords:["会う (あう)","会社 (かいしゃ)"]},{kanji:"社",reading:"しゃ",meaning:"company",exampleWords:["会社 (かいしゃ)","社会 (しゃかい)"]},{kanji:"員",reading:"いん",meaning:"member",exampleWords:["会社員 (かいしゃいん)","店員 (てんいん)"]},{kanji:"物",reading:"ぶつ/もの",meaning:"thing",exampleWords:["物 (もの)","買い物 (かいもの)"]},{kanji:"食",reading:"しょく/た",meaning:"eat",exampleWords:["食べる (たべる)","食べ物 (たべもの)"]},{kanji:"飲",reading:"いん/の",meaning:"drink",exampleWords:["飲む (のむ)","飲み物 (のみもの)"]},{kanji:"見",reading:"けん/み",meaning:"see",exampleWords:["見る (みる)","見学 (けんがく)"]},{kanji:"聞",reading:"ぶん/き",meaning:"hear/listen",exampleWords:["聞く (きく)","新聞 (しんぶん)"]},{kanji:"買",reading:"かい/か",meaning:"buy",exampleWords:["買う (かう)","買い物 (かいもの)"]},{kanji:"読",reading:"どく/よ",meaning:"read",exampleWords:["読む (よむ)","読書 (どくしょ)"]},{kanji:"書",reading:"しょ/か",meaning:"write",exampleWords:["書く (かく)","図書館 (としょかん)"]},{kanji:"立",reading:"りつ/た",meaning:"stand",exampleWords:["立つ (たつ)","国立 (こくりつ)"]},{kanji:"入",reading:"にゅう/はい",meaning:"enter",exampleWords:["入る (はいる)","入学 (にゅうがく)"]},{kanji:"出",reading:"しゅつ/で",meaning:"exit",exampleWords:["出る (でる)","出口 (でぐち)"]},{kanji:"学",reading:"がく/まな",meaning:"learn",exampleWords:["学校 (がっこう)","学生 (がくせい)"]},{kanji:"校",reading:"こう",meaning:"school",exampleWords:["学校 (がっこう)","小学校 (しょうがっこう)"]},{kanji:"生",reading:"せい/う",meaning:"life/birth",exampleWords:["学生 (がくせい)","生まれる (うまれる)"]},{kanji:"先",reading:"せん",meaning:"previous/ahead",exampleWords:["先生 (せんせい)","先週 (せんしゅう)"]},{kanji:"年",reading:"ねん/とし",meaning:"year",exampleWords:["来年 (らいねん)","一年生 (いちねんせい)"]},{kanji:"何",reading:"か/なん",meaning:"what",exampleWords:["何 (なに)","何時 (なんじ)"]},{kanji:"行",reading:"こう/い",meaning:"go",exampleWords:["行く (いく)","旅行 (りょこう)"]},{kanji:"国",reading:"こく/くに",meaning:"country",exampleWords:["国 (くに)","外国 (がいこく)"]},{kanji:"外",reading:"がい/そと",meaning:"outside",exampleWords:["外国 (がいこく)","外 (そと)"]},{kanji:"気",reading:"き",meaning:"spirit/air",exampleWords:["元気 (げんき)","天気 (てんき)"]},{kanji:"天",reading:"てん",meaning:"heaven",exampleWords:["天気 (てんき)","天国 (てんごく)"]},{kanji:"雨",reading:"う/あめ",meaning:"rain",exampleWords:["雨 (あめ)","大雨 (おおあめ)"]},{kanji:"空",reading:"くう/そら",meaning:"sky/empty",exampleWords:["空 (そら)","空港 (くうこう)"]},{kanji:"名",reading:"めい/な",meaning:"name",exampleWords:["名前 (なまえ)","有名 (ゆうめい)"]},{kanji:"男",reading:"だん/おとこ",meaning:"man",exampleWords:["男の子 (おとこのこ)","男性 (だんせい)"]},{kanji:"女",reading:"じょ/おんな",meaning:"woman",exampleWords:["女の子 (おんなのこ)","女性 (じょせい)"]},{kanji:"大",reading:"だい/おお",meaning:"big",exampleWords:["大きい (おおきい)","大学 (だいがく)"]},{kanji:"小",reading:"しょう/ちい",meaning:"small",exampleWords:["小さい (ちいさい)","小学校 (しょうがっこう)"]},{kanji:"高",reading:"こう/たか",meaning:"high/expensive",exampleWords:["高い (たかい)","高校 (こうこう)"]},{kanji:"安",reading:"あん/やす",meaning:"cheap/peaceful",exampleWords:["安い (やすい)","安全 (あんぜん)"]},{kanji:"長",reading:"ちょう/なが",meaning:"long/leader",exampleWords:["長い (ながい)","社長 (しゃちょう)"]},{kanji:"新",reading:"しん/あたら",meaning:"new",exampleWords:["新しい (あたらしい)","新聞 (しんぶん)"]},{kanji:"古",reading:"こ/ふる",meaning:"old",exampleWords:["古い (ふるい)","中古 (ちゅうこ)"]},{kanji:"多",reading:"た/おお",meaning:"many",exampleWords:["多い (おおい)","多数 (たすう)"]},{kanji:"少",reading:"しょう/すこ",meaning:"few/little",exampleWords:["少し (すこし)","少年 (しょうねん)"]},{kanji:"明",reading:"めい/あか",meaning:"bright",exampleWords:["明るい (あかるい)","明日 (あした)"]},{kanji:"暗",reading:"あん/くら",meaning:"dark",exampleWords:["暗い (くらい)","暗号 (あんごう)"]},{kanji:"好",reading:"こう/す",meaning:"like",exampleWords:["好き (すき)","大好物 (だいこうぶつ)"]},{kanji:"時",reading:"じ/とき",meaning:"time",exampleWords:["時間 (じかん)","時々 (ときどき)"]},{kanji:"間",reading:"かん/あいだ",meaning:"interval",exampleWords:["間 (あいだ)","人間 (にんげん)"]},{kanji:"前",reading:"ぜん/まえ",meaning:"before/front",exampleWords:["前 (まえ)","午前 (ごぜん)"]},{kanji:"後",reading:"ご/あと",meaning:"after/behind",exampleWords:["後 (あと)","午後 (ごご)"]},{kanji:"中",reading:"ちゅう/なか",meaning:"middle",exampleWords:["中 (なか)","中国 (ちゅうごく)"]},{kanji:"上",reading:"じょう/うえ",meaning:"above",exampleWords:["上 (うえ)","上手 (じょうず)"]},{kanji:"下",reading:"か/した",meaning:"below",exampleWords:["下 (した)","下手 (へた)"]},{kanji:"左",reading:"さ/ひだり",meaning:"left",exampleWords:["左 (ひだり)","左手 (ひだりて)"]},{kanji:"右",reading:"う/みぎ",meaning:"right",exampleWords:["右 (みぎ)","右手 (みぎて)"]},{kanji:"東",reading:"とう/ひがし",meaning:"east",exampleWords:["東 (ひがし)","東京 (とうきょう)"]},{kanji:"西",reading:"せい/にし",meaning:"west",exampleWords:["西 (にし)","関西 (かんさい)"]},{kanji:"南",reading:"なん/みなみ",meaning:"south",exampleWords:["南 (みなみ)","南北 (なんぼく)"]},{kanji:"北",reading:"ほく/きた",meaning:"north",exampleWords:["北 (きた)","北海道 (ほっかいどう)"]},{kanji:"口",reading:"こう/くち",meaning:"mouth",exampleWords:["入口 (いりぐち)","出口 (でぐち)"]},{kanji:"目",reading:"もく/め",meaning:"eye",exampleWords:["目 (め)","目薬 (めぐすり)"]},{kanji:"耳",reading:"じ/みみ",meaning:"ear",exampleWords:["耳 (みみ)","耳鼻科 (じびか)"]},{kanji:"手",reading:"しゅ/て",meaning:"hand",exampleWords:["手 (て)","上手 (じょうず)"]},{kanji:"足",reading:"そく/あし",meaning:"foot/leg",exampleWords:["足 (あし)","遠足 (えんそく)"]},{kanji:"力",reading:"りょく/ちから",meaning:"power",exampleWords:["力 (ちから)","力仕事 (ちからしごと)"]},{kanji:"心",reading:"しん/こころ",meaning:"heart/mind",exampleWords:["心 (こころ)","安心 (あんしん)"]},{kanji:"体",reading:"たい/からだ",meaning:"body",exampleWords:["体 (からだ)","体育 (たいいく)"]},{kanji:"首",reading:"しゅ/くび",meaning:"neck",exampleWords:["首 (くび)","首都 (しゅと)"]},{kanji:"頭",reading:"とう/あたま",meaning:"head",exampleWords:["頭 (あたま)","頭痛 (ずつう)"]},{kanji:"元",reading:"げん/もと",meaning:"origin",exampleWords:["元気 (げんき)","元日 (がんじつ)"]},{kanji:"病",reading:"びょう",meaning:"sick",exampleWords:["病気 (びょうき)","病院 (びょういん)"]},{kanji:"院",reading:"いん",meaning:"institution",exampleWords:["病院 (びょういん)","入院 (にゅういん)"]}],n3:[{kanji:"歩",reading:"ほ/ある",meaning:"walk",exampleWords:["歩く (あるく)","散歩 (さんぽ)"]},{kanji:"思",reading:"し/おも",meaning:"think",exampleWords:["思う (おもう)","思考 (しこう)"]},{kanji:"持",reading:"じ/も",meaning:"hold",exampleWords:["持つ (もつ)","気持ち (きもち)"]},{kanji:"方",reading:"ほう/かた",meaning:"direction/person",exampleWords:["方 (かた)","方法 (ほうほう)"]},{kanji:"員",reading:"いん",meaning:"member",exampleWords:["店員 (てんいん)","社員 (しゃいん)"]},{kanji:"使",reading:"し/つか",meaning:"use",exampleWords:["使う (つかう)","使用 (しよう)"]},{kanji:"止",reading:"し/と",meaning:"stop",exampleWords:["止まる (とまる)","中止 (ちゅうし)"]},{kanji:"作",reading:"さく/つく",meaning:"make",exampleWords:["作る (つくる)","作業 (さぎょう)"]},{kanji:"京",reading:"きょう",meaning:"capital",exampleWords:["東京 (とうきょう)","上京 (じょうきょう)"]},{kanji:"様",reading:"よう/さま",meaning:"manner/Mr./Ms.",exampleWords:["様々 (さまざま)","お客様 (おきゃくさま)"]},{kanji:"旅",reading:"りょ/たび",meaning:"travel",exampleWords:["旅行 (りょこう)","旅 (たび)"]},{kanji:"所",reading:"しょ/ところ",meaning:"place",exampleWords:["所 (ところ)","場所 (ばしょ)"]},{kanji:"場",reading:"じょう/ば",meaning:"place/field",exampleWords:["場所 (ばしょ)","広場 (ひろば)"]},{kanji:"転",reading:"てん/ころ",meaning:"revolve/fall",exampleWords:["自転車 (じてんしゃ)","転ぶ (ころぶ)"]},{kanji:"真",reading:"しん/ま",meaning:"true",exampleWords:["写真 (しゃしん)","真ん中 (まんなか)"]},{kanji:"映",reading:"えい/うつ",meaning:"reflect/project",exampleWords:["映画 (えいが)","映る (うつる)"]},{kanji:"画",reading:"が/かく",meaning:"picture/stroke",exampleWords:["映画 (えいが)","漫画 (まんが)"]},{kanji:"音",reading:"おん/おと",meaning:"sound",exampleWords:["音楽 (おんがく)","音 (おと)"]},{kanji:"楽",reading:"がく/たの",meaning:"music/comfort",exampleWords:["音楽 (おんがく)","楽しい (たのしい)"]},{kanji:"料",reading:"りょう",meaning:"fee/material",exampleWords:["料理 (りょうり)","材料 (ざいりょう)"]},{kanji:"理",reading:"り",meaning:"reason/logic",exampleWords:["料理 (りょうり)","理由 (りゆう)"]},{kanji:"品",reading:"ひん/しな",meaning:"goods/article",exampleWords:["品物 (しなもの)","食品 (しょくひん)"]},{kanji:"屋",reading:"おく/や",meaning:"roof/shop",exampleWords:["部屋 (へや)","本屋 (ほんや)"]},{kanji:"室",reading:"しつ",meaning:"room",exampleWords:["教室 (きょうしつ)","研究室 (けんきゅうしつ)"]},{kanji:"病",reading:"びょう",meaning:"sick",exampleWords:["病気 (びょうき)","病院 (びょういん)"]},{kanji:"痛",reading:"つう/いた",meaning:"pain",exampleWords:["痛い (いたい)","頭痛 (ずつう)"]},{kanji:"顔",reading:"がん/かお",meaning:"face",exampleWords:["顔 (かお)","笑顔 (えがお)"]},{kanji:"色",reading:"しょく/いろ",meaning:"color",exampleWords:["色 (いろ)","景色 (けしき)"]},{kanji:"味",reading:"み/あじ",meaning:"taste",exampleWords:["味 (あじ)","意味 (いみ)"]},{kanji:"注",reading:"ちゅう",meaning:"pour/pay attention",exampleWords:["注意 (ちゅうい)","注文 (ちゅうもん)"]},{kanji:"意",reading:"い",meaning:"mind/will",exampleWords:["意味 (いみ)","意見 (いけん)"]},{kanji:"守",reading:"しゅ/まも",meaning:"guard/protect",exampleWords:["守る (まもる)","留守 (るす)"]},{kanji:"終",reading:"しゅう/お",meaning:"end",exampleWords:["終わる (おわる)","終点 (しゅうてん)"]},{kanji:"着",reading:"ちゃく/き",meaning:"arrive/wear",exampleWords:["着く (つく)","着る (きる)"]},{kanji:"春",reading:"しゅん/はる",meaning:"spring",exampleWords:["春 (はる)","青春 (せいしゅん)"]},{kanji:"夏",reading:"か/なつ",meaning:"summer",exampleWords:["夏 (なつ)","夏休み (なつやすみ)"]},{kanji:"秋",reading:"しゅう/あき",meaning:"autumn",exampleWords:["秋 (あき)","秋分 (しゅうぶん)"]},{kanji:"冬",reading:"とう/ふゆ",meaning:"winter",exampleWords:["冬 (ふゆ)","冬休み (ふゆやすみ)"]},{kanji:"朝",reading:"ちょう/あさ",meaning:"morning",exampleWords:["朝 (あさ)","朝食 (ちょうしょく)"]},{kanji:"昼",reading:"ちゅう/ひる",meaning:"noon",exampleWords:["昼 (ひる)","昼休み (ひるやすみ)"]},{kanji:"夜",reading:"や/よる",meaning:"night",exampleWords:["夜 (よる)","今夜 (こんや)"]},{kanji:"晩",reading:"ばん",meaning:"evening",exampleWords:["晩御飯 (ばんごはん)","毎晩 (まいばん)"]},{kanji:"休",reading:"きゅう/やす",meaning:"rest",exampleWords:["休む (やすむ)","休み (やすみ)"]},{kanji:"運",reading:"うん/はこ",meaning:"carry/luck",exampleWords:["運動 (うんどう)","運ぶ (はこぶ)"]},{kanji:"動",reading:"どう/うご",meaning:"move",exampleWords:["動く (うごく)","運動 (うんどう)"]},{kanji:"終",reading:"しゅう/お",meaning:"end",exampleWords:["終わる (おわる)","最終 (さいしゅう)"]},{kanji:"活",reading:"かつ",meaning:"active",exampleWords:["活動 (かつどう)","生活 (せいかつ)"]},{kanji:"送",reading:"そう/おく",meaning:"send",exampleWords:["送る (おくる)","放送 (ほうそう)"]},{kanji:"別",reading:"べつ/わか",meaning:"separate",exampleWords:["別れる (わかれる)","特別 (とくべつ)"]},{kanji:"界",reading:"かい",meaning:"world",exampleWords:["世界 (せかい)","境界 (きょうかい)"]},{kanji:"事",reading:"じ/こと",meaning:"thing/matter",exampleWords:["仕事 (しごと)","食事 (しょくじ)"]}],n2:[{kanji:"続",reading:"ぞく/つづ",meaning:"continue",exampleWords:["続く (つづく)","手続 (てつづき)"]},{kanji:"渡",reading:"と/わた",meaning:"cross/pass over",exampleWords:["渡る (わたる)","渡す (わたす)"]},{kanji:"慣",reading:"かん/な",meaning:"accustom",exampleWords:["慣れる (なれる)","習慣 (しゅうかん)"]},{kanji:"絶",reading:"ぜつ/た",meaning:"cut off/end",exampleWords:["絶対 (ぜったい)","絶える (たえる)"]},{kanji:"厳",reading:"げん/きび",meaning:"strict",exampleWords:["厳しい (きびしい)","厳重 (げんじゅう)"]},{kanji:"独",reading:"どく/ひと",meaning:"single/alone",exampleWords:["独身 (どくしん)","独り (ひとり)"]},{kanji:"妻",reading:"さい/つま",meaning:"wife",exampleWords:["妻 (つま)","夫妻 (ふさい)"]},{kanji:"寄",reading:"き/よ",meaning:"approach/gather",exampleWords:["寄る (よる)","寄付 (きふ)"]},{kanji:"談",reading:"だん",meaning:"discuss",exampleWords:["相談 (そうだん)","対談 (たいだん)"]},{kanji:"議",reading:"ぎ",meaning:"deliberate",exampleWords:["会議 (かいぎ)","議会 (ぎかい)"]},{kanji:"案",reading:"あん",meaning:"idea/plan",exampleWords:["案内 (あんない)","提案 (ていあん)"]},{kanji:"求",reading:"きゅう/もと",meaning:"request/seek",exampleWords:["求める (もとめる)","要求 (ようきゅう)"]},{kanji:"務",reading:"む",meaning:"duty",exampleWords:["事務 (じむ)","義務 (ぎむ)"]},{kanji:"責",reading:"せき",meaning:"blame/responsibility",exampleWords:["責任 (せきにん)","責める (せめる)"]},{kanji:"任",reading:"にん/まか",meaning:"entrust",exampleWords:["任せる (まかせる)","任務 (にんむ)"]},{kanji:"志",reading:"し/こころざし",meaning:"will/aim",exampleWords:["意志 (いし)","志す (こころざす)"]},{kanji:"念",reading:"ねん",meaning:"thought",exampleWords:["残念 (ざんねん)","記念 (きねん)"]},{kanji:"念",reading:"ねん",meaning:"thought",exampleWords:["残念 (ざんねん)","記念 (きねん)"]},{kanji:"念",reading:"ねん",meaning:"thought",exampleWords:["残念 (ざんねん)","記念 (きねん)"]},{kanji:"慮",reading:"りょ",meaning:"consider",exampleWords:["考慮 (こうりょ)","配慮 (はいりょ)"]},{kanji:"識",reading:"しき",meaning:"knowledge",exampleWords:["知識 (ちしき)","意識 (いしき)"]},{kanji:"観",reading:"かん",meaning:"view",exampleWords:["観光 (かんこう)","観点 (かんてん)"]},{kanji:"察",reading:"さつ",meaning:"guess/presume",exampleWords:["警察 (けいさつ)","観察 (かんさつ)"]},{kanji:"調",reading:"ちょう/しら",meaning:"investigate",exampleWords:["調べる (しらべる)","調子 (ちょうし)"]},{kanji:"査",reading:"さ",meaning:"investigate",exampleWords:["調査 (ちょうさ)","検査 (けんさ)"]},{kanji:"研",reading:"けん",meaning:"polish",exampleWords:["研究 (けんきゅう)","研ぐ (とぐ)"]},{kanji:"究",reading:"きゅう",meaning:"investigate",exampleWords:["研究 (けんきゅう)","究める (きわめる)"]},{kanji:"技",reading:"ぎ/わざ",meaning:"skill",exampleWords:["技術 (ぎじゅつ)","技 (わざ)"]},{kanji:"術",reading:"じゅつ",meaning:"art/technique",exampleWords:["技術 (ぎじゅつ)","手術 (しゅじゅつ)"]},{kanji:"基",reading:"き/もと",meaning:"base",exampleWords:["基本 (きほん)","基づく (もとづく)"]},{kanji:"礎",reading:"そ",meaning:"foundation",exampleWords:["基礎 (きそ)","礎 (いしずえ)"]},{kanji:"構",reading:"こう/かま",meaning:"construct",exampleWords:["構成 (こうせい)","構える (かまえる)"]},{kanji:"造",reading:"ぞう/つく",meaning:"create",exampleWords:["製造 (せいぞう)","造る (つくる)"]},{kanji:"築",reading:"ちく/きず",meaning:"build",exampleWords:["建築 (けんちく)","築く (きずく)"]},{kanji:"設",reading:"せつ/もう",meaning:"establish",exampleWords:["設立 (せつりつ)","設ける (もうける)"]},{kanji:"管",reading:"かん",meaning:"tube/control",exampleWords:["管理 (かんり)","水道管 (すいどうかん)"]},{kanji:"理",reading:"り",meaning:"reason",exampleWords:["理解 (りかい)","論理 (ろんり)"]},{kanji:"扱",reading:"あつか",meaning:"handle",exampleWords:["扱う (あつかう)","取り扱い (とりあつかい)"]},{kanji:"評",reading:"ひょう",meaning:"evaluate",exampleWords:["評価 (ひょうか)","評判 (ひょうばん)"]},{kanji:"価",reading:"か",meaning:"price",exampleWords:["価格 (かかく)","価値 (かち)"]},{kanji:"観",reading:"かん",meaning:"view",exampleWords:["観光 (かんこう)","観客 (かんきゃく)"]},{kanji:"覚",reading:"かく/おぼ",meaning:"remember",exampleWords:["覚える (おぼえる)","感覚 (かんかく)"]},{kanji:"忘",reading:"ぼう/わす",meaning:"forget",exampleWords:["忘れる (わすれる)","忘年会 (ぼうねんかい)"]},{kanji:"認",reading:"にん/みと",meaning:"acknowledge",exampleWords:["認める (みとめる)","確認 (かくにん)"]},{kanji:"識",reading:"しき",meaning:"knowledge",exampleWords:["知識 (ちしき)","常識 (じょうしき)"]},{kanji:"論",reading:"ろん",meaning:"argument",exampleWords:["議論 (ぎろん)","論文 (ろんぶん)"]},{kanji:"象",reading:"しょう/かた",meaning:"image",exampleWords:["印象 (いんしょう)","象 (ぞう)"]},{kanji:"印",reading:"いん/しるし",meaning:"seal/mark",exampleWords:["印象 (いんしょう)","印 (しるし)"]},{kanji:"像",reading:"ぞう",meaning:"statue/image",exampleWords:["画像 (がぞう)","想像 (そうぞう)"]},{kanji:"表",reading:"ひょう/あらわ",meaning:"express/surface",exampleWords:["表す (あらわす)","表現 (ひょうげん)"]},{kanji:"現",reading:"げん/あらわ",meaning:"appear",exampleWords:["現れる (あらわれる)","表現 (ひょうげん)"]},{kanji:"述",reading:"じゅつ/の",meaning:"state",exampleWords:["述べる (のべる)","記述 (きじゅつ)"]}],n1:[{kanji:"概",reading:"がい",meaning:"outline/general",exampleWords:["概要 (がいよう)","概論 (がいろん)"]},{kanji:"括",reading:"かつ",meaning:"tie together",exampleWords:["総括 (そうかつ)","一括 (いっかつ)"]},{kanji:"摂",reading:"せつ",meaning:"take in",exampleWords:["摂取 (せっしゅ)","摂る (とる)"]},{kanji:"唆",reading:"さ/そそのか",meaning:"tempt",exampleWords:["示唆 (しさ)","唆す (そそのかす)"]},{kanji:"遡",reading:"そ/さかのぼ",meaning:"go back",exampleWords:["遡る (さかのぼる)","遡及 (そきゅう)"]},{kanji:"寡",reading:"か",meaning:"few",exampleWords:["寡黙 (かもく)","寡占 (かせん)"]},{kanji:"弊",reading:"へい",meaning:"bad habit",exampleWords:["弊害 (へいがい)","弊社 (へいしゃ)"]},{kanji:"拙",reading:"せつ/つたな",meaning:"clumsy",exampleWords:["拙い (つたない)","拙者 (せっしゃ)"]},{kanji:"崇",reading:"すう/あが",meaning:"adore",exampleWords:["崇拝 (すうはい)","崇める (あがめる)"]},{kanji:"緻",reading:"ち",meaning:"fine/dense",exampleWords:["精緻 (せいち)","緻密 (ちみつ)"]},{kanji:"醸",reading:"じょう/かも",meaning:"brew",exampleWords:["醸造 (じょうぞう)","醸し出す (かもしだす)"]},{kanji:"瞭",reading:"りょう",meaning:"clear",exampleWords:["明瞭 (めいりょう)","瞭然 (りょうぜん)"]},{kanji:"唆",reading:"さ/そそのか",meaning:"tempt",exampleWords:["示唆 (しさ)","唆す (そそのかす)"]},{kanji:"遡",reading:"そ/さかのぼ",meaning:"go back",exampleWords:["遡る (さかのぼる)","遡及 (そきゅう)"]},{kanji:"寡",reading:"か",meaning:"few",exampleWords:["寡黙 (かもく)","寡占 (かせん)"]},{kanji:"弊",reading:"へい",meaning:"bad habit",exampleWords:["弊害 (へいがい)","弊社 (へいしゃ)"]},{kanji:"拙",reading:"せつ/つたな",meaning:"clumsy",exampleWords:["拙い (つたない)","拙者 (せっしゃ)"]},{kanji:"崇",reading:"すう/あが",meaning:"adore",exampleWords:["崇拝 (すうはい)","崇める (あがめる)"]},{kanji:"緻",reading:"ち",meaning:"fine/dense",exampleWords:["精緻 (せいち)","緻密 (ちみつ)"]},{kanji:"醸",reading:"じょう/かも",meaning:"brew",exampleWords:["醸造 (じょうぞう)","醸し出す (かもしだす)"]},{kanji:"瞭",reading:"りょう",meaning:"clear",exampleWords:["明瞭 (めいりょう)","瞭然 (りょうぜん)"]},{kanji:"唆",reading:"さ/そそのか",meaning:"tempt",exampleWords:["示唆 (しさ)","唆す (そそのかす)"]},{kanji:"遡",reading:"そ/さかのぼ",meaning:"go back",exampleWords:["遡る (さかのぼる)","遡及 (そきゅう)"]},{kanji:"寡",reading:"か",meaning:"few",exampleWords:["寡黙 (かもく)","寡占 (かせん)"]},{kanji:"弊",reading:"へい",meaning:"bad habit",exampleWords:["弊害 (へいがい)","弊社 (へいしゃ)"]},{kanji:"拙",reading:"せつ/つたな",meaning:"clumsy",exampleWords:["拙い (つたない)","拙者 (せっしゃ)"]},{kanji:"崇",reading:"すう/あが",meaning:"adore",exampleWords:["崇拝 (すうはい)","崇める (あがめる)"]},{kanji:"緻",reading:"ち",meaning:"fine/dense",exampleWords:["精緻 (せいち)","緻密 (ちみつ)"]},{kanji:"醸",reading:"じょう/かも",meaning:"brew",exampleWords:["醸造 (じょうぞう)","醸し出す (かもしだす)"]},{kanji:"瞭",reading:"りょう",meaning:"clear",exampleWords:["明瞭 (めいりょう)","瞭然 (りょうぜん)"]}]},xS=({onGoBack:c})=>{const[e,n]=fn.useState(null),[a,r]=fn.useState(null),l=()=>Te.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6",children:Object.keys(yh).map(d=>Te.jsxs("div",{onClick:()=>n(d),className:"flex flex-col items-center justify-center p-8 bg-blue-100 rounded-2xl shadow-lg cursor-pointer hover:bg-blue-200 transition-colors",children:[Te.jsxs("h2",{className:"text-5xl font-bold text-blue-800",children:["JLPT ",d.toUpperCase()]}),Te.jsxs("p",{className:"mt-2 text-xl text-blue-600",children:[yh[d].length," Kanji"]})]},d))}),u=({level:d})=>{const p=yh[d];return Te.jsxs("div",{className:"flex flex-col items-center justify-center w-full p-6",children:[Te.jsx("button",{onClick:()=>{n(null),r(null)},className:"mb-4 text-blue-600 hover:text-blue-800 self-start",children:"← Back to Levels"}),Te.jsxs("h2",{className:"text-4xl font-bold text-blue-900 mb-6",children:["JLPT ",d.toUpperCase()," Kanji"]}),Te.jsx("div",{className:"grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-4 w-full",children:p.map((g,_)=>Te.jsx("div",{onClick:()=>r(g),className:"flex items-center justify-center p-2 bg-blue-100 rounded-lg shadow-md cursor-pointer aspect-square hover:bg-blue-200 transition-colors",children:Te.jsx("span",{className:"text-4xl sm:text-5xl font-bold text-blue-900",children:g.kanji})},_))})]})},h=({kanji:d})=>Te.jsxs("div",{className:"flex flex-col items-center justify-center w-full p-6 text-center",children:[Te.jsx("button",{onClick:()=>r(null),className:"mb-4 text-blue-600 hover:text-blue-800 self-start",children:"← Back to Kanji Grid"}),Te.jsxs("div",{className:"bg-blue-100 p-8 rounded-2xl shadow-lg w-full max-w-lg",children:[Te.jsx("div",{className:"text-9xl sm:text-[12rem] font-bold text-blue-900 drop-shadow-md",children:d.kanji}),Te.jsxs("p",{className:"mt-4 text-3xl sm:text-4xl font-bold text-blue-700",children:["Reading: ",d.reading]}),Te.jsxs("p",{className:"mt-2 text-xl sm:text-2xl text-blue-600",children:["Meaning: ",d.meaning]}),Te.jsxs("div",{className:"mt-6 text-left",children:[Te.jsx("h3",{className:"text-lg font-semibold text-blue-800",children:"Example Words:"}),Te.jsx("ul",{className:"list-disc list-inside mt-2 text-blue-600",children:d.exampleWords.map((p,g)=>Te.jsx("li",{children:p},g))})]})]})]});return Te.jsxs("div",{className:"flex flex-col items-center justify-center h-full p-6 font-['Inter']",children:[Te.jsx(nu,{title:"Kanji Guide",onGoBack:c}),Te.jsxs("div",{className:"flex-grow flex flex-col items-center justify-center w-full",children:[!e&&Te.jsx(l,{}),e&&!a&&Te.jsx(u,{level:e}),a&&Te.jsx(h,{kanji:a})]})]})},yS=KanjiOverview,SS=({onGoBack:c})=>{const[e,n]=fn.useState(0),[a,r]=fn.useState(0),[l,u]=fn.useState(null),[h,d]=fn.useState(!1),[p,g]=fn.useState(!1),_=[{japanese:"ありがとう",english:"Thank you"},{japanese:"はい",english:"Yes"},{japanese:"いいえ",english:"No"},{japanese:"おはよう",english:"Good morning"},{japanese:"こんにちは",english:"Hello"},{japanese:"おやすみ",english:"Good night"}],v=_[a],S=()=>{const T=[..._],A=v.english;return[...T.filter(P=>P.english!==A).sort(()=>.5-Math.random()).slice(0,3).map(P=>P.english),A].sort(()=>.5-Math.random())},[M,E]=fn.useState(S()),x=T=>{u(T),T===v.english?(d(!0),n(e+1)):g(!0)},y=()=>{d(!1),g(!1),u(null),r((a+1)%_.length),E(S())};return Te.jsxs("div",{className:"flex flex-col items-center justify-center p-6 h-full font-['Inter']",children:[Te.jsx(nu,{title:"Vocabulary Quiz",onGoBack:c}),Te.jsxs("div",{className:"flex-grow flex flex-col items-center justify-center text-center w-full max-w-2xl",children:[Te.jsx("div",{className:"text-5xl sm:text-7xl font-bold text-blue-800 mb-8",children:v.japanese}),Te.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 w-full",children:M.map((T,A)=>Te.jsx("button",{onClick:()=>x(T),disabled:h||p,className:`p-4 rounded-xl border-2 text-lg sm:text-xl font-medium transition-all duration-300 transform hover:scale-105
                            ${l===T&&h?"bg-green-500 text-white border-green-500":""}
                            ${l===T&&p?"bg-red-500 text-white border-red-500":""}
                            ${l?"":"bg-gray-100 border-gray-300 hover:bg-gray-200"}
                            `,children:T},A))}),(h||p)&&Te.jsx("button",{onClick:y,className:"mt-8 px-8 py-3 bg-blue-600 text-white font-bold rounded-full text-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105",children:"Next Word"})]})]})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vd="165",MS=0,hv=1,ES=2,t_=1,n_=2,fa=3,Ja=0,kn=1,ha=2,Za=0,Or=1,dv=2,pv=3,mv=4,bS=5,Rs=100,TS=101,AS=102,wS=103,RS=104,CS=200,DS=201,NS=202,US=203,ld=204,cd=205,LS=206,OS=207,PS=208,zS=209,BS=210,IS=211,FS=212,HS=213,GS=214,kS=0,VS=1,jS=2,Xc=3,WS=4,qS=5,XS=6,YS=7,i_=0,KS=1,ZS=2,Qa=0,QS=1,JS=2,$S=3,eM=4,tM=5,nM=6,iM=7,a_=300,Br=301,Ir=302,ud=303,fd=304,iu=306,hd=1e3,Ns=1001,dd=1002,hi=1003,aM=1004,_c=1005,Mi=1006,Sh=1007,Us=1008,$a=1009,sM=1010,rM=1011,Yc=1012,s_=1013,Fr=1014,Ka=1015,au=1016,r_=1017,o_=1018,Hr=1020,oM=35902,lM=1021,cM=1022,zi=1023,uM=1024,fM=1025,Pr=1026,Gr=1027,hM=1028,l_=1029,dM=1030,c_=1031,u_=1033,Mh=33776,Eh=33777,bh=33778,Th=33779,gv=35840,vv=35841,_v=35842,xv=35843,yv=36196,Sv=37492,Mv=37496,Ev=37808,bv=37809,Tv=37810,Av=37811,wv=37812,Rv=37813,Cv=37814,Dv=37815,Nv=37816,Uv=37817,Lv=37818,Ov=37819,Pv=37820,zv=37821,Ah=36492,Bv=36494,Iv=36495,pM=36283,Fv=36284,Hv=36285,Gv=36286,mM=3200,gM=3201,f_=0,vM=1,Ya="",Li="srgb",ts="srgb-linear",_d="display-p3",su="display-p3-linear",Kc="linear",kt="srgb",Zc="rec709",Qc="p3",pr=7680,kv=519,_M=512,xM=513,yM=514,h_=515,SM=516,MM=517,EM=518,bM=519,Vv=35044,jv="300 es",da=2e3,Jc=2001;class Vr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(n)===-1&&a[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const a=this._listeners;return a[e]!==void 0&&a[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const l=r.indexOf(n);l!==-1&&r.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const a=this._listeners[e.type];if(a!==void 0){e.target=this;const r=a.slice(0);for(let l=0,u=r.length;l<u;l++)r[l].call(this,e);e.target=null}}}const Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wh=Math.PI/180,pd=180/Math.PI;function sl(){const c=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Cn[c&255]+Cn[c>>8&255]+Cn[c>>16&255]+Cn[c>>24&255]+"-"+Cn[e&255]+Cn[e>>8&255]+"-"+Cn[e>>16&15|64]+Cn[e>>24&255]+"-"+Cn[n&63|128]+Cn[n>>8&255]+"-"+Cn[n>>16&255]+Cn[n>>24&255]+Cn[a&255]+Cn[a>>8&255]+Cn[a>>16&255]+Cn[a>>24&255]).toLowerCase()}function Gn(c,e,n){return Math.max(e,Math.min(n,c))}function TM(c,e){return(c%e+e)%e}function Rh(c,e,n){return(1-n)*c+n*e}function qo(c,e){switch(e.constructor){case Float32Array:return c;case Uint32Array:return c/4294967295;case Uint16Array:return c/65535;case Uint8Array:return c/255;case Int32Array:return Math.max(c/2147483647,-1);case Int16Array:return Math.max(c/32767,-1);case Int8Array:return Math.max(c/127,-1);default:throw new Error("Invalid component type.")}}function Fn(c,e){switch(e.constructor){case Float32Array:return c;case Uint32Array:return Math.round(c*4294967295);case Uint16Array:return Math.round(c*65535);case Uint8Array:return Math.round(c*255);case Int32Array:return Math.round(c*2147483647);case Int16Array:return Math.round(c*32767);case Int8Array:return Math.round(c*127);default:throw new Error("Invalid component type.")}}class Mt{constructor(e=0,n=0){Mt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,a=this.y,r=e.elements;return this.x=r[0]*n+r[3]*a+r[6],this.y=r[1]*n+r[4]*a+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Math.max(e,Math.min(n,a)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(Gn(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y;return n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const a=Math.cos(n),r=Math.sin(n),l=this.x-e.x,u=this.y-e.y;return this.x=l*a-u*r+e.x,this.y=l*r+u*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class lt{constructor(e,n,a,r,l,u,h,d,p){lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,a,r,l,u,h,d,p)}set(e,n,a,r,l,u,h,d,p){const g=this.elements;return g[0]=e,g[1]=r,g[2]=h,g[3]=n,g[4]=l,g[5]=d,g[6]=a,g[7]=u,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(e,n,a){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,r=n.elements,l=this.elements,u=a[0],h=a[3],d=a[6],p=a[1],g=a[4],_=a[7],v=a[2],S=a[5],M=a[8],E=r[0],x=r[3],y=r[6],T=r[1],A=r[4],D=r[7],I=r[2],P=r[5],z=r[8];return l[0]=u*E+h*T+d*I,l[3]=u*x+h*A+d*P,l[6]=u*y+h*D+d*z,l[1]=p*E+g*T+_*I,l[4]=p*x+g*A+_*P,l[7]=p*y+g*D+_*z,l[2]=v*E+S*T+M*I,l[5]=v*x+S*A+M*P,l[8]=v*y+S*D+M*z,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[1],r=e[2],l=e[3],u=e[4],h=e[5],d=e[6],p=e[7],g=e[8];return n*u*g-n*h*p-a*l*g+a*h*d+r*l*p-r*u*d}invert(){const e=this.elements,n=e[0],a=e[1],r=e[2],l=e[3],u=e[4],h=e[5],d=e[6],p=e[7],g=e[8],_=g*u-h*p,v=h*d-g*l,S=p*l-u*d,M=n*_+a*v+r*S;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/M;return e[0]=_*E,e[1]=(r*p-g*a)*E,e[2]=(h*a-r*u)*E,e[3]=v*E,e[4]=(g*n-r*d)*E,e[5]=(r*l-h*n)*E,e[6]=S*E,e[7]=(a*d-p*n)*E,e[8]=(u*n-a*l)*E,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,a,r,l,u,h){const d=Math.cos(l),p=Math.sin(l);return this.set(a*d,a*p,-a*(d*u+p*h)+u+e,-r*p,r*d,-r*(-p*u+d*h)+h+n,0,0,1),this}scale(e,n){return this.premultiply(Ch.makeScale(e,n)),this}rotate(e){return this.premultiply(Ch.makeRotation(-e)),this}translate(e,n){return this.premultiply(Ch.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,a=e.elements;for(let r=0;r<9;r++)if(n[r]!==a[r])return!1;return!0}fromArray(e,n=0){for(let a=0;a<9;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ch=new lt;function d_(c){for(let e=c.length-1;e>=0;--e)if(c[e]>=65535)return!0;return!1}function $c(c){return document.createElementNS("http://www.w3.org/1999/xhtml",c)}function AM(){const c=$c("canvas");return c.style.display="block",c}const Wv={};function p_(c){c in Wv||(Wv[c]=!0,console.warn(c))}function wM(c,e,n){return new Promise(function(a,r){function l(){switch(c.clientWaitSync(e,c.SYNC_FLUSH_COMMANDS_BIT,0)){case c.WAIT_FAILED:r();break;case c.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:a()}}setTimeout(l,n)})}const qv=new lt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Xv=new lt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),xc={[ts]:{transfer:Kc,primaries:Zc,toReference:c=>c,fromReference:c=>c},[Li]:{transfer:kt,primaries:Zc,toReference:c=>c.convertSRGBToLinear(),fromReference:c=>c.convertLinearToSRGB()},[su]:{transfer:Kc,primaries:Qc,toReference:c=>c.applyMatrix3(Xv),fromReference:c=>c.applyMatrix3(qv)},[_d]:{transfer:kt,primaries:Qc,toReference:c=>c.convertSRGBToLinear().applyMatrix3(Xv),fromReference:c=>c.applyMatrix3(qv).convertLinearToSRGB()}},RM=new Set([ts,su]),Ut={enabled:!0,_workingColorSpace:ts,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(c){if(!RM.has(c))throw new Error(`Unsupported working color space, "${c}".`);this._workingColorSpace=c},convert:function(c,e,n){if(this.enabled===!1||e===n||!e||!n)return c;const a=xc[e].toReference,r=xc[n].fromReference;return r(a(c))},fromWorkingColorSpace:function(c,e){return this.convert(c,this._workingColorSpace,e)},toWorkingColorSpace:function(c,e){return this.convert(c,e,this._workingColorSpace)},getPrimaries:function(c){return xc[c].primaries},getTransfer:function(c){return c===Ya?Kc:xc[c].transfer}};function zr(c){return c<.04045?c*.0773993808:Math.pow(c*.9478672986+.0521327014,2.4)}function Dh(c){return c<.0031308?c*12.92:1.055*Math.pow(c,.41666)-.055}let mr;class CM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{mr===void 0&&(mr=$c("canvas")),mr.width=e.width,mr.height=e.height;const a=mr.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),n=mr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=$c("canvas");n.width=e.width,n.height=e.height;const a=n.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const r=a.getImageData(0,0,e.width,e.height),l=r.data;for(let u=0;u<l.length;u++)l[u]=zr(l[u]/255)*255;return a.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(zr(n[a]/255)*255):n[a]=zr(n[a]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let DM=0;class m_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:DM++}),this.uuid=sl(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},r=this.data;if(r!==null){let l;if(Array.isArray(r)){l=[];for(let u=0,h=r.length;u<h;u++)r[u].isDataTexture?l.push(Nh(r[u].image)):l.push(Nh(r[u]))}else l=Nh(r);a.url=l}return n||(e.images[this.uuid]=a),a}}function Nh(c){return typeof HTMLImageElement<"u"&&c instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&c instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&c instanceof ImageBitmap?CM.getDataURL(c):c.data?{data:Array.from(c.data),width:c.width,height:c.height,type:c.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let NM=0;class Vn extends Vr{constructor(e=Vn.DEFAULT_IMAGE,n=Vn.DEFAULT_MAPPING,a=Ns,r=Ns,l=Mi,u=Us,h=zi,d=$a,p=Vn.DEFAULT_ANISOTROPY,g=Ya){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:NM++}),this.uuid=sl(),this.name="",this.source=new m_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=r,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=d,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==a_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hd:e.x=e.x-Math.floor(e.x);break;case Ns:e.x=e.x<0?0:1;break;case dd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hd:e.y=e.y-Math.floor(e.y);break;case Ns:e.y=e.y<0?0:1;break;case dd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=a_;Vn.DEFAULT_ANISOTROPY=1;class _n{constructor(e=0,n=0,a=0,r=1){_n.prototype.isVector4=!0,this.x=e,this.y=n,this.z=a,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,a,r){return this.x=e,this.y=n,this.z=a,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,a=this.y,r=this.z,l=this.w,u=e.elements;return this.x=u[0]*n+u[4]*a+u[8]*r+u[12]*l,this.y=u[1]*n+u[5]*a+u[9]*r+u[13]*l,this.z=u[2]*n+u[6]*a+u[10]*r+u[14]*l,this.w=u[3]*n+u[7]*a+u[11]*r+u[15]*l,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,a,r,l;const d=e.elements,p=d[0],g=d[4],_=d[8],v=d[1],S=d[5],M=d[9],E=d[2],x=d[6],y=d[10];if(Math.abs(g-v)<.01&&Math.abs(_-E)<.01&&Math.abs(M-x)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+E)<.1&&Math.abs(M+x)<.1&&Math.abs(p+S+y-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const A=(p+1)/2,D=(S+1)/2,I=(y+1)/2,P=(g+v)/4,z=(_+E)/4,V=(M+x)/4;return A>D&&A>I?A<.01?(a=0,r=.707106781,l=.707106781):(a=Math.sqrt(A),r=P/a,l=z/a):D>I?D<.01?(a=.707106781,r=0,l=.707106781):(r=Math.sqrt(D),a=P/r,l=V/r):I<.01?(a=.707106781,r=.707106781,l=0):(l=Math.sqrt(I),a=z/l,r=V/l),this.set(a,r,l,n),this}let T=Math.sqrt((x-M)*(x-M)+(_-E)*(_-E)+(v-g)*(v-g));return Math.abs(T)<.001&&(T=1),this.x=(x-M)/T,this.y=(_-E)/T,this.z=(v-g)/T,this.w=Math.acos((p+S+y-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Math.max(e,Math.min(n,a)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this.w=e.w+(n.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class UM extends Vr{constructor(e=1,n=1,a={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new _n(0,0,e,n),this.scissorTest=!1,this.viewport=new _n(0,0,e,n);const r={width:e,height:n,depth:1};a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},a);const l=new Vn(r,a.mapping,a.wrapS,a.wrapT,a.magFilter,a.minFilter,a.format,a.type,a.anisotropy,a.colorSpace);l.flipY=!1,l.generateMipmaps=a.generateMipmaps,l.internalFormat=a.internalFormat,this.textures=[];const u=a.count;for(let h=0;h<u;h++)this.textures[h]=l.clone(),this.textures[h].isRenderTargetTexture=!0;this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this.depthTexture=a.depthTexture,this.samples=a.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,a=1){if(this.width!==e||this.height!==n||this.depth!==a){this.width=e,this.height=n,this.depth=a;for(let r=0,l=this.textures.length;r<l;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=a;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let a=0,r=e.textures.length;a<r;a++)this.textures[a]=e.textures[a].clone(),this.textures[a].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new m_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ls extends UM{constructor(e=1,n=1,a={}){super(e,n,a),this.isWebGLRenderTarget=!0}}class g_ extends Vn{constructor(e=null,n=1,a=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:a,depth:r},this.magFilter=hi,this.minFilter=hi,this.wrapR=Ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class LM extends Vn{constructor(e=null,n=1,a=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:a,depth:r},this.magFilter=hi,this.minFilter=hi,this.wrapR=Ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let rl=class{constructor(e=0,n=0,a=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=a,this._w=r}static slerpFlat(e,n,a,r,l,u,h){let d=a[r+0],p=a[r+1],g=a[r+2],_=a[r+3];const v=l[u+0],S=l[u+1],M=l[u+2],E=l[u+3];if(h===0){e[n+0]=d,e[n+1]=p,e[n+2]=g,e[n+3]=_;return}if(h===1){e[n+0]=v,e[n+1]=S,e[n+2]=M,e[n+3]=E;return}if(_!==E||d!==v||p!==S||g!==M){let x=1-h;const y=d*v+p*S+g*M+_*E,T=y>=0?1:-1,A=1-y*y;if(A>Number.EPSILON){const I=Math.sqrt(A),P=Math.atan2(I,y*T);x=Math.sin(x*P)/I,h=Math.sin(h*P)/I}const D=h*T;if(d=d*x+v*D,p=p*x+S*D,g=g*x+M*D,_=_*x+E*D,x===1-h){const I=1/Math.sqrt(d*d+p*p+g*g+_*_);d*=I,p*=I,g*=I,_*=I}}e[n]=d,e[n+1]=p,e[n+2]=g,e[n+3]=_}static multiplyQuaternionsFlat(e,n,a,r,l,u){const h=a[r],d=a[r+1],p=a[r+2],g=a[r+3],_=l[u],v=l[u+1],S=l[u+2],M=l[u+3];return e[n]=h*M+g*_+d*S-p*v,e[n+1]=d*M+g*v+p*_-h*S,e[n+2]=p*M+g*S+h*v-d*_,e[n+3]=g*M-h*_-d*v-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,a,r){return this._x=e,this._y=n,this._z=a,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const a=e._x,r=e._y,l=e._z,u=e._order,h=Math.cos,d=Math.sin,p=h(a/2),g=h(r/2),_=h(l/2),v=d(a/2),S=d(r/2),M=d(l/2);switch(u){case"XYZ":this._x=v*g*_+p*S*M,this._y=p*S*_-v*g*M,this._z=p*g*M+v*S*_,this._w=p*g*_-v*S*M;break;case"YXZ":this._x=v*g*_+p*S*M,this._y=p*S*_-v*g*M,this._z=p*g*M-v*S*_,this._w=p*g*_+v*S*M;break;case"ZXY":this._x=v*g*_-p*S*M,this._y=p*S*_+v*g*M,this._z=p*g*M+v*S*_,this._w=p*g*_-v*S*M;break;case"ZYX":this._x=v*g*_-p*S*M,this._y=p*S*_+v*g*M,this._z=p*g*M-v*S*_,this._w=p*g*_+v*S*M;break;case"YZX":this._x=v*g*_+p*S*M,this._y=p*S*_+v*g*M,this._z=p*g*M-v*S*_,this._w=p*g*_-v*S*M;break;case"XZY":this._x=v*g*_-p*S*M,this._y=p*S*_-v*g*M,this._z=p*g*M+v*S*_,this._w=p*g*_+v*S*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const a=n/2,r=Math.sin(a);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,a=n[0],r=n[4],l=n[8],u=n[1],h=n[5],d=n[9],p=n[2],g=n[6],_=n[10],v=a+h+_;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(g-d)*S,this._y=(l-p)*S,this._z=(u-r)*S}else if(a>h&&a>_){const S=2*Math.sqrt(1+a-h-_);this._w=(g-d)/S,this._x=.25*S,this._y=(r+u)/S,this._z=(l+p)/S}else if(h>_){const S=2*Math.sqrt(1+h-a-_);this._w=(l-p)/S,this._x=(r+u)/S,this._y=.25*S,this._z=(d+g)/S}else{const S=2*Math.sqrt(1+_-a-h);this._w=(u-r)/S,this._x=(l+p)/S,this._y=(d+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let a=e.dot(n)+1;return a<Number.EPSILON?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Gn(this.dot(e),-1,1)))}rotateTowards(e,n){const a=this.angleTo(e);if(a===0)return this;const r=Math.min(1,n/a);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const a=e._x,r=e._y,l=e._z,u=e._w,h=n._x,d=n._y,p=n._z,g=n._w;return this._x=a*g+u*h+r*p-l*d,this._y=r*g+u*d+l*h-a*p,this._z=l*g+u*p+a*d-r*h,this._w=u*g-a*h-r*d-l*p,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const a=this._x,r=this._y,l=this._z,u=this._w;let h=u*e._w+a*e._x+r*e._y+l*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=u,this._x=a,this._y=r,this._z=l,this;const d=1-h*h;if(d<=Number.EPSILON){const S=1-n;return this._w=S*u+n*this._w,this._x=S*a+n*this._x,this._y=S*r+n*this._y,this._z=S*l+n*this._z,this.normalize(),this}const p=Math.sqrt(d),g=Math.atan2(p,h),_=Math.sin((1-n)*g)/p,v=Math.sin(n*g)/p;return this._w=u*_+this._w*v,this._x=a*_+this._x*v,this._y=r*_+this._y*v,this._z=l*_+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,n,a){return this.copy(e).slerp(n,a)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),r=Math.sqrt(1-a),l=Math.sqrt(a);return this.set(r*Math.sin(e),r*Math.cos(e),l*Math.sin(n),l*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class ue{constructor(e=0,n=0,a=0){ue.prototype.isVector3=!0,this.x=e,this.y=n,this.z=a}set(e,n,a){return a===void 0&&(a=this.z),this.x=e,this.y=n,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Yv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Yv.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,a=this.y,r=this.z,l=e.elements;return this.x=l[0]*n+l[3]*a+l[6]*r,this.y=l[1]*n+l[4]*a+l[7]*r,this.z=l[2]*n+l[5]*a+l[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,a=this.y,r=this.z,l=e.elements,u=1/(l[3]*n+l[7]*a+l[11]*r+l[15]);return this.x=(l[0]*n+l[4]*a+l[8]*r+l[12])*u,this.y=(l[1]*n+l[5]*a+l[9]*r+l[13])*u,this.z=(l[2]*n+l[6]*a+l[10]*r+l[14])*u,this}applyQuaternion(e){const n=this.x,a=this.y,r=this.z,l=e.x,u=e.y,h=e.z,d=e.w,p=2*(u*r-h*a),g=2*(h*n-l*r),_=2*(l*a-u*n);return this.x=n+d*p+u*_-h*g,this.y=a+d*g+h*p-l*_,this.z=r+d*_+l*g-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,a=this.y,r=this.z,l=e.elements;return this.x=l[0]*n+l[4]*a+l[8]*r,this.y=l[1]*n+l[5]*a+l[9]*r,this.z=l[2]*n+l[6]*a+l[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Math.max(e,Math.min(n,a)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const a=e.x,r=e.y,l=e.z,u=n.x,h=n.y,d=n.z;return this.x=r*d-l*h,this.y=l*u-a*d,this.z=a*h-r*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const a=e.dot(this)/n;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return Uh.copy(this).projectOnVector(e),this.sub(Uh)}reflect(e){return this.sub(Uh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(Gn(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y,r=this.z-e.z;return n*n+a*a+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,a){const r=Math.sin(n)*e;return this.x=r*Math.sin(a),this.y=Math.cos(n)*e,this.z=r*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,a){return this.x=e*Math.sin(n),this.y=a,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=a,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(e),this.y=n,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Uh=new ue,Yv=new rl;class ol{constructor(e=new ue(1/0,1/0,1/0),n=new ue(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n+=3)this.expandByPoint(_i.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,a=e.count;n<a;n++)this.expandByPoint(_i.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const a=_i.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const a=e.geometry;if(a!==void 0){const l=a.getAttribute("position");if(n===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,h=l.count;u<h;u++)e.isMesh===!0?e.getVertexPosition(u,_i):_i.fromBufferAttribute(l,u),_i.applyMatrix4(e.matrixWorld),this.expandByPoint(_i);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yc.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),yc.copy(a.boundingBox)),yc.applyMatrix4(e.matrixWorld),this.union(yc)}const r=e.children;for(let l=0,u=r.length;l<u;l++)this.expandByObject(r[l],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,_i),_i.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,a;return e.normal.x>0?(n=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),n<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xo),Sc.subVectors(this.max,Xo),gr.subVectors(e.a,Xo),vr.subVectors(e.b,Xo),_r.subVectors(e.c,Xo),Ga.subVectors(vr,gr),ka.subVectors(_r,vr),xs.subVectors(gr,_r);let n=[0,-Ga.z,Ga.y,0,-ka.z,ka.y,0,-xs.z,xs.y,Ga.z,0,-Ga.x,ka.z,0,-ka.x,xs.z,0,-xs.x,-Ga.y,Ga.x,0,-ka.y,ka.x,0,-xs.y,xs.x,0];return!Lh(n,gr,vr,_r,Sc)||(n=[1,0,0,0,1,0,0,0,1],!Lh(n,gr,vr,_r,Sc))?!1:(Mc.crossVectors(Ga,ka),n=[Mc.x,Mc.y,Mc.z],Lh(n,gr,vr,_r,Sc))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_i).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_i).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ta[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ta[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ta[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ta[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ta[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ta[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ta[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ta[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ta),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ta=[new ue,new ue,new ue,new ue,new ue,new ue,new ue,new ue],_i=new ue,yc=new ol,gr=new ue,vr=new ue,_r=new ue,Ga=new ue,ka=new ue,xs=new ue,Xo=new ue,Sc=new ue,Mc=new ue,ys=new ue;function Lh(c,e,n,a,r){for(let l=0,u=c.length-3;l<=u;l+=3){ys.fromArray(c,l);const h=r.x*Math.abs(ys.x)+r.y*Math.abs(ys.y)+r.z*Math.abs(ys.z),d=e.dot(ys),p=n.dot(ys),g=a.dot(ys);if(Math.max(-Math.max(d,p,g),Math.min(d,p,g))>h)return!1}return!0}const OM=new ol,Yo=new ue,Oh=new ue;let xd=class{constructor(e=new ue,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const a=this.center;n!==void 0?a.copy(n):OM.setFromPoints(e).getCenter(a);let r=0;for(let l=0,u=e.length;l<u;l++)r=Math.max(r,a.distanceToSquared(e[l]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const a=this.center.distanceToSquared(e);return n.copy(e),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Yo.subVectors(e,this.center);const n=Yo.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),r=(a-this.radius)*.5;this.center.addScaledVector(Yo,r/a),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Oh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Yo.copy(e.center).add(Oh)),this.expandByPoint(Yo.copy(e.center).sub(Oh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}};const na=new ue,Ph=new ue,Ec=new ue,Va=new ue,zh=new ue,bc=new ue,Bh=new ue;let PM=class{constructor(e=new ue,n=new ue(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,na)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=na.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(na.copy(this.origin).addScaledVector(this.direction,n),na.distanceToSquared(e))}distanceSqToSegment(e,n,a,r){Ph.copy(e).add(n).multiplyScalar(.5),Ec.copy(n).sub(e).normalize(),Va.copy(this.origin).sub(Ph);const l=e.distanceTo(n)*.5,u=-this.direction.dot(Ec),h=Va.dot(this.direction),d=-Va.dot(Ec),p=Va.lengthSq(),g=Math.abs(1-u*u);let _,v,S,M;if(g>0)if(_=u*d-h,v=u*h-d,M=l*g,_>=0)if(v>=-M)if(v<=M){const E=1/g;_*=E,v*=E,S=_*(_+u*v+2*h)+v*(u*_+v+2*d)+p}else v=l,_=Math.max(0,-(u*v+h)),S=-_*_+v*(v+2*d)+p;else v=-l,_=Math.max(0,-(u*v+h)),S=-_*_+v*(v+2*d)+p;else v<=-M?(_=Math.max(0,-(-u*l+h)),v=_>0?-l:Math.min(Math.max(-l,-d),l),S=-_*_+v*(v+2*d)+p):v<=M?(_=0,v=Math.min(Math.max(-l,-d),l),S=v*(v+2*d)+p):(_=Math.max(0,-(u*l+h)),v=_>0?l:Math.min(Math.max(-l,-d),l),S=-_*_+v*(v+2*d)+p);else v=u>0?-l:l,_=Math.max(0,-(u*v+h)),S=-_*_+v*(v+2*d)+p;return a&&a.copy(this.origin).addScaledVector(this.direction,_),r&&r.copy(Ph).addScaledVector(Ec,v),S}intersectSphere(e,n){na.subVectors(e.center,this.origin);const a=na.dot(this.direction),r=na.dot(na)-a*a,l=e.radius*e.radius;if(r>l)return null;const u=Math.sqrt(l-r),h=a-u,d=a+u;return d<0?null:h<0?this.at(d,n):this.at(h,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/n;return a>=0?a:null}intersectPlane(e,n){const a=this.distanceToPlane(e);return a===null?null:this.at(a,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let a,r,l,u,h,d;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return p>=0?(a=(e.min.x-v.x)*p,r=(e.max.x-v.x)*p):(a=(e.max.x-v.x)*p,r=(e.min.x-v.x)*p),g>=0?(l=(e.min.y-v.y)*g,u=(e.max.y-v.y)*g):(l=(e.max.y-v.y)*g,u=(e.min.y-v.y)*g),a>u||l>r||((l>a||isNaN(a))&&(a=l),(u<r||isNaN(r))&&(r=u),_>=0?(h=(e.min.z-v.z)*_,d=(e.max.z-v.z)*_):(h=(e.max.z-v.z)*_,d=(e.min.z-v.z)*_),a>d||h>r)||((h>a||a!==a)&&(a=h),(d<r||r!==r)&&(r=d),r<0)?null:this.at(a>=0?a:r,n)}intersectsBox(e){return this.intersectBox(e,na)!==null}intersectTriangle(e,n,a,r,l){zh.subVectors(n,e),bc.subVectors(a,e),Bh.crossVectors(zh,bc);let u=this.direction.dot(Bh),h;if(u>0){if(r)return null;h=1}else if(u<0)h=-1,u=-u;else return null;Va.subVectors(this.origin,e);const d=h*this.direction.dot(bc.crossVectors(Va,bc));if(d<0)return null;const p=h*this.direction.dot(zh.cross(Va));if(p<0||d+p>u)return null;const g=-h*Va.dot(Bh);return g<0?null:this.at(g/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class $t{constructor(e,n,a,r,l,u,h,d,p,g,_,v,S,M,E,x){$t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,a,r,l,u,h,d,p,g,_,v,S,M,E,x)}set(e,n,a,r,l,u,h,d,p,g,_,v,S,M,E,x){const y=this.elements;return y[0]=e,y[4]=n,y[8]=a,y[12]=r,y[1]=l,y[5]=u,y[9]=h,y[13]=d,y[2]=p,y[6]=g,y[10]=_,y[14]=v,y[3]=S,y[7]=M,y[11]=E,y[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $t().fromArray(this.elements)}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(e){const n=this.elements,a=e.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,a){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(e,n,a){return this.set(e.x,n.x,a.x,0,e.y,n.y,a.y,0,e.z,n.z,a.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,a=e.elements,r=1/xr.setFromMatrixColumn(e,0).length(),l=1/xr.setFromMatrixColumn(e,1).length(),u=1/xr.setFromMatrixColumn(e,2).length();return n[0]=a[0]*r,n[1]=a[1]*r,n[2]=a[2]*r,n[3]=0,n[4]=a[4]*l,n[5]=a[5]*l,n[6]=a[6]*l,n[7]=0,n[8]=a[8]*u,n[9]=a[9]*u,n[10]=a[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,a=e.x,r=e.y,l=e.z,u=Math.cos(a),h=Math.sin(a),d=Math.cos(r),p=Math.sin(r),g=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const v=u*g,S=u*_,M=h*g,E=h*_;n[0]=d*g,n[4]=-d*_,n[8]=p,n[1]=S+M*p,n[5]=v-E*p,n[9]=-h*d,n[2]=E-v*p,n[6]=M+S*p,n[10]=u*d}else if(e.order==="YXZ"){const v=d*g,S=d*_,M=p*g,E=p*_;n[0]=v+E*h,n[4]=M*h-S,n[8]=u*p,n[1]=u*_,n[5]=u*g,n[9]=-h,n[2]=S*h-M,n[6]=E+v*h,n[10]=u*d}else if(e.order==="ZXY"){const v=d*g,S=d*_,M=p*g,E=p*_;n[0]=v-E*h,n[4]=-u*_,n[8]=M+S*h,n[1]=S+M*h,n[5]=u*g,n[9]=E-v*h,n[2]=-u*p,n[6]=h,n[10]=u*d}else if(e.order==="ZYX"){const v=u*g,S=u*_,M=h*g,E=h*_;n[0]=d*g,n[4]=M*p-S,n[8]=v*p+E,n[1]=d*_,n[5]=E*p+v,n[9]=S*p-M,n[2]=-p,n[6]=h*d,n[10]=u*d}else if(e.order==="YZX"){const v=u*d,S=u*p,M=h*d,E=h*p;n[0]=d*g,n[4]=E-v*_,n[8]=M*_+S,n[1]=_,n[5]=u*g,n[9]=-h*g,n[2]=-p*g,n[6]=S*_+M,n[10]=v-E*_}else if(e.order==="XZY"){const v=u*d,S=u*p,M=h*d,E=h*p;n[0]=d*g,n[4]=-_,n[8]=p*g,n[1]=v*_+E,n[5]=u*g,n[9]=S*_-M,n[2]=M*_-S,n[6]=h*g,n[10]=E*_+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zM,e,BM)}lookAt(e,n,a){const r=this.elements;return Jn.subVectors(e,n),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),ja.crossVectors(a,Jn),ja.lengthSq()===0&&(Math.abs(a.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),ja.crossVectors(a,Jn)),ja.normalize(),Tc.crossVectors(Jn,ja),r[0]=ja.x,r[4]=Tc.x,r[8]=Jn.x,r[1]=ja.y,r[5]=Tc.y,r[9]=Jn.y,r[2]=ja.z,r[6]=Tc.z,r[10]=Jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,r=n.elements,l=this.elements,u=a[0],h=a[4],d=a[8],p=a[12],g=a[1],_=a[5],v=a[9],S=a[13],M=a[2],E=a[6],x=a[10],y=a[14],T=a[3],A=a[7],D=a[11],I=a[15],P=r[0],z=r[4],V=r[8],U=r[12],w=r[1],F=r[5],ie=r[9],k=r[13],Q=r[2],Y=r[6],L=r[10],K=r[14],j=r[3],he=r[7],B=r[11],$=r[15];return l[0]=u*P+h*w+d*Q+p*j,l[4]=u*z+h*F+d*Y+p*he,l[8]=u*V+h*ie+d*L+p*B,l[12]=u*U+h*k+d*K+p*$,l[1]=g*P+_*w+v*Q+S*j,l[5]=g*z+_*F+v*Y+S*he,l[9]=g*V+_*ie+v*L+S*B,l[13]=g*U+_*k+v*K+S*$,l[2]=M*P+E*w+x*Q+y*j,l[6]=M*z+E*F+x*Y+y*he,l[10]=M*V+E*ie+x*L+y*B,l[14]=M*U+E*k+x*K+y*$,l[3]=T*P+A*w+D*Q+I*j,l[7]=T*z+A*F+D*Y+I*he,l[11]=T*V+A*ie+D*L+I*B,l[15]=T*U+A*k+D*K+I*$,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[4],r=e[8],l=e[12],u=e[1],h=e[5],d=e[9],p=e[13],g=e[2],_=e[6],v=e[10],S=e[14],M=e[3],E=e[7],x=e[11],y=e[15];return M*(+l*d*_-r*p*_-l*h*v+a*p*v+r*h*S-a*d*S)+E*(+n*d*S-n*p*v+l*u*v-r*u*S+r*p*g-l*d*g)+x*(+n*p*_-n*h*S-l*u*_+a*u*S+l*h*g-a*p*g)+y*(-r*h*g-n*d*_+n*h*v+r*u*_-a*u*v+a*d*g)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,a){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=a),this}invert(){const e=this.elements,n=e[0],a=e[1],r=e[2],l=e[3],u=e[4],h=e[5],d=e[6],p=e[7],g=e[8],_=e[9],v=e[10],S=e[11],M=e[12],E=e[13],x=e[14],y=e[15],T=_*x*p-E*v*p+E*d*S-h*x*S-_*d*y+h*v*y,A=M*v*p-g*x*p-M*d*S+u*x*S+g*d*y-u*v*y,D=g*E*p-M*_*p+M*h*S-u*E*S-g*h*y+u*_*y,I=M*_*d-g*E*d-M*h*v+u*E*v+g*h*x-u*_*x,P=n*T+a*A+r*D+l*I;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/P;return e[0]=T*z,e[1]=(E*v*l-_*x*l-E*r*S+a*x*S+_*r*y-a*v*y)*z,e[2]=(h*x*l-E*d*l+E*r*p-a*x*p-h*r*y+a*d*y)*z,e[3]=(_*d*l-h*v*l-_*r*p+a*v*p+h*r*S-a*d*S)*z,e[4]=A*z,e[5]=(g*x*l-M*v*l+M*r*S-n*x*S-g*r*y+n*v*y)*z,e[6]=(M*d*l-u*x*l-M*r*p+n*x*p+u*r*y-n*d*y)*z,e[7]=(u*v*l-g*d*l+g*r*p-n*v*p-u*r*S+n*d*S)*z,e[8]=D*z,e[9]=(M*_*l-g*E*l-M*a*S+n*E*S+g*a*y-n*_*y)*z,e[10]=(u*E*l-M*h*l+M*a*p-n*E*p-u*a*y+n*h*y)*z,e[11]=(g*h*l-u*_*l-g*a*p+n*_*p+u*a*S-n*h*S)*z,e[12]=I*z,e[13]=(g*E*r-M*_*r+M*a*v-n*E*v-g*a*x+n*_*x)*z,e[14]=(M*h*r-u*E*r-M*a*d+n*E*d+u*a*x-n*h*x)*z,e[15]=(u*_*r-g*h*r+g*a*d-n*_*d-u*a*v+n*h*v)*z,this}scale(e){const n=this.elements,a=e.x,r=e.y,l=e.z;return n[0]*=a,n[4]*=r,n[8]*=l,n[1]*=a,n[5]*=r,n[9]*=l,n[2]*=a,n[6]*=r,n[10]*=l,n[3]*=a,n[7]*=r,n[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,a,r))}makeTranslation(e,n,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const a=Math.cos(n),r=Math.sin(n),l=1-a,u=e.x,h=e.y,d=e.z,p=l*u,g=l*h;return this.set(p*u+a,p*h-r*d,p*d+r*h,0,p*h+r*d,g*h+a,g*d-r*u,0,p*d-r*h,g*d+r*u,l*d*d+a,0,0,0,0,1),this}makeScale(e,n,a){return this.set(e,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,n,a,r,l,u){return this.set(1,a,l,0,e,1,u,0,n,r,1,0,0,0,0,1),this}compose(e,n,a){const r=this.elements,l=n._x,u=n._y,h=n._z,d=n._w,p=l+l,g=u+u,_=h+h,v=l*p,S=l*g,M=l*_,E=u*g,x=u*_,y=h*_,T=d*p,A=d*g,D=d*_,I=a.x,P=a.y,z=a.z;return r[0]=(1-(E+y))*I,r[1]=(S+D)*I,r[2]=(M-A)*I,r[3]=0,r[4]=(S-D)*P,r[5]=(1-(v+y))*P,r[6]=(x+T)*P,r[7]=0,r[8]=(M+A)*z,r[9]=(x-T)*z,r[10]=(1-(v+E))*z,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,a){const r=this.elements;let l=xr.set(r[0],r[1],r[2]).length();const u=xr.set(r[4],r[5],r[6]).length(),h=xr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(l=-l),e.x=r[12],e.y=r[13],e.z=r[14],xi.copy(this);const p=1/l,g=1/u,_=1/h;return xi.elements[0]*=p,xi.elements[1]*=p,xi.elements[2]*=p,xi.elements[4]*=g,xi.elements[5]*=g,xi.elements[6]*=g,xi.elements[8]*=_,xi.elements[9]*=_,xi.elements[10]*=_,n.setFromRotationMatrix(xi),a.x=l,a.y=u,a.z=h,this}makePerspective(e,n,a,r,l,u,h=da){const d=this.elements,p=2*l/(n-e),g=2*l/(a-r),_=(n+e)/(n-e),v=(a+r)/(a-r);let S,M;if(h===da)S=-(u+l)/(u-l),M=-2*u*l/(u-l);else if(h===Jc)S=-u/(u-l),M=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return d[0]=p,d[4]=0,d[8]=_,d[12]=0,d[1]=0,d[5]=g,d[9]=v,d[13]=0,d[2]=0,d[6]=0,d[10]=S,d[14]=M,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,n,a,r,l,u,h=da){const d=this.elements,p=1/(n-e),g=1/(a-r),_=1/(u-l),v=(n+e)*p,S=(a+r)*g;let M,E;if(h===da)M=(u+l)*_,E=-2*_;else if(h===Jc)M=l*_,E=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return d[0]=2*p,d[4]=0,d[8]=0,d[12]=-v,d[1]=0,d[5]=2*g,d[9]=0,d[13]=-S,d[2]=0,d[6]=0,d[10]=E,d[14]=-M,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const n=this.elements,a=e.elements;for(let r=0;r<16;r++)if(n[r]!==a[r])return!1;return!0}fromArray(e,n=0){for(let a=0;a<16;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e[n+9]=a[9],e[n+10]=a[10],e[n+11]=a[11],e[n+12]=a[12],e[n+13]=a[13],e[n+14]=a[14],e[n+15]=a[15],e}}const xr=new ue,xi=new $t,zM=new ue(0,0,0),BM=new ue(1,1,1),ja=new ue,Tc=new ue,Jn=new ue,Kv=new $t,Zv=new rl;class Fi{constructor(e=0,n=0,a=0,r=Fi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=a,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,a,r=this._order){return this._x=e,this._y=n,this._z=a,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,a=!0){const r=e.elements,l=r[0],u=r[4],h=r[8],d=r[1],p=r[5],g=r[9],_=r[2],v=r[6],S=r[10];switch(n){case"XYZ":this._y=Math.asin(Gn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Gn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,S),this._z=Math.atan2(d,p)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(Gn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,S),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-Gn(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(Gn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(h,S));break;case"XZY":this._z=Math.asin(-Gn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(h,l)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,a){return Kv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Kv,n,a)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Zv.setFromEuler(this),this.setFromQuaternion(Zv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fi.DEFAULT_ORDER="XYZ";class v_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let IM=0;const Qv=new ue,yr=new rl,ia=new $t,Ac=new ue,Ko=new ue,FM=new ue,HM=new rl,Jv=new ue(1,0,0),$v=new ue(0,1,0),e0=new ue(0,0,1),t0={type:"added"},GM={type:"removed"},Sr={type:"childadded",child:null},Ih={type:"childremoved",child:null};class Nn extends Vr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:IM++}),this.uuid=sl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nn.DEFAULT_UP.clone();const e=new ue,n=new Fi,a=new rl,r=new ue(1,1,1);function l(){a.setFromEuler(n,!1)}function u(){n.setFromQuaternion(a,void 0,!1)}n._onChange(l),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new $t},normalMatrix:{value:new lt}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=Nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new v_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return yr.setFromAxisAngle(e,n),this.quaternion.multiply(yr),this}rotateOnWorldAxis(e,n){return yr.setFromAxisAngle(e,n),this.quaternion.premultiply(yr),this}rotateX(e){return this.rotateOnAxis(Jv,e)}rotateY(e){return this.rotateOnAxis($v,e)}rotateZ(e){return this.rotateOnAxis(e0,e)}translateOnAxis(e,n){return Qv.copy(e).applyQuaternion(this.quaternion),this.position.add(Qv.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Jv,e)}translateY(e){return this.translateOnAxis($v,e)}translateZ(e){return this.translateOnAxis(e0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ia.copy(this.matrixWorld).invert())}lookAt(e,n,a){e.isVector3?Ac.copy(e):Ac.set(e,n,a);const r=this.parent;this.updateWorldMatrix(!0,!1),Ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ia.lookAt(Ko,Ac,this.up):ia.lookAt(Ac,Ko,this.up),this.quaternion.setFromRotationMatrix(ia),r&&(ia.extractRotation(r.matrixWorld),yr.setFromRotationMatrix(ia),this.quaternion.premultiply(yr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(t0),Sr.child=e,this.dispatchEvent(Sr),Sr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(GM),Ih.child=e,this.dispatchEvent(Ih),Ih.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ia.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ia.multiply(e.parent.matrixWorld)),e.applyMatrix4(ia),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(t0),Sr.child=e,this.dispatchEvent(Sr),Sr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let a=0,r=this.children.length;a<r;a++){const u=this.children[a].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,a=[]){this[e]===n&&a.push(this);const r=this.children;for(let l=0,u=r.length;l<u;l++)r[l].getObjectsByProperty(e,n,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ko,e,FM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ko,HM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let a=0,r=n.length;a<r;a++){const l=n[a];(l.matrixWorldAutoUpdate===!0||e===!0)&&l.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const a=this.parent;if(e===!0&&a!==null&&a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let l=0,u=r.length;l<u;l++){const h=r[l];h.matrixWorldAutoUpdate===!0&&h.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",a={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function l(h,d){return h[d.uuid]===void 0&&(h[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=l(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const d=h.shapes;if(Array.isArray(d))for(let p=0,g=d.length;p<g;p++){const _=d[p];l(e.shapes,_)}else l(e.shapes,d)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let d=0,p=this.material.length;d<p;d++)h.push(l(e.materials,this.material[d]));r.material=h}else r.material=l(e.materials,this.material);if(this.children.length>0){r.children=[];for(let h=0;h<this.children.length;h++)r.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let h=0;h<this.animations.length;h++){const d=this.animations[h];r.animations.push(l(e.animations,d))}}if(n){const h=u(e.geometries),d=u(e.materials),p=u(e.textures),g=u(e.images),_=u(e.shapes),v=u(e.skeletons),S=u(e.animations),M=u(e.nodes);h.length>0&&(a.geometries=h),d.length>0&&(a.materials=d),p.length>0&&(a.textures=p),g.length>0&&(a.images=g),_.length>0&&(a.shapes=_),v.length>0&&(a.skeletons=v),S.length>0&&(a.animations=S),M.length>0&&(a.nodes=M)}return a.object=r,a;function u(h){const d=[];for(const p in h){const g=h[p];delete g.metadata,d.push(g)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let a=0;a<e.children.length;a++){const r=e.children[a];this.add(r.clone())}return this}}Nn.DEFAULT_UP=new ue(0,1,0);Nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yi=new ue,aa=new ue,Fh=new ue,sa=new ue,Mr=new ue,Er=new ue,n0=new ue,Hh=new ue,Gh=new ue,kh=new ue;class Pi{constructor(e=new ue,n=new ue,a=new ue){this.a=e,this.b=n,this.c=a}static getNormal(e,n,a,r){r.subVectors(a,n),yi.subVectors(e,n),r.cross(yi);const l=r.lengthSq();return l>0?r.multiplyScalar(1/Math.sqrt(l)):r.set(0,0,0)}static getBarycoord(e,n,a,r,l){yi.subVectors(r,n),aa.subVectors(a,n),Fh.subVectors(e,n);const u=yi.dot(yi),h=yi.dot(aa),d=yi.dot(Fh),p=aa.dot(aa),g=aa.dot(Fh),_=u*p-h*h;if(_===0)return l.set(0,0,0),null;const v=1/_,S=(p*d-h*g)*v,M=(u*g-h*d)*v;return l.set(1-S-M,M,S)}static containsPoint(e,n,a,r){return this.getBarycoord(e,n,a,r,sa)===null?!1:sa.x>=0&&sa.y>=0&&sa.x+sa.y<=1}static getInterpolation(e,n,a,r,l,u,h,d){return this.getBarycoord(e,n,a,r,sa)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,sa.x),d.addScaledVector(u,sa.y),d.addScaledVector(h,sa.z),d)}static isFrontFacing(e,n,a,r){return yi.subVectors(a,n),aa.subVectors(e,n),yi.cross(aa).dot(r)<0}set(e,n,a){return this.a.copy(e),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(e,n,a,r){return this.a.copy(e[n]),this.b.copy(e[a]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,a,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yi.subVectors(this.c,this.b),aa.subVectors(this.a,this.b),yi.cross(aa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Pi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,a,r,l){return Pi.getInterpolation(e,this.a,this.b,this.c,n,a,r,l)}containsPoint(e){return Pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const a=this.a,r=this.b,l=this.c;let u,h;Mr.subVectors(r,a),Er.subVectors(l,a),Hh.subVectors(e,a);const d=Mr.dot(Hh),p=Er.dot(Hh);if(d<=0&&p<=0)return n.copy(a);Gh.subVectors(e,r);const g=Mr.dot(Gh),_=Er.dot(Gh);if(g>=0&&_<=g)return n.copy(r);const v=d*_-g*p;if(v<=0&&d>=0&&g<=0)return u=d/(d-g),n.copy(a).addScaledVector(Mr,u);kh.subVectors(e,l);const S=Mr.dot(kh),M=Er.dot(kh);if(M>=0&&S<=M)return n.copy(l);const E=S*p-d*M;if(E<=0&&p>=0&&M<=0)return h=p/(p-M),n.copy(a).addScaledVector(Er,h);const x=g*M-S*_;if(x<=0&&_-g>=0&&S-M>=0)return n0.subVectors(l,r),h=(_-g)/(_-g+(S-M)),n.copy(r).addScaledVector(n0,h);const y=1/(x+E+v);return u=E*y,h=v*y,n.copy(a).addScaledVector(Mr,u).addScaledVector(Er,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const __={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wa={h:0,s:0,l:0},wc={h:0,s:0,l:0};function Vh(c,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?c+(e-c)*6*n:n<1/2?e:n<2/3?c+(e-c)*6*(2/3-n):c}class At{constructor(e,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,a)}set(e,n,a){if(n===void 0&&a===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Li){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ut.toWorkingColorSpace(this,n),this}setRGB(e,n,a,r=Ut.workingColorSpace){return this.r=e,this.g=n,this.b=a,Ut.toWorkingColorSpace(this,r),this}setHSL(e,n,a,r=Ut.workingColorSpace){if(e=TM(e,1),n=Gn(n,0,1),a=Gn(a,0,1),n===0)this.r=this.g=this.b=a;else{const l=a<=.5?a*(1+n):a+n-a*n,u=2*a-l;this.r=Vh(u,l,e+1/3),this.g=Vh(u,l,e),this.b=Vh(u,l,e-1/3)}return Ut.toWorkingColorSpace(this,r),this}setStyle(e,n=Li){function a(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=r[1],h=r[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=r[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(l,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Li){const a=__[e.toLowerCase()];return a!==void 0?this.setHex(a,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zr(e.r),this.g=zr(e.g),this.b=zr(e.b),this}copyLinearToSRGB(e){return this.r=Dh(e.r),this.g=Dh(e.g),this.b=Dh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Li){return Ut.fromWorkingColorSpace(Dn.copy(this),e),Math.round(Gn(Dn.r*255,0,255))*65536+Math.round(Gn(Dn.g*255,0,255))*256+Math.round(Gn(Dn.b*255,0,255))}getHexString(e=Li){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ut.workingColorSpace){Ut.fromWorkingColorSpace(Dn.copy(this),n);const a=Dn.r,r=Dn.g,l=Dn.b,u=Math.max(a,r,l),h=Math.min(a,r,l);let d,p;const g=(h+u)/2;if(h===u)d=0,p=0;else{const _=u-h;switch(p=g<=.5?_/(u+h):_/(2-u-h),u){case a:d=(r-l)/_+(r<l?6:0);break;case r:d=(l-a)/_+2;break;case l:d=(a-r)/_+4;break}d/=6}return e.h=d,e.s=p,e.l=g,e}getRGB(e,n=Ut.workingColorSpace){return Ut.fromWorkingColorSpace(Dn.copy(this),n),e.r=Dn.r,e.g=Dn.g,e.b=Dn.b,e}getStyle(e=Li){Ut.fromWorkingColorSpace(Dn.copy(this),e);const n=Dn.r,a=Dn.g,r=Dn.b;return e!==Li?`color(${e} ${n.toFixed(3)} ${a.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(r*255)})`}offsetHSL(e,n,a){return this.getHSL(Wa),this.setHSL(Wa.h+e,Wa.s+n,Wa.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,a){return this.r=e.r+(n.r-e.r)*a,this.g=e.g+(n.g-e.g)*a,this.b=e.b+(n.b-e.b)*a,this}lerpHSL(e,n){this.getHSL(Wa),e.getHSL(wc);const a=Rh(Wa.h,wc.h,n),r=Rh(Wa.s,wc.s,n),l=Rh(Wa.l,wc.l,n);return this.setHSL(a,r,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,a=this.g,r=this.b,l=e.elements;return this.r=l[0]*n+l[3]*a+l[6]*r,this.g=l[1]*n+l[4]*a+l[7]*r,this.b=l[2]*n+l[5]*a+l[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dn=new At;At.NAMES=__;let kM=0,ll=class extends Vr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kM++}),this.uuid=sl(),this.name="",this.type="Material",this.blending=Or,this.side=Ja,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ld,this.blendDst=cd,this.blendEquation=Rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=Xc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pr,this.stencilZFail=pr,this.stencilZPass=pr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const a=e[n];if(a===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(a):r&&r.isVector3&&a&&a.isVector3?r.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const a={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Or&&(a.blending=this.blending),this.side!==Ja&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==ld&&(a.blendSrc=this.blendSrc),this.blendDst!==cd&&(a.blendDst=this.blendDst),this.blendEquation!==Rs&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Xc&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kv&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==pr&&(a.stencilFail=this.stencilFail),this.stencilZFail!==pr&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==pr&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function r(l){const u=[];for(const h in l){const d=l[h];delete d.metadata,u.push(d)}return u}if(n){const l=r(e.textures),u=r(e.images);l.length>0&&(a.textures=l),u.length>0&&(a.images=u)}return a}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let a=null;if(n!==null){const r=n.length;a=new Array(r);for(let l=0;l!==r;++l)a[l]=n[l].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};class x_ extends ll{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fi,this.combine=i_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const an=new ue,Rc=new Mt;class Bi{constructor(e,n,a=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=a,this.usage=Vv,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ka,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return p_("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,a){e*=this.itemSize,a*=n.itemSize;for(let r=0,l=this.itemSize;r<l;r++)this.array[e+r]=n.array[a+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)Rc.fromBufferAttribute(this,n),Rc.applyMatrix3(e),this.setXY(n,Rc.x,Rc.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)an.fromBufferAttribute(this,n),an.applyMatrix3(e),this.setXYZ(n,an.x,an.y,an.z);return this}applyMatrix4(e){for(let n=0,a=this.count;n<a;n++)an.fromBufferAttribute(this,n),an.applyMatrix4(e),this.setXYZ(n,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let n=0,a=this.count;n<a;n++)an.fromBufferAttribute(this,n),an.applyNormalMatrix(e),this.setXYZ(n,an.x,an.y,an.z);return this}transformDirection(e){for(let n=0,a=this.count;n<a;n++)an.fromBufferAttribute(this,n),an.transformDirection(e),this.setXYZ(n,an.x,an.y,an.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let a=this.array[e*this.itemSize+n];return this.normalized&&(a=qo(a,this.array)),a}setComponent(e,n,a){return this.normalized&&(a=Fn(a,this.array)),this.array[e*this.itemSize+n]=a,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=qo(n,this.array)),n}setX(e,n){return this.normalized&&(n=Fn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=qo(n,this.array)),n}setY(e,n){return this.normalized&&(n=Fn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=qo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Fn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=qo(n,this.array)),n}setW(e,n){return this.normalized&&(n=Fn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,a){return e*=this.itemSize,this.normalized&&(n=Fn(n,this.array),a=Fn(a,this.array)),this.array[e+0]=n,this.array[e+1]=a,this}setXYZ(e,n,a,r){return e*=this.itemSize,this.normalized&&(n=Fn(n,this.array),a=Fn(a,this.array),r=Fn(r,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=r,this}setXYZW(e,n,a,r,l){return e*=this.itemSize,this.normalized&&(n=Fn(n,this.array),a=Fn(a,this.array),r=Fn(r,this.array),l=Fn(l,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=r,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vv&&(e.usage=this.usage),e}}class y_ extends Bi{constructor(e,n,a){super(new Uint16Array(e),n,a)}}class S_ extends Bi{constructor(e,n,a){super(new Uint32Array(e),n,a)}}class Ii extends Bi{constructor(e,n,a){super(new Float32Array(e),n,a)}}let VM=0;const ui=new $t,jh=new Nn,br=new ue,$n=new ol,Zo=new ol,vn=new ue;class ns extends Vr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:VM++}),this.uuid=sl(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(d_(e)?S_:y_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,a=0){this.groups.push({start:e,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const l=new lt().getNormalMatrix(e);a.applyNormalMatrix(l),a.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ui.makeRotationFromQuaternion(e),this.applyMatrix4(ui),this}rotateX(e){return ui.makeRotationX(e),this.applyMatrix4(ui),this}rotateY(e){return ui.makeRotationY(e),this.applyMatrix4(ui),this}rotateZ(e){return ui.makeRotationZ(e),this.applyMatrix4(ui),this}translate(e,n,a){return ui.makeTranslation(e,n,a),this.applyMatrix4(ui),this}scale(e,n,a){return ui.makeScale(e,n,a),this.applyMatrix4(ui),this}lookAt(e){return jh.lookAt(e),jh.updateMatrix(),this.applyMatrix4(jh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(br).negate(),this.translate(br.x,br.y,br.z),this}setFromPoints(e){const n=[];for(let a=0,r=e.length;a<r;a++){const l=e[a];n.push(l.x,l.y,l.z||0)}return this.setAttribute("position",new Ii(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ol);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ue(-1/0,-1/0,-1/0),new ue(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let a=0,r=n.length;a<r;a++){const l=n[a];$n.setFromBufferAttribute(l),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xd);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ue,1/0);return}if(e){const a=this.boundingSphere.center;if($n.setFromBufferAttribute(e),n)for(let l=0,u=n.length;l<u;l++){const h=n[l];Zo.setFromBufferAttribute(h),this.morphTargetsRelative?(vn.addVectors($n.min,Zo.min),$n.expandByPoint(vn),vn.addVectors($n.max,Zo.max),$n.expandByPoint(vn)):($n.expandByPoint(Zo.min),$n.expandByPoint(Zo.max))}$n.getCenter(a);let r=0;for(let l=0,u=e.count;l<u;l++)vn.fromBufferAttribute(e,l),r=Math.max(r,a.distanceToSquared(vn));if(n)for(let l=0,u=n.length;l<u;l++){const h=n[l],d=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)vn.fromBufferAttribute(h,p),d&&(br.fromBufferAttribute(e,p),vn.add(br)),r=Math.max(r,a.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,r=n.normal,l=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bi(new Float32Array(4*a.count),4));const u=this.getAttribute("tangent"),h=[],d=[];for(let V=0;V<a.count;V++)h[V]=new ue,d[V]=new ue;const p=new ue,g=new ue,_=new ue,v=new Mt,S=new Mt,M=new Mt,E=new ue,x=new ue;function y(V,U,w){p.fromBufferAttribute(a,V),g.fromBufferAttribute(a,U),_.fromBufferAttribute(a,w),v.fromBufferAttribute(l,V),S.fromBufferAttribute(l,U),M.fromBufferAttribute(l,w),g.sub(p),_.sub(p),S.sub(v),M.sub(v);const F=1/(S.x*M.y-M.x*S.y);isFinite(F)&&(E.copy(g).multiplyScalar(M.y).addScaledVector(_,-S.y).multiplyScalar(F),x.copy(_).multiplyScalar(S.x).addScaledVector(g,-M.x).multiplyScalar(F),h[V].add(E),h[U].add(E),h[w].add(E),d[V].add(x),d[U].add(x),d[w].add(x))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let V=0,U=T.length;V<U;++V){const w=T[V],F=w.start,ie=w.count;for(let k=F,Q=F+ie;k<Q;k+=3)y(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const A=new ue,D=new ue,I=new ue,P=new ue;function z(V){I.fromBufferAttribute(r,V),P.copy(I);const U=h[V];A.copy(U),A.sub(I.multiplyScalar(I.dot(U))).normalize(),D.crossVectors(P,U);const F=D.dot(d[V])<0?-1:1;u.setXYZW(V,A.x,A.y,A.z,F)}for(let V=0,U=T.length;V<U;++V){const w=T[V],F=w.start,ie=w.count;for(let k=F,Q=F+ie;k<Q;k+=3)z(e.getX(k+0)),z(e.getX(k+1)),z(e.getX(k+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new Bi(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let v=0,S=a.count;v<S;v++)a.setXYZ(v,0,0,0);const r=new ue,l=new ue,u=new ue,h=new ue,d=new ue,p=new ue,g=new ue,_=new ue;if(e)for(let v=0,S=e.count;v<S;v+=3){const M=e.getX(v+0),E=e.getX(v+1),x=e.getX(v+2);r.fromBufferAttribute(n,M),l.fromBufferAttribute(n,E),u.fromBufferAttribute(n,x),g.subVectors(u,l),_.subVectors(r,l),g.cross(_),h.fromBufferAttribute(a,M),d.fromBufferAttribute(a,E),p.fromBufferAttribute(a,x),h.add(g),d.add(g),p.add(g),a.setXYZ(M,h.x,h.y,h.z),a.setXYZ(E,d.x,d.y,d.z),a.setXYZ(x,p.x,p.y,p.z)}else for(let v=0,S=n.count;v<S;v+=3)r.fromBufferAttribute(n,v+0),l.fromBufferAttribute(n,v+1),u.fromBufferAttribute(n,v+2),g.subVectors(u,l),_.subVectors(r,l),g.cross(_),a.setXYZ(v+0,g.x,g.y,g.z),a.setXYZ(v+1,g.x,g.y,g.z),a.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,a=e.count;n<a;n++)vn.fromBufferAttribute(e,n),vn.normalize(),e.setXYZ(n,vn.x,vn.y,vn.z)}toNonIndexed(){function e(h,d){const p=h.array,g=h.itemSize,_=h.normalized,v=new p.constructor(d.length*g);let S=0,M=0;for(let E=0,x=d.length;E<x;E++){h.isInterleavedBufferAttribute?S=d[E]*h.data.stride+h.offset:S=d[E]*g;for(let y=0;y<g;y++)v[M++]=p[S++]}return new Bi(v,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ns,a=this.index.array,r=this.attributes;for(const h in r){const d=r[h],p=e(d,a);n.setAttribute(h,p)}const l=this.morphAttributes;for(const h in l){const d=[],p=l[h];for(let g=0,_=p.length;g<_;g++){const v=p[g],S=e(v,a);d.push(S)}n.morphAttributes[h]=d}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,d=u.length;h<d;h++){const p=u[h];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const p in d)d[p]!==void 0&&(e[p]=d[p]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const d in a){const p=a[d];e.data.attributes[d]=p.toJSON(e.data)}const r={};let l=!1;for(const d in this.morphAttributes){const p=this.morphAttributes[d],g=[];for(let _=0,v=p.length;_<v;_++){const S=p[_];g.push(S.toJSON(e.data))}g.length>0&&(r[d]=g,l=!0)}l&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone(n));const r=e.attributes;for(const p in r){const g=r[p];this.setAttribute(p,g.clone(n))}const l=e.morphAttributes;for(const p in l){const g=[],_=l[p];for(let v=0,S=_.length;v<S;v++)g.push(_[v].clone(n));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,g=u.length;p<g;p++){const _=u[p];this.addGroup(_.start,_.count,_.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const i0=new $t,Ss=new PM,Cc=new xd,a0=new ue,Tr=new ue,Ar=new ue,wr=new ue,Wh=new ue,Dc=new ue,Nc=new Mt,Uc=new Mt,Lc=new Mt,s0=new ue,r0=new ue,o0=new ue,Oc=new ue,Pc=new ue;class di extends Nn{constructor(e=new ns,n=new x_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const r=n[a[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=r.length;l<u;l++){const h=r[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=l}}}}getVertexPosition(e,n){const a=this.geometry,r=a.attributes.position,l=a.morphAttributes.position,u=a.morphTargetsRelative;n.fromBufferAttribute(r,e);const h=this.morphTargetInfluences;if(l&&h){Dc.set(0,0,0);for(let d=0,p=l.length;d<p;d++){const g=h[d],_=l[d];g!==0&&(Wh.fromBufferAttribute(_,e),u?Dc.addScaledVector(Wh,g):Dc.addScaledVector(Wh.sub(n),g))}n.add(Dc)}return n}raycast(e,n){const a=this.geometry,r=this.material,l=this.matrixWorld;r!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Cc.copy(a.boundingSphere),Cc.applyMatrix4(l),Ss.copy(e.ray).recast(e.near),!(Cc.containsPoint(Ss.origin)===!1&&(Ss.intersectSphere(Cc,a0)===null||Ss.origin.distanceToSquared(a0)>(e.far-e.near)**2))&&(i0.copy(l).invert(),Ss.copy(e.ray).applyMatrix4(i0),!(a.boundingBox!==null&&Ss.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,n,Ss)))}_computeIntersections(e,n,a){let r;const l=this.geometry,u=this.material,h=l.index,d=l.attributes.position,p=l.attributes.uv,g=l.attributes.uv1,_=l.attributes.normal,v=l.groups,S=l.drawRange;if(h!==null)if(Array.isArray(u))for(let M=0,E=v.length;M<E;M++){const x=v[M],y=u[x.materialIndex],T=Math.max(x.start,S.start),A=Math.min(h.count,Math.min(x.start+x.count,S.start+S.count));for(let D=T,I=A;D<I;D+=3){const P=h.getX(D),z=h.getX(D+1),V=h.getX(D+2);r=zc(this,y,e,a,p,g,_,P,z,V),r&&(r.faceIndex=Math.floor(D/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const M=Math.max(0,S.start),E=Math.min(h.count,S.start+S.count);for(let x=M,y=E;x<y;x+=3){const T=h.getX(x),A=h.getX(x+1),D=h.getX(x+2);r=zc(this,u,e,a,p,g,_,T,A,D),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}else if(d!==void 0)if(Array.isArray(u))for(let M=0,E=v.length;M<E;M++){const x=v[M],y=u[x.materialIndex],T=Math.max(x.start,S.start),A=Math.min(d.count,Math.min(x.start+x.count,S.start+S.count));for(let D=T,I=A;D<I;D+=3){const P=D,z=D+1,V=D+2;r=zc(this,y,e,a,p,g,_,P,z,V),r&&(r.faceIndex=Math.floor(D/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const M=Math.max(0,S.start),E=Math.min(d.count,S.start+S.count);for(let x=M,y=E;x<y;x+=3){const T=x,A=x+1,D=x+2;r=zc(this,u,e,a,p,g,_,T,A,D),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}}}function jM(c,e,n,a,r,l,u,h){let d;if(e.side===kn?d=a.intersectTriangle(u,l,r,!0,h):d=a.intersectTriangle(r,l,u,e.side===Ja,h),d===null)return null;Pc.copy(h),Pc.applyMatrix4(c.matrixWorld);const p=n.ray.origin.distanceTo(Pc);return p<n.near||p>n.far?null:{distance:p,point:Pc.clone(),object:c}}function zc(c,e,n,a,r,l,u,h,d,p){c.getVertexPosition(h,Tr),c.getVertexPosition(d,Ar),c.getVertexPosition(p,wr);const g=jM(c,e,n,a,Tr,Ar,wr,Oc);if(g){r&&(Nc.fromBufferAttribute(r,h),Uc.fromBufferAttribute(r,d),Lc.fromBufferAttribute(r,p),g.uv=Pi.getInterpolation(Oc,Tr,Ar,wr,Nc,Uc,Lc,new Mt)),l&&(Nc.fromBufferAttribute(l,h),Uc.fromBufferAttribute(l,d),Lc.fromBufferAttribute(l,p),g.uv1=Pi.getInterpolation(Oc,Tr,Ar,wr,Nc,Uc,Lc,new Mt)),u&&(s0.fromBufferAttribute(u,h),r0.fromBufferAttribute(u,d),o0.fromBufferAttribute(u,p),g.normal=Pi.getInterpolation(Oc,Tr,Ar,wr,s0,r0,o0,new ue),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const _={a:h,b:d,c:p,normal:new ue,materialIndex:0};Pi.getNormal(Tr,Ar,wr,_.normal),g.face=_}return g}class jr extends ns{constructor(e=1,n=1,a=1,r=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:a,widthSegments:r,heightSegments:l,depthSegments:u};const h=this;r=Math.floor(r),l=Math.floor(l),u=Math.floor(u);const d=[],p=[],g=[],_=[];let v=0,S=0;M("z","y","x",-1,-1,a,n,e,u,l,0),M("z","y","x",1,-1,a,n,-e,u,l,1),M("x","z","y",1,1,e,a,n,r,u,2),M("x","z","y",1,-1,e,a,-n,r,u,3),M("x","y","z",1,-1,e,n,a,r,l,4),M("x","y","z",-1,-1,e,n,-a,r,l,5),this.setIndex(d),this.setAttribute("position",new Ii(p,3)),this.setAttribute("normal",new Ii(g,3)),this.setAttribute("uv",new Ii(_,2));function M(E,x,y,T,A,D,I,P,z,V,U){const w=D/z,F=I/V,ie=D/2,k=I/2,Q=P/2,Y=z+1,L=V+1;let K=0,j=0;const he=new ue;for(let B=0;B<L;B++){const $=B*F-k;for(let oe=0;oe<Y;oe++){const ye=oe*w-ie;he[E]=ye*T,he[x]=$*A,he[y]=Q,p.push(he.x,he.y,he.z),he[E]=0,he[x]=0,he[y]=P>0?1:-1,g.push(he.x,he.y,he.z),_.push(oe/z),_.push(1-B/V),K+=1}}for(let B=0;B<V;B++)for(let $=0;$<z;$++){const oe=v+$+Y*B,ye=v+$+Y*(B+1),ee=v+($+1)+Y*(B+1),de=v+($+1)+Y*B;d.push(oe,ye,de),d.push(ye,ee,de),j+=6}h.addGroup(S,j,U),S+=j,v+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function kr(c){const e={};for(const n in c){e[n]={};for(const a in c[n]){const r=c[n][a];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][a]=null):e[n][a]=r.clone():Array.isArray(r)?e[n][a]=r.slice():e[n][a]=r}}return e}function Ln(c){const e={};for(let n=0;n<c.length;n++){const a=kr(c[n]);for(const r in a)e[r]=a[r]}return e}function WM(c){const e=[];for(let n=0;n<c.length;n++)e.push(c[n].clone());return e}function M_(c){const e=c.getRenderTarget();return e===null?c.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ut.workingColorSpace}const qM={clone:kr,merge:Ln};var XM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,YM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class es extends ll{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=XM,this.fragmentShader=YM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=kr(e.uniforms),this.uniformsGroups=WM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const u=this.uniforms[r].value;u&&u.isTexture?n.uniforms[r]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[r]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[r]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[r]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[r]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[r]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[r]={type:"m4",value:u.toArray()}:n.uniforms[r]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const r in this.extensions)this.extensions[r]===!0&&(a[r]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class E_ extends Nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=da}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const qa=new ue,l0=new Mt,c0=new Mt;class fi extends E_{constructor(e=50,n=1,a=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=pd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(wh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pd*2*Math.atan(Math.tan(wh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,a){qa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qa.x,qa.y).multiplyScalar(-e/qa.z),qa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(qa.x,qa.y).multiplyScalar(-e/qa.z)}getViewSize(e,n){return this.getViewBounds(e,l0,c0),n.subVectors(c0,l0)}setViewOffset(e,n,a,r,l,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=r,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(wh*.5*this.fov)/this.zoom,a=2*n,r=this.aspect*a,l=-.5*r;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,p=u.fullHeight;l+=u.offsetX*r/d,n-=u.offsetY*a/p,r*=u.width/d,a*=u.height/p}const h=this.filmOffset;h!==0&&(l+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+r,n,n-a,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Rr=-90,Cr=1;class KM extends Nn{constructor(e,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new fi(Rr,Cr,e,n);r.layers=this.layers,this.add(r);const l=new fi(Rr,Cr,e,n);l.layers=this.layers,this.add(l);const u=new fi(Rr,Cr,e,n);u.layers=this.layers,this.add(u);const h=new fi(Rr,Cr,e,n);h.layers=this.layers,this.add(h);const d=new fi(Rr,Cr,e,n);d.layers=this.layers,this.add(d);const p=new fi(Rr,Cr,e,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[a,r,l,u,h,d]=n;for(const p of n)this.remove(p);if(e===da)a.up.set(0,1,0),a.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===Jc)a.up.set(0,-1,0),a.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of n)this.add(p),p.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,h,d,p,g]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const E=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,e.setRenderTarget(a,0,r),e.render(n,l),e.setRenderTarget(a,1,r),e.render(n,u),e.setRenderTarget(a,2,r),e.render(n,h),e.setRenderTarget(a,3,r),e.render(n,d),e.setRenderTarget(a,4,r),e.render(n,p),a.texture.generateMipmaps=E,e.setRenderTarget(a,5,r),e.render(n,g),e.setRenderTarget(_,v,S),e.xr.enabled=M,a.texture.needsPMREMUpdate=!0}}class b_ extends Vn{constructor(e,n,a,r,l,u,h,d,p,g){e=e!==void 0?e:[],n=n!==void 0?n:Br,super(e,n,a,r,l,u,h,d,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ZM extends Ls{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},r=[a,a,a,a,a,a];this.texture=new b_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Mi}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new jr(5,5,5),l=new es({name:"CubemapFromEquirect",uniforms:kr(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:kn,blending:Za});l.uniforms.tEquirect.value=n;const u=new di(r,l),h=n.minFilter;return n.minFilter===Us&&(n.minFilter=Mi),new KM(1,10,this).update(e,u),n.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(e,n,a,r){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,a,r);e.setRenderTarget(l)}}const qh=new ue,QM=new ue,JM=new lt;let As=class{constructor(e=new ue(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,a,r){return this.normal.set(e,n,a),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,a){const r=qh.subVectors(a,n).cross(QM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const a=e.delta(qh),r=this.normal.dot(a);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/r;return l<0||l>1?null:n.copy(e.start).addScaledVector(a,l)}intersectsLine(e){const n=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return n<0&&a>0||a<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const a=n||JM.getNormalMatrix(e),r=this.coplanarPoint(qh).applyMatrix4(e),l=this.normal.applyMatrix3(a).normalize();return this.constant=-r.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};const Ms=new xd,Bc=new ue;class yd{constructor(e=new As,n=new As,a=new As,r=new As,l=new As,u=new As){this.planes=[e,n,a,r,l,u]}set(e,n,a,r,l,u){const h=this.planes;return h[0].copy(e),h[1].copy(n),h[2].copy(a),h[3].copy(r),h[4].copy(l),h[5].copy(u),this}copy(e){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,n=da){const a=this.planes,r=e.elements,l=r[0],u=r[1],h=r[2],d=r[3],p=r[4],g=r[5],_=r[6],v=r[7],S=r[8],M=r[9],E=r[10],x=r[11],y=r[12],T=r[13],A=r[14],D=r[15];if(a[0].setComponents(d-l,v-p,x-S,D-y).normalize(),a[1].setComponents(d+l,v+p,x+S,D+y).normalize(),a[2].setComponents(d+u,v+g,x+M,D+T).normalize(),a[3].setComponents(d-u,v-g,x-M,D-T).normalize(),a[4].setComponents(d-h,v-_,x-E,D-A).normalize(),n===da)a[5].setComponents(d+h,v+_,x+E,D+A).normalize();else if(n===Jc)a[5].setComponents(h,_,E,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ms.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ms)}intersectsSprite(e){return Ms.center.set(0,0,0),Ms.radius=.7071067811865476,Ms.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ms)}intersectsSphere(e){const n=this.planes,a=e.center,r=-e.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(a)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let a=0;a<6;a++){const r=n[a];if(Bc.x=r.normal.x>0?e.max.x:e.min.x,Bc.y=r.normal.y>0?e.max.y:e.min.y,Bc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Bc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function T_(){let c=null,e=!1,n=null,a=null;function r(l,u){n(l,u),a=c.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(a=c.requestAnimationFrame(r),e=!0)},stop:function(){c.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(l){n=l},setContext:function(l){c=l}}}function $M(c){const e=new WeakMap;function n(h,d){const p=h.array,g=h.usage,_=p.byteLength,v=c.createBuffer();c.bindBuffer(d,v),c.bufferData(d,p,g),h.onUploadCallback();let S;if(p instanceof Float32Array)S=c.FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?S=c.HALF_FLOAT:S=c.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=c.SHORT;else if(p instanceof Uint32Array)S=c.UNSIGNED_INT;else if(p instanceof Int32Array)S=c.INT;else if(p instanceof Int8Array)S=c.BYTE;else if(p instanceof Uint8Array)S=c.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=c.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:_}}function a(h,d,p){const g=d.array,_=d._updateRange,v=d.updateRanges;if(c.bindBuffer(p,h),_.count===-1&&v.length===0&&c.bufferSubData(p,0,g),v.length!==0){for(let S=0,M=v.length;S<M;S++){const E=v[S];c.bufferSubData(p,E.start*g.BYTES_PER_ELEMENT,g,E.start,E.count)}d.clearUpdateRanges()}_.count!==-1&&(c.bufferSubData(p,_.offset*g.BYTES_PER_ELEMENT,g,_.offset,_.count),_.count=-1),d.onUploadCallback()}function r(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function l(h){h.isInterleavedBufferAttribute&&(h=h.data);const d=e.get(h);d&&(c.deleteBuffer(d.buffer),e.delete(h))}function u(h,d){if(h.isGLBufferAttribute){const g=e.get(h);(!g||g.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const p=e.get(h);if(p===void 0)e.set(h,n(h,d));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(p.buffer,h,d),p.version=h.version}}return{get:r,remove:l,update:u}}class ru extends ns{constructor(e=1,n=1,a=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:a,heightSegments:r};const l=e/2,u=n/2,h=Math.floor(a),d=Math.floor(r),p=h+1,g=d+1,_=e/h,v=n/d,S=[],M=[],E=[],x=[];for(let y=0;y<g;y++){const T=y*v-u;for(let A=0;A<p;A++){const D=A*_-l;M.push(D,-T,0),E.push(0,0,1),x.push(A/h),x.push(1-y/d)}}for(let y=0;y<d;y++)for(let T=0;T<h;T++){const A=T+p*y,D=T+p*(y+1),I=T+1+p*(y+1),P=T+1+p*y;S.push(A,D,P),S.push(D,I,P)}this.setIndex(S),this.setAttribute("position",new Ii(M,3)),this.setAttribute("normal",new Ii(E,3)),this.setAttribute("uv",new Ii(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ru(e.width,e.height,e.widthSegments,e.heightSegments)}}var eE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tE=`#ifdef USE_ALPHAHASH
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
#endif`,nE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,iE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,aE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rE=`#ifdef USE_AOMAP
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
#endif`,oE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lE=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,cE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,uE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,dE=`#ifdef USE_IRIDESCENCE
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
#endif`,pE=`#ifdef USE_BUMPMAP
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
#endif`,mE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_E=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,SE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ME=`#if defined( USE_COLOR_ALPHA )
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
	vec3 batchingColor = getBatchingColor( batchId );
	vColor.xyz *= batchingColor.xyz;
#endif`,EE=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,bE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,TE=`vec3 transformedNormal = objectNormal;
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
#endif`,AE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,RE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,CE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,DE="gl_FragColor = linearToOutputTexel( gl_FragColor );",NE=`
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
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,UE=`#ifdef USE_ENVMAP
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
#endif`,LE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,OE=`#ifdef USE_ENVMAP
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
#endif`,PE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zE=`#ifdef USE_ENVMAP
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
#endif`,BE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,IE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,FE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,HE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,GE=`#ifdef USE_GRADIENTMAP
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
}`,kE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,VE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,WE=`uniform bool receiveShadow;
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
#endif`,qE=`#ifdef USE_ENVMAP
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
#endif`,XE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,YE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,KE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ZE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,QE=`PhysicalMaterial material;
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
#endif`,JE=`struct PhysicalMaterial {
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
}`,$E=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,eb=`#if defined( RE_IndirectDiffuse )
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
#endif`,tb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nb=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ib=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ab=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ob=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cb=`#if defined( USE_POINTS_UV )
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
#endif`,ub=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,db=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mb=`#ifdef USE_MORPHTARGETS
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
#endif`,gb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,_b=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Mb=`#ifdef USE_NORMALMAP
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
#endif`,Eb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ab=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,Cb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Db=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ub=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ob=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return shadow;
	}
#endif`,zb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,Bb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ib=`float getShadowMask() {
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
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
}`,Fb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hb=`#ifdef USE_SKINNING
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
#endif`,Gb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kb=`#ifdef USE_SKINNING
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
#endif`,Vb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xb=`#ifdef USE_TRANSMISSION
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
#endif`,Yb=`#ifdef USE_TRANSMISSION
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
#endif`,Kb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $b=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eT=`uniform sampler2D t2D;
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
}`,tT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,iT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sT=`#include <common>
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
}`,rT=`#if DEPTH_PACKING == 3200
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
	#endif
}`,oT=`#define DISTANCE
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
}`,lT=`#define DISTANCE
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
}`,cT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,uT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fT=`uniform float scale;
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
}`,hT=`uniform vec3 diffuse;
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
}`,dT=`#include <common>
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
}`,pT=`uniform vec3 diffuse;
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
}`,mT=`#define LAMBERT
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
}`,gT=`#define LAMBERT
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
}`,vT=`#define MATCAP
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
}`,_T=`#define MATCAP
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
}`,xT=`#define NORMAL
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
}`,yT=`#define NORMAL
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
}`,ST=`#define PHONG
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
}`,MT=`#define PHONG
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
}`,ET=`#define STANDARD
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
}`,bT=`#define STANDARD
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
}`,TT=`#define TOON
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
}`,AT=`#define TOON
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
}`,wT=`uniform float size;
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
}`,RT=`uniform vec3 diffuse;
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
}`,CT=`#include <common>
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
}`,DT=`uniform vec3 color;
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
}`,NT=`uniform float rotation;
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
}`,UT=`uniform vec3 diffuse;
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
}`,ot={alphahash_fragment:eE,alphahash_pars_fragment:tE,alphamap_fragment:nE,alphamap_pars_fragment:iE,alphatest_fragment:aE,alphatest_pars_fragment:sE,aomap_fragment:rE,aomap_pars_fragment:oE,batching_pars_vertex:lE,batching_vertex:cE,begin_vertex:uE,beginnormal_vertex:fE,bsdfs:hE,iridescence_fragment:dE,bumpmap_pars_fragment:pE,clipping_planes_fragment:mE,clipping_planes_pars_fragment:gE,clipping_planes_pars_vertex:vE,clipping_planes_vertex:_E,color_fragment:xE,color_pars_fragment:yE,color_pars_vertex:SE,color_vertex:ME,common:EE,cube_uv_reflection_fragment:bE,defaultnormal_vertex:TE,displacementmap_pars_vertex:AE,displacementmap_vertex:wE,emissivemap_fragment:RE,emissivemap_pars_fragment:CE,colorspace_fragment:DE,colorspace_pars_fragment:NE,envmap_fragment:UE,envmap_common_pars_fragment:LE,envmap_pars_fragment:OE,envmap_pars_vertex:PE,envmap_physical_pars_fragment:qE,envmap_vertex:zE,fog_vertex:BE,fog_pars_vertex:IE,fog_fragment:FE,fog_pars_fragment:HE,gradientmap_pars_fragment:GE,lightmap_pars_fragment:kE,lights_lambert_fragment:VE,lights_lambert_pars_fragment:jE,lights_pars_begin:WE,lights_toon_fragment:XE,lights_toon_pars_fragment:YE,lights_phong_fragment:KE,lights_phong_pars_fragment:ZE,lights_physical_fragment:QE,lights_physical_pars_fragment:JE,lights_fragment_begin:$E,lights_fragment_maps:eb,lights_fragment_end:tb,logdepthbuf_fragment:nb,logdepthbuf_pars_fragment:ib,logdepthbuf_pars_vertex:ab,logdepthbuf_vertex:sb,map_fragment:rb,map_pars_fragment:ob,map_particle_fragment:lb,map_particle_pars_fragment:cb,metalnessmap_fragment:ub,metalnessmap_pars_fragment:fb,morphinstance_vertex:hb,morphcolor_vertex:db,morphnormal_vertex:pb,morphtarget_pars_vertex:mb,morphtarget_vertex:gb,normal_fragment_begin:vb,normal_fragment_maps:_b,normal_pars_fragment:xb,normal_pars_vertex:yb,normal_vertex:Sb,normalmap_pars_fragment:Mb,clearcoat_normal_fragment_begin:Eb,clearcoat_normal_fragment_maps:bb,clearcoat_pars_fragment:Tb,iridescence_pars_fragment:Ab,opaque_fragment:wb,packing:Rb,premultiplied_alpha_fragment:Cb,project_vertex:Db,dithering_fragment:Nb,dithering_pars_fragment:Ub,roughnessmap_fragment:Lb,roughnessmap_pars_fragment:Ob,shadowmap_pars_fragment:Pb,shadowmap_pars_vertex:zb,shadowmap_vertex:Bb,shadowmask_pars_fragment:Ib,skinbase_vertex:Fb,skinning_pars_vertex:Hb,skinning_vertex:Gb,skinnormal_vertex:kb,specularmap_fragment:Vb,specularmap_pars_fragment:jb,tonemapping_fragment:Wb,tonemapping_pars_fragment:qb,transmission_fragment:Xb,transmission_pars_fragment:Yb,uv_pars_fragment:Kb,uv_pars_vertex:Zb,uv_vertex:Qb,worldpos_vertex:Jb,background_vert:$b,background_frag:eT,backgroundCube_vert:tT,backgroundCube_frag:nT,cube_vert:iT,cube_frag:aT,depth_vert:sT,depth_frag:rT,distanceRGBA_vert:oT,distanceRGBA_frag:lT,equirect_vert:cT,equirect_frag:uT,linedashed_vert:fT,linedashed_frag:hT,meshbasic_vert:dT,meshbasic_frag:pT,meshlambert_vert:mT,meshlambert_frag:gT,meshmatcap_vert:vT,meshmatcap_frag:_T,meshnormal_vert:xT,meshnormal_frag:yT,meshphong_vert:ST,meshphong_frag:MT,meshphysical_vert:ET,meshphysical_frag:bT,meshtoon_vert:TT,meshtoon_frag:AT,points_vert:wT,points_frag:RT,shadow_vert:CT,shadow_frag:DT,sprite_vert:NT,sprite_frag:UT},Le={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},Oi={basic:{uniforms:Ln([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:Ln([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new At(0)}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:Ln([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:Ln([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:Ln([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new At(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:Ln([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:Ln([Le.points,Le.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:Ln([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:Ln([Le.common,Le.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:Ln([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:Ln([Le.sprite,Le.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distanceRGBA:{uniforms:Ln([Le.common,Le.displacementmap,{referencePosition:{value:new ue},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distanceRGBA_vert,fragmentShader:ot.distanceRGBA_frag},shadow:{uniforms:Ln([Le.lights,Le.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};Oi.physical={uniforms:Ln([Oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};const Ic={r:0,b:0,g:0},Es=new Fi,LT=new $t;function OT(c,e,n,a,r,l,u){const h=new At(0);let d=l===!0?0:1,p,g,_=null,v=0,S=null;function M(T){let A=T.isScene===!0?T.background:null;return A&&A.isTexture&&(A=(T.backgroundBlurriness>0?n:e).get(A)),A}function E(T){let A=!1;const D=M(T);D===null?y(h,d):D&&D.isColor&&(y(D,1),A=!0);const I=c.xr.getEnvironmentBlendMode();I==="additive"?a.buffers.color.setClear(0,0,0,1,u):I==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,u),(c.autoClear||A)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),c.clear(c.autoClearColor,c.autoClearDepth,c.autoClearStencil))}function x(T,A){const D=M(A);D&&(D.isCubeTexture||D.mapping===iu)?(g===void 0&&(g=new di(new jr(1,1,1),new es({name:"BackgroundCubeMaterial",uniforms:kr(Oi.backgroundCube.uniforms),vertexShader:Oi.backgroundCube.vertexShader,fragmentShader:Oi.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(I,P,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(g)),Es.copy(A.backgroundRotation),Es.x*=-1,Es.y*=-1,Es.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Es.y*=-1,Es.z*=-1),g.material.uniforms.envMap.value=D,g.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(LT.makeRotationFromEuler(Es)),g.material.toneMapped=Ut.getTransfer(D.colorSpace)!==kt,(_!==D||v!==D.version||S!==c.toneMapping)&&(g.material.needsUpdate=!0,_=D,v=D.version,S=c.toneMapping),g.layers.enableAll(),T.unshift(g,g.geometry,g.material,0,0,null)):D&&D.isTexture&&(p===void 0&&(p=new di(new ru(2,2),new es({name:"BackgroundMaterial",uniforms:kr(Oi.background.uniforms),vertexShader:Oi.background.vertexShader,fragmentShader:Oi.background.fragmentShader,side:Ja,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=D,p.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,p.material.toneMapped=Ut.getTransfer(D.colorSpace)!==kt,D.matrixAutoUpdate===!0&&D.updateMatrix(),p.material.uniforms.uvTransform.value.copy(D.matrix),(_!==D||v!==D.version||S!==c.toneMapping)&&(p.material.needsUpdate=!0,_=D,v=D.version,S=c.toneMapping),p.layers.enableAll(),T.unshift(p,p.geometry,p.material,0,0,null))}function y(T,A){T.getRGB(Ic,M_(c)),a.buffers.color.setClear(Ic.r,Ic.g,Ic.b,A,u)}return{getClearColor:function(){return h},setClearColor:function(T,A=1){h.set(T),d=A,y(h,d)},getClearAlpha:function(){return d},setClearAlpha:function(T){d=T,y(h,d)},render:E,addToRenderList:x}}function PT(c,e){const n=c.getParameter(c.MAX_VERTEX_ATTRIBS),a={},r=v(null);let l=r,u=!1;function h(w,F,ie,k,Q){let Y=!1;const L=_(k,ie,F);l!==L&&(l=L,p(l.object)),Y=S(w,k,ie,Q),Y&&M(w,k,ie,Q),Q!==null&&e.update(Q,c.ELEMENT_ARRAY_BUFFER),(Y||u)&&(u=!1,D(w,F,ie,k),Q!==null&&c.bindBuffer(c.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function d(){return c.createVertexArray()}function p(w){return c.bindVertexArray(w)}function g(w){return c.deleteVertexArray(w)}function _(w,F,ie){const k=ie.wireframe===!0;let Q=a[w.id];Q===void 0&&(Q={},a[w.id]=Q);let Y=Q[F.id];Y===void 0&&(Y={},Q[F.id]=Y);let L=Y[k];return L===void 0&&(L=v(d()),Y[k]=L),L}function v(w){const F=[],ie=[],k=[];for(let Q=0;Q<n;Q++)F[Q]=0,ie[Q]=0,k[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:ie,attributeDivisors:k,object:w,attributes:{},index:null}}function S(w,F,ie,k){const Q=l.attributes,Y=F.attributes;let L=0;const K=ie.getAttributes();for(const j in K)if(K[j].location>=0){const B=Q[j];let $=Y[j];if($===void 0&&(j==="instanceMatrix"&&w.instanceMatrix&&($=w.instanceMatrix),j==="instanceColor"&&w.instanceColor&&($=w.instanceColor)),B===void 0||B.attribute!==$||$&&B.data!==$.data)return!0;L++}return l.attributesNum!==L||l.index!==k}function M(w,F,ie,k){const Q={},Y=F.attributes;let L=0;const K=ie.getAttributes();for(const j in K)if(K[j].location>=0){let B=Y[j];B===void 0&&(j==="instanceMatrix"&&w.instanceMatrix&&(B=w.instanceMatrix),j==="instanceColor"&&w.instanceColor&&(B=w.instanceColor));const $={};$.attribute=B,B&&B.data&&($.data=B.data),Q[j]=$,L++}l.attributes=Q,l.attributesNum=L,l.index=k}function E(){const w=l.newAttributes;for(let F=0,ie=w.length;F<ie;F++)w[F]=0}function x(w){y(w,0)}function y(w,F){const ie=l.newAttributes,k=l.enabledAttributes,Q=l.attributeDivisors;ie[w]=1,k[w]===0&&(c.enableVertexAttribArray(w),k[w]=1),Q[w]!==F&&(c.vertexAttribDivisor(w,F),Q[w]=F)}function T(){const w=l.newAttributes,F=l.enabledAttributes;for(let ie=0,k=F.length;ie<k;ie++)F[ie]!==w[ie]&&(c.disableVertexAttribArray(ie),F[ie]=0)}function A(w,F,ie,k,Q,Y,L){L===!0?c.vertexAttribIPointer(w,F,ie,Q,Y):c.vertexAttribPointer(w,F,ie,k,Q,Y)}function D(w,F,ie,k){E();const Q=k.attributes,Y=ie.getAttributes(),L=F.defaultAttributeValues;for(const K in Y){const j=Y[K];if(j.location>=0){let he=Q[K];if(he===void 0&&(K==="instanceMatrix"&&w.instanceMatrix&&(he=w.instanceMatrix),K==="instanceColor"&&w.instanceColor&&(he=w.instanceColor)),he!==void 0){const B=he.normalized,$=he.itemSize,oe=e.get(he);if(oe===void 0)continue;const ye=oe.buffer,ee=oe.type,de=oe.bytesPerElement,_e=ee===c.INT||ee===c.UNSIGNED_INT||he.gpuType===s_;if(he.isInterleavedBufferAttribute){const Ae=he.data,Fe=Ae.stride,Je=he.offset;if(Ae.isInstancedInterleavedBuffer){for(let pt=0;pt<j.locationSize;pt++)y(j.location+pt,Ae.meshPerAttribute);w.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let pt=0;pt<j.locationSize;pt++)x(j.location+pt);c.bindBuffer(c.ARRAY_BUFFER,ye);for(let pt=0;pt<j.locationSize;pt++)A(j.location+pt,$/j.locationSize,ee,B,Fe*de,(Je+$/j.locationSize*pt)*de,_e)}else{if(he.isInstancedBufferAttribute){for(let Ae=0;Ae<j.locationSize;Ae++)y(j.location+Ae,he.meshPerAttribute);w.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Ae=0;Ae<j.locationSize;Ae++)x(j.location+Ae);c.bindBuffer(c.ARRAY_BUFFER,ye);for(let Ae=0;Ae<j.locationSize;Ae++)A(j.location+Ae,$/j.locationSize,ee,B,$*de,$/j.locationSize*Ae*de,_e)}}else if(L!==void 0){const B=L[K];if(B!==void 0)switch(B.length){case 2:c.vertexAttrib2fv(j.location,B);break;case 3:c.vertexAttrib3fv(j.location,B);break;case 4:c.vertexAttrib4fv(j.location,B);break;default:c.vertexAttrib1fv(j.location,B)}}}}T()}function I(){V();for(const w in a){const F=a[w];for(const ie in F){const k=F[ie];for(const Q in k)g(k[Q].object),delete k[Q];delete F[ie]}delete a[w]}}function P(w){if(a[w.id]===void 0)return;const F=a[w.id];for(const ie in F){const k=F[ie];for(const Q in k)g(k[Q].object),delete k[Q];delete F[ie]}delete a[w.id]}function z(w){for(const F in a){const ie=a[F];if(ie[w.id]===void 0)continue;const k=ie[w.id];for(const Q in k)g(k[Q].object),delete k[Q];delete ie[w.id]}}function V(){U(),u=!0,l!==r&&(l=r,p(l.object))}function U(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:h,reset:V,resetDefaultState:U,dispose:I,releaseStatesOfGeometry:P,releaseStatesOfProgram:z,initAttributes:E,enableAttribute:x,disableUnusedAttributes:T}}function zT(c,e,n){let a;function r(p){a=p}function l(p,g){c.drawArrays(a,p,g),n.update(g,a,1)}function u(p,g,_){_!==0&&(c.drawArraysInstanced(a,p,g,_),n.update(g,a,_))}function h(p,g,_){if(_===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let S=0;S<_;S++)this.render(p[S],g[S]);else{v.multiDrawArraysWEBGL(a,p,0,g,0,_);let S=0;for(let M=0;M<_;M++)S+=g[M];n.update(S,a,1)}}function d(p,g,_,v){if(_===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let M=0;M<p.length;M++)u(p[M],g[M],v[M]);else{S.multiDrawArraysInstancedWEBGL(a,p,0,g,0,v,0,_);let M=0;for(let E=0;E<_;E++)M+=g[E];for(let E=0;E<v.length;E++)n.update(M,a,v[E])}}this.setMode=r,this.render=l,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function BT(c,e,n,a){let r;function l(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=c.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function u(P){return!(P!==zi&&a.convert(P)!==c.getParameter(c.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(P){const z=P===au&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==$a&&a.convert(P)!==c.getParameter(c.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Ka&&!z)}function d(P){if(P==="highp"){if(c.getShaderPrecisionFormat(c.VERTEX_SHADER,c.HIGH_FLOAT).precision>0&&c.getShaderPrecisionFormat(c.FRAGMENT_SHADER,c.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&c.getShaderPrecisionFormat(c.VERTEX_SHADER,c.MEDIUM_FLOAT).precision>0&&c.getShaderPrecisionFormat(c.FRAGMENT_SHADER,c.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const g=d(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=n.logarithmicDepthBuffer===!0,v=c.getParameter(c.MAX_TEXTURE_IMAGE_UNITS),S=c.getParameter(c.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=c.getParameter(c.MAX_TEXTURE_SIZE),E=c.getParameter(c.MAX_CUBE_MAP_TEXTURE_SIZE),x=c.getParameter(c.MAX_VERTEX_ATTRIBS),y=c.getParameter(c.MAX_VERTEX_UNIFORM_VECTORS),T=c.getParameter(c.MAX_VARYING_VECTORS),A=c.getParameter(c.MAX_FRAGMENT_UNIFORM_VECTORS),D=S>0,I=c.getParameter(c.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:_,maxTextures:v,maxVertexTextures:S,maxTextureSize:M,maxCubemapSize:E,maxAttributes:x,maxVertexUniforms:y,maxVaryings:T,maxFragmentUniforms:A,vertexTextures:D,maxSamples:I}}function IT(c){const e=this;let n=null,a=0,r=!1,l=!1;const u=new As,h=new lt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const S=_.length!==0||v||a!==0||r;return r=v,a=_.length,S},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,v){n=g(_,v,0)},this.setState=function(_,v,S){const M=_.clippingPlanes,E=_.clipIntersection,x=_.clipShadows,y=c.get(_);if(!r||M===null||M.length===0||l&&!x)l?g(null):p();else{const T=l?0:a,A=T*4;let D=y.clippingState||null;d.value=D,D=g(M,v,A,S);for(let I=0;I!==A;++I)D[I]=n[I];y.clippingState=D,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=T}};function p(){d.value!==n&&(d.value=n,d.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function g(_,v,S,M){const E=_!==null?_.length:0;let x=null;if(E!==0){if(x=d.value,M!==!0||x===null){const y=S+E*4,T=v.matrixWorldInverse;h.getNormalMatrix(T),(x===null||x.length<y)&&(x=new Float32Array(y));for(let A=0,D=S;A!==E;++A,D+=4)u.copy(_[A]).applyMatrix4(T,h),u.normal.toArray(x,D),x[D+3]=u.constant}d.value=x,d.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,x}}function FT(c){let e=new WeakMap;function n(u,h){return h===ud?u.mapping=Br:h===fd&&(u.mapping=Ir),u}function a(u){if(u&&u.isTexture){const h=u.mapping;if(h===ud||h===fd)if(e.has(u)){const d=e.get(u).texture;return n(d,u.mapping)}else{const d=u.image;if(d&&d.height>0){const p=new ZM(d.height);return p.fromEquirectangularTexture(c,u),e.set(u,p),u.addEventListener("dispose",r),n(p.texture,u.mapping)}else return null}}return u}function r(u){const h=u.target;h.removeEventListener("dispose",r);const d=e.get(h);d!==void 0&&(e.delete(h),d.dispose())}function l(){e=new WeakMap}return{get:a,dispose:l}}class A_ extends E_{constructor(e=-1,n=1,a=1,r=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=a,this.bottom=r,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,a,r,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=r,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let l=a-e,u=a+e,h=r+n,d=r-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,h-=g*this.view.offsetY,d=h-g*this.view.height}this.projectionMatrix.makeOrthographic(l,u,h,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Lr=4,u0=[.125,.215,.35,.446,.526,.582],Cs=20,Xh=new A_,f0=new At;let Yh=null,Kh=0,Zh=0,Qh=!1;const ws=(1+Math.sqrt(5))/2,Dr=1/ws,h0=[new ue(-ws,Dr,0),new ue(ws,Dr,0),new ue(-Dr,0,ws),new ue(Dr,0,ws),new ue(0,ws,-Dr),new ue(0,ws,Dr),new ue(-1,1,-1),new ue(1,1,-1),new ue(-1,1,1),new ue(1,1,1)];class d0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,a=.1,r=100){Yh=this._renderer.getRenderTarget(),Kh=this._renderer.getActiveCubeFace(),Zh=this._renderer.getActiveMipmapLevel(),Qh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,a,r,l),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=g0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=m0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Yh,Kh,Zh),this._renderer.xr.enabled=Qh,e.scissorTest=!1,Fc(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Br||e.mapping===Ir?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yh=this._renderer.getRenderTarget(),Kh=this._renderer.getActiveCubeFace(),Zh=this._renderer.getActiveMipmapLevel(),Qh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:Mi,minFilter:Mi,generateMipmaps:!1,type:au,format:zi,colorSpace:ts,depthBuffer:!1},r=p0(e,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=p0(e,n,a);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=HT(l)),this._blurMaterial=GT(l,e,n)}return r}_compileMaterial(e){const n=new di(this._lodPlanes[0],e);this._renderer.compile(n,Xh)}_sceneToCubeUV(e,n,a,r){const h=new fi(90,1,n,a),d=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,_=g.autoClear,v=g.toneMapping;g.getClearColor(f0),g.toneMapping=Qa,g.autoClear=!1;const S=new x_({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1}),M=new di(new jr,S);let E=!1;const x=e.background;x?x.isColor&&(S.color.copy(x),e.background=null,E=!0):(S.color.copy(f0),E=!0);for(let y=0;y<6;y++){const T=y%3;T===0?(h.up.set(0,d[y],0),h.lookAt(p[y],0,0)):T===1?(h.up.set(0,0,d[y]),h.lookAt(0,p[y],0)):(h.up.set(0,d[y],0),h.lookAt(0,0,p[y]));const A=this._cubeSize;Fc(r,T*A,y>2?A:0,A,A),g.setRenderTarget(r),E&&g.render(M,h),g.render(e,h)}M.geometry.dispose(),M.material.dispose(),g.toneMapping=v,g.autoClear=_,e.background=x}_textureToCubeUV(e,n){const a=this._renderer,r=e.mapping===Br||e.mapping===Ir;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=g0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=m0());const l=r?this._cubemapMaterial:this._equirectMaterial,u=new di(this._lodPlanes[0],l),h=l.uniforms;h.envMap.value=e;const d=this._cubeSize;Fc(n,0,0,3*d,2*d),a.setRenderTarget(n),a.render(u,Xh)}_applyPMREM(e){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let l=1;l<r;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),h=h0[(r-l-1)%h0.length];this._blur(e,l-1,l,u,h)}n.autoClear=a}_blur(e,n,a,r,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,a,r,"latitudinal",l),this._halfBlur(u,e,a,a,r,"longitudinal",l)}_halfBlur(e,n,a,r,l,u,h){const d=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new di(this._lodPlanes[r],p),v=p.uniforms,S=this._sizeLods[a]-1,M=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*Cs-1),E=l/M,x=isFinite(l)?1+Math.floor(g*E):Cs;x>Cs&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Cs}`);const y=[];let T=0;for(let z=0;z<Cs;++z){const V=z/E,U=Math.exp(-V*V/2);y.push(U),z===0?T+=U:z<x&&(T+=2*U)}for(let z=0;z<y.length;z++)y[z]=y[z]/T;v.envMap.value=e.texture,v.samples.value=x,v.weights.value=y,v.latitudinal.value=u==="latitudinal",h&&(v.poleAxis.value=h);const{_lodMax:A}=this;v.dTheta.value=M,v.mipInt.value=A-a;const D=this._sizeLods[r],I=3*D*(r>A-Lr?r-A+Lr:0),P=4*(this._cubeSize-D);Fc(n,I,P,3*D,2*D),d.setRenderTarget(n),d.render(_,Xh)}}function HT(c){const e=[],n=[],a=[];let r=c;const l=c-Lr+1+u0.length;for(let u=0;u<l;u++){const h=Math.pow(2,r);n.push(h);let d=1/h;u>c-Lr?d=u0[u-c+Lr-1]:u===0&&(d=0),a.push(d);const p=1/(h-2),g=-p,_=1+p,v=[g,g,_,g,_,_,g,g,_,_,g,_],S=6,M=6,E=3,x=2,y=1,T=new Float32Array(E*M*S),A=new Float32Array(x*M*S),D=new Float32Array(y*M*S);for(let P=0;P<S;P++){const z=P%3*2/3-1,V=P>2?0:-1,U=[z,V,0,z+2/3,V,0,z+2/3,V+1,0,z,V,0,z+2/3,V+1,0,z,V+1,0];T.set(U,E*M*P),A.set(v,x*M*P);const w=[P,P,P,P,P,P];D.set(w,y*M*P)}const I=new ns;I.setAttribute("position",new Bi(T,E)),I.setAttribute("uv",new Bi(A,x)),I.setAttribute("faceIndex",new Bi(D,y)),e.push(I),r>Lr&&r--}return{lodPlanes:e,sizeLods:n,sigmas:a}}function p0(c,e,n){const a=new Ls(c,e,n);return a.texture.mapping=iu,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Fc(c,e,n,a,r){c.viewport.set(e,n,a,r),c.scissor.set(e,n,a,r)}function GT(c,e,n){const a=new Float32Array(Cs),r=new ue(0,1,0);return new es({name:"SphericalGaussianBlur",defines:{n:Cs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${c}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Sd(),fragmentShader:`

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
		`,blending:Za,depthTest:!1,depthWrite:!1})}function m0(){return new es({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sd(),fragmentShader:`

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
		`,blending:Za,depthTest:!1,depthWrite:!1})}function g0(){return new es({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Za,depthTest:!1,depthWrite:!1})}function Sd(){return`

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
	`}function kT(c){let e=new WeakMap,n=null;function a(h){if(h&&h.isTexture){const d=h.mapping,p=d===ud||d===fd,g=d===Br||d===Ir;if(p||g){let _=e.get(h);const v=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==v)return n===null&&(n=new d0(c)),_=p?n.fromEquirectangular(h,_):n.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),_.texture;if(_!==void 0)return _.texture;{const S=h.image;return p&&S&&S.height>0||g&&S&&r(S)?(n===null&&(n=new d0(c)),_=p?n.fromEquirectangular(h):n.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),h.addEventListener("dispose",l),_.texture):null}}}return h}function r(h){let d=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&d++;return d===p}function l(h){const d=h.target;d.removeEventListener("dispose",l);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:u}}function VT(c){const e={};function n(a){if(e[a]!==void 0)return e[a];let r;switch(a){case"WEBGL_depth_texture":r=c.getExtension("WEBGL_depth_texture")||c.getExtension("MOZ_WEBGL_depth_texture")||c.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=c.getExtension("EXT_texture_filter_anisotropic")||c.getExtension("MOZ_EXT_texture_filter_anisotropic")||c.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=c.getExtension("WEBGL_compressed_texture_s3tc")||c.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||c.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=c.getExtension("WEBGL_compressed_texture_pvrtc")||c.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=c.getExtension(a)}return e[a]=r,r}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const r=n(a);return r===null&&p_("THREE.WebGLRenderer: "+a+" extension not supported."),r}}}function jT(c,e,n,a){const r={},l=new WeakMap;function u(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const M in v.attributes)e.remove(v.attributes[M]);for(const M in v.morphAttributes){const E=v.morphAttributes[M];for(let x=0,y=E.length;x<y;x++)e.remove(E[x])}v.removeEventListener("dispose",u),delete r[v.id];const S=l.get(v);S&&(e.remove(S),l.delete(v)),a.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function h(_,v){return r[v.id]===!0||(v.addEventListener("dispose",u),r[v.id]=!0,n.memory.geometries++),v}function d(_){const v=_.attributes;for(const M in v)e.update(v[M],c.ARRAY_BUFFER);const S=_.morphAttributes;for(const M in S){const E=S[M];for(let x=0,y=E.length;x<y;x++)e.update(E[x],c.ARRAY_BUFFER)}}function p(_){const v=[],S=_.index,M=_.attributes.position;let E=0;if(S!==null){const T=S.array;E=S.version;for(let A=0,D=T.length;A<D;A+=3){const I=T[A+0],P=T[A+1],z=T[A+2];v.push(I,P,P,z,z,I)}}else if(M!==void 0){const T=M.array;E=M.version;for(let A=0,D=T.length/3-1;A<D;A+=3){const I=A+0,P=A+1,z=A+2;v.push(I,P,P,z,z,I)}}else return;const x=new(d_(v)?S_:y_)(v,1);x.version=E;const y=l.get(_);y&&e.remove(y),l.set(_,x)}function g(_){const v=l.get(_);if(v){const S=_.index;S!==null&&v.version<S.version&&p(_)}else p(_);return l.get(_)}return{get:h,update:d,getWireframeAttribute:g}}function WT(c,e,n){let a;function r(v){a=v}let l,u;function h(v){l=v.type,u=v.bytesPerElement}function d(v,S){c.drawElements(a,S,l,v*u),n.update(S,a,1)}function p(v,S,M){M!==0&&(c.drawElementsInstanced(a,S,l,v*u,M),n.update(S,a,M))}function g(v,S,M){if(M===0)return;const E=e.get("WEBGL_multi_draw");if(E===null)for(let x=0;x<M;x++)this.render(v[x]/u,S[x]);else{E.multiDrawElementsWEBGL(a,S,0,l,v,0,M);let x=0;for(let y=0;y<M;y++)x+=S[y];n.update(x,a,1)}}function _(v,S,M,E){if(M===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let y=0;y<v.length;y++)p(v[y]/u,S[y],E[y]);else{x.multiDrawElementsInstancedWEBGL(a,S,0,l,v,0,E,0,M);let y=0;for(let T=0;T<M;T++)y+=S[T];for(let T=0;T<E.length;T++)n.update(y,a,E[T])}}this.setMode=r,this.setIndex=h,this.render=d,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function qT(c){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(l,u,h){switch(n.calls++,u){case c.TRIANGLES:n.triangles+=h*(l/3);break;case c.LINES:n.lines+=h*(l/2);break;case c.LINE_STRIP:n.lines+=h*(l-1);break;case c.LINE_LOOP:n.lines+=h*l;break;case c.POINTS:n.points+=h*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:a}}function XT(c,e,n){const a=new WeakMap,r=new _n;function l(u,h,d){const p=u.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let v=a.get(h);if(v===void 0||v.count!==_){let w=function(){V.dispose(),a.delete(h),h.removeEventListener("dispose",w)};var S=w;v!==void 0&&v.texture.dispose();const M=h.morphAttributes.position!==void 0,E=h.morphAttributes.normal!==void 0,x=h.morphAttributes.color!==void 0,y=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],A=h.morphAttributes.color||[];let D=0;M===!0&&(D=1),E===!0&&(D=2),x===!0&&(D=3);let I=h.attributes.position.count*D,P=1;I>e.maxTextureSize&&(P=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const z=new Float32Array(I*P*4*_),V=new g_(z,I,P,_);V.type=Ka,V.needsUpdate=!0;const U=D*4;for(let F=0;F<_;F++){const ie=y[F],k=T[F],Q=A[F],Y=I*P*4*F;for(let L=0;L<ie.count;L++){const K=L*U;M===!0&&(r.fromBufferAttribute(ie,L),z[Y+K+0]=r.x,z[Y+K+1]=r.y,z[Y+K+2]=r.z,z[Y+K+3]=0),E===!0&&(r.fromBufferAttribute(k,L),z[Y+K+4]=r.x,z[Y+K+5]=r.y,z[Y+K+6]=r.z,z[Y+K+7]=0),x===!0&&(r.fromBufferAttribute(Q,L),z[Y+K+8]=r.x,z[Y+K+9]=r.y,z[Y+K+10]=r.z,z[Y+K+11]=Q.itemSize===4?r.w:1)}}v={count:_,texture:V,size:new Mt(I,P)},a.set(h,v),h.addEventListener("dispose",w)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(c,"morphTexture",u.morphTexture,n);else{let M=0;for(let x=0;x<p.length;x++)M+=p[x];const E=h.morphTargetsRelative?1:1-M;d.getUniforms().setValue(c,"morphTargetBaseInfluence",E),d.getUniforms().setValue(c,"morphTargetInfluences",p)}d.getUniforms().setValue(c,"morphTargetsTexture",v.texture,n),d.getUniforms().setValue(c,"morphTargetsTextureSize",v.size)}return{update:l}}function YT(c,e,n,a){let r=new WeakMap;function l(d){const p=a.render.frame,g=d.geometry,_=e.get(d,g);if(r.get(_)!==p&&(e.update(_),r.set(_,p)),d.isInstancedMesh&&(d.hasEventListener("dispose",h)===!1&&d.addEventListener("dispose",h),r.get(d)!==p&&(n.update(d.instanceMatrix,c.ARRAY_BUFFER),d.instanceColor!==null&&n.update(d.instanceColor,c.ARRAY_BUFFER),r.set(d,p))),d.isSkinnedMesh){const v=d.skeleton;r.get(v)!==p&&(v.update(),r.set(v,p))}return _}function u(){r=new WeakMap}function h(d){const p=d.target;p.removeEventListener("dispose",h),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:l,dispose:u}}class w_ extends Vn{constructor(e,n,a,r,l,u,h,d,p,g=Pr){if(g!==Pr&&g!==Gr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");a===void 0&&g===Pr&&(a=Fr),a===void 0&&g===Gr&&(a=Hr),super(null,r,l,u,h,d,g,a,p),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=h!==void 0?h:hi,this.minFilter=d!==void 0?d:hi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const R_=new Vn,C_=new w_(1,1);C_.compareFunction=h_;const D_=new g_,N_=new LM,U_=new b_,v0=[],_0=[],x0=new Float32Array(16),y0=new Float32Array(9),S0=new Float32Array(4);function Wr(c,e,n){const a=c[0];if(a<=0||a>0)return c;const r=e*n;let l=v0[r];if(l===void 0&&(l=new Float32Array(r),v0[r]=l),e!==0){a.toArray(l,0);for(let u=1,h=0;u!==e;++u)h+=n,c[u].toArray(l,h)}return l}function hn(c,e){if(c.length!==e.length)return!1;for(let n=0,a=c.length;n<a;n++)if(c[n]!==e[n])return!1;return!0}function dn(c,e){for(let n=0,a=e.length;n<a;n++)c[n]=e[n]}function ou(c,e){let n=_0[e];n===void 0&&(n=new Int32Array(e),_0[e]=n);for(let a=0;a!==e;++a)n[a]=c.allocateTextureUnit();return n}function KT(c,e){const n=this.cache;n[0]!==e&&(c.uniform1f(this.addr,e),n[0]=e)}function ZT(c,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(c.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(hn(n,e))return;c.uniform2fv(this.addr,e),dn(n,e)}}function QT(c,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(c.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(c.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(hn(n,e))return;c.uniform3fv(this.addr,e),dn(n,e)}}function JT(c,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(c.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(hn(n,e))return;c.uniform4fv(this.addr,e),dn(n,e)}}function $T(c,e){const n=this.cache,a=e.elements;if(a===void 0){if(hn(n,e))return;c.uniformMatrix2fv(this.addr,!1,e),dn(n,e)}else{if(hn(n,a))return;S0.set(a),c.uniformMatrix2fv(this.addr,!1,S0),dn(n,a)}}function eA(c,e){const n=this.cache,a=e.elements;if(a===void 0){if(hn(n,e))return;c.uniformMatrix3fv(this.addr,!1,e),dn(n,e)}else{if(hn(n,a))return;y0.set(a),c.uniformMatrix3fv(this.addr,!1,y0),dn(n,a)}}function tA(c,e){const n=this.cache,a=e.elements;if(a===void 0){if(hn(n,e))return;c.uniformMatrix4fv(this.addr,!1,e),dn(n,e)}else{if(hn(n,a))return;x0.set(a),c.uniformMatrix4fv(this.addr,!1,x0),dn(n,a)}}function nA(c,e){const n=this.cache;n[0]!==e&&(c.uniform1i(this.addr,e),n[0]=e)}function iA(c,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(c.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(hn(n,e))return;c.uniform2iv(this.addr,e),dn(n,e)}}function aA(c,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(c.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(hn(n,e))return;c.uniform3iv(this.addr,e),dn(n,e)}}function sA(c,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(c.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(hn(n,e))return;c.uniform4iv(this.addr,e),dn(n,e)}}function rA(c,e){const n=this.cache;n[0]!==e&&(c.uniform1ui(this.addr,e),n[0]=e)}function oA(c,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(c.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(hn(n,e))return;c.uniform2uiv(this.addr,e),dn(n,e)}}function lA(c,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(c.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(hn(n,e))return;c.uniform3uiv(this.addr,e),dn(n,e)}}function cA(c,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(c.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(hn(n,e))return;c.uniform4uiv(this.addr,e),dn(n,e)}}function uA(c,e,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(c.uniform1i(this.addr,r),a[0]=r);const l=this.type===c.SAMPLER_2D_SHADOW?C_:R_;n.setTexture2D(e||l,r)}function fA(c,e,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(c.uniform1i(this.addr,r),a[0]=r),n.setTexture3D(e||N_,r)}function hA(c,e,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(c.uniform1i(this.addr,r),a[0]=r),n.setTextureCube(e||U_,r)}function dA(c,e,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(c.uniform1i(this.addr,r),a[0]=r),n.setTexture2DArray(e||D_,r)}function pA(c){switch(c){case 5126:return KT;case 35664:return ZT;case 35665:return QT;case 35666:return JT;case 35674:return $T;case 35675:return eA;case 35676:return tA;case 5124:case 35670:return nA;case 35667:case 35671:return iA;case 35668:case 35672:return aA;case 35669:case 35673:return sA;case 5125:return rA;case 36294:return oA;case 36295:return lA;case 36296:return cA;case 35678:case 36198:case 36298:case 36306:case 35682:return uA;case 35679:case 36299:case 36307:return fA;case 35680:case 36300:case 36308:case 36293:return hA;case 36289:case 36303:case 36311:case 36292:return dA}}function mA(c,e){c.uniform1fv(this.addr,e)}function gA(c,e){const n=Wr(e,this.size,2);c.uniform2fv(this.addr,n)}function vA(c,e){const n=Wr(e,this.size,3);c.uniform3fv(this.addr,n)}function _A(c,e){const n=Wr(e,this.size,4);c.uniform4fv(this.addr,n)}function xA(c,e){const n=Wr(e,this.size,4);c.uniformMatrix2fv(this.addr,!1,n)}function yA(c,e){const n=Wr(e,this.size,9);c.uniformMatrix3fv(this.addr,!1,n)}function SA(c,e){const n=Wr(e,this.size,16);c.uniformMatrix4fv(this.addr,!1,n)}function MA(c,e){c.uniform1iv(this.addr,e)}function EA(c,e){c.uniform2iv(this.addr,e)}function bA(c,e){c.uniform3iv(this.addr,e)}function TA(c,e){c.uniform4iv(this.addr,e)}function AA(c,e){c.uniform1uiv(this.addr,e)}function wA(c,e){c.uniform2uiv(this.addr,e)}function RA(c,e){c.uniform3uiv(this.addr,e)}function CA(c,e){c.uniform4uiv(this.addr,e)}function DA(c,e,n){const a=this.cache,r=e.length,l=ou(n,r);hn(a,l)||(c.uniform1iv(this.addr,l),dn(a,l));for(let u=0;u!==r;++u)n.setTexture2D(e[u]||R_,l[u])}function NA(c,e,n){const a=this.cache,r=e.length,l=ou(n,r);hn(a,l)||(c.uniform1iv(this.addr,l),dn(a,l));for(let u=0;u!==r;++u)n.setTexture3D(e[u]||N_,l[u])}function UA(c,e,n){const a=this.cache,r=e.length,l=ou(n,r);hn(a,l)||(c.uniform1iv(this.addr,l),dn(a,l));for(let u=0;u!==r;++u)n.setTextureCube(e[u]||U_,l[u])}function LA(c,e,n){const a=this.cache,r=e.length,l=ou(n,r);hn(a,l)||(c.uniform1iv(this.addr,l),dn(a,l));for(let u=0;u!==r;++u)n.setTexture2DArray(e[u]||D_,l[u])}function OA(c){switch(c){case 5126:return mA;case 35664:return gA;case 35665:return vA;case 35666:return _A;case 35674:return xA;case 35675:return yA;case 35676:return SA;case 5124:case 35670:return MA;case 35667:case 35671:return EA;case 35668:case 35672:return bA;case 35669:case 35673:return TA;case 5125:return AA;case 36294:return wA;case 36295:return RA;case 36296:return CA;case 35678:case 36198:case 36298:case 36306:case 35682:return DA;case 35679:case 36299:case 36307:return NA;case 35680:case 36300:case 36308:case 36293:return UA;case 36289:case 36303:case 36311:case 36292:return LA}}class PA{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.setValue=pA(n.type)}}class zA{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=OA(n.type)}}class BA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,a){const r=this.seq;for(let l=0,u=r.length;l!==u;++l){const h=r[l];h.setValue(e,n[h.id],a)}}}const Jh=/(\w+)(\])?(\[|\.)?/g;function M0(c,e){c.seq.push(e),c.map[e.id]=e}function IA(c,e,n){const a=c.name,r=a.length;for(Jh.lastIndex=0;;){const l=Jh.exec(a),u=Jh.lastIndex;let h=l[1];const d=l[2]==="]",p=l[3];if(d&&(h=h|0),p===void 0||p==="["&&u+2===r){M0(n,p===void 0?new PA(h,c,e):new zA(h,c,e));break}else{let _=n.map[h];_===void 0&&(_=new BA(h),M0(n,_)),n=_}}}class qc{constructor(e,n){this.seq=[],this.map={};const a=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<a;++r){const l=e.getActiveUniform(n,r),u=e.getUniformLocation(n,l.name);IA(l,u,this)}}setValue(e,n,a,r){const l=this.map[n];l!==void 0&&l.setValue(e,a,r)}setOptional(e,n,a){const r=n[a];r!==void 0&&this.setValue(e,a,r)}static upload(e,n,a,r){for(let l=0,u=n.length;l!==u;++l){const h=n[l],d=a[h.id];d.needsUpdate!==!1&&h.setValue(e,d.value,r)}}static seqWithValue(e,n){const a=[];for(let r=0,l=e.length;r!==l;++r){const u=e[r];u.id in n&&a.push(u)}return a}}function E0(c,e,n){const a=c.createShader(e);return c.shaderSource(a,n),c.compileShader(a),a}const FA=37297;let HA=0;function GA(c,e){const n=c.split(`
`),a=[],r=Math.max(e-6,0),l=Math.min(e+6,n.length);for(let u=r;u<l;u++){const h=u+1;a.push(`${h===e?">":" "} ${h}: ${n[u]}`)}return a.join(`
`)}function kA(c){const e=Ut.getPrimaries(Ut.workingColorSpace),n=Ut.getPrimaries(c);let a;switch(e===n?a="":e===Qc&&n===Zc?a="LinearDisplayP3ToLinearSRGB":e===Zc&&n===Qc&&(a="LinearSRGBToLinearDisplayP3"),c){case ts:case su:return[a,"LinearTransferOETF"];case Li:case _d:return[a,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",c),[a,"LinearTransferOETF"]}}function b0(c,e,n){const a=c.getShaderParameter(e,c.COMPILE_STATUS),r=c.getShaderInfoLog(e).trim();if(a&&r==="")return"";const l=/ERROR: 0:(\d+)/.exec(r);if(l){const u=parseInt(l[1]);return n.toUpperCase()+`

`+r+`

`+GA(c.getShaderSource(e),u)}else return r}function VA(c,e){const n=kA(e);return`vec4 ${c}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function jA(c,e){let n;switch(e){case QS:n="Linear";break;case JS:n="Reinhard";break;case $S:n="OptimizedCineon";break;case eM:n="ACESFilmic";break;case nM:n="AgX";break;case iM:n="Neutral";break;case tM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+c+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function WA(c){return[c.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",c.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(nl).join(`
`)}function qA(c){const e=[];for(const n in c){const a=c[n];a!==!1&&e.push("#define "+n+" "+a)}return e.join(`
`)}function XA(c,e){const n={},a=c.getProgramParameter(e,c.ACTIVE_ATTRIBUTES);for(let r=0;r<a;r++){const l=c.getActiveAttrib(e,r),u=l.name;let h=1;l.type===c.FLOAT_MAT2&&(h=2),l.type===c.FLOAT_MAT3&&(h=3),l.type===c.FLOAT_MAT4&&(h=4),n[u]={type:l.type,location:c.getAttribLocation(e,u),locationSize:h}}return n}function nl(c){return c!==""}function T0(c,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return c.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function A0(c,e){return c.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const YA=/^[ \t]*#include +<([\w\d./]+)>/gm;function md(c){return c.replace(YA,ZA)}const KA=new Map;function ZA(c,e){let n=ot[e];if(n===void 0){const a=KA.get(e);if(a!==void 0)n=ot[a],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("Can not resolve #include <"+e+">")}return md(n)}const QA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function w0(c){return c.replace(QA,JA)}function JA(c,e,n,a){let r="";for(let l=parseInt(e);l<parseInt(n);l++)r+=a.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return r}function R0(c){let e=`precision ${c.precision} float;
	precision ${c.precision} int;
	precision ${c.precision} sampler2D;
	precision ${c.precision} samplerCube;
	precision ${c.precision} sampler3D;
	precision ${c.precision} sampler2DArray;
	precision ${c.precision} sampler2DShadow;
	precision ${c.precision} samplerCubeShadow;
	precision ${c.precision} sampler2DArrayShadow;
	precision ${c.precision} isampler2D;
	precision ${c.precision} isampler3D;
	precision ${c.precision} isamplerCube;
	precision ${c.precision} isampler2DArray;
	precision ${c.precision} usampler2D;
	precision ${c.precision} usampler3D;
	precision ${c.precision} usamplerCube;
	precision ${c.precision} usampler2DArray;
	`;return c.precision==="highp"?e+=`
#define HIGH_PRECISION`:c.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:c.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function $A(c){let e="SHADOWMAP_TYPE_BASIC";return c.shadowMapType===t_?e="SHADOWMAP_TYPE_PCF":c.shadowMapType===n_?e="SHADOWMAP_TYPE_PCF_SOFT":c.shadowMapType===fa&&(e="SHADOWMAP_TYPE_VSM"),e}function e1(c){let e="ENVMAP_TYPE_CUBE";if(c.envMap)switch(c.envMapMode){case Br:case Ir:e="ENVMAP_TYPE_CUBE";break;case iu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function t1(c){let e="ENVMAP_MODE_REFLECTION";if(c.envMap)switch(c.envMapMode){case Ir:e="ENVMAP_MODE_REFRACTION";break}return e}function n1(c){let e="ENVMAP_BLENDING_NONE";if(c.envMap)switch(c.combine){case i_:e="ENVMAP_BLENDING_MULTIPLY";break;case KS:e="ENVMAP_BLENDING_MIX";break;case ZS:e="ENVMAP_BLENDING_ADD";break}return e}function i1(c){const e=c.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function a1(c,e,n,a){const r=c.getContext(),l=n.defines;let u=n.vertexShader,h=n.fragmentShader;const d=$A(n),p=e1(n),g=t1(n),_=n1(n),v=i1(n),S=WA(n),M=qA(l),E=r.createProgram();let x,y,T=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(nl).join(`
`),x.length>0&&(x+=`
`),y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(nl).join(`
`),y.length>0&&(y+=`
`)):(x=[R0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+d:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(nl).join(`
`),y=[R0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+g:"",n.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+d:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Qa?"#define TONE_MAPPING":"",n.toneMapping!==Qa?ot.tonemapping_pars_fragment:"",n.toneMapping!==Qa?jA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,VA("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(nl).join(`
`)),u=md(u),u=T0(u,n),u=A0(u,n),h=md(h),h=T0(h,n),h=A0(h,n),u=w0(u),h=w0(h),n.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,x=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,y=["#define varying in",n.glslVersion===jv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===jv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const A=T+x+u,D=T+y+h,I=E0(r,r.VERTEX_SHADER,A),P=E0(r,r.FRAGMENT_SHADER,D);r.attachShader(E,I),r.attachShader(E,P),n.index0AttributeName!==void 0?r.bindAttribLocation(E,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function z(F){if(c.debug.checkShaderErrors){const ie=r.getProgramInfoLog(E).trim(),k=r.getShaderInfoLog(I).trim(),Q=r.getShaderInfoLog(P).trim();let Y=!0,L=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(Y=!1,typeof c.debug.onShaderError=="function")c.debug.onShaderError(r,E,I,P);else{const K=b0(r,I,"vertex"),j=b0(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+ie+`
`+K+`
`+j)}else ie!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ie):(k===""||Q==="")&&(L=!1);L&&(F.diagnostics={runnable:Y,programLog:ie,vertexShader:{log:k,prefix:x},fragmentShader:{log:Q,prefix:y}})}r.deleteShader(I),r.deleteShader(P),V=new qc(r,E),U=XA(r,E)}let V;this.getUniforms=function(){return V===void 0&&z(this),V};let U;this.getAttributes=function(){return U===void 0&&z(this),U};let w=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(E,FA)),w},this.destroy=function(){a.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=HA++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=I,this.fragmentShader=P,this}let s1=0;class r1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,a=e.fragmentShader,r=this._getShaderStage(n),l=this._getShaderStage(a),u=this._getShaderCacheForMaterial(e);return u.has(r)===!1&&(u.add(r),r.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let a=n.get(e);return a===void 0&&(a=new Set,n.set(e,a)),a}_getShaderStage(e){const n=this.shaderCache;let a=n.get(e);return a===void 0&&(a=new o1(e),n.set(e,a)),a}}class o1{constructor(e){this.id=s1++,this.code=e,this.usedTimes=0}}function l1(c,e,n,a,r,l,u){const h=new v_,d=new r1,p=new Set,g=[],_=r.logarithmicDepthBuffer,v=r.vertexTextures;let S=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(U){return p.add(U),U===0?"uv":`uv${U}`}function x(U,w,F,ie,k){const Q=ie.fog,Y=k.geometry,L=U.isMeshStandardMaterial?ie.environment:null,K=(U.isMeshStandardMaterial?n:e).get(U.envMap||L),j=K&&K.mapping===iu?K.image.height:null,he=M[U.type];U.precision!==null&&(S=r.getMaxPrecision(U.precision),S!==U.precision&&console.warn("THREE.WebGLProgram.getParameters:",U.precision,"not supported, using",S,"instead."));const B=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,$=B!==void 0?B.length:0;let oe=0;Y.morphAttributes.position!==void 0&&(oe=1),Y.morphAttributes.normal!==void 0&&(oe=2),Y.morphAttributes.color!==void 0&&(oe=3);let ye,ee,de,_e;if(he){const Et=Oi[he];ye=Et.vertexShader,ee=Et.fragmentShader}else ye=U.vertexShader,ee=U.fragmentShader,d.update(U),de=d.getVertexShaderID(U),_e=d.getFragmentShaderID(U);const Ae=c.getRenderTarget(),Fe=k.isInstancedMesh===!0,Je=k.isBatchedMesh===!0,pt=!!U.map,X=!!U.matcap,ft=!!K,ct=!!U.aoMap,zt=!!U.lightMap,Ye=!!U.bumpMap,xt=!!U.normalMap,$e=!!U.displacementMap,at=!!U.emissiveMap,Wt=!!U.metalnessMap,G=!!U.roughnessMap,N=U.anisotropy>0,fe=U.clearcoat>0,Se=U.dispersion>0,Me=U.iridescence>0,Ee=U.sheen>0,ke=U.transmission>0,Re=N&&!!U.anisotropyMap,De=fe&&!!U.clearcoatMap,qe=fe&&!!U.clearcoatNormalMap,Ce=fe&&!!U.clearcoatRoughnessMap,Ge=Me&&!!U.iridescenceMap,ht=Me&&!!U.iridescenceThicknessMap,Ke=Ee&&!!U.sheenColorMap,Ne=Ee&&!!U.sheenRoughnessMap,nt=!!U.specularMap,rt=!!U.specularColorMap,Bt=!!U.specularIntensityMap,q=ke&&!!U.transmissionMap,Oe=ke&&!!U.thicknessMap,me=!!U.gradientMap,xe=!!U.alphaMap,we=U.alphaTest>0,it=!!U.alphaHash,yt=!!U.extensions;let Vt=Qa;U.toneMapped&&(Ae===null||Ae.isXRRenderTarget===!0)&&(Vt=c.toneMapping);const Yt={shaderID:he,shaderType:U.type,shaderName:U.name,vertexShader:ye,fragmentShader:ee,defines:U.defines,customVertexShaderID:de,customFragmentShaderID:_e,isRawShaderMaterial:U.isRawShaderMaterial===!0,glslVersion:U.glslVersion,precision:S,batching:Je,batchingColor:Je&&k._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&k.instanceColor!==null,instancingMorph:Fe&&k.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:Ae===null?c.outputColorSpace:Ae.isXRRenderTarget===!0?Ae.texture.colorSpace:ts,alphaToCoverage:!!U.alphaToCoverage,map:pt,matcap:X,envMap:ft,envMapMode:ft&&K.mapping,envMapCubeUVHeight:j,aoMap:ct,lightMap:zt,bumpMap:Ye,normalMap:xt,displacementMap:v&&$e,emissiveMap:at,normalMapObjectSpace:xt&&U.normalMapType===vM,normalMapTangentSpace:xt&&U.normalMapType===f_,metalnessMap:Wt,roughnessMap:G,anisotropy:N,anisotropyMap:Re,clearcoat:fe,clearcoatMap:De,clearcoatNormalMap:qe,clearcoatRoughnessMap:Ce,dispersion:Se,iridescence:Me,iridescenceMap:Ge,iridescenceThicknessMap:ht,sheen:Ee,sheenColorMap:Ke,sheenRoughnessMap:Ne,specularMap:nt,specularColorMap:rt,specularIntensityMap:Bt,transmission:ke,transmissionMap:q,thicknessMap:Oe,gradientMap:me,opaque:U.transparent===!1&&U.blending===Or&&U.alphaToCoverage===!1,alphaMap:xe,alphaTest:we,alphaHash:it,combine:U.combine,mapUv:pt&&E(U.map.channel),aoMapUv:ct&&E(U.aoMap.channel),lightMapUv:zt&&E(U.lightMap.channel),bumpMapUv:Ye&&E(U.bumpMap.channel),normalMapUv:xt&&E(U.normalMap.channel),displacementMapUv:$e&&E(U.displacementMap.channel),emissiveMapUv:at&&E(U.emissiveMap.channel),metalnessMapUv:Wt&&E(U.metalnessMap.channel),roughnessMapUv:G&&E(U.roughnessMap.channel),anisotropyMapUv:Re&&E(U.anisotropyMap.channel),clearcoatMapUv:De&&E(U.clearcoatMap.channel),clearcoatNormalMapUv:qe&&E(U.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&E(U.clearcoatRoughnessMap.channel),iridescenceMapUv:Ge&&E(U.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&E(U.iridescenceThicknessMap.channel),sheenColorMapUv:Ke&&E(U.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&E(U.sheenRoughnessMap.channel),specularMapUv:nt&&E(U.specularMap.channel),specularColorMapUv:rt&&E(U.specularColorMap.channel),specularIntensityMapUv:Bt&&E(U.specularIntensityMap.channel),transmissionMapUv:q&&E(U.transmissionMap.channel),thicknessMapUv:Oe&&E(U.thicknessMap.channel),alphaMapUv:xe&&E(U.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(xt||N),vertexColors:U.vertexColors,vertexAlphas:U.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!Y.attributes.uv&&(pt||xe),fog:!!Q,useFog:U.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:U.flatShading===!0,sizeAttenuation:U.sizeAttenuation===!0,logarithmicDepthBuffer:_,skinning:k.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:oe,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:U.dithering,shadowMapEnabled:c.shadowMap.enabled&&F.length>0,shadowMapType:c.shadowMap.type,toneMapping:Vt,decodeVideoTexture:pt&&U.map.isVideoTexture===!0&&Ut.getTransfer(U.map.colorSpace)===kt,premultipliedAlpha:U.premultipliedAlpha,doubleSided:U.side===ha,flipSided:U.side===kn,useDepthPacking:U.depthPacking>=0,depthPacking:U.depthPacking||0,index0AttributeName:U.index0AttributeName,extensionClipCullDistance:yt&&U.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:yt&&U.extensions.multiDraw===!0&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:U.customProgramCacheKey()};return Yt.vertexUv1s=p.has(1),Yt.vertexUv2s=p.has(2),Yt.vertexUv3s=p.has(3),p.clear(),Yt}function y(U){const w=[];if(U.shaderID?w.push(U.shaderID):(w.push(U.customVertexShaderID),w.push(U.customFragmentShaderID)),U.defines!==void 0)for(const F in U.defines)w.push(F),w.push(U.defines[F]);return U.isRawShaderMaterial===!1&&(T(w,U),A(w,U),w.push(c.outputColorSpace)),w.push(U.customProgramCacheKey),w.join()}function T(U,w){U.push(w.precision),U.push(w.outputColorSpace),U.push(w.envMapMode),U.push(w.envMapCubeUVHeight),U.push(w.mapUv),U.push(w.alphaMapUv),U.push(w.lightMapUv),U.push(w.aoMapUv),U.push(w.bumpMapUv),U.push(w.normalMapUv),U.push(w.displacementMapUv),U.push(w.emissiveMapUv),U.push(w.metalnessMapUv),U.push(w.roughnessMapUv),U.push(w.anisotropyMapUv),U.push(w.clearcoatMapUv),U.push(w.clearcoatNormalMapUv),U.push(w.clearcoatRoughnessMapUv),U.push(w.iridescenceMapUv),U.push(w.iridescenceThicknessMapUv),U.push(w.sheenColorMapUv),U.push(w.sheenRoughnessMapUv),U.push(w.specularMapUv),U.push(w.specularColorMapUv),U.push(w.specularIntensityMapUv),U.push(w.transmissionMapUv),U.push(w.thicknessMapUv),U.push(w.combine),U.push(w.fogExp2),U.push(w.sizeAttenuation),U.push(w.morphTargetsCount),U.push(w.morphAttributeCount),U.push(w.numDirLights),U.push(w.numPointLights),U.push(w.numSpotLights),U.push(w.numSpotLightMaps),U.push(w.numHemiLights),U.push(w.numRectAreaLights),U.push(w.numDirLightShadows),U.push(w.numPointLightShadows),U.push(w.numSpotLightShadows),U.push(w.numSpotLightShadowsWithMaps),U.push(w.numLightProbes),U.push(w.shadowMapType),U.push(w.toneMapping),U.push(w.numClippingPlanes),U.push(w.numClipIntersection),U.push(w.depthPacking)}function A(U,w){h.disableAll(),w.supportsVertexTextures&&h.enable(0),w.instancing&&h.enable(1),w.instancingColor&&h.enable(2),w.instancingMorph&&h.enable(3),w.matcap&&h.enable(4),w.envMap&&h.enable(5),w.normalMapObjectSpace&&h.enable(6),w.normalMapTangentSpace&&h.enable(7),w.clearcoat&&h.enable(8),w.iridescence&&h.enable(9),w.alphaTest&&h.enable(10),w.vertexColors&&h.enable(11),w.vertexAlphas&&h.enable(12),w.vertexUv1s&&h.enable(13),w.vertexUv2s&&h.enable(14),w.vertexUv3s&&h.enable(15),w.vertexTangents&&h.enable(16),w.anisotropy&&h.enable(17),w.alphaHash&&h.enable(18),w.batching&&h.enable(19),w.dispersion&&h.enable(20),w.batchingColor&&h.enable(21),U.push(h.mask),h.disableAll(),w.fog&&h.enable(0),w.useFog&&h.enable(1),w.flatShading&&h.enable(2),w.logarithmicDepthBuffer&&h.enable(3),w.skinning&&h.enable(4),w.morphTargets&&h.enable(5),w.morphNormals&&h.enable(6),w.morphColors&&h.enable(7),w.premultipliedAlpha&&h.enable(8),w.shadowMapEnabled&&h.enable(9),w.doubleSided&&h.enable(10),w.flipSided&&h.enable(11),w.useDepthPacking&&h.enable(12),w.dithering&&h.enable(13),w.transmission&&h.enable(14),w.sheen&&h.enable(15),w.opaque&&h.enable(16),w.pointsUvs&&h.enable(17),w.decodeVideoTexture&&h.enable(18),w.alphaToCoverage&&h.enable(19),U.push(h.mask)}function D(U){const w=M[U.type];let F;if(w){const ie=Oi[w];F=qM.clone(ie.uniforms)}else F=U.uniforms;return F}function I(U,w){let F;for(let ie=0,k=g.length;ie<k;ie++){const Q=g[ie];if(Q.cacheKey===w){F=Q,++F.usedTimes;break}}return F===void 0&&(F=new a1(c,w,U,l),g.push(F)),F}function P(U){if(--U.usedTimes===0){const w=g.indexOf(U);g[w]=g[g.length-1],g.pop(),U.destroy()}}function z(U){d.remove(U)}function V(){d.dispose()}return{getParameters:x,getProgramCacheKey:y,getUniforms:D,acquireProgram:I,releaseProgram:P,releaseShaderCache:z,programs:g,dispose:V}}function c1(){let c=new WeakMap;function e(l){let u=c.get(l);return u===void 0&&(u={},c.set(l,u)),u}function n(l){c.delete(l)}function a(l,u,h){c.get(l)[u]=h}function r(){c=new WeakMap}return{get:e,remove:n,update:a,dispose:r}}function u1(c,e){return c.groupOrder!==e.groupOrder?c.groupOrder-e.groupOrder:c.renderOrder!==e.renderOrder?c.renderOrder-e.renderOrder:c.material.id!==e.material.id?c.material.id-e.material.id:c.z!==e.z?c.z-e.z:c.id-e.id}function C0(c,e){return c.groupOrder!==e.groupOrder?c.groupOrder-e.groupOrder:c.renderOrder!==e.renderOrder?c.renderOrder-e.renderOrder:c.z!==e.z?e.z-c.z:c.id-e.id}function D0(){const c=[];let e=0;const n=[],a=[],r=[];function l(){e=0,n.length=0,a.length=0,r.length=0}function u(_,v,S,M,E,x){let y=c[e];return y===void 0?(y={id:_.id,object:_,geometry:v,material:S,groupOrder:M,renderOrder:_.renderOrder,z:E,group:x},c[e]=y):(y.id=_.id,y.object=_,y.geometry=v,y.material=S,y.groupOrder=M,y.renderOrder=_.renderOrder,y.z=E,y.group=x),e++,y}function h(_,v,S,M,E,x){const y=u(_,v,S,M,E,x);S.transmission>0?a.push(y):S.transparent===!0?r.push(y):n.push(y)}function d(_,v,S,M,E,x){const y=u(_,v,S,M,E,x);S.transmission>0?a.unshift(y):S.transparent===!0?r.unshift(y):n.unshift(y)}function p(_,v){n.length>1&&n.sort(_||u1),a.length>1&&a.sort(v||C0),r.length>1&&r.sort(v||C0)}function g(){for(let _=e,v=c.length;_<v;_++){const S=c[_];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:a,transparent:r,init:l,push:h,unshift:d,finish:g,sort:p}}function f1(){let c=new WeakMap;function e(a,r){const l=c.get(a);let u;return l===void 0?(u=new D0,c.set(a,[u])):r>=l.length?(u=new D0,l.push(u)):u=l[r],u}function n(){c=new WeakMap}return{get:e,dispose:n}}function h1(){const c={};return{get:function(e){if(c[e.id]!==void 0)return c[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ue,color:new At};break;case"SpotLight":n={position:new ue,direction:new ue,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ue,color:new At,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ue,skyColor:new At,groundColor:new At};break;case"RectAreaLight":n={color:new At,position:new ue,halfWidth:new ue,halfHeight:new ue};break}return c[e.id]=n,n}}}function d1(){const c={};return{get:function(e){if(c[e.id]!==void 0)return c[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return c[e.id]=n,n}}}let p1=0;function m1(c,e){return(e.castShadow?2:0)-(c.castShadow?2:0)+(e.map?1:0)-(c.map?1:0)}function g1(c){const e=new h1,n=d1(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)a.probe.push(new ue);const r=new ue,l=new $t,u=new $t;function h(p){let g=0,_=0,v=0;for(let U=0;U<9;U++)a.probe[U].set(0,0,0);let S=0,M=0,E=0,x=0,y=0,T=0,A=0,D=0,I=0,P=0,z=0;p.sort(m1);for(let U=0,w=p.length;U<w;U++){const F=p[U],ie=F.color,k=F.intensity,Q=F.distance,Y=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)g+=ie.r*k,_+=ie.g*k,v+=ie.b*k;else if(F.isLightProbe){for(let L=0;L<9;L++)a.probe[L].addScaledVector(F.sh.coefficients[L],k);z++}else if(F.isDirectionalLight){const L=e.get(F);if(L.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const K=F.shadow,j=n.get(F);j.shadowBias=K.bias,j.shadowNormalBias=K.normalBias,j.shadowRadius=K.radius,j.shadowMapSize=K.mapSize,a.directionalShadow[S]=j,a.directionalShadowMap[S]=Y,a.directionalShadowMatrix[S]=F.shadow.matrix,T++}a.directional[S]=L,S++}else if(F.isSpotLight){const L=e.get(F);L.position.setFromMatrixPosition(F.matrixWorld),L.color.copy(ie).multiplyScalar(k),L.distance=Q,L.coneCos=Math.cos(F.angle),L.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),L.decay=F.decay,a.spot[E]=L;const K=F.shadow;if(F.map&&(a.spotLightMap[I]=F.map,I++,K.updateMatrices(F),F.castShadow&&P++),a.spotLightMatrix[E]=K.matrix,F.castShadow){const j=n.get(F);j.shadowBias=K.bias,j.shadowNormalBias=K.normalBias,j.shadowRadius=K.radius,j.shadowMapSize=K.mapSize,a.spotShadow[E]=j,a.spotShadowMap[E]=Y,D++}E++}else if(F.isRectAreaLight){const L=e.get(F);L.color.copy(ie).multiplyScalar(k),L.halfWidth.set(F.width*.5,0,0),L.halfHeight.set(0,F.height*.5,0),a.rectArea[x]=L,x++}else if(F.isPointLight){const L=e.get(F);if(L.color.copy(F.color).multiplyScalar(F.intensity),L.distance=F.distance,L.decay=F.decay,F.castShadow){const K=F.shadow,j=n.get(F);j.shadowBias=K.bias,j.shadowNormalBias=K.normalBias,j.shadowRadius=K.radius,j.shadowMapSize=K.mapSize,j.shadowCameraNear=K.camera.near,j.shadowCameraFar=K.camera.far,a.pointShadow[M]=j,a.pointShadowMap[M]=Y,a.pointShadowMatrix[M]=F.shadow.matrix,A++}a.point[M]=L,M++}else if(F.isHemisphereLight){const L=e.get(F);L.skyColor.copy(F.color).multiplyScalar(k),L.groundColor.copy(F.groundColor).multiplyScalar(k),a.hemi[y]=L,y++}}x>0&&(c.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Le.LTC_FLOAT_1,a.rectAreaLTC2=Le.LTC_FLOAT_2):(a.rectAreaLTC1=Le.LTC_HALF_1,a.rectAreaLTC2=Le.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=_,a.ambient[2]=v;const V=a.hash;(V.directionalLength!==S||V.pointLength!==M||V.spotLength!==E||V.rectAreaLength!==x||V.hemiLength!==y||V.numDirectionalShadows!==T||V.numPointShadows!==A||V.numSpotShadows!==D||V.numSpotMaps!==I||V.numLightProbes!==z)&&(a.directional.length=S,a.spot.length=E,a.rectArea.length=x,a.point.length=M,a.hemi.length=y,a.directionalShadow.length=T,a.directionalShadowMap.length=T,a.pointShadow.length=A,a.pointShadowMap.length=A,a.spotShadow.length=D,a.spotShadowMap.length=D,a.directionalShadowMatrix.length=T,a.pointShadowMatrix.length=A,a.spotLightMatrix.length=D+I-P,a.spotLightMap.length=I,a.numSpotLightShadowsWithMaps=P,a.numLightProbes=z,V.directionalLength=S,V.pointLength=M,V.spotLength=E,V.rectAreaLength=x,V.hemiLength=y,V.numDirectionalShadows=T,V.numPointShadows=A,V.numSpotShadows=D,V.numSpotMaps=I,V.numLightProbes=z,a.version=p1++)}function d(p,g){let _=0,v=0,S=0,M=0,E=0;const x=g.matrixWorldInverse;for(let y=0,T=p.length;y<T;y++){const A=p[y];if(A.isDirectionalLight){const D=a.directional[_];D.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),D.direction.sub(r),D.direction.transformDirection(x),_++}else if(A.isSpotLight){const D=a.spot[S];D.position.setFromMatrixPosition(A.matrixWorld),D.position.applyMatrix4(x),D.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),D.direction.sub(r),D.direction.transformDirection(x),S++}else if(A.isRectAreaLight){const D=a.rectArea[M];D.position.setFromMatrixPosition(A.matrixWorld),D.position.applyMatrix4(x),u.identity(),l.copy(A.matrixWorld),l.premultiply(x),u.extractRotation(l),D.halfWidth.set(A.width*.5,0,0),D.halfHeight.set(0,A.height*.5,0),D.halfWidth.applyMatrix4(u),D.halfHeight.applyMatrix4(u),M++}else if(A.isPointLight){const D=a.point[v];D.position.setFromMatrixPosition(A.matrixWorld),D.position.applyMatrix4(x),v++}else if(A.isHemisphereLight){const D=a.hemi[E];D.direction.setFromMatrixPosition(A.matrixWorld),D.direction.transformDirection(x),E++}}}return{setup:h,setupView:d,state:a}}function N0(c){const e=new g1(c),n=[],a=[];function r(g){p.camera=g,n.length=0,a.length=0}function l(g){n.push(g)}function u(g){a.push(g)}function h(){e.setup(n)}function d(g){e.setupView(n,g)}const p={lightsArray:n,shadowsArray:a,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:p,setupLights:h,setupLightsView:d,pushLight:l,pushShadow:u}}function v1(c){let e=new WeakMap;function n(r,l=0){const u=e.get(r);let h;return u===void 0?(h=new N0(c),e.set(r,[h])):l>=u.length?(h=new N0(c),u.push(h)):h=u[l],h}function a(){e=new WeakMap}return{get:n,dispose:a}}class _1 extends ll{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class x1 extends ll{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const y1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,S1=`uniform sampler2D shadow_pass;
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
}`;function M1(c,e,n){let a=new yd;const r=new Mt,l=new Mt,u=new _n,h=new _1({depthPacking:gM}),d=new x1,p={},g=n.maxTextureSize,_={[Ja]:kn,[kn]:Ja,[ha]:ha},v=new es({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:y1,fragmentShader:S1}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const M=new ns;M.setAttribute("position",new Bi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new di(M,v),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=t_;let y=this.type;this.render=function(P,z,V){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||P.length===0)return;const U=c.getRenderTarget(),w=c.getActiveCubeFace(),F=c.getActiveMipmapLevel(),ie=c.state;ie.setBlending(Za),ie.buffers.color.setClear(1,1,1,1),ie.buffers.depth.setTest(!0),ie.setScissorTest(!1);const k=y!==fa&&this.type===fa,Q=y===fa&&this.type!==fa;for(let Y=0,L=P.length;Y<L;Y++){const K=P[Y],j=K.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);const he=j.getFrameExtents();if(r.multiply(he),l.copy(j.mapSize),(r.x>g||r.y>g)&&(r.x>g&&(l.x=Math.floor(g/he.x),r.x=l.x*he.x,j.mapSize.x=l.x),r.y>g&&(l.y=Math.floor(g/he.y),r.y=l.y*he.y,j.mapSize.y=l.y)),j.map===null||k===!0||Q===!0){const $=this.type!==fa?{minFilter:hi,magFilter:hi}:{};j.map!==null&&j.map.dispose(),j.map=new Ls(r.x,r.y,$),j.map.texture.name=K.name+".shadowMap",j.camera.updateProjectionMatrix()}c.setRenderTarget(j.map),c.clear();const B=j.getViewportCount();for(let $=0;$<B;$++){const oe=j.getViewport($);u.set(l.x*oe.x,l.y*oe.y,l.x*oe.z,l.y*oe.w),ie.viewport(u),j.updateMatrices(K,$),a=j.getFrustum(),D(z,V,j.camera,K,this.type)}j.isPointLightShadow!==!0&&this.type===fa&&T(j,V),j.needsUpdate=!1}y=this.type,x.needsUpdate=!1,c.setRenderTarget(U,w,F)};function T(P,z){const V=e.update(E);v.defines.VSM_SAMPLES!==P.blurSamples&&(v.defines.VSM_SAMPLES=P.blurSamples,S.defines.VSM_SAMPLES=P.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Ls(r.x,r.y)),v.uniforms.shadow_pass.value=P.map.texture,v.uniforms.resolution.value=P.mapSize,v.uniforms.radius.value=P.radius,c.setRenderTarget(P.mapPass),c.clear(),c.renderBufferDirect(z,null,V,v,E,null),S.uniforms.shadow_pass.value=P.mapPass.texture,S.uniforms.resolution.value=P.mapSize,S.uniforms.radius.value=P.radius,c.setRenderTarget(P.map),c.clear(),c.renderBufferDirect(z,null,V,S,E,null)}function A(P,z,V,U){let w=null;const F=V.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(F!==void 0)w=F;else if(w=V.isPointLight===!0?d:h,c.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0){const ie=w.uuid,k=z.uuid;let Q=p[ie];Q===void 0&&(Q={},p[ie]=Q);let Y=Q[k];Y===void 0&&(Y=w.clone(),Q[k]=Y,z.addEventListener("dispose",I)),w=Y}if(w.visible=z.visible,w.wireframe=z.wireframe,U===fa?w.side=z.shadowSide!==null?z.shadowSide:z.side:w.side=z.shadowSide!==null?z.shadowSide:_[z.side],w.alphaMap=z.alphaMap,w.alphaTest=z.alphaTest,w.map=z.map,w.clipShadows=z.clipShadows,w.clippingPlanes=z.clippingPlanes,w.clipIntersection=z.clipIntersection,w.displacementMap=z.displacementMap,w.displacementScale=z.displacementScale,w.displacementBias=z.displacementBias,w.wireframeLinewidth=z.wireframeLinewidth,w.linewidth=z.linewidth,V.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const ie=c.properties.get(w);ie.light=V}return w}function D(P,z,V,U,w){if(P.visible===!1)return;if(P.layers.test(z.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&w===fa)&&(!P.frustumCulled||a.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,P.matrixWorld);const k=e.update(P),Q=P.material;if(Array.isArray(Q)){const Y=k.groups;for(let L=0,K=Y.length;L<K;L++){const j=Y[L],he=Q[j.materialIndex];if(he&&he.visible){const B=A(P,he,U,w);P.onBeforeShadow(c,P,z,V,k,B,j),c.renderBufferDirect(V,null,k,B,P,j),P.onAfterShadow(c,P,z,V,k,B,j)}}}else if(Q.visible){const Y=A(P,Q,U,w);P.onBeforeShadow(c,P,z,V,k,Y,null),c.renderBufferDirect(V,null,k,Y,P,null),P.onAfterShadow(c,P,z,V,k,Y,null)}}const ie=P.children;for(let k=0,Q=ie.length;k<Q;k++)D(ie[k],z,V,U,w)}function I(P){P.target.removeEventListener("dispose",I);for(const V in p){const U=p[V],w=P.target.uuid;w in U&&(U[w].dispose(),delete U[w])}}}function E1(c){function e(){let q=!1;const Oe=new _n;let me=null;const xe=new _n(0,0,0,0);return{setMask:function(we){me!==we&&!q&&(c.colorMask(we,we,we,we),me=we)},setLocked:function(we){q=we},setClear:function(we,it,yt,Vt,Yt){Yt===!0&&(we*=Vt,it*=Vt,yt*=Vt),Oe.set(we,it,yt,Vt),xe.equals(Oe)===!1&&(c.clearColor(we,it,yt,Vt),xe.copy(Oe))},reset:function(){q=!1,me=null,xe.set(-1,0,0,0)}}}function n(){let q=!1,Oe=null,me=null,xe=null;return{setTest:function(we){we?_e(c.DEPTH_TEST):Ae(c.DEPTH_TEST)},setMask:function(we){Oe!==we&&!q&&(c.depthMask(we),Oe=we)},setFunc:function(we){if(me!==we){switch(we){case kS:c.depthFunc(c.NEVER);break;case VS:c.depthFunc(c.ALWAYS);break;case jS:c.depthFunc(c.LESS);break;case Xc:c.depthFunc(c.LEQUAL);break;case WS:c.depthFunc(c.EQUAL);break;case qS:c.depthFunc(c.GEQUAL);break;case XS:c.depthFunc(c.GREATER);break;case YS:c.depthFunc(c.NOTEQUAL);break;default:c.depthFunc(c.LEQUAL)}me=we}},setLocked:function(we){q=we},setClear:function(we){xe!==we&&(c.clearDepth(we),xe=we)},reset:function(){q=!1,Oe=null,me=null,xe=null}}}function a(){let q=!1,Oe=null,me=null,xe=null,we=null,it=null,yt=null,Vt=null,Yt=null;return{setTest:function(Et){q||(Et?_e(c.STENCIL_TEST):Ae(c.STENCIL_TEST))},setMask:function(Et){Oe!==Et&&!q&&(c.stencilMask(Et),Oe=Et)},setFunc:function(Et,jn,ti){(me!==Et||xe!==jn||we!==ti)&&(c.stencilFunc(Et,jn,ti),me=Et,xe=jn,we=ti)},setOp:function(Et,jn,ti){(it!==Et||yt!==jn||Vt!==ti)&&(c.stencilOp(Et,jn,ti),it=Et,yt=jn,Vt=ti)},setLocked:function(Et){q=Et},setClear:function(Et){Yt!==Et&&(c.clearStencil(Et),Yt=Et)},reset:function(){q=!1,Oe=null,me=null,xe=null,we=null,it=null,yt=null,Vt=null,Yt=null}}}const r=new e,l=new n,u=new a,h=new WeakMap,d=new WeakMap;let p={},g={},_=new WeakMap,v=[],S=null,M=!1,E=null,x=null,y=null,T=null,A=null,D=null,I=null,P=new At(0,0,0),z=0,V=!1,U=null,w=null,F=null,ie=null,k=null;const Q=c.getParameter(c.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,L=0;const K=c.getParameter(c.VERSION);K.indexOf("WebGL")!==-1?(L=parseFloat(/^WebGL (\d)/.exec(K)[1]),Y=L>=1):K.indexOf("OpenGL ES")!==-1&&(L=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),Y=L>=2);let j=null,he={};const B=c.getParameter(c.SCISSOR_BOX),$=c.getParameter(c.VIEWPORT),oe=new _n().fromArray(B),ye=new _n().fromArray($);function ee(q,Oe,me,xe){const we=new Uint8Array(4),it=c.createTexture();c.bindTexture(q,it),c.texParameteri(q,c.TEXTURE_MIN_FILTER,c.NEAREST),c.texParameteri(q,c.TEXTURE_MAG_FILTER,c.NEAREST);for(let yt=0;yt<me;yt++)q===c.TEXTURE_3D||q===c.TEXTURE_2D_ARRAY?c.texImage3D(Oe,0,c.RGBA,1,1,xe,0,c.RGBA,c.UNSIGNED_BYTE,we):c.texImage2D(Oe+yt,0,c.RGBA,1,1,0,c.RGBA,c.UNSIGNED_BYTE,we);return it}const de={};de[c.TEXTURE_2D]=ee(c.TEXTURE_2D,c.TEXTURE_2D,1),de[c.TEXTURE_CUBE_MAP]=ee(c.TEXTURE_CUBE_MAP,c.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[c.TEXTURE_2D_ARRAY]=ee(c.TEXTURE_2D_ARRAY,c.TEXTURE_2D_ARRAY,1,1),de[c.TEXTURE_3D]=ee(c.TEXTURE_3D,c.TEXTURE_3D,1,1),r.setClear(0,0,0,1),l.setClear(1),u.setClear(0),_e(c.DEPTH_TEST),l.setFunc(Xc),Ye(!1),xt(hv),_e(c.CULL_FACE),ct(Za);function _e(q){p[q]!==!0&&(c.enable(q),p[q]=!0)}function Ae(q){p[q]!==!1&&(c.disable(q),p[q]=!1)}function Fe(q,Oe){return g[q]!==Oe?(c.bindFramebuffer(q,Oe),g[q]=Oe,q===c.DRAW_FRAMEBUFFER&&(g[c.FRAMEBUFFER]=Oe),q===c.FRAMEBUFFER&&(g[c.DRAW_FRAMEBUFFER]=Oe),!0):!1}function Je(q,Oe){let me=v,xe=!1;if(q){me=_.get(Oe),me===void 0&&(me=[],_.set(Oe,me));const we=q.textures;if(me.length!==we.length||me[0]!==c.COLOR_ATTACHMENT0){for(let it=0,yt=we.length;it<yt;it++)me[it]=c.COLOR_ATTACHMENT0+it;me.length=we.length,xe=!0}}else me[0]!==c.BACK&&(me[0]=c.BACK,xe=!0);xe&&c.drawBuffers(me)}function pt(q){return S!==q?(c.useProgram(q),S=q,!0):!1}const X={[Rs]:c.FUNC_ADD,[TS]:c.FUNC_SUBTRACT,[AS]:c.FUNC_REVERSE_SUBTRACT};X[wS]=c.MIN,X[RS]=c.MAX;const ft={[CS]:c.ZERO,[DS]:c.ONE,[NS]:c.SRC_COLOR,[ld]:c.SRC_ALPHA,[BS]:c.SRC_ALPHA_SATURATE,[PS]:c.DST_COLOR,[LS]:c.DST_ALPHA,[US]:c.ONE_MINUS_SRC_COLOR,[cd]:c.ONE_MINUS_SRC_ALPHA,[zS]:c.ONE_MINUS_DST_COLOR,[OS]:c.ONE_MINUS_DST_ALPHA,[IS]:c.CONSTANT_COLOR,[FS]:c.ONE_MINUS_CONSTANT_COLOR,[HS]:c.CONSTANT_ALPHA,[GS]:c.ONE_MINUS_CONSTANT_ALPHA};function ct(q,Oe,me,xe,we,it,yt,Vt,Yt,Et){if(q===Za){M===!0&&(Ae(c.BLEND),M=!1);return}if(M===!1&&(_e(c.BLEND),M=!0),q!==bS){if(q!==E||Et!==V){if((x!==Rs||A!==Rs)&&(c.blendEquation(c.FUNC_ADD),x=Rs,A=Rs),Et)switch(q){case Or:c.blendFuncSeparate(c.ONE,c.ONE_MINUS_SRC_ALPHA,c.ONE,c.ONE_MINUS_SRC_ALPHA);break;case dv:c.blendFunc(c.ONE,c.ONE);break;case pv:c.blendFuncSeparate(c.ZERO,c.ONE_MINUS_SRC_COLOR,c.ZERO,c.ONE);break;case mv:c.blendFuncSeparate(c.ZERO,c.SRC_COLOR,c.ZERO,c.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case Or:c.blendFuncSeparate(c.SRC_ALPHA,c.ONE_MINUS_SRC_ALPHA,c.ONE,c.ONE_MINUS_SRC_ALPHA);break;case dv:c.blendFunc(c.SRC_ALPHA,c.ONE);break;case pv:c.blendFuncSeparate(c.ZERO,c.ONE_MINUS_SRC_COLOR,c.ZERO,c.ONE);break;case mv:c.blendFunc(c.ZERO,c.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}y=null,T=null,D=null,I=null,P.set(0,0,0),z=0,E=q,V=Et}return}we=we||Oe,it=it||me,yt=yt||xe,(Oe!==x||we!==A)&&(c.blendEquationSeparate(X[Oe],X[we]),x=Oe,A=we),(me!==y||xe!==T||it!==D||yt!==I)&&(c.blendFuncSeparate(ft[me],ft[xe],ft[it],ft[yt]),y=me,T=xe,D=it,I=yt),(Vt.equals(P)===!1||Yt!==z)&&(c.blendColor(Vt.r,Vt.g,Vt.b,Yt),P.copy(Vt),z=Yt),E=q,V=!1}function zt(q,Oe){q.side===ha?Ae(c.CULL_FACE):_e(c.CULL_FACE);let me=q.side===kn;Oe&&(me=!me),Ye(me),q.blending===Or&&q.transparent===!1?ct(Za):ct(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),l.setFunc(q.depthFunc),l.setTest(q.depthTest),l.setMask(q.depthWrite),r.setMask(q.colorWrite);const xe=q.stencilWrite;u.setTest(xe),xe&&(u.setMask(q.stencilWriteMask),u.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),u.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),at(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?_e(c.SAMPLE_ALPHA_TO_COVERAGE):Ae(c.SAMPLE_ALPHA_TO_COVERAGE)}function Ye(q){U!==q&&(q?c.frontFace(c.CW):c.frontFace(c.CCW),U=q)}function xt(q){q!==MS?(_e(c.CULL_FACE),q!==w&&(q===hv?c.cullFace(c.BACK):q===ES?c.cullFace(c.FRONT):c.cullFace(c.FRONT_AND_BACK))):Ae(c.CULL_FACE),w=q}function $e(q){q!==F&&(Y&&c.lineWidth(q),F=q)}function at(q,Oe,me){q?(_e(c.POLYGON_OFFSET_FILL),(ie!==Oe||k!==me)&&(c.polygonOffset(Oe,me),ie=Oe,k=me)):Ae(c.POLYGON_OFFSET_FILL)}function Wt(q){q?_e(c.SCISSOR_TEST):Ae(c.SCISSOR_TEST)}function G(q){q===void 0&&(q=c.TEXTURE0+Q-1),j!==q&&(c.activeTexture(q),j=q)}function N(q,Oe,me){me===void 0&&(j===null?me=c.TEXTURE0+Q-1:me=j);let xe=he[me];xe===void 0&&(xe={type:void 0,texture:void 0},he[me]=xe),(xe.type!==q||xe.texture!==Oe)&&(j!==me&&(c.activeTexture(me),j=me),c.bindTexture(q,Oe||de[q]),xe.type=q,xe.texture=Oe)}function fe(){const q=he[j];q!==void 0&&q.type!==void 0&&(c.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function Se(){try{c.compressedTexImage2D.apply(c,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Me(){try{c.compressedTexImage3D.apply(c,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ee(){try{c.texSubImage2D.apply(c,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ke(){try{c.texSubImage3D.apply(c,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Re(){try{c.compressedTexSubImage2D.apply(c,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function De(){try{c.compressedTexSubImage3D.apply(c,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function qe(){try{c.texStorage2D.apply(c,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ce(){try{c.texStorage3D.apply(c,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ge(){try{c.texImage2D.apply(c,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ht(){try{c.texImage3D.apply(c,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ke(q){oe.equals(q)===!1&&(c.scissor(q.x,q.y,q.z,q.w),oe.copy(q))}function Ne(q){ye.equals(q)===!1&&(c.viewport(q.x,q.y,q.z,q.w),ye.copy(q))}function nt(q,Oe){let me=d.get(Oe);me===void 0&&(me=new WeakMap,d.set(Oe,me));let xe=me.get(q);xe===void 0&&(xe=c.getUniformBlockIndex(Oe,q.name),me.set(q,xe))}function rt(q,Oe){const xe=d.get(Oe).get(q);h.get(Oe)!==xe&&(c.uniformBlockBinding(Oe,xe,q.__bindingPointIndex),h.set(Oe,xe))}function Bt(){c.disable(c.BLEND),c.disable(c.CULL_FACE),c.disable(c.DEPTH_TEST),c.disable(c.POLYGON_OFFSET_FILL),c.disable(c.SCISSOR_TEST),c.disable(c.STENCIL_TEST),c.disable(c.SAMPLE_ALPHA_TO_COVERAGE),c.blendEquation(c.FUNC_ADD),c.blendFunc(c.ONE,c.ZERO),c.blendFuncSeparate(c.ONE,c.ZERO,c.ONE,c.ZERO),c.blendColor(0,0,0,0),c.colorMask(!0,!0,!0,!0),c.clearColor(0,0,0,0),c.depthMask(!0),c.depthFunc(c.LESS),c.clearDepth(1),c.stencilMask(4294967295),c.stencilFunc(c.ALWAYS,0,4294967295),c.stencilOp(c.KEEP,c.KEEP,c.KEEP),c.clearStencil(0),c.cullFace(c.BACK),c.frontFace(c.CCW),c.polygonOffset(0,0),c.activeTexture(c.TEXTURE0),c.bindFramebuffer(c.FRAMEBUFFER,null),c.bindFramebuffer(c.DRAW_FRAMEBUFFER,null),c.bindFramebuffer(c.READ_FRAMEBUFFER,null),c.useProgram(null),c.lineWidth(1),c.scissor(0,0,c.canvas.width,c.canvas.height),c.viewport(0,0,c.canvas.width,c.canvas.height),p={},j=null,he={},g={},_=new WeakMap,v=[],S=null,M=!1,E=null,x=null,y=null,T=null,A=null,D=null,I=null,P=new At(0,0,0),z=0,V=!1,U=null,w=null,F=null,ie=null,k=null,oe.set(0,0,c.canvas.width,c.canvas.height),ye.set(0,0,c.canvas.width,c.canvas.height),r.reset(),l.reset(),u.reset()}return{buffers:{color:r,depth:l,stencil:u},enable:_e,disable:Ae,bindFramebuffer:Fe,drawBuffers:Je,useProgram:pt,setBlending:ct,setMaterial:zt,setFlipSided:Ye,setCullFace:xt,setLineWidth:$e,setPolygonOffset:at,setScissorTest:Wt,activeTexture:G,bindTexture:N,unbindTexture:fe,compressedTexImage2D:Se,compressedTexImage3D:Me,texImage2D:Ge,texImage3D:ht,updateUBOMapping:nt,uniformBlockBinding:rt,texStorage2D:qe,texStorage3D:Ce,texSubImage2D:Ee,texSubImage3D:ke,compressedTexSubImage2D:Re,compressedTexSubImage3D:De,scissor:Ke,viewport:Ne,reset:Bt}}function b1(c,e,n,a,r,l,u){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Mt,g=new WeakMap;let _;const v=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(G,N){return S?new OffscreenCanvas(G,N):$c("canvas")}function E(G,N,fe){let Se=1;const Me=Wt(G);if((Me.width>fe||Me.height>fe)&&(Se=fe/Math.max(Me.width,Me.height)),Se<1)if(typeof HTMLImageElement<"u"&&G instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&G instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&G instanceof ImageBitmap||typeof VideoFrame<"u"&&G instanceof VideoFrame){const Ee=Math.floor(Se*Me.width),ke=Math.floor(Se*Me.height);_===void 0&&(_=M(Ee,ke));const Re=N?M(Ee,ke):_;return Re.width=Ee,Re.height=ke,Re.getContext("2d").drawImage(G,0,0,Ee,ke),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Me.width+"x"+Me.height+") to ("+Ee+"x"+ke+")."),Re}else return"data"in G&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Me.width+"x"+Me.height+")."),G;return G}function x(G){return G.generateMipmaps&&G.minFilter!==hi&&G.minFilter!==Mi}function y(G){c.generateMipmap(G)}function T(G,N,fe,Se,Me=!1){if(G!==null){if(c[G]!==void 0)return c[G];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+G+"'")}let Ee=N;if(N===c.RED&&(fe===c.FLOAT&&(Ee=c.R32F),fe===c.HALF_FLOAT&&(Ee=c.R16F),fe===c.UNSIGNED_BYTE&&(Ee=c.R8)),N===c.RED_INTEGER&&(fe===c.UNSIGNED_BYTE&&(Ee=c.R8UI),fe===c.UNSIGNED_SHORT&&(Ee=c.R16UI),fe===c.UNSIGNED_INT&&(Ee=c.R32UI),fe===c.BYTE&&(Ee=c.R8I),fe===c.SHORT&&(Ee=c.R16I),fe===c.INT&&(Ee=c.R32I)),N===c.RG&&(fe===c.FLOAT&&(Ee=c.RG32F),fe===c.HALF_FLOAT&&(Ee=c.RG16F),fe===c.UNSIGNED_BYTE&&(Ee=c.RG8)),N===c.RG_INTEGER&&(fe===c.UNSIGNED_BYTE&&(Ee=c.RG8UI),fe===c.UNSIGNED_SHORT&&(Ee=c.RG16UI),fe===c.UNSIGNED_INT&&(Ee=c.RG32UI),fe===c.BYTE&&(Ee=c.RG8I),fe===c.SHORT&&(Ee=c.RG16I),fe===c.INT&&(Ee=c.RG32I)),N===c.RGB&&fe===c.UNSIGNED_INT_5_9_9_9_REV&&(Ee=c.RGB9_E5),N===c.RGBA){const ke=Me?Kc:Ut.getTransfer(Se);fe===c.FLOAT&&(Ee=c.RGBA32F),fe===c.HALF_FLOAT&&(Ee=c.RGBA16F),fe===c.UNSIGNED_BYTE&&(Ee=ke===kt?c.SRGB8_ALPHA8:c.RGBA8),fe===c.UNSIGNED_SHORT_4_4_4_4&&(Ee=c.RGBA4),fe===c.UNSIGNED_SHORT_5_5_5_1&&(Ee=c.RGB5_A1)}return(Ee===c.R16F||Ee===c.R32F||Ee===c.RG16F||Ee===c.RG32F||Ee===c.RGBA16F||Ee===c.RGBA32F)&&e.get("EXT_color_buffer_float"),Ee}function A(G,N){let fe;return G?N===null||N===Fr||N===Hr?fe=c.DEPTH24_STENCIL8:N===Ka?fe=c.DEPTH32F_STENCIL8:N===Yc&&(fe=c.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):N===null||N===Fr||N===Hr?fe=c.DEPTH_COMPONENT24:N===Ka?fe=c.DEPTH_COMPONENT32F:N===Yc&&(fe=c.DEPTH_COMPONENT16),fe}function D(G,N){return x(G)===!0||G.isFramebufferTexture&&G.minFilter!==hi&&G.minFilter!==Mi?Math.log2(Math.max(N.width,N.height))+1:G.mipmaps!==void 0&&G.mipmaps.length>0?G.mipmaps.length:G.isCompressedTexture&&Array.isArray(G.image)?N.mipmaps.length:1}function I(G){const N=G.target;N.removeEventListener("dispose",I),z(N),N.isVideoTexture&&g.delete(N)}function P(G){const N=G.target;N.removeEventListener("dispose",P),U(N)}function z(G){const N=a.get(G);if(N.__webglInit===void 0)return;const fe=G.source,Se=v.get(fe);if(Se){const Me=Se[N.__cacheKey];Me.usedTimes--,Me.usedTimes===0&&V(G),Object.keys(Se).length===0&&v.delete(fe)}a.remove(G)}function V(G){const N=a.get(G);c.deleteTexture(N.__webglTexture);const fe=G.source,Se=v.get(fe);delete Se[N.__cacheKey],u.memory.textures--}function U(G){const N=a.get(G);if(G.depthTexture&&G.depthTexture.dispose(),G.isWebGLCubeRenderTarget)for(let Se=0;Se<6;Se++){if(Array.isArray(N.__webglFramebuffer[Se]))for(let Me=0;Me<N.__webglFramebuffer[Se].length;Me++)c.deleteFramebuffer(N.__webglFramebuffer[Se][Me]);else c.deleteFramebuffer(N.__webglFramebuffer[Se]);N.__webglDepthbuffer&&c.deleteRenderbuffer(N.__webglDepthbuffer[Se])}else{if(Array.isArray(N.__webglFramebuffer))for(let Se=0;Se<N.__webglFramebuffer.length;Se++)c.deleteFramebuffer(N.__webglFramebuffer[Se]);else c.deleteFramebuffer(N.__webglFramebuffer);if(N.__webglDepthbuffer&&c.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&c.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let Se=0;Se<N.__webglColorRenderbuffer.length;Se++)N.__webglColorRenderbuffer[Se]&&c.deleteRenderbuffer(N.__webglColorRenderbuffer[Se]);N.__webglDepthRenderbuffer&&c.deleteRenderbuffer(N.__webglDepthRenderbuffer)}const fe=G.textures;for(let Se=0,Me=fe.length;Se<Me;Se++){const Ee=a.get(fe[Se]);Ee.__webglTexture&&(c.deleteTexture(Ee.__webglTexture),u.memory.textures--),a.remove(fe[Se])}a.remove(G)}let w=0;function F(){w=0}function ie(){const G=w;return G>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+G+" texture units while this GPU supports only "+r.maxTextures),w+=1,G}function k(G){const N=[];return N.push(G.wrapS),N.push(G.wrapT),N.push(G.wrapR||0),N.push(G.magFilter),N.push(G.minFilter),N.push(G.anisotropy),N.push(G.internalFormat),N.push(G.format),N.push(G.type),N.push(G.generateMipmaps),N.push(G.premultiplyAlpha),N.push(G.flipY),N.push(G.unpackAlignment),N.push(G.colorSpace),N.join()}function Q(G,N){const fe=a.get(G);if(G.isVideoTexture&&$e(G),G.isRenderTargetTexture===!1&&G.version>0&&fe.__version!==G.version){const Se=G.image;if(Se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ye(fe,G,N);return}}n.bindTexture(c.TEXTURE_2D,fe.__webglTexture,c.TEXTURE0+N)}function Y(G,N){const fe=a.get(G);if(G.version>0&&fe.__version!==G.version){ye(fe,G,N);return}n.bindTexture(c.TEXTURE_2D_ARRAY,fe.__webglTexture,c.TEXTURE0+N)}function L(G,N){const fe=a.get(G);if(G.version>0&&fe.__version!==G.version){ye(fe,G,N);return}n.bindTexture(c.TEXTURE_3D,fe.__webglTexture,c.TEXTURE0+N)}function K(G,N){const fe=a.get(G);if(G.version>0&&fe.__version!==G.version){ee(fe,G,N);return}n.bindTexture(c.TEXTURE_CUBE_MAP,fe.__webglTexture,c.TEXTURE0+N)}const j={[hd]:c.REPEAT,[Ns]:c.CLAMP_TO_EDGE,[dd]:c.MIRRORED_REPEAT},he={[hi]:c.NEAREST,[aM]:c.NEAREST_MIPMAP_NEAREST,[_c]:c.NEAREST_MIPMAP_LINEAR,[Mi]:c.LINEAR,[Sh]:c.LINEAR_MIPMAP_NEAREST,[Us]:c.LINEAR_MIPMAP_LINEAR},B={[_M]:c.NEVER,[bM]:c.ALWAYS,[xM]:c.LESS,[h_]:c.LEQUAL,[yM]:c.EQUAL,[EM]:c.GEQUAL,[SM]:c.GREATER,[MM]:c.NOTEQUAL};function $(G,N){if(N.type===Ka&&e.has("OES_texture_float_linear")===!1&&(N.magFilter===Mi||N.magFilter===Sh||N.magFilter===_c||N.magFilter===Us||N.minFilter===Mi||N.minFilter===Sh||N.minFilter===_c||N.minFilter===Us)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),c.texParameteri(G,c.TEXTURE_WRAP_S,j[N.wrapS]),c.texParameteri(G,c.TEXTURE_WRAP_T,j[N.wrapT]),(G===c.TEXTURE_3D||G===c.TEXTURE_2D_ARRAY)&&c.texParameteri(G,c.TEXTURE_WRAP_R,j[N.wrapR]),c.texParameteri(G,c.TEXTURE_MAG_FILTER,he[N.magFilter]),c.texParameteri(G,c.TEXTURE_MIN_FILTER,he[N.minFilter]),N.compareFunction&&(c.texParameteri(G,c.TEXTURE_COMPARE_MODE,c.COMPARE_REF_TO_TEXTURE),c.texParameteri(G,c.TEXTURE_COMPARE_FUNC,B[N.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(N.magFilter===hi||N.minFilter!==_c&&N.minFilter!==Us||N.type===Ka&&e.has("OES_texture_float_linear")===!1)return;if(N.anisotropy>1||a.get(N).__currentAnisotropy){const fe=e.get("EXT_texture_filter_anisotropic");c.texParameterf(G,fe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(N.anisotropy,r.getMaxAnisotropy())),a.get(N).__currentAnisotropy=N.anisotropy}}}function oe(G,N){let fe=!1;G.__webglInit===void 0&&(G.__webglInit=!0,N.addEventListener("dispose",I));const Se=N.source;let Me=v.get(Se);Me===void 0&&(Me={},v.set(Se,Me));const Ee=k(N);if(Ee!==G.__cacheKey){Me[Ee]===void 0&&(Me[Ee]={texture:c.createTexture(),usedTimes:0},u.memory.textures++,fe=!0),Me[Ee].usedTimes++;const ke=Me[G.__cacheKey];ke!==void 0&&(Me[G.__cacheKey].usedTimes--,ke.usedTimes===0&&V(N)),G.__cacheKey=Ee,G.__webglTexture=Me[Ee].texture}return fe}function ye(G,N,fe){let Se=c.TEXTURE_2D;(N.isDataArrayTexture||N.isCompressedArrayTexture)&&(Se=c.TEXTURE_2D_ARRAY),N.isData3DTexture&&(Se=c.TEXTURE_3D);const Me=oe(G,N),Ee=N.source;n.bindTexture(Se,G.__webglTexture,c.TEXTURE0+fe);const ke=a.get(Ee);if(Ee.version!==ke.__version||Me===!0){n.activeTexture(c.TEXTURE0+fe);const Re=Ut.getPrimaries(Ut.workingColorSpace),De=N.colorSpace===Ya?null:Ut.getPrimaries(N.colorSpace),qe=N.colorSpace===Ya||Re===De?c.NONE:c.BROWSER_DEFAULT_WEBGL;c.pixelStorei(c.UNPACK_FLIP_Y_WEBGL,N.flipY),c.pixelStorei(c.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),c.pixelStorei(c.UNPACK_ALIGNMENT,N.unpackAlignment),c.pixelStorei(c.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let Ce=E(N.image,!1,r.maxTextureSize);Ce=at(N,Ce);const Ge=l.convert(N.format,N.colorSpace),ht=l.convert(N.type);let Ke=T(N.internalFormat,Ge,ht,N.colorSpace,N.isVideoTexture);$(Se,N);let Ne;const nt=N.mipmaps,rt=N.isVideoTexture!==!0,Bt=ke.__version===void 0||Me===!0,q=Ee.dataReady,Oe=D(N,Ce);if(N.isDepthTexture)Ke=A(N.format===Gr,N.type),Bt&&(rt?n.texStorage2D(c.TEXTURE_2D,1,Ke,Ce.width,Ce.height):n.texImage2D(c.TEXTURE_2D,0,Ke,Ce.width,Ce.height,0,Ge,ht,null));else if(N.isDataTexture)if(nt.length>0){rt&&Bt&&n.texStorage2D(c.TEXTURE_2D,Oe,Ke,nt[0].width,nt[0].height);for(let me=0,xe=nt.length;me<xe;me++)Ne=nt[me],rt?q&&n.texSubImage2D(c.TEXTURE_2D,me,0,0,Ne.width,Ne.height,Ge,ht,Ne.data):n.texImage2D(c.TEXTURE_2D,me,Ke,Ne.width,Ne.height,0,Ge,ht,Ne.data);N.generateMipmaps=!1}else rt?(Bt&&n.texStorage2D(c.TEXTURE_2D,Oe,Ke,Ce.width,Ce.height),q&&n.texSubImage2D(c.TEXTURE_2D,0,0,0,Ce.width,Ce.height,Ge,ht,Ce.data)):n.texImage2D(c.TEXTURE_2D,0,Ke,Ce.width,Ce.height,0,Ge,ht,Ce.data);else if(N.isCompressedTexture)if(N.isCompressedArrayTexture){rt&&Bt&&n.texStorage3D(c.TEXTURE_2D_ARRAY,Oe,Ke,nt[0].width,nt[0].height,Ce.depth);for(let me=0,xe=nt.length;me<xe;me++)if(Ne=nt[me],N.format!==zi)if(Ge!==null)if(rt){if(q)if(N.layerUpdates.size>0){for(const we of N.layerUpdates){const it=Ne.width*Ne.height;n.compressedTexSubImage3D(c.TEXTURE_2D_ARRAY,me,0,0,we,Ne.width,Ne.height,1,Ge,Ne.data.slice(it*we,it*(we+1)),0,0)}N.clearLayerUpdates()}else n.compressedTexSubImage3D(c.TEXTURE_2D_ARRAY,me,0,0,0,Ne.width,Ne.height,Ce.depth,Ge,Ne.data,0,0)}else n.compressedTexImage3D(c.TEXTURE_2D_ARRAY,me,Ke,Ne.width,Ne.height,Ce.depth,0,Ne.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?q&&n.texSubImage3D(c.TEXTURE_2D_ARRAY,me,0,0,0,Ne.width,Ne.height,Ce.depth,Ge,ht,Ne.data):n.texImage3D(c.TEXTURE_2D_ARRAY,me,Ke,Ne.width,Ne.height,Ce.depth,0,Ge,ht,Ne.data)}else{rt&&Bt&&n.texStorage2D(c.TEXTURE_2D,Oe,Ke,nt[0].width,nt[0].height);for(let me=0,xe=nt.length;me<xe;me++)Ne=nt[me],N.format!==zi?Ge!==null?rt?q&&n.compressedTexSubImage2D(c.TEXTURE_2D,me,0,0,Ne.width,Ne.height,Ge,Ne.data):n.compressedTexImage2D(c.TEXTURE_2D,me,Ke,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?q&&n.texSubImage2D(c.TEXTURE_2D,me,0,0,Ne.width,Ne.height,Ge,ht,Ne.data):n.texImage2D(c.TEXTURE_2D,me,Ke,Ne.width,Ne.height,0,Ge,ht,Ne.data)}else if(N.isDataArrayTexture)if(rt){if(Bt&&n.texStorage3D(c.TEXTURE_2D_ARRAY,Oe,Ke,Ce.width,Ce.height,Ce.depth),q)if(N.layerUpdates.size>0){let me;switch(ht){case c.UNSIGNED_BYTE:switch(Ge){case c.ALPHA:me=1;break;case c.LUMINANCE:me=1;break;case c.LUMINANCE_ALPHA:me=2;break;case c.RGB:me=3;break;case c.RGBA:me=4;break;default:throw new Error(`Unknown texel size for format ${Ge}.`)}break;case c.UNSIGNED_SHORT_4_4_4_4:case c.UNSIGNED_SHORT_5_5_5_1:case c.UNSIGNED_SHORT_5_6_5:me=1;break;default:throw new Error(`Unknown texel size for type ${ht}.`)}const xe=Ce.width*Ce.height*me;for(const we of N.layerUpdates)n.texSubImage3D(c.TEXTURE_2D_ARRAY,0,0,0,we,Ce.width,Ce.height,1,Ge,ht,Ce.data.slice(xe*we,xe*(we+1)));N.clearLayerUpdates()}else n.texSubImage3D(c.TEXTURE_2D_ARRAY,0,0,0,0,Ce.width,Ce.height,Ce.depth,Ge,ht,Ce.data)}else n.texImage3D(c.TEXTURE_2D_ARRAY,0,Ke,Ce.width,Ce.height,Ce.depth,0,Ge,ht,Ce.data);else if(N.isData3DTexture)rt?(Bt&&n.texStorage3D(c.TEXTURE_3D,Oe,Ke,Ce.width,Ce.height,Ce.depth),q&&n.texSubImage3D(c.TEXTURE_3D,0,0,0,0,Ce.width,Ce.height,Ce.depth,Ge,ht,Ce.data)):n.texImage3D(c.TEXTURE_3D,0,Ke,Ce.width,Ce.height,Ce.depth,0,Ge,ht,Ce.data);else if(N.isFramebufferTexture){if(Bt)if(rt)n.texStorage2D(c.TEXTURE_2D,Oe,Ke,Ce.width,Ce.height);else{let me=Ce.width,xe=Ce.height;for(let we=0;we<Oe;we++)n.texImage2D(c.TEXTURE_2D,we,Ke,me,xe,0,Ge,ht,null),me>>=1,xe>>=1}}else if(nt.length>0){if(rt&&Bt){const me=Wt(nt[0]);n.texStorage2D(c.TEXTURE_2D,Oe,Ke,me.width,me.height)}for(let me=0,xe=nt.length;me<xe;me++)Ne=nt[me],rt?q&&n.texSubImage2D(c.TEXTURE_2D,me,0,0,Ge,ht,Ne):n.texImage2D(c.TEXTURE_2D,me,Ke,Ge,ht,Ne);N.generateMipmaps=!1}else if(rt){if(Bt){const me=Wt(Ce);n.texStorage2D(c.TEXTURE_2D,Oe,Ke,me.width,me.height)}q&&n.texSubImage2D(c.TEXTURE_2D,0,0,0,Ge,ht,Ce)}else n.texImage2D(c.TEXTURE_2D,0,Ke,Ge,ht,Ce);x(N)&&y(Se),ke.__version=Ee.version,N.onUpdate&&N.onUpdate(N)}G.__version=N.version}function ee(G,N,fe){if(N.image.length!==6)return;const Se=oe(G,N),Me=N.source;n.bindTexture(c.TEXTURE_CUBE_MAP,G.__webglTexture,c.TEXTURE0+fe);const Ee=a.get(Me);if(Me.version!==Ee.__version||Se===!0){n.activeTexture(c.TEXTURE0+fe);const ke=Ut.getPrimaries(Ut.workingColorSpace),Re=N.colorSpace===Ya?null:Ut.getPrimaries(N.colorSpace),De=N.colorSpace===Ya||ke===Re?c.NONE:c.BROWSER_DEFAULT_WEBGL;c.pixelStorei(c.UNPACK_FLIP_Y_WEBGL,N.flipY),c.pixelStorei(c.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),c.pixelStorei(c.UNPACK_ALIGNMENT,N.unpackAlignment),c.pixelStorei(c.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);const qe=N.isCompressedTexture||N.image[0].isCompressedTexture,Ce=N.image[0]&&N.image[0].isDataTexture,Ge=[];for(let xe=0;xe<6;xe++)!qe&&!Ce?Ge[xe]=E(N.image[xe],!0,r.maxCubemapSize):Ge[xe]=Ce?N.image[xe].image:N.image[xe],Ge[xe]=at(N,Ge[xe]);const ht=Ge[0],Ke=l.convert(N.format,N.colorSpace),Ne=l.convert(N.type),nt=T(N.internalFormat,Ke,Ne,N.colorSpace),rt=N.isVideoTexture!==!0,Bt=Ee.__version===void 0||Se===!0,q=Me.dataReady;let Oe=D(N,ht);$(c.TEXTURE_CUBE_MAP,N);let me;if(qe){rt&&Bt&&n.texStorage2D(c.TEXTURE_CUBE_MAP,Oe,nt,ht.width,ht.height);for(let xe=0;xe<6;xe++){me=Ge[xe].mipmaps;for(let we=0;we<me.length;we++){const it=me[we];N.format!==zi?Ke!==null?rt?q&&n.compressedTexSubImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+xe,we,0,0,it.width,it.height,Ke,it.data):n.compressedTexImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+xe,we,nt,it.width,it.height,0,it.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):rt?q&&n.texSubImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+xe,we,0,0,it.width,it.height,Ke,Ne,it.data):n.texImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+xe,we,nt,it.width,it.height,0,Ke,Ne,it.data)}}}else{if(me=N.mipmaps,rt&&Bt){me.length>0&&Oe++;const xe=Wt(Ge[0]);n.texStorage2D(c.TEXTURE_CUBE_MAP,Oe,nt,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(Ce){rt?q&&n.texSubImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Ge[xe].width,Ge[xe].height,Ke,Ne,Ge[xe].data):n.texImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,nt,Ge[xe].width,Ge[xe].height,0,Ke,Ne,Ge[xe].data);for(let we=0;we<me.length;we++){const yt=me[we].image[xe].image;rt?q&&n.texSubImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+xe,we+1,0,0,yt.width,yt.height,Ke,Ne,yt.data):n.texImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+xe,we+1,nt,yt.width,yt.height,0,Ke,Ne,yt.data)}}else{rt?q&&n.texSubImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Ke,Ne,Ge[xe]):n.texImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,nt,Ke,Ne,Ge[xe]);for(let we=0;we<me.length;we++){const it=me[we];rt?q&&n.texSubImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+xe,we+1,0,0,Ke,Ne,it.image[xe]):n.texImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+xe,we+1,nt,Ke,Ne,it.image[xe])}}}x(N)&&y(c.TEXTURE_CUBE_MAP),Ee.__version=Me.version,N.onUpdate&&N.onUpdate(N)}G.__version=N.version}function de(G,N,fe,Se,Me,Ee){const ke=l.convert(fe.format,fe.colorSpace),Re=l.convert(fe.type),De=T(fe.internalFormat,ke,Re,fe.colorSpace);if(!a.get(N).__hasExternalTextures){const Ce=Math.max(1,N.width>>Ee),Ge=Math.max(1,N.height>>Ee);Me===c.TEXTURE_3D||Me===c.TEXTURE_2D_ARRAY?n.texImage3D(Me,Ee,De,Ce,Ge,N.depth,0,ke,Re,null):n.texImage2D(Me,Ee,De,Ce,Ge,0,ke,Re,null)}n.bindFramebuffer(c.FRAMEBUFFER,G),xt(N)?h.framebufferTexture2DMultisampleEXT(c.FRAMEBUFFER,Se,Me,a.get(fe).__webglTexture,0,Ye(N)):(Me===c.TEXTURE_2D||Me>=c.TEXTURE_CUBE_MAP_POSITIVE_X&&Me<=c.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&c.framebufferTexture2D(c.FRAMEBUFFER,Se,Me,a.get(fe).__webglTexture,Ee),n.bindFramebuffer(c.FRAMEBUFFER,null)}function _e(G,N,fe){if(c.bindRenderbuffer(c.RENDERBUFFER,G),N.depthBuffer){const Se=N.depthTexture,Me=Se&&Se.isDepthTexture?Se.type:null,Ee=A(N.stencilBuffer,Me),ke=N.stencilBuffer?c.DEPTH_STENCIL_ATTACHMENT:c.DEPTH_ATTACHMENT,Re=Ye(N);xt(N)?h.renderbufferStorageMultisampleEXT(c.RENDERBUFFER,Re,Ee,N.width,N.height):fe?c.renderbufferStorageMultisample(c.RENDERBUFFER,Re,Ee,N.width,N.height):c.renderbufferStorage(c.RENDERBUFFER,Ee,N.width,N.height),c.framebufferRenderbuffer(c.FRAMEBUFFER,ke,c.RENDERBUFFER,G)}else{const Se=N.textures;for(let Me=0;Me<Se.length;Me++){const Ee=Se[Me],ke=l.convert(Ee.format,Ee.colorSpace),Re=l.convert(Ee.type),De=T(Ee.internalFormat,ke,Re,Ee.colorSpace),qe=Ye(N);fe&&xt(N)===!1?c.renderbufferStorageMultisample(c.RENDERBUFFER,qe,De,N.width,N.height):xt(N)?h.renderbufferStorageMultisampleEXT(c.RENDERBUFFER,qe,De,N.width,N.height):c.renderbufferStorage(c.RENDERBUFFER,De,N.width,N.height)}}c.bindRenderbuffer(c.RENDERBUFFER,null)}function Ae(G,N){if(N&&N.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(c.FRAMEBUFFER,G),!(N.depthTexture&&N.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!a.get(N.depthTexture).__webglTexture||N.depthTexture.image.width!==N.width||N.depthTexture.image.height!==N.height)&&(N.depthTexture.image.width=N.width,N.depthTexture.image.height=N.height,N.depthTexture.needsUpdate=!0),Q(N.depthTexture,0);const Se=a.get(N.depthTexture).__webglTexture,Me=Ye(N);if(N.depthTexture.format===Pr)xt(N)?h.framebufferTexture2DMultisampleEXT(c.FRAMEBUFFER,c.DEPTH_ATTACHMENT,c.TEXTURE_2D,Se,0,Me):c.framebufferTexture2D(c.FRAMEBUFFER,c.DEPTH_ATTACHMENT,c.TEXTURE_2D,Se,0);else if(N.depthTexture.format===Gr)xt(N)?h.framebufferTexture2DMultisampleEXT(c.FRAMEBUFFER,c.DEPTH_STENCIL_ATTACHMENT,c.TEXTURE_2D,Se,0,Me):c.framebufferTexture2D(c.FRAMEBUFFER,c.DEPTH_STENCIL_ATTACHMENT,c.TEXTURE_2D,Se,0);else throw new Error("Unknown depthTexture format")}function Fe(G){const N=a.get(G),fe=G.isWebGLCubeRenderTarget===!0;if(G.depthTexture&&!N.__autoAllocateDepthBuffer){if(fe)throw new Error("target.depthTexture not supported in Cube render targets");Ae(N.__webglFramebuffer,G)}else if(fe){N.__webglDepthbuffer=[];for(let Se=0;Se<6;Se++)n.bindFramebuffer(c.FRAMEBUFFER,N.__webglFramebuffer[Se]),N.__webglDepthbuffer[Se]=c.createRenderbuffer(),_e(N.__webglDepthbuffer[Se],G,!1)}else n.bindFramebuffer(c.FRAMEBUFFER,N.__webglFramebuffer),N.__webglDepthbuffer=c.createRenderbuffer(),_e(N.__webglDepthbuffer,G,!1);n.bindFramebuffer(c.FRAMEBUFFER,null)}function Je(G,N,fe){const Se=a.get(G);N!==void 0&&de(Se.__webglFramebuffer,G,G.texture,c.COLOR_ATTACHMENT0,c.TEXTURE_2D,0),fe!==void 0&&Fe(G)}function pt(G){const N=G.texture,fe=a.get(G),Se=a.get(N);G.addEventListener("dispose",P);const Me=G.textures,Ee=G.isWebGLCubeRenderTarget===!0,ke=Me.length>1;if(ke||(Se.__webglTexture===void 0&&(Se.__webglTexture=c.createTexture()),Se.__version=N.version,u.memory.textures++),Ee){fe.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(N.mipmaps&&N.mipmaps.length>0){fe.__webglFramebuffer[Re]=[];for(let De=0;De<N.mipmaps.length;De++)fe.__webglFramebuffer[Re][De]=c.createFramebuffer()}else fe.__webglFramebuffer[Re]=c.createFramebuffer()}else{if(N.mipmaps&&N.mipmaps.length>0){fe.__webglFramebuffer=[];for(let Re=0;Re<N.mipmaps.length;Re++)fe.__webglFramebuffer[Re]=c.createFramebuffer()}else fe.__webglFramebuffer=c.createFramebuffer();if(ke)for(let Re=0,De=Me.length;Re<De;Re++){const qe=a.get(Me[Re]);qe.__webglTexture===void 0&&(qe.__webglTexture=c.createTexture(),u.memory.textures++)}if(G.samples>0&&xt(G)===!1){fe.__webglMultisampledFramebuffer=c.createFramebuffer(),fe.__webglColorRenderbuffer=[],n.bindFramebuffer(c.FRAMEBUFFER,fe.__webglMultisampledFramebuffer);for(let Re=0;Re<Me.length;Re++){const De=Me[Re];fe.__webglColorRenderbuffer[Re]=c.createRenderbuffer(),c.bindRenderbuffer(c.RENDERBUFFER,fe.__webglColorRenderbuffer[Re]);const qe=l.convert(De.format,De.colorSpace),Ce=l.convert(De.type),Ge=T(De.internalFormat,qe,Ce,De.colorSpace,G.isXRRenderTarget===!0),ht=Ye(G);c.renderbufferStorageMultisample(c.RENDERBUFFER,ht,Ge,G.width,G.height),c.framebufferRenderbuffer(c.FRAMEBUFFER,c.COLOR_ATTACHMENT0+Re,c.RENDERBUFFER,fe.__webglColorRenderbuffer[Re])}c.bindRenderbuffer(c.RENDERBUFFER,null),G.depthBuffer&&(fe.__webglDepthRenderbuffer=c.createRenderbuffer(),_e(fe.__webglDepthRenderbuffer,G,!0)),n.bindFramebuffer(c.FRAMEBUFFER,null)}}if(Ee){n.bindTexture(c.TEXTURE_CUBE_MAP,Se.__webglTexture),$(c.TEXTURE_CUBE_MAP,N);for(let Re=0;Re<6;Re++)if(N.mipmaps&&N.mipmaps.length>0)for(let De=0;De<N.mipmaps.length;De++)de(fe.__webglFramebuffer[Re][De],G,N,c.COLOR_ATTACHMENT0,c.TEXTURE_CUBE_MAP_POSITIVE_X+Re,De);else de(fe.__webglFramebuffer[Re],G,N,c.COLOR_ATTACHMENT0,c.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);x(N)&&y(c.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ke){for(let Re=0,De=Me.length;Re<De;Re++){const qe=Me[Re],Ce=a.get(qe);n.bindTexture(c.TEXTURE_2D,Ce.__webglTexture),$(c.TEXTURE_2D,qe),de(fe.__webglFramebuffer,G,qe,c.COLOR_ATTACHMENT0+Re,c.TEXTURE_2D,0),x(qe)&&y(c.TEXTURE_2D)}n.unbindTexture()}else{let Re=c.TEXTURE_2D;if((G.isWebGL3DRenderTarget||G.isWebGLArrayRenderTarget)&&(Re=G.isWebGL3DRenderTarget?c.TEXTURE_3D:c.TEXTURE_2D_ARRAY),n.bindTexture(Re,Se.__webglTexture),$(Re,N),N.mipmaps&&N.mipmaps.length>0)for(let De=0;De<N.mipmaps.length;De++)de(fe.__webglFramebuffer[De],G,N,c.COLOR_ATTACHMENT0,Re,De);else de(fe.__webglFramebuffer,G,N,c.COLOR_ATTACHMENT0,Re,0);x(N)&&y(Re),n.unbindTexture()}G.depthBuffer&&Fe(G)}function X(G){const N=G.textures;for(let fe=0,Se=N.length;fe<Se;fe++){const Me=N[fe];if(x(Me)){const Ee=G.isWebGLCubeRenderTarget?c.TEXTURE_CUBE_MAP:c.TEXTURE_2D,ke=a.get(Me).__webglTexture;n.bindTexture(Ee,ke),y(Ee),n.unbindTexture()}}}const ft=[],ct=[];function zt(G){if(G.samples>0){if(xt(G)===!1){const N=G.textures,fe=G.width,Se=G.height;let Me=c.COLOR_BUFFER_BIT;const Ee=G.stencilBuffer?c.DEPTH_STENCIL_ATTACHMENT:c.DEPTH_ATTACHMENT,ke=a.get(G),Re=N.length>1;if(Re)for(let De=0;De<N.length;De++)n.bindFramebuffer(c.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),c.framebufferRenderbuffer(c.FRAMEBUFFER,c.COLOR_ATTACHMENT0+De,c.RENDERBUFFER,null),n.bindFramebuffer(c.FRAMEBUFFER,ke.__webglFramebuffer),c.framebufferTexture2D(c.DRAW_FRAMEBUFFER,c.COLOR_ATTACHMENT0+De,c.TEXTURE_2D,null,0);n.bindFramebuffer(c.READ_FRAMEBUFFER,ke.__webglMultisampledFramebuffer),n.bindFramebuffer(c.DRAW_FRAMEBUFFER,ke.__webglFramebuffer);for(let De=0;De<N.length;De++){if(G.resolveDepthBuffer&&(G.depthBuffer&&(Me|=c.DEPTH_BUFFER_BIT),G.stencilBuffer&&G.resolveStencilBuffer&&(Me|=c.STENCIL_BUFFER_BIT)),Re){c.framebufferRenderbuffer(c.READ_FRAMEBUFFER,c.COLOR_ATTACHMENT0,c.RENDERBUFFER,ke.__webglColorRenderbuffer[De]);const qe=a.get(N[De]).__webglTexture;c.framebufferTexture2D(c.DRAW_FRAMEBUFFER,c.COLOR_ATTACHMENT0,c.TEXTURE_2D,qe,0)}c.blitFramebuffer(0,0,fe,Se,0,0,fe,Se,Me,c.NEAREST),d===!0&&(ft.length=0,ct.length=0,ft.push(c.COLOR_ATTACHMENT0+De),G.depthBuffer&&G.resolveDepthBuffer===!1&&(ft.push(Ee),ct.push(Ee),c.invalidateFramebuffer(c.DRAW_FRAMEBUFFER,ct)),c.invalidateFramebuffer(c.READ_FRAMEBUFFER,ft))}if(n.bindFramebuffer(c.READ_FRAMEBUFFER,null),n.bindFramebuffer(c.DRAW_FRAMEBUFFER,null),Re)for(let De=0;De<N.length;De++){n.bindFramebuffer(c.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),c.framebufferRenderbuffer(c.FRAMEBUFFER,c.COLOR_ATTACHMENT0+De,c.RENDERBUFFER,ke.__webglColorRenderbuffer[De]);const qe=a.get(N[De]).__webglTexture;n.bindFramebuffer(c.FRAMEBUFFER,ke.__webglFramebuffer),c.framebufferTexture2D(c.DRAW_FRAMEBUFFER,c.COLOR_ATTACHMENT0+De,c.TEXTURE_2D,qe,0)}n.bindFramebuffer(c.DRAW_FRAMEBUFFER,ke.__webglMultisampledFramebuffer)}else if(G.depthBuffer&&G.resolveDepthBuffer===!1&&d){const N=G.stencilBuffer?c.DEPTH_STENCIL_ATTACHMENT:c.DEPTH_ATTACHMENT;c.invalidateFramebuffer(c.DRAW_FRAMEBUFFER,[N])}}}function Ye(G){return Math.min(r.maxSamples,G.samples)}function xt(G){const N=a.get(G);return G.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&N.__useRenderToTexture!==!1}function $e(G){const N=u.render.frame;g.get(G)!==N&&(g.set(G,N),G.update())}function at(G,N){const fe=G.colorSpace,Se=G.format,Me=G.type;return G.isCompressedTexture===!0||G.isVideoTexture===!0||fe!==ts&&fe!==Ya&&(Ut.getTransfer(fe)===kt?(Se!==zi||Me!==$a)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",fe)),N}function Wt(G){return typeof HTMLImageElement<"u"&&G instanceof HTMLImageElement?(p.width=G.naturalWidth||G.width,p.height=G.naturalHeight||G.height):typeof VideoFrame<"u"&&G instanceof VideoFrame?(p.width=G.displayWidth,p.height=G.displayHeight):(p.width=G.width,p.height=G.height),p}this.allocateTextureUnit=ie,this.resetTextureUnits=F,this.setTexture2D=Q,this.setTexture2DArray=Y,this.setTexture3D=L,this.setTextureCube=K,this.rebindTextures=Je,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=X,this.updateMultisampleRenderTarget=zt,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=de,this.useMultisampledRTT=xt}function T1(c,e){function n(a,r=Ya){let l;const u=Ut.getTransfer(r);if(a===$a)return c.UNSIGNED_BYTE;if(a===r_)return c.UNSIGNED_SHORT_4_4_4_4;if(a===o_)return c.UNSIGNED_SHORT_5_5_5_1;if(a===oM)return c.UNSIGNED_INT_5_9_9_9_REV;if(a===sM)return c.BYTE;if(a===rM)return c.SHORT;if(a===Yc)return c.UNSIGNED_SHORT;if(a===s_)return c.INT;if(a===Fr)return c.UNSIGNED_INT;if(a===Ka)return c.FLOAT;if(a===au)return c.HALF_FLOAT;if(a===lM)return c.ALPHA;if(a===cM)return c.RGB;if(a===zi)return c.RGBA;if(a===uM)return c.LUMINANCE;if(a===fM)return c.LUMINANCE_ALPHA;if(a===Pr)return c.DEPTH_COMPONENT;if(a===Gr)return c.DEPTH_STENCIL;if(a===hM)return c.RED;if(a===l_)return c.RED_INTEGER;if(a===dM)return c.RG;if(a===c_)return c.RG_INTEGER;if(a===u_)return c.RGBA_INTEGER;if(a===Mh||a===Eh||a===bh||a===Th)if(u===kt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(a===Mh)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Eh)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===bh)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Th)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(a===Mh)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Eh)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===bh)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Th)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===gv||a===vv||a===_v||a===xv)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(a===gv)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===vv)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===_v)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===xv)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===yv||a===Sv||a===Mv)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(a===yv||a===Sv)return u===kt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(a===Mv)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Ev||a===bv||a===Tv||a===Av||a===wv||a===Rv||a===Cv||a===Dv||a===Nv||a===Uv||a===Lv||a===Ov||a===Pv||a===zv)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(a===Ev)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===bv)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Tv)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Av)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===wv)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Rv)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Cv)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Dv)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Nv)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Uv)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Lv)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Ov)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Pv)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===zv)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Ah||a===Bv||a===Iv)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(a===Ah)return u===kt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Bv)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Iv)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===pM||a===Fv||a===Hv||a===Gv)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(a===Ah)return l.COMPRESSED_RED_RGTC1_EXT;if(a===Fv)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Hv)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Gv)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Hr?c.UNSIGNED_INT_24_8:c[a]!==void 0?c[a]:null}return{convert:n}}class A1 extends fi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Hc extends Nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const w1={type:"move"};class $h{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ue,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ue),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ue,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ue),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const a of e.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,a){let r=null,l=null,u=null;const h=this._targetRay,d=this._grip,p=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const E of e.hand.values()){const x=n.getJointPose(E,a),y=this._getHandJoint(p,E);x!==null&&(y.matrix.fromArray(x.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=x.radius),y.visible=x!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],v=g.position.distanceTo(_.position),S=.02,M=.005;p.inputState.pinching&&v>S+M?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&v<=S-M&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(l=n.getPose(e.gripSpace,a),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1));h!==null&&(r=n.getPose(e.targetRaySpace,a),r===null&&l!==null&&(r=l),r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,r.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(r.linearVelocity)):h.hasLinearVelocity=!1,r.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(r.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(w1)))}return h!==null&&(h.visible=r!==null),d!==null&&(d.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const a=new Hc;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[n.jointName]=a,e.add(a)}return e.joints[n.jointName]}}const R1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,C1=`
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

}`;class D1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,a){if(this.texture===null){const r=new Vn,l=e.properties.get(r);l.__webglTexture=n.texture,(n.depthNear!=a.depthNear||n.depthFar!=a.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,a=new es({vertexShader:R1,fragmentShader:C1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new di(new ru(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class N1 extends Vr{constructor(e,n){super();const a=this;let r=null,l=1,u=null,h="local-floor",d=1,p=null,g=null,_=null,v=null,S=null,M=null;const E=new D1,x=n.getContextAttributes();let y=null,T=null;const A=[],D=[],I=new Mt;let P=null;const z=new fi;z.layers.enable(1),z.viewport=new _n;const V=new fi;V.layers.enable(2),V.viewport=new _n;const U=[z,V],w=new A1;w.layers.enable(1),w.layers.enable(2);let F=null,ie=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let de=A[ee];return de===void 0&&(de=new $h,A[ee]=de),de.getTargetRaySpace()},this.getControllerGrip=function(ee){let de=A[ee];return de===void 0&&(de=new $h,A[ee]=de),de.getGripSpace()},this.getHand=function(ee){let de=A[ee];return de===void 0&&(de=new $h,A[ee]=de),de.getHandSpace()};function k(ee){const de=D.indexOf(ee.inputSource);if(de===-1)return;const _e=A[de];_e!==void 0&&(_e.update(ee.inputSource,ee.frame,p||u),_e.dispatchEvent({type:ee.type,data:ee.inputSource}))}function Q(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",Q),r.removeEventListener("inputsourceschange",Y);for(let ee=0;ee<A.length;ee++){const de=D[ee];de!==null&&(D[ee]=null,A[ee].disconnect(de))}F=null,ie=null,E.reset(),e.setRenderTarget(y),S=null,v=null,_=null,r=null,T=null,ye.stop(),a.isPresenting=!1,e.setPixelRatio(P),e.setSize(I.width,I.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){l=ee,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){h=ee,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(ee){p=ee},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return _},this.getFrame=function(){return M},this.getSession=function(){return r},this.setSession=async function(ee){if(r=ee,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",Q),r.addEventListener("inputsourceschange",Y),x.xrCompatible!==!0&&await n.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(I),r.renderState.layers===void 0){const de={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(r,n,de),r.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),T=new Ls(S.framebufferWidth,S.framebufferHeight,{format:zi,type:$a,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let de=null,_e=null,Ae=null;x.depth&&(Ae=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,de=x.stencil?Gr:Pr,_e=x.stencil?Hr:Fr);const Fe={colorFormat:n.RGBA8,depthFormat:Ae,scaleFactor:l};_=new XRWebGLBinding(r,n),v=_.createProjectionLayer(Fe),r.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),T=new Ls(v.textureWidth,v.textureHeight,{format:zi,type:$a,depthTexture:new w_(v.textureWidth,v.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(d),p=null,u=await r.requestReferenceSpace(h),ye.setContext(r),ye.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function Y(ee){for(let de=0;de<ee.removed.length;de++){const _e=ee.removed[de],Ae=D.indexOf(_e);Ae>=0&&(D[Ae]=null,A[Ae].disconnect(_e))}for(let de=0;de<ee.added.length;de++){const _e=ee.added[de];let Ae=D.indexOf(_e);if(Ae===-1){for(let Je=0;Je<A.length;Je++)if(Je>=D.length){D.push(_e),Ae=Je;break}else if(D[Je]===null){D[Je]=_e,Ae=Je;break}if(Ae===-1)break}const Fe=A[Ae];Fe&&Fe.connect(_e)}}const L=new ue,K=new ue;function j(ee,de,_e){L.setFromMatrixPosition(de.matrixWorld),K.setFromMatrixPosition(_e.matrixWorld);const Ae=L.distanceTo(K),Fe=de.projectionMatrix.elements,Je=_e.projectionMatrix.elements,pt=Fe[14]/(Fe[10]-1),X=Fe[14]/(Fe[10]+1),ft=(Fe[9]+1)/Fe[5],ct=(Fe[9]-1)/Fe[5],zt=(Fe[8]-1)/Fe[0],Ye=(Je[8]+1)/Je[0],xt=pt*zt,$e=pt*Ye,at=Ae/(-zt+Ye),Wt=at*-zt;de.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(Wt),ee.translateZ(at),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert();const G=pt+at,N=X+at,fe=xt-Wt,Se=$e+(Ae-Wt),Me=ft*X/N*G,Ee=ct*X/N*G;ee.projectionMatrix.makePerspective(fe,Se,Me,Ee,G,N),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}function he(ee,de){de===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(de.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(r===null)return;E.texture!==null&&(ee.near=E.depthNear,ee.far=E.depthFar),w.near=V.near=z.near=ee.near,w.far=V.far=z.far=ee.far,(F!==w.near||ie!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),F=w.near,ie=w.far,z.near=F,z.far=ie,V.near=F,V.far=ie,z.updateProjectionMatrix(),V.updateProjectionMatrix(),ee.updateProjectionMatrix());const de=ee.parent,_e=w.cameras;he(w,de);for(let Ae=0;Ae<_e.length;Ae++)he(_e[Ae],de);_e.length===2?j(w,z,V):w.projectionMatrix.copy(z.projectionMatrix),B(ee,w,de)};function B(ee,de,_e){_e===null?ee.matrix.copy(de.matrixWorld):(ee.matrix.copy(_e.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(de.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(de.projectionMatrix),ee.projectionMatrixInverse.copy(de.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=pd*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(v===null&&S===null))return d},this.setFoveation=function(ee){d=ee,v!==null&&(v.fixedFoveation=ee),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=ee)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(w)};let $=null;function oe(ee,de){if(g=de.getViewerPose(p||u),M=de,g!==null){const _e=g.views;S!==null&&(e.setRenderTargetFramebuffer(T,S.framebuffer),e.setRenderTarget(T));let Ae=!1;_e.length!==w.cameras.length&&(w.cameras.length=0,Ae=!0);for(let Je=0;Je<_e.length;Je++){const pt=_e[Je];let X=null;if(S!==null)X=S.getViewport(pt);else{const ct=_.getViewSubImage(v,pt);X=ct.viewport,Je===0&&(e.setRenderTargetTextures(T,ct.colorTexture,v.ignoreDepthValues?void 0:ct.depthStencilTexture),e.setRenderTarget(T))}let ft=U[Je];ft===void 0&&(ft=new fi,ft.layers.enable(Je),ft.viewport=new _n,U[Je]=ft),ft.matrix.fromArray(pt.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(pt.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(X.x,X.y,X.width,X.height),Je===0&&(w.matrix.copy(ft.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),Ae===!0&&w.cameras.push(ft)}const Fe=r.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")){const Je=_.getDepthInformation(_e[0]);Je&&Je.isValid&&Je.texture&&E.init(e,Je,r.renderState)}}for(let _e=0;_e<A.length;_e++){const Ae=D[_e],Fe=A[_e];Ae!==null&&Fe!==void 0&&Fe.update(Ae,de,p||u)}$&&$(ee,de),de.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:de}),M=null}const ye=new T_;ye.setAnimationLoop(oe),this.setAnimationLoop=function(ee){$=ee},this.dispose=function(){}}}const bs=new Fi,U1=new $t;function L1(c,e){function n(x,y){x.matrixAutoUpdate===!0&&x.updateMatrix(),y.value.copy(x.matrix)}function a(x,y){y.color.getRGB(x.fogColor.value,M_(c)),y.isFog?(x.fogNear.value=y.near,x.fogFar.value=y.far):y.isFogExp2&&(x.fogDensity.value=y.density)}function r(x,y,T,A,D){y.isMeshBasicMaterial||y.isMeshLambertMaterial?l(x,y):y.isMeshToonMaterial?(l(x,y),_(x,y)):y.isMeshPhongMaterial?(l(x,y),g(x,y)):y.isMeshStandardMaterial?(l(x,y),v(x,y),y.isMeshPhysicalMaterial&&S(x,y,D)):y.isMeshMatcapMaterial?(l(x,y),M(x,y)):y.isMeshDepthMaterial?l(x,y):y.isMeshDistanceMaterial?(l(x,y),E(x,y)):y.isMeshNormalMaterial?l(x,y):y.isLineBasicMaterial?(u(x,y),y.isLineDashedMaterial&&h(x,y)):y.isPointsMaterial?d(x,y,T,A):y.isSpriteMaterial?p(x,y):y.isShadowMaterial?(x.color.value.copy(y.color),x.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(x,y){x.opacity.value=y.opacity,y.color&&x.diffuse.value.copy(y.color),y.emissive&&x.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(x.map.value=y.map,n(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,n(y.alphaMap,x.alphaMapTransform)),y.bumpMap&&(x.bumpMap.value=y.bumpMap,n(y.bumpMap,x.bumpMapTransform),x.bumpScale.value=y.bumpScale,y.side===kn&&(x.bumpScale.value*=-1)),y.normalMap&&(x.normalMap.value=y.normalMap,n(y.normalMap,x.normalMapTransform),x.normalScale.value.copy(y.normalScale),y.side===kn&&x.normalScale.value.negate()),y.displacementMap&&(x.displacementMap.value=y.displacementMap,n(y.displacementMap,x.displacementMapTransform),x.displacementScale.value=y.displacementScale,x.displacementBias.value=y.displacementBias),y.emissiveMap&&(x.emissiveMap.value=y.emissiveMap,n(y.emissiveMap,x.emissiveMapTransform)),y.specularMap&&(x.specularMap.value=y.specularMap,n(y.specularMap,x.specularMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest);const T=e.get(y),A=T.envMap,D=T.envMapRotation;A&&(x.envMap.value=A,bs.copy(D),bs.x*=-1,bs.y*=-1,bs.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(bs.y*=-1,bs.z*=-1),x.envMapRotation.value.setFromMatrix4(U1.makeRotationFromEuler(bs)),x.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=y.reflectivity,x.ior.value=y.ior,x.refractionRatio.value=y.refractionRatio),y.lightMap&&(x.lightMap.value=y.lightMap,x.lightMapIntensity.value=y.lightMapIntensity,n(y.lightMap,x.lightMapTransform)),y.aoMap&&(x.aoMap.value=y.aoMap,x.aoMapIntensity.value=y.aoMapIntensity,n(y.aoMap,x.aoMapTransform))}function u(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,y.map&&(x.map.value=y.map,n(y.map,x.mapTransform))}function h(x,y){x.dashSize.value=y.dashSize,x.totalSize.value=y.dashSize+y.gapSize,x.scale.value=y.scale}function d(x,y,T,A){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.size.value=y.size*T,x.scale.value=A*.5,y.map&&(x.map.value=y.map,n(y.map,x.uvTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,n(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function p(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.rotation.value=y.rotation,y.map&&(x.map.value=y.map,n(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,n(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function g(x,y){x.specular.value.copy(y.specular),x.shininess.value=Math.max(y.shininess,1e-4)}function _(x,y){y.gradientMap&&(x.gradientMap.value=y.gradientMap)}function v(x,y){x.metalness.value=y.metalness,y.metalnessMap&&(x.metalnessMap.value=y.metalnessMap,n(y.metalnessMap,x.metalnessMapTransform)),x.roughness.value=y.roughness,y.roughnessMap&&(x.roughnessMap.value=y.roughnessMap,n(y.roughnessMap,x.roughnessMapTransform)),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)}function S(x,y,T){x.ior.value=y.ior,y.sheen>0&&(x.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),x.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(x.sheenColorMap.value=y.sheenColorMap,n(y.sheenColorMap,x.sheenColorMapTransform)),y.sheenRoughnessMap&&(x.sheenRoughnessMap.value=y.sheenRoughnessMap,n(y.sheenRoughnessMap,x.sheenRoughnessMapTransform))),y.clearcoat>0&&(x.clearcoat.value=y.clearcoat,x.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(x.clearcoatMap.value=y.clearcoatMap,n(y.clearcoatMap,x.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,n(y.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(x.clearcoatNormalMap.value=y.clearcoatNormalMap,n(y.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===kn&&x.clearcoatNormalScale.value.negate())),y.dispersion>0&&(x.dispersion.value=y.dispersion),y.iridescence>0&&(x.iridescence.value=y.iridescence,x.iridescenceIOR.value=y.iridescenceIOR,x.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(x.iridescenceMap.value=y.iridescenceMap,n(y.iridescenceMap,x.iridescenceMapTransform)),y.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=y.iridescenceThicknessMap,n(y.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),y.transmission>0&&(x.transmission.value=y.transmission,x.transmissionSamplerMap.value=T.texture,x.transmissionSamplerSize.value.set(T.width,T.height),y.transmissionMap&&(x.transmissionMap.value=y.transmissionMap,n(y.transmissionMap,x.transmissionMapTransform)),x.thickness.value=y.thickness,y.thicknessMap&&(x.thicknessMap.value=y.thicknessMap,n(y.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=y.attenuationDistance,x.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(x.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(x.anisotropyMap.value=y.anisotropyMap,n(y.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=y.specularIntensity,x.specularColor.value.copy(y.specularColor),y.specularColorMap&&(x.specularColorMap.value=y.specularColorMap,n(y.specularColorMap,x.specularColorMapTransform)),y.specularIntensityMap&&(x.specularIntensityMap.value=y.specularIntensityMap,n(y.specularIntensityMap,x.specularIntensityMapTransform))}function M(x,y){y.matcap&&(x.matcap.value=y.matcap)}function E(x,y){const T=e.get(y).light;x.referencePosition.value.setFromMatrixPosition(T.matrixWorld),x.nearDistance.value=T.shadow.camera.near,x.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:r}}function O1(c,e,n,a){let r={},l={},u=[];const h=c.getParameter(c.MAX_UNIFORM_BUFFER_BINDINGS);function d(T,A){const D=A.program;a.uniformBlockBinding(T,D)}function p(T,A){let D=r[T.id];D===void 0&&(M(T),D=g(T),r[T.id]=D,T.addEventListener("dispose",x));const I=A.program;a.updateUBOMapping(T,I);const P=e.render.frame;l[T.id]!==P&&(v(T),l[T.id]=P)}function g(T){const A=_();T.__bindingPointIndex=A;const D=c.createBuffer(),I=T.__size,P=T.usage;return c.bindBuffer(c.UNIFORM_BUFFER,D),c.bufferData(c.UNIFORM_BUFFER,I,P),c.bindBuffer(c.UNIFORM_BUFFER,null),c.bindBufferBase(c.UNIFORM_BUFFER,A,D),D}function _(){for(let T=0;T<h;T++)if(u.indexOf(T)===-1)return u.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(T){const A=r[T.id],D=T.uniforms,I=T.__cache;c.bindBuffer(c.UNIFORM_BUFFER,A);for(let P=0,z=D.length;P<z;P++){const V=Array.isArray(D[P])?D[P]:[D[P]];for(let U=0,w=V.length;U<w;U++){const F=V[U];if(S(F,P,U,I)===!0){const ie=F.__offset,k=Array.isArray(F.value)?F.value:[F.value];let Q=0;for(let Y=0;Y<k.length;Y++){const L=k[Y],K=E(L);typeof L=="number"||typeof L=="boolean"?(F.__data[0]=L,c.bufferSubData(c.UNIFORM_BUFFER,ie+Q,F.__data)):L.isMatrix3?(F.__data[0]=L.elements[0],F.__data[1]=L.elements[1],F.__data[2]=L.elements[2],F.__data[3]=0,F.__data[4]=L.elements[3],F.__data[5]=L.elements[4],F.__data[6]=L.elements[5],F.__data[7]=0,F.__data[8]=L.elements[6],F.__data[9]=L.elements[7],F.__data[10]=L.elements[8],F.__data[11]=0):(L.toArray(F.__data,Q),Q+=K.storage/Float32Array.BYTES_PER_ELEMENT)}c.bufferSubData(c.UNIFORM_BUFFER,ie,F.__data)}}}c.bindBuffer(c.UNIFORM_BUFFER,null)}function S(T,A,D,I){const P=T.value,z=A+"_"+D;if(I[z]===void 0)return typeof P=="number"||typeof P=="boolean"?I[z]=P:I[z]=P.clone(),!0;{const V=I[z];if(typeof P=="number"||typeof P=="boolean"){if(V!==P)return I[z]=P,!0}else if(V.equals(P)===!1)return V.copy(P),!0}return!1}function M(T){const A=T.uniforms;let D=0;const I=16;for(let z=0,V=A.length;z<V;z++){const U=Array.isArray(A[z])?A[z]:[A[z]];for(let w=0,F=U.length;w<F;w++){const ie=U[w],k=Array.isArray(ie.value)?ie.value:[ie.value];for(let Q=0,Y=k.length;Q<Y;Q++){const L=k[Q],K=E(L),j=D%I;j!==0&&I-j<K.boundary&&(D+=I-j),ie.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),ie.__offset=D,D+=K.storage}}}const P=D%I;return P>0&&(D+=I-P),T.__size=D,T.__cache={},this}function E(T){const A={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(A.boundary=4,A.storage=4):T.isVector2?(A.boundary=8,A.storage=8):T.isVector3||T.isColor?(A.boundary=16,A.storage=12):T.isVector4?(A.boundary=16,A.storage=16):T.isMatrix3?(A.boundary=48,A.storage=48):T.isMatrix4?(A.boundary=64,A.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),A}function x(T){const A=T.target;A.removeEventListener("dispose",x);const D=u.indexOf(A.__bindingPointIndex);u.splice(D,1),c.deleteBuffer(r[A.id]),delete r[A.id],delete l[A.id]}function y(){for(const T in r)c.deleteBuffer(r[T]);u=[],r={},l={}}return{bind:d,update:p,dispose:y}}class P1{constructor(e={}){const{canvas:n=AM(),context:a=null,depth:r=!0,stencil:l=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1}=e;this.isWebGLRenderer=!0;let v;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=a.getContextAttributes().alpha}else v=u;const S=new Uint32Array(4),M=new Int32Array(4);let E=null,x=null;const y=[],T=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Li,this.toneMapping=Qa,this.toneMappingExposure=1;const A=this;let D=!1,I=0,P=0,z=null,V=-1,U=null;const w=new _n,F=new _n;let ie=null;const k=new At(0);let Q=0,Y=n.width,L=n.height,K=1,j=null,he=null;const B=new _n(0,0,Y,L),$=new _n(0,0,Y,L);let oe=!1;const ye=new yd;let ee=!1,de=!1;const _e=new $t,Ae=new ue,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Je=!1;function pt(){return z===null?K:1}let X=a;function ft(O,Z){return n.getContext(O,Z)}try{const O={alpha:!0,depth:r,stencil:l,antialias:h,premultipliedAlpha:d,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${vd}`),n.addEventListener("webglcontextlost",Oe,!1),n.addEventListener("webglcontextrestored",me,!1),n.addEventListener("webglcontextcreationerror",xe,!1),X===null){const Z="webgl2";if(X=ft(Z,O),X===null)throw ft(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(O){throw console.error("THREE.WebGLRenderer: "+O.message),O}let ct,zt,Ye,xt,$e,at,Wt,G,N,fe,Se,Me,Ee,ke,Re,De,qe,Ce,Ge,ht,Ke,Ne,nt,rt;function Bt(){ct=new VT(X),ct.init(),Ne=new T1(X,ct),zt=new BT(X,ct,e,Ne),Ye=new E1(X),xt=new qT(X),$e=new c1,at=new b1(X,ct,Ye,$e,zt,Ne,xt),Wt=new FT(A),G=new kT(A),N=new $M(X),nt=new PT(X,N),fe=new jT(X,N,xt,nt),Se=new YT(X,fe,N,xt),Ge=new XT(X,zt,at),De=new IT($e),Me=new l1(A,Wt,G,ct,zt,nt,De),Ee=new L1(A,$e),ke=new f1,Re=new v1(ct),Ce=new OT(A,Wt,G,Ye,Se,v,d),qe=new M1(A,Se,zt),rt=new O1(X,xt,zt,Ye),ht=new zT(X,ct,xt),Ke=new WT(X,ct,xt),xt.programs=Me.programs,A.capabilities=zt,A.extensions=ct,A.properties=$e,A.renderLists=ke,A.shadowMap=qe,A.state=Ye,A.info=xt}Bt();const q=new N1(A,X);this.xr=q,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const O=ct.get("WEBGL_lose_context");O&&O.loseContext()},this.forceContextRestore=function(){const O=ct.get("WEBGL_lose_context");O&&O.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(O){O!==void 0&&(K=O,this.setSize(Y,L,!1))},this.getSize=function(O){return O.set(Y,L)},this.setSize=function(O,Z,te=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=O,L=Z,n.width=Math.floor(O*K),n.height=Math.floor(Z*K),te===!0&&(n.style.width=O+"px",n.style.height=Z+"px"),this.setViewport(0,0,O,Z)},this.getDrawingBufferSize=function(O){return O.set(Y*K,L*K).floor()},this.setDrawingBufferSize=function(O,Z,te){Y=O,L=Z,K=te,n.width=Math.floor(O*te),n.height=Math.floor(Z*te),this.setViewport(0,0,O,Z)},this.getCurrentViewport=function(O){return O.copy(w)},this.getViewport=function(O){return O.copy(B)},this.setViewport=function(O,Z,te,ce){O.isVector4?B.set(O.x,O.y,O.z,O.w):B.set(O,Z,te,ce),Ye.viewport(w.copy(B).multiplyScalar(K).round())},this.getScissor=function(O){return O.copy($)},this.setScissor=function(O,Z,te,ce){O.isVector4?$.set(O.x,O.y,O.z,O.w):$.set(O,Z,te,ce),Ye.scissor(F.copy($).multiplyScalar(K).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(O){Ye.setScissorTest(oe=O)},this.setOpaqueSort=function(O){j=O},this.setTransparentSort=function(O){he=O},this.getClearColor=function(O){return O.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor.apply(Ce,arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha.apply(Ce,arguments)},this.clear=function(O=!0,Z=!0,te=!0){let ce=0;if(O){let ne=!1;if(z!==null){const be=z.texture.format;ne=be===u_||be===c_||be===l_}if(ne){const be=z.texture.type,Ue=be===$a||be===Fr||be===Yc||be===Hr||be===r_||be===o_,Be=Ce.getClearColor(),He=Ce.getClearAlpha(),Ze=Be.r,et=Be.g,We=Be.b;Ue?(S[0]=Ze,S[1]=et,S[2]=We,S[3]=He,X.clearBufferuiv(X.COLOR,0,S)):(M[0]=Ze,M[1]=et,M[2]=We,M[3]=He,X.clearBufferiv(X.COLOR,0,M))}else ce|=X.COLOR_BUFFER_BIT}Z&&(ce|=X.DEPTH_BUFFER_BIT),te&&(ce|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Oe,!1),n.removeEventListener("webglcontextrestored",me,!1),n.removeEventListener("webglcontextcreationerror",xe,!1),ke.dispose(),Re.dispose(),$e.dispose(),Wt.dispose(),G.dispose(),Se.dispose(),nt.dispose(),rt.dispose(),Me.dispose(),q.dispose(),q.removeEventListener("sessionstart",jn),q.removeEventListener("sessionend",ti),bn.stop()};function Oe(O){O.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const O=xt.autoReset,Z=qe.enabled,te=qe.autoUpdate,ce=qe.needsUpdate,ne=qe.type;Bt(),xt.autoReset=O,qe.enabled=Z,qe.autoUpdate=te,qe.needsUpdate=ce,qe.type=ne}function xe(O){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",O.statusMessage)}function we(O){const Z=O.target;Z.removeEventListener("dispose",we),it(Z)}function it(O){yt(O),$e.remove(O)}function yt(O){const Z=$e.get(O).programs;Z!==void 0&&(Z.forEach(function(te){Me.releaseProgram(te)}),O.isShaderMaterial&&Me.releaseShaderCache(O))}this.renderBufferDirect=function(O,Z,te,ce,ne,be){Z===null&&(Z=Fe);const Ue=ne.isMesh&&ne.matrixWorld.determinant()<0,Be=Xr(O,Z,te,ce,ne);Ye.setMaterial(ce,Ue);let He=te.index,Ze=1;if(ce.wireframe===!0){if(He=fe.getWireframeAttribute(te),He===void 0)return;Ze=2}const et=te.drawRange,We=te.attributes.position;let _t=et.start*Ze,bt=(et.start+et.count)*Ze;be!==null&&(_t=Math.max(_t,be.start*Ze),bt=Math.min(bt,(be.start+be.count)*Ze)),He!==null?(_t=Math.max(_t,0),bt=Math.min(bt,He.count)):We!=null&&(_t=Math.max(_t,0),bt=Math.min(bt,We.count));const Ft=bt-_t;if(Ft<0||Ft===1/0)return;nt.setup(ne,ce,Be,te,He);let Tn,vt=ht;if(He!==null&&(Tn=N.get(He),vt=Ke,vt.setIndex(Tn)),ne.isMesh)ce.wireframe===!0?(Ye.setLineWidth(ce.wireframeLinewidth*pt()),vt.setMode(X.LINES)):vt.setMode(X.TRIANGLES);else if(ne.isLine){let Ve=ce.linewidth;Ve===void 0&&(Ve=1),Ye.setLineWidth(Ve*pt()),ne.isLineSegments?vt.setMode(X.LINES):ne.isLineLoop?vt.setMode(X.LINE_LOOP):vt.setMode(X.LINE_STRIP)}else ne.isPoints?vt.setMode(X.POINTS):ne.isSprite&&vt.setMode(X.TRIANGLES);if(ne.isBatchedMesh)ne._multiDrawInstances!==null?vt.renderMultiDrawInstances(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount,ne._multiDrawInstances):vt.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else if(ne.isInstancedMesh)vt.renderInstances(_t,Ft,ne.count);else if(te.isInstancedBufferGeometry){const Ve=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,on=Math.min(te.instanceCount,Ve);vt.renderInstances(_t,Ft,on)}else vt.render(_t,Ft)};function Vt(O,Z,te){O.transparent===!0&&O.side===ha&&O.forceSinglePass===!1?(O.side=kn,O.needsUpdate=!0,Os(O,Z,te),O.side=Ja,O.needsUpdate=!0,Os(O,Z,te),O.side=ha):Os(O,Z,te)}this.compile=function(O,Z,te=null){te===null&&(te=O),x=Re.get(te),x.init(Z),T.push(x),te.traverseVisible(function(ne){ne.isLight&&ne.layers.test(Z.layers)&&(x.pushLight(ne),ne.castShadow&&x.pushShadow(ne))}),O!==te&&O.traverseVisible(function(ne){ne.isLight&&ne.layers.test(Z.layers)&&(x.pushLight(ne),ne.castShadow&&x.pushShadow(ne))}),x.setupLights();const ce=new Set;return O.traverse(function(ne){const be=ne.material;if(be)if(Array.isArray(be))for(let Ue=0;Ue<be.length;Ue++){const Be=be[Ue];Vt(Be,te,ne),ce.add(Be)}else Vt(be,te,ne),ce.add(be)}),T.pop(),x=null,ce},this.compileAsync=function(O,Z,te=null){const ce=this.compile(O,Z,te);return new Promise(ne=>{function be(){if(ce.forEach(function(Ue){$e.get(Ue).currentProgram.isReady()&&ce.delete(Ue)}),ce.size===0){ne(O);return}setTimeout(be,10)}ct.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let Yt=null;function Et(O){Yt&&Yt(O)}function jn(){bn.stop()}function ti(){bn.start()}const bn=new T_;bn.setAnimationLoop(Et),typeof self<"u"&&bn.setContext(self),this.setAnimationLoop=function(O){Yt=O,q.setAnimationLoop(O),O===null?bn.stop():bn.start()},q.addEventListener("sessionstart",jn),q.addEventListener("sessionend",ti),this.render=function(O,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(Z),Z=q.getCamera()),O.isScene===!0&&O.onBeforeRender(A,O,Z,z),x=Re.get(O,T.length),x.init(Z),T.push(x),_e.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),ye.setFromProjectionMatrix(_e),de=this.localClippingEnabled,ee=De.init(this.clippingPlanes,de),E=ke.get(O,y.length),E.init(),y.push(E),q.enabled===!0&&q.isPresenting===!0){const be=A.xr.getDepthSensingMesh();be!==null&&en(be,Z,-1/0,A.sortObjects)}en(O,Z,0,A.sortObjects),E.finish(),A.sortObjects===!0&&E.sort(j,he),Je=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Je&&Ce.addToRenderList(E,O),this.info.render.frame++,ee===!0&&De.beginShadows();const te=x.state.shadowsArray;qe.render(te,O,Z),ee===!0&&De.endShadows(),this.info.autoReset===!0&&this.info.reset();const ce=E.opaque,ne=E.transmissive;if(x.setupLights(),Z.isArrayCamera){const be=Z.cameras;if(ne.length>0)for(let Ue=0,Be=be.length;Ue<Be;Ue++){const He=be[Ue];Hi(ce,ne,O,He)}Je&&Ce.render(O);for(let Ue=0,Be=be.length;Ue<Be;Ue++){const He=be[Ue];xn(E,O,He,He.viewport)}}else ne.length>0&&Hi(ce,ne,O,Z),Je&&Ce.render(O),xn(E,O,Z);z!==null&&(at.updateMultisampleRenderTarget(z),at.updateRenderTargetMipmap(z)),O.isScene===!0&&O.onAfterRender(A,O,Z),nt.resetDefaultState(),V=-1,U=null,T.pop(),T.length>0?(x=T[T.length-1],ee===!0&&De.setGlobalState(A.clippingPlanes,x.state.camera)):x=null,y.pop(),y.length>0?E=y[y.length-1]:E=null};function en(O,Z,te,ce){if(O.visible===!1)return;if(O.layers.test(Z.layers)){if(O.isGroup)te=O.renderOrder;else if(O.isLOD)O.autoUpdate===!0&&O.update(Z);else if(O.isLight)x.pushLight(O),O.castShadow&&x.pushShadow(O);else if(O.isSprite){if(!O.frustumCulled||ye.intersectsSprite(O)){ce&&Ae.setFromMatrixPosition(O.matrixWorld).applyMatrix4(_e);const Ue=Se.update(O),Be=O.material;Be.visible&&E.push(O,Ue,Be,te,Ae.z,null)}}else if((O.isMesh||O.isLine||O.isPoints)&&(!O.frustumCulled||ye.intersectsObject(O))){const Ue=Se.update(O),Be=O.material;if(ce&&(O.boundingSphere!==void 0?(O.boundingSphere===null&&O.computeBoundingSphere(),Ae.copy(O.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),Ae.copy(Ue.boundingSphere.center)),Ae.applyMatrix4(O.matrixWorld).applyMatrix4(_e)),Array.isArray(Be)){const He=Ue.groups;for(let Ze=0,et=He.length;Ze<et;Ze++){const We=He[Ze],_t=Be[We.materialIndex];_t&&_t.visible&&E.push(O,Ue,_t,te,Ae.z,We)}}else Be.visible&&E.push(O,Ue,Be,te,Ae.z,null)}}const be=O.children;for(let Ue=0,Be=be.length;Ue<Be;Ue++)en(be[Ue],Z,te,ce)}function xn(O,Z,te,ce){const ne=O.opaque,be=O.transmissive,Ue=O.transparent;x.setupLightsView(te),ee===!0&&De.setGlobalState(A.clippingPlanes,te),ce&&Ye.viewport(w.copy(ce)),ne.length>0&&pa(ne,Z,te),be.length>0&&pa(be,Z,te),Ue.length>0&&pa(Ue,Z,te),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function Hi(O,Z,te,ce){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[ce.id]===void 0&&(x.state.transmissionRenderTarget[ce.id]=new Ls(1,1,{generateMipmaps:!0,type:ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float")?au:$a,minFilter:Us,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ut.workingColorSpace}));const be=x.state.transmissionRenderTarget[ce.id],Ue=ce.viewport||w;be.setSize(Ue.z,Ue.w);const Be=A.getRenderTarget();A.setRenderTarget(be),A.getClearColor(k),Q=A.getClearAlpha(),Q<1&&A.setClearColor(16777215,.5),Je?Ce.render(te):A.clear();const He=A.toneMapping;A.toneMapping=Qa;const Ze=ce.viewport;if(ce.viewport!==void 0&&(ce.viewport=void 0),x.setupLightsView(ce),ee===!0&&De.setGlobalState(A.clippingPlanes,ce),pa(O,te,ce),at.updateMultisampleRenderTarget(be),at.updateRenderTargetMipmap(be),ct.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let We=0,_t=Z.length;We<_t;We++){const bt=Z[We],Ft=bt.object,Tn=bt.geometry,vt=bt.material,Ve=bt.group;if(vt.side===ha&&Ft.layers.test(ce.layers)){const on=vt.side;vt.side=kn,vt.needsUpdate=!0,ul(Ft,te,ce,Tn,vt,Ve),vt.side=on,vt.needsUpdate=!0,et=!0}}et===!0&&(at.updateMultisampleRenderTarget(be),at.updateRenderTargetMipmap(be))}A.setRenderTarget(Be),A.setClearColor(k,Q),Ze!==void 0&&(ce.viewport=Ze),A.toneMapping=He}function pa(O,Z,te){const ce=Z.isScene===!0?Z.overrideMaterial:null;for(let ne=0,be=O.length;ne<be;ne++){const Ue=O[ne],Be=Ue.object,He=Ue.geometry,Ze=ce===null?Ue.material:ce,et=Ue.group;Be.layers.test(te.layers)&&ul(Be,Z,te,He,Ze,et)}}function ul(O,Z,te,ce,ne,be){O.onBeforeRender(A,Z,te,ce,ne,be),O.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,O.matrixWorld),O.normalMatrix.getNormalMatrix(O.modelViewMatrix),ne.onBeforeRender(A,Z,te,ce,O,be),ne.transparent===!0&&ne.side===ha&&ne.forceSinglePass===!1?(ne.side=kn,ne.needsUpdate=!0,A.renderBufferDirect(te,Z,ce,ne,O,be),ne.side=Ja,ne.needsUpdate=!0,A.renderBufferDirect(te,Z,ce,ne,O,be),ne.side=ha):A.renderBufferDirect(te,Z,ce,ne,O,be),O.onAfterRender(A,Z,te,ce,ne,be)}function Os(O,Z,te){Z.isScene!==!0&&(Z=Fe);const ce=$e.get(O),ne=x.state.lights,be=x.state.shadowsArray,Ue=ne.state.version,Be=Me.getParameters(O,ne.state,be,Z,te),He=Me.getProgramCacheKey(Be);let Ze=ce.programs;ce.environment=O.isMeshStandardMaterial?Z.environment:null,ce.fog=Z.fog,ce.envMap=(O.isMeshStandardMaterial?G:Wt).get(O.envMap||ce.environment),ce.envMapRotation=ce.environment!==null&&O.envMap===null?Z.environmentRotation:O.envMapRotation,Ze===void 0&&(O.addEventListener("dispose",we),Ze=new Map,ce.programs=Ze);let et=Ze.get(He);if(et!==void 0){if(ce.currentProgram===et&&ce.lightsStateVersion===Ue)return ma(O,Be),et}else Be.uniforms=Me.getUniforms(O),O.onBuild(te,Be,A),O.onBeforeCompile(Be,A),et=Me.acquireProgram(Be,He),Ze.set(He,et),ce.uniforms=Be.uniforms;const We=ce.uniforms;return(!O.isShaderMaterial&&!O.isRawShaderMaterial||O.clipping===!0)&&(We.clippingPlanes=De.uniform),ma(O,Be),ce.needsLights=va(O),ce.lightsStateVersion=Ue,ce.needsLights&&(We.ambientLightColor.value=ne.state.ambient,We.lightProbe.value=ne.state.probe,We.directionalLights.value=ne.state.directional,We.directionalLightShadows.value=ne.state.directionalShadow,We.spotLights.value=ne.state.spot,We.spotLightShadows.value=ne.state.spotShadow,We.rectAreaLights.value=ne.state.rectArea,We.ltc_1.value=ne.state.rectAreaLTC1,We.ltc_2.value=ne.state.rectAreaLTC2,We.pointLights.value=ne.state.point,We.pointLightShadows.value=ne.state.pointShadow,We.hemisphereLights.value=ne.state.hemi,We.directionalShadowMap.value=ne.state.directionalShadowMap,We.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,We.spotShadowMap.value=ne.state.spotShadowMap,We.spotLightMatrix.value=ne.state.spotLightMatrix,We.spotLightMap.value=ne.state.spotLightMap,We.pointShadowMap.value=ne.state.pointShadowMap,We.pointShadowMatrix.value=ne.state.pointShadowMatrix),ce.currentProgram=et,ce.uniformsList=null,et}function qr(O){if(O.uniformsList===null){const Z=O.currentProgram.getUniforms();O.uniformsList=qc.seqWithValue(Z.seq,O.uniforms)}return O.uniformsList}function ma(O,Z){const te=$e.get(O);te.outputColorSpace=Z.outputColorSpace,te.batching=Z.batching,te.batchingColor=Z.batchingColor,te.instancing=Z.instancing,te.instancingColor=Z.instancingColor,te.instancingMorph=Z.instancingMorph,te.skinning=Z.skinning,te.morphTargets=Z.morphTargets,te.morphNormals=Z.morphNormals,te.morphColors=Z.morphColors,te.morphTargetsCount=Z.morphTargetsCount,te.numClippingPlanes=Z.numClippingPlanes,te.numIntersection=Z.numClipIntersection,te.vertexAlphas=Z.vertexAlphas,te.vertexTangents=Z.vertexTangents,te.toneMapping=Z.toneMapping}function Xr(O,Z,te,ce,ne){Z.isScene!==!0&&(Z=Fe),at.resetTextureUnits();const be=Z.fog,Ue=ce.isMeshStandardMaterial?Z.environment:null,Be=z===null?A.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:ts,He=(ce.isMeshStandardMaterial?G:Wt).get(ce.envMap||Ue),Ze=ce.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,et=!!te.attributes.tangent&&(!!ce.normalMap||ce.anisotropy>0),We=!!te.morphAttributes.position,_t=!!te.morphAttributes.normal,bt=!!te.morphAttributes.color;let Ft=Qa;ce.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Ft=A.toneMapping);const Tn=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,vt=Tn!==void 0?Tn.length:0,Ve=$e.get(ce),on=x.state.lights;if(ee===!0&&(de===!0||O!==U)){const On=O===U&&ce.id===V;De.setState(ce,O,On)}let Ct=!1;ce.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==on.state.version||Ve.outputColorSpace!==Be||ne.isBatchedMesh&&Ve.batching===!1||!ne.isBatchedMesh&&Ve.batching===!0||ne.isBatchedMesh&&Ve.batchingColor===!0&&ne.colorTexture===null||ne.isBatchedMesh&&Ve.batchingColor===!1&&ne.colorTexture!==null||ne.isInstancedMesh&&Ve.instancing===!1||!ne.isInstancedMesh&&Ve.instancing===!0||ne.isSkinnedMesh&&Ve.skinning===!1||!ne.isSkinnedMesh&&Ve.skinning===!0||ne.isInstancedMesh&&Ve.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&Ve.instancingColor===!1&&ne.instanceColor!==null||ne.isInstancedMesh&&Ve.instancingMorph===!0&&ne.morphTexture===null||ne.isInstancedMesh&&Ve.instancingMorph===!1&&ne.morphTexture!==null||Ve.envMap!==He||ce.fog===!0&&Ve.fog!==be||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==De.numPlanes||Ve.numIntersection!==De.numIntersection)||Ve.vertexAlphas!==Ze||Ve.vertexTangents!==et||Ve.morphTargets!==We||Ve.morphNormals!==_t||Ve.morphColors!==bt||Ve.toneMapping!==Ft||Ve.morphTargetsCount!==vt)&&(Ct=!0):(Ct=!0,Ve.__version=ce.version);let ni=Ve.currentProgram;Ct===!0&&(ni=Os(ce,Z,ne));let yn=!1,bi=!1,Yr=!1;const qt=ni.getUniforms(),pi=Ve.uniforms;if(Ye.useProgram(ni.program)&&(yn=!0,bi=!0,Yr=!0),ce.id!==V&&(V=ce.id,bi=!0),yn||U!==O){qt.setValue(X,"projectionMatrix",O.projectionMatrix),qt.setValue(X,"viewMatrix",O.matrixWorldInverse);const On=qt.map.cameraPosition;On!==void 0&&On.setValue(X,Ae.setFromMatrixPosition(O.matrixWorld)),zt.logarithmicDepthBuffer&&qt.setValue(X,"logDepthBufFC",2/(Math.log(O.far+1)/Math.LN2)),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&qt.setValue(X,"isOrthographic",O.isOrthographicCamera===!0),U!==O&&(U=O,bi=!0,Yr=!0)}if(ne.isSkinnedMesh){qt.setOptional(X,ne,"bindMatrix"),qt.setOptional(X,ne,"bindMatrixInverse");const On=ne.skeleton;On&&(On.boneTexture===null&&On.computeBoneTexture(),qt.setValue(X,"boneTexture",On.boneTexture,at))}ne.isBatchedMesh&&(qt.setOptional(X,ne,"batchingTexture"),qt.setValue(X,"batchingTexture",ne._matricesTexture,at),qt.setOptional(X,ne,"batchingColorTexture"),ne._colorsTexture!==null&&qt.setValue(X,"batchingColorTexture",ne._colorsTexture,at));const _a=te.morphAttributes;if((_a.position!==void 0||_a.normal!==void 0||_a.color!==void 0)&&Ge.update(ne,te,ni),(bi||Ve.receiveShadow!==ne.receiveShadow)&&(Ve.receiveShadow=ne.receiveShadow,qt.setValue(X,"receiveShadow",ne.receiveShadow)),ce.isMeshGouraudMaterial&&ce.envMap!==null&&(pi.envMap.value=He,pi.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),ce.isMeshStandardMaterial&&ce.envMap===null&&Z.environment!==null&&(pi.envMapIntensity.value=Z.environmentIntensity),bi&&(qt.setValue(X,"toneMappingExposure",A.toneMappingExposure),Ve.needsLights&&ga(pi,Yr),be&&ce.fog===!0&&Ee.refreshFogUniforms(pi,be),Ee.refreshMaterialUniforms(pi,ce,K,L,x.state.transmissionRenderTarget[O.id]),qc.upload(X,qr(Ve),pi,at)),ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(qc.upload(X,qr(Ve),pi,at),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&qt.setValue(X,"center",ne.center),qt.setValue(X,"modelViewMatrix",ne.modelViewMatrix),qt.setValue(X,"normalMatrix",ne.normalMatrix),qt.setValue(X,"modelMatrix",ne.matrixWorld),ce.isShaderMaterial||ce.isRawShaderMaterial){const On=ce.uniformsGroups;for(let An=0,Kr=On.length;An<Kr;An++){const Zr=On[An];rt.update(Zr,ni),rt.bind(Zr,ni)}}return ni}function ga(O,Z){O.ambientLightColor.needsUpdate=Z,O.lightProbe.needsUpdate=Z,O.directionalLights.needsUpdate=Z,O.directionalLightShadows.needsUpdate=Z,O.pointLights.needsUpdate=Z,O.pointLightShadows.needsUpdate=Z,O.spotLights.needsUpdate=Z,O.spotLightShadows.needsUpdate=Z,O.rectAreaLights.needsUpdate=Z,O.hemisphereLights.needsUpdate=Z}function va(O){return O.isMeshLambertMaterial||O.isMeshToonMaterial||O.isMeshPhongMaterial||O.isMeshStandardMaterial||O.isShadowMaterial||O.isShaderMaterial&&O.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(O,Z,te){$e.get(O.texture).__webglTexture=Z,$e.get(O.depthTexture).__webglTexture=te;const ce=$e.get(O);ce.__hasExternalTextures=!0,ce.__autoAllocateDepthBuffer=te===void 0,ce.__autoAllocateDepthBuffer||ct.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ce.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(O,Z){const te=$e.get(O);te.__webglFramebuffer=Z,te.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(O,Z=0,te=0){z=O,I=Z,P=te;let ce=!0,ne=null,be=!1,Ue=!1;if(O){const He=$e.get(O);He.__useDefaultFramebuffer!==void 0?(Ye.bindFramebuffer(X.FRAMEBUFFER,null),ce=!1):He.__webglFramebuffer===void 0?at.setupRenderTarget(O):He.__hasExternalTextures&&at.rebindTextures(O,$e.get(O.texture).__webglTexture,$e.get(O.depthTexture).__webglTexture);const Ze=O.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(Ue=!0);const et=$e.get(O).__webglFramebuffer;O.isWebGLCubeRenderTarget?(Array.isArray(et[Z])?ne=et[Z][te]:ne=et[Z],be=!0):O.samples>0&&at.useMultisampledRTT(O)===!1?ne=$e.get(O).__webglMultisampledFramebuffer:Array.isArray(et)?ne=et[te]:ne=et,w.copy(O.viewport),F.copy(O.scissor),ie=O.scissorTest}else w.copy(B).multiplyScalar(K).floor(),F.copy($).multiplyScalar(K).floor(),ie=oe;if(Ye.bindFramebuffer(X.FRAMEBUFFER,ne)&&ce&&Ye.drawBuffers(O,ne),Ye.viewport(w),Ye.scissor(F),Ye.setScissorTest(ie),be){const He=$e.get(O.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+Z,He.__webglTexture,te)}else if(Ue){const He=$e.get(O.texture),Ze=Z||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,He.__webglTexture,te||0,Ze)}V=-1},this.readRenderTargetPixels=function(O,Z,te,ce,ne,be,Ue){if(!(O&&O.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=$e.get(O).__webglFramebuffer;if(O.isWebGLCubeRenderTarget&&Ue!==void 0&&(Be=Be[Ue]),Be){Ye.bindFramebuffer(X.FRAMEBUFFER,Be);try{const He=O.texture,Ze=He.format,et=He.type;if(!zt.textureFormatReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!zt.textureTypeReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=O.width-ce&&te>=0&&te<=O.height-ne&&X.readPixels(Z,te,ce,ne,Ne.convert(Ze),Ne.convert(et),be)}finally{const He=z!==null?$e.get(z).__webglFramebuffer:null;Ye.bindFramebuffer(X.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(O,Z,te,ce,ne,be,Ue){if(!(O&&O.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=$e.get(O).__webglFramebuffer;if(O.isWebGLCubeRenderTarget&&Ue!==void 0&&(Be=Be[Ue]),Be){Ye.bindFramebuffer(X.FRAMEBUFFER,Be);try{const He=O.texture,Ze=He.format,et=He.type;if(!zt.textureFormatReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!zt.textureTypeReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Z>=0&&Z<=O.width-ce&&te>=0&&te<=O.height-ne){const We=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,We),X.bufferData(X.PIXEL_PACK_BUFFER,be.byteLength,X.STREAM_READ),X.readPixels(Z,te,ce,ne,Ne.convert(Ze),Ne.convert(et),0),X.flush();const _t=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);await wM(X,_t,4);try{X.bindBuffer(X.PIXEL_PACK_BUFFER,We),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,be)}finally{X.deleteBuffer(We),X.deleteSync(_t)}return be}}finally{const He=z!==null?$e.get(z).__webglFramebuffer:null;Ye.bindFramebuffer(X.FRAMEBUFFER,He)}}},this.copyFramebufferToTexture=function(O,Z=null,te=0){O.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Z=arguments[0]||null,O=arguments[1]);const ce=Math.pow(2,-te),ne=Math.floor(O.image.width*ce),be=Math.floor(O.image.height*ce),Ue=Z!==null?Z.x:0,Be=Z!==null?Z.y:0;at.setTexture2D(O,0),X.copyTexSubImage2D(X.TEXTURE_2D,te,0,0,Ue,Be,ne,be),Ye.unbindTexture()},this.copyTextureToTexture=function(O,Z,te=null,ce=null,ne=0){O.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),ce=arguments[0]||null,O=arguments[1],Z=arguments[2],ne=arguments[3]||0,te=null);let be,Ue,Be,He,Ze,et;te!==null?(be=te.max.x-te.min.x,Ue=te.max.y-te.min.y,Be=te.min.x,He=te.min.y):(be=O.image.width,Ue=O.image.height,Be=0,He=0),ce!==null?(Ze=ce.x,et=ce.y):(Ze=0,et=0);const We=Ne.convert(Z.format),_t=Ne.convert(Z.type);at.setTexture2D(Z,0),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,Z.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,Z.unpackAlignment);const bt=X.getParameter(X.UNPACK_ROW_LENGTH),Ft=X.getParameter(X.UNPACK_IMAGE_HEIGHT),Tn=X.getParameter(X.UNPACK_SKIP_PIXELS),vt=X.getParameter(X.UNPACK_SKIP_ROWS),Ve=X.getParameter(X.UNPACK_SKIP_IMAGES),on=O.isCompressedTexture?O.mipmaps[ne]:O.image;X.pixelStorei(X.UNPACK_ROW_LENGTH,on.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,on.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Be),X.pixelStorei(X.UNPACK_SKIP_ROWS,He),O.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,ne,Ze,et,be,Ue,We,_t,on.data):O.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,ne,Ze,et,on.width,on.height,We,on.data):X.texSubImage2D(X.TEXTURE_2D,ne,Ze,et,We,_t,on),X.pixelStorei(X.UNPACK_ROW_LENGTH,bt),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Ft),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Tn),X.pixelStorei(X.UNPACK_SKIP_ROWS,vt),X.pixelStorei(X.UNPACK_SKIP_IMAGES,Ve),ne===0&&Z.generateMipmaps&&X.generateMipmap(X.TEXTURE_2D),Ye.unbindTexture()},this.copyTextureToTexture3D=function(O,Z,te=null,ce=null,ne=0){O.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),te=arguments[0]||null,ce=arguments[1]||null,O=arguments[2],Z=arguments[3],ne=arguments[4]||0);let be,Ue,Be,He,Ze,et,We,_t,bt;const Ft=O.isCompressedTexture?O.mipmaps[ne]:O.image;te!==null?(be=te.max.x-te.min.x,Ue=te.max.y-te.min.y,Be=te.max.z-te.min.z,He=te.min.x,Ze=te.min.y,et=te.min.z):(be=Ft.width,Ue=Ft.height,Be=Ft.depth,He=0,Ze=0,et=0),ce!==null?(We=ce.x,_t=ce.y,bt=ce.z):(We=0,_t=0,bt=0);const Tn=Ne.convert(Z.format),vt=Ne.convert(Z.type);let Ve;if(Z.isData3DTexture)at.setTexture3D(Z,0),Ve=X.TEXTURE_3D;else if(Z.isDataArrayTexture||Z.isCompressedArrayTexture)at.setTexture2DArray(Z,0),Ve=X.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,Z.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,Z.unpackAlignment);const on=X.getParameter(X.UNPACK_ROW_LENGTH),Ct=X.getParameter(X.UNPACK_IMAGE_HEIGHT),ni=X.getParameter(X.UNPACK_SKIP_PIXELS),yn=X.getParameter(X.UNPACK_SKIP_ROWS),bi=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,Ft.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Ft.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,He),X.pixelStorei(X.UNPACK_SKIP_ROWS,Ze),X.pixelStorei(X.UNPACK_SKIP_IMAGES,et),O.isDataTexture||O.isData3DTexture?X.texSubImage3D(Ve,ne,We,_t,bt,be,Ue,Be,Tn,vt,Ft.data):Z.isCompressedArrayTexture?X.compressedTexSubImage3D(Ve,ne,We,_t,bt,be,Ue,Be,Tn,Ft.data):X.texSubImage3D(Ve,ne,We,_t,bt,be,Ue,Be,Tn,vt,Ft),X.pixelStorei(X.UNPACK_ROW_LENGTH,on),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Ct),X.pixelStorei(X.UNPACK_SKIP_PIXELS,ni),X.pixelStorei(X.UNPACK_SKIP_ROWS,yn),X.pixelStorei(X.UNPACK_SKIP_IMAGES,bi),ne===0&&Z.generateMipmaps&&X.generateMipmap(Ve),Ye.unbindTexture()},this.initRenderTarget=function(O){$e.get(O).__webglFramebuffer===void 0&&at.setupRenderTarget(O)},this.initTexture=function(O){O.isCubeTexture?at.setTextureCube(O,0):O.isData3DTexture?at.setTexture3D(O,0):O.isDataArrayTexture||O.isCompressedArrayTexture?at.setTexture2DArray(O,0):at.setTexture2D(O,0),Ye.unbindTexture()},this.resetState=function(){I=0,P=0,z=null,Ye.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return da}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===_d?"display-p3":"srgb",n.unpackColorSpace=Ut.workingColorSpace===su?"display-p3":"srgb"}}class z1 extends Nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fi,this.environmentIntensity=1,this.environmentRotation=new Fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class eu extends ns{constructor(e=1,n=32,a=16,r=0,l=Math.PI*2,u=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:a,phiStart:r,phiLength:l,thetaStart:u,thetaLength:h},n=Math.max(3,Math.floor(n)),a=Math.max(2,Math.floor(a));const d=Math.min(u+h,Math.PI);let p=0;const g=[],_=new ue,v=new ue,S=[],M=[],E=[],x=[];for(let y=0;y<=a;y++){const T=[],A=y/a;let D=0;y===0&&u===0?D=.5/n:y===a&&d===Math.PI&&(D=-.5/n);for(let I=0;I<=n;I++){const P=I/n;_.x=-e*Math.cos(r+P*l)*Math.sin(u+A*h),_.y=e*Math.cos(u+A*h),_.z=e*Math.sin(r+P*l)*Math.sin(u+A*h),M.push(_.x,_.y,_.z),v.copy(_).normalize(),E.push(v.x,v.y,v.z),x.push(P+D,1-A),T.push(p++)}g.push(T)}for(let y=0;y<a;y++)for(let T=0;T<n;T++){const A=g[y][T+1],D=g[y][T],I=g[y+1][T],P=g[y+1][T+1];(y!==0||u>0)&&S.push(A,D,P),(y!==a-1||d<Math.PI)&&S.push(D,I,P)}this.setIndex(S),this.setAttribute("position",new Ii(M,3)),this.setAttribute("normal",new Ii(E,3)),this.setAttribute("uv",new Ii(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new eu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ed extends ll{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new At(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=f_,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class L_ extends Nn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new At(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const td=new $t,U0=new ue,L0=new ue;class B1{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Mt(512,512),this.map=null,this.mapPass=null,this.matrix=new $t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yd,this._frameExtents=new Mt(1,1),this._viewportCount=1,this._viewports=[new _n(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,a=this.matrix;U0.setFromMatrixPosition(e.matrixWorld),n.position.copy(U0),L0.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(L0),n.updateMatrixWorld(),td.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(td),a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(td)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class I1 extends B1{constructor(){super(new A_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class F1 extends L_{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nn.DEFAULT_UP),this.updateMatrix(),this.target=new Nn,this.shadow=new I1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class H1 extends L_{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vd);class Ei{constructor(e){e===void 0&&(e=[0,0,0,0,0,0,0,0,0]),this.elements=e}identity(){const e=this.elements;e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1}setZero(){const e=this.elements;e[0]=0,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=0,e[6]=0,e[7]=0,e[8]=0}setTrace(e){const n=this.elements;n[0]=e.x,n[4]=e.y,n[8]=e.z}getTrace(e){e===void 0&&(e=new R);const n=this.elements;return e.x=n[0],e.y=n[4],e.z=n[8],e}vmult(e,n){n===void 0&&(n=new R);const a=this.elements,r=e.x,l=e.y,u=e.z;return n.x=a[0]*r+a[1]*l+a[2]*u,n.y=a[3]*r+a[4]*l+a[5]*u,n.z=a[6]*r+a[7]*l+a[8]*u,n}smult(e){for(let n=0;n<this.elements.length;n++)this.elements[n]*=e}mmult(e,n){n===void 0&&(n=new Ei);const a=this.elements,r=e.elements,l=n.elements,u=a[0],h=a[1],d=a[2],p=a[3],g=a[4],_=a[5],v=a[6],S=a[7],M=a[8],E=r[0],x=r[1],y=r[2],T=r[3],A=r[4],D=r[5],I=r[6],P=r[7],z=r[8];return l[0]=u*E+h*T+d*I,l[1]=u*x+h*A+d*P,l[2]=u*y+h*D+d*z,l[3]=p*E+g*T+_*I,l[4]=p*x+g*A+_*P,l[5]=p*y+g*D+_*z,l[6]=v*E+S*T+M*I,l[7]=v*x+S*A+M*P,l[8]=v*y+S*D+M*z,n}scale(e,n){n===void 0&&(n=new Ei);const a=this.elements,r=n.elements;for(let l=0;l!==3;l++)r[3*l+0]=e.x*a[3*l+0],r[3*l+1]=e.y*a[3*l+1],r[3*l+2]=e.z*a[3*l+2];return n}solve(e,n){n===void 0&&(n=new R);const a=3,r=4,l=[];let u,h;for(u=0;u<a*r;u++)l.push(0);for(u=0;u<3;u++)for(h=0;h<3;h++)l[u+r*h]=this.elements[u+3*h];l[3]=e.x,l[7]=e.y,l[11]=e.z;let d=3;const p=d;let g;const _=4;let v;do{if(u=p-d,l[u+r*u]===0){for(h=u+1;h<p;h++)if(l[u+r*h]!==0){g=_;do v=_-g,l[v+r*u]+=l[v+r*h];while(--g);break}}if(l[u+r*u]!==0)for(h=u+1;h<p;h++){const S=l[u+r*h]/l[u+r*u];g=_;do v=_-g,l[v+r*h]=v<=u?0:l[v+r*h]-l[v+r*u]*S;while(--g)}}while(--d);if(n.z=l[2*r+3]/l[2*r+2],n.y=(l[1*r+3]-l[1*r+2]*n.z)/l[1*r+1],n.x=(l[0*r+3]-l[0*r+2]*n.z-l[0*r+1]*n.y)/l[0*r+0],isNaN(n.x)||isNaN(n.y)||isNaN(n.z)||n.x===1/0||n.y===1/0||n.z===1/0)throw`Could not solve equation! Got x=[${n.toString()}], b=[${e.toString()}], A=[${this.toString()}]`;return n}e(e,n,a){if(a===void 0)return this.elements[n+3*e];this.elements[n+3*e]=a}copy(e){for(let n=0;n<e.elements.length;n++)this.elements[n]=e.elements[n];return this}toString(){let e="";for(let a=0;a<9;a++)e+=this.elements[a]+",";return e}reverse(e){e===void 0&&(e=new Ei);const n=3,a=6,r=G1;let l,u;for(l=0;l<3;l++)for(u=0;u<3;u++)r[l+a*u]=this.elements[l+3*u];r[3]=1,r[9]=0,r[15]=0,r[4]=0,r[10]=1,r[16]=0,r[5]=0,r[11]=0,r[17]=1;let h=3;const d=h;let p;const g=a;let _;do{if(l=d-h,r[l+a*l]===0){for(u=l+1;u<d;u++)if(r[l+a*u]!==0){p=g;do _=g-p,r[_+a*l]+=r[_+a*u];while(--p);break}}if(r[l+a*l]!==0)for(u=l+1;u<d;u++){const v=r[l+a*u]/r[l+a*l];p=g;do _=g-p,r[_+a*u]=_<=l?0:r[_+a*u]-r[_+a*l]*v;while(--p)}}while(--h);l=2;do{u=l-1;do{const v=r[l+a*u]/r[l+a*l];p=a;do _=a-p,r[_+a*u]=r[_+a*u]-r[_+a*l]*v;while(--p)}while(u--)}while(--l);l=2;do{const v=1/r[l+a*l];p=a;do _=a-p,r[_+a*l]=r[_+a*l]*v;while(--p)}while(l--);l=2;do{u=2;do{if(_=r[n+u+a*l],isNaN(_)||_===1/0)throw`Could not reverse! A=[${this.toString()}]`;e.e(l,u,_)}while(u--)}while(l--);return e}setRotationFromQuaternion(e){const n=e.x,a=e.y,r=e.z,l=e.w,u=n+n,h=a+a,d=r+r,p=n*u,g=n*h,_=n*d,v=a*h,S=a*d,M=r*d,E=l*u,x=l*h,y=l*d,T=this.elements;return T[0]=1-(v+M),T[1]=g-y,T[2]=_+x,T[3]=g+y,T[4]=1-(p+M),T[5]=S-E,T[6]=_-x,T[7]=S+E,T[8]=1-(p+v),this}transpose(e){e===void 0&&(e=new Ei);const n=this.elements,a=e.elements;let r;return a[0]=n[0],a[4]=n[4],a[8]=n[8],r=n[1],a[1]=n[3],a[3]=r,r=n[2],a[2]=n[6],a[6]=r,r=n[5],a[5]=n[7],a[7]=r,e}}const G1=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class R{constructor(e,n,a){e===void 0&&(e=0),n===void 0&&(n=0),a===void 0&&(a=0),this.x=e,this.y=n,this.z=a}cross(e,n){n===void 0&&(n=new R);const a=e.x,r=e.y,l=e.z,u=this.x,h=this.y,d=this.z;return n.x=h*l-d*r,n.y=d*a-u*l,n.z=u*r-h*a,n}set(e,n,a){return this.x=e,this.y=n,this.z=a,this}setZero(){this.x=this.y=this.z=0}vadd(e,n){if(n)n.x=e.x+this.x,n.y=e.y+this.y,n.z=e.z+this.z;else return new R(this.x+e.x,this.y+e.y,this.z+e.z)}vsub(e,n){if(n)n.x=this.x-e.x,n.y=this.y-e.y,n.z=this.z-e.z;else return new R(this.x-e.x,this.y-e.y,this.z-e.z)}crossmat(){return new Ei([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const e=this.x,n=this.y,a=this.z,r=Math.sqrt(e*e+n*n+a*a);if(r>0){const l=1/r;this.x*=l,this.y*=l,this.z*=l}else this.x=0,this.y=0,this.z=0;return r}unit(e){e===void 0&&(e=new R);const n=this.x,a=this.y,r=this.z;let l=Math.sqrt(n*n+a*a+r*r);return l>0?(l=1/l,e.x=n*l,e.y=a*l,e.z=r*l):(e.x=1,e.y=0,e.z=0),e}length(){const e=this.x,n=this.y,a=this.z;return Math.sqrt(e*e+n*n+a*a)}lengthSquared(){return this.dot(this)}distanceTo(e){const n=this.x,a=this.y,r=this.z,l=e.x,u=e.y,h=e.z;return Math.sqrt((l-n)*(l-n)+(u-a)*(u-a)+(h-r)*(h-r))}distanceSquared(e){const n=this.x,a=this.y,r=this.z,l=e.x,u=e.y,h=e.z;return(l-n)*(l-n)+(u-a)*(u-a)+(h-r)*(h-r)}scale(e,n){n===void 0&&(n=new R);const a=this.x,r=this.y,l=this.z;return n.x=e*a,n.y=e*r,n.z=e*l,n}vmul(e,n){return n===void 0&&(n=new R),n.x=e.x*this.x,n.y=e.y*this.y,n.z=e.z*this.z,n}addScaledVector(e,n,a){return a===void 0&&(a=new R),a.x=this.x+e*n.x,a.y=this.y+e*n.y,a.z=this.z+e*n.z,a}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(e){return e===void 0&&(e=new R),e.x=-this.x,e.y=-this.y,e.z=-this.z,e}tangents(e,n){const a=this.length();if(a>0){const r=k1,l=1/a;r.set(this.x*l,this.y*l,this.z*l);const u=V1;Math.abs(r.x)<.9?(u.set(1,0,0),r.cross(u,e)):(u.set(0,1,0),r.cross(u,e)),r.cross(e,n)}else e.set(1,0,0),n.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}lerp(e,n,a){const r=this.x,l=this.y,u=this.z;a.x=r+(e.x-r)*n,a.y=l+(e.y-l)*n,a.z=u+(e.z-u)*n}almostEquals(e,n){return n===void 0&&(n=1e-6),!(Math.abs(this.x-e.x)>n||Math.abs(this.y-e.y)>n||Math.abs(this.z-e.z)>n)}almostZero(e){return e===void 0&&(e=1e-6),!(Math.abs(this.x)>e||Math.abs(this.y)>e||Math.abs(this.z)>e)}isAntiparallelTo(e,n){return this.negate(O0),O0.almostEquals(e,n)}clone(){return new R(this.x,this.y,this.z)}}R.ZERO=new R(0,0,0);R.UNIT_X=new R(1,0,0);R.UNIT_Y=new R(0,1,0);R.UNIT_Z=new R(0,0,1);const k1=new R,V1=new R,O0=new R;class ei{constructor(e){e===void 0&&(e={}),this.lowerBound=new R,this.upperBound=new R,e.lowerBound&&this.lowerBound.copy(e.lowerBound),e.upperBound&&this.upperBound.copy(e.upperBound)}setFromPoints(e,n,a,r){const l=this.lowerBound,u=this.upperBound,h=a;l.copy(e[0]),h&&h.vmult(l,l),u.copy(l);for(let d=1;d<e.length;d++){let p=e[d];h&&(h.vmult(p,P0),p=P0),p.x>u.x&&(u.x=p.x),p.x<l.x&&(l.x=p.x),p.y>u.y&&(u.y=p.y),p.y<l.y&&(l.y=p.y),p.z>u.z&&(u.z=p.z),p.z<l.z&&(l.z=p.z)}return n&&(n.vadd(l,l),n.vadd(u,u)),r&&(l.x-=r,l.y-=r,l.z-=r,u.x+=r,u.y+=r,u.z+=r),this}copy(e){return this.lowerBound.copy(e.lowerBound),this.upperBound.copy(e.upperBound),this}clone(){return new ei().copy(this)}extend(e){this.lowerBound.x=Math.min(this.lowerBound.x,e.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,e.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,e.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,e.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,e.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,e.upperBound.z)}overlaps(e){const n=this.lowerBound,a=this.upperBound,r=e.lowerBound,l=e.upperBound,u=r.x<=a.x&&a.x<=l.x||n.x<=l.x&&l.x<=a.x,h=r.y<=a.y&&a.y<=l.y||n.y<=l.y&&l.y<=a.y,d=r.z<=a.z&&a.z<=l.z||n.z<=l.z&&l.z<=a.z;return u&&h&&d}volume(){const e=this.lowerBound,n=this.upperBound;return(n.x-e.x)*(n.y-e.y)*(n.z-e.z)}contains(e){const n=this.lowerBound,a=this.upperBound,r=e.lowerBound,l=e.upperBound;return n.x<=r.x&&a.x>=l.x&&n.y<=r.y&&a.y>=l.y&&n.z<=r.z&&a.z>=l.z}getCorners(e,n,a,r,l,u,h,d){const p=this.lowerBound,g=this.upperBound;e.copy(p),n.set(g.x,p.y,p.z),a.set(g.x,g.y,p.z),r.set(p.x,g.y,g.z),l.set(g.x,p.y,g.z),u.set(p.x,g.y,p.z),h.set(p.x,p.y,g.z),d.copy(g)}toLocalFrame(e,n){const a=z0,r=a[0],l=a[1],u=a[2],h=a[3],d=a[4],p=a[5],g=a[6],_=a[7];this.getCorners(r,l,u,h,d,p,g,_);for(let v=0;v!==8;v++){const S=a[v];e.pointToLocal(S,S)}return n.setFromPoints(a)}toWorldFrame(e,n){const a=z0,r=a[0],l=a[1],u=a[2],h=a[3],d=a[4],p=a[5],g=a[6],_=a[7];this.getCorners(r,l,u,h,d,p,g,_);for(let v=0;v!==8;v++){const S=a[v];e.pointToWorld(S,S)}return n.setFromPoints(a)}overlapsRay(e){const{direction:n,from:a}=e,r=1/n.x,l=1/n.y,u=1/n.z,h=(this.lowerBound.x-a.x)*r,d=(this.upperBound.x-a.x)*r,p=(this.lowerBound.y-a.y)*l,g=(this.upperBound.y-a.y)*l,_=(this.lowerBound.z-a.z)*u,v=(this.upperBound.z-a.z)*u,S=Math.max(Math.max(Math.min(h,d),Math.min(p,g)),Math.min(_,v)),M=Math.min(Math.min(Math.max(h,d),Math.max(p,g)),Math.max(_,v));return!(M<0||S>M)}}const P0=new R,z0=[new R,new R,new R,new R,new R,new R,new R,new R];class B0{constructor(){this.matrix=[]}get(e,n){let{index:a}=e,{index:r}=n;if(r>a){const l=r;r=a,a=l}return this.matrix[(a*(a+1)>>1)+r-1]}set(e,n,a){let{index:r}=e,{index:l}=n;if(l>r){const u=l;l=r,r=u}this.matrix[(r*(r+1)>>1)+l-1]=a?1:0}reset(){for(let e=0,n=this.matrix.length;e!==n;e++)this.matrix[e]=0}setNumObjects(e){this.matrix.length=e*(e-1)>>1}}class O_{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;return a[e]===void 0&&(a[e]=[]),a[e].includes(n)||a[e].push(n),this}hasEventListener(e,n){if(this._listeners===void 0)return!1;const a=this._listeners;return!!(a[e]!==void 0&&a[e].includes(n))}hasAnyEventListener(e){return this._listeners===void 0?!1:this._listeners[e]!==void 0}removeEventListener(e,n){if(this._listeners===void 0)return this;const a=this._listeners;if(a[e]===void 0)return this;const r=a[e].indexOf(n);return r!==-1&&a[e].splice(r,1),this}dispatchEvent(e){if(this._listeners===void 0)return this;const a=this._listeners[e.type];if(a!==void 0){e.target=this;for(let r=0,l=a.length;r<l;r++)a[r].call(this,e)}return this}}class rn{constructor(e,n,a,r){e===void 0&&(e=0),n===void 0&&(n=0),a===void 0&&(a=0),r===void 0&&(r=1),this.x=e,this.y=n,this.z=a,this.w=r}set(e,n,a,r){return this.x=e,this.y=n,this.z=a,this.w=r,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(e,n){const a=Math.sin(n*.5);return this.x=e.x*a,this.y=e.y*a,this.z=e.z*a,this.w=Math.cos(n*.5),this}toAxisAngle(e){e===void 0&&(e=new R),this.normalize();const n=2*Math.acos(this.w),a=Math.sqrt(1-this.w*this.w);return a<.001?(e.x=this.x,e.y=this.y,e.z=this.z):(e.x=this.x/a,e.y=this.y/a,e.z=this.z/a),[e,n]}setFromVectors(e,n){if(e.isAntiparallelTo(n)){const a=j1,r=W1;e.tangents(a,r),this.setFromAxisAngle(a,Math.PI)}else{const a=e.cross(n);this.x=a.x,this.y=a.y,this.z=a.z,this.w=Math.sqrt(e.length()**2*n.length()**2)+e.dot(n),this.normalize()}return this}mult(e,n){n===void 0&&(n=new rn);const a=this.x,r=this.y,l=this.z,u=this.w,h=e.x,d=e.y,p=e.z,g=e.w;return n.x=a*g+u*h+r*p-l*d,n.y=r*g+u*d+l*h-a*p,n.z=l*g+u*p+a*d-r*h,n.w=u*g-a*h-r*d-l*p,n}inverse(e){e===void 0&&(e=new rn);const n=this.x,a=this.y,r=this.z,l=this.w;this.conjugate(e);const u=1/(n*n+a*a+r*r+l*l);return e.x*=u,e.y*=u,e.z*=u,e.w*=u,e}conjugate(e){return e===void 0&&(e=new rn),e.x=-this.x,e.y=-this.y,e.z=-this.z,e.w=this.w,e}normalize(){let e=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(e=1/e,this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}normalizeFast(){const e=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}vmult(e,n){n===void 0&&(n=new R);const a=e.x,r=e.y,l=e.z,u=this.x,h=this.y,d=this.z,p=this.w,g=p*a+h*l-d*r,_=p*r+d*a-u*l,v=p*l+u*r-h*a,S=-u*a-h*r-d*l;return n.x=g*p+S*-u+_*-d-v*-h,n.y=_*p+S*-h+v*-u-g*-d,n.z=v*p+S*-d+g*-h-_*-u,n}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}toEuler(e,n){n===void 0&&(n="YZX");let a,r,l;const u=this.x,h=this.y,d=this.z,p=this.w;switch(n){case"YZX":const g=u*h+d*p;if(g>.499&&(a=2*Math.atan2(u,p),r=Math.PI/2,l=0),g<-.499&&(a=-2*Math.atan2(u,p),r=-Math.PI/2,l=0),a===void 0){const _=u*u,v=h*h,S=d*d;a=Math.atan2(2*h*p-2*u*d,1-2*v-2*S),r=Math.asin(2*g),l=Math.atan2(2*u*p-2*h*d,1-2*_-2*S)}break;default:throw new Error(`Euler order ${n} not supported yet.`)}e.y=a,e.z=r,e.x=l}setFromEuler(e,n,a,r){r===void 0&&(r="XYZ");const l=Math.cos(e/2),u=Math.cos(n/2),h=Math.cos(a/2),d=Math.sin(e/2),p=Math.sin(n/2),g=Math.sin(a/2);return r==="XYZ"?(this.x=d*u*h+l*p*g,this.y=l*p*h-d*u*g,this.z=l*u*g+d*p*h,this.w=l*u*h-d*p*g):r==="YXZ"?(this.x=d*u*h+l*p*g,this.y=l*p*h-d*u*g,this.z=l*u*g-d*p*h,this.w=l*u*h+d*p*g):r==="ZXY"?(this.x=d*u*h-l*p*g,this.y=l*p*h+d*u*g,this.z=l*u*g+d*p*h,this.w=l*u*h-d*p*g):r==="ZYX"?(this.x=d*u*h-l*p*g,this.y=l*p*h+d*u*g,this.z=l*u*g-d*p*h,this.w=l*u*h+d*p*g):r==="YZX"?(this.x=d*u*h+l*p*g,this.y=l*p*h+d*u*g,this.z=l*u*g-d*p*h,this.w=l*u*h-d*p*g):r==="XZY"&&(this.x=d*u*h-l*p*g,this.y=l*p*h-d*u*g,this.z=l*u*g+d*p*h,this.w=l*u*h+d*p*g),this}clone(){return new rn(this.x,this.y,this.z,this.w)}slerp(e,n,a){a===void 0&&(a=new rn);const r=this.x,l=this.y,u=this.z,h=this.w;let d=e.x,p=e.y,g=e.z,_=e.w,v,S,M,E,x;return S=r*d+l*p+u*g+h*_,S<0&&(S=-S,d=-d,p=-p,g=-g,_=-_),1-S>1e-6?(v=Math.acos(S),M=Math.sin(v),E=Math.sin((1-n)*v)/M,x=Math.sin(n*v)/M):(E=1-n,x=n),a.x=E*r+x*d,a.y=E*l+x*p,a.z=E*u+x*g,a.w=E*h+x*_,a}integrate(e,n,a,r){r===void 0&&(r=new rn);const l=e.x*a.x,u=e.y*a.y,h=e.z*a.z,d=this.x,p=this.y,g=this.z,_=this.w,v=n*.5;return r.x+=v*(l*_+u*g-h*p),r.y+=v*(u*_+h*d-l*g),r.z+=v*(h*_+l*p-u*d),r.w+=v*(-l*d-u*p-h*g),r}}const j1=new R,W1=new R,q1={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class Pe{constructor(e){e===void 0&&(e={}),this.id=Pe.idCounter++,this.type=e.type||0,this.boundingSphereRadius=0,this.collisionResponse=e.collisionResponse?e.collisionResponse:!0,this.collisionFilterGroup=e.collisionFilterGroup!==void 0?e.collisionFilterGroup:1,this.collisionFilterMask=e.collisionFilterMask!==void 0?e.collisionFilterMask:-1,this.material=e.material?e.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(e,n){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(e,n,a,r){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}Pe.idCounter=0;Pe.types=q1;class Rt{constructor(e){e===void 0&&(e={}),this.position=new R,this.quaternion=new rn,e.position&&this.position.copy(e.position),e.quaternion&&this.quaternion.copy(e.quaternion)}pointToLocal(e,n){return Rt.pointToLocalFrame(this.position,this.quaternion,e,n)}pointToWorld(e,n){return Rt.pointToWorldFrame(this.position,this.quaternion,e,n)}vectorToWorldFrame(e,n){return n===void 0&&(n=new R),this.quaternion.vmult(e,n),n}static pointToLocalFrame(e,n,a,r){return r===void 0&&(r=new R),a.vsub(e,r),n.conjugate(I0),I0.vmult(r,r),r}static pointToWorldFrame(e,n,a,r){return r===void 0&&(r=new R),n.vmult(a,r),r.vadd(e,r),r}static vectorToWorldFrame(e,n,a){return a===void 0&&(a=new R),e.vmult(n,a),a}static vectorToLocalFrame(e,n,a,r){return r===void 0&&(r=new R),n.w*=-1,n.vmult(a,r),n.w*=-1,r}}const I0=new rn;class il extends Pe{constructor(e){e===void 0&&(e={});const{vertices:n=[],faces:a=[],normals:r=[],axes:l,boundingSphereRadius:u}=e;super({type:Pe.types.CONVEXPOLYHEDRON}),this.vertices=n,this.faces=a,this.faceNormals=r,this.faceNormals.length===0&&this.computeNormals(),u?this.boundingSphereRadius=u:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=l?l.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const e=this.faces,n=this.vertices,a=this.uniqueEdges;a.length=0;const r=new R;for(let l=0;l!==e.length;l++){const u=e[l],h=u.length;for(let d=0;d!==h;d++){const p=(d+1)%h;n[u[d]].vsub(n[u[p]],r),r.normalize();let g=!1;for(let _=0;_!==a.length;_++)if(a[_].almostEquals(r)||a[_].almostEquals(r)){g=!0;break}g||a.push(r.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let e=0;e<this.faces.length;e++){for(let r=0;r<this.faces[e].length;r++)if(!this.vertices[this.faces[e][r]])throw new Error(`Vertex ${this.faces[e][r]} not found!`);const n=this.faceNormals[e]||new R;this.getFaceNormal(e,n),n.negate(n),this.faceNormals[e]=n;const a=this.vertices[this.faces[e][0]];if(n.dot(a)<0){console.error(`.faceNormals[${e}] = Vec3(${n.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let r=0;r<this.faces[e].length;r++)console.warn(`.vertices[${this.faces[e][r]}] = Vec3(${this.vertices[this.faces[e][r]].toString()})`)}}}getFaceNormal(e,n){const a=this.faces[e],r=this.vertices[a[0]],l=this.vertices[a[1]],u=this.vertices[a[2]];il.computeNormal(r,l,u,n)}static computeNormal(e,n,a,r){const l=new R,u=new R;n.vsub(e,u),a.vsub(n,l),l.cross(u,r),r.isZero()||r.normalize()}clipAgainstHull(e,n,a,r,l,u,h,d,p){const g=new R;let _=-1,v=-Number.MAX_VALUE;for(let M=0;M<a.faces.length;M++){g.copy(a.faceNormals[M]),l.vmult(g,g);const E=g.dot(u);E>v&&(v=E,_=M)}const S=[];for(let M=0;M<a.faces[_].length;M++){const E=a.vertices[a.faces[_][M]],x=new R;x.copy(E),l.vmult(x,x),r.vadd(x,x),S.push(x)}_>=0&&this.clipFaceAgainstHull(u,e,n,S,h,d,p)}findSeparatingAxis(e,n,a,r,l,u,h,d){const p=new R,g=new R,_=new R,v=new R,S=new R,M=new R;let E=Number.MAX_VALUE;const x=this;if(x.uniqueAxes)for(let y=0;y!==x.uniqueAxes.length;y++){a.vmult(x.uniqueAxes[y],p);const T=x.testSepAxis(p,e,n,a,r,l);if(T===!1)return!1;T<E&&(E=T,u.copy(p))}else{const y=h?h.length:x.faces.length;for(let T=0;T<y;T++){const A=h?h[T]:T;p.copy(x.faceNormals[A]),a.vmult(p,p);const D=x.testSepAxis(p,e,n,a,r,l);if(D===!1)return!1;D<E&&(E=D,u.copy(p))}}if(e.uniqueAxes)for(let y=0;y!==e.uniqueAxes.length;y++){l.vmult(e.uniqueAxes[y],g);const T=x.testSepAxis(g,e,n,a,r,l);if(T===!1)return!1;T<E&&(E=T,u.copy(g))}else{const y=d?d.length:e.faces.length;for(let T=0;T<y;T++){const A=d?d[T]:T;g.copy(e.faceNormals[A]),l.vmult(g,g);const D=x.testSepAxis(g,e,n,a,r,l);if(D===!1)return!1;D<E&&(E=D,u.copy(g))}}for(let y=0;y!==x.uniqueEdges.length;y++){a.vmult(x.uniqueEdges[y],v);for(let T=0;T!==e.uniqueEdges.length;T++)if(l.vmult(e.uniqueEdges[T],S),v.cross(S,M),!M.almostZero()){M.normalize();const A=x.testSepAxis(M,e,n,a,r,l);if(A===!1)return!1;A<E&&(E=A,u.copy(M))}}return r.vsub(n,_),_.dot(u)>0&&u.negate(u),!0}testSepAxis(e,n,a,r,l,u){const h=this;il.project(h,e,a,r,nd),il.project(n,e,l,u,id);const d=nd[0],p=nd[1],g=id[0],_=id[1];if(d<_||g<p)return!1;const v=d-_,S=g-p;return v<S?v:S}calculateLocalInertia(e,n){const a=new R,r=new R;this.computeLocalAABB(r,a);const l=a.x-r.x,u=a.y-r.y,h=a.z-r.z;n.x=1/12*e*(2*u*2*u+2*h*2*h),n.y=1/12*e*(2*l*2*l+2*h*2*h),n.z=1/12*e*(2*u*2*u+2*l*2*l)}getPlaneConstantOfFace(e){const n=this.faces[e],a=this.faceNormals[e],r=this.vertices[n[0]];return-a.dot(r)}clipFaceAgainstHull(e,n,a,r,l,u,h){const d=new R,p=new R,g=new R,_=new R,v=new R,S=new R,M=new R,E=new R,x=this,y=[],T=r,A=y;let D=-1,I=Number.MAX_VALUE;for(let w=0;w<x.faces.length;w++){d.copy(x.faceNormals[w]),a.vmult(d,d);const F=d.dot(e);F<I&&(I=F,D=w)}if(D<0)return;const P=x.faces[D];P.connectedFaces=[];for(let w=0;w<x.faces.length;w++)for(let F=0;F<x.faces[w].length;F++)P.indexOf(x.faces[w][F])!==-1&&w!==D&&P.connectedFaces.indexOf(w)===-1&&P.connectedFaces.push(w);const z=P.length;for(let w=0;w<z;w++){const F=x.vertices[P[w]],ie=x.vertices[P[(w+1)%z]];F.vsub(ie,p),g.copy(p),a.vmult(g,g),n.vadd(g,g),_.copy(this.faceNormals[D]),a.vmult(_,_),n.vadd(_,_),g.cross(_,v),v.negate(v),S.copy(F),a.vmult(S,S),n.vadd(S,S);const k=P.connectedFaces[w];M.copy(this.faceNormals[k]);const Q=this.getPlaneConstantOfFace(k);E.copy(M),a.vmult(E,E);const Y=Q-E.dot(n);for(this.clipFaceAgainstPlane(T,A,E,Y);T.length;)T.shift();for(;A.length;)T.push(A.shift())}M.copy(this.faceNormals[D]);const V=this.getPlaneConstantOfFace(D);E.copy(M),a.vmult(E,E);const U=V-E.dot(n);for(let w=0;w<T.length;w++){let F=E.dot(T[w])+U;if(F<=l&&(console.log(`clamped: depth=${F} to minDist=${l}`),F=l),F<=u){const ie=T[w];if(F<=1e-6){const k={point:ie,normal:E,depth:F};h.push(k)}}}}clipFaceAgainstPlane(e,n,a,r){let l,u;const h=e.length;if(h<2)return n;let d=e[e.length-1],p=e[0];l=a.dot(d)+r;for(let g=0;g<h;g++){if(p=e[g],u=a.dot(p)+r,l<0)if(u<0){const _=new R;_.copy(p),n.push(_)}else{const _=new R;d.lerp(p,l/(l-u),_),n.push(_)}else if(u<0){const _=new R;d.lerp(p,l/(l-u),_),n.push(_),n.push(p)}d=p,l=u}return n}computeWorldVertices(e,n){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new R);const a=this.vertices,r=this.worldVertices;for(let l=0;l!==this.vertices.length;l++)n.vmult(a[l],r[l]),e.vadd(r[l],r[l]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(e,n){const a=this.vertices;e.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),n.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let r=0;r<this.vertices.length;r++){const l=a[r];l.x<e.x?e.x=l.x:l.x>n.x&&(n.x=l.x),l.y<e.y?e.y=l.y:l.y>n.y&&(n.y=l.y),l.z<e.z?e.z=l.z:l.z>n.z&&(n.z=l.z)}}computeWorldFaceNormals(e){const n=this.faceNormals.length;for(;this.worldFaceNormals.length<n;)this.worldFaceNormals.push(new R);const a=this.faceNormals,r=this.worldFaceNormals;for(let l=0;l!==n;l++)e.vmult(a[l],r[l]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let e=0;const n=this.vertices;for(let a=0;a!==n.length;a++){const r=n[a].lengthSquared();r>e&&(e=r)}this.boundingSphereRadius=Math.sqrt(e)}calculateWorldAABB(e,n,a,r){const l=this.vertices;let u,h,d,p,g,_,v=new R;for(let S=0;S<l.length;S++){v.copy(l[S]),n.vmult(v,v),e.vadd(v,v);const M=v;(u===void 0||M.x<u)&&(u=M.x),(p===void 0||M.x>p)&&(p=M.x),(h===void 0||M.y<h)&&(h=M.y),(g===void 0||M.y>g)&&(g=M.y),(d===void 0||M.z<d)&&(d=M.z),(_===void 0||M.z>_)&&(_=M.z)}a.set(u,h,d),r.set(p,g,_)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(e){e===void 0&&(e=new R);const n=this.vertices;for(let a=0;a<n.length;a++)e.vadd(n[a],e);return e.scale(1/n.length,e),e}transformAllPoints(e,n){const a=this.vertices.length,r=this.vertices;if(n){for(let l=0;l<a;l++){const u=r[l];n.vmult(u,u)}for(let l=0;l<this.faceNormals.length;l++){const u=this.faceNormals[l];n.vmult(u,u)}}if(e)for(let l=0;l<a;l++){const u=r[l];u.vadd(e,u)}}pointIsInside(e){const n=this.vertices,a=this.faces,r=this.faceNormals,l=new R;this.getAveragePointLocal(l);for(let u=0;u<this.faces.length;u++){let h=r[u];const d=n[a[u][0]],p=new R;e.vsub(d,p);const g=h.dot(p),_=new R;l.vsub(d,_);const v=h.dot(_);if(g<0&&v>0||g>0&&v<0)return!1}return-1}static project(e,n,a,r,l){const u=e.vertices.length,h=X1;let d=0,p=0;const g=Y1,_=e.vertices;g.setZero(),Rt.vectorToLocalFrame(a,r,n,h),Rt.pointToLocalFrame(a,r,g,g);const v=g.dot(h);p=d=_[0].dot(h);for(let S=1;S<u;S++){const M=_[S].dot(h);M>d&&(d=M),M<p&&(p=M)}if(p-=v,d-=v,p>d){const S=p;p=d,d=S}l[0]=d,l[1]=p}}const nd=[],id=[];new R;const X1=new R,Y1=new R;class lu extends Pe{constructor(e){super({type:Pe.types.BOX}),this.halfExtents=e,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const e=this.halfExtents.x,n=this.halfExtents.y,a=this.halfExtents.z,r=R,l=[new r(-e,-n,-a),new r(e,-n,-a),new r(e,n,-a),new r(-e,n,-a),new r(-e,-n,a),new r(e,-n,a),new r(e,n,a),new r(-e,n,a)],u=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],h=[new r(0,0,1),new r(0,1,0),new r(1,0,0)],d=new il({vertices:l,faces:u,axes:h});this.convexPolyhedronRepresentation=d,d.material=this.material}calculateLocalInertia(e,n){return n===void 0&&(n=new R),lu.calculateInertia(this.halfExtents,e,n),n}static calculateInertia(e,n,a){const r=e;a.x=1/12*n*(2*r.y*2*r.y+2*r.z*2*r.z),a.y=1/12*n*(2*r.x*2*r.x+2*r.z*2*r.z),a.z=1/12*n*(2*r.y*2*r.y+2*r.x*2*r.x)}getSideNormals(e,n){const a=e,r=this.halfExtents;if(a[0].set(r.x,0,0),a[1].set(0,r.y,0),a[2].set(0,0,r.z),a[3].set(-r.x,0,0),a[4].set(0,-r.y,0),a[5].set(0,0,-r.z),n!==void 0)for(let l=0;l!==a.length;l++)n.vmult(a[l],a[l]);return a}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(e,n,a){const r=this.halfExtents,l=[[r.x,r.y,r.z],[-r.x,r.y,r.z],[-r.x,-r.y,r.z],[-r.x,-r.y,-r.z],[r.x,-r.y,-r.z],[r.x,r.y,-r.z],[-r.x,r.y,-r.z],[r.x,-r.y,r.z]];for(let u=0;u<l.length;u++)Xa.set(l[u][0],l[u][1],l[u][2]),n.vmult(Xa,Xa),e.vadd(Xa,Xa),a(Xa.x,Xa.y,Xa.z)}calculateWorldAABB(e,n,a,r){const l=this.halfExtents;Di[0].set(l.x,l.y,l.z),Di[1].set(-l.x,l.y,l.z),Di[2].set(-l.x,-l.y,l.z),Di[3].set(-l.x,-l.y,-l.z),Di[4].set(l.x,-l.y,-l.z),Di[5].set(l.x,l.y,-l.z),Di[6].set(-l.x,l.y,-l.z),Di[7].set(l.x,-l.y,l.z);const u=Di[0];n.vmult(u,u),e.vadd(u,u),r.copy(u),a.copy(u);for(let h=1;h<8;h++){const d=Di[h];n.vmult(d,d),e.vadd(d,d);const p=d.x,g=d.y,_=d.z;p>r.x&&(r.x=p),g>r.y&&(r.y=g),_>r.z&&(r.z=_),p<a.x&&(a.x=p),g<a.y&&(a.y=g),_<a.z&&(a.z=_)}}}const Xa=new R,Di=[new R,new R,new R,new R,new R,new R,new R,new R],Md={DYNAMIC:1,STATIC:2,KINEMATIC:4},Ed={AWAKE:0,SLEEPY:1,SLEEPING:2};class ze extends O_{constructor(e){e===void 0&&(e={}),super(),this.id=ze.idCounter++,this.index=-1,this.world=null,this.vlambda=new R,this.collisionFilterGroup=typeof e.collisionFilterGroup=="number"?e.collisionFilterGroup:1,this.collisionFilterMask=typeof e.collisionFilterMask=="number"?e.collisionFilterMask:-1,this.collisionResponse=typeof e.collisionResponse=="boolean"?e.collisionResponse:!0,this.position=new R,this.previousPosition=new R,this.interpolatedPosition=new R,this.initPosition=new R,e.position&&(this.position.copy(e.position),this.previousPosition.copy(e.position),this.interpolatedPosition.copy(e.position),this.initPosition.copy(e.position)),this.velocity=new R,e.velocity&&this.velocity.copy(e.velocity),this.initVelocity=new R,this.force=new R;const n=typeof e.mass=="number"?e.mass:0;this.mass=n,this.invMass=n>0?1/n:0,this.material=e.material||null,this.linearDamping=typeof e.linearDamping=="number"?e.linearDamping:.01,this.type=n<=0?ze.STATIC:ze.DYNAMIC,typeof e.type==typeof ze.STATIC&&(this.type=e.type),this.allowSleep=typeof e.allowSleep<"u"?e.allowSleep:!0,this.sleepState=ze.AWAKE,this.sleepSpeedLimit=typeof e.sleepSpeedLimit<"u"?e.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof e.sleepTimeLimit<"u"?e.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new R,this.quaternion=new rn,this.initQuaternion=new rn,this.previousQuaternion=new rn,this.interpolatedQuaternion=new rn,e.quaternion&&(this.quaternion.copy(e.quaternion),this.initQuaternion.copy(e.quaternion),this.previousQuaternion.copy(e.quaternion),this.interpolatedQuaternion.copy(e.quaternion)),this.angularVelocity=new R,e.angularVelocity&&this.angularVelocity.copy(e.angularVelocity),this.initAngularVelocity=new R,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new R,this.invInertia=new R,this.invInertiaWorld=new Ei,this.invMassSolve=0,this.invInertiaSolve=new R,this.invInertiaWorldSolve=new Ei,this.fixedRotation=typeof e.fixedRotation<"u"?e.fixedRotation:!1,this.angularDamping=typeof e.angularDamping<"u"?e.angularDamping:.01,this.linearFactor=new R(1,1,1),e.linearFactor&&this.linearFactor.copy(e.linearFactor),this.angularFactor=new R(1,1,1),e.angularFactor&&this.angularFactor.copy(e.angularFactor),this.aabb=new ei,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new R,this.isTrigger=!!e.isTrigger,e.shape&&this.addShape(e.shape),this.updateMassProperties()}wakeUp(){const e=this.sleepState;this.sleepState=ze.AWAKE,this.wakeUpAfterNarrowphase=!1,e===ze.SLEEPING&&this.dispatchEvent(ze.wakeupEvent)}sleep(){this.sleepState=ze.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(e){if(this.allowSleep){const n=this.sleepState,a=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),r=this.sleepSpeedLimit**2;n===ze.AWAKE&&a<r?(this.sleepState=ze.SLEEPY,this.timeLastSleepy=e,this.dispatchEvent(ze.sleepyEvent)):n===ze.SLEEPY&&a>r?this.wakeUp():n===ze.SLEEPY&&e-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(ze.sleepEvent))}}updateSolveMassProperties(){this.sleepState===ze.SLEEPING||this.type===ze.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(e,n){return n===void 0&&(n=new R),e.vsub(this.position,n),this.quaternion.conjugate().vmult(n,n),n}vectorToLocalFrame(e,n){return n===void 0&&(n=new R),this.quaternion.conjugate().vmult(e,n),n}pointToWorldFrame(e,n){return n===void 0&&(n=new R),this.quaternion.vmult(e,n),n.vadd(this.position,n),n}vectorToWorldFrame(e,n){return n===void 0&&(n=new R),this.quaternion.vmult(e,n),n}addShape(e,n,a){const r=new R,l=new rn;return n&&r.copy(n),a&&l.copy(a),this.shapes.push(e),this.shapeOffsets.push(r),this.shapeOrientations.push(l),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=this,this}removeShape(e){const n=this.shapes.indexOf(e);return n===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(n,1),this.shapeOffsets.splice(n,1),this.shapeOrientations.splice(n,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=null,this)}updateBoundingRadius(){const e=this.shapes,n=this.shapeOffsets,a=e.length;let r=0;for(let l=0;l!==a;l++){const u=e[l];u.updateBoundingSphereRadius();const h=n[l].length(),d=u.boundingSphereRadius;h+d>r&&(r=h+d)}this.boundingRadius=r}updateAABB(){const e=this.shapes,n=this.shapeOffsets,a=this.shapeOrientations,r=e.length,l=K1,u=Z1,h=this.quaternion,d=this.aabb,p=Q1;for(let g=0;g!==r;g++){const _=e[g];h.vmult(n[g],l),l.vadd(this.position,l),h.mult(a[g],u),_.calculateWorldAABB(l,u,p.lowerBound,p.upperBound),g===0?d.copy(p):d.extend(p)}this.aabbNeedsUpdate=!1}updateInertiaWorld(e){const n=this.invInertia;if(!(n.x===n.y&&n.y===n.z&&!e)){const a=J1,r=$1;a.setRotationFromQuaternion(this.quaternion),a.transpose(r),a.scale(n,a),a.mmult(r,this.invInertiaWorld)}}applyForce(e,n){if(n===void 0&&(n=new R),this.type!==ze.DYNAMIC)return;this.sleepState===ze.SLEEPING&&this.wakeUp();const a=ew;n.cross(e,a),this.force.vadd(e,this.force),this.torque.vadd(a,this.torque)}applyLocalForce(e,n){if(n===void 0&&(n=new R),this.type!==ze.DYNAMIC)return;const a=tw,r=nw;this.vectorToWorldFrame(e,a),this.vectorToWorldFrame(n,r),this.applyForce(a,r)}applyTorque(e){this.type===ze.DYNAMIC&&(this.sleepState===ze.SLEEPING&&this.wakeUp(),this.torque.vadd(e,this.torque))}applyImpulse(e,n){if(n===void 0&&(n=new R),this.type!==ze.DYNAMIC)return;this.sleepState===ze.SLEEPING&&this.wakeUp();const a=n,r=iw;r.copy(e),r.scale(this.invMass,r),this.velocity.vadd(r,this.velocity);const l=aw;a.cross(e,l),this.invInertiaWorld.vmult(l,l),this.angularVelocity.vadd(l,this.angularVelocity)}applyLocalImpulse(e,n){if(n===void 0&&(n=new R),this.type!==ze.DYNAMIC)return;const a=sw,r=rw;this.vectorToWorldFrame(e,a),this.vectorToWorldFrame(n,r),this.applyImpulse(a,r)}updateMassProperties(){const e=ow;this.invMass=this.mass>0?1/this.mass:0;const n=this.inertia,a=this.fixedRotation;this.updateAABB(),e.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),lu.calculateInertia(e,this.mass,n),this.invInertia.set(n.x>0&&!a?1/n.x:0,n.y>0&&!a?1/n.y:0,n.z>0&&!a?1/n.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(e,n){const a=new R;return e.vsub(this.position,a),this.angularVelocity.cross(a,n),this.velocity.vadd(n,n),n}integrate(e,n,a){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===ze.DYNAMIC||this.type===ze.KINEMATIC)||this.sleepState===ze.SLEEPING)return;const r=this.velocity,l=this.angularVelocity,u=this.position,h=this.force,d=this.torque,p=this.quaternion,g=this.invMass,_=this.invInertiaWorld,v=this.linearFactor,S=g*e;r.x+=h.x*S*v.x,r.y+=h.y*S*v.y,r.z+=h.z*S*v.z;const M=_.elements,E=this.angularFactor,x=d.x*E.x,y=d.y*E.y,T=d.z*E.z;l.x+=e*(M[0]*x+M[1]*y+M[2]*T),l.y+=e*(M[3]*x+M[4]*y+M[5]*T),l.z+=e*(M[6]*x+M[7]*y+M[8]*T),u.x+=r.x*e,u.y+=r.y*e,u.z+=r.z*e,p.integrate(this.angularVelocity,e,this.angularFactor,p),n&&(a?p.normalizeFast():p.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}ze.idCounter=0;ze.COLLIDE_EVENT_NAME="collide";ze.DYNAMIC=Md.DYNAMIC;ze.STATIC=Md.STATIC;ze.KINEMATIC=Md.KINEMATIC;ze.AWAKE=Ed.AWAKE;ze.SLEEPY=Ed.SLEEPY;ze.SLEEPING=Ed.SLEEPING;ze.wakeupEvent={type:"wakeup"};ze.sleepyEvent={type:"sleepy"};ze.sleepEvent={type:"sleep"};const K1=new R,Z1=new rn,Q1=new ei,J1=new Ei,$1=new Ei;new Ei;const ew=new R,tw=new R,nw=new R,iw=new R,aw=new R,sw=new R,rw=new R,ow=new R;class lw{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(e,n,a){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(e,n){return!((e.collisionFilterGroup&n.collisionFilterMask)===0||(n.collisionFilterGroup&e.collisionFilterMask)===0||((e.type&ze.STATIC)!==0||e.sleepState===ze.SLEEPING)&&((n.type&ze.STATIC)!==0||n.sleepState===ze.SLEEPING))}intersectionTest(e,n,a,r){this.useBoundingBoxes?this.doBoundingBoxBroadphase(e,n,a,r):this.doBoundingSphereBroadphase(e,n,a,r)}doBoundingSphereBroadphase(e,n,a,r){const l=cw;n.position.vsub(e.position,l);const u=(e.boundingRadius+n.boundingRadius)**2;l.lengthSquared()<u&&(a.push(e),r.push(n))}doBoundingBoxBroadphase(e,n,a,r){e.aabbNeedsUpdate&&e.updateAABB(),n.aabbNeedsUpdate&&n.updateAABB(),e.aabb.overlaps(n.aabb)&&(a.push(e),r.push(n))}makePairsUnique(e,n){const a=uw,r=fw,l=hw,u=e.length;for(let h=0;h!==u;h++)r[h]=e[h],l[h]=n[h];e.length=0,n.length=0;for(let h=0;h!==u;h++){const d=r[h].id,p=l[h].id,g=d<p?`${d},${p}`:`${p},${d}`;a[g]=h,a.keys.push(g)}for(let h=0;h!==a.keys.length;h++){const d=a.keys.pop(),p=a[d];e.push(r[p]),n.push(l[p]),delete a[d]}}setWorld(e){}static boundingSphereCheck(e,n){const a=new R;e.position.vsub(n.position,a);const r=e.shapes[0],l=n.shapes[0];return Math.pow(r.boundingSphereRadius+l.boundingSphereRadius,2)>a.lengthSquared()}aabbQuery(e,n,a){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const cw=new R;new R;new rn;new R;const uw={keys:[]},fw=[],hw=[];new R;new R;new R;class dw extends lw{constructor(){super()}collisionPairs(e,n,a){const r=e.bodies,l=r.length;let u,h;for(let d=0;d!==l;d++)for(let p=0;p!==d;p++)u=r[d],h=r[p],this.needBroadphaseCollision(u,h)&&this.intersectionTest(u,h,n,a)}aabbQuery(e,n,a){a===void 0&&(a=[]);for(let r=0;r<e.bodies.length;r++){const l=e.bodies[r];l.aabbNeedsUpdate&&l.updateAABB(),l.aabb.overlaps(n)&&a.push(l)}return a}}class tu{constructor(){this.rayFromWorld=new R,this.rayToWorld=new R,this.hitNormalWorld=new R,this.hitPointWorld=new R,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(e,n,a,r,l,u,h){this.rayFromWorld.copy(e),this.rayToWorld.copy(n),this.hitNormalWorld.copy(a),this.hitPointWorld.copy(r),this.shape=l,this.body=u,this.distance=h}}let P_,z_,B_,I_,F_,H_,G_;const bd={CLOSEST:1,ANY:2,ALL:4};P_=Pe.types.SPHERE;z_=Pe.types.PLANE;B_=Pe.types.BOX;I_=Pe.types.CYLINDER;F_=Pe.types.CONVEXPOLYHEDRON;H_=Pe.types.HEIGHTFIELD;G_=Pe.types.TRIMESH;class sn{get[P_](){return this._intersectSphere}get[z_](){return this._intersectPlane}get[B_](){return this._intersectBox}get[I_](){return this._intersectConvex}get[F_](){return this._intersectConvex}get[H_](){return this._intersectHeightfield}get[G_](){return this._intersectTrimesh}constructor(e,n){e===void 0&&(e=new R),n===void 0&&(n=new R),this.from=e.clone(),this.to=n.clone(),this.direction=new R,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=sn.ANY,this.result=new tu,this.hasHit=!1,this.callback=a=>{}}intersectWorld(e,n){return this.mode=n.mode||sn.ANY,this.result=n.result||new tu,this.skipBackfaces=!!n.skipBackfaces,this.collisionFilterMask=typeof n.collisionFilterMask<"u"?n.collisionFilterMask:-1,this.collisionFilterGroup=typeof n.collisionFilterGroup<"u"?n.collisionFilterGroup:-1,this.checkCollisionResponse=typeof n.checkCollisionResponse<"u"?n.checkCollisionResponse:!0,n.from&&this.from.copy(n.from),n.to&&this.to.copy(n.to),this.callback=n.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(F0),ad.length=0,e.broadphase.aabbQuery(e,F0,ad),this.intersectBodies(ad),this.hasHit}intersectBody(e,n){n&&(this.result=n,this.updateDirection());const a=this.checkCollisionResponse;if(a&&!e.collisionResponse||(this.collisionFilterGroup&e.collisionFilterMask)===0||(e.collisionFilterGroup&this.collisionFilterMask)===0)return;const r=pw,l=mw;for(let u=0,h=e.shapes.length;u<h;u++){const d=e.shapes[u];if(!(a&&!d.collisionResponse)&&(e.quaternion.mult(e.shapeOrientations[u],l),e.quaternion.vmult(e.shapeOffsets[u],r),r.vadd(e.position,r),this.intersectShape(d,l,r,e),this.result.shouldStop))break}}intersectBodies(e,n){n&&(this.result=n,this.updateDirection());for(let a=0,r=e.length;!this.result.shouldStop&&a<r;a++)this.intersectBody(e[a])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(e,n,a,r){const l=this.from;if(Cw(l,this.direction,a)>e.boundingSphereRadius)return;const h=this[e.type];h&&h.call(this,e,n,a,r,e)}_intersectBox(e,n,a,r,l){return this._intersectConvex(e.convexPolyhedronRepresentation,n,a,r,l)}_intersectPlane(e,n,a,r,l){const u=this.from,h=this.to,d=this.direction,p=new R(0,0,1);n.vmult(p,p);const g=new R;u.vsub(a,g);const _=g.dot(p);h.vsub(a,g);const v=g.dot(p);if(_*v>0||u.distanceTo(h)<_)return;const S=p.dot(d);if(Math.abs(S)<this.precision)return;const M=new R,E=new R,x=new R;u.vsub(a,M);const y=-p.dot(M)/S;d.scale(y,E),u.vadd(E,x),this.reportIntersection(p,x,l,r,-1)}getAABB(e){const{lowerBound:n,upperBound:a}=e,r=this.to,l=this.from;n.x=Math.min(r.x,l.x),n.y=Math.min(r.y,l.y),n.z=Math.min(r.z,l.z),a.x=Math.max(r.x,l.x),a.y=Math.max(r.y,l.y),a.z=Math.max(r.z,l.z)}_intersectHeightfield(e,n,a,r,l){e.data,e.elementSize;const u=gw;u.from.copy(this.from),u.to.copy(this.to),Rt.pointToLocalFrame(a,n,u.from,u.from),Rt.pointToLocalFrame(a,n,u.to,u.to),u.updateDirection();const h=vw;let d,p,g,_;d=p=0,g=_=e.data.length-1;const v=new ei;u.getAABB(v),e.getIndexOfPosition(v.lowerBound.x,v.lowerBound.y,h,!0),d=Math.max(d,h[0]),p=Math.max(p,h[1]),e.getIndexOfPosition(v.upperBound.x,v.upperBound.y,h,!0),g=Math.min(g,h[0]+1),_=Math.min(_,h[1]+1);for(let S=d;S<g;S++)for(let M=p;M<_;M++){if(this.result.shouldStop)return;if(e.getAabbAtIndex(S,M,v),!!v.overlapsRay(u)){if(e.getConvexTrianglePillar(S,M,!1),Rt.pointToWorldFrame(a,n,e.pillarOffset,Gc),this._intersectConvex(e.pillarConvex,n,Gc,r,l,H0),this.result.shouldStop)return;e.getConvexTrianglePillar(S,M,!0),Rt.pointToWorldFrame(a,n,e.pillarOffset,Gc),this._intersectConvex(e.pillarConvex,n,Gc,r,l,H0)}}}_intersectSphere(e,n,a,r,l){const u=this.from,h=this.to,d=e.radius,p=(h.x-u.x)**2+(h.y-u.y)**2+(h.z-u.z)**2,g=2*((h.x-u.x)*(u.x-a.x)+(h.y-u.y)*(u.y-a.y)+(h.z-u.z)*(u.z-a.z)),_=(u.x-a.x)**2+(u.y-a.y)**2+(u.z-a.z)**2-d**2,v=g**2-4*p*_,S=_w,M=xw;if(!(v<0))if(v===0)u.lerp(h,v,S),S.vsub(a,M),M.normalize(),this.reportIntersection(M,S,l,r,-1);else{const E=(-g-Math.sqrt(v))/(2*p),x=(-g+Math.sqrt(v))/(2*p);if(E>=0&&E<=1&&(u.lerp(h,E,S),S.vsub(a,M),M.normalize(),this.reportIntersection(M,S,l,r,-1)),this.result.shouldStop)return;x>=0&&x<=1&&(u.lerp(h,x,S),S.vsub(a,M),M.normalize(),this.reportIntersection(M,S,l,r,-1))}}_intersectConvex(e,n,a,r,l,u){const h=yw,d=G0,p=u&&u.faceList||null,g=e.faces,_=e.vertices,v=e.faceNormals,S=this.direction,M=this.from,E=this.to,x=M.distanceTo(E),y=p?p.length:g.length,T=this.result;for(let A=0;!T.shouldStop&&A<y;A++){const D=p?p[A]:A,I=g[D],P=v[D],z=n,V=a;d.copy(_[I[0]]),z.vmult(d,d),d.vadd(V,d),d.vsub(M,d),z.vmult(P,h);const U=S.dot(h);if(Math.abs(U)<this.precision)continue;const w=h.dot(d)/U;if(!(w<0)){S.scale(w,Hn),Hn.vadd(M,Hn),Si.copy(_[I[0]]),z.vmult(Si,Si),V.vadd(Si,Si);for(let F=1;!T.shouldStop&&F<I.length-1;F++){Ni.copy(_[I[F]]),Ui.copy(_[I[F+1]]),z.vmult(Ni,Ni),z.vmult(Ui,Ui),V.vadd(Ni,Ni),V.vadd(Ui,Ui);const ie=Hn.distanceTo(M);!(sn.pointInTriangle(Hn,Si,Ni,Ui)||sn.pointInTriangle(Hn,Ni,Si,Ui))||ie>x||this.reportIntersection(h,Hn,l,r,D)}}}}_intersectTrimesh(e,n,a,r,l,u){const h=Sw,d=ww,p=Rw,g=G0,_=Mw,v=Ew,S=bw,M=Aw,E=Tw,x=e.indices;e.vertices;const y=this.from,T=this.to,A=this.direction;p.position.copy(a),p.quaternion.copy(n),Rt.vectorToLocalFrame(a,n,A,_),Rt.pointToLocalFrame(a,n,y,v),Rt.pointToLocalFrame(a,n,T,S),S.x*=e.scale.x,S.y*=e.scale.y,S.z*=e.scale.z,v.x*=e.scale.x,v.y*=e.scale.y,v.z*=e.scale.z,S.vsub(v,_),_.normalize();const D=v.distanceSquared(S);e.tree.rayQuery(this,p,d);for(let I=0,P=d.length;!this.result.shouldStop&&I!==P;I++){const z=d[I];e.getNormal(z,h),e.getVertex(x[z*3],Si),Si.vsub(v,g);const V=_.dot(h),U=h.dot(g)/V;if(U<0)continue;_.scale(U,Hn),Hn.vadd(v,Hn),e.getVertex(x[z*3+1],Ni),e.getVertex(x[z*3+2],Ui);const w=Hn.distanceSquared(v);!(sn.pointInTriangle(Hn,Ni,Si,Ui)||sn.pointInTriangle(Hn,Si,Ni,Ui))||w>D||(Rt.vectorToWorldFrame(n,h,E),Rt.pointToWorldFrame(a,n,Hn,M),this.reportIntersection(E,M,l,r,z))}d.length=0}reportIntersection(e,n,a,r,l){const u=this.from,h=this.to,d=u.distanceTo(n),p=this.result;if(!(this.skipBackfaces&&e.dot(this.direction)>0))switch(p.hitFaceIndex=typeof l<"u"?l:-1,this.mode){case sn.ALL:this.hasHit=!0,p.set(u,h,e,n,a,r,d),p.hasHit=!0,this.callback(p);break;case sn.CLOSEST:(d<p.distance||!p.hasHit)&&(this.hasHit=!0,p.hasHit=!0,p.set(u,h,e,n,a,r,d));break;case sn.ANY:this.hasHit=!0,p.hasHit=!0,p.set(u,h,e,n,a,r,d),p.shouldStop=!0;break}}static pointInTriangle(e,n,a,r){r.vsub(n,Ds),a.vsub(n,Qo),e.vsub(n,sd);const l=Ds.dot(Ds),u=Ds.dot(Qo),h=Ds.dot(sd),d=Qo.dot(Qo),p=Qo.dot(sd);let g,_;return(g=d*h-u*p)>=0&&(_=l*p-u*h)>=0&&g+_<l*d-u*u}}sn.CLOSEST=bd.CLOSEST;sn.ANY=bd.ANY;sn.ALL=bd.ALL;const F0=new ei,ad=[],Qo=new R,sd=new R,pw=new R,mw=new rn,Hn=new R,Si=new R,Ni=new R,Ui=new R;new R;new tu;const H0={faceList:[0]},Gc=new R,gw=new sn,vw=[],_w=new R,xw=new R,yw=new R;new R;new R;const G0=new R,Sw=new R,Mw=new R,Ew=new R,bw=new R,Tw=new R,Aw=new R;new ei;const ww=[],Rw=new Rt,Ds=new R,kc=new R;function Cw(c,e,n){n.vsub(c,Ds);const a=Ds.dot(e);return e.scale(a,kc),kc.vadd(c,kc),n.distanceTo(kc)}class Dw{static defaults(e,n){e===void 0&&(e={});for(let a in n)a in e||(e[a]=n[a]);return e}}class k0{constructor(){this.spatial=new R,this.rotational=new R}multiplyElement(e){return e.spatial.dot(this.spatial)+e.rotational.dot(this.rotational)}multiplyVectors(e,n){return e.dot(this.spatial)+n.dot(this.rotational)}}class cl{constructor(e,n,a,r){a===void 0&&(a=-1e6),r===void 0&&(r=1e6),this.id=cl.idCounter++,this.minForce=a,this.maxForce=r,this.bi=e,this.bj=n,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new k0,this.jacobianElementB=new k0,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(e,n,a){const r=n,l=e,u=a;this.a=4/(u*(1+4*r)),this.b=4*r/(1+4*r),this.eps=4/(u*u*l*(1+4*r))}computeB(e,n,a){const r=this.computeGW(),l=this.computeGq(),u=this.computeGiMf();return-l*e-r*n-u*a}computeGq(){const e=this.jacobianElementA,n=this.jacobianElementB,a=this.bi,r=this.bj,l=a.position,u=r.position;return e.spatial.dot(l)+n.spatial.dot(u)}computeGW(){const e=this.jacobianElementA,n=this.jacobianElementB,a=this.bi,r=this.bj,l=a.velocity,u=r.velocity,h=a.angularVelocity,d=r.angularVelocity;return e.multiplyVectors(l,h)+n.multiplyVectors(u,d)}computeGWlambda(){const e=this.jacobianElementA,n=this.jacobianElementB,a=this.bi,r=this.bj,l=a.vlambda,u=r.vlambda,h=a.wlambda,d=r.wlambda;return e.multiplyVectors(l,h)+n.multiplyVectors(u,d)}computeGiMf(){const e=this.jacobianElementA,n=this.jacobianElementB,a=this.bi,r=this.bj,l=a.force,u=a.torque,h=r.force,d=r.torque,p=a.invMassSolve,g=r.invMassSolve;return l.scale(p,V0),h.scale(g,j0),a.invInertiaWorldSolve.vmult(u,W0),r.invInertiaWorldSolve.vmult(d,q0),e.multiplyVectors(V0,W0)+n.multiplyVectors(j0,q0)}computeGiMGt(){const e=this.jacobianElementA,n=this.jacobianElementB,a=this.bi,r=this.bj,l=a.invMassSolve,u=r.invMassSolve,h=a.invInertiaWorldSolve,d=r.invInertiaWorldSolve;let p=l+u;return h.vmult(e.rotational,Vc),p+=Vc.dot(e.rotational),d.vmult(n.rotational,Vc),p+=Vc.dot(n.rotational),p}addToWlambda(e){const n=this.jacobianElementA,a=this.jacobianElementB,r=this.bi,l=this.bj,u=Nw;r.vlambda.addScaledVector(r.invMassSolve*e,n.spatial,r.vlambda),l.vlambda.addScaledVector(l.invMassSolve*e,a.spatial,l.vlambda),r.invInertiaWorldSolve.vmult(n.rotational,u),r.wlambda.addScaledVector(e,u,r.wlambda),l.invInertiaWorldSolve.vmult(a.rotational,u),l.wlambda.addScaledVector(e,u,l.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}cl.idCounter=0;const V0=new R,j0=new R,W0=new R,q0=new R,Vc=new R,Nw=new R;class Uw extends cl{constructor(e,n,a){a===void 0&&(a=1e6),super(e,n,0,a),this.restitution=0,this.ri=new R,this.rj=new R,this.ni=new R}computeB(e){const n=this.a,a=this.b,r=this.bi,l=this.bj,u=this.ri,h=this.rj,d=Lw,p=Ow,g=r.velocity,_=r.angularVelocity;r.force,r.torque;const v=l.velocity,S=l.angularVelocity;l.force,l.torque;const M=Pw,E=this.jacobianElementA,x=this.jacobianElementB,y=this.ni;u.cross(y,d),h.cross(y,p),y.negate(E.spatial),d.negate(E.rotational),x.spatial.copy(y),x.rotational.copy(p),M.copy(l.position),M.vadd(h,M),M.vsub(r.position,M),M.vsub(u,M);const T=y.dot(M),A=this.restitution+1,D=A*v.dot(y)-A*g.dot(y)+S.dot(p)-_.dot(d),I=this.computeGiMf();return-T*n-D*a-e*I}getImpactVelocityAlongNormal(){const e=zw,n=Bw,a=Iw,r=Fw,l=Hw;return this.bi.position.vadd(this.ri,a),this.bj.position.vadd(this.rj,r),this.bi.getVelocityAtWorldPoint(a,e),this.bj.getVelocityAtWorldPoint(r,n),e.vsub(n,l),this.ni.dot(l)}}const Lw=new R,Ow=new R,Pw=new R,zw=new R,Bw=new R,Iw=new R,Fw=new R,Hw=new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;class X0 extends cl{constructor(e,n,a){super(e,n,-a,a),this.ri=new R,this.rj=new R,this.t=new R}computeB(e){this.a;const n=this.b;this.bi,this.bj;const a=this.ri,r=this.rj,l=Gw,u=kw,h=this.t;a.cross(h,l),r.cross(h,u);const d=this.jacobianElementA,p=this.jacobianElementB;h.negate(d.spatial),l.negate(d.rotational),p.spatial.copy(h),p.rotational.copy(u);const g=this.computeGW(),_=this.computeGiMf();return-g*n-e*_}}const Gw=new R,kw=new R;class cu{constructor(e,n,a){a=Dw.defaults(a,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=cu.idCounter++,this.materials=[e,n],this.friction=a.friction,this.restitution=a.restitution,this.contactEquationStiffness=a.contactEquationStiffness,this.contactEquationRelaxation=a.contactEquationRelaxation,this.frictionEquationStiffness=a.frictionEquationStiffness,this.frictionEquationRelaxation=a.frictionEquationRelaxation}}cu.idCounter=0;class uu{constructor(e){e===void 0&&(e={});let n="";typeof e=="string"&&(n=e,e={}),this.name=n,this.id=uu.idCounter++,this.friction=typeof e.friction<"u"?e.friction:-1,this.restitution=typeof e.restitution<"u"?e.restitution:-1}}uu.idCounter=0;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new sn;new R;new R;new R;new R(1,0,0),new R(0,1,0),new R(0,0,1);new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;class Y0 extends Pe{constructor(e){if(super({type:Pe.types.SPHERE}),this.radius=e!==void 0?e:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(e,n){n===void 0&&(n=new R);const a=2*e*this.radius*this.radius/5;return n.x=a,n.y=a,n.z=a,n}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(e,n,a,r){const l=this.radius,u=["x","y","z"];for(let h=0;h<u.length;h++){const d=u[h];a[d]=e[d]-l,r[d]=e[d]+l}}}new R;new R;new R;new R;new R;new R;new R;new R;new R;class Vw extends Pe{constructor(){super({type:Pe.types.PLANE}),this.worldNormal=new R,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(e){const n=this.worldNormal;n.set(0,0,1),e.vmult(n,n),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(e,n){return n===void 0&&(n=new R),n}volume(){return Number.MAX_VALUE}calculateWorldAABB(e,n,a,r){ra.set(0,0,1),n.vmult(ra,ra);const l=Number.MAX_VALUE;a.set(-l,-l,-l),r.set(l,l,l),ra.x===1?r.x=e.x:ra.x===-1&&(a.x=e.x),ra.y===1?r.y=e.y:ra.y===-1&&(a.y=e.y),ra.z===1?r.z=e.z:ra.z===-1&&(a.z=e.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}}const ra=new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new ei;new R;new ei;new R;new R;new R;new R;new R;new R;new R;new ei;new R;new Rt;new ei;class jw{constructor(){this.equations=[]}solve(e,n){return 0}addEquation(e){e.enabled&&!e.bi.isTrigger&&!e.bj.isTrigger&&this.equations.push(e)}removeEquation(e){const n=this.equations,a=n.indexOf(e);a!==-1&&n.splice(a,1)}removeAllEquations(){this.equations.length=0}}class Ww extends jw{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(e,n){let a=0;const r=this.iterations,l=this.tolerance*this.tolerance,u=this.equations,h=u.length,d=n.bodies,p=d.length,g=e;let _,v,S,M,E,x;if(h!==0)for(let D=0;D!==p;D++)d[D].updateSolveMassProperties();const y=Xw,T=Yw,A=qw;y.length=h,T.length=h,A.length=h;for(let D=0;D!==h;D++){const I=u[D];A[D]=0,T[D]=I.computeB(g),y[D]=1/I.computeC()}if(h!==0){for(let P=0;P!==p;P++){const z=d[P],V=z.vlambda,U=z.wlambda;V.set(0,0,0),U.set(0,0,0)}for(a=0;a!==r;a++){M=0;for(let P=0;P!==h;P++){const z=u[P];_=T[P],v=y[P],x=A[P],E=z.computeGWlambda(),S=v*(_-E-z.eps*x),x+S<z.minForce?S=z.minForce-x:x+S>z.maxForce&&(S=z.maxForce-x),A[P]+=S,M+=S>0?S:-S,z.addToWlambda(S)}if(M*M<l)break}for(let P=0;P!==p;P++){const z=d[P],V=z.velocity,U=z.angularVelocity;z.vlambda.vmul(z.linearFactor,z.vlambda),V.vadd(z.vlambda,V),z.wlambda.vmul(z.angularFactor,z.wlambda),U.vadd(z.wlambda,U)}let D=u.length;const I=1/g;for(;D--;)u[D].multiplier=A[D]*I}return a}}const qw=[],Xw=[],Yw=[];class Kw{constructor(){this.objects=[],this.type=Object}release(){const e=arguments.length;for(let n=0;n!==e;n++)this.objects.push(n<0||arguments.length<=n?void 0:arguments[n]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(e){const n=this.objects;for(;n.length>e;)n.pop();for(;n.length<e;)n.push(this.constructObject());return this}}class Zw extends Kw{constructor(){super(...arguments),this.type=R}constructObject(){return new R}}const Gt={sphereSphere:Pe.types.SPHERE,spherePlane:Pe.types.SPHERE|Pe.types.PLANE,boxBox:Pe.types.BOX|Pe.types.BOX,sphereBox:Pe.types.SPHERE|Pe.types.BOX,planeBox:Pe.types.PLANE|Pe.types.BOX,convexConvex:Pe.types.CONVEXPOLYHEDRON,sphereConvex:Pe.types.SPHERE|Pe.types.CONVEXPOLYHEDRON,planeConvex:Pe.types.PLANE|Pe.types.CONVEXPOLYHEDRON,boxConvex:Pe.types.BOX|Pe.types.CONVEXPOLYHEDRON,sphereHeightfield:Pe.types.SPHERE|Pe.types.HEIGHTFIELD,boxHeightfield:Pe.types.BOX|Pe.types.HEIGHTFIELD,convexHeightfield:Pe.types.CONVEXPOLYHEDRON|Pe.types.HEIGHTFIELD,sphereParticle:Pe.types.PARTICLE|Pe.types.SPHERE,planeParticle:Pe.types.PLANE|Pe.types.PARTICLE,boxParticle:Pe.types.BOX|Pe.types.PARTICLE,convexParticle:Pe.types.PARTICLE|Pe.types.CONVEXPOLYHEDRON,cylinderCylinder:Pe.types.CYLINDER,sphereCylinder:Pe.types.SPHERE|Pe.types.CYLINDER,planeCylinder:Pe.types.PLANE|Pe.types.CYLINDER,boxCylinder:Pe.types.BOX|Pe.types.CYLINDER,convexCylinder:Pe.types.CONVEXPOLYHEDRON|Pe.types.CYLINDER,heightfieldCylinder:Pe.types.HEIGHTFIELD|Pe.types.CYLINDER,particleCylinder:Pe.types.PARTICLE|Pe.types.CYLINDER,sphereTrimesh:Pe.types.SPHERE|Pe.types.TRIMESH,planeTrimesh:Pe.types.PLANE|Pe.types.TRIMESH};class Qw{get[Gt.sphereSphere](){return this.sphereSphere}get[Gt.spherePlane](){return this.spherePlane}get[Gt.boxBox](){return this.boxBox}get[Gt.sphereBox](){return this.sphereBox}get[Gt.planeBox](){return this.planeBox}get[Gt.convexConvex](){return this.convexConvex}get[Gt.sphereConvex](){return this.sphereConvex}get[Gt.planeConvex](){return this.planeConvex}get[Gt.boxConvex](){return this.boxConvex}get[Gt.sphereHeightfield](){return this.sphereHeightfield}get[Gt.boxHeightfield](){return this.boxHeightfield}get[Gt.convexHeightfield](){return this.convexHeightfield}get[Gt.sphereParticle](){return this.sphereParticle}get[Gt.planeParticle](){return this.planeParticle}get[Gt.boxParticle](){return this.boxParticle}get[Gt.convexParticle](){return this.convexParticle}get[Gt.cylinderCylinder](){return this.convexConvex}get[Gt.sphereCylinder](){return this.sphereConvex}get[Gt.planeCylinder](){return this.planeConvex}get[Gt.boxCylinder](){return this.boxConvex}get[Gt.convexCylinder](){return this.convexConvex}get[Gt.heightfieldCylinder](){return this.heightfieldCylinder}get[Gt.particleCylinder](){return this.particleCylinder}get[Gt.sphereTrimesh](){return this.sphereTrimesh}get[Gt.planeTrimesh](){return this.planeTrimesh}constructor(e){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new Zw,this.world=e,this.currentContactMaterial=e.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(e,n,a,r,l,u){let h;this.contactPointPool.length?(h=this.contactPointPool.pop(),h.bi=e,h.bj=n):h=new Uw(e,n),h.enabled=e.collisionResponse&&n.collisionResponse&&a.collisionResponse&&r.collisionResponse;const d=this.currentContactMaterial;h.restitution=d.restitution,h.setSpookParams(d.contactEquationStiffness,d.contactEquationRelaxation,this.world.dt);const p=a.material||e.material,g=r.material||n.material;return p&&g&&p.restitution>=0&&g.restitution>=0&&(h.restitution=p.restitution*g.restitution),h.si=l||a,h.sj=u||r,h}createFrictionEquationsFromContact(e,n){const a=e.bi,r=e.bj,l=e.si,u=e.sj,h=this.world,d=this.currentContactMaterial;let p=d.friction;const g=l.material||a.material,_=u.material||r.material;if(g&&_&&g.friction>=0&&_.friction>=0&&(p=g.friction*_.friction),p>0){const v=p*(h.frictionGravity||h.gravity).length();let S=a.invMass+r.invMass;S>0&&(S=1/S);const M=this.frictionEquationPool,E=M.length?M.pop():new X0(a,r,v*S),x=M.length?M.pop():new X0(a,r,v*S);return E.bi=x.bi=a,E.bj=x.bj=r,E.minForce=x.minForce=-v*S,E.maxForce=x.maxForce=v*S,E.ri.copy(e.ri),E.rj.copy(e.rj),x.ri.copy(e.ri),x.rj.copy(e.rj),e.ni.tangents(E.t,x.t),E.setSpookParams(d.frictionEquationStiffness,d.frictionEquationRelaxation,h.dt),x.setSpookParams(d.frictionEquationStiffness,d.frictionEquationRelaxation,h.dt),E.enabled=x.enabled=e.enabled,n.push(E,x),!0}return!1}createFrictionFromAverage(e){let n=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(n,this.frictionResult)||e===1)return;const a=this.frictionResult[this.frictionResult.length-2],r=this.frictionResult[this.frictionResult.length-1];Ts.setZero(),Nr.setZero(),Ur.setZero();const l=n.bi;n.bj;for(let h=0;h!==e;h++)n=this.result[this.result.length-1-h],n.bi!==l?(Ts.vadd(n.ni,Ts),Nr.vadd(n.ri,Nr),Ur.vadd(n.rj,Ur)):(Ts.vsub(n.ni,Ts),Nr.vadd(n.rj,Nr),Ur.vadd(n.ri,Ur));const u=1/e;Nr.scale(u,a.ri),Ur.scale(u,a.rj),r.ri.copy(a.ri),r.rj.copy(a.rj),Ts.normalize(),Ts.tangents(a.t,r.t)}getContacts(e,n,a,r,l,u,h){this.contactPointPool=l,this.frictionEquationPool=h,this.result=r,this.frictionResult=u;const d=eR,p=tR,g=Jw,_=$w;for(let v=0,S=e.length;v!==S;v++){const M=e[v],E=n[v];let x=null;M.material&&E.material&&(x=a.getContactMaterial(M.material,E.material)||null);const y=M.type&ze.KINEMATIC&&E.type&ze.STATIC||M.type&ze.STATIC&&E.type&ze.KINEMATIC||M.type&ze.KINEMATIC&&E.type&ze.KINEMATIC;for(let T=0;T<M.shapes.length;T++){M.quaternion.mult(M.shapeOrientations[T],d),M.quaternion.vmult(M.shapeOffsets[T],g),g.vadd(M.position,g);const A=M.shapes[T];for(let D=0;D<E.shapes.length;D++){E.quaternion.mult(E.shapeOrientations[D],p),E.quaternion.vmult(E.shapeOffsets[D],_),_.vadd(E.position,_);const I=E.shapes[D];if(!(A.collisionFilterMask&I.collisionFilterGroup&&I.collisionFilterMask&A.collisionFilterGroup)||g.distanceTo(_)>A.boundingSphereRadius+I.boundingSphereRadius)continue;let P=null;A.material&&I.material&&(P=a.getContactMaterial(A.material,I.material)||null),this.currentContactMaterial=P||x||a.defaultContactMaterial;const z=A.type|I.type,V=this[z];if(V){let U=!1;A.type<I.type?U=V.call(this,A,I,g,_,d,p,M,E,A,I,y):U=V.call(this,I,A,_,g,p,d,E,M,A,I,y),U&&y&&(a.shapeOverlapKeeper.set(A.id,I.id),a.bodyOverlapKeeper.set(M.id,E.id))}}}}}sphereSphere(e,n,a,r,l,u,h,d,p,g,_){if(_)return a.distanceSquared(r)<(e.radius+n.radius)**2;const v=this.createContactEquation(h,d,e,n,p,g);r.vsub(a,v.ni),v.ni.normalize(),v.ri.copy(v.ni),v.rj.copy(v.ni),v.ri.scale(e.radius,v.ri),v.rj.scale(-n.radius,v.rj),v.ri.vadd(a,v.ri),v.ri.vsub(h.position,v.ri),v.rj.vadd(r,v.rj),v.rj.vsub(d.position,v.rj),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}spherePlane(e,n,a,r,l,u,h,d,p,g,_){const v=this.createContactEquation(h,d,e,n,p,g);if(v.ni.set(0,0,1),u.vmult(v.ni,v.ni),v.ni.negate(v.ni),v.ni.normalize(),v.ni.scale(e.radius,v.ri),a.vsub(r,jc),v.ni.scale(v.ni.dot(jc),K0),jc.vsub(K0,v.rj),-jc.dot(v.ni)<=e.radius){if(_)return!0;const S=v.ri,M=v.rj;S.vadd(a,S),S.vsub(h.position,S),M.vadd(r,M),M.vsub(d.position,M),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}boxBox(e,n,a,r,l,u,h,d,p,g,_){return e.convexPolyhedronRepresentation.material=e.material,n.convexPolyhedronRepresentation.material=n.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,n.convexPolyhedronRepresentation.collisionResponse=n.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,n.convexPolyhedronRepresentation,a,r,l,u,h,d,e,n,_)}sphereBox(e,n,a,r,l,u,h,d,p,g,_){const v=this.v3pool,S=wR;a.vsub(r,Wc),n.getSideNormals(S,u);const M=e.radius;let E=!1;const x=CR,y=DR,T=NR;let A=null,D=0,I=0,P=0,z=null;for(let L=0,K=S.length;L!==K&&E===!1;L++){const j=bR;j.copy(S[L]);const he=j.length();j.normalize();const B=Wc.dot(j);if(B<he+M&&B>0){const $=TR,oe=AR;$.copy(S[(L+1)%3]),oe.copy(S[(L+2)%3]);const ye=$.length(),ee=oe.length();$.normalize(),oe.normalize();const de=Wc.dot($),_e=Wc.dot(oe);if(de<ye&&de>-ye&&_e<ee&&_e>-ee){const Ae=Math.abs(B-he-M);if((z===null||Ae<z)&&(z=Ae,I=de,P=_e,A=he,x.copy(j),y.copy($),T.copy(oe),D++,_))return!0}}}if(D){E=!0;const L=this.createContactEquation(h,d,e,n,p,g);x.scale(-M,L.ri),L.ni.copy(x),L.ni.negate(L.ni),x.scale(A,x),y.scale(I,y),x.vadd(y,x),T.scale(P,T),x.vadd(T,L.rj),L.ri.vadd(a,L.ri),L.ri.vsub(h.position,L.ri),L.rj.vadd(r,L.rj),L.rj.vsub(d.position,L.rj),this.result.push(L),this.createFrictionEquationsFromContact(L,this.frictionResult)}let V=v.get();const U=RR;for(let L=0;L!==2&&!E;L++)for(let K=0;K!==2&&!E;K++)for(let j=0;j!==2&&!E;j++)if(V.set(0,0,0),L?V.vadd(S[0],V):V.vsub(S[0],V),K?V.vadd(S[1],V):V.vsub(S[1],V),j?V.vadd(S[2],V):V.vsub(S[2],V),r.vadd(V,U),U.vsub(a,U),U.lengthSquared()<M*M){if(_)return!0;E=!0;const he=this.createContactEquation(h,d,e,n,p,g);he.ri.copy(U),he.ri.normalize(),he.ni.copy(he.ri),he.ri.scale(M,he.ri),he.rj.copy(V),he.ri.vadd(a,he.ri),he.ri.vsub(h.position,he.ri),he.rj.vadd(r,he.rj),he.rj.vsub(d.position,he.rj),this.result.push(he),this.createFrictionEquationsFromContact(he,this.frictionResult)}v.release(V),V=null;const w=v.get(),F=v.get(),ie=v.get(),k=v.get(),Q=v.get(),Y=S.length;for(let L=0;L!==Y&&!E;L++)for(let K=0;K!==Y&&!E;K++)if(L%3!==K%3){S[K].cross(S[L],w),w.normalize(),S[L].vadd(S[K],F),ie.copy(a),ie.vsub(F,ie),ie.vsub(r,ie);const j=ie.dot(w);w.scale(j,k);let he=0;for(;he===L%3||he===K%3;)he++;Q.copy(a),Q.vsub(k,Q),Q.vsub(F,Q),Q.vsub(r,Q);const B=Math.abs(j),$=Q.length();if(B<S[he].length()&&$<M){if(_)return!0;E=!0;const oe=this.createContactEquation(h,d,e,n,p,g);F.vadd(k,oe.rj),oe.rj.copy(oe.rj),Q.negate(oe.ni),oe.ni.normalize(),oe.ri.copy(oe.rj),oe.ri.vadd(r,oe.ri),oe.ri.vsub(a,oe.ri),oe.ri.normalize(),oe.ri.scale(M,oe.ri),oe.ri.vadd(a,oe.ri),oe.ri.vsub(h.position,oe.ri),oe.rj.vadd(r,oe.rj),oe.rj.vsub(d.position,oe.rj),this.result.push(oe),this.createFrictionEquationsFromContact(oe,this.frictionResult)}}v.release(w,F,ie,k,Q)}planeBox(e,n,a,r,l,u,h,d,p,g,_){return n.convexPolyhedronRepresentation.material=n.material,n.convexPolyhedronRepresentation.collisionResponse=n.collisionResponse,n.convexPolyhedronRepresentation.id=n.id,this.planeConvex(e,n.convexPolyhedronRepresentation,a,r,l,u,h,d,e,n,_)}convexConvex(e,n,a,r,l,u,h,d,p,g,_,v,S){const M=qR;if(!(a.distanceTo(r)>e.boundingSphereRadius+n.boundingSphereRadius)&&e.findSeparatingAxis(n,a,l,r,u,M,v,S)){const E=[],x=XR;e.clipAgainstHull(a,l,n,r,u,M,-100,100,E);let y=0;for(let T=0;T!==E.length;T++){if(_)return!0;const A=this.createContactEquation(h,d,e,n,p,g),D=A.ri,I=A.rj;M.negate(A.ni),E[T].normal.negate(x),x.scale(E[T].depth,x),E[T].point.vadd(x,D),I.copy(E[T].point),D.vsub(a,D),I.vsub(r,I),D.vadd(a,D),D.vsub(h.position,D),I.vadd(r,I),I.vsub(d.position,I),this.result.push(A),y++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(A,this.frictionResult)}this.enableFrictionReduction&&y&&this.createFrictionFromAverage(y)}}sphereConvex(e,n,a,r,l,u,h,d,p,g,_){const v=this.v3pool;a.vsub(r,UR);const S=n.faceNormals,M=n.faces,E=n.vertices,x=e.radius;let y=!1;for(let T=0;T!==E.length;T++){const A=E[T],D=zR;u.vmult(A,D),r.vadd(D,D);const I=PR;if(D.vsub(a,I),I.lengthSquared()<x*x){if(_)return!0;y=!0;const P=this.createContactEquation(h,d,e,n,p,g);P.ri.copy(I),P.ri.normalize(),P.ni.copy(P.ri),P.ri.scale(x,P.ri),D.vsub(r,P.rj),P.ri.vadd(a,P.ri),P.ri.vsub(h.position,P.ri),P.rj.vadd(r,P.rj),P.rj.vsub(d.position,P.rj),this.result.push(P),this.createFrictionEquationsFromContact(P,this.frictionResult);return}}for(let T=0,A=M.length;T!==A&&y===!1;T++){const D=S[T],I=M[T],P=BR;u.vmult(D,P);const z=IR;u.vmult(E[I[0]],z),z.vadd(r,z);const V=FR;P.scale(-x,V),a.vadd(V,V);const U=HR;V.vsub(z,U);const w=U.dot(P),F=GR;if(a.vsub(z,F),w<0&&F.dot(P)>0){const ie=[];for(let k=0,Q=I.length;k!==Q;k++){const Y=v.get();u.vmult(E[I[k]],Y),r.vadd(Y,Y),ie.push(Y)}if(ER(ie,P,a)){if(_)return!0;y=!0;const k=this.createContactEquation(h,d,e,n,p,g);P.scale(-x,k.ri),P.negate(k.ni);const Q=v.get();P.scale(-w,Q);const Y=v.get();P.scale(-x,Y),a.vsub(r,k.rj),k.rj.vadd(Y,k.rj),k.rj.vadd(Q,k.rj),k.rj.vadd(r,k.rj),k.rj.vsub(d.position,k.rj),k.ri.vadd(a,k.ri),k.ri.vsub(h.position,k.ri),v.release(Q),v.release(Y),this.result.push(k),this.createFrictionEquationsFromContact(k,this.frictionResult);for(let L=0,K=ie.length;L!==K;L++)v.release(ie[L]);return}else for(let k=0;k!==I.length;k++){const Q=v.get(),Y=v.get();u.vmult(E[I[(k+1)%I.length]],Q),u.vmult(E[I[(k+2)%I.length]],Y),r.vadd(Q,Q),r.vadd(Y,Y);const L=LR;Y.vsub(Q,L);const K=OR;L.unit(K);const j=v.get(),he=v.get();a.vsub(Q,he);const B=he.dot(K);K.scale(B,j),j.vadd(Q,j);const $=v.get();if(j.vsub(a,$),B>0&&B*B<L.lengthSquared()&&$.lengthSquared()<x*x){if(_)return!0;const oe=this.createContactEquation(h,d,e,n,p,g);j.vsub(r,oe.rj),j.vsub(a,oe.ni),oe.ni.normalize(),oe.ni.scale(x,oe.ri),oe.rj.vadd(r,oe.rj),oe.rj.vsub(d.position,oe.rj),oe.ri.vadd(a,oe.ri),oe.ri.vsub(h.position,oe.ri),this.result.push(oe),this.createFrictionEquationsFromContact(oe,this.frictionResult);for(let ye=0,ee=ie.length;ye!==ee;ye++)v.release(ie[ye]);v.release(Q),v.release(Y),v.release(j),v.release($),v.release(he);return}v.release(Q),v.release(Y),v.release(j),v.release($),v.release(he)}for(let k=0,Q=ie.length;k!==Q;k++)v.release(ie[k])}}}planeConvex(e,n,a,r,l,u,h,d,p,g,_){const v=kR,S=VR;S.set(0,0,1),l.vmult(S,S);let M=0;const E=jR;for(let x=0;x!==n.vertices.length;x++)if(v.copy(n.vertices[x]),u.vmult(v,v),r.vadd(v,v),v.vsub(a,E),S.dot(E)<=0){if(_)return!0;const T=this.createContactEquation(h,d,e,n,p,g),A=WR;S.scale(S.dot(E),A),v.vsub(A,A),A.vsub(a,T.ri),T.ni.copy(S),v.vsub(r,T.rj),T.ri.vadd(a,T.ri),T.ri.vsub(h.position,T.ri),T.rj.vadd(r,T.rj),T.rj.vsub(d.position,T.rj),this.result.push(T),M++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(T,this.frictionResult)}this.enableFrictionReduction&&M&&this.createFrictionFromAverage(M)}boxConvex(e,n,a,r,l,u,h,d,p,g,_){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,n,a,r,l,u,h,d,e,n,_)}sphereHeightfield(e,n,a,r,l,u,h,d,p,g,_){const v=n.data,S=e.radius,M=n.elementSize,E=sC,x=aC;Rt.pointToLocalFrame(r,u,a,x);let y=Math.floor((x.x-S)/M)-1,T=Math.ceil((x.x+S)/M)+1,A=Math.floor((x.y-S)/M)-1,D=Math.ceil((x.y+S)/M)+1;if(T<0||D<0||y>v.length||A>v[0].length)return;y<0&&(y=0),T<0&&(T=0),A<0&&(A=0),D<0&&(D=0),y>=v.length&&(y=v.length-1),T>=v.length&&(T=v.length-1),D>=v[0].length&&(D=v[0].length-1),A>=v[0].length&&(A=v[0].length-1);const I=[];n.getRectMinMax(y,A,T,D,I);const P=I[0],z=I[1];if(x.z-S>z||x.z+S<P)return;const V=this.result;for(let U=y;U<T;U++)for(let w=A;w<D;w++){const F=V.length;let ie=!1;if(n.getConvexTrianglePillar(U,w,!1),Rt.pointToWorldFrame(r,u,n.pillarOffset,E),a.distanceTo(E)<n.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(ie=this.sphereConvex(e,n.pillarConvex,a,E,l,u,h,d,e,n,_)),_&&ie||(n.getConvexTrianglePillar(U,w,!0),Rt.pointToWorldFrame(r,u,n.pillarOffset,E),a.distanceTo(E)<n.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(ie=this.sphereConvex(e,n.pillarConvex,a,E,l,u,h,d,e,n,_)),_&&ie))return!0;if(V.length-F>2)return}}boxHeightfield(e,n,a,r,l,u,h,d,p,g,_){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexHeightfield(e.convexPolyhedronRepresentation,n,a,r,l,u,h,d,e,n,_)}convexHeightfield(e,n,a,r,l,u,h,d,p,g,_){const v=n.data,S=n.elementSize,M=e.boundingSphereRadius,E=nC,x=iC,y=tC;Rt.pointToLocalFrame(r,u,a,y);let T=Math.floor((y.x-M)/S)-1,A=Math.ceil((y.x+M)/S)+1,D=Math.floor((y.y-M)/S)-1,I=Math.ceil((y.y+M)/S)+1;if(A<0||I<0||T>v.length||D>v[0].length)return;T<0&&(T=0),A<0&&(A=0),D<0&&(D=0),I<0&&(I=0),T>=v.length&&(T=v.length-1),A>=v.length&&(A=v.length-1),I>=v[0].length&&(I=v[0].length-1),D>=v[0].length&&(D=v[0].length-1);const P=[];n.getRectMinMax(T,D,A,I,P);const z=P[0],V=P[1];if(!(y.z-M>V||y.z+M<z))for(let U=T;U<A;U++)for(let w=D;w<I;w++){let F=!1;if(n.getConvexTrianglePillar(U,w,!1),Rt.pointToWorldFrame(r,u,n.pillarOffset,E),a.distanceTo(E)<n.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(F=this.convexConvex(e,n.pillarConvex,a,E,l,u,h,d,null,null,_,x,null)),_&&F||(n.getConvexTrianglePillar(U,w,!0),Rt.pointToWorldFrame(r,u,n.pillarOffset,E),a.distanceTo(E)<n.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(F=this.convexConvex(e,n.pillarConvex,a,E,l,u,h,d,null,null,_,x,null)),_&&F))return!0}}sphereParticle(e,n,a,r,l,u,h,d,p,g,_){const v=QR;if(v.set(0,0,1),r.vsub(a,v),v.lengthSquared()<=e.radius*e.radius){if(_)return!0;const M=this.createContactEquation(d,h,n,e,p,g);v.normalize(),M.rj.copy(v),M.rj.scale(e.radius,M.rj),M.ni.copy(v),M.ni.negate(M.ni),M.ri.set(0,0,0),this.result.push(M),this.createFrictionEquationsFromContact(M,this.frictionResult)}}planeParticle(e,n,a,r,l,u,h,d,p,g,_){const v=YR;v.set(0,0,1),h.quaternion.vmult(v,v);const S=KR;if(r.vsub(h.position,S),v.dot(S)<=0){if(_)return!0;const E=this.createContactEquation(d,h,n,e,p,g);E.ni.copy(v),E.ni.negate(E.ni),E.ri.set(0,0,0);const x=ZR;v.scale(v.dot(r),x),r.vsub(x,x),E.rj.copy(x),this.result.push(E),this.createFrictionEquationsFromContact(E,this.frictionResult)}}boxParticle(e,n,a,r,l,u,h,d,p,g,_){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexParticle(e.convexPolyhedronRepresentation,n,a,r,l,u,h,d,e,n,_)}convexParticle(e,n,a,r,l,u,h,d,p,g,_){let v=-1;const S=$R,M=eC;let E=null;const x=JR;if(x.copy(r),x.vsub(a,x),l.conjugate(Z0),Z0.vmult(x,x),e.pointIsInside(x)){e.worldVerticesNeedsUpdate&&e.computeWorldVertices(a,l),e.worldFaceNormalsNeedsUpdate&&e.computeWorldFaceNormals(l);for(let y=0,T=e.faces.length;y!==T;y++){const A=[e.worldVertices[e.faces[y][0]]],D=e.worldFaceNormals[y];r.vsub(A[0],Q0);const I=-D.dot(Q0);if(E===null||Math.abs(I)<Math.abs(E)){if(_)return!0;E=I,v=y,S.copy(D)}}if(v!==-1){const y=this.createContactEquation(d,h,n,e,p,g);S.scale(E,M),M.vadd(r,M),M.vsub(a,M),y.rj.copy(M),S.negate(y.ni),y.ri.set(0,0,0);const T=y.ri,A=y.rj;T.vadd(r,T),T.vsub(d.position,T),A.vadd(a,A),A.vsub(h.position,A),this.result.push(y),this.createFrictionEquationsFromContact(y,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(e,n,a,r,l,u,h,d,p,g,_){return this.convexHeightfield(n,e,r,a,u,l,d,h,p,g,_)}particleCylinder(e,n,a,r,l,u,h,d,p,g,_){return this.convexParticle(n,e,r,a,u,l,d,h,p,g,_)}sphereTrimesh(e,n,a,r,l,u,h,d,p,g,_){const v=cR,S=uR,M=fR,E=hR,x=dR,y=pR,T=_R,A=lR,D=rR,I=xR;Rt.pointToLocalFrame(r,u,a,x);const P=e.radius;T.lowerBound.set(x.x-P,x.y-P,x.z-P),T.upperBound.set(x.x+P,x.y+P,x.z+P),n.getTrianglesInAABB(T,I);const z=oR,V=e.radius*e.radius;for(let k=0;k<I.length;k++)for(let Q=0;Q<3;Q++)if(n.getVertex(n.indices[I[k]*3+Q],z),z.vsub(x,D),D.lengthSquared()<=V){if(A.copy(z),Rt.pointToWorldFrame(r,u,A,z),z.vsub(a,D),_)return!0;let Y=this.createContactEquation(h,d,e,n,p,g);Y.ni.copy(D),Y.ni.normalize(),Y.ri.copy(Y.ni),Y.ri.scale(e.radius,Y.ri),Y.ri.vadd(a,Y.ri),Y.ri.vsub(h.position,Y.ri),Y.rj.copy(z),Y.rj.vsub(d.position,Y.rj),this.result.push(Y),this.createFrictionEquationsFromContact(Y,this.frictionResult)}for(let k=0;k<I.length;k++)for(let Q=0;Q<3;Q++){n.getVertex(n.indices[I[k]*3+Q],v),n.getVertex(n.indices[I[k]*3+(Q+1)%3],S),S.vsub(v,M),x.vsub(S,y);const Y=y.dot(M);x.vsub(v,y);let L=y.dot(M);if(L>0&&Y<0&&(x.vsub(v,y),E.copy(M),E.normalize(),L=y.dot(E),E.scale(L,y),y.vadd(v,y),y.distanceTo(x)<e.radius)){if(_)return!0;const j=this.createContactEquation(h,d,e,n,p,g);y.vsub(x,j.ni),j.ni.normalize(),j.ni.scale(e.radius,j.ri),j.ri.vadd(a,j.ri),j.ri.vsub(h.position,j.ri),Rt.pointToWorldFrame(r,u,y,y),y.vsub(d.position,j.rj),Rt.vectorToWorldFrame(u,j.ni,j.ni),Rt.vectorToWorldFrame(u,j.ri,j.ri),this.result.push(j),this.createFrictionEquationsFromContact(j,this.frictionResult)}}const U=mR,w=gR,F=vR,ie=sR;for(let k=0,Q=I.length;k!==Q;k++){n.getTriangleVertices(I[k],U,w,F),n.getNormal(I[k],ie),x.vsub(U,y);let Y=y.dot(ie);if(ie.scale(Y,y),x.vsub(y,y),Y=y.distanceTo(x),sn.pointInTriangle(y,U,w,F)&&Y<e.radius){if(_)return!0;let L=this.createContactEquation(h,d,e,n,p,g);y.vsub(x,L.ni),L.ni.normalize(),L.ni.scale(e.radius,L.ri),L.ri.vadd(a,L.ri),L.ri.vsub(h.position,L.ri),Rt.pointToWorldFrame(r,u,y,y),y.vsub(d.position,L.rj),Rt.vectorToWorldFrame(u,L.ni,L.ni),Rt.vectorToWorldFrame(u,L.ri,L.ri),this.result.push(L),this.createFrictionEquationsFromContact(L,this.frictionResult)}}I.length=0}planeTrimesh(e,n,a,r,l,u,h,d,p,g,_){const v=new R,S=nR;S.set(0,0,1),l.vmult(S,S);for(let M=0;M<n.vertices.length/3;M++){n.getVertex(M,v);const E=new R;E.copy(v),Rt.pointToWorldFrame(r,u,E,v);const x=iR;if(v.vsub(a,x),S.dot(x)<=0){if(_)return!0;const T=this.createContactEquation(h,d,e,n,p,g);T.ni.copy(S);const A=aR;S.scale(x.dot(S),A),v.vsub(A,A),T.ri.copy(A),T.ri.vsub(h.position,T.ri),T.rj.copy(v),T.rj.vsub(d.position,T.rj),this.result.push(T),this.createFrictionEquationsFromContact(T,this.frictionResult)}}}}const Ts=new R,Nr=new R,Ur=new R,Jw=new R,$w=new R,eR=new rn,tR=new rn,nR=new R,iR=new R,aR=new R,sR=new R,rR=new R;new R;const oR=new R,lR=new R,cR=new R,uR=new R,fR=new R,hR=new R,dR=new R,pR=new R,mR=new R,gR=new R,vR=new R,_R=new ei,xR=[],jc=new R,K0=new R,yR=new R,SR=new R,MR=new R;function ER(c,e,n){let a=null;const r=c.length;for(let l=0;l!==r;l++){const u=c[l],h=yR;c[(l+1)%r].vsub(u,h);const d=SR;h.cross(e,d);const p=MR;n.vsub(u,p);const g=d.dot(p);if(a===null||g>0&&a===!0||g<=0&&a===!1){a===null&&(a=g>0);continue}else return!1}return!0}const Wc=new R,bR=new R,TR=new R,AR=new R,wR=[new R,new R,new R,new R,new R,new R],RR=new R,CR=new R,DR=new R,NR=new R,UR=new R,LR=new R,OR=new R,PR=new R,zR=new R,BR=new R,IR=new R,FR=new R,HR=new R,GR=new R;new R;new R;const kR=new R,VR=new R,jR=new R,WR=new R,qR=new R,XR=new R,YR=new R,KR=new R,ZR=new R,QR=new R,Z0=new rn,JR=new R;new R;const $R=new R,Q0=new R,eC=new R,tC=new R,nC=new R,iC=[0],aC=new R,sC=new R;class J0{constructor(){this.current=[],this.previous=[]}getKey(e,n){if(n<e){const a=n;n=e,e=a}return e<<16|n}set(e,n){const a=this.getKey(e,n),r=this.current;let l=0;for(;a>r[l];)l++;if(a!==r[l]){for(let u=r.length-1;u>=l;u--)r[u+1]=r[u];r[l]=a}}tick(){const e=this.current;this.current=this.previous,this.previous=e,this.current.length=0}getDiff(e,n){const a=this.current,r=this.previous,l=a.length,u=r.length;let h=0;for(let d=0;d<l;d++){let p=!1;const g=a[d];for(;g>r[h];)h++;p=g===r[h],p||$0(e,g)}h=0;for(let d=0;d<u;d++){let p=!1;const g=r[d];for(;g>a[h];)h++;p=a[h]===g,p||$0(n,g)}}}function $0(c,e){c.push((e&4294901760)>>16,e&65535)}const rd=(c,e)=>c<e?`${c}-${e}`:`${e}-${c}`;class rC{constructor(){this.data={keys:[]}}get(e,n){const a=rd(e,n);return this.data[a]}set(e,n,a){const r=rd(e,n);this.get(e,n)||this.data.keys.push(r),this.data[r]=a}delete(e,n){const a=rd(e,n),r=this.data.keys.indexOf(a);r!==-1&&this.data.keys.splice(r,1),delete this.data[a]}reset(){const e=this.data,n=e.keys;for(;n.length>0;){const a=n.pop();delete e[a]}}}class oC extends O_{constructor(e){e===void 0&&(e={}),super(),this.dt=-1,this.allowSleep=!!e.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=e.quatNormalizeSkip!==void 0?e.quatNormalizeSkip:0,this.quatNormalizeFast=e.quatNormalizeFast!==void 0?e.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new R,e.gravity&&this.gravity.copy(e.gravity),e.frictionGravity&&(this.frictionGravity=new R,this.frictionGravity.copy(e.frictionGravity)),this.broadphase=e.broadphase!==void 0?e.broadphase:new dw,this.bodies=[],this.hasActiveBodies=!1,this.solver=e.solver!==void 0?e.solver:new Ww,this.constraints=[],this.narrowphase=new Qw(this),this.collisionMatrix=new B0,this.collisionMatrixPrevious=new B0,this.bodyOverlapKeeper=new J0,this.shapeOverlapKeeper=new J0,this.contactmaterials=[],this.contactMaterialTable=new rC,this.defaultMaterial=new uu("default"),this.defaultContactMaterial=new cu(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(e,n){return this.contactMaterialTable.get(e.id,n.id)}collisionMatrixTick(){const e=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=e,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(e){this.constraints.push(e)}removeConstraint(e){const n=this.constraints.indexOf(e);n!==-1&&this.constraints.splice(n,1)}rayTest(e,n,a){a instanceof tu?this.raycastClosest(e,n,{skipBackfaces:!0},a):this.raycastAll(e,n,{skipBackfaces:!0},a)}raycastAll(e,n,a,r){return a===void 0&&(a={}),a.mode=sn.ALL,a.from=e,a.to=n,a.callback=r,od.intersectWorld(this,a)}raycastAny(e,n,a,r){return a===void 0&&(a={}),a.mode=sn.ANY,a.from=e,a.to=n,a.result=r,od.intersectWorld(this,a)}raycastClosest(e,n,a,r){return a===void 0&&(a={}),a.mode=sn.CLOSEST,a.from=e,a.to=n,a.result=r,od.intersectWorld(this,a)}addBody(e){this.bodies.includes(e)||(e.index=this.bodies.length,this.bodies.push(e),e.world=this,e.initPosition.copy(e.position),e.initVelocity.copy(e.velocity),e.timeLastSleepy=this.time,e instanceof ze&&(e.initAngularVelocity.copy(e.angularVelocity),e.initQuaternion.copy(e.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=e,this.idToBodyMap[e.id]=e,this.dispatchEvent(this.addBodyEvent))}removeBody(e){e.world=null;const n=this.bodies.length-1,a=this.bodies,r=a.indexOf(e);if(r!==-1){a.splice(r,1);for(let l=0;l!==a.length;l++)a[l].index=l;this.collisionMatrix.setNumObjects(n),this.removeBodyEvent.body=e,delete this.idToBodyMap[e.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(e){return this.idToBodyMap[e]}getShapeById(e){const n=this.bodies;for(let a=0;a<n.length;a++){const r=n[a].shapes;for(let l=0;l<r.length;l++){const u=r[l];if(u.id===e)return u}}return null}addContactMaterial(e){this.contactmaterials.push(e),this.contactMaterialTable.set(e.materials[0].id,e.materials[1].id,e)}removeContactMaterial(e){const n=this.contactmaterials.indexOf(e);n!==-1&&(this.contactmaterials.splice(n,1),this.contactMaterialTable.delete(e.materials[0].id,e.materials[1].id))}fixedStep(e,n){e===void 0&&(e=1/60),n===void 0&&(n=10);const a=un.now()/1e3;if(!this.lastCallTime)this.step(e,void 0,n);else{const r=a-this.lastCallTime;this.step(e,r,n)}this.lastCallTime=a}step(e,n,a){if(a===void 0&&(a=10),n===void 0)this.internalStep(e),this.time+=e;else{this.accumulator+=n;const r=un.now();let l=0;for(;this.accumulator>=e&&l<a&&(this.internalStep(e),this.accumulator-=e,l++,!(un.now()-r>e*1e3)););this.accumulator=this.accumulator%e;const u=this.accumulator/e;for(let h=0;h!==this.bodies.length;h++){const d=this.bodies[h];d.previousPosition.lerp(d.position,u,d.interpolatedPosition),d.previousQuaternion.slerp(d.quaternion,u,d.interpolatedQuaternion),d.previousQuaternion.normalize()}this.time+=n}}internalStep(e){this.dt=e;const n=this.contacts,a=hC,r=dC,l=this.bodies.length,u=this.bodies,h=this.solver,d=this.gravity,p=this.doProfiling,g=this.profile,_=ze.DYNAMIC;let v=-1/0;const S=this.constraints,M=fC;d.length();const E=d.x,x=d.y,y=d.z;let T=0;for(p&&(v=un.now()),T=0;T!==l;T++){const k=u[T];if(k.type===_){const Q=k.force,Y=k.mass;Q.x+=Y*E,Q.y+=Y*x,Q.z+=Y*y}}for(let k=0,Q=this.subsystems.length;k!==Q;k++)this.subsystems[k].update();p&&(v=un.now()),a.length=0,r.length=0,this.broadphase.collisionPairs(this,a,r),p&&(g.broadphase=un.now()-v);let A=S.length;for(T=0;T!==A;T++){const k=S[T];if(!k.collideConnected)for(let Q=a.length-1;Q>=0;Q-=1)(k.bodyA===a[Q]&&k.bodyB===r[Q]||k.bodyB===a[Q]&&k.bodyA===r[Q])&&(a.splice(Q,1),r.splice(Q,1))}this.collisionMatrixTick(),p&&(v=un.now());const D=uC,I=n.length;for(T=0;T!==I;T++)D.push(n[T]);n.length=0;const P=this.frictionEquations.length;for(T=0;T!==P;T++)M.push(this.frictionEquations[T]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(a,r,this,n,D,this.frictionEquations,M),p&&(g.narrowphase=un.now()-v),p&&(v=un.now()),T=0;T<this.frictionEquations.length;T++)h.addEquation(this.frictionEquations[T]);const z=n.length;for(let k=0;k!==z;k++){const Q=n[k],Y=Q.bi,L=Q.bj,K=Q.si,j=Q.sj;let he;if(Y.material&&L.material?he=this.getContactMaterial(Y.material,L.material)||this.defaultContactMaterial:he=this.defaultContactMaterial,he.friction,Y.material&&L.material&&(Y.material.friction>=0&&L.material.friction>=0&&Y.material.friction*L.material.friction,Y.material.restitution>=0&&L.material.restitution>=0&&(Q.restitution=Y.material.restitution*L.material.restitution)),h.addEquation(Q),Y.allowSleep&&Y.type===ze.DYNAMIC&&Y.sleepState===ze.SLEEPING&&L.sleepState===ze.AWAKE&&L.type!==ze.STATIC){const B=L.velocity.lengthSquared()+L.angularVelocity.lengthSquared(),$=L.sleepSpeedLimit**2;B>=$*2&&(Y.wakeUpAfterNarrowphase=!0)}if(L.allowSleep&&L.type===ze.DYNAMIC&&L.sleepState===ze.SLEEPING&&Y.sleepState===ze.AWAKE&&Y.type!==ze.STATIC){const B=Y.velocity.lengthSquared()+Y.angularVelocity.lengthSquared(),$=Y.sleepSpeedLimit**2;B>=$*2&&(L.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(Y,L,!0),this.collisionMatrixPrevious.get(Y,L)||(Jo.body=L,Jo.contact=Q,Y.dispatchEvent(Jo),Jo.body=Y,L.dispatchEvent(Jo)),this.bodyOverlapKeeper.set(Y.id,L.id),this.shapeOverlapKeeper.set(K.id,j.id)}for(this.emitContactEvents(),p&&(g.makeContactConstraints=un.now()-v,v=un.now()),T=0;T!==l;T++){const k=u[T];k.wakeUpAfterNarrowphase&&(k.wakeUp(),k.wakeUpAfterNarrowphase=!1)}for(A=S.length,T=0;T!==A;T++){const k=S[T];k.update();for(let Q=0,Y=k.equations.length;Q!==Y;Q++){const L=k.equations[Q];h.addEquation(L)}}h.solve(e,this),p&&(g.solve=un.now()-v),h.removeAllEquations();const V=Math.pow;for(T=0;T!==l;T++){const k=u[T];if(k.type&_){const Q=V(1-k.linearDamping,e),Y=k.velocity;Y.scale(Q,Y);const L=k.angularVelocity;if(L){const K=V(1-k.angularDamping,e);L.scale(K,L)}}}this.dispatchEvent(cC),p&&(v=un.now());const w=this.stepnumber%(this.quatNormalizeSkip+1)===0,F=this.quatNormalizeFast;for(T=0;T!==l;T++)u[T].integrate(e,w,F);this.clearForces(),this.broadphase.dirty=!0,p&&(g.integrate=un.now()-v),this.stepnumber+=1,this.dispatchEvent(lC);let ie=!0;if(this.allowSleep)for(ie=!1,T=0;T!==l;T++){const k=u[T];k.sleepTick(this.time),k.sleepState!==ze.SLEEPING&&(ie=!0)}this.hasActiveBodies=ie}emitContactEvents(){const e=this.hasAnyEventListener("beginContact"),n=this.hasAnyEventListener("endContact");if((e||n)&&this.bodyOverlapKeeper.getDiff(oa,la),e){for(let l=0,u=oa.length;l<u;l+=2)$o.bodyA=this.getBodyById(oa[l]),$o.bodyB=this.getBodyById(oa[l+1]),this.dispatchEvent($o);$o.bodyA=$o.bodyB=null}if(n){for(let l=0,u=la.length;l<u;l+=2)el.bodyA=this.getBodyById(la[l]),el.bodyB=this.getBodyById(la[l+1]),this.dispatchEvent(el);el.bodyA=el.bodyB=null}oa.length=la.length=0;const a=this.hasAnyEventListener("beginShapeContact"),r=this.hasAnyEventListener("endShapeContact");if((a||r)&&this.shapeOverlapKeeper.getDiff(oa,la),a){for(let l=0,u=oa.length;l<u;l+=2){const h=this.getShapeById(oa[l]),d=this.getShapeById(oa[l+1]);ca.shapeA=h,ca.shapeB=d,h&&(ca.bodyA=h.body),d&&(ca.bodyB=d.body),this.dispatchEvent(ca)}ca.bodyA=ca.bodyB=ca.shapeA=ca.shapeB=null}if(r){for(let l=0,u=la.length;l<u;l+=2){const h=this.getShapeById(la[l]),d=this.getShapeById(la[l+1]);ua.shapeA=h,ua.shapeB=d,h&&(ua.bodyA=h.body),d&&(ua.bodyB=d.body),this.dispatchEvent(ua)}ua.bodyA=ua.bodyB=ua.shapeA=ua.shapeB=null}}clearForces(){const e=this.bodies,n=e.length;for(let a=0;a!==n;a++){const r=e[a];r.force,r.torque,r.force.set(0,0,0),r.torque.set(0,0,0)}}}new ei;const od=new sn,un=globalThis.performance||{};if(!un.now){let c=Date.now();un.timing&&un.timing.navigationStart&&(c=un.timing.navigationStart),un.now=()=>Date.now()-c}new R;const lC={type:"postStep"},cC={type:"preStep"},Jo={type:ze.COLLIDE_EVENT_NAME,body:null,contact:null},uC=[],fC=[],hC=[],dC=[],oa=[],la=[],$o={type:"beginContact",bodyA:null,bodyB:null},el={type:"endContact",bodyA:null,bodyB:null},ca={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},ua={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},pC=({onGoBack:c})=>{const e=fn.useRef(null),n=fn.useRef(()=>{});return fn.useEffect(()=>{if(!e.current)return;const a=new z1;a.background=new At(3359061);const r=new fi(75,e.current.clientWidth/e.current.clientHeight,.1,100);r.position.set(0,10,20),r.lookAt(0,10,0);const l=new P1({antialias:!0});l.setSize(e.current.clientWidth,e.current.clientHeight),l.setPixelRatio(window.devicePixelRatio),l.shadowMap.enabled=!0,l.shadowMap.type=n_,e.current.appendChild(l.domElement);const u=()=>{e.current&&(r.aspect=e.current.clientWidth/e.current.clientHeight,r.updateProjectionMatrix(),l.setSize(e.current.clientWidth,e.current.clientHeight))};window.addEventListener("resize",u);const h=new H1(16777215,.5);a.add(h);const d=new F1(16777215,.8);d.position.set(10,20,15),d.castShadow=!0,d.shadow.mapSize.width=2048,d.shadow.mapSize.height=2048,d.shadow.camera.near=.5,d.shadow.camera.far=50,d.shadow.camera.left=-20,d.shadow.camera.right=20,d.shadow.camera.top=20,d.shadow.camera.bottom=-20,a.add(d);const p=new oC;p.gravity.set(0,-9.82,0);const g=new Vw,_=new ze({mass:0,shape:g});_.quaternion.setFromAxisAngle(new R(1,0,0),-Math.PI/2),p.addBody(_);const v=new ed({color:7041664}),S=new lu(new R(1,10,1)),M=new ed({color:10265519}),E=.2,x=new Y0(E),y=()=>{[[-7.5,10,0],[7.5,10,0]].forEach(([z,V,U])=>{const w=new di(new jr(1,20,1),v);w.position.set(z,V,U),w.castShadow=!0,w.receiveShadow=!0,a.add(w);const F=new ze({mass:0,shape:S});F.position.set(z,V,U),p.addBody(F)})},T=()=>{const P=new eu(E,16,16),z=[];for(let V=3;V<18;V+=1.3){const U=Math.floor(V/1.3)%2===0?.65:0;for(let w=-6;w<=6;w+=1.3)w+U>-7&&w+U<7&&z.push(new ue(w+U,V,0))}z.forEach(V=>{const U=new di(P,M);U.position.copy(V),U.castShadow=!0,U.receiveShadow=!0,a.add(U);const w=new ze({mass:0,shape:x});w.position.copy(V),p.addBody(w)})};y(),T();let A=[];const D=()=>{const z=new eu(.4,32,32),V=new ed({color:16777215}),U=new di(z,V);U.castShadow=!0;const w=new Y0(.4),F=new ze({mass:1,shape:w});F.position.set(0,15,0),F.pachinkoMesh=U,a.add(U),p.addBody(F),A.push({mesh:U,body:F})};n.current=D;const I=()=>{requestAnimationFrame(I),p.step(1/60),A.forEach(P=>{P.mesh.position.copy(P.body.position),P.mesh.quaternion.copy(P.body.quaternion)}),l.render(a,r)};return I(),()=>{e.current&&e.current.removeChild(l.domElement),window.removeEventListener("resize",u)}},[]),Te.jsxs("div",{className:"p-6 bg-gray-900 min-h-screen text-white flex flex-col items-center",children:[Te.jsx(nu,{title:"Pachinko Game",onGoBack:c}),Te.jsxs("div",{className:"flex-grow flex flex-col items-center justify-center p-4 w-full",children:[Te.jsx("div",{ref:e,className:"pachinko-game-container rounded-2xl shadow-xl overflow-hidden mb-6"}),Te.jsx("button",{onClick:()=>n.current(),className:"px-8 py-3 bg-blue-600 text-white font-bold rounded-full text-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105",children:"Drop Ball"})]})]})},tl=({title:c,description:e,icon:n,onClick:a,color:r,shadow:l})=>Te.jsxs("button",{className:`p-6 rounded-2xl border-2 ${r} ${l} flex flex-col items-center text-center transition-transform transform hover:scale-105 duration-200 outline-none focus:ring-4 focus:ring-opacity-50`,onClick:a,"aria-label":c,children:[n,Te.jsx("h3",{className:"text-xl font-bold mt-4 text-gray-800",children:c}),Te.jsx("p",{className:"text-sm text-gray-600 mt-2",children:e})]}),mC=()=>{const[c,e]=fn.useState("home"),n=()=>Te.jsxs("div",{className:"flex flex-col items-center justify-center min-h-screen p-4 sm:p-12 bg-gray-50",children:[Te.jsxs("div",{className:"text-center mb-12 fade-in",children:[Te.jsx("h1",{className:"text-5xl sm:text-7xl font-extrabold text-gray-800 mb-4",children:"日本語を学びましょう!"}),Te.jsx("p",{className:"text-lg sm:text-xl text-gray-600",children:"Choose a topic to begin your learning journey."})]}),Te.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl mx-auto",children:[Te.jsx(tl,{title:"Hiragana & Katakana",description:"View and learn the two Japanese syllabaries.",icon:Te.jsx(vS,{className:"w-12 h-12"}),onClick:()=>e("hiragana-katakana"),color:"bg-gray-100 border-gray-200 hover:bg-gray-200",shadow:"shadow-gray-200"}),Te.jsx(tl,{title:"Kanji Overview",description:"Learn the readings and meanings of basic Kanji characters.",icon:Te.jsx(cS,{className:"w-12 h-12"}),onClick:()=>e("KanjiOverview"),color:"bg-gray-100 border-gray-200 hover:bg-gray-200",shadow:"shadow-gray-200"}),Te.jsx(tl,{title:"Kanji Flashcards",description:"practice Kanji characters.",icon:Te.jsx(mS,{className:"w-12 h-12"}),onClick:()=>e("KanjiFlashcards"),color:"bg-gray-100 border-gray-200 hover:bg-gray-200",shadow:"shadow-gray-200"}),Te.jsx(tl,{title:"Vocabulary Quiz",description:"Expand your vocabulary with common Japanese words.",icon:Te.jsx(fS,{className:"w-12 h-12"}),onClick:()=>e("vocabulary"),color:"bg-gray-100 border-gray-200 hover:bg-gray-200",shadow:"shadow-gray-200"}),Te.jsx(tl,{title:"Pachinko Game",description:"Relax and play a fun pachinko-style game.",icon:Te.jsx("puzzle",{className:"w-12 h-12"}),onClick:()=>e("pachinko"),color:"bg-gray-100 border-gray-200 hover:bg-gray-200",shadow:"shadow-gray-200"})]})]}),a=()=>{switch(c){case"home":return Te.jsx(n,{});case"hiragana-katakana":return Te.jsx(_S,{onGoBack:()=>e("home")});case"kanjiOverview":return Te.jsx(yS,{onGoBack:()=>e("home")});case"KanjiFlashcards":return Te.jsx(xS,{onGoBack:()=>e("home")});case"vocabulary":return Te.jsx(SS,{onGoBack:()=>e("home")});case"pachinko":return Te.jsx(pC,{onGoBack:()=>e("home")});default:return Te.jsx(n,{})}};return Te.jsx("div",{className:"app",children:a()})},gC=nS.createRoot(document.getElementById("root"));gC.render(Te.jsx(Ky.StrictMode,{children:Te.jsx(mC,{})}));
