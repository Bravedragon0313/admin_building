(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~products~settings"],{

/***/ "./node_modules/ng-lazyload-image/fesm5/ng-lazyload-image.js":
/*!*******************************************************************!*\
  !*** ./node_modules/ng-lazyload-image/fesm5/ng-lazyload-image.js ***!
  \*******************************************************************/
/*! exports provided: LazyLoadImageDirective, LazyLoadImageModule, intersectionObserverPreset, scrollPreset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyLoadImageDirective", function() { return LazyLoadImageDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyLoadImageModule", function() { return LazyLoadImageModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intersectionObserverPreset", function() { return intersectionObserverPreset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollPreset", function() { return scrollPreset; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var cssClassNames = {
    loaded: 'ng-lazyloaded',
    loading: 'ng-lazyloading',
    failed: 'ng-failed-lazyloaded'
};
function removeCssClassName(element, cssClassName) {
    element.className = element.className.replace(cssClassName, '');
}
function addCssClassName(element, cssClassName) {
    if (!element.className.includes(cssClassName)) {
        element.className += " " + cssClassName;
    }
}
function hasCssClassName(element, cssClassName) {
    return element.className && element.className.includes(cssClassName);
}

function isWindowDefined() {
    return typeof window !== 'undefined';
}
function isChildOfPicture(element) {
    return Boolean(element.parentElement && element.parentElement.nodeName.toLowerCase() === 'picture');
}
function isImageElement(element) {
    return element.nodeName.toLowerCase() === 'img';
}
function setImage(element, imagePath, useSrcset) {
    if (isImageElement(element)) {
        if (useSrcset) {
            element.srcset = imagePath;
        }
        else {
            element.src = imagePath;
        }
    }
    else {
        element.style.backgroundImage = "url('" + imagePath + "')";
    }
    return element;
}
function setSources(attrName) {
    return function (image) {
        var sources = image.parentElement.getElementsByTagName('source');
        for (var i = 0; i < sources.length; i++) {
            var attrValue = sources[i].getAttribute(attrName);
            if (attrValue) {
                sources[i].srcset = attrValue;
            }
        }
    };
}
var setSourcesToDefault = setSources('defaultImage');
var setSourcesToLazy = setSources('lazyLoad');
var setSourcesToError = setSources('errorImage');
function setImageAndSources(setSourcesFn) {
    return function (element, imagePath, useSrcset) {
        if (isImageElement(element) && isChildOfPicture(element)) {
            setSourcesFn(element);
        }
        if (imagePath) {
            setImage(element, imagePath, useSrcset);
        }
    };
}
var setImageAndSourcesToDefault = setImageAndSources(setSourcesToDefault);
var setImageAndSourcesToLazy = setImageAndSources(setSourcesToLazy);
var setImageAndSourcesToError = setImageAndSources(setSourcesToError);

var end = function (_a) {
    var element = _a.element;
    return addCssClassName(element, cssClassNames.loaded);
};
var loadImage = function (_a) {
    var element = _a.element, useSrcset = _a.useSrcset, imagePath = _a.imagePath;
    var img;
    if (isImageElement(element) && isChildOfPicture(element)) {
        var parentClone = element.parentNode.cloneNode(true);
        img = parentClone.getElementsByTagName('img')[0];
        setSourcesToLazy(img);
        setImage(img, imagePath, useSrcset);
    }
    else {
        img = new Image();
        if (isImageElement(element) && element.sizes) {
            img.sizes = element.sizes;
        }
        if (useSrcset) {
            img.srcset = imagePath;
        }
        else {
            img.src = imagePath;
        }
    }
    if (img.decode) {
        return img.decode().then(function () { return imagePath; });
    }
    return new Promise(function (resolve, reject) {
        img.onload = function () { return resolve(imagePath); };
        img.onerror = function () { return reject(null); };
    });
};
var setErrorImage = function (_a) {
    var element = _a.element, errorImagePath = _a.errorImagePath, useSrcset = _a.useSrcset;
    setImageAndSourcesToError(element, errorImagePath, useSrcset);
    addCssClassName(element, cssClassNames.failed);
};
var setLoadedImage = function (_a) {
    var element = _a.element, imagePath = _a.imagePath, useSrcset = _a.useSrcset;
    setImageAndSourcesToLazy(element, imagePath, useSrcset);
};
var setup = function (_a) {
    var element = _a.element, defaultImagePath = _a.defaultImagePath, useSrcset = _a.useSrcset;
    setImageAndSourcesToDefault(element, defaultImagePath, useSrcset);
    if (hasCssClassName(element, cssClassNames.loaded)) {
        removeCssClassName(element, cssClassNames.loaded);
    }
};
var sharedPreset = {
    finally: end,
    loadImage: loadImage,
    setErrorImage: setErrorImage,
    setLoadedImage: setLoadedImage,
    setup: setup
};

var Rect = /** @class */ (function () {
    function Rect(left, top, right, bottom) {
        this.left = left;
        this.top = top;
        this.right = right;
        this.bottom = bottom;
    }
    Rect.fromElement = function (element) {
        var _a = element.getBoundingClientRect(), left = _a.left, top = _a.top, right = _a.right, bottom = _a.bottom;
        if (left === 0 && top === 0 && right === 0 && bottom === 0) {
            return Rect.empty;
        }
        else {
            return new Rect(left, top, right, bottom);
        }
    };
    Rect.fromWindow = function (_window) {
        return new Rect(0, 0, _window.innerWidth, _window.innerHeight);
    };
    Rect.prototype.inflate = function (inflateBy) {
        this.left -= inflateBy;
        this.top -= inflateBy;
        this.right += inflateBy;
        this.bottom += inflateBy;
    };
    Rect.prototype.intersectsWith = function (rect) {
        return rect.left < this.right && this.left < rect.right && rect.top < this.bottom && this.top < rect.bottom;
    };
    Rect.prototype.getIntersectionWith = function (rect) {
        var left = Math.max(this.left, rect.left);
        var top = Math.max(this.top, rect.top);
        var right = Math.min(this.right, rect.right);
        var bottom = Math.min(this.bottom, rect.bottom);
        if (right >= left && bottom >= top) {
            return new Rect(left, top, right, bottom);
        }
        else {
            return Rect.empty;
        }
    };
    Rect.empty = new Rect(0, 0, 0, 0);
    return Rect;
}());

var scrollListeners = new WeakMap();
function sampleObservable(obs, scheduler) {
    return obs.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["sampleTime"])(100, scheduler), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["share"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''));
}
// Only create one scroll listener per target and share the observable.
// Typical, there will only be one observable per application
var getScrollListener = function (scrollTarget) {
    if (!scrollTarget || typeof scrollTarget.addEventListener !== 'function') {
        if (isWindowDefined()) {
            console.warn('`addEventListener` on ' + scrollTarget + ' (scrollTarget) is not a function. Skipping this target');
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["empty"])();
    }
    var scrollListener = scrollListeners.get(scrollTarget);
    if (scrollListener) {
        return scrollListener;
    }
    var srollEvent = rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
        var eventName = 'scroll';
        var handler = function (event) { return observer.next(event); };
        var options = { passive: true, capture: false };
        scrollTarget.addEventListener(eventName, handler, options);
        return function () { return scrollTarget.removeEventListener(eventName, handler, options); };
    });
    var listener = sampleObservable(srollEvent);
    scrollListeners.set(scrollTarget, listener);
    return listener;
};

