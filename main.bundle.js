webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Container (About Section) -->\n<div id=\"about\" class=\"container-fluid\" >\n  <div class=\"row\">\n    <div class=\"col-sm-8\">\n      <h2>My Education and Qualification</h2>\n      <div>\n        \n         <!-- <p>  -->\n          <ul><li> Software Engineering Technology Advanced Diploma, Centennial College, Toronto, Canada.</li>\n          <li>Electronics and Communication Engineering Degree, RGTUniversity, Bhopal, India.</li>\n          </ul> \n         \n          \n          <!-- </p> -->\n\n\n          <p>\n            I greatly enjoy breathing fresh air, playing, exploring, driving, brainstorming new ideas and implementing thoughts into reality. \n            I am luck to be in software engineering where i can bring my skills in mathematics, technologist enthusiast, and artistic to contribute during application development.     \n            At my current job, I started out as a front-end developer. I have developed web-based applications from design to coding and fully implemented my solutions by working collaboratively with professionals. I have consistently produced a terrific solution within SaskTel deliverables time frames. I am a self-starter, therefore, staying up-to-date with all technological advancements. I did exceptionally well in C++ language when I was in high school. I have a passion for technology which will make me continue to learn more advanced technology. I have good organizational abilities and the capability to address time management. I am a good study, diligent worker and learn required tasks quickly. I have had the opportunity to work independently and as a member of a team or group, integrating my abilities and skills whenever I had the chance. My Colleagues have complimented me with the title “Rock Star of The Week”. I have a good relationship with my team and they are delighted to recommend me for future opportunities. I like adventure, traveling and exploring the culture. I am a good drawing artist. \n\n          </p>\n          <!-- <ul>\n          <li><p>Experienced in developing applications, prioritize task and manage workloads.</p></li>\n          <li><p>Strong analytical and problem-solving abilities. Quick learner with minimal supervision.</p></li>\n          <li><p>Strong written, visual and oral communications, own task with responsibility.\t </p></li>\n          <li><p>Attention to details, eager to learn new technology, initiative, proactively think new ideas.</p></li>\n          <li><p>Quickly grasp complex software system workflow and possess good documentation.</p></li>\n          <li><p>Enjoy my work, ambitious, quickly adapt to fast pace environment, fearless troubleshoot. </p></li>\n          <li><p>Good customer rapport building and collaboratively work with team and independently.</p></li>\n          <li><p>I love to share education with my peers. I leverage team spirit and individual performance.</p></li>\n          <li><p>I am technology enthusiast and fun loving person, my understanding on coding is language independent. </p></li> \n          <li><p> I love to learn new technology with the changing business needs.</p></li>      \n         \n    \n        </ul> -->\n      </div>\n      \n    \n    </div>\n    <div class=\"col-sm-4\" style=\"text-align:center\">\n      <span class=\"glyphicon glyphicon-education logo\"></span>\n    </div>\n  </div>\n\n\n\n  <!-- <div class=\"row\">\n    <div class=\"col-sm-4\">\n      <span class=\"glyphicon glyphicon-globe logo slideanim\"></span>\n    </div>\n    <div class=\"col-sm-8\">\n\n    </div>\n  </div> -->\n</div>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
        this.isCollapsed = true;
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("./src/app/about/about.component.html"),
            styles: [__webpack_require__("./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n  <title>{{title}}</title>\n  <div  id=\"test\" >\n    \n  <app-header (tabSelected)=\"onNavigate($event)\"></app-header>\n  <div id=\"bodyDiv\" (click)=\"onClickbody()\" >\n  <!-- <router-outlet ></router-outlet> -->\n\n<app-about *ngIf=\"tabSelected ==='about'\"></app-about>\n<app-tutorials *ngIf=\"tabSelected ==='tutorials'\"></app-tutorials>\n<app-testimonial *ngIf=\"tabSelected ==='testimonial'\"></app-testimonial>\n\n<app-contact *ngIf=\"tabSelected ==='contact'\"></app-contact>\n</div>\n<footer class=\"navbar-fixed-bottom text-center\">\n <!--href=\"#myPage\" title=\"To Top\">\n    <span class=\"glyphicon glyphicon-chevron-up\"></span>\n  </a>-->\n  <p>{{author}} </p>\n</footer>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("./src/app/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(_appService) {
        this._appService = _appService;
        this.title = 'hello from angular app';
        this.author = '© 2018 by Avneet Singh. ';
        this.tabSelected = 'about';
    }
    AppComponent.prototype.ngOnInit = function () {
        // this._appService.sayHello()
        //   .subscribe(
        //   result => {
        //     alert(result.region_code);
        //   }
        //   );
    };
    AppComponent.prototype.onNavigate = function (tab) {
        this.tabSelected = tab;
    };
    AppComponent.prototype.onClickbody = function () {
        var el = document.getElementById('myNavbar');
        // var navEl = document.getElementById('navClass');
        el.setAttribute("style", "display:none;");
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_carouselamos__ = __webpack_require__("./node_modules/ng2-carouselamos/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_service__ = __webpack_require__("./src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tutorials_tutorials_component__ = __webpack_require__("./src/app/tutorials/tutorials.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__testimonial_testimonial_component__ = __webpack_require__("./src/app/testimonial/testimonial.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__contact_contact_component__ = __webpack_require__("./src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__testimonial_slides_slides_component__ = __webpack_require__("./src/app/testimonial/slides/slides.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__testimonial_vote_vote_component__ = __webpack_require__("./src/app/testimonial/vote/vote.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__testimonial_game1_game1_component__ = __webpack_require__("./src/app/testimonial/game1/game1.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














// import { appRoutiingModule } from './app-routing.module';

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_8__tutorials_tutorials_component__["a" /* TutorialsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_10__testimonial_testimonial_component__["a" /* TestimonialComponent */],
                __WEBPACK_IMPORTED_MODULE_11__contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_12__testimonial_slides_slides_component__["a" /* SlidesComponent */],
                __WEBPACK_IMPORTED_MODULE_13__testimonial_vote_vote_component__["a" /* VoteComponent */],
                __WEBPACK_IMPORTED_MODULE_14__testimonial_game1_game1_component__["a" /* Game1Component */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3_ng2_carouselamos__["a" /* Ng2CarouselamosModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__app_service__["a" /* AppService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Import RxJs required methods


var AppService = /** @class */ (function () {
    // Resolve HTTP using the constructor
    function AppService(_http) {
        this._http = _http;
        // private greetUrl = 'https://calm-ocean-26841.herokuapp.com/list_pets';
        // private greetUrl = 'https://singhavneet.000webhostapp.com/vote/api.php/?party=Conservative&month=may&email=';
        this.greetUrl = 'https://freegeoip.net/json/';
    }
    AppService.prototype.sayHello = function () {
        return this._http.get(this.greetUrl).map(function (response) {
            return response.json();
        });
    };
    AppService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Container (Contact Section) -->\n<div id=\"contact\" class=\"container-fluid bg-grey\"><br>\n  <h2 class=\"text-center\">CONTACT</h2>\n  <div class=\"row\">\n    <div class=\"col-sm-5\">\n     \n      <p><span class=\"glyphicon glyphicon-map-marker\"></span> {{province}}, CANADA</p>\n      <p><span class=\"glyphicon glyphicon-phone\"></span> <a href=\"tel:{{tel}}\">{{tel}}</a></p>\n      <p><span class=\"glyphicon glyphicon-envelope\"></span> avneet_kochhar0173@hotmail.com</p>\n<!-- <p><span class=\"glyphicon glyphicon-earphone\"></span>gurvinderptk</p> -->\n    </div>\n    <div class=\"col-sm-7 slideanim iframContainer\" >\n    \n      <iframe id=\"myiframe\" scrolling=\"no\" width=\"100%\" height=\"315\" src=\"https://singhavneet.000webhostapp.com/\" frameborder=\"0\" allowfullscreen></iframe>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("./src/app/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactComponent = /** @class */ (function () {
    function ContactComponent(_appService) {
        this._appService = _appService;
        this.tel = '';
        this.province = '';
    }
    ContactComponent.prototype.ngOnInit = function () {
        var _this = this;
        var el = document.getElementById('contact');
        this._appService.sayHello()
            .subscribe(function (result) {
            _this.province = result.region_name;
            switch (result.region_code) {
                case "SK":
                    _this.tel = "3065024823";
                    break;
                case "AB":
                    _this.tel = "5872870207";
                    break;
                case "BC":
                    _this.tel = "7786505198";
                    break;
            }
        });
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("./src/app/contact/contact.component.html"),
            styles: [__webpack_require__("./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container\">\n      <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n          <ul class=\"nav navbar-nav navbar-right\">\n            <li class=\"navClass\"      [ngClass]=\"{active: clickMessage === 'about'}\"  ><a class=\"tabClass\"  (click)=\"onClickLink('about')\" >ABOUT</a></li>\n            <li class=\"navClass\"  [ngClass]=\"{active: clickMessage === 'tutorials'}\" ><a class=\"tabClass\"  (click)=\"onClickLink('tutorials')\">PROFESSIONAL</a></li>\n            <li class=\"navClass\"  [ngClass]=\"{active: clickMessage === 'testimonial'}\" ><a class=\"tabClass\"  (click)=\"onClickLink('testimonial')\">PORTFOLIO</a></li>\n            <li class=\"navClass\" [ngClass]=\"{active: clickMessage === 'contact'}\"  ><a class=\"tabClass\"  (click)=\"onClickLink('contact')\">CONTACT</a></li>\n          </ul>\n        </div>\n    <div  class=\"navbar-header\" id=\"nav-barId\">\n      <button type=\"button\" (click)=\"onClickMe()\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>                        \n      </button>\n      <!-- <a class=\"navbar-brand\" href=\"#about\" (click)=\"onSelect('about')\">Logo</a> -->\n    </div>\n  \n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.clickMessage = 'about';
        this.tabSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
    }
    // navbar-header
    HeaderComponent.prototype.onClickMe = function () {
        var nav = document.getElementById('nav-barId');
        var el = document.getElementById('myNavbar');
        el.setAttribute("style", "display:block;");
        nav.setAttribute("style", "display:none;");
    };
    HeaderComponent.prototype.onClickLink = function (tabNAme) {
        var nav = document.getElementById('nav-barId');
        var el = document.getElementById('myNavbar');
        el.setAttribute("style", "display:none;");
        nav.setAttribute("style", "display:block;");
        this.clickMessage = tabNAme;
        this.tabSelected.emit(tabNAme);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], HeaderComponent.prototype, "tabSelected", void 0);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.scss")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/testimonial/game1/game1.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  game1 works!\n</p>\n<!-- <img id=\"scream\" width=\"220\" height=\"277\" alt=\"The Scream\"\nsrc=\"http://lofrev.net/wp-content/photos/2017/05/Online_logo_2.png\"> -->\n<!-- src=\"/src/assets/images/games/game1/hero/hell1.png\" alt=\"The Scream\"> -->\n\n<div id=\"game-area\" width=\"100%\"></div>\n\n<!-- <canvas id=\"myCanvas\" width=\"240\" height=\"297\"\nstyle=\"border:1px solid #d3d3d3;\">\nYour browser does not support the HTML5 canvas tag.\n</canvas> -->"

/***/ }),

/***/ "./src/app/testimonial/game1/game1.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/testimonial/game1/game1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Game1Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Game1Component = /** @class */ (function () {
    function Game1Component() {
    }
    Game1Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-game1',
            template: __webpack_require__("./src/app/testimonial/game1/game1.component.html"),
            styles: [__webpack_require__("./src/app/testimonial/game1/game1.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Game1Component);
    return Game1Component;
}());



/***/ }),

/***/ "./src/app/testimonial/slides/slides.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">                  \n    <input name=\"slider\" *ngFor=\"let item of model,let i=index\" id=\"slide{{i+1}}\" type=\"radio\" [checked]=\" i==0\" >                 \n   <div class=\"slider-wrapper\">\n    <div class=\"inner\">                    \n           <ng-container *ngFor=\"let item of model\"> \n              <article >        \n              <div class=\"info bottom-left\">\n                  <!-- <a href=\"{{ item.url}}\">link</a> -->\n                  </div>\n                <img src=\"{{item.img}}\"  height=\"auto\" class=\"img-fluid\" alt=\"Responsive image\">\n                <!-- width=\"50%\" height=\"380\" -->\n               \n              </article>         \n          </ng-container> \n    </div>                   \n  </div>\n                   \n  <div class=\"slider-prev-next-control\">\n      <label  *ngFor=\"let item of model,let i=index\" for=\"slide{{i+1}}\"  (click)=\"emitIndex(i)\"></label>                     \n    </div>                                      \n    <div class=\"slider-dot-control\">\n        <label  *ngFor=\"let item of model,let i=index\" for=\"slide{{i+1}}\" (click)=\"emitIndex(i)\"></label>          \n    </div> \n    \n\n\n  </div>\n\n"

/***/ }),

/***/ "./src/app/testimonial/slides/slides.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlidesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SlidesComponent = /** @class */ (function () {
    function SlidesComponent() {
        this.indexEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
    }
    SlidesComponent.prototype.ngOnInit = function () {
    };
    SlidesComponent.prototype.emitIndex = function (index) {
        this.indexEmitter.emit(index);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], SlidesComponent.prototype, "indexEmitter", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Array)
    ], SlidesComponent.prototype, "model", void 0);
    SlidesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-slides',
            template: __webpack_require__("./src/app/testimonial/slides/slides.component.html"),
            styles: [__webpack_require__("./src/app/testimonial/testimonial.component.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], SlidesComponent);
    return SlidesComponent;
}());



/***/ }),

/***/ "./src/app/testimonial/testimonial.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Container Testimonials Section) -->\n<div id=\"Testimonials\" class=\"container-fluid text-center \" >\n    <h2>My Work Samples</h2>\n  \n  \n    \n    <div class=\"testimonialContainer\">\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <div class=\"tab\" role=\"tabpanel\">\n                        <!-- Nav tabs -->\n                        <ul class=\"nav nav-tabs\" role=\"tablist\">\n                            <li role=\"presentation\"  [ngClass]=\"{active: workItem==='images'}\"><a (click)=\"onClickWorkFile('images')\" aria-controls=\"images\" role=\"tab\" data-toggle=\"tab\">Samples</a></li>\n                            <li role=\"presentation\"  [ngClass]=\"{active: workItem==='php'}\"><a (click)=\"onClickWorkFile('php')\" aria-controls=\"php\" role=\"tab\" data-toggle=\"tab\">PHP</a></li>\n                            <li role=\"presentation\"  [ngClass]=\"{active: workItem==='games'}\"><a (click)=\"onClickWorkFile('games')\" aria-controls=\"games\" role=\"tab\" data-toggle=\"tab\">Games</a></li>\n                            <li role=\"presentation\"  [ngClass]=\"{active: workItem==='node'}\"><a (click)=\"onClickWorkFile('node')\" aria-controls=\"node\" role=\"tab\" data-toggle=\"tab\">NodeJs</a></li>\n                        </ul>\n                        <!-- Tab panes -->\n                        <div class=\"tab-content tabs\" style=\"padding:0\">\n                            <div role=\"tabpanel\"  class=\"tab-pane fade \" [ngClass]=\"{'active in' : workItem==='images'}\">\n                               <br>\n                                    <!-- <div  class=\"\"> -->\n                                       \n                                            <div class=\" col-md-3 col-sm-12 col-xs-12\"> <!-- required for floating -->\n                                              <!-- Nav tabs -->\n                                              <ul class=\"nav nav-tabs sampleTabs tabs-left\">            \n                                                  <li  class=\" col-md-12  \"   *ngFor=\"let item of items,let i=index\"\n                                                  [ngClass]=\"{active: graphItem == item.app[0].name}\" >\n                                                  <a class=\"tabClass\"  (click)=\"onSelect(item.app[0].name)\">{{item.app[0].name}} </a></li>\n                                              </ul> \n                                            </div>\n                                          \n                                            <div class=\"col-md-7 col-sm-12 col-xs-12\">\n                                              <!-- Tab panes -->\n                                              <div >\n                                                  <app-slides (indexEmitter)=\"instantiateIndex($event)\" [model]=\"items[choosenItem].app\" ></app-slides>\n                                                  <!-- <ng-container *ngFor=\"let item of items,let i=index\">\n                                                  <app-slides  [model]=\"item.app\" *ngIf=\"selectedItem ===item.app[0].name\"></app-slides>        \n                                               </ng-container> -->\n                                              \n                                          \n                                              </div>\n                                              <a class=\"blink_me\" href=\"{{ items[choosenItem].app[index].url}}\">Click Here</a>\n                                        <h4>This slide show is a perfect example of using angular tools and see <strong>HOW</strong></h4>         \n                                          \n                                        <p>A single child component is being shared by all the {{items.length}} project tabs.</p>\n                                        <p>Structural directives manipulating HTML layout.</p>   \n                                         <p>\"ng-container\" plays a role to group image elements using NgIf, NgFor built-in directives.</p>\n                                         \n                                         <p>Custom structural directive use to perform click events.\t </p>\n                                         <p>Property binding to give the parent control over the child component.</p>\n                                         <p>@Input decorator to make the property available for binding by the child component.</p>\n                                        \n                                         \n                                            </div>\n                                          \n                                            <div class=\"clearfix\"></div> \n                                          <!-- </div>   -->\n                                        \n                            \n                            </div>\n                            <div role=\"tabpanel\" class=\"tab-pane fade myiframe2\" [ngClass]=\"{'active in' : workItem==='php'}\">\n                                    <!-- <div  class=\"\"> -->\n                                                   <br>             \n                                        <!-- <div   *ngIf=\"workItem ==='php'\" class=\"\"> -->\n                                               \n                                                <div class=\" col-md-3 col-sm-12 col-xs-12\"> <!-- required for floating -->\n                                                <div class=\" slideanim iframContainer\" >\n                                            \n                                                    <iframe id=\"myiframe\" scrolling=\"no\" width=\"100%\" height=\"380\" src=\"https://singhavneet.000webhostapp.com/vote/create.php\" frameborder=\"0\" allowfullscreen></iframe>\n                                                    <hr>\n                                                    </div>\n                                                </div>\n                                            \n                                                <div  *ngIf=\"workItem ==='php'\" class=\"col-md-7 col-sm-12 col-xs-12\">\n                                                    <!-- [ngClass]=\"{active: selectItem === 'barGraph'}\" -->\n                                                    <button class=\"navClass tablink  col-md-6 col-sm-12\"  [ngClass]=\"{active: graphChoosen === 0}\" (click)=\"onSelect('barGraph')\">Status</button>\n                                                    <button class=\"navClass tablink  col-md-6 col-sm-12\" [ngClass]=\"{active: graphChoosen === 1}\" (click)=\"onSelect('dashBoard')\">Dash Board</button> \n                                                    \n                                                    \n                                                    \n                                                    <div   *ngIf=\"graphChoosen === 0\">         \n                                                            <app-vote [modell]=\"graphitems[graphChoosen].url\"  ></app-vote>\n                                                            </div>\n                                                    <div  *ngIf=\"graphChoosen === 1\">         \n                                                                <app-vote [modell]=\"graphitems[graphChoosen].url\"  ></app-vote>\n                                                                </div>\n                                                            <!-- <app-vote [modell]=\"url2\" *ngIf=\"graphItem ===dashBoard\"></app-vote>   -->\n                                                                                            \n                                                    \n                                                    \n                                                    \n                                                \n                                                    <h4>This is a real time voting survey application and see <strong>HOW</strong></h4>       \n                                            \n                                                    <p>Graph data point changes after each voting.</p>\n                                                    <p>User can't cast vote twice in a month.  </p>               \n                                                    <p>Fake input emails filteration implemented at front-end and back-end layer.</p>\n                                                    <p>Capable of recording number of vote per month in every year.</p>\n                                                    \n                                                    <hr>\n                                                    </div>\n                                            <!-- </div> -->\n      \n                                    <!-- </div> -->\n                            </div>\n                            <div role=\"tabpanel\" class=\"tab-pane fade\" *ngIf=\"workItem === 'games'\" [ngClass]=\"{'active in' : workItem==='games'}\">\n                                \n                                            <br>\n                                                 <!-- <div  class=\"\"> -->\n                                                    \n                                                         <div class=\" col-md-3 col-sm-12 col-xs-12\"> <!-- required for floating -->\n                                                           <!-- Nav tabs -->\n                                                           <ul class=\"nav nav-tabs sampleTabs tabs-left\">            \n                                                               <li  class=\" col-md-12  \"   *ngFor=\"let item of gamesitems,let i=index\"\n                                                               [ngClass]=\"{active: gameChoosen === i}\" >\n                                                               <a class=\"tabClass\"  (click)=\"onSelect(item.name)\">{{item.name}} </a></li>\n                                                           </ul> \n                                                         </div>\n                                                       \n                                                         <div class=\"col-md-7 col-sm-12 col-xs-12\">\n                                                           <!-- Tab panes -->\n                                                           <div    *ngIf=\"gameChoosen === 0\">         \n                                                                <a href=\"http://dexterlab.co.vu\"  >\n                                                                <img src=\"assets/images/games/game1/banner.PNG\"  height=\"auto\" class=\"img-fluid\" alt=\"Responsive image\">\n                                                           </a>\n                                                            </div>\n                                                         <div  *ngIf=\"gameChoosen === 1\">         \n                                                                <img src=\"assets/images/games/game1/banner.png\"  height=\"auto\" class=\"img-fluid\" alt=\"Responsive image\">\n      \n                                                        </div>\n                                                                                                \n                                         </div>\n                           \n                        </div>\n                        <div role=\"tabpanel\"  class=\"tab-pane fade \"  *ngIf=\"workItem ==='node'\" [ngClass]=\"{'active in' : workItem==='node'}\">\n                                <br>\n                               \n                                <!-- <div class=\"col-md-12 col-sm-12 col-xs-12 \">\n\n                                <button class=\"navClass tablink  col-md-6 col-sm-12\"  [ngClass]=\"{active: nodeChoosen === 0}\" (click)=\"onSelect('mgt')\">EmployeeManagerApp</button>\n                                <button class=\"navClass tablink  col-md-6 col-sm-12\" [ngClass]=\"{active: nodeChoosen === 1}\" (click)=\"onSelect('pet')\">PetWeatherApp</button> \n                            </div>   -->\n<!--                            \n                                <div  *ngIf=\"nodeChoosen ===0\" class=\"col-md-12 col-sm-12 col-xs-12\">\n                                        <iframe  class=\"myiframe2\" scrolling=\"no\" height=\"580px\" width=\"100%\"  src=\"https://company-look-up.herokuapp.com/\" frameborder=\"0\" allowfullscreen></iframe>\n                                                                         \n                      </div>\n                      <div  *ngIf=\"nodeChoosen ===1\" class=\"col-md-12 col-sm-12 col-xs-12\">\n                            <iframe  class=\"myiframe2\" scrolling=\"yes\" height=\"580px\" width=\"100%\"  src=\"https://calm-ocean-26841.herokuapp.com/\" frameborder=\"0\" allowfullscreen></iframe>\n                                                                 \n          </div> -->\n\n                                </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n       \n  \n  </div>\n  "

/***/ }),

/***/ "./src/app/testimonial/testimonial.component.scss":
/***/ (function(module, exports) {

module.exports = "/*---- NUMBER OF SLIDE CONFIGURATION ----*/\n.wrapper {\n  max-width: 60em;\n  margin: 1em auto;\n  position: relative; }\ninput {\n  display: none; }\n.inner {\n  width: 500%;\n  line-height: 0; }\narticle {\n  width: 20%;\n  float: left;\n  position: relative; }\narticle img {\n  width: 100%; }\n/*---- SET UP CONTROL ----*/\n.slider-prev-next-control {\n  height: 50px;\n  position: absolute;\n  top: 50%;\n  width: 100%;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%); }\n.slider-prev-next-control label {\n  display: none;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: #2d7e91;\n  opacity: 0.7; }\n.slider-prev-next-control label:hover {\n  opacity: 1; }\n.slider-dot-control {\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n  text-align: center; }\n.slider-dot-control label {\n  cursor: pointer;\n  border-radius: 5px;\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  background: #bbb;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s; }\n.slider-dot-control label:hover {\n  background: #ccc;\n  border-color: #777; }\n/* Info Box */\n.info {\n  position: absolute;\n  font-style: italic;\n  line-height: 20px;\n  opacity: 0;\n  color: #000;\n  text-align: left;\n  -webkit-transition: all 1000ms ease-out 600ms;\n  transition: all 1000ms ease-out 600ms; }\n.info h3 {\n  color: #fcfff4;\n  margin: 0 0 5px;\n  font-weight: normal;\n  font-size: 1.5em;\n  font-style: normal; }\n.info.top-left {\n  top: 30px;\n  left: 30px; }\n.info.top-right {\n  top: 30px;\n  right: 30px; }\n.info.bottom-left {\n  bottom: 0px;\n  right: 150px; }\n.info.bottom-right {\n  bottom: 30px;\n  right: 30px; }\n/* Slider Styling */\n.slider-wrapper {\n  width: 100%;\n  overflow: hidden;\n  border-radius: 5px;\n  -webkit-box-shadow: 1px 1px 4px #666;\n          box-shadow: 1px 1px 4px #666;\n  background: #fff;\n  background: #fcfff4;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-transition: all 500ms ease-out;\n  transition: all 500ms ease-out; }\n.slider-wrapper .inner {\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-transition: all 800ms cubic-bezier(0.77, 0, 0.175, 1);\n  transition: all 800ms cubic-bezier(0.77, 0, 0.175, 1); }\n/*---- SET POSITION FOR SLIDE ----*/\n#slide1:checked ~ .slider-prev-next-control label:nth-child(2)::after, #slide2:checked ~ .slider-prev-next-control label:nth-child(3)::after, #slide3:checked ~ .slider-prev-next-control label:nth-child(4)::after, #slide4:checked ~ .slider-prev-next-control label:nth-child(5)::after, #slide5:checked ~ .slider-prev-next-control label:nth-child(1)::after, #slide2:checked ~ .slider-prev-next-control label:nth-child(1)::after, #slide3:checked ~ .slider-prev-next-control label:nth-child(2)::after, #slide4:checked ~ .slider-prev-next-control label:nth-child(3)::after, #slide5:checked ~ .slider-prev-next-control label:nth-child(4)::after, #slide1:checked ~ .slider-prev-next-control label:nth-child(5)::after {\n  font-family: FontAwesome;\n  font-style: normal;\n  font-weight: normal;\n  text-decoration: inherit;\n  margin: 0;\n  line-height: 38px;\n  font-size: 3em;\n  display: block;\n  color: #777; }\n#slide1:checked ~ .slider-prev-next-control label:nth-child(2)::after, #slide2:checked ~ .slider-prev-next-control label:nth-child(3)::after, #slide3:checked ~ .slider-prev-next-control label:nth-child(4)::after, #slide4:checked ~ .slider-prev-next-control label:nth-child(5)::after, #slide5:checked ~ .slider-prev-next-control label:nth-child(1)::after {\n  content: \"\\f105\";\n  padding-left: 15px; }\n#slide1:checked ~ .slider-prev-next-control label:nth-child(2), #slide2:checked ~ .slider-prev-next-control label:nth-child(3), #slide3:checked ~ .slider-prev-next-control label:nth-child(4), #slide4:checked ~ .slider-prev-next-control label:nth-child(5), #slide5:checked ~ .slider-prev-next-control label:nth-child(1) {\n  display: block;\n  float: right;\n  margin-right: 5px; }\n#slide2:checked ~ .slider-prev-next-control label:nth-child(1), #slide3:checked ~ .slider-prev-next-control label:nth-child(2), #slide4:checked ~ .slider-prev-next-control label:nth-child(3), #slide5:checked ~ .slider-prev-next-control label:nth-child(4), #slide1:checked ~ .slider-prev-next-control label:nth-child(5) {\n  display: block;\n  float: left;\n  margin-left: 5px; }\n#slide2:checked ~ .slider-prev-next-control label:nth-child(1)::after, #slide3:checked ~ .slider-prev-next-control label:nth-child(2)::after, #slide4:checked ~ .slider-prev-next-control label:nth-child(3)::after, #slide5:checked ~ .slider-prev-next-control label:nth-child(4)::after, #slide1:checked ~ .slider-prev-next-control label:nth-child(5)::after {\n  content: \"\\f104\";\n  padding-left: 8px; }\n#slide1:checked ~ .slider-dot-control label:nth-child(1), #slide2:checked ~ .slider-dot-control label:nth-child(2), #slide3:checked ~ .slider-dot-control label:nth-child(3), #slide4:checked ~ .slider-dot-control label:nth-child(4), #slide5:checked ~ .slider-dot-control label:nth-child(5) {\n  background: #333; }\n#slide1:checked ~ .slider-wrapper article:nth-child(1) .info, #slide2:checked ~ .slider-wrapper article:nth-child(2) .info, #slide3:checked ~ .slider-wrapper article:nth-child(3) .info, #slide4:checked ~ .slider-wrapper article:nth-child(4) .info, #slide5:checked ~ .slider-wrapper article:nth-child(5) .info {\n  opacity: 1; }\n#slide1:checked ~ .slider-wrapper .inner {\n  margin-left: 0%; }\n#slide2:checked ~ .slider-wrapper .inner {\n  margin-left: -100%; }\n#slide3:checked ~ .slider-wrapper .inner {\n  margin-left: -200%; }\n#slide4:checked ~ .slider-wrapper .inner {\n  margin-left: -300%; }\n#slide5:checked ~ .slider-wrapper .inner {\n  margin-left: -400%; }\n.nav-tabs li a:hover {\n  cursor: pointer; }\n.iframContainer {\n  width: 100%; }\n.tab-content #myiframe2 {\n  height: 400px; }\n/* Style tab links */\n.tablink {\n  background-color: #e7e7e7;\n  color: #2d7e91;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  padding: 10px;\n  font-size: 17px; }\n.tablink:hover {\n  background-color: #2d7e91;\n  color: #e7e7e7; }\nbutton.navClass.tablink.active {\n  background-color: #2d7e91;\n  color: #e7e7e7; }\n.testimonialContainer a:hover, .testimonialContainer a:focus {\n  outline: none;\n  text-decoration: none; }\n.testimonialContainer .tab .nav-tabs {\n  background: #fff; }\n.testimonialContainer .tab .nav-tabs li {\n  text-align: center;\n  margin-right: 3px; }\n.testimonialContainer .tab .nav-tabs li a {\n  font-size: 12px;\n  color: #22272c;\n  padding: 15px 25px;\n  background: #cecccc;\n  margin-right: 0;\n  border-radius: 0;\n  border: none;\n  text-transform: uppercase;\n  position: relative;\n  -webkit-transition: all 0.5s ease 0s;\n  transition: all 0.5s ease 0s; }\n.testimonialContainer .nav-tabs li.active a,\n.testimonialContainer .nav-tabs li a:hover {\n  background: #2d7e91 !important;\n  color: #fff !important;\n  border: none; }\n.testimonialContainer .sampleTabs li a {\n  background: #eee !important;\n  color: #2d7e91 !important; }\n.testimonialContainer .sampleTabs li.active a,\n.testimonialContainer .sampleTabs li a:hover {\n  background: #cecccc !important; }\n.tab .tab-content {\n  font-size: 15px;\n  color: #3d3537;\n  line-height: 30px;\n  padding: 30px 40px; }\n.blink_me {\n  -webkit-animation: blinker 1s linear infinite;\n          animation: blinker 1s linear infinite;\n  font-weight: bold;\n  font-size: 1.5em; }\n@-webkit-keyframes blinker {\n  50% {\n    opacity: 0; } }\n@keyframes blinker {\n  50% {\n    opacity: 0; } }\n@media only screen and (max-width: 480px) {\n  .tab .nav-tabs li {\n    width: 100%; } }\n/*---- TABLET ----*/\n@media only screen and (max-width: 850px) and (min-width: 450px) {\n  .slider-wrapper {\n    border-radius: 0; } }\n/*---- MOBILE----*/\n@media only screen and (max-width: 450px) {\n  .slider-wrapper {\n    border-radius: 0; }\n  .slider-wrapper .info {\n    opacity: 0; } }\n/*----------Desktop---*/\n@media only screen and (min-width: 786px) {\n  .tab-content #myiframe2 {\n    height: 580px; } }\n@media only screen and (min-width: 850px) {\n  body {\n    padding: 0 80px; } }\n.myiframe2 {\n  height: 380px;\n  margin-bottom: 1em; }\n@media screen and (min-width: 690px) {\n    .myiframe2 {\n      height: 420px; } }\n@media screen and (min-width: 769px) {\n    .myiframe2 {\n      height: 490px; } }\n@media screen and (min-width: 1450px) {\n    .myiframe2 {\n      height: 630px; } }\n"

/***/ }),

/***/ "./src/app/testimonial/testimonial.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestimonialComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestimonialComponent = /** @class */ (function () {
    function TestimonialComponent() {
        this.prepaidUrl = 'https://www.sasktel.com/Accolade/Login.do#!';
        this.prepaidUrl2 = 'https://www.sasktel.com/Accolade/LoadCustomerProfile.do';
        this.prepaidUrl3 = 'https://www.beanstream.com/secure/sasktelprepaid/prepaid-one-time-topup.html?ordPhoneNumber=';
        this.sasktelUrl = 'https://www.sasktel.com/personal/internet/internet-compare';
        this.gitUrlJ2EE = 'https://github.com/singhAvneet/OnlinePizzaService';
        this.gitUrlgame = 'https://github.com/singhAvneet/WarCry-2Dgame';
        this.gitUrlgame1 = 'https://github.com/singhAvneet/Game1Project';
        this.gitUrlng = 'https://github.com/singhAvneet/NodeJsSampleApp';
        this.items = [];
        this.gamesArray = [];
        this.choosenItem = 0;
        this.workItem = 'images';
        this.graphitems = [];
        this.gamesitems = [];
        this.graphChoosen = 0;
        this.nodeChoosen = 0;
        this.gameChoosen = 0;
        this.graphItem = 'Front-End';
        this.urlApi = 'https://singhavneet.000webhostapp.com/vote/api.html';
        this.url2 = 'https://singhavneet.000webhostapp.com/vote/monthGraph.html';
        this.urlGame0 = 'assets/images/sasktel/sask1.png';
        this.urlGame1 = 'assets/images/sasktel/sask3.png';
        this.index = 0;
        this.graphitems = [{ url: this.urlApi }, { url: this.url2 }];
        this.gamesitems = [
            { name: 'WarCry', url: this.urlGame0 },
            { name: 'RaceCry', url: this.urlGame1 }
        ];
        // this.gamesitems=[{url:this.urlApi},{url:this.url2}];
        this.items = [
            {
                app: [
                    { name: 'Front-End', img: 'assets/images/sasktel/sask1.png', url: this.sasktelUrl },
                    { name: 'Sasktel', img: 'assets/images/sasktel/sask2.png', url: this.prepaidUrl },
                    { name: 'Sasktel', img: 'assets/images/sasktel/sask3.png', url: this.prepaidUrl2 },
                    { name: 'Sasktel', img: 'assets/images/sasktel/sask4.png', url: this.prepaidUrl3 },
                ]
            },
            { app: [
                    { name: 'J2EE', img: 'assets/images/jee/jee1.png', url: this.gitUrlJ2EE },
                    { name: 'J2EE1', img: 'assets/images/jee/jee2.png', url: this.gitUrlJ2EE },
                    { name: 'J2EE', img: 'assets/images/jee/jee3.png', url: this.gitUrlJ2EE }
                ] },
            {
                app: [
                    { name: 'AngularJS', img: 'assets/images/angularjs/ng1.png', url: this.gitUrlng },
                    { name: 'angularjs', img: 'assets/images/angularjs/ng2.png', url: this.gitUrlng },
                ]
            },
            {
                app: [
                    { name: 'C#', img: 'assets/images/csharp/game1.png', url: this.gitUrlgame1 },
                    { name: 'csharp', img: 'assets/images/csharp/game2.png', url: this.gitUrlgame1 },
                    { name: 'csharp', img: 'assets/images/csharp/game3.png', url: this.gitUrlgame },
                ]
            },
        ];
    }
    TestimonialComponent.prototype.ngOnInit = function () {
    };
    TestimonialComponent.prototype.onClickWorkFile = function (tab) {
        this.workItem = tab;
    };
    TestimonialComponent.prototype.onSelect = function (tab) {
        this.graphItem = tab;
        this.index = 0;
        switch (tab) {
            case "Front-End": {
                this.choosenItem = 0;
                break;
            }
            case "J2EE": {
                this.choosenItem = 1;
                break;
            }
            case "AngularJS": {
                this.choosenItem = 2;
                break;
            }
            case "C#": {
                this.choosenItem = 3;
                break;
            }
            case "barGraph": {
                this.graphChoosen = 0;
                break;
            }
            case "dashBoard": {
                this.graphChoosen = 1;
                break;
            }
            case "WarCry": {
                this.gameChoosen = 0;
                break;
            }
            case "RaceCry": {
                this.gameChoosen = 1;
                break;
            }
            case "mgt": {
                this.nodeChoosen = 0;
                break;
            }
            case "pet": {
                this.nodeChoosen = 1;
                break;
            }
            default: {
                console.log("Invalid choice");
                break;
            }
        }
    };
    TestimonialComponent.prototype.instantiateIndex = function (index) {
        this.index = index;
    };
    TestimonialComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-testimonial',
            template: __webpack_require__("./src/app/testimonial/testimonial.component.html"),
            styles: [__webpack_require__("./src/app/testimonial/testimonial.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TestimonialComponent);
    return TestimonialComponent;
}());



/***/ }),

/***/ "./src/app/testimonial/vote/vote.component.html":
/***/ (function(module, exports) {

module.exports = "<iframe class=\"myiframe2\" scrolling=\"no\" height=\"580px\" width=\"100%\"  src=\"\" frameborder=\"0\" allowfullscreen></iframe>\n"

/***/ }),

/***/ "./src/app/testimonial/vote/vote.component.scss":
/***/ (function(module, exports) {

module.exports = ".myiframe2 {\n  height: 380px;\n  margin-bottom: 1em; }\n  @media screen and (min-width: 690px) {\n    .myiframe2 {\n      height: 420px; } }\n  @media screen and (min-width: 769px) {\n    .myiframe2 {\n      height: 490px; } }\n  @media screen and (min-width: 1450px) {\n    .myiframe2 {\n      height: 630px; } }\n"

/***/ }),

/***/ "./src/app/testimonial/vote/vote.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VoteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VoteComponent = /** @class */ (function () {
    function VoteComponent(hostElement) {
        this.hostElement = hostElement;
    }
    VoteComponent.prototype.ngOnInit = function () {
        this.url = this.modell;
        var iframe = this.hostElement.nativeElement.querySelector('iframe');
        iframe.src = this.url;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", String)
    ], VoteComponent.prototype, "modell", void 0);
    VoteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-vote',
            template: __webpack_require__("./src/app/testimonial/vote/vote.component.html"),
            styles: [__webpack_require__("./src/app/testimonial/vote/vote.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */]])
    ], VoteComponent);
    return VoteComponent;
}());



/***/ }),

/***/ "./src/app/tutorials/tutorials.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!-- Container (Tutorials Section) -->\n<div id=\"Tutorials\" class=\"container-fluid text-center\">\n    <h2>MY KNOWLEDGE LEVEL IN SOFTWARE</h2> \n  \n\n \n  <div class=\"container\">\n       \n      <div class=\"progress\">\n        <div class=\"progress-bar progress-hmlcss\" role=\"progressbar\"  style=\" animation: progress-hmlcss 5s 1 forwards;\">\n          HTML & CSS \n        </div>\n      </div>\n      <div class=\"progress\">\n        <div class=\"progress-bar progress-jquery\" role=\"progressbar\" style=\" animation: progress-jquery 5s 1 forwards;\">\n          JQuery/Javascript\n        </div>\n      </div>\n      <div class=\"progress\">\n          <div class=\"progress-bar progress-java\" role=\"progressbar\" style=\" animation: progress-java 5s 1 forwards;\">\n          Java\n          </div>\n        </div>\n        <div class=\"progress\">\n            <div class=\"progress-bar progress-sql\" role=\"progressbar\" style=\" animation: progress-sql 5s 1 forwards;\">\n              SQL\n            </div>\n          </div>\n          <div class=\"progress\">\n              <div class=\"progress-bar progress-csharp\" role=\"progressbar\" style=\" animation: progress-csharp 5s 1 forwards;\">\n                C#\n              </div>\n            </div>\n            <div class=\"progress\">\n                <div class=\"progress-bar progress-type\" role=\"progressbar\" style=\" animation: progress-type 5s 1 forwards;\">\n                  Typescript\n                </div>\n              </div>\n              <div class=\"progress\">\n                  <div class=\"progress-bar progress-sql\" role=\"progressbar\" style=\" animation: progress-sql 5s 1 forwards;\">\n                    Angular\n                  </div>\n                </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/tutorials/tutorials.component.scss":
/***/ (function(module, exports) {

module.exports = "/* @import '~bootstrap/scss/bootstrap';\r\n@import '~app/variable';  */\n.progress {\n  width: 100%;\n  height: 30px;\n  background-color: #ddd; }\n@media only screen and (max-width: 450px) {\n    .progress {\n      margin-bottom: 10px; } }\n.progress-bar {\n  width: 0%;\n  height: 30px;\n  line-height: 28px;\n  background-color: #2d7e91; }\n@-webkit-keyframes progress-jquery {\n  from { }\n  to {\n    width: 85%; } }\n@keyframes progress-jquery {\n  from { }\n  to {\n    width: 85%; } }\n@-webkit-keyframes progress-sql {\n  from { }\n  to {\n    width: 80%; } }\n@keyframes progress-sql {\n  from { }\n  to {\n    width: 80%; } }\n@-webkit-keyframes progress-java {\n  from { }\n  to {\n    width: 75%; } }\n@keyframes progress-java {\n  from { }\n  to {\n    width: 75%; } }\n@-webkit-keyframes progress-hmlcss {\n  from { }\n  to {\n    width: 90%; } }\n@keyframes progress-hmlcss {\n  from { }\n  to {\n    width: 90%; } }\n@-webkit-keyframes progress-type {\n  from { }\n  to {\n    width: 65%; } }\n@keyframes progress-type {\n  from { }\n  to {\n    width: 65%; } }\n@-webkit-keyframes progress-csharp {\n  from { }\n  to {\n    width: 75%; } }\n@keyframes progress-csharp {\n  from { }\n  to {\n    width: 75%; } }\n"

/***/ }),

/***/ "./src/app/tutorials/tutorials.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorialsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TutorialsComponent = /** @class */ (function () {
    function TutorialsComponent() {
    }
    TutorialsComponent.prototype.ngOnInit = function () {
    };
    TutorialsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-tutorials',
            template: __webpack_require__("./src/app/tutorials/tutorials.component.html"),
            styles: [__webpack_require__("./src/app/tutorials/tutorials.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TutorialsComponent);
    return TutorialsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map