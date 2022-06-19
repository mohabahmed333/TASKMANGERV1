(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
    /***/
    "9vUh":
    /*!****************************************!*\
      !*** ./src/app/home/home.component.ts ***!
      \****************************************/

    /*! exports provided: HomeComponent */

    /***/
    function vUh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! jquery */
      "EVdn");
      /* harmony import */


      var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent() {
          _classCallCheck(this, HomeComponent);
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            jquery__WEBPACK_IMPORTED_MODULE_0__(function () {
              jquery__WEBPACK_IMPORTED_MODULE_0__('.carousel-item').eq(0).addClass('active');
              var total = jquery__WEBPACK_IMPORTED_MODULE_0__('.carousel-item').length;
              var current = 0;
              jquery__WEBPACK_IMPORTED_MODULE_0__('#moveRight').on('click', function () {
                var next = current;
                current = current + 1;
                setSlide(next, current);
              });
              jquery__WEBPACK_IMPORTED_MODULE_0__('#moveLeft').on('click', function () {
                var prev = current;
                current = current - 1;
                setSlide(prev, current);
              });

              function setSlide(prev, next) {
                var slide = current;

                if (next > total - 1) {
                  slide = 0;
                  current = 0;
                }

                if (next < 0) {
                  slide = total - 1;
                  current = total - 1;
                }

                jquery__WEBPACK_IMPORTED_MODULE_0__('.carousel-item').eq(prev).removeClass('active');
                jquery__WEBPACK_IMPORTED_MODULE_0__('.carousel-item').eq(slide).addClass('active');
                setTimeout(function () {}, 800);
                console.log('current ' + current);
                console.log('prev ' + prev);
              }
            });
          }
        }]);

        return HomeComponent;
      }();

      HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)();
      };

      HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        decls: 37,
        vars: 0,
        consts: [["name", "viewport", "content", "width=device-width, initial-scale=1"], [1, "carousel"], [1, "carousel__nav"], ["id", "moveLeft", 1, "carousel__arrow"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", 1, "carousel__icon"], ["d", "M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"], ["id", "moveRight", 1, "carousel__arrow"], ["d", "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"], [1, "carousel-item", "carousel-item--1"], [1, "carousel-item__image"], [1, "carousel-item__info"], [1, "carousel-item__container"], [1, "carousel-item__subtitle"], [1, "carousel-item__title"], [1, "carousel-item__description"], ["mat-stroked-button", "", "color", "primary"], [1, "carousel-item", "carousel-item--2"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "head");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "FlexBox Exercise #3 - Image carousel / Responsive ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "meta", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "body");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "svg", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "path", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "svg", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "path", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "h2", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " progressive TaskMangement system ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "h1", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Task App");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "you can add your tasks and make a team and set missions and more ather things...");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "join us");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "h2", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "have a nice note tool ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "h1", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Note Tool");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "p", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "add your notes and important things with a many helpfull tools");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "join us");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]],
        styles: ["@import url(\"https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700,700i,900,900i\");\n@import url(\"https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i\");\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  display: -webkit-flex;\n  justify-content: center;\n  -webkit-justify-content: center;\n  align-items: center;\n  -webkit-align-items: center;\n}\nbody[_ngcontent-%COMP%] {\n  background-color: #eaeaea;\n}\n.carousel[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  overflow: hidden;\n  position: relative;\n}\n.carousel-item[_ngcontent-%COMP%] {\n  visibility: visible;\n  display: flex;\n  width: 100%;\n  height: 100%;\n  align-items: center;\n  justify-content: flex-end;\n  -webkit-align-items: center;\n  -webkit-justify-content: flex-end;\n  position: relative;\n  background-color: #fff;\n  flex-shrink: 0;\n  -webkit-flex-shrink: 0;\n  position: absolute;\n  z-index: 0;\n  transition: 0.6s all linear;\n}\n.carousel-item__info[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  display: -webkit-flex;\n  -webkit-justify-content: center;\n  order: 1;\n  left: 0;\n  margin: auto;\n  padding: 0 40px;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  height: 100%;\n  width: 100%;\n  background: transparent;\n}\n.carousel-item__image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  order: 2;\n  align-self: flex-end;\n  flex-basis: 60%;\n  -webkit-order: 2;\n  -webkit-align-self: flex-end;\n  -webkit-flex-basis: 60%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n  transform: translateX(100%);\n  transition: 0.6s all ease-in-out;\n}\n.carousel-item__subtitle[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\", sans-serif;\n  letter-spacing: 3px;\n  font-size: 10px;\n  text-transform: uppercase;\n  margin: 0;\n  color: #7E7E7E;\n  font-weight: 700;\n  transform: translateY(25%);\n  opacity: 0;\n  visibility: hidden;\n  transition: 0.4s all ease-in-out;\n}\n.carousel-item__title[_ngcontent-%COMP%] {\n  margin: 15px 0 0 0;\n  font-family: \"Playfair Display\", serif;\n  font-size: 44px;\n  line-height: 45px;\n  letter-spacing: 3px;\n  font-weight: 700;\n  color: #2C2C2C;\n  transform: translateY(25%);\n  opacity: 0;\n  visibility: hidden;\n  transition: 0.6s all ease-in-out;\n}\n.carousel-item__description[_ngcontent-%COMP%] {\n  transform: translateY(25%);\n  opacity: 0;\n  visibility: hidden;\n  transition: 0.6s all ease-in-out;\n  margin-top: 35px;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 13px;\n  color: #7e7e7e;\n  line-height: 22px;\n  margin-bottom: 35px;\n}\n.carousel-item--1[_ngcontent-%COMP%]   .carousel-item__image[_ngcontent-%COMP%] {\n  background-image: url('task_app.jpg');\n}\n.carousel-item--2[_ngcontent-%COMP%]   .carousel-item__image[_ngcontent-%COMP%] {\n  background-image: url('note-app.jpg');\n}\n.carousel-item__btn[_ngcontent-%COMP%] {\n  width: 35%;\n  color: #2C2C2C;\n  font-family: \"Open Sans\", sans-serif;\n  letter-spacing: 3px;\n  font-size: 11px;\n  text-transform: uppercase;\n  margin: 0;\n  width: 35%;\n  font-weight: 700;\n  text-decoration: none;\n  transform: translateY(25%);\n  opacity: 0;\n  visibility: hidden;\n  transition: 0.6s all ease-in-out;\n}\n.carousel__nav[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  z-index: 2;\n  background-color: #fff;\n  bottom: 0;\n}\n.carousel__icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: middle;\n  width: 16px;\n  fill: #5d5d5d;\n}\n.carousel__arrow[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: inline-block;\n  padding: 11px 15px;\n  position: relative;\n}\n.carousel__arrow[_ngcontent-%COMP%]:nth-child(1):after {\n  content: \"\";\n  right: -3px;\n  position: absolute;\n  width: 1px;\n  background-color: #b0b0b0;\n  height: 14px;\n  top: 50%;\n  margin-top: -7px;\n}\n.active[_ngcontent-%COMP%] {\n  z-index: 1;\n  display: flex;\n  visibility: visible;\n}\n.active[_ngcontent-%COMP%]   .carousel-item__subtitle[_ngcontent-%COMP%], .active[_ngcontent-%COMP%]   .carousel-item__title[_ngcontent-%COMP%], .active[_ngcontent-%COMP%]   .carousel-item__description[_ngcontent-%COMP%], .active[_ngcontent-%COMP%]   .carousel-item__btn[_ngcontent-%COMP%] {\n  transform: translateY(0);\n  opacity: 1;\n  transition: 0.6s all ease-in-out;\n  visibility: visible;\n}\n.active[_ngcontent-%COMP%]   .carousel-item__image[_ngcontent-%COMP%] {\n  transition: 0.6s all ease-in-out;\n  transform: translateX(0);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsa0dBQUE7QUFFQSw2R0FBQTtBQUdSO0VBQ0Usc0JBQUE7QUFGRjtBQUtBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0YsK0JBQUE7RUFDRSxtQkFBQTtFQUNGLDJCQUFBO0FBRkY7QUFLQTtFQUNJLHlCQUFBO0FBRko7QUFLQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUdBLGdCQUFBO0VBQ0Ysa0JBQUE7QUFKRjtBQU9BO0VBQ0UsbUJBQUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0UsMkJBQUE7RUFDRixpQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0Qsc0JBQUE7RUFDQyxrQkFBQTtFQUNBLFVBQUE7RUFDRiwyQkFBQTtBQUpGO0FBT0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFFRSxxQkFBQTtFQUNGLCtCQUFBO0VBR0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0FBTkY7QUFTQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUVFLGdCQUFBO0VBQ0YsNEJBQUE7RUFDQSx1QkFBQTtFQUVBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNELGtCQUFBO0VBQ0QsMkJBQUE7RUFDQSxnQ0FBQTtBQVJGO0FBV0E7RUFDSSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7QUFSSjtBQVdBO0VBQ0ksa0JBQUE7RUFDQSxzQ0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtBQVJKO0FBV0E7RUFDSSwwQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQVJKO0FBV0E7RUFDRSxxQ0FBQTtBQVJGO0FBWUE7RUFDRSxxQ0FBQTtBQVRGO0FBMEJBO0VBQ0ksVUFBQTtFQUNBLGNBQUE7RUFDQSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNGLHFCQUFBO0VBQ0ksMEJBQUE7RUFDRixVQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtBQXZCSjtBQTBCQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNGLFNBQUE7QUF2QkY7QUEwQkE7RUFDSSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNGLGFBQUE7QUF2QkY7QUEwQkE7RUFDSSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBdkJKO0FBMEJBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7QUF2Qko7QUEwQkE7RUFDRyxVQUFBO0VBQ0QsYUFBQTtFQUNBLG1CQUFBO0FBdkJGO0FBMEJBO0VBQ0ksd0JBQUE7RUFDQSxVQUFBO0VBQ0YsZ0NBQUE7RUFDRSxtQkFBQTtBQXZCSjtBQTRCQTtFQUNBLGdDQUFBO0VBQ0Esd0JBQUE7QUF6QkEiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UGxheWZhaXIrRGlzcGxheTo0MDAsNDAwaSw3MDAsNzAwaSw5MDAsOTAwaScpO1xyXG5cclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnM6MzAwLDMwMGksNDAwLDQwMGksNjAwLDYwMGksNzAwLDcwMGksODAwLDgwMGknKTtcclxuXHJcblxyXG4qIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5odG1sLCBib2R5IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VhZWFlYTtcclxufVxyXG5cclxuLmNhcm91c2VsIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC8vIG1heC13aWR0aDogOTAwcHg7XHJcbiAgICAvLyBtYXgtaGVpZ2h0OiA1NTBweDsgICBcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtaXRlbSB7XHJcbiAgdmlzaWJpbGl0eTp2aXNpYmxlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBmbGV4LXNocmluazogMDtcclxuICAgLXdlYmtpdC1mbGV4LXNocmluazogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDA7XHJcbiAgdHJhbnNpdGlvbjogMC42cyBhbGwgbGluZWFyO1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtaXRlbV9faW5mbyB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBcclxuICBvcmRlcjogMTtcclxuICBsZWZ0OiAwO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBwYWRkaW5nOiAwIDQwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMHB4O1xyXG4gIGxlZnQ6IDBweCA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtaXRlbV9faW1hZ2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvcmRlcjogMjtcclxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gICAgZmxleC1iYXNpczogNjAlO1xyXG4gIFxyXG4gICAgICAtd2Via2l0LW9yZGVyOiAyO1xyXG4gICAgLXdlYmtpdC1hbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICAgIC13ZWJraXQtZmxleC1iYXNpczogNjAlO1xyXG4gIFxyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxuICB0cmFuc2l0aW9uOiAwLjZzIGFsbCBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmNhcm91c2VsLWl0ZW1fX3N1YnRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgY29sb3I6ICM3RTdFN0U7ICAgIFxyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyNSUpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIHRyYW5zaXRpb246IDAuNHMgYWxsIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtaXRlbV9fdGl0bGUge1xyXG4gICAgbWFyZ2luOiAxNXB4IDAgMCAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdQbGF5ZmFpciBEaXNwbGF5Jywgc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDQ0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogNDVweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6ICMyQzJDMkM7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjUlKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB0cmFuc2l0aW9uOiAwLjZzIGFsbCBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmNhcm91c2VsLWl0ZW1fX2Rlc2NyaXB0aW9uIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyNSUpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIHRyYW5zaXRpb246IDAuNnMgYWxsIGVhc2UtaW4tb3V0O1xyXG4gICAgbWFyZ2luLXRvcDogMzVweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGNvbG9yOiAjN2U3ZTdlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzNXB4O1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtaXRlbS0tMSAuY2Fyb3VzZWwtaXRlbV9faW1hZ2V7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvdGFza19hcHAuanBnJyk7XHJcbn1cclxuXHJcblxyXG4uY2Fyb3VzZWwtaXRlbS0tMiAuY2Fyb3VzZWwtaXRlbV9faW1hZ2V7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvbm90ZS1hcHAuanBnJyk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gLmNhcm91c2VsLWl0ZW0tLTQgLmNhcm91c2VsLWl0ZW1fX2ltYWdle1xyXG4vLyAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvMTAwODczMi9wZXhlbHMtcGhvdG8tMTAwODczMi5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2ImaD03NTAmdz0xMjYwJyk7XHJcbi8vIH1cclxuXHJcbi8vIC5jYXJvdXNlbC1pdGVtLS01IC5jYXJvdXNlbC1pdGVtX19pbWFnZXtcclxuLy8gICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzEwMjk2MTQvcGV4ZWxzLXBob3RvLTEwMjk2MTQuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJmRwcj0yJmg9NjUwJnc9OTQwJyk7XHJcbi8vIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG4uY2Fyb3VzZWwtaXRlbV9fYnRuIHtcclxuICAgIHdpZHRoOiAzNSU7XHJcbiAgICBjb2xvcjogIzJDMkMyQztcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgd2lkdGg6IDM1JTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjUlKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB0cmFuc2l0aW9uOiAwLjZzIGFsbCBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmNhcm91c2VsX19uYXYge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3R0b206IDA7XHJcbn1cclxuXHJcbi5jYXJvdXNlbF9faWNvbiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgd2lkdGg6IDE2cHg7XHJcbiAgZmlsbDogIzVkNWQ1ZDtcclxufVxyXG5cclxuLmNhcm91c2VsX19hcnJvdyB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAxMXB4IDE1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5jYXJvdXNlbF9fYXJyb3c6bnRoLWNoaWxkKDEpOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6Jyc7XHJcbiAgICByaWdodDogLTNweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjBiMGIwO1xyXG4gICAgaGVpZ2h0OiAxNHB4O1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAtN3B4O1xyXG59XHJcblxyXG4uYWN0aXZle1xyXG4gICB6LWluZGV4OiAxO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgdmlzaWJpbGl0eTp2aXNpYmxlO1xyXG59XHJcblxyXG4uYWN0aXZlIC5jYXJvdXNlbC1pdGVtX19zdWJ0aXRsZSwgLmFjdGl2ZSAuY2Fyb3VzZWwtaXRlbV9fdGl0bGUsIC5hY3RpdmUgLmNhcm91c2VsLWl0ZW1fX2Rlc2NyaXB0aW9uLC5hY3RpdmUgLmNhcm91c2VsLWl0ZW1fX2J0bntcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgdHJhbnNpdGlvbjogMC42cyBhbGwgZWFzZS1pbi1vdXQ7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG59XHJcblxyXG5cclxuXHJcbi5hY3RpdmUgLmNhcm91c2VsLWl0ZW1fX2ltYWdleyBcclxudHJhbnNpdGlvbjogMC42cyBhbGwgZWFzZS1pbi1vdXQ7XHJcbnRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    "ct+p":
    /*!*************************************!*\
      !*** ./src/app/home/home.module.ts ***!
      \*************************************/

    /*! exports provided: HomeModule */

    /***/
    function ctP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeModule", function () {
        return HomeModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../angular-material/angular-material.module */
      "PI13");
      /* harmony import */


      var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home.component */
      "9vUh");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
      }];

      var HomeModule = function HomeModule() {
        _classCallCheck(this, HomeModule);
      };

      HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: HomeModule
      });
      HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        factory: function HomeModule_Factory(t) {
          return new (t || HomeModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes), _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_1__["AngularMaterialModule"]], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](HomeModule, {
          declarations: [_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]],
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"], _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_1__["AngularMaterialModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=home-home-module-es5.js.map