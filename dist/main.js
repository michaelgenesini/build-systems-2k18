!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);var n=e=>{return e.reduce((e,t)=>e+t,0)};let{firstName:o,lastName:a}={firstName:"Parrot",lastName:"Party"};console.log(`Hello ${o} ${a}!`);const u=`Hello, ${"Party Parrot"}!`;const l=n([1,2,3,4]),c=document.getElementById("test");c.innerText=`sayHelloTo('Party') => ${u}\n\n`,c.innerText+=`addArray([1, 2, 3, 4]) => ${l}`}]);