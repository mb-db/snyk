(window.webpackJsonp = window.webpackJsonp || []).push([
    [18], {
        "f+ep": function(l, n, e) {
            "use strict";
            e.r(n), e.d(n, "LoginModuleNgFactory", (function() {
                return M
            }));
            var t = e("CcnG"),
                o = function() {
                    return function() {}
                }(),
                u = e("pMnS"),
                r = e("jvCn"),
                i = e("miAi"),
                a = e("gIcY"),
                s = e("ZYCi"),
                d = e("Ip0R"),
                p = e("IYfF"),
                g = e("kl1M"),
                c = e("wmB8"),
                m = e("AwSQ"),
                f = e("Kp5Z"),
                h = e("AytR"),
                v = function() {
                    function l(l, n, e, t, o) {
                        this.router = l, this.authService = n, this.dataService = e, this.route = t, this.spinner = o, this.showBouncer = !1, this.user = new g.a, this.errMsg = ""
                    }
                    return l.prototype.ngOnInit = function() {
                        null != this.route.snapshot.queryParamMap.get("sguid") && null != this.route.snapshot.queryParamMap.get("sguid") && null != this.route.snapshot.queryParamMap.get("token") && null != this.route.snapshot.queryParamMap.get("token") ? (this.showBouncer = !1, this.user.sguid = this.route.snapshot.queryParamMap.get("sguid"), this.singleToken = this.route.snapshot.queryParamMap.get("token"), localStorage.setItem("apollo_jwt_token", this.singleToken), localStorage.setItem("apollo_userSk", "000"), this.login("")) : (this.showBouncer = !0, this.errMsg = "", null != this.dataService.getMsg() && null != this.dataService.getMsg() && (this.errMsg = this.dataService.getMsg()))
                    }, l.prototype.login = function(l) {
                        var n = this;
                        if ("NORMAL" === l) {
                            if (this.errMsg = "", null == this.userId || "" === this.userId.trim()) return void(this.errMsg = f.a.USERIDREQUIRE);
                            if (null == this.password || "" === this.password.trim()) return void(this.errMsg = f.a.PWDREQUIRE);
                            this.spinner.show("loginSpinner"), this.user.userId = this.userId.toLocaleLowerCase(), this.user.password = c.a.init(this.user.userId + this.password)
                        }
                        "SIMS" === l ? (window.location.href = "" + h.a.simsLoginEndpoint, event.preventDefault()) : (console.log(this.user), this.sub = this.authService.login(this.user).subscribe((function(l) {
                            console.log(l), l && "OK" === l.message ? (n.initCred(l), n.errMsg = "", n.router.navigate(["/shipment"], {
                                preserveFragment: !0,
                                replaceUrl: !0
                            }), n.spinner.hide("loginSpinner")) : (console.log("else..." + l), n.spinner.hide("loginSpinner"), n.errMsg = l.message)
                        }), (function(l) {
                            n.spinner.hide("loginSpinner"), console.log(l)
                        })))
                    }, l.prototype.initCred = function(l) {
                        localStorage.setItem("sguid", l.sguid), localStorage.setItem("authType", l.authType), localStorage.setItem("apollo_userId", l.userId), localStorage.setItem("apollo_userSk", l.userSk), localStorage.setItem("apollo_jwt_token", l.token), localStorage.setItem("apollo_customers", JSON.stringify(l.customers)), localStorage.setItem("apollo_bulletinBoard", l.bulletinBoard)
                    }, l.prototype.forgetPwd = function() {
                        this.router.navigate(["/forgetpassword"])
                    }, l.prototype.ngOnDestroy = function() {
                        this.sub && this.sub.unsubscribe()
                    }, l
                }(),
                b = t["\u0275crt"]({
                    encapsulation: 2,
                    styles: [
                        ["body,html{height:100%}.full-page-wrapper{min-height:100vh;padding-left:0;padding-right:0}.auth{min-height:100vh}.auth.auth-bg-1{background:url(login_background2.02db047257348b5f6cf0.jpg);background-size:cover}.auth.theme-one .auto-form-wrapper{background:#fff;padding:40px 40px 10px;border-radius:4px;box-shadow:0 -25px 37.7px 11.3px rgba(8,143,220,.07)}.auth.theme-one .auto-form-wrapper .form-group .input-group{height:44px}.auth.theme-one .auto-form-wrapper .form-group .input-group .form-control:focus{border-right:none;border-color:#cfd5db}.auth.theme-one .auto-form-wrapper .form-group .input-group .input-group-append .input-group-text{border-radius:0 6px 6px 0;border-left:none;border-color:#cfd5db;color:#b6b6b6}.auth.theme-one .auto-form-wrapper .form-group .submit-btn{font-family:Calibri,Candara,Segoe,Segoe UI,Optima,Arial,sans-serif;font-size:13px;padding:12px 8px;font-weight:600}.auth.theme-one .auto-form-wrapper .g-login{border:1px solid #dee2e6;padding:13px;font-size:12px;font-weight:600;background:transparent}.auth.theme-one .auth-footer{list-style-type:none;padding-left:0;margin-top:20px;margin-bottom:10px;display:flex;justify-content:center}.auth.theme-one .auth-footer li{margin-right:10px;line-height:1;padding-right:10px;border-right:1px solid hsla(0,0%,100%,.4)}.auth.theme-one .auth-footer li:last-child{margin-right:0;border-right:none}.auth.theme-one .auth-footer li a{font-size:13px;color:hsla(0,0%,100%,.4)}@media (max-width:576px){.auth.theme-one .auth-footer{justify-content:center}}.auth.theme-one .footer-text{color:hsla(0,0%,100%,.4)}.container-scroller .form-control{display:inline-block;border:1px solid #dee2e6;font-family:Calibri,Candara,Segoe,Segoe UI,Optima,Arial,sans-serif;font-size:1rem;color:#212529;padding:0 .75rem;line-height:14px;font-weight:500}.input-group{position:relative;display:flex;flex-wrap:wrap;align-items:stretch;width:100%}.auth.theme-one .auto-form-wrapper .form-group .input-group .form-control{border:1px solid #cfd5db;height:44px;line-height:4px;display:inline-block;padding-top:0;padding-bottom:0}.auth.theme-one .auto-form-wrapper .form-group .input-group .input-group-append{border-left:none}.input-group-append,.input-group-prepend{background:#fff;color:#6c757d;width:auto;border:none}.input-group-append{margin-left:-1px}.input-group-append .input-group-text,.input-group-prepend .input-group-text{background:transparent;border-color:#dee2e6}.input-group-text{display:flex;align-items:center;padding:.56rem 1.375rem;margin-bottom:0;font-size:.75rem;font-weight:400;line-height:1;color:#495057;text-align:center;white-space:nowrap;background-color:#e9ecef;border:1px solid #ced4da;border-radius:2px}.btn-primary{background-color:#167d86!important;border-color:#167d86!important}body .ui-growl{top:15%;left:40%}body .ui-widget{font-size:1em}"]
                    ],
                    data: {
                        animation: [{
                            type: 7,
                            name: "routerTransition",
                            definitions: [{
                                type: 0,
                                name: "void",
                                styles: {
                                    type: 6,
                                    styles: {},
                                    offset: null
                                },
                                options: void 0
                            }, {
                                type: 0,
                                name: "*",
                                styles: {
                                    type: 6,
                                    styles: {},
                                    offset: null
                                },
                                options: void 0
                            }, {
                                type: 1,
                                expr: ":enter",
                                animation: [{
                                    type: 6,
                                    styles: {
                                        transform: "translateY(100%)"
                                    },
                                    offset: null
                                }, {
                                    type: 4,
                                    styles: {
                                        type: 6,
                                        styles: {
                                            transform: "translateY(0%)"
                                        },
                                        offset: null
                                    },
                                    timings: "0.5s ease-in-out"
                                }],
                                options: null
                            }, {
                                type: 1,
                                expr: ":leave",
                                animation: [{
                                    type: 6,
                                    styles: {
                                        transform: "translateY(0%)"
                                    },
                                    offset: null
                                }, {
                                    type: 4,
                                    styles: {
                                        type: 6,
                                        styles: {
                                            transform: "translateY(-100%)"
                                        },
                                        offset: null
                                    },
                                    timings: "0.5s ease-in-out"
                                }],
                                options: null
                            }],
                            options: {}
                        }]
                    }
                });

            function y(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 49, "div", [
                    ["class", "container-scroller"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](1, 0, null, null, 48, "div", [
                    ["class", "container-fluid page-body-wrapper full-page-wrapper"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](2, 0, null, null, 3, "ngx-spinner", [
                    ["bdColor", "rgba(0, 0, 0, 0.60)"],
                    ["color", "#fff"],
                    ["name", "loginSpinner"],
                    ["size", "medium"],
                    ["type", "line-spin-clockwise-fade"]
                ], null, null, null, r.b, r.a)), t["\u0275did"](3, 770048, null, 0, i.a, [i.c, t.ChangeDetectorRef], {
                    bdColor: [0, "bdColor"],
                    size: [1, "size"],
                    color: [2, "color"],
                    type: [3, "type"],
                    fullScreen: [4, "fullScreen"],
                    name: [5, "name"]
                }, null), (l()(), t["\u0275eld"](4, 0, null, 0, 1, "p", [
                    ["style", "color: white"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, [" Loading... "])), (l()(), t["\u0275eld"](6, 0, null, null, 43, "div", [
                    ["class", "content-wrapper d-flex align-items-center auth auth-bg-1 theme-one"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](7, 0, null, null, 42, "div", [
                    ["class", "row w-100"],
                    ["style", "margin-right:0px;margin-left:0px"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](8, 0, null, null, 41, "div", [
                    ["class", "col-lg-4 mx-auto"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](9, 0, null, null, 40, "div", [
                    ["class", "auto-form-wrapper"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](10, 0, null, null, 39, "form", [
                    ["action", "#"],
                    ["novalidate", ""]
                ], [
                    [2, "ng-untouched", null],
                    [2, "ng-touched", null],
                    [2, "ng-pristine", null],
                    [2, "ng-dirty", null],
                    [2, "ng-valid", null],
                    [2, "ng-invalid", null],
                    [2, "ng-pending", null]
                ], [
                    [null, "submit"],
                    [null, "reset"]
                ], (function(l, n, e) {
                    var o = !0;
                    return "submit" === n && (o = !1 !== t["\u0275nov"](l, 12).onSubmit(e) && o), "reset" === n && (o = !1 !== t["\u0275nov"](l, 12).onReset() && o), o
                }), null, null)), t["\u0275did"](11, 16384, null, 0, a["\u0275angular_packages_forms_forms_y"], [], null, null), t["\u0275did"](12, 4210688, null, 0, a.NgForm, [
                    [8, null],
                    [8, null]
                ], null, null), t["\u0275prd"](2048, null, a.ControlContainer, null, [a.NgForm]), t["\u0275did"](14, 16384, null, 0, a.NgControlStatusGroup, [
                    [4, a.ControlContainer]
                ], null, null), (l()(), t["\u0275eld"](15, 0, null, null, 9, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](16, 0, null, null, 1, "label", [
                    ["class", "label"],
                    ["style", "margin-left: 6rem;color: red;font-size: 0.8rem;"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](17, null, ["", ""])), (l()(), t["\u0275eld"](18, 0, null, null, 6, "div", [
                    ["class", "input-group"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](19, 0, null, null, 5, "input", [
                    ["class", "form-control"],
                    ["name", "userId"],
                    ["placeholder", "userId*"],
                    ["type", "text"]
                ], [
                    [2, "ng-untouched", null],
                    [2, "ng-touched", null],
                    [2, "ng-pristine", null],
                    [2, "ng-dirty", null],
                    [2, "ng-valid", null],
                    [2, "ng-invalid", null],
                    [2, "ng-pending", null]
                ], [
                    [null, "ngModelChange"],
                    [null, "keyup.enter"],
                    [null, "input"],
                    [null, "blur"],
                    [null, "compositionstart"],
                    [null, "compositionend"]
                ], (function(l, n, e) {
                    var o = !0,
                        u = l.component;
                    return "input" === n && (o = !1 !== t["\u0275nov"](l, 20)._handleInput(e.target.value) && o), "blur" === n && (o = !1 !== t["\u0275nov"](l, 20).onTouched() && o), "compositionstart" === n && (o = !1 !== t["\u0275nov"](l, 20)._compositionStart() && o), "compositionend" === n && (o = !1 !== t["\u0275nov"](l, 20)._compositionEnd(e.target.value) && o), "ngModelChange" === n && (o = !1 !== (u.userId = e) && o), "keyup.enter" === n && (o = !1 !== u.login() && o), o
                }), null, null)), t["\u0275did"](20, 16384, null, 0, a.DefaultValueAccessor, [t.Renderer2, t.ElementRef, [2, a.COMPOSITION_BUFFER_MODE]], null, null), t["\u0275prd"](1024, null, a.NG_VALUE_ACCESSOR, (function(l) {
                    return [l]
                }), [a.DefaultValueAccessor]), t["\u0275did"](22, 671744, null, 0, a.NgModel, [
                    [2, a.ControlContainer],
                    [8, null],
                    [8, null],
                    [6, a.NG_VALUE_ACCESSOR]
                ], {
                    name: [0, "name"],
                    model: [1, "model"]
                }, {
                    update: "ngModelChange"
                }), t["\u0275prd"](2048, null, a.NgControl, null, [a.NgModel]), t["\u0275did"](24, 16384, null, 0, a.NgControlStatus, [
                    [4, a.NgControl]
                ], null, null), (l()(), t["\u0275eld"](25, 0, null, null, 7, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](26, 0, null, null, 6, "div", [
                    ["class", "input-group"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](27, 0, null, null, 5, "input", [
                    ["class", "form-control"],
                    ["name", "password"],
                    ["placeholder", "password*"],
                    ["type", "password"]
                ], [
                    [2, "ng-untouched", null],
                    [2, "ng-touched", null],
                    [2, "ng-pristine", null],
                    [2, "ng-dirty", null],
                    [2, "ng-valid", null],
                    [2, "ng-invalid", null],
                    [2, "ng-pending", null]
                ], [
                    [null, "ngModelChange"],
                    [null, "keyup.enter"],
                    [null, "input"],
                    [null, "blur"],
                    [null, "compositionstart"],
                    [null, "compositionend"]
                ], (function(l, n, e) {
                    var o = !0,
                        u = l.component;
                    return "input" === n && (o = !1 !== t["\u0275nov"](l, 28)._handleInput(e.target.value) && o), "blur" === n && (o = !1 !== t["\u0275nov"](l, 28).onTouched() && o), "compositionstart" === n && (o = !1 !== t["\u0275nov"](l, 28)._compositionStart() && o), "compositionend" === n && (o = !1 !== t["\u0275nov"](l, 28)._compositionEnd(e.target.value) && o), "ngModelChange" === n && (o = !1 !== (u.password = e) && o), "keyup.enter" === n && (o = !1 !== u.login() && o), o
                }), null, null)), t["\u0275did"](28, 16384, null, 0, a.DefaultValueAccessor, [t.Renderer2, t.ElementRef, [2, a.COMPOSITION_BUFFER_MODE]], null, null), t["\u0275prd"](1024, null, a.NG_VALUE_ACCESSOR, (function(l) {
                    return [l]
                }), [a.DefaultValueAccessor]), t["\u0275did"](30, 671744, null, 0, a.NgModel, [
                    [2, a.ControlContainer],
                    [8, null],
                    [8, null],
                    [6, a.NG_VALUE_ACCESSOR]
                ], {
                    name: [0, "name"],
                    model: [1, "model"]
                }, {
                    update: "ngModelChange"
                }), t["\u0275prd"](2048, null, a.NgControl, null, [a.NgModel]), t["\u0275did"](32, 16384, null, 0, a.NgControlStatus, [
                    [4, a.NgControl]
                ], null, null), (l()(), t["\u0275eld"](33, 0, null, null, 2, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](34, 0, null, null, 1, "button", [
                    ["class", "btn btn-primary submit-btn btn-block"]
                ], null, [
                    [null, "click"]
                ], (function(l, n, e) {
                    var t = !0;
                    return "click" === n && (t = !1 !== l.component.login("NORMAL") && t), t
                }), null, null)), (l()(), t["\u0275ted"](-1, null, [" Login "])), (l()(), t["\u0275eld"](36, 0, null, null, 4, "div", [
                    ["class", "text-block text-center my-3"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](37, 0, null, null, 0, "span", [
                    ["class", "text-small font-weight-semibold"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](38, 0, null, null, 2, "a", [
                    ["class", "text-black text-small"],
                    ["routerLink", "/quicktrack"],
                    ["style", "font-weight: 800;"],
                    ["target", "_blank"]
                ], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], (function(l, n, e) {
                    var o = !0;
                    return "click" === n && (o = !1 !== t["\u0275nov"](l, 39).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && o), o
                }), null, null)), t["\u0275did"](39, 671744, null, 0, s.RouterLinkWithHref, [s.Router, s.ActivatedRoute, d.LocationStrategy], {
                    target: [0, "target"],
                    routerLink: [1, "routerLink"]
                }, null), (l()(), t["\u0275ted"](-1, null, ["Quick Tracking by Reference No"])), (l()(), t["\u0275eld"](41, 0, null, null, 3, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](42, 0, null, null, 2, "button", [
                    ["class", "btn btn-block g-login"]
                ], null, [
                    [null, "click"]
                ], (function(l, n, e) {
                    var t = !0;
                    return "click" === n && (t = !1 !== l.component.login("SIMS") && t), t
                }), null, null)), (l()(), t["\u0275eld"](43, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["class", "mr-3"],
                    ["src", "assets/images/sims_login.png"],
                    ["style", "height: 20px;"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["Log in with SIMS"])), (l()(), t["\u0275eld"](45, 0, null, null, 4, "div", [
                    ["class", "text-block text-center my-3"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](46, 0, null, null, 0, "span", [
                    ["class", "text-small font-weight-semibold"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](47, 0, null, null, 2, "a", [
                    ["class", "text-small forgot-password text-black"],
                    ["routerLink", "/forgetpassword"],
                    ["style", "font-weight: 800;"],
                    ["target", "_blank"]
                ], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], (function(l, n, e) {
                    var o = !0;
                    return "click" === n && (o = !1 !== t["\u0275nov"](l, 48).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && o), o
                }), null, null)), t["\u0275did"](48, 671744, null, 0, s.RouterLinkWithHref, [s.Router, s.ActivatedRoute, d.LocationStrategy], {
                    target: [0, "target"],
                    routerLink: [1, "routerLink"]
                }, null), (l()(), t["\u0275ted"](-1, null, ["Forgot Password"]))], (function(l, n) {
                    var e = n.component;
                    l(n, 3, 0, "rgba(0, 0, 0, 0.60)", "medium", "#fff", "line-spin-clockwise-fade", !0, "loginSpinner"), l(n, 22, 0, "userId", e.userId), l(n, 30, 0, "password", e.password), l(n, 39, 0, "_blank", "/quicktrack"), l(n, 48, 0, "_blank", "/forgetpassword")
                }), (function(l, n) {
                    var e = n.component;
                    l(n, 10, 0, t["\u0275nov"](n, 14).ngClassUntouched, t["\u0275nov"](n, 14).ngClassTouched, t["\u0275nov"](n, 14).ngClassPristine, t["\u0275nov"](n, 14).ngClassDirty, t["\u0275nov"](n, 14).ngClassValid, t["\u0275nov"](n, 14).ngClassInvalid, t["\u0275nov"](n, 14).ngClassPending), l(n, 17, 0, e.errMsg), l(n, 19, 0, t["\u0275nov"](n, 24).ngClassUntouched, t["\u0275nov"](n, 24).ngClassTouched, t["\u0275nov"](n, 24).ngClassPristine, t["\u0275nov"](n, 24).ngClassDirty, t["\u0275nov"](n, 24).ngClassValid, t["\u0275nov"](n, 24).ngClassInvalid, t["\u0275nov"](n, 24).ngClassPending), l(n, 27, 0, t["\u0275nov"](n, 32).ngClassUntouched, t["\u0275nov"](n, 32).ngClassTouched, t["\u0275nov"](n, 32).ngClassPristine, t["\u0275nov"](n, 32).ngClassDirty, t["\u0275nov"](n, 32).ngClassValid, t["\u0275nov"](n, 32).ngClassInvalid, t["\u0275nov"](n, 32).ngClassPending), l(n, 38, 0, t["\u0275nov"](n, 39).target, t["\u0275nov"](n, 39).href), l(n, 47, 0, t["\u0275nov"](n, 48).target, t["\u0275nov"](n, 48).href)
                }))
            }

            function C(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275and"](16777216, null, null, 1, null, y)), t["\u0275did"](1, 16384, null, 0, d.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null)], (function(l, n) {
                    l(n, 1, 0, n.component.showBouncer)
                }), null)
            }

            function w(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 1, "app-login", [], null, null, null, C, b)), t["\u0275did"](1, 245760, null, 0, v, [s.Router, p.a, m.a, s.ActivatedRoute, i.c], null, null)], (function(l, n) {
                    l(n, 1, 0)
                }), null)
            }
            var k = t["\u0275ccf"]("app-login", v, w, {}, {}, []),
                x = e("9AJC"),
                S = e("4GxJ"),
                _ = function() {
                    return function() {}
                }(),
                M = t["\u0275cmf"](o, [], (function(l) {
                    return t["\u0275mod"]([t["\u0275mpd"](512, t.ComponentFactoryResolver, t["\u0275CodegenComponentFactoryResolver"], [
                        [8, [u.a, k, x.a, x.b, x.f, x.g, x.c, x.d, x.e]],
                        [3, t.ComponentFactoryResolver], t.NgModuleRef
                    ]), t["\u0275mpd"](4608, d.NgLocalization, d.NgLocaleLocalization, [t.LOCALE_ID]), t["\u0275mpd"](4608, a["\u0275angular_packages_forms_forms_n"], a["\u0275angular_packages_forms_forms_n"], []), t["\u0275mpd"](4608, S.v, S.v, [t.ComponentFactoryResolver, t.Injector, S.jb, S.w]), t["\u0275mpd"](1073742336, d.CommonModule, d.CommonModule, []), t["\u0275mpd"](1073742336, s.RouterModule, s.RouterModule, [
                        [2, s["\u0275angular_packages_router_router_a"]],
                        [2, s.Router]
                    ]), t["\u0275mpd"](1073742336, _, _, []), t["\u0275mpd"](1073742336, a["\u0275angular_packages_forms_forms_d"], a["\u0275angular_packages_forms_forms_d"], []), t["\u0275mpd"](1073742336, a.FormsModule, a.FormsModule, []), t["\u0275mpd"](1073742336, S.c, S.c, []), t["\u0275mpd"](1073742336, S.f, S.f, []), t["\u0275mpd"](1073742336, S.g, S.g, []), t["\u0275mpd"](1073742336, S.k, S.k, []), t["\u0275mpd"](1073742336, S.l, S.l, []), t["\u0275mpd"](1073742336, S.r, S.r, []), t["\u0275mpd"](1073742336, S.t, S.t, []), t["\u0275mpd"](1073742336, S.x, S.x, []), t["\u0275mpd"](1073742336, S.z, S.z, []), t["\u0275mpd"](1073742336, S.D, S.D, []), t["\u0275mpd"](1073742336, S.G, S.G, []), t["\u0275mpd"](1073742336, S.J, S.J, []), t["\u0275mpd"](1073742336, S.M, S.M, []), t["\u0275mpd"](1073742336, S.U, S.U, []), t["\u0275mpd"](1073742336, S.X, S.X, []), t["\u0275mpd"](1073742336, S.Y, S.Y, []), t["\u0275mpd"](1073742336, S.Z, S.Z, []), t["\u0275mpd"](1073742336, S.P, S.P, []), t["\u0275mpd"](1073742336, S.y, S.y, []), t["\u0275mpd"](1073742336, i.b, i.b, []), t["\u0275mpd"](1073742336, o, o, []), t["\u0275mpd"](1024, s.ROUTES, (function() {
                        return [
                            [{
                                path: "",
                                component: v
                            }]
                        ]
                    }), [])])
                }))
        }
    }
]);