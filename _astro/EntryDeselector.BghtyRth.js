import{S as f,i as p,s as h,n as i,d as r,B as m,t as c,a as w,l as d,b,c as u,f as g,g as y,h as _,j as E}from"./index.Cd2kBaV7.js";import{n as T}from"./navOpenStore.B4XpCuHK.js";import{s as l}from"./selectedEntryStore.CW8nytoz.js";import"./index.Mc1atRao.js";const k=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global,{window:D}=k;function $(a){let e,o,s;return{c(){e=_("button"),this.h()},l(t){e=g(t,"BUTTON",{class:!0,"aria-label":!0}),y(e).forEach(r),this.h()},h(){u(e,"class","fixed inset-0 z-20 cursor-auto"),u(e,"aria-label","Deselect timeline entry"),c(e,"hidden",a[0]===null)},m(t,n){w(t,e,n),o||(s=[d(D,"keydown",a[1]),d(e,"click",b(l.clear))],o=!0)},p(t,[n]){n&1&&c(e,"hidden",t[0]===null)},i,o:i,d(t){t&&r(e),o=!1,m(s)}}}function v(a,e,o){let s;E(a,l,n=>o(0,s=n));function t(n){s!==null&&n.key==="Escape"&&(!T.get()||window.innerWidth>1024)&&l.clear()}return[s,t]}class j extends f{constructor(e){super(),p(this,e,v,$,h,{})}}export{j as default};
