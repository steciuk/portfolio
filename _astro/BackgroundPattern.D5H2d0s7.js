import{S as I,i as S,s as T,e as w,c as y,a as k,d as h,b as E,g as b,k as f,m as q,o as d,p as D,q as P,r as x,u as A,v as R,f as c,w as V,x as z,y as B,z as H,A as L}from"./index.CzW0y6Hq.js";import{e as _}from"./each.-gASlQSi.js";function O(){return"ontouchstart"in window||navigator.maxTouchPoints>0}function p(l,n,r){const i=l.slice();return i[6]=n[r],i}function m(l){let n,r,i;const t=l[3].default,a=x(t,l,l[2],null);return{c(){n=w("div"),a&&a.c(),r=A(),this.h()},l(e){n=y(e,"DIV",{class:!0,style:!0});var s=k(n);a&&a.l(s),r=R(s),s.forEach(h),this.h()},h(){E(n,"class","absolute aspect-square"),c(n,"top",l[6].y+l[0].y/l[6].depth+"%"),c(n,"left",l[6].x+l[0].x/l[6].depth+"%"),c(n,"width",80/l[6].depth+"px")},m(e,s){b(e,n,s),a&&a.m(n,null),V(n,r),i=!0},p(e,s){a&&a.p&&(!i||s&4)&&z(a,t,e,e[2],i?H(t,e[2],s,null):B(e[2]),null),(!i||s&1)&&c(n,"top",e[6].y+e[0].y/e[6].depth+"%"),(!i||s&1)&&c(n,"left",e[6].x+e[0].x/e[6].depth+"%")},i(e){i||(f(a,e),i=!0)},o(e){d(a,e),i=!1},d(e){e&&h(n),a&&a.d(e)}}}function C(l){let n,r,i=_(l[1]),t=[];for(let e=0;e<i.length;e+=1)t[e]=m(p(l,i,e));const a=e=>d(t[e],1,1,()=>{t[e]=null});return{c(){n=w("div");for(let e=0;e<t.length;e+=1)t[e].c();this.h()},l(e){n=y(e,"DIV",{class:!0});var s=k(n);for(let o=0;o<t.length;o+=1)t[o].l(s);s.forEach(h),this.h()},h(){E(n,"class","fixed left-0 top-0 -z-10 h-screen w-screen")},m(e,s){b(e,n,s);for(let o=0;o<t.length;o+=1)t[o]&&t[o].m(n,null);r=!0},p(e,[s]){if(s&7){i=_(e[1]);let o;for(o=0;o<i.length;o+=1){const u=p(e,i,o);t[o]?(t[o].p(u,s),f(t[o],1)):(t[o]=m(u),t[o].c(),f(t[o],1),t[o].m(n,null))}for(L(),o=i.length;o<t.length;o+=1)a(o);q()}},i(e){if(!r){for(let s=0;s<i.length;s+=1)f(t[s]);r=!0}},o(e){t=t.filter(Boolean);for(let s=0;s<t.length;s+=1)d(t[s]);r=!1},d(e){e&&h(n),D(t,e)}}}const F=2,g=.075;function v(l){return 1/(1+Math.exp(-l*F))-.5}function G(l,n,r){let{$$slots:i={},$$scope:t}=n,a={x:0,y:0},e=!1;function s(u){e||(window.requestAnimationFrame(()=>{const M=(u.clientX/window.innerWidth-.5)*2,$=(u.clientY/window.innerHeight-.5)*2;r(0,a={x:-v(M)*g*100,y:-v($)*g*100}),e=!1}),e=!0)}const o=[{x:90,y:20,depth:.8},{x:70,y:70,depth:1.5},{x:25,y:70,depth:2},{x:35,y:10,depth:1},{x:55,y:40,depth:1.8},{x:60,y:15,depth:4}];return P(()=>(!window.matchMedia("(prefers-reduced-motion: reduce)").matches&&!O()&&window.addEventListener("mousemove",s),()=>window.removeEventListener("mousemove",s))),l.$$set=u=>{"$$scope"in u&&r(2,t=u.$$scope)},[a,o,t,i]}class U extends I{constructor(n){super(),S(this,n,G,C,T,{})}}export{U as default};