import{s as U,n as B,o as z,r as R}from"../chunks/scheduler.bb0ecb07.js";import{S as V,i as q,c as v,s as E,p as Y,f as b,d as _,h as j,g as k,k as M,l as C,m as d,a as O,b as F,t as G,j as J,o as L,n as K}from"../chunks/index.659734c4.js";import{e as P}from"../chunks/each.e59479a4.js";import{p as Q,a as $,b as W}from"../chunks/stores.add2e089.js";import{A as D}from"../chunks/axiosInstance.28f237f7.js";const X=!0,Z=!0,re=Object.freeze(Object.defineProperty({__proto__:null,csr:Z,prerender:X},Symbol.toStringTag,{value:"Module"}));function I(h,s,i){const a=h.slice();return a[6]=s[i],a}function N(h){let s,i,a,l=h[6].projeto.nome+"",r,c,p,f,o="Aceitar",u,e,n="Rejeitar",m,t,T;function y(){return h[2](h[6])}function A(){return h[3](h[6])}return{c(){s=v("tr"),i=v("th"),a=v("p"),r=G(l),c=E(),p=v("th"),f=v("button"),f.textContent=o,u=E(),e=v("button"),e.textContent=n,m=E(),this.h()},l(g){s=b(g,"TR",{class:!0});var x=k(s);i=b(x,"TH",{class:!0});var S=k(i);a=b(S,"P",{});var w=k(a);r=J(w,l),w.forEach(_),S.forEach(_),c=j(x),p=b(x,"TH",{class:!0});var H=k(p);f=b(H,"BUTTON",{class:!0,"data-svelte-h":!0}),M(f)!=="svelte-108togv"&&(f.textContent=o),u=j(H),e=b(H,"BUTTON",{class:!0,"data-svelte-h":!0}),M(e)!=="svelte-1223rss"&&(e.textContent=n),H.forEach(_),m=j(x),x.forEach(_),this.h()},h(){C(i,"class","w-full p-4 pl-8 border-b"),C(f,"class","p-4 bg-green-500 hover:scale-110 transition-all rounded-l-md font-bold hover:brightness-90"),C(e,"class","p-4 mr-1 bg-red-500 hover:scale-110 transition-all rounded-r-md font-bold hover:brightness-90"),C(p,"class","flex border-b text-text-primary"),C(s,"class","trComponent text-text-secondary")},m(g,x){O(g,s,x),d(s,i),d(i,a),d(a,r),d(s,c),d(s,p),d(p,f),d(p,u),d(p,e),d(s,m),t||(T=[L(f,"click",y),L(e,"click",A)],t=!0)},p(g,x){h=g,x&1&&l!==(l=h[6].projeto.nome+"")&&K(r,l)},d(g){g&&_(s),t=!1,R(T)}}}function ee(h){let s,i,a,l,r,c,p="<tr><th>Convites Pendentes</th></tr>",f,o;document.title=Q+" - Convites";let u=P(h[0]),e=[];for(let n=0;n<u.length;n+=1)e[n]=N(I(h,u,n));return{c(){s=v("meta"),i=E(),a=v("div"),l=v("div"),r=v("table"),c=v("thead"),c.innerHTML=p,f=E(),o=v("tbody");for(let n=0;n<e.length;n+=1)e[n].c();this.h()},l(n){const m=Y("svelte-bf50u",document.head);s=b(m,"META",{name:!0,content:!0}),m.forEach(_),i=j(n),a=b(n,"DIV",{class:!0});var t=k(a);l=b(t,"DIV",{class:!0});var T=k(l);r=b(T,"TABLE",{class:!0});var y=k(r);c=b(y,"THEAD",{class:!0,"data-svelte-h":!0}),M(c)!=="svelte-1kdez94"&&(c.innerHTML=p),f=j(y),o=b(y,"TBODY",{});var A=k(o);for(let g=0;g<e.length;g+=1)e[g].l(A);A.forEach(_),y.forEach(_),T.forEach(_),t.forEach(_),this.h()},h(){C(s,"name","description"),C(s,"content","Svelte demo app"),C(c,"class","text-text-primary"),C(r,"class","tableComponent"),C(l,"class","tableHolderComponent"),C(a,"class","flex items-center flex-col")},m(n,m){d(document.head,s),O(n,i,m),O(n,a,m),d(a,l),d(l,r),d(r,c),d(r,f),d(r,o);for(let t=0;t<e.length;t+=1)e[t]&&e[t].m(o,null)},p(n,[m]){if(m&3){u=P(n[0]);let t;for(t=0;t<u.length;t+=1){const T=I(n,u,t);e[t]?e[t].p(T,m):(e[t]=N(T),e[t].c(),e[t].m(o,null))}for(;t<e.length;t+=1)e[t].d(1);e.length=u.length}},i:B,o:B,d(n){n&&(_(i),_(a)),_(s),F(e,n)}}}function te(h,s,i){let a=[];$.subscribe(o=>{i(0,a=o)});let l;W.subscribe(o=>{l=o});async function r(){l&&$.set(await D.get("convites",{IdUsuario:l.id}))}z(r);async function c(o,u){let e={id:o,aceito:u};u==1?await D.put("convites/responderConvite",e):u==2&&await D.put("convites/responderConvite",e),r()}return[a,c,o=>{c(o.id,1)},o=>{c(o.id,2)}]}class ie extends V{constructor(s){super(),q(this,s,te,ee,U,{})}}export{ie as component,re as universal};