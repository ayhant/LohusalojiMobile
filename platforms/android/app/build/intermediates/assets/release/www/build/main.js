webpackJsonp([22],{

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_safari_view_controller__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_app_service_app_service__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, navParams, appService, safariViewController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appService = appService;
        this.safariViewController = safariViewController;
        this.pageParameter = this.navParams.get('Page');
        this.init();
    }
    AboutPage.prototype.init = function () {
        this.getContent();
    };
    AboutPage.prototype.getContent = function () {
        var _this = this;
        var contentID = 0;
        if (this.pageParameter == 'about') {
            contentID = 17;
        }
        else if (this.pageParameter == 'accepting') {
            contentID = 19;
        }
        else if (this.pageParameter == 'song') {
            contentID = 18;
        }
        this.appService.getContentDetail(contentID.toString()).subscribe(function (result) {
            console.log(result);
            _this.content = result.Result;
            console.log(_this.content);
        });
    };
    AboutPage.prototype.clickEvent = function (e) {
        var url = "";
        var tagName = e.srcElement.tagName;
        var sourceElement = e.srcElement;
        url = sourceElement.parentElement.href;
        if (tagName == "LABEL" || tagName == "SPAN") {
            var labelSrc = sourceElement.parentElement;
            url = labelSrc.parentElement.href;
        }
        else if (tagName == "IMG") {
            url = sourceElement.parentElement.href;
        }
        else if (tagName == "A") {
            url = sourceElement.href;
        }
        else {
            console.log("bilinmeyen bir şeye tıklandı");
        }
        if (url != "" && url != undefined) {
            console.log(url);
            this.openURLonBrowser(url);
        }
    };
    AboutPage.prototype.openURLonBrowser = function (url) {
        var _this = this;
        this.safariViewController.isAvailable()
            .then(function (available) {
            if (available) {
                _this.safariViewController.show({
                    url: url,
                    hidden: false,
                    animated: false,
                    transition: 'fade',
                    enterReaderModeIfAvailable: true
                })
                    .subscribe(function (result) {
                    if (result.event === 'opened') {
                        console.log('Opened', result);
                    }
                    else if (result.event === 'loaded') {
                        console.log('Loaded', result);
                    }
                    else if (result.event === 'closed') {
                        console.log('Closed', result);
                        _this.safariViewController.hide();
                    }
                }, function (error) { return console.error(error); });
            }
            else {
                // use fallback browser, example InAppBrowser
            }
        });
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"D:\_Ayhant\_Projects\test10\src\pages\about\about.html"*/'<!--\n  Generated template for the AboutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{content?.Title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div [innerHTML]="content?.Body" (click)=clickEvent($event);>\n\n      </div>\n</ion-content>\n'/*ion-inline-end:"D:\_Ayhant\_Projects\test10\src\pages\about\about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_app_service_app_service__["a" /* AppServiceProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_safari_view_controller__["a" /* SafariViewController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_app_service_app_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__messages_messages__ = __webpack_require__(121);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl, navParams, appService, storage, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appService = appService;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.msgTitle = '';
        this.msgText = '';
    }
    ContactPage.prototype.sentMsg = function (title, text) {
        var _this = this;
        this.storage.get('memberID').then(function (memberID) {
            console.log(memberID);
            _this.appService.sentMessage(title, text, memberID).subscribe(function (result) {
                console.log("message result: ", result);
                if (result.Result != -1) {
                    _this.appService.sentMailMessage(result.Result, memberID).subscribe(function (mailMsgResult) {
                        console.log('MAil Message Result:', mailMsgResult);
                        if (mailMsgResult != -1) {
                            _this.msgTitle = '';
                            _this.msgText = '';
                            _this.showMessage('Mesajını İletilmiştir!');
                        }
                        else {
                            _this.showMessage('Beklenmeyen bir hata oluştu tekrar deneyiniz!');
                        }
                    });
                }
                else {
                    _this.showMessage('Beklenmeyen bir hata oluştu tekrar deneyiniz!');
                }
            });
        });
    };
    ContactPage.prototype.showMessage = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000
        });
        toast.present();
    };
    ContactPage.prototype.userMsg = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__messages_messages__["a" /* MessagesPage */]);
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"D:\_Ayhant\_Projects\test10\src\pages\contact\contact.html"*/'<!--\n  Generated template for the ContactPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Bize Ulaşın</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="logo">\n      <img src="../../assets/imgs/LohusalojiLogo.png" />\n  </div>\n\n  <div class="title-content">\n    <div class="msg-title">\n        <span>Başlık:</span>\n    </div>\n    <input placeholder="Mesaj Başlığı" [(ngModel)]="msgTitle"  type="text" />\n  </div>\n\n  <div class="msg-content">\n      <div class="msg-title"> \n          <span>Mesajınız:</span>\n      </div>\n      <textarea placeholder="Lütfen mesajınızı yazınız." [(ngModel)]="msgText" type="text"  ></textarea>\n    </div>\n  \n\n  <button ion-button full (click)="sentMsg(msgTitle,msgText)">Gönder</button>\n\n  <div class="userMsgBtn">\n    <a  (click)="userMsg();">Önceki Mesajlarım</a>\n  </div>\n  \n</ion-content>\n'/*ion-inline-end:"D:\_Ayhant\_Projects\test10\src\pages\contact\contact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_app_service_app_service__["a" /* AppServiceProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_app_service_app_service__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessagesPage = /** @class */ (function () {
    function MessagesPage(navCtrl, navParams, appService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appService = appService;
        this.init();
    }
    MessagesPage.prototype.init = function () {
        var _this = this;
        var memberId = localStorage.getItem('memberID');
        this.appService.getUsersMessages(memberId).subscribe(function (result) {
            console.log("Member msg: ", result);
            _this.msgList = result.Result;
            _this.msgList.forEach(function (item) {
                var d = new Date(item.CreatedDate).toLocaleDateString();
                item.CreatedDate = d;
            });
        });
    };
    MessagesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-messages',template:/*ion-inline-start:"D:\_Ayhant\_Projects\test10\src\pages\messages\messages.html"*/'<!--\n  Generated template for the MessagesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Mesajlarım</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card *ngFor="let content of msgList">\n    <ion-card-header style="font-weight:bold">\n      <span>{{content?.Title}}</span>\n      <!-- <ion-icon item-start name="heart" style="color:#d64161"></ion-icon> -->\n      <span class="description">{{content?.CreatedDate}}</span>\n    </ion-card-header>\n    <ion-card-content>\n      <span class="description">\n        <div class="question-content">\n            <span>Sorunuz:</span>\n            <div style="font-style: italic;" [innerHTML]="content?.Message"></div>\n        </div>\n\n        <div class="answer-content">\n          <span>Cevap: </span>\n          <div [innerHTML]="content?.MessageReply"></div>\n        </div>\n        \n        \n      </span>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"D:\_Ayhant\_Projects\test10\src\pages\messages\messages.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_app_service_app_service__["a" /* AppServiceProvider */]])
    ], MessagesPage);
    return MessagesPage;
}());

//# sourceMappingURL=messages.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HelpPage = /** @class */ (function () {
    function HelpPage(navCtrl, navParams, dom) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dom = dom;
        this.video = {
            url: 'https://www.youtube.com/embed/MLleDRkSuvk',
            title: 'Awesome video'
        };
        this.init();
    }
    HelpPage.prototype.init = function () {
        this.trustedVideoUrl = this.dom.bypassSecurityTrustResourceUrl(this.video.url);
    };
    HelpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-help',template:/*ion-inline-start:"D:\_Ayhant\_Projects\test10\src\pages\help\help.html"*/'<!--\n  Generated template for the HelpPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Uygulama Hakkında</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <iframe width="100%" height="275" [src]="trustedVideoUrl" frameborder="0" allowfullscreen></iframe>\n    <div>\n      <p></p>\n      <h1>Lohusaloji Sunumu</h1>\n      <p></p>\n      <p>\n        Buraya konuyla ilgili açıklamalar gelecek.\n\n      </p>\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"D:\_Ayhant\_Projects\test10\src\pages\help\help.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
    ], HelpPage);
    return HelpPage;
}());

//# sourceMappingURL=help.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"D:\_Ayhant\_Projects\test10\src\pages\settings\settings.html"*/'<!--\n\n  Generated template for the SettingsPage page.\n\n\n\n  See http//ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<style type="text/css">\n\n  ion-label {\n\n    font-size: 12px;\n\n  }\n\n</style>\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Ayarlar</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div class="version">\n\n    <span>v1.0</span>\n\n  </div>\n\n'/*ion-inline-end:"D:\_Ayhant\_Projects\test10\src\pages\settings\settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { HttpClient } from '@angular/common/http';





/*
  Generated class for the AppServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AppServiceProvider = /** @class */ (function () {
    function AppServiceProvider(http, httpClient) {
        this.http = http;
        this.httpClient = httpClient;
        this.apiUrl = 'http://api.lohusaloji.com/api';
        this.appCategories = [];
        this.userFavoriList = [];
    }
    AppServiceProvider.prototype.getContentCategories = function () {
        var _this = this;
        var metodURL = '/BlogContentCategory/GetAllForMobile';
        return this.http.get(this.apiUrl + metodURL)
            .map(function (res) { return res.json(); })
            .do(function (res) { return _this.appCategories = res; });
    };
    AppServiceProvider.prototype.getCategoryContents = function (categoryId) {
        var metodURL = '/BlogContent/GetCategoryContentListForMobile/' + categoryId;
        return this.http.get(this.apiUrl + metodURL)
            .map(function (res) { return res.json(); });
    };
    AppServiceProvider.prototype.getContentDetail = function (contentId) {
        var metodURL = '/BlogContent/Get/' + contentId;
        return this.http.get(this.apiUrl + metodURL)
            .map(function (res) { return res.json(); });
    };
    AppServiceProvider.prototype.getAllContent = function () {
        var metodURL = '/BlogContent/GetAll';
        return this.http.get(this.apiUrl + metodURL)
            .map(function (res) { return res.json(); });
    };
    AppServiceProvider.prototype.login = function (email, password) {
        var metodURL = '/Member/Login/' + email + '/' + password;
        return this.http.post(this.apiUrl + metodURL, null)
            .map(function (res) { return res.json(); });
    };
    AppServiceProvider.prototype.register = function (email, password, os, brand, model, token) {
        var metodURL = '/Member/Register/' + email + '/' + password + '/' + os + '/' + brand + '/' + model + '/' + token + '';
        //Register/{email}/{password}/{operatingsystem}/{devicebrand}/{devicemodel}/{devicetoken}
        return this.http.post(this.apiUrl + metodURL, null)
            .map(function (res) { return res.json(); });
    };
    AppServiceProvider.prototype.sentMessage = function (title, msg, memberId) {
        var metodURL = '/MemberMessage/AddForMobile/' + memberId + '/' + title + '/' + msg;
        return this.http.post(this.apiUrl + metodURL, null)
            .map(function (res) { return res.json(); });
    };
    AppServiceProvider.prototype.sentMailMessage = function (msgID, memberId) {
        var metodURL = '/Email/AddForMobile/' + memberId + '/5/null/' + msgID + '/null';
        return this.http.post(this.apiUrl + metodURL, null)
            .map(function (res) { return res.json(); });
    };
    AppServiceProvider.prototype.addFavori = function (memberId, contentId) {
        var metodURL = '/memberfavoritecontent/AddForMobile/' + memberId + '/' + contentId;
        return this.http.post(this.apiUrl + metodURL, null)
            .map(function (res) { return res.json(); });
    };
    AppServiceProvider.prototype.deleteFavori = function (memberId, contentId) {
        var metodURL = '/memberfavoritecontent/DeleteForMobile/' + memberId + '/' + contentId;
        return this.http.get(this.apiUrl + metodURL)
            .map(function (res) { return res.json(); });
    };
    AppServiceProvider.prototype.getMemberFavoriteList = function (memberId) {
        var metodURL = '/memberfavoritecontent/GetAllForMobile/' + memberId;
        return this.http.get(this.apiUrl + metodURL)
            .map(function (res) { return res.json(); });
    };
    AppServiceProvider.prototype.saveSurvey = function (surveyTypeId, memberId) {
        var metodURL = '/surveymobileheader/AddHeaderForMobile/' + surveyTypeId + '/' + memberId;
        return this.http.post(this.apiUrl + metodURL, null)
            .map(function (res) { return res.json(); });
    };
    AppServiceProvider.prototype.saveSurveyAnswers = function (surveyHeaderId, question, answer, index) {
        var metodURL = '/surveymobiledetail/AddDetailForMobile/' + surveyHeaderId + '/' + question + '/' + answer + '/' + index;
        return this.http.post(this.apiUrl + metodURL, null)
            .map(function (res) { return res.json(); });
    };
    AppServiceProvider.prototype.setReadContent = function (memberId, contentId) {
        var metodURL = '/BlogContent/SetReadContentForMobile/' + memberId + '/' + contentId;
        return this.http.get(this.apiUrl + metodURL, null)
            .map(function (res) { return res.json(); });
    };
    AppServiceProvider.prototype.checkSurveyCompleted = function (memberId) {
        var metodURL = '/surveymobileheader/GetMemberSurveyHeaderListForMobile/' + memberId;
        return this.http.get(this.apiUrl + metodURL, null)
            .map(function (res) { return res.json(); });
    };
    AppServiceProvider.prototype.saveBirthType = function (memberId, birthType, base64Data) {
        //base64 kalkınca
        //let metodURL = '/Email/AddForMobile/'+memberId+'/'+birthType+'/null/null/null/'+base64Data;
        var metodURL = '/Email/AddForMobile/' + memberId + '/' + birthType + '/null/null/null';
        return this.http.post(this.apiUrl + metodURL, null)
            .map(function (res) { return res.json(); });
    };
    AppServiceProvider.prototype.setFavoriteList = function (favoriteList) {
        this.userFavoriList = favoriteList;
    };
    AppServiceProvider.prototype.getFavoriteList = function () {
        return this.userFavoriList;
    };
    AppServiceProvider.prototype.getUsersMessages = function (memberId) {
        var metodURL = '/MemberMessage/GetAllForMobile/' + memberId;
        return this.http.get(this.apiUrl + metodURL, null)
            .map(function (res) { return res.json(); });
    };
    AppServiceProvider.prototype.setMemberPhoto = function (memberObj) {
        var metodURL = '/Member/MemberGaveBirth';
        var memberObjStr = JSON.stringify(memberObj);
        var key = Object.keys(memberObj);
        var xx = '';
        key.forEach(function (element) {
            xx += element + "=" + memberObj[element] + "&";
        });
        xx = xx.slice(0, xx.length - 1);
        //console.log(xx);
        console.log(memberObjStr);
        var hdr = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        hdr.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        return this.http.post(this.apiUrl + metodURL, memberObjStr, { headers: hdr })
            .map(function (res) { return res.json(); });
    };
    AppServiceProvider.prototype.getPasswordEncode = function (password) {
        var metodURL = '/member/GetEncryptedPassword/' + password;
        return this.http.get(this.apiUrl + metodURL, null)
            .map(function (res) { return res.json(); });
    };
    AppServiceProvider.prototype.blockMember = function (memberId) {
        var methodURL = '/Member/BlockMember/' + memberId;
        return this.http.post(this.apiUrl + methodURL, null)
            .map(function (res) { return res.json(); });
    };
    AppServiceProvider.prototype.getAppVersion = function () {
        var methodURL = '/ApplicationBase/GetApplicationParameters';
        return this.http.get(this.apiUrl + methodURL, null)
            .map(function (res) { return res.json(); });
    };
    AppServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], AppServiceProvider);
    return AppServiceProvider;
}());

//# sourceMappingURL=app-service.js.map

/***/ }),

