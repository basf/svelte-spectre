import{S as U,i as q,s as A,$ as C,B as j,e as y,k as E,c as p,a as L,n as B,d as k,b as S,D as I,E as v,f as D,F as b,U as F,W as J,X as N,Y as T,p as W,x as X,u as Y,J as P,L as w}from"./vendor-98762a9b.js";import{u as z}from"./uuid-770ab681.js";/* empty css                                              */function G(i){let e,s,o,f,r,_,u,n,c,h;const d=i[6].default,t=C(d,i,i[5],null);let g=[i[4],{id:_="switch-"+i[3]},{class:u="form-switch is-"+i[2]}],m={};for(let l=0;l<g.length;l+=1)m=j(m,g[l]);return{c(){e=y("label"),s=y("input"),o=E(),f=y("i"),r=E(),t&&t.c(),this.h()},l(l){e=p(l,"LABEL",{id:!0,class:!0});var a=L(e);s=p(a,"INPUT",{type:!0,class:!0}),o=B(a),f=p(a,"I",{class:!0}),L(f).forEach(k),r=B(a),t&&t.l(a),a.forEach(k),this.h()},h(){S(s,"type","checkbox"),S(s,"class","svelte-1jjgtfw"),S(f,"class","form-icon svelte-1jjgtfw"),I(e,m),v(e,"form-inline",i[1]),v(e,"svelte-1jjgtfw",!0)},m(l,a){D(l,e,a),b(e,s),s.checked=i[0],b(e,o),b(e,f),b(e,r),t&&t.m(e,null),n=!0,c||(h=F(s,"change",i[7]),c=!0)},p(l,[a]){a&1&&(s.checked=l[0]),t&&t.p&&(!n||a&32)&&J(t,d,l,l[5],n?T(d,l[5],a,null):N(l[5]),null),I(e,m=W(g,[a&16&&l[4],{id:_},(!n||a&4&&u!==(u="form-switch is-"+l[2]))&&{class:u}])),v(e,"form-inline",l[1]),v(e,"svelte-1jjgtfw",!0)},i(l){n||(X(t,l),n=!0)},o(l){Y(t,l),n=!1},d(l){l&&k(e),t&&t.d(l),c=!1,h()}}}function H(i,e,s){const o=["value","inline","validity"];let f=P(e,o),{$$slots:r={},$$scope:_}=e,{value:u=!1}=e,{inline:n=!1}=e,{validity:c=!1}=e;const h=z();function d(){u=this.checked,s(0,u)}return i.$$set=t=>{e=j(j({},e),w(t)),s(4,f=P(e,o)),"value"in t&&s(0,u=t.value),"inline"in t&&s(1,n=t.inline),"validity"in t&&s(2,c=t.validity),"$$scope"in t&&s(5,_=t.$$scope)},[u,n,c,h,f,_,r,d]}class Q extends U{constructor(e){super();q(this,e,H,G,A,{value:0,inline:1,validity:2})}}export{Q as S};