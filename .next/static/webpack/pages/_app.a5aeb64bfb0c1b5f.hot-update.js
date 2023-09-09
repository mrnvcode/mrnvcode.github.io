"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Transition.js":
/*!**********************************!*\
  !*** ./components/Transition.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n// framer motion\n\n\n// variants\nconst transitionVariants = {\n    initial: {\n        x: \"100%\",\n        width: \"100%\"\n    },\n    animate: {\n        x: \"0%\",\n        width: \"0%\"\n    },\n    exit: {\n        x: [\n            \"0%\",\n            \"100%\"\n        ],\n        width: [\n            \"0%\",\n            \"100%\"\n        ]\n    }\n};\nconst Transition = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {\n                className: \"fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#2e2257]\",\n                variants: transitionVariants,\n                initial: \"initial\",\n                animate: \"animate\",\n                exit: \"exit\",\n                transition: {\n                    delay: 0.1,\n                    duration: 0.3,\n                    ease: \"easeInOut\"\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mrnvt\\\\OneDrive\\\\Documents\\\\Portfolio F\\\\mrnvcode.github.io\\\\components\\\\Transition.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {\n                className: \"fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-[#3b2d71]\",\n                variants: transitionVariants,\n                initial: \"initial\",\n                animate: \"animate\",\n                exit: \"exit\",\n                transition: {\n                    delay: 0.2,\n                    duration: 0.3,\n                    ease: \"easeInOut\"\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mrnvt\\\\OneDrive\\\\Documents\\\\Portfolio F\\\\mrnvcode.github.io\\\\components\\\\Transition.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {\n                className: \"fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-[#4b3792]\",\n                variants: transitionVariants,\n                initial: \"initial\",\n                animate: \"animate\",\n                exit: \"exit\",\n                transition: {\n                    delay: 0.3,\n                    duration: 0.3,\n                    ease: \"easeInOut\"\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mrnvt\\\\OneDrive\\\\Documents\\\\Portfolio F\\\\mrnvcode.github.io\\\\components\\\\Transition.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_c = Transition;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Transition);\nvar _c;\n$RefreshReg$(_c, \"Transition\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RyYW5zaXRpb24uanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLGdCQUFnQjs7QUFDdUI7QUFFdkMsV0FBVztBQUNYLE1BQU1DLHFCQUFxQjtJQUN6QkMsU0FBUztRQUNQQyxHQUFHO1FBQ0hDLE9BQU87SUFDVDtJQUNBQyxTQUFTO1FBQ1BGLEdBQUc7UUFDSEMsT0FBTztJQUNUO0lBQ0FFLE1BQU07UUFDSkgsR0FBRztZQUFDO1lBQU07U0FBTztRQUNqQkMsT0FBTztZQUFDO1lBQU07U0FBTztJQUN2QjtBQUNGO0FBRUEsTUFBTUcsYUFBYSxJQUFNO0lBQ3ZCLHFCQUNFOzswQkFDRSw4REFBQ1AscURBQVU7Z0JBQ1hTLFdBQVU7Z0JBQXNFQyxVQUFVVDtnQkFDMUZDLFNBQVE7Z0JBQ1JHLFNBQVE7Z0JBQ1JDLE1BQUs7Z0JBQ0xLLFlBQVk7b0JBQUVDLE9BQU87b0JBQUtDLFVBQVU7b0JBQUtDLE1BQU07Z0JBQVk7Ozs7OzswQkFFM0QsOERBQUNkLHFEQUFVO2dCQUNYUyxXQUFVO2dCQUFzRUMsVUFBVVQ7Z0JBQzFGQyxTQUFRO2dCQUNSRyxTQUFRO2dCQUNSQyxNQUFLO2dCQUNMSyxZQUFZO29CQUFFQyxPQUFPO29CQUFLQyxVQUFVO29CQUFLQyxNQUFNO2dCQUFZOzs7Ozs7MEJBRTNELDhEQUFDZCxxREFBVTtnQkFDWFMsV0FBVTtnQkFBc0VDLFVBQVVUO2dCQUMxRkMsU0FBUTtnQkFDUkcsU0FBUTtnQkFDUkMsTUFBSztnQkFDTEssWUFBWTtvQkFBRUMsT0FBTztvQkFBS0MsVUFBVTtvQkFBS0MsTUFBTTtnQkFBWTs7Ozs7Ozs7QUFJakU7S0ExQk1QO0FBNEJOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVHJhbnNpdGlvbi5qcz9iMDM2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGZyYW1lciBtb3Rpb25cclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcblxyXG4vLyB2YXJpYW50c1xyXG5jb25zdCB0cmFuc2l0aW9uVmFyaWFudHMgPSB7XHJcbiAgaW5pdGlhbDoge1xyXG4gICAgeDogJzEwMCUnLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICB9LFxyXG4gIGFuaW1hdGU6IHtcclxuICAgIHg6ICcwJScsXHJcbiAgICB3aWR0aDogJzAlJyxcclxuICB9LFxyXG4gIGV4aXQ6IHtcclxuICAgIHg6IFsnMCUnLCAnMTAwJSddLFxyXG4gICAgd2lkdGg6IFsnMCUnLCAnMTAwJSddLFxyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCBUcmFuc2l0aW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8bW90aW9uLmRpdiBcclxuICAgICAgY2xhc3NOYW1lPSdmaXhlZCB0b3AtMCBib3R0b20tMCByaWdodC1mdWxsIHctc2NyZWVuIGgtc2NyZWVuIHotMzAgYmctWyMyZTIyNTddJyB2YXJpYW50cz17dHJhbnNpdGlvblZhcmlhbnRzfSBcclxuICAgICAgaW5pdGlhbD1cImluaXRpYWxcIiBcclxuICAgICAgYW5pbWF0ZT1cImFuaW1hdGVcIiBcclxuICAgICAgZXhpdD1cImV4aXRcIiBcclxuICAgICAgdHJhbnNpdGlvbj17eyBkZWxheTogMC4xLCBkdXJhdGlvbjogMC4zLCBlYXNlOiAnZWFzZUluT3V0JyB9fVxyXG4gICAgICA+PC9tb3Rpb24uZGl2PlxyXG4gICAgICA8bW90aW9uLmRpdiBcclxuICAgICAgY2xhc3NOYW1lPSdmaXhlZCB0b3AtMCBib3R0b20tMCByaWdodC1mdWxsIHctc2NyZWVuIGgtc2NyZWVuIHotMjAgYmctWyMzYjJkNzFdJyB2YXJpYW50cz17dHJhbnNpdGlvblZhcmlhbnRzfSBcclxuICAgICAgaW5pdGlhbD1cImluaXRpYWxcIiBcclxuICAgICAgYW5pbWF0ZT1cImFuaW1hdGVcIiBcclxuICAgICAgZXhpdD1cImV4aXRcIiBcclxuICAgICAgdHJhbnNpdGlvbj17eyBkZWxheTogMC4yLCBkdXJhdGlvbjogMC4zLCBlYXNlOiAnZWFzZUluT3V0JyB9fVxyXG4gICAgICA+PC9tb3Rpb24uZGl2PlxyXG4gICAgICA8bW90aW9uLmRpdiBcclxuICAgICAgY2xhc3NOYW1lPSdmaXhlZCB0b3AtMCBib3R0b20tMCByaWdodC1mdWxsIHctc2NyZWVuIGgtc2NyZWVuIHotMTAgYmctWyM0YjM3OTJdJyB2YXJpYW50cz17dHJhbnNpdGlvblZhcmlhbnRzfSBcclxuICAgICAgaW5pdGlhbD1cImluaXRpYWxcIiBcclxuICAgICAgYW5pbWF0ZT1cImFuaW1hdGVcIiBcclxuICAgICAgZXhpdD1cImV4aXRcIiBcclxuICAgICAgdHJhbnNpdGlvbj17eyBkZWxheTogMC4zLCBkdXJhdGlvbjogMC4zLCBlYXNlOiAnZWFzZUluT3V0JyB9fVxyXG4gICAgICA+PC9tb3Rpb24uZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRyYW5zaXRpb247XHJcbiJdLCJuYW1lcyI6WyJtb3Rpb24iLCJ0cmFuc2l0aW9uVmFyaWFudHMiLCJpbml0aWFsIiwieCIsIndpZHRoIiwiYW5pbWF0ZSIsImV4aXQiLCJUcmFuc2l0aW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwidmFyaWFudHMiLCJ0cmFuc2l0aW9uIiwiZGVsYXkiLCJkdXJhdGlvbiIsImVhc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Transition.js\n"));

/***/ })

});