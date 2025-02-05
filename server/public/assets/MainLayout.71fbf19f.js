import{c as $,i as G,e as P,p as N,a as h,h as g,b as J,l as V,d as X,g as L,w as _,o as T,f as H,n as D,j as q,r as b,k as A,m as F,q as x,s as Y,t as Z,_ as ee,u as te,v as ne,x as oe,y as M,z as k}from"./index.ac38e2b1.js";import{s as ie,g as le,a as re,b as ae,c as R}from"./scroll.66059a0c.js";var se=$({name:"QPageContainer",setup(t,{slots:m}){const{proxy:{$q:n}}=L(),e=G(V,P);if(e===P)return console.error("QPageContainer needs to be child of QLayout"),P;N(X,!0);const r=h(()=>{const a={};return e.header.space===!0&&(a.paddingTop=`${e.header.size}px`),e.right.space===!0&&(a[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${e.right.size}px`),e.footer.space===!0&&(a.paddingBottom=`${e.footer.size}px`),e.left.space===!0&&(a[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${e.left.size}px`),a});return()=>g("div",{class:"q-page-container",style:r.value},J(m.default))}});const{passive:W}=q,ce=["both","horizontal","vertical"];var ue=$({name:"QScrollObserver",props:{axis:{type:String,validator:t=>ce.includes(t),default:"vertical"},debounce:[String,Number],scrollTarget:ie},emits:["scroll"],setup(t,{emit:m}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let e=null,r,a;_(()=>t.scrollTarget,()=>{l(),f()});function s(){e!==null&&e();const v=Math.max(0,re(r)),y=ae(r),u={top:v-n.position.top,left:y-n.position.left};if(t.axis==="vertical"&&u.top===0||t.axis==="horizontal"&&u.left===0)return;const z=Math.abs(u.top)>=Math.abs(u.left)?u.top<0?"up":"down":u.left<0?"left":"right";n.position={top:v,left:y},n.directionChanged=n.direction!==z,n.delta=u,n.directionChanged===!0&&(n.direction=z,n.inflectionPoint=n.position),m("scroll",{...n})}function f(){r=le(a,t.scrollTarget),r.addEventListener("scroll",i,W),i(!0)}function l(){r!==void 0&&(r.removeEventListener("scroll",i,W),r=void 0)}function i(v){if(v===!0||t.debounce===0||t.debounce==="0")s();else if(e===null){const[y,u]=t.debounce?[setTimeout(s,t.debounce),clearTimeout]:[requestAnimationFrame(s),cancelAnimationFrame];e=()=>{u(y),e=null}}}const{proxy:d}=L();return _(()=>d.$q.lang.rtl,s),T(()=>{a=d.$el.parentNode,f()}),H(()=>{e!==null&&e(),l()}),Object.assign(d,{trigger:i,getPosition:()=>n}),D}});function de(){const t=b(!A.value);return t.value===!1&&T(()=>{t.value=!0}),{isHydrated:t}}const K=typeof ResizeObserver!="undefined",j=K===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var B=$({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(t,{emit:m}){let n=null,e,r={width:-1,height:-1};function a(l){l===!0||t.debounce===0||t.debounce==="0"?s():n===null&&(n=setTimeout(s,t.debounce))}function s(){if(n!==null&&(clearTimeout(n),n=null),e){const{offsetWidth:l,offsetHeight:i}=e;(l!==r.width||i!==r.height)&&(r={width:l,height:i},m("resize",r))}}const{proxy:f}=L();if(f.trigger=a,K===!0){let l;const i=d=>{e=f.$el.parentNode,e?(l=new ResizeObserver(a),l.observe(e),s()):d!==!0&&F(()=>{i(!0)})};return T(()=>{i()}),H(()=>{n!==null&&clearTimeout(n),l!==void 0&&(l.disconnect!==void 0?l.disconnect():e&&l.unobserve(e))}),D}else{let d=function(){n!==null&&(clearTimeout(n),n=null),i!==void 0&&(i.removeEventListener!==void 0&&i.removeEventListener("resize",a,q.passive),i=void 0)},v=function(){d(),e&&e.contentDocument&&(i=e.contentDocument.defaultView,i.addEventListener("resize",a,q.passive),s())};const{isHydrated:l}=de();let i;return T(()=>{F(()=>{e=f.$el,e&&v()})}),H(d),()=>{if(l.value===!0)return g("object",{class:"q--avoid-card-border",style:j.style,tabindex:-1,type:"text/html",data:j.url,"aria-hidden":"true",onLoad:v})}}}}),fe=$({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:t=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(t.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(t,{slots:m,emit:n}){const{proxy:{$q:e}}=L(),r=b(null),a=b(e.screen.height),s=b(t.container===!0?0:e.screen.width),f=b({position:0,direction:"down",inflectionPoint:0}),l=b(0),i=b(A.value===!0?0:R()),d=h(()=>"q-layout q-layout--"+(t.container===!0?"containerized":"standard")),v=h(()=>t.container===!1?{minHeight:e.screen.height+"px"}:null),y=h(()=>i.value!==0?{[e.lang.rtl===!0?"left":"right"]:`${i.value}px`}:null),u=h(()=>i.value!==0?{[e.lang.rtl===!0?"right":"left"]:0,[e.lang.rtl===!0?"left":"right"]:`-${i.value}px`,width:`calc(100% + ${i.value}px)`}:null);function z(o){if(t.container===!0||document.qScrollPrevented!==!0){const c={position:o.position.top,direction:o.direction,directionChanged:o.directionChanged,inflectionPoint:o.inflectionPoint.top,delta:o.delta.top};f.value=c,t.onScroll!==void 0&&n("scroll",c)}}function U(o){const{height:c,width:p}=o;let w=!1;a.value!==c&&(w=!0,a.value=c,t.onScrollHeight!==void 0&&n("scrollHeight",c),E()),s.value!==p&&(w=!0,s.value=p),w===!0&&t.onResize!==void 0&&n("resize",o)}function I({height:o}){l.value!==o&&(l.value=o,E())}function E(){if(t.container===!0){const o=a.value>l.value?R():0;i.value!==o&&(i.value=o)}}let S=null;const O={instances:{},view:h(()=>t.view),isContainer:h(()=>t.container),rootRef:r,height:a,containerHeight:l,scrollbarWidth:i,totalWidth:h(()=>s.value+i.value),rows:h(()=>{const o=t.view.toLowerCase().split(" ");return{top:o[0].split(""),middle:o[1].split(""),bottom:o[2].split("")}}),header:x({size:0,offset:0,space:!1}),right:x({size:300,offset:0,space:!1}),footer:x({size:0,offset:0,space:!1}),left:x({size:300,offset:0,space:!1}),scroll:f,animate(){S!==null?clearTimeout(S):document.body.classList.add("q-body--layout-animate"),S=setTimeout(()=>{S=null,document.body.classList.remove("q-body--layout-animate")},155)},update(o,c,p){O[o][c]=p}};if(N(V,O),R()>0){let p=function(){o=null,c.classList.remove("hide-scrollbar")},w=function(){if(o===null){if(c.scrollHeight>e.screen.height)return;c.classList.add("hide-scrollbar")}else clearTimeout(o);o=setTimeout(p,300)},C=function(Q){o!==null&&Q==="remove"&&(clearTimeout(o),p()),window[`${Q}EventListener`]("resize",w)},o=null;const c=document.body;_(()=>t.container!==!0?"add":"remove",C),t.container!==!0&&C("add"),Y(()=>{C("remove")})}return()=>{const o=Z(m.default,[g(ue,{onScroll:z}),g(B,{onResize:U})]),c=g("div",{class:d.value,style:v.value,ref:t.container===!0?void 0:r,tabindex:-1},o);return t.container===!0?g("div",{class:"q-layout-container overflow-hidden",ref:r},[g(B,{onResize:I}),g("div",{class:"absolute-full",style:y.value},[g("div",{class:"scroll",style:u.value},[c])])]):c}}});const ve={name:"MainLayout"};function he(t,m,n,e,r,a){const s=te("router-view");return ne(),oe(fe,{view:"lHh Lpr lFf"},{default:M(()=>[k(se,null,{default:M(()=>[k(s)]),_:1})]),_:1})}var pe=ee(ve,[["render",he]]);export{pe as default};
