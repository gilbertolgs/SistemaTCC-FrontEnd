var Pe=Object.defineProperty;var Ue=(n,e,t)=>e in n?Pe(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var q=(n,e,t)=>(Ue(n,typeof e!="symbol"?e+"":e,t),t);import{s as we,r as je,o as ke,n as pe,e as ye,f as Ee}from"../chunks/scheduler.e38c76a0.js";import{S as $e,i as De,c as j,s as x,f as k,g as $,k as z,h as P,d as _,l as g,a as A,m as h,A as W,o as F,q as U,z as re,r as ae,u as I,b as Ie,t as Y,j as Z,n as ee,v as te,w as oe,x as le,y as ne,F as Te,p as Se}from"../chunks/index.a3868cec.js";import{b as Ae,U as Ve,p as he}from"../chunks/stores.8228ae5f.js";import{D as Me}from"../chunks/DropDown.6b08ac66.js";import{M as Ne}from"../chunks/Modal.f5fdb1b2.js";import{e as _e}from"../chunks/each.e59479a4.js";import{A as X}from"../chunks/axiosInstance.ef705138.js";import{P as Le}from"../chunks/Projeto.bfd103f3.js";class Oe{constructor(e,t,c,d,o){q(this,"id");q(this,"idProjeto");q(this,"idUsuario");q(this,"usuario");q(this,"conteudo");this.id=e,this.idProjeto=t,this.idUsuario=c,this.usuario=d,this.conteudo=o}}function ge(n,e,t){const c=n.slice();return c[16]=e[t],c}function qe(n){var r,i;let e,t=n[16].conteudo+"",c,d,o=(n[16].idUsuario==((r=n[4])==null?void 0:r.id)||((i=n[4])==null?void 0:i.papel)=="Administrador")&&ve(n);return{c(){o&&o.c(),e=x(),c=Y(t)},l(l){o&&o.l(l),e=P(l),c=Z(l,t)},m(l,u){o&&o.m(l,u),A(l,e,u),A(l,c,u),d=!0},p(l,u){var m,C;l[16].idUsuario==((m=l[4])==null?void 0:m.id)||((C=l[4])==null?void 0:C.papel)=="Administrador"?o?(o.p(l,u),u&18&&U(o,1)):(o=ve(l),o.c(),U(o,1),o.m(e.parentNode,e)):o&&(re(),I(o,1,1,()=>{o=null}),ae()),(!d||u&2)&&t!==(t=l[16].conteudo+"")&&ee(c,t)},i(l){d||(U(o),d=!0)},o(l){I(o),d=!1},d(l){l&&(_(e),_(c)),o&&o.d(l)}}}function ze(n){let e,t,c,d,o,r,i=`<span class="material-symbols-outlined">done</span>
                    Salvar`,l,u,m=`<span class="material-symbols-outlined">close</span>
                    Cancelar`,C,y;function D(){return n[12](n[16])}function p(){return n[13](n[16])}return{c(){e=j("div"),t=j("textarea"),d=x(),o=j("div"),r=j("button"),r.innerHTML=i,l=x(),u=j("button"),u.innerHTML=m,this.h()},l(a){e=k(a,"DIV",{class:!0});var v=$(e);t=k(v,"TEXTAREA",{placeholder:!0,class:!0}),$(t).forEach(_),d=P(v),o=k(v,"DIV",{class:!0});var f=$(o);r=k(f,"BUTTON",{class:!0,"data-svelte-h":!0}),z(r)!=="svelte-lc77ne"&&(r.innerHTML=i),l=P(f),u=k(f,"BUTTON",{class:!0,"data-svelte-h":!0}),z(u)!=="svelte-1yqdcqo"&&(u.innerHTML=m),f.forEach(_),v.forEach(_),this.h()},h(){g(t,"placeholder",c=n[16].conteudo),g(t,"class","col-span-5 txtPrimaryComponent resize-none"),g(r,"class","w-full ml-auto mb-auto hover:brightness-90 bg-bg-primary rounded-xl p-3 pb-2 flex justify-center bg-green-500"),g(u,"class","w-full ml-auto mb-auto hover:brightness-90 bg-bg-primary rounded-xl p-3 pb-2 flex justify-center bg-red-500"),g(o,"class","ml-auto mb-auto"),g(e,"class","grid grid-flow-col")},m(a,v){A(a,e,v),h(e,t),W(t,n[3]),h(e,d),h(e,o),h(o,r),h(o,l),h(o,u),C||(y=[F(t,"input",n[11]),F(r,"click",D),F(u,"click",p)],C=!0)},p(a,v){n=a,v&2&&c!==(c=n[16].conteudo)&&g(t,"placeholder",c),v&8&&W(t,n[3])},i:pe,o:pe,d(a){a&&_(e),C=!1,je(y)}}}function ve(n){let e,t,c="more_vert",d,o,r,i;return r=new Me({props:{id:n[16].id,dados:n[6].aluno,perfil:null}}),{c(){e=j("button"),t=j("span"),t.textContent=c,d=x(),o=j("div"),te(r.$$.fragment),this.h()},l(l){e=k(l,"BUTTON",{class:!0});var u=$(e);t=k(u,"SPAN",{class:!0,"data-svelte-h":!0}),z(t)!=="svelte-1wa0ecf"&&(t.textContent=c),d=P(u),o=k(u,"DIV",{class:!0});var m=$(o);oe(r.$$.fragment,m),m.forEach(_),u.forEach(_),this.h()},h(){g(t,"class","material-symbols-outlined hover:scale-110"),g(o,"class","dropDownComponent group-hover:openDropDownComponent"),g(e,"class","absolute right-3 transition-all group")},m(l,u){A(l,e,u),h(e,t),h(e,d),h(e,o),le(r,o,null),i=!0},p(l,u){const m={};u&2&&(m.id=l[16].id),r.$set(m)},i(l){i||(U(r.$$.fragment,l),i=!0)},o(l){I(r.$$.fragment,l),i=!1},d(l){l&&_(e),ne(r)}}}function be(n){let e,t,c=n[16].usuario.nome+"",d,o,r,i,l,u,m;const C=[ze,qe],y=[];function D(p,a){return p[2]==p[16].id?0:1}return i=D(n),l=y[i]=C[i](n),{c(){e=j("li"),t=j("a"),d=Y(c),r=x(),l.c(),u=x(),this.h()},l(p){e=k(p,"LI",{class:!0});var a=$(e);t=k(a,"A",{href:!0,class:!0});var v=$(t);d=Z(v,c),v.forEach(_),r=P(a),l.l(a),u=P(a),a.forEach(_),this.h()},h(){g(t,"href",o="usuario?id="+n[16].idUsuario),g(t,"class","text-content-primary underline hover:brightness-90"),g(e,"class","flex flex-col mb-3 border border-bg-secondary p-3 rounded-lg relative")},m(p,a){A(p,e,a),h(e,t),h(t,d),h(e,r),y[i].m(e,null),h(e,u),m=!0},p(p,a){(!m||a&2)&&c!==(c=p[16].usuario.nome+"")&&ee(d,c),(!m||a&2&&o!==(o="usuario?id="+p[16].idUsuario))&&g(t,"href",o);let v=i;i=D(p),i===v?y[i].p(p,a):(re(),I(y[v],1,1,()=>{y[v]=null}),ae(),l=y[i],l?l.p(p,a):(l=y[i]=C[i](p),l.c()),U(l,1),l.m(e,u))},i(p){m||(U(l),m=!0)},o(p){I(l),m=!1},d(p){p&&_(e),y[i].d()}}}function Be(n){let e,t,c="Comentarios:",d,o,r,i,l="Comentar",u,m,C,y,D,p=_e(n[1]),a=[];for(let f=0;f<p.length;f+=1)a[f]=be(ge(n,p,f));const v=f=>I(a[f],1,1,()=>{a[f]=null});return{c(){e=j("div"),t=j("h1"),t.textContent=c,d=x(),o=j("textarea"),r=x(),i=j("button"),i.textContent=l,u=x(),m=j("ul");for(let f=0;f<a.length;f+=1)a[f].c();this.h()},l(f){e=k(f,"DIV",{class:!0});var w=$(e);t=k(w,"H1",{"data-svelte-h":!0}),z(t)!=="svelte-170hvhk"&&(t.textContent=c),d=P(w),o=k(w,"TEXTAREA",{name:!0,id:!0,cols:!0,rows:!0,class:!0}),$(o).forEach(_),r=P(w),i=k(w,"BUTTON",{class:!0,"data-svelte-h":!0}),z(i)!=="svelte-i6thez"&&(i.textContent=l),w.forEach(_),u=P(f),m=k(f,"UL",{class:!0});var s=$(m);for(let T=0;T<a.length;T+=1)a[T].l(s);s.forEach(_),this.h()},h(){g(o,"name",""),g(o,"id",""),g(o,"cols","30"),g(o,"rows","4"),g(o,"class","bg-bg-primary resize-none border border-bg-secondary"),g(i,"class","p-2 bg-content-primary hover:scale-110 transition-all rounded-md font-bold hover:brightness-90 flex items-center w-20 mt-2 ml-auto"),g(e,"class","flex flex-col my-2 border border-bg-secondary p-3 rounded-lg"),g(m,"class","mt-5")},m(f,w){A(f,e,w),h(e,t),h(e,d),h(e,o),W(o,n[0]),h(e,r),h(e,i),A(f,u,w),A(f,m,w);for(let s=0;s<a.length;s+=1)a[s]&&a[s].m(m,null);C=!0,y||(D=[F(o,"input",n[10]),F(i,"click",n[5])],y=!0)},p(f,[w]){if(w&1&&W(o,f[0]),w&478){p=_e(f[1]);let s;for(s=0;s<p.length;s+=1){const T=ge(f,p,s);a[s]?(a[s].p(T,w),U(a[s],1)):(a[s]=be(T),a[s].c(),U(a[s],1),a[s].m(m,null))}for(re(),s=p.length;s<a.length;s+=1)v(s);ae()}},i(f){if(!C){for(let w=0;w<p.length;w+=1)U(a[w]);C=!0}},o(f){a=a.filter(Boolean);for(let w=0;w<a.length;w+=1)I(a[w]);C=!1},d(f){f&&(_(e),_(u),_(m)),Ie(a,f),y=!1,je(D)}}}function He(n,e,t){let{projeto:c}=e,d,o=[],r,i,l;Ae.subscribe(s=>{t(4,l=s)});async function u(){t(1,o=await X.get("projetoComentarios",{idProjeto:c.id}))}ke(u);async function m(){if(l){let s=new Oe(0,c.id,l.id,new Ve(0,"null","null","null","null",0,"null"),d);await X.post("projetoComentarios/criarComentario",s),t(0,d=""),u()}}const C={admin:[{nome:"Excluir Comentario",botao:s=>p(s)}],aluno:[{nome:"Editar Comentario",botao:s=>D(s)},{nome:"Excluir Comentario",botao:s=>p(s)}]};async function y(s){const T={id:s,conteudo:i};await X.put("projetoComentarios/atualizarComentario",T),D(s),u()}function D(s){var S;const T=(S=o.find(B=>B.id==s))==null?void 0:S.conteudo;T&&t(3,i=T),t(2,r=s==r?0:s)}async function p(s){await X.delete(`projetoComentarios/${s}/deletarComentario`),u()}function a(){d=this.value,t(0,d)}function v(){i=this.value,t(3,i)}const f=s=>{y(s.id)},w=s=>{D(s.id)};return n.$$set=s=>{"projeto"in s&&t(9,c=s.projeto)},[d,o,r,i,l,m,C,y,D,c,a,v,f,w]}class Re extends $e{constructor(e){super(),De(this,e,He,Be,we,{projeto:9})}}const Xe=!0,Fe=!0,nt=Object.freeze(Object.defineProperty({__proto__:null,csr:Fe,prerender:Xe},Symbol.toStringTag,{value:"Module"}));function Ce(n){let e,t,c;function d(r){n[5](r)}let o={};return n[0]!==void 0&&(o.projeto=n[0]),e=new Re({props:o}),ye.push(()=>Te(e,"projeto",d)),{c(){te(e.$$.fragment)},l(r){oe(e.$$.fragment,r)},m(r,i){le(e,r,i),c=!0},p(r,i){const l={};!t&&i&1&&(t=!0,l.projeto=r[0],Ee(()=>t=!1)),e.$set(l)},i(r){c||(U(e.$$.fragment,r),c=!0)},o(r){I(e.$$.fragment,r),c=!1},d(r){ne(e,r)}}}function Ge(n){let e,t,c,d,o,r,i,l,u,m,C,y=n[0].nome+"",D,p,a,v,f,w="settings",s,T,S,B,L,H=n[0].descricao+"",G,se,O,V;document.title=e=he+" - "+n[0].nome+" ";function xe(b){n[4](b)}let ie={dados:n[3]};n[2]!==void 0&&(ie.toggleModal=n[2]),d=new Ne({props:ie}),ye.push(()=>Te(d,"toggleModal",xe)),S=new Me({props:{id:0,dados:n[1],perfil:null}});let E=n[0].id!=0&&Ce(n);return{c(){t=j("meta"),c=x(),te(d.$$.fragment),r=x(),i=j("div"),l=j("div"),u=j("div"),m=j("div"),C=j("h1"),D=Y(y),p=x(),a=j("div"),v=j("button"),f=j("span"),f.textContent=w,s=x(),T=j("div"),te(S.$$.fragment),B=x(),L=j("p"),G=Y(H),se=x(),O=j("div"),E&&E.c(),this.h()},l(b){const M=Se("svelte-19fnyjp",document.head);t=k(M,"META",{name:!0,content:!0}),M.forEach(_),c=P(b),oe(d.$$.fragment,b),r=P(b),i=k(b,"DIV",{class:!0});var R=$(i);l=k(R,"DIV",{class:!0});var N=$(l);u=k(N,"DIV",{class:!0});var J=$(u);m=k(J,"DIV",{class:!0});var Q=$(m);C=k(Q,"H1",{class:!0});var ue=$(C);D=Z(ue,y),ue.forEach(_),p=P(Q),a=k(Q,"DIV",{});var ce=$(a);v=k(ce,"BUTTON",{class:!0});var K=$(v);f=k(K,"SPAN",{class:!0,"data-svelte-h":!0}),z(f)!=="svelte-1bqlx72"&&(f.textContent=w),s=P(K),T=k(K,"DIV",{class:!0});var de=$(T);oe(S.$$.fragment,de),de.forEach(_),K.forEach(_),ce.forEach(_),Q.forEach(_),B=P(J),L=k(J,"P",{class:!0});var fe=$(L);G=Z(fe,H),fe.forEach(_),J.forEach(_),se=P(N),O=k(N,"DIV",{});var me=$(O);E&&E.l(me),me.forEach(_),N.forEach(_),R.forEach(_),this.h()},h(){g(t,"name","description"),g(t,"content","Svelte demo app"),g(C,"class","text-text-secondary font-bold inline-block pb-3 flex-1"),g(f,"class","material-symbols-outlined justify-end group-hover:rotate-45 transition-all"),g(T,"class","dropDownComponent group-hover:openDropDownComponent"),g(v,"class","m-0 p-0 group"),g(m,"class","flex w-full justify-center"),g(L,"class","text-text-secondary font-bold inline-block pb-2"),g(u,"class","flex flex-col items-center"),g(l,"class","bg-bg-primary shadow-xl p-10 flex flex-col gap-4 text-sm rounded-xl w-full divide-y divide-bg-bg-secondary"),g(i,"class","flex items-center h-max mx-auto flex-col w-full text-text-primary")},m(b,M){h(document.head,t),A(b,c,M),le(d,b,M),A(b,r,M),A(b,i,M),h(i,l),h(l,u),h(u,m),h(m,C),h(C,D),h(m,p),h(m,a),h(a,v),h(v,f),h(v,s),h(v,T),le(S,T,null),h(u,B),h(u,L),h(L,G),h(l,se),h(l,O),E&&E.m(O,null),V=!0},p(b,[M]){(!V||M&1)&&e!==(e=he+" - "+b[0].nome+" ")&&(document.title=e);const R={};!o&&M&4&&(o=!0,R.toggleModal=b[2],Ee(()=>o=!1)),d.$set(R),(!V||M&1)&&y!==(y=b[0].nome+"")&&ee(D,y);const N={};M&2&&(N.dados=b[1]),S.$set(N),(!V||M&1)&&H!==(H=b[0].descricao+"")&&ee(G,H),b[0].id!=0?E?(E.p(b,M),M&1&&U(E,1)):(E=Ce(b),E.c(),U(E,1),E.m(O,null)):E&&(re(),I(E,1,1,()=>{E=null}),ae())},i(b){V||(U(d.$$.fragment,b),U(S.$$.fragment,b),U(E),V=!0)},o(b){I(d.$$.fragment,b),I(S.$$.fragment,b),I(E),V=!1},d(b){b&&(_(c),_(r),_(i)),_(t),ne(d,b),ne(S),E&&E.d()}}}function Je(n,e,t){let c=localStorage.getItem("login");c&&(c=JSON.parse(c));let d="",o,r=new Le(0,0,0,"","",null);function i(){const p=new URLSearchParams(window.location.search);d+=p.toString().split("=")[1],o=parseInt(d),t(1,m[0].link=`configuracoes-projeto?id=${o}`,m),l()}async function l(){t(0,r=await X.get(`projetos/${o}`))}ke(i);let u,m=[{link:"configuracoes-projeto",nome:"Gerenciar Projeto"}],C;function y(p){C=p,t(2,C)}function D(p){r=p,t(0,r)}return[r,m,C,u,y,D]}class rt extends $e{constructor(e){super(),De(this,e,Je,Ge,we,{})}}export{rt as component,nt as universal};
