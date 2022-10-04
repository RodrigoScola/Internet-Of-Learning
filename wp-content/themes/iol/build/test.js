/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pages/components/CategorySelect.js":
/*!************************************************!*\
  !*** ./src/pages/components/CategorySelect.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ElementSelect": () => (/* binding */ ElementSelect)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-toast */ "./node_modules/react-hot-toast/dist/index.mjs");
/* harmony import */ var _ui_Tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/Tooltip */ "./src/pages/components/ui/Tooltip.js");




const ElementSelect = _ref => {
  let {
    elements,
    defaultSelected = [],
    setElements
  } = _ref;
  const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([...defaultSelected]);
  const [cat, setCat] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(elements);
  const [justRemoved, setJustRemoved] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();

  const errorToast = message => {
    react_hot_toast__WEBPACK_IMPORTED_MODULE_2__["default"].error(message, {
      position: "bottom-center",
      className: "bg-white red border-red"
    });
  }; // change to use Set instead of filters and reducers


  const removeItem = v => {
    const nset = new Set([...selected]);
    nset.delete(v);
    setSelected([...nset]);
    const sorted = [...cat, v].sort((a, b) => b.id - a.id);
    setCat(sorted);
  };

  const additem = v => {
    if (selected.length >= 3) return null;
    const sorted = selected.sort((a, b) => a.id - b.id);
    const nset = new Set(sorted);
    nset.delete(v);
    setSelected(curr => [...curr, v]);
    const withoutItem = cat.filter(item => item.id != v.id);
    setCat(withoutItem);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const ids = selected.map((category, idx) => category.id);
    setElements(ids);
  }, [selected]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (elements) {
      const nset = new Set([...elements]);
      setCat([...nset.difference(defaultSelected)]);
    }
  }, [elements]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: "text-title bold text-center"
  }, selected.length, "/3 Categories Selected"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex flex-center "
  }, selected && selected.map((v, i) => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      onClick: () => removeItem(v),
      className: "btn zoom-in m-05 btn-yellow-dt"
    }, v.name.replace(/&amp;/g, "&")));
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "divider"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex flex-center "
  }, cat && cat.map((v, i) => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      onClick: () => {
        additem(v);

        if (selected.length == 3) {
          errorToast("you can only add 3 categories");
        }
      },
      className: `btn ${justRemoved == v.id ? "zoom-in" : ""}  ${selected.length == 3 ? "error" : ""} m-05 btn-blue-hollow`
    }, v.name.replace(/&amp;/g, "&"));
  })));
};

/***/ }),

/***/ "./src/pages/components/ReviewComponent.js":
/*!*************************************************!*\
  !*** ./src/pages/components/ReviewComponent.js ***!
  \*************************************************/
/***/ (() => {

// import React, { useState } from 'react';
// import { useDisclosure } from '../hooks/useDisclosure';
// import { Icon } from './Icon';
// import { AlertDialog, AlertDialogHeader } from './ui/Alert';
// import apiFetch from "@wordpress/api-fetch"
// export const ReviewComponent = ({
//      title = 'Building car Empire',
//      initialScore = 3,
// }) => {
//      const [reviewContent, setReviewContent] = useState('');
//      const [count, setCount] = useState(initialScore)
//      const { isOpen, onClose, onOpen, ontoggle } = useDisclosure()
//      const [reviewScore, setReviewScore] = useState(0);
//      console.log(reviewScore)
//      const submitReview =async  () => {
// 		const data = await apiFetch({
// 			url:  "/wp-json/iol/v1/review",
//                type: "POST",
// 			headers: {
// 				"X-WP-Nonce": ioldata.nonce,
//                },
//                data: {
// 				course_id: ioldata.post_id,
// 				user_id: ioldata.user_id,
// 				score:  reviewScore > 0 ? reviewScore : initialScore,
//                     content: reviewContent,
// 			},
// 		}).then((res) => {
// 			console.log(res)
// 		})
// }
//      // $.ajax({
// // 			beforeSend: (xhr) => {
// // 				xhr.setRequestHeader("X-WP-Nonce", ioldata.nonce)
// // 			},
// // 			url: ioldata.root_url + "/wp-json/iol/v1/review",
// // 			type: "POST",
// // 			data: {
// // 				course_id: ioldata.post_id,
// // 				user_id: ioldata.user_id,
// // 				score: this.score,
// // 				content: $("#review-experience").val(),
// // 			},
// // 			success: (res) => {
// // 				console.log(res, "res")
// // 			},
// // 			error: (res) => {
// // 				console.log(res, "err")
// // 			},
// // 		})
//      return (
// 		<>
//                <button onClick={(e) => {
//                     onOpen()
//                     e.preventDefault()
//                }} className="btn white btn-blue">
// 				Write a Review
// 			</button>
// 			<AlertDialog isOpen={isOpen} onClose={onClose}>
// 				<aside className="black">
// 					<h1 className="text text-title bold black">{title}</h1>
// 					<p>
// 						Write down your experience with the course and the educator. You are helping The Internet
// 						of Learning and The Course a lot!
// 					</p>
// 				</aside>
// 				<aside>
// 					<p className="text-left black bold">*Rating</p>
//                          <div onMouseLeave={() => setCount(reviewScore > 0 ? reviewScore : initialScore)} id='starReviews' className=' text-left flex flex-row mv-2 flex-left'>
//                               {
//                                    new Array(5).fill(null).map((v, i) => {
//                                         return (
// 									<div
// 										onClick={() => {
// 											setReviewScore(i + 1)
// 										}}
// 										onMouseEnter={() => setCount(i)}
// 										className={`reviewStar ${
// 											count <= i || reviewScore <= i && reviewScore > 0 ? "gray" : "yellow"
// 										}`}
// 									>
// 										<Icon iconName="star" />
// 									</div>
// 								)
//                                    })
//                               }
//                          </div>
// 					<textarea value={reviewContent} maxLength={280} onChange={e => setReviewContent(e.target.value)}></textarea>
// 					<p className="black text-left">({280 - reviewContent.length})Characters remaining</p>
// 				</aside>
// 				<div className="flex flex-row flex-right">
// 					<button onClick={onClose} className="btn ph-2 btn-red-hollow">
// 						Cancel
// 					</button>
// 					<button onClick={submitReview} className="btn mh-3 btn-yellow bold">Submit Review</button>
// 				</div>
// 			</AlertDialog>
// 		</>
// 	)
// }

/***/ }),

