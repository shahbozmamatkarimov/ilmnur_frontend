import{_ as k}from"./BKCXOesK.js";import{_ as N}from"./Rqk1yu2b.js";import{_ as K}from"./BAGhBkW2.js";import{_ as P}from"./BmdOhn1b.js";import{_ as j}from"./DBVKDdV2.js";import{J as z,i as Q,u as R,S}from"./QHZ_BPHT.js";import{u as G}from"./j5w3CbAX.js";import{_ as I,a as J}from"./ZjXXLr5f.js";import{_ as O}from"./D3OYlhAI.js";import{r as W,G as X,w as Y,$ as r,a4 as t,D as s,X as l,u as e,ag as H,V as o,a6 as x,F as m,ac as h,W as Z,a5 as c,ah as tt,ae as et,ad as b,ai as st}from"./C4IK2AjC.js";import{T as ot,_ as at}from"./C5EYrIGN.js";import{_ as nt,M as rt}from"./DcnXM14p.js";import{D as lt}from"./CQcSptmg.js";import"./B3qdt_GA.js";import"./BvcJ9o6n.js";import"./BYw7f3vo.js";import"./BNUY2ILy.js";import"./BbnbbUkH.js";import"./8KGax0iF.js";import"./BFeF5Ghm.js";import"./COfAGGZC.js";import"./Dl86AAgW.js";import"./DS6Ep8oh.js";import"./BzE5DoKl.js";import"./xjDQqpxK.js";import"./D3Dqr0AZ.js";import"./DkOi0xjx.js";import"./Dx27d-PK.js";import"./B_FpwJHq.js";import"./COqob18v.js";import"./Dt89uj0v.js";import"./DnbTe_kO.js";import"./CLFzEa0p.js";import"./AwZOQwEF.js";import"./CaEFfQaZ.js";const ct={class:"bg-white pb-10 rounded-lg overflow-hidden overflow-y-auto max-h-[calc(100vh_-_160px)]"},it={class:"flex items-center justify-between p-5 border-b border-[#EDEDED]"},_t=t("button",{class:"font-semibold text-xl"},"Foydalanuvchilar",-1),pt={class:"px-5 users_tabs"},dt={class:"flex gap-1 font-medium"},ut={class:"text-[#FF852E] font-semibold"},mt={class:"overflow-x-auto"},ht={class:"table-auto mt-5 w-full"},xt=t("thead",null,[t("tr",{class:"text-sm b_cff3 whitespace-nowrap"},[t("th",{class:"text-start font-medium _c66 px-5 py-3"},"№"),t("th",{class:"text-start font-medium _c66 px-5 py-3"},"Ism"),t("th",{class:"text-start font-medium _c66 px-5 py-3"},"Fan"),t("th",{class:"text-start font-medium _c66 px-5 py-3"}," O‘quvchilar soni "),t("th",{class:"text-start font-medium _c66 px-5 py-3"}," Telefon raqam "),t("th",{class:"text-start font-medium _c66 px-5 py-3"}," Sinflari "),t("th",{class:"text-start font-medium _c66 px-5 py-3"},"Status"),t("th",{class:"text-start font-medium _c66 px-5 py-3"}," Yaratilgan "),t("th",{class:"_c66 px-5 py-3"})])],-1),ft={class:"py-6 px-5 text-sm relative"},bt={key:0,class:"b_cf23 w-[10px] h-[10px] absolute top-2 left-2 rounded-full"},gt={class:"py-6 px-5"},yt={class:"flex items-center h-full gap-2"},vt={class:"py-6 px-5"},wt=t("td",{class:"py-6 px-5"},"12",-1),kt={class:"py-6 px-5"},St={class:"py-6 px-5"},Ft={class:"py-6 px-5"},Tt={class:"py-6 px-5"},Ct={key:0,class:"py-6 px-5 flex items-center whitespace-nowrap sticky right-0 bg-[#F6F6F6]"},Ut=t("span",{class:"lg:block hidden"},"Qabul qilish",-1),Dt=t("img",{class:"lg:hidden block min-w-[20px]",src:I,alt:""},null,-1),Et=t("span",{class:"lg:block hidden"},"Rad etish",-1),Bt=t("img",{class:"lg:hidden block min-w-[20px]",src:J,alt:""},null,-1),At={class:"py-6 px-5"},Mt=t("img",{class:"cursor-pointer",src:O,alt:""},null,-1),Vt={key:0,class:"w-full space-y-1 mt-1"},fe={__name:"index",setup($t){const F=[H],{formateCreatedAt:T}=G(),a=z(),g=Q(),C=R(),i=W({create:!1,mouse_wheel:0,activeTab:1});a.store.getall=[],a.create.role=["super_admin"],a.countUsers(),X(()=>{a.getAll()});function U(){setTimeout(()=>{var _;i.activeTab=+((_=document.querySelector(".swiper-slide-visible"))==null?void 0:_.id)},200)}return Y(()=>i.activeTab,()=>{a.create.role=S[i.activeTab].role,a.getAll();const _=document.querySelector(".swiper-pagination-clickable");if(_&&_.children.length>=i.activeTab){const p=_.children[i.activeTab-1];p&&p.click()}C.push(`/users?role=${i.activeTab}`)}),(_,p)=>{const D=k,E=at,B=ot,A=N,M=K,y=k,v=nt,V=rt,$=lt,q=P,L=j;return o(),r("main",ct,[t("nav",it,[_t,s(D,{onClick:p[0]||(p[0]=d=>e(a).store.createModal=!0),class:"bg_orange font-semibold white !px-6"},{default:l(()=>[x("Qo‘shish")]),_:1})]),t("div",pt,[s(B,{class:"",activeKey:e(i).activeTab,"onUpdate:activeKey":p[1]||(p[1]=d=>e(i).activeTab=d)},{default:l(()=>[(o(!0),r(m,null,h(e(S),(d,w)=>(o(),Z(E,{key:w},{tab:l(()=>[t("div",dt,[t("p",null,c(d.uz),1),t("p",ut,c(e(a).store.total_count.user_data?e(a).store.total_count.user_data[d.role]:""),1)])]),_:2},1024))),128))]),_:1},8,["activeKey"])]),t("section",null,[s(e(st),{onSliderMove:U,watchSlidesProgress:!0,slidesPerView:1,spaceBetween:30,pagination:{clickable:!0},class:"mySwiper",modules:F},{default:l(()=>[(o(),r(m,null,h(4,(d,w)=>s(e(tt),{id:d},{default:l(()=>[t("section",mt,[t("table",ht,[xt,t("tbody",null,[(o(!0),r(m,null,h(e(a).store.getall,(n,f)=>(o(),r("tr",{class:et(["border-b border-[#EDEDED]",n.user_status=="pending"?"bg-[#F6F6F6]":""])},[t("td",ft,[n.user_status=="pending"?(o(),r("p",bt)):b("",!0),x(" #"+c(n.user.id),1)]),t("td",gt,[t("div",yt,[s(A,{class:"max-h-[32px] max-w-[32px]"}),x(" "+c(n.full_name),1)])]),t("td",vt,[(o(!0),r(m,null,h(n.subjects,u=>(o(),r("p",null,c(u),1))),256))]),wt,t("td",kt,c(n.user.phone),1),t("td",St,[(o(!0),r(m,null,h(n.class,u=>(o(),r("div",null,c(u[0])+" - "+c(u[1]),1))),256))]),t("td",Ft,[s(M,{status:1})]),t("td",Tt,c(e(T)(n.createdAt)),1),e(g).user.data.current_role=="admin"&&n.user_status=="pending"?(o(),r("td",Ct,[s(y,{onClick:u=>e(a).updateStatus(n.id,f),class:"!h-[44px] orange border border-[#FF852E] !px-4"},{default:l(()=>[Ut,Dt]),_:2},1032,["onClick"]),s(y,{onClick:u=>e(a).deleteUser(n.id,f),class:"!h-[44px] _c24 !px-4"},{default:l(()=>[Et,Bt]),_:2},1032,["onClick"])])):b("",!0),t("td",At,[s($,{trigger:["click"]},{overlay:l(()=>[s(V,null,{default:l(()=>[s(v,null,{default:l(()=>[x("Edit")]),_:1}),s(v,{onClick:u=>e(a).deleteUser(n.id,f)},{default:l(()=>[x("Delete")]),_:2},1032,["onClick"])]),_:2},1024)]),default:l(()=>[Mt]),_:2},1024)])],2))),256))])]),e(g).isLoadingType("getAllUsers")?(o(),r("div",Vt,[(o(),r(m,null,h(10,n=>s(q,{l_height:"60px"})),64))])):b("",!0)])]),_:2},1032,["id"])),64))]),_:1})]),s(L)])}}};export{fe as default};
