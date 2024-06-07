/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./firebase/SettingFirebase.js":
/*!*************************************!*\
  !*** ./firebase/SettingFirebase.js ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   auth: () => (/* binding */ auth),\n/* harmony export */   db: () => (/* binding */ db),\n/* harmony export */   storage: () => (/* binding */ storage)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/storage */ \"firebase/storage\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_storage__WEBPACK_IMPORTED_MODULE_3__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_storage__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// Import the functions you need from the SDKs you need\n\n\n\n\n// TODO: Add SDKs for Firebase products that you want to use\n// https://firebase.google.com/docs/web/setup#available-libraries\n// Your web app's Firebase configuration\n// For Firebase JS SDK v7.20.0 and later, measurementId is optional\n// const firebaseConfig = {\n//   apiKey: \"AIzaSyDitqX-2cptNGEbs3XMqwey4t8suRpK1Lw\",\n//   authDomain: \"tgb-app-e24e1.firebaseapp.com\",\n//   projectId: \"tgb-app-e24e1\",\n//   storageBucket: \"tgb-app-e24e1.appspot.com\",\n//   messagingSenderId: \"119516132084\",\n//   appId: \"1:119516132084:web:3831395b00272e2c29a4a1\",\n//   measurementId: \"G-Y9ZG0RCZSG\",\n// };\nconst firebaseConfig = {\n    apiKey: \"AIzaSyDitqX-2cptNGEbs3XMqwey4t8suRpK1Lw\",\n    authDomain: \"tgb-app-e24e1.firebaseapp.com\",\n    projectId: \"tgb-app-e24e1\",\n    storageBucket: \"tgb-app-e24e1.appspot.com\",\n    messagingSenderId: \"119516132084\",\n    appId: \"1:119516132084:web:3831395b00272e2c29a4a1\",\n    measurementId: \"G-Y9ZG0RCZSG\"\n};\n// Initialize Firebase\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\n// if (!firebase.getApps.length) {\n//   firebase.initializeApp(firebaseConfig);\n//   }\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(app);\nconst storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getStorage)(app);\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZS9TZXR0aW5nRmlyZWJhc2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLHVEQUF1RDtBQUNWO0FBQ0w7QUFDVTtBQUNKO0FBQzlDLDREQUE0RDtBQUM1RCxpRUFBaUU7QUFFakUsd0NBQXdDO0FBQ3hDLG1FQUFtRTtBQUNuRSwyQkFBMkI7QUFDM0IsdURBQXVEO0FBQ3ZELGlEQUFpRDtBQUNqRCxnQ0FBZ0M7QUFDaEMsZ0RBQWdEO0FBQ2hELHVDQUF1QztBQUN2Qyx3REFBd0Q7QUFDeEQsbUNBQW1DO0FBQ25DLEtBQUs7QUFDTCxNQUFNSSxpQkFBaUI7SUFDckJDLFFBQVFDLHlDQUF3QztJQUNoREcsWUFBWUgsK0JBQTRDO0lBQ3hESyxXQUFXTCxlQUEyQztJQUN0RE8sZUFBZVAsMkJBQStDO0lBQzlEUyxtQkFBbUJULGNBQW9EO0lBQ3ZFVyxPQUFPWCwyQ0FBdUM7SUFDOUNhLGVBQWViLGNBQStDO0FBQ2hFO0FBRUEsc0JBQXNCO0FBQ3RCLE1BQU1lLE1BQU1yQiwyREFBYUEsQ0FBQ0k7QUFDMUIsa0NBQWtDO0FBQ2xDLDRDQUE0QztBQUM1QyxNQUFNO0FBRU4sTUFBTWtCLE9BQU9yQixzREFBT0EsQ0FBQ29CO0FBQ3JCLE1BQU1FLEtBQUtyQixnRUFBWUEsQ0FBQ21CO0FBQ3hCLE1BQU1HLFVBQVVyQiw0REFBVUEsQ0FBQ2tCO0FBRUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lYXN5X2FwcHJvdmFsLy4vZmlyZWJhc2UvU2V0dGluZ0ZpcmViYXNlLmpzPzJlMzMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0IHRoZSBmdW5jdGlvbnMgeW91IG5lZWQgZnJvbSB0aGUgU0RLcyB5b3UgbmVlZFxyXG5pbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG5pbXBvcnQgeyBnZXRBdXRoIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcclxuaW1wb3J0IHsgZ2V0RmlyZXN0b3JlIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5pbXBvcnQgeyBnZXRTdG9yYWdlIH0gZnJvbSBcImZpcmViYXNlL3N0b3JhZ2VcIjtcclxuLy8gVE9ETzogQWRkIFNES3MgZm9yIEZpcmViYXNlIHByb2R1Y3RzIHRoYXQgeW91IHdhbnQgdG8gdXNlXHJcbi8vIGh0dHBzOi8vZmlyZWJhc2UuZ29vZ2xlLmNvbS9kb2NzL3dlYi9zZXR1cCNhdmFpbGFibGUtbGlicmFyaWVzXHJcblxyXG4vLyBZb3VyIHdlYiBhcHAncyBGaXJlYmFzZSBjb25maWd1cmF0aW9uXHJcbi8vIEZvciBGaXJlYmFzZSBKUyBTREsgdjcuMjAuMCBhbmQgbGF0ZXIsIG1lYXN1cmVtZW50SWQgaXMgb3B0aW9uYWxcclxuLy8gY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XHJcbi8vICAgYXBpS2V5OiBcIkFJemFTeURpdHFYLTJjcHROR0ViczNYTXF3ZXk0dDhzdVJwSzFMd1wiLFxyXG4vLyAgIGF1dGhEb21haW46IFwidGdiLWFwcC1lMjRlMS5maXJlYmFzZWFwcC5jb21cIixcclxuLy8gICBwcm9qZWN0SWQ6IFwidGdiLWFwcC1lMjRlMVwiLFxyXG4vLyAgIHN0b3JhZ2VCdWNrZXQ6IFwidGdiLWFwcC1lMjRlMS5hcHBzcG90LmNvbVwiLFxyXG4vLyAgIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjExOTUxNjEzMjA4NFwiLFxyXG4vLyAgIGFwcElkOiBcIjE6MTE5NTE2MTMyMDg0OndlYjozODMxMzk1YjAwMjcyZTJjMjlhNGExXCIsXHJcbi8vICAgbWVhc3VyZW1lbnRJZDogXCJHLVk5WkcwUkNaU0dcIixcclxuLy8gfTtcclxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XHJcbiAgYXBpS2V5OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSVJFQkFTRV9BUElfS0VZLFxyXG4gIGF1dGhEb21haW46IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX0FVVEhfRE9NQUlOLFxyXG4gIHByb2plY3RJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfUFJPSkVDVF9JRCxcclxuICBzdG9yYWdlQnVja2V0OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSVJFQkFTRV9TVE9SQUdFX0JVQ0tFVCxcclxuICBtZXNzYWdpbmdTZW5kZXJJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfTUVTU0FHSU5HX1NFTkRFUl9JRCxcclxuICBhcHBJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfQVBQX0lELFxyXG4gIG1lYXN1cmVtZW50SWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX01FQVNVUkVNRU5UX0lELFxyXG59O1xyXG5cclxuLy8gSW5pdGlhbGl6ZSBGaXJlYmFzZVxyXG5jb25zdCBhcHAgPSBpbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcclxuLy8gaWYgKCFmaXJlYmFzZS5nZXRBcHBzLmxlbmd0aCkge1xyXG4vLyAgIGZpcmViYXNlLmluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xyXG4vLyAgIH1cclxuXHJcbmNvbnN0IGF1dGggPSBnZXRBdXRoKGFwcCk7XHJcbmNvbnN0IGRiID0gZ2V0RmlyZXN0b3JlKGFwcCk7XHJcbmNvbnN0IHN0b3JhZ2UgPSBnZXRTdG9yYWdlKGFwcCk7XHJcblxyXG5leHBvcnQgeyBhdXRoLCBkYiwgc3RvcmFnZSB9O1xyXG4iXSwibmFtZXMiOlsiaW5pdGlhbGl6ZUFwcCIsImdldEF1dGgiLCJnZXRGaXJlc3RvcmUiLCJnZXRTdG9yYWdlIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfRklSRUJBU0VfQVBJX0tFWSIsImF1dGhEb21haW4iLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9BVVRIX0RPTUFJTiIsInByb2plY3RJZCIsIk5FWFRfUFVCTElDX0ZJUkVCQVNFX1BST0pFQ1RfSUQiLCJzdG9yYWdlQnVja2V0IiwiTkVYVF9QVUJMSUNfRklSRUJBU0VfU1RPUkFHRV9CVUNLRVQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsIk5FWFRfUFVCTElDX0ZJUkVCQVNFX01FU1NBR0lOR19TRU5ERVJfSUQiLCJhcHBJZCIsIk5FWFRfUFVCTElDX0ZJUkVCQVNFX0FQUF9JRCIsIm1lYXN1cmVtZW50SWQiLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9NRUFTVVJFTUVOVF9JRCIsImFwcCIsImF1dGgiLCJkYiIsInN0b3JhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./firebase/SettingFirebase.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_protectedRoute__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/protectedRoute */ \"./pages/components/protectedRoute.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _redux_store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../redux/store/store */ \"./redux/store/store.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./globals.css */ \"./pages/globals.css\");\n/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_globals_css__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_protectedRoute__WEBPACK_IMPORTED_MODULE_1__]);\n_components_protectedRoute__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {\n        store: _redux_store_store__WEBPACK_IMPORTED_MODULE_3__.store,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_protectedRoute__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"D:\\\\Webapps\\\\Work\\\\easy_approval\\\\pages\\\\_app.js\",\n                lineNumber: 11,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\Webapps\\\\Work\\\\easy_approval\\\\pages\\\\_app.js\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Webapps\\\\Work\\\\easy_approval\\\\pages\\\\_app.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5RDtBQUNsQjtBQUNJO0FBQ2pCO0FBQ0g7QUFFUixTQUFTSSxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ2xELHFCQUNFLDhEQUFDTCxpREFBUUE7UUFBQ0MsT0FBT0EscURBQUtBO2tCQUNwQiw0RUFBQ0Ysa0VBQWNBO3NCQUNiLDRFQUFDSztnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7O0FBSWhDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWFzeV9hcHByb3ZhbC8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvdGVjdGVkUm91dGUgZnJvbSBcIi4vY29tcG9uZW50cy9wcm90ZWN0ZWRSb3V0ZVwiO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSBcIi9yZWR1eC9zdG9yZS9zdG9yZVwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFwiLi9nbG9iYWxzLmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICA8UHJvdGVjdGVkUm91dGU+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvUHJvdGVjdGVkUm91dGU+XG4gICAgPC9Qcm92aWRlcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJQcm90ZWN0ZWRSb3V0ZSIsIlByb3ZpZGVyIiwic3RvcmUiLCJSZWFjdCIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./pages/components/protectedRoute.js":
