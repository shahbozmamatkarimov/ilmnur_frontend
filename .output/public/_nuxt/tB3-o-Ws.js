import{c as s,u as v,z as o,w as d,o as g}from"./B7WI5WXn.js";function m(l,n){const{defaultValue:u,value:a=s()}=n||{};let t=typeof l=="function"?l():l;a.value!==void 0&&(t=v(a)),u!==void 0&&(t=typeof u=="function"?u():u);const r=s(t),f=s(t);o(()=>{let e=a.value!==void 0?a.value:r.value;n.postState&&(e=n.postState(e)),f.value=e});function c(e){const i=f.value;r.value=e,g(f.value)!==e&&n.onChange&&n.onChange(e,i)}return d(a,()=>{r.value=a.value}),[f,c]}export{m as u};