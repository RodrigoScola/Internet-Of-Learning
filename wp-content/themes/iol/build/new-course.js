/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pages/components/CategorySelect.js":
/*!************************************************!*\
  !*** ./src/pages/components/CategorySelect.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./src/pages/components/courseForm.js":
/*!********************************************!*\
  !*** ./src/pages/components/courseForm.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CourseForm": () => (/* binding */ CourseForm)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-toast */ "./node_modules/react-hot-toast/dist/index.mjs");
/* harmony import */ var _CategorySelect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CategorySelect */ "./src/pages/components/CategorySelect.js");
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./input */ "./src/pages/components/input.js");
/* harmony import */ var _ui_LoadHighlights__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/LoadHighlights */ "./src/pages/components/ui/LoadHighlights.js");






const CourseForm = _ref => {
  let {
    bannerImage,
    formState,
    fileChoose: courseImage,
    profileImage,
    categories,
    owninformation,
    setOwnInfo,
    setFormState,
    changeImage,
    highlights,
    setHighlights
  } = _ref;

  const handleChange = e => {
    setFormState({
      [e.target.name]: e.target.value
    });
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", {
    onSubmit: e => e.preventDefault(),
    class: "gridcol-2 formInput"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_input__WEBPACK_IMPORTED_MODULE_4__.Input, {
    required: true,
    className: "griditem-1-2",
    name: "courseName",
    headerText: "Course Name",
    onChange: handleChange,
    value: formState.courseName,
    placeholder: "what is the name of the course?"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_input__WEBPACK_IMPORTED_MODULE_4__.Input, {
    value: formState.coursePublisher,
    name: "coursePublisher",
    headerText: "Course Publisher",
    onChange: handleChange,
    placeholder: "Is the course self published or part of a platfrom"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_input__WEBPACK_IMPORTED_MODULE_4__.ImageInput, {
    headerText: "Course Image",
    imageType: "image",
    imageLink: formState.courseImage,
    imageRef: courseImage.current
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_input__WEBPACK_IMPORTED_MODULE_4__.ImageInput, {
    headerText: "Course Banner",
    imageType: "banner",
    imageLink: formState.courseBanner,
    imageRef: bannerImage.current
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_input__WEBPACK_IMPORTED_MODULE_4__.Input, {
    name: "courseLink",
    onChange: handleChange,
    className: "griditem-1-2",
    headerText: "Course Link",
    value: formState.courseLink,
    placeholder: "Is the Course self published or part of a platform",
    type: "url"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "griditem-1-2"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_CategorySelect__WEBPACK_IMPORTED_MODULE_3__.ElementSelect, {
    defaultSelected: categories.filter(item => formState.courseCategory.indexOf(item.id) != -1),
    elements: categories,
    setElements: e => setFormState({
      courseCategory: e
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    class: "text-title text-xsm bold"
  }, "Course Entry Level"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
    value: formState.courseEntryLevel,
    name: "courseEntryLevel",
    onChange: handleChange
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Beginner"
  }, "Beginner"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Intermediate"
  }, "Intermediate"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Advanced"
  }, "Advanced"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_input__WEBPACK_IMPORTED_MODULE_4__.Input, {
    name: "courseTimeInvestment",
    className: "",
    value: formState.courseTimeInvestment,
    headerText: "Time investment",
    onChange: handleChange,
    type: "number",
    min: "1",
    placeholder: "How many hours does the course take to complete"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    class: "griditem-1-2"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    class: "text-title text-xsm bold"
  }, "Add a description of your course (limited to 280 characters)"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("textarea", {
    value: formState.courseDescription,
    maxLength: "280",
    name: "courseDescription",
    onChange: handleChange
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_input__WEBPACK_IMPORTED_MODULE_4__.Input, {
    name: "courseValue",
    className: "griditem-1-2",
    headerText: "What value your course is for it\u2019s students",
    onChange: handleChange,
    value: formState.courseValue,
    placeholder: "Decribe in one senctence what value your course is providing "
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_input__WEBPACK_IMPORTED_MODULE_4__.Input, {
    name: "courseOutcome",
    required: true,
    value: formState.courseOutcome,
    className: "griditem-1-2",
    headerText: "What is the outcome most ex-students have from taking the course",
    onChange: handleChange,
    placeholder: "Decribe what the outcome is for most of the students finishing the course"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "griditem-1-2"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    class: "text-title text-xsm bold"
  }, "Name up to six highlights of the course"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ui_LoadHighlights__WEBPACK_IMPORTED_MODULE_5__.LoadHighlights, {
    highlights: highlights,
    setHighlights: setHighlights
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
    class: "griditem-1-2 "
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    class: "text-title text-xsm bold"
  }, "About the Instructor(s)"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    class: "text-sm text-title bold  "
  }, "Here you can add information related to the instructor(s)")), owninformation == true ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_input__WEBPACK_IMPORTED_MODULE_4__.Input, {
    name: "instructorName",
    headerText: "What is the name of the instructor?",
    onChange: handleChange,
    placeholder: "What is the name(s) of the instructors (add a comma to separate them)",
    value: formState.instructorName
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_input__WEBPACK_IMPORTED_MODULE_4__.ImageInput, {
    imageType: "avatar",
    headerText: "Course Instructor Image",
    imageLink: formState.instructorImage,
    imageRef: profileImage.current
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    class: "griditem-1-2"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    class: "text-title text-xsm bold"
  }, "What is the experience of the Instructor?"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("textarea", {
    value: formState.instructorExperience,
    maxLength: "280",
    name: "instructorExperience",
    onChange: handleChange,
    rows: "5",
    placeholder: "Describe the instructor(s) experience with the course subject"
  }))) : null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.Toaster, null));
};

/***/ }),

