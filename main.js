/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Bullpen3D.ttf */ "./src/Bullpen3D.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./Daughter of Fortune.ttf */ "./src/Daughter of Fortune.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./Raleway-SemiBold.ttf */ "./src/Raleway-SemiBold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --nav-bg-color: white;\n    --main-bg-color: rgb(230, 230, 230); \n    font-size: 18px; \n    font-family: 'Raleway';\n    background: var(--main-bg-color);\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n}\n\n@font-face {\n    font-family: 'Bullpen3D';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype');\n}\n\n@font-face {\n    font-family: 'Daughter of Fortune';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('truetype');\n}\n\n@font-face {\n    font-family: 'Raleway';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format('truetype')\n}\n\n#content {\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n    justify-content:space-between\n}\n\nnav {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 4px 8px 4px 8px;\n    background: var(--nav-bg-color);\n\n}\n\n.logo {\n    display: flex;\n    cursor: pointer;\n}\n\nimg {\n    height: 100px;\n    width: auto;\n}\n\nh1 {\n    font-size: 3rem;\n    font-family: 'Daughter of Fortune';\n    font-weight: 100;\n    letter-spacing: 3px;\n    margin-top: 46px;\n}\n\nh2 {\n    margin-top: 48px;\n}\n\nh3 {\n    margin-top: 36px;\n    margin-bottom: 16px;\n}\n\n\nul {\n    display: flex;\n    gap: 24px;\n    list-style: none;\n    font-size: 1.5rem;\n}\n\nli {\n    cursor: pointer;\n}\n\nli:hover {\n    color: blue;\n}\n\nmain {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    text-align: center;\n    padding-bottom: 32px;\n}\n\n.welcome-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 12px;\n    margin-bottom: 24px;\n    font-size: 2rem;\n    text-align: center;\n}\n\n.welcome-text-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.welcome-text-container h3:first-of-type {\n    margin-bottom: 0;\n}\n\n.welcome-text-container h3:nth-of-type(2) {\n    margin-top: 0;\n}\n\n.welcome-container + p {\n    margin-bottom: 24px;\n}\n\nmain img {\n    height: 300px;\n    width: 400px;\n}\n\nmain > p {\n    position: relative;\n    margin: auto;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    width: 683px; \n    text-align: center;\n}\n\na {\n    cursor: pointer;\n}\n\nimg + p {\n    margin-top: 24px;\n    margin-bottom: 24px;\n}\n\nsection {\n    display: grid;\n    gap: 36px;\n    grid-template-columns: repeat(2, minmax(250px, 1fr))\n}\n\nsection > div {\n    width: 350px;\n}\n\n\n\nform > * {\n    display: block;\n}\n\nform > input, form > label {\n    text-align: left;\n}\n\nbutton {\n    appearance: none;\n    border: 1px solid black;\n    border-radius: 4px;\n    padding: 8px 42px 8px 42px;\n    font-size: 1rem;\n    background: var(--nav-bg-color);\n    position: relative;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n\nfooter {\n    background: var(--nav-bg-color);\n    text-align: center;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;IACrB,mCAAmC;IACnC,eAAe;IACf,sBAAsB;IACtB,gCAAgC;AACpC;;AAEA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,wBAAwB;IACxB,+DAA8C;AAClD;;AAEA;IACI,kCAAkC;IAClC,+DAA0D;AAC9D;;AAEA;IACI,sBAAsB;IACtB;AACJ;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,oBAAoB;IACpB;AACJ;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,wBAAwB;IACxB,+BAA+B;;AAEnC;;AAEA;IACI,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,WAAW;AACf;;AAEA;IACI,eAAe;IACf,kCAAkC;IAClC,gBAAgB;IAChB,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,mBAAmB;AACvB;;;AAGA;IACI,aAAa;IACb,SAAS;IACT,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,sBAAsB;IACtB,kBAAkB;IAClB,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;IACT,mBAAmB;IACnB,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,MAAM;IACN,SAAS;IACT,OAAO;IACP,QAAQ;IACR,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,SAAS;IACT;AACJ;;AAEA;IACI,YAAY;AAChB;;;;AAIA;IACI,cAAc;AAClB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,uBAAuB;IACvB,kBAAkB;IAClB,0BAA0B;IAC1B,eAAe;IACf,+BAA+B;IAC/B,kBAAkB;IAClB,iBAAiB;IACjB,kBAAkB;AACtB;;;AAGA;IACI,+BAA+B;IAC/B,kBAAkB;AACtB","sourcesContent":[":root {\n    --nav-bg-color: white;\n    --main-bg-color: rgb(230, 230, 230); \n    font-size: 18px; \n    font-family: 'Raleway';\n    background: var(--main-bg-color);\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n}\n\n@font-face {\n    font-family: 'Bullpen3D';\n    src: url('./Bullpen3D.ttf') format('truetype');\n}\n\n@font-face {\n    font-family: 'Daughter of Fortune';\n    src: url('./Daughter\\ of\\ Fortune.ttf') format('truetype');\n}\n\n@font-face {\n    font-family: 'Raleway';\n    src: url('./Raleway-SemiBold.ttf') format('truetype')\n}\n\n#content {\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n    justify-content:space-between\n}\n\nnav {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 4px 8px 4px 8px;\n    background: var(--nav-bg-color);\n\n}\n\n.logo {\n    display: flex;\n    cursor: pointer;\n}\n\nimg {\n    height: 100px;\n    width: auto;\n}\n\nh1 {\n    font-size: 3rem;\n    font-family: 'Daughter of Fortune';\n    font-weight: 100;\n    letter-spacing: 3px;\n    margin-top: 46px;\n}\n\nh2 {\n    margin-top: 48px;\n}\n\nh3 {\n    margin-top: 36px;\n    margin-bottom: 16px;\n}\n\n\nul {\n    display: flex;\n    gap: 24px;\n    list-style: none;\n    font-size: 1.5rem;\n}\n\nli {\n    cursor: pointer;\n}\n\nli:hover {\n    color: blue;\n}\n\nmain {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    text-align: center;\n    padding-bottom: 32px;\n}\n\n.welcome-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 12px;\n    margin-bottom: 24px;\n    font-size: 2rem;\n    text-align: center;\n}\n\n.welcome-text-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.welcome-text-container h3:first-of-type {\n    margin-bottom: 0;\n}\n\n.welcome-text-container h3:nth-of-type(2) {\n    margin-top: 0;\n}\n\n.welcome-container + p {\n    margin-bottom: 24px;\n}\n\nmain img {\n    height: 300px;\n    width: 400px;\n}\n\nmain > p {\n    position: relative;\n    margin: auto;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    width: 683px; \n    text-align: center;\n}\n\na {\n    cursor: pointer;\n}\n\nimg + p {\n    margin-top: 24px;\n    margin-bottom: 24px;\n}\n\nsection {\n    display: grid;\n    gap: 36px;\n    grid-template-columns: repeat(2, minmax(250px, 1fr))\n}\n\nsection > div {\n    width: 350px;\n}\n\n\n\nform > * {\n    display: block;\n}\n\nform > input, form > label {\n    text-align: left;\n}\n\nbutton {\n    appearance: none;\n    border: 1px solid black;\n    border-radius: 4px;\n    padding: 8px 42px 8px 42px;\n    font-size: 1rem;\n    background: var(--nav-bg-color);\n    position: relative;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n\nfooter {\n    background: var(--nav-bg-color);\n    text-align: center;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "aboutCreate": () => (/* binding */ aboutCreate)
/* harmony export */ });
/* harmony import */ var _about_photo_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about-photo.jpg */ "./src/about-photo.jpg");