/*!********************************************!*\
  !*** ./pages/components/protectedRoute.js ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _redux_actions_authAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/actions/authAction */ \"./redux/actions/authAction.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_redux_actions_authAction__WEBPACK_IMPORTED_MODULE_4__]);\n_redux_actions_authAction__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nconst ProtectedRoute = ({ children })=>{\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n    const login = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.auth.isLoading);\n    const route = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        dispatch((0,_redux_actions_authAction__WEBPACK_IMPORTED_MODULE_4__.listentoAuthChanges)());\n    }, [\n        dispatch\n    ]);\n    const [IsLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const checkLogin = async ()=>{\n            if (login === \"noLogged\") {\n                route.replace(\"/login\");\n                setTimeout(()=>{\n                    setIsLoading(false);\n                }, 1000);\n            } else if (login === \"logged\") {\n                setIsLoading(false);\n            }\n        };\n        checkLogin();\n    }, [\n        login\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: IsLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: \"Loading\"\n        }, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: children\n        }, void 0, false)\n    }, void 0, false);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProtectedRoute);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL3Byb3RlY3RlZFJvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStEO0FBQ3ZCO0FBQ2U7QUFDYztBQUVyRSxNQUFNUSxpQkFBaUIsQ0FBQyxFQUFFQyxRQUFRLEVBQUU7SUFDbEMsTUFBTUMsV0FBV0osd0RBQVdBO0lBQzVCLE1BQU1LLFFBQVFOLHdEQUFXQSxDQUFDLENBQUNPLFFBQVVBLE1BQU1DLElBQUksQ0FBQ0MsU0FBUztJQUN6RCxNQUFNQyxRQUFRWCxzREFBU0E7SUFDdkJGLGdEQUFTQSxDQUFDO1FBQ1JRLFNBQVNILDhFQUFtQkE7SUFDOUIsR0FBRztRQUFDRztLQUFTO0lBQ2IsTUFBTSxDQUFDTSxXQUFXQyxhQUFhLEdBQUdkLCtDQUFRQSxDQUFDO0lBQzNDRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1nQixhQUFhO1lBQ2pCLElBQUlQLFVBQVUsWUFBWTtnQkFDeEJJLE1BQU1JLE9BQU8sQ0FBQztnQkFFZEMsV0FBVztvQkFDVEgsYUFBYTtnQkFDZixHQUFHO1lBQ0wsT0FBTyxJQUFJTixVQUFVLFVBQVU7Z0JBQzdCTSxhQUFhO1lBQ2Y7UUFDRjtRQUNBQztJQUNGLEdBQUc7UUFBQ1A7S0FBTTtJQUVWLHFCQUFPO2tCQUFHSywwQkFBWTtzQkFBRTswQ0FBYTtzQkFBR1A7OztBQUMxQztBQUVBLGlFQUFlRCxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWFzeV9hcHByb3ZhbC8uL3BhZ2VzL2NvbXBvbmVudHMvcHJvdGVjdGVkUm91dGUuanM/NGZjYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IGxpc3RlbnRvQXV0aENoYW5nZXMgfSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy9hdXRoQWN0aW9uXCI7XHJcblxyXG5jb25zdCBQcm90ZWN0ZWRSb3V0ZSA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgbG9naW4gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmF1dGguaXNMb2FkaW5nKTtcclxuICBjb25zdCByb3V0ZSA9IHVzZVJvdXRlcigpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChsaXN0ZW50b0F1dGhDaGFuZ2VzKCkpO1xyXG4gIH0sIFtkaXNwYXRjaF0pO1xyXG4gIGNvbnN0IFtJc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgY2hlY2tMb2dpbiA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKGxvZ2luID09PSBcIm5vTG9nZ2VkXCIpIHtcclxuICAgICAgICByb3V0ZS5yZXBsYWNlKFwiL2xvZ2luXCIpO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgIH0gZWxzZSBpZiAobG9naW4gPT09IFwibG9nZ2VkXCIpIHtcclxuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgY2hlY2tMb2dpbigpO1xyXG4gIH0sIFtsb2dpbl0pO1xyXG5cclxuICByZXR1cm4gPD57SXNMb2FkaW5nID8gPD5Mb2FkaW5nPC8+IDogPD57Y2hpbGRyZW59PC8+fTwvPjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb3RlY3RlZFJvdXRlO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJ1c2VTZWxlY3RvciIsInVzZURpc3BhdGNoIiwibGlzdGVudG9BdXRoQ2hhbmdlcyIsIlByb3RlY3RlZFJvdXRlIiwiY2hpbGRyZW4iLCJkaXNwYXRjaCIsImxvZ2luIiwic3RhdGUiLCJhdXRoIiwiaXNMb2FkaW5nIiwicm91dGUiLCJJc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJjaGVja0xvZ2luIiwicmVwbGFjZSIsInNldFRpbWVvdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/protectedRoute.js\n");

