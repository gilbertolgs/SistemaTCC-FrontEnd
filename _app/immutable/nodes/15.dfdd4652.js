import{s as D,o as M}from"../chunks/scheduler.bb0ecb07.js";import{S as q,i as z,c as h,s as j,p as H,f as g,d as m,h as C,g as P,k as I,l as d,m as v,a as k,q as $,r as O,u as y,b as T,v as V,w as B,x as N,y as F,z as G}from"../chunks/index.659734c4.js";import{e as S}from"../chunks/each.e59479a4.js";import{C as J}from"../chunks/Card.de7e1dc0.js";import{p as K}from"../chunks/stores.add2e089.js";import{A as L}from"../chunks/axiosInstance.07e2da7d.js";const Q=!0,R=!0,ne=Object.freeze(Object.defineProperty({__proto__:null,csr:R,prerender:Q},Symbol.toStringTag,{value:"Module"}));function w(c,a,s){const e=c.slice();return e[2]=a[s],e}function E(c){let a,s;return a=new J({props:{item:c[2],tipo:"projeto"}}),{c(){V(a.$$.fragment)},l(e){B(a.$$.fragment,e)},m(e,l){N(a,e,l),s=!0},p(e,l){const f={};l&1&&(f.item=e[2]),a.$set(f)},i(e){s||($(a.$$.fragment,e),s=!0)},o(e){y(a.$$.fragment,e),s=!1},d(e){F(a,e)}}}function U(c){let a,s,e,l,f="Projetos Pendentes",x,i,_;document.title=K+" - Projetos Pendentes";let u=S(c[0]),n=[];for(let t=0;t<u.length;t+=1)n[t]=E(w(c,u,t));const A=t=>y(n[t],1,1,()=>{n[t]=null});return{c(){a=h("meta"),s=j(),e=h("div"),l=h("h1"),l.textContent=f,x=j(),i=h("div");for(let t=0;t<n.length;t+=1)n[t].c();this.h()},l(t){const r=H("svelte-fsii85",document.head);a=g(r,"META",{name:!0,content:!0}),r.forEach(m),s=C(t),e=g(t,"DIV",{class:!0});var o=P(e);l=g(o,"H1",{class:!0,"data-svelte-h":!0}),I(l)!=="svelte-1obg3eb"&&(l.textContent=f),x=C(o),i=g(o,"DIV",{class:!0});var p=P(i);for(let b=0;b<n.length;b+=1)n[b].l(p);p.forEach(m),o.forEach(m),this.h()},h(){d(a,"name","description"),d(a,"content","Svelte demo app"),d(l,"class","bg-base-100 text-base-content p-5 rounded-xl w-full text-center"),d(i,"class","cardHolderComponent"),d(e,"class","flex items-center flex-col")},m(t,r){v(document.head,a),k(t,s,r),k(t,e,r),v(e,l),v(e,x),v(e,i);for(let o=0;o<n.length;o+=1)n[o]&&n[o].m(i,null);_=!0},p(t,[r]){if(r&1){u=S(t[0]);let o;for(o=0;o<u.length;o+=1){const p=w(t,u,o);n[o]?(n[o].p(p,r),$(n[o],1)):(n[o]=E(p),n[o].c(),$(n[o],1),n[o].m(i,null))}for(G(),o=u.length;o<n.length;o+=1)A(o);O()}},i(t){if(!_){for(let r=0;r<u.length;r+=1)$(n[r]);_=!0}},o(t){n=n.filter(Boolean);for(let r=0;r<n.length;r+=1)y(n[r]);_=!1},d(t){t&&(m(s),m(e)),m(a),T(n,t)}}}function W(c,a,s){let e=[];async function l(){s(0,e=await L.get("projetos"))}return M(l),[e]}class ae extends q{constructor(a){super(),z(this,a,W,U,D,{})}}export{ae as component,ne as universal};