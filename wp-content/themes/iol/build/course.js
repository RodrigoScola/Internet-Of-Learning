/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pages/components/Icon.js":
/*!**************************************!*\
  !*** ./src/pages/components/Icon.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetIcon": () => (/* binding */ GetIcon),
/* harmony export */   "Icon": () => (/* binding */ Icon)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

 // php and react are using different icons, need to create new folder to store the icons or invent a different solution

const GetIcon = async iconname => {
  const icon = await __webpack_require__.e(/*! import() */ "icons_ArrowUp_svg").then(__webpack_require__.bind(__webpack_require__, /*! ../../../icons/ArrowUp.svg */ "./icons/ArrowUp.svg"));
  console.log(icon.default);
  return icon;
};
/**
 *
 *
 * @param {(beginner|intermediate|advanced)} { iconName = '' }
 */

const Icon = _ref => {
  let {
    iconName = ""
  } = _ref;
  const [currIcon, SetCurrIcon] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (iconName) {
      SetCurrIcon(iconName.toLowerCase());
    }
  }, [iconName]);
  console.log(getIcon("asdf"));

  switch (currIcon) {
    case "list":
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
        width: "18",
        height: "18",
        viewBox: "0 0 18 18",
        fill: "currentColor",
        xmlns: "http://www.w3.org/2000/svg"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M4.5 13.85C4.7 13.85 4.875 13.775 5.025 13.625C5.175 13.475 5.25 13.3 5.25 13.1C5.25 12.9 5.175 12.725 5.025 12.575C4.875 12.425 4.7 12.35 4.5 12.35C4.3 12.35 4.125 12.425 3.975 12.575C3.825 12.725 3.75 12.9 3.75 13.1C3.75 13.3 3.825 13.475 3.975 13.625C4.125 13.775 4.3 13.85 4.5 13.85ZM4.5 9.75C4.7 9.75 4.875 9.675 5.025 9.525C5.175 9.375 5.25 9.2 5.25 9C5.25 8.8 5.175 8.625 5.025 8.475C4.875 8.325 4.7 8.25 4.5 8.25C4.3 8.25 4.125 8.325 3.975 8.475C3.825 8.625 3.75 8.8 3.75 9C3.75 9.2 3.825 9.375 3.975 9.525C4.125 9.675 4.3 9.75 4.5 9.75ZM4.5 5.65C4.7 5.65 4.875 5.575 5.025 5.425C5.175 5.275 5.25 5.1 5.25 4.9C5.25 4.7 5.175 4.525 5.025 4.375C4.875 4.225 4.7 4.15 4.5 4.15C4.3 4.15 4.125 4.225 3.975 4.375C3.825 4.525 3.75 4.7 3.75 4.9C3.75 5.1 3.825 5.275 3.975 5.425C4.125 5.575 4.3 5.65 4.5 5.65ZM7.8 13.85H13.9V12.35H7.8V13.85ZM7.8 9.75H13.9V8.25H7.8V9.75ZM7.8 5.65H13.9V4.15H7.8V5.65ZM1.5 18C1.1 18 0.75 17.85 0.45 17.55C0.15 17.25 0 16.9 0 16.5V1.5C0 1.1 0.15 0.75 0.45 0.45C0.75 0.15 1.1 0 1.5 0H16.5C16.9 0 17.25 0.15 17.55 0.45C17.85 0.75 18 1.1 18 1.5V16.5C18 16.9 17.85 17.25 17.55 17.55C17.25 17.85 16.9 18 16.5 18H1.5ZM1.5 16.5H16.5V1.5H1.5V16.5ZM1.5 1.5V16.5V1.5Z",
        fill: "currentColor"
      }));

    case "beginner":
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
        width: "12",
        height: "10",
        viewBox: "0 0 12 10",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("mask", {
        id: "path-1-inside-1_2168_1481",
        fill: "white"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M0 6.5H3V9.5H0V6.5Z"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M4.5 3.5H7.5V9.5H4.5V3.5Z"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M9 0.5H12V9.5H9V0.5Z"
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M0 6.5H3V9.5H0V6.5Z",
        fill: "#282828"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M0 6.5V5.75H-0.75V6.5H0ZM3 6.5H3.75V5.75H3V6.5ZM3 9.5V10.25H3.75V9.5H3ZM0 9.5H-0.75V10.25H0V9.5ZM4.5 3.5V2.75H3.75V3.5H4.5ZM7.5 3.5H8.25V2.75H7.5V3.5ZM7.5 9.5V10.25H8.25V9.5H7.5ZM4.5 9.5H3.75V10.25H4.5V9.5ZM9 0.5V-0.25H8.25V0.5H9ZM12 0.5H12.75V-0.25H12V0.5ZM12 9.5V10.25H12.75V9.5H12ZM9 9.5H8.25V10.25H9V9.5ZM0 7.25H3V5.75H0V7.25ZM2.25 6.5V9.5H3.75V6.5H2.25ZM3 8.75H0V10.25H3V8.75ZM0.75 9.5V6.5H-0.75V9.5H0.75ZM4.5 4.25H7.5V2.75H4.5V4.25ZM6.75 3.5V9.5H8.25V3.5H6.75ZM7.5 8.75H4.5V10.25H7.5V8.75ZM5.25 9.5V3.5H3.75V9.5H5.25ZM9 1.25H12V-0.25H9V1.25ZM11.25 0.5V9.5H12.75V0.5H11.25ZM12 8.75H9V10.25H12V8.75ZM9.75 9.5V0.5H8.25V9.5H9.75Z",
        fill: "#282828",
        mask: "url(#path-1-inside-1_2168_1481)"
      })));

    case "intermediate":
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
        width: "12",
        height: "10",
        viewBox: "0 0 12 10",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("mask", {
        id: "path-1-inside-1_2168_3193",
        fill: "white"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M0 6.5H3V9.5H0V6.5Z"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M4.5 3.5H7.5V9.5H4.5V3.5Z"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M9 0.5H12V9.5H9V0.5Z"
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M0 6.5H3V9.5H0V6.5Z",
        fill: "#282828"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M4.5 3.5H7.5V9.5H4.5V3.5Z",
        fill: "#282828"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M0 6.5V5.75H-0.75V6.5H0ZM3 6.5H3.75V5.75H3V6.5ZM3 9.5V10.25H3.75V9.5H3ZM0 9.5H-0.75V10.25H0V9.5ZM4.5 3.5V2.75H3.75V3.5H4.5ZM7.5 3.5H8.25V2.75H7.5V3.5ZM7.5 9.5V10.25H8.25V9.5H7.5ZM4.5 9.5H3.75V10.25H4.5V9.5ZM9 0.5V-0.25H8.25V0.5H9ZM12 0.5H12.75V-0.25H12V0.5ZM12 9.5V10.25H12.75V9.5H12ZM9 9.5H8.25V10.25H9V9.5ZM0 7.25H3V5.75H0V7.25ZM2.25 6.5V9.5H3.75V6.5H2.25ZM3 8.75H0V10.25H3V8.75ZM0.75 9.5V6.5H-0.75V9.5H0.75ZM4.5 4.25H7.5V2.75H4.5V4.25ZM6.75 3.5V9.5H8.25V3.5H6.75ZM7.5 8.75H4.5V10.25H7.5V8.75ZM5.25 9.5V3.5H3.75V9.5H5.25ZM9 1.25H12V-0.25H9V1.25ZM11.25 0.5V9.5H12.75V0.5H11.25ZM12 8.75H9V10.25H12V8.75ZM9.75 9.5V0.5H8.25V9.5H9.75Z",
        fill: "#282828",
        mask: "url(#path-1-inside-1_2168_3193)"
      }));

    case "advanced":
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
        width: "12",
        height: "10",
        viewBox: "0 0 12 10",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M0.375 6.875H2.625V9.125H0.375V6.875ZM4.875 3.875H7.125V9.125H4.875V3.875ZM9.375 0.875H11.625V9.125H9.375V0.875Z",
        fill: "#282828",
        stroke: "#282828",
        "stroke-width": "0.75"
      }));

    case "star":
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "currentColor",
        xmlns: "http://www.w3.org/2000/svg"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M8 12.4298L11.9892 15.3326C12.6217 15.8029 13.4811 15.1704 13.2379 14.4245L11.7135 9.73793L15.6541 6.9325C16.3028 6.47844 15.9785 5.45681 15.1839 5.45681H10.3514L8.77839 0.559465C8.53514 -0.186488 7.48108 -0.186488 7.23783 0.559465L5.64863 5.45681H0.816148C0.0215454 5.45681 -0.302782 6.47844 0.345873 6.9325L4.28645 9.73793L2.76211 14.4245C2.51887 15.1704 3.37833 15.7866 4.01077 15.3326L8 12.4298Z",
        fill: "currentColor"
      }));

    default:
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null);
  }
};

