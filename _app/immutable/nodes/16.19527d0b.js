import{s as E,o as P}from"../chunks/scheduler.e38c76a0.js";import{S as T,i as z,c as g,s as j,p as H,f as v,d,h as S,g as w,k as I,l as h,m as b,a as C,q as x,r as L,u as y,b as V,v as q,w as N,x as O,y as B,z as U}from"../chunks/index.a3868cec.js";import{e as k}from"../chunks/each.e59479a4.js";import{C as F}from"../chunks/Card.e01a0ac8.js";import{p as G,b as J}from"../chunks/stores.8228ae5f.js";import{A as K}from"../chunks/axiosInstance.ef705138.js";const Q=!0,R=!0,ae=Object.freeze(Object.defineProperty({__proto__:null,csr:R,prerender:Q},Symbol.toStringTag,{value:"Module"}));function A(i,a,l){const e=i.slice();return e[3]=a[l],e}function M(i){let a,l;return a=new F({props:{item:i[3],tipo:"projeto"}}),{c(){q(a.$$.fragment)},l(e){N(a.$$.fragment,e)},m(e,n){O(a,e,n),l=!0},p(e,n){const c={};n&1&&(c.item=e[3]),a.$set(c)},i(e){l||(x(a.$$.fragment,e),l=!0)},o(e){y(a.$$.fragment,e),l=!1},d(e){B(a,e)}}}function W(i){let a,l,e,n,c='<h1>Seus Projetos</h1> <a href="criar-projeto" class="p-2 bg-green-500 hover:scale-110 transition-all rounded-md font-bold hover:brightness-90 flex items-center hover:no-underline"><span class="material-symbols-outlined">Add</span> <span>Add Criar Novo</span></a>',p,u,_;document.title=G+" - Seus Projetos";let m=k(i[0]),o=[];for(let t=0;t<m.length;t+=1)o[t]=M(A(i,m,t));const D=t=>y(o[t],1,1,()=>{o[t]=null});return{c(){a=g("meta"),l=j(),e=g("div"),n=g("div"),n.innerHTML=c,p=j(),u=g("div");for(let t=0;t<o.length;t+=1)o[t].c();this.h()},l(t){const s=H("svelte-1l4z85r",document.head);a=v(s,"META",{name:!0,content:!0}),s.forEach(d),l=S(t),e=v(t,"DIV",{class:!0});var r=w(e);n=v(r,"DIV",{class:!0,"data-svelte-h":!0}),I(n)!=="svelte-16i1uxe"&&(n.innerHTML=c),p=S(r),u=v(r,"DIV",{class:!0});var f=w(u);for(let $=0;$<o.length;$+=1)o[$].l(f);f.forEach(d),r.forEach(d),this.h()},h(){h(a,"name","description"),h(a,"content","Svelte demo app"),h(n,"class","flex items-center h-max mx-auto w-full text-text-primary bg-bg-primary shadow-xl p-10 gap-4 text-sm rounded-xl mb-2 justify-between"),h(u,"class","cardHolderComponent"),h(e,"class","flex items-center flex-col")},m(t,s){b(document.head,a),C(t,l,s),C(t,e,s),b(e,n),b(e,p),b(e,u);for(let r=0;r<o.length;r+=1)o[r]&&o[r].m(u,null);_=!0},p(t,[s]){if(s&1){m=k(t[0]);let r;for(r=0;r<m.length;r+=1){const f=A(t,m,r);o[r]?(o[r].p(f,s),x(o[r],1)):(o[r]=M(f),o[r].c(),x(o[r],1),o[r].m(u,null))}for(U(),r=m.length;r<o.length;r+=1)D(r);L()}},i(t){if(!_){for(let s=0;s<m.length;s+=1)x(o[s]);_=!0}},o(t){o=o.filter(Boolean);for(let s=0;s<o.length;s+=1)y(o[s]);_=!1},d(t){t&&(d(l),d(e)),d(a),V(o,t)}}}function X(i,a,l){let e=[],n;J.subscribe(p=>{n=p});async function c(){n&&l(0,e=await K.get(`projetos/porUsuario/${n.id}`))}return P(c),[e]}class se extends T{constructor(a){super(),z(this,a,X,W,E,{})}}export{se as component,ae as universal};