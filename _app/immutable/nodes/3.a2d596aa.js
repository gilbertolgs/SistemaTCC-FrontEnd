import{s as M,n as A}from"../chunks/scheduler.3ede1d93.js";import{S as O,i as z,g as u,s as C,C as R,h as p,f as i,c as I,j as v,k as g,z as b,a as E,x as D,m as H,n as L}from"../chunks/index.0254179f.js";import{e as y}from"../chunks/each.e59479a4.js";import{P as V}from"../chunks/public.73b3fb0a.js";const $=!0,q=!0,J=Object.freeze(Object.defineProperty({__proto__:null,csr:q,prerender:$},Symbol.toStringTag,{value:"Module"}));function S(f,t,n){const r=f.slice();return r[1]=t[n],r}function P(f,t,n){const r=f.slice();return r[4]=t[n],r}function j(f){let t,n,r=f[4]+"",m;return{c(){t=u("tr"),n=u("th"),m=H(r),this.h()},l(c){t=p(c,"TR",{class:!0});var h=v(t);n=p(h,"TH",{class:!0});var l=v(n);m=L(l,r),l.forEach(i),h.forEach(i),this.h()},h(){g(n,"class","border-b p-4 pl-8 text-text-secondary"),g(t,"class","trComponent")},m(c,h){E(c,t,h),b(t,n),b(n,m)},p:A,d(c){c&&i(t)}}}function B(f){let t,n,r,m=f[1].curso+"",c,h,l,a,d=y(f[1].membros),e=[];for(let o=0;o<d.length;o+=1)e[o]=j(P(f,d,o));return{c(){t=u("thead"),n=u("tr"),r=u("th"),c=H(m),h=C(),l=u("tbody");for(let o=0;o<e.length;o+=1)e[o].c();a=C(),this.h()},l(o){t=p(o,"THEAD",{class:!0});var _=v(t);n=p(_,"TR",{});var s=v(n);r=p(s,"TH",{});var x=v(r);c=L(x,m),x.forEach(i),s.forEach(i),_.forEach(i),h=I(o),l=p(o,"TBODY",{});var T=v(l);for(let k=0;k<e.length;k+=1)e[k].l(T);a=I(T),T.forEach(i),this.h()},h(){g(t,"class","text-text-primary")},m(o,_){E(o,t,_),b(t,n),b(n,r),b(r,c),E(o,h,_),E(o,l,_);for(let s=0;s<e.length;s+=1)e[s]&&e[s].m(l,null);b(l,a)},p(o,_){if(_&1){d=y(o[1].membros);let s;for(s=0;s<d.length;s+=1){const x=P(o,d,s);e[s]?e[s].p(x,_):(e[s]=j(x),e[s].c(),e[s].m(l,a))}for(;s<e.length;s+=1)e[s].d(1);e.length=d.length}},d(o){o&&(i(t),i(h),i(l)),D(e,o)}}}function G(f){let t,n,r,m,c;document.title=V+" - Bancas";let h=y(f[0]),l=[];for(let a=0;a<h.length;a+=1)l[a]=B(S(f,h,a));return{c(){t=u("meta"),n=C(),r=u("div"),m=u("div"),c=u("table");for(let a=0;a<l.length;a+=1)l[a].c();this.h()},l(a){const d=R("svelte-1tny9j",document.head);t=p(d,"META",{name:!0,content:!0}),d.forEach(i),n=I(a),r=p(a,"DIV",{class:!0});var e=v(r);m=p(e,"DIV",{class:!0});var o=v(m);c=p(o,"TABLE",{class:!0});var _=v(c);for(let s=0;s<l.length;s+=1)l[s].l(_);_.forEach(i),o.forEach(i),e.forEach(i),this.h()},h(){g(t,"name","description"),g(t,"content","Svelte demo app"),g(c,"class","tableComponent"),g(m,"class","tableHolderComponent"),g(r,"class","flex items-center flex-col")},m(a,d){b(document.head,t),E(a,n,d),E(a,r,d),b(r,m),b(m,c);for(let e=0;e<l.length;e+=1)l[e]&&l[e].m(c,null)},p(a,[d]){if(d&1){h=y(a[0]);let e;for(e=0;e<h.length;e+=1){const o=S(a,h,e);l[e]?l[e].p(o,d):(l[e]=B(o),l[e].c(),l[e].m(c,null))}for(;e<l.length;e+=1)l[e].d(1);l.length=h.length}},i:A,o:A,d(a){a&&(i(n),i(r)),i(t),D(l,a)}}}function N(f){return[[{curso:"Sistemas de Informação",membros:["Loreno","Ipsono"],id:1},{curso:"Administração",membros:["Loreno","Ipsono"],id:2}]]}class K extends O{constructor(t){super(),z(this,t,N,G,M,{})}}export{K as component,J as universal};