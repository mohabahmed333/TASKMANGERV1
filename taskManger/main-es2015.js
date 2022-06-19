(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+BpQ":
/*!**************************************************!*\
  !*** ./src/app/admin-nav/admin-nav.component.ts ***!
  \**************************************************/
/*! exports provided: AdminNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminNavComponent", function() { return AdminNavComponent; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _login_store_auth_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login/store/auth.actions */ "S0FY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "kt0X");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _user_page_userpage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user-page/userpage.service */ "4wLV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");















function AdminNavComponent_mat_icon_6_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-icon", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminNavComponent_mat_icon_6_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r19.slideNav(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "expand");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AdminNavComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminNavComponent_div_10_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r21.shownotification($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "notifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.notification.index);
} }
function AdminNavComponent_button_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "login");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " login ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AdminNavComponent_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminNavComponent_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r23.logOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " logout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AdminNavComponent_div_13_ul_3_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "li", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminNavComponent_div_13_ul_3_Template_li_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r26.goProfile(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "My profile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-icon", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "li", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " switch to night mode ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "svg", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "defs");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "path", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AdminNavComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminNavComponent_div_13_Template_mat_icon_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r28.showMenue(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "account_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, AdminNavComponent_div_13_ul_3_Template, 12, 0, "ul", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.menu);
} }
function AdminNavComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "note_add");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "a", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "img", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "a", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AdminNavComponent_mat_card_footer_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "mat-progress-bar", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AdminNavComponent_app_login_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-login");
} }
function AdminNavComponent_div_18_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "input", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "label", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " new ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "a", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "new task");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "i", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", task_r31.projectTitle, "");
} }
function AdminNavComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Notifications ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, AdminNavComponent_div_18_div_3_Template, 11, 1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r8.notification.task);
} }
function AdminNavComponent_div_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Looks good! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AdminNavComponent_div_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Please choose a username. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](84);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("display", !_r14.valid ? "block" : "none");
} }
function AdminNavComponent_p_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "please enter valid email");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class AdminNavComponent {
    // open:boolean;
    constructor(route, store, _snackBar, getUserPage) {
        this.route = route;
        this.store = store;
        this._snackBar = _snackBar;
        this.getUserPage = getUserPage;
        this.open_nav = false;
        this.horizontalPosition = 'center';
        this.verticalPosition = 'top';
        this.notification = {
            index: 0,
            task: []
        };
        this.menu = false;
        this.openLoginForm = false;
        this.logout = false;
        this.signIn = false;
        this.display = false;
        this.login = false;
        this.isLoading = false;
    }
    ngOnInit() {
        this.date = new Date().toDateString();
        this.store.dispatch(new _login_store_auth_actions__WEBPACK_IMPORTED_MODULE_1__["autoLog"]());
        this.subscribe = this.store.select('Tasks').subscribe(tasks => {
            this.notification.task = tasks.tasks;
            this.notification.index = tasks.tasks.length;
            console.log(this.notification);
        });
        this.store.select('Auth').subscribe(authState => {
            this.loading = authState.loading;
            this.signIn = !!authState.user;
        });
        // Just a tiny bit of JavaScript to add classnames to the HTML-element on toggle
    }
    slideNav() {
        // this.open_nav=true
        const down = document.querySelector('.down');
        down.classList.toggle('down_nav');
    }
    ngAfterViewInit() {
    }
    shownotification(e) {
        this.display = !this.display;
    }
    showMenue() {
        this.menu = !this.menu;
    }
    goProfile() {
        this.route.navigate(['./userPage']);
        this.menu = false;
    }
    logOut() {
        // this.user.user.next(null);
        this.store.dispatch(new _login_store_auth_actions__WEBPACK_IMPORTED_MODULE_1__["LogOut"]());
        this.store.select('Auth').subscribe(auth => {
            console.log(auth);
        });
    }
    showWeather() {
        this.route.navigate(['/weatherPage']);
    }
    onLoginForm(form) {
        this.store.dispatch(new _login_store_auth_actions__WEBPACK_IMPORTED_MODULE_1__["LoginStart"]({ email: form.value.email, password: form.value.password }));
        this.store.select('Auth').subscribe(authState => {
            if (authState.ErrorMessage && authState.ErrorMessage != null) {
                this._snackBar.open(authState.ErrorMessage, 'x', {
                    horizontalPosition: this.horizontalPosition,
                    verticalPosition: this.verticalPosition,
                });
            }
            else {
                this._snackBar.open('login success', 'x', {
                    horizontalPosition: this.horizontalPosition,
                    verticalPosition: this.verticalPosition,
                });
            }
        });
        let dimissTime = setTimeout(() => {
            this._snackBar.dismiss();
        }, 2000);
    }
    onSignUp(form) {
        if (!form.valid) {
            return;
        }
        const email = form.value.email;
        const password = form.value.password;
        const Username = form.value.username;
        const firstName = form.value.firstName;
        const lastName = form.value.lastName;
        const userI = { Username, firstName, lastName, email };
        this.getUserPage.userI.next(userI);
        this.store.dispatch(new _login_store_auth_actions__WEBPACK_IMPORTED_MODULE_1__["signUpStart"]({ email: email, password: password }));
    }
    show_menu() {
        jquery__WEBPACK_IMPORTED_MODULE_0__('.menu').toggle({
            display: 'block'
        });
    }
    ngOnDestroy() {
        if (this.subscribe) {
            this.subscribe.unsubscribe();
        }
    }
}
AdminNavComponent.ɵfac = function AdminNavComponent_Factory(t) { return new (t || AdminNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_user_page_userpage_service__WEBPACK_IMPORTED_MODULE_6__["getUserInfo"])); };
AdminNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AdminNavComponent, selectors: [["app-admin-nav"]], decls: 117, vars: 17, consts: [[1, "top-nav"], [1, "page-wrapper", "chiller-theme"], [1, "page-content"], [1, "down"], [1, "app-header"], [1, "app-header-left", "p"], ["id", "show-sidebar", "class", " ml-3", 3, "click", 4, "ngIf"], [1, "app-header-right"], [1, "time", 2, "display", "flex"], ["class", "notification-icon right ", 3, "click", 4, "ngIf"], ["mat-stroked-button", "", "color", "primary", "data-bs-toggle", "offcanvas", "data-bs-target", "#loginForm", "aria-controls", "offcanvasRight", 4, "ngIf"], ["mat-stroked-button", "", "color", "primary", 3, "click", 4, "ngIf"], ["class", "userIcon", "style", "position: relative q;", 4, "ngIf"], ["class", "app-sidebar", 4, "ngIf"], [4, "ngIf"], ["class", "notification-container", 4, "ngIf"], ["tabindex", "-1", "id", "loginForm", "aria-labelledby", "offcanvasRightLabel", 1, "offcanvas", "offcanvas-end"], [1, "offcanvas-header"], ["id", "offcanvasRightLabel"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "text-reset", "close_button"], [1, "offcanvas-body"], ["id", "login"], [3, "ngSubmit"], ["login", "ngForm"], ["type", "text", "ngModel", "", "name", "email", "id", "inputEmail3", "required", "", "email", "", "placeholder", "email"], ["type", "password", "required", "", "value", "Password", "placeholder", "Password", "ngModel", "", "name", "password"], ["type", "submit", "value", "Login", "data-bs-dismiss", "offcanvas", 3, "disabled"], ["data-bs-toggle", "offcanvas", "data-bs-target", "#signup", 2, "color", "rgb(73, 73, 202)", "cursor", "pointer"], [1, "btn-round"], [1, "mb-2"], [1, "facebook-before"], [1, "fontawesome-facebook"], ["disabled", "", "matTooltip", "this action not avalible right now", 1, "facebook"], [1, "twitter-before"], [1, "fontawesome-twitter"], ["disabled", "", "matTooltip", "this action not avalible right now", 1, "twitter"], [1, "fontawesome-linkedin"], ["tabindex", "-1", "id", "signup", "aria-labelledby", "offcanvasRightLabel", 1, "offcanvas", "offcanvas-end"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "text-reset"], ["signUp", "ngForm"], ["type", "text", "ngModel", "", "name", "firstname", "required", "", "id", "inputEmail3", "required", "", "email", "", "placeholder", "username"], ["firstname", "ngModel"], [1, "valid-feedback"], ["type", "text", "ngModel", "", "name", "lastname", "required", "", "id", "inputEmail3", "required", "", "email", "", "placeholder", "lastname"], ["lastname", "ngModel"], ["class", "text-success", 4, "ngIf"], ["type", "text", "ngModel", "", "name", "username", "required", "", "id", "inputEmail3", "required", "", "email", "", "placeholder", "username"], ["username", "ngModel"], ["class", "invalid-feedback", 3, "display", 4, "ngIf"], ["type", "text", "ngModel", "", "name", "city", "required", "", "id", "inputEmail3", "required", "", "email", "", "placeholder", "city"], ["city", "ngModel"], ["type", "text", "ngModel", "", "name", "email", "required", "", "id", "inputEmail3", "email", "", "required", "", "email", "", "placeholder", "email"], ["email", "ngModel"], ["class", "text-danger", 4, "ngIf"], ["type", "submit", "value", "signup", "data-bs-dismiss", "offcanvas", 3, "disabled"], ["data-bs-toggle", "offcanvas", "data-bs-toggle", "offcanvas", "data-bs-target", "#loginForm", "aria-controls", "offcanvasWithBothOptions", 2, "color", "rgb(73, 73, 202)", "cursor", "pointer"], ["matTooltip", "this action not avalible right now", 1, "mb-2"], ["disabled", "", 1, "twitter"], ["id", "show-sidebar", 1, "ml-3", 3, "click"], [1, "notification-icon", "right", 3, "click"], [1, "material-icons", "dp48"], [1, "num-count"], ["mat-stroked-button", "", "color", "primary", "data-bs-toggle", "offcanvas", "data-bs-target", "#loginForm", "aria-controls", "offcanvasRight"], ["mat-stroked-button", "", "color", "primary", 3, "click"], [1, "userIcon", 2, "position", "relative q"], [2, "margin", "auto 18px", "cursor", "pointer", 3, "click"], ["class", "list-group ", "style", "position: absolute;", 4, "ngIf"], [1, "list-group", 2, "position", "absolute"], [1, "list-group-item", "d-flex", 2, "cursor", "pointer", 3, "click"], [2, "width", "80%"], [1, "icon"], [1, "list-group-item"], ["title", "Switch Theme", 1, "mode-switch"], ["fill", "none", "stroke", "currentColor", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "width", "24", "height", "24", "viewBox", "0 0 24 24", 1, "moon"], ["d", "M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"], [1, "app-sidebar"], ["routerLink", "./tasks", "routerLinkActive", "link_activated", "routerLinkActive", "link_activated", "matTooltip", "all tasks", 1, "app-sidebar-link"], ["src", "../../assets/task-list.png", "width", "70%", "alt", ""], ["routerLink", "./note", "routerLinkActive", "link_activated", "routerLinkActive", "link_activated", "matTooltip", "note  app`", 1, "app-sidebar-link"], ["routerLink", "userTask", "routerLinkActive", "link_activated", "matTooltip", "my Tasks", 1, "app-sidebar-link"], ["src", "../../assets/tasks.png", "width", "70%", "alt", ""], ["routerLink", "/userPage", "routerLinkActive", "link_activated", "matTooltip", "profile", 1, "app-sidebar-link"], ["src", "../../assets/user.png", "width", "70%", "alt", ""], ["mode", "indeterminate"], [1, "notification-container"], [4, "ngFor", "ngForOf"], ["type", "checkbox", "id", "size_1", "value", "small", "checked", "", 1, "checkbox"], ["for", "size_1", 1, "notification", "new"], ["href", ""], [1, "material-icons", "dp48", "right"], [1, "text-success"], [1, "invalid-feedback"], [1, "text-danger"]], template: function AdminNavComponent_Template(rf, ctx) { if (rf & 1) {
        const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "main", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, AdminNavComponent_mat_icon_6_Template, 2, 0, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, AdminNavComponent_div_10_Template, 5, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, AdminNavComponent_button_11_Template, 4, 0, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, AdminNavComponent_button_12_Template, 4, 0, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, AdminNavComponent_div_13_Template, 4, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, AdminNavComponent_div_14_Template, 10, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, AdminNavComponent_mat_card_footer_15_Template, 2, 0, "mat-card-footer", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, AdminNavComponent_app_login_17_Template, 1, 0, "app-login", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, AdminNavComponent_div_18_Template, 4, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "h1", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "TaskManger");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Welcome.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, " Please login.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "form", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function AdminNavComponent_Template_form_ngSubmit_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r32); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](31); return ctx.onLoginForm(_r9); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "h3", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "signup?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "or");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Login Using Facbook");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "Login Using Twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](56, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "Login Using linkedin");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "h1", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "TaskManger");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "x");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, "Welcome.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "form", 22, 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function AdminNavComponent_Template_form_ngSubmit_70_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r32); const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](71); return ctx.onSignUp(_r10); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](74, "input", 40, 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, " Looks good! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](79, "input", 43, 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](81, AdminNavComponent_div_81_Template, 2, 0, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](83, "input", 46, 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](85, AdminNavComponent_div_85_Template, 2, 2, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](87, "input", 49, 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](90, "input", 51, 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](92, AdminNavComponent_p_92_Template, 2, 0, "p", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](94, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](96, "input", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "h3", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](98, "Already have account ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](101, "or");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "p", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](104, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](106, "signup Using Facbook");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "p", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](109, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "button", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](111, "signup Using Twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "p", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](114, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](116, "signup Using linkedin");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](31);
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](71);
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](75);
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](80);
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](84);
        const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](91);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.signIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.date, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.signIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.signIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.signIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.signIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.signIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.openLoginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.display);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !_r9.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("display", _r11.valid ? "block" : "none");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r12.touched && _r12.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r14.touched && !_r14.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !_r17.valid && _r17.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !_r10.valid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["EmailValidator"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardFooter"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__["MatProgressBar"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]], styles: ["@charset \"UTF-8\";\n@import 'https://fonts.googleapis.com/css?family=Material+Icons';\n.userIcon[_ngcontent-%COMP%] {\n  position: relative;\n}\n.userIcon[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 37px;\n  right: 3%;\n  z-index: 1000;\n}\n.userIcon[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  width: 250px;\n  height: 50px;\n}\n.userIcon[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background: #ddd;\n}\n.userIcon[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:last-child {\n  width: 15%;\n  text-align: right;\n}\n@-webkit-keyframes swing {\n  0% {\n    transform: rotate(0deg);\n  }\n  10% {\n    transform: rotate(10deg);\n  }\n  30% {\n    transform: rotate(0deg);\n  }\n  40% {\n    transform: rotate(-10deg);\n  }\n  50% {\n    transform: rotate(0deg);\n  }\n  60% {\n    transform: rotate(5deg);\n  }\n  70% {\n    transform: rotate(0deg);\n  }\n  80% {\n    transform: rotate(-5deg);\n  }\n  100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes swing {\n  0% {\n    transform: rotate(0deg);\n  }\n  10% {\n    transform: rotate(10deg);\n  }\n  30% {\n    transform: rotate(0deg);\n  }\n  40% {\n    transform: rotate(-10deg);\n  }\n  50% {\n    transform: rotate(0deg);\n  }\n  60% {\n    transform: rotate(5deg);\n  }\n  70% {\n    transform: rotate(0deg);\n  }\n  80% {\n    transform: rotate(-5deg);\n  }\n  100% {\n    transform: rotate(0deg);\n  }\n}\n@-webkit-keyframes sonar {\n  0% {\n    transform: scale(0.9);\n    opacity: 1;\n  }\n  100% {\n    transform: scale(2);\n    opacity: 0;\n  }\n}\n@keyframes sonar {\n  0% {\n    transform: scale(0.9);\n    opacity: 1;\n  }\n  100% {\n    transform: scale(2);\n    opacity: 0;\n  }\n}\nbody[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.page-wrapper[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%], .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-brand[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:after, .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .sidebar-submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before, .sidebar-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .page-wrapper[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%], .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   input.search-menu[_ngcontent-%COMP%], .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%], .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], #show-sidebar[_ngcontent-%COMP%], #close-sidebar[_ngcontent-%COMP%] {\n  transition: all 0.3s ease;\n}\n\n.projects-section-header[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n}\n.projects-section-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 15px !important;\n}\n.page-wrapper[_ngcontent-%COMP%]   .theme.chiller-theme[_ngcontent-%COMP%] {\n  background: #1e2229;\n}\n\n.page-wrapper.toggled[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%] {\n  left: 0px;\n}\n@media screen and (min-width: 768px) {\n  .page-wrapper.toggled[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%] {\n    padding-left: 258px;\n  }\n}\n\n#show-sidebar[_ngcontent-%COMP%] {\n  transition-delay: 0.3s;\n  cursor: pointer;\n  font-size: 30px;\n}\n.page-wrapper.toggled[_ngcontent-%COMP%]   #show-sidebar[_ngcontent-%COMP%] {\n  left: -40px;\n}\n\n.sidebar-wrapper[_ngcontent-%COMP%] {\n  width: 260px;\n  height: 100%;\n  max-height: 100%;\n  position: fixed;\n  top: 0;\n  left: -300px;\n  z-index: 999;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.sidebar-content[_ngcontent-%COMP%] {\n  max-height: calc(100% - 30px);\n  height: calc(100% - 30px);\n  overflow-y: auto;\n  position: relative;\n}\n.sidebar-content.desktop[_ngcontent-%COMP%] {\n  overflow-y: hidden;\n}\n\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-brand[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  display: flex;\n  align-items: center;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-brand[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-weight: bold;\n  flex-grow: 1;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-brand[_ngcontent-%COMP%]   #close-sidebar[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-size: 20px;\n}\n\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%] {\n  padding: 20px;\n  overflow: hidden;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   .user-pic[_ngcontent-%COMP%] {\n  float: left;\n  width: 60px;\n  padding: 2px;\n  border-radius: 12px;\n  margin-right: 15px;\n  overflow: hidden;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   .user-pic[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  -o-object-fit: cover;\n     object-fit: cover;\n  height: 100%;\n  width: 100%;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%] {\n  float: left;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: block;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-role[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-status[_ngcontent-%COMP%] {\n  font-size: 11px;\n  margin-top: 4px;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-status[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 8px;\n  margin-right: 4px;\n  color: #5cb85c;\n}\n\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n}\n\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%] {\n  padding-bottom: 10px;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .header-menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 14px;\n  padding: 15px 20px 5px 20px;\n  display: inline-block;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  text-decoration: none;\n  position: relative;\n  padding: 8px 30px 8px 20px;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  font-size: 12px;\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n  text-align: center;\n  border-radius: 4px;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover    > i[_ngcontent-%COMP%]::before {\n  display: inline-block;\n  -webkit-animation: swing ease-in-out 0.5s 1 alternate;\n          animation: swing ease-in-out 0.5s 1 alternate;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:after {\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 900;\n  content: \"\uF105\";\n  font-style: normal;\n  display: inline-block;\n  font-style: normal;\n  font-variant: normal;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-align: center;\n  background: 0 0;\n  position: absolute;\n  right: 15px;\n  top: 14px;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .sidebar-submenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding: 5px 0;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .sidebar-submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding-left: 25px;\n  font-size: 13px;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .sidebar-submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before {\n  content: \"\uF111\";\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 400;\n  font-style: normal;\n  display: inline-block;\n  text-align: center;\n  text-decoration: none;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  margin-right: 10px;\n  font-size: 8px;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span.label[_ngcontent-%COMP%], .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span.badge[_ngcontent-%COMP%] {\n  float: right;\n  margin-top: 8px;\n  margin-left: 5px;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .sidebar-submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%], .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .sidebar-submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  float: right;\n  margin-top: 0px;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-submenu[_ngcontent-%COMP%] {\n  display: none;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:after {\n  transform: rotate(90deg);\n  right: 17px;\n}\n\n.sidebar-footer[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n  display: flex;\n}\n.sidebar-footer[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  text-align: center;\n  height: 30px;\n  line-height: 30px;\n  position: relative;\n}\n.sidebar-footer[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n}\n.badge-sonar[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: #980303;\n  border-radius: 50%;\n  height: 8px;\n  width: 8px;\n  position: absolute;\n  top: 0;\n}\n.badge-sonar[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  border: 2px solid #980303;\n  opacity: 0;\n  border-radius: 50%;\n  width: 100%;\n  height: 100%;\n  -webkit-animation: sonar 1.5s infinite;\n          animation: sonar 1.5s infinite;\n}\n\n.page-wrapper[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  padding-left: 0px;\n  padding-top: 20px;\n}\n.page-wrapper[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 5px;\n  height: 7px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-button {\n  width: 0px;\n  height: 0px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #525965;\n  border: 0px none #ffffff;\n  border-radius: 0px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #525965;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:active {\n  background: #525965;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n  border: 0px none #ffffff;\n  border-radius: 50px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-track:hover {\n  background: transparent;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-track:active {\n  background: transparent;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-corner {\n  background: transparent;\n}\n\n.chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%] {\n  background: #31353D;\n}\n.chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%] {\n  border-top: 1px solid #3a3f48;\n}\n.chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   input.search-menu[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n  border-color: transparent;\n  box-shadow: none;\n}\n.chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-role[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-status[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   input.search-menu[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-brand[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  color: #818896;\n}\n.chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover    > a[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-brand[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, .chiller-theme[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  color: #b8bfce;\n}\n.page-wrapper.chiller-theme.toggled[_ngcontent-%COMP%]   #close-sidebar[_ngcontent-%COMP%] {\n  color: #bdbdbd;\n}\n.page-wrapper.chiller-theme.toggled[_ngcontent-%COMP%]   #close-sidebar[_ngcontent-%COMP%]:hover {\n  color: #ffffff;\n}\n.chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .sidebar-submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:before, .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   input.search-menu[_ngcontent-%COMP%]:focus    + span[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #16c7ff;\n  text-shadow: 0px 0px 10px rgba(22, 199, 255, 0.5);\n}\n.chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   input.search-menu[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n  background: #3a3f48;\n}\n.chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .header-menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #6c7b88;\n}\n.chiller-theme[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%] {\n  background: #3a3f48;\n  box-shadow: 0px -1px 5px #282c33;\n  border-top: 1px solid #464a52;\n}\n.chiller-theme[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:first-child {\n  border-left: none;\n}\n.chiller-theme[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n.app-content[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  overflow: hidden;\n}\n.app-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  margin-left: 0px !important;\n  position: relative;\n  background-color: #fff;\n  color: #3f51b5;\n  padding: 3px 1px !important;\n}\n.app-header-left[_ngcontent-%COMP%], .app-header-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.app-header-right[_ngcontent-%COMP%] {\n  padding: 8px !important;\n}\n.app-header-left[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n.app-header-right[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n.app-icon[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 2px;\n  border-radius: 4px;\n  background-color: var(--main-color);\n  position: relative;\n}\n.app-icon[_ngcontent-%COMP%]:before, .app-icon[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  width: 12px;\n  height: 2px;\n  border-radius: 4px;\n  background-color: var(--main-color);\n  left: 50%;\n  transform: translatex(-50%);\n}\n.app-icon[_ngcontent-%COMP%]:before {\n  top: -6px;\n}\n.app-icon[_ngcontent-%COMP%]:after {\n  bottom: -6px;\n}\n.app-name[_ngcontent-%COMP%] {\n  color: var(--main-color);\n  margin: 0;\n  font-size: 20px;\n  line-height: 24px;\n  font-weight: 700;\n  margin: 0 32px;\n}\nmain.page-content[_ngcontent-%COMP%] {\n  background: #e6ecec !important;\n}\nmain.page-content[_ngcontent-%COMP%] {\n  padding-top: 0px !important;\n}\n.mode-switch[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: none;\n  padding: 0;\n  color: var(--main-color);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.search-wrapper[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  background-color: var(--search-area-bg);\n  padding-right: 12px;\n  height: 40px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  max-width: 480px;\n  color: var(--light-font);\n  box-shadow: 0 2px 6px 0 rgba(136, 148, 171, 0.2), 0 24px 20px -24px rgba(71, 82, 107, 0.1);\n  overflow: hidden;\n}\n.dark[_ngcontent-%COMP%]   .search-wrapper[_ngcontent-%COMP%] {\n  box-shadow: none;\n}\n.search-input[_ngcontent-%COMP%] {\n  border: none;\n  flex: 1;\n  outline: none;\n  height: 100%;\n  padding: 0 20px;\n  font-size: 16px;\n  background-color: var(--search-area-bg);\n  color: var(--main-color);\n}\n.search-input[_ngcontent-%COMP%]:placeholder {\n  color: var(--main-color);\n  opacity: 0.6;\n}\n.add-btn[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: var(--button-bg);\n  padding: 0;\n  border: 0;\n  border-radius: 50%;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.notification-btn[_ngcontent-%COMP%] {\n  color: var(--main-color);\n  padding: 0;\n  border: 0;\n  background-color: transparent;\n  height: 32px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.profile-btn[_ngcontent-%COMP%] {\n  padding: 0;\n  border: 0;\n  background-color: transparent;\n  display: flex;\n  align-items: center;\n  padding-left: 12px;\n  border-left: 2px solid #ddd;\n}\n.profile-btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 50%;\n  margin-right: 4px;\n}\n.profile-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--main-color);\n  font-size: 16px;\n  line-height: 24px;\n  font-weight: 700;\n}\n#show-sidebar[_ngcontent-dia-c19][_ngcontent-%COMP%] {\n  position: fixed;\n  left: 0;\n  top: 24px;\n  background: 0 4px 4px 0px;\n  width: 35px;\n  transition-delay: 0.3s;\n  background-color: white !important;\n  border: none;\n  color: black;\n  width: 35px;\n  font-size: 24px;\n}\n.app-header[_ngcontent-%COMP%] {\n  padding-top: 0px !important;\n  margin-left: 10px;\n}\n.add-note[_ngcontent-%COMP%] {\n  font-size: 12px;\n  border: 1px solid #ddd;\n  width: 117px !important;\n  height: 33px !important;\n  \n  border-radius: 24px;\n  padding: 1px !important;\n  margin-left: 9px;\n  text-align: start;\n}\n.bacdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.6);\n}\n.user[_ngcontent-%COMP%] {\n  height: 146px;\n  border-radius: no;\n  color: #000000ab;\n  width: 214px;\n  text-align: center;\n  padding: 14px;\n  box-shadow: 1px 1px 1px 1px #ddd;\n  border: 1px solid #ddd;\n  border-radius: 7px;\n}\n.user[_ngcontent-%COMP%]   button.signOut[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  background: none;\n  border: none;\n  text-align: center;\n}\n.sidebar-content[_ngcontent-%COMP%] {\n  background: #fff;\n  border-right: 1px solid #ddd;\n}\n.sidebar-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n.sidebar-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child) {\n  border-bottom: 1px solid #ddd;\n}\n.sidebar-footer[_ngcontent-%COMP%] {\n  background: #fff !important;\n}\nnav#sidebar[_ngcontent-%COMP%] {\n  background: #fff;\n}\na[_ngcontent-%COMP%] {\n  color: cornflowerblue;\n  text-decoration: none;\n}\na[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n  cursor: pointer;\n  text-decoration: underline;\n}\n.profile[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.profile[_ngcontent-%COMP%]:after {\n  content: \"\";\n  top: -0.75rem;\n  bottom: -0.75rem;\n  left: 0;\n  right: -0.75rem;\n  position: absolute;\n  background: rgba(255, 255, 255, 0.1);\n}\n.user-photo[_ngcontent-%COMP%] {\n  display: inline-block;\n  min-width: 40px;\n  width: 40px;\n  height: 40px;\n  margin-left: 0.75rem;\n  cursor: default;\n  background: #ecf0f1;\n  background: url(\"https://pre.images.century21.ca/Users/pic56342.jpg?crop=(263%2c173%2c550%2c388.25)&cropxunits=640&cropyunits=480&r=636135193218930000&mode=crop\");\n  background-position: center;\n  background-size: cover;\n  border-radius: 2px;\n}\n.notification-container[_ngcontent-%COMP%] {\n  cursor: default;\n  position: absolute;\n  z-index: 999;\n  top: 0;\n  right: 10rem;\n  width: 400px;\n  font-weight: 300;\n  background: white;\n  border-radius: 0.5rem;\n  box-sizing: border-box;\n  box-shadow: 0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2);\n  -webkit-animation-name: dropPanel;\n          animation-name: dropPanel;\n  -webkit-animation-iteration-count: 1;\n          animation-iteration-count: 1;\n  -webkit-animation-timing-function: all;\n          animation-timing-function: all;\n  -webkit-animation-duration: 0.75s;\n          animation-duration: 0.75s;\n}\n.notification-container[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  top: 1px;\n  right: 0;\n  width: 0;\n  height: 0;\n  transform: translate(-1rem, -100%);\n  border-left: 0.75rem solid transparent;\n  border-right: 0.75rem solid transparent;\n  border-bottom: 0.75rem solid white;\n}\n.notification-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 75%;\n  font-weight: 700;\n  color: #84929f;\n  padding: 1.5rem 2rem;\n}\n.notification-container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #b5c4d2;\n  font-size: 140%;\n  @vertical-align (50%);\n  position: absolute;\n}\n.notification-container[_ngcontent-%COMP%]   i.right[_ngcontent-%COMP%] {\n  right: 2rem;\n}\n.notification-container[_ngcontent-%COMP%]   i.right[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n  cursor: pointer;\n}\n.notification-container[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  margin-right: 0.75rem;\n  font-weight: 700;\n  font-size: 115%;\n  color: #b5c4d2;\n  vertical-align: bottom;\n  display: inline-block;\n}\n@-webkit-keyframes dropPanel {\n  0% {\n    opacity: 0;\n    transform: translateY(-100px) scaleY(0.5);\n  }\n}\n@keyframes dropPanel {\n  0% {\n    opacity: 0;\n    transform: translateY(-100px) scaleY(0.5);\n  }\n}\n.notification[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.notification.new[_ngcontent-%COMP%] {\n  background: #f3f9fd;\n}\ninput.checkbox[type=checkbox][_ngcontent-%COMP%] {\n  display: none;\n}\ninput.checkbox[type=checkbox][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\n  display: block;\n}\ninput.checkbox[type=checkbox][_ngcontent-%COMP%]:not(:checked)    + label[_ngcontent-%COMP%] {\n  transition: height 0.25s;\n  height: 0;\n  padding: 0;\n  font-size: 0;\n  border: none;\n}\ninput.checkbox[type=checkbox][_ngcontent-%COMP%]:not(:checked)    + label[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  display: none;\n}\ninput.checkbox[type=checkbox][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%] {\n  height: 3.25rem;\n  padding: 1.125rem 4rem 0.75rem 2rem;\n  font-size: 75%;\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n}\n.red[_ngcontent-%COMP%] {\n  color: #f8b2a6 !important;\n}\n.teal[_ngcontent-%COMP%] {\n  color: #7fa6ec;\n}\n.gray[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.2);\n}\n.gray-bg[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2) !important;\n}\n.primary-button[_ngcontent-%COMP%] {\n  background: cornflowerblue;\n  border: 2px solid cornflowerblue;\n}\n.secondary-button[_ngcontent-%COMP%] {\n  border: 2px solid #B2B9C5;\n  background: none;\n  color: #B2B9C5;\n}\n.left[_ngcontent-%COMP%] {\n  margin-right: 0.75rem;\n  float: left;\n}\n.right[_ngcontent-%COMP%] {\n  margin-left: 0.75rem;\n  float: right;\n}\nspacer[_ngcontent-%COMP%] {\n  width: 100%;\n}\nbutton[_ngcontent-%COMP%] {\n  float: right;\n  border-radius: 3px;\n  cursor: pointer;\n  display: inline-block;\n  font-weight: normal;\n  padding: 8px 12px;\n  border: 0;\n  font-size: 13px;\n  line-height: 13px;\n  color: white;\n  background: #B2B9C5;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.notification-icon[_ngcontent-%COMP%] {\n  position: relative;\n  margin-right: 1em;\n  border-radius: 5px;\n  background: #ecf0f1;\n}\n.notification-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin: 0.5rem;\n}\n.notification-icon[_ngcontent-%COMP%]:nth-of-type(1)   i[_ngcontent-%COMP%] {\n  background: -webkit-linear-gradient(300deg, #acccea, #6495ed);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.notification-icon[_ngcontent-%COMP%]:nth-of-type(2)   i[_ngcontent-%COMP%] {\n  background: -webkit-linear-gradient(300deg, #fff9ab, #00b8ff);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.num-count[_ngcontent-%COMP%] {\n  position: absolute;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: default;\n  font-size: 0.6rem;\n  background: #e74c3c;\n  width: 1.2rem;\n  height: 1.2rem;\n  color: #ecf0f1;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  top: -0.33rem;\n  right: -0.66rem;\n  box-sizing: border-box;\n}\n.first-name[_ngcontent-%COMP%] {\n  color: white;\n}\n.left[_ngcontent-%COMP%] {\n  color: white;\n}\n.num-count[_ngcontent-%COMP%] {\n  -webkit-animation-name: scaleCount;\n          animation-name: scaleCount;\n  -webkit-animation-iteration-count: 1;\n          animation-iteration-count: 1;\n  -webkit-animation-timing-function: all;\n          animation-timing-function: all;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n}\n@-webkit-keyframes scaleCount {\n  0% {\n    transform: scale(0);\n  }\n  40% {\n    transform: scale(1);\n  }\n  60% {\n    transform: scale(0.5);\n  }\n  80% {\n    transform: scale(1.25);\n  }\n}\n@keyframes scaleCount {\n  0% {\n    transform: scale(0);\n  }\n  40% {\n    transform: scale(1);\n  }\n  60% {\n    transform: scale(0.5);\n  }\n  80% {\n    transform: scale(1.25);\n  }\n}\n.menu[_ngcontent-%COMP%] {\n  position: relative;\n  order: 1;\n  flex: 1 6 25%;\n  padding: 2rem 0;\n  border-radius: 0 0 0 0.5rem;\n  background: #393b45;\n  color: #aaa;\n  text-transform: uppercase;\n  font-size: 70%;\n  font-weight: 700;\n}\n.menu[_ngcontent-%COMP%]   .num-count[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 70%;\n  transform: translateY(-70%);\n  right: 1rem;\n  width: auto;\n  padding: 0 0.5rem;\n  border-radius: 1rem;\n}\n.menu[_ngcontent-%COMP%]   ul.active[_ngcontent-%COMP%] {\n  background: #4f5361;\n  margin-bottom: 0.75rem;\n}\n.menu[_ngcontent-%COMP%]   ul.active[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding-left: 4rem;\n}\n.menu[_ngcontent-%COMP%]   ul.active[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n  color: white;\n}\n.menu[_ngcontent-%COMP%]   ul.active[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]:before {\n  content: \"\u2022\";\n  color: #7fa6ec;\n  left: 2rem;\n  position: absolute;\n  top: 65%;\n  transform: translateY(-65%);\n  padding-left: 0.7em;\n}\n.menu[_ngcontent-%COMP%]   ul.active[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n  padding-top: 1.5rem;\n}\n.menu[_ngcontent-%COMP%]   ul.active[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  padding-bottom: 1.5rem;\n}\n.menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  padding-left: 4rem !important;\n}\n.menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 0.75rem 2rem;\n  position: relative;\n}\n.menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  @vertical-align (50%);\n  position: absolute;\n  font-size: 180%;\n}\n.menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:not(.left) {\n  right: 1.5rem;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:not(.left):hover {\n  cursor: pointer;\n}\n.menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i.left[_ngcontent-%COMP%] {\n  left: 2rem;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.menu[_ngcontent-%COMP%]   li.dropdown.active[_ngcontent-%COMP%] {\n  background: #444753;\n  margin-top: 0.75rem;\n  padding: 1.5rem 2rem;\n  color: white;\n}\n.content[_ngcontent-%COMP%] {\n  order: 2;\n  flex: 1 6 75%;\n}\n.profile-container[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 99;\n  top: 0;\n  right: 1.25rem;\n  width: 400px;\n  font-weight: 300;\n  background: white;\n  padding: 1.125rem 0.75rem 0.75rem;\n  box-sizing: border-box;\n  box-shadow: 0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2);\n}\n.profile-container[_ngcontent-%COMP%]   .user-photo[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  margin: 0 0.75rem 0.75rem 0;\n  border-radius: 8px;\n}\n.profile-container[_ngcontent-%COMP%]   .user-email[_ngcontent-%COMP%] {\n  display: block;\n}\n.profile-container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #b5c4d2;\n  font-size: 110%;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 125%;\n}\nhr[_ngcontent-%COMP%] {\n  border: 0;\n  clear: both;\n  margin-bottom: 0.75rem;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n}\n.switch[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  margin: 0.75rem 0 0;\n}\n.switch[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  pointer-events: none;\n  font-weight: bold;\n  font-size: 9px;\n  text-transform: uppercase;\n  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);\n  width: 50%;\n  text-align: center;\n}\ninput.check-toggle-round-flat[_ngcontent-%COMP%]:checked    ~ .off[_ngcontent-%COMP%] {\n  color: #98b6ec;\n}\ninput.check-toggle-round-flat[_ngcontent-%COMP%]:checked    ~ .on[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.switch[_ngcontent-%COMP%]    > span.on[_ngcontent-%COMP%] {\n  left: 2px;\n  color: #98b6ec;\n}\n.switch[_ngcontent-%COMP%]    > span.off[_ngcontent-%COMP%] {\n  right: 2px;\n  color: #fff;\n}\n.check-toggle[_ngcontent-%COMP%] {\n  display: none;\n}\n.check-toggle[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  cursor: pointer;\n}\ninput.check-toggle-round-flat[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 26px;\n  background: #7fa6ec;\n  border-radius: 5px;\n}\ninput.check-toggle-round-flat[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:before, input.check-toggle-round-flat[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:after {\n  display: block;\n  position: absolute;\n  content: \"\";\n}\ninput.check-toggle-round-flat[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:after {\n  top: 2px;\n  left: 2px;\n  bottom: 2px;\n  width: 50%;\n  background-color: white;\n  border-radius: 3px;\n  transition: margin 0.2s;\n  cursor: default;\n}\ninput.check-toggle-round-flat[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:after {\n  margin-left: 41px;\n}\n.notification-container[_ngcontent-%COMP%] {\n  cursor: default;\n  position: absolute;\n  z-index: 999;\n  top: 54px;\n  right: 8rem;\n  width: 400px;\n  font-weight: 300;\n  background: white;\n  border-radius: 0.5rem;\n  box-sizing: border-box;\n  box-shadow: 0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2);\n  -webkit-animation-name: dropPanel;\n          animation-name: dropPanel;\n  -webkit-animation-iteration-count: 1;\n          animation-iteration-count: 1;\n  -webkit-animation-timing-function: all;\n          animation-timing-function: all;\n  -webkit-animation-duration: 0.75s;\n          animation-duration: 0.75s;\n}\nmain.page-content[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n.profile-container[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 99;\n  top: 42px;\n  right: 2.25rem;\n  width: 400px;\n  font-weight: 300;\n  background: white;\n  padding: 1.125rem 0.75rem 0.75rem;\n  box-sizing: border-box;\n  box-shadow: 0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2);\n}\n.app-header[_ngcontent-%COMP%] {\n  margin-top: 0px !important;\n}\n.close_button[_ngcontent-%COMP%] {\n  position: absolute;\n  left: -50px;\n  top: 14px;\n  padding: 9px;\n  background: none;\n  font-size: 35px;\n}\n.register_form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: flex;\n}\n.register_form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:hover {\n  color: cornflowerblue;\n}\n.link_activated[_ngcontent-%COMP%] {\n  background: #e5e5e5 !important;\n  color: black !important;\n  border: 1px solid #ddd !important;\n  height: 42px;\n  width: 44px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFkbWluLW5hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUE2dUJSLGdFQUFBO0FBN3VCUjtFQUNFLGtCQUFBO0FBR0Y7QUFGRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0FBSUo7QUFGSTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FBSU47QUFITTtFQUNFLGdCQUFBO0FBS1I7QUFITTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQUtOO0FBT0E7RUFDSTtJQUNFLHVCQUFBO0VBSko7RUFNRTtJQUNFLHdCQUFBO0VBSko7RUFNRTtJQUNFLHVCQUFBO0VBSko7RUFNRTtJQUNFLHlCQUFBO0VBSko7RUFNRTtJQUNFLHVCQUFBO0VBSko7RUFNRTtJQUNFLHVCQUFBO0VBSko7RUFNRTtJQUNFLHVCQUFBO0VBSko7RUFNRTtJQUNFLHdCQUFBO0VBSko7RUFNRTtJQUNFLHVCQUFBO0VBSko7QUFDRjtBQXZCQTtFQUNJO0lBQ0UsdUJBQUE7RUFKSjtFQU1FO0lBQ0Usd0JBQUE7RUFKSjtFQU1FO0lBQ0UsdUJBQUE7RUFKSjtFQU1FO0lBQ0UseUJBQUE7RUFKSjtFQU1FO0lBQ0UsdUJBQUE7RUFKSjtFQU1FO0lBQ0UsdUJBQUE7RUFKSjtFQU1FO0lBQ0UsdUJBQUE7RUFKSjtFQU1FO0lBQ0Usd0JBQUE7RUFKSjtFQU1FO0lBQ0UsdUJBQUE7RUFKSjtBQUNGO0FBT0U7RUFDRTtJQUNFLHFCQUFBO0lBQ0EsVUFBQTtFQUxKO0VBT0U7SUFDRSxtQkFBQTtJQUNBLFVBQUE7RUFMSjtBQUNGO0FBSEU7RUFDRTtJQUNFLHFCQUFBO0lBQ0EsVUFBQTtFQUxKO0VBT0U7SUFDRSxtQkFBQTtJQUNBLFVBQUE7RUFMSjtBQUNGO0FBT0U7RUFDRSxpQkFBQTtBQUxKO0FBT0U7Ozs7Ozs7Ozs7O0VBZUUseUJBQUE7QUFKSjtBQU9FLCtDQUFBO0FBRUE7RUFDRSxrQkFBQTtBQUxKO0FBTUk7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aUNBQUE7VUFBQSx5QkFBQTtBQXBERjtBQTBEQTtFQUNFLGFBQUE7QUF2REY7QUEwREE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUNBQUE7RUFDQSxzQkFBQTtFQUNBLG1EQUFBO0FBdkRGO0FBeURDO0VBQ0MsMEJBQUE7QUF0REY7QUF3REE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQXJERjtBQXVEQTtFQUNFLGFBQUE7QUFwREY7QUFxREU7RUFDRSxxQkFBQTtBQW5ESjtBQXNEQTtFQUNFLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQ0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBbkRGIiwiZmlsZSI6ImFkbWluLW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbkBpbXBvcnQgJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1NYXRlcmlhbCtJY29ucyc7XG4udXNlckljb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4udXNlckljb24gdWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzdweDtcbiAgcmlnaHQ6IDMlO1xuICB6LWluZGV4OiAxMDAwO1xufVxuLnVzZXJJY29uIHVsIGxpIHtcbiAgd2lkdGg6IDI1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG4udXNlckljb24gdWwgbGk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZGRkO1xufVxuLnVzZXJJY29uIHVsIGxpIDpsYXN0LWNoaWxkIHtcbiAgd2lkdGg6IDE1JTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbkBrZXlmcmFtZXMgc3dpbmcge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMGRlZyk7XG4gIH1cbiAgMzAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICA0MCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMGRlZyk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICA2MCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDVkZWcpO1xuICB9XG4gIDcwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgODAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc29uYXIge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgyKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5ib2R5IHtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG5cbi5wYWdlLXdyYXBwZXIgLnNpZGViYXItd3JhcHBlcixcbi5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItYnJhbmQgPiBhLFxuLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1kcm9wZG93biA+IGE6YWZ0ZXIsXG4uc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgLnNpZGViYXItZHJvcGRvd24gLnNpZGViYXItc3VibWVudSBsaSBhOmJlZm9yZSxcbi5zaWRlYmFyLXdyYXBwZXIgdWwgbGkgYSBpLFxuLnBhZ2Utd3JhcHBlciAucGFnZS1jb250ZW50LFxuLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1zZWFyY2ggaW5wdXQuc2VhcmNoLW1lbnUsXG4uc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLXNlYXJjaCAuaW5wdXQtZ3JvdXAtdGV4dCxcbi5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItbWVudSB1bCBsaSBhLFxuI3Nob3ctc2lkZWJhcixcbiNjbG9zZS1zaWRlYmFyIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS1wYWdlLXdyYXBwZXItLS0tLS0tLS0tLS0tLS0tKi9cbi5wcm9qZWN0cy1zZWN0aW9uLWhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbi5wcm9qZWN0cy1zZWN0aW9uLWhlYWRlciBwIHtcbiAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wYWdlLXdyYXBwZXIgLnRoZW1lLmNoaWxsZXItdGhlbWUge1xuICBiYWNrZ3JvdW5kOiAjMWUyMjI5O1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS10b2dnZWxlZCBzaWRlYmFyLS0tLS0tLS0tLS0tLS0tLSovXG4ucGFnZS13cmFwcGVyLnRvZ2dsZWQgLnNpZGViYXItd3JhcHBlciB7XG4gIGxlZnQ6IDBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLnBhZ2Utd3JhcHBlci50b2dnbGVkIC5wYWdlLWNvbnRlbnQge1xuICAgIHBhZGRpbmctbGVmdDogMjU4cHg7XG4gIH1cbn1cbi8qLS0tLS0tLS0tLS0tLS0tLXNob3cgc2lkZWJhciBidXR0b24tLS0tLS0tLS0tLS0tLS0tKi9cbiNzaG93LXNpZGViYXIge1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjNzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLnBhZ2Utd3JhcHBlci50b2dnbGVkICNzaG93LXNpZGViYXIge1xuICBsZWZ0OiAtNDBweDtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tc2lkZWJhci13cmFwcGVyLS0tLS0tLS0tLS0tLS0tLSovXG4uc2lkZWJhci13cmFwcGVyIHtcbiAgd2lkdGg6IDI2MHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAtMzAwcHg7XG4gIHotaW5kZXg6IDk5OTtcbn1cblxuLnNpZGViYXItd3JhcHBlciB1bCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uc2lkZWJhci13cmFwcGVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLXNpZGViYXItY29udGVudC0tLS0tLS0tLS0tLS0tLS0qL1xuLnNpZGViYXItY29udGVudCB7XG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwJSAtIDMwcHgpO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDMwcHgpO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zaWRlYmFyLWNvbnRlbnQuZGVza3RvcCB7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLXNpZGViYXItYnJhbmQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItYnJhbmQge1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItYnJhbmQgPiBhIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxuLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1icmFuZCAjY2xvc2Utc2lkZWJhciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tc2lkZWJhci1oZWFkZXItLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItaGVhZGVyIHtcbiAgcGFkZGluZzogMjBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1oZWFkZXIgLnVzZXItcGljIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA2MHB4O1xuICBwYWRkaW5nOiAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1oZWFkZXIgLnVzZXItcGljIGltZyB7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLWhlYWRlciAudXNlci1pbmZvIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItaGVhZGVyIC51c2VyLWluZm8gPiBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItaGVhZGVyIC51c2VyLWluZm8gLnVzZXItcm9sZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1oZWFkZXIgLnVzZXItaW5mbyAudXNlci1zdGF0dXMge1xuICBmb250LXNpemU6IDExcHg7XG4gIG1hcmdpbi10b3A6IDRweDtcbn1cblxuLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1oZWFkZXIgLnVzZXItaW5mbyAudXNlci1zdGF0dXMgaSB7XG4gIGZvbnQtc2l6ZTogOHB4O1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgY29sb3I6ICM1Y2I4NWM7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1zaWRlYmFyLXNlYXJjaC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4uc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLXNlYXJjaCA+IGRpdiB7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tc2lkZWJhci1tZW51LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4uc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUge1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IC5oZWFkZXItbWVudSBzcGFuIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogMTVweCAyMHB4IDVweCAyMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItbWVudSB1bCBsaSBhIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDhweCAzMHB4IDhweCAyMHB4O1xufVxuXG4uc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgdWwgbGkgYSBpIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IHVsIGxpIGE6aG92ZXIgPiBpOjpiZWZvcmUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGFuaW1hdGlvbjogc3dpbmcgZWFzZS1pbi1vdXQgMC41cyAxIGFsdGVybmF0ZTtcbn1cblxuLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IC5zaWRlYmFyLWRyb3Bkb3duID4gYTphZnRlciB7XG4gIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IEZyZWVcIjtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgY29udGVudDogXCLvhIVcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC12YXJpYW50OiBub3JtYWw7XG4gIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAwIDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE1cHg7XG4gIHRvcDogMTRweDtcbn1cblxuLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IC5zaWRlYmFyLWRyb3Bkb3duIC5zaWRlYmFyLXN1Ym1lbnUgdWwge1xuICBwYWRkaW5nOiA1cHggMDtcbn1cblxuLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IC5zaWRlYmFyLWRyb3Bkb3duIC5zaWRlYmFyLXN1Ym1lbnUgbGkge1xuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IC5zaWRlYmFyLWRyb3Bkb3duIC5zaWRlYmFyLXN1Ym1lbnUgbGkgYTpiZWZvcmUge1xuICBjb250ZW50OiBcIu+EkVwiO1xuICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBGcmVlXCI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgZm9udC1zaXplOiA4cHg7XG59XG5cbi5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItbWVudSB1bCBsaSBhIHNwYW4ubGFiZWwsXG4uc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgdWwgbGkgYSBzcGFuLmJhZGdlIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItbWVudSAuc2lkZWJhci1kcm9wZG93biAuc2lkZWJhci1zdWJtZW51IGxpIGEgLmJhZGdlLFxuLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IC5zaWRlYmFyLWRyb3Bkb3duIC5zaWRlYmFyLXN1Ym1lbnUgbGkgYSAubGFiZWwge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cblxuLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IC5zaWRlYmFyLXN1Ym1lbnUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgLnNpZGViYXItZHJvcGRvd24uYWN0aXZlID4gYTphZnRlciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgcmlnaHQ6IDE3cHg7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1zaWRlLWZvb3Rlci0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4uc2lkZWJhci1mb290ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3R0b206IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5zaWRlYmFyLWZvb3RlciA+IGEge1xuICBmbGV4LWdyb3c6IDE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAzMHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc2lkZWJhci1mb290ZXIgPiBhIC5ub3RpZmljYXRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbn1cblxuLmJhZGdlLXNvbmFyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kOiAjOTgwMzAzO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGhlaWdodDogOHB4O1xuICB3aWR0aDogOHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbn1cblxuLmJhZGdlLXNvbmFyOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM5ODAzMDM7XG4gIG9wYWNpdHk6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYW5pbWF0aW9uOiBzb25hciAxLjVzIGluZmluaXRlO1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tcGFnZS1jb250ZW50LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLnBhZ2Utd3JhcHBlciAucGFnZS1jb250ZW50IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuXG4ucGFnZS13cmFwcGVyIC5wYWdlLWNvbnRlbnQge1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbi8qLS0tLS0tc2Nyb2xsIGJhci0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDVweDtcbiAgaGVpZ2h0OiA3cHg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItYnV0dG9uIHtcbiAgd2lkdGg6IDBweDtcbiAgaGVpZ2h0OiAwcHg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjNTI1OTY1O1xuICBib3JkZXI6IDBweCBub25lICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICM1MjU5NjU7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzUyNTk2NTtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDBweCBub25lICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2s6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjazphY3RpdmUge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci1jb3JuZXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLWNoaWxsZXItdGhlbWUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiAjMzEzNTNEO1xufVxuXG4uY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLWhlYWRlcixcbi5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItc2VhcmNoLFxuLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMzYTNmNDg7XG59XG5cbi5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItc2VhcmNoIGlucHV0LnNlYXJjaC1tZW51LFxuLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1zZWFyY2ggLmlucHV0LWdyb3VwLXRleHQge1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4uY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLWhlYWRlciAudXNlci1pbmZvIC51c2VyLXJvbGUsXG4uY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLWhlYWRlciAudXNlci1pbmZvIC51c2VyLXN0YXR1cyxcbi5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItc2VhcmNoIGlucHV0LnNlYXJjaC1tZW51LFxuLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1zZWFyY2ggLmlucHV0LWdyb3VwLXRleHQsXG4uY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLWJyYW5kID4gYSxcbi5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItbWVudSB1bCBsaSBhLFxuLmNoaWxsZXItdGhlbWUgLnNpZGViYXItZm9vdGVyID4gYSB7XG4gIGNvbG9yOiAjODE4ODk2O1xufVxuXG4uY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgdWwgbGk6aG92ZXIgPiBhLFxuLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IC5zaWRlYmFyLWRyb3Bkb3duLmFjdGl2ZSA+IGEsXG4uY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLWhlYWRlciAudXNlci1pbmZvLFxuLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1icmFuZCA+IGE6aG92ZXIsXG4uY2hpbGxlci10aGVtZSAuc2lkZWJhci1mb290ZXIgPiBhOmhvdmVyIGkge1xuICBjb2xvcjogI2I4YmZjZTtcbn1cblxuLnBhZ2Utd3JhcHBlci5jaGlsbGVyLXRoZW1lLnRvZ2dsZWQgI2Nsb3NlLXNpZGViYXIge1xuICBjb2xvcjogI2JkYmRiZDtcbn1cblxuLnBhZ2Utd3JhcHBlci5jaGlsbGVyLXRoZW1lLnRvZ2dsZWQgI2Nsb3NlLXNpZGViYXI6aG92ZXIge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciB1bCBsaTpob3ZlciBhIGksXG4uY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLWRyb3Bkb3duIC5zaWRlYmFyLXN1Ym1lbnUgbGkgYTpob3ZlcjpiZWZvcmUsXG4uY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLXNlYXJjaCBpbnB1dC5zZWFyY2gtbWVudTpmb2N1cyArIHNwYW4sXG4uY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgLnNpZGViYXItZHJvcGRvd24uYWN0aXZlIGEgaSB7XG4gIGNvbG9yOiAjMTZjN2ZmO1xuICB0ZXh0LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYmEoMjIsIDE5OSwgMjU1LCAwLjUpO1xufVxuXG4uY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgdWwgbGkgYSBpLFxuLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IC5zaWRlYmFyLWRyb3Bkb3duIGRpdixcbi5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItc2VhcmNoIGlucHV0LnNlYXJjaC1tZW51LFxuLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1zZWFyY2ggLmlucHV0LWdyb3VwLXRleHQge1xuICBiYWNrZ3JvdW5kOiAjM2EzZjQ4O1xufVxuXG4uY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgLmhlYWRlci1tZW51IHNwYW4ge1xuICBjb2xvcjogIzZjN2I4ODtcbn1cblxuLmNoaWxsZXItdGhlbWUgLnNpZGViYXItZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogIzNhM2Y0ODtcbiAgYm94LXNoYWRvdzogMHB4IC0xcHggNXB4ICMyODJjMzM7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNDY0YTUyO1xufVxuXG4uY2hpbGxlci10aGVtZSAuc2lkZWJhci1mb290ZXIgPiBhOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG59XG5cbi5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLWZvb3RlciA+IGE6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbn1cblxuLmFwcC1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmFwcC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6ICMzZjUxYjU7XG4gIHBhZGRpbmc6IDNweCAxcHggIWltcG9ydGFudDtcbn1cbi5hcHAtaGVhZGVyLWxlZnQsIC5hcHAtaGVhZGVyLXJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5hcHAtaGVhZGVyLXJpZ2h0IHtcbiAgcGFkZGluZzogOHB4ICFpbXBvcnRhbnQ7XG59XG4uYXBwLWhlYWRlci1sZWZ0IHtcbiAgZmxleC1ncm93OiAxO1xufVxuLmFwcC1oZWFkZXItcmlnaHQgYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4uYXBwLWljb24ge1xuICB3aWR0aDogMjZweDtcbiAgaGVpZ2h0OiAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5hcHAtaWNvbjpiZWZvcmUsIC5hcHAtaWNvbjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMnB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRleCgtNTAlKTtcbn1cbi5hcHAtaWNvbjpiZWZvcmUge1xuICB0b3A6IC02cHg7XG59XG4uYXBwLWljb246YWZ0ZXIge1xuICBib3R0b206IC02cHg7XG59XG4uYXBwLW5hbWUge1xuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luOiAwIDMycHg7XG59XG5cbm1haW4ucGFnZS1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogI2U2ZWNlYyAhaW1wb3J0YW50O1xufVxuXG5tYWluLnBhZ2UtY29udGVudCB7XG4gIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcbn1cblxuLm1vZGUtc3dpdGNoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNlYXJjaC13cmFwcGVyIHtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VhcmNoLWFyZWEtYmcpO1xuICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNDgwcHg7XG4gIGNvbG9yOiB2YXIoLS1saWdodC1mb250KTtcbiAgYm94LXNoYWRvdzogMCAycHggNnB4IDAgcmdiYSgxMzYsIDE0OCwgMTcxLCAwLjIpLCAwIDI0cHggMjBweCAtMjRweCByZ2JhKDcxLCA4MiwgMTA3LCAwLjEpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmRhcmsgLnNlYXJjaC13cmFwcGVyIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLnNlYXJjaC1pbnB1dCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgZmxleDogMTtcbiAgb3V0bGluZTogbm9uZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VhcmNoLWFyZWEtYmcpO1xuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG59XG4uc2VhcmNoLWlucHV0OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xuICBvcGFjaXR5OiAwLjY7XG59XG5cbi5hZGQtYnRuIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iZyk7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm5vdGlmaWNhdGlvbi1idG4ge1xuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGhlaWdodDogMzJweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wcm9maWxlLWJ0biB7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogMTJweDtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjZGRkO1xufVxuLnByb2ZpbGUtYnRuIGltZyB7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xufVxuLnByb2ZpbGUtYnRuIHNwYW4ge1xuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbiNzaG93LXNpZGViYXJbX25nY29udGVudC1kaWEtYzE5XSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgdG9wOiAyNHB4O1xuICBiYWNrZ3JvdW5kOiAwIDRweCA0cHggMHB4O1xuICB3aWR0aDogMzVweDtcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4zcztcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogYmxhY2s7XG4gIHdpZHRoOiAzNXB4O1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cbi5hcHAtaGVhZGVyIHtcbiAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLmFkZC1ub3RlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICB3aWR0aDogMTE3cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAzM3B4ICFpbXBvcnRhbnQ7XG4gIC8qIGRpc3BsYXk6IGZsZXg7ICovXG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gIHBhZGRpbmc6IDFweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogOXB4O1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbn1cblxuLmJhY2Ryb3Age1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcbn1cblxuLnVzZXIge1xuICBoZWlnaHQ6IDE0NnB4O1xuICBib3JkZXItcmFkaXVzOiBubztcbiAgY29sb3I6ICMwMDAwMDBhYjtcbiAgd2lkdGg6IDIxNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE0cHg7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IDFweCAjZGRkO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG59XG4udXNlciBidXR0b24uc2lnbk91dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IGF1dG87XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2lkZWJhci1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RkZDtcbn1cbi5zaWRlYmFyLWNvbnRlbnQgdWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLnNpZGViYXItY29udGVudCB1bCBsaTpub3QoOmxhc3QtY2hpbGQpIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG59XG5cbi5zaWRlYmFyLWZvb3RlciB7XG4gIGJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcbn1cblxubmF2I3NpZGViYXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG5hIHtcbiAgY29sb3I6IGNvcm5mbG93ZXJibHVlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5hOmhvdmVyIHtcbiAgb3BhY2l0eTogMC44O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4ucHJvZmlsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5wcm9maWxlOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgdG9wOiAtMC43NXJlbTtcbiAgYm90dG9tOiAtMC43NXJlbTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IC0wLjc1cmVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbn1cblxuLnVzZXItcGhvdG8ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1pbi13aWR0aDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgbWFyZ2luLWxlZnQ6IDAuNzVyZW07XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgYmFja2dyb3VuZDogI2VjZjBmMTtcbiAgYmFja2dyb3VuZDogdXJsKFwiaHR0cHM6Ly9wcmUuaW1hZ2VzLmNlbnR1cnkyMS5jYS9Vc2Vycy9waWM1NjM0Mi5qcGc/Y3JvcD0oMjYzJTJjMTczJTJjNTUwJTJjMzg4LjI1KSZjcm9weHVuaXRzPTY0MCZjcm9weXVuaXRzPTQ4MCZyPTYzNjEzNTE5MzIxODkzMDAwMCZtb2RlPWNyb3BcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG4ubm90aWZpY2F0aW9uLWNvbnRhaW5lciB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTk7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDEwcmVtO1xuICB3aWR0aDogNDAwcHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaGFkb3c6IDAuNXJlbSAwLjVyZW0gMnJlbSAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYW5pbWF0aW9uLW5hbWU6IGRyb3BQYW5lbDtcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogYWxsO1xuICBhbmltYXRpb24tZHVyYXRpb246IDAuNzVzO1xufVxuLm5vdGlmaWNhdGlvbi1jb250YWluZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDFweDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xcmVtLCAtMTAwJSk7XG4gIGJvcmRlci1sZWZ0OiAwLjc1cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDAuNzVyZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDAuNzVyZW0gc29saWQgd2hpdGU7XG59XG4ubm90aWZpY2F0aW9uLWNvbnRhaW5lciBoMyB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogNzUlO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzg0OTI5ZjtcbiAgcGFkZGluZzogMS41cmVtIDJyZW07XG59XG4ubm90aWZpY2F0aW9uLWNvbnRhaW5lciBpIHtcbiAgY29sb3I6ICNiNWM0ZDI7XG4gIGZvbnQtc2l6ZTogMTQwJTtcbiAgQHZlcnRpY2FsLWFsaWduICg1MCUpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4ubm90aWZpY2F0aW9uLWNvbnRhaW5lciBpLnJpZ2h0IHtcbiAgcmlnaHQ6IDJyZW07XG59XG4ubm90aWZpY2F0aW9uLWNvbnRhaW5lciBpLnJpZ2h0OmhvdmVyIHtcbiAgb3BhY2l0eTogMC44O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubm90aWZpY2F0aW9uLWNvbnRhaW5lciBlbSB7XG4gIG1hcmdpbi1yaWdodDogMC43NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxMTUlO1xuICBjb2xvcjogI2I1YzRkMjtcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG5Aa2V5ZnJhbWVzIGRyb3BQYW5lbCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwcHgpIHNjYWxlWSgwLjUpO1xuICB9XG59XG4ubm90aWZpY2F0aW9uIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5ub3RpZmljYXRpb24ubmV3IHtcbiAgYmFja2dyb3VuZDogI2YzZjlmZDtcbn1cblxuaW5wdXQuY2hlY2tib3hbdHlwZT1jaGVja2JveF0ge1xuICBkaXNwbGF5OiBub25lO1xufVxuaW5wdXQuY2hlY2tib3hbdHlwZT1jaGVja2JveF0gKyBsYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuaW5wdXQuY2hlY2tib3hbdHlwZT1jaGVja2JveF06bm90KDpjaGVja2VkKSArIGxhYmVsIHtcbiAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuMjVzO1xuICBoZWlnaHQ6IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMDtcbiAgYm9yZGVyOiBub25lO1xufVxuaW5wdXQuY2hlY2tib3hbdHlwZT1jaGVja2JveF06bm90KDpjaGVja2VkKSArIGxhYmVsICoge1xuICBkaXNwbGF5OiBub25lO1xufVxuaW5wdXQuY2hlY2tib3hbdHlwZT1jaGVja2JveF06Y2hlY2tlZCArIGxhYmVsIHtcbiAgaGVpZ2h0OiAzLjI1cmVtO1xuICBwYWRkaW5nOiAxLjEyNXJlbSA0cmVtIDAuNzVyZW0gMnJlbTtcbiAgZm9udC1zaXplOiA3NSU7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5yZWQge1xuICBjb2xvcjogI2Y4YjJhNiAhaW1wb3J0YW50O1xufVxuXG4udGVhbCB7XG4gIGNvbG9yOiAjN2ZhNmVjO1xufVxuXG4uZ3JheSB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG59XG5cbi5ncmF5LWJnIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpICFpbXBvcnRhbnQ7XG59XG5cbi5wcmltYXJ5LWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IGNvcm5mbG93ZXJibHVlO1xuICBib3JkZXI6IDJweCBzb2xpZCBjb3JuZmxvd2VyYmx1ZTtcbn1cblxuLnNlY29uZGFyeS1idXR0b24ge1xuICBib3JkZXI6IDJweCBzb2xpZCAjQjJCOUM1O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogI0IyQjlDNTtcbn1cblxuLmxlZnQge1xuICBtYXJnaW4tcmlnaHQ6IDAuNzVyZW07XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4ucmlnaHQge1xuICBtYXJnaW4tbGVmdDogMC43NXJlbTtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5zcGFjZXIge1xuICB3aWR0aDogMTAwJTtcbn1cblxuYnV0dG9uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBwYWRkaW5nOiA4cHggMTJweDtcbiAgYm9yZGVyOiAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxM3B4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICNCMkI5QzU7XG59XG5idXR0b246aG92ZXIge1xuICBvcGFjaXR5OiAwLjk7XG59XG5cbi5ub3RpZmljYXRpb24taWNvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZDogI2VjZjBmMTtcbn1cbi5ub3RpZmljYXRpb24taWNvbiBpIHtcbiAgbWFyZ2luOiAwLjVyZW07XG59XG4ubm90aWZpY2F0aW9uLWljb246bnRoLW9mLXR5cGUoMSkgaSB7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDMwMGRlZywgI2FjY2NlYSwgIzY0OTVlZCk7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4ubm90aWZpY2F0aW9uLWljb246bnRoLW9mLXR5cGUoMikgaSB7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDMwMGRlZywgI2ZmZjlhYiwgIzAwYjhmZik7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5udW0tY291bnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIGZvbnQtc2l6ZTogMC42cmVtO1xuICBiYWNrZ3JvdW5kOiAjZTc0YzNjO1xuICB3aWR0aDogMS4ycmVtO1xuICBoZWlnaHQ6IDEuMnJlbTtcbiAgY29sb3I6ICNlY2YwZjE7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0b3A6IC0wLjMzcmVtO1xuICByaWdodDogLTAuNjZyZW07XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5maXJzdC1uYW1lIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubGVmdCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm51bS1jb3VudCB7XG4gIGFuaW1hdGlvbi1uYW1lOiBzY2FsZUNvdW50O1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBhbGw7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIGFuaW1hdGlvbi1kZWxheTogMHM7XG59XG5Aa2V5ZnJhbWVzIHNjYWxlQ291bnQge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuICA0MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbiAgNjAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XG4gIH1cbiAgODAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMjUpO1xuICB9XG59XG5cbi5tZW51IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvcmRlcjogMTtcbiAgZmxleDogMSA2IDI1JTtcbiAgcGFkZGluZzogMnJlbSAwO1xuICBib3JkZXItcmFkaXVzOiAwIDAgMCAwLjVyZW07XG4gIGJhY2tncm91bmQ6ICMzOTNiNDU7XG4gIGNvbG9yOiAjYWFhO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDcwJTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5tZW51IC5udW0tY291bnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNzAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNzAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNzAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC03MCUpO1xuICByaWdodDogMXJlbTtcbiAgd2lkdGg6IGF1dG87XG4gIHBhZGRpbmc6IDAgMC41cmVtO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xufVxuLm1lbnUgdWwuYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzRmNTM2MTtcbiAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcbn1cbi5tZW51IHVsLmFjdGl2ZSBsaSB7XG4gIHBhZGRpbmctbGVmdDogNHJlbTtcbn1cbi5tZW51IHVsLmFjdGl2ZSBsaS5hY3RpdmUge1xuICBjb2xvcjogd2hpdGU7XG59XG4ubWVudSB1bC5hY3RpdmUgbGkuYWN0aXZlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi4oCiXCI7XG4gIGNvbG9yOiAjN2ZhNmVjO1xuICBsZWZ0OiAycmVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNjUlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNjUlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNjUlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC02NSUpO1xuICBwYWRkaW5nLWxlZnQ6IDAuN2VtO1xufVxuLm1lbnUgdWwuYWN0aXZlIGxpOmZpcnN0LWNoaWxkIHtcbiAgcGFkZGluZy10b3A6IDEuNXJlbTtcbn1cbi5tZW51IHVsLmFjdGl2ZSBsaTpsYXN0LWNoaWxkIHtcbiAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcbn1cbi5tZW51ID4gbGkge1xuICBwYWRkaW5nLWxlZnQ6IDRyZW0gIWltcG9ydGFudDtcbn1cbi5tZW51IGxpIHtcbiAgcGFkZGluZzogMC43NXJlbSAycmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWVudSBsaSBpIHtcbiAgQHZlcnRpY2FsLWFsaWduICg1MCUpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogMTgwJTtcbn1cbi5tZW51IGxpIGk6bm90KC5sZWZ0KSB7XG4gIHJpZ2h0OiAxLjVyZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG4ubWVudSBsaSBpOm5vdCgubGVmdCk6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubWVudSBsaSBpLmxlZnQge1xuICBsZWZ0OiAycmVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuLm1lbnUgbGkuZHJvcGRvd24uYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzQ0NDc1MztcbiAgbWFyZ2luLXRvcDogMC43NXJlbTtcbiAgcGFkZGluZzogMS41cmVtIDJyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNvbnRlbnQge1xuICBvcmRlcjogMjtcbiAgZmxleDogMSA2IDc1JTtcbn1cblxuLnByb2ZpbGUtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTtcbiAgdG9wOiAwO1xuICByaWdodDogMS4yNXJlbTtcbiAgd2lkdGg6IDQwMHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogMS4xMjVyZW0gMC43NXJlbSAwLjc1cmVtO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2hhZG93OiAwLjVyZW0gMC41cmVtIDJyZW0gMCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG4ucHJvZmlsZS1jb250YWluZXIgLnVzZXItcGhvdG8ge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIG1hcmdpbjogMCAwLjc1cmVtIDAuNzVyZW0gMDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuLnByb2ZpbGUtY29udGFpbmVyIC51c2VyLWVtYWlsIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ucHJvZmlsZS1jb250YWluZXIgaSB7XG4gIGNvbG9yOiAjYjVjNGQyO1xuICBmb250LXNpemU6IDExMCU7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiAxMjUlO1xufVxuXG5ociB7XG4gIGJvcmRlcjogMDtcbiAgY2xlYXI6IGJvdGg7XG4gIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5zd2l0Y2gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwLjc1cmVtIDAgMDtcbn1cblxuLnN3aXRjaCA+IHNwYW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogOXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xuICB3aWR0aDogNTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlucHV0LmNoZWNrLXRvZ2dsZS1yb3VuZC1mbGF0OmNoZWNrZWQgfiAub2ZmIHtcbiAgY29sb3I6ICM5OGI2ZWM7XG59XG5cbmlucHV0LmNoZWNrLXRvZ2dsZS1yb3VuZC1mbGF0OmNoZWNrZWQgfiAub24ge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnN3aXRjaCA+IHNwYW4ub24ge1xuICBsZWZ0OiAycHg7XG4gIGNvbG9yOiAjOThiNmVjO1xufVxuXG4uc3dpdGNoID4gc3Bhbi5vZmYge1xuICByaWdodDogMnB4O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmNoZWNrLXRvZ2dsZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jaGVjay10b2dnbGUgKyBsYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaW5wdXQuY2hlY2stdG9nZ2xlLXJvdW5kLWZsYXQgKyBsYWJlbCB7XG4gIHdpZHRoOiA5MHB4O1xuICBoZWlnaHQ6IDI2cHg7XG4gIGJhY2tncm91bmQ6ICM3ZmE2ZWM7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuaW5wdXQuY2hlY2stdG9nZ2xlLXJvdW5kLWZsYXQgKyBsYWJlbDpiZWZvcmUsIGlucHV0LmNoZWNrLXRvZ2dsZS1yb3VuZC1mbGF0ICsgbGFiZWw6YWZ0ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xufVxuXG5pbnB1dC5jaGVjay10b2dnbGUtcm91bmQtZmxhdCArIGxhYmVsOmFmdGVyIHtcbiAgdG9wOiAycHg7XG4gIGxlZnQ6IDJweDtcbiAgYm90dG9tOiAycHg7XG4gIHdpZHRoOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHRyYW5zaXRpb246IG1hcmdpbiAwLjJzO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbmlucHV0LmNoZWNrLXRvZ2dsZS1yb3VuZC1mbGF0OmNoZWNrZWQgKyBsYWJlbDphZnRlciB7XG4gIG1hcmdpbi1sZWZ0OiA0MXB4O1xufVxuXG4ubm90aWZpY2F0aW9uLWNvbnRhaW5lciB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTk7XG4gIHRvcDogNTRweDtcbiAgcmlnaHQ6IDhyZW07XG4gIHdpZHRoOiA0MDBweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNoYWRvdzogMC41cmVtIDAuNXJlbSAycmVtIDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBhbmltYXRpb24tbmFtZTogZHJvcFBhbmVsO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBhbGw7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC43NXM7XG59XG5cbm1haW4ucGFnZS1jb250ZW50IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLnByb2ZpbGUtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTtcbiAgdG9wOiA0MnB4O1xuICByaWdodDogMi4yNXJlbTtcbiAgd2lkdGg6IDQwMHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogMS4xMjVyZW0gMC43NXJlbSAwLjc1cmVtO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2hhZG93OiAwLjVyZW0gMC41cmVtIDJyZW0gMCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi5hcHAtaGVhZGVyIHtcbiAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jbG9zZV9idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC01MHB4O1xuICB0b3A6IDE0cHg7XG4gIHBhZGRpbmc6IDlweDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgZm9udC1zaXplOiAzNXB4O1xufVxuXG4ucmVnaXN0ZXJfZm9ybSBwIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5yZWdpc3Rlcl9mb3JtIHA6aG92ZXIge1xuICBjb2xvcjogY29ybmZsb3dlcmJsdWU7XG59XG5cbi5saW5rX2FjdGl2YXRlZCB7XG4gIGJhY2tncm91bmQ6ICNlNWU1ZTUgIWltcG9ydGFudDtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA0MnB4O1xuICB3aWR0aDogNDRweDtcbn0iXX0= */", "#button[_ngcontent-%COMP%] {\n  font-size: 0;\n  width: 42px;\n  height: 42px;\n  box-sizing: border-box;\n  border-radius: 100%;\n  padding: 14px 10px;\n  position: relative;\n  background: #ecf0f1;\n  cursor: pointer;\n}\n\n#button.close[_ngcontent-%COMP%]   .one[_ngcontent-%COMP%] {\n  transform: translate3d(4px, 1px, 0) rotate(45deg);\n  width: 18px;\n}\n\n#button.close[_ngcontent-%COMP%]   .three[_ngcontent-%COMP%] {\n  transform: translate3d(5px, -1px, 0) rotate(-45deg);\n  width: 18px;\n}\n\n#button.close[_ngcontent-%COMP%]   .two[_ngcontent-%COMP%] {\n  width: 0;\n}\n\n#button.close[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%]:before {\n  width: 0;\n  height: 0;\n}\n\n.slider[_ngcontent-%COMP%] {\n  width: 22px;\n  border-radius: 4px;\n  height: 2px;\n  background: #777;\n  position: absolute;\n  transform-origin: 2px 2px;\n  transition: all 500ms cubic-bezier(0, 1, 0, 1);\n}\n\n.slider[_ngcontent-%COMP%]:before {\n  width: 6px;\n  height: 6px;\n  margin-top: -2px;\n  margin-left: -3px;\n  border-radius: 999px;\n  background: #777;\n  display: inline-block;\n  content: \" \";\n  position: absolute;\n  left: 70%;\n  transition: left 140ms cubic-bezier(0, 2, 1, 1);\n}\n\n#button[_ngcontent-%COMP%]:hover   .slider[_ngcontent-%COMP%]:before {\n  left: 30%;\n}\n\n.slider.two[_ngcontent-%COMP%] {\n  margin-top: 6px;\n}\n\n.slider.two[_ngcontent-%COMP%]:before {\n  left: 30%;\n  transition-delay: 55ms;\n}\n\n#button[_ngcontent-%COMP%]:hover   .slider.two[_ngcontent-%COMP%]:before {\n  left: 70%;\n}\n\n.slider.three[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n\n.slider.three[_ngcontent-%COMP%]:before {\n  left: 70%;\n  transition-delay: 110ms;\n}\n\n#button[_ngcontent-%COMP%]:hover   .slider.three[_ngcontent-%COMP%]:before {\n  left: 30%;\n}\n\nbody[_ngcontent-%COMP%], html[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  background: #ccc;\n  text-align: center;\n}\n\n#button[_ngcontent-%COMP%] {\n  top: 50%;\n  left: 50%;\n  position: absolute;\n  margin-left: -21px;\n  margin-top: -21px;\n  position: fixed;\n  bottom: 0px;\n  top: 94%;\n  left: 97%;\n  zoom: 157%;\n}\n\n.settings[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 74%;\n  right: 5%;\n  background: #f8f8fd;\n  width: 22%;\n  height: 17%;\n  padding: 0px !important;\n}\n\n.settings[_ngcontent-%COMP%]   .setting-module[_ngcontent-%COMP%] {\n  padding: 10px;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNldHRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFHQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0ksZUFBQTtBQUNSOztBQUNFO0VBS0UsaURBQUE7RUFDQSxXQUFBO0FBRUo7O0FBQUU7RUFLRSxtREFBQTtFQUNBLFdBQUE7QUFHSjs7QUFERTtFQUNFLFFBQUE7QUFJSjs7QUFGRTtFQUNFLFFBQUE7RUFDQSxTQUFBO0FBS0o7O0FBSEU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUtBLHlCQUFBO0VBS0EsOENBQUE7QUFNSjs7QUFKRTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFLQSwrQ0FBQTtBQU9KOztBQUxFO0VBQ0UsU0FBQTtBQVFKOztBQU5FO0VBQ0UsZUFBQTtBQVNKOztBQVBFO0VBQ0UsU0FBQTtFQUtBLHNCQUFBO0FBVUo7O0FBUkU7RUFDRSxTQUFBO0FBV0o7O0FBVEU7RUFDRSxnQkFBQTtBQVlKOztBQVZFO0VBQ0UsU0FBQTtFQUtBLHVCQUFBO0FBYUo7O0FBWEU7RUFDRSxTQUFBO0FBY0o7O0FBWkU7O0VBRUUsWUFBQTtBQWVKOztBQWJFO0VBQ0UsU0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFnQko7O0FBZEU7RUFDRSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFFQSxVQUFBO0FBZ0JKOztBQVpBO0VBQ0UsZUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNGLHVCQUFBO0FBZUE7O0FBYkU7RUFDRixhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFlQSIsImZpbGUiOiJzZXR0aW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2J1dHRvbiB7XHJcbiAgICBmb250LXNpemU6IDA7XHJcbiAgICB3aWR0aDogNDJweDtcclxuICAgIGhlaWdodDogNDJweDtcclxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTRweCAxMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZDogI2VjZjBmMTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gICNidXR0b24uY2xvc2UgLm9uZSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoNHB4LCAxcHgsIDApIHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoNHB4LCAxcHgsIDApIHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDRweCwgMXB4LCAwKSByb3RhdGUoNDVkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoNHB4LCAxcHgsIDApIHJvdGF0ZSg0NWRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDRweCwgMXB4LCAwKSByb3RhdGUoNDVkZWcpO1xyXG4gICAgd2lkdGg6IDE4cHg7XHJcbiAgfVxyXG4gICNidXR0b24uY2xvc2UgLnRocmVlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg1cHgsIC0xcHgsIDApIHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDVweCwgLTFweCwgMCkgcm90YXRlKC00NWRlZyk7XHJcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDVweCwgLTFweCwgMCkgcm90YXRlKC00NWRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg1cHgsIC0xcHgsIDApIHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg1cHgsIC0xcHgsIDApIHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgd2lkdGg6IDE4cHg7XHJcbiAgfVxyXG4gICNidXR0b24uY2xvc2UgLnR3byB7XHJcbiAgICB3aWR0aDogMDtcclxuICB9XHJcbiAgI2J1dHRvbi5jbG9zZSAuc2xpZGVyOmJlZm9yZSB7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxuICB9XHJcbiAgLnNsaWRlciB7XHJcbiAgICB3aWR0aDogMjJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGhlaWdodDogMnB4O1xyXG4gICAgYmFja2dyb3VuZDogIzc3NztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMnB4IDJweDtcclxuICAgIC1tb3otdHJhbnNmb3JtLW9yaWdpbjogMnB4IDJweDtcclxuICAgIC1vLXRyYW5zZm9ybS1vcmlnaW46IDJweCAycHg7XHJcbiAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogMnB4IDJweDtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDJweCAycHg7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCA1MDBtcyBjdWJpYy1iZXppZXIoMCwgMSwgMCwgMSk7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCA1MDBtcyBjdWJpYy1iZXppZXIoMCwgMSwgMCwgMSk7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgNTAwbXMgY3ViaWMtYmV6aWVyKDAsIDEsIDAsIDEpO1xyXG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCA1MDBtcyBjdWJpYy1iZXppZXIoMCwgMSwgMCwgMSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgY3ViaWMtYmV6aWVyKDAsIDEsIDAsIDEpO1xyXG4gIH1cclxuICAuc2xpZGVyOmJlZm9yZSB7XHJcbiAgICB3aWR0aDogNnB4O1xyXG4gICAgaGVpZ2h0OiA2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0zcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICAgIGJhY2tncm91bmQ6ICM3Nzc7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBjb250ZW50OiAnICc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA3MCU7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGxlZnQgMTQwbXMgY3ViaWMtYmV6aWVyKDAsIDIsIDEsIDEpO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBsZWZ0IDE0MG1zIGN1YmljLWJlemllcigwLCAyLCAxLCAxKTtcclxuICAgIC1vLXRyYW5zaXRpb246IGxlZnQgMTQwbXMgY3ViaWMtYmV6aWVyKDAsIDIsIDEsIDEpO1xyXG4gICAgLW1zLXRyYW5zaXRpb246IGxlZnQgMTQwbXMgY3ViaWMtYmV6aWVyKDAsIDIsIDEsIDEpO1xyXG4gICAgdHJhbnNpdGlvbjogbGVmdCAxNDBtcyBjdWJpYy1iZXppZXIoMCwgMiwgMSwgMSk7XHJcbiAgfVxyXG4gICNidXR0b246aG92ZXIgLnNsaWRlcjpiZWZvcmUge1xyXG4gICAgbGVmdDogMzAlO1xyXG4gIH1cclxuICAuc2xpZGVyLnR3byB7XHJcbiAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgfVxyXG4gIC5zbGlkZXIudHdvOmJlZm9yZSB7XHJcbiAgICBsZWZ0OiAzMCU7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDU1bXM7XHJcbiAgICAtbW96LXRyYW5zaXRpb24tZGVsYXk6IDU1bXM7XHJcbiAgICAtby10cmFuc2l0aW9uLWRlbGF5OiA1NW1zO1xyXG4gICAgLW1zLXRyYW5zaXRpb24tZGVsYXk6IDU1bXM7XHJcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiA1NW1zO1xyXG4gIH1cclxuICAjYnV0dG9uOmhvdmVyIC5zbGlkZXIudHdvOmJlZm9yZSB7XHJcbiAgICBsZWZ0OiA3MCU7XHJcbiAgfVxyXG4gIC5zbGlkZXIudGhyZWUge1xyXG4gICAgbWFyZ2luLXRvcDogMTJweDtcclxuICB9XHJcbiAgLnNsaWRlci50aHJlZTpiZWZvcmUge1xyXG4gICAgbGVmdDogNzAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAxMTBtcztcclxuICAgIC1tb3otdHJhbnNpdGlvbi1kZWxheTogMTEwbXM7XHJcbiAgICAtby10cmFuc2l0aW9uLWRlbGF5OiAxMTBtcztcclxuICAgIC1tcy10cmFuc2l0aW9uLWRlbGF5OiAxMTBtcztcclxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDExMG1zO1xyXG4gIH1cclxuICAjYnV0dG9uOmhvdmVyIC5zbGlkZXIudGhyZWU6YmVmb3JlIHtcclxuICAgIGxlZnQ6IDMwJTtcclxuICB9XHJcbiAgYm9keSxcclxuICBodG1sIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgYm9keSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjY2NjO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAjYnV0dG9uIHtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0yMXB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTIxcHg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIHRvcDogOTQlO1xyXG4gICAgbGVmdDogOTclO1xyXG4gIFxyXG4gICAgem9vbTogMTU3JTtcclxuICB9XHJcblxyXG5cclxuLnNldHRpbmdze1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDc0JTtcclxuICByaWdodDogNSU7XHJcbiAgYmFja2dyb3VuZDogI2Y4ZjhmZDtcclxuICB3aWR0aDogMjIlO1xyXG4gIGhlaWdodDogMTclO1xyXG5wYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuXHJcbiAgLnNldHRpbmctbW9kdWxle1xyXG5wYWRkaW5nOiAxMHB4OyBcclxud2lkdGg6IDEwMCU7XHJcbmhlaWdodDogMTAwJTsgfVxyXG59Il19 */", ".app-sidebar[_ngcontent-%COMP%] {\n  padding: 40px 16px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex-direction: revert;\n  width: 100%;\n  justify-content: space-evenly;\n  background: #ffff;\n  \n  margin: auto;\n  height: 87px;\n}\n.app-sidebar-link[_ngcontent-%COMP%] {\n  color: var(--main-color);\n  color: var(--link-color);\n  margin: 16px 0;\n  transition: 0.2s;\n  border-radius: 50%;\n  flex-shrink: 0;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.app-sidebar-link[_ngcontent-%COMP%]:hover {\n  background-color: var(--link-color-hover);\n  color: var(--link-color-active);\n}\n.app-sidebar-link.active[_ngcontent-%COMP%] {\n  background-color: var(--link-color-active-bg);\n  color: var(--link-color-active);\n}\n.down[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ddd;\n  padding: 0px;\n  transition: 1s;\n  overflow: visible;\n}\n.down_nav[_ngcontent-%COMP%] {\n  overflow: hidden;\n  height: 9%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxlZnRtZW51LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFDSjtBQUNJO0VBQ0Usd0JBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDTjtBQUNNO0VBQ0UseUNBQUE7RUFDQSwrQkFBQTtBQUNSO0FBRU07RUFDRSw2Q0FBQTtFQUNBLCtCQUFBO0FBQVI7QUFJRTtFQUNFLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDSCxpQkFBQTtBQUREO0FBR0E7RUFDQyxnQkFBQTtFQUNBLFVBQUE7QUFBRCIsImZpbGUiOiJsZWZ0bWVudS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1zaWRlYmFyIHtcclxuICAgIHBhZGRpbmc6IDQwcHggMTZweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByZXZlcnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmY7XHJcbiAgICAvKiB3aWR0aDogNDAlOyAqL1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiA4N3B4O1xyXG4gICAgXHJcbiAgICAmLWxpbmsge1xyXG4gICAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1saW5rLWNvbG9yKTtcclxuICAgICAgbWFyZ2luOiAxNnB4IDA7XHJcbiAgICAgIHRyYW5zaXRpb246IC4ycztcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBmbGV4LXNocmluazogMDtcclxuICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIFxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saW5rLWNvbG9yLWhvdmVyKTtcclxuICAgICAgICBjb2xvcjogdmFyKC0tbGluay1jb2xvci1hY3RpdmUpO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saW5rLWNvbG9yLWFjdGl2ZS1iZyk7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWxpbmstY29sb3ItYWN0aXZlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuZG93bntcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogMXM7XHJcblx0b3ZlcmZsb3c6IHZpc2libGU7XHJcbn1cclxuLmRvd25fbmF2e1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0aGVpZ2h0OiA5JTtcclxufSJdfQ== */", "@import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap\");\n@import url(https://weloveiconfonts.com/api/?family=fontawesome);\n@import url(https://meyerweb.com/eric/tools/css/reset/reset.css);\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:after, *[_ngcontent-%COMP%]:before {\n  box-sizing: border-box;\n}\n[_ngcontent-%COMP%]:root {\n  --c-text-primary: #191919;\n  --c-text-secondary: #737374;\n  --c-border-primary: #ccc;\n  --c-bg-body: #ccc;\n  --c-bg-primary: #fff;\n  --c-bg-secondary: #d4d8dd;\n  --c-bg-button: #fff;\n  --slider-shadow: inset 0 1px 1px #ddd, 0 2px 3px #ccc;\n}\n[_ngcontent-%COMP%]:root.dark-theme {\n  --c-text-primary: #eee;\n  --c-text-secondary: #d3d5db;\n  --c-border-primary: #454545;\n  --c-bg-primary: #323339;\n  --c-bg-secondary: #222128;\n  --c-bg-button: #494a50;\n  --slider-shadow: inset 0 1px 1px #767676;\n}\n[_ngcontent-%COMP%]:root.black-theme {\n  --c-text-primary: #edeeef;\n  --c-text-secondary: #d4d7e1;\n  --c-border-primary: #323232;\n  --c-bg-primary: #1b1d23;\n  --c-bg-secondary: #000001;\n  --c-bg-button: #343844;\n  --slider-shadow: inset 0 1px 1px #555;\n}\n.menu[_ngcontent-%COMP%] {\n  width: 90%;\n  max-width: 320px;\n  background-color: var(--c-bg-primary);\n  transition: background-color 0.15s ease;\n  border-radius: 10px 10px 0 0;\n  box-shadow: 0 0 2px rgba(0, 0, 0, 0.05), 0 -4px 16px rgba(0, 0, 0, 0.1);\n  position: fixed;\n  top: 137px;\n  right: 50px;\n  background: #fff;\n  display: none;\n}\n.menu-header[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.menu-header-title[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--c-text-secondary);\n  margin-bottom: 0.375rem;\n  font-weight: 500;\n}\n.theme-switcher[_ngcontent-%COMP%] {\n  background-color: var(--c-bg-secondary);\n  border-radius: 10px;\n  display: flex;\n  padding: 0 3px;\n  align-items: center;\n  position: relative;\n  overflow: hidden;\n}\n.theme-switcher[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%] {\n  display: block;\n  position: absolute;\n  z-index: 1;\n  width: calc((100% - 6px) / 3);\n  top: 3px;\n  transform: translatex(-110%);\n  bottom: 3px;\n  border-radius: 6px;\n  transition: 0.15s ease, transform 0.25s ease-out;\n  background-color: var(--c-bg-button);\n  box-shadow: var(--slider-shadow);\n}\n.theme-switcher[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n.theme-switcher[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:nth-of-type(1):checked    ~ .slider[_ngcontent-%COMP%] {\n  transform: translateX(0);\n}\n.theme-switcher[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:nth-of-type(2):checked    ~ .slider[_ngcontent-%COMP%] {\n  transform: translateX(100%);\n}\n.theme-switcher[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:nth-of-type(3):checked    ~ .slider[_ngcontent-%COMP%] {\n  transform: translateX(200%);\n}\n.theme-switcher[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  width: calc(100% / 3);\n  color: var(--c-text-secondary);\n}\n.theme-switcher[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 8px 0;\n  border-radius: 6px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 500;\n}\n.theme-switcher[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 0.5rem;\n  width: 20px;\n}\n.menu-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 0.5rem;\n  border-top: 1px solid var(--c-border-primary);\n  transition: border-color 0.15s ease;\n}\n.menu-body[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: inherit;\n  display: flex;\n  align-items: center;\n  padding: 0.625rem 0.5rem;\n  border-radius: 4px;\n  font-weight: 500;\n  transition: 0.15s ease;\n}\n.menu-body[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n  color: var(--c-text-secondary);\n  transition: color 0.15s ease;\n}\n.menu-body[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: var(--c-bg-secondary);\n}\n\n\n\n\n\n\n[class*=fontawesome-][_ngcontent-%COMP%]:before {\n  font-family: \"FontAwesome\", sans-serif;\n}\n\nbody[_ngcontent-%COMP%] {\n  background: #f4f4f4;\n  color: #5a5656;\n  display: grid;\n  font-family: \"Open Sans\", sans-serif;\n  line-height: 1.5;\n  margin: 0;\n  min-height: 100vh;\n  place-items: center;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 1em;\n}\nh1[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\nstrong[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.uppercase[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n\n#login[_ngcontent-%COMP%] {\n  margin: 50px auto;\n  width: 300px;\n}\nform[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  background: #e5e5e5;\n  border: none;\n  border-radius: 3px;\n  color: #5a5656;\n  font-family: inherit;\n  font-size: 14px;\n  height: 50px;\n  outline: none;\n  padding: 0px 10px;\n  width: 280px;\n}\nform[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  background-color: #008dde;\n  border: none;\n  border-radius: 3px;\n  color: #f4f4f4;\n  cursor: pointer;\n  font-family: inherit;\n  height: 50px;\n  text-transform: uppercase;\n  width: 300px;\n}\nform[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #5a5656;\n  font-size: 10px;\n}\nform[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.btn-round[_ngcontent-%COMP%] {\n  background: #5a5656;\n  border-radius: 50%;\n  color: #f4f4f4;\n  display: block;\n  font-size: 12px;\n  height: 50px;\n  line-height: 50px;\n  margin: 30px 125px;\n  text-align: center;\n  text-transform: uppercase;\n  width: 50px;\n}\n.facebook-before[_ngcontent-%COMP%] {\n  background: #0064ab;\n  border-radius: 3px 0px 0px 3px;\n  color: #f4f4f4;\n  display: block;\n  float: left;\n  height: 50px;\n  line-height: 50px;\n  text-align: center;\n  width: 50px;\n}\n.facebook[_ngcontent-%COMP%] {\n  background: #0079ce;\n  border: none;\n  border-radius: 0px 3px 3px 0px;\n  color: #f4f4f4;\n  cursor: pointer;\n  height: 50px;\n  text-transform: uppercase;\n  width: 250px;\n}\n.twitter-before[_ngcontent-%COMP%] {\n  background: #189bcb;\n  border-radius: 3px 0px 0px 3px;\n  color: #f4f4f4;\n  display: block;\n  float: left;\n  height: 50px;\n  line-height: 50px;\n  text-align: center;\n  width: 50px;\n}\n.twitter[_ngcontent-%COMP%] {\n  background: #1bb2e9;\n  border: none;\n  border-radius: 0px 3px 3px 0px;\n  color: #f4f4f4;\n  cursor: pointer;\n  height: 50px;\n  text-transform: uppercase;\n  width: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG1lbnUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSwyR0FBQTtBQWtLQSxnRUFBQTtBQUtBLGdFQUFBO0FBcktSOzs7RUFHQyxzQkFBQTtBQUVEO0FBQ0E7RUFDQyx5QkFBQTtFQUNBLDJCQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFEQUFBO0FBRUQ7QUFBQztFQUNDLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHdDQUFBO0FBRUY7QUFDQztFQUNDLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFDQUFBO0FBQ0Y7QUFLQTtFQUNDLFVBQUE7RUFDQSxnQkFBQTtFQUNBLHFDQUFBO0VBQ0EsdUNBQUE7RUFDQSw0QkFBQTtFQUNBLHVFQUFBO0VBQ0csZUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBRko7QUFLQTtFQUNDLGFBQUE7QUFGRDtBQUtBO0VBQ0MsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFGRDtBQUtBO0VBQ0MsdUNBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBRkQ7QUFHQztFQUNDLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSw2QkFBQTtFQUNBLFFBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdEQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQ0FBQTtBQURGO0FBSUM7RUFDQyxhQUFBO0FBRkY7QUFJRTtFQUNDLHdCQUFBO0FBRkg7QUFLRTtFQUNDLDJCQUFBO0FBSEg7QUFNRTtFQUNDLDJCQUFBO0FBSkg7QUFPQztFQUNDLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0VBQ0EsOEJBQUE7QUFMRjtBQU9FO0VBQ0MsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUxIO0FBUUU7RUFDQyxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtBQU5IO0FBV0E7RUFDQyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsNkNBQUE7RUFDQSxtQ0FBQTtBQVJEO0FBVUM7RUFDQyxxQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQVJGO0FBU0U7RUFDQyxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsNEJBQUE7QUFQSDtBQVVFO0VBQ0MsdUNBQUE7QUFSSDtBQWlCQSxzQ0FBQTtBQUNBLHVFQUFBO0FBQ0Esc0RBQUE7QUFJQSxpREFBQTtBQUNBLHFFQUFBO0FBSUEsc0NBQUE7QUFFQTtFQUNFLHNDQUFBO0FBckJGO0FBd0JBLGtDQUFBO0FBRUE7RUFDQyxtQkFBQTtFQUNBLGNBQUE7RUFDQyxhQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBdEJGO0FBeUJBO0VBQUkscUJBQUE7QUFyQko7QUF1QkE7RUFBSyxjQUFBO0FBbkJMO0FBcUJBO0VBQ0MsbUJBQUE7QUFsQkQ7QUFxQkE7RUFDQyxpQkFBQTtBQWxCRDtBQXFCQTtFQUFhLHlCQUFBO0FBakJiO0FBbUJBLGdDQUFBO0FBRUE7RUFDQyxpQkFBQTtFQUNBLFlBQUE7QUFqQkQ7QUFvQkE7O0VBRUUsd0JBQUE7S0FBQSxxQkFBQTtVQUFBLGdCQUFBO0VBQ0QsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFqQkQ7QUFvQkE7RUFDRSx3QkFBQTtLQUFBLHFCQUFBO1VBQUEsZ0JBQUE7RUFDRCx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBakJEO0FBb0JBO0VBQ0MsY0FBQTtFQUNBLGVBQUE7QUFqQkQ7QUFvQkE7RUFBd0IsMEJBQUE7QUFoQnhCO0FBa0JBO0VBQ0MsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUFmRDtBQWtCQTtFQUNDLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFmRDtBQWtCQTtFQUNDLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBZkQ7QUFrQkE7RUFDQyxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBZkQ7QUFtQkE7RUFDQyxtQkFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQWhCRCIsImZpbGUiOiJtZW51LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW50ZXI6d2dodEAzMDA7NDAwOzUwMDs2MDA7NzAwOzgwMDs5MDAmZGlzcGxheT1zd2FwXCIpO1xyXG5cclxuKixcclxuKjphZnRlcixcclxuKjpiZWZvcmUge1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbjpyb290IHtcclxuXHQtLWMtdGV4dC1wcmltYXJ5OiAjMTkxOTE5O1xyXG5cdC0tYy10ZXh0LXNlY29uZGFyeTogIzczNzM3NDtcclxuXHQtLWMtYm9yZGVyLXByaW1hcnk6ICNjY2M7XHJcblx0LS1jLWJnLWJvZHk6ICNjY2M7XHJcblx0LS1jLWJnLXByaW1hcnk6ICNmZmY7XHJcblx0LS1jLWJnLXNlY29uZGFyeTogI2Q0ZDhkZDtcclxuXHQtLWMtYmctYnV0dG9uOiAjZmZmO1xyXG5cdC0tc2xpZGVyLXNoYWRvdzogaW5zZXQgMCAxcHggMXB4ICNkZGQsIDAgMnB4IDNweCAjY2NjO1xyXG5cclxuXHQmLmRhcmstdGhlbWUge1xyXG5cdFx0LS1jLXRleHQtcHJpbWFyeTogI2VlZTtcclxuXHRcdC0tYy10ZXh0LXNlY29uZGFyeTogI2QzZDVkYjtcclxuXHRcdC0tYy1ib3JkZXItcHJpbWFyeTogIzQ1NDU0NTtcclxuXHRcdC0tYy1iZy1wcmltYXJ5OiAjMzIzMzM5O1xyXG5cdFx0LS1jLWJnLXNlY29uZGFyeTogIzIyMjEyODtcclxuXHRcdC0tYy1iZy1idXR0b246ICM0OTRhNTA7XHJcblx0XHQtLXNsaWRlci1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCAjNzY3Njc2O1xyXG5cdH1cclxuXHJcblx0Ji5ibGFjay10aGVtZSB7XHJcblx0XHQtLWMtdGV4dC1wcmltYXJ5OiAjZWRlZWVmO1xyXG5cdFx0LS1jLXRleHQtc2Vjb25kYXJ5OiAjZDRkN2UxO1xyXG5cdFx0LS1jLWJvcmRlci1wcmltYXJ5OiAjMzIzMjMyO1xyXG5cdFx0LS1jLWJnLXByaW1hcnk6ICMxYjFkMjM7XHJcblx0XHQtLWMtYmctc2Vjb25kYXJ5OiAjMDAwMDAxO1xyXG5cdFx0LS1jLWJnLWJ1dHRvbjogIzM0Mzg0NDtcclxuXHRcdC0tc2xpZGVyLXNoYWRvdzogaW5zZXQgMCAxcHggMXB4ICM1NTU7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi5tZW51IHtcclxuXHR3aWR0aDogOTAlO1xyXG5cdG1heC13aWR0aDogMzIwcHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYy1iZy1wcmltYXJ5KTtcclxuXHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2U7XHJcblx0Ym9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcclxuXHRib3gtc2hhZG93OiAwIDAgMnB4IHJnYmEoIzAwMCwgMC4wNSksIDAgLTRweCAxNnB4IHJnYmEoIzAwMCwgMC4xKTs7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDEzN3B4O1xyXG4gICAgcmlnaHQ6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLm1lbnUtaGVhZGVyIHtcclxuXHRwYWRkaW5nOiAxcmVtO1xyXG59XHJcblxyXG4ubWVudS1oZWFkZXItdGl0bGUge1xyXG5cdGZvbnQtc2l6ZTogMC44NzVyZW07XHJcblx0Y29sb3I6IHZhcigtLWMtdGV4dC1zZWNvbmRhcnkpO1xyXG5cdG1hcmdpbi1ib3R0b206IDAuMzc1cmVtO1xyXG5cdGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi50aGVtZS1zd2l0Y2hlciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYy1iZy1zZWNvbmRhcnkpO1xyXG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRwYWRkaW5nOiAwIDNweDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdC5zbGlkZXIge1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR6LWluZGV4OiAxO1xyXG5cdFx0d2lkdGg6IGNhbGMoKDEwMCUgLSA2cHgpIC8gMyk7XHJcblx0XHR0b3A6IDNweDtcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRleCgtMTEwJSk7XHJcblx0XHRib3R0b206IDNweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDZweDtcclxuXHRcdHRyYW5zaXRpb246IDAuMTVzIGVhc2UsIHRyYW5zZm9ybSAwLjI1cyBlYXNlLW91dDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWMtYmctYnV0dG9uKTtcclxuXHRcdGJveC1zaGFkb3c6IHZhcigtLXNsaWRlci1zaGFkb3cpO1xyXG5cdH1cclxuXHJcblx0aW5wdXQge1xyXG5cdFx0ZGlzcGxheTogbm9uZTtcclxuXHJcblx0XHQmOm50aC1vZi10eXBlKDEpOmNoZWNrZWQgfiAuc2xpZGVyIHtcclxuXHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG5cdFx0fVxyXG5cclxuXHRcdCY6bnRoLW9mLXR5cGUoMik6Y2hlY2tlZCB+IC5zbGlkZXIge1xyXG5cdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcblx0XHR9XHJcblxyXG5cdFx0JjpudGgtb2YtdHlwZSgzKTpjaGVja2VkIH4gLnNsaWRlciB7XHJcblx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMDAlKTtcclxuXHRcdH1cclxuXHR9XHJcblx0bGFiZWwge1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0ei1pbmRleDogMjtcclxuXHRcdHdpZHRoOiBjYWxjKDEwMCUgLyAzKTtcclxuXHRcdGNvbG9yOiB2YXIoLS1jLXRleHQtc2Vjb25kYXJ5KTtcclxuXHJcblx0XHRzcGFuIHtcclxuXHRcdFx0cGFkZGluZzogOHB4IDA7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6IDZweDtcclxuXHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0XHR9XHJcblxyXG5cdFx0c3ZnIHtcclxuXHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdFx0XHRtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxuXHRcdFx0d2lkdGg6IDIwcHg7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4ubWVudS1ib2R5IHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0cGFkZGluZzogMC41cmVtO1xyXG5cdGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1jLWJvcmRlci1wcmltYXJ5KTtcclxuXHR0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4xNXMgZWFzZTtcclxuXHJcblx0YSB7XHJcblx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0XHRjb2xvcjogaW5oZXJpdDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0cGFkZGluZzogMC42MjVyZW0gMC41cmVtO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRcdHRyYW5zaXRpb246IDAuMTVzIGVhc2U7XHJcblx0XHRzdmcge1xyXG5cdFx0XHRtYXJnaW4tcmlnaHQ6IDFyZW07XHJcblx0XHRcdGNvbG9yOiB2YXIoLS1jLXRleHQtc2Vjb25kYXJ5KTtcclxuXHRcdFx0dHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZTtcclxuXHRcdH1cclxuXHJcblx0XHQmOmhvdmVyIHtcclxuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYy1iZy1zZWNvbmRhcnkpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuXHJcbi8vIGxvZ2luIHdpdGggXHJcbi8vIEB1c2UgcG9zdGNzcy1wcmVzZXQtZW52O1xyXG5cclxuLyogLS0tLS0tLS0tLSBGT05UQVdFU09NRSAtLS0tLS0tLS0tICovXHJcbi8qIC0tLS0tLS0tLS0gaHR0cHM6Ly9mb3J0YXdlc29tZS5naXRodWIuY29tL0ZvbnQtQXdlc29tZS8gLS0tLS0tLS0tLSAqL1xyXG4vKiAtLS0tLS0tLS0tIGh0dHA6Ly93ZWxvdmVpY29uZm9udHMuY29tLyAtLS0tLS0tLS0tICovXHJcblxyXG5AaW1wb3J0IHVybChodHRwczovL3dlbG92ZWljb25mb250cy5jb20vYXBpLz9mYW1pbHk9Zm9udGF3ZXNvbWUpO1xyXG5cclxuLyogLS0tLS0tLS0tLSBFUklDIE1FWUVSJ1MgUkVTRVQgQ1NTIC0tLS0tLS0tLS0gKi9cclxuLyogLS0tLS0tLS0tLSBodHRwczovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gLS0tLS0tLS0tLSAqL1xyXG5cclxuQGltcG9ydCB1cmwoaHR0cHM6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvcmVzZXQuY3NzKTtcclxuXHJcbi8qIC0tLS0tLS0tLS0gRk9OVEFXRVNPTUUgLS0tLS0tLS0tLSAqL1xyXG5cclxuW2NsYXNzKj1cImZvbnRhd2Vzb21lLVwiXTpiZWZvcmUge1xyXG4gIGZvbnQtZmFtaWx5OiAnRm9udEF3ZXNvbWUnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4vKiAtLS0tLS0tLS0tIEdFTkVSQUwgLS0tLS0tLS0tLSAqL1xyXG5cclxuYm9keSB7XHJcblx0YmFja2dyb3VuZDogI2Y0ZjRmNDtcclxuXHRjb2xvcjogIzVhNTY1NjtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIG1hcmdpbjogMDtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5hIHsgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XHJcblxyXG5oMSB7IGZvbnQtc2l6ZTogMWVtOyB9XHJcblxyXG5oMSwgcCB7XHJcblx0bWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuc3Ryb25nIHtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnVwcGVyY2FzZSB7IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cclxuXHJcbi8qIC0tLS0tLS0tLS0gTE9HSU4gLS0tLS0tLS0tLSAqL1xyXG5cclxuI2xvZ2luIHtcclxuXHRtYXJnaW46IDUwcHggYXV0bztcclxuXHR3aWR0aDogMzAwcHg7XHJcbn1cclxuXHJcbmZvcm0gZmllbGRzZXQgaW5wdXRbdHlwZT1cInRleHRcIl0sXHJcbmlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSB7XHJcbiAgYXBwZWFyYW5jZTogbm9uZTtcclxuXHRiYWNrZ3JvdW5kOiAjZTVlNWU1O1xyXG5cdGJvcmRlcjogbm9uZTtcclxuXHRib3JkZXItcmFkaXVzOiAzcHg7XHJcblx0Y29sb3I6ICM1YTU2NTY7XHJcblx0Zm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdGhlaWdodDogNTBweDtcclxuXHRvdXRsaW5lOiBub25lO1xyXG5cdHBhZGRpbmc6IDBweCAxMHB4O1xyXG5cdHdpZHRoOiAyODBweDtcclxufVxyXG5cclxuZm9ybSBmaWVsZHNldCBpbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcclxuICBhcHBlYXJhbmNlOiBub25lO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMwMDhkZGU7XHJcblx0Ym9yZGVyOiBub25lO1xyXG5cdGJvcmRlci1yYWRpdXM6IDNweDtcclxuXHRjb2xvcjogI2Y0ZjRmNDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0Zm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcblx0aGVpZ2h0OiA1MHB4O1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0d2lkdGg6IDMwMHB4O1xyXG59XHJcblxyXG5mb3JtIGZpZWxkc2V0IGEge1xyXG5cdGNvbG9yOiAjNWE1NjU2O1xyXG5cdGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG5cclxuZm9ybSBmaWVsZHNldCBhOmhvdmVyIHsgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IH1cclxuXHJcbi5idG4tcm91bmQge1xyXG5cdGJhY2tncm91bmQ6ICM1YTU2NTY7XHJcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdGNvbG9yOiAjZjRmNGY0O1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdGZvbnQtc2l6ZTogMTJweDtcclxuXHRoZWlnaHQ6IDUwcHg7XHJcblx0bGluZS1oZWlnaHQ6IDUwcHg7XHJcblx0bWFyZ2luOiAzMHB4IDEyNXB4O1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdHdpZHRoOiA1MHB4O1xyXG59XHJcblxyXG4uZmFjZWJvb2stYmVmb3JlIHtcclxuXHRiYWNrZ3JvdW5kOiAjMDA2NGFiO1xyXG5cdGJvcmRlci1yYWRpdXM6IDNweCAwcHggMHB4IDNweDtcclxuXHRjb2xvcjogI2Y0ZjRmNDtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRmbG9hdDogbGVmdDtcclxuXHRoZWlnaHQ6IDUwcHg7XHJcblx0bGluZS1oZWlnaHQ6IDUwcHg7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdHdpZHRoOiA1MHB4O1xyXG59XHJcblxyXG4uZmFjZWJvb2sge1xyXG5cdGJhY2tncm91bmQ6ICMwMDc5Y2U7XHJcblx0Ym9yZGVyOiBub25lO1xyXG5cdGJvcmRlci1yYWRpdXM6IDBweCAzcHggM3B4IDBweDtcclxuXHRjb2xvcjogI2Y0ZjRmNDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0aGVpZ2h0OiA1MHB4O1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0d2lkdGg6IDI1MHB4O1xyXG59XHJcblxyXG4udHdpdHRlci1iZWZvcmUge1xyXG5cdGJhY2tncm91bmQ6ICMxODliY2I7XHJcblx0Ym9yZGVyLXJhZGl1czogM3B4IDBweCAwcHggM3B4O1xyXG5cdGNvbG9yOiAjZjRmNGY0O1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdGZsb2F0OiBsZWZ0O1xyXG5cdGhlaWdodDogNTBweDtcclxuXHRsaW5lLWhlaWdodDogNTBweDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0d2lkdGg6IDUwcHg7XHJcbn1cclxuXHJcblxyXG4udHdpdHRlciB7XHJcblx0YmFja2dyb3VuZDogIzFiYjJlOTtcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0Ym9yZGVyLXJhZGl1czogMHB4IDNweCAzcHggMHB4O1xyXG5cdGNvbG9yOiAjZjRmNGY0O1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRoZWlnaHQ6IDUwcHg7XHJcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHR3aWR0aDogMjUwcHg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\projects\updating task manger with effects\src\main.ts */"zUnb");


/***/ }),

/***/ "2DKC":
/*!************************************************************!*\
  !*** ./src/app/tasks/tasks-start/tasks-start.component.ts ***!
  \************************************************************/
/*! exports provided: TasksStartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksStartComponent", function() { return TasksStartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class TasksStartComponent {
    constructor() { }
    ngOnInit() {
    }
}
TasksStartComponent.ɵfac = function TasksStartComponent_Factory(t) { return new (t || TasksStartComponent)(); };
TasksStartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TasksStartComponent, selectors: [["app-tasks-start"]], decls: 1, vars: 0, template: function TasksStartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-task-preview-dialog");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YXNrcy1zdGFydC5jb21wb25lbnQuc2NzcyJ9 */", ".brogress[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 10px;\n  width: 90%;\n  border: 1px solid #ddd;\n  margin: 20px;\n  color: #9c9c9cdd;\n  margin: auto;\n}\n\n.TaskInfo[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 10px;\n  width: 32%;\n  border: 1px solid #ddd;\n  margin: 20px;\n  color: #9c9c9cdd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0YXNrLXN0YXJ0LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFDSiIsImZpbGUiOiJ0YXNrLXN0YXJ0LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnJvZ3Jlc3N7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgY29sb3I6ICM5YzljOWNkZDtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLlRhc2tJbmZve1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB3aWR0aDogMzIlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIGNvbG9yOiAjOWM5YzljZGQ7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "4wLV":
/*!***********************************************!*\
  !*** ./src/app/user-page/userpage.service.ts ***!
  \***********************************************/
/*! exports provided: getUserInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserInfo", function() { return getUserInfo; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class getUserInfo {
    constructor() {
        this.userI = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    get() {
        return this.userI;
    }
}
getUserInfo.ɵfac = function getUserInfo_Factory(t) { return new (t || getUserInfo)(); };
getUserInfo.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: getUserInfo, factory: getUserInfo.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "5M5s":
/*!****************************************************!*\
  !*** ./src/app/user-page/email/email.component.ts ***!
  \****************************************************/
/*! exports provided: EmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailComponent", function() { return EmailComponent; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class EmailComponent {
    constructor() {
        jquery__WEBPACK_IMPORTED_MODULE_0__("#name").keyup(function () {
            jquery__WEBPACK_IMPORTED_MODULE_0__(".name").addClass("typing");
            if (jquery__WEBPACK_IMPORTED_MODULE_0__(this).val().length == 0) {
                jquery__WEBPACK_IMPORTED_MODULE_0__(".name").removeClass("typing");
            }
        });
        jquery__WEBPACK_IMPORTED_MODULE_0__("#email").keyup(function () {
            jquery__WEBPACK_IMPORTED_MODULE_0__(".email").addClass("typing");
            if (jquery__WEBPACK_IMPORTED_MODULE_0__(this).val().length == 0) {
                jquery__WEBPACK_IMPORTED_MODULE_0__(".email").removeClass("typing");
            }
        });
        jquery__WEBPACK_IMPORTED_MODULE_0__("#message").keyup(function () {
            jquery__WEBPACK_IMPORTED_MODULE_0__(".message").addClass("typing");
            if (jquery__WEBPACK_IMPORTED_MODULE_0__(this).val().length == 0) {
                jquery__WEBPACK_IMPORTED_MODULE_0__(".message").removeClass("typing");
            }
        });
    }
    ngOnInit() {
    }
}
EmailComponent.ɵfac = function EmailComponent_Factory(t) { return new (t || EmailComponent)(); };
EmailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EmailComponent, selectors: [["app-email"]], decls: 18, vars: 0, consts: [[1, "conta"], [1, "contact-form"], [1, "name"], ["for", "name"], ["type", "text", "id", "name"], [1, "email"], ["for", "email"], ["type", "text", "id", "email"], [1, "message"], ["for", "message"], ["name", "message", "id", "message"], [1, "submit"], [1, "user-message"], ["type", "submit", "value", "Send", 1, "button"]], template: function EmailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Full Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "textarea", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Message to the user.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]], styles: ["@import url(https://fonts.googleapis.com/css?family=Roboto:400,700);\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\nbody[_ngcontent-%COMP%] {\n  background: #cbd0d3;\n  color: #1a1a1a;\n  font-family: \"Roboto\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 13px;\n  font-weight: 400;\n}\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  resize: none;\n  width: 100%;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n}\nlabel[_ngcontent-%COMP%]:hover {\n  cursor: text;\n}\n.credit[_ngcontent-%COMP%] {\n  bottom: 40px;\n  color: #949ea4;\n  font-size: 12px;\n  left: 0;\n  position: absolute;\n  right: 0;\n  text-align: center;\n  z-index: 99;\n}\n.credit[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #6c7880;\n  text-decoration: none;\n}\n.credit[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #1a1a1a;\n}\n.credit[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active {\n  color: #343434;\n}\n.mat-dialog-container[_ngcontent-%COMP%] {\n  padding: 0pc !important;\n}\n.contact-form[_ngcontent-%COMP%] {\n  background: #ffffff;\n  overflow: hidden;\n  border-radius: 5px;\n  box-shadow: rgba(26, 26, 26, 0.1) 0 1px 3px 0;\n}\n@media (max-width: 500px) {\n  .contact-form[_ngcontent-%COMP%] {\n    margin: 0 0 100px;\n    width: 100%;\n  }\n}\n.contact-form[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%], .contact-form[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%], .contact-form[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  position: relative;\n}\n.contact-form[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .contact-form[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus, .contact-form[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .contact-form[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus, .contact-form[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .contact-form[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  background: #f4f5f6;\n}\n.contact-form[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .contact-form[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .contact-form[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #cbd0d3;\n  left: 23px;\n  position: absolute;\n  top: 23px;\n  transition: all, 150ms;\n}\n.contact-form[_ngcontent-%COMP%]   .email.typing[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .contact-form[_ngcontent-%COMP%]   .message.typing[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .contact-form[_ngcontent-%COMP%]   .name.typing[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #3498db;\n  font-size: 10px;\n  top: 7px;\n}\n.contact-form[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%], .contact-form[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  width: calc(50% - 1px);\n}\n@media (max-width: 500px) {\n  .contact-form[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%], .contact-form[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.contact-form[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .contact-form[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 23px 0 8px 23px;\n}\n.contact-form[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%] {\n  border-left: 1px #e6e6e6 solid;\n  float: right;\n}\n@media (max-width: 500px) {\n  .contact-form[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%] {\n    border-left: none;\n    border-top: 1px #e6e6e6 solid;\n  }\n}\n.contact-form[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n  border-bottom: 1px #e6e6e6 solid;\n  border-top: 1px #e6e6e6 solid;\n  clear: both;\n}\n.contact-form[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  height: 200px;\n  padding: 23px;\n}\n.contact-form[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  float: left;\n}\n.contact-form[_ngcontent-%COMP%]   .submit[_ngcontent-%COMP%] {\n  background: #f4f5f6;\n  display: block;\n  overflow: hidden;\n  padding: 23px;\n}\n.contact-form[_ngcontent-%COMP%]   .submit[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  background: #3498db;\n  border: 1px #3498db solid;\n  color: #ffffff;\n  float: right;\n  padding: 9px 0;\n  width: 100px;\n  border-radius: 5px;\n}\n@media (max-width: 500px) {\n  .contact-form[_ngcontent-%COMP%]   .submit[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n    float: none;\n  }\n}\n.contact-form[_ngcontent-%COMP%]   .submit[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]:hover {\n  background: #4aa3df;\n}\n.contact-form[_ngcontent-%COMP%]   .submit[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]:active {\n  background: #258cd1;\n}\n.contact-form[_ngcontent-%COMP%]   .submit[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]:focus {\n  border-color: #b6daf2;\n  box-shadow: #75b9e7 0 0 4px 1px, #75b9e7 0 0 4px 1px inset;\n}\n.contact-form[_ngcontent-%COMP%]   .submit[_ngcontent-%COMP%]   .user-message[_ngcontent-%COMP%] {\n  float: left;\n  padding-top: 22px;\n}\n@media (max-width: 500px) {\n  .contact-form[_ngcontent-%COMP%]   .submit[_ngcontent-%COMP%]   .user-message[_ngcontent-%COMP%] {\n    float: none;\n    padding: 0 0 10px;\n  }\n}\n.contact-form[_ngcontent-mde-c161][_ngcontent-%COMP%] {\n  max-width: 500px;\n  overflow: hidden;\n  border-radius: 5px;\n}\n.conta[_ngcontent-%COMP%] {\n  padding: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxlbWFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxtRUFBQTtBQUNSO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUFDRjtBQUVBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EscUVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFDRjtBQUVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7QUFDRjtBQUVBO0VBQ0UsWUFBQTtBQUNGO0FBRUE7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBQ0Y7QUFDQTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBQUVGO0FBQUE7RUFDRSxjQUFBO0FBR0Y7QUFEQTtFQUNFLGNBQUE7QUFJRjtBQUZBO0VBQ0ksdUJBQUE7QUFLSjtBQUhBO0VBQ0UsbUJBQUE7RUFFQSxnQkFBQTtFQUdBLGtCQUFBO0VBR0EsNkNBQUE7QUFLRjtBQUhBO0VBQ0U7SUFDRSxpQkFBQTtJQUNBLFdBQUE7RUFNRjtBQUNGO0FBSkE7RUFDRSxrQkFBQTtBQU1GO0FBSkE7RUFDRSxtQkFBQTtBQU9GO0FBTEE7RUFDRSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUlBLHNCQUFBO0FBUUY7QUFOQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtBQVNGO0FBUEE7RUFDRSxzQkFBQTtBQVVGO0FBUkE7RUFDRTtJQUNFLFdBQUE7RUFXRjtBQUNGO0FBVEE7RUFDRSx3QkFBQTtBQVdGO0FBVEE7RUFDRSw4QkFBQTtFQUNBLFlBQUE7QUFZRjtBQVZBO0VBQ0U7SUFDRSxpQkFBQTtJQUNBLDZCQUFBO0VBYUY7QUFDRjtBQVhBO0VBQ0UsZ0NBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7QUFhRjtBQVhBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7QUFjRjtBQVpBO0VBQ0UsV0FBQTtBQWVGO0FBYkE7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFnQkY7QUFkQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBR0Esa0JBQUE7QUFpQkY7QUFmQTtFQUNFO0lBQ0UsV0FBQTtFQWtCRjtBQUNGO0FBaEJBO0VBQ0UsbUJBQUE7QUFrQkY7QUFoQkE7RUFDRSxtQkFBQTtBQW1CRjtBQWpCQTtFQUNFLHFCQUFBO0VBR0EsMERBQUE7QUFvQkY7QUFsQkE7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7QUFxQkY7QUFuQkE7RUFDRTtJQUNFLFdBQUE7SUFDQSxpQkFBQTtFQXNCRjtBQUNGO0FBcEJBO0VBRUksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBcUJKO0FBbEJBO0VBQ0ksdUJBQUE7QUFxQkoiLCJmaWxlIjoiZW1haWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjQwMCw3MDApO1xyXG4qIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgYmFja2dyb3VuZDogI2NiZDBkMztcclxuICBjb2xvcjogIzFhMWExYTtcclxuICBmb250LWZhbWlseTogJ1JvYm90bycsICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbmlucHV0LCB0ZXh0YXJlYSB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgcmVzaXplOiBub25lO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbn1cclxuXHJcbmxhYmVsOmhvdmVyIHtcclxuICBjdXJzb3I6IHRleHQ7XHJcbn1cclxuXHJcbi5jcmVkaXQge1xyXG4gIGJvdHRvbTogNDBweDtcclxuICBjb2xvcjogIzk0OWVhNDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbGVmdDogMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHotaW5kZXg6IDk5O1xyXG59XHJcbi5jcmVkaXQgYSB7XHJcbiAgY29sb3I6ICM2Yzc4ODA7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi5jcmVkaXQgYTpob3ZlciB7XHJcbiAgY29sb3I6ICMxYTFhMWE7XHJcbn1cclxuLmNyZWRpdCBhOmFjdGl2ZSB7XHJcbiAgY29sb3I6ICMzNDM0MzQ7XHJcbn1cclxuLm1hdC1kaWFsb2ctY29udGFpbmVye1xyXG4gICAgcGFkZGluZzogMHBjICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNvbnRhY3QtZm9ybSB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuXHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgLW1vei1ib3gtc2hhZG93OiByZ2JhKDI2LCAyNiwgMjYsIDAuMSkgMCAxcHggM3B4IDA7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiByZ2JhKDI2LCAyNiwgMjYsIDAuMSkgMCAxcHggM3B4IDA7XHJcbiAgYm94LXNoYWRvdzogcmdiYSgyNiwgMjYsIDI2LCAwLjEpIDAgMXB4IDNweCAwO1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gIC5jb250YWN0LWZvcm0ge1xyXG4gICAgbWFyZ2luOiAwIDAgMTAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuLmNvbnRhY3QtZm9ybSAuZW1haWwsIC5jb250YWN0LWZvcm0gLm1lc3NhZ2UsIC5jb250YWN0LWZvcm0gLm5hbWUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uY29udGFjdC1mb3JtIC5lbWFpbCBpbnB1dDpmb2N1cywgLmNvbnRhY3QtZm9ybSAuZW1haWwgdGV4dGFyZWE6Zm9jdXMsIC5jb250YWN0LWZvcm0gLm1lc3NhZ2UgaW5wdXQ6Zm9jdXMsIC5jb250YWN0LWZvcm0gLm1lc3NhZ2UgdGV4dGFyZWE6Zm9jdXMsIC5jb250YWN0LWZvcm0gLm5hbWUgaW5wdXQ6Zm9jdXMsIC5jb250YWN0LWZvcm0gLm5hbWUgdGV4dGFyZWE6Zm9jdXMge1xyXG4gIGJhY2tncm91bmQ6ICNmNGY1ZjY7XHJcbn1cclxuLmNvbnRhY3QtZm9ybSAuZW1haWwgbGFiZWwsIC5jb250YWN0LWZvcm0gLm1lc3NhZ2UgbGFiZWwsIC5jb250YWN0LWZvcm0gLm5hbWUgbGFiZWwge1xyXG4gIGNvbG9yOiAjY2JkMGQzO1xyXG4gIGxlZnQ6IDIzcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMjNweDtcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCwgMTUwbXM7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsLCAxNTBtcztcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCwgMTUwbXM7XHJcbiAgdHJhbnNpdGlvbjogYWxsLCAxNTBtcztcclxufVxyXG4uY29udGFjdC1mb3JtIC5lbWFpbC50eXBpbmcgbGFiZWwsIC5jb250YWN0LWZvcm0gLm1lc3NhZ2UudHlwaW5nIGxhYmVsLCAuY29udGFjdC1mb3JtIC5uYW1lLnR5cGluZyBsYWJlbCB7XHJcbiAgY29sb3I6ICMzNDk4ZGI7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIHRvcDogN3B4O1xyXG59XHJcbi5jb250YWN0LWZvcm0gLmVtYWlsLCAuY29udGFjdC1mb3JtIC5uYW1lIHtcclxuICB3aWR0aDogY2FsYyg1MCUgLSAxcHgpO1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gIC5jb250YWN0LWZvcm0gLmVtYWlsLCAuY29udGFjdC1mb3JtIC5uYW1lIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG4uY29udGFjdC1mb3JtIC5lbWFpbCBpbnB1dCwgLmNvbnRhY3QtZm9ybSAubmFtZSBpbnB1dCB7XHJcbiAgcGFkZGluZzogMjNweCAwIDhweCAyM3B4O1xyXG59XHJcbi5jb250YWN0LWZvcm0gLmVtYWlsIHtcclxuICBib3JkZXItbGVmdDogMXB4ICNlNmU2ZTYgc29saWQ7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gIC5jb250YWN0LWZvcm0gLmVtYWlsIHtcclxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4ICNlNmU2ZTYgc29saWQ7XHJcbiAgfVxyXG59XHJcbi5jb250YWN0LWZvcm0gLm1lc3NhZ2Uge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCAjZTZlNmU2IHNvbGlkO1xyXG4gIGJvcmRlci10b3A6IDFweCAjZTZlNmU2IHNvbGlkO1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcbi5jb250YWN0LWZvcm0gLm1lc3NhZ2UgdGV4dGFyZWEge1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgcGFkZGluZzogMjNweDtcclxufVxyXG4uY29udGFjdC1mb3JtIC5uYW1lIHtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG4uY29udGFjdC1mb3JtIC5zdWJtaXQge1xyXG4gIGJhY2tncm91bmQ6ICNmNGY1ZjY7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwYWRkaW5nOiAyM3B4O1xyXG59XHJcbi5jb250YWN0LWZvcm0gLnN1Ym1pdCAuYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kOiAjMzQ5OGRiO1xyXG4gIGJvcmRlcjogMXB4ICMzNDk4ZGIgc29saWQ7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHBhZGRpbmc6IDlweCAwO1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgLmNvbnRhY3QtZm9ybSAuc3VibWl0IC5idXR0b24ge1xyXG4gICAgZmxvYXQ6IG5vbmU7XHJcbiAgfVxyXG59XHJcbi5jb250YWN0LWZvcm0gLnN1Ym1pdCAuYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjNGFhM2RmO1xyXG59XHJcbi5jb250YWN0LWZvcm0gLnN1Ym1pdCAuYnV0dG9uOmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZDogIzI1OGNkMTtcclxufVxyXG4uY29udGFjdC1mb3JtIC5zdWJtaXQgLmJ1dHRvbjpmb2N1cyB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjYjZkYWYyO1xyXG4gIC1tb3otYm94LXNoYWRvdzogIzc1YjllNyAwIDAgNHB4IDFweCwgIzc1YjllNyAwIDAgNHB4IDFweCBpbnNldDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6ICM3NWI5ZTcgMCAwIDRweCAxcHgsICM3NWI5ZTcgMCAwIDRweCAxcHggaW5zZXQ7XHJcbiAgYm94LXNoYWRvdzogIzc1YjllNyAwIDAgNHB4IDFweCwgIzc1YjllNyAwIDAgNHB4IDFweCBpbnNldDtcclxufVxyXG4uY29udGFjdC1mb3JtIC5zdWJtaXQgLnVzZXItbWVzc2FnZSB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgcGFkZGluZy10b3A6IDIycHg7XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgLmNvbnRhY3QtZm9ybSAuc3VibWl0IC51c2VyLW1lc3NhZ2Uge1xyXG4gICAgZmxvYXQ6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwIDAgMTBweDtcclxuICB9XHJcbn1cclxuLmNvbnRhY3QtZm9ybVtfbmdjb250ZW50LW1kZS1jMTYxXSB7XHJcblxyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcblxyXG59XHJcbi5jb250YXtcclxuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG59Il19 */"] });


/***/ }),

/***/ "6iBv":
/*!***************************************************************!*\
  !*** ./src/app/tasks/shared/loadingSpinner/loadingSpinner.ts ***!
  \***************************************************************/
/*! exports provided: LoadingSpiner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingSpiner", function() { return LoadingSpiner; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LoadingSpiner {
}
LoadingSpiner.ɵfac = function LoadingSpiner_Factory(t) { return new (t || LoadingSpiner)(); };
LoadingSpiner.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingSpiner, selectors: [["app-loading-spinner"]], decls: 4, vars: 0, consts: [[1, "lds-facebook"]], template: function LoadingSpiner_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".lds-facebook[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    position: relative;\r\n    width: 80px;\r\n    height: 80px;\r\n  }\r\n  .lds-facebook[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    position: absolute;\r\n    left: 8px;\r\n    width: 16px;\r\n    background: black;\r\n    -webkit-animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;\r\n            animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;\r\n  }\r\n  .lds-facebook[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1) {\r\n    left: 8px;\r\n    -webkit-animation-delay: -0.24s;\r\n            animation-delay: -0.24s;\r\n  }\r\n  .lds-facebook[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\r\n    left: 32px;\r\n    -webkit-animation-delay: -0.12s;\r\n            animation-delay: -0.12s;\r\n  }\r\n  .lds-facebook[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3) {\r\n    left: 56px;\r\n    -webkit-animation-delay: 0;\r\n            animation-delay: 0;\r\n  }\r\n  @-webkit-keyframes lds-facebook {\r\n    0% {\r\n      top: 8px;\r\n      height: 64px;\r\n    }\r\n    50%, 100% {\r\n      top: 24px;\r\n      height: 32px;\r\n    }\r\n  }\r\n  @keyframes lds-facebook {\r\n    0% {\r\n      top: 8px;\r\n      height: 64px;\r\n    }\r\n    50%, 100% {\r\n      top: 24px;\r\n      height: 32px;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRpbmdTcGluZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7RUFDZDtFQUNBO0lBQ0UscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLGlCQUFpQjtJQUNqQiwwRUFBa0U7WUFBbEUsa0VBQWtFO0VBQ3BFO0VBQ0E7SUFDRSxTQUFTO0lBQ1QsK0JBQXVCO1lBQXZCLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsVUFBVTtJQUNWLCtCQUF1QjtZQUF2Qix1QkFBdUI7RUFDekI7RUFDQTtJQUNFLFVBQVU7SUFDViwwQkFBa0I7WUFBbEIsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRTtNQUNFLFFBQVE7TUFDUixZQUFZO0lBQ2Q7SUFDQTtNQUNFLFNBQVM7TUFDVCxZQUFZO0lBQ2Q7RUFDRjtFQVRBO0lBQ0U7TUFDRSxRQUFRO01BQ1IsWUFBWTtJQUNkO0lBQ0E7TUFDRSxTQUFTO01BQ1QsWUFBWTtJQUNkO0VBQ0YiLCJmaWxlIjoibG9hZGluZ1NwaW5lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxkcy1mYWNlYm9vayB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICB9XHJcbiAgLmxkcy1mYWNlYm9vayBkaXYge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogOHB4O1xyXG4gICAgd2lkdGg6IDE2cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgIGFuaW1hdGlvbjogbGRzLWZhY2Vib29rIDEuMnMgY3ViaWMtYmV6aWVyKDAsIDAuNSwgMC41LCAxKSBpbmZpbml0ZTtcclxuICB9XHJcbiAgLmxkcy1mYWNlYm9vayBkaXY6bnRoLWNoaWxkKDEpIHtcclxuICAgIGxlZnQ6IDhweDtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMjRzO1xyXG4gIH1cclxuICAubGRzLWZhY2Vib29rIGRpdjpudGgtY2hpbGQoMikge1xyXG4gICAgbGVmdDogMzJweDtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMTJzO1xyXG4gIH1cclxuICAubGRzLWZhY2Vib29rIGRpdjpudGgtY2hpbGQoMykge1xyXG4gICAgbGVmdDogNTZweDtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMDtcclxuICB9XHJcbiAgQGtleWZyYW1lcyBsZHMtZmFjZWJvb2sge1xyXG4gICAgMCUge1xyXG4gICAgICB0b3A6IDhweDtcclxuICAgICAgaGVpZ2h0OiA2NHB4O1xyXG4gICAgfVxyXG4gICAgNTAlLCAxMDAlIHtcclxuICAgICAgdG9wOiAyNHB4O1xyXG4gICAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gICJdfQ== */"] });


/***/ }),

/***/ "7UCR":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
    constructor(id, email, _token, _tokenExprationDate) {
        this.id = id;
        this.email = email;
        this._token = _token;
        this._tokenExprationDate = _tokenExprationDate;
    }
    get token() {
        if (this._tokenExprationDate, new Date > this._tokenExprationDate) {
            return null;
        }
        return this._token;
    }
}


/***/ }),

/***/ "AUx9":
/*!*********************************************************!*\
  !*** ./src/app/tasks/tasks-model/tasks-model.module.ts ***!
  \*********************************************************/
/*! exports provided: TasksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksModule", function() { return TasksModule; });
/* harmony import */ var _shared_loadingSpinner_tag_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/loadingSpinner/tag.module */ "Kh4F");

class TasksModule {
    constructor(selectedRole, projectTitle, description, scheduleStart, scheduleEnd, notify = "yes", statues = false, tags = [new _shared_loadingSpinner_tag_module__WEBPACK_IMPORTED_MODULE_0__["TagsModule"]('sdaads')], taskType, group, owner, user, companyName, others, progress, piorty) {
        this.selectedRole = selectedRole;
        this.projectTitle = projectTitle;
        this.description = description;
        this.scheduleStart = scheduleStart;
        this.scheduleEnd = scheduleEnd;
        this.notify = notify;
        this.statues = statues;
        this.tags = tags;
        this.taskType = taskType;
        this.group = group;
        this.owner = owner;
        this.user = user;
        this.companyName = companyName;
        this.others = others;
        this.progress = progress;
        this.piorty = piorty;
    }
}
//  export class ToDoList{
//    constructor(public todoList:string){}
//  }


/***/ }),

/***/ "AytR":
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
const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyCxSIovXABL9J3NBNV1PRXNtW_a_5ZEO1s",
        authDomain: "businessmangement-b0624.firebaseapp.com",
        databaseURL: "https://businessmangement-b0624-default-rtdb.firebaseio.com",
        projectId: "businessmangement-b0624",
        storageBucket: "businessmangement-b0624.appspot.com",
        messagingSenderId: "524429515432",
        appId: "1:524429515432:web:ae3014caf1a58c52e5809d",
        measurementId: "G-78BPYT890S"
    }
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

/***/ "E8aF":
/*!*********************************************!*\
  !*** ./src/app/user/userTaskList.module.ts ***!
  \*********************************************/
/*! exports provided: InnerTasks, UserTaskList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InnerTasks", function() { return InnerTasks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserTaskList", function() { return UserTaskList; });
class InnerTasks {
    constructor(taskTitle, TaskDescription, startIn, endat, comments) {
        this.taskTitle = taskTitle;
        this.TaskDescription = TaskDescription;
        this.startIn = startIn;
        this.endat = endat;
        this.comments = comments;
    }
}
class UserTaskList {
    constructor(user, tasks) {
        this.user = user;
        this.tasks = tasks;
    }
}


/***/ }),

/***/ "EKks":
/*!**********************************************************!*\
  !*** ./src/app/tasks/tasks-list/tasks-list.component.ts ***!
  \**********************************************************/
/*! exports provided: TasksListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksListComponent", function() { return TasksListComponent; });
/* harmony import */ var _task_dialog_task_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../task-dialog/task-dialog.component */ "iT0a");
/* harmony import */ var _store_Task_Action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/Task.Action */ "y0fk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "kt0X");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _task_item_task_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./task-item/task-item.component */ "NiYA");







function TasksListComponent_app_task_item_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-task-item", 11);
} if (rf & 2) {
    const task_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("Task", task_r2)("index", i_r3);
} }
class TasksListComponent {
    constructor(store, dialog) {
        this.store = store;
        this.dialog = dialog;
    }
    ngOnInit() {
        this.tasks = this.store.select('Tasks');
        this.subscripe = this.tasks.subscribe(task => {
            this.totalProject = task.tasks.length;
        });
        // this.tasks.filter(task!='asd')
    }
    addTask() {
        this.dialog.open(_task_dialog_task_dialog_component__WEBPACK_IMPORTED_MODULE_0__["TaskDialogComponent"]).afterOpened().subscribe(() => {
            this.store.dispatch(new _store_Task_Action__WEBPACK_IMPORTED_MODULE_1__["StopEdit"]());
        });
    }
    new() {
        this.dialog.open(_task_dialog_task_dialog_component__WEBPACK_IMPORTED_MODULE_0__["TaskDialogComponent"]);
    }
    search(i) {
        const list = document.getElementById('list');
        Array.from(list.children)
            .filter(task => !task.textContent.includes(i.value.trim()))
            .forEach(task => task.classList.add('filterd'));
        Array.from(list.children)
            .filter(task => task.textContent.includes(i.value.trim()))
            .forEach(task => task.classList.remove('filterd'));
    }
    ngOnDestroy() {
        this.subscripe.unsubscribe();
    }
}
TasksListComponent.ɵfac = function TasksListComponent_Factory(t) { return new (t || TasksListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"])); };
TasksListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TasksListComponent, selectors: [["app-tasks-list"]], decls: 14, vars: 3, consts: [[1, "d-flex", "justify-content-between", "align-items-center", "mt-2", "p-2"], [1, "font-weight-bold"], [1, "d-flex", "flex-row"], [1, "btn", "btn-primary", "new", 3, "click"], [1, "fa", "fa-plus"], [1, "tasks", "mt-3"], [1, "mt-3", "inputs", "mb-2", 2, "display", "flex"], ["type", "text", "placeholder", "Search Tasks...", 1, "form-control", 2, "width", "100%", 3, "keyup"], ["input", ""], ["id", "list", 1, "row"], ["class", "col-md-6 col-12", 3, "Task", "index", 4, "ngFor", "ngForOf"], [1, "col-md-6", "col-12", 3, "Task", "index"]], template: function TasksListComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "All Tasks");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TasksListComponent_Template_button_click_4_listener() { return ctx.new(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " New");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup", function TasksListComponent_Template_input_keyup_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](10); return ctx.search(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, TasksListComponent_app_task_item_12_Template, 1, 2, "app-task-item", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 1, ctx.tasks).tasks);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _task_item_task_item_component__WEBPACK_IMPORTED_MODULE_6__["TaskItemComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: [".all {\n  height: 100%;\n}\n\n.border {\n  border: 1px solid #ddd;\n  padding: 0px;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n}\n\n.mat-tab-labels {\n  color: black;\n}\n\n.mat-tab-label-content {\n  color: #0a0808 !important;\n}\n\n.mat-tab-label-content {\n  color: #fff;\n}\n\n.example-action-buttons {\n  padding-bottom: 20px;\n}\n\n.exptional {\n  border: none !important;\n  background: #fff !important;\n  box-shadow: none !important;\n  margin-left: 0px !important;\n}\n\n.example-headers-align .mat-expansion-panel-header-title,\n.example-headers-align .mat-expansion-panel-header-description {\n  flex-basis: 0;\n}\n\n.example-headers-align .mat-expansion-panel-header-description {\n  justify-content: space-between;\n  align-items: center;\n}\n\n.example-headers-align .mat-form-field + .mat-form-field {\n  margin-left: 8px;\n}\n\n::-webkit-scrollbar {\n  width: 10px;\n}\n\n/* Track */\n\n::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n\n/* Handle */\n\n::-webkit-scrollbar-thumb {\n  background: #888;\n}\n\n.chips {\n  font-size: 10px;\n  padding: 0px 4px;\n}\n\n/* Handle on hover */\n\n::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n\n.preview {\n  height: 400px;\n  overflow: auto;\n  overflow-x: hidden;\n}\n\n.left, .r_right {\n  border: 1px solid #ddd;\n}\n\nbody {\n  background: #f9f9f9;\n}\n\n.icon {\n  cursor: pointer;\n  font-size: 17px;\n}\n\n.icon:hover {\n  color: blue;\n}\n\n.top_bar.flex {\n  padding: 1px;\n  background: #3f51b5;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  color: #fff;\n  padding: 10px;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  border: 1px solid #ddd;\n}\n\n.btn {\n  border-radius: 25px !important;\n}\n\n.none {\n  display: none;\n}\n\n.new {\n  font-size: 12px !important;\n}\n\n.white {\n  background: #fff !important;\n}\n\n.card {\n  padding: 20px;\n  border: none;\n}\n\n.active {\n  background: #f6f7fb !important;\n  border-color: #f6f7fb !important;\n  color: #000 !important;\n  font-size: 12px !important;\n}\n\n.inputs {\n  position: relative;\n}\n\n.form-control {\n  text-indent: 15px;\n  border: none;\n  height: 45px;\n  border-radius: 0px;\n  border-bottom: 1px solid #eee;\n}\n\n.form-control:focus {\n  color: #495057;\n  background-color: #fff;\n  border-color: #eee;\n  outline: 0;\n  box-shadow: none;\n  border-bottom: 1px solid blue;\n}\n\n.form-control:focus {\n  color: blue;\n}\n\n.tasks {\n  padding: 7px;\n}\n\n.taskHeader {\n  display: flex;\n}\n\n.flex {\n  display: flex;\n}\n\n.tasks-l {\n  height: 48ox;\n}\n\n.menu-b {\n  padding-top: -17px !important;\n  margin-top: -10px;\n}\n\n.edit {\n  font-size: 11px;\n  cursor: pointer;\n}\n\n.tob_bar {\n  padding: 6px;\n  background: #3f51b5 !important;\n  color: #fff !important;\n}\n\n.tob_bar_edit {\n  width: 30%;\n  text-align: end;\n}\n\n.tob_bar_edit span {\n  margin-right: 4px;\n  cursor: pointer;\n}\n\n.tob_bar_edit .icon {\n  cursor: pointer;\n}\n\n.preview {\n  height: auto !important;\n  background: #fff;\n  padding: 5px;\n  border: 10px 0px;\n  border: 1px solid #f9e2e2;\n}\n\n.tolbar_data_progress {\n  padding: 6px;\n}\n\n.panalDescription {\n  text-align: left;\n  font-size: 13px;\n}\n\n.tolbar_data_discription p {\n  display: flex;\n}\n\n.tolbar_data_discription p .show_more {\n  margin-left: 10px;\n  cursor: pointer;\n}\n\n.tolbar_data_discription .description {\n  /* height: 13px; */\n  height: 40px;\n  overflow: hidden;\n  text-align: left;\n}\n\n.tolbar_data_discription .expended {\n  height: auto;\n  overflow: unset;\n  transition: 2s ease-in-out 0.5s;\n}\n\n.comments {\n  padding: 5px;\n  margin: 17px;\n  width: 100%;\n}\n\n.comments textarea {\n  width: 100%;\n  background: none;\n  border: none;\n  resize: none;\n  background: #f4f4f4;\n  height: 100px;\n}\n\n.comments textarea:focus {\n  border: none;\n}\n\n.filterd {\n  display: none !important;\n}\n\n.search {\n  background: none;\n  border: none;\n  margin-left: 11px;\n  color: #0d6efd;\n  border: 1px solid;\n  height: 30px;\n  margin: auto 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0YXNrcy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtBQUNGOztBQUdBO0VBQ0MsWUFBQTtBQUFEOztBQUdBO0VBQ0UseUJBQUE7QUFBRjs7QUFPQTtFQUNFLFdBQUE7QUFKRjs7QUFNQTtFQUNFLG9CQUFBO0FBSEY7O0FBS0E7RUFDRSx1QkFBQTtFQUNFLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtBQUZKOztBQUlBOztFQUVFLGFBQUE7QUFERjs7QUFJQTtFQUNFLDhCQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFJQTtFQUNFLGdCQUFBO0FBREY7O0FBTUE7RUFDRSxXQUFBO0FBSEY7O0FBTUEsVUFBQTs7QUFDQTtFQUNFLG1CQUFBO0FBSEY7O0FBTUEsV0FBQTs7QUFDQTtFQUNFLGdCQUFBO0FBSEY7O0FBS0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFGRjs7QUFJQSxvQkFBQTs7QUFDQTtFQUNFLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBREY7O0FBR0E7RUFDRSxzQkFBQTtBQUFGOztBQUtBO0VBQ0UsbUJBQUE7QUFGRjs7QUFLQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FBRkY7O0FBR0U7RUFDRSxXQUFBO0FBREo7O0FBSUE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFFQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUFGRjs7QUFJQTtFQUNFLDhCQUFBO0FBREY7O0FBR0E7RUFFRSxhQUFBO0FBREY7O0FBR0E7RUFDRSwwQkFBQTtBQUFGOztBQUVBO0VBQ0UsMkJBQUE7QUFDRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FBRUY7O0FBQ0E7RUFDRSw4QkFBQTtFQUNBLGdDQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtBQUVGOztBQUNBO0VBQ0Usa0JBQUE7QUFFRjs7QUFDQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0FBRUY7O0FBQ0E7RUFDRSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0FBRUY7O0FBQ0E7RUFDRSxXQUFBO0FBRUY7O0FBS0E7RUFDRSxZQUFBO0FBRkY7O0FBT0E7RUFDRSxhQUFBO0FBSkY7O0FBWUE7RUFDRSxhQUFBO0FBVkY7O0FBYUE7RUFDRSxZQUFBO0FBVkY7O0FBZUE7RUFDRSw2QkFBQTtFQUNBLGlCQUFBO0FBWkY7O0FBY0E7RUFDRSxlQUFBO0VBQ0EsZUFBQTtBQVhGOztBQWFBO0VBQ0UsWUFBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7QUFWRjs7QUFZQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FBVEY7O0FBVUU7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUFSSjs7QUFVRTtFQUNFLGVBQUE7QUFSSjs7QUFZQTtFQUNFLHVCQUFBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQVRKOztBQWdCQTtFQUNFLFlBQUE7QUFkRjs7QUFnQkE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFiRjs7QUFnQkU7RUFDRSxhQUFBO0FBYko7O0FBZUk7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUFiTjs7QUFnQkU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBZEo7O0FBaUJBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtBQWZGOztBQXFCQTtFQUVFLFlBQUE7RUFFQSxZQUFBO0VBQ0EsV0FBQTtBQXBCRjs7QUFxQkU7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQW5CSjs7QUFzQkU7RUFDRSxZQUFBO0FBcEJKOztBQTBCQTtFQUNFLHdCQUFBO0FBdkJGOztBQXlCQTtFQUNFLGdCQUFBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBdEJKIiwiZmlsZSI6InRhc2tzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxse1xyXG4gIGhlaWdodDogMTAwJTtcclxuXHJcbn1cclxuLmJvcmRlcntcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA4cHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhweDtcclxuXHJcbn1cclxuXHJcbi5tYXQtdGFiLWxhYmVscyB7XHJcbiBjb2xvcjogYmxhY2s7XHJcbiAgXHJcbn1cclxuLm1hdC10YWItbGFiZWwtY29udGVudCB7XHJcbiAgY29sb3I6IHJnYigxMCwgOCwgOCkgIWltcG9ydGFudDtcclxufVxyXG5AbWl4aW4gX21hdC1pbmstYmFyKCRjb2xvciwgJGh1ZTogZGVmYXVsdCkge1xyXG4gIC5tYXQtaW5rLWJhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbi5tYXQtdGFiLWxhYmVsLWNvbnRlbnQge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5leGFtcGxlLWFjdGlvbi1idXR0b25zIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG4uZXhwdGlvbmFse1xyXG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5leGFtcGxlLWhlYWRlcnMtYWxpZ24gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlLFxyXG4uZXhhbXBsZS1oZWFkZXJzLWFsaWduIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiB7XHJcbiAgZmxleC1iYXNpczogMDtcclxufVxyXG5cclxuLmV4YW1wbGUtaGVhZGVycy1hbGlnbiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZXhhbXBsZS1oZWFkZXJzLWFsaWduIC5tYXQtZm9ybS1maWVsZCArIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxufVxyXG5cclxuXHJcbi8vIHNjcm9sbFxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogMTBweDtcclxufVxyXG5cclxuLyogVHJhY2sgKi9cclxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgYmFja2dyb3VuZDogI2YxZjFmMTsgXHJcbn1cclxuIFxyXG4vKiBIYW5kbGUgKi9cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZDogIzg4ODsgXHJcbn1cclxuLmNoaXBze1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBwYWRkaW5nOiAwcHggNHB4O1xyXG59XHJcbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjNTU1OyBcclxufVxyXG4vLyBzY3JvbGxcclxuLnByZXZpZXd7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuLmxlZnQgLCAucl9yaWdodHtcclxuICBib3JkZXI6ICAxcHggc29saWQgI2RkZDtcclxufVxyXG4vLyAuZnVsbF9oZWlnaHR7XHJcbi8vICAgaGVpZ2h0OiAxMDAlO1xyXG4vLyB9XHJcbmJvZHl7XHJcbiAgYmFja2dyb3VuZDogcmdiKDI0OSAyNDkgMjQ5KTtcclxuICBcclxufVxyXG4uaWNvbntcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gICY6aG92ZXJ7XHJcbiAgICBjb2xvcjogYmx1ZTtcclxuICB9XHJcbn1cclxuLnRvcF9iYXIuZmxleCB7XHJcbiAgcGFkZGluZzogMXB4O1xyXG4gIGJhY2tncm91bmQ6ICMzZjUxYjU7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICAvLyBiYWNrZ3JvdW5kOiAjZDBkMGQwO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbn1cclxuLmJ0biB7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweCAhaW1wb3J0YW50XHJcbn1cclxuLm5vbmVcclxue1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLm5ldyB7XHJcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnRcclxufVxyXG4ud2hpdGV7XHJcbiAgYmFja2dyb3VuZDojZmZmICFpbXBvcnRhbnRcclxufVxyXG4uY2FyZCB7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3JkZXI6IG5vbmVcclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZDogI2Y2ZjdmYiAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1jb2xvcjogI2Y2ZjdmYiAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnRcclxufVxyXG5cclxuLmlucHV0cyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlXHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gIHRleHQtaW5kZW50OiAxNXB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBoZWlnaHQ6IDQ1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlXHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG4gIGNvbG9yOiAjNDk1MDU3O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZWVlO1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmx1ZVxyXG59XHJcblxyXG4uZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICBjb2xvcjogYmx1ZVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuLnRhc2tze1xyXG4gIHBhZGRpbmc6IDdweDtcclxuXHJcblxyXG5cclxufVxyXG4udGFza0hlYWRlcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuXHJcbiAgbGl7XHJcbiAgICAvLyB3aWR0aDogIDI1JSA7XHJcbiAgICAvLyBsaXN0LXN0eWxlOiBub25lXHJcbiAgfVxyXG59XHJcbi5mbGV4e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcblxyXG59XHJcbi50YXNrcy1se1xyXG4gIGhlaWdodDogNDhveDtcclxuXHJcblxyXG4gIFxyXG59XHJcbi5tZW51LWIge1xyXG4gIHBhZGRpbmctdG9wOiAtMTdweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi10b3A6IC0xMHB4O1xyXG59XHJcbi5lZGl0e1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnRvYl9iYXJ7XHJcbiAgcGFkZGluZzogNnB4O1xyXG4gIGJhY2tncm91bmQ6ICMzZjUxYjUgIWltcG9ydGFudDtcclxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcbi50b2JfYmFyX2VkaXR7XHJcbiAgd2lkdGg6IDMwJTtcclxuICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgc3BhbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgLmljb257XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gIH1cclxufVxyXG4ucHJldmlld3tcclxuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBib3JkZXI6IDEwcHggMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Y5ZTJlMjtcclxuIFxyXG4gICAgLnRvbGJhcl9kYXRhe1xyXG4gICAgICBkaXY6bm90KDpsYXN0LWNoaWxkKXtcclxuICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi50b2xiYXJfZGF0YV9wcm9ncmVzcyB7XHJcbiAgcGFkZGluZzogNnB4O1xyXG59XHJcbi5wYW5hbERlc2NyaXB0aW9ue1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udC1zaXplOiAxM3B4XHJcbn1cclxuLnRvbGJhcl9kYXRhX2Rpc2NyaXB0aW9ue1xyXG4gIHB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIFxyXG4gICAgLnNob3dfbW9yZXtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICB9XHJcbiAgLmRlc2NyaXB0aW9uIHtcclxuICAgIC8qIGhlaWdodDogMTNweDsgKi9cclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59ICBcclxuXHJcbi5leHBlbmRlZHtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgb3ZlcmZsb3c6IHVuc2V0O1xyXG4gIHRyYW5zaXRpb246ICAycyBlYXNlLWluLW91dCAuNXNcclxufVxyXG5cclxufVxyXG5cclxuXHJcbi5jb21tZW50cyB7XHJcbiAgLy8gYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgLy8gYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG1hcmdpbjogMTdweDtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0YXJlYXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHJlc2l6ZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6ICNmNGY0ZjQ7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG5cclxuICB9XHJcbiAgdGV4dGFyZWE6Zm9jdXMge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gIH1cclxufVxyXG4ubGlzdEljb257XHJcbiAgXHJcbn1cclxuLmZpbHRlcmR7XHJcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbi5zZWFyY2h7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMXB4O1xyXG4gICAgY29sb3I6ICMwZDZlZmQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIG1hcmdpbjogYXV0byAxMHB4O1xyXG5cclxufSJdfQ== */"], encapsulation: 2 });


/***/ }),

/***/ "GXPF":
/*!******************************************!*\
  !*** ./src/app/tasks/tasks.component.ts ***!
  \******************************************/
/*! exports provided: TasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksComponent", function() { return TasksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class TasksComponent {
    constructor() { }
    ngOnInit() {
    }
}
TasksComponent.ɵfac = function TasksComponent_Factory(t) { return new (t || TasksComponent)(); };
TasksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TasksComponent, selectors: [["app-tasks"]], decls: 5, vars: 0, consts: [[1, "row", "m-3"], [1, "col-md-6", "col-12"]], template: function TasksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-tasks-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".second[_ngcontent-%COMP%] {\n  bottom: 2px;\n  right: 16px;\n  padding: 0px;\n  width: unset;\n  overflow: auto;\n  height: 80%;\n  width: 400px;\n  padding: 10px;\n  color: #333;\n}\n\n.tasks[_ngcontent-%COMP%] {\n  width: 600px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRhc2tzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBREo7O0FBR0E7RUFDSSxZQUFBO0FBQUoiLCJmaWxlIjoidGFza3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2Vjb25ke1xyXG4gICAgXHJcbiAgICAvLyBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xyXG4gICAgYm90dG9tOiAycHg7XHJcbiAgICByaWdodDogMTZweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIHdpZHRoOiB1bnNldDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbn0gICBcclxuLnRhc2tze1xyXG4gICAgd2lkdGg6IDYwMHB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "Kh4F":
/*!***********************************************************!*\
  !*** ./src/app/tasks/shared/loadingSpinner/tag.module.ts ***!
  \***********************************************************/
/*! exports provided: TagsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsModule", function() { return TagsModule; });
class TagsModule {
    constructor(tag) {
        this.tag = tag;
    }
}


/***/ }),

/***/ "NiYA":
/*!*******************************************************************!*\
  !*** ./src/app/tasks/tasks-list/task-item/task-item.component.ts ***!
  \*******************************************************************/
/*! exports provided: TaskItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskItemComponent", function() { return TaskItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");








function TaskItemComponent_div_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " 0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " 0/9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TaskItemComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return [a0]; };
class TaskItemComponent {
    constructor() {
        this.bussiness = false;
        this.border = "";
        this.taskTypeBackGround = "#19a408";
    }
    ngOnInit() {
        this.i = this.index + 1;
        this.scStart = this.Task.scheduleStart.toDateString();
        this.scEnd = this.Task.scheduleEnd.toDateString();
        console.log(this.Task.taskType);
        if (this.Task.taskType === 'Finished') {
            this.taskTypeBackGround = '#19a408';
        }
        else if (this.Task.taskType === 'INProgress') {
            this.taskTypeBackGround = '#3b4db2c2';
        }
        else {
            this.taskTypeBackGround = '#2fbeff';
        }
        this.Task.statues === true ? this.border = "1px solid  #b2dcb2" : this.border = "1px solid #dda9a9de ";
        console.log(this.Task.selectedRole);
        this.Task.selectedRole === 'business' ? this.bussiness = true : this.bussiness = false;
    }
    oneditItem(index) {
    }
    goDown() {
    }
    show(e) {
        console.log(e);
    }
}
TaskItemComponent.ɵfac = function TaskItemComponent_Factory(t) { return new (t || TaskItemComponent)(); };
TaskItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TaskItemComponent, selectors: [["app-task-item"]], inputs: { Task: "Task", index: "index" }, decls: 49, vars: 17, consts: [[1, "card-main", "clearfix"], [1, "user-details"], [1, "d-flex", 2, "justify-content", "space-between"], [1, "right-icon"], ["mat-icon-button", "", "aria-label", "Example icon-button with a menu", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "routerLink", "click"], ["mat-menu-item", ""], [1, "d-flex"], [2, "color", "rgba(52,211,153)"], [1, "ms-1", 2, "color", "rgba(52,211,153)"], [1, "info-extra"], [2, "color", "#ef6060"], [1, "bottom-info"], [1, "progress_bar"], [1, "progressInfo", "flex", "justify-content-between", 2, "font-size", "10px"], [1, "progress_text"], [2, "width", "20%", "text-align", "end"], ["mode", "determinate", 3, "value"], ["progress", ""], ["class", "bottom-left", 4, "ngIf"], ["class", "bottom-right", "matTooltip", "this is a demo section with demo content", "matTooltipClass", "example-tooltip-red", "aria-label", "Button that shows a red tooltip", 4, "ngIf"], [1, "bottom-left"], ["matTooltip", "comments", "matTooltip", "this is a demo section ", "matTooltipClass", "example-tooltip-red", "aria-label", "Button that shows a red tooltip"], ["src", "../../../../assets/speech-bubble.png", "width", "10%", "alt", ""], ["src", "../../../../assets/task-list.png", "width", "10%", "alt", "", 1, "ms-3", "mt-2"], ["matTooltip", "this is a demo section with demo content", "matTooltipClass", "example-tooltip-red", "aria-label", "Button that shows a red tooltip", 1, "bottom-right"], [1, "more-avatar"]], template: function TaskItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-menu", null, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskItemComponent_Template_button_click_11_listener() { return ctx.goDown(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "remove_red_eye");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "preview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "notifications_off");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Diabled Alerts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "person");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Created by/ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Project Manger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "small", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "mat-progress-bar", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, TaskItemComponent_div_47_Template, 6, 0, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, TaskItemComponent_div_48_Template, 10, 0, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("border", ctx.border);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.Task.projectTitle.toUpperCase());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, ctx.index));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.Task.description, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" start: ", ctx.scStart, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" END: ", ctx.scEnd, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.taskTypeBackGround);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.Task.taskType ? ctx.Task.taskType : "T o D o", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.Task.progress ? ctx.Task.progress + "%" : "0%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.Task.progress);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.bussiness);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.bussiness);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatMenuItem"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__["MatProgressBar"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltip"]], styles: [".red[_ngcontent-%COMP%] {\n  color: #d65757;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  height: 3px;\n}\n\nli[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 61px;\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n\nsection.flex.team-group[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n\nsection.flex.team-group[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  border: 1px solid #ddd;\n  padding: 3px;\n  font-size: 11px;\n  border-radius: 50%;\n  background: cadetblue;\n  color: #fff;\n}\n\nsection.flex.team-group[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: 3px;\n}\n\nsection.flex.team-group[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]:hover {\n  margin-top: 1px;\n  transition: 1s all ease-in-out;\n  cursor: pointer;\n}\n\n.progress_bar[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n\n.Due[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n\n.Due[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n\n.TaskI[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n\n.progress_text[_ngcontent-%COMP%] {\n  padding: 4px auto;\n  padding: 3px 5px;\n  border-radius: 10px;\n  font-size: 12px;\n  margin-right: 40%;\n  text-align: center;\n  text-transform: uppercase;\n  background: #2fbeff;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdGFzay1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQUNGOztBQUNBO0VBQ0UsV0FBQTtBQUVGOztBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBR0Y7O0FBREE7RUFDRSxjQUFBO0FBSUY7O0FBRkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQUlKOztBQUhJO0VBQ0UsZ0JBQUE7QUFLTjs7QUFISTtFQUNFLGVBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUFLTjs7QUFEQTtFQUNFLGtCQUFBO0FBSUY7O0FBRkE7RUFDQyxrQkFBQTtBQUtEOztBQUpDO0VBQ0UsV0FBQTtBQU1IOztBQUZFO0VBQ0UsV0FBQTtBQUtKOztBQUZBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Ysa0JBQUE7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQUtGIiwiZmlsZSI6InRhc2staXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWR7XHJcbiAgY29sb3I6IHJnYigyMTQsIDg3LCA4Nyk7XHJcbn1cclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgaGVpZ2h0OiAzcHg7XHJcbn1cclxubGl7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA2MXB4O1xyXG4gIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG59XHJcbnNlY3Rpb24uZmxleC50ZWFtLWdyb3VwIHtcclxuICBvdmVyZmxvdzogYXV0bztcclxuXHJcbiAgLnVzZXIge1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgcGFkZGluZzogM3B4O1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZDogY2FkZXRibHVlO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpe1xyXG4gICAgICBtYXJnaW4tbGVmdDogM3B4O1xyXG4gICAgfVxyXG4gICAgJjpob3ZlcntcclxuICAgICAgbWFyZ2luLXRvcDogMXB4O1xyXG4gICAgICB0cmFuc2l0aW9uOiAxcyBhbGwgZWFzZS1pbi1vdXQ7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLnByb2dyZXNzX2JhciB7XHJcbiAgZm9udC1zaXplOiAuNzVyZW07XHJcbn1cclxuLkR1ZXtcclxuIGZvbnQtc2l6ZTouNzVyZW07XHJcbiBwe1xyXG4gICBtYXJnaW46IDBweFxyXG4gfSBcclxufVxyXG4uVGFza0l7XHJcbiAgaDV7XHJcbiAgICBtYXJnaW46MHB4XHJcbiAgfVxyXG59XHJcbi5wcm9ncmVzc190ZXh0e1xyXG4gIHBhZGRpbmc6IDRweCBhdXRvO1xyXG4gIHBhZGRpbmc6IDNweCA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0MCU7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGJhY2tncm91bmQ6ICMyZmJlZmYgO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIFxyXG59Il19 */", "@import url(\"https://fonts.googleapis.com/css?family=Open+Sans:400,600,700\");\nh4[_ngcontent-%COMP%] {\n  font-size: 1.8em;\n  line-height: 2em;\n  font-weight: bold;\n  color: #333333;\n}\nh5[_ngcontent-%COMP%] {\n  font-size: 1.4em;\n}\np[_ngcontent-%COMP%] {\n  font-size: 1.4em;\n  line-height: 1.8;\n  font-weight: 400;\n  color: #808080;\n}\nhr[_ngcontent-%COMP%] {\n  border-color: rgba(0, 0, 0, 0.1);\n  display: block;\n  width: 100%;\n  margin: 2em 0;\n}\nsmall[_ngcontent-%COMP%] {\n  font-size: 1em;\n  letter-spacing: 2px;\n  color: #96a4ae;\n}\n.card-main[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: #ffffff;\n  border-radius: 5px;\n  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);\n  margin: 12px;\n  font-size: 9px;\n  padding: 10px;\n  border-radius: 20px;\n}\n.user-details[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  margin: 0 0 1.5em;\n}\n.user-avatar-status[_ngcontent-%COMP%] {\n  position: relative;\n  vertical-align: middle;\n  display: inline-block;\n  width: 75px;\n}\n.user-avatar[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  height: 10px;\n  width: 10px;\n  background: #8d9ca7 url(https://pbs.twimg.com/profile_images/725752808297877506/oREfRD_s_400x400.jpg) no-repeat center/cover;\n  border-radius: 50%;\n  border-: 1px solid #ffffff;\n  margin-right: 15px;\n  display: inline-block;\n}\n.user-status[_ngcontent-%COMP%] {\n  height: 10px;\n  width: 10px;\n  background-color: #63d8b5;\n  border-radius: 50%;\n  border: 1px solid #ffffff;\n  position: absolute;\n  right: 15px;\n  bottom: 10px;\n  z-index: 999999;\n}\n.user-info[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  display: inline-block;\n  width: calc(100% - 121px);\n}\n.right-icon[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  height: 40px;\n  width: 40px;\n  background-color: #f1f4f4;\n  border-radius: 50%;\n  display: inline-block;\n  position: relative;\n}\n.info-extra[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n  margin: 0 0 2.5em;\n}\n.bottom-left[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 49%;\n}\n.bottom-left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #333333;\n  letter-spacing: 0.5px;\n  margin: 0.5em 0 0;\n}\n.colored-line[_ngcontent-%COMP%] {\n  width: 80%;\n  height: 6px;\n  border-radius: 3px;\n  background-color: #63d8b5;\n  margin: 1em 0;\n}\n.bottom-right[_ngcontent-%COMP%] {\n  width: 49%;\n  display: inline-block;\n  float: right;\n}\n.bottom-right[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 1.1em 0 0;\n}\n.bottom-right[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  width: 20px;\n  display: inline-block;\n}\n.bottom-right[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n  border: 1px solid #fff;\n  border-radius: 50%;\n  background-color: #f1f4f4;\n}\n.more-avatar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child   div[_ngcontent-%COMP%] {\n  background: lightgray url(https://assets.materialup.com/uploads/32b50683-e302-4942-ab6c-a47bbb6a599e/avatar.jpg) no-repeat center/cover;\n}\n.more-avatar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2)   div[_ngcontent-%COMP%] {\n  background: lightgray url(https://assets.materialup.com/uploads/85cb6a56-5ab7-4dd7-bb5d-b098e7c6fdbd/avatar.jpg) no-repeat center/cover;\n}\n.more-avatar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3)   div[_ngcontent-%COMP%] {\n  background: lightgray url(https://assets.materialup.com/uploads/66ccac43-277c-4264-ae1a-4c5734cde268/avatar.jpeg) no-repeat center/cover;\n}\n.more-avatar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child   div[_ngcontent-%COMP%] {\n  background: lightgray url(https://assets.materialup.com/uploads/2b50a73e-3713-4729-a6b6-16636845c105/avatar.jpeg) no-repeat center/cover;\n}\n.more-avatar[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.more-avatar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  overflow: hidden;\n  height: 30px;\n}\n.more-avatar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: 10px !important;\n  height: 10px !important;\n  padding: 10px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccXVpZWNrLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsNEVBQUE7QUFFUjtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFBRjtBQUVBO0VBQ0UsZ0JBQUE7QUFDRjtBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUVGO0FBQUE7RUFDRSxnQ0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQUdGO0FBREE7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBSUY7QUFGQTtFQUNHLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVDQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFLSDtBQUhBO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFNRjtBQUpBO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQU9GO0FBTEE7RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsNEhBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQVFGO0FBTkE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBU0Y7QUFOQTtFQUNFLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQVNGO0FBUEE7RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFVRjtBQVJBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQVdGO0FBVEE7RUFDRSxxQkFBQTtFQUNBLFVBQUE7QUFZRjtBQVZBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQWFGO0FBWEE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0FBY0Y7QUFaQTtFQUNFLFVBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUFlRjtBQWJBO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0FBZ0JGO0FBZEE7RUFDRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUFpQkY7QUFmQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBa0JGO0FBZkE7RUFDRSx1SUFBQTtBQWtCRjtBQWhCQTtFQUNDLHVJQUFBO0FBbUJEO0FBakJBO0VBQ0Esd0lBQUE7QUFvQkE7QUFsQkE7RUFDRSx3SUFBQTtBQXFCRjtBQW5CQTtFQUNHLGlCQUFBO0FBc0JIO0FBckJHO0VBQ0csZ0JBQUE7RUFDQSxZQUFBO0FBdUJOO0FBcEJBO0VBQ0csc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0FBdUJIIiwiZmlsZSI6InF1aWVjay5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnM6NDAwLDYwMCw3MDAnKTtcclxuXHJcbmg0e1xyXG4gIGZvbnQtc2l6ZTogMS44ZW07XHJcbiAgbGluZS1oZWlnaHQ6IDJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogIzMzMzMzMztcclxufVxyXG5oNXtcclxuICBmb250LXNpemU6IDEuNGVtO1xyXG59XHJcbnB7XHJcbiAgZm9udC1zaXplOiAxLjRlbTtcclxuICBsaW5lLWhlaWdodDogMS44O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgY29sb3I6ICM4MDgwODA7XHJcbn1cclxuaHJ7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsMCwwLC4xKTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDJlbSAwO1xyXG59XHJcbnNtYWxse1xyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgY29sb3I6ICM5NmE0YWU7XHJcbn1cclxuLmNhcmQtbWFpbntcclxuICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgIGJveC1zaGFkb3c6IDAgMCAzMHB4IHJnYigwIDAgMCAvIDEwJSk7XHJcbiAgIG1hcmdpbjogMTJweDtcclxuICAgZm9udC1zaXplOiA5cHg7XHJcbiAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuLnVzZXItZGV0YWlsc3tcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAwIDAgMS41ZW07XHJcbn1cclxuLnVzZXItYXZhdGFyLXN0YXR1c3tcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDc1cHg7XHJcbn1cclxuLnVzZXItYXZhdGFye1xyXG4gIHZlcnRpY2FsLWFsaWduOm1pZGRsZTtcclxuICBoZWlnaHQ6IDEwcHg7XHJcbiAgd2lkdGg6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogIzhkOWNhNyB1cmwoaHR0cHM6Ly9wYnMudHdpbWcuY29tL3Byb2ZpbGVfaW1hZ2VzLzcyNTc1MjgwODI5Nzg3NzUwNi9vUkVmUkRfc180MDB4NDAwLmpwZykgbm8tcmVwZWF0IGNlbnRlciAvY292ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlci06IDFweCBzb2xpZCAjZmZmZmZmO1xyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuLnVzZXItc3RhdHVze1xyXG4gIGhlaWdodDogMTBweDtcclxuICB3aWR0aDogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjNkOGI1O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMTVweDtcclxuICBib3R0b206IDEwcHg7XHJcbiAgei1pbmRleDo5OTk5OTk7XHJcbiAgXHJcbn1cclxuLnVzZXItaW5mb3tcclxuICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxMjFweCk7XHJcbn1cclxuLnJpZ2h0LWljb257XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjRmNDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uaW5mby1leHRyYXtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IDAgMCAyLjVlbTtcclxufVxyXG4uYm90dG9tLWxlZnR7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiA0OSU7XHJcbn1cclxuLmJvdHRvbS1sZWZ0IHB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogIzMzMzMzMztcclxuICBsZXR0ZXItc3BhY2luZzogLjVweDtcclxuICBtYXJnaW46IC41ZW0gMCAwO1xyXG59XHJcbi5jb2xvcmVkLWxpbmV7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBoZWlnaHQ6IDZweDtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYzZDhiNTtcclxuICBtYXJnaW46IDFlbSAwO1xyXG59XHJcbi5ib3R0b20tcmlnaHR7XHJcbiAgd2lkdGg6IDQ5JTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbi5ib3R0b20tcmlnaHQgdWx7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDEuMWVtIDAgMDtcclxufVxyXG4uYm90dG9tLXJpZ2h0IHVsIGxpe1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgcGFkZGluZzogMDtcclxuICB3aWR0aDogMjBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuLmJvdHRvbS1yaWdodCB1bCBsaSBkaXZ7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWY0ZjQ7XHJcbn1cclxuXHJcbi5tb3JlLWF2YXRhciBsaTpmaXJzdC1jaGlsZCBkaXZ7XHJcbiAgYmFja2dyb3VuZDogbGlnaHRncmF5IHVybChodHRwczovL2Fzc2V0cy5tYXRlcmlhbHVwLmNvbS91cGxvYWRzLzMyYjUwNjgzLWUzMDItNDk0Mi1hYjZjLWE0N2JiYjZhNTk5ZS9hdmF0YXIuanBnKSBuby1yZXBlYXQgY2VudGVyIC8gY292ZXI7XHJcbn1cclxuLm1vcmUtYXZhdGFyIGxpOm50aC1jaGlsZCgyKSBkaXZ7XHJcbiBiYWNrZ3JvdW5kOiBsaWdodGdyYXkgdXJsKGh0dHBzOi8vYXNzZXRzLm1hdGVyaWFsdXAuY29tL3VwbG9hZHMvODVjYjZhNTYtNWFiNy00ZGQ3LWJiNWQtYjA5OGU3YzZmZGJkL2F2YXRhci5qcGcpIG5vLXJlcGVhdCBjZW50ZXIgLyBjb3ZlcjtcclxufVxyXG4ubW9yZS1hdmF0YXIgbGk6bnRoLWNoaWxkKDMpIGRpdntcclxuYmFja2dyb3VuZDogbGlnaHRncmF5IHVybChodHRwczovL2Fzc2V0cy5tYXRlcmlhbHVwLmNvbS91cGxvYWRzLzY2Y2NhYzQzLTI3N2MtNDI2NC1hZTFhLTRjNTczNGNkZTI2OC9hdmF0YXIuanBlZykgbm8tcmVwZWF0IGNlbnRlciAvIGNvdmVyO1xyXG59XHJcbi5tb3JlLWF2YXRhciBsaTpsYXN0LWNoaWxkIGRpdntcclxuICBiYWNrZ3JvdW5kOiBsaWdodGdyYXkgdXJsKGh0dHBzOi8vYXNzZXRzLm1hdGVyaWFsdXAuY29tL3VwbG9hZHMvMmI1MGE3M2UtMzcxMy00NzI5LWE2YjYtMTY2MzY4NDVjMTA1L2F2YXRhci5qcGVnKSBuby1yZXBlYXQgY2VudGVyIC8gY292ZXI7XHJcbn1cclxuLm1vcmUtYXZhdGFye1xyXG4gICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgbGl7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIGhlaWdodDogMzBweDtcclxuICAgfVxyXG59XHJcbi5tb3JlLWF2YXRhciBsaSBkaXZ7XHJcbiAgIHdpZHRoOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgIGhlaWdodDogMTBweCAhaW1wb3J0YW50O1xyXG4gICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "PI13":
/*!*************************************************************!*\
  !*** ./src/app/angular-material/angular-material.module.ts ***!
  \*************************************************************/
/*! exports provided: AngularMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function() { return AngularMaterialModule; });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/core */ "fXoL");




























const matrialComponent = [
    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltipModule"],
    _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
    _angular_material_list__WEBPACK_IMPORTED_MODULE_20__["MatListModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
    _angular_material_button__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
    _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
    _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"],
    _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
    _angular_material_slider__WEBPACK_IMPORTED_MODULE_10__["MatSliderModule"],
    _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__["MatChipsModule"],
    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"],
    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__["MatProgressBarModule"],
    _angular_material_badge__WEBPACK_IMPORTED_MODULE_14__["MatBadgeModule"],
    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_15__["DragDropModule"],
    _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatTableModule"],
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"],
    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__["MatTabsModule"],
    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__["MatExpansionModule"],
    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_23__["MatStepperModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_24__["MatCardModule"],
    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_25__["MatSnackBarModule"],
    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_26__["MatButtonToggleModule"],
    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_21__["MatSlideToggleModule"]
];
class AngularMaterialModule {
}
AngularMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdefineNgModule"]({ type: AngularMaterialModule });
AngularMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdefineInjector"]({ factory: function AngularMaterialModule_Factory(t) { return new (t || AngularMaterialModule)(); }, imports: [[
            matrialComponent
        ], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltipModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_20__["MatListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_10__["MatSliderModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__["MatChipsModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__["MatProgressBarModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_14__["MatBadgeModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_15__["DragDropModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatTableModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__["MatTabsModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__["MatExpansionModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_23__["MatStepperModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_24__["MatCardModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_25__["MatSnackBarModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_26__["MatButtonToggleModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_21__["MatSlideToggleModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵsetNgModuleScope"](AngularMaterialModule, { imports: [_angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltipModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_20__["MatListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_10__["MatSliderModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__["MatChipsModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__["MatProgressBarModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_14__["MatBadgeModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_15__["DragDropModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatTableModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__["MatTabsModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__["MatExpansionModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_23__["MatStepperModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_24__["MatCardModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_25__["MatSnackBarModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_26__["MatButtonToggleModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_21__["MatSlideToggleModule"]], exports: [_angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltipModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_20__["MatListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_10__["MatSliderModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__["MatChipsModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__["MatProgressBarModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_14__["MatBadgeModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_15__["DragDropModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatTableModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__["MatTabsModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__["MatExpansionModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_23__["MatStepperModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_24__["MatCardModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_25__["MatSnackBarModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_26__["MatButtonToggleModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_21__["MatSlideToggleModule"]] }); })();


/***/ }),

/***/ "S0FY":
/*!*********************************************!*\
  !*** ./src/app/login/store/auth.actions.ts ***!
  \*********************************************/
/*! exports provided: AuthenticatedSucces, login_start, AuthenticatedFAILD, LOGOUT, SIGNUP, Sin_Up_start, AutoLogIn, login, Signup, signUpStart, startAction, LoginStart, LoginFaild, LogOut, autoLog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticatedSucces", function() { return AuthenticatedSucces; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login_start", function() { return login_start; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticatedFAILD", function() { return AuthenticatedFAILD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT", function() { return LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNUP", function() { return SIGNUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sin_Up_start", function() { return Sin_Up_start; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoLogIn", function() { return AutoLogIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Signup", function() { return Signup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signUpStart", function() { return signUpStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startAction", function() { return startAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginStart", function() { return LoginStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFaild", function() { return LoginFaild; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogOut", function() { return LogOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autoLog", function() { return autoLog; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "kt0X");

const AuthenticatedSucces = '[auth] LOGIN';
const login_start = '[auth] login_start';
const AuthenticatedFAILD = '[auth] LOGIN_FAILD';
const LOGOUT = '[auth] LOGOUT';
const SIGNUP = "[auth] sign_Up";
const Sin_Up_start = "[auth] SING_UP_start";
const AutoLogIn = "[auth] AutoLogIn";
class login {
    constructor(payload) {
        this.payload = payload;
        this.type = AuthenticatedSucces;
    }
}
class Signup {
    constructor(payload) {
        this.payload = payload;
        this.type = SIGNUP;
    }
}
class signUpStart {
    constructor(payload) {
        this.payload = payload;
        this.type = Sin_Up_start;
    }
}
const startAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[action]', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
class LoginStart {
    constructor(payload) {
        this.payload = payload;
        this.type = login_start;
    }
}
class LoginFaild {
    constructor(payload) {
        this.payload = payload;
        this.type = AuthenticatedFAILD;
    }
}
class LogOut {
    constructor() {
        this.type = LOGOUT;
    }
}
class autoLog {
    constructor() {
        this.type = AutoLogIn;
    }
}


/***/ }),

/***/ "S1vP":
/*!***************************************!*\
  !*** ./src/app/tasks/tasks.module.ts ***!
  \***************************************/
/*! exports provided: TaskModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskModule", function() { return TaskModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../angular-material/angular-material.module */ "PI13");
/* harmony import */ var _task_dialog_task_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./task-dialog/task-dialog.component */ "iT0a");
/* harmony import */ var _tasks_list_task_item_task_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tasks-list/task-item/task-item.component */ "NiYA");
/* harmony import */ var _tasks_list_task_item_task_preview_dialog_task_preview_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tasks-list/task-item/task-preview-dialog/task-preview-dialog.component */ "jTa0");
/* harmony import */ var _tasks_list_tasks_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tasks-list/tasks-list.component */ "EKks");
/* harmony import */ var _tasks_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tasks.component */ "GXPF");
/* harmony import */ var _tasksrouting_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tasksrouting.module */ "VWqz");
/* harmony import */ var _tasks_start_tasks_start_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tasks-start/tasks-start.component */ "2DKC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");













class TaskModule {
}
TaskModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: TaskModule });
TaskModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ factory: function TaskModule_Factory(t) { return new (t || TaskModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
            _tasksrouting_module__WEBPACK_IMPORTED_MODULE_9__["TasksRoutingModule"],
            _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_3__["AngularMaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](TaskModule, { declarations: [_tasks_component__WEBPACK_IMPORTED_MODULE_8__["TasksComponent"],
        _tasks_list_tasks_list_component__WEBPACK_IMPORTED_MODULE_7__["TasksListComponent"],
        _tasks_list_task_item_task_item_component__WEBPACK_IMPORTED_MODULE_5__["TaskItemComponent"],
        _task_dialog_task_dialog_component__WEBPACK_IMPORTED_MODULE_4__["TaskDialogComponent"],
        _tasks_list_task_item_task_preview_dialog_task_preview_dialog_component__WEBPACK_IMPORTED_MODULE_6__["TaskPreviewDialogComponent"],
        _tasks_start_tasks_start_component__WEBPACK_IMPORTED_MODULE_10__["TasksStartComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
        _tasksrouting_module__WEBPACK_IMPORTED_MODULE_9__["TasksRoutingModule"],
        _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_3__["AngularMaterialModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetComponentScope"](_tasks_component__WEBPACK_IMPORTED_MODULE_8__["TasksComponent"], [_tasks_list_tasks_list_component__WEBPACK_IMPORTED_MODULE_7__["TasksListComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], []);
_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetComponentScope"](_tasks_start_tasks_start_component__WEBPACK_IMPORTED_MODULE_10__["TasksStartComponent"], [_tasks_list_task_item_task_preview_dialog_task_preview_dialog_component__WEBPACK_IMPORTED_MODULE_6__["TaskPreviewDialogComponent"]], []);


/***/ }),

/***/ "S3+y":
/*!**************************************!*\
  !*** ./src/app/store/app.reducer.ts ***!
  \**************************************/
/*! exports provided: AppReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppReducer", function() { return AppReducer; });
/* harmony import */ var _tasks_store_Task_reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tasks/store/Task.reducers */ "fMGt");
/* harmony import */ var _login_store_auth_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login/store/auth.reducer */ "oEHs");


const AppReducer = {
    Tasks: _tasks_store_Task_reducers__WEBPACK_IMPORTED_MODULE_0__["TaskReducers"],
    Auth: _login_store_auth_reducer__WEBPACK_IMPORTED_MODULE_1__["authReducer"]
};


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _admin_nav_admin_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-nav/admin-nav.component */ "+BpQ");


class AppComponent {
    constructor() {
        this.title = 'taskManger';
    }
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-admin-nav");
    } }, directives: [_admin_nav_admin_nav_component__WEBPACK_IMPORTED_MODULE_1__["AdminNavComponent"]], styles: ["body[_ngcontent-%COMP%] {\n  background: #f9f9f9 !important;\n}\n\n.card.bg-secondary.shadow[_ngcontent-%COMP%] {\n  background: #ddd !important;\n  border: none !important;\n}\n\n.card.bg-secondary.shadow.ng-star-inserted[_ngcontent-%COMP%] {\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7QUFDSjs7QUFDQTtFQUNJLDJCQUFBO0VBQ0EsdUJBQUE7QUFFSjs7QUFBRTtFQUNFLFlBQUE7QUFHSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xyXG4gICAgYmFja2dyb3VuZDogI2Y5ZjlmOSAhaW1wb3J0YW50O1xyXG59XHJcbi5jYXJkLmJnLXNlY29uZGFyeS5zaGFkb3cge1xyXG4gICAgYmFja2dyb3VuZDogI2RkZCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5jYXJkLmJnLXNlY29uZGFyeS5zaGFkb3cubmctc3Rhci1pbnNlcnRlZCB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgfSJdfQ== */"] });


/***/ }),

/***/ "VQQV":
/*!*************************************!*\
  !*** ./src/app/login/auth.guard.ts ***!
  \*************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "kt0X");




class AuthGuard {
    constructor(router, store) {
        this.router = router;
        this.store = store;
    }
    canActivate(route, router) {
        return this.store.select('Auth').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(authState => {
            return authState.user;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(user => {
            const IsAuth = !!user;
            if (IsAuth) {
                return true;
            }
            return this.router.createUrlTree(['/home']);
        }));
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "VWqz":
/*!**********************************************!*\
  !*** ./src/app/tasks/tasksrouting.module.ts ***!
  \**********************************************/
/*! exports provided: TasksRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksRoutingModule", function() { return TasksRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login/auth.guard */ "VQQV");
/* harmony import */ var _tasks_list_task_item_task_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks-list/task-item/task-item.component */ "NiYA");
/* harmony import */ var _tasks_list_task_item_task_preview_dialog_task_preview_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tasks-list/task-item/task-preview-dialog/task-preview-dialog.component */ "jTa0");
/* harmony import */ var _tasks_start_tasks_start_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tasks-start/tasks-start.component */ "2DKC");
/* harmony import */ var _tasks_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tasks.component */ "GXPF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








const routes = [
    { path: '', component: _tasks_component__WEBPACK_IMPORTED_MODULE_5__["TasksComponent"],
        canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
        children: [
            { path: 'taskItem', component: _tasks_list_task_item_task_item_component__WEBPACK_IMPORTED_MODULE_2__["TaskItemComponent"] },
            { path: ':id', component: _tasks_list_task_item_task_preview_dialog_task_preview_dialog_component__WEBPACK_IMPORTED_MODULE_3__["TaskPreviewDialogComponent"] },
        ] },
    { path: 'taskStart/:id/:title', component: _tasks_start_tasks_start_component__WEBPACK_IMPORTED_MODULE_4__["TasksStartComponent"] }
];
class TasksRoutingModule {
}
TasksRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: TasksRoutingModule });
TasksRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ factory: function TasksRoutingModule_Factory(t) { return new (t || TasksRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](TasksRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();
;


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _admin_nav_admin_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-nav/admin-nav.component */ "+BpQ");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var dhtmlx_scheduler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! dhtmlx-scheduler */ "T7+c");
/* harmony import */ var dhtmlx_scheduler__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(dhtmlx_scheduler__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "lDzL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ "kt0X");
/* harmony import */ var _tasks_shared_loadingSpinner_loadingSpinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tasks/shared/loadingSpinner/loadingSpinner */ "6iBv");
/* harmony import */ var _user_page_email_email_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user-page/email/email.component */ "5M5s");
/* harmony import */ var _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./confirm/confirm.component */ "kOC7");
/* harmony import */ var _store_app_reducer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./store/app.reducer */ "S3+y");
/* harmony import */ var _login_store_auth_effects__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./login/store/auth.effects */ "iL9x");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngrx/store-devtools */ "B3rN");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngrx/router-store */ "Ta0S");
/* harmony import */ var _tasks_tasks_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./tasks/tasks.module */ "S1vP");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngrx/effects */ "snw9");
/* harmony import */ var _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./angular-material/angular-material.module */ "PI13");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tasks_store_tasks_effects__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./tasks/store/tasks.effects */ "fH2T");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ "fXoL");



























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_19__["AngularMaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__["AppRoutingModule"],
            _tasks_tasks_module__WEBPACK_IMPORTED_MODULE_17__["TaskModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__["NgxDatatableModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["StoreModule"].forRoot(_store_app_reducer__WEBPACK_IMPORTED_MODULE_13__["AppReducer"]),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_18__["EffectsModule"].forRoot([_login_store_auth_effects__WEBPACK_IMPORTED_MODULE_14__["AuthEffects"], _tasks_store_tasks_effects__WEBPACK_IMPORTED_MODULE_21__["tasksEffects"]]),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__["StoreDevtoolsModule"].instrument({ logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production }),
            _ngrx_router_store__WEBPACK_IMPORTED_MODULE_16__["StoreRouterConnectingModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
        _admin_nav_admin_nav_component__WEBPACK_IMPORTED_MODULE_4__["AdminNavComponent"],
        _tasks_shared_loadingSpinner_loadingSpinner__WEBPACK_IMPORTED_MODULE_10__["LoadingSpiner"],
        _user_page_email_email_component__WEBPACK_IMPORTED_MODULE_11__["EmailComponent"],
        _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_12__["ConfirmComponent"]], imports: [_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_19__["AngularMaterialModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__["AppRoutingModule"],
        _tasks_tasks_module__WEBPACK_IMPORTED_MODULE_17__["TaskModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__["NgxDatatableModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["StoreRootModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_18__["ɵngrx_modules_effects_effects_b"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__["StoreDevtoolsModule"], _ngrx_router_store__WEBPACK_IMPORTED_MODULE_16__["StoreRouterConnectingModule"]] }); })();


/***/ }),

/***/ "fH2T":
/*!**********************************************!*\
  !*** ./src/app/tasks/store/tasks.effects.ts ***!
  \**********************************************/
/*! exports provided: tasksEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tasksEffects", function() { return tasksEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _Task_Action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task.Action */ "y0fk");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "snw9");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "kt0X");









class tasksEffects {
    constructor(http, acion$, store) {
        this.http = http;
        this.acion$ = acion$;
        this.store = store;
        this.storeTasks = this.acion$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_Task_Action__WEBPACK_IMPORTED_MODULE_1__["store_Tasks"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(this.store.select('Tasks')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(([actionData, taskState]) => {
            return this.http.put('https://httprequestt-default-rtdb.firebaseio.com/task.json', taskState.tasks);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => {
            console.log(data);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(err => {
            console.log(err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({});
        }));
    }
}
tasksEffects.ɵfac = function tasksEffects_Factory(t) { return new (t || tasksEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"])); };
tasksEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: tasksEffects, factory: tasksEffects.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false })
], tasksEffects.prototype, "storeTasks", void 0);


/***/ }),

/***/ "fMGt":
/*!**********************************************!*\
  !*** ./src/app/tasks/store/Task.reducers.ts ***!
  \**********************************************/
/*! exports provided: TaskReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskReducers", function() { return TaskReducers; });
/* harmony import */ var _tasks_model_tasks_model_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tasks-model/tasks-model.module */ "AUx9");
/* harmony import */ var _Task_Action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task.Action */ "y0fk");


const initializing = {
    tasks: [new _tasks_model_tasks_model_module__WEBPACK_IMPORTED_MODULE_0__["TasksModule"]('business', 'first', 'first description', new Date(), new Date(), 'yes', false, [], 'ToDo')
    ],
    users: [],
    updatingTask: null,
    updatingIndex: -1,
};
function TaskReducers(
//initializing the value
state = initializing, action) {
    switch (action.type) {
        case _Task_Action__WEBPACK_IMPORTED_MODULE_1__["Add_Task"]:
            return Object.assign(Object.assign({}, state), { 
                //to select it at TaskList
                tasks: [...state.tasks, action.payload
                ] });
        case _Task_Action__WEBPACK_IMPORTED_MODULE_1__["Add_Tasks"]:
            console.log(action.payload);
            return Object.assign(Object.assign({}, state), { tasks: [...action.payload] });
        case _Task_Action__WEBPACK_IMPORTED_MODULE_1__["Updated_Item"]:
            const Task = state.updatingTask;
            let updatingTask = Object.assign(Object.assign({}, Task), action.payload);
            const updatingTasks = [...state.tasks];
            updatingTasks[state.updatingIndex] = updatingTask;
            return Object.assign(Object.assign({}, state), { tasks: updatingTasks, updatingTask: updatingTask, updatingIndex: -1 });
        case _Task_Action__WEBPACK_IMPORTED_MODULE_1__["ADD_INNER"]:
            const TaskUSer = state.updatingTask;
            return Object.assign(Object.assign({}, state), { users: [
                    ...state.users,
                    action.payload
                ] });
        case _Task_Action__WEBPACK_IMPORTED_MODULE_1__["Deleted_Item"]:
            return Object.assign(Object.assign({}, state), { tasks: state.tasks.filter((ig, igIndex) => {
                    return igIndex !== action.payload;
                }) });
        case _Task_Action__WEBPACK_IMPORTED_MODULE_1__["StartEdit"]:
            return Object.assign(Object.assign({}, state), { updatingIndex: action.payload, updatingTask: Object.assign({}, state.tasks[action.payload]) });
        case _Task_Action__WEBPACK_IMPORTED_MODULE_1__["stopEdit"]:
            return Object.assign(Object.assign({}, state), { updatingIndex: -1, updatingTask: null });
        case _Task_Action__WEBPACK_IMPORTED_MODULE_1__["TITLEEDIT"]:
            const TitleTaskB = state.updatingTask;
            const UTaskTitle = Object.assign(Object.assign({}, TitleTaskB), { projectTitle: action.payload });
            const UpdatingTasksTitle = [...state.tasks];
            UpdatingTasksTitle[state.updatingIndex] = UTaskTitle;
            return Object.assign(Object.assign({}, state), { tasks: UpdatingTasksTitle, updatingTask: UTaskTitle, updatingIndex: -1 });
        case _Task_Action__WEBPACK_IMPORTED_MODULE_1__["TASKTYPEDIT"]:
            let TASKTYPEDIT = state.updatingTask;
            const updateTaskType = Object.assign(Object.assign({}, TASKTYPEDIT), { taskType: action.payload });
            let updatingATasksType = [...state.tasks];
            updatingATasksType[state.updatingIndex] = updateTaskType;
            return Object.assign(Object.assign({}, state), { tasks: updatingATasksType, updatingTask: updateTaskType, updatingIndex: -1 });
        case _Task_Action__WEBPACK_IMPORTED_MODULE_1__["TAGS"]:
            let Tags = state.updatingTask;
            const updateTaskTag = Object.assign(Object.assign({}, Tags), { tags: [
                    ...Tags.tags,
                    action.payload
                ] });
            let updatingATasksTags = [...state.tasks];
            updatingATasksTags[state.updatingIndex] = updateTaskTag;
            return Object.assign(Object.assign({}, state), { tasks: updatingATasksTags, updatingTask: updateTaskTag, updatingIndex: -1 });
        case _Task_Action__WEBPACK_IMPORTED_MODULE_1__["DELETETAG"]:
            const updatingTaskTag = state.updatingTask;
            // updatingTaskTag.tags.splice(acti on.payload,1);
            console.log(updatingTaskTag);
            return Object.assign({}, state // updatingTask:updatingTask.tags.splice(action.payload,1)
            );
        case _Task_Action__WEBPACK_IMPORTED_MODULE_1__["SCEdit"]:
            let SCEdit = state.updatingTask;
            const updateTaskDate = Object.assign(Object.assign({}, SCEdit), { scheduleStart: action.payload.start, scheduleEnd: action.payload.end });
            let updatingATasksDate = [...state.tasks];
            updatingATasksDate[state.updatingIndex] = updateTaskDate;
            console.log(updateTaskDate);
            return Object.assign(Object.assign({}, state), { tasks: updatingATasksDate, updatingTask: updateTaskDate, updatingIndex: -1 });
        case _Task_Action__WEBPACK_IMPORTED_MODULE_1__["ActiveProject"]:
            let task = state.updatingTask;
            const updateTask = Object.assign(Object.assign({}, task), { statues: action.payload });
            let updatingATasks = [...state.tasks];
            updatingATasks[state.updatingIndex] = updateTask;
            return Object.assign(Object.assign({}, state), { tasks: updatingATasks, updatingTask: updateTask, updatingIndex: -1 });
        case _Task_Action__WEBPACK_IMPORTED_MODULE_1__["PROGRESS_VALUE"]:
            const TASKWITHPROGRESS = state.updatingTask;
            const updateTaskProgress = Object.assign(Object.assign({}, TASKWITHPROGRESS), { progress: action.payload });
            const ALLTASKS = [...state.tasks];
            ALLTASKS[state.updatingIndex] = updateTaskProgress,
                console.log(ALLTASKS);
            return Object.assign(Object.assign({}, state), { tasks: ALLTASKS, updatingTask: updateTaskProgress, updatingIndex: -1 });
        case _Task_Action__WEBPACK_IMPORTED_MODULE_1__["DESCRIPTIONEDIT"]:
            const DESCRIPTIONEDIT = state.updatingTask;
            const updateTaskDESCRIPTIONEDIT = Object.assign(Object.assign({}, DESCRIPTIONEDIT), { description: action.payload });
            const ALLTASKSDESCRIPTION = [...state.tasks];
            ALLTASKSDESCRIPTION[state.updatingIndex] = updateTaskDESCRIPTIONEDIT;
            return Object.assign(Object.assign({}, state), { tasks: ALLTASKSDESCRIPTION, updatingTask: updateTaskDESCRIPTIONEDIT, updatingIndex: -1 });
        case _Task_Action__WEBPACK_IMPORTED_MODULE_1__["PIORTYEDIT"]:
            const PIORTYEDIT = state.updatingTask;
            const updateTaskPIORTYEDIT = Object.assign(Object.assign({}, PIORTYEDIT), { piorty: action.payload });
            const ALLTASKSPiorty = [...state.tasks];
            ALLTASKSPiorty[state.updatingIndex] = updateTaskPIORTYEDIT;
            return Object.assign(Object.assign({}, state), { tasks: ALLTASKSPiorty, updatingTask: updateTaskPIORTYEDIT, updatingIndex: -1 });
        case _Task_Action__WEBPACK_IMPORTED_MODULE_1__["setGroupOwner"]:
            const TASKWITHOUTGA = state.updatingTask;
            const updatingTASKWITHGO = Object.assign(Object.assign({}, TASKWITHOUTGA), { group: action.payload.group, owner: action.payload.owner });
            console.log(updatingTASKWITHGO);
            const UPDATINGATASKSWITHOG = [...state.tasks];
            UPDATINGATASKSWITHOG[state.updatingIndex] = updatingTASKWITHGO;
            console.log(UPDATINGATASKSWITHOG);
            return Object.assign(Object.assign({}, state), { tasks: UPDATINGATASKSWITHOG, updatingTask: updatingTASKWITHGO, updatingIndex: -1 });
        default: return state;
    }
}


/***/ }),

/***/ "iL9x":
/*!*********************************************!*\
  !*** ./src/app/login/store/auth.effects.ts ***!
  \*********************************************/
/*! exports provided: AuthEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthEffects", function() { return AuthEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "snw9");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_user_user_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/user/user.module */ "7UCR");
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.actions */ "S0FY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");










class AuthEffects {
    constructor(action$, http, router) {
        this.action$ = action$;
        this.http = http;
        this.router = router;
        this.authSignUp = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_auth_actions__WEBPACK_IMPORTED_MODULE_5__["Sin_Up_start"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((siUpdata) => {
            return this.http
                .post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCxSIovXABL9J3NBNV1PRXNtW_a_5ZEO1s`, {
                email: siUpdata.payload.email,
                password: siUpdata.payload.password,
                returnSecureToken: true
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => {
                const expressionDate = new Date(new Date().getTime() + +data.expiresIn * 1000);
                return new _auth_actions__WEBPACK_IMPORTED_MODULE_5__["Signup"]({ email: data.email,
                    userId: data.localId,
                    token: data.idToken,
                    expirationDate: expressionDate });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(errRsp => {
                let message = 'unkown Error occurced';
                console.log(errRsp);
                if (!errRsp.error || !errRsp.error.error) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _auth_actions__WEBPACK_IMPORTED_MODULE_5__["LoginFaild"](message));
                }
                switch (errRsp.error.error.message) {
                    case 'EMAIL_EXISTS':
                        message = 'this email exists already';
                        break;
                    case "EMAIL_NOT_FOUND":
                        message = "this email does't exist";
                        break;
                    case "INVALID_PASSWORD":
                        message = 'please enter valid passowrd';
                        break;
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _auth_actions__WEBPACK_IMPORTED_MODULE_5__["LoginFaild"](message));
            }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => {
            this.router.navigate(['/tasks']);
        }));
        this.authLogin = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_auth_actions__WEBPACK_IMPORTED_MODULE_5__["login_start"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((authData) => {
            return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCxSIovXABL9J3NBNV1PRXNtW_a_5ZEO1s', {
                email: authData.payload.email,
                password: authData.payload.password,
                returnSecureToken: true
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(AuthData => {
                const expressionDate = new Date(new Date().getTime() + +AuthData.expiresIn * 1000);
                return new _auth_actions__WEBPACK_IMPORTED_MODULE_5__["login"]({ email: AuthData.email,
                    userId: AuthData.localId,
                    token: AuthData.idToken,
                    expirationDate: expressionDate });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(AuthSucces => {
                // const expressionDate =new Date( new Date().getTime() + +AuthSucces.payload.*1000)
                const user = new src_app_user_user_module__WEBPACK_IMPORTED_MODULE_4__["User"](AuthSucces.payload.userId, AuthSucces.payload.email, AuthSucces.payload.token, AuthSucces.payload.expirationDate);
                localStorage.setItem('user', JSON.stringify(user));
                this.router.navigate(['tasks']);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((errRsp) => {
                let message = 'unkown Error occurced';
                console.log(errRsp);
                if (!errRsp.error || !errRsp.error.error) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _auth_actions__WEBPACK_IMPORTED_MODULE_5__["LoginFaild"](message));
                }
                switch (errRsp.error.error.message) {
                    case 'EMAIL_EXISTS':
                        message = 'this email exists already';
                        break;
                    case "EMAIL_NOT_FOUND":
                        message = "this email does't exist";
                        break;
                    case "INVALID_PASSWORD":
                        message = 'please enter valid passowrd';
                        break;
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _auth_actions__WEBPACK_IMPORTED_MODULE_5__["LoginFaild"](message));
            }));
        }));
        this.autoLOGIN = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_auth_actions__WEBPACK_IMPORTED_MODULE_5__["AutoLogIn"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => {
            const userData = JSON.parse(localStorage.getItem('user'));
            if (userData) {
                const loadedData = new src_app_user_user_module__WEBPACK_IMPORTED_MODULE_4__["User"](userData.id, userData.email, userData._token, new Date(userData._tokenExprationDate));
                if (loadedData.token) {
                    return new _auth_actions__WEBPACK_IMPORTED_MODULE_5__["login"]({
                        email: userData.email,
                        userId: userData.id,
                        token: userData._token,
                        expirationDate: new Date(userData._tokenExprationDate)
                    });
                }
                return { type: 'dummy' };
            }
            return { type: 'dummy' };
        })));
        this.logOut = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_auth_actions__WEBPACK_IMPORTED_MODULE_5__["LOGOUT"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => {
            localStorage.removeItem('user');
            this.router.navigate(['/home']);
            return new _auth_actions__WEBPACK_IMPORTED_MODULE_5__["LogOut"]();
        }));
        this.loginSucces = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_auth_actions__WEBPACK_IMPORTED_MODULE_5__["AuthenticatedSucces"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => {
            // this.router.navigate(['/tasks/0'])
        }));
    }
}
AuthEffects.ɵfac = function AuthEffects_Factory(t) { return new (t || AuthEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"])); };
AuthEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: AuthEffects, factory: AuthEffects.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])()
], AuthEffects.prototype, "authSignUp", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])()
], AuthEffects.prototype, "authLogin", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])({ dispatch: false })
], AuthEffects.prototype, "logOut", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])({ dispatch: false })
], AuthEffects.prototype, "loginSucces", void 0);


/***/ }),

/***/ "iT0a":
/*!************************************************************!*\
  !*** ./src/app/tasks/task-dialog/task-dialog.component.ts ***!
  \************************************************************/
/*! exports provided: TaskDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskDialogComponent", function() { return TaskDialogComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _store_Task_Action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/Task.Action */ "y0fk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "kt0X");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");















const _c0 = ["info"];
function TaskDialogComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Add Task ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "reset");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "save");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !_r0.valid);
} }
function TaskDialogComponent_div_4_mat_form_field_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-form-field", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "other ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TaskDialogComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "form", 0, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function TaskDialogComponent_div_4_Template_form_ngSubmit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r6.roleSubmitted(_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "select your role ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "task");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-form-field", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-select", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "business");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "personal");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, TaskDialogComponent_div_4_mat_form_field_15_Template, 4, 0, "mat-form-field", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "next");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.other);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !_r4.valid);
} }
function TaskDialogComponent_div_5_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-form-field", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Company");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TaskDialogComponent_div_5_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r9.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r9.des, " ");
} }
function TaskDialogComponent_div_5_mat_error_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Invalid start date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TaskDialogComponent_div_5_mat_error_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Invalid end date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TaskDialogComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, TaskDialogComponent_div_5_div_3_Template, 5, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-form-field", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Project Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function TaskDialogComponent_div_5_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r13.title = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-form-field", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "type your Description...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function TaskDialogComponent_div_5_Template_input_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r15.des = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "description");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "28/1000");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, TaskDialogComponent_div_5_div_18_Template, 5, 2, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "mat-form-field", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "notify me");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "mat-select", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "mat-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "mat-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "mat-expansion-panel", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, " Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "mat-form-field", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Enter a date range");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "mat-date-range-input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "mat-datepicker-toggle", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "mat-date-range-picker", null, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](44, TaskDialogComponent_div_5_mat_error_44_Template, 2, 0, "mat-error", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](45, TaskDialogComponent_div_5_mat_error_45_Template, 2, 0, "mat-error", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "mat-expansion-panel", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, " Attachments ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Attachments");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](54, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](43);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.business);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r3.des);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.des || ctx_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("expanded", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rangePicker", _r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", _r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.range.controls.start.hasError("matStartDateInvalid"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.range.controls.end.hasError("matEndDateInvalid"));
} }
;
class TaskDialogComponent {
    constructor(dialogRef, store) {
        this.dialogRef = dialogRef;
        this.store = store;
        this.other = false;
        this.role = true;
        this.personalSelected = false;
        this.selected = 'business';
        this.selectedD = 'active';
        this.editMode = false;
        this.typesOfRoles = ['Hr', 'Hr analyst ', 'Hr Team Lead', 'Hr Business Partner', 'presonal'];
        this.business = false;
        this.Notes = [];
        this.List = [];
        this.TypeSelected = "ToDo";
        this.range = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            start: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
            end: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
        });
    }
    ngOnInit() {
        // this.store.select('Tasks').subscribe(state=>{
        //   if(state.updatingIndex>-1 &&state.updatingTask!==null){
        //     this.editMode = true;
        //     this.taskAdd.setValue({
        //      'title':state.updatingTask.title,
        //      'description':state.updatingTask.description,
        //      'scheduleStart':state.updatingTask.scheduleStart,
        //      'scheduleEnd':state.updatingTask.scheduleEnd,
        //                'owner':state.updatingTask.owner,
        //                    // 'piorty':new FormControl('option1'), 
        //                    'notify':state.updatingTask.notify,
        //                    'taskType':state.updatingTask.taskType,
        //                    'statues':state.updatingTask.statues
        //     })
        //   }
        //   else{
        //     this.editMode=false;
        //     this.taskAdd.reset()
        //   }
    }
    roleSubmitted(role) {
        this.role = false;
        this.roleI = role.value.roleInfo;
        if (role.value.roleInfo === 'business') {
            this.business = true;
        }
        else if (role.value.roleInfo === 'personal') {
            this.business = false;
        }
    }
    close(i) {
        console.log(i);
        this.Notes.splice(i, 1);
    }
    deleteList(i) {
        this.List.splice(i, 1);
    }
    formSubmitted(i) {
        const selectedRole = this.roleI;
        const companyName = i.value.companyName;
        const notify = i.value.notify;
        const projectTitle = i.value.projectTitle;
        const description = i.value.description;
        const scheduleStart = i.value.start;
        const scheduleEnd = i.value.end;
        // console.log(i)
        const Taskinfo = {
            selectedRole,
            projectTitle,
            description,
            scheduleStart,
            scheduleEnd,
            notify,
            statues: false,
            companyName,
            tags: []
        };
        this.store.dispatch(new _store_Task_Action__WEBPACK_IMPORTED_MODULE_1__["AddTask"](Taskinfo));
        this.editMode = false;
        this.dialogRef.close();
        i.reset();
        this.store.select('Tasks').subscribe(tasks => {
            console.log(tasks);
        });
    }
    ngOnDestroy() {
        this.store.dispatch(new _store_Task_Action__WEBPACK_IMPORTED_MODULE_1__["StopEdit"]());
    }
}
TaskDialogComponent.ɵfac = function TaskDialogComponent_Factory(t) { return new (t || TaskDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"])); };
TaskDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TaskDialogComponent, selectors: [["app-task-dialog"]], viewQuery: function TaskDialogComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.TaskInfo = _t.first);
    } }, decls: 6, vars: 3, consts: [[3, "ngSubmit"], ["info", "ngForm"], ["class", "add-task-header", "style", "display: flex;", 4, "ngIf"], [1, "roule", "row"], ["class", "col-md-12", 4, "ngIf"], ["class", "row add-task", "style", "overflow: auto;", 4, "ngIf"], [1, "add-task-header", 2, "display", "flex"], [1, "addTaskText", 2, "width", "70%"], [1, "d-grid", "gap-2", "d-md-flex", "justify-content-md-end", "button", 2, "width", "30%"], [1, "example-button-row"], ["mat-raised-button", "", "type", "reset"], ["type", "submit", "mat-raised-button", "", "color", "primary", 1, "ml-2", 3, "disabled"], [1, "col-md-12"], [1, "taskRole"], ["roles", "ngForm"], [1, "icon"], ["appearance", "fill"], ["value", "roles", "name", "roleInfo", "ngModel", "", "required", ""], ["value", "business"], ["value", "personal"], ["class", "example-full-width", "appearance", "fill", 4, "ngIf"], ["type", "submit", "mat-button", "", "color", "primary", 1, "next", 3, "disabled"], ["appearance", "fill", 1, "example-full-width"], ["matInput", "", "name", "other", "ngModel", ""], [1, "row", "add-task", 2, "overflow", "auto"], [1, "col-md-7", "left"], [1, "row_1"], ["class", "companyname ", 4, "ngIf"], [1, "title"], ["matInput", "", "required", "", "name", "projectTitle", "ngModel", "", 3, "ngModel", "ngModelChange"], [1, "description", "mt-3", "mb-5"], ["appearance", "legacy", 2, "width", "100%"], ["required", "", "matInput", "", "placeholder", "Description", "name", "description", "ngModel", "", 3, "ngModel", "ngModelChange"], ["matSuffix", ""], ["class", "_description mt-2", 4, "ngIf"], [1, "group", "flex"], [1, "notify", "ml-3"], [1, "mat-input"], ["name", "notify", "ngModel", ""], ["value", "yes"], [1, "col-md-5", "right"], [1, "schadul", "mt-1"], [1, "exptional", 3, "expanded"], [3, "rangePicker"], ["matStartDate", "", "name", "start", "ngModel", "", "placeholder", "Start date", "required", ""], ["matEndDate", "", "name", "end", "ngModel", "", "placeholder", "End date", "required", ""], ["matSuffix", "", 3, "for"], ["picker", ""], [4, "ngIf"], [1, "formupload"], [1, "exptional"], ["type", "file"], [1, "col", "mt-1", "subTask"], [1, "companyname"], ["matInput", "", "value", "company name", "name", "companyName", "ngModel", ""], [1, "_description", "mt-2"], [1, "descriptionInput"]], template: function TaskDialogComponent_Template(rf, ctx) { if (rf & 1) {
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function TaskDialogComponent_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1); return ctx.formSubmitted(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, TaskDialogComponent_div_2_Template, 9, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, TaskDialogComponent_div_4_Template, 18, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, TaskDialogComponent_div_5_Template, 56, 9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.role);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.role);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.role);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatHint"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionPanelTitle"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDateRangeInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatStartDate"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatEndDate"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerToggle"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDateRangePicker"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"]], styles: ["._description[_ngcontent-%COMP%] {\n  padding: 10px;\n  border: 1px solid #ddd;\n  height: 100px;\n  font-size: 12px;\n  color: #3f51b5;\n  border-radius: 10px;\n}\n\n.first-row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.cdk-global-overlay-wrappe[_ngcontent-%COMP%] {\n  overflow-y: auto;\n}\n\nli.list-group-item[_ngcontent-%COMP%] {\n  padding: 3px 2px;\n}\n\n.expended[_ngcontent-%COMP%] {\n  height: 300px;\n  overflow: auto;\n}\n\n.row.add-task[_ngcontent-%COMP%] {\n  height: 490px;\n  overflow: auto;\n  overflow-x: hidden;\n}\n\n.add-note-icon[_ngcontent-%COMP%] {\n  margin: auto 14px;\n  padding: 6px;\n  cursor: pointer;\n}\n\n.add-note-icon[_ngcontent-%COMP%]:hover {\n  color: blue;\n}\n\n.icon[_ngcontent-%COMP%] {\n  font-size: 17px;\n  margin: auto -2px;\n}\n\n.button[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  padding: 10px;\n}\n\n.left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  padding: 27px;\n  overflow: hidden;\n}\n\n.exptional[_ngcontent-%COMP%] {\n  border: none !important;\n  background: #fff !important;\n  box-shadow: none !important;\n  margin-left: 0px !important;\n}\n\n.next[_ngcontent-%COMP%] {\n  text-align: right;\n  width: 100%;\n}\n\n.previous[_ngcontent-%COMP%] {\n  text-align: left;\n  width: 100%;\n}\n\n.others[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-size: 13px;\n}\n\n.others[_ngcontent-%COMP%]:hover {\n  color: blue;\n}\n\n.edit[_ngcontent-%COMP%] {\n  font-size: 11px;\n  cursor: pointer;\n  text-align: end;\n  width: 12%;\n  margin: auto 12px;\n}\n\n.row_1[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0YXNrLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVRLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBRFI7O0FBSUk7RUFDSSxrQkFBQTtBQURSOztBQUlBO0VBQ0ksZ0JBQUE7QUFESjs7QUFHQTtFQUNJLGdCQUFBO0FBQUo7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUNBO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUFBO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUdKOztBQUZBO0VBQ0EsV0FBQTtBQUlBOztBQURBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FBSUo7O0FBRkE7RUFDSSxpQkFBQTtFQUNBLGFBQUE7QUFLSjs7QUFIQTtFQUNJLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBTUo7O0FBSkE7RUFDSSx1QkFBQTtFQUNFLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtBQU9OOztBQUxFO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0FBUUo7O0FBTkU7RUFDRSxnQkFBQTtFQUNBLFdBQUE7QUFTSjs7QUFQRTtFQUNNLGVBQUE7RUFDQSxlQUFBO0FBVVI7O0FBVFE7RUFDSSxXQUFBO0FBV1o7O0FBUkk7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUFXUjs7QUFUSTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQVlSIiwiZmlsZSI6InRhc2stZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5fZGVzY3JpcHRpb257XHJcbiAgICBcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgY29sb3I6ICMzZjUxYjU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIH1cclxuLmZpcnN0LXJvd3tcclxuICAgIGRpdntcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuLmNkay1nbG9iYWwtb3ZlcmxheS13cmFwcGV7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcbmxpLmxpc3QtZ3JvdXAtaXRlbXtcclxuICAgIHBhZGRpbmc6IDNweCAycHg7fVxyXG5cclxuLmV4cGVuZGVke1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcbi5yb3cuYWRkLXRhc2sge1xyXG4gICAgaGVpZ2h0OiA0OTBweDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcbi5hZGQtbm90ZS1pY29ue1xyXG4gICAgbWFyZ2luOiBhdXRvIDE0cHg7XHJcbiAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiY6aG92ZXJ7XHJcbmNvbG9yOiBibHVlO31cclxuXHJcbn1cclxuLmljb257XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBtYXJnaW46IGF1dG8gLTJweDtcclxufVxyXG4uYnV0dG9ue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbi5sZWZ0LC5yaWdodHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBwYWRkaW5nOiAyN3B4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uZXhwdGlvbmFse1xyXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcclxuICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5uZXh0e1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLnByZXZpb3Vze1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAub3RoZXJze1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgY29sb3I6IGJsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmVkaXQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgICAgIHdpZHRoOiAxMiU7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvIDEycHg7XHJcbiAgICB9XHJcbiAgICAucm93XzF7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB9Il19 */"] });


/***/ }),

/***/ "jTa0":
/*!*************************************************************************************************!*\
  !*** ./src/app/tasks/tasks-list/task-item/task-preview-dialog/task-preview-dialog.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: TaskPreviewDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskPreviewDialogComponent", function() { return TaskPreviewDialogComponent; });
/* harmony import */ var _store_Task_Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../store/Task.Action */ "y0fk");
/* harmony import */ var src_app_tasks_task_dialog_task_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/tasks/task-dialog/task-dialog.component */ "iT0a");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_user_userTaskList_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/user/userTaskList.module */ "E8aF");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_tasks_shared_loadingSpinner_tag_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/tasks/shared/loadingSpinner/tag.module */ "Kh4F");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ "kt0X");
/* harmony import */ var src_app_tasks_store_Task_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/tasks/store/Task.service */ "ogha");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/list */ "MutI");




























const _c0 = ["userTask"];
function TaskPreviewDialogComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "edit title");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "form", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function TaskPreviewDialogComponent_div_10_Template_form_ngSubmit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14); const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](8); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r13.titleEdit(_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "mat-form-field", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "title");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "input", 93, 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "mat-icon", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "save");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx_r0.task.projectTitle);
} }
function TaskPreviewDialogComponent_mat_slider_75_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-slider", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function TaskPreviewDialogComponent_mat_slider_75_Template_mat_slider_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r15.value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r2.value)("value", ctx_r2.value);
} }
function TaskPreviewDialogComponent_form_92_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "form", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function TaskPreviewDialogComponent_form_92_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r19); const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](7); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r18.descreptionEdit(_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "edit discription");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "mat-form-field", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "description");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "textarea", 97, 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "mat-icon", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "save");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "button", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "save");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx_r3.task.description);
} }
function TaskPreviewDialogComponent_mat_chip_list_98_mat_chip_1_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-chip");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-icon", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TaskPreviewDialogComponent_mat_chip_list_98_mat_chip_1_Template_mat_icon_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r24); const i_r22 = restoredCtx.index; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r23.deleteTag(i_r22); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", tag_r21.tag, " ");
} }
const _c1 = function () { return []; };
function TaskPreviewDialogComponent_mat_chip_list_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-chip-list", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, TaskPreviewDialogComponent_mat_chip_list_98_mat_chip_1_Template, 4, 1, "mat-chip", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r4.task.tags ? ctx_r4.task.tags : _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](1, _c1));
} }
function TaskPreviewDialogComponent_p_108_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r6.errorMessage);
} }
function TaskPreviewDialogComponent_div_128_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "form", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function TaskPreviewDialogComponent_div_128_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r25.piortySubmitted(ctx_r25.piorty); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-form-field", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "mat-select", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("valueChange", function TaskPreviewDialogComponent_div_128_Template_mat_select_valueChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r27.piorty = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "mat-option");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "None");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "mat-option", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "low");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "mat-option", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "medium");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "mat-option", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "important");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "button", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "save");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx_r7.piorty)("value", ctx_r7.task.piorty ? ctx_r7.task.piorty : "low");
} }
function TaskPreviewDialogComponent_div_144_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "form", 12, 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function TaskPreviewDialogComponent_div_144_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r32); const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](2); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r31.NEWDATESUBMITTED(_r28); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "mat-form-field", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Choose a date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "input", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "mat-datepicker-toggle", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "mat-datepicker", null, 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "mat-datepicker-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "button", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "button", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Apply");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "mat-form-field", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "Choose a date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](21, "input", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](22, "mat-datepicker-toggle", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "mat-datepicker", null, 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "mat-datepicker-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "button", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "button", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "Apply");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "button", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, "save");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](11);
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](24);
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matDatepicker", _r29)("value", ctx_r8.scStart);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("for", _r29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx_r8.scEnd)("matDatepicker", _r30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("for", _r30);
} }
function TaskPreviewDialogComponent_mat_tab_145_mat_expansion_panel_10_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 134, 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TaskPreviewDialogComponent_mat_tab_145_mat_expansion_panel_10_div_5_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r42); const i_r39 = restoredCtx.index; const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](1); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r41.TaskClicked(i_r39, _r40); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "input", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "label", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const taskItem_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](taskItem_r38.taskTitle);
} }
function TaskPreviewDialogComponent_mat_tab_145_mat_expansion_panel_10_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-expansion-panel", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TaskPreviewDialogComponent_mat_tab_145_mat_expansion_panel_10_Template_mat_expansion_panel_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r44); const i_r36 = restoredCtx.index; const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r43.userClicked(i_r36); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-panel-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, TaskPreviewDialogComponent_mat_tab_145_mat_expansion_panel_10_div_5_Template, 7, 1, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", user_r35.user, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", user_r35.tasks);
} }
function TaskPreviewDialogComponent_mat_tab_145_div_12_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "input", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "label", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "svg", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "circle", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "path", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Project manger");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "span", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "Project manger ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, " created task. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "span", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](28, "input", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "svg", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](32, "path", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "div", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "svg", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](35, "path", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r47.innerTask.taskTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" end at ", ctx_r47.innerTask.endat, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r47.innerTask.TaskDescription, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" assigned to ", ctx_r47.getUser.user, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r47.innerTask.startIn);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r47.innerTask.startIn);
} }
function TaskPreviewDialogComponent_mat_tab_145_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 140, 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "mat-menu", null, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "button", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "mat-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "add_task");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "button", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TaskPreviewDialogComponent_mat_tab_145_div_12_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r49); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r48.editTask(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "mat-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, " edit Task ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TaskPreviewDialogComponent_mat_tab_145_div_12_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r49); const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](1); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r50.deleteUser(_r45); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "mat-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TaskPreviewDialogComponent_mat_tab_145_div_12_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r49); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r51.deleteInnerTask(ctx_r51.i, ctx_r51.taskPreview); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "mat-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, " delete task ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, TaskPreviewDialogComponent_mat_tab_145_div_12_div_28_Template, 36, 6, "div", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](11);
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r34.getUser.user);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matMenuTriggerFor", _r46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" add task tO ", ctx_r34.getUser.user, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" delete ", ctx_r34.getUser.user, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r34.innerTask && ctx_r34.innerTask !== null);
} }
function TaskPreviewDialogComponent_mat_tab_145_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-tab", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "input", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, " Task List ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, TaskPreviewDialogComponent_mat_tab_145_mat_expansion_panel_10_Template, 6, 2, "mat-expansion-panel", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, TaskPreviewDialogComponent_mat_tab_145_div_12_Template, 29, 5, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r9.users);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r9.getUser);
} }
function TaskPreviewDialogComponent_mat_tab_146_div_40_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 192, 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "img", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "mat-icon", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TaskPreviewDialogComponent_mat_tab_146_div_40_li_2_Template_mat_icon_click_6_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r60); const i_r57 = restoredCtx.index; const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r59.deleteUser(i_r57); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r56 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", user_r56.user, " ");
} }
function TaskPreviewDialogComponent_mat_tab_146_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "ul", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, TaskPreviewDialogComponent_mat_tab_146_div_40_li_2_Template, 8, 1, "li", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r54.users);
} }
function TaskPreviewDialogComponent_mat_tab_146_Template(rf, ctx) { if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-tab", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "mat-selection-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "mat-list-option", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TaskPreviewDialogComponent_mat_tab_146_Template_mat_list_option_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r62); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r61.owner = !ctx_r61.owner; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " set owner & group ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "mat-expansion-panel", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, " owner and group ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "form", 12, 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function TaskPreviewDialogComponent_mat_tab_146_Template_form_ngSubmit_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r62); const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](11); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r63.onGroupSubmit(_r52); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "owner");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "input", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "mat-form-field", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Group");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](22, "input", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "button", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TaskPreviewDialogComponent_mat_tab_146_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r62); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r64.groupSubmitted = !ctx_r64.groupSubmitted; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "save");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "form", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "mat-form-field", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "add users ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](32, "input", 185, 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "mat-icon", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "user");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "button", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TaskPreviewDialogComponent_mat_tab_146_Template_button_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r62); const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](33); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r65.addUser(_r53); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, "add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](40, TaskPreviewDialogComponent_mat_tab_146_div_40_Template, 3, 1, "div", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("expanded", ctx_r10.owner && ctx_r10.task.owner || ctx_r10.task.group)("disabled", !ctx_r10.owner);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx_r10.task.owner ? ctx_r10.task.owner : "")("disabled", ctx_r10.groupSubmitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx_r10.task.group ? ctx_r10.task.group : 0)("disabled", ctx_r10.groupSubmitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("type", ctx_r10.groupSubmitted ? "submit" : "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r10.groupSubmitted ? "edit" : "save", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r10.owner);
} }
class TaskPreviewDialogComponent {
    constructor(dialog, route, store, router, TaskS) {
        this.dialog = dialog;
        this.route = route;
        this.store = store;
        this.router = router;
        this.TaskS = TaskS;
        // @ViewChild('userMail',{static:false})
        this.TitleEdit = false;
        this.progressEdit = false;
        this.descriptionEdit = false;
        this.piortyEdit = false;
        this.dateEdit = false;
        this.taskEdit = false;
        this.groupSubmitted = false;
        this.USERaDDED = false;
        this.bussiness = false;
        this.owner = false;
        this.users = [];
        this.panelOpenState = false;
        this.ACtive = false;
        this.selected = 'ToDo';
        this.piorty = 'low';
        this.value = 0;
        this.tags = [];
    }
    ngOnInit() {
        this.TaskS.tasks.subscribe(tasks => {
            this.users = tasks;
            console.log(this.users);
        });
        this.users = this.TaskS.getusers();
        this.store.subscribe(tasks => {
            console.log(tasks);
        });
        this.subsecription = this.route.params.subscribe((params) => {
            this.id = +params['id'];
            if (this.id !== null) {
                this.store.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(taskState => {
                    console.log(taskState);
                    return taskState.Tasks.tasks.find((T, I) => {
                        return I === this.id;
                    });
                })).subscribe(Task => {
                    //getting confuse with the new properties added!
                    this.scStart = Task.scheduleStart;
                    this.scEnd = Task.scheduleEnd;
                    this.task = Task;
                    console.log(Task);
                    if (Task.selectedRole === 'business') {
                        this.bussiness = true;
                    }
                    else {
                        this.bussiness = false;
                    }
                });
            }
        });
    }
    activatedProject() {
        this.ACtive = !this.ACtive;
        this.store.dispatch(new _store_Task_Action__WEBPACK_IMPORTED_MODULE_0__["StartEditing"](+this.id));
        this.store.dispatch(new _store_Task_Action__WEBPACK_IMPORTED_MODULE_0__["Activate"](this.ACtive));
        this.store.subscribe(tasks => {
            // this.task = tasks.Tasks.updatingTask
        });
        this.ACtive = this.task.statues;
        console.log(this.task);
    }
    progressEditF(val) {
        this.progressEdit = !this.progressEdit;
        if (!this.progressEdit) {
            this.store.dispatch(new _store_Task_Action__WEBPACK_IMPORTED_MODULE_0__["StartEditing"](+this.id));
            this.store.dispatch(new _store_Task_Action__WEBPACK_IMPORTED_MODULE_0__["ProgressVAlue"](val));
        }
    }
    start(e) {
        this.router.navigate(['taskStart' + '/' + this.id + '/' + this.task.projectTitle]);
        console.log(e);
    }
    delete() {
        this.store.dispatch(new _store_Task_Action__WEBPACK_IMPORTED_MODULE_0__["Deleting"](this.id));
    }
    edit() {
        this.store.dispatch(new _store_Task_Action__WEBPACK_IMPORTED_MODULE_0__["StartEditing"](+this.id));
        this.store.subscribe(tasks => {
            // this.task = tasks.Tasks.updatingTask
        });
        this.dialog.open(src_app_tasks_task_dialog_task_dialog_component__WEBPACK_IMPORTED_MODULE_1__["TaskDialogComponent"]).afterClosed().subscribe(() => {
            this.store.dispatch(new _store_Task_Action__WEBPACK_IMPORTED_MODULE_0__["StopEdit"]());
        });
    }
    full(e) {
        e.path[6].children[0].children[0].classList.toggle('none');
        e.path[4].classList.toggle('col-md-12');
    }
    saveTask() {
        this.store.dispatch(new _store_Task_Action__WEBPACK_IMPORTED_MODULE_0__["StoreTasks"]());
    }
    ;
    onGroupSubmit(g) {
        this.userstart = true;
        const owner = g.value.owner;
        this.group = g.value.group;
        console.log(this.group);
        this.adminName = owner;
        if (g.value.owner === '' && g.value.group === 0) {
            this.userstart = false;
            return;
        }
        console.log(g.value);
        this.store.dispatch(new _store_Task_Action__WEBPACK_IMPORTED_MODULE_0__["StartEditing"](+this.id));
        this.store.dispatch(new _store_Task_Action__WEBPACK_IMPORTED_MODULE_0__["GroupAndOwner"]({ group: this.group, owner: this.adminName }));
        this.store.subscribe(tasks => {
            // this.task = tasks.Tasks.updatingTask
        });
        console.log(this.task);
        this.groupSubmitted = !this.groupSubmitted;
    }
    selectedTypeSubmit(select) {
        this.store.dispatch(new _store_Task_Action__WEBPACK_IMPORTED_MODULE_0__["StartEditing"](+this.id));
        this.store.dispatch(new _store_Task_Action__WEBPACK_IMPORTED_MODULE_0__["TaskType"](select));
        // this.store.subscribe(tasks=> this.task = tasks.Tasks.updatingTask  );
        if (this.task.taskType) {
            this.selected = this.task.taskType;
            console.log(this.selected);
        }
        else {
            this.selected = 'ToDo';
        }
    }
    titleEdit(title) {
        this.store.dispatch(new _store_Task_Action__WEBPACK_IMPORTED_MODULE_0__["StartEditing"](+this.id));
        this.store.dispatch(new _store_Task_Action__WEBPACK_IMPORTED_MODULE_0__["TitleEdit"](title.value.trim()));
        this.TitleEdit = false;
        // this.store.subscribe(tasks=> this.task = tasks.Tasks.updatingTask  )
    }
    descreptionEdit(description) {
        this.store.dispatch(new _store_Task_Action__WEBPACK_IMPORTED_MODULE_0__["StartEditing"](+this.id));
        this.store.dispatch(new _store_Task_Action__WEBPACK_IMPORTED_MODULE_0__["DescriptionEdit"](description.value.trim()));
        // this.store.subscribe(tasks=> this.task = tasks.Tasks.updatingTask)
        this.descriptionEdit = false;
    }
    piortySubmitted(P) {
        this.store.dispatch(new _store_Task_Action__WEBPACK_IMPORTED_MODULE_0__["StartEditing"](+this.id));
        this.store.dispatch(new _store_Task_Action__WEBPACK_IMPORTED_MODULE_0__["PiortyEdit"](P));
        this.piortyEdit = false;
        // this.store.subscribe(tasks=> this.task = tasks.Tasks.updatingTask);
    }
    NEWDATESUBMITTED(form) {
        this.store.dispatch(new _store_Task_Action__WEBPACK_IMPORTED_MODULE_0__["StartEditing"](+this.id));
        if (form.value.SchStart === "" && form.value.schEnd === "") {
            this.store.dispatch(new _store_Task_Action__WEBPACK_IMPORTED_MODULE_0__["Schedit"]({ start: this.scStart, end: this.scEnd }));
        }
        else if (form.value.SchStart === "" && form.value.SchEnd !== "") {
            this.store.dispatch(new _store_Task_Action__WEBPACK_IMPORTED_MODULE_0__["Schedit"]({ start: this.scStart, end: form.value.SchEnd }));
        }
        else if (form.value.SchEnd === "" && form.value.SchStart !== "") {
            this.store.dispatch(new _store_Task_Action__WEBPACK_IMPORTED_MODULE_0__["Schedit"]({ start: form.value.SchStart, end: this.scEnd }));
        }
        else {
            this.store.dispatch(new _store_Task_Action__WEBPACK_IMPORTED_MODULE_0__["Schedit"]({ start: form.value.SchStart, end: form.value.SchEnd }));
        }
        // this.store.subscribe(tasks=> this.task = tasks.Tasks.updatingTask)
        console.log(this.task);
        this.dateEdit = false;
    }
    addTag(tag) {
        const TagsM = new src_app_tasks_shared_loadingSpinner_tag_module__WEBPACK_IMPORTED_MODULE_5__["TagsModule"](tag.value);
        var maxLength = 15;
        if (tag.value.length > maxLength) {
            this.errorMessage = 'too many character';
            // this.charac = tag.value.length
            return false;
        }
        this.tags.push(tag.value);
        this.store.dispatch(new _store_Task_Action__WEBPACK_IMPORTED_MODULE_0__["StartEditing"](+this.id));
        this.store.dispatch(new _store_Task_Action__WEBPACK_IMPORTED_MODULE_0__["Tags"](TagsM));
        this.store.subscribe(tasks => console.log(tasks));
        tag.value = '';
        return true;
    }
    deleteTag(i) {
        // this.tags.splice(i,1);
        this.store.dispatch(new _store_Task_Action__WEBPACK_IMPORTED_MODULE_0__["StartEditing"](+this.id));
        this.store.dispatch(new _store_Task_Action__WEBPACK_IMPORTED_MODULE_0__["deleteTag"](i));
        this.store.subscribe(tasks => console.log(tasks));
        console.log(this.tags);
    }
    //user edit 
    deleteUser(list) {
        this.mailDetail = list;
        jquery__WEBPACK_IMPORTED_MODULE_4__(list).css({
            display: 'none'
        });
        this.TaskS.deleteUSer(this.userId);
        this.getUser = [];
    }
    addUser(userI) {
        if (userI.value.trim() === '') {
            return;
        }
        const innerTaSks = new src_app_user_userTaskList_module__WEBPACK_IMPORTED_MODULE_3__["InnerTasks"]('', '', new Date(), new Date());
        const user = new src_app_user_userTaskList_module__WEBPACK_IMPORTED_MODULE_3__["UserTaskList"](userI.value, [innerTaSks]);
        this.TaskS.addusers(user);
        this.TaskS.tasks.subscribe(users => {
            this.users = users;
        });
        // console.log(this.users)
    }
    userClicked(i) {
        this.userId = i;
        this.getUser = this.TaskS.getUser(i);
        jquery__WEBPACK_IMPORTED_MODULE_4__(this.mailDetail).css({
            display: 'block'
        });
    }
    addUserTask(form) {
        if (!this.taskEdit) {
            const InnrTasks = new src_app_user_userTaskList_module__WEBPACK_IMPORTED_MODULE_3__["InnerTasks"](form.value.title.trim(), form.value.description.trim(), form.value.start, form.value.end);
            console.log(InnrTasks);
            this.TaskS.addInnerTask(this.userId, InnrTasks);
            this.TaskS.tasks.subscribe(tasks => {
                console.log(tasks);
            });
        }
        else {
            const InnrTasks = new src_app_user_userTaskList_module__WEBPACK_IMPORTED_MODULE_3__["InnerTasks"](form.value.title.trim(), form.value.description.trim(), form.value.start, form.value.end);
            this.TaskS.editInnerTask(this.userId, this.id, InnrTasks);
            this.innerTask = this.TaskS.getInnerTask(this.userId, this.id);
            this.taskEdit = false;
        }
        form.reset();
    }
    deleteInnerTask(i, TP) {
        this.TaskS.DeleteinnerTask(this.userId, i);
        this.innerTask = this.TaskS.getInnerTask(this.userId, i);
    }
    TaskClicked(i, list) {
        jquery__WEBPACK_IMPORTED_MODULE_4__(list).click(function () {
            jquery__WEBPACK_IMPORTED_MODULE_4__(this).addClass('user_active').siblings().removeClass('user_active');
        });
        this.id = i;
        this.innerTask = this.TaskS.getInnerTask(this.userId, i);
        // this.deleteInnerTask(i);
    }
    editTask() {
        const userTask = this.TaskS.getInnerTask(this.userId, this.id);
        this.TaskForm.setValue({
            'title': userTask.taskTitle,
            'description': userTask.TaskDescription,
            'start': userTask.startIn,
            'end': userTask.endat
        });
        console.log(this.TaskForm, userTask);
        this.taskEdit = true;
    }
    ngOnDestroy() {
        this.subsecription.unsubscribe();
        this.store.dispatch(new _store_Task_Action__WEBPACK_IMPORTED_MODULE_0__["StopEdit"]());
    }
}
TaskPreviewDialogComponent.ɵfac = function TaskPreviewDialogComponent_Factory(t) { return new (t || TaskPreviewDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_tasks_store_Task_service__WEBPACK_IMPORTED_MODULE_10__["UserTaskLists"])); };
TaskPreviewDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: TaskPreviewDialogComponent, selectors: [["app-task-preview-dialog"]], viewQuery: function TaskPreviewDialogComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.TaskForm = _t.first);
    } }, decls: 183, vars: 32, consts: [[1, "top_bar", "flex"], [1, "taskname", 2, "width", "70%", "font-size", "20px"], [1, "title"], [2, "cursor", "pointer", 3, "click"], [1, "tob_bar_edit"], ["matTooltip", "fullscreen", "aria-label", "Button that displays a tooltip when focused or hovered over", 1, "material-icons-outlined", "icon", 3, "click"], [1, "preview", 2, "position", "relative"], ["class", "d-flex edit_Title", 4, "ngIf"], [1, "top_bar_info"], [1, "row"], [1, "col-md-5", "toBar_left"], [1, "progress-type", "flex"], [3, "ngSubmit"], ["appearance", "legacy"], [3, "value", "valueChange"], ["value", "ToDo"], ["value", "INProgress"], ["value", "Finished"], ["mat-icon-button", "", "type", "submit"], ["matTooltip", "save", 1, "done"], [1, "statues", 2, "padding", "10px"], [1, "form-check", "form-switch"], ["type", "checkbox", "role", "switch", "id", "flexSwitchCheckChecked", 1, "form-check-input", 3, "checked", "click"], ["for", "flexSwitchCheckChecked"], [1, "col-md-7", "toBar_right", "flex"], [1, "created_at", "mr-3"], [1, "created_at"], [1, "created-itme"], [1, "deadline"], [1, "timeStmate", "mr-1"], ["mat-icon-button", "", "aria-label", "Example icon-button with a menu", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], [1, "tolbar_data"], [1, "col-md-12"], ["label", "info"], [1, "left", "col-md-12"], [1, "tolbar_data_progress"], [1, "example-section"], [1, "example-margin"], ["class", "example-margin", "mode", "determinate", "style", "width: 86%;", 3, "ngModel", "value", "ngModelChange", 4, "ngIf"], ["mat-icon-button", "", 3, "click"], [1, "progress"], ["mode", "determinate", 3, "value"], [1, "tolbar_data_discription"], [1, "exptional", 3, "expanded"], [1, "exptional"], [1, "icon"], [3, "ngSubmit", 4, "ngIf"], [1, "tags", "mt-1"], ["expendad", "true", 1, "exptional"], ["aria-label", "Fish selection", 4, "ngIf"], ["appearance", "legacy", 2, "width", "100%"], ["matInput", "", "placeholder", "add project tags"], ["tag", ""], ["matTooltip", "new tag", "matSuffix", "", 2, "cursor", "pointer", 3, "click"], ["style", "color:\n                red", 4, "ngIf"], [1, "tolnar_data_upload"], ["matTooltip", "this action not avalible for now ", "matTooltipClass", "example-tooltip-red", "aria-label", "Button that shows a red tooltip", 1, "exptional", 3, "expanded"], [1, "icon", "ml-2"], [1, "piorty"], [4, "ngIf"], [1, "Date"], [1, "d-flex", 2, "justify-content", "space-between", "width", "300px"], [1, "dateStart"], [1, "dateEnd"], [1, "d-flex", "mr-3"], ["class", "dateEdit", 4, "ngIf"], ["label", "Task List", 4, "ngIf"], ["label", "users/admin ", "class", "col-md-12", 4, "ngIf"], ["id", "exampleModal", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-lg"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], ["userTask", "ngForm"], [1, "mt-1", "mb-3"], ["matInput", "", "ngModel", "", "required", "", "name", "title"], ["matSuffix", ""], ["matInput", "", "ngModel", "", "name", "description", "required", ""], [1, "form-group"], ["for", "start"], ["type", "date", "id", "start", "ngModel", "", "name", "start", "required", "", 1, "form-control"], ["for", "end"], ["type", "date", "id", "end", "ngModel", "", "name", "end", "required", "", 1, "form-control"], [1, "modal-footer"], ["mat-flat-button", "", "type", "reset"], ["mat-flat-button", "", "color", "primary", "type", "submit", "data-bs-dismiss", "modal", 3, "disabled"], [1, "d-flex", "edit_Title"], ["appearance", "outline"], ["matInput", "", "placeholder", "title", 3, "value"], ["title", ""], ["mode", "determinate", 1, "example-margin", 2, "width", "86%", 3, "ngModel", "value", "ngModelChange"], ["appearance", "outline", 1, "example-full-width", 2, "width", "80%"], ["matInput", "", "placeholder", "description", 1, "w-100", 2, "width", "100%", 3, "value"], ["description", ""], ["mat-raised-button", "", "color", "primary", "type", "submit", 2, "height", "36px", "margin", "auto 10px"], ["aria-label", "Fish selection"], [4, "ngFor", "ngForOf"], [1, "close", 3, "click"], [2, "color", "red"], ["value", "low"], ["value", "medium"], ["value", "important"], ["mat-raised-button", "", "color", "primary", 2, "height", "36px", "margin", "auto 10px"], [1, "dateEdit"], ["form", "ngForm"], [1, "col-md-3"], ["appearance", "legacy", 1, "example-form-field"], ["matInput", "", "ngModel", "", "name", "SchStart", 3, "matDatepicker", "value"], ["matSuffix", "", 3, "for"], ["datepicker1", ""], ["mat-button", "", "matDatepickerCancel", ""], ["mat-raised-button", "", "color", "primary", "matDatepickerApply", ""], ["matInput", "", "ngModel", "", "name", "SchEnd", 3, "value", "matDatepicker"], ["datepicker2", ""], [2, "text-align", "right"], ["label", "Task List"], [1, "header"], [1, "search-bar"], ["type", "text", "placeholder", "Search..."], [1, "col-md-4", "col-12"], [1, "inbox-container"], [1, "inbox"], [1, "msg", "msg-department", "anim-y"], ["class", "user_exptional", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-md-8", "col-12"], ["class", "mail-detail", 4, "ngIf"], [1, "user_exptional", 3, "click"], [2, "width", "100%", "margin-left", "10px"], ["class", "msg selected-bg anim-y user_active", "style", "cursor: pointer;", 3, "click", 4, "ngFor", "ngForOf"], [1, "msg", "selected-bg", "anim-y", "user_active", 2, "cursor", "pointer", 3, "click"], ["list", ""], ["type", "checkbox", "name", "msg", "id", "mail1", "checked", "", 1, "mail-choice"], ["for", "mail1"], [1, "msg-content"], [1, "msg-title"], [1, "mail-detail"], ["userMail", ""], [1, "mail-detail-header"], [1, "mail-detail-profile"], [1, "mail-detail-name"], [1, "mail-icons"], ["mat-menu-item", "", "data-bs-toggle", "modal", "data-bs-target", "#exampleModal"], ["mat-menu-item", "", "data-bs-toggle", "modal", "data-bs-target", "#exampleModal", 3, "click"], ["class", "mail-contents", 4, "ngIf"], [1, "mail-contents"], [1, "mail-contents-subject"], ["type", "checkbox", "name", "msg", "id", "mail20", "checked", "", 1, "mail-choice"], ["for", "mail20"], [1, "mail-contents-title"], [1, "mail"], [1, "mail-time"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "feather", "feather-clock"], ["cx", "12", "cy", "12", "r", "10"], ["d", "M12 6v6l4 2"], [1, "mail-inside"], [1, "mail-assign"], [1, "assignee"], [1, "assign-date"], [1, "mail-textarea"], ["type", "text", "placeholder", "Write a comment..."], [1, "textarea-icons"], [1, "attach"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "feather", "feather-paperclip"], ["d", "M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"], [1, "send"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "feather", "feather-send"], ["d", "M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"], ["label", "users/admin ", 1, "col-md-12"], [1, "setOwner", "mb-2"], [1, "setOwnerheader"], [3, "click"], [1, "exptional", 3, "expanded", "disabled"], ["group", "ngForm"], ["required", "", "name", "owner", "ngModel", "", "matInput", "", 3, "value", "disabled"], [1, "col-md-2"], [1, "ml-2", 2, "width", "64px"], ["required", "", "matInput", "", "name", "group", "ngModel", "", "type", "number", "min", "1", 3, "value", "disabled"], [1, "col", "flex"], ["mat-button", "", "color", "primary", 3, "type", "click"], [1, "flex"], ["matInput", "", "placeholder", "user@gmail.com", "type", "email"], ["user", ""], ["mat-button", "", "type", "submit", "color", "primary", 3, "click"], ["class", "users_list", 4, "ngIf"], [1, "users_list"], [1, "list-group"], ["class", "list-group-item d-flex justify-content-between align-items-center", 4, "ngFor", "ngForOf"], [1, "list-group-item", "d-flex", "justify-content-between", "align-items-center"], [1, "user", "mr-2"], ["src", "https://assets.codepen.io/3364143/Screen+Shot+2020-08-01+at+12.24.16.png", "alt", "", 1, "members", "mail-members"], [1, "edit_user"], [2, "cursor", "pointer", "color", "#9a9696", 3, "click"]], template: function TaskPreviewDialogComponent_Template(rf, ctx) { if (rf & 1) {
        const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TaskPreviewDialogComponent_Template_mat_icon_click_4_listener() { return ctx.TitleEdit = !ctx.TitleEdit; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TaskPreviewDialogComponent_Template_mat_icon_click_7_listener($event) { return ctx.full($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, " fullscreen ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, TaskPreviewDialogComponent_div_10_Template, 11, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "form", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function TaskPreviewDialogComponent_Template_form_ngSubmit_15_listener() { return ctx.selectedTypeSubmit(ctx.selected); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "mat-select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("valueChange", function TaskPreviewDialogComponent_Template_mat_select_valueChange_19_listener($event) { return ctx.selected = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "ToDo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "INProgress");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "Finished");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "mat-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "chevron_right");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, " statues ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TaskPreviewDialogComponent_Template_input_click_32_listener() { return ctx.activatedProject(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, "CREATED");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, " Dead Line :");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48, "reorder");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "mat-menu", null, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TaskPreviewDialogComponent_Template_button_click_51_listener() { return ctx.edit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](53, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](55, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TaskPreviewDialogComponent_Template_button_click_56_listener($event) { return ctx.start($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](58, "page");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](60, "open in single page ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TaskPreviewDialogComponent_Template_button_click_61_listener() { return ctx.saveTask(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](63, "save");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](65, "save task");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](66, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](68, "mat-tab-group", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](69, "mat-tab", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](71, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](72, "section", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](73, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](74, "Progress:");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](75, TaskPreviewDialogComponent_mat_slider_75_Template, 1, 2, "mat-slider", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](76, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TaskPreviewDialogComponent_Template_button_click_76_listener() { return ctx.progressEditF(ctx.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](77, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](79, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](80, "mat-progress-bar", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](81, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](82, "mat-expansion-panel", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](83, "mat-expansion-panel-header", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](84, "mat-panel-description");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](85, "mat-icon", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](86, "description");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](87, " Description: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](88, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](89);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](90, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TaskPreviewDialogComponent_Template_mat_icon_click_90_listener() { return ctx.descriptionEdit = !ctx.descriptionEdit; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](91, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](92, TaskPreviewDialogComponent_form_92_Template, 12, 1, "form", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](93, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](94, "mat-expansion-panel", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](95, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](96, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](97, " tags ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](98, TaskPreviewDialogComponent_mat_chip_list_98_Template, 2, 2, "mat-chip-list", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](99, "mat-form-field", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](100, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](101, "Tags");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](102, "input", 53, 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](104, "mat-icon", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TaskPreviewDialogComponent_Template_mat_icon_click_104_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r66); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](103); return ctx.addTag(_r5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](105, "tag");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](106, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](107);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](108, TaskPreviewDialogComponent_p_108_Template, 2, 1, "p", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](109, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](110, "mat-expansion-panel", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](111, "mat-expansion-panel-header", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](112, "mat-panel-description");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](113, "mat-icon", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](114, "folder");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](115, "Add Files: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](116, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](117, " Add File +");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](118, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](119, "mat-expansion-panel", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](120, "mat-expansion-panel-header", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](121, "mat-panel-description");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](122, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](123, " piorty");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](124, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](125);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](126, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TaskPreviewDialogComponent_Template_mat_icon_click_126_listener() { return ctx.piortyEdit = !ctx.piortyEdit; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](127, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](128, TaskPreviewDialogComponent_div_128_Template, 14, 2, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](129, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](130, "mat-expansion-panel", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](131, "mat-expansion-panel-header", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](132, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](133, "mat-icon", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](134, "date_range");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](135, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](136, "p", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](137);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](138, "p", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](139);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](140, "p", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](141, "change schduele Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](142, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TaskPreviewDialogComponent_Template_mat_icon_click_142_listener() { return ctx.dateEdit = !ctx.dateEdit; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](143, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](144, TaskPreviewDialogComponent_div_144_Template, 33, 6, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](145, TaskPreviewDialogComponent_mat_tab_145_Template, 13, 2, "mat-tab", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](146, TaskPreviewDialogComponent_mat_tab_146_Template, 41, 9, "mat-tab", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](147, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](148, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](149, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](150, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](151, "h5", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](152, "add task ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](153, "button", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](154, "span", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](155, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](156, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](157, "form", 12, 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function TaskPreviewDialogComponent_Template_form_ngSubmit_157_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r66); const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](158); return ctx.addUserTask(_r11); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](159, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](160, "mat-form-field", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](161, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](162, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](163, "input", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](164, "mat-icon", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](165, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](166, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](167, "mat-form-field", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](168, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](169, "descrption");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](170, "textarea", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](171, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](172, "label", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](173, " start in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](174, "input", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](175, "label", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](176, " end in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](177, "input", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](178, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](179, "button", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](180, "reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](181, "button", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](182, "save");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](50);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](103);
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](158);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx.task.projectTitle, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.TitleEdit);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx.selected)("value", ctx.task.taskType ? ctx.task.taskType : "ToDo");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", ctx.task.statues);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx.task.statues ? "activeted" : "inactive", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.scStart.toDateString(), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.scEnd.toDateString(), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matMenuTriggerFor", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.progressEdit);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", !ctx.progressEdit ? "edit" : "save", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx.task.progress ? ctx.task.progress : "0")("value", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("expanded", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.task.description, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.descriptionEdit);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.task.tags ? ctx.task.tags : _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](31, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _r5.value.length, "/15");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("expanded", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("expanded", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.task.piorty ? ctx.task.piorty : "low", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.piortyEdit);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("expanded", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.scStart.toDateString(), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.scEnd.toDateString(), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.dateEdit);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.bussiness);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.bussiness);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !_r11.valid);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatOption"], _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["MatMenuItem"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTab"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__["MatProgressBar"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__["MatExpansionPanelDescription"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__["MatExpansionPanelTitle"], _angular_material_input__WEBPACK_IMPORTED_MODULE_23__["MatInput"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatSuffix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatHint"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["RequiredValidator"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_24__["MatSlider"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__["MatChipList"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__["MatChip"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__["MatDatepickerToggle"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__["MatDatepicker"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__["MatDatepickerActions"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__["MatDatepickerCancel"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__["MatDatepickerApply"], _angular_material_list__WEBPACK_IMPORTED_MODULE_27__["MatSelectionList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_27__["MatListOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["MinValidator"]], styles: [".box[_ngcontent-%COMP%] {\n  border: 1px solid #fff;\n  padding: 5px;\n  border-radius: 10px;\n  border-top: 10px solid mediumseagreen;\n  background: #fff;\n  color: #333;\n}\n\n.date[_ngcontent-%COMP%] {\n  border-left: 1px dotted;\n  height: 100px;\n}\n\n.date[_ngcontent-%COMP%]   .date-icon[_ngcontent-%COMP%] {\n  border-bottom: 30px;\n  border: 1px solid #333;\n  padding: 4px;\n  border-radius: 50%;\n}\n\n.date[_ngcontent-%COMP%]   .date-range[_ngcontent-%COMP%] {\n  margin: 13px;\n  font-size: 11px;\n}\n\n.project-members[_ngcontent-%COMP%] {\n  border-left: 1px dotted;\n  height: 100px;\n}\n\n.project-members[_ngcontent-%COMP%]   .date-icon[_ngcontent-%COMP%] {\n  border-bottom: 30px;\n  border: 1px solid #333;\n  padding: 4px;\n  border-radius: 50%;\n}\n\n.partici[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin: 10px;\n}\n\n.partici[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 33px;\n  height: 33px;\n  border-radius: 50%;\n  margin-left: 3px;\n  overflow: hidden;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.partici[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: -8px;\n}\n\n.comment[_ngcontent-%COMP%] {\n  border-left: 1px dotted;\n  height: 100px;\n}\n\n.comment[_ngcontent-%COMP%]   .icon-comment[_ngcontent-%COMP%] {\n  border-bottom: 30px;\n  border: 1px solid #333;\n  padding: 4px;\n  border-radius: 50%;\n}\n\n.comment[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%] {\n  padding: 3px;\n  margin-top: 5px;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 33px;\n  height: 33px;\n  border-radius: 50%;\n  margin-left: 3px;\n  overflow: hidden;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\nimg[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: -8px;\n}\n\n.attachments[_ngcontent-%COMP%] {\n  border-left: 1px dotted;\n  height: 100px;\n}\n\n.attachments[_ngcontent-%COMP%]   .attachment-icon[_ngcontent-%COMP%] {\n  border-bottom: 30px;\n  border: 1px solid #333;\n  padding: 4px;\n  border-radius: 50%;\n}\n\n.visable[_ngcontent-%COMP%] {\n  display: block !important;\n}\n\n.mat-dialog-container[_ngcontent-%COMP%] {\n  \n  padding: 24px;\n  border-radius: 4px;\n  box-sizing: border-box;\n  overflow: auto;\n  outline: 0;\n  width: 100%;\n  height: 100%;\n  min-height: inherit;\n  max-height: inherit;\n  \n  position: fixed;\n  right: 0px;\n  top: 300px;\n  height: 328px;\n  width: 410px;\n}\n\n.tab[_ngcontent-%COMP%] {\n  color: #ddd;\n}\n\n.mat-tab-labels[_ngcontent-%COMP%] {\n  background: #d6d7da;\n  color: #fff !important;\n  border-top-right-radius: 6px;\n  border-top-left-radius: 6px;\n  height: 41px;\n}\n\n.done[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  margin-top: 11px;\n  padding: 3px;\n  width: 30px;\n  height: 30px;\n  margin: auto;\n  margin-left: 15px;\n  cursor: pointer;\n}\n\n.done[_ngcontent-%COMP%]:hover {\n  background: #79b679;\n  color: #fff;\n}\n\n.list_inner[_ngcontent-%COMP%] {\n  background: #fefefe;\n  padding: 12px;\n  border-radius: 30px;\n  color: #6656f6;\n  margin-bottom: 5px;\n  cursor: pointer;\n}\n\n.estmate[_ngcontent-%COMP%] {\n  margin: auto;\n  width: 58px;\n  height: 58px;\n  border: 1px dotted;\n  padding: 17px;\n  border-radius: 53%;\n  margin-left: 49px;\n  cursor: pointer;\n}\n\n.toBar_right[_ngcontent-%COMP%] {\n  border-left: 1px solid #ddd;\n}\n\n.toBar_right[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  border-right: 1px solid #ddd;\n  margin-left: 10px;\n  padding-right: 15px;\n}\n\n.active[_ngcontent-%COMP%] {\n  background: royalblue;\n}\n\n.users_list[_ngcontent-%COMP%] {\n  height: 300px;\n  overflow: auto;\n}\n\n.top_bar_info[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ddd;\n}\n\np.timeStmate[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n\n.deadline[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\n\n.taskname[_ngcontent-%COMP%] {\n  width: 70%;\n  font-size: 20px;\n  display: flex;\n  justify-content: space-between;\n}\n\n.taskname[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.edit_Title[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 4;\n  background: #fff;\n  width: 318px;\n  justify-content: space-between;\n  padding: 9px;\n  border-radius: 14px;\n  border: 1px solid #ddd;\n  top: 0px;\n}\n\n.dropBak[_ngcontent-%COMP%] {\n  height: 100%;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  background: #000000a8;\n  width: 100%;\n  z-index: 1;\n}\n\n.dropBak[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  z-index: 2;\n  color: #fff;\n  position: absolute;\n  top: 50% le;\n  top: 50%;\n  left: 50%;\n}\n\n.delete_task[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHRhc2stcHJldmlldy1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSx1QkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFBSTtFQUNJLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFFUjs7QUFBSTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FBRVI7O0FBQ0E7RUFDSSx1QkFBQTtFQUNBLGFBQUE7QUFFSjs7QUFESTtFQUNJLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFHUjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFDSTtFQUNJLFdBQUE7RUFDSixZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQUNKOztBQUNNO0VBQ0UsaUJBQUE7QUFDUjs7QUFHRTtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtBQUFKOztBQUNJO0VBQ0ksbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUNSOztBQUNJO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUFDUjs7QUFFRTtFQUNFLFdBQUE7RUFDSixZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQUNBOztBQUNFO0VBQ0UsaUJBQUE7QUFDSjs7QUFHRTtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtBQUFKOztBQUNBO0VBQ0ksbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVFO0VBQ0kseUJBQUE7QUFDTjs7QUFDRTtFQUNFLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFFSjs7QUFFRTtFQUNFLFdBQUE7QUFDSjs7QUFDRTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtBQUVKOztBQUFFO0VBQ0Usc0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFHSjs7QUFGSTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtBQUlOOztBQUdBO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQUY7O0FBSUU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQURKOztBQUdFO0VBQ0UsMkJBQUE7QUFBSjs7QUFDSTtFQUNFLDRCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUNOOztBQUVFO0VBQ0UscUJBQUE7QUFDSjs7QUFDRTtFQUNFLGFBQUE7RUFDQSxjQUFBO0FBRUo7O0FBQUU7RUFDRiw2QkFBQTtBQUdBOztBQURFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFJSjs7QUFGRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUFLSjs7QUFIRTtFQUNFLFVBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FBTUo7O0FBTEk7RUFDRSxVQUFBO0FBT047O0FBSkU7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsUUFBQTtBQU9KOztBQUpFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBT0o7O0FBTkk7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FBUU47O0FBTEU7RUFDRSxhQUFBO0FBUUoiLCJmaWxlIjoidGFzay1wcmV2aWV3LWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3gge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItdG9wOiAxMHB4IHNvbGlkIG1lZGl1bXNlYWdyZWVuO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG59XHJcblxyXG4uZGF0ZXtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggZG90dGVkO1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIC5kYXRlLWljb257XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMzBweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xyXG4gICAgICAgIHBhZGRpbmc6IDRweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB9XHJcbiAgICAuZGF0ZS1yYW5nZXtcclxuICAgICAgICBtYXJnaW46IDEzcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgfVxyXG59XHJcbi5wcm9qZWN0LW1lbWJlcnN7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IGRvdHRlZDtcclxuICAgIGhlaWdodDogMTAwcHg7IFxyXG4gICAgLmRhdGUtaWNvbntcclxuICAgICAgICBib3JkZXItYm90dG9tOiAzMHB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XHJcbiAgICAgICAgcGFkZGluZzogNHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi5wYXJ0aWNpIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgXHJcbiAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAzM3B4O1xyXG4gICAgaGVpZ2h0OiAzM3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDNweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgXHJcbiAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtOHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jb21tZW50e1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBkb3R0ZWQ7XHJcbiAgICBoZWlnaHQ6IDEwMHB4OyBcclxuICAgIC5pY29uLWNvbW1lbnR7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMzBweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xyXG4gICAgICAgIHBhZGRpbmc6IDRweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB9XHJcbiAgICAuY29tbWVudHN7XHJcbiAgICAgICAgcGFkZGluZzogM3B4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIH1cclxuICB9XHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAzM3B4O1xyXG5oZWlnaHQ6IDMzcHg7XHJcbmJvcmRlci1yYWRpdXM6IDUwJTtcclxubWFyZ2luLWxlZnQ6IDNweDtcclxub3ZlcmZsb3c6IGhpZGRlbjtcclxub2JqZWN0LWZpdDogY292ZXI7XHJcbiAgXHJcbiAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XHJcbiAgICBtYXJnaW4tbGVmdDogLThweDtcclxuICB9XHJcbiAgfVxyXG5cclxuICAuYXR0YWNobWVudHN7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IGRvdHRlZDtcclxuICAgIGhlaWdodDogMTAwcHg7IFxyXG4uYXR0YWNobWVudC1pY29ue1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMzBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XHJcbiAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuICB9XHJcbiAgLnZpc2FibGV7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XHJcbiAgICAvKiBkaXNwbGF5OiBibG9jazsgKi9cclxuICAgIHBhZGRpbmc6IDI0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgbWF4LWhlaWdodDogaW5oZXJpdDtcclxuICAgIC8qIGxlZnQ6IDEwMHB4OyAqL1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICAgIHRvcDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IDMyOHB4O1xyXG4gICAgd2lkdGg6IDQxMHB4O1xyXG4gIFxyXG4gIH1cclxuXHJcbiAgLnRhYntcclxuICAgIGNvbG9yOiAjZGRkO1xyXG4gIH1cclxuICAubWF0LXRhYi1sYWJlbHN7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZDZkN2RhO1xyXG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA2cHg7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA2cHg7XHJcbiAgICBoZWlnaHQ6IDQxcHg7XHJcbiAgfVxyXG4gIC5kb25le1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIG1hcmdpbi10b3A6IDExcHg7XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgJjpob3ZlcntcclxuICAgICAgYmFja2dyb3VuZDogcmdiKDEyMSwgMTgyLCAxMjEpO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5kb25lX1Rve1xyXG5cclxuICB9XHJcbi5saXN0X2lubmVye1xyXG4gIGJhY2tncm91bmQ6ICNmZWZlZmU7XHJcbiAgcGFkZGluZzogMTJweDtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gIGNvbG9yOiByZ2IoMTAyLCA4NiwgMjQ2KTtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxufVxyXG5cclxuICAuZXN0bWF0ZXtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiA1OHB4O1xyXG4gICAgaGVpZ2h0OiA1OHB4O1xyXG4gICAgYm9yZGVyOiAxcHggZG90dGVkO1xyXG4gICAgcGFkZGluZzogMTdweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUzJTtcclxuICAgIG1hcmdpbi1sZWZ0OiA0OXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICAudG9CYXJfcmlnaHR7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBkaXZ7XHJcbiAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuYWN0aXZle1xyXG4gICAgYmFja2dyb3VuZDogcm95YWxibHVlO1xyXG4gIH1cclxuICAudXNlcnNfbGlzdHtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICB9XHJcbiAgLnRvcF9iYXJfaW5mb3tcclxuYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbiAgfVxyXG4gIHAudGltZVN0bWF0ZXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbiAgLmRlYWRsaW5le1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuICAudGFza25hbWV7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIC50aXRsZXtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICAgIH1cclxuICB9XHJcbiAgLmVkaXRfVGl0bGV7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiArNDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICB3aWR0aDogMzE4cHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nOiA5cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIHRvcDogMHB4O1xyXG4gIH1cclxuXHJcbiAgLmRyb3BCYWt7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIGJhY2tncm91bmQ6ICMwMDAwMDBhODtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHB7XHJcbiAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogNTAlIGxlO1xyXG4gICAgICB0b3A6IDUwJTtcclxuICAgICAgbGVmdDogNTAlO1xyXG4gICAgfVxyXG4gIH1cclxuICAuZGVsZXRlX3Rhc2t7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH0iXX0= */", ".list[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 0px;\n  padding: 8px 0px;\n  font-family: Roboto, sans-serif;\n  font-size: 1rem;\n  font-weight: 400;\n  letter-spacing: 0.01em;\n  line-height: 1.5rem;\n  text-decoration: inherit;\n  text-transform: inherit;\n  list-style-type: none;\n}\n.list[_ngcontent-%COMP%]:not(.--dark) {\n  color: rgba(0, 0, 0, 0.87);\n  background-color: #fff;\n}\n.list.--dark[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.87);\n  background-color: #212121;\n}\n.list-item[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  padding: 0px 16px;\n  overflow: hidden;\n}\n.list-item[_ngcontent-%COMP%]::after {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  height: 100%;\n  width: 100%;\n  content: \"\";\n  background-color: currentColor;\n  border-radius: inherit;\n  pointer-events: none;\n  opacity: 0;\n  will-change: opacity;\n  transition: opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.list-item[_ngcontent-%COMP%]:hover::after {\n  opacity: 0.04;\n}\n.list-item[_ngcontent-%COMP%]:focus::after {\n  opacity: 0.12;\n}\n.list-item[_ngcontent-%COMP%]:active::after {\n  opacity: 0.16;\n}\n.list-item.--is-active[_ngcontent-%COMP%] {\n  color: #3F51B5;\n}\n.list-item.--is-active[_ngcontent-%COMP%]::before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  height: 100%;\n  width: 100%;\n  content: \"\";\n  border-radius: inherit;\n  pointer-events: none;\n  opacity: 0.08;\n}\n.list-item__graphic[_ngcontent-%COMP%], .list-item__meta[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 24px;\n  height: 24px;\n  font-size: 24px;\n  fill: currentColor;\n}\n.list-item__graphic[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  margin-left: 0px;\n  margin-right: 32px;\n}\n.list-item__graphic[_ngcontent-%COMP%]::before {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 1.5rem;\n  height: 1.5rem;\n}\n.list-item__meta[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: 0px;\n}\n.list[_ngcontent-%COMP%]:not(.--two-line)   .list-item[_ngcontent-%COMP%] {\n  height: 48px;\n}\n.list.--two-line[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%] {\n  height: 72px;\n}\n.list[_ngcontent-%COMP%]:not(.--dark)   .list-item.--is-active[_ngcontent-%COMP%]::before {\n  background-color: rgba(0, 0, 0, 0.87);\n}\n.list.--dark[_ngcontent-%COMP%]   .list-item.---is-active[_ngcontent-%COMP%]::before {\n  background-color: rgba(255, 255, 255, 0.87);\n}\n.list[_ngcontent-%COMP%]:not(.--dark)   .list-item__graphic[_ngcontent-%COMP%], .list[_ngcontent-%COMP%]:not(.--dark)   .list-item__meta[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.38);\n}\n.list.--dark[_ngcontent-%COMP%]   .list-item__graphic[_ngcontent-%COMP%], .list.--dark[_ngcontent-%COMP%]   .list-item__meta[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.38);\n}\n.list-item.--is-active[_ngcontent-%COMP%]   .list-item__graphic[_ngcontent-%COMP%] {\n  color: #3F51B5;\n}\n.list-item__text[_ngcontent-%COMP%] {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.list-item__text-primary[_ngcontent-%COMP%], .list-item__text-secondary[_ngcontent-%COMP%] {\n  display: block;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.list-item__text-secondary[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 0.875rem;\n  letter-spacing: 0.02em;\n  line-height: 1.25rem;\n  text-decoration: inherit;\n  text-transform: inherit;\n}\n.list[_ngcontent-%COMP%]:not(.--dark)   .list-item__text[_ngcontent-%COMP%]   .list-item__text-secondary[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.56);\n}\n.list.--dark[_ngcontent-%COMP%]   .list-item__text[_ngcontent-%COMP%]   .list-item__text-secondary[_ngcontent-%COMP%] {\n  color: gba(rgba(255, 255, 255, 0.87), 0.56);\n}\n.list.--avatar-list[_ngcontent-%COMP%]   .list-item__graphic[_ngcontent-%COMP%] {\n  margin-left: 0px;\n  margin-right: 16px;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n}\n.list[_ngcontent-%COMP%]:not(.--dark).--avatar-list   .list-item__graphic[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.87);\n  background-color: rgba(0, 0, 0, 0.3);\n}\n.list.--dark.--avatar-list[_ngcontent-%COMP%]   .list-item__graphic[_ngcontent-%COMP%] {\n  color: rgba(33, 33, 33, 0.87);\n  background-color: rgba(255, 255, 255, 0.38);\n}\n.list-divider[_ngcontent-%COMP%] {\n  margin: 0px;\n  height: 1px;\n  border: none;\n}\n.list[_ngcontent-%COMP%]:not(.--dark)   .list-divider[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.12);\n}\n.list.--dark[_ngcontent-%COMP%]   .list-divider[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.12);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGF2YXRhci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStEQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0FBOURGO0FBZ0VFO0VBQ0UsMEJBdkVtQjtFQXdFbkIsc0JBMUVpQjtBQVlyQjtBQWlFRTtFQUNFLGdDQTNFbUI7RUE0RW5CLHlCQTlFaUI7QUFlckI7QUFvRUU7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQWxFSjtBQURFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSxzREFDRTtBQUVOO0FBR0U7RUFDRSxhQUFBO0FBREo7QUFJRTtFQUNFLGFBQUE7QUFGSjtBQUtFO0VBQ0UsYUFBQTtBQUhKO0FBOENJO0VBQ0UsY0F4RndCO0FBNEM5QjtBQThDTTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7QUE1Q1I7QUFnREk7RUFFRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQS9DTjtBQWtESTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBaEROO0FBa0RNO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUFoRFI7QUFvREk7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0FBbEROO0FBc0RFO0VBQ0UsWUF0SXNCO0FBa0YxQjtBQXVERTtFQUNFLFlBekltQjtBQW9GdkI7QUF3REU7RUFDRSxxQ0FySm1CO0FBK0Z2QjtBQXlERTtFQUNFLDJDQXhKbUI7QUFpR3ZCO0FBMERFO0VBRUUsMEJBNUptQjtBQW1HdkI7QUE0REU7RUFFRSxnQ0FoS21CO0FBcUd2QjtBQThERTtFQUNFLGNBbEswQjtBQXNHOUI7QUErREU7RUFDRSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUE3REo7QUErREk7RUFFRSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBOUROO0FBaUVJO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0FBL0ROO0FBbUVFO0VBQ0UsMEJBQUE7QUFqRUo7QUFvRUU7RUFDRSwyQ0FBQTtBQWxFSjtBQXFFRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBbkVKO0FBc0VFO0VBQ0UsZ0NBQUE7RUFDQSxvQ0FBQTtBQXBFSjtBQXVFRTtFQUNFLDZCQUFBO0VBQ0EsMkNBQUE7QUFyRUo7QUF3RUU7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUF0RUo7QUF5RUU7RUFDRSxxQ0FBQTtBQXZFSjtBQTBFRTtFQUNFLDJDQUFBO0FBeEVKIiwiZmlsZSI6ImF2YXRhci5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy9cclxuLy8gVmFyYWJsZXMuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuJGxpc3QtYmFzZS1iZy1jb2xvcjogI2ZmZjtcclxuJGxpc3QtZGFyay1iZy1jb2xvcjogIzIxMjEyMTtcclxuJGxpc3QtYmFzZS10ZXh0LWNvbG9yOiByZ2JhKCMwMDAsIDAuODcpO1xyXG4kbGlzdC1kYXJrLXRleHQtY29sb3I6IHJnYmEoI2ZmZiwgMC44Nyk7XHJcbiRsaXN0LWJhc2UtaWNvbi1jb2xvcjogcmdiYSgjMDAwLCAwLjM4KTtcclxuJGxpc3QtZGFyay1pY29uLWNvbG9yOiByZ2JhKCNmZmYsIDAuMzgpO1xyXG5cclxuJGxpc3QtaXRlbS1hY3RpdmUtdGV4dC1jb2xvcjogIzNGNTFCNTtcclxuXHJcbiRsaXN0LXNpbmdsZS1saW5lLWhlaWdodDogNDhweDtcclxuJGxpc3QtdHdvLWxpbmUtaGVpZ2h0OiA3MnB4O1xyXG5cclxuLy9cclxuLy8gRnVuY3Rpb25zLlxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbkBmdW5jdGlvbiBmdW5jdGlvbi1uYW1lKCkge31cclxuXHJcbi8vXHJcbi8vIE1peGlucy5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5AbWl4aW4gbGlzdC1pbnRlcmFjdGlvbi1zdGF0ZSgpIHtcclxuICAmOjphZnRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGN1cnJlbnRDb2xvcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB3aWxsLWNoYW5nZTogb3BhY2l0eTtcclxuICAgIHRyYW5zaXRpb246XHJcbiAgICAgIG9wYWNpdHkgMTgwbXNcclxuICAgICAgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKVxyXG4gICAgO1xyXG4gIH1cclxuXHJcbiAgJjpob3Zlcjo6YWZ0ZXIge1xyXG4gICAgb3BhY2l0eTogMC4wNDtcclxuICB9XHJcblxyXG4gICY6Zm9jdXM6OmFmdGVyIHtcclxuICAgIG9wYWNpdHk6IDAuMTI7XHJcbiAgfVxyXG5cclxuICAmOmFjdGl2ZTo6YWZ0ZXIge1xyXG4gICAgb3BhY2l0eTogMC4xNjtcclxuICB9XHJcbn1cclxuXHJcbi8vXHJcbi8vIE1haW4uXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLmxpc3Qge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW46IDBweDtcclxuICBwYWRkaW5nOiA4cHggMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcclxuICBsaW5lLWhlaWdodDogMS41cmVtO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcclxuICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcblxyXG4gICY6bm90KC4tLWRhcmspIHtcclxuICAgIGNvbG9yOiAkbGlzdC1iYXNlLXRleHQtY29sb3I7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlzdC1iYXNlLWJnLWNvbG9yO1xyXG4gIH1cclxuXHJcbiAgJi4tLWRhcmsge1xyXG4gICAgY29sb3I6ICRsaXN0LWRhcmstdGV4dC1jb2xvcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRsaXN0LWRhcmstYmctY29sb3I7XHJcbiAgfVxyXG5cclxuICAvLyBMaXN0IGl0ZW0uXHJcblxyXG4gICYtaXRlbSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIHBhZGRpbmc6IDBweCAxNnB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICBAaW5jbHVkZSBsaXN0LWludGVyYWN0aW9uLXN0YXRlO1xyXG5cclxuICAgICYuLS1pcy1hY3RpdmUge1xyXG4gICAgICBjb2xvcjogJGxpc3QtaXRlbS1hY3RpdmUtdGV4dC1jb2xvcjtcclxuXHJcbiAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcclxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICBvcGFjaXR5OiAwLjA4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJl9fZ3JhcGhpYyxcclxuICAgICZfX21ldGEge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgZmlsbDogY3VycmVudENvbG9yO1xyXG4gICAgfVxyXG5cclxuICAgICZfX2dyYXBoaWMge1xyXG4gICAgICBmbGV4LXNocmluazogMDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAzMnB4O1xyXG5cclxuICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiAxLjVyZW07XHJcbiAgICAgICAgaGVpZ2h0OiAxLjVyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmX19tZXRhIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJjpub3QoLi0tdHdvLWxpbmUpICYtaXRlbSB7XHJcbiAgICBoZWlnaHQ6ICRsaXN0LXNpbmdsZS1saW5lLWhlaWdodDtcclxuICB9XHJcblxyXG4gICYuLS10d28tbGluZSAmLWl0ZW0ge1xyXG4gICAgaGVpZ2h0OiAkbGlzdC10d28tbGluZS1oZWlnaHQ7XHJcbiAgfVxyXG5cclxuICAmOm5vdCguLS1kYXJrKSAmLWl0ZW0uLS1pcy1hY3RpdmU6OmJlZm9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlzdC1iYXNlLXRleHQtY29sb3I7XHJcbiAgfVxyXG5cclxuICAmLi0tZGFyayAmLWl0ZW0uLS0taXMtYWN0aXZlOjpiZWZvcmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGxpc3QtZGFyay10ZXh0LWNvbG9yO1xyXG4gIH1cclxuXHJcbiAgJjpub3QoLi0tZGFyaykgJi1pdGVtX19ncmFwaGljLFxyXG4gICY6bm90KC4tLWRhcmspICYtaXRlbV9fbWV0YSB7XHJcbiAgICBjb2xvcjogJGxpc3QtYmFzZS1pY29uLWNvbG9yO1xyXG4gIH1cclxuXHJcbiAgJi4tLWRhcmsgJi1pdGVtX19ncmFwaGljLFxyXG4gICYuLS1kYXJrICYtaXRlbV9fbWV0YSB7XHJcbiAgICBjb2xvcjogJGxpc3QtZGFyay1pY29uLWNvbG9yO1xyXG4gIH1cclxuXHJcbiAgJi1pdGVtLi0taXMtYWN0aXZlICYtaXRlbV9fZ3JhcGhpYyB7XHJcbiAgICBjb2xvcjogJGxpc3QtaXRlbS1hY3RpdmUtdGV4dC1jb2xvcjtcclxuICB9XHJcblxyXG4gICYtaXRlbV9fdGV4dCB7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgICYtcHJpbWFyeSxcclxuICAgICYtc2Vjb25kYXJ5IHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgfVxyXG5cclxuICAgICYtc2Vjb25kYXJ5IHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuMjVyZW07XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmOm5vdCguLS1kYXJrKSAmLWl0ZW1fX3RleHQgJi1pdGVtX190ZXh0LXNlY29uZGFyeSB7XHJcbiAgICBjb2xvcjogcmdiYSgkbGlzdC1iYXNlLXRleHQtY29sb3IsIDAuNTYpO1xyXG4gIH1cclxuXHJcbiAgJi4tLWRhcmsgJi1pdGVtX190ZXh0ICYtaXRlbV9fdGV4dC1zZWNvbmRhcnkge1xyXG4gICAgY29sb3I6IGdiYSgkbGlzdC1kYXJrLXRleHQtY29sb3IsIDAuNTYpO1xyXG4gIH1cclxuXHJcbiAgJi4tLWF2YXRhci1saXN0ICYtaXRlbV9fZ3JhcGhpYyB7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG5cclxuICAmOm5vdCguLS1kYXJrKS4tLWF2YXRhci1saXN0ICYtaXRlbV9fZ3JhcGhpYyB7XHJcbiAgICBjb2xvcjogcmdiYSgkbGlzdC1iYXNlLWJnLWNvbG9yLCAwLjg3KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGxpc3QtYmFzZS10ZXh0LWNvbG9yLCAwLjMpO1xyXG4gIH1cclxuXHJcbiAgJi4tLWRhcmsuLS1hdmF0YXItbGlzdCAmLWl0ZW1fX2dyYXBoaWMge1xyXG4gICAgY29sb3I6IHJnYmEoJGxpc3QtZGFyay1iZy1jb2xvciwgMC44Nyk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRsaXN0LWRhcmstdGV4dC1jb2xvciwgMC4zOCk7XHJcbiAgfVxyXG5cclxuICAmLWRpdmlkZXIge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICB9XHJcblxyXG4gICY6bm90KC4tLWRhcmspICYtZGl2aWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRsaXN0LWJhc2UtdGV4dC1jb2xvciwgMC4xMik7XHJcbiAgfVxyXG5cclxuICAmLi0tZGFyayAmLWRpdmlkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkbGlzdC1kYXJrLXRleHQtY29sb3IsIDAuMTIpO1xyXG4gIH1cclxufVxyXG5cclxuLy8gRXh0cmEuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4iXX0= */", "@import url(\"https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700&display=swap\");\n[_ngcontent-%COMP%]:root {\n  --body-bg-color: #e4e6f5;\n  --border-color: #e5e4e9;\n  --theme-bg-color: #fff;\n  --body-color: #1b1f31;\n  --main-color: #7a7e9d;\n  --main-light-color: #a1a4b9;\n  --title-color: #979dc3;\n  --body-font: \"Jost\", sans-serif;\n  --button-bg-color: #eaeefc;\n  --button-color: #4d76fd;\n  --unselected-mail: #f1f2f7;\n  --calendar-border-color: #cbcfe0;\n  --main-container-bg: #f0f0f7;\n}\n*[_ngcontent-%COMP%] {\n  outline: none;\n  box-sizing: border-box;\n}\nhtml[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n}\nbody[_ngcontent-%COMP%] {\n  font-family: var(--body-font);\n  background-color: var(--body-bg-color);\n  color: var(--body-color);\n  font-size: 15px;\n}\nimg[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.container[_ngcontent-%COMP%] {\n  background-color: var(--theme-bg-color);\n  display: flex;\n  max-width: 1600px;\n  height: 100vh;\n  overflow: hidden;\n  margin: 0 auto;\n}\n.user-profile-area[_ngcontent-%COMP%] {\n  width: 360px;\n  border-right: 1px solid var(--border-color);\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n  overflow: auto;\n}\n.task-manager[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: var(--title-color);\n  font-weight: 700;\n  text-align: center;\n  height: 70px;\n  letter-spacing: 0.7px;\n  line-height: 70px;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 3;\n  text-transform: uppercase;\n  background-color: var(--theme-bg-color);\n  border-bottom: 1px solid var(--border-color);\n}\n.user-photo[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n  border-radius: 50%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.user-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin: 15px 0 8px;\n}\n.user-mail[_ngcontent-%COMP%] {\n  color: var(--main-light-color);\n  font-size: 12px;\n  font-weight: 600;\n}\n.user-profile[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  align-items: center;\n}\n.side-wrapper[_ngcontent-%COMP%] {\n  padding: 25px 40px;\n  border-bottom: 1px solid var(--border-color);\n}\n.side-wrapper[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.user-notification[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 25px;\n}\n.user-notification[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 36px;\n  padding: 10px;\n  flex-shrink: 0;\n  border-radius: 50%;\n  overflow: visible;\n  background-color: var(--button-bg-color);\n  color: var(--button-color);\n}\n.notify[_ngcontent-%COMP%] {\n  position: relative;\n}\n.notify[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 25px;\n}\n.notify.alert[_ngcontent-%COMP%] {\n  position: relative;\n}\n.notify.alert[_ngcontent-%COMP%]:before {\n  content: \"2\";\n  font-size: 9px;\n  font-weight: 700;\n  position: absolute;\n  background-color: #ff537b;\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  top: -3px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  right: 0px;\n  color: #fff;\n}\n.notify.alert[_ngcontent-%COMP%]:last-child:before {\n  content: \"5\";\n}\n.progress[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  border-radius: 4px;\n  background-color: #e7e7ef;\n  height: 8px;\n  overflow: hidden;\n}\n.progress-bar[_ngcontent-%COMP%] {\n  background-color: var(--button-color);\n  border-radius: 4px;\n  width: 35%;\n  height: 100%;\n  -webkit-animation: progressAnimation 6s;\n          animation: progressAnimation 6s;\n  transition: 0.3s linear both;\n  transition-property: width, background-color;\n}\n.progress-status[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  text-align: right;\n  color: var(--main-color);\n  font-size: 10px;\n  font-weight: 600;\n}\n@-webkit-keyframes progressAnimation {\n  0% {\n    width: 5%;\n    background-color: #a2b6f5;\n  }\n  100% {\n    width: 35%;\n  }\n}\n@keyframes progressAnimation {\n  0% {\n    width: 5%;\n    background-color: #a2b6f5;\n  }\n  100% {\n    width: 35%;\n  }\n}\n.task-status[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.task-stat[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.task-number[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 700;\n  margin-bottom: 10px;\n}\n.task-condition[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--main-color);\n  font-weight: 700;\n}\n.task-tasks[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  font-size: 10px;\n  font-weight: 600;\n  color: var(--main-light-color);\n}\n.project-title[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-weight: 700;\n  margin-bottom: 18px;\n}\n.project-department[_ngcontent-%COMP%] {\n  position: relative;\n  vertical-align: middle;\n  padding: 0 30px;\n  color: var(--main-color);\n  font-size: 13px;\n  font-weight: 600;\n  margin-top: 14px;\n}\n.project-department[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  top: 10;\n  left: 0;\n}\n.project-department[_ngcontent-%COMP%]:nth-child(1):before {\n  border: 3px solid #b36dfb;\n}\n.project-department[_ngcontent-%COMP%]:nth-child(2):before {\n  border: 3px solid #625be8;\n}\n.project-department[_ngcontent-%COMP%]:nth-child(3):before {\n  border: 3px solid #fec267;\n}\n.project-department[_ngcontent-%COMP%]:nth-child(4):before {\n  border: 3px solid #fc6679;\n}\n.members[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 50%;\n}\n.team-member[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.main-area[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  overflow: hidden;\n}\n.header[_ngcontent-%COMP%] {\n  height: 70px;\n  width: 100%;\n  border-bottom: 1px solid var(--border-color);\n}\n.search-bar[_ngcontent-%COMP%] {\n  height: 70px;\n  position: relative;\n}\n.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: block;\n  background-color: transparent;\n  border: none;\n  color: var(--body-color);\n  padding: 0 35px;\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23a1a4b9' stroke-width='3' stroke-linecap='round' stroke-linejoin='round' class='feather feather-search'%3e%3ccircle cx='11' cy='11' r='8'/%3e%3cpath d='M21 21l-4.35-4.35'/%3e%3c/svg%3e\");\n  background-repeat: no-repeat;\n  background-size: 18px;\n  background-position: 0 50%;\n  font-family: var(--body-font);\n  font-weight: 600;\n  font-size: 14px;\n}\n.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder {\n  color: var(--main-light-color);\n}\n.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-ms-input-placeholder {\n  color: var(--main-light-color);\n}\n.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: var(--main-light-color);\n}\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 20px 0 30px;\n}\n.inbox-calendar[_ngcontent-%COMP%] {\n  margin-right: 200px;\n}\n.color-menu[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.msg[_ngcontent-%COMP%] {\n  padding: 30px;\n  background-color: var(--unselected-mail);\n  border-bottom: 1px solid var(--border-color);\n  display: flex;\n  align-items: center;\n  transition: 0.4s ease;\n}\n.msg-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 14px;\n}\n.msg-date[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--main-light-color);\n  font-weight: 600;\n  margin-top: 5px;\n}\n.selected-bg[_ngcontent-%COMP%] {\n  background-color: var(--theme-bg-color);\n}\n.msg-department[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  text-transform: uppercase;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  left: 0;\n  z-index: 3;\n  font-weight: 700;\n  letter-spacing: 0.8px;\n  background-color: var(--theme-bg-color);\n  border-left: 4px solid #b36dfb;\n}\n.msg-department[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 12px;\n}\n.inbox[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n.inbox-container[_ngcontent-%COMP%] {\n  border-right: 1px solid var(--border-color);\n  width: 420px;\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n  flex-shrink: 0;\n}\n.main-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-grow: 1;\n  overflow: hidden;\n  background-color: var(--main-container-bg);\n}\n.mail-members[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  margin-left: auto;\n}\n.mail-choice[_ngcontent-%COMP%] {\n  display: none;\n}\n.mail-choice[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:before {\n  content: \"\";\n  display: flex;\n  width: 35px;\n  height: 35px;\n  border: 2px solid var(--main-light-color);\n  margin-right: 15px;\n  border-radius: 50%;\n  transition: 0.3s;\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='28' viewBox='0 0 24 24' fill='none' stroke='%23a1a4b9' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' class='feather feather-check'%3e%3cpath d='M20 6L9 17l-5-5'/%3e%3c/svg%3e\");\n  background-repeat: no-repeat;\n  background-position: center;\n  cursor: pointer;\n}\n.mail-choice[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:before {\n  border-color: green;\n  background-color: var(--button-color);\n  border-color: var(--button-color);\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='28' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' class='feather feather-check'%3e%3cpath d='M20 6L9 17l-5-5'/%3e%3c/svg%3e\");\n}\n.mail-choice[_ngcontent-%COMP%]:checked   .msg[_ngcontent-%COMP%] {\n  background-color: red;\n}\n.add-task[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n  flex-shrink: 0;\n  bottom: 0;\n  left: 0;\n  height: 80px;\n  margin-top: auto;\n  border-top: 1px solid var(--border-color);\n  display: flex;\n  align-items: center;\n  background-color: var(--theme-bg-color);\n  -webkit-animation: slideUp 0.45s 0.4s both;\n          animation: slideUp 0.45s 0.4s both;\n}\n.add-button[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n  bottom: 10px;\n  background-color: var(--button-color);\n  border: 0;\n  margin: auto;\n  padding: 10px 30px;\n  color: #fff;\n  font-size: 12px;\n  font-weight: 600;\n  border-radius: 20px;\n  flex-shrink: 0;\n  z-index: 1;\n  cursor: pointer;\n}\n.mail-detail[_ngcontent-%COMP%] {\n  display: flex;\n  -webkit-animation: slideX 0.6s both;\n          animation: slideX 0.6s both;\n  flex-direction: column;\n  overflow: auto;\n  background-color: var(--theme-bg-color);\n}\n.mail-detail-profile[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.mail-detail-header[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--border-color);\n  padding: 16px 30px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.mail-detail-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  margin-left: 10px;\n  white-space: nowrap;\n}\n@-webkit-keyframes slideX {\n  0% {\n    opacity: 0;\n    transform: translateX(200px);\n  }\n}\n@keyframes slideX {\n  0% {\n    opacity: 0;\n    transform: translateX(200px);\n  }\n}\n.inbox-detail[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n}\n.mail-icons[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.mail-icons[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  padding: 13px;\n  flex-shrink: 0;\n  margin-left: 10px;\n  border-radius: 50%;\n  overflow: visible;\n  background-color: var(--button-bg-color);\n  color: var(--button-color);\n}\n.mail-icons[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]:first-child {\n  margin-left: 0;\n}\n.mail-contents[_ngcontent-%COMP%] {\n  padding: 30px;\n}\n.mail-contents-subject[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.mail-contents-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 17px;\n  margin-left: 5px;\n}\n.mail[_ngcontent-%COMP%] {\n  padding-left: 55px;\n  font-size: 14px;\n  color: var(--main-light-color);\n}\n.mail-time[_ngcontent-%COMP%] {\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  font-size: 13px;\n}\n.mail-time[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 12px;\n  margin-right: 8px;\n}\n.mail-inside[_ngcontent-%COMP%] {\n  padding: 20px 0 30px;\n  border-bottom: 1px solid var(--border-color);\n  color: var(--main-color);\n  line-height: 1.8em;\n}\n.mail-checklist[_ngcontent-%COMP%] {\n  padding: 20px 0;\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid var(--border-color);\n}\n.mail-checklist[_ngcontent-%COMP%]   .mail-choice[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:before {\n  width: 20px;\n  height: 20px;\n  flex-shrink: 0;\n  margin-right: 12px;\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='14' height='18' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' class='feather feather-check'%3e%3cpath d='M20 6L9 17l-5-5'/%3e%3c/svg%3e\");\n}\n.mail-checklist[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  color: var(--button-color);\n  font-weight: 600;\n  font-size: 13px;\n}\n.mail-checklist-date[_ngcontent-%COMP%] {\n  margin-left: 16px;\n  font-size: 13px;\n}\n.assignee[_ngcontent-%COMP%] {\n  font-size: 13px;\n  margin-bottom: 10px;\n}\n.assignee[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.mail-assign[_ngcontent-%COMP%] {\n  padding: 20px 0;\n  border-bottom: 1px solid var(--border-color);\n}\n.mail-doc[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 30px 0;\n  flex-shrink: 0;\n  justify-content: space-between;\n}\n.mail-doc-name[_ngcontent-%COMP%] {\n  color: var(--body-color);\n  font-weight: 600;\n  font-size: 15px;\n  margin-bottom: 3px;\n}\n.mail-doc-date[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.mail-doc-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.mail-doc-wrapper[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin-right: 15px;\n  background-color: var(--button-bg-color);\n  color: var(--button-color);\n  width: 50px;\n  padding: 9px;\n  border-radius: 4px;\n}\n.mail-doc-icons[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 8px;\n}\n.mail-textarea[_ngcontent-%COMP%] {\n  display: flex;\n  background-color: var(--unselected-mail);\n  padding: 30px 0;\n  border-top: 1px solid var(--border-color);\n  position: -webkit-sticky;\n  position: sticky;\n  bottom: 0;\n  justify-content: space-between;\n  margin-top: auto;\n  left: 0;\n  overflow: hidden;\n  height: 80px;\n  flex-shrink: 0;\n}\n.mail-textarea[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  background-color: transparent;\n  font-size: 15px;\n  width: 100%;\n  padding: 0 30px;\n  color: var(--main-color);\n}\n.mail-textarea[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder {\n  color: var(--main-light-color);\n}\n.mail-textarea[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-ms-input-placeholder {\n  color: var(--main-light-color);\n}\n.mail-textarea[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: var(--main-light-color);\n}\n.textarea-icons[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.attach[_ngcontent-%COMP%] {\n  padding: 30px;\n  border-right: 1px solid var(--border-color);\n  border-left: 1px solid var(--border-color);\n}\n.attach[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: var(--main-color);\n}\n.send[_ngcontent-%COMP%] {\n  padding: 30px;\n  background-color: var(--button-color);\n}\n.send[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: var(--theme-bg-color);\n}\n.inbox-calendar-checkbox[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  margin: 0;\n  opacity: 0;\n  z-index: 3;\n  cursor: pointer;\n}\n.toggle-page[_ngcontent-%COMP%] {\n  overflow: hidden;\n  z-index: 2;\n}\n.inbox-calendar[_ngcontent-%COMP%] {\n  position: relative;\n  width: 220px;\n  border-radius: 20px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  overflow: hidden;\n  flex-shrink: 0;\n}\n.layer[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  background-color: var(--unselected-mail);\n  transition: 0.3s ease all;\n  z-index: 1;\n}\n.toggle-page[_ngcontent-%COMP%]:before, .toggle-page[_ngcontent-%COMP%]:after, .toggle-page[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 4px;\n  width: 100px;\n  height: 10px;\n  font-size: 12px;\n  font-weight: bold;\n  text-align: center;\n  line-height: 1;\n  padding: 9px 4px;\n  border-radius: 20px;\n  transition: 0.3s ease all;\n}\n.toggle-page[_ngcontent-%COMP%]:before {\n  content: \"\";\n  left: 4px;\n  background-color: var(--button-color);\n}\n.toggle-page[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--theme-bg-color);\n  z-index: 1;\n  left: 6px;\n}\n.toggle-page[_ngcontent-%COMP%]:after {\n  content: \"Calendar\";\n  right: 4px;\n  color: var(--main-light-color);\n}\n.inbox-calendar-checkbox[_ngcontent-%COMP%]:checked    + .toggle-page[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--main-light-color);\n}\n.inbox-calendar-checkbox[_ngcontent-%COMP%]:checked    + .toggle-page[_ngcontent-%COMP%]:before {\n  left: 109px;\n}\n.inbox-calendar-checkbox[_ngcontent-%COMP%]:checked    + .toggle-page[_ngcontent-%COMP%]:after {\n  color: var(--theme-bg-color);\n}\n.calendar[_ngcontent-%COMP%] {\n  display: grid;\n  width: 100%;\n  grid-template-columns: repeat(7, minmax(195px, 1fr));\n  grid-template-rows: 57px;\n  grid-auto-rows: 120px;\n  overflow: auto;\n}\n.calendar-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  margin-top: 0;\n  overflow: auto;\n  border-radius: 10px;\n  background: #fff;\n  max-width: 975px;\n  border: 1px solid var(--calendar-border-color);\n}\n.days[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--main-color);\n  text-align: center;\n  line-height: 60px;\n}\n.days[_ngcontent-%COMP%]:not(:nth-of-type(7n + 7)) {\n  border-right: 1px solid var(--calendar-border-color);\n}\n.day[_ngcontent-%COMP%] {\n  padding: 15px;\n  overflow: hidden;\n  font-weight: 700;\n  font-size: 13px;\n  border-right: 1px solid var(--calendar-border-color);\n  border-top: 1px solid var(--calendar-border-color);\n}\n.day[_ngcontent-%COMP%]:nth-of-type(7n + 7) {\n  border-right: 0;\n}\n.day.not-work[_ngcontent-%COMP%] {\n  color: var(--main-color);\n}\n.day.project-market[_ngcontent-%COMP%] {\n  background-color: #f5eafd;\n  border-left: 3px solid #b86df7;\n  transition: 0.2s ease;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n}\n.day.project-market[_ngcontent-%COMP%]:hover {\n  transform: scale(1.3);\n  border: 0;\n  border-radius: 4px;\n  background-image: linear-gradient(to top, #6625dc, #7739e3, #874cea, #965df1, #a46ef8);\n  color: #fff;\n  font-size: 15px;\n}\n.day.project-market[_ngcontent-%COMP%]:hover   .project-detail[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 9px;\n}\n.day.project-market[_ngcontent-%COMP%]:hover   .project-detail[_ngcontent-%COMP%]:before {\n  top: 2px;\n}\n.day.project-market[_ngcontent-%COMP%]:hover   .hover-title[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 8px;\n  padding-left: 18px;\n  margin-top: 5px 0 3px;\n}\n.day.project-market[_ngcontent-%COMP%]:hover   .popup-check[_ngcontent-%COMP%] {\n  display: block;\n  width: 12px;\n  margin-left: auto;\n  margin-top: 6px;\n}\n.day.project-design[_ngcontent-%COMP%] {\n  background-color: #eeeffd;\n  border-left: 3px solid #736eeb;\n}\n.day.project-develop[_ngcontent-%COMP%] {\n  background-color: #fef6e8;\n  border-left: 3px solid #ffc263;\n}\n.day.project-finance[_ngcontent-%COMP%] {\n  background-color: #fee9ec;\n  border-left: 3px solid #ff647a;\n  transition: 0.2s ease;\n  cursor: pointer;\n}\n.day.project-finance[_ngcontent-%COMP%]:hover {\n  background-image: linear-gradient(to top, #f7224b, #fa3d5d, #fd526e, #fe637e, #ff748e);\n  transform: scale(1.3);\n  border: 0;\n  border-radius: 4px;\n  color: #fff;\n  font-size: 15px;\n}\n.day.project-finance[_ngcontent-%COMP%]:hover   .popup-check[_ngcontent-%COMP%] {\n  display: block;\n  width: 12px;\n  margin-left: auto;\n  margin-top: 10px;\n}\n.day.project-finance[_ngcontent-%COMP%]:hover   .project-detail[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 9px;\n}\n.day.project-finance[_ngcontent-%COMP%]:hover   .project-detail[_ngcontent-%COMP%]:before {\n  top: 2px;\n  background-color: #ce283e;\n}\n.day.project-finance[_ngcontent-%COMP%]:hover   .hover-title[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 8px;\n  padding-left: 18px;\n  margin-top: 5px;\n}\n.hover-title[_ngcontent-%COMP%] {\n  display: none;\n  color: #fff;\n}\n.popup-check[_ngcontent-%COMP%] {\n  display: none;\n}\n.hide[_ngcontent-%COMP%] {\n  display: none;\n}\n.project-detail[_ngcontent-%COMP%] {\n  color: #783cae;\n  font-size: 10px;\n  position: relative;\n  margin-top: 5px;\n  padding-left: 20px;\n  line-height: 1.4em;\n}\n.project-detail[_ngcontent-%COMP%]    + .project-detail[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n.project-detail[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background-color: #b86df7;\n  top: 4px;\n  left: 10px;\n}\n.project-detail.design[_ngcontent-%COMP%] {\n  color: #4844c1;\n}\n.project-detail.design[_ngcontent-%COMP%]:before {\n  background-color: #6f69ea;\n}\n.project-detail.develop[_ngcontent-%COMP%] {\n  color: #de9d3a;\n}\n.project-detail.develop[_ngcontent-%COMP%]:before {\n  background-color: #ffc263;\n}\n.project-detail.finance[_ngcontent-%COMP%] {\n  color: #e85b6f;\n}\n.project-detail.finance[_ngcontent-%COMP%]:before {\n  background-color: #fd667a;\n}\n.week-month[_ngcontent-%COMP%] {\n  display: flex;\n  height: 30px;\n}\n.button[_ngcontent-%COMP%] {\n  border: 1px solid var(--button-color);\n  border-radius: 25px 0 0 25px;\n  color: var(--button-color);\n  padding: 8px 16px;\n  font-weight: 600;\n  font-family: var(--body-font);\n  font-size: 12px;\n  flex-shrink: 0;\n  cursor: pointer;\n  background-color: transparent;\n}\n.button.active[_ngcontent-%COMP%] {\n  background-color: var(--button-color);\n  color: var(--theme-bg-color);\n}\n.button-month[_ngcontent-%COMP%] {\n  border-radius: 0 25px 25px 0;\n  margin-left: -2px;\n}\n.calender-tab[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  max-width: 975px;\n  margin: 0 auto;\n  width: 100%;\n  padding-bottom: 30px;\n}\n.current-month[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 0 10px;\n  font-weight: 600;\n}\n.current-year[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--main-color);\n  font-weight: 600;\n  margin-top: 5px;\n}\n.month-change[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.button-weekends[_ngcontent-%COMP%], .button-task[_ngcontent-%COMP%] {\n  border-radius: 25px;\n}\n.button-task[_ngcontent-%COMP%] {\n  margin-left: 15px;\n}\n.button-weekends[_ngcontent-%COMP%] {\n  border-color: var(--main-light-color);\n  color: var(--main-light-color);\n}\n.calendar-container[_ngcontent-%COMP%] {\n  flex-direction: column;\n  width: 100%;\n  padding: 30px 50px;\n  overflow: auto;\n  display: none;\n}\n.calendar-container.calendar-show[_ngcontent-%COMP%] {\n  display: flex;\n}\n.color-menu[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  border-radius: 50%;\n  position: relative;\n  overflow: hidden;\n  width: 32px;\n  height: 32px;\n}\n.color-menu[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 8;\n  width: 17px;\n  top: 7px;\n  right: 8px;\n  fill: #fff;\n  pointer-events: none;\n}\n.colorpicker[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 50%;\n  width: 50px;\n  height: 55px;\n  top: -8px;\n  right: -8px;\n  position: absolute;\n  cursor: pointer;\n}\n.msg-content[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  margin-top: auto;\n  height: 30px;\n  margin-left: 10px;\n}\n@media screen and (max-width: 1160px) {\n  .inbox-container[_ngcontent-%COMP%] {\n    width: 370px;\n  }\n\n  .user-profile-area[_ngcontent-%COMP%] {\n    width: 320px;\n  }\n}\n@media screen and (max-width: 1070px) {\n  .mail-detail-header[_ngcontent-%COMP%]   .mail-icons[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    display: inline-block;\n  }\n}\n@media screen and (max-width: 960px) {\n  .inbox-calendar[_ngcontent-%COMP%] {\n    margin-right: 100px;\n  }\n}\n@media screen and (max-width: 870px) {\n  .user-profile-area[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media screen and (max-width: 530px) {\n  .search-bar[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .mail-textarea[_ngcontent-%COMP%] {\n    padding: 0;\n    height: 60px;\n  }\n\n  .button-weekends[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media screen and (max-width: 485px) {\n  .mail-icons[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]:not(:first-child) {\n    display: none;\n  }\n\n  .inbox-calendar[_ngcontent-%COMP%] {\n    margin-right: 0;\n  }\n\n  .calendar-container[_ngcontent-%COMP%] {\n    padding: 30px 20px;\n  }\n}\n@media screen and (max-width: 370px) {\n  .mail-doc-icons[_ngcontent-%COMP%], .mail-checklist-date[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.anim-y[_ngcontent-%COMP%] {\n  -webkit-animation: slideUp 0.6s both;\n          animation: slideUp 0.6s both;\n}\n.anim-y[_ngcontent-%COMP%]:nth-child(2) {\n  -webkit-animation-delay: 0.28s;\n          animation-delay: 0.28s;\n}\n.anim-y[_ngcontent-%COMP%]:nth-child(3) {\n  -webkit-animation-delay: 0.42s;\n          animation-delay: 0.42s;\n}\n.anim-y[_ngcontent-%COMP%]:nth-child(4) {\n  -webkit-animation-delay: 0.56s;\n          animation-delay: 0.56s;\n}\n.anim-y[_ngcontent-%COMP%]:nth-child(5) {\n  -webkit-animation-delay: 0.7s;\n          animation-delay: 0.7s;\n}\n.anim-y[_ngcontent-%COMP%]:nth-child(6) {\n  -webkit-animation-delay: 0.84s;\n          animation-delay: 0.84s;\n}\n.anim-y[_ngcontent-%COMP%]:nth-child(7) {\n  -webkit-animation-delay: 0.98s;\n          animation-delay: 0.98s;\n}\n.anim-y[_ngcontent-%COMP%]:nth-child(8) {\n  -webkit-animation-delay: 1.12s;\n          animation-delay: 1.12s;\n}\n.anim-y[_ngcontent-%COMP%]:nth-child(9) {\n  -webkit-animation-delay: 1.26s;\n          animation-delay: 1.26s;\n}\n.anim-y[_ngcontent-%COMP%]:nth-child(10) {\n  -webkit-animation-delay: 1.4s;\n          animation-delay: 1.4s;\n}\n@-webkit-keyframes slideUp {\n  0% {\n    transform: translateY(76px) scale(0.92);\n    opacity: 0;\n  }\n}\n@keyframes slideUp {\n  0% {\n    transform: translateY(76px) scale(0.92);\n    opacity: 0;\n  }\n}\n.msg.selected-bg.anim-y[_ngcontent-%COMP%] {\n  padding: 10px;\n  margin-bottom: 10px;\n}\n.user_list[_ngcontent-%COMP%] {\n  list-style: none;\n}\n.user_list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n}\n.user_list_innertask[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px;\n  background: #ddd;\n  border-radius: 5px;\n  margin-bottom: 10px;\n  height: 43px;\n}\n.display_around[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n}\n.user_exptional[_ngcontent-%COMP%] {\n  margin: 0px;\n  background: #fff;\n  border: 0px;\n  box-shadow: none;\n  margin-bottom: 10px;\n}\n.user_active[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #3c0707;\n}\n.mail-detail[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHVzZXJzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsa0dBQUE7QUFFUjtFQUNDLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsK0JBQUE7RUFDQSwwQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQ0FBQTtFQUNBLDRCQUFBO0FBQUQ7QUFHQTtFQUNDLGFBQUE7RUFDQSxzQkFBQTtBQUFEO0FBR0E7RUFDQyxzQkFBQTtFQUNBLG1DQUFBO0FBQUQ7QUFHQTtFQUNDLDZCQUFBO0VBQ0Esc0NBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7QUFBRDtBQUdBO0VBQ0MsZUFBQTtBQUFEO0FBR0E7RUFDQyx1Q0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFBRDtBQUdBO0VBQ0MsWUFBQTtFQUNBLDJDQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFBRDtBQUdBO0VBQ0MsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSx1Q0FBQTtFQUNBLDRDQUFBO0FBQUQ7QUFHQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FBQUQ7QUFHQTtFQUNDLGdCQUFBO0VBQ0Esa0JBQUE7QUFBRDtBQUdBO0VBQ0MsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFBRDtBQUdBO0VBQ0MsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUFEO0FBR0E7RUFDQyxrQkFBQTtFQUNBLDRDQUFBO0FBQUQ7QUFDQztFQUNDLG1CQUFBO0FBQ0Y7QUFHQTtFQUNDLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFBRDtBQUNDO0VBQ0MsV0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHdDQUFBO0VBQ0EsMEJBQUE7QUFDRjtBQUdBO0VBQ0Msa0JBQUE7QUFBRDtBQUNDO0VBQ0Msa0JBQUE7QUFDRjtBQUNDO0VBQ0Msa0JBQUE7QUFDRjtBQUFFO0VBQ0MsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFFSDtBQUFFO0VBQ0MsWUFBQTtBQUVIO0FBR0E7RUFDQyxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUFEO0FBQ0M7RUFDQyxxQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSx1Q0FBQTtVQUFBLCtCQUFBO0VBQ0EsNEJBQUE7RUFDQSw0Q0FBQTtBQUNGO0FBQ0M7RUFDQyxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFDRjtBQUdBO0VBQ0M7SUFDQyxTQUFBO0lBQ0EseUJBQUE7RUFBQTtFQUVEO0lBQ0MsVUFBQTtFQUFBO0FBQ0Y7QUFQQTtFQUNDO0lBQ0MsU0FBQTtJQUNBLHlCQUFBO0VBQUE7RUFFRDtJQUNDLFVBQUE7RUFBQTtBQUNGO0FBSUM7RUFDQyxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBRkY7QUFJQztFQUNDLGtCQUFBO0FBRkY7QUFJQztFQUNDLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBRkY7QUFJQztFQUNDLGVBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FBRkY7QUFJQztFQUNDLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtBQUZGO0FBT0M7RUFDQyx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFKRjtBQU1DO0VBQ0Msa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBSkY7QUFLRTtFQUNDLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsT0FBQTtBQUhIO0FBS0U7RUFDQyx5QkFBQTtBQUhIO0FBS0U7RUFDQyx5QkFBQTtBQUhIO0FBS0U7RUFDQyx5QkFBQTtBQUhIO0FBS0U7RUFDQyx5QkFBQTtBQUhIO0FBUUE7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxrQkFBQTtBQUxEO0FBUUE7RUFDQyxhQUFBO0VBQ0EsOEJBQUE7QUFMRDtBQVFBO0VBQ0MsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBTEQ7QUFRQTtFQUNDLFlBQUE7RUFDQSxXQUFBO0VBQ0EsNENBQUE7QUFMRDtBQVFBO0VBQ0MsWUFBQTtFQUNBLGtCQUFBO0FBTEQ7QUFPQztFQUNDLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLDZWQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFMRjtBQU1FO0VBQ0MsOEJBQUE7QUFKSDtBQUdFO0VBQ0MsOEJBQUE7QUFKSDtBQUdFO0VBQ0MsOEJBQUE7QUFKSDtBQVNBO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtBQU5EO0FBU0E7RUFDQyxtQkFBQTtBQU5EO0FBU0E7RUFDQyxjQUFBO0FBTkQ7QUFTQTtFQUNDLGFBQUE7RUFDQSx3Q0FBQTtFQUNBLDRDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFORDtBQU9DO0VBQ0MsZ0JBQUE7RUFDQSxlQUFBO0FBTEY7QUFPQztFQUNDLGVBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUxGO0FBU0E7RUFDQyx1Q0FBQTtBQU5EO0FBU0E7RUFDQyxhQUFBO0VBQ0EsOEJBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUNBQUE7RUFDQSw4QkFBQTtBQU5EO0FBT0M7RUFDQyxXQUFBO0FBTEY7QUFTQTtFQUNDLGNBQUE7QUFORDtBQVFDO0VBQ0MsMkNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFORjtBQVNBO0VBQ0MsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDBDQUFBO0FBTkQ7QUFTQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFORDtBQVNBO0VBQ0MsYUFBQTtBQU5EO0FBU0E7RUFDQyxXQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1VEFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0FBTkQ7QUFTQTtFQUNDLG1CQUFBO0VBQ0EscUNBQUE7RUFDQSxpQ0FBQTtFQUNBLG9UQUFBO0FBTkQ7QUFTQTtFQUNDLHFCQUFBO0FBTkQ7QUFVQztFQUNDLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5Q0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVDQUFBO0VBQ0EsMENBQUE7VUFBQSxrQ0FBQTtBQVBGO0FBU0M7RUFDQyx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHFDQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQVBGO0FBV0E7RUFDQyxhQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLHVDQUFBO0FBUkQ7QUFTQztFQUNDLGFBQUE7RUFDQSxtQkFBQTtBQVBGO0FBU0M7RUFDQyw0Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFQRjtBQVNDO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQVBGO0FBV0E7RUFDQztJQUNDLFVBQUE7SUFDQSw0QkFBQTtFQVJBO0FBQ0Y7QUFJQTtFQUNDO0lBQ0MsVUFBQTtJQUNBLDRCQUFBO0VBUkE7QUFDRjtBQVdBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7QUFURDtBQVlBO0VBQ0MsY0FBQTtBQVREO0FBVUM7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esd0NBQUE7RUFDQSwwQkFBQTtBQVJGO0FBU0U7RUFDQyxjQUFBO0FBUEg7QUFZQTtFQUNDLGFBQUE7QUFURDtBQVVDO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0FBUkY7QUFVQztFQUNDLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBUkY7QUFZQTtFQUNDLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0FBVEQ7QUFVQztFQUNDLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQVJGO0FBU0U7RUFDQyxXQUFBO0VBQ0EsaUJBQUE7QUFQSDtBQVVDO0VBQ0Msb0JBQUE7RUFDQSw0Q0FBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7QUFSRjtBQVVDO0VBQ0MsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDRDQUFBO0FBUkY7QUFTRTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esb1RBQUE7QUFQSDtBQVNFO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFQSDtBQVNFO0VBQ0MsaUJBQUE7RUFDQSxlQUFBO0FBUEg7QUFZQTtFQUNDLGVBQUE7RUFDQSxtQkFBQTtBQVREO0FBVUM7RUFDQyxnQkFBQTtBQVJGO0FBWUE7RUFDQyxlQUFBO0VBQ0EsNENBQUE7QUFURDtBQVlBO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSw4QkFBQTtBQVREO0FBVUM7RUFDQyx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBUkY7QUFVQztFQUNDLGVBQUE7QUFSRjtBQVVDO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0FBUkY7QUFTRTtFQUNDLGtCQUFBO0VBQ0Esd0NBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFQSDtBQVdFO0VBQ0MsaUJBQUE7QUFUSDtBQWNBO0VBQ0MsYUFBQTtFQUNBLHdDQUFBO0VBQ0EsZUFBQTtFQUNBLHlDQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsT0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFYRDtBQVlDO0VBQ0MsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7QUFWRjtBQVdFO0VBQ0MsOEJBQUE7QUFUSDtBQVFFO0VBQ0MsOEJBQUE7QUFUSDtBQVFFO0VBQ0MsOEJBQUE7QUFUSDtBQWNBO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0FBWEQ7QUFjQTtFQUNDLGFBQUE7RUFDQSwyQ0FBQTtFQUNBLDBDQUFBO0FBWEQ7QUFZQztFQUNDLHdCQUFBO0FBVkY7QUFjQTtFQUNDLGFBQUE7RUFDQSxxQ0FBQTtBQVhEO0FBWUM7RUFDQyw0QkFBQTtBQVZGO0FBY0E7RUFDQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUFYRDtBQWNBO0VBQ0MsZ0JBQUE7RUFDQSxVQUFBO0FBWEQ7QUFjQTtFQUNDLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQVhEO0FBY0E7RUFDQyxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0Esd0NBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7QUFYRDtBQWNBOzs7RUFHQyxrQkFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQVhEO0FBY0E7RUFDQyxXQUFBO0VBQ0EsU0FBQTtFQUNBLHFDQUFBO0FBWEQ7QUFjQTtFQUNDLDRCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFYRDtBQWNBO0VBQ0MsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsOEJBQUE7QUFYRDtBQWNBO0VBQ0MsOEJBQUE7QUFYRDtBQWNBO0VBQ0MsV0FBQTtBQVhEO0FBY0E7RUFDQyw0QkFBQTtBQVhEO0FBZ0JBO0VBQ0MsYUFBQTtFQUNBLFdBQUE7RUFDQSxvREFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FBYkQ7QUFlQztFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4Q0FBQTtBQWJGO0FBaUJBO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBZEQ7QUFlQztFQUNDLG9EQUFBO0FBYkY7QUFpQkE7RUFDQyxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxvREFBQTtFQUNBLGtEQUFBO0FBZEQ7QUFlQztFQUNDLGVBQUE7QUFiRjtBQWVDO0VBQ0Msd0JBQUE7QUFiRjtBQWVDO0VBQ0MseUJBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQWJGO0FBY0U7RUFDQyxxQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLHNGQUFBO0VBUUEsV0FBQTtFQUNBLGVBQUE7QUFuQkg7QUFvQkc7RUFDQyxXQUFBO0VBQ0EsY0FBQTtBQWxCSjtBQW1CSTtFQUNDLFFBQUE7QUFqQkw7QUFvQkc7RUFDQyxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFsQko7QUFvQkc7RUFDQyxjQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQWxCSjtBQXNCQztFQUNDLHlCQUFBO0VBQ0EsOEJBQUE7QUFwQkY7QUFzQkM7RUFDQyx5QkFBQTtFQUNBLDhCQUFBO0FBcEJGO0FBc0JDO0VBQ0MseUJBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQXBCRjtBQXFCRTtFQUNDLHNGQUFBO0VBUUEscUJBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQTFCSDtBQTJCRztFQUNDLGNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQXpCSjtBQTJCRztFQUNDLFdBQUE7RUFDQSxjQUFBO0FBekJKO0FBMEJJO0VBQ0MsUUFBQTtFQUNBLHlCQUFBO0FBeEJMO0FBMkJHO0VBQ0MsY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUF6Qko7QUErQkE7RUFDQyxhQUFBO0VBQ0EsV0FBQTtBQTVCRDtBQStCQTtFQUNDLGFBQUE7QUE1QkQ7QUErQkE7RUFDQyxhQUFBO0FBNUJEO0FBK0JBO0VBQ0MsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBNUJEO0FBNkJDO0VBQ0MsZUFBQTtBQTNCRjtBQTZCQztFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FBM0JGO0FBNkJDO0VBQ0MsY0FBQTtBQTNCRjtBQTRCRTtFQUNDLHlCQUFBO0FBMUJIO0FBNkJDO0VBQ0MsY0FBQTtBQTNCRjtBQTRCRTtFQUNDLHlCQUFBO0FBMUJIO0FBNkJDO0VBQ0MsY0FBQTtBQTNCRjtBQTRCRTtFQUNDLHlCQUFBO0FBMUJIO0FBK0JBO0VBQ0MsYUFBQTtFQUNBLFlBQUE7QUE1QkQ7QUErQkE7RUFDQyxxQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtBQTVCRDtBQTZCQztFQUNDLHFDQUFBO0VBQ0EsNEJBQUE7QUEzQkY7QUErQkE7RUFDQyw0QkFBQTtFQUNBLGlCQUFBO0FBNUJEO0FBK0JBO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QUE1QkQ7QUFnQ0M7RUFDQyxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQTdCRjtBQStCQztFQUNDLGVBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQTdCRjtBQWlDQTtFQUNDLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBOUJEO0FBaUNBOztFQUVDLG1CQUFBO0FBOUJEO0FBaUNBO0VBQ0MsaUJBQUE7QUE5QkQ7QUFpQ0E7RUFDQyxxQ0FBQTtFQUNBLDhCQUFBO0FBOUJEO0FBaUNBO0VBQ0Msc0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQTlCRDtBQStCQztFQUNDLGFBQUE7QUE3QkY7QUFpQ0E7RUFDQyxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUE5QkQ7QUErQkM7RUFDQyxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7QUE3QkY7QUFpQ0E7RUFDQyxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBOUJEO0FBZ0NBO0VBQ0UsV0FBQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBN0JKO0FBd0NBO0VBQ0M7SUFDQyxZQUFBO0VBckNBOztFQXVDRDtJQUNDLFlBQUE7RUFwQ0E7QUFDRjtBQXVDQTtFQUlFO0lBQ0MscUJBQUE7RUF4Q0Q7QUFDRjtBQTRDQTtFQUNDO0lBQ0MsbUJBQUE7RUExQ0E7QUFDRjtBQTZDQTtFQUNBO0lBQ0MsYUFBQTtFQTNDQztBQUNGO0FBOENBO0VBQ0M7SUFDQyxhQUFBO0VBNUNBOztFQThDRDtJQUNDLFVBQUE7SUFDQSxZQUFBO0VBM0NBOztFQTZDRDtJQUNDLGFBQUE7RUExQ0E7QUFDRjtBQTZDQTtFQUVFO0lBQ0MsYUFBQTtFQTVDRDs7RUErQ0Q7SUFDQyxlQUFBO0VBNUNBOztFQThDRDtJQUNDLGtCQUFBO0VBM0NBO0FBQ0Y7QUE4Q0E7RUFDQzs7SUFFQyxhQUFBO0VBNUNBO0FBQ0Y7QUErQ0E7RUFDQyxvQ0FBQTtVQUFBLDRCQUFBO0FBN0NEO0FBaURFO0VBQ0MsOEJBQUE7VUFBQSxzQkFBQTtBQTlDSDtBQTZDRTtFQUNDLDhCQUFBO1VBQUEsc0JBQUE7QUExQ0g7QUF5Q0U7RUFDQyw4QkFBQTtVQUFBLHNCQUFBO0FBdENIO0FBcUNFO0VBQ0MsNkJBQUE7VUFBQSxxQkFBQTtBQWxDSDtBQWlDRTtFQUNDLDhCQUFBO1VBQUEsc0JBQUE7QUE5Qkg7QUE2QkU7RUFDQyw4QkFBQTtVQUFBLHNCQUFBO0FBMUJIO0FBeUJFO0VBQ0MsOEJBQUE7VUFBQSxzQkFBQTtBQXRCSDtBQXFCRTtFQUNDLDhCQUFBO1VBQUEsc0JBQUE7QUFsQkg7QUFpQkU7RUFDQyw2QkFBQTtVQUFBLHFCQUFBO0FBZEg7QUFtQkE7RUFDQztJQUNDLHVDQUFBO0lBQ0EsVUFBQTtFQWhCQTtBQUNGO0FBWUE7RUFDQztJQUNDLHVDQUFBO0lBQ0EsVUFBQTtFQWhCQTtBQUNGO0FBa0JBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBaEJGO0FBb0JBO0VBQ0UsZ0JBQUE7QUFqQkY7QUFrQkU7RUFFRSxnQkFBQTtBQWpCSjtBQW9CQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBakJGO0FBbUJBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0FBaEJBO0FBa0JBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFmRjtBQWlCQTtFQUNFLGdDQUFBO0FBZEY7QUFnQkE7RUFDRSxXQUFBO0FBYkYiLCJmaWxlIjoidXNlcnMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUpvc3Q6d2dodEAzMDA7NDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuOnJvb3Qge1xyXG4gLS1ib2R5LWJnLWNvbG9yOiAjZTRlNmY1O1xyXG4gLS1ib3JkZXItY29sb3I6ICNlNWU0ZTk7XHJcbiAtLXRoZW1lLWJnLWNvbG9yOiAjZmZmO1xyXG4gLS1ib2R5LWNvbG9yOiAjMWIxZjMxO1xyXG4gLS1tYWluLWNvbG9yOiAjN2E3ZTlkO1xyXG4gLS1tYWluLWxpZ2h0LWNvbG9yOiAjYTFhNGI5O1xyXG4gLS10aXRsZS1jb2xvcjogIzk3OWRjMztcclxuIC0tYm9keS1mb250OiBcIkpvc3RcIiwgc2Fucy1zZXJpZjtcclxuIC0tYnV0dG9uLWJnLWNvbG9yOiAjZWFlZWZjO1xyXG4gLS1idXR0b24tY29sb3I6ICM0ZDc2ZmQ7XHJcbiAtLXVuc2VsZWN0ZWQtbWFpbDogI2YxZjJmNztcclxuIC0tY2FsZW5kYXItYm9yZGVyLWNvbG9yOiAjY2JjZmUwO1xyXG4gLS1tYWluLWNvbnRhaW5lci1iZzogI2YwZjBmNztcclxufVxyXG5cclxuKiB7XHJcbiBvdXRsaW5lOiBub25lO1xyXG4gYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuaHRtbCB7XHJcbiBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gZm9udC1mYW1pbHk6IHZhcigtLWJvZHktZm9udCk7XHJcbiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2R5LWJnLWNvbG9yKTtcclxuIGNvbG9yOiB2YXIoLS1ib2R5LWNvbG9yKTtcclxuIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuaW1nIHtcclxuIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS1iZy1jb2xvcik7XHJcbiBkaXNwbGF5OiBmbGV4O1xyXG4gbWF4LXdpZHRoOiAxNjAwcHg7XHJcbiBoZWlnaHQ6IDEwMHZoO1xyXG4gb3ZlcmZsb3c6IGhpZGRlbjtcclxuIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4udXNlci1wcm9maWxlLWFyZWEge1xyXG4gd2lkdGg6IDM2MHB4O1xyXG4gYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcclxuIGRpc3BsYXk6IGZsZXg7XHJcbiBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gZmxleC1zaHJpbms6IDA7XHJcbiBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLnRhc2stbWFuYWdlciB7XHJcbiBmb250LXNpemU6IDE1cHg7XHJcbiBjb2xvcjogdmFyKC0tdGl0bGUtY29sb3IpO1xyXG4gZm9udC13ZWlnaHQ6IDcwMDtcclxuIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIGhlaWdodDogNzBweDtcclxuIGxldHRlci1zcGFjaW5nOiAwLjdweDtcclxuIGxpbmUtaGVpZ2h0OiA3MHB4O1xyXG4gcG9zaXRpb246IHN0aWNreTtcclxuIHRvcDogMDtcclxuIHotaW5kZXg6IDM7XHJcbiB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhlbWUtYmctY29sb3IpO1xyXG4gYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XHJcbn1cclxuXHJcbi51c2VyLXBob3RvIHtcclxuIHdpZHRoOiA3MHB4O1xyXG4gaGVpZ2h0OiA3MHB4O1xyXG4gYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuXHJcbi51c2VyLW5hbWUge1xyXG4gZm9udC13ZWlnaHQ6IDYwMDtcclxuIG1hcmdpbjogMTVweCAwIDhweDtcclxufVxyXG5cclxuLnVzZXItbWFpbCB7XHJcbiBjb2xvcjogdmFyKC0tbWFpbi1saWdodC1jb2xvcik7XHJcbiBmb250LXNpemU6IDEycHg7XHJcbiBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4udXNlci1wcm9maWxlIHtcclxuIGRpc3BsYXk6IGZsZXg7XHJcbiBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnNpZGUtd3JhcHBlciB7XHJcbiBwYWRkaW5nOiAyNXB4IDQwcHg7XHJcbiBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcclxuICY6bGFzdC1jaGlsZCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuIH1cclxufVxyXG5cclxuLnVzZXItbm90aWZpY2F0aW9uIHtcclxuIGRpc3BsYXk6IGZsZXg7XHJcbiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gc3ZnIHtcclxuICB3aWR0aDogMzZweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmctY29sb3IpO1xyXG4gIGNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IpO1xyXG4gfVxyXG59XHJcblxyXG4ubm90aWZ5IHtcclxuIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICY6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xyXG4gfVxyXG4gJi5hbGVydCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICY6YmVmb3JlIHtcclxuICAgY29udGVudDogXCIyXCI7XHJcbiAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICBmb250LXdlaWdodDogNzAwO1xyXG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6ICNmZjUzN2I7XHJcbiAgIHdpZHRoOiAxNHB4O1xyXG4gICBoZWlnaHQ6IDE0cHg7XHJcbiAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgdG9wOiAtM3B4O1xyXG4gICBkaXNwbGF5OiBmbGV4O1xyXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgcmlnaHQ6IDBweDtcclxuICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG4gICY6bGFzdC1jaGlsZDpiZWZvcmUge1xyXG4gICBjb250ZW50OiBcIjVcIjtcclxuICB9XHJcbiB9XHJcbn1cclxuXHJcbi5wcm9ncmVzcyB7XHJcbiBtYXJnaW4tdG9wOiA1cHg7XHJcbiBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdlN2VmO1xyXG4gaGVpZ2h0OiA4cHg7XHJcbiBvdmVyZmxvdzogaGlkZGVuO1xyXG4gJi1iYXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1jb2xvcik7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHdpZHRoOiAzNSU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGFuaW1hdGlvbjogcHJvZ3Jlc3NBbmltYXRpb24gNnM7XHJcbiAgdHJhbnNpdGlvbjogMC4zcyBsaW5lYXIgYm90aDtcclxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB3aWR0aCwgYmFja2dyb3VuZC1jb2xvcjtcclxuIH1cclxuICYtc3RhdHVzIHtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBwcm9ncmVzc0FuaW1hdGlvbiB7XHJcbiAwJSB7XHJcbiAgd2lkdGg6IDUlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNhMmI2ZjU7XHJcbiB9XHJcbiAxMDAlIHtcclxuICB3aWR0aDogMzUlO1xyXG4gfVxyXG59XHJcblxyXG4udGFzayB7XHJcbiAmLXN0YXR1cyB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gfVxyXG4gJi1zdGF0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiB9XHJcbiAmLW51bWJlciB7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuIH1cclxuICYtY29uZGl0aW9uIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiB9XHJcbiAmLXRhc2tzIHtcclxuICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6IHZhcigtLW1haW4tbGlnaHQtY29sb3IpO1xyXG4gfVxyXG59XHJcblxyXG4ucHJvamVjdCB7XHJcbiAmLXRpdGxlIHtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcclxuIH1cclxuICYtZGVwYXJ0bWVudCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgcGFkZGluZzogMCAzMHB4O1xyXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBtYXJnaW4tdG9wOiAxNHB4O1xyXG4gICY6YmVmb3JlIHtcclxuICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICBjb250ZW50OiBcIlwiO1xyXG4gICB3aWR0aDogOHB4O1xyXG4gICBoZWlnaHQ6IDhweDtcclxuICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICB0b3A6IDEwO1xyXG4gICBsZWZ0OiAwO1xyXG4gIH1cclxuICAmOm50aC1jaGlsZCgxKTpiZWZvcmUge1xyXG4gICBib3JkZXI6IDNweCBzb2xpZCAjYjM2ZGZiO1xyXG4gIH1cclxuICAmOm50aC1jaGlsZCgyKTpiZWZvcmUge1xyXG4gICBib3JkZXI6IDNweCBzb2xpZCAjNjI1YmU4O1xyXG4gIH1cclxuICAmOm50aC1jaGlsZCgzKTpiZWZvcmUge1xyXG4gICBib3JkZXI6IDNweCBzb2xpZCAjZmVjMjY3O1xyXG4gIH1cclxuICAmOm50aC1jaGlsZCg0KTpiZWZvcmUge1xyXG4gICBib3JkZXI6IDNweCBzb2xpZCAjZmM2Njc5O1xyXG4gIH1cclxuIH1cclxufVxyXG5cclxuLm1lbWJlcnMge1xyXG4gd2lkdGg6IDM2cHg7XHJcbiBoZWlnaHQ6IDM2cHg7XHJcbiBvYmplY3QtZml0OiBjb3ZlcjtcclxuIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLnRlYW0tbWVtYmVyIHtcclxuIGRpc3BsYXk6IGZsZXg7XHJcbiBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5tYWluLWFyZWEge1xyXG4gZGlzcGxheTogZmxleDtcclxuIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiBmbGV4LWdyb3c6IDE7XHJcbiBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuIGhlaWdodDogNzBweDtcclxuIHdpZHRoOiAxMDAlO1xyXG4gYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XHJcbn1cclxuXHJcbi5zZWFyY2gtYmFyIHtcclxuIGhlaWdodDogNzBweDtcclxuIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiBpbnB1dCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogdmFyKC0tYm9keS1jb2xvcik7XHJcbiAgcGFkZGluZzogMCAzNXB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PVVURi04LCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyNCcgaGVpZ2h0PScyNCcgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9JyUyM2ExYTRiOScgc3Ryb2tlLXdpZHRoPSczJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItc2VhcmNoJyUzZSUzY2NpcmNsZSBjeD0nMTEnIGN5PScxMScgcj0nOCcvJTNlJTNjcGF0aCBkPSdNMjEgMjFsLTQuMzUtNC4zNScvJTNlJTNjL3N2ZyUzZVwiKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMThweDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDUwJTtcclxuICBmb250LWZhbWlseTogdmFyKC0tYm9keS1mb250KTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICAmOjpwbGFjZWhvbGRlciB7XHJcbiAgIGNvbG9yOiB2YXIoLS1tYWluLWxpZ2h0LWNvbG9yKTtcclxuICB9XHJcbiB9XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gZGlzcGxheTogZmxleDtcclxuIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiBwYWRkaW5nOiAwIDIwcHggMCAzMHB4O1xyXG59XHJcblxyXG4uaW5ib3gtY2FsZW5kYXIge1xyXG4gbWFyZ2luLXJpZ2h0OiAyMDBweDtcclxufVxyXG5cclxuLmNvbG9yLW1lbnUge1xyXG4gZmxleC1zaHJpbms6IDA7XHJcbn1cclxuXHJcbi5tc2cge1xyXG4gcGFkZGluZzogMzBweDtcclxuIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXVuc2VsZWN0ZWQtbWFpbCk7XHJcbiBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcclxuIGRpc3BsYXk6IGZsZXg7XHJcbiBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gdHJhbnNpdGlvbjogMC40cyBlYXNlO1xyXG4gJi10aXRsZSB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiB9XHJcbiAmLWRhdGUge1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBjb2xvcjogdmFyKC0tbWFpbi1saWdodC1jb2xvcik7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiB9XHJcbn1cclxuXHJcbi5zZWxlY3RlZC1iZyB7XHJcbiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS1iZy1jb2xvcik7XHJcbn1cclxuXHJcbi5tc2ctZGVwYXJ0bWVudCB7XHJcbiBkaXNwbGF5OiBmbGV4O1xyXG4ganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuIHBvc2l0aW9uOiBzdGlja3k7XHJcbiB0b3A6IDA7XHJcbiBsZWZ0OiAwO1xyXG4gei1pbmRleDogMztcclxuIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiBsZXR0ZXItc3BhY2luZzogMC44cHg7XHJcbiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS1iZy1jb2xvcik7XHJcbiBib3JkZXItbGVmdDogNHB4IHNvbGlkICNiMzZkZmI7XHJcbiBzdmcge1xyXG4gIHdpZHRoOiAxMnB4O1xyXG4gfVxyXG59XHJcblxyXG4uaW5ib3gge1xyXG4gb3ZlcmZsb3c6IGF1dG87XHJcblxyXG4gJi1jb250YWluZXIge1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XHJcbiAgd2lkdGg6IDQyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBmbGV4LXNocmluazogMDtcclxuIH1cclxufVxyXG4ubWFpbi1jb250YWluZXIge1xyXG4gZGlzcGxheTogZmxleDtcclxuIGZsZXgtZ3JvdzogMTtcclxuIG92ZXJmbG93OiBoaWRkZW47XHJcbiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbnRhaW5lci1iZyk7XHJcbn1cclxuXHJcbi5tYWlsLW1lbWJlcnMge1xyXG4gd2lkdGg6IDQwcHg7XHJcbiBoZWlnaHQ6IDQwcHg7XHJcbiBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG5cclxuLm1haWwtY2hvaWNlIHtcclxuIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5tYWlsLWNob2ljZSArIGxhYmVsOmJlZm9yZSB7XHJcbiBjb250ZW50OiBcIlwiO1xyXG4gZGlzcGxheTogZmxleDtcclxuIHdpZHRoOiAzNXB4O1xyXG4gaGVpZ2h0OiAzNXB4O1xyXG4gYm9yZGVyOiAycHggc29saWQgdmFyKC0tbWFpbi1saWdodC1jb2xvcik7XHJcbiBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9VVRGLTgsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzIwJyBoZWlnaHQ9JzI4JyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nJTIzYTFhNGI5JyBzdHJva2Utd2lkdGg9JzQnIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1jaGVjayclM2UlM2NwYXRoIGQ9J00yMCA2TDkgMTdsLTUtNScvJTNlJTNjL3N2ZyUzZVwiKTtcclxuIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5tYWlsLWNob2ljZTpjaGVja2VkICsgbGFiZWw6YmVmb3JlIHtcclxuIGJvcmRlci1jb2xvcjogZ3JlZW47XHJcbiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IpO1xyXG4gYm9yZGVyLWNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IpO1xyXG4gYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9VVRGLTgsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzIwJyBoZWlnaHQ9JzI4JyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nJTIzZmZmJyBzdHJva2Utd2lkdGg9JzQnIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1jaGVjayclM2UlM2NwYXRoIGQ9J00yMCA2TDkgMTdsLTUtNScvJTNlJTNjL3N2ZyUzZVwiKTtcclxufVxyXG5cclxuLm1haWwtY2hvaWNlOmNoZWNrZWQgLm1zZyB7XHJcbiBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5hZGQge1xyXG4gJi10YXNrIHtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGhlaWdodDogODBweDtcclxuICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS1iZy1jb2xvcik7XHJcbiAgYW5pbWF0aW9uOiBzbGlkZVVwIC40NXMgLjRzIGJvdGg7XHJcbiB9XHJcbiAmLWJ1dHRvbiB7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICBib3R0b206IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yKTtcclxuICBib3JkZXI6IDA7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDEwcHggMzBweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gfVxyXG59XHJcblxyXG4ubWFpbC1kZXRhaWwge1xyXG4gZGlzcGxheTogZmxleDtcclxuIGFuaW1hdGlvbjogc2xpZGVYIC42cyBib3RoO1xyXG4gZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuIG92ZXJmbG93OiBhdXRvO1xyXG4gYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhlbWUtYmctY29sb3IpO1xyXG4gJi1wcm9maWxlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiB9XHJcbiAmLWhlYWRlciB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XHJcbiAgcGFkZGluZzogMTZweCAzMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiB9XHJcbiAmLW5hbWUge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2xpZGVYIHtcclxuIDAlIHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMDBweCk7XHJcbiB9IFxyXG59XHJcblxyXG4uaW5ib3gtZGV0YWlsIHtcclxuIHdpZHRoOiA0NHB4O1xyXG4gaGVpZ2h0OiA0NHB4O1xyXG59XHJcblxyXG4ubWFpbC1pY29ucyB7XHJcbiBmbGV4LXNocmluazogMDtcclxuIHN2ZyB7XHJcbiAgd2lkdGg6IDQycHg7XHJcbiAgaGVpZ2h0OiA0MnB4O1xyXG4gIHBhZGRpbmc6IDEzcHg7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iZy1jb2xvcik7XHJcbiAgY29sb3I6IHZhcigtLWJ1dHRvbi1jb2xvcik7XHJcbiAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIH1cclxuIH1cclxufVxyXG5cclxuLm1haWwtY29udGVudHMge1xyXG4gcGFkZGluZzogMzBweDtcclxuICYtc3ViamVjdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gfVxyXG4gJi10aXRsZSB7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxuIH1cclxufVxyXG5cclxuLm1haWwge1xyXG4gcGFkZGluZy1sZWZ0OiA1NXB4O1xyXG4gZm9udC1zaXplOiAxNHB4O1xyXG4gY29sb3I6IHZhcigtLW1haW4tbGlnaHQtY29sb3IpO1xyXG4gJi10aW1lIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgc3ZnIHtcclxuICAgd2lkdGg6IDEycHg7XHJcbiAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gIH1cclxuIH1cclxuICYtaW5zaWRlIHtcclxuICBwYWRkaW5nOiAyMHB4IDAgMzBweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcclxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XHJcbiAgbGluZS1oZWlnaHQ6IDEuOGVtO1xyXG4gfVxyXG4gJi1jaGVja2xpc3Qge1xyXG4gIHBhZGRpbmc6IDIwcHggMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XHJcbiAgJiAubWFpbC1jaG9pY2UgKyBsYWJlbDpiZWZvcmUge1xyXG4gICB3aWR0aDogMjBweDtcclxuICAgaGVpZ2h0OiAyMHB4O1xyXG4gICBmbGV4LXNocmluazogMDtcclxuICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG4gICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD1VVEYtOCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTQnIGhlaWdodD0nMTgnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSclMjNmZmYnIHN0cm9rZS13aWR0aD0nNCcgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWNoZWNrJyUzZSUzY3BhdGggZD0nTTIwIDZMOSAxN2wtNS01Jy8lM2UlM2Mvc3ZnJTNlXCIpO1xyXG4gIH1cclxuICBsYWJlbCB7XHJcbiAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgIGNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IpO1xyXG4gICBmb250LXdlaWdodDogNjAwO1xyXG4gICBmb250LXNpemU6IDEzcHg7XHJcbiAgfVxyXG4gICYtZGF0ZSB7XHJcbiAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gICBmb250LXNpemU6IDEzcHg7XHJcbiAgfVxyXG4gfVxyXG59XHJcblxyXG4uYXNzaWduZWUge1xyXG4gZm9udC1zaXplOiAxM3B4O1xyXG4gbWFyZ2luLWJvdHRvbTogMTBweDtcclxuIDpsYXN0LWNoaWxkIHtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gfVxyXG59XHJcblxyXG4ubWFpbC1hc3NpZ24ge1xyXG4gcGFkZGluZzogMjBweCAwO1xyXG4gYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XHJcbn1cclxuXHJcbi5tYWlsLWRvYyB7XHJcbiBkaXNwbGF5OiBmbGV4O1xyXG4gYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuIHBhZGRpbmc6IDMwcHggMDtcclxuIGZsZXgtc2hyaW5rOiAwO1xyXG4ganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gJi1uYW1lIHtcclxuICBjb2xvcjogdmFyKC0tYm9keS1jb2xvcik7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gfVxyXG4gJi1kYXRlIHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiB9XHJcbiAmLXdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBzdmcge1xyXG4gICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iZy1jb2xvcik7XHJcbiAgIGNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IpO1xyXG4gICB3aWR0aDogNTBweDtcclxuICAgcGFkZGluZzogOXB4O1xyXG4gICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgfVxyXG4gfVxyXG4gJi1pY29ucyB7XHJcbiAgc3ZnOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICB9XHJcbiB9XHJcbn1cclxuXHJcbi5tYWlsLXRleHRhcmVhIHtcclxuIGRpc3BsYXk6IGZsZXg7XHJcbiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS11bnNlbGVjdGVkLW1haWwpO1xyXG4gcGFkZGluZzogMzBweCAwO1xyXG4gYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XHJcbiBwb3NpdGlvbjogc3RpY2t5O1xyXG4gYm90dG9tOiAwO1xyXG4ganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gbWFyZ2luLXRvcDogYXV0bztcclxuIGxlZnQ6IDA7XHJcbiBvdmVyZmxvdzogaGlkZGVuO1xyXG4gaGVpZ2h0OiA4MHB4O1xyXG4gZmxleC1zaHJpbms6IDA7XHJcbiBpbnB1dCB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAwIDMwcHg7XHJcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xyXG4gICY6OnBsYWNlaG9sZGVyIHtcclxuICAgY29sb3I6IHZhcigtLW1haW4tbGlnaHQtY29sb3IpO1xyXG4gIH1cclxuIH1cclxufVxyXG5cclxuLnRleHRhcmVhLWljb25zIHtcclxuIGRpc3BsYXk6IGZsZXg7XHJcbiBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYXR0YWNoIHtcclxuIHBhZGRpbmc6IDMwcHg7XHJcbiBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xyXG4gYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xyXG4gc3ZnIHtcclxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XHJcbiB9XHJcbn1cclxuXHJcbi5zZW5kIHtcclxuIHBhZGRpbmc6IDMwcHg7XHJcbiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IpO1xyXG4gc3ZnIHtcclxuICBjb2xvcjogdmFyKC0tdGhlbWUtYmctY29sb3IpO1xyXG4gfVxyXG59XHJcblxyXG4uaW5ib3gtY2FsZW5kYXItY2hlY2tib3gge1xyXG4gcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gd2lkdGg6IDEwMCU7XHJcbiBoZWlnaHQ6IDEwMCU7XHJcbiBwYWRkaW5nOiAwO1xyXG4gbWFyZ2luOiAwO1xyXG4gb3BhY2l0eTogMDtcclxuIHotaW5kZXg6IDM7XHJcbiBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi50b2dnbGUtcGFnZSB7XHJcbiBvdmVyZmxvdzogaGlkZGVuO1xyXG4gei1pbmRleDogMjtcclxufVxyXG5cclxuLmluYm94LWNhbGVuZGFyIHtcclxuIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuIHdpZHRoOiAyMjBweDtcclxuIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiBoZWlnaHQ6IDM2cHg7XHJcbiBkaXNwbGF5OiBmbGV4O1xyXG4gYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuIG92ZXJmbG93OiBoaWRkZW47XHJcbiBmbGV4LXNocmluazogMDtcclxufVxyXG5cclxuLmxheWVyIHtcclxuIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuIHRvcDogMDtcclxuIHJpZ2h0OiAwO1xyXG4gYm90dG9tOiAwO1xyXG4gbGVmdDogMDtcclxuIHdpZHRoOiAxMDAlO1xyXG4gYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdW5zZWxlY3RlZC1tYWlsKTtcclxuIHRyYW5zaXRpb246IDAuM3MgZWFzZSBhbGw7XHJcbiB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4udG9nZ2xlLXBhZ2U6YmVmb3JlLFxyXG4udG9nZ2xlLXBhZ2U6YWZ0ZXIsXHJcbi50b2dnbGUtcGFnZSBzcGFuIHtcclxuIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuIHRvcDogNHB4O1xyXG4gd2lkdGg6IDEwMHB4O1xyXG4gaGVpZ2h0OiAxMHB4O1xyXG4gZm9udC1zaXplOiAxMnB4O1xyXG4gZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiBsaW5lLWhlaWdodDogMTtcclxuIHBhZGRpbmc6IDlweCA0cHg7XHJcbiBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gdHJhbnNpdGlvbjogMC4zcyBlYXNlIGFsbDtcclxufVxyXG5cclxuLnRvZ2dsZS1wYWdlOmJlZm9yZSB7XHJcbiBjb250ZW50OiBcIlwiO1xyXG4gbGVmdDogNHB4O1xyXG4gYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yKTtcclxufVxyXG5cclxuLnRvZ2dsZS1wYWdlIHNwYW4ge1xyXG4gY29sb3I6IHZhcigtLXRoZW1lLWJnLWNvbG9yKTtcclxuIHotaW5kZXg6IDE7XHJcbiBsZWZ0OiA2cHg7XHJcbn1cclxuXHJcbi50b2dnbGUtcGFnZTphZnRlciB7XHJcbiBjb250ZW50OiBcIkNhbGVuZGFyXCI7XHJcbiByaWdodDogNHB4O1xyXG4gY29sb3I6IHZhcigtLW1haW4tbGlnaHQtY29sb3IpO1xyXG59XHJcblxyXG4uaW5ib3gtY2FsZW5kYXItY2hlY2tib3g6Y2hlY2tlZCArIC50b2dnbGUtcGFnZSBzcGFuIHtcclxuIGNvbG9yOiB2YXIoLS1tYWluLWxpZ2h0LWNvbG9yKTtcclxufVxyXG5cclxuLmluYm94LWNhbGVuZGFyLWNoZWNrYm94OmNoZWNrZWQgKyAudG9nZ2xlLXBhZ2U6YmVmb3JlIHtcclxuIGxlZnQ6IDEwOXB4O1xyXG59XHJcblxyXG4uaW5ib3gtY2FsZW5kYXItY2hlY2tib3g6Y2hlY2tlZCArIC50b2dnbGUtcGFnZTphZnRlciB7XHJcbiBjb2xvcjogdmFyKC0tdGhlbWUtYmctY29sb3IpO1xyXG59XHJcblxyXG4vL0NhbGVuZGVyXHJcblxyXG4uY2FsZW5kYXIge1xyXG4gZGlzcGxheTogZ3JpZDtcclxuIHdpZHRoOiAxMDAlO1xyXG4gZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgbWlubWF4KDE5NXB4LCAxZnIpKTtcclxuIGdyaWQtdGVtcGxhdGUtcm93czogNTdweDtcclxuIGdyaWQtYXV0by1yb3dzOiAxMjBweDtcclxuIG92ZXJmbG93OiBhdXRvO1xyXG5cclxuICYtd3JhcHBlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIG1heC13aWR0aDogOTc1cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2FsZW5kYXItYm9yZGVyLWNvbG9yKTtcclxuIH1cclxufVxyXG5cclxuLmRheXMge1xyXG4gZm9udC1zaXplOiAxMnB4O1xyXG4gZm9udC13ZWlnaHQ6IDcwMDtcclxuIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcclxuIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG4gJjpub3QoOm50aC1vZi10eXBlKDduICsgNykpIHtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1jYWxlbmRhci1ib3JkZXItY29sb3IpO1xyXG4gfVxyXG59XHJcblxyXG4uZGF5IHtcclxuIHBhZGRpbmc6IDE1cHg7XHJcbiBvdmVyZmxvdzogaGlkZGVuO1xyXG4gZm9udC13ZWlnaHQ6IDcwMDtcclxuIGZvbnQtc2l6ZTogMTNweDtcclxuIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWNhbGVuZGFyLWJvcmRlci1jb2xvcik7XHJcbiBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tY2FsZW5kYXItYm9yZGVyLWNvbG9yKTtcclxuICY6bnRoLW9mLXR5cGUoN24gKyA3KSB7XHJcbiAgYm9yZGVyLXJpZ2h0OiAwO1xyXG4gfVxyXG4gJi5ub3Qtd29yayB7XHJcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xyXG4gfVxyXG4gJi5wcm9qZWN0LW1hcmtldCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZWFmZDtcclxuICBib3JkZXItbGVmdDogM3B4IHNvbGlkICNiODZkZjc7XHJcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgJjpob3ZlciB7XHJcbiAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcclxuICAgYm9yZGVyOiAwO1xyXG4gICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgIHRvIHRvcCxcclxuICAgICM2NjI1ZGMsXHJcbiAgICAjNzczOWUzLFxyXG4gICAgIzg3NGNlYSxcclxuICAgICM5NjVkZjEsXHJcbiAgICAjYTQ2ZWY4XHJcbiAgICk7XHJcbiAgIGNvbG9yOiAjZmZmO1xyXG4gICBmb250LXNpemU6IDE1cHg7XHJcbiAgIC5wcm9qZWN0LWRldGFpbCB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgJjpiZWZvcmUge1xyXG4gICAgIHRvcDogMnB4O1xyXG4gICAgfVxyXG4gICB9XHJcbiAgIC5ob3Zlci10aXRsZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogOHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxOHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNXB4IDAgM3B4O1xyXG4gICB9XHJcbiAgIC5wb3B1cC1jaGVjayB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgIH1cclxuICB9XHJcbiB9XHJcbiAmLnByb2plY3QtZGVzaWduIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZmZkO1xyXG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzczNmVlYjtcclxuIH1cclxuICYucHJvamVjdC1kZXZlbG9wIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmNmU4O1xyXG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgI2ZmYzI2MztcclxuIH1cclxuICYucHJvamVjdC1maW5hbmNlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVlOWVjO1xyXG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgI2ZmNjQ3YTtcclxuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICY6aG92ZXIge1xyXG4gICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICB0byB0b3AsXHJcbiAgICAjZjcyMjRiLFxyXG4gICAgI2ZhM2Q1ZCxcclxuICAgICNmZDUyNmUsXHJcbiAgICAjZmU2MzdlLFxyXG4gICAgI2ZmNzQ4ZVxyXG4gICApO1xyXG4gICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XHJcbiAgIGJvcmRlcjogMDtcclxuICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICBjb2xvcjogI2ZmZjtcclxuICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAucG9wdXAtY2hlY2sge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgfVxyXG4gICAucHJvamVjdC1kZXRhaWwge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDlweDtcclxuICAgICY6YmVmb3JlIHtcclxuICAgICB0b3A6IDJweDtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2UyODNlO1xyXG4gICAgfVxyXG4gICB9XHJcbiAgIC5ob3Zlci10aXRsZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogOHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxOHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICB9XHJcbiAgfVxyXG4gfVxyXG59XHJcblxyXG4uaG92ZXItdGl0bGUge1xyXG4gZGlzcGxheTogbm9uZTtcclxuIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ucG9wdXAtY2hlY2sge1xyXG4gZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmhpZGUge1xyXG4gZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnByb2plY3QtZGV0YWlsIHtcclxuIGNvbG9yOiAjNzgzY2FlO1xyXG4gZm9udC1zaXplOiAxMHB4O1xyXG4gcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gbWFyZ2luLXRvcDogNXB4O1xyXG4gcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gbGluZS1oZWlnaHQ6IDEuNGVtO1xyXG4gJiArICYge1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuIH1cclxuICY6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogNnB4O1xyXG4gIGhlaWdodDogNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjg2ZGY3O1xyXG4gIHRvcDogNHB4O1xyXG4gIGxlZnQ6IDEwcHg7XHJcbiB9XHJcbiAmLmRlc2lnbiB7XHJcbiAgY29sb3I6ICM0ODQ0YzE7XHJcbiAgJjpiZWZvcmUge1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmY2OWVhO1xyXG4gIH1cclxuIH1cclxuICYuZGV2ZWxvcCB7XHJcbiAgY29sb3I6ICNkZTlkM2E7XHJcbiAgJjpiZWZvcmUge1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjMjYzO1xyXG4gIH1cclxuIH1cclxuICYuZmluYW5jZSB7XHJcbiAgY29sb3I6ICNlODViNmY7XHJcbiAgJjpiZWZvcmUge1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmQ2NjdhO1xyXG4gIH1cclxuIH1cclxufVxyXG5cclxuLndlZWstbW9udGgge1xyXG4gZGlzcGxheTogZmxleDtcclxuIGhlaWdodDogMzBweDtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1idXR0b24tY29sb3IpO1xyXG4gYm9yZGVyLXJhZGl1czogMjVweCAwIDAgMjVweDtcclxuIGNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IpO1xyXG4gcGFkZGluZzogOHB4IDE2cHg7XHJcbiBmb250LXdlaWdodDogNjAwO1xyXG4gZm9udC1mYW1pbHk6IHZhcigtLWJvZHktZm9udCk7XHJcbiBmb250LXNpemU6IDEycHg7XHJcbiBmbGV4LXNocmluazogMDtcclxuIGN1cnNvcjogcG9pbnRlcjtcclxuIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gJi5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1jb2xvcik7XHJcbiAgY29sb3I6IHZhcigtLXRoZW1lLWJnLWNvbG9yKTtcclxuIH1cclxufVxyXG5cclxuLmJ1dHRvbi1tb250aCB7XHJcbiBib3JkZXItcmFkaXVzOiAwIDI1cHggMjVweCAwO1xyXG4gbWFyZ2luLWxlZnQ6IC0ycHg7XHJcbn1cclxuXHJcbi5jYWxlbmRlci10YWIge1xyXG4gZGlzcGxheTogZmxleDtcclxuIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiBtYXgtd2lkdGg6IDk3NXB4O1xyXG4gbWFyZ2luOiAwIGF1dG87XHJcbiB3aWR0aDogMTAwJTtcclxuIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4uY3VycmVudCB7XHJcbiAmLW1vbnRoIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZzogMCAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiB9XHJcbiAmLXllYXIge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiB9XHJcbn1cclxuXHJcbi5tb250aC1jaGFuZ2Uge1xyXG4gZGlzcGxheTogZmxleDtcclxuIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYnV0dG9uLXdlZWtlbmRzLFxyXG4uYnV0dG9uLXRhc2sge1xyXG4gYm9yZGVyLXJhZGl1czogMjVweDtcclxufVxyXG5cclxuLmJ1dHRvbi10YXNrIHtcclxuIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG59XHJcblxyXG4uYnV0dG9uLXdlZWtlbmRzIHtcclxuIGJvcmRlci1jb2xvcjogdmFyKC0tbWFpbi1saWdodC1jb2xvcik7XHJcbiBjb2xvcjogdmFyKC0tbWFpbi1saWdodC1jb2xvcik7XHJcbn1cclxuXHJcbi5jYWxlbmRhci1jb250YWluZXIge1xyXG4gZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuIHdpZHRoOiAxMDAlO1xyXG4gcGFkZGluZzogMzBweCA1MHB4O1xyXG4gb3ZlcmZsb3c6IGF1dG87XHJcbiBkaXNwbGF5OiBub25lO1xyXG4gJi5jYWxlbmRhci1zaG93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gfVxyXG59XHJcblxyXG4uY29sb3ItbWVudSB7XHJcbiBmbGV4LXNocmluazogMDtcclxuIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuIG92ZXJmbG93OiBoaWRkZW47XHJcbiB3aWR0aDogMzJweDtcclxuIGhlaWdodDogMzJweDtcclxuIHN2ZyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDg7XHJcbiAgd2lkdGg6IDE3cHg7XHJcbiAgdG9wOiA3cHg7XHJcbiAgcmlnaHQ6IDhweDtcclxuICBmaWxsOiAjZmZmO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gfVxyXG59XHJcblxyXG4uY29sb3JwaWNrZXIge1xyXG4gYm9yZGVyOiBub25lO1xyXG4gYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gd2lkdGg6IDUwcHg7XHJcbiBoZWlnaHQ6IDU1cHg7XHJcbiB0b3A6IC04cHg7XHJcbiByaWdodDogLThweDtcclxuIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ubXNnLWNvbnRlbnR7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgbWFyZ2luLXRvcDogYXV0bztcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4vLyBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjcwcHgpIHtcclxuLy8gIC5tYWlsLWljb25zIHtcclxuLy8gICBzdmc6bm90KDpmaXJzdC1jaGlsZCkge1xyXG4vLyAgICBkaXNwbGF5OiBub25lO1xyXG4vLyAgIH1cclxuLy8gIH1cclxuLy8gfVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE2MHB4KSB7XHJcbiAuaW5ib3gtY29udGFpbmVyIHtcclxuICB3aWR0aDogMzcwcHg7XHJcbiB9XHJcbiAudXNlci1wcm9maWxlLWFyZWEge1xyXG4gIHdpZHRoOiAzMjBweDtcclxuIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA3MHB4KSB7XHJcblxyXG4gIFxyXG4gLm1haWwtZGV0YWlsLWhlYWRlciAubWFpbC1pY29ucyB7XHJcbiAgc3ZnIHtcclxuICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcclxuIC5pbmJveC1jYWxlbmRhciB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcclxuIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODcwcHgpIHtcclxuLnVzZXItcHJvZmlsZS1hcmVhIHtcclxuIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTMwcHgpIHtcclxuIC5zZWFyY2gtYmFyIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gfVxyXG4gLm1haWwtdGV4dGFyZWEge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gfVxyXG4gLmJ1dHRvbi13ZWVrZW5kcyB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDg1cHgpIHtcclxuIC5tYWlsLWljb25zIHtcclxuICBzdmc6bm90KDpmaXJzdC1jaGlsZCkge1xyXG4gICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuIH1cclxuIC5pbmJveC1jYWxlbmRhciB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gfVxyXG4gLmNhbGVuZGFyLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMzBweCAyMHB4O1xyXG4gfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzBweCkge1xyXG4gLm1haWwtZG9jLWljb25zLCBcclxuIC5tYWlsLWNoZWNrbGlzdC1kYXRlIHsgXHJcbiAgZGlzcGxheTogbm9uZTsgXHJcbiB9XHJcbn1cclxuXHJcbi5hbmltLXkge1xyXG4gYW5pbWF0aW9uOiBzbGlkZVVwIC42cyBib3RoO1xyXG59XHJcblxyXG5AZm9yICRpIGZyb20gMiB0aHJvdWdoIDEwIHtcclxuICAuYW5pbS15Om50aC1jaGlsZCgjeyRpfSkge1xyXG4gICBhbmltYXRpb24tZGVsYXk6ICN7JGkqMC4xNH1zO1xyXG4gIH1cclxufVxyXG4gXHJcblxyXG5Aa2V5ZnJhbWVzIHNsaWRlVXAge1xyXG4gMCUge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg3NnB4KSBzY2FsZSguOTIpO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiB9XHJcbn1cclxuLm1zZy5zZWxlY3RlZC1iZy5hbmltLXl7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cclxufVxyXG5cclxuLnVzZXJfbGlzdHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHVse1xyXG5cclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgfVxyXG59XHJcbi51c2VyX2xpc3RfaW5uZXJ0YXNre1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogI2RkZDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBoZWlnaHQ6IDQzcHhcclxufVxyXG4uZGlzcGxheV9hcm91bmR7XHJcbmRpc3BsYXk6IGZsZXg7XHJcbmp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcbi51c2VyX2V4cHRpb25hbHtcclxuICBtYXJnaW46IDBweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlcjogMHB4O1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4udXNlcl9hY3RpdmV7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzYzA3MDc7XHJcbn1cclxuLm1haWwtZGV0YWlse1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59Il19 */"] });
TaskPreviewDialogComponent.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: TaskPreviewDialogComponent, factory: TaskPreviewDialogComponent.ɵfac });


/***/ }),

/***/ "kOC7":
/*!**********************************************!*\
  !*** ./src/app/confirm/confirm.component.ts ***!
  \**********************************************/
/*! exports provided: ConfirmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmComponent", function() { return ConfirmComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");



class ConfirmComponent {
    constructor() { }
    ngOnInit() {
    }
}
ConfirmComponent.ɵfac = function ConfirmComponent_Factory(t) { return new (t || ConfirmComponent)(); };
ConfirmComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfirmComponent, selectors: [["app-confirm"]], decls: 9, vars: 0, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-button", "", "mat-dialog-close", ""]], template: function ConfirmComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Dialog with elements");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "This dialog showcases the title, close, content and actions elements.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maXJtLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "oEHs":
/*!*********************************************!*\
  !*** ./src/app/login/store/auth.reducer.ts ***!
  \*********************************************/
/*! exports provided: reducer, authReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authReducer", function() { return authReducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "kt0X");
/* harmony import */ var src_app_user_user_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/user/user.module */ "7UCR");
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.actions */ "S0FY");



const initializeState = {
    user: null,
    ErrorMessage: null,
    loading: false
};
const reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initializeState);
function authReducer(state = initializeState, action) {
    switch (action.type) {
        case _auth_actions__WEBPACK_IMPORTED_MODULE_2__["AuthenticatedSucces"]:
            const user = new src_app_user_user_module__WEBPACK_IMPORTED_MODULE_1__["User"](action.payload.userId, action.payload.email, action.payload.token, action.payload.expirationDate);
            console.log(action.payload);
            return Object.assign(Object.assign({}, state), { user: user, loading: false });
        case _auth_actions__WEBPACK_IMPORTED_MODULE_2__["SIGNUP"]:
            const signUpUser = new src_app_user_user_module__WEBPACK_IMPORTED_MODULE_1__["User"](action.payload.userId, action.payload.email, action.payload.token, action.payload.expirationDate);
            console.log(action.payload);
            return Object.assign(Object.assign({}, state), { user: signUpUser, loading: false, ErrorMessage: null });
        case _auth_actions__WEBPACK_IMPORTED_MODULE_2__["LOGOUT"]:
            return Object.assign(Object.assign({}, state), { user: null });
        case _auth_actions__WEBPACK_IMPORTED_MODULE_2__["Sin_Up_start"]:
        case _auth_actions__WEBPACK_IMPORTED_MODULE_2__["login_start"]:
            return Object.assign(Object.assign({}, state), { ErrorMessage: null, loading: true });
        case _auth_actions__WEBPACK_IMPORTED_MODULE_2__["AuthenticatedFAILD"]:
            console.log(action.payload);
            return Object.assign(Object.assign({}, state), { user: null, ErrorMessage: action.payload, loading: false });
    }
    return state;
}


/***/ }),

/***/ "ogha":
/*!*********************************************!*\
  !*** ./src/app/tasks/store/Task.service.ts ***!
  \*********************************************/
/*! exports provided: UserTaskLists */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserTaskLists", function() { return UserTaskLists; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class UserTaskLists {
    constructor() {
        this.tasks = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.tasksList = [];
    }
    addusers(user) {
        this.tasksList.push(user);
        this.tasks.next(this.tasksList.slice());
    }
    getusers() {
        return this.tasksList;
    }
    getUser(i) {
        return this.tasksList[i];
    }
    deleteUSer(i) {
        this.tasksList.splice(i, 1);
        this.tasks.next(this.tasksList.slice());
    }
    addInnerTask(i, task) {
        this.tasksList[i].tasks.push(task);
        this.tasks.next(this.tasksList);
    }
    DeleteinnerTask(taskIndex, i) {
        this.tasksList[taskIndex].tasks.splice(i, 1);
        this.tasks.next(this.tasksList);
    }
    getInnerTask(taskIndex, innerIndex) {
        return this.tasksList[taskIndex].tasks[innerIndex];
    }
    editInnerTask(user, i, task) {
        this.tasksList[user].tasks[i] = task;
        this.tasks.next(this.tasksList);
    }
}
UserTaskLists.ɵfac = function UserTaskLists_Factory(t) { return new (t || UserTaskLists)(); };
UserTaskLists.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UserTaskLists, factory: UserTaskLists.ɵfac, providedIn: "root" });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: () => __webpack_require__.e(/*! import() | home-home-module */ "home-home-module").then(__webpack_require__.bind(null, /*! ./home/home.module */ "ct+p")).then(m => m.HomeModule) },
    { path: 'tasks', loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./tasks/tasks.module */ "S1vP")).then(m => m.TaskModule) },
    { path: 'login', loadChildren: () => __webpack_require__.e(/*! import() | login-login-module */ "login-login-module").then(__webpack_require__.bind(null, /*! ./login/login.module */ "X3zk")).then(m => m.LoginModule) },
    { path: 'note', loadChildren: () => __webpack_require__.e(/*! import() | note-note-module */ "note-note-module").then(__webpack_require__.bind(null, /*! ./note/note.module */ "4D6J")).then(m => m.NoteModule) },
    { path: 'userPage', loadChildren: () => __webpack_require__.e(/*! import() | user-page-uerPage-module */ "user-page-uerPage-module").then(__webpack_require__.bind(null, /*! ./user-page/uerPage.module */ "vwvB")).then(m => m.UserPageModule) },
    { path: 'weatherPage', loadChildren: () => __webpack_require__.e(/*! import() | weather-app-weatherpage-module */ "weather-app-weatherpage-module").then(__webpack_require__.bind(null, /*! ./weather-app/weatherpage.module */ "Oliy")).then(m => m.WeatherModule) },
    { path: 'userTask', loadChildren: () => __webpack_require__.e(/*! import() | user-tasks-user-tasks-module */ "user-tasks-user-tasks-module").then(__webpack_require__.bind(null, /*! ./user-tasks/user-tasks.module */ "OHid")).then(m => m.UserTasksModule) }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "y0fk":
/*!********************************************!*\
  !*** ./src/app/tasks/store/Task.Action.ts ***!
  \********************************************/
/*! exports provided: ADD_USERS, Add_Task, Add_Tasks, Updated_Item, Deleted_Item, StartEdit, stopEdit, getter, ADD_INNER, TITLEEDIT, ActiveProject, DESCRIPTIONEDIT, PIORTYEDIT, TASKTYPEDIT, SCEdit, PROGRESS_VALUE, setGroupOwner, TAGS, DELETETAG, store_Tasks, AddTask, AddTasks, StoreTasks, UpdatedItem, Deleting, StartEditing, StopEdit, get, AddInnerTasks, AddUsers, TitleEdit, Activate, DescriptionEdit, PiortyEdit, TaskType, Schedit, ProgressVAlue, Tags, deleteTag, GroupAndOwner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_USERS", function() { return ADD_USERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Add_Task", function() { return Add_Task; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Add_Tasks", function() { return Add_Tasks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Updated_Item", function() { return Updated_Item; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Deleted_Item", function() { return Deleted_Item; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartEdit", function() { return StartEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopEdit", function() { return stopEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getter", function() { return getter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_INNER", function() { return ADD_INNER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TITLEEDIT", function() { return TITLEEDIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveProject", function() { return ActiveProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DESCRIPTIONEDIT", function() { return DESCRIPTIONEDIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PIORTYEDIT", function() { return PIORTYEDIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TASKTYPEDIT", function() { return TASKTYPEDIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCEdit", function() { return SCEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROGRESS_VALUE", function() { return PROGRESS_VALUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setGroupOwner", function() { return setGroupOwner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAGS", function() { return TAGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETETAG", function() { return DELETETAG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store_Tasks", function() { return store_Tasks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTask", function() { return AddTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTasks", function() { return AddTasks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreTasks", function() { return StoreTasks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatedItem", function() { return UpdatedItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Deleting", function() { return Deleting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartEditing", function() { return StartEditing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StopEdit", function() { return StopEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddInnerTasks", function() { return AddInnerTasks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUsers", function() { return AddUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleEdit", function() { return TitleEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Activate", function() { return Activate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescriptionEdit", function() { return DescriptionEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PiortyEdit", function() { return PiortyEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskType", function() { return TaskType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Schedit", function() { return Schedit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressVAlue", function() { return ProgressVAlue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tags", function() { return Tags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteTag", function() { return deleteTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupAndOwner", function() { return GroupAndOwner; });
const ADD_USERS = '[tasks] ADD_USERS';
const Add_Task = "[tasks] Add_Task";
const Add_Tasks = "[tasks] Add_Tasks";
const Updated_Item = "[tasks] Updated_item";
const Deleted_Item = "[tasks] Deleted_Item";
const StartEdit = '[tasks] StartEdit';
const stopEdit = '[tasks] StopEdit';
const getter = '[tasks] getter';
const ADD_INNER = '[tasks] addinner';
const TITLEEDIT = "[tasks] TITLEEDIT";
const ActiveProject = '[tasks] ActiveProject';
const DESCRIPTIONEDIT = "[tasks] DESCRIPTIONEDIT";
const PIORTYEDIT = "[tasks] PIORTYEDIT";
const TASKTYPEDIT = "[tasks] TASKTYPEDIT";
const SCEdit = "[tasks] SCEDIT";
const PROGRESS_VALUE = "[tasks] PROGRESS";
const setGroupOwner = " [tasks] setGroupOwner";
const TAGS = " [tasks] TAGS";
const DELETETAG = " [tasks] DELETETAGS";
const store_Tasks = " [tasks] store_Tasks";
class AddTask {
    constructor(
    //recieve ingredient 
    payload) {
        this.payload = payload;
        this.type = Add_Task;
    }
}
class AddTasks {
    constructor(payload) {
        this.payload = payload;
        this.type = Add_Tasks;
    }
}
class StoreTasks {
    constructor() {
        this.type = store_Tasks;
    }
}
class UpdatedItem {
    constructor(payload) {
        this.payload = payload;
        this.type = Updated_Item;
    }
}
class Deleting {
    constructor(payload) {
        this.payload = payload;
        this.type = Deleted_Item;
    }
}
class StartEditing {
    constructor(payload) {
        this.payload = payload;
        this.type = StartEdit;
    }
}
class StopEdit {
    constructor() {
        this.type = stopEdit;
    }
}
class get {
    constructor(payload) {
        this.payload = payload;
        this.type = getter;
    }
}
class AddInnerTasks {
    constructor(payload) {
        this.payload = payload;
        this.type = ADD_INNER;
        console.log(payload);
    }
}
// adding users 
class AddUsers {
    constructor(payload) {
        this.payload = payload;
        this.type = ADD_USERS;
        console.log(payload);
    }
}
//add single edit
class TitleEdit {
    constructor(payload) {
        this.payload = payload;
        this.type = TITLEEDIT;
    }
}
class Activate {
    constructor(payload) {
        this.payload = payload;
        this.type = ActiveProject;
        console.log(payload);
    }
}
class DescriptionEdit {
    constructor(payload) {
        this.payload = payload;
        this.type = DESCRIPTIONEDIT;
    }
}
class PiortyEdit {
    constructor(payload) {
        this.payload = payload;
        this.type = PIORTYEDIT;
    }
}
class TaskType {
    constructor(payload) {
        this.payload = payload;
        this.type = TASKTYPEDIT;
    }
}
class Schedit {
    constructor(payload) {
        this.payload = payload;
        this.type = SCEdit;
    }
}
class ProgressVAlue {
    constructor(payload) {
        this.payload = payload;
        this.type = PROGRESS_VALUE;
    }
}
class Tags {
    constructor(payload) {
        this.payload = payload;
        this.type = TAGS;
        console.log(payload);
    }
}
class deleteTag {
    constructor(payload) {
        this.payload = payload;
        this.type = DELETETAG;
        console.log(payload);
    }
}
class GroupAndOwner {
    constructor(payload) {
        this.payload = payload;
        this.type = setGroupOwner;
    }
}


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map