webpackJsonp([1,5],{

/***/ 101:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 101;


/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(117);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(179),
        styles: [__webpack_require__(171)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__info_info_component__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__result_result_component__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__searcher_searcher_component__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__toolbar_toolbar_component__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routes__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_app_db_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_hammerjs__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_hammerjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_8__info_info_component__["a" /* InfoComponent */],
            __WEBPACK_IMPORTED_MODULE_9__result_result_component__["a" /* ResultComponent */],
            __WEBPACK_IMPORTED_MODULE_10__searcher_searcher_component__["a" /* SearcherComponent */],
            __WEBPACK_IMPORTED_MODULE_11__toolbar_toolbar_component__["a" /* ToolbarComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_12__app_routes__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_13_app_db_service__["a" /* DbService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__info_info_component__ = __webpack_require__(71);
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });



// Route Configuration
var routes = [
    {
        path: 'info/:title/:id',
        component: __WEBPACK_IMPORTED_MODULE_2__info_info_component__["a" /* InfoComponent */]
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */]
    },
    { path: '',
        redirectTo: '/',
        pathMatch: 'full'
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(routes, { useHash: true });
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__searcher_searcher_component__ = __webpack_require__(72);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResultComponent = (function () {
    function ResultComponent(search) {
        this.search = search;
        this.SearcherComponent = __WEBPACK_IMPORTED_MODULE_1__searcher_searcher_component__["a" /* SearcherComponent */];
    }
    ResultComponent.prototype.ngOnInit = function () {
        console.log(__WEBPACK_IMPORTED_MODULE_1__searcher_searcher_component__["a" /* SearcherComponent */].result);
    };
    return ResultComponent;
}());
ResultComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'tf-result',
        template: __webpack_require__(182),
        styles: [__webpack_require__(174)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__searcher_searcher_component__["a" /* SearcherComponent */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__searcher_searcher_component__["a" /* SearcherComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__searcher_searcher_component__["a" /* SearcherComponent */]) === "function" && _a || Object])
], ResultComponent);

var _a;
//# sourceMappingURL=result.component.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToolbarComponent = (function () {
    function ToolbarComponent() {
    }
    ToolbarComponent.prototype.ngOnInit = function () {
    };
    return ToolbarComponent;
}());
ToolbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'tf-toolbar',
        template: __webpack_require__(184),
        styles: [__webpack_require__(176)]
    }),
    __metadata("design:paramtypes", [])
], ToolbarComponent);

//# sourceMappingURL=toolbar.component.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, ".container{\n    width: 50%;\n    margin: 0 auto;\n    margin-top: 15px;\n    margin-bottom: 15px;\n}\n\n.sinopsis{\n    color: gray;\n    margin-top: 15px;\n}\n\n.info{\n    float: left;\n    color:gray;\n    margin-right: 50px;\n}\n.mainimg{\n    float:left;\n}\n\nmd-icon{\n    height: 24px !important;\n}\n\n.download{\n    position:absolute;\n    right: 20px;\n    top: 20px;\n    color: white;\n}\n\n.inicio{\n    font-weight: bold !important;\n    color: gray;\n}\n\n.chips{\n    padding: 10px;\n    width: 300px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "md-card{\n    display:inline-block;\n    margin-left: 2%;\n    margin-top: 10px;\n    padding-bottom: 0;\n    padding-top: 10px;\n}\n\n.container{\n    width:80%;\n    margin:0 auto;\n    padding-bottom: 200px;\n}\n\n.descargas{\n    color:white;\n}\n\nmd-icon.rate{\n    font-size: 14px;\n    width: 15px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "md-input-container{\n    font-size: 1.5rem;\n    width: 60%;\n}\n\nmd-spinner{\n    margin: 0 auto;\n}\n\n.buscador{\n    text-align: center;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, ".spacer {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}\n\nmd-toolbar{\n    margin-bottom: 20px;\n}\n\n.iconbtn.mat-button{\n    min-width: 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 179:
/***/ (function(module, exports) {

module.exports = "<tf-toolbar>\n\n</tf-toolbar>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ 180:
/***/ (function(module, exports) {

module.exports = "\n<tf-searcher></tf-searcher>\n\n<tf-result></tf-result>\n"

/***/ }),

/***/ 181:
/***/ (function(module, exports) {

module.exports = "<section class=\"container\">\n    <md-card>\n        <md-card-header>\n            <md-card-title>\n                <h1>{{InfoComponent.info.title}}</h1>\n            </md-card-title>\n            <div class=\"download\" mdTooltip=\"descargar\">            \n            <a md-mini-fab class=\"descargas\" [mdMenuTriggerFor]=\"menu\">\n                <md-icon>add</md-icon>\n            </a>\n            <md-menu #menu=\"mdMenu\">\n                <a md-menu-item *ngFor=\"let torrent of InfoComponent.info.torrents\" href=\"{{torrent.url}}\">\n                    <md-icon>file_download</md-icon>\n                    <span>Torrent {{torrent.quality}}</span>\n                </a>\n                <a md-menu-item href='//www.yifysubtitles.com/movie-imdb/{{InfoComponent.info.imdb_code}}' target='_blank'>\n                    <md-icon>subject</md-icon>\n                    <span>Subtitulo</span>\n                </a>\n                <a md-menu-item href='//www.youtube.com/watch?v={{InfoComponent.info.yt_trailer_code}}' target='_blank'>\n                    <md-icon>movie</md-icon>\n                    <span>Trailer</span>\n                </a>\n                <a md-menu-item href='http://www.imdb.com/title/{{InfoComponent.info.imdb_code}}' target='_blank'>\n                    <md-icon>movie</md-icon>\n                    <span>Imdb</span>\n                </a>\n            </md-menu>\n            </div>\n        </md-card-header>\n        <img class=\"mainimg\" src=\"{{InfoComponent.info.medium_cover_image}}\" alt=\"{{InfoComponent.info.title}}\" fxFlex=\"40%\" fxFlex.xs=\"100%\">\n        <aside class=\"info\" fxFlex=\"60%\" fxFlex.xs=\"100%\">\n            <md-list>\n                <md-list-item>\n                    <md-icon md-list-avatar>star_rate</md-icon>\n                    <p>{{InfoComponent.info.rating}}</p>\n                </md-list-item>\n                <md-list-item>\n                    <md-icon md-list-avatar>date_range</md-icon>\n                    <p>{{InfoComponent.info.year}}</p>\n                </md-list-item>\n                <md-list-item>\n                    <md-icon md-list-avatar>watch_later</md-icon>\n                    <p>{{InfoComponent.info.runtime}} min</p>\n                </md-list-item>\n                <div class=\"chips\">        \n                    <md-chip-list>\n                        <md-chip *ngFor=\"let generos of InfoComponent.info.genres\">{{generos}}</md-chip>\n                    </md-chip-list>\n                </div>\n            </md-list>            \n        </aside>\n        <div class=\"clear\"></div>\n        <md-card-content class=\"sinopsis\">\n            <p>\n                {{InfoComponent.info.synopsis}}\n            </p>\n        </md-card-content>\n        <md-card-actions class=\"inicio\">\n            <a [routerLink]=\"['/']\" md-button>VOLVER AL INICIO</a>\n        </md-card-actions>\n    </md-card>\n</section>"

/***/ }),

/***/ 182:
/***/ (function(module, exports) {

module.exports = "<section class='container'>\n<md-card [routerLink]=\"['/info', item.slug, item.id]\" fxFlex=\"23%\" class=\"pointer\" fxFlex.xs=\"98%\" *ngFor=\"let item of SearcherComponent.result\">\n  <md-card-header>\n    <md-card-title>{{item.title.substr(0,20)}}</md-card-title>\n    <md-card-subtitle>\n        <md-icon class=\"rate\">star_rate</md-icon>\n        <span>{{item.rating}}</span>     \n    </md-card-subtitle>\n  </md-card-header>\n  <img md-card-image mdTooltip=\"{{item.title_long}}\" src=\"{{item.medium_cover_image}}\">\n \n</md-card>\n</section>\n\n"

/***/ }),

/***/ 183:
/***/ (function(module, exports) {

module.exports = "<md-spinner *ngIf=\"!dataloaded\"></md-spinner>\n<div *ngIf=\"dataloaded\" class=\"flex-container buscador\">\n    <md-input-container fxFlex=\"80%\">\n        <input mdInput placeholder=\"Buscar\" [(ngModel)]=\"SearcherComponent.typing\" (keyup)=\"onKey($event)\">\n    </md-input-container>\n</div>\n"

/***/ }),

/***/ 184:
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"primary\">\n  <a [routerLink]=\"['/']\" md-button><md-icon>remove_from_queue</md-icon> <span>TUFILMOTK</span></a>\n  <span class=\"spacer\"></span>\n  <a md-button class=\"iconbtn\" mdTooltip=\"Facebook\" href=\"https://www.facebook.com/tufilmoteca/\"><md-icon>share</md-icon></a>\n  <a md-button class=\"iconbtn\" mdTooltip=\"Github\" href=\"https://github.com/dannielarriola/tufilmotk\"><md-icon>code</md-icon></a>\n</md-toolbar>\n"

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(102);


/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DbService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DbService = (function () {
    function DbService(http) {
        this.http = http;
        this.urljson = 'movies.json?v=1.1';
    }
    DbService.prototype.getData = function () {
        return this.http.get(this.urljson)
            .map(this.extractData)
            .catch(this.handleError);
    };
    DbService.prototype.extractData = function (res) {
        return res.json() || {};
    };
    DbService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return DbService;
}());
DbService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], DbService);

var _a;
//# sourceMappingURL=db.service.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'tf-home',
        template: __webpack_require__(180),
        styles: [__webpack_require__(172)]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__db_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InfoComponent = InfoComponent_1 = (function () {
    function InfoComponent(route, dbservice) {
        this.route = route;
        this.dbservice = dbservice;
        this.datajson = {};
        this.dataloaded = false;
        this.InfoComponent = InfoComponent_1;
    }
    InfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            InfoComponent_1.id = +params['id'];
            InfoComponent_1.title = params['title'];
            _this.getRecord();
        });
    };
    InfoComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    InfoComponent.prototype.getRecord = function () {
        this.dbservice.getData()
            .subscribe(function (datajson) {
            __WEBPACK_IMPORTED_MODULE_3_lodash__["forEach"](datajson, function (item) {
                if (item.id == InfoComponent_1.id) {
                    InfoComponent_1.info = item;
                    console.log(item);
                    return false;
                }
            });
        });
    };
    return InfoComponent;
}());
InfoComponent.info = {};
InfoComponent = InfoComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'tf-info',
        template: __webpack_require__(181),
        styles: [__webpack_require__(173)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__db_service__["a" /* DbService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__db_service__["a" /* DbService */]) === "function" && _b || Object])
], InfoComponent);

var InfoComponent_1, _a, _b;
//# sourceMappingURL=info.component.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__db_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearcherComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearcherComponent = SearcherComponent_1 = (function () {
    function SearcherComponent(dbservice) {
        this.dbservice = dbservice;
        this.datajson = {};
        this.dataloaded = false;
        this.SearcherComponent = SearcherComponent_1;
    }
    SearcherComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    SearcherComponent.prototype.getData = function () {
        var _this = this;
        this.dbservice.getData()
            .subscribe(function (datajson) {
            var sortedData = __WEBPACK_IMPORTED_MODULE_2_lodash__["orderBy"](datajson, ['year', 'rating'], ['desc', 'desc']);
            _this.datajson = sortedData;
            _this.dataloaded = true;
            console.log(sortedData);
            var count = 1;
            __WEBPACK_IMPORTED_MODULE_2_lodash__["forEach"](_this.datajson, function (item) {
                if (count < 200) {
                    SearcherComponent_1.result.push(item);
                    count++;
                }
            });
        }, function (error) { return _this.errorMessage = error; });
    };
    SearcherComponent.prototype.onKey = function (event) {
        SearcherComponent_1.result = [];
        var count = 1;
        var txtSearch = SearcherComponent_1.typing.toLowerCase();
        if (txtSearch == '') {
            this.getData();
        }
        else {
            __WEBPACK_IMPORTED_MODULE_2_lodash__["forEach"](this.datajson, function (item) {
                if (count < 200 && txtSearch.length >= 2) {
                    if (item.title.toLowerCase().indexOf(txtSearch) !== -1 ||
                        item.title_english.toLowerCase().indexOf(txtSearch) !== -1 ||
                        item.title_long.toLowerCase().indexOf(txtSearch) !== -1 ||
                        item.imdb_code.toLowerCase().indexOf(txtSearch) !== -1 ||
                        item.title_english.toLowerCase().indexOf(txtSearch) !== -1 ||
                        item.year.toString() == txtSearch) {
                        SearcherComponent_1.result.push(item);
                        count++;
                    }
                }
                else {
                    return false;
                }
            });
        }
    };
    return SearcherComponent;
}());
SearcherComponent.typing = '';
SearcherComponent.result = [];
SearcherComponent = SearcherComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'tf-searcher',
        template: __webpack_require__(183),
        styles: [__webpack_require__(175)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__db_service__["a" /* DbService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__db_service__["a" /* DbService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__db_service__["a" /* DbService */]) === "function" && _a || Object])
], SearcherComponent);

var SearcherComponent_1, _a;
//# sourceMappingURL=searcher.component.js.map

/***/ })

},[226]);
//# sourceMappingURL=main.bundle.js.map