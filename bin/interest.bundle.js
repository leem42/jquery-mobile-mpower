/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _mdcSelectMin = __webpack_require__(1);

var select = new _mdcSelectMin.MDCSelect(document.querySelector('#optionBoxOne'));

var selectTwo = new _mdcSelectMin.MDCSelect(document.querySelector('#optionBoxTwo'));

select.listen('MDCSelect:change', function () {

   console.log('Selected "' + select.selectedOptions[0].textContent + '" at index ' + select.selectedIndex + ' ' + ('with value "' + select.value + '"'));
});

document.getElementById("next").addEventListener('click', function (evt) {
   evt.preventDefault();

   if (select.index != 0) {
      console.log("clicked at 26");

      $("#optionBoxText").show();
      $("#optionBoxTwo").show();
   }
   // if($("#select-choice-1").val() == "hasParkinsons" && $("#select-choice-2").val() == "willHelp") {
   //     window.location.href="html/elig.html";
   // }

});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 Material Components for the web
 Copyright (c) 2017 Google Inc.
 License: Apache-2.0
*/
!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.select=t():(e.mdc=e.mdc||{},e.mdc.select=t())}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/assets/",t(t.s=70)}({0:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};r(this,e),this.adapter_=t}return i(e,null,[{key:"cssClasses",get:function(){return{}}},{key:"strings",get:function(){return{}}},{key:"numbers",get:function(){return{}}},{key:"defaultAdapter",get:function(){return{}}}]),i(e,[{key:"init",value:function(){}},{key:"destroy",value:function(){}}]),e}();t.a=o},1:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=n(0),o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;r(this,e),this.root_=t;for(var i=arguments.length,o=Array(i>2?i-2:0),a=2;a<i;a++)o[a-2]=arguments[a];this.initialize.apply(this,o),this.foundation_=void 0===n?this.getDefaultFoundation():n,this.foundation_.init(),this.initialSyncWithDOM()}return o(e,null,[{key:"attachTo",value:function(t){return new e(t,new i.a)}}]),o(e,[{key:"initialize",value:function(){}},{key:"getDefaultFoundation",value:function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")}},{key:"initialSyncWithDOM",value:function(){}},{key:"destroy",value:function(){this.foundation_.destroy()}},{key:"listen",value:function(e,t){this.root_.addEventListener(e,t)}},{key:"unlisten",value:function(e,t){this.root_.removeEventListener(e,t)}},{key:"emit",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=void 0;"function"==typeof CustomEvent?r=new CustomEvent(e,{detail:t,bubbles:n}):(r=document.createEvent("CustomEvent"),r.initCustomEvent(e,n,!1,t)),this.root_.dispatchEvent(r)}}]),e}();t.a=a},11:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(9),i=n(13);n.d(t,"MDCSimpleMenu",function(){return i.a}),n.d(t,"MDCSimpleMenuFoundation",function(){return i.b}),n.d(t,"util",function(){return r})},13:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n.d(t,"a",function(){return l});var a=n(1),s=n(14),u=n(9);n.d(t,"b",function(){return s.a});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=function(e){function t(){var e;r(this,t);for(var n=arguments.length,o=Array(n),a=0;a<n;a++)o[a]=arguments[a];var s=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o)));return s.previousFocus_,s}return o(t,e),c(t,[{key:"show",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.focusIndex,n=void 0===t?null:t;this.foundation_.open({focusIndex:n})}},{key:"hide",value:function(){this.foundation_.close()}},{key:"getDefaultFoundation",value:function(){var e=this;return new s.a({addClass:function(t){return e.root_.classList.add(t)},removeClass:function(t){return e.root_.classList.remove(t)},hasClass:function(t){return e.root_.classList.contains(t)},hasNecessaryDom:function(){return Boolean(e.itemsContainer_)},getAttributeForEventTarget:function(e,t){return e.getAttribute(t)},getInnerDimensions:function(){var t=e.itemsContainer_;return{width:t.offsetWidth,height:t.offsetHeight}},hasAnchor:function(){return e.root_.parentElement&&e.root_.parentElement.classList.contains("mdc-menu-anchor")},getAnchorDimensions:function(){return e.root_.parentElement.getBoundingClientRect()},getWindowDimensions:function(){return{width:window.innerWidth,height:window.innerHeight}},setScale:function(t,n){e.root_.style[u.getTransformPropertyName(window)]="scale("+t+", "+n+")"},setInnerScale:function(t,n){e.itemsContainer_.style[u.getTransformPropertyName(window)]="scale("+t+", "+n+")"},getNumberOfItems:function(){return e.items.length},registerInteractionHandler:function(t,n){return e.root_.addEventListener(t,n)},deregisterInteractionHandler:function(t,n){return e.root_.removeEventListener(t,n)},registerBodyClickHandler:function(e){return document.body.addEventListener("click",e)},deregisterBodyClickHandler:function(e){return document.body.removeEventListener("click",e)},getYParamsForItemAtIndex:function(t){var n=e.items[t];return{top:n.offsetTop,height:n.offsetHeight}},setTransitionDelayForItemAtIndex:function(t,n){return e.items[t].style.setProperty("transition-delay",n)},getIndexForEventTarget:function(t){return e.items.indexOf(t)},notifySelected:function(t){return e.emit(s.a.strings.SELECTED_EVENT,{index:t.index,item:e.items[t.index]})},notifyCancel:function(){return e.emit(s.a.strings.CANCEL_EVENT,{})},saveFocus:function(){e.previousFocus_=document.activeElement},restoreFocus:function(){e.previousFocus_&&e.previousFocus_.focus()},isFocused:function(){return document.activeElement===e.root_},focus:function(){return e.root_.focus()},getFocusedItemIndex:function(){return e.items.indexOf(document.activeElement)},focusItemAtIndex:function(t){return e.items[t].focus()},isRtl:function(){return"rtl"===getComputedStyle(e.root_).getPropertyValue("direction")},setTransformOrigin:function(t){e.root_.style[u.getTransformPropertyName(window)+"-origin"]=t},setPosition:function(t){e.root_.style.left="left"in t?t.left:null,e.root_.style.right="right"in t?t.right:null,e.root_.style.top="top"in t?t.top:null,e.root_.style.bottom="bottom"in t?t.bottom:null},getAccurateTime:function(){return window.performance.now()}})}},{key:"open",get:function(){return this.foundation_.isOpen()},set:function(e){e?this.foundation_.open():this.foundation_.close()}},{key:"itemsContainer_",get:function(){return this.root_.querySelector(s.a.strings.ITEMS_SELECTOR)}},{key:"items",get:function(){var e=this.itemsContainer_;return[].slice.call(e.querySelectorAll(".mdc-list-item[role]"))}}],[{key:"attachTo",value:function(e){return new t(e)}}]),t}(a.a)},14:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=n(0),u=(n(15),n(16)),c=n(9),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=function(e){function t(e){i(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,l(t.defaultAdapter,e)));return n.clickHandler_=function(e){return n.handlePossibleSelected_(e)},n.keydownHandler_=function(e){return n.handleKeyboardDown_(e)},n.keyupHandler_=function(e){return n.handleKeyboardUp_(e)},n.documentClickHandler_=function(e){n.adapter_.notifyCancel(),n.close(e)},n.isOpen_=!1,n.startScaleX_=0,n.startScaleY_=0,n.targetScale_=1,n.scaleX_=0,n.scaleY_=0,n.running_=!1,n.selectedTriggerTimerId_=0,n.animationRequestId_=0,n.dimensions_,n.startTime_,n.itemHeight_,n}return a(t,e),d(t,null,[{key:"cssClasses",get:function(){return u.a}},{key:"strings",get:function(){return u.c}},{key:"numbers",get:function(){return u.b}},{key:"defaultAdapter",get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},hasNecessaryDom:function(){return!1},getAttributeForEventTarget:function(){},getInnerDimensions:function(){return{}},hasAnchor:function(){return!1},getAnchorDimensions:function(){return{}},getWindowDimensions:function(){return{}},setScale:function(){},setInnerScale:function(){},getNumberOfItems:function(){return 0},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){},registerBodyClickHandler:function(){},deregisterBodyClickHandler:function(){},getYParamsForItemAtIndex:function(){return{}},setTransitionDelayForItemAtIndex:function(){},getIndexForEventTarget:function(){return 0},notifySelected:function(){},notifyCancel:function(){},saveFocus:function(){},restoreFocus:function(){},isFocused:function(){return!1},focus:function(){},getFocusedItemIndex:function(){return-1},focusItemAtIndex:function(){},isRtl:function(){return!1},setTransformOrigin:function(){},setPosition:function(){},getAccurateTime:function(){return 0}}}}]),d(t,[{key:"init",value:function(){var e=t.cssClasses,n=e.ROOT,r=e.OPEN;if(!this.adapter_.hasClass(n))throw new Error(n+" class required in root element.");if(!this.adapter_.hasNecessaryDom())throw new Error("Required DOM nodes missing in "+n+" component.");this.adapter_.hasClass(r)&&(this.isOpen_=!0),this.adapter_.registerInteractionHandler("click",this.clickHandler_),this.adapter_.registerInteractionHandler("keyup",this.keyupHandler_),this.adapter_.registerInteractionHandler("keydown",this.keydownHandler_)}},{key:"destroy",value:function(){clearTimeout(this.selectedTriggerTimerId_),cancelAnimationFrame(this.animationRequestId_),this.adapter_.deregisterInteractionHandler("click",this.clickHandler_),this.adapter_.deregisterInteractionHandler("keyup",this.keyupHandler_),this.adapter_.deregisterInteractionHandler("keydown",this.keydownHandler_),this.adapter_.deregisterBodyClickHandler(this.documentClickHandler_)}},{key:"applyTransitionDelays_",value:function(){for(var e=t.cssClasses,n=e.BOTTOM_LEFT,r=e.BOTTOM_RIGHT,i=this.adapter_.getNumberOfItems(),o=this.dimensions_.height,a=t.numbers.TRANSITION_DURATION_MS/1e3,s=t.numbers.TRANSITION_SCALE_ADJUSTMENT_Y,u=0;u<i;u++){var c=this.adapter_.getYParamsForItemAtIndex(u),l=c.top,d=c.height;this.itemHeight_=d;var f=l/o;(this.adapter_.hasClass(n)||this.adapter_.hasClass(r))&&(f=(o-l-d)/o);var p=(s+f*(1-s))*a;this.adapter_.setTransitionDelayForItemAtIndex(u,p.toFixed(3)+"s")}}},{key:"removeTransitionDelays_",value:function(){for(var e=this.adapter_.getNumberOfItems(),t=0;t<e;t++)this.adapter_.setTransitionDelayForItemAtIndex(t,null)}},{key:"animationLoop_",value:function(){var e=this,n=this.adapter_.getAccurateTime(),r=t.numbers,i=r.TRANSITION_DURATION_MS,o=r.TRANSITION_X1,a=r.TRANSITION_Y1,s=r.TRANSITION_X2,u=r.TRANSITION_Y2,l=r.TRANSITION_SCALE_ADJUSTMENT_X,d=r.TRANSITION_SCALE_ADJUSTMENT_Y,f=c.clamp((n-this.startTime_)/i),p=c.clamp((f-l)/(1-l)),_=f,h=this.startScaleY_;1===this.targetScale_&&(this.itemHeight_&&(h=Math.max(this.itemHeight_/this.dimensions_.height,h)),p=c.clamp(f+l),_=c.clamp((f-d)/(1-d)));var y=c.bezierProgress(p,o,a,s,u),m=c.bezierProgress(_,o,a,s,u);this.scaleX_=this.startScaleX_+(this.targetScale_-this.startScaleX_)*y;var g=1/(0===this.scaleX_?1:this.scaleX_);this.scaleY_=h+(this.targetScale_-h)*m;var v=1/(0===this.scaleY_?1:this.scaleY_);this.adapter_.setScale(this.scaleX_,this.scaleY_),this.adapter_.setInnerScale(g,v),f<1?this.animationRequestId_=requestAnimationFrame(function(){return e.animationLoop_()}):(this.animationRequestId_=0,this.running_=!1,this.adapter_.removeClass(t.cssClasses.ANIMATING))}},{key:"animateMenu_",value:function(){var e=this;this.startTime_=this.adapter_.getAccurateTime(),this.startScaleX_=this.scaleX_,this.startScaleY_=this.scaleY_,this.targetScale_=this.isOpen_?1:0,this.running_||(this.running_=!0,this.animationRequestId_=requestAnimationFrame(function(){return e.animationLoop_()}))}},{key:"focusOnOpen_",value:function(e){null===e?(this.adapter_.focus(),this.adapter_.isFocused()||this.adapter_.focusItemAtIndex(0)):this.adapter_.focusItemAtIndex(e)}},{key:"handleKeyboardDown_",value:function(e){if(e.altKey||e.ctrlKey||e.metaKey)return!0;var t=e.keyCode,n=e.key,r=e.shiftKey,i="Tab"===n||9===t,o="ArrowUp"===n||38===t,a="ArrowDown"===n||40===t,s="Space"===n||32===t,u=this.adapter_.getFocusedItemIndex(),c=this.adapter_.getNumberOfItems()-1;return r&&i&&0===u?(this.adapter_.focusItemAtIndex(c),e.preventDefault(),!1):!r&&i&&u===c?(this.adapter_.focusItemAtIndex(0),e.preventDefault(),!1):((o||a||s)&&e.preventDefault(),o?0===u||this.adapter_.isFocused()?this.adapter_.focusItemAtIndex(c):this.adapter_.focusItemAtIndex(u-1):a&&(u===c||this.adapter_.isFocused()?this.adapter_.focusItemAtIndex(0):this.adapter_.focusItemAtIndex(u+1)),!0)}},{key:"handleKeyboardUp_",value:function(e){if(e.altKey||e.ctrlKey||e.metaKey)return!0;var t=e.keyCode,n=e.key,r="Enter"===n||13===t,i="Space"===n||32===t,o="Escape"===n||27===t;return(r||i)&&this.handlePossibleSelected_(e),o&&(this.adapter_.notifyCancel(),this.close()),!0}},{key:"handlePossibleSelected_",value:function(e){var t=this;if("true"!==this.adapter_.getAttributeForEventTarget(e.target,u.c.ARIA_DISABLED_ATTR)){var n=this.adapter_.getIndexForEventTarget(e.target);n<0||this.selectedTriggerTimerId_||(this.selectedTriggerTimerId_=setTimeout(function(){t.selectedTriggerTimerId_=0,t.close(),t.adapter_.notifySelected({index:n})},u.b.SELECTED_TRIGGER_DELAY))}}},{key:"autoPosition_",value:function(){var e;if(this.adapter_.hasAnchor()){var t="top",n="left",i=this.adapter_.getAnchorDimensions(),o=this.adapter_.getWindowDimensions(),a=i.top+this.dimensions_.height-o.height,s=this.dimensions_.height-i.bottom;a>0&&s<a&&(t="bottom");var u=i.left+this.dimensions_.width-o.width,c=this.dimensions_.width-i.right,l=u>0,d=c>0;this.adapter_.isRtl()?(n="right",d&&u<c&&(n="left")):l&&c<u&&(n="right");var f=(e={},r(e,n,"0"),r(e,t,"0"),e);this.adapter_.setTransformOrigin(t+" "+n),this.adapter_.setPosition(f)}}},{key:"open",value:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=n.focusIndex,i=void 0===r?null:r;this.adapter_.saveFocus(),this.adapter_.addClass(t.cssClasses.ANIMATING),this.animationRequestId_=requestAnimationFrame(function(){e.dimensions_=e.adapter_.getInnerDimensions(),e.applyTransitionDelays_(),e.autoPosition_(),e.animateMenu_(),e.adapter_.addClass(t.cssClasses.OPEN),e.focusOnOpen_(i),e.adapter_.registerBodyClickHandler(e.documentClickHandler_)}),this.isOpen_=!0}},{key:"close",value:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;!!n&&"true"===this.adapter_.getAttributeForEventTarget(n.target,u.c.ARIA_DISABLED_ATTR)||(this.adapter_.deregisterBodyClickHandler(this.documentClickHandler_),this.adapter_.addClass(t.cssClasses.ANIMATING),requestAnimationFrame(function(){e.removeTransitionDelays_(),e.animateMenu_(),e.adapter_.removeClass(t.cssClasses.OPEN)}),this.isOpen_=!1,this.adapter_.restoreFocus())}},{key:"isOpen",value:function(){return this.isOpen_}}]),t}(s.a);t.a=f},15:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();!function(){function e(){r(this,e)}i(e,[{key:"addClass",value:function(e){}},{key:"removeClass",value:function(e){}},{key:"hasClass",value:function(e){}},{key:"hasNecessaryDom",value:function(){}},{key:"getAttributeForEventTarget",value:function(e,t){}},{key:"getInnerDimensions",value:function(){}},{key:"hasAnchor",value:function(){}},{key:"getAnchorDimensions",value:function(){}},{key:"getWindowDimensions",value:function(){}},{key:"setScale",value:function(e,t){}},{key:"setInnerScale",value:function(e,t){}},{key:"getNumberOfItems",value:function(){}},{key:"registerInteractionHandler",value:function(e,t){}},{key:"deregisterInteractionHandler",value:function(e,t){}},{key:"registerBodyClickHandler",value:function(e){}},{key:"deregisterBodyClickHandler",value:function(e){}},{key:"getYParamsForItemAtIndex",value:function(e){}},{key:"setTransitionDelayForItemAtIndex",value:function(e,t){}},{key:"getIndexForEventTarget",value:function(e){}},{key:"notifySelected",value:function(e){}},{key:"notifyCancel",value:function(){}},{key:"saveFocus",value:function(){}},{key:"restoreFocus",value:function(){}},{key:"isFocused",value:function(){}},{key:"focus",value:function(){}},{key:"getFocusedItemIndex",value:function(){}},{key:"focusItemAtIndex",value:function(e){}},{key:"isRtl",value:function(){}},{key:"setTransformOrigin",value:function(e){}},{key:"setPosition",value:function(e){}},{key:"getAccurateTime",value:function(){}}])}()},16:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"c",function(){return i}),n.d(t,"b",function(){return o});var r={ROOT:"mdc-simple-menu",OPEN:"mdc-simple-menu--open",ANIMATING:"mdc-simple-menu--animating",TOP_RIGHT:"mdc-simple-menu--open-from-top-right",BOTTOM_LEFT:"mdc-simple-menu--open-from-bottom-left",BOTTOM_RIGHT:"mdc-simple-menu--open-from-bottom-right"},i={ITEMS_SELECTOR:".mdc-simple-menu__items",SELECTED_EVENT:"MDCSimpleMenu:selected",CANCEL_EVENT:"MDCSimpleMenu:cancel",ARIA_DISABLED_ATTR:"aria-disabled"},o={SELECTED_TRIGGER_DELAY:50,TRANSITION_DURATION_MS:300,TRANSITION_SCALE_ADJUSTMENT_X:.5,TRANSITION_SCALE_ADJUSTMENT_Y:.2,TRANSITION_X1:0,TRANSITION_Y1:0,TRANSITION_X2:.2,TRANSITION_Y2:1}},2:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=n(1);n.d(t,"MDCFoundation",function(){return r.a}),n.d(t,"MDCComponent",function(){return i.a})},70:function(e,t,n){e.exports=n(71)},71:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"MDCSelect",function(){return l});var a=n(2),s=n(11),u=n(72);n.d(t,"MDCSelectFoundation",function(){return u.a});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=function(e){function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),c(t,[{key:"item",value:function(e){return this.options[e]||null}},{key:"nameditem",value:function(e){for(var t,n=0,r=this.options;t=r[n];n++)if(t.id===e||t.getAttribute("name")===e)return t;return null}},{key:"initialize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return new s.MDCSimpleMenu(e)};this.menuEl_=this.root_.querySelector(".mdc-select__menu"),this.menu_=e(this.menuEl_),this.selectedText_=this.root_.querySelector(".mdc-select__selected-text")}},{key:"getDefaultFoundation",value:function(){var e=this;return new u.a({addClass:function(t){return e.root_.classList.add(t)},removeClass:function(t){return e.root_.classList.remove(t)},setAttr:function(t,n){return e.root_.setAttribute(t,n)},rmAttr:function(t,n){return e.root_.removeAttribute(t,n)},computeBoundingRect:function(){return e.root_.getBoundingClientRect()},registerInteractionHandler:function(t,n){return e.root_.addEventListener(t,n)},deregisterInteractionHandler:function(t,n){return e.root_.removeEventListener(t,n)},focus:function(){return e.root_.focus()},makeTabbable:function(){e.root_.tabIndex=0},makeUntabbable:function(){e.root_.tabIndex=-1},getComputedStyleValue:function(t){return window.getComputedStyle(e.root_).getPropertyValue(t)},setStyle:function(t,n){return e.root_.style.setProperty(t,n)},create2dRenderingContext:function(){return document.createElement("canvas").getContext("2d")},setMenuElStyle:function(t,n){return e.menuEl_.style.setProperty(t,n)},setMenuElAttr:function(t,n){return e.menuEl_.setAttribute(t,n)},rmMenuElAttr:function(t){return e.menuEl_.removeAttribute(t)},getMenuElOffsetHeight:function(){return e.menuEl_.offsetHeight},openMenu:function(t){return e.menu_.show({focusIndex:t})},isMenuOpen:function(){return e.menu_.open},setSelectedTextContent:function(t){e.selectedText_.textContent=t},getNumberOfOptions:function(){return e.options.length},getTextForOptionAtIndex:function(t){return e.options[t].textContent},getValueForOptionAtIndex:function(t){return e.options[t].id||e.options[t].textContent},setAttrForOptionAtIndex:function(t,n,r){return e.options[t].setAttribute(n,r)},rmAttrForOptionAtIndex:function(t,n){return e.options[t].removeAttribute(n)},getOffsetTopForOptionAtIndex:function(t){return e.options[t].offsetTop},registerMenuInteractionHandler:function(t,n){return e.menu_.listen(t,n)},deregisterMenuInteractionHandler:function(t,n){return e.menu_.unlisten(t,n)},notifyChange:function(){return e.emit(u.a.strings.CHANGE_EVENT,e)},getWindowInnerHeight:function(){return window.innerHeight}})}},{key:"initialSyncWithDOM",value:function(){var e=this.selectedOptions[0],t=e?this.options.indexOf(e):-1;t>=0&&(this.selectedIndex=t),"true"===this.root_.getAttribute("aria-disabled")&&(this.disabled=!0)}},{key:"value",get:function(){return this.foundation_.getValue()}},{key:"options",get:function(){return this.menu_.items}},{key:"selectedOptions",get:function(){return this.root_.querySelectorAll("[aria-selected]")}},{key:"selectedIndex",get:function(){return this.foundation_.getSelectedIndex()},set:function(e){this.foundation_.setSelectedIndex(e)}},{key:"disabled",get:function(){return this.foundation_.isDisabled()},set:function(e){this.foundation_.setDisabled(e)}}],[{key:"attachTo",value:function(e){return new t(e)}}]),t}(a.MDCComponent)},72:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(2),s=n(73),u=n(11),c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),d=[{key:"ArrowUp",keyCode:38,forType:"keydown"},{key:"ArrowDown",keyCode:40,forType:"keydown"},{key:"Space",keyCode:32,forType:"keyup"}],f=function(e){function t(e){r(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,c(t.defaultAdapter,e)));return n.ctx_=null,n.selectedIndex_=-1,n.disabled_=!1,n.displayHandler_=function(e){e.preventDefault(),n.adapter_.isMenuOpen()||n.open_()},n.displayViaKeyboardHandler_=function(e){return n.handleDisplayViaKeyboard_(e)},n.selectionHandler_=function(e){var t=e.detail,r=t.index;n.close_(),r!==n.selectedIndex_&&(n.setSelectedIndex(r),n.adapter_.notifyChange())},n.cancelHandler_=function(){n.close_()},n}return o(t,e),l(t,null,[{key:"cssClasses",get:function(){return s.a}},{key:"strings",get:function(){return s.b}},{key:"defaultAdapter",get:function(){return{addClass:function(){},removeClass:function(){},setAttr:function(){},rmAttr:function(){},computeBoundingRect:function(){return{left:0,top:0}},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){},focus:function(){},makeTabbable:function(){},makeUntabbable:function(){},getComputedStyleValue:function(){return""},setStyle:function(){},create2dRenderingContext:function(){return{font:"",measureText:function(){return{width:0}}}},setMenuElStyle:function(){},setMenuElAttr:function(){},rmMenuElAttr:function(){},getMenuElOffsetHeight:function(){return 0},openMenu:function(){},isMenuOpen:function(){return!1},setSelectedTextContent:function(){},getNumberOfOptions:function(){return 0},getTextForOptionAtIndex:function(){return""},getValueForOptionAtIndex:function(){return""},setAttrForOptionAtIndex:function(){},rmAttrForOptionAtIndex:function(){},getOffsetTopForOptionAtIndex:function(){return 0},registerMenuInteractionHandler:function(){},deregisterMenuInteractionHandler:function(){},notifyChange:function(){},getWindowInnerHeight:function(){return 0}}}}]),l(t,[{key:"init",value:function(){this.ctx_=this.adapter_.create2dRenderingContext(),this.adapter_.registerInteractionHandler("click",this.displayHandler_),this.adapter_.registerInteractionHandler("keydown",this.displayViaKeyboardHandler_),this.adapter_.registerInteractionHandler("keyup",this.displayViaKeyboardHandler_),this.adapter_.registerMenuInteractionHandler(u.MDCSimpleMenuFoundation.strings.SELECTED_EVENT,this.selectionHandler_),this.adapter_.registerMenuInteractionHandler(u.MDCSimpleMenuFoundation.strings.CANCEL_EVENT,this.cancelHandler_),this.resize()}},{key:"destroy",value:function(){this.ctx_=null,this.adapter_.deregisterInteractionHandler("click",this.displayHandler_),this.adapter_.deregisterInteractionHandler("keydown",this.displayViaKeyboardHandler_),this.adapter_.deregisterInteractionHandler("keyup",this.displayViaKeyboardHandler_),this.adapter_.deregisterMenuInteractionHandler(u.MDCSimpleMenuFoundation.strings.SELECTED_EVENT,this.selectionHandler_),this.adapter_.deregisterMenuInteractionHandler(u.MDCSimpleMenuFoundation.strings.CANCEL_EVENT,this.cancelHandler_)}},{key:"getValue",value:function(){return this.selectedIndex_>=0?this.adapter_.getValueForOptionAtIndex(this.selectedIndex_):""}},{key:"getSelectedIndex",value:function(){return this.selectedIndex_}},{key:"setSelectedIndex",value:function(e){this.selectedIndex_>=0&&this.adapter_.rmAttrForOptionAtIndex(this.selectedIndex_,"aria-selected"),this.selectedIndex_=e>=0&&e<this.adapter_.getNumberOfOptions()?e:-1;var t="";this.selectedIndex_>=0&&(t=this.adapter_.getTextForOptionAtIndex(this.selectedIndex_).trim(),this.adapter_.setAttrForOptionAtIndex(this.selectedIndex_,"aria-selected","true")),this.adapter_.setSelectedTextContent(t)}},{key:"isDisabled",value:function(){return this.disabled_}},{key:"setDisabled",value:function(e){var n=t.cssClasses.DISABLED;this.disabled_=e,this.disabled_?(this.adapter_.addClass(n),this.adapter_.setAttr("aria-disabled","true"),this.adapter_.makeUntabbable()):(this.adapter_.removeClass(n),this.adapter_.rmAttr("aria-disabled"),this.adapter_.makeTabbable())}},{key:"resize",value:function(){var e=this.adapter_.getComputedStyleValue("font"),t=parseFloat(this.adapter_.getComputedStyleValue("letter-spacing"));if(e)this.ctx_.font=e;else{var n=this.adapter_.getComputedStyleValue("font-family").split(",")[0],r=this.adapter_.getComputedStyleValue("font-size");this.ctx_.font=r+" "+n}for(var i=0,o=0,a=this.adapter_.getNumberOfOptions();o<a;o++){var s=this.adapter_.getTextForOptionAtIndex(o).trim(),u=this.ctx_.measureText(s),c=u.width,l=t*s.length;i=Math.max(i,Math.ceil(c+l))}this.adapter_.setStyle("width",i+"px")}},{key:"open_",value:function(){var e=t.cssClasses.OPEN,n=this.selectedIndex_<0?0:this.selectedIndex_,r=this.computeMenuStylesForOpenAtIndex_(n),i=r.left,o=r.top,a=r.transformOrigin;this.adapter_.setMenuElStyle("left",i),this.adapter_.setMenuElStyle("top",o),this.adapter_.setMenuElStyle("transform-origin",a),this.adapter_.addClass(e),this.adapter_.openMenu(n)}},{key:"computeMenuStylesForOpenAtIndex_",value:function(e){var t=this.adapter_.getWindowInnerHeight(),n=this.adapter_.computeBoundingRect(),r=n.left,i=n.top;this.adapter_.setMenuElAttr("aria-hidden","true"),this.adapter_.setMenuElStyle("display","block");var o=this.adapter_.getMenuElOffsetHeight(),a=this.adapter_.getOffsetTopForOptionAtIndex(e);this.adapter_.setMenuElStyle("display",""),this.adapter_.rmMenuElAttr("aria-hidden");var s=i-a,u=o-a,c=s<0,l=s+u>t;return c?s=0:l&&(s=Math.max(0,s-u)),{left:r+"px",top:s+"px",transformOrigin:"center "+a+"px"}}},{key:"close_",value:function(){var e=t.cssClasses.OPEN;this.adapter_.removeClass(e),this.adapter_.focus()}},{key:"handleDisplayViaKeyboard_",value:function(e){if(2===e.eventPhase){"keydown"===e.type&&("Space"===e.key||32===e.keyCode)&&e.preventDefault();d.some(function(t){var n=t.key,r=t.keyCode,i=t.forType;return e.type===i&&(e.key===n||e.keyCode===r)})&&this.displayHandler_(e)}}}]),t}(a.MDCFoundation);t.a=f},73:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return i});var r={ROOT:"mdc-select",OPEN:"mdc-select--open",DISABLED:"mdc-select--disabled"},i={CHANGE_EVENT:"MDCSelect:change"}},9:function(e,t,n){"use strict";function r(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(void 0===u||t){var n=e.document.createElement("div"),r="transform"in n.style?"transform":"webkitTransform";u=r}return u}function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return Math.min(n,Math.max(t,e))}function o(e,t,n,r,i){return a(s(e,t,r),n,i)}function a(e,t,n){if(0===e||1===e)return e;var r=e*t,i=t+e*(n-t),o=n+e*(1-n);return r+=e*(i-r),i+=e*(o-i),r+e*(i-r)}function s(e,t,n){if(e<=0)return 0;if(e>=1)return 1;for(var r=e,i=0,o=1,s=0,u=0;u<8;u++){s=a(r,t,n);var c=(a(r+1e-6,t,n)-s)/1e-6;if(Math.abs(s-e)<1e-6)return r;if(Math.abs(c)<1e-6)break;s<e?i=r:o=r,r-=(s-e)/c}for(var l=0;Math.abs(s-e)>1e-6&&l<8;l++)s<e?(i=r,r=(r+o)/2):(o=r,r=(r+i)/2),s=a(r,t,n);return r}Object.defineProperty(t,"__esModule",{value:!0}),t.getTransformPropertyName=r,t.clamp=i,t.bezierProgress=o;var u=void 0}})});

/***/ })
/******/ ]);