/***/ "./src/pages/components/input.js":
/*!***************************************!*\
  !*** ./src/pages/components/input.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryInput": () => (/* binding */ CategoryInput),
/* harmony export */   "ImageInput": () => (/* binding */ ImageInput),
/* harmony export */   "Input": () => (/* binding */ Input),
/* harmony export */   "UploadFileButton": () => (/* binding */ UploadFileButton),
/* harmony export */   "inputJquery": () => (/* binding */ inputJquery)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);



const UploadFileButton = () => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    class: "right btn ph-1 pv-04 center-items ml-1 btn-yellow"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "14",
    class: "right",
    height: "17",
    viewBox: "0 0 14 17",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M4 13H10V7H14L7 0L0 7H4V13ZM7 2.83L9.17 5H8V11H6V5H4.83L7 2.83ZM0 15H14V17H0V15Z",
    fill: "#282828"
  })));
};
const inputJquery = {
  /**
   * @param {('red'|'blue'|'yellow'|'transparent')} 
   * @memberof inputJquery
   */
  makeOutline() {
    let color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'red';
    jquery__WEBPACK_IMPORTED_MODULE_2___default()("form").find(".input").each(function () {
      if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).prop("required")) {
        jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).on({
          focusout: e => {
            if (e.target.value == "") {
              jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).addClass("border-" + color);
            }
          },
          change: e => {
            if (e.target.value == "") {
              jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).addClass("border border-" + color);
            } else {
              jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).removeClass("border border-" + color);
            }
          }
        });
      }
    });
  }

};
const Input = _ref => {
  let {
    type = 'text',
    onChange,
    required = false,
    name,
    placeholder = '',
    headerText = '',
    className = '',
    value,
    defaultValue = ''
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: className
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    class: "text-title text-xsm bold"
  }, headerText ? headerText : name), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    defaultValue: defaultValue,
    name: name,
    required: required,
    value: value,
    className: "input",
    type: type,
    onChange: onChange,
    placeholder: placeholder,
    min: "1"
  })));
};
/**
 * 
 * @param {Object} props 
//  * @param {('image'|'banner'|'avatar')} props.imageType 
 * @param {('ref.current')} props.imageRef
 * @param {string} props.headerText
 * @param {string} props.imageLink
 * @returns 
 */

const ImageInput = _ref2 => {
  let {
    imageType,
    imageRef,
    imageLink,
    headerText = ''
  } = _ref2;

  if (imageType == 'image') {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      onClick: () => imageRef.click()
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      class: "text-title text-xsm bold"
    }, headerText), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "inputIcon clearfix"
    }, typeof imageLink != "object" ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "flex flex-between"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: "",
      src: imageLink
    })) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      disabled: true,
      value: imageRef?.files.length > 0 ? imageRef?.files[0].name : null
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "flex flex-between "
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: "",
      src: imageRef?.files.length > 0 ? URL.createObjectURL(imageLink[0]) : null
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(UploadFileButton, null)));
  }

  if (imageType == 'banner') {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "clearfix griditem-1-2  w-100",
      onClick: () => imageRef.click()
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      class: "text-title w-100 text-xsm bold"
    }, headerText), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "inputIcon clearfix "
    }, typeof imageLink == "string" ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "w-100 h-20 mv-2 bg-gray image-fit"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: "w-100",
      src: imageLink
    })) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "defaultBanner"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      className: "",
      disabled: true,
      value: imageRef?.files.length > 0 ? imageRef?.files[0].name : null
    }), imageRef?.files.length > 0 ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `w-100  image-fit h-20`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: "w-100 ",
      src: URL.createObjectURL(imageLink[0])
    })) : null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(UploadFileButton, null)));
  }

  if (imageType == 'avatar') {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "clearfix w-100",
      onClick: () => imageRef.click()
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      class: "text-title text-xsm bold"
    }, "instructor Image Preview"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "inputIcon clearfix"
    }, typeof imageLink == "string" ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "flex flex-between w-50"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: "profile-image",
      src: imageLink
    })) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      disabled: true,
      value: imageRef?.files.length > 0 ? imageRef?.files[0].name : null
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "flex flex-between w-50"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: "profile-image",
      src: imageRef?.files.length > 0 ? URL.createObjectURL(imageLink[0]) : null
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(UploadFileButton, null)));
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null);
};
const CategoryInput = _ref3 => {
  let {
    categories,
    setCategories
  } = _ref3;
  const [currCat, setCurrCat] = useState([]);
};

