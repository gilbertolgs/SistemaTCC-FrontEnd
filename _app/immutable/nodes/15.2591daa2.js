import{s as E,o as T}from"../chunks/scheduler.bb0ecb07.js";import{S as q,i as A,c as _,s as j,p as H,f as g,d as u,h as w,g as P,k as I,l as p,m as v,a as k,q as x,r as V,u as b,b as z,v as L,w as O,x as B,y as N,z as F}from"../chunks/index.659734c4.js";import{e as C}from"../chunks/each.e59479a4.js";import{C as G}from"../chunks/Card.8515fbd6.js";import{p as J}from"../chunks/stores.add2e089.js";import{A as K}from"../chunks/axiosInstance.28f237f7.js";const Q=!0,R=!0,oe=Object.freeze(Object.defineProperty({__proto__:null,csr:R,prerender:Q},Symbol.toStringTag,{value:"Module"}));function M(c,a,s){const e=c.slice();return e[2]=a[s],e}function S(c){let a,s;return a=new G({props:{item:c[2],tipo:"projeto"}}),{c(){L(a.$$.fragment)},l(e){O(a.$$.fragment,e)},m(e,l){B(a,e,l),s=!0},p(e,l){const f={};l&1&&(f.item=e[2]),a.$set(f)},i(e){s||(x(a.$$.fragment,e),s=!0)},o(e){b(a.$$.fragment,e),s=!1},d(e){N(a,e)}}}function U(c){let a,s,e,l,f="<h1>Projetos Pendentes</h1>",$,i,h;document.title=J+" - Projetos Pendentes";let m=C(c[0]),o=[];for(let t=0;t<m.length;t+=1)o[t]=S(M(c,m,t));const D=t=>b(o[t],1,1,()=>{o[t]=null});return{c(){a=_("meta"),s=j(),e=_("div"),l=_("div"),l.innerHTML=f,$=j(),i=_("div");for(let t=0;t<o.length;t+=1)o[t].c();this.h()},l(t){const r=H("svelte-fsii85",document.head);a=g(r,"META",{name:!0,content:!0}),r.forEach(u),s=w(t),e=g(t,"DIV",{class:!0});var n=P(e);l=g(n,"DIV",{class:!0,"data-svelte-h":!0}),I(l)!=="svelte-1ixjiqd"&&(l.innerHTML=f),$=w(n),i=g(n,"DIV",{class:!0});var d=P(i);for(let y=0;y<o.length;y+=1)o[y].l(d);d.forEach(u),n.forEach(u),this.h()},h(){p(a,"name","description"),p(a,"content","Svelte demo app"),p(l,"class","flex items-center h-max mx-auto w-full text-text-primary bg-bg-primary shadow-xl p-10 gap-4 text-sm rounded-xl mb-2 justify-between"),p(i,"class","cardHolderComponent"),p(e,"class","flex items-center flex-col")},m(t,r){v(document.head,a),k(t,s,r),k(t,e,r),v(e,l),v(e,$),v(e,i);for(let n=0;n<o.length;n+=1)o[n]&&o[n].m(i,null);h=!0},p(t,[r]){if(r&1){m=C(t[0]);let n;for(n=0;n<m.length;n+=1){const d=M(t,m,n);o[n]?(o[n].p(d,r),x(o[n],1)):(o[n]=S(d),o[n].c(),x(o[n],1),o[n].m(i,null))}for(F(),n=m.length;n<o.length;n+=1)D(n);V()}},i(t){if(!h){for(let r=0;r<m.length;r+=1)x(o[r]);h=!0}},o(t){o=o.filter(Boolean);for(let r=0;r<o.length;r+=1)b(o[r]);h=!1},d(t){t&&(u(s),u(e)),u(a),z(o,t)}}}function W(c,a,s){let e=[];async function l(){s(0,e=await K.get("projetos/pendente"))}return T(l),[e]}class ae extends q{constructor(a){super(),A(this,a,W,U,E,{})}}export{ae as component,oe as universal};