(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["note-note-module"], {
    /***/
    "4D6J":
    /*!*************************************!*\
      !*** ./src/app/note/note.module.ts ***!
      \*************************************/

    /*! exports provided: NoteModule */

    /***/
    function D6J(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NoteModule", function () {
        return NoteModule;
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


      var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @tinymce/tinymce-angular */
      "fB2i");
      /* harmony import */


      var _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../angular-material/angular-material.module */
      "PI13");
      /* harmony import */


      var _add_note_add_note_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./add-note/add-note.component */
      "zrK+");
      /* harmony import */


      var _note_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./note.component */
      "8hpU");
      /* harmony import */


      var _note_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./note.routing.module */
      "4bXk");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var NoteModule = function NoteModule() {
        _classCallCheck(this, NoteModule);
      };

      NoteModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
        type: NoteModule
      });
      NoteModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
        factory: function NoteModule_Factory(t) {
          return new (t || NoteModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _note_routing_module__WEBPACK_IMPORTED_MODULE_7__["noteRoutingModule"], _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_3__["EditorModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](NoteModule, {
          declarations: [_note_component__WEBPACK_IMPORTED_MODULE_6__["NoteComponent"], _add_note_add_note_component__WEBPACK_IMPORTED_MODULE_5__["AddNoteComponent"]],
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _note_routing_module__WEBPACK_IMPORTED_MODULE_7__["noteRoutingModule"], _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_3__["EditorModule"]]
        });
      })();
      /***/

    },

    /***/
    "4bXk":
    /*!*********************************************!*\
      !*** ./src/app/note/note.routing.module.ts ***!
      \*********************************************/

    /*! exports provided: noteRoutingModule */

    /***/
    function bXk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "noteRoutingModule", function () {
        return noteRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _login_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../login/auth.guard */
      "VQQV");
      /* harmony import */


      var _add_note_add_note_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./add-note/add-note.component */
      "zrK+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _add_note_add_note_component__WEBPACK_IMPORTED_MODULE_2__["AddNoteComponent"],
        canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
        children: [{
          path: ':id',
          component: _add_note_add_note_component__WEBPACK_IMPORTED_MODULE_2__["AddNoteComponent"]
        }]
      }];

      var noteRoutingModule = function noteRoutingModule() {
        _classCallCheck(this, noteRoutingModule);
      };

      noteRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: noteRoutingModule
      });
      noteRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        factory: function noteRoutingModule_Factory(t) {
          return new (t || noteRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](noteRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "8hpU":
    /*!****************************************!*\
      !*** ./src/app/note/note.component.ts ***!
      \****************************************/

    /*! exports provided: NoteComponent */

    /***/
    function hpU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NoteComponent", function () {
        return NoteComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var NoteComponent = /*#__PURE__*/function () {
        function NoteComponent() {
          _classCallCheck(this, NoteComponent);
        }

        _createClass(NoteComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NoteComponent;
      }();

      NoteComponent.ɵfac = function NoteComponent_Factory(t) {
        return new (t || NoteComponent)();
      };

      NoteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NoteComponent,
        selectors: [["app-note"]],
        decls: 1,
        vars: 0,
        template: function NoteComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: [".pic {\n  background-image: url('Web-4556.jpg');\n  height: 253px;\n  width: 100%;\n  margin: 0px;\n  background-position: center bottom;\n}\n\n.note-wrapper {\n  display: flex;\n  width: 100%;\n}\n\n.notes {\n  background: #fff;\n  height: 358px;\n  position: fixed;\n  top: 50%;\n  left: 56%;\n  transform: translate(-50%, -45%);\n  border-radius: 8px;\n  width: 73%;\n  display: block;\n  padding: 4px;\n}\n\nbody {\n  background-color: #f2f2f2f2;\n}\n\n.note-box {\n  padding: 5px;\n  margin: 6px;\n  border: 1px solid;\n  border-color: #dddd;\n  background: #fff;\n  color: #333;\n  border-radius: 10px;\n  height: 96%;\n  margin-left: 4px;\n  padding-right: 46px;\n  margin-right: 10px;\n  margin-top: 10px;\n  width: 150px;\n}\n\np.paragraph {\n  padding-bottom: 215px;\n  font-size: 20px;\n  text-transform: capitalize;\n  font-family: \"Roboto\";\n}\n\n.open {\n  width: 800px !important;\n}\n\n.note {\n  display: flex;\n}\n\n.addNote {\n  margin: 6px;\n  border: 1px solid;\n  border-color: #dddd;\n  background: #fff;\n  color: #333;\n  height: 73%;\n  margin-top: 84px;\n  border-radius: 10px;\n  /* width: 11%; */\n  margin: 0px;\n  height: 100%;\n  margin-left: 4px;\n  height: 290px;\n  width: 159px;\n  margin-top: 10px;\n  position: relative;\n  cursor: pointer;\n}\n\n.addNote .add {\n  position: absolute;\n  border: 1px solid #ddd;\n  padding: 10px;\n  border-radius: 50%;\n  background: #03832a;\n  color: #fff;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.addNote p {\n  position: absolute;\n  top: 65%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG5vdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQ0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtDQUFBO0FBQ0o7O0FBQ0E7RUFDSSxhQUFBO0VBQ0EsV0FBQTtBQUVKOztBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQUdKOztBQURBO0VBQ0ksMkJBQUE7QUFJSjs7QUFGQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUVBLG1CQUFBO0VBRUEsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUdKOztBQUFBO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtBQUdKOztBQUFBO0VBQ0ksdUJBQUE7QUFHSjs7QUFEQTtFQUNJLGFBQUE7QUFJSjs7QUFGQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBS1I7O0FBSlE7RUFDSSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FBTVo7O0FBSlE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7QUFNWiIsImZpbGUiOiJub3RlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBpY3tcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9XZWItNDU1Ni5qcGdcIikgO1xyXG4gICAgaGVpZ2h0OiAyNTNweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgYm90dG9tO1xyXG59XHJcbi5ub3RlLXdyYXBwZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLm5vdGVze1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGhlaWdodDogMzU4cHg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDU2JTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC00NSUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgd2lkdGg6IDczJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG59XHJcbmJvZHl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyZjI7XHJcbn1cclxuLm5vdGUtYm94e1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgbWFyZ2luOiA2cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogI2RkZGQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgY29sb3I6ICMzMzM7XHJcblxyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuXHJcbiAgICBoZWlnaHQ6IDk2JTtcclxuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA0NnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuXHJcbn1cclxucC5wYXJhZ3JhcGgge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIxNXB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbn1cclxuXHJcbi5vcGVue1xyXG4gICAgd2lkdGg6IDgwMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm5vdGV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5hZGROb3Rle1xyXG4gICAgbWFyZ2luOiA2cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogI2RkZGQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBoZWlnaHQ6IDczJTtcclxuICAgIG1hcmdpbi10b3A6IDg0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgLyogd2lkdGg6IDExJTsgKi9cclxuICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICAgICAgICBoZWlnaHQ6IDI5MHB4O1xyXG4gICAgICAgIHdpZHRoOiAxNTlweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgLmFkZHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMzgzMmE7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwe1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogNjUlO1xyXG4gICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4iXX0= */"],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "GKIv":
    /*!**********************************************!*\
      !*** ./src/app/note/note-m/note-m.module.ts ***!
      \**********************************************/

    /*! exports provided: NoteMModule */

    /***/
    function GKIv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NoteMModule", function () {
        return NoteMModule;
      });

      var NoteMModule = function NoteMModule(title, description, tags) {
        _classCallCheck(this, NoteMModule);

        this.title = title;
        this.description = description;
        this.tags = tags;
      };
      /***/

    },

    /***/
    "fB2i":
    /*!************************************************************************************************!*\
      !*** ./node_modules/@tinymce/tinymce-angular/__ivy_ngcc__/fesm2015/tinymce-tinymce-angular.js ***!
      \************************************************************************************************/

    /*! exports provided: EditorComponent, EditorModule, TINYMCE_SCRIPT_SRC, ɵa */

    /***/
    function fB2i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditorComponent", function () {
        return EditorComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditorModule", function () {
        return EditorModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TINYMCE_SCRIPT_SRC", function () {
        return TINYMCE_SCRIPT_SRC;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵa", function () {
        return Events;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /**
       * Copyright (c) 2017-present, Ephox, Inc.
       *
       * This source code is licensed under the Apache 2 license found in the
       * LICENSE file in the root directory of this source tree.
       *
       */


      function EditorComponent_ng_template_0_Template(rf, ctx) {}

      var getTinymce = function getTinymce() {
        var w = typeof window !== 'undefined' ? window : undefined;
        return w && w.tinymce ? w.tinymce : null;
      };

      var ɵ0 = getTinymce;

      var Events = function Events() {
        _classCallCheck(this, Events);

        this.onBeforePaste = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onContextMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onCopy = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onCut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDblclick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDrag = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDragDrop = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDragGesture = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDragOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDrop = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onFocusIn = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onFocusOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onKeyDown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onKeyPress = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onKeyUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onMouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onMouseEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onMouseLeave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onMouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onMouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onMouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onMouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onPaste = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSelectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onActivate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onAddUndo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onBeforeAddUndo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onBeforeExecCommand = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onBeforeGetContent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onBeforeRenderUI = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onBeforeSetContent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onClearUndos = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDeactivate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDirty = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onExecCommand = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onGetContent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onInit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onInitNgModel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onLoadContent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onNodeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onPostProcess = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onPostRender = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onPreInit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onPreProcess = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onProgressState = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onRedo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onRemove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onReset = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSaveContent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSetAttrib = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onObjectResizeStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onObjectResized = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onObjectSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSetContent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onUndo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onVisualAid = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      };

      Events.ɵfac = function Events_Factory(t) {
        return new (t || Events)();
      };

      Events.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: Events,
        outputs: {
          onBeforePaste: "onBeforePaste",
          onBlur: "onBlur",
          onClick: "onClick",
          onContextMenu: "onContextMenu",
          onCopy: "onCopy",
          onCut: "onCut",
          onDblclick: "onDblclick",
          onDrag: "onDrag",
          onDragDrop: "onDragDrop",
          onDragEnd: "onDragEnd",
          onDragGesture: "onDragGesture",
          onDragOver: "onDragOver",
          onDrop: "onDrop",
          onFocus: "onFocus",
          onFocusIn: "onFocusIn",
          onFocusOut: "onFocusOut",
          onKeyDown: "onKeyDown",
          onKeyPress: "onKeyPress",
          onKeyUp: "onKeyUp",
          onMouseDown: "onMouseDown",
          onMouseEnter: "onMouseEnter",
          onMouseLeave: "onMouseLeave",
          onMouseMove: "onMouseMove",
          onMouseOut: "onMouseOut",
          onMouseOver: "onMouseOver",
          onMouseUp: "onMouseUp",
          onPaste: "onPaste",
          onSelectionChange: "onSelectionChange",
          onActivate: "onActivate",
          onAddUndo: "onAddUndo",
          onBeforeAddUndo: "onBeforeAddUndo",
          onBeforeExecCommand: "onBeforeExecCommand",
          onBeforeGetContent: "onBeforeGetContent",
          onBeforeRenderUI: "onBeforeRenderUI",
          onBeforeSetContent: "onBeforeSetContent",
          onChange: "onChange",
          onClearUndos: "onClearUndos",
          onDeactivate: "onDeactivate",
          onDirty: "onDirty",
          onExecCommand: "onExecCommand",
          onGetContent: "onGetContent",
          onHide: "onHide",
          onInit: "onInit",
          onInitNgModel: "onInitNgModel",
          onLoadContent: "onLoadContent",
          onNodeChange: "onNodeChange",
          onPostProcess: "onPostProcess",
          onPostRender: "onPostRender",
          onPreInit: "onPreInit",
          onPreProcess: "onPreProcess",
          onProgressState: "onProgressState",
          onRedo: "onRedo",
          onRemove: "onRemove",
          onReset: "onReset",
          onSaveContent: "onSaveContent",
          onSetAttrib: "onSetAttrib",
          onObjectResizeStart: "onObjectResizeStart",
          onObjectResized: "onObjectResized",
          onObjectSelected: "onObjectSelected",
          onSetContent: "onSetContent",
          onShow: "onShow",
          onSubmit: "onSubmit",
          onUndo: "onUndo",
          onVisualAid: "onVisualAid"
        }
      });
      Events.propDecorators = {
        onBeforePaste: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onBlur: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onContextMenu: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onCopy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onCut: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onDblclick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onDrag: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onDragDrop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onDragEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onDragGesture: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onDragOver: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onDrop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onFocus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onFocusIn: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onFocusOut: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onKeyDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onKeyPress: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onKeyUp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onMouseDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onMouseEnter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onMouseLeave: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onMouseMove: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onMouseOut: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onMouseOver: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onMouseUp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onPaste: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onSelectionChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onActivate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onAddUndo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onBeforeAddUndo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onBeforeExecCommand: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onBeforeGetContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onBeforeRenderUI: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onBeforeSetContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onClearUndos: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onDeactivate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onDirty: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onExecCommand: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onGetContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onHide: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onInit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onInitNgModel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onLoadContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onNodeChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onPostProcess: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onPostRender: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onPreInit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onPreProcess: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onProgressState: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onRedo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onRemove: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onReset: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onSaveContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onSetAttrib: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onObjectResizeStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onObjectResized: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onObjectSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onSetContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onShow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onSubmit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onUndo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onVisualAid: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      };
      var validEvents = ['onActivate', 'onAddUndo', 'onBeforeAddUndo', 'onBeforeExecCommand', 'onBeforeGetContent', 'onBeforeRenderUI', 'onBeforeSetContent', 'onBeforePaste', 'onBlur', 'onChange', 'onClearUndos', 'onClick', 'onContextMenu', 'onCopy', 'onCut', 'onDblclick', 'onDeactivate', 'onDirty', 'onDrag', 'onDragDrop', 'onDragEnd', 'onDragGesture', 'onDragOver', 'onDrop', 'onExecCommand', 'onFocus', 'onFocusIn', 'onFocusOut', 'onGetContent', 'onHide', 'onInit', 'onKeyDown', 'onKeyPress', 'onKeyUp', 'onLoadContent', 'onMouseDown', 'onMouseEnter', 'onMouseLeave', 'onMouseMove', 'onMouseOut', 'onMouseOver', 'onMouseUp', 'onNodeChange', 'onObjectResizeStart', 'onObjectResized', 'onObjectSelected', 'onPaste', 'onPostProcess', 'onPostRender', 'onPreProcess', 'onProgressState', 'onRedo', 'onRemove', 'onReset', 'onSaveContent', 'onSelectionChange', 'onSetAttrib', 'onSetContent', 'onShow', 'onSubmit', 'onUndo', 'onVisualAid'];
      /**
       * Copyright (c) 2017-present, Ephox, Inc.
       *
       * This source code is licensed under the Apache 2 license found in the
       * LICENSE file in the root directory of this source tree.
       *
       */

      var bindHandlers = function bindHandlers(ctx, editor) {
        var allowedEvents = getValidEvents(ctx);
        allowedEvents.forEach(function (eventName) {
          var eventEmitter = ctx[eventName];
          editor.on(eventName.substring(2), function (event) {
            return ctx.ngZone.run(function () {
              return eventEmitter.emit({
                event: event,
                editor: editor
              });
            });
          });
        });
      };

      var ɵ0$1 = bindHandlers;

      var getValidEvents = function getValidEvents(ctx) {
        var ignoredEvents = parseStringProperty(ctx.ignoreEvents, []);
        var allowedEvents = parseStringProperty(ctx.allowedEvents, validEvents).filter(function (event) {
          return validEvents.includes(event) && !ignoredEvents.includes(event);
        });
        return allowedEvents;
      };

      var ɵ1 = getValidEvents;

      var parseStringProperty = function parseStringProperty(property, defaultValue) {
        if (typeof property === 'string') {
          return property.split(',').map(function (value) {
            return value.trim();
          });
        }

        if (Array.isArray(property)) {
          return property;
        }

        return defaultValue;
      };

      var ɵ2 = parseStringProperty;
      var unique = 0;

      var uuid = function uuid(prefix) {
        var date = new Date();
        var time = date.getTime();
        var random = Math.floor(Math.random() * 1000000000);
        unique++;
        return prefix + '_' + random + unique + String(time);
      };

      var ɵ3 = uuid;

      var isTextarea = function isTextarea(element) {
        return typeof element !== 'undefined' && element.tagName.toLowerCase() === 'textarea';
      };

      var ɵ4 = isTextarea;

      var normalizePluginArray = function normalizePluginArray(plugins) {
        if (typeof plugins === 'undefined' || plugins === '') {
          return [];
        }

        return Array.isArray(plugins) ? plugins : plugins.split(' ');
      };

      var ɵ5 = normalizePluginArray;

      var mergePlugins = function mergePlugins(initPlugins, inputPlugins) {
        return normalizePluginArray(initPlugins).concat(normalizePluginArray(inputPlugins));
      };

      var ɵ6 = mergePlugins; // eslint-disable-next-line @typescript-eslint/no-empty-function

      var noop = function noop() {};

      var ɵ7 = noop;

      var isNullOrUndefined = function isNullOrUndefined(value) {
        return value === null || value === undefined;
      };

      var ɵ8 = isNullOrUndefined;
      /**
       * Copyright (c) 2017-present, Ephox, Inc.
       *
       * This source code is licensed under the Apache 2 license found in the
       * LICENSE file in the root directory of this source tree.
       *
       */

      var createState = function createState() {
        return {
          listeners: [],
          scriptId: uuid('tiny-script'),
          scriptLoaded: false
        };
      };

      var ɵ0$2 = createState;

      var CreateScriptLoader = function CreateScriptLoader() {
        var state = createState();

        var injectScriptTag = function injectScriptTag(scriptId, doc, url, callback) {
          var scriptTag = doc.createElement('script');
          scriptTag.referrerPolicy = 'origin';
          scriptTag.type = 'application/javascript';
          scriptTag.id = scriptId;
          scriptTag.src = url;

          var handler = function handler() {
            scriptTag.removeEventListener('load', handler);
            callback();
          };

          scriptTag.addEventListener('load', handler);

          if (doc.head) {
            doc.head.appendChild(scriptTag);
          }
        };

        var load = function load(doc, url, callback) {
          if (state.scriptLoaded) {
            callback();
          } else {
            state.listeners.push(callback);

            if (!doc.getElementById(state.scriptId)) {
              injectScriptTag(state.scriptId, doc, url, function () {
                state.listeners.forEach(function (fn) {
                  return fn();
                });
                state.scriptLoaded = true;
              });
            }
          }
        }; // Only to be used by tests.


        var reinitialize = function reinitialize() {
          state = createState();
        };

        return {
          load: load,
          reinitialize: reinitialize
        };
      };

      var ɵ1$1 = CreateScriptLoader;
      var ScriptLoader = CreateScriptLoader();
      /* eslint-disable @typescript-eslint/no-parameter-properties */

      var TINYMCE_SCRIPT_SRC = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('TINYMCE_SCRIPT_SRC');
      var EDITOR_COMPONENT_VALUE_ACCESSOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return EditorComponent;
        }),
        multi: true
      };

      var EditorComponent = /*#__PURE__*/function (_Events) {
        _inherits(EditorComponent, _Events);

        var _super = _createSuper(EditorComponent);

        function EditorComponent(elementRef, ngZone, platformId, tinymceScriptSrc) {
          var _this;

          _classCallCheck(this, EditorComponent);

          _this = _super.call(this);
          _this.platformId = platformId;
          _this.tinymceScriptSrc = tinymceScriptSrc;
          _this.cloudChannel = '5';
          _this.apiKey = 'no-api-key';
          _this.id = '';
          _this.modelEvents = 'change input undo redo';
          _this.onTouchedCallback = noop;
          _this._elementRef = elementRef;
          _this.ngZone = ngZone;
          _this.initialise = _this.initialise.bind(_assertThisInitialized(_this));
          return _this;
        }

        _createClass(EditorComponent, [{
          key: "disabled",
          get: function get() {
            return this._disabled;
          },
          set: function set(val) {
            this._disabled = val;

            if (this._editor && this._editor.initialized) {
              this._editor.setMode(val ? 'readonly' : 'design');
            }
          }
        }, {
          key: "editor",
          get: function get() {
            return this._editor;
          }
        }, {
          key: "writeValue",
          value: function writeValue(value) {
            if (this._editor && this._editor.initialized) {
              this._editor.setContent(isNullOrUndefined(value) ? '' : value);
            } else {
              this.initialValue = value === null ? undefined : value;
            }
          }
        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this.onChangeCallback = fn;
          }
        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onTouchedCallback = fn;
          }
        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            if (this._editor) {
              this._editor.setMode(isDisabled ? 'readonly' : 'design');
            } else if (isDisabled) {
              this.init = Object.assign(Object.assign({}, this.init), {
                readonly: true
              });
            }
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _a;

            if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
              this.id = this.id || uuid('tiny-angular');
              this.inline = this.inline !== undefined ? this.inline !== false : !!((_a = this.init) === null || _a === void 0 ? void 0 : _a.inline);
              this.createElement();

              if (getTinymce() !== null) {
                this.initialise();
              } else if (this._element && this._element.ownerDocument) {
                ScriptLoader.load(this._element.ownerDocument, this.getScriptSrc(), this.initialise.bind(this));
              }
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (getTinymce() !== null) {
              getTinymce().remove(this._editor);
            }
          }
        }, {
          key: "createElement",
          value: function createElement() {
            var tagName = typeof this.tagName === 'string' ? this.tagName : 'div';
            this._element = document.createElement(this.inline ? tagName : 'textarea');

            if (this._element) {
              this._element.id = this.id;

              if (isTextarea(this._element)) {
                this._element.style.visibility = 'hidden';
              }

              this._elementRef.nativeElement.appendChild(this._element);
            }
          }
        }, {
          key: "initialise",
          value: function initialise() {
            var _this2 = this;

            var finalInit = Object.assign(Object.assign({}, this.init), {
              target: this._element,
              inline: this.inline,
              readonly: this.disabled,
              plugins: mergePlugins(this.init && this.init.plugins, this.plugins),
              toolbar: this.toolbar || this.init && this.init.toolbar,
              setup: function setup(editor) {
                _this2._editor = editor;
                editor.on('init', function (_e) {
                  _this2.initEditor(editor);
                });
                bindHandlers(_this2, editor);

                if (_this2.init && typeof _this2.init.setup === 'function') {
                  _this2.init.setup(editor);
                }
              }
            });

            if (isTextarea(this._element)) {
              this._element.style.visibility = '';
            }

            this.ngZone.runOutsideAngular(function () {
              getTinymce().init(finalInit);
            });
          }
        }, {
          key: "getScriptSrc",
          value: function getScriptSrc() {
            return isNullOrUndefined(this.tinymceScriptSrc) ? "https://cdn.tiny.cloud/1/".concat(this.apiKey, "/tinymce/").concat(this.cloudChannel, "/tinymce.min.js") : this.tinymceScriptSrc;
          }
        }, {
          key: "initEditor",
          value: function initEditor(editor) {
            var _this3 = this;

            editor.on('blur', function () {
              return _this3.ngZone.run(function () {
                return _this3.onTouchedCallback();
              });
            });
            editor.on(this.modelEvents, function () {
              return _this3.ngZone.run(function () {
                return _this3.emitOnChange(editor);
              });
            });

            if (typeof this.initialValue === 'string') {
              this.ngZone.run(function () {
                editor.setContent(_this3.initialValue);

                if (editor.getContent() !== _this3.initialValue) {
                  _this3.emitOnChange(editor);
                }

                if (_this3.onInitNgModel !== undefined) {
                  _this3.onInitNgModel.emit(editor);
                }
              });
            }
          }
        }, {
          key: "emitOnChange",
          value: function emitOnChange(editor) {
            if (this.onChangeCallback) {
              this.onChangeCallback(editor.getContent({
                format: this.outputFormat
              }));
            }
          }
        }]);

        return EditorComponent;
      }(Events);

      EditorComponent.ɵfac = function EditorComponent_Factory(t) {
        return new (t || EditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TINYMCE_SCRIPT_SRC, 8));
      };

      EditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EditorComponent,
        selectors: [["editor"]],
        inputs: {
          cloudChannel: "cloudChannel",
          apiKey: "apiKey",
          id: "id",
          modelEvents: "modelEvents",
          disabled: "disabled",
          initialValue: "initialValue",
          init: "init",
          inline: "inline",
          outputFormat: "outputFormat",
          tagName: "tagName",
          plugins: "plugins",
          toolbar: "toolbar",
          allowedEvents: "allowedEvents",
          ignoreEvents: "ignoreEvents"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([EDITOR_COMPONENT_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 1,
        vars: 0,
        template: function EditorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EditorComponent_ng_template_0_Template, 0, 0, "ng-template");
          }
        },
        styles: ["[_nghost-%COMP%] { display: block; }"]
      });

      EditorComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [TINYMCE_SCRIPT_SRC]
          }]
        }];
      };

      EditorComponent.propDecorators = {
        cloudChannel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        apiKey: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        init: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        initialValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        outputFormat: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        inline: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        tagName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        plugins: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        toolbar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        modelEvents: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        allowedEvents: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        ignoreEvents: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditorComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'editor',
            template: '<ng-template></ng-template>',
            providers: [EDITOR_COMPONENT_VALUE_ACCESSOR],
            styles: [':host { display: block; }']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }, {
            type: Object,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [TINYMCE_SCRIPT_SRC]
            }]
          }];
        }, {
          cloudChannel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          apiKey: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          modelEvents: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          initialValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          init: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          inline: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          outputFormat: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          tagName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          plugins: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          toolbar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          allowedEvents: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          ignoreEvents: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      var EditorModule = function EditorModule() {
        _classCallCheck(this, EditorModule);
      };

      EditorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: EditorModule
      });
      EditorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function EditorModule_Factory(t) {
          return new (t || EditorModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EditorModule, {
          declarations: function declarations() {
            return [EditorComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]];
          },
          exports: function exports() {
            return [EditorComponent];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditorModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
            declarations: [EditorComponent],
            exports: [EditorComponent]
          }]
        }], null, null);
      })();
      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=tinymce-tinymce-angular.js.map

      /***/

    },

    /***/
    "ul/j":
    /*!*******************************************!*\
      !*** ./src/app/note/notes-ser.service.ts ***!
      \*******************************************/

    /*! exports provided: NotesSerService */

    /***/
    function ulJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotesSerService", function () {
        return NotesSerService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _note_m_note_m_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./note-m/note-m.module */
      "GKIv");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var NotesSerService = /*#__PURE__*/function () {
        function NotesSerService() {
          _classCallCheck(this, NotesSerService);

          this.note = [new _note_m_note_m_module__WEBPACK_IMPORTED_MODULE_1__["NoteMModule"]('ddd', 'ddd0')];
          this.taskChange = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        }

        _createClass(NotesSerService, [{
          key: "addNote",
          value: function addNote(note) {
            this.note.push(note);
            this.taskChange.next(this.note.slice());
          }
        }, {
          key: "get",
          value: function get() {
            return this.note.slice();
          }
        }, {
          key: "getByIndex",
          value: function getByIndex(index) {
            console.log(this.note[index]);
            return this.note[index];
          }
        }, {
          key: "getLength",
          value: function getLength() {
            return this.note.length;
          }
        }, {
          key: "update",
          value: function update(index, newOne) {
            this.note[index] = newOne;
            this.taskChange.next(this.note.slice());
          }
        }, {
          key: "delete",
          value: function _delete(index) {
            this.note.splice(index, 1);
            this.taskChange.next(this.note.slice());
          }
        }]);

        return NotesSerService;
      }();

      NotesSerService.ɵfac = function NotesSerService_Factory(t) {
        return new (t || NotesSerService)();
      };

      NotesSerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: NotesSerService,
        factory: NotesSerService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "zrK+":
    /*!*****************************************************!*\
      !*** ./src/app/note/add-note/add-note.component.ts ***!
      \*****************************************************/

    /*! exports provided: AddNoteComponent */

    /***/
    function zrK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddNoteComponent", function () {
        return AddNoteComponent;
      });
      /* harmony import */


      var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/keycodes */
      "FtGj");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _notes_ser_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../notes-ser.service */
      "ul/j");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/divider */
      "f0Cb");
      /* harmony import */


      var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @tinymce/tinymce-angular */
      "fB2i");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");

      var _c0 = ["note"];

      function AddNoteComponent_div_1_div_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "more_vert");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-menu", null, 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddNoteComponent_div_1_div_9_Template_button_click_12_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);

            var i_r4 = restoredCtx.index;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r6.edit(i_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddNoteComponent_div_1_div_9_Template_button_click_17_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);

            var i_r4 = restoredCtx.index;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r8["delete"](i_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var note_r3 = ctx.$implicit;

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](note_r3.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", note_r3.description, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        }
      }

      function AddNoteComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " sticky_note_2 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " FirstNoteBook ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, AddNoteComponent_div_1_div_9_Template, 24, 3, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.number, " notes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.notes);
        }
      }

      function AddNoteComponent_p_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddNoteComponent_p_8_Template_p_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r9.show($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " sticky_note_2 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " first note book ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      var _c1 = function _c1() {
        return [false, "file edit view insert format tools tc"];
      };

      var _c2 = "advlist autolink lists link image charmap print preview anchor";
      var _c3 = "insertdatetime media table paste imagetools wordcount";

      var _c4 = function _c4() {
        return ["advlist autolink lists link image charmap print", "preview anchor searchreplace visualblocks code", "fullscreen insertdatetime media table paste", "help wordcount", _c2, "searchreplace visualblocks code fullscreen", _c3, "paste tinycomments", "fullscreen", "fullpage"];
      };

      var _c5 = function _c5() {
        return {
          title: "My page 1",
          value: "https://www.tiny.cloud"
        };
      };

      var _c6 = function _c6() {
        return {
          title: "My page 2",
          value: "http://www.moxiecode.com"
        };
      };

      var _c7 = function _c7(a0, a1) {
        return [a0, a1];
      };

      var _c8 = function _c8() {
        return {
          title: "None",
          value: ""
        };
      };

      var _c9 = function _c9() {
        return {
          title: "Some class",
          value: "class-name"
        };
      };

      var _c10 = "insertfile undo redo | styleselect | bold italic |\n     alignleft aligncenter alignright alignjustify |\n      bullist numlist outdent indent | link image|\n      pageembed code preview|\n      bold italic underline | addcomment showcomments|\n      fullscreen|fullpage|mysidebar";

      var _c11 = function _c11() {
        return [_c10];
      };

      var _c12 = "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }";

      var _c13 = function _c13(a3, a4, a8, a9, a11) {
        return {
          image_advtab: true,
          height: 406,
          overflow: "hidden",
          menubar: a3,
          plugins: a4,
          tinycomments_mode: "embedded",
          tinycomments_author: "Author",
          content_style: _c12,
          image_list: a8,
          image_class_list: a9,
          toolbar_mode: "sliding",
          toolbar: a11
        };
      };

      var AddNoteComponent = /*#__PURE__*/function () {
        function AddNoteComponent(noteS, route, ActiveRouter) {
          _classCallCheck(this, AddNoteComponent);

          this.noteS = noteS;
          this.route = route;
          this.ActiveRouter = ActiveRouter;
          this.tags = [];
          this.addTags = false;
          this.tagsd = [];
          this.expended = true;
          this.editMode = false;
          this.id = -1;
          this.addOnBlur = true;
          this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["COMMA"]];
          this.fruits = [{
            name: 'Lemon'
          }, {
            name: 'Lime'
          }, {
            name: 'Apple'
          }];
        }

        _createClass(AddNoteComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.AddNote = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
              'description': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              'title': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
            });
            this.noteS.taskChange.subscribe(function (change) {
              _this4.notes = change;
            });
            this.notes = this.noteS.get();
          }
        }, {
          key: "open",
          value: function open(e) {
            console.log(e.path[8]);
            e.path[4].classList.toggle('col-md-12');
            this.expended = !this.expended;
          }
        }, {
          key: "show",
          value: function show(e) {
            e.path[4].classList.toggle('col-md-12');
            this.expended = !this.expended;
          }
        }, {
          key: "edit",
          value: function edit(i) {
            if (i != -1) {
              this.id = i;
              this.editMode = true;
              this.note = this.noteS.getByIndex(i);
              this.AddNote = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                'description': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.editMode ? this.note.description : '', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                'title': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.editMode ? this.note.title : '', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                'tags': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
              });
            }
          }
        }, {
          key: "formSubmitted",
          value: function formSubmitted() {
            if (this.editMode) {
              this.noteS.update(this.id, this.AddNote.value);
              this.tags = [];
              this.AddNote.reset();
              this.editMode = false;
            } else {
              if (this.AddNote.value === '' || !this.AddNote.valid) {
                return;
              } else {
                this.noteS.addNote(this.AddNote.value);
                this.tags = [];
                this.AddNote.reset();
              }
            }

            this.note = this.noteAdd;
          }
        }, {
          key: "delete",
          value: function _delete(i) {
            this.noteS["delete"](i);
          }
        }, {
          key: "CANCEL",
          value: function CANCEL() {
            this.id = -1;
          }
        }, {
          key: "addTag",
          value: function addTag(f) {
            var value = '';

            if (f.value) {
              value = f.value.trim();
            }

            this.tags.push({
              name: value
            });
            f.value = '';
          }
        }, {
          key: "addN",
          value: function addN(t) {
            if (t.value.trim() !== '') {
              this.tagsd.push({
                name: t.value.trim()
              });
              t.value = '';
              this.notes.push(this.tagsd);
            }
          }
        }, {
          key: "close",
          value: function close(i) {
            this.tagsd.splice(i, 1);
          }
        }]);

        return AddNoteComponent;
      }();

      AddNoteComponent.ɵfac = function AddNoteComponent_Factory(t) {
        return new (t || AddNoteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_notes_ser_service__WEBPACK_IMPORTED_MODULE_3__["NotesSerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]));
      };

      AddNoteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: AddNoteComponent,
        selectors: [["app-add-note"]],
        viewQuery: function AddNoteComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.desctipe = _t.first);
          }
        },
        decls: 24,
        vars: 23,
        consts: [[1, "row"], ["class", "col-md-4 col-12 left-note", 4, "ngIf"], [1, "right-note", "col-md-8", "col-12"], [1, "note_add"], [1, "header"], [1, "left"], [1, "material-icons", "expended", 3, "click"], ["mat-raised-button", "", "matTooltip", "go to note book", "aria-label", "Button that displays a tooltip when focused or hovered over", 3, "click", 4, "ngIf"], [1, "right"], [3, "formGroup", "ngSubmit"], [1, "title"], ["type", "text", "placeholder", "title", "formControlName", "title", 2, "outline", "none"], [1, "typing"], ["formControlName", "description", "apiKey", "wmravpkfqk1beid92lyt6ptbs5qgko9fk9kfvf0rn3bzfp4o", 3, "init"], [1, "note-right-footer"], [1, "submit-form"], [1, "example-button-row"], ["mat-button", "", "type", "reset", "color", "accent"], ["mat-button", "", "type", "submit", "color", "basic", 1, "mr-2"], [1, "col-md-4", "col-12", "left-note"], [1, "header-left"], [1, "material-icons"], [2, "display", "flex", "justify-content", "space-between"], [1, "count"], ["class", "wrapper", 4, "ngFor", "ngForOf"], [1, "wrapper"], [1, "noteContent", "mb-2"], [1, "note-content-header"], [1, "note-content-title", "col-md-9", 2, "margin", "auto", "font-size", "15px"], [1, "menue", "col-md-3", 2, "text-align", "end"], ["mat-icon-button", "", "aria-label", "Example icon-button with a menu", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], [1, "note_content_description"], [3, "innerHtml"], ["mat-raised-button", "", "matTooltip", "go to note book", "aria-label", "Button that displays a tooltip when focused or hovered over", 3, "click"], [1, "material-icons", "note-icon"]],
        template: function AddNoteComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AddNoteComponent_div_1_Template, 10, 2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddNoteComponent_Template_span_click_6_listener($event) {
              return ctx.open($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " close_fullscreen ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, AddNoteComponent_p_8_Template, 4, 0, "p", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "form", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function AddNoteComponent_Template_form_ngSubmit_11_listener() {
              return ctx.formSubmitted();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "editor", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "reset");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "save");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.expended);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.expended);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.AddNote);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("init", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction5"](17, _c13, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](5, _c4), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](8, _c7, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c5), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](7, _c6)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](13, _c7, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](11, _c8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](12, _c9)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](16, _c11)));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDivider"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_7__["EditorComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuItem"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltip"]],
        styles: [".header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.header[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 10px;\n  padding: 5px;\n}\n.header[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .expended[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  cursor: pointer;\n  border-right: 1px solid #ddd;\n  padding-right: 15px;\n}\n.header[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .expended[_ngcontent-%COMP%]:hover {\n  color: green;\n}\n.header[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .note-icon[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.header[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:hover {\n  border-bottom: 1px solid #ddd;\n  cursor: pointer;\n}\n.header-left[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow: auto;\n}\n.title[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  width: 100%;\n  font-size: 32px;\n}\n.typing[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 725px;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  resize: none;\n  margin-top: 2px;\n}\n.note-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  border-top: 1px solid;\n  padding: 4px;\n}\n.left-note[_ngcontent-%COMP%] {\n  border-right: 1px solid;\n}\n.notesContent[_ngcontent-%COMP%] {\n  padding: 9px;\n  box-sizing: border-box;\n  width: 100%;\n  height: 110px;\n  border: 1px solid #ddd;\n  cursor: pointer;\n  margin-top: 7px;\n}\n.notesContent[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.note-wrapper[_ngcontent-%COMP%] {\n  height: auto;\n  overflow: hidden !important;\n  max-height: 100vh;\n  padding: 19px;\n}\n.notesContent[_ngcontent-%COMP%]:hover {\n  background: floralwhite;\n}\n.right[_ngcontent-%COMP%] {\n  left: -400px !important;\n}\n.tox.tox-tinymce[_ngcontent-%COMP%] {\n  visibility: hidden im !important;\n}\nspan.material-icons.add-icon[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  border: 1px solid;\n  margin-bottom: 6%;\n  border-radius: 30%;\n  background: darkseagreen;\n  color: #fff;\n  cursor: pointer;\n  font-size: 22px;\n  padding: 3px;\n  margin-top: -7px;\n  height: 30px;\n}\n.note-content-header[_ngcontent-%COMP%] {\n  \n  background: #e9e9e9;\n  padding: 2px;\n  border: 1px solid #ddd;\n  border-top-right-radius: 10px;\n  border-top-left-radius: 10px;\n}\n.note_content_description[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  background: #fff;\n  padding: 10px;\n}\n.right-note[_ngcontent-%COMP%] {\n  padding: 11px;\n  border: 1px solid #ddd;\n  background: #ffffff8f;\n}\n.note-right-footer[_ngcontent-%COMP%] {\n  padding: 4px;\n  \n  text-align: end;\n}\n.example-chip-list[_ngcontent-%COMP%] {\n  width: 100%;\n}\np.tag_content[_ngcontent-%COMP%] {\n  width: 163px;\n  display: flex;\n  padding: 9px 7px;\n  margin: 10px;\n  background: #f5e6e6;\n  text-align: end;\n  border-radius: 10px;\n}\np.tag_content[_ngcontent-%COMP%]   .tag_icon[_ngcontent-%COMP%] {\n  width: 49%;\n  text-align: end;\n  display: none;\n  cursor: pointer;\n}\np.tag_content[_ngcontent-%COMP%]:hover   .tag_icon[_ngcontent-%COMP%] {\n  display: block;\n}\n.addTAG_text[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: flex;\n}\n.addTAG_text[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: flex;\n  text-decoration: underline;\n  color: #8686b1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhZGQtbm90ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQUNKO0FBQUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFFSjtBQURJO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtBQUdSO0FBRkk7RUFDSSxZQUFBO0FBSVI7QUFFQTtFQUNBLGVBQUE7QUFBQTtBQUdBO0VBQ0ksNkJBQUE7RUFDQSxlQUFBO0FBREo7QUFLQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0FBRko7QUFJQTtFQUNJLDBCQUFBO0VBQ0EsV0FBQTtFQUVBLGVBQUE7QUFGSjtBQU1JO0VBQ0ksV0FBQTtFQUNKLGFBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUhKO0FBTUE7RUFDSSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FBSEo7QUFLQTtFQUNJLHVCQUFBO0FBRko7QUFJQTtFQUNJLFlBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQURKO0FBR0E7RUFDSSxlQUFBO0FBREo7QUFLQTtFQUNJLFlBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQUZKO0FBSUE7RUFDSSx1QkFBQTtBQURKO0FBR0k7RUFDSSx1QkFBQTtBQUFSO0FBRUk7RUFDSSxnQ0FBQTtBQUNSO0FBQ0k7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0osWUFBQTtBQUVKO0FBQUk7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ1EsWUFBQTtFQUNSLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtBQUdSO0FBREk7RUFDSSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQUlSO0FBRkk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBQUtSO0FBSEk7RUFBbUIsWUFBQTtFQUNuQixzQkFBQTtFQUNBLGVBQUE7QUFPSjtBQU5JO0VBQ0ksV0FBQTtBQVNSO0FBUE07RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBVVI7QUFSUTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFVUjtBQVBRO0VBQ0ksY0FBQTtBQVNaO0FBSE07RUFDSSxlQUFBO0VBQ0EsYUFBQTtBQU1WO0FBSk07RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtBQU9SIiwiZmlsZSI6ImFkZC1ub3RlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbi5sZWZ0e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIC5leHBlbmRlZHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgICY6aG92ZXJ7XHJcbiAgICAgICAgY29sb3I6IGdyZWVuO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG59XHJcblxyXG4ubm90ZS1pY29ue1xyXG5mb250LXNpemU6MTVweFxyXG59XHJcblxyXG5wOmhvdmVye1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxufVxyXG59XHJcbi5oZWFkZXItbGVmdCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG4udGl0bGUgaW5wdXR7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLy8gYm9yZGVyOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG59XHJcblxyXG4udHlwaW5ne1xyXG4gICAgdGV4dGFyZWF7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDcyNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgcmVzaXplOiBub25lO1xyXG4gICAgbWFyZ2luLXRvcDogMnB4O1xyXG59XHJcbn1cclxuLm5vdGUtd3JhcHBlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQ7XHJcbiAgICBwYWRkaW5nOiA0cHg7XHJcbn1cclxuLmxlZnQtbm90ZXtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkO1xyXG59XHJcbi5ub3Rlc0NvbnRlbnQge1xyXG4gICAgcGFkZGluZzogOXB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA3cHg7XHJcblxyXG5oMXtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxufVxyXG4ubm90ZS13cmFwcGVyIHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcclxuICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgcGFkZGluZzogMTlweDtcclxufVxyXG4ubm90ZXNDb250ZW50OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IGZsb3JhbHdoaXRlO1xyXG4gICAgfVxyXG4gICAgLnJpZ2h0e1xyXG4gICAgICAgIGxlZnQ6IC00MDBweCAgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC50b3gudG94LXRpbnltY2V7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuIGltICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBzcGFuLm1hdGVyaWFsLWljb25zLmFkZC1pY29uIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA2JTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogZGFya3NlYWdyZWVuO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgcGFkZGluZzogM3B4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC03cHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7fVxyXG5cclxuICAgIC5ub3RlLWNvbnRlbnQtaGVhZGVyIHtcclxuICAgICAgICAvKiB3aWR0aDogMzAwcHg7ICovXHJcbiAgICAgICAgYmFja2dyb3VuZDogI2U5ZTllOTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDJweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAubm90ZV9jb250ZW50X2Rlc2NyaXB0aW9ue1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLnJpZ2h0LW5vdGV7XHJcbiAgICAgICAgcGFkZGluZzogMTFweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY4ZjtcclxuICAgIH1cclxuICAgIC5ub3RlLXJpZ2h0LWZvb3RlcntwYWRkaW5nOiA0cHg7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiAjZGRkOyAqL1xyXG4gICAgdGV4dC1hbGlnbjogZW5kO31cclxuICAgIC5leGFtcGxlLWNoaXAtbGlzdCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgICAgcC50YWdfY29udGVudHtcclxuICAgICAgICB3aWR0aDogMTYzcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBwYWRkaW5nOiA5cHggN3B4O1xyXG4gICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjVlNmU2O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgXHJcbiAgICAgICAgLnRhZ19pY29ue1xyXG4gICAgICAgIHdpZHRoOiA0OSU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gICAgJjpob3ZlcntcclxuICAgICAgICAudGFnX2ljb257XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG4gICAgICAuYWRkVEFHX3RleHR7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICB9XHJcbiAgICAgIC5hZGRUQUdfdGV4dHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICBjb2xvcjogIzg2ODZiMTtcclxuICAgICAgfSJdfQ== */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=note-note-module-es5.js.map