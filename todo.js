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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/striper.jpg */ \"./src/images/striper.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/forest.jpg */ \"./src/images/forest.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/mark.PNG */ \"./src/images/mark.PNG\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n  --green: rgb(72, 174, 192);\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font: inherit;\n}\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 50px;\n  font-family: parkinsans;\n  font-size: 20px;\n  font-weight: 600;\n  letter-spacing: 2px;\n  position: fixed;\n  width: 100%;\n  height: 10vh;\n  z-index: 10;\n  background-color: #e6e6e6;\n}\n\n#nav {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 50px;\n}\n\n.homeCont img {\n  width: 50px;\n  border-radius: 50%;\n}\n\n.homeCont {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 30px;\n  transition: color 0.5s ease;\n  cursor: pointer;\n  touch-action: manipulation;\n}\n\n.itemCont {\n  width: 100%;\n  height: 100%;\n  display: grid;\n  color: white;\n  letter-spacing: 1px;\n}\n\n.navItem {\n  place-self: center;\n  cursor: pointer;\n  pointer-events: auto;\n  color: black;\n  transition: color 0.5s ease;\n  font-size: 16px;\n  touch-action: manipulation;\n}\n\n.overlay {\n  width: 100%;\n  background: linear-gradient(45deg, rgba(0, 0, 0, 0.05) 25%, transparent 25%),\n    linear-gradient(-45deg, rgba(0, 0, 0, 0.05) 25%, transparent 25%),\n    linear-gradient(45deg, transparent 75%, rgba(0, 0, 0, 0.05) 75%),\n    linear-gradient(-45deg, transparent 75%, rgba(0, 0, 0, 0.05) 75%);\n  background-size: 120px 60px;\n  font-family: kanit;\n  font-weight: 600;\n  position: relative;\n  height: 100vh;\n  display: grid;\n  place-items: center;\n}\n\n.overlayContainer {\n  margin: auto;\n  display: grid;\n  place-items: center;\n}\n\n.overlayContainer h1 {\n  text-align: center;\n  font-size: 70px;\n  letter-spacing: 2px;\n}\n\n.overlayContainer button {\n  padding: 20px 80px;\n  background-color: var(--green);\n  outline: none;\n  border: none;\n  border-radius: 10px;\n  letter-spacing: 2px;\n  font-size: 18px;\n  font-weight: bold;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.445);\n  color: white;\n  cursor: pointer;\n  transition: color 0.5s ease;\n  transition: background-color 0.5s ease;\n  touch-action: manipulation;\n}\n\n.linkContainer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  position: absolute;\n  left: 0;\n  bottom: 50%;\n  top: 50%;\n}\n\n.linkContainer img {\n  width: 50px;\n  height: auto;\n  cursor: pointer;\n  animation: pulse 2s infinite ease-in-out;\n}\n\n.linkContainer div {\n  width: 100%;\n  cursor: pointer;\n  padding: 10px;\n  transition: background-color 0.5s ease;\n  background-color: #00000011;\n  touch-action: manipulation;\n}\n\n.homeGithub {\n  border-top-right-radius: 10px;\n}\n\n.homeLinkedIn {\n  border-bottom-right-radius: 10px;\n}\n\n.buttonCont {\n  display: grid;\n  place-items: center;\n}\n\n@keyframes pulse {\n  0%,\n  100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.04);\n  }\n}\n\n.about {\n  justify-items: center;\n  padding: 100px 200px;\n  background-color: rgba(0, 0, 0, 0.05);\n}\n\n.aboutDiv p {\n  padding: 40px 0;\n  font-weight: 300;\n  font-size: 18px;\n  letter-spacing: 1px;\n  text-align: justify;\n  line-height: 2;\n}\n\n.aboutDiv {\n  grid-row: 2 / 3;\n  grid-column: 1 / 2;\n  font-family: kanit;\n  flex-basis: 50%;\n}\n\n.aboutDiv h2,\n.skillsDiv h2 {\n  font-size: 26px;\n  font-weight: 500;\n  font-family: kanit;\n  letter-spacing: 1.5px;\n}\n\n.backgroundDiv {\n  display: grid;\n  place-items: center;\n  background-color: rgba(255, 255, 255, 0.5);\n  box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);\n  width: 80%;\n  padding: 40px 0;\n  border-radius: 20px;\n  margin: 10px 0 20px 0;\n}\n\n.backgroundDiv p {\n  font-weight: 300;\n  font-size: 18px;\n  letter-spacing: 1px;\n  line-height: 2;\n  width: 60%;\n  text-align: center;\n}\n\n.imgCard,\n.imgCardTwo,\n.imgCardThree {\n  min-width: 250px;\n  border-radius: 12px;\n  min-height: 250px;\n  box-shadow: 0 0 50px rgba(0, 0, 0, 0.4);\n  background-position: center;\n  position: absolute;\n  transition: transform 0.3s ease-in-out;\n  touch-action: manipulation;\n}\n\n.imgCardTwo {\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n  background-size: cover;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 2;\n  transition:\n    transform 0.5s ease,\n    z-index 0s;\n}\n\n.imgCard {\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n  background-size: cover;\n  top: 10%;\n  left: -30%;\n  transform: translate(-50%, -50%);\n  transform: rotate(-10deg);\n  z-index: 1;\n  transition:\n    transform 0.5s ease,\n    z-index 0s;\n}\n\n.imgCardThree {\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});\n  background-size: cover;\n  top: 10%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  transform: rotate(10deg);\n  z-index: 3;\n  transition:\n    transform 0.5s ease,\n    z-index 0s;\n}\n\n.cardContainer {\n  position: relative;\n  width: 300px;\n  height: 300px;\n}\n\nspan {\n  font-weight: 600;\n}\n\n#projectSpan {\n  cursor: pointer;\n  transition: color 0.5s ease;\n  touch-action: manipulation;\n}\n\n.aboutDiv button {\n  padding: 16px 40px;\n  background-color: var(--green);\n  outline: none;\n  border: none;\n  border-radius: 10px;\n  letter-spacing: 2px;\n  font-size: 18px;\n  font-weight: bold;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.445);\n  color: white;\n  cursor: pointer;\n  transition: color 0.5s ease;\n  transition: background-color 0.5s ease;\n  touch-action: manipulation;\n}\n\n.aboutMainContainer {\n  display: flex;\n  gap: 100px;\n  padding-top: 50px;\n}\n\n.skillsDiv {\n  grid-row: 2 / 3;\n  grid-column: 2 / 3;\n  flex-basis: 50%;\n}\n\n.skillsContainer {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 40px 0 0 0;\n  gap: 20px;\n  justify-content: center;\n}\n\n.skillsContainer img {\n  max-width: 100%;\n  min-height: 100%;\n  object-fit: contain;\n}\n\n.iconContainer {\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);\n  display: grid;\n  place-items: center;\n  padding: 20px;\n  border-radius: 20px;\n  font-family: kanit;\n  font-weight: 500;\n  letter-spacing: 1px;\n  width: 160px;\n  height: 200px;\n  text-align: center;\n}\n\n.iconContainer h3 {\n  padding-top: 10px;\n}\n\n.aboutLabelDiv,\n.projectLabelDiv,\n.contactLabelDiv {\n  display: grid;\n  place-items: center;\n  gap: 40px;\n}\n\n.aboutLabelDiv h1,\n.projectLabelDiv h1,\n.contactLabelDiv h1 {\n  font-family: montserrat;\n  font-weight: 400;\n  letter-spacing: 2px;\n  font-size: 60px;\n}\n\n.line {\n  width: 250px;\n  height: 1px;\n  background-color: var(--green);\n  margin: 0 auto;\n  margin-bottom: 20px;\n}\n\n.projectLabelDiv {\n  padding-bottom: 40px;\n}\n\nsection.projects {\n  justify-items: center;\n  margin: auto;\n  padding: 100px 200px;\n}\n\n.projectContainer {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  flex-direction: column;\n  font-family: kanit;\n  font-size: 20px;\n  font-weight: 250;\n  line-height: 2;\n  gap: 50px;\n}\n\n.projectInfo h2 {\n  font-size: 26px;\n  font-weight: 500;\n  letter-spacing: 2px;\n}\n\n.mockupContainer {\n  height: auto;\n  border-radius: 5px;\n  display: grid;\n  place-items: center;\n  flex-basis: 65%;\n}\n\n.mockupContainer img {\n  width: 100%;\n}\n\nimg.mity {\n  width: 40%;\n  border-radius: 5px;\n}\n\n.project {\n  display: flex;\n  gap: 50px;\n  flex: 1 1;\n}\n\n.projectInfo {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 20px;\n  flex-basis: 35%;\n}\n\n.projectInfo p {\n  text-align: justify;\n}\n\n.buttonContainer {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 20px;\n}\n\n.buttonContainer img {\n  width: 56px;\n  height: auto;\n  cursor: pointer;\n}\n\n.goButton {\n  width: 56px;\n  height: 56px;\n  background-color: var(--green);\n  text-align: center;\n  outline: none;\n  border: none;\n  border-radius: 50%;\n  letter-spacing: 2px;\n  font-size: 18px;\n  font-weight: bold;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.185);\n  color: white;\n  cursor: pointer;\n  transition: background-color 0.5s ease;\n  touch-action: manipulation;\n}\n\n.contact {\n  background-color: rgb(0, 0, 0);\n  margin: auto;\n  color: #e6e6e6;\n}\n\n.contactCenterDiv {\n  width: 80%;\n  padding: 20px 0;\n  display: grid;\n  place-items: center;\n  margin: auto;\n}\n\n.contactLabelDiv {\n  gap: 20px;\n}\n\n.contactContainer {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  font-family: kanit;\n  letter-spacing: 1px;\n  font-weight: 450;\n  justify-content: center;\n  color: #e6e6e6;\n}\n\n.contactHeading {\n  font-size: 19px;\n  font-weight: 450;\n  font-family: kanit;\n  text-align: center;\n  padding-bottom: 20px;\n}\n\n.contactInfoDiv {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  text-decoration: none;\n  color: inherit;\n}\n\n.contactInfoDiv p {\n  font-size: 17px;\n  font-weight: 400;\n}\n\n.contactIcon {\n  width: 28px;\n}\n\n.contactImg {\n  width: 274px;\n  height: auto;\n  border-radius: 10px;\n}\n\n.contactLinkContainer {\n  display: flex;\n  gap: 10px;\n}\n\n.contactLinkContainer img {\n  width: 36px;\n  cursor: pointer;\n}\n\n.contactFlexDiv {\n  display: flex;\n  justify-content: space-evenly;\n  width: 100%;\n}\n\n@media (max-width: 1600px) {\n  section.projects {\n    padding: 100px;\n  }\n}\n\n@media (max-width: 1183px) {\n  .iconContainer {\n    width: 136px;\n    height: 170px;\n  }\n\n  .backgroundDiv p {\n    width: 80%;\n  }\n\n  .about,\n  section.projects {\n    padding: 50px;\n  }\n  .project {\n    flex-direction: column;\n  }\n}\n\n@media (max-width: 1093px) {\n  .iconContainer {\n    width: 120px;\n    height: 150px;\n  }\n\n  .aboutDiv p {\n    font-size: 16px;\n  }\n\n  .backgroundDiv p {\n    font-size: 16px;\n  }\n\n  .overlay h1 {\n    font-size: 60px;\n  }\n\n  .iconContainer h3 {\n    padding-top: 10px;\n    font-size: 14px;\n  }\n  .responsive {\n    padding-bottom: 5px;\n    padding-top: -5px;\n  }\n}\n\n@media (max-width: 900px) {\n  .aboutMainContainer {\n    flex-direction: column;\n  }\n\n  .aboutDiv p {\n    padding: 10px 0 20px 0;\n    font-size: 16px;\n  }\n\n  .backgroundDiv p {\n    font-size: 16px;\n  }\n\n  .backgroundDiv {\n    padding: 20px 0;\n  }\n\n  .aboutMainContainer {\n    gap: 50px;\n  }\n\n  .skillsContainer {\n    padding-top: 20px;\n  }\n\n  header {\n    font-size: 17px;\n    padding: 20px;\n  }\n\n  .navItem {\n    font-size: 15px;\n  }\n\n  #nav {\n    gap: 20px;\n  }\n\n  .homeCont img {\n    width: 40px;\n  }\n\n  .overlay h1 {\n    font-size: 56px;\n  }\n\n  .linkContainer {\n    left: 50%;\n    top: 10vh;\n    align-items: flex-start;\n    flex-direction: row;\n    transform: translate(-50%);\n  }\n\n  .homeGithub {\n    border-bottom-left-radius: 10px;\n    border-top-right-radius: 0;\n  }\n\n  .contactHeading {\n    font-size: 16px;\n  }\n\n  .contactInfoDiv p {\n    font-size: 14px;\n  }\n}\n\n@media (max-width: 750px) {\n  #nav {\n    gap: 14px;\n  }\n\n  .homeCont {\n    gap: 20px;\n  }\n\n  .overlay h1 {\n    font-size: 42px;\n  }\n\n  header {\n    font-size: 15px;\n    height: 8vh;\n  }\n\n  .navItem {\n    font-size: 13px;\n  }\n\n  .imgCard,\n  .imgCardTwo,\n  .imgCardThree {\n    min-width: 200px;\n    border-radius: 12px;\n    min-height: 200px;\n    box-shadow: 0 0 50px rgba(0, 0, 0, 0.4);\n  }\n\n  .imgCard {\n    top: 20%;\n    left: -20%;\n  }\n\n  .imgCardTwo {\n    top: 50%;\n    left: 50%;\n  }\n\n  .imgCardThree {\n    top: 20%;\n    left: 50%;\n  }\n\n  .aboutLabelDiv,\n  .projectLabelDiv,\n  .contactLabelDiv {\n    gap: 20px;\n  }\n\n  .projectLabelDiv {\n    padding-bottom: 20px;\n  }\n\n  .cardContainer {\n    margin-top: -40px;\n  }\n\n  .aboutMainContainer {\n    padding-top: 0;\n  }\n\n  .contactImg {\n    width: 239px;\n  }\n\n  .contactCenterDiv {\n    width: 90%;\n  }\n\n  .linkContainer {\n    top: 8vh;\n  }\n\n  .linkContainer img {\n    width: 46px;\n  }\n}\n\n.menu-btn {\n  display: none;\n  background: none;\n  border: none;\n  font-size: 30px;\n  cursor: pointer;\n  color: black;\n}\n\n@media (max-width: 600px) {\n  #nav {\n    visibility: hidden;\n    display: flex;\n    flex-direction: column;\n    background-color: white;\n    position: absolute;\n    width: 50%;\n    top: 8vh;\n    right: 0;\n    gap: 0;\n    border-bottom-left-radius: 10px;\n    box-shadow: -20px 20px 20px rgba(0, 0, 0, 0.199);\n    opacity: 0;\n    transition:\n      opacity 0.3s ease,\n      visibility 0.3s ease;\n  }\n\n  .itemCont {\n    padding: 20px;\n    border-top: 1px solid rgb(0, 0, 0);\n  }\n\n  .home {\n    border-top: none;\n  }\n\n  .navItem {\n    font-size: 14px;\n  }\n\n  .menu-btn {\n    display: block;\n  }\n\n  #nav.active {\n    opacity: 1;\n    visibility: visible;\n  }\n\n  .contactImg {\n    width: 180px;\n  }\n\n  .contactCenterDiv {\n    width: 90%;\n  }\n\n  .contactFlexDiv {\n    justify-content: center;\n    gap: 20px;\n  }\n\n  .aboutLabelDiv h1,\n  .projectLabelDiv h1,\n  .contactLabelDiv h1 {\n    font-size: 50px;\n  }\n\n  .backgroundDiv {\n    width: 100%;\n    border-radius: 0;\n  }\n}\n\n@media (max-width: 500px) {\n  .aboutDiv button {\n    margin: 0 auto;\n  }\n\n  .aboutLabelDiv h1,\n  .projectLabelDiv h1,\n  .contactLabelDiv h1 {\n    font-size: 42px;\n  }\n\n  .line {\n    width: 150px;\n  }\n\n  .overlay h1 {\n    font-size: 30px;\n  }\n\n  .backgroundDiv p {\n    font-size: 15px;\n    width: 90%;\n  }\n\n  .overlayContainer button {\n    padding: 20px 60px;\n  }\n\n  .imgCard,\n  .imgCardTwo {\n    min-width: 200px;\n    border-radius: 8px;\n    min-height: 200px;\n  }\n\n  .imgCard {\n    top: 15%;\n    left: 5%;\n    transform: rotate(-12deg);\n  }\n\n  .imgCardTwo {\n    top: 52%;\n    left: 60%;\n    transform: rotate(7deg) translate(-50%, -50%);\n  }\n\n  .projectInfo h2 {\n    font-size: 20px;\n  }\n\n  .projectInfo p {\n    font-size: 18px;\n  }\n\n  .buttonContainer img,\n  .goButton {\n    width: 48px;\n    height: 48px;\n  }\n\n  .about,\n  section.projects {\n    padding: 20px;\n  }\n\n  .contactContainer {\n    flex-basis: 100%;\n  }\n\n  .contactHeading {\n    text-align: justify;\n  }\n}\n\n@media (max-width: 400px) {\n  .overlay p {\n    font-size: 16px;\n  }\n  .overlay h1 {\n    font-size: 24px;\n  }\n  .overlayContainer button {\n    padding: 20px 40px;\n  }\n\n  .linkContainer img {\n    width: 32px;\n  }\n}\n\n@media (max-width: 360px) {\n  .imgCard,\n  .imgCardTwo {\n    min-width: 170px;\n    border-radius: 8px;\n    min-height: 170px;\n  }\n\n  .imgCard {\n    top: 15%;\n    left: 10%;\n    transform: rotate(-12deg);\n  }\n\n  .cardContainer {\n    width: 300px;\n    height: 250px;\n  }\n}\n\n@media (hover: hover) {\n  .homeCont:hover {\n    color: var(--green);\n  }\n\n  .navItem:hover {\n    color: var(--green);\n  }\n\n  .overlayContainer button:hover {\n    color: white;\n    background-color: black;\n  }\n\n  .linkContainer div:hover {\n    background-color: rgba(72, 174, 192, 0.5);\n  }\n\n  .imgCard:hover {\n    transform: rotate(-5deg) scale(1.1);\n    z-index: 4;\n  }\n\n  .imgCardTwo:hover {\n    transform: translate(-50%, -50%) scale(1.1);\n    z-index: 4;\n  }\n\n  .imgCardThree:hover {\n    transform: rotate(5deg) scale(1.1);\n    z-index: 4;\n  }\n\n  #projectSpan:hover {\n    color: var(--green);\n  }\n\n  .aboutDiv button:hover {\n    color: white;\n    background-color: black;\n  }\n\n  .goButton:hover {\n    background-color: black;\n  }\n}\n\n.homeCont:active {\n  color: var(--green);\n}\n\n.navItem:active {\n  color: var(--green);\n}\n\n.overlayContainer button:active {\n  color: white;\n  background-color: black;\n}\n\n.linkContainer div:active {\n  background-color: rgba(72, 174, 192, 0.5);\n}\n\n.imgCard:active {\n  transform: rotate(-5deg) scale(1.1);\n  z-index: 4;\n}\n\n.imgCardTwo:active {\n  transform: translate(-50%, -50%) scale(1.1);\n  z-index: 4;\n}\n\n.imgCardThree:active {\n  transform: rotate(5deg) scale(1.1);\n  z-index: 4;\n}\n\n#projectSpan:active {\n  color: var(--green);\n}\n\n.aboutDiv button:active {\n  color: white;\n  background-color: black;\n}\n\n.goButton:active {\n  background-color: black;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://personal-website/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://personal-website/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://personal-website/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://personal-website/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://personal-website/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://personal-website/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://personal-website/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://personal-website/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://personal-website/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://personal-website/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://personal-website/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\ndocument.getElementById(\"menuToggle\").addEventListener(\"click\", function () {\n  document.getElementById(\"nav\").classList.toggle(\"active\");\n});\n\nfunction scrollToSection(buttonId, targetSectionId, headerSelector = \"header\") {\n  const button = document.getElementById(buttonId);\n  button.addEventListener(\"click\", () => {\n    const targetSection = document.getElementById(targetSectionId);\n    const headerHeight = document.querySelector(headerSelector).offsetHeight;\n    const offsetPosition = targetSection.offsetTop - headerHeight;\n\n    window.scrollTo({\n      top: offsetPosition,\n      behavior: \"smooth\",\n    });\n    const nav = document.getElementById(\"nav\");\n    if (nav.classList.contains(\"active\")) {\n      nav.classList.toggle(\"active\");\n    }\n  });\n}\n\nconst homeContainerButton = document.getElementById(\"homeContainer\");\nhomeContainerButton.addEventListener(\"click\", () => {\n  window.scrollTo({\n    top: 0,\n    left: 0,\n    behavior: \"smooth\",\n  });\n  const nav = document.getElementById(\"nav\");\n  if (nav.classList.contains(\"active\")) {\n    nav.classList.toggle(\"active\");\n  }\n});\n\nconst homeButton = document.getElementById(\"homeButton\");\nhomeButton.addEventListener(\"click\", () => {\n  window.scrollTo({\n    top: 0,\n    left: 0,\n    behavior: \"smooth\",\n  });\n  const nav = document.getElementById(\"nav\");\n  if (nav.classList.contains(\"active\")) {\n    nav.classList.toggle(\"active\");\n  }\n});\n\nconst aboutButton = document.getElementById(\"aboutButton\");\naboutButton.addEventListener(\"click\", () => {\n  scrollToSection(\"aboutButton\", \"about\");\n});\n\nconst projectsButton = document.getElementById(\"projectsButton\");\nprojectsButton.addEventListener(\"click\", () => {\n  scrollToSection(\"projectsButton\", \"projects\");\n});\n\nconst contactButton = document.getElementById(\"contactButton\");\ncontactButton.addEventListener(\"click\", () => {\n  scrollToSection(\"contactButton\", \"contact\");\n});\n\nconst projectSpan = document.getElementById(\"projectSpan\");\nprojectSpan.addEventListener(\"click\", () => {\n  scrollToSection(\"projectSpan\", \"projects\");\n});\n\nconst aboutContactButton = document.getElementById(\"aboutContactButton\");\naboutContactButton.addEventListener(\"click\", () => {\n  scrollToSection(\"aboutContactButton\", \"contact\");\n});\n\nconst mityGithubButton = document.getElementById(\"mityGithubButton\");\nmityGithubButton.addEventListener(\"click\", () => {\n  window.open(\"https://github.com/RLaVilla/fishing-tournament\", \"_blank\");\n});\n\nconst mityGoButton = document.getElementById(\"mityGoButton\");\nmityGoButton.addEventListener(\"click\", () => {\n  window.open(\"https://rlavilla.github.io/fishing-tournament\", \"_blank\");\n});\n\nconst battleshipGithubButton = document.getElementById(\n  \"battleshipGithubButton\"\n);\nbattleshipGithubButton.addEventListener(\"click\", () => {\n  window.open(\"https://github.com/RLaVilla/battleship-game\", \"_blank\");\n});\n\nconst battleshipGoButton = document.getElementById(\"battleshipGoButton\");\nbattleshipGoButton.addEventListener(\"click\", () => {\n  window.open(\"https://rlavilla.github.io/battleship-game/\", \"_blank\");\n});\n\nconst linkedInHomeButton = document.getElementById(\"linkedInHomeButton\");\nlinkedInHomeButton.addEventListener(\"click\", () => {\n  window.open(\"https://www.linkedin.com/in/robert-lavilla\", \"_blank\");\n});\n\nconst githubHomeButton = document.getElementById(\"githubHomeButton\");\ngithubHomeButton.addEventListener(\"click\", () => {\n  window.open(\"https://github.com/RLaVilla/\", \"_blank\");\n});\n\nconst linkedInContactButton = document.getElementById(\"linkedInContactButton\");\nlinkedInContactButton.addEventListener(\"click\", () => {\n  window.open(\"https://www.linkedin.com/in/robert-lavilla\", \"_blank\");\n});\nconst githubContactButton = document.getElementById(\"githubContactButton\");\ngithubContactButton.addEventListener(\"click\", () => {\n  window.open(\"https://github.com/RLaVilla/\", \"_blank\");\n});\n\nconst projectsHomeButton = document.getElementById(\"projectsHomeButton\");\nprojectsHomeButton.addEventListener(\"click\", () => {\n  scrollToSection(\"projectsHomeButton\", \"projects\");\n});\n\nfunction toggleImage(imgId) {\n  const img = document.getElementById(imgId);\n  if (window.innerWidth < 500) {\n    img.style.display = \"none\";\n  } else {\n    img.style.display = \"block\";\n  }\n}\n\ntoggleImage(\"removeImg\");\ntoggleImage(\"contactImg\");\n\nwindow.addEventListener(\"resize\", () => toggleImage(\"removeImg\"));\n\nwindow.addEventListener(\"resize\", () => toggleImage(\"contactImg\"));\n\n\n//# sourceURL=webpack://personal-website/./src/index.js?");

/***/ }),

/***/ "./src/images/forest.jpg":
/*!*******************************!*\
  !*** ./src/images/forest.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"82e899ea20c91dc5fc3b.jpg\";\n\n//# sourceURL=webpack://personal-website/./src/images/forest.jpg?");

/***/ }),

/***/ "./src/images/mark.PNG":
/*!*****************************!*\
  !*** ./src/images/mark.PNG ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"18aa5e692a92af132dc1.PNG\";\n\n//# sourceURL=webpack://personal-website/./src/images/mark.PNG?");

/***/ }),

/***/ "./src/images/striper.jpg":
/*!********************************!*\
  !*** ./src/images/striper.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"881bf2ceee6cc7b6ac5c.jpg\";\n\n//# sourceURL=webpack://personal-website/./src/images/striper.jpg?");

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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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