/***/ }),

/***/ "./src/pages/components/newCoursePreview.js":
/*!**************************************************!*\
  !*** ./src/pages/components/newCoursePreview.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoursePreview": () => (/* binding */ CoursePreview)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Icon */ "./src/pages/components/Icon.js");



const CoursePreview = _ref => {
  let {
    formState
  } = _ref;
  const {
    courseName,
    coursePublisher,
    courseLink,
    courseCategory,
    courseParentCategory,
    courseEntryLevel,
    courseTimeInvestment,
    courseImage,
    courseVideo,
    courseBanner,
    courseDescription,
    courseValue,
    courseOutcome,
    courseHighlights,
    instructorImage,
    instructorName,
    instructorExperience
  } = formState;
  const [mainImage, setMainImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const [instructorImg, setInstructorImg] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (courseImage[0] && typeof courseImage == 'object') {
      const url = URL.createObjectURL(courseImage[0]);
      setMainImage(url);
    }
  }, [courseImage]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instructorImage[0] && typeof instructorImage == 'object') {
      const url = URL.createObjectURL(instructorImage[0]);
      setInstructorImg(url);
    } else {
      setInstructorImg(instructorImage);
    }
  }, [instructorImage]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("article", {
    class: "course"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("article", {
    class: "content"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Your courses ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    class: "bi bi-chevron-right"
  }), " List a course"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    class: "text-title bold w-70 text-md"
  }, formState.courseName), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("aside", {
    class: "inlineflex inlineflex-between w-80"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "10",
    height: "10",
    viewBox: "0 0 10 10",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M5 0C2.25 0 0 2.25 0 5C0 7.75 2.25 10 5 10C7.75 10 10 7.75 10 5C10 2.25 7.75 0 5 0ZM7.1 7.1L4.5 5.5V2.5H5.25V5.1L7.5 6.45L7.1 7.1Z",
    fill: "#282828"
  })), courseTimeInvestment, " hours"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Icon__WEBPACK_IMPORTED_MODULE_2__.Icon, {
    iconName: courseEntryLevel
  }), `  ${courseEntryLevel}`), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    class: "dashicons dashicons-admin-site-alt3"
  }), " English")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("aside", {
    class: " mv-1"
  }, "Course teacher: ", instructorName), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
    class: "mb-1"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    class: "btn p-08 btn-blue btn-round_semi white"
  }, "The Course"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    class: "p-08 greenwhite"
  }, "The Instructor"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    class: "p-08 greenwhite"
  }, "Reviews")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    id: "main-course-image",
    class: " ml-07 container container-sharp p-06",
    src: mainImage
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
    class: "container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    class: "text-title text-sm bold ph-1 "
  }, "What are you going to get"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    class: "min-list pl-1 gridcol-2 w-80"
  }, courseHighlights.map(v => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      class: "icon  mh-03 dashicons blue dashicons-yes-alt"
    }), v);
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "w-100 h-10 mv-2 bg-gray image-fit"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: mainImage
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
    class: "container p-1"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    class: "text-title bold text-sm pt-01 "
  }, "Course description"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, courseDescription)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
    class: "container p-1 mv-1"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    class: "text-title text-sm  bold"
  }, "About the Instructor"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "profile-card"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    class: "profile-image center-image",
    src: instructorImg
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    class: "profile-description"
  }, instructorExperience))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
    class: "gridcol-3 mb-2 gap"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("article", {
    class: "navigation-bar"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("aside", {
    class: "container container-sharp   pv-2"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    class: "text-title text-center bold text-xsm"
  }, "Did you enjoy the course?"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    class: "btn btn-blue addReview center white"
  }, "Write a review"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
    class: "mt-2 p-1 container container-sharp"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: mainImage
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "inlineflex"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "mt-04 flex flex-row flex-evenly"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "10",
    height: "10",
    viewBox: "0 0 10 10",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M5 0C2.25 0 0 2.25 0 5C0 7.75 2.25 10 5 10C7.75 10 10 7.75 10 5C10 2.25 7.75 0 5 0ZM7.1 7.1L4.5 5.5V2.5H5.25V5.1L7.5 6.45L7.1 7.1Z",
    fill: "#282828"
  })), " ", courseTimeInvestment, " hours"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Icon__WEBPACK_IMPORTED_MODULE_2__.Icon, {
    iconName: courseEntryLevel
  }), `  ${courseEntryLevel}`), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    class: "dashicons dashicons-admin-site-alt3"
  }), " English")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    class: "text-title text-xsm bold"
  }, "What are you going to learn"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    class: "min-list p-0"
  }, courseHighlights.map(v => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      class: "icon  mh-03 dashicons blue dashicons-yes-alt"
    }), v);
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("aside", {
    className: "flex flex-col flex-left"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    class: "text-title text-xsm bold left"
  }, "Actions"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    class: "subtitle subtitle-xsm  left"
  }, "title action"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    class: "blue underline",
    href: "# "
  }, "title link"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    class: "w-100 btn btn-yellow text-center bold mt-1"
  }, "Go to the course"))))));
};

