!function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);var r=()=>{const e=document.querySelector(".clubs-list > ul"),t=document.getElementById("free_visit_form"),o=document.getElementById("callback_form"),r=document.querySelector(".popup-menu"),n=document.querySelectorAll(".popup"),s=document.getElementById("gift");document.addEventListener("click",c=>{const l=c.target;switch(l){case l.closest(".clubs-list__title"):e.classList.toggle("fade-in");break;case l.closest(".open-popup"):t.classList.add("fade-in");break;case l.closest("#header-callback__btn"):o.classList.add("fade-in");break;case l.closest(".fixed-gift__img"):l.closest(".fixed-gift").remove(),s.classList.add("fade-in");break;case l.closest(".menu-button__img, .close-menu-btn__img, .popup-menu > ul > li > a"):r.classList.toggle("show-flex");break;case l.closest(".close-btn, .close_icon, .overlay"):n.forEach(e=>{e.classList.remove("fade-in")})}})};var n=()=>{const e=document.querySelector("header"),t=document.getElementById("totop"),o=e.getBoundingClientRect().height;window.addEventListener("scroll",()=>{window.scrollY>=o?t.className="show":t.className=""})};var s=()=>{const e=document.querySelector(".menu-button"),t=document.querySelector(".top-menu"),o=t.getBoundingClientRect().y;window.addEventListener("scroll",()=>{document.documentElement.clientWidth<=768?(t.getBoundingClientRect().y<0&&e.closest(".top-menu").classList.add("fixed-menu__button"),window.scrollY<o&&e.closest(".top-menu").classList.remove("fixed-menu__button")):document.documentElement.clientWidth>769&&e.closest(".top-menu").classList.remove("fixed-menu__button")})};var c=e=>{const t=document.querySelector(e),o=t.querySelectorAll(".slide"),r=t.querySelector(".slider-dots");let n,s=0;o.forEach(e=>{const t=document.createElement("li");t.className="slider-dots__dot",r.appendChild(t)});const c=r.querySelectorAll(".slider-dots__dot");c[0].classList.add("slider-dots__dot_active");const l=(e=2e3)=>{n=setInterval(()=>{o[s].classList.remove("fade-in"),c[s].classList.remove("slider-dots__dot_active"),s++,s>=o.length&&(s=0),o[s].classList.add("fade-in"),c[s].classList.add("slider-dots__dot_active")},e)};t.addEventListener("mouseover",e=>{e.target.closest(".slider-arrow, .slider-dots__dot")&&clearInterval(n)}),t.addEventListener("mouseout",e=>{e.target.matches(".slider-dots__dot, .slider-arrow")&&l()}),t.addEventListener("click",e=>{const t=e.target;o[s].classList.remove("fade-in"),c[s].classList.remove("slider-dots__dot_active"),t.closest(".slider-arrow.prev")?s--:t.closest(".slider-arrow.next")?s++:t.closest(".slider-dots__dot")&&c.forEach((e,o)=>{e.classList.remove("slider-dots__dot_active"),e===t&&(e.classList.add("slider-dots__dot_active"),s=o)}),s>=o.length?s=0:s<0&&(s=o.length-1),o[s].classList.add("fade-in"),c[s].classList.add("slider-dots__dot_active")}),l()};var l=()=>{const e=document.querySelector(".services-slider"),t=document.querySelector(".services-slider-wrap"),o=e.querySelectorAll(".slide");let r,n=0,s=5;const c=()=>{let e=window.innerWidth;e<1200&&e>=991&&(s=4),e<991&&e>=768&&(s=3),e<768&&e>=479&&(s=2),e<479&&(s=1),r=Math.floor(100/s)};c(),window.addEventListener("resize",c),e.addEventListener("click",e=>{const c=e.target;switch(c){case c.closest(".slider-arrow.prev, .slider-arrow.prev > img"):n>=0&&(--n,n<0&&(n=o.length-s),t.style.transform=`translateX(-${n*r}%)`);break;case c.closest(".slider-arrow.next, .slider-arrow.next > img"):n<=o.length-s&&(++n,n>o.length-s&&(n=0),t.style.transform=`translateX(-${n*r}%)`)}})};var a=()=>{const e=document.querySelector(".calculator"),t=document.querySelectorAll('input[name="card-type"]'),o=document.getElementById("card_leto_mozaika"),r=document.getElementById("promocode"),n=document.getElementById("price-total");e&&e.addEventListener("input",()=>{let e;t.forEach(t=>{if(t.checked)switch(+t.value){case 1:e=o.checked?1999:2999;break;case 6:e=o.checked?9990:14990;break;case 9:e=o.checked?13900:21990;break;case 12:e=o.checked?19900:24990}}),"ТЕЛО2019"===r.value?n.textContent=Math.floor(.7*e):n.textContent=e})};var d=function(e,t="+7 (___) ___-__-__"){const o=document.querySelector(e);function r(e){const o=e.keyCode,r=t,n=r.replace(/\D/g,""),s=this.value.replace(/\D/g,"");let c=0,l=r.replace(/[_\d]/g,(function(e){return c<s.length?s.charAt(c++)||n.charAt(c):e}));c=l.indexOf("_"),-1!=c&&(l=l.slice(0,c));let a=r.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");a=new RegExp("^"+a+"$"),(!a.test(this.value)||this.value.length<5||o>47&&o<58)&&(this.value=l),"blur"==e.type&&this.value.length<5&&(this.value="")}o.addEventListener("input",r),o.addEventListener("focus",r),o.addEventListener("blur",r)};var i=e=>{const t=document.getElementById("thanks"),o=document.getElementById("error"),r=document.querySelector(e),n=r.querySelectorAll("input"),s=r.querySelector(".check"),c=r.querySelector("#footer_leto_mozaika"),l=r.querySelector("#footer_leto_schelkovo"),a=document.createElement("div"),d=document.createElement("div");d.textContent="Пожалуйста, поставьте галочку!",d.className="check_error";let i,u=0;r.addEventListener("input",e=>{const t=e.target;"promocode"!==t.id&&("name"===t.name?t.value=t.value.replace(/[^а-я|А-Я| ]/g,""):"phone"===t.name&&(t.value=t.value.replace(/^\D/g,"")))}),r.addEventListener("submit",e=>{e.preventDefault(),d.remove();const m=new FormData(r);if(!(s&&s.checked||l&&l.checked||c&&c.checked))return r.appendChild(d),!1;a.className="spinner",r.appendChild(a),i=setInterval(()=>{u+=5,u>=360&&(u=0),a.style.transform=`rotate(${u}deg)`},20),(e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:e}))(m).then(e=>{if(clearInterval(i),a.remove(),200!==e.status)throw o.classList.add("fade-in"),new Error("Something wrong! network status isn`t 200");t.classList.add("fade-in"),n.forEach(e=>{"radio"!==e.type&&"form_name"!==e.name&&("checkbox"===e.type?e.checked=!1:e.value="")})}).catch(e=>{console.error(e)})})};var u=()=>{const e=[].slice.call(document.querySelectorAll('a[href*="#"]'));e.forEach(e=>{e.addEventListener("click",t=>{if("redirect"===e.className)return;let o;t.preventDefault(),o=document.querySelector(e.getAttribute("href")).getBoundingClientRect().top+window.pageYOffset;const r=setInterval(()=>{let e=o/50;e>window.pageYOffset-o&&window.innerHeight+window.pageYOffset<document.body.offsetHeight?window.scrollBy(0,e):(window.scrollTo(0,o),clearInterval(r))},8)})})};document.addEventListener("DOMContentLoaded",()=>{r(),n(),s(),u(),c(".main-slider"),c(".gallery-slider"),l(),a(),d("#callback_form-phone"),d("#callback_form1-phone"),d("#callback_form2-phone"),d("#callback_footer_form-phone"),d("#phone"),i('form[name="callback-form"]'),i('form[name="free-visit-form"]'),i('form[name="banner-form"]'),i("#card_order"),i("#footer_form")})}]);