/***/ }),

/***/ "./redux/actions/authAction.js":
/*!*************************************!*\
  !*** ./redux/actions/authAction.js ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   listentoAuthChanges: () => (/* binding */ listentoAuthChanges)\n/* harmony export */ });\n/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../features/auth/authSlice */ \"./redux/features/auth/authSlice.js\");\n/* harmony import */ var _firebase_SettingFirebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../firebase/SettingFirebase */ \"./firebase/SettingFirebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var _features_userDetail_userDetailSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../features/userDetail/userDetailSlice */ \"./redux/features/userDetail/userDetailSlice.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase_SettingFirebase__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__]);\n([_firebase_SettingFirebase__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n// const dispatch = useDispatch();\nconst listentoAuthChanges = ()=>(dispatch)=>{\n        _firebase_SettingFirebase__WEBPACK_IMPORTED_MODULE_1__.auth.onAuthStateChanged(async (user)=>{\n            if (user) {\n                dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_0__.setUser)({\n                    userID: user.uid,\n                    email: user.email,\n                    accessToken: user.accessToken,\n                    isLoading: \"logged\"\n                }));\n                try {\n                    const snapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(_firebase_SettingFirebase__WEBPACK_IMPORTED_MODULE_1__.db, \"users\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.where)(\"email\", \"==\", user.email)));\n                    if (snapshot.docs.length > 0) {\n                        const results = await Promise.all(snapshot.docs.map((data)=>{\n                            return data.data();\n                        }));\n                        dispatch((0,_features_userDetail_userDetailSlice__WEBPACK_IMPORTED_MODULE_3__.updateUserDetails)(results));\n                    // console.log(\"User Found\");\n                    } else {\n                    // console.log(\"User not found\");\n                    }\n                } catch (error) {\n                    console.error(\"Error getting user details\", error.message);\n                }\n            } else {\n                dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_0__.clearUser)({\n                    isLoading: \"noLogged\"\n                }));\n            }\n        });\n    };\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9hY3Rpb25zL2F1dGhBY3Rpb24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBZ0U7QUFDUjtBQUNlO0FBSXZCO0FBRWhELGtDQUFrQztBQUMzQixNQUFNVSxzQkFBb0IsSUFBSSxDQUFDQztRQUNsQ1QsMkRBQUlBLENBQUNVLGtCQUFrQixDQUFFLE9BQU1DO1lBQ2xDLElBQUlBLE1BQU07Z0JBQ1BGLFNBQVNYLGlFQUFPQSxDQUFDO29CQUFDYyxRQUFPRCxLQUFLRSxHQUFHO29CQUFDQyxPQUFNSCxLQUFLRyxLQUFLO29CQUFDQyxhQUFZSixLQUFLSSxXQUFXO29CQUFFQyxXQUFVO2dCQUFRO2dCQUNuRyxJQUFJO29CQUNKLE1BQU1DLFdBQVcsTUFBTWYsMkRBQU9BLENBQzVCQyx5REFBS0EsQ0FDSEMsOERBQVVBLENBQ1JILHlEQUFFQSxFQUNGLFVBQ0FJLHlEQUFLQSxDQUFDLFNBQVMsTUFBTU0sS0FBS0csS0FBSztvQkFFckMsSUFBSUcsU0FBU0MsSUFBSSxDQUFDQyxNQUFNLEdBQUMsR0FBRzt3QkFDdEIsTUFBTUMsVUFBVSxNQUFNQyxRQUFRQyxHQUFHLENBQy9CTCxTQUFTQyxJQUFJLENBQUNLLEdBQUcsQ0FBQyxDQUFDQzs0QkFDakIsT0FBT0EsS0FBS0EsSUFBSTt3QkFDbEI7d0JBRUpmLFNBQVNILHVGQUFpQkEsQ0FBQ2M7b0JBQzNCLDZCQUE2QjtvQkFFakMsT0FDSTtvQkFDQSxpQ0FBaUM7b0JBQ3JDO2dCQUNKLEVBQUUsT0FBT0ssT0FBTztvQkFDWkMsUUFBUUQsS0FBSyxDQUFDLDhCQUE4QkEsTUFBTUUsT0FBTztnQkFDN0Q7WUFDQyxPQUNJO2dCQUNMbEIsU0FBU1YsbUVBQVNBLENBQUM7b0JBQUNpQixXQUFVO2dCQUFVO1lBQ3ZDO1FBQ0c7SUFFSixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWFzeV9hcHByb3ZhbC8uL3JlZHV4L2FjdGlvbnMvYXV0aEFjdGlvbi5qcz9iYzdhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNldFVzZXIsIGNsZWFyVXNlciB9IGZyb20gXCIuLi9mZWF0dXJlcy9hdXRoL2F1dGhTbGljZVwiO1xyXG5pbXBvcnQge2F1dGgsIGRifSBmcm9tIFwiLi4vLi4vZmlyZWJhc2UvU2V0dGluZ0ZpcmViYXNlXCI7XHJcbmltcG9ydCB7IGdldERvY3MsIHF1ZXJ5LCBjb2xsZWN0aW9uLCB3aGVyZSB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuaW1wb3J0IHtcclxuICB1cGRhdGVVc2VyRGV0YWlscyxcclxuICBjbGVhclVzZXJEZXRhaWxzLFxyXG59IGZyb20gXCIuLi9mZWF0dXJlcy91c2VyRGV0YWlsL3VzZXJEZXRhaWxTbGljZVwiO1xyXG5cclxuLy8gY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5leHBvcnQgY29uc3QgbGlzdGVudG9BdXRoQ2hhbmdlcz0oKT0+KGRpc3BhdGNoKT0+e1xyXG4gICAgYXV0aC5vbkF1dGhTdGF0ZUNoYW5nZWQoKGFzeW5jKHVzZXIpPT57XHJcbiBpZiAodXNlcikge1xyXG4gICAgZGlzcGF0Y2goc2V0VXNlcih7dXNlcklEOnVzZXIudWlkLGVtYWlsOnVzZXIuZW1haWwsYWNjZXNzVG9rZW46dXNlci5hY2Nlc3NUb2tlbiwgaXNMb2FkaW5nOlwibG9nZ2VkXCJ9KSk7XHJcbiAgICB0cnkge1xyXG4gICAgY29uc3Qgc25hcHNob3QgPSBhd2FpdCBnZXREb2NzKFxyXG4gICAgICBxdWVyeShcclxuICAgICAgICBjb2xsZWN0aW9uKFxyXG4gICAgICAgICAgZGIsXHJcbiAgICAgICAgICBcInVzZXJzXCIpLFxyXG4gICAgICAgICAgd2hlcmUoXCJlbWFpbFwiLCBcIj09XCIsIHVzZXIuZW1haWwpKVxyXG4gICAgKTtcclxuICAgIGlmIChzbmFwc2hvdC5kb2NzLmxlbmd0aD4wKSB7XHJcbiAgICAgICAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgUHJvbWlzZS5hbGwoXHJcbiAgICAgICAgICAgIHNuYXBzaG90LmRvY3MubWFwKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGRhdGEuZGF0YSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICBkaXNwYXRjaCh1cGRhdGVVc2VyRGV0YWlscyhyZXN1bHRzKSlcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlVzZXIgRm91bmRcIik7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiVXNlciBub3QgZm91bmRcIik7XHJcbiAgICB9XHJcbn0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZ2V0dGluZyB1c2VyIGRldGFpbHNcIiwgZXJyb3IubWVzc2FnZSlcclxufVxyXG4gfVxyXG4gZWxzZXtcclxuZGlzcGF0Y2goY2xlYXJVc2VyKHtpc0xvYWRpbmc6XCJub0xvZ2dlZFwifSkpO1xyXG4gfVxyXG4gICAgfSkpXHJcbiAgIFxyXG59Il0sIm5hbWVzIjpbInNldFVzZXIiLCJjbGVhclVzZXIiLCJhdXRoIiwiZGIiLCJnZXREb2NzIiwicXVlcnkiLCJjb2xsZWN0aW9uIiwid2hlcmUiLCJ1cGRhdGVVc2VyRGV0YWlscyIsImNsZWFyVXNlckRldGFpbHMiLCJsaXN0ZW50b0F1dGhDaGFuZ2VzIiwiZGlzcGF0Y2giLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJ1c2VyIiwidXNlcklEIiwidWlkIiwiZW1haWwiLCJhY2Nlc3NUb2tlbiIsImlzTG9hZGluZyIsInNuYXBzaG90IiwiZG9jcyIsImxlbmd0aCIsInJlc3VsdHMiLCJQcm9taXNlIiwiYWxsIiwibWFwIiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./redux/actions/authAction.js\n");

