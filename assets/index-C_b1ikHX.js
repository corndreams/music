import{x as j,C as V,a as D,r as g,h as C,p as Y,n as Q,q as ee,k as ne,N as te,i as re,O as v,g as W,s as oe,P as ue,d as H,c as b,m as ie}from"./index-2N1GBUHz.js";function qe(){}const Ke=Object.assign,U=typeof window<"u",S=e=>e!==null&&typeof e=="object",E=e=>e!=null,P=e=>typeof e=="function",Ze=e=>S(e)&&P(e.then)&&P(e.catch),q=e=>typeof e=="number"||/^\d+(\.\d+)?$/.test(e),se=()=>U?/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()):!1;function T(e,n){const t=n.split(".");let r=e;return t.forEach(o=>{var i;r=S(r)&&(i=r[o])!=null?i:""}),r}function Ge(e,n,t){return n.reduce((r,o)=>(r[o]=e[o],r),{})}const Je=e=>Array.isArray(e)?e:[e],Xe=null,h=[Number,String],ae={type:Boolean,default:!0},Qe=e=>({type:e,required:!0}),en=e=>({type:Number,default:e}),nn=e=>({type:h,default:e}),A=e=>({type:String,default:e});var m=typeof window<"u";function $(e){return m?requestAnimationFrame(e):-1}function tn(e){m&&cancelAnimationFrame(e)}function rn(e){$(()=>$(e))}var ce=e=>e===window,N=(e,n)=>({top:0,left:0,right:e,bottom:n,width:e,height:n}),de=e=>{const n=v(e);if(ce(n)){const t=n.innerWidth,r=n.innerHeight;return N(t,r)}return n!=null&&n.getBoundingClientRect?n.getBoundingClientRect():N(0,0)};function on(e){const n=j(e,null);if(n){const t=W(),{link:r,unlink:o,internalChildren:i}=n;r(t),V(()=>o(t));const c=D(()=>i.indexOf(t));return{parent:n,index:c}}return{parent:null,index:g(-1)}}function fe(e){const n=[],t=r=>{Array.isArray(r)&&r.forEach(o=>{var i;ue(o)&&(n.push(o),(i=o.component)!=null&&i.subTree&&(n.push(o.component.subTree),t(o.component.subTree.children)),o.children&&t(o.children))})};return t(e),n}var k=(e,n)=>{const t=e.indexOf(n);return t===-1?e.findIndex(r=>n.key!==void 0&&n.key!==null&&r.type===n.type&&r.key===n.key):t};function le(e,n,t){const r=fe(e.subTree.children);t.sort((i,c)=>k(r,i.vnode)-k(r,c.vnode));const o=t.map(i=>i.proxy);n.sort((i,c)=>{const u=o.indexOf(i),s=o.indexOf(c);return u-s})}function un(e){const n=C([]),t=C([]),r=W();return{children:n,linkChildren:i=>{oe(e,Object.assign({link:s=>{s.proxy&&(t.push(s),n.push(s.proxy),le(r,n,t))},unlink:s=>{const a=t.indexOf(s);n.splice(a,1),t.splice(a,1)},children:n,internalChildren:t},i))}}}function pe(e){let n;Y(()=>{e(),Q(()=>{n=!0})}),ee(()=>{n&&e()})}function sn(e,n,t={}){if(!m)return;const{target:r=window,passive:o=!1,capture:i=!1}=t;let c=!1,u;const s=d=>{if(c)return;const f=v(d);f&&!u&&(f.addEventListener(e,n,{capture:i,passive:o}),u=!0)},a=d=>{if(c)return;const f=v(d);f&&u&&(f.removeEventListener(e,n,i),u=!1)};V(()=>a(r)),ne(()=>a(r)),pe(()=>s(r));let p;return te(r)&&(p=re(r,(d,f)=>{a(f),s(d)})),()=>{p==null||p(),a(r),c=!0}}var y,B;function ge(){if(!y&&(y=g(0),B=g(0),m)){const e=()=>{y.value=window.innerWidth,B.value=window.innerHeight};e(),window.addEventListener("resize",e,{passive:!0}),window.addEventListener("orientationchange",e,{passive:!0})}return{width:y,height:B}}var me=/scroll|auto|overlay/i,K=m?window:void 0;function Ee(e){return e.tagName!=="HTML"&&e.tagName!=="BODY"&&e.nodeType===1}function he(e,n=K){let t=e;for(;t&&t!==n&&Ee(t);){const{overflowY:r}=window.getComputedStyle(t);if(me.test(r))return t;t=t.parentNode}return n}function an(e,n=K){const t=g();return Y(()=>{e.value&&(t.value=he(e.value,n))}),t}var w;function cn(){if(!w&&(w=g("visible"),m)){const e=()=>{w.value=document.hidden?"hidden":"visible"};e(),window.addEventListener("visibilitychange",e)}return w}var dn=Symbol("van-field");function ye(e){const n="scrollTop"in e?e.scrollTop:e.pageYOffset;return Math.max(n,0)}function R(e,n){"scrollTop"in e?e.scrollTop=n:e.scrollTo(e.scrollX,n)}function Z(){return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}function we(e){R(window,e),R(document.body,e)}function fn(e,n){if(e===window)return 0;const t=n?ye(n):Z();return de(e).top+t}const ve=se();function ln(){ve&&we(Z())}const be=e=>e.stopPropagation();function pn(e,n){(typeof e.cancelable!="boolean"||e.cancelable)&&e.preventDefault(),n&&be(e)}function gn(e){const n=v(e);if(!n)return!1;const t=window.getComputedStyle(n),r=t.display==="none",o=n.offsetParent===null&&t.position!=="fixed";return r||o}const{width:Be,height:xe}=ge();function l(e){if(E(e))return q(e)?`${e}px`:String(e)}function mn(e){if(E(e)){if(Array.isArray(e))return{width:l(e[0]),height:l(e[1])};const n=l(e);return{width:n,height:n}}}function En(e){const n={};return e!==void 0&&(n.zIndex=+e),n}let x;function Ce(){if(!x){const e=document.documentElement,n=e.style.fontSize||window.getComputedStyle(e).fontSize;x=parseFloat(n)}return x}function Pe(e){return e=e.replace(/rem/g,""),+e*Ce()}function Ae(e){return e=e.replace(/vw/g,""),+e*Be.value/100}function Fe(e){return e=e.replace(/vh/g,""),+e*xe.value/100}function hn(e){if(typeof e=="number")return e;if(U){if(e.includes("rem"))return Pe(e);if(e.includes("vw"))return Ae(e);if(e.includes("vh"))return Fe(e)}return parseFloat(e)}const De=/-(\w)/g,G=e=>e.replace(De,(n,t)=>t.toUpperCase()),yn=(e,n,t)=>Math.min(Math.max(e,n),t);function _(e,n,t){const r=e.indexOf(n);return r===-1?e:n==="-"&&r!==0?e.slice(0,r):e.slice(0,r+1)+e.slice(r).replace(t,"")}function wn(e,n=!0,t=!0){n?e=_(e,".",/\./g):e=e.split(".")[0],t?e=_(e,"-",/-/g):e=e.replace(/-/,"");const r=n?/[^-0-9.]/g:/[^-0-9]/g;return e.replace(r,"")}const{hasOwnProperty:Se}=Object.prototype;function Oe(e,n,t){const r=n[t];E(r)&&(!Se.call(e,t)||!S(r)?e[t]=r:e[t]=J(Object(e[t]),r))}function J(e,n){return Object.keys(n).forEach(t=>{Oe(e,n,t)}),e}var Te={name:"姓名",tel:"电话",save:"保存",clear:"清空",cancel:"取消",confirm:"确认",delete:"删除",loading:"加载中...",noCoupon:"暂无优惠券",nameEmpty:"请填写姓名",addContact:"添加联系人",telInvalid:"请填写正确的电话",vanCalendar:{end:"结束",start:"开始",title:"日期选择",weekdays:["日","一","二","三","四","五","六"],monthTitle:(e,n)=>`${e}年${n}月`,rangePrompt:e=>`最多选择 ${e} 天`},vanCascader:{select:"请选择"},vanPagination:{prev:"上一页",next:"下一页"},vanPullRefresh:{pulling:"下拉即可刷新...",loosing:"释放即可刷新..."},vanSubmitBar:{label:"合计:"},vanCoupon:{unlimited:"无门槛",discount:e=>`${e}折`,condition:e=>`满${e}元可用`},vanCouponCell:{title:"优惠券",count:e=>`${e}张可用`},vanCouponList:{exchange:"兑换",close:"不使用",enable:"可用",disabled:"不可用",placeholder:"输入优惠码"},vanAddressEdit:{area:"地区",areaEmpty:"请选择地区",addressEmpty:"请填写详细地址",addressDetail:"详细地址",defaultAddress:"设为默认收货地址"},vanAddressList:{add:"新增地址"}};const I=g("zh-CN"),L=C({"zh-CN":Te}),$e={messages(){return L[I.value]},use(e,n){I.value=e,this.add({[e]:n})},add(e={}){J(L,e)}};var Ne=$e;function ke(e){const n=G(e)+".";return(t,...r)=>{const o=Ne.messages(),i=T(o,n+t)||T(o,t);return P(i)?i(...r):i}}function F(e,n){return n?typeof n=="string"?` ${e}--${n}`:Array.isArray(n)?n.reduce((t,r)=>t+F(e,r),""):Object.keys(n).reduce((t,r)=>t+(n[r]?F(e,r):""),""):""}function Re(e){return(n,t)=>(n&&typeof n!="string"&&(t=n,n=""),n=n?`${e}__${n}`:e,`${n}${F(n,t)}`)}function O(e){const n=`van-${e}`;return[n,Re(n),ke(n)]}function X(e){return e.install=n=>{const{name:t}=e;t&&(n.component(t,e),n.component(G(`-${t}`),e))},e}const[_e,z]=O("badge"),Ie={dot:Boolean,max:h,tag:A("div"),color:String,offset:Array,content:h,showZero:ae,position:A("top-right")};var Le=H({name:_e,props:Ie,setup(e,{slots:n}){const t=()=>{if(n.content)return!0;const{content:u,showZero:s}=e;return E(u)&&u!==""&&(s||u!==0&&u!=="0")},r=()=>{const{dot:u,max:s,content:a}=e;if(!u&&t())return n.content?n.content():E(s)&&q(a)&&+a>+s?`${s}+`:a},o=u=>u.startsWith("-")?u.replace("-",""):`-${u}`,i=D(()=>{const u={background:e.color};if(e.offset){const[s,a]=e.offset,{position:p}=e,[d,f]=p.split("-");n.default?(typeof a=="number"?u[d]=l(d==="top"?a:-a):u[d]=d==="top"?l(a):o(a),typeof s=="number"?u[f]=l(f==="left"?s:-s):u[f]=f==="left"?l(s):o(s)):(u.marginTop=l(a),u.marginLeft=l(s))}return u}),c=()=>{if(t()||e.dot)return b("div",{class:z([e.position,{dot:e.dot,fixed:!!n.default}]),style:i.value},[r()])};return()=>{if(n.default){const{tag:u}=e;return b(u,{class:z("wrapper")},{default:()=>[n.default(),c()]})}return c()}}});const ze=X(Le),[Me,vn]=O("config-provider"),je=Symbol(Me),[Ve,M]=O("icon"),Ye=e=>e==null?void 0:e.includes("/"),We={dot:Boolean,tag:A("i"),name:String,size:h,badge:h,color:String,badgeProps:Object,classPrefix:String};var He=H({name:Ve,props:We,setup(e,{slots:n}){const t=j(je,null),r=D(()=>e.classPrefix||(t==null?void 0:t.iconPrefix)||M());return()=>{const{tag:o,dot:i,name:c,size:u,badge:s,color:a}=e,p=Ye(c);return b(ze,ie({dot:i,tag:o,class:[r.value,p?"":`${r.value}-${c}`],style:{color:a,fontSize:l(u)},content:s},e.badgeProps),{default:()=>{var d;return[(d=n.default)==null?void 0:d.call(n),p&&b("img",{class:M("image"),src:c},null)]}})}}});const bn=X(He);export{gn as A,ze as B,Be as C,xe as D,Qe as E,l as F,we as G,fn as H,bn as I,Ge as J,Z as K,Ze as L,P as M,dn as N,Je as O,wn as P,ln as Q,en as R,qe as S,cn as T,yn as U,mn as V,on as a,sn as b,O as c,de as d,Ke as e,rn as f,En as g,E as h,S as i,Xe as j,he as k,A as l,nn as m,h as n,pe as o,pn as p,tn as q,$ as r,ye as s,ae as t,un as u,R as v,X as w,U as x,an as y,hn as z};
