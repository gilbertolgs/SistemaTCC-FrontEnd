import{s as te,n as N,o as ae}from"../chunks/scheduler.3ede1d93.js";import{S as le,i as oe,g as f,s as L,m as H,C as se,h as m,f as n,c as S,j as b,n as $,y as K,k as h,z as t,a as B,o as W,x as re}from"../chunks/index.0254179f.js";import{e as X}from"../chunks/each.e59479a4.js";import{p as Y}from"../chunks/stores.b77ac819.js";const ne=!0,ie=!0,pe=Object.freeze(Object.defineProperty({__proto__:null,csr:ie,prerender:ne},Symbol.toStringTag,{value:"Module"}));function Z(c,a,o){const d=c.slice();return d[4]=a[o],d}function ee(c){let a,o,d=c[4].usuario.nome+"",u,r,p=c[4].texto+"",i,x;return{c(){a=f("li"),o=f("a"),u=H(d),r=L(),i=H(p),x=L(),this.h()},l(_){a=m(_,"LI",{class:!0});var v=b(a);o=m(v,"A",{href:!0,class:!0});var w=b(o);u=$(w,d),w.forEach(n),r=S(v),i=$(v,p),x=S(v),v.forEach(n),this.h()},h(){h(o,"href","usuario?id="+c[4].usuario.id),h(o,"class","text-content-primary underline hover:brightness-90"),h(a,"class","flex flex-col mb-3 border border-bg-secondary p-3 rounded-lg")},m(_,v){B(_,a,v),t(a,o),t(o,u),t(a,r),t(a,i),t(a,x)},p:N,d(_){_&&n(a)}}}function ce(c){let a,o,d,u,r,p,i,x,_=c[0].nome+"",v,w,y,Q='<span class="material-symbols-outlined justify-end group-hover:rotate-45 transition-all">settings</span>',O,C,T=c[0].descricao+"",D,U,E,P,R="Comentarios",z,j;document.title=a=Y+" - "+c[0].nome+" ";let k=X(c[1]),s=[];for(let e=0;e<k.length;e+=1)s[e]=ee(Z(c,k,e));return{c(){o=f("meta"),d=L(),u=f("div"),r=f("div"),p=f("div"),i=f("div"),x=f("h1"),v=H(_),w=L(),y=f("button"),y.innerHTML=Q,O=L(),C=f("p"),D=H(T),U=L(),E=f("div"),P=f("h1"),P.textContent=R,z=L(),j=f("ul");for(let e=0;e<s.length;e+=1)s[e].c();this.h()},l(e){const g=se("svelte-19fnyjp",document.head);o=m(g,"META",{name:!0,content:!0}),g.forEach(n),d=S(e),u=m(e,"DIV",{class:!0});var l=b(u);r=m(l,"DIV",{class:!0});var I=b(r);p=m(I,"DIV",{class:!0});var M=b(p);i=m(M,"DIV",{class:!0});var V=b(i);x=m(V,"H1",{class:!0});var F=b(x);v=$(F,_),F.forEach(n),w=S(V),y=m(V,"BUTTON",{class:!0,"data-svelte-h":!0}),K(y)!=="svelte-12s7qt0"&&(y.innerHTML=Q),V.forEach(n),O=S(M),C=m(M,"P",{class:!0});var G=b(C);D=$(G,T),G.forEach(n),M.forEach(n),U=S(I),E=m(I,"DIV",{});var q=b(E);P=m(q,"H1",{"data-svelte-h":!0}),K(P)!=="svelte-xqxe1w"&&(P.textContent=R),z=S(q),j=m(q,"UL",{class:!0});var J=b(j);for(let A=0;A<s.length;A+=1)s[A].l(J);J.forEach(n),q.forEach(n),I.forEach(n),l.forEach(n),this.h()},h(){h(o,"name","description"),h(o,"content","Svelte demo app"),h(x,"class","text-text-secondary font-bold inline-block pb-3 flex-1"),h(y,"class","m-0 p-0 group"),h(i,"class","flex w-full justify-center"),h(C,"class","text-text-secondary font-bold inline-block pb-2"),h(p,"class","flex flex-col items-center"),h(j,"class","mt-5"),h(r,"class","bg-bg-primary shadow-xl p-10 flex flex-col gap-4 text-sm rounded-xl w-full divide-y divide-bg-bg-secondary"),h(u,"class","flex items-center h-max mx-auto flex-col w-full text-text-primary")},m(e,g){t(document.head,o),B(e,d,g),B(e,u,g),t(u,r),t(r,p),t(p,i),t(i,x),t(x,v),t(i,w),t(i,y),t(p,O),t(p,C),t(C,D),t(r,U),t(r,E),t(E,P),t(E,z),t(E,j);for(let l=0;l<s.length;l+=1)s[l]&&s[l].m(j,null)},p(e,[g]){if(g&1&&a!==(a=Y+" - "+e[0].nome+" ")&&(document.title=a),g&1&&_!==(_=e[0].nome+"")&&W(v,_),g&1&&T!==(T=e[0].descricao+"")&&W(D,T),g&2){k=X(e[1]);let l;for(l=0;l<k.length;l+=1){const I=Z(e,k,l);s[l]?s[l].p(I,g):(s[l]=ee(I),s[l].c(),s[l].m(j,null))}for(;l<s.length;l+=1)s[l].d(1);s.length=k.length}},i:N,o:N,d(e){e&&(n(d),n(u)),n(o),re(s,e)}}}function de(c,a,o){let d="";function u(){const i=new URLSearchParams(window.location.search);d+=i.toString().split("=")[1],o(0,r.nome="Projeto "+d,r)}ae(u);let r={id:1,nome:"Projeto 1",descricao:"Lorem ipsum"};return[r,[{id:1,texto:"Lorem Ipsum",editado:!1,avaliacao:!1,usuario:{id:2,nome:"Loreno"}},{id:2,texto:"Lorem Ipsum",editado:!1,avaliacao:!1,usuario:{id:3,nome:"Ipsono"}}]]}class ve extends le{constructor(a){super(),oe(this,a,de,ce,te,{})}}export{ve as component,pe as universal};
