(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"], {
    /***/
    "X3zk":
    /*!***************************************!*\
      !*** ./src/app/login/login.module.ts ***!
      \***************************************/

    /*! exports provided: LoginModule */

    /***/
    function X3zk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginModule", function () {
        return LoginModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../angular-material/angular-material.module */
      "PI13");
      /* harmony import */


      var _login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./login.component */
      "vtpD");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
      }];

      var LoginModule = function LoginModule() {
        _classCallCheck(this, LoginModule);
      };

      LoginModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: LoginModule
      });
      LoginModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        factory: function LoginModule_Factory(t) {
          return new (t || LoginModule)();
        },
        imports: [[_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_3__["AngularMaterialModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](LoginModule, {
          declarations: [_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]],
          imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_3__["AngularMaterialModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "vtpD":
    /*!******************************************!*\
      !*** ./src/app/login/login.component.ts ***!
      \******************************************/

    /*! exports provided: LoginComponent */

    /***/
    function vtpD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! jquery */
      "EVdn");
      /* harmony import */


      var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _store_auth_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./store/auth.actions */
      "S0FY");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _user_page_userpage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../user-page/userpage.service */
      "4wLV");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngrx/store */
      "kt0X");

      var _c0 = ["authForm"];
      var _c1 = ["login"];

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(_snackBar, getUserPage, store) {
          _classCallCheck(this, LoginComponent);

          this._snackBar = _snackBar;
          this.getUserPage = getUserPage;
          this.store = store;
          this.signIn = true;
          this.isLoading = false;
          this.err = null;
          this.loginInfo = "login";
          this.horizontalPosition = 'center';
          this.verticalPosition = 'top';
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            jquery__WEBPACK_IMPORTED_MODULE_0__(".show-login-block").click(function () {
              jquery__WEBPACK_IMPORTED_MODULE_0__(".sign").slideUp(1000);
              jquery__WEBPACK_IMPORTED_MODULE_0__(".login").slideDown(1000);
            });
            jquery__WEBPACK_IMPORTED_MODULE_0__(".show-sign-block").click(function () {
              jquery__WEBPACK_IMPORTED_MODULE_0__(".login").slideUp(1000);
              jquery__WEBPACK_IMPORTED_MODULE_0__(".sign").slideDown(1000);
            });
          }
        }, {
          key: "onSignUp",
          value: function onSignUp(form) {
            if (!form.valid) {
              return;
            }

            var email = form.value.email;
            var password = form.value.password;
            var Username = form.value.username;
            var firstName = form.value.firstName;
            var lastName = form.value.lastName;
            var userI = {
              Username: Username,
              firstName: firstName,
              lastName: lastName,
              email: email
            };
            this.getUserPage.userI.next(userI);
            this.store.dispatch(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_1__["signUpStart"]({
              email: email,
              password: password
            }));
            form.reset();
          }
        }, {
          key: "onLoginForm",
          value: function onLoginForm(form) {
            var _this = this;

            this.store.dispatch(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_1__["LoginStart"]({
              email: form.value.email,
              password: form.value.password
            }));
            this.subscribe = this.store.select('Auth').subscribe(function (authState) {
              if (authState.ErrorMessage && authState.ErrorMessage != null) {
                _this._snackBar.open(authState.ErrorMessage, 'x', {
                  horizontalPosition: _this.horizontalPosition,
                  verticalPosition: _this.verticalPosition
                });
              } else {
                _this._snackBar.open('login success', 'x', {
                  horizontalPosition: _this.horizontalPosition,
                  verticalPosition: _this.verticalPosition
                });
              }
            });
            var dimissTime = setTimeout(function () {
              _this._snackBar.dismiss();
            }, 2000);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscribe.unsubscribe();
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_user_page_userpage_service__WEBPACK_IMPORTED_MODULE_4__["getUserInfo"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]));
      };

      LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: LoginComponent,
        selectors: [["app-login"]],
        viewQuery: function LoginComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.sLform = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.login = _t.first);
          }
        },
        inputs: {
          logSwitchS: "logSwitchS"
        },
        decls: 0,
        vars: 0,
        template: function LoginComponent_Template(rf, ctx) {},
        styles: ["@charset \"UTF-8\";\n.full[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n.login-inputs[_ngcontent-%COMP%] {\n  display: abs;\n  top: 0px;\n  display: block;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: 100000;\n}\n.login-inputs[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:first-of-type {\n  cursor: pointer;\n  color: red;\n}\n.login-inputs[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:last-of-type {\n  cursor: pointer;\n}\n.login_c[_ngcontent-%COMP%] {\n  z-index: 1000;\n}\n#slider[_ngcontent-%COMP%] {\n  height: 100% !important;\n}\n.login-box[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child, .login-box[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n  font-weight: bold;\n  font-size: 20px;\n  padding: 10px;\n  border-color: rgba(0, 0, 0, 0.1);\n}\n.login-box[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n  margin-bottom: 10px;\n  border-bottom-width: 1px;\n  border-bottom-style: solid;\n}\n.login-box[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n  margin-top: 10px;\n  border-top-width: 1px;\n  border-top-style: solid;\n}\n.login[_ngcontent-%COMP%], .sign[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n.sign[_ngcontent-%COMP%] {\n  padding: 10px;\n  display: none;\n}\n.login[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 10px 0 20px;\n}\n.login-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .login-box[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 10px;\n}\n.login-box[_ngcontent-%COMP%] {\n  width: 74%;\n  border-radius: 3px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(93%, -160%);\n  background: #f9f9f9eb;\n  background: #fff;\n  box-shadow: none;\n  border: 1px solid #ddd !important;\n}\n.login-box[_ngcontent-%COMP%]   .social-login[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  padding: 0 0 30px;\n  margin-bottom: 10px;\n}\n.login-box[_ngcontent-%COMP%]   .social-login[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 20px;\n  text-align: center;\n  background: #337ab7;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  line-height: 40px;\n  color: #fff;\n}\n.login-box[_ngcontent-%COMP%]   .remember[_ngcontent-%COMP%] {\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  padding: 10px;\n  border-radius: 3px;\n}\n.login-box[_ngcontent-%COMP%]   .remember[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 4px;\n}\n#remember[_ngcontent-%COMP%]:checked    + i[_ngcontent-%COMP%]:before {\n  content: \"\uF205\";\n  color: #337ab7;\n}\n\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\nbody[_ngcontent-%COMP%] {\n  min-width: 900px;\n}\n\n#slider[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 500px;\n  position: relative;\n  overflow: hidden;\n}\n@-webkit-keyframes load {\n  from {\n    left: -100%;\n  }\n  to {\n    left: 0;\n  }\n}\n@keyframes load {\n  from {\n    left: -100%;\n  }\n  to {\n    left: 0;\n  }\n}\n.slides[_ngcontent-%COMP%] {\n  width: 400%;\n  height: 100%;\n  position: relative;\n  -webkit-animation: slide 30s infinite;\n  animation: slide 30s infinite;\n}\n.slider[_ngcontent-%COMP%] {\n  width: 25%;\n  height: 100%;\n  float: left;\n  position: relative;\n  z-index: 1;\n  overflow: hidden;\n}\n.slide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.slide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n\n.legend[_ngcontent-%COMP%] {\n  border: 500px solid transparent;\n  border-left: 800px solid rgba(52, 73, 94, 0.7);\n  border-bottom: 0;\n  position: absolute;\n  bottom: 0;\n}\n\n.content[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  overflow: hidden;\n}\n.content-txt[_ngcontent-%COMP%] {\n  width: 400px;\n  height: 150px;\n  float: left;\n  position: relative;\n  top: 300px;\n  -webkit-animation: content-s 7.5s infinite;\n  animation: content-s 7.5s infinite;\n}\n.content-txt[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: Arial;\n  text-transform: uppercase;\n  font-size: 24px;\n  color: #fff;\n  text-align: left;\n  margin-left: 30px;\n  padding-bottom: 10px;\n}\n.content-txt[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: arial;\n  font-weight: normal;\n  font-size: 14px;\n  font-style: italic;\n  color: #fff;\n  text-align: left;\n  margin-left: 30px;\n}\n\n.switch[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 10px;\n  position: absolute;\n  bottom: 50px;\n  z-index: 99;\n  left: 30px;\n}\n.switch[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\n  list-style: none;\n}\n.switch[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: #333;\n  float: left;\n  margin-right: 5px;\n  cursor: pointer;\n}\n.switch[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.on[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background: #f39c12;\n  position: relative;\n  -webkit-animation: on 30s infinite;\n  animation: on 30s infinite;\n}\n\n@-webkit-keyframes slide {\n  0%, 100% {\n    margin-left: 0%;\n  }\n  21% {\n    margin-left: 0%;\n  }\n  25% {\n    margin-left: -100%;\n  }\n  46% {\n    margin-left: -100%;\n  }\n  50% {\n    margin-left: -200%;\n  }\n  71% {\n    margin-left: -200%;\n  }\n  75% {\n    margin-left: -300%;\n  }\n  96% {\n    margin-left: -300%;\n  }\n}\n@keyframes slide {\n  0%, 100% {\n    margin-left: 0%;\n  }\n  21% {\n    margin-left: 0%;\n  }\n  25% {\n    margin-left: -100%;\n  }\n  46% {\n    margin-left: -100%;\n  }\n  50% {\n    margin-left: -200%;\n  }\n  71% {\n    margin-left: -200%;\n  }\n  75% {\n    margin-left: -300%;\n  }\n  96% {\n    margin-left: -300%;\n  }\n}\n@-webkit-keyframes content-s {\n  0% {\n    left: -420px;\n  }\n  10% {\n    left: 0px;\n  }\n  30% {\n    left: 0px;\n  }\n  40% {\n    left: 0px;\n  }\n  50% {\n    left: 0px;\n  }\n  60% {\n    left: 0px;\n  }\n  70% {\n    left: 0;\n  }\n  80% {\n    left: -420px;\n  }\n  90% {\n    left: -420px;\n  }\n  100% {\n    left: -420px;\n  }\n}\n@keyframes content-s {\n  0% {\n    left: -420px;\n  }\n  10% {\n    left: 20px;\n  }\n  15% {\n    left: 0px;\n  }\n  30% {\n    left: 0px;\n  }\n  40% {\n    left: 0px;\n  }\n  50% {\n    left: 0px;\n  }\n  60% {\n    left: 0px;\n  }\n  70% {\n    left: 0;\n  }\n  80% {\n    left: -420px;\n  }\n  90% {\n    left: -420px;\n  }\n  100% {\n    left: -420px;\n  }\n}\n@-webkit-keyframes on {\n  0%, 100% {\n    margin-left: 0%;\n  }\n  21% {\n    margin-left: 0%;\n  }\n  25% {\n    margin-left: 15px;\n  }\n  46% {\n    margin-left: 15px;\n  }\n  50% {\n    margin-left: 30px;\n  }\n  71% {\n    margin-left: 30px;\n  }\n  75% {\n    margin-left: 45px;\n  }\n  96% {\n    margin-left: 45px;\n  }\n}\n@keyframes on {\n  0%, 100% {\n    margin-left: 0%;\n  }\n  21% {\n    margin-left: 0%;\n  }\n  25% {\n    margin-left: 15px;\n  }\n  46% {\n    margin-left: 15px;\n  }\n  50% {\n    margin-left: 30px;\n  }\n  71% {\n    margin-left: 30px;\n  }\n  75% {\n    margin-left: 45px;\n  }\n  96% {\n    margin-left: 45px;\n  }\n}\n\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: inherit;\n}\nhtml[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\nbody[_ngcontent-%COMP%] {\n  background: #fff;\n}\n\nheader[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 80px;\n  background: #222;\n}\n.logo[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 65px;\n  position: relative;\n  top: 7.5px;\n  float: left;\n  margin-left: 5%;\n}\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\nnav[_ngcontent-%COMP%] {\n  width: auto;\n  height: 100%;\n  float: right;\n  margin-right: 5%;\n  list-style: none;\n}\nnav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  width: auto;\n  margin-right: 20px;\n  float: left;\n}\nnav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family: Arial;\n  font-size: 16px;\n  color: #fff;\n  line-height: 80px;\n}\nnav[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 30px;\n  margin-top: 25px;\n  font-family: Arial;\n  font-size: 14px;\n  color: #666;\n  border: 2px solid #aaa;\n  padding-left: 10px;\n}\nnav[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 70%;\n  height: auto;\n  padding: 20px 0;\n  margin: 20px auto;\n}\n.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: Arial;\n  font-size: 24px;\n  color: #222;\n  text-transform: uppercase;\n  margin: 20px 0;\n}\n.container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: arial;\n  font-size: 16px;\n  color: #444;\n  margin-top: 10px;\n}\n.container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: arial;\n  font-weight: normal;\n  font-size: 16px;\n  color: #aaa;\n}\n.code[_ngcontent-%COMP%] {\n  width: 600px;\n  height: auto;\n  margin: 20px auto;\n  padding: 10px 20px;\n  background: #222;\n  border-left: 10px solid #aaa;\n  font-family: arial;\n  font-size: 16px;\n  color: #fff;\n}\n.code[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #89A978;\n}\n.space[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 1px;\n  float: left;\n}\nfooter[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 50px;\n  background: #222;\n}\nfooter[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: Arial;\n  font-weight: normal;\n  font-size: 14px;\n  color: #fff;\n  margin-left: 5%;\n  line-height: 50px;\n}\n#credits[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  margin: auto;\n  bottom: 0;\n  margin-bottom: 20px;\n  font-family: \"Open Sans\", sans-serif;\n  color: #b297a2;\n  font-size: 10px;\n  text-transform: uppercase;\n  text-align: center;\n}\n#credits[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #b297a2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUNoQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUNBO0VBQ0UsWUFBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNGLGVBQUE7QUFFQTtBQUNFO0VBQ0UsZUFBQTtFQUNBLFVBQUE7QUFFSjtBQUFFO0VBQ0UsZUFBQTtBQUVKO0FBQ0E7RUFDRSxhQUFBO0FBRUY7QUFBQTtFQUNFLHVCQUFBO0FBR0Y7QUFDQTs7RUFFRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsZ0NBQUE7QUFFRjtBQUNBO0VBQ0UsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLDBCQUFBO0FBRUY7QUFDQTtFQUVFLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtBQUNGO0FBR0E7O0VBRUUsYUFBQTtBQUFGO0FBR0E7RUFDRSxhQUFBO0VBQ0EsYUFBQTtBQUFGO0FBRUE7RUFDRSxtQkFBQTtBQUNGO0FBRUE7O0VBR0UsV0FBQTtFQUNBLG1CQUFBO0FBQUY7QUFJQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQUFBO0FBREo7QUFJQTtFQUNFLDJDQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQURGO0FBSUE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQURGO0FBSUE7RUFDRSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQURGO0FBR0E7RUFDRSxlQUFBO0FBQUY7QUFFQTtFQUNFLFlBQUE7RUFDQSxj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ZUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFrR0Y7QUFoR0E7RUFDRSxjQUFBO0FBbUdGIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmZ1bGwge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ubG9naW4taW5wdXRzIHtcbiAgZGlzcGxheTogYWJzO1xuICB0b3A6IDBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgei1pbmRleDogMTAwMDAwO1xufVxuXG4ubG9naW4taW5wdXRzIHAgOmZpcnN0LW9mLXR5cGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiByZWQ7XG59XG4ubG9naW4taW5wdXRzIHAgOmxhc3Qtb2YtdHlwZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmxvZ2luX2Mge1xuICB6LWluZGV4OiAxMDAwO1xufVxuXG4jc2xpZGVyIHtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5sb2dpbi1ib3ggPiBkaXY6Zmlyc3QtY2hpbGQsXG4ubG9naW4tYm94ID4gZGl2Omxhc3QtY2hpbGQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLmxvZ2luLWJveCA+IGRpdjpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XG59XG5cbi5sb2dpbi1ib3ggPiBkaXY6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlci10b3Atd2lkdGg6IDFweDtcbiAgYm9yZGVyLXRvcC1zdHlsZTogc29saWQ7XG59XG5cbi5sb2dpbixcbi5zaWduIHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLnNpZ24ge1xuICBwYWRkaW5nOiAxMHB4O1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ubG9naW4gaDIge1xuICBtYXJnaW46IDEwcHggMCAyMHB4O1xufVxuXG4ubG9naW4tYm94IGlucHV0LFxuLmxvZ2luLWJveCBsYWJlbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ubG9naW4tYm94IHtcbiAgd2lkdGg6IDc0JTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDkzJSwgLTE2MCUpO1xuICBiYWNrZ3JvdW5kOiAjZjlmOWY5ZWI7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQgIWltcG9ydGFudDtcbn1cblxuLmxvZ2luLWJveCAuc29jaWFsLWxvZ2luIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgcGFkZGluZzogMCAwIDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5sb2dpbi1ib3ggLnNvY2lhbC1sb2dpbiA+IGRpdiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICMzMzdhYjc7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ubG9naW4tYm94IC5yZW1lbWJlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4ubG9naW4tYm94IC5yZW1lbWJlciBpIHtcbiAgbWFyZ2luLXRvcDogNHB4O1xufVxuXG4jcmVtZW1iZXI6Y2hlY2tlZCArIGk6YmVmb3JlIHtcbiAgY29udGVudDogXCLviIVcIjtcbiAgY29sb3I6ICMzMzdhYjc7XG59XG5cbi8qIFJlc2V0ICovXG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5ib2R5IHtcbiAgbWluLXdpZHRoOiA5MDBweDtcbn1cblxuLyogU2xpZGVyICovXG4jc2xpZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuQGtleWZyYW1lcyBsb2FkIHtcbiAgZnJvbSB7XG4gICAgbGVmdDogLTEwMCU7XG4gIH1cbiAgdG8ge1xuICAgIGxlZnQ6IDA7XG4gIH1cbn1cbi5zbGlkZXMge1xuICB3aWR0aDogNDAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzbGlkZSAzMHMgaW5maW5pdGU7XG4gIC1tb3otYW5pbWF0aW9uOiBzbGlkZSAzMHMgaW5maW5pdGU7XG4gIGFuaW1hdGlvbjogc2xpZGUgMzBzIGluZmluaXRlO1xufVxuXG4uc2xpZGVyIHtcbiAgd2lkdGg6IDI1JTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc2xpZGUgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnNsaWRlIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5pbWFnZSBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4vKiBMZWdlbmQgKi9cbi5sZWdlbmQge1xuICBib3JkZXI6IDUwMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItbGVmdDogODAwcHggc29saWQgcmdiYSg1MiwgNzMsIDk0LCAwLjcpO1xuICBib3JkZXItYm90dG9tOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbn1cblxuLyogQ29udGVudHMgKi9cbi5jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uY29udGVudC10eHQge1xuICB3aWR0aDogNDAwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMzAwcHg7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBjb250ZW50LXMgNy41cyBpbmZpbml0ZTtcbiAgLW1vei1hbmltYXRpb246IGNvbnRlbnQtcyA3LjVzIGluZmluaXRlO1xuICBhbmltYXRpb246IGNvbnRlbnQtcyA3LjVzIGluZmluaXRlO1xufVxuXG4uY29udGVudC10eHQgaDEge1xuICBmb250LWZhbWlseTogQXJpYWw7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLmNvbnRlbnQtdHh0IGgyIHtcbiAgZm9udC1mYW1pbHk6IGFyaWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xufVxuXG4vKiBTd2l0Y2ggKi9cbi5zd2l0Y2gge1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDUwcHg7XG4gIHotaW5kZXg6IDk5O1xuICBsZWZ0OiAzMHB4O1xufVxuXG4uc3dpdGNoID4gdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4uc3dpdGNoID4gdWwgPiBsaSB7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogIzMzMztcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zd2l0Y2ggdWwge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ub24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICNmMzljMTI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLXdlYmtpdC1hbmltYXRpb246IG9uIDMwcyBpbmZpbml0ZTtcbiAgLW1vei1hbmltYXRpb246IG9uIDMwcyBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiBvbiAzMHMgaW5maW5pdGU7XG59XG5cbi8qIEFuaW1hdGlvbiAqL1xuQC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlIHtcbiAgMCUsIDEwMCUge1xuICAgIG1hcmdpbi1sZWZ0OiAwJTtcbiAgfVxuICAyMSUge1xuICAgIG1hcmdpbi1sZWZ0OiAwJTtcbiAgfVxuICAyNSUge1xuICAgIG1hcmdpbi1sZWZ0OiAtMTAwJTtcbiAgfVxuICA0NiUge1xuICAgIG1hcmdpbi1sZWZ0OiAtMTAwJTtcbiAgfVxuICA1MCUge1xuICAgIG1hcmdpbi1sZWZ0OiAtMjAwJTtcbiAgfVxuICA3MSUge1xuICAgIG1hcmdpbi1sZWZ0OiAtMjAwJTtcbiAgfVxuICA3NSUge1xuICAgIG1hcmdpbi1sZWZ0OiAtMzAwJTtcbiAgfVxuICA5NiUge1xuICAgIG1hcmdpbi1sZWZ0OiAtMzAwJTtcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIHNsaWRlIHtcbiAgMCUsIDEwMCUge1xuICAgIG1hcmdpbi1sZWZ0OiAwJTtcbiAgfVxuICAyMSUge1xuICAgIG1hcmdpbi1sZWZ0OiAwJTtcbiAgfVxuICAyNSUge1xuICAgIG1hcmdpbi1sZWZ0OiAtMTAwJTtcbiAgfVxuICA0NiUge1xuICAgIG1hcmdpbi1sZWZ0OiAtMTAwJTtcbiAgfVxuICA1MCUge1xuICAgIG1hcmdpbi1sZWZ0OiAtMjAwJTtcbiAgfVxuICA3MSUge1xuICAgIG1hcmdpbi1sZWZ0OiAtMjAwJTtcbiAgfVxuICA3NSUge1xuICAgIG1hcmdpbi1sZWZ0OiAtMzAwJTtcbiAgfVxuICA5NiUge1xuICAgIG1hcmdpbi1sZWZ0OiAtMzAwJTtcbiAgfVxufVxuQGtleWZyYW1lcyBzbGlkZSB7XG4gIDAlLCAxMDAlIHtcbiAgICBtYXJnaW4tbGVmdDogMCU7XG4gIH1cbiAgMjElIHtcbiAgICBtYXJnaW4tbGVmdDogMCU7XG4gIH1cbiAgMjUlIHtcbiAgICBtYXJnaW4tbGVmdDogLTEwMCU7XG4gIH1cbiAgNDYlIHtcbiAgICBtYXJnaW4tbGVmdDogLTEwMCU7XG4gIH1cbiAgNTAlIHtcbiAgICBtYXJnaW4tbGVmdDogLTIwMCU7XG4gIH1cbiAgNzElIHtcbiAgICBtYXJnaW4tbGVmdDogLTIwMCU7XG4gIH1cbiAgNzUlIHtcbiAgICBtYXJnaW4tbGVmdDogLTMwMCU7XG4gIH1cbiAgOTYlIHtcbiAgICBtYXJnaW4tbGVmdDogLTMwMCU7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBjb250ZW50LXMge1xuICAwJSB7XG4gICAgbGVmdDogLTQyMHB4O1xuICB9XG4gIDEwJSB7XG4gICAgbGVmdDogMHB4O1xuICB9XG4gIDMwJSB7XG4gICAgbGVmdDogMHB4O1xuICB9XG4gIDQwJSB7XG4gICAgbGVmdDogMHB4O1xuICB9XG4gIDUwJSB7XG4gICAgbGVmdDogMHB4O1xuICB9XG4gIDYwJSB7XG4gICAgbGVmdDogMHB4O1xuICB9XG4gIDcwJSB7XG4gICAgbGVmdDogMDtcbiAgfVxuICA4MCUge1xuICAgIGxlZnQ6IC00MjBweDtcbiAgfVxuICA5MCUge1xuICAgIGxlZnQ6IC00MjBweDtcbiAgfVxuICAxMDAlIHtcbiAgICBsZWZ0OiAtNDIwcHg7XG4gIH1cbn1cbkAtbW96LWtleWZyYW1lcyBjb250ZW50LXMge1xuICAwJSB7XG4gICAgbGVmdDogLTQyMHB4O1xuICB9XG4gIDEwJSB7XG4gICAgbGVmdDogMHB4O1xuICB9XG4gIDMwJSB7XG4gICAgbGVmdDogMHB4O1xuICB9XG4gIDQwJSB7XG4gICAgbGVmdDogMHB4O1xuICB9XG4gIDUwJSB7XG4gICAgbGVmdDogMHB4O1xuICB9XG4gIDYwJSB7XG4gICAgbGVmdDogMHB4O1xuICB9XG4gIDcwJSB7XG4gICAgbGVmdDogMDtcbiAgfVxuICA4MCUge1xuICAgIGxlZnQ6IC00MjBweDtcbiAgfVxuICA5MCUge1xuICAgIGxlZnQ6IC00MjBweDtcbiAgfVxuICAxMDAlIHtcbiAgICBsZWZ0OiAtNDIwcHg7XG4gIH1cbn1cbkBrZXlmcmFtZXMgY29udGVudC1zIHtcbiAgMCUge1xuICAgIGxlZnQ6IC00MjBweDtcbiAgfVxuICAxMCUge1xuICAgIGxlZnQ6IDIwcHg7XG4gIH1cbiAgMTUlIHtcbiAgICBsZWZ0OiAwcHg7XG4gIH1cbiAgMzAlIHtcbiAgICBsZWZ0OiAwcHg7XG4gIH1cbiAgNDAlIHtcbiAgICBsZWZ0OiAwcHg7XG4gIH1cbiAgNTAlIHtcbiAgICBsZWZ0OiAwcHg7XG4gIH1cbiAgNjAlIHtcbiAgICBsZWZ0OiAwcHg7XG4gIH1cbiAgNzAlIHtcbiAgICBsZWZ0OiAwO1xuICB9XG4gIDgwJSB7XG4gICAgbGVmdDogLTQyMHB4O1xuICB9XG4gIDkwJSB7XG4gICAgbGVmdDogLTQyMHB4O1xuICB9XG4gIDEwMCUge1xuICAgIGxlZnQ6IC00MjBweDtcbiAgfVxufVxuQC13ZWJraXQta2V5ZnJhbWVzIG9uIHtcbiAgMCUsIDEwMCUge1xuICAgIG1hcmdpbi1sZWZ0OiAwJTtcbiAgfVxuICAyMSUge1xuICAgIG1hcmdpbi1sZWZ0OiAwJTtcbiAgfVxuICAyNSUge1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICB9XG4gIDQ2JSB7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIH1cbiAgNTAlIHtcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgfVxuICA3MSUge1xuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICB9XG4gIDc1JSB7XG4gICAgbWFyZ2luLWxlZnQ6IDQ1cHg7XG4gIH1cbiAgOTYlIHtcbiAgICBtYXJnaW4tbGVmdDogNDVweDtcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIG9uIHtcbiAgMCUsIDEwMCUge1xuICAgIG1hcmdpbi1sZWZ0OiAwJTtcbiAgfVxuICAyMSUge1xuICAgIG1hcmdpbi1sZWZ0OiAwJTtcbiAgfVxuICAyNSUge1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICB9XG4gIDQ2JSB7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIH1cbiAgNTAlIHtcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgfVxuICA3MSUge1xuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICB9XG4gIDc1JSB7XG4gICAgbWFyZ2luLWxlZnQ6IDQ1cHg7XG4gIH1cbiAgOTYlIHtcbiAgICBtYXJnaW4tbGVmdDogNDVweDtcbiAgfVxufVxuQGtleWZyYW1lcyBvbiB7XG4gIDAlLCAxMDAlIHtcbiAgICBtYXJnaW4tbGVmdDogMCU7XG4gIH1cbiAgMjElIHtcbiAgICBtYXJnaW4tbGVmdDogMCU7XG4gIH1cbiAgMjUlIHtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgfVxuICA0NiUge1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICB9XG4gIDUwJSB7XG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gIH1cbiAgNzElIHtcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgfVxuICA3NSUge1xuICAgIG1hcmdpbi1sZWZ0OiA0NXB4O1xuICB9XG4gIDk2JSB7XG4gICAgbWFyZ2luLWxlZnQ6IDQ1cHg7XG4gIH1cbn1cbi8qIG1haW4gKi9cbi8qIFJlc2V0ICovXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxuaHRtbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi8qIEJvZHkgKi9cbmJvZHkge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4vKiBIZWFkZXIgKi9cbmhlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJhY2tncm91bmQ6ICMyMjI7XG59XG5cbi5sb2dvIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNjVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDcuNXB4O1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xufVxuXG4ubG9nbyBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5uYXYge1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiAxMDAlO1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogNSU7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbm5hdiBsaSB7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG5uYXYgbGkgYSB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgbGluZS1oZWlnaHQ6IDgwcHg7XG59XG5cbm5hdiBzZWxlY3Qge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNjY2O1xuICBib3JkZXI6IDJweCBzb2xpZCAjYWFhO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbm5hdiBzZWxlY3Q6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4vKiBDb250ZW50ICovXG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDcwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAyMHB4IDA7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xufVxuXG4uY29udGFpbmVyIGgxIHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjMjIyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW46IDIwcHggMDtcbn1cblxuLmNvbnRhaW5lciBoMiB7XG4gIGZvbnQtZmFtaWx5OiBhcmlhbDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzQ0NDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmNvbnRhaW5lciBoMyB7XG4gIGZvbnQtZmFtaWx5OiBhcmlhbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogI2FhYTtcbn1cblxuLmNvZGUge1xuICB3aWR0aDogNjAwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgYmFja2dyb3VuZDogIzIyMjtcbiAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgI2FhYTtcbiAgZm9udC1mYW1pbHk6IGFyaWFsO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uY29kZSBzcGFuIHtcbiAgY29sb3I6ICM4OUE5Nzg7XG59XG5cbi5zcGFjZSB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDFweDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbmZvb3RlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQ6ICMyMjI7XG59XG5cbmZvb3RlciBoMSB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBsaW5lLWhlaWdodDogNTBweDtcbn1cblxuI2NyZWRpdHMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IGF1dG87XG4gIGJvdHRvbTogMDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjYjI5N2EyO1xuICBmb250LXNpemU6IDEwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2NyZWRpdHMgYSB7XG4gIGNvbG9yOiAjYjI5N2EyO1xufSJdfQ== */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=login-login-module-es5.js.map