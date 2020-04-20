(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["maintenance-info-maintenance-info-module"],{

/***/ "../common-angular/src/pipes/capitalize.pipe.ts":
/*!******************************************************!*\
  !*** ../common-angular/src/pipes/capitalize.pipe.ts ***!
  \******************************************************/
/*! exports provided: CapitalizePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapitalizePipe", function() { return CapitalizePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../common-angular/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CapitalizePipe = (function () {
    function CapitalizePipe() {
    }
    CapitalizePipe.prototype.transform = function (input) {
        return input && input.length
            ? input.charAt(0).toUpperCase() + input.slice(1).toLowerCase()
            : input;
    };
    CapitalizePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'ngxCapitalize' })
    ], CapitalizePipe);
    return CapitalizePipe;
}());



/***/ }),

/***/ "../common-angular/src/pipes/number-with-commas.pipe.ts":
/*!**************************************************************!*\
  !*** ../common-angular/src/pipes/number-with-commas.pipe.ts ***!
  \**************************************************************/
/*! exports provided: NumberWithCommasPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberWithCommasPipe", function() { return NumberWithCommasPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../common-angular/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NumberWithCommasPipe = (function () {
    function NumberWithCommasPipe() {
    }
    NumberWithCommasPipe.prototype.transform = function (input) {
        return new Intl.NumberFormat().format(input);
    };
    NumberWithCommasPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'myNumberWithCommas' })
    ], NumberWithCommasPipe);
    return NumberWithCommasPipe;
}());



/***/ }),

/***/ "../common-angular/src/pipes/pipes.module.ts":
/*!***************************************************!*\
  !*** ../common-angular/src/pipes/pipes.module.ts ***!
  \***************************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../common-angular/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _safe_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./safe.pipe */ "../common-angular/src/pipes/safe.pipe.ts");
/* harmony import */ var _replace_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./replace.pipe */ "../common-angular/src/pipes/replace.pipe.ts");
/* harmony import */ var _capitalize_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./capitalize.pipe */ "../common-angular/src/pipes/capitalize.pipe.ts");
/* harmony import */ var _plural_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./plural.pipe */ "../common-angular/src/pipes/plural.pipe.ts");
/* harmony import */ var _round_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./round.pipe */ "../common-angular/src/pipes/round.pipe.ts");
/* harmony import */ var _timing_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./timing.pipe */ "../common-angular/src/pipes/timing.pipe.ts");
/* harmony import */ var _number_with_commas_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./number-with-commas.pipe */ "../common-angular/src/pipes/number-with-commas.pipe.ts");









var PipesModule = (function () {
    function PipesModule() {
    }
    PipesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [
                _safe_pipe__WEBPACK_IMPORTED_MODULE_2__["SafePipe"],
                _replace_pipe__WEBPACK_IMPORTED_MODULE_3__["ReplacePipe"],
                _capitalize_pipe__WEBPACK_IMPORTED_MODULE_4__["CapitalizePipe"],
                _plural_pipe__WEBPACK_IMPORTED_MODULE_5__["PluralPipe"],
                _round_pipe__WEBPACK_IMPORTED_MODULE_6__["RoundPipe"],
                _timing_pipe__WEBPACK_IMPORTED_MODULE_7__["TimingPipe"],
                _number_with_commas_pipe__WEBPACK_IMPORTED_MODULE_8__["NumberWithCommasPipe"],
            ],
            imports: [],
            declarations: [
                _safe_pipe__WEBPACK_IMPORTED_MODULE_2__["SafePipe"],
                _replace_pipe__WEBPACK_IMPORTED_MODULE_3__["ReplacePipe"],
                _capitalize_pipe__WEBPACK_IMPORTED_MODULE_4__["CapitalizePipe"],
                _plural_pipe__WEBPACK_IMPORTED_MODULE_5__["PluralPipe"],
                _round_pipe__WEBPACK_IMPORTED_MODULE_6__["RoundPipe"],
                _timing_pipe__WEBPACK_IMPORTED_MODULE_7__["TimingPipe"],
                _number_with_commas_pipe__WEBPACK_IMPORTED_MODULE_8__["NumberWithCommasPipe"],
            ],
        })
    ], PipesModule);
    return PipesModule;
}());



