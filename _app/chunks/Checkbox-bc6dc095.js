import{S as P,i as z,s as A,a1 as B,C as j,e as k,k as L,c as y,a as S,m as q,d as C,b as E,F as I,G as g,g as F,H as v,W as G,Y as H,Z as T,_ as U,z as W,q as Y,o as Z,L as N,N as p}from"./vendor-34a2d25b.js";import{u as D}from"./uuid-770ab681.js";/* empty css                                              */function J(n){let e,l,r,o,_,d,f,u,c,m;const h=n[7].default,a=B(h,n,n[6],null);let s=[n[5],{id:d="checkbox-"+n[4]},{class:f="form-checkbox is-"+n[3]}],b={};for(let t=0;t<s.length;t+=1)b=j(b,s[t]);return{c(){e=k("label"),l=k("input"),r=L(),o=k("i"),_=L(),a&&a.c(),this.h()},l(t){e=y(t,"LABEL",{id:!0,class:!0});var i=S(e);l=y(i,"INPUT",{type:!0,class:!0}),r=q(i),o=y(i,"I",{class:!0}),S(o).forEach(C),_=q(i),a&&a.l(i),i.forEach(C),this.h()},h(){E(l,"type","checkbox"),l.indeterminate=n[1],E(l,"class","svelte-1jjgtfw"),E(o,"class","form-icon svelte-1jjgtfw"),I(e,b),g(e,"form-inline",n[2]),g(e,"svelte-1jjgtfw",!0)},m(t,i){F(t,e,i),v(e,l),l.checked=n[0],v(e,r),v(e,o),v(e,_),a&&a.m(e,null),u=!0,c||(m=G(l,"change",n[8]),c=!0)},p(t,[i]){(!u||i&2)&&(l.indeterminate=t[1]),i&1&&(l.checked=t[0]),a&&a.p&&(!u||i&64)&&H(a,h,t,t[6],u?U(h,t[6],i,null):T(t[6]),null),I(e,b=W(s,[i&32&&t[5],{id:d},(!u||i&8&&f!==(f="form-checkbox is-"+t[3]))&&{class:f}])),g(e,"form-inline",t[2]),g(e,"svelte-1jjgtfw",!0)},i(t){u||(Y(a,t),u=!0)},o(t){Z(a,t),u=!1},d(t){t&&C(e),a&&a.d(t),c=!1,m()}}}function K(n,e,l){const r=["value","indeterminate","inline","validity"];let o=N(e,r),{$$slots:_={},$$scope:d}=e,{value:f=!1}=e,{indeterminate:u=!1}=e,{inline:c=!1}=e,{validity:m=!1}=e;const h=D();function a(){f=this.checked,l(0,f)}return n.$$set=s=>{e=j(j({},e),p(s)),l(5,o=N(e,r)),"value"in s&&l(0,f=s.value),"indeterminate"in s&&l(1,u=s.indeterminate),"inline"in s&&l(2,c=s.inline),"validity"in s&&l(3,m=s.validity),"$$scope"in s&&l(6,d=s.$$scope)},[f,u,c,m,h,o,d,_,a]}class R extends P{constructor(e){super();z(this,e,K,J,A,{value:0,indeterminate:1,inline:2,validity:3})}}export{R as C};