/***/ "./src/pages/components/ui/Alert.js":
/*!******************************************!*\
  !*** ./src/pages/components/ui/Alert.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./src/pages/components/ui/Tooltip.js":
/*!********************************************!*\
  !*** ./src/pages/components/ui/Tooltip.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tooltip": () => (/* binding */ Tooltip)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Tooltip = _ref => {
  let {
    position = "right",
    textColor = "black",
    color = "gray",
    children,
    text = ""
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tp"
  }, text, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: ` tp-text_${position} bg-${color} ${textColor}  zoom-in`
  }, children));
};

/***/ }),

/***/ "./src/pages/hooks/useDisclosure.js":
/*!******************************************!*\
  !*** ./src/pages/hooks/useDisclosure.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = window["ReactDOM"];

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "./node_modules/goober/dist/goober.modern.js":
/*!***************************************************!*\
  !*** ./node_modules/goober/dist/goober.modern.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "css": () => (/* binding */ u),
/* harmony export */   "extractCss": () => (/* binding */ r),
/* harmony export */   "glob": () => (/* binding */ b),
/* harmony export */   "keyframes": () => (/* binding */ h),
/* harmony export */   "setup": () => (/* binding */ m),
/* harmony export */   "styled": () => (/* binding */ j)
/* harmony export */ });
let e={data:""},t=t=>"object"==typeof window?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||e,r=e=>{let r=t(e),l=r.data;return r.data="",l},l=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,a=/\/\*[^]*?\*\/|  +/g,n=/\n+/g,o=(e,t)=>{let r="",l="",a="";for(let n in e){let c=e[n];"@"==n[0]?"i"==n[1]?r=n+" "+c+";":l+="f"==n[1]?o(c,n):n+"{"+o(c,"k"==n[1]?"":t)+"}":"object"==typeof c?l+=o(c,t?t.replace(/([^,])+/g,e=>n.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):n):null!=c&&(n=/^--/.test(n)?n:n.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=o.p?o.p(n,c):n+":"+c+";")}return r+(t&&a?t+"{"+a+"}":a)+l},c={},s=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+s(e[r]);return t}return e},i=(e,t,r,i,p)=>{let u=s(e),d=c[u]||(c[u]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(u));if(!c[d]){let t=u!==e?e:(e=>{let t,r,o=[{}];for(;t=l.exec(e.replace(a,""));)t[4]?o.shift():t[3]?(r=t[3].replace(n," ").trim(),o.unshift(o[0][r]=o[0][r]||{})):o[0][t[1]]=t[2].replace(n," ").trim();return o[0]})(e);c[d]=o(p?{["@keyframes "+d]:t}:t,r?"":"."+d)}let f=r&&c.g?c.g:null;return r&&(c.g=c[d]),((e,t,r,l)=>{l?t.data=t.data.replace(l,e):-1===t.data.indexOf(e)&&(t.data=r?e+t.data:t.data+e)})(c[d],t,i,f),d},p=(e,t,r)=>e.reduce((e,l,a)=>{let n=t[a];if(n&&n.call){let e=n(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;n=t?"."+t:e&&"object"==typeof e?e.props?"":o(e,""):!1===e?"":e}return e+l+(null==n?"":n)},"");function u(e){let r=this||{},l=e.call?e(r.p):e;return i(l.unshift?l.raw?p(l,[].slice.call(arguments,1),r.p):l.reduce((e,t)=>Object.assign(e,t&&t.call?t(r.p):t),{}):l,t(r.target),r.g,r.o,r.k)}let d,f,g,b=u.bind({g:1}),h=u.bind({k:1});function m(e,t,r,l){o.p=t,d=e,f=r,g=l}function j(e,t){let r=this||{};return function(){let l=arguments;function a(n,o){let c=Object.assign({},n),s=c.className||a.className;r.p=Object.assign({theme:f&&f()},c),r.o=/ *go\d+/.test(s),c.className=u.apply(r,l)+(s?" "+s:""),t&&(c.ref=o);let i=e;return e[0]&&(i=c.as||e,delete c.as),g&&i[0]&&g(c),d(i,c)}return t?t(a):a}}


/***/ }),