var isVisible = function (_a, getWindow) {
    var element = _a.element, offset = _a.offset, scrollContainer = _a.scrollContainer;
    if (getWindow === void 0) { getWindow = function () { return window; }; }
    var elementBounds = Rect.fromElement(element);
    if (elementBounds === Rect.empty) {
        return false;
    }
    var windowBounds = Rect.fromWindow(getWindow());
    elementBounds.inflate(offset);
    if (scrollContainer) {
        var scrollContainerBounds = Rect.fromElement(scrollContainer);
        var intersection = scrollContainerBounds.getIntersectionWith(windowBounds);
        return elementBounds.intersectsWith(intersection);
    }
    else {
        return elementBounds.intersectsWith(windowBounds);
    }
};
var getObservable = function (attributes) {
    if (attributes.scrollObservable) {
        return attributes.scrollObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''));
    }
    if (attributes.scrollContainer) {
        return getScrollListener(attributes.scrollContainer);
    }
    return getScrollListener(isWindowDefined() ? window : undefined);
};
var scrollPreset = Object.assign({}, sharedPreset, {
    isVisible: isVisible,
    getObservable: getObservable
});

function cretateHooks(options) {
    if (!options) {
        return scrollPreset;
    }
    var hooks = {};
    if (options.preset) {
        Object.assign(hooks, options.preset);
    }
    else {
        Object.assign(hooks, scrollPreset);
    }
    Object.keys(options)
        .filter(function (key) { return key !== 'preset'; })
        .forEach(function (key) {
        hooks[key] = options[key];
    });
    return hooks;
}