/***/ 130:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 130;

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		299,
		21
	],
	"../pages/cards/cards.module": [
		300,
		10
	],
	"../pages/contact/contact.module": [
		301,
		20
	],
	"../pages/content-detail/content-detail.module": [
		302,
		19
	],
	"../pages/content-list/content-list.module": [
		303,
		18
	],
	"../pages/content/content.module": [
		304,
		9
	],
	"../pages/help/help.module": [
		305,
		17
	],
	"../pages/information/information.module": [
		306,
		16
	],
	"../pages/isgivebirth/isgivebirth.module": [
		307,
		15
	],
	"../pages/item-create/item-create.module": [
		308,
		8
	],
	"../pages/item-detail/item-detail.module": [
		309,
		3
	],
	"../pages/list-master/list-master.module": [
		310,
		2
	],
	"../pages/login/login.module": [
		311,
		14
	],
	"../pages/menu/menu.module": [
		312,
		7
	],
	"../pages/messages/messages.module": [
		313,
		13
	],
	"../pages/search/search.module": [
		314,
		1
	],
	"../pages/settings/settings.module": [
		315,
		12
	],
	"../pages/signup/signup.module": [
		316,
		0
	],
	"../pages/survey/survey.module": [
		317,
		11
	],
	"../pages/tabs/tabs.module": [
		318,
		4
	],
	"../pages/tutorial/tutorial.module": [
		319,
		6
	],
	"../pages/welcome/welcome.module": [
		320,
		5
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 171;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__content_detail_content_detail__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__content_list_content_list__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_app_service_app_service__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, appService, storage) {
        this.navCtrl = navCtrl;
        this.appService = appService;
        this.storage = storage;
        this.segment = 'all';
        this.title = "Haftalara Göre İçerikler";
        this.allContent = [];
        this.w1Contents = [];
        this.w2Contents = [];
        this.w3Contents = [];
        this.w4Contents = [];
        this.w5Contents = [];
        this.w6Contents = [];
        this.favoritesContents = [];
        this.showContent = { w1: true, w2: false, w3: false, w4: false, w5: false, w6: false };
        this.mainCategories = [];
        this.init();
    }
    HomePage.prototype.init = function () {
        console.log("init çalıştı");
        this.getAllContent();
        this.getCategories();
    };
    HomePage.prototype.getAllContent = function () {
        var _this = this;
        this.appService.getAllContent().subscribe(function (result) {
            console.log("All Content: ", result);
            _this.allContent = result.Result;
            for (var i = 0; i < _this.allContent.length; i++) {
                _this.allContent[i].IsFavorite = false;
                if (_this.allContent[i].ContentWeek == 1)
                    _this.w1Contents.push(_this.allContent[i]);
                else if (_this.allContent[i].ContentWeek == 2)
                    _this.w2Contents.push(_this.allContent[i]);
                else if (_this.allContent[i].ContentWeek == 3)
                    _this.w3Contents.push(_this.allContent[i]);
                else if (_this.allContent[i].ContentWeek == 4)
                    _this.w4Contents.push(_this.allContent[i]);
                else if (_this.allContent[i].ContentWeek == 5)
                    _this.w5Contents.push(_this.allContent[i]);
                else if (_this.allContent[i].ContentWeek == 6)
                    _this.w6Contents.push(_this.allContent[i]);
            }
            _this.getlUserFavoriteList();
        });
    };
    HomePage.prototype.getCategories = function () {
        var _this = this;
        this.appService.getContentCategories().subscribe(function (result) {
            console.log("result: ", result.Result);
            _this.mainCategories = result.Result;
        });
    };
    HomePage.prototype.showChildCategories = function (item) {
        //eğer collapse yapıda child'ı yok ise kapama açma işlemi yapmayıp direkt detayını göstermeye gidecek.
        if (item.HasChild) {
            item.IsOpened = !item.IsOpened;
        }
        else {
            this.showCategoryList(item);
        }
        console.log("test");
    };
    HomePage.prototype.showCategoryList = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__content_list_content_list__["a" /* ContentListPage */], {
            categoryItem: item
        });
    };
    HomePage.prototype.showContentWeek = function (week) {
        if (week == 'w1') {
            this.showContent = { w1: !this.showContent.w1, w2: false, w3: false, w4: false, w5: false, w6: false };
        }
        else if (week == 'w2') {
            this.showContent = { w1: false, w2: !this.showContent.w2, w3: false, w4: false, w5: false, w6: false };
        }
        else if (week == 'w3') {
            this.showContent = { w1: false, w2: false, w3: !this.showContent.w3, w4: false, w5: false, w6: false };
        }
        else if (week == 'w4') {
            this.showContent = { w1: false, w2: false, w3: false, w4: !this.showContent.w4, w5: false, w6: false };
        }
        else if (week == 'w5') {
            this.showContent = { w1: false, w2: false, w3: false, w4: false, w5: !this.showContent.w5, w6: false };
        }
        else if (week == 'w6') {
            this.showContent = { w1: false, w2: false, w3: false, w4: false, w5: false, w6: !this.showContent.w6 };
        }
        else { }
        console.log(week);
    };
    HomePage.prototype.doFavori = function (contentItem) {
        var _this = this;
        var memberID = localStorage.getItem('memberID');
        if (!contentItem.IsFavorite) {
            console.log("favori edildi");
            this.appService.addFavori(memberID, contentItem.BlogContentId).subscribe(function (result) {
                console.log("AddFavori", result);
                _this.getlUserFavoriteList();
            });
            contentItem.IsFavorite = !contentItem.IsFavorite;
        }
        else {
            console.log("favoriden çıktı");
            this.appService.deleteFavori(memberID, contentItem.BlogContentId).subscribe(function (result) {
                console.log("RemoveFavori: ", result);
                _this.getlUserFavoriteList();
            });
            contentItem.IsFavorite = !contentItem.IsFavorite;
        }
    };
    HomePage.prototype.getlUserFavoriteList = function () {
        //this.allContent[0].IsFavorite = true;
        //console.log("First ITem: ", this.w1Contents[0]);
        var _this = this;
        var memberID = localStorage.getItem('memberID');
        this.appService.getMemberFavoriteList(memberID).subscribe(function (result) {
            console.log("Member's Favorite List: ", result);
            _this.mergeFavoriteList(result.Result);
            _this.appService.setFavoriteList(result.Result);
            _this.favoritesContents = result.Result;
            _this.favoritesContents.forEach(function (item) {
                item.IsFavorite = true;
                item.BlogContentId = item.ContentId;
            });
        });
    };
    HomePage.prototype.mergeFavoriteList = function (favoriteList) {
        console.log(favoriteList);
        for (var i = 0; i < this.allContent.length; i++) {
            if (favoriteList.length == 0) {
                this.allContent[i].IsFavorite = false;
            }
            else {
                for (var j = 0; j < favoriteList.length; j++) {
                    if (this.allContent[i].BlogContentId == favoriteList[j].ContentId) {
                        this.allContent[i].IsFavorite = true;
                        break;
                    }
                    else {
                        this.allContent[i].IsFavorite = false;
                    }
                }
            }
        }
    };
    HomePage.prototype.goToContentDetail = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__content_detail_content_detail__["a" /* ContentDetailPage */], {
            id: item.BlogContentId
        });
    };
    HomePage.prototype.updateSchedule = function () {
        if (this.segment == 'all') {
            this.title = "Haftalara Göre İçerikler";
        }
        else {
            this.title = "Favori İçerikler";
            this.getlUserFavoriteList();
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\_Ayhant\_Projects\test10\src\pages\home\home.html"*/'<style type="text/css">\n\n  ion-item {\n\n    background-color: transparent !important;\n\n  }\n\n\n\n  ion-card {\n\n    background-color: transparent !important;\n\n  }\n\n\n\n  ion-card-header {\n\n    background-color: #F493A8 !important;\n\n    opacity: 0.5;\n\n  }\n\n\n\n  ion-content {\n\n    background-image: url(\'../../assets/imgs/login-bg.png\');\n\n    background-repeat: no-repeat;\n\n    background-position: center;\n\n  }\n\n</style>\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>{{title}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <!-- <ion-item>\n\n    <ion-header style="text-align:center; color:#6b5b95;">\n\n      <h1>Haftalara Göre İçerikler</h1>\n\n    </ion-header>\n\n  </ion-item> -->\n\n\n\n  <ion-segment [(ngModel)]="segment" (ionChange)="updateSchedule()">\n\n    <ion-segment-button value="all">\n\n      Tüm İçerikler\n\n    </ion-segment-button>\n\n    <ion-segment-button value="favorites">\n\n      Favorilerim\n\n    </ion-segment-button>\n\n  </ion-segment>\n\n\n\n  <div class=home-all-content *ngIf="segment==\'all\'">\n\n\n\n    <div class="weeks-contents" *ngIf="false">\n\n      <div class="week-title" (click)="showContentWeek(\'w1\')">\n\n        <span>1. Hafta</span>\n\n        <ion-icon item-start name="{{showContent.w1 == true ? \'remove\': \'add\'}}"></ion-icon>\n\n      </div>\n\n\n\n      <div class="no-content-text" *ngIf="w1Contents.length == 0 && showContent.w1">\n\n        <span>Bu haftaya ait içerik bulunmamaktadır...</span>\n\n      </div>\n\n\n\n\n\n      <div *ngIf="showContent.w1">\n\n        <ion-card *ngFor="let categoryContent of w1Contents">\n\n          <ion-card-header style="font-weight:bold">\n\n            <span (click)="goToContentDetail(categoryContent);">\n\n              {{categoryContent.Title}}\n\n            </span>\n\n          </ion-card-header>\n\n          <ion-card-content (click)="goToContentDetail(categoryContent);">\n\n            <span class="description">{{categoryContent.Description}}</span>\n\n          </ion-card-content>\n\n          <ion-toolbar>\n\n            <ion-buttons end>\n\n              <button ion-button (click)="doFavori(categoryContent);">\n\n                <ion-icon *ngIf="!categoryContent.IsFavorite" item-start name="ios-heart-outline" style="color:#d64161"></ion-icon>\n\n                <ion-icon *ngIf="categoryContent.IsFavorite" item-start name="ios-heart" style="color:#d64161"></ion-icon>\n\n              </button>\n\n            </ion-buttons>\n\n          </ion-toolbar>\n\n        </ion-card>\n\n      </div>\n\n\n\n      <div class="week-title" (click)="showContentWeek(\'w2\')">\n\n        <span>2. Hafta</span>\n\n        <ion-icon item-start name="{{showContent.w2 == true ? \'remove\': \'add\'}}"></ion-icon>\n\n      </div>\n\n\n\n      <div class="no-content-text" *ngIf="w2Contents.length == 0 && showContent.w2">\n\n        <span>Bu haftaya ait içerik bulunmamaktadır...</span>\n\n      </div>\n\n\n\n\n\n      <div *ngIf="showContent.w2">\n\n        <ion-card *ngFor="let categoryContent of w2Contents">\n\n          <ion-card-header style="font-weight:bold">\n\n            <span (click)="goToContentDetail(categoryContent);">\n\n              {{categoryContent.Title}}\n\n            </span>\n\n          </ion-card-header>\n\n          <ion-card-content (click)="goToContentDetail(categoryContent);">\n\n            <span class="description">{{categoryContent.Description}}</span>\n\n          </ion-card-content>\n\n          <ion-toolbar>\n\n            <ion-buttons end>\n\n              <button ion-button (click)="doFavori(categoryContent);">\n\n                <ion-icon *ngIf="!categoryContent.IsFavorite" item-start name="ios-heart-outline" style="color:#d64161"></ion-icon>\n\n                <ion-icon *ngIf="categoryContent.IsFavorite" item-start name="ios-heart" style="color:#d64161"></ion-icon>\n\n              </button>\n\n            </ion-buttons>\n\n          </ion-toolbar>\n\n        </ion-card>\n\n      </div>\n\n\n\n\n\n      <div class="week-title" (click)="showContentWeek(\'w3\')">\n\n        <span>3. Hafta</span>\n\n        <ion-icon item-start name="{{showContent.w3 == true ? \'remove\': \'add\'}}"></ion-icon>\n\n      </div>\n\n\n\n      <div class="no-content-text" *ngIf="w3Contents.length == 0 && showContent.w3">\n\n        <span>Bu haftaya ait içerik bulunmamaktadır...</span>\n\n      </div>\n\n\n\n      <div *ngIf="showContent.w3">\n\n        <ion-card *ngFor="let categoryContent of w3Contents">\n\n          <ion-card-header style="font-weight:bold">\n\n            <span (click)="goToContentDetail(categoryContent);">\n\n              {{categoryContent.Title}}\n\n            </span>\n\n          </ion-card-header>\n\n          <ion-card-content (click)="goToContentDetail(categoryContent);">\n\n            <span class="description">{{categoryContent.Description}}</span>\n\n          </ion-card-content>\n\n          <ion-toolbar>\n\n            <ion-buttons end>\n\n              <button ion-button (click)="doFavori(categoryContent);">\n\n                <ion-icon *ngIf="!categoryContent.IsFavorite" item-start name="ios-heart-outline" style="color:#d64161"></ion-icon>\n\n                <ion-icon *ngIf="categoryContent.IsFavorite" item-start name="ios-heart" style="color:#d64161"></ion-icon>\n\n              </button>\n\n            </ion-buttons>\n\n          </ion-toolbar>\n\n        </ion-card>\n\n      </div>\n\n\n\n\n\n      <div class="week-title" (click)="showContentWeek(\'w4\')">\n\n        <span>4. Hafta</span>\n\n        <ion-icon item-start name="{{showContent.w4 == true ? \'remove\': \'add\'}}"></ion-icon>\n\n      </div>\n\n\n\n      <div class="no-content-text" *ngIf="w4Contents.length == 0 && showContent.w4">\n\n        <span>Bu haftaya ait içerik bulunmamaktadır...</span>\n\n      </div>\n\n\n\n      <div *ngIf="showContent.w4">\n\n        <ion-card *ngFor="let categoryContent of w4Contents">\n\n          <ion-card-header style="font-weight:bold">\n\n            <span (click)="goToContentDetail(categoryContent);">\n\n              {{categoryContent.Title}}\n\n            </span>\n\n          </ion-card-header>\n\n          <ion-card-content (click)="goToContentDetail(categoryContent);">\n\n            <span class="description">{{categoryContent.Description}}</span>\n\n          </ion-card-content>\n\n          <ion-toolbar>\n\n            <ion-buttons end>\n\n              <button ion-button (click)="doFavori(categoryContent);">\n\n                <ion-icon *ngIf="!categoryContent.IsFavorite" item-start name="ios-heart-outline" style="color:#d64161"></ion-icon>\n\n                <ion-icon *ngIf="categoryContent.IsFavorite" item-start name="ios-heart" style="color:#d64161"></ion-icon>\n\n              </button>\n\n            </ion-buttons>\n\n          </ion-toolbar>\n\n        </ion-card>\n\n      </div>\n\n\n\n\n\n      <div class="week-title" (click)="showContentWeek(\'w5\')">\n\n        <span>5. Hafta</span>\n\n        <ion-icon item-start name="{{showContent.w5 == true ? \'remove\': \'add\'}}"></ion-icon>\n\n      </div>\n\n\n\n      <div class="no-content-text" *ngIf="w5Contents.length == 0 && showContent.w5">\n\n        <span>Bu haftaya ait içerik bulunmamaktadır...</span>\n\n      </div>\n\n\n\n      <div *ngIf="showContent.w5">\n\n        <ion-card *ngFor="let categoryContent of w5Contents">\n\n          <ion-card-header style="font-weight:bold">\n\n            <span (click)="goToContentDetail(categoryContent);">\n\n              {{categoryContent.Title}}\n\n            </span>\n\n          </ion-card-header>\n\n          <ion-card-content (click)="goToContentDetail(categoryContent);">\n\n            <span class="description">{{categoryContent.Description}}</span>\n\n          </ion-card-content>\n\n          <ion-toolbar>\n\n            <ion-buttons end>\n\n              <button ion-button (click)="doFavori(categoryContent);">\n\n                <ion-icon *ngIf="!categoryContent.IsFavorite" item-start name="ios-heart-outline" style="color:#d64161"></ion-icon>\n\n                <ion-icon *ngIf="categoryContent.IsFavorite" item-start name="ios-heart" style="color:#d64161"></ion-icon>\n\n              </button>\n\n            </ion-buttons>\n\n          </ion-toolbar>\n\n        </ion-card>\n\n      </div>\n\n\n\n\n\n      <div class="week-title" (click)="showContentWeek(\'w6\')">\n\n        <span>6. Hafta</span>\n\n        <ion-icon item-start name="{{showContent.w6 == true ? \'remove\': \'add\'}}"></ion-icon>\n\n      </div>\n\n\n\n      <div class="no-content-text" *ngIf="w6Contents.length == 0 && showContent.w6">\n\n        <span>Bu haftaya ait içerik bulunmamaktadır...</span>\n\n      </div>\n\n\n\n\n\n      <div *ngIf="showContent.w6">\n\n        <ion-card *ngFor="let categoryContent of w6Contents">\n\n          <ion-card-header style="font-weight:bold">\n\n            <span (click)="goToContentDetail(categoryContent);">\n\n              {{categoryContent.Title}}\n\n            </span>\n\n          </ion-card-header>\n\n          <ion-card-content (click)="goToContentDetail(categoryContent);">\n\n            <span class="description">{{categoryContent.Description}}</span>\n\n          </ion-card-content>\n\n          <ion-toolbar>\n\n            <ion-buttons end>\n\n              <button ion-button (click)="doFavori(categoryContent);">\n\n                <ion-icon *ngIf="!categoryContent.IsFavorite" item-start name="ios-heart-outline" style="color:#d64161"></ion-icon>\n\n                <ion-icon *ngIf="categoryContent.IsFavorite" item-start name="ios-heart" style="color:#d64161"></ion-icon>\n\n              </button>\n\n            </ion-buttons>\n\n          </ion-toolbar>\n\n        </ion-card>\n\n      </div>\n\n    </div>\n\n\n\n    <div class="category-content">\n\n\n\n      <div class=main-category *ngFor="let item of mainCategories">\n\n        <div (click)="showChildCategories(item);">\n\n          <img src="../../assets/imgs/mom.png" *ngIf="item.CategoryId==24" />\n\n          <img src="../../assets/imgs/baby.png" *ngIf="item.CategoryId==25" />\n\n          <img src="../../assets/imgs/dad.png" *ngIf="item.CategoryId==26" />\n\n        </div>\n\n\n\n        <div *ngIf="item.IsOpened">\n\n          <div *ngFor="let child of item.Childs">\n\n            <div class="sub-categories" (click)="showChildCategories(child)">\n\n              <ion-icon *ngIf="!child.IsOpened" item-start name="{{child.HasChild ? \'add\': \'\'}}" style="color:#d64161"></ion-icon>\n\n              <ion-icon *ngIf="child.IsOpened" item-start name="remove" style="color:#d64161"></ion-icon>\n\n              <span>{{child.Title}}</span>\n\n            </div>\n\n            <div *ngIf="child.IsOpened">\n\n              <div class="child-categories" *ngFor="let subChild of child.Childs" (click)="showCategoryList(subChild)">\n\n                <ion-icon item-start name="" style="color:#d64161"></ion-icon>\n\n                <span>{{subChild.Title}}</span>\n\n              </div>\n\n            </div>\n\n          </div>\n\n\n\n        </div>\n\n\n\n\n\n\n\n      </div>\n\n\n\n      <!-- <div class=main-category>\n\n        <img src="../../assets/imgs/baby.png" />\n\n      </div>\n\n\n\n      <div class=main-category>\n\n        <img src="../../assets/imgs/dad.png" />\n\n      </div> -->\n\n\n\n    </div>\n\n\n\n  </div>\n\n\n\n  <div class="home-favorite-content" *ngIf="segment==\'favorites\'">\n\n    <!-- <div class="hdr">\n\n      <h1>Favori İçerikler</h1>\n\n    </div> -->\n\n\n\n    <div class="no-content-text" *ngIf="favoritesContents.length == 0">\n\n      <span>Favori içeriğiniz bulunmamaktadır...</span>\n\n    </div>\n\n\n\n\n\n    <ion-card *ngFor="let categoryContent of favoritesContents">\n\n      <ion-card-header style="font-weight:bold">\n\n        <span (click)="goToContentDetail(categoryContent);">\n\n          {{categoryContent.ContentTitle}}\n\n        </span>\n\n      </ion-card-header>\n\n      <ion-card-content (click)="goToContentDetail(categoryContent);">\n\n        <span class="description">{{categoryContent.ContentDescription}}</span>\n\n      </ion-card-content>\n\n      <ion-toolbar>\n\n        <ion-buttons end>\n\n          <button ion-button (click)="doFavori(categoryContent);">\n\n            <ion-icon item-start name="ios-heart" style="color:#d64161"></ion-icon>\n\n\n\n          </button>\n\n          <!--<button ion-button>\n\n                <ion-icon item-start name="help-circle" style="color:#d64161"></ion-icon>\n\n                &nbsp;Soru Sor\n\n              </button>-->\n\n        </ion-buttons>\n\n      </ion-toolbar>\n\n    </ion-card>\n\n  </div>\n\n\n\n\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"D:\_Ayhant\_Projects\test10\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__providers_app_service_app_service__["a" /* AppServiceProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(241);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_safari_view_controller__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_device__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_app_version__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_content_list_content_list__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_content_detail_content_detail__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_contact_contact__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_settings_settings__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_login_login__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_survey_survey__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_about_about__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_isgivebirth_isgivebirth__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_help_help__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_messages_messages__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_information_information__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_app_service_app_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_http__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_common_http__ = __webpack_require__(118);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_content_list_content_list__["a" /* ContentListPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_content_detail_content_detail__["a" /* ContentDetailPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_survey_survey__["a" /* SurveyPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_isgivebirth_isgivebirth__["a" /* IsgivebirthPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_help_help__["a" /* HelpPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_information_information__["a" /* InformationPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_messages_messages__["a" /* MessagesPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cards/cards.module#CardsPageModule', name: 'CardsPage', segment: 'cards', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/contact.module#ContactPageModule', name: 'ContactPage', segment: 'contact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/content-detail/content-detail.module#ContentDetailPageModule', name: 'ContentDetailPage', segment: 'content-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/content-list/content-list.module#ContentListPageModule', name: 'ContentListPage', segment: 'content-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/content/content.module#ContentPageModule', name: 'ContentPage', segment: 'content', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/help/help.module#HelpPageModule', name: 'HelpPage', segment: 'help', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/information/information.module#InformationPageModule', name: 'InformationPage', segment: 'information', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/isgivebirth/isgivebirth.module#IsgivebirthPageModule', name: 'IsgivebirthPage', segment: 'isgivebirth', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-create/item-create.module#ItemCreatePageModule', name: 'ItemCreatePage', segment: 'item-create', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-detail/item-detail.module#ItemDetailPageModule', name: 'ItemDetailPage', segment: 'item-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list-master/list-master.module#ListMasterPageModule', name: 'ListMasterPage', segment: 'list-master', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/messages/messages.module#MessagesPageModule', name: 'MessagesPage', segment: 'messages', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/survey/survey.module#SurveyPageModule', name: 'SurveyPage', segment: 'survey', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tutorial/tutorial.module#TutorialPageModule', name: 'TutorialPage', segment: 'tutorial', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_24__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_25__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_content_list_content_list__["a" /* ContentListPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_content_detail_content_detail__["a" /* ContentDetailPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_survey_survey__["a" /* SurveyPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_isgivebirth_isgivebirth__["a" /* IsgivebirthPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_help_help__["a" /* HelpPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_information_information__["a" /* InformationPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_messages_messages__["a" /* MessagesPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_safari_view_controller__["a" /* SafariViewController */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_device__["a" /* Device */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_app_version__["a" /* AppVersion */],
                __WEBPACK_IMPORTED_MODULE_23__providers_app_service_app_service__["a" /* AppServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_app_service_app_service__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContentDetailPage = /** @class */ (function () {
    function ContentDetailPage(navCtrl, navParams, appService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appService = appService;
        this.contentID = this.navParams.get('id');
        this.getContent(this.contentID);
        this.setReadContent(this.contentID);
    }
    ContentDetailPage.prototype.getContent = function (id) {
        var _this = this;
        this.appService.getContentDetail(id).subscribe(function (result) {
            console.log(result);
            _this.content = result.Result;
        });
    };
    ContentDetailPage.prototype.setReadContent = function (contentID) {
        var memberID = localStorage.getItem('memberID');
        this.appService.setReadContent(memberID, contentID).subscribe(function (result) {
            console.log("Set Read: ", result);
        });
    };
    ContentDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-content-detail',template:/*ion-inline-start:"D:\_Ayhant\_Projects\test10\src\pages\content-detail\content-detail.html"*/'\n<style type="text/css">\n\n  ion-item {\n\n    background-color: transparent !important;\n\n  }\n\n\n\n  ion-card {\n\n    background-color: transparent !important;\n\n  }\n\n\n\n  ion-card-header {\n\n    background-color: #F493A8 !important;\n\n    opacity: 0.5;\n\n  }\n\n\n\n  ion-content {\n\n    background-image: url(\'../../assets/imgs/login-bg.png\');\n\n    background-repeat: no-repeat;\n\n    background-position: center;\n\n  }\n\n</style>\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>İçerik Detay</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-card>\n      <ion-card-header style="font-weight:bold">\n        <span>{{content?.Title}}</span>\n        <!-- <ion-icon item-start name="heart" style="color:#d64161"></ion-icon> -->\n      </ion-card-header>\n      <ion-card-content>\n        <span class="description"><div [innerHTML]="content?.Body">\n\n          </div></span>\n      </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"D:\_Ayhant\_Projects\test10\src\pages\content-detail\content-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_app_service_app_service__["a" /* AppServiceProvider */]])
    ], ContentDetailPage);
    return ContentDetailPage;
}());

//# sourceMappingURL=content-detail.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_app_service_app_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_content_detail_content_detail__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ContentListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContentListPage = /** @class */ (function () {
    function ContentListPage(navCtrl, navParams, appService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appService = appService;
        this.loadingCtrl = loadingCtrl;
        this.parameter = this.navParams.get('categoryItem');
        console.log("parametre: ", this.parameter);
        this.getContentList(this.parameter);
    }
    ContentListPage.prototype.getContentList = function (param) {
        var _this = this;
        this.showLoadingIcon();
        this.appService.getCategoryContents(param.CategoryId).subscribe(function (result) {
            console.log("result: ", result);
            _this.setContentList(result);
            _this.loading.dismiss();
        });
    };
    ContentListPage.prototype.setContentList = function (data) {
        this.categoryContents = data.Result;
        var favoriteList = this.appService.getFavoriteList();
        this.mergeFavoriteList(favoriteList);
        console.log("User Favorite List: ", favoriteList);
        console.log(this.categoryContents);
    };
    ContentListPage.prototype.getContentDetail = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_content_detail_content_detail__["a" /* ContentDetailPage */], {
            id: id
        });
    };
    ContentListPage.prototype.doFavori = function (contentItem) {
        var memberID = localStorage.getItem('memberID');
        if (!contentItem.IsFavorite) {
            console.log("favori edildi");
            this.appService.addFavori(memberID, contentItem.BlogContentId).subscribe(function (result) {
                console.log("AddFavori", result);
            });
            contentItem.IsFavorite = !contentItem.IsFavorite;
        }
        else {
            console.log("favoriden çıktı");
            this.appService.deleteFavori(memberID, contentItem.BlogContentId).subscribe(function (result) {
                console.log("RemoveFavori: ", result);
            });
            contentItem.IsFavorite = !contentItem.IsFavorite;
        }
    };
    ContentListPage.prototype.mergeFavoriteList = function (favoriteList) {
        console.log(favoriteList);
        for (var i = 0; i < this.categoryContents.length; i++) {
            if (favoriteList.length == 0) {
                this.categoryContents[i].IsFavorite = false;
            }
            else {
                for (var j = 0; j < favoriteList.length; j++) {
                    if (this.categoryContents[i].BlogContentId == favoriteList[j].ContentId) {
                        this.categoryContents[i].IsFavorite = true;
                    }
                    else {
                        this.categoryContents[i].IsFavorite = false;
                    }
                }
            }
        }
    };
    ContentListPage.prototype.showLoadingIcon = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Bekleyiniz...'
        });
        this.loading.present();
    };
    ContentListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-content-list',template:/*ion-inline-start:"D:\_Ayhant\_Projects\test10\src\pages\content-list\content-list.html"*/'\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>{{parameter.Title}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n\n\n  <div *ngIf="categoryContents?.length == 0">\n\n    <ion-card>\n\n      <ion-card-header style="font-weight:bold">\n\n        <span>İçerik Bulunamadı</span>\n\n      </ion-card-header>\n\n      <ion-card-content>\n\n        <span class="description" style="font-weight: 300; font-style: italic;">Seçtiğiniz kategoriye ait içerik bulunamadı.</span>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </div>\n\n\n\n\n\n  <ion-card *ngFor="let categoryContent of categoryContents">\n\n    <ion-card-header style="font-weight:bold">\n\n      <span>{{categoryContent.Title}}</span>\n\n      <!-- <ion-icon item-start name="heart" style="color:#d64161"></ion-icon> -->\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <div class="short-description">\n\n        <span class="description">{{categoryContent.Description}}</span>\n\n      </div>\n\n\n\n      <div class="body-description">\n\n        <div [innerHTML]="categoryContent?.Body">\n\n\n\n        </div>\n\n      </div>\n\n\n\n\n\n\n\n\n\n    </ion-card-content>\n\n    <ion-toolbar>\n\n      <ion-buttons end>\n\n        <button ion-button (click)="doFavori(categoryContent)">\n\n          <ion-icon *ngIf="!categoryContent.IsFavorite" item-start name="ios-heart-outline" style="color:#d64161"></ion-icon>\n\n          <ion-icon *ngIf="categoryContent.IsFavorite" item-start name="ios-heart" style="color:#d64161"></ion-icon>\n\n        </button>\n\n        <!--<button ion-button>\n\n        <ion-icon item-start name="help-circle" style="color:#d64161"></ion-icon>\n\n        &nbsp;Soru Sor\n\n      </button>-->\n\n      </ion-buttons>\n\n    </ion-toolbar>\n\n  </ion-card>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"D:\_Ayhant\_Projects\test10\src\pages\content-list\content-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_app_service_app_service__["a" /* AppServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], ContentListPage);
    return ContentListPage;
}());

//# sourceMappingURL=content-list.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_app_service_app_service__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InformationPage = /** @class */ (function () {
    function InformationPage(navCtrl, navParams, storage, appService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.appService = appService;
        this.name = "";
        this.infoParam = "";
        this.messages = "";
        this.infoParam = this.navParams.get('infoParam');
        this.init();
    }
    InformationPage.prototype.init = function () {
        var _this = this;
        this.storage.get('member').then(function (member) {
            _this.name = member.FullName;
            console.log(member);
            if (_this.infoParam == "1-2") {
                _this.messages = "Üye girişi yapıp anketleri doldurduğunuz için teşekkür ederiz. Şimdilik lohusalık süreciniz tamamlana kadar bekleyip, tamamladığınızda son iki anketimizi de doldurmanızı rica edeceğiz. <br /><br /> Tüm üyelerimiz bu süreci tamamladığında uygulama tamamen herkesin kullanımına açılacaktır.";
            }
            else if (_this.infoParam == "3-4") {
                _this.messages = "Lohusalık sürecinizi tamamladınız tebrik ederiz. Tüm anketleri de doldurdunuz ilginiz için teşekkürler. Şimdi uygulamadaki herkesin sürecini tamamlaması için kısa bir süre uygulamaya erişiminiz kısıtlanmıştır. <br /><br /> Tüm üyelerimiz bu süreci tamamladığında uygulama tamamen tüm üyelerimize açılacaktır.";
            }
            else if (_this.infoParam == "block") {
                //this.messages = "Hesabınız bir süreliğine kullanım dışıdır. Bu durum uyugulamayı aktif kullanmayışınızdan kaynaklı olabilir. <br /><br /> Detaylı bilgi için uygulama yöneticisiyle irtibata geçebilirsiniz.";
                _this.checkSurvey(member);
            }
        });
    };
    InformationPage.prototype.checkSurvey = function (member) {
        var _this = this;
        this.appService.checkSurveyCompleted(member.MemberId).subscribe(function (surveyResult) {
            var isFirstSurveyCompleted = _this.checkSurveyCompleted(surveyResult.Result, 1);
            var isSecondSurveyCompleted = _this.checkSurveyCompleted(surveyResult.Result, 2);
            var isThirdSurveyCompleted = _this.checkSurveyCompleted(surveyResult.Result, 3);
            var isFourthSurveyCompleted = _this.checkSurveyCompleted(surveyResult.Result, 4);
            if (isFirstSurveyCompleted) {
                if (isSecondSurveyCompleted) {
                    if (isThirdSurveyCompleted) {
                        if (isFourthSurveyCompleted) {
                            _this.messages = "Lohusalık sürecinizi tamamladınız tebrik ederiz. Tüm anketleri de doldurdunuz ilginiz için teşekkürler. Şimdi uygulamadaki herkesin sürecini tamamlaması için kısa bir süre uygulamaya erişiminiz kısıtlanmıştır. <br /><br /> Tüm üyelerimiz bu süreci tamamladığında uygulama tamamen tüm üyelerimize açılacaktır.";
                        }
                        else {
                            _this.messages = "Hesabınız bir süreliğine kullanım dışıdır. Bu durum uyugulamayı aktif kullanmayışınızdan kaynaklı olabilir. <br /><br /> Detaylı bilgi için uygulama yöneticisiyle irtibata geçebilirsiniz.";
                        }
                    }
                    else {
                        _this.messages = "Hesabınız bir süreliğine kullanım dışıdır. Bu durum uyugulamayı aktif kullanmayışınızdan kaynaklı olabilir. <br /><br /> Detaylı bilgi için uygulama yöneticisiyle irtibata geçebilirsiniz.";
                    }
                }
                else {
                    _this.messages = "Hesabınız bir süreliğine kullanım dışıdır. Bu durum uyugulamayı aktif kullanmayışınızdan kaynaklı olabilir. <br /><br /> Detaylı bilgi için uygulama yöneticisiyle irtibata geçebilirsiniz.";
                }
            }
            else {
                _this.messages = "Hesabınız bir süreliğine kullanım dışıdır. Bu durum uyugulamayı aktif kullanmayışınızdan kaynaklı olabilir. <br /><br /> Detaylı bilgi için uygulama yöneticisiyle irtibata geçebilirsiniz.";
            }
        });
    };
    InformationPage.prototype.checkSurveyCompleted = function (data, surveyId) {
        var flag = false;
        data.forEach(function (item) {
            if (item.SurveyTypeId == surveyId) {
                flag = true;
            }
        });
        return flag;
    };
    InformationPage.prototype.okBtnClick = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    InformationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-information',template:/*ion-inline-start:"D:\_Ayhant\_Projects\test10\src\pages\information\information.html"*/'<!--\n  Generated template for the InformationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar hideBackButton="true">\n    <ion-title>Bilgilendirme</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div class=content-text>\n\n    <p>Merhaba {{name}}</p>\n    <p [innerHTML]="messages">\n    \n    </p>\n    <p>Lohusaloji</p>\n\n    <button ion-button full (click)="okBtnClick();">Tamam</button>\n  </div>\n\n  \n\n\n</ion-content>'/*ion-inline-end:"D:\_Ayhant\_Projects\test10\src\pages\information\information.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__providers_app_service_app_service__["a" /* AppServiceProvider */]])
    ], InformationPage);
    return InformationPage;
}());

