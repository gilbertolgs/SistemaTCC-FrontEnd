import{s as q,n as H}from"./scheduler.3ede1d93.js";import{S as z,i as A,g as d,s as L,m as M,h as c,j as u,y as P,c as S,n as T,f as h,k as o,a as B,z as i,o as k}from"./index.0254179f.js";function F(n){let e,a,_='<img src="" alt="City" class="h-40 w-full object-cover object-center hidden"/>',f,t,v,l,p=n[0].nome+"",x,y,C,m,b,g=n[0].descricao+"",w;return{c(){e=d("div"),a=d("div"),a.innerHTML=_,f=L(),t=d("div"),v=d("h3"),l=d("a"),x=M(p),C=L(),m=d("div"),b=d("p"),w=M(g),this.h()},l(s){e=c(s,"DIV",{class:!0});var r=u(e);a=c(r,"DIV",{class:!0,"data-svelte-h":!0}),P(a)!=="svelte-1op978b"&&(a.innerHTML=_),f=S(r),t=c(r,"DIV",{class:!0});var E=u(t);v=c(E,"H3",{class:!0});var j=u(v);l=c(j,"A",{href:!0,class:!0});var D=u(l);x=T(D,p),D.forEach(h),j.forEach(h),C=S(E),m=c(E,"DIV",{class:!0});var I=u(m);b=c(I,"P",{});var V=u(b);w=T(V,g),V.forEach(h),I.forEach(h),E.forEach(h),r.forEach(h),this.h()},h(){o(a,"class","h-40 bg-content-primary"),o(l,"href",y=n[1]+"?id="+n[0].id),o(l,"class","hover:underline"),o(v,"class","mb-2 text-base font-semibold text-content-primary"),o(m,"class","flex flex-row justify-between text-xs mt-2 text-text-secondary"),o(t,"class","h-1/2 p-4 "),o(e,"class","group relative rounded-lg overflow-hidden bg-bg-primary hover:shadow-2xl hover:scale-105 transition-all m-4 lg:w-[30%] border border-text-primary")},m(s,r){B(s,e,r),i(e,a),i(e,f),i(e,t),i(t,v),i(v,l),i(l,x),i(t,C),i(t,m),i(m,b),i(b,w)},p(s,[r]){r&1&&p!==(p=s[0].nome+"")&&k(x,p),r&3&&y!==(y=s[1]+"?id="+s[0].id)&&o(l,"href",y),r&1&&g!==(g=s[0].descricao+"")&&k(w,g)},i:H,o:H,d(s){s&&h(e)}}}function G(n,e,a){let{item:_}=e,{tipo:f}=e;return n.$$set=t=>{"item"in t&&a(0,_=t.item),"tipo"in t&&a(1,f=t.tipo)},[_,f]}class N extends z{constructor(e){super(),A(this,e,G,F,q,{item:0,tipo:1})}}export{N as C};