/***/ }),

/***/ "./redux/features/auth/authSlice.js":
/*!******************************************!*\
  !*** ./redux/features/auth/authSlice.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearUser: () => (/* binding */ clearUser),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   setUser: () => (/* binding */ setUser)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n    userID: null,\n    email: null,\n    accessToken: null,\n    isLoading: \"loading\"\n};\nconst authSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"auth\",\n    initialState,\n    reducers: {\n        setUser: (state, action)=>{\n            const { userID, email, accessToken, isLoading } = action.payload;\n            state.userID = userID;\n            state.email = email;\n            state.accessToken = accessToken;\n            state.isLoading = isLoading;\n        },\n        clearUser: (state, action)=>{\n            const { isLoading } = action.payload;\n            state.userID = null;\n            state.email = null;\n            state.accessToken = null;\n            state.isLoading = isLoading;\n        }\n    }\n});\nconst { setUser, clearUser } = authSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9mZWF0dXJlcy9hdXRoL2F1dGhTbGljZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE4QztBQUU5QyxNQUFNQyxlQUFhO0lBQ2ZDLFFBQU87SUFDUEMsT0FBTTtJQUNOQyxhQUFZO0lBQ1pDLFdBQVU7QUFDZDtBQUVBLE1BQU1DLFlBQVVOLDZEQUFXQSxDQUFDO0lBQ3hCTyxNQUFLO0lBQ0xOO0lBQ0FPLFVBQVM7UUFDTEMsU0FBUSxDQUFDQyxPQUFPQztZQUNaLE1BQU0sRUFBQ1QsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLFdBQVcsRUFBQ0MsU0FBUyxFQUFDLEdBQUNNLE9BQU9DLE9BQU87WUFDM0RGLE1BQU1SLE1BQU0sR0FBR0E7WUFDZlEsTUFBTVAsS0FBSyxHQUFHQTtZQUNkTyxNQUFNTixXQUFXLEdBQUdBO1lBQ3BCTSxNQUFNTCxTQUFTLEdBQUdBO1FBQ3RCO1FBQ0FRLFdBQVUsQ0FBQ0gsT0FBT0M7WUFDYixNQUFNLEVBQUVOLFNBQVMsRUFBRSxHQUFHTSxPQUFPQyxPQUFPO1lBQ3BDRixNQUFNUixNQUFNLEdBQUc7WUFDZlEsTUFBTVAsS0FBSyxHQUFHO1lBQ2RPLE1BQU1OLFdBQVcsR0FBRztZQUNwQk0sTUFBTUwsU0FBUyxHQUFHQTtRQUN2QjtJQUNKO0FBQ0o7QUFFTyxNQUFNLEVBQUVJLE9BQU8sRUFBRUksU0FBUyxFQUFFLEdBQUdQLFVBQVVRLE9BQU8sQ0FBQztBQUN4RCxpRUFBZVIsVUFBVVMsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWFzeV9hcHByb3ZhbC8uL3JlZHV4L2ZlYXR1cmVzL2F1dGgvYXV0aFNsaWNlLmpzPzU2MTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiXHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU9e1xyXG4gICAgdXNlcklEOm51bGwsXHJcbiAgICBlbWFpbDpudWxsLFxyXG4gICAgYWNjZXNzVG9rZW46bnVsbCxcclxuICAgIGlzTG9hZGluZzpcImxvYWRpbmdcIlxyXG59XHJcblxyXG5jb25zdCBhdXRoU2xpY2U9Y3JlYXRlU2xpY2Uoe1xyXG4gICAgbmFtZTpcImF1dGhcIixcclxuICAgIGluaXRpYWxTdGF0ZSxcclxuICAgIHJlZHVjZXJzOntcclxuICAgICAgICBzZXRVc2VyOihzdGF0ZSwgYWN0aW9uKT0+e1xyXG4gICAgICAgICAgICBjb25zdCB7dXNlcklELCBlbWFpbCwgYWNjZXNzVG9rZW4saXNMb2FkaW5nfT1hY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgc3RhdGUudXNlcklEID0gdXNlcklEO1xyXG4gICAgICAgICAgICBzdGF0ZS5lbWFpbCA9IGVtYWlsO1xyXG4gICAgICAgICAgICBzdGF0ZS5hY2Nlc3NUb2tlbiA9IGFjY2Vzc1Rva2VuO1xyXG4gICAgICAgICAgICBzdGF0ZS5pc0xvYWRpbmcgPSBpc0xvYWRpbmc7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjbGVhclVzZXI6KHN0YXRlLCBhY3Rpb24pPT57XHJcbiAgICAgICAgICAgICBjb25zdCB7IGlzTG9hZGluZyB9ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICAgICBzdGF0ZS51c2VySUQgPSBudWxsO1xyXG4gICAgICAgICAgICAgc3RhdGUuZW1haWwgPSBudWxsO1xyXG4gICAgICAgICAgICAgc3RhdGUuYWNjZXNzVG9rZW4gPSBudWxsO1xyXG4gICAgICAgICAgICAgc3RhdGUuaXNMb2FkaW5nID0gaXNMb2FkaW5nO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCB7IHNldFVzZXIsIGNsZWFyVXNlciB9ID0gYXV0aFNsaWNlLmFjdGlvbnM7XHJcbmV4cG9ydCBkZWZhdWx0IGF1dGhTbGljZS5yZWR1Y2VyOyJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImluaXRpYWxTdGF0ZSIsInVzZXJJRCIsImVtYWlsIiwiYWNjZXNzVG9rZW4iLCJpc0xvYWRpbmciLCJhdXRoU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJzZXRVc2VyIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwiY2xlYXJVc2VyIiwiYWN0aW9ucyIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./redux/features/auth/authSlice.js\n");

