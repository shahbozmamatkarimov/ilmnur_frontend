import{i as g,b as l,k as u,l as s}from"./BbnbbUkH.js";import{M as y}from"./8KGax0iF.js";var d="[object Symbol]";function f(r){return typeof r=="symbol"||g(r)&&l(r)==d}function b(r,n){for(var t=-1,e=r==null?0:r.length,i=Array(e);++t<e;)i[t]=n(r[t],t,r);return i}var I=1/0,p=u?u.prototype:void 0,h=p?p.toString:void 0;function m(r){if(typeof r=="string")return r;if(s(r))return b(r,m)+"";if(f(r))return h?h.call(r):"";var n=r+"";return n=="0"&&1/r==-I?"-0":n}var T=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,E=/^\w*$/;function S(r,n){if(s(r))return!1;var t=typeof r;return t=="number"||t=="symbol"||t=="boolean"||r==null||f(r)?!0:E.test(r)||!T.test(r)||n!=null&&r in Object(n)}var C="Expected a function";function c(r,n){if(typeof r!="function"||n!=null&&typeof n!="function")throw new TypeError(C);var t=function(){var e=arguments,i=n?n.apply(this,e):e[0],o=t.cache;if(o.has(i))return o.get(i);var a=r.apply(this,e);return t.cache=o.set(i,a)||o,a};return t.cache=new(c.Cache||y),t}c.Cache=y;var P=500;function w(r){var n=c(r,function(e){return t.size===P&&t.clear(),e}),t=n.cache;return n}var M=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,N=/\\(\\)?/g,$=w(function(r){var n=[];return r.charCodeAt(0)===46&&n.push(""),r.replace(M,function(t,e,i,o){n.push(i?o.replace(N,"$1"):e||t)}),n});function x(r){return r==null?"":m(r)}function z(r,n){return s(r)?r:S(r,n)?[r]:$(x(r))}var A=1/0;function O(r){if(typeof r=="string"||f(r))return r;var n=r+"";return n=="0"&&1/r==-A?"-0":n}function F(r,n){n=z(n,r);for(var t=0,e=n.length;r!=null&&t<e;)r=r[O(n[t++])];return t&&t==e?r:void 0}export{F as b,z as c,O as t};