//# sourceMappingURL=information.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_component__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_app_service_app_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__isgivebirth_isgivebirth__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__survey_survey__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__information_information__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, storage, platform, device, appService, toastCtrl, alertCtrl, modalCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.platform = platform;
        this.device = device;
        this.appService = appService;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.login = { username: '', password: '', passwordAgain: '' };
        this.signup = { username: '', password: '', passwordAgain: '', membershipAgreement: false };
        this.forgotpassword = { username: '', password: '', passwordAgain: '', membershipAgreement: false };
        this.submitted = false;
        this.showSignUp = false;
        this.showLogin = false;
        this.showForgotPassword = false;
        platform.ready().then(function () {
            console.log("platform readey");
        });
        this.showForm('login');
        this.init();
    }
    LoginPage.prototype.init = function () {
        this.getUserAgreement();
    };
    LoginPage.prototype.getUserAgreement = function () {
        var _this = this;
        this.appService.getContentDetail("20").subscribe(function (result) {
            _this.userAgreementInfo = result.Result;
            //console.log(this.userAgreementInfo);
        });
    };
    LoginPage.prototype.onLogin = function (isUsernameValid, isPasswordValid, loginObj) {
        var _this = this;
        this.submitted = true;
        if (isUsernameValid == true && isPasswordValid == true) {
            this.showLoadingIcon();
            //password olayı aktif edilecek
            this.appService.getPasswordEncode(this.login.password).subscribe(function (passResult) {
                console.log("Pass: ", passResult);
                _this.appService.login(loginObj.username, passResult.Result).subscribe(function (result) {
                    console.log(result);
                    if (result.Result != false) {
                        _this.doLoginSteps(result);
                    }
                    else {
                        _this.loading.dismiss();
                        _this.showMessage(result.ErrorMessage);
                    }
                });
            });
        }
    };
    LoginPage.prototype.onSignup = function (isUsernameValid, isPasswordValid, signupObj) {
        var _this = this;
        this.submitted = true;
        if (isUsernameValid == true && isPasswordValid == true) {
            if (this.signup.membershipAgreement) {
                if (this.signup.password.length >= 6) {
                    this.showLoadingIcon();
                    this.appService.getPasswordEncode(this.signup.password).subscribe(function (passResult) {
                        console.log("Pass: ", passResult);
                        _this.appService.register(signupObj.username, passResult.Result, _this.device.platform, _this.device.manufacturer, _this.device.model, _this.device.uuid).subscribe(function (result) {
                            console.log(result);
                            if (result.Result == false || result.Result == -1 || result.Result == 0) {
                                _this.loading.dismiss();
                                _this.showMessage(result.ErrorMessage);
                            }
                            else {
                                _this.loading.dismiss();
                                //this.storage.set('isUserLogged', 'true');
                                _this.storage.set('memberID', result.Result.MemberId);
                                _this.storage.set('member', result.Result);
                                localStorage.setItem('memberID', result.Result.MemberId);
                                //this.navCtrl.setRoot(MyApp);
                                _this.doLoginSteps(result);
                            }
                        });
                    });
                }
                else {
                    this.showMessage('Lütfen en az 6 haneli bir şifre seçiniz!');
                }
            }
            else {
                this.showMessage('Lütfen Kullanıcı Sözleşmesini İşaretleyiniz!');
            }
        }
    };
    LoginPage.prototype.onForgotPassword = function (isUsernameValid, isPasswordValid, forgotpasswordObj) {
        var _this = this;
        this.submitted = true;
        if (isUsernameValid == true && isPasswordValid == true) {
            if (this.forgotpassword.membershipAgreement) {
                if (this.forgotpassword.password.length >= 6) {
                    this.showLoadingIcon();
                    this.appService.getPasswordEncode(this.forgotpassword.password).subscribe(function (passResult) {
                        console.log("Pass: ", passResult);
                        _this.appService.register(forgotpasswordObj.username, passResult.Result, _this.device.platform, _this.device.manufacturer, _this.device.model, _this.device.uuid).subscribe(function (result) {
                            console.log(result);
                            if (result.Result == false || result.Result == -1 || result.Result == 0) {
                                _this.loading.dismiss();
                                _this.showMessage(result.ErrorMessage);
                            }
                            else {
                                _this.loading.dismiss();
                                _this.storage.set('isUserLogged', 'true');
                                _this.storage.set('memberID', result.Result.MemberId);
                                _this.storage.set('member', result.Result);
                                localStorage.setItem('memberID', result.Result.MemberId);
                                //this.navCtrl.setRoot(MyApp);
                                _this.doLoginSteps(result);
                            }
                        });
                    });
                }
                else {
                    this.showMessage('Lütfen en az 6 haneli bir şifre seçiniz!');
                }
            }
            else {
                this.showMessage('Lütfen Kullanıcı Sözleşmesini İşaretleyiniz!');
            }
        }
    };
    LoginPage.prototype.showForm = function (formname) {
        this.showSignUp = false;
        this.showLogin = false;
        this.showForgotPassword = false;
        if (formname == "signup")
            this.showSignUp = true;
        else if (formname == "login")
            this.showLogin = true;
        else if (formname == "forgotpassword")
            this.showForgotPassword = true;
    };
    LoginPage.prototype.showMessage = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000
        });
        toast.present();
    };
    LoginPage.prototype.showLoadingIcon = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Bekleyiniz...'
        });
        this.loading.present();
    };
    LoginPage.prototype.showPrompt = function () {
        var prompt = this.alertCtrl.create({
            title: this.userAgreementInfo.Title,
            message: this.userAgreementInfo.Body,
            buttons: [
                {
                    text: 'KAPAT'
                }
            ]
        });
        prompt.present();
    };
    LoginPage.prototype.checkSurveyCompleted = function (data, surveyId) {
        var flag = false;
        data.forEach(function (item) {
            if (item.SurveyTypeId == surveyId) {
                flag = true;
            }
        });
        return flag;
    };
    LoginPage.prototype.doLoginSteps = function (result) {
        var _this = this;
        if (!result.Result.IsBlocked) {
            if (result.Result.IsGiveBirth == true) {
                //admin tarafından onaylandı ise doğum haftasına bakacağız. 6 hafta olmamış ise anketleri doldurup doldurmadığına bakacağız. 1. ve 2. ankete sırası ile yönlendireeğiz.
                var birthDate = result.Result.GiveBirthDate == null ? new Date() : result.Result.GiveBirthDate;
                var d = new Date(birthDate).getTime();
                var today = new Date().getTime();
                var timeDiff = Math.abs(d - today);
                var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
                this.loading.dismiss();
                this.appService.checkSurveyCompleted(result.Result.MemberId).subscribe(function (surveyResult) {
                    console.log("Survey Result: ", surveyResult);
                    var isFirstSurveyCompleted = _this.checkSurveyCompleted(surveyResult.Result, 1);
                    var isSecondSurveyCompleted = _this.checkSurveyCompleted(surveyResult.Result, 2);
                    var isThirdSurveyCompleted = _this.checkSurveyCompleted(surveyResult.Result, 3);
                    var isFourthSurveyCompleted = _this.checkSurveyCompleted(surveyResult.Result, 4);
                    if (diffDays < 42) {
                        _this.storage.set('memberID', result.Result.MemberId);
                        _this.storage.set('member', result.Result);
                        localStorage.setItem('memberID', result.Result.MemberId);
                        if (isFirstSurveyCompleted) {
                            if (isSecondSurveyCompleted) {
                                if (result.Result.CanAccessContents == true) {
                                    _this.storage.set('isUserLogged', 'true');
                                    _this.storage.set('memberID', result.Result.MemberId);
                                    _this.storage.set('member', result.Result);
                                    localStorage.setItem('memberID', result.Result.MemberId);
                                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__app_app_component__["a" /* MyApp */]);
                                }
                                else {
                                    //içeriğe erişemeyenler mesaj sayfasına yönlendirilecek.
                                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__information_information__["a" /* InformationPage */], { infoParam: "1-2" });
                                    //this.navCtrl.push(InformationPage, {}, {animate: false});
                                }
                            }
                            else {
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__survey_survey__["a" /* SurveyPage */], { surveyType: 2, comeTo: "login" });
                            }
                        }
                        else {
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__survey_survey__["a" /* SurveyPage */], { surveyType: 1, comeTo: "login" });
                        }
                    }
                    else {
                        _this.storage.set('memberID', result.Result.MemberId);
                        _this.storage.set('member', result.Result);
                        localStorage.setItem('memberID', result.Result.MemberId);
                        if (isFirstSurveyCompleted) {
                            if (isSecondSurveyCompleted) {
                                if (isThirdSurveyCompleted) {
                                    if (isFourthSurveyCompleted) {
                                        if (result.Result.CanAccessContents == true) {
                                            _this.storage.set('isUserLogged', 'true');
                                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__app_app_component__["a" /* MyApp */]);
                                        }
                                        else {
                                            //içeriğe erişemeyenler mesaj sayfasına yönlendirilecek.
                                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__information_information__["a" /* InformationPage */], { infoParam: "3-4" });
                                        }
                                    }
                                    else {
                                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__survey_survey__["a" /* SurveyPage */], { surveyType: 4, comeTo: "login" });
                                    }
                                }
                                else {
                                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__survey_survey__["a" /* SurveyPage */], { surveyType: 3, comeTo: "login" });
                                }
                            }
                            else {
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__survey_survey__["a" /* SurveyPage */], { surveyType: 2, comeTo: "login" });
                            }
                        }
                        else {
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__survey_survey__["a" /* SurveyPage */], { surveyType: 1, comeTo: "login" });
                        }
                    }
                });
            }
            else {
                this.loading.dismiss();
                localStorage.setItem('memberID', result.Result.MemberId);
                this.storage.set('member', result.Result);
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__isgivebirth_isgivebirth__["a" /* IsgivebirthPage */]);
            }
        }
        else {
            this.loading.dismiss();
            //this.showMessage("Hesabınız bloklanmıştır!");
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__information_information__["a" /* InformationPage */], { infoParam: "block" });
        }
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\_Ayhant\_Projects\test10\src\pages\login\login.html"*/'<ion-content padding>\n\n  <div class="logo">\n\n    <img src="../../assets/imgs/LohusalojiLogo.png" alt="Lohusaloji logo">\n\n  </div>\n\n  <div *ngIf="showLogin">\n\n    <ion-row responsive-sm>\n\n      <ion-col style="text-align:center; color:#ff7b25;">\n\n        <h1>Üye Girişi</h1>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-list no-lines>\n\n      <ion-item>\n\n        <ion-label stacked color="primary">Eposta</ion-label>\n\n        <ion-input [(ngModel)]="login.username" name="username" type="email" #username="ngModel" spellcheck="false" autocapitalize="off"\n\n          required email>\n\n        </ion-input>\n\n      </ion-item>\n\n      <span ion-text [hidden]="username.valid || submitted == false" color="danger" padding-left>\n\n        Lütfen geçerli bir eposta adresi giriniz!\n\n      </span>\n\n      <ion-item>\n\n        <ion-label stacked color="primary">Şifre</ion-label>\n\n        <ion-input [(ngModel)]="login.password" name="password" type="password" #password="ngModel" required>\n\n        </ion-input>\n\n      </ion-item>\n\n      <span ion-text [hidden]="password.valid || submitted == false" color="danger" padding-left>\n\n        Şifre girmelisiniz\n\n      </span>\n\n    </ion-list>\n\n    <ion-row responsive-sm>\n\n      <ion-col>\n\n        <button ion-button (click)="onLogin(username.valid, password.valid, login)"  block>Üye Girişi Yap</button>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row responsive-sm>\n\n      <ion-col>\n\n        <button ion-button (click)="showForm(\'signup\');"  block>Yeni Üye</button>\n\n      </ion-col>\n\n      <ion-col>\n\n        <button ion-button (click)="showForm(\'forgotpassword\');"  block>Şifre Belirle</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </div>\n\n\n\n\n\n  <div *ngIf="showSignUp">\n\n    <ion-list no-lines>\n\n      <ion-row responsive-sm>\n\n        <ion-col style="text-align:center; color:#ff7b25;">\n\n          <h1>Yeni Üye</h1>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-item>\n\n        <ion-label stacked color="primary">Eposta</ion-label>\n\n        <ion-input [(ngModel)]="signup.username" name="username" type="email" #username="ngModel" required email>\n\n        </ion-input>\n\n      </ion-item>\n\n      <span ion-text [hidden]="username.valid || submitted == false" color="danger" padding-left>\n\n        Lütfen geçerli bir eposta adresi giriniz!\n\n      </span>\n\n      <ion-item>\n\n        <ion-label stacked color="primary">Şifre</ion-label>\n\n        <ion-input [(ngModel)]="signup.password" name="password" type="password" #password="ngModel" required>\n\n        </ion-input>\n\n      </ion-item>\n\n      <span ion-text [hidden]="password.valid || submitted == false" color="danger" padding-left>\n\n        Şifre girmelisiniz\n\n      </span>\n\n      <ion-item>\n\n        <ion-label stacked color="primary">Şifre Tekrar</ion-label>\n\n        <ion-input [(ngModel)]="signup.passwordAgain" name="passwordAgain" type="password" #passwordAgain="ngModel" required>\n\n        </ion-input>\n\n      </ion-item>\n\n      <span ion-text [hidden]="signup.password == signup.passwordAgain || submitted == false" color="danger" padding-left>\n\n        Şifre ve şifre tekrar alanları aynı olmalı\n\n      </span>\n\n      <!-- Input checkbox -->\n\n      <ion-row responsive-sm>\n\n        <ion-col>\n\n          <p>\n\n            <!-- Input Description -->\n\n            <ion-checkbox [(ngModel)]="signup.membershipAgreement" color="primary" [ngModelOptions]="{standalone: true}"></ion-checkbox>\n\n            <a (click)="showPrompt()" style="font-size:13px !important; text-decoration:underline;"> Lohusaloji tez çalışmasına</a> katılmayı gönüllü olarak kabul ediyorum.\n\n            <span ion-text [hidden]="signup.membershipAgreement || submitted == false" color="danger" padding-left>\n\n              <br /> Sözleşmeyi okuyup onaylamalısınız.\n\n            </span>\n\n          </p>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row responsive-sm>\n\n        <ion-col>\n\n          <button ion-button (click)="onSignup(username.valid, password.valid, signup)"  block>Yeni Üye Kaydı</button>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row responsive-sm>\n\n        <ion-col>\n\n          <button ion-button (click)="showForm(\'login\');"  block>Üye Girişi</button>\n\n        </ion-col>\n\n        <ion-col>\n\n          <button ion-button (click)="showForm(\'forgotpassword\');"  block>Şifre Belirle</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-list>\n\n  </div>\n\n\n\n\n\n  <div *ngIf="showForgotPassword">\n\n    <ion-list no-lines>\n\n      <ion-row responsive-sm>\n\n        <ion-col style="text-align:center; color:#ff7b25;">\n\n          <h1>Şifre Belirle</h1>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-item>\n\n        <ion-label stacked color="primary">Eposta</ion-label>\n\n        <ion-input [(ngModel)]="forgotpassword.username" name="username" type="email" #username="ngModel" required email>\n\n        </ion-input>\n\n      </ion-item>\n\n      <span ion-text [hidden]="username.valid || submitted == false" color="danger" padding-left>\n\n        Lütfen geçerli bir eposta adresi giriniz!\n\n      </span>\n\n      <ion-item>\n\n        <ion-label stacked color="primary">Şifre</ion-label>\n\n        <ion-input [(ngModel)]="forgotpassword.password" name="password" type="password" #password="ngModel" required>\n\n        </ion-input>\n\n      </ion-item>\n\n      <span ion-text [hidden]="password.valid || submitted == false" color="danger" padding-left>\n\n        Şifre girmelisiniz\n\n      </span>\n\n      <ion-item>\n\n        <ion-label stacked color="primary">Şifre Tekrar</ion-label>\n\n        <ion-input [(ngModel)]="forgotpassword.passwordAgain" name="passwordAgain" type="password" #passwordAgain="ngModel" required>\n\n        </ion-input>\n\n      </ion-item>\n\n      <span ion-text [hidden]="forgotpassword.password == forgotpassword.passwordAgain || submitted == false" color="danger" padding-left>\n\n        Şifre ve şifre tekrar alanları aynı olmalı\n\n      </span>\n\n\n\n      <ion-row responsive-sm>\n\n        <ion-col>\n\n          <p>\n\n            <!-- Input Description -->\n\n            <ion-checkbox [(ngModel)]="forgotpassword.membershipAgreement" color="primary" [ngModelOptions]="{standalone: true}"></ion-checkbox>\n\n            <a (click)="showPrompt()" style="font-size:13px !important; text-decoration:underline;"> Lohusaloji tez çalışmasına</a> katılmayı gönüllü olarak kabul ediyorum.\n\n            <span ion-text [hidden]="forgotpassword.membershipAgreement || submitted == false" color="danger" padding-left>\n\n              <br /> Sözleşmeyi okuyup onaylamalısınız.\n\n            </span>\n\n          </p>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n\n\n      <ion-row responsive-sm>\n\n        <ion-col>\n\n          <button ion-button (click)="onForgotPassword(username.valid, password.valid, forgotpassword)" block>Yeni Şifre Belirle</button>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row responsive-sm>\n\n        <ion-col>\n\n          <button ion-button (click)="showForm(\'login\');"  block>Üye Girişi</button>\n\n        </ion-col>\n\n        <ion-col>\n\n          <button ion-button (click)="showForm(\'forgotpassword\');"  block>Yeni Üye</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-list>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"D:\_Ayhant\_Projects\test10\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_5__providers_app_service_app_service__["a" /* AppServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_app_service_app_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_component__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__information_information__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SurveyPage = /** @class */ (function () {
    /*   survey1 = {
        q1: '3', q2: '3', q3: 'Lise', q4: 'Lise', q5: 'İşçi', q6: 'İşçi', q7: 'Var', q8: 'Gelirim giderimden az', q9: 'İl', q10: 'Geniş aile', q11: 'Hayır', q12: 'Hayır', q13: '3', q14: 'Günde 1 saat', q15: 'Bilgi öğrenmek', q16: 'Blog', q17: '4', q18: '3'
        , q19: '4', q20: 'Hayır', q21: 'Hayır', q22: 'Hayır', q23: 'Hayır', q24: 'İsteniyor', q25: 'Hayır', q26: 'Aile hekimliği', q27: 'Hayır', q28: 'Kitap', q29: 'Sezaryan', q30: 'Hayır', q31: 'Kısmen', q32: 'Kız', q33: 'Evet', q34: '2017-05-05', q35: '3', q36: '4'
        , q37: 'Hayır', q38: 'Hayır', q39: 'Diğer', q40: 'Hayır', q41: 'Hayır'
      };
    
      survey2_part1 = {
        q1: 'Biraz Memnun', q2: 'Biraz Memnun', q3: 'Biraz Memnun', q4: 'Biraz Memnun', q5: 'Biraz Memnun', q6: 'Biraz Memnun', q7: 'Biraz Memnun', q8: 'Biraz Memnun', q9: 'Biraz Memnun', q10: 'Biraz Memnun', q11: 'Biraz Memnun', q12: 'Biraz Memnun', q13: 'Biraz Memnun', q14: 'Biraz Memnun', q15a: 'Biraz Memnun', q15b: 'Biraz Memnun', q15c: 'Biraz Memnun', q16: 'Biraz Memnun', q17: 'Biraz Memnun', q18: 'Biraz Memnun'
        , q19: 'Biraz Memnun', q20: 'Biraz Memnun', q21: 'Biraz Memnun', q22: 'Biraz Memnun', q23: 'Biraz Memnun', q24: 'Biraz Memnun', q25: 'Biraz Memnun', q26: 'Biraz Memnun', q27: 'Biraz Memnun', q28: 'Biraz Memnun', q29: 'Biraz Memnun', q30: 'Biraz Memnun', q31: 'Biraz Memnun', q32: 'Biraz Memnun', q33: 'Biraz Memnun', q34a: 'Biraz Memnun', q34b: 'Biraz Memnun', q34c: 'Biraz Memnun'
        , q35a: 'Biraz Memnun', q35b: 'Biraz Memnun'
      };
    
      survey2_part2 = {
        q1: 'Biraz Önemli', q2: 'Biraz Önemli', q3: 'Biraz Önemli', q4: 'Biraz Önemli', q5: 'Biraz Önemli', q6: 'Biraz Önemli', q7: 'Biraz Önemli', q8: 'Biraz Önemli', q9: 'Biraz Önemli', q10: 'Biraz Önemli', q11: 'Biraz Önemli', q12: 'Biraz Önemli', q13: 'Biraz Önemli', q14: 'Biraz Önemli', q15a: 'Biraz Önemli', q15b: 'Biraz Önemli', q15c: 'Biraz Önemli', q16: 'Biraz Önemli', q17: 'Biraz Önemli', q18: 'Biraz Önemli'
        , q19: 'Biraz Önemli', q20: 'Biraz Önemli', q21: 'Biraz Önemli', q22: 'Biraz Önemli', q23: 'Biraz Önemli', q24: 'Biraz Önemli', q25: 'Biraz Önemli', q26: 'Biraz Önemli', q27: 'Biraz Önemli', q28: 'Biraz Önemli', q29: 'Biraz Önemli', q30: 'Biraz Önemli', q31: 'Biraz Önemli', q32: 'Biraz Önemli', q33: 'Biraz Önemli', q34a: 'Biraz Önemli', q34b: 'Biraz Önemli', q34c: 'Biraz Önemli'
        , q35a: 'Biraz Önemli', q35b: 'Biraz Önemli'
      };
    
      survey3 = {
        q1: 'Katılıyorum', q2: 'Katılıyorum', q3: 'Katılıyorum', q4: 'Katılıyorum', q5: 'Katılıyorum', q6: 'Katılıyorum', q7: 'Katılıyorum', q8: 'Katılıyorum', q9: 'Katılıyorum', q10: 'Katılıyorum', q11: 'Katılıyorum', q12: 'Katılıyorum', q13: 'Katılıyorum', q14: 'Katılıyorum', q15: 'Katılıyorum', q16: 'Katılıyorum', q17: 'Katılıyorum', q18: 'Katılıyorum'
        , q19: 'Katılıyorum', q20: 'Katılıyorum', q21: 'Katılıyorum', q22: 'Katılıyorum', q23: 'Katılıyorum', q24: 'Katılıyorum', q25: 'Katılıyorum', q26: 'Katılıyorum', q27: 'Katılıyorum', q28: 'Katılıyorum', q29: 'Katılıyorum', q30: 'Katılıyorum', q31: 'Katılıyorum', q32: 'Katılıyorum', q33: 'Katılıyorum', q34: 'Katılıyorum'
      };
    
      survey1Additional = { q5: 'Biraz Memnun', q6: 'Biraz Memnun', q11: 'Biraz Memnun', q12: 'Biraz Memnun', q20: 'Biraz Memnun', q21: 'Biraz Memnun', q22: 'Biraz Memnun', q27: 'Biraz Memnun', q37: 'Biraz Memnun', q38: 'Biraz Memnun', q40: 'Biraz Memnun', q41: '' };
      */
    function SurveyPage(navCtrl, storage, navParams, appService, loadingCtrl, toastCtrl, menuCtrl) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.navParams = navParams;
        this.appService = appService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.menuCtrl = menuCtrl;
        this.showSurvey = { first: true, second: false, third: false, fourth: false };
        this.survey1Questions = ["1. Yaşınız", "2. Kaç yıllık evlisiniz", "3. Eğitim durumunuz", "4. Eşinizin eğitim durumu", "5. Mesleğiniz", "6- Eşinizin Mesleği", "7. Sağlık Güvenceniz", "8. Ekonomik durumunuzu nasıl tanımlarsınız", "9. Yaşadığınız yerleşim yeri neresidir", "10. Aile tipiniz nedir", "11. Kronik bir hastalığınız varsa açıklayın", "12. Sürekli kullandığınız ilacınız varsa belirtin", "13. İnterneti kaç yıldır kullanılıyorsunuz", "14. Bir günde ortalama internete ne kadar süre geçiriyorsunuz", "15. İnterneti ne amaçla kullanıyorsunuz (Birden fazla cevap verebilirsiniz)", "16. İnternette hangi sayfaların bilgisini güvenli buluyorsunuz (Birden fazla cevap verebilirsiniz)", "17. Kaç kez gebe kaldınız", "18. Kaç kez doğum yaptınız", "19. Yaşayan kaç çocuğunuz var", "20. Ölü doğum yaptıysanız sayısı", "21. Düşük yaptıysanız sayısı", "22. Küretaj olduysanız sayısı", "23. Gebeliğiniz planlı bir gebelik miydi", "24. Gebeliğinizi isteme durumunuz", "25. Gebelikte doktor kontrollerinize düzenli gittiniz mi", "26. Gebeliğinizle ilgili olarak hangi kurumakurumlara kontrole gittiniz", "27. Gebeliğiniz süresince bebek bakımı-annelik ve emzirmeyle ilgili eğitim programına katıldıysanız açıklayınız", "28. Bebek bakımı, annelik ve ebeveynlikle ile ilgili bilgilerinizi nereden aldınız", "29. Son doğum şekliniz nedir", "30. Doğum şekliniz tatmin edici miydi", "31.Eşinizin gebelik ve doğum sürecine yeterli katıldığını düşünüyor musunuz", "32. Bebeğinizin cinsiyeti nedir", "33. Bebeğinizin cinsiyeti tercih ettiğiniz cinsiyet midir", "34. Bebeğin doğum tarihi", "35. Bebeğin gestasyon yaşı", "36. Doğum kilosu", "37. Doğum sırasında herhangi bir sorun yaşadıysanız belirtiniz", "38. Doğum sırasında bebeğe herhangi bir müdahalede bulunulmuşsa açıklayınız", "39. Bebeğin beslenme şekli nedir (Birden fazla cevap verebilirsiniz)", "40. Taburculuğunuzdan sonra evde yapılması gereken kendinize ait özel bir bakım gereksinimi varsa belirtiniz", "41. Bebeğin taburculuğundan sonra evde yapılması gereken özel bir bakım gereksinimi varsa belirtiniz"];
        this.survey2Questions = ["1. Sağlığınız", "2. Ağrı düzeyiniz", "3. Günlük Aktivitelerinizdeki Enerji Düzeyiniz", "4. Yaşamınızı Kontrol Edebilme Düzeyiniz", "5. Yardım Almadan Kendinize Bakım Verme Yeterliliğiniz", "6. Fiziksel Görünüşünüz", "7. Uyku Düzeyiniz", "8. Memeleriniz", "9. Doğum nedeni ile olan dikişleriniz", "10. Cinsel Yaşamınız", "11. İç Huzurunuz", "12. Genel Olarak Mutluluğunuz", "13.Genel Olarak Yaşamınız", "14. Yaşamınızdaki Kaygı Düzeyiniz", "15.A. Eşinizden Aldığınız Duygusal Destek", "15.B. Ailenizden Aldığınız Duygusal Destek", "15.C. Arkadaşınızdan ya da Diğer İnsanlardan Aldığınız Duygusal Destek", "16. Eşiniz İle İlişkiniz", "17. Aile Sorumluluklarını Yerine Getirme yeterliliğiniz", "18. Bebeğinizin Sağlığı", "19. Çocuklarınızın Bakımında Yardım Alma Durumunuz", "20. Çocuklar İçin Ayırdığınız Zaman", "21. Ev İşleri için Ayırdığınız Zaman", "22. Arkadaşlarınızakrabalarınız İçin Ayırdığınız Zaman", "23. Eşiniz İçin Ayırdığınız Zaman", "24. Kendiniz İçin ayırdığınız Zaman", "25. Yeni Bebeğinizi Beslenme yeterliliğiniz", "26. Eşinizin Sağlığı", "27. Yaşamınızdaki Günlük İşleriniz", "28. Yaşadığınız Ev", "29. Komşularınız", "30. Ekonomik Bağımsızlığınız", "31. Ekonomik Harcamalarınızı Karşılama Yeterliliğiniz", "32. Tıbbi Hizmete Ulaşım", "33. İstenildiği Zaman Herhangi Bir Araca Ulaşım", "34.A. Evdeki Yaşam Koşullarınız (Mal Varlığınız)", "34.B. Evdeki Yaşam Koşullarınız (Mali Durumunuz)", "34.C. Evdeki Yaşam Koşullarınız (Çevresel Koşullarınız)", "35.A. İşÇalışma (Eşinizin İşi)", "35.B. İşÇalışma (Kendi İşiniz)"];
        this.survey3Questions = ["1. Sağlığınız", "2. Ağrı düzeyiniz", "3. Günlük Aktivitelerinizdeki Enerji Düzeyiniz", "4. Yaşamınızı Kontrol Edebilme Düzeyiniz", "5. Yardım Almadan Kendinize Bakım Verme Yeterliliğiniz", "6. Fiziksel Görünüşünüz", "7. Uyku Düzeyiniz", "8. Memeleriniz", "9. Doğum nedeni ile olan dikişleriniz", "10. Cinsel Yaşamınız", "11. İç Huzurunuz", "12. Genel Olarak Mutluluğunuz", "13.Genel Olarak Yaşamınız", "14. Yaşamınızdaki Kaygı Düzeyiniz", "15.A. Eşinizden Aldığınız Duygusal Destek", "15.B. Ailenizden Aldığınız Duygusal Destek", "15.C. Arkadaşınızdan ya da Diğer İnsanlardan Aldığınız Duygusal Destek", "16. Eşiniz İle İlişkiniz", "17. Aile Sorumluluklarını Yerine Getirme yeterliliğiniz", "18. Bebeğinizin Sağlığı", "19. Çocuklarınızın Bakımında Yardım Alma Durumunuz", "20. Çocuklar İçin Ayırdığınız Zaman", "21. Ev İşleri için Ayırdığınız Zaman", "22. Arkadaşlarınızakrabalarınız İçin Ayırdığınız Zaman", "23. Eşiniz İçin Ayırdığınız Zaman", "24. Kendiniz İçin ayırdığınız Zaman", "25. Yeni Bebeğinizi Beslenme yeterliliğiniz", "26. Eşinizin Sağlığı", "27. Yaşamınızdaki Günlük İşleriniz", "28. Yaşadığınız Ev", "29. Komşularınız", "30. Ekonomik Bağımsızlığınız", "31. Ekonomik Harcamalarınızı Karşılama Yeterliliğiniz", "32. Tıbbi Hizmete Ulaşım", "33. İstenildiği Zaman Herhangi Bir Araca Ulaşım", "34.A. Evdeki Yaşam Koşullarınız (Mal Varlığınız)", "34.B. Evdeki Yaşam Koşullarınız (Mali Durumunuz)", "34.C. Evdeki Yaşam Koşullarınız (Çevresel Koşullarınız)", "35.A. İşÇalışma (Eşinizin İşi)", "35.B. İşÇalışma (Kendi İşiniz)"];
        this.survey4Questions = ["1. İçeriğin kapsamı öğrenmeyi sağlayacak yeterliliktedir", "2. Materyal değerlendirme bölümü içermektedir", "3. Materyaldeki metinler ayrı bir bölümde çıktısı alınabilecek şekilde tasarlanmıştır", "4. 1Vietinlerle,	etkileşimli	uygulamalar	eşit	ağırlıkta dağılımı göstermektedir", "5. Materyalde eğlenceli, dikkat çekici bilgiler, resimler ya da uyarıcı işaretler eklenmiştir", "6. Materyal farklı öğrenme biçimleri (görsel, işitsel...) içermektedir", "7. Materyallerin içeriği öğrenci kitaplarındaki bilgilerle bütünleşmiştir", "8. Hazırlanan yazılım Web üzerinden dersi anlamaya olanak vermektedir", "9. Öğretmen dersi bu materyal üzerinden kolayca işleyebilmektedir", "10. Materyal içerisindeki çoklu ortam özelikleri (grafik, metin, animasyonlar, video vs) konuya uygun olarak kullanılmıştır", "11. Ekran görünümü ilk bakışta materyalin web tabanlı eğitim için kullanılabileceğini hissettirmektedir", "12. Öğretim materyalinin organizasyonel yapısı açık ve sistematiktir", "13. Öğretim materyalinde sunulan olaylar ve durumlar öğrencilerin bilişsel yeteneklerine uygundur", "14. Materyal web tabanlı eğitimde kullanılmak için uygundur", "15. Materyal aktarılacak konuya uygun olacak şekilde tasarlanmıştır", "16. Materyal, öğretmenin ders materyali olarak kullanımına uygundur", "17. Grafik, ses, animasyon gibi çoklu odam öğeleri yeterli miktarda kullanılmıştır", "18. Kullanılan yazılım öğrenmenin amacına ulaşmasını sağlamaktadır", "19. Bilgiler uygun resimlerle açık şekilde görselleştirilmiştir", "20. Meteraldeki şekillerde ver resimlerde gerçekçi canlı renkler kullanılmıştır", "21. Meteryalde eğelneceli şekiller, görseller vs. kullanılmışıtr", "22. Animasyon tasarımı öğreneme isteiğini artırmaktadır", "23. Yazılım ekranları arasında tutarlıklı vardır", "24. Ekranda kullanılan renkler uyumludur", "25. VideolarınAnimasyonların niteliği açık ve iyidir", "26. Ekranlar arası geçiş kullanıcya bağlıdır", "27. Meteryalde yardım menüsü bulunmaktadır", "28. Video iletimi düzgün ve sorunsuz çalışmaktadır", "29. Meteryal öğrenci kullanımına izin verecek yetkilendirmelere sahiptir", "30. Arayüz tasarımı memnun edici ve estetiktir", "31. Materyalin giriş sayfasında gerekli yönlendirmeler yer almaktadır", "32. Animasyon ve simülasyonlar gerçeğe uygundur", "33. Materyal içerisindeki etkileşim düzeyi uygundur", "34. Materyal tüm donanımlarla birlikte kullanılmya uygundur"];
        this.survey1 = {
            q1: '', q2: '', q3: '', q4: '', q5: '', q6: '', q7: '', q8: '', q9: '', q10: '', q11: '', q12: '', q13: '', q14: '', q15: '', q16: '', q17: '', q18: '',
            q19: '', q20: '', q21: '', q22: '', q23: '', q24: '', q25: '', q26: '', q27: '', q28: '', q29: '', q30: '', q31: '', q32: '', q33: '', q34: '', q35: '', q36: '',
            q37: '', q38: '', q39: '', q40: '', q41: ''
        };
        this.survey2_part1 = {
            q1: '', q2: '', q3: '', q4: '', q5: '', q6: '', q7: '', q8: '', q9: '', q10: '', q11: '', q12: '', q13: '', q14: '', q15a: '', q15b: '', q15c: '', q16: '', q17: '', q18: '',
            q19: '', q20: '', q21: '', q22: '', q23: '', q24: '', q25: '', q26: '', q27: '', q28: '', q29: '', q30: '', q31: '', q32: '', q33: '', q34a: '', q34b: '', q34c: '',
            q35a: '', q35b: ''
        };
        this.survey2_part2 = {
            q1: '', q2: '', q3: '', q4: '', q5: '', q6: '', q7: '', q8: '', q9: '', q10: '', q11: '', q12: '', q13: '', q14: '', q15a: '', q15b: '', q15c: '', q16: '', q17: '', q18: '',
            q19: '', q20: '', q21: '', q22: '', q23: '', q24: '', q25: '', q26: '', q27: '', q28: '', q29: '', q30: '', q31: '', q32: '', q33: '', q34a: '', q34b: '', q34c: '',
            q35a: '', q35b: ''
        };
        this.survey3 = {
            q1: '', q2: '', q3: '', q4: '', q5: '', q6: '', q7: '', q8: '', q9: '', q10: '', q11: '', q12: '', q13: '', q14: '', q15: '', q16: '', q17: '', q18: '',
            q19: '', q20: '', q21: '', q22: '', q23: '', q24: '', q25: '', q26: '', q27: '', q28: '', q29: '', q30: '', q31: '', q32: '', q33: '', q34: ''
        };
        this.survey1Additional = { q5: '', q6: '', q11: '', q12: '', q20: '', q21: '', q22: '', q27: '', q37: '', q38: '', q40: '', q41: '' };
        this.surveyTypeID = navParams.get('surveyType');
        var comeTo = navParams.get('comeTo');
        this.menuCtrl.swipeEnable(false);
        if (this.surveyTypeID == 1) {
            this.showSurvey = { first: true, second: false, third: false, fourth: false };
        }
        else if (this.surveyTypeID == 2) {
            this.showSurvey = { first: false, second: true, third: false, fourth: false };
        }
        else if (this.surveyTypeID == 3) {
            this.showSurvey = { first: false, second: false, third: true, fourth: false };
        }
        else if (this.surveyTypeID == 4) {
            this.showSurvey = { first: false, second: false, third: false, fourth: true };
        }
        else {
        }
    }
    SurveyPage_1 = SurveyPage;
    SurveyPage.prototype.saveSurvey = function () {
        var _this = this;
        //this.surveyTypeID = "1"; //şimdilik sabit sonrasında kalkaacak
        var errCount = 0;
        var surveyData = this.getSelectedSurveyData(this.surveyTypeID);
        var memberId = localStorage.getItem('memberID');
        var isAnswersReady = this.checkAnswers(surveyData, this.surveyTypeID);
        if (isAnswersReady) {
            this.showLoadingIcon();
            this.appService.saveSurvey(this.surveyTypeID, memberId).subscribe(function (result) {
                console.log('Survey Header: ', result);
                var headerID = result.Result;
                var questionKey = Object.keys(surveyData);
                var numberOfQuestion = questionKey.length;
                var count = 0;
                var questionText = [];
                if (_this.surveyTypeID == "1") {
                    questionText = _this.survey1Questions;
                }
                else if (_this.surveyTypeID == "2") {
                    questionText = _this.survey2Questions;
                }
                else if (_this.surveyTypeID == "3") {
                    questionText = _this.survey3Questions;
                }
                else if (_this.surveyTypeID == "4") {
                    questionText = _this.survey4Questions;
                }
                else { }
                for (var i = 0; i < numberOfQuestion; i++) {
                    var answer = surveyData[questionKey[i]].toString();
                    if (_this.surveyTypeID == "1" && (i == 4 || i == 5 || i == 10 || i == 11 || i == 19 || i == 20 || i == 21 || i == 26 || i == 36 || i == 37 || i == 39 || i == 40)) {
                        var addtionalAswerKey = "q" + (i + 1);
                        var addtionalAnswer = _this.survey1Additional[addtionalAswerKey].toString();
                        answer = surveyData[questionKey[i]].toString() + " " + addtionalAnswer;
                    }
                    var qText = questionText[i];
                    answer = answer.trim();
                    answer = answer.replace(/,/g, ", ");
                    answer = answer.replace(/\/\//g, "**1**");
                    answer = answer.replace(/\//g, "**2**");
                    answer = answer.replace(/'/g, "**3**");
                    answer = answer.replace(/&/g, "**4**");
                    answer = answer.replace(/</g, "**5**");
                    answer = answer.replace(/>/g, "**6**");
                    _this.appService.saveSurveyAnswers(headerID, qText, answer, i + 1).subscribe(function (questionResult) {
                        console.log(questionResult);
                        count++;
                        if (count == numberOfQuestion) {
                            console.log("Anket Başarılı bir şekilde kayıt edildi");
                            _this.loading.dismiss();
                            _this.showMessage("Anketiniz başarılı bir şekilde kayıt edildi.");
                            setTimeout(function () {
                                _this.doLoginSteps();
                            }, 3000);
                        }
                    }, function (err) {
                        console.log("Error Meydana geldi!");
                        errCount++;
                        if (errCount == 1) {
                            _this.showMessage('Beklenmedik bir hata meydanaa geldi lütfen tekrar deneyiniz!');
                            _this.loading.dismiss();
                        }
                    });
                }
            }, function (err) {
                _this.loading.dismiss();
            });
        }
        else {
            this.showMessage("Lütfen tüm soruları doğru bir şekilde cevaplayınız!");
            console.log("Lütfen Tüm soruları doğru bir şekilde cevaplayınız!");
        }
    };
    SurveyPage.prototype.doLoginSteps = function () {
        var _this = this;
        if (this.surveyTypeID == "1") {
            this.navCtrl.setRoot(SurveyPage_1, { surveyType: 2 });
        }
        else if (this.surveyTypeID == "2") {
            this.storage.get('member').then(function (member) {
                if (member.CanAccessContents == true) {
                    _this.storage.set('isUserLogged', 'true');
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__app_app_component__["a" /* MyApp */]);
                }
                else {
                    //içeriklere erişim hakkı yok o yüzden mesaj sayfasına yönlendir.
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__information_information__["a" /* InformationPage */], { infoParam: "1-2" });
                }
            });
        }
        else if (this.surveyTypeID == "3") {
            this.navCtrl.setRoot(SurveyPage_1, { surveyType: 4 });
        }
        else if (this.surveyTypeID == "4") {
            /* this.storage.get('member').then(member => {
              if(member.CanAccessContents == true){
                this.storage.set('isUserLogged', 'true');
                this.navCtrl.setRoot(MyApp);
              }
              else {
                //içeriklere erişim hakkı yok o yüzden mesaj sayfasına yönlendir.
                this.navCtrl.push(InformationPage);
              }
            }); */
            var memberId = localStorage.getItem('memberID');
            this.appService.blockMember(memberId).subscribe(function (blockResult) {
                console.log("Block Result: ", blockResult);
                if (blockResult.Result != -1) {
                    _this.storage.set('member', blockResult.Result);
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__information_information__["a" /* InformationPage */], { infoParam: "3-4" });
                }
            });
        }
    };
    SurveyPage.prototype.getSelectedSurveyData = function (surveyID) {
        if (surveyID == "1") {
            return this.survey1;
        }
        else if (surveyID == "2") {
            return this.survey2_part1;
        }
        else if (surveyID == "3") {
            return this.survey2_part2;
        }
        else if (surveyID == "4") {
            return this.survey3;
        }
        else {
            return [];
        }
    };
    SurveyPage.prototype.checkAnswers = function (surveyData, surveyID) {
        console.log(surveyData);
        var question = Object.keys(surveyData);
        for (var i = 0; i < question.length; i++) {
            var answer = surveyData[question[i]].toString();
            if (surveyID == "1" && i == 10 && answer == "Evet" && this.survey1Additional[question[i]] == "") {
                console.log("Varsa doldurunuz olanı boş geçti!");
                return false;
            }
            else if (surveyID == "1" && i == 4 && answer == "Evet" && this.survey1Additional[question[i]] == "") {
                console.log("Varsa doldurunuz olanı boş geçti!");
                return false;
            }
            else if (surveyID == "1" && i == 5 && answer == "Evet" && this.survey1Additional[question[i]] == "") {
                console.log("Varsa doldurunuz olanı boş geçti!");
                return false;
            }
            else if (surveyID == "1" && i == 10 && answer == "Evet" && this.survey1Additional[question[i]] == "") {
                console.log("Varsa doldurunuz olanı boş geçti!");
                return false;
            }
            else if (surveyID == "1" && i == 19 && answer == "Evet" && this.survey1Additional[question[i]] == "") {
                console.log("Varsa doldurunuz olanı boş geçti!");
                return false;
            }
            else if (surveyID == "1" && i == 20 && answer == "Evet" && this.survey1Additional[question[i]] == "") {
                console.log("Varsa doldurunuz olanı boş geçti!");
                return false;
            }
            else if (surveyID == "1" && i == 21 && answer == "Evet" && this.survey1Additional[question[i]] == "") {
                console.log("Varsa doldurunuz olanı boş geçti!");
                return false;
            }
            else if (surveyID == "1" && i == 26 && answer == "Evet" && this.survey1Additional[question[i]] == "") {
                console.log("Varsa doldurunuz olanı boş geçti!");
                return false;
            }
            else if (surveyID == "1" && i == 36 && answer == "Evet" && this.survey1Additional[question[i]] == "") {
                console.log("Varsa doldurunuz olanı boş geçti!");
                return false;
            }
            else if (surveyID == "1" && i == 37 && answer == "Evet" && this.survey1Additional[question[i]] == "") {
                console.log("Varsa doldurunuz olanı boş geçti!");
                return false;
            }
            else if (surveyID == "1" && i == 39 && answer == "Evet" && this.survey1Additional[question[i]] == "") {
                console.log("Varsa doldurunuz olanı boş geçti!");
                return false;
            }
            else if (surveyID == "1" && i == 40 && answer == "Evet" && this.survey1Additional[question[i]] == "") {
                console.log("Varsa doldurunuz olanı boş geçti!");
                return false;
            }
            if (answer == "") {
                console.log("hatalı girdi var");
                return false;
            }
        }
        return true;
    };
    SurveyPage.prototype.showLoadingIcon = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Bekleyiniz...'
        });
        this.loading.present();
    };
    SurveyPage.prototype.showMessage = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000
        });
        toast.present();
    };
    SurveyPage = SurveyPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-survey',template:/*ion-inline-start:"D:\_Ayhant\_Projects\test10\src\pages\survey\survey.html"*/'\n<ion-header>\n\n  <ion-navbar hideBackButton="true">\n    <ion-title>Anket</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <!--Anket 1-->\n  <ion-list *ngIf="showSurvey.first">\n    <ion-list-header color="secondary">\n      LOHUSA TANILAMA FORMU\n    </ion-list-header>\n    <ion-item>\n      <ion-label>1. Yaşınız</ion-label>\n      <ion-input type="number" [(ngModel)]="survey1.q1" placeholder="_____" style="text-align:right !important;" text-right></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>2. Kaç yıllık evlisiniz</ion-label>\n      <ion-select [(ngModel)]="survey1.q2" interface="popover">\n        <ion-option value="1">1</ion-option>\n        <ion-option value="2">2</ion-option>\n        <ion-option value="3">3</ion-option>\n        <ion-option value="4">4</ion-option>\n        <ion-option value="5">5</ion-option>\n        <ion-option value="6">6</ion-option>\n        <ion-option value="7">7</ion-option>\n        <ion-option value="8">8</ion-option>\n        <ion-option value="9">9</ion-option>\n        <ion-option value="10">10</ion-option>\n        <ion-option value="11">11</ion-option>\n        <ion-option value="12">12</ion-option>\n        <ion-option value="13">13</ion-option>\n        <ion-option value="14">14</ion-option>\n        <ion-option value="15">15</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>3. Eğitim durumunuz</ion-label>\n      <ion-select [(ngModel)]="survey1.q3" interface="popover">\n        <ion-option value="İlkokul">İlkokul</ion-option>\n        <ion-option value="Ortaokul">Ortaokul</ion-option>\n        <ion-option value="Lise">Lise</ion-option>\n        <ion-option value="Üniversite">Üniversite</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>4. Eşinizin eğitim durumu</ion-label>\n      <ion-select [(ngModel)]="survey1.q4" interface="popover">\n        <ion-option value="İlkokul">İlkokul</ion-option>\n        <ion-option value="Ortaokul">Ortaokul</ion-option>\n        <ion-option value="Lise">Lise</ion-option>\n        <ion-option value="Üniversite">Üniversite</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>5. Mesleğiniz</ion-label>\n      <ion-select [(ngModel)]="survey1.q5" interface="popover">\n        <ion-option value="Ev hanımı">Ev hanımı</ion-option>\n        <ion-option value="İşçi">İşçi</ion-option>\n        <ion-option value="Devlet memuru">Devlet memuru</ion-option>\n        <ion-option value="Serbest meslek">Serbest meslek</ion-option>\n        <ion-option value="Diğer">Diğer</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item *ngIf="survey1.q5 == \'Diğer\'">\n      <ion-input type="textarea" [(ngModel)]="survey1Additional.q5"  placeholder="Buraya belirtiniz..." ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>6- Eşinizin Mesleği</ion-label>\n      <ion-select [(ngModel)]="survey1.q6" interface="popover">\n        <ion-option value="Çalışmıyor">Çalışmıyor</ion-option>\n        <ion-option value="İşçi">İşçi</ion-option>\n        <ion-option value="Devlet memuru">Devlet memuru</ion-option>\n        <ion-option value="Serbest meslek">Serbest meslek</ion-option>\n        <ion-option value="Diğer">Diğer</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item *ngIf="survey1.q6 == \'Diğer\'">\n      <ion-input type="textarea" [(ngModel)]="survey1Additional.q6"  placeholder="Buraya belirtiniz..." ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>7. Sağlık Güvenceniz</ion-label>\n      <ion-select [(ngModel)]="survey1.q7" interface="popover">\n        <ion-option value="Var">Var</ion-option>\n        <ion-option value="Yok">Yok</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>8. Ekonomik durumunuzu nasıl tanımlarsınız?</ion-label>\n      <ion-select [(ngModel)]="survey1.q8" interface="popover">\n        <ion-option value="Gelirim giderimden az">Gelirim giderimden az</ion-option>\n        <ion-option value="Gelirim giderime denk">Gelirim giderime denk</ion-option>\n        <ion-option value="Gelirim giderimden fazla">Gelirim giderimden fazla</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>9. Yaşadığınız yerleşim yeri neresidir?</ion-label>\n      <ion-select [(ngModel)]="survey1.q9" interface="popover">\n        <ion-option value="İl">İl</ion-option>\n        <ion-option value="İlçe">İlçe</ion-option>\n        <ion-option value="Köy">Köy</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>10. Aile tipiniz nedir?</ion-label>\n      <ion-select [(ngModel)]="survey1.q10" interface="popover">\n        <ion-option value="Çekirdek aile">Çekirdek aile</ion-option>\n        <ion-option value="Geniş aile">Geniş aile</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>11. Kronik bir hastalığınız var mı? </ion-label>\n      <ion-select  [(ngModel)]="survey1.q11"  interface="popover" (ionChange)="survey1Additional.q11 = \'\'">\n        <ion-option value="Evet">Evet</ion-option>\n        <ion-option value="Hayır">Hayır</ion-option>\n      </ion-select>\n      <!-- <ion-input type="textarea" [(ngModel)]="survey1.q11" placeholder="_____" text-right></ion-input> -->\n    </ion-item>\n    <ion-item *ngIf="survey1.q11 == \'Evet\'">\n      <ion-input type="textarea" [(ngModel)]="survey1Additional.q11"  placeholder="Buraya belirtiniz..." ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>12. Sürekli kullandığınız ilacınız var mı?</ion-label>\n      <ion-select  [(ngModel)]="survey1.q12"  interface="popover" (ionChange)="survey1Additional.q12 = \'\'">\n        <ion-option value="Evet">Evet</ion-option>\n        <ion-option value="Hayır">Hayır</ion-option>\n      </ion-select>\n      <!-- <ion-input type="textarea" [(ngModel)]="survey1.q12" placeholder="_____" text-right></ion-input> -->\n    </ion-item>\n    <ion-item *ngIf="survey1.q12 == \'Evet\'">\n      <ion-input type="textarea" [(ngModel)]="survey1Additional.q12"  placeholder="Buraya belirtiniz..." ></ion-input>\n    </ion-item>\n    <ion-list-header color="secondary">\n      İNTENET KULLANIMI İLE İLGİLİ ÖZELLİKLERİ\n    </ion-list-header>\n    <ion-item>\n      <ion-label floating>13. İnterneti kaç yıldır kullanılıyorsunuz? </ion-label>\n      <ion-input type="number" [(ngModel)]="survey1.q13" placeholder="_____" text-right></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>14. Bir günde ortalama internete ne kadar süre geçiriyorsunuz?</ion-label>\n      <ion-select [(ngModel)]="survey1.q14" interface="popover">\n        <ion-option value="Günde yarım saat">Günde yarım saat</ion-option>\n        <ion-option value="Günde 1 saat">Günde 1 saat</ion-option>\n        <ion-option value="Günde 2 saat">Günde 2 saat</ion-option>\n        <ion-option value="Günde 3 saat">Günde 3 saat</ion-option>\n        <ion-option value="Günde 4 saat ve üzeri">Günde 4 saat ve üzeri</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>15. İnterneti ne amaçla kullanıyorsunuz? (Birden fazla cevap verebilirsiniz)</ion-label>\n      <ion-select [(ngModel)]="survey1.q15" multiple="true" cancelText="Vazgeç" okText="Tamam">\n        <ion-option value="İletişim kurmak">İletişim kurmak</ion-option>\n        <ion-option value="Bilgi öğrenmek">Bilgi öğrenmek</ion-option>\n        <ion-option value="Öğrendiğim bilginin güvenirliliği test etmek">Öğrendiğim bilginin güvenirliliği test etmek</ion-option>\n        <ion-option value="Bilimsel çalışmalar ve iş amacıyla">Bilimsel çalışmalar/iş amacıyla</ion-option>\n        <ion-option value="Diğer">Diğer</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>16. İnternette hangi sayfaların bilgisini güvenli buluyorsunuz? (Birden fazla cevap verebilirsiniz)</ion-label>\n      <ion-select [(ngModel)]="survey1.q16" multiple="true" cancelText="Vazgeç" okText="Tamam">\n        <ion-option value="Resmi Kurum sayfaları">Resmi Kurum sayfaları</ion-option>\n        <ion-option value="Uzman sayfaları">Uzman sayfaları</ion-option>\n        <ion-option value="Blog">Blog</ion-option>\n        <ion-option value="Diğer">Diğer</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-list-header color="secondary">\n      OBSTETRİK ÖYKÜSÜNE İLİŞKİN ÖZELLİKLER\n    </ion-list-header>\n    <ion-item>\n      <ion-label floating>17. Kaç kez gebe kaldınız?</ion-label>\n      <ion-input type="number" [(ngModel)]="survey1.q17" placeholder="_____" text-right></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>18. Kaç kez doğum yaptınız?</ion-label>\n      <ion-input type="number" [(ngModel)]="survey1.q18" placeholder="_____" text-right></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>19. Yaşayan kaç çocuğunuz var? </ion-label>\n      <ion-input type="number" [(ngModel)]="survey1.q19" placeholder="_____" text-right></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>20. Ölü doğum yaptınız mı? Evet ise sayısı</ion-label>\n      <ion-select [(ngModel)]="survey1.q20" interface="popover">\n        <ion-option value="Evet">Evet</ion-option>\n        <ion-option value="Hayır">Hayır</ion-option>\n      </ion-select>\n      <!-- <ion-input type="textarea" [(ngModel)]="survey1.q20" placeholder="_____" text-right></ion-input> -->\n    </ion-item>\n    <ion-item *ngIf="survey1.q20 == \'Evet\'">\n      <ion-input type="number"  [(ngModel)]="survey1Additional.q20" placeholder="Buraya belirtiniz..." ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>21. Düşük yaptınız mı? Evet ise sayısı</ion-label>\n      <ion-select [(ngModel)]="survey1.q21" interface="popover">\n        <ion-option value="Evet">Evet</ion-option>\n        <ion-option value="Hayır">Hayır</ion-option>\n      </ion-select>\n      <!-- <ion-input type="textarea" [(ngModel)]="survey1.q21" placeholder="_____" text-right></ion-input> -->\n    </ion-item>\n    <ion-item *ngIf="survey1.q21 == \'Evet\'">\n      <ion-input type="number"  [(ngModel)]="survey1Additional.q21" placeholder="Buraya belirtiniz..." ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>22. Küretaj oldunuz mu? Evet ise sayısı</ion-label>\n      <ion-select [(ngModel)]="survey1.q22" interface="popover" >\n        <ion-option value="Evet">Evet</ion-option>\n        <ion-option value="Hayır">Hayır</ion-option>\n      </ion-select>\n      <!-- <ion-input type="textarea" [(ngModel)]="survey1.q22" placeholder="_____" text-right></ion-input> -->\n    </ion-item>\n    <ion-item *ngIf="survey1.q22 == \'Evet\'">\n      <ion-input type="number" [(ngModel)]="survey1Additional.q22" placeholder="Buraya belirtiniz..." ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>23. Gebeliğiniz planlı bir gebelik miydi?</ion-label>\n      <ion-select [(ngModel)]="survey1.q23" interface="popover">\n        <ion-option value="Evet">Evet</ion-option>\n        <ion-option value="Hayır">Hayır</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>24. Gebeliğinizi isteme durumunuz</ion-label>\n      <ion-select [(ngModel)]="survey1.q24" interface="popover">\n        <ion-option value="İsteniyor">İsteniyor</ion-option>\n        <ion-option value="Daha sonra olması isteniyor">Daha sonra olması isteniyor</ion-option>\n        <ion-option value="Hiç istenmiyor">Hiç istenmiyor</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>25. Gebelikte doktor kontrollerinize düzenli gittiniz mi?</ion-label>\n      <ion-select [(ngModel)]="survey1.q25" interface="popover">\n        <ion-option value="Evet">Evet</ion-option>\n        <ion-option value="Hayır">Hayır</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>26. Gebeliğinizle ilgili olarak hangi kuruma/kurumlara kontrole gittiniz?</ion-label>\n      <ion-select [(ngModel)]="survey1.q26" interface="popover">\n        <ion-option value="Aile hekimliği">Aile hekimliği</ion-option>\n        <ion-option value="Toplum sağlığı merkezi">Toplum sağlığı merkezi</ion-option>\n        <ion-option value="Devlet Hastanesi">Devlet Hastanesi</ion-option>\n        <ion-option value="Araştırma ve Uygulama Hastanesi">Araştırma ve Uygulama Hastanesi</ion-option>\n        <ion-option value="Üniversite Hastanesi">Üniversite Hastanesi</ion-option>\n        <ion-option value="Özel Merkez">Özel Merkez</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>27. Gebeliğiniz süresince bebek bakımı-annelik ve emzirmeyle ilgili eğitim programına katıldınız mı?</ion-label>\n      <ion-select  [(ngModel)]="survey1.q27"  interface="popover" (ionChange)="survey1Additional.q27 = \'\'">\n        <ion-option value="Evet">Evet</ion-option>\n        <ion-option value="Hayır">Hayır</ion-option>\n      </ion-select>\n     <!--  <ion-input type="textarea" [(ngModel)]="survey1.q27" placeholder="_____" text-right></ion-input> -->\n    </ion-item>\n    <ion-item *ngIf="survey1.q27 == \'Evet\'">\n      <ion-input type="textarea"  [(ngModel)]="survey1Additional.q27" placeholder="Buraya belirtiniz..." ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>28. Bebek bakımı, annelik ve ebeveynlikle ile ilgili bilgilerinizi nereden aldınız?</ion-label>\n      <ion-select [(ngModel)]="survey1.q28" interface="popover">\n        <ion-option value="Aile Büyükleri">Aile Büyükleri</ion-option>\n        <ion-option value="Kitap">Kitap</ion-option>\n        <ion-option value="Televizyon programları">Televizyon programları</ion-option>\n        <ion-option value="İnternet sayfaları">İnternet sayfaları …. (Blog- Doktor Web Sayfası - forum sayfaları- YouTube)</ion-option>\n        <ion-option value="Doktorumdan">Doktorumdan</ion-option>\n        <ion-option value="Hastanenin eğitim programından">Hastanenin eğitim programından</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>29. Son doğum şekliniz nedir?</ion-label>\n      <ion-select [(ngModel)]="survey1.q29" interface="popover">\n        <ion-option value="Vajinal doğum">Vajinal doğum</ion-option>\n        <ion-option value="Sezaryan">Sezaryan</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>30. Doğum şekliniz tatmin edici miydi?</ion-label>\n      <ion-select [(ngModel)]="survey1.q30" interface="popover">\n        <ion-option value="Evet">Evet</ion-option>\n        <ion-option value="Hayır">Hayır</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>31.Eşinizin gebelik ve doğum sürecine yeterli katıldığını düşünüyor musunuz?</ion-label>\n      <ion-select [(ngModel)]="survey1.q31" interface="popover">\n        <ion-option value="Evet">Evet</ion-option>\n        <ion-option value="Kısmen">Kısmen</ion-option>\n        <ion-option value="Hayır">Hayır</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-list-header color="secondary">\n      BEBEĞE İLİŞKİN ÖZELLİKLER\n    </ion-list-header>\n    <ion-item>\n      <ion-label>32. Bebeğinizin cinsiyeti nedir?</ion-label>\n      <ion-select [(ngModel)]="survey1.q32" interface="popover">\n        <ion-option value="Kız">Kız</ion-option>\n        <ion-option value="Erkek">Erkek</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>33. Bebeğinizin cinsiyeti tercih ettiğiniz cinsiyet midir?</ion-label>\n      <ion-select [(ngModel)]="survey1.q33" interface="popover">\n        <ion-option value="Evet">Evet</ion-option>\n        <ion-option value="Hayır">Hayır</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>34. Bebeğin doğum tarihi</ion-label>\n      <!-- <ion-input type="textarea" [(ngModel)]="survey1.q34" placeholder="_____" text-right></ion-input> -->\n      <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="survey1.q34"></ion-datetime>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>35. Bebeğin gestasyon yaşı</ion-label>\n      <ion-input type="number" [(ngModel)]="survey1.q35" placeholder="_____" text-right></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>36. Doğum kilosu(gr)</ion-label>\n      <ion-input type="number" [(ngModel)]="survey1.q36" placeholder="_____" text-right></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>37. Doğum sırasında herhangi bir sorun yaşanmış mı?.</ion-label>\n      <ion-select  [(ngModel)]="survey1.q37"  interface="popover" (ionChange)="survey1Additional.q37 = \'\'">\n        <ion-option value="Evet">Evet</ion-option>\n        <ion-option value="Hayır">Hayır</ion-option>\n      </ion-select>\n      <!-- <ion-input type="textarea" [(ngModel)]="survey1.q37" placeholder="_____" text-right></ion-input> -->\n    </ion-item>\n    <ion-item *ngIf="survey1.q37 == \'Evet\'">\n      <ion-input type="textarea" [(ngModel)]="survey1Additional.q37"  placeholder="Buraya belirtiniz..." ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>38. Doğum sırasında bebeğe herhangi bir müdahalede bulunulmuş mu?</ion-label>\n      <ion-select  [(ngModel)]="survey1.q38"  interface="popover" (ionChange)="survey1Additional.q38 = \'\'">\n        <ion-option value="Evet">Evet</ion-option>\n        <ion-option value="Hayır">Hayır</ion-option>\n      </ion-select>\n      <!-- <ion-input type="textarea" [(ngModel)]="survey1.q38" placeholder="_____" text-right></ion-input> -->\n    </ion-item>\n    <ion-item *ngIf="survey1.q38 == \'Evet\'">\n      <ion-input type="textarea" [(ngModel)]="survey1Additional.q38" placeholder="Buraya belirtiniz..." ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>39. Bebeğin beslenme şekli nedir? (Birden fazla cevap verebilirsiniz)</ion-label>\n      <ion-select [(ngModel)]="survey1.q39" multiple="true" cancelText="Vazgeç" okText="Tamam">\n        <ion-option value="Anne sütü (Emzirerek)">Anne sütü (Emzirerek)</ion-option>\n        <ion-option value="Anne sütü (Biberonla)">Anne sütü (Biberonla)</ion-option>\n        <ion-option value="Formül mama (Biberonla)">Formül mama (Biberonla)</ion-option>\n        <ion-option value="Anne sütü ve formül mama">Anne sütü ve formül mama</ion-option>\n        <ion-option value="Diğer">Diğer</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>40. Taburculuğunuzdan sonra evde yapılması gereken kendinize ait özel bir bakım gereksinimi varsa belirtiniz.</ion-label>\n      <ion-select  [(ngModel)]="survey1.q40"  interface="popover" (ionChange)="survey1Additional.q40 = \'\'">\n        <ion-option value="Evet">Evet</ion-option>\n        <ion-option value="Hayır">Hayır</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item *ngIf="survey1.q40 == \'Evet\'">\n      <ion-input type="textarea" [(ngModel)]="survey1Additional.q40" placeholder="Buraya belirtiniz..." ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>41. Bebeğin taburculuğundan sonra evde yapılması gereken özel bir bakım gereksinimi varsa belirtiniz</ion-label>\n      <!-- <ion-input type="textarea" [(ngModel)]="survey1.q41" placeholder="_____" text-right></ion-input> -->\n      <ion-select  [(ngModel)]="survey1.q41"  interface="popover" (ionChange)="survey1Additional.q41 = \'\'">\n        <ion-option value="Evet">Evet</ion-option>\n        <ion-option value="Hayır">Hayır</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item *ngIf="survey1.q41 == \'Evet\'">\n      <ion-input type="textarea" [(ngModel)]="survey1Additional.q41" placeholder="Buraya belirtiniz..." ></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <!--Anket 2-->\n  <ion-list *ngIf="showSurvey.second">\n    <ion-list-header color="secondary">\n      DOĞUM SONU YAŞAM KALİTESİ ÖLÇEĞİ\n      <br />(DSYKÖ) / BÖLÜM 1\n    </ion-list-header>\n    <ion-item>\n      Aşağıdaki her bir madde için yaşamınızın o alanla ilgili ne kadar önemli olduğunu en iyi açıklayan cevabı seçiniz.\n      <br />Cevabınızı yansıtan numarayı yuvarlak içine alarak işaretleyiniz. Doğru ya da yanlış cevaplar yoktur.\n      <br />1= Hiç Önemli değil 4= Biraz Önemli\n      <br />2= Orta derecede Önemli değil 5=Orta derecede Önemli\n      <br />3= Biraz Önemli değil 6= Çok Önemli\n      <br />\n      <strong>NE DERECEDE MEMNUNSUNUZ?</strong>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>1. Sağlığınız</ion-label>\n      <ion-select [(ngModel)]="survey2_part1.q1" interface="popover">\n        <ion-option value="Hiç Memnun Değil">Hiç Memnun Değil</ion-option>\n        <ion-option value="Orta Derecede Memnun Değil">Orta Derecede Memnun Değil</ion-option>\n        <ion-option value="Biraz Memnun Değil">Biraz Memnun Değil</ion-option>\n        <ion-option value="Biraz Memnun">Biraz Memnun</ion-option>\n        <ion-option value="Orta Derecede Memnun">Orta Derecede Memnun</ion-option>\n        <ion-option value="Çok Memnun">Çok Memnun</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>2. Ağrı düzeyiniz</ion-label>\n      <ion-select [(ngModel)]="survey2_part1.q2" interface="popover">\n         <ion-option value="Hiç Memnun Değil">Hiç Memnun Değil</ion-option>\n        <ion-option value="Orta Derecede Memnun Değil">Orta Derecede Memnun Değil</ion-option>\n        <ion-option value="Biraz Memnun Değil">Biraz Memnun Değil</ion-option>\n        <ion-option value="Biraz Memnun">Biraz Memnun</ion-option>\n        <ion-option value="Orta Derecede Memnun">Orta Derecede Memnun</ion-option>\n        <ion-option value="Çok Memnun">Çok Memnun</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>3. Günlük Aktivitelerinizdeki Enerji Düzeyiniz</ion-label>\n      <ion-select [(ngModel)]="survey2_part1.q3" interface="popover">\n         <ion-option value="Hiç Memnun Değil">Hiç Memnun Değil</ion-option>\n        <ion-option value="Orta Derecede Memnun Değil">Orta Derecede Memnun Değil</ion-option>\n        <ion-option value="Biraz Memnun Değil">Biraz Memnun Değil</ion-option>\n        <ion-option value="Biraz Memnun">Biraz Memnun</ion-option>\n        <ion-option value="Orta Derecede Memnun">Orta Derecede Memnun</ion-option>\n        <ion-option value="Çok Memnun">Çok Memnun</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>4. Yaşamınızı Kontrol Edebilme Düzeyiniz</ion-label>\n      <ion-select [(ngModel)]="survey2_part1.q4" interface="popover">\n         <ion-option value="Hiç Memnun Değil">Hiç Memnun Değil</ion-option>\n        <ion-option value="Orta Derecede Memnun Değil">Orta Derecede Memnun Değil</ion-option>\n        <ion-option value="Biraz Memnun Değil">Biraz Memnun Değil</ion-option>\n        <ion-option value="Biraz Memnun">Biraz Memnun</ion-option>\n        <ion-option value="Orta Derecede Memnun">Orta Derecede Memnun</ion-option>\n        <ion-option value="Çok Memnun">Çok Memnun</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>5. Yardım Almadan Kendinize Bakım Verme Yeterliliğiniz</ion-label>\n      <ion-select [(ngModel)]="survey2_part1.q5" interface="popover">\n        <ion-option value="Hiç Memnun Değil">Hiç Memnun Değil</ion-option>\n        <ion-option value="Orta Derecede Memnun Değil">Orta Derecede Memnun Değil</ion-option>\n        <ion-option value="Biraz Memnun Değil">Biraz Memnun Değil</ion-option>\n        <ion-option value="Biraz Memnun">Biraz Memnun</ion-option>\n        <ion-option value="Orta Derecede Memnun">Orta Derecede Memnun</ion-option>\n        <ion-option value="Çok Memnun">Çok Memnun</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>6. Fiziksel Görünüşünüz</ion-label>\n      <ion-select [(ngModel)]="survey2_part1.q6" interface="popover">\n         <ion-option value="Hiç Memnun Değil">Hiç Memnun Değil</ion-option>\n        <ion-option value="Orta Derecede Memnun Değil">Orta Derecede Memnun Değil</ion-option>\n        <ion-option value="Biraz Memnun Değil">Biraz Memnun Değil</ion-option>\n        <ion-option value="Biraz Memnun">Biraz Memnun</ion-option>\n        <ion-option value="Orta Derecede Memnun">Orta Derecede Memnun</ion-option>\n        <ion-option value="Çok Memnun">Çok Memnun</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>7. Uyku Düzeyiniz</ion-label>\n      <ion-select [(ngModel)]="survey2_part1.q7" interface="popover">\n         <ion-option value="Hiç Memnun Değil">Hiç Memnun Değil</ion-option>\n        <ion-option value="Orta Derecede Memnun Değil">Orta Derecede Memnun Değil</ion-option>\n        <ion-option value="Biraz Memnun Değil">Biraz Memnun Değil</ion-option>\n        <ion-option value="Biraz Memnun">Biraz Memnun</ion-option>\n        <ion-option value="Orta Derecede Memnun">Orta Derecede Memnun</ion-option>\n        <ion-option value="Çok Memnun">Çok Memnun</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>8. Memeleriniz</ion-label>\n      <ion-select [(ngModel)]="survey2_part1.q8" interface="popover">\n         <ion-option value="Hiç Memnun Değil">Hiç Memnun Değil</ion-option>\n        <ion-option value="Orta Derecede Memnun Değil">Orta Derecede Memnun Değil</ion-option>\n        <ion-option value="Biraz Memnun Değil">Biraz Memnun Değil</ion-option>\n        <ion-option value="Biraz Memnun">Biraz Memnun</ion-option>\n        <ion-option value="Orta Derecede Memnun">Orta Derecede Memnun</ion-option>\n        <ion-option value="Çok Memnun">Çok Memnun</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>9. Doğum nedeni ile olan dikişleriniz</ion-label>\n      <ion-select [(ngModel)]="survey2_part1.q9" interface="popover">\n         <ion-option value="Hiç Memnun Değil">Hiç Memnun Değil</ion-option>\n        <ion-option value="Orta Derecede Memnun Değil">Orta Derecede Memnun Değil</ion-option>\n        <ion-option value="Biraz Memnun Değil">Biraz Memnun Değil</ion-option>\n        <ion-option value="Biraz Memnun">Biraz Memnun</ion-option>\n        <ion-option value="Orta Derecede Memnun">Orta Derecede Memnun</ion-option>\n        <ion-option value="Çok Memnun">Çok Memnun</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>10. Cinsel Yaşamınız</ion-label>\n      <ion-select [(ngModel)]="survey2_part1.q10" interface="popover">\n         <ion-option value="Hiç Memnun Değil">Hiç Memnun Değil</ion-option>\n        <ion-option value="Orta Derecede Memnun Değil">Orta Derecede Memnun Değil</ion-option>\n        <ion-option value="Biraz Memnun Değil">Biraz Memnun Değil</ion-option>\n        <ion-option value="Biraz Memnun">Biraz Memnun</ion-option>\n        <ion-option value="Orta Derecede Memnun">Orta Derecede Memnun</ion-option>\n        <ion-option value="Çok Memnun">Çok Memnun</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>11. İç Huzurunuz</ion-label>\n      <ion-select [(ngModel)]="survey2_part1.q11" interface="popover">\n        <ion-option value="Hiç Memnun Değil">Hiç Memnun Değil</ion-option>\n        <ion-option value="Orta Derecede Memnun Değil">Orta Derecede Memnun Değil</ion-option>\n        <ion-option value="Biraz Memnun Değil">Biraz Memnun Değil</ion-option>\n        <ion-option value="Biraz Memnun">Biraz Memnun</ion-option>\n        <ion-option value="Orta Derecede Memnun">Orta Derecede Memnun</ion-option>\n        <ion-option value="Çok Memnun">Çok Memnun</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>12. Genel Olarak Mutluluğunuz</ion-label>\n      <ion-select [(ngModel)]="survey2_part1.q12" interface="popover">\n         <ion-option value="Hiç Memnun Değil">Hiç Memnun Değil</ion-option>\n        <ion-option value="Orta Derecede Memnun Değil">Orta Derecede Memnun Değil</ion-option>\n        <ion-option value="Biraz Memnun Değil">Biraz Memnun Değil</ion-option>\n        <ion-option value="Biraz Memnun">Biraz Memnun</ion-option>\n        <ion-option value="Orta Derecede Memnun">Orta Derecede Memnun</ion-option>\n        <ion-option value="Çok Memnun">Çok Memnun</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>13.Genel Olarak Yaşamınız</ion-label>\n      <ion-select [(ngModel)]="survey2_part1.q13" interface="popover">\n         <ion-option value="Hiç Memnun Değil">Hiç Memnun Değil</ion-option>\n        <ion-option value="Orta Derecede Memnun Değil">Orta Derecede Memnun Değil</ion-option>\n        <ion-option value="Biraz Memnun Değil">Biraz Memnun Değil</ion-option>\n        <ion-option value="Biraz Memnun">Biraz Memnun</ion-option>\n        <ion-option value="Orta Derecede Memnun">Orta Derecede Memnun</ion-option>\n        <ion-option value="Çok Memnun">Çok Memnun</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>14. Yaşamınızdaki Kaygı Düzeyiniz</ion-label>\n      <ion-select [(ngModel)]="survey2_part1.q14" interface="popover">\n         <ion-option value="Hiç Memnun Değil">Hiç Memnun Değil</ion-option>\n        <ion-option value="Orta Derecede Memnun Değil">Orta Derecede Memnun Değil</ion-option>\n        <ion-option value="Biraz Memnun Değil">Biraz Memnun Değil</ion-option>\n        <ion-option value="Biraz Memnun">Biraz Memnun</ion-option>\n        <ion-option value="Orta Derecede Memnun">Orta Derecede Memnun</ion-option>\n        <ion-option value="Çok Memnun">Çok Memnun</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>15.A. Eşinizden Aldığınız Duygusal Destek</ion-label>\n      <ion-select [(ngModel)]="survey2_part1.q15a" interface="popover">\n        <ion-option value="Hiç Memnun Değil">Hiç Memnun Değil</ion-option>\n        <ion-option value="Orta Derecede Memnun Değil">Orta Derecede Memnun Değil</ion-option>\n        <ion-option value="Biraz Memnun Değil">Biraz Memnun Değil</ion-option>\n        <ion-option value="Biraz Memnun">Biraz Memnun</ion-option>\n        <ion-option value="Orta Derecede Memnun">Orta Derecede Memnun</ion-option>\n        <ion-option value="Çok Memnun">Çok Memnun</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>15.B. Ailenizden Aldığınız Duygusal Destek</ion-label>\n      <ion-select [(ngModel)]="survey2_part1.q15b" interface="popover">\n         <ion-option value="Hiç Memnun Değil">Hiç Memnun Değil</ion-option>\n        <ion-option value="Orta Derecede Memnun Değil">Orta Derecede Memnun Değil</ion-option>\n        <ion-option value="Biraz Memnun Değil">Biraz Memnun Değil</ion-option>\n        <ion-option value="Biraz Memnun">Biraz Memnun</ion-option>\n        <ion-option value="Orta Derecede Memnun">Orta Derecede Memnun</ion-option>\n        <ion-option value="Çok Memnun">Çok Memnun</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>15.C. Arkadaşınızdan ya da Diğer İnsanlardan Aldığınız Duygusal Destek</ion-label>\n      <ion-select [(ngModel)]="survey2_part1.q15c" interface="popover">\n         <ion-option value="Hiç Memnun Değil">Hiç Memnun Değil</ion-option>\n        <ion-option value="Orta Derecede Memnun Değil">Orta Derecede Memnun Değil</ion-option>\n        <ion-option value="Biraz Memnun Değil">Biraz Memnun Değil</ion-option>\n        <ion-option value="Biraz Memnun">Biraz Memnun</ion-option>\n        <ion-option value="Orta Derecede Memnun">Orta Derecede Memnun</ion-option>\n        <ion-option value="Çok Memnun">Çok Memnun</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>16. Eşiniz İle İlişkiniz</ion-label>\n      <ion-select [(ngModel)]="survey2_part1.q16" interface="popover">\n         <ion-option value="Hiç Memnun Değil">Hiç Memnun Değil</ion-option>\n        <ion-option value="Orta Derecede Memnun Değil">Orta Derecede Memnun Değil</ion-option>\n        <ion-option value="Biraz Memnun Değil">Biraz Memnun Değil</ion-option>\n        <ion-option value="Biraz Memnun">Biraz Memnun</ion-option>\n        <ion-option value="Orta Derecede Memnun">Orta Derecede Memnun</ion-option>\n        <ion-option value="Çok Memnun">Çok Memnun</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>17. Aile Sorumluluklarını Yerine Getirme yeterliliğiniz</ion-label>\n      <ion-select [(ngModel)]="survey2_part1.q17" interface="popover">\n        <ion-option value="Hiç Memnun Değil">Hiç Memnun Değil</ion-option>\n        <ion-option value="Orta Derecede Memnun Değil">Orta Derecede Memnun Değil</ion-option>\n        <ion-option value="Biraz Memnun Değil">Biraz Memnun Değil</ion-option>\n        <ion-option value="Biraz Memnun">Biraz Memnun</ion-option>\n        <ion-option value="Orta Derecede Memnun">Orta Derecede Memnun</ion-option>\n        <ion-option value="Çok Memnun">Çok Memnun</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>18. Bebeğinizin Sağlığı</ion-label>\n      <ion-select [(ngModel)]="survey2_part1.q18" interface="popover">\n         <ion-option value="Hiç Memnun Değil">Hiç Memnun Değil</ion-option>\n        <ion-option value="Orta Derecede Memnun Değil">Orta Derecede Memnun Değil</ion-option>\n        <ion-option value="Biraz Memnun Değil">Biraz Memnun Değil</ion-option>\n        <ion-option value="Biraz Memnun">Biraz Memnun</ion-option>\n        <ion-option value="Orta Derecede Memnun">Orta Derecede Memnun</ion-option>\n        <ion-option value="Çok Memnun">Çok Memnun</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>\n        19. Çocuklarınızın Bakımında Yardım Alma Durumunuz\n      </ion-label>\n      <ion-select [(ngModel)]="survey2_part1.q19" interface="popover">\n        <ion-option value="Hiç Memnun Değil">Hiç Memnun Değil</ion-option>\n        <ion-option value="Orta Derecede Memnun Değil">Orta Derecede Memnun Değil</ion-option>\n        <ion-option value="Biraz Memnun Değil">Biraz Memnun Değil</ion-option>\n        <ion-option value="Biraz Memnun">Biraz Memnun</ion-option>\n        <ion-option value="Orta Derecede Memnun">Orta Derecede Memnun</ion-option>\n        <ion-option value="Çok Memnun">Çok Memnun</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>\n        20. Çocuklar İçin Ayırdığınız Zaman\n      </ion-label>\n      <ion-select [(ngModel)]="survey2_part1.q20" interface="popover">\n     <ion-option value="Hiç Memnun Değil">Hiç Memnun Değil</ion-option>\n        <ion-option value="Orta Derecede Memnun Değil">Orta Derecede Memnun Değil</ion-option>\n        <ion-option value="Biraz Memnun Değil">Biraz Memnun Değil</ion-option>\n        <ion-option value="Biraz Memnun">Biraz Memnun</ion-option>\n        <ion-option value="Orta Derecede Memnun">Orta Derecede Memnun</ion-option>\n        <ion-option value="Çok Memnun">Çok Memnun</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>\n        21. Ev İşleri için Ayırdığınız Zaman\n      </ion-label>\n      <ion-select [(ngModel)]="survey2_part1.q21" interface="popover">\n         <ion-option value="Hiç Memnun Değil">Hiç Memnun Değil</ion-option>\n        <ion-option value="Orta Derecede Memnun Değil">Orta Derecede Memnun Değil</ion-option>\n        <ion-option value="Biraz Memnun Değil">Biraz Memnun Değil</ion-option>\n        <ion-option value="Biraz Memnun">Biraz Memnun</ion-option>\n        <ion-option value="Orta Derecede Memnun">Orta Derecede Memnun</ion-option>\n        <ion-option value="Çok Memnun">Çok Memnun</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>\n        22. Arkadaşlarınız/akrabalarınız İçin Ayırdığınız Zaman\n      </ion-label>\n      <ion-select [(ngModel)]="survey2_part1.q22" interface="popover">\n       <ion-option value="Hiç Memnun Değil">Hiç Memnun Değil</ion-option>\n        <ion-option value="Orta Derecede Memnun Değil">Orta Derecede Memnun Değil</ion-option>\n        <ion-option value="Biraz Memnun Değil">Biraz Memnun Değil</ion-option>\n        <ion-option value="Biraz Memnun">Biraz Memnun</ion-option>\n        <ion-option value="Orta Derecede Memnun">Orta Derecede Memnun</ion-option>\n        <ion-option value="Çok Memnun">Çok Memnun</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>\n        23. Eşiniz İçin Ayırdığınız Zaman\n      </ion-label>\n      <ion-select [(ngModel)]="survey2_part1.q23" interface="popover">\n      <ion-option value="Hiç Memnun Değil">Hiç Memnun Değil</ion-option>\n        <ion-option value="Orta Derecede Memnun Değil">Orta Derecede Memnun Değil</ion-option>\n        <ion-option value="Biraz Memnun Değil">Biraz Memnun Değil</ion-option>\n        <ion-option value="Biraz Memnun">Biraz Memnun</ion-option>\n        <ion-option value="Orta Derecede Memnun">Orta Derecede Memnun</ion-option>\n        <ion-option value="Çok Memnun">Çok Memnun</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>\n        24. Kendiniz İçin ayırdığınız Zaman\n      </ion-label>\n      <ion-select [(ngModel)]="survey2_part1.q24" interface="popover">\n        <ion-option value="Hiç Memnun Değil">Hiç Memnun Değil</ion-option>\n        <ion-option value="Orta Derecede Memnun Değil">Orta Derecede Memnun Değil</ion-option>\n        <ion-option value="Biraz Memnun Değil">Biraz Memnun Değil</ion-option>\n        <ion-option value="Biraz Memnun">Biraz Memnun</ion-option>\n        <ion-option value="Orta Derecede Memnun">Orta Derecede Memnun</ion-option>\n        <ion-option value="Çok Memnun">Çok Memnun</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>\n        25. Yeni Bebeğinizi Beslenme yeterliliğiniz\n      </ion-label>\n      <ion-select [(ngModel)]="survey2_part1.q25" interface="popover">\n        <ion-option value="Hiç Memnun Değil">Hiç Memnun Değil</ion-option>\n        <ion-option value="Orta Derecede Memnun Değil">Orta Derecede Memnun Değil</ion-option>\n        <ion-option value="Biraz Memnun Değil">Biraz Memnun Değil</ion-option>\n        <ion-option value="Biraz Memnun">Biraz Memnun</ion-option>\n        <ion-option value="Orta Derecede Memnun">Orta Derecede Memnun</ion-option>\n        <ion-option value="Çok Memnun">Çok Memnun</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>\n        26. Eşinizin Sağlığı\n      </ion-label>\n      <ion-select [(ngModel)]="survey2_part1.q26" interface="popover">\n         <ion-option value="Hiç Memnun Değil">Hiç Memnun Değil</ion-option>\n        <ion-option value="Orta Derecede Memnun Değil">Orta Derecede Memnun Değil</ion-option>\n        <ion-option value="Biraz Memnun Değil">Biraz Memnun Değil</ion-option>\n        <ion-option value="Biraz Memnun">Biraz Memnun</ion-option>\n        <ion-option value="Orta Derecede Memnun">Orta Derecede Memnun</ion-option>\n        <ion-option value="Çok Memnun">Çok Memnun</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>\n        27. Yaşamınızdaki Günlük İşleriniz\n      </ion-label>\n      <ion-select [(ngModel)]="survey2_part1.q27" interface="popover">\n        <ion-option value="Hiç Memnun Değil">Hiç Memnun Değil</ion-option>\n        <ion-option value="Orta Derecede Memnun Değil">Orta Derecede Memnun Değil</ion-option>\n        <ion-option value="Biraz Memnun Değil">Biraz Memnun Değil</ion-option>\n        <ion-option value="Biraz Memnun">Biraz Memnun</ion-option>\n        <ion-option value="Orta Derecede Memnun">Orta Derecede Memnun</ion-option>\n        <ion-option value="Çok Memnun">Çok Memnun</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>\n        28. Yaşadığınız Ev\n      </ion-label>\n      <ion-select [(ngModel)]="survey2_part1.q28" interface="popover">\n       <ion-option value="Hiç Memnun Değil">Hiç Memnun Değil</ion-option>\n        <ion-option value="Orta Derecede Memnun Değil">Orta Derecede Memnun Değil</ion-option>\n        <ion-option value="Biraz Memnun Değil">Biraz Memnun Değil</ion-option>\n        <ion-option value="Biraz Memnun">Biraz Memnun</ion-option>\n        <ion-option value="Orta Derecede Memnun">Orta Derecede Memnun</ion-option>\n        <ion-option value="Çok Memnun">Çok Memnun</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>\n        29. Komşularınız\n      </ion-label>\n      <ion-select [(ngModel)]="survey2_part1.q29" interface="popover">\n         <ion-option value="Hiç Memnun Değil">Hiç Memnun Değil</ion-option>\n        <ion-option value="Orta Derecede Memnun Değil">Orta Derecede Memnun Değil</ion-option>\n        <ion-option value="Biraz Memnun Değil">Biraz Memnun Değil</ion-option>\n        <ion-option value="Biraz Memnun">Biraz Memnun</ion-option>\n        <ion-option value="Orta Derecede Memnun">Orta Derecede Memnun</ion-option>\n        <ion-option value="Çok Memnun">Çok Memnun</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>\n        30. Ekonomik Bağımsızlığınız\n      </ion-label>\n      <ion-select [(ngModel)]="survey2_part1.q30" interface="popover">\n      <ion-option value="Hiç Memnun Değil">Hiç Memnun Değil</ion-option>\n        <ion-option value="Orta Derecede Memnun Değil">Orta Derecede Memnun Değil</ion-option>\n        <ion-option value="Biraz Memnun Değil">Biraz Memnun Değil</ion-option>\n        <ion-option value="Biraz Memnun">Biraz Memnun</ion-option>\n        <ion-option value="Orta Derecede Memnun">Orta Derecede Memnun</ion-option>\n        <ion-option value="Çok Memnun">Çok Memnun</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>\n        31. Ekonomik Harcamalarınızı Karşılama Yeterliliğiniz\n      </ion-label>\n      <ion-select [(ngModel)]="survey2_part1.q31" interface="popover">\n        <ion-option value="Hiç Memnun Değil">Hiç Memnun Değil</ion-option>\n        <ion-option value="Orta Derecede Memnun Değil">Orta Derecede Memnun Değil</ion-option>\n        <ion-option value="Biraz Memnun Değil">Biraz Memnun Değil</ion-option>\n        <ion-option value="Biraz Memnun">Biraz Memnun</ion-option>\n        <ion-option value="Orta Derecede Memnun">Orta Derecede Memnun</ion-option>\n        <ion-option value="Çok Memnun">Çok Memnun</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>\n        32. Tıbbi Hizmete Ulaşım\n      </ion-label>\n      <ion-select [(ngModel)]="survey2_part1.q32" interface="popover">\n       <ion-option value="Hiç Memnun Değil">Hiç Memnun Değil</ion-option>\n        <ion-option value="Orta Derecede Memnun Değil">Orta Derecede Memnun Değil</ion-option>\n        <ion-option value="Biraz Memnun Değil">Biraz Memnun Değil</ion-option>\n        <ion-option value="Biraz Memnun">Biraz Memnun</ion-option>\n        <ion-option value="Orta Derecede Memnun">Orta Derecede Memnun</ion-option>\n        <ion-option value="Çok Memnun">Çok Memnun</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>\n        33. İstenildiği Zaman Herhangi Bir Araca Ulaşım\n      </ion-label>\n      <ion-select [(ngModel)]="survey2_part1.q33" interface="popover">\n       <ion-option value="Hiç Memnun Değil">Hiç Memnun Değil</ion-option>\n        <ion-option value="Orta Derecede Memnun Değil">Orta Derecede Memnun Değil</ion-option>\n        <ion-option value="Biraz Memnun Değil">Biraz Memnun Değil</ion-option>\n        <ion-option value="Biraz Memnun">Biraz Memnun</ion-option>\n        <ion-option value="Orta Derecede Memnun">Orta Derecede Memnun</ion-option>\n        <ion-option value="Çok Memnun">Çok Memnun</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>\n        34.A. Evdeki Yaşam Koşullarınız (Mal Varlığınız)\n      </ion-label>\n      <ion-select [(ngModel)]="survey2_part1.q34a" interface="popover">\n       <ion-option value="Hiç Memnun Değil">Hiç Memnun Değil</ion-option>\n        <ion-option value="Orta Derecede Memnun Değil">Orta Derecede Memnun Değil</ion-option>\n        <ion-option value="Biraz Memnun Değil">Biraz Memnun Değil</ion-option>\n        <ion-option value="Biraz Memnun">Biraz Memnun</ion-option>\n        <ion-option value="Orta Derecede Memnun">Orta Derecede Memnun</ion-option>\n        <ion-option value="Çok Memnun">Çok Memnun</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>\n        34.B. Evdeki Yaşam Koşullarınız (Mali Durumunuz)\n      </ion-label>\n      <ion-select [(ngModel)]="survey2_part1.q34b" interface="popover">\n         <ion-option value="Hiç Memnun Değil">Hiç Memnun Değil</ion-option>\n        <ion-option value="Orta Derecede Memnun Değil">Orta Derecede Memnun Değil</ion-option>\n        <ion-option value="Biraz Memnun Değil">Biraz Memnun Değil</ion-option>\n        <ion-option value="Biraz Memnun">Biraz Memnun</ion-option>\n        <ion-option value="Orta Derecede Memnun">Orta Derecede Memnun</ion-option>\n        <ion-option value="Çok Memnun">Çok Memnun</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>\n        34.C. Evdeki Yaşam Koşullarınız (Çevresel Koşullarınız)\n      </ion-label>\n      <ion-select [(ngModel)]="survey2_part1.q34c" interface="popover">\n         <ion-option value="Hiç Memnun Değil">Hiç Memnun Değil</ion-option>\n        <ion-option value="Orta Derecede Memnun Değil">Orta Derecede Memnun Değil</ion-option>\n        <ion-option value="Biraz Memnun Değil">Biraz Memnun Değil</ion-option>\n        <ion-option value="Biraz Memnun">Biraz Memnun</ion-option>\n        <ion-option value="Orta Derecede Memnun">Orta Derecede Memnun</ion-option>\n        <ion-option value="Çok Memnun">Çok Memnun</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>\n        35.A. İş/Çalışma (Eşinizin İşi)\n      </ion-label>\n      <ion-select [(ngModel)]="survey2_part1.q35a" interface="popover">\n        <ion-option value="Hiç Memnun Değil">Hiç Memnun Değil</ion-option>\n        <ion-option value="Orta Derecede Memnun Değil">Orta Derecede Memnun Değil</ion-option>\n        <ion-option value="Biraz Memnun Değil">Biraz Memnun Değil</ion-option>\n        <ion-option value="Biraz Memnun">Biraz Memnun</ion-option>\n        <ion-option value="Orta Derecede Memnun">Orta Derecede Memnun</ion-option>\n        <ion-option value="Çok Memnun">Çok Memnun</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>\n        35.B. İş/Çalışma (Kendi İşiniz)\n      </ion-label>\n      <ion-select [(ngModel)]="survey2_part1.q35b" interface="popover">\n        <ion-option value="Hiç Memnun Değil">Hiç Memnun Değil</ion-option>\n        <ion-option value="Orta Derecede Memnun Değil">Orta Derecede Memnun Değil</ion-option>\n        <ion-option value="Biraz Memnun Değil">Biraz Memnun Değil</ion-option>\n        <ion-option value="Biraz Memnun">Biraz Memnun</ion-option>\n        <ion-option value="Orta Derecede Memnun">Orta Derecede Memnun</ion-option>\n        <ion-option value="Çok Memnun">Çok Memnun</ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n\n  <!--Anket 3-->\n  <ion-list *ngIf="showSurvey.third">\n    <ion-list-header color="secondary">\n      DOĞUM SONU YAŞAM KALİTESİ ÖLÇEĞİ\n      <br />(DSYKÖ) / BÖLÜM 2\n    </ion-list-header>\n    <ion-item>\n      Aşağıdaki her bir madde için yaşamınızın o alanla ilgili ne kadar önemli olduğunu en iyi açıklayan cevabı seçiniz.\n      <br />Cevabınızı yansıtan numarayı yuvarlak içine alarak işaretleyiniz. Doğru ya da yanlış cevaplar yoktur.\n      <br />1= Hiç Önemli değil 4= Biraz Önemli\n      <br />2= Orta derecede Önemli değil 5=Orta derecede Önemli\n      <br />3= Biraz Önemli değil 6= Çok Önemli\n      <br />\n      <strong>NE DERECEDE ÖNEMLİ?</strong>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>1. Sağlığınız</ion-label>\n      <ion-select [(ngModel)]="survey2_part2.q1" interface="popover">\n        <ion-option value="Hiç Önemli Değil">Hiç Önemli Değil</ion-option>\n        <ion-option value="Orta Derecede Önemli Değil">Orta Derecede Önemli Değil</ion-option>\n        <ion-option value="Biraz Önemli Değil">Biraz Önemli Değil</ion-option>\n        <ion-option value="Biraz Önemli">Biraz Önemli</ion-option>\n        <ion-option value="Orta Derecede Önemli">Orta Derecede Önemli</ion-option>\n        <ion-option value="Çok Önemli">Çok Önemli</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>2. Ağrı düzeyiniz</ion-label>\n      <ion-select [(ngModel)]="survey2_part2.q2" interface="popover">\n     <ion-option value="Hiç Önemli Değil">Hiç Önemli Değil</ion-option>\n        <ion-option value="Orta Derecede Önemli Değil">Orta Derecede Önemli Değil</ion-option>\n        <ion-option value="Biraz Önemli Değil">Biraz Önemli Değil</ion-option>\n        <ion-option value="Biraz Önemli">Biraz Önemli</ion-option>\n        <ion-option value="Orta Derecede Önemli">Orta Derecede Önemli</ion-option>\n        <ion-option value="Çok Önemli">Çok Önemli</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>3. Günlük Aktivitelerinizdeki Enerji Düzeyiniz</ion-label>\n      <ion-select [(ngModel)]="survey2_part2.q3" interface="popover">\n      <ion-option value="Hiç Önemli Değil">Hiç Önemli Değil</ion-option>\n        <ion-option value="Orta Derecede Önemli Değil">Orta Derecede Önemli Değil</ion-option>\n        <ion-option value="Biraz Önemli Değil">Biraz Önemli Değil</ion-option>\n        <ion-option value="Biraz Önemli">Biraz Önemli</ion-option>\n        <ion-option value="Orta Derecede Önemli">Orta Derecede Önemli</ion-option>\n        <ion-option value="Çok Önemli">Çok Önemli</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>4. Yaşamınızı Kontrol Edebilme Düzeyiniz</ion-label>\n      <ion-select [(ngModel)]="survey2_part2.q4" interface="popover">\n  <ion-option value="Hiç Önemli Değil">Hiç Önemli Değil</ion-option>\n        <ion-option value="Orta Derecede Önemli Değil">Orta Derecede Önemli Değil</ion-option>\n        <ion-option value="Biraz Önemli Değil">Biraz Önemli Değil</ion-option>\n        <ion-option value="Biraz Önemli">Biraz Önemli</ion-option>\n        <ion-option value="Orta Derecede Önemli">Orta Derecede Önemli</ion-option>\n        <ion-option value="Çok Önemli">Çok Önemli</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>5. Yardım Almadan Kendinize Bakım Verme Yeterliliğiniz</ion-label>\n      <ion-select [(ngModel)]="survey2_part2.q5" interface="popover">\n       <ion-option value="Hiç Önemli Değil">Hiç Önemli Değil</ion-option>\n        <ion-option value="Orta Derecede Önemli Değil">Orta Derecede Önemli Değil</ion-option>\n        <ion-option value="Biraz Önemli Değil">Biraz Önemli Değil</ion-option>\n        <ion-option value="Biraz Önemli">Biraz Önemli</ion-option>\n        <ion-option value="Orta Derecede Önemli">Orta Derecede Önemli</ion-option>\n        <ion-option value="Çok Önemli">Çok Önemli</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>6. Fiziksel Görünüşünüz</ion-label>\n      <ion-select [(ngModel)]="survey2_part2.q6" interface="popover">\n      <ion-option value="Hiç Önemli Değil">Hiç Önemli Değil</ion-option>\n        <ion-option value="Orta Derecede Önemli Değil">Orta Derecede Önemli Değil</ion-option>\n        <ion-option value="Biraz Önemli Değil">Biraz Önemli Değil</ion-option>\n        <ion-option value="Biraz Önemli">Biraz Önemli</ion-option>\n        <ion-option value="Orta Derecede Önemli">Orta Derecede Önemli</ion-option>\n        <ion-option value="Çok Önemli">Çok Önemli</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>7. Uyku Düzeyiniz</ion-label>\n      <ion-select [(ngModel)]="survey2_part2.q7" interface="popover">\n       <ion-option value="Hiç Önemli Değil">Hiç Önemli Değil</ion-option>\n        <ion-option value="Orta Derecede Önemli Değil">Orta Derecede Önemli Değil</ion-option>\n        <ion-option value="Biraz Önemli Değil">Biraz Önemli Değil</ion-option>\n        <ion-option value="Biraz Önemli">Biraz Önemli</ion-option>\n        <ion-option value="Orta Derecede Önemli">Orta Derecede Önemli</ion-option>\n        <ion-option value="Çok Önemli">Çok Önemli</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>8. Memeleriniz</ion-label>\n      <ion-select [(ngModel)]="survey2_part2.q8" interface="popover">\n    <ion-option value="Hiç Önemli Değil">Hiç Önemli Değil</ion-option>\n        <ion-option value="Orta Derecede Önemli Değil">Orta Derecede Önemli Değil</ion-option>\n        <ion-option value="Biraz Önemli Değil">Biraz Önemli Değil</ion-option>\n        <ion-option value="Biraz Önemli">Biraz Önemli</ion-option>\n        <ion-option value="Orta Derecede Önemli">Orta Derecede Önemli</ion-option>\n        <ion-option value="Çok Önemli">Çok Önemli</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>9. Doğum nedeni ile olan dikişleriniz</ion-label>\n      <ion-select [(ngModel)]="survey2_part2.q9" interface="popover">\n      <ion-option value="Hiç Önemli Değil">Hiç Önemli Değil</ion-option>\n        <ion-option value="Orta Derecede Önemli Değil">Orta Derecede Önemli Değil</ion-option>\n        <ion-option value="Biraz Önemli Değil">Biraz Önemli Değil</ion-option>\n        <ion-option value="Biraz Önemli">Biraz Önemli</ion-option>\n        <ion-option value="Orta Derecede Önemli">Orta Derecede Önemli</ion-option>\n        <ion-option value="Çok Önemli">Çok Önemli</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>10. Cinsel Yaşamınız</ion-label>\n      <ion-select [(ngModel)]="survey2_part2.q10" interface="popover">\n      <ion-option value="Hiç Önemli Değil">Hiç Önemli Değil</ion-option>\n        <ion-option value="Orta Derecede Önemli Değil">Orta Derecede Önemli Değil</ion-option>\n        <ion-option value="Biraz Önemli Değil">Biraz Önemli Değil</ion-option>\n        <ion-option value="Biraz Önemli">Biraz Önemli</ion-option>\n        <ion-option value="Orta Derecede Önemli">Orta Derecede Önemli</ion-option>\n        <ion-option value="Çok Önemli">Çok Önemli</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>11. İç Huzurunuz</ion-label>\n      <ion-select [(ngModel)]="survey2_part2.q11" interface="popover">\n      <ion-option value="Hiç Önemli Değil">Hiç Önemli Değil</ion-option>\n        <ion-option value="Orta Derecede Önemli Değil">Orta Derecede Önemli Değil</ion-option>\n        <ion-option value="Biraz Önemli Değil">Biraz Önemli Değil</ion-option>\n        <ion-option value="Biraz Önemli">Biraz Önemli</ion-option>\n        <ion-option value="Orta Derecede Önemli">Orta Derecede Önemli</ion-option>\n        <ion-option value="Çok Önemli">Çok Önemli</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>12. Genel Olarak Mutluluğunuz</ion-label>\n      <ion-select [(ngModel)]="survey2_part2.q12" interface="popover">\n      <ion-option value="Hiç Önemli Değil">Hiç Önemli Değil</ion-option>\n        <ion-option value="Orta Derecede Önemli Değil">Orta Derecede Önemli Değil</ion-option>\n        <ion-option value="Biraz Önemli Değil">Biraz Önemli Değil</ion-option>\n        <ion-option value="Biraz Önemli">Biraz Önemli</ion-option>\n        <ion-option value="Orta Derecede Önemli">Orta Derecede Önemli</ion-option>\n        <ion-option value="Çok Önemli">Çok Önemli</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>13.Genel Olarak Yaşamınız</ion-label>\n      <ion-select [(ngModel)]="survey2_part2.q13" interface="popover">\n      <ion-option value="Hiç Önemli Değil">Hiç Önemli Değil</ion-option>\n        <ion-option value="Orta Derecede Önemli Değil">Orta Derecede Önemli Değil</ion-option>\n        <ion-option value="Biraz Önemli Değil">Biraz Önemli Değil</ion-option>\n        <ion-option value="Biraz Önemli">Biraz Önemli</ion-option>\n        <ion-option value="Orta Derecede Önemli">Orta Derecede Önemli</ion-option>\n        <ion-option value="Çok Önemli">Çok Önemli</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>14. Yaşamınızdaki Kaygı Düzeyiniz</ion-label>\n      <ion-select [(ngModel)]="survey2_part2.q14" interface="popover">\n      <ion-option value="Hiç Önemli Değil">Hiç Önemli Değil</ion-option>\n        <ion-option value="Orta Derecede Önemli Değil">Orta Derecede Önemli Değil</ion-option>\n        <ion-option value="Biraz Önemli Değil">Biraz Önemli Değil</ion-option>\n        <ion-option value="Biraz Önemli">Biraz Önemli</ion-option>\n        <ion-option value="Orta Derecede Önemli">Orta Derecede Önemli</ion-option>\n        <ion-option value="Çok Önemli">Çok Önemli</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>15.A. Eşinizden Aldığınız Duygusal Destek</ion-label>\n      <ion-select [(ngModel)]="survey2_part2.q15a" interface="popover">\n      <ion-option value="Hiç Önemli Değil">Hiç Önemli Değil</ion-option>\n        <ion-option value="Orta Derecede Önemli Değil">Orta Derecede Önemli Değil</ion-option>\n        <ion-option value="Biraz Önemli Değil">Biraz Önemli Değil</ion-option>\n        <ion-option value="Biraz Önemli">Biraz Önemli</ion-option>\n        <ion-option value="Orta Derecede Önemli">Orta Derecede Önemli</ion-option>\n        <ion-option value="Çok Önemli">Çok Önemli</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>15.B. Ailenizden Aldığınız Duygusal Destek</ion-label>\n      <ion-select [(ngModel)]="survey2_part2.q15b" interface="popover">\n      <ion-option value="Hiç Önemli Değil">Hiç Önemli Değil</ion-option>\n        <ion-option value="Orta Derecede Önemli Değil">Orta Derecede Önemli Değil</ion-option>\n        <ion-option value="Biraz Önemli Değil">Biraz Önemli Değil</ion-option>\n        <ion-option value="Biraz Önemli">Biraz Önemli</ion-option>\n        <ion-option value="Orta Derecede Önemli">Orta Derecede Önemli</ion-option>\n        <ion-option value="Çok Önemli">Çok Önemli</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>15.C. Arkadaşınızdan ya da Diğer İnsanlardan Aldığınız Duygusal Destek</ion-label>\n      <ion-select [(ngModel)]="survey2_part2.q15c" interface="popover">\n      <ion-option value="Hiç Önemli Değil">Hiç Önemli Değil</ion-option>\n        <ion-option value="Orta Derecede Önemli Değil">Orta Derecede Önemli Değil</ion-option>\n        <ion-option value="Biraz Önemli Değil">Biraz Önemli Değil</ion-option>\n        <ion-option value="Biraz Önemli">Biraz Önemli</ion-option>\n        <ion-option value="Orta Derecede Önemli">Orta Derecede Önemli</ion-option>\n        <ion-option value="Çok Önemli">Çok Önemli</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>16. Eşiniz İle İlişkiniz</ion-label>\n      <ion-select [(ngModel)]="survey2_part2.q16" interface="popover">\n      <ion-option value="Hiç Önemli Değil">Hiç Önemli Değil</ion-option>\n        <ion-option value="Orta Derecede Önemli Değil">Orta Derecede Önemli Değil</ion-option>\n        <ion-option value="Biraz Önemli Değil">Biraz Önemli Değil</ion-option>\n        <ion-option value="Biraz Önemli">Biraz Önemli</ion-option>\n        <ion-option value="Orta Derecede Önemli">Orta Derecede Önemli</ion-option>\n        <ion-option value="Çok Önemli">Çok Önemli</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>17. Aile Sorumluluklarını Yerine Getirme yeterliliğiniz</ion-label>\n      <ion-select [(ngModel)]="survey2_part2.q17" interface="popover">\n      <ion-option value="Hiç Önemli Değil">Hiç Önemli Değil</ion-option>\n        <ion-option value="Orta Derecede Önemli Değil">Orta Derecede Önemli Değil</ion-option>\n        <ion-option value="Biraz Önemli Değil">Biraz Önemli Değil</ion-option>\n        <ion-option value="Biraz Önemli">Biraz Önemli</ion-option>\n        <ion-option value="Orta Derecede Önemli">Orta Derecede Önemli</ion-option>\n        <ion-option value="Çok Önemli">Çok Önemli</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>18. Bebeğinizin Sağlığı</ion-label>\n      <ion-select [(ngModel)]="survey2_part2.q18" interface="popover">\n      <ion-option value="Hiç Önemli Değil">Hiç Önemli Değil</ion-option>\n        <ion-option value="Orta Derecede Önemli Değil">Orta Derecede Önemli Değil</ion-option>\n        <ion-option value="Biraz Önemli Değil">Biraz Önemli Değil</ion-option>\n        <ion-option value="Biraz Önemli">Biraz Önemli</ion-option>\n        <ion-option value="Orta Derecede Önemli">Orta Derecede Önemli</ion-option>\n        <ion-option value="Çok Önemli">Çok Önemli</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>\n        19. Çocuklarınızın Bakımında Yardım Alma Durumunuz\n      </ion-label>\n      <ion-select [(ngModel)]="survey2_part2.q19" interface="popover">\n      <ion-option value="Hiç Önemli Değil">Hiç Önemli Değil</ion-option>\n        <ion-option value="Orta Derecede Önemli Değil">Orta Derecede Önemli Değil</ion-option>\n        <ion-option value="Biraz Önemli Değil">Biraz Önemli Değil</ion-option>\n        <ion-option value="Biraz Önemli">Biraz Önemli</ion-option>\n        <ion-option value="Orta Derecede Önemli">Orta Derecede Önemli</ion-option>\n        <ion-option value="Çok Önemli">Çok Önemli</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>\n        20. Çocuklar İçin Ayırdığınız Zaman\n      </ion-label>\n      <ion-select [(ngModel)]="survey2_part2.q20" interface="popover">\n      <ion-option value="Hiç Önemli Değil">Hiç Önemli Değil</ion-option>\n        <ion-option value="Orta Derecede Önemli Değil">Orta Derecede Önemli Değil</ion-option>\n        <ion-option value="Biraz Önemli Değil">Biraz Önemli Değil</ion-option>\n        <ion-option value="Biraz Önemli">Biraz Önemli</ion-option>\n        <ion-option value="Orta Derecede Önemli">Orta Derecede Önemli</ion-option>\n        <ion-option value="Çok Önemli">Çok Önemli</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>\n        21. Ev İşleri için Ayırdığınız Zaman\n      </ion-label>\n      <ion-select [(ngModel)]="survey2_part2.q21" interface="popover">\n      <ion-option value="Hiç Önemli Değil">Hiç Önemli Değil</ion-option>\n        <ion-option value="Orta Derecede Önemli Değil">Orta Derecede Önemli Değil</ion-option>\n        <ion-option value="Biraz Önemli Değil">Biraz Önemli Değil</ion-option>\n        <ion-option value="Biraz Önemli">Biraz Önemli</ion-option>\n        <ion-option value="Orta Derecede Önemli">Orta Derecede Önemli</ion-option>\n        <ion-option value="Çok Önemli">Çok Önemli</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>\n        22. Arkadaşlarınız/akrabalarınız İçin Ayırdığınız Zaman\n      </ion-label>\n      <ion-select [(ngModel)]="survey2_part2.q22" interface="popover">\n      <ion-option value="Hiç Önemli Değil">Hiç Önemli Değil</ion-option>\n        <ion-option value="Orta Derecede Önemli Değil">Orta Derecede Önemli Değil</ion-option>\n        <ion-option value="Biraz Önemli Değil">Biraz Önemli Değil</ion-option>\n        <ion-option value="Biraz Önemli">Biraz Önemli</ion-option>\n        <ion-option value="Orta Derecede Önemli">Orta Derecede Önemli</ion-option>\n        <ion-option value="Çok Önemli">Çok Önemli</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>\n        23. Eşiniz İçin Ayırdığınız Zaman\n      </ion-label>\n      <ion-select [(ngModel)]="survey2_part2.q23" interface="popover">\n      <ion-option value="Hiç Önemli Değil">Hiç Önemli Değil</ion-option>\n        <ion-option value="Orta Derecede Önemli Değil">Orta Derecede Önemli Değil</ion-option>\n        <ion-option value="Biraz Önemli Değil">Biraz Önemli Değil</ion-option>\n        <ion-option value="Biraz Önemli">Biraz Önemli</ion-option>\n        <ion-option value="Orta Derecede Önemli">Orta Derecede Önemli</ion-option>\n        <ion-option value="Çok Önemli">Çok Önemli</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>\n        24. Kendiniz İçin ayırdığınız Zaman\n      </ion-label>\n      <ion-select [(ngModel)]="survey2_part2.q24" interface="popover">\n      <ion-option value="Hiç Önemli Değil">Hiç Önemli Değil</ion-option>\n        <ion-option value="Orta Derecede Önemli Değil">Orta Derecede Önemli Değil</ion-option>\n        <ion-option value="Biraz Önemli Değil">Biraz Önemli Değil</ion-option>\n        <ion-option value="Biraz Önemli">Biraz Önemli</ion-option>\n        <ion-option value="Orta Derecede Önemli">Orta Derecede Önemli</ion-option>\n        <ion-option value="Çok Önemli">Çok Önemli</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>\n        25. Yeni Bebeğinizi Beslenme yeterliliğiniz\n      </ion-label>\n      <ion-select [(ngModel)]="survey2_part2.q25" interface="popover">\n      <ion-option value="Hiç Önemli Değil">Hiç Önemli Değil</ion-option>\n        <ion-option value="Orta Derecede Önemli Değil">Orta Derecede Önemli Değil</ion-option>\n        <ion-option value="Biraz Önemli Değil">Biraz Önemli Değil</ion-option>\n        <ion-option value="Biraz Önemli">Biraz Önemli</ion-option>\n        <ion-option value="Orta Derecede Önemli">Orta Derecede Önemli</ion-option>\n        <ion-option value="Çok Önemli">Çok Önemli</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>\n        26. Eşinizin Sağlığı\n      </ion-label>\n      <ion-select [(ngModel)]="survey2_part2.q26" interface="popover">\n      <ion-option value="Hiç Önemli Değil">Hiç Önemli Değil</ion-option>\n        <ion-option value="Orta Derecede Önemli Değil">Orta Derecede Önemli Değil</ion-option>\n        <ion-option value="Biraz Önemli Değil">Biraz Önemli Değil</ion-option>\n        <ion-option value="Biraz Önemli">Biraz Önemli</ion-option>\n        <ion-option value="Orta Derecede Önemli">Orta Derecede Önemli</ion-option>\n        <ion-option value="Çok Önemli">Çok Önemli</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>\n        27. Yaşamınızdaki Günlük İşleriniz\n      </ion-label>\n      <ion-select [(ngModel)]="survey2_part2.q27" interface="popover">\n      <ion-option value="Hiç Önemli Değil">Hiç Önemli Değil</ion-option>\n        <ion-option value="Orta Derecede Önemli Değil">Orta Derecede Önemli Değil</ion-option>\n        <ion-option value="Biraz Önemli Değil">Biraz Önemli Değil</ion-option>\n        <ion-option value="Biraz Önemli">Biraz Önemli</ion-option>\n        <ion-option value="Orta Derecede Önemli">Orta Derecede Önemli</ion-option>\n        <ion-option value="Çok Önemli">Çok Önemli</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>\n        28. Yaşadığınız Ev\n      </ion-label>\n      <ion-select [(ngModel)]="survey2_part2.q28" interface="popover">\n      <ion-option value="Hiç Önemli Değil">Hiç Önemli Değil</ion-option>\n        <ion-option value="Orta Derecede Önemli Değil">Orta Derecede Önemli Değil</ion-option>\n        <ion-option value="Biraz Önemli Değil">Biraz Önemli Değil</ion-option>\n        <ion-option value="Biraz Önemli">Biraz Önemli</ion-option>\n        <ion-option value="Orta Derecede Önemli">Orta Derecede Önemli</ion-option>\n        <ion-option value="Çok Önemli">Çok Önemli</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>\n        29. Komşularınız\n      </ion-label>\n      <ion-select [(ngModel)]="survey2_part2.q29" interface="popover">\n      <ion-option value="Hiç Önemli Değil">Hiç Önemli Değil</ion-option>\n        <ion-option value="Orta Derecede Önemli Değil">Orta Derecede Önemli Değil</ion-option>\n        <ion-option value="Biraz Önemli Değil">Biraz Önemli Değil</ion-option>\n        <ion-option value="Biraz Önemli">Biraz Önemli</ion-option>\n        <ion-option value="Orta Derecede Önemli">Orta Derecede Önemli</ion-option>\n        <ion-option value="Çok Önemli">Çok Önemli</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>\n        30. Ekonomik Bağımsızlığınız\n      </ion-label>\n      <ion-select [(ngModel)]="survey2_part2.q30" interface="popover">\n      <ion-option value="Hiç Önemli Değil">Hiç Önemli Değil</ion-option>\n        <ion-option value="Orta Derecede Önemli Değil">Orta Derecede Önemli Değil</ion-option>\n        <ion-option value="Biraz Önemli Değil">Biraz Önemli Değil</ion-option>\n        <ion-option value="Biraz Önemli">Biraz Önemli</ion-option>\n        <ion-option value="Orta Derecede Önemli">Orta Derecede Önemli</ion-option>\n        <ion-option value="Çok Önemli">Çok Önemli</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>\n        31. Ekonomik Harcamalarınızı Karşılama Yeterliliğiniz\n      </ion-label>\n      <ion-select [(ngModel)]="survey2_part2.q31" interface="popover">\n      <ion-option value="Hiç Önemli Değil">Hiç Önemli Değil</ion-option>\n        <ion-option value="Orta Derecede Önemli Değil">Orta Derecede Önemli Değil</ion-option>\n        <ion-option value="Biraz Önemli Değil">Biraz Önemli Değil</ion-option>\n        <ion-option value="Biraz Önemli">Biraz Önemli</ion-option>\n        <ion-option value="Orta Derecede Önemli">Orta Derecede Önemli</ion-option>\n        <ion-option value="Çok Önemli">Çok Önemli</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>\n        32. Tıbbi Hizmete Ulaşım\n      </ion-label>\n      <ion-select [(ngModel)]="survey2_part2.q32" interface="popover">\n      <ion-option value="Hiç Önemli Değil">Hiç Önemli Değil</ion-option>\n        <ion-option value="Orta Derecede Önemli Değil">Orta Derecede Önemli Değil</ion-option>\n        <ion-option value="Biraz Önemli Değil">Biraz Önemli Değil</ion-option>\n        <ion-option value="Biraz Önemli">Biraz Önemli</ion-option>\n        <ion-option value="Orta Derecede Önemli">Orta Derecede Önemli</ion-option>\n        <ion-option value="Çok Önemli">Çok Önemli</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>\n        33. İstenildiği Zaman Herhangi Bir Araca Ulaşım\n      </ion-label>\n      <ion-select [(ngModel)]="survey2_part2.q33" interface="popover">\n      <ion-option value="Hiç Önemli Değil">Hiç Önemli Değil</ion-option>\n        <ion-option value="Orta Derecede Önemli Değil">Orta Derecede Önemli Değil</ion-option>\n        <ion-option value="Biraz Önemli Değil">Biraz Önemli Değil</ion-option>\n        <ion-option value="Biraz Önemli">Biraz Önemli</ion-option>\n        <ion-option value="Orta Derecede Önemli">Orta Derecede Önemli</ion-option>\n        <ion-option value="Çok Önemli">Çok Önemli</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>\n        34.A. Evdeki Yaşam Koşullarınız (Mal Varlığınız)\n      </ion-label>\n      <ion-select [(ngModel)]="survey2_part2.q34a" interface="popover">\n      <ion-option value="Hiç Önemli Değil">Hiç Önemli Değil</ion-option>\n        <ion-option value="Orta Derecede Önemli Değil">Orta Derecede Önemli Değil</ion-option>\n        <ion-option value="Biraz Önemli Değil">Biraz Önemli Değil</ion-option>\n        <ion-option value="Biraz Önemli">Biraz Önemli</ion-option>\n        <ion-option value="Orta Derecede Önemli">Orta Derecede Önemli</ion-option>\n        <ion-option value="Çok Önemli">Çok Önemli</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>\n        34.B. Evdeki Yaşam Koşullarınız (Mali Durumunuz)\n      </ion-label>\n      <ion-select [(ngModel)]="survey2_part2.q34b" interface="popover">\n      <ion-option value="Hiç Önemli Değil">Hiç Önemli Değil</ion-option>\n        <ion-option value="Orta Derecede Önemli Değil">Orta Derecede Önemli Değil</ion-option>\n        <ion-option value="Biraz Önemli Değil">Biraz Önemli Değil</ion-option>\n        <ion-option value="Biraz Önemli">Biraz Önemli</ion-option>\n        <ion-option value="Orta Derecede Önemli">Orta Derecede Önemli</ion-option>\n        <ion-option value="Çok Önemli">Çok Önemli</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>\n        34.C. Evdeki Yaşam Koşullarınız (Çevresel Koşullarınız)\n      </ion-label>\n      <ion-select [(ngModel)]="survey2_part2.q34c" interface="popover">\n      <ion-option value="Hiç Önemli Değil">Hiç Önemli Değil</ion-option>\n        <ion-option value="Orta Derecede Önemli Değil">Orta Derecede Önemli Değil</ion-option>\n        <ion-option value="Biraz Önemli Değil">Biraz Önemli Değil</ion-option>\n        <ion-option value="Biraz Önemli">Biraz Önemli</ion-option>\n        <ion-option value="Orta Derecede Önemli">Orta Derecede Önemli</ion-option>\n        <ion-option value="Çok Önemli">Çok Önemli</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>\n        35.A. İş/Çalışma (Eşinizin İşi)\n      </ion-label>\n      <ion-select [(ngModel)]="survey2_part2.q35a" interface="popover">\n      <ion-option value="Hiç Önemli Değil">Hiç Önemli Değil</ion-option>\n        <ion-option value="Orta Derecede Önemli Değil">Orta Derecede Önemli Değil</ion-option>\n        <ion-option value="Biraz Önemli Değil">Biraz Önemli Değil</ion-option>\n        <ion-option value="Biraz Önemli">Biraz Önemli</ion-option>\n        <ion-option value="Orta Derecede Önemli">Orta Derecede Önemli</ion-option>\n        <ion-option value="Çok Önemli">Çok Önemli</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>\n        35.B. İş/Çalışma (Kendi İşiniz)\n      </ion-label>\n      <ion-select [(ngModel)]="survey2_part2.q35b" interface="popover" style="width: 100% !important;">\n      <ion-option value="Hiç Önemli Değil">Hiç Önemli Değil</ion-option>\n        <ion-option value="Orta Derecede Önemli Değil">Orta Derecede Önemli Değil</ion-option>\n        <ion-option value="Biraz Önemli Değil">Biraz Önemli Değil</ion-option>\n        <ion-option value="Biraz Önemli">Biraz Önemli</ion-option>\n        <ion-option value="Orta Derecede Önemli">Orta Derecede Önemli</ion-option>\n        <ion-option value="Çok Önemli">Çok Önemli</ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n\n  <!--Anket 4-->\n  <ion-list *ngIf="showSurvey.fourth">\n    <ion-list-header color="secondary">\n      Mobil Uygulama Degerlendirme Formu\n    </ion-list-header>\n    <ion-list-header color="secondary">ÖĞRETİMSEL UYGUNLUK</ion-list-header>\n    <ion-item>\n      <ion-label floating="">\n        1. İçeriğin kapsamı öğrenmeyi sağlayacak yeterliliktedir.\n      </ion-label>\n      <ion-select [(ngModel)]="survey3.q1" interface="popover">\n        <ion-option value="Kesinlikle Katılıyorum">Kesinlikle Katılıyorum</ion-option>\n        <ion-option value="Katılıyorum">Katılıyorum</ion-option>\n        <ion-option value="Kararsızım">Kararsızım</ion-option>\n        <ion-option value="Katılmıyorum">Katılmıyorum</ion-option>\n        <ion-option value="Kesinlikle Katılmıyorum">Kesinlikle Katılmıyorum</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>\n        2. Materyal değerlendirme bölümü içermektedir.\n      </ion-label>\n      <ion-select [(ngModel)]="survey3.q2" interface="popover">\n     <ion-option value="Kesinlikle Katılıyorum">Kesinlikle Katılıyorum</ion-option>\n        <ion-option value="Katılıyorum">Katılıyorum</ion-option>\n        <ion-option value="Kararsızım">Kararsızım</ion-option>\n        <ion-option value="Katılmıyorum">Katılmıyorum</ion-option>\n        <ion-option value="Kesinlikle Katılmıyorum">Kesinlikle Katılmıyorum</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>\n        3. Materyaldeki metinler ayrı bir bölümde çıktısı alınabilecek şekilde tasarlanmıştır.\n      </ion-label>\n      <ion-select [(ngModel)]="survey3.q3" interface="popover">\n     <ion-option value="Kesinlikle Katılıyorum">Kesinlikle Katılıyorum</ion-option>\n        <ion-option value="Katılıyorum">Katılıyorum</ion-option>\n        <ion-option value="Kararsızım">Kararsızım</ion-option>\n        <ion-option value="Katılmıyorum">Katılmıyorum</ion-option>\n        <ion-option value="Kesinlikle Katılmıyorum">Kesinlikle Katılmıyorum</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>\n        4. 1Vietinlerle, etkileşimli uygulamalar eşit ağırlıkta dağılımı göstermektedir\n      </ion-label>\n      <ion-select [(ngModel)]="survey3.q4" interface="popover">\n     <ion-option value="Kesinlikle Katılıyorum">Kesinlikle Katılıyorum</ion-option>\n        <ion-option value="Katılıyorum">Katılıyorum</ion-option>\n        <ion-option value="Kararsızım">Kararsızım</ion-option>\n        <ion-option value="Katılmıyorum">Katılmıyorum</ion-option>\n        <ion-option value="Kesinlikle Katılmıyorum">Kesinlikle Katılmıyorum</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>\n        5. Materyalde eğlenceli, dikkat çekici bilgiler, resimler ya da uyarıcı işaretler eklenmiştir.\n      </ion-label>\n      <ion-select [(ngModel)]="survey3.q5" interface="popover">\n     <ion-option value="Kesinlikle Katılıyorum">Kesinlikle Katılıyorum</ion-option>\n        <ion-option value="Katılıyorum">Katılıyorum</ion-option>\n        <ion-option value="Kararsızım">Kararsızım</ion-option>\n        <ion-option value="Katılmıyorum">Katılmıyorum</ion-option>\n        <ion-option value="Kesinlikle Katılmıyorum">Kesinlikle Katılmıyorum</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>\n        6. Materyal farklı öğrenme biçimleri (görsel, işitsel...) içermektedir.\n      </ion-label>\n      <ion-select [(ngModel)]="survey3.q6" interface="popover">\n     <ion-option value="Kesinlikle Katılıyorum">Kesinlikle Katılıyorum</ion-option>\n        <ion-option value="Katılıyorum">Katılıyorum</ion-option>\n        <ion-option value="Kararsızım">Kararsızım</ion-option>\n        <ion-option value="Katılmıyorum">Katılmıyorum</ion-option>\n        <ion-option value="Kesinlikle Katılmıyorum">Kesinlikle Katılmıyorum</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>\n        7. Materyallerin içeriği öğrenci kitaplarındaki bilgilerle bütünleşmiştir.\n      </ion-label>\n      <ion-select [(ngModel)]="survey3.q7" interface="popover">\n     <ion-option value="Kesinlikle Katılıyorum">Kesinlikle Katılıyorum</ion-option>\n        <ion-option value="Katılıyorum">Katılıyorum</ion-option>\n        <ion-option value="Kararsızım">Kararsızım</ion-option>\n        <ion-option value="Katılmıyorum">Katılmıyorum</ion-option>\n        <ion-option value="Kesinlikle Katılmıyorum">Kesinlikle Katılmıyorum</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>\n        8. Hazırlanan yazılım Web üzerinden dersi anlamaya olanak vermektedir.\n      </ion-label>\n      <ion-select [(ngModel)]="survey3.q8" interface="popover">\n     <ion-option value="Kesinlikle Katılıyorum">Kesinlikle Katılıyorum</ion-option>\n        <ion-option value="Katılıyorum">Katılıyorum</ion-option>\n        <ion-option value="Kararsızım">Kararsızım</ion-option>\n        <ion-option value="Katılmıyorum">Katılmıyorum</ion-option>\n        <ion-option value="Kesinlikle Katılmıyorum">Kesinlikle Katılmıyorum</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>\n        9. Öğretmen dersi bu materyal üzerinden kolayca işleyebilmektedir.\n      </ion-label>\n      <ion-select [(ngModel)]="survey3.q9" interface="popover">\n     <ion-option value="Kesinlikle Katılıyorum">Kesinlikle Katılıyorum</ion-option>\n        <ion-option value="Katılıyorum">Katılıyorum</ion-option>\n        <ion-option value="Kararsızım">Kararsızım</ion-option>\n        <ion-option value="Katılmıyorum">Katılmıyorum</ion-option>\n        <ion-option value="Kesinlikle Katılmıyorum">Kesinlikle Katılmıyorum</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>\n        10. Materyal içerisindeki çoklu ortam özelikleri (grafik, metin, animasyonlar, video vs) konuya uygun olarak kullanılmıştır.\n      </ion-label>\n      <ion-select [(ngModel)]="survey3.q10" interface="popover">\n     <ion-option value="Kesinlikle Katılıyorum">Kesinlikle Katılıyorum</ion-option>\n        <ion-option value="Katılıyorum">Katılıyorum</ion-option>\n        <ion-option value="Kararsızım">Kararsızım</ion-option>\n        <ion-option value="Katılmıyorum">Katılmıyorum</ion-option>\n        <ion-option value="Kesinlikle Katılmıyorum">Kesinlikle Katılmıyorum</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>\n        11. Ekran görünümü ilk bakışta materyalin web tabanlı eğitim için kullanılabileceğini hissettirmektedir\n      </ion-label>\n      <ion-select [(ngModel)]="survey3.q11" interface="popover">\n     <ion-option value="Kesinlikle Katılıyorum">Kesinlikle Katılıyorum</ion-option>\n        <ion-option value="Katılıyorum">Katılıyorum</ion-option>\n        <ion-option value="Kararsızım">Kararsızım</ion-option>\n        <ion-option value="Katılmıyorum">Katılmıyorum</ion-option>\n        <ion-option value="Kesinlikle Katılmıyorum">Kesinlikle Katılmıyorum</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>\n        12. Öğretim materyalinin organizasyonel yapısı açık ve sistematiktir.\n      </ion-label>\n      <ion-select [(ngModel)]="survey3.q12" interface="popover">\n     <ion-option value="Kesinlikle Katılıyorum">Kesinlikle Katılıyorum</ion-option>\n        <ion-option value="Katılıyorum">Katılıyorum</ion-option>\n        <ion-option value="Kararsızım">Kararsızım</ion-option>\n        <ion-option value="Katılmıyorum">Katılmıyorum</ion-option>\n        <ion-option value="Kesinlikle Katılmıyorum">Kesinlikle Katılmıyorum</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>\n        13. Öğretim materyalinde sunulan olaylar ve durumlar öğrencilerin bilişsel yeteneklerine uygundur.\n      </ion-label>\n      <ion-select [(ngModel)]="survey3.q13" interface="popover">\n     <ion-option value="Kesinlikle Katılıyorum">Kesinlikle Katılıyorum</ion-option>\n        <ion-option value="Katılıyorum">Katılıyorum</ion-option>\n        <ion-option value="Kararsızım">Kararsızım</ion-option>\n        <ion-option value="Katılmıyorum">Katılmıyorum</ion-option>\n        <ion-option value="Kesinlikle Katılmıyorum">Kesinlikle Katılmıyorum</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-list-header color="secondary">EĞITIM PROGRAMINA UYGUNLUK</ion-list-header>\n\n    <ion-item>\n      <ion-label floating>\n        14. Materyal web tabanlı eğitimde kullanılmak için uygundur.\n      </ion-label>\n      <ion-select [(ngModel)]="survey3.q14" interface="popover">\n     <ion-option value="Kesinlikle Katılıyorum">Kesinlikle Katılıyorum</ion-option>\n        <ion-option value="Katılıyorum">Katılıyorum</ion-option>\n        <ion-option value="Kararsızım">Kararsızım</ion-option>\n        <ion-option value="Katılmıyorum">Katılmıyorum</ion-option>\n        <ion-option value="Kesinlikle Katılmıyorum">Kesinlikle Katılmıyorum</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>\n        15. Materyal aktarılacak konuya uygun olacak şekilde tasarlanmıştır.\n      </ion-label>\n      <ion-select [(ngModel)]="survey3.q15" interface="popover">\n     <ion-option value="Kesinlikle Katılıyorum">Kesinlikle Katılıyorum</ion-option>\n        <ion-option value="Katılıyorum">Katılıyorum</ion-option>\n        <ion-option value="Kararsızım">Kararsızım</ion-option>\n        <ion-option value="Katılmıyorum">Katılmıyorum</ion-option>\n        <ion-option value="Kesinlikle Katılmıyorum">Kesinlikle Katılmıyorum</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>\n        16. Materyal, öğretmenin ders materyali olarak kullanımına uygundur.\n      </ion-label>\n      <ion-select [(ngModel)]="survey3.q16" interface="popover">\n     <ion-option value="Kesinlikle Katılıyorum">Kesinlikle Katılıyorum</ion-option>\n        <ion-option value="Katılıyorum">Katılıyorum</ion-option>\n        <ion-option value="Kararsızım">Kararsızım</ion-option>\n        <ion-option value="Katılmıyorum">Katılmıyorum</ion-option>\n        <ion-option value="Kesinlikle Katılmıyorum">Kesinlikle Katılmıyorum</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>\n        17. Grafik, ses, animasyon gibi çoklu odam öğeleri yeterli miktarda kullanılmıştır.\n      </ion-label>\n      <ion-select [(ngModel)]="survey3.q17" interface="popover">\n     <ion-option value="Kesinlikle Katılıyorum">Kesinlikle Katılıyorum</ion-option>\n        <ion-option value="Katılıyorum">Katılıyorum</ion-option>\n        <ion-option value="Kararsızım">Kararsızım</ion-option>\n        <ion-option value="Katılmıyorum">Katılmıyorum</ion-option>\n        <ion-option value="Kesinlikle Katılmıyorum">Kesinlikle Katılmıyorum</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-list-header color="secondary">GÖRSEL YETERLİLİK</ion-list-header>\n\n    <ion-item>\n      <ion-label floating>\n        18. Kullanılan yazılım öğrenmenin amacına ulaşmasını sağlamaktadır.\n      </ion-label>\n      <ion-select [(ngModel)]="survey3.q18" interface="popover">\n     <ion-option value="Kesinlikle Katılıyorum">Kesinlikle Katılıyorum</ion-option>\n        <ion-option value="Katılıyorum">Katılıyorum</ion-option>\n        <ion-option value="Kararsızım">Kararsızım</ion-option>\n        <ion-option value="Katılmıyorum">Katılmıyorum</ion-option>\n        <ion-option value="Kesinlikle Katılmıyorum">Kesinlikle Katılmıyorum</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>\n        19. Bilgiler uygun resimlerle açık şekilde görselleştirilmiştir.\n      </ion-label>\n      <ion-select [(ngModel)]="survey3.q19" interface="popover">\n     <ion-option value="Kesinlikle Katılıyorum">Kesinlikle Katılıyorum</ion-option>\n        <ion-option value="Katılıyorum">Katılıyorum</ion-option>\n        <ion-option value="Kararsızım">Kararsızım</ion-option>\n        <ion-option value="Katılmıyorum">Katılmıyorum</ion-option>\n        <ion-option value="Kesinlikle Katılmıyorum">Kesinlikle Katılmıyorum</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>\n        20. Meteraldeki şekillerde ver resimlerde gerçekçi canlı renkler kullanılmıştır.\n      </ion-label>\n      <ion-select [(ngModel)]="survey3.q20" interface="popover">\n     <ion-option value="Kesinlikle Katılıyorum">Kesinlikle Katılıyorum</ion-option>\n        <ion-option value="Katılıyorum">Katılıyorum</ion-option>\n        <ion-option value="Kararsızım">Kararsızım</ion-option>\n        <ion-option value="Katılmıyorum">Katılmıyorum</ion-option>\n        <ion-option value="Kesinlikle Katılmıyorum">Kesinlikle Katılmıyorum</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>\n        21. Meteryalde eğelneceli şekiller, görseller vs. kullanılmışıtr.\n      </ion-label>\n      <ion-select [(ngModel)]="survey3.q21" interface="popover">\n     <ion-option value="Kesinlikle Katılıyorum">Kesinlikle Katılıyorum</ion-option>\n        <ion-option value="Katılıyorum">Katılıyorum</ion-option>\n        <ion-option value="Kararsızım">Kararsızım</ion-option>\n        <ion-option value="Katılmıyorum">Katılmıyorum</ion-option>\n        <ion-option value="Kesinlikle Katılmıyorum">Kesinlikle Katılmıyorum</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>\n        22. Animasyon tasarımı öğreneme isteiğini artırmaktadır.\n      </ion-label>\n      <ion-select [(ngModel)]="survey3.q22" interface="popover">\n     <ion-option value="Kesinlikle Katılıyorum">Kesinlikle Katılıyorum</ion-option>\n        <ion-option value="Katılıyorum">Katılıyorum</ion-option>\n        <ion-option value="Kararsızım">Kararsızım</ion-option>\n        <ion-option value="Katılmıyorum">Katılmıyorum</ion-option>\n        <ion-option value="Kesinlikle Katılmıyorum">Kesinlikle Katılmıyorum</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>\n        23. Yazılım ekranları arasında tutarlıklı vardır.\n      </ion-label>\n      <ion-select [(ngModel)]="survey3.q23" interface="popover">\n     <ion-option value="Kesinlikle Katılıyorum">Kesinlikle Katılıyorum</ion-option>\n        <ion-option value="Katılıyorum">Katılıyorum</ion-option>\n        <ion-option value="Kararsızım">Kararsızım</ion-option>\n        <ion-option value="Katılmıyorum">Katılmıyorum</ion-option>\n        <ion-option value="Kesinlikle Katılmıyorum">Kesinlikle Katılmıyorum</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-list-header color="secondary">PROGRAMLAMA UYGUNLUĞU / TEKNİK YETERLİLİK</ion-list-header>\n\n    <ion-item>\n      <ion-label floating>\n        24. Ekranda kullanılan renkler uyumludur.\n      </ion-label>\n      <ion-select [(ngModel)]="survey3.q24" interface="popover">\n     <ion-option value="Kesinlikle Katılıyorum">Kesinlikle Katılıyorum</ion-option>\n        <ion-option value="Katılıyorum">Katılıyorum</ion-option>\n        <ion-option value="Kararsızım">Kararsızım</ion-option>\n        <ion-option value="Katılmıyorum">Katılmıyorum</ion-option>\n        <ion-option value="Kesinlikle Katılmıyorum">Kesinlikle Katılmıyorum</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>\n        25. Videoların/Animasyonların niteliği açık ve iyidir.\n      </ion-label>\n      <ion-select [(ngModel)]="survey3.q25" interface="popover">\n     <ion-option value="Kesinlikle Katılıyorum">Kesinlikle Katılıyorum</ion-option>\n        <ion-option value="Katılıyorum">Katılıyorum</ion-option>\n        <ion-option value="Kararsızım">Kararsızım</ion-option>\n        <ion-option value="Katılmıyorum">Katılmıyorum</ion-option>\n        <ion-option value="Kesinlikle Katılmıyorum">Kesinlikle Katılmıyorum</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>\n        26. Ekranlar arası geçiş kullanıcya bağlıdır.\n      </ion-label>\n      <ion-select [(ngModel)]="survey3.q26" interface="popover">\n     <ion-option value="Kesinlikle Katılıyorum">Kesinlikle Katılıyorum</ion-option>\n        <ion-option value="Katılıyorum">Katılıyorum</ion-option>\n        <ion-option value="Kararsızım">Kararsızım</ion-option>\n        <ion-option value="Katılmıyorum">Katılmıyorum</ion-option>\n        <ion-option value="Kesinlikle Katılmıyorum">Kesinlikle Katılmıyorum</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>\n        27. Meteryalde yardım menüsü bulunmaktadır.\n      </ion-label>\n      <ion-select [(ngModel)]="survey3.q27" interface="popover">\n     <ion-option value="Kesinlikle Katılıyorum">Kesinlikle Katılıyorum</ion-option>\n        <ion-option value="Katılıyorum">Katılıyorum</ion-option>\n        <ion-option value="Kararsızım">Kararsızım</ion-option>\n        <ion-option value="Katılmıyorum">Katılmıyorum</ion-option>\n        <ion-option value="Kesinlikle Katılmıyorum">Kesinlikle Katılmıyorum</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>\n        28. Video iletimi düzgün ve sorunsuz çalışmaktadır.\n      </ion-label>\n      <ion-select [(ngModel)]="survey3.q28" interface="popover">\n     <ion-option value="Kesinlikle Katılıyorum">Kesinlikle Katılıyorum</ion-option>\n        <ion-option value="Katılıyorum">Katılıyorum</ion-option>\n        <ion-option value="Kararsızım">Kararsızım</ion-option>\n        <ion-option value="Katılmıyorum">Katılmıyorum</ion-option>\n        <ion-option value="Kesinlikle Katılmıyorum">Kesinlikle Katılmıyorum</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>\n        29. Meteryal öğrenci kullanımına izin verecek yetkilendirmelere sahiptir.\n      </ion-label>\n      <ion-select [(ngModel)]="survey3.q29" interface="popover">\n     <ion-option value="Kesinlikle Katılıyorum">Kesinlikle Katılıyorum</ion-option>\n        <ion-option value="Katılıyorum">Katılıyorum</ion-option>\n        <ion-option value="Kararsızım">Kararsızım</ion-option>\n        <ion-option value="Katılmıyorum">Katılmıyorum</ion-option>\n        <ion-option value="Kesinlikle Katılmıyorum">Kesinlikle Katılmıyorum</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>\n        30. Arayüz tasarımı memnun edici ve estetiktir.\n      </ion-label>\n      <ion-select [(ngModel)]="survey3.q30" interface="popover">\n     <ion-option value="Kesinlikle Katılıyorum">Kesinlikle Katılıyorum</ion-option>\n        <ion-option value="Katılıyorum">Katılıyorum</ion-option>\n        <ion-option value="Kararsızım">Kararsızım</ion-option>\n        <ion-option value="Katılmıyorum">Katılmıyorum</ion-option>\n        <ion-option value="Kesinlikle Katılmıyorum">Kesinlikle Katılmıyorum</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>\n        31. Materyalin giriş sayfasında gerekli yönlendirmeler yer almaktadır.\n      </ion-label>\n      <ion-select [(ngModel)]="survey3.q31" interface="popover">\n     <ion-option value="Kesinlikle Katılıyorum">Kesinlikle Katılıyorum</ion-option>\n        <ion-option value="Katılıyorum">Katılıyorum</ion-option>\n        <ion-option value="Kararsızım">Kararsızım</ion-option>\n        <ion-option value="Katılmıyorum">Katılmıyorum</ion-option>\n        <ion-option value="Kesinlikle Katılmıyorum">Kesinlikle Katılmıyorum</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>\n        32. Animasyon ve simülasyonlar gerçeğe uygundur.\n      </ion-label>\n      <ion-select [(ngModel)]="survey3.q32" interface="popover">\n     <ion-option value="Kesinlikle Katılıyorum">Kesinlikle Katılıyorum</ion-option>\n        <ion-option value="Katılıyorum">Katılıyorum</ion-option>\n        <ion-option value="Kararsızım">Kararsızım</ion-option>\n        <ion-option value="Katılmıyorum">Katılmıyorum</ion-option>\n        <ion-option value="Kesinlikle Katılmıyorum">Kesinlikle Katılmıyorum</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>\n        33. Materyal içerisindeki etkileşim düzeyi uygundurr.\n      </ion-label>\n      <ion-select [(ngModel)]="survey3.q33" interface="popover">\n     <ion-option value="Kesinlikle Katılıyorum">Kesinlikle Katılıyorum</ion-option>\n        <ion-option value="Katılıyorum">Katılıyorum</ion-option>\n        <ion-option value="Kararsızım">Kararsızım</ion-option>\n        <ion-option value="Katılmıyorum">Katılmıyorum</ion-option>\n        <ion-option value="Kesinlikle Katılmıyorum">Kesinlikle Katılmıyorum</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>\n        34. Materyal tüm donanımlarla birlikte kullanılmya uygundur.\n      </ion-label>\n      <ion-select [(ngModel)]="survey3.q34" interface="popover">\n     <ion-option value="Kesinlikle Katılıyorum">Kesinlikle Katılıyorum</ion-option>\n        <ion-option value="Katılıyorum">Katılıyorum</ion-option>\n        <ion-option value="Kararsızım">Kararsızım</ion-option>\n        <ion-option value="Katılmıyorum">Katılmıyorum</ion-option>\n        <ion-option value="Kesinlikle Katılmıyorum">Kesinlikle Katılmıyorum</ion-option>\n      </ion-select>\n    </ion-item>\n\n  </ion-list>\n\n  <button ion-button full (click)="saveSurvey();">Gönder</button>\n\n</ion-content>\n'/*ion-inline-end:"D:\_Ayhant\_Projects\test10\src\pages\survey\survey.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_app_service_app_service__["a" /* AppServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */]])
    ], SurveyPage);
    return SurveyPage;
    var SurveyPage_1;
}());

