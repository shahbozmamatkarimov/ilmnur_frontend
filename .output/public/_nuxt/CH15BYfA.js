import{r as u,H as m,$ as _,a4 as e,a9 as g,aa as r,ab as l,u as o,D as x,X as h,a3 as f,V as b,a6 as v,a7 as y,a8 as w}from"./Dg7Bj1Dn.js";import{_ as V,g as B,i as k,d as E}from"./rmVoKyAr.js";import{_ as I}from"./PgT5D4bP.js";const i=n=>(y("data-v-38cda8be"),n=n(),w(),n),S={class:"py-10 md:px-0 px-4 max-h-screen min-h-[calc(100vh_-_100px)] overflow-y-auto"},F={class:"sm:w-[500px] bg_white mx-auto sm:p-[50px] p-5 pb-8 rounded-[16px]"},z=i(()=>e("h1",{class:"text-center md:text-[28px] mb-7 text-xl font-bold"}," Roʻyxatdan oʻtish ",-1)),A={class:"space-y-2"},C=i(()=>e("label",{for:"name"},"Ism",-1)),R={class:"space-y-2"},U=i(()=>e("label",{for:"surname"},"Familiya",-1)),M={class:"space-y-2"},N=i(()=>e("label",{for:"email"},"Email",-1)),D=i(()=>e("p",{class:"!mt-1 text-xs"},"Emailingizga tasdiqlash kodi jo'natiladi",-1)),L={class:"space-y-2"},T=i(()=>e("label",{for:"password"},"Parol",-1)),j={class:"flex relative"},q=i(()=>e("img",{class:"absolute top-0 right-0 p-4 cursor-pointer",src:I,alt:""},null,-1)),G=i(()=>e("div",{id:"googleButton"},null,-1)),H={class:"pt-8 space-y-6 grid"},K=i(()=>e("button",{class:"login_btn mx-auto"},"Keyingi",-1)),O={__name:"index",setup(n){const t=B(),d=k();d.store.verification=!0;const c=E();return t.register.role="student",u({show:!1}),m(()=>{google.accounts.id.initialize({client_id:c.public.client_id,callback:t.verifyGoogleCredential,context:"signin"}),google.accounts.id.renderButton(document.getElementById("googleButton"),{type:"standard",size:"large",text:"signin_with",shape:"rectangular",logo_alignment:"center",width:250})}),(P,s)=>{const p=f("router-link");return b(),_("main",S,[e("div",F,[z,e("form",{onSubmit:s[4]||(s[4]=g((...a)=>o(t).authRegister&&o(t).authRegister(...a),["prevent"])),class:"space-y-6 text-sm"},[e("div",A,[C,r(e("input",{"onUpdate:modelValue":s[0]||(s[0]=a=>o(t).register.name=a),id:"name",type:"text"},null,512),[[l,o(t).register.name]])]),e("div",R,[U,r(e("input",{"onUpdate:modelValue":s[1]||(s[1]=a=>o(t).register.surname=a),id:"surname",type:"text"},null,512),[[l,o(t).register.surname]])]),e("div",M,[N,r(e("input",{"onUpdate:modelValue":s[2]||(s[2]=a=>o(t).register.email=a),id:"email",type:"email"},null,512),[[l,o(t).register.email]]),D]),e("div",L,[T,e("div",j,[r(e("input",{"onUpdate:modelValue":s[3]||(s[3]=a=>o(t).register.password=a),id:"password",type:"password",class:"pr-10"},null,512),[[l,o(t).register.password]]),q])]),G,e("div",H,[K,x(p,{class:"text-[#2E9AFF] max-w-fit mx-auto border-b border-[#2E9AFF] text-end font-medium",to:"/login"},{default:h(()=>[v(" Oldin ro'yhatdan o'tganmisiz? ")]),_:1})])],32)])])}}},Q=V(O,[["__scopeId","data-v-38cda8be"]]);export{Q as default};