/***/ }),

/***/ "../common-angular/src/pipes/plural.pipe.ts":
/*!**************************************************!*\
  !*** ../common-angular/src/pipes/plural.pipe.ts ***!
  \**************************************************/
/*! exports provided: PluralPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PluralPipe", function() { return PluralPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../common-angular/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PluralPipe = (function () {
    function PluralPipe() {
    }
    PluralPipe.prototype.transform = function (input, label, pluralLabel) {
        if (pluralLabel === void 0) { pluralLabel = ''; }
        input = input || 0;
        return input === 1
            ? input + " " + label
            : pluralLabel
                ? input + " " + pluralLabel
                : input + " " + label + "s";
    };
    PluralPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'ngxPlural' })
    ], PluralPipe);
    return PluralPipe;
}());



/***/ }),

/***/ "../common-angular/src/pipes/replace.pipe.ts":
/*!***************************************************!*\
  !*** ../common-angular/src/pipes/replace.pipe.ts ***!
  \***************************************************/
/*! exports provided: ReplacePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplacePipe", function() { return ReplacePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../common-angular/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ReplacePipe = (function () {
    function ReplacePipe() {
    }
    ReplacePipe.prototype.transform = function (value, searchValue, replaceValue) {
        if (typeof value !== typeof 'string' ||
            typeof searchValue !== typeof 'string' ||
            typeof replaceValue !== typeof 'string') {
            throw Error('All pipe parameters should be strings!');
        }
        return value.replace(new RegExp(searchValue, 'g'), replaceValue);
    };
    ReplacePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'myReplacePipe' })
    ], ReplacePipe);
    return ReplacePipe;
}());



/***/ }),

/***/ "../common-angular/src/pipes/round.pipe.ts":
/*!*************************************************!*\
  !*** ../common-angular/src/pipes/round.pipe.ts ***!
  \*************************************************/
/*! exports provided: RoundPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoundPipe", function() { return RoundPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../common-angular/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RoundPipe = (function () {
    function RoundPipe() {
    }
    RoundPipe.prototype.transform = function (input) {
        return Math.round(input);
    };
    RoundPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'ngxRound' })
    ], RoundPipe);
    return RoundPipe;
}());



/***/ }),

/***/ "../common-angular/src/pipes/safe.pipe.ts":
/*!************************************************!*\
  !*** ../common-angular/src/pipes/safe.pipe.ts ***!
  \************************************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../common-angular/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var SafePipe = (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (value, type) {
        switch (type) {
            case 'html':
                return this.sanitizer.bypassSecurityTrustHtml(value);
            case 'style':
                return this.sanitizer.bypassSecurityTrustStyle(value);
            case 'script':
                return this.sanitizer.bypassSecurityTrustScript(value);
            case 'url':
                return this.sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl':
                return this.sanitizer.bypassSecurityTrustResourceUrl(value);
            default:
                throw new Error("Invalid safe type specified: " + type);
        }
    };
    SafePipe.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
    ]; };
    SafePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'safe',
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], SafePipe);
    return SafePipe;
}());



/***/ }),

/***/ "../common-angular/src/pipes/timing.pipe.ts":
/*!**************************************************!*\
  !*** ../common-angular/src/pipes/timing.pipe.ts ***!
  \**************************************************/
/*! exports provided: TimingPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimingPipe", function() { return TimingPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../common-angular/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TimingPipe = (function () {
    function TimingPipe() {
    }
    TimingPipe.prototype.transform = function (time) {
        if (time) {
            var minutes = Math.floor(time / 60);
            var seconds = Math.floor(time % 60);
            return "" + this.initZero(minutes) + minutes + ":" + this.initZero(seconds) + seconds;
        }
        return '00:00';
    };
    TimingPipe.prototype.initZero = function (time) {
        return time < 10 ? '0' : '';
    };
    TimingPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'timing' })
    ], TimingPipe);
    return TimingPipe;
}());



/***/ }),