//# sourceMappingURL=survey.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IsgivebirthPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_app_service_app_service__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var IsgivebirthPage = /** @class */ (function () {
    function IsgivebirthPage(navCtrl, navParams, appService, toastCtrl, camera, storage, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appService = appService;
        this.toastCtrl = toastCtrl;
        this.camera = camera;
        this.storage = storage;
        this.actionSheetCtrl = actionSheetCtrl;
        this.imgData = '../../assets/imgs/addphoto.png';
        this.base64ImageData = 'R0lGODlhPQBEAPeoAJosM//AwO/AwHVYZ/z595kzAP/s7P+goOXMv8+fhw/v739/f+8PD98fH/8mJl+fn/9ZWb8/PzWlwv///6wWGbImAPgTEMImIN9gUFCEm/gDALULDN8PAD6atYdCTX9gUNKlj8wZAKUsAOzZz+UMAOsJAP/Z2ccMDA8PD/95eX5NWvsJCOVNQPtfX/8zM8+QePLl38MGBr8JCP+zs9myn/8GBqwpAP/GxgwJCPny78lzYLgjAJ8vAP9fX/+MjMUcAN8zM/9wcM8ZGcATEL+QePdZWf/29uc/P9cmJu9MTDImIN+/r7+/vz8/P8VNQGNugV8AAF9fX8swMNgTAFlDOICAgPNSUnNWSMQ5MBAQEJE3QPIGAM9AQMqGcG9vb6MhJsEdGM8vLx8fH98AANIWAMuQeL8fABkTEPPQ0OM5OSYdGFl5jo+Pj/+pqcsTE78wMFNGQLYmID4dGPvd3UBAQJmTkP+8vH9QUK+vr8ZWSHpzcJMmILdwcLOGcHRQUHxwcK9PT9DQ0O/v70w5MLypoG8wKOuwsP/g4P/Q0IcwKEswKMl8aJ9fX2xjdOtGRs/Pz+Dg4GImIP8gIH0sKEAwKKmTiKZ8aB/f39Wsl+LFt8dgUE9PT5x5aHBwcP+AgP+WltdgYMyZfyywz78AAAAAAAD///8AAP9mZv///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAKgALAAAAAA9AEQAAAj/AFEJHEiwoMGDCBMqXMiwocAbBww4nEhxoYkUpzJGrMixogkfGUNqlNixJEIDB0SqHGmyJSojM1bKZOmyop0gM3Oe2liTISKMOoPy7GnwY9CjIYcSRYm0aVKSLmE6nfq05QycVLPuhDrxBlCtYJUqNAq2bNWEBj6ZXRuyxZyDRtqwnXvkhACDV+euTeJm1Ki7A73qNWtFiF+/gA95Gly2CJLDhwEHMOUAAuOpLYDEgBxZ4GRTlC1fDnpkM+fOqD6DDj1aZpITp0dtGCDhr+fVuCu3zlg49ijaokTZTo27uG7Gjn2P+hI8+PDPERoUB318bWbfAJ5sUNFcuGRTYUqV/3ogfXp1rWlMc6awJjiAAd2fm4ogXjz56aypOoIde4OE5u/F9x199dlXnnGiHZWEYbGpsAEA3QXYnHwEFliKAgswgJ8LPeiUXGwedCAKABACCN+EA1pYIIYaFlcDhytd51sGAJbo3onOpajiihlO92KHGaUXGwWjUBChjSPiWJuOO/LYIm4v1tXfE6J4gCSJEZ7YgRYUNrkji9P55sF/ogxw5ZkSqIDaZBV6aSGYq/lGZplndkckZ98xoICbTcIJGQAZcNmdmUc210hs35nCyJ58fgmIKX5RQGOZowxaZwYA+JaoKQwswGijBV4C6SiTUmpphMspJx9unX4KaimjDv9aaXOEBteBqmuuxgEHoLX6Kqx+yXqqBANsgCtit4FWQAEkrNbpq7HSOmtwag5w57GrmlJBASEU18ADjUYb3ADTinIttsgSB1oJFfA63bduimuqKB1keqwUhoCSK374wbujvOSu4QG6UvxBRydcpKsav++Ca6G8A6Pr1x2kVMyHwsVxUALDq/krnrhPSOzXG1lUTIoffqGR7Goi2MAxbv6O2kEG56I7CSlRsEFKFVyovDJoIRTg7sugNRDGqCJzJgcKE0ywc0ELm6KBCCJo8DIPFeCWNGcyqNFE06ToAfV0HBRgxsvLThHn1oddQMrXj5DyAQgjEHSAJMWZwS3HPxT/QMbabI/iBCliMLEJKX2EEkomBAUCxRi42VDADxyTYDVogV+wSChqmKxEKCDAYFDFj4OmwbY7bDGdBhtrnTQYOigeChUmc1K3QTnAUfEgGFgAWt88hKA6aCRIXhxnQ1yg3BCayK44EWdkUQcBByEQChFXfCB776aQsG0BIlQgQgE8qO26X1h8cEUep8ngRBnOy74E9QgRgEAC8SvOfQkh7FDBDmS43PmGoIiKUUEGkMEC/PJHgxw0xH74yx/3XnaYRJgMB8obxQW6kL9QYEJ0FIFgByfIL7/IQAlvQwEpnAC7DtLNJCKUoO/w45c44GwCXiAFB/OXAATQryUxdN4LfFiwgjCNYg+kYMIEFkCKDs6PKAIJouyGWMS1FSKJOMRB/BoIxYJIUXFUxNwoIkEKPAgCBZSQHQ1A2EWDfDEUVLyADj5AChSIQW6gu10bE/JG2VnCZGfo4R4d0sdQoBAHhPjhIB94v/wRoRKQWGRHgrhGSQJxCS+0pCZbEhAAOw==';
    }
    IsgivebirthPage.prototype.saveBirthType = function (type) {
        var _this = this;
        var memberID = localStorage.getItem('memberID');
        var birthType = type == "normal" ? 3 : 4;
        console.log(memberID, birthType);
        //foto kaydetme durumu olan yer
        this.storage.get('member').then(function (memberObj) {
            _this.appService.saveBirthType(memberID, birthType, null).subscribe(function (result) {
                console.log(result);
                if (result.Result != -1) {
                    _this.showMessage('Talebiniz uygulama yöneticisine iletildi, sizinle irtibata geçildikten sonra uygulama kullanımınıza açılacaktır.'); //foto ekleme olursa kalkacak
                    //foto ekleme olursa aktif edilecek
                    /* memberObj.BirthCertificatePicture = this.base64ImageData;
                    this.appService.setMemberPhoto(memberObj).subscribe(photoResult => {
                      console.log('Photo Result: ', photoResult);
                      if(photoResult.Result != false) {
                        this.showMessage('Talebiniz uygulama yöneticisine iletildi, sizinle irtibata geçildikten sonra uygulama kullanımınıza açılacaktır.');
                      }
                      else {
                        this.showMessage('Beklenmedik bir hata oluştu tekrar deneyiniz!');
                      }
                    }); */
                }
                else {
                    _this.showMessage('Beklenmedik bir hata oluştu tekrar deneyiniz!');
                }
            });
            console.log("Member Obj: ", memberObj);
            //this.appService.setMemberPhoto(memberObj);
        });
        //null olan yere this.base64ImageData gelecek!!!!
        /* this.appService.saveBirthType(memberID,birthType,null).subscribe(result => {
          console.log(result);
          if(result.Result != -1) {
            this.showMessage('Talebiniz uygulama yöneticisine iletildi, sizinle irtibata geçildikten sonra uygulama kullanımınıza açılacaktır.');
          }
          else {
            this.showMessage('Beklenmedik bir hata oluştu tekrar deneyiniz!');
          }
        }); */
    };
    IsgivebirthPage.prototype.selectPhoto = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.base64ImageData = imageData;
            _this.imgData = base64Image;
        }, function (err) {
            // Handle error
        });
    };
    IsgivebirthPage.prototype.takePhoto = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.base64ImageData = imageData;
            _this.imgData = base64Image;
        }, function (err) {
            // Handle error
        });
    };
    IsgivebirthPage.prototype.showActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Fotoğraf Yüklemek İçin Seçim Yapınız',
            buttons: [
                {
                    text: 'Kamera',
                    handler: function () {
                        _this.takePhoto();
                    }
                },
                {
                    text: 'Galeri',
                    handler: function () {
                        _this.selectPhoto();
                    }
                },
                {
                    text: 'İptal',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    IsgivebirthPage.prototype.showMessage = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 5000
        });
        toast.present();
    };
    IsgivebirthPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-isgivebirth',template:/*ion-inline-start:"D:\_Ayhant\_Projects\test10\src\pages\isgivebirth\isgivebirth.html"*/'<!--\n  Generated template for the IsgivebirthPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Doğum Yaptın Mı?</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div class="header-text">\n      <span>Uygulamayı kullanmaya başlaman için hangi türde doğum yaptığını belirtmen gerekiyor.</span>\n  </div>\n\n  <div class="photo" *ngIf="false">\n    <img src="{{imgData}}" (click)="showActionSheet();" />\n  </div>\n    \n\n    <button ion-button block (click)="saveBirthType(\'normal\');">Normal Doğum Yaptım</button>\n\n    <button ion-button block (click)="saveBirthType(\'sezeryan\')">Sezeryan Doğum Yaptım</button>\n\n</ion-content>\n'/*ion-inline-end:"D:\_Ayhant\_Projects\test10\src\pages\isgivebirth\isgivebirth.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_app_service_app_service__["a" /* AppServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], IsgivebirthPage);
    return IsgivebirthPage;
}());

