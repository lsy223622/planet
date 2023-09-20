import{bF as A,bH as C,G as N,bN as F,m as $,c2 as z,bE as B,az as d,q as _,aj as p,b7 as f,aL as x,y as n,a_ as h,p as w,r as v,al as D,bX as V,bZ as Y,ch as H,z as s,bs as t,F as k,aK as M,ci as P,o as T,ck as L,cj as O}from"./index-21b1b466.js";import{d as E,b as U,h as q,E as G,c as I}from"./day-5589b5dd.js";import{E as K}from"./el-divider-2877707c.js";const R=A({decimalSeparator:{type:String,default:"."},groupSeparator:{type:String,default:","},precision:{type:Number,default:0},formatter:Function,value:{type:C([Number,Object]),default:0},prefix:String,suffix:String,title:String,valueStyle:{type:C([String,Object,Array])}}),X=N({name:"ElStatistic"}),Z=N({...X,props:R,setup(a,{expose:l}){const g=a,r=F("statistic"),y=$(()=>{const{value:e,formatter:o,precision:i,decimalSeparator:u,groupSeparator:b}=g;if(z(o))return o(e);if(!B(e))return e;let[c,m=""]=String(e).split(".");return m=m.padEnd(i,"0").slice(0,i>0?i:0),c=c.replace(/\B(?=(\d{3})+(?!\d))/g,b),[c,m].join(m?u:"")});return l({displayValue:y}),(e,o)=>(d(),_("div",{class:p(f(r).b())},[e.$slots.title||e.title?(d(),_("div",{key:0,class:p(f(r).e("head"))},[x(e.$slots,"title",{},()=>[n(h(e.title),1)])],2)):w("v-if",!0),v("div",{class:p(f(r).e("content"))},[e.$slots.prefix||e.prefix?(d(),_("div",{key:0,class:p(f(r).e("prefix"))},[x(e.$slots,"prefix",{},()=>[v("span",null,h(e.prefix),1)])],2)):w("v-if",!0),v("span",{class:p(f(r).e("number")),style:D(e.valueStyle)},h(f(y)),7),e.$slots.suffix||e.suffix?(d(),_("div",{key:1,class:p(f(r).e("suffix"))},[x(e.$slots,"suffix",{},()=>[v("span",null,h(e.suffix),1)])],2)):w("v-if",!0)],2)],2))}});var J=V(Z,[["__file","/home/runner/work/element-plus/element-plus/packages/components/statistic/src/statistic.vue"]]);const Q=Y(J);const W={data(){return{authors:[{name:"张三",article:[{title:"test title",content:"test content"}]},{name:"李四",article:[{title:"test title",content:"test content"}]}]}},created(){this.fetchFeed()},computed:{allArticles(){return this.authors.reduce((a,l)=>{var g;return a.concat((g=l.article)==null?void 0:g.map(r=>({...r,name:l.name})))},[]).map(a=>({...a,time:E(a.time).format("YYYY-MM-DD HH:mm:ss")})).sort((a,l)=>new Date(l.time)-new Date(a.time))},wordCount(){return this.allArticles.reduce((a,l)=>a+l.content.length,0)},timeCount(){const a=this.allArticles[this.allArticles.length-1].time,l=this.allArticles[0].time;return E(l).diff(E(a),"day")}},methods:{fetchFeed(){U.get("db.json").then(a=>{this.authors=a.data.author}).catch(a=>{q.get("/feed").then(l=>{this.authors=l.data.author})})},viewUrl(a){window.open(a)}}};function ee(a,l,g,r,y,e){const o=Q,i=L,u=P,b=K,c=O,m=G,j=I;return d(),_(k,null,[s(u,{style:{"margin-bottom":"1rem"}},{default:t(()=>[s(i,{span:12},{default:t(()=>[s(o,{title:"文章总数",value:e.allArticles.length},{suffix:t(()=>[n("篇")]),_:1},8,["value"])]),_:1}),s(i,{span:12},{default:t(()=>[s(o,{title:"总字数",value:e.wordCount},{suffix:t(()=>[n("字")]),_:1},8,["value"])]),_:1})]),_:1}),s(u,null,{default:t(()=>[s(i,{span:12},{default:t(()=>[s(o,{title:"成员总数",value:y.authors.length},{suffix:t(()=>[n("人")]),_:1},8,["value"])]),_:1}),s(i,{span:12},{default:t(()=>[s(o,{title:"历史",value:e.timeCount},{suffix:t(()=>[n("天")]),_:1},8,["value"])]),_:1})]),_:1}),s(b,null,{default:t(()=>[n("Members")]),_:1}),(d(!0),_(k,null,M(y.authors,S=>(d(),T(j,{class:"author-card",style:{"box-shadow":"none","margin-bottom":"1rem",padding:"0.8em"}},{default:t(()=>[s(u,{style:{"margin-bottom":"16px"}},{default:t(()=>[s(c,{style:{"font-weight":"100"}},{default:t(()=>[n(h(S.name),1)]),_:2},1024)]),_:2},1024),s(u,null,{default:t(()=>[v("span",null,[s(c,{type:"primary",style:{"margin-inline":"0.5rem","font-size":"1.25rem"}},{default:t(()=>[n("|")]),_:1}),s(c,{style:{"font-size":"1.25rem"}},{default:t(()=>[n(h(S.description),1)]),_:2},1024)])]),_:2},1024),s(u,null,{default:t(()=>[s(i,{span:24,style:{"text-align":"right"}},{default:t(()=>[s(m,{text:"",onClick:te=>e.viewUrl(S.uri)},{default:t(()=>[n("View Site")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024))),256))],64)}const ne=H(W,[["render",ee]]);export{ne as default};