/***/ }),

/***/ "./redux/features/userDetail/userDetailSlice.js":
/*!******************************************************!*\
  !*** ./redux/features/userDetail/userDetailSlice.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearUserDetails: () => (/* binding */ clearUserDetails),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   updateUserDetails: () => (/* binding */ updateUserDetails)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n    userData: null\n};\nconst userDetailSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"user\",\n    initialState,\n    reducers: {\n        updateUserDetails: (state, action)=>{\n            state.userData = action.payload[0];\n        },\n        clearUserDetails: (state)=>{\n            state.userData = null;\n        }\n    }\n});\nconst { updateUserDetails, clearUserDetails } = userDetailSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userDetailSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9mZWF0dXJlcy91c2VyRGV0YWlsL3VzZXJEZXRhaWxTbGljZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUErQztBQUUvQyxNQUFNQyxlQUFhO0lBQ2ZDLFVBQVM7QUFDYjtBQUVBLE1BQU1DLGtCQUFnQkgsNkRBQVdBLENBQUM7SUFDOUJJLE1BQUs7SUFDTEg7SUFDQUksVUFBUztRQUNMQyxtQkFBa0IsQ0FBQ0MsT0FBT0M7WUFDdEJELE1BQU1MLFFBQVEsR0FBQ00sT0FBT0MsT0FBTyxDQUFDLEVBQUU7UUFDcEM7UUFDQUMsa0JBQWlCLENBQUNIO1lBQ2xCQSxNQUFNTCxRQUFRLEdBQUM7UUFDZjtJQUNKO0FBQ0o7QUFFTyxNQUFLLEVBQUNJLGlCQUFpQixFQUFFSSxnQkFBZ0IsRUFBQyxHQUFDUCxnQkFBZ0JRLE9BQU8sQ0FBQztBQUMxRSxpRUFBZVIsZ0JBQWdCUyxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lYXN5X2FwcHJvdmFsLy4vcmVkdXgvZmVhdHVyZXMvdXNlckRldGFpbC91c2VyRGV0YWlsU2xpY2UuanM/MTg3NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU9e1xyXG4gICAgdXNlckRhdGE6bnVsbFxyXG59XHJcblxyXG5jb25zdCB1c2VyRGV0YWlsU2xpY2U9Y3JlYXRlU2xpY2Uoe1xyXG4gICAgbmFtZTpcInVzZXJcIixcclxuICAgIGluaXRpYWxTdGF0ZSxcclxuICAgIHJlZHVjZXJzOntcclxuICAgICAgICB1cGRhdGVVc2VyRGV0YWlsczooc3RhdGUsIGFjdGlvbik9PntcclxuICAgICAgICAgICAgc3RhdGUudXNlckRhdGE9YWN0aW9uLnBheWxvYWRbMF07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjbGVhclVzZXJEZXRhaWxzOihzdGF0ZSk9PntcclxuICAgICAgICBzdGF0ZS51c2VyRGF0YT1udWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcblxyXG5leHBvcnQgY29uc3R7dXBkYXRlVXNlckRldGFpbHMsIGNsZWFyVXNlckRldGFpbHN9PXVzZXJEZXRhaWxTbGljZS5hY3Rpb25zO1xyXG5leHBvcnQgZGVmYXVsdCB1c2VyRGV0YWlsU2xpY2UucmVkdWNlcjsiXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJ1c2VyRGF0YSIsInVzZXJEZXRhaWxTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsInVwZGF0ZVVzZXJEZXRhaWxzIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwiY2xlYXJVc2VyRGV0YWlscyIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./redux/features/userDetail/userDetailSlice.js\n");