/***/ }),

/***/ "./src/pages/components/ui/Alert.js":
/*!******************************************!*\
  !*** ./src/pages/components/ui/Alert.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertDialog": () => (/* binding */ AlertDialog),
/* harmony export */   "AlertDialogHeader": () => (/* binding */ AlertDialogHeader)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useOutsideClick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useOutsideClick */ "./src/pages/hooks/useOutsideClick.js");
/* harmony import */ var _hooks_useDisclosure__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useDisclosure */ "./src/pages/hooks/useDisclosure.js");




const AlertDialog = _ref => {
  let {
    isOpen,
    onClose,
    children
  } = _ref;
  const wrapperRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  (0,_hooks_useOutsideClick__WEBPACK_IMPORTED_MODULE_2__.useOutsudeClick)(wrapperRef, onClose);

  if (isOpen) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("aside", {
      className: `alert pt-3 `
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ref: wrapperRef,
      className: "bg-white  w-90 p-1 h-fit m-auto zoom-in  container"
    }, children));
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null);
};
const AlertDialogHeader = () => {
  return;
};

/***/ }),

/***/ "./src/pages/hooks/useDisclosure.js":
/*!******************************************!*\
  !*** ./src/pages/hooks/useDisclosure.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useDisclosure": () => (/* binding */ useDisclosure)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useDisclosure() {
  let initialProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    defaultIsOpen: false
  };
  const [isOpen, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialProps.defaultIsOpen);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {}, [isOpen]);

  const onOpen = () => {
    return setOpen(true);
  };

  const onClose = () => {
    return setOpen(false);
  };

  const ontoggle = () => {
    return setOpen(curr => !curr);
  };

  return {
    isOpen,
    onClose,
    onOpen,
    ontoggle
  };
}

