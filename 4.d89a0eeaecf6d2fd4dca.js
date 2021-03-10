(window.webpackJsonp = window.webpackJsonp || []).push([
    [4], {
        P3jN: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = function() {
                function t() {}
                return t.equals = function(t, e, i) {
                    return i ? this.resolveFieldData(t, i) === this.resolveFieldData(e, i) : this.equalsByValue(t, e)
                }, t.equalsByValue = function(t, e) {
                    if (t === e) return !0;
                    if (t && e && "object" == typeof t && "object" == typeof e) {
                        var i, n, o, s = Array.isArray(t),
                            l = Array.isArray(e);
                        if (s && l) {
                            if ((n = t.length) != e.length) return !1;
                            for (i = n; 0 != i--;)
                                if (!this.equalsByValue(t[i], e[i])) return !1;
                            return !0
                        }
                        if (s != l) return !1;
                        var r = t instanceof Date,
                            a = e instanceof Date;
                        if (r != a) return !1;
                        if (r && a) return t.getTime() == e.getTime();
                        var p = t instanceof RegExp,
                            d = e instanceof RegExp;
                        if (p != d) return !1;
                        if (p && d) return t.toString() == e.toString();
                        var u = Object.keys(t);
                        if ((n = u.length) !== Object.keys(e).length) return !1;
                        for (i = n; 0 != i--;)
                            if (!Object.prototype.hasOwnProperty.call(e, u[i])) return !1;
                        for (i = n; 0 != i--;)
                            if (!this.equalsByValue(t[o = u[i]], e[o])) return !1;
                        return !0
                    }
                    return t != t && e != e
                }, t.resolveFieldData = function(t, e) {
                    if (t && e) {
                        if (this.isFunction(e)) return e(t);
                        if (-1 == e.indexOf(".")) return t[e];
                        for (var i = e.split("."), n = t, o = 0, s = i.length; o < s; ++o) {
                            if (null == n) return null;
                            n = n[i[o]]
                        }
                        return n
                    }
                    return null
                }, t.isFunction = function(t) {
                    return !!(t && t.constructor && t.call && t.apply)
                }, t.reorderArray = function(t, e, i) {
                    t && e !== i && (i >= t.length && (i %= t.length, e %= t.length), t.splice(i, 0, t.splice(e, 1)[0]))
                }, t.generateSelectItems = function(t, e) {
                    var i;
                    if (t && t.length) {
                        i = [];
                        for (var n = 0, o = t; n < o.length; n++) {
                            var s = o[n];
                            i.push({
                                label: this.resolveFieldData(s, e),
                                value: s
                            })
                        }
                    }
                    return i
                }, t.insertIntoOrderedArray = function(t, e, i, n) {
                    if (i.length > 0) {
                        for (var o = !1, s = 0; s < i.length; s++)
                            if (this.findIndexInList(i[s], n) > e) {
                                i.splice(s, 0, t), o = !0;
                                break
                            } o || i.push(t)
                    } else i.push(t)
                }, t.findIndexInList = function(t, e) {
                    var i = -1;
                    if (e)
                        for (var n = 0; n < e.length; n++)
                            if (e[n] == t) {
                                i = n;
                                break
                            } return i
                }, t.removeAccents = function(t) {
                    return t && t.search(/[\xC0-\xFF]/g) > -1 && (t = t.replace(/[\xC0-\xC5]/g, "A").replace(/[\xC6]/g, "AE").replace(/[\xC7]/g, "C").replace(/[\xC8-\xCB]/g, "E").replace(/[\xCC-\xCF]/g, "I").replace(/[\xD0]/g, "D").replace(/[\xD1]/g, "N").replace(/[\xD2-\xD6\xD8]/g, "O").replace(/[\xD9-\xDC]/g, "U").replace(/[\xDD]/g, "Y").replace(/[\xDE]/g, "P").replace(/[\xE0-\xE5]/g, "a").replace(/[\xE6]/g, "ae").replace(/[\xE7]/g, "c").replace(/[\xE8-\xEB]/g, "e").replace(/[\xEC-\xEF]/g, "i").replace(/[\xF1]/g, "n").replace(/[\xF2-\xF6\xF8]/g, "o").replace(/[\xF9-\xFC]/g, "u").replace(/[\xFE]/g, "p").replace(/[\xFD\xFF]/g, "y")), t
                }, t
            }();
            e.ObjectUtils = n
        },
        g4HV: function(t, e, i) {
            "use strict";
            var n = this && this.__decorate || function(t, e, i, n) {
                    var o, s = arguments.length,
                        l = s < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, i, n);
                    else
                        for (var r = t.length - 1; r >= 0; r--)(o = t[r]) && (l = (s < 3 ? o(l) : s > 3 ? o(e, i, l) : o(e, i)) || l);
                    return s > 3 && l && Object.defineProperty(e, i, l), l
                },
                o = this && this.__metadata || function(t, e) {
                    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e)
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var s = i("CcnG"),
                l = i("Ip0R"),
                r = i("sdDj"),
                a = function() {
                    function t(t, e) {
                        this.el = t, this.zone = e, this.tooltipPosition = "right", this.tooltipEvent = "hover", this.appendTo = "body", this.tooltipZIndex = "auto", this.escape = !0
                    }
                    return t.prototype.ngAfterViewInit = function() {
                        var t = this;
                        this.zone.runOutsideAngular((function() {
                            "hover" === t.tooltipEvent ? (t.mouseEnterListener = t.onMouseEnter.bind(t), t.mouseLeaveListener = t.onMouseLeave.bind(t), t.clickListener = t.onClick.bind(t), t.el.nativeElement.addEventListener("mouseenter", t.mouseEnterListener), t.el.nativeElement.addEventListener("mouseleave", t.mouseLeaveListener), t.el.nativeElement.addEventListener("click", t.clickListener)) : "focus" === t.tooltipEvent && (t.focusListener = t.onFocus.bind(t), t.blurListener = t.onBlur.bind(t), t.el.nativeElement.addEventListener("focus", t.focusListener), t.el.nativeElement.addEventListener("blur", t.blurListener))
                        }))
                    }, t.prototype.onMouseEnter = function(t) {
                        this.container || this.showTimeout || this.activate()
                    }, t.prototype.onMouseLeave = function(t) {
                        this.deactivate()
                    }, t.prototype.onFocus = function(t) {
                        this.activate()
                    }, t.prototype.onBlur = function(t) {
                        this.deactivate()
                    }, t.prototype.onClick = function(t) {
                        this.deactivate()
                    }, t.prototype.activate = function() {
                        var t = this;
                        this.active = !0, this.clearHideTimeout(), this.showDelay ? this.showTimeout = setTimeout((function() {
                            t.show()
                        }), this.showDelay) : this.show(), this.life && (this.hideTimeout = setTimeout((function() {
                            t.hide()
                        }), this.showDelay ? this.life + this.showDelay : this.life))
                    }, t.prototype.deactivate = function() {
                        var t = this;
                        this.active = !1, this.clearShowTimeout(), this.hideDelay ? (this.clearHideTimeout(), this.hideTimeout = setTimeout((function() {
                            t.hide()
                        }), this.hideDelay)) : this.hide()
                    }, Object.defineProperty(t.prototype, "text", {
                        get: function() {
                            return this._text
                        },
                        set: function(t) {
                            this._text = t, this.active && (this._text ? this.container && this.container.offsetParent ? this.updateText() : this.show() : this.hide())
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.create = function() {
                        this.container = document.createElement("div");
                        var t = document.createElement("div");
                        t.className = "ui-tooltip-arrow", this.container.appendChild(t), this.tooltipText = document.createElement("div"), this.tooltipText.className = "ui-tooltip-text ui-shadow ui-corner-all", this.updateText(), this.positionStyle && (this.container.style.position = this.positionStyle), this.container.appendChild(this.tooltipText), "body" === this.appendTo ? document.body.appendChild(this.container) : r.DomHandler.appendChild(this.container, "target" === this.appendTo ? this.el.nativeElement : this.appendTo), this.container.style.display = "inline-block"
                    }, t.prototype.show = function() {
                        this.text && !this.disabled && (this.create(), this.align(), r.DomHandler.fadeIn(this.container, 250), this.container.style.zIndex = "auto" === this.tooltipZIndex ? ++r.DomHandler.zindex : this.tooltipZIndex, this.bindDocumentResizeListener())
                    }, t.prototype.hide = function() {
                        this.remove()
                    }, t.prototype.updateText = function() {
                        this.escape ? (this.tooltipText.innerHTML = "", this.tooltipText.appendChild(document.createTextNode(this._text))) : this.tooltipText.innerHTML = this._text
                    }, t.prototype.align = function() {
                        switch (this.tooltipPosition) {
                            case "top":
                                this.alignTop(), this.isOutOfBounds() && (this.alignBottom(), this.isOutOfBounds() && (this.alignRight(), this.isOutOfBounds() && this.alignLeft()));
                                break;
                            case "bottom":
                                this.alignBottom(), this.isOutOfBounds() && (this.alignTop(), this.isOutOfBounds() && (this.alignRight(), this.isOutOfBounds() && this.alignLeft()));
                                break;
                            case "left":
                                this.alignLeft(), this.isOutOfBounds() && (this.alignRight(), this.isOutOfBounds() && (this.alignTop(), this.isOutOfBounds() && this.alignBottom()));
                                break;
                            case "right":
                                this.alignRight(), this.isOutOfBounds() && (this.alignLeft(), this.isOutOfBounds() && (this.alignTop(), this.isOutOfBounds() && this.alignBottom()))
                        }
                    }, t.prototype.getHostOffset = function() {
                        if ("body" === this.appendTo || "target" === this.appendTo) {
                            var t = this.el.nativeElement.getBoundingClientRect();
                            return {
                                left: t.left + r.DomHandler.getWindowScrollLeft(),
                                top: t.top + r.DomHandler.getWindowScrollTop()
                            }
                        }
                        return {
                            left: 0,
                            top: 0
                        }
                    }, t.prototype.alignRight = function() {
                        this.preAlign("right");
                        var t = this.getHostOffset(),
                            e = t.left + r.DomHandler.getOuterWidth(this.el.nativeElement),
                            i = t.top + (r.DomHandler.getOuterHeight(this.el.nativeElement) - r.DomHandler.getOuterHeight(this.container)) / 2;
                        this.container.style.left = e + "px", this.container.style.top = i + "px"
                    }, t.prototype.alignLeft = function() {
                        this.preAlign("left");
                        var t = this.getHostOffset(),
                            e = t.left - r.DomHandler.getOuterWidth(this.container),
                            i = t.top + (r.DomHandler.getOuterHeight(this.el.nativeElement) - r.DomHandler.getOuterHeight(this.container)) / 2;
                        this.container.style.left = e + "px", this.container.style.top = i + "px"
                    }, t.prototype.alignTop = function() {
                        this.preAlign("top");
                        var t = this.getHostOffset(),
                            e = t.left + (r.DomHandler.getOuterWidth(this.el.nativeElement) - r.DomHandler.getOuterWidth(this.container)) / 2,
                            i = t.top - r.DomHandler.getOuterHeight(this.container);
                        this.container.style.left = e + "px", this.container.style.top = i + "px"
                    }, t.prototype.alignBottom = function() {
                        this.preAlign("bottom");
                        var t = this.getHostOffset(),
                            e = t.left + (r.DomHandler.getOuterWidth(this.el.nativeElement) - r.DomHandler.getOuterWidth(this.container)) / 2,
                            i = t.top + r.DomHandler.getOuterHeight(this.el.nativeElement);
                        this.container.style.left = e + "px", this.container.style.top = i + "px"
                    }, t.prototype.preAlign = function(t) {
                        this.container.style.left = "-999px", this.container.style.top = "-999px";
                        var e = "ui-tooltip ui-widget ui-tooltip-" + t;
                        this.container.className = this.tooltipStyleClass ? e + " " + this.tooltipStyleClass : e
                    }, t.prototype.isOutOfBounds = function() {
                        var t = this.container.getBoundingClientRect(),
                            e = t.top,
                            i = t.left,
                            n = r.DomHandler.getOuterWidth(this.container),
                            o = r.DomHandler.getOuterHeight(this.container),
                            s = r.DomHandler.getViewport();
                        return i + n > s.width || i < 0 || e < 0 || e + o > s.height
                    }, t.prototype.onWindowResize = function(t) {
                        this.hide()
                    }, t.prototype.bindDocumentResizeListener = function() {
                        var t = this;
                        this.zone.runOutsideAngular((function() {
                            t.resizeListener = t.onWindowResize.bind(t), window.addEventListener("resize", t.resizeListener)
                        }))
                    }, t.prototype.unbindDocumentResizeListener = function() {
                        this.resizeListener && (window.removeEventListener("resize", this.resizeListener), this.resizeListener = null)
                    }, t.prototype.unbindEvents = function() {
                        "hover" === this.tooltipEvent ? (this.el.nativeElement.removeEventListener("mouseenter", this.mouseEnterListener), this.el.nativeElement.removeEventListener("mouseleave", this.mouseLeaveListener), this.el.nativeElement.removeEventListener("click", this.clickListener)) : "focus" === this.tooltipEvent && (this.el.nativeElement.removeEventListener("focus", this.focusListener), this.el.nativeElement.removeEventListener("blur", this.blurListener)), this.unbindDocumentResizeListener()
                    }, t.prototype.remove = function() {
                        this.container && this.container.parentElement && ("body" === this.appendTo ? document.body.removeChild(this.container) : "target" === this.appendTo ? this.el.nativeElement.removeChild(this.container) : r.DomHandler.removeChild(this.container, this.appendTo)), this.unbindDocumentResizeListener(), this.clearTimeouts(), this.container = null
                    }, t.prototype.clearShowTimeout = function() {
                        this.showTimeout && (clearTimeout(this.showTimeout), this.showTimeout = null)
                    }, t.prototype.clearHideTimeout = function() {
                        this.hideTimeout && (clearTimeout(this.hideTimeout), this.hideTimeout = null)
                    }, t.prototype.clearTimeouts = function() {
                        this.clearShowTimeout(), this.clearHideTimeout()
                    }, t.prototype.ngOnDestroy = function() {
                        this.unbindEvents(), this.remove()
                    }, n([s.Input(), o("design:type", String)], t.prototype, "tooltipPosition", void 0), n([s.Input(), o("design:type", String)], t.prototype, "tooltipEvent", void 0), n([s.Input(), o("design:type", Object)], t.prototype, "appendTo", void 0), n([s.Input(), o("design:type", String)], t.prototype, "positionStyle", void 0), n([s.Input(), o("design:type", String)], t.prototype, "tooltipStyleClass", void 0), n([s.Input(), o("design:type", String)], t.prototype, "tooltipZIndex", void 0), n([s.Input("tooltipDisabled"), o("design:type", Boolean)], t.prototype, "disabled", void 0), n([s.Input(), o("design:type", Boolean)], t.prototype, "escape", void 0), n([s.Input(), o("design:type", Number)], t.prototype, "showDelay", void 0), n([s.Input(), o("design:type", Number)], t.prototype, "hideDelay", void 0), n([s.Input(), o("design:type", Number)], t.prototype, "life", void 0), n([s.Input("pTooltip"), o("design:type", String), o("design:paramtypes", [String])], t.prototype, "text", null), n([s.Directive({
                        selector: "[pTooltip]"
                    }), o("design:paramtypes", [s.ElementRef, s.NgZone])], t)
                }();
            e.Tooltip = a;
            var p = n([s.NgModule({
                imports: [l.CommonModule],
                exports: [a],
                declarations: [a]
            })], (function() {}));
            e.TooltipModule = p
        },
        nciF: function(t, e, i) {
            "use strict";
            var n = this && this.__decorate || function(t, e, i, n) {
                    var o, s = arguments.length,
                        l = s < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, i, n);
                    else
                        for (var r = t.length - 1; r >= 0; r--)(o = t[r]) && (l = (s < 3 ? o(l) : s > 3 ? o(e, i, l) : o(e, i)) || l);
                    return s > 3 && l && Object.defineProperty(e, i, l), l
                },
                o = this && this.__metadata || function(t, e) {
                    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e)
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var s = i("qAlS"),
                l = i("CcnG"),
                r = i("ihYY"),
                a = i("Ip0R"),
                p = i("7LN8"),
                d = i("sdDj"),
                u = i("P3jN"),
                h = i("gIcY"),
                c = i("v3c8"),
                g = i("g4HV");
            e.DROPDOWN_VALUE_ACCESSOR = {
                provide: h.NG_VALUE_ACCESSOR,
                useExisting: l.forwardRef((function() {
                    return y
                })),
                multi: !0
            };
            var f = function() {
                function t() {
                    this.onClick = new l.EventEmitter
                }
                return t.prototype.onOptionClick = function(t) {
                    this.onClick.emit({
                        originalEvent: t,
                        option: this.option
                    })
                }, n([l.Input(), o("design:type", Object)], t.prototype, "option", void 0), n([l.Input(), o("design:type", Boolean)], t.prototype, "selected", void 0), n([l.Input(), o("design:type", Boolean)], t.prototype, "disabled", void 0), n([l.Input(), o("design:type", Boolean)], t.prototype, "visible", void 0), n([l.Input(), o("design:type", Number)], t.prototype, "itemSize", void 0), n([l.Input(), o("design:type", l.TemplateRef)], t.prototype, "template", void 0), n([l.Output(), o("design:type", l.EventEmitter)], t.prototype, "onClick", void 0), n([l.Component({
                    selector: "p-dropdownItem",
                    template: "\n        <li (click)=\"onOptionClick($event)\" role=\"option\"\n            [attr.aria-label]=\"option.label\"\n            [ngStyle]=\"{'height': itemSize + 'px'}\"\n            [ngClass]=\"{'ui-dropdown-item ui-corner-all':true,\n                                                'ui-state-highlight': selected,\n                                                'ui-state-disabled':(option.disabled),\n                                                'ui-dropdown-item-empty': !option.label||option.label.length === 0}\">\n            <span *ngIf=\"!template\">{{option.label||'empty'}}</span>\n            <ng-container *ngTemplateOutlet=\"template; context: {$implicit: option}\"></ng-container>\n        </li>\n    "
                })], t)
            }();
            e.DropdownItem = f;
            var y = function() {
                function t(t, e, i, n) {
                    this.el = t, this.renderer = e, this.cd = i, this.zone = n, this.scrollHeight = "200px", this.filterBy = "label", this.resetFilterOnHide = !1, this.dropdownIcon = "pi pi-chevron-down", this.autoDisplayFirst = !0, this.emptyFilterMessage = "No results found", this.autoZIndex = !0, this.baseZIndex = 0, this.showTransitionOptions = "225ms ease-out", this.hideTransitionOptions = "195ms ease-in", this.filterMatchMode = "contains", this.tooltip = "", this.tooltipPosition = "right", this.tooltipPositionStyle = "absolute", this.onChange = new l.EventEmitter, this.onFocus = new l.EventEmitter, this.onBlur = new l.EventEmitter, this.onClick = new l.EventEmitter, this.onShow = new l.EventEmitter, this.onHide = new l.EventEmitter, this.onModelChange = function() {}, this.onModelTouched = function() {}, this.viewPortOffsetTop = 0
                }
                return Object.defineProperty(t.prototype, "autoWidth", {
                    get: function() {
                        return this._autoWidth
                    },
                    set: function(t) {
                        this._autoWidth = t, console.log("Setting autoWidth has no effect as automatic width calculation is removed for better perfomance.")
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "disabled", {
                    get: function() {
                        return this._disabled
                    },
                    set: function(t) {
                        t && (this.focused = !1), this._disabled = t, this.cd.destroyed || this.cd.detectChanges()
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.ngAfterContentInit = function() {
                    var t = this;
                    this.templates.forEach((function(e) {
                        switch (e.getType()) {
                            case "item":
                                t.itemTemplate = e.template;
                                break;
                            case "selectedItem":
                                t.selectedItemTemplate = e.template;
                                break;
                            case "group":
                                t.groupTemplate = e.template;
                                break;
                            default:
                                t.itemTemplate = e.template
                        }
                    }))
                }, t.prototype.ngOnInit = function() {
                    this.optionsToDisplay = this.options, this.updateSelectedOption(null)
                }, Object.defineProperty(t.prototype, "options", {
                    get: function() {
                        return this._options
                    },
                    set: function(t) {
                        var e = this.optionLabel ? u.ObjectUtils.generateSelectItems(t, this.optionLabel) : t;
                        this._options = e, this.optionsToDisplay = this._options, this.updateSelectedOption(this.value), this.optionsChanged = !0, this.filterValue && this.filterValue.length && this.activateFilter()
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.ngAfterViewInit = function() {
                    this.editable && this.updateEditableLabel()
                }, Object.defineProperty(t.prototype, "label", {
                    get: function() {
                        return this.selectedOption ? this.selectedOption.label : null
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.updateEditableLabel = function() {
                    this.editableInputViewChild && this.editableInputViewChild.nativeElement && (this.editableInputViewChild.nativeElement.value = this.selectedOption ? this.selectedOption.label : this.value || "")
                }, t.prototype.onItemClick = function(t) {
                    var e = this,
                        i = t.option;
                    this.itemClick = !0, i.disabled || (this.selectItem(t, i), this.focusViewChild.nativeElement.focus()), setTimeout((function() {
                        e.hide(t)
                    }), 150)
                }, t.prototype.selectItem = function(t, e) {
                    var i = this;
                    this.selectedOption != e && (this.selectedOption = e, this.value = e.value, this.filled = !0, this.onModelChange(this.value), this.updateEditableLabel(), this.onChange.emit({
                        originalEvent: t.originalEvent,
                        value: this.value
                    }), this.virtualScroll && setTimeout((function() {
                        i.viewPortOffsetTop = i.viewPort.measureScrollOffset()
                    }), 1))
                }, t.prototype.ngAfterViewChecked = function() {
                    var t = this;
                    if (this.optionsChanged && this.overlayVisible && (this.optionsChanged = !1, this.virtualScroll && this.updateVirtualScrollSelectedIndex(!0), this.zone.runOutsideAngular((function() {
                            setTimeout((function() {
                                t.alignOverlay()
                            }), 1)
                        }))), this.selectedOptionUpdated && this.itemsWrapper) {
                        if (this.virtualScroll && this.viewPort) {
                            var e = this.viewPort.getRenderedRange();
                            this.updateVirtualScrollSelectedIndex(!1), (e.start > this.virtualScrollSelectedIndex || e.end < this.virtualScrollSelectedIndex) && this.viewPort.scrollToIndex(this.virtualScrollSelectedIndex)
                        }
                        d.DomHandler.findSingle(this.overlay, "li.ui-state-highlight") && d.DomHandler.scrollInView(this.itemsWrapper, d.DomHandler.findSingle(this.overlay, "li.ui-state-highlight")), this.selectedOptionUpdated = !1
                    }
                }, t.prototype.writeValue = function(t) {
                    this.filter && this.resetFilter(), this.value = t, this.updateSelectedOption(t), this.updateEditableLabel(), this.updateFilledState(), this.cd.markForCheck()
                }, t.prototype.resetFilter = function() {
                    this.filterViewChild && this.filterViewChild.nativeElement && (this.filterValue = null, this.filterViewChild.nativeElement.value = ""), this.optionsToDisplay = this.options
                }, t.prototype.updateSelectedOption = function(t) {
                    this.selectedOption = this.findOption(t, this.optionsToDisplay), this.autoDisplayFirst && !this.placeholder && !this.selectedOption && this.optionsToDisplay && this.optionsToDisplay.length && !this.editable && (this.selectedOption = this.optionsToDisplay[0]), this.selectedOptionUpdated = !0
                }, t.prototype.registerOnChange = function(t) {
                    this.onModelChange = t
                }, t.prototype.registerOnTouched = function(t) {
                    this.onModelTouched = t
                }, t.prototype.setDisabledState = function(t) {
                    this.disabled = t
                }, t.prototype.onMouseclick = function(t) {
                    this.disabled || this.readonly || (this.onClick.emit(t), this.selfClick = !0, this.clearClick = d.DomHandler.hasClass(t.target, "ui-dropdown-clear-icon"), this.itemClick || this.clearClick || (this.focusViewChild.nativeElement.focus(), this.overlayVisible ? this.hide(t) : this.show(), this.cd.detectChanges()))
                }, t.prototype.onEditableInputClick = function(t) {
                    this.itemClick = !0, this.bindDocumentClickListener()
                }, t.prototype.onEditableInputFocus = function(t) {
                    this.focused = !0, this.hide(t), this.onFocus.emit(t)
                }, t.prototype.onEditableInputChange = function(t) {
                    this.value = t.target.value, this.updateSelectedOption(this.value), this.onModelChange(this.value), this.onChange.emit({
                        originalEvent: t,
                        value: this.value
                    })
                }, t.prototype.show = function() {
                    this.overlayVisible = !0
                }, t.prototype.onOverlayAnimationStart = function(t) {
                    switch (t.toState) {
                        case "visible":
                            if (this.overlay = t.element, this.itemsWrapper = d.DomHandler.findSingle(this.overlay, this.virtualScroll ? ".cdk-virtual-scroll-viewport" : ".ui-dropdown-items-wrapper"), this.appendOverlay(), this.autoZIndex && (this.overlay.style.zIndex = String(this.baseZIndex + ++d.DomHandler.zindex)), this.alignOverlay(), this.bindDocumentClickListener(), this.bindDocumentResizeListener(), this.options && this.options.length && !this.virtualScroll) {
                                var e = d.DomHandler.findSingle(this.itemsWrapper, ".ui-dropdown-item.ui-state-highlight");
                                e && d.DomHandler.scrollInView(this.itemsWrapper, e)
                            }
                            this.filterViewChild && this.filterViewChild.nativeElement && this.filterViewChild.nativeElement.focus(), this.onShow.emit(t);
                            break;
                        case "void":
                            this.onOverlayHide()
                    }
                }, t.prototype.scrollToSelectedVirtualScrollElement = function() {
                    this.virtualAutoScrolled || (this.viewPortOffsetTop ? this.viewPort.scrollToOffset(this.viewPortOffsetTop) : this.virtualScrollSelectedIndex > -1 && this.viewPort.scrollToIndex(this.virtualScrollSelectedIndex)), this.virtualAutoScrolled = !0
                }, t.prototype.updateVirtualScrollSelectedIndex = function(t) {
                    this.selectedOption && this.optionsToDisplay && this.optionsToDisplay.length && (t && (this.viewPortOffsetTop = 0), this.virtualScrollSelectedIndex = this.findOptionIndex(this.selectedOption.value, this.optionsToDisplay))
                }, t.prototype.appendOverlay = function() {
                    this.appendTo && ("body" === this.appendTo ? document.body.appendChild(this.overlay) : d.DomHandler.appendChild(this.overlay, this.appendTo), this.overlay.style.minWidth = d.DomHandler.getWidth(this.containerViewChild.nativeElement) + "px")
                }, t.prototype.restoreOverlayAppend = function() {
                    this.overlay && this.appendTo && this.el.nativeElement.appendChild(this.overlay)
                }, t.prototype.hide = function(t) {
                    this.overlayVisible = !1, this.filter && this.resetFilterOnHide && this.resetFilter(), this.virtualScroll && (this.virtualAutoScrolled = !1), this.cd.markForCheck(), this.onHide.emit(t)
                }, t.prototype.alignOverlay = function() {
                    this.overlay && (this.appendTo ? d.DomHandler.absolutePosition(this.overlay, this.containerViewChild.nativeElement) : d.DomHandler.relativePosition(this.overlay, this.containerViewChild.nativeElement))
                }, t.prototype.onInputFocus = function(t) {
                    this.focused = !0, this.onFocus.emit(t)
                }, t.prototype.onInputBlur = function(t) {
                    this.focused = !1, this.onModelTouched(), this.onBlur.emit(t)
                }, t.prototype.findPrevEnabledOption = function(t) {
                    var e;
                    if (this.optionsToDisplay && this.optionsToDisplay.length) {
                        for (var i = t - 1; 0 <= i; i--)
                            if (!(n = this.optionsToDisplay[i]).disabled) {
                                e = n;
                                break
                            } if (!e)
                            for (i = this.optionsToDisplay.length - 1; i >= t; i--) {
                                var n;
                                if (!(n = this.optionsToDisplay[i]).disabled) {
                                    e = n;
                                    break
                                }
                            }
                    }
                    return e
                }, t.prototype.findNextEnabledOption = function(t) {
                    var e;
                    if (this.optionsToDisplay && this.optionsToDisplay.length) {
                        for (var i = t + 1; t < this.optionsToDisplay.length - 1; i++)
                            if (!(n = this.optionsToDisplay[i]).disabled) {
                                e = n;
                                break
                            } if (!e)
                            for (i = 0; i < t; i++) {
                                var n;
                                if (!(n = this.optionsToDisplay[i]).disabled) {
                                    e = n;
                                    break
                                }
                            }
                    }
                    return e
                }, t.prototype.onKeydown = function(t, e) {
                    if (!this.readonly && this.optionsToDisplay && null !== this.optionsToDisplay.length) switch (t.which) {
                        case 40:
                            if (!this.overlayVisible && t.altKey) this.show();
                            else if (this.group)
                                if (-1 !== (n = this.selectedOption ? this.findOptionGroupIndex(this.selectedOption.value, this.optionsToDisplay) : -1)) {
                                    var i = n.itemIndex + 1;
                                    i < this.optionsToDisplay[n.groupIndex].items.length ? (this.selectItem(t, this.optionsToDisplay[n.groupIndex].items[i]), this.selectedOptionUpdated = !0) : this.optionsToDisplay[n.groupIndex + 1] && (this.selectItem(t, this.optionsToDisplay[n.groupIndex + 1].items[0]), this.selectedOptionUpdated = !0)
                                } else this.selectItem(t, this.optionsToDisplay[0].items[0]);
                            else {
                                var n = this.selectedOption ? this.findOptionIndex(this.selectedOption.value, this.optionsToDisplay) : -1,
                                    o = this.findNextEnabledOption(n);
                                o && (this.selectItem(t, o), this.selectedOptionUpdated = !0)
                            }
                            t.preventDefault();
                            break;
                        case 38:
                            if (this.group) {
                                if (-1 !== (n = this.selectedOption ? this.findOptionGroupIndex(this.selectedOption.value, this.optionsToDisplay) : -1)) {
                                    var s = n.itemIndex - 1;
                                    if (s >= 0) this.selectItem(t, this.optionsToDisplay[n.groupIndex].items[s]), this.selectedOptionUpdated = !0;
                                    else if (s < 0) {
                                        var l = this.optionsToDisplay[n.groupIndex - 1];
                                        l && (this.selectItem(t, l.items[l.items.length - 1]), this.selectedOptionUpdated = !0)
                                    }
                                }
                            } else {
                                n = this.selectedOption ? this.findOptionIndex(this.selectedOption.value, this.optionsToDisplay) : -1;
                                var r = this.findPrevEnabledOption(n);
                                r && (this.selectItem(t, r), this.selectedOptionUpdated = !0)
                            }
                            t.preventDefault();
                            break;
                        case 32:
                        case 32:
                            this.overlayVisible || (this.show(), t.preventDefault());
                            break;
                        case 13:
                            (!this.filter || this.optionsToDisplay && this.optionsToDisplay.length > 0) && this.hide(t), t.preventDefault();
                            break;
                        case 27:
                        case 9:
                            this.hide(t);
                            break;
                        default:
                            e && this.search(t)
                    }
                }, t.prototype.search = function(t) {
                    var e = this;
                    this.searchTimeout && clearTimeout(this.searchTimeout);
                    var i, n = t.key;
                    if (this.previousSearchChar = this.currentSearchChar, this.currentSearchChar = n, this.searchValue = this.previousSearchChar === this.currentSearchChar ? this.currentSearchChar : this.searchValue ? this.searchValue + n : n, this.group) {
                        var o = this.selectedOption ? this.findOptionGroupIndex(this.selectedOption.value, this.optionsToDisplay) : {
                            groupIndex: 0,
                            itemIndex: 0
                        };
                        i = this.searchOptionWithinGroup(o)
                    } else o = this.selectedOption ? this.findOptionIndex(this.selectedOption.value, this.optionsToDisplay) : -1, i = this.searchOption(++o);
                    i && (this.selectItem(t, i), this.selectedOptionUpdated = !0), this.searchTimeout = setTimeout((function() {
                        e.searchValue = null
                    }), 250)
                }, t.prototype.searchOption = function(t) {
                    var e;
                    return this.searchValue && ((e = this.searchOptionInRange(t, this.optionsToDisplay.length)) || (e = this.searchOptionInRange(0, t))), e
                }, t.prototype.searchOptionInRange = function(t, e) {
                    for (var i = t; i < e; i++) {
                        var n = this.optionsToDisplay[i];
                        if (n.label.toLowerCase().startsWith(this.searchValue.toLowerCase())) return n
                    }
                    return null
                }, t.prototype.searchOptionWithinGroup = function(t) {
                    if (this.searchValue) {
                        for (var e = t.groupIndex; e < this.optionsToDisplay.length; e++)
                            for (var i = t.groupIndex === e ? t.itemIndex + 1 : 0; i < this.optionsToDisplay[e].items.length; i++)
                                if ((n = this.optionsToDisplay[e].items[i]).label.toLowerCase().startsWith(this.searchValue.toLowerCase())) return n;
                        for (e = 0; e <= t.groupIndex; e++)
                            for (i = 0; i < (t.groupIndex === e ? t.itemIndex : this.optionsToDisplay[e].items.length); i++) {
                                var n;
                                if ((n = this.optionsToDisplay[e].items[i]).label.toLowerCase().startsWith(this.searchValue.toLowerCase())) return n
                            }
                    }
                    return null
                }, t.prototype.findOptionIndex = function(t, e) {
                    var i = -1;
                    if (e)
                        for (var n = 0; n < e.length; n++)
                            if (null == t && null == e[n].value || u.ObjectUtils.equals(t, e[n].value, this.dataKey)) {
                                i = n;
                                break
                            } return i
                }, t.prototype.findOptionGroupIndex = function(t, e) {
                    var i, n;
                    if (e)
                        for (var o = 0; o < e.length && (i = o, -1 === (n = this.findOptionIndex(t, e[o].items))); o++);
                    return -1 !== n ? {
                        groupIndex: i,
                        itemIndex: n
                    } : -1
                }, t.prototype.findOption = function(t, e, i) {
                    if (this.group && !i) {
                        var n = void 0;
                        if (e && e.length)
                            for (var o = 0, s = e; o < s.length && !(n = this.findOption(t, s[o].items, !0)); o++);
                        return n
                    }
                    var l = this.findOptionIndex(t, e);
                    return -1 != l ? e[l] : null
                }, t.prototype.onFilter = function(t) {
                    var e = t.target.value;
                    e && e.length ? (this.filterValue = e, this.activateFilter()) : (this.filterValue = null, this.optionsToDisplay = this.options), this.optionsChanged = !0
                }, t.prototype.activateFilter = function() {
                    var t = this.filterBy.split(",");
                    if (this.options && this.options.length) {
                        if (this.group) {
                            for (var e = [], i = 0, n = this.options; i < n.length; i++) {
                                var o = n[i],
                                    s = c.FilterUtils.filter(o.items, t, this.filterValue, this.filterMatchMode);
                                s && s.length && e.push({
                                    label: o.label,
                                    value: o.value,
                                    items: s
                                })
                            }
                            this.optionsToDisplay = e
                        } else this.optionsToDisplay = c.FilterUtils.filter(this.options, t, this.filterValue, this.filterMatchMode);
                        this.optionsChanged = !0
                    }
                }, t.prototype.applyFocus = function() {
                    this.editable ? d.DomHandler.findSingle(this.el.nativeElement, ".ui-dropdown-label.ui-inputtext").focus() : d.DomHandler.findSingle(this.el.nativeElement, "input[readonly]").focus()
                }, t.prototype.focus = function() {
                    this.applyFocus()
                }, t.prototype.bindDocumentClickListener = function() {
                    var t = this;
                    this.documentClickListener || (this.documentClickListener = this.renderer.listen("document", "click", (function(e) {
                        t.selfClick || t.itemClick || (t.hide(e), t.unbindDocumentClickListener()), t.clearClickState(), t.cd.markForCheck()
                    })))
                }, t.prototype.clearClickState = function() {
                    this.selfClick = !1, this.itemClick = !1
                }, t.prototype.unbindDocumentClickListener = function() {
                    this.documentClickListener && (this.documentClickListener(), this.documentClickListener = null)
                }, t.prototype.bindDocumentResizeListener = function() {
                    this.documentResizeListener = this.onWindowResize.bind(this), window.addEventListener("resize", this.documentResizeListener)
                }, t.prototype.unbindDocumentResizeListener = function() {
                    this.documentResizeListener && (window.removeEventListener("resize", this.documentResizeListener), this.documentResizeListener = null)
                }, t.prototype.onWindowResize = function() {
                    d.DomHandler.isAndroid() || this.hide(event)
                }, t.prototype.updateFilledState = function() {
                    this.filled = null != this.selectedOption
                }, t.prototype.clear = function(t) {
                    this.clearClick = !0, this.value = null, this.onModelChange(this.value), this.onChange.emit({
                        originalEvent: t,
                        value: this.value
                    }), this.updateSelectedOption(this.value), this.updateEditableLabel(), this.updateFilledState()
                }, t.prototype.onOverlayHide = function() {
                    this.unbindDocumentClickListener(), this.unbindDocumentResizeListener(), this.overlay = null, this.itemsWrapper = null
                }, t.prototype.ngOnDestroy = function() {
                    this.restoreOverlayAppend(), this.onOverlayHide()
                }, n([l.Input(), o("design:type", String)], t.prototype, "scrollHeight", void 0), n([l.Input(), o("design:type", Boolean)], t.prototype, "filter", void 0), n([l.Input(), o("design:type", String)], t.prototype, "name", void 0), n([l.Input(), o("design:type", Object)], t.prototype, "style", void 0), n([l.Input(), o("design:type", Object)], t.prototype, "panelStyle", void 0), n([l.Input(), o("design:type", String)], t.prototype, "styleClass", void 0), n([l.Input(), o("design:type", String)], t.prototype, "panelStyleClass", void 0), n([l.Input(), o("design:type", Boolean)], t.prototype, "readonly", void 0), n([l.Input(), o("design:type", Boolean)], t.prototype, "required", void 0), n([l.Input(), o("design:type", Boolean)], t.prototype, "editable", void 0), n([l.Input(), o("design:type", Object)], t.prototype, "appendTo", void 0), n([l.Input(), o("design:type", Number)], t.prototype, "tabindex", void 0), n([l.Input(), o("design:type", String)], t.prototype, "placeholder", void 0), n([l.Input(), o("design:type", String)], t.prototype, "filterPlaceholder", void 0), n([l.Input(), o("design:type", String)], t.prototype, "inputId", void 0), n([l.Input(), o("design:type", String)], t.prototype, "selectId", void 0), n([l.Input(), o("design:type", String)], t.prototype, "dataKey", void 0), n([l.Input(), o("design:type", String)], t.prototype, "filterBy", void 0), n([l.Input(), o("design:type", Boolean)], t.prototype, "autofocus", void 0), n([l.Input(), o("design:type", Boolean)], t.prototype, "resetFilterOnHide", void 0), n([l.Input(), o("design:type", String)], t.prototype, "dropdownIcon", void 0), n([l.Input(), o("design:type", String)], t.prototype, "optionLabel", void 0), n([l.Input(), o("design:type", Boolean)], t.prototype, "autoDisplayFirst", void 0), n([l.Input(), o("design:type", Boolean)], t.prototype, "group", void 0), n([l.Input(), o("design:type", Boolean)], t.prototype, "showClear", void 0), n([l.Input(), o("design:type", String)], t.prototype, "emptyFilterMessage", void 0), n([l.Input(), o("design:type", Boolean)], t.prototype, "virtualScroll", void 0), n([l.Input(), o("design:type", Number)], t.prototype, "itemSize", void 0), n([l.Input(), o("design:type", Boolean)], t.prototype, "autoZIndex", void 0), n([l.Input(), o("design:type", Number)], t.prototype, "baseZIndex", void 0), n([l.Input(), o("design:type", String)], t.prototype, "showTransitionOptions", void 0), n([l.Input(), o("design:type", String)], t.prototype, "hideTransitionOptions", void 0), n([l.Input(), o("design:type", String)], t.prototype, "ariaFilterLabel", void 0), n([l.Input(), o("design:type", String)], t.prototype, "filterMatchMode", void 0), n([l.Input(), o("design:type", Number)], t.prototype, "maxlength", void 0), n([l.Input(), o("design:type", String)], t.prototype, "tooltip", void 0), n([l.Input(), o("design:type", String)], t.prototype, "tooltipPosition", void 0), n([l.Input(), o("design:type", String)], t.prototype, "tooltipPositionStyle", void 0), n([l.Input(), o("design:type", String)], t.prototype, "tooltipStyleClass", void 0), n([l.Output(), o("design:type", l.EventEmitter)], t.prototype, "onChange", void 0), n([l.Output(), o("design:type", l.EventEmitter)], t.prototype, "onFocus", void 0), n([l.Output(), o("design:type", l.EventEmitter)], t.prototype, "onBlur", void 0), n([l.Output(), o("design:type", l.EventEmitter)], t.prototype, "onClick", void 0), n([l.Output(), o("design:type", l.EventEmitter)], t.prototype, "onShow", void 0), n([l.Output(), o("design:type", l.EventEmitter)], t.prototype, "onHide", void 0), n([l.ViewChild("container", {
                    static: !1
                }), o("design:type", l.ElementRef)], t.prototype, "containerViewChild", void 0), n([l.ViewChild("filter", {
                    static: !1
                }), o("design:type", l.ElementRef)], t.prototype, "filterViewChild", void 0), n([l.ViewChild("in", {
                    static: !1
                }), o("design:type", l.ElementRef)], t.prototype, "focusViewChild", void 0), n([l.ViewChild(s.CdkVirtualScrollViewport, {
                    static: !1
                }), o("design:type", s.CdkVirtualScrollViewport)], t.prototype, "viewPort", void 0), n([l.ViewChild("editableInput", {
                    static: !1
                }), o("design:type", l.ElementRef)], t.prototype, "editableInputViewChild", void 0), n([l.ContentChildren(p.PrimeTemplate), o("design:type", l.QueryList)], t.prototype, "templates", void 0), n([l.Input(), o("design:type", Boolean), o("design:paramtypes", [Boolean])], t.prototype, "autoWidth", null), n([l.Input(), o("design:type", Boolean), o("design:paramtypes", [Boolean])], t.prototype, "disabled", null), n([l.Input(), o("design:type", Array), o("design:paramtypes", [Array])], t.prototype, "options", null), n([l.Component({
                    selector: "p-dropdown",
                    template: '\n         <div #container [ngClass]="{\'ui-dropdown ui-widget ui-state-default ui-corner-all ui-helper-clearfix\':true,\n            \'ui-state-disabled\':disabled, \'ui-dropdown-open\':overlayVisible, \'ui-state-focus\':focused, \'ui-dropdown-clearable\': showClear && !disabled}"\n            (click)="onMouseclick($event)" [ngStyle]="style" [class]="styleClass">\n            <div class="ui-helper-hidden-accessible">\n                <input #in [attr.id]="inputId" type="text" [attr.aria-label]="selectedOption ? selectedOption.label : \' \'" readonly (focus)="onInputFocus($event)" aria-haspopup="listbox"\n                    (blur)="onInputBlur($event)" (keydown)="onKeydown($event, true)" [disabled]="disabled" [attr.tabindex]="tabindex" [attr.autofocus]="autofocus">\n            </div>\n            <div class="ui-helper-hidden-accessible ui-dropdown-hidden-select">\n                <select [attr.required]="required" [attr.name]="name" tabindex="-1" aria-hidden="true">\n                    <option *ngIf="placeholder" value="">{{placeholder}}</option>\n                    <option *ngIf="selectedOption" [value]="selectedOption.value" [selected]="true">{{selectedOption.label}}</option>\n                </select>\n            </div>\n            <div class="ui-dropdown-label-container" [pTooltip]="tooltip" [tooltipPosition]="tooltipPosition" [positionStyle]="tooltipPositionStyle" [tooltipStyleClass]="tooltipStyleClass">\n                <label [ngClass]="{\'ui-dropdown-label ui-inputtext ui-corner-all\':true,\'ui-dropdown-label-empty\':(label == null || label.length === 0)}" *ngIf="!editable && (label != null)">\n                    <ng-container *ngIf="!selectedItemTemplate">{{label||\'empty\'}}</ng-container>\n                    <ng-container *ngTemplateOutlet="selectedItemTemplate; context: {$implicit: selectedOption}"></ng-container>\n                </label>\n                <label [ngClass]="{\'ui-dropdown-label ui-inputtext ui-corner-all ui-placeholder\':true,\'ui-dropdown-label-empty\': (placeholder == null || placeholder.length === 0)}" *ngIf="!editable && (label == null)">{{placeholder||\'empty\'}}</label>\n                <input #editableInput type="text" [attr.maxlength]="maxlength" [attr.aria-label]="selectedOption ? selectedOption.label : \' \'" class="ui-dropdown-label ui-inputtext ui-corner-all" *ngIf="editable" [disabled]="disabled" [attr.placeholder]="placeholder"\n                            (click)="onEditableInputClick($event)" (input)="onEditableInputChange($event)" (focus)="onEditableInputFocus($event)" (blur)="onInputBlur($event)">\n                <i class="ui-dropdown-clear-icon pi pi-times" (click)="clear($event)" *ngIf="value != null && showClear && !disabled"></i>\n            </div>\n            <div class="ui-dropdown-trigger ui-state-default ui-corner-right">\n                <span class="ui-dropdown-trigger-icon ui-clickable" [ngClass]="dropdownIcon"></span>\n            </div>\n            <div *ngIf="overlayVisible" [ngClass]="\'ui-dropdown-panel  ui-widget ui-widget-content ui-corner-all ui-shadow\'" [@overlayAnimation]="{value: \'visible\', params: {showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions}}" (@overlayAnimation.start)="onOverlayAnimationStart($event)" [ngStyle]="panelStyle" [class]="panelStyleClass">\n                <div *ngIf="filter" class="ui-dropdown-filter-container" (click)="$event.stopPropagation()">\n                    <input #filter type="text" autocomplete="off" [value]="filterValue||\'\'" class="ui-dropdown-filter ui-inputtext ui-widget ui-state-default ui-corner-all" [attr.placeholder]="filterPlaceholder"\n                    (keydown.enter)="$event.preventDefault()" (keydown)="onKeydown($event, false)" (input)="onFilter($event)" [attr.aria-label]="ariaFilterLabel">\n                    <span class="ui-dropdown-filter-icon pi pi-search"></span>\n                </div>\n                <div class="ui-dropdown-items-wrapper" [style.max-height]="virtualScroll ? \'auto\' : (scrollHeight||\'auto\')">\n                    <ul class="ui-dropdown-items ui-dropdown-list ui-widget-content ui-widget ui-corner-all ui-helper-reset" role="listbox">\n                        <ng-container *ngIf="group">\n                            <ng-template ngFor let-optgroup [ngForOf]="optionsToDisplay">\n                                <li class="ui-dropdown-item-group">\n                                    <span *ngIf="!groupTemplate">{{optgroup.label||\'empty\'}}</span>\n                                    <ng-container *ngTemplateOutlet="groupTemplate; context: {$implicit: optgroup}"></ng-container>\n                                </li>\n                                <ng-container *ngTemplateOutlet="itemslist; context: {$implicit: optgroup.items, selectedOption: selectedOption}"></ng-container>\n                            </ng-template>\n                        </ng-container>\n                        <ng-container *ngIf="!group">\n                            <ng-container *ngTemplateOutlet="itemslist; context: {$implicit: optionsToDisplay, selectedOption: selectedOption}"></ng-container>\n                        </ng-container>\n                        <ng-template #itemslist let-options let-selectedOption="selectedOption">\n\n                            <ng-container *ngIf="!virtualScroll; else virtualScrollList">\n                                <ng-template ngFor let-option let-i="index" [ngForOf]="options">\n                                    <p-dropdownItem [option]="option" [selected]="selectedOption == option" \n                                                    (onClick)="onItemClick($event)"\n                                                    [template]="itemTemplate"></p-dropdownItem>\n                                </ng-template>\n                            </ng-container>\n                            <ng-template #virtualScrollList>\n                                <cdk-virtual-scroll-viewport (scrolledIndexChange)="scrollToSelectedVirtualScrollElement()" #viewport [ngStyle]="{\'height\': scrollHeight}" [itemSize]="itemSize" *ngIf="virtualScroll && optionsToDisplay && optionsToDisplay.length">\n                                    <ng-container *cdkVirtualFor="let option of options; let i = index; let c = count; let f = first; let l = last; let e = even; let o = odd">         \n                                        <p-dropdownItem [option]="option" [selected]="selectedOption == option"\n                                                                   (onClick)="onItemClick($event)"\n                                                                   [template]="itemTemplate"></p-dropdownItem>\n                                    </ng-container>\n                                </cdk-virtual-scroll-viewport>\n                            </ng-template>\n                        </ng-template>\n                        <li *ngIf="filter && optionsToDisplay && optionsToDisplay.length === 0" class="ui-dropdown-empty-message">{{emptyFilterMessage}}</li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    ',
                    animations: [r.trigger("overlayAnimation", [r.state("void", r.style({
                        transform: "translateY(5%)",
                        opacity: 0
                    })), r.state("visible", r.style({
                        transform: "translateY(0)",
                        opacity: 1
                    })), r.transition("void => visible", r.animate("{{showTransitionParams}}")), r.transition("visible => void", r.animate("{{hideTransitionParams}}"))])],
                    host: {
                        "[class.ui-inputwrapper-filled]": "filled",
                        "[class.ui-inputwrapper-focus]": "focused"
                    },
                    providers: [e.DROPDOWN_VALUE_ACCESSOR]
                }), o("design:paramtypes", [l.ElementRef, l.Renderer2, l.ChangeDetectorRef, l.NgZone])], t)
            }();
            e.Dropdown = y;
            var v = n([l.NgModule({
                imports: [a.CommonModule, p.SharedModule, s.ScrollingModule, g.TooltipModule],
                exports: [y, p.SharedModule, s.ScrollingModule],
                declarations: [y, f]
            })], (function() {}));
            e.DropdownModule = v
        },
        v3c8: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = i("P3jN"),
                o = function() {
                    function t() {}
                    return t.filter = function(e, i, o, s) {
                        var l = [],
                            r = n.ObjectUtils.removeAccents(o).toLowerCase();
                        if (e)
                            for (var a = 0, p = e; a < p.length; a++)
                                for (var d = p[a], u = 0, h = i; u < h.length; u++) {
                                    var c = n.ObjectUtils.removeAccents(String(n.ObjectUtils.resolveFieldData(d, h[u]))).toLowerCase();
                                    if (t[s](c, r)) {
                                        l.push(d);
                                        break
                                    }
                                }
                        return l
                    }, t.startsWith = function(t, e) {
                        if (null == e || "" === e.trim()) return !0;
                        if (null == t) return !1;
                        var i = n.ObjectUtils.removeAccents(e.toString()).toLowerCase();
                        return n.ObjectUtils.removeAccents(t.toString()).toLowerCase().slice(0, i.length) === i
                    }, t.contains = function(t, e) {
                        if (null == e || "string" == typeof e && "" === e.trim()) return !0;
                        if (null == t) return !1;
                        var i = n.ObjectUtils.removeAccents(e.toString()).toLowerCase();
                        return -1 !== n.ObjectUtils.removeAccents(t.toString()).toLowerCase().indexOf(i)
                    }, t.endsWith = function(t, e) {
                        if (null == e || "" === e.trim()) return !0;
                        if (null == t) return !1;
                        var i = n.ObjectUtils.removeAccents(e.toString()).toLowerCase(),
                            o = n.ObjectUtils.removeAccents(t.toString()).toLowerCase();
                        return -1 !== o.indexOf(i, o.length - i.length)
                    }, t.equals = function(t, e) {
                        return null == e || "string" == typeof e && "" === e.trim() || null != t && (t.getTime && e.getTime ? t.getTime() === e.getTime() : n.ObjectUtils.removeAccents(t.toString()).toLowerCase() == n.ObjectUtils.removeAccents(e.toString()).toLowerCase())
                    }, t.notEquals = function(t, e) {
                        return !(null == e || "string" == typeof e && "" === e.trim() || null != t && (t.getTime && e.getTime ? t.getTime() === e.getTime() : n.ObjectUtils.removeAccents(t.toString()).toLowerCase() == n.ObjectUtils.removeAccents(e.toString()).toLowerCase()))
                    }, t.in = function(t, e) {
                        if (null == e || 0 === e.length) return !0;
                        if (null == t) return !1;
                        for (var i = 0; i < e.length; i++)
                            if (e[i] === t || t.getTime && e[i].getTime && t.getTime() === e[i].getTime()) return !0;
                        return !1
                    }, t.lt = function(t, e) {
                        return null == e || null != t && (t.getTime && e.getTime ? t.getTime() < e.getTime() : t < e)
                    }, t.lte = function(t, e) {
                        return null == e || null != t && (t.getTime && e.getTime ? t.getTime() <= e.getTime() : t <= e)
                    }, t.gt = function(t, e) {
                        return null == e || null != t && (t.getTime && e.getTime ? t.getTime() > e.getTime() : t > e)
                    }, t.gte = function(t, e) {
                        return null == e || null != t && (t.getTime && e.getTime ? t.getTime() >= e.getTime() : t >= e)
                    }, t
                }();
            e.FilterUtils = o
        }
    }
]);