function aboutCreate() {
    const main = document.querySelector('main')
    while (main.firstChild) {
        main.removeChild(main.lastChild)
    }

    const aboutHeading = document.createElement('h1')
    aboutHeading.textContent = 'About Us'
    main.appendChild(aboutHeading)

    const aboutPhoto = new Image()
    aboutPhoto.src = _about_photo_jpg__WEBPACK_IMPORTED_MODULE_0__ 
    main.appendChild(aboutPhoto)

    const bioOne = document.createElement('p')
    bioOne.textContent = `Papa Luigi opened the legendary West Side location in 1976. With hard work and a little luck, it turned
                          into a neighborhood institution. Before long, he opened another location downtown, and finally the 
                          Green Hills location joined the family in 2005.`
    main.appendChild(bioOne)

    const bioTwo = document.createElement('p')
    bioTwo.textContent = `The times have changed, but the same commitment to quality, home-grown food has stayed the same. Papa 
                          Luigi's Neapolitan recipes have been passed down and blended with modern traditions. So what are you 
                          waiting for - come on by and see for yourself!`
    main.appendChild(bioTwo)
}

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contactCreate": () => (/* binding */ contactCreate)
/* harmony export */ });
function contactCreate() { 
    const main = document.querySelector('main')
    while (main.firstChild) {
        main.removeChild(main.lastChild)
    }

    const locationsHeading = document.createElement('h2')
    locationsHeading.textContent = 'Locations'
    main.appendChild(locationsHeading)

    const downtownHeading = document.createElement('h3')
    downtownHeading.textContent = 'Downtown'
    main.appendChild(downtownHeading)

    const downtownAddress = document.createElement('p')
    downtownAddress.textContent = '123 Main Street'
    main.appendChild(downtownAddress)

    const downtownCityAddress = document.createElement('p')
    downtownCityAddress.textContent = 'State City, USA 12344'
    main.appendChild(downtownCityAddress)

    const downtownPhoneNumber = document.createElement('p')
    downtownPhoneNumber.textContent = '(123) 456-7890'
    main.appendChild(downtownPhoneNumber)

    const westSideHeading = document.createElement('h3')
    westSideHeading.textContent = 'West Side'
    main.appendChild(westSideHeading)

    const westSideAddress = document.createElement('p')
    westSideAddress.textContent = '456 7th Street'
    main.appendChild(westSideAddress)

    const westSideCityAddress = document.createElement('p')
    westSideCityAddress.textContent = 'State City, USA 12345'
    main.appendChild(westSideCityAddress)

    const westSidePhoneNumber = document.createElement('p')
    westSidePhoneNumber.textContent = '(234) 567-8901'
    main.appendChild(westSidePhoneNumber)

    const greenHillsHeading = document.createElement('h3')
    greenHillsHeading.textContent = 'Green Hills'
    main.appendChild(greenHillsHeading)

    const greenHillsAddress = document.createElement('p')
    greenHillsAddress.textContent = '789 Hillside Ave'
    main.appendChild(greenHillsAddress)

    const greenHillsCityAddress = document.createElement('p')
    greenHillsCityAddress.textContent = 'State City, USA 12346'
    main.appendChild(greenHillsCityAddress)

    const greenHillsPhoneNumber = document.createElement('p')
    greenHillsPhoneNumber.textContent = '(345) 678-9012'
    main.appendChild(greenHillsPhoneNumber)

    const contactUsHeading = document.createElement('h2')
    contactUsHeading.textContent = 'Contact Us'
    main.appendChild(contactUsHeading)

    const form = document.createElement('form')
    main.appendChild(form)

   

    const nameLabel = document.createElement('label')
    nameLabel.setAttribute('for', 'name')
    nameLabel.textContent = 'Name: '
    form.appendChild(nameLabel)

    const nameInput = document.createElement('input')
    nameInput.setAttribute('type', 'text')
    nameInput.setAttribute('name', 'name')
    nameInput.setAttribute('id', 'name')
    nameInput.setAttribute('required',' required')
    form.appendChild(nameInput)

    const emailLabel = document.createElement('label')
    emailLabel.setAttribute('for', 'email')
    emailLabel.textContent = 'Email Address: '
    form.appendChild(emailLabel)

    const emailInput = document.createElement('input')
    emailInput.setAttribute('type', 'email')
    emailInput.setAttribute('name', 'email')
    emailInput.setAttribute('id', 'email')
    emailInput.setAttribute('required', 'required')
    form.appendChild(emailInput)

    const messageLabel = document.createElement('label')
    messageLabel.setAttribute('for', 'message')
    messageLabel.textContent = 'Message: '
    form.appendChild(messageLabel)

    const messageInput = document.createElement('textarea')
    messageInput.setAttribute('name', 'message')
    messageInput.setAttribute('id', 'message')
    messageInput.setAttribute('rows', '20')
    messageInput.setAttribute('cols', '60')
    messageInput.setAttribute('required', 'required')
    form.appendChild(messageInput)

    const submitButton = document.createElement('button')
    submitButton.textContent = 'Send'
    form.appendChild(submitButton)

    form.addEventListener('submit', (e) => {
        e.preventDefault()

        while (main.firstChild) {
            main.removeChild(main.lastChild)
        }

        const thanksHeading = document.createElement('h2')
        thanksHeading.textContent = 'Thanks for your message!'
        main.appendChild(thanksHeading)

        const thanksBody = document.createElement('p')
        thanksBody.textContent = 'Please allow us 1-3 business days to respond.'
        main.appendChild(thanksBody)

        const thanksFooter = document.createElement('p')
        thanksFooter.textContent = 'Have a nice day!'
        main.appendChild(thanksFooter)
    })
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homeCreate": () => (/* binding */ homeCreate)
/* harmony export */ });
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _pizza_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pizza.jpeg */ "./src/pizza.jpeg");




function homeCreate() {
    const main = document.querySelector('main')

    while (main.firstChild) {
        main.removeChild(main.lastChild)
    }

    const welcomeContainer = document.createElement('div')
    welcomeContainer.classList.add('welcome-container')
    main.appendChild(welcomeContainer)

    const welcomeTextContainer = document.createElement('div')
    welcomeTextContainer.classList.add('welcome-text-container')
    welcomeContainer.appendChild(welcomeTextContainer)

    const welcomeHeadingOne = document.createElement('h3')
    welcomeHeadingOne.textContent = 'Fresh. Organic.'
    welcomeTextContainer.appendChild(welcomeHeadingOne)

    const welcomeHeadingTwo = document.createElement('h3')
    welcomeHeadingTwo.textContent = 'From Our family to Yours'
    welcomeTextContainer.appendChild(welcomeHeadingTwo)

    const welcomeImage = new Image() 
    welcomeImage.src = _pizza_jpeg__WEBPACK_IMPORTED_MODULE_2__
    welcomeContainer.appendChild(welcomeImage)

    const blurb = document.createElement('p')
    blurb.textContent = `Ever since Papa Luigi opened our West Side location in 1973, we have been proudly
                        serving the metropolitan area, serving up the same classic recipes with modern twists.
                        As any of our loyal customers can tell you, you can't get better than Luigi's!`
    main.appendChild(blurb)

    const menuLinkParagraph = document.createElement('p')
    main.appendChild(menuLinkParagraph)

    const menuLinkOne = document.createElement('span')
    menuLinkOne.textContent = 'Interested in learning more? Check out our '
    menuLinkParagraph.appendChild(menuLinkOne)

    const menuLinkTwo = document.createElement('a')
    menuLinkTwo.textContent = 'menu.'
    menuLinkTwo.style.color = 'blue'
    menuLinkTwo.addEventListener('click', (e) => {
        ;(0,_menu__WEBPACK_IMPORTED_MODULE_0__.menuCreate)()
    })
    menuLinkParagraph.appendChild(menuLinkTwo)

    const contactLinkParagraph = document.createElement('p')
    main.appendChild(contactLinkParagraph)

    const contactLinkOne = document.createElement('span')
    contactLinkOne.textContent = 'Or come visit us at one of our '
    contactLinkParagraph.appendChild(contactLinkOne)

    const contactLinkTwo = document.createElement('a')
    contactLinkTwo.textContent = 'locations.'
    contactLinkTwo.style.color = 'blue'
    contactLinkTwo.addEventListener('click', (e) => {
        ;(0,_contact__WEBPACK_IMPORTED_MODULE_1__.contactCreate)()
    })
    contactLinkParagraph.appendChild(contactLinkTwo)
}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuCreate": () => (/* binding */ menuCreate)
/* harmony export */ });

