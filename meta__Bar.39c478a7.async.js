!(function(){"use strict";var P=(h,i,n)=>new Promise((t,a)=>{var y=o=>{try{p(n.next(o))}catch(m){a(m)}},c=o=>{try{p(n.throw(o))}catch(m){a(m)}},p=o=>o.done?t(o.value):Promise.resolve(o.value).then(y,c);p((n=n.apply(h,i)).next())});(self.webpackChunkiltools_frontend_interview=self.webpackChunkiltools_frontend_interview||[]).push([[642],{82912:function(h,i,n){n.a(h,function(t,a){return P(this,null,function*(){try{n.r(i),n.d(i,{demos:function(){return C}});var y=n(41741),c=n.n(y),p=n(75912),o=n.n(p),m=n(52282),$=n(63791),V=n(12491),C={"src-bar-demo-0":{component:o()(c()().mark(function v(){var d,l,r,u,f,e,g,I,N,x,H,Z,z,F,B;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(n.bind(n,63791));case 2:return d=s.sent,l=d.useCssVars,s.next=6,Promise.resolve().then(n.bind(n,63791));case 6:return r=s.sent,u=r.createTextVNode,f=r.unref,e=r.withCtx,g=r.createVNode,I=r.openBlock,N=r.createElementBlock,x={class:"greeting"},s.next=16,Promise.resolve().then(n.bind(n,63791));case 16:return H=s.sent,Z=H.ref,s.next=20,Promise.resolve().then(n.bind(n,12491));case 20:return z=s.sent,F=z.Bar,B={__name:"index",setup:function(L){l(function(S){return{"369616a6-color":W.value}});var W=Z("red");return function(S,O){return I(),N("p",x,[g(f(F),{icon:"\u{1F919}"},{default:e(function(){return O[0]||(O[0]=[u("Hello Vue!")])}),_:1})])}}},B.__css__=`
.greeting {
  color: var(--369616a6-color);
  font-size: 16px;
  font-weight: bold;
}
`,B.__id__="369616a6",s.abrupt("return",{default:B});case 26:case"end":return s.stop()}},v)}))(),asset:{type:"BLOCK",id:"src-bar-demo-0",refAtomIds:[],dependencies:{"index.vue":{type:"FILE",value:`<script setup>
import { ref } from 'vue';
import { Bar } from 'iltools-frontend-interview';

const color = ref('red');
<\/script>

<template>
  <p class="greeting">
    <Bar icon="\u{1F919}">Hello Vue!</Bar>
  </p>
</template>

<style>
.greeting {
  color: v-bind('color');
  font-size: 16px;
  font-weight: bold;
}
</style>`},vue:{type:"NPM",value:"3.5.13"},"iltools-frontend-interview":{type:"NPM",value:"0.0.1"}},entry:"index.vue"},context:{vue:$,"iltools-frontend-interview":V},renderOpts:{compile:function(){var v=o()(c()().mark(function l(){var r,u=arguments;return c()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(606),n.e(241)]).then(n.bind(n,5451));case 2:return e.abrupt("return",(r=e.sent).default.apply(r,u));case 3:case"end":return e.stop()}},l)}));function d(){return v.apply(this,arguments)}return d}(),renderer:(yield n.e(15).then(n.bind(n,99015))).default,preflight:(yield n.e(224).then(n.bind(n,7224))).default}}};a()}catch(v){a(v)}})},1)},12491:function(h,i,n){n.r(i),n.d(i,{Bar:function(){return o},Foo:function(){return m},Overview:function(){return C}});var t=n(47224),a=n(96365),y=(0,t.aZ)({__name:"RootBar",props:{icon:{}},emits:["click"],setup:function(d,l){var r=l.emit,u=r;function f(e){u("click",e)}return function(e,g){return(0,t.wg)(),(0,t.iD)("span",{onClick:f},[e.icon?((0,t.wg)(),(0,t.iD)(t.HY,{key:0},[(0,t.Uk)((0,a.zw)(e.icon),1)],64)):(0,t.WI)(e.$slots,"icon",{key:1}),(0,t.WI)(e.$slots,"default")])}}}),c=n(48687),o=(0,c.Z)(y,[["__scopeId","data-v-57d14d08"]]),m=(0,t.aZ)({props:{title:{type:String,default:""}},setup:function(d){var l=d.title;return function(){return(0,t.Wm)("div",{class:"foo"},[l])}}}),$=(0,t.aZ)({__name:"Overview",props:{icon:{}},emits:["click"],setup:function(d,l){var r=l.emit,u=r;function f(e){u("click",e)}return function(e,g){return(0,t.wg)(),(0,t.iD)("span",{onClick:f},[e.icon?((0,t.wg)(),(0,t.iD)(t.HY,{key:0},[(0,t.Uk)((0,a.zw)(e.icon),1)],64)):(0,t.WI)(e.$slots,"icon",{key:1}),(0,t.WI)(e.$slots,"default")])}}}),C=(0,c.Z)($,[["__scopeId","data-v-85dd5ffc"]])},80077:function(h,i,n){n.r(i),n.d(i,{texts:function(){return a}});var t=n(52282);const a=[{value:"This is an example component of Vue SFC.",paraId:0,tocIndex:0}]}}]);
}());