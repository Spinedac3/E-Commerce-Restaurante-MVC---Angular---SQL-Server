(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./ClientApp/app/app.component.css": 
        /*!*****************************************!*\
          !*** ./ClientApp/app/app.component.css ***!
          \*****************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("h1 {\r\n    font-family: 'Modak', cursive;\r\n    color: #5F2600;\r\n}\r\n.logo {\r\n    height: 100px;\r\n    width: 100px;\r\n}\r\n@media only screen and (max-width: 360px) {\r\n    .logocuadro{\r\n        display: none;\r\n    }\r\n\r\n    h1 {\r\n        text-align:center;\r\n    }\r\n\r\n    .b {\r\n        display: none;\r\n    }\r\n\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw2QkFBNkI7SUFDN0IsY0FBYztBQUNsQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7QUFDaEI7QUFFQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7OztBQUdKIiwiZmlsZSI6IkNsaWVudEFwcC9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XHJcbiAgICBmb250LWZhbWlseTogJ01vZGFrJywgY3Vyc2l2ZTtcclxuICAgIGNvbG9yOiAjNUYyNjAwO1xyXG59XHJcbi5sb2dvIHtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzYwcHgpIHtcclxuICAgIC5sb2dvY3VhZHJve1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgaDEge1xyXG4gICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5iIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuXHJcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./ClientApp/app/app.component.ts": 
        /*!****************************************!*\
          !*** ./ClientApp/app/app.component.ts ***!
          \****************************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'RestaurantFront';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'rest-app',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./ClientApp/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./ClientApp/app/app.module.ts": 
        /*!*************************************!*\
          !*** ./ClientApp/app/app.module.ts ***!
          \*************************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./ClientApp/app/app.component.ts");
            /* harmony import */ var _home_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home/home.component */ "./ClientApp/app/home/home/home.component.ts");
            /* harmony import */ var _login_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/user-login/user-login.component */ "./ClientApp/app/login/user-login/user-login.component.ts");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.js");
            /* harmony import */ var _restaurant_menu_principal_menu_principal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./restaurant/menu-principal/menu-principal.component */ "./ClientApp/app/restaurant/menu-principal/menu-principal.component.ts");
            /* harmony import */ var _desayunos_desayunos_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./desayunos/desayunos.component */ "./ClientApp/app/desayunos/desayunos.component.ts");
            /* harmony import */ var _entradas_entradas_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./entradas/entradas.component */ "./ClientApp/app/entradas/entradas.component.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _bebidas_bebidas_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./bebidas/bebidas.component */ "./ClientApp/app/bebidas/bebidas.component.ts");
            /* harmony import */ var _bebidas_cafes_cafes_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./bebidas/cafes/cafes.component */ "./ClientApp/app/bebidas/cafes/cafes.component.ts");
            /* harmony import */ var _order_order_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./order/order.component */ "./ClientApp/app/order/order.component.ts");
            /* harmony import */ var _order_cart_cart_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./order/cart/cart.component */ "./ClientApp/app/order/cart/cart.component.ts");
            /* harmony import */ var _factura_factura_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./factura/factura.component */ "./ClientApp/app/factura/factura.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _bebidas_jugos_jugos_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./bebidas/jugos/jugos.component */ "./ClientApp/app/bebidas/jugos/jugos.component.ts");
            /* harmony import */ var _bebidas_vinos_vinos_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./bebidas/vinos/vinos.component */ "./ClientApp/app/bebidas/vinos/vinos.component.ts");
            /* harmony import */ var _bebidas_licores_licores_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./bebidas/licores/licores.component */ "./ClientApp/app/bebidas/licores/licores.component.ts");
            /* harmony import */ var _desayunos_desayuno_desayuno_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./desayunos/desayuno/desayuno.component */ "./ClientApp/app/desayunos/desayuno/desayuno.component.ts");
            /* harmony import */ var _desayunos_pancakes_pancakes_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./desayunos/pancakes/pancakes.component */ "./ClientApp/app/desayunos/pancakes/pancakes.component.ts");
            /* harmony import */ var _desayunos_sandwiches_sandwiches_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./desayunos/sandwiches/sandwiches.component */ "./ClientApp/app/desayunos/sandwiches/sandwiches.component.ts");
            /* harmony import */ var _desayunos_cenas_desayunos_cenas_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./desayunos-cenas/desayunos-cenas.component */ "./ClientApp/app/desayunos-cenas/desayunos-cenas.component.ts");
            /* harmony import */ var _desayunos_cenas_pastas_pastas_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./desayunos-cenas/pastas/pastas.component */ "./ClientApp/app/desayunos-cenas/pastas/pastas.component.ts");
            /* harmony import */ var _desayunos_cenas_hamburguesas_hamburguesas_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./desayunos-cenas/hamburguesas/hamburguesas.component */ "./ClientApp/app/desayunos-cenas/hamburguesas/hamburguesas.component.ts");
            /* harmony import */ var _desayunos_cenas_ensaladas_ensaladas_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./desayunos-cenas/ensaladas/ensaladas.component */ "./ClientApp/app/desayunos-cenas/ensaladas/ensaladas.component.ts");
            /* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
            /* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/ __webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_29__);
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                        _home_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                        _login_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_6__["UserLoginComponent"],
                        _restaurant_menu_principal_menu_principal_component__WEBPACK_IMPORTED_MODULE_9__["MenuPrincipalComponent"],
                        _desayunos_desayunos_component__WEBPACK_IMPORTED_MODULE_10__["DesayunosComponent"],
                        _entradas_entradas_component__WEBPACK_IMPORTED_MODULE_11__["EntradasComponent"],
                        _bebidas_bebidas_component__WEBPACK_IMPORTED_MODULE_13__["BebidasComponent"],
                        _bebidas_cafes_cafes_component__WEBPACK_IMPORTED_MODULE_14__["CafesComponent"],
                        _order_order_component__WEBPACK_IMPORTED_MODULE_15__["OrderComponent"],
                        _order_cart_cart_component__WEBPACK_IMPORTED_MODULE_16__["CartComponent"],
                        _factura_factura_component__WEBPACK_IMPORTED_MODULE_17__["FacturaComponent"],
                        _bebidas_jugos_jugos_component__WEBPACK_IMPORTED_MODULE_19__["JugosComponent"],
                        _bebidas_vinos_vinos_component__WEBPACK_IMPORTED_MODULE_20__["VinosComponent"],
                        _bebidas_licores_licores_component__WEBPACK_IMPORTED_MODULE_21__["LicoresComponent"],
                        _desayunos_desayuno_desayuno_component__WEBPACK_IMPORTED_MODULE_22__["DesayunoComponent"],
                        _desayunos_pancakes_pancakes_component__WEBPACK_IMPORTED_MODULE_23__["PancakesComponent"],
                        _desayunos_sandwiches_sandwiches_component__WEBPACK_IMPORTED_MODULE_24__["SandwichesComponent"],
                        _desayunos_cenas_desayunos_cenas_component__WEBPACK_IMPORTED_MODULE_25__["DesayunosCenasComponent"],
                        _desayunos_cenas_pastas_pastas_component__WEBPACK_IMPORTED_MODULE_26__["PastasComponent"],
                        _desayunos_cenas_hamburguesas_hamburguesas_component__WEBPACK_IMPORTED_MODULE_27__["HamburguesasComponent"],
                        _desayunos_cenas_ensaladas_ensaladas_component__WEBPACK_IMPORTED_MODULE_28__["EnsaladasComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                            { path: "home", component: _home_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
                            { path: "userLogin", component: _login_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_6__["UserLoginComponent"] },
                            { path: "menuPrincipal", component: _restaurant_menu_principal_menu_principal_component__WEBPACK_IMPORTED_MODULE_9__["MenuPrincipalComponent"] },
                            { path: "desayunos", component: _desayunos_desayunos_component__WEBPACK_IMPORTED_MODULE_10__["DesayunosComponent"] },
                            { path: "entradas", component: _entradas_entradas_component__WEBPACK_IMPORTED_MODULE_11__["EntradasComponent"] },
                            { path: "bebidas", component: _bebidas_bebidas_component__WEBPACK_IMPORTED_MODULE_13__["BebidasComponent"] },
                            { path: "cafes", component: _bebidas_cafes_cafes_component__WEBPACK_IMPORTED_MODULE_14__["CafesComponent"] },
                            { path: "jugos", component: _bebidas_jugos_jugos_component__WEBPACK_IMPORTED_MODULE_19__["JugosComponent"] },
                            { path: "vinos", component: _bebidas_vinos_vinos_component__WEBPACK_IMPORTED_MODULE_20__["VinosComponent"] },
                            { path: "licores", component: _bebidas_licores_licores_component__WEBPACK_IMPORTED_MODULE_21__["LicoresComponent"] },
                            { path: "desayuno", component: _desayunos_desayuno_desayuno_component__WEBPACK_IMPORTED_MODULE_22__["DesayunoComponent"] },
                            { path: "pancakes", component: _desayunos_pancakes_pancakes_component__WEBPACK_IMPORTED_MODULE_23__["PancakesComponent"] },
                            { path: "sandwiches", component: _desayunos_sandwiches_sandwiches_component__WEBPACK_IMPORTED_MODULE_24__["SandwichesComponent"] },
                            { path: "almuerzosycenas", component: _desayunos_cenas_desayunos_cenas_component__WEBPACK_IMPORTED_MODULE_25__["DesayunosCenasComponent"] },
                            { path: "pastas", component: _desayunos_cenas_pastas_pastas_component__WEBPACK_IMPORTED_MODULE_26__["PastasComponent"] },
                            { path: "hamburguesas", component: _desayunos_cenas_hamburguesas_hamburguesas_component__WEBPACK_IMPORTED_MODULE_27__["HamburguesasComponent"] },
                            { path: "ensaladas", component: _desayunos_cenas_ensaladas_ensaladas_component__WEBPACK_IMPORTED_MODULE_28__["EnsaladasComponent"] },
                            { path: "orden", component: _order_order_component__WEBPACK_IMPORTED_MODULE_15__["OrderComponent"] },
                            { path: "factura", component: _factura_factura_component__WEBPACK_IMPORTED_MODULE_17__["FacturaComponent"] },
                            { path: '', redirectTo: 'home', pathMatch: 'full' },
                            { path: '**', redirectTo: 'home', pathMatch: 'full' },
                        ]),
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                        angular_font_awesome__WEBPACK_IMPORTED_MODULE_8__["AngularFontAwesomeModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
                        primeng_dropdown__WEBPACK_IMPORTED_MODULE_29__["DropdownModule"]
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./ClientApp/app/bebidas/bebidas.component.css": 
        /*!*****************************************************!*\
          !*** ./ClientApp/app/bebidas/bebidas.component.css ***!
          \*****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("h2 {\r\n    text-align: center;\r\n    font-family: 'Righteous', cursive;\r\n}\r\n\r\n.btn {\r\n    border: solid 2px black;\r\n}\r\n\r\nfooter {\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvYmViaWRhcy9iZWJpZGFzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6IkNsaWVudEFwcC9hcHAvYmViaWRhcy9iZWJpZGFzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogJ1JpZ2h0ZW91cycsIGN1cnNpdmU7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gICAgYm9yZGVyOiBzb2xpZCAycHggYmxhY2s7XHJcbn1cclxuXHJcbmZvb3RlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./ClientApp/app/bebidas/bebidas.component.ts": 
        /*!****************************************************!*\
          !*** ./ClientApp/app/bebidas/bebidas.component.ts ***!
          \****************************************************/
        /*! exports provided: BebidasComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BebidasComponent", function () { return BebidasComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var BebidasComponent = /** @class */ (function () {
                function BebidasComponent() {
                }
                BebidasComponent.prototype.ngOnInit = function () {
                };
                return BebidasComponent;
            }());
            BebidasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-bebidas',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bebidas.component.html */ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/bebidas/bebidas.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bebidas.component.css */ "./ClientApp/app/bebidas/bebidas.component.css")).default]
                })
            ], BebidasComponent);
            /***/ 
        }),
        /***/ "./ClientApp/app/bebidas/cafes/cafes.component.css": 
        /*!*********************************************************!*\
          !*** ./ClientApp/app/bebidas/cafes/cafes.component.css ***!
          \*********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2JlYmlkYXMvY2FmZXMvY2FmZXMuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./ClientApp/app/bebidas/cafes/cafes.component.ts": 
        /*!********************************************************!*\
          !*** ./ClientApp/app/bebidas/cafes/cafes.component.ts ***!
          \********************************************************/
        /*! exports provided: CafesComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CafesComponent", function () { return CafesComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var ClientApp_app_shared_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ClientApp/app/shared/product.service */ "./ClientApp/app/shared/product.service.ts");
            var CafesComponent = /** @class */ (function () {
                function CafesComponent(productService) {
                    this.productService = productService;
                    this.cafes = [];
                    this.errorMessage = '';
                }
                CafesComponent.prototype.addProduct = function (product) {
                    this.productService.añadirAOrden(product);
                };
                CafesComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.productService.getCafes().subscribe({
                        next: function (cafes) {
                            _this.cafes = cafes;
                        },
                        error: function (err) { return _this.errorMessage = err; }
                    });
                };
                return CafesComponent;
            }());
            CafesComponent.ctorParameters = function () { return [
                { type: ClientApp_app_shared_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }
            ]; };
            CafesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-cafes',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cafes.component.html */ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/bebidas/cafes/cafes.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cafes.component.css */ "./ClientApp/app/bebidas/cafes/cafes.component.css")).default]
                })
            ], CafesComponent);
            /***/ 
        }),
        /***/ "./ClientApp/app/bebidas/jugos/jugos.component.css": 
        /*!*********************************************************!*\
          !*** ./ClientApp/app/bebidas/jugos/jugos.component.css ***!
          \*********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2JlYmlkYXMvanVnb3MvanVnb3MuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./ClientApp/app/bebidas/jugos/jugos.component.ts": 
        /*!********************************************************!*\
          !*** ./ClientApp/app/bebidas/jugos/jugos.component.ts ***!
          \********************************************************/
        /*! exports provided: JugosComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JugosComponent", function () { return JugosComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var ClientApp_app_shared_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ClientApp/app/shared/product.service */ "./ClientApp/app/shared/product.service.ts");
            var JugosComponent = /** @class */ (function () {
                function JugosComponent(productService) {
                    this.productService = productService;
                    this.jugos = [];
                    this.errorMessage = '';
                }
                JugosComponent.prototype.addProduct = function (jugo) {
                    this.productService.añadirAOrden(jugo);
                };
                JugosComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.productService.getJugos().subscribe({
                        next: function (jugos) {
                            _this.jugos = jugos;
                        },
                        error: function (err) { return _this.errorMessage = err; }
                    });
                };
                return JugosComponent;
            }());
            JugosComponent.ctorParameters = function () { return [
                { type: ClientApp_app_shared_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }
            ]; };
            JugosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-jugos',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./jugos.component.html */ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/bebidas/jugos/jugos.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./jugos.component.css */ "./ClientApp/app/bebidas/jugos/jugos.component.css")).default]
                })
            ], JugosComponent);
            /***/ 
        }),
        /***/ "./ClientApp/app/bebidas/licores/licores.component.css": 
        /*!*************************************************************!*\
          !*** ./ClientApp/app/bebidas/licores/licores.component.css ***!
          \*************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2JlYmlkYXMvbGljb3Jlcy9saWNvcmVzLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./ClientApp/app/bebidas/licores/licores.component.ts": 
        /*!************************************************************!*\
          !*** ./ClientApp/app/bebidas/licores/licores.component.ts ***!
          \************************************************************/
        /*! exports provided: LicoresComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LicoresComponent", function () { return LicoresComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var ClientApp_app_shared_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ClientApp/app/shared/product.service */ "./ClientApp/app/shared/product.service.ts");
            var LicoresComponent = /** @class */ (function () {
                function LicoresComponent(productService) {
                    this.productService = productService;
                    this.licores = [];
                    this.errorMessage = '';
                }
                LicoresComponent.prototype.addProduct = function (licor) {
                    this.productService.añadirAOrden(licor);
                };
                LicoresComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.productService.getLicores().subscribe({
                        next: function (licores) {
                            _this.licores = licores;
                        },
                        error: function (err) { return _this.errorMessage = err; }
                    });
                };
                return LicoresComponent;
            }());
            LicoresComponent.ctorParameters = function () { return [
                { type: ClientApp_app_shared_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }
            ]; };
            LicoresComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-licores',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./licores.component.html */ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/bebidas/licores/licores.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./licores.component.css */ "./ClientApp/app/bebidas/licores/licores.component.css")).default]
                })
            ], LicoresComponent);
            /***/ 
        }),
        /***/ "./ClientApp/app/bebidas/vinos/vinos.component.css": 
        /*!*********************************************************!*\
          !*** ./ClientApp/app/bebidas/vinos/vinos.component.css ***!
          \*********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2JlYmlkYXMvdmlub3Mvdmlub3MuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./ClientApp/app/bebidas/vinos/vinos.component.ts": 
        /*!********************************************************!*\
          !*** ./ClientApp/app/bebidas/vinos/vinos.component.ts ***!
          \********************************************************/
        /*! exports provided: VinosComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VinosComponent", function () { return VinosComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var ClientApp_app_shared_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ClientApp/app/shared/product.service */ "./ClientApp/app/shared/product.service.ts");
            var VinosComponent = /** @class */ (function () {
                function VinosComponent(productService) {
                    this.productService = productService;
                    this.vinos = [];
                    this.errorMessage = '';
                }
                VinosComponent.prototype.addProduct = function (vino) {
                    this.productService.añadirAOrden(vino);
                };
                VinosComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.productService.getVinos().subscribe({
                        next: function (vinos) {
                            _this.vinos = vinos;
                        },
                        error: function (err) { return _this.errorMessage = err; }
                    });
                };
                return VinosComponent;
            }());
            VinosComponent.ctorParameters = function () { return [
                { type: ClientApp_app_shared_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }
            ]; };
            VinosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-vinos',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./vinos.component.html */ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/bebidas/vinos/vinos.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./vinos.component.css */ "./ClientApp/app/bebidas/vinos/vinos.component.css")).default]
                })
            ], VinosComponent);
            /***/ 
        }),
        /***/ "./ClientApp/app/desayunos-cenas/desayunos-cenas.component.css": 
        /*!*********************************************************************!*\
          !*** ./ClientApp/app/desayunos-cenas/desayunos-cenas.component.css ***!
          \*********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("h2 {\r\n    text-align: center;\r\n    font-family: 'Righteous', cursive;\r\n}\r\n\r\n.btn {\r\n    border: solid 2px black;\r\n}\r\n\r\nfooter {\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvZGVzYXl1bm9zLWNlbmFzL2Rlc2F5dW5vcy1jZW5hcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2Rlc2F5dW5vcy1jZW5hcy9kZXNheXVub3MtY2VuYXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAnUmlnaHRlb3VzJywgY3Vyc2l2ZTtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICBib3JkZXI6IHNvbGlkIDJweCBibGFjaztcclxufVxyXG5cclxuZm9vdGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./ClientApp/app/desayunos-cenas/desayunos-cenas.component.ts": 
        /*!********************************************************************!*\
          !*** ./ClientApp/app/desayunos-cenas/desayunos-cenas.component.ts ***!
          \********************************************************************/
        /*! exports provided: DesayunosCenasComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesayunosCenasComponent", function () { return DesayunosCenasComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var DesayunosCenasComponent = /** @class */ (function () {
                function DesayunosCenasComponent(router) {
                    this.router = router;
                }
                DesayunosCenasComponent.prototype.entradas = function () {
                    this.router.navigate(["entradas"]);
                };
                DesayunosCenasComponent.prototype.bebidas = function () {
                    this.router.navigate(["bebidas"]);
                };
                DesayunosCenasComponent.prototype.pastas = function () {
                    this.router.navigate(["pastas"]);
                };
                DesayunosCenasComponent.prototype.hamburguesas = function () {
                    this.router.navigate(["hamburguesas"]);
                };
                DesayunosCenasComponent.prototype.ensaladas = function () {
                    this.router.navigate(["ensaladas"]);
                };
                DesayunosCenasComponent.prototype.menuPrincipal = function () {
                    this.router.navigate(["menuPrincipal"]);
                };
                DesayunosCenasComponent.prototype.ngOnInit = function () {
                };
                return DesayunosCenasComponent;
            }());
            DesayunosCenasComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            DesayunosCenasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-desayunos-cenas',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./desayunos-cenas.component.html */ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/desayunos-cenas/desayunos-cenas.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./desayunos-cenas.component.css */ "./ClientApp/app/desayunos-cenas/desayunos-cenas.component.css")).default]
                })
            ], DesayunosCenasComponent);
            /***/ 
        }),
        /***/ "./ClientApp/app/desayunos-cenas/ensaladas/ensaladas.component.css": 
        /*!*************************************************************************!*\
          !*** ./ClientApp/app/desayunos-cenas/ensaladas/ensaladas.component.css ***!
          \*************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2Rlc2F5dW5vcy1jZW5hcy9lbnNhbGFkYXMvZW5zYWxhZGFzLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./ClientApp/app/desayunos-cenas/ensaladas/ensaladas.component.ts": 
        /*!************************************************************************!*\
          !*** ./ClientApp/app/desayunos-cenas/ensaladas/ensaladas.component.ts ***!
          \************************************************************************/
        /*! exports provided: EnsaladasComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnsaladasComponent", function () { return EnsaladasComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var ClientApp_app_shared_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ClientApp/app/shared/product.service */ "./ClientApp/app/shared/product.service.ts");
            var EnsaladasComponent = /** @class */ (function () {
                function EnsaladasComponent(productService) {
                    this.productService = productService;
                    this.ensaladas = [];
                    this.errorMessage = '';
                }
                EnsaladasComponent.prototype.addProduct = function (ensalada) {
                    this.productService.añadirAOrden(ensalada);
                };
                EnsaladasComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.productService.getEnsaldas().subscribe({
                        next: function (ensaladas) {
                            _this.ensaladas = ensaladas;
                        },
                        error: function (err) { return _this.errorMessage = err; }
                    });
                };
                return EnsaladasComponent;
            }());
            EnsaladasComponent.ctorParameters = function () { return [
                { type: ClientApp_app_shared_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }
            ]; };
            EnsaladasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-ensaladas',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ensaladas.component.html */ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/desayunos-cenas/ensaladas/ensaladas.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ensaladas.component.css */ "./ClientApp/app/desayunos-cenas/ensaladas/ensaladas.component.css")).default]
                })
            ], EnsaladasComponent);
            /***/ 
        }),
        /***/ "./ClientApp/app/desayunos-cenas/hamburguesas/hamburguesas.component.css": 
        /*!*******************************************************************************!*\
          !*** ./ClientApp/app/desayunos-cenas/hamburguesas/hamburguesas.component.css ***!
          \*******************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2Rlc2F5dW5vcy1jZW5hcy9oYW1idXJndWVzYXMvaGFtYnVyZ3Vlc2FzLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./ClientApp/app/desayunos-cenas/hamburguesas/hamburguesas.component.ts": 
        /*!******************************************************************************!*\
          !*** ./ClientApp/app/desayunos-cenas/hamburguesas/hamburguesas.component.ts ***!
          \******************************************************************************/
        /*! exports provided: HamburguesasComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HamburguesasComponent", function () { return HamburguesasComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var ClientApp_app_shared_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ClientApp/app/shared/product.service */ "./ClientApp/app/shared/product.service.ts");
            var HamburguesasComponent = /** @class */ (function () {
                function HamburguesasComponent(productService) {
                    this.productService = productService;
                    this.hamburguesas = [];
                    this.errorMessage = '';
                }
                HamburguesasComponent.prototype.addProduct = function (hamburguesa) {
                    this.productService.añadirAOrden(hamburguesa);
                };
                HamburguesasComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.productService.getHamburguesas().subscribe({
                        next: function (hamburguesas) {
                            _this.hamburguesas = hamburguesas;
                        },
                        error: function (err) { return _this.errorMessage = err; }
                    });
                };
                return HamburguesasComponent;
            }());
            HamburguesasComponent.ctorParameters = function () { return [
                { type: ClientApp_app_shared_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }
            ]; };
            HamburguesasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-hamburguesas',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./hamburguesas.component.html */ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/desayunos-cenas/hamburguesas/hamburguesas.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./hamburguesas.component.css */ "./ClientApp/app/desayunos-cenas/hamburguesas/hamburguesas.component.css")).default]
                })
            ], HamburguesasComponent);
            /***/ 
        }),
        /***/ "./ClientApp/app/desayunos-cenas/pastas/pastas.component.css": 
        /*!*******************************************************************!*\
          !*** ./ClientApp/app/desayunos-cenas/pastas/pastas.component.css ***!
          \*******************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2Rlc2F5dW5vcy1jZW5hcy9wYXN0YXMvcGFzdGFzLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./ClientApp/app/desayunos-cenas/pastas/pastas.component.ts": 
        /*!******************************************************************!*\
          !*** ./ClientApp/app/desayunos-cenas/pastas/pastas.component.ts ***!
          \******************************************************************/
        /*! exports provided: PastasComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PastasComponent", function () { return PastasComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var ClientApp_app_shared_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ClientApp/app/shared/product.service */ "./ClientApp/app/shared/product.service.ts");
            var PastasComponent = /** @class */ (function () {
                function PastasComponent(productService) {
                    this.productService = productService;
                    this.pastas = [];
                    this.errorMessage = '';
                }
                PastasComponent.prototype.addProduct = function (pastas) {
                    this.productService.añadirAOrden(pastas);
                };
                PastasComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.productService.getPastas().subscribe({
                        next: function (pastas) {
                            _this.pastas = pastas;
                        },
                        error: function (err) { return _this.errorMessage = err; }
                    });
                };
                return PastasComponent;
            }());
            PastasComponent.ctorParameters = function () { return [
                { type: ClientApp_app_shared_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }
            ]; };
            PastasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-pastas',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pastas.component.html */ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/desayunos-cenas/pastas/pastas.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pastas.component.css */ "./ClientApp/app/desayunos-cenas/pastas/pastas.component.css")).default]
                })
            ], PastasComponent);
            /***/ 
        }),
        /***/ "./ClientApp/app/desayunos/desayuno/desayuno.component.css": 
        /*!*****************************************************************!*\
          !*** ./ClientApp/app/desayunos/desayuno/desayuno.component.css ***!
          \*****************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2Rlc2F5dW5vcy9kZXNheXVuby9kZXNheXVuby5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./ClientApp/app/desayunos/desayuno/desayuno.component.ts": 
        /*!****************************************************************!*\
          !*** ./ClientApp/app/desayunos/desayuno/desayuno.component.ts ***!
          \****************************************************************/
        /*! exports provided: DesayunoComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesayunoComponent", function () { return DesayunoComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var ClientApp_app_shared_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ClientApp/app/shared/product.service */ "./ClientApp/app/shared/product.service.ts");
            var DesayunoComponent = /** @class */ (function () {
                function DesayunoComponent(productService) {
                    this.productService = productService;
                    this.desayunos = [];
                    this.errorMessage = '';
                }
                DesayunoComponent.prototype.addProduct = function (desayuno) {
                    this.productService.añadirAOrden(desayuno);
                };
                DesayunoComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.productService.getDesayunos().subscribe({
                        next: function (desayunos) {
                            _this.desayunos = desayunos;
                        },
                        error: function (err) { return _this.errorMessage = err; }
                    });
                };
                return DesayunoComponent;
            }());
            DesayunoComponent.ctorParameters = function () { return [
                { type: ClientApp_app_shared_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }
            ]; };
            DesayunoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-desayuno',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./desayuno.component.html */ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/desayunos/desayuno/desayuno.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./desayuno.component.css */ "./ClientApp/app/desayunos/desayuno/desayuno.component.css")).default]
                })
            ], DesayunoComponent);
            /***/ 
        }),
        /***/ "./ClientApp/app/desayunos/desayunos.component.css": 
        /*!*********************************************************!*\
          !*** ./ClientApp/app/desayunos/desayunos.component.css ***!
          \*********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("h2 {\r\n    text-align: center;\r\n    font-family: 'Righteous', cursive;\r\n}\r\n\r\n.btn {\r\n    border: solid 2px black;\r\n}\r\n\r\nfooter {\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvZGVzYXl1bm9zL2Rlc2F5dW5vcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2Rlc2F5dW5vcy9kZXNheXVub3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAnUmlnaHRlb3VzJywgY3Vyc2l2ZTtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICBib3JkZXI6IHNvbGlkIDJweCBibGFjaztcclxufVxyXG5cclxuZm9vdGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./ClientApp/app/desayunos/desayunos.component.ts": 
        /*!********************************************************!*\
          !*** ./ClientApp/app/desayunos/desayunos.component.ts ***!
          \********************************************************/
        /*! exports provided: DesayunosComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesayunosComponent", function () { return DesayunosComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var DesayunosComponent = /** @class */ (function () {
                function DesayunosComponent(router) {
                    this.router = router;
                }
                DesayunosComponent.prototype.entradas = function () {
                    this.router.navigate(["entradas"]);
                };
                DesayunosComponent.prototype.bebidas = function () {
                    this.router.navigate(["bebidas"]);
                };
                DesayunosComponent.prototype.desaynos = function () {
                    this.router.navigate(["desayuno"]);
                };
                DesayunosComponent.prototype.pancakes = function () {
                    this.router.navigate(["pancakes"]);
                };
                DesayunosComponent.prototype.sandwiches = function () {
                    this.router.navigate(["sandwiches"]);
                };
                DesayunosComponent.prototype.menuPrincipal = function () {
                    this.router.navigate(["menuPrincipal"]);
                };
                DesayunosComponent.prototype.ngOnInit = function () {
                };
                return DesayunosComponent;
            }());
            DesayunosComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            DesayunosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-desayunos',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./desayunos.component.html */ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/desayunos/desayunos.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./desayunos.component.css */ "./ClientApp/app/desayunos/desayunos.component.css")).default]
                })
            ], DesayunosComponent);
            /***/ 
        }),
        /***/ "./ClientApp/app/desayunos/pancakes/pancakes.component.css": 
        /*!*****************************************************************!*\
          !*** ./ClientApp/app/desayunos/pancakes/pancakes.component.css ***!
          \*****************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2Rlc2F5dW5vcy9wYW5jYWtlcy9wYW5jYWtlcy5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./ClientApp/app/desayunos/pancakes/pancakes.component.ts": 
        /*!****************************************************************!*\
          !*** ./ClientApp/app/desayunos/pancakes/pancakes.component.ts ***!
          \****************************************************************/
        /*! exports provided: PancakesComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PancakesComponent", function () { return PancakesComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var ClientApp_app_shared_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ClientApp/app/shared/product.service */ "./ClientApp/app/shared/product.service.ts");
            var PancakesComponent = /** @class */ (function () {
                function PancakesComponent(productService) {
                    this.productService = productService;
                    this.pancakes = [];
                    this.errorMessage = '';
                }
                PancakesComponent.prototype.addProduct = function (pancake) {
                    this.productService.añadirAOrden(pancake);
                };
                PancakesComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.productService.getPancakes().subscribe({
                        next: function (pancakes) {
                            _this.pancakes = pancakes;
                        },
                        error: function (err) { return _this.errorMessage = err; }
                    });
                };
                return PancakesComponent;
            }());
            PancakesComponent.ctorParameters = function () { return [
                { type: ClientApp_app_shared_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }
            ]; };
            PancakesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-pancakes',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pancakes.component.html */ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/desayunos/pancakes/pancakes.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pancakes.component.css */ "./ClientApp/app/desayunos/pancakes/pancakes.component.css")).default]
                })
            ], PancakesComponent);
            /***/ 
        }),
        /***/ "./ClientApp/app/desayunos/sandwiches/sandwiches.component.css": 
        /*!*********************************************************************!*\
          !*** ./ClientApp/app/desayunos/sandwiches/sandwiches.component.css ***!
          \*********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2Rlc2F5dW5vcy9zYW5kd2ljaGVzL3NhbmR3aWNoZXMuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./ClientApp/app/desayunos/sandwiches/sandwiches.component.ts": 
        /*!********************************************************************!*\
          !*** ./ClientApp/app/desayunos/sandwiches/sandwiches.component.ts ***!
          \********************************************************************/
        /*! exports provided: SandwichesComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SandwichesComponent", function () { return SandwichesComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var ClientApp_app_shared_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ClientApp/app/shared/product.service */ "./ClientApp/app/shared/product.service.ts");
            var SandwichesComponent = /** @class */ (function () {
                function SandwichesComponent(productService) {
                    this.productService = productService;
                    this.sandwiches = [];
                    this.errorMessage = '';
                }
                SandwichesComponent.prototype.addProduct = function (sandwich) {
                    this.productService.añadirAOrden(sandwich);
                };
                SandwichesComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.productService.getSandwiches().subscribe({
                        next: function (sandwiches) {
                            _this.sandwiches = sandwiches;
                        },
                        error: function (err) { return _this.errorMessage = err; }
                    });
                };
                return SandwichesComponent;
            }());
            SandwichesComponent.ctorParameters = function () { return [
                { type: ClientApp_app_shared_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }
            ]; };
            SandwichesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-sandwiches',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sandwiches.component.html */ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/desayunos/sandwiches/sandwiches.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sandwiches.component.css */ "./ClientApp/app/desayunos/sandwiches/sandwiches.component.css")).default]
                })
            ], SandwichesComponent);
            /***/ 
        }),
        /***/ "./ClientApp/app/entradas/entradas.component.css": 
        /*!*******************************************************!*\
          !*** ./ClientApp/app/entradas/entradas.component.css ***!
          \*******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2VudHJhZGFzL2VudHJhZGFzLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./ClientApp/app/entradas/entradas.component.ts": 
        /*!******************************************************!*\
          !*** ./ClientApp/app/entradas/entradas.component.ts ***!
          \******************************************************/
        /*! exports provided: EntradasComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntradasComponent", function () { return EntradasComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _shared_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/product.service */ "./ClientApp/app/shared/product.service.ts");
            var EntradasComponent = /** @class */ (function () {
                function EntradasComponent(productService) {
                    this.productService = productService;
                    this.products = [];
                    this.errorMessage = '';
                }
                EntradasComponent.prototype.addProduct = function (entrada) {
                    this.productService.añadirAOrden(entrada);
                };
                EntradasComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.productService.getEntradas().subscribe({
                        next: function (products) {
                            _this.products = products;
                        },
                        error: function (err) { return _this.errorMessage = err; }
                    });
                    console.log(this.products);
                };
                return EntradasComponent;
            }());
            EntradasComponent.ctorParameters = function () { return [
                { type: _shared_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }
            ]; };
            EntradasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-entradas',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./entradas.component.html */ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/entradas/entradas.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./entradas.component.css */ "./ClientApp/app/entradas/entradas.component.css")).default]
                })
            ], EntradasComponent);
            /***/ 
        }),
        /***/ "./ClientApp/app/factura/factura.component.css": 
        /*!*****************************************************!*\
          !*** ./ClientApp/app/factura/factura.component.css ***!
          \*****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("a {\r\n    text-decoration: none;\r\n    color: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvZmFjdHVyYS9mYWN0dXJhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtBQUNoQiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2ZhY3R1cmEvZmFjdHVyYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./ClientApp/app/factura/factura.component.ts": 
        /*!****************************************************!*\
          !*** ./ClientApp/app/factura/factura.component.ts ***!
          \****************************************************/
        /*! exports provided: FacturaComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacturaComponent", function () { return FacturaComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _shared_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/product.service */ "./ClientApp/app/shared/product.service.ts");
            /* harmony import */ var _shared_order__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/order */ "./ClientApp/app/shared/order.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var FacturaComponent = /** @class */ (function () {
                function FacturaComponent(productService, router) {
                    this.productService = productService;
                    this.router = router;
                }
                FacturaComponent.prototype.nuevoPedido = function () {
                    this.productService.order = new _shared_order__WEBPACK_IMPORTED_MODULE_3__["Orden"]();
                    this.router.navigate(["menuPrincipal"]);
                };
                FacturaComponent.prototype.imprimir = function () {
                    window.print;
                };
                FacturaComponent.prototype.ngOnInit = function () {
                };
                return FacturaComponent;
            }());
            FacturaComponent.ctorParameters = function () { return [
                { type: _shared_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
            ]; };
            FacturaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-factura',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./factura.component.html */ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/factura/factura.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./factura.component.css */ "./ClientApp/app/factura/factura.component.css")).default]
                })
            ], FacturaComponent);
            /***/ 
        }),
        /***/ "./ClientApp/app/home/home/home.component.css": 
        /*!****************************************************!*\
          !*** ./ClientApp/app/home/home/home.component.css ***!
          \****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("h2 {\r\n    text-align: center;\r\n    font-family: 'Righteous', cursive;\r\n}\r\n\r\n.btn {\r\n    border: solid 2px black;\r\n}\r\n\r\nfooter {\r\n    text-align: center;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvaG9tZS9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoiQ2xpZW50QXBwL2FwcC9ob21lL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSaWdodGVvdXMnLCBjdXJzaXZlO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIGJvcmRlcjogc29saWQgMnB4IGJsYWNrO1xyXG59XHJcblxyXG5mb290ZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4iXX0= */");
            /***/ 
        }),
        /***/ "./ClientApp/app/home/home/home.component.ts": 
        /*!***************************************************!*\
          !*** ./ClientApp/app/home/home/home.component.ts ***!
          \***************************************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _shared_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/product.service */ "./ClientApp/app/shared/product.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var HomeComponent = /** @class */ (function () {
                function HomeComponent(productService, router) {
                    this.productService = productService;
                    this.router = router;
                }
                HomeComponent.prototype.ngOnInit = function () {
                };
                HomeComponent.prototype.login = function () {
                    if (this.productService.loginRequired) {
                        this.router.navigate(["userLogin"]);
                    }
                    else {
                        this.router.navigate(["menuPrincipal"]);
                    }
                };
                return HomeComponent;
            }());
            HomeComponent.ctorParameters = function () { return [
                { type: _shared_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-home',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/home/home/home.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./ClientApp/app/home/home/home.component.css")).default]
                })
            ], HomeComponent);
            /***/ 
        }),
        /***/ "./ClientApp/app/login/user-login/user-login.component.css": 
        /*!*****************************************************************!*\
          !*** ./ClientApp/app/login/user-login/user-login.component.css ***!
          \*****************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("h2 {\r\n    text-align: center;\r\n    font-family: 'Righteous', cursive;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvbG9naW4vdXNlci1sb2dpbi91c2VyLWxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsaUNBQWlDO0FBQ3JDIiwiZmlsZSI6IkNsaWVudEFwcC9hcHAvbG9naW4vdXNlci1sb2dpbi91c2VyLWxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogJ1JpZ2h0ZW91cycsIGN1cnNpdmU7XHJcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./ClientApp/app/login/user-login/user-login.component.ts": 
        /*!****************************************************************!*\
          !*** ./ClientApp/app/login/user-login/user-login.component.ts ***!
          \****************************************************************/
        /*! exports provided: UserLoginComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLoginComponent", function () { return UserLoginComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _shared_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/product.service */ "./ClientApp/app/shared/product.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var UserLoginComponent = /** @class */ (function () {
                function UserLoginComponent(productService, router) {
                    this.productService = productService;
                    this.router = router;
                    this.errorMessage = "";
                    this.creds = {
                        username: "",
                        password: ""
                    };
                }
                UserLoginComponent.prototype.onLogin = function () {
                    var _this = this;
                    this.errorMessage = "";
                    this.productService.login(this.creds)
                        .subscribe(function (success) {
                        if (success) {
                            _this.router.navigate(["menuPrincipal"]);
                        }
                    }, function (err) { return _this.errorMessage = "Failed to login"; });
                };
                UserLoginComponent.prototype.ngOnInit = function () {
                };
                return UserLoginComponent;
            }());
            UserLoginComponent.ctorParameters = function () { return [
                { type: _shared_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            UserLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-user-login',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/login/user-login/user-login.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-login.component.css */ "./ClientApp/app/login/user-login/user-login.component.css")).default]
                })
            ], UserLoginComponent);
            /***/ 
        }),
        /***/ "./ClientApp/app/order/cart/cart.component.css": 
        /*!*****************************************************!*\
          !*** ./ClientApp/app/order/cart/cart.component.css ***!
          \*****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL29yZGVyL2NhcnQvY2FydC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./ClientApp/app/order/cart/cart.component.ts": 
        /*!****************************************************!*\
          !*** ./ClientApp/app/order/cart/cart.component.ts ***!
          \****************************************************/
        /*! exports provided: CartComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function () { return CartComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var ClientApp_app_shared_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ClientApp/app/shared/product.service */ "./ClientApp/app/shared/product.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var CartComponent = /** @class */ (function () {
                function CartComponent(productService, router) {
                    this.productService = productService;
                    this.router = router;
                }
                CartComponent.prototype.ngOnInit = function () {
                };
                CartComponent.prototype.onCheckout = function () {
                    this.router.navigate(["orden"]);
                };
                return CartComponent;
            }());
            CartComponent.ctorParameters = function () { return [
                { type: ClientApp_app_shared_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-cart',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/order/cart/cart.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cart.component.css */ "./ClientApp/app/order/cart/cart.component.css")).default]
                })
            ], CartComponent);
            /***/ 
        }),
        /***/ "./ClientApp/app/order/order.component.css": 
        /*!*************************************************!*\
          !*** ./ClientApp/app/order/order.component.css ***!
          \*************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".nit {\r\n    margin-top: 9px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvb3JkZXIvb3JkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoiQ2xpZW50QXBwL2FwcC9vcmRlci9vcmRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5pdCB7XHJcbiAgICBtYXJnaW4tdG9wOiA5cHg7XHJcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./ClientApp/app/order/order.component.ts": 
        /*!************************************************!*\
          !*** ./ClientApp/app/order/order.component.ts ***!
          \************************************************/
        /*! exports provided: OrderComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function () { return OrderComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _shared_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/product.service */ "./ClientApp/app/shared/product.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _shared_order__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/order */ "./ClientApp/app/shared/order.ts");
            var OrderComponent = /** @class */ (function () {
                function OrderComponent(productService, router) {
                    this.productService = productService;
                    this.router = router;
                    this.saldo = 1000;
                    this.tipoPago = "Efectivo";
                    this.errorMessage = "";
                    this.tarjeta = new _shared_order__WEBPACK_IMPORTED_MODULE_4__["Tarjeta"]();
                    this.options = [
                        { label: 'Efectivo', value: 'Efectivo' },
                        { label: 'Tarjeta', value: 'Tarjeta' }
                    ];
                }
                OrderComponent.prototype.Confirmar = function () {
                    var _this = this;
                    this.productService.order.tarjetaId = this.idTarjeta;
                    this.productService.order.nombre = this.nombre;
                    this.productService.order.apellido = this.apellido;
                    this.productService.order.nit = this.nit;
                    this.productService.order.tipoPago = this.selectedOption;
                    this.productService.order.subTotal = this.productService.order.getSubtotal;
                    this.productService.crearOrden()
                        .subscribe(function (success) {
                        if (success) {
                            _this.router.navigate(['factura']);
                        }
                    }, function (err) { return _this.errorMessage = "Failed to save order"; });
                };
                OrderComponent.prototype.TarjetaActivar = function () {
                    this.tipoPago = "Tarjeta";
                    console.log(this.tipoPago);
                    console.log(this.tarjeta);
                };
                OrderComponent.prototype.ngOnInit = function () {
                };
                return OrderComponent;
            }());
            OrderComponent.ctorParameters = function () { return [
                { type: _shared_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            OrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-order',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./order.component.html */ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/order/order.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./order.component.css */ "./ClientApp/app/order/order.component.css")).default]
                })
            ], OrderComponent);
            /***/ 
        }),
        /***/ "./ClientApp/app/restaurant/menu-principal/menu-principal.component.css": 
        /*!******************************************************************************!*\
          !*** ./ClientApp/app/restaurant/menu-principal/menu-principal.component.css ***!
          \******************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("h2 {\r\n    text-align: center;\r\n    font-family: 'Righteous', cursive;\r\n}\r\n\r\n.btn {\r\n    border: solid 2px black;\r\n}\r\n\r\nfooter {\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvcmVzdGF1cmFudC9tZW51LXByaW5jaXBhbC9tZW51LXByaW5jaXBhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL3Jlc3RhdXJhbnQvbWVudS1wcmluY2lwYWwvbWVudS1wcmluY2lwYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAnUmlnaHRlb3VzJywgY3Vyc2l2ZTtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICBib3JkZXI6IHNvbGlkIDJweCBibGFjaztcclxufVxyXG5cclxuZm9vdGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./ClientApp/app/restaurant/menu-principal/menu-principal.component.ts": 
        /*!*****************************************************************************!*\
          !*** ./ClientApp/app/restaurant/menu-principal/menu-principal.component.ts ***!
          \*****************************************************************************/
        /*! exports provided: MenuPrincipalComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPrincipalComponent", function () { return MenuPrincipalComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var MenuPrincipalComponent = /** @class */ (function () {
                function MenuPrincipalComponent(router) {
                    this.router = router;
                }
                MenuPrincipalComponent.prototype.desayunos = function () {
                    this.router.navigate(["desayunos"]);
                };
                MenuPrincipalComponent.prototype.almuerzosycenas = function () {
                    this.router.navigate(["almuerzosycenas"]);
                };
                MenuPrincipalComponent.prototype.home = function () {
                    this.router.navigate(["home"]);
                };
                MenuPrincipalComponent.prototype.ngOnInit = function () {
                };
                return MenuPrincipalComponent;
            }());
            MenuPrincipalComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            MenuPrincipalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-menu-principal',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./menu-principal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/restaurant/menu-principal/menu-principal.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./menu-principal.component.css */ "./ClientApp/app/restaurant/menu-principal/menu-principal.component.css")).default]
                })
            ], MenuPrincipalComponent);
            /***/ 
        }),
        /***/ "./ClientApp/app/shared/order.ts": 
        /*!***************************************!*\
          !*** ./ClientApp/app/shared/order.ts ***!
          \***************************************/
        /*! exports provided: Orden, Item, Tarjeta */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Orden", function () { return Orden; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function () { return Item; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tarjeta", function () { return Tarjeta; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
            /* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
            var Orden = /** @class */ (function () {
                function Orden() {
                    this.items = new Array();
                }
                Object.defineProperty(Orden.prototype, "getSubtotal", {
                    get: function () {
                        return lodash__WEBPACK_IMPORTED_MODULE_1__["sum"](lodash__WEBPACK_IMPORTED_MODULE_1__["map"](this.items, function (i) { return i.producto.precio * i.cantidad; }));
                    },
                    enumerable: true,
                    configurable: true
                });
                return Orden;
            }());
            var Item = /** @class */ (function () {
                function Item() {
                }
                return Item;
            }());
            var Tarjeta = /** @class */ (function () {
                function Tarjeta() {
                }
                return Tarjeta;
            }());
            /***/ 
        }),
        /***/ "./ClientApp/app/shared/product.service.ts": 
        /*!*************************************************!*\
          !*** ./ClientApp/app/shared/product.service.ts ***!
          \*************************************************/
        /*! exports provided: ProductService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function () { return ProductService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order */ "./ClientApp/app/shared/order.ts");
            var ProductService = /** @class */ (function () {
                function ProductService(http) {
                    this.http = http;
                    this.UrlEntradas = '/api/producto/1';
                    this.UrlCafe = '/api/producto/2';
                    this.urlJugos = "/api/producto/3";
                    this.urlVinos = "/api/producto/4";
                    this.urlLicores = "/api/producto/5";
                    this.urlDesayunos = "/api/producto/6";
                    this.urlPancakes = "/api/producto/7";
                    this.urlSandwiches = "/api/producto/8";
                    this.urlPastas = "/api/producto/9";
                    this.urlHamburguesas = "/api/producto/10";
                    this.urlEnsaladas = "/api/producto/11";
                    this.order = new _order__WEBPACK_IMPORTED_MODULE_5__["Orden"]();
                    this.token = "";
                    this.tokenExpiration = new Date();
                    this.ruta = "";
                }
                ProductService.prototype.getEntradas = function () {
                    return this.http.get(this.UrlEntradas)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { return console.log('All: ' + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
                };
                ProductService.prototype.getCafes = function () {
                    return this.http.get(this.UrlCafe)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { return console.log('All: ' + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
                };
                ProductService.prototype.getJugos = function () {
                    return this.http.get(this.urlJugos)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { return console.log('All: ' + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
                };
                ProductService.prototype.getVinos = function () {
                    return this.http.get(this.urlVinos)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { return console.log('All: ' + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
                };
                ProductService.prototype.getLicores = function () {
                    return this.http.get(this.urlLicores)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { return console.log('All: ' + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
                };
                ProductService.prototype.getDesayunos = function () {
                    return this.http.get(this.urlDesayunos)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { return console.log('All: ' + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
                };
                ProductService.prototype.getPancakes = function () {
                    return this.http.get(this.urlPancakes)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { return console.log('All: ' + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
                };
                ProductService.prototype.getSandwiches = function () {
                    return this.http.get(this.urlSandwiches)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { return console.log('All: ' + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
                };
                ProductService.prototype.getPastas = function () {
                    return this.http.get(this.urlPastas)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { return console.log('All: ' + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
                };
                ProductService.prototype.getHamburguesas = function () {
                    return this.http.get(this.urlHamburguesas)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { return console.log('All: ' + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
                };
                ProductService.prototype.getEnsaldas = function () {
                    return this.http.get(this.urlEnsaladas)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { return console.log('All: ' + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
                };
                ProductService.prototype.getTarjeta = function (id) {
                    return this.http.get("/api/tarjeta/" + id)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { return console.log('All: ' + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
                };
                ProductService.prototype.añadirAOrden = function (product) {
                    var item = this.order.items.find(function (i) { return i.producto.id == product.id; });
                    if (item) {
                        item.cantidad++;
                    }
                    else {
                        item = new _order__WEBPACK_IMPORTED_MODULE_5__["Item"]();
                        item.producto = product;
                        item.cantidad = 1;
                        this.order.items.push(item);
                    }
                };
                Object.defineProperty(ProductService.prototype, "loginRequired", {
                    get: function () {
                        return this.token.length == 0 || this.tokenExpiration > new Date();
                    },
                    enumerable: true,
                    configurable: true
                });
                ProductService.prototype.login = function (creds) {
                    var _this = this;
                    return this.http.post("/cuenta/CreateToken", creds)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                        var tokenInfo = response;
                        _this.token = tokenInfo.token;
                        _this.tokenExpiration = tokenInfo.expiration;
                        return true;
                    }));
                };
                ProductService.prototype.crearOrden = function () {
                    var _this = this;
                    var fecha = new Date();
                    if (!this.order.numeroOrden) {
                        this.order.numeroOrden = Math.round(Math.random()).toString() + fecha.getTime().toString();
                    }
                    return this.http.post("/api/order", this.order, {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Authorization": "Bearer " + this.token })
                    })
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                        var headerInfo = response;
                        _this.ruta = response.ruta;
                        console.log(headerInfo);
                        return true;
                    }));
                };
                ProductService.prototype.handleError = function (err) {
                    // in a real world app, we may send the server to some remote logging infrastructure
                    // instead of just logging it to the console
                    var errorMessage = '';
                    if (err.error instanceof ErrorEvent) {
                        // A client-side or network error occurred. Handle it accordingly.
                        errorMessage = "An error occurred: " + err.error.message;
                    }
                    else {
                        // The backend returned an unsuccessful response code.
                        // The response body may contain clues as to what went wrong,
                        errorMessage = "Server returned code: " + err.status + ", error message is: " + err.message;
                    }
                    console.error(errorMessage);
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
                };
                return ProductService;
            }());
            ProductService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], ProductService);
            /***/ 
        }),
        /***/ "./ClientApp/environments/environment.ts": 
        /*!***********************************************!*\
          !*** ./ClientApp/environments/environment.ts ***!
          \***********************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
            /***/ 
        }),
        /***/ "./ClientApp/main.ts": 
        /*!***************************!*\
          !*** ./ClientApp/main.ts ***!
          \***************************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./ClientApp/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./ClientApp/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/app.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/app.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<link href=\"https://fonts.googleapis.com/css?family=Modak&display=swap\" rel=\"stylesheet\">\n<br>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-4\"></div>\n    <div class=\"col-md-1 logocuadro\">\r\n        <img class=\"logo\" src=\"cafe.png\" />\r\n    </div>\n    <div class=\"col-md-6\">\n      <br/>\n        <h1>Le Cafe</h1>\n    </div>\n    <div class=\"col-md-1\"></div>\n  </div>\n</div>\n<br class=\"b\">\n      <router-outlet></router-outlet>\n<br>\n<footer class=\"container\">\n    <div class=\"text-center\">\n        &copy; 2019 Le Cafe LLC\n    </div>\n</footer>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/bebidas/bebidas.component.html": 
        /*!********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/bebidas/bebidas.component.html ***!
          \********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<link href=\"https://fonts.googleapis.com/css?family=Righteous&display=swap\" rel=\"stylesheet\">\n<br>\n<div class=\"container\">\n        <div class=\"row\">\n                <div class=\"card card-body bg-light col-md-8\">\n                        <h2>Bebidas</h2><br>\n                        <div class=\"form-group\">\n                                <button class=\"btn btn-info form-control\"  [routerLink]=\"['/cafes']\">Cafe</button>\n                        </div>\n                        <div class=\"form-group\">\n                                <button class=\"btn btn-info form-control\"  [routerLink]=\"['/jugos']\">Jugos</button>\n                        </div>\n                        <div class=\"form-group\">\n                                <button class=\"btn btn-info form-control\" [routerLink]=\"['/vinos']\">Vinos</button>\n                        </div>\n                        <div class=\"form-group\">\n                                <button class=\"btn btn-info form-control\"  [routerLink]=\"['/licores']\">Licor</button>\n                        </div>\n                        <div class=\"form-group row\">\n                                <div class=\"col-6 \">\n                                        <button class=\"btn btn-outline-secondary\" style='width:120px' [routerLink]=\"['/menuPrincipal']\" > <i class='fa fa-chevron-left'></i> Regresar </button>\n                                </div>\n                \n                                <div class=\"col-3 offset-md-3\">\n                                <button type=\"submit\" class=\"btn btn-danger\"  [routerLink]=\"['/userLogin']\" >Cerrar Sesion</button>\n                                </div>\n                        \n                        </div>\n                        <footer>Autor: Wilson Luna</footer>\n                </div>\n                <div class=\"col-md-4\">\n                        <app-cart></app-cart>\n                 </div>\n        </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/bebidas/cafes/cafes.component.html": 
        /*!************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/bebidas/cafes/cafes.component.html ***!
          \************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<br>\n<div class=\"container\">\n        <div class=\"row\">\n                <div class=\"card card-body bg-light col-md-8\">\n                        <div class='table-responsive'  *ngIf='cafes && cafes.length'>\n                                <table class='table'>\n                                <thead>\n                                <tr>\n                                <th> Producto </th>\n                                <th> Precio </th>\n                                <th> Cantidad</th>\n                                </tr>\n                                </thead>\n                                <tbody>\n                                <tr *ngFor='let cafe of cafes'>\n                                        <td>{{cafe.nombre}}</td>\n                                        <td>{{cafe.precio | currency: \"Q \"}}</td>\n                                        <td><button class=\"btn btn-info\"  (click)=\"addProduct(cafe)\"> <i class=\"fa fa-plus\" ></i> Añadir</button></td>\n                                </tr>\n                                </tbody>\n                                <tfoot>\n                                        <div class=\"form-group row\">\n                                                <div class=\"col-6 \">\n                                                        <button class=\"btn btn-outline-secondary\" style='width:120px' [routerLink]=\"['/bebidas']\" > <i class='fa fa-chevron-left'></i> Regresar </button>\n                                                </div>\n                                        </div>\n                                </tfoot>\n                                </table>\n                        </div>\n                </div>\n                <div class=\"col-md-4\">\n                        <app-cart></app-cart>\n                </div>\n        </div>\n      \n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/bebidas/jugos/jugos.component.html": 
        /*!************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/bebidas/jugos/jugos.component.html ***!
          \************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<br>\n<div class=\"container\">\n        <div class=\"row\">\n                <div class=\"card card-body bg-light col-md-8\">\n                        <div class='table-responsive'  *ngIf='jugos && jugos.length'>\n                                <table class='table'>\n                                <thead>\n                                <tr>\n                                <th> Producto </th>\n                                <th> Precio </th>\n                                <th> Cantidad</th>\n                                </tr>\n                                </thead>\n                                <tbody>\n                                <tr *ngFor='let jugo of jugos'>\n                                        <td>{{jugo.nombre}}</td>\n                                        <td>{{jugo.precio | currency: \"Q \"}}</td>\n                                        <td><button class=\"btn btn-info\"  (click)=\"addProduct(jugo)\"> <i class=\"fa fa-plus\" ></i> Añadir</button></td>\n                                </tr>\n                                </tbody>\n                                <tfoot>\n                                        <div class=\"form-group row\">\n                                                <div class=\"col-6 \">\n                                                        <button class=\"btn btn-outline-secondary\" style='width:120px' [routerLink]=\"['/bebidas']\" > <i class='fa fa-chevron-left'></i> Regresar </button>\n                                                </div>\n                                        </div>\n                                </tfoot>\n                                </table>\n                        </div>\n                </div>\n                <div class=\"col-md-4\">\n                        <app-cart></app-cart>\n                </div>\n        </div>\n</div>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/bebidas/licores/licores.component.html": 
        /*!****************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/bebidas/licores/licores.component.html ***!
          \****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<br>\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"card card-body bg-light col-md-8\">\n                <table class='table'>\n                        <thead>\n                        <tr>\n                        <th> Producto </th>\n                        <th> Precio </th>\n                        <th> Cantidad</th>\n                        </tr>\n                        </thead>\n                        <tbody>\n                        <tr *ngFor='let licor of licores'>\n                                <td>{{licor.nombre}}</td>\n                                <td>{{licor.precio | currency: \"Q \"}}</td>\n                                <td><button class=\"btn btn-info\"  (click)=\"addProduct(licor)\"> <i class=\"fa fa-plus\" ></i> Añadir</button></td>\n                        </tr>\n                        </tbody>\n                        <tfoot>\n                                <div class=\"form-group row\">\n                                        <div class=\"col-6 \">\n                                                <button class=\"btn btn-outline-secondary\" style='width:120px' [routerLink]=\"['/bebidas']\" > <i class='fa fa-chevron-left'></i> Regresar </button>\n                                        </div>\n                                </div>\n                        </tfoot>\n                        </table>\n        </div>\n        <div class=\"col-md-4\">\n                <app-cart></app-cart>\n        </div>\n    </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/bebidas/vinos/vinos.component.html": 
        /*!************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/bebidas/vinos/vinos.component.html ***!
          \************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<br>\n<div class=\"container\">\n        <div class=\"row\">\n                <div class=\"card card-body bg-light col-md-8\">\n                        <table class='table'>\n                                <thead>\n                                <tr>\n                                <th> Producto </th>\n                                <th> Precio </th>\n                                <th> Cantidad</th>\n                                </tr>\n                                </thead>\n                                <tbody>\n                                <tr *ngFor='let vino of vinos'>\n                                        <td>{{vino.nombre}}</td>\n                                        <td>{{vino.precio | currency: \"Q \"}}</td>\n                                        <td><button class=\"btn btn-info\"  (click)=\"addProduct(vino)\"> <i class=\"fa fa-plus\" ></i> Añadir</button></td>\n                                </tr>\n                                </tbody>\n                                <tfoot>\n                                        <div class=\"form-group row\">\n                                                <div class=\"col-6 \">\n                                                        <button class=\"btn btn-outline-secondary\" style='width:120px' [routerLink]=\"['/bebidas']\" > <i class='fa fa-chevron-left'></i> Regresar </button>\n                                                </div>\n                                        </div>\n                                </tfoot>\n                                </table>\n                </div>\n                <div class=\"col-md-4\">\n                        <app-cart></app-cart>\n                </div>\n        </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/desayunos-cenas/desayunos-cenas.component.html": 
        /*!************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/desayunos-cenas/desayunos-cenas.component.html ***!
          \************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<link href=\"https://fonts.googleapis.com/css?family=Righteous&display=swap\" rel=\"stylesheet\">\n<br>\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"card card-body bg-light col-md-8\">\n                <h2>Desayunos</h2><br>\n                <div class=\"form-group\">\n                    <button class=\"btn btn-info form-control\" (click)=\"entradas()\" >Entradas </button>\n                </div>\n                <div class=\"form-group\">\n                    <button class=\"btn btn-info form-control\" (click)=\"bebidas()\"  > Bebidas</button>\n                </div>\n                <div class=\"form-group\">\n                        <button class=\"btn btn-info form-control\" (click)=\"pastas()\"  >Pastas</button>\n                </div>\n                <div class=\"form-group\">\n                    <button class=\"btn btn-info form-control\" (click)=\"hamburguesas()\" >Hanburguesas</button>\n                </div>\n                <div class=\"form-group\">\n                    <button class=\"btn btn-info form-control\" (click)=\"ensaladas()\"  >Ensaldas</button>\n                </div>\n                <br>\n                <div class=\"form-group row\">\n                        <div class=\"col-6 \">\n                                <button class=\"btn btn-outline-secondary\" style='width:120px' (click)=\"menuPrincipal()\" > <i class='fa fa-chevron-left'></i> Regresar </button>\n                        </div>\n\n                        <div class=\"col-3 offset-md-3\">\n                            <button type=\"submit\" class=\"btn btn-danger\"  [routerLink]=\"['/userLogin']\" >Cerrar Sesion</button>\n                        </div>\n                    \n                    </div>\n                <footer>Autor: Wilson Luna</footer>\n        </div>\n        <div class=\"col-md-4\">\n            <app-cart></app-cart>\n        </div>\n    </div>\n</div>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/desayunos-cenas/ensaladas/ensaladas.component.html": 
        /*!****************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/desayunos-cenas/ensaladas/ensaladas.component.html ***!
          \****************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<br>\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"card card-body bg-light col-md-8\">\n                <table class='table'>\n                        <thead>\n                        <tr>\n                        <th> Producto </th>\n                        <th> Precio </th>\n                        <th> Cantidad</th>\n                        </tr>\n                        </thead>\n                        <tbody>\n                        <tr *ngFor='let ensalada of ensaladas'>\n                                <td>{{ensalada.nombre}}</td>\n                                <td>{{ensalada.precio | currency: \"Q \"}}</td>\n                                <td><button class=\"btn btn-info\"  (click)=\"addProduct(ensalada)\"> <i class=\"fa fa-plus\" ></i> Añadir</button></td>\n                        </tr>\n                        </tbody>\n                        <tfoot>\n                                <div class=\"form-group row\">\n                                        <div class=\"col-6 \">\n                                                <button class=\"btn btn-outline-secondary\" style='width:120px' [routerLink]=\"['/almuerzosycenas']\" > <i class='fa fa-chevron-left'></i> Regresar </button>\n                                        </div>\n                                </div>\n                        </tfoot>\n                        </table>\n        </div>\n        <div class=\"col-md-4\">\n            <app-cart></app-cart>\n        </div>\n    </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/desayunos-cenas/hamburguesas/hamburguesas.component.html": 
        /*!**********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/desayunos-cenas/hamburguesas/hamburguesas.component.html ***!
          \**********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<br>\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"card card-body bg-light col-md-8\">\n                <table class='table'>\n                        <thead>\n                        <tr>\n                        <th> Producto </th>\n                        <th> Precio </th>\n                        <th> Cantidad</th>\n                        </tr>\n                        </thead>\n                        <tbody>\n                        <tr *ngFor='let hamburguesa of hamburguesas'>\n                                <td>{{hamburguesa.nombre}}</td>\n                                <td>{{hamburguesa.precio | currency: \"Q \"}}</td>\n                                <td><button class=\"btn btn-info\"  (click)=\"addProduct(hamburguesa)\"> <i class=\"fa fa-plus\" ></i> Añadir</button></td>\n                        </tr>\n                        </tbody>\n                        <tfoot>\n                                <div class=\"form-group row\">\n                                        <div class=\"col-6 \">\n                                                <button class=\"btn btn-outline-secondary\" style='width:120px' [routerLink]=\"['/almuerzosycenas']\" > <i class='fa fa-chevron-left'></i> Regresar </button>\n                                        </div>\n                                </div>\n                        </tfoot>\n                        </table>\n        </div>\n        <div class=\"col-md-4\">\n            <app-cart></app-cart>\n        </div>\n    </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/desayunos-cenas/pastas/pastas.component.html": 
        /*!**********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/desayunos-cenas/pastas/pastas.component.html ***!
          \**********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<br>\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"card card-body bg-light col-md-8\">\n                <table class='table'>\n                        <thead>\n                        <tr>\n                        <th> Producto </th>\n                        <th> Precio </th>\n                        <th> Cantidad</th>\n                        </tr>\n                        </thead>\n                        <tbody>\n                        <tr *ngFor='let pasta of pastas'>\n                                <td>{{pasta.nombre}}</td>\n                                <td>{{pasta.precio | currency: \"Q \"}}</td>\n                                <td><button class=\"btn btn-info\"  (click)=\"addProduct(pasta)\"> <i class=\"fa fa-plus\" ></i> Añadir</button></td>\n                        </tr>\n                        </tbody>\n                        <tfoot>\n                                <div class=\"form-group row\">\n                                        <div class=\"col-6 \">\n                                                <button class=\"btn btn-outline-secondary\" style='width:120px' [routerLink]=\"['/almuerzosycenas']\" > <i class='fa fa-chevron-left'></i> Regresar </button>\n                                        </div>\n                                </div>\n                        </tfoot>\n                        </table>\n        </div>\n        <div class=\"col-md-4\">\n            <app-cart></app-cart>\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/desayunos/desayuno/desayuno.component.html": 
        /*!********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/desayunos/desayuno/desayuno.component.html ***!
          \********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<br>\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"card card-body bg-light col-md-8\">\n                <table class='table'>\n                        <thead>\n                        <tr>\n                        <th> Producto </th>\n                        <th> Precio </th>\n                        <th> Cantidad</th>\n                        </tr>\n                        </thead>\n                        <tbody>\n                        <tr *ngFor='let desayuno of desayunos'>\n                                <td>{{desayuno.nombre}}</td>\n                                <td>{{desayuno.precio | currency: \" Q \"}}</td>\n                                <td><button class=\"btn btn-info\"  (click)=\"addProduct(desayuno)\"> <i class=\"fa fa-plus\" ></i> Añadir</button></td>\n                        </tr>\n                        </tbody>\n                        <tfoot>\n                                <div class=\"form-group row\">\n                                        <div class=\"col-6 \">\n                                                <button class=\"btn btn-outline-secondary\" style='width:120px' [routerLink]=\"['/desayunos']\" > <i class='fa fa-chevron-left'></i> Regresar </button>\n                                        </div>\n                                </div>\n                        </tfoot>\n                        </table>\n        </div>\n        <div class=\"col-md-4\">\n            <app-cart></app-cart>\n        </div>\n    </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/desayunos/desayunos.component.html": 
        /*!************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/desayunos/desayunos.component.html ***!
          \************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<link href=\"https://fonts.googleapis.com/css?family=Righteous&display=swap\" rel=\"stylesheet\">\n<br>\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"card card-body bg-light col-md-8\">\n                <h2>Desayunos</h2><br>\n                <div class=\"form-group\">\n                    <button class=\"btn btn-info form-control\" (click)=\"entradas()\" >Entradas </button>\n                </div>\n                <div class=\"form-group\">\n                    <button class=\"btn btn-info form-control\" (click)=\"bebidas()\" > Bebidas</button>\n                </div>\n                <div class=\"form-group\">\n                        <button class=\"btn btn-info form-control\" (click)=\"desaynos()\" >Desayunos</button>\n                </div>\n                <div class=\"form-group\">\n                    <button class=\"btn btn-info form-control\" (click)=\"pancakes()\">Pancakes</button>\n                </div>\n                <div class=\"form-group\">\n                    <button class=\"btn btn-info form-control\" (click)=\"sandwiches()\">Sandwiches</button>\n                </div>\n                <br>\n                <div class=\"form-group row\">\n                        <div class=\"col-6 \">\n                                <button class=\"btn btn-outline-secondary\" style='width:120px' (click)=\"menuPrincipal()\" > <i class='fa fa-chevron-left'></i> Regresar </button>\n                        </div>\n\n                        <div class=\"col-3 offset-md-3\">\n                            <button type=\"submit\" class=\"btn btn-danger\"  [routerLink]=\"['/userLogin']\" >Cerrar Sesion</button>\n                        </div>\n                    \n                    </div>\n                <footer>Autor: Wilson Luna</footer>\n        </div>\n        <div class=\"col-md-4\">\n            <app-cart></app-cart>\n        </div>\n    </div>\n</div>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/desayunos/pancakes/pancakes.component.html": 
        /*!********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/desayunos/pancakes/pancakes.component.html ***!
          \********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<br>\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"card card-body bg-light col-md-8\">\n                <table class='table'>\n                        <thead>\n                        <tr>\n                        <th> Producto </th>\n                        <th> Precio </th>\n                        <th> Cantidad</th>\n                        </tr>\n                        </thead>\n                        <tbody>\n                        <tr *ngFor='let pancake of pancakes'>\n                                <td>{{pancake.nombre}}</td>\n                                <td>{{pancake.precio | currency: \"Q \"}}</td>\n                                <td><button class=\"btn btn-info\"  (click)=\"addProduct(pancake)\"> <i class=\"fa fa-plus\" ></i> Añadir</button></td>\n                        </tr>\n                        </tbody>\n                        <tfoot>\n                                <div class=\"form-group row\">\n                                        <div class=\"col-6 \">\n                                                <button class=\"btn btn-outline-secondary\" style='width:120px' [routerLink]=\"['/desayunos']\" > <i class='fa fa-chevron-left'></i> Regresar </button>\n                                        </div>\n                                </div>\n                        </tfoot>\n                        </table>\n        </div>\n        <div class=\"col-md-4\">\n            <app-cart></app-cart>\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/desayunos/sandwiches/sandwiches.component.html": 
        /*!************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/desayunos/sandwiches/sandwiches.component.html ***!
          \************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<br>\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"card card-body bg-light col-md-8\">\n                <table class='table'>\n                        <thead>\n                        <tr>\n                        <th> Producto </th>\n                        <th> Precio </th>\n                        <th> Cantidad</th>\n                        </tr>\n                        </thead>\n                        <tbody>\n                        <tr *ngFor='let sandwich of sandwiches'>\n                                <td>{{sandwich.nombre}}</td>\n                                <td>{{sandwich.precio | currency: \"Q \"}}</td>\n                                <td><button class=\"btn btn-info\"  (click)=\"addProduct(sandwich)\"> <i class=\"fa fa-plus\" ></i> Añadir</button></td>\n                        </tr>\n                        </tbody>\n                        <tfoot>\n                                <div class=\"form-group row\">\n                                        <div class=\"col-6 \">\n                                                <button class=\"btn btn-outline-secondary\" style='width:120px' [routerLink]=\"['/desayunos']\" > <i class='fa fa-chevron-left'></i> Regresar </button>\n                                        </div>\n                                </div>\n                        </tfoot>\n                        </table>\n        </div>\n        <div class=\"col-md-4\">\n            <app-cart></app-cart>\n        </div>\n    </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/entradas/entradas.component.html": 
        /*!**********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/entradas/entradas.component.html ***!
          \**********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<br>\n<div class=\"container\">\n    <div class=\"row\">\n\n      <div class=\"card card-body bg-light col-md-8\">\n        <div class='table-responsive'  *ngIf='products && products.length'>\n                <table class='table'>\n                  <thead>\n                    <tr>\n                      <th> Producto </th>\n                      <th> Precio </th>\n                      <th> Cantidad</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor='let product of products'>\n                        <td>{{product.nombre}}</td>\n                        <td>{{product.precio | currency: \" Q \"}}</td>\n                        <td><button class=\"btn btn-info\" (click)=\"addProduct(product)\"> <i class=\"fa fa-plus\" ></i>Añadir</button></td>\n                    </tr>\n                </tbody>\n                <tfoot>\n                        <div class=\"form-group row\">\n                                <div class=\"col-6 \">\n                                        <button class=\"btn btn-outline-secondary\" style='width:120px' [routerLink]=\"['/menuPrincipal']\" > <i class='fa fa-chevron-left'></i> Regresar </button>\n                                 </div>\n                            </div>\n                </tfoot>\n                </table>\n        </div>\n\n      </div>\n      <div class=\"col-md-4\">\n         <app-cart></app-cart>\n      </div>\n  </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/factura/factura.component.html": 
        /*!********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/factura/factura.component.html ***!
          \********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"card card-body bg-light col-md-6 offset-md-3\">\n           <h3 class=\"text-center\">Factura</h3>\n           <label class=\"lead\">No. Factura: {{productService.order.numeroOrden}} </label>\n           <label class=\"lead\">Nombre: {{productService.order.nombre}}  {{productService.order.apellido}}</label>\n           <label class=\"lead\">NIT: {{productService.order.nit}}</label>\n           <table class=\"table table-condensed table-hover\">\n                <tbody>\n                        <tr *ngFor=\"let o of productService.order.items\">\n                            <td class=\"lead\">{{ o.producto.nombre }}</td>\n                            <td>{{ o.cantidad }}</td>\n                            <td>{{ o.producto.precio |currency:' Q'}}</td>\n                        </tr>\n                </tbody>\n           </table>\n           <label class=\"lead\"> Total: {{ productService.order.getSubtotal|currency:' Q' }}</label>\n           <br>\n            <div class=\"form-group row\" *ngIf=\"productService.order.items.length > 0\">\n                    <div class=\"col-6 \">\n                            <button class=\"btn btn-outline-secondary\" style='width:120px' (click)=\"nuevoPedido()\" > <i class='fa fa-chevron-left'></i> Regresar </button>\n                    </div>\n\n                    <div class=\"col-3 offset-md-3\">\n                        <button type=\"submit\" class=\"btn btn-info\"><a href=\"javascript:window.print()\">Imprimir</a></button>\n                    </div>\n                \n            </div>\n        \n        </div>\n    </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/home/home/home.component.html": 
        /*!*******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/home/home/home.component.html ***!
          \*******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<link href=\"https://fonts.googleapis.com/css?family=Righteous&display=swap\" rel=\"stylesheet\">\n<br>\n<div class=\"card card-body bg-light col-md-6 offset-md-3\">\n    <h2>Tipo de Usuario</h2><br>\n    <div class=\"form-group\">\n        <button class=\"btn btn-info form-control\" (click)=\"login()\">Usuario</button>\n    </div>\n    <div class=\"form-group\">\n         <button class=\"btn btn-info form-control\">Administrador</button>\n    </div>\n    \n    <footer>Autor: Wilson Luna</footer>\n</div>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/login/user-login/user-login.component.html": 
        /*!********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/login/user-login/user-login.component.html ***!
          \********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<link href=\"https://fonts.googleapis.com/css?family=Righteous&display=swap\" rel=\"stylesheet\">\n<div class=\"card card-body bg-light col-md-6 offset-md-3\">\r\n    <h2>Iniciar Sesion</h2><br />\r\n    <div *ngIf=\"errorMessage\" class=\"alert alert-warning\">{{ errorMessage }}</div>\r\n    <form (submit)=\"onLogin()\"  #theForm=\"ngForm\" novalidate>\r\n        <div class=\"form-group row\">\r\n            <label class=\"col-3 col-form-label\">Usuario: </label>\r\n            <div class=\"col-9\">\r\n                <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"creds.username\" #username=\"ngModel\" required/>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n            <label class=\"col-3 col-form-label\">Contraseña: </label>\r\n            <div class=\"col-9\">\r\n                <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"creds.password\" required #password=\"ngModel\" />\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group row\">\r\n            <div class=\"col-4\"></div>\r\n            <div class=\"col-4\">\r\n                <button type=\"submit\" class=\"btn btn-info\" value=\"Login\" [disabled]=\"theForm.invalid\" >Iniciar Sesion</button>\r\n            </div>\r\n            <div class=\"col-4\">\r\n                <button class=\"btn btn-outline-secondary\" style='width:120px' [routerLink]=\"['/home']\"> <i class='fa fa-chevron-left'></i> Regresar </button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n\r\n</div>\n\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/order/cart/cart.component.html": 
        /*!********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/order/cart/cart.component.html ***!
          \********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card card-body bg-light\">\n        <h3 class=\"text-center\">Resumen de Orden </h3>\n        <div>Numero de Productos: {{ productService.order.items.length }} </div>\n        <div>Subtotal: {{ productService.order.getSubtotal | currency:\" Q\" }}</div>\n        <table class=\"table table-condensed table-hover\">\n                <thead>\n                    <tr>\n                        <td>Product</td>\n                        <td>#</td>\n                        <td>$</td>\n                        <td>Total</td>\n                    </tr>\n                </thead>\n                <tbody>\n                      <tr *ngFor=\"let o of productService.order.items\">\n                            <td>{{ o.producto.nombre }}</td>\n                            <td>{{ o.cantidad}}</td>\n                            <td>{{ o.producto.precio | currency:\" Q\":true }}</td>\n                            <td>{{ (o.producto.precio * o.cantidad ) | currency:\" Q\":true }}</td>\n                        </tr>\n                </tbody>\n        </table>\n        \n        <button class=\"btn btn-success\" *ngIf=\"productService.order.items.length > 0\" (click)=\"onCheckout()\">Realizar Pago</button>\n    </div>\n    ");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/order/order.component.html": 
        /*!****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/order/order.component.html ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div *ngIf=\"errorMessage\" class=\"alert alert-warning\">{{ errorMessage }}</div>\r\n        <h3>Confirmar Orden</h3>\r\n        <table class=\"table table-bordered table-hover\">\r\n            <thead>\r\n                <tr>\r\n                    <th>Producto</th>\r\n                    <th>Cantidad</th>\r\n                    <th>Precio Unitario</th>\r\n                    <th>Total</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let o of productService.order.items\">\r\n                    <td>{{o.producto.nombre}}</td>\r\n                    <td>{{ o.cantidad }}</td>\r\n                    <td>{{ o.producto.precio |currency:' Q'}}</td>\r\n                    <td>{{ (o.producto.precio * o.cantidad)|currency:' Q' }}</td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-4 form-group\">\r\n            <label> <strong>Datos de Factura</strong> </label><br>\r\n            <label>Nombres</label>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"nombre\" />\r\n            <label>Apellidos</label>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"apellido\" />\r\n            <div *ngIf=\"selectedOption == 'Tarjeta'\">\r\n                <label>Id Tarjeta</label>\r\n                <input type=\"number\" class=\"form-control\" [(ngModel)]=\"idTarjeta\" />\r\n                <label>Nombre Tarjeta</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"nombreTarjeta\" />\r\n                \r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"nit col-md-4\">\r\n            <br>\r\n            <label>NIT</label>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"nit\" />\r\n            <label>Tipo de Pago</label> <br />\r\n            <p-dropdown [options]=\"options\" [(ngModel)]=\"selectedOption\" editable=\"true\" placeholder=\"Seleccione Metodo\"></p-dropdown> <br />\r\n               <div *ngIf=\"selectedOption == 'Tarjeta'\">\r\n                   <label>Numero Tarjeta</label>\r\n                   <input type=\"number\" class=\"form-control\" [(ngModel)]=\"numeroTarjeta\" />\r\n                   <label> {{numeroTarjeta}}</label>\r\n                   <label>Fecha Vencimiento</label>\r\n                   <input type=\"date\" class=\"form-control\" [(ngModel)]=\"fechaVencimiento\" />\r\n                   <label>CCV</label>\r\n                   <input type=\"number\" class=\"form-control\" [(ngModel)]=\"ccv\" />\r\n               </div>\r\n        </div>\r\n            <div class=\"col-md-4 text-right\">\r\n                    <table class=\"table table-condensed\">\r\n                      <tr>\r\n                        <td class=\"text-right\">Subtotal</td>\r\n                        <td class=\"text-right\">{{ productService.order.getSubtotal|currency:' Q' }}</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td class=\"text-right\">Total:</td>\r\n                        <td class=\"text-right\">{{ productService.order.getSubtotal|currency:' Q' }}</td>\r\n                      </tr>\r\n                    </table>\r\n                    <button class=\"btn btn-success\" (click)=\"Confirmar()\">Confirmar Pago</button>\r\n                    <a routerLink=\"/\" class=\"btn btn-info\">Cancelar</a>\r\n            </div>\r\n    </div>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/restaurant/menu-principal/menu-principal.component.html": 
        /*!*********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/restaurant/menu-principal/menu-principal.component.html ***!
          \*********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<link href=\"https://fonts.googleapis.com/css?family=Righteous&display=swap\" rel=\"stylesheet\">\n<br>\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"card card-body bg-light col-md-8\">\n            <h2>Menu</h2><br>\n            <div class=\"form-group\">\n                <button class=\"btn btn-info form-control\" (click)=\"desayunos()\" >Desayunos </button>\n            </div>\n            <div class=\"form-group\">\n                <button class=\"btn btn-info form-control\" (click)=\"almuerzosycenas()\">Almuerzos y Cenas</button>\n            </div>\n            <br>\n            <div class=\"form-group row\">\n                    <div class=\"col-6 \">\n                            <button class=\"btn btn-outline-secondary\" style='width:120px' (click)=\"home()\"  > <i class='fa fa-chevron-left'></i> Regresar </button>\n                    </div>\n                    <div class=\"col-3 offset-md-3\">\n                        <button type=\"submit\" class=\"btn btn-danger\"  [routerLink]=\"['/userLogin']\" >Cerrar Sesion</button>\n                    </div>\n                \n                </div>\n            <footer>Autor: Wilson Luna</footer>\n        </div>\n        <div class=\"col-md-4\">\n            <app-cart></app-cart>\n        </div>\n    </div>\n</div>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ 0: 
        /*!*********************************!*\
          !*** multi ./ClientApp/main.ts ***!
          \*********************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Users\spineda\Documents\LeCafe\LeCafe\ClientApp\main.ts */ "./ClientApp/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map