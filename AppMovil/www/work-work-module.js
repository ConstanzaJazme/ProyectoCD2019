(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["work-work-module"],{

/***/ "./src/app/work/work.module.ts":
/*!*************************************!*\
  !*** ./src/app/work/work.module.ts ***!
  \*************************************/
/*! exports provided: WorkPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkPageModule", function() { return WorkPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _work_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./work.page */ "./src/app/work/work.page.ts");







var routes = [
    {
        path: '',
        component: _work_page__WEBPACK_IMPORTED_MODULE_6__["WorkPage"]
    }
];
var WorkPageModule = /** @class */ (function () {
    function WorkPageModule() {
    }
    WorkPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_work_page__WEBPACK_IMPORTED_MODULE_6__["WorkPage"]]
        })
    ], WorkPageModule);
    return WorkPageModule;
}());



/***/ }),

/***/ "./src/app/work/work.page.html":
/*!*************************************!*\
  !*** ./src/app/work/work.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header text-center>\n      <ion-toolbar>\n            <ion-title>\n                  Trabajando\n            </ion-title>\n      </ion-toolbar>\n</ion-header>\n\n<ion-content text-center justify-content-center align-items-center style='height: 100%'>\n      <ion-img src=\"assets/Img/gif3.gif\"></ion-img>\n      <h1>Procesando Información</h1>\n      <h3>Espere un momento ...</h3>\n      <h3>{{ consulta }}</h3>\n      <h3>{{ nombre }}</h3>\n      <h3>{{ consola }}</h3>\n</ion-content>"

/***/ }),

/***/ "./src/app/work/work.page.scss":
/*!*************************************!*\
  !*** ./src/app/work/work.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  font-family: 'Montserrat','Verdana','Monaco',sans-serif;\n  font-size: 20px; }\n\nh3 {\n  font-family: 'Montserrat','Verdana','Monaco',sans-serif;\n  font-size: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZhYmlhbi9VVEVNL1Byb3llY3QyX1ZlcnNpb25GaWxlVHJhbnNmZXIvc3JjL2FwcC93b3JrL3dvcmsucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdURBQXNEO0VBQ3RELGVBQWUsRUFBQTs7QUFHakI7RUFDRSx1REFBc0Q7RUFDdEQsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvd29yay93b3JrLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcbiAgZm9udC1mYW1pbHk6J01vbnRzZXJyYXQnLCdWZXJkYW5hJywnTW9uYWNvJyxzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbmgzIHtcbiAgZm9udC1mYW1pbHk6J01vbnRzZXJyYXQnLCdWZXJkYW5hJywnTW9uYWNvJyxzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/work/work.page.ts":
/*!***********************************!*\
  !*** ./src/app/work/work.page.ts ***!
  \***********************************/
/*! exports provided: WorkPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkPage", function() { return WorkPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_api_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/api-rest.service */ "./src/app/services/api-rest.service.ts");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");







var WorkPage = /** @class */ (function () {
    function WorkPage(apiRestService, router, activatedRoute, transfer, file) {
        this.apiRestService = apiRestService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.transfer = transfer;
        this.file = file;
        this.api = 'http://0.0.0.0:8000/audio/ingresar';
        this.fileTransfer = this.transfer.create();
    }
    WorkPage.prototype.ngOnInit = function () {
        this.consulta = this.activatedRoute.snapshot.paramMap.get('consulta');
        this.nombre = this.activatedRoute.snapshot.paramMap.get('name');
        console.log(this.consulta, this.nombre);
        this.upload(this.consulta, this.nombre);
        // this.getPostsId('1');
    };
    WorkPage.prototype.upload = function (fileURL, name) {
        var _this = this;
        var options = {
            fileKey: 'file',
            fileName: name,
            headers: {}
        };
        this.fileTransfer.upload(fileURL + name, this.api, options)
            .then(function (data) {
            console.log(data);
            _this.consola = "Algo bueno esta pasando";
            setTimeout(function () {
                _this.router.navigate([
                    'resp',
                    data['gender'],
                    data['age'],
                    data['error'],
                ]);
            }, 2000); //Tiempo antes de redireccionar
        }, function (err) {
            console.log(err);
            _this.consola = "Mejor revisa el codigo" + err;
        });
    };
    WorkPage.prototype.getPostsId = function (id) {
        var _this = this;
        this.apiRestService.getTask(id).subscribe(function (res) {
            // res = Array.of(res);
            console.log(res);
            setTimeout(function () {
                _this.router.navigate([
                    'resp',
                    res['title'],
                    res['id'],
                    res['userId'],
                    res['completed']
                ]);
            }, 2000);
        });
    };
    WorkPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-work',
            template: __webpack_require__(/*! ./work.page.html */ "./src/app/work/work.page.html"),
            styles: [__webpack_require__(/*! ./work.page.scss */ "./src/app/work/work.page.scss")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_rest_service__WEBPACK_IMPORTED_MODULE_3__["ApiRestService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__["FileTransfer"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__["File"]])
    ], WorkPage);
    return WorkPage;
}());



/***/ })

}]);
//# sourceMappingURL=work-work-module.js.map