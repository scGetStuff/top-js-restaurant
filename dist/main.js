/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_layout_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/layout.js */ \"./src/modules/layout.js\");\n\r\n\r\n\r\n\r\nconst tabContent = (0,_modules_layout_js__WEBPACK_IMPORTED_MODULE_0__.loadLayout)();\r\n\r\nconst buttons = document.querySelectorAll('.tab-button');\r\nbuttons.forEach(button => {\r\n    button.addEventListener('click', showTabEvent);\r\n});\r\n\r\nfunction showTabEvent(e) {\r\n    showTab(e.target.innerText)\r\n}\r\n\r\nfunction showTab(value) {\r\n    tabContent.innerText = value;\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/modules/layout.js":
/*!*******************************!*\
  !*** ./src/modules/layout.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createElement\": () => (/* binding */ createElement),\n/* harmony export */   \"loadLayout\": () => (/* binding */ loadLayout)\n/* harmony export */ });\n\r\n\r\nfunction XloadLayout() {\r\n    const element = document.createElement('div');\r\n\r\n    element.innerText = 'test';\r\n    document.body.appendChild(element);\r\n}\r\n\r\nfunction loadLayout() {\r\n    const content = document.querySelector('#content');\r\n    const scrollContainer = createElement('div');\r\n    const main = createElement('main');\r\n    const tabContent = createElement('div', 'test');\r\n\r\n    content.classList.add('content');\r\n    scrollContainer.classList.add('scroll');\r\n    tabContent.classList.add('tab-content');\r\n    content.appendChild(createHeader());\r\n    content.appendChild(scrollContainer);\r\n    scrollContainer.appendChild(main);\r\n    scrollContainer.appendChild(createElement('footer', 'footer'));\r\n    main.appendChild(tabContent);\r\n\r\n    return tabContent;\r\n}\r\n\r\nfunction createElement(tag, text = '') {\r\n    const element = document.createElement(tag);\r\n\r\n    if (text !== '')\r\n        element.innerText = text;\r\n\r\n    return element;\r\n}\r\n\r\n\r\nfunction createHeader() {\r\n    const header = createElement('header');\r\n\r\n    header.appendChild(createElement('h1', 'Restaurant Page'));\r\n    header.appendChild(createNav());\r\n\r\n    return header;\r\n}\r\n\r\nfunction createNav() {\r\n    const nav = createElement('nav');\r\n\r\n    nav.classList.add('tab-bar');\r\n    nav.appendChild(createTabButton('About'));\r\n    nav.appendChild(createTabButton('Menu'));\r\n    nav.appendChild(createTabButton('Contact'));\r\n\r\n    return nav;\r\n}\r\n\r\nfunction createTabButton(name) {\r\n    const button = document.createElement('button');\r\n\r\n    button.classList.add('tab-button');\r\n    button.type = 'button';\r\n    button.innerText = name;\r\n\r\n    return button;\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://restaurant/./src/modules/layout.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;