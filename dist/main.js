!function(e){var t={};function s(o){if(t[o])return t[o].exports;var c=t[o]={i:o,l:!1,exports:{}};return e[o].call(c.exports,c,c.exports,s),c.l=!0,c.exports}s.m=e,s.c=t,s.d=function(e,t,o){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)s.d(o,c,function(t){return e[t]}.bind(null,c));return o},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=0)}([function(e,t,s){"use strict";s.r(t);var o=()=>{const e=document.querySelector(".clubs-list > ul"),t=document.getElementById("free_visit_form"),s=document.getElementById("callback_form"),o=document.querySelector(".popup-menu"),c=document.getElementById("gift");document.addEventListener("click",n=>{const l=n.target;switch(l){case l.closest(".clubs-list__title"):e.classList.toggle("show");break;case l.closest(".open-popup"):t.classList.add("show");break;case l.closest("#header-callback__btn"):s.classList.add("show");break;case l.closest(".fixed-gift__img"):l.closest(".fixed-gift").remove(),c.classList.add("show");break;case l.closest(".menu-button__img, .close-menu-btn__img, .popup-menu > ul > li > a"):o.classList.toggle("show-flex");break;case l.closest(".close-btn, .close_icon, .overlay"):t.classList.remove("show"),c&&c.classList.remove("show"),s.classList.remove("show")}})};var c=()=>{const e=document.querySelector("header"),t=document.getElementById("totop"),s=e.getBoundingClientRect().height;window.addEventListener("scroll",()=>{window.scrollY>=s?t.className="show":t.className=""})};var n=()=>{const e=document.querySelector(".menu-button"),t=document.querySelector(".top-menu"),s=t.getBoundingClientRect().y;window.addEventListener("scroll",()=>{document.documentElement.clientWidth<=768?(t.getBoundingClientRect().y<0&&e.closest(".top-menu").classList.add("fixed-menu__button"),window.scrollY<s&&e.closest(".top-menu").classList.remove("fixed-menu__button")):document.documentElement.clientWidth>769&&e.closest(".top-menu").classList.remove("fixed-menu__button")})};var l=e=>{const t=document.querySelector(e),s=t.querySelectorAll(".slide"),o=t.querySelector(".slider-dots");let c,n=0;s.forEach(e=>{const t=document.createElement("li");t.className="slider-dots__dot",o.appendChild(t)});const l=o.querySelectorAll(".slider-dots__dot");l[0].classList.add("slider-dots__dot_active");const r=(e=2e3)=>{c=setInterval(()=>{s[n].classList.remove("fade-in"),l[n].classList.remove("slider-dots__dot_active"),n++,n>=s.length&&(n=0),s[n].classList.add("fade-in"),l[n].classList.add("slider-dots__dot_active")},e)};t.addEventListener("mouseover",e=>{e.target.closest(".slider-arrow, .slider-dots__dot")&&clearInterval(c)}),t.addEventListener("mouseout",e=>{e.target.matches(".slider-dots__dot, .slider-arrow")&&r()}),t.addEventListener("click",e=>{const t=e.target;s[n].classList.remove("fade-in"),l[n].classList.remove("slider-dots__dot_active"),t.closest(".slider-arrow.prev")?n--:t.closest(".slider-arrow.next")?n++:t.closest(".slider-dots__dot")&&l.forEach((e,s)=>{e.classList.remove("slider-dots__dot_active"),e===t&&(e.classList.add("slider-dots__dot_active"),n=s)}),n>=s.length?n=0:n<0&&(n=s.length-1),s[n].classList.add("fade-in"),l[n].classList.add("slider-dots__dot_active")}),r()};var r=()=>{const e=document.querySelector(".calculator"),t=document.querySelectorAll('input[name="card-type"]'),s=document.getElementById("card_leto_mozaika"),o=document.getElementById("promocode"),c=document.getElementById("price-total");e&&e.addEventListener("input",()=>{let e;t.forEach(t=>{if(t.checked)switch(+t.value){case 1:e=s.checked?1999:2999;break;case 6:e=s.checked?9990:14990;break;case 9:e=s.checked?13900:21990;break;case 12:e=s.checked?19900:24990}}),"ТЕЛО2019"===o.value?c.textContent=Math.floor(.7*e):c.textContent=e})};document.addEventListener("DOMContentLoaded",()=>{o(),c(),n(),l(".main-slider"),l(".gallery-slider"),r()})}]);