function lazyLoadImage(hookSet, attributes) {
    return function (scrollObservable) {
        return scrollObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (event) {
            return hookSet.isVisible({
                element: attributes.element,
                event: event,
                offset: attributes.offset,
                scrollContainer: attributes.scrollContainer
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function () { return hookSet.loadImage(attributes); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (imagePath) {
            return hookSet.setLoadedImage({
                element: attributes.element,
                imagePath: imagePath,
                useSrcset: attributes.useSrcset
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () { return true; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function () {
            hookSet.setErrorImage(attributes);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(false);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () { return hookSet.finally(attributes); }));
    };
}

var LazyLoadImageDirective = /** @class */ (function () {
    function LazyLoadImageDirective(el, ngZone, platformId, options) {
        this.onLoad = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); // Callback when an image is loaded
        this.elementRef = el;
        this.ngZone = ngZone;
        this.propertyChanges$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"]();
        this.platformId = platformId;
        this.hooks = cretateHooks(options);
    }
    LazyLoadImageDirective.prototype.ngOnChanges = function () {
        this.propertyChanges$.next({
            element: this.elementRef.nativeElement,
            imagePath: this.lazyImage,
            defaultImagePath: this.defaultImage,
            errorImagePath: this.errorImage,
            useSrcset: this.useSrcset,
            offset: this.offset ? this.offset | 0 : 0,
            scrollContainer: this.scrollTarget,
            scrollObservable: this.scrollObservable
        });
    };
    LazyLoadImageDirective.prototype.ngAfterContentInit = function () {
        var _this = this;
        // Disable lazy load image in server side
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformServer"])(this.platformId)) {
            return null;
        }
        this.ngZone.runOutsideAngular(function () {
            _this.scrollSubscription = _this.propertyChanges$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (attributes) { return _this.hooks.setup(attributes); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (attributes) { return _this.hooks.getObservable(attributes).pipe(lazyLoadImage(_this.hooks, attributes)); }))
                .subscribe(function (success) { return _this.onLoad.emit(success); });
        });
    };
    LazyLoadImageDirective.prototype.ngOnDestroy = function () {
        if (this.scrollSubscription) {
            this.scrollSubscription.unsubscribe();
        }
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('lazyLoad'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], LazyLoadImageDirective.prototype, "lazyImage", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], LazyLoadImageDirective.prototype, "defaultImage", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], LazyLoadImageDirective.prototype, "errorImage", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], LazyLoadImageDirective.prototype, "scrollTarget", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], LazyLoadImageDirective.prototype, "scrollObservable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], LazyLoadImageDirective.prototype, "offset", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], LazyLoadImageDirective.prototype, "useSrcset", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], LazyLoadImageDirective.prototype, "onLoad", void 0);
    LazyLoadImageDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[lazyLoad]'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('options')),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], Object, Object])
    ], LazyLoadImageDirective);
    return LazyLoadImageDirective;
}());

var LazyLoadImageModule = /** @class */ (function () {
    function LazyLoadImageModule() {
    }
    LazyLoadImageModule_1 = LazyLoadImageModule;
    LazyLoadImageModule.forRoot = function (options) {
        return {
            ngModule: LazyLoadImageModule_1,
            providers: [{ provide: 'options', useValue: options }]
        };
    };
    var LazyLoadImageModule_1;
    LazyLoadImageModule = LazyLoadImageModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [LazyLoadImageDirective],
            exports: [LazyLoadImageDirective]
        })
    ], LazyLoadImageModule);
    return LazyLoadImageModule;
}());

var observers = new WeakMap();
var intersectionSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
function loadingCallback(entrys) {
    entrys.forEach(function (entry) { return intersectionSubject.next(entry); });
}
var getIntersectionObserver = function (attributes) {
    if (!attributes.scrollContainer && !isWindowDefined()) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["empty"])();
    }
    var options = {
        root: attributes.scrollContainer
    };
    if (attributes.offset) {
        options.rootMargin = attributes.offset + "px";
    }
    var scrollContainer = attributes.scrollContainer || window;
    var observer = observers.get(scrollContainer);
    if (!observer) {
        observer = new IntersectionObserver(loadingCallback, options);
        observers.set(scrollContainer, observer);
    }
    observer.observe(attributes.element);
    return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (obs) {
        var subscription = intersectionSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (entry) { return entry.target === attributes.element; })).subscribe(obs);
        return function () {
            subscription.unsubscribe();
            observer.unobserve(attributes.element);
        };
    });
};

