import{S as N,i as P,s as Q,a1 as A,e as v,c as k,a as E,d as h,b as D,g as j,Y as q,Z as C,_ as I,q as m,Q as T,R as U,o as b,C as S,k as V,m as W,F as L,G as M,H as R,W as Y,X,a9 as Z,n as B,p as J,z as K,aa as O,L as z,ab as w,N as x,ac as $}from"./vendor-34a2d25b.js";/* empty css                                              */const ee=s=>({}),F=s=>({});function G(s){let e,a,_;const d=s[7].default,n=A(d,s,s[6],null);return{c(){e=v("div"),n&&n.c(),this.h()},l(o){e=k(o,"DIV",{class:!0});var i=E(e);n&&n.l(i),i.forEach(h),this.h()},h(){D(e,"class","accordion-body svelte-1y09rn4")},m(o,i){j(o,e,i),n&&n.m(e,null),_=!0},p(o,i){n&&n.p&&(!_||i&64)&&q(n,d,o,o[6],_?I(d,o[6],i,null):C(o[6]),null)},i(o){_||(m(n,o),a||T(()=>{a=U(e,$,{}),a.start()}),_=!0)},o(o){b(n,o),_=!1},d(o){o&&h(e),n&&n.d(o)}}}function se(s){let e,a,_,d,n,o;const i=s[7].header,t=A(i,s,s[6],F);let l=s[0]&&G(s),c=[s[4],{class:"accordion"}],g={};for(let r=0;r<c.length;r+=1)g=S(g,c[r]);return{c(){e=v("details"),a=v("summary"),t&&t.c(),_=V(),l&&l.c(),this.h()},l(r){e=k(r,"DETAILS",{class:!0});var u=E(e);a=k(u,"SUMMARY",{class:!0});var p=E(a);t&&t.l(p),p.forEach(h),_=W(u),l&&l.l(u),u.forEach(h),this.h()},h(){D(a,"class","accordion-header svelte-1y09rn4"),L(e,g),M(e,"svelte-1y09rn4",!0)},m(r,u){j(r,e,u),R(e,a),t&&t.m(a,null),R(e,_),l&&l.m(e,null),e.open=s[0],d=!0,n||(o=[Y(a,"click",X(function(){Z(s[1]?s[2]:s[3])&&(s[1]?s[2]:s[3]).apply(this,arguments)})),Y(e,"toggle",s[8])],n=!0)},p(r,[u]){s=r,t&&t.p&&(!d||u&64)&&q(t,i,s,s[6],d?I(i,s[6],u,ee):C(s[6]),F),s[0]?l?(l.p(s,u),u&1&&m(l,1)):(l=G(s),l.c(),m(l,1),l.m(e,null)):l&&(B(),b(l,1,1,()=>{l=null}),J()),L(e,g=K(c,[u&16&&s[4],{class:"accordion"}])),u&1&&(e.open=s[0]),M(e,"svelte-1y09rn4",!0)},i(r){d||(m(t,r),m(l),d=!0)},o(r){b(t,r),b(l),d=!1},d(r){r&&h(e),t&&t.d(r),l&&l.d(),n=!1,O(o)}}}const y=new Set;function te(s,e,a){const _=["opened","toggled","group"];let d=z(e,_),{$$slots:n={},$$scope:o}=e;const i=w();let{opened:t=!1}=e,{toggled:l=!1}=e,{group:c="group"}=e,g={[c]:()=>a(0,t=!1)}[c];function r(f){return y.delete(g),g={[f]:()=>a(0,t=!1)}[f],y.add(g),()=>y.delete(g)}function u(){if(t)return i("close",c),a(0,t=!1);i("open",c),y.forEach(f=>f.name===c&&f()),a(0,t=!0)}function p(){i(t?"close":"open",c),a(0,t=!t)}function H(){t=this.open,a(0,t)}return s.$$set=f=>{e=S(S({},e),x(f)),a(4,d=z(e,_)),"opened"in f&&a(0,t=f.opened),"toggled"in f&&a(1,l=f.toggled),"group"in f&&a(5,c=f.group),"$$scope"in f&&a(6,o=f.$$scope)},s.$$.update=()=>{s.$$.dirty&32&&r(c)},[t,l,u,p,d,c,o,n,H]}class oe extends N{constructor(e){super();P(this,e,te,se,Q,{opened:0,toggled:1,group:5})}}export{oe as A};