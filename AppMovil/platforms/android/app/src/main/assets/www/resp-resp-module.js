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

module.exports = "<ion-header text-center>\n      <ion-toolbar>\n            <ion-title>\n                  Resultado\n            </ion-title>\n      </ion-toolbar>\n</ion-header>\n\n<ion-content text-center justify-content-center align-items-center style='height: 100%'>\n      <ion-img src=\"{{ ruta }}\"></ion-img>\n      <h1>Sexo: {{ gender }}</h1>\n      <h3>Rango Etario: {{ age }}</h3>\n      <h3>Console: {{ error }}</h3>\n\n\n      <ion-button (click)=\"backHome()\">Volver al Inicio</ion-button>\n</ion-content>"

/***/ }),

/***/ "./src/app/resp/resp.page.scss":
/*!*************************************!*\
  !*** ./src/app/resp/resp.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-img {\n  height: 30vh;\n  width: 40vw;\n  margin: auto;\n  margin-top: 3vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZhYmlhbi9VVEVNL1Byb3llY3QyX1ZlcnNpb25GaWxlVHJhbnNmZXIvc3JjL2FwcC9yZXNwL3Jlc3AucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcmVzcC9yZXNwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pbWd7XG4gIGhlaWdodDogMzB2aDtcbiAgd2lkdGg6IDQwdnc7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogM3ZoO1xuICAvLyBkaXNwbGF5OiBibG9jaztcbn1cbiJdfQ== */"

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
    function RespPage(activatedRoute, toastCtrl, loadingCtrl, apiRestService, router) {
        this.activatedRoute = activatedRoute;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.apiRestService = apiRestService;
        this.router = router;
        this.ruta = 'assets/Img/';
    }
    RespPage.prototype.ngOnInit = function () {
        this.gender = this.activatedRoute.snapshot.paramMap.get('gender');
        this.age = this.activatedRoute.snapshot.paramMap.get('age');
        this.error = this.activatedRoute.snapshot.paramMap.get('error');
        this.mostrarResultados(this.gender, this.age, this.error);
    };
    RespPage.prototype.mostrarResultados = function (gender, age, error) {
        var seleccionImagen;
        if (gender == 'mujer') {
            this.gender = 'Mujer';
            seleccionImagen = 'Mujeres/';
            if (age == '20 a 29 años') {
                seleccionImagen += 'adulta joven.png';
            }
            else {
                seleccionImagen += 'bebeM.png';
            }
        }
        else {
            this.gender = 'Hombre';
            seleccionImagen = 'Hombres/';
            if (age == '20 a 29 años') {
                seleccionImagen += 'adulto joven.png';
            }
            else {
                seleccionImagen += 'bebeM.png';
            }
        }
        this.ruta += seleccionImagen;
    };
    RespPage.prototype.backHome = function () {
        this.router.navigate(['home']);
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
            _services_api_rest_service__WEBPACK_IMPORTED_MODULE_4__["ApiRestService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RespPage);
    return RespPage;
}());



/***/ })

}]);
//# sourceMappingURL=resp-resp-module.js.map