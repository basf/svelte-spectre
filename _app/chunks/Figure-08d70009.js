import{S as A,i as B,s as D,$ as z,e as d,c as b,D as h,E as c,f as k,p as F,d as g,a as E,b as I,W as G,X as S,Y as j,x as m,u as v,B as p,k as J,n as L,F as M,r as N,w as O,J as C,a0 as R,L as T}from"./vendor-98762a9b.js";/* empty css                                              */const U=o=>({}),P=o=>({});function W(o){let e,r=[{class:"img-responsive"},o[3]],i={};for(let n=0;n<r.length;n+=1)i=p(i,r[n]);return{c(){e=d("img"),this.h()},l(n){e=b(n,"IMG",{class:!0}),this.h()},h(){h(e,i),c(e,"img-fit-contain",o[0]),c(e,"img-fit-cover",o[1]),c(e,"svelte-fzs4am",!0)},m(n,a){k(n,e,a)},p(n,a){h(e,i=F(r,[{class:"img-responsive"},a&8&&n[3]])),c(e,"img-fit-contain",n[0]),c(e,"img-fit-cover",n[1]),c(e,"svelte-fzs4am",!0)},d(n){n&&g(e)}}}function q(o){let e,r,i;const n=o[6].default,a=z(n,o,o[5],null);return{c(){e=d("figcaption"),a&&a.c(),this.h()},l(s){e=b(s,"FIGCAPTION",{class:!0});var t=E(e);a&&a.l(t),t.forEach(g),this.h()},h(){I(e,"class",r="figure-caption text-"+o[2]+" svelte-fzs4am")},m(s,t){k(s,e,t),a&&a.m(e,null),i=!0},p(s,t){a&&a.p&&(!i||t&32)&&G(a,n,s,s[5],i?j(n,s[5],t,null):S(s[5]),null),(!i||t&4&&r!==(r="figure-caption text-"+s[2]+" svelte-fzs4am"))&&I(e,"class",r)},i(s){i||(m(a,s),i=!0)},o(s){v(a,s),i=!1},d(s){s&&g(e),a&&a.d(s)}}}function X(o){let e,r,i;const n=o[6].img,a=z(n,o,o[5],P),s=a||W(o);let t=o[4].default&&q(o),_=[o[3],{class:"figure"}],u={};for(let l=0;l<_.length;l+=1)u=p(u,_[l]);return{c(){e=d("figure"),s&&s.c(),r=J(),t&&t.c(),this.h()},l(l){e=b(l,"FIGURE",{class:!0});var f=E(e);s&&s.l(f),r=L(f),t&&t.l(f),f.forEach(g),this.h()},h(){h(e,u),c(e,"svelte-fzs4am",!0)},m(l,f){k(l,e,f),s&&s.m(e,null),M(e,r),t&&t.m(e,null),i=!0},p(l,[f]){a?a.p&&(!i||f&32)&&G(a,n,l,l[5],i?j(n,l[5],f,U):S(l[5]),P):s&&s.p&&(!i||f&11)&&s.p(l,i?f:-1),l[4].default?t?(t.p(l,f),f&16&&m(t,1)):(t=q(l),t.c(),m(t,1),t.m(e,null)):t&&(N(),v(t,1,1,()=>{t=null}),O()),h(e,u=F(_,[f&8&&l[3],{class:"figure"}])),c(e,"svelte-fzs4am",!0)},i(l){i||(m(s,l),m(t),i=!0)},o(l){v(s,l),v(t),i=!1},d(l){l&&g(e),s&&s.d(l),t&&t.d()}}}function Y(o,e,r){const i=["contain","cover","align"];let n=C(e,i),{$$slots:a={},$$scope:s}=e;const t=R(a);let{contain:_=!1}=e,{cover:u=!1}=e,{align:l="center"}=e;return o.$$set=f=>{e=p(p({},e),T(f)),r(3,n=C(e,i)),"contain"in f&&r(0,_=f.contain),"cover"in f&&r(1,u=f.cover),"align"in f&&r(2,l=f.align),"$$scope"in f&&r(5,s=f.$$scope)},[_,u,l,n,t,s,a]}class Q extends A{constructor(e){super();B(this,e,Y,X,D,{contain:0,cover:1,align:2})}}export{Q as F};