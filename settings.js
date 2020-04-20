(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/+settings/settings.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/+settings/settings.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n\t<h1>{{ 'SETTINGS_VIEW.SETTINGS' | translate }}</h1>\n</mat-card>\n\n<mat-card>\n\t<mat-form-field>\n\t\t<h5>{{ 'SETTINGS_VIEW.LANGUAGE' | translate }}</h5>\n\t\t<mat-select [(value)]=\"selectedLang\">\n\t\t\t<mat-option\n\t\t\t\t*ngFor=\"let lang of translateService.getLangs()\"\n\t\t\t\t[value]=\"lang\"\n\t\t\t\t(click)=\"switchLanguage(selectedLang)\"\n\t\t\t\t>{{ lang }}\n\t\t\t</mat-option>\n\t\t</mat-select>\n\t</mat-form-field>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/+settings/index.ts":
/*!************************************!*\
  !*** ./src/app/+settings/index.ts ***!
  \************************************/
/*! exports provided: SettingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _settings_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.module */ "./src/app/+settings/settings.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SettingsModule", function() { return _settings_module__WEBPACK_IMPORTED_MODULE_1__["SettingsModule"]; });





/***/ }),

/***/ "./src/app/+settings/settings.component.scss":
/*!***************************************************!*\
  !*** ./src/app/+settings/settings.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  background-color: #eeeeee;\n}\n\n.container {\n  width: 51vw;\n  margin: auto;\n}\n\n@media screen and (min-width: 1500px) {\n  .container {\n    width: 51vw;\n  }\n}\n\n@media screen and (max-width: 1499px) {\n  .container {\n    width: 70vw;\n  }\n}\n\n@media screen and (max-width: 500px) {\n  .container {\n    width: 100vw;\n  }\n}\n\nmasonry {\n  margin: auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2l0ZXhwZXJ0L0RvY3VtZW50cy9ldmVyL3BhY2thZ2VzL3Nob3Atd2ViLWFuZ3VsYXIvc3JjL2FwcC8rc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwLytzZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLHlCQUF5QjtBQ0MxQjs7QURFQTtFQUNDLFdBQVc7RUFDWCxZQUFZO0FDQ2I7O0FERUE7RUFDQztJQUNDLFdBQVc7RUNDWDtBQUNGOztBREVBO0VBQ0M7SUFDQyxXQUFXO0VDQ1g7QUFDRjs7QURFQTtFQUNDO0lBQ0MsWUFBWTtFQ0NaO0FBQ0Y7O0FERUE7RUFDQyxZQUFZO0FDQ2IiLCJmaWxlIjoic3JjL2FwcC8rc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG5cdGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XG59XG5cbi5jb250YWluZXIge1xuXHR3aWR0aDogNTF2dztcblx0bWFyZ2luOiBhdXRvO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNTAwcHgpIC8qIERlc2t0b3AgKi8ge1xuXHQuY29udGFpbmVyIHtcblx0XHR3aWR0aDogNTF2dztcblx0fVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDk5cHgpIC8qIFRhYmxldCAqLyB7XG5cdC5jb250YWluZXIge1xuXHRcdHdpZHRoOiA3MHZ3O1xuXHR9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSAvKiBNb2JpbGUgKi8ge1xuXHQuY29udGFpbmVyIHtcblx0XHR3aWR0aDogMTAwdnc7XG5cdH1cbn1cblxubWFzb25yeSB7XG5cdG1hcmdpbjogYXV0bztcbn1cbiIsIjpob3N0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiA1MXZ3O1xuICBtYXJnaW46IGF1dG87XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE1MDBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogNTF2dztcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDk5cHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDcwdnc7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICB9XG59XG5cbm1hc29ucnkge1xuICBtYXJnaW46IGF1dG87XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/+settings/settings.component.ts":
/*!*************************************************!*\
  !*** ./src/app/+settings/settings.component.ts ***!
  \*************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");




var SettingsComponent = (function () {
    function SettingsComponent(translateService) {
        this.translateService = translateService;
        this.defaultLanguage = '';
        this.defaultLanguage = environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"]['DEFAULT_LANGUAGE'];
        if (translateService.currentLang) {
            var current = translateService.currentLang;
            this.selectedLang = current;
            translateService.setDefaultLang(current);
        }
        else {
            translateService.addLangs([
                'en-US',
                'es-ES',
                'bg-BG',
                'he-IL',
                'ru-RU',
                'fr-FR',
                'it-IT',
            ]);
            translateService.setDefaultLang('en-US');
            var browserLang = translateService.getBrowserLang();
            if (this.defaultLanguage) {
                translateService.use(this.defaultLanguage);
            }
            else {
                browserLang.match(/en-US|es-ES|bg-BG|he-IL|ru-RU|fr-FR|it-IT/)
                    ? browserLang
                    : 'en-US';
            }
            this.selectedLang = this.translateService.currentLang;
        }
    }
    SettingsComponent.prototype.ngOnInit = function () { };
    SettingsComponent.prototype.switchLanguage = function (language) {
        this.translateService.use(language);
    };
    SettingsComponent.prototype.ngOnDestroy = function () { };
    SettingsComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
    ]; };
    SettingsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'settings',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./settings.component.html */ "./node_modules/raw-loader/index.js!./src/app/+settings/settings.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./settings.component.scss */ "./src/app/+settings/settings.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/+settings/settings.module.ts":
/*!**********************************************!*\
  !*** ./src/app/+settings/settings.module.ts ***!
  \**********************************************/
/*! exports provided: HttpLoaderFactory, SettingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModule", function() { return SettingsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-lazyload-image */ "./node_modules/ng-lazyload-image/fesm5/ng-lazyload-image.js");
/* harmony import */ var _settings_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings.routes */ "./src/app/+settings/settings.routes.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/fesm5/button.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/fesm5/card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/fesm5/checkbox.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/fesm5/form-field.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/fesm5/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/fesm5/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/fesm5/list.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/fesm5/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/fesm5/sidenav.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/fesm5/toolbar.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _warehouse_logo__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../warehouse-logo */ "./src/app/warehouse-logo/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var app_settings_settings_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! app/+settings/settings.component */ "./src/app/+settings/settings.component.ts");






















function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_20__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
var SettingsModule = (function () {
    function SettingsModule() {
    }
    SettingsModule.routes = _settings_routes__WEBPACK_IMPORTED_MODULE_5__["routes"];
    SettingsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [app_settings_settings_component__WEBPACK_IMPORTED_MODULE_21__["SettingsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClient"]],
                    },
                }),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"].forChild(_settings_routes__WEBPACK_IMPORTED_MODULE_5__["routes"]),
                ng_lazyload_image__WEBPACK_IMPORTED_MODULE_4__["LazyLoadImageModule"],
                _warehouse_logo__WEBPACK_IMPORTED_MODULE_17__["WarehouseLogoModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
            ],
        })
    ], SettingsModule);
    return SettingsModule;
}());



/***/ }),

/***/ "./src/app/+settings/settings.routes.ts":
/*!**********************************************!*\
  !*** ./src/app/+settings/settings.routes.ts ***!
  \**********************************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var app_settings_settings_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/+settings/settings.component */ "./src/app/+settings/settings.component.ts");


var routes = [
    {
        path: '',
        component: app_settings_settings_component__WEBPACK_IMPORTED_MODULE_1__["SettingsComponent"],
    },
];


/***/ })

}]);
//# sourceMappingURL=settings.js.map