/***/ }),

/***/ "./redux/store/store.js":
/*!******************************!*\
  !*** ./redux/store/store.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   store: () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../features/auth/authSlice */ \"./redux/features/auth/authSlice.js\");\n/* harmony import */ var _features_userDetail_userDetailSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../features/userDetail/userDetailSlice */ \"./redux/features/userDetail/userDetailSlice.js\");\n\n\n\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: {\n        auth: _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        user: _features_userDetail_userDetailSlice__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9zdG9yZS9zdG9yZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFrRDtBQUNHO0FBQ2tCO0FBQ2hFLE1BQU1HLFFBQU1ILGdFQUFjQSxDQUFDO0lBQzlCSSxTQUFRO1FBQ0pDLE1BQUtKLGdFQUFXQTtRQUNoQkssTUFBS0osNEVBQWlCQTtJQUMxQjtBQUNKLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lYXN5X2FwcHJvdmFsLy4vcmVkdXgvc3RvcmUvc3RvcmUuanM/OTczZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25maWd1cmVTdG9yZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCBhdXRoUmVkdWNlciBmcm9tIFwiLi4vZmVhdHVyZXMvYXV0aC9hdXRoU2xpY2VcIjtcclxuaW1wb3J0IHVzZXJEZXRhaWxSZWR1Y2VyIGZyb20gXCIuLi9mZWF0dXJlcy91c2VyRGV0YWlsL3VzZXJEZXRhaWxTbGljZVwiO1xyXG5leHBvcnQgY29uc3Qgc3RvcmU9Y29uZmlndXJlU3RvcmUoe1xyXG4gICAgcmVkdWNlcjp7XHJcbiAgICAgICAgYXV0aDphdXRoUmVkdWNlcixcclxuICAgICAgICB1c2VyOnVzZXJEZXRhaWxSZWR1Y2VyLFxyXG4gICAgfVxyXG59KTsiXSwibmFtZXMiOlsiY29uZmlndXJlU3RvcmUiLCJhdXRoUmVkdWNlciIsInVzZXJEZXRhaWxSZWR1Y2VyIiwic3RvcmUiLCJyZWR1Y2VyIiwiYXV0aCIsInVzZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./redux/store/store.js\n");

/***/ }),

/***/ "./pages/globals.css":
/*!***************************!*\
  !*** ./pages/globals.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/auth");;

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/firestore");;

/***/ }),

/***/ "firebase/storage":
/*!***********************************!*\
  !*** external "firebase/storage" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/storage");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();