/***/ "./src/app/+maintenance-info/maintenance-info.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/+maintenance-info/maintenance-info.component.ts ***!
  \*****************************************************************/
/*! exports provided: MaintenanceInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenanceInfoComponent", function() { return MaintenanceInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modules_client_common_angular2_services_maintenance_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/client.common.angular2/services/maintenance.service */ "../common-angular/src/services/maintenance.service.ts");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var app_services_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/services/store */ "./src/app/services/store.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var MaintenanceInfoComponent = (function () {
    function MaintenanceInfoComponent(maintenanceService, store, router) {
        this.maintenanceService = maintenanceService;
        this.store = store;
        this.router = router;
        this.toolbarDisabled = true;
        this.getMessage();
        this.getStatus();
    }
    MaintenanceInfoComponent.prototype.getMessage = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4, this.maintenanceService.getMessage(this.store.maintenanceMode, environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"]['SETTINGS_MAINTENANCE_API_URL'])];
                    case 1:
                        _a.message = _b.sent();
                        return [2];
                }
            });
        });
    };
    MaintenanceInfoComponent.prototype.getStatus = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var interval;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                interval = setInterval(function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                    var status;
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, this.maintenanceService.getStatus(environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"]['SETTINGS_APP_TYPE'], environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"]['SETTINGS_MAINTENANCE_API_URL'])];
                            case 1:
                                status = _a.sent();
                                console.warn("Maintenance on '" + this.store.maintenanceMode + "': " + status);
                                if (!status) {
                                    clearInterval(interval);
                                    this.store.clearMaintenanceMode();
                                    this.router.navigate(['']);
                                }
                                return [2];
                        }
                    });
                }); }, 5000);
                return [2];
            });
        });
    };
    MaintenanceInfoComponent.ctorParameters = function () { return [
        { type: _modules_client_common_angular2_services_maintenance_service__WEBPACK_IMPORTED_MODULE_2__["MaintenanceService"] },
        { type: app_services_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    MaintenanceInfoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n\t\t<div\n\t\t\t*ngIf=\"message\"\n\t\t\tclass=\"maintenance-message-container\"\n\t\t\t[innerHTML]=\"message | safe: 'html'\"\n\t\t></div>\n\t",
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_modules_client_common_angular2_services_maintenance_service__WEBPACK_IMPORTED_MODULE_2__["MaintenanceService"],
            app_services_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], MaintenanceInfoComponent);
    return MaintenanceInfoComponent;
}());



/***/ }),

/***/ "./src/app/+maintenance-info/maintenance-info.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/+maintenance-info/maintenance-info.module.ts ***!
  \**************************************************************/
/*! exports provided: MaintenanceInfoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenanceInfoModule", function() { return MaintenanceInfoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modules_client_common_angular2_services_maintenance_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/client.common.angular2/services/maintenance.service */ "../common-angular/src/services/maintenance.service.ts");
/* harmony import */ var _maintenance_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./maintenance-info.component */ "./src/app/+maintenance-info/maintenance-info.component.ts");
/* harmony import */ var _modules_client_common_angular2_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/client.common.angular2/pipes/pipes.module */ "../common-angular/src/pipes/pipes.module.ts");







var routes = [
    {
        path: '',
        component: _maintenance_info_component__WEBPACK_IMPORTED_MODULE_5__["MaintenanceInfoComponent"],
    },
];
var MaintenanceInfoModule = (function () {
    function MaintenanceInfoModule() {
    }
    MaintenanceInfoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _modules_client_common_angular2_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"]],
            providers: [_modules_client_common_angular2_services_maintenance_service__WEBPACK_IMPORTED_MODULE_4__["MaintenanceService"]],
            declarations: [_maintenance_info_component__WEBPACK_IMPORTED_MODULE_5__["MaintenanceInfoComponent"]],
        })
    ], MaintenanceInfoModule);
    return MaintenanceInfoModule;
}());



/***/ })

}]);
//# sourceMappingURL=maintenance-info-maintenance-info-module.js.map