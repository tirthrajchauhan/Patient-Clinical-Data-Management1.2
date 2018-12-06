(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n    color: #369;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    font-size: 250%;\n  }\n  #title{\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    color: palevioletred;\n    font-size: 150%;\n  }\n  .nav-link{\n    color: white;\n  }\n  .footer {\n    position: absolute;\n   /* top: 60px;*/\n    bottom: 0;\n    width: 100%;\n    height: 60px;\n    line-height: 60px;\n    background-color: #f5f5f5;\n  }\n  .log{\n    color:white;\n    align-self: flex-end;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osaURBQWlEO0lBQ2pELGdCQUFnQjtHQUNqQjtFQUNEO0lBQ0UsaURBQWlEO0lBQ2pELHFCQUFxQjtJQUNyQixnQkFBZ0I7R0FDakI7RUFFRDtJQUNFLGFBQWE7R0FDZDtFQUVEO0lBQ0UsbUJBQW1CO0dBQ3BCLGVBQWU7SUFDZCxVQUFVO0lBQ1YsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsMEJBQTBCO0dBQzNCO0VBRUQ7SUFDRSxZQUFZO0lBQ1oscUJBQXFCO0dBQ3RCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XG4gICAgY29sb3I6ICMzNjk7XG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMjUwJTtcbiAgfVxuICAjdGl0bGV7XG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiBwYWxldmlvbGV0cmVkO1xuICAgIGZvbnQtc2l6ZTogMTUwJTtcbiAgfVxuICBcbiAgLm5hdi1saW5re1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIC5mb290ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgIC8qIHRvcDogNjBweDsqL1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDYwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgfVxuXG4gIC5sb2d7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng2-slim-loading-bar color=\"blue\"></ng2-slim-loading-bar>\n<nav class=\"navbar navbar-expand-sm bg-dark\"  >\n  <a class=\"navbar-brand\" id=\"title\">Health Care</a>\n  <div class=\"container-fluid\">\n    <ul class=\"navbar-nav\" >\n      <li class=\"nav-item\">\n        <a routerLink=\"create\" class=\"nav-link\" routerLinkActive=\"active\">\n          Add Patient\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a routerLink=\"index\" class=\"nav-link\" routerLinkActive=\"active\">\n          List Patients\n        </a>\n      </li> \n      <li class=\"nav-item\">\n        <a routerLink=\"login\" class=\"nav-link\" routerLinkActive=\"active\">\n         Login\n        </a>\n      </li> \n\n      <li class=\"nav-item\">\n          <a href=\"javascript:void(0);\" class=\"nav-link log\" (click)=\"logout()\">Logout</a>\n        </li> \n        <!-- <li routerLinkActive=\"active\" class=\"nav-link\"  >  <a routerLink=\"/login\">Login</a></li>\n              <li routerLinkActive=\"active\"  class=\"nav-link\"  ><a routerLink=\"/dashboard\">Dashboard</a></li> -->\n    </ul>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n\n<footer class=\"footer\">\n  <div class=\"container\">\n    <span class=\"text-muted\">Copyright © 2018 Centennial College</span>\n  </div>\n</footer>\n\n\n \n <!-- <div class=\"container\"> -->\n\n    <!-- Static navbar -->\n    <!-- <nav class=\"navbar navbar-inverse\">\n        <div class=\"container-fluid\">\n          <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n              <span class=\"sr-only\">Toggle navigation</span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n            </button>\n          </div>\n          <div id=\"navbar\" class=\"navbar-collapse collapse\">\n            <ul class=\"nav navbar-nav\">\n              <li routerLinkActive=\"active\"><a routerLink=\"/login\">Login</a></li>\n              <li routerLinkActive=\"active\"><a routerLink=\"/dashboard\">Dashboard</a></li>\n            </ul>\n          </div><!-- /.nav-collapse -->\n        <!-- </div><!-- /.container-fluid -->\n      <!-- </nav>\n  \n  <router-outlet></router-outlet>\n  </div> --> "

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-slim-loading-bar */ "./node_modules/ng2-slim-loading-bar/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(_loadingBar, _router) {
        var _this = this;
        this._loadingBar = _loadingBar;
        this._router = _router;
        this.title = 'app';
        this._router.events.subscribe(function (event) {
            _this.navigationInterceptor(event);
        });
    }
    AppComponent.prototype.navigationInterceptor = function (event) {
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]) {
            this._loadingBar.start();
        }
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
            this._loadingBar.complete();
        }
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationCancel"]) {
            this._loadingBar.stop();
        }
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationError"]) {
            this._loadingBar.stop();
        }
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_2__["SlimLoadingBarService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_create_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/create/create.component */ "./src/app/components/create/create.component.ts");
/* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/index/index.component */ "./src/app/components/index/index.component.ts");
/* harmony import */ var _components_edit_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/edit/edit.component */ "./src/app/components/edit/edit.component.ts");
/* harmony import */ var _components_addrecord_addrecord_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/addrecord/addrecord.component */ "./src/app/components/addrecord/addrecord.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-slim-loading-bar */ "./node_modules/ng2-slim-loading-bar/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _patient_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./patient.service */ "./src/app/patient.service.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_getrecord_getrecord_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/getrecord/getrecord.component */ "./src/app/components/getrecord/getrecord.component.ts");
/* harmony import */ var _components_editrecord_editrecord_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/editrecord/editrecord.component */ "./src/app/components/editrecord/editrecord.component.ts");












