(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"0HMw":function(e,t,n){},QfWi:function(e,t,n){"use strict";n.r(t);n("0HMw");var o={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function r(){window.removeEventListener("keydown",s),o.modal.removeEventListener("click",a),o.modal.classList.add("is-hidden")}function a(e){e.currentTarget===e.target&&r()}function s(e){"Escape"===e.code&&r()}o.openModalBtn.addEventListener("click",(function(){window.addEventListener("keydown",s),o.modal.addEventListener("click",a),o.modal.classList.remove("is-hidden")})),o.closeModalBtn.addEventListener("click",r);n("JBxO"),n("FdtR"),n("wcNg");var i=n("QJ3N");n("JauC"),n("bzha");function c(e,t,n){void 0===e&&(e="Something went wrong"),void 0===t&&(t=""),void 0===n&&(n=3e3);var o={text:e,type:t,delay:n};Object(i.alert)(o)}function d(e,t,n,o,r,a,s){try{var i=e[a](s),c=i.value}catch(e){return void n(e)}i.done?t(c):Promise.resolve(c).then(o,r)}function l(e){return function(){var t=this,n=arguments;return new Promise((function(o,r){var a=e.apply(t,n);function s(e){d(a,o,r,s,i,"next",e)}function i(e){d(a,o,r,s,i,"throw",e)}s(void 0)}))}}function u(){return(u=l(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)},e.prev=1,e.next=4,fetch("https://callboard-backend.herokuapp.com/auth/login",n).then((function(e){return e.json()})).then((function(e){if("Password is wrong"===e.message)c(e.message);else if(e.message==="User with "+JSON.parse(n.body).email+" email doesn't exist")c(e.message);else if('"email" is not allowed to be empty'===e.message)c(e.message);else{if('"password" is not allowed to be empty'!==e.message)return sessionStorage.setItem("token",e.accessToken),sessionStorage.setItem("sid",e.sid),sessionStorage.setItem("refresh",e.refreshToken),e.user;c(e.message)}}));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.log("error",e.t0);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})))).apply(this,arguments)}function m(e,t,n,o,r,a,s){try{var i=e[a](s),c=i.value}catch(e){return void n(e)}i.done?t(c):Promise.resolve(c).then(o,r)}function f(e){return function(){var t=this,n=arguments;return new Promise((function(o,r){var a=e.apply(t,n);function s(e){m(a,o,r,s,i,"next",e)}function i(e){m(a,o,r,s,i,"throw",e)}s(void 0)}))}}function p(){return(p=f(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)};try{fetch("https://callboard-backend.herokuapp.com/auth/register",n).then((function(e){return e.json()})).then((function(e){e.message==="User with "+JSON.parse(n.body).email+" email already exists"||'"email" is not allowed to be empty'===e.message||'"password" is not allowed to be empty'===e.message?c(e.message):(console.log(e),alert({title:"Pеєстрація пройшла успішно, натисніть кнопку 'Увійти'",delay:200}))}))}catch(e){console.log("error",e)}case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}i.defaults.styling="material";n("RtS0"),n("3dw1");document.querySelector(".auth-form").addEventListener("click",(function(e){e.preventDefault();var t=e.currentTarget,n=new FormData(t),o={};n.forEach((function(e,t){o[t]=e})),e.target.classList.contains("js-btn-registr")?function(e){p.apply(this,arguments)}(o):e.target.classList.contains("js-btn-login")&&function(e){u.apply(this,arguments)}(o)}))}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.c7d52d2d1f126b982857.js.map