/***/ }),

/***/ "./src/pages/components/ui/LoadHighlights.js":
/*!***************************************************!*\
  !*** ./src/pages/components/ui/LoadHighlights.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadHighlights": () => (/* binding */ LoadHighlights)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_structures_linkedList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/structures/linkedList */ "./src/utils/structures/linkedList.js");
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hot-toast */ "./node_modules/react-hot-toast/dist/index.mjs");




const list = new _utils_structures_linkedList__WEBPACK_IMPORTED_MODULE_2__.List({
  maxIndex: 5
});

function findParentNode() {
  let selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  let element = arguments.length > 1 ? arguments[1] : undefined;
  const parent = element.parentNode;

  if (!parent || element.querySelector(selector)) {
    return element.querySelector(selector);
  }

  return findParentNode(selector, parent);
}

const LoadHighlights = _ref => {
  let {
    highlights = [],
    setHighlights
  } = _ref;

  const addItem = e => {
    list.addAt(list.len, "");

    if (list.maxIndex == list.len - 1) {
      react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].error('you can only have ' + list.maxIndex + ' items at a time');
    }

    setHighlights(list.getElements());
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (highlights) {
      list.head = null;
      highlights.map((v, i) => {
        if (i == 0) {
          list.addHead(v);
        } else {
          list.addAt(i, v);
        }
      });
      setHighlights(list.getElements());
    }
  }, []);

  const removeItem = (e, i) => {
    e.preventDefault();
    const parent = findParentNode("#courseHighlights-" + i, e.target);
    parent.classList.add("zoom-out");
    setTimeout(() => {
      parent.classList.remove('zoom-out');
      list.removeAt(i);
      e.target.value = "";
      setHighlights(list.getElements());
    }, 200);
  };

  const changeAt = e => {
    list.changeAt(e.target.name, e.target.value);
    setHighlights(list.getElements());
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, highlights.map((v, i) => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      id: `courseHighlights-${i}`,
      class: `inputIcon  mv-08`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      name: i,
      placeholder: i,
      onChange: changeAt,
      value: v
    }), i == 0 ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      onClick: addItem,
      class: `right btn ph-05 ml-1 btn-blue ${list.len - 1 == list.maxIndex ? "error" : ""}`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      className: "bi bi-plus-lg white p-1"
    })) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      onClick: e => removeItem(e, i),
      className: "right  btn ph-05 ml-1 btn-red"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      class: "bi white bold bi-dash"
    })));
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.Toaster, null));
};

/***/ }),

/***/ "./src/pages/components/ui/Tooltip.js":
/*!********************************************!*\
  !*** ./src/pages/components/ui/Tooltip.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
    position = 'right',
    textColor = 'black',
    color = 'gray',
    children,
    text = ''
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tp"
  }, children, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: ` tp-text_${position} bg-${color} ${textColor}  zoom-in`
  }, text));
};

/***/ }),

/***/ "./src/pages/components/ui/steps.js":
/*!******************************************!*\
  !*** ./src/pages/components/ui/steps.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StepItem": () => (/* binding */ StepItem)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const StepItem = _ref => {
  let {
    count = 0,
    title = "",
    completed = false,
    current = false
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "center-items mr-2"
  }, completed == true ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "align-center"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    class: "bi align-center bi-check-lg mr-02 border border-circle border-lightgreen bg-teal   text-title text-md bold ph-02 pv-02 yellow"
  })) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    class: " mr-03 border border-circle border-lightgreen bg-lightgreen darkgray  text-title text-md bold ph-04 pv-01 white"
  }, count), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    class: `align-center ${completed == true || current == true ? "black" : "gray"} w-fit`
  }, title));
};

/***/ }),

/***/ "./src/pages/hooks/Course.js":
/*!***********************************!*\
  !*** ./src/pages/hooks/Course.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Course": () => (/* binding */ Course)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldGet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldSet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldSet.js");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__);