var isVisible$1 = function (_a) {
    var event = _a.event;
    return event.isIntersecting;
};
var getObservable$1 = function (attributes, _getInterObserver) {
    if (_getInterObserver === void 0) { _getInterObserver = getIntersectionObserver; }
    if (attributes.scrollObservable) {
        return attributes.scrollObservable;
    }
    return _getInterObserver(attributes);
};
var intersectionObserverPreset = Object.assign({}, sharedPreset, {
    isVisible: isVisible$1,
    getObservable: getObservable$1
});


//# sourceMappingURL=ng-lazyload-image.js.map


/***/ }),

/***/ "./src/app/warehouse-logo/index.ts":
/*!*****************************************!*\
  !*** ./src/app/warehouse-logo/index.ts ***!
  \*****************************************/
/*! exports provided: WarehouseLogoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _warehouse_logo_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./warehouse-logo.module */ "./src/app/warehouse-logo/warehouse-logo.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WarehouseLogoModule", function() { return _warehouse_logo_module__WEBPACK_IMPORTED_MODULE_1__["WarehouseLogoModule"]; });





/***/ }),

/***/ "./src/app/warehouse-logo/warehouse-logo.component.ts":
/*!************************************************************!*\
  !*** ./src/app/warehouse-logo/warehouse-logo.component.ts ***!
  \************************************************************/
/*! exports provided: WarehouseLogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseLogoComponent", function() { return WarehouseLogoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WarehouseLogoComponent = (function () {
    function WarehouseLogoComponent() {
        this.border = false;
        this.light = false;
        return;
    }
    WarehouseLogoComponent.prototype.ngOnInit = function () {
        return;
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], WarehouseLogoComponent.prototype, "logo", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.bordered'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], WarehouseLogoComponent.prototype, "border", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], WarehouseLogoComponent.prototype, "light", void 0);
    WarehouseLogoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'warehouse-logo',
            template: "\n\t\t<img [src]=\"logo\" [ngClass]=\"{ bordered: border, lighted: light }\" />\n\t",
            styles: ["\n\t\t\t:host {\n\t\t\t\twidth: 56px;\n\t\t\t\theight: 56px;\n\t\t\t\tborder-radius: 50%;\n\t\t\t\tbackground-color: #fff;\n\t\t\t\tdisplay: flex;\n\t\t\t\tjustify-content: center;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t:host.bordered {\n\t\t\t\tborder: solid #95989a 1px;\n\t\t\t}\n\n\t\t\timg {\n\t\t\t\tmax-width: 69%;\n\t\t\t\tmax-height: 69%;\n\t\t\t\tuser-drag: none;\n\t\t\t\tuser-select: none;\n\t\t\t\t-moz-user-select: none;\n\t\t\t\t-webkit-user-drag: none;\n\t\t\t\t-webkit-user-select: none;\n\t\t\t\t-ms-user-select: none;\n\t\t\t\twidth: auto;\n\t\t\t\theight: auto;\n\t\t\t}\n\n\t\t\timg.light {\n\t\t\t\topacity: 0.8;\n\t\t\t}\n\t\t"]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], WarehouseLogoComponent);
    return WarehouseLogoComponent;
}());



/***/ }),

/***/ "./src/app/warehouse-logo/warehouse-logo.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/warehouse-logo/warehouse-logo.module.ts ***!
  \*********************************************************/
/*! exports provided: WarehouseLogoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseLogoModule", function() { return WarehouseLogoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _warehouse_logo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./warehouse-logo.component */ "./src/app/warehouse-logo/warehouse-logo.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




var WarehouseLogoModule = (function () {
    function WarehouseLogoModule() {
    }
    WarehouseLogoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
            exports: [_warehouse_logo_component__WEBPACK_IMPORTED_MODULE_2__["WarehouseLogoComponent"]],
            declarations: [_warehouse_logo_component__WEBPACK_IMPORTED_MODULE_2__["WarehouseLogoComponent"]],
            providers: [],
        })
    ], WarehouseLogoModule);
    return WarehouseLogoModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~products~settings.js.map