//# sourceMappingURL=isgivebirth.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_device__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_app_version__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_safari_view_controller__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_content_list_content_list__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_contact_contact__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_survey_survey__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_settings_settings__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_isgivebirth_isgivebirth__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_app_service_app_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_about_about__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_help_help__ = __webpack_require__(122);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


















var MyApp = /** @class */ (function () {
    function MyApp(platform, storage, statusBar, splashScreen, keyboard, appService, menuController, appVersion, alertCtrl, safariViewController, device) {
        var _this = this;
        this.platform = platform;
        this.storage = storage;
        this.appService = appService;
        this.menuController = menuController;
        this.appVersion = appVersion;
        this.alertCtrl = alertCtrl;
        this.safariViewController = safariViewController;
        this.device = device;
        this.mainCategories = [];
        this.userNameSurname = '';
        this.contentCategories = [];
        this.motherContentCategories = [];
        this.babyContentCategories = [];
        this.fatherContentCategories = [];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            keyboard.hideFormAccessoryBar(false);
            /* this.storage.set('hasSeenTutorial', 'true');
            this.storage.get('hasSeenTutorial').then(res => {
              
              console.log("Storage: ",res);
            }) */
            _this.init();
            _this.storage.get('isUserLogged').then(function (result) {
                if (result) {
                    //kullanıcı daha önce giriş yapmış ise
                    //this.rootPage = HomePage;
                    _this.storage.get('member').then(function (memberResult) {
                        console.log(memberResult);
                        _this.userNameSurname = memberResult.FullName;
                        _this.doLoginSteps(memberResult);
                    });
                }
                else {
                    //kullanıcı giriş yapmamış ise
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */];
                }
            });
        });
    }
    MyApp.prototype.init = function () {
        this.checkVersion();
        this.getCategories();
    };
    MyApp.prototype.checkVersion = function () {
        var _this = this;
        this.appService.getAppVersion().subscribe(function (versionResult) {
            console.log(versionResult.Result.CurrentMobileApplicationVersion);
            var currentVersion = versionResult.Result.CurrentMobileApplicationVersion;
            if (_this.platform.is('cordova')) {
                _this.appVersion.getVersionNumber().then(function (version) {
                    console.log("Version: ", version);
                    localStorage.setItem('version', version);
                    if (version == currentVersion) {
                        _this.showAlertMessage();
                    }
                });
            }
        });
    };
    MyApp.prototype.getCategories = function () {
        var _this = this;
        this.appService.getContentCategories().subscribe(function (result) {
            console.log("result: ", result.Result);
            _this.mainCategories = result.Result;
            //this.setCategories(result.Result);
            //this.test(result.Result);
        });
    };
    MyApp.prototype.showChildCategories = function (item) {
        //eğer collapse yapıda child'ı yok ise kapama açma işlemi yapmayıp direkt detayını göstermeye gidecek.
        if (item.HasChild) {
            item.IsOpened = !item.IsOpened;
        }
        else {
            this.showCategoryList(item);
            this.menuController.close();
        }
        console.log("test");
    };
    MyApp.prototype.showCategoryList = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__pages_content_list_content_list__["a" /* ContentListPage */], {
            categoryItem: item
        });
    };
    MyApp.prototype.test = function (data) {
        var _this = this;
        this.mainCategories = data.filter(function (x) { return x.ParentCategoryId == null; });
        this.mainCategories.forEach(function (item) {
            item.Childs = [];
        });
        data.forEach(function (item) {
            item.isShown = false;
            if (item.ParentCategoryId != null) {
                item.Childs = [];
                _this.setChildToParent(_this.mainCategories, item);
            }
        });
        console.log("main", this.mainCategories);
    };
    MyApp.prototype.setChildToParent = function (parentList, item) {
        for (var x = 0; x < parentList.length; x++) {
            if (parentList[x].CategoryId == item.ParentCategoryId) {
                parentList[x].Childs.push(item);
                return;
            }
        }
    };
    MyApp.prototype.setCategories = function (data) {
        if (data != null) {
            /* this.mainCategories = data.filter(x => x.ParentCategoryId == null);
      
            data.forEach(item => {
              if(item.ParentCategoryId != null){
                var xy = this.mainCategories.filter(x => x.CategoryId == item.ParentCategoryId)[0];
                console.log("xy", xy);
              }
              
            }); */
            this.contentCategories = data;
            //anne kategorisi için düzenleme
            for (var i = 0; i < this.contentCategories.length; i++) {
                if (data[i].ParentCategoryId == 24) {
                    this.motherContentCategories.push(data[i]);
                    for (var j = 0; j < this.contentCategories.length; j++) {
                        if (this.contentCategories[i].CategoryId == this.contentCategories[j].ParentCategoryId) {
                            this.motherContentCategories.push(this.contentCategories[j]);
                            for (var k = 0; k < this.contentCategories.length; k++) {
                                if (this.contentCategories[j].CategoryId == this.contentCategories[k].ParentCategoryId)
                                    this.motherContentCategories.push(this.contentCategories[k]);
                            }
                        }
                    }
                }
            }
            //bebek kategorisi için düzenleme
            for (var ii = 0; ii < this.contentCategories.length; ii++) {
                if (data[ii].ParentCategoryId == 25) {
                    this.babyContentCategories.push(data[ii]);
                    for (var jj = 0; jj < this.contentCategories.length; jj++) {
                        if (this.contentCategories[ii].CategoryId == this.contentCategories[jj].ParentCategoryId) {
                            this.babyContentCategories.push(this.contentCategories[jj]);
                            for (var kk = 0; kk < this.contentCategories.length; kk++) {
                                if (this.contentCategories[jj].CategoryId == this.contentCategories[kk].ParentCategoryId)
                                    this.babyContentCategories.push(this.contentCategories[kk]);
                            }
                        }
                    }
                }
            }
            //baba kategorisi için düzenleme
            for (var iii = 0; iii < this.contentCategories.length; iii++) {
                if (data[iii].ParentCategoryId == 26) {
                    this.fatherContentCategories.push(data[iii]);
                    for (var jjj = 0; jjj < this.contentCategories.length; jjj++) {
                        if (this.contentCategories[iii].CategoryId == this.contentCategories[jjj].ParentCategoryId) {
                            this.fatherContentCategories.push(this.contentCategories[jjj]);
                            for (var kkk = 0; kkk < this.contentCategories.length; kkk++) {
                                if (this.contentCategories[jjj].CategoryId == this.contentCategories[kkk].ParentCategoryId)
                                    this.fatherContentCategories.push(this.contentCategories[kkk]);
                            }
                        }
                    }
                }
            }
        }
        console.log(this.motherContentCategories);
        console.log(this.fatherContentCategories);
        console.log(this.babyContentCategories);
    };
    MyApp.prototype.logout = function () {
        this.storage.remove('isUserLogged');
        localStorage.clear();
        localStorage.setItem('isLoginBefore', "true");
        console.log("logout olundu");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */]);
        this.rootPage = __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */];
    };
    MyApp.prototype.goToContactPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__pages_contact_contact__["a" /* ContactPage */]);
    };
    MyApp.prototype.goToSettingsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__pages_settings_settings__["a" /* SettingsPage */]);
    };
    MyApp.prototype.goToSurveyPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__pages_survey_survey__["a" /* SurveyPage */], { surveyType: '1' });
    };
    MyApp.prototype.goToAboutPage = function (parameter) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_16__pages_about_about__["a" /* AboutPage */], { 'Page': parameter });
    };
    MyApp.prototype.goToHelpPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_17__pages_help_help__["a" /* HelpPage */]);
    };
    MyApp.prototype.doLoginSteps = function (result) {
        var _this = this;
        if (!result.IsBlocked) {
            if (result.IsGiveBirth == true) {
                //admin tarafından onaylandı ise doğum haftasına bakacağız. 6 hafta olmamış ise anketleri doldurup doldurmadığına bakacağız. 1. ve 2. ankete sırası ile yönlendireeğiz.
                var birthDate = result.GiveBirthDate == null ? new Date() : result.GiveBirthDate;
                var d = new Date(birthDate).getTime();
                var today = new Date().getTime();
                var timeDiff = Math.abs(d - today);
                var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
                //this.loading.dismiss();
                this.appService.checkSurveyCompleted(result.MemberId).subscribe(function (surveyResult) {
                    console.log("Survey Result: ", surveyResult);
                    var isFirstSurveyCompleted = _this.checkSurveyCompleted(surveyResult.Result, 1);
                    var isSecondSurveyCompleted = _this.checkSurveyCompleted(surveyResult.Result, 2);
                    var isThirdSurveyCompleted = _this.checkSurveyCompleted(surveyResult.Result, 3);
                    var isFourthSurveyCompleted = _this.checkSurveyCompleted(surveyResult.Result, 4);
                    if (diffDays < 42) {
                        if (isFirstSurveyCompleted) {
                            if (isSecondSurveyCompleted) {
                                _this.storage.set('isUserLogged', 'true');
                                _this.storage.set('memberID', result.MemberId);
                                _this.storage.set('member', result);
                                localStorage.setItem('memberID', result.MemberId);
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */]);
                                _this.checkIsFirstLogin();
                            }
                            else {
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_12__pages_survey_survey__["a" /* SurveyPage */], { surveyType: 2, comeTo: "login" });
                            }
                        }
                        else {
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_12__pages_survey_survey__["a" /* SurveyPage */], { surveyType: 1, comeTo: "login" });
                        }
                    }
                    else {
                        _this.storage.set('memberID', result.MemberId);
                        _this.storage.set('member', result);
                        localStorage.setItem('memberID', result.MemberId);
                        if (isFirstSurveyCompleted) {
                            if (isSecondSurveyCompleted) {
                                if (isThirdSurveyCompleted) {
                                    if (isFourthSurveyCompleted) {
                                        _this.storage.set('isUserLogged', 'true');
                                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */]);
                                        _this.checkIsFirstLogin();
                                    }
                                    else {
                                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_12__pages_survey_survey__["a" /* SurveyPage */], { surveyType: 4, comeTo: "login" });
                                    }
                                }
                                else {
                                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_12__pages_survey_survey__["a" /* SurveyPage */], { surveyType: 3, comeTo: "login" });
                                }
                            }
                            else {
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_12__pages_survey_survey__["a" /* SurveyPage */], { surveyType: 2, comeTo: "login" });
                            }
                        }
                        else {
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_12__pages_survey_survey__["a" /* SurveyPage */], { surveyType: 1, comeTo: "login" });
                        }
                    }
                });
                /* this.storage.set('isUserLogged', 'true');
                this.storage.set('memberID', result.Result.MemberId);
                this.storage.set('member', result.Result);
                localStorage.setItem('memberID', result.Result.MemberId);
                this.navCtrl.setRoot(MyApp); */
            }
            else {
                //this.loading.dismiss();
                localStorage.setItem('memberID', result.MemberId);
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_14__pages_isgivebirth_isgivebirth__["a" /* IsgivebirthPage */]);
            }
        }
        else {
            //this.loading.dismiss();
            //this.showMessage("Hesabınız bloklanmıştır!");
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */]);
        }
    };
    MyApp.prototype.checkSurveyCompleted = function (data, surveyId) {
        var flag = false;
        data.forEach(function (item) {
            if (item.SurveyTypeId == surveyId) {
                flag = true;
            }
        });
        return flag;
    };
    MyApp.prototype.checkIsFirstLogin = function () {
        var isFirst = localStorage.getItem('isLoginBefore');
        if (isFirst == null) {
            localStorage.setItem('isLoginBefore', "true");
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_17__pages_help_help__["a" /* HelpPage */]);
        }
        else {
        }
    };
    MyApp.prototype.showAlertMessage = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Güncelleme',
            subTitle: 'Yeni bir güncelleme mevcut!',
            enableBackdropDismiss: false,
            buttons: [{
                    text: 'Güncelle',
                    handler: function () {
                        //güncellemek için yapılacak olan işlemler burada olacak.
                        if (_this.platform.is('ios')) {
                            _this.openUrl('http://api.lohusaloji.com/MobileApps/Android/app.ipa');
                        }
                        else {
                            _this.openUrl('http://api.lohusaloji.com/MobileApps/Android/app.apk');
                        }
                        return false;
                    }
                }]
        });
        alert.present();
    };
    MyApp.prototype.openUrl = function (url) {
        var _this = this;
        this.safariViewController.isAvailable()
            .then(function (available) {
            if (available) {
                _this.safariViewController.show({
                    url: url,
                    hidden: false,
                    animated: false,
                    transition: 'fade',
                    enterReaderModeIfAvailable: true
                })
                    .subscribe(function (result) {
                    if (result.event === 'opened') {
                        console.log('Opened', result);
                    }
                    else if (result.event === 'loaded') {
                        console.log('Loaded', result);
                    }
                    else if (result.event === 'closed') {
                        console.log('Closed', result);
                        _this.safariViewController.hide();
                    }
                }, function (error) { return console.error(error); });
            }
            else {
                // use fallback browser, example InAppBrowser
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], MyApp.prototype, "navCtrl", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\_Ayhant\_Projects\test10\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header style="background-color: #6b5b95">\n\n    <ion-toolbar>\n\n      <ion-title>MENÜ</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n  <ion-content style="background-color: #6b5b95 !important; background-image: none;">\n\n\n\n    <div class="user-info">\n\n        <ion-icon name="contact"></ion-icon>\n\n        <span>{{userNameSurname}}</span>\n\n    </div>\n\n    <div class="title">\n\n      <span>İçerik Kategorileri</span>\n\n    </div>\n\n    <div class="categories" *ngFor="let item of mainCategories">\n\n      <div *ngIf="item.CategoryId!=150" class="main-categories" (click)="showChildCategories(item);">\n\n\n\n        <ion-icon item-start name="woman" *ngIf="item.CategoryId==24" style="color:#d64161"></ion-icon>\n\n        <ion-icon item-start name="logo-reddit" *ngIf="item.CategoryId==25" style="color:#d64161"></ion-icon>\n\n        <ion-icon item-start name="person" *ngIf="item.CategoryId==26" style="color:#d64161"></ion-icon>\n\n        <!-- <ion-icon item-start name="albums" *ngIf="item.CategoryId==150" style="color:#d64161"></ion-icon> -->\n\n        <span>{{item.Title}}</span>\n\n      </div>\n\n      <div *ngIf="item.IsOpened">\n\n        <div *ngFor="let child of item.Childs">\n\n          <div class="child-categories" (click)="showChildCategories(child)">\n\n            <ion-icon *ngIf="!child.IsOpened" item-start name="{{child.HasChild ? \'add\': \'\'}}" style="color:#d64161"></ion-icon>\n\n            <ion-icon *ngIf="child.IsOpened" item-start name="remove" style="color:#d64161"></ion-icon>\n\n            <span>{{child.Title}}</span>\n\n          </div>\n\n          <div *ngIf="child.IsOpened">\n\n            <div class="child-categories" *ngFor="let subChild of child.Childs" (click)="showCategoryList(subChild)" menuToggle>\n\n              <ion-icon item-start name="" style="color:#d64161"></ion-icon>\n\n              <span style="color:whitesmoke">{{subChild.Title}}</span>\n\n            </div>\n\n          </div>\n\n        </div>\n\n      </div>\n\n    </div>\n\n    <div class="title">\n\n      <span>Ekstralar</span>\n\n    </div>\n\n    <div class="categories">\n\n      <!-- <div class="main-categories" (click)="goToSurveyPage();" menuToggle>\n\n        <ion-icon item-start name="paper" style="color:#d64161"></ion-icon>\n\n        <span>Anket</span>\n\n      </div> -->\n\n      <div class="main-categories" (click)="goToAboutPage(\'song\');" menuToggle>\n\n        <ion-icon item-start name="musical-notes" style="color:#d64161"></ion-icon>\n\n        <span>Meditasyon ve Ninniler</span>\n\n      </div>\n\n      <div class="main-categories" (click)="goToContactPage()" menuToggle>\n\n        <ion-icon item-start name="mail" style="color:#d64161"></ion-icon>\n\n        <span>Bize Ulaşın</span>\n\n      </div>\n\n      <!-- <div class="main-categories" (click)="goToAboutPage(\'accepting\')" menuToggle>\n\n        <ion-icon item-start name="eye" style="color:#d64161"></ion-icon>\n\n        <span>Karşılama Sayfası</span>\n\n      </div> -->\n\n      <div class="main-categories" (click)="goToHelpPage()" menuToggle>\n\n        <ion-icon item-start name="help-circle" style="color:#d64161"></ion-icon>\n\n        <span>Uygulama Hakkında</span>\n\n      </div>\n\n      <!-- <div class="main-categories" (click)="goToAboutPage(\'about\')" menuToggle>\n\n        <ion-icon item-start name="information-circle" style="color:#d64161"></ion-icon>\n\n        <span>Hakkında</span>\n\n      </div> -->\n\n      <div class="main-categories" (click)="logout();" menuToggle>\n\n        <ion-icon item-start name="exit" style="color:#d64161"></ion-icon>\n\n        <span>Çıkış Yap</span>\n\n      </div>\n\n    </div>\n\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav id="nav" #content [root]="rootPage"></ion-nav>'/*ion-inline-end:"D:\_Ayhant\_Projects\test10\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_15__providers_app_service_app_service__["a" /* AppServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_app_version__["a" /* AppVersion */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_safari_view_controller__["a" /* SafariViewController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_device__["a" /* Device */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[228]);
//# sourceMappingURL=main.js.map