(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"],{

/***/ "./src/app/tab3/tab3.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3.page */ "./src/app/tab3/tab3.page.ts");







var Tab3PageModule = /** @class */ (function () {
    function Tab3PageModule() {
    }
    Tab3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"] }])
            ],
            declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
        })
    ], Tab3PageModule);
    return Tab3PageModule;
}());



/***/ }),

/***/ "./src/app/tab3/tab3.page.html":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header text-center>\n      <ion-toolbar>\n            <ion-title>\n                  Resultado\n            </ion-title>\n      </ion-toolbar>\n</ion-header>\n\n<ion-content text-center justify-content-center align-items-center style='height: 100%'>\n      <!-- <ion-img src=\"assets/Img/Mujeres/adulta joven.png\"></ion-img>\n      <h1>Sexo: Hombre/Mujer</h1>\n      <h3>Rango Etario: Niño/Adolecente/Adulto/AdultoMayor</h3> -->\n      <div class=\"post\" *ngFor=\"let post of arrayPosts\">\n            <h2>Titulo: {{post.title}}</h2>\n            <p>Usuario: {{post.userId}}</p>\n            <p>Id: {{post.id}}</p>\n            <p>Estado completo: {{post.completed}}</p>\n      </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/tab3/tab3.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  font-family: 'Montserrat','Verdana','Monaco',sans-serif;\n  font-size: 20px; }\n\nh3 {\n  font-family: 'Montserrat','Verdana','Monaco',sans-serif;\n  font-size: 10px; }\n\nion-img {\n  height: 50vh;\n  width: 50vw;\n  margin: auto;\n  margin-top: 10%;\n  display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZhYmlhbi9VVEVNL1Byb3llY3RvQ0QyMDE5L3NyYy9hcHAvdGFiMy90YWIzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLHVEQUFzRDtFQUN0RCxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsdURBQXNEO0VBQ3RELGVBQWUsRUFBQTs7QUFHakI7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGFiMy90YWIzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaDEge1xuICBmb250LWZhbWlseTonTW9udHNlcnJhdCcsJ1ZlcmRhbmEnLCdNb25hY28nLHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuaDMge1xuICBmb250LWZhbWlseTonTW9udHNlcnJhdCcsJ1ZlcmRhbmEnLCdNb25hY28nLHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuaW9uLWltZyB7XG4gIGhlaWdodDogNTB2aDtcbiAgd2lkdGg6IDUwdnc7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogMTAlO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/tab3/tab3.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _post_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../post-service.service */ "./src/app/post-service.service.ts");




var Tab3Page = /** @class */ (function () {
    function Tab3Page(navCtrl, postServices, toastCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.postServices = postServices;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
    }
    Tab3Page.prototype.ngOnInit = function () {
        // this.getPostsId('1');//Llamamos a la función getPost cuando la vista se cargue
        this.getAllPosts(); //Llamamos a la función getPost cuando la vista se cargue
    };
    Tab3Page.prototype.getAllPosts = function () {
        var _this = this;
        this.postServices.getAllTasks().subscribe(function (res) {
            console.log(res);
            _this.arrayPosts = res;
        });
    };
    Tab3Page.prototype.getPostsId = function (id) {
        var _this = this;
        this.postServices.getTask(id).subscribe(function (res) {
            console.log(res);
            _this.arrayPosts = Array.of(res);
        });
    };
    Tab3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab3',
            template: __webpack_require__(/*! ./tab3.page.html */ "./src/app/tab3/tab3.page.html"),
            styles: [__webpack_require__(/*! ./tab3.page.scss */ "./src/app/tab3/tab3.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _post_service_service__WEBPACK_IMPORTED_MODULE_3__["PostServiceProvider"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
    ], Tab3Page);
    return Tab3Page;
}());

// async ngOnInit() {
//     const loading = await this.loadingCtrl.create({
//         message: 'Cargando..',
//     });
//     await loading.present();
//     this.postServices.getAllTasks()
//         .subscribe(async (tasks) => {
//             console.log(tasks);
//             this.arrayPosts = tasks;
//             await loading.dismiss();
//         });
// }


/***/ })

}]);
//# sourceMappingURL=tab3-tab3-module.js.map