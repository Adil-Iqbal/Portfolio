/*!
 * 
 * 
 * Adil Iqbal - Web Developer
 * @license GPLv3 for open source use only.
 * Copyright (c) 2019 Adil Iqbal.
 * 
 * This page has been compressed and processed via Webpack. 
 * For full and uncompressed source code, please visit:
 * https://github.com/Adil-Iqbal/Portfolio/tree/master/src
 * 
 * 
 */!function(r){var n={};function e(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return r[t].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=r,e.c=n,e.d=function(r,n,t){e.o(r,n)||Object.defineProperty(r,n,{enumerable:!0,get:t})},e.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},e.t=function(r,n){if(1&n&&(r=e(r)),8&n)return r;if(4&n&&"object"==typeof r&&r&&r.__esModule)return r;var t=Object.create(null);if(e.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:r}),2&n&&"string"!=typeof r)for(var o in r)e.d(t,o,function(n){return r[n]}.bind(null,o));return t},e.n=function(r){var n=r&&r.__esModule?function(){return r.default}:function(){return r};return e.d(n,"a",n),n},e.o=function(r,n){return Object.prototype.hasOwnProperty.call(r,n)},e.p="/dist",e(e.s=2)}([function(r,n,e){},function(r,n,e){r.exports=e.p+"index.html"},function(r,n,e){"use strict";e.r(n);e(0),e(1);let t=!1,o=!1;function a(){t=$(window).width()<500}function s(){t?($("nav").removeClass("nav-Ready"),o&&c()):setTimeout(()=>{$("nav").addClass("nav-Ready")},1500)}function c(){$("#nav-Toggle").html('<i class="fas fa-bars nav-Toggle"></i>'),$("nav").removeClass("nav-Ready"),$("#nav-Overlay").css("display","none"),o=!1}function l(){a(),s(),$(window).on("resize",()=>{a(),s()}),$(document).on("click",r=>{if(void 0===r)return;let n,e,a=r.target;a.className instanceof SVGAnimatedString?(n=a.parentElement.id,e=a.parentElement.className.baseVal.split(" ")):(n=a.id,e=a.className.split(" ")),t&&("nav-Toggle"===n||e.includes("nav-Toggle"))&&(o?c():($("#nav-Toggle").html('<i class="fas fa-times nav-Toggle"></i>'),$("nav").addClass("nav-Ready"),$("#nav-Overlay").css("display","block"),o=!0))})}$(document).ready(function(){navigator.userAgent.match(/(android|iphone)/gi)&&screen.orientation.lock("portrait-primary"),l(),$("#fullpage").fullpage({licenseKey:"OPEN-SOURCE-GPLV3-LICENSE",controlArrows:!0,anchors:["resume","about","soft","portfolio","contact"],scrollOverflow:!0,onLeave:function(r,n,e){o&&c(),$(".nav-Link").removeClass("nav-Active"),3===n&&($(".fp-controlArrow.fp-prev").css("border-color","transparent #c5c1c0 transparent transparent"),$(".fp-controlArrow.fp-next").css("border-color","transparent transparent transparent #c5c1c0")),4===n&&($(".fp-controlArrow.fp-prev").css("border-color","transparent #29414c transparent transparent"),$(".fp-controlArrow.fp-next").css("border-color","transparent transparent transparent #29414c"))},afterLoad:function(r,n,e){origin=n.anchor,$("."+origin).addClass("nav-Active"),"soft"===origin&&($(".fp-controlArrow.fp-prev").css("border-color","transparent #c5c1c0 transparent transparent"),$(".fp-controlArrow.fp-next").css("border-color","transparent transparent transparent #c5c1c0")),"portfolio"===origin&&($(".fp-controlArrow.fp-prev").css("border-color","transparent #29414c transparent transparent"),$(".fp-controlArrow.fp-next").css("border-color","transparent transparent transparent #29414c"))}})})}]);