/***/ }),

/***/ "./src/pages/hooks/useOutsideClick.js":
/*!********************************************!*\
  !*** ./src/pages/hooks/useOutsideClick.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useOutsudeClick": () => (/* binding */ useOutsudeClick)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useOutsudeClick(ref, callback) {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        if (typeof callback == 'function') {
          callback(event.target);
        }
      }
    } // Bind the event listener


    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

module.exports = window["ReactDOM"];

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ ((module) => {

module.exports = window["jQuery"];

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
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
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "fictional-university-theme:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"course": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
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
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkfictional_university_theme"] = globalThis["webpackChunkfictional_university_theme"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./src/pages/course.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Icon */ "./src/pages/components/Icon.js");
/* harmony import */ var _hooks_useDisclosure__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hooks/useDisclosure */ "./src/pages/hooks/useDisclosure.js");
/* harmony import */ var _components_ui_Alert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/ui/Alert */ "./src/pages/components/ui/Alert.js");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);









const subitRev = _ref => {
  let {
    score,
    content
  } = _ref;
  jquery__WEBPACK_IMPORTED_MODULE_7___default().ajax({
    beforeSend: xhr => {
      xhr.setRequestHeader("X-WP-Nonce", ioldata.nonce);
    },
    url: ioldata.root_url + "/wp-json/iol/v1/review",
    type: "POST",
    data: {
      course_id: ioldata.post_id,
      user_id: ioldata.user_id,
      score: score,
      content: content
    },
    success: res => {},
    error: res => {}
  });
};

window.addEventListener("load", () => {
  const divs = document.querySelectorAll(".addReview");
  divs.forEach(item => {
    react_dom__WEBPACK_IMPORTED_MODULE_2___default().render((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ReviewComponent, {
      classes: item.getAttribute("data-class"),
      title: ioldata.slug
    }), item);
  });
});

const ReviewComponent = _ref2 => {
  let {
    title = ioldata.slug,
    initialScore = 0,
    classes = "btn btn-blue"
  } = _ref2;
  const [reviewContent, setReviewContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const [count, setCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialScore);
  const {
    isOpen,
    onClose,
    onOpen,
    ontoggle
  } = (0,_hooks_useDisclosure__WEBPACK_IMPORTED_MODULE_4__.useDisclosure)();
  const [reviewScore, setReviewScore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);

  const submitReview = async () => {
    if (reviewScore <= 0 || reviewScore > 5 || !reviewContent) return false;
    const data = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_6___default()({
      url: "/wp-json/iol/v1/review",
      data: {
        course_id: ioldata.post_id,
        user_id: ioldata.user_id,
        score: reviewScore,
        content: reviewContent
      },
      method: "POST",
      headers: {
        "X-WP-Nonce": ioldata.nonce
      }
    }).then(res => {
      window.location.reload();
    });
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    onClick: e => {
      if (ioldata.user_id == 0) {
        window.location.replace(ioldata.root_url + "/login/?path=course");
      }

      onOpen();
      e.preventDefault();
    },
    className: classes
  }, "Write a Review"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_ui_Alert__WEBPACK_IMPORTED_MODULE_5__.AlertDialog, {
    isOpen: isOpen,
    onClose: onClose
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("aside", {
    className: "black"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: "text text-left text-title bold black"
  }, title.replace(/-/g, " ")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "text-left"
  }, "Write down your experience with the course and the educator. You are helping The Internet of Learning and The Course a lot!")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("aside", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "black text-left bold"
  }, "*Rating"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    onMouseLeave: () => setCount(reviewScore > 0 ? reviewScore : initialScore),
    id: "starReviews",
    className: "flex flex-row mv-2 flex-left"
  }, new Array(5).fill(null).map((v, i) => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      onClick: () => {
        setReviewScore(i + 1);
      },
      onMouseEnter: () => setCount(i),
      className: `reviewStar ${count <= i || reviewScore <= i && reviewScore > 0 ? "gray" : "yellow"}`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Icon__WEBPACK_IMPORTED_MODULE_3__.Icon, {
      iconName: "star"
    }));
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("textarea", {
    style: {
      width: "100%"
    },
    value: reviewContent,
    onChange: e => setReviewContent(e.target.value)
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "text-left black"
  }, "(", 280 - reviewContent.length, ")Characters remaining")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex flex-row flex-right"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    onClick: onClose,
    className: "btn ph-2 btn-red-hollow"
  }, "Cancel"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    onClick: submitReview,
    className: "btn mh-3 btn-yellow bold"
  }, "Submit Review"))));
};
})();

/******/ })()
;
//# sourceMappingURL=course.js.map