/***/ "./node_modules/react-hot-toast/dist/index.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/react-hot-toast/dist/index.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckmarkIcon": () => (/* binding */ w),
/* harmony export */   "ErrorIcon": () => (/* binding */ _),
/* harmony export */   "LoaderIcon": () => (/* binding */ V),
/* harmony export */   "ToastBar": () => (/* binding */ F),
/* harmony export */   "ToastIcon": () => (/* binding */ M),
/* harmony export */   "Toaster": () => (/* binding */ Ie),
/* harmony export */   "default": () => (/* binding */ _t),
/* harmony export */   "resolveValue": () => (/* binding */ T),
/* harmony export */   "toast": () => (/* binding */ n),
/* harmony export */   "useToaster": () => (/* binding */ D),
/* harmony export */   "useToasterStore": () => (/* binding */ I)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var goober__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! goober */ "./node_modules/goober/dist/goober.modern.js");
var W=e=>typeof e=="function",T=(e,t)=>W(e)?e(t):e;var U=(()=>{let e=0;return()=>(++e).toString()})(),b=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})();var Q=20;var S=new Map,X=1e3,$=e=>{if(S.has(e))return;let t=setTimeout(()=>{S.delete(e),u({type:4,toastId:e})},X);S.set(e,t)},J=e=>{let t=S.get(e);t&&clearTimeout(t)},v=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,Q)};case 1:return t.toast.id&&J(t.toast.id),{...e,toasts:e.toasts.map(r=>r.id===t.toast.id?{...r,...t.toast}:r)};case 2:let{toast:o}=t;return e.toasts.find(r=>r.id===o.id)?v(e,{type:1,toast:o}):v(e,{type:0,toast:o});case 3:let{toastId:s}=t;return s?$(s):e.toasts.forEach(r=>{$(r.id)}),{...e,toasts:e.toasts.map(r=>r.id===s||s===void 0?{...r,visible:!1}:r)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(r=>r.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let a=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(r=>({...r,pauseDuration:r.pauseDuration+a}))}}},A=[],P={toasts:[],pausedAt:void 0},u=e=>{P=v(P,e),A.forEach(t=>{t(P)})},Y={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},I=(e={})=>{let[t,o]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(P);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>(A.push(o),()=>{let a=A.indexOf(o);a>-1&&A.splice(a,1)}),[t]);let s=t.toasts.map(a=>{var r,c;return{...e,...e[a.type],...a,duration:a.duration||((r=e[a.type])==null?void 0:r.duration)||(e==null?void 0:e.duration)||Y[a.type],style:{...e.style,...(c=e[a.type])==null?void 0:c.style,...a.style}}});return{...t,toasts:s}};var G=(e,t="blank",o)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...o,id:(o==null?void 0:o.id)||U()}),h=e=>(t,o)=>{let s=G(t,e,o);return u({type:2,toast:s}),s.id},n=(e,t)=>h("blank")(e,t);n.error=h("error");n.success=h("success");n.loading=h("loading");n.custom=h("custom");n.dismiss=e=>{u({type:3,toastId:e})};n.remove=e=>u({type:4,toastId:e});n.promise=(e,t,o)=>{let s=n.loading(t.loading,{...o,...o==null?void 0:o.loading});return e.then(a=>(n.success(T(t.success,a),{id:s,...o,...o==null?void 0:o.success}),a)).catch(a=>{n.error(T(t.error,a),{id:s,...o,...o==null?void 0:o.error})}),e};var Z=(e,t)=>{u({type:1,toast:{id:e,height:t}})},ee=()=>{u({type:5,time:Date.now()})},D=e=>{let{toasts:t,pausedAt:o}=I(e);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(o)return;let r=Date.now(),c=t.map(i=>{if(i.duration===1/0)return;let d=(i.duration||0)+i.pauseDuration-(r-i.createdAt);if(d<0){i.visible&&n.dismiss(i.id);return}return setTimeout(()=>n.dismiss(i.id),d)});return()=>{c.forEach(i=>i&&clearTimeout(i))}},[t,o]);let s=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{o&&u({type:6,time:Date.now()})},[o]),a=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((r,c)=>{let{reverseOrder:i=!1,gutter:d=8,defaultPosition:p}=c||{},g=t.filter(m=>(m.position||p)===(r.position||p)&&m.height),E=g.findIndex(m=>m.id===r.id),x=g.filter((m,R)=>R<E&&m.visible).length;return g.filter(m=>m.visible).slice(...i?[x+1]:[0,x]).reduce((m,R)=>m+(R.height||0)+d,0)},[t]);return{toasts:t,handlers:{updateHeight:Z,startPause:ee,endPause:s,calculateOffset:a}}};var oe=goober__WEBPACK_IMPORTED_MODULE_1__.keyframes`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,re=goober__WEBPACK_IMPORTED_MODULE_1__.keyframes`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,se=goober__WEBPACK_IMPORTED_MODULE_1__.keyframes`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,_=(0,goober__WEBPACK_IMPORTED_MODULE_1__.styled)("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${oe} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${re} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${se} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`;var ne=goober__WEBPACK_IMPORTED_MODULE_1__.keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,V=(0,goober__WEBPACK_IMPORTED_MODULE_1__.styled)("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${ne} 1s linear infinite;
`;var pe=goober__WEBPACK_IMPORTED_MODULE_1__.keyframes`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,de=goober__WEBPACK_IMPORTED_MODULE_1__.keyframes`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,w=(0,goober__WEBPACK_IMPORTED_MODULE_1__.styled)("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${pe} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${de} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`;var ue=(0,goober__WEBPACK_IMPORTED_MODULE_1__.styled)("div")`
  position: absolute;
`,le=(0,goober__WEBPACK_IMPORTED_MODULE_1__.styled)("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Te=goober__WEBPACK_IMPORTED_MODULE_1__.keyframes`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,fe=(0,goober__WEBPACK_IMPORTED_MODULE_1__.styled)("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Te} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,M=({toast:e})=>{let{icon:t,type:o,iconTheme:s}=e;return t!==void 0?typeof t=="string"?react__WEBPACK_IMPORTED_MODULE_0__.createElement(fe,null,t):t:o==="blank"?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(le,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(V,{...s}),o!=="loading"&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(ue,null,o==="error"?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_,{...s}):react__WEBPACK_IMPORTED_MODULE_0__.createElement(w,{...s})))};var ye=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,ge=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,he="0%{opacity:0;} 100%{opacity:1;}",xe="0%{opacity:1;} 100%{opacity:0;}",be=(0,goober__WEBPACK_IMPORTED_MODULE_1__.styled)("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Se=(0,goober__WEBPACK_IMPORTED_MODULE_1__.styled)("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Ae=(e,t)=>{let s=e.includes("top")?1:-1,[a,r]=b()?[he,xe]:[ye(s),ge(s)];return{animation:t?`${(0,goober__WEBPACK_IMPORTED_MODULE_1__.keyframes)(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${(0,goober__WEBPACK_IMPORTED_MODULE_1__.keyframes)(r)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},F=react__WEBPACK_IMPORTED_MODULE_0__.memo(({toast:e,position:t,style:o,children:s})=>{let a=e.height?Ae(e.position||t||"top-center",e.visible):{opacity:0},r=react__WEBPACK_IMPORTED_MODULE_0__.createElement(M,{toast:e}),c=react__WEBPACK_IMPORTED_MODULE_0__.createElement(Se,{...e.ariaProps},T(e.message,e));return react__WEBPACK_IMPORTED_MODULE_0__.createElement(be,{className:e.className,style:{...a,...o,...e.style}},typeof s=="function"?s({icon:r,message:c}):react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,r,c))});(0,goober__WEBPACK_IMPORTED_MODULE_1__.setup)(react__WEBPACK_IMPORTED_MODULE_0__.createElement);var Ee=({id:e,className:t,style:o,onHeightUpdate:s,children:a})=>{let r=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(c=>{if(c){let i=()=>{let d=c.getBoundingClientRect().height;s(e,d)};i(),new MutationObserver(i).observe(c,{subtree:!0,childList:!0,characterData:!0})}},[e,s]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{ref:r,className:t,style:o},a)},Re=(e,t)=>{let o=e.includes("top"),s=o?{top:0}:{bottom:0},a=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:b()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(o?1:-1)}px)`,...s,...a}},ve=goober__WEBPACK_IMPORTED_MODULE_1__.css`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,O=16,Ie=({reverseOrder:e,position:t="top-center",toastOptions:o,gutter:s,children:a,containerStyle:r,containerClassName:c})=>{let{toasts:i,handlers:d}=D(o);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{position:"fixed",zIndex:9999,top:O,left:O,right:O,bottom:O,pointerEvents:"none",...r},className:c,onMouseEnter:d.startPause,onMouseLeave:d.endPause},i.map(p=>{let g=p.position||t,E=d.calculateOffset(p,{reverseOrder:e,gutter:s,defaultPosition:t}),x=Re(g,E);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Ee,{id:p.id,key:p.id,onHeightUpdate:d.updateHeight,className:p.visible?ve:"",style:x},p.type==="custom"?T(p.message,p):a?a(p):react__WEBPACK_IMPORTED_MODULE_0__.createElement(F,{toast:p,position:g}))}))};var _t=n;
//# sourceMappingURL=index.mjs.map

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***************************!*\
  !*** ./src/pages/test.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useDisclosure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hooks/useDisclosure */ "./src/pages/hooks/useDisclosure.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_ui_Tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/ui/Tooltip */ "./src/pages/components/ui/Tooltip.js");
/* harmony import */ var _components_ui_Alert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/ui/Alert */ "./src/pages/components/ui/Alert.js");
/* harmony import */ var _hooks_useOutsideClick__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hooks/useOutsideClick */ "./src/pages/hooks/useOutsideClick.js");
/* harmony import */ var _components_CategorySelect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/CategorySelect */ "./src/pages/components/CategorySelect.js");
/* harmony import */ var _components_ReviewComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/ReviewComponent */ "./src/pages/components/ReviewComponent.js");
/* harmony import */ var _components_ReviewComponent__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_components_ReviewComponent__WEBPACK_IMPORTED_MODULE_9__);










window.addEventListener('load', () => {
  const div = document.querySelectorAll('#jsx');
  div.forEach(elem => {
    react_dom__WEBPACK_IMPORTED_MODULE_3___default().render((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RenderComponent, null), elem);
  });
});

function RenderComponent() {
  const [cat, setCat] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const go = async () => {
      const data = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default()({
        url: '/wp-json/wp/v2/categories'
      });
      setCat(data);
    };

    go();
  }, []);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", null, "Modals"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(AlertDialogExample, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToastExample, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_ReviewComponent__WEBPACK_IMPORTED_MODULE_9__.ReviewComponent, null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_CategorySelect__WEBPACK_IMPORTED_MODULE_8__.ElementSelect, {
    elements: cat,
    setElements: setCat
  }));
}

function ToastExample() {
  const {
    isOpen,
    ontoggle,
    onClose
  } = (0,_hooks_useDisclosure__WEBPACK_IMPORTED_MODULE_2__.useDisclosure)();
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    onClick: ontoggle,
    className: "btn btn-yellow"
  }, "Toast"));
}

function AlertDialogExample() {
  const {
    isOpen,
    onClose,
    onOpen,
    ontoggle
  } = (0,_hooks_useDisclosure__WEBPACK_IMPORTED_MODULE_2__.useDisclosure)();
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    onClick: onOpen,
    className: "btn btn-red-hollow "
  }, "Alert Dialogue"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_ui_Alert__WEBPACK_IMPORTED_MODULE_6__.AlertDialog, {
    isOpen: isOpen,
    onClose: onClose
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    onClick: onClose,
    className: "right black"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    class: "bi bi-x-lg"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: "black text-title"
  }, "Are you sure you want to delete this user?"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "black"
  }, "This user has done nothing wrong for us, are you sure you want to ruin our establishment?"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex flex-row flex-right"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    onClick: onClose,
    className: "btn ph-2 btn-red-hollow"
  }, "Cancel"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "btn mh-3 btn-yellow"
  }, "Continue"))));
}
})();

/******/ })()
;
//# sourceMappingURL=test.js.map