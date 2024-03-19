import{s as $e,r as Qe,o as Fe,n as X,w as We,x as Xe,y as Ze,z as et}from"../chunks/scheduler.bb0ecb07.js";import{S as Ce,i as Te,c as b,s as $,t as G,f as v,g as x,k as H,h as C,d as p,j as Y,l as i,a as I,m as u,o as we,q as S,z as xe,u as N,r as Ee,b as Ge,v as ee,w as te,x as le,y as se,n as ne}from"../chunks/index.659734c4.js";import{e as me}from"../chunks/each.e59479a4.js";import{l as Ye}from"../chunks/logoVazia.838c1158.js";import{a as tt,b as Je,s as He,d as lt}from"../chunks/stores.add2e089.js";import{D as Ke}from"../chunks/DropDown.fe19571e.js";import{component as st}from"./10.5abaa115.js";import{A as nt}from"../chunks/axiosInstance.07e2da7d.js";import{C as ot}from"../chunks/Cookie.69c16b24.js";const at=!1,jt=Object.freeze(Object.defineProperty({__proto__:null,ssr:at},Symbol.toStringTag,{value:"Module"}));function Ve(r,e,l){const t=r.slice();return t[13]=e[l],t}function Be(r){let e,l='<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-content-primary brightness-110 opacity-75"></span> <span class="relative inline-flex rounded-full h-3 w-3 bg-content-primary"></span>',t,s,d="notifications",n,o,f,m;return f=new Ke({props:{id:0,dados:r[5],perfil:null}}),{c(){e=b("span"),e.innerHTML=l,t=$(),s=b("span"),s.textContent=d,n=$(),o=b("div"),ee(f.$$.fragment),this.h()},l(a){e=v(a,"SPAN",{class:!0,"data-svelte-h":!0}),H(e)!=="svelte-eof41z"&&(e.innerHTML=l),t=C(a),s=v(a,"SPAN",{class:!0,"data-svelte-h":!0}),H(s)!=="svelte-1gbge1h"&&(s.textContent=d),n=C(a),o=v(a,"DIV",{class:!0});var _=x(o);te(f.$$.fragment,_),_.forEach(p),this.h()},h(){i(e,"class","relative flex h-3 w-3 left-4 top-2"),i(s,"class","material-symbols-outlined hover:cursor-pointer hover:scale-110"),i(o,"class","dropDownComponent group-hover:openDropDownComponent right-0 top-10 mt-3")},m(a,_){I(a,e,_),I(a,t,_),I(a,s,_),I(a,n,_),I(a,o,_),le(f,o,null),m=!0},p(a,_){const c={};_&32&&(c.dados=a[5]),f.$set(c)},i(a){m||(S(f.$$.fragment,a),m=!0)},o(a){N(f.$$.fragment,a),m=!1},d(a){a&&(p(e),p(t),p(s),p(n),p(o)),se(f)}}}function rt(r){let e,l="Log in";return{c(){e=b("a"),e.textContent=l,this.h()},l(t){e=v(t,"A",{href:!0,class:!0,"data-svelte-h":!0}),H(e)!=="svelte-68m1pb"&&(e.textContent=l),this.h()},h(){i(e,"href","login"),i(e,"class","text-sm font-semibold leading-6")},m(t,s){I(t,e,s)},p:X,i:X,o:X,d(t){t&&p(e)}}}function it(r){var m;let e,l,t=((m=r[0])==null?void 0:m.nome)+"",s,d,n,o,f;return o=new Ke({props:{id:0,perfil:r[0],dados:null}}),{c(){e=b("div"),l=b("button"),s=G(t),d=$(),n=b("div"),ee(o.$$.fragment),this.h()},l(a){e=v(a,"DIV",{});var _=x(e);l=v(_,"BUTTON",{class:!0});var c=x(l);s=Y(c,t),d=C(c),n=v(c,"DIV",{class:!0});var h=x(n);te(o.$$.fragment,h),h.forEach(p),c.forEach(p),_.forEach(p),this.h()},h(){i(n,"class","dropDownComponent group-hover:openDropDownComponent right-0 top-10 mt-3"),i(l,"class","group text-sm font-semibold leading-6 hover:underline hover:cursor-pointer")},m(a,_){I(a,e,_),u(e,l),u(l,s),u(l,d),u(l,n),le(o,n,null),f=!0},p(a,_){var h;(!f||_&1)&&t!==(t=((h=a[0])==null?void 0:h.nome)+"")&&ne(s,t);const c={};_&1&&(c.perfil=a[0]),o.$set(c)},i(a){f||(S(o.$$.fragment,a),f=!0)},o(a){N(o.$$.fragment,a),f=!1},d(a){a&&p(e),se(o)}}}function Oe(r){let e,l,t,s=r[13].icon+"",d,n,o,f=r[13].nome+"",m,a,_,c;return{c(){e=b("li"),l=b("a"),t=b("span"),d=G(s),n=$(),o=b("span"),m=G(f),c=$(),this.h()},l(h){e=v(h,"LI",{class:!0});var g=x(e);l=v(g,"A",{href:!0,class:!0});var y=x(l);t=v(y,"SPAN",{class:!0});var w=x(t);d=Y(w,s),w.forEach(p),n=C(y),o=v(y,"SPAN",{class:!0});var E=x(o);m=Y(E,f),E.forEach(p),y.forEach(p),c=C(g),g.forEach(p),this.h()},h(){i(t,"class","material-symbols-outlined mr-3 group-hover:scale-110"),i(o,"class",a=r[2]+" transition-all delay-50"),i(l,"href",_=r[13].link),i(l,"class","-mx-3 hover:brightness-90 bg-base-100 rounded-lg px-3 py-2 text-base hover:shadow-2xl font-semibold leading-7 text-text-primary flex items-center"),i(e,"class","space-y-2 py-3 w-full m-1 group")},m(h,g){I(h,e,g),u(e,l),u(l,t),u(t,d),u(l,n),u(l,o),u(o,m),u(e,c)},p(h,g){g&16&&s!==(s=h[13].icon+"")&&ne(d,s),g&16&&f!==(f=h[13].nome+"")&&ne(m,f),g&4&&a!==(a=h[2]+" transition-all delay-50")&&i(o,"class",a),g&16&&_!==(_=h[13].link)&&i(l,"href",_)},d(h){h&&p(e)}}}function ct(r){let e,l="light_mode";return{c(){e=b("span"),e.textContent=l,this.h()},l(t){e=v(t,"SPAN",{class:!0,"data-svelte-h":!0}),H(e)!=="svelte-1xff2ts"&&(e.textContent=l),this.h()},h(){i(e,"class","material-symbols-outlined mr-3 text-yellow-500 transition-all duration-150 animate-spin-once group-hover:scale-110")},m(t,s){I(t,e,s)},d(t){t&&p(e)}}}function ut(r){let e,l="dark_mode";return{c(){e=b("span"),e.textContent=l,this.h()},l(t){e=v(t,"SPAN",{class:!0,"data-svelte-h":!0}),H(e)!=="svelte-1o8bqik"&&(e.textContent=l),this.h()},h(){i(e,"class","material-symbols-outlined mr-3 text-blue-500 transition-all duration-150 animate-spin-once group-hover:scale-110")},m(t,s){I(t,e,s)},d(t){t&&p(e)}}}function Ue(r){let e,l,t,s="logout",d,n,o,f;return{c(){e=b("li"),l=b("a"),t=b("span"),t.textContent=s,d=$(),n=b("span"),o=G("Sair"),this.h()},l(m){e=v(m,"LI",{class:!0});var a=x(e);l=v(a,"A",{href:!0,class:!0});var _=x(l);t=v(_,"SPAN",{class:!0,"data-svelte-h":!0}),H(t)!=="svelte-l489a7"&&(t.textContent=s),d=C(_),n=v(_,"SPAN",{class:!0});var c=x(n);o=Y(c,"Sair"),c.forEach(p),_.forEach(p),a.forEach(p),this.h()},h(){i(t,"class","material-symbols-outlined mr-3 text-red-500 group-hover:scale-110"),i(n,"class",f=r[2]+" transition-all delay-50"),i(l,"href","logout"),i(l,"class","-mx-3 rounded-lg px-3 py-2 text-base hover:brightness-90 bg-base-100 hover:shadow-2xl font-semibold leading-7 text-text-primary flex items-center"),i(e,"class","space-y-2 py-3 w-full m-1 group")},m(m,a){I(m,e,a),u(e,l),u(l,t),u(l,d),u(l,n),u(n,o)},p(m,a){a&4&&f!==(f=m[2]+" transition-all delay-50")&&i(n,"class",f)},d(m){m&&p(e)}}}function ft(r){var Ie;let e,l,t,s="",d,n,o,f,m,a,_,c,h,g,y,w=`<span class="sr-only">Your Company</span> <img class="h-[50px] w-auto" src="${Ye}" alt=""/>`,E,j,Ae='<span class="material-symbols-outlined">menu</span>',he,pe,_e,U,q,be,B,J,V,oe,R,ve,ae,ge,re,K,ke,De,T=r[5].length>0&&Be(r);const je=[it,rt],z=[];function Me(k,A){var P;return((P=k[0])==null?void 0:P.id)!=0?0:1}m=Me(r),a=z[m]=je[m](r);let Q=me(r[4]),D=[];for(let k=0;k<Q.length;k+=1)D[k]=Oe(Ve(r,Q,k));function Pe(k,A){return k[3]=="dark"?ut:ct}let ie=Pe(r),O=ie(r),M=((Ie=r[0])==null?void 0:Ie.id)!=0&&Ue(r);return{c(){e=b("header"),l=b("nav"),t=b("div"),t.innerHTML=s,d=$(),n=b("div"),o=b("button"),T&&T.c(),f=$(),a.c(),_=$(),c=b("div"),h=b("div"),g=b("div"),y=b("a"),y.innerHTML=w,E=$(),j=b("button"),j.innerHTML=Ae,he=$(),pe=b("hr"),_e=$(),U=b("div"),q=b("ul");for(let k=0;k<D.length;k+=1)D[k].c();be=$(),B=b("ul"),J=b("li"),V=b("button"),O.c(),oe=$(),R=b("span"),ve=G("Mudar Tema"),ge=$(),M&&M.c(),this.h()},l(k){e=v(k,"HEADER",{class:!0,id:!0});var A=x(e);l=v(A,"NAV",{class:!0});var P=x(l);t=v(P,"DIV",{class:!0,"data-svelte-h":!0}),H(t)!=="svelte-1bmda48"&&(t.innerHTML=s),d=C(P),n=v(P,"DIV",{class:!0});var F=x(n);o=v(F,"BUTTON",{class:!0});var L=x(o);T&&T.l(L),L.forEach(p),f=C(F),a.l(F),F.forEach(p),P.forEach(p),_=C(A),c=v(A,"DIV",{class:!0,role:!0,"aria-modal":!0});var Z=x(c);h=v(Z,"DIV",{class:!0});var W=x(h);g=v(W,"DIV",{class:!0});var ce=x(g);y=v(ce,"A",{href:!0,class:!0,"data-svelte-h":!0}),H(y)!=="svelte-1nuy9la"&&(y.innerHTML=w),E=C(ce),j=v(ce,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),H(j)!=="svelte-sdjbjb"&&(j.innerHTML=Ae),ce.forEach(p),he=C(W),pe=v(W,"HR",{}),_e=C(W),U=v(W,"DIV",{class:!0});var ue=x(U);q=v(ue,"UL",{class:!0});var Le=x(q);for(let ye=0;ye<D.length;ye+=1)D[ye].l(Le);Le.forEach(p),be=C(ue),B=v(ue,"UL",{class:!0});var fe=x(B);J=v(fe,"LI",{class:!0});var Se=x(J);V=v(Se,"BUTTON",{class:!0});var de=x(V);O.l(de),oe=C(de),R=v(de,"SPAN",{class:!0});var Ne=x(R);ve=Y(Ne,"Mudar Tema"),Ne.forEach(p),de.forEach(p),Se.forEach(p),ge=C(fe),M&&M.l(fe),fe.forEach(p),ue.forEach(p),W.forEach(p),Z.forEach(p),A.forEach(p),this.h()},h(){i(t,"class","flex lg:flex-1 h-11"),i(o,"class","mr-4 group"),i(n,"class","justify-end text-text-primary flex items-center"),i(l,"class","mx-auto flex items-center justify-between p-3 lg:px-6"),i(y,"href","biblioteca"),i(y,"class","-m-1.5 p-1.5"),i(j,"type","button"),i(j,"class","-m-2.5 rounded-md p-2.5 text-text-primary"),i(g,"class","flex items-center justify-between mb-2"),i(q,"class","flex-1"),i(R,"class",ae=r[2]+" transition-all delay-50"),i(V,"class","-mx-3 rounded-lg px-3 py-2 text-base hover:brightness-90 bg-base-100 hover:shadow-2xl font-semibold leading-7 text-text-primary flex items-center w-full hover:underline"),i(J,"class","space-y-2 py-3 w-full m-1 group"),i(B,"class","justify-end"),i(U,"class","h-[80%] absolute w-full divide-y divide-gray-500/10 flex flex-col"),i(h,"class",re="fixed inset-y-0 left-0 z-10 overflow-x-hidden bg-base-100 p-6 pt-2 pl-2 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 "+r[1]+" transition-all delay-70 ease-linear"),i(c,"class","lg:flex"),i(c,"role","dialog"),i(c,"aria-modal","true"),i(e,"class","bg-base-100"),i(e,"id","navBar")},m(k,A){I(k,e,A),u(e,l),u(l,t),u(l,d),u(l,n),u(n,o),T&&T.m(o,null),u(n,f),z[m].m(n,null),u(e,_),u(e,c),u(c,h),u(h,g),u(g,y),u(g,E),u(g,j),u(h,he),u(h,pe),u(h,_e),u(h,U),u(U,q);for(let P=0;P<D.length;P+=1)D[P]&&D[P].m(q,null);u(U,be),u(U,B),u(B,J),u(J,V),O.m(V,null),u(V,oe),u(V,R),u(R,ve),u(B,ge),M&&M.m(B,null),K=!0,ke||(De=[we(j,"click",r[6]),we(V,"click",r[7])],ke=!0)},p(k,[A]){var F;k[5].length>0?T?(T.p(k,A),A&32&&S(T,1)):(T=Be(k),T.c(),S(T,1),T.m(o,null)):T&&(xe(),N(T,1,1,()=>{T=null}),Ee());let P=m;if(m=Me(k),m===P?z[m].p(k,A):(xe(),N(z[P],1,1,()=>{z[P]=null}),Ee(),a=z[m],a?a.p(k,A):(a=z[m]=je[m](k),a.c()),S(a,1),a.m(n,null)),A&20){Q=me(k[4]);let L;for(L=0;L<Q.length;L+=1){const Z=Ve(k,Q,L);D[L]?D[L].p(Z,A):(D[L]=Oe(Z),D[L].c(),D[L].m(q,null))}for(;L<D.length;L+=1)D[L].d(1);D.length=Q.length}ie!==(ie=Pe(k))&&(O.d(1),O=ie(k),O&&(O.c(),O.m(V,oe))),(!K||A&4&&ae!==(ae=k[2]+" transition-all delay-50"))&&i(R,"class",ae),((F=k[0])==null?void 0:F.id)!=0?M?M.p(k,A):(M=Ue(k),M.c(),M.m(B,null)):M&&(M.d(1),M=null),(!K||A&2&&re!==(re="fixed inset-y-0 left-0 z-10 overflow-x-hidden bg-base-100 p-6 pt-2 pl-2 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 "+k[1]+" transition-all delay-70 ease-linear"))&&i(h,"class",re)},i(k){K||(S(T),S(a),K=!0)},o(k){N(T),N(a),K=!1},d(k){k&&p(e),T&&T.d(),z[m].d(),Ge(D,k),O.d(),M&&M.d(),ke=!1,Qe(De)}}}function dt(r,e,l){let t,s,d,n,o;function f(){l(5,t=[]),localStorage.getItem("theme")!=null?localStorage.getItem("theme")=="dark"?(l(3,h="dark"),document.documentElement.setAttribute("data-theme",h)):localStorage.getItem("theme")=="light"&&(l(3,h="light"),document.documentElement.setAttribute("data-theme",h)):window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?l(3,h="dark"):l(3,h="light")}Fe(f);let m=[];tt.subscribe(w=>{m=w,l(5,t=[]),m.length==0&&l(5,t=[]);for(const E of m)t.push({link:"convites",nome:"Convite para Projeto: "+E.projeto.nome})});let a=null;Je.subscribe(w=>{l(0,a=w),a.id!=0?a.papel=="Administrador"?l(4,s=o):l(4,s=n):l(4,s=d)});let _="w-11",c="scale-0 fixed",h="light";function g(){l(1,_=_=="w-11"?"w-full":"w-11"),l(2,c=c=="scale-0 fixed"?"scale-100":"scale-0 fixed")}function y(){l(3,h=h=="light"?"dark":"light"),document.documentElement.setAttribute("data-theme",h),localStorage.setItem("theme",h)}return l(5,t=[{link:"convites",nome:"Convite para Projeto 1"}]),l(4,s=[{link:"biblioteca",nome:"Biblioteca de Projetos",icon:"library_books"}]),d=[{link:"biblioteca",nome:"Biblioteca de Projetos",icon:"library_books"}],n=[{link:"biblioteca",nome:"Biblioteca de Projetos",icon:"library_books"},{link:"projetos-pessoais",nome:"Seus Projetos",icon:"menu_book"},{link:"convites",nome:"Convites",icon:"email"}],o=[{link:"biblioteca",nome:"Biblioteca de Projetos",icon:"library_books"},{link:"cadastrar-usuario",nome:"Cadastrar Usuário",icon:"person_add"},{link:"gerenciar-curso",nome:"Gerenciar Curso",icon:"post_add"},{link:"projetos-pendentes",nome:"Projetos Pendentes",icon:"assignment_late"}],[a,_,c,h,s,t,g,y]}class mt extends Ce{constructor(e){super(),Te(this,e,dt,ft,$e,{})}}function ze(r,e,l){const t=r.slice();return t[4]=e[l],t[6]=l,t}function qe(r){let e=r[4].icone+"",l;return{c(){l=G(e)},l(t){l=Y(t,e)},m(t,s){I(t,l,s)},p(t,s){s&1&&e!==(e=t[4].icone+"")&&ne(l,e)},d(t){t&&p(l)}}}function Re(r){let e,l,t=r[4].mensagem+"",s,d,n,o='<span class="material-symbols-outlined">close</span>',f,m,a,_,c=r[4].icone!=""&&qe(r);function h(){return r[2](r[6])}return{c(){e=b("div"),c&&c.c(),l=$(),s=G(t),d=$(),n=b("button"),n.innerHTML=o,f=$(),this.h()},l(g){e=v(g,"DIV",{id:!0,class:!0});var y=x(e);c&&c.l(y),l=C(y),s=Y(y,t),d=C(y),n=v(y,"BUTTON",{class:!0,"data-svelte-h":!0}),H(n)!=="svelte-1o9wk8b"&&(n.innerHTML=o),f=C(y),y.forEach(p),this.h()},h(){i(n,"class","ml-auto"),i(e,"id","alert"+r[6]),i(e,"class",m="rounded-xl grid grid-flow-col p-2 m-1 "+r[4].cor+" transition-all duration-1000")},m(g,y){I(g,e,y),c&&c.m(e,null),u(e,l),u(e,s),u(e,d),u(e,n),u(e,f),a||(_=we(n,"click",h),a=!0)},p(g,y){r=g,r[4].icone!=""?c?c.p(r,y):(c=qe(r),c.c(),c.m(e,l)):c&&(c.d(1),c=null),y&1&&t!==(t=r[4].mensagem+"")&&ne(s,t),y&1&&m!==(m="rounded-xl grid grid-flow-col p-2 m-1 "+r[4].cor+" transition-all duration-1000")&&i(e,"class",m)},d(g){g&&p(e),c&&c.d(),a=!1,_()}}}function ht(r){let e,l=me(r[0]),t=[];for(let s=0;s<l.length;s+=1)t[s]=Re(ze(r,l,s));return{c(){e=b("div");for(let s=0;s<t.length;s+=1)t[s].c();this.h()},l(s){e=v(s,"DIV",{class:!0});var d=x(e);for(let n=0;n<t.length;n+=1)t[n].l(d);d.forEach(p),this.h()},h(){i(e,"class","grid absolute w-[70%] ml-[10%]")},m(s,d){I(s,e,d);for(let n=0;n<t.length;n+=1)t[n]&&t[n].m(e,null)},p(s,[d]){if(d&3){l=me(s[0]);let n;for(n=0;n<l.length;n+=1){const o=ze(s,l,n);t[n]?t[n].p(o,d):(t[n]=Re(o),t[n].c(),t[n].m(e,null))}for(;n<t.length;n+=1)t[n].d(1);t.length=l.length}},i:X,o:X,d(s){s&&p(e),Ge(t,s)}}}function pt(r,e,l){let t=[];He.subscribe(o=>{l(0,t=o),s()});function s(o){setTimeout(()=>{d(0)},2e3)}function d(o){o==0?t.splice(0,1):t.splice(o,o),He.set([...t])}return[t,s,o=>{s()}]}class _t extends Ce{constructor(e){super(),Te(this,e,pt,ht,$e,{})}}function bt(r){let e;const l=r[2].default,t=We(l,r,r[1],null);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,d){t&&t.m(s,d),e=!0},p(s,d){t&&t.p&&(!e||d&2)&&Xe(t,l,s,s[1],e?et(l,s[1],d,null):Ze(s[1]),null)},i(s){e||(S(t,s),e=!0)},o(s){N(t,s),e=!1},d(s){t&&t.d(s)}}}function vt(r){let e,l;return e=new st({}),{c(){ee(e.$$.fragment)},l(t){te(e.$$.fragment,t)},m(t,s){le(e,t,s),l=!0},p:X,i(t){l||(S(e.$$.fragment,t),l=!0)},o(t){N(e.$$.fragment,t),l=!1},d(t){se(e,t)}}}function gt(r){let e,l,t,s,d,n,o,f,m,a,_=`<img class="h-[40px] w-auto" src="${Ye}" alt=""/>`,c;l=new mt({}),s=new _t({});const h=[vt,bt],g=[];function y(w,E){return w[0]!=200?0:1}return o=y(r),f=g[o]=h[o](r),{c(){e=b("div"),ee(l.$$.fragment),t=$(),ee(s.$$.fragment),d=$(),n=b("main"),f.c(),m=$(),a=b("footer"),a.innerHTML=_,this.h()},l(w){e=v(w,"DIV",{class:!0});var E=x(e);te(l.$$.fragment,E),t=C(E),te(s.$$.fragment,E),d=C(E),n=v(E,"MAIN",{class:!0});var j=x(n);f.l(j),j.forEach(p),m=C(E),a=v(E,"FOOTER",{class:!0,"data-svelte-h":!0}),H(a)!=="svelte-p7l331"&&(a.innerHTML=_),E.forEach(p),this.h()},h(){i(n,"class","svelte-djvx7b"),i(a,"class","bg-base-100 svelte-djvx7b"),i(e,"class","app svelte-djvx7b")},m(w,E){I(w,e,E),le(l,e,null),u(e,t),le(s,e,null),u(e,d),u(e,n),g[o].m(n,null),u(e,m),u(e,a),c=!0},p(w,[E]){let j=o;o=y(w),o===j?g[o].p(w,E):(xe(),N(g[j],1,1,()=>{g[j]=null}),Ee(),f=g[o],f?f.p(w,E):(f=g[o]=h[o](w),f.c()),S(f,1),f.m(n,null))},i(w){c||(S(l.$$.fragment,w),S(s.$$.fragment,w),S(f),c=!0)},o(w){N(l.$$.fragment,w),N(s.$$.fragment,w),N(f),c=!1},d(w){w&&p(e),se(l),se(s),g[o].d()}}}function kt(r,e,l){let{$$slots:t={},$$scope:s}=e,d;lt.subscribe(o=>{l(0,d=o)});async function n(){const o=ot.getCookie("email");if(o){const f=await nt.get("usuarios/email",{email:o});f&&Je.set(f)}}return Fe(n),r.$$set=o=>{"$$scope"in o&&l(1,s=o.$$scope)},[d,s,t]}class Mt extends Ce{constructor(e){super(),Te(this,e,kt,gt,$e,{})}}export{Mt as component,jt as universal};
