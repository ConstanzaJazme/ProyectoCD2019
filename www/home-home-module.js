(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
    }
];
var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header text-center>\n      <ion-toolbar>\n            <ion-title>\n                  Reconocimiento\n            </ion-title>\n      </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n      <!-- <p>{{console}}</p> -->\n      <ion-img src=\"assets/Img/mic.png\"></ion-img>\n      <ion-button color=\"danger\" expand=\"block\" (click)=\"stopRecord()\" *ngIf=\"recording\">\n            <ion-icon name=\"mic-off\"></ion-icon>&nbsp;&nbsp;Parar Grabación\n      </ion-button>\n      <ion-button color=\"primary\" expand=\"block\" (click)=\"startRecord()\" *ngIf=\"!recording\">\n            <ion-icon name=\"mic\"></ion-icon>&nbsp;&nbsp;Comenzar Grabación\n      </ion-button>\n      <ion-button color=\"primary\" expand=\"block\" (click)=\"resp()\">\n            <ion-icon name=\"mic\"></ion-icon>&nbsp;&nbsp;Resp\n      </ion-button>\n      <ion-list>\n            <ion-item *ngFor=\"let audio of audioList; index as i;\">\n                  <p>{{audio.filename}}&nbsp;</p>\n                  <ion-button color=\"medium\" (click)=\"playAudio(audio.filename, i)\">\n                        <ion-icon name=\"play\"></ion-icon>\n                  </ion-button>&nbsp;\n                  <ion-button color=\"danger\" (click)=\"deleteFile(audio)\">\n                        <ion-icon name=\"trash\" is-active=\"false\"></ion-icon>\n                  </ion-button>&nbsp;\n                  <ion-button color=\"success\" (click)=\"mandarInfo(audio)\">\n                        <ion-icon name=\"send\"></ion-icon>\n                  </ion-button>\n            </ion-item>\n      </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-img {\n  height: 50vh;\n  width: 60vw;\n  margin: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZhYmlhbi9VVEVNL1Byb3llY3QyX1ZlcnNpb25GaWxlVHJhbnNmZXIvc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWltZ3tcbiAgaGVpZ2h0OiA1MHZoO1xuICB3aWR0aDogNjB2dztcbiAgbWFyZ2luOiBhdXRvO1xuICAvLyBkaXNwbGF5OiBibG9jaztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/media/ngx */ "./node_modules/@ionic-native/media/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var MEDIA_FILES_KEY = 'mediaFiles';
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, media, file, platform, router) {
        this.navCtrl = navCtrl;
        this.media = media;
        this.file = file;
        this.platform = platform;
        this.router = router;
        this.recording = false;
        this.audioList = [];
        this.storage = 'file:///storage/emulated/0/Android/data/io.ionic.starter/files/';
    }
    HomePage.prototype.ionViewWillEnter = function () {
        this.getAudioList();
    };
    HomePage.prototype.getAudioList = function () {
        if (localStorage.getItem("audiolist")) {
            this.audioList = JSON.parse(localStorage.getItem("audiolist"));
            console.log(this.audioList);
        }
    };
    HomePage.prototype.startRecord = function () {
        if (this.platform.is('ios')) {
            this.fileName = 'record' + new Date().getDate() + new Date().getMonth() + new Date().getFullYear() + new Date().getHours() + new Date().getMinutes() + new Date().getSeconds() + '.wav';
            this.filePath = this.file.documentsDirectory.replace(/file:\/\//g, '') + this.fileName;
            this.audio = this.media.create(this.filePath);
        }
        else if (this.platform.is('android')) {
            this.fileName = 'record' + new Date().getDate() + new Date().getMonth() + new Date().getFullYear() + new Date().getHours() + new Date().getMinutes() + new Date().getSeconds() + '.wav';
            this.filePath = this.file.externalDataDirectory.replace(/file:\/\//g, '') + this.fileName;
            this.audio = this.media.create(this.filePath);
        }
        this.audio.startRecord();
        this.recording = true;
    };
    HomePage.prototype.stopRecord = function () {
        this.audio.stopRecord();
        var data = { filename: this.fileName };
        this.audioList.push(data);
        localStorage.setItem("audiolist", JSON.stringify(this.audioList));
        this.recording = false;
        this.getAudioList();
    };
    HomePage.prototype.playAudio = function (file, idx) {
        if (this.platform.is('ios')) {
            this.filePath = this.file.documentsDirectory.replace(/file:\/\//g, '') + file;
            this.audio = this.media.create(this.filePath);
        }
        else if (this.platform.is('android')) {
            this.filePath = this.file.externalDataDirectory.replace(/file:\/\//g, '') + file;
            this.audio = this.media.create(this.filePath);
        }
        this.audio.play();
        this.audio.setVolume(0.8);
    };
    HomePage.prototype.stopAudio = function () {
        this.audio.stop();
    };
    HomePage.prototype.deleteFile = function (file) {
        var _this = this;
        this.file = file;
        this.file.removeFile(this.storage + file.filename, file.filename).then(function (data) {
            console.log('file removed: ', _this.file);
            data.fileRemoved.getMetadata(function (metadata) {
                var name = data.fileRemoved.name;
                var size = metadata.size;
                var fullPath = data.fileRemoved.fullPath;
                console.log('Deleted file: ', name, size, fullPath);
                console.log('Name: ' + name + ' / Size: ' + size);
            });
        }).catch(function (error) {
            file.getMetadata(function (metadata) {
                var name = file.name;
                var size = metadata.size;
                console.log('Error deleting file from cache folder: ', error);
                console.log('Name: ' + name + ' / Size: ' + size);
            });
        });
        this.getAudioList();
    };
    HomePage.prototype.mandarInfo = function (file) {
        var _this = this;
        this.file.checkFile(this.storage, file.filename)
            .then(function (res) {
            _this.console = "Encontrado";
            _this.router.navigate(['work', _this.storage, file.filename]);
        })
            .catch(function (error) {
            _this.console = "Nope";
        });
    };
    HomePage.prototype.resp = function () {
        this.router.navigate(['resp', 'hombre', '20 a 29 años', '0']);
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_4__["Media"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__["File"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map