function menuCreate() {

    const main = document.querySelector('main')
    while (main.firstChild) {
        main.removeChild(main.lastChild)
    }

    const antipastiHeading = document.createElement('h2')
    antipastiHeading.textContent = 'Antipasti'
    main.appendChild(antipastiHeading)

    const antipastiGrid = document.createElement('section')
    main.appendChild(antipastiGrid)

    const calamari = document.createElement('div')
    antipastiGrid.appendChild(calamari)

    const calamariHeading = document.createElement('h3')
    calamariHeading.textContent = 'Calamari'
    calamari.appendChild(calamariHeading)

    const calamariDescription = document.createElement('p')
    calamariDescription.textContent = `fresh tender squid lightly dusted in flour,
                                        deep fried in vegetable oil served with a side 
                                        of house-made marinara sauce`
    calamari.appendChild(calamariDescription)

    const calamariPrice = document.createElement('h3')
    calamariPrice.textContent = '$18.00'
    calamari.appendChild(calamariPrice)

    const shrimp = document.createElement('div')
    antipastiGrid.appendChild(shrimp)

    const shrimpHeading = document.createElement('h3')
    shrimpHeading.textContent = 'Shrimp'
    shrimp.appendChild(shrimpHeading)

    const shrimpDescription = document.createElement('p')
    shrimpDescription.textContent = `shrimp lightly dusted in flour deep
                                        fried in vegetable oil served with
                                        a side of house-made marinara sauce.`
    shrimp.appendChild(shrimpDescription)

    const shrimpPrice = document.createElement('h3')
    shrimpPrice.textContent = '$16.00'
    shrimp.appendChild(shrimpPrice)

    const clams = document.createElement('div')
    antipastiGrid.appendChild(clams)

    const clamsHeading = document.createElement('h3')
    clamsHeading.textContent = 'Baked Clams'
    clams.appendChild(clamsHeading)

    const clamsDescription = document.createElement('p')
    clamsDescription.textContent = `baked with seasoned bread crumbs in
                                a lemon and wine pouch.`
    clams.appendChild(clamsDescription)

    const clamsPrice = document.createElement('h3')
    clamsPrice.textContent = '$16.00'
    clams.appendChild(clamsPrice)

    const garlicBread = document.createElement('div')
    antipastiGrid.appendChild(garlicBread)

    const garlicBreadHeading = document.createElement('h3')
    garlicBreadHeading.textContent = 'Garlic Bread'
    garlicBread.appendChild(garlicBreadHeading)

    const garlicBreadDescription = document.createElement('p')
    garlicBreadDescription.textContent = `bread briquettes toasted with
                                          minced fresh garlic, oregano, 
                                          grated cheese, drizzled olive
                                          oil.`
    garlicBread.appendChild(garlicBreadDescription)

    const garlicBreadPrice = document.createElement('h3')
    garlicBreadPrice.textContent = '$8.00'
    garlicBread.appendChild(garlicBreadPrice)

    
    
    const pizzaHeading = document.createElement('h2')
    pizzaHeading.textContent = 'Pizza'
    main.appendChild(pizzaHeading)

    const pizzaGrid = document.createElement('section')
    main.appendChild(pizzaGrid)

    const marinara = document.createElement('div')
    pizzaGrid.appendChild(marinara)

    const marinaraHeading = document.createElement('h3')
    marinaraHeading.textContent = 'Marinara'
    marinara.appendChild(marinaraHeading)

    const marinaraDescription = document.createElement('p')
    marinaraDescription.textContent = `tomato sauce, minced garlic, 
                                        oregano, olive oil.`
    marinara.appendChild(marinaraDescription)

    const marinaraPrice = document.createElement('h3')
    marinaraPrice.textContent = '$11.00'
    marinara.appendChild(marinaraPrice)

    const margherita = document.createElement('div')
    pizzaGrid.appendChild(margherita)

    const margheritaHeading = document.createElement('h3')
    margheritaHeading.textContent = 'Margherita'
    margherita.appendChild(margheritaHeading)

    const margheritaDescription = document.createElement('p')
    margheritaDescription.textContent = `fresh mozzarella, tomato 
                                         sauce, olive oil, grated
                                         cheese, basil.`
    margherita.appendChild(margheritaDescription)

    const margheritaPrice = document.createElement('h3')
    margheritaPrice.textContent = '$12.50'
    margherita.appendChild(margheritaPrice)

    const pugliese = document.createElement('div')
    pizzaGrid.appendChild(pugliese)

    const puglieseHeading = document.createElement('h3')
    puglieseHeading.textContent = 'Pugliese'
    pugliese.appendChild(puglieseHeading)

    const puglieseDescription = document.createElement('p')
    puglieseDescription.textContent = `Tomato sauce, sausage, fresh
                                        mozzarella, broccoli rabe, 
                                        garlic, grated cheese, 
                                        olive oil.`
    pugliese.appendChild(puglieseDescription)

    const pugliesePrice = document.createElement('h3')
    pugliesePrice.textContent = '$16.50'
    pugliese.appendChild(pugliesePrice)

    const napoletana = document.createElement('div')
    pizzaGrid.appendChild(napoletana)

    const napoletanaHeading = document.createElement('h3')
    napoletanaHeading.textContent = 'Napoletana'
    napoletana.appendChild(napoletanaHeading)

    const napoletanaDescription = document.createElement('p')
    napoletanaDescription.textContent = `Tomato sauce, fresh 
                                         fresh mozzarella, soppressata,
                                         grated cheese, olive oil.`
    napoletana.appendChild(napoletanaDescription)

    const napoletanaPrice = document.createElement('h3')
    napoletanaPrice.textContent = '$15.00'
    napoletana.appendChild(napoletanaPrice)

    const dessertsHeading = document.createElement('h2')
    dessertsHeading.textContent = 'Desserts'
    main.appendChild(dessertsHeading)

    const dessertsGrid = document.createElement('section')
    main.appendChild(dessertsGrid)

    const cheesecake = document.createElement('div')
    dessertsGrid.appendChild(cheesecake)

    const cheesecakeHeading = document.createElement('h3')
    cheesecakeHeading.textContent = 'Italian Cheesecake'
    cheesecake.appendChild(cheesecakeHeading)

    const cheesecakePrice = document.createElement('h3')
    cheesecakePrice.textContent = '$6.00'
    cheesecake.appendChild(cheesecakePrice)

    const redVelvet = document.createElement('div')
    dessertsGrid.appendChild(redVelvet)

    const redVelvetHeading = document.createElement('h3')
    redVelvetHeading.textContent = 'Red Velvet Cupcake'
    redVelvet.appendChild(redVelvetHeading)

    const redVelvetPrice = document.createElement('h3')
    redVelvetPrice.textContent = '$6.00'
    redVelvet.appendChild(redVelvetPrice)

    const espresso = document.createElement('div')
    dessertsGrid.appendChild(espresso)

    const espressoHeading = document.createElement('h3')
    espressoHeading.textContent = 'Espresso Affogato'
    espresso.appendChild(espressoHeading)

    const espressoPrice = document.createElement('h3')
    espressoPrice.textContent = '$8.00'
    espresso.appendChild(espressoPrice)

    const mousse = document.createElement('div')
    dessertsGrid.appendChild(mousse)

    const mousseHeading = document.createElement('h3')
    mousseHeading.textContent = 'Black & White Chocolate Mousse'
    mousse.appendChild(mousseHeading)

    const moussePrice = document.createElement('h3')
    moussePrice.textContent = '$6.00'
    mousse.appendChild(moussePrice)


}

/***/ }),

/***/ "./src/Bullpen3D.ttf":
/*!***************************!*\
  !*** ./src/Bullpen3D.ttf ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f464825dbbbfb6c3a67d.ttf";

/***/ }),

/***/ "./src/Daughter of Fortune.ttf":
/*!*************************************!*\
  !*** ./src/Daughter of Fortune.ttf ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2866aab0f51f03034b54.ttf";

/***/ }),

/***/ "./src/Raleway-SemiBold.ttf":
/*!**********************************!*\
  !*** ./src/Raleway-SemiBold.ttf ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8fe2bbfb3fef9aaae8e7.ttf";

/***/ }),

/***/ "./src/about-photo.jpg":
/*!*****************************!*\
  !*** ./src/about-photo.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1c9b857acf454eb922a4.jpg";

/***/ }),

/***/ "./src/pizza.jpeg":
/*!************************!*\
  !*** ./src/pizza.jpeg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3c9233cc7ec015d6728d.jpeg";

/***/ }),

/***/ "./src/pizza.png":
/*!***********************!*\
  !*** ./src/pizza.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5a0633555127e50c727b.png";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.js */ "./src/about.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _pizza_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pizza.png */ "./src/pizza.png");









const content = document.querySelector('#content')
/*
nav structure
nav flex container
left side: logo8jmmmnnmn m 
right side: ul with 4 li's 
*/

//content.textContent = 'Hello'
function pageLoad() {
    const nav = document.createElement('nav')
    content.appendChild(nav)
    
    const logo = document.createElement('div')
    logo.setAttribute('class', 'logo')
    logo.addEventListener('click', (e) => {
        ;(0,_home_js__WEBPACK_IMPORTED_MODULE_1__.homeCreate)()
    })
    nav.appendChild(logo)

    const icon = new Image()
    icon.src = _pizza_png__WEBPACK_IMPORTED_MODULE_5__;
    logo.appendChild(icon)

    const logoText = document.createElement('h1')
    logoText.textContent = `Luigi's`
    logo.appendChild(logoText)

    const tabList = document.createElement('ul')
    nav.appendChild(tabList)

    const home = document.createElement('li')
    home.textContent = 'Home'
    home.style.color = 'blue'
    tabList.appendChild(home)
    home.addEventListener('click', (e) => {
        ;(0,_home_js__WEBPACK_IMPORTED_MODULE_1__.homeCreate)()
    })

    const about = document.createElement('li')
    about.textContent = 'About'
    about.addEventListener('click', (e) => {
       ;(0,_about_js__WEBPACK_IMPORTED_MODULE_2__.aboutCreate)()
    })
    tabList.appendChild(about)

    const menu = document.createElement('li')
    menu.textContent = 'Menu'
    menu.addEventListener('click', (e) => {
        ;(0,_menu_js__WEBPACK_IMPORTED_MODULE_3__.menuCreate)()
    })
    tabList.appendChild(menu)

    const contact = document.createElement('li')
    contact.textContent = 'Contact'
    contact.addEventListener('click', (e) => {
        ;(0,_contact_js__WEBPACK_IMPORTED_MODULE_4__.contactCreate)()
    })
    tabList.appendChild(contact)

    const tabs = document.querySelectorAll('li')
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            tabs.forEach(tab =>  tab.style.color = 'black')
            tab.style.color = 'blue'
        })
    })

    const main = document.createElement('main')
    content.appendChild(main)

    const footer = document.createElement('footer')
    footer.textContent = `Copyright Luigi's Pizzeria`
    content.appendChild(footer)

    ;(0,_home_js__WEBPACK_IMPORTED_MODULE_1__.homeCreate)()
}

