import{_ as G}from"./BK5zdkqF.js";import{_ as J,a as Z,b as ee,c as F,d as te}from"./EbzvVjJ4.js";import{_ as se}from"./BKCXOesK.js";import{r as oe,w as le,$ as d,a4 as e,D as p,X as v,u as o,F as w,ac as y,a5 as L,a6 as C,W as k,ag as ne,V as r,ae as ie,ah as ae,ad as S,aa as M,ab as O,ai as re}from"./C4IK2AjC.js";import{L as ce,M as de,i as ue}from"./QHZ_BPHT.js";import{_ as R}from"./bKiWB3AL.js";import{_ as _e}from"./BnHY0Z5z.js";import{s as I}from"./DlLmpYus.js";import{l as pe}from"./K_80YCaT.js";import{B as me}from"./BzE5DoKl.js";import{C as fe}from"./BgiXK5Qj.js";import{_ as he}from"./DkOi0xjx.js";import"./hkPcZriX.js";import"./BbnbbUkH.js";import"./xjDQqpxK.js";import"./B_FpwJHq.js";import"./8KGax0iF.js";import"./DS6Ep8oh.js";import"./Dx27d-PK.js";import"./COqob18v.js";const ve={class:"rounded-[6px] overflow-hidden overflow-y-auto h-full max-h-[calc(100vh_-_160px)]"},ge={class:"rounded-[6px] overflow-hidden"},xe=e("h1",{class:"text-xl font-semibold leading-[30px] pt-8 pb-6 bg-white px-9"}," Test yaratishni boshlang: ",-1),be={class:"mt-6 px-9"},we={class:"flex items-center justify-between"},ye=e("div",{class:"full_flex bg-[#FFF3EB] w-[42px] !h-[42px]"},[e("img",{src:R,alt:""})],-1),ke=e("div",null,[e("label",{for:"import_file",class:"full_flex gap-2 bg-white p-1.5 rounded-md border_ced cursor-pointer"},[e("img",{class:"h-7 w-7",src:_e,alt:""}),e("p",null,"WORD")])],-1),Se={class:"flex gap-[10px] my-6"},qe=["onClick"],Ce={class:"bg-white px-9 py-6"},Fe={class:"flex items-center justify-between"},Te={class:"text-2xl"},Ve={class:"font-semibold text-[28px]"},Ue=e("div",{class:"full_flex bg-[#FFF3EB] w-[42px] !h-[42px]"},[e("img",{src:R,alt:""})],-1),Be={class:"w-[70%]"},Ee={class:"flex overflow-hidden overflow-x-auto"},$e={class:"max-h-min max-w-min min-h-fit min-w-fit"},je=["src"],De=e("label",{class:"font-medium",for:"resourses"},"Resurslarni biriktiring",-1),Le={class:"full_flex my-auto space-x-10 mt-5"},Me=e("div",{class:"full_flex mx-auto h-10 w-10 bg-[#FFF3EB] rounded-full"},[e("img",{class:"w-[40%]",src:J,alt:""})],-1),Oe=e("p",{class:"font-medium mt-4 text-xs _c24"},"Video",-1),Ie=e("div",{class:"full_flex mx-auto h-10 w-10 bg-[#FFF3EB] rounded-full"},[e("img",{class:"w-[40%]",src:Z,alt:""})],-1),Re=e("p",{class:"font-medium mt-4 text-xs _c24"},"Tekst",-1),Pe=e("div",{class:"full_flex mx-auto h-10 w-10 bg-[#FFF3EB] rounded-full"},[e("img",{class:"w-[40%]",src:ee,alt:""})],-1),Ne=e("p",{class:"font-medium mt-4 text-xs _c24"},"Rasm",-1),ze=e("img",{class:"cursor-pointer",src:F,alt:""},null,-1),Ae=e("hr",{class:"border_ced my-6 !border-b-0"},null,-1),Xe={class:"space-y-6"},He=e("h1",{class:"-mb-3"},"Variantlar",-1),Ke=e("p",null,"To‘g‘ri javobni belgilang",-1),Qe={key:0,class:"space-y-6"},We={class:"flex items-center gap-4"},Ye={class:"flex items-center gap-4 b_cf5 r_8 w-full px-4"},Ge=["src"],Je=["onClick"],Ze=e("img",{class:"cursor-pointer",src:F,alt:""},null,-1),et=[Ze],tt={key:1},st={key:0,class:"border_ced my-6 !border-b-0"},ot={class:"grid grid-cols-2 gap-6"},lt={class:"flex items-center gap-4"},nt={class:"flex items-center gap-4 b_cf5 r_8 w-full px-4"},it=["src"],at=["onUpdate:modelValue"],rt=["onClick"],ct=e("img",{class:"cursor-pointer",src:F,alt:""},null,-1),dt=[ct],ut={key:2,class:"b_cf5 r_8 px-4"},_t={class:"flex items-center gap-4"},pt={class:"flex items-center gap-4 r_8 w-full"},mt=["src"],ft=["onUpdate:modelValue"],ht=["onClick"],vt=e("img",{class:"cursor-pointer",src:F,alt:""},null,-1),gt=[vt],xt={key:0,class:"border_ced !border-b-0"},bt={class:"text-end w-[70%] mt-6"},Nt={__name:"index",setup(wt){const P=[ne],n=ce();de();const U=ue(),s=oe({questions:[],questionmodal:!1,cursorPosition:"",fileId:"",fileType:"",mouse_wheel:"",slideStep:1,questions_count:1,not_completed:[],is_completed:!1,convertedContent:""}),N=[{label:"Variantli",value:"variant"},{label:"Ko'p tanlovli",value:"multiple"},{label:"To'ldiriladigan",value:"refillable"},{label:"Moslashtiriladigan",value:"customizable"}],z=[{value:1},{value:10},{value:16},{value:20},{value:40}];async function A(l){const t=l.target.files[0],a=URL.createObjectURL(t);console.log(s.fileType),s.fileType=="question"?(n.test[s.slideStep].question.push(t),s.questions.push(a)):n.test[s.slideStep].variant[s.fileId]=[t,a],document.getElementById("upload_question").value=""}async function X(l){const t=l.target.files[0];if(!t)return;const a=await K(t);console.log(a),s.convertedContent=a.value,H(a.value)}function H(l){var m;const t=l.match(/<tr>.*?<\/tr>/gs);if(!t)return[];let a=t.map(u=>{const _=u.match(/<td>(.*?)<\/td>/gs);return _?_.map(b=>b.replace(/<\/?td>/g,"")):[]});a.shift(),console.log(a);for(let u=0;u<a.length;u++){n.test[u+1].question[0]=a[u][1];for(let _=2;_<((m=a[u])==null?void 0:m.length);_++)n.test[u+1].variant[_-1]=a[u][_];console.log(n.test[u+1].variant)}}function K(l){return new Promise((t,a)=>{const m=new FileReader;m.onload=async u=>{const _=u.target.result;console.log(_);const b=await pe.convertToHtml({arrayBuffer:_},{styleMap:["p[style-name='Equation'] => span.math-display:fresh"]});console.log(b),t(b)},m.onerror=a,m.readAsArrayBuffer(l)})}function T(l,t){console.log(l,t),s.fileId=l,s.fileType=t}function Q(){setTimeout(()=>{var l;s.slideStep=+((l=document.querySelector(".swiper-slide-visible"))==null?void 0:l.id)},200)}function W(l){l.deltaX>0?(s.mouse_wheel+=1,s.mouse_wheel%10==0&&(s.slideStep<n.store.questions_count&&(s.slideStep+=1),s.mouse_wheel=0),console.log("Scrolling to the right")):l.deltaX<0&&(s.mouse_wheel+=1,s.mouse_wheel%10==0&&(s.slideStep>1&&(s.slideStep-=1),s.mouse_wheel=0),console.log("Scrolling to the left"))}function Y(l){var m;let t,a;if((m=n.test[l].question)!=null&&m.length){t=0;for(let u of Object.values(n.test[l].variant))if(u&&t++,t==2)return a=s.not_completed.indexOf(l),a==-1&&s.not_completed.push(l),!0}return a=s.not_completed.indexOf(l),a!=-1&&s.not_completed.splice(a,1),!1}function B(){var l;s.is_completed&&n.createTest(),s.not_completed.sort((t,a)=>t-a);for(let t=0;t<n.store.questions_count-1;t++)if(s.not_completed[t+1]-s.not_completed[t]!=1){s.slideStep=s.not_completed[t]+1;return}if(((l=Object.keys(s.not_completed))==null?void 0:l.length)==n.store.questions_count){s.is_completed=!0;return}s.slideStep!=n.store.questions_count&&(s.slideStep+=1)}return le(()=>s.slideStep,()=>{const l=document.querySelector(".swiper-pagination-clickable");if(l&&l.children.length>=s.slideStep){const t=l.children[s.slideStep-1];t&&t.click()}}),(l,t)=>{const a=he,m=G,u=me,_=fe,b=te,E=se;return r(),d("main",ve,[e("section",ge,[xe,e("div",be,[e("div",we,[p(a,{value:o(n).store.questions_count,"onUpdate:value":t[0]||(t[0]=i=>o(n).store.questions_count=i),class:"min-w-[145px] test_arrow !h-[44px] sr_12",options:z.map(i=>({label:`${i.value} talik savollar`,value:i.value})),required:""},{suffixIcon:v(()=>[ye]),_:1},8,["value","options"]),ke]),e("div",Se,[(r(!0),d(w,null,y(o(n).store.questions_count,i=>(r(),d("button",{onClick:V=>o(s).slideStep=i,class:ie([[o(s).slideStep==i?"border border-[#40E746]":"border_ced",Y(i)?"bg-[#40E746]":""],"h-10 w-10 bg-white r_2 _c55"])},L(i),11,qe))),256))])]),e("div",Ce,[e("div",Fe,[e("p",Te,[e("span",Ve,L(o(s).slideStep)+".",1),C(" Savol ")]),p(a,{value:o(n).test[o(s).slideStep].type,"onUpdate:value":t[1]||(t[1]=i=>o(n).test[o(s).slideStep].type=i),class:"!relative min-w-[145px] test_arrow !h-[44px] sr_12",options:N.map(i=>({label:i.label,value:i.value})),required:""},{suffixIcon:v(()=>[Ue]),_:1},8,["value","options"])]),p(o(re),{onMousewheel:W,onSliderMove:Q,watchSlidesProgress:!0,slidesPerView:1,spaceBetween:30,pagination:{clickable:!0},class:"mySwiper",modules:P},{default:v(()=>[(r(),d(w,null,y(16,i=>p(o(ae),{id:i},{default:v(()=>{var V,$,j,D;return[e("section",null,[e("div",Be,[e("div",Ee,[(r(!0),d(w,null,y(o(s).questions,c=>(r(),d("div",$e,[e("img",{class:"max-h-[200px]",src:c,alt:""},null,8,je)]))),256))]),p(m,null,{default:v(()=>[p(o(I),{modelValue:o(n).test[i].question[0],"onUpdate:modelValue":c=>o(n).test[i].question[0]=c},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),De,e("div",Le,[p(u,{ref_for:!0,ref:"ref1",onClick:t[2]||(t[2]=c=>l.openModal("video")),class:"text-center w-12 h-[100px] !p-0 border-0 shadow-none"},{default:v(()=>[Me,Oe]),_:1},512),p(u,{ref_for:!0,ref:"ref2",onClick:t[3]||(t[3]=c=>l.openModal("tekst")),class:"text-center w-12 h-[100px] !p-0 border-0 shadow-none"},{default:v(()=>[Ie,Re]),_:1},512),p(u,{ref_for:!0,ref:"ref3",onClick:t[4]||(t[4]=c=>l.openModal("image")),class:"text-center w-12 h-[100px] !p-0 border-0 shadow-none"},{default:v(()=>[Pe,Ne]),_:1},512)]),e("label",{onClick:t[5]||(t[5]=c=>o(s).fileType="question"),for:"upload_question",class:"max-w-fit full_flex mt-6 gap-4 h-[44px] border border-[#EDEDED] rounded-full px-8"},[ze,C(" Fayl biriktirish ")]),Ae,e("div",Xe,[He,Ke,((V=o(n).test[i])==null?void 0:V.type)=="variant"||(($=o(n).test[i])==null?void 0:$.type)=="refillable"?(r(),d("div",Qe,[(r(),d(w,null,y(5,c=>{var f,g,x;return e("div",We,[e("div",Ye,[p(_,{checked:l.checked,"onUpdate:checked":t[6]||(t[6]=h=>l.checked=h)},null,8,["checked"]),(f=o(n).test[i])!=null&&f.variant[c]&&typeof((g=o(n).test[i])==null?void 0:g.variant[c])=="object"?(r(),d("img",{key:0,class:"max-h-[160px] my-4",src:(x=o(n).test[i])==null?void 0:x.variant[c][1],alt:""},null,8,Ge)):(r(),k(m,{key:1},{default:v(()=>[p(o(I),{modelValue:o(n).test[i].variant[c],"onUpdate:modelValue":h=>o(n).test[i].variant[c]=h},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024))]),e("label",{onClick:h=>T(c,"variant"),for:"upload_question"},et,8,Je)])}),64))])):((j=o(n).test[i])==null?void 0:j.type)=="multiple"?(r(),d("div",tt,[(r(),d(w,null,y(5,c=>e("div",null,[c!=1?(r(),d("hr",st)):S("",!0),e("div",ot,[(r(),d(w,null,y(2,f=>{var g,x,h;return e("div",lt,[e("div",nt,[p(_,{checked:l.checked,"onUpdate:checked":t[7]||(t[7]=q=>l.checked=q)},null,8,["checked"]),(g=o(n).test[i])!=null&&g.variant[f]&&typeof((x=o(n).test[i])==null?void 0:x.variant[f])=="object"?(r(),d("img",{key:0,class:"max-h-[160px] my-4",src:(h=o(n).test[i])==null?void 0:h.variant[f][1],alt:""},null,8,it)):M((r(),d("input",{key:1,"onUpdate:modelValue":q=>o(n).test[i].variant[f]=q,class:"border-0 bg-transparent p-0 rounded-[0]",type:"text",placeholder:"Variant uchun"},null,8,at)),[[O,o(n).test[i].variant[f]]])]),e("label",{onClick:q=>T(f,"variant"),for:"upload_question"},dt,8,rt)])}),64))])])),64))])):((D=o(n).test[i])==null?void 0:D.type)=="customizable"?(r(),d("div",ut,[(r(),d(w,null,y(3,c=>{var f,g,x;return e("div",null,[e("div",_t,[e("div",pt,[p(_,{checked:l.checked,"onUpdate:checked":t[8]||(t[8]=h=>l.checked=h)},null,8,["checked"]),(f=o(n).test[i])!=null&&f.variant[c]&&typeof((g=o(n).test[i])==null?void 0:g.variant[c])=="object"?(r(),d("img",{key:0,class:"max-h-[160px] my-4",src:(x=o(n).test[i])==null?void 0:x.variant[c][1],alt:""},null,8,mt)):M((r(),d("input",{key:1,"onUpdate:modelValue":h=>o(n).test[i].variant[c]=h,class:"border-0 bg-transparent p-0 rounded-[0]",type:"text",placeholder:"Variant uchun"},null,8,ft)),[[O,o(n).test[i].variant[c]]])]),e("label",{onClick:h=>T(c,"variant"),for:"upload_question"},gt,8,ht)]),c!=1?(r(),d("hr",xt)):S("",!0)])}),64))])):S("",!0)])])])]}),_:2},1032,["id"])),64))]),_:1}),e("div",bt,[o(s).is_completed?(r(),k(E,{key:0,onClick:B,class:"!h-12 font-semibold b_c40 relative white !px-6"},{default:v(()=>[C(" Yuklash "),o(U).isLoadingType("createTest")?(r(),k(b,{key:0,class:"full_flex scale-75 rounded-lg"})):S("",!0)]),_:1})):(r(),k(E,{key:1,onClick:B,class:"!h-12 font-semibold bg_orange relative white !px-6"},{default:v(()=>[C(" Keyingi "),o(U).isLoadingType("createTest")?(r(),k(b,{key:0,class:"full_flex scale-75 rounded-lg"})):S("",!0)]),_:1}))])])]),e("input",{onChange:A,class:"input_file",type:"file",id:"upload_question"},null,32),e("input",{onChange:X,class:"input_file",type:"file",id:"import_file"},null,32)])}}};export{Nt as default};
