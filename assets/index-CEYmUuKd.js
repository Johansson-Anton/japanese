(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(r){if(r.ep)return;r.ep=!0;const l=n(r);fetch(r.href,l)}})();function jy(c){return c&&c.__esModule&&Object.prototype.hasOwnProperty.call(c,"default")?c.default:c}var dh={exports:{}},Wo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $g;function qy(){if($g)return Wo;$g=1;var c=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,r,l){var u=null;if(l!==void 0&&(u=""+l),r.key!==void 0&&(u=""+r.key),"key"in r){l={};for(var h in r)h!=="key"&&(l[h]=r[h])}else l=r;return r=l.ref,{$$typeof:c,type:a,key:u,ref:r!==void 0?r:null,props:l}}return Wo.Fragment=t,Wo.jsx=n,Wo.jsxs=n,Wo}var tv;function Xy(){return tv||(tv=1,dh.exports=qy()),dh.exports}var Tt=Xy(),ph={exports:{}},se={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ev;function Yy(){if(ev)return se;ev=1;var c=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function v(B){return B===null||typeof B!="object"?null:(B=_&&B[_]||B["@@iterator"],typeof B=="function"?B:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,E={};function x(B,$,ot){this.props=B,this.context=$,this.refs=E,this.updater=ot||S}x.prototype.isReactComponent={},x.prototype.setState=function(B,$){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,$,"setState")},x.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function y(){}y.prototype=x.prototype;function T(B,$,ot){this.props=B,this.context=$,this.refs=E,this.updater=ot||S}var A=T.prototype=new y;A.constructor=T,M(A,x.prototype),A.isPureReactComponent=!0;var D=Array.isArray,I={H:null,A:null,T:null,S:null,V:null},P=Object.prototype.hasOwnProperty;function z(B,$,ot,yt,tt,dt){return ot=dt.ref,{$$typeof:c,type:B,key:$,ref:ot!==void 0?ot:null,props:dt}}function k(B,$){return z(B.type,$,void 0,void 0,void 0,B.props)}function U(B){return typeof B=="object"&&B!==null&&B.$$typeof===c}function w(B){var $={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(ot){return $[ot]})}var F=/\/+/g;function it(B,$){return typeof B=="object"&&B!==null&&B.key!=null?w(""+B.key):$.toString(36)}function V(){}function Q(B){switch(B.status){case"fulfilled":return B.value;case"rejected":throw B.reason;default:switch(typeof B.status=="string"?B.then(V,V):(B.status="pending",B.then(function($){B.status==="pending"&&(B.status="fulfilled",B.value=$)},function($){B.status==="pending"&&(B.status="rejected",B.reason=$)})),B.status){case"fulfilled":return B.value;case"rejected":throw B.reason}}throw B}function Y(B,$,ot,yt,tt){var dt=typeof B;(dt==="undefined"||dt==="boolean")&&(B=null);var _t=!1;if(B===null)_t=!0;else switch(dt){case"bigint":case"string":case"number":_t=!0;break;case"object":switch(B.$$typeof){case c:case t:_t=!0;break;case g:return _t=B._init,Y(_t(B._payload),$,ot,yt,tt)}}if(_t)return tt=tt(B),_t=yt===""?"."+it(B,0):yt,D(tt)?(ot="",_t!=null&&(ot=_t.replace(F,"$&/")+"/"),Y(tt,$,ot,"",function(Jt){return Jt})):tt!=null&&(U(tt)&&(tt=k(tt,ot+(tt.key==null||B&&B.key===tt.key?"":(""+tt.key).replace(F,"$&/")+"/")+_t)),$.push(tt)),1;_t=0;var At=yt===""?".":yt+":";if(D(B))for(var Ft=0;Ft<B.length;Ft++)yt=B[Ft],dt=At+it(yt,Ft),_t+=Y(yt,$,ot,dt,tt);else if(Ft=v(B),typeof Ft=="function")for(B=Ft.call(B),Ft=0;!(yt=B.next()).done;)yt=yt.value,dt=At+it(yt,Ft++),_t+=Y(yt,$,ot,dt,tt);else if(dt==="object"){if(typeof B.then=="function")return Y(Q(B),$,ot,yt,tt);throw $=String(B),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return _t}function L(B,$,ot){if(B==null)return B;var yt=[],tt=0;return Y(B,yt,"","",function(dt){return $.call(ot,dt,tt++)}),yt}function Z(B){if(B._status===-1){var $=B._result;$=$(),$.then(function(ot){(B._status===0||B._status===-1)&&(B._status=1,B._result=ot)},function(ot){(B._status===0||B._status===-1)&&(B._status=2,B._result=ot)}),B._status===-1&&(B._status=0,B._result=$)}if(B._status===1)return B._result.default;throw B._result}var W=typeof reportError=="function"?reportError:function(B){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof B=="object"&&B!==null&&typeof B.message=="string"?String(B.message):String(B),error:B});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",B);return}console.error(B)};function ht(){}return se.Children={map:L,forEach:function(B,$,ot){L(B,function(){$.apply(this,arguments)},ot)},count:function(B){var $=0;return L(B,function(){$++}),$},toArray:function(B){return L(B,function($){return $})||[]},only:function(B){if(!U(B))throw Error("React.Children.only expected to receive a single React element child.");return B}},se.Component=x,se.Fragment=n,se.Profiler=r,se.PureComponent=T,se.StrictMode=a,se.Suspense=d,se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,se.__COMPILER_RUNTIME={__proto__:null,c:function(B){return I.H.useMemoCache(B)}},se.cache=function(B){return function(){return B.apply(null,arguments)}},se.cloneElement=function(B,$,ot){if(B==null)throw Error("The argument must be a React element, but you passed "+B+".");var yt=M({},B.props),tt=B.key,dt=void 0;if($!=null)for(_t in $.ref!==void 0&&(dt=void 0),$.key!==void 0&&(tt=""+$.key),$)!P.call($,_t)||_t==="key"||_t==="__self"||_t==="__source"||_t==="ref"&&$.ref===void 0||(yt[_t]=$[_t]);var _t=arguments.length-2;if(_t===1)yt.children=ot;else if(1<_t){for(var At=Array(_t),Ft=0;Ft<_t;Ft++)At[Ft]=arguments[Ft+2];yt.children=At}return z(B.type,tt,void 0,void 0,dt,yt)},se.createContext=function(B){return B={$$typeof:u,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null},B.Provider=B,B.Consumer={$$typeof:l,_context:B},B},se.createElement=function(B,$,ot){var yt,tt={},dt=null;if($!=null)for(yt in $.key!==void 0&&(dt=""+$.key),$)P.call($,yt)&&yt!=="key"&&yt!=="__self"&&yt!=="__source"&&(tt[yt]=$[yt]);var _t=arguments.length-2;if(_t===1)tt.children=ot;else if(1<_t){for(var At=Array(_t),Ft=0;Ft<_t;Ft++)At[Ft]=arguments[Ft+2];tt.children=At}if(B&&B.defaultProps)for(yt in _t=B.defaultProps,_t)tt[yt]===void 0&&(tt[yt]=_t[yt]);return z(B,dt,void 0,void 0,null,tt)},se.createRef=function(){return{current:null}},se.forwardRef=function(B){return{$$typeof:h,render:B}},se.isValidElement=U,se.lazy=function(B){return{$$typeof:g,_payload:{_status:-1,_result:B},_init:Z}},se.memo=function(B,$){return{$$typeof:p,type:B,compare:$===void 0?null:$}},se.startTransition=function(B){var $=I.T,ot={};I.T=ot;try{var yt=B(),tt=I.S;tt!==null&&tt(ot,yt),typeof yt=="object"&&yt!==null&&typeof yt.then=="function"&&yt.then(ht,W)}catch(dt){W(dt)}finally{I.T=$}},se.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},se.use=function(B){return I.H.use(B)},se.useActionState=function(B,$,ot){return I.H.useActionState(B,$,ot)},se.useCallback=function(B,$){return I.H.useCallback(B,$)},se.useContext=function(B){return I.H.useContext(B)},se.useDebugValue=function(){},se.useDeferredValue=function(B,$){return I.H.useDeferredValue(B,$)},se.useEffect=function(B,$,ot){var yt=I.H;if(typeof ot=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return yt.useEffect(B,$)},se.useId=function(){return I.H.useId()},se.useImperativeHandle=function(B,$,ot){return I.H.useImperativeHandle(B,$,ot)},se.useInsertionEffect=function(B,$){return I.H.useInsertionEffect(B,$)},se.useLayoutEffect=function(B,$){return I.H.useLayoutEffect(B,$)},se.useMemo=function(B,$){return I.H.useMemo(B,$)},se.useOptimistic=function(B,$){return I.H.useOptimistic(B,$)},se.useReducer=function(B,$,ot){return I.H.useReducer(B,$,ot)},se.useRef=function(B){return I.H.useRef(B)},se.useState=function(B){return I.H.useState(B)},se.useSyncExternalStore=function(B,$,ot){return I.H.useSyncExternalStore(B,$,ot)},se.useTransition=function(){return I.H.useTransition()},se.version="19.1.1",se}var nv;function md(){return nv||(nv=1,ph.exports=Yy()),ph.exports}var fn=md();const Zy=jy(fn);var mh={exports:{}},jo={},gh={exports:{}},vh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iv;function Ky(){return iv||(iv=1,function(c){function t(L,Z){var W=L.length;L.push(Z);t:for(;0<W;){var ht=W-1>>>1,B=L[ht];if(0<r(B,Z))L[ht]=Z,L[W]=B,W=ht;else break t}}function n(L){return L.length===0?null:L[0]}function a(L){if(L.length===0)return null;var Z=L[0],W=L.pop();if(W!==Z){L[0]=W;t:for(var ht=0,B=L.length,$=B>>>1;ht<$;){var ot=2*(ht+1)-1,yt=L[ot],tt=ot+1,dt=L[tt];if(0>r(yt,W))tt<B&&0>r(dt,yt)?(L[ht]=dt,L[tt]=W,ht=tt):(L[ht]=yt,L[ot]=W,ht=ot);else if(tt<B&&0>r(dt,W))L[ht]=dt,L[tt]=W,ht=tt;else break t}}return Z}function r(L,Z){var W=L.sortIndex-Z.sortIndex;return W!==0?W:L.id-Z.id}if(c.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;c.unstable_now=function(){return l.now()}}else{var u=Date,h=u.now();c.unstable_now=function(){return u.now()-h}}var d=[],p=[],g=1,_=null,v=3,S=!1,M=!1,E=!1,x=!1,y=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,A=typeof setImmediate<"u"?setImmediate:null;function D(L){for(var Z=n(p);Z!==null;){if(Z.callback===null)a(p);else if(Z.startTime<=L)a(p),Z.sortIndex=Z.expirationTime,t(d,Z);else break;Z=n(p)}}function I(L){if(E=!1,D(L),!M)if(n(d)!==null)M=!0,P||(P=!0,it());else{var Z=n(p);Z!==null&&Y(I,Z.startTime-L)}}var P=!1,z=-1,k=5,U=-1;function w(){return x?!0:!(c.unstable_now()-U<k)}function F(){if(x=!1,P){var L=c.unstable_now();U=L;var Z=!0;try{t:{M=!1,E&&(E=!1,T(z),z=-1),S=!0;var W=v;try{e:{for(D(L),_=n(d);_!==null&&!(_.expirationTime>L&&w());){var ht=_.callback;if(typeof ht=="function"){_.callback=null,v=_.priorityLevel;var B=ht(_.expirationTime<=L);if(L=c.unstable_now(),typeof B=="function"){_.callback=B,D(L),Z=!0;break e}_===n(d)&&a(d),D(L)}else a(d);_=n(d)}if(_!==null)Z=!0;else{var $=n(p);$!==null&&Y(I,$.startTime-L),Z=!1}}break t}finally{_=null,v=W,S=!1}Z=void 0}}finally{Z?it():P=!1}}}var it;if(typeof A=="function")it=function(){A(F)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,Q=V.port2;V.port1.onmessage=F,it=function(){Q.postMessage(null)}}else it=function(){y(F,0)};function Y(L,Z){z=y(function(){L(c.unstable_now())},Z)}c.unstable_IdlePriority=5,c.unstable_ImmediatePriority=1,c.unstable_LowPriority=4,c.unstable_NormalPriority=3,c.unstable_Profiling=null,c.unstable_UserBlockingPriority=2,c.unstable_cancelCallback=function(L){L.callback=null},c.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<L?Math.floor(1e3/L):5},c.unstable_getCurrentPriorityLevel=function(){return v},c.unstable_next=function(L){switch(v){case 1:case 2:case 3:var Z=3;break;default:Z=v}var W=v;v=Z;try{return L()}finally{v=W}},c.unstable_requestPaint=function(){x=!0},c.unstable_runWithPriority=function(L,Z){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var W=v;v=L;try{return Z()}finally{v=W}},c.unstable_scheduleCallback=function(L,Z,W){var ht=c.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?ht+W:ht):W=ht,L){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=W+B,L={id:g++,callback:Z,priorityLevel:L,startTime:W,expirationTime:B,sortIndex:-1},W>ht?(L.sortIndex=W,t(p,L),n(d)===null&&L===n(p)&&(E?(T(z),z=-1):E=!0,Y(I,W-ht))):(L.sortIndex=B,t(d,L),M||S||(M=!0,P||(P=!0,it()))),L},c.unstable_shouldYield=w,c.unstable_wrapCallback=function(L){var Z=v;return function(){var W=v;v=Z;try{return L.apply(this,arguments)}finally{v=W}}}}(vh)),vh}var av;function Qy(){return av||(av=1,gh.exports=Ky()),gh.exports}var _h={exports:{}},Rn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sv;function Jy(){if(sv)return Rn;sv=1;var c=md();function t(d){var p="https://react.dev/errors/"+d;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+d+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},r=Symbol.for("react.portal");function l(d,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:r,key:_==null?null:""+_,children:d,containerInfo:p,implementation:g}}var u=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(d,p){if(d==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Rn.createPortal=function(d,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return l(d,p,null,g)},Rn.flushSync=function(d){var p=u.T,g=a.p;try{if(u.T=null,a.p=2,d)return d()}finally{u.T=p,a.p=g,a.d.f()}},Rn.preconnect=function(d,p){typeof d=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,a.d.C(d,p))},Rn.prefetchDNS=function(d){typeof d=="string"&&a.d.D(d)},Rn.preinit=function(d,p){if(typeof d=="string"&&p&&typeof p.as=="string"){var g=p.as,_=h(g,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?a.d.S(d,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:S}):g==="script"&&a.d.X(d,{crossOrigin:_,integrity:v,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Rn.preinitModule=function(d,p){if(typeof d=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);a.d.M(d,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&a.d.M(d)},Rn.preload=function(d,p){if(typeof d=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=h(g,p.crossOrigin);a.d.L(d,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Rn.preloadModule=function(d,p){if(typeof d=="string")if(p){var g=h(p.as,p.crossOrigin);a.d.m(d,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else a.d.m(d)},Rn.requestFormReset=function(d){a.d.r(d)},Rn.unstable_batchedUpdates=function(d,p){return d(p)},Rn.useFormState=function(d,p,g){return u.H.useFormState(d,p,g)},Rn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Rn.version="19.1.1",Rn}var rv;function $y(){if(rv)return _h.exports;rv=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(t){console.error(t)}}return c(),_h.exports=Jy(),_h.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ov;function tS(){if(ov)return jo;ov=1;var c=Qy(),t=md(),n=$y();function a(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function l(e){var i=e,s=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(s=i.return),e=i.return;while(e)}return i.tag===3?s:null}function u(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function h(e){if(l(e)!==e)throw Error(a(188))}function d(e){var i=e.alternate;if(!i){if(i=l(e),i===null)throw Error(a(188));return i!==e?null:e}for(var s=e,o=i;;){var f=s.return;if(f===null)break;var m=f.alternate;if(m===null){if(o=f.return,o!==null){s=o;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===s)return h(f),e;if(m===o)return h(f),i;m=m.sibling}throw Error(a(188))}if(s.return!==o.return)s=f,o=m;else{for(var b=!1,C=f.child;C;){if(C===s){b=!0,s=f,o=m;break}if(C===o){b=!0,o=f,s=m;break}C=C.sibling}if(!b){for(C=m.child;C;){if(C===s){b=!0,s=m,o=f;break}if(C===o){b=!0,o=m,s=f;break}C=C.sibling}if(!b)throw Error(a(189))}}if(s.alternate!==o)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?e:i}function p(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=p(e),i!==null)return i;e=e.sibling}return null}var g=Object.assign,_=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),y=Symbol.for("react.provider"),T=Symbol.for("react.consumer"),A=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),F=Symbol.iterator;function it(e){return e===null||typeof e!="object"?null:(e=F&&e[F]||e["@@iterator"],typeof e=="function"?e:null)}var V=Symbol.for("react.client.reference");function Q(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===V?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case M:return"Fragment";case x:return"Profiler";case E:return"StrictMode";case I:return"Suspense";case P:return"SuspenseList";case U:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case S:return"Portal";case A:return(e.displayName||"Context")+".Provider";case T:return(e._context.displayName||"Context")+".Consumer";case D:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return i=e.displayName||null,i!==null?i:Q(e.type)||"Memo";case k:i=e._payload,e=e._init;try{return Q(e(i))}catch{}}return null}var Y=Array.isArray,L=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},ht=[],B=-1;function $(e){return{current:e}}function ot(e){0>B||(e.current=ht[B],ht[B]=null,B--)}function yt(e,i){B++,ht[B]=e.current,e.current=i}var tt=$(null),dt=$(null),_t=$(null),At=$(null);function Ft(e,i){switch(yt(_t,i),yt(dt,e),yt(tt,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?wg(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=wg(i),e=Rg(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ot(tt),yt(tt,e)}function Jt(){ot(tt),ot(dt),ot(_t)}function pe(e){e.memoizedState!==null&&yt(At,e);var i=tt.current,s=Rg(i,e.type);i!==s&&(yt(dt,e),yt(tt,s))}function X(e){dt.current===e&&(ot(tt),ot(dt)),At.current===e&&(ot(At),Fo._currentValue=W)}var fe=Object.prototype.hasOwnProperty,ce=c.unstable_scheduleCallback,ze=c.unstable_cancelCallback,Yt=c.unstable_shouldYield,xe=c.unstable_requestPaint,$t=c.unstable_now,ae=c.unstable_getCurrentPriorityLevel,je=c.unstable_ImmediatePriority,G=c.unstable_UserBlockingPriority,N=c.unstable_NormalPriority,ft=c.unstable_LowPriority,St=c.unstable_IdlePriority,Mt=c.log,Et=c.unstable_setDisableYieldValue,Vt=null,Rt=null;function Dt(e){if(typeof Mt=="function"&&Et(e),Rt&&typeof Rt.setStrictMode=="function")try{Rt.setStrictMode(Vt,e)}catch{}}var qt=Math.clz32?Math.clz32:he,Ct=Math.log,Gt=Math.LN2;function he(e){return e>>>=0,e===0?32:31-(Ct(e)/Gt|0)|0}var Zt=256,Nt=4194304;function ne(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function re(e,i,s){var o=e.pendingLanes;if(o===0)return 0;var f=0,m=e.suspendedLanes,b=e.pingedLanes;e=e.warmLanes;var C=o&134217727;return C!==0?(o=C&~m,o!==0?f=ne(o):(b&=C,b!==0?f=ne(b):s||(s=C&~e,s!==0&&(f=ne(s))))):(C=o&~m,C!==0?f=ne(C):b!==0?f=ne(b):s||(s=o&~e,s!==0&&(f=ne(s)))),f===0?0:i!==0&&i!==f&&(i&m)===0&&(m=f&-f,s=i&-i,m>=s||m===32&&(s&4194048)!==0)?i:f}function Be(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function q(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ot(){var e=Zt;return Zt<<=1,(Zt&4194048)===0&&(Zt=256),e}function mt(){var e=Nt;return Nt<<=1,(Nt&62914560)===0&&(Nt=4194304),e}function xt(e){for(var i=[],s=0;31>s;s++)i.push(e);return i}function wt(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ie(e,i,s,o,f,m){var b=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var C=e.entanglements,H=e.expirationTimes,st=e.hiddenUpdates;for(s=b&~s;0<s;){var pt=31-qt(s),vt=1<<pt;C[pt]=0,H[pt]=-1;var rt=st[pt];if(rt!==null)for(st[pt]=null,pt=0;pt<rt.length;pt++){var lt=rt[pt];lt!==null&&(lt.lane&=-536870913)}s&=~vt}o!==0&&ye(e,o,0),m!==0&&f===0&&e.tag!==0&&(e.suspendedLanes|=m&~(b&~i))}function ye(e,i,s){e.pendingLanes|=i,e.suspendedLanes&=~i;var o=31-qt(i);e.entangledLanes|=i,e.entanglements[o]=e.entanglements[o]|1073741824|s&4194090}function ke(e,i){var s=e.entangledLanes|=i;for(e=e.entanglements;s;){var o=31-qt(s),f=1<<o;f&i|e[o]&i&&(e[o]|=i),s&=~f}}function Ye(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ee(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Wn(){var e=Z.p;return e!==0?e:(e=window.event,e===void 0?32:Xg(e.type))}function ei(e,i){var s=Z.p;try{return Z.p=e,i()}finally{Z.p=s}}var bn=Math.random().toString(36).slice(2),tn="__reactFiber$"+bn,xn="__reactProps$"+bn,Hi="__reactContainer$"+bn,pa="__reactEvents$"+bn,ll="__reactListeners$"+bn,Os="__reactHandles$"+bn,qr="__reactResources$"+bn,ma="__reactMarker$"+bn;function Xr(e){delete e[tn],delete e[xn],delete e[pa],delete e[ll],delete e[Os]}function ga(e){var i=e[tn];if(i)return i;for(var s=e.parentNode;s;){if(i=s[Hi]||s[tn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(e=Ug(e);e!==null;){if(s=e[tn])return s;e=Ug(e)}return i}e=s,s=e.parentNode}return null}function va(e){if(e=e[tn]||e[Hi]){var i=e.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return e}return null}function O(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(a(33))}function K(e){var i=e[qr];return i||(i=e[qr]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function et(e){e[ma]=!0}var ct=new Set,nt={};function bt(e,i){Ut(e,i),Ut(e+"Capture",i)}function Ut(e,i){for(nt[e]=i,e=0;e<i.length;e++)ct.add(i[e])}var Bt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ht={},Kt={};function te(e){return fe.call(Kt,e)?!0:fe.call(Ht,e)?!1:Bt.test(e)?Kt[e]=!0:(Ht[e]=!0,!1)}function jt(e,i,s){if(te(i))if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var o=i.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+s)}}function _e(e,i,s){if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+s)}}function be(e,i,s,o){if(o===null)e.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(i,s,""+o)}}var Fe,Tn;function ve(e){if(Fe===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);Fe=i&&i[1]||"",Tn=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Fe+e+Tn}var kt=!1;function on(e,i){if(!e||kt)return"";kt=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(i){var vt=function(){throw Error()};if(Object.defineProperty(vt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(vt,[])}catch(lt){var rt=lt}Reflect.construct(e,[],vt)}else{try{vt.call()}catch(lt){rt=lt}e.call(vt.prototype)}}else{try{throw Error()}catch(lt){rt=lt}(vt=e())&&typeof vt.catch=="function"&&vt.catch(function(){})}}catch(lt){if(lt&&rt&&typeof lt.stack=="string")return[lt.stack,rt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=o.DetermineComponentFrameRoot(),b=m[0],C=m[1];if(b&&C){var H=b.split(`
`),st=C.split(`
`);for(f=o=0;o<H.length&&!H[o].includes("DetermineComponentFrameRoot");)o++;for(;f<st.length&&!st[f].includes("DetermineComponentFrameRoot");)f++;if(o===H.length||f===st.length)for(o=H.length-1,f=st.length-1;1<=o&&0<=f&&H[o]!==st[f];)f--;for(;1<=o&&0<=f;o--,f--)if(H[o]!==st[f]){if(o!==1||f!==1)do if(o--,f--,0>f||H[o]!==st[f]){var pt=`
`+H[o].replace(" at new "," at ");return e.displayName&&pt.includes("<anonymous>")&&(pt=pt.replace("<anonymous>",e.displayName)),pt}while(1<=o&&0<=f);break}}}finally{kt=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?ve(s):""}function Ce(e){switch(e.tag){case 26:case 27:case 5:return ve(e.type);case 16:return ve("Lazy");case 13:return ve("Suspense");case 19:return ve("SuspenseList");case 0:case 15:return on(e.type,!1);case 11:return on(e.type.render,!1);case 1:return on(e.type,!0);case 31:return ve("Activity");default:return""}}function ni(e){try{var i="";do i+=Ce(e),e=e.return;while(e);return i}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function yn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function bi(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Yr(e){var i=bi(e)?"checked":"value",s=Object.getOwnPropertyDescriptor(e.constructor.prototype,i),o=""+e[i];if(!e.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var f=s.get,m=s.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return f.call(this)},set:function(b){o=""+b,m.call(this,b)}}),Object.defineProperty(e,i,{enumerable:s.enumerable}),{getValue:function(){return o},setValue:function(b){o=""+b},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function qe(e){e._valueTracker||(e._valueTracker=Yr(e))}function pi(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var s=i.getValue(),o="";return e&&(o=bi(e)?e.checked?"true":"false":e.value),e=o,e!==s?(i.setValue(e),!0):!1}function _a(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var On=/[\n"\\]/g;function An(e){return e.replace(On,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Zr(e,i,s,o,f,m,b,C){e.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.type=b:e.removeAttribute("type"),i!=null?b==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+yn(i)):e.value!==""+yn(i)&&(e.value=""+yn(i)):b!=="submit"&&b!=="reset"||e.removeAttribute("value"),i!=null?uu(e,b,yn(i)):s!=null?uu(e,b,yn(s)):o!=null&&e.removeAttribute("value"),f==null&&m!=null&&(e.defaultChecked=!!m),f!=null&&(e.checked=f&&typeof f!="function"&&typeof f!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?e.name=""+yn(C):e.removeAttribute("name")}function Kr(e,i,s,o,f,m,b,C){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),i!=null||s!=null){if(!(m!=="submit"&&m!=="reset"||i!=null))return;s=s!=null?""+yn(s):"",i=i!=null?""+yn(i):s,C||i===e.value||(e.value=i),e.defaultValue=i}o=o??f,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=C?e.checked:!!o,e.defaultChecked=!!o,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(e.name=b)}function uu(e,i,s){i==="number"&&_a(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function Ps(e,i,s,o){if(e=e.options,i){i={};for(var f=0;f<s.length;f++)i["$"+s[f]]=!0;for(s=0;s<e.length;s++)f=i.hasOwnProperty("$"+e[s].value),e[s].selected!==f&&(e[s].selected=f),f&&o&&(e[s].defaultSelected=!0)}else{for(s=""+yn(s),i=null,f=0;f<e.length;f++){if(e[f].value===s){e[f].selected=!0,o&&(e[f].defaultSelected=!0);return}i!==null||e[f].disabled||(i=e[f])}i!==null&&(i.selected=!0)}}function Td(e,i,s){if(i!=null&&(i=""+yn(i),i!==e.value&&(e.value=i),s==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=s!=null?""+yn(s):""}function Ad(e,i,s,o){if(i==null){if(o!=null){if(s!=null)throw Error(a(92));if(Y(o)){if(1<o.length)throw Error(a(93));o=o[0]}s=o}s==null&&(s=""),i=s}s=yn(i),e.defaultValue=s,o=e.textContent,o===s&&o!==""&&o!==null&&(e.value=o)}function zs(e,i){if(i){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=i;return}}e.textContent=i}var V_=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function wd(e,i,s){var o=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?o?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":o?e.setProperty(i,s):typeof s!="number"||s===0||V_.has(i)?i==="float"?e.cssFloat=s:e[i]=(""+s).trim():e[i]=s+"px"}function Rd(e,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(e=e.style,s!=null){for(var o in s)!s.hasOwnProperty(o)||i!=null&&i.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var f in i)o=i[f],i.hasOwnProperty(f)&&s[f]!==o&&wd(e,f,o)}else for(var m in i)i.hasOwnProperty(m)&&wd(e,m,i[m])}function fu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var k_=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),W_=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function cl(e){return W_.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var hu=null;function du(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Bs=null,Is=null;function Cd(e){var i=va(e);if(i&&(e=i.stateNode)){var s=e[xn]||null;t:switch(e=i.stateNode,i.type){case"input":if(Zr(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+An(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var o=s[i];if(o!==e&&o.form===e.form){var f=o[xn]||null;if(!f)throw Error(a(90));Zr(o,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<s.length;i++)o=s[i],o.form===e.form&&pi(o)}break t;case"textarea":Td(e,s.value,s.defaultValue);break t;case"select":i=s.value,i!=null&&Ps(e,!!s.multiple,i,!1)}}}var pu=!1;function Dd(e,i,s){if(pu)return e(i,s);pu=!0;try{var o=e(i);return o}finally{if(pu=!1,(Bs!==null||Is!==null)&&(Yl(),Bs&&(i=Bs,e=Is,Is=Bs=null,Cd(i),e)))for(i=0;i<e.length;i++)Cd(e[i])}}function Qr(e,i){var s=e.stateNode;if(s===null)return null;var o=s[xn]||null;if(o===null)return null;s=o[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var Gi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),mu=!1;if(Gi)try{var Jr={};Object.defineProperty(Jr,"passive",{get:function(){mu=!0}}),window.addEventListener("test",Jr,Jr),window.removeEventListener("test",Jr,Jr)}catch{mu=!1}var xa=null,gu=null,ul=null;function Nd(){if(ul)return ul;var e,i=gu,s=i.length,o,f="value"in xa?xa.value:xa.textContent,m=f.length;for(e=0;e<s&&i[e]===f[e];e++);var b=s-e;for(o=1;o<=b&&i[s-o]===f[m-o];o++);return ul=f.slice(e,1<o?1-o:void 0)}function fl(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function hl(){return!0}function Ud(){return!1}function Pn(e){function i(s,o,f,m,b){this._reactName=s,this._targetInst=f,this.type=o,this.nativeEvent=m,this.target=b,this.currentTarget=null;for(var C in e)e.hasOwnProperty(C)&&(s=e[C],this[C]=s?s(m):m[C]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?hl:Ud,this.isPropagationStopped=Ud,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=hl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=hl)},persist:function(){},isPersistent:hl}),i}var is={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dl=Pn(is),$r=g({},is,{view:0,detail:0}),j_=Pn($r),vu,_u,to,pl=g({},$r,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==to&&(to&&e.type==="mousemove"?(vu=e.screenX-to.screenX,_u=e.screenY-to.screenY):_u=vu=0,to=e),vu)},movementY:function(e){return"movementY"in e?e.movementY:_u}}),Ld=Pn(pl),q_=g({},pl,{dataTransfer:0}),X_=Pn(q_),Y_=g({},$r,{relatedTarget:0}),xu=Pn(Y_),Z_=g({},is,{animationName:0,elapsedTime:0,pseudoElement:0}),K_=Pn(Z_),Q_=g({},is,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),J_=Pn(Q_),$_=g({},is,{data:0}),Od=Pn($_),tx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ex={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ix(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=nx[e])?!!i[e]:!1}function yu(){return ix}var ax=g({},$r,{key:function(e){if(e.key){var i=tx[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=fl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ex[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yu,charCode:function(e){return e.type==="keypress"?fl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?fl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),sx=Pn(ax),rx=g({},pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pd=Pn(rx),ox=g({},$r,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yu}),lx=Pn(ox),cx=g({},is,{propertyName:0,elapsedTime:0,pseudoElement:0}),ux=Pn(cx),fx=g({},pl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),hx=Pn(fx),dx=g({},is,{newState:0,oldState:0}),px=Pn(dx),mx=[9,13,27,32],Su=Gi&&"CompositionEvent"in window,eo=null;Gi&&"documentMode"in document&&(eo=document.documentMode);var gx=Gi&&"TextEvent"in window&&!eo,zd=Gi&&(!Su||eo&&8<eo&&11>=eo),Bd=" ",Id=!1;function Fd(e,i){switch(e){case"keyup":return mx.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Fs=!1;function vx(e,i){switch(e){case"compositionend":return Hd(i);case"keypress":return i.which!==32?null:(Id=!0,Bd);case"textInput":return e=i.data,e===Bd&&Id?null:e;default:return null}}function _x(e,i){if(Fs)return e==="compositionend"||!Su&&Fd(e,i)?(e=Nd(),ul=gu=xa=null,Fs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return zd&&i.locale!=="ko"?null:i.data;default:return null}}var xx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gd(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!xx[e.type]:i==="textarea"}function Vd(e,i,s,o){Bs?Is?Is.push(o):Is=[o]:Bs=o,i=tc(i,"onChange"),0<i.length&&(s=new dl("onChange","change",null,s,o),e.push({event:s,listeners:i}))}var no=null,io=null;function yx(e){Mg(e,0)}function ml(e){var i=O(e);if(pi(i))return e}function kd(e,i){if(e==="change")return i}var Wd=!1;if(Gi){var Mu;if(Gi){var Eu="oninput"in document;if(!Eu){var jd=document.createElement("div");jd.setAttribute("oninput","return;"),Eu=typeof jd.oninput=="function"}Mu=Eu}else Mu=!1;Wd=Mu&&(!document.documentMode||9<document.documentMode)}function qd(){no&&(no.detachEvent("onpropertychange",Xd),io=no=null)}function Xd(e){if(e.propertyName==="value"&&ml(io)){var i=[];Vd(i,io,e,du(e)),Dd(yx,i)}}function Sx(e,i,s){e==="focusin"?(qd(),no=i,io=s,no.attachEvent("onpropertychange",Xd)):e==="focusout"&&qd()}function Mx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ml(io)}function Ex(e,i){if(e==="click")return ml(i)}function bx(e,i){if(e==="input"||e==="change")return ml(i)}function Tx(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var jn=typeof Object.is=="function"?Object.is:Tx;function ao(e,i){if(jn(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var s=Object.keys(e),o=Object.keys(i);if(s.length!==o.length)return!1;for(o=0;o<s.length;o++){var f=s[o];if(!fe.call(i,f)||!jn(e[f],i[f]))return!1}return!0}function Yd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Zd(e,i){var s=Yd(e);e=0;for(var o;s;){if(s.nodeType===3){if(o=e+s.textContent.length,e<=i&&o>=i)return{node:s,offset:i-e};e=o}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=Yd(s)}}function Kd(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?Kd(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function Qd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=_a(e.document);i instanceof e.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)e=i.contentWindow;else break;i=_a(e.document)}return i}function bu(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var Ax=Gi&&"documentMode"in document&&11>=document.documentMode,Hs=null,Tu=null,so=null,Au=!1;function Jd(e,i,s){var o=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Au||Hs==null||Hs!==_a(o)||(o=Hs,"selectionStart"in o&&bu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),so&&ao(so,o)||(so=o,o=tc(Tu,"onSelect"),0<o.length&&(i=new dl("onSelect","select",null,i,s),e.push({event:i,listeners:o}),i.target=Hs)))}function as(e,i){var s={};return s[e.toLowerCase()]=i.toLowerCase(),s["Webkit"+e]="webkit"+i,s["Moz"+e]="moz"+i,s}var Gs={animationend:as("Animation","AnimationEnd"),animationiteration:as("Animation","AnimationIteration"),animationstart:as("Animation","AnimationStart"),transitionrun:as("Transition","TransitionRun"),transitionstart:as("Transition","TransitionStart"),transitioncancel:as("Transition","TransitionCancel"),transitionend:as("Transition","TransitionEnd")},wu={},$d={};Gi&&($d=document.createElement("div").style,"AnimationEvent"in window||(delete Gs.animationend.animation,delete Gs.animationiteration.animation,delete Gs.animationstart.animation),"TransitionEvent"in window||delete Gs.transitionend.transition);function ss(e){if(wu[e])return wu[e];if(!Gs[e])return e;var i=Gs[e],s;for(s in i)if(i.hasOwnProperty(s)&&s in $d)return wu[e]=i[s];return e}var tp=ss("animationend"),ep=ss("animationiteration"),np=ss("animationstart"),wx=ss("transitionrun"),Rx=ss("transitionstart"),Cx=ss("transitioncancel"),ip=ss("transitionend"),ap=new Map,Ru="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ru.push("scrollEnd");function mi(e,i){ap.set(e,i),bt(i,[e])}var sp=new WeakMap;function ii(e,i){if(typeof e=="object"&&e!==null){var s=sp.get(e);return s!==void 0?s:(i={value:e,source:i,stack:ni(i)},sp.set(e,i),i)}return{value:e,source:i,stack:ni(i)}}var ai=[],Vs=0,Cu=0;function gl(){for(var e=Vs,i=Cu=Vs=0;i<e;){var s=ai[i];ai[i++]=null;var o=ai[i];ai[i++]=null;var f=ai[i];ai[i++]=null;var m=ai[i];if(ai[i++]=null,o!==null&&f!==null){var b=o.pending;b===null?f.next=f:(f.next=b.next,b.next=f),o.pending=f}m!==0&&rp(s,f,m)}}function vl(e,i,s,o){ai[Vs++]=e,ai[Vs++]=i,ai[Vs++]=s,ai[Vs++]=o,Cu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Du(e,i,s,o){return vl(e,i,s,o),_l(e)}function ks(e,i){return vl(e,null,null,i),_l(e)}function rp(e,i,s){e.lanes|=s;var o=e.alternate;o!==null&&(o.lanes|=s);for(var f=!1,m=e.return;m!==null;)m.childLanes|=s,o=m.alternate,o!==null&&(o.childLanes|=s),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(f=!0)),e=m,m=m.return;return e.tag===3?(m=e.stateNode,f&&i!==null&&(f=31-qt(s),e=m.hiddenUpdates,o=e[f],o===null?e[f]=[i]:o.push(i),i.lane=s|536870912),m):null}function _l(e){if(50<No)throw No=0,Bf=null,Error(a(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var Ws={};function Dx(e,i,s,o){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(e,i,s,o){return new Dx(e,i,s,o)}function Nu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Vi(e,i){var s=e.alternate;return s===null?(s=qn(e.tag,i,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=i,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,i=e.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function op(e,i){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,i=s.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function xl(e,i,s,o,f,m){var b=0;if(o=e,typeof e=="function")Nu(e)&&(b=1);else if(typeof e=="string")b=Uy(e,s,tt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case U:return e=qn(31,s,i,f),e.elementType=U,e.lanes=m,e;case M:return rs(s.children,f,m,i);case E:b=8,f|=24;break;case x:return e=qn(12,s,i,f|2),e.elementType=x,e.lanes=m,e;case I:return e=qn(13,s,i,f),e.elementType=I,e.lanes=m,e;case P:return e=qn(19,s,i,f),e.elementType=P,e.lanes=m,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case y:case A:b=10;break t;case T:b=9;break t;case D:b=11;break t;case z:b=14;break t;case k:b=16,o=null;break t}b=29,s=Error(a(130,e===null?"null":typeof e,"")),o=null}return i=qn(b,s,i,f),i.elementType=e,i.type=o,i.lanes=m,i}function rs(e,i,s,o){return e=qn(7,e,o,i),e.lanes=s,e}function Uu(e,i,s){return e=qn(6,e,null,i),e.lanes=s,e}function Lu(e,i,s){return i=qn(4,e.children!==null?e.children:[],e.key,i),i.lanes=s,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var js=[],qs=0,yl=null,Sl=0,si=[],ri=0,os=null,ki=1,Wi="";function ls(e,i){js[qs++]=Sl,js[qs++]=yl,yl=e,Sl=i}function lp(e,i,s){si[ri++]=ki,si[ri++]=Wi,si[ri++]=os,os=e;var o=ki;e=Wi;var f=32-qt(o)-1;o&=~(1<<f),s+=1;var m=32-qt(i)+f;if(30<m){var b=f-f%5;m=(o&(1<<b)-1).toString(32),o>>=b,f-=b,ki=1<<32-qt(i)+f|s<<f|o,Wi=m+e}else ki=1<<m|s<<f|o,Wi=e}function Ou(e){e.return!==null&&(ls(e,1),lp(e,1,0))}function Pu(e){for(;e===yl;)yl=js[--qs],js[qs]=null,Sl=js[--qs],js[qs]=null;for(;e===os;)os=si[--ri],si[ri]=null,Wi=si[--ri],si[ri]=null,ki=si[--ri],si[ri]=null}var Un=null,Ze=null,we=!1,cs=null,Ti=!1,zu=Error(a(519));function us(e){var i=Error(a(418,""));throw lo(ii(i,e)),zu}function cp(e){var i=e.stateNode,s=e.type,o=e.memoizedProps;switch(i[tn]=e,i[xn]=o,s){case"dialog":ge("cancel",i),ge("close",i);break;case"iframe":case"object":case"embed":ge("load",i);break;case"video":case"audio":for(s=0;s<Lo.length;s++)ge(Lo[s],i);break;case"source":ge("error",i);break;case"img":case"image":case"link":ge("error",i),ge("load",i);break;case"details":ge("toggle",i);break;case"input":ge("invalid",i),Kr(i,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),qe(i);break;case"select":ge("invalid",i);break;case"textarea":ge("invalid",i),Ad(i,o.value,o.defaultValue,o.children),qe(i)}s=o.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||o.suppressHydrationWarning===!0||Ag(i.textContent,s)?(o.popover!=null&&(ge("beforetoggle",i),ge("toggle",i)),o.onScroll!=null&&ge("scroll",i),o.onScrollEnd!=null&&ge("scrollend",i),o.onClick!=null&&(i.onclick=ec),i=!0):i=!1,i||us(e)}function up(e){for(Un=e.return;Un;)switch(Un.tag){case 5:case 13:Ti=!1;return;case 27:case 3:Ti=!0;return;default:Un=Un.return}}function ro(e){if(e!==Un)return!1;if(!we)return up(e),we=!0,!1;var i=e.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||$f(e.type,e.memoizedProps)),s=!s),s&&Ze&&us(e),up(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));t:{for(e=e.nextSibling,i=0;e;){if(e.nodeType===8)if(s=e.data,s==="/$"){if(i===0){Ze=vi(e.nextSibling);break t}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++;e=e.nextSibling}Ze=null}}else i===27?(i=Ze,Pa(e.type)?(e=ih,ih=null,Ze=e):Ze=i):Ze=Un?vi(e.stateNode.nextSibling):null;return!0}function oo(){Ze=Un=null,we=!1}function fp(){var e=cs;return e!==null&&(In===null?In=e:In.push.apply(In,e),cs=null),e}function lo(e){cs===null?cs=[e]:cs.push(e)}var Bu=$(null),fs=null,ji=null;function ya(e,i,s){yt(Bu,i._currentValue),i._currentValue=s}function qi(e){e._currentValue=Bu.current,ot(Bu)}function Iu(e,i,s){for(;e!==null;){var o=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,o!==null&&(o.childLanes|=i)):o!==null&&(o.childLanes&i)!==i&&(o.childLanes|=i),e===s)break;e=e.return}}function Fu(e,i,s,o){var f=e.child;for(f!==null&&(f.return=e);f!==null;){var m=f.dependencies;if(m!==null){var b=f.child;m=m.firstContext;t:for(;m!==null;){var C=m;m=f;for(var H=0;H<i.length;H++)if(C.context===i[H]){m.lanes|=s,C=m.alternate,C!==null&&(C.lanes|=s),Iu(m.return,s,e),o||(b=null);break t}m=C.next}}else if(f.tag===18){if(b=f.return,b===null)throw Error(a(341));b.lanes|=s,m=b.alternate,m!==null&&(m.lanes|=s),Iu(b,s,e),b=null}else b=f.child;if(b!==null)b.return=f;else for(b=f;b!==null;){if(b===e){b=null;break}if(f=b.sibling,f!==null){f.return=b.return,b=f;break}b=b.return}f=b}}function co(e,i,s,o){e=null;for(var f=i,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var b=f.alternate;if(b===null)throw Error(a(387));if(b=b.memoizedProps,b!==null){var C=f.type;jn(f.pendingProps.value,b.value)||(e!==null?e.push(C):e=[C])}}else if(f===At.current){if(b=f.alternate,b===null)throw Error(a(387));b.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(e!==null?e.push(Fo):e=[Fo])}f=f.return}e!==null&&Fu(i,e,s,o),i.flags|=262144}function Ml(e){for(e=e.firstContext;e!==null;){if(!jn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function hs(e){fs=e,ji=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function wn(e){return hp(fs,e)}function El(e,i){return fs===null&&hs(e),hp(e,i)}function hp(e,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},ji===null){if(e===null)throw Error(a(308));ji=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else ji=ji.next=i;return s}var Nx=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(s,o){e.push(o)}};this.abort=function(){i.aborted=!0,e.forEach(function(s){return s()})}},Ux=c.unstable_scheduleCallback,Lx=c.unstable_NormalPriority,ln={$$typeof:A,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Hu(){return{controller:new Nx,data:new Map,refCount:0}}function uo(e){e.refCount--,e.refCount===0&&Ux(Lx,function(){e.controller.abort()})}var fo=null,Gu=0,Xs=0,Ys=null;function Ox(e,i){if(fo===null){var s=fo=[];Gu=0,Xs=Wf(),Ys={status:"pending",value:void 0,then:function(o){s.push(o)}}}return Gu++,i.then(dp,dp),i}function dp(){if(--Gu===0&&fo!==null){Ys!==null&&(Ys.status="fulfilled");var e=fo;fo=null,Xs=0,Ys=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function Px(e,i){var s=[],o={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return e.then(function(){o.status="fulfilled",o.value=i;for(var f=0;f<s.length;f++)(0,s[f])(i)},function(f){for(o.status="rejected",o.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),o}var pp=L.S;L.S=function(e,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&Ox(e,i),pp!==null&&pp(e,i)};var ds=$(null);function Vu(){var e=ds.current;return e!==null?e:He.pooledCache}function bl(e,i){i===null?yt(ds,ds.current):yt(ds,i.pool)}function mp(){var e=Vu();return e===null?null:{parent:ln._currentValue,pool:e}}var ho=Error(a(460)),gp=Error(a(474)),Tl=Error(a(542)),ku={then:function(){}};function vp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Al(){}function _p(e,i,s){switch(s=e[s],s===void 0?e.push(i):s!==i&&(i.then(Al,Al),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,yp(e),e;default:if(typeof i.status=="string")i.then(Al,Al);else{if(e=He,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=i,e.status="pending",e.then(function(o){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=o}},function(o){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=o}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,yp(e),e}throw po=i,ho}}var po=null;function xp(){if(po===null)throw Error(a(459));var e=po;return po=null,e}function yp(e){if(e===ho||e===Tl)throw Error(a(483))}var Sa=!1;function Wu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ju(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ma(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ea(e,i,s){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(De&2)!==0){var f=o.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),o.pending=i,i=_l(e),rp(e,null,s),i}return vl(e,o,i,s),_l(e)}function mo(e,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var o=i.lanes;o&=e.pendingLanes,s|=o,i.lanes=s,ke(e,s)}}function qu(e,i){var s=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,s===o)){var f=null,m=null;if(s=s.firstBaseUpdate,s!==null){do{var b={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};m===null?f=m=b:m=m.next=b,s=s.next}while(s!==null);m===null?f=m=i:m=m.next=i}else f=m=i;s={baseState:o.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:o.shared,callbacks:o.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=i:e.next=i,s.lastBaseUpdate=i}var Xu=!1;function go(){if(Xu){var e=Ys;if(e!==null)throw e}}function vo(e,i,s,o){Xu=!1;var f=e.updateQueue;Sa=!1;var m=f.firstBaseUpdate,b=f.lastBaseUpdate,C=f.shared.pending;if(C!==null){f.shared.pending=null;var H=C,st=H.next;H.next=null,b===null?m=st:b.next=st,b=H;var pt=e.alternate;pt!==null&&(pt=pt.updateQueue,C=pt.lastBaseUpdate,C!==b&&(C===null?pt.firstBaseUpdate=st:C.next=st,pt.lastBaseUpdate=H))}if(m!==null){var vt=f.baseState;b=0,pt=st=H=null,C=m;do{var rt=C.lane&-536870913,lt=rt!==C.lane;if(lt?(Se&rt)===rt:(o&rt)===rt){rt!==0&&rt===Xs&&(Xu=!0),pt!==null&&(pt=pt.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});t:{var ee=e,Xt=C;rt=i;var Pe=s;switch(Xt.tag){case 1:if(ee=Xt.payload,typeof ee=="function"){vt=ee.call(Pe,vt,rt);break t}vt=ee;break t;case 3:ee.flags=ee.flags&-65537|128;case 0:if(ee=Xt.payload,rt=typeof ee=="function"?ee.call(Pe,vt,rt):ee,rt==null)break t;vt=g({},vt,rt);break t;case 2:Sa=!0}}rt=C.callback,rt!==null&&(e.flags|=64,lt&&(e.flags|=8192),lt=f.callbacks,lt===null?f.callbacks=[rt]:lt.push(rt))}else lt={lane:rt,tag:C.tag,payload:C.payload,callback:C.callback,next:null},pt===null?(st=pt=lt,H=vt):pt=pt.next=lt,b|=rt;if(C=C.next,C===null){if(C=f.shared.pending,C===null)break;lt=C,C=lt.next,lt.next=null,f.lastBaseUpdate=lt,f.shared.pending=null}}while(!0);pt===null&&(H=vt),f.baseState=H,f.firstBaseUpdate=st,f.lastBaseUpdate=pt,m===null&&(f.shared.lanes=0),Na|=b,e.lanes=b,e.memoizedState=vt}}function Sp(e,i){if(typeof e!="function")throw Error(a(191,e));e.call(i)}function Mp(e,i){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)Sp(s[e],i)}var Zs=$(null),wl=$(0);function Ep(e,i){e=$i,yt(wl,e),yt(Zs,i),$i=e|i.baseLanes}function Yu(){yt(wl,$i),yt(Zs,Zs.current)}function Zu(){$i=wl.current,ot(Zs),ot(wl)}var ba=0,ue=null,Le=null,en=null,Rl=!1,Ks=!1,ps=!1,Cl=0,_o=0,Qs=null,zx=0;function Qe(){throw Error(a(321))}function Ku(e,i){if(i===null)return!1;for(var s=0;s<i.length&&s<e.length;s++)if(!jn(e[s],i[s]))return!1;return!0}function Qu(e,i,s,o,f,m){return ba=m,ue=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,L.H=e===null||e.memoizedState===null?rm:om,ps=!1,m=s(o,f),ps=!1,Ks&&(m=Tp(i,s,o,f)),bp(e),m}function bp(e){L.H=Pl;var i=Le!==null&&Le.next!==null;if(ba=0,en=Le=ue=null,Rl=!1,_o=0,Qs=null,i)throw Error(a(300));e===null||pn||(e=e.dependencies,e!==null&&Ml(e)&&(pn=!0))}function Tp(e,i,s,o){ue=e;var f=0;do{if(Ks&&(Qs=null),_o=0,Ks=!1,25<=f)throw Error(a(301));if(f+=1,en=Le=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}L.H=kx,m=i(s,o)}while(Ks);return m}function Bx(){var e=L.H,i=e.useState()[0];return i=typeof i.then=="function"?xo(i):i,e=e.useState()[0],(Le!==null?Le.memoizedState:null)!==e&&(ue.flags|=1024),i}function Ju(){var e=Cl!==0;return Cl=0,e}function $u(e,i,s){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~s}function tf(e){if(Rl){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Rl=!1}ba=0,en=Le=ue=null,Ks=!1,_o=Cl=0,Qs=null}function zn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return en===null?ue.memoizedState=en=e:en=en.next=e,en}function nn(){if(Le===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=Le.next;var i=en===null?ue.memoizedState:en.next;if(i!==null)en=i,Le=e;else{if(e===null)throw ue.alternate===null?Error(a(467)):Error(a(310));Le=e,e={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},en===null?ue.memoizedState=en=e:en=en.next=e}return en}function ef(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function xo(e){var i=_o;return _o+=1,Qs===null&&(Qs=[]),e=_p(Qs,e,i),i=ue,(en===null?i.memoizedState:en.next)===null&&(i=i.alternate,L.H=i===null||i.memoizedState===null?rm:om),e}function Dl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return xo(e);if(e.$$typeof===A)return wn(e)}throw Error(a(438,String(e)))}function nf(e){var i=null,s=ue.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var o=ue.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(i={data:o.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=ef(),ue.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(e),o=0;o<e;o++)s[o]=w;return i.index++,s}function Xi(e,i){return typeof i=="function"?i(e):i}function Nl(e){var i=nn();return af(i,Le,e)}function af(e,i,s){var o=e.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=s;var f=e.baseQueue,m=o.pending;if(m!==null){if(f!==null){var b=f.next;f.next=m.next,m.next=b}i.baseQueue=f=m,o.pending=null}if(m=e.baseState,f===null)e.memoizedState=m;else{i=f.next;var C=b=null,H=null,st=i,pt=!1;do{var vt=st.lane&-536870913;if(vt!==st.lane?(Se&vt)===vt:(ba&vt)===vt){var rt=st.revertLane;if(rt===0)H!==null&&(H=H.next={lane:0,revertLane:0,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null}),vt===Xs&&(pt=!0);else if((ba&rt)===rt){st=st.next,rt===Xs&&(pt=!0);continue}else vt={lane:0,revertLane:st.revertLane,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null},H===null?(C=H=vt,b=m):H=H.next=vt,ue.lanes|=rt,Na|=rt;vt=st.action,ps&&s(m,vt),m=st.hasEagerState?st.eagerState:s(m,vt)}else rt={lane:vt,revertLane:st.revertLane,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null},H===null?(C=H=rt,b=m):H=H.next=rt,ue.lanes|=vt,Na|=vt;st=st.next}while(st!==null&&st!==i);if(H===null?b=m:H.next=C,!jn(m,e.memoizedState)&&(pn=!0,pt&&(s=Ys,s!==null)))throw s;e.memoizedState=m,e.baseState=b,e.baseQueue=H,o.lastRenderedState=m}return f===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function sf(e){var i=nn(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=e;var o=s.dispatch,f=s.pending,m=i.memoizedState;if(f!==null){s.pending=null;var b=f=f.next;do m=e(m,b.action),b=b.next;while(b!==f);jn(m,i.memoizedState)||(pn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),s.lastRenderedState=m}return[m,o]}function Ap(e,i,s){var o=ue,f=nn(),m=we;if(m){if(s===void 0)throw Error(a(407));s=s()}else s=i();var b=!jn((Le||f).memoizedState,s);b&&(f.memoizedState=s,pn=!0),f=f.queue;var C=Cp.bind(null,o,f,e);if(yo(2048,8,C,[e]),f.getSnapshot!==i||b||en!==null&&en.memoizedState.tag&1){if(o.flags|=2048,Js(9,Ul(),Rp.bind(null,o,f,s,i),null),He===null)throw Error(a(349));m||(ba&124)!==0||wp(o,i,s)}return s}function wp(e,i,s){e.flags|=16384,e={getSnapshot:i,value:s},i=ue.updateQueue,i===null?(i=ef(),ue.updateQueue=i,i.stores=[e]):(s=i.stores,s===null?i.stores=[e]:s.push(e))}function Rp(e,i,s,o){i.value=s,i.getSnapshot=o,Dp(i)&&Np(e)}function Cp(e,i,s){return s(function(){Dp(i)&&Np(e)})}function Dp(e){var i=e.getSnapshot;e=e.value;try{var s=i();return!jn(e,s)}catch{return!0}}function Np(e){var i=ks(e,2);i!==null&&Qn(i,e,2)}function rf(e){var i=zn();if(typeof e=="function"){var s=e;if(e=s(),ps){Dt(!0);try{s()}finally{Dt(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:e},i}function Up(e,i,s,o){return e.baseState=s,af(e,Le,typeof o=="function"?o:Xi)}function Ix(e,i,s,o,f){if(Ol(e))throw Error(a(485));if(e=i.action,e!==null){var m={payload:f,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){m.listeners.push(b)}};L.T!==null?s(!0):m.isTransition=!1,o(m),s=i.pending,s===null?(m.next=i.pending=m,Lp(i,m)):(m.next=s.next,i.pending=s.next=m)}}function Lp(e,i){var s=i.action,o=i.payload,f=e.state;if(i.isTransition){var m=L.T,b={};L.T=b;try{var C=s(f,o),H=L.S;H!==null&&H(b,C),Op(e,i,C)}catch(st){of(e,i,st)}finally{L.T=m}}else try{m=s(f,o),Op(e,i,m)}catch(st){of(e,i,st)}}function Op(e,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(o){Pp(e,i,o)},function(o){return of(e,i,o)}):Pp(e,i,s)}function Pp(e,i,s){i.status="fulfilled",i.value=s,zp(i),e.state=s,i=e.pending,i!==null&&(s=i.next,s===i?e.pending=null:(s=s.next,i.next=s,Lp(e,s)))}function of(e,i,s){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do i.status="rejected",i.reason=s,zp(i),i=i.next;while(i!==o)}e.action=null}function zp(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function Bp(e,i){return i}function Ip(e,i){if(we){var s=He.formState;if(s!==null){t:{var o=ue;if(we){if(Ze){e:{for(var f=Ze,m=Ti;f.nodeType!==8;){if(!m){f=null;break e}if(f=vi(f.nextSibling),f===null){f=null;break e}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){Ze=vi(f.nextSibling),o=f.data==="F!";break t}}us(o)}o=!1}o&&(i=s[0])}}return s=zn(),s.memoizedState=s.baseState=i,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bp,lastRenderedState:i},s.queue=o,s=im.bind(null,ue,o),o.dispatch=s,o=rf(!1),m=hf.bind(null,ue,!1,o.queue),o=zn(),f={state:i,dispatch:null,action:e,pending:null},o.queue=f,s=Ix.bind(null,ue,f,m,s),f.dispatch=s,o.memoizedState=e,[i,s,!1]}function Fp(e){var i=nn();return Hp(i,Le,e)}function Hp(e,i,s){if(i=af(e,i,Bp)[0],e=Nl(Xi)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var o=xo(i)}catch(b){throw b===ho?Tl:b}else o=i;i=nn();var f=i.queue,m=f.dispatch;return s!==i.memoizedState&&(ue.flags|=2048,Js(9,Ul(),Fx.bind(null,f,s),null)),[o,m,e]}function Fx(e,i){e.action=i}function Gp(e){var i=nn(),s=Le;if(s!==null)return Hp(i,s,e);nn(),i=i.memoizedState,s=nn();var o=s.queue.dispatch;return s.memoizedState=e,[i,o,!1]}function Js(e,i,s,o){return e={tag:e,create:s,deps:o,inst:i,next:null},i=ue.updateQueue,i===null&&(i=ef(),ue.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=e.next=e:(o=s.next,s.next=e,e.next=o,i.lastEffect=e),e}function Ul(){return{destroy:void 0,resource:void 0}}function Vp(){return nn().memoizedState}function Ll(e,i,s,o){var f=zn();o=o===void 0?null:o,ue.flags|=e,f.memoizedState=Js(1|i,Ul(),s,o)}function yo(e,i,s,o){var f=nn();o=o===void 0?null:o;var m=f.memoizedState.inst;Le!==null&&o!==null&&Ku(o,Le.memoizedState.deps)?f.memoizedState=Js(i,m,s,o):(ue.flags|=e,f.memoizedState=Js(1|i,m,s,o))}function kp(e,i){Ll(8390656,8,e,i)}function Wp(e,i){yo(2048,8,e,i)}function jp(e,i){return yo(4,2,e,i)}function qp(e,i){return yo(4,4,e,i)}function Xp(e,i){if(typeof i=="function"){e=e();var s=i(e);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function Yp(e,i,s){s=s!=null?s.concat([e]):null,yo(4,4,Xp.bind(null,i,e),s)}function lf(){}function Zp(e,i){var s=nn();i=i===void 0?null:i;var o=s.memoizedState;return i!==null&&Ku(i,o[1])?o[0]:(s.memoizedState=[e,i],e)}function Kp(e,i){var s=nn();i=i===void 0?null:i;var o=s.memoizedState;if(i!==null&&Ku(i,o[1]))return o[0];if(o=e(),ps){Dt(!0);try{e()}finally{Dt(!1)}}return s.memoizedState=[o,i],o}function cf(e,i,s){return s===void 0||(ba&1073741824)!==0?e.memoizedState=i:(e.memoizedState=s,e=$m(),ue.lanes|=e,Na|=e,s)}function Qp(e,i,s,o){return jn(s,i)?s:Zs.current!==null?(e=cf(e,s,o),jn(e,i)||(pn=!0),e):(ba&42)===0?(pn=!0,e.memoizedState=s):(e=$m(),ue.lanes|=e,Na|=e,i)}function Jp(e,i,s,o,f){var m=Z.p;Z.p=m!==0&&8>m?m:8;var b=L.T,C={};L.T=C,hf(e,!1,i,s);try{var H=f(),st=L.S;if(st!==null&&st(C,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var pt=Px(H,o);So(e,i,pt,Kn(e))}else So(e,i,o,Kn(e))}catch(vt){So(e,i,{then:function(){},status:"rejected",reason:vt},Kn())}finally{Z.p=m,L.T=b}}function Hx(){}function uf(e,i,s,o){if(e.tag!==5)throw Error(a(476));var f=$p(e).queue;Jp(e,f,i,W,s===null?Hx:function(){return tm(e),s(o)})}function $p(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:W},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:s},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function tm(e){var i=$p(e).next.queue;So(e,i,{},Kn())}function ff(){return wn(Fo)}function em(){return nn().memoizedState}function nm(){return nn().memoizedState}function Gx(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var s=Kn();e=Ma(s);var o=Ea(i,e,s);o!==null&&(Qn(o,i,s),mo(o,i,s)),i={cache:Hu()},e.payload=i;return}i=i.return}}function Vx(e,i,s){var o=Kn();s={lane:o,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},Ol(e)?am(i,s):(s=Du(e,i,s,o),s!==null&&(Qn(s,e,o),sm(s,i,o)))}function im(e,i,s){var o=Kn();So(e,i,s,o)}function So(e,i,s,o){var f={lane:o,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(Ol(e))am(i,f);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var b=i.lastRenderedState,C=m(b,s);if(f.hasEagerState=!0,f.eagerState=C,jn(C,b))return vl(e,i,f,0),He===null&&gl(),!1}catch{}finally{}if(s=Du(e,i,f,o),s!==null)return Qn(s,e,o),sm(s,i,o),!0}return!1}function hf(e,i,s,o){if(o={lane:2,revertLane:Wf(),action:o,hasEagerState:!1,eagerState:null,next:null},Ol(e)){if(i)throw Error(a(479))}else i=Du(e,s,o,2),i!==null&&Qn(i,e,2)}function Ol(e){var i=e.alternate;return e===ue||i!==null&&i===ue}function am(e,i){Ks=Rl=!0;var s=e.pending;s===null?i.next=i:(i.next=s.next,s.next=i),e.pending=i}function sm(e,i,s){if((s&4194048)!==0){var o=i.lanes;o&=e.pendingLanes,s|=o,i.lanes=s,ke(e,s)}}var Pl={readContext:wn,use:Dl,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useLayoutEffect:Qe,useInsertionEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useSyncExternalStore:Qe,useId:Qe,useHostTransitionStatus:Qe,useFormState:Qe,useActionState:Qe,useOptimistic:Qe,useMemoCache:Qe,useCacheRefresh:Qe},rm={readContext:wn,use:Dl,useCallback:function(e,i){return zn().memoizedState=[e,i===void 0?null:i],e},useContext:wn,useEffect:kp,useImperativeHandle:function(e,i,s){s=s!=null?s.concat([e]):null,Ll(4194308,4,Xp.bind(null,i,e),s)},useLayoutEffect:function(e,i){return Ll(4194308,4,e,i)},useInsertionEffect:function(e,i){Ll(4,2,e,i)},useMemo:function(e,i){var s=zn();i=i===void 0?null:i;var o=e();if(ps){Dt(!0);try{e()}finally{Dt(!1)}}return s.memoizedState=[o,i],o},useReducer:function(e,i,s){var o=zn();if(s!==void 0){var f=s(i);if(ps){Dt(!0);try{s(i)}finally{Dt(!1)}}}else f=i;return o.memoizedState=o.baseState=f,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:f},o.queue=e,e=e.dispatch=Vx.bind(null,ue,e),[o.memoizedState,e]},useRef:function(e){var i=zn();return e={current:e},i.memoizedState=e},useState:function(e){e=rf(e);var i=e.queue,s=im.bind(null,ue,i);return i.dispatch=s,[e.memoizedState,s]},useDebugValue:lf,useDeferredValue:function(e,i){var s=zn();return cf(s,e,i)},useTransition:function(){var e=rf(!1);return e=Jp.bind(null,ue,e.queue,!0,!1),zn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,s){var o=ue,f=zn();if(we){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),He===null)throw Error(a(349));(Se&124)!==0||wp(o,i,s)}f.memoizedState=s;var m={value:s,getSnapshot:i};return f.queue=m,kp(Cp.bind(null,o,m,e),[e]),o.flags|=2048,Js(9,Ul(),Rp.bind(null,o,m,s,i),null),s},useId:function(){var e=zn(),i=He.identifierPrefix;if(we){var s=Wi,o=ki;s=(o&~(1<<32-qt(o)-1)).toString(32)+s,i="«"+i+"R"+s,s=Cl++,0<s&&(i+="H"+s.toString(32)),i+="»"}else s=zx++,i="«"+i+"r"+s.toString(32)+"»";return e.memoizedState=i},useHostTransitionStatus:ff,useFormState:Ip,useActionState:Ip,useOptimistic:function(e){var i=zn();i.memoizedState=i.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=hf.bind(null,ue,!0,s),s.dispatch=i,[e,i]},useMemoCache:nf,useCacheRefresh:function(){return zn().memoizedState=Gx.bind(null,ue)}},om={readContext:wn,use:Dl,useCallback:Zp,useContext:wn,useEffect:Wp,useImperativeHandle:Yp,useInsertionEffect:jp,useLayoutEffect:qp,useMemo:Kp,useReducer:Nl,useRef:Vp,useState:function(){return Nl(Xi)},useDebugValue:lf,useDeferredValue:function(e,i){var s=nn();return Qp(s,Le.memoizedState,e,i)},useTransition:function(){var e=Nl(Xi)[0],i=nn().memoizedState;return[typeof e=="boolean"?e:xo(e),i]},useSyncExternalStore:Ap,useId:em,useHostTransitionStatus:ff,useFormState:Fp,useActionState:Fp,useOptimistic:function(e,i){var s=nn();return Up(s,Le,e,i)},useMemoCache:nf,useCacheRefresh:nm},kx={readContext:wn,use:Dl,useCallback:Zp,useContext:wn,useEffect:Wp,useImperativeHandle:Yp,useInsertionEffect:jp,useLayoutEffect:qp,useMemo:Kp,useReducer:sf,useRef:Vp,useState:function(){return sf(Xi)},useDebugValue:lf,useDeferredValue:function(e,i){var s=nn();return Le===null?cf(s,e,i):Qp(s,Le.memoizedState,e,i)},useTransition:function(){var e=sf(Xi)[0],i=nn().memoizedState;return[typeof e=="boolean"?e:xo(e),i]},useSyncExternalStore:Ap,useId:em,useHostTransitionStatus:ff,useFormState:Gp,useActionState:Gp,useOptimistic:function(e,i){var s=nn();return Le!==null?Up(s,Le,e,i):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:nf,useCacheRefresh:nm},$s=null,Mo=0;function zl(e){var i=Mo;return Mo+=1,$s===null&&($s=[]),_p($s,e,i)}function Eo(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Bl(e,i){throw i.$$typeof===_?Error(a(525)):(e=Object.prototype.toString.call(i),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function lm(e){var i=e._init;return i(e._payload)}function cm(e){function i(J,j){if(e){var at=J.deletions;at===null?(J.deletions=[j],J.flags|=16):at.push(j)}}function s(J,j){if(!e)return null;for(;j!==null;)i(J,j),j=j.sibling;return null}function o(J){for(var j=new Map;J!==null;)J.key!==null?j.set(J.key,J):j.set(J.index,J),J=J.sibling;return j}function f(J,j){return J=Vi(J,j),J.index=0,J.sibling=null,J}function m(J,j,at){return J.index=at,e?(at=J.alternate,at!==null?(at=at.index,at<j?(J.flags|=67108866,j):at):(J.flags|=67108866,j)):(J.flags|=1048576,j)}function b(J){return e&&J.alternate===null&&(J.flags|=67108866),J}function C(J,j,at,gt){return j===null||j.tag!==6?(j=Uu(at,J.mode,gt),j.return=J,j):(j=f(j,at),j.return=J,j)}function H(J,j,at,gt){var It=at.type;return It===M?pt(J,j,at.props.children,gt,at.key):j!==null&&(j.elementType===It||typeof It=="object"&&It!==null&&It.$$typeof===k&&lm(It)===j.type)?(j=f(j,at.props),Eo(j,at),j.return=J,j):(j=xl(at.type,at.key,at.props,null,J.mode,gt),Eo(j,at),j.return=J,j)}function st(J,j,at,gt){return j===null||j.tag!==4||j.stateNode.containerInfo!==at.containerInfo||j.stateNode.implementation!==at.implementation?(j=Lu(at,J.mode,gt),j.return=J,j):(j=f(j,at.children||[]),j.return=J,j)}function pt(J,j,at,gt,It){return j===null||j.tag!==7?(j=rs(at,J.mode,gt,It),j.return=J,j):(j=f(j,at),j.return=J,j)}function vt(J,j,at){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=Uu(""+j,J.mode,at),j.return=J,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case v:return at=xl(j.type,j.key,j.props,null,J.mode,at),Eo(at,j),at.return=J,at;case S:return j=Lu(j,J.mode,at),j.return=J,j;case k:var gt=j._init;return j=gt(j._payload),vt(J,j,at)}if(Y(j)||it(j))return j=rs(j,J.mode,at,null),j.return=J,j;if(typeof j.then=="function")return vt(J,zl(j),at);if(j.$$typeof===A)return vt(J,El(J,j),at);Bl(J,j)}return null}function rt(J,j,at,gt){var It=j!==null?j.key:null;if(typeof at=="string"&&at!==""||typeof at=="number"||typeof at=="bigint")return It!==null?null:C(J,j,""+at,gt);if(typeof at=="object"&&at!==null){switch(at.$$typeof){case v:return at.key===It?H(J,j,at,gt):null;case S:return at.key===It?st(J,j,at,gt):null;case k:return It=at._init,at=It(at._payload),rt(J,j,at,gt)}if(Y(at)||it(at))return It!==null?null:pt(J,j,at,gt,null);if(typeof at.then=="function")return rt(J,j,zl(at),gt);if(at.$$typeof===A)return rt(J,j,El(J,at),gt);Bl(J,at)}return null}function lt(J,j,at,gt,It){if(typeof gt=="string"&&gt!==""||typeof gt=="number"||typeof gt=="bigint")return J=J.get(at)||null,C(j,J,""+gt,It);if(typeof gt=="object"&&gt!==null){switch(gt.$$typeof){case v:return J=J.get(gt.key===null?at:gt.key)||null,H(j,J,gt,It);case S:return J=J.get(gt.key===null?at:gt.key)||null,st(j,J,gt,It);case k:var de=gt._init;return gt=de(gt._payload),lt(J,j,at,gt,It)}if(Y(gt)||it(gt))return J=J.get(at)||null,pt(j,J,gt,It,null);if(typeof gt.then=="function")return lt(J,j,at,zl(gt),It);if(gt.$$typeof===A)return lt(J,j,at,El(j,gt),It);Bl(j,gt)}return null}function ee(J,j,at,gt){for(var It=null,de=null,Wt=j,Qt=j=0,gn=null;Wt!==null&&Qt<at.length;Qt++){Wt.index>Qt?(gn=Wt,Wt=null):gn=Wt.sibling;var Te=rt(J,Wt,at[Qt],gt);if(Te===null){Wt===null&&(Wt=gn);break}e&&Wt&&Te.alternate===null&&i(J,Wt),j=m(Te,j,Qt),de===null?It=Te:de.sibling=Te,de=Te,Wt=gn}if(Qt===at.length)return s(J,Wt),we&&ls(J,Qt),It;if(Wt===null){for(;Qt<at.length;Qt++)Wt=vt(J,at[Qt],gt),Wt!==null&&(j=m(Wt,j,Qt),de===null?It=Wt:de.sibling=Wt,de=Wt);return we&&ls(J,Qt),It}for(Wt=o(Wt);Qt<at.length;Qt++)gn=lt(Wt,J,Qt,at[Qt],gt),gn!==null&&(e&&gn.alternate!==null&&Wt.delete(gn.key===null?Qt:gn.key),j=m(gn,j,Qt),de===null?It=gn:de.sibling=gn,de=gn);return e&&Wt.forEach(function(Ha){return i(J,Ha)}),we&&ls(J,Qt),It}function Xt(J,j,at,gt){if(at==null)throw Error(a(151));for(var It=null,de=null,Wt=j,Qt=j=0,gn=null,Te=at.next();Wt!==null&&!Te.done;Qt++,Te=at.next()){Wt.index>Qt?(gn=Wt,Wt=null):gn=Wt.sibling;var Ha=rt(J,Wt,Te.value,gt);if(Ha===null){Wt===null&&(Wt=gn);break}e&&Wt&&Ha.alternate===null&&i(J,Wt),j=m(Ha,j,Qt),de===null?It=Ha:de.sibling=Ha,de=Ha,Wt=gn}if(Te.done)return s(J,Wt),we&&ls(J,Qt),It;if(Wt===null){for(;!Te.done;Qt++,Te=at.next())Te=vt(J,Te.value,gt),Te!==null&&(j=m(Te,j,Qt),de===null?It=Te:de.sibling=Te,de=Te);return we&&ls(J,Qt),It}for(Wt=o(Wt);!Te.done;Qt++,Te=at.next())Te=lt(Wt,J,Qt,Te.value,gt),Te!==null&&(e&&Te.alternate!==null&&Wt.delete(Te.key===null?Qt:Te.key),j=m(Te,j,Qt),de===null?It=Te:de.sibling=Te,de=Te);return e&&Wt.forEach(function(Wy){return i(J,Wy)}),we&&ls(J,Qt),It}function Pe(J,j,at,gt){if(typeof at=="object"&&at!==null&&at.type===M&&at.key===null&&(at=at.props.children),typeof at=="object"&&at!==null){switch(at.$$typeof){case v:t:{for(var It=at.key;j!==null;){if(j.key===It){if(It=at.type,It===M){if(j.tag===7){s(J,j.sibling),gt=f(j,at.props.children),gt.return=J,J=gt;break t}}else if(j.elementType===It||typeof It=="object"&&It!==null&&It.$$typeof===k&&lm(It)===j.type){s(J,j.sibling),gt=f(j,at.props),Eo(gt,at),gt.return=J,J=gt;break t}s(J,j);break}else i(J,j);j=j.sibling}at.type===M?(gt=rs(at.props.children,J.mode,gt,at.key),gt.return=J,J=gt):(gt=xl(at.type,at.key,at.props,null,J.mode,gt),Eo(gt,at),gt.return=J,J=gt)}return b(J);case S:t:{for(It=at.key;j!==null;){if(j.key===It)if(j.tag===4&&j.stateNode.containerInfo===at.containerInfo&&j.stateNode.implementation===at.implementation){s(J,j.sibling),gt=f(j,at.children||[]),gt.return=J,J=gt;break t}else{s(J,j);break}else i(J,j);j=j.sibling}gt=Lu(at,J.mode,gt),gt.return=J,J=gt}return b(J);case k:return It=at._init,at=It(at._payload),Pe(J,j,at,gt)}if(Y(at))return ee(J,j,at,gt);if(it(at)){if(It=it(at),typeof It!="function")throw Error(a(150));return at=It.call(at),Xt(J,j,at,gt)}if(typeof at.then=="function")return Pe(J,j,zl(at),gt);if(at.$$typeof===A)return Pe(J,j,El(J,at),gt);Bl(J,at)}return typeof at=="string"&&at!==""||typeof at=="number"||typeof at=="bigint"?(at=""+at,j!==null&&j.tag===6?(s(J,j.sibling),gt=f(j,at),gt.return=J,J=gt):(s(J,j),gt=Uu(at,J.mode,gt),gt.return=J,J=gt),b(J)):s(J,j)}return function(J,j,at,gt){try{Mo=0;var It=Pe(J,j,at,gt);return $s=null,It}catch(Wt){if(Wt===ho||Wt===Tl)throw Wt;var de=qn(29,Wt,null,J.mode);return de.lanes=gt,de.return=J,de}finally{}}}var tr=cm(!0),um=cm(!1),oi=$(null),Ai=null;function Ta(e){var i=e.alternate;yt(cn,cn.current&1),yt(oi,e),Ai===null&&(i===null||Zs.current!==null||i.memoizedState!==null)&&(Ai=e)}function fm(e){if(e.tag===22){if(yt(cn,cn.current),yt(oi,e),Ai===null){var i=e.alternate;i!==null&&i.memoizedState!==null&&(Ai=e)}}else Aa()}function Aa(){yt(cn,cn.current),yt(oi,oi.current)}function Yi(e){ot(oi),Ai===e&&(Ai=null),ot(cn)}var cn=$(0);function Il(e){for(var i=e;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||nh(s)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function df(e,i,s,o){i=e.memoizedState,s=s(o,i),s=s==null?i:g({},i,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var pf={enqueueSetState:function(e,i,s){e=e._reactInternals;var o=Kn(),f=Ma(o);f.payload=i,s!=null&&(f.callback=s),i=Ea(e,f,o),i!==null&&(Qn(i,e,o),mo(i,e,o))},enqueueReplaceState:function(e,i,s){e=e._reactInternals;var o=Kn(),f=Ma(o);f.tag=1,f.payload=i,s!=null&&(f.callback=s),i=Ea(e,f,o),i!==null&&(Qn(i,e,o),mo(i,e,o))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var s=Kn(),o=Ma(s);o.tag=2,i!=null&&(o.callback=i),i=Ea(e,o,s),i!==null&&(Qn(i,e,s),mo(i,e,s))}};function hm(e,i,s,o,f,m,b){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,m,b):i.prototype&&i.prototype.isPureReactComponent?!ao(s,o)||!ao(f,m):!0}function dm(e,i,s,o){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,o),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,o),i.state!==e&&pf.enqueueReplaceState(i,i.state,null)}function ms(e,i){var s=i;if("ref"in i){s={};for(var o in i)o!=="ref"&&(s[o]=i[o])}if(e=e.defaultProps){s===i&&(s=g({},s));for(var f in e)s[f]===void 0&&(s[f]=e[f])}return s}var Fl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function pm(e){Fl(e)}function mm(e){console.error(e)}function gm(e){Fl(e)}function Hl(e,i){try{var s=e.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(o){setTimeout(function(){throw o})}}function vm(e,i,s){try{var o=e.onCaughtError;o(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function mf(e,i,s){return s=Ma(s),s.tag=3,s.payload={element:null},s.callback=function(){Hl(e,i)},s}function _m(e){return e=Ma(e),e.tag=3,e}function xm(e,i,s,o){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var m=o.value;e.payload=function(){return f(m)},e.callback=function(){vm(i,s,o)}}var b=s.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(e.callback=function(){vm(i,s,o),typeof f!="function"&&(Ua===null?Ua=new Set([this]):Ua.add(this));var C=o.stack;this.componentDidCatch(o.value,{componentStack:C!==null?C:""})})}function Wx(e,i,s,o,f){if(s.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(i=s.alternate,i!==null&&co(i,s,f,!0),s=oi.current,s!==null){switch(s.tag){case 13:return Ai===null?Ff():s.alternate===null&&Ke===0&&(Ke=3),s.flags&=-257,s.flags|=65536,s.lanes=f,o===ku?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([o]):i.add(o),Gf(e,o,f)),!1;case 22:return s.flags|=65536,o===ku?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([o])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([o]):s.add(o)),Gf(e,o,f)),!1}throw Error(a(435,s.tag))}return Gf(e,o,f),Ff(),!1}if(we)return i=oi.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,o!==zu&&(e=Error(a(422),{cause:o}),lo(ii(e,s)))):(o!==zu&&(i=Error(a(423),{cause:o}),lo(ii(i,s))),e=e.current.alternate,e.flags|=65536,f&=-f,e.lanes|=f,o=ii(o,s),f=mf(e.stateNode,o,f),qu(e,f),Ke!==4&&(Ke=2)),!1;var m=Error(a(520),{cause:o});if(m=ii(m,s),Do===null?Do=[m]:Do.push(m),Ke!==4&&(Ke=2),i===null)return!0;o=ii(o,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,e=f&-f,s.lanes|=e,e=mf(s.stateNode,o,e),qu(s,e),!1;case 1:if(i=s.type,m=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ua===null||!Ua.has(m))))return s.flags|=65536,f&=-f,s.lanes|=f,f=_m(f),xm(f,e,s,o),qu(s,f),!1}s=s.return}while(s!==null);return!1}var ym=Error(a(461)),pn=!1;function Sn(e,i,s,o){i.child=e===null?um(i,null,s,o):tr(i,e.child,s,o)}function Sm(e,i,s,o,f){s=s.render;var m=i.ref;if("ref"in o){var b={};for(var C in o)C!=="ref"&&(b[C]=o[C])}else b=o;return hs(i),o=Qu(e,i,s,b,m,f),C=Ju(),e!==null&&!pn?($u(e,i,f),Zi(e,i,f)):(we&&C&&Ou(i),i.flags|=1,Sn(e,i,o,f),i.child)}function Mm(e,i,s,o,f){if(e===null){var m=s.type;return typeof m=="function"&&!Nu(m)&&m.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=m,Em(e,i,m,o,f)):(e=xl(s.type,null,o,i,i.mode,f),e.ref=i.ref,e.return=i,i.child=e)}if(m=e.child,!Ef(e,f)){var b=m.memoizedProps;if(s=s.compare,s=s!==null?s:ao,s(b,o)&&e.ref===i.ref)return Zi(e,i,f)}return i.flags|=1,e=Vi(m,o),e.ref=i.ref,e.return=i,i.child=e}function Em(e,i,s,o,f){if(e!==null){var m=e.memoizedProps;if(ao(m,o)&&e.ref===i.ref)if(pn=!1,i.pendingProps=o=m,Ef(e,f))(e.flags&131072)!==0&&(pn=!0);else return i.lanes=e.lanes,Zi(e,i,f)}return gf(e,i,s,o,f)}function bm(e,i,s){var o=i.pendingProps,f=o.children,m=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((i.flags&128)!==0){if(o=m!==null?m.baseLanes|s:s,e!==null){for(f=i.child=e.child,m=0;f!==null;)m=m|f.lanes|f.childLanes,f=f.sibling;i.childLanes=m&~o}else i.childLanes=0,i.child=null;return Tm(e,i,o,s)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&bl(i,m!==null?m.cachePool:null),m!==null?Ep(i,m):Yu(),fm(i);else return i.lanes=i.childLanes=536870912,Tm(e,i,m!==null?m.baseLanes|s:s,s)}else m!==null?(bl(i,m.cachePool),Ep(i,m),Aa(),i.memoizedState=null):(e!==null&&bl(i,null),Yu(),Aa());return Sn(e,i,f,s),i.child}function Tm(e,i,s,o){var f=Vu();return f=f===null?null:{parent:ln._currentValue,pool:f},i.memoizedState={baseLanes:s,cachePool:f},e!==null&&bl(i,null),Yu(),fm(i),e!==null&&co(e,i,o,!0),null}function Gl(e,i){var s=i.ref;if(s===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(e===null||e.ref!==s)&&(i.flags|=4194816)}}function gf(e,i,s,o,f){return hs(i),s=Qu(e,i,s,o,void 0,f),o=Ju(),e!==null&&!pn?($u(e,i,f),Zi(e,i,f)):(we&&o&&Ou(i),i.flags|=1,Sn(e,i,s,f),i.child)}function Am(e,i,s,o,f,m){return hs(i),i.updateQueue=null,s=Tp(i,o,s,f),bp(e),o=Ju(),e!==null&&!pn?($u(e,i,m),Zi(e,i,m)):(we&&o&&Ou(i),i.flags|=1,Sn(e,i,s,m),i.child)}function wm(e,i,s,o,f){if(hs(i),i.stateNode===null){var m=Ws,b=s.contextType;typeof b=="object"&&b!==null&&(m=wn(b)),m=new s(o,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=pf,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=o,m.state=i.memoizedState,m.refs={},Wu(i),b=s.contextType,m.context=typeof b=="object"&&b!==null?wn(b):Ws,m.state=i.memoizedState,b=s.getDerivedStateFromProps,typeof b=="function"&&(df(i,s,b,o),m.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(b=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),b!==m.state&&pf.enqueueReplaceState(m,m.state,null),vo(i,o,m,f),go(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),o=!0}else if(e===null){m=i.stateNode;var C=i.memoizedProps,H=ms(s,C);m.props=H;var st=m.context,pt=s.contextType;b=Ws,typeof pt=="object"&&pt!==null&&(b=wn(pt));var vt=s.getDerivedStateFromProps;pt=typeof vt=="function"||typeof m.getSnapshotBeforeUpdate=="function",C=i.pendingProps!==C,pt||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(C||st!==b)&&dm(i,m,o,b),Sa=!1;var rt=i.memoizedState;m.state=rt,vo(i,o,m,f),go(),st=i.memoizedState,C||rt!==st||Sa?(typeof vt=="function"&&(df(i,s,vt,o),st=i.memoizedState),(H=Sa||hm(i,s,H,o,rt,st,b))?(pt||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=o,i.memoizedState=st),m.props=o,m.state=st,m.context=b,o=H):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),o=!1)}else{m=i.stateNode,ju(e,i),b=i.memoizedProps,pt=ms(s,b),m.props=pt,vt=i.pendingProps,rt=m.context,st=s.contextType,H=Ws,typeof st=="object"&&st!==null&&(H=wn(st)),C=s.getDerivedStateFromProps,(st=typeof C=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(b!==vt||rt!==H)&&dm(i,m,o,H),Sa=!1,rt=i.memoizedState,m.state=rt,vo(i,o,m,f),go();var lt=i.memoizedState;b!==vt||rt!==lt||Sa||e!==null&&e.dependencies!==null&&Ml(e.dependencies)?(typeof C=="function"&&(df(i,s,C,o),lt=i.memoizedState),(pt=Sa||hm(i,s,pt,o,rt,lt,H)||e!==null&&e.dependencies!==null&&Ml(e.dependencies))?(st||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(o,lt,H),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(o,lt,H)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||b===e.memoizedProps&&rt===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&rt===e.memoizedState||(i.flags|=1024),i.memoizedProps=o,i.memoizedState=lt),m.props=o,m.state=lt,m.context=H,o=pt):(typeof m.componentDidUpdate!="function"||b===e.memoizedProps&&rt===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&rt===e.memoizedState||(i.flags|=1024),o=!1)}return m=o,Gl(e,i),o=(i.flags&128)!==0,m||o?(m=i.stateNode,s=o&&typeof s.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,e!==null&&o?(i.child=tr(i,e.child,null,f),i.child=tr(i,null,s,f)):Sn(e,i,s,f),i.memoizedState=m.state,e=i.child):e=Zi(e,i,f),e}function Rm(e,i,s,o){return oo(),i.flags|=256,Sn(e,i,s,o),i.child}var vf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function _f(e){return{baseLanes:e,cachePool:mp()}}function xf(e,i,s){return e=e!==null?e.childLanes&~s:0,i&&(e|=li),e}function Cm(e,i,s){var o=i.pendingProps,f=!1,m=(i.flags&128)!==0,b;if((b=m)||(b=e!==null&&e.memoizedState===null?!1:(cn.current&2)!==0),b&&(f=!0,i.flags&=-129),b=(i.flags&32)!==0,i.flags&=-33,e===null){if(we){if(f?Ta(i):Aa(),we){var C=Ze,H;if(H=C){t:{for(H=C,C=Ti;H.nodeType!==8;){if(!C){C=null;break t}if(H=vi(H.nextSibling),H===null){C=null;break t}}C=H}C!==null?(i.memoizedState={dehydrated:C,treeContext:os!==null?{id:ki,overflow:Wi}:null,retryLane:536870912,hydrationErrors:null},H=qn(18,null,null,0),H.stateNode=C,H.return=i,i.child=H,Un=i,Ze=null,H=!0):H=!1}H||us(i)}if(C=i.memoizedState,C!==null&&(C=C.dehydrated,C!==null))return nh(C)?i.lanes=32:i.lanes=536870912,null;Yi(i)}return C=o.children,o=o.fallback,f?(Aa(),f=i.mode,C=Vl({mode:"hidden",children:C},f),o=rs(o,f,s,null),C.return=i,o.return=i,C.sibling=o,i.child=C,f=i.child,f.memoizedState=_f(s),f.childLanes=xf(e,b,s),i.memoizedState=vf,o):(Ta(i),yf(i,C))}if(H=e.memoizedState,H!==null&&(C=H.dehydrated,C!==null)){if(m)i.flags&256?(Ta(i),i.flags&=-257,i=Sf(e,i,s)):i.memoizedState!==null?(Aa(),i.child=e.child,i.flags|=128,i=null):(Aa(),f=o.fallback,C=i.mode,o=Vl({mode:"visible",children:o.children},C),f=rs(f,C,s,null),f.flags|=2,o.return=i,f.return=i,o.sibling=f,i.child=o,tr(i,e.child,null,s),o=i.child,o.memoizedState=_f(s),o.childLanes=xf(e,b,s),i.memoizedState=vf,i=f);else if(Ta(i),nh(C)){if(b=C.nextSibling&&C.nextSibling.dataset,b)var st=b.dgst;b=st,o=Error(a(419)),o.stack="",o.digest=b,lo({value:o,source:null,stack:null}),i=Sf(e,i,s)}else if(pn||co(e,i,s,!1),b=(s&e.childLanes)!==0,pn||b){if(b=He,b!==null&&(o=s&-s,o=(o&42)!==0?1:Ye(o),o=(o&(b.suspendedLanes|s))!==0?0:o,o!==0&&o!==H.retryLane))throw H.retryLane=o,ks(e,o),Qn(b,e,o),ym;C.data==="$?"||Ff(),i=Sf(e,i,s)}else C.data==="$?"?(i.flags|=192,i.child=e.child,i=null):(e=H.treeContext,Ze=vi(C.nextSibling),Un=i,we=!0,cs=null,Ti=!1,e!==null&&(si[ri++]=ki,si[ri++]=Wi,si[ri++]=os,ki=e.id,Wi=e.overflow,os=i),i=yf(i,o.children),i.flags|=4096);return i}return f?(Aa(),f=o.fallback,C=i.mode,H=e.child,st=H.sibling,o=Vi(H,{mode:"hidden",children:o.children}),o.subtreeFlags=H.subtreeFlags&65011712,st!==null?f=Vi(st,f):(f=rs(f,C,s,null),f.flags|=2),f.return=i,o.return=i,o.sibling=f,i.child=o,o=f,f=i.child,C=e.child.memoizedState,C===null?C=_f(s):(H=C.cachePool,H!==null?(st=ln._currentValue,H=H.parent!==st?{parent:st,pool:st}:H):H=mp(),C={baseLanes:C.baseLanes|s,cachePool:H}),f.memoizedState=C,f.childLanes=xf(e,b,s),i.memoizedState=vf,o):(Ta(i),s=e.child,e=s.sibling,s=Vi(s,{mode:"visible",children:o.children}),s.return=i,s.sibling=null,e!==null&&(b=i.deletions,b===null?(i.deletions=[e],i.flags|=16):b.push(e)),i.child=s,i.memoizedState=null,s)}function yf(e,i){return i=Vl({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function Vl(e,i){return e=qn(22,e,null,i),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Sf(e,i,s){return tr(i,e.child,null,s),e=yf(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function Dm(e,i,s){e.lanes|=i;var o=e.alternate;o!==null&&(o.lanes|=i),Iu(e.return,i,s)}function Mf(e,i,s,o,f){var m=e.memoizedState;m===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:o,tail:s,tailMode:f}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=o,m.tail=s,m.tailMode=f)}function Nm(e,i,s){var o=i.pendingProps,f=o.revealOrder,m=o.tail;if(Sn(e,i,o.children,s),o=cn.current,(o&2)!==0)o=o&1|2,i.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Dm(e,s,i);else if(e.tag===19)Dm(e,s,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(yt(cn,o),f){case"forwards":for(s=i.child,f=null;s!==null;)e=s.alternate,e!==null&&Il(e)===null&&(f=s),s=s.sibling;s=f,s===null?(f=i.child,i.child=null):(f=s.sibling,s.sibling=null),Mf(i,!1,f,s,m);break;case"backwards":for(s=null,f=i.child,i.child=null;f!==null;){if(e=f.alternate,e!==null&&Il(e)===null){i.child=f;break}e=f.sibling,f.sibling=s,s=f,f=e}Mf(i,!0,s,null,m);break;case"together":Mf(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Zi(e,i,s){if(e!==null&&(i.dependencies=e.dependencies),Na|=i.lanes,(s&i.childLanes)===0)if(e!==null){if(co(e,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(a(153));if(i.child!==null){for(e=i.child,s=Vi(e,e.pendingProps),i.child=s,s.return=i;e.sibling!==null;)e=e.sibling,s=s.sibling=Vi(e,e.pendingProps),s.return=i;s.sibling=null}return i.child}function Ef(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Ml(e)))}function jx(e,i,s){switch(i.tag){case 3:Ft(i,i.stateNode.containerInfo),ya(i,ln,e.memoizedState.cache),oo();break;case 27:case 5:pe(i);break;case 4:Ft(i,i.stateNode.containerInfo);break;case 10:ya(i,i.type,i.memoizedProps.value);break;case 13:var o=i.memoizedState;if(o!==null)return o.dehydrated!==null?(Ta(i),i.flags|=128,null):(s&i.child.childLanes)!==0?Cm(e,i,s):(Ta(i),e=Zi(e,i,s),e!==null?e.sibling:null);Ta(i);break;case 19:var f=(e.flags&128)!==0;if(o=(s&i.childLanes)!==0,o||(co(e,i,s,!1),o=(s&i.childLanes)!==0),f){if(o)return Nm(e,i,s);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),yt(cn,cn.current),o)break;return null;case 22:case 23:return i.lanes=0,bm(e,i,s);case 24:ya(i,ln,e.memoizedState.cache)}return Zi(e,i,s)}function Um(e,i,s){if(e!==null)if(e.memoizedProps!==i.pendingProps)pn=!0;else{if(!Ef(e,s)&&(i.flags&128)===0)return pn=!1,jx(e,i,s);pn=(e.flags&131072)!==0}else pn=!1,we&&(i.flags&1048576)!==0&&lp(i,Sl,i.index);switch(i.lanes=0,i.tag){case 16:t:{e=i.pendingProps;var o=i.elementType,f=o._init;if(o=f(o._payload),i.type=o,typeof o=="function")Nu(o)?(e=ms(o,e),i.tag=1,i=wm(null,i,o,e,s)):(i.tag=0,i=gf(null,i,o,e,s));else{if(o!=null){if(f=o.$$typeof,f===D){i.tag=11,i=Sm(null,i,o,e,s);break t}else if(f===z){i.tag=14,i=Mm(null,i,o,e,s);break t}}throw i=Q(o)||o,Error(a(306,i,""))}}return i;case 0:return gf(e,i,i.type,i.pendingProps,s);case 1:return o=i.type,f=ms(o,i.pendingProps),wm(e,i,o,f,s);case 3:t:{if(Ft(i,i.stateNode.containerInfo),e===null)throw Error(a(387));o=i.pendingProps;var m=i.memoizedState;f=m.element,ju(e,i),vo(i,o,null,s);var b=i.memoizedState;if(o=b.cache,ya(i,ln,o),o!==m.cache&&Fu(i,[ln],s,!0),go(),o=b.element,m.isDehydrated)if(m={element:o,isDehydrated:!1,cache:b.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=Rm(e,i,o,s);break t}else if(o!==f){f=ii(Error(a(424)),i),lo(f),i=Rm(e,i,o,s);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ze=vi(e.firstChild),Un=i,we=!0,cs=null,Ti=!0,s=um(i,null,o,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(oo(),o===f){i=Zi(e,i,s);break t}Sn(e,i,o,s)}i=i.child}return i;case 26:return Gl(e,i),e===null?(s=zg(i.type,null,i.pendingProps,null))?i.memoizedState=s:we||(s=i.type,e=i.pendingProps,o=nc(_t.current).createElement(s),o[tn]=i,o[xn]=e,En(o,s,e),et(o),i.stateNode=o):i.memoizedState=zg(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return pe(i),e===null&&we&&(o=i.stateNode=Lg(i.type,i.pendingProps,_t.current),Un=i,Ti=!0,f=Ze,Pa(i.type)?(ih=f,Ze=vi(o.firstChild)):Ze=f),Sn(e,i,i.pendingProps.children,s),Gl(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&we&&((f=o=Ze)&&(o=xy(o,i.type,i.pendingProps,Ti),o!==null?(i.stateNode=o,Un=i,Ze=vi(o.firstChild),Ti=!1,f=!0):f=!1),f||us(i)),pe(i),f=i.type,m=i.pendingProps,b=e!==null?e.memoizedProps:null,o=m.children,$f(f,m)?o=null:b!==null&&$f(f,b)&&(i.flags|=32),i.memoizedState!==null&&(f=Qu(e,i,Bx,null,null,s),Fo._currentValue=f),Gl(e,i),Sn(e,i,o,s),i.child;case 6:return e===null&&we&&((e=s=Ze)&&(s=yy(s,i.pendingProps,Ti),s!==null?(i.stateNode=s,Un=i,Ze=null,e=!0):e=!1),e||us(i)),null;case 13:return Cm(e,i,s);case 4:return Ft(i,i.stateNode.containerInfo),o=i.pendingProps,e===null?i.child=tr(i,null,o,s):Sn(e,i,o,s),i.child;case 11:return Sm(e,i,i.type,i.pendingProps,s);case 7:return Sn(e,i,i.pendingProps,s),i.child;case 8:return Sn(e,i,i.pendingProps.children,s),i.child;case 12:return Sn(e,i,i.pendingProps.children,s),i.child;case 10:return o=i.pendingProps,ya(i,i.type,o.value),Sn(e,i,o.children,s),i.child;case 9:return f=i.type._context,o=i.pendingProps.children,hs(i),f=wn(f),o=o(f),i.flags|=1,Sn(e,i,o,s),i.child;case 14:return Mm(e,i,i.type,i.pendingProps,s);case 15:return Em(e,i,i.type,i.pendingProps,s);case 19:return Nm(e,i,s);case 31:return o=i.pendingProps,s=i.mode,o={mode:o.mode,children:o.children},e===null?(s=Vl(o,s),s.ref=i.ref,i.child=s,s.return=i,i=s):(s=Vi(e.child,o),s.ref=i.ref,i.child=s,s.return=i,i=s),i;case 22:return bm(e,i,s);case 24:return hs(i),o=wn(ln),e===null?(f=Vu(),f===null&&(f=He,m=Hu(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=s),f=m),i.memoizedState={parent:o,cache:f},Wu(i),ya(i,ln,f)):((e.lanes&s)!==0&&(ju(e,i),vo(i,null,null,s),go()),f=e.memoizedState,m=i.memoizedState,f.parent!==o?(f={parent:o,cache:o},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),ya(i,ln,o)):(o=m.cache,ya(i,ln,o),o!==f.cache&&Fu(i,[ln],s,!0))),Sn(e,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function Ki(e){e.flags|=4}function Lm(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Gg(i)){if(i=oi.current,i!==null&&((Se&4194048)===Se?Ai!==null:(Se&62914560)!==Se&&(Se&536870912)===0||i!==Ai))throw po=ku,gp;e.flags|=8192}}function kl(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?mt():536870912,e.lanes|=i,ar|=i)}function bo(e,i){if(!we)switch(e.tailMode){case"hidden":i=e.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Xe(e){var i=e.alternate!==null&&e.alternate.child===e.child,s=0,o=0;if(i)for(var f=e.child;f!==null;)s|=f.lanes|f.childLanes,o|=f.subtreeFlags&65011712,o|=f.flags&65011712,f.return=e,f=f.sibling;else for(f=e.child;f!==null;)s|=f.lanes|f.childLanes,o|=f.subtreeFlags,o|=f.flags,f.return=e,f=f.sibling;return e.subtreeFlags|=o,e.childLanes=s,i}function qx(e,i,s){var o=i.pendingProps;switch(Pu(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(i),null;case 1:return Xe(i),null;case 3:return s=i.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),i.memoizedState.cache!==o&&(i.flags|=2048),qi(ln),Jt(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(ro(i)?Ki(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,fp())),Xe(i),null;case 26:return s=i.memoizedState,e===null?(Ki(i),s!==null?(Xe(i),Lm(i,s)):(Xe(i),i.flags&=-16777217)):s?s!==e.memoizedState?(Ki(i),Xe(i),Lm(i,s)):(Xe(i),i.flags&=-16777217):(e.memoizedProps!==o&&Ki(i),Xe(i),i.flags&=-16777217),null;case 27:X(i),s=_t.current;var f=i.type;if(e!==null&&i.stateNode!=null)e.memoizedProps!==o&&Ki(i);else{if(!o){if(i.stateNode===null)throw Error(a(166));return Xe(i),null}e=tt.current,ro(i)?cp(i):(e=Lg(f,o,s),i.stateNode=e,Ki(i))}return Xe(i),null;case 5:if(X(i),s=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==o&&Ki(i);else{if(!o){if(i.stateNode===null)throw Error(a(166));return Xe(i),null}if(e=tt.current,ro(i))cp(i);else{switch(f=nc(_t.current),e){case 1:e=f.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:e=f.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":e=f.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":e=f.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":e=f.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?f.createElement("select",{is:o.is}):f.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?f.createElement(s,{is:o.is}):f.createElement(s)}}e[tn]=i,e[xn]=o;t:for(f=i.child;f!==null;){if(f.tag===5||f.tag===6)e.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===i)break t;for(;f.sibling===null;){if(f.return===null||f.return===i)break t;f=f.return}f.sibling.return=f.return,f=f.sibling}i.stateNode=e;t:switch(En(e,s,o),s){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Ki(i)}}return Xe(i),i.flags&=-16777217,null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==o&&Ki(i);else{if(typeof o!="string"&&i.stateNode===null)throw Error(a(166));if(e=_t.current,ro(i)){if(e=i.stateNode,s=i.memoizedProps,o=null,f=Un,f!==null)switch(f.tag){case 27:case 5:o=f.memoizedProps}e[tn]=i,e=!!(e.nodeValue===s||o!==null&&o.suppressHydrationWarning===!0||Ag(e.nodeValue,s)),e||us(i)}else e=nc(e).createTextNode(o),e[tn]=i,i.stateNode=e}return Xe(i),null;case 13:if(o=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(f=ro(i),o!==null&&o.dehydrated!==null){if(e===null){if(!f)throw Error(a(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[tn]=i}else oo(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Xe(i),f=!1}else f=fp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(Yi(i),i):(Yi(i),null)}if(Yi(i),(i.flags&128)!==0)return i.lanes=s,i;if(s=o!==null,e=e!==null&&e.memoizedState!==null,s){o=i.child,f=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(f=o.alternate.memoizedState.cachePool.pool);var m=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(m=o.memoizedState.cachePool.pool),m!==f&&(o.flags|=2048)}return s!==e&&s&&(i.child.flags|=8192),kl(i,i.updateQueue),Xe(i),null;case 4:return Jt(),e===null&&Yf(i.stateNode.containerInfo),Xe(i),null;case 10:return qi(i.type),Xe(i),null;case 19:if(ot(cn),f=i.memoizedState,f===null)return Xe(i),null;if(o=(i.flags&128)!==0,m=f.rendering,m===null)if(o)bo(f,!1);else{if(Ke!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(m=Il(e),m!==null){for(i.flags|=128,bo(f,!1),e=m.updateQueue,i.updateQueue=e,kl(i,e),i.subtreeFlags=0,e=s,s=i.child;s!==null;)op(s,e),s=s.sibling;return yt(cn,cn.current&1|2),i.child}e=e.sibling}f.tail!==null&&$t()>ql&&(i.flags|=128,o=!0,bo(f,!1),i.lanes=4194304)}else{if(!o)if(e=Il(m),e!==null){if(i.flags|=128,o=!0,e=e.updateQueue,i.updateQueue=e,kl(i,e),bo(f,!0),f.tail===null&&f.tailMode==="hidden"&&!m.alternate&&!we)return Xe(i),null}else 2*$t()-f.renderingStartTime>ql&&s!==536870912&&(i.flags|=128,o=!0,bo(f,!1),i.lanes=4194304);f.isBackwards?(m.sibling=i.child,i.child=m):(e=f.last,e!==null?e.sibling=m:i.child=m,f.last=m)}return f.tail!==null?(i=f.tail,f.rendering=i,f.tail=i.sibling,f.renderingStartTime=$t(),i.sibling=null,e=cn.current,yt(cn,o?e&1|2:e&1),i):(Xe(i),null);case 22:case 23:return Yi(i),Zu(),o=i.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(i.flags|=8192):o&&(i.flags|=8192),o?(s&536870912)!==0&&(i.flags&128)===0&&(Xe(i),i.subtreeFlags&6&&(i.flags|=8192)):Xe(i),s=i.updateQueue,s!==null&&kl(i,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),o=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),o!==s&&(i.flags|=2048),e!==null&&ot(ds),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),qi(ln),Xe(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function Xx(e,i){switch(Pu(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return qi(ln),Jt(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return X(i),null;case 13:if(Yi(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(a(340));oo()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return ot(cn),null;case 4:return Jt(),null;case 10:return qi(i.type),null;case 22:case 23:return Yi(i),Zu(),e!==null&&ot(ds),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return qi(ln),null;case 25:return null;default:return null}}function Om(e,i){switch(Pu(i),i.tag){case 3:qi(ln),Jt();break;case 26:case 27:case 5:X(i);break;case 4:Jt();break;case 13:Yi(i);break;case 19:ot(cn);break;case 10:qi(i.type);break;case 22:case 23:Yi(i),Zu(),e!==null&&ot(ds);break;case 24:qi(ln)}}function To(e,i){try{var s=i.updateQueue,o=s!==null?s.lastEffect:null;if(o!==null){var f=o.next;s=f;do{if((s.tag&e)===e){o=void 0;var m=s.create,b=s.inst;o=m(),b.destroy=o}s=s.next}while(s!==f)}}catch(C){Ie(i,i.return,C)}}function wa(e,i,s){try{var o=i.updateQueue,f=o!==null?o.lastEffect:null;if(f!==null){var m=f.next;o=m;do{if((o.tag&e)===e){var b=o.inst,C=b.destroy;if(C!==void 0){b.destroy=void 0,f=i;var H=s,st=C;try{st()}catch(pt){Ie(f,H,pt)}}}o=o.next}while(o!==m)}}catch(pt){Ie(i,i.return,pt)}}function Pm(e){var i=e.updateQueue;if(i!==null){var s=e.stateNode;try{Mp(i,s)}catch(o){Ie(e,e.return,o)}}}function zm(e,i,s){s.props=ms(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(o){Ie(e,i,o)}}function Ao(e,i){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof s=="function"?e.refCleanup=s(o):s.current=o}}catch(f){Ie(e,i,f)}}function wi(e,i){var s=e.ref,o=e.refCleanup;if(s!==null)if(typeof o=="function")try{o()}catch(f){Ie(e,i,f)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){Ie(e,i,f)}else s.current=null}function Bm(e){var i=e.type,s=e.memoizedProps,o=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&o.focus();break t;case"img":s.src?o.src=s.src:s.srcSet&&(o.srcset=s.srcSet)}}catch(f){Ie(e,e.return,f)}}function bf(e,i,s){try{var o=e.stateNode;py(o,e.type,s,i),o[xn]=i}catch(f){Ie(e,e.return,f)}}function Im(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Pa(e.type)||e.tag===4}function Tf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Im(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Pa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Af(e,i,s){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(e),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=ec));else if(o!==4&&(o===27&&Pa(e.type)&&(s=e.stateNode,i=null),e=e.child,e!==null))for(Af(e,i,s),e=e.sibling;e!==null;)Af(e,i,s),e=e.sibling}function Wl(e,i,s){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?s.insertBefore(e,i):s.appendChild(e);else if(o!==4&&(o===27&&Pa(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(Wl(e,i,s),e=e.sibling;e!==null;)Wl(e,i,s),e=e.sibling}function Fm(e){var i=e.stateNode,s=e.memoizedProps;try{for(var o=e.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);En(i,o,s),i[tn]=e,i[xn]=s}catch(m){Ie(e,e.return,m)}}var Qi=!1,Je=!1,wf=!1,Hm=typeof WeakSet=="function"?WeakSet:Set,mn=null;function Yx(e,i){if(e=e.containerInfo,Qf=lc,e=Qd(e),bu(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var o=s.getSelection&&s.getSelection();if(o&&o.rangeCount!==0){s=o.anchorNode;var f=o.anchorOffset,m=o.focusNode;o=o.focusOffset;try{s.nodeType,m.nodeType}catch{s=null;break t}var b=0,C=-1,H=-1,st=0,pt=0,vt=e,rt=null;e:for(;;){for(var lt;vt!==s||f!==0&&vt.nodeType!==3||(C=b+f),vt!==m||o!==0&&vt.nodeType!==3||(H=b+o),vt.nodeType===3&&(b+=vt.nodeValue.length),(lt=vt.firstChild)!==null;)rt=vt,vt=lt;for(;;){if(vt===e)break e;if(rt===s&&++st===f&&(C=b),rt===m&&++pt===o&&(H=b),(lt=vt.nextSibling)!==null)break;vt=rt,rt=vt.parentNode}vt=lt}s=C===-1||H===-1?null:{start:C,end:H}}else s=null}s=s||{start:0,end:0}}else s=null;for(Jf={focusedElem:e,selectionRange:s},lc=!1,mn=i;mn!==null;)if(i=mn,e=i.child,(i.subtreeFlags&1024)!==0&&e!==null)e.return=i,mn=e;else for(;mn!==null;){switch(i=mn,m=i.alternate,e=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,s=i,f=m.memoizedProps,m=m.memoizedState,o=s.stateNode;try{var ee=ms(s.type,f,s.elementType===s.type);e=o.getSnapshotBeforeUpdate(ee,m),o.__reactInternalSnapshotBeforeUpdate=e}catch(Xt){Ie(s,s.return,Xt)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,s=e.nodeType,s===9)eh(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":eh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=i.sibling,e!==null){e.return=i.return,mn=e;break}mn=i.return}}function Gm(e,i,s){var o=s.flags;switch(s.tag){case 0:case 11:case 15:Ra(e,s),o&4&&To(5,s);break;case 1:if(Ra(e,s),o&4)if(e=s.stateNode,i===null)try{e.componentDidMount()}catch(b){Ie(s,s.return,b)}else{var f=ms(s.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(f,i,e.__reactInternalSnapshotBeforeUpdate)}catch(b){Ie(s,s.return,b)}}o&64&&Pm(s),o&512&&Ao(s,s.return);break;case 3:if(Ra(e,s),o&64&&(e=s.updateQueue,e!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{Mp(e,i)}catch(b){Ie(s,s.return,b)}}break;case 27:i===null&&o&4&&Fm(s);case 26:case 5:Ra(e,s),i===null&&o&4&&Bm(s),o&512&&Ao(s,s.return);break;case 12:Ra(e,s);break;case 13:Ra(e,s),o&4&&Wm(e,s),o&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=iy.bind(null,s),Sy(e,s))));break;case 22:if(o=s.memoizedState!==null||Qi,!o){i=i!==null&&i.memoizedState!==null||Je,f=Qi;var m=Je;Qi=o,(Je=i)&&!m?Ca(e,s,(s.subtreeFlags&8772)!==0):Ra(e,s),Qi=f,Je=m}break;case 30:break;default:Ra(e,s)}}function Vm(e){var i=e.alternate;i!==null&&(e.alternate=null,Vm(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&Xr(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var We=null,Bn=!1;function Ji(e,i,s){for(s=s.child;s!==null;)km(e,i,s),s=s.sibling}function km(e,i,s){if(Rt&&typeof Rt.onCommitFiberUnmount=="function")try{Rt.onCommitFiberUnmount(Vt,s)}catch{}switch(s.tag){case 26:Je||wi(s,i),Ji(e,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:Je||wi(s,i);var o=We,f=Bn;Pa(s.type)&&(We=s.stateNode,Bn=!1),Ji(e,i,s),Po(s.stateNode),We=o,Bn=f;break;case 5:Je||wi(s,i);case 6:if(o=We,f=Bn,We=null,Ji(e,i,s),We=o,Bn=f,We!==null)if(Bn)try{(We.nodeType===9?We.body:We.nodeName==="HTML"?We.ownerDocument.body:We).removeChild(s.stateNode)}catch(m){Ie(s,i,m)}else try{We.removeChild(s.stateNode)}catch(m){Ie(s,i,m)}break;case 18:We!==null&&(Bn?(e=We,Ng(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),ko(e)):Ng(We,s.stateNode));break;case 4:o=We,f=Bn,We=s.stateNode.containerInfo,Bn=!0,Ji(e,i,s),We=o,Bn=f;break;case 0:case 11:case 14:case 15:Je||wa(2,s,i),Je||wa(4,s,i),Ji(e,i,s);break;case 1:Je||(wi(s,i),o=s.stateNode,typeof o.componentWillUnmount=="function"&&zm(s,i,o)),Ji(e,i,s);break;case 21:Ji(e,i,s);break;case 22:Je=(o=Je)||s.memoizedState!==null,Ji(e,i,s),Je=o;break;default:Ji(e,i,s)}}function Wm(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ko(e)}catch(s){Ie(i,i.return,s)}}function Zx(e){switch(e.tag){case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new Hm),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new Hm),i;default:throw Error(a(435,e.tag))}}function Rf(e,i){var s=Zx(e);i.forEach(function(o){var f=ay.bind(null,e,o);s.has(o)||(s.add(o),o.then(f,f))})}function Xn(e,i){var s=i.deletions;if(s!==null)for(var o=0;o<s.length;o++){var f=s[o],m=e,b=i,C=b;t:for(;C!==null;){switch(C.tag){case 27:if(Pa(C.type)){We=C.stateNode,Bn=!1;break t}break;case 5:We=C.stateNode,Bn=!1;break t;case 3:case 4:We=C.stateNode.containerInfo,Bn=!0;break t}C=C.return}if(We===null)throw Error(a(160));km(m,b,f),We=null,Bn=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)jm(i,e),i=i.sibling}var gi=null;function jm(e,i){var s=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Xn(i,e),Yn(e),o&4&&(wa(3,e,e.return),To(3,e),wa(5,e,e.return));break;case 1:Xn(i,e),Yn(e),o&512&&(Je||s===null||wi(s,s.return)),o&64&&Qi&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?o:s.concat(o))));break;case 26:var f=gi;if(Xn(i,e),Yn(e),o&512&&(Je||s===null||wi(s,s.return)),o&4){var m=s!==null?s.memoizedState:null;if(o=e.memoizedState,s===null)if(o===null)if(e.stateNode===null){t:{o=e.type,s=e.memoizedProps,f=f.ownerDocument||f;e:switch(o){case"title":m=f.getElementsByTagName("title")[0],(!m||m[ma]||m[tn]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(o),f.head.insertBefore(m,f.querySelector("head > title"))),En(m,o,s),m[tn]=e,et(m),o=m;break t;case"link":var b=Fg("link","href",f).get(o+(s.href||""));if(b){for(var C=0;C<b.length;C++)if(m=b[C],m.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&m.getAttribute("rel")===(s.rel==null?null:s.rel)&&m.getAttribute("title")===(s.title==null?null:s.title)&&m.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){b.splice(C,1);break e}}m=f.createElement(o),En(m,o,s),f.head.appendChild(m);break;case"meta":if(b=Fg("meta","content",f).get(o+(s.content||""))){for(C=0;C<b.length;C++)if(m=b[C],m.getAttribute("content")===(s.content==null?null:""+s.content)&&m.getAttribute("name")===(s.name==null?null:s.name)&&m.getAttribute("property")===(s.property==null?null:s.property)&&m.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&m.getAttribute("charset")===(s.charSet==null?null:s.charSet)){b.splice(C,1);break e}}m=f.createElement(o),En(m,o,s),f.head.appendChild(m);break;default:throw Error(a(468,o))}m[tn]=e,et(m),o=m}e.stateNode=o}else Hg(f,e.type,e.stateNode);else e.stateNode=Ig(f,o,e.memoizedProps);else m!==o?(m===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):m.count--,o===null?Hg(f,e.type,e.stateNode):Ig(f,o,e.memoizedProps)):o===null&&e.stateNode!==null&&bf(e,e.memoizedProps,s.memoizedProps)}break;case 27:Xn(i,e),Yn(e),o&512&&(Je||s===null||wi(s,s.return)),s!==null&&o&4&&bf(e,e.memoizedProps,s.memoizedProps);break;case 5:if(Xn(i,e),Yn(e),o&512&&(Je||s===null||wi(s,s.return)),e.flags&32){f=e.stateNode;try{zs(f,"")}catch(lt){Ie(e,e.return,lt)}}o&4&&e.stateNode!=null&&(f=e.memoizedProps,bf(e,f,s!==null?s.memoizedProps:f)),o&1024&&(wf=!0);break;case 6:if(Xn(i,e),Yn(e),o&4){if(e.stateNode===null)throw Error(a(162));o=e.memoizedProps,s=e.stateNode;try{s.nodeValue=o}catch(lt){Ie(e,e.return,lt)}}break;case 3:if(sc=null,f=gi,gi=ic(i.containerInfo),Xn(i,e),gi=f,Yn(e),o&4&&s!==null&&s.memoizedState.isDehydrated)try{ko(i.containerInfo)}catch(lt){Ie(e,e.return,lt)}wf&&(wf=!1,qm(e));break;case 4:o=gi,gi=ic(e.stateNode.containerInfo),Xn(i,e),Yn(e),gi=o;break;case 12:Xn(i,e),Yn(e);break;case 13:Xn(i,e),Yn(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Of=$t()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Rf(e,o)));break;case 22:f=e.memoizedState!==null;var H=s!==null&&s.memoizedState!==null,st=Qi,pt=Je;if(Qi=st||f,Je=pt||H,Xn(i,e),Je=pt,Qi=st,Yn(e),o&8192)t:for(i=e.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(s===null||H||Qi||Je||gs(e)),s=null,i=e;;){if(i.tag===5||i.tag===26){if(s===null){H=s=i;try{if(m=H.stateNode,f)b=m.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{C=H.stateNode;var vt=H.memoizedProps.style,rt=vt!=null&&vt.hasOwnProperty("display")?vt.display:null;C.style.display=rt==null||typeof rt=="boolean"?"":(""+rt).trim()}}catch(lt){Ie(H,H.return,lt)}}}else if(i.tag===6){if(s===null){H=i;try{H.stateNode.nodeValue=f?"":H.memoizedProps}catch(lt){Ie(H,H.return,lt)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}o&4&&(o=e.updateQueue,o!==null&&(s=o.retryQueue,s!==null&&(o.retryQueue=null,Rf(e,s))));break;case 19:Xn(i,e),Yn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Rf(e,o)));break;case 30:break;case 21:break;default:Xn(i,e),Yn(e)}}function Yn(e){var i=e.flags;if(i&2){try{for(var s,o=e.return;o!==null;){if(Im(o)){s=o;break}o=o.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var f=s.stateNode,m=Tf(e);Wl(e,m,f);break;case 5:var b=s.stateNode;s.flags&32&&(zs(b,""),s.flags&=-33);var C=Tf(e);Wl(e,C,b);break;case 3:case 4:var H=s.stateNode.containerInfo,st=Tf(e);Af(e,st,H);break;default:throw Error(a(161))}}catch(pt){Ie(e,e.return,pt)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function qm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;qm(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function Ra(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Gm(e,i.alternate,i),i=i.sibling}function gs(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:wa(4,i,i.return),gs(i);break;case 1:wi(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&zm(i,i.return,s),gs(i);break;case 27:Po(i.stateNode);case 26:case 5:wi(i,i.return),gs(i);break;case 22:i.memoizedState===null&&gs(i);break;case 30:gs(i);break;default:gs(i)}e=e.sibling}}function Ca(e,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var o=i.alternate,f=e,m=i,b=m.flags;switch(m.tag){case 0:case 11:case 15:Ca(f,m,s),To(4,m);break;case 1:if(Ca(f,m,s),o=m,f=o.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(st){Ie(o,o.return,st)}if(o=m,f=o.updateQueue,f!==null){var C=o.stateNode;try{var H=f.shared.hiddenCallbacks;if(H!==null)for(f.shared.hiddenCallbacks=null,f=0;f<H.length;f++)Sp(H[f],C)}catch(st){Ie(o,o.return,st)}}s&&b&64&&Pm(m),Ao(m,m.return);break;case 27:Fm(m);case 26:case 5:Ca(f,m,s),s&&o===null&&b&4&&Bm(m),Ao(m,m.return);break;case 12:Ca(f,m,s);break;case 13:Ca(f,m,s),s&&b&4&&Wm(f,m);break;case 22:m.memoizedState===null&&Ca(f,m,s),Ao(m,m.return);break;case 30:break;default:Ca(f,m,s)}i=i.sibling}}function Cf(e,i){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&uo(s))}function Df(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&uo(e))}function Ri(e,i,s,o){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Xm(e,i,s,o),i=i.sibling}function Xm(e,i,s,o){var f=i.flags;switch(i.tag){case 0:case 11:case 15:Ri(e,i,s,o),f&2048&&To(9,i);break;case 1:Ri(e,i,s,o);break;case 3:Ri(e,i,s,o),f&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&uo(e)));break;case 12:if(f&2048){Ri(e,i,s,o),e=i.stateNode;try{var m=i.memoizedProps,b=m.id,C=m.onPostCommit;typeof C=="function"&&C(b,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(H){Ie(i,i.return,H)}}else Ri(e,i,s,o);break;case 13:Ri(e,i,s,o);break;case 23:break;case 22:m=i.stateNode,b=i.alternate,i.memoizedState!==null?m._visibility&2?Ri(e,i,s,o):wo(e,i):m._visibility&2?Ri(e,i,s,o):(m._visibility|=2,er(e,i,s,o,(i.subtreeFlags&10256)!==0)),f&2048&&Cf(b,i);break;case 24:Ri(e,i,s,o),f&2048&&Df(i.alternate,i);break;default:Ri(e,i,s,o)}}function er(e,i,s,o,f){for(f=f&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var m=e,b=i,C=s,H=o,st=b.flags;switch(b.tag){case 0:case 11:case 15:er(m,b,C,H,f),To(8,b);break;case 23:break;case 22:var pt=b.stateNode;b.memoizedState!==null?pt._visibility&2?er(m,b,C,H,f):wo(m,b):(pt._visibility|=2,er(m,b,C,H,f)),f&&st&2048&&Cf(b.alternate,b);break;case 24:er(m,b,C,H,f),f&&st&2048&&Df(b.alternate,b);break;default:er(m,b,C,H,f)}i=i.sibling}}function wo(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=e,o=i,f=o.flags;switch(o.tag){case 22:wo(s,o),f&2048&&Cf(o.alternate,o);break;case 24:wo(s,o),f&2048&&Df(o.alternate,o);break;default:wo(s,o)}i=i.sibling}}var Ro=8192;function nr(e){if(e.subtreeFlags&Ro)for(e=e.child;e!==null;)Ym(e),e=e.sibling}function Ym(e){switch(e.tag){case 26:nr(e),e.flags&Ro&&e.memoizedState!==null&&Oy(gi,e.memoizedState,e.memoizedProps);break;case 5:nr(e);break;case 3:case 4:var i=gi;gi=ic(e.stateNode.containerInfo),nr(e),gi=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Ro,Ro=16777216,nr(e),Ro=i):nr(e));break;default:nr(e)}}function Zm(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function Co(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var o=i[s];mn=o,Qm(o,e)}Zm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Km(e),e=e.sibling}function Km(e){switch(e.tag){case 0:case 11:case 15:Co(e),e.flags&2048&&wa(9,e,e.return);break;case 3:Co(e);break;case 12:Co(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,jl(e)):Co(e);break;default:Co(e)}}function jl(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var o=i[s];mn=o,Qm(o,e)}Zm(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:wa(8,i,i.return),jl(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,jl(i));break;default:jl(i)}e=e.sibling}}function Qm(e,i){for(;mn!==null;){var s=mn;switch(s.tag){case 0:case 11:case 15:wa(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var o=s.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:uo(s.memoizedState.cache)}if(o=s.child,o!==null)o.return=s,mn=o;else t:for(s=e;mn!==null;){o=mn;var f=o.sibling,m=o.return;if(Vm(o),o===s){mn=null;break t}if(f!==null){f.return=m,mn=f;break t}mn=m}}}var Kx={getCacheForType:function(e){var i=wn(ln),s=i.data.get(e);return s===void 0&&(s=e(),i.data.set(e,s)),s}},Qx=typeof WeakMap=="function"?WeakMap:Map,De=0,He=null,me=null,Se=0,Ne=0,Zn=null,Da=!1,ir=!1,Nf=!1,$i=0,Ke=0,Na=0,vs=0,Uf=0,li=0,ar=0,Do=null,In=null,Lf=!1,Of=0,ql=1/0,Xl=null,Ua=null,Mn=0,La=null,sr=null,rr=0,Pf=0,zf=null,Jm=null,No=0,Bf=null;function Kn(){if((De&2)!==0&&Se!==0)return Se&-Se;if(L.T!==null){var e=Xs;return e!==0?e:Wf()}return Wn()}function $m(){li===0&&(li=(Se&536870912)===0||we?Ot():536870912);var e=oi.current;return e!==null&&(e.flags|=32),li}function Qn(e,i,s){(e===He&&(Ne===2||Ne===9)||e.cancelPendingCommit!==null)&&(or(e,0),Oa(e,Se,li,!1)),wt(e,s),((De&2)===0||e!==He)&&(e===He&&((De&2)===0&&(vs|=s),Ke===4&&Oa(e,Se,li,!1)),Ci(e))}function tg(e,i,s){if((De&6)!==0)throw Error(a(327));var o=!s&&(i&124)===0&&(i&e.expiredLanes)===0||Be(e,i),f=o?ty(e,i):Hf(e,i,!0),m=o;do{if(f===0){ir&&!o&&Oa(e,i,0,!1);break}else{if(s=e.current.alternate,m&&!Jx(s)){f=Hf(e,i,!1),m=!1;continue}if(f===2){if(m=i,e.errorRecoveryDisabledLanes&m)var b=0;else b=e.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){i=b;t:{var C=e;f=Do;var H=C.current.memoizedState.isDehydrated;if(H&&(or(C,b).flags|=256),b=Hf(C,b,!1),b!==2){if(Nf&&!H){C.errorRecoveryDisabledLanes|=m,vs|=m,f=4;break t}m=In,In=f,m!==null&&(In===null?In=m:In.push.apply(In,m))}f=b}if(m=!1,f!==2)continue}}if(f===1){or(e,0),Oa(e,i,0,!0);break}t:{switch(o=e,m=f,m){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:Oa(o,i,li,!Da);break t;case 2:In=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(f=Of+300-$t(),10<f)){if(Oa(o,i,li,!Da),re(o,0,!0)!==0)break t;o.timeoutHandle=Cg(eg.bind(null,o,s,In,Xl,Lf,i,li,vs,ar,Da,m,2,-0,0),f);break t}eg(o,s,In,Xl,Lf,i,li,vs,ar,Da,m,0,-0,0)}}break}while(!0);Ci(e)}function eg(e,i,s,o,f,m,b,C,H,st,pt,vt,rt,lt){if(e.timeoutHandle=-1,vt=i.subtreeFlags,(vt&8192||(vt&16785408)===16785408)&&(Io={stylesheets:null,count:0,unsuspend:Ly},Ym(i),vt=Py(),vt!==null)){e.cancelPendingCommit=vt(lg.bind(null,e,i,m,s,o,f,b,C,H,pt,1,rt,lt)),Oa(e,m,b,!st);return}lg(e,i,m,s,o,f,b,C,H)}function Jx(e){for(var i=e;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var o=0;o<s.length;o++){var f=s[o],m=f.getSnapshot;f=f.value;try{if(!jn(m(),f))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Oa(e,i,s,o){i&=~Uf,i&=~vs,e.suspendedLanes|=i,e.pingedLanes&=~i,o&&(e.warmLanes|=i),o=e.expirationTimes;for(var f=i;0<f;){var m=31-qt(f),b=1<<m;o[m]=-1,f&=~b}s!==0&&ye(e,s,i)}function Yl(){return(De&6)===0?(Uo(0),!1):!0}function If(){if(me!==null){if(Ne===0)var e=me.return;else e=me,ji=fs=null,tf(e),$s=null,Mo=0,e=me;for(;e!==null;)Om(e.alternate,e),e=e.return;me=null}}function or(e,i){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,gy(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),If(),He=e,me=s=Vi(e.current,null),Se=i,Ne=0,Zn=null,Da=!1,ir=Be(e,i),Nf=!1,ar=li=Uf=vs=Na=Ke=0,In=Do=null,Lf=!1,(i&8)!==0&&(i|=i&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=i;0<o;){var f=31-qt(o),m=1<<f;i|=e[f],o&=~m}return $i=i,gl(),s}function ng(e,i){ue=null,L.H=Pl,i===ho||i===Tl?(i=xp(),Ne=3):i===gp?(i=xp(),Ne=4):Ne=i===ym?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,Zn=i,me===null&&(Ke=1,Hl(e,ii(i,e.current)))}function ig(){var e=L.H;return L.H=Pl,e===null?Pl:e}function ag(){var e=L.A;return L.A=Kx,e}function Ff(){Ke=4,Da||(Se&4194048)!==Se&&oi.current!==null||(ir=!0),(Na&134217727)===0&&(vs&134217727)===0||He===null||Oa(He,Se,li,!1)}function Hf(e,i,s){var o=De;De|=2;var f=ig(),m=ag();(He!==e||Se!==i)&&(Xl=null,or(e,i)),i=!1;var b=Ke;t:do try{if(Ne!==0&&me!==null){var C=me,H=Zn;switch(Ne){case 8:If(),b=6;break t;case 3:case 2:case 9:case 6:oi.current===null&&(i=!0);var st=Ne;if(Ne=0,Zn=null,lr(e,C,H,st),s&&ir){b=0;break t}break;default:st=Ne,Ne=0,Zn=null,lr(e,C,H,st)}}$x(),b=Ke;break}catch(pt){ng(e,pt)}while(!0);return i&&e.shellSuspendCounter++,ji=fs=null,De=o,L.H=f,L.A=m,me===null&&(He=null,Se=0,gl()),b}function $x(){for(;me!==null;)sg(me)}function ty(e,i){var s=De;De|=2;var o=ig(),f=ag();He!==e||Se!==i?(Xl=null,ql=$t()+500,or(e,i)):ir=Be(e,i);t:do try{if(Ne!==0&&me!==null){i=me;var m=Zn;e:switch(Ne){case 1:Ne=0,Zn=null,lr(e,i,m,1);break;case 2:case 9:if(vp(m)){Ne=0,Zn=null,rg(i);break}i=function(){Ne!==2&&Ne!==9||He!==e||(Ne=7),Ci(e)},m.then(i,i);break t;case 3:Ne=7;break t;case 4:Ne=5;break t;case 7:vp(m)?(Ne=0,Zn=null,rg(i)):(Ne=0,Zn=null,lr(e,i,m,7));break;case 5:var b=null;switch(me.tag){case 26:b=me.memoizedState;case 5:case 27:var C=me;if(!b||Gg(b)){Ne=0,Zn=null;var H=C.sibling;if(H!==null)me=H;else{var st=C.return;st!==null?(me=st,Zl(st)):me=null}break e}}Ne=0,Zn=null,lr(e,i,m,5);break;case 6:Ne=0,Zn=null,lr(e,i,m,6);break;case 8:If(),Ke=6;break t;default:throw Error(a(462))}}ey();break}catch(pt){ng(e,pt)}while(!0);return ji=fs=null,L.H=o,L.A=f,De=s,me!==null?0:(He=null,Se=0,gl(),Ke)}function ey(){for(;me!==null&&!Yt();)sg(me)}function sg(e){var i=Um(e.alternate,e,$i);e.memoizedProps=e.pendingProps,i===null?Zl(e):me=i}function rg(e){var i=e,s=i.alternate;switch(i.tag){case 15:case 0:i=Am(s,i,i.pendingProps,i.type,void 0,Se);break;case 11:i=Am(s,i,i.pendingProps,i.type.render,i.ref,Se);break;case 5:tf(i);default:Om(s,i),i=me=op(i,$i),i=Um(s,i,$i)}e.memoizedProps=e.pendingProps,i===null?Zl(e):me=i}function lr(e,i,s,o){ji=fs=null,tf(i),$s=null,Mo=0;var f=i.return;try{if(Wx(e,f,i,s,Se)){Ke=1,Hl(e,ii(s,e.current)),me=null;return}}catch(m){if(f!==null)throw me=f,m;Ke=1,Hl(e,ii(s,e.current)),me=null;return}i.flags&32768?(we||o===1?e=!0:ir||(Se&536870912)!==0?e=!1:(Da=e=!0,(o===2||o===9||o===3||o===6)&&(o=oi.current,o!==null&&o.tag===13&&(o.flags|=16384))),og(i,e)):Zl(i)}function Zl(e){var i=e;do{if((i.flags&32768)!==0){og(i,Da);return}e=i.return;var s=qx(i.alternate,i,$i);if(s!==null){me=s;return}if(i=i.sibling,i!==null){me=i;return}me=i=e}while(i!==null);Ke===0&&(Ke=5)}function og(e,i){do{var s=Xx(e.alternate,e);if(s!==null){s.flags&=32767,me=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(e=e.sibling,e!==null)){me=e;return}me=e=s}while(e!==null);Ke=6,me=null}function lg(e,i,s,o,f,m,b,C,H){e.cancelPendingCommit=null;do Kl();while(Mn!==0);if((De&6)!==0)throw Error(a(327));if(i!==null){if(i===e.current)throw Error(a(177));if(m=i.lanes|i.childLanes,m|=Cu,ie(e,s,m,b,C,H),e===He&&(me=He=null,Se=0),sr=i,La=e,rr=s,Pf=m,zf=f,Jm=o,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,sy(N,function(){return dg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||o){o=L.T,L.T=null,f=Z.p,Z.p=2,b=De,De|=4;try{Yx(e,i,s)}finally{De=b,Z.p=f,L.T=o}}Mn=1,cg(),ug(),fg()}}function cg(){if(Mn===1){Mn=0;var e=La,i=sr,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=L.T,L.T=null;var o=Z.p;Z.p=2;var f=De;De|=4;try{jm(i,e);var m=Jf,b=Qd(e.containerInfo),C=m.focusedElem,H=m.selectionRange;if(b!==C&&C&&C.ownerDocument&&Kd(C.ownerDocument.documentElement,C)){if(H!==null&&bu(C)){var st=H.start,pt=H.end;if(pt===void 0&&(pt=st),"selectionStart"in C)C.selectionStart=st,C.selectionEnd=Math.min(pt,C.value.length);else{var vt=C.ownerDocument||document,rt=vt&&vt.defaultView||window;if(rt.getSelection){var lt=rt.getSelection(),ee=C.textContent.length,Xt=Math.min(H.start,ee),Pe=H.end===void 0?Xt:Math.min(H.end,ee);!lt.extend&&Xt>Pe&&(b=Pe,Pe=Xt,Xt=b);var J=Zd(C,Xt),j=Zd(C,Pe);if(J&&j&&(lt.rangeCount!==1||lt.anchorNode!==J.node||lt.anchorOffset!==J.offset||lt.focusNode!==j.node||lt.focusOffset!==j.offset)){var at=vt.createRange();at.setStart(J.node,J.offset),lt.removeAllRanges(),Xt>Pe?(lt.addRange(at),lt.extend(j.node,j.offset)):(at.setEnd(j.node,j.offset),lt.addRange(at))}}}}for(vt=[],lt=C;lt=lt.parentNode;)lt.nodeType===1&&vt.push({element:lt,left:lt.scrollLeft,top:lt.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<vt.length;C++){var gt=vt[C];gt.element.scrollLeft=gt.left,gt.element.scrollTop=gt.top}}lc=!!Qf,Jf=Qf=null}finally{De=f,Z.p=o,L.T=s}}e.current=i,Mn=2}}function ug(){if(Mn===2){Mn=0;var e=La,i=sr,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=L.T,L.T=null;var o=Z.p;Z.p=2;var f=De;De|=4;try{Gm(e,i.alternate,i)}finally{De=f,Z.p=o,L.T=s}}Mn=3}}function fg(){if(Mn===4||Mn===3){Mn=0,xe();var e=La,i=sr,s=rr,o=Jm;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Mn=5:(Mn=0,sr=La=null,hg(e,e.pendingLanes));var f=e.pendingLanes;if(f===0&&(Ua=null),Ee(s),i=i.stateNode,Rt&&typeof Rt.onCommitFiberRoot=="function")try{Rt.onCommitFiberRoot(Vt,i,void 0,(i.current.flags&128)===128)}catch{}if(o!==null){i=L.T,f=Z.p,Z.p=2,L.T=null;try{for(var m=e.onRecoverableError,b=0;b<o.length;b++){var C=o[b];m(C.value,{componentStack:C.stack})}}finally{L.T=i,Z.p=f}}(rr&3)!==0&&Kl(),Ci(e),f=e.pendingLanes,(s&4194090)!==0&&(f&42)!==0?e===Bf?No++:(No=0,Bf=e):No=0,Uo(0)}}function hg(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,uo(i)))}function Kl(e){return cg(),ug(),fg(),dg()}function dg(){if(Mn!==5)return!1;var e=La,i=Pf;Pf=0;var s=Ee(rr),o=L.T,f=Z.p;try{Z.p=32>s?32:s,L.T=null,s=zf,zf=null;var m=La,b=rr;if(Mn=0,sr=La=null,rr=0,(De&6)!==0)throw Error(a(331));var C=De;if(De|=4,Km(m.current),Xm(m,m.current,b,s),De=C,Uo(0,!1),Rt&&typeof Rt.onPostCommitFiberRoot=="function")try{Rt.onPostCommitFiberRoot(Vt,m)}catch{}return!0}finally{Z.p=f,L.T=o,hg(e,i)}}function pg(e,i,s){i=ii(s,i),i=mf(e.stateNode,i,2),e=Ea(e,i,2),e!==null&&(wt(e,2),Ci(e))}function Ie(e,i,s){if(e.tag===3)pg(e,e,s);else for(;i!==null;){if(i.tag===3){pg(i,e,s);break}else if(i.tag===1){var o=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ua===null||!Ua.has(o))){e=ii(s,e),s=_m(2),o=Ea(i,s,2),o!==null&&(xm(s,o,i,e),wt(o,2),Ci(o));break}}i=i.return}}function Gf(e,i,s){var o=e.pingCache;if(o===null){o=e.pingCache=new Qx;var f=new Set;o.set(i,f)}else f=o.get(i),f===void 0&&(f=new Set,o.set(i,f));f.has(s)||(Nf=!0,f.add(s),e=ny.bind(null,e,i,s),i.then(e,e))}function ny(e,i,s){var o=e.pingCache;o!==null&&o.delete(i),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,He===e&&(Se&s)===s&&(Ke===4||Ke===3&&(Se&62914560)===Se&&300>$t()-Of?(De&2)===0&&or(e,0):Uf|=s,ar===Se&&(ar=0)),Ci(e)}function mg(e,i){i===0&&(i=mt()),e=ks(e,i),e!==null&&(wt(e,i),Ci(e))}function iy(e){var i=e.memoizedState,s=0;i!==null&&(s=i.retryLane),mg(e,s)}function ay(e,i){var s=0;switch(e.tag){case 13:var o=e.stateNode,f=e.memoizedState;f!==null&&(s=f.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(a(314))}o!==null&&o.delete(i),mg(e,s)}function sy(e,i){return ce(e,i)}var Ql=null,cr=null,Vf=!1,Jl=!1,kf=!1,_s=0;function Ci(e){e!==cr&&e.next===null&&(cr===null?Ql=cr=e:cr=cr.next=e),Jl=!0,Vf||(Vf=!0,oy())}function Uo(e,i){if(!kf&&Jl){kf=!0;do for(var s=!1,o=Ql;o!==null;){if(e!==0){var f=o.pendingLanes;if(f===0)var m=0;else{var b=o.suspendedLanes,C=o.pingedLanes;m=(1<<31-qt(42|e)+1)-1,m&=f&~(b&~C),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(s=!0,xg(o,m))}else m=Se,m=re(o,o===He?m:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(m&3)===0||Be(o,m)||(s=!0,xg(o,m));o=o.next}while(s);kf=!1}}function ry(){gg()}function gg(){Jl=Vf=!1;var e=0;_s!==0&&(my()&&(e=_s),_s=0);for(var i=$t(),s=null,o=Ql;o!==null;){var f=o.next,m=vg(o,i);m===0?(o.next=null,s===null?Ql=f:s.next=f,f===null&&(cr=s)):(s=o,(e!==0||(m&3)!==0)&&(Jl=!0)),o=f}Uo(e)}function vg(e,i){for(var s=e.suspendedLanes,o=e.pingedLanes,f=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var b=31-qt(m),C=1<<b,H=f[b];H===-1?((C&s)===0||(C&o)!==0)&&(f[b]=q(C,i)):H<=i&&(e.expiredLanes|=C),m&=~C}if(i=He,s=Se,s=re(e,e===i?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,s===0||e===i&&(Ne===2||Ne===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&ze(o),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||Be(e,s)){if(i=s&-s,i===e.callbackPriority)return i;switch(o!==null&&ze(o),Ee(s)){case 2:case 8:s=G;break;case 32:s=N;break;case 268435456:s=St;break;default:s=N}return o=_g.bind(null,e),s=ce(s,o),e.callbackPriority=i,e.callbackNode=s,i}return o!==null&&o!==null&&ze(o),e.callbackPriority=2,e.callbackNode=null,2}function _g(e,i){if(Mn!==0&&Mn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(Kl()&&e.callbackNode!==s)return null;var o=Se;return o=re(e,e===He?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(tg(e,o,i),vg(e,$t()),e.callbackNode!=null&&e.callbackNode===s?_g.bind(null,e):null)}function xg(e,i){if(Kl())return null;tg(e,i,!0)}function oy(){vy(function(){(De&6)!==0?ce(je,ry):gg()})}function Wf(){return _s===0&&(_s=Ot()),_s}function yg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:cl(""+e)}function Sg(e,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,e.id&&s.setAttribute("form",e.id),i.parentNode.insertBefore(s,i),e=new FormData(e),s.parentNode.removeChild(s),e}function ly(e,i,s,o,f){if(i==="submit"&&s&&s.stateNode===f){var m=yg((f[xn]||null).action),b=o.submitter;b&&(i=(i=b[xn]||null)?yg(i.formAction):b.getAttribute("formAction"),i!==null&&(m=i,b=null));var C=new dl("action","action",null,o,f);e.push({event:C,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(_s!==0){var H=b?Sg(f,b):new FormData(f);uf(s,{pending:!0,data:H,method:f.method,action:m},null,H)}}else typeof m=="function"&&(C.preventDefault(),H=b?Sg(f,b):new FormData(f),uf(s,{pending:!0,data:H,method:f.method,action:m},m,H))},currentTarget:f}]})}}for(var jf=0;jf<Ru.length;jf++){var qf=Ru[jf],cy=qf.toLowerCase(),uy=qf[0].toUpperCase()+qf.slice(1);mi(cy,"on"+uy)}mi(tp,"onAnimationEnd"),mi(ep,"onAnimationIteration"),mi(np,"onAnimationStart"),mi("dblclick","onDoubleClick"),mi("focusin","onFocus"),mi("focusout","onBlur"),mi(wx,"onTransitionRun"),mi(Rx,"onTransitionStart"),mi(Cx,"onTransitionCancel"),mi(ip,"onTransitionEnd"),Ut("onMouseEnter",["mouseout","mouseover"]),Ut("onMouseLeave",["mouseout","mouseover"]),Ut("onPointerEnter",["pointerout","pointerover"]),Ut("onPointerLeave",["pointerout","pointerover"]),bt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),bt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),bt("onBeforeInput",["compositionend","keypress","textInput","paste"]),bt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),bt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),bt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Lo));function Mg(e,i){i=(i&4)!==0;for(var s=0;s<e.length;s++){var o=e[s],f=o.event;o=o.listeners;t:{var m=void 0;if(i)for(var b=o.length-1;0<=b;b--){var C=o[b],H=C.instance,st=C.currentTarget;if(C=C.listener,H!==m&&f.isPropagationStopped())break t;m=C,f.currentTarget=st;try{m(f)}catch(pt){Fl(pt)}f.currentTarget=null,m=H}else for(b=0;b<o.length;b++){if(C=o[b],H=C.instance,st=C.currentTarget,C=C.listener,H!==m&&f.isPropagationStopped())break t;m=C,f.currentTarget=st;try{m(f)}catch(pt){Fl(pt)}f.currentTarget=null,m=H}}}}function ge(e,i){var s=i[pa];s===void 0&&(s=i[pa]=new Set);var o=e+"__bubble";s.has(o)||(Eg(i,e,2,!1),s.add(o))}function Xf(e,i,s){var o=0;i&&(o|=4),Eg(s,e,o,i)}var $l="_reactListening"+Math.random().toString(36).slice(2);function Yf(e){if(!e[$l]){e[$l]=!0,ct.forEach(function(s){s!=="selectionchange"&&(fy.has(s)||Xf(s,!1,e),Xf(s,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[$l]||(i[$l]=!0,Xf("selectionchange",!1,i))}}function Eg(e,i,s,o){switch(Xg(i)){case 2:var f=Iy;break;case 8:f=Fy;break;default:f=lh}s=f.bind(null,i,s,e),f=void 0,!mu||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),o?f!==void 0?e.addEventListener(i,s,{capture:!0,passive:f}):e.addEventListener(i,s,!0):f!==void 0?e.addEventListener(i,s,{passive:f}):e.addEventListener(i,s,!1)}function Zf(e,i,s,o,f){var m=o;if((i&1)===0&&(i&2)===0&&o!==null)t:for(;;){if(o===null)return;var b=o.tag;if(b===3||b===4){var C=o.stateNode.containerInfo;if(C===f)break;if(b===4)for(b=o.return;b!==null;){var H=b.tag;if((H===3||H===4)&&b.stateNode.containerInfo===f)return;b=b.return}for(;C!==null;){if(b=ga(C),b===null)return;if(H=b.tag,H===5||H===6||H===26||H===27){o=m=b;continue t}C=C.parentNode}}o=o.return}Dd(function(){var st=m,pt=du(s),vt=[];t:{var rt=ap.get(e);if(rt!==void 0){var lt=dl,ee=e;switch(e){case"keypress":if(fl(s)===0)break t;case"keydown":case"keyup":lt=sx;break;case"focusin":ee="focus",lt=xu;break;case"focusout":ee="blur",lt=xu;break;case"beforeblur":case"afterblur":lt=xu;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=Ld;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=X_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=lx;break;case tp:case ep:case np:lt=K_;break;case ip:lt=ux;break;case"scroll":case"scrollend":lt=j_;break;case"wheel":lt=hx;break;case"copy":case"cut":case"paste":lt=J_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=Pd;break;case"toggle":case"beforetoggle":lt=px}var Xt=(i&4)!==0,Pe=!Xt&&(e==="scroll"||e==="scrollend"),J=Xt?rt!==null?rt+"Capture":null:rt;Xt=[];for(var j=st,at;j!==null;){var gt=j;if(at=gt.stateNode,gt=gt.tag,gt!==5&&gt!==26&&gt!==27||at===null||J===null||(gt=Qr(j,J),gt!=null&&Xt.push(Oo(j,gt,at))),Pe)break;j=j.return}0<Xt.length&&(rt=new lt(rt,ee,null,s,pt),vt.push({event:rt,listeners:Xt}))}}if((i&7)===0){t:{if(rt=e==="mouseover"||e==="pointerover",lt=e==="mouseout"||e==="pointerout",rt&&s!==hu&&(ee=s.relatedTarget||s.fromElement)&&(ga(ee)||ee[Hi]))break t;if((lt||rt)&&(rt=pt.window===pt?pt:(rt=pt.ownerDocument)?rt.defaultView||rt.parentWindow:window,lt?(ee=s.relatedTarget||s.toElement,lt=st,ee=ee?ga(ee):null,ee!==null&&(Pe=l(ee),Xt=ee.tag,ee!==Pe||Xt!==5&&Xt!==27&&Xt!==6)&&(ee=null)):(lt=null,ee=st),lt!==ee)){if(Xt=Ld,gt="onMouseLeave",J="onMouseEnter",j="mouse",(e==="pointerout"||e==="pointerover")&&(Xt=Pd,gt="onPointerLeave",J="onPointerEnter",j="pointer"),Pe=lt==null?rt:O(lt),at=ee==null?rt:O(ee),rt=new Xt(gt,j+"leave",lt,s,pt),rt.target=Pe,rt.relatedTarget=at,gt=null,ga(pt)===st&&(Xt=new Xt(J,j+"enter",ee,s,pt),Xt.target=at,Xt.relatedTarget=Pe,gt=Xt),Pe=gt,lt&&ee)e:{for(Xt=lt,J=ee,j=0,at=Xt;at;at=ur(at))j++;for(at=0,gt=J;gt;gt=ur(gt))at++;for(;0<j-at;)Xt=ur(Xt),j--;for(;0<at-j;)J=ur(J),at--;for(;j--;){if(Xt===J||J!==null&&Xt===J.alternate)break e;Xt=ur(Xt),J=ur(J)}Xt=null}else Xt=null;lt!==null&&bg(vt,rt,lt,Xt,!1),ee!==null&&Pe!==null&&bg(vt,Pe,ee,Xt,!0)}}t:{if(rt=st?O(st):window,lt=rt.nodeName&&rt.nodeName.toLowerCase(),lt==="select"||lt==="input"&&rt.type==="file")var It=kd;else if(Gd(rt))if(Wd)It=bx;else{It=Mx;var de=Sx}else lt=rt.nodeName,!lt||lt.toLowerCase()!=="input"||rt.type!=="checkbox"&&rt.type!=="radio"?st&&fu(st.elementType)&&(It=kd):It=Ex;if(It&&(It=It(e,st))){Vd(vt,It,s,pt);break t}de&&de(e,rt,st),e==="focusout"&&st&&rt.type==="number"&&st.memoizedProps.value!=null&&uu(rt,"number",rt.value)}switch(de=st?O(st):window,e){case"focusin":(Gd(de)||de.contentEditable==="true")&&(Hs=de,Tu=st,so=null);break;case"focusout":so=Tu=Hs=null;break;case"mousedown":Au=!0;break;case"contextmenu":case"mouseup":case"dragend":Au=!1,Jd(vt,s,pt);break;case"selectionchange":if(Ax)break;case"keydown":case"keyup":Jd(vt,s,pt)}var Wt;if(Su)t:{switch(e){case"compositionstart":var Qt="onCompositionStart";break t;case"compositionend":Qt="onCompositionEnd";break t;case"compositionupdate":Qt="onCompositionUpdate";break t}Qt=void 0}else Fs?Fd(e,s)&&(Qt="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(Qt="onCompositionStart");Qt&&(zd&&s.locale!=="ko"&&(Fs||Qt!=="onCompositionStart"?Qt==="onCompositionEnd"&&Fs&&(Wt=Nd()):(xa=pt,gu="value"in xa?xa.value:xa.textContent,Fs=!0)),de=tc(st,Qt),0<de.length&&(Qt=new Od(Qt,e,null,s,pt),vt.push({event:Qt,listeners:de}),Wt?Qt.data=Wt:(Wt=Hd(s),Wt!==null&&(Qt.data=Wt)))),(Wt=gx?vx(e,s):_x(e,s))&&(Qt=tc(st,"onBeforeInput"),0<Qt.length&&(de=new Od("onBeforeInput","beforeinput",null,s,pt),vt.push({event:de,listeners:Qt}),de.data=Wt)),ly(vt,e,st,s,pt)}Mg(vt,i)})}function Oo(e,i,s){return{instance:e,listener:i,currentTarget:s}}function tc(e,i){for(var s=i+"Capture",o=[];e!==null;){var f=e,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=Qr(e,s),f!=null&&o.unshift(Oo(e,f,m)),f=Qr(e,i),f!=null&&o.push(Oo(e,f,m))),e.tag===3)return o;e=e.return}return[]}function ur(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function bg(e,i,s,o,f){for(var m=i._reactName,b=[];s!==null&&s!==o;){var C=s,H=C.alternate,st=C.stateNode;if(C=C.tag,H!==null&&H===o)break;C!==5&&C!==26&&C!==27||st===null||(H=st,f?(st=Qr(s,m),st!=null&&b.unshift(Oo(s,st,H))):f||(st=Qr(s,m),st!=null&&b.push(Oo(s,st,H)))),s=s.return}b.length!==0&&e.push({event:i,listeners:b})}var hy=/\r\n?/g,dy=/\u0000|\uFFFD/g;function Tg(e){return(typeof e=="string"?e:""+e).replace(hy,`
`).replace(dy,"")}function Ag(e,i){return i=Tg(i),Tg(e)===i}function ec(){}function Oe(e,i,s,o,f,m){switch(s){case"children":typeof o=="string"?i==="body"||i==="textarea"&&o===""||zs(e,o):(typeof o=="number"||typeof o=="bigint")&&i!=="body"&&zs(e,""+o);break;case"className":_e(e,"class",o);break;case"tabIndex":_e(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":_e(e,s,o);break;case"style":Rd(e,o,m);break;case"data":if(i!=="object"){_e(e,"data",o);break}case"src":case"href":if(o===""&&(i!=="a"||s!=="href")){e.removeAttribute(s);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(s);break}o=cl(""+o),e.setAttribute(s,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(s==="formAction"?(i!=="input"&&Oe(e,i,"name",f.name,f,null),Oe(e,i,"formEncType",f.formEncType,f,null),Oe(e,i,"formMethod",f.formMethod,f,null),Oe(e,i,"formTarget",f.formTarget,f,null)):(Oe(e,i,"encType",f.encType,f,null),Oe(e,i,"method",f.method,f,null),Oe(e,i,"target",f.target,f,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(s);break}o=cl(""+o),e.setAttribute(s,o);break;case"onClick":o!=null&&(e.onclick=ec);break;case"onScroll":o!=null&&ge("scroll",e);break;case"onScrollEnd":o!=null&&ge("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(s=o.__html,s!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}s=cl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,""+o):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":o===!0?e.setAttribute(s,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,o):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(s,o):e.removeAttribute(s);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(s):e.setAttribute(s,o);break;case"popover":ge("beforetoggle",e),ge("toggle",e),jt(e,"popover",o);break;case"xlinkActuate":be(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":be(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":be(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":be(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":be(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":be(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":be(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":be(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":be(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":jt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=k_.get(s)||s,jt(e,s,o))}}function Kf(e,i,s,o,f,m){switch(s){case"style":Rd(e,o,m);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(s=o.__html,s!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"children":typeof o=="string"?zs(e,o):(typeof o=="number"||typeof o=="bigint")&&zs(e,""+o);break;case"onScroll":o!=null&&ge("scroll",e);break;case"onScrollEnd":o!=null&&ge("scrollend",e);break;case"onClick":o!=null&&(e.onclick=ec);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!nt.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),i=s.slice(2,f?s.length-7:void 0),m=e[xn]||null,m=m!=null?m[s]:null,typeof m=="function"&&e.removeEventListener(i,m,f),typeof o=="function")){typeof m!="function"&&m!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(i,o,f);break t}s in e?e[s]=o:o===!0?e.setAttribute(s,""):jt(e,s,o)}}}function En(e,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ge("error",e),ge("load",e);var o=!1,f=!1,m;for(m in s)if(s.hasOwnProperty(m)){var b=s[m];if(b!=null)switch(m){case"src":o=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Oe(e,i,m,b,s,null)}}f&&Oe(e,i,"srcSet",s.srcSet,s,null),o&&Oe(e,i,"src",s.src,s,null);return;case"input":ge("invalid",e);var C=m=b=f=null,H=null,st=null;for(o in s)if(s.hasOwnProperty(o)){var pt=s[o];if(pt!=null)switch(o){case"name":f=pt;break;case"type":b=pt;break;case"checked":H=pt;break;case"defaultChecked":st=pt;break;case"value":m=pt;break;case"defaultValue":C=pt;break;case"children":case"dangerouslySetInnerHTML":if(pt!=null)throw Error(a(137,i));break;default:Oe(e,i,o,pt,s,null)}}Kr(e,m,C,H,st,b,f,!1),qe(e);return;case"select":ge("invalid",e),o=b=m=null;for(f in s)if(s.hasOwnProperty(f)&&(C=s[f],C!=null))switch(f){case"value":m=C;break;case"defaultValue":b=C;break;case"multiple":o=C;default:Oe(e,i,f,C,s,null)}i=m,s=b,e.multiple=!!o,i!=null?Ps(e,!!o,i,!1):s!=null&&Ps(e,!!o,s,!0);return;case"textarea":ge("invalid",e),m=f=o=null;for(b in s)if(s.hasOwnProperty(b)&&(C=s[b],C!=null))switch(b){case"value":o=C;break;case"defaultValue":f=C;break;case"children":m=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(a(91));break;default:Oe(e,i,b,C,s,null)}Ad(e,o,f,m),qe(e);return;case"option":for(H in s)if(s.hasOwnProperty(H)&&(o=s[H],o!=null))switch(H){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Oe(e,i,H,o,s,null)}return;case"dialog":ge("beforetoggle",e),ge("toggle",e),ge("cancel",e),ge("close",e);break;case"iframe":case"object":ge("load",e);break;case"video":case"audio":for(o=0;o<Lo.length;o++)ge(Lo[o],e);break;case"image":ge("error",e),ge("load",e);break;case"details":ge("toggle",e);break;case"embed":case"source":case"link":ge("error",e),ge("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(st in s)if(s.hasOwnProperty(st)&&(o=s[st],o!=null))switch(st){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Oe(e,i,st,o,s,null)}return;default:if(fu(i)){for(pt in s)s.hasOwnProperty(pt)&&(o=s[pt],o!==void 0&&Kf(e,i,pt,o,s,void 0));return}}for(C in s)s.hasOwnProperty(C)&&(o=s[C],o!=null&&Oe(e,i,C,o,s,null))}function py(e,i,s,o){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,b=null,C=null,H=null,st=null,pt=null;for(lt in s){var vt=s[lt];if(s.hasOwnProperty(lt)&&vt!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":H=vt;default:o.hasOwnProperty(lt)||Oe(e,i,lt,null,o,vt)}}for(var rt in o){var lt=o[rt];if(vt=s[rt],o.hasOwnProperty(rt)&&(lt!=null||vt!=null))switch(rt){case"type":m=lt;break;case"name":f=lt;break;case"checked":st=lt;break;case"defaultChecked":pt=lt;break;case"value":b=lt;break;case"defaultValue":C=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(a(137,i));break;default:lt!==vt&&Oe(e,i,rt,lt,o,vt)}}Zr(e,b,C,H,st,pt,m,f);return;case"select":lt=b=C=rt=null;for(m in s)if(H=s[m],s.hasOwnProperty(m)&&H!=null)switch(m){case"value":break;case"multiple":lt=H;default:o.hasOwnProperty(m)||Oe(e,i,m,null,o,H)}for(f in o)if(m=o[f],H=s[f],o.hasOwnProperty(f)&&(m!=null||H!=null))switch(f){case"value":rt=m;break;case"defaultValue":C=m;break;case"multiple":b=m;default:m!==H&&Oe(e,i,f,m,o,H)}i=C,s=b,o=lt,rt!=null?Ps(e,!!s,rt,!1):!!o!=!!s&&(i!=null?Ps(e,!!s,i,!0):Ps(e,!!s,s?[]:"",!1));return;case"textarea":lt=rt=null;for(C in s)if(f=s[C],s.hasOwnProperty(C)&&f!=null&&!o.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:Oe(e,i,C,null,o,f)}for(b in o)if(f=o[b],m=s[b],o.hasOwnProperty(b)&&(f!=null||m!=null))switch(b){case"value":rt=f;break;case"defaultValue":lt=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==m&&Oe(e,i,b,f,o,m)}Td(e,rt,lt);return;case"option":for(var ee in s)if(rt=s[ee],s.hasOwnProperty(ee)&&rt!=null&&!o.hasOwnProperty(ee))switch(ee){case"selected":e.selected=!1;break;default:Oe(e,i,ee,null,o,rt)}for(H in o)if(rt=o[H],lt=s[H],o.hasOwnProperty(H)&&rt!==lt&&(rt!=null||lt!=null))switch(H){case"selected":e.selected=rt&&typeof rt!="function"&&typeof rt!="symbol";break;default:Oe(e,i,H,rt,o,lt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Xt in s)rt=s[Xt],s.hasOwnProperty(Xt)&&rt!=null&&!o.hasOwnProperty(Xt)&&Oe(e,i,Xt,null,o,rt);for(st in o)if(rt=o[st],lt=s[st],o.hasOwnProperty(st)&&rt!==lt&&(rt!=null||lt!=null))switch(st){case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(a(137,i));break;default:Oe(e,i,st,rt,o,lt)}return;default:if(fu(i)){for(var Pe in s)rt=s[Pe],s.hasOwnProperty(Pe)&&rt!==void 0&&!o.hasOwnProperty(Pe)&&Kf(e,i,Pe,void 0,o,rt);for(pt in o)rt=o[pt],lt=s[pt],!o.hasOwnProperty(pt)||rt===lt||rt===void 0&&lt===void 0||Kf(e,i,pt,rt,o,lt);return}}for(var J in s)rt=s[J],s.hasOwnProperty(J)&&rt!=null&&!o.hasOwnProperty(J)&&Oe(e,i,J,null,o,rt);for(vt in o)rt=o[vt],lt=s[vt],!o.hasOwnProperty(vt)||rt===lt||rt==null&&lt==null||Oe(e,i,vt,rt,o,lt)}var Qf=null,Jf=null;function nc(e){return e.nodeType===9?e:e.ownerDocument}function wg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Rg(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function $f(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var th=null;function my(){var e=window.event;return e&&e.type==="popstate"?e===th?!1:(th=e,!0):(th=null,!1)}var Cg=typeof setTimeout=="function"?setTimeout:void 0,gy=typeof clearTimeout=="function"?clearTimeout:void 0,Dg=typeof Promise=="function"?Promise:void 0,vy=typeof queueMicrotask=="function"?queueMicrotask:typeof Dg<"u"?function(e){return Dg.resolve(null).then(e).catch(_y)}:Cg;function _y(e){setTimeout(function(){throw e})}function Pa(e){return e==="head"}function Ng(e,i){var s=i,o=0,f=0;do{var m=s.nextSibling;if(e.removeChild(s),m&&m.nodeType===8)if(s=m.data,s==="/$"){if(0<o&&8>o){s=o;var b=e.ownerDocument;if(s&1&&Po(b.documentElement),s&2&&Po(b.body),s&4)for(s=b.head,Po(s),b=s.firstChild;b;){var C=b.nextSibling,H=b.nodeName;b[ma]||H==="SCRIPT"||H==="STYLE"||H==="LINK"&&b.rel.toLowerCase()==="stylesheet"||s.removeChild(b),b=C}}if(f===0){e.removeChild(m),ko(i);return}f--}else s==="$"||s==="$?"||s==="$!"?f++:o=s.charCodeAt(0)-48;else o=0;s=m}while(s);ko(i)}function eh(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":eh(s),Xr(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function xy(e,i,s,o){for(;e.nodeType===1;){var f=s;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[ma])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==f.rel||e.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||e.getAttribute("title")!==(f.title==null?null:f.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(f.src==null?null:f.src)||e.getAttribute("type")!==(f.type==null?null:f.type)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=vi(e.nextSibling),e===null)break}return null}function yy(e,i,s){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=vi(e.nextSibling),e===null))return null;return e}function nh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Sy(e,i){var s=e.ownerDocument;if(e.data!=="$?"||s.readyState==="complete")i();else{var o=function(){i(),s.removeEventListener("DOMContentLoaded",o)};s.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function vi(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return e}var ih=null;function Ug(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return e;i--}else s==="/$"&&i++}e=e.previousSibling}return null}function Lg(e,i,s){switch(i=nc(s),e){case"html":if(e=i.documentElement,!e)throw Error(a(452));return e;case"head":if(e=i.head,!e)throw Error(a(453));return e;case"body":if(e=i.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Po(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);Xr(e)}var ci=new Map,Og=new Set;function ic(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ta=Z.d;Z.d={f:My,r:Ey,D:by,C:Ty,L:Ay,m:wy,X:Cy,S:Ry,M:Dy};function My(){var e=ta.f(),i=Yl();return e||i}function Ey(e){var i=va(e);i!==null&&i.tag===5&&i.type==="form"?tm(i):ta.r(e)}var fr=typeof document>"u"?null:document;function Pg(e,i,s){var o=fr;if(o&&typeof i=="string"&&i){var f=An(i);f='link[rel="'+e+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),Og.has(f)||(Og.add(f),e={rel:e,crossOrigin:s,href:i},o.querySelector(f)===null&&(i=o.createElement("link"),En(i,"link",e),et(i),o.head.appendChild(i)))}}function by(e){ta.D(e),Pg("dns-prefetch",e,null)}function Ty(e,i){ta.C(e,i),Pg("preconnect",e,i)}function Ay(e,i,s){ta.L(e,i,s);var o=fr;if(o&&e&&i){var f='link[rel="preload"][as="'+An(i)+'"]';i==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+An(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+An(s.imageSizes)+'"]')):f+='[href="'+An(e)+'"]';var m=f;switch(i){case"style":m=hr(e);break;case"script":m=dr(e)}ci.has(m)||(e=g({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:e,as:i},s),ci.set(m,e),o.querySelector(f)!==null||i==="style"&&o.querySelector(zo(m))||i==="script"&&o.querySelector(Bo(m))||(i=o.createElement("link"),En(i,"link",e),et(i),o.head.appendChild(i)))}}function wy(e,i){ta.m(e,i);var s=fr;if(s&&e){var o=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+An(o)+'"][href="'+An(e)+'"]',m=f;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=dr(e)}if(!ci.has(m)&&(e=g({rel:"modulepreload",href:e},i),ci.set(m,e),s.querySelector(f)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Bo(m)))return}o=s.createElement("link"),En(o,"link",e),et(o),s.head.appendChild(o)}}}function Ry(e,i,s){ta.S(e,i,s);var o=fr;if(o&&e){var f=K(o).hoistableStyles,m=hr(e);i=i||"default";var b=f.get(m);if(!b){var C={loading:0,preload:null};if(b=o.querySelector(zo(m)))C.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":i},s),(s=ci.get(m))&&ah(e,s);var H=b=o.createElement("link");et(H),En(H,"link",e),H._p=new Promise(function(st,pt){H.onload=st,H.onerror=pt}),H.addEventListener("load",function(){C.loading|=1}),H.addEventListener("error",function(){C.loading|=2}),C.loading|=4,ac(b,i,o)}b={type:"stylesheet",instance:b,count:1,state:C},f.set(m,b)}}}function Cy(e,i){ta.X(e,i);var s=fr;if(s&&e){var o=K(s).hoistableScripts,f=dr(e),m=o.get(f);m||(m=s.querySelector(Bo(f)),m||(e=g({src:e,async:!0},i),(i=ci.get(f))&&sh(e,i),m=s.createElement("script"),et(m),En(m,"link",e),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},o.set(f,m))}}function Dy(e,i){ta.M(e,i);var s=fr;if(s&&e){var o=K(s).hoistableScripts,f=dr(e),m=o.get(f);m||(m=s.querySelector(Bo(f)),m||(e=g({src:e,async:!0,type:"module"},i),(i=ci.get(f))&&sh(e,i),m=s.createElement("script"),et(m),En(m,"link",e),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},o.set(f,m))}}function zg(e,i,s,o){var f=(f=_t.current)?ic(f):null;if(!f)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=hr(s.href),s=K(f).hoistableStyles,o=s.get(i),o||(o={type:"style",instance:null,count:0,state:null},s.set(i,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=hr(s.href);var m=K(f).hoistableStyles,b=m.get(e);if(b||(f=f.ownerDocument||f,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,b),(m=f.querySelector(zo(e)))&&!m._p&&(b.instance=m,b.state.loading=5),ci.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},ci.set(e,s),m||Ny(f,e,s,b.state))),i&&o===null)throw Error(a(528,""));return b}if(i&&o!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=dr(s),s=K(f).hoistableScripts,o=s.get(i),o||(o={type:"script",instance:null,count:0,state:null},s.set(i,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function hr(e){return'href="'+An(e)+'"'}function zo(e){return'link[rel="stylesheet"]['+e+"]"}function Bg(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function Ny(e,i,s,o){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?o.loading=1:(i=e.createElement("link"),o.preload=i,i.addEventListener("load",function(){return o.loading|=1}),i.addEventListener("error",function(){return o.loading|=2}),En(i,"link",s),et(i),e.head.appendChild(i))}function dr(e){return'[src="'+An(e)+'"]'}function Bo(e){return"script[async]"+e}function Ig(e,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var o=e.querySelector('style[data-href~="'+An(s.href)+'"]');if(o)return i.instance=o,et(o),o;var f=g({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),et(o),En(o,"style",f),ac(o,s.precedence,e),i.instance=o;case"stylesheet":f=hr(s.href);var m=e.querySelector(zo(f));if(m)return i.state.loading|=4,i.instance=m,et(m),m;o=Bg(s),(f=ci.get(f))&&ah(o,f),m=(e.ownerDocument||e).createElement("link"),et(m);var b=m;return b._p=new Promise(function(C,H){b.onload=C,b.onerror=H}),En(m,"link",o),i.state.loading|=4,ac(m,s.precedence,e),i.instance=m;case"script":return m=dr(s.src),(f=e.querySelector(Bo(m)))?(i.instance=f,et(f),f):(o=s,(f=ci.get(m))&&(o=g({},s),sh(o,f)),e=e.ownerDocument||e,f=e.createElement("script"),et(f),En(f,"link",o),e.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(o=i.instance,i.state.loading|=4,ac(o,s.precedence,e));return i.instance}function ac(e,i,s){for(var o=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=o.length?o[o.length-1]:null,m=f,b=0;b<o.length;b++){var C=o[b];if(C.dataset.precedence===i)m=C;else if(m!==f)break}m?m.parentNode.insertBefore(e,m.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(e,i.firstChild))}function ah(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function sh(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var sc=null;function Fg(e,i,s){if(sc===null){var o=new Map,f=sc=new Map;f.set(s,o)}else f=sc,o=f.get(s),o||(o=new Map,f.set(s,o));if(o.has(e))return o;for(o.set(e,null),s=s.getElementsByTagName(e),f=0;f<s.length;f++){var m=s[f];if(!(m[ma]||m[tn]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var b=m.getAttribute(i)||"";b=e+b;var C=o.get(b);C?C.push(m):o.set(b,[m])}}return o}function Hg(e,i,s){e=e.ownerDocument||e,e.head.insertBefore(s,i==="title"?e.querySelector("head > title"):null)}function Uy(e,i,s){if(s===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function Gg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Io=null;function Ly(){}function Oy(e,i,s){if(Io===null)throw Error(a(475));var o=Io;if(i.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var f=hr(s.href),m=e.querySelector(zo(f));if(m){e=m._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=rc.bind(o),e.then(o,o)),i.state.loading|=4,i.instance=m,et(m);return}m=e.ownerDocument||e,s=Bg(s),(f=ci.get(f))&&ah(s,f),m=m.createElement("link"),et(m);var b=m;b._p=new Promise(function(C,H){b.onload=C,b.onerror=H}),En(m,"link",s),i.instance=m}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(o.count++,i=rc.bind(o),e.addEventListener("load",i),e.addEventListener("error",i))}}function Py(){if(Io===null)throw Error(a(475));var e=Io;return e.stylesheets&&e.count===0&&rh(e,e.stylesheets),0<e.count?function(i){var s=setTimeout(function(){if(e.stylesheets&&rh(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(s)}}:null}function rc(){if(this.count--,this.count===0){if(this.stylesheets)rh(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var oc=null;function rh(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,oc=new Map,i.forEach(zy,e),oc=null,rc.call(e))}function zy(e,i){if(!(i.state.loading&4)){var s=oc.get(e);if(s)var o=s.get(null);else{s=new Map,oc.set(e,s);for(var f=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var b=f[m];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(s.set(b.dataset.precedence,b),o=b)}o&&s.set(null,o)}f=i.instance,b=f.getAttribute("data-precedence"),m=s.get(b)||o,m===o&&s.set(null,f),s.set(b,f),this.count++,o=rc.bind(this),f.addEventListener("load",o),f.addEventListener("error",o),m?m.parentNode.insertBefore(f,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(f,e.firstChild)),i.state.loading|=4}}var Fo={$$typeof:A,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function By(e,i,s,o,f,m,b,C){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=xt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xt(0),this.hiddenUpdates=xt(null),this.identifierPrefix=o,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=C,this.incompleteTransitions=new Map}function Vg(e,i,s,o,f,m,b,C,H,st,pt,vt){return e=new By(e,i,s,b,C,H,st,vt),i=1,m===!0&&(i|=24),m=qn(3,null,null,i),e.current=m,m.stateNode=e,i=Hu(),i.refCount++,e.pooledCache=i,i.refCount++,m.memoizedState={element:o,isDehydrated:s,cache:i},Wu(m),e}function kg(e){return e?(e=Ws,e):Ws}function Wg(e,i,s,o,f,m){f=kg(f),o.context===null?o.context=f:o.pendingContext=f,o=Ma(i),o.payload={element:s},m=m===void 0?null:m,m!==null&&(o.callback=m),s=Ea(e,o,i),s!==null&&(Qn(s,e,i),mo(s,e,i))}function jg(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<i?s:i}}function oh(e,i){jg(e,i),(e=e.alternate)&&jg(e,i)}function qg(e){if(e.tag===13){var i=ks(e,67108864);i!==null&&Qn(i,e,67108864),oh(e,67108864)}}var lc=!0;function Iy(e,i,s,o){var f=L.T;L.T=null;var m=Z.p;try{Z.p=2,lh(e,i,s,o)}finally{Z.p=m,L.T=f}}function Fy(e,i,s,o){var f=L.T;L.T=null;var m=Z.p;try{Z.p=8,lh(e,i,s,o)}finally{Z.p=m,L.T=f}}function lh(e,i,s,o){if(lc){var f=ch(o);if(f===null)Zf(e,i,o,cc,s),Yg(e,o);else if(Gy(f,e,i,s,o))o.stopPropagation();else if(Yg(e,o),i&4&&-1<Hy.indexOf(e)){for(;f!==null;){var m=va(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var b=ne(m.pendingLanes);if(b!==0){var C=m;for(C.pendingLanes|=2,C.entangledLanes|=2;b;){var H=1<<31-qt(b);C.entanglements[1]|=H,b&=~H}Ci(m),(De&6)===0&&(ql=$t()+500,Uo(0))}}break;case 13:C=ks(m,2),C!==null&&Qn(C,m,2),Yl(),oh(m,2)}if(m=ch(o),m===null&&Zf(e,i,o,cc,s),m===f)break;f=m}f!==null&&o.stopPropagation()}else Zf(e,i,o,null,s)}}function ch(e){return e=du(e),uh(e)}var cc=null;function uh(e){if(cc=null,e=ga(e),e!==null){var i=l(e);if(i===null)e=null;else{var s=i.tag;if(s===13){if(e=u(i),e!==null)return e;e=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return cc=e,null}function Xg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ae()){case je:return 2;case G:return 8;case N:case ft:return 32;case St:return 268435456;default:return 32}default:return 32}}var fh=!1,za=null,Ba=null,Ia=null,Ho=new Map,Go=new Map,Fa=[],Hy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Yg(e,i){switch(e){case"focusin":case"focusout":za=null;break;case"dragenter":case"dragleave":Ba=null;break;case"mouseover":case"mouseout":Ia=null;break;case"pointerover":case"pointerout":Ho.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Go.delete(i.pointerId)}}function Vo(e,i,s,o,f,m){return e===null||e.nativeEvent!==m?(e={blockedOn:i,domEventName:s,eventSystemFlags:o,nativeEvent:m,targetContainers:[f]},i!==null&&(i=va(i),i!==null&&qg(i)),e):(e.eventSystemFlags|=o,i=e.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),e)}function Gy(e,i,s,o,f){switch(i){case"focusin":return za=Vo(za,e,i,s,o,f),!0;case"dragenter":return Ba=Vo(Ba,e,i,s,o,f),!0;case"mouseover":return Ia=Vo(Ia,e,i,s,o,f),!0;case"pointerover":var m=f.pointerId;return Ho.set(m,Vo(Ho.get(m)||null,e,i,s,o,f)),!0;case"gotpointercapture":return m=f.pointerId,Go.set(m,Vo(Go.get(m)||null,e,i,s,o,f)),!0}return!1}function Zg(e){var i=ga(e.target);if(i!==null){var s=l(i);if(s!==null){if(i=s.tag,i===13){if(i=u(s),i!==null){e.blockedOn=i,ei(e.priority,function(){if(s.tag===13){var o=Kn();o=Ye(o);var f=ks(s,o);f!==null&&Qn(f,s,o),oh(s,o)}});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function uc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var s=ch(e.nativeEvent);if(s===null){s=e.nativeEvent;var o=new s.constructor(s.type,s);hu=o,s.target.dispatchEvent(o),hu=null}else return i=va(s),i!==null&&qg(i),e.blockedOn=s,!1;i.shift()}return!0}function Kg(e,i,s){uc(e)&&s.delete(i)}function Vy(){fh=!1,za!==null&&uc(za)&&(za=null),Ba!==null&&uc(Ba)&&(Ba=null),Ia!==null&&uc(Ia)&&(Ia=null),Ho.forEach(Kg),Go.forEach(Kg)}function fc(e,i){e.blockedOn===i&&(e.blockedOn=null,fh||(fh=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,Vy)))}var hc=null;function Qg(e){hc!==e&&(hc=e,c.unstable_scheduleCallback(c.unstable_NormalPriority,function(){hc===e&&(hc=null);for(var i=0;i<e.length;i+=3){var s=e[i],o=e[i+1],f=e[i+2];if(typeof o!="function"){if(uh(o||s)===null)continue;break}var m=va(s);m!==null&&(e.splice(i,3),i-=3,uf(m,{pending:!0,data:f,method:s.method,action:o},o,f))}}))}function ko(e){function i(H){return fc(H,e)}za!==null&&fc(za,e),Ba!==null&&fc(Ba,e),Ia!==null&&fc(Ia,e),Ho.forEach(i),Go.forEach(i);for(var s=0;s<Fa.length;s++){var o=Fa[s];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Fa.length&&(s=Fa[0],s.blockedOn===null);)Zg(s),s.blockedOn===null&&Fa.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(o=0;o<s.length;o+=3){var f=s[o],m=s[o+1],b=f[xn]||null;if(typeof m=="function")b||Qg(s);else if(b){var C=null;if(m&&m.hasAttribute("formAction")){if(f=m,b=m[xn]||null)C=b.formAction;else if(uh(f)!==null)continue}else C=b.action;typeof C=="function"?s[o+1]=C:(s.splice(o,3),o-=3),Qg(s)}}}function hh(e){this._internalRoot=e}dc.prototype.render=hh.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,o=Kn();Wg(s,o,e,i,null,null)},dc.prototype.unmount=hh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;Wg(e.current,2,null,e,null,null),Yl(),i[Hi]=null}};function dc(e){this._internalRoot=e}dc.prototype.unstable_scheduleHydration=function(e){if(e){var i=Wn();e={blockedOn:null,target:e,priority:i};for(var s=0;s<Fa.length&&i!==0&&i<Fa[s].priority;s++);Fa.splice(s,0,e),s===0&&Zg(e)}};var Jg=t.version;if(Jg!=="19.1.1")throw Error(a(527,Jg,"19.1.1"));Z.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=d(i),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var ky={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pc.isDisabled&&pc.supportsFiber)try{Vt=pc.inject(ky),Rt=pc}catch{}}return jo.createRoot=function(e,i){if(!r(e))throw Error(a(299));var s=!1,o="",f=pm,m=mm,b=gm,C=null;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(o=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(b=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(C=i.unstable_transitionCallbacks)),i=Vg(e,1,!1,null,null,s,o,f,m,b,C,null),e[Hi]=i.current,Yf(e),new hh(i)},jo.hydrateRoot=function(e,i,s){if(!r(e))throw Error(a(299));var o=!1,f="",m=pm,b=mm,C=gm,H=null,st=null;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(m=s.onUncaughtError),s.onCaughtError!==void 0&&(b=s.onCaughtError),s.onRecoverableError!==void 0&&(C=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(H=s.unstable_transitionCallbacks),s.formState!==void 0&&(st=s.formState)),i=Vg(e,1,!0,i,s??null,o,f,m,b,C,H,st),i.context=kg(null),s=i.current,o=Kn(),o=Ye(o),f=Ma(o),f.callback=null,Ea(s,f,o),s=o,i.current.lanes=s,wt(i,s),Ci(i),e[Hi]=i.current,Yf(e),new dc(i)},jo.version="19.1.1",jo}var lv;function eS(){if(lv)return mh.exports;lv=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(t){console.error(t)}}return c(),mh.exports=tS(),mh.exports}var nS=eS();/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iS=c=>c.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),aS=c=>c.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,a)=>a?a.toUpperCase():n.toLowerCase()),cv=c=>{const t=aS(c);return t.charAt(0).toUpperCase()+t.slice(1)},t_=(...c)=>c.filter((t,n,a)=>!!t&&t.trim()!==""&&a.indexOf(t)===n).join(" ").trim(),sS=c=>{for(const t in c)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var rS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oS=fn.forwardRef(({color:c="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:a,className:r="",children:l,iconNode:u,...h},d)=>fn.createElement("svg",{ref:d,...rS,width:t,height:t,stroke:c,strokeWidth:a?Number(n)*24/Number(t):n,className:t_("lucide",r),...!l&&!sS(h)&&{"aria-hidden":"true"},...h},[...u.map(([p,g])=>fn.createElement(p,g)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gd=(c,t)=>{const n=fn.forwardRef(({className:a,...r},l)=>fn.createElement(oS,{ref:l,iconNode:t,className:t_(`lucide-${iS(cv(c))}`,`lucide-${c}`,a),...r}));return n.displayName=cv(c),n};/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lS=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],cS=gd("book-open",lS);/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uS=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],fS=gd("chevron-left",uS);/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hS=[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3",key:"s6n7sd"}]],dS=gd("mic",hS),eu=({title:c,onGoBack:t})=>Tt.jsxs("div",{className:"flex items-center justify-between p-4 sm:p-6 bg-white border-b-2 border-gray-200 drop-shadow-sm sticky top-0 z-50",children:[Tt.jsx("button",{onClick:t,className:"p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200","aria-label":"Go back to homepage",children:Tt.jsx(fS,{className:"w-6 h-6 text-gray-700"})}),Tt.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-gray-800 font-['Inter']",children:c}),Tt.jsx("div",{className:"w-8 h-8"})," "]}),uv=[{char:"あ",romaji:"a"},{char:"い",romaji:"i"},{char:"う",romaji:"u"},{char:"え",romaji:"e"},{char:"お",romaji:"o"},{char:"か",romaji:"ka"},{char:"き",romaji:"ki"},{char:"く",romaji:"ku"},{char:"け",romaji:"ke"},{char:"こ",romaji:"ko"},{char:"さ",romaji:"sa"},{char:"し",romaji:"shi"},{char:"す",romaji:"su"},{char:"せ",romaji:"se"},{char:"そ",romaji:"so"},{char:"た",romaji:"ta"},{char:"ち",romaji:"chi"},{char:"つ",romaji:"tsu"},{char:"て",romaji:"te"},{char:"と",romaji:"to"},{char:"な",romaji:"na"},{char:"に",romaji:"ni"},{char:"ぬ",romaji:"nu"},{char:"ね",romaji:"ne"},{char:"の",romaji:"no"},{char:"は",romaji:"ha"},{char:"ひ",romaji:"hi"},{char:"ふ",romaji:"fu"},{char:"へ",romaji:"he"},{char:"ほ",romaji:"ho"},{char:"ま",romaji:"ma"},{char:"み",romaji:"mi"},{char:"む",romaji:"mu"},{char:"め",romaji:"me"},{char:"も",romaji:"mo"},{char:"や",romaji:"ya"},{char:" ",romaji:" "},{char:"ゆ",romaji:"yu"},{char:" ",romaji:" "},{char:"よ",romaji:"yo"},{char:"ら",romaji:"ra"},{char:"り",romaji:"ri"},{char:"る",romaji:"ru"},{char:"れ",romaji:"re"},{char:"ろ",romaji:"ro"},{char:"わ",romaji:"wa"},{char:"を",romaji:"wo"},{char:"ん",romaji:"n"},{char:" ",romaji:" "},{char:" ",romaji:" "},{char:"が",romaji:"ga"},{char:"ぎ",romaji:"gi"},{char:"ぐ",romaji:"gu"},{char:"げ",romaji:"ge"},{char:"ご",romaji:"go"},{char:"ざ",romaji:"za"},{char:"じ",romaji:"ji"},{char:"ず",romaji:"zu"},{char:"ぜ",romaji:"ze"},{char:"ぞ",romaji:"zo"},{char:"だ",romaji:"da"},{char:"ぢ",romaji:"ji"},{char:"づ",romaji:"zu"},{char:"で",romaji:"de"},{char:"ど",romaji:"do"},{char:"ば",romaji:"ba"},{char:"び",romaji:"bi"},{char:"ぶ",romaji:"bu"},{char:"べ",romaji:"be"},{char:"ぼ",romaji:"bo"},{char:"ぱ",romaji:"pa"},{char:"ぴ",romaji:"pi"},{char:"ぷ",romaji:"pu"},{char:"ぺ",romaji:"pe"},{char:"ぽ",romaji:"po"}],fv=[{char:"ア",romaji:"a"},{char:"イ",romaji:"i"},{char:"ウ",romaji:"u"},{char:"エ",romaji:"e"},{char:"オ",romaji:"o"},{char:"カ",romaji:"ka"},{char:"キ",romaji:"ki"},{char:"ク",romaji:"ku"},{char:"ケ",romaji:"ke"},{char:"コ",romaji:"ko"},{char:"サ",romaji:"sa"},{char:"シ",romaji:"shi"},{char:"ス",romaji:"su"},{char:"セ",romaji:"se"},{char:"ソ",romaji:"so"},{char:"タ",romaji:"ta"},{char:"チ",romaji:"chi"},{char:"ツ",romaji:"tsu"},{char:"テ",romaji:"te"},{char:"ト",romaji:"to"},{char:"ナ",romaji:"na"},{char:"ニ",romaji:"ni"},{char:"ヌ",romaji:"nu"},{char:"ネ",romaji:"ne"},{char:"ノ",romaji:"no"},{char:"ハ",romaji:"ha"},{char:"ヒ",romaji:"hi"},{char:"フ",romaji:"fu"},{char:"ヘ",romaji:"he"},{char:"ホ",romaji:"ho"},{char:"マ",romaji:"ma"},{char:"ミ",romaji:"mi"},{char:"ム",romaji:"mu"},{char:"メ",romaji:"me"},{char:"モ",romaji:"mo"},{char:"ヤ",romaji:"ya"},{char:" ",romaji:" "},{char:"ユ",romaji:"yu"},{char:" ",romaji:" "},{char:"ヨ",romaji:"yo"},{char:"ラ",romaji:"ra"},{char:"リ",romaji:"ri"},{char:"ル",romaji:"ru"},{char:"レ",romaji:"re"},{char:"ロ",romaji:"ro"},{char:"ワ",romaji:"wa"},{char:"ヲ",romaji:"wo"},{char:"ン",romaji:"n"},{char:" ",romaji:" "},{char:" ",romaji:" "},{char:"ガ",romaji:"ga"},{char:"ギ",romaji:"gi"},{char:"グ",romaji:"gu"},{char:"ゲ",romaji:"ge"},{char:"ゴ",romaji:"go"},{char:"ザ",romaji:"za"},{char:"ジ",romaji:"ji"},{char:"ズ",romaji:"zu"},{char:"ゼ",romaji:"ze"},{char:"ゾ",romaji:"zo"},{char:"ダ",romaji:"da"},{char:"ヂ",romaji:"ji"},{char:"ヅ",romaji:"zu"},{char:"デ",romaji:"de"},{char:"ド",romaji:"do"},{char:"バ",romaji:"ba"},{char:"ビ",romaji:"bi"},{char:"ブ",romaji:"bu"},{char:"ベ",romaji:"be"},{char:"ボ",romaji:"bo"},{char:"パ",romaji:"pa"},{char:"ピ",romaji:"pi"},{char:"プ",romaji:"pu"},{char:"ペ",romaji:"pe"},{char:"ポ",romaji:"po"}],mc=c=>Tt.jsx("div",{className:"grid grid-cols-5 gap-2",children:c.map((t,n)=>Tt.jsxs("div",{className:"flex flex-col items-center justify-center p-2 border rounded shadow text-center cursor-pointer hover:bg-gray-100 transition-colors",children:[Tt.jsx("span",{className:"text-2xl font-bold",children:t.char}),Tt.jsx("span",{className:"text-sm text-gray-500",children:t.romaji})]},n))}),pS=({onGoBack:c})=>{const[t,n]=fn.useState("hiragana");return Tt.jsxs("div",{className:"p-4 md:p-8",children:[Tt.jsx(eu,{title:"Hiragana & Katakana",onGoBack:c}),Tt.jsxs("div",{className:"md:hidden mt-4",children:[Tt.jsxs("div",{className:"flex justify-center mb-4",children:[Tt.jsx("button",{className:`px-4 py-2 text-xl font-bold rounded-l-lg ${t==="hiragana"?"bg-blue-500 text-white":"bg-gray-200"}`,onClick:()=>n("hiragana"),children:"Hiragana"}),Tt.jsx("button",{className:`px-4 py-2 text-xl font-bold rounded-r-lg ${t==="katakana"?"bg-blue-500 text-white":"bg-gray-200"}`,onClick:()=>n("katakana"),children:"Katakana"})]}),t==="hiragana"&&Tt.jsxs("div",{className:"bg-white p-4 rounded-lg shadow-lg",children:[Tt.jsx("h2",{className:"text-2xl font-bold mb-4 text-center",children:"Hiragana"}),mc(uv)]}),t==="katakana"&&Tt.jsxs("div",{className:"bg-white p-4 rounded-lg shadow-lg",children:[Tt.jsx("h2",{className:"text-2xl font-bold mb-4 text-center",children:"Katakana"}),mc(fv)]})]}),Tt.jsxs("div",{className:"hidden md:flex md:space-x-8 mt-4",children:[Tt.jsxs("div",{className:"w-1/2",children:[Tt.jsx("h2",{className:"text-3xl font-bold mb-4 text-center",children:"Hiragana"}),mc(uv)]}),Tt.jsxs("div",{className:"w-1/2",children:[Tt.jsx("h2",{className:"text-3xl font-bold mb-4 text-center",children:"Katakana"}),mc(fv)]})]})]})},xh={n5:[{kanji:"一",reading:"いち/ひと",meaning:"one",exampleWords:["一つ (ひとつ)","一日 (ついたち)"]},{kanji:"二",reading:"に/ふた",meaning:"two",exampleWords:["二つ (ふたつ)","二日 (ふつか)"]},{kanji:"三",reading:"さん/み",meaning:"three",exampleWords:["三つ (みっつ)","三日 (みっか)"]},{kanji:"四",reading:"よん/し",meaning:"four",exampleWords:["四つ (よっつ)","四日 (よっか)"]},{kanji:"五",reading:"ご/いつ",meaning:"five",exampleWords:["五つ (いつつ)","五日 (いつか)"]},{kanji:"六",reading:"ろく/む",meaning:"six",exampleWords:["六つ (むっつ)","六日 (むいか)"]},{kanji:"七",reading:"なな/しち",meaning:"seven",exampleWords:["七つ (ななつ)","七日 (なのか)"]},{kanji:"八",reading:"はち/や",meaning:"eight",exampleWords:["八つ (やっつ)","八日 (ようか)"]},{kanji:"九",reading:"きゅう/ここの",meaning:"nine",exampleWords:["九つ (ここのつ)","九日 (ここのか)"]},{kanji:"十",reading:"じゅう/とお",meaning:"ten",exampleWords:["十 (とお)","十日 (とおか)"]},{kanji:"百",reading:"ひゃく",meaning:"hundred",exampleWords:["百円 (ひゃくえん)","三百 (さんびゃく)"]},{kanji:"千",reading:"せん",meaning:"thousand",exampleWords:["千円 (せんえん)","三千 (さんぜん)"]},{kanji:"万",reading:"まん",meaning:"ten thousand",exampleWords:["一万円 (いちまんえん)","十万 (じゅうまん)"]},{kanji:"円",reading:"えん",meaning:"yen/circle",exampleWords:["百円 (ひゃくえん)","円い (まるい)"]},{kanji:"日",reading:"にち/び/ひ",meaning:"day/sun",exampleWords:["日本 (にほん)","日曜日 (にちようび)"]},{kanji:"月",reading:"つき/げつ",meaning:"moon/month",exampleWords:["月曜日 (げつようび)","今月 (こんげつ)"]},{kanji:"火",reading:"か/ひ",meaning:"fire",exampleWords:["火曜日 (かようび)","花火 (はなび)"]},{kanji:"水",reading:"すい/みず",meaning:"water",exampleWords:["水曜日 (すいようび)","水 (みず)"]},{kanji:"木",reading:"もく/き",meaning:"tree/wood",exampleWords:["木曜日 (もくようび)","木 (き)"]},{kanji:"金",reading:"きん/かね",meaning:"gold/money",exampleWords:["金曜日 (きんようび)","お金 (おかね)"]},{kanji:"土",reading:"ど/つち",meaning:"earth/soil",exampleWords:["土曜日 (どようび)","土地 (とち)"]},{kanji:"本",reading:"ほん",meaning:"book/origin",exampleWords:["日本 (にほん)","本 (ほん)"]},{kanji:"語",reading:"ご",meaning:"language/word",exampleWords:["日本語 (にほんご)","英語 (えいご)"]},{kanji:"人",reading:"じん/ひと",meaning:"person",exampleWords:["日本人 (にほんじん)","一人 (ひとり)"]},{kanji:"学",reading:"がく",meaning:"learn/study",exampleWords:["学生 (がくせい)","大学 (だいがく)"]},{kanji:"校",reading:"こう",meaning:"school",exampleWords:["学校 (がっこう)","高校 (こうこう)"]},{kanji:"生",reading:"せい",meaning:"life/birth",exampleWords:["学生 (がくせい)","先生 (せんせい)"]},{kanji:"先",reading:"せん",meaning:"previous/ahead",exampleWords:["先生 (せんせい)","先月 (せんげつ)"]},{kanji:"名",reading:"めい",meaning:"name",exampleWords:["名前 (なまえ)","有名 (ゆうめい)"]},{kanji:"大",reading:"だい/おお",meaning:"big",exampleWords:["大学 (だいがく)","大きい (おおきい)"]},{kanji:"小",reading:"しょう/ちい",meaning:"small",exampleWords:["小学校 (しょうがっこう)","小さい (ちいさい)"]},{kanji:"中",reading:"ちゅう/なか",meaning:"middle/inside",exampleWords:["中国 (ちゅうごく)","中 (なか)"]},{kanji:"高",reading:"こう/たか",meaning:"high/expensive",exampleWords:["高校 (こうこう)","高い (たかい)"]},{kanji:"国",reading:"こく/くに",meaning:"country",exampleWords:["外国 (がいこく)","国 (くに)"]},{kanji:"山",reading:"やま/さん",meaning:"mountain",exampleWords:["山 (やま)","富士山 (ふじさん)"]},{kanji:"川",reading:"かわ",meaning:"river",exampleWords:["川 (かわ)","小川 (おがわ)"]},{kanji:"田",reading:"た/だ",meaning:"rice field",exampleWords:["山田 (やまだ)","水田 (すいでん)"]},{kanji:"時",reading:"じ/とき",meaning:"time",exampleWords:["時間 (じかん)","時々 (ときどき)"]},{kanji:"分",reading:"ふん/ぶん",meaning:"minute/part",exampleWords:["五分 (ごふん)","自分 (じぶん)"]},{kanji:"半",reading:"はん",meaning:"half",exampleWords:["三時半 (さんじはん)","半分 (はんぶん)"]},{kanji:"上",reading:"じょう/うえ",meaning:"up/above",exampleWords:["上 (うえ)","上手 (じょうず)"]},{kanji:"下",reading:"か/した",meaning:"down/below",exampleWords:["下 (した)","下手 (へた)"]},{kanji:"左",reading:"さ/ひだり",meaning:"left",exampleWords:["左 (ひだり)","左側 (ひだりがわ)"]},{kanji:"右",reading:"う/みぎ",meaning:"right",exampleWords:["右 (みぎ)","右側 (みぎがわ)"]},{kanji:"東",reading:"とう/ひがし",meaning:"east",exampleWords:["東京 (とうきょう)","東 (ひがし)"]},{kanji:"西",reading:"せい/にし",meaning:"west",exampleWords:["西 (にし)","西洋 (せいよう)"]},{kanji:"南",reading:"なん/みなみ",meaning:"south",exampleWords:["南 (みなみ)","南口 (みなみぐち)"]},{kanji:"北",reading:"ほく/きた",meaning:"north",exampleWords:["北 (きた)","北海道 (ほっかいどう)"]},{kanji:"男",reading:"だん/おとこ",meaning:"man",exampleWords:["男性 (だんせい)","男の子 (おとこのこ)"]},{kanji:"女",reading:"じょ/おんな",meaning:"woman",exampleWords:["女性 (じょせい)","女の子 (おんなのこ)"]},{kanji:"見",reading:"けん/み",meaning:"see",exampleWords:["見る (みる)","見学 (けんがく)"]},{kanji:"行",reading:"こう/い",meaning:"go",exampleWords:["行く (いく)","旅行 (りょこう)"]},{kanji:"来",reading:"らい/く",meaning:"come",exampleWords:["来る (くる)","来月 (らいげつ)"]},{kanji:"出",reading:"しゅつ/で",meaning:"go out",exampleWords:["出る (でる)","出口 (でぐち)"]},{kanji:"入",reading:"にゅう/はい",meaning:"enter",exampleWords:["入る (はいる)","入口 (いりぐち)"]},{kanji:"口",reading:"こう/くち",meaning:"mouth",exampleWords:["入口 (いりぐち)","口 (くち)"]},{kanji:"車",reading:"しゃ/くるま",meaning:"car",exampleWords:["電車 (でんしゃ)","車 (くるま)"]},{kanji:"食",reading:"しょく/た",meaning:"eat",exampleWords:["食べる (たべる)","食事 (しょくじ)"]},{kanji:"飲",reading:"いん/の",meaning:"drink",exampleWords:["飲む (のむ)","飲料水 (いんりょうすい)"]},{kanji:"買",reading:"かい/か",meaning:"buy",exampleWords:["買う (かう)","買い物 (かいもの)"]},{kanji:"読",reading:"どく/よ",meaning:"read",exampleWords:["読む (よむ)","読書 (どくしょ)"]},{kanji:"書",reading:"しょ/か",meaning:"write",exampleWords:["書く (かく)","図書館 (としょかん)"]},{kanji:"聞",reading:"ぶん/き",meaning:"listen/ask",exampleWords:["聞く (きく)","新聞 (しんぶん)"]},{kanji:"話",reading:"わ/はな",meaning:"talk",exampleWords:["話す (はなす)","会話 (かいわ)"]},{kanji:"会",reading:"かい/あ",meaning:"meet",exampleWords:["会う (あう)","会社 (かいしゃ)"]},{kanji:"今",reading:"こん/いま",meaning:"now",exampleWords:["今 (いま)","今日 (きょう)"]},{kanji:"週",reading:"しゅう",meaning:"week",exampleWords:["今週 (こんしゅう)","来週 (らいしゅう)"]},{kanji:"年",reading:"ねん/とし",meaning:"year",exampleWords:["今年 (ことし)","来年 (らいねん)"]},{kanji:"前",reading:"ぜん/まえ",meaning:"before/front",exampleWords:["午前 (ごぜん)","前 (まえ)"]},{kanji:"後",reading:"ご/あと",meaning:"after/behind",exampleWords:["午後 (ごご)","後 (あと)"]},{kanji:"間",reading:"かん/あいだ",meaning:"interval/between",exampleWords:["時間 (じかん)","間 (あいだ)"]},{kanji:"毎",reading:"まい",meaning:"every",exampleWords:["毎日 (まいにち)","毎週 (まいしゅう)"]}],n4:[{kanji:"長",reading:"ちょう/なが",meaning:"long/leader",exampleWords:["長い (ながい)","社長 (しゃちょう)"]},{kanji:"新",reading:"しん/あたら",meaning:"new",exampleWords:["新しい (あたらしい)","新聞 (しんぶん)"]},{kanji:"古",reading:"こ/ふる",meaning:"old",exampleWords:["古い (ふるい)","中古 (ちゅうこ)"]},{kanji:"友",reading:"ゆう/とも",meaning:"friend",exampleWords:["友達 (ともだち)","親友 (しんゆう)"]},{kanji:"母",reading:"ぼ/はは",meaning:"mother",exampleWords:["母 (はは)","お母さん (おかあさん)"]},{kanji:"父",reading:"ふ/ちち",meaning:"father",exampleWords:["父 (ちち)","お父さん (おとうさん)"]},{kanji:"兄",reading:"けい/あに",meaning:"older brother",exampleWords:["兄 (あに)","お兄さん (おにいさん)"]},{kanji:"弟",reading:"だい/おとうと",meaning:"younger brother",exampleWords:["弟 (おとうと)","兄弟 (きょうだい)"]},{kanji:"姉",reading:"し/あね",meaning:"older sister",exampleWords:["姉 (あね)","お姉さん (おねえさん)"]},{kanji:"妹",reading:"まい/いもうと",meaning:"younger sister",exampleWords:["妹 (いもうと)","姉妹 (しまい)"]},{kanji:"家",reading:"か/いえ",meaning:"house/home",exampleWords:["家 (いえ)","家族 (かぞく)"]},{kanji:"族",reading:"ぞく",meaning:"family/tribe",exampleWords:["家族 (かぞく)","民族 (みんぞく)"]},{kanji:"親",reading:"しん/おや",meaning:"parent/intimate",exampleWords:["親 (おや)","親しい (したしい)"]},{kanji:"知",reading:"ち/し",meaning:"know",exampleWords:["知る (しる)","知らせる (しらせる)"]},{kanji:"好",reading:"こう/す",meaning:"like/favorite",exampleWords:["好き (すき)","大好物 (だいこうぶつ)"]},{kanji:"安",reading:"あん/やす",meaning:"cheap/peaceful",exampleWords:["安い (やすい)","安心 (あんしん)"]},{kanji:"広",reading:"こう/ひろ",meaning:"wide/spacious",exampleWords:["広い (ひろい)","広場 (ひろば)"]},{kanji:"店",reading:"てん/みせ",meaning:"shop",exampleWords:["店 (みせ)","店員 (てんいん)"]},{kanji:"駅",reading:"えき",meaning:"station",exampleWords:["駅 (えき)","駅前 (えきまえ)"]},{kanji:"道",reading:"どう/みち",meaning:"road/way",exampleWords:["道 (みち)","茶道 (さどう)"]},{kanji:"曜",reading:"よう",meaning:"weekday",exampleWords:["日曜日 (にちようび)","何曜日 (なんようび)"]},{kanji:"朝",reading:"ちょう/あさ",meaning:"morning",exampleWords:["朝 (あさ)","朝食 (ちょうしょく)"]},{kanji:"昼",reading:"ちゅう/ひる",meaning:"noon",exampleWords:["昼 (ひる)","昼休み (ひるやすみ)"]},{kanji:"夜",reading:"や/よる",meaning:"night",exampleWords:["夜 (よる)","今夜 (こんや)"]},{kanji:"週",reading:"しゅう",meaning:"week",exampleWords:["先週 (せんしゅう)","来週 (らいしゅう)"]},{kanji:"今",reading:"こん/いま",meaning:"now",exampleWords:["今 (いま)","今月 (こんげつ)"]},{kanji:"来",reading:"らい/く",meaning:"come/next",exampleWords:["来る (くる)","来週 (らいしゅう)"]},{kanji:"帰",reading:"き/かえ",meaning:"return",exampleWords:["帰る (かえる)","帰国 (きこく)"]},{kanji:"電",reading:"でん",meaning:"electricity",exampleWords:["電気 (でんき)","電話 (でんわ)"]},{kanji:"話",reading:"わ/はな",meaning:"talk/story",exampleWords:["話す (はなす)","電話 (でんわ)"]},{kanji:"車",reading:"しゃ/くるま",meaning:"car",exampleWords:["電車 (でんしゃ)","自動車 (じどうしゃ)"]},{kanji:"手",reading:"しゅ/て",meaning:"hand",exampleWords:["手 (て)","手紙 (てがみ)"]},{kanji:"紙",reading:"し/かみ",meaning:"paper",exampleWords:["手紙 (てがみ)","紙 (かみ)"]},{kanji:"私",reading:"し/わたし",meaning:"I/private",exampleWords:["私 (わたし)","私立 (しりつ)"]},{kanji:"会",reading:"かい/あ",meaning:"meet",exampleWords:["会う (あう)","会社 (かいしゃ)"]},{kanji:"社",reading:"しゃ",meaning:"company",exampleWords:["会社 (かいしゃ)","社会 (しゃかい)"]},{kanji:"員",reading:"いん",meaning:"member",exampleWords:["会社員 (かいしゃいん)","店員 (てんいん)"]},{kanji:"物",reading:"ぶつ/もの",meaning:"thing",exampleWords:["物 (もの)","買い物 (かいもの)"]},{kanji:"食",reading:"しょく/た",meaning:"eat",exampleWords:["食べる (たべる)","食べ物 (たべもの)"]},{kanji:"飲",reading:"いん/の",meaning:"drink",exampleWords:["飲む (のむ)","飲み物 (のみもの)"]},{kanji:"見",reading:"けん/み",meaning:"see",exampleWords:["見る (みる)","見学 (けんがく)"]},{kanji:"聞",reading:"ぶん/き",meaning:"hear/listen",exampleWords:["聞く (きく)","新聞 (しんぶん)"]},{kanji:"買",reading:"かい/か",meaning:"buy",exampleWords:["買う (かう)","買い物 (かいもの)"]},{kanji:"読",reading:"どく/よ",meaning:"read",exampleWords:["読む (よむ)","読書 (どくしょ)"]},{kanji:"書",reading:"しょ/か",meaning:"write",exampleWords:["書く (かく)","図書館 (としょかん)"]},{kanji:"立",reading:"りつ/た",meaning:"stand",exampleWords:["立つ (たつ)","国立 (こくりつ)"]},{kanji:"入",reading:"にゅう/はい",meaning:"enter",exampleWords:["入る (はいる)","入学 (にゅうがく)"]},{kanji:"出",reading:"しゅつ/で",meaning:"exit",exampleWords:["出る (でる)","出口 (でぐち)"]},{kanji:"学",reading:"がく/まな",meaning:"learn",exampleWords:["学校 (がっこう)","学生 (がくせい)"]},{kanji:"校",reading:"こう",meaning:"school",exampleWords:["学校 (がっこう)","小学校 (しょうがっこう)"]},{kanji:"生",reading:"せい/う",meaning:"life/birth",exampleWords:["学生 (がくせい)","生まれる (うまれる)"]},{kanji:"先",reading:"せん",meaning:"previous/ahead",exampleWords:["先生 (せんせい)","先週 (せんしゅう)"]},{kanji:"年",reading:"ねん/とし",meaning:"year",exampleWords:["来年 (らいねん)","一年生 (いちねんせい)"]},{kanji:"何",reading:"か/なん",meaning:"what",exampleWords:["何 (なに)","何時 (なんじ)"]},{kanji:"行",reading:"こう/い",meaning:"go",exampleWords:["行く (いく)","旅行 (りょこう)"]},{kanji:"国",reading:"こく/くに",meaning:"country",exampleWords:["国 (くに)","外国 (がいこく)"]},{kanji:"外",reading:"がい/そと",meaning:"outside",exampleWords:["外国 (がいこく)","外 (そと)"]},{kanji:"気",reading:"き",meaning:"spirit/air",exampleWords:["元気 (げんき)","天気 (てんき)"]},{kanji:"天",reading:"てん",meaning:"heaven",exampleWords:["天気 (てんき)","天国 (てんごく)"]},{kanji:"雨",reading:"う/あめ",meaning:"rain",exampleWords:["雨 (あめ)","大雨 (おおあめ)"]},{kanji:"空",reading:"くう/そら",meaning:"sky/empty",exampleWords:["空 (そら)","空港 (くうこう)"]},{kanji:"名",reading:"めい/な",meaning:"name",exampleWords:["名前 (なまえ)","有名 (ゆうめい)"]},{kanji:"男",reading:"だん/おとこ",meaning:"man",exampleWords:["男の子 (おとこのこ)","男性 (だんせい)"]},{kanji:"女",reading:"じょ/おんな",meaning:"woman",exampleWords:["女の子 (おんなのこ)","女性 (じょせい)"]},{kanji:"大",reading:"だい/おお",meaning:"big",exampleWords:["大きい (おおきい)","大学 (だいがく)"]},{kanji:"小",reading:"しょう/ちい",meaning:"small",exampleWords:["小さい (ちいさい)","小学校 (しょうがっこう)"]},{kanji:"高",reading:"こう/たか",meaning:"high/expensive",exampleWords:["高い (たかい)","高校 (こうこう)"]},{kanji:"安",reading:"あん/やす",meaning:"cheap/peaceful",exampleWords:["安い (やすい)","安全 (あんぜん)"]},{kanji:"長",reading:"ちょう/なが",meaning:"long/leader",exampleWords:["長い (ながい)","社長 (しゃちょう)"]},{kanji:"新",reading:"しん/あたら",meaning:"new",exampleWords:["新しい (あたらしい)","新聞 (しんぶん)"]},{kanji:"古",reading:"こ/ふる",meaning:"old",exampleWords:["古い (ふるい)","中古 (ちゅうこ)"]},{kanji:"多",reading:"た/おお",meaning:"many",exampleWords:["多い (おおい)","多数 (たすう)"]},{kanji:"少",reading:"しょう/すこ",meaning:"few/little",exampleWords:["少し (すこし)","少年 (しょうねん)"]},{kanji:"明",reading:"めい/あか",meaning:"bright",exampleWords:["明るい (あかるい)","明日 (あした)"]},{kanji:"暗",reading:"あん/くら",meaning:"dark",exampleWords:["暗い (くらい)","暗号 (あんごう)"]},{kanji:"好",reading:"こう/す",meaning:"like",exampleWords:["好き (すき)","大好物 (だいこうぶつ)"]},{kanji:"時",reading:"じ/とき",meaning:"time",exampleWords:["時間 (じかん)","時々 (ときどき)"]},{kanji:"間",reading:"かん/あいだ",meaning:"interval",exampleWords:["間 (あいだ)","人間 (にんげん)"]},{kanji:"前",reading:"ぜん/まえ",meaning:"before/front",exampleWords:["前 (まえ)","午前 (ごぜん)"]},{kanji:"後",reading:"ご/あと",meaning:"after/behind",exampleWords:["後 (あと)","午後 (ごご)"]},{kanji:"中",reading:"ちゅう/なか",meaning:"middle",exampleWords:["中 (なか)","中国 (ちゅうごく)"]},{kanji:"上",reading:"じょう/うえ",meaning:"above",exampleWords:["上 (うえ)","上手 (じょうず)"]},{kanji:"下",reading:"か/した",meaning:"below",exampleWords:["下 (した)","下手 (へた)"]},{kanji:"左",reading:"さ/ひだり",meaning:"left",exampleWords:["左 (ひだり)","左手 (ひだりて)"]},{kanji:"右",reading:"う/みぎ",meaning:"right",exampleWords:["右 (みぎ)","右手 (みぎて)"]},{kanji:"東",reading:"とう/ひがし",meaning:"east",exampleWords:["東 (ひがし)","東京 (とうきょう)"]},{kanji:"西",reading:"せい/にし",meaning:"west",exampleWords:["西 (にし)","関西 (かんさい)"]},{kanji:"南",reading:"なん/みなみ",meaning:"south",exampleWords:["南 (みなみ)","南北 (なんぼく)"]},{kanji:"北",reading:"ほく/きた",meaning:"north",exampleWords:["北 (きた)","北海道 (ほっかいどう)"]},{kanji:"口",reading:"こう/くち",meaning:"mouth",exampleWords:["入口 (いりぐち)","出口 (でぐち)"]},{kanji:"目",reading:"もく/め",meaning:"eye",exampleWords:["目 (め)","目薬 (めぐすり)"]},{kanji:"耳",reading:"じ/みみ",meaning:"ear",exampleWords:["耳 (みみ)","耳鼻科 (じびか)"]},{kanji:"手",reading:"しゅ/て",meaning:"hand",exampleWords:["手 (て)","上手 (じょうず)"]},{kanji:"足",reading:"そく/あし",meaning:"foot/leg",exampleWords:["足 (あし)","遠足 (えんそく)"]},{kanji:"力",reading:"りょく/ちから",meaning:"power",exampleWords:["力 (ちから)","力仕事 (ちからしごと)"]},{kanji:"心",reading:"しん/こころ",meaning:"heart/mind",exampleWords:["心 (こころ)","安心 (あんしん)"]},{kanji:"体",reading:"たい/からだ",meaning:"body",exampleWords:["体 (からだ)","体育 (たいいく)"]},{kanji:"首",reading:"しゅ/くび",meaning:"neck",exampleWords:["首 (くび)","首都 (しゅと)"]},{kanji:"頭",reading:"とう/あたま",meaning:"head",exampleWords:["頭 (あたま)","頭痛 (ずつう)"]},{kanji:"元",reading:"げん/もと",meaning:"origin",exampleWords:["元気 (げんき)","元日 (がんじつ)"]},{kanji:"病",reading:"びょう",meaning:"sick",exampleWords:["病気 (びょうき)","病院 (びょういん)"]},{kanji:"院",reading:"いん",meaning:"institution",exampleWords:["病院 (びょういん)","入院 (にゅういん)"]}],n3:[]},mS=({onGoBack:c})=>{const[t,n]=fn.useState(null),[a,r]=fn.useState(null),l=()=>Tt.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6",children:Object.keys(xh).map(d=>Tt.jsxs("div",{onClick:()=>n(d),className:"flex flex-col items-center justify-center p-8 bg-blue-100 rounded-2xl shadow-lg cursor-pointer hover:bg-blue-200 transition-colors",children:[Tt.jsxs("h2",{className:"text-5xl font-bold text-blue-800",children:["JLPT ",d.toUpperCase()]}),Tt.jsxs("p",{className:"mt-2 text-xl text-blue-600",children:[xh[d].length," Kanji"]})]},d))}),u=({level:d})=>{const p=xh[d];return Tt.jsxs("div",{className:"flex flex-col items-center justify-center w-full p-6",children:[Tt.jsx("button",{onClick:()=>{n(null),r(null)},className:"mb-4 text-blue-600 hover:text-blue-800 self-start",children:"← Back to Levels"}),Tt.jsxs("h2",{className:"text-4xl font-bold text-blue-900 mb-6",children:["JLPT ",d.toUpperCase()," Kanji"]}),Tt.jsx("div",{className:"grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-4 w-full",children:p.map((g,_)=>Tt.jsx("div",{onClick:()=>r(g),className:"flex items-center justify-center p-2 bg-blue-100 rounded-lg shadow-md cursor-pointer aspect-square hover:bg-blue-200 transition-colors",children:Tt.jsx("span",{className:"text-4xl sm:text-5xl font-bold text-blue-900",children:g.kanji})},_))})]})},h=({kanji:d})=>Tt.jsxs("div",{className:"flex flex-col items-center justify-center w-full p-6 text-center",children:[Tt.jsx("button",{onClick:()=>r(null),className:"mb-4 text-blue-600 hover:text-blue-800 self-start",children:"← Back to Kanji Grid"}),Tt.jsxs("div",{className:"bg-blue-100 p-8 rounded-2xl shadow-lg w-full max-w-lg",children:[Tt.jsx("div",{className:"text-9xl sm:text-[12rem] font-bold text-blue-900 drop-shadow-md",children:d.kanji}),Tt.jsxs("p",{className:"mt-4 text-3xl sm:text-4xl font-bold text-blue-700",children:["Reading: ",d.reading]}),Tt.jsxs("p",{className:"mt-2 text-xl sm:text-2xl text-blue-600",children:["Meaning: ",d.meaning]}),Tt.jsxs("div",{className:"mt-6 text-left",children:[Tt.jsx("h3",{className:"text-lg font-semibold text-blue-800",children:"Example Words:"}),Tt.jsx("ul",{className:"list-disc list-inside mt-2 text-blue-600",children:d.exampleWords.map((p,g)=>Tt.jsx("li",{children:p},g))})]})]})]});return Tt.jsxs("div",{className:"flex flex-col items-center justify-center h-full p-6 font-['Inter']",children:[Tt.jsx(eu,{title:"Kanji Guide",onGoBack:c}),Tt.jsxs("div",{className:"flex-grow flex flex-col items-center justify-center w-full",children:[!t&&Tt.jsx(l,{}),t&&!a&&Tt.jsx(u,{level:t}),a&&Tt.jsx(h,{kanji:a})]})]})},gS=({onGoBack:c})=>{const[t,n]=fn.useState(0),[a,r]=fn.useState(0),[l,u]=fn.useState(null),[h,d]=fn.useState(!1),[p,g]=fn.useState(!1),_=[{japanese:"ありがとう",english:"Thank you"},{japanese:"はい",english:"Yes"},{japanese:"いいえ",english:"No"},{japanese:"おはよう",english:"Good morning"},{japanese:"こんにちは",english:"Hello"},{japanese:"おやすみ",english:"Good night"}],v=_[a],S=()=>{const T=[..._],A=v.english;return[...T.filter(P=>P.english!==A).sort(()=>.5-Math.random()).slice(0,3).map(P=>P.english),A].sort(()=>.5-Math.random())},[M,E]=fn.useState(S()),x=T=>{u(T),T===v.english?(d(!0),n(t+1)):g(!0)},y=()=>{d(!1),g(!1),u(null),r((a+1)%_.length),E(S())};return Tt.jsxs("div",{className:"flex flex-col items-center justify-center p-6 h-full font-['Inter']",children:[Tt.jsx(eu,{title:"Vocabulary Quiz",onGoBack:c}),Tt.jsxs("div",{className:"flex-grow flex flex-col items-center justify-center text-center w-full max-w-2xl",children:[Tt.jsx("div",{className:"text-5xl sm:text-7xl font-bold text-blue-800 mb-8",children:v.japanese}),Tt.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 w-full",children:M.map((T,A)=>Tt.jsx("button",{onClick:()=>x(T),disabled:h||p,className:`p-4 rounded-xl border-2 text-lg sm:text-xl font-medium transition-all duration-300 transform hover:scale-105
                            ${l===T&&h?"bg-green-500 text-white border-green-500":""}
                            ${l===T&&p?"bg-red-500 text-white border-red-500":""}
                            ${l?"":"bg-gray-100 border-gray-300 hover:bg-gray-200"}
                            `,children:T},A))}),(h||p)&&Tt.jsx("button",{onClick:y,className:"mt-8 px-8 py-3 bg-blue-600 text-white font-bold rounded-full text-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105",children:"Next Word"})]})]})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vd="165",vS=0,hv=1,_S=2,e_=1,n_=2,fa=3,Ja=0,Vn=1,ha=2,Ka=0,Or=1,dv=2,pv=3,mv=4,xS=5,Rs=100,yS=101,SS=102,MS=103,ES=104,bS=200,TS=201,AS=202,wS=203,od=204,ld=205,RS=206,CS=207,DS=208,NS=209,US=210,LS=211,OS=212,PS=213,zS=214,BS=0,IS=1,FS=2,qc=3,HS=4,GS=5,VS=6,kS=7,i_=0,WS=1,jS=2,Qa=0,qS=1,XS=2,YS=3,ZS=4,KS=5,QS=6,JS=7,a_=300,Br=301,Ir=302,cd=303,ud=304,nu=306,fd=1e3,Ns=1001,hd=1002,hi=1003,$S=1004,gc=1005,Mi=1006,yh=1007,Us=1008,$a=1009,tM=1010,eM=1011,Xc=1012,s_=1013,Fr=1014,Za=1015,iu=1016,r_=1017,o_=1018,Hr=1020,nM=35902,iM=1021,aM=1022,zi=1023,sM=1024,rM=1025,Pr=1026,Gr=1027,oM=1028,l_=1029,lM=1030,c_=1031,u_=1033,Sh=33776,Mh=33777,Eh=33778,bh=33779,gv=35840,vv=35841,_v=35842,xv=35843,yv=36196,Sv=37492,Mv=37496,Ev=37808,bv=37809,Tv=37810,Av=37811,wv=37812,Rv=37813,Cv=37814,Dv=37815,Nv=37816,Uv=37817,Lv=37818,Ov=37819,Pv=37820,zv=37821,Th=36492,Bv=36494,Iv=36495,cM=36283,Fv=36284,Hv=36285,Gv=36286,uM=3200,fM=3201,f_=0,hM=1,Ya="",Li="srgb",es="srgb-linear",_d="display-p3",au="display-p3-linear",Yc="linear",Ve="srgb",Zc="rec709",Kc="p3",pr=7680,Vv=519,dM=512,pM=513,mM=514,h_=515,gM=516,vM=517,_M=518,xM=519,kv=35044,Wv="300 es",da=2e3,Qc=2001;class kr{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(n)===-1&&a[t].push(n)}hasEventListener(t,n){if(this._listeners===void 0)return!1;const a=this._listeners;return a[t]!==void 0&&a[t].indexOf(n)!==-1}removeEventListener(t,n){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const l=r.indexOf(n);l!==-1&&r.splice(l,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const a=this._listeners[t.type];if(a!==void 0){t.target=this;const r=a.slice(0);for(let l=0,u=r.length;l<u;l++)r[l].call(this,t);t.target=null}}}const Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ah=Math.PI/180,dd=180/Math.PI;function il(){const c=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Cn[c&255]+Cn[c>>8&255]+Cn[c>>16&255]+Cn[c>>24&255]+"-"+Cn[t&255]+Cn[t>>8&255]+"-"+Cn[t>>16&15|64]+Cn[t>>24&255]+"-"+Cn[n&63|128]+Cn[n>>8&255]+"-"+Cn[n>>16&255]+Cn[n>>24&255]+Cn[a&255]+Cn[a>>8&255]+Cn[a>>16&255]+Cn[a>>24&255]).toLowerCase()}function Gn(c,t,n){return Math.max(t,Math.min(n,c))}function yM(c,t){return(c%t+t)%t}function wh(c,t,n){return(1-n)*c+n*t}function qo(c,t){switch(t.constructor){case Float32Array:return c;case Uint32Array:return c/4294967295;case Uint16Array:return c/65535;case Uint8Array:return c/255;case Int32Array:return Math.max(c/2147483647,-1);case Int16Array:return Math.max(c/32767,-1);case Int8Array:return Math.max(c/127,-1);default:throw new Error("Invalid component type.")}}function Fn(c,t){switch(t.constructor){case Float32Array:return c;case Uint32Array:return Math.round(c*4294967295);case Uint16Array:return Math.round(c*65535);case Uint8Array:return Math.round(c*255);case Int32Array:return Math.round(c*2147483647);case Int16Array:return Math.round(c*32767);case Int8Array:return Math.round(c*127);default:throw new Error("Invalid component type.")}}class Me{constructor(t=0,n=0){Me.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,a=this.y,r=t.elements;return this.x=r[0]*n+r[3]*a+r[6],this.y=r[1]*n+r[4]*a+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Math.max(t,Math.min(n,a)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(Gn(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y;return n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const a=Math.cos(n),r=Math.sin(n),l=this.x-t.x,u=this.y-t.y;return this.x=l*a-u*r+t.x,this.y=l*r+u*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class le{constructor(t,n,a,r,l,u,h,d,p){le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,a,r,l,u,h,d,p)}set(t,n,a,r,l,u,h,d,p){const g=this.elements;return g[0]=t,g[1]=r,g[2]=h,g[3]=n,g[4]=l,g[5]=d,g[6]=a,g[7]=u,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(t,n,a){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,r=n.elements,l=this.elements,u=a[0],h=a[3],d=a[6],p=a[1],g=a[4],_=a[7],v=a[2],S=a[5],M=a[8],E=r[0],x=r[3],y=r[6],T=r[1],A=r[4],D=r[7],I=r[2],P=r[5],z=r[8];return l[0]=u*E+h*T+d*I,l[3]=u*x+h*A+d*P,l[6]=u*y+h*D+d*z,l[1]=p*E+g*T+_*I,l[4]=p*x+g*A+_*P,l[7]=p*y+g*D+_*z,l[2]=v*E+S*T+M*I,l[5]=v*x+S*A+M*P,l[8]=v*y+S*D+M*z,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[1],r=t[2],l=t[3],u=t[4],h=t[5],d=t[6],p=t[7],g=t[8];return n*u*g-n*h*p-a*l*g+a*h*d+r*l*p-r*u*d}invert(){const t=this.elements,n=t[0],a=t[1],r=t[2],l=t[3],u=t[4],h=t[5],d=t[6],p=t[7],g=t[8],_=g*u-h*p,v=h*d-g*l,S=p*l-u*d,M=n*_+a*v+r*S;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/M;return t[0]=_*E,t[1]=(r*p-g*a)*E,t[2]=(h*a-r*u)*E,t[3]=v*E,t[4]=(g*n-r*d)*E,t[5]=(r*l-h*n)*E,t[6]=S*E,t[7]=(a*d-p*n)*E,t[8]=(u*n-a*l)*E,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,a,r,l,u,h){const d=Math.cos(l),p=Math.sin(l);return this.set(a*d,a*p,-a*(d*u+p*h)+u+t,-r*p,r*d,-r*(-p*u+d*h)+h+n,0,0,1),this}scale(t,n){return this.premultiply(Rh.makeScale(t,n)),this}rotate(t){return this.premultiply(Rh.makeRotation(-t)),this}translate(t,n){return this.premultiply(Rh.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,a=t.elements;for(let r=0;r<9;r++)if(n[r]!==a[r])return!1;return!0}fromArray(t,n=0){for(let a=0;a<9;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Rh=new le;function d_(c){for(let t=c.length-1;t>=0;--t)if(c[t]>=65535)return!0;return!1}function Jc(c){return document.createElementNS("http://www.w3.org/1999/xhtml",c)}function SM(){const c=Jc("canvas");return c.style.display="block",c}const jv={};function p_(c){c in jv||(jv[c]=!0,console.warn(c))}function MM(c,t,n){return new Promise(function(a,r){function l(){switch(c.clientWaitSync(t,c.SYNC_FLUSH_COMMANDS_BIT,0)){case c.WAIT_FAILED:r();break;case c.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:a()}}setTimeout(l,n)})}const qv=new le().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Xv=new le().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),vc={[es]:{transfer:Yc,primaries:Zc,toReference:c=>c,fromReference:c=>c},[Li]:{transfer:Ve,primaries:Zc,toReference:c=>c.convertSRGBToLinear(),fromReference:c=>c.convertLinearToSRGB()},[au]:{transfer:Yc,primaries:Kc,toReference:c=>c.applyMatrix3(Xv),fromReference:c=>c.applyMatrix3(qv)},[_d]:{transfer:Ve,primaries:Kc,toReference:c=>c.convertSRGBToLinear().applyMatrix3(Xv),fromReference:c=>c.applyMatrix3(qv).convertLinearToSRGB()}},EM=new Set([es,au]),Ue={enabled:!0,_workingColorSpace:es,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(c){if(!EM.has(c))throw new Error(`Unsupported working color space, "${c}".`);this._workingColorSpace=c},convert:function(c,t,n){if(this.enabled===!1||t===n||!t||!n)return c;const a=vc[t].toReference,r=vc[n].fromReference;return r(a(c))},fromWorkingColorSpace:function(c,t){return this.convert(c,this._workingColorSpace,t)},toWorkingColorSpace:function(c,t){return this.convert(c,t,this._workingColorSpace)},getPrimaries:function(c){return vc[c].primaries},getTransfer:function(c){return c===Ya?Yc:vc[c].transfer}};function zr(c){return c<.04045?c*.0773993808:Math.pow(c*.9478672986+.0521327014,2.4)}function Ch(c){return c<.0031308?c*12.92:1.055*Math.pow(c,.41666)-.055}let mr;class bM{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{mr===void 0&&(mr=Jc("canvas")),mr.width=t.width,mr.height=t.height;const a=mr.getContext("2d");t instanceof ImageData?a.putImageData(t,0,0):a.drawImage(t,0,0,t.width,t.height),n=mr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=Jc("canvas");n.width=t.width,n.height=t.height;const a=n.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const r=a.getImageData(0,0,t.width,t.height),l=r.data;for(let u=0;u<l.length;u++)l[u]=zr(l[u]/255)*255;return a.putImageData(r,0,0),n}else if(t.data){const n=t.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(zr(n[a]/255)*255):n[a]=zr(n[a]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let TM=0;class m_{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:TM++}),this.uuid=il(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},r=this.data;if(r!==null){let l;if(Array.isArray(r)){l=[];for(let u=0,h=r.length;u<h;u++)r[u].isDataTexture?l.push(Dh(r[u].image)):l.push(Dh(r[u]))}else l=Dh(r);a.url=l}return n||(t.images[this.uuid]=a),a}}function Dh(c){return typeof HTMLImageElement<"u"&&c instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&c instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&c instanceof ImageBitmap?bM.getDataURL(c):c.data?{data:Array.from(c.data),width:c.width,height:c.height,type:c.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let AM=0;class kn extends kr{constructor(t=kn.DEFAULT_IMAGE,n=kn.DEFAULT_MAPPING,a=Ns,r=Ns,l=Mi,u=Us,h=zi,d=$a,p=kn.DEFAULT_ANISOTROPY,g=Ya){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:AM++}),this.uuid=il(),this.name="",this.source=new m_(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=r,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=d,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==a_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case fd:t.x=t.x-Math.floor(t.x);break;case Ns:t.x=t.x<0?0:1;break;case hd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case fd:t.y=t.y-Math.floor(t.y);break;case Ns:t.y=t.y<0?0:1;break;case hd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}kn.DEFAULT_IMAGE=null;kn.DEFAULT_MAPPING=a_;kn.DEFAULT_ANISOTROPY=1;class _n{constructor(t=0,n=0,a=0,r=1){_n.prototype.isVector4=!0,this.x=t,this.y=n,this.z=a,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,a,r){return this.x=t,this.y=n,this.z=a,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,a=this.y,r=this.z,l=this.w,u=t.elements;return this.x=u[0]*n+u[4]*a+u[8]*r+u[12]*l,this.y=u[1]*n+u[5]*a+u[9]*r+u[13]*l,this.z=u[2]*n+u[6]*a+u[10]*r+u[14]*l,this.w=u[3]*n+u[7]*a+u[11]*r+u[15]*l,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,a,r,l;const d=t.elements,p=d[0],g=d[4],_=d[8],v=d[1],S=d[5],M=d[9],E=d[2],x=d[6],y=d[10];if(Math.abs(g-v)<.01&&Math.abs(_-E)<.01&&Math.abs(M-x)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+E)<.1&&Math.abs(M+x)<.1&&Math.abs(p+S+y-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const A=(p+1)/2,D=(S+1)/2,I=(y+1)/2,P=(g+v)/4,z=(_+E)/4,k=(M+x)/4;return A>D&&A>I?A<.01?(a=0,r=.707106781,l=.707106781):(a=Math.sqrt(A),r=P/a,l=z/a):D>I?D<.01?(a=.707106781,r=0,l=.707106781):(r=Math.sqrt(D),a=P/r,l=k/r):I<.01?(a=.707106781,r=.707106781,l=0):(l=Math.sqrt(I),a=z/l,r=k/l),this.set(a,r,l,n),this}let T=Math.sqrt((x-M)*(x-M)+(_-E)*(_-E)+(v-g)*(v-g));return Math.abs(T)<.001&&(T=1),this.x=(x-M)/T,this.y=(_-E)/T,this.z=(v-g)/T,this.w=Math.acos((p+S+y-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this.w=Math.max(t.w,Math.min(n.w,this.w)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this.w=Math.max(t,Math.min(n,this.w)),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Math.max(t,Math.min(n,a)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this.w=t.w+(n.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wM extends kr{constructor(t=1,n=1,a={}){super(),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=1,this.scissor=new _n(0,0,t,n),this.scissorTest=!1,this.viewport=new _n(0,0,t,n);const r={width:t,height:n,depth:1};a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},a);const l=new kn(r,a.mapping,a.wrapS,a.wrapT,a.magFilter,a.minFilter,a.format,a.type,a.anisotropy,a.colorSpace);l.flipY=!1,l.generateMipmaps=a.generateMipmaps,l.internalFormat=a.internalFormat,this.textures=[];const u=a.count;for(let h=0;h<u;h++)this.textures[h]=l.clone(),this.textures[h].isRenderTargetTexture=!0;this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this.depthTexture=a.depthTexture,this.samples=a.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,n,a=1){if(this.width!==t||this.height!==n||this.depth!==a){this.width=t,this.height=n,this.depth=a;for(let r=0,l=this.textures.length;r<l;r++)this.textures[r].image.width=t,this.textures[r].image.height=n,this.textures[r].image.depth=a;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let a=0,r=t.textures.length;a<r;a++)this.textures[a]=t.textures[a].clone(),this.textures[a].isRenderTargetTexture=!0;const n=Object.assign({},t.texture.image);return this.texture.source=new m_(n),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ls extends wM{constructor(t=1,n=1,a={}){super(t,n,a),this.isWebGLRenderTarget=!0}}class g_ extends kn{constructor(t=null,n=1,a=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:a,depth:r},this.magFilter=hi,this.minFilter=hi,this.wrapR=Ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class RM extends kn{constructor(t=null,n=1,a=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:a,depth:r},this.magFilter=hi,this.minFilter=hi,this.wrapR=Ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let al=class{constructor(t=0,n=0,a=0,r=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=a,this._w=r}static slerpFlat(t,n,a,r,l,u,h){let d=a[r+0],p=a[r+1],g=a[r+2],_=a[r+3];const v=l[u+0],S=l[u+1],M=l[u+2],E=l[u+3];if(h===0){t[n+0]=d,t[n+1]=p,t[n+2]=g,t[n+3]=_;return}if(h===1){t[n+0]=v,t[n+1]=S,t[n+2]=M,t[n+3]=E;return}if(_!==E||d!==v||p!==S||g!==M){let x=1-h;const y=d*v+p*S+g*M+_*E,T=y>=0?1:-1,A=1-y*y;if(A>Number.EPSILON){const I=Math.sqrt(A),P=Math.atan2(I,y*T);x=Math.sin(x*P)/I,h=Math.sin(h*P)/I}const D=h*T;if(d=d*x+v*D,p=p*x+S*D,g=g*x+M*D,_=_*x+E*D,x===1-h){const I=1/Math.sqrt(d*d+p*p+g*g+_*_);d*=I,p*=I,g*=I,_*=I}}t[n]=d,t[n+1]=p,t[n+2]=g,t[n+3]=_}static multiplyQuaternionsFlat(t,n,a,r,l,u){const h=a[r],d=a[r+1],p=a[r+2],g=a[r+3],_=l[u],v=l[u+1],S=l[u+2],M=l[u+3];return t[n]=h*M+g*_+d*S-p*v,t[n+1]=d*M+g*v+p*_-h*S,t[n+2]=p*M+g*S+h*v-d*_,t[n+3]=g*M-h*_-d*v-p*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,a,r){return this._x=t,this._y=n,this._z=a,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const a=t._x,r=t._y,l=t._z,u=t._order,h=Math.cos,d=Math.sin,p=h(a/2),g=h(r/2),_=h(l/2),v=d(a/2),S=d(r/2),M=d(l/2);switch(u){case"XYZ":this._x=v*g*_+p*S*M,this._y=p*S*_-v*g*M,this._z=p*g*M+v*S*_,this._w=p*g*_-v*S*M;break;case"YXZ":this._x=v*g*_+p*S*M,this._y=p*S*_-v*g*M,this._z=p*g*M-v*S*_,this._w=p*g*_+v*S*M;break;case"ZXY":this._x=v*g*_-p*S*M,this._y=p*S*_+v*g*M,this._z=p*g*M+v*S*_,this._w=p*g*_-v*S*M;break;case"ZYX":this._x=v*g*_-p*S*M,this._y=p*S*_+v*g*M,this._z=p*g*M-v*S*_,this._w=p*g*_+v*S*M;break;case"YZX":this._x=v*g*_+p*S*M,this._y=p*S*_+v*g*M,this._z=p*g*M-v*S*_,this._w=p*g*_-v*S*M;break;case"XZY":this._x=v*g*_-p*S*M,this._y=p*S*_-v*g*M,this._z=p*g*M+v*S*_,this._w=p*g*_+v*S*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const a=n/2,r=Math.sin(a);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,a=n[0],r=n[4],l=n[8],u=n[1],h=n[5],d=n[9],p=n[2],g=n[6],_=n[10],v=a+h+_;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(g-d)*S,this._y=(l-p)*S,this._z=(u-r)*S}else if(a>h&&a>_){const S=2*Math.sqrt(1+a-h-_);this._w=(g-d)/S,this._x=.25*S,this._y=(r+u)/S,this._z=(l+p)/S}else if(h>_){const S=2*Math.sqrt(1+h-a-_);this._w=(l-p)/S,this._x=(r+u)/S,this._y=.25*S,this._z=(d+g)/S}else{const S=2*Math.sqrt(1+_-a-h);this._w=(u-r)/S,this._x=(l+p)/S,this._y=(d+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let a=t.dot(n)+1;return a<Number.EPSILON?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Gn(this.dot(t),-1,1)))}rotateTowards(t,n){const a=this.angleTo(t);if(a===0)return this;const r=Math.min(1,n/a);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const a=t._x,r=t._y,l=t._z,u=t._w,h=n._x,d=n._y,p=n._z,g=n._w;return this._x=a*g+u*h+r*p-l*d,this._y=r*g+u*d+l*h-a*p,this._z=l*g+u*p+a*d-r*h,this._w=u*g-a*h-r*d-l*p,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const a=this._x,r=this._y,l=this._z,u=this._w;let h=u*t._w+a*t._x+r*t._y+l*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=u,this._x=a,this._y=r,this._z=l,this;const d=1-h*h;if(d<=Number.EPSILON){const S=1-n;return this._w=S*u+n*this._w,this._x=S*a+n*this._x,this._y=S*r+n*this._y,this._z=S*l+n*this._z,this.normalize(),this}const p=Math.sqrt(d),g=Math.atan2(p,h),_=Math.sin((1-n)*g)/p,v=Math.sin(n*g)/p;return this._w=u*_+this._w*v,this._x=a*_+this._x*v,this._y=r*_+this._y*v,this._z=l*_+this._z*v,this._onChangeCallback(),this}slerpQuaternions(t,n,a){return this.copy(t).slerp(n,a)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),r=Math.sqrt(1-a),l=Math.sqrt(a);return this.set(r*Math.sin(t),r*Math.cos(t),l*Math.sin(n),l*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class ut{constructor(t=0,n=0,a=0){ut.prototype.isVector3=!0,this.x=t,this.y=n,this.z=a}set(t,n,a){return a===void 0&&(a=this.z),this.x=t,this.y=n,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(Yv.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(Yv.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,a=this.y,r=this.z,l=t.elements;return this.x=l[0]*n+l[3]*a+l[6]*r,this.y=l[1]*n+l[4]*a+l[7]*r,this.z=l[2]*n+l[5]*a+l[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,a=this.y,r=this.z,l=t.elements,u=1/(l[3]*n+l[7]*a+l[11]*r+l[15]);return this.x=(l[0]*n+l[4]*a+l[8]*r+l[12])*u,this.y=(l[1]*n+l[5]*a+l[9]*r+l[13])*u,this.z=(l[2]*n+l[6]*a+l[10]*r+l[14])*u,this}applyQuaternion(t){const n=this.x,a=this.y,r=this.z,l=t.x,u=t.y,h=t.z,d=t.w,p=2*(u*r-h*a),g=2*(h*n-l*r),_=2*(l*a-u*n);return this.x=n+d*p+u*_-h*g,this.y=a+d*g+h*p-l*_,this.z=r+d*_+l*g-u*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,a=this.y,r=this.z,l=t.elements;return this.x=l[0]*n+l[4]*a+l[8]*r,this.y=l[1]*n+l[5]*a+l[9]*r,this.z=l[2]*n+l[6]*a+l[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Math.max(t,Math.min(n,a)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const a=t.x,r=t.y,l=t.z,u=n.x,h=n.y,d=n.z;return this.x=r*d-l*h,this.y=l*u-a*d,this.z=a*h-r*u,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const a=t.dot(this)/n;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return Nh.copy(this).projectOnVector(t),this.sub(Nh)}reflect(t){return this.sub(Nh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(Gn(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y,r=this.z-t.z;return n*n+a*a+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,a){const r=Math.sin(n)*t;return this.x=r*Math.sin(a),this.y=Math.cos(n)*t,this.z=r*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,a){return this.x=t*Math.sin(n),this.y=a,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=a,this.z=r,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(t),this.y=n,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Nh=new ut,Yv=new al;class sl{constructor(t=new ut(1/0,1/0,1/0),n=new ut(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n+=3)this.expandByPoint(_i.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,a=t.count;n<a;n++)this.expandByPoint(_i.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const a=_i.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const l=a.getAttribute("position");if(n===!0&&l!==void 0&&t.isInstancedMesh!==!0)for(let u=0,h=l.count;u<h;u++)t.isMesh===!0?t.getVertexPosition(u,_i):_i.fromBufferAttribute(l,u),_i.applyMatrix4(t.matrixWorld),this.expandByPoint(_i);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),_c.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),_c.copy(a.boundingBox)),_c.applyMatrix4(t.matrixWorld),this.union(_c)}const r=t.children;for(let l=0,u=r.length;l<u;l++)this.expandByObject(r[l],n);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,_i),_i.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,a;return t.normal.x>0?(n=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),n<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Xo),xc.subVectors(this.max,Xo),gr.subVectors(t.a,Xo),vr.subVectors(t.b,Xo),_r.subVectors(t.c,Xo),Ga.subVectors(vr,gr),Va.subVectors(_r,vr),xs.subVectors(gr,_r);let n=[0,-Ga.z,Ga.y,0,-Va.z,Va.y,0,-xs.z,xs.y,Ga.z,0,-Ga.x,Va.z,0,-Va.x,xs.z,0,-xs.x,-Ga.y,Ga.x,0,-Va.y,Va.x,0,-xs.y,xs.x,0];return!Uh(n,gr,vr,_r,xc)||(n=[1,0,0,0,1,0,0,0,1],!Uh(n,gr,vr,_r,xc))?!1:(yc.crossVectors(Ga,Va),n=[yc.x,yc.y,yc.z],Uh(n,gr,vr,_r,xc))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_i).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_i).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ea[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ea[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ea[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ea[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ea[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ea[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ea[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ea[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ea),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ea=[new ut,new ut,new ut,new ut,new ut,new ut,new ut,new ut],_i=new ut,_c=new sl,gr=new ut,vr=new ut,_r=new ut,Ga=new ut,Va=new ut,xs=new ut,Xo=new ut,xc=new ut,yc=new ut,ys=new ut;function Uh(c,t,n,a,r){for(let l=0,u=c.length-3;l<=u;l+=3){ys.fromArray(c,l);const h=r.x*Math.abs(ys.x)+r.y*Math.abs(ys.y)+r.z*Math.abs(ys.z),d=t.dot(ys),p=n.dot(ys),g=a.dot(ys);if(Math.max(-Math.max(d,p,g),Math.min(d,p,g))>h)return!1}return!0}const CM=new sl,Yo=new ut,Lh=new ut;let xd=class{constructor(t=new ut,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const a=this.center;n!==void 0?a.copy(n):CM.setFromPoints(t).getCenter(a);let r=0;for(let l=0,u=t.length;l<u;l++)r=Math.max(r,a.distanceToSquared(t[l]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const a=this.center.distanceToSquared(t);return n.copy(t),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Yo.subVectors(t,this.center);const n=Yo.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),r=(a-this.radius)*.5;this.center.addScaledVector(Yo,r/a),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Lh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Yo.copy(t.center).add(Lh)),this.expandByPoint(Yo.copy(t.center).sub(Lh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}};const na=new ut,Oh=new ut,Sc=new ut,ka=new ut,Ph=new ut,Mc=new ut,zh=new ut;let DM=class{constructor(t=new ut,n=new ut(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,na)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=na.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(na.copy(this.origin).addScaledVector(this.direction,n),na.distanceToSquared(t))}distanceSqToSegment(t,n,a,r){Oh.copy(t).add(n).multiplyScalar(.5),Sc.copy(n).sub(t).normalize(),ka.copy(this.origin).sub(Oh);const l=t.distanceTo(n)*.5,u=-this.direction.dot(Sc),h=ka.dot(this.direction),d=-ka.dot(Sc),p=ka.lengthSq(),g=Math.abs(1-u*u);let _,v,S,M;if(g>0)if(_=u*d-h,v=u*h-d,M=l*g,_>=0)if(v>=-M)if(v<=M){const E=1/g;_*=E,v*=E,S=_*(_+u*v+2*h)+v*(u*_+v+2*d)+p}else v=l,_=Math.max(0,-(u*v+h)),S=-_*_+v*(v+2*d)+p;else v=-l,_=Math.max(0,-(u*v+h)),S=-_*_+v*(v+2*d)+p;else v<=-M?(_=Math.max(0,-(-u*l+h)),v=_>0?-l:Math.min(Math.max(-l,-d),l),S=-_*_+v*(v+2*d)+p):v<=M?(_=0,v=Math.min(Math.max(-l,-d),l),S=v*(v+2*d)+p):(_=Math.max(0,-(u*l+h)),v=_>0?l:Math.min(Math.max(-l,-d),l),S=-_*_+v*(v+2*d)+p);else v=u>0?-l:l,_=Math.max(0,-(u*v+h)),S=-_*_+v*(v+2*d)+p;return a&&a.copy(this.origin).addScaledVector(this.direction,_),r&&r.copy(Oh).addScaledVector(Sc,v),S}intersectSphere(t,n){na.subVectors(t.center,this.origin);const a=na.dot(this.direction),r=na.dot(na)-a*a,l=t.radius*t.radius;if(r>l)return null;const u=Math.sqrt(l-r),h=a-u,d=a+u;return d<0?null:h<0?this.at(d,n):this.at(h,n)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/n;return a>=0?a:null}intersectPlane(t,n){const a=this.distanceToPlane(t);return a===null?null:this.at(a,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let a,r,l,u,h,d;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return p>=0?(a=(t.min.x-v.x)*p,r=(t.max.x-v.x)*p):(a=(t.max.x-v.x)*p,r=(t.min.x-v.x)*p),g>=0?(l=(t.min.y-v.y)*g,u=(t.max.y-v.y)*g):(l=(t.max.y-v.y)*g,u=(t.min.y-v.y)*g),a>u||l>r||((l>a||isNaN(a))&&(a=l),(u<r||isNaN(r))&&(r=u),_>=0?(h=(t.min.z-v.z)*_,d=(t.max.z-v.z)*_):(h=(t.max.z-v.z)*_,d=(t.min.z-v.z)*_),a>d||h>r)||((h>a||a!==a)&&(a=h),(d<r||r!==r)&&(r=d),r<0)?null:this.at(a>=0?a:r,n)}intersectsBox(t){return this.intersectBox(t,na)!==null}intersectTriangle(t,n,a,r,l){Ph.subVectors(n,t),Mc.subVectors(a,t),zh.crossVectors(Ph,Mc);let u=this.direction.dot(zh),h;if(u>0){if(r)return null;h=1}else if(u<0)h=-1,u=-u;else return null;ka.subVectors(this.origin,t);const d=h*this.direction.dot(Mc.crossVectors(ka,Mc));if(d<0)return null;const p=h*this.direction.dot(Ph.cross(ka));if(p<0||d+p>u)return null;const g=-h*ka.dot(zh);return g<0?null:this.at(g/u,l)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class $e{constructor(t,n,a,r,l,u,h,d,p,g,_,v,S,M,E,x){$e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,a,r,l,u,h,d,p,g,_,v,S,M,E,x)}set(t,n,a,r,l,u,h,d,p,g,_,v,S,M,E,x){const y=this.elements;return y[0]=t,y[4]=n,y[8]=a,y[12]=r,y[1]=l,y[5]=u,y[9]=h,y[13]=d,y[2]=p,y[6]=g,y[10]=_,y[14]=v,y[3]=S,y[7]=M,y[11]=E,y[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $e().fromArray(this.elements)}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(t){const n=this.elements,a=t.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,a){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(t,n,a){return this.set(t.x,n.x,a.x,0,t.y,n.y,a.y,0,t.z,n.z,a.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,a=t.elements,r=1/xr.setFromMatrixColumn(t,0).length(),l=1/xr.setFromMatrixColumn(t,1).length(),u=1/xr.setFromMatrixColumn(t,2).length();return n[0]=a[0]*r,n[1]=a[1]*r,n[2]=a[2]*r,n[3]=0,n[4]=a[4]*l,n[5]=a[5]*l,n[6]=a[6]*l,n[7]=0,n[8]=a[8]*u,n[9]=a[9]*u,n[10]=a[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,a=t.x,r=t.y,l=t.z,u=Math.cos(a),h=Math.sin(a),d=Math.cos(r),p=Math.sin(r),g=Math.cos(l),_=Math.sin(l);if(t.order==="XYZ"){const v=u*g,S=u*_,M=h*g,E=h*_;n[0]=d*g,n[4]=-d*_,n[8]=p,n[1]=S+M*p,n[5]=v-E*p,n[9]=-h*d,n[2]=E-v*p,n[6]=M+S*p,n[10]=u*d}else if(t.order==="YXZ"){const v=d*g,S=d*_,M=p*g,E=p*_;n[0]=v+E*h,n[4]=M*h-S,n[8]=u*p,n[1]=u*_,n[5]=u*g,n[9]=-h,n[2]=S*h-M,n[6]=E+v*h,n[10]=u*d}else if(t.order==="ZXY"){const v=d*g,S=d*_,M=p*g,E=p*_;n[0]=v-E*h,n[4]=-u*_,n[8]=M+S*h,n[1]=S+M*h,n[5]=u*g,n[9]=E-v*h,n[2]=-u*p,n[6]=h,n[10]=u*d}else if(t.order==="ZYX"){const v=u*g,S=u*_,M=h*g,E=h*_;n[0]=d*g,n[4]=M*p-S,n[8]=v*p+E,n[1]=d*_,n[5]=E*p+v,n[9]=S*p-M,n[2]=-p,n[6]=h*d,n[10]=u*d}else if(t.order==="YZX"){const v=u*d,S=u*p,M=h*d,E=h*p;n[0]=d*g,n[4]=E-v*_,n[8]=M*_+S,n[1]=_,n[5]=u*g,n[9]=-h*g,n[2]=-p*g,n[6]=S*_+M,n[10]=v-E*_}else if(t.order==="XZY"){const v=u*d,S=u*p,M=h*d,E=h*p;n[0]=d*g,n[4]=-_,n[8]=p*g,n[1]=v*_+E,n[5]=u*g,n[9]=S*_-M,n[2]=M*_-S,n[6]=h*g,n[10]=E*_+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(NM,t,UM)}lookAt(t,n,a){const r=this.elements;return Jn.subVectors(t,n),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),Wa.crossVectors(a,Jn),Wa.lengthSq()===0&&(Math.abs(a.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),Wa.crossVectors(a,Jn)),Wa.normalize(),Ec.crossVectors(Jn,Wa),r[0]=Wa.x,r[4]=Ec.x,r[8]=Jn.x,r[1]=Wa.y,r[5]=Ec.y,r[9]=Jn.y,r[2]=Wa.z,r[6]=Ec.z,r[10]=Jn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,r=n.elements,l=this.elements,u=a[0],h=a[4],d=a[8],p=a[12],g=a[1],_=a[5],v=a[9],S=a[13],M=a[2],E=a[6],x=a[10],y=a[14],T=a[3],A=a[7],D=a[11],I=a[15],P=r[0],z=r[4],k=r[8],U=r[12],w=r[1],F=r[5],it=r[9],V=r[13],Q=r[2],Y=r[6],L=r[10],Z=r[14],W=r[3],ht=r[7],B=r[11],$=r[15];return l[0]=u*P+h*w+d*Q+p*W,l[4]=u*z+h*F+d*Y+p*ht,l[8]=u*k+h*it+d*L+p*B,l[12]=u*U+h*V+d*Z+p*$,l[1]=g*P+_*w+v*Q+S*W,l[5]=g*z+_*F+v*Y+S*ht,l[9]=g*k+_*it+v*L+S*B,l[13]=g*U+_*V+v*Z+S*$,l[2]=M*P+E*w+x*Q+y*W,l[6]=M*z+E*F+x*Y+y*ht,l[10]=M*k+E*it+x*L+y*B,l[14]=M*U+E*V+x*Z+y*$,l[3]=T*P+A*w+D*Q+I*W,l[7]=T*z+A*F+D*Y+I*ht,l[11]=T*k+A*it+D*L+I*B,l[15]=T*U+A*V+D*Z+I*$,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[4],r=t[8],l=t[12],u=t[1],h=t[5],d=t[9],p=t[13],g=t[2],_=t[6],v=t[10],S=t[14],M=t[3],E=t[7],x=t[11],y=t[15];return M*(+l*d*_-r*p*_-l*h*v+a*p*v+r*h*S-a*d*S)+E*(+n*d*S-n*p*v+l*u*v-r*u*S+r*p*g-l*d*g)+x*(+n*p*_-n*h*S-l*u*_+a*u*S+l*h*g-a*p*g)+y*(-r*h*g-n*d*_+n*h*v+r*u*_-a*u*v+a*d*g)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,a){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=n,r[14]=a),this}invert(){const t=this.elements,n=t[0],a=t[1],r=t[2],l=t[3],u=t[4],h=t[5],d=t[6],p=t[7],g=t[8],_=t[9],v=t[10],S=t[11],M=t[12],E=t[13],x=t[14],y=t[15],T=_*x*p-E*v*p+E*d*S-h*x*S-_*d*y+h*v*y,A=M*v*p-g*x*p-M*d*S+u*x*S+g*d*y-u*v*y,D=g*E*p-M*_*p+M*h*S-u*E*S-g*h*y+u*_*y,I=M*_*d-g*E*d-M*h*v+u*E*v+g*h*x-u*_*x,P=n*T+a*A+r*D+l*I;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/P;return t[0]=T*z,t[1]=(E*v*l-_*x*l-E*r*S+a*x*S+_*r*y-a*v*y)*z,t[2]=(h*x*l-E*d*l+E*r*p-a*x*p-h*r*y+a*d*y)*z,t[3]=(_*d*l-h*v*l-_*r*p+a*v*p+h*r*S-a*d*S)*z,t[4]=A*z,t[5]=(g*x*l-M*v*l+M*r*S-n*x*S-g*r*y+n*v*y)*z,t[6]=(M*d*l-u*x*l-M*r*p+n*x*p+u*r*y-n*d*y)*z,t[7]=(u*v*l-g*d*l+g*r*p-n*v*p-u*r*S+n*d*S)*z,t[8]=D*z,t[9]=(M*_*l-g*E*l-M*a*S+n*E*S+g*a*y-n*_*y)*z,t[10]=(u*E*l-M*h*l+M*a*p-n*E*p-u*a*y+n*h*y)*z,t[11]=(g*h*l-u*_*l-g*a*p+n*_*p+u*a*S-n*h*S)*z,t[12]=I*z,t[13]=(g*E*r-M*_*r+M*a*v-n*E*v-g*a*x+n*_*x)*z,t[14]=(M*h*r-u*E*r-M*a*d+n*E*d+u*a*x-n*h*x)*z,t[15]=(u*_*r-g*h*r+g*a*d-n*_*d-u*a*v+n*h*v)*z,this}scale(t){const n=this.elements,a=t.x,r=t.y,l=t.z;return n[0]*=a,n[4]*=r,n[8]*=l,n[1]*=a,n[5]*=r,n[9]*=l,n[2]*=a,n[6]*=r,n[10]*=l,n[3]*=a,n[7]*=r,n[11]*=l,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,a,r))}makeTranslation(t,n,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const a=Math.cos(n),r=Math.sin(n),l=1-a,u=t.x,h=t.y,d=t.z,p=l*u,g=l*h;return this.set(p*u+a,p*h-r*d,p*d+r*h,0,p*h+r*d,g*h+a,g*d-r*u,0,p*d-r*h,g*d+r*u,l*d*d+a,0,0,0,0,1),this}makeScale(t,n,a){return this.set(t,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,n,a,r,l,u){return this.set(1,a,l,0,t,1,u,0,n,r,1,0,0,0,0,1),this}compose(t,n,a){const r=this.elements,l=n._x,u=n._y,h=n._z,d=n._w,p=l+l,g=u+u,_=h+h,v=l*p,S=l*g,M=l*_,E=u*g,x=u*_,y=h*_,T=d*p,A=d*g,D=d*_,I=a.x,P=a.y,z=a.z;return r[0]=(1-(E+y))*I,r[1]=(S+D)*I,r[2]=(M-A)*I,r[3]=0,r[4]=(S-D)*P,r[5]=(1-(v+y))*P,r[6]=(x+T)*P,r[7]=0,r[8]=(M+A)*z,r[9]=(x-T)*z,r[10]=(1-(v+E))*z,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,n,a){const r=this.elements;let l=xr.set(r[0],r[1],r[2]).length();const u=xr.set(r[4],r[5],r[6]).length(),h=xr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(l=-l),t.x=r[12],t.y=r[13],t.z=r[14],xi.copy(this);const p=1/l,g=1/u,_=1/h;return xi.elements[0]*=p,xi.elements[1]*=p,xi.elements[2]*=p,xi.elements[4]*=g,xi.elements[5]*=g,xi.elements[6]*=g,xi.elements[8]*=_,xi.elements[9]*=_,xi.elements[10]*=_,n.setFromRotationMatrix(xi),a.x=l,a.y=u,a.z=h,this}makePerspective(t,n,a,r,l,u,h=da){const d=this.elements,p=2*l/(n-t),g=2*l/(a-r),_=(n+t)/(n-t),v=(a+r)/(a-r);let S,M;if(h===da)S=-(u+l)/(u-l),M=-2*u*l/(u-l);else if(h===Qc)S=-u/(u-l),M=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return d[0]=p,d[4]=0,d[8]=_,d[12]=0,d[1]=0,d[5]=g,d[9]=v,d[13]=0,d[2]=0,d[6]=0,d[10]=S,d[14]=M,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,n,a,r,l,u,h=da){const d=this.elements,p=1/(n-t),g=1/(a-r),_=1/(u-l),v=(n+t)*p,S=(a+r)*g;let M,E;if(h===da)M=(u+l)*_,E=-2*_;else if(h===Qc)M=l*_,E=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return d[0]=2*p,d[4]=0,d[8]=0,d[12]=-v,d[1]=0,d[5]=2*g,d[9]=0,d[13]=-S,d[2]=0,d[6]=0,d[10]=E,d[14]=-M,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const n=this.elements,a=t.elements;for(let r=0;r<16;r++)if(n[r]!==a[r])return!1;return!0}fromArray(t,n=0){for(let a=0;a<16;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t[n+9]=a[9],t[n+10]=a[10],t[n+11]=a[11],t[n+12]=a[12],t[n+13]=a[13],t[n+14]=a[14],t[n+15]=a[15],t}}const xr=new ut,xi=new $e,NM=new ut(0,0,0),UM=new ut(1,1,1),Wa=new ut,Ec=new ut,Jn=new ut,Zv=new $e,Kv=new al;class Fi{constructor(t=0,n=0,a=0,r=Fi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=a,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,a,r=this._order){return this._x=t,this._y=n,this._z=a,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,a=!0){const r=t.elements,l=r[0],u=r[4],h=r[8],d=r[1],p=r[5],g=r[9],_=r[2],v=r[6],S=r[10];switch(n){case"XYZ":this._y=Math.asin(Gn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Gn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,S),this._z=Math.atan2(d,p)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(Gn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,S),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-Gn(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(Gn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(h,S));break;case"XZY":this._z=Math.asin(-Gn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(h,l)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,a){return Zv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Zv,n,a)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Kv.setFromEuler(this),this.setFromQuaternion(Kv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fi.DEFAULT_ORDER="XYZ";class v_{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let LM=0;const Qv=new ut,yr=new al,ia=new $e,bc=new ut,Zo=new ut,OM=new ut,PM=new al,Jv=new ut(1,0,0),$v=new ut(0,1,0),t0=new ut(0,0,1),e0={type:"added"},zM={type:"removed"},Sr={type:"childadded",child:null},Bh={type:"childremoved",child:null};class Nn extends kr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:LM++}),this.uuid=il(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nn.DEFAULT_UP.clone();const t=new ut,n=new Fi,a=new al,r=new ut(1,1,1);function l(){a.setFromEuler(n,!1)}function u(){n.setFromQuaternion(a,void 0,!1)}n._onChange(l),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new $e},normalMatrix:{value:new le}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=Nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new v_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return yr.setFromAxisAngle(t,n),this.quaternion.multiply(yr),this}rotateOnWorldAxis(t,n){return yr.setFromAxisAngle(t,n),this.quaternion.premultiply(yr),this}rotateX(t){return this.rotateOnAxis(Jv,t)}rotateY(t){return this.rotateOnAxis($v,t)}rotateZ(t){return this.rotateOnAxis(t0,t)}translateOnAxis(t,n){return Qv.copy(t).applyQuaternion(this.quaternion),this.position.add(Qv.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Jv,t)}translateY(t){return this.translateOnAxis($v,t)}translateZ(t){return this.translateOnAxis(t0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ia.copy(this.matrixWorld).invert())}lookAt(t,n,a){t.isVector3?bc.copy(t):bc.set(t,n,a);const r=this.parent;this.updateWorldMatrix(!0,!1),Zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ia.lookAt(Zo,bc,this.up):ia.lookAt(bc,Zo,this.up),this.quaternion.setFromRotationMatrix(ia),r&&(ia.extractRotation(r.matrixWorld),yr.setFromRotationMatrix(ia),this.quaternion.premultiply(yr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(e0),Sr.child=t,this.dispatchEvent(Sr),Sr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(zM),Bh.child=t,this.dispatchEvent(Bh),Bh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ia.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ia.multiply(t.parent.matrixWorld)),t.applyMatrix4(ia),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(e0),Sr.child=t,this.dispatchEvent(Sr),Sr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let a=0,r=this.children.length;a<r;a++){const u=this.children[a].getObjectByProperty(t,n);if(u!==void 0)return u}}getObjectsByProperty(t,n,a=[]){this[t]===n&&a.push(this);const r=this.children;for(let l=0,u=r.length;l<u;l++)r[l].getObjectsByProperty(t,n,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,t,OM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,PM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let a=0,r=n.length;a<r;a++){const l=n[a];(l.matrixWorldAutoUpdate===!0||t===!0)&&l.updateMatrixWorld(t)}}updateWorldMatrix(t,n){const a=this.parent;if(t===!0&&a!==null&&a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let l=0,u=r.length;l<u;l++){const h=r[l];h.matrixWorldAutoUpdate===!0&&h.updateWorldMatrix(!1,!0)}}}toJSON(t){const n=t===void 0||typeof t=="string",a={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function l(h,d){return h[d.uuid]===void 0&&(h[d.uuid]=d.toJSON(t)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=l(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const d=h.shapes;if(Array.isArray(d))for(let p=0,g=d.length;p<g;p++){const _=d[p];l(t.shapes,_)}else l(t.shapes,d)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let d=0,p=this.material.length;d<p;d++)h.push(l(t.materials,this.material[d]));r.material=h}else r.material=l(t.materials,this.material);if(this.children.length>0){r.children=[];for(let h=0;h<this.children.length;h++)r.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let h=0;h<this.animations.length;h++){const d=this.animations[h];r.animations.push(l(t.animations,d))}}if(n){const h=u(t.geometries),d=u(t.materials),p=u(t.textures),g=u(t.images),_=u(t.shapes),v=u(t.skeletons),S=u(t.animations),M=u(t.nodes);h.length>0&&(a.geometries=h),d.length>0&&(a.materials=d),p.length>0&&(a.textures=p),g.length>0&&(a.images=g),_.length>0&&(a.shapes=_),v.length>0&&(a.skeletons=v),S.length>0&&(a.animations=S),M.length>0&&(a.nodes=M)}return a.object=r,a;function u(h){const d=[];for(const p in h){const g=h[p];delete g.metadata,d.push(g)}return d}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let a=0;a<t.children.length;a++){const r=t.children[a];this.add(r.clone())}return this}}Nn.DEFAULT_UP=new ut(0,1,0);Nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yi=new ut,aa=new ut,Ih=new ut,sa=new ut,Mr=new ut,Er=new ut,n0=new ut,Fh=new ut,Hh=new ut,Gh=new ut;class Pi{constructor(t=new ut,n=new ut,a=new ut){this.a=t,this.b=n,this.c=a}static getNormal(t,n,a,r){r.subVectors(a,n),yi.subVectors(t,n),r.cross(yi);const l=r.lengthSq();return l>0?r.multiplyScalar(1/Math.sqrt(l)):r.set(0,0,0)}static getBarycoord(t,n,a,r,l){yi.subVectors(r,n),aa.subVectors(a,n),Ih.subVectors(t,n);const u=yi.dot(yi),h=yi.dot(aa),d=yi.dot(Ih),p=aa.dot(aa),g=aa.dot(Ih),_=u*p-h*h;if(_===0)return l.set(0,0,0),null;const v=1/_,S=(p*d-h*g)*v,M=(u*g-h*d)*v;return l.set(1-S-M,M,S)}static containsPoint(t,n,a,r){return this.getBarycoord(t,n,a,r,sa)===null?!1:sa.x>=0&&sa.y>=0&&sa.x+sa.y<=1}static getInterpolation(t,n,a,r,l,u,h,d){return this.getBarycoord(t,n,a,r,sa)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,sa.x),d.addScaledVector(u,sa.y),d.addScaledVector(h,sa.z),d)}static isFrontFacing(t,n,a,r){return yi.subVectors(a,n),aa.subVectors(t,n),yi.cross(aa).dot(r)<0}set(t,n,a){return this.a.copy(t),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(t,n,a,r){return this.a.copy(t[n]),this.b.copy(t[a]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,n,a,r){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yi.subVectors(this.c,this.b),aa.subVectors(this.a,this.b),yi.cross(aa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Pi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Pi.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,a,r,l){return Pi.getInterpolation(t,this.a,this.b,this.c,n,a,r,l)}containsPoint(t){return Pi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Pi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const a=this.a,r=this.b,l=this.c;let u,h;Mr.subVectors(r,a),Er.subVectors(l,a),Fh.subVectors(t,a);const d=Mr.dot(Fh),p=Er.dot(Fh);if(d<=0&&p<=0)return n.copy(a);Hh.subVectors(t,r);const g=Mr.dot(Hh),_=Er.dot(Hh);if(g>=0&&_<=g)return n.copy(r);const v=d*_-g*p;if(v<=0&&d>=0&&g<=0)return u=d/(d-g),n.copy(a).addScaledVector(Mr,u);Gh.subVectors(t,l);const S=Mr.dot(Gh),M=Er.dot(Gh);if(M>=0&&S<=M)return n.copy(l);const E=S*p-d*M;if(E<=0&&p>=0&&M<=0)return h=p/(p-M),n.copy(a).addScaledVector(Er,h);const x=g*M-S*_;if(x<=0&&_-g>=0&&S-M>=0)return n0.subVectors(l,r),h=(_-g)/(_-g+(S-M)),n.copy(r).addScaledVector(n0,h);const y=1/(x+E+v);return u=E*y,h=v*y,n.copy(a).addScaledVector(Mr,u).addScaledVector(Er,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const __={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ja={h:0,s:0,l:0},Tc={h:0,s:0,l:0};function Vh(c,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?c+(t-c)*6*n:n<1/2?t:n<2/3?c+(t-c)*6*(2/3-n):c}class Ae{constructor(t,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,a)}set(t,n,a){if(n===void 0&&a===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,n,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Li){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ue.toWorkingColorSpace(this,n),this}setRGB(t,n,a,r=Ue.workingColorSpace){return this.r=t,this.g=n,this.b=a,Ue.toWorkingColorSpace(this,r),this}setHSL(t,n,a,r=Ue.workingColorSpace){if(t=yM(t,1),n=Gn(n,0,1),a=Gn(a,0,1),n===0)this.r=this.g=this.b=a;else{const l=a<=.5?a*(1+n):a+n-a*n,u=2*a-l;this.r=Vh(u,l,t+1/3),this.g=Vh(u,l,t),this.b=Vh(u,l,t-1/3)}return Ue.toWorkingColorSpace(this,r),this}setStyle(t,n=Li){function a(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let l;const u=r[1],h=r[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const l=r[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(l,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Li){const a=__[t.toLowerCase()];return a!==void 0?this.setHex(a,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=zr(t.r),this.g=zr(t.g),this.b=zr(t.b),this}copyLinearToSRGB(t){return this.r=Ch(t.r),this.g=Ch(t.g),this.b=Ch(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Li){return Ue.fromWorkingColorSpace(Dn.copy(this),t),Math.round(Gn(Dn.r*255,0,255))*65536+Math.round(Gn(Dn.g*255,0,255))*256+Math.round(Gn(Dn.b*255,0,255))}getHexString(t=Li){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Ue.workingColorSpace){Ue.fromWorkingColorSpace(Dn.copy(this),n);const a=Dn.r,r=Dn.g,l=Dn.b,u=Math.max(a,r,l),h=Math.min(a,r,l);let d,p;const g=(h+u)/2;if(h===u)d=0,p=0;else{const _=u-h;switch(p=g<=.5?_/(u+h):_/(2-u-h),u){case a:d=(r-l)/_+(r<l?6:0);break;case r:d=(l-a)/_+2;break;case l:d=(a-r)/_+4;break}d/=6}return t.h=d,t.s=p,t.l=g,t}getRGB(t,n=Ue.workingColorSpace){return Ue.fromWorkingColorSpace(Dn.copy(this),n),t.r=Dn.r,t.g=Dn.g,t.b=Dn.b,t}getStyle(t=Li){Ue.fromWorkingColorSpace(Dn.copy(this),t);const n=Dn.r,a=Dn.g,r=Dn.b;return t!==Li?`color(${t} ${n.toFixed(3)} ${a.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(r*255)})`}offsetHSL(t,n,a){return this.getHSL(ja),this.setHSL(ja.h+t,ja.s+n,ja.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,a){return this.r=t.r+(n.r-t.r)*a,this.g=t.g+(n.g-t.g)*a,this.b=t.b+(n.b-t.b)*a,this}lerpHSL(t,n){this.getHSL(ja),t.getHSL(Tc);const a=wh(ja.h,Tc.h,n),r=wh(ja.s,Tc.s,n),l=wh(ja.l,Tc.l,n);return this.setHSL(a,r,l),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,a=this.g,r=this.b,l=t.elements;return this.r=l[0]*n+l[3]*a+l[6]*r,this.g=l[1]*n+l[4]*a+l[7]*r,this.b=l[2]*n+l[5]*a+l[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dn=new Ae;Ae.NAMES=__;let BM=0,rl=class extends kr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:BM++}),this.uuid=il(),this.name="",this.type="Material",this.blending=Or,this.side=Ja,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=od,this.blendDst=ld,this.blendEquation=Rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ae(0,0,0),this.blendAlpha=0,this.depthFunc=qc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pr,this.stencilZFail=pr,this.stencilZPass=pr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const a=t[n];if(a===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(a):r&&r.isVector3&&a&&a.isVector3?r.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const a={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Or&&(a.blending=this.blending),this.side!==Ja&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==od&&(a.blendSrc=this.blendSrc),this.blendDst!==ld&&(a.blendDst=this.blendDst),this.blendEquation!==Rs&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==qc&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vv&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==pr&&(a.stencilFail=this.stencilFail),this.stencilZFail!==pr&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==pr&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function r(l){const u=[];for(const h in l){const d=l[h];delete d.metadata,u.push(d)}return u}if(n){const l=r(t.textures),u=r(t.images);l.length>0&&(a.textures=l),u.length>0&&(a.images=u)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let a=null;if(n!==null){const r=n.length;a=new Array(r);for(let l=0;l!==r;++l)a[l]=n[l].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};class x_ extends rl{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fi,this.combine=i_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const an=new ut,Ac=new Me;class Bi{constructor(t,n,a=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=a,this.usage=kv,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Za,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return p_("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,a){t*=this.itemSize,a*=n.itemSize;for(let r=0,l=this.itemSize;r<l;r++)this.array[t+r]=n.array[a+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)Ac.fromBufferAttribute(this,n),Ac.applyMatrix3(t),this.setXY(n,Ac.x,Ac.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)an.fromBufferAttribute(this,n),an.applyMatrix3(t),this.setXYZ(n,an.x,an.y,an.z);return this}applyMatrix4(t){for(let n=0,a=this.count;n<a;n++)an.fromBufferAttribute(this,n),an.applyMatrix4(t),this.setXYZ(n,an.x,an.y,an.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)an.fromBufferAttribute(this,n),an.applyNormalMatrix(t),this.setXYZ(n,an.x,an.y,an.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)an.fromBufferAttribute(this,n),an.transformDirection(t),this.setXYZ(n,an.x,an.y,an.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let a=this.array[t*this.itemSize+n];return this.normalized&&(a=qo(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=Fn(a,this.array)),this.array[t*this.itemSize+n]=a,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=qo(n,this.array)),n}setX(t,n){return this.normalized&&(n=Fn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=qo(n,this.array)),n}setY(t,n){return this.normalized&&(n=Fn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=qo(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Fn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=qo(n,this.array)),n}setW(t,n){return this.normalized&&(n=Fn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,a){return t*=this.itemSize,this.normalized&&(n=Fn(n,this.array),a=Fn(a,this.array)),this.array[t+0]=n,this.array[t+1]=a,this}setXYZ(t,n,a,r){return t*=this.itemSize,this.normalized&&(n=Fn(n,this.array),a=Fn(a,this.array),r=Fn(r,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=r,this}setXYZW(t,n,a,r,l){return t*=this.itemSize,this.normalized&&(n=Fn(n,this.array),a=Fn(a,this.array),r=Fn(r,this.array),l=Fn(l,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=r,this.array[t+3]=l,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==kv&&(t.usage=this.usage),t}}class y_ extends Bi{constructor(t,n,a){super(new Uint16Array(t),n,a)}}class S_ extends Bi{constructor(t,n,a){super(new Uint32Array(t),n,a)}}class Ii extends Bi{constructor(t,n,a){super(new Float32Array(t),n,a)}}let IM=0;const ui=new $e,kh=new Nn,br=new ut,$n=new sl,Ko=new sl,vn=new ut;class ns extends kr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:IM++}),this.uuid=il(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(d_(t)?S_:y_)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,a=0){this.groups.push({start:t,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const l=new le().getNormalMatrix(t);a.applyNormalMatrix(l),a.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ui.makeRotationFromQuaternion(t),this.applyMatrix4(ui),this}rotateX(t){return ui.makeRotationX(t),this.applyMatrix4(ui),this}rotateY(t){return ui.makeRotationY(t),this.applyMatrix4(ui),this}rotateZ(t){return ui.makeRotationZ(t),this.applyMatrix4(ui),this}translate(t,n,a){return ui.makeTranslation(t,n,a),this.applyMatrix4(ui),this}scale(t,n,a){return ui.makeScale(t,n,a),this.applyMatrix4(ui),this}lookAt(t){return kh.lookAt(t),kh.updateMatrix(),this.applyMatrix4(kh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(br).negate(),this.translate(br.x,br.y,br.z),this}setFromPoints(t){const n=[];for(let a=0,r=t.length;a<r;a++){const l=t[a];n.push(l.x,l.y,l.z||0)}return this.setAttribute("position",new Ii(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sl);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ut(-1/0,-1/0,-1/0),new ut(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let a=0,r=n.length;a<r;a++){const l=n[a];$n.setFromBufferAttribute(l),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xd);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ut,1/0);return}if(t){const a=this.boundingSphere.center;if($n.setFromBufferAttribute(t),n)for(let l=0,u=n.length;l<u;l++){const h=n[l];Ko.setFromBufferAttribute(h),this.morphTargetsRelative?(vn.addVectors($n.min,Ko.min),$n.expandByPoint(vn),vn.addVectors($n.max,Ko.max),$n.expandByPoint(vn)):($n.expandByPoint(Ko.min),$n.expandByPoint(Ko.max))}$n.getCenter(a);let r=0;for(let l=0,u=t.count;l<u;l++)vn.fromBufferAttribute(t,l),r=Math.max(r,a.distanceToSquared(vn));if(n)for(let l=0,u=n.length;l<u;l++){const h=n[l],d=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)vn.fromBufferAttribute(h,p),d&&(br.fromBufferAttribute(t,p),vn.add(br)),r=Math.max(r,a.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,r=n.normal,l=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bi(new Float32Array(4*a.count),4));const u=this.getAttribute("tangent"),h=[],d=[];for(let k=0;k<a.count;k++)h[k]=new ut,d[k]=new ut;const p=new ut,g=new ut,_=new ut,v=new Me,S=new Me,M=new Me,E=new ut,x=new ut;function y(k,U,w){p.fromBufferAttribute(a,k),g.fromBufferAttribute(a,U),_.fromBufferAttribute(a,w),v.fromBufferAttribute(l,k),S.fromBufferAttribute(l,U),M.fromBufferAttribute(l,w),g.sub(p),_.sub(p),S.sub(v),M.sub(v);const F=1/(S.x*M.y-M.x*S.y);isFinite(F)&&(E.copy(g).multiplyScalar(M.y).addScaledVector(_,-S.y).multiplyScalar(F),x.copy(_).multiplyScalar(S.x).addScaledVector(g,-M.x).multiplyScalar(F),h[k].add(E),h[U].add(E),h[w].add(E),d[k].add(x),d[U].add(x),d[w].add(x))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let k=0,U=T.length;k<U;++k){const w=T[k],F=w.start,it=w.count;for(let V=F,Q=F+it;V<Q;V+=3)y(t.getX(V+0),t.getX(V+1),t.getX(V+2))}const A=new ut,D=new ut,I=new ut,P=new ut;function z(k){I.fromBufferAttribute(r,k),P.copy(I);const U=h[k];A.copy(U),A.sub(I.multiplyScalar(I.dot(U))).normalize(),D.crossVectors(P,U);const F=D.dot(d[k])<0?-1:1;u.setXYZW(k,A.x,A.y,A.z,F)}for(let k=0,U=T.length;k<U;++k){const w=T[k],F=w.start,it=w.count;for(let V=F,Q=F+it;V<Q;V+=3)z(t.getX(V+0)),z(t.getX(V+1)),z(t.getX(V+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new Bi(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let v=0,S=a.count;v<S;v++)a.setXYZ(v,0,0,0);const r=new ut,l=new ut,u=new ut,h=new ut,d=new ut,p=new ut,g=new ut,_=new ut;if(t)for(let v=0,S=t.count;v<S;v+=3){const M=t.getX(v+0),E=t.getX(v+1),x=t.getX(v+2);r.fromBufferAttribute(n,M),l.fromBufferAttribute(n,E),u.fromBufferAttribute(n,x),g.subVectors(u,l),_.subVectors(r,l),g.cross(_),h.fromBufferAttribute(a,M),d.fromBufferAttribute(a,E),p.fromBufferAttribute(a,x),h.add(g),d.add(g),p.add(g),a.setXYZ(M,h.x,h.y,h.z),a.setXYZ(E,d.x,d.y,d.z),a.setXYZ(x,p.x,p.y,p.z)}else for(let v=0,S=n.count;v<S;v+=3)r.fromBufferAttribute(n,v+0),l.fromBufferAttribute(n,v+1),u.fromBufferAttribute(n,v+2),g.subVectors(u,l),_.subVectors(r,l),g.cross(_),a.setXYZ(v+0,g.x,g.y,g.z),a.setXYZ(v+1,g.x,g.y,g.z),a.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,a=t.count;n<a;n++)vn.fromBufferAttribute(t,n),vn.normalize(),t.setXYZ(n,vn.x,vn.y,vn.z)}toNonIndexed(){function t(h,d){const p=h.array,g=h.itemSize,_=h.normalized,v=new p.constructor(d.length*g);let S=0,M=0;for(let E=0,x=d.length;E<x;E++){h.isInterleavedBufferAttribute?S=d[E]*h.data.stride+h.offset:S=d[E]*g;for(let y=0;y<g;y++)v[M++]=p[S++]}return new Bi(v,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ns,a=this.index.array,r=this.attributes;for(const h in r){const d=r[h],p=t(d,a);n.setAttribute(h,p)}const l=this.morphAttributes;for(const h in l){const d=[],p=l[h];for(let g=0,_=p.length;g<_;g++){const v=p[g],S=t(v,a);d.push(S)}n.morphAttributes[h]=d}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,d=u.length;h<d;h++){const p=u[h];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const p in d)d[p]!==void 0&&(t[p]=d[p]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const d in a){const p=a[d];t.data.attributes[d]=p.toJSON(t.data)}const r={};let l=!1;for(const d in this.morphAttributes){const p=this.morphAttributes[d],g=[];for(let _=0,v=p.length;_<v;_++){const S=p[_];g.push(S.toJSON(t.data))}g.length>0&&(r[d]=g,l=!0)}l&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(t.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone(n));const r=t.attributes;for(const p in r){const g=r[p];this.setAttribute(p,g.clone(n))}const l=t.morphAttributes;for(const p in l){const g=[],_=l[p];for(let v=0,S=_.length;v<S;v++)g.push(_[v].clone(n));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const u=t.groups;for(let p=0,g=u.length;p<g;p++){const _=u[p];this.addGroup(_.start,_.count,_.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const d=t.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const i0=new $e,Ss=new DM,wc=new xd,a0=new ut,Tr=new ut,Ar=new ut,wr=new ut,Wh=new ut,Rc=new ut,Cc=new Me,Dc=new Me,Nc=new Me,s0=new ut,r0=new ut,o0=new ut,Uc=new ut,Lc=new ut;class di extends Nn{constructor(t=new ns,n=new x_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const r=n[a[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=r.length;l<u;l++){const h=r[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=l}}}}getVertexPosition(t,n){const a=this.geometry,r=a.attributes.position,l=a.morphAttributes.position,u=a.morphTargetsRelative;n.fromBufferAttribute(r,t);const h=this.morphTargetInfluences;if(l&&h){Rc.set(0,0,0);for(let d=0,p=l.length;d<p;d++){const g=h[d],_=l[d];g!==0&&(Wh.fromBufferAttribute(_,t),u?Rc.addScaledVector(Wh,g):Rc.addScaledVector(Wh.sub(n),g))}n.add(Rc)}return n}raycast(t,n){const a=this.geometry,r=this.material,l=this.matrixWorld;r!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),wc.copy(a.boundingSphere),wc.applyMatrix4(l),Ss.copy(t.ray).recast(t.near),!(wc.containsPoint(Ss.origin)===!1&&(Ss.intersectSphere(wc,a0)===null||Ss.origin.distanceToSquared(a0)>(t.far-t.near)**2))&&(i0.copy(l).invert(),Ss.copy(t.ray).applyMatrix4(i0),!(a.boundingBox!==null&&Ss.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,n,Ss)))}_computeIntersections(t,n,a){let r;const l=this.geometry,u=this.material,h=l.index,d=l.attributes.position,p=l.attributes.uv,g=l.attributes.uv1,_=l.attributes.normal,v=l.groups,S=l.drawRange;if(h!==null)if(Array.isArray(u))for(let M=0,E=v.length;M<E;M++){const x=v[M],y=u[x.materialIndex],T=Math.max(x.start,S.start),A=Math.min(h.count,Math.min(x.start+x.count,S.start+S.count));for(let D=T,I=A;D<I;D+=3){const P=h.getX(D),z=h.getX(D+1),k=h.getX(D+2);r=Oc(this,y,t,a,p,g,_,P,z,k),r&&(r.faceIndex=Math.floor(D/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const M=Math.max(0,S.start),E=Math.min(h.count,S.start+S.count);for(let x=M,y=E;x<y;x+=3){const T=h.getX(x),A=h.getX(x+1),D=h.getX(x+2);r=Oc(this,u,t,a,p,g,_,T,A,D),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}else if(d!==void 0)if(Array.isArray(u))for(let M=0,E=v.length;M<E;M++){const x=v[M],y=u[x.materialIndex],T=Math.max(x.start,S.start),A=Math.min(d.count,Math.min(x.start+x.count,S.start+S.count));for(let D=T,I=A;D<I;D+=3){const P=D,z=D+1,k=D+2;r=Oc(this,y,t,a,p,g,_,P,z,k),r&&(r.faceIndex=Math.floor(D/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const M=Math.max(0,S.start),E=Math.min(d.count,S.start+S.count);for(let x=M,y=E;x<y;x+=3){const T=x,A=x+1,D=x+2;r=Oc(this,u,t,a,p,g,_,T,A,D),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}}}function FM(c,t,n,a,r,l,u,h){let d;if(t.side===Vn?d=a.intersectTriangle(u,l,r,!0,h):d=a.intersectTriangle(r,l,u,t.side===Ja,h),d===null)return null;Lc.copy(h),Lc.applyMatrix4(c.matrixWorld);const p=n.ray.origin.distanceTo(Lc);return p<n.near||p>n.far?null:{distance:p,point:Lc.clone(),object:c}}function Oc(c,t,n,a,r,l,u,h,d,p){c.getVertexPosition(h,Tr),c.getVertexPosition(d,Ar),c.getVertexPosition(p,wr);const g=FM(c,t,n,a,Tr,Ar,wr,Uc);if(g){r&&(Cc.fromBufferAttribute(r,h),Dc.fromBufferAttribute(r,d),Nc.fromBufferAttribute(r,p),g.uv=Pi.getInterpolation(Uc,Tr,Ar,wr,Cc,Dc,Nc,new Me)),l&&(Cc.fromBufferAttribute(l,h),Dc.fromBufferAttribute(l,d),Nc.fromBufferAttribute(l,p),g.uv1=Pi.getInterpolation(Uc,Tr,Ar,wr,Cc,Dc,Nc,new Me)),u&&(s0.fromBufferAttribute(u,h),r0.fromBufferAttribute(u,d),o0.fromBufferAttribute(u,p),g.normal=Pi.getInterpolation(Uc,Tr,Ar,wr,s0,r0,o0,new ut),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const _={a:h,b:d,c:p,normal:new ut,materialIndex:0};Pi.getNormal(Tr,Ar,wr,_.normal),g.face=_}return g}class Wr extends ns{constructor(t=1,n=1,a=1,r=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:a,widthSegments:r,heightSegments:l,depthSegments:u};const h=this;r=Math.floor(r),l=Math.floor(l),u=Math.floor(u);const d=[],p=[],g=[],_=[];let v=0,S=0;M("z","y","x",-1,-1,a,n,t,u,l,0),M("z","y","x",1,-1,a,n,-t,u,l,1),M("x","z","y",1,1,t,a,n,r,u,2),M("x","z","y",1,-1,t,a,-n,r,u,3),M("x","y","z",1,-1,t,n,a,r,l,4),M("x","y","z",-1,-1,t,n,-a,r,l,5),this.setIndex(d),this.setAttribute("position",new Ii(p,3)),this.setAttribute("normal",new Ii(g,3)),this.setAttribute("uv",new Ii(_,2));function M(E,x,y,T,A,D,I,P,z,k,U){const w=D/z,F=I/k,it=D/2,V=I/2,Q=P/2,Y=z+1,L=k+1;let Z=0,W=0;const ht=new ut;for(let B=0;B<L;B++){const $=B*F-V;for(let ot=0;ot<Y;ot++){const yt=ot*w-it;ht[E]=yt*T,ht[x]=$*A,ht[y]=Q,p.push(ht.x,ht.y,ht.z),ht[E]=0,ht[x]=0,ht[y]=P>0?1:-1,g.push(ht.x,ht.y,ht.z),_.push(ot/z),_.push(1-B/k),Z+=1}}for(let B=0;B<k;B++)for(let $=0;$<z;$++){const ot=v+$+Y*B,yt=v+$+Y*(B+1),tt=v+($+1)+Y*(B+1),dt=v+($+1)+Y*B;d.push(ot,yt,dt),d.push(yt,tt,dt),W+=6}h.addGroup(S,W,U),S+=W,v+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Vr(c){const t={};for(const n in c){t[n]={};for(const a in c[n]){const r=c[n][a];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][a]=null):t[n][a]=r.clone():Array.isArray(r)?t[n][a]=r.slice():t[n][a]=r}}return t}function Ln(c){const t={};for(let n=0;n<c.length;n++){const a=Vr(c[n]);for(const r in a)t[r]=a[r]}return t}function HM(c){const t=[];for(let n=0;n<c.length;n++)t.push(c[n].clone());return t}function M_(c){const t=c.getRenderTarget();return t===null?c.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ue.workingColorSpace}const GM={clone:Vr,merge:Ln};var VM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ts extends rl{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=VM,this.fragmentShader=kM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Vr(t.uniforms),this.uniformsGroups=HM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const u=this.uniforms[r].value;u&&u.isTexture?n.uniforms[r]={type:"t",value:u.toJSON(t).uuid}:u&&u.isColor?n.uniforms[r]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[r]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[r]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[r]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[r]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[r]={type:"m4",value:u.toArray()}:n.uniforms[r]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const r in this.extensions)this.extensions[r]===!0&&(a[r]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class E_ extends Nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=da}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const qa=new ut,l0=new Me,c0=new Me;class fi extends E_{constructor(t=50,n=1,a=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=dd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ah*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return dd*2*Math.atan(Math.tan(Ah*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,a){qa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qa.x,qa.y).multiplyScalar(-t/qa.z),qa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(qa.x,qa.y).multiplyScalar(-t/qa.z)}getViewSize(t,n){return this.getViewBounds(t,l0,c0),n.subVectors(c0,l0)}setViewOffset(t,n,a,r,l,u){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=r,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Ah*.5*this.fov)/this.zoom,a=2*n,r=this.aspect*a,l=-.5*r;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,p=u.fullHeight;l+=u.offsetX*r/d,n-=u.offsetY*a/p,r*=u.width/d,a*=u.height/p}const h=this.filmOffset;h!==0&&(l+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+r,n,n-a,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Rr=-90,Cr=1;class WM extends Nn{constructor(t,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new fi(Rr,Cr,t,n);r.layers=this.layers,this.add(r);const l=new fi(Rr,Cr,t,n);l.layers=this.layers,this.add(l);const u=new fi(Rr,Cr,t,n);u.layers=this.layers,this.add(u);const h=new fi(Rr,Cr,t,n);h.layers=this.layers,this.add(h);const d=new fi(Rr,Cr,t,n);d.layers=this.layers,this.add(d);const p=new fi(Rr,Cr,t,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[a,r,l,u,h,d]=n;for(const p of n)this.remove(p);if(t===da)a.up.set(0,1,0),a.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(t===Qc)a.up.set(0,-1,0),a.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of n)this.add(p),p.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[l,u,h,d,p,g]=this.children,_=t.getRenderTarget(),v=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),M=t.xr.enabled;t.xr.enabled=!1;const E=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,t.setRenderTarget(a,0,r),t.render(n,l),t.setRenderTarget(a,1,r),t.render(n,u),t.setRenderTarget(a,2,r),t.render(n,h),t.setRenderTarget(a,3,r),t.render(n,d),t.setRenderTarget(a,4,r),t.render(n,p),a.texture.generateMipmaps=E,t.setRenderTarget(a,5,r),t.render(n,g),t.setRenderTarget(_,v,S),t.xr.enabled=M,a.texture.needsPMREMUpdate=!0}}class b_ extends kn{constructor(t,n,a,r,l,u,h,d,p,g){t=t!==void 0?t:[],n=n!==void 0?n:Br,super(t,n,a,r,l,u,h,d,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class jM extends Ls{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},r=[a,a,a,a,a,a];this.texture=new b_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Mi}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Wr(5,5,5),l=new ts({name:"CubemapFromEquirect",uniforms:Vr(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:Vn,blending:Ka});l.uniforms.tEquirect.value=n;const u=new di(r,l),h=n.minFilter;return n.minFilter===Us&&(n.minFilter=Mi),new WM(1,10,this).update(t,u),n.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(t,n,a,r){const l=t.getRenderTarget();for(let u=0;u<6;u++)t.setRenderTarget(this,u),t.clear(n,a,r);t.setRenderTarget(l)}}const jh=new ut,qM=new ut,XM=new le;let As=class{constructor(t=new ut(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,a,r){return this.normal.set(t,n,a),this.constant=r,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,a){const r=jh.subVectors(a,n).cross(qM.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const a=t.delta(jh),r=this.normal.dot(a);if(r===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const l=-(t.start.dot(this.normal)+this.constant)/r;return l<0||l>1?null:n.copy(t.start).addScaledVector(a,l)}intersectsLine(t){const n=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return n<0&&a>0||a<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const a=n||XM.getNormalMatrix(t),r=this.coplanarPoint(jh).applyMatrix4(t),l=this.normal.applyMatrix3(a).normalize();return this.constant=-r.dot(l),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}};const Ms=new xd,Pc=new ut;class yd{constructor(t=new As,n=new As,a=new As,r=new As,l=new As,u=new As){this.planes=[t,n,a,r,l,u]}set(t,n,a,r,l,u){const h=this.planes;return h[0].copy(t),h[1].copy(n),h[2].copy(a),h[3].copy(r),h[4].copy(l),h[5].copy(u),this}copy(t){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,n=da){const a=this.planes,r=t.elements,l=r[0],u=r[1],h=r[2],d=r[3],p=r[4],g=r[5],_=r[6],v=r[7],S=r[8],M=r[9],E=r[10],x=r[11],y=r[12],T=r[13],A=r[14],D=r[15];if(a[0].setComponents(d-l,v-p,x-S,D-y).normalize(),a[1].setComponents(d+l,v+p,x+S,D+y).normalize(),a[2].setComponents(d+u,v+g,x+M,D+T).normalize(),a[3].setComponents(d-u,v-g,x-M,D-T).normalize(),a[4].setComponents(d-h,v-_,x-E,D-A).normalize(),n===da)a[5].setComponents(d+h,v+_,x+E,D+A).normalize();else if(n===Qc)a[5].setComponents(h,_,E,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ms.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ms.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ms)}intersectsSprite(t){return Ms.center.set(0,0,0),Ms.radius=.7071067811865476,Ms.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ms)}intersectsSphere(t){const n=this.planes,a=t.center,r=-t.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(a)<r)return!1;return!0}intersectsBox(t){const n=this.planes;for(let a=0;a<6;a++){const r=n[a];if(Pc.x=r.normal.x>0?t.max.x:t.min.x,Pc.y=r.normal.y>0?t.max.y:t.min.y,Pc.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Pc)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function T_(){let c=null,t=!1,n=null,a=null;function r(l,u){n(l,u),a=c.requestAnimationFrame(r)}return{start:function(){t!==!0&&n!==null&&(a=c.requestAnimationFrame(r),t=!0)},stop:function(){c.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(l){n=l},setContext:function(l){c=l}}}function YM(c){const t=new WeakMap;function n(h,d){const p=h.array,g=h.usage,_=p.byteLength,v=c.createBuffer();c.bindBuffer(d,v),c.bufferData(d,p,g),h.onUploadCallback();let S;if(p instanceof Float32Array)S=c.FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?S=c.HALF_FLOAT:S=c.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=c.SHORT;else if(p instanceof Uint32Array)S=c.UNSIGNED_INT;else if(p instanceof Int32Array)S=c.INT;else if(p instanceof Int8Array)S=c.BYTE;else if(p instanceof Uint8Array)S=c.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=c.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:_}}function a(h,d,p){const g=d.array,_=d._updateRange,v=d.updateRanges;if(c.bindBuffer(p,h),_.count===-1&&v.length===0&&c.bufferSubData(p,0,g),v.length!==0){for(let S=0,M=v.length;S<M;S++){const E=v[S];c.bufferSubData(p,E.start*g.BYTES_PER_ELEMENT,g,E.start,E.count)}d.clearUpdateRanges()}_.count!==-1&&(c.bufferSubData(p,_.offset*g.BYTES_PER_ELEMENT,g,_.offset,_.count),_.count=-1),d.onUploadCallback()}function r(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function l(h){h.isInterleavedBufferAttribute&&(h=h.data);const d=t.get(h);d&&(c.deleteBuffer(d.buffer),t.delete(h))}function u(h,d){if(h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const p=t.get(h);if(p===void 0)t.set(h,n(h,d));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(p.buffer,h,d),p.version=h.version}}return{get:r,remove:l,update:u}}class su extends ns{constructor(t=1,n=1,a=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:a,heightSegments:r};const l=t/2,u=n/2,h=Math.floor(a),d=Math.floor(r),p=h+1,g=d+1,_=t/h,v=n/d,S=[],M=[],E=[],x=[];for(let y=0;y<g;y++){const T=y*v-u;for(let A=0;A<p;A++){const D=A*_-l;M.push(D,-T,0),E.push(0,0,1),x.push(A/h),x.push(1-y/d)}}for(let y=0;y<d;y++)for(let T=0;T<h;T++){const A=T+p*y,D=T+p*(y+1),I=T+1+p*(y+1),P=T+1+p*y;S.push(A,D,P),S.push(D,I,P)}this.setIndex(S),this.setAttribute("position",new Ii(M,3)),this.setAttribute("normal",new Ii(E,3)),this.setAttribute("uv",new Ii(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new su(t.width,t.height,t.widthSegments,t.heightSegments)}}var ZM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,KM=`#ifdef USE_ALPHAHASH
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
#endif`,QM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,JM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$M=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,eE=`#ifdef USE_AOMAP
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
#endif`,nE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,iE=`#ifdef USE_BATCHING
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
#endif`,aE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,sE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,oE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,lE=`#ifdef USE_IRIDESCENCE
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
#endif`,cE=`#ifdef USE_BUMPMAP
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
#endif`,uE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,vE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,_E=`#define PI 3.141592653589793
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
} // validated`,xE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,yE=`vec3 transformedNormal = objectNormal;
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
#endif`,SE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ME=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,EE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,TE="gl_FragColor = linearToOutputTexel( gl_FragColor );",AE=`
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
}`,wE=`#ifdef USE_ENVMAP
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
#endif`,RE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,CE=`#ifdef USE_ENVMAP
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
#endif`,DE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,NE=`#ifdef USE_ENVMAP
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
#endif`,UE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,LE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,OE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,PE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zE=`#ifdef USE_GRADIENTMAP
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
}`,BE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,IE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,FE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,HE=`uniform bool receiveShadow;
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
#endif`,GE=`#ifdef USE_ENVMAP
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
#endif`,VE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,WE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qE=`PhysicalMaterial material;
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
#endif`,XE=`struct PhysicalMaterial {
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
}`,YE=`
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
#endif`,ZE=`#if defined( RE_IndirectDiffuse )
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
#endif`,KE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,QE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,JE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$E=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,eb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ib=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ab=`#if defined( USE_POINTS_UV )
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
#endif`,sb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ob=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ub=`#ifdef USE_MORPHTARGETS
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
#endif`,fb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,db=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,pb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vb=`#ifdef USE_NORMALMAP
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
#endif`,_b=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Eb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,bb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ab=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Db=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Nb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ub=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Lb=`float getShadowMask() {
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
}`,Ob=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pb=`#ifdef USE_SKINNING
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
#endif`,zb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bb=`#ifdef USE_SKINNING
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
#endif`,Ib=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vb=`#ifdef USE_TRANSMISSION
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
#endif`,kb=`#ifdef USE_TRANSMISSION
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
#endif`,Wb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Yb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zb=`uniform sampler2D t2D;
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
}`,Kb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Jb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$b=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tT=`#include <common>
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
}`,eT=`#if DEPTH_PACKING == 3200
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
}`,nT=`#define DISTANCE
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
}`,iT=`#define DISTANCE
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
}`,aT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rT=`uniform float scale;
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
}`,oT=`uniform vec3 diffuse;
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
}`,lT=`#include <common>
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
}`,cT=`uniform vec3 diffuse;
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
}`,uT=`#define LAMBERT
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
}`,fT=`#define LAMBERT
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
}`,hT=`#define MATCAP
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
}`,dT=`#define MATCAP
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
}`,pT=`#define NORMAL
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
}`,mT=`#define NORMAL
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
}`,gT=`#define PHONG
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
}`,vT=`#define PHONG
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
}`,_T=`#define STANDARD
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
}`,xT=`#define STANDARD
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
}`,yT=`#define TOON
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
}`,ST=`#define TOON
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
}`,MT=`uniform float size;
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
}`,ET=`uniform vec3 diffuse;
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
}`,bT=`#include <common>
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
}`,TT=`uniform vec3 color;
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
}`,AT=`uniform float rotation;
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
}`,wT=`uniform vec3 diffuse;
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
}`,oe={alphahash_fragment:ZM,alphahash_pars_fragment:KM,alphamap_fragment:QM,alphamap_pars_fragment:JM,alphatest_fragment:$M,alphatest_pars_fragment:tE,aomap_fragment:eE,aomap_pars_fragment:nE,batching_pars_vertex:iE,batching_vertex:aE,begin_vertex:sE,beginnormal_vertex:rE,bsdfs:oE,iridescence_fragment:lE,bumpmap_pars_fragment:cE,clipping_planes_fragment:uE,clipping_planes_pars_fragment:fE,clipping_planes_pars_vertex:hE,clipping_planes_vertex:dE,color_fragment:pE,color_pars_fragment:mE,color_pars_vertex:gE,color_vertex:vE,common:_E,cube_uv_reflection_fragment:xE,defaultnormal_vertex:yE,displacementmap_pars_vertex:SE,displacementmap_vertex:ME,emissivemap_fragment:EE,emissivemap_pars_fragment:bE,colorspace_fragment:TE,colorspace_pars_fragment:AE,envmap_fragment:wE,envmap_common_pars_fragment:RE,envmap_pars_fragment:CE,envmap_pars_vertex:DE,envmap_physical_pars_fragment:GE,envmap_vertex:NE,fog_vertex:UE,fog_pars_vertex:LE,fog_fragment:OE,fog_pars_fragment:PE,gradientmap_pars_fragment:zE,lightmap_pars_fragment:BE,lights_lambert_fragment:IE,lights_lambert_pars_fragment:FE,lights_pars_begin:HE,lights_toon_fragment:VE,lights_toon_pars_fragment:kE,lights_phong_fragment:WE,lights_phong_pars_fragment:jE,lights_physical_fragment:qE,lights_physical_pars_fragment:XE,lights_fragment_begin:YE,lights_fragment_maps:ZE,lights_fragment_end:KE,logdepthbuf_fragment:QE,logdepthbuf_pars_fragment:JE,logdepthbuf_pars_vertex:$E,logdepthbuf_vertex:tb,map_fragment:eb,map_pars_fragment:nb,map_particle_fragment:ib,map_particle_pars_fragment:ab,metalnessmap_fragment:sb,metalnessmap_pars_fragment:rb,morphinstance_vertex:ob,morphcolor_vertex:lb,morphnormal_vertex:cb,morphtarget_pars_vertex:ub,morphtarget_vertex:fb,normal_fragment_begin:hb,normal_fragment_maps:db,normal_pars_fragment:pb,normal_pars_vertex:mb,normal_vertex:gb,normalmap_pars_fragment:vb,clearcoat_normal_fragment_begin:_b,clearcoat_normal_fragment_maps:xb,clearcoat_pars_fragment:yb,iridescence_pars_fragment:Sb,opaque_fragment:Mb,packing:Eb,premultiplied_alpha_fragment:bb,project_vertex:Tb,dithering_fragment:Ab,dithering_pars_fragment:wb,roughnessmap_fragment:Rb,roughnessmap_pars_fragment:Cb,shadowmap_pars_fragment:Db,shadowmap_pars_vertex:Nb,shadowmap_vertex:Ub,shadowmask_pars_fragment:Lb,skinbase_vertex:Ob,skinning_pars_vertex:Pb,skinning_vertex:zb,skinnormal_vertex:Bb,specularmap_fragment:Ib,specularmap_pars_fragment:Fb,tonemapping_fragment:Hb,tonemapping_pars_fragment:Gb,transmission_fragment:Vb,transmission_pars_fragment:kb,uv_pars_fragment:Wb,uv_pars_vertex:jb,uv_vertex:qb,worldpos_vertex:Xb,background_vert:Yb,background_frag:Zb,backgroundCube_vert:Kb,backgroundCube_frag:Qb,cube_vert:Jb,cube_frag:$b,depth_vert:tT,depth_frag:eT,distanceRGBA_vert:nT,distanceRGBA_frag:iT,equirect_vert:aT,equirect_frag:sT,linedashed_vert:rT,linedashed_frag:oT,meshbasic_vert:lT,meshbasic_frag:cT,meshlambert_vert:uT,meshlambert_frag:fT,meshmatcap_vert:hT,meshmatcap_frag:dT,meshnormal_vert:pT,meshnormal_frag:mT,meshphong_vert:gT,meshphong_frag:vT,meshphysical_vert:_T,meshphysical_frag:xT,meshtoon_vert:yT,meshtoon_frag:ST,points_vert:MT,points_frag:ET,shadow_vert:bT,shadow_frag:TT,sprite_vert:AT,sprite_frag:wT},Lt={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new le}},envmap:{envMap:{value:null},envMapRotation:{value:new le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new le},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0},uvTransform:{value:new le}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}}},Oi={basic:{uniforms:Ln([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:oe.meshbasic_vert,fragmentShader:oe.meshbasic_frag},lambert:{uniforms:Ln([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Ae(0)}}]),vertexShader:oe.meshlambert_vert,fragmentShader:oe.meshlambert_frag},phong:{uniforms:Ln([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30}}]),vertexShader:oe.meshphong_vert,fragmentShader:oe.meshphong_frag},standard:{uniforms:Ln([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag},toon:{uniforms:Ln([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new Ae(0)}}]),vertexShader:oe.meshtoon_vert,fragmentShader:oe.meshtoon_frag},matcap:{uniforms:Ln([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:oe.meshmatcap_vert,fragmentShader:oe.meshmatcap_frag},points:{uniforms:Ln([Lt.points,Lt.fog]),vertexShader:oe.points_vert,fragmentShader:oe.points_frag},dashed:{uniforms:Ln([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:oe.linedashed_vert,fragmentShader:oe.linedashed_frag},depth:{uniforms:Ln([Lt.common,Lt.displacementmap]),vertexShader:oe.depth_vert,fragmentShader:oe.depth_frag},normal:{uniforms:Ln([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:oe.meshnormal_vert,fragmentShader:oe.meshnormal_frag},sprite:{uniforms:Ln([Lt.sprite,Lt.fog]),vertexShader:oe.sprite_vert,fragmentShader:oe.sprite_frag},background:{uniforms:{uvTransform:{value:new le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:oe.background_vert,fragmentShader:oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new le}},vertexShader:oe.backgroundCube_vert,fragmentShader:oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:oe.cube_vert,fragmentShader:oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:oe.equirect_vert,fragmentShader:oe.equirect_frag},distanceRGBA:{uniforms:Ln([Lt.common,Lt.displacementmap,{referencePosition:{value:new ut},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:oe.distanceRGBA_vert,fragmentShader:oe.distanceRGBA_frag},shadow:{uniforms:Ln([Lt.lights,Lt.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:oe.shadow_vert,fragmentShader:oe.shadow_frag}};Oi.physical={uniforms:Ln([Oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new le},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new le},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new le},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new le},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new le},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new le}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag};const zc={r:0,b:0,g:0},Es=new Fi,RT=new $e;function CT(c,t,n,a,r,l,u){const h=new Ae(0);let d=l===!0?0:1,p,g,_=null,v=0,S=null;function M(T){let A=T.isScene===!0?T.background:null;return A&&A.isTexture&&(A=(T.backgroundBlurriness>0?n:t).get(A)),A}function E(T){let A=!1;const D=M(T);D===null?y(h,d):D&&D.isColor&&(y(D,1),A=!0);const I=c.xr.getEnvironmentBlendMode();I==="additive"?a.buffers.color.setClear(0,0,0,1,u):I==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,u),(c.autoClear||A)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),c.clear(c.autoClearColor,c.autoClearDepth,c.autoClearStencil))}function x(T,A){const D=M(A);D&&(D.isCubeTexture||D.mapping===nu)?(g===void 0&&(g=new di(new Wr(1,1,1),new ts({name:"BackgroundCubeMaterial",uniforms:Vr(Oi.backgroundCube.uniforms),vertexShader:Oi.backgroundCube.vertexShader,fragmentShader:Oi.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(I,P,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(g)),Es.copy(A.backgroundRotation),Es.x*=-1,Es.y*=-1,Es.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Es.y*=-1,Es.z*=-1),g.material.uniforms.envMap.value=D,g.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(RT.makeRotationFromEuler(Es)),g.material.toneMapped=Ue.getTransfer(D.colorSpace)!==Ve,(_!==D||v!==D.version||S!==c.toneMapping)&&(g.material.needsUpdate=!0,_=D,v=D.version,S=c.toneMapping),g.layers.enableAll(),T.unshift(g,g.geometry,g.material,0,0,null)):D&&D.isTexture&&(p===void 0&&(p=new di(new su(2,2),new ts({name:"BackgroundMaterial",uniforms:Vr(Oi.background.uniforms),vertexShader:Oi.background.vertexShader,fragmentShader:Oi.background.fragmentShader,side:Ja,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=D,p.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,p.material.toneMapped=Ue.getTransfer(D.colorSpace)!==Ve,D.matrixAutoUpdate===!0&&D.updateMatrix(),p.material.uniforms.uvTransform.value.copy(D.matrix),(_!==D||v!==D.version||S!==c.toneMapping)&&(p.material.needsUpdate=!0,_=D,v=D.version,S=c.toneMapping),p.layers.enableAll(),T.unshift(p,p.geometry,p.material,0,0,null))}function y(T,A){T.getRGB(zc,M_(c)),a.buffers.color.setClear(zc.r,zc.g,zc.b,A,u)}return{getClearColor:function(){return h},setClearColor:function(T,A=1){h.set(T),d=A,y(h,d)},getClearAlpha:function(){return d},setClearAlpha:function(T){d=T,y(h,d)},render:E,addToRenderList:x}}function DT(c,t){const n=c.getParameter(c.MAX_VERTEX_ATTRIBS),a={},r=v(null);let l=r,u=!1;function h(w,F,it,V,Q){let Y=!1;const L=_(V,it,F);l!==L&&(l=L,p(l.object)),Y=S(w,V,it,Q),Y&&M(w,V,it,Q),Q!==null&&t.update(Q,c.ELEMENT_ARRAY_BUFFER),(Y||u)&&(u=!1,D(w,F,it,V),Q!==null&&c.bindBuffer(c.ELEMENT_ARRAY_BUFFER,t.get(Q).buffer))}function d(){return c.createVertexArray()}function p(w){return c.bindVertexArray(w)}function g(w){return c.deleteVertexArray(w)}function _(w,F,it){const V=it.wireframe===!0;let Q=a[w.id];Q===void 0&&(Q={},a[w.id]=Q);let Y=Q[F.id];Y===void 0&&(Y={},Q[F.id]=Y);let L=Y[V];return L===void 0&&(L=v(d()),Y[V]=L),L}function v(w){const F=[],it=[],V=[];for(let Q=0;Q<n;Q++)F[Q]=0,it[Q]=0,V[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:it,attributeDivisors:V,object:w,attributes:{},index:null}}function S(w,F,it,V){const Q=l.attributes,Y=F.attributes;let L=0;const Z=it.getAttributes();for(const W in Z)if(Z[W].location>=0){const B=Q[W];let $=Y[W];if($===void 0&&(W==="instanceMatrix"&&w.instanceMatrix&&($=w.instanceMatrix),W==="instanceColor"&&w.instanceColor&&($=w.instanceColor)),B===void 0||B.attribute!==$||$&&B.data!==$.data)return!0;L++}return l.attributesNum!==L||l.index!==V}function M(w,F,it,V){const Q={},Y=F.attributes;let L=0;const Z=it.getAttributes();for(const W in Z)if(Z[W].location>=0){let B=Y[W];B===void 0&&(W==="instanceMatrix"&&w.instanceMatrix&&(B=w.instanceMatrix),W==="instanceColor"&&w.instanceColor&&(B=w.instanceColor));const $={};$.attribute=B,B&&B.data&&($.data=B.data),Q[W]=$,L++}l.attributes=Q,l.attributesNum=L,l.index=V}function E(){const w=l.newAttributes;for(let F=0,it=w.length;F<it;F++)w[F]=0}function x(w){y(w,0)}function y(w,F){const it=l.newAttributes,V=l.enabledAttributes,Q=l.attributeDivisors;it[w]=1,V[w]===0&&(c.enableVertexAttribArray(w),V[w]=1),Q[w]!==F&&(c.vertexAttribDivisor(w,F),Q[w]=F)}function T(){const w=l.newAttributes,F=l.enabledAttributes;for(let it=0,V=F.length;it<V;it++)F[it]!==w[it]&&(c.disableVertexAttribArray(it),F[it]=0)}function A(w,F,it,V,Q,Y,L){L===!0?c.vertexAttribIPointer(w,F,it,Q,Y):c.vertexAttribPointer(w,F,it,V,Q,Y)}function D(w,F,it,V){E();const Q=V.attributes,Y=it.getAttributes(),L=F.defaultAttributeValues;for(const Z in Y){const W=Y[Z];if(W.location>=0){let ht=Q[Z];if(ht===void 0&&(Z==="instanceMatrix"&&w.instanceMatrix&&(ht=w.instanceMatrix),Z==="instanceColor"&&w.instanceColor&&(ht=w.instanceColor)),ht!==void 0){const B=ht.normalized,$=ht.itemSize,ot=t.get(ht);if(ot===void 0)continue;const yt=ot.buffer,tt=ot.type,dt=ot.bytesPerElement,_t=tt===c.INT||tt===c.UNSIGNED_INT||ht.gpuType===s_;if(ht.isInterleavedBufferAttribute){const At=ht.data,Ft=At.stride,Jt=ht.offset;if(At.isInstancedInterleavedBuffer){for(let pe=0;pe<W.locationSize;pe++)y(W.location+pe,At.meshPerAttribute);w.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=At.meshPerAttribute*At.count)}else for(let pe=0;pe<W.locationSize;pe++)x(W.location+pe);c.bindBuffer(c.ARRAY_BUFFER,yt);for(let pe=0;pe<W.locationSize;pe++)A(W.location+pe,$/W.locationSize,tt,B,Ft*dt,(Jt+$/W.locationSize*pe)*dt,_t)}else{if(ht.isInstancedBufferAttribute){for(let At=0;At<W.locationSize;At++)y(W.location+At,ht.meshPerAttribute);w.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let At=0;At<W.locationSize;At++)x(W.location+At);c.bindBuffer(c.ARRAY_BUFFER,yt);for(let At=0;At<W.locationSize;At++)A(W.location+At,$/W.locationSize,tt,B,$*dt,$/W.locationSize*At*dt,_t)}}else if(L!==void 0){const B=L[Z];if(B!==void 0)switch(B.length){case 2:c.vertexAttrib2fv(W.location,B);break;case 3:c.vertexAttrib3fv(W.location,B);break;case 4:c.vertexAttrib4fv(W.location,B);break;default:c.vertexAttrib1fv(W.location,B)}}}}T()}function I(){k();for(const w in a){const F=a[w];for(const it in F){const V=F[it];for(const Q in V)g(V[Q].object),delete V[Q];delete F[it]}delete a[w]}}function P(w){if(a[w.id]===void 0)return;const F=a[w.id];for(const it in F){const V=F[it];for(const Q in V)g(V[Q].object),delete V[Q];delete F[it]}delete a[w.id]}function z(w){for(const F in a){const it=a[F];if(it[w.id]===void 0)continue;const V=it[w.id];for(const Q in V)g(V[Q].object),delete V[Q];delete it[w.id]}}function k(){U(),u=!0,l!==r&&(l=r,p(l.object))}function U(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:h,reset:k,resetDefaultState:U,dispose:I,releaseStatesOfGeometry:P,releaseStatesOfProgram:z,initAttributes:E,enableAttribute:x,disableUnusedAttributes:T}}function NT(c,t,n){let a;function r(p){a=p}function l(p,g){c.drawArrays(a,p,g),n.update(g,a,1)}function u(p,g,_){_!==0&&(c.drawArraysInstanced(a,p,g,_),n.update(g,a,_))}function h(p,g,_){if(_===0)return;const v=t.get("WEBGL_multi_draw");if(v===null)for(let S=0;S<_;S++)this.render(p[S],g[S]);else{v.multiDrawArraysWEBGL(a,p,0,g,0,_);let S=0;for(let M=0;M<_;M++)S+=g[M];n.update(S,a,1)}}function d(p,g,_,v){if(_===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let M=0;M<p.length;M++)u(p[M],g[M],v[M]);else{S.multiDrawArraysInstancedWEBGL(a,p,0,g,0,v,0,_);let M=0;for(let E=0;E<_;E++)M+=g[E];for(let E=0;E<v.length;E++)n.update(M,a,v[E])}}this.setMode=r,this.render=l,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function UT(c,t,n,a){let r;function l(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");r=c.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function u(P){return!(P!==zi&&a.convert(P)!==c.getParameter(c.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(P){const z=P===iu&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==$a&&a.convert(P)!==c.getParameter(c.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Za&&!z)}function d(P){if(P==="highp"){if(c.getShaderPrecisionFormat(c.VERTEX_SHADER,c.HIGH_FLOAT).precision>0&&c.getShaderPrecisionFormat(c.FRAGMENT_SHADER,c.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&c.getShaderPrecisionFormat(c.VERTEX_SHADER,c.MEDIUM_FLOAT).precision>0&&c.getShaderPrecisionFormat(c.FRAGMENT_SHADER,c.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const g=d(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=n.logarithmicDepthBuffer===!0,v=c.getParameter(c.MAX_TEXTURE_IMAGE_UNITS),S=c.getParameter(c.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=c.getParameter(c.MAX_TEXTURE_SIZE),E=c.getParameter(c.MAX_CUBE_MAP_TEXTURE_SIZE),x=c.getParameter(c.MAX_VERTEX_ATTRIBS),y=c.getParameter(c.MAX_VERTEX_UNIFORM_VECTORS),T=c.getParameter(c.MAX_VARYING_VECTORS),A=c.getParameter(c.MAX_FRAGMENT_UNIFORM_VECTORS),D=S>0,I=c.getParameter(c.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:_,maxTextures:v,maxVertexTextures:S,maxTextureSize:M,maxCubemapSize:E,maxAttributes:x,maxVertexUniforms:y,maxVaryings:T,maxFragmentUniforms:A,vertexTextures:D,maxSamples:I}}function LT(c){const t=this;let n=null,a=0,r=!1,l=!1;const u=new As,h=new le,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const S=_.length!==0||v||a!==0||r;return r=v,a=_.length,S},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,v){n=g(_,v,0)},this.setState=function(_,v,S){const M=_.clippingPlanes,E=_.clipIntersection,x=_.clipShadows,y=c.get(_);if(!r||M===null||M.length===0||l&&!x)l?g(null):p();else{const T=l?0:a,A=T*4;let D=y.clippingState||null;d.value=D,D=g(M,v,A,S);for(let I=0;I!==A;++I)D[I]=n[I];y.clippingState=D,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=T}};function p(){d.value!==n&&(d.value=n,d.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function g(_,v,S,M){const E=_!==null?_.length:0;let x=null;if(E!==0){if(x=d.value,M!==!0||x===null){const y=S+E*4,T=v.matrixWorldInverse;h.getNormalMatrix(T),(x===null||x.length<y)&&(x=new Float32Array(y));for(let A=0,D=S;A!==E;++A,D+=4)u.copy(_[A]).applyMatrix4(T,h),u.normal.toArray(x,D),x[D+3]=u.constant}d.value=x,d.needsUpdate=!0}return t.numPlanes=E,t.numIntersection=0,x}}function OT(c){let t=new WeakMap;function n(u,h){return h===cd?u.mapping=Br:h===ud&&(u.mapping=Ir),u}function a(u){if(u&&u.isTexture){const h=u.mapping;if(h===cd||h===ud)if(t.has(u)){const d=t.get(u).texture;return n(d,u.mapping)}else{const d=u.image;if(d&&d.height>0){const p=new jM(d.height);return p.fromEquirectangularTexture(c,u),t.set(u,p),u.addEventListener("dispose",r),n(p.texture,u.mapping)}else return null}}return u}function r(u){const h=u.target;h.removeEventListener("dispose",r);const d=t.get(h);d!==void 0&&(t.delete(h),d.dispose())}function l(){t=new WeakMap}return{get:a,dispose:l}}class A_ extends E_{constructor(t=-1,n=1,a=1,r=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=a,this.bottom=r,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,a,r,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=r,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let l=a-t,u=a+t,h=r+n,d=r-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,h-=g*this.view.offsetY,d=h-g*this.view.height}this.projectionMatrix.makeOrthographic(l,u,h,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Lr=4,u0=[.125,.215,.35,.446,.526,.582],Cs=20,qh=new A_,f0=new Ae;let Xh=null,Yh=0,Zh=0,Kh=!1;const ws=(1+Math.sqrt(5))/2,Dr=1/ws,h0=[new ut(-ws,Dr,0),new ut(ws,Dr,0),new ut(-Dr,0,ws),new ut(Dr,0,ws),new ut(0,ws,-Dr),new ut(0,ws,Dr),new ut(-1,1,-1),new ut(1,1,-1),new ut(-1,1,1),new ut(1,1,1)];class d0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,a=.1,r=100){Xh=this._renderer.getRenderTarget(),Yh=this._renderer.getActiveCubeFace(),Zh=this._renderer.getActiveMipmapLevel(),Kh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,a,r,l),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=g0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=m0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Xh,Yh,Zh),this._renderer.xr.enabled=Kh,t.scissorTest=!1,Bc(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Br||t.mapping===Ir?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Xh=this._renderer.getRenderTarget(),Yh=this._renderer.getActiveCubeFace(),Zh=this._renderer.getActiveMipmapLevel(),Kh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:Mi,minFilter:Mi,generateMipmaps:!1,type:iu,format:zi,colorSpace:es,depthBuffer:!1},r=p0(t,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=p0(t,n,a);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=PT(l)),this._blurMaterial=zT(l,t,n)}return r}_compileMaterial(t){const n=new di(this._lodPlanes[0],t);this._renderer.compile(n,qh)}_sceneToCubeUV(t,n,a,r){const h=new fi(90,1,n,a),d=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,_=g.autoClear,v=g.toneMapping;g.getClearColor(f0),g.toneMapping=Qa,g.autoClear=!1;const S=new x_({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1}),M=new di(new Wr,S);let E=!1;const x=t.background;x?x.isColor&&(S.color.copy(x),t.background=null,E=!0):(S.color.copy(f0),E=!0);for(let y=0;y<6;y++){const T=y%3;T===0?(h.up.set(0,d[y],0),h.lookAt(p[y],0,0)):T===1?(h.up.set(0,0,d[y]),h.lookAt(0,p[y],0)):(h.up.set(0,d[y],0),h.lookAt(0,0,p[y]));const A=this._cubeSize;Bc(r,T*A,y>2?A:0,A,A),g.setRenderTarget(r),E&&g.render(M,h),g.render(t,h)}M.geometry.dispose(),M.material.dispose(),g.toneMapping=v,g.autoClear=_,t.background=x}_textureToCubeUV(t,n){const a=this._renderer,r=t.mapping===Br||t.mapping===Ir;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=g0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=m0());const l=r?this._cubemapMaterial:this._equirectMaterial,u=new di(this._lodPlanes[0],l),h=l.uniforms;h.envMap.value=t;const d=this._cubeSize;Bc(n,0,0,3*d,2*d),a.setRenderTarget(n),a.render(u,qh)}_applyPMREM(t){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let l=1;l<r;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),h=h0[(r-l-1)%h0.length];this._blur(t,l-1,l,u,h)}n.autoClear=a}_blur(t,n,a,r,l){const u=this._pingPongRenderTarget;this._halfBlur(t,u,n,a,r,"latitudinal",l),this._halfBlur(u,t,a,a,r,"longitudinal",l)}_halfBlur(t,n,a,r,l,u,h){const d=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new di(this._lodPlanes[r],p),v=p.uniforms,S=this._sizeLods[a]-1,M=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*Cs-1),E=l/M,x=isFinite(l)?1+Math.floor(g*E):Cs;x>Cs&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Cs}`);const y=[];let T=0;for(let z=0;z<Cs;++z){const k=z/E,U=Math.exp(-k*k/2);y.push(U),z===0?T+=U:z<x&&(T+=2*U)}for(let z=0;z<y.length;z++)y[z]=y[z]/T;v.envMap.value=t.texture,v.samples.value=x,v.weights.value=y,v.latitudinal.value=u==="latitudinal",h&&(v.poleAxis.value=h);const{_lodMax:A}=this;v.dTheta.value=M,v.mipInt.value=A-a;const D=this._sizeLods[r],I=3*D*(r>A-Lr?r-A+Lr:0),P=4*(this._cubeSize-D);Bc(n,I,P,3*D,2*D),d.setRenderTarget(n),d.render(_,qh)}}function PT(c){const t=[],n=[],a=[];let r=c;const l=c-Lr+1+u0.length;for(let u=0;u<l;u++){const h=Math.pow(2,r);n.push(h);let d=1/h;u>c-Lr?d=u0[u-c+Lr-1]:u===0&&(d=0),a.push(d);const p=1/(h-2),g=-p,_=1+p,v=[g,g,_,g,_,_,g,g,_,_,g,_],S=6,M=6,E=3,x=2,y=1,T=new Float32Array(E*M*S),A=new Float32Array(x*M*S),D=new Float32Array(y*M*S);for(let P=0;P<S;P++){const z=P%3*2/3-1,k=P>2?0:-1,U=[z,k,0,z+2/3,k,0,z+2/3,k+1,0,z,k,0,z+2/3,k+1,0,z,k+1,0];T.set(U,E*M*P),A.set(v,x*M*P);const w=[P,P,P,P,P,P];D.set(w,y*M*P)}const I=new ns;I.setAttribute("position",new Bi(T,E)),I.setAttribute("uv",new Bi(A,x)),I.setAttribute("faceIndex",new Bi(D,y)),t.push(I),r>Lr&&r--}return{lodPlanes:t,sizeLods:n,sigmas:a}}function p0(c,t,n){const a=new Ls(c,t,n);return a.texture.mapping=nu,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Bc(c,t,n,a,r){c.viewport.set(t,n,a,r),c.scissor.set(t,n,a,r)}function zT(c,t,n){const a=new Float32Array(Cs),r=new ut(0,1,0);return new ts({name:"SphericalGaussianBlur",defines:{n:Cs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${c}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Sd(),fragmentShader:`

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
		`,blending:Ka,depthTest:!1,depthWrite:!1})}function m0(){return new ts({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sd(),fragmentShader:`

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
		`,blending:Ka,depthTest:!1,depthWrite:!1})}function g0(){return new ts({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ka,depthTest:!1,depthWrite:!1})}function Sd(){return`

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
	`}function BT(c){let t=new WeakMap,n=null;function a(h){if(h&&h.isTexture){const d=h.mapping,p=d===cd||d===ud,g=d===Br||d===Ir;if(p||g){let _=t.get(h);const v=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==v)return n===null&&(n=new d0(c)),_=p?n.fromEquirectangular(h,_):n.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),_.texture;if(_!==void 0)return _.texture;{const S=h.image;return p&&S&&S.height>0||g&&S&&r(S)?(n===null&&(n=new d0(c)),_=p?n.fromEquirectangular(h):n.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),h.addEventListener("dispose",l),_.texture):null}}}return h}function r(h){let d=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&d++;return d===p}function l(h){const d=h.target;d.removeEventListener("dispose",l);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function u(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:u}}function IT(c){const t={};function n(a){if(t[a]!==void 0)return t[a];let r;switch(a){case"WEBGL_depth_texture":r=c.getExtension("WEBGL_depth_texture")||c.getExtension("MOZ_WEBGL_depth_texture")||c.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=c.getExtension("EXT_texture_filter_anisotropic")||c.getExtension("MOZ_EXT_texture_filter_anisotropic")||c.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=c.getExtension("WEBGL_compressed_texture_s3tc")||c.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||c.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=c.getExtension("WEBGL_compressed_texture_pvrtc")||c.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=c.getExtension(a)}return t[a]=r,r}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const r=n(a);return r===null&&p_("THREE.WebGLRenderer: "+a+" extension not supported."),r}}}function FT(c,t,n,a){const r={},l=new WeakMap;function u(_){const v=_.target;v.index!==null&&t.remove(v.index);for(const M in v.attributes)t.remove(v.attributes[M]);for(const M in v.morphAttributes){const E=v.morphAttributes[M];for(let x=0,y=E.length;x<y;x++)t.remove(E[x])}v.removeEventListener("dispose",u),delete r[v.id];const S=l.get(v);S&&(t.remove(S),l.delete(v)),a.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function h(_,v){return r[v.id]===!0||(v.addEventListener("dispose",u),r[v.id]=!0,n.memory.geometries++),v}function d(_){const v=_.attributes;for(const M in v)t.update(v[M],c.ARRAY_BUFFER);const S=_.morphAttributes;for(const M in S){const E=S[M];for(let x=0,y=E.length;x<y;x++)t.update(E[x],c.ARRAY_BUFFER)}}function p(_){const v=[],S=_.index,M=_.attributes.position;let E=0;if(S!==null){const T=S.array;E=S.version;for(let A=0,D=T.length;A<D;A+=3){const I=T[A+0],P=T[A+1],z=T[A+2];v.push(I,P,P,z,z,I)}}else if(M!==void 0){const T=M.array;E=M.version;for(let A=0,D=T.length/3-1;A<D;A+=3){const I=A+0,P=A+1,z=A+2;v.push(I,P,P,z,z,I)}}else return;const x=new(d_(v)?S_:y_)(v,1);x.version=E;const y=l.get(_);y&&t.remove(y),l.set(_,x)}function g(_){const v=l.get(_);if(v){const S=_.index;S!==null&&v.version<S.version&&p(_)}else p(_);return l.get(_)}return{get:h,update:d,getWireframeAttribute:g}}function HT(c,t,n){let a;function r(v){a=v}let l,u;function h(v){l=v.type,u=v.bytesPerElement}function d(v,S){c.drawElements(a,S,l,v*u),n.update(S,a,1)}function p(v,S,M){M!==0&&(c.drawElementsInstanced(a,S,l,v*u,M),n.update(S,a,M))}function g(v,S,M){if(M===0)return;const E=t.get("WEBGL_multi_draw");if(E===null)for(let x=0;x<M;x++)this.render(v[x]/u,S[x]);else{E.multiDrawElementsWEBGL(a,S,0,l,v,0,M);let x=0;for(let y=0;y<M;y++)x+=S[y];n.update(x,a,1)}}function _(v,S,M,E){if(M===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let y=0;y<v.length;y++)p(v[y]/u,S[y],E[y]);else{x.multiDrawElementsInstancedWEBGL(a,S,0,l,v,0,E,0,M);let y=0;for(let T=0;T<M;T++)y+=S[T];for(let T=0;T<E.length;T++)n.update(y,a,E[T])}}this.setMode=r,this.setIndex=h,this.render=d,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function GT(c){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(l,u,h){switch(n.calls++,u){case c.TRIANGLES:n.triangles+=h*(l/3);break;case c.LINES:n.lines+=h*(l/2);break;case c.LINE_STRIP:n.lines+=h*(l-1);break;case c.LINE_LOOP:n.lines+=h*l;break;case c.POINTS:n.points+=h*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:r,update:a}}function VT(c,t,n){const a=new WeakMap,r=new _n;function l(u,h,d){const p=u.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let v=a.get(h);if(v===void 0||v.count!==_){let w=function(){k.dispose(),a.delete(h),h.removeEventListener("dispose",w)};var S=w;v!==void 0&&v.texture.dispose();const M=h.morphAttributes.position!==void 0,E=h.morphAttributes.normal!==void 0,x=h.morphAttributes.color!==void 0,y=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],A=h.morphAttributes.color||[];let D=0;M===!0&&(D=1),E===!0&&(D=2),x===!0&&(D=3);let I=h.attributes.position.count*D,P=1;I>t.maxTextureSize&&(P=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const z=new Float32Array(I*P*4*_),k=new g_(z,I,P,_);k.type=Za,k.needsUpdate=!0;const U=D*4;for(let F=0;F<_;F++){const it=y[F],V=T[F],Q=A[F],Y=I*P*4*F;for(let L=0;L<it.count;L++){const Z=L*U;M===!0&&(r.fromBufferAttribute(it,L),z[Y+Z+0]=r.x,z[Y+Z+1]=r.y,z[Y+Z+2]=r.z,z[Y+Z+3]=0),E===!0&&(r.fromBufferAttribute(V,L),z[Y+Z+4]=r.x,z[Y+Z+5]=r.y,z[Y+Z+6]=r.z,z[Y+Z+7]=0),x===!0&&(r.fromBufferAttribute(Q,L),z[Y+Z+8]=r.x,z[Y+Z+9]=r.y,z[Y+Z+10]=r.z,z[Y+Z+11]=Q.itemSize===4?r.w:1)}}v={count:_,texture:k,size:new Me(I,P)},a.set(h,v),h.addEventListener("dispose",w)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(c,"morphTexture",u.morphTexture,n);else{let M=0;for(let x=0;x<p.length;x++)M+=p[x];const E=h.morphTargetsRelative?1:1-M;d.getUniforms().setValue(c,"morphTargetBaseInfluence",E),d.getUniforms().setValue(c,"morphTargetInfluences",p)}d.getUniforms().setValue(c,"morphTargetsTexture",v.texture,n),d.getUniforms().setValue(c,"morphTargetsTextureSize",v.size)}return{update:l}}function kT(c,t,n,a){let r=new WeakMap;function l(d){const p=a.render.frame,g=d.geometry,_=t.get(d,g);if(r.get(_)!==p&&(t.update(_),r.set(_,p)),d.isInstancedMesh&&(d.hasEventListener("dispose",h)===!1&&d.addEventListener("dispose",h),r.get(d)!==p&&(n.update(d.instanceMatrix,c.ARRAY_BUFFER),d.instanceColor!==null&&n.update(d.instanceColor,c.ARRAY_BUFFER),r.set(d,p))),d.isSkinnedMesh){const v=d.skeleton;r.get(v)!==p&&(v.update(),r.set(v,p))}return _}function u(){r=new WeakMap}function h(d){const p=d.target;p.removeEventListener("dispose",h),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:l,dispose:u}}class w_ extends kn{constructor(t,n,a,r,l,u,h,d,p,g=Pr){if(g!==Pr&&g!==Gr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");a===void 0&&g===Pr&&(a=Fr),a===void 0&&g===Gr&&(a=Hr),super(null,r,l,u,h,d,g,a,p),this.isDepthTexture=!0,this.image={width:t,height:n},this.magFilter=h!==void 0?h:hi,this.minFilter=d!==void 0?d:hi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const R_=new kn,C_=new w_(1,1);C_.compareFunction=h_;const D_=new g_,N_=new RM,U_=new b_,v0=[],_0=[],x0=new Float32Array(16),y0=new Float32Array(9),S0=new Float32Array(4);function jr(c,t,n){const a=c[0];if(a<=0||a>0)return c;const r=t*n;let l=v0[r];if(l===void 0&&(l=new Float32Array(r),v0[r]=l),t!==0){a.toArray(l,0);for(let u=1,h=0;u!==t;++u)h+=n,c[u].toArray(l,h)}return l}function hn(c,t){if(c.length!==t.length)return!1;for(let n=0,a=c.length;n<a;n++)if(c[n]!==t[n])return!1;return!0}function dn(c,t){for(let n=0,a=t.length;n<a;n++)c[n]=t[n]}function ru(c,t){let n=_0[t];n===void 0&&(n=new Int32Array(t),_0[t]=n);for(let a=0;a!==t;++a)n[a]=c.allocateTextureUnit();return n}function WT(c,t){const n=this.cache;n[0]!==t&&(c.uniform1f(this.addr,t),n[0]=t)}function jT(c,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(c.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(hn(n,t))return;c.uniform2fv(this.addr,t),dn(n,t)}}function qT(c,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(c.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(c.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(hn(n,t))return;c.uniform3fv(this.addr,t),dn(n,t)}}function XT(c,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(c.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(hn(n,t))return;c.uniform4fv(this.addr,t),dn(n,t)}}function YT(c,t){const n=this.cache,a=t.elements;if(a===void 0){if(hn(n,t))return;c.uniformMatrix2fv(this.addr,!1,t),dn(n,t)}else{if(hn(n,a))return;S0.set(a),c.uniformMatrix2fv(this.addr,!1,S0),dn(n,a)}}function ZT(c,t){const n=this.cache,a=t.elements;if(a===void 0){if(hn(n,t))return;c.uniformMatrix3fv(this.addr,!1,t),dn(n,t)}else{if(hn(n,a))return;y0.set(a),c.uniformMatrix3fv(this.addr,!1,y0),dn(n,a)}}function KT(c,t){const n=this.cache,a=t.elements;if(a===void 0){if(hn(n,t))return;c.uniformMatrix4fv(this.addr,!1,t),dn(n,t)}else{if(hn(n,a))return;x0.set(a),c.uniformMatrix4fv(this.addr,!1,x0),dn(n,a)}}function QT(c,t){const n=this.cache;n[0]!==t&&(c.uniform1i(this.addr,t),n[0]=t)}function JT(c,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(c.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(hn(n,t))return;c.uniform2iv(this.addr,t),dn(n,t)}}function $T(c,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(c.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(hn(n,t))return;c.uniform3iv(this.addr,t),dn(n,t)}}function tA(c,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(c.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(hn(n,t))return;c.uniform4iv(this.addr,t),dn(n,t)}}function eA(c,t){const n=this.cache;n[0]!==t&&(c.uniform1ui(this.addr,t),n[0]=t)}function nA(c,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(c.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(hn(n,t))return;c.uniform2uiv(this.addr,t),dn(n,t)}}function iA(c,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(c.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(hn(n,t))return;c.uniform3uiv(this.addr,t),dn(n,t)}}function aA(c,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(c.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(hn(n,t))return;c.uniform4uiv(this.addr,t),dn(n,t)}}function sA(c,t,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(c.uniform1i(this.addr,r),a[0]=r);const l=this.type===c.SAMPLER_2D_SHADOW?C_:R_;n.setTexture2D(t||l,r)}function rA(c,t,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(c.uniform1i(this.addr,r),a[0]=r),n.setTexture3D(t||N_,r)}function oA(c,t,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(c.uniform1i(this.addr,r),a[0]=r),n.setTextureCube(t||U_,r)}function lA(c,t,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(c.uniform1i(this.addr,r),a[0]=r),n.setTexture2DArray(t||D_,r)}function cA(c){switch(c){case 5126:return WT;case 35664:return jT;case 35665:return qT;case 35666:return XT;case 35674:return YT;case 35675:return ZT;case 35676:return KT;case 5124:case 35670:return QT;case 35667:case 35671:return JT;case 35668:case 35672:return $T;case 35669:case 35673:return tA;case 5125:return eA;case 36294:return nA;case 36295:return iA;case 36296:return aA;case 35678:case 36198:case 36298:case 36306:case 35682:return sA;case 35679:case 36299:case 36307:return rA;case 35680:case 36300:case 36308:case 36293:return oA;case 36289:case 36303:case 36311:case 36292:return lA}}function uA(c,t){c.uniform1fv(this.addr,t)}function fA(c,t){const n=jr(t,this.size,2);c.uniform2fv(this.addr,n)}function hA(c,t){const n=jr(t,this.size,3);c.uniform3fv(this.addr,n)}function dA(c,t){const n=jr(t,this.size,4);c.uniform4fv(this.addr,n)}function pA(c,t){const n=jr(t,this.size,4);c.uniformMatrix2fv(this.addr,!1,n)}function mA(c,t){const n=jr(t,this.size,9);c.uniformMatrix3fv(this.addr,!1,n)}function gA(c,t){const n=jr(t,this.size,16);c.uniformMatrix4fv(this.addr,!1,n)}function vA(c,t){c.uniform1iv(this.addr,t)}function _A(c,t){c.uniform2iv(this.addr,t)}function xA(c,t){c.uniform3iv(this.addr,t)}function yA(c,t){c.uniform4iv(this.addr,t)}function SA(c,t){c.uniform1uiv(this.addr,t)}function MA(c,t){c.uniform2uiv(this.addr,t)}function EA(c,t){c.uniform3uiv(this.addr,t)}function bA(c,t){c.uniform4uiv(this.addr,t)}function TA(c,t,n){const a=this.cache,r=t.length,l=ru(n,r);hn(a,l)||(c.uniform1iv(this.addr,l),dn(a,l));for(let u=0;u!==r;++u)n.setTexture2D(t[u]||R_,l[u])}function AA(c,t,n){const a=this.cache,r=t.length,l=ru(n,r);hn(a,l)||(c.uniform1iv(this.addr,l),dn(a,l));for(let u=0;u!==r;++u)n.setTexture3D(t[u]||N_,l[u])}function wA(c,t,n){const a=this.cache,r=t.length,l=ru(n,r);hn(a,l)||(c.uniform1iv(this.addr,l),dn(a,l));for(let u=0;u!==r;++u)n.setTextureCube(t[u]||U_,l[u])}function RA(c,t,n){const a=this.cache,r=t.length,l=ru(n,r);hn(a,l)||(c.uniform1iv(this.addr,l),dn(a,l));for(let u=0;u!==r;++u)n.setTexture2DArray(t[u]||D_,l[u])}function CA(c){switch(c){case 5126:return uA;case 35664:return fA;case 35665:return hA;case 35666:return dA;case 35674:return pA;case 35675:return mA;case 35676:return gA;case 5124:case 35670:return vA;case 35667:case 35671:return _A;case 35668:case 35672:return xA;case 35669:case 35673:return yA;case 5125:return SA;case 36294:return MA;case 36295:return EA;case 36296:return bA;case 35678:case 36198:case 36298:case 36306:case 35682:return TA;case 35679:case 36299:case 36307:return AA;case 35680:case 36300:case 36308:case 36293:return wA;case 36289:case 36303:case 36311:case 36292:return RA}}class DA{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.setValue=cA(n.type)}}class NA{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=CA(n.type)}}class UA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,a){const r=this.seq;for(let l=0,u=r.length;l!==u;++l){const h=r[l];h.setValue(t,n[h.id],a)}}}const Qh=/(\w+)(\])?(\[|\.)?/g;function M0(c,t){c.seq.push(t),c.map[t.id]=t}function LA(c,t,n){const a=c.name,r=a.length;for(Qh.lastIndex=0;;){const l=Qh.exec(a),u=Qh.lastIndex;let h=l[1];const d=l[2]==="]",p=l[3];if(d&&(h=h|0),p===void 0||p==="["&&u+2===r){M0(n,p===void 0?new DA(h,c,t):new NA(h,c,t));break}else{let _=n.map[h];_===void 0&&(_=new UA(h),M0(n,_)),n=_}}}class jc{constructor(t,n){this.seq=[],this.map={};const a=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let r=0;r<a;++r){const l=t.getActiveUniform(n,r),u=t.getUniformLocation(n,l.name);LA(l,u,this)}}setValue(t,n,a,r){const l=this.map[n];l!==void 0&&l.setValue(t,a,r)}setOptional(t,n,a){const r=n[a];r!==void 0&&this.setValue(t,a,r)}static upload(t,n,a,r){for(let l=0,u=n.length;l!==u;++l){const h=n[l],d=a[h.id];d.needsUpdate!==!1&&h.setValue(t,d.value,r)}}static seqWithValue(t,n){const a=[];for(let r=0,l=t.length;r!==l;++r){const u=t[r];u.id in n&&a.push(u)}return a}}function E0(c,t,n){const a=c.createShader(t);return c.shaderSource(a,n),c.compileShader(a),a}const OA=37297;let PA=0;function zA(c,t){const n=c.split(`
`),a=[],r=Math.max(t-6,0),l=Math.min(t+6,n.length);for(let u=r;u<l;u++){const h=u+1;a.push(`${h===t?">":" "} ${h}: ${n[u]}`)}return a.join(`
`)}function BA(c){const t=Ue.getPrimaries(Ue.workingColorSpace),n=Ue.getPrimaries(c);let a;switch(t===n?a="":t===Kc&&n===Zc?a="LinearDisplayP3ToLinearSRGB":t===Zc&&n===Kc&&(a="LinearSRGBToLinearDisplayP3"),c){case es:case au:return[a,"LinearTransferOETF"];case Li:case _d:return[a,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",c),[a,"LinearTransferOETF"]}}function b0(c,t,n){const a=c.getShaderParameter(t,c.COMPILE_STATUS),r=c.getShaderInfoLog(t).trim();if(a&&r==="")return"";const l=/ERROR: 0:(\d+)/.exec(r);if(l){const u=parseInt(l[1]);return n.toUpperCase()+`

`+r+`

`+zA(c.getShaderSource(t),u)}else return r}function IA(c,t){const n=BA(t);return`vec4 ${c}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function FA(c,t){let n;switch(t){case qS:n="Linear";break;case XS:n="Reinhard";break;case YS:n="OptimizedCineon";break;case ZS:n="ACESFilmic";break;case QS:n="AgX";break;case JS:n="Neutral";break;case KS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+c+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function HA(c){return[c.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",c.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(el).join(`
`)}function GA(c){const t=[];for(const n in c){const a=c[n];a!==!1&&t.push("#define "+n+" "+a)}return t.join(`
`)}function VA(c,t){const n={},a=c.getProgramParameter(t,c.ACTIVE_ATTRIBUTES);for(let r=0;r<a;r++){const l=c.getActiveAttrib(t,r),u=l.name;let h=1;l.type===c.FLOAT_MAT2&&(h=2),l.type===c.FLOAT_MAT3&&(h=3),l.type===c.FLOAT_MAT4&&(h=4),n[u]={type:l.type,location:c.getAttribLocation(t,u),locationSize:h}}return n}function el(c){return c!==""}function T0(c,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return c.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function A0(c,t){return c.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const kA=/^[ \t]*#include +<([\w\d./]+)>/gm;function pd(c){return c.replace(kA,jA)}const WA=new Map;function jA(c,t){let n=oe[t];if(n===void 0){const a=WA.get(t);if(a!==void 0)n=oe[a],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return pd(n)}const qA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function w0(c){return c.replace(qA,XA)}function XA(c,t,n,a){let r="";for(let l=parseInt(t);l<parseInt(n);l++)r+=a.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return r}function R0(c){let t=`precision ${c.precision} float;
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
	`;return c.precision==="highp"?t+=`
#define HIGH_PRECISION`:c.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:c.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function YA(c){let t="SHADOWMAP_TYPE_BASIC";return c.shadowMapType===e_?t="SHADOWMAP_TYPE_PCF":c.shadowMapType===n_?t="SHADOWMAP_TYPE_PCF_SOFT":c.shadowMapType===fa&&(t="SHADOWMAP_TYPE_VSM"),t}function ZA(c){let t="ENVMAP_TYPE_CUBE";if(c.envMap)switch(c.envMapMode){case Br:case Ir:t="ENVMAP_TYPE_CUBE";break;case nu:t="ENVMAP_TYPE_CUBE_UV";break}return t}function KA(c){let t="ENVMAP_MODE_REFLECTION";if(c.envMap)switch(c.envMapMode){case Ir:t="ENVMAP_MODE_REFRACTION";break}return t}function QA(c){let t="ENVMAP_BLENDING_NONE";if(c.envMap)switch(c.combine){case i_:t="ENVMAP_BLENDING_MULTIPLY";break;case WS:t="ENVMAP_BLENDING_MIX";break;case jS:t="ENVMAP_BLENDING_ADD";break}return t}function JA(c){const t=c.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function $A(c,t,n,a){const r=c.getContext(),l=n.defines;let u=n.vertexShader,h=n.fragmentShader;const d=YA(n),p=ZA(n),g=KA(n),_=QA(n),v=JA(n),S=HA(n),M=GA(l),E=r.createProgram();let x,y,T=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(el).join(`
`),x.length>0&&(x+=`
`),y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(el).join(`
`),y.length>0&&(y+=`
`)):(x=[R0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+d:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(el).join(`
`),y=[R0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+g:"",n.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+d:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Qa?"#define TONE_MAPPING":"",n.toneMapping!==Qa?oe.tonemapping_pars_fragment:"",n.toneMapping!==Qa?FA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",oe.colorspace_pars_fragment,IA("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(el).join(`
`)),u=pd(u),u=T0(u,n),u=A0(u,n),h=pd(h),h=T0(h,n),h=A0(h,n),u=w0(u),h=w0(h),n.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,x=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,y=["#define varying in",n.glslVersion===Wv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Wv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const A=T+x+u,D=T+y+h,I=E0(r,r.VERTEX_SHADER,A),P=E0(r,r.FRAGMENT_SHADER,D);r.attachShader(E,I),r.attachShader(E,P),n.index0AttributeName!==void 0?r.bindAttribLocation(E,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function z(F){if(c.debug.checkShaderErrors){const it=r.getProgramInfoLog(E).trim(),V=r.getShaderInfoLog(I).trim(),Q=r.getShaderInfoLog(P).trim();let Y=!0,L=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(Y=!1,typeof c.debug.onShaderError=="function")c.debug.onShaderError(r,E,I,P);else{const Z=b0(r,I,"vertex"),W=b0(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+it+`
`+Z+`
`+W)}else it!==""?console.warn("THREE.WebGLProgram: Program Info Log:",it):(V===""||Q==="")&&(L=!1);L&&(F.diagnostics={runnable:Y,programLog:it,vertexShader:{log:V,prefix:x},fragmentShader:{log:Q,prefix:y}})}r.deleteShader(I),r.deleteShader(P),k=new jc(r,E),U=VA(r,E)}let k;this.getUniforms=function(){return k===void 0&&z(this),k};let U;this.getAttributes=function(){return U===void 0&&z(this),U};let w=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(E,OA)),w},this.destroy=function(){a.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=PA++,this.cacheKey=t,this.usedTimes=1,this.program=E,this.vertexShader=I,this.fragmentShader=P,this}let t1=0;class e1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,a=t.fragmentShader,r=this._getShaderStage(n),l=this._getShaderStage(a),u=this._getShaderCacheForMaterial(t);return u.has(r)===!1&&(u.add(r),r.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let a=n.get(t);return a===void 0&&(a=new Set,n.set(t,a)),a}_getShaderStage(t){const n=this.shaderCache;let a=n.get(t);return a===void 0&&(a=new n1(t),n.set(t,a)),a}}class n1{constructor(t){this.id=t1++,this.code=t,this.usedTimes=0}}function i1(c,t,n,a,r,l,u){const h=new v_,d=new e1,p=new Set,g=[],_=r.logarithmicDepthBuffer,v=r.vertexTextures;let S=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(U){return p.add(U),U===0?"uv":`uv${U}`}function x(U,w,F,it,V){const Q=it.fog,Y=V.geometry,L=U.isMeshStandardMaterial?it.environment:null,Z=(U.isMeshStandardMaterial?n:t).get(U.envMap||L),W=Z&&Z.mapping===nu?Z.image.height:null,ht=M[U.type];U.precision!==null&&(S=r.getMaxPrecision(U.precision),S!==U.precision&&console.warn("THREE.WebGLProgram.getParameters:",U.precision,"not supported, using",S,"instead."));const B=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,$=B!==void 0?B.length:0;let ot=0;Y.morphAttributes.position!==void 0&&(ot=1),Y.morphAttributes.normal!==void 0&&(ot=2),Y.morphAttributes.color!==void 0&&(ot=3);let yt,tt,dt,_t;if(ht){const Ee=Oi[ht];yt=Ee.vertexShader,tt=Ee.fragmentShader}else yt=U.vertexShader,tt=U.fragmentShader,d.update(U),dt=d.getVertexShaderID(U),_t=d.getFragmentShaderID(U);const At=c.getRenderTarget(),Ft=V.isInstancedMesh===!0,Jt=V.isBatchedMesh===!0,pe=!!U.map,X=!!U.matcap,fe=!!Z,ce=!!U.aoMap,ze=!!U.lightMap,Yt=!!U.bumpMap,xe=!!U.normalMap,$t=!!U.displacementMap,ae=!!U.emissiveMap,je=!!U.metalnessMap,G=!!U.roughnessMap,N=U.anisotropy>0,ft=U.clearcoat>0,St=U.dispersion>0,Mt=U.iridescence>0,Et=U.sheen>0,Vt=U.transmission>0,Rt=N&&!!U.anisotropyMap,Dt=ft&&!!U.clearcoatMap,qt=ft&&!!U.clearcoatNormalMap,Ct=ft&&!!U.clearcoatRoughnessMap,Gt=Mt&&!!U.iridescenceMap,he=Mt&&!!U.iridescenceThicknessMap,Zt=Et&&!!U.sheenColorMap,Nt=Et&&!!U.sheenRoughnessMap,ne=!!U.specularMap,re=!!U.specularColorMap,Be=!!U.specularIntensityMap,q=Vt&&!!U.transmissionMap,Ot=Vt&&!!U.thicknessMap,mt=!!U.gradientMap,xt=!!U.alphaMap,wt=U.alphaTest>0,ie=!!U.alphaHash,ye=!!U.extensions;let ke=Qa;U.toneMapped&&(At===null||At.isXRRenderTarget===!0)&&(ke=c.toneMapping);const Ye={shaderID:ht,shaderType:U.type,shaderName:U.name,vertexShader:yt,fragmentShader:tt,defines:U.defines,customVertexShaderID:dt,customFragmentShaderID:_t,isRawShaderMaterial:U.isRawShaderMaterial===!0,glslVersion:U.glslVersion,precision:S,batching:Jt,batchingColor:Jt&&V._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&V.instanceColor!==null,instancingMorph:Ft&&V.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:At===null?c.outputColorSpace:At.isXRRenderTarget===!0?At.texture.colorSpace:es,alphaToCoverage:!!U.alphaToCoverage,map:pe,matcap:X,envMap:fe,envMapMode:fe&&Z.mapping,envMapCubeUVHeight:W,aoMap:ce,lightMap:ze,bumpMap:Yt,normalMap:xe,displacementMap:v&&$t,emissiveMap:ae,normalMapObjectSpace:xe&&U.normalMapType===hM,normalMapTangentSpace:xe&&U.normalMapType===f_,metalnessMap:je,roughnessMap:G,anisotropy:N,anisotropyMap:Rt,clearcoat:ft,clearcoatMap:Dt,clearcoatNormalMap:qt,clearcoatRoughnessMap:Ct,dispersion:St,iridescence:Mt,iridescenceMap:Gt,iridescenceThicknessMap:he,sheen:Et,sheenColorMap:Zt,sheenRoughnessMap:Nt,specularMap:ne,specularColorMap:re,specularIntensityMap:Be,transmission:Vt,transmissionMap:q,thicknessMap:Ot,gradientMap:mt,opaque:U.transparent===!1&&U.blending===Or&&U.alphaToCoverage===!1,alphaMap:xt,alphaTest:wt,alphaHash:ie,combine:U.combine,mapUv:pe&&E(U.map.channel),aoMapUv:ce&&E(U.aoMap.channel),lightMapUv:ze&&E(U.lightMap.channel),bumpMapUv:Yt&&E(U.bumpMap.channel),normalMapUv:xe&&E(U.normalMap.channel),displacementMapUv:$t&&E(U.displacementMap.channel),emissiveMapUv:ae&&E(U.emissiveMap.channel),metalnessMapUv:je&&E(U.metalnessMap.channel),roughnessMapUv:G&&E(U.roughnessMap.channel),anisotropyMapUv:Rt&&E(U.anisotropyMap.channel),clearcoatMapUv:Dt&&E(U.clearcoatMap.channel),clearcoatNormalMapUv:qt&&E(U.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ct&&E(U.clearcoatRoughnessMap.channel),iridescenceMapUv:Gt&&E(U.iridescenceMap.channel),iridescenceThicknessMapUv:he&&E(U.iridescenceThicknessMap.channel),sheenColorMapUv:Zt&&E(U.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&E(U.sheenRoughnessMap.channel),specularMapUv:ne&&E(U.specularMap.channel),specularColorMapUv:re&&E(U.specularColorMap.channel),specularIntensityMapUv:Be&&E(U.specularIntensityMap.channel),transmissionMapUv:q&&E(U.transmissionMap.channel),thicknessMapUv:Ot&&E(U.thicknessMap.channel),alphaMapUv:xt&&E(U.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(xe||N),vertexColors:U.vertexColors,vertexAlphas:U.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!Y.attributes.uv&&(pe||xt),fog:!!Q,useFog:U.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:U.flatShading===!0,sizeAttenuation:U.sizeAttenuation===!0,logarithmicDepthBuffer:_,skinning:V.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:ot,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:U.dithering,shadowMapEnabled:c.shadowMap.enabled&&F.length>0,shadowMapType:c.shadowMap.type,toneMapping:ke,decodeVideoTexture:pe&&U.map.isVideoTexture===!0&&Ue.getTransfer(U.map.colorSpace)===Ve,premultipliedAlpha:U.premultipliedAlpha,doubleSided:U.side===ha,flipSided:U.side===Vn,useDepthPacking:U.depthPacking>=0,depthPacking:U.depthPacking||0,index0AttributeName:U.index0AttributeName,extensionClipCullDistance:ye&&U.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ye&&U.extensions.multiDraw===!0&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:U.customProgramCacheKey()};return Ye.vertexUv1s=p.has(1),Ye.vertexUv2s=p.has(2),Ye.vertexUv3s=p.has(3),p.clear(),Ye}function y(U){const w=[];if(U.shaderID?w.push(U.shaderID):(w.push(U.customVertexShaderID),w.push(U.customFragmentShaderID)),U.defines!==void 0)for(const F in U.defines)w.push(F),w.push(U.defines[F]);return U.isRawShaderMaterial===!1&&(T(w,U),A(w,U),w.push(c.outputColorSpace)),w.push(U.customProgramCacheKey),w.join()}function T(U,w){U.push(w.precision),U.push(w.outputColorSpace),U.push(w.envMapMode),U.push(w.envMapCubeUVHeight),U.push(w.mapUv),U.push(w.alphaMapUv),U.push(w.lightMapUv),U.push(w.aoMapUv),U.push(w.bumpMapUv),U.push(w.normalMapUv),U.push(w.displacementMapUv),U.push(w.emissiveMapUv),U.push(w.metalnessMapUv),U.push(w.roughnessMapUv),U.push(w.anisotropyMapUv),U.push(w.clearcoatMapUv),U.push(w.clearcoatNormalMapUv),U.push(w.clearcoatRoughnessMapUv),U.push(w.iridescenceMapUv),U.push(w.iridescenceThicknessMapUv),U.push(w.sheenColorMapUv),U.push(w.sheenRoughnessMapUv),U.push(w.specularMapUv),U.push(w.specularColorMapUv),U.push(w.specularIntensityMapUv),U.push(w.transmissionMapUv),U.push(w.thicknessMapUv),U.push(w.combine),U.push(w.fogExp2),U.push(w.sizeAttenuation),U.push(w.morphTargetsCount),U.push(w.morphAttributeCount),U.push(w.numDirLights),U.push(w.numPointLights),U.push(w.numSpotLights),U.push(w.numSpotLightMaps),U.push(w.numHemiLights),U.push(w.numRectAreaLights),U.push(w.numDirLightShadows),U.push(w.numPointLightShadows),U.push(w.numSpotLightShadows),U.push(w.numSpotLightShadowsWithMaps),U.push(w.numLightProbes),U.push(w.shadowMapType),U.push(w.toneMapping),U.push(w.numClippingPlanes),U.push(w.numClipIntersection),U.push(w.depthPacking)}function A(U,w){h.disableAll(),w.supportsVertexTextures&&h.enable(0),w.instancing&&h.enable(1),w.instancingColor&&h.enable(2),w.instancingMorph&&h.enable(3),w.matcap&&h.enable(4),w.envMap&&h.enable(5),w.normalMapObjectSpace&&h.enable(6),w.normalMapTangentSpace&&h.enable(7),w.clearcoat&&h.enable(8),w.iridescence&&h.enable(9),w.alphaTest&&h.enable(10),w.vertexColors&&h.enable(11),w.vertexAlphas&&h.enable(12),w.vertexUv1s&&h.enable(13),w.vertexUv2s&&h.enable(14),w.vertexUv3s&&h.enable(15),w.vertexTangents&&h.enable(16),w.anisotropy&&h.enable(17),w.alphaHash&&h.enable(18),w.batching&&h.enable(19),w.dispersion&&h.enable(20),w.batchingColor&&h.enable(21),U.push(h.mask),h.disableAll(),w.fog&&h.enable(0),w.useFog&&h.enable(1),w.flatShading&&h.enable(2),w.logarithmicDepthBuffer&&h.enable(3),w.skinning&&h.enable(4),w.morphTargets&&h.enable(5),w.morphNormals&&h.enable(6),w.morphColors&&h.enable(7),w.premultipliedAlpha&&h.enable(8),w.shadowMapEnabled&&h.enable(9),w.doubleSided&&h.enable(10),w.flipSided&&h.enable(11),w.useDepthPacking&&h.enable(12),w.dithering&&h.enable(13),w.transmission&&h.enable(14),w.sheen&&h.enable(15),w.opaque&&h.enable(16),w.pointsUvs&&h.enable(17),w.decodeVideoTexture&&h.enable(18),w.alphaToCoverage&&h.enable(19),U.push(h.mask)}function D(U){const w=M[U.type];let F;if(w){const it=Oi[w];F=GM.clone(it.uniforms)}else F=U.uniforms;return F}function I(U,w){let F;for(let it=0,V=g.length;it<V;it++){const Q=g[it];if(Q.cacheKey===w){F=Q,++F.usedTimes;break}}return F===void 0&&(F=new $A(c,w,U,l),g.push(F)),F}function P(U){if(--U.usedTimes===0){const w=g.indexOf(U);g[w]=g[g.length-1],g.pop(),U.destroy()}}function z(U){d.remove(U)}function k(){d.dispose()}return{getParameters:x,getProgramCacheKey:y,getUniforms:D,acquireProgram:I,releaseProgram:P,releaseShaderCache:z,programs:g,dispose:k}}function a1(){let c=new WeakMap;function t(l){let u=c.get(l);return u===void 0&&(u={},c.set(l,u)),u}function n(l){c.delete(l)}function a(l,u,h){c.get(l)[u]=h}function r(){c=new WeakMap}return{get:t,remove:n,update:a,dispose:r}}function s1(c,t){return c.groupOrder!==t.groupOrder?c.groupOrder-t.groupOrder:c.renderOrder!==t.renderOrder?c.renderOrder-t.renderOrder:c.material.id!==t.material.id?c.material.id-t.material.id:c.z!==t.z?c.z-t.z:c.id-t.id}function C0(c,t){return c.groupOrder!==t.groupOrder?c.groupOrder-t.groupOrder:c.renderOrder!==t.renderOrder?c.renderOrder-t.renderOrder:c.z!==t.z?t.z-c.z:c.id-t.id}function D0(){const c=[];let t=0;const n=[],a=[],r=[];function l(){t=0,n.length=0,a.length=0,r.length=0}function u(_,v,S,M,E,x){let y=c[t];return y===void 0?(y={id:_.id,object:_,geometry:v,material:S,groupOrder:M,renderOrder:_.renderOrder,z:E,group:x},c[t]=y):(y.id=_.id,y.object=_,y.geometry=v,y.material=S,y.groupOrder=M,y.renderOrder=_.renderOrder,y.z=E,y.group=x),t++,y}function h(_,v,S,M,E,x){const y=u(_,v,S,M,E,x);S.transmission>0?a.push(y):S.transparent===!0?r.push(y):n.push(y)}function d(_,v,S,M,E,x){const y=u(_,v,S,M,E,x);S.transmission>0?a.unshift(y):S.transparent===!0?r.unshift(y):n.unshift(y)}function p(_,v){n.length>1&&n.sort(_||s1),a.length>1&&a.sort(v||C0),r.length>1&&r.sort(v||C0)}function g(){for(let _=t,v=c.length;_<v;_++){const S=c[_];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:a,transparent:r,init:l,push:h,unshift:d,finish:g,sort:p}}function r1(){let c=new WeakMap;function t(a,r){const l=c.get(a);let u;return l===void 0?(u=new D0,c.set(a,[u])):r>=l.length?(u=new D0,l.push(u)):u=l[r],u}function n(){c=new WeakMap}return{get:t,dispose:n}}function o1(){const c={};return{get:function(t){if(c[t.id]!==void 0)return c[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new ut,color:new Ae};break;case"SpotLight":n={position:new ut,direction:new ut,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ut,color:new Ae,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ut,skyColor:new Ae,groundColor:new Ae};break;case"RectAreaLight":n={color:new Ae,position:new ut,halfWidth:new ut,halfHeight:new ut};break}return c[t.id]=n,n}}}function l1(){const c={};return{get:function(t){if(c[t.id]!==void 0)return c[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return c[t.id]=n,n}}}let c1=0;function u1(c,t){return(t.castShadow?2:0)-(c.castShadow?2:0)+(t.map?1:0)-(c.map?1:0)}function f1(c){const t=new o1,n=l1(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)a.probe.push(new ut);const r=new ut,l=new $e,u=new $e;function h(p){let g=0,_=0,v=0;for(let U=0;U<9;U++)a.probe[U].set(0,0,0);let S=0,M=0,E=0,x=0,y=0,T=0,A=0,D=0,I=0,P=0,z=0;p.sort(u1);for(let U=0,w=p.length;U<w;U++){const F=p[U],it=F.color,V=F.intensity,Q=F.distance,Y=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)g+=it.r*V,_+=it.g*V,v+=it.b*V;else if(F.isLightProbe){for(let L=0;L<9;L++)a.probe[L].addScaledVector(F.sh.coefficients[L],V);z++}else if(F.isDirectionalLight){const L=t.get(F);if(L.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const Z=F.shadow,W=n.get(F);W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,a.directionalShadow[S]=W,a.directionalShadowMap[S]=Y,a.directionalShadowMatrix[S]=F.shadow.matrix,T++}a.directional[S]=L,S++}else if(F.isSpotLight){const L=t.get(F);L.position.setFromMatrixPosition(F.matrixWorld),L.color.copy(it).multiplyScalar(V),L.distance=Q,L.coneCos=Math.cos(F.angle),L.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),L.decay=F.decay,a.spot[E]=L;const Z=F.shadow;if(F.map&&(a.spotLightMap[I]=F.map,I++,Z.updateMatrices(F),F.castShadow&&P++),a.spotLightMatrix[E]=Z.matrix,F.castShadow){const W=n.get(F);W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,a.spotShadow[E]=W,a.spotShadowMap[E]=Y,D++}E++}else if(F.isRectAreaLight){const L=t.get(F);L.color.copy(it).multiplyScalar(V),L.halfWidth.set(F.width*.5,0,0),L.halfHeight.set(0,F.height*.5,0),a.rectArea[x]=L,x++}else if(F.isPointLight){const L=t.get(F);if(L.color.copy(F.color).multiplyScalar(F.intensity),L.distance=F.distance,L.decay=F.decay,F.castShadow){const Z=F.shadow,W=n.get(F);W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,W.shadowCameraNear=Z.camera.near,W.shadowCameraFar=Z.camera.far,a.pointShadow[M]=W,a.pointShadowMap[M]=Y,a.pointShadowMatrix[M]=F.shadow.matrix,A++}a.point[M]=L,M++}else if(F.isHemisphereLight){const L=t.get(F);L.skyColor.copy(F.color).multiplyScalar(V),L.groundColor.copy(F.groundColor).multiplyScalar(V),a.hemi[y]=L,y++}}x>0&&(c.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Lt.LTC_FLOAT_1,a.rectAreaLTC2=Lt.LTC_FLOAT_2):(a.rectAreaLTC1=Lt.LTC_HALF_1,a.rectAreaLTC2=Lt.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=_,a.ambient[2]=v;const k=a.hash;(k.directionalLength!==S||k.pointLength!==M||k.spotLength!==E||k.rectAreaLength!==x||k.hemiLength!==y||k.numDirectionalShadows!==T||k.numPointShadows!==A||k.numSpotShadows!==D||k.numSpotMaps!==I||k.numLightProbes!==z)&&(a.directional.length=S,a.spot.length=E,a.rectArea.length=x,a.point.length=M,a.hemi.length=y,a.directionalShadow.length=T,a.directionalShadowMap.length=T,a.pointShadow.length=A,a.pointShadowMap.length=A,a.spotShadow.length=D,a.spotShadowMap.length=D,a.directionalShadowMatrix.length=T,a.pointShadowMatrix.length=A,a.spotLightMatrix.length=D+I-P,a.spotLightMap.length=I,a.numSpotLightShadowsWithMaps=P,a.numLightProbes=z,k.directionalLength=S,k.pointLength=M,k.spotLength=E,k.rectAreaLength=x,k.hemiLength=y,k.numDirectionalShadows=T,k.numPointShadows=A,k.numSpotShadows=D,k.numSpotMaps=I,k.numLightProbes=z,a.version=c1++)}function d(p,g){let _=0,v=0,S=0,M=0,E=0;const x=g.matrixWorldInverse;for(let y=0,T=p.length;y<T;y++){const A=p[y];if(A.isDirectionalLight){const D=a.directional[_];D.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),D.direction.sub(r),D.direction.transformDirection(x),_++}else if(A.isSpotLight){const D=a.spot[S];D.position.setFromMatrixPosition(A.matrixWorld),D.position.applyMatrix4(x),D.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),D.direction.sub(r),D.direction.transformDirection(x),S++}else if(A.isRectAreaLight){const D=a.rectArea[M];D.position.setFromMatrixPosition(A.matrixWorld),D.position.applyMatrix4(x),u.identity(),l.copy(A.matrixWorld),l.premultiply(x),u.extractRotation(l),D.halfWidth.set(A.width*.5,0,0),D.halfHeight.set(0,A.height*.5,0),D.halfWidth.applyMatrix4(u),D.halfHeight.applyMatrix4(u),M++}else if(A.isPointLight){const D=a.point[v];D.position.setFromMatrixPosition(A.matrixWorld),D.position.applyMatrix4(x),v++}else if(A.isHemisphereLight){const D=a.hemi[E];D.direction.setFromMatrixPosition(A.matrixWorld),D.direction.transformDirection(x),E++}}}return{setup:h,setupView:d,state:a}}function N0(c){const t=new f1(c),n=[],a=[];function r(g){p.camera=g,n.length=0,a.length=0}function l(g){n.push(g)}function u(g){a.push(g)}function h(){t.setup(n)}function d(g){t.setupView(n,g)}const p={lightsArray:n,shadowsArray:a,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:p,setupLights:h,setupLightsView:d,pushLight:l,pushShadow:u}}function h1(c){let t=new WeakMap;function n(r,l=0){const u=t.get(r);let h;return u===void 0?(h=new N0(c),t.set(r,[h])):l>=u.length?(h=new N0(c),u.push(h)):h=u[l],h}function a(){t=new WeakMap}return{get:n,dispose:a}}class d1 extends rl{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class p1 extends rl{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const m1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,g1=`uniform sampler2D shadow_pass;
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
}`;function v1(c,t,n){let a=new yd;const r=new Me,l=new Me,u=new _n,h=new d1({depthPacking:fM}),d=new p1,p={},g=n.maxTextureSize,_={[Ja]:Vn,[Vn]:Ja,[ha]:ha},v=new ts({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:m1,fragmentShader:g1}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const M=new ns;M.setAttribute("position",new Bi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new di(M,v),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=e_;let y=this.type;this.render=function(P,z,k){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||P.length===0)return;const U=c.getRenderTarget(),w=c.getActiveCubeFace(),F=c.getActiveMipmapLevel(),it=c.state;it.setBlending(Ka),it.buffers.color.setClear(1,1,1,1),it.buffers.depth.setTest(!0),it.setScissorTest(!1);const V=y!==fa&&this.type===fa,Q=y===fa&&this.type!==fa;for(let Y=0,L=P.length;Y<L;Y++){const Z=P[Y],W=Z.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const ht=W.getFrameExtents();if(r.multiply(ht),l.copy(W.mapSize),(r.x>g||r.y>g)&&(r.x>g&&(l.x=Math.floor(g/ht.x),r.x=l.x*ht.x,W.mapSize.x=l.x),r.y>g&&(l.y=Math.floor(g/ht.y),r.y=l.y*ht.y,W.mapSize.y=l.y)),W.map===null||V===!0||Q===!0){const $=this.type!==fa?{minFilter:hi,magFilter:hi}:{};W.map!==null&&W.map.dispose(),W.map=new Ls(r.x,r.y,$),W.map.texture.name=Z.name+".shadowMap",W.camera.updateProjectionMatrix()}c.setRenderTarget(W.map),c.clear();const B=W.getViewportCount();for(let $=0;$<B;$++){const ot=W.getViewport($);u.set(l.x*ot.x,l.y*ot.y,l.x*ot.z,l.y*ot.w),it.viewport(u),W.updateMatrices(Z,$),a=W.getFrustum(),D(z,k,W.camera,Z,this.type)}W.isPointLightShadow!==!0&&this.type===fa&&T(W,k),W.needsUpdate=!1}y=this.type,x.needsUpdate=!1,c.setRenderTarget(U,w,F)};function T(P,z){const k=t.update(E);v.defines.VSM_SAMPLES!==P.blurSamples&&(v.defines.VSM_SAMPLES=P.blurSamples,S.defines.VSM_SAMPLES=P.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Ls(r.x,r.y)),v.uniforms.shadow_pass.value=P.map.texture,v.uniforms.resolution.value=P.mapSize,v.uniforms.radius.value=P.radius,c.setRenderTarget(P.mapPass),c.clear(),c.renderBufferDirect(z,null,k,v,E,null),S.uniforms.shadow_pass.value=P.mapPass.texture,S.uniforms.resolution.value=P.mapSize,S.uniforms.radius.value=P.radius,c.setRenderTarget(P.map),c.clear(),c.renderBufferDirect(z,null,k,S,E,null)}function A(P,z,k,U){let w=null;const F=k.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(F!==void 0)w=F;else if(w=k.isPointLight===!0?d:h,c.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0){const it=w.uuid,V=z.uuid;let Q=p[it];Q===void 0&&(Q={},p[it]=Q);let Y=Q[V];Y===void 0&&(Y=w.clone(),Q[V]=Y,z.addEventListener("dispose",I)),w=Y}if(w.visible=z.visible,w.wireframe=z.wireframe,U===fa?w.side=z.shadowSide!==null?z.shadowSide:z.side:w.side=z.shadowSide!==null?z.shadowSide:_[z.side],w.alphaMap=z.alphaMap,w.alphaTest=z.alphaTest,w.map=z.map,w.clipShadows=z.clipShadows,w.clippingPlanes=z.clippingPlanes,w.clipIntersection=z.clipIntersection,w.displacementMap=z.displacementMap,w.displacementScale=z.displacementScale,w.displacementBias=z.displacementBias,w.wireframeLinewidth=z.wireframeLinewidth,w.linewidth=z.linewidth,k.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const it=c.properties.get(w);it.light=k}return w}function D(P,z,k,U,w){if(P.visible===!1)return;if(P.layers.test(z.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&w===fa)&&(!P.frustumCulled||a.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,P.matrixWorld);const V=t.update(P),Q=P.material;if(Array.isArray(Q)){const Y=V.groups;for(let L=0,Z=Y.length;L<Z;L++){const W=Y[L],ht=Q[W.materialIndex];if(ht&&ht.visible){const B=A(P,ht,U,w);P.onBeforeShadow(c,P,z,k,V,B,W),c.renderBufferDirect(k,null,V,B,P,W),P.onAfterShadow(c,P,z,k,V,B,W)}}}else if(Q.visible){const Y=A(P,Q,U,w);P.onBeforeShadow(c,P,z,k,V,Y,null),c.renderBufferDirect(k,null,V,Y,P,null),P.onAfterShadow(c,P,z,k,V,Y,null)}}const it=P.children;for(let V=0,Q=it.length;V<Q;V++)D(it[V],z,k,U,w)}function I(P){P.target.removeEventListener("dispose",I);for(const k in p){const U=p[k],w=P.target.uuid;w in U&&(U[w].dispose(),delete U[w])}}}function _1(c){function t(){let q=!1;const Ot=new _n;let mt=null;const xt=new _n(0,0,0,0);return{setMask:function(wt){mt!==wt&&!q&&(c.colorMask(wt,wt,wt,wt),mt=wt)},setLocked:function(wt){q=wt},setClear:function(wt,ie,ye,ke,Ye){Ye===!0&&(wt*=ke,ie*=ke,ye*=ke),Ot.set(wt,ie,ye,ke),xt.equals(Ot)===!1&&(c.clearColor(wt,ie,ye,ke),xt.copy(Ot))},reset:function(){q=!1,mt=null,xt.set(-1,0,0,0)}}}function n(){let q=!1,Ot=null,mt=null,xt=null;return{setTest:function(wt){wt?_t(c.DEPTH_TEST):At(c.DEPTH_TEST)},setMask:function(wt){Ot!==wt&&!q&&(c.depthMask(wt),Ot=wt)},setFunc:function(wt){if(mt!==wt){switch(wt){case BS:c.depthFunc(c.NEVER);break;case IS:c.depthFunc(c.ALWAYS);break;case FS:c.depthFunc(c.LESS);break;case qc:c.depthFunc(c.LEQUAL);break;case HS:c.depthFunc(c.EQUAL);break;case GS:c.depthFunc(c.GEQUAL);break;case VS:c.depthFunc(c.GREATER);break;case kS:c.depthFunc(c.NOTEQUAL);break;default:c.depthFunc(c.LEQUAL)}mt=wt}},setLocked:function(wt){q=wt},setClear:function(wt){xt!==wt&&(c.clearDepth(wt),xt=wt)},reset:function(){q=!1,Ot=null,mt=null,xt=null}}}function a(){let q=!1,Ot=null,mt=null,xt=null,wt=null,ie=null,ye=null,ke=null,Ye=null;return{setTest:function(Ee){q||(Ee?_t(c.STENCIL_TEST):At(c.STENCIL_TEST))},setMask:function(Ee){Ot!==Ee&&!q&&(c.stencilMask(Ee),Ot=Ee)},setFunc:function(Ee,Wn,ei){(mt!==Ee||xt!==Wn||wt!==ei)&&(c.stencilFunc(Ee,Wn,ei),mt=Ee,xt=Wn,wt=ei)},setOp:function(Ee,Wn,ei){(ie!==Ee||ye!==Wn||ke!==ei)&&(c.stencilOp(Ee,Wn,ei),ie=Ee,ye=Wn,ke=ei)},setLocked:function(Ee){q=Ee},setClear:function(Ee){Ye!==Ee&&(c.clearStencil(Ee),Ye=Ee)},reset:function(){q=!1,Ot=null,mt=null,xt=null,wt=null,ie=null,ye=null,ke=null,Ye=null}}}const r=new t,l=new n,u=new a,h=new WeakMap,d=new WeakMap;let p={},g={},_=new WeakMap,v=[],S=null,M=!1,E=null,x=null,y=null,T=null,A=null,D=null,I=null,P=new Ae(0,0,0),z=0,k=!1,U=null,w=null,F=null,it=null,V=null;const Q=c.getParameter(c.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,L=0;const Z=c.getParameter(c.VERSION);Z.indexOf("WebGL")!==-1?(L=parseFloat(/^WebGL (\d)/.exec(Z)[1]),Y=L>=1):Z.indexOf("OpenGL ES")!==-1&&(L=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),Y=L>=2);let W=null,ht={};const B=c.getParameter(c.SCISSOR_BOX),$=c.getParameter(c.VIEWPORT),ot=new _n().fromArray(B),yt=new _n().fromArray($);function tt(q,Ot,mt,xt){const wt=new Uint8Array(4),ie=c.createTexture();c.bindTexture(q,ie),c.texParameteri(q,c.TEXTURE_MIN_FILTER,c.NEAREST),c.texParameteri(q,c.TEXTURE_MAG_FILTER,c.NEAREST);for(let ye=0;ye<mt;ye++)q===c.TEXTURE_3D||q===c.TEXTURE_2D_ARRAY?c.texImage3D(Ot,0,c.RGBA,1,1,xt,0,c.RGBA,c.UNSIGNED_BYTE,wt):c.texImage2D(Ot+ye,0,c.RGBA,1,1,0,c.RGBA,c.UNSIGNED_BYTE,wt);return ie}const dt={};dt[c.TEXTURE_2D]=tt(c.TEXTURE_2D,c.TEXTURE_2D,1),dt[c.TEXTURE_CUBE_MAP]=tt(c.TEXTURE_CUBE_MAP,c.TEXTURE_CUBE_MAP_POSITIVE_X,6),dt[c.TEXTURE_2D_ARRAY]=tt(c.TEXTURE_2D_ARRAY,c.TEXTURE_2D_ARRAY,1,1),dt[c.TEXTURE_3D]=tt(c.TEXTURE_3D,c.TEXTURE_3D,1,1),r.setClear(0,0,0,1),l.setClear(1),u.setClear(0),_t(c.DEPTH_TEST),l.setFunc(qc),Yt(!1),xe(hv),_t(c.CULL_FACE),ce(Ka);function _t(q){p[q]!==!0&&(c.enable(q),p[q]=!0)}function At(q){p[q]!==!1&&(c.disable(q),p[q]=!1)}function Ft(q,Ot){return g[q]!==Ot?(c.bindFramebuffer(q,Ot),g[q]=Ot,q===c.DRAW_FRAMEBUFFER&&(g[c.FRAMEBUFFER]=Ot),q===c.FRAMEBUFFER&&(g[c.DRAW_FRAMEBUFFER]=Ot),!0):!1}function Jt(q,Ot){let mt=v,xt=!1;if(q){mt=_.get(Ot),mt===void 0&&(mt=[],_.set(Ot,mt));const wt=q.textures;if(mt.length!==wt.length||mt[0]!==c.COLOR_ATTACHMENT0){for(let ie=0,ye=wt.length;ie<ye;ie++)mt[ie]=c.COLOR_ATTACHMENT0+ie;mt.length=wt.length,xt=!0}}else mt[0]!==c.BACK&&(mt[0]=c.BACK,xt=!0);xt&&c.drawBuffers(mt)}function pe(q){return S!==q?(c.useProgram(q),S=q,!0):!1}const X={[Rs]:c.FUNC_ADD,[yS]:c.FUNC_SUBTRACT,[SS]:c.FUNC_REVERSE_SUBTRACT};X[MS]=c.MIN,X[ES]=c.MAX;const fe={[bS]:c.ZERO,[TS]:c.ONE,[AS]:c.SRC_COLOR,[od]:c.SRC_ALPHA,[US]:c.SRC_ALPHA_SATURATE,[DS]:c.DST_COLOR,[RS]:c.DST_ALPHA,[wS]:c.ONE_MINUS_SRC_COLOR,[ld]:c.ONE_MINUS_SRC_ALPHA,[NS]:c.ONE_MINUS_DST_COLOR,[CS]:c.ONE_MINUS_DST_ALPHA,[LS]:c.CONSTANT_COLOR,[OS]:c.ONE_MINUS_CONSTANT_COLOR,[PS]:c.CONSTANT_ALPHA,[zS]:c.ONE_MINUS_CONSTANT_ALPHA};function ce(q,Ot,mt,xt,wt,ie,ye,ke,Ye,Ee){if(q===Ka){M===!0&&(At(c.BLEND),M=!1);return}if(M===!1&&(_t(c.BLEND),M=!0),q!==xS){if(q!==E||Ee!==k){if((x!==Rs||A!==Rs)&&(c.blendEquation(c.FUNC_ADD),x=Rs,A=Rs),Ee)switch(q){case Or:c.blendFuncSeparate(c.ONE,c.ONE_MINUS_SRC_ALPHA,c.ONE,c.ONE_MINUS_SRC_ALPHA);break;case dv:c.blendFunc(c.ONE,c.ONE);break;case pv:c.blendFuncSeparate(c.ZERO,c.ONE_MINUS_SRC_COLOR,c.ZERO,c.ONE);break;case mv:c.blendFuncSeparate(c.ZERO,c.SRC_COLOR,c.ZERO,c.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case Or:c.blendFuncSeparate(c.SRC_ALPHA,c.ONE_MINUS_SRC_ALPHA,c.ONE,c.ONE_MINUS_SRC_ALPHA);break;case dv:c.blendFunc(c.SRC_ALPHA,c.ONE);break;case pv:c.blendFuncSeparate(c.ZERO,c.ONE_MINUS_SRC_COLOR,c.ZERO,c.ONE);break;case mv:c.blendFunc(c.ZERO,c.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}y=null,T=null,D=null,I=null,P.set(0,0,0),z=0,E=q,k=Ee}return}wt=wt||Ot,ie=ie||mt,ye=ye||xt,(Ot!==x||wt!==A)&&(c.blendEquationSeparate(X[Ot],X[wt]),x=Ot,A=wt),(mt!==y||xt!==T||ie!==D||ye!==I)&&(c.blendFuncSeparate(fe[mt],fe[xt],fe[ie],fe[ye]),y=mt,T=xt,D=ie,I=ye),(ke.equals(P)===!1||Ye!==z)&&(c.blendColor(ke.r,ke.g,ke.b,Ye),P.copy(ke),z=Ye),E=q,k=!1}function ze(q,Ot){q.side===ha?At(c.CULL_FACE):_t(c.CULL_FACE);let mt=q.side===Vn;Ot&&(mt=!mt),Yt(mt),q.blending===Or&&q.transparent===!1?ce(Ka):ce(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),l.setFunc(q.depthFunc),l.setTest(q.depthTest),l.setMask(q.depthWrite),r.setMask(q.colorWrite);const xt=q.stencilWrite;u.setTest(xt),xt&&(u.setMask(q.stencilWriteMask),u.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),u.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),ae(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?_t(c.SAMPLE_ALPHA_TO_COVERAGE):At(c.SAMPLE_ALPHA_TO_COVERAGE)}function Yt(q){U!==q&&(q?c.frontFace(c.CW):c.frontFace(c.CCW),U=q)}function xe(q){q!==vS?(_t(c.CULL_FACE),q!==w&&(q===hv?c.cullFace(c.BACK):q===_S?c.cullFace(c.FRONT):c.cullFace(c.FRONT_AND_BACK))):At(c.CULL_FACE),w=q}function $t(q){q!==F&&(Y&&c.lineWidth(q),F=q)}function ae(q,Ot,mt){q?(_t(c.POLYGON_OFFSET_FILL),(it!==Ot||V!==mt)&&(c.polygonOffset(Ot,mt),it=Ot,V=mt)):At(c.POLYGON_OFFSET_FILL)}function je(q){q?_t(c.SCISSOR_TEST):At(c.SCISSOR_TEST)}function G(q){q===void 0&&(q=c.TEXTURE0+Q-1),W!==q&&(c.activeTexture(q),W=q)}function N(q,Ot,mt){mt===void 0&&(W===null?mt=c.TEXTURE0+Q-1:mt=W);let xt=ht[mt];xt===void 0&&(xt={type:void 0,texture:void 0},ht[mt]=xt),(xt.type!==q||xt.texture!==Ot)&&(W!==mt&&(c.activeTexture(mt),W=mt),c.bindTexture(q,Ot||dt[q]),xt.type=q,xt.texture=Ot)}function ft(){const q=ht[W];q!==void 0&&q.type!==void 0&&(c.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function St(){try{c.compressedTexImage2D.apply(c,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Mt(){try{c.compressedTexImage3D.apply(c,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Et(){try{c.texSubImage2D.apply(c,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Vt(){try{c.texSubImage3D.apply(c,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Rt(){try{c.compressedTexSubImage2D.apply(c,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Dt(){try{c.compressedTexSubImage3D.apply(c,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function qt(){try{c.texStorage2D.apply(c,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ct(){try{c.texStorage3D.apply(c,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Gt(){try{c.texImage2D.apply(c,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function he(){try{c.texImage3D.apply(c,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Zt(q){ot.equals(q)===!1&&(c.scissor(q.x,q.y,q.z,q.w),ot.copy(q))}function Nt(q){yt.equals(q)===!1&&(c.viewport(q.x,q.y,q.z,q.w),yt.copy(q))}function ne(q,Ot){let mt=d.get(Ot);mt===void 0&&(mt=new WeakMap,d.set(Ot,mt));let xt=mt.get(q);xt===void 0&&(xt=c.getUniformBlockIndex(Ot,q.name),mt.set(q,xt))}function re(q,Ot){const xt=d.get(Ot).get(q);h.get(Ot)!==xt&&(c.uniformBlockBinding(Ot,xt,q.__bindingPointIndex),h.set(Ot,xt))}function Be(){c.disable(c.BLEND),c.disable(c.CULL_FACE),c.disable(c.DEPTH_TEST),c.disable(c.POLYGON_OFFSET_FILL),c.disable(c.SCISSOR_TEST),c.disable(c.STENCIL_TEST),c.disable(c.SAMPLE_ALPHA_TO_COVERAGE),c.blendEquation(c.FUNC_ADD),c.blendFunc(c.ONE,c.ZERO),c.blendFuncSeparate(c.ONE,c.ZERO,c.ONE,c.ZERO),c.blendColor(0,0,0,0),c.colorMask(!0,!0,!0,!0),c.clearColor(0,0,0,0),c.depthMask(!0),c.depthFunc(c.LESS),c.clearDepth(1),c.stencilMask(4294967295),c.stencilFunc(c.ALWAYS,0,4294967295),c.stencilOp(c.KEEP,c.KEEP,c.KEEP),c.clearStencil(0),c.cullFace(c.BACK),c.frontFace(c.CCW),c.polygonOffset(0,0),c.activeTexture(c.TEXTURE0),c.bindFramebuffer(c.FRAMEBUFFER,null),c.bindFramebuffer(c.DRAW_FRAMEBUFFER,null),c.bindFramebuffer(c.READ_FRAMEBUFFER,null),c.useProgram(null),c.lineWidth(1),c.scissor(0,0,c.canvas.width,c.canvas.height),c.viewport(0,0,c.canvas.width,c.canvas.height),p={},W=null,ht={},g={},_=new WeakMap,v=[],S=null,M=!1,E=null,x=null,y=null,T=null,A=null,D=null,I=null,P=new Ae(0,0,0),z=0,k=!1,U=null,w=null,F=null,it=null,V=null,ot.set(0,0,c.canvas.width,c.canvas.height),yt.set(0,0,c.canvas.width,c.canvas.height),r.reset(),l.reset(),u.reset()}return{buffers:{color:r,depth:l,stencil:u},enable:_t,disable:At,bindFramebuffer:Ft,drawBuffers:Jt,useProgram:pe,setBlending:ce,setMaterial:ze,setFlipSided:Yt,setCullFace:xe,setLineWidth:$t,setPolygonOffset:ae,setScissorTest:je,activeTexture:G,bindTexture:N,unbindTexture:ft,compressedTexImage2D:St,compressedTexImage3D:Mt,texImage2D:Gt,texImage3D:he,updateUBOMapping:ne,uniformBlockBinding:re,texStorage2D:qt,texStorage3D:Ct,texSubImage2D:Et,texSubImage3D:Vt,compressedTexSubImage2D:Rt,compressedTexSubImage3D:Dt,scissor:Zt,viewport:Nt,reset:Be}}function x1(c,t,n,a,r,l,u){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Me,g=new WeakMap;let _;const v=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(G,N){return S?new OffscreenCanvas(G,N):Jc("canvas")}function E(G,N,ft){let St=1;const Mt=je(G);if((Mt.width>ft||Mt.height>ft)&&(St=ft/Math.max(Mt.width,Mt.height)),St<1)if(typeof HTMLImageElement<"u"&&G instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&G instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&G instanceof ImageBitmap||typeof VideoFrame<"u"&&G instanceof VideoFrame){const Et=Math.floor(St*Mt.width),Vt=Math.floor(St*Mt.height);_===void 0&&(_=M(Et,Vt));const Rt=N?M(Et,Vt):_;return Rt.width=Et,Rt.height=Vt,Rt.getContext("2d").drawImage(G,0,0,Et,Vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Mt.width+"x"+Mt.height+") to ("+Et+"x"+Vt+")."),Rt}else return"data"in G&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Mt.width+"x"+Mt.height+")."),G;return G}function x(G){return G.generateMipmaps&&G.minFilter!==hi&&G.minFilter!==Mi}function y(G){c.generateMipmap(G)}function T(G,N,ft,St,Mt=!1){if(G!==null){if(c[G]!==void 0)return c[G];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+G+"'")}let Et=N;if(N===c.RED&&(ft===c.FLOAT&&(Et=c.R32F),ft===c.HALF_FLOAT&&(Et=c.R16F),ft===c.UNSIGNED_BYTE&&(Et=c.R8)),N===c.RED_INTEGER&&(ft===c.UNSIGNED_BYTE&&(Et=c.R8UI),ft===c.UNSIGNED_SHORT&&(Et=c.R16UI),ft===c.UNSIGNED_INT&&(Et=c.R32UI),ft===c.BYTE&&(Et=c.R8I),ft===c.SHORT&&(Et=c.R16I),ft===c.INT&&(Et=c.R32I)),N===c.RG&&(ft===c.FLOAT&&(Et=c.RG32F),ft===c.HALF_FLOAT&&(Et=c.RG16F),ft===c.UNSIGNED_BYTE&&(Et=c.RG8)),N===c.RG_INTEGER&&(ft===c.UNSIGNED_BYTE&&(Et=c.RG8UI),ft===c.UNSIGNED_SHORT&&(Et=c.RG16UI),ft===c.UNSIGNED_INT&&(Et=c.RG32UI),ft===c.BYTE&&(Et=c.RG8I),ft===c.SHORT&&(Et=c.RG16I),ft===c.INT&&(Et=c.RG32I)),N===c.RGB&&ft===c.UNSIGNED_INT_5_9_9_9_REV&&(Et=c.RGB9_E5),N===c.RGBA){const Vt=Mt?Yc:Ue.getTransfer(St);ft===c.FLOAT&&(Et=c.RGBA32F),ft===c.HALF_FLOAT&&(Et=c.RGBA16F),ft===c.UNSIGNED_BYTE&&(Et=Vt===Ve?c.SRGB8_ALPHA8:c.RGBA8),ft===c.UNSIGNED_SHORT_4_4_4_4&&(Et=c.RGBA4),ft===c.UNSIGNED_SHORT_5_5_5_1&&(Et=c.RGB5_A1)}return(Et===c.R16F||Et===c.R32F||Et===c.RG16F||Et===c.RG32F||Et===c.RGBA16F||Et===c.RGBA32F)&&t.get("EXT_color_buffer_float"),Et}function A(G,N){let ft;return G?N===null||N===Fr||N===Hr?ft=c.DEPTH24_STENCIL8:N===Za?ft=c.DEPTH32F_STENCIL8:N===Xc&&(ft=c.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):N===null||N===Fr||N===Hr?ft=c.DEPTH_COMPONENT24:N===Za?ft=c.DEPTH_COMPONENT32F:N===Xc&&(ft=c.DEPTH_COMPONENT16),ft}function D(G,N){return x(G)===!0||G.isFramebufferTexture&&G.minFilter!==hi&&G.minFilter!==Mi?Math.log2(Math.max(N.width,N.height))+1:G.mipmaps!==void 0&&G.mipmaps.length>0?G.mipmaps.length:G.isCompressedTexture&&Array.isArray(G.image)?N.mipmaps.length:1}function I(G){const N=G.target;N.removeEventListener("dispose",I),z(N),N.isVideoTexture&&g.delete(N)}function P(G){const N=G.target;N.removeEventListener("dispose",P),U(N)}function z(G){const N=a.get(G);if(N.__webglInit===void 0)return;const ft=G.source,St=v.get(ft);if(St){const Mt=St[N.__cacheKey];Mt.usedTimes--,Mt.usedTimes===0&&k(G),Object.keys(St).length===0&&v.delete(ft)}a.remove(G)}function k(G){const N=a.get(G);c.deleteTexture(N.__webglTexture);const ft=G.source,St=v.get(ft);delete St[N.__cacheKey],u.memory.textures--}function U(G){const N=a.get(G);if(G.depthTexture&&G.depthTexture.dispose(),G.isWebGLCubeRenderTarget)for(let St=0;St<6;St++){if(Array.isArray(N.__webglFramebuffer[St]))for(let Mt=0;Mt<N.__webglFramebuffer[St].length;Mt++)c.deleteFramebuffer(N.__webglFramebuffer[St][Mt]);else c.deleteFramebuffer(N.__webglFramebuffer[St]);N.__webglDepthbuffer&&c.deleteRenderbuffer(N.__webglDepthbuffer[St])}else{if(Array.isArray(N.__webglFramebuffer))for(let St=0;St<N.__webglFramebuffer.length;St++)c.deleteFramebuffer(N.__webglFramebuffer[St]);else c.deleteFramebuffer(N.__webglFramebuffer);if(N.__webglDepthbuffer&&c.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&c.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let St=0;St<N.__webglColorRenderbuffer.length;St++)N.__webglColorRenderbuffer[St]&&c.deleteRenderbuffer(N.__webglColorRenderbuffer[St]);N.__webglDepthRenderbuffer&&c.deleteRenderbuffer(N.__webglDepthRenderbuffer)}const ft=G.textures;for(let St=0,Mt=ft.length;St<Mt;St++){const Et=a.get(ft[St]);Et.__webglTexture&&(c.deleteTexture(Et.__webglTexture),u.memory.textures--),a.remove(ft[St])}a.remove(G)}let w=0;function F(){w=0}function it(){const G=w;return G>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+G+" texture units while this GPU supports only "+r.maxTextures),w+=1,G}function V(G){const N=[];return N.push(G.wrapS),N.push(G.wrapT),N.push(G.wrapR||0),N.push(G.magFilter),N.push(G.minFilter),N.push(G.anisotropy),N.push(G.internalFormat),N.push(G.format),N.push(G.type),N.push(G.generateMipmaps),N.push(G.premultiplyAlpha),N.push(G.flipY),N.push(G.unpackAlignment),N.push(G.colorSpace),N.join()}function Q(G,N){const ft=a.get(G);if(G.isVideoTexture&&$t(G),G.isRenderTargetTexture===!1&&G.version>0&&ft.__version!==G.version){const St=G.image;if(St===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(St.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{yt(ft,G,N);return}}n.bindTexture(c.TEXTURE_2D,ft.__webglTexture,c.TEXTURE0+N)}function Y(G,N){const ft=a.get(G);if(G.version>0&&ft.__version!==G.version){yt(ft,G,N);return}n.bindTexture(c.TEXTURE_2D_ARRAY,ft.__webglTexture,c.TEXTURE0+N)}function L(G,N){const ft=a.get(G);if(G.version>0&&ft.__version!==G.version){yt(ft,G,N);return}n.bindTexture(c.TEXTURE_3D,ft.__webglTexture,c.TEXTURE0+N)}function Z(G,N){const ft=a.get(G);if(G.version>0&&ft.__version!==G.version){tt(ft,G,N);return}n.bindTexture(c.TEXTURE_CUBE_MAP,ft.__webglTexture,c.TEXTURE0+N)}const W={[fd]:c.REPEAT,[Ns]:c.CLAMP_TO_EDGE,[hd]:c.MIRRORED_REPEAT},ht={[hi]:c.NEAREST,[$S]:c.NEAREST_MIPMAP_NEAREST,[gc]:c.NEAREST_MIPMAP_LINEAR,[Mi]:c.LINEAR,[yh]:c.LINEAR_MIPMAP_NEAREST,[Us]:c.LINEAR_MIPMAP_LINEAR},B={[dM]:c.NEVER,[xM]:c.ALWAYS,[pM]:c.LESS,[h_]:c.LEQUAL,[mM]:c.EQUAL,[_M]:c.GEQUAL,[gM]:c.GREATER,[vM]:c.NOTEQUAL};function $(G,N){if(N.type===Za&&t.has("OES_texture_float_linear")===!1&&(N.magFilter===Mi||N.magFilter===yh||N.magFilter===gc||N.magFilter===Us||N.minFilter===Mi||N.minFilter===yh||N.minFilter===gc||N.minFilter===Us)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),c.texParameteri(G,c.TEXTURE_WRAP_S,W[N.wrapS]),c.texParameteri(G,c.TEXTURE_WRAP_T,W[N.wrapT]),(G===c.TEXTURE_3D||G===c.TEXTURE_2D_ARRAY)&&c.texParameteri(G,c.TEXTURE_WRAP_R,W[N.wrapR]),c.texParameteri(G,c.TEXTURE_MAG_FILTER,ht[N.magFilter]),c.texParameteri(G,c.TEXTURE_MIN_FILTER,ht[N.minFilter]),N.compareFunction&&(c.texParameteri(G,c.TEXTURE_COMPARE_MODE,c.COMPARE_REF_TO_TEXTURE),c.texParameteri(G,c.TEXTURE_COMPARE_FUNC,B[N.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(N.magFilter===hi||N.minFilter!==gc&&N.minFilter!==Us||N.type===Za&&t.has("OES_texture_float_linear")===!1)return;if(N.anisotropy>1||a.get(N).__currentAnisotropy){const ft=t.get("EXT_texture_filter_anisotropic");c.texParameterf(G,ft.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(N.anisotropy,r.getMaxAnisotropy())),a.get(N).__currentAnisotropy=N.anisotropy}}}function ot(G,N){let ft=!1;G.__webglInit===void 0&&(G.__webglInit=!0,N.addEventListener("dispose",I));const St=N.source;let Mt=v.get(St);Mt===void 0&&(Mt={},v.set(St,Mt));const Et=V(N);if(Et!==G.__cacheKey){Mt[Et]===void 0&&(Mt[Et]={texture:c.createTexture(),usedTimes:0},u.memory.textures++,ft=!0),Mt[Et].usedTimes++;const Vt=Mt[G.__cacheKey];Vt!==void 0&&(Mt[G.__cacheKey].usedTimes--,Vt.usedTimes===0&&k(N)),G.__cacheKey=Et,G.__webglTexture=Mt[Et].texture}return ft}function yt(G,N,ft){let St=c.TEXTURE_2D;(N.isDataArrayTexture||N.isCompressedArrayTexture)&&(St=c.TEXTURE_2D_ARRAY),N.isData3DTexture&&(St=c.TEXTURE_3D);const Mt=ot(G,N),Et=N.source;n.bindTexture(St,G.__webglTexture,c.TEXTURE0+ft);const Vt=a.get(Et);if(Et.version!==Vt.__version||Mt===!0){n.activeTexture(c.TEXTURE0+ft);const Rt=Ue.getPrimaries(Ue.workingColorSpace),Dt=N.colorSpace===Ya?null:Ue.getPrimaries(N.colorSpace),qt=N.colorSpace===Ya||Rt===Dt?c.NONE:c.BROWSER_DEFAULT_WEBGL;c.pixelStorei(c.UNPACK_FLIP_Y_WEBGL,N.flipY),c.pixelStorei(c.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),c.pixelStorei(c.UNPACK_ALIGNMENT,N.unpackAlignment),c.pixelStorei(c.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let Ct=E(N.image,!1,r.maxTextureSize);Ct=ae(N,Ct);const Gt=l.convert(N.format,N.colorSpace),he=l.convert(N.type);let Zt=T(N.internalFormat,Gt,he,N.colorSpace,N.isVideoTexture);$(St,N);let Nt;const ne=N.mipmaps,re=N.isVideoTexture!==!0,Be=Vt.__version===void 0||Mt===!0,q=Et.dataReady,Ot=D(N,Ct);if(N.isDepthTexture)Zt=A(N.format===Gr,N.type),Be&&(re?n.texStorage2D(c.TEXTURE_2D,1,Zt,Ct.width,Ct.height):n.texImage2D(c.TEXTURE_2D,0,Zt,Ct.width,Ct.height,0,Gt,he,null));else if(N.isDataTexture)if(ne.length>0){re&&Be&&n.texStorage2D(c.TEXTURE_2D,Ot,Zt,ne[0].width,ne[0].height);for(let mt=0,xt=ne.length;mt<xt;mt++)Nt=ne[mt],re?q&&n.texSubImage2D(c.TEXTURE_2D,mt,0,0,Nt.width,Nt.height,Gt,he,Nt.data):n.texImage2D(c.TEXTURE_2D,mt,Zt,Nt.width,Nt.height,0,Gt,he,Nt.data);N.generateMipmaps=!1}else re?(Be&&n.texStorage2D(c.TEXTURE_2D,Ot,Zt,Ct.width,Ct.height),q&&n.texSubImage2D(c.TEXTURE_2D,0,0,0,Ct.width,Ct.height,Gt,he,Ct.data)):n.texImage2D(c.TEXTURE_2D,0,Zt,Ct.width,Ct.height,0,Gt,he,Ct.data);else if(N.isCompressedTexture)if(N.isCompressedArrayTexture){re&&Be&&n.texStorage3D(c.TEXTURE_2D_ARRAY,Ot,Zt,ne[0].width,ne[0].height,Ct.depth);for(let mt=0,xt=ne.length;mt<xt;mt++)if(Nt=ne[mt],N.format!==zi)if(Gt!==null)if(re){if(q)if(N.layerUpdates.size>0){for(const wt of N.layerUpdates){const ie=Nt.width*Nt.height;n.compressedTexSubImage3D(c.TEXTURE_2D_ARRAY,mt,0,0,wt,Nt.width,Nt.height,1,Gt,Nt.data.slice(ie*wt,ie*(wt+1)),0,0)}N.clearLayerUpdates()}else n.compressedTexSubImage3D(c.TEXTURE_2D_ARRAY,mt,0,0,0,Nt.width,Nt.height,Ct.depth,Gt,Nt.data,0,0)}else n.compressedTexImage3D(c.TEXTURE_2D_ARRAY,mt,Zt,Nt.width,Nt.height,Ct.depth,0,Nt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else re?q&&n.texSubImage3D(c.TEXTURE_2D_ARRAY,mt,0,0,0,Nt.width,Nt.height,Ct.depth,Gt,he,Nt.data):n.texImage3D(c.TEXTURE_2D_ARRAY,mt,Zt,Nt.width,Nt.height,Ct.depth,0,Gt,he,Nt.data)}else{re&&Be&&n.texStorage2D(c.TEXTURE_2D,Ot,Zt,ne[0].width,ne[0].height);for(let mt=0,xt=ne.length;mt<xt;mt++)Nt=ne[mt],N.format!==zi?Gt!==null?re?q&&n.compressedTexSubImage2D(c.TEXTURE_2D,mt,0,0,Nt.width,Nt.height,Gt,Nt.data):n.compressedTexImage2D(c.TEXTURE_2D,mt,Zt,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):re?q&&n.texSubImage2D(c.TEXTURE_2D,mt,0,0,Nt.width,Nt.height,Gt,he,Nt.data):n.texImage2D(c.TEXTURE_2D,mt,Zt,Nt.width,Nt.height,0,Gt,he,Nt.data)}else if(N.isDataArrayTexture)if(re){if(Be&&n.texStorage3D(c.TEXTURE_2D_ARRAY,Ot,Zt,Ct.width,Ct.height,Ct.depth),q)if(N.layerUpdates.size>0){let mt;switch(he){case c.UNSIGNED_BYTE:switch(Gt){case c.ALPHA:mt=1;break;case c.LUMINANCE:mt=1;break;case c.LUMINANCE_ALPHA:mt=2;break;case c.RGB:mt=3;break;case c.RGBA:mt=4;break;default:throw new Error(`Unknown texel size for format ${Gt}.`)}break;case c.UNSIGNED_SHORT_4_4_4_4:case c.UNSIGNED_SHORT_5_5_5_1:case c.UNSIGNED_SHORT_5_6_5:mt=1;break;default:throw new Error(`Unknown texel size for type ${he}.`)}const xt=Ct.width*Ct.height*mt;for(const wt of N.layerUpdates)n.texSubImage3D(c.TEXTURE_2D_ARRAY,0,0,0,wt,Ct.width,Ct.height,1,Gt,he,Ct.data.slice(xt*wt,xt*(wt+1)));N.clearLayerUpdates()}else n.texSubImage3D(c.TEXTURE_2D_ARRAY,0,0,0,0,Ct.width,Ct.height,Ct.depth,Gt,he,Ct.data)}else n.texImage3D(c.TEXTURE_2D_ARRAY,0,Zt,Ct.width,Ct.height,Ct.depth,0,Gt,he,Ct.data);else if(N.isData3DTexture)re?(Be&&n.texStorage3D(c.TEXTURE_3D,Ot,Zt,Ct.width,Ct.height,Ct.depth),q&&n.texSubImage3D(c.TEXTURE_3D,0,0,0,0,Ct.width,Ct.height,Ct.depth,Gt,he,Ct.data)):n.texImage3D(c.TEXTURE_3D,0,Zt,Ct.width,Ct.height,Ct.depth,0,Gt,he,Ct.data);else if(N.isFramebufferTexture){if(Be)if(re)n.texStorage2D(c.TEXTURE_2D,Ot,Zt,Ct.width,Ct.height);else{let mt=Ct.width,xt=Ct.height;for(let wt=0;wt<Ot;wt++)n.texImage2D(c.TEXTURE_2D,wt,Zt,mt,xt,0,Gt,he,null),mt>>=1,xt>>=1}}else if(ne.length>0){if(re&&Be){const mt=je(ne[0]);n.texStorage2D(c.TEXTURE_2D,Ot,Zt,mt.width,mt.height)}for(let mt=0,xt=ne.length;mt<xt;mt++)Nt=ne[mt],re?q&&n.texSubImage2D(c.TEXTURE_2D,mt,0,0,Gt,he,Nt):n.texImage2D(c.TEXTURE_2D,mt,Zt,Gt,he,Nt);N.generateMipmaps=!1}else if(re){if(Be){const mt=je(Ct);n.texStorage2D(c.TEXTURE_2D,Ot,Zt,mt.width,mt.height)}q&&n.texSubImage2D(c.TEXTURE_2D,0,0,0,Gt,he,Ct)}else n.texImage2D(c.TEXTURE_2D,0,Zt,Gt,he,Ct);x(N)&&y(St),Vt.__version=Et.version,N.onUpdate&&N.onUpdate(N)}G.__version=N.version}function tt(G,N,ft){if(N.image.length!==6)return;const St=ot(G,N),Mt=N.source;n.bindTexture(c.TEXTURE_CUBE_MAP,G.__webglTexture,c.TEXTURE0+ft);const Et=a.get(Mt);if(Mt.version!==Et.__version||St===!0){n.activeTexture(c.TEXTURE0+ft);const Vt=Ue.getPrimaries(Ue.workingColorSpace),Rt=N.colorSpace===Ya?null:Ue.getPrimaries(N.colorSpace),Dt=N.colorSpace===Ya||Vt===Rt?c.NONE:c.BROWSER_DEFAULT_WEBGL;c.pixelStorei(c.UNPACK_FLIP_Y_WEBGL,N.flipY),c.pixelStorei(c.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),c.pixelStorei(c.UNPACK_ALIGNMENT,N.unpackAlignment),c.pixelStorei(c.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);const qt=N.isCompressedTexture||N.image[0].isCompressedTexture,Ct=N.image[0]&&N.image[0].isDataTexture,Gt=[];for(let xt=0;xt<6;xt++)!qt&&!Ct?Gt[xt]=E(N.image[xt],!0,r.maxCubemapSize):Gt[xt]=Ct?N.image[xt].image:N.image[xt],Gt[xt]=ae(N,Gt[xt]);const he=Gt[0],Zt=l.convert(N.format,N.colorSpace),Nt=l.convert(N.type),ne=T(N.internalFormat,Zt,Nt,N.colorSpace),re=N.isVideoTexture!==!0,Be=Et.__version===void 0||St===!0,q=Mt.dataReady;let Ot=D(N,he);$(c.TEXTURE_CUBE_MAP,N);let mt;if(qt){re&&Be&&n.texStorage2D(c.TEXTURE_CUBE_MAP,Ot,ne,he.width,he.height);for(let xt=0;xt<6;xt++){mt=Gt[xt].mipmaps;for(let wt=0;wt<mt.length;wt++){const ie=mt[wt];N.format!==zi?Zt!==null?re?q&&n.compressedTexSubImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+xt,wt,0,0,ie.width,ie.height,Zt,ie.data):n.compressedTexImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+xt,wt,ne,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):re?q&&n.texSubImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+xt,wt,0,0,ie.width,ie.height,Zt,Nt,ie.data):n.texImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+xt,wt,ne,ie.width,ie.height,0,Zt,Nt,ie.data)}}}else{if(mt=N.mipmaps,re&&Be){mt.length>0&&Ot++;const xt=je(Gt[0]);n.texStorage2D(c.TEXTURE_CUBE_MAP,Ot,ne,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(Ct){re?q&&n.texSubImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Gt[xt].width,Gt[xt].height,Zt,Nt,Gt[xt].data):n.texImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ne,Gt[xt].width,Gt[xt].height,0,Zt,Nt,Gt[xt].data);for(let wt=0;wt<mt.length;wt++){const ye=mt[wt].image[xt].image;re?q&&n.texSubImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+xt,wt+1,0,0,ye.width,ye.height,Zt,Nt,ye.data):n.texImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+xt,wt+1,ne,ye.width,ye.height,0,Zt,Nt,ye.data)}}else{re?q&&n.texSubImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Zt,Nt,Gt[xt]):n.texImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ne,Zt,Nt,Gt[xt]);for(let wt=0;wt<mt.length;wt++){const ie=mt[wt];re?q&&n.texSubImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+xt,wt+1,0,0,Zt,Nt,ie.image[xt]):n.texImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+xt,wt+1,ne,Zt,Nt,ie.image[xt])}}}x(N)&&y(c.TEXTURE_CUBE_MAP),Et.__version=Mt.version,N.onUpdate&&N.onUpdate(N)}G.__version=N.version}function dt(G,N,ft,St,Mt,Et){const Vt=l.convert(ft.format,ft.colorSpace),Rt=l.convert(ft.type),Dt=T(ft.internalFormat,Vt,Rt,ft.colorSpace);if(!a.get(N).__hasExternalTextures){const Ct=Math.max(1,N.width>>Et),Gt=Math.max(1,N.height>>Et);Mt===c.TEXTURE_3D||Mt===c.TEXTURE_2D_ARRAY?n.texImage3D(Mt,Et,Dt,Ct,Gt,N.depth,0,Vt,Rt,null):n.texImage2D(Mt,Et,Dt,Ct,Gt,0,Vt,Rt,null)}n.bindFramebuffer(c.FRAMEBUFFER,G),xe(N)?h.framebufferTexture2DMultisampleEXT(c.FRAMEBUFFER,St,Mt,a.get(ft).__webglTexture,0,Yt(N)):(Mt===c.TEXTURE_2D||Mt>=c.TEXTURE_CUBE_MAP_POSITIVE_X&&Mt<=c.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&c.framebufferTexture2D(c.FRAMEBUFFER,St,Mt,a.get(ft).__webglTexture,Et),n.bindFramebuffer(c.FRAMEBUFFER,null)}function _t(G,N,ft){if(c.bindRenderbuffer(c.RENDERBUFFER,G),N.depthBuffer){const St=N.depthTexture,Mt=St&&St.isDepthTexture?St.type:null,Et=A(N.stencilBuffer,Mt),Vt=N.stencilBuffer?c.DEPTH_STENCIL_ATTACHMENT:c.DEPTH_ATTACHMENT,Rt=Yt(N);xe(N)?h.renderbufferStorageMultisampleEXT(c.RENDERBUFFER,Rt,Et,N.width,N.height):ft?c.renderbufferStorageMultisample(c.RENDERBUFFER,Rt,Et,N.width,N.height):c.renderbufferStorage(c.RENDERBUFFER,Et,N.width,N.height),c.framebufferRenderbuffer(c.FRAMEBUFFER,Vt,c.RENDERBUFFER,G)}else{const St=N.textures;for(let Mt=0;Mt<St.length;Mt++){const Et=St[Mt],Vt=l.convert(Et.format,Et.colorSpace),Rt=l.convert(Et.type),Dt=T(Et.internalFormat,Vt,Rt,Et.colorSpace),qt=Yt(N);ft&&xe(N)===!1?c.renderbufferStorageMultisample(c.RENDERBUFFER,qt,Dt,N.width,N.height):xe(N)?h.renderbufferStorageMultisampleEXT(c.RENDERBUFFER,qt,Dt,N.width,N.height):c.renderbufferStorage(c.RENDERBUFFER,Dt,N.width,N.height)}}c.bindRenderbuffer(c.RENDERBUFFER,null)}function At(G,N){if(N&&N.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(c.FRAMEBUFFER,G),!(N.depthTexture&&N.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!a.get(N.depthTexture).__webglTexture||N.depthTexture.image.width!==N.width||N.depthTexture.image.height!==N.height)&&(N.depthTexture.image.width=N.width,N.depthTexture.image.height=N.height,N.depthTexture.needsUpdate=!0),Q(N.depthTexture,0);const St=a.get(N.depthTexture).__webglTexture,Mt=Yt(N);if(N.depthTexture.format===Pr)xe(N)?h.framebufferTexture2DMultisampleEXT(c.FRAMEBUFFER,c.DEPTH_ATTACHMENT,c.TEXTURE_2D,St,0,Mt):c.framebufferTexture2D(c.FRAMEBUFFER,c.DEPTH_ATTACHMENT,c.TEXTURE_2D,St,0);else if(N.depthTexture.format===Gr)xe(N)?h.framebufferTexture2DMultisampleEXT(c.FRAMEBUFFER,c.DEPTH_STENCIL_ATTACHMENT,c.TEXTURE_2D,St,0,Mt):c.framebufferTexture2D(c.FRAMEBUFFER,c.DEPTH_STENCIL_ATTACHMENT,c.TEXTURE_2D,St,0);else throw new Error("Unknown depthTexture format")}function Ft(G){const N=a.get(G),ft=G.isWebGLCubeRenderTarget===!0;if(G.depthTexture&&!N.__autoAllocateDepthBuffer){if(ft)throw new Error("target.depthTexture not supported in Cube render targets");At(N.__webglFramebuffer,G)}else if(ft){N.__webglDepthbuffer=[];for(let St=0;St<6;St++)n.bindFramebuffer(c.FRAMEBUFFER,N.__webglFramebuffer[St]),N.__webglDepthbuffer[St]=c.createRenderbuffer(),_t(N.__webglDepthbuffer[St],G,!1)}else n.bindFramebuffer(c.FRAMEBUFFER,N.__webglFramebuffer),N.__webglDepthbuffer=c.createRenderbuffer(),_t(N.__webglDepthbuffer,G,!1);n.bindFramebuffer(c.FRAMEBUFFER,null)}function Jt(G,N,ft){const St=a.get(G);N!==void 0&&dt(St.__webglFramebuffer,G,G.texture,c.COLOR_ATTACHMENT0,c.TEXTURE_2D,0),ft!==void 0&&Ft(G)}function pe(G){const N=G.texture,ft=a.get(G),St=a.get(N);G.addEventListener("dispose",P);const Mt=G.textures,Et=G.isWebGLCubeRenderTarget===!0,Vt=Mt.length>1;if(Vt||(St.__webglTexture===void 0&&(St.__webglTexture=c.createTexture()),St.__version=N.version,u.memory.textures++),Et){ft.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(N.mipmaps&&N.mipmaps.length>0){ft.__webglFramebuffer[Rt]=[];for(let Dt=0;Dt<N.mipmaps.length;Dt++)ft.__webglFramebuffer[Rt][Dt]=c.createFramebuffer()}else ft.__webglFramebuffer[Rt]=c.createFramebuffer()}else{if(N.mipmaps&&N.mipmaps.length>0){ft.__webglFramebuffer=[];for(let Rt=0;Rt<N.mipmaps.length;Rt++)ft.__webglFramebuffer[Rt]=c.createFramebuffer()}else ft.__webglFramebuffer=c.createFramebuffer();if(Vt)for(let Rt=0,Dt=Mt.length;Rt<Dt;Rt++){const qt=a.get(Mt[Rt]);qt.__webglTexture===void 0&&(qt.__webglTexture=c.createTexture(),u.memory.textures++)}if(G.samples>0&&xe(G)===!1){ft.__webglMultisampledFramebuffer=c.createFramebuffer(),ft.__webglColorRenderbuffer=[],n.bindFramebuffer(c.FRAMEBUFFER,ft.__webglMultisampledFramebuffer);for(let Rt=0;Rt<Mt.length;Rt++){const Dt=Mt[Rt];ft.__webglColorRenderbuffer[Rt]=c.createRenderbuffer(),c.bindRenderbuffer(c.RENDERBUFFER,ft.__webglColorRenderbuffer[Rt]);const qt=l.convert(Dt.format,Dt.colorSpace),Ct=l.convert(Dt.type),Gt=T(Dt.internalFormat,qt,Ct,Dt.colorSpace,G.isXRRenderTarget===!0),he=Yt(G);c.renderbufferStorageMultisample(c.RENDERBUFFER,he,Gt,G.width,G.height),c.framebufferRenderbuffer(c.FRAMEBUFFER,c.COLOR_ATTACHMENT0+Rt,c.RENDERBUFFER,ft.__webglColorRenderbuffer[Rt])}c.bindRenderbuffer(c.RENDERBUFFER,null),G.depthBuffer&&(ft.__webglDepthRenderbuffer=c.createRenderbuffer(),_t(ft.__webglDepthRenderbuffer,G,!0)),n.bindFramebuffer(c.FRAMEBUFFER,null)}}if(Et){n.bindTexture(c.TEXTURE_CUBE_MAP,St.__webglTexture),$(c.TEXTURE_CUBE_MAP,N);for(let Rt=0;Rt<6;Rt++)if(N.mipmaps&&N.mipmaps.length>0)for(let Dt=0;Dt<N.mipmaps.length;Dt++)dt(ft.__webglFramebuffer[Rt][Dt],G,N,c.COLOR_ATTACHMENT0,c.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Dt);else dt(ft.__webglFramebuffer[Rt],G,N,c.COLOR_ATTACHMENT0,c.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);x(N)&&y(c.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Vt){for(let Rt=0,Dt=Mt.length;Rt<Dt;Rt++){const qt=Mt[Rt],Ct=a.get(qt);n.bindTexture(c.TEXTURE_2D,Ct.__webglTexture),$(c.TEXTURE_2D,qt),dt(ft.__webglFramebuffer,G,qt,c.COLOR_ATTACHMENT0+Rt,c.TEXTURE_2D,0),x(qt)&&y(c.TEXTURE_2D)}n.unbindTexture()}else{let Rt=c.TEXTURE_2D;if((G.isWebGL3DRenderTarget||G.isWebGLArrayRenderTarget)&&(Rt=G.isWebGL3DRenderTarget?c.TEXTURE_3D:c.TEXTURE_2D_ARRAY),n.bindTexture(Rt,St.__webglTexture),$(Rt,N),N.mipmaps&&N.mipmaps.length>0)for(let Dt=0;Dt<N.mipmaps.length;Dt++)dt(ft.__webglFramebuffer[Dt],G,N,c.COLOR_ATTACHMENT0,Rt,Dt);else dt(ft.__webglFramebuffer,G,N,c.COLOR_ATTACHMENT0,Rt,0);x(N)&&y(Rt),n.unbindTexture()}G.depthBuffer&&Ft(G)}function X(G){const N=G.textures;for(let ft=0,St=N.length;ft<St;ft++){const Mt=N[ft];if(x(Mt)){const Et=G.isWebGLCubeRenderTarget?c.TEXTURE_CUBE_MAP:c.TEXTURE_2D,Vt=a.get(Mt).__webglTexture;n.bindTexture(Et,Vt),y(Et),n.unbindTexture()}}}const fe=[],ce=[];function ze(G){if(G.samples>0){if(xe(G)===!1){const N=G.textures,ft=G.width,St=G.height;let Mt=c.COLOR_BUFFER_BIT;const Et=G.stencilBuffer?c.DEPTH_STENCIL_ATTACHMENT:c.DEPTH_ATTACHMENT,Vt=a.get(G),Rt=N.length>1;if(Rt)for(let Dt=0;Dt<N.length;Dt++)n.bindFramebuffer(c.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),c.framebufferRenderbuffer(c.FRAMEBUFFER,c.COLOR_ATTACHMENT0+Dt,c.RENDERBUFFER,null),n.bindFramebuffer(c.FRAMEBUFFER,Vt.__webglFramebuffer),c.framebufferTexture2D(c.DRAW_FRAMEBUFFER,c.COLOR_ATTACHMENT0+Dt,c.TEXTURE_2D,null,0);n.bindFramebuffer(c.READ_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),n.bindFramebuffer(c.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer);for(let Dt=0;Dt<N.length;Dt++){if(G.resolveDepthBuffer&&(G.depthBuffer&&(Mt|=c.DEPTH_BUFFER_BIT),G.stencilBuffer&&G.resolveStencilBuffer&&(Mt|=c.STENCIL_BUFFER_BIT)),Rt){c.framebufferRenderbuffer(c.READ_FRAMEBUFFER,c.COLOR_ATTACHMENT0,c.RENDERBUFFER,Vt.__webglColorRenderbuffer[Dt]);const qt=a.get(N[Dt]).__webglTexture;c.framebufferTexture2D(c.DRAW_FRAMEBUFFER,c.COLOR_ATTACHMENT0,c.TEXTURE_2D,qt,0)}c.blitFramebuffer(0,0,ft,St,0,0,ft,St,Mt,c.NEAREST),d===!0&&(fe.length=0,ce.length=0,fe.push(c.COLOR_ATTACHMENT0+Dt),G.depthBuffer&&G.resolveDepthBuffer===!1&&(fe.push(Et),ce.push(Et),c.invalidateFramebuffer(c.DRAW_FRAMEBUFFER,ce)),c.invalidateFramebuffer(c.READ_FRAMEBUFFER,fe))}if(n.bindFramebuffer(c.READ_FRAMEBUFFER,null),n.bindFramebuffer(c.DRAW_FRAMEBUFFER,null),Rt)for(let Dt=0;Dt<N.length;Dt++){n.bindFramebuffer(c.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),c.framebufferRenderbuffer(c.FRAMEBUFFER,c.COLOR_ATTACHMENT0+Dt,c.RENDERBUFFER,Vt.__webglColorRenderbuffer[Dt]);const qt=a.get(N[Dt]).__webglTexture;n.bindFramebuffer(c.FRAMEBUFFER,Vt.__webglFramebuffer),c.framebufferTexture2D(c.DRAW_FRAMEBUFFER,c.COLOR_ATTACHMENT0+Dt,c.TEXTURE_2D,qt,0)}n.bindFramebuffer(c.DRAW_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer)}else if(G.depthBuffer&&G.resolveDepthBuffer===!1&&d){const N=G.stencilBuffer?c.DEPTH_STENCIL_ATTACHMENT:c.DEPTH_ATTACHMENT;c.invalidateFramebuffer(c.DRAW_FRAMEBUFFER,[N])}}}function Yt(G){return Math.min(r.maxSamples,G.samples)}function xe(G){const N=a.get(G);return G.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&N.__useRenderToTexture!==!1}function $t(G){const N=u.render.frame;g.get(G)!==N&&(g.set(G,N),G.update())}function ae(G,N){const ft=G.colorSpace,St=G.format,Mt=G.type;return G.isCompressedTexture===!0||G.isVideoTexture===!0||ft!==es&&ft!==Ya&&(Ue.getTransfer(ft)===Ve?(St!==zi||Mt!==$a)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ft)),N}function je(G){return typeof HTMLImageElement<"u"&&G instanceof HTMLImageElement?(p.width=G.naturalWidth||G.width,p.height=G.naturalHeight||G.height):typeof VideoFrame<"u"&&G instanceof VideoFrame?(p.width=G.displayWidth,p.height=G.displayHeight):(p.width=G.width,p.height=G.height),p}this.allocateTextureUnit=it,this.resetTextureUnits=F,this.setTexture2D=Q,this.setTexture2DArray=Y,this.setTexture3D=L,this.setTextureCube=Z,this.rebindTextures=Jt,this.setupRenderTarget=pe,this.updateRenderTargetMipmap=X,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=Ft,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=xe}function y1(c,t){function n(a,r=Ya){let l;const u=Ue.getTransfer(r);if(a===$a)return c.UNSIGNED_BYTE;if(a===r_)return c.UNSIGNED_SHORT_4_4_4_4;if(a===o_)return c.UNSIGNED_SHORT_5_5_5_1;if(a===nM)return c.UNSIGNED_INT_5_9_9_9_REV;if(a===tM)return c.BYTE;if(a===eM)return c.SHORT;if(a===Xc)return c.UNSIGNED_SHORT;if(a===s_)return c.INT;if(a===Fr)return c.UNSIGNED_INT;if(a===Za)return c.FLOAT;if(a===iu)return c.HALF_FLOAT;if(a===iM)return c.ALPHA;if(a===aM)return c.RGB;if(a===zi)return c.RGBA;if(a===sM)return c.LUMINANCE;if(a===rM)return c.LUMINANCE_ALPHA;if(a===Pr)return c.DEPTH_COMPONENT;if(a===Gr)return c.DEPTH_STENCIL;if(a===oM)return c.RED;if(a===l_)return c.RED_INTEGER;if(a===lM)return c.RG;if(a===c_)return c.RG_INTEGER;if(a===u_)return c.RGBA_INTEGER;if(a===Sh||a===Mh||a===Eh||a===bh)if(u===Ve)if(l=t.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(a===Sh)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Mh)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Eh)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===bh)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=t.get("WEBGL_compressed_texture_s3tc"),l!==null){if(a===Sh)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Mh)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Eh)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===bh)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===gv||a===vv||a===_v||a===xv)if(l=t.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(a===gv)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===vv)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===_v)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===xv)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===yv||a===Sv||a===Mv)if(l=t.get("WEBGL_compressed_texture_etc"),l!==null){if(a===yv||a===Sv)return u===Ve?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(a===Mv)return u===Ve?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Ev||a===bv||a===Tv||a===Av||a===wv||a===Rv||a===Cv||a===Dv||a===Nv||a===Uv||a===Lv||a===Ov||a===Pv||a===zv)if(l=t.get("WEBGL_compressed_texture_astc"),l!==null){if(a===Ev)return u===Ve?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===bv)return u===Ve?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Tv)return u===Ve?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Av)return u===Ve?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===wv)return u===Ve?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Rv)return u===Ve?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Cv)return u===Ve?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Dv)return u===Ve?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Nv)return u===Ve?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Uv)return u===Ve?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Lv)return u===Ve?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Ov)return u===Ve?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Pv)return u===Ve?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===zv)return u===Ve?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Th||a===Bv||a===Iv)if(l=t.get("EXT_texture_compression_bptc"),l!==null){if(a===Th)return u===Ve?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Bv)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Iv)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===cM||a===Fv||a===Hv||a===Gv)if(l=t.get("EXT_texture_compression_rgtc"),l!==null){if(a===Th)return l.COMPRESSED_RED_RGTC1_EXT;if(a===Fv)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Hv)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Gv)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Hr?c.UNSIGNED_INT_24_8:c[a]!==void 0?c[a]:null}return{convert:n}}class S1 extends fi{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ic extends Nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const M1={type:"move"};class Jh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ic,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ic,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ut,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ut),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ic,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ut,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ut),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const a of t.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,a){let r=null,l=null,u=null;const h=this._targetRay,d=this._grip,p=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(p&&t.hand){u=!0;for(const E of t.hand.values()){const x=n.getJointPose(E,a),y=this._getHandJoint(p,E);x!==null&&(y.matrix.fromArray(x.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=x.radius),y.visible=x!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],v=g.position.distanceTo(_.position),S=.02,M=.005;p.inputState.pinching&&v>S+M?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&v<=S-M&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else d!==null&&t.gripSpace&&(l=n.getPose(t.gripSpace,a),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1));h!==null&&(r=n.getPose(t.targetRaySpace,a),r===null&&l!==null&&(r=l),r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,r.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(r.linearVelocity)):h.hasLinearVelocity=!1,r.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(r.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(M1)))}return h!==null&&(h.visible=r!==null),d!==null&&(d.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const a=new Ic;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[n.jointName]=a,t.add(a)}return t.joints[n.jointName]}}const E1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,b1=`
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

}`;class T1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n,a){if(this.texture===null){const r=new kn,l=t.properties.get(r);l.__webglTexture=n.texture,(n.depthNear!=a.depthNear||n.depthFar!=a.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,a=new ts({vertexShader:E1,fragmentShader:b1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new di(new su(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class A1 extends kr{constructor(t,n){super();const a=this;let r=null,l=1,u=null,h="local-floor",d=1,p=null,g=null,_=null,v=null,S=null,M=null;const E=new T1,x=n.getContextAttributes();let y=null,T=null;const A=[],D=[],I=new Me;let P=null;const z=new fi;z.layers.enable(1),z.viewport=new _n;const k=new fi;k.layers.enable(2),k.viewport=new _n;const U=[z,k],w=new S1;w.layers.enable(1),w.layers.enable(2);let F=null,it=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let dt=A[tt];return dt===void 0&&(dt=new Jh,A[tt]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(tt){let dt=A[tt];return dt===void 0&&(dt=new Jh,A[tt]=dt),dt.getGripSpace()},this.getHand=function(tt){let dt=A[tt];return dt===void 0&&(dt=new Jh,A[tt]=dt),dt.getHandSpace()};function V(tt){const dt=D.indexOf(tt.inputSource);if(dt===-1)return;const _t=A[dt];_t!==void 0&&(_t.update(tt.inputSource,tt.frame,p||u),_t.dispatchEvent({type:tt.type,data:tt.inputSource}))}function Q(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",Q),r.removeEventListener("inputsourceschange",Y);for(let tt=0;tt<A.length;tt++){const dt=D[tt];dt!==null&&(D[tt]=null,A[tt].disconnect(dt))}F=null,it=null,E.reset(),t.setRenderTarget(y),S=null,v=null,_=null,r=null,T=null,yt.stop(),a.isPresenting=!1,t.setPixelRatio(P),t.setSize(I.width,I.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){l=tt,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){h=tt,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(tt){p=tt},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return _},this.getFrame=function(){return M},this.getSession=function(){return r},this.setSession=async function(tt){if(r=tt,r!==null){if(y=t.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",Q),r.addEventListener("inputsourceschange",Y),x.xrCompatible!==!0&&await n.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(I),r.renderState.layers===void 0){const dt={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(r,n,dt),r.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),T=new Ls(S.framebufferWidth,S.framebufferHeight,{format:zi,type:$a,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let dt=null,_t=null,At=null;x.depth&&(At=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,dt=x.stencil?Gr:Pr,_t=x.stencil?Hr:Fr);const Ft={colorFormat:n.RGBA8,depthFormat:At,scaleFactor:l};_=new XRWebGLBinding(r,n),v=_.createProjectionLayer(Ft),r.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),T=new Ls(v.textureWidth,v.textureHeight,{format:zi,type:$a,depthTexture:new w_(v.textureWidth,v.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,dt),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(d),p=null,u=await r.requestReferenceSpace(h),yt.setContext(r),yt.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function Y(tt){for(let dt=0;dt<tt.removed.length;dt++){const _t=tt.removed[dt],At=D.indexOf(_t);At>=0&&(D[At]=null,A[At].disconnect(_t))}for(let dt=0;dt<tt.added.length;dt++){const _t=tt.added[dt];let At=D.indexOf(_t);if(At===-1){for(let Jt=0;Jt<A.length;Jt++)if(Jt>=D.length){D.push(_t),At=Jt;break}else if(D[Jt]===null){D[Jt]=_t,At=Jt;break}if(At===-1)break}const Ft=A[At];Ft&&Ft.connect(_t)}}const L=new ut,Z=new ut;function W(tt,dt,_t){L.setFromMatrixPosition(dt.matrixWorld),Z.setFromMatrixPosition(_t.matrixWorld);const At=L.distanceTo(Z),Ft=dt.projectionMatrix.elements,Jt=_t.projectionMatrix.elements,pe=Ft[14]/(Ft[10]-1),X=Ft[14]/(Ft[10]+1),fe=(Ft[9]+1)/Ft[5],ce=(Ft[9]-1)/Ft[5],ze=(Ft[8]-1)/Ft[0],Yt=(Jt[8]+1)/Jt[0],xe=pe*ze,$t=pe*Yt,ae=At/(-ze+Yt),je=ae*-ze;dt.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(je),tt.translateZ(ae),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert();const G=pe+ae,N=X+ae,ft=xe-je,St=$t+(At-je),Mt=fe*X/N*G,Et=ce*X/N*G;tt.projectionMatrix.makePerspective(ft,St,Mt,Et,G,N),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}function ht(tt,dt){dt===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(dt.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(r===null)return;E.texture!==null&&(tt.near=E.depthNear,tt.far=E.depthFar),w.near=k.near=z.near=tt.near,w.far=k.far=z.far=tt.far,(F!==w.near||it!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),F=w.near,it=w.far,z.near=F,z.far=it,k.near=F,k.far=it,z.updateProjectionMatrix(),k.updateProjectionMatrix(),tt.updateProjectionMatrix());const dt=tt.parent,_t=w.cameras;ht(w,dt);for(let At=0;At<_t.length;At++)ht(_t[At],dt);_t.length===2?W(w,z,k):w.projectionMatrix.copy(z.projectionMatrix),B(tt,w,dt)};function B(tt,dt,_t){_t===null?tt.matrix.copy(dt.matrixWorld):(tt.matrix.copy(_t.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(dt.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(dt.projectionMatrix),tt.projectionMatrixInverse.copy(dt.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=dd*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(v===null&&S===null))return d},this.setFoveation=function(tt){d=tt,v!==null&&(v.fixedFoveation=tt),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=tt)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(w)};let $=null;function ot(tt,dt){if(g=dt.getViewerPose(p||u),M=dt,g!==null){const _t=g.views;S!==null&&(t.setRenderTargetFramebuffer(T,S.framebuffer),t.setRenderTarget(T));let At=!1;_t.length!==w.cameras.length&&(w.cameras.length=0,At=!0);for(let Jt=0;Jt<_t.length;Jt++){const pe=_t[Jt];let X=null;if(S!==null)X=S.getViewport(pe);else{const ce=_.getViewSubImage(v,pe);X=ce.viewport,Jt===0&&(t.setRenderTargetTextures(T,ce.colorTexture,v.ignoreDepthValues?void 0:ce.depthStencilTexture),t.setRenderTarget(T))}let fe=U[Jt];fe===void 0&&(fe=new fi,fe.layers.enable(Jt),fe.viewport=new _n,U[Jt]=fe),fe.matrix.fromArray(pe.transform.matrix),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.projectionMatrix.fromArray(pe.projectionMatrix),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert(),fe.viewport.set(X.x,X.y,X.width,X.height),Jt===0&&(w.matrix.copy(fe.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),At===!0&&w.cameras.push(fe)}const Ft=r.enabledFeatures;if(Ft&&Ft.includes("depth-sensing")){const Jt=_.getDepthInformation(_t[0]);Jt&&Jt.isValid&&Jt.texture&&E.init(t,Jt,r.renderState)}}for(let _t=0;_t<A.length;_t++){const At=D[_t],Ft=A[_t];At!==null&&Ft!==void 0&&Ft.update(At,dt,p||u)}$&&$(tt,dt),dt.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:dt}),M=null}const yt=new T_;yt.setAnimationLoop(ot),this.setAnimationLoop=function(tt){$=tt},this.dispose=function(){}}}const bs=new Fi,w1=new $e;function R1(c,t){function n(x,y){x.matrixAutoUpdate===!0&&x.updateMatrix(),y.value.copy(x.matrix)}function a(x,y){y.color.getRGB(x.fogColor.value,M_(c)),y.isFog?(x.fogNear.value=y.near,x.fogFar.value=y.far):y.isFogExp2&&(x.fogDensity.value=y.density)}function r(x,y,T,A,D){y.isMeshBasicMaterial||y.isMeshLambertMaterial?l(x,y):y.isMeshToonMaterial?(l(x,y),_(x,y)):y.isMeshPhongMaterial?(l(x,y),g(x,y)):y.isMeshStandardMaterial?(l(x,y),v(x,y),y.isMeshPhysicalMaterial&&S(x,y,D)):y.isMeshMatcapMaterial?(l(x,y),M(x,y)):y.isMeshDepthMaterial?l(x,y):y.isMeshDistanceMaterial?(l(x,y),E(x,y)):y.isMeshNormalMaterial?l(x,y):y.isLineBasicMaterial?(u(x,y),y.isLineDashedMaterial&&h(x,y)):y.isPointsMaterial?d(x,y,T,A):y.isSpriteMaterial?p(x,y):y.isShadowMaterial?(x.color.value.copy(y.color),x.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(x,y){x.opacity.value=y.opacity,y.color&&x.diffuse.value.copy(y.color),y.emissive&&x.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(x.map.value=y.map,n(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,n(y.alphaMap,x.alphaMapTransform)),y.bumpMap&&(x.bumpMap.value=y.bumpMap,n(y.bumpMap,x.bumpMapTransform),x.bumpScale.value=y.bumpScale,y.side===Vn&&(x.bumpScale.value*=-1)),y.normalMap&&(x.normalMap.value=y.normalMap,n(y.normalMap,x.normalMapTransform),x.normalScale.value.copy(y.normalScale),y.side===Vn&&x.normalScale.value.negate()),y.displacementMap&&(x.displacementMap.value=y.displacementMap,n(y.displacementMap,x.displacementMapTransform),x.displacementScale.value=y.displacementScale,x.displacementBias.value=y.displacementBias),y.emissiveMap&&(x.emissiveMap.value=y.emissiveMap,n(y.emissiveMap,x.emissiveMapTransform)),y.specularMap&&(x.specularMap.value=y.specularMap,n(y.specularMap,x.specularMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest);const T=t.get(y),A=T.envMap,D=T.envMapRotation;A&&(x.envMap.value=A,bs.copy(D),bs.x*=-1,bs.y*=-1,bs.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(bs.y*=-1,bs.z*=-1),x.envMapRotation.value.setFromMatrix4(w1.makeRotationFromEuler(bs)),x.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=y.reflectivity,x.ior.value=y.ior,x.refractionRatio.value=y.refractionRatio),y.lightMap&&(x.lightMap.value=y.lightMap,x.lightMapIntensity.value=y.lightMapIntensity,n(y.lightMap,x.lightMapTransform)),y.aoMap&&(x.aoMap.value=y.aoMap,x.aoMapIntensity.value=y.aoMapIntensity,n(y.aoMap,x.aoMapTransform))}function u(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,y.map&&(x.map.value=y.map,n(y.map,x.mapTransform))}function h(x,y){x.dashSize.value=y.dashSize,x.totalSize.value=y.dashSize+y.gapSize,x.scale.value=y.scale}function d(x,y,T,A){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.size.value=y.size*T,x.scale.value=A*.5,y.map&&(x.map.value=y.map,n(y.map,x.uvTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,n(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function p(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.rotation.value=y.rotation,y.map&&(x.map.value=y.map,n(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,n(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function g(x,y){x.specular.value.copy(y.specular),x.shininess.value=Math.max(y.shininess,1e-4)}function _(x,y){y.gradientMap&&(x.gradientMap.value=y.gradientMap)}function v(x,y){x.metalness.value=y.metalness,y.metalnessMap&&(x.metalnessMap.value=y.metalnessMap,n(y.metalnessMap,x.metalnessMapTransform)),x.roughness.value=y.roughness,y.roughnessMap&&(x.roughnessMap.value=y.roughnessMap,n(y.roughnessMap,x.roughnessMapTransform)),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)}function S(x,y,T){x.ior.value=y.ior,y.sheen>0&&(x.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),x.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(x.sheenColorMap.value=y.sheenColorMap,n(y.sheenColorMap,x.sheenColorMapTransform)),y.sheenRoughnessMap&&(x.sheenRoughnessMap.value=y.sheenRoughnessMap,n(y.sheenRoughnessMap,x.sheenRoughnessMapTransform))),y.clearcoat>0&&(x.clearcoat.value=y.clearcoat,x.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(x.clearcoatMap.value=y.clearcoatMap,n(y.clearcoatMap,x.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,n(y.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(x.clearcoatNormalMap.value=y.clearcoatNormalMap,n(y.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Vn&&x.clearcoatNormalScale.value.negate())),y.dispersion>0&&(x.dispersion.value=y.dispersion),y.iridescence>0&&(x.iridescence.value=y.iridescence,x.iridescenceIOR.value=y.iridescenceIOR,x.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(x.iridescenceMap.value=y.iridescenceMap,n(y.iridescenceMap,x.iridescenceMapTransform)),y.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=y.iridescenceThicknessMap,n(y.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),y.transmission>0&&(x.transmission.value=y.transmission,x.transmissionSamplerMap.value=T.texture,x.transmissionSamplerSize.value.set(T.width,T.height),y.transmissionMap&&(x.transmissionMap.value=y.transmissionMap,n(y.transmissionMap,x.transmissionMapTransform)),x.thickness.value=y.thickness,y.thicknessMap&&(x.thicknessMap.value=y.thicknessMap,n(y.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=y.attenuationDistance,x.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(x.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(x.anisotropyMap.value=y.anisotropyMap,n(y.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=y.specularIntensity,x.specularColor.value.copy(y.specularColor),y.specularColorMap&&(x.specularColorMap.value=y.specularColorMap,n(y.specularColorMap,x.specularColorMapTransform)),y.specularIntensityMap&&(x.specularIntensityMap.value=y.specularIntensityMap,n(y.specularIntensityMap,x.specularIntensityMapTransform))}function M(x,y){y.matcap&&(x.matcap.value=y.matcap)}function E(x,y){const T=t.get(y).light;x.referencePosition.value.setFromMatrixPosition(T.matrixWorld),x.nearDistance.value=T.shadow.camera.near,x.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:r}}function C1(c,t,n,a){let r={},l={},u=[];const h=c.getParameter(c.MAX_UNIFORM_BUFFER_BINDINGS);function d(T,A){const D=A.program;a.uniformBlockBinding(T,D)}function p(T,A){let D=r[T.id];D===void 0&&(M(T),D=g(T),r[T.id]=D,T.addEventListener("dispose",x));const I=A.program;a.updateUBOMapping(T,I);const P=t.render.frame;l[T.id]!==P&&(v(T),l[T.id]=P)}function g(T){const A=_();T.__bindingPointIndex=A;const D=c.createBuffer(),I=T.__size,P=T.usage;return c.bindBuffer(c.UNIFORM_BUFFER,D),c.bufferData(c.UNIFORM_BUFFER,I,P),c.bindBuffer(c.UNIFORM_BUFFER,null),c.bindBufferBase(c.UNIFORM_BUFFER,A,D),D}function _(){for(let T=0;T<h;T++)if(u.indexOf(T)===-1)return u.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(T){const A=r[T.id],D=T.uniforms,I=T.__cache;c.bindBuffer(c.UNIFORM_BUFFER,A);for(let P=0,z=D.length;P<z;P++){const k=Array.isArray(D[P])?D[P]:[D[P]];for(let U=0,w=k.length;U<w;U++){const F=k[U];if(S(F,P,U,I)===!0){const it=F.__offset,V=Array.isArray(F.value)?F.value:[F.value];let Q=0;for(let Y=0;Y<V.length;Y++){const L=V[Y],Z=E(L);typeof L=="number"||typeof L=="boolean"?(F.__data[0]=L,c.bufferSubData(c.UNIFORM_BUFFER,it+Q,F.__data)):L.isMatrix3?(F.__data[0]=L.elements[0],F.__data[1]=L.elements[1],F.__data[2]=L.elements[2],F.__data[3]=0,F.__data[4]=L.elements[3],F.__data[5]=L.elements[4],F.__data[6]=L.elements[5],F.__data[7]=0,F.__data[8]=L.elements[6],F.__data[9]=L.elements[7],F.__data[10]=L.elements[8],F.__data[11]=0):(L.toArray(F.__data,Q),Q+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}c.bufferSubData(c.UNIFORM_BUFFER,it,F.__data)}}}c.bindBuffer(c.UNIFORM_BUFFER,null)}function S(T,A,D,I){const P=T.value,z=A+"_"+D;if(I[z]===void 0)return typeof P=="number"||typeof P=="boolean"?I[z]=P:I[z]=P.clone(),!0;{const k=I[z];if(typeof P=="number"||typeof P=="boolean"){if(k!==P)return I[z]=P,!0}else if(k.equals(P)===!1)return k.copy(P),!0}return!1}function M(T){const A=T.uniforms;let D=0;const I=16;for(let z=0,k=A.length;z<k;z++){const U=Array.isArray(A[z])?A[z]:[A[z]];for(let w=0,F=U.length;w<F;w++){const it=U[w],V=Array.isArray(it.value)?it.value:[it.value];for(let Q=0,Y=V.length;Q<Y;Q++){const L=V[Q],Z=E(L),W=D%I;W!==0&&I-W<Z.boundary&&(D+=I-W),it.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),it.__offset=D,D+=Z.storage}}}const P=D%I;return P>0&&(D+=I-P),T.__size=D,T.__cache={},this}function E(T){const A={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(A.boundary=4,A.storage=4):T.isVector2?(A.boundary=8,A.storage=8):T.isVector3||T.isColor?(A.boundary=16,A.storage=12):T.isVector4?(A.boundary=16,A.storage=16):T.isMatrix3?(A.boundary=48,A.storage=48):T.isMatrix4?(A.boundary=64,A.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),A}function x(T){const A=T.target;A.removeEventListener("dispose",x);const D=u.indexOf(A.__bindingPointIndex);u.splice(D,1),c.deleteBuffer(r[A.id]),delete r[A.id],delete l[A.id]}function y(){for(const T in r)c.deleteBuffer(r[T]);u=[],r={},l={}}return{bind:d,update:p,dispose:y}}class D1{constructor(t={}){const{canvas:n=SM(),context:a=null,depth:r=!0,stencil:l=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1}=t;this.isWebGLRenderer=!0;let v;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=a.getContextAttributes().alpha}else v=u;const S=new Uint32Array(4),M=new Int32Array(4);let E=null,x=null;const y=[],T=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Li,this.toneMapping=Qa,this.toneMappingExposure=1;const A=this;let D=!1,I=0,P=0,z=null,k=-1,U=null;const w=new _n,F=new _n;let it=null;const V=new Ae(0);let Q=0,Y=n.width,L=n.height,Z=1,W=null,ht=null;const B=new _n(0,0,Y,L),$=new _n(0,0,Y,L);let ot=!1;const yt=new yd;let tt=!1,dt=!1;const _t=new $e,At=new ut,Ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Jt=!1;function pe(){return z===null?Z:1}let X=a;function fe(O,K){return n.getContext(O,K)}try{const O={alpha:!0,depth:r,stencil:l,antialias:h,premultipliedAlpha:d,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${vd}`),n.addEventListener("webglcontextlost",Ot,!1),n.addEventListener("webglcontextrestored",mt,!1),n.addEventListener("webglcontextcreationerror",xt,!1),X===null){const K="webgl2";if(X=fe(K,O),X===null)throw fe(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(O){throw console.error("THREE.WebGLRenderer: "+O.message),O}let ce,ze,Yt,xe,$t,ae,je,G,N,ft,St,Mt,Et,Vt,Rt,Dt,qt,Ct,Gt,he,Zt,Nt,ne,re;function Be(){ce=new IT(X),ce.init(),Nt=new y1(X,ce),ze=new UT(X,ce,t,Nt),Yt=new _1(X),xe=new GT(X),$t=new a1,ae=new x1(X,ce,Yt,$t,ze,Nt,xe),je=new OT(A),G=new BT(A),N=new YM(X),ne=new DT(X,N),ft=new FT(X,N,xe,ne),St=new kT(X,ft,N,xe),Gt=new VT(X,ze,ae),Dt=new LT($t),Mt=new i1(A,je,G,ce,ze,ne,Dt),Et=new R1(A,$t),Vt=new r1,Rt=new h1(ce),Ct=new CT(A,je,G,Yt,St,v,d),qt=new v1(A,St,ze),re=new C1(X,xe,ze,Yt),he=new NT(X,ce,xe),Zt=new HT(X,ce,xe),xe.programs=Mt.programs,A.capabilities=ze,A.extensions=ce,A.properties=$t,A.renderLists=Vt,A.shadowMap=qt,A.state=Yt,A.info=xe}Be();const q=new A1(A,X);this.xr=q,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const O=ce.get("WEBGL_lose_context");O&&O.loseContext()},this.forceContextRestore=function(){const O=ce.get("WEBGL_lose_context");O&&O.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(O){O!==void 0&&(Z=O,this.setSize(Y,L,!1))},this.getSize=function(O){return O.set(Y,L)},this.setSize=function(O,K,et=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=O,L=K,n.width=Math.floor(O*Z),n.height=Math.floor(K*Z),et===!0&&(n.style.width=O+"px",n.style.height=K+"px"),this.setViewport(0,0,O,K)},this.getDrawingBufferSize=function(O){return O.set(Y*Z,L*Z).floor()},this.setDrawingBufferSize=function(O,K,et){Y=O,L=K,Z=et,n.width=Math.floor(O*et),n.height=Math.floor(K*et),this.setViewport(0,0,O,K)},this.getCurrentViewport=function(O){return O.copy(w)},this.getViewport=function(O){return O.copy(B)},this.setViewport=function(O,K,et,ct){O.isVector4?B.set(O.x,O.y,O.z,O.w):B.set(O,K,et,ct),Yt.viewport(w.copy(B).multiplyScalar(Z).round())},this.getScissor=function(O){return O.copy($)},this.setScissor=function(O,K,et,ct){O.isVector4?$.set(O.x,O.y,O.z,O.w):$.set(O,K,et,ct),Yt.scissor(F.copy($).multiplyScalar(Z).round())},this.getScissorTest=function(){return ot},this.setScissorTest=function(O){Yt.setScissorTest(ot=O)},this.setOpaqueSort=function(O){W=O},this.setTransparentSort=function(O){ht=O},this.getClearColor=function(O){return O.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor.apply(Ct,arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha.apply(Ct,arguments)},this.clear=function(O=!0,K=!0,et=!0){let ct=0;if(O){let nt=!1;if(z!==null){const bt=z.texture.format;nt=bt===u_||bt===c_||bt===l_}if(nt){const bt=z.texture.type,Ut=bt===$a||bt===Fr||bt===Xc||bt===Hr||bt===r_||bt===o_,Bt=Ct.getClearColor(),Ht=Ct.getClearAlpha(),Kt=Bt.r,te=Bt.g,jt=Bt.b;Ut?(S[0]=Kt,S[1]=te,S[2]=jt,S[3]=Ht,X.clearBufferuiv(X.COLOR,0,S)):(M[0]=Kt,M[1]=te,M[2]=jt,M[3]=Ht,X.clearBufferiv(X.COLOR,0,M))}else ct|=X.COLOR_BUFFER_BIT}K&&(ct|=X.DEPTH_BUFFER_BIT),et&&(ct|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(ct)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Ot,!1),n.removeEventListener("webglcontextrestored",mt,!1),n.removeEventListener("webglcontextcreationerror",xt,!1),Vt.dispose(),Rt.dispose(),$t.dispose(),je.dispose(),G.dispose(),St.dispose(),ne.dispose(),re.dispose(),Mt.dispose(),q.dispose(),q.removeEventListener("sessionstart",Wn),q.removeEventListener("sessionend",ei),bn.stop()};function Ot(O){O.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function mt(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const O=xe.autoReset,K=qt.enabled,et=qt.autoUpdate,ct=qt.needsUpdate,nt=qt.type;Be(),xe.autoReset=O,qt.enabled=K,qt.autoUpdate=et,qt.needsUpdate=ct,qt.type=nt}function xt(O){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",O.statusMessage)}function wt(O){const K=O.target;K.removeEventListener("dispose",wt),ie(K)}function ie(O){ye(O),$t.remove(O)}function ye(O){const K=$t.get(O).programs;K!==void 0&&(K.forEach(function(et){Mt.releaseProgram(et)}),O.isShaderMaterial&&Mt.releaseShaderCache(O))}this.renderBufferDirect=function(O,K,et,ct,nt,bt){K===null&&(K=Ft);const Ut=nt.isMesh&&nt.matrixWorld.determinant()<0,Bt=Xr(O,K,et,ct,nt);Yt.setMaterial(ct,Ut);let Ht=et.index,Kt=1;if(ct.wireframe===!0){if(Ht=ft.getWireframeAttribute(et),Ht===void 0)return;Kt=2}const te=et.drawRange,jt=et.attributes.position;let _e=te.start*Kt,be=(te.start+te.count)*Kt;bt!==null&&(_e=Math.max(_e,bt.start*Kt),be=Math.min(be,(bt.start+bt.count)*Kt)),Ht!==null?(_e=Math.max(_e,0),be=Math.min(be,Ht.count)):jt!=null&&(_e=Math.max(_e,0),be=Math.min(be,jt.count));const Fe=be-_e;if(Fe<0||Fe===1/0)return;ne.setup(nt,ct,Bt,et,Ht);let Tn,ve=he;if(Ht!==null&&(Tn=N.get(Ht),ve=Zt,ve.setIndex(Tn)),nt.isMesh)ct.wireframe===!0?(Yt.setLineWidth(ct.wireframeLinewidth*pe()),ve.setMode(X.LINES)):ve.setMode(X.TRIANGLES);else if(nt.isLine){let kt=ct.linewidth;kt===void 0&&(kt=1),Yt.setLineWidth(kt*pe()),nt.isLineSegments?ve.setMode(X.LINES):nt.isLineLoop?ve.setMode(X.LINE_LOOP):ve.setMode(X.LINE_STRIP)}else nt.isPoints?ve.setMode(X.POINTS):nt.isSprite&&ve.setMode(X.TRIANGLES);if(nt.isBatchedMesh)nt._multiDrawInstances!==null?ve.renderMultiDrawInstances(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount,nt._multiDrawInstances):ve.renderMultiDraw(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount);else if(nt.isInstancedMesh)ve.renderInstances(_e,Fe,nt.count);else if(et.isInstancedBufferGeometry){const kt=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,on=Math.min(et.instanceCount,kt);ve.renderInstances(_e,Fe,on)}else ve.render(_e,Fe)};function ke(O,K,et){O.transparent===!0&&O.side===ha&&O.forceSinglePass===!1?(O.side=Vn,O.needsUpdate=!0,Os(O,K,et),O.side=Ja,O.needsUpdate=!0,Os(O,K,et),O.side=ha):Os(O,K,et)}this.compile=function(O,K,et=null){et===null&&(et=O),x=Rt.get(et),x.init(K),T.push(x),et.traverseVisible(function(nt){nt.isLight&&nt.layers.test(K.layers)&&(x.pushLight(nt),nt.castShadow&&x.pushShadow(nt))}),O!==et&&O.traverseVisible(function(nt){nt.isLight&&nt.layers.test(K.layers)&&(x.pushLight(nt),nt.castShadow&&x.pushShadow(nt))}),x.setupLights();const ct=new Set;return O.traverse(function(nt){const bt=nt.material;if(bt)if(Array.isArray(bt))for(let Ut=0;Ut<bt.length;Ut++){const Bt=bt[Ut];ke(Bt,et,nt),ct.add(Bt)}else ke(bt,et,nt),ct.add(bt)}),T.pop(),x=null,ct},this.compileAsync=function(O,K,et=null){const ct=this.compile(O,K,et);return new Promise(nt=>{function bt(){if(ct.forEach(function(Ut){$t.get(Ut).currentProgram.isReady()&&ct.delete(Ut)}),ct.size===0){nt(O);return}setTimeout(bt,10)}ce.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let Ye=null;function Ee(O){Ye&&Ye(O)}function Wn(){bn.stop()}function ei(){bn.start()}const bn=new T_;bn.setAnimationLoop(Ee),typeof self<"u"&&bn.setContext(self),this.setAnimationLoop=function(O){Ye=O,q.setAnimationLoop(O),O===null?bn.stop():bn.start()},q.addEventListener("sessionstart",Wn),q.addEventListener("sessionend",ei),this.render=function(O,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(K),K=q.getCamera()),O.isScene===!0&&O.onBeforeRender(A,O,K,z),x=Rt.get(O,T.length),x.init(K),T.push(x),_t.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),yt.setFromProjectionMatrix(_t),dt=this.localClippingEnabled,tt=Dt.init(this.clippingPlanes,dt),E=Vt.get(O,y.length),E.init(),y.push(E),q.enabled===!0&&q.isPresenting===!0){const bt=A.xr.getDepthSensingMesh();bt!==null&&tn(bt,K,-1/0,A.sortObjects)}tn(O,K,0,A.sortObjects),E.finish(),A.sortObjects===!0&&E.sort(W,ht),Jt=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Jt&&Ct.addToRenderList(E,O),this.info.render.frame++,tt===!0&&Dt.beginShadows();const et=x.state.shadowsArray;qt.render(et,O,K),tt===!0&&Dt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ct=E.opaque,nt=E.transmissive;if(x.setupLights(),K.isArrayCamera){const bt=K.cameras;if(nt.length>0)for(let Ut=0,Bt=bt.length;Ut<Bt;Ut++){const Ht=bt[Ut];Hi(ct,nt,O,Ht)}Jt&&Ct.render(O);for(let Ut=0,Bt=bt.length;Ut<Bt;Ut++){const Ht=bt[Ut];xn(E,O,Ht,Ht.viewport)}}else nt.length>0&&Hi(ct,nt,O,K),Jt&&Ct.render(O),xn(E,O,K);z!==null&&(ae.updateMultisampleRenderTarget(z),ae.updateRenderTargetMipmap(z)),O.isScene===!0&&O.onAfterRender(A,O,K),ne.resetDefaultState(),k=-1,U=null,T.pop(),T.length>0?(x=T[T.length-1],tt===!0&&Dt.setGlobalState(A.clippingPlanes,x.state.camera)):x=null,y.pop(),y.length>0?E=y[y.length-1]:E=null};function tn(O,K,et,ct){if(O.visible===!1)return;if(O.layers.test(K.layers)){if(O.isGroup)et=O.renderOrder;else if(O.isLOD)O.autoUpdate===!0&&O.update(K);else if(O.isLight)x.pushLight(O),O.castShadow&&x.pushShadow(O);else if(O.isSprite){if(!O.frustumCulled||yt.intersectsSprite(O)){ct&&At.setFromMatrixPosition(O.matrixWorld).applyMatrix4(_t);const Ut=St.update(O),Bt=O.material;Bt.visible&&E.push(O,Ut,Bt,et,At.z,null)}}else if((O.isMesh||O.isLine||O.isPoints)&&(!O.frustumCulled||yt.intersectsObject(O))){const Ut=St.update(O),Bt=O.material;if(ct&&(O.boundingSphere!==void 0?(O.boundingSphere===null&&O.computeBoundingSphere(),At.copy(O.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),At.copy(Ut.boundingSphere.center)),At.applyMatrix4(O.matrixWorld).applyMatrix4(_t)),Array.isArray(Bt)){const Ht=Ut.groups;for(let Kt=0,te=Ht.length;Kt<te;Kt++){const jt=Ht[Kt],_e=Bt[jt.materialIndex];_e&&_e.visible&&E.push(O,Ut,_e,et,At.z,jt)}}else Bt.visible&&E.push(O,Ut,Bt,et,At.z,null)}}const bt=O.children;for(let Ut=0,Bt=bt.length;Ut<Bt;Ut++)tn(bt[Ut],K,et,ct)}function xn(O,K,et,ct){const nt=O.opaque,bt=O.transmissive,Ut=O.transparent;x.setupLightsView(et),tt===!0&&Dt.setGlobalState(A.clippingPlanes,et),ct&&Yt.viewport(w.copy(ct)),nt.length>0&&pa(nt,K,et),bt.length>0&&pa(bt,K,et),Ut.length>0&&pa(Ut,K,et),Yt.buffers.depth.setTest(!0),Yt.buffers.depth.setMask(!0),Yt.buffers.color.setMask(!0),Yt.setPolygonOffset(!1)}function Hi(O,K,et,ct){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[ct.id]===void 0&&(x.state.transmissionRenderTarget[ct.id]=new Ls(1,1,{generateMipmaps:!0,type:ce.has("EXT_color_buffer_half_float")||ce.has("EXT_color_buffer_float")?iu:$a,minFilter:Us,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ue.workingColorSpace}));const bt=x.state.transmissionRenderTarget[ct.id],Ut=ct.viewport||w;bt.setSize(Ut.z,Ut.w);const Bt=A.getRenderTarget();A.setRenderTarget(bt),A.getClearColor(V),Q=A.getClearAlpha(),Q<1&&A.setClearColor(16777215,.5),Jt?Ct.render(et):A.clear();const Ht=A.toneMapping;A.toneMapping=Qa;const Kt=ct.viewport;if(ct.viewport!==void 0&&(ct.viewport=void 0),x.setupLightsView(ct),tt===!0&&Dt.setGlobalState(A.clippingPlanes,ct),pa(O,et,ct),ae.updateMultisampleRenderTarget(bt),ae.updateRenderTargetMipmap(bt),ce.has("WEBGL_multisampled_render_to_texture")===!1){let te=!1;for(let jt=0,_e=K.length;jt<_e;jt++){const be=K[jt],Fe=be.object,Tn=be.geometry,ve=be.material,kt=be.group;if(ve.side===ha&&Fe.layers.test(ct.layers)){const on=ve.side;ve.side=Vn,ve.needsUpdate=!0,ll(Fe,et,ct,Tn,ve,kt),ve.side=on,ve.needsUpdate=!0,te=!0}}te===!0&&(ae.updateMultisampleRenderTarget(bt),ae.updateRenderTargetMipmap(bt))}A.setRenderTarget(Bt),A.setClearColor(V,Q),Kt!==void 0&&(ct.viewport=Kt),A.toneMapping=Ht}function pa(O,K,et){const ct=K.isScene===!0?K.overrideMaterial:null;for(let nt=0,bt=O.length;nt<bt;nt++){const Ut=O[nt],Bt=Ut.object,Ht=Ut.geometry,Kt=ct===null?Ut.material:ct,te=Ut.group;Bt.layers.test(et.layers)&&ll(Bt,K,et,Ht,Kt,te)}}function ll(O,K,et,ct,nt,bt){O.onBeforeRender(A,K,et,ct,nt,bt),O.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,O.matrixWorld),O.normalMatrix.getNormalMatrix(O.modelViewMatrix),nt.onBeforeRender(A,K,et,ct,O,bt),nt.transparent===!0&&nt.side===ha&&nt.forceSinglePass===!1?(nt.side=Vn,nt.needsUpdate=!0,A.renderBufferDirect(et,K,ct,nt,O,bt),nt.side=Ja,nt.needsUpdate=!0,A.renderBufferDirect(et,K,ct,nt,O,bt),nt.side=ha):A.renderBufferDirect(et,K,ct,nt,O,bt),O.onAfterRender(A,K,et,ct,nt,bt)}function Os(O,K,et){K.isScene!==!0&&(K=Ft);const ct=$t.get(O),nt=x.state.lights,bt=x.state.shadowsArray,Ut=nt.state.version,Bt=Mt.getParameters(O,nt.state,bt,K,et),Ht=Mt.getProgramCacheKey(Bt);let Kt=ct.programs;ct.environment=O.isMeshStandardMaterial?K.environment:null,ct.fog=K.fog,ct.envMap=(O.isMeshStandardMaterial?G:je).get(O.envMap||ct.environment),ct.envMapRotation=ct.environment!==null&&O.envMap===null?K.environmentRotation:O.envMapRotation,Kt===void 0&&(O.addEventListener("dispose",wt),Kt=new Map,ct.programs=Kt);let te=Kt.get(Ht);if(te!==void 0){if(ct.currentProgram===te&&ct.lightsStateVersion===Ut)return ma(O,Bt),te}else Bt.uniforms=Mt.getUniforms(O),O.onBuild(et,Bt,A),O.onBeforeCompile(Bt,A),te=Mt.acquireProgram(Bt,Ht),Kt.set(Ht,te),ct.uniforms=Bt.uniforms;const jt=ct.uniforms;return(!O.isShaderMaterial&&!O.isRawShaderMaterial||O.clipping===!0)&&(jt.clippingPlanes=Dt.uniform),ma(O,Bt),ct.needsLights=va(O),ct.lightsStateVersion=Ut,ct.needsLights&&(jt.ambientLightColor.value=nt.state.ambient,jt.lightProbe.value=nt.state.probe,jt.directionalLights.value=nt.state.directional,jt.directionalLightShadows.value=nt.state.directionalShadow,jt.spotLights.value=nt.state.spot,jt.spotLightShadows.value=nt.state.spotShadow,jt.rectAreaLights.value=nt.state.rectArea,jt.ltc_1.value=nt.state.rectAreaLTC1,jt.ltc_2.value=nt.state.rectAreaLTC2,jt.pointLights.value=nt.state.point,jt.pointLightShadows.value=nt.state.pointShadow,jt.hemisphereLights.value=nt.state.hemi,jt.directionalShadowMap.value=nt.state.directionalShadowMap,jt.directionalShadowMatrix.value=nt.state.directionalShadowMatrix,jt.spotShadowMap.value=nt.state.spotShadowMap,jt.spotLightMatrix.value=nt.state.spotLightMatrix,jt.spotLightMap.value=nt.state.spotLightMap,jt.pointShadowMap.value=nt.state.pointShadowMap,jt.pointShadowMatrix.value=nt.state.pointShadowMatrix),ct.currentProgram=te,ct.uniformsList=null,te}function qr(O){if(O.uniformsList===null){const K=O.currentProgram.getUniforms();O.uniformsList=jc.seqWithValue(K.seq,O.uniforms)}return O.uniformsList}function ma(O,K){const et=$t.get(O);et.outputColorSpace=K.outputColorSpace,et.batching=K.batching,et.batchingColor=K.batchingColor,et.instancing=K.instancing,et.instancingColor=K.instancingColor,et.instancingMorph=K.instancingMorph,et.skinning=K.skinning,et.morphTargets=K.morphTargets,et.morphNormals=K.morphNormals,et.morphColors=K.morphColors,et.morphTargetsCount=K.morphTargetsCount,et.numClippingPlanes=K.numClippingPlanes,et.numIntersection=K.numClipIntersection,et.vertexAlphas=K.vertexAlphas,et.vertexTangents=K.vertexTangents,et.toneMapping=K.toneMapping}function Xr(O,K,et,ct,nt){K.isScene!==!0&&(K=Ft),ae.resetTextureUnits();const bt=K.fog,Ut=ct.isMeshStandardMaterial?K.environment:null,Bt=z===null?A.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:es,Ht=(ct.isMeshStandardMaterial?G:je).get(ct.envMap||Ut),Kt=ct.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,te=!!et.attributes.tangent&&(!!ct.normalMap||ct.anisotropy>0),jt=!!et.morphAttributes.position,_e=!!et.morphAttributes.normal,be=!!et.morphAttributes.color;let Fe=Qa;ct.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Fe=A.toneMapping);const Tn=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,ve=Tn!==void 0?Tn.length:0,kt=$t.get(ct),on=x.state.lights;if(tt===!0&&(dt===!0||O!==U)){const On=O===U&&ct.id===k;Dt.setState(ct,O,On)}let Ce=!1;ct.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==on.state.version||kt.outputColorSpace!==Bt||nt.isBatchedMesh&&kt.batching===!1||!nt.isBatchedMesh&&kt.batching===!0||nt.isBatchedMesh&&kt.batchingColor===!0&&nt.colorTexture===null||nt.isBatchedMesh&&kt.batchingColor===!1&&nt.colorTexture!==null||nt.isInstancedMesh&&kt.instancing===!1||!nt.isInstancedMesh&&kt.instancing===!0||nt.isSkinnedMesh&&kt.skinning===!1||!nt.isSkinnedMesh&&kt.skinning===!0||nt.isInstancedMesh&&kt.instancingColor===!0&&nt.instanceColor===null||nt.isInstancedMesh&&kt.instancingColor===!1&&nt.instanceColor!==null||nt.isInstancedMesh&&kt.instancingMorph===!0&&nt.morphTexture===null||nt.isInstancedMesh&&kt.instancingMorph===!1&&nt.morphTexture!==null||kt.envMap!==Ht||ct.fog===!0&&kt.fog!==bt||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==Dt.numPlanes||kt.numIntersection!==Dt.numIntersection)||kt.vertexAlphas!==Kt||kt.vertexTangents!==te||kt.morphTargets!==jt||kt.morphNormals!==_e||kt.morphColors!==be||kt.toneMapping!==Fe||kt.morphTargetsCount!==ve)&&(Ce=!0):(Ce=!0,kt.__version=ct.version);let ni=kt.currentProgram;Ce===!0&&(ni=Os(ct,K,nt));let yn=!1,bi=!1,Yr=!1;const qe=ni.getUniforms(),pi=kt.uniforms;if(Yt.useProgram(ni.program)&&(yn=!0,bi=!0,Yr=!0),ct.id!==k&&(k=ct.id,bi=!0),yn||U!==O){qe.setValue(X,"projectionMatrix",O.projectionMatrix),qe.setValue(X,"viewMatrix",O.matrixWorldInverse);const On=qe.map.cameraPosition;On!==void 0&&On.setValue(X,At.setFromMatrixPosition(O.matrixWorld)),ze.logarithmicDepthBuffer&&qe.setValue(X,"logDepthBufFC",2/(Math.log(O.far+1)/Math.LN2)),(ct.isMeshPhongMaterial||ct.isMeshToonMaterial||ct.isMeshLambertMaterial||ct.isMeshBasicMaterial||ct.isMeshStandardMaterial||ct.isShaderMaterial)&&qe.setValue(X,"isOrthographic",O.isOrthographicCamera===!0),U!==O&&(U=O,bi=!0,Yr=!0)}if(nt.isSkinnedMesh){qe.setOptional(X,nt,"bindMatrix"),qe.setOptional(X,nt,"bindMatrixInverse");const On=nt.skeleton;On&&(On.boneTexture===null&&On.computeBoneTexture(),qe.setValue(X,"boneTexture",On.boneTexture,ae))}nt.isBatchedMesh&&(qe.setOptional(X,nt,"batchingTexture"),qe.setValue(X,"batchingTexture",nt._matricesTexture,ae),qe.setOptional(X,nt,"batchingColorTexture"),nt._colorsTexture!==null&&qe.setValue(X,"batchingColorTexture",nt._colorsTexture,ae));const _a=et.morphAttributes;if((_a.position!==void 0||_a.normal!==void 0||_a.color!==void 0)&&Gt.update(nt,et,ni),(bi||kt.receiveShadow!==nt.receiveShadow)&&(kt.receiveShadow=nt.receiveShadow,qe.setValue(X,"receiveShadow",nt.receiveShadow)),ct.isMeshGouraudMaterial&&ct.envMap!==null&&(pi.envMap.value=Ht,pi.flipEnvMap.value=Ht.isCubeTexture&&Ht.isRenderTargetTexture===!1?-1:1),ct.isMeshStandardMaterial&&ct.envMap===null&&K.environment!==null&&(pi.envMapIntensity.value=K.environmentIntensity),bi&&(qe.setValue(X,"toneMappingExposure",A.toneMappingExposure),kt.needsLights&&ga(pi,Yr),bt&&ct.fog===!0&&Et.refreshFogUniforms(pi,bt),Et.refreshMaterialUniforms(pi,ct,Z,L,x.state.transmissionRenderTarget[O.id]),jc.upload(X,qr(kt),pi,ae)),ct.isShaderMaterial&&ct.uniformsNeedUpdate===!0&&(jc.upload(X,qr(kt),pi,ae),ct.uniformsNeedUpdate=!1),ct.isSpriteMaterial&&qe.setValue(X,"center",nt.center),qe.setValue(X,"modelViewMatrix",nt.modelViewMatrix),qe.setValue(X,"normalMatrix",nt.normalMatrix),qe.setValue(X,"modelMatrix",nt.matrixWorld),ct.isShaderMaterial||ct.isRawShaderMaterial){const On=ct.uniformsGroups;for(let An=0,Zr=On.length;An<Zr;An++){const Kr=On[An];re.update(Kr,ni),re.bind(Kr,ni)}}return ni}function ga(O,K){O.ambientLightColor.needsUpdate=K,O.lightProbe.needsUpdate=K,O.directionalLights.needsUpdate=K,O.directionalLightShadows.needsUpdate=K,O.pointLights.needsUpdate=K,O.pointLightShadows.needsUpdate=K,O.spotLights.needsUpdate=K,O.spotLightShadows.needsUpdate=K,O.rectAreaLights.needsUpdate=K,O.hemisphereLights.needsUpdate=K}function va(O){return O.isMeshLambertMaterial||O.isMeshToonMaterial||O.isMeshPhongMaterial||O.isMeshStandardMaterial||O.isShadowMaterial||O.isShaderMaterial&&O.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(O,K,et){$t.get(O.texture).__webglTexture=K,$t.get(O.depthTexture).__webglTexture=et;const ct=$t.get(O);ct.__hasExternalTextures=!0,ct.__autoAllocateDepthBuffer=et===void 0,ct.__autoAllocateDepthBuffer||ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ct.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(O,K){const et=$t.get(O);et.__webglFramebuffer=K,et.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(O,K=0,et=0){z=O,I=K,P=et;let ct=!0,nt=null,bt=!1,Ut=!1;if(O){const Ht=$t.get(O);Ht.__useDefaultFramebuffer!==void 0?(Yt.bindFramebuffer(X.FRAMEBUFFER,null),ct=!1):Ht.__webglFramebuffer===void 0?ae.setupRenderTarget(O):Ht.__hasExternalTextures&&ae.rebindTextures(O,$t.get(O.texture).__webglTexture,$t.get(O.depthTexture).__webglTexture);const Kt=O.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(Ut=!0);const te=$t.get(O).__webglFramebuffer;O.isWebGLCubeRenderTarget?(Array.isArray(te[K])?nt=te[K][et]:nt=te[K],bt=!0):O.samples>0&&ae.useMultisampledRTT(O)===!1?nt=$t.get(O).__webglMultisampledFramebuffer:Array.isArray(te)?nt=te[et]:nt=te,w.copy(O.viewport),F.copy(O.scissor),it=O.scissorTest}else w.copy(B).multiplyScalar(Z).floor(),F.copy($).multiplyScalar(Z).floor(),it=ot;if(Yt.bindFramebuffer(X.FRAMEBUFFER,nt)&&ct&&Yt.drawBuffers(O,nt),Yt.viewport(w),Yt.scissor(F),Yt.setScissorTest(it),bt){const Ht=$t.get(O.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ht.__webglTexture,et)}else if(Ut){const Ht=$t.get(O.texture),Kt=K||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,Ht.__webglTexture,et||0,Kt)}k=-1},this.readRenderTargetPixels=function(O,K,et,ct,nt,bt,Ut){if(!(O&&O.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=$t.get(O).__webglFramebuffer;if(O.isWebGLCubeRenderTarget&&Ut!==void 0&&(Bt=Bt[Ut]),Bt){Yt.bindFramebuffer(X.FRAMEBUFFER,Bt);try{const Ht=O.texture,Kt=Ht.format,te=Ht.type;if(!ze.textureFormatReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ze.textureTypeReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=O.width-ct&&et>=0&&et<=O.height-nt&&X.readPixels(K,et,ct,nt,Nt.convert(Kt),Nt.convert(te),bt)}finally{const Ht=z!==null?$t.get(z).__webglFramebuffer:null;Yt.bindFramebuffer(X.FRAMEBUFFER,Ht)}}},this.readRenderTargetPixelsAsync=async function(O,K,et,ct,nt,bt,Ut){if(!(O&&O.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Bt=$t.get(O).__webglFramebuffer;if(O.isWebGLCubeRenderTarget&&Ut!==void 0&&(Bt=Bt[Ut]),Bt){Yt.bindFramebuffer(X.FRAMEBUFFER,Bt);try{const Ht=O.texture,Kt=Ht.format,te=Ht.type;if(!ze.textureFormatReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ze.textureTypeReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(K>=0&&K<=O.width-ct&&et>=0&&et<=O.height-nt){const jt=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,jt),X.bufferData(X.PIXEL_PACK_BUFFER,bt.byteLength,X.STREAM_READ),X.readPixels(K,et,ct,nt,Nt.convert(Kt),Nt.convert(te),0),X.flush();const _e=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);await MM(X,_e,4);try{X.bindBuffer(X.PIXEL_PACK_BUFFER,jt),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,bt)}finally{X.deleteBuffer(jt),X.deleteSync(_e)}return bt}}finally{const Ht=z!==null?$t.get(z).__webglFramebuffer:null;Yt.bindFramebuffer(X.FRAMEBUFFER,Ht)}}},this.copyFramebufferToTexture=function(O,K=null,et=0){O.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),K=arguments[0]||null,O=arguments[1]);const ct=Math.pow(2,-et),nt=Math.floor(O.image.width*ct),bt=Math.floor(O.image.height*ct),Ut=K!==null?K.x:0,Bt=K!==null?K.y:0;ae.setTexture2D(O,0),X.copyTexSubImage2D(X.TEXTURE_2D,et,0,0,Ut,Bt,nt,bt),Yt.unbindTexture()},this.copyTextureToTexture=function(O,K,et=null,ct=null,nt=0){O.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),ct=arguments[0]||null,O=arguments[1],K=arguments[2],nt=arguments[3]||0,et=null);let bt,Ut,Bt,Ht,Kt,te;et!==null?(bt=et.max.x-et.min.x,Ut=et.max.y-et.min.y,Bt=et.min.x,Ht=et.min.y):(bt=O.image.width,Ut=O.image.height,Bt=0,Ht=0),ct!==null?(Kt=ct.x,te=ct.y):(Kt=0,te=0);const jt=Nt.convert(K.format),_e=Nt.convert(K.type);ae.setTexture2D(K,0),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,K.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,K.unpackAlignment);const be=X.getParameter(X.UNPACK_ROW_LENGTH),Fe=X.getParameter(X.UNPACK_IMAGE_HEIGHT),Tn=X.getParameter(X.UNPACK_SKIP_PIXELS),ve=X.getParameter(X.UNPACK_SKIP_ROWS),kt=X.getParameter(X.UNPACK_SKIP_IMAGES),on=O.isCompressedTexture?O.mipmaps[nt]:O.image;X.pixelStorei(X.UNPACK_ROW_LENGTH,on.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,on.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Bt),X.pixelStorei(X.UNPACK_SKIP_ROWS,Ht),O.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,nt,Kt,te,bt,Ut,jt,_e,on.data):O.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,nt,Kt,te,on.width,on.height,jt,on.data):X.texSubImage2D(X.TEXTURE_2D,nt,Kt,te,jt,_e,on),X.pixelStorei(X.UNPACK_ROW_LENGTH,be),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Fe),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Tn),X.pixelStorei(X.UNPACK_SKIP_ROWS,ve),X.pixelStorei(X.UNPACK_SKIP_IMAGES,kt),nt===0&&K.generateMipmaps&&X.generateMipmap(X.TEXTURE_2D),Yt.unbindTexture()},this.copyTextureToTexture3D=function(O,K,et=null,ct=null,nt=0){O.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),et=arguments[0]||null,ct=arguments[1]||null,O=arguments[2],K=arguments[3],nt=arguments[4]||0);let bt,Ut,Bt,Ht,Kt,te,jt,_e,be;const Fe=O.isCompressedTexture?O.mipmaps[nt]:O.image;et!==null?(bt=et.max.x-et.min.x,Ut=et.max.y-et.min.y,Bt=et.max.z-et.min.z,Ht=et.min.x,Kt=et.min.y,te=et.min.z):(bt=Fe.width,Ut=Fe.height,Bt=Fe.depth,Ht=0,Kt=0,te=0),ct!==null?(jt=ct.x,_e=ct.y,be=ct.z):(jt=0,_e=0,be=0);const Tn=Nt.convert(K.format),ve=Nt.convert(K.type);let kt;if(K.isData3DTexture)ae.setTexture3D(K,0),kt=X.TEXTURE_3D;else if(K.isDataArrayTexture||K.isCompressedArrayTexture)ae.setTexture2DArray(K,0),kt=X.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,K.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,K.unpackAlignment);const on=X.getParameter(X.UNPACK_ROW_LENGTH),Ce=X.getParameter(X.UNPACK_IMAGE_HEIGHT),ni=X.getParameter(X.UNPACK_SKIP_PIXELS),yn=X.getParameter(X.UNPACK_SKIP_ROWS),bi=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,Fe.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Fe.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Ht),X.pixelStorei(X.UNPACK_SKIP_ROWS,Kt),X.pixelStorei(X.UNPACK_SKIP_IMAGES,te),O.isDataTexture||O.isData3DTexture?X.texSubImage3D(kt,nt,jt,_e,be,bt,Ut,Bt,Tn,ve,Fe.data):K.isCompressedArrayTexture?X.compressedTexSubImage3D(kt,nt,jt,_e,be,bt,Ut,Bt,Tn,Fe.data):X.texSubImage3D(kt,nt,jt,_e,be,bt,Ut,Bt,Tn,ve,Fe),X.pixelStorei(X.UNPACK_ROW_LENGTH,on),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Ce),X.pixelStorei(X.UNPACK_SKIP_PIXELS,ni),X.pixelStorei(X.UNPACK_SKIP_ROWS,yn),X.pixelStorei(X.UNPACK_SKIP_IMAGES,bi),nt===0&&K.generateMipmaps&&X.generateMipmap(kt),Yt.unbindTexture()},this.initRenderTarget=function(O){$t.get(O).__webglFramebuffer===void 0&&ae.setupRenderTarget(O)},this.initTexture=function(O){O.isCubeTexture?ae.setTextureCube(O,0):O.isData3DTexture?ae.setTexture3D(O,0):O.isDataArrayTexture||O.isCompressedArrayTexture?ae.setTexture2DArray(O,0):ae.setTexture2D(O,0),Yt.unbindTexture()},this.resetState=function(){I=0,P=0,z=null,Yt.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return da}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=t===_d?"display-p3":"srgb",n.unpackColorSpace=Ue.workingColorSpace===au?"display-p3":"srgb"}}class N1 extends Nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fi,this.environmentIntensity=1,this.environmentRotation=new Fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class $c extends ns{constructor(t=1,n=32,a=16,r=0,l=Math.PI*2,u=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:a,phiStart:r,phiLength:l,thetaStart:u,thetaLength:h},n=Math.max(3,Math.floor(n)),a=Math.max(2,Math.floor(a));const d=Math.min(u+h,Math.PI);let p=0;const g=[],_=new ut,v=new ut,S=[],M=[],E=[],x=[];for(let y=0;y<=a;y++){const T=[],A=y/a;let D=0;y===0&&u===0?D=.5/n:y===a&&d===Math.PI&&(D=-.5/n);for(let I=0;I<=n;I++){const P=I/n;_.x=-t*Math.cos(r+P*l)*Math.sin(u+A*h),_.y=t*Math.cos(u+A*h),_.z=t*Math.sin(r+P*l)*Math.sin(u+A*h),M.push(_.x,_.y,_.z),v.copy(_).normalize(),E.push(v.x,v.y,v.z),x.push(P+D,1-A),T.push(p++)}g.push(T)}for(let y=0;y<a;y++)for(let T=0;T<n;T++){const A=g[y][T+1],D=g[y][T],I=g[y+1][T],P=g[y+1][T+1];(y!==0||u>0)&&S.push(A,D,P),(y!==a-1||d<Math.PI)&&S.push(D,I,P)}this.setIndex(S),this.setAttribute("position",new Ii(M,3)),this.setAttribute("normal",new Ii(E,3)),this.setAttribute("uv",new Ii(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $c(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class $h extends rl{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=f_,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class L_ extends Nn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ae(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const td=new $e,U0=new ut,L0=new ut;class U1{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Me(512,512),this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yd,this._frameExtents=new Me(1,1),this._viewportCount=1,this._viewports=[new _n(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,a=this.matrix;U0.setFromMatrixPosition(t.matrixWorld),n.position.copy(U0),L0.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(L0),n.updateMatrixWorld(),td.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(td),a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(td)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class L1 extends U1{constructor(){super(new A_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class O1 extends L_{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nn.DEFAULT_UP),this.updateMatrix(),this.target=new Nn,this.shadow=new L1}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class P1 extends L_{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vd);class Ei{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const n=this.elements;n[0]=t.x,n[4]=t.y,n[8]=t.z}getTrace(t){t===void 0&&(t=new R);const n=this.elements;return t.x=n[0],t.y=n[4],t.z=n[8],t}vmult(t,n){n===void 0&&(n=new R);const a=this.elements,r=t.x,l=t.y,u=t.z;return n.x=a[0]*r+a[1]*l+a[2]*u,n.y=a[3]*r+a[4]*l+a[5]*u,n.z=a[6]*r+a[7]*l+a[8]*u,n}smult(t){for(let n=0;n<this.elements.length;n++)this.elements[n]*=t}mmult(t,n){n===void 0&&(n=new Ei);const a=this.elements,r=t.elements,l=n.elements,u=a[0],h=a[1],d=a[2],p=a[3],g=a[4],_=a[5],v=a[6],S=a[7],M=a[8],E=r[0],x=r[1],y=r[2],T=r[3],A=r[4],D=r[5],I=r[6],P=r[7],z=r[8];return l[0]=u*E+h*T+d*I,l[1]=u*x+h*A+d*P,l[2]=u*y+h*D+d*z,l[3]=p*E+g*T+_*I,l[4]=p*x+g*A+_*P,l[5]=p*y+g*D+_*z,l[6]=v*E+S*T+M*I,l[7]=v*x+S*A+M*P,l[8]=v*y+S*D+M*z,n}scale(t,n){n===void 0&&(n=new Ei);const a=this.elements,r=n.elements;for(let l=0;l!==3;l++)r[3*l+0]=t.x*a[3*l+0],r[3*l+1]=t.y*a[3*l+1],r[3*l+2]=t.z*a[3*l+2];return n}solve(t,n){n===void 0&&(n=new R);const a=3,r=4,l=[];let u,h;for(u=0;u<a*r;u++)l.push(0);for(u=0;u<3;u++)for(h=0;h<3;h++)l[u+r*h]=this.elements[u+3*h];l[3]=t.x,l[7]=t.y,l[11]=t.z;let d=3;const p=d;let g;const _=4;let v;do{if(u=p-d,l[u+r*u]===0){for(h=u+1;h<p;h++)if(l[u+r*h]!==0){g=_;do v=_-g,l[v+r*u]+=l[v+r*h];while(--g);break}}if(l[u+r*u]!==0)for(h=u+1;h<p;h++){const S=l[u+r*h]/l[u+r*u];g=_;do v=_-g,l[v+r*h]=v<=u?0:l[v+r*h]-l[v+r*u]*S;while(--g)}}while(--d);if(n.z=l[2*r+3]/l[2*r+2],n.y=(l[1*r+3]-l[1*r+2]*n.z)/l[1*r+1],n.x=(l[0*r+3]-l[0*r+2]*n.z-l[0*r+1]*n.y)/l[0*r+0],isNaN(n.x)||isNaN(n.y)||isNaN(n.z)||n.x===1/0||n.y===1/0||n.z===1/0)throw`Could not solve equation! Got x=[${n.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return n}e(t,n,a){if(a===void 0)return this.elements[n+3*t];this.elements[n+3*t]=a}copy(t){for(let n=0;n<t.elements.length;n++)this.elements[n]=t.elements[n];return this}toString(){let t="";for(let a=0;a<9;a++)t+=this.elements[a]+",";return t}reverse(t){t===void 0&&(t=new Ei);const n=3,a=6,r=z1;let l,u;for(l=0;l<3;l++)for(u=0;u<3;u++)r[l+a*u]=this.elements[l+3*u];r[3]=1,r[9]=0,r[15]=0,r[4]=0,r[10]=1,r[16]=0,r[5]=0,r[11]=0,r[17]=1;let h=3;const d=h;let p;const g=a;let _;do{if(l=d-h,r[l+a*l]===0){for(u=l+1;u<d;u++)if(r[l+a*u]!==0){p=g;do _=g-p,r[_+a*l]+=r[_+a*u];while(--p);break}}if(r[l+a*l]!==0)for(u=l+1;u<d;u++){const v=r[l+a*u]/r[l+a*l];p=g;do _=g-p,r[_+a*u]=_<=l?0:r[_+a*u]-r[_+a*l]*v;while(--p)}}while(--h);l=2;do{u=l-1;do{const v=r[l+a*u]/r[l+a*l];p=a;do _=a-p,r[_+a*u]=r[_+a*u]-r[_+a*l]*v;while(--p)}while(u--)}while(--l);l=2;do{const v=1/r[l+a*l];p=a;do _=a-p,r[_+a*l]=r[_+a*l]*v;while(--p)}while(l--);l=2;do{u=2;do{if(_=r[n+u+a*l],isNaN(_)||_===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(l,u,_)}while(u--)}while(l--);return t}setRotationFromQuaternion(t){const n=t.x,a=t.y,r=t.z,l=t.w,u=n+n,h=a+a,d=r+r,p=n*u,g=n*h,_=n*d,v=a*h,S=a*d,M=r*d,E=l*u,x=l*h,y=l*d,T=this.elements;return T[0]=1-(v+M),T[1]=g-y,T[2]=_+x,T[3]=g+y,T[4]=1-(p+M),T[5]=S-E,T[6]=_-x,T[7]=S+E,T[8]=1-(p+v),this}transpose(t){t===void 0&&(t=new Ei);const n=this.elements,a=t.elements;let r;return a[0]=n[0],a[4]=n[4],a[8]=n[8],r=n[1],a[1]=n[3],a[3]=r,r=n[2],a[2]=n[6],a[6]=r,r=n[5],a[5]=n[7],a[7]=r,t}}const z1=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class R{constructor(t,n,a){t===void 0&&(t=0),n===void 0&&(n=0),a===void 0&&(a=0),this.x=t,this.y=n,this.z=a}cross(t,n){n===void 0&&(n=new R);const a=t.x,r=t.y,l=t.z,u=this.x,h=this.y,d=this.z;return n.x=h*l-d*r,n.y=d*a-u*l,n.z=u*r-h*a,n}set(t,n,a){return this.x=t,this.y=n,this.z=a,this}setZero(){this.x=this.y=this.z=0}vadd(t,n){if(n)n.x=t.x+this.x,n.y=t.y+this.y,n.z=t.z+this.z;else return new R(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,n){if(n)n.x=this.x-t.x,n.y=this.y-t.y,n.z=this.z-t.z;else return new R(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new Ei([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,n=this.y,a=this.z,r=Math.sqrt(t*t+n*n+a*a);if(r>0){const l=1/r;this.x*=l,this.y*=l,this.z*=l}else this.x=0,this.y=0,this.z=0;return r}unit(t){t===void 0&&(t=new R);const n=this.x,a=this.y,r=this.z;let l=Math.sqrt(n*n+a*a+r*r);return l>0?(l=1/l,t.x=n*l,t.y=a*l,t.z=r*l):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,n=this.y,a=this.z;return Math.sqrt(t*t+n*n+a*a)}lengthSquared(){return this.dot(this)}distanceTo(t){const n=this.x,a=this.y,r=this.z,l=t.x,u=t.y,h=t.z;return Math.sqrt((l-n)*(l-n)+(u-a)*(u-a)+(h-r)*(h-r))}distanceSquared(t){const n=this.x,a=this.y,r=this.z,l=t.x,u=t.y,h=t.z;return(l-n)*(l-n)+(u-a)*(u-a)+(h-r)*(h-r)}scale(t,n){n===void 0&&(n=new R);const a=this.x,r=this.y,l=this.z;return n.x=t*a,n.y=t*r,n.z=t*l,n}vmul(t,n){return n===void 0&&(n=new R),n.x=t.x*this.x,n.y=t.y*this.y,n.z=t.z*this.z,n}addScaledVector(t,n,a){return a===void 0&&(a=new R),a.x=this.x+t*n.x,a.y=this.y+t*n.y,a.z=this.z+t*n.z,a}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new R),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,n){const a=this.length();if(a>0){const r=B1,l=1/a;r.set(this.x*l,this.y*l,this.z*l);const u=I1;Math.abs(r.x)<.9?(u.set(1,0,0),r.cross(u,t)):(u.set(0,1,0),r.cross(u,t)),r.cross(t,n)}else t.set(1,0,0),n.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,n,a){const r=this.x,l=this.y,u=this.z;a.x=r+(t.x-r)*n,a.y=l+(t.y-l)*n,a.z=u+(t.z-u)*n}almostEquals(t,n){return n===void 0&&(n=1e-6),!(Math.abs(this.x-t.x)>n||Math.abs(this.y-t.y)>n||Math.abs(this.z-t.z)>n)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,n){return this.negate(O0),O0.almostEquals(t,n)}clone(){return new R(this.x,this.y,this.z)}}R.ZERO=new R(0,0,0);R.UNIT_X=new R(1,0,0);R.UNIT_Y=new R(0,1,0);R.UNIT_Z=new R(0,0,1);const B1=new R,I1=new R,O0=new R;class ti{constructor(t){t===void 0&&(t={}),this.lowerBound=new R,this.upperBound=new R,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,n,a,r){const l=this.lowerBound,u=this.upperBound,h=a;l.copy(t[0]),h&&h.vmult(l,l),u.copy(l);for(let d=1;d<t.length;d++){let p=t[d];h&&(h.vmult(p,P0),p=P0),p.x>u.x&&(u.x=p.x),p.x<l.x&&(l.x=p.x),p.y>u.y&&(u.y=p.y),p.y<l.y&&(l.y=p.y),p.z>u.z&&(u.z=p.z),p.z<l.z&&(l.z=p.z)}return n&&(n.vadd(l,l),n.vadd(u,u)),r&&(l.x-=r,l.y-=r,l.z-=r,u.x+=r,u.y+=r,u.z+=r),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new ti().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const n=this.lowerBound,a=this.upperBound,r=t.lowerBound,l=t.upperBound,u=r.x<=a.x&&a.x<=l.x||n.x<=l.x&&l.x<=a.x,h=r.y<=a.y&&a.y<=l.y||n.y<=l.y&&l.y<=a.y,d=r.z<=a.z&&a.z<=l.z||n.z<=l.z&&l.z<=a.z;return u&&h&&d}volume(){const t=this.lowerBound,n=this.upperBound;return(n.x-t.x)*(n.y-t.y)*(n.z-t.z)}contains(t){const n=this.lowerBound,a=this.upperBound,r=t.lowerBound,l=t.upperBound;return n.x<=r.x&&a.x>=l.x&&n.y<=r.y&&a.y>=l.y&&n.z<=r.z&&a.z>=l.z}getCorners(t,n,a,r,l,u,h,d){const p=this.lowerBound,g=this.upperBound;t.copy(p),n.set(g.x,p.y,p.z),a.set(g.x,g.y,p.z),r.set(p.x,g.y,g.z),l.set(g.x,p.y,g.z),u.set(p.x,g.y,p.z),h.set(p.x,p.y,g.z),d.copy(g)}toLocalFrame(t,n){const a=z0,r=a[0],l=a[1],u=a[2],h=a[3],d=a[4],p=a[5],g=a[6],_=a[7];this.getCorners(r,l,u,h,d,p,g,_);for(let v=0;v!==8;v++){const S=a[v];t.pointToLocal(S,S)}return n.setFromPoints(a)}toWorldFrame(t,n){const a=z0,r=a[0],l=a[1],u=a[2],h=a[3],d=a[4],p=a[5],g=a[6],_=a[7];this.getCorners(r,l,u,h,d,p,g,_);for(let v=0;v!==8;v++){const S=a[v];t.pointToWorld(S,S)}return n.setFromPoints(a)}overlapsRay(t){const{direction:n,from:a}=t,r=1/n.x,l=1/n.y,u=1/n.z,h=(this.lowerBound.x-a.x)*r,d=(this.upperBound.x-a.x)*r,p=(this.lowerBound.y-a.y)*l,g=(this.upperBound.y-a.y)*l,_=(this.lowerBound.z-a.z)*u,v=(this.upperBound.z-a.z)*u,S=Math.max(Math.max(Math.min(h,d),Math.min(p,g)),Math.min(_,v)),M=Math.min(Math.min(Math.max(h,d),Math.max(p,g)),Math.max(_,v));return!(M<0||S>M)}}const P0=new R,z0=[new R,new R,new R,new R,new R,new R,new R,new R];class B0{constructor(){this.matrix=[]}get(t,n){let{index:a}=t,{index:r}=n;if(r>a){const l=r;r=a,a=l}return this.matrix[(a*(a+1)>>1)+r-1]}set(t,n,a){let{index:r}=t,{index:l}=n;if(l>r){const u=l;l=r,r=u}this.matrix[(r*(r+1)>>1)+l-1]=a?1:0}reset(){for(let t=0,n=this.matrix.length;t!==n;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class O_{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;return a[t]===void 0&&(a[t]=[]),a[t].includes(n)||a[t].push(n),this}hasEventListener(t,n){if(this._listeners===void 0)return!1;const a=this._listeners;return!!(a[t]!==void 0&&a[t].includes(n))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,n){if(this._listeners===void 0)return this;const a=this._listeners;if(a[t]===void 0)return this;const r=a[t].indexOf(n);return r!==-1&&a[t].splice(r,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const a=this._listeners[t.type];if(a!==void 0){t.target=this;for(let r=0,l=a.length;r<l;r++)a[r].call(this,t)}return this}}class rn{constructor(t,n,a,r){t===void 0&&(t=0),n===void 0&&(n=0),a===void 0&&(a=0),r===void 0&&(r=1),this.x=t,this.y=n,this.z=a,this.w=r}set(t,n,a,r){return this.x=t,this.y=n,this.z=a,this.w=r,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,n){const a=Math.sin(n*.5);return this.x=t.x*a,this.y=t.y*a,this.z=t.z*a,this.w=Math.cos(n*.5),this}toAxisAngle(t){t===void 0&&(t=new R),this.normalize();const n=2*Math.acos(this.w),a=Math.sqrt(1-this.w*this.w);return a<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/a,t.y=this.y/a,t.z=this.z/a),[t,n]}setFromVectors(t,n){if(t.isAntiparallelTo(n)){const a=F1,r=H1;t.tangents(a,r),this.setFromAxisAngle(a,Math.PI)}else{const a=t.cross(n);this.x=a.x,this.y=a.y,this.z=a.z,this.w=Math.sqrt(t.length()**2*n.length()**2)+t.dot(n),this.normalize()}return this}mult(t,n){n===void 0&&(n=new rn);const a=this.x,r=this.y,l=this.z,u=this.w,h=t.x,d=t.y,p=t.z,g=t.w;return n.x=a*g+u*h+r*p-l*d,n.y=r*g+u*d+l*h-a*p,n.z=l*g+u*p+a*d-r*h,n.w=u*g-a*h-r*d-l*p,n}inverse(t){t===void 0&&(t=new rn);const n=this.x,a=this.y,r=this.z,l=this.w;this.conjugate(t);const u=1/(n*n+a*a+r*r+l*l);return t.x*=u,t.y*=u,t.z*=u,t.w*=u,t}conjugate(t){return t===void 0&&(t=new rn),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,n){n===void 0&&(n=new R);const a=t.x,r=t.y,l=t.z,u=this.x,h=this.y,d=this.z,p=this.w,g=p*a+h*l-d*r,_=p*r+d*a-u*l,v=p*l+u*r-h*a,S=-u*a-h*r-d*l;return n.x=g*p+S*-u+_*-d-v*-h,n.y=_*p+S*-h+v*-u-g*-d,n.z=v*p+S*-d+g*-h-_*-u,n}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,n){n===void 0&&(n="YZX");let a,r,l;const u=this.x,h=this.y,d=this.z,p=this.w;switch(n){case"YZX":const g=u*h+d*p;if(g>.499&&(a=2*Math.atan2(u,p),r=Math.PI/2,l=0),g<-.499&&(a=-2*Math.atan2(u,p),r=-Math.PI/2,l=0),a===void 0){const _=u*u,v=h*h,S=d*d;a=Math.atan2(2*h*p-2*u*d,1-2*v-2*S),r=Math.asin(2*g),l=Math.atan2(2*u*p-2*h*d,1-2*_-2*S)}break;default:throw new Error(`Euler order ${n} not supported yet.`)}t.y=a,t.z=r,t.x=l}setFromEuler(t,n,a,r){r===void 0&&(r="XYZ");const l=Math.cos(t/2),u=Math.cos(n/2),h=Math.cos(a/2),d=Math.sin(t/2),p=Math.sin(n/2),g=Math.sin(a/2);return r==="XYZ"?(this.x=d*u*h+l*p*g,this.y=l*p*h-d*u*g,this.z=l*u*g+d*p*h,this.w=l*u*h-d*p*g):r==="YXZ"?(this.x=d*u*h+l*p*g,this.y=l*p*h-d*u*g,this.z=l*u*g-d*p*h,this.w=l*u*h+d*p*g):r==="ZXY"?(this.x=d*u*h-l*p*g,this.y=l*p*h+d*u*g,this.z=l*u*g+d*p*h,this.w=l*u*h-d*p*g):r==="ZYX"?(this.x=d*u*h-l*p*g,this.y=l*p*h+d*u*g,this.z=l*u*g-d*p*h,this.w=l*u*h+d*p*g):r==="YZX"?(this.x=d*u*h+l*p*g,this.y=l*p*h+d*u*g,this.z=l*u*g-d*p*h,this.w=l*u*h-d*p*g):r==="XZY"&&(this.x=d*u*h-l*p*g,this.y=l*p*h-d*u*g,this.z=l*u*g+d*p*h,this.w=l*u*h+d*p*g),this}clone(){return new rn(this.x,this.y,this.z,this.w)}slerp(t,n,a){a===void 0&&(a=new rn);const r=this.x,l=this.y,u=this.z,h=this.w;let d=t.x,p=t.y,g=t.z,_=t.w,v,S,M,E,x;return S=r*d+l*p+u*g+h*_,S<0&&(S=-S,d=-d,p=-p,g=-g,_=-_),1-S>1e-6?(v=Math.acos(S),M=Math.sin(v),E=Math.sin((1-n)*v)/M,x=Math.sin(n*v)/M):(E=1-n,x=n),a.x=E*r+x*d,a.y=E*l+x*p,a.z=E*u+x*g,a.w=E*h+x*_,a}integrate(t,n,a,r){r===void 0&&(r=new rn);const l=t.x*a.x,u=t.y*a.y,h=t.z*a.z,d=this.x,p=this.y,g=this.z,_=this.w,v=n*.5;return r.x+=v*(l*_+u*g-h*p),r.y+=v*(u*_+h*d-l*g),r.z+=v*(h*_+l*p-u*d),r.w+=v*(-l*d-u*p-h*g),r}}const F1=new R,H1=new R,G1={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class Pt{constructor(t){t===void 0&&(t={}),this.id=Pt.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,n){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,n,a,r){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}Pt.idCounter=0;Pt.types=G1;class Re{constructor(t){t===void 0&&(t={}),this.position=new R,this.quaternion=new rn,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,n){return Re.pointToLocalFrame(this.position,this.quaternion,t,n)}pointToWorld(t,n){return Re.pointToWorldFrame(this.position,this.quaternion,t,n)}vectorToWorldFrame(t,n){return n===void 0&&(n=new R),this.quaternion.vmult(t,n),n}static pointToLocalFrame(t,n,a,r){return r===void 0&&(r=new R),a.vsub(t,r),n.conjugate(I0),I0.vmult(r,r),r}static pointToWorldFrame(t,n,a,r){return r===void 0&&(r=new R),n.vmult(a,r),r.vadd(t,r),r}static vectorToWorldFrame(t,n,a){return a===void 0&&(a=new R),t.vmult(n,a),a}static vectorToLocalFrame(t,n,a,r){return r===void 0&&(r=new R),n.w*=-1,n.vmult(a,r),n.w*=-1,r}}const I0=new rn;class nl extends Pt{constructor(t){t===void 0&&(t={});const{vertices:n=[],faces:a=[],normals:r=[],axes:l,boundingSphereRadius:u}=t;super({type:Pt.types.CONVEXPOLYHEDRON}),this.vertices=n,this.faces=a,this.faceNormals=r,this.faceNormals.length===0&&this.computeNormals(),u?this.boundingSphereRadius=u:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=l?l.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,n=this.vertices,a=this.uniqueEdges;a.length=0;const r=new R;for(let l=0;l!==t.length;l++){const u=t[l],h=u.length;for(let d=0;d!==h;d++){const p=(d+1)%h;n[u[d]].vsub(n[u[p]],r),r.normalize();let g=!1;for(let _=0;_!==a.length;_++)if(a[_].almostEquals(r)||a[_].almostEquals(r)){g=!0;break}g||a.push(r.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let r=0;r<this.faces[t].length;r++)if(!this.vertices[this.faces[t][r]])throw new Error(`Vertex ${this.faces[t][r]} not found!`);const n=this.faceNormals[t]||new R;this.getFaceNormal(t,n),n.negate(n),this.faceNormals[t]=n;const a=this.vertices[this.faces[t][0]];if(n.dot(a)<0){console.error(`.faceNormals[${t}] = Vec3(${n.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let r=0;r<this.faces[t].length;r++)console.warn(`.vertices[${this.faces[t][r]}] = Vec3(${this.vertices[this.faces[t][r]].toString()})`)}}}getFaceNormal(t,n){const a=this.faces[t],r=this.vertices[a[0]],l=this.vertices[a[1]],u=this.vertices[a[2]];nl.computeNormal(r,l,u,n)}static computeNormal(t,n,a,r){const l=new R,u=new R;n.vsub(t,u),a.vsub(n,l),l.cross(u,r),r.isZero()||r.normalize()}clipAgainstHull(t,n,a,r,l,u,h,d,p){const g=new R;let _=-1,v=-Number.MAX_VALUE;for(let M=0;M<a.faces.length;M++){g.copy(a.faceNormals[M]),l.vmult(g,g);const E=g.dot(u);E>v&&(v=E,_=M)}const S=[];for(let M=0;M<a.faces[_].length;M++){const E=a.vertices[a.faces[_][M]],x=new R;x.copy(E),l.vmult(x,x),r.vadd(x,x),S.push(x)}_>=0&&this.clipFaceAgainstHull(u,t,n,S,h,d,p)}findSeparatingAxis(t,n,a,r,l,u,h,d){const p=new R,g=new R,_=new R,v=new R,S=new R,M=new R;let E=Number.MAX_VALUE;const x=this;if(x.uniqueAxes)for(let y=0;y!==x.uniqueAxes.length;y++){a.vmult(x.uniqueAxes[y],p);const T=x.testSepAxis(p,t,n,a,r,l);if(T===!1)return!1;T<E&&(E=T,u.copy(p))}else{const y=h?h.length:x.faces.length;for(let T=0;T<y;T++){const A=h?h[T]:T;p.copy(x.faceNormals[A]),a.vmult(p,p);const D=x.testSepAxis(p,t,n,a,r,l);if(D===!1)return!1;D<E&&(E=D,u.copy(p))}}if(t.uniqueAxes)for(let y=0;y!==t.uniqueAxes.length;y++){l.vmult(t.uniqueAxes[y],g);const T=x.testSepAxis(g,t,n,a,r,l);if(T===!1)return!1;T<E&&(E=T,u.copy(g))}else{const y=d?d.length:t.faces.length;for(let T=0;T<y;T++){const A=d?d[T]:T;g.copy(t.faceNormals[A]),l.vmult(g,g);const D=x.testSepAxis(g,t,n,a,r,l);if(D===!1)return!1;D<E&&(E=D,u.copy(g))}}for(let y=0;y!==x.uniqueEdges.length;y++){a.vmult(x.uniqueEdges[y],v);for(let T=0;T!==t.uniqueEdges.length;T++)if(l.vmult(t.uniqueEdges[T],S),v.cross(S,M),!M.almostZero()){M.normalize();const A=x.testSepAxis(M,t,n,a,r,l);if(A===!1)return!1;A<E&&(E=A,u.copy(M))}}return r.vsub(n,_),_.dot(u)>0&&u.negate(u),!0}testSepAxis(t,n,a,r,l,u){const h=this;nl.project(h,t,a,r,ed),nl.project(n,t,l,u,nd);const d=ed[0],p=ed[1],g=nd[0],_=nd[1];if(d<_||g<p)return!1;const v=d-_,S=g-p;return v<S?v:S}calculateLocalInertia(t,n){const a=new R,r=new R;this.computeLocalAABB(r,a);const l=a.x-r.x,u=a.y-r.y,h=a.z-r.z;n.x=1/12*t*(2*u*2*u+2*h*2*h),n.y=1/12*t*(2*l*2*l+2*h*2*h),n.z=1/12*t*(2*u*2*u+2*l*2*l)}getPlaneConstantOfFace(t){const n=this.faces[t],a=this.faceNormals[t],r=this.vertices[n[0]];return-a.dot(r)}clipFaceAgainstHull(t,n,a,r,l,u,h){const d=new R,p=new R,g=new R,_=new R,v=new R,S=new R,M=new R,E=new R,x=this,y=[],T=r,A=y;let D=-1,I=Number.MAX_VALUE;for(let w=0;w<x.faces.length;w++){d.copy(x.faceNormals[w]),a.vmult(d,d);const F=d.dot(t);F<I&&(I=F,D=w)}if(D<0)return;const P=x.faces[D];P.connectedFaces=[];for(let w=0;w<x.faces.length;w++)for(let F=0;F<x.faces[w].length;F++)P.indexOf(x.faces[w][F])!==-1&&w!==D&&P.connectedFaces.indexOf(w)===-1&&P.connectedFaces.push(w);const z=P.length;for(let w=0;w<z;w++){const F=x.vertices[P[w]],it=x.vertices[P[(w+1)%z]];F.vsub(it,p),g.copy(p),a.vmult(g,g),n.vadd(g,g),_.copy(this.faceNormals[D]),a.vmult(_,_),n.vadd(_,_),g.cross(_,v),v.negate(v),S.copy(F),a.vmult(S,S),n.vadd(S,S);const V=P.connectedFaces[w];M.copy(this.faceNormals[V]);const Q=this.getPlaneConstantOfFace(V);E.copy(M),a.vmult(E,E);const Y=Q-E.dot(n);for(this.clipFaceAgainstPlane(T,A,E,Y);T.length;)T.shift();for(;A.length;)T.push(A.shift())}M.copy(this.faceNormals[D]);const k=this.getPlaneConstantOfFace(D);E.copy(M),a.vmult(E,E);const U=k-E.dot(n);for(let w=0;w<T.length;w++){let F=E.dot(T[w])+U;if(F<=l&&(console.log(`clamped: depth=${F} to minDist=${l}`),F=l),F<=u){const it=T[w];if(F<=1e-6){const V={point:it,normal:E,depth:F};h.push(V)}}}}clipFaceAgainstPlane(t,n,a,r){let l,u;const h=t.length;if(h<2)return n;let d=t[t.length-1],p=t[0];l=a.dot(d)+r;for(let g=0;g<h;g++){if(p=t[g],u=a.dot(p)+r,l<0)if(u<0){const _=new R;_.copy(p),n.push(_)}else{const _=new R;d.lerp(p,l/(l-u),_),n.push(_)}else if(u<0){const _=new R;d.lerp(p,l/(l-u),_),n.push(_),n.push(p)}d=p,l=u}return n}computeWorldVertices(t,n){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new R);const a=this.vertices,r=this.worldVertices;for(let l=0;l!==this.vertices.length;l++)n.vmult(a[l],r[l]),t.vadd(r[l],r[l]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,n){const a=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),n.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let r=0;r<this.vertices.length;r++){const l=a[r];l.x<t.x?t.x=l.x:l.x>n.x&&(n.x=l.x),l.y<t.y?t.y=l.y:l.y>n.y&&(n.y=l.y),l.z<t.z?t.z=l.z:l.z>n.z&&(n.z=l.z)}}computeWorldFaceNormals(t){const n=this.faceNormals.length;for(;this.worldFaceNormals.length<n;)this.worldFaceNormals.push(new R);const a=this.faceNormals,r=this.worldFaceNormals;for(let l=0;l!==n;l++)t.vmult(a[l],r[l]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const n=this.vertices;for(let a=0;a!==n.length;a++){const r=n[a].lengthSquared();r>t&&(t=r)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,n,a,r){const l=this.vertices;let u,h,d,p,g,_,v=new R;for(let S=0;S<l.length;S++){v.copy(l[S]),n.vmult(v,v),t.vadd(v,v);const M=v;(u===void 0||M.x<u)&&(u=M.x),(p===void 0||M.x>p)&&(p=M.x),(h===void 0||M.y<h)&&(h=M.y),(g===void 0||M.y>g)&&(g=M.y),(d===void 0||M.z<d)&&(d=M.z),(_===void 0||M.z>_)&&(_=M.z)}a.set(u,h,d),r.set(p,g,_)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new R);const n=this.vertices;for(let a=0;a<n.length;a++)t.vadd(n[a],t);return t.scale(1/n.length,t),t}transformAllPoints(t,n){const a=this.vertices.length,r=this.vertices;if(n){for(let l=0;l<a;l++){const u=r[l];n.vmult(u,u)}for(let l=0;l<this.faceNormals.length;l++){const u=this.faceNormals[l];n.vmult(u,u)}}if(t)for(let l=0;l<a;l++){const u=r[l];u.vadd(t,u)}}pointIsInside(t){const n=this.vertices,a=this.faces,r=this.faceNormals,l=new R;this.getAveragePointLocal(l);for(let u=0;u<this.faces.length;u++){let h=r[u];const d=n[a[u][0]],p=new R;t.vsub(d,p);const g=h.dot(p),_=new R;l.vsub(d,_);const v=h.dot(_);if(g<0&&v>0||g>0&&v<0)return!1}return-1}static project(t,n,a,r,l){const u=t.vertices.length,h=V1;let d=0,p=0;const g=k1,_=t.vertices;g.setZero(),Re.vectorToLocalFrame(a,r,n,h),Re.pointToLocalFrame(a,r,g,g);const v=g.dot(h);p=d=_[0].dot(h);for(let S=1;S<u;S++){const M=_[S].dot(h);M>d&&(d=M),M<p&&(p=M)}if(p-=v,d-=v,p>d){const S=p;p=d,d=S}l[0]=d,l[1]=p}}const ed=[],nd=[];new R;const V1=new R,k1=new R;class ou extends Pt{constructor(t){super({type:Pt.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,n=this.halfExtents.y,a=this.halfExtents.z,r=R,l=[new r(-t,-n,-a),new r(t,-n,-a),new r(t,n,-a),new r(-t,n,-a),new r(-t,-n,a),new r(t,-n,a),new r(t,n,a),new r(-t,n,a)],u=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],h=[new r(0,0,1),new r(0,1,0),new r(1,0,0)],d=new nl({vertices:l,faces:u,axes:h});this.convexPolyhedronRepresentation=d,d.material=this.material}calculateLocalInertia(t,n){return n===void 0&&(n=new R),ou.calculateInertia(this.halfExtents,t,n),n}static calculateInertia(t,n,a){const r=t;a.x=1/12*n*(2*r.y*2*r.y+2*r.z*2*r.z),a.y=1/12*n*(2*r.x*2*r.x+2*r.z*2*r.z),a.z=1/12*n*(2*r.y*2*r.y+2*r.x*2*r.x)}getSideNormals(t,n){const a=t,r=this.halfExtents;if(a[0].set(r.x,0,0),a[1].set(0,r.y,0),a[2].set(0,0,r.z),a[3].set(-r.x,0,0),a[4].set(0,-r.y,0),a[5].set(0,0,-r.z),n!==void 0)for(let l=0;l!==a.length;l++)n.vmult(a[l],a[l]);return a}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,n,a){const r=this.halfExtents,l=[[r.x,r.y,r.z],[-r.x,r.y,r.z],[-r.x,-r.y,r.z],[-r.x,-r.y,-r.z],[r.x,-r.y,-r.z],[r.x,r.y,-r.z],[-r.x,r.y,-r.z],[r.x,-r.y,r.z]];for(let u=0;u<l.length;u++)Xa.set(l[u][0],l[u][1],l[u][2]),n.vmult(Xa,Xa),t.vadd(Xa,Xa),a(Xa.x,Xa.y,Xa.z)}calculateWorldAABB(t,n,a,r){const l=this.halfExtents;Di[0].set(l.x,l.y,l.z),Di[1].set(-l.x,l.y,l.z),Di[2].set(-l.x,-l.y,l.z),Di[3].set(-l.x,-l.y,-l.z),Di[4].set(l.x,-l.y,-l.z),Di[5].set(l.x,l.y,-l.z),Di[6].set(-l.x,l.y,-l.z),Di[7].set(l.x,-l.y,l.z);const u=Di[0];n.vmult(u,u),t.vadd(u,u),r.copy(u),a.copy(u);for(let h=1;h<8;h++){const d=Di[h];n.vmult(d,d),t.vadd(d,d);const p=d.x,g=d.y,_=d.z;p>r.x&&(r.x=p),g>r.y&&(r.y=g),_>r.z&&(r.z=_),p<a.x&&(a.x=p),g<a.y&&(a.y=g),_<a.z&&(a.z=_)}}}const Xa=new R,Di=[new R,new R,new R,new R,new R,new R,new R,new R],Md={DYNAMIC:1,STATIC:2,KINEMATIC:4},Ed={AWAKE:0,SLEEPY:1,SLEEPING:2};class zt extends O_{constructor(t){t===void 0&&(t={}),super(),this.id=zt.idCounter++,this.index=-1,this.world=null,this.vlambda=new R,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new R,this.previousPosition=new R,this.interpolatedPosition=new R,this.initPosition=new R,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new R,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new R,this.force=new R;const n=typeof t.mass=="number"?t.mass:0;this.mass=n,this.invMass=n>0?1/n:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=n<=0?zt.STATIC:zt.DYNAMIC,typeof t.type==typeof zt.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=zt.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new R,this.quaternion=new rn,this.initQuaternion=new rn,this.previousQuaternion=new rn,this.interpolatedQuaternion=new rn,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new R,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new R,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new R,this.invInertia=new R,this.invInertiaWorld=new Ei,this.invMassSolve=0,this.invInertiaSolve=new R,this.invInertiaWorldSolve=new Ei,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new R(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new R(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new ti,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new R,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=zt.AWAKE,this.wakeUpAfterNarrowphase=!1,t===zt.SLEEPING&&this.dispatchEvent(zt.wakeupEvent)}sleep(){this.sleepState=zt.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const n=this.sleepState,a=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),r=this.sleepSpeedLimit**2;n===zt.AWAKE&&a<r?(this.sleepState=zt.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(zt.sleepyEvent)):n===zt.SLEEPY&&a>r?this.wakeUp():n===zt.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(zt.sleepEvent))}}updateSolveMassProperties(){this.sleepState===zt.SLEEPING||this.type===zt.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,n){return n===void 0&&(n=new R),t.vsub(this.position,n),this.quaternion.conjugate().vmult(n,n),n}vectorToLocalFrame(t,n){return n===void 0&&(n=new R),this.quaternion.conjugate().vmult(t,n),n}pointToWorldFrame(t,n){return n===void 0&&(n=new R),this.quaternion.vmult(t,n),n.vadd(this.position,n),n}vectorToWorldFrame(t,n){return n===void 0&&(n=new R),this.quaternion.vmult(t,n),n}addShape(t,n,a){const r=new R,l=new rn;return n&&r.copy(n),a&&l.copy(a),this.shapes.push(t),this.shapeOffsets.push(r),this.shapeOrientations.push(l),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const n=this.shapes.indexOf(t);return n===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(n,1),this.shapeOffsets.splice(n,1),this.shapeOrientations.splice(n,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,n=this.shapeOffsets,a=t.length;let r=0;for(let l=0;l!==a;l++){const u=t[l];u.updateBoundingSphereRadius();const h=n[l].length(),d=u.boundingSphereRadius;h+d>r&&(r=h+d)}this.boundingRadius=r}updateAABB(){const t=this.shapes,n=this.shapeOffsets,a=this.shapeOrientations,r=t.length,l=W1,u=j1,h=this.quaternion,d=this.aabb,p=q1;for(let g=0;g!==r;g++){const _=t[g];h.vmult(n[g],l),l.vadd(this.position,l),h.mult(a[g],u),_.calculateWorldAABB(l,u,p.lowerBound,p.upperBound),g===0?d.copy(p):d.extend(p)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const n=this.invInertia;if(!(n.x===n.y&&n.y===n.z&&!t)){const a=X1,r=Y1;a.setRotationFromQuaternion(this.quaternion),a.transpose(r),a.scale(n,a),a.mmult(r,this.invInertiaWorld)}}applyForce(t,n){if(n===void 0&&(n=new R),this.type!==zt.DYNAMIC)return;this.sleepState===zt.SLEEPING&&this.wakeUp();const a=Z1;n.cross(t,a),this.force.vadd(t,this.force),this.torque.vadd(a,this.torque)}applyLocalForce(t,n){if(n===void 0&&(n=new R),this.type!==zt.DYNAMIC)return;const a=K1,r=Q1;this.vectorToWorldFrame(t,a),this.vectorToWorldFrame(n,r),this.applyForce(a,r)}applyTorque(t){this.type===zt.DYNAMIC&&(this.sleepState===zt.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,n){if(n===void 0&&(n=new R),this.type!==zt.DYNAMIC)return;this.sleepState===zt.SLEEPING&&this.wakeUp();const a=n,r=J1;r.copy(t),r.scale(this.invMass,r),this.velocity.vadd(r,this.velocity);const l=$1;a.cross(t,l),this.invInertiaWorld.vmult(l,l),this.angularVelocity.vadd(l,this.angularVelocity)}applyLocalImpulse(t,n){if(n===void 0&&(n=new R),this.type!==zt.DYNAMIC)return;const a=tw,r=ew;this.vectorToWorldFrame(t,a),this.vectorToWorldFrame(n,r),this.applyImpulse(a,r)}updateMassProperties(){const t=nw;this.invMass=this.mass>0?1/this.mass:0;const n=this.inertia,a=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),ou.calculateInertia(t,this.mass,n),this.invInertia.set(n.x>0&&!a?1/n.x:0,n.y>0&&!a?1/n.y:0,n.z>0&&!a?1/n.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,n){const a=new R;return t.vsub(this.position,a),this.angularVelocity.cross(a,n),this.velocity.vadd(n,n),n}integrate(t,n,a){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===zt.DYNAMIC||this.type===zt.KINEMATIC)||this.sleepState===zt.SLEEPING)return;const r=this.velocity,l=this.angularVelocity,u=this.position,h=this.force,d=this.torque,p=this.quaternion,g=this.invMass,_=this.invInertiaWorld,v=this.linearFactor,S=g*t;r.x+=h.x*S*v.x,r.y+=h.y*S*v.y,r.z+=h.z*S*v.z;const M=_.elements,E=this.angularFactor,x=d.x*E.x,y=d.y*E.y,T=d.z*E.z;l.x+=t*(M[0]*x+M[1]*y+M[2]*T),l.y+=t*(M[3]*x+M[4]*y+M[5]*T),l.z+=t*(M[6]*x+M[7]*y+M[8]*T),u.x+=r.x*t,u.y+=r.y*t,u.z+=r.z*t,p.integrate(this.angularVelocity,t,this.angularFactor,p),n&&(a?p.normalizeFast():p.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}zt.idCounter=0;zt.COLLIDE_EVENT_NAME="collide";zt.DYNAMIC=Md.DYNAMIC;zt.STATIC=Md.STATIC;zt.KINEMATIC=Md.KINEMATIC;zt.AWAKE=Ed.AWAKE;zt.SLEEPY=Ed.SLEEPY;zt.SLEEPING=Ed.SLEEPING;zt.wakeupEvent={type:"wakeup"};zt.sleepyEvent={type:"sleepy"};zt.sleepEvent={type:"sleep"};const W1=new R,j1=new rn,q1=new ti,X1=new Ei,Y1=new Ei;new Ei;const Z1=new R,K1=new R,Q1=new R,J1=new R,$1=new R,tw=new R,ew=new R,nw=new R;class iw{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,n,a){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,n){return!((t.collisionFilterGroup&n.collisionFilterMask)===0||(n.collisionFilterGroup&t.collisionFilterMask)===0||((t.type&zt.STATIC)!==0||t.sleepState===zt.SLEEPING)&&((n.type&zt.STATIC)!==0||n.sleepState===zt.SLEEPING))}intersectionTest(t,n,a,r){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,n,a,r):this.doBoundingSphereBroadphase(t,n,a,r)}doBoundingSphereBroadphase(t,n,a,r){const l=aw;n.position.vsub(t.position,l);const u=(t.boundingRadius+n.boundingRadius)**2;l.lengthSquared()<u&&(a.push(t),r.push(n))}doBoundingBoxBroadphase(t,n,a,r){t.aabbNeedsUpdate&&t.updateAABB(),n.aabbNeedsUpdate&&n.updateAABB(),t.aabb.overlaps(n.aabb)&&(a.push(t),r.push(n))}makePairsUnique(t,n){const a=sw,r=rw,l=ow,u=t.length;for(let h=0;h!==u;h++)r[h]=t[h],l[h]=n[h];t.length=0,n.length=0;for(let h=0;h!==u;h++){const d=r[h].id,p=l[h].id,g=d<p?`${d},${p}`:`${p},${d}`;a[g]=h,a.keys.push(g)}for(let h=0;h!==a.keys.length;h++){const d=a.keys.pop(),p=a[d];t.push(r[p]),n.push(l[p]),delete a[d]}}setWorld(t){}static boundingSphereCheck(t,n){const a=new R;t.position.vsub(n.position,a);const r=t.shapes[0],l=n.shapes[0];return Math.pow(r.boundingSphereRadius+l.boundingSphereRadius,2)>a.lengthSquared()}aabbQuery(t,n,a){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const aw=new R;new R;new rn;new R;const sw={keys:[]},rw=[],ow=[];new R;new R;new R;class lw extends iw{constructor(){super()}collisionPairs(t,n,a){const r=t.bodies,l=r.length;let u,h;for(let d=0;d!==l;d++)for(let p=0;p!==d;p++)u=r[d],h=r[p],this.needBroadphaseCollision(u,h)&&this.intersectionTest(u,h,n,a)}aabbQuery(t,n,a){a===void 0&&(a=[]);for(let r=0;r<t.bodies.length;r++){const l=t.bodies[r];l.aabbNeedsUpdate&&l.updateAABB(),l.aabb.overlaps(n)&&a.push(l)}return a}}class tu{constructor(){this.rayFromWorld=new R,this.rayToWorld=new R,this.hitNormalWorld=new R,this.hitPointWorld=new R,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,n,a,r,l,u,h){this.rayFromWorld.copy(t),this.rayToWorld.copy(n),this.hitNormalWorld.copy(a),this.hitPointWorld.copy(r),this.shape=l,this.body=u,this.distance=h}}let P_,z_,B_,I_,F_,H_,G_;const bd={CLOSEST:1,ANY:2,ALL:4};P_=Pt.types.SPHERE;z_=Pt.types.PLANE;B_=Pt.types.BOX;I_=Pt.types.CYLINDER;F_=Pt.types.CONVEXPOLYHEDRON;H_=Pt.types.HEIGHTFIELD;G_=Pt.types.TRIMESH;class sn{get[P_](){return this._intersectSphere}get[z_](){return this._intersectPlane}get[B_](){return this._intersectBox}get[I_](){return this._intersectConvex}get[F_](){return this._intersectConvex}get[H_](){return this._intersectHeightfield}get[G_](){return this._intersectTrimesh}constructor(t,n){t===void 0&&(t=new R),n===void 0&&(n=new R),this.from=t.clone(),this.to=n.clone(),this.direction=new R,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=sn.ANY,this.result=new tu,this.hasHit=!1,this.callback=a=>{}}intersectWorld(t,n){return this.mode=n.mode||sn.ANY,this.result=n.result||new tu,this.skipBackfaces=!!n.skipBackfaces,this.collisionFilterMask=typeof n.collisionFilterMask<"u"?n.collisionFilterMask:-1,this.collisionFilterGroup=typeof n.collisionFilterGroup<"u"?n.collisionFilterGroup:-1,this.checkCollisionResponse=typeof n.checkCollisionResponse<"u"?n.checkCollisionResponse:!0,n.from&&this.from.copy(n.from),n.to&&this.to.copy(n.to),this.callback=n.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(F0),id.length=0,t.broadphase.aabbQuery(t,F0,id),this.intersectBodies(id),this.hasHit}intersectBody(t,n){n&&(this.result=n,this.updateDirection());const a=this.checkCollisionResponse;if(a&&!t.collisionResponse||(this.collisionFilterGroup&t.collisionFilterMask)===0||(t.collisionFilterGroup&this.collisionFilterMask)===0)return;const r=cw,l=uw;for(let u=0,h=t.shapes.length;u<h;u++){const d=t.shapes[u];if(!(a&&!d.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[u],l),t.quaternion.vmult(t.shapeOffsets[u],r),r.vadd(t.position,r),this.intersectShape(d,l,r,t),this.result.shouldStop))break}}intersectBodies(t,n){n&&(this.result=n,this.updateDirection());for(let a=0,r=t.length;!this.result.shouldStop&&a<r;a++)this.intersectBody(t[a])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,n,a,r){const l=this.from;if(bw(l,this.direction,a)>t.boundingSphereRadius)return;const h=this[t.type];h&&h.call(this,t,n,a,r,t)}_intersectBox(t,n,a,r,l){return this._intersectConvex(t.convexPolyhedronRepresentation,n,a,r,l)}_intersectPlane(t,n,a,r,l){const u=this.from,h=this.to,d=this.direction,p=new R(0,0,1);n.vmult(p,p);const g=new R;u.vsub(a,g);const _=g.dot(p);h.vsub(a,g);const v=g.dot(p);if(_*v>0||u.distanceTo(h)<_)return;const S=p.dot(d);if(Math.abs(S)<this.precision)return;const M=new R,E=new R,x=new R;u.vsub(a,M);const y=-p.dot(M)/S;d.scale(y,E),u.vadd(E,x),this.reportIntersection(p,x,l,r,-1)}getAABB(t){const{lowerBound:n,upperBound:a}=t,r=this.to,l=this.from;n.x=Math.min(r.x,l.x),n.y=Math.min(r.y,l.y),n.z=Math.min(r.z,l.z),a.x=Math.max(r.x,l.x),a.y=Math.max(r.y,l.y),a.z=Math.max(r.z,l.z)}_intersectHeightfield(t,n,a,r,l){t.data,t.elementSize;const u=fw;u.from.copy(this.from),u.to.copy(this.to),Re.pointToLocalFrame(a,n,u.from,u.from),Re.pointToLocalFrame(a,n,u.to,u.to),u.updateDirection();const h=hw;let d,p,g,_;d=p=0,g=_=t.data.length-1;const v=new ti;u.getAABB(v),t.getIndexOfPosition(v.lowerBound.x,v.lowerBound.y,h,!0),d=Math.max(d,h[0]),p=Math.max(p,h[1]),t.getIndexOfPosition(v.upperBound.x,v.upperBound.y,h,!0),g=Math.min(g,h[0]+1),_=Math.min(_,h[1]+1);for(let S=d;S<g;S++)for(let M=p;M<_;M++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(S,M,v),!!v.overlapsRay(u)){if(t.getConvexTrianglePillar(S,M,!1),Re.pointToWorldFrame(a,n,t.pillarOffset,Fc),this._intersectConvex(t.pillarConvex,n,Fc,r,l,H0),this.result.shouldStop)return;t.getConvexTrianglePillar(S,M,!0),Re.pointToWorldFrame(a,n,t.pillarOffset,Fc),this._intersectConvex(t.pillarConvex,n,Fc,r,l,H0)}}}_intersectSphere(t,n,a,r,l){const u=this.from,h=this.to,d=t.radius,p=(h.x-u.x)**2+(h.y-u.y)**2+(h.z-u.z)**2,g=2*((h.x-u.x)*(u.x-a.x)+(h.y-u.y)*(u.y-a.y)+(h.z-u.z)*(u.z-a.z)),_=(u.x-a.x)**2+(u.y-a.y)**2+(u.z-a.z)**2-d**2,v=g**2-4*p*_,S=dw,M=pw;if(!(v<0))if(v===0)u.lerp(h,v,S),S.vsub(a,M),M.normalize(),this.reportIntersection(M,S,l,r,-1);else{const E=(-g-Math.sqrt(v))/(2*p),x=(-g+Math.sqrt(v))/(2*p);if(E>=0&&E<=1&&(u.lerp(h,E,S),S.vsub(a,M),M.normalize(),this.reportIntersection(M,S,l,r,-1)),this.result.shouldStop)return;x>=0&&x<=1&&(u.lerp(h,x,S),S.vsub(a,M),M.normalize(),this.reportIntersection(M,S,l,r,-1))}}_intersectConvex(t,n,a,r,l,u){const h=mw,d=G0,p=u&&u.faceList||null,g=t.faces,_=t.vertices,v=t.faceNormals,S=this.direction,M=this.from,E=this.to,x=M.distanceTo(E),y=p?p.length:g.length,T=this.result;for(let A=0;!T.shouldStop&&A<y;A++){const D=p?p[A]:A,I=g[D],P=v[D],z=n,k=a;d.copy(_[I[0]]),z.vmult(d,d),d.vadd(k,d),d.vsub(M,d),z.vmult(P,h);const U=S.dot(h);if(Math.abs(U)<this.precision)continue;const w=h.dot(d)/U;if(!(w<0)){S.scale(w,Hn),Hn.vadd(M,Hn),Si.copy(_[I[0]]),z.vmult(Si,Si),k.vadd(Si,Si);for(let F=1;!T.shouldStop&&F<I.length-1;F++){Ni.copy(_[I[F]]),Ui.copy(_[I[F+1]]),z.vmult(Ni,Ni),z.vmult(Ui,Ui),k.vadd(Ni,Ni),k.vadd(Ui,Ui);const it=Hn.distanceTo(M);!(sn.pointInTriangle(Hn,Si,Ni,Ui)||sn.pointInTriangle(Hn,Ni,Si,Ui))||it>x||this.reportIntersection(h,Hn,l,r,D)}}}}_intersectTrimesh(t,n,a,r,l,u){const h=gw,d=Mw,p=Ew,g=G0,_=vw,v=_w,S=xw,M=Sw,E=yw,x=t.indices;t.vertices;const y=this.from,T=this.to,A=this.direction;p.position.copy(a),p.quaternion.copy(n),Re.vectorToLocalFrame(a,n,A,_),Re.pointToLocalFrame(a,n,y,v),Re.pointToLocalFrame(a,n,T,S),S.x*=t.scale.x,S.y*=t.scale.y,S.z*=t.scale.z,v.x*=t.scale.x,v.y*=t.scale.y,v.z*=t.scale.z,S.vsub(v,_),_.normalize();const D=v.distanceSquared(S);t.tree.rayQuery(this,p,d);for(let I=0,P=d.length;!this.result.shouldStop&&I!==P;I++){const z=d[I];t.getNormal(z,h),t.getVertex(x[z*3],Si),Si.vsub(v,g);const k=_.dot(h),U=h.dot(g)/k;if(U<0)continue;_.scale(U,Hn),Hn.vadd(v,Hn),t.getVertex(x[z*3+1],Ni),t.getVertex(x[z*3+2],Ui);const w=Hn.distanceSquared(v);!(sn.pointInTriangle(Hn,Ni,Si,Ui)||sn.pointInTriangle(Hn,Si,Ni,Ui))||w>D||(Re.vectorToWorldFrame(n,h,E),Re.pointToWorldFrame(a,n,Hn,M),this.reportIntersection(E,M,l,r,z))}d.length=0}reportIntersection(t,n,a,r,l){const u=this.from,h=this.to,d=u.distanceTo(n),p=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(p.hitFaceIndex=typeof l<"u"?l:-1,this.mode){case sn.ALL:this.hasHit=!0,p.set(u,h,t,n,a,r,d),p.hasHit=!0,this.callback(p);break;case sn.CLOSEST:(d<p.distance||!p.hasHit)&&(this.hasHit=!0,p.hasHit=!0,p.set(u,h,t,n,a,r,d));break;case sn.ANY:this.hasHit=!0,p.hasHit=!0,p.set(u,h,t,n,a,r,d),p.shouldStop=!0;break}}static pointInTriangle(t,n,a,r){r.vsub(n,Ds),a.vsub(n,Qo),t.vsub(n,ad);const l=Ds.dot(Ds),u=Ds.dot(Qo),h=Ds.dot(ad),d=Qo.dot(Qo),p=Qo.dot(ad);let g,_;return(g=d*h-u*p)>=0&&(_=l*p-u*h)>=0&&g+_<l*d-u*u}}sn.CLOSEST=bd.CLOSEST;sn.ANY=bd.ANY;sn.ALL=bd.ALL;const F0=new ti,id=[],Qo=new R,ad=new R,cw=new R,uw=new rn,Hn=new R,Si=new R,Ni=new R,Ui=new R;new R;new tu;const H0={faceList:[0]},Fc=new R,fw=new sn,hw=[],dw=new R,pw=new R,mw=new R;new R;new R;const G0=new R,gw=new R,vw=new R,_w=new R,xw=new R,yw=new R,Sw=new R;new ti;const Mw=[],Ew=new Re,Ds=new R,Hc=new R;function bw(c,t,n){n.vsub(c,Ds);const a=Ds.dot(t);return t.scale(a,Hc),Hc.vadd(c,Hc),n.distanceTo(Hc)}class Tw{static defaults(t,n){t===void 0&&(t={});for(let a in n)a in t||(t[a]=n[a]);return t}}class V0{constructor(){this.spatial=new R,this.rotational=new R}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,n){return t.dot(this.spatial)+n.dot(this.rotational)}}class ol{constructor(t,n,a,r){a===void 0&&(a=-1e6),r===void 0&&(r=1e6),this.id=ol.idCounter++,this.minForce=a,this.maxForce=r,this.bi=t,this.bj=n,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new V0,this.jacobianElementB=new V0,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,n,a){const r=n,l=t,u=a;this.a=4/(u*(1+4*r)),this.b=4*r/(1+4*r),this.eps=4/(u*u*l*(1+4*r))}computeB(t,n,a){const r=this.computeGW(),l=this.computeGq(),u=this.computeGiMf();return-l*t-r*n-u*a}computeGq(){const t=this.jacobianElementA,n=this.jacobianElementB,a=this.bi,r=this.bj,l=a.position,u=r.position;return t.spatial.dot(l)+n.spatial.dot(u)}computeGW(){const t=this.jacobianElementA,n=this.jacobianElementB,a=this.bi,r=this.bj,l=a.velocity,u=r.velocity,h=a.angularVelocity,d=r.angularVelocity;return t.multiplyVectors(l,h)+n.multiplyVectors(u,d)}computeGWlambda(){const t=this.jacobianElementA,n=this.jacobianElementB,a=this.bi,r=this.bj,l=a.vlambda,u=r.vlambda,h=a.wlambda,d=r.wlambda;return t.multiplyVectors(l,h)+n.multiplyVectors(u,d)}computeGiMf(){const t=this.jacobianElementA,n=this.jacobianElementB,a=this.bi,r=this.bj,l=a.force,u=a.torque,h=r.force,d=r.torque,p=a.invMassSolve,g=r.invMassSolve;return l.scale(p,k0),h.scale(g,W0),a.invInertiaWorldSolve.vmult(u,j0),r.invInertiaWorldSolve.vmult(d,q0),t.multiplyVectors(k0,j0)+n.multiplyVectors(W0,q0)}computeGiMGt(){const t=this.jacobianElementA,n=this.jacobianElementB,a=this.bi,r=this.bj,l=a.invMassSolve,u=r.invMassSolve,h=a.invInertiaWorldSolve,d=r.invInertiaWorldSolve;let p=l+u;return h.vmult(t.rotational,Gc),p+=Gc.dot(t.rotational),d.vmult(n.rotational,Gc),p+=Gc.dot(n.rotational),p}addToWlambda(t){const n=this.jacobianElementA,a=this.jacobianElementB,r=this.bi,l=this.bj,u=Aw;r.vlambda.addScaledVector(r.invMassSolve*t,n.spatial,r.vlambda),l.vlambda.addScaledVector(l.invMassSolve*t,a.spatial,l.vlambda),r.invInertiaWorldSolve.vmult(n.rotational,u),r.wlambda.addScaledVector(t,u,r.wlambda),l.invInertiaWorldSolve.vmult(a.rotational,u),l.wlambda.addScaledVector(t,u,l.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}ol.idCounter=0;const k0=new R,W0=new R,j0=new R,q0=new R,Gc=new R,Aw=new R;class ww extends ol{constructor(t,n,a){a===void 0&&(a=1e6),super(t,n,0,a),this.restitution=0,this.ri=new R,this.rj=new R,this.ni=new R}computeB(t){const n=this.a,a=this.b,r=this.bi,l=this.bj,u=this.ri,h=this.rj,d=Rw,p=Cw,g=r.velocity,_=r.angularVelocity;r.force,r.torque;const v=l.velocity,S=l.angularVelocity;l.force,l.torque;const M=Dw,E=this.jacobianElementA,x=this.jacobianElementB,y=this.ni;u.cross(y,d),h.cross(y,p),y.negate(E.spatial),d.negate(E.rotational),x.spatial.copy(y),x.rotational.copy(p),M.copy(l.position),M.vadd(h,M),M.vsub(r.position,M),M.vsub(u,M);const T=y.dot(M),A=this.restitution+1,D=A*v.dot(y)-A*g.dot(y)+S.dot(p)-_.dot(d),I=this.computeGiMf();return-T*n-D*a-t*I}getImpactVelocityAlongNormal(){const t=Nw,n=Uw,a=Lw,r=Ow,l=Pw;return this.bi.position.vadd(this.ri,a),this.bj.position.vadd(this.rj,r),this.bi.getVelocityAtWorldPoint(a,t),this.bj.getVelocityAtWorldPoint(r,n),t.vsub(n,l),this.ni.dot(l)}}const Rw=new R,Cw=new R,Dw=new R,Nw=new R,Uw=new R,Lw=new R,Ow=new R,Pw=new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;class X0 extends ol{constructor(t,n,a){super(t,n,-a,a),this.ri=new R,this.rj=new R,this.t=new R}computeB(t){this.a;const n=this.b;this.bi,this.bj;const a=this.ri,r=this.rj,l=zw,u=Bw,h=this.t;a.cross(h,l),r.cross(h,u);const d=this.jacobianElementA,p=this.jacobianElementB;h.negate(d.spatial),l.negate(d.rotational),p.spatial.copy(h),p.rotational.copy(u);const g=this.computeGW(),_=this.computeGiMf();return-g*n-t*_}}const zw=new R,Bw=new R;class lu{constructor(t,n,a){a=Tw.defaults(a,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=lu.idCounter++,this.materials=[t,n],this.friction=a.friction,this.restitution=a.restitution,this.contactEquationStiffness=a.contactEquationStiffness,this.contactEquationRelaxation=a.contactEquationRelaxation,this.frictionEquationStiffness=a.frictionEquationStiffness,this.frictionEquationRelaxation=a.frictionEquationRelaxation}}lu.idCounter=0;class cu{constructor(t){t===void 0&&(t={});let n="";typeof t=="string"&&(n=t,t={}),this.name=n,this.id=cu.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}}cu.idCounter=0;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new sn;new R;new R;new R;new R(1,0,0),new R(0,1,0),new R(0,0,1);new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;class Y0 extends Pt{constructor(t){if(super({type:Pt.types.SPHERE}),this.radius=t!==void 0?t:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(t,n){n===void 0&&(n=new R);const a=2*t*this.radius*this.radius/5;return n.x=a,n.y=a,n.z=a,n}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(t,n,a,r){const l=this.radius,u=["x","y","z"];for(let h=0;h<u.length;h++){const d=u[h];a[d]=t[d]-l,r[d]=t[d]+l}}}new R;new R;new R;new R;new R;new R;new R;new R;new R;class Iw extends Pt{constructor(){super({type:Pt.types.PLANE}),this.worldNormal=new R,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(t){const n=this.worldNormal;n.set(0,0,1),t.vmult(n,n),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(t,n){return n===void 0&&(n=new R),n}volume(){return Number.MAX_VALUE}calculateWorldAABB(t,n,a,r){ra.set(0,0,1),n.vmult(ra,ra);const l=Number.MAX_VALUE;a.set(-l,-l,-l),r.set(l,l,l),ra.x===1?r.x=t.x:ra.x===-1&&(a.x=t.x),ra.y===1?r.y=t.y:ra.y===-1&&(a.y=t.y),ra.z===1?r.z=t.z:ra.z===-1&&(a.z=t.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}}const ra=new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new ti;new R;new ti;new R;new R;new R;new R;new R;new R;new R;new ti;new R;new Re;new ti;class Fw{constructor(){this.equations=[]}solve(t,n){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const n=this.equations,a=n.indexOf(t);a!==-1&&n.splice(a,1)}removeAllEquations(){this.equations.length=0}}class Hw extends Fw{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,n){let a=0;const r=this.iterations,l=this.tolerance*this.tolerance,u=this.equations,h=u.length,d=n.bodies,p=d.length,g=t;let _,v,S,M,E,x;if(h!==0)for(let D=0;D!==p;D++)d[D].updateSolveMassProperties();const y=Vw,T=kw,A=Gw;y.length=h,T.length=h,A.length=h;for(let D=0;D!==h;D++){const I=u[D];A[D]=0,T[D]=I.computeB(g),y[D]=1/I.computeC()}if(h!==0){for(let P=0;P!==p;P++){const z=d[P],k=z.vlambda,U=z.wlambda;k.set(0,0,0),U.set(0,0,0)}for(a=0;a!==r;a++){M=0;for(let P=0;P!==h;P++){const z=u[P];_=T[P],v=y[P],x=A[P],E=z.computeGWlambda(),S=v*(_-E-z.eps*x),x+S<z.minForce?S=z.minForce-x:x+S>z.maxForce&&(S=z.maxForce-x),A[P]+=S,M+=S>0?S:-S,z.addToWlambda(S)}if(M*M<l)break}for(let P=0;P!==p;P++){const z=d[P],k=z.velocity,U=z.angularVelocity;z.vlambda.vmul(z.linearFactor,z.vlambda),k.vadd(z.vlambda,k),z.wlambda.vmul(z.angularFactor,z.wlambda),U.vadd(z.wlambda,U)}let D=u.length;const I=1/g;for(;D--;)u[D].multiplier=A[D]*I}return a}}const Gw=[],Vw=[],kw=[];class Ww{constructor(){this.objects=[],this.type=Object}release(){const t=arguments.length;for(let n=0;n!==t;n++)this.objects.push(n<0||arguments.length<=n?void 0:arguments[n]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const n=this.objects;for(;n.length>t;)n.pop();for(;n.length<t;)n.push(this.constructObject());return this}}class jw extends Ww{constructor(){super(...arguments),this.type=R}constructObject(){return new R}}const Ge={sphereSphere:Pt.types.SPHERE,spherePlane:Pt.types.SPHERE|Pt.types.PLANE,boxBox:Pt.types.BOX|Pt.types.BOX,sphereBox:Pt.types.SPHERE|Pt.types.BOX,planeBox:Pt.types.PLANE|Pt.types.BOX,convexConvex:Pt.types.CONVEXPOLYHEDRON,sphereConvex:Pt.types.SPHERE|Pt.types.CONVEXPOLYHEDRON,planeConvex:Pt.types.PLANE|Pt.types.CONVEXPOLYHEDRON,boxConvex:Pt.types.BOX|Pt.types.CONVEXPOLYHEDRON,sphereHeightfield:Pt.types.SPHERE|Pt.types.HEIGHTFIELD,boxHeightfield:Pt.types.BOX|Pt.types.HEIGHTFIELD,convexHeightfield:Pt.types.CONVEXPOLYHEDRON|Pt.types.HEIGHTFIELD,sphereParticle:Pt.types.PARTICLE|Pt.types.SPHERE,planeParticle:Pt.types.PLANE|Pt.types.PARTICLE,boxParticle:Pt.types.BOX|Pt.types.PARTICLE,convexParticle:Pt.types.PARTICLE|Pt.types.CONVEXPOLYHEDRON,cylinderCylinder:Pt.types.CYLINDER,sphereCylinder:Pt.types.SPHERE|Pt.types.CYLINDER,planeCylinder:Pt.types.PLANE|Pt.types.CYLINDER,boxCylinder:Pt.types.BOX|Pt.types.CYLINDER,convexCylinder:Pt.types.CONVEXPOLYHEDRON|Pt.types.CYLINDER,heightfieldCylinder:Pt.types.HEIGHTFIELD|Pt.types.CYLINDER,particleCylinder:Pt.types.PARTICLE|Pt.types.CYLINDER,sphereTrimesh:Pt.types.SPHERE|Pt.types.TRIMESH,planeTrimesh:Pt.types.PLANE|Pt.types.TRIMESH};class qw{get[Ge.sphereSphere](){return this.sphereSphere}get[Ge.spherePlane](){return this.spherePlane}get[Ge.boxBox](){return this.boxBox}get[Ge.sphereBox](){return this.sphereBox}get[Ge.planeBox](){return this.planeBox}get[Ge.convexConvex](){return this.convexConvex}get[Ge.sphereConvex](){return this.sphereConvex}get[Ge.planeConvex](){return this.planeConvex}get[Ge.boxConvex](){return this.boxConvex}get[Ge.sphereHeightfield](){return this.sphereHeightfield}get[Ge.boxHeightfield](){return this.boxHeightfield}get[Ge.convexHeightfield](){return this.convexHeightfield}get[Ge.sphereParticle](){return this.sphereParticle}get[Ge.planeParticle](){return this.planeParticle}get[Ge.boxParticle](){return this.boxParticle}get[Ge.convexParticle](){return this.convexParticle}get[Ge.cylinderCylinder](){return this.convexConvex}get[Ge.sphereCylinder](){return this.sphereConvex}get[Ge.planeCylinder](){return this.planeConvex}get[Ge.boxCylinder](){return this.boxConvex}get[Ge.convexCylinder](){return this.convexConvex}get[Ge.heightfieldCylinder](){return this.heightfieldCylinder}get[Ge.particleCylinder](){return this.particleCylinder}get[Ge.sphereTrimesh](){return this.sphereTrimesh}get[Ge.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new jw,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,n,a,r,l,u){let h;this.contactPointPool.length?(h=this.contactPointPool.pop(),h.bi=t,h.bj=n):h=new ww(t,n),h.enabled=t.collisionResponse&&n.collisionResponse&&a.collisionResponse&&r.collisionResponse;const d=this.currentContactMaterial;h.restitution=d.restitution,h.setSpookParams(d.contactEquationStiffness,d.contactEquationRelaxation,this.world.dt);const p=a.material||t.material,g=r.material||n.material;return p&&g&&p.restitution>=0&&g.restitution>=0&&(h.restitution=p.restitution*g.restitution),h.si=l||a,h.sj=u||r,h}createFrictionEquationsFromContact(t,n){const a=t.bi,r=t.bj,l=t.si,u=t.sj,h=this.world,d=this.currentContactMaterial;let p=d.friction;const g=l.material||a.material,_=u.material||r.material;if(g&&_&&g.friction>=0&&_.friction>=0&&(p=g.friction*_.friction),p>0){const v=p*(h.frictionGravity||h.gravity).length();let S=a.invMass+r.invMass;S>0&&(S=1/S);const M=this.frictionEquationPool,E=M.length?M.pop():new X0(a,r,v*S),x=M.length?M.pop():new X0(a,r,v*S);return E.bi=x.bi=a,E.bj=x.bj=r,E.minForce=x.minForce=-v*S,E.maxForce=x.maxForce=v*S,E.ri.copy(t.ri),E.rj.copy(t.rj),x.ri.copy(t.ri),x.rj.copy(t.rj),t.ni.tangents(E.t,x.t),E.setSpookParams(d.frictionEquationStiffness,d.frictionEquationRelaxation,h.dt),x.setSpookParams(d.frictionEquationStiffness,d.frictionEquationRelaxation,h.dt),E.enabled=x.enabled=t.enabled,n.push(E,x),!0}return!1}createFrictionFromAverage(t){let n=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(n,this.frictionResult)||t===1)return;const a=this.frictionResult[this.frictionResult.length-2],r=this.frictionResult[this.frictionResult.length-1];Ts.setZero(),Nr.setZero(),Ur.setZero();const l=n.bi;n.bj;for(let h=0;h!==t;h++)n=this.result[this.result.length-1-h],n.bi!==l?(Ts.vadd(n.ni,Ts),Nr.vadd(n.ri,Nr),Ur.vadd(n.rj,Ur)):(Ts.vsub(n.ni,Ts),Nr.vadd(n.rj,Nr),Ur.vadd(n.ri,Ur));const u=1/t;Nr.scale(u,a.ri),Ur.scale(u,a.rj),r.ri.copy(a.ri),r.rj.copy(a.rj),Ts.normalize(),Ts.tangents(a.t,r.t)}getContacts(t,n,a,r,l,u,h){this.contactPointPool=l,this.frictionEquationPool=h,this.result=r,this.frictionResult=u;const d=Zw,p=Kw,g=Xw,_=Yw;for(let v=0,S=t.length;v!==S;v++){const M=t[v],E=n[v];let x=null;M.material&&E.material&&(x=a.getContactMaterial(M.material,E.material)||null);const y=M.type&zt.KINEMATIC&&E.type&zt.STATIC||M.type&zt.STATIC&&E.type&zt.KINEMATIC||M.type&zt.KINEMATIC&&E.type&zt.KINEMATIC;for(let T=0;T<M.shapes.length;T++){M.quaternion.mult(M.shapeOrientations[T],d),M.quaternion.vmult(M.shapeOffsets[T],g),g.vadd(M.position,g);const A=M.shapes[T];for(let D=0;D<E.shapes.length;D++){E.quaternion.mult(E.shapeOrientations[D],p),E.quaternion.vmult(E.shapeOffsets[D],_),_.vadd(E.position,_);const I=E.shapes[D];if(!(A.collisionFilterMask&I.collisionFilterGroup&&I.collisionFilterMask&A.collisionFilterGroup)||g.distanceTo(_)>A.boundingSphereRadius+I.boundingSphereRadius)continue;let P=null;A.material&&I.material&&(P=a.getContactMaterial(A.material,I.material)||null),this.currentContactMaterial=P||x||a.defaultContactMaterial;const z=A.type|I.type,k=this[z];if(k){let U=!1;A.type<I.type?U=k.call(this,A,I,g,_,d,p,M,E,A,I,y):U=k.call(this,I,A,_,g,p,d,E,M,A,I,y),U&&y&&(a.shapeOverlapKeeper.set(A.id,I.id),a.bodyOverlapKeeper.set(M.id,E.id))}}}}}sphereSphere(t,n,a,r,l,u,h,d,p,g,_){if(_)return a.distanceSquared(r)<(t.radius+n.radius)**2;const v=this.createContactEquation(h,d,t,n,p,g);r.vsub(a,v.ni),v.ni.normalize(),v.ri.copy(v.ni),v.rj.copy(v.ni),v.ri.scale(t.radius,v.ri),v.rj.scale(-n.radius,v.rj),v.ri.vadd(a,v.ri),v.ri.vsub(h.position,v.ri),v.rj.vadd(r,v.rj),v.rj.vsub(d.position,v.rj),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}spherePlane(t,n,a,r,l,u,h,d,p,g,_){const v=this.createContactEquation(h,d,t,n,p,g);if(v.ni.set(0,0,1),u.vmult(v.ni,v.ni),v.ni.negate(v.ni),v.ni.normalize(),v.ni.scale(t.radius,v.ri),a.vsub(r,Vc),v.ni.scale(v.ni.dot(Vc),Z0),Vc.vsub(Z0,v.rj),-Vc.dot(v.ni)<=t.radius){if(_)return!0;const S=v.ri,M=v.rj;S.vadd(a,S),S.vsub(h.position,S),M.vadd(r,M),M.vsub(d.position,M),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}boxBox(t,n,a,r,l,u,h,d,p,g,_){return t.convexPolyhedronRepresentation.material=t.material,n.convexPolyhedronRepresentation.material=n.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,n.convexPolyhedronRepresentation.collisionResponse=n.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,n.convexPolyhedronRepresentation,a,r,l,u,h,d,t,n,_)}sphereBox(t,n,a,r,l,u,h,d,p,g,_){const v=this.v3pool,S=MR;a.vsub(r,kc),n.getSideNormals(S,u);const M=t.radius;let E=!1;const x=bR,y=TR,T=AR;let A=null,D=0,I=0,P=0,z=null;for(let L=0,Z=S.length;L!==Z&&E===!1;L++){const W=xR;W.copy(S[L]);const ht=W.length();W.normalize();const B=kc.dot(W);if(B<ht+M&&B>0){const $=yR,ot=SR;$.copy(S[(L+1)%3]),ot.copy(S[(L+2)%3]);const yt=$.length(),tt=ot.length();$.normalize(),ot.normalize();const dt=kc.dot($),_t=kc.dot(ot);if(dt<yt&&dt>-yt&&_t<tt&&_t>-tt){const At=Math.abs(B-ht-M);if((z===null||At<z)&&(z=At,I=dt,P=_t,A=ht,x.copy(W),y.copy($),T.copy(ot),D++,_))return!0}}}if(D){E=!0;const L=this.createContactEquation(h,d,t,n,p,g);x.scale(-M,L.ri),L.ni.copy(x),L.ni.negate(L.ni),x.scale(A,x),y.scale(I,y),x.vadd(y,x),T.scale(P,T),x.vadd(T,L.rj),L.ri.vadd(a,L.ri),L.ri.vsub(h.position,L.ri),L.rj.vadd(r,L.rj),L.rj.vsub(d.position,L.rj),this.result.push(L),this.createFrictionEquationsFromContact(L,this.frictionResult)}let k=v.get();const U=ER;for(let L=0;L!==2&&!E;L++)for(let Z=0;Z!==2&&!E;Z++)for(let W=0;W!==2&&!E;W++)if(k.set(0,0,0),L?k.vadd(S[0],k):k.vsub(S[0],k),Z?k.vadd(S[1],k):k.vsub(S[1],k),W?k.vadd(S[2],k):k.vsub(S[2],k),r.vadd(k,U),U.vsub(a,U),U.lengthSquared()<M*M){if(_)return!0;E=!0;const ht=this.createContactEquation(h,d,t,n,p,g);ht.ri.copy(U),ht.ri.normalize(),ht.ni.copy(ht.ri),ht.ri.scale(M,ht.ri),ht.rj.copy(k),ht.ri.vadd(a,ht.ri),ht.ri.vsub(h.position,ht.ri),ht.rj.vadd(r,ht.rj),ht.rj.vsub(d.position,ht.rj),this.result.push(ht),this.createFrictionEquationsFromContact(ht,this.frictionResult)}v.release(k),k=null;const w=v.get(),F=v.get(),it=v.get(),V=v.get(),Q=v.get(),Y=S.length;for(let L=0;L!==Y&&!E;L++)for(let Z=0;Z!==Y&&!E;Z++)if(L%3!==Z%3){S[Z].cross(S[L],w),w.normalize(),S[L].vadd(S[Z],F),it.copy(a),it.vsub(F,it),it.vsub(r,it);const W=it.dot(w);w.scale(W,V);let ht=0;for(;ht===L%3||ht===Z%3;)ht++;Q.copy(a),Q.vsub(V,Q),Q.vsub(F,Q),Q.vsub(r,Q);const B=Math.abs(W),$=Q.length();if(B<S[ht].length()&&$<M){if(_)return!0;E=!0;const ot=this.createContactEquation(h,d,t,n,p,g);F.vadd(V,ot.rj),ot.rj.copy(ot.rj),Q.negate(ot.ni),ot.ni.normalize(),ot.ri.copy(ot.rj),ot.ri.vadd(r,ot.ri),ot.ri.vsub(a,ot.ri),ot.ri.normalize(),ot.ri.scale(M,ot.ri),ot.ri.vadd(a,ot.ri),ot.ri.vsub(h.position,ot.ri),ot.rj.vadd(r,ot.rj),ot.rj.vsub(d.position,ot.rj),this.result.push(ot),this.createFrictionEquationsFromContact(ot,this.frictionResult)}}v.release(w,F,it,V,Q)}planeBox(t,n,a,r,l,u,h,d,p,g,_){return n.convexPolyhedronRepresentation.material=n.material,n.convexPolyhedronRepresentation.collisionResponse=n.collisionResponse,n.convexPolyhedronRepresentation.id=n.id,this.planeConvex(t,n.convexPolyhedronRepresentation,a,r,l,u,h,d,t,n,_)}convexConvex(t,n,a,r,l,u,h,d,p,g,_,v,S){const M=GR;if(!(a.distanceTo(r)>t.boundingSphereRadius+n.boundingSphereRadius)&&t.findSeparatingAxis(n,a,l,r,u,M,v,S)){const E=[],x=VR;t.clipAgainstHull(a,l,n,r,u,M,-100,100,E);let y=0;for(let T=0;T!==E.length;T++){if(_)return!0;const A=this.createContactEquation(h,d,t,n,p,g),D=A.ri,I=A.rj;M.negate(A.ni),E[T].normal.negate(x),x.scale(E[T].depth,x),E[T].point.vadd(x,D),I.copy(E[T].point),D.vsub(a,D),I.vsub(r,I),D.vadd(a,D),D.vsub(h.position,D),I.vadd(r,I),I.vsub(d.position,I),this.result.push(A),y++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(A,this.frictionResult)}this.enableFrictionReduction&&y&&this.createFrictionFromAverage(y)}}sphereConvex(t,n,a,r,l,u,h,d,p,g,_){const v=this.v3pool;a.vsub(r,wR);const S=n.faceNormals,M=n.faces,E=n.vertices,x=t.radius;let y=!1;for(let T=0;T!==E.length;T++){const A=E[T],D=NR;u.vmult(A,D),r.vadd(D,D);const I=DR;if(D.vsub(a,I),I.lengthSquared()<x*x){if(_)return!0;y=!0;const P=this.createContactEquation(h,d,t,n,p,g);P.ri.copy(I),P.ri.normalize(),P.ni.copy(P.ri),P.ri.scale(x,P.ri),D.vsub(r,P.rj),P.ri.vadd(a,P.ri),P.ri.vsub(h.position,P.ri),P.rj.vadd(r,P.rj),P.rj.vsub(d.position,P.rj),this.result.push(P),this.createFrictionEquationsFromContact(P,this.frictionResult);return}}for(let T=0,A=M.length;T!==A&&y===!1;T++){const D=S[T],I=M[T],P=UR;u.vmult(D,P);const z=LR;u.vmult(E[I[0]],z),z.vadd(r,z);const k=OR;P.scale(-x,k),a.vadd(k,k);const U=PR;k.vsub(z,U);const w=U.dot(P),F=zR;if(a.vsub(z,F),w<0&&F.dot(P)>0){const it=[];for(let V=0,Q=I.length;V!==Q;V++){const Y=v.get();u.vmult(E[I[V]],Y),r.vadd(Y,Y),it.push(Y)}if(_R(it,P,a)){if(_)return!0;y=!0;const V=this.createContactEquation(h,d,t,n,p,g);P.scale(-x,V.ri),P.negate(V.ni);const Q=v.get();P.scale(-w,Q);const Y=v.get();P.scale(-x,Y),a.vsub(r,V.rj),V.rj.vadd(Y,V.rj),V.rj.vadd(Q,V.rj),V.rj.vadd(r,V.rj),V.rj.vsub(d.position,V.rj),V.ri.vadd(a,V.ri),V.ri.vsub(h.position,V.ri),v.release(Q),v.release(Y),this.result.push(V),this.createFrictionEquationsFromContact(V,this.frictionResult);for(let L=0,Z=it.length;L!==Z;L++)v.release(it[L]);return}else for(let V=0;V!==I.length;V++){const Q=v.get(),Y=v.get();u.vmult(E[I[(V+1)%I.length]],Q),u.vmult(E[I[(V+2)%I.length]],Y),r.vadd(Q,Q),r.vadd(Y,Y);const L=RR;Y.vsub(Q,L);const Z=CR;L.unit(Z);const W=v.get(),ht=v.get();a.vsub(Q,ht);const B=ht.dot(Z);Z.scale(B,W),W.vadd(Q,W);const $=v.get();if(W.vsub(a,$),B>0&&B*B<L.lengthSquared()&&$.lengthSquared()<x*x){if(_)return!0;const ot=this.createContactEquation(h,d,t,n,p,g);W.vsub(r,ot.rj),W.vsub(a,ot.ni),ot.ni.normalize(),ot.ni.scale(x,ot.ri),ot.rj.vadd(r,ot.rj),ot.rj.vsub(d.position,ot.rj),ot.ri.vadd(a,ot.ri),ot.ri.vsub(h.position,ot.ri),this.result.push(ot),this.createFrictionEquationsFromContact(ot,this.frictionResult);for(let yt=0,tt=it.length;yt!==tt;yt++)v.release(it[yt]);v.release(Q),v.release(Y),v.release(W),v.release($),v.release(ht);return}v.release(Q),v.release(Y),v.release(W),v.release($),v.release(ht)}for(let V=0,Q=it.length;V!==Q;V++)v.release(it[V])}}}planeConvex(t,n,a,r,l,u,h,d,p,g,_){const v=BR,S=IR;S.set(0,0,1),l.vmult(S,S);let M=0;const E=FR;for(let x=0;x!==n.vertices.length;x++)if(v.copy(n.vertices[x]),u.vmult(v,v),r.vadd(v,v),v.vsub(a,E),S.dot(E)<=0){if(_)return!0;const T=this.createContactEquation(h,d,t,n,p,g),A=HR;S.scale(S.dot(E),A),v.vsub(A,A),A.vsub(a,T.ri),T.ni.copy(S),v.vsub(r,T.rj),T.ri.vadd(a,T.ri),T.ri.vsub(h.position,T.ri),T.rj.vadd(r,T.rj),T.rj.vsub(d.position,T.rj),this.result.push(T),M++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(T,this.frictionResult)}this.enableFrictionReduction&&M&&this.createFrictionFromAverage(M)}boxConvex(t,n,a,r,l,u,h,d,p,g,_){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,n,a,r,l,u,h,d,t,n,_)}sphereHeightfield(t,n,a,r,l,u,h,d,p,g,_){const v=n.data,S=t.radius,M=n.elementSize,E=tC,x=$R;Re.pointToLocalFrame(r,u,a,x);let y=Math.floor((x.x-S)/M)-1,T=Math.ceil((x.x+S)/M)+1,A=Math.floor((x.y-S)/M)-1,D=Math.ceil((x.y+S)/M)+1;if(T<0||D<0||y>v.length||A>v[0].length)return;y<0&&(y=0),T<0&&(T=0),A<0&&(A=0),D<0&&(D=0),y>=v.length&&(y=v.length-1),T>=v.length&&(T=v.length-1),D>=v[0].length&&(D=v[0].length-1),A>=v[0].length&&(A=v[0].length-1);const I=[];n.getRectMinMax(y,A,T,D,I);const P=I[0],z=I[1];if(x.z-S>z||x.z+S<P)return;const k=this.result;for(let U=y;U<T;U++)for(let w=A;w<D;w++){const F=k.length;let it=!1;if(n.getConvexTrianglePillar(U,w,!1),Re.pointToWorldFrame(r,u,n.pillarOffset,E),a.distanceTo(E)<n.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(it=this.sphereConvex(t,n.pillarConvex,a,E,l,u,h,d,t,n,_)),_&&it||(n.getConvexTrianglePillar(U,w,!0),Re.pointToWorldFrame(r,u,n.pillarOffset,E),a.distanceTo(E)<n.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(it=this.sphereConvex(t,n.pillarConvex,a,E,l,u,h,d,t,n,_)),_&&it))return!0;if(k.length-F>2)return}}boxHeightfield(t,n,a,r,l,u,h,d,p,g,_){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,n,a,r,l,u,h,d,t,n,_)}convexHeightfield(t,n,a,r,l,u,h,d,p,g,_){const v=n.data,S=n.elementSize,M=t.boundingSphereRadius,E=QR,x=JR,y=KR;Re.pointToLocalFrame(r,u,a,y);let T=Math.floor((y.x-M)/S)-1,A=Math.ceil((y.x+M)/S)+1,D=Math.floor((y.y-M)/S)-1,I=Math.ceil((y.y+M)/S)+1;if(A<0||I<0||T>v.length||D>v[0].length)return;T<0&&(T=0),A<0&&(A=0),D<0&&(D=0),I<0&&(I=0),T>=v.length&&(T=v.length-1),A>=v.length&&(A=v.length-1),I>=v[0].length&&(I=v[0].length-1),D>=v[0].length&&(D=v[0].length-1);const P=[];n.getRectMinMax(T,D,A,I,P);const z=P[0],k=P[1];if(!(y.z-M>k||y.z+M<z))for(let U=T;U<A;U++)for(let w=D;w<I;w++){let F=!1;if(n.getConvexTrianglePillar(U,w,!1),Re.pointToWorldFrame(r,u,n.pillarOffset,E),a.distanceTo(E)<n.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(F=this.convexConvex(t,n.pillarConvex,a,E,l,u,h,d,null,null,_,x,null)),_&&F||(n.getConvexTrianglePillar(U,w,!0),Re.pointToWorldFrame(r,u,n.pillarOffset,E),a.distanceTo(E)<n.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(F=this.convexConvex(t,n.pillarConvex,a,E,l,u,h,d,null,null,_,x,null)),_&&F))return!0}}sphereParticle(t,n,a,r,l,u,h,d,p,g,_){const v=qR;if(v.set(0,0,1),r.vsub(a,v),v.lengthSquared()<=t.radius*t.radius){if(_)return!0;const M=this.createContactEquation(d,h,n,t,p,g);v.normalize(),M.rj.copy(v),M.rj.scale(t.radius,M.rj),M.ni.copy(v),M.ni.negate(M.ni),M.ri.set(0,0,0),this.result.push(M),this.createFrictionEquationsFromContact(M,this.frictionResult)}}planeParticle(t,n,a,r,l,u,h,d,p,g,_){const v=kR;v.set(0,0,1),h.quaternion.vmult(v,v);const S=WR;if(r.vsub(h.position,S),v.dot(S)<=0){if(_)return!0;const E=this.createContactEquation(d,h,n,t,p,g);E.ni.copy(v),E.ni.negate(E.ni),E.ri.set(0,0,0);const x=jR;v.scale(v.dot(r),x),r.vsub(x,x),E.rj.copy(x),this.result.push(E),this.createFrictionEquationsFromContact(E,this.frictionResult)}}boxParticle(t,n,a,r,l,u,h,d,p,g,_){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,n,a,r,l,u,h,d,t,n,_)}convexParticle(t,n,a,r,l,u,h,d,p,g,_){let v=-1;const S=YR,M=ZR;let E=null;const x=XR;if(x.copy(r),x.vsub(a,x),l.conjugate(K0),K0.vmult(x,x),t.pointIsInside(x)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(a,l),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(l);for(let y=0,T=t.faces.length;y!==T;y++){const A=[t.worldVertices[t.faces[y][0]]],D=t.worldFaceNormals[y];r.vsub(A[0],Q0);const I=-D.dot(Q0);if(E===null||Math.abs(I)<Math.abs(E)){if(_)return!0;E=I,v=y,S.copy(D)}}if(v!==-1){const y=this.createContactEquation(d,h,n,t,p,g);S.scale(E,M),M.vadd(r,M),M.vsub(a,M),y.rj.copy(M),S.negate(y.ni),y.ri.set(0,0,0);const T=y.ri,A=y.rj;T.vadd(r,T),T.vsub(d.position,T),A.vadd(a,A),A.vsub(h.position,A),this.result.push(y),this.createFrictionEquationsFromContact(y,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,n,a,r,l,u,h,d,p,g,_){return this.convexHeightfield(n,t,r,a,u,l,d,h,p,g,_)}particleCylinder(t,n,a,r,l,u,h,d,p,g,_){return this.convexParticle(n,t,r,a,u,l,d,h,p,g,_)}sphereTrimesh(t,n,a,r,l,u,h,d,p,g,_){const v=aR,S=sR,M=rR,E=oR,x=lR,y=cR,T=dR,A=iR,D=eR,I=pR;Re.pointToLocalFrame(r,u,a,x);const P=t.radius;T.lowerBound.set(x.x-P,x.y-P,x.z-P),T.upperBound.set(x.x+P,x.y+P,x.z+P),n.getTrianglesInAABB(T,I);const z=nR,k=t.radius*t.radius;for(let V=0;V<I.length;V++)for(let Q=0;Q<3;Q++)if(n.getVertex(n.indices[I[V]*3+Q],z),z.vsub(x,D),D.lengthSquared()<=k){if(A.copy(z),Re.pointToWorldFrame(r,u,A,z),z.vsub(a,D),_)return!0;let Y=this.createContactEquation(h,d,t,n,p,g);Y.ni.copy(D),Y.ni.normalize(),Y.ri.copy(Y.ni),Y.ri.scale(t.radius,Y.ri),Y.ri.vadd(a,Y.ri),Y.ri.vsub(h.position,Y.ri),Y.rj.copy(z),Y.rj.vsub(d.position,Y.rj),this.result.push(Y),this.createFrictionEquationsFromContact(Y,this.frictionResult)}for(let V=0;V<I.length;V++)for(let Q=0;Q<3;Q++){n.getVertex(n.indices[I[V]*3+Q],v),n.getVertex(n.indices[I[V]*3+(Q+1)%3],S),S.vsub(v,M),x.vsub(S,y);const Y=y.dot(M);x.vsub(v,y);let L=y.dot(M);if(L>0&&Y<0&&(x.vsub(v,y),E.copy(M),E.normalize(),L=y.dot(E),E.scale(L,y),y.vadd(v,y),y.distanceTo(x)<t.radius)){if(_)return!0;const W=this.createContactEquation(h,d,t,n,p,g);y.vsub(x,W.ni),W.ni.normalize(),W.ni.scale(t.radius,W.ri),W.ri.vadd(a,W.ri),W.ri.vsub(h.position,W.ri),Re.pointToWorldFrame(r,u,y,y),y.vsub(d.position,W.rj),Re.vectorToWorldFrame(u,W.ni,W.ni),Re.vectorToWorldFrame(u,W.ri,W.ri),this.result.push(W),this.createFrictionEquationsFromContact(W,this.frictionResult)}}const U=uR,w=fR,F=hR,it=tR;for(let V=0,Q=I.length;V!==Q;V++){n.getTriangleVertices(I[V],U,w,F),n.getNormal(I[V],it),x.vsub(U,y);let Y=y.dot(it);if(it.scale(Y,y),x.vsub(y,y),Y=y.distanceTo(x),sn.pointInTriangle(y,U,w,F)&&Y<t.radius){if(_)return!0;let L=this.createContactEquation(h,d,t,n,p,g);y.vsub(x,L.ni),L.ni.normalize(),L.ni.scale(t.radius,L.ri),L.ri.vadd(a,L.ri),L.ri.vsub(h.position,L.ri),Re.pointToWorldFrame(r,u,y,y),y.vsub(d.position,L.rj),Re.vectorToWorldFrame(u,L.ni,L.ni),Re.vectorToWorldFrame(u,L.ri,L.ri),this.result.push(L),this.createFrictionEquationsFromContact(L,this.frictionResult)}}I.length=0}planeTrimesh(t,n,a,r,l,u,h,d,p,g,_){const v=new R,S=Qw;S.set(0,0,1),l.vmult(S,S);for(let M=0;M<n.vertices.length/3;M++){n.getVertex(M,v);const E=new R;E.copy(v),Re.pointToWorldFrame(r,u,E,v);const x=Jw;if(v.vsub(a,x),S.dot(x)<=0){if(_)return!0;const T=this.createContactEquation(h,d,t,n,p,g);T.ni.copy(S);const A=$w;S.scale(x.dot(S),A),v.vsub(A,A),T.ri.copy(A),T.ri.vsub(h.position,T.ri),T.rj.copy(v),T.rj.vsub(d.position,T.rj),this.result.push(T),this.createFrictionEquationsFromContact(T,this.frictionResult)}}}}const Ts=new R,Nr=new R,Ur=new R,Xw=new R,Yw=new R,Zw=new rn,Kw=new rn,Qw=new R,Jw=new R,$w=new R,tR=new R,eR=new R;new R;const nR=new R,iR=new R,aR=new R,sR=new R,rR=new R,oR=new R,lR=new R,cR=new R,uR=new R,fR=new R,hR=new R,dR=new ti,pR=[],Vc=new R,Z0=new R,mR=new R,gR=new R,vR=new R;function _R(c,t,n){let a=null;const r=c.length;for(let l=0;l!==r;l++){const u=c[l],h=mR;c[(l+1)%r].vsub(u,h);const d=gR;h.cross(t,d);const p=vR;n.vsub(u,p);const g=d.dot(p);if(a===null||g>0&&a===!0||g<=0&&a===!1){a===null&&(a=g>0);continue}else return!1}return!0}const kc=new R,xR=new R,yR=new R,SR=new R,MR=[new R,new R,new R,new R,new R,new R],ER=new R,bR=new R,TR=new R,AR=new R,wR=new R,RR=new R,CR=new R,DR=new R,NR=new R,UR=new R,LR=new R,OR=new R,PR=new R,zR=new R;new R;new R;const BR=new R,IR=new R,FR=new R,HR=new R,GR=new R,VR=new R,kR=new R,WR=new R,jR=new R,qR=new R,K0=new rn,XR=new R;new R;const YR=new R,Q0=new R,ZR=new R,KR=new R,QR=new R,JR=[0],$R=new R,tC=new R;class J0{constructor(){this.current=[],this.previous=[]}getKey(t,n){if(n<t){const a=n;n=t,t=a}return t<<16|n}set(t,n){const a=this.getKey(t,n),r=this.current;let l=0;for(;a>r[l];)l++;if(a!==r[l]){for(let u=r.length-1;u>=l;u--)r[u+1]=r[u];r[l]=a}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,n){const a=this.current,r=this.previous,l=a.length,u=r.length;let h=0;for(let d=0;d<l;d++){let p=!1;const g=a[d];for(;g>r[h];)h++;p=g===r[h],p||$0(t,g)}h=0;for(let d=0;d<u;d++){let p=!1;const g=r[d];for(;g>a[h];)h++;p=a[h]===g,p||$0(n,g)}}}function $0(c,t){c.push((t&4294901760)>>16,t&65535)}const sd=(c,t)=>c<t?`${c}-${t}`:`${t}-${c}`;class eC{constructor(){this.data={keys:[]}}get(t,n){const a=sd(t,n);return this.data[a]}set(t,n,a){const r=sd(t,n);this.get(t,n)||this.data.keys.push(r),this.data[r]=a}delete(t,n){const a=sd(t,n),r=this.data.keys.indexOf(a);r!==-1&&this.data.keys.splice(r,1),delete this.data[a]}reset(){const t=this.data,n=t.keys;for(;n.length>0;){const a=n.pop();delete t[a]}}}class nC extends O_{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new R,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new R,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new lw,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new Hw,this.constraints=[],this.narrowphase=new qw(this),this.collisionMatrix=new B0,this.collisionMatrixPrevious=new B0,this.bodyOverlapKeeper=new J0,this.shapeOverlapKeeper=new J0,this.contactmaterials=[],this.contactMaterialTable=new eC,this.defaultMaterial=new cu("default"),this.defaultContactMaterial=new lu(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,n){return this.contactMaterialTable.get(t.id,n.id)}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const n=this.constraints.indexOf(t);n!==-1&&this.constraints.splice(n,1)}rayTest(t,n,a){a instanceof tu?this.raycastClosest(t,n,{skipBackfaces:!0},a):this.raycastAll(t,n,{skipBackfaces:!0},a)}raycastAll(t,n,a,r){return a===void 0&&(a={}),a.mode=sn.ALL,a.from=t,a.to=n,a.callback=r,rd.intersectWorld(this,a)}raycastAny(t,n,a,r){return a===void 0&&(a={}),a.mode=sn.ANY,a.from=t,a.to=n,a.result=r,rd.intersectWorld(this,a)}raycastClosest(t,n,a,r){return a===void 0&&(a={}),a.mode=sn.CLOSEST,a.from=t,a.to=n,a.result=r,rd.intersectWorld(this,a)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof zt&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const n=this.bodies.length-1,a=this.bodies,r=a.indexOf(t);if(r!==-1){a.splice(r,1);for(let l=0;l!==a.length;l++)a[l].index=l;this.collisionMatrix.setNumObjects(n),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const n=this.bodies;for(let a=0;a<n.length;a++){const r=n[a].shapes;for(let l=0;l<r.length;l++){const u=r[l];if(u.id===t)return u}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){const n=this.contactmaterials.indexOf(t);n!==-1&&(this.contactmaterials.splice(n,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,n){t===void 0&&(t=1/60),n===void 0&&(n=10);const a=un.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,n);else{const r=a-this.lastCallTime;this.step(t,r,n)}this.lastCallTime=a}step(t,n,a){if(a===void 0&&(a=10),n===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=n;const r=un.now();let l=0;for(;this.accumulator>=t&&l<a&&(this.internalStep(t),this.accumulator-=t,l++,!(un.now()-r>t*1e3)););this.accumulator=this.accumulator%t;const u=this.accumulator/t;for(let h=0;h!==this.bodies.length;h++){const d=this.bodies[h];d.previousPosition.lerp(d.position,u,d.interpolatedPosition),d.previousQuaternion.slerp(d.quaternion,u,d.interpolatedQuaternion),d.previousQuaternion.normalize()}this.time+=n}}internalStep(t){this.dt=t;const n=this.contacts,a=oC,r=lC,l=this.bodies.length,u=this.bodies,h=this.solver,d=this.gravity,p=this.doProfiling,g=this.profile,_=zt.DYNAMIC;let v=-1/0;const S=this.constraints,M=rC;d.length();const E=d.x,x=d.y,y=d.z;let T=0;for(p&&(v=un.now()),T=0;T!==l;T++){const V=u[T];if(V.type===_){const Q=V.force,Y=V.mass;Q.x+=Y*E,Q.y+=Y*x,Q.z+=Y*y}}for(let V=0,Q=this.subsystems.length;V!==Q;V++)this.subsystems[V].update();p&&(v=un.now()),a.length=0,r.length=0,this.broadphase.collisionPairs(this,a,r),p&&(g.broadphase=un.now()-v);let A=S.length;for(T=0;T!==A;T++){const V=S[T];if(!V.collideConnected)for(let Q=a.length-1;Q>=0;Q-=1)(V.bodyA===a[Q]&&V.bodyB===r[Q]||V.bodyB===a[Q]&&V.bodyA===r[Q])&&(a.splice(Q,1),r.splice(Q,1))}this.collisionMatrixTick(),p&&(v=un.now());const D=sC,I=n.length;for(T=0;T!==I;T++)D.push(n[T]);n.length=0;const P=this.frictionEquations.length;for(T=0;T!==P;T++)M.push(this.frictionEquations[T]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(a,r,this,n,D,this.frictionEquations,M),p&&(g.narrowphase=un.now()-v),p&&(v=un.now()),T=0;T<this.frictionEquations.length;T++)h.addEquation(this.frictionEquations[T]);const z=n.length;for(let V=0;V!==z;V++){const Q=n[V],Y=Q.bi,L=Q.bj,Z=Q.si,W=Q.sj;let ht;if(Y.material&&L.material?ht=this.getContactMaterial(Y.material,L.material)||this.defaultContactMaterial:ht=this.defaultContactMaterial,ht.friction,Y.material&&L.material&&(Y.material.friction>=0&&L.material.friction>=0&&Y.material.friction*L.material.friction,Y.material.restitution>=0&&L.material.restitution>=0&&(Q.restitution=Y.material.restitution*L.material.restitution)),h.addEquation(Q),Y.allowSleep&&Y.type===zt.DYNAMIC&&Y.sleepState===zt.SLEEPING&&L.sleepState===zt.AWAKE&&L.type!==zt.STATIC){const B=L.velocity.lengthSquared()+L.angularVelocity.lengthSquared(),$=L.sleepSpeedLimit**2;B>=$*2&&(Y.wakeUpAfterNarrowphase=!0)}if(L.allowSleep&&L.type===zt.DYNAMIC&&L.sleepState===zt.SLEEPING&&Y.sleepState===zt.AWAKE&&Y.type!==zt.STATIC){const B=Y.velocity.lengthSquared()+Y.angularVelocity.lengthSquared(),$=Y.sleepSpeedLimit**2;B>=$*2&&(L.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(Y,L,!0),this.collisionMatrixPrevious.get(Y,L)||(Jo.body=L,Jo.contact=Q,Y.dispatchEvent(Jo),Jo.body=Y,L.dispatchEvent(Jo)),this.bodyOverlapKeeper.set(Y.id,L.id),this.shapeOverlapKeeper.set(Z.id,W.id)}for(this.emitContactEvents(),p&&(g.makeContactConstraints=un.now()-v,v=un.now()),T=0;T!==l;T++){const V=u[T];V.wakeUpAfterNarrowphase&&(V.wakeUp(),V.wakeUpAfterNarrowphase=!1)}for(A=S.length,T=0;T!==A;T++){const V=S[T];V.update();for(let Q=0,Y=V.equations.length;Q!==Y;Q++){const L=V.equations[Q];h.addEquation(L)}}h.solve(t,this),p&&(g.solve=un.now()-v),h.removeAllEquations();const k=Math.pow;for(T=0;T!==l;T++){const V=u[T];if(V.type&_){const Q=k(1-V.linearDamping,t),Y=V.velocity;Y.scale(Q,Y);const L=V.angularVelocity;if(L){const Z=k(1-V.angularDamping,t);L.scale(Z,L)}}}this.dispatchEvent(aC),p&&(v=un.now());const w=this.stepnumber%(this.quatNormalizeSkip+1)===0,F=this.quatNormalizeFast;for(T=0;T!==l;T++)u[T].integrate(t,w,F);this.clearForces(),this.broadphase.dirty=!0,p&&(g.integrate=un.now()-v),this.stepnumber+=1,this.dispatchEvent(iC);let it=!0;if(this.allowSleep)for(it=!1,T=0;T!==l;T++){const V=u[T];V.sleepTick(this.time),V.sleepState!==zt.SLEEPING&&(it=!0)}this.hasActiveBodies=it}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),n=this.hasAnyEventListener("endContact");if((t||n)&&this.bodyOverlapKeeper.getDiff(oa,la),t){for(let l=0,u=oa.length;l<u;l+=2)$o.bodyA=this.getBodyById(oa[l]),$o.bodyB=this.getBodyById(oa[l+1]),this.dispatchEvent($o);$o.bodyA=$o.bodyB=null}if(n){for(let l=0,u=la.length;l<u;l+=2)tl.bodyA=this.getBodyById(la[l]),tl.bodyB=this.getBodyById(la[l+1]),this.dispatchEvent(tl);tl.bodyA=tl.bodyB=null}oa.length=la.length=0;const a=this.hasAnyEventListener("beginShapeContact"),r=this.hasAnyEventListener("endShapeContact");if((a||r)&&this.shapeOverlapKeeper.getDiff(oa,la),a){for(let l=0,u=oa.length;l<u;l+=2){const h=this.getShapeById(oa[l]),d=this.getShapeById(oa[l+1]);ca.shapeA=h,ca.shapeB=d,h&&(ca.bodyA=h.body),d&&(ca.bodyB=d.body),this.dispatchEvent(ca)}ca.bodyA=ca.bodyB=ca.shapeA=ca.shapeB=null}if(r){for(let l=0,u=la.length;l<u;l+=2){const h=this.getShapeById(la[l]),d=this.getShapeById(la[l+1]);ua.shapeA=h,ua.shapeB=d,h&&(ua.bodyA=h.body),d&&(ua.bodyB=d.body),this.dispatchEvent(ua)}ua.bodyA=ua.bodyB=ua.shapeA=ua.shapeB=null}}clearForces(){const t=this.bodies,n=t.length;for(let a=0;a!==n;a++){const r=t[a];r.force,r.torque,r.force.set(0,0,0),r.torque.set(0,0,0)}}}new ti;const rd=new sn,un=globalThis.performance||{};if(!un.now){let c=Date.now();un.timing&&un.timing.navigationStart&&(c=un.timing.navigationStart),un.now=()=>Date.now()-c}new R;const iC={type:"postStep"},aC={type:"preStep"},Jo={type:zt.COLLIDE_EVENT_NAME,body:null,contact:null},sC=[],rC=[],oC=[],lC=[],oa=[],la=[],$o={type:"beginContact",bodyA:null,bodyB:null},tl={type:"endContact",bodyA:null,bodyB:null},ca={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},ua={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},cC=({onGoBack:c})=>{const t=fn.useRef(null),n=fn.useRef(()=>{});return fn.useEffect(()=>{if(!t.current)return;const a=new N1;a.background=new Ae(3359061);const r=new fi(75,t.current.clientWidth/t.current.clientHeight,.1,100);r.position.set(0,10,20),r.lookAt(0,10,0);const l=new D1({antialias:!0});l.setSize(t.current.clientWidth,t.current.clientHeight),l.setPixelRatio(window.devicePixelRatio),l.shadowMap.enabled=!0,l.shadowMap.type=n_,t.current.appendChild(l.domElement);const u=()=>{t.current&&(r.aspect=t.current.clientWidth/t.current.clientHeight,r.updateProjectionMatrix(),l.setSize(t.current.clientWidth,t.current.clientHeight))};window.addEventListener("resize",u);const h=new P1(16777215,.5);a.add(h);const d=new O1(16777215,.8);d.position.set(10,20,15),d.castShadow=!0,d.shadow.mapSize.width=2048,d.shadow.mapSize.height=2048,d.shadow.camera.near=.5,d.shadow.camera.far=50,d.shadow.camera.left=-20,d.shadow.camera.right=20,d.shadow.camera.top=20,d.shadow.camera.bottom=-20,a.add(d);const p=new nC;p.gravity.set(0,-9.82,0);const g=new Iw,_=new zt({mass:0,shape:g});_.quaternion.setFromAxisAngle(new R(1,0,0),-Math.PI/2),p.addBody(_);const v=new $h({color:7041664}),S=new ou(new R(1,10,1)),M=new $h({color:10265519}),E=.2,x=new Y0(E),y=()=>{[[-7.5,10,0],[7.5,10,0]].forEach(([z,k,U])=>{const w=new di(new Wr(1,20,1),v);w.position.set(z,k,U),w.castShadow=!0,w.receiveShadow=!0,a.add(w);const F=new zt({mass:0,shape:S});F.position.set(z,k,U),p.addBody(F)})},T=()=>{const P=new $c(E,16,16),z=[];for(let k=3;k<18;k+=1.3){const U=Math.floor(k/1.3)%2===0?.65:0;for(let w=-6;w<=6;w+=1.3)w+U>-7&&w+U<7&&z.push(new ut(w+U,k,0))}z.forEach(k=>{const U=new di(P,M);U.position.copy(k),U.castShadow=!0,U.receiveShadow=!0,a.add(U);const w=new zt({mass:0,shape:x});w.position.copy(k),p.addBody(w)})};y(),T();let A=[];const D=()=>{const z=new $c(.4,32,32),k=new $h({color:16777215}),U=new di(z,k);U.castShadow=!0;const w=new Y0(.4),F=new zt({mass:1,shape:w});F.position.set(0,15,0),F.pachinkoMesh=U,a.add(U),p.addBody(F),A.push({mesh:U,body:F})};n.current=D;const I=()=>{requestAnimationFrame(I),p.step(1/60),A.forEach(P=>{P.mesh.position.copy(P.body.position),P.mesh.quaternion.copy(P.body.quaternion)}),l.render(a,r)};return I(),()=>{t.current&&t.current.removeChild(l.domElement),window.removeEventListener("resize",u)}},[]),Tt.jsxs("div",{className:"p-6 bg-gray-900 min-h-screen text-white flex flex-col items-center",children:[Tt.jsx(eu,{title:"Pachinko Game",onGoBack:c}),Tt.jsxs("div",{className:"flex-grow flex flex-col items-center justify-center p-4 w-full",children:[Tt.jsx("div",{ref:t,className:"pachinko-game-container rounded-2xl shadow-xl overflow-hidden mb-6"}),Tt.jsx("button",{onClick:()=>n.current(),className:"px-8 py-3 bg-blue-600 text-white font-bold rounded-full text-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105",children:"Drop Ball"})]})]})},uC=c=>Tt.jsxs("svg",{...c,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[Tt.jsx("path",{d:"M12 2l-6 10h12l-6 10"}),Tt.jsx("path",{d:"M6 12l-4 4h16l-4-4"}),Tt.jsx("path",{d:"M8 8l8 8"})]}),Wc=({title:c,description:t,icon:n,onClick:a,color:r,shadow:l})=>Tt.jsxs("button",{className:`p-6 rounded-2xl border-2 ${r} ${l} flex flex-col items-center text-center transition-transform transform hover:scale-105 duration-200 outline-none focus:ring-4 focus:ring-opacity-50`,onClick:a,"aria-label":c,children:[n,Tt.jsx("h3",{className:"text-xl font-bold mt-4 text-gray-800",children:c}),Tt.jsx("p",{className:"text-sm text-gray-600 mt-2",children:t})]}),fC=()=>{const[c,t]=fn.useState("home"),n=()=>Tt.jsxs("div",{className:"flex flex-col items-center justify-center min-h-screen p-4 sm:p-12 bg-gray-50",children:[Tt.jsxs("div",{className:"text-center mb-12 fade-in",children:[Tt.jsx("h1",{className:"text-5xl sm:text-7xl font-extrabold text-gray-800 mb-4",children:"日本語を学びましょう!"}),Tt.jsx("p",{className:"text-lg sm:text-xl text-gray-600",children:"Choose a topic to begin your learning journey."})]}),Tt.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl mx-auto",children:[Tt.jsx(Wc,{title:"Hiragana & Katakana",description:"View and learn the two Japanese syllabaries.",icon:Tt.jsx(dS,{className:"w-12 h-12"}),onClick:()=>t("hiragana-katakana"),color:"bg-gray-100 border-gray-200 hover:bg-gray-200",shadow:"shadow-gray-200"}),Tt.jsx(Wc,{title:"Kanji Flashcards",description:"Learn the readings and meanings of basic Kanji characters.",icon:Tt.jsx(uC,{className:"w-12 h-12"}),onClick:()=>t("kanji"),color:"bg-gray-100 border-gray-200 hover:bg-gray-200",shadow:"shadow-gray-200"}),Tt.jsx(Wc,{title:"Vocabulary Quiz",description:"Expand your vocabulary with common Japanese words.",icon:Tt.jsx(cS,{className:"w-12 h-12"}),onClick:()=>t("vocabulary"),color:"bg-gray-100 border-gray-200 hover:bg-gray-200",shadow:"shadow-gray-200"}),Tt.jsx(Wc,{title:"Pachinko Game",description:"Relax and play a fun pachinko-style game.",icon:Tt.jsx("puzzle",{className:"w-12 h-12"}),onClick:()=>t("pachinko"),color:"bg-gray-100 border-gray-200 hover:bg-gray-200",shadow:"shadow-gray-200"})]})]}),a=()=>{switch(c){case"home":return Tt.jsx(n,{});case"hiragana-katakana":return Tt.jsx(pS,{onGoBack:()=>t("home")});case"kanji":return Tt.jsx(mS,{onGoBack:()=>t("home")});case"vocabulary":return Tt.jsx(gS,{onGoBack:()=>t("home")});case"pachinko":return Tt.jsx(cC,{onGoBack:()=>t("home")});default:return Tt.jsx(n,{})}};return Tt.jsx("div",{className:"app",children:a()})},hC=nS.createRoot(document.getElementById("root"));hC.render(Tt.jsx(Zy.StrictMode,{children:Tt.jsx(fC,{})}));