document.onload = pageLoad()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7OztBQ2YwQzs7QUFFbkM7QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsNkNBQVU7QUFDL0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDM0JPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7OztBQy9IbUM7QUFDTTtBQUNGOztBQUVoQztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIsd0NBQVk7QUFDbkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsa0RBQVU7QUFDbEIsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx3REFBYTtBQUNyQixLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDakVPOztBQUVQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwTkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJvQjtBQUNrQjtBQUNFO0FBQ0Y7QUFDTTtBQUNkOzs7O0FBSTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHFEQUFVO0FBQ2xCLEtBQUs7QUFDTDs7QUFFQTtBQUNBLGVBQWUsdUNBQUk7QUFDbkI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEscURBQVU7QUFDbEIsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxPQUFPLHVEQUFXO0FBQ2xCLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHFEQUFVO0FBQ2xCLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDJEQUFhO0FBQ3JCLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSxxREFBVTtBQUNkOztBQUVBLDRCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9CdWxscGVuM0QudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9EYXVnaHRlciBvZiBGb3J0dW5lLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vUmFsZXdheS1TZW1pQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS1uYXYtYmctY29sb3I6IHdoaXRlO1xcbiAgICAtLW1haW4tYmctY29sb3I6IHJnYigyMzAsIDIzMCwgMjMwKTsgXFxuICAgIGZvbnQtc2l6ZTogMThweDsgXFxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheSc7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLW1haW4tYmctY29sb3IpO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdCdWxscGVuM0QnO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdEYXVnaHRlciBvZiBGb3J0dW5lJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheSc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJylcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2Vlblxcbn1cXG5cXG5uYXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDRweCA4cHggNHB4IDhweDtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tbmF2LWJnLWNvbG9yKTtcXG5cXG59XFxuXFxuLmxvZ28ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmltZyB7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIHdpZHRoOiBhdXRvO1xcbn1cXG5cXG5oMSB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdEYXVnaHRlciBvZiBGb3J0dW5lJztcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcXG4gICAgbWFyZ2luLXRvcDogNDZweDtcXG59XFxuXFxuaDIge1xcbiAgICBtYXJnaW4tdG9wOiA0OHB4O1xcbn1cXG5cXG5oMyB7XFxuICAgIG1hcmdpbi10b3A6IDM2cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XFxufVxcblxcblxcbnVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyNHB4O1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxubGkge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmxpOmhvdmVyIHtcXG4gICAgY29sb3I6IGJsdWU7XFxufVxcblxcbm1haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctYm90dG9tOiAzMnB4O1xcbn1cXG5cXG4ud2VsY29tZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMnB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLndlbGNvbWUtdGV4dC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLndlbGNvbWUtdGV4dC1jb250YWluZXIgaDM6Zmlyc3Qtb2YtdHlwZSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblxcbi53ZWxjb21lLXRleHQtY29udGFpbmVyIGgzOm50aC1vZi10eXBlKDIpIHtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG59XFxuXFxuLndlbGNvbWUtY29udGFpbmVyICsgcCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XFxufVxcblxcbm1haW4gaW1nIHtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbn1cXG5cXG5tYWluID4gcCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHdpZHRoOiA2ODNweDsgXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuYSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuaW1nICsgcCB7XFxuICAgIG1hcmdpbi10b3A6IDI0cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XFxufVxcblxcbnNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDM2cHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgyNTBweCwgMWZyKSlcXG59XFxuXFxuc2VjdGlvbiA+IGRpdiB7XFxuICAgIHdpZHRoOiAzNTBweDtcXG59XFxuXFxuXFxuXFxuZm9ybSA+ICoge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuZm9ybSA+IGlucHV0LCBmb3JtID4gbGFiZWwge1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBwYWRkaW5nOiA4cHggNDJweCA4cHggNDJweDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1uYXYtYmctY29sb3IpO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcblxcblxcbmZvb3RlciB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLW5hdi1iZy1jb2xvcik7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixtQ0FBbUM7SUFDbkMsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLCtEQUE4QztBQUNsRDs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQywrREFBMEQ7QUFDOUQ7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEI7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEI7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4QiwrQkFBK0I7O0FBRW5DOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtDQUFrQztJQUNsQyxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLE1BQU07SUFDTixTQUFTO0lBQ1QsT0FBTztJQUNQLFFBQVE7SUFDUixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNUO0FBQ0o7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOzs7O0FBSUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLGVBQWU7SUFDZiwrQkFBK0I7SUFDL0Isa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7OztBQUdBO0lBQ0ksK0JBQStCO0lBQy9CLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tbmF2LWJnLWNvbG9yOiB3aGl0ZTtcXG4gICAgLS1tYWluLWJnLWNvbG9yOiByZ2IoMjMwLCAyMzAsIDIzMCk7IFxcbiAgICBmb250LXNpemU6IDE4cHg7IFxcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWJnLWNvbG9yKTtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQnVsbHBlbjNEJztcXG4gICAgc3JjOiB1cmwoJy4vQnVsbHBlbjNELnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnRGF1Z2h0ZXIgb2YgRm9ydHVuZSc7XFxuICAgIHNyYzogdXJsKCcuL0RhdWdodGVyXFxcXCBvZlxcXFwgRm9ydHVuZS50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknO1xcbiAgICBzcmM6IHVybCgnLi9SYWxld2F5LVNlbWlCb2xkLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKVxcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuXFxufVxcblxcbm5hdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogNHB4IDhweCA0cHggOHB4O1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1uYXYtYmctY29sb3IpO1xcblxcbn1cXG5cXG4ubG9nbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuaW1nIHtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgd2lkdGg6IGF1dG87XFxufVxcblxcbmgxIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBmb250LWZhbWlseTogJ0RhdWdodGVyIG9mIEZvcnR1bmUnO1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xcbiAgICBtYXJnaW4tdG9wOiA0NnB4O1xcbn1cXG5cXG5oMiB7XFxuICAgIG1hcmdpbi10b3A6IDQ4cHg7XFxufVxcblxcbmgzIHtcXG4gICAgbWFyZ2luLXRvcDogMzZweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG59XFxuXFxuXFxudWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDI0cHg7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG5saSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxubGk6aG92ZXIge1xcbiAgICBjb2xvcjogYmx1ZTtcXG59XFxuXFxubWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZy1ib3R0b206IDMycHg7XFxufVxcblxcbi53ZWxjb21lLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEycHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ud2VsY29tZS10ZXh0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ud2VsY29tZS10ZXh0LWNvbnRhaW5lciBoMzpmaXJzdC1vZi10eXBlIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuXFxuLndlbGNvbWUtdGV4dC1jb250YWluZXIgaDM6bnRoLW9mLXR5cGUoMikge1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbn1cXG5cXG4ud2VsY29tZS1jb250YWluZXIgKyBwIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcXG59XFxuXFxubWFpbiBpbWcge1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICB3aWR0aDogNDAwcHg7XFxufVxcblxcbm1haW4gPiBwIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgd2lkdGg6IDY4M3B4OyBcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5hIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5pbWcgKyBwIHtcXG4gICAgbWFyZ2luLXRvcDogMjRweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcXG59XFxuXFxuc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMzZweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDI1MHB4LCAxZnIpKVxcbn1cXG5cXG5zZWN0aW9uID4gZGl2IHtcXG4gICAgd2lkdGg6IDM1MHB4O1xcbn1cXG5cXG5cXG5cXG5mb3JtID4gKiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5mb3JtID4gaW5wdXQsIGZvcm0gPiBsYWJlbCB7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIHBhZGRpbmc6IDhweCA0MnB4IDhweCA0MnB4O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLW5hdi1iZy1jb2xvcik7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuXFxuZm9vdGVyIHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tbmF2LWJnLWNvbG9yKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IEFib3V0SW1hZ2UgZnJvbSAnLi9hYm91dC1waG90by5qcGcnXG5cbmV4cG9ydCBmdW5jdGlvbiBhYm91dENyZWF0ZSgpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpXG4gICAgd2hpbGUgKG1haW4uZmlyc3RDaGlsZCkge1xuICAgICAgICBtYWluLnJlbW92ZUNoaWxkKG1haW4ubGFzdENoaWxkKVxuICAgIH1cblxuICAgIGNvbnN0IGFib3V0SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbiAgICBhYm91dEhlYWRpbmcudGV4dENvbnRlbnQgPSAnQWJvdXQgVXMnXG4gICAgbWFpbi5hcHBlbmRDaGlsZChhYm91dEhlYWRpbmcpXG5cbiAgICBjb25zdCBhYm91dFBob3RvID0gbmV3IEltYWdlKClcbiAgICBhYm91dFBob3RvLnNyYyA9IEFib3V0SW1hZ2UgXG4gICAgbWFpbi5hcHBlbmRDaGlsZChhYm91dFBob3RvKVxuXG4gICAgY29uc3QgYmlvT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgYmlvT25lLnRleHRDb250ZW50ID0gYFBhcGEgTHVpZ2kgb3BlbmVkIHRoZSBsZWdlbmRhcnkgV2VzdCBTaWRlIGxvY2F0aW9uIGluIDE5NzYuIFdpdGggaGFyZCB3b3JrIGFuZCBhIGxpdHRsZSBsdWNrLCBpdCB0dXJuZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW50byBhIG5laWdoYm9yaG9vZCBpbnN0aXR1dGlvbi4gQmVmb3JlIGxvbmcsIGhlIG9wZW5lZCBhbm90aGVyIGxvY2F0aW9uIGRvd250b3duLCBhbmQgZmluYWxseSB0aGUgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEdyZWVuIEhpbGxzIGxvY2F0aW9uIGpvaW5lZCB0aGUgZmFtaWx5IGluIDIwMDUuYFxuICAgIG1haW4uYXBwZW5kQ2hpbGQoYmlvT25lKVxuXG4gICAgY29uc3QgYmlvVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgYmlvVHdvLnRleHRDb250ZW50ID0gYFRoZSB0aW1lcyBoYXZlIGNoYW5nZWQsIGJ1dCB0aGUgc2FtZSBjb21taXRtZW50IHRvIHF1YWxpdHksIGhvbWUtZ3Jvd24gZm9vZCBoYXMgc3RheWVkIHRoZSBzYW1lLiBQYXBhIFxuICAgICAgICAgICAgICAgICAgICAgICAgICBMdWlnaSdzIE5lYXBvbGl0YW4gcmVjaXBlcyBoYXZlIGJlZW4gcGFzc2VkIGRvd24gYW5kIGJsZW5kZWQgd2l0aCBtb2Rlcm4gdHJhZGl0aW9ucy4gU28gd2hhdCBhcmUgeW91IFxuICAgICAgICAgICAgICAgICAgICAgICAgICB3YWl0aW5nIGZvciAtIGNvbWUgb24gYnkgYW5kIHNlZSBmb3IgeW91cnNlbGYhYFxuICAgIG1haW4uYXBwZW5kQ2hpbGQoYmlvVHdvKVxufSIsImV4cG9ydCBmdW5jdGlvbiBjb250YWN0Q3JlYXRlKCkgeyBcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpXG4gICAgd2hpbGUgKG1haW4uZmlyc3RDaGlsZCkge1xuICAgICAgICBtYWluLnJlbW92ZUNoaWxkKG1haW4ubGFzdENoaWxkKVxuICAgIH1cblxuICAgIGNvbnN0IGxvY2F0aW9uc0hlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgbG9jYXRpb25zSGVhZGluZy50ZXh0Q29udGVudCA9ICdMb2NhdGlvbnMnXG4gICAgbWFpbi5hcHBlbmRDaGlsZChsb2NhdGlvbnNIZWFkaW5nKVxuXG4gICAgY29uc3QgZG93bnRvd25IZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICAgIGRvd250b3duSGVhZGluZy50ZXh0Q29udGVudCA9ICdEb3dudG93bidcbiAgICBtYWluLmFwcGVuZENoaWxkKGRvd250b3duSGVhZGluZylcblxuICAgIGNvbnN0IGRvd250b3duQWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGRvd250b3duQWRkcmVzcy50ZXh0Q29udGVudCA9ICcxMjMgTWFpbiBTdHJlZXQnXG4gICAgbWFpbi5hcHBlbmRDaGlsZChkb3dudG93bkFkZHJlc3MpXG5cbiAgICBjb25zdCBkb3dudG93bkNpdHlBZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgZG93bnRvd25DaXR5QWRkcmVzcy50ZXh0Q29udGVudCA9ICdTdGF0ZSBDaXR5LCBVU0EgMTIzNDQnXG4gICAgbWFpbi5hcHBlbmRDaGlsZChkb3dudG93bkNpdHlBZGRyZXNzKVxuXG4gICAgY29uc3QgZG93bnRvd25QaG9uZU51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGRvd250b3duUGhvbmVOdW1iZXIudGV4dENvbnRlbnQgPSAnKDEyMykgNDU2LTc4OTAnXG4gICAgbWFpbi5hcHBlbmRDaGlsZChkb3dudG93blBob25lTnVtYmVyKVxuXG4gICAgY29uc3Qgd2VzdFNpZGVIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICAgIHdlc3RTaWRlSGVhZGluZy50ZXh0Q29udGVudCA9ICdXZXN0IFNpZGUnXG4gICAgbWFpbi5hcHBlbmRDaGlsZCh3ZXN0U2lkZUhlYWRpbmcpXG5cbiAgICBjb25zdCB3ZXN0U2lkZUFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICB3ZXN0U2lkZUFkZHJlc3MudGV4dENvbnRlbnQgPSAnNDU2IDd0aCBTdHJlZXQnXG4gICAgbWFpbi5hcHBlbmRDaGlsZCh3ZXN0U2lkZUFkZHJlc3MpXG5cbiAgICBjb25zdCB3ZXN0U2lkZUNpdHlBZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgd2VzdFNpZGVDaXR5QWRkcmVzcy50ZXh0Q29udGVudCA9ICdTdGF0ZSBDaXR5LCBVU0EgMTIzNDUnXG4gICAgbWFpbi5hcHBlbmRDaGlsZCh3ZXN0U2lkZUNpdHlBZGRyZXNzKVxuXG4gICAgY29uc3Qgd2VzdFNpZGVQaG9uZU51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHdlc3RTaWRlUGhvbmVOdW1iZXIudGV4dENvbnRlbnQgPSAnKDIzNCkgNTY3LTg5MDEnXG4gICAgbWFpbi5hcHBlbmRDaGlsZCh3ZXN0U2lkZVBob25lTnVtYmVyKVxuXG4gICAgY29uc3QgZ3JlZW5IaWxsc0hlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG4gICAgZ3JlZW5IaWxsc0hlYWRpbmcudGV4dENvbnRlbnQgPSAnR3JlZW4gSGlsbHMnXG4gICAgbWFpbi5hcHBlbmRDaGlsZChncmVlbkhpbGxzSGVhZGluZylcblxuICAgIGNvbnN0IGdyZWVuSGlsbHNBZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgZ3JlZW5IaWxsc0FkZHJlc3MudGV4dENvbnRlbnQgPSAnNzg5IEhpbGxzaWRlIEF2ZSdcbiAgICBtYWluLmFwcGVuZENoaWxkKGdyZWVuSGlsbHNBZGRyZXNzKVxuXG4gICAgY29uc3QgZ3JlZW5IaWxsc0NpdHlBZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgZ3JlZW5IaWxsc0NpdHlBZGRyZXNzLnRleHRDb250ZW50ID0gJ1N0YXRlIENpdHksIFVTQSAxMjM0NidcbiAgICBtYWluLmFwcGVuZENoaWxkKGdyZWVuSGlsbHNDaXR5QWRkcmVzcylcblxuICAgIGNvbnN0IGdyZWVuSGlsbHNQaG9uZU51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGdyZWVuSGlsbHNQaG9uZU51bWJlci50ZXh0Q29udGVudCA9ICcoMzQ1KSA2NzgtOTAxMidcbiAgICBtYWluLmFwcGVuZENoaWxkKGdyZWVuSGlsbHNQaG9uZU51bWJlcilcblxuICAgIGNvbnN0IGNvbnRhY3RVc0hlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgY29udGFjdFVzSGVhZGluZy50ZXh0Q29udGVudCA9ICdDb250YWN0IFVzJ1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY29udGFjdFVzSGVhZGluZylcblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgICBtYWluLmFwcGVuZENoaWxkKGZvcm0pXG5cbiAgIFxuXG4gICAgY29uc3QgbmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIG5hbWVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICduYW1lJylcbiAgICBuYW1lTGFiZWwudGV4dENvbnRlbnQgPSAnTmFtZTogJ1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQobmFtZUxhYmVsKVxuXG4gICAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpXG4gICAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICduYW1lJylcbiAgICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICduYW1lJylcbiAgICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsJyByZXF1aXJlZCcpXG4gICAgZm9ybS5hcHBlbmRDaGlsZChuYW1lSW5wdXQpXG5cbiAgICBjb25zdCBlbWFpbExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGVtYWlsTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZW1haWwnKVxuICAgIGVtYWlsTGFiZWwudGV4dENvbnRlbnQgPSAnRW1haWwgQWRkcmVzczogJ1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZW1haWxMYWJlbClcblxuICAgIGNvbnN0IGVtYWlsSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgZW1haWxJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZW1haWwnKVxuICAgIGVtYWlsSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2VtYWlsJylcbiAgICBlbWFpbElucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnZW1haWwnKVxuICAgIGVtYWlsSW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICdyZXF1aXJlZCcpXG4gICAgZm9ybS5hcHBlbmRDaGlsZChlbWFpbElucHV0KVxuXG4gICAgY29uc3QgbWVzc2FnZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIG1lc3NhZ2VMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdtZXNzYWdlJylcbiAgICBtZXNzYWdlTGFiZWwudGV4dENvbnRlbnQgPSAnTWVzc2FnZTogJ1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQobWVzc2FnZUxhYmVsKVxuXG4gICAgY29uc3QgbWVzc2FnZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuICAgIG1lc3NhZ2VJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnbWVzc2FnZScpXG4gICAgbWVzc2FnZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVzc2FnZScpXG4gICAgbWVzc2FnZUlucHV0LnNldEF0dHJpYnV0ZSgncm93cycsICcyMCcpXG4gICAgbWVzc2FnZUlucHV0LnNldEF0dHJpYnV0ZSgnY29scycsICc2MCcpXG4gICAgbWVzc2FnZUlucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAncmVxdWlyZWQnKVxuICAgIGZvcm0uYXBwZW5kQ2hpbGQobWVzc2FnZUlucHV0KVxuXG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSAnU2VuZCdcbiAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbilcblxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgICAgd2hpbGUgKG1haW4uZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgbWFpbi5yZW1vdmVDaGlsZChtYWluLmxhc3RDaGlsZClcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRoYW5rc0hlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgICAgIHRoYW5rc0hlYWRpbmcudGV4dENvbnRlbnQgPSAnVGhhbmtzIGZvciB5b3VyIG1lc3NhZ2UhJ1xuICAgICAgICBtYWluLmFwcGVuZENoaWxkKHRoYW5rc0hlYWRpbmcpXG5cbiAgICAgICAgY29uc3QgdGhhbmtzQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICB0aGFua3NCb2R5LnRleHRDb250ZW50ID0gJ1BsZWFzZSBhbGxvdyB1cyAxLTMgYnVzaW5lc3MgZGF5cyB0byByZXNwb25kLidcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZCh0aGFua3NCb2R5KVxuXG4gICAgICAgIGNvbnN0IHRoYW5rc0Zvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICB0aGFua3NGb290ZXIudGV4dENvbnRlbnQgPSAnSGF2ZSBhIG5pY2UgZGF5ISdcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZCh0aGFua3NGb290ZXIpXG4gICAgfSlcbn0iLCJpbXBvcnQgeyBtZW51Q3JlYXRlIH0gZnJvbSAnLi9tZW51J1xuaW1wb3J0IHsgY29udGFjdENyZWF0ZSB9IGZyb20gJy4vY29udGFjdCdcbmltcG9ydCBXZWxjb21lSW1hZ2UgZnJvbSAnLi9waXp6YS5qcGVnJ1xuXG5leHBvcnQgZnVuY3Rpb24gaG9tZUNyZWF0ZSgpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpXG5cbiAgICB3aGlsZSAobWFpbi5maXJzdENoaWxkKSB7XG4gICAgICAgIG1haW4ucmVtb3ZlQ2hpbGQobWFpbi5sYXN0Q2hpbGQpXG4gICAgfVxuXG4gICAgY29uc3Qgd2VsY29tZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgd2VsY29tZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd3ZWxjb21lLWNvbnRhaW5lcicpXG4gICAgbWFpbi5hcHBlbmRDaGlsZCh3ZWxjb21lQ29udGFpbmVyKVxuXG4gICAgY29uc3Qgd2VsY29tZVRleHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHdlbGNvbWVUZXh0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3dlbGNvbWUtdGV4dC1jb250YWluZXInKVxuICAgIHdlbGNvbWVDb250YWluZXIuYXBwZW5kQ2hpbGQod2VsY29tZVRleHRDb250YWluZXIpXG5cbiAgICBjb25zdCB3ZWxjb21lSGVhZGluZ09uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgICB3ZWxjb21lSGVhZGluZ09uZS50ZXh0Q29udGVudCA9ICdGcmVzaC4gT3JnYW5pYy4nXG4gICAgd2VsY29tZVRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQod2VsY29tZUhlYWRpbmdPbmUpXG5cbiAgICBjb25zdCB3ZWxjb21lSGVhZGluZ1R3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgICB3ZWxjb21lSGVhZGluZ1R3by50ZXh0Q29udGVudCA9ICdGcm9tIE91ciBmYW1pbHkgdG8gWW91cnMnXG4gICAgd2VsY29tZVRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQod2VsY29tZUhlYWRpbmdUd28pXG5cbiAgICBjb25zdCB3ZWxjb21lSW1hZ2UgPSBuZXcgSW1hZ2UoKSBcbiAgICB3ZWxjb21lSW1hZ2Uuc3JjID0gV2VsY29tZUltYWdlXG4gICAgd2VsY29tZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh3ZWxjb21lSW1hZ2UpXG5cbiAgICBjb25zdCBibHVyYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGJsdXJiLnRleHRDb250ZW50ID0gYEV2ZXIgc2luY2UgUGFwYSBMdWlnaSBvcGVuZWQgb3VyIFdlc3QgU2lkZSBsb2NhdGlvbiBpbiAxOTczLCB3ZSBoYXZlIGJlZW4gcHJvdWRseVxuICAgICAgICAgICAgICAgICAgICAgICAgc2VydmluZyB0aGUgbWV0cm9wb2xpdGFuIGFyZWEsIHNlcnZpbmcgdXAgdGhlIHNhbWUgY2xhc3NpYyByZWNpcGVzIHdpdGggbW9kZXJuIHR3aXN0cy5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFzIGFueSBvZiBvdXIgbG95YWwgY3VzdG9tZXJzIGNhbiB0ZWxsIHlvdSwgeW91IGNhbid0IGdldCBiZXR0ZXIgdGhhbiBMdWlnaSdzIWBcbiAgICBtYWluLmFwcGVuZENoaWxkKGJsdXJiKVxuXG4gICAgY29uc3QgbWVudUxpbmtQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBtYWluLmFwcGVuZENoaWxkKG1lbnVMaW5rUGFyYWdyYXBoKVxuXG4gICAgY29uc3QgbWVudUxpbmtPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBtZW51TGlua09uZS50ZXh0Q29udGVudCA9ICdJbnRlcmVzdGVkIGluIGxlYXJuaW5nIG1vcmU/IENoZWNrIG91dCBvdXIgJ1xuICAgIG1lbnVMaW5rUGFyYWdyYXBoLmFwcGVuZENoaWxkKG1lbnVMaW5rT25lKVxuXG4gICAgY29uc3QgbWVudUxpbmtUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICBtZW51TGlua1R3by50ZXh0Q29udGVudCA9ICdtZW51LidcbiAgICBtZW51TGlua1R3by5zdHlsZS5jb2xvciA9ICdibHVlJ1xuICAgIG1lbnVMaW5rVHdvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgbWVudUNyZWF0ZSgpXG4gICAgfSlcbiAgICBtZW51TGlua1BhcmFncmFwaC5hcHBlbmRDaGlsZChtZW51TGlua1R3bylcblxuICAgIGNvbnN0IGNvbnRhY3RMaW5rUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgbWFpbi5hcHBlbmRDaGlsZChjb250YWN0TGlua1BhcmFncmFwaClcblxuICAgIGNvbnN0IGNvbnRhY3RMaW5rT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgY29udGFjdExpbmtPbmUudGV4dENvbnRlbnQgPSAnT3IgY29tZSB2aXNpdCB1cyBhdCBvbmUgb2Ygb3VyICdcbiAgICBjb250YWN0TGlua1BhcmFncmFwaC5hcHBlbmRDaGlsZChjb250YWN0TGlua09uZSlcblxuICAgIGNvbnN0IGNvbnRhY3RMaW5rVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgY29udGFjdExpbmtUd28udGV4dENvbnRlbnQgPSAnbG9jYXRpb25zLidcbiAgICBjb250YWN0TGlua1R3by5zdHlsZS5jb2xvciA9ICdibHVlJ1xuICAgIGNvbnRhY3RMaW5rVHdvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgY29udGFjdENyZWF0ZSgpXG4gICAgfSlcbiAgICBjb250YWN0TGlua1BhcmFncmFwaC5hcHBlbmRDaGlsZChjb250YWN0TGlua1R3bylcbn0iLCJcbmV4cG9ydCBmdW5jdGlvbiBtZW51Q3JlYXRlKCkge1xuXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKVxuICAgIHdoaWxlIChtYWluLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgbWFpbi5yZW1vdmVDaGlsZChtYWluLmxhc3RDaGlsZClcbiAgICB9XG5cbiAgICBjb25zdCBhbnRpcGFzdGlIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgIGFudGlwYXN0aUhlYWRpbmcudGV4dENvbnRlbnQgPSAnQW50aXBhc3RpJ1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoYW50aXBhc3RpSGVhZGluZylcblxuICAgIGNvbnN0IGFudGlwYXN0aUdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJylcbiAgICBtYWluLmFwcGVuZENoaWxkKGFudGlwYXN0aUdyaWQpXG5cbiAgICBjb25zdCBjYWxhbWFyaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgYW50aXBhc3RpR3JpZC5hcHBlbmRDaGlsZChjYWxhbWFyaSlcblxuICAgIGNvbnN0IGNhbGFtYXJpSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgICBjYWxhbWFyaUhlYWRpbmcudGV4dENvbnRlbnQgPSAnQ2FsYW1hcmknXG4gICAgY2FsYW1hcmkuYXBwZW5kQ2hpbGQoY2FsYW1hcmlIZWFkaW5nKVxuXG4gICAgY29uc3QgY2FsYW1hcmlEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGNhbGFtYXJpRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBgZnJlc2ggdGVuZGVyIHNxdWlkIGxpZ2h0bHkgZHVzdGVkIGluIGZsb3VyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZXAgZnJpZWQgaW4gdmVnZXRhYmxlIG9pbCBzZXJ2ZWQgd2l0aCBhIHNpZGUgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2YgaG91c2UtbWFkZSBtYXJpbmFyYSBzYXVjZWBcbiAgICBjYWxhbWFyaS5hcHBlbmRDaGlsZChjYWxhbWFyaURlc2NyaXB0aW9uKVxuXG4gICAgY29uc3QgY2FsYW1hcmlQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgICBjYWxhbWFyaVByaWNlLnRleHRDb250ZW50ID0gJyQxOC4wMCdcbiAgICBjYWxhbWFyaS5hcHBlbmRDaGlsZChjYWxhbWFyaVByaWNlKVxuXG4gICAgY29uc3Qgc2hyaW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBhbnRpcGFzdGlHcmlkLmFwcGVuZENoaWxkKHNocmltcClcblxuICAgIGNvbnN0IHNocmltcEhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG4gICAgc2hyaW1wSGVhZGluZy50ZXh0Q29udGVudCA9ICdTaHJpbXAnXG4gICAgc2hyaW1wLmFwcGVuZENoaWxkKHNocmltcEhlYWRpbmcpXG5cbiAgICBjb25zdCBzaHJpbXBEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHNocmltcERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gYHNocmltcCBsaWdodGx5IGR1c3RlZCBpbiBmbG91ciBkZWVwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJpZWQgaW4gdmVnZXRhYmxlIG9pbCBzZXJ2ZWQgd2l0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEgc2lkZSBvZiBob3VzZS1tYWRlIG1hcmluYXJhIHNhdWNlLmBcbiAgICBzaHJpbXAuYXBwZW5kQ2hpbGQoc2hyaW1wRGVzY3JpcHRpb24pXG5cbiAgICBjb25zdCBzaHJpbXBQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgICBzaHJpbXBQcmljZS50ZXh0Q29udGVudCA9ICckMTYuMDAnXG4gICAgc2hyaW1wLmFwcGVuZENoaWxkKHNocmltcFByaWNlKVxuXG4gICAgY29uc3QgY2xhbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGFudGlwYXN0aUdyaWQuYXBwZW5kQ2hpbGQoY2xhbXMpXG5cbiAgICBjb25zdCBjbGFtc0hlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG4gICAgY2xhbXNIZWFkaW5nLnRleHRDb250ZW50ID0gJ0Jha2VkIENsYW1zJ1xuICAgIGNsYW1zLmFwcGVuZENoaWxkKGNsYW1zSGVhZGluZylcblxuICAgIGNvbnN0IGNsYW1zRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBjbGFtc0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gYGJha2VkIHdpdGggc2Vhc29uZWQgYnJlYWQgY3J1bWJzIGluXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEgbGVtb24gYW5kIHdpbmUgcG91Y2guYFxuICAgIGNsYW1zLmFwcGVuZENoaWxkKGNsYW1zRGVzY3JpcHRpb24pXG5cbiAgICBjb25zdCBjbGFtc1ByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICAgIGNsYW1zUHJpY2UudGV4dENvbnRlbnQgPSAnJDE2LjAwJ1xuICAgIGNsYW1zLmFwcGVuZENoaWxkKGNsYW1zUHJpY2UpXG5cbiAgICBjb25zdCBnYXJsaWNCcmVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgYW50aXBhc3RpR3JpZC5hcHBlbmRDaGlsZChnYXJsaWNCcmVhZClcblxuICAgIGNvbnN0IGdhcmxpY0JyZWFkSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgICBnYXJsaWNCcmVhZEhlYWRpbmcudGV4dENvbnRlbnQgPSAnR2FybGljIEJyZWFkJ1xuICAgIGdhcmxpY0JyZWFkLmFwcGVuZENoaWxkKGdhcmxpY0JyZWFkSGVhZGluZylcblxuICAgIGNvbnN0IGdhcmxpY0JyZWFkRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBnYXJsaWNCcmVhZERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gYGJyZWFkIGJyaXF1ZXR0ZXMgdG9hc3RlZCB3aXRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5jZWQgZnJlc2ggZ2FybGljLCBvcmVnYW5vLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyYXRlZCBjaGVlc2UsIGRyaXp6bGVkIG9saXZlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvaWwuYFxuICAgIGdhcmxpY0JyZWFkLmFwcGVuZENoaWxkKGdhcmxpY0JyZWFkRGVzY3JpcHRpb24pXG5cbiAgICBjb25zdCBnYXJsaWNCcmVhZFByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICAgIGdhcmxpY0JyZWFkUHJpY2UudGV4dENvbnRlbnQgPSAnJDguMDAnXG4gICAgZ2FybGljQnJlYWQuYXBwZW5kQ2hpbGQoZ2FybGljQnJlYWRQcmljZSlcblxuICAgIFxuICAgIFxuICAgIGNvbnN0IHBpenphSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICBwaXp6YUhlYWRpbmcudGV4dENvbnRlbnQgPSAnUGl6emEnXG4gICAgbWFpbi5hcHBlbmRDaGlsZChwaXp6YUhlYWRpbmcpXG5cbiAgICBjb25zdCBwaXp6YUdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJylcbiAgICBtYWluLmFwcGVuZENoaWxkKHBpenphR3JpZClcblxuICAgIGNvbnN0IG1hcmluYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBwaXp6YUdyaWQuYXBwZW5kQ2hpbGQobWFyaW5hcmEpXG5cbiAgICBjb25zdCBtYXJpbmFyYUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG4gICAgbWFyaW5hcmFIZWFkaW5nLnRleHRDb250ZW50ID0gJ01hcmluYXJhJ1xuICAgIG1hcmluYXJhLmFwcGVuZENoaWxkKG1hcmluYXJhSGVhZGluZylcblxuICAgIGNvbnN0IG1hcmluYXJhRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBtYXJpbmFyYURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gYHRvbWF0byBzYXVjZSwgbWluY2VkIGdhcmxpYywgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JlZ2Fubywgb2xpdmUgb2lsLmBcbiAgICBtYXJpbmFyYS5hcHBlbmRDaGlsZChtYXJpbmFyYURlc2NyaXB0aW9uKVxuXG4gICAgY29uc3QgbWFyaW5hcmFQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgICBtYXJpbmFyYVByaWNlLnRleHRDb250ZW50ID0gJyQxMS4wMCdcbiAgICBtYXJpbmFyYS5hcHBlbmRDaGlsZChtYXJpbmFyYVByaWNlKVxuXG4gICAgY29uc3QgbWFyZ2hlcml0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcGl6emFHcmlkLmFwcGVuZENoaWxkKG1hcmdoZXJpdGEpXG5cbiAgICBjb25zdCBtYXJnaGVyaXRhSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgICBtYXJnaGVyaXRhSGVhZGluZy50ZXh0Q29udGVudCA9ICdNYXJnaGVyaXRhJ1xuICAgIG1hcmdoZXJpdGEuYXBwZW5kQ2hpbGQobWFyZ2hlcml0YUhlYWRpbmcpXG5cbiAgICBjb25zdCBtYXJnaGVyaXRhRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBtYXJnaGVyaXRhRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBgZnJlc2ggbW96emFyZWxsYSwgdG9tYXRvIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYXVjZSwgb2xpdmUgb2lsLCBncmF0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlZXNlLCBiYXNpbC5gXG4gICAgbWFyZ2hlcml0YS5hcHBlbmRDaGlsZChtYXJnaGVyaXRhRGVzY3JpcHRpb24pXG5cbiAgICBjb25zdCBtYXJnaGVyaXRhUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG4gICAgbWFyZ2hlcml0YVByaWNlLnRleHRDb250ZW50ID0gJyQxMi41MCdcbiAgICBtYXJnaGVyaXRhLmFwcGVuZENoaWxkKG1hcmdoZXJpdGFQcmljZSlcblxuICAgIGNvbnN0IHB1Z2xpZXNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBwaXp6YUdyaWQuYXBwZW5kQ2hpbGQocHVnbGllc2UpXG5cbiAgICBjb25zdCBwdWdsaWVzZUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG4gICAgcHVnbGllc2VIZWFkaW5nLnRleHRDb250ZW50ID0gJ1B1Z2xpZXNlJ1xuICAgIHB1Z2xpZXNlLmFwcGVuZENoaWxkKHB1Z2xpZXNlSGVhZGluZylcblxuICAgIGNvbnN0IHB1Z2xpZXNlRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBwdWdsaWVzZURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gYFRvbWF0byBzYXVjZSwgc2F1c2FnZSwgZnJlc2hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3p6YXJlbGxhLCBicm9jY29saSByYWJlLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYXJsaWMsIGdyYXRlZCBjaGVlc2UsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9saXZlIG9pbC5gXG4gICAgcHVnbGllc2UuYXBwZW5kQ2hpbGQocHVnbGllc2VEZXNjcmlwdGlvbilcblxuICAgIGNvbnN0IHB1Z2xpZXNlUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG4gICAgcHVnbGllc2VQcmljZS50ZXh0Q29udGVudCA9ICckMTYuNTAnXG4gICAgcHVnbGllc2UuYXBwZW5kQ2hpbGQocHVnbGllc2VQcmljZSlcblxuICAgIGNvbnN0IG5hcG9sZXRhbmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHBpenphR3JpZC5hcHBlbmRDaGlsZChuYXBvbGV0YW5hKVxuXG4gICAgY29uc3QgbmFwb2xldGFuYUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG4gICAgbmFwb2xldGFuYUhlYWRpbmcudGV4dENvbnRlbnQgPSAnTmFwb2xldGFuYSdcbiAgICBuYXBvbGV0YW5hLmFwcGVuZENoaWxkKG5hcG9sZXRhbmFIZWFkaW5nKVxuXG4gICAgY29uc3QgbmFwb2xldGFuYURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgbmFwb2xldGFuYURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gYFRvbWF0byBzYXVjZSwgZnJlc2ggXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyZXNoIG1venphcmVsbGEsIHNvcHByZXNzYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmF0ZWQgY2hlZXNlLCBvbGl2ZSBvaWwuYFxuICAgIG5hcG9sZXRhbmEuYXBwZW5kQ2hpbGQobmFwb2xldGFuYURlc2NyaXB0aW9uKVxuXG4gICAgY29uc3QgbmFwb2xldGFuYVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICAgIG5hcG9sZXRhbmFQcmljZS50ZXh0Q29udGVudCA9ICckMTUuMDAnXG4gICAgbmFwb2xldGFuYS5hcHBlbmRDaGlsZChuYXBvbGV0YW5hUHJpY2UpXG5cbiAgICBjb25zdCBkZXNzZXJ0c0hlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgZGVzc2VydHNIZWFkaW5nLnRleHRDb250ZW50ID0gJ0Rlc3NlcnRzJ1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoZGVzc2VydHNIZWFkaW5nKVxuXG4gICAgY29uc3QgZGVzc2VydHNHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpXG4gICAgbWFpbi5hcHBlbmRDaGlsZChkZXNzZXJ0c0dyaWQpXG5cbiAgICBjb25zdCBjaGVlc2VjYWtlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkZXNzZXJ0c0dyaWQuYXBwZW5kQ2hpbGQoY2hlZXNlY2FrZSlcblxuICAgIGNvbnN0IGNoZWVzZWNha2VIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICAgIGNoZWVzZWNha2VIZWFkaW5nLnRleHRDb250ZW50ID0gJ0l0YWxpYW4gQ2hlZXNlY2FrZSdcbiAgICBjaGVlc2VjYWtlLmFwcGVuZENoaWxkKGNoZWVzZWNha2VIZWFkaW5nKVxuXG4gICAgY29uc3QgY2hlZXNlY2FrZVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICAgIGNoZWVzZWNha2VQcmljZS50ZXh0Q29udGVudCA9ICckNi4wMCdcbiAgICBjaGVlc2VjYWtlLmFwcGVuZENoaWxkKGNoZWVzZWNha2VQcmljZSlcblxuICAgIGNvbnN0IHJlZFZlbHZldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGVzc2VydHNHcmlkLmFwcGVuZENoaWxkKHJlZFZlbHZldClcblxuICAgIGNvbnN0IHJlZFZlbHZldEhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG4gICAgcmVkVmVsdmV0SGVhZGluZy50ZXh0Q29udGVudCA9ICdSZWQgVmVsdmV0IEN1cGNha2UnXG4gICAgcmVkVmVsdmV0LmFwcGVuZENoaWxkKHJlZFZlbHZldEhlYWRpbmcpXG5cbiAgICBjb25zdCByZWRWZWx2ZXRQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgICByZWRWZWx2ZXRQcmljZS50ZXh0Q29udGVudCA9ICckNi4wMCdcbiAgICByZWRWZWx2ZXQuYXBwZW5kQ2hpbGQocmVkVmVsdmV0UHJpY2UpXG5cbiAgICBjb25zdCBlc3ByZXNzbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGVzc2VydHNHcmlkLmFwcGVuZENoaWxkKGVzcHJlc3NvKVxuXG4gICAgY29uc3QgZXNwcmVzc29IZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICAgIGVzcHJlc3NvSGVhZGluZy50ZXh0Q29udGVudCA9ICdFc3ByZXNzbyBBZmZvZ2F0bydcbiAgICBlc3ByZXNzby5hcHBlbmRDaGlsZChlc3ByZXNzb0hlYWRpbmcpXG5cbiAgICBjb25zdCBlc3ByZXNzb1ByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICAgIGVzcHJlc3NvUHJpY2UudGV4dENvbnRlbnQgPSAnJDguMDAnXG4gICAgZXNwcmVzc28uYXBwZW5kQ2hpbGQoZXNwcmVzc29QcmljZSlcblxuICAgIGNvbnN0IG1vdXNzZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGVzc2VydHNHcmlkLmFwcGVuZENoaWxkKG1vdXNzZSlcblxuICAgIGNvbnN0IG1vdXNzZUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG4gICAgbW91c3NlSGVhZGluZy50ZXh0Q29udGVudCA9ICdCbGFjayAmIFdoaXRlIENob2NvbGF0ZSBNb3Vzc2UnXG4gICAgbW91c3NlLmFwcGVuZENoaWxkKG1vdXNzZUhlYWRpbmcpXG5cbiAgICBjb25zdCBtb3Vzc2VQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgICBtb3Vzc2VQcmljZS50ZXh0Q29udGVudCA9ICckNi4wMCdcbiAgICBtb3Vzc2UuYXBwZW5kQ2hpbGQobW91c3NlUHJpY2UpXG5cblxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0ICcuL3N0eWxlLmNzcydcbmltcG9ydCB7IGhvbWVDcmVhdGUgfSBmcm9tICcuL2hvbWUuanMnXG5pbXBvcnQgeyBhYm91dENyZWF0ZSB9IGZyb20gJy4vYWJvdXQuanMnXG5pbXBvcnQgeyBtZW51Q3JlYXRlIH0gZnJvbSAnLi9tZW51LmpzJ1xuaW1wb3J0IHsgY29udGFjdENyZWF0ZSB9IGZyb20gJy4vY29udGFjdC5qcydcbmltcG9ydCBJY29uIGZyb20gJy4vcGl6emEucG5nJ1xuXG5cblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jylcbi8qXG5uYXYgc3RydWN0dXJlXG5uYXYgZmxleCBjb250YWluZXJcbmxlZnQgc2lkZTogbG9nbzhqbW1tbm5tbiBtIFxucmlnaHQgc2lkZTogdWwgd2l0aCA0IGxpJ3MgXG4qL1xuXG4vL2NvbnRlbnQudGV4dENvbnRlbnQgPSAnSGVsbG8nXG5mdW5jdGlvbiBwYWdlTG9hZCgpIHtcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmF2KVxuICAgIFxuICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGxvZ28uc2V0QXR0cmlidXRlKCdjbGFzcycsICdsb2dvJylcbiAgICBsb2dvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaG9tZUNyZWF0ZSgpXG4gICAgfSlcbiAgICBuYXYuYXBwZW5kQ2hpbGQobG9nbylcblxuICAgIGNvbnN0IGljb24gPSBuZXcgSW1hZ2UoKVxuICAgIGljb24uc3JjID0gSWNvbjtcbiAgICBsb2dvLmFwcGVuZENoaWxkKGljb24pXG5cbiAgICBjb25zdCBsb2dvVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbiAgICBsb2dvVGV4dC50ZXh0Q29udGVudCA9IGBMdWlnaSdzYFxuICAgIGxvZ28uYXBwZW5kQ2hpbGQobG9nb1RleHQpXG5cbiAgICBjb25zdCB0YWJMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKVxuICAgIG5hdi5hcHBlbmRDaGlsZCh0YWJMaXN0KVxuXG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICBob21lLnRleHRDb250ZW50ID0gJ0hvbWUnXG4gICAgaG9tZS5zdHlsZS5jb2xvciA9ICdibHVlJ1xuICAgIHRhYkxpc3QuYXBwZW5kQ2hpbGQoaG9tZSlcbiAgICBob21lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaG9tZUNyZWF0ZSgpXG4gICAgfSlcblxuICAgIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgIGFib3V0LnRleHRDb250ZW50ID0gJ0Fib3V0J1xuICAgIGFib3V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICBhYm91dENyZWF0ZSgpXG4gICAgfSlcbiAgICB0YWJMaXN0LmFwcGVuZENoaWxkKGFib3V0KVxuXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICBtZW51LnRleHRDb250ZW50ID0gJ01lbnUnXG4gICAgbWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIG1lbnVDcmVhdGUoKVxuICAgIH0pXG4gICAgdGFiTGlzdC5hcHBlbmRDaGlsZChtZW51KVxuXG4gICAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICBjb250YWN0LnRleHRDb250ZW50ID0gJ0NvbnRhY3QnXG4gICAgY29udGFjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGNvbnRhY3RDcmVhdGUoKVxuICAgIH0pXG4gICAgdGFiTGlzdC5hcHBlbmRDaGlsZChjb250YWN0KVxuXG4gICAgY29uc3QgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJylcbiAgICB0YWJzLmZvckVhY2godGFiID0+IHtcbiAgICAgICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIHRhYnMuZm9yRWFjaCh0YWIgPT4gIHRhYi5zdHlsZS5jb2xvciA9ICdibGFjaycpXG4gICAgICAgICAgICB0YWIuc3R5bGUuY29sb3IgPSAnYmx1ZSdcbiAgICAgICAgfSlcbiAgICB9KVxuXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbilcblxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpXG4gICAgZm9vdGVyLnRleHRDb250ZW50ID0gYENvcHlyaWdodCBMdWlnaSdzIFBpenplcmlhYFxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKVxuXG4gICAgaG9tZUNyZWF0ZSgpXG59XG5cbmRvY3VtZW50Lm9ubG9hZCA9IHBhZ2VMb2FkKCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=