(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["resp-resp-module"],{

/***/ "./src/app/resp/resp.module.ts":
/*!*************************************!*\
  !*** ./src/app/resp/resp.module.ts ***!
  \*************************************/
/*! exports provided: RespPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RespPageModule", function() { return RespPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _resp_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resp.page */ "./src/app/resp/resp.page.ts");







var routes = [
    {
        path: '',
        component: _resp_page__WEBPACK_IMPORTED_MODULE_6__["RespPage"]
    }
];
var RespPageModule = /** @class */ (function () {
    function RespPageModule() {
    }
    RespPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_resp_page__WEBPACK_IMPORTED_MODULE_6__["RespPage"]]
        })
    ], RespPageModule);
    return RespPageModule;
}());



/***/ }),

/***/ "./src/app/resp/resp.page.html":
/*!*************************************!*\
  !*** ./src/app/resp/resp.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header text-center>\n      <ion-toolbar>\n            <ion-title>\n                  Resultado\n            </ion-title>\n      </ion-toolbar>\n</ion-header>\n\n<ion-content text-center justify-content-center align-items-center style='height: 100%'>\n      <!-- <ion-img src=\"assets/Img/Mujeres/adulta joven.png\"></ion-img>\n      <h1>Sexo: Hombre/Mujer</h1>\n      <h3>Rango Etario: Niño/Adolecente/Adulto/AdultoMayor</h3> -->\n\n      <h2>Titulo: {{title}}</h2>\n      <p>Usuario: {{userId}}</p>\n      <p>Id: {{id}}</p>\n      <p>Estado completo: {{completed}}</p>\n</ion-content>"

/***/ }),

/***/ "./src/app/resp/resp.page.scss":
/*!*************************************!*\
  !*** ./src/app/resp/resp.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3AvcmVzcC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/resp/resp.page.ts":
/*!***********************************!*\
  !*** ./src/app/resp/resp.page.ts ***!
  \***********************************/
/*! exports provided: RespPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RespPage", function() { return RespPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_api_rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../services/api-rest.service */ "./src/app/services/api-rest.service.ts");





var RespPage = /** @class */ (function () {
    function RespPage(activatedRoute, toastCtrl, loadingCtrl, apiRestService) {
        this.activatedRoute = activatedRoute;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.apiRestService = apiRestService;
    }
    RespPage.prototype.ngOnInit = function () {
        this.title = this.activatedRoute.snapshot.paramMap.get('title');
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        this.userId = this.activatedRoute.snapshot.paramMap.get('userId');
        this.completed = this.activatedRoute.snapshot.paramMap.get('completed');
    };
    RespPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-resp',
            template: __webpack_require__(/*! ./resp.page.html */ "./src/app/resp/resp.page.html"),
            styles: [__webpack_require__(/*! ./resp.page.scss */ "./src/app/resp/resp.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _services_api_rest_service__WEBPACK_IMPORTED_MODULE_4__["ApiRestService"]])
    ], RespPage);
    return RespPage;
}());



/***/ })

}]);
//# sourceMappingURL=resp-resp-module.js.map