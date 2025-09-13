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

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _plugin_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../plugin.json */ \"./plugin.json\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* module decorator */ module = __webpack_require__.hmd(module);\nconst settings=acode.require(\"settings\");const{editor}=editorManager;/**\n * theme name Must not contain space and must be separated by (-)\n * e.g. vscode-dark\n * one-dark\n * monokai\n */ // only modify this name and nothing else\nconst themeName=\"calm-peppermint\";// go to style.scss and change colors there\nace.define(`ace/theme/${themeName}.css`,[\"require\",\"exports\",\"module\"],function(require,exports,module){module.exports=_style_scss__WEBPACK_IMPORTED_MODULE_1__[\"default\"];}),ace.define(`ace/theme/${themeName}`,[\"require\",\"exports\",\"module\",`ace/theme/${themeName}.css`,\"ace/lib/dom\"],function(require,exports,module){exports.isDark=!0,exports.cssClass=`ace-${themeName}`,exports.cssText=require(`./${themeName}.css`);const dom=require(\"../lib/dom\");dom.importCssString(exports.cssText,exports.cssClass,!1);});(function(){window.require([\"ace/theme/\"+themeName],function(m){if( true&&typeof exports==\"object\"&&module){module.exports=m;}});})();class AcodePlugin{async init(){ace.require(\"ace/ext/themelist\").themes.push({caption:themeName.split(\"-\").map(name=>name[0].toUpperCase()+name.slice(1)).join(\" \"),theme:\"ace/theme/\"+themeName,isDark:true});const currentTheme=settings.get(\"editorTheme\");if(currentTheme===themeName)editor.setTheme(\"ace/theme/\"+themeName);settings.on(\"update\",this.onThemeChange);}async destroy(){settings.off(\"update\",this.onThemeChange);}onThemeChange(value){if(value===\"ace/theme/\"+themeName){editor.setTheme(\"ace/theme/\"+themeName);settings.update({editorTheme:themeName});}}}if(window.acode){const acodePlugin=new AcodePlugin();acode.setPluginInit(_plugin_json__WEBPACK_IMPORTED_MODULE_0__.id,(baseUrl,$page,_ref)=>{let{cacheFileUrl,cacheFile}=_ref;if(!baseUrl.endsWith(\"/\")){baseUrl+=\"/\";}acodePlugin.baseUrl=baseUrl;acodePlugin.init($page,cacheFile,cacheFileUrl);});acode.setPluginUnmount(_plugin_json__WEBPACK_IMPORTED_MODULE_0__.id,()=>{acodePlugin.destroy();});}\n\n//# sourceURL=webpack://calm-peppermint_theme/./src/main.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\".ace-calm-peppermint {\\n  color: #ebf0f4;\\n  background-color: #0b0f12;\\n  /**\\n     * keywords\\n     * for example if else\\n     * ID in css\\n     */\\n  /**\\n    * Don't change indent guide\\n    */\\n}\\n.ace-calm-peppermint .ace_gutter {\\n  color: #707a82;\\n}\\n.ace-calm-peppermint .ace_gutter-active-line {\\n  color: #89959f;\\n}\\n.ace-calm-peppermint .ace_print-margin {\\n  width: 1px;\\n  background: #31393f;\\n}\\n.ace-calm-peppermint .ace_cursor {\\n  color: #ebf0f4;\\n}\\n.ace-calm-peppermint .ace_marker-layer .ace_selection {\\n  background: #304c61;\\n  border-radius: 0;\\n}\\n.ace-calm-peppermint .ace_multiselect .ace_selection.ace_start {\\n  box-shadow: 0 0 3px #07080a;\\n}\\n.ace-calm-peppermint .ace_marker-layer .ace_step {\\n  background: #ff0000;\\n}\\n.ace-calm-peppermint .ace_marker-layer .ace_bracket {\\n  margin: -1px 0 0 -1px;\\n  border: 1px solid #ebf0f4;\\n}\\n.ace-calm-peppermint .ace_marker-layer .ace_active-line {\\n  border: 1px solid rgba(48, 76, 97, 0.8);\\n  box-sizing: border-box;\\n}\\n.ace-calm-peppermint .ace_marker-layer .ace_selected-word {\\n  background-color: rgba(16, 203, 147, 0.3);\\n}\\n.ace-calm-peppermint .ace_invisible {\\n  color: #ff0000;\\n}\\n.ace-calm-peppermint .hljs-keyword,\\n.ace-calm-peppermint .ace_keyword {\\n  color: #73ffb0;\\n}\\n.ace-calm-peppermint .ace_keyword.ace_operator {\\n  color: #ffe873;\\n}\\n.ace-calm-peppermint .ace_constant.ace_language {\\n  color: #ebf0f4;\\n}\\n.ace-calm-peppermint .ace_constant.ace_numeric {\\n  color: #73ffb0;\\n}\\n.ace-calm-peppermint .ace_constant.ace_character {\\n  color: #ffa773;\\n}\\n.ace-calm-peppermint .ace_constant.ace_other {\\n  color: #ff73a2;\\n}\\n.ace-calm-peppermint .hljs-title,\\n.ace-calm-peppermint .ace_identifier {\\n  color: #73c5ff;\\n}\\n.ace-calm-peppermint .ace_support.ace_function {\\n  color: #c773ff;\\n}\\n.ace-calm-peppermint .ace_support.ace_constant {\\n  color: #ebf0f4;\\n}\\n.ace-calm-peppermint .ace_variable.ace_language {\\n  color: #ebf0f4;\\n}\\n.ace-calm-peppermint .ace_support.ace_type {\\n  color: #73c5ff;\\n}\\n.ace-calm-peppermint .ace_meta.ace_tag {\\n  color: #73ffb0;\\n}\\n.ace-calm-peppermint .ace_storage,\\n.ace-calm-peppermint .ace_storage.ace_type {\\n  color: #73ffb0;\\n}\\n.ace-calm-peppermint .ace_invalid {\\n  color: #ff0000;\\n  background-color: #ff0000;\\n}\\n.ace-calm-peppermint .ace_invalid.ace_deprecated {\\n  color: #ff0000;\\n  background-color: #ff0000;\\n}\\n.ace-calm-peppermint .ace_string {\\n  color: #ffa773;\\n}\\n.ace-calm-peppermint .ace_comment {\\n  color: #89959f;\\n}\\n.ace-calm-peppermint .ace_variable {\\n  color: #ebf0f4;\\n}\\n.ace-calm-peppermint .ace_constant {\\n  color: #ebf0f4;\\n}\\n.ace-calm-peppermint .hljs-params,\\n.ace-calm-peppermint .ace_variable.ace_parameter {\\n  color: #73ffb0;\\n}\\n.ace-calm-peppermint .ace_entity.ace_other.ace_attribute-name {\\n  color: #73c5ff;\\n}\\n.ace-calm-peppermint .ace_xml-pe.ace_xml,\\n.ace-calm-peppermint .ace_punctuation.ace_tag {\\n  color: #ccc;\\n}\\n.ace-calm-peppermint .ace_tag-name.ace_tag,\\n.ace-calm-peppermint .ace_entity.ace_name.ace_tag {\\n  color: #73c5ff;\\n}\\n.ace-calm-peppermint .ace_entity.ace_name.ace_function {\\n  color: #ff73a2;\\n}\\n.ace-calm-peppermint .ace_paren {\\n  color: #ebf0f4;\\n}\\n.ace-calm-peppermint .ace_indent-guide {\\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWPQ09NrYAgMjP4PAAtGAwchHMyAAAAAAElFTkSuQmCC) right repeat-y;\\n}\\n.ace-calm-peppermint .ace_indent-guide-active {\\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQIW2PQ1dX9zzBz5sz/ABCcBFFentLlAAAAAElFTkSuQmCC) right repeat-y;\\n}\");\n\n//# sourceURL=webpack://calm-peppermint_theme/./src/style.scss?");

/***/ }),

/***/ "./plugin.json":
/*!*********************!*\
  !*** ./plugin.json ***!
  \*********************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"id\":\"acode.plugin.calm-peppermint-theme\",\"name\":\"Calm Peppermint Theme\",\"main\":\"dist/main.js\",\"version\":\"0.0.1\",\"readme\":\"readme.md\",\"icon\":\"icon.png\",\"files\":[],\"author\":{\"name\":\"The-Nice-One\",\"email\":\"\",\"github\":\"The-Nice-One\"}}');\n\n//# sourceURL=webpack://calm-peppermint_theme/./plugin.json?");

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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;