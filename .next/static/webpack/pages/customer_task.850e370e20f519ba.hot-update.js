"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/customer_task",{

/***/ "./pages/customer_task.js":
/*!********************************!*\
  !*** ./pages/customer_task.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CustomerPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction CustomerPage() {\n    _s();\n    const [selectedEmployee, setSelectedEmployee] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [tasks, setTasks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handleAddTask = ()=>{\n        // When adding a task, store the following data\n        const newTask = {\n            employee: selectedEmployee,\n            taskName: \"New Task\",\n            status: \"Pending\"\n        };\n        setTasks([\n            ...tasks,\n            newTask\n        ]);\n    };\n    const handleTaskStatusChange = (index, newStatus)=>{\n        // When changing the task status, update the following data\n        const updatedTasks = [\n            ...tasks\n        ];\n        updatedTasks[index].status = newStatus;\n        setTasks(updatedTasks);\n    };\n    const handleLogout = ()=>{\n        // Redirect to the login page upon logout\n        window.location.href = \"/login\";\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"wrapper\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                id: \"employee-select\",\n                value: selectedEmployee,\n                onChange: (e)=>setSelectedEmployee(e.target.value),\n                style: {\n                    marginBottom: \"10px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"\",\n                        children: \"Select Employee\"\n                    }, void 0, false, {\n                        fileName: \"/Users/lhagvadorjbatulzii/LESSON/lesson-2-2/DATABASE2/LAB-10/1DATABASE_MANAGEMENT_LAB_10/pages/customer_task.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"John Doe\",\n                        children: \"John Doe\"\n                    }, void 0, false, {\n                        fileName: \"/Users/lhagvadorjbatulzii/LESSON/lesson-2-2/DATABASE2/LAB-10/1DATABASE_MANAGEMENT_LAB_10/pages/customer_task.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"Jane Smith\",\n                        children: \"Jane Smith\"\n                    }, void 0, false, {\n                        fileName: \"/Users/lhagvadorjbatulzii/LESSON/lesson-2-2/DATABASE2/LAB-10/1DATABASE_MANAGEMENT_LAB_10/pages/customer_task.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lhagvadorjbatulzii/LESSON/lesson-2-2/DATABASE2/LAB-10/1DATABASE_MANAGEMENT_LAB_10/pages/customer_task.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleAddTask,\n                style: {\n                    marginRight: \"10px\"\n                },\n                children: \"Add Task\"\n            }, void 0, false, {\n                fileName: \"/Users/lhagvadorjbatulzii/LESSON/lesson-2-2/DATABASE2/LAB-10/1DATABASE_MANAGEMENT_LAB_10/pages/customer_task.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"task-input\",\n                style: {\n                    marginTop: \"20px\",\n                    marginBottom: \"10px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"bars-icon.svg\",\n                        alt: \"Bars Icon\",\n                        style: {\n                            marginRight: \"10px\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/lhagvadorjbatulzii/LESSON/lesson-2-2/DATABASE2/LAB-10/1DATABASE_MANAGEMENT_LAB_10/pages/customer_task.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Add a new task\",\n                        style: {\n                            padding: \"5px\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/lhagvadorjbatulzii/LESSON/lesson-2-2/DATABASE2/LAB-10/1DATABASE_MANAGEMENT_LAB_10/pages/customer_task.js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lhagvadorjbatulzii/LESSON/lesson-2-2/DATABASE2/LAB-10/1DATABASE_MANAGEMENT_LAB_10/pages/customer_task.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"controls\",\n                style: {\n                    marginBottom: \"10px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"filters\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"active\",\n                                style: {\n                                    marginRight: \"10px\"\n                                },\n                                children: \"All\"\n                            }, void 0, false, {\n                                fileName: \"/Users/lhagvadorjbatulzii/LESSON/lesson-2-2/DATABASE2/LAB-10/1DATABASE_MANAGEMENT_LAB_10/pages/customer_task.js\",\n                                lineNumber: 64,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                style: {\n                                    marginRight: \"10px\"\n                                },\n                                children: \"Pending\"\n                            }, void 0, false, {\n                                fileName: \"/Users/lhagvadorjbatulzii/LESSON/lesson-2-2/DATABASE2/LAB-10/1DATABASE_MANAGEMENT_LAB_10/pages/customer_task.js\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"Completed\"\n                            }, void 0, false, {\n                                fileName: \"/Users/lhagvadorjbatulzii/LESSON/lesson-2-2/DATABASE2/LAB-10/1DATABASE_MANAGEMENT_LAB_10/pages/customer_task.js\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/lhagvadorjbatulzii/LESSON/lesson-2-2/DATABASE2/LAB-10/1DATABASE_MANAGEMENT_LAB_10/pages/customer_task.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"clear-btn\",\n                        style: {\n                            marginLeft: \"10px\",\n                            padding: \"5px 10px\",\n                            backgroundColor: \"#007bff\",\n                            color: \"#fff\",\n                            border: \"none\",\n                            cursor: \"pointer\"\n                        },\n                        children: \"Clear All\"\n                    }, void 0, false, {\n                        fileName: \"/Users/lhagvadorjbatulzii/LESSON/lesson-2-2/DATABASE2/LAB-10/1DATABASE_MANAGEMENT_LAB_10/pages/customer_task.js\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lhagvadorjbatulzii/LESSON/lesson-2-2/DATABASE2/LAB-10/1DATABASE_MANAGEMENT_LAB_10/pages/customer_task.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"task-box\",\n                children: tasks.map((task, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: task.taskName\n                            }, void 0, false, {\n                                fileName: \"/Users/lhagvadorjbatulzii/LESSON/lesson-2-2/DATABASE2/LAB-10/1DATABASE_MANAGEMENT_LAB_10/pages/customer_task.js\",\n                                lineNumber: 89,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: task.status\n                            }, void 0, false, {\n                                fileName: \"/Users/lhagvadorjbatulzii/LESSON/lesson-2-2/DATABASE2/LAB-10/1DATABASE_MANAGEMENT_LAB_10/pages/customer_task.js\",\n                                lineNumber: 90,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>handleTaskStatusChange(index, \"Pending\"),\n                                children: \"Mark as Pending\"\n                            }, void 0, false, {\n                                fileName: \"/Users/lhagvadorjbatulzii/LESSON/lesson-2-2/DATABASE2/LAB-10/1DATABASE_MANAGEMENT_LAB_10/pages/customer_task.js\",\n                                lineNumber: 92,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>handleTaskStatusChange(index, \"Completed\"),\n                                children: \"Mark as Completed\"\n                            }, void 0, false, {\n                                fileName: \"/Users/lhagvadorjbatulzii/LESSON/lesson-2-2/DATABASE2/LAB-10/1DATABASE_MANAGEMENT_LAB_10/pages/customer_task.js\",\n                                lineNumber: 95,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/lhagvadorjbatulzii/LESSON/lesson-2-2/DATABASE2/LAB-10/1DATABASE_MANAGEMENT_LAB_10/pages/customer_task.js\",\n                        lineNumber: 88,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/lhagvadorjbatulzii/LESSON/lesson-2-2/DATABASE2/LAB-10/1DATABASE_MANAGEMENT_LAB_10/pages/customer_task.js\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleLogout,\n                style: {\n                    padding: \"5px 10px\",\n                    backgroundColor: \"#dc3545\",\n                    color: \"#fff\",\n                    border: \"none\",\n                    cursor: \"pointer\"\n                },\n                children: \"Log Out\"\n            }, void 0, false, {\n                fileName: \"/Users/lhagvadorjbatulzii/LESSON/lesson-2-2/DATABASE2/LAB-10/1DATABASE_MANAGEMENT_LAB_10/pages/customer_task.js\",\n                lineNumber: 102,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lhagvadorjbatulzii/LESSON/lesson-2-2/DATABASE2/LAB-10/1DATABASE_MANAGEMENT_LAB_10/pages/customer_task.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n_s(CustomerPage, \"GFz4YU5Xykx6P+kPog5J8bL+hig=\");\n_c = CustomerPage;\nvar _c;\n$RefreshReg$(_c, \"CustomerPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFpQjtvQkFDakJDLE9BQU87b0JBQ1BDLFFBQVE7b0JBQ1JDLFFBQVE7Z0JBQ1Y7MEJBQ0Q7Ozs7Ozs7Ozs7OztBQUtQO0dBakh3QjdDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2N1c3RvbWVyX3Rhc2suanM/YTg0MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDdXN0b21lclBhZ2UoKSB7XG4gIGNvbnN0IFtzZWxlY3RlZEVtcGxveWVlLCBzZXRTZWxlY3RlZEVtcGxveWVlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbdGFza3MsIHNldFRhc2tzXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBoYW5kbGVBZGRUYXNrID0gKCkgPT4ge1xuICAgIC8vIFdoZW4gYWRkaW5nIGEgdGFzaywgc3RvcmUgdGhlIGZvbGxvd2luZyBkYXRhXG4gICAgY29uc3QgbmV3VGFzayA9IHtcbiAgICAgIGVtcGxveWVlOiBzZWxlY3RlZEVtcGxveWVlLFxuICAgICAgdGFza05hbWU6IFwiTmV3IFRhc2tcIixcbiAgICAgIHN0YXR1czogXCJQZW5kaW5nXCIsIC8vIFRoZSB0YXNrIHN0YXR1cyBjYW4gYmUgZWl0aGVyIFwiUGVuZGluZ1wiIG9yIFwiQ29tcGxldGVkXCJcbiAgICB9O1xuICAgIHNldFRhc2tzKFsuLi50YXNrcywgbmV3VGFza10pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVRhc2tTdGF0dXNDaGFuZ2UgPSAoaW5kZXgsIG5ld1N0YXR1cykgPT4ge1xuICAgIC8vIFdoZW4gY2hhbmdpbmcgdGhlIHRhc2sgc3RhdHVzLCB1cGRhdGUgdGhlIGZvbGxvd2luZyBkYXRhXG4gICAgY29uc3QgdXBkYXRlZFRhc2tzID0gWy4uLnRhc2tzXTtcbiAgICB1cGRhdGVkVGFza3NbaW5kZXhdLnN0YXR1cyA9IG5ld1N0YXR1cztcbiAgICBzZXRUYXNrcyh1cGRhdGVkVGFza3MpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcbiAgICAvLyBSZWRpcmVjdCB0byB0aGUgbG9naW4gcGFnZSB1cG9uIGxvZ291dFxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvbG9naW5cIjtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgICAgPHNlbGVjdFxuICAgICAgICBpZD1cImVtcGxveWVlLXNlbGVjdFwiXG4gICAgICAgIHZhbHVlPXtzZWxlY3RlZEVtcGxveWVlfVxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlbGVjdGVkRW1wbG95ZWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTBweFwiIH19XG4gICAgICA+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5TZWxlY3QgRW1wbG95ZWU8L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkpvaG4gRG9lXCI+Sm9obiBEb2U8L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkphbmUgU21pdGhcIj5KYW5lIFNtaXRoPC9vcHRpb24+XG4gICAgICA8L3NlbGVjdD5cblxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVBZGRUYXNrfSBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxMHB4XCIgfX0+XG4gICAgICAgIEFkZCBUYXNrXG4gICAgICA8L2J1dHRvbj5cblxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJ0YXNrLWlucHV0XCJcbiAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIwcHhcIiwgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fVxuICAgICAgPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPVwiYmFycy1pY29uLnN2Z1wiXG4gICAgICAgICAgYWx0PVwiQmFycyBJY29uXCJcbiAgICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxMHB4XCIgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkIGEgbmV3IHRhc2tcIlxuICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmc6IFwiNXB4XCIgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRyb2xzXCIgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXJzXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWN0aXZlXCIgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMTBweFwiIH19PlxuICAgICAgICAgICAgQWxsXG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjEwcHhcIiB9fT5QZW5kaW5nPC9zcGFuPlxuICAgICAgICAgIDxzcGFuPkNvbXBsZXRlZDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJjbGVhci1idG5cIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIjEwcHhcIixcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiNXB4IDEwcHhcIixcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMDA3YmZmXCIsXG4gICAgICAgICAgICBjb2xvcjogXCIjZmZmXCIsXG4gICAgICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxuICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgQ2xlYXIgQWxsXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJ0YXNrLWJveFwiPlxuICAgICAgICB7LyogRGlzcGxheSB0YXNrcyAqL31cbiAgICAgICAge3Rhc2tzLm1hcCgodGFzaywgaW5kZXgpID0+IChcbiAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XG4gICAgICAgICAgICA8c3Bhbj57dGFzay50YXNrTmFtZX08L3NwYW4+XG4gICAgICAgICAgICA8c3Bhbj57dGFzay5zdGF0dXN9PC9zcGFuPlxuICAgICAgICAgICAgey8qIENvbm5lY3QgdGFzayBzdGF0dXMgY2hhbmdlIHRvIG9uQ2xpY2sgZXZlbnQgKi99XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVRhc2tTdGF0dXNDaGFuZ2UoaW5kZXgsIFwiUGVuZGluZ1wiKX0+XG4gICAgICAgICAgICAgIE1hcmsgYXMgUGVuZGluZ1xuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVRhc2tTdGF0dXNDaGFuZ2UoaW5kZXgsIFwiQ29tcGxldGVkXCIpfT5cbiAgICAgICAgICAgICAgTWFyayBhcyBDb21wbGV0ZWRcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cblxuICAgICAgPGJ1dHRvblxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgcGFkZGluZzogXCI1cHggMTBweFwiLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZGMzNTQ1XCIsXG4gICAgICAgICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgICAgICAgIGJvcmRlcjogXCJub25lXCIsXG4gICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgTG9nIE91dFxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJDdXN0b21lclBhZ2UiLCJzZWxlY3RlZEVtcGxveWVlIiwic2V0U2VsZWN0ZWRFbXBsb3llZSIsInRhc2tzIiwic2V0VGFza3MiLCJoYW5kbGVBZGRUYXNrIiwibmV3VGFzayIsImVtcGxveWVlIiwidGFza05hbWUiLCJzdGF0dXMiLCJoYW5kbGVUYXNrU3RhdHVzQ2hhbmdlIiwiaW5kZXgiLCJuZXdTdGF0dXMiLCJ1cGRhdGVkVGFza3MiLCJoYW5kbGVMb2dvdXQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJkaXYiLCJjbGFzc05hbWUiLCJzZWxlY3QiLCJpZCIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0Iiwic3R5bGUiLCJtYXJnaW5Cb3R0b20iLCJvcHRpb24iLCJidXR0b24iLCJvbkNsaWNrIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5Ub3AiLCJpbWciLCJzcmMiLCJhbHQiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInBhZGRpbmciLCJzcGFuIiwibWFyZ2luTGVmdCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiYm9yZGVyIiwiY3Vyc29yIiwidWwiLCJtYXAiLCJ0YXNrIiwibGkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/customer_task.js\n"));

/***/ })

});