function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }



var _id = /*#__PURE__*/new WeakMap();

class Course {
  constructor(id) {
    _classPrivateFieldInitSpec(this, _id, {
      writable: true,
      value: void 0
    });

    this.id = id;

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_1__["default"])(this, _id, this.id);
  }

  getDefaultItems(_ref) {
    let {
      filled = false
    } = _ref;

    if (filled == true) {
      return {
        courseName: "Building my Car Empire",
        coursePublisher: "Rodrigo Scola",
        courseLink: "https://medium.com/geekculture/how-to-upload-and-preview-images-in-react-js-4e22a903f3db",
        courseCategory: [],
        courseEntryLevel: "Beginner",
        courseTimeInvestment: 10,
        courseHighlights: ["In-depth 3-module program for beginner or intermediate artists", "Assignments And Exercises to Accelerate Your Learning", "Feedback on your art from our own Evenant tutors", "Private Visual Storytelling Community Group", "Over-the-shoulder Creation of Illustrations and Paintings", "Lifetime Access, Including Updates"],
        courseImage: "",
        courseBanner: "",
        courseDescription: "3D is such an amazing tool to use for Concept Art and Illustration. I’ve been using it for my professional artworks and illustrations for over a decade now and I just love this workflow. I wanted to share my knowledge with other artists, so I decided to create this course – 3D for Artists.",
        courseValue: "it has some value",
        courseOutcome: "it has some outcome",
        instructorName: "Rodrigo Scola",
        instructorImage: [],
        instructorExperience: "Adrian is a Concept Artist based in Spain, working in the video game industry,with a background in environment and character design, and a realistic visual style. Adrian has worked on a variety of different projects and game titles, including HIVE: Altenum Wars at Catness Game Studios as a Lead Concept Artist, Sons of Dawn, with the Narrative Designer Kiko Blasco, and Arker: The Legend of Ohm from Arker Labs, in which he created high end illustrations in in-game content and promotional art, as well as environment pieces and keyframe paintings. You can find more info on Adrian’s work at his website: https://hevenurion.com/."
      };
    }

    return {
      courseName: "",
      coursePublisher: "",
      courseLink: "",
      courseCategory: 0,
      courseEntryLevel: "",
      courseTimeInvestment: 0,
      courseHighlights: [''],
      courseImage: [],
      courseBanner: "",
      courseDescription: "",
      courseValue: "",
      courseOutcome: "",
      instructorName: "",
      instructorImage: [],
      instructorExperience: ""
    };
  }

  log() {
    console.log(this);
  }

  async deleteCourse() {
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
      headers: {
        "X-WP-Nonce": ioldata.nonce
      },
      url: "/wp-json/iol/v1/courses",
      data: {
        courseId: (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _id)
      },
      method: "DELETE"
    }).then(id => {
      return id;
    });
  }
  /**
   * @param {('draft'|'publish'|'private')} visibility
   * @memberof Course
   */


  async changeVisibility(visibility) {
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
      headers: {
        'X-WP-Nonce': ioldata.nonce
      },
      url: "/wp-json/iol/v1/course-visibility",
      data: {
        courseId: this.id,
        visibility_type: visibility
      },
      method: "POST"
    }).then(id => {
      return id;
    });
  }

}

/***/ }),

/***/ "./src/pages/hooks/useObj.js":
/*!***********************************!*\
  !*** ./src/pages/hooks/useObj.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useObj": () => (/* binding */ useObj)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useObj = initialState => {
  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialState);

  const setNewState = newState => {
    setState(curr => ({ ...curr,
      ...newState
    }));
  };

  return [state, setNewState];
};

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchData": () => (/* binding */ fetchData),
/* harmony export */   "form": () => (/* binding */ form),
/* harmony export */   "formatter": () => (/* binding */ formatter),
/* harmony export */   "remove_invisible_tag": () => (/* binding */ remove_invisible_tag),
/* harmony export */   "stringToHtml": () => (/* binding */ stringToHtml)
/* harmony export */ });
Array.prototype.toObj = function (delimiter) {
  let callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  const narr = this.reduce((curr, next) => {
    if (next.includes(delimiter)) {
      let [key, value] = next.split(delimiter);

      if (callback) {
        value = callback(value);
      }

      Object.assign(curr, {
        [key]: value
      });
    }

    return curr;
  }, {});
  return narr;
};

String.prototype.replaceLast = function (search, replace) {
  return this.replace(new RegExp(search + "([^" + search + "]*)$"), replace + "$1");
};

Set.prototype.difference = function (set) {
  if (!(set instanceof Set)) set = new Set(set);
  const nset = new Set();
  [...this].forEach(item => {
    if (!set.has(item)) {
      nset.add(item);
    }
  });
  return nset;
};

const form = {
  filledFields: obj => {
    const notFilled = Object.entries(obj).reduce((curr, next) => {
      let [key, value] = next;

      if (!value || value == []) {
        curr.push({
          [key]: value
        });
      }

      return curr;
    }, []);
    return notFilled;
  }
};
const formatter = {
  highlightsToArr: obj => {
    return Object.values(obj);
  },
  highlights: obj => {
    if (typeof obj !== "object") throw new Error("has to be an object");
    const narr = Object.entries(obj).reduce((curr, next) => {
      curr.push({
        id: [next[0] - 1],
        value: next[1]
      });
      return curr;
    }, []);
    return narr;
  },
  getUrlParams: () => {
    const params = window.location.search.substring(1).split("&").reduce((curr, next) => {
      const [key, value] = next.split("=");

      if (key && value) {
        Object.assign(curr, {
          [key]: Number(value) ? Number(value) : value
        });
      }

      return curr;
    }, {});
    return params;
  },
  getPageParams: () => {
    try {
      const item = document.querySelector(`#${ioldata.slug.replace(" ", "-")}`)?.className.split(" ").toObj("=", elem => Number(elem));
      return item ? item : {};
    } catch (err) {
      return {};
    }
  },
  getAllParams: () => {
    return { ...formatter.getUrlParams(),
      ...formatter.getPageParams()
    };
  },

  /**
   *
   *
   * @param {string[]} arr
   * @param {string} delimiter
   * @param {CallableFunction} callback
   * @returns {Object[]}
   */
  arrayToObj: function (arr, delimiter) {
    let callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    const narr = arr.reduce((curr, next) => {
      if (next.includes(delimiter)) {
        let [key, value] = next.split(delimiter);

        if (callback) {
          value = callback(value);
        }

        Object.assign(curr, {
          [key]: value
        });
      }

      return curr;
    }, {});
    return narr;
  }
};

var support = function () {
  if (!window.DOMParser) return false;
  const parser = new DOMParser();

  try {
    parser.parseFromString("x", "text/html");
  } catch (err) {
    return false;
  }

  return true;
};

const getIcons = function () {
  let html = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  console.log(typeof html);
};

const stringToHtml = function () {
  let str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

  if (support) {
    const parser = new DOMParser();
    const html = parser.parseFromString(str, "text/html");
    return html.body;
  }

  const dom = document.createElement("div");
  dom.innerHTML = str;
  return dom;
};
const remove_invisible_tag = function () {
  let html = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

  if (typeof html !== "string") {
    html = JSON.stringify(html);
  }

  html = html.replace('<div class="invisible">', "");
  html = html.replaceLast("</div>", "");
  return html;
};
const fetchData = {
  featuredImage: async function (id) {
    let siteUrl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "http://localhost:10016/";
    const data = await fetch(siteUrl + "wp-json/wp/v2/media/" + id);
    return data;
  }
};

/***/ }),

/***/ "./src/utils/structures/linkedList.js":
/*!********************************************!*\
  !*** ./src/utils/structures/linkedList.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "List": () => (/* binding */ List)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldGet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldSet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldSet.js");




function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

var _next = /*#__PURE__*/new WeakMap();

class TreeNode {
  constructor(data) {
    _classPrivateFieldInitSpec(this, _next, {
      writable: true,
      value: void 0
    });

    this.data = data;

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _next, null);
  }

  get next() {
    return (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_1__["default"])(this, _next);
  }

  set next(newVal) {
    if (newVal instanceof TreeNode) {
      return (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _next, newVal);
    } else if (newVal) {
      return (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _next, new TreeNode(newVal));
    }

    return (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _next, null);
  }

}

var _maxIndex = /*#__PURE__*/new WeakMap();

class List {
  constructor() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      maxIndex: null
    };

    _classPrivateFieldInitSpec(this, _maxIndex, {
      writable: true,
      value: void 0
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "removeAt", function (index) {
      console.log(this.getElements());
      console.log('hjasodf');

      if (index <= 0 || index >= this.len) {
        return null;
      }

      let deletedNode = this.head;

      if (index == 0) {
        this.head = null;
      } else {
        let currentNode = this.head;
        let currentIndex = 0;

        while (currentIndex < index - 1) {
          currentNode = currentNode.next;
          currentIndex++;
        }

        deletedNode = currentNode.next;
        currentNode.next = deletedNode.next;
      }

      this.len--;
      return deletedNode.element;
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "addAt", (index, element) => {
      if (index < 0 || index > (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_1__["default"])(this, _maxIndex)) return null;
      let node = this.head;

      if (index > 0) {
        let i = 0;

        while (i + 1 !== index) {
          node = node.next;
          i++;
        }
      }

      const newNode = new TreeNode(element);
      newNode.next = node.next;

      if (index === 0) {
        this.head = newNode;
      } else {
        node.next = newNode;
      }

      this.len++;
    });

    this.head = null;
    this.len = 0;

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _maxIndex, options.maxIndex);
  }

  get maxIndex() {
    return (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_1__["default"])(this, _maxIndex);
  }

  setElements() {
    let elems = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    this.head = elems;
  }

  getElements() {
    let callabck = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    let arr = [];
    let curr = this.head;

    while (curr) {
      arr.push(curr.data);
      curr = curr.next;
    }

    if (typeof callabck == "function") {
      return callabck(arr);
    }

    return arr;
  }

  changeAt(index, newVal) {
    let ind = 0,
        curr = this.head;
    if (index >= this.len || index < 0) return null;

    while (ind < index) {
      ind++;
      curr = curr.next;
    }

    curr.data = newVal;
  }

  addHead(element) {
    const node = new TreeNode(element);

    if (!this.head) {
      this.len++;
      return this.head = node;
    }

    let current = this.head;

    while (current.next) {
      current = current.next;
    }

    current.next = node;
    return this.len++;
  }

  removeHead(element) {
    if (this.head.data == element) {
      this.len--;
      return this.head = this.head.next;
    }

    let previous = this.head;

    while (previous) {
      let current = previous.next;

      if (current) {
        if (current.data == element) {
          previous.next = current.next;
        }
      }

      previous = current;
    }

    this.len--;
  }

  indexOf(element) {
    let index = -1,
        found = false,
        current = this.head;

    while (!found && current) {
      index++;

      if (current.data == element) {
        found = true;
      } else {
        current = current.next;
      }
    }

    return found == false ? -1 : index;
  }

  elementAt(index) {
    let curr = this.head,
        curIn = 0;
    if (index > this.len || index < 0) return undefined;

    while (curIn !== index) {
      curIn++;
      curr = curr.next;
    }

    return curr.element;
  }

  log() {
    console.log(this.getElements());
  }

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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorGet.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorGet.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classApplyDescriptorGet)
/* harmony export */ });
function _classApplyDescriptorGet(receiver, descriptor) {
  if (descriptor.get) {
    return descriptor.get.call(receiver);
  }

  return descriptor.value;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorSet.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorSet.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classApplyDescriptorSet)
/* harmony export */ });
function _classApplyDescriptorSet(receiver, descriptor, value) {
  if (descriptor.set) {
    descriptor.set.call(receiver, value);
  } else {
    if (!descriptor.writable) {
      throw new TypeError("attempted to set read only private field");
    }

    descriptor.value = value;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classExtractFieldDescriptor.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classExtractFieldDescriptor.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classExtractFieldDescriptor)
/* harmony export */ });
function _classExtractFieldDescriptor(receiver, privateMap, action) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to " + action + " private field on non-instance");
  }

  return privateMap.get(receiver);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classPrivateFieldGet)
/* harmony export */ });
/* harmony import */ var _classApplyDescriptorGet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classApplyDescriptorGet.js */ "./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorGet.js");
/* harmony import */ var _classExtractFieldDescriptor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classExtractFieldDescriptor.js */ "./node_modules/@babel/runtime/helpers/esm/classExtractFieldDescriptor.js");


function _classPrivateFieldGet(receiver, privateMap) {
  var descriptor = (0,_classExtractFieldDescriptor_js__WEBPACK_IMPORTED_MODULE_1__["default"])(receiver, privateMap, "get");
  return (0,_classApplyDescriptorGet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(receiver, descriptor);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldSet.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classPrivateFieldSet.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classPrivateFieldSet)
/* harmony export */ });
/* harmony import */ var _classApplyDescriptorSet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classApplyDescriptorSet.js */ "./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorSet.js");
/* harmony import */ var _classExtractFieldDescriptor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classExtractFieldDescriptor.js */ "./node_modules/@babel/runtime/helpers/esm/classExtractFieldDescriptor.js");


function _classPrivateFieldSet(receiver, privateMap, value) {
  var descriptor = (0,_classExtractFieldDescriptor_js__WEBPACK_IMPORTED_MODULE_1__["default"])(receiver, privateMap, "set");
  (0,_classApplyDescriptorSet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(receiver, descriptor, value);
  return value;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/goober/dist/goober.modern.js":
/*!***************************************************!*\
  !*** ./node_modules/goober/dist/goober.modern.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

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
/******/ 			"new-course": 0
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
/*!*********************************!*\
  !*** ./src/pages/new-course.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useObj__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hooks/useObj */ "./src/pages/hooks/useObj.js");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_courseForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/courseForm */ "./src/pages/components/courseForm.js");
/* harmony import */ var _components_newCoursePreview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/newCoursePreview */ "./src/pages/components/newCoursePreview.js");
/* harmony import */ var _components_ui_steps__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/ui/steps */ "./src/pages/components/ui/steps.js");
/* harmony import */ var _hooks_Course__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hooks/Course */ "./src/pages/hooks/Course.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils */ "./src/utils.js");









const {
  getDefaultItems
} = new _hooks_Course__WEBPACK_IMPORTED_MODULE_8__.Course();

window.addEventListener('load', () => {
  const div = document.querySelectorAll('.new-course');
  div.forEach(elem => {
    react_dom__WEBPACK_IMPORTED_MODULE_2___default().render((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RenderComponent, null), elem);
  });
});

function RenderComponent() {
  const [sent, setSent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const courseImage = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  const bannerImage = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  const profileImage = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  const submitForm = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(); //

  const [categories, setCategories] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const [step, setStep] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const [owninformation, setOwnInfo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const [formState, setFormState] = (0,_hooks_useObj__WEBPACK_IMPORTED_MODULE_3__.useObj)(getDefaultItems({
    filled: false
  }));
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setSent(_utils__WEBPACK_IMPORTED_MODULE_9__.form.filledFields(formState).length !== 0);
  }, [formState]);

  const publishCourse = async () => {
    setSent(true);
    const courseHighlightsMap = formState.courseHighlights.map((v, i) => {
      return {
        id: i,
        value: v
      };
    });
    const data = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default()({
      url: '/wp-json/iol/v1/courses',
      data: { ...formState,
        courseHighlights: courseHighlightsMap
      },
      method: 'POST',
      headers: {
        'X-WP-Nonce': ioldata.nonce
      }
    }).then(res => {
      document.querySelector('#courseId').value = res;
      submitForm.current.click();
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const fetchData = async () => {
      const data = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default()({
        path: `/wp/v2/categories`,
        method: 'GET',
        headers: {
          'X-WP-Nonce': ioldata.nonce
        }
      });

      if (data) {
        setCategories(data.filter(item => item.name !== 'Blog'));
      }
    };

    fetchData();
    const div = document.querySelectorAll('.new-course');
    setFormState({
      instructorImage: div[0].getAttribute('data-author')
    });
  }, []);

  const changeImage = e => {
    setFormState({
      [e.target.name]: [...e.target.files]
    });
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex flex-row mt-3"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_ui_steps__WEBPACK_IMPORTED_MODULE_7__.StepItem, {
    count: 1,
    title: "About the Course",
    completed: step > 0,
    current: step == 0
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_ui_steps__WEBPACK_IMPORTED_MODULE_7__.StepItem, {
    count: 2,
    title: "course page Preview",
    completed: step > 1,
    current: step == 1
  })), step == 0 ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("article", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    class: "text-title bold "
  }, "Getting your Course Listed on The Internet of Learning Will Help You React Your Potential Students Faster"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    class: "text-sm  bold"
  }, "About the Course")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    class: "text-sm "
  }, "Fill in all the information related to the course"))), ' ', (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_courseForm__WEBPACK_IMPORTED_MODULE_5__.CourseForm, {
    highlights: formState.courseHighlights,
    setHighlights: e => setFormState({
      courseHighlights: e
    }),
    fileChoose: courseImage,
    nextStep: setStep,
    formState: formState,
    categories: categories,
    bannerImage: bannerImage,
    profileImage: profileImage,
    setCategories: setCategories,
    owninformation: owninformation,
    setOwnInfo: setOwnInfo,
    setFormState: setFormState
  })) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_newCoursePreview__WEBPACK_IMPORTED_MODULE_6__.CoursePreview, {
    formState: formState
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "clearfix"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", {
    action: `/new-course`,
    method: "post",
    enctype: "multipart/form-data"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    onChange: changeImage,
    name: 'courseId',
    className: "invisible",
    id: "courseId"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "file",
    onChange: changeImage,
    name: 'courseImage',
    className: "invisible",
    ref: courseImage
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "file",
    onChange: changeImage,
    name: 'instructorImage',
    className: "invisible",
    ref: profileImage
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "file",
    onChange: changeImage,
    name: 'courseBanner',
    className: "invisible",
    ref: bannerImage
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    ref: submitForm,
    className: "invisible ",
    id: "submitform"
  }, "submit")), step == 0 ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    disabled: false,
    onClick: () => setStep(1),
    class: "btn btn-yellow bold griditem-2 m-4 right"
  }, "SAVE AND LOOK AT THE COURSE PREVIEW") : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    disabled: sent == true,
    onClick: publishCourse,
    className: `${step == 1 ? 'btn btn-yellow bold griditem-2 m-1 right' : 'invisible'}  `
  }, "Publish Course"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    onClick: () => setStep(0),
    className: "btn btn-blue-hollow bold griditem-2 m-1 right"
  }, "Edit Course information"))));
}
})();

/******/ })()
;
//# sourceMappingURL=new-course.js.map