//import {FormsModule, ReactiveFormsModule } from '@angular/forms';






var routes = [
    {
        path: 'create',
        component: _components_create_create_component__WEBPACK_IMPORTED_MODULE_4__["CreateComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]]
    },
    {
        path: 'edit/:id',
        component: _components_edit_edit_component__WEBPACK_IMPORTED_MODULE_6__["EditComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]]
    },
    {
        path: 'index',
        component: _components_index_index_component__WEBPACK_IMPORTED_MODULE_5__["IndexComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]]
    },
    {
        path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"]
    },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["DashboardComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
    {
        path: 'addrecord',
        component: _components_addrecord_addrecord_component__WEBPACK_IMPORTED_MODULE_7__["AddrecordComponent"]
    },
    {
        path: 'getrecord',
        component: _components_getrecord_getrecord_component__WEBPACK_IMPORTED_MODULE_16__["GetrecordComponent"]
    },
    {
        path: 'editrecord',
        component: _components_editrecord_editrecord_component__WEBPACK_IMPORTED_MODULE_17__["EditrecordComponent"]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_create_create_component__WEBPACK_IMPORTED_MODULE_4__["CreateComponent"],
                _components_index_index_component__WEBPACK_IMPORTED_MODULE_5__["IndexComponent"],
                _components_edit_edit_component__WEBPACK_IMPORTED_MODULE_6__["EditComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["DashboardComponent"],
                _components_addrecord_addrecord_component__WEBPACK_IMPORTED_MODULE_7__["AddrecordComponent"],
                _components_getrecord_getrecord_component__WEBPACK_IMPORTED_MODULE_16__["GetrecordComponent"],
                _components_editrecord_editrecord_component__WEBPACK_IMPORTED_MODULE_17__["EditrecordComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(routes),
                ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_9__["SlimLoadingBarModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"]
            ],
            providers: [_patient_service__WEBPACK_IMPORTED_MODULE_11__["PatientService"], _auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AuthGuard = /** @class */ (function () {
    function AuthGuard(route) {
        this.route = route;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var url = state.url;
        return this.verifyLogin(url);
    };
    AuthGuard.prototype.verifyLogin = function (url) {
        if (!this.isLoggedIn()) {
            this.route.navigate(['/login']);
            return false;
        }
        else if (this.isLoggedIn()) {
            return true;
        }
    };
    AuthGuard.prototype.isLoggedIn = function () {
        var status = false;
        if (localStorage.getItem('isLoggedIn') == "true") {
            status = true;
        }
        else {
            status = false;
        }
        return status;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.logout = function () {
        localStorage.setItem('isLoggedIn', "false");
        localStorage.removeItem('token');
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/components/addrecord/addrecord.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/addrecord/addrecord.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p{\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    font-size: 18px;\n    padding-top: 40px;\n    font-style: oblique;\n    padding-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGRyZWNvcmQvYWRkcmVjb3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpREFBaUQ7SUFDakQsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIscUJBQXFCO0NBQ3hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZGRyZWNvcmQvYWRkcmVjb3JkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwe1xuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgcGFkZGluZy10b3A6IDQwcHg7XG4gICAgZm9udC1zdHlsZTogb2JsaXF1ZTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/addrecord/addrecord.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/addrecord/addrecord.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  Add Record!\n</p>\n<div class=\"card\">\n  <div class=\"card-body\">\n      <form [formGroup]=\"angForm\" novalidate>\n          <div class=\"form-group\">\n        <label class=\"col-md-4\">Blood Pressure</label>\n        <input type=\"text\" class=\"form-control\" name=\"blood_pressure\" formControlName=\"blood_pressure\" #first_name/>\n      </div>\n      <div *ngIf=\"angForm.controls['blood_pressure'].invalid && (angForm.controls['blood_pressure'].dirty || angForm.controls['blood_pressure'].touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"angForm.controls['blood_pressure'].errors.required\">\n          Please insert blood pressure.\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"col-md-4\">Respiratory Rate</label>\n        <input type=\"text\" class=\"form-control\" name=\"respi_rate\" formControlName=\"respi_rate\" #last_name/>\n      </div>\n      <div *ngIf=\"angForm.controls['respi_rate'].invalid && (angForm.controls['respi_rate'].dirty || angForm.controls['respi_rate'].touched)\" class=\"alert alert-danger\">\n          <div *ngIf=\"angForm.controls['respi_rate'].errors.required\">\n          Please insert respiratory rate.\n          </div>\n        </div>\n      <div class=\"form-group\">\n        <label class=\"col-md-4\">Blood Oxygen Level</label>\n        <input type=\"text\" class=\"form-control\" name=\"bo_level\" formControlName=\"bo_level\" #dob/>\n      </div>\n      <div *ngIf=\"angForm.controls['bo_level'].invalid && (angForm.controls['bo_level'].dirty || angForm.controls['bo_level'].touched)\" class=\"alert alert-danger\">\n          <div *ngIf=\"angForm.controls['bo_level'].errors.required\">\n            Please insert blood oxygen level.\n          </div>\n        </div>\n      <div class=\"form-group\">\n        <label class=\"col-md-4\">Heart-Beat Rate</label>\n        <input type=\"text\" class=\"form-control\" name=\"hb_rate\" formControlName=\"hb_rate\" #address/>\n      </div>\n      <div *ngIf=\"angForm.controls['hb_rate'].invalid && (angForm.controls['hb_rate'].dirty || angForm.controls['hb_rate'].touched)\" class=\"alert alert-danger\">\n          <div *ngIf=\"angForm.controls['hb_rate'].errors.required\">\n            Please insert heart-beat rate.\n          </div>\n        </div>\n        <div class=\"form-group\">\n            <button (click)=\"angForm.invalid\" class=\"btn btn-primary\">Add Patient</button>\n          </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/addrecord/addrecord.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/addrecord/addrecord.component.ts ***!
  \*************************************************************/
/*! exports provided: AddrecordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddrecordComponent", function() { return AddrecordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AddrecordComponent = /** @class */ (function () {
    function AddrecordComponent() {
    }
    AddrecordComponent.prototype.ngOnInit = function () {
    };
    AddrecordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addrecord',
            template: __webpack_require__(/*! ./addrecord.component.html */ "./src/app/components/addrecord/addrecord.component.html"),
            styles: [__webpack_require__(/*! ./addrecord.component.css */ "./src/app/components/addrecord/addrecord.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AddrecordComponent);
    return AddrecordComponent;
}());



/***/ }),

/***/ "./src/app/components/create/create.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/create/create.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p{\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    font-size: 18px;\n    padding-top: 40px;\n    font-style: oblique;\n    padding-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jcmVhdGUvY3JlYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpREFBaUQ7SUFDakQsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIscUJBQXFCO0NBQ3hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jcmVhdGUvY3JlYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwe1xuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgcGFkZGluZy10b3A6IDQwcHg7XG4gICAgZm9udC1zdHlsZTogb2JsaXF1ZTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/create/create.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/create/create.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  Add New Patient!\n</p>\n<div class=\"card\">\n  <div class=\"card-body\">\n      \n      <form [formGroup]=\"angForm\" novalidate>\n          <div class=\"form-group\">\n        <label class=\"col-md-4\">First Name</label>\n        <input type=\"text\" class=\"form-control\" name=\"first_name\" formControlName=\"first_name\" #first_name/>\n      </div>\n      <div *ngIf=\"angForm.controls['first_name'].invalid && (angForm.controls['first_name'].dirty || angForm.controls['first_name'].touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"angForm.controls['first_name'].errors.required\">\n          First name is required.\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"col-md-4\">Last Name</label>\n        <input type=\"text\" class=\"form-control\" name=\"last_name\" formControlName=\"last_name\" #last_name/>\n      </div>\n      <div *ngIf=\"angForm.controls['last_name'].invalid && (angForm.controls['last_name'].dirty || angForm.controls['last_name'].touched)\" class=\"alert alert-danger\">\n          <div *ngIf=\"angForm.controls['last_name'].errors.required\">\n          Last name is required.\n          </div>\n        </div>\n      <div class=\"form-group\">\n        <label class=\"col-md-4\">Date Of Birth</label>\n        <input type=\"text\" class=\"form-control\" name=\"dob\" formControlName=\"dob\" #dob/>\n      </div>\n      <div *ngIf=\"angForm.controls['dob'].invalid && (angForm.controls['dob'].dirty || angForm.controls['dob'].touched)\" class=\"alert alert-danger\">\n          <div *ngIf=\"angForm.controls['dob'].errors.required\">\n            Date of birth is required.\n          </div>\n        </div>\n      <div class=\"form-group\">\n        <label class=\"col-md-4\">Address</label>\n        <input type=\"text\" class=\"form-control\" name=\"address\" formControlName=\"address\" #address/>\n      </div>\n      <div *ngIf=\"angForm.controls['address'].invalid && (angForm.controls['address'].dirty || angForm.controls['address'].touched)\" class=\"alert alert-danger\">\n          <div *ngIf=\"angForm.controls['address'].errors.required\">\n            Address is required.\n          </div>\n        </div>\n        <div class=\"form-group\">\n            <button (click)=\"addPatient(first_name.value, last_name.value,dob.value,address.value)\" [disabled]=\"angForm.pristine || angForm.invalid\" class=\"btn btn-primary\">Add Patient</button>\n          </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/create/create.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/create/create.component.ts ***!
  \*******************************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _patient_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../patient.service */ "./src/app/patient.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var CreateComponent = /** @class */ (function () {
    function CreateComponent(patientService, fb, router) {
        this.patientService = patientService;
        this.fb = fb;
        this.router = router;
        this.createForm();
    }
    CreateComponent.prototype.createForm = function () {
        this.angForm = this.fb.group({
            first_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            last_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            dob: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    CreateComponent.prototype.addPatient = function (first_name, last_name, dob, address) {
        this.patientService.addPatient(first_name, last_name, dob, address);
        this.router.navigate(['/index']);
        window.location.reload();
    };
    CreateComponent.prototype.ngOnInit = function () {
    };
    CreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create',
            template: __webpack_require__(/*! ./create.component.html */ "./src/app/components/create/create.component.html"),
            styles: [__webpack_require__(/*! ./create.component.css */ "./src/app/components/create/create.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_patient_service__WEBPACK_IMPORTED_MODULE_3__["PatientService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], CreateComponent);
    return CreateComponent;
}());



/***/ }),

/***/ "./src/app/components/edit/edit.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/edit/edit.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p{\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    font-size: 18px;\n    padding-top: 40px;\n    font-style: oblique;\n    padding-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lZGl0L2VkaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlEQUFpRDtJQUNqRCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixxQkFBcUI7Q0FDeEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2VkaXQvZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicHtcbiAgICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuICAgIGZvbnQtc3R5bGU6IG9ibGlxdWU7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/edit/edit.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/edit/edit.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  Update Patient Details!\n</p>\n<div class=\"card\">\n    <div class=\"card-body\">\n        <form [formGroup]=\"angForm\" novalidate>\n            <div class=\"form-group\">\n          <label class=\"col-md-4\">First Name</label>\n          <input type=\"text\" class=\"form-control\" name=\"first_name\" formControlName=\"first_name\" #first_name [(ngModel)] = \"patient.first_name\" />\n        </div>\n        <div *ngIf=\"angForm.controls['first_name'].invalid && (angForm.controls['first_name'].dirty || angForm.controls['first_name'].touched)\" class=\"alert alert-danger\">\n          <div *ngIf=\"angForm.controls['first_name'].errors.required\">\n            first_name is required.\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label class=\"col-md-4\">Last Name</label>\n          <input type=\"text\" class=\"form-control\" name=\"last_name\" formControlName=\"last_name\" #last_name [(ngModel)] = \"patient.last_name\"/>\n        </div>\n        <div *ngIf=\"angForm.controls['last_name'].invalid && (angForm.controls['last_name'].dirty || angForm.controls['last_name'].touched)\" class=\"alert alert-danger\">\n            <div *ngIf=\"angForm.controls['last_name'].errors.required\">\n                last_name is required.\n            </div>\n          </div>\n        <div class=\"form-group\">\n          <label class=\"col-md-4\">Date Of Birth</label>\n          <input type=\"text\" class=\"form-control\" name=\"dob\" formControlName=\"dob\" #dob [(ngModel)] = \"patient.dob\"/>\n        </div>\n        <div *ngIf=\"angForm.controls['dob'].invalid && (angForm.controls['dob'].dirty || angForm.controls['dob'].touched)\" class=\"alert alert-danger\">\n            <div *ngIf=\"angForm.controls['dob'].errors.required\">\n                dob is required.\n            </div>\n          </div>\n        <div class=\"form-group\">\n          <label class=\"col-md-4\">Address</label>\n          <input type=\"text\" class=\"form-control\" name=\"address\" formControlName=\"address\" #address [(ngModel)] = \"patient.address\"/>\n        </div>\n        <div *ngIf=\"angForm.controls['address'].invalid && (angForm.controls['address'].dirty || angForm.controls['address'].touched)\" class=\"alert alert-danger\">\n            <div *ngIf=\"angForm.controls['address'].errors.required\">\n                address is required.\n            </div>\n          </div>\n          <div class=\"form-group\">\n              <button (click)=\"updatePatient(first_name.value, last_name.value,dob.value,address.value)\" [disabled]=\"angForm.invalid\" class=\"btn btn-primary\">Update Patient</button>\n            </div>\n\n      </form>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/edit/edit.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/edit/edit.component.ts ***!
  \***************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _patient_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../patient.service */ "./src/app/patient.service.ts");





var EditComponent = /** @class */ (function () {
    function EditComponent(route, router, patientService, fb) {
        this.route = route;
        this.router = router;
        this.patientService = patientService;
        this.fb = fb;
        this.patient = {};
        this.createForm();
    }
    EditComponent.prototype.createForm = function () {
        this.angForm = this.fb.group({
            first_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            last_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            dob: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    EditComponent.prototype.updatePatient = function (first_name, last_name, dob, address) {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.patientService.updatePatient(first_name, last_name, dob, address, params['id']);
            _this.router.navigate(['index']);
        });
        window.location.reload();
    };
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.patientService.editPatient(params['id']).subscribe(function (res) {
                _this.patient = res;
            });
        });
    };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/components/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.css */ "./src/app/components/edit/edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _patient_service__WEBPACK_IMPORTED_MODULE_4__["PatientService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/components/editrecord/editrecord.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/editrecord/editrecord.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p{\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    font-size: 18px;\n    padding-top: 40px;\n    font-style: oblique;\n    padding-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lZGl0cmVjb3JkL2VkaXRyZWNvcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlEQUFpRDtJQUNqRCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixxQkFBcUI7Q0FDeEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2VkaXRyZWNvcmQvZWRpdHJlY29yZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicHtcbiAgICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuICAgIGZvbnQtc3R5bGU6IG9ibGlxdWU7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/editrecord/editrecord.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/editrecord/editrecord.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  Update Patient Record!\n</p>\n<div class=\"card\">\n    <div class=\"card-body\">\n        <form [formGroup]=\"angForm\" novalidate>\n            <div class=\"form-group\">\n          <label class=\"col-md-4\">Blood Pressure</label>\n          <input type=\"text\" class=\"form-control\" name=\"blood_pressure\" formControlName=\"blood_pressure\" #first_name [(ngModel)] = \"patient.blood_pressure\" />\n        </div>\n        <div *ngIf=\"angForm.controls['blood_pressure'].invalid && (angForm.controls['blood_pressure'].dirty || angForm.controls['blood_pressure'].touched)\" class=\"alert alert-danger\">\n          <div *ngIf=\"angForm.controls['blood_pressure'].errors.required\">\n          Please insert blood pressure!\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label class=\"col-md-4\">Respiratory Rate</label>\n          <input type=\"text\" class=\"form-control\" name=\"respi_rate\" formControlName=\"respi_rate\" #last_name [(ngModel)] = \"patient.respi_rate\"/>\n        </div>\n        <div *ngIf=\"angForm.controls['respi_rate'].invalid && (angForm.controls['respi_rate'].dirty || angForm.controls['respi_rate'].touched)\" class=\"alert alert-danger\">\n            <div *ngIf=\"angForm.controls['respi_rate'].errors.required\">\n              Please insert respiratory rate!\n            </div>\n          </div>\n        <div class=\"form-group\">\n          <label class=\"col-md-4\">Blood Oxygen Level</label>\n          <input type=\"text\" class=\"form-control\" name=\"bo_level\" formControlName=\"bo_level\" #bo_level [(ngModel)] = \"patient.bo_level\"/>\n        </div>\n        <div *ngIf=\"angForm.controls['bo_level'].invalid && (angForm.controls['bo_level'].dirty || angForm.controls['bo_level'].touched)\" class=\"alert alert-danger\">\n            <div *ngIf=\"angForm.controls['bo_level'].errors.required\">\n               Please insert blood oxygen level!\n            </div>\n          </div>\n        <div class=\"form-group\">\n          <label class=\"col-md-4\">Heart-Beat Rate</label>\n          <input type=\"text\" class=\"form-control\" name=\"hb_rate\" formControlName=\"hb_rate\" #address [(ngModel)] = \"patient.hb_rate\"/>\n        </div>\n        <div *ngIf=\"angForm.controls['hb_rate'].invalid && (angForm.controls['hb_rate'].dirty || angForm.controls['hb_rate'].touched)\" class=\"alert alert-danger\">\n            <div *ngIf=\"angForm.controls['hb_rate'].errors.required\">\n                address is required.\n            </div>\n          </div>\n          <div class=\"form-group\">\n              <button [disabled]=\"angForm.invalid\" class=\"btn btn-primary\">Update Record</button>\n            </div>\n\n      </form>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/components/editrecord/editrecord.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/editrecord/editrecord.component.ts ***!
  \***************************************************************/
/*! exports provided: EditrecordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditrecordComponent", function() { return EditrecordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EditrecordComponent = /** @class */ (function () {
    function EditrecordComponent() {
    }
    EditrecordComponent.prototype.ngOnInit = function () {
    };
    EditrecordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editrecord',
            template: __webpack_require__(/*! ./editrecord.component.html */ "./src/app/components/editrecord/editrecord.component.html"),
            styles: [__webpack_require__(/*! ./editrecord.component.css */ "./src/app/components/editrecord/editrecord.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EditrecordComponent);
    return EditrecordComponent;
}());



/***/ }),

/***/ "./src/app/components/getrecord/getrecord.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/getrecord/getrecord.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".buttons{ \n    text-align: center;\n}\np{\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    font-size: 18px;\n    padding-top: 40px;\n    font-style: oblique;\n    padding-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nZXRyZWNvcmQvZ2V0cmVjb3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLGlEQUFpRDtJQUNqRCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixxQkFBcUI7Q0FDeEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dldHJlY29yZC9nZXRyZWNvcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b25zeyBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5we1xuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgcGFkZGluZy10b3A6IDQwcHg7XG4gICAgZm9udC1zdHlsZTogb2JsaXF1ZTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/getrecord/getrecord.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/getrecord/getrecord.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  Patient Record\n</p>\n\n<table class=\"table table-hover\">\n  <thead>\n  <tr>\n      <td>Blood Pressure</td>\n      <td>Respiratory Rate</td>\n      <td>Blood Oxygen Level</td>\n      <td>Heart Beat Rate</td>\n  </tr>\n  </thead>\n\n  <tbody id=\"body_color\">\n      <tr>\n          <td>Demo</td>\n          <td>Demo</td>\n          <td>Demo</td>\n          <td>Demo</td>\n      </tr>\n  </tbody>\n</table>\n\n<table class=\"table table-hover\">\n<tr class=\"buttons\">\n    <td><a [routerLink]=\"['/editrecord']\" class=\"btn btn-primary\" id=\"buttons\">Edit</a></td>\n    <td><button class=\"btn btn-danger\" id=\"buttons\">Delete</button></td>\n    </tr>\n</table>"

/***/ }),

/***/ "./src/app/components/getrecord/getrecord.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/getrecord/getrecord.component.ts ***!
  \*************************************************************/
/*! exports provided: GetrecordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetrecordComponent", function() { return GetrecordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GetrecordComponent = /** @class */ (function () {
    function GetrecordComponent() {
    }
    GetrecordComponent.prototype.ngOnInit = function () {
    };
    GetrecordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-getrecord',
            template: __webpack_require__(/*! ./getrecord.component.html */ "./src/app/components/getrecord/getrecord.component.html"),
            styles: [__webpack_require__(/*! ./getrecord.component.css */ "./src/app/components/getrecord/getrecord.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GetrecordComponent);
    return GetrecordComponent;
}());



/***/ }),

/***/ "./src/app/components/index/index.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/index/index.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-link{\n    color: black;\n  }\n\n.buttons{ \n    display: flex;\n    justify-content: last baseline;\n}\n\np, .loginBox{\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    font-size: 18px;\n    padding-top: 40px;\n    font-style: oblique;\n    padding-bottom: 10px;\n}\n\n.CellWithComment{\n    position:relative;\n  }\n\n.CellComment{\n    display:none;\n    position:absolute; \n    z-index:100;\n    border:1px;\n    background-color:white;\n   /* border-style:solid;\n    border-width:1px;\n    border-color: blue;*/\n    padding:3px;\n    color: blue; \n    top:40px; \n    left:120px;\n  }\n\n.CellWithComment:hover span.CellComment{\n    display:block;\n  }\n\n@media only screen and (max-width: 600px) {\n    .hide {\n       display: none;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbmRleC9pbmRleC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtHQUNkOztBQUVIO0lBQ0ksY0FBYztJQUNkLCtCQUErQjtDQUNsQzs7QUFDRDtJQUNJLGlEQUFpRDtJQUNqRCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixxQkFBcUI7Q0FDeEI7O0FBRUQ7SUFDSSxrQkFBa0I7R0FDbkI7O0FBRUg7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0lBQ1gsdUJBQXVCO0dBQ3hCOzt5QkFFc0I7SUFDckIsWUFBWTtJQUNaLFlBQVk7SUFDWixTQUFTO0lBQ1QsV0FBVztHQUNaOztBQUVEO0lBQ0UsY0FBYztHQUNmOztBQUVIO0lBQ0k7T0FDRyxjQUFjO0tBQ2hCO0NBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2luZGV4L2luZGV4LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2LWxpbmt7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG5cbi5idXR0b25zeyBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogbGFzdCBiYXNlbGluZTtcbn1cbnAsIC5sb2dpbkJveHtcbiAgICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuICAgIGZvbnQtc3R5bGU6IG9ibGlxdWU7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbi5DZWxsV2l0aENvbW1lbnR7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gIH1cbiAgXG4uQ2VsbENvbW1lbnR7XG4gICAgZGlzcGxheTpub25lO1xuICAgIHBvc2l0aW9uOmFic29sdXRlOyBcbiAgICB6LWluZGV4OjEwMDtcbiAgICBib3JkZXI6MXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XG4gICAvKiBib3JkZXItc3R5bGU6c29saWQ7XG4gICAgYm9yZGVyLXdpZHRoOjFweDtcbiAgICBib3JkZXItY29sb3I6IGJsdWU7Ki9cbiAgICBwYWRkaW5nOjNweDtcbiAgICBjb2xvcjogYmx1ZTsgXG4gICAgdG9wOjQwcHg7IFxuICAgIGxlZnQ6MTIwcHg7XG4gIH1cbiAgXG4gIC5DZWxsV2l0aENvbW1lbnQ6aG92ZXIgc3Bhbi5DZWxsQ29tbWVudHtcbiAgICBkaXNwbGF5OmJsb2NrO1xuICB9XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAuaGlkZSB7XG4gICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/components/index/index.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/index/index.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loginBox\">\n        Welcome,  {{id}}\n        <a href=\"javascript:void(0);\" (click)=\"logout()\">Logout</a>\n    </div>\n<p>\n    Patient Details\n</p>\n<div class=\"card\">\n        <div class=\"card-body\">\n            <form [formGroup]=\"addPatient\" novalidate>\n                <table class=\"table table-hover\">\n                            <thead>\n                                    <tr>\n                                        <td>First Name</td>\n                                        <td class=\"hide\">Last Name</td>\n                                        <td class=\"hide\">DOB</td>\n                                        <td class=\"hide\">Address</td>\n                                        <td colspan=\"2\">Actions</td>\n                                    </tr>\n                            </thead>\n                            <tbody id=\"body_color\">\n                                    <tr *ngFor=\"let patient of patients\">\n                                        <td class=\"CellWithComment\"><a [routerLink]=\"['/getrecord']\" class=\"nav-link\">{{ patient.first_name }}<span class=\"CellComment\">Click to fetch records!</span></a>\n                                        </td>\n                                        <td class=\"hide\">{{ patient.last_name }}</td>\n                                        <td class=\"hide\">{{ patient.dob }}</td>\n                                        <td class=\"hide\">{{ patient.address }}</td>\n                                        <td class=\"buttons\"><a [routerLink]=\"['/edit', patient._id]\" class=\"btn btn-primary\">Edit</a>\n                                        <button (click)=\"deletePatient(patient._id)\"  class=\"btn btn-danger\">Delete</button></td>\n                                    </tr>\n                            </tbody>\n                </table> \n          </form>\n        </div>\n      </div>"

/***/ }),

/***/ "./src/app/components/index/index.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/index/index.component.ts ***!
  \*****************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _patient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../patient.service */ "./src/app/patient.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var IndexComponent = /** @class */ (function () {
    function IndexComponent(patientService, router, authService, fb) {
        this.patientService = patientService;
        this.router = router;
        this.authService = authService;
        this.fb = fb;
    }
    IndexComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.addPatient = this.fb.group({
            first_name: [''],
            last_name: [''],
            DOB: [''],
            address: [''],
        });
        this.patientService
            .getPatients()
            .subscribe(function (data) {
            _this.patients = data;
        });
        this.id = localStorage.getItem('token');
    };
    IndexComponent.prototype.logout = function () {
        console.log("Logout");
        this.authService.logout();
        this.router.navigate(['/login']);
    };
    IndexComponent.prototype.deletePatient = function (id) {
        this.patientService.deletePatient(id).subscribe(function (res) {
            console.log('Deleted');
        });
        window.location.reload();
    };
    IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/components/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.css */ "./src/app/components/index/index.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_patient_service__WEBPACK_IMPORTED_MODULE_2__["PatientService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"col-md-6 col-md-offset-3 loginBox\">\n        Welcome,  {{id}}\n        <a href=\"javascript:void(0);\" (click)=\"logout()\">Logout</a>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.id = localStorage.getItem('token');
    };
    DashboardComponent.prototype.logout = function () {
        console.log("Logout");
        this.authService.logout();
        this.router.navigate(['/login']);
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p{\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    font-size: 18px;\n    padding-top: 40px;\n    font-style: oblique;\n    padding-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlEQUFpRDtJQUNqRCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixxQkFBcUI7Q0FDeEIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicHtcbiAgICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuICAgIGZvbnQtc3R5bGU6IG9ibGlxdWU7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n        Login\n</p>\n      <div class=\"card\">\n        <div class=\"card-body\">\n                <div class=\"loginBox\">\n            <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': submitted && f.userid.errors }\">\n                    <label class=\"col-md-4\">Username</label>\n                    <input type=\"text\" class=\"form-control\" formControlName=\"userid\" />\n                 </div>\n                 <div *ngIf=\"submitted && f.userid.errors\" class=\"help-block\">\n                        <div *ngIf=\"f.userid.errors.required\">Userid is required</div>\n                  </div>\n\n            <div class=\"form-group\" [ngClass]=\"{ 'has-error': submitted && f.password.errors }\">\n              <label class=\"col-md-4\">Password</label>\n              <input type=\"password\" class=\"form-control\" formControlName=\"password\"/>\n            </div>\n            <div *ngIf=\"submitted && f.password.errors\" class=\"help-block\">\n                    <div *ngIf=\"f.password.errors.required\">Password is required</div>\n            </div>\n            \n              <div class=\"form-group\">\n                    <button class=\"btn btn-success\" type=\"submit\">Login</button>\n                </div>\n          </form>\n          </div>\n        </div>\n      </div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, router, authService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
        this.model = { userid: "admin", password: "admin123" };
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            userid: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.returnUrl = '/index';
        this.authService.logout();
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.login = function () {
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        else {
            if (this.f.userid.value == this.model.userid && this.f.password.value == this.model.password) {
                console.log("Login successful");
                //this.authService.authLogin(this.model);
                localStorage.setItem('isLoggedIn', "true");
                localStorage.setItem('token', this.f.userid.value);
                this.router.navigate([this.returnUrl]);
            }
            else {
                this.message = "Please check your userid and password";
            }
        }
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/patient.service.ts":
/*!************************************!*\
  !*** ./src/app/patient.service.ts ***!
  \************************************/
/*! exports provided: PatientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientService", function() { return PatientService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var PatientService = /** @class */ (function () {
    function PatientService(http) {
        this.http = http;
        this.uri = '/patient';
    }
    PatientService.prototype.addPatient = function (first_name, last_name, dob, address) {
        var obj = {
            first_name: first_name,
            last_name: last_name,
            dob: dob,
            address: address
        };
        this.http.post(this.uri + "/add", obj)
            .subscribe(function (res) { return console.log('Done'); });
    };
    PatientService.prototype.getPatients = function () {
        return this
            .http
            .get("" + this.uri);
    };
    PatientService.prototype.editPatient = function (id) {
        return this
            .http
            .get(this.uri + "/edit/" + id);
    };
    PatientService.prototype.updatePatient = function (first_name, last_name, dob, address, id) {
        var obj = {
            first_name: first_name,
            last_name: last_name,
            dob: dob,
            address: address
        };
        this
            .http
            .post(this.uri + "/update/" + id, obj)
            .subscribe(function (res) { return console.log('Done'); });
    };
    PatientService.prototype.deletePatient = function (id) {
        return this
            .http
            .get(this.uri + "/delete/" + id);
    };
    PatientService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PatientService);
    return PatientService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/tirthraj/OneDrive - Centennial College/MAPD-Web Tech/Patient-Clinical-Data-Management/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map