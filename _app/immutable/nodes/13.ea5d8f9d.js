import{s as E,n as S}from"../chunks/scheduler.68349f5e.js";import{S as M,i as P,g as p,s as y,C as T,h as f,f as m,c as j,j as $,y as z,k as d,z as h,a as C,d as w,t as k,B as A,r as D,u as H,v as I,w as V}from"../chunks/index.5ec91f55.js";import{e as B}from"../chunks/each.e59479a4.js";import{C as L}from"../chunks/Card.75460713.js";import{p as N,a as O}from"../chunks/stores.c2c67d05.js";const q=!0,F=!0,Y=Object.freeze(Object.defineProperty({__proto__:null,csr:F,prerender:q},Symbol.toStringTag,{value:"Module"}));function G(i,a,n){const e=i.slice();return e[0]=a[n],e}function J(i){let a,n;return a=new L({props:{item:i[0],tipo:"projeto"}}),{c(){D(a.$$.fragment)},l(e){H(a.$$.fragment,e)},m(e,s){I(a,e,s),n=!0},p:S,i(e){n||(w(a.$$.fragment,e),n=!0)},o(e){k(a.$$.fragment,e),n=!1},d(e){V(a,e)}}}function K(i){let a,n,e,s,x='<h1>Seus Projetos</h1> <a href="criar-projeto" class="p-2 bg-green-500 hover:scale-110 transition-all rounded-md font-bold hover:brightness-90 flex items-center hover:no-underline"><span class="material-symbols-outlined">Add</span> <span>Add Criar Novo</span></a>',_,c,u;document.title=N+" - Seus Projetos";let v=B(O),r=[];for(let t=0;t<v.length;t+=1)r[t]=J(G(i,v,t));return{c(){a=p("meta"),n=y(),e=p("div"),s=p("div"),s.innerHTML=x,_=y(),c=p("div");for(let t=0;t<r.length;t+=1)r[t].c();this.h()},l(t){const o=T("svelte-1l4z85r",document.head);a=f(o,"META",{name:!0,content:!0}),o.forEach(m),n=j(t),e=f(t,"DIV",{class:!0});var l=$(e);s=f(l,"DIV",{class:!0,"data-svelte-h":!0}),z(s)!=="svelte-16i1uxe"&&(s.innerHTML=x),_=j(l),c=f(l,"DIV",{class:!0});var b=$(c);for(let g=0;g<r.length;g+=1)r[g].l(b);b.forEach(m),l.forEach(m),this.h()},h(){d(a,"name","description"),d(a,"content","Svelte demo app"),d(s,"class","flex items-center h-max mx-auto w-full text-text-primary bg-bg-primary shadow-xl p-10 gap-4 text-sm rounded-xl mb-2 justify-between"),d(c,"class","cardHolderComponent"),d(e,"class","flex items-center flex-col")},m(t,o){h(document.head,a),C(t,n,o),C(t,e,o),h(e,s),h(e,_),h(e,c);for(let l=0;l<r.length;l+=1)r[l]&&r[l].m(c,null);u=!0},p:S,i(t){if(!u){for(let o=0;o<v.length;o+=1)w(r[o]);u=!0}},o(t){r=r.filter(Boolean);for(let o=0;o<r.length;o+=1)k(r[o]);u=!1},d(t){t&&(m(n),m(e)),m(a),A(r,t)}}}class Z extends M{constructor(a){super(),P(this,a,null,K,E,{})}}export{Z as component,Y as universal};
