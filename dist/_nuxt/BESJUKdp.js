import{_ as pe}from"./BTbmzkje.js";import{_ as _e,a as me,b as fe,c as he,d as G,e as ve}from"./BUiCgXJT.js";import{_ as ge}from"./D9GKhBkK.js";import{d as ne,c as le,D as p,r as be,w as xe,$ as _,a4 as e,X as x,u as s,F as P,ac as U,a5 as ee,a6 as N,W as R,ag as ke,V as c,ae as we,ah as ye,ad as H,aa as W,ab as X,ai as Ce}from"./Dg7Bj1Dn.js";import{m as k,t as E,I as j,s as Se,J as Te,K as Fe,i as qe}from"./W1cqZPGq.js";import{_ as ce}from"./bKiWB3AL.js";import{_ as Pe}from"./DLxAsVG8.js";import{s as ae}from"./DVvtXSeC.js";import{l as Ue}from"./C955v0DC.js";import{M as Be}from"./DxBgE_tE.js";import{B as Ve}from"./Syj1qaS3.js";import{C as Oe}from"./_0bRrhRY.js";import{g as Ee,c as ie,d as je,r as $e,a as De,D as Ie}from"./aigfom-Y.js";import{d as Ne,a as re}from"./BY9zPMHH.js";import{u as de}from"./CP7ByAH1.js";import{_ as Re}from"./DKV3udHI.js";import"./DG_CVAGn.js";import"./LdUZFojv.js";import"./CamimsYz.js";import"./Dc23bndy.js";import"./C0weQmNR.js";import"./DkgJn5kV.js";import"./CMN9SPK_.js";import"./Dj5_XV4v.js";import"./CECZEjtU.js";import"./Cy6NbBIH.js";import"./C-tX_MVN.js";import"./D_4OiXLP.js";import"./Dpsdv7wR.js";const te=()=>({format:String,showNow:j(),showHour:j(),showMinute:j(),showSecond:j(),use12Hours:j(),hourStep:Number,minuteStep:Number,secondStep:Number,hideDisabledOptions:j(),popupClassName:String,status:Se()});function He(B){const J=Ee(B,k(k({},te()),{order:{type:Boolean,default:!0}})),{TimePicker:o,RangePicker:M}=J,l=ne({name:"ATimePicker",inheritAttrs:!1,props:k(k(k(k({},ie()),je()),te()),{addon:{type:Function}}),slots:Object,setup($,D){let{slots:C,expose:I,emit:m,attrs:q}=D;const v=$,w=de();Ne(!(C.addon||v.addon),"TimePicker","`addon` is deprecated. Please use `v-slot:renderExtraFooter` instead.");const y=le();I({focus:()=>{var i;(i=y.value)===null||i===void 0||i.focus()},blur:()=>{var i;(i=y.value)===null||i===void 0||i.blur()}});const V=(i,f)=>{m("update:value",i),m("change",i,f),w.onFieldChange()},a=i=>{m("update:open",i),m("openChange",i)},t=i=>{m("focus",i)},d=i=>{m("blur",i),w.onFieldBlur()},h=i=>{m("ok",i)};return()=>{const{id:i=w.id.value}=v;return p(o,E(E(E({},q),re(v,["onUpdate:value","onUpdate:open"])),{},{id:i,dropdownClassName:v.popupClassName,mode:void 0,ref:y,renderExtraFooter:v.addon||C.addon||v.renderExtraFooter||C.renderExtraFooter,onChange:V,onOpenChange:a,onFocus:t,onBlur:d,onOk:h}),C)}}}),Y=ne({name:"ATimeRangePicker",inheritAttrs:!1,props:k(k(k(k({},ie()),$e()),te()),{order:{type:Boolean,default:!0}}),slots:Object,setup($,D){let{slots:C,expose:I,emit:m,attrs:q}=D;const v=$,w=le(),y=de();I({focus:()=>{var r;(r=w.value)===null||r===void 0||r.focus()},blur:()=>{var r;(r=w.value)===null||r===void 0||r.blur()}});const V=(r,S)=>{m("update:value",r),m("change",r,S),y.onFieldChange()},a=r=>{m("update:open",r),m("openChange",r)},t=r=>{m("focus",r)},d=r=>{m("blur",r),y.onFieldBlur()},h=(r,S)=>{m("panelChange",r,S)},i=r=>{m("ok",r)},f=(r,S,L)=>{m("calendarChange",r,S,L)};return()=>{const{id:r=y.id.value}=v;return p(M,E(E(E({},q),re(v,["onUpdate:open","onUpdate:value"])),{},{id:r,dropdownClassName:v.popupClassName,picker:"time",mode:void 0,ref:w,onChange:V,onOpenChange:a,onFocus:t,onBlur:d,onPanelChange:h,onOk:i,onCalendarChange:f}),C)}}});return{TimePicker:l,TimeRangePicker:Y}}const{TimePicker:Q,TimeRangePicker:se}=He(De),Me=k(Q,{TimePicker:Q,TimeRangePicker:se,install:B=>(B.component(Q.name,Q),B.component(se.name,se),B)}),Le={class:"rounded-[6px] overflow-hidden overflow-y-auto h-full max-h-[calc(100vh_-_160px)]"},Ae={class:"rounded-[6px] overflow-hidden"},ze=e("h1",{class:"text-xl font-semibold leading-[30px] pt-8 pb-6 bg-white px-9"}," Test yaratishni boshlang: ",-1),Ke={class:"mt-6 px-9"},We={class:"flex items-center justify-between"},Xe=e("div",{class:"full_flex bg-[#FFF3EB] w-[42px] !h-[42px]"},[e("img",{src:ce,alt:""})],-1),Qe={class:"flex gap-2"},Ge=e("div",null,[e("label",{for:"import_file",class:"full_flex gap-2 bg-white p-1.5 rounded-md border_ced cursor-pointer"},[e("img",{class:"h-7 w-7",src:Pe,alt:""}),e("p",null,"WORD")])],-1),Je=e("img",{class:"mx-auto",src:_e,alt:""},null,-1),Ye=[Je],Ze={class:"flex gap-[10px] my-6"},et=["onClick"],tt={class:"bg-white px-9 py-6"},st={class:"flex items-center justify-between"},ot={class:"text-2xl"},nt={class:"font-semibold text-[28px]"},lt=e("div",{class:"full_flex bg-[#FFF3EB] w-[42px] !h-[42px]"},[e("img",{src:ce,alt:""})],-1),at={class:"w-[70%]"},it={class:"flex overflow-hidden overflow-x-auto"},rt={class:"max-h-min max-w-min min-h-fit min-w-fit"},dt=["src"],ct=e("label",{class:"font-medium",for:"resourses"},"Resurslarni biriktiring",-1),ut={class:"full_flex my-auto space-x-10 mt-5"},pt=e("div",{class:"full_flex mx-auto h-10 w-10 bg-[#FFF3EB] rounded-full"},[e("img",{class:"w-[40%]",src:me,alt:""})],-1),_t=e("p",{class:"font-medium mt-4 text-xs _c24"},"Video",-1),mt=e("div",{class:"full_flex mx-auto h-10 w-10 bg-[#FFF3EB] rounded-full"},[e("img",{class:"w-[40%]",src:fe,alt:""})],-1),ft=e("p",{class:"font-medium mt-4 text-xs _c24"},"Tekst",-1),ht=e("div",{class:"full_flex mx-auto h-10 w-10 bg-[#FFF3EB] rounded-full"},[e("img",{class:"w-[40%]",src:he,alt:""})],-1),vt=e("p",{class:"font-medium mt-4 text-xs _c24"},"Rasm",-1),gt=e("img",{class:"cursor-pointer",src:G,alt:""},null,-1),bt=e("hr",{class:"border_ced my-6 !border-b-0"},null,-1),xt={class:"space-y-6"},kt=e("h1",{class:"-mb-3"},"Variantlar",-1),wt=e("p",null,"To‘g‘ri javobni belgilang",-1),yt={key:0,class:"space-y-6"},Ct={class:"flex items-center gap-4"},St={class:"flex items-center gap-4 b_cf5 r_8 w-full px-4"},Tt=["src"],Ft=["onClick"],qt=e("img",{class:"cursor-pointer",src:G,alt:""},null,-1),Pt=[qt],Ut={key:1},Bt={key:0,class:"border_ced my-6 !border-b-0"},Vt={class:"grid grid-cols-2 gap-6"},Ot={class:"flex items-center gap-4"},Et={class:"flex items-center gap-4 b_cf5 r_8 w-full px-4"},jt=["src"],$t=["onUpdate:modelValue"],Dt=["onClick"],It=e("img",{class:"cursor-pointer",src:G,alt:""},null,-1),Nt=[It],Rt={key:2,class:"b_cf5 r_8 px-4"},Ht={class:"flex items-center gap-4"},Mt={class:"flex items-center gap-4 r_8 w-full"},Lt=["src"],At=["onUpdate:modelValue"],zt=["onClick"],Kt=e("img",{class:"cursor-pointer",src:G,alt:""},null,-1),Wt=[Kt],Xt={key:0,class:"border_ced !border-b-0"},Qt={class:"text-end w-[70%] mt-6"},Gt=e("div",{class:"flex justify-between items-center w-full"},[e("h1",{class:"font-semibold text-2xl"},"Sozlamalalar")],-1),Jt={class:"mt-4 space-y-4"},Yt={class:"space-y-2"},Zt=e("label",{for:"name"},"Boshlanish vaqti",-1),es={class:"flex gap-2"},ts={class:"space-y-2"},ss=e("label",{for:"name"},"Tugash vaqti",-1),os={class:"flex gap-2"},ns={class:"space-y-2"},ls=e("label",{for:"name"},"Test muddati",-1),as={class:"space-y-2"},is=e("h2",null,"Saralash",-1),rs={class:"grid grid-cols-3"},ds={class:"space-y-2"},cs=e("label",{for:"sortnum"},"Saralash bosqichi",-1),us={class:"space-y-2"},ps=e("label",{for:"sortnum"},"Testlar soni",-1),Ms={__name:"index",setup(B){const J=[ke],o=Te();Fe();const M=qe(),l=be({questions:[],questionmodal:!1,cursorPosition:"",fileId:"",fileType:"",mouse_wheel:"",slideStep:1,questions_count:1,not_completed:[],is_completed:!1,convertedContent:"",settings:!1}),Y=[{label:"Variantli",value:"variant"},{label:"Ko'p tanlovli",value:"multiple"},{label:"To'ldiriladigan",value:"refillable"},{label:"Moslashtiriladigan",value:"customizable"}],$=[{value:1},{value:10},{value:16},{value:20},{value:40}];async function D(a){const t=a.target.files[0],d=URL.createObjectURL(t);console.log(l.fileType),l.fileType=="question"?(o.test[l.slideStep].question.push(t),l.questions.push(d)):o.test[l.slideStep].variant[l.fileId]=[t,d],document.getElementById("upload_question").value=""}async function C(a){const t=a.target.files[0];if(!t)return;const d=await m(t);console.log(d),l.convertedContent=d.value,I(d.value)}function I(a){var h;const t=a.match(/<tr>.*?<\/tr>/gs);if(!t)return[];let d=t.map(i=>{const f=i.match(/<td>(.*?)<\/td>/gs);return f?f.map(r=>r.replace(/<\/?td>/g,"")):[]});d.shift(),console.log(d);for(let i=0;i<d.length;i++){o.test[i+1].question[0]=d[i][1];for(let f=2;f<((h=d[i])==null?void 0:h.length);f++)o.test[i+1].variant[f-1]=d[i][f];console.log(o.test[i+1].variant)}}function m(a){return new Promise((t,d)=>{const h=new FileReader;h.onload=async i=>{const f=i.target.result;console.log(f);const r=await Ue.convertToHtml({arrayBuffer:f},{styleMap:["p[style-name='Equation'] => span.math-display:fresh"]});console.log(r),t(r)},h.onerror=d,h.readAsArrayBuffer(a)})}function q(a,t){console.log(a,t),l.fileId=a,l.fileType=t}function v(){setTimeout(()=>{var a;l.slideStep=+((a=document.querySelector(".swiper-slide-visible"))==null?void 0:a.id)},200)}function w(a){a.deltaX>0?(l.mouse_wheel+=1,l.mouse_wheel%10==0&&(l.slideStep<o.store.questions_count&&(l.slideStep+=1),l.mouse_wheel=0),console.log("Scrolling to the right")):a.deltaX<0&&(l.mouse_wheel+=1,l.mouse_wheel%10==0&&(l.slideStep>1&&(l.slideStep-=1),l.mouse_wheel=0),console.log("Scrolling to the left"))}function y(a){var h;let t,d;if((h=o.test[a].question)!=null&&h.length){t=0;for(let i of Object.values(o.test[a].variant))if(i&&t++,t==2)return d=l.not_completed.indexOf(a),d==-1&&l.not_completed.push(a),!0}return d=l.not_completed.indexOf(a),d!=-1&&l.not_completed.splice(d,1),!1}function V(){var a;l.is_completed&&o.createTest(),l.not_completed.sort((t,d)=>t-d);for(let t=0;t<o.store.questions_count-1;t++)if(l.not_completed[t+1]-l.not_completed[t]!=1){l.slideStep=l.not_completed[t]+1;return}if(((a=Object.keys(l.not_completed))==null?void 0:a.length)==o.store.questions_count){l.is_completed=!0;return}l.slideStep!=o.store.questions_count&&(l.slideStep+=1)}return xe(()=>l.slideStep,()=>{const a=document.querySelector(".swiper-pagination-clickable");if(a&&a.children.length>=l.slideStep){const t=a.children[l.slideStep-1];t&&t.click()}}),(a,t)=>{const d=Re,h=pe,i=Ve,f=Oe,r=ve,S=ge,L=Ie,Z=Me,ue=Be;return c(),_("main",Le,[e("section",Ae,[ze,e("div",Ke,[e("div",We,[p(d,{value:s(o).store.questions_count,"onUpdate:value":t[0]||(t[0]=n=>s(o).store.questions_count=n),class:"min-w-[145px] test_arrow !h-[44px] sr_12",options:$.map(n=>({label:`${n.value} talik savollar`,value:n.value})),required:""},{suffixIcon:x(()=>[Xe]),_:1},8,["value","options"]),e("div",Qe,[Ge,e("button",{onClick:t[1]||(t[1]=n=>s(l).settings=!0),class:"bg-white rounded-md p-1.5 w-10"},Ye)])]),e("div",Ze,[(c(!0),_(P,null,U(s(o).store.questions_count,n=>(c(),_("button",{onClick:O=>s(l).slideStep=n,class:we([[s(l).slideStep==n?"border border-[#40E746]":"border_ced",y(n)?"bg-[#40E746]":""],"h-10 w-10 bg-white r_2 _c55"])},ee(n),11,et))),256))])]),e("div",tt,[e("div",st,[e("p",ot,[e("span",nt,ee(s(l).slideStep)+".",1),N(" Savol ")]),p(d,{value:s(o).test[s(l).slideStep].type,"onUpdate:value":t[2]||(t[2]=n=>s(o).test[s(l).slideStep].type=n),class:"!relative min-w-[145px] test_arrow !h-[44px] sr_12",options:Y.map(n=>({label:n.label,value:n.value})),required:""},{suffixIcon:x(()=>[lt]),_:1},8,["value","options"])]),p(s(Ce),{onMousewheel:w,onSliderMove:v,watchSlidesProgress:!0,slidesPerView:1,spaceBetween:30,pagination:{clickable:!0},class:"mySwiper",modules:J},{default:x(()=>[(c(),_(P,null,U(16,n=>p(s(ye),{id:n},{default:x(()=>{var O,A,z,oe;return[e("section",null,[e("div",at,[e("div",it,[(c(!0),_(P,null,U(s(l).questions,u=>(c(),_("div",rt,[e("img",{class:"max-h-[200px]",src:u,alt:""},null,8,dt)]))),256))]),p(h,null,{default:x(()=>[p(s(ae),{modelValue:s(o).test[n].question[0],"onUpdate:modelValue":u=>s(o).test[n].question[0]=u},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),ct,e("div",ut,[p(i,{ref_for:!0,ref:"ref1",onClick:t[3]||(t[3]=u=>a.openModal("video")),class:"text-center w-12 h-[100px] !p-0 border-0 shadow-none"},{default:x(()=>[pt,_t]),_:1},512),p(i,{ref_for:!0,ref:"ref2",onClick:t[4]||(t[4]=u=>a.openModal("tekst")),class:"text-center w-12 h-[100px] !p-0 border-0 shadow-none"},{default:x(()=>[mt,ft]),_:1},512),p(i,{ref_for:!0,ref:"ref3",onClick:t[5]||(t[5]=u=>a.openModal("image")),class:"text-center w-12 h-[100px] !p-0 border-0 shadow-none"},{default:x(()=>[ht,vt]),_:1},512)]),e("label",{onClick:t[6]||(t[6]=u=>s(l).fileType="question"),for:"upload_question",class:"max-w-fit full_flex mt-6 gap-4 h-[44px] border border-[#EDEDED] rounded-full px-8"},[gt,N(" Fayl biriktirish ")]),bt,e("div",xt,[kt,wt,((O=s(o).test[n])==null?void 0:O.type)=="variant"||((A=s(o).test[n])==null?void 0:A.type)=="refillable"?(c(),_("div",yt,[(c(),_(P,null,U(5,u=>{var g,T,F;return e("div",Ct,[e("div",St,[p(f,{checked:a.checked,"onUpdate:checked":t[7]||(t[7]=b=>a.checked=b)},null,8,["checked"]),(g=s(o).test[n])!=null&&g.variant[u]&&typeof((T=s(o).test[n])==null?void 0:T.variant[u])=="object"?(c(),_("img",{key:0,class:"max-h-[160px] my-4",src:(F=s(o).test[n])==null?void 0:F.variant[u][1],alt:""},null,8,Tt)):(c(),R(h,{key:1},{default:x(()=>[p(s(ae),{modelValue:s(o).test[n].variant[u],"onUpdate:modelValue":b=>s(o).test[n].variant[u]=b},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024))]),e("label",{onClick:b=>q(u,"variant"),for:"upload_question"},Pt,8,Ft)])}),64))])):((z=s(o).test[n])==null?void 0:z.type)=="multiple"?(c(),_("div",Ut,[(c(),_(P,null,U(5,u=>e("div",null,[u!=1?(c(),_("hr",Bt)):H("",!0),e("div",Vt,[(c(),_(P,null,U(2,g=>{var T,F,b;return e("div",Ot,[e("div",Et,[p(f,{checked:a.checked,"onUpdate:checked":t[8]||(t[8]=K=>a.checked=K)},null,8,["checked"]),(T=s(o).test[n])!=null&&T.variant[g]&&typeof((F=s(o).test[n])==null?void 0:F.variant[g])=="object"?(c(),_("img",{key:0,class:"max-h-[160px] my-4",src:(b=s(o).test[n])==null?void 0:b.variant[g][1],alt:""},null,8,jt)):W((c(),_("input",{key:1,"onUpdate:modelValue":K=>s(o).test[n].variant[g]=K,class:"border-0 bg-transparent p-0 rounded-[0]",type:"text",placeholder:"Variant uchun"},null,8,$t)),[[X,s(o).test[n].variant[g]]])]),e("label",{onClick:K=>q(g,"variant"),for:"upload_question"},Nt,8,Dt)])}),64))])])),64))])):((oe=s(o).test[n])==null?void 0:oe.type)=="customizable"?(c(),_("div",Rt,[(c(),_(P,null,U(3,u=>{var g,T,F;return e("div",null,[e("div",Ht,[e("div",Mt,[p(f,{checked:a.checked,"onUpdate:checked":t[9]||(t[9]=b=>a.checked=b)},null,8,["checked"]),(g=s(o).test[n])!=null&&g.variant[u]&&typeof((T=s(o).test[n])==null?void 0:T.variant[u])=="object"?(c(),_("img",{key:0,class:"max-h-[160px] my-4",src:(F=s(o).test[n])==null?void 0:F.variant[u][1],alt:""},null,8,Lt)):W((c(),_("input",{key:1,"onUpdate:modelValue":b=>s(o).test[n].variant[u]=b,class:"border-0 bg-transparent p-0 rounded-[0]",type:"text",placeholder:"Variant uchun"},null,8,At)),[[X,s(o).test[n].variant[u]]])]),e("label",{onClick:b=>q(u,"variant"),for:"upload_question"},Wt,8,zt)]),u!=1?(c(),_("hr",Xt)):H("",!0)])}),64))])):H("",!0)])])])]}),_:2},1032,["id"])),64))]),_:1}),e("div",Qt,[s(l).is_completed?(c(),R(S,{key:0,onClick:V,class:"!h-12 font-semibold b_c40 relative white !px-6"},{default:x(()=>[N(" Yuklash "),s(M).isLoadingType("createTest")?(c(),R(r,{key:0,class:"full_flex scale-75 rounded-lg"})):H("",!0)]),_:1})):(c(),R(S,{key:1,onClick:V,class:"!h-12 font-semibold bg_orange relative white !px-6"},{default:x(()=>[N(" Keyingi "),s(M).isLoadingType("createTest")?(c(),R(r,{key:0,class:"full_flex scale-75 rounded-lg"})):H("",!0)]),_:1}))])])]),e("input",{onChange:D,class:"input_file",type:"file",id:"upload_question"},null,32),e("input",{onChange:C,class:"input_file",type:"file",id:"import_file"},null,32),p(ue,{class:"max-w-[440px]",open:s(l).settings,"onUpdate:open":t[17]||(t[17]=n=>s(l).settings=n),centered:""},{default:x(()=>[Gt,e("div",Jt,[e("div",Yt,[Zt,e("div",es,[p(L,{class:"w-full",value:s(o).test_settings.start_date,"onUpdate:value":t[10]||(t[10]=n=>s(o).test_settings.start_date=n),placeholder:"0000-00-00"},null,8,["value"]),p(Z,{value:s(o).test_settings.start_date,"onUpdate:value":t[11]||(t[11]=n=>s(o).test_settings.start_date=n),format:"HH:mm",placeholder:"00:00"},null,8,["value"])])]),e("div",ts,[ss,e("div",os,[p(L,{class:"w-full",value:s(o).test_settings.end_date,"onUpdate:value":t[12]||(t[12]=n=>s(o).test_settings.end_date=n),placeholder:"0000-00-00"},null,8,["value"]),p(Z,{value:s(o).test_settings.end_date,"onUpdate:value":t[13]||(t[13]=n=>s(o).test_settings.end_date=n),format:"HH:mm",placeholder:"00:00"},null,8,["value"])])]),e("div",ns,[ls,N(" "+ee(s(o).test_settings.period)+" ",1),e("div",null,[p(Z,{onChange:t[14]||(t[14]=n=>{const O=n.split(":"),A=+O[0]*60,z=+O[1];s(o).test_settings.period=z+A}),format:"HH:mm","value-format":"HH:mm",placeholder:"00:00"})])]),e("div",as,[is,e("div",rs,[e("div",ds,[cs,W(e("input",{"onUpdate:modelValue":t[15]||(t[15]=n=>s(o).test_settings.sort_level=n),id:"sortnum",type:"number",class:"w-16"},null,512),[[X,s(o).test_settings.sort_level]])]),e("div",us,[ps,W(e("input",{"onUpdate:modelValue":t[16]||(t[16]=n=>s(o).test_settings.test_count=n),id:"sortnum",type:"number",class:"w-16"},null,512),[[X,s(o).test_settings.test_count]])])])])])]),_:1},8,["open"])])}}};export{Ms as default};