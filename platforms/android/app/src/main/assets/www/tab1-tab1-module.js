(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");







var Tab1PageModule = /** @class */ (function () {
    function Tab1PageModule() {
    }
    Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }])
            ],
            declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
        })
    ], Tab1PageModule);
    return Tab1PageModule;
}());



/***/ }),

/***/ "./src/app/tab1/tab1.page.html":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header text-center>\n      <ion-toolbar>\n            <ion-title>\n                  Reconocimiento\n            </ion-title>\n      </ion-toolbar>\n</ion-header>\n\n<ion-content text-center>\n      <ion-img src=\"assets/Img/mic.png\"></ion-img>\n      <ion-button (click)=\"captureAudio()\">Iniciar Reconocimiento</ion-button>\n      <!-- <p>{{ mediaFiles[mediaFiles.length - 1].name }}</p> -->\n      <!-- <p>{{lastAudio.name}}</p> -->\n\n      <!-- <ion-list>\n            <ion-item *ngFor=\"let file of mediaFiles\" tappable (click)=\"play(file)\" text-wrap>\n                  {{ file.name }}\n                  <p> {{ file.size / 1000 / 1000 | number }} MB</p>\n            </ion-item>\n      </ion-list> -->\n\n</ion-content>"

/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-img {\n  height: 60vh;\n  width: 70vw;\n  margin: auto;\n  display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZhYmlhbi9VVEVNL1Byb3llY3RvQ0QyMDE5L3NyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlvbi1pbWd7XG4gIGhlaWdodDogNjB2aDtcbiAgd2lkdGg6IDcwdnc7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/media-capture/ngx */ "./node_modules/@ionic-native/media-capture/ngx/index.js");
/* harmony import */ var _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/media/ngx */ "./node_modules/@ionic-native/media/ngx/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



// import { mediaPlugin } from 'ionic-native';




var MEDIA_FILES_KEY = 'mediaFiles';
var Tab1Page = /** @class */ (function () {
    function Tab1Page(navCtrl, mediaCapture, storage, file, media) {
        this.navCtrl = navCtrl;
        this.mediaCapture = mediaCapture;
        this.storage = storage;
        this.file = file;
        this.media = media;
        this.mediaFiles = [];
    }
    Tab1Page.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get(MEDIA_FILES_KEY).then(function (res) {
            _this.mediaFiles = JSON.parse(res) || [];
        });
    };
    Tab1Page.prototype.captureAudio = function () {
        var _this = this;
        this.mediaCapture.captureAudio().then(function (res) {
            _this.storeMediaFiles(res);
        }, function (err) { return console.error(err); });
    };
    Tab1Page.prototype.play = function (myFile) {
        if (myFile.name.indexOf('.wav') > -1) {
            var audioFile = this.media.create(myFile.localURL);
            audioFile.play();
        }
        else {
            var path = this.file.dataDirectory + myFile.name;
            var url = path.replace(/^file:\/\//, '');
            var video = this.myVideo.nativeElement;
            video.src = url;
            video.play();
        }
    };
    Tab1Page.prototype.storeMediaFiles = function (files) {
        var _this = this;
        this.storage.get(MEDIA_FILES_KEY).then(function (res) {
            if (res) {
                var arr = JSON.parse(res);
                arr = arr.concat(files);
                _this.storage.set(MEDIA_FILES_KEY, JSON.stringify(arr));
            }
            else {
                _this.storage.set(MEDIA_FILES_KEY, JSON.stringify(files));
            }
            _this.mediaFiles = _this.mediaFiles.concat(files);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"])('myvideo'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], Tab1Page.prototype, "myVideo", void 0);
    Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'app-tab1',
            template: __webpack_require__(/*! ./tab1.page.html */ "./src/app/tab1/tab1.page.html"),
            styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"], _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_3__["MediaCapture"], _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_1__["File"], _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_4__["Media"]])
    ], Tab1Page